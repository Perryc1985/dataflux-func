'use strict';

/* Builtin Modules */
var path = require('path');
var URL  = require('url').URL;

/* 3rd-party Modules */
var async         = require('async');
var simpleGit     = require('simple-git');
var yaml          = require('js-yaml');
var fs            = require('fs-extra');
var markdownTable = require('markdown-table');
var stringWidth   = require('string-width');

/* Project Modules */
var E           = require('../utils/serverError');
var CONFIG      = require('../utils/yamlResources').get('CONFIG');
var toolkit     = require('../utils/toolkit');
var modelHelper = require('../utils/modelHelper');

var scriptMarketMod = require('../models/scriptMarketMod');
var scriptSetMod    = require('../models/scriptSetMod');
var scriptMod       = require('../models/scriptMod');

/* Configure */
var AUTO_GENERATION_INFO_TEXT = 'This file is auto generated by DataFlux Func';

var SCRIPT_TYPE_EXT_MAP = {
  python  : 'py',
  markdown: 'md',
};

function _checkScriptMarketAuth(locals, type, auth, requiredFields, optionalFields, callback) {
  // 检查字段
  for (var i = 0; i < requiredFields.length; i++) {
    var f = requiredFields[i];

    if ('undefined' === typeof auth[f]) {
      return callback(new E('EClientBadRequest.InvalidScriptMarketAuthJSON', 'Invalid auth JSON', {
        requiredFields: requiredFields,
        optionalFields: optionalFields,
        missingField  : f,
      }));
    }
  }

  // TODO 尝试连接
  return callback();
};

function _getGitRepoAuthURL(scriptMarket) {
  var auth = scriptMarket.authJSON || {};
  var authURL = new URL(scriptMarket.url);
  authURL.username = auth.username || 'anonymity';
  authURL.password = auth.password || 'anonymity';

  return authURL.toString();
};

function _getGitRepoLocalAbsPath(scriptMarket) {
  var url = new URL(scriptMarket.url);
  var localAbsPath = path.join(
    CONFIG.RESOURCE_ROOT_PATH,
    CONFIG.SCRIPT_MARKET_GIT_REPO_DIR,
    url.host,
    url.pathname.replace(/\.git$/, ''));

  return localAbsPath;
};

function _getToken(scriptMarket) {
  return toolkit.getStringSign(scriptMarket.id);
};

function _getRemoteTokenInfo(scriptMarket) {
  var localPath = _getGitRepoLocalAbsPath(scriptMarket);

  var tokenFilePath = path.join(localPath, CONFIG.SCRIPT_MARKET_TOKEN_FILE);
  var remoteToken   = toolkit.safeReadFileSync(tokenFilePath).trim();

  var info = {
    path : tokenFilePath,
    value: remoteToken,
  }
  return info;
};

function _getScriptFilename(script) {
  var filename = script.id.split('__').slice(1).join('__');
  var fileExt = SCRIPT_TYPE_EXT_MAP[script.type];
  if (fileExt) filename += '.' + fileExt;

  return filename;
};

function _getGitErrDetail(err) {
  var errorMessage = err.toString().trim().split('\n').pop();
  var errDetail = {
    message: errorMessage,
  };
  return errDetail;
};

function _addAutoGeneratedInfo(text, style) {
  var infoLine = '';
  switch(style) {
    case 'html':
    case 'markdown':
      infoLine = `<!-- ${AUTO_GENERATION_INFO_TEXT} -->`;
      break;

    case 'yaml':
    case 'python':
      infoLine = `# ${AUTO_GENERATION_INFO_TEXT}`;
      break;

    default:
      infoLine = AUTO_GENERATION_INFO_TEXT;
      break;
  }
  return [ infoLine, text ].join('\n\n');
};

function _addChangelogInfo(changelogInfo, note) {
  if (toolkit.isNothing(changelogInfo)) {
    changelogInfo = {
      title     : '变更日志 / Changelog',
      changelogs: [],
    }
  }

  changelogInfo.changelogs.push({
    date: toolkit.getDateStringCN(),
    note: note,
  });

  return changelogInfo;
};

function _isAutoGeneratedFileOrNothing(filePath) {
  if (!fs.existsSync(filePath)) return true;

  var text = toolkit.safeReadFileSync(filePath).trim();
  if (toolkit.isNothing(text) || text.split('\n')[0].indexOf(AUTO_GENERATION_INFO_TEXT) >= 0) {
    return true;
  }

  return false;
};

