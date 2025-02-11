'use strict';

/* Built-in Modules */
var fs   = require('fs-extra');
var path = require('path');

/* 3rd-party Modules */
var async = require('async');
var LRU   = require('lru-cache');


/* Project Modules */
var E       = require('../utils/serverError');
var CONFIG  = require('../utils/yamlResources').get('CONFIG');
var toolkit = require('../utils/toolkit');

/* Handlers */
exports.listInstalled = function(req, res, next) {
  // Python包安装路径
  var packageInstallPath = path.join(CONFIG.RESOURCE_ROOT_PATH, CONFIG._EXTRA_PYTHON_PACKAGE_INSTALL_DIR);

  var packageVersionMap = {};

  var pipFreezes = [
    { isBuiltin: true,  cmd: 'pip', cmdArgs: [ 'freeze' ] },
    { isBuiltin: false, cmd: 'pip', cmdArgs: [ 'freeze', '--path', packageInstallPath] },
  ]
  async.eachSeries(pipFreezes, function(pipFreeze, asyncCallback) {
    toolkit.childProcessSpawn(pipFreeze.cmd, pipFreeze.cmdArgs, null, function(err, stdout) {
      if (err) return asyncCallback(err);

      stdout.trim().split('\n').forEach(function(pkg) {
        if (toolkit.isNothing(pkg)) return;

        var parts = pkg.split('==');
        packageVersionMap[parts[0]] = {
          name     : parts[0],
          version  : parts[1],
          isBuiltin: pipFreeze.isBuiltin,
        };
      });

      return asyncCallback();
    });
  }, function(err) {
    if (err) return next(err);

    var packages = Object.values(packageVersionMap);
    packages.sort(function(a, b) {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    });

    var ret = toolkit.initRet(packages);
    return res.locals.sendJSON(ret);
  });
};

exports.getInstallStatus = function(req, res, next) {
  var cacheKey = toolkit.getCacheKey('cache', 'pythonPackageInstallStatus');
  res.locals.cacheDB.hgetall(cacheKey, function(err, cacheRes) {
    if (err) return next(err);

    var installStatus = [];
    if (cacheRes) {
      installStatus = Object.values(cacheRes) || [];
      installStatus = installStatus.map(function(x) {
        return JSON.parse(x);
      });

      // 排序
      installStatus = installStatus.sort(function(a, b) {
        if (a.order < b.order) return -1;
        else if (a.order > b.order) return 1;
        else return 0;
      });
    }

    var ret = toolkit.initRet(installStatus);
    return res.locals.sendJSON(ret);
  });
};

exports.clearInstallStatus = function(req, res, next) {
  var cacheKey = toolkit.getCacheKey('cache', 'pythonPackageInstallStatus');
  res.locals.cacheDB.del(cacheKey, function(err) {
    if (err) return next(err);
    return res.locals.sendJSON();
  });
};

exports.install = function(req, res, next) {
  var pipIndexURL = req.body.pipIndexURL;
  var packages    = req.body.packages.trim().split(/\s+/);
  var upgrade     = req.body.upgrade;

  // 安装进度
  var installStatusCacheKey = toolkit.getCacheKey('cache', 'pythonPackageInstallStatus');
  var installStatus         = [];

  // Python 包安装路径
  var packageInstallPath = path.join(CONFIG.RESOURCE_ROOT_PATH, CONFIG._EXTRA_PYTHON_PACKAGE_INSTALL_DIR);
  fs.ensureDirSync(packageInstallPath);

  // 单个包安装处理
  function _installPackage(packageInfo, callback) {
    async.series([
      // 记录安装中状态
      function(asyncCallback) {
        packageInfo.startTimeMs = Date.now();
        packageInfo.status      = 'installing';
        return res.locals.cacheDB.hset(installStatusCacheKey, packageInfo.package, JSON.stringify(packageInfo), asyncCallback);
      },
      // 执行 PIP 命令
      function(asyncCallback) {
        var cmd = 'pip';
        var cmdArgs = [
          'install',
          '--no-cache-dir',
          '--default-timeout', '60',
          '-t', packageInstallPath,
        ];

        // 启用镜像源
        if (toolkit.notNothing(pipIndexURL)) {
          cmdArgs.push('-i', pipIndexURL);
        }

        // 启用 upgrade 标记
        if (upgrade) {
          cmdArgs.push('--upgrade');
        }

        if (toolkit.endsWith(packageInfo.package, '.whl')) {
          // Wheel 包
          var wheelFilePath = path.join(CONFIG.RESOURCE_ROOT_PATH, packageInfo.package);
          cmdArgs.push(wheelFilePath);

        } else {
          // PIP 包
          packageInfo.package.split(',').forEach(function(_pkg) {
            cmdArgs.push(_pkg.trim());
          });
        }

        toolkit.childProcessSpawn(cmd, cmdArgs, null, function(err) {
          if (err) {
            // 安装失败
            return asyncCallback(new E('ESys', 'Install Python package failed', {
              package: packageInfo.package,
              message: err.toString(),
            }));
          }

          return asyncCallback();
        });
      },
    ], function(err) {
      // 等待数秒后记录结果
      setTimeout(function() {
        // 安装状态 / 错误信息
        packageInfo.endTimeMs = Date.now();
        if (err) {
          packageInfo.status = 'failure';
          packageInfo.error = err.detail ? err.detail.message : err.message;
        } else {
          packageInfo.status = 'success';
        }

        return res.locals.cacheDB.hset(installStatusCacheKey, packageInfo.package, JSON.stringify(packageInfo), callback);
      }, 1 * 1000);
    });
  }

  async.series([
    // 检查 / 清理安装状态信息
    function(asyncCallback) {
      res.locals.cacheDB.hgetall(installStatusCacheKey, function(err, cacheRes) {
        if (err) return asyncCallback(err);

        var waitingPackages = [];
        if (cacheRes) {
          waitingPackages = Object.values(cacheRes) || [];
          waitingPackages = waitingPackages.filter(function(packageInfo) {
            if ('string' === typeof packageInfo) {
              packageInfo = JSON.parse(packageInfo);
            }

            return packageInfo.status === 'waiting';
          });
        }

        if (waitingPackages.length > 0) {
          // 之前的安装仍在进行
          return asyncCallback(new E('EBizRequestConflict', 'Previous Python package installing is not finished.'));

        } else {
          // 清理安装状态缓存
          return res.locals.cacheDB.del(installStatusCacheKey, asyncCallback);
        }
      });
    },
    // 初始化安装状态
    function(asyncCallback) {
      installStatus = packages.map(function(pkg, i) {
        var packageInfo = {
          order      : i,
          package    : pkg,
          status     : 'waiting',
          startTimeMs: null,
          endTimeMs  : null,
          error      : null,
        };
        return packageInfo;
      });

      var installStatusForCache = installStatus.reduce(function(acc, x) {
        acc[x.package] = JSON.stringify(x);
        return acc;
      }, {});

      return res.locals.cacheDB.hmset(installStatusCacheKey, installStatusForCache, asyncCallback);
    },
  ], function(err) {
    if (err) return next(err);

    // 执行安装
    async.eachSeries(installStatus, _installPackage);

    res.locals.sendJSON();
  });
};