function _getMarkdownTable(body) {
  return markdownTable(body, { stringLength: stringWidth });
};

function _getDefaultScriptMarketReadmeContent(scriptMarket, pushContent) {
  // 脚本市场信息
  var content = [
    `# 脚本市场 / Script Market${scriptMarket.name ? ' - ' + scriptMarket.name : ''}`,
    _getMarkdownTable([
      [ '名称 / Name', '地址 / URL' ],
      [
        `${scriptMarket.name || '-'}`,
        `\`${scriptMarket.url}\``,
      ],
    ]),

    `<br>`,
    `## 1. 描述 / Description`,
    `${toolkit.toMarkdownTextBlock(scriptMarket.description) || '*没有具体描述*<br>*No description*'}`,
  ];

  // 脚本集信息
  if (!toolkit.isNothing(pushContent.scriptSets)) {
    content.push(`<br>`,
                  `## 2. 最近发布 / Last Published`,
                  toolkit.toMarkdownTextBlock(pushContent.note));

    var _table = [
      [ '#', 'ID', '标题 / Title', '目录 / Directory', '发布者 / Author', '发布时间 / Publish Time' ],
    ];
    pushContent.scriptSets.forEach(function(scriptSet, index) {
      _table.push([
        `${index + 1}`,
        `\`${scriptSet.id}\``,
        `${scriptSet.title || '-'}`,
        `[${CONFIG.SCRIPT_EXPORT_SCRIPT_SET_DIR}/${scriptSet.id}](${CONFIG.SCRIPT_EXPORT_SCRIPT_SET_DIR}/${scriptSet.id})`,
        `${pushContent.exportUser}`,
        `${toolkit.getDateTimeStringCN(pushContent.exportTimeMs)}`,
      ])
    });

    content.push(_getMarkdownTable(_table));
  }

  // 脚本集总表
  content.push(`<br>`,
                `## 3. 总览 / Overview`,
                `此脚本市场包含以下脚本集：<br>This Script Market contains the following Scripts Sets:  `);

  var _table = [
    [ '#', 'ID', '标题 / Title', '目录 / Directory', '发布者 / Author', '发布时间 / Publish Time' ],
  ];
  var scriptSets = SCRIPT_MARKET_LIST_ALL_META_DATA_FUNC_MAP[scriptMarket.type](scriptMarket);
  scriptSets.forEach(function(scriptSet, index) {
    _table.push([
      `${index + 1}`,
      `\`${scriptSet.id}\``,
      `${scriptSet.title || '-'}`,
      `[${CONFIG.SCRIPT_EXPORT_SCRIPT_SET_DIR}/${scriptSet.id}](${CONFIG.SCRIPT_EXPORT_SCRIPT_SET_DIR}/${scriptSet.id})`,
      `${pushContent.exportUser}`,
      `${toolkit.getDateTimeStringCN(pushContent.exportTimeMs)}`,
    ]);
  });
  content.push(_getMarkdownTable(_table));

  return _addAutoGeneratedInfo(content.join('\n\n'), 'markdown');
};

function _getDefaultScriptSetReadmeContent(gitLocalPath, scriptSet, pushContent) {
  // 脚本集信息
  var content = [
    `# ${scriptSet.title || scriptSet.id}`,
    _getMarkdownTable([
      [ 'ID', '标题 / Title', '发布者 / Author', '发布时间 / Publish Time' ],
      [
        `\`${scriptSet.id}\``,
        `${scriptSet.title || '-'}`,
        `${pushContent.exportUser}`,
        `${toolkit.getDateTimeStringCN(pushContent.exportTimeMs)}`,
      ],
    ]),

    `<br>`,
    `## 1. 描述 / Description`,
    `${toolkit.toMarkdownTextBlock(scriptSet.description) || '*没有具体描述*<br>*No description*'}`,

    `<br>`,
    `## 2. 依赖包 / Dependency`,
    toolkit.isNothing(scriptSet.requirements)
      ? `*不需要任何依赖包*<br>*No dependency required*`
      : `~~~text\n${scriptSet.requirements.trim()}\n~~~`,
  ];

  if (!toolkit.isNothing(scriptSet.scripts)) {
    // 脚本信息
    content.push(`<br>`,
                  `## 3. 脚本 / Scripts`,
                  `此脚本集包含以下脚本：<br>This Script Set contains the following Scripts:  `);

    var _table = [
      [ '#', 'ID', '标题 / Title', '行数 / Lines', '更新时间 / Update Time' ],
    ];
    var codeLines = 0;
    scriptSet.scripts.forEach(function(s, index) {
      var lines = 0;
      if ('string' === typeof s.code) {
        lines = s.code.split('\n').length;
        codeLines += lines;
      }

      var filename = _getScriptFilename(s);
      _table.push([
        `${index + 1}`,
        `[\`${s.id}\`](${filename})`,
        `${s.title || '-'}`,
        lines,
        `${toolkit.getDateTimeStringCN(s.updateTime)}`,
      ]);
    });
    content.push(_getMarkdownTable(_table));

    // 统计
    content.push(`<br>`,
                  `## 4. 统计 / Statistics`,
                  `此脚本集统计信息如下：<br>The statistics of this Script Set are as follows:   `);

    content.push(_getMarkdownTable([
      [ '项目 / Item', '结果 / Result' ],
      [ '脚本数量 / Script Count', scriptSet.scripts.length ],
      [ '脚本总行数 / Total Lines', codeLines ],
    ]));
  }

  return _addAutoGeneratedInfo(content.join('\n\n'), 'markdown');
};

function _getDefaultScriptSetChangelogContent(changelogInfo) {
  var content = [
    `# ${changelogInfo.title}`,
  ]
  for (var i = changelogInfo.changelogs.length - 1; i >= 0; i--) {
    var changelog = changelogInfo.changelogs[i];

    content.push(`<br>`,
                  `## ${changelog.date}`);
    content.push(toolkit.toMarkdownTextBlock(changelog.note));
  };

  return _addAutoGeneratedInfo(content.join('\n\n'), 'markdown');
};

function _prepareGitRepo(git, callback) {
  var prevCommitId = null;
  async.series([
    // 获取 Commit ID
    function(asyncCallback) {
      git.revparse(['HEAD'], function(err, commitId) {
        prevCommitId = commitId || null;

        // 忽略空库报错
        return asyncCallback();
      })
    },
    // git reset
    function(asyncCallback) {
      git.reset(simpleGit.ResetMode.HARD, asyncCallback);
    },
    // git clean
    function(asyncCallback) {
      git.clean(simpleGit.CleanOptions.FORCE, asyncCallback);
    },
    // git pull
    function(asyncCallback) {
      if (!prevCommitId) return asyncCallback();

      git.pull(asyncCallback);
    },
  ], function(err) {
    if (err) return callback(err);
    return callback(null, prevCommitId);
  });
};

function _syncToGitRepo(git, author, note, callback) {
  async.series([
    // git add
    function(asyncCallback) {
      git.add('.', asyncCallback);
    },
    // git commit
    function(asyncCallback) {
      var opt = {};
      if (author && author.name && author.email) {
        opt['--author'] = `"${author.name} <${author.email}>"`;
      }
      git.commit(note, opt, asyncCallback);
    },
    // git push / reset
    function(asyncCallback) {
      git.push(function(err) {
        if (err) {
          return git.raw(['reset', '--hard', prevCommitId], function() {
            // 保证错误依旧抛出
            return asyncCallback(err);
          })
        }

        return asyncCallback();
      });
    },
  ], callback);
};

var SCRIPT_MARKET_CHECK_AUTH_FUNC_MAP = {
  git: function(locals, auth, callback) {
    var REQUIRED_FIELDS = [];
    var OPTIONAL_FIELDS = ['username', 'password'];

    return _checkScriptMarketAuth(locals, 'git', auth, REQUIRED_FIELDS, OPTIONAL_FIELDS, callback);
  },
  aliyun_oss: function(locals, auth, callback) {
    var REQUIRED_FIELDS = [];
    var OPTIONAL_FIELDS = ['accessKeyId', 'accessKeySecret'];

    return _checkScriptMarketAuth(locals, 'aliyun_oss', auth, REQUIRED_FIELDS, OPTIONAL_FIELDS, callback);
  },
};

// 脚本市场 - 获取所有 META
var SCRIPT_MARKET_LIST_ALL_META_DATA_FUNC_MAP = {
  git: function(scriptMarket) {
    var localPath = _getGitRepoLocalAbsPath(scriptMarket);
    var allMetaData  = [];

    var scriptSetBaseDir = path.join(localPath, CONFIG.SCRIPT_EXPORT_SCRIPT_SET_DIR);

    fs.readdirSync(scriptSetBaseDir, { withFileTypes: true }).forEach(function(d) {
      // 忽略非目录
      if (!d.isDirectory()) return;

      // 忽略不包含 META 信息的目录
      var metaFilePath = path.join(scriptSetBaseDir, d.name, CONFIG.SCRIPT_EXPORT_META_FILE);
      var metaData     = toolkit.safeReadFileSync(metaFilePath, 'yaml');

      if (metaData && metaData.scriptSet) {
        allMetaData.push(metaData.scriptSet);
      }
    });

    return allMetaData;
  },
  aliyun_oss: function(scriptMarket) {
    throw new E('ENotImplemented', 'This type of Script Market is not Implemented.');
  },
};

// 脚本市场 - 列出脚本集
var SCRIPT_MARKET_LIST_SCRIPT_SETS_FUNC_MAP = {
  git: function(locals, scriptMarket, callback) {
    var localPath  = _getGitRepoLocalAbsPath(scriptMarket);
    var scriptSets = null;

    // 操作 git
    var git = simpleGit({ baseDir: localPath });
    async.series([
      // 准备 Git 库
      function(asyncCallback) {
        _prepareGitRepo(git, asyncCallback);
      },
      function(asyncCallback) {
        try {
          scriptSets = SCRIPT_MARKET_LIST_ALL_META_DATA_FUNC_MAP[scriptMarket.type](scriptMarket);
          return asyncCallback();
        } catch(err) {
          return asyncCallback(err);
        }
      },
    ], function(err) {
      if (err) return callback(err);
      return callback(null, scriptSets);
    });
  },
  aliyun_oss: function(locals, scriptMarket, callback) {
    return callback(new E('ENotImplemented', 'This type of Script Market is not Implemented.'));
  },
};

// 脚本市场 - 加载
var SCRIPT_MARKET_LOAD_FUNC_MAP = {
  git: function(locals, scriptMarket, callback) {
    var gitURL    = _getGitRepoAuthURL(scriptMarket);
    var localPath = _getGitRepoLocalAbsPath(scriptMarket);

    // 清理目录
    fs.emptyDirSync(localPath);

    // 操作 git
    var git = simpleGit({ baseDir: localPath })
    async.series([
      // git clone
      function(asyncCallback) {
        var opt = {
          '--depth': 1,
        };
        if (scriptMarket.gitBranch) {
          opt['--branch'] = scriptMarket.gitBranch;
        }

        git.clone(gitURL, localPath, opt, function(err) {
          if (err) {
            var errDetail = _getGitErrDetail(err);
            if (errDetail.message.indexOf('--depth=1') >= 0) {
              // 空库，重新尝试
              delete opt['--depth'];
              return git.clone(gitURL, localPath, opt, asyncCallback);

            } else {
              // 非空库，直接中断
              return asyncCallback(err);
            }
          }

          return asyncCallback();
        });
      },
    ], callback);
  },
  aliyun_oss: function(locals, scriptMarket, callback) {
    return callback(new E('ENotImplemented', 'This type of Script Market is not Implemented.'));
  },
};

// 脚本市场 - 设置所有权
var SCRIPT_MARKET_SET_OWNER_FUNC_MAP = {
  git: function(locals, scriptMarket, callback) {
    var token     = _getToken(scriptMarket);
    var localPath = _getGitRepoLocalAbsPath(scriptMarket);

    // 操作 git
    var git = simpleGit({ baseDir: localPath });
    async.series([
      // 准备 Git 库
      function(asyncCallback) {
        _prepareGitRepo(git, asyncCallback);
      },
      // 检查并修改 Token
      function(asyncCallback) {
        var remoteTokenInfo = _getRemoteTokenInfo(scriptMarket);

        if (!remoteTokenInfo.value) {
          // 尚未确定所有者，写入 Token
          return fs.outputFile(remoteTokenInfo.path, token, asyncCallback);

        } else if (remoteTokenInfo.value === token) {
          // 已经获得所有权，中断处理
          return callback();

        } else {
          // 所有权已被其他 DataFlux Func 占据
          return asyncCallback(new E('EClient', 'The Script Market is not owned by current DataFlux Func'));
        }
      },
      // 同步至 Git
      function(asyncCallback) {
        _syncToGitRepo(git, null, 'Set Token', asyncCallback);
      },
    ], callback);
  },
  aliyun_oss: function(locals, scriptMarket, callback) {
    return callback(new E('ENotImplemented', 'This type of Script Market is not Implemented.'));
  },
};

// 脚本市场 - 放弃所有权
var SCRIPT_MARKET_UNSET_OWNER_FUNC_MAP = {
  git: function(locals, scriptMarket, callback) {
    var token     = _getToken(scriptMarket);
    var localPath = _getGitRepoLocalAbsPath(scriptMarket);

    // 操作 git
    var git = simpleGit({ baseDir: localPath });
    async.series([
      // 准备 Git 库
      function(asyncCallback) {
        _prepareGitRepo(git, asyncCallback);
      },
      // 检查并修改 Token
      function(asyncCallback) {
        var remoteTokenInfo = _getRemoteTokenInfo(scriptMarket);

        // 尚未获得所有权，中断处理
        if (!remoteTokenInfo.value || remoteTokenInfo.value !== token) return callback();

        // 已经获得所有权，删除 Token
        return fs.remove(remoteTokenInfo.path, asyncCallback);
      },
      // 同步至 Git
      function(asyncCallback) {
        _syncToGitRepo(git, null, 'Unset Token', asyncCallback);
      },
    ], callback);
  },
  aliyun_oss: function(locals, scriptMarket, callback) {
    return callback(new E('ENotImplemented', 'This type of Script Market is not Implemented.'));
  },
};

// 脚本市场 - 推送脚本集
var SCRIPT_MARKET_PUSH_FUNC_MAP = {
  git: function(locals, scriptMarket, pushContent, author, note, callback) {
    if (toolkit.isNothing(pushContent)) {
      return callback(new E('EClient', 'Nothing to push'));
    }

    var token     = _getToken(scriptMarket);
    var localPath = _getGitRepoLocalAbsPath(scriptMarket);

    // 操作 git
    var git = simpleGit({ baseDir: localPath });
    async.series([
      // 准备 Git 库
      function(asyncCallback) {
        _prepareGitRepo(git, asyncCallback);
      },
      // 检查 Token
      function(asyncCallback) {
        var remoteTokenInfo = _getRemoteTokenInfo(scriptMarket);

        // 所有权已被其他 DataFlux Func 占据
        if (!remoteTokenInfo.value || remoteTokenInfo.value !== token) {
          return asyncCallback(new E('EClient', 'The Script Market is not owned by current DataFlux Func'));
        }

        return asyncCallback();
      },
      // 写入待推送文件
      function(asyncCallback) {
        try {
          // 写入脚本市场 README 文件
          var scriptMarketReadmeFilePath = path.join(localPath, CONFIG.SCRIPT_EXPORT_README_FILE);
          if (_isAutoGeneratedFileOrNothing(scriptMarketReadmeFilePath)) {
            var scriptMarketReadmeData = _getDefaultScriptMarketReadmeContent(pushContent.scriptMarket, pushContent);
            fs.outputFileSync(scriptMarketReadmeFilePath, scriptMarketReadmeData);
          }

          // 遍历写入脚本集 / 脚本集
          pushContent.scriptSets.forEach(function(scriptSet) {
            var scriptSetBaseDir = path.join(localPath, CONFIG.SCRIPT_EXPORT_SCRIPT_SET_DIR);
            var scriptSetDir     = path.join(scriptSetBaseDir, scriptSet.id);

            // 生成脚本集 README
            var scriptSetReadmeFilePath = path.join(scriptSetDir, CONFIG.SCRIPT_EXPORT_README_FILE);
            var scriptSetReadmeData = _isAutoGeneratedFileOrNothing(scriptSetReadmeFilePath)
                                    ? _getDefaultScriptSetReadmeContent(localPath, scriptSet, pushContent)
                                    : toolkit.safeReadFileSync(scriptSetReadmeFilePath);

            // 生成脚本集 CHANGELOG 信息
            var scriptSetChangelogInfoFilePath = path.join(scriptSetDir, CONFIG.SCRIPT_MARKET_CHANGELOG_INFO_FILE);
            var changelogInfoData = toolkit.safeReadFileSync(scriptSetChangelogInfoFilePath, 'yaml');
            changelogInfoData = _addChangelogInfo(changelogInfoData, note);

            var scriptSetChangelogFilePath = path.join(scriptSetDir, CONFIG.SCRIPT_MARKET_CHANGELOG_FILE);
            var scriptSetChangelogData = _isAutoGeneratedFileOrNothing(scriptSetChangelogFilePath)
                                    ? _getDefaultScriptSetChangelogContent(changelogInfoData)
                                    : toolkit.safeReadFileSync(scriptSetChangelogFilePath);

            // 准备脚本集文件夹
            fs.emptyDirSync(scriptSetDir);

            // 写入 README
            fs.outputFileSync(scriptSetReadmeFilePath, scriptSetReadmeData);

            // 写入 CHANGELOG
            fs.outputFileSync(scriptSetChangelogInfoFilePath, _addAutoGeneratedInfo(yaml.dump(changelogInfoData), 'yaml'));
            fs.outputFileSync(scriptSetChangelogFilePath, scriptSetChangelogData);

            // 生成 META 内容
            var metaData = {
              note        : pushContent.note,
              exportUser  : pushContent.exportUser,
              exportTimeMs: pushContent.exportTimeMs,
              scriptSet   : toolkit.jsonCopy(scriptSet),
            };

            // 写入脚本文件
            metaData.scriptSet.scripts.forEach(function(script) {
              var filePath = path.join(scriptSetDir, _getScriptFilename(script));
              fs.outputFileSync(filePath, script.code || '');

              // 去除 META 中代码
              delete script.code;
            });

            // 写入 META 信息
            var metaFilePath = path.join(scriptSetDir, CONFIG.SCRIPT_EXPORT_META_FILE);
            var metaFileText = _addAutoGeneratedInfo(yaml.dump(metaData), 'yaml');
            fs.outputFileSync(metaFilePath, metaFileText);
          });

          return asyncCallback();

        } catch(err) {
          return asyncCallback(err);
        }
      },
      // 同步至 Git
      function(asyncCallback) {
        _syncToGitRepo(git, author, note, asyncCallback);
      },
    ], callback);
  },
  aliyun_oss: function(locals, scriptMarket, scriptSets, note, callback) {
    return callback(new E('ENotImplemented', 'This type of Script Market is not Implemented.'));
  },
};

// 脚本市场 - 拉取脚本集
var SCRIPT_MARKET_PULL_FUNC_MAP = {
  git: function(locals, scriptMarket, pullScriptSetIds, callback) {
    if (toolkit.isNothing(pullScriptSetIds)) {
      return callback(new E('EClient', 'Nothing to pull'));
    }

    var localPath = _getGitRepoLocalAbsPath(scriptMarket);

    var pullContent = {
      scriptSets: [],
    };

    // 操作 git
    var git = simpleGit({ baseDir: localPath });
    async.series([
      // 准备 Git 库
      function(asyncCallback) {
        _prepareGitRepo(git, asyncCallback);
      },
      // 拉取脚本集信息
      function(asyncCallback) {
        pullScriptSetIds.forEach(function(scriptSetId) {
          var scriptSetBaseDir = path.join(localPath, CONFIG.SCRIPT_EXPORT_SCRIPT_SET_DIR);
          var scriptSetDir     = path.join(scriptSetBaseDir, scriptSetId);

          // 获取 META 信息
          var metaFilePath = path.join(scriptSetDir, CONFIG.SCRIPT_EXPORT_META_FILE);
          var metaData     = toolkit.safeReadFileSync(metaFilePath, 'yaml');
          if (!metaData || !metaData.scriptSet || !Array.isArray(metaData.scriptSet.scripts)) return;

          // 读取代码
          metaData.scriptSet.scripts.forEach(function(script) {
            var codeFilePath = path.join(scriptSetDir, _getScriptFilename(script));
            script.code = toolkit.safeReadFileSync(codeFilePath);
          });

          pullContent.scriptSets.push(metaData.scriptSet);
        });

        return asyncCallback();
      },
    ], function(err) {
      if (err) return callback(err);
      return callback(null, pullContent);
    });
  },
  aliyun_oss: function(locals, scriptMarket, pullScriptSetIds, callback) {
    return callback(new E('ENotImplemented', 'This type of Script Market is not Implemented.'));
  },
};

/* Handlers */
var crudHandler = exports.crudHandler = scriptMarketMod.createCRUDHandler();

exports.list = crudHandler.createListHandler();

exports.add = function(req, res, next) {
  var data = req.body.data;

  var scriptMarketModel = scriptMarketMod.createModel(res.locals);

  var newScriptMarket = null;

  async.series([
    // 检查 URL 重复
    function(asyncCallback) {
      var opt = {
        limit  : 1,
        fields : ['smkt.url'],
        filters: {
          'smkt.url': {eq: data.url},
        },
      };
      scriptMarketModel.list(opt, function(err, dbRes) {
        if (err) return asyncCallback(err);

        if (dbRes.length > 0) {
          return asyncCallback(new E('EBizCondition.DuplicatedScriptMarketURL', 'URL of Script Market already exists'));
        }

        return asyncCallback();
      });
    },
    // 检查脚本市场配置
    function(asyncCallback) {
      if (toolkit.isNothing(data.authJSON)) return asyncCallback();

      SCRIPT_MARKET_CHECK_AUTH_FUNC_MAP[data.type](res.locals, data.authJSON, asyncCallback);
    },
    // 加载脚本市场
    function(asyncCallback) {
      SCRIPT_MARKET_LOAD_FUNC_MAP[data.type](req.locals, data, asyncCallback);
    },
    // 尝试获取所有权
    function(asyncCallback) {
      SCRIPT_MARKET_SET_OWNER_FUNC_MAP[data.type](req.locals, data, function(err, _publishToken) {
        // 出错表示无法获取所有权，跳过
        if (err) res.locals.logger.error(err.toString());

        return asyncCallback();
      });
    },
    // 数据入库
    function(asyncCallback) {
      scriptMarketModel.add(data, function(err, _addedId, _addedData) {
        if (err) return asyncCallback(err);

        newScriptMarket = _addedData;

        return asyncCallback();
      });
    },
  ], function(err) {
    if (err) return next(err);

    var ret = toolkit.initRet({
      id: newScriptMarket.id,
    });
    return res.locals.sendJSON(ret);
  });
};

exports.modify = function(req, res, next) {
  var id   = req.params.id;
  var data = req.body.data;

  var scriptMarketModel = scriptMarketMod.createModel(res.locals);

  var scriptMarket = null;

  async.series([
    // 获取脚本市场
    function(asyncCallback) {
      scriptMarketModel.getWithCheck(id, null, function(err, dbRes) {
        if (err) return asyncCallback(err);

        scriptMarket = dbRes;

        return asyncCallback();
      });
    },
    // 检查脚本市场配置
    function(asyncCallback) {
      if (toolkit.isNothing(data.authJSON)) return asyncCallback();

      SCRIPT_MARKET_CHECK_AUTH_FUNC_MAP[scriptMarket.type](res.locals, data.authJSON, asyncCallback);
    },
    // 加载脚本市场
    function(asyncCallback) {
      SCRIPT_MARKET_LOAD_FUNC_MAP[scriptMarket.type](req.locals, scriptMarket, asyncCallback);
    },
    // 数据入库
    function(asyncCallback) {
      scriptMarketModel.modify(id, data, asyncCallback);
    },
  ], function(err) {
    if (err) return next(err);

    var ret = toolkit.initRet({
      id: id,
    });
    return res.locals.sendJSON(ret);
  });
};

exports.delete = function(req, res, next) {
  var id = req.params.id;

  var scriptMarketModel = scriptMarketMod.createModel(res.locals);

  var scriptMarket = null;

  async.series([
    // 获取脚本市场
    function(asyncCallback) {
      scriptMarketModel.getWithCheck(id, null, function(err, dbRes) {
        if (err) return asyncCallback(err);

        scriptMarket = dbRes;

        return asyncCallback();
      });
    },
    // 放弃所有权
    function(asyncCallback) {
      if (!scriptMarket.publishToken) return asyncCallback();

      SCRIPT_MARKET_UNSET_OWNER_FUNC_MAP[scriptMarket.type](req.locals, scriptMarket, asyncCallback);
    },
    // 数据入库
    function(asyncCallback) {
      scriptMarketModel.delete(id, asyncCallback);
    },
  ], function(err) {
    if (err) return next(err);

    var ret = toolkit.initRet({
      id: id,
    });
    return res.locals.sendJSON(ret);
  });
};

exports.listScriptSets = function(req, res, next) {
  var id = req.params.id;

  var scriptMarketModel = scriptMarketMod.createModel(res.locals);

  var scriptSets   = [];
  var scriptMarket = null;
  async.series([
    // 获取脚本市场
    function(asyncCallback) {
      scriptMarketModel.getWithCheck(id, null, function(err, dbRes) {
        if (err) return asyncCallback(err);

        scriptMarket = dbRes;

        return asyncCallback();
      })
    },
    // 列出脚本市场脚本集
    function(asyncCallback) {
      SCRIPT_MARKET_LIST_SCRIPT_SETS_FUNC_MAP[scriptMarket.type](req.locals, scriptMarket, function(err, _scriptSets) {
        if (err) return asyncCallback(err);

        scriptSets = _scriptSets;

        return asyncCallback();
      });
    },
  ], function(err) {
    if (err) return next(err);

    var ret = toolkit.initRet(scriptSets);
    return res.locals.sendJSON(ret);
  });
};

exports.setOwner = function(req, res, next) {
  var id = req.params.id;

  var scriptMarketModel = scriptMarketMod.createModel(res.locals);

  var scriptMarket = null;
  async.series([
    // 获取脚本市场
    function(asyncCallback) {
      scriptMarketModel.getWithCheck(id, null, function(err, dbRes) {
        if (err) return asyncCallback(err);

        scriptMarket = dbRes;

        return asyncCallback();
      })
    },
    // 获取所有权
    function(asyncCallback) {
      SCRIPT_MARKET_SET_OWNER_FUNC_MAP[scriptMarket.type](req.locals, scriptMarket, asyncCallback);
    },
  ], function(err) {
    if (err) return next(err);

    var ret = toolkit.initRet();
    return res.locals.sendJSON(ret);
  });
};

exports.unsetOwner = function(req, res, next) {
  var id = req.params.id;

  var scriptMarketModel = scriptMarketMod.createModel(res.locals);

  var scriptMarket = null;
  async.series([
    // 获取脚本市场
    function(asyncCallback) {
      scriptMarketModel.getWithCheck(id, null, function(err, dbRes) {
        if (err) return asyncCallback(err);

        scriptMarket = dbRes;

        return asyncCallback();
      })
    },
    // 放弃所有权
    function(asyncCallback) {
      SCRIPT_MARKET_UNSET_OWNER_FUNC_MAP[scriptMarket.type](req.locals, scriptMarket, asyncCallback);
    },
  ], function(err) {
    if (err) return next(err);

    var ret = toolkit.initRet();
    return res.locals.sendJSON(ret);
  });
};

exports.push = function(req, res, next) {
  var id           = req.params.id;
  var scriptSetIds = req.body.scriptSetIds;
  var author       = req.body.author;
  var note         = req.body.note;

  var scriptMarketModel = scriptMarketMod.createModel(res.locals);
  var scriptSetModel    = scriptSetMod.createModel(res.locals);

  var scriptMarket = null;
  var pushContent  = null;

  async.series([
    // 获取脚本市场
    function(asyncCallback) {
      scriptMarketModel.getWithCheck(id, null, function(err, dbRes) {
        if (err) return asyncCallback(err);

        scriptMarket = dbRes;

        return asyncCallback();
      })
    },
    // 获取导出数据
    function(asyncCallback) {
      var opt = {
        scriptSetIds: scriptSetIds,
        note        : note,
      }
      scriptSetModel.getExportData(opt, function(err, exportData, summary) {
        if (err) return asyncCallback(err);

        pushContent = exportData;
        pushContent.scriptMarket = scriptMarket;

        return asyncCallback();
      });
    },
    // 发布脚本集
    function(asyncCallback) {
      SCRIPT_MARKET_PUSH_FUNC_MAP[scriptMarket.type](req.locals, scriptMarket, pushContent, author, note, asyncCallback);
    },
  ], function(err) {
    if (err) return next(err);

    var ret = toolkit.initRet();
    return res.locals.sendJSON(ret);
  });
};

exports.install = function(req, res, next) {
  var id           = req.params.id;
  var scriptSetIds = req.body.scriptSetIds;

  var scriptMarketModel = scriptMarketMod.createModel(res.locals);
  var scriptSetModel    = scriptSetMod.createModel(res.locals);

  var scriptMarket = null;
  var pullContent  = null;
  var requirements = null;

  async.series([
    // 获取脚本市场
    function(asyncCallback) {
      scriptMarketModel.getWithCheck(id, null, function(err, dbRes) {
        if (err) return asyncCallback(err);

        scriptMarket = dbRes;

        return asyncCallback();
      })
    },
    // 获取拉取数据数据
    function(asyncCallback) {
      SCRIPT_MARKET_PULL_FUNC_MAP[scriptMarket.type](req.locals, scriptMarket, scriptSetIds, function(err, _pullContent) {
        if (err) return asyncCallback(err);

        pullContent = _pullContent;

        return asyncCallback();
      });
    },
    // 导入数据
    function(asyncCallback) {
      var recoverPoint = {
        type: 'install',
        note: '系统：安装脚本集前自动创建的还原点',
      };
      scriptSetModel.import(pullContent, recoverPoint, function(err, _requirements) {
        if (err) return asyncCallback(err);

        requirements = _requirements;

        return asyncCallback();
      });
    },
  ], function(err) {
    if (err) return next(err);

    var ret = toolkit.initRet({
      requirements: requirements,
    });
    return res.locals.sendJSON(ret);
  });
};

/* 允许其他模块调用 */
exports._getScriptFilename = _getScriptFilename;