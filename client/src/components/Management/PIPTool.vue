<i18n locale="en" lang="yaml">
installCost: (Cost {n} s)
</i18n>
<i18n locale="zh-CN" lang="yaml">
PIP Tool                         : PIP 工具
Custom PIP Index URL             : 自定义 PIP Index URL
Add --upgrade option             : 添加 --upgrade 选项
Install Python Package           : 安装 Python 包
Installed Python Packages        : 已安装的 Python 包
Package                          : 包
Version                          : 版本
Built-in                         : 内置
Exactly match                    : 完全匹配
Load Installed Python Packages   : 加载已安装的 Python 包列表
Loading Installed Python Packages: 正在加载已安装的 Python 包列表
Show Error                       : 显示错误信息
Reset Install Status             : 复位安装状态

package or package==1.2.3 : package 或 package==1.2.3
'Package installed: {pkg}': 包已安装：{pkg}
'{Func Container ID}'     : Func 容器 ID

You can also install the package by following command: 您也可以使用以下命令来安装
Previous installing may still running                : 之前的安装似乎仍然在运行
Are you sure you want to install the package now?    : 是否确定现在就安装？

installCost: （耗时 {n} 秒）
</i18n>

<!-- Generated by OpenCC START -->
<i18n locale="zh-HK" lang="yaml">
Add --upgrade option: 添加 --upgrade 選項
Are you sure you want to install the package now?: 是否確定現在就安裝？
Built-in: 內置
Custom PIP Index URL: 自定義 PIP Index URL
Exactly match: 完全匹配
Install Python Package: 安裝 Python 包
Installed Python Packages: 已安裝的 Python 包
Load Installed Python Packages: 加載已安裝的 Python 包列表
Loading Installed Python Packages: 正在加載已安裝的 Python 包列表
PIP Tool: PIP 工具
Package: 包
'Package installed: {pkg}': 包已安裝：{pkg}
Previous installing may still running: 之前的安裝似乎仍然在運行
Reset Install Status: 復位安裝狀態
Show Error: 顯示錯誤信息
Version: 版本
You can also install the package by following command: 您也可以使用以下命令來安裝
installCost: （耗時 {n} 秒）
package or package==1.2.3: package 或 package==1.2.3
'{Func Container ID}': Func 容器 ID
</i18n>
<i18n locale="zh-TW" lang="yaml">
Add --upgrade option: 新增 --upgrade 選項
Are you sure you want to install the package now?: 是否確定現在就安裝？
Built-in: 內建
Custom PIP Index URL: 自定義 PIP Index URL
Exactly match: 完全匹配
Install Python Package: 安裝 Python 包
Installed Python Packages: 已安裝的 Python 包
Load Installed Python Packages: 載入已安裝的 Python 包列表
Loading Installed Python Packages: 正在載入已安裝的 Python 包列表
PIP Tool: PIP 工具
Package: 包
'Package installed: {pkg}': 包已安裝：{pkg}
Previous installing may still running: 之前的安裝似乎仍然在執行
Reset Install Status: 復位安裝狀態
Show Error: 顯示錯誤資訊
Version: 版本
You can also install the package by following command: 您也可以使用以下命令來安裝
installCost: （耗時 {n} 秒）
package or package==1.2.3: package 或 package==1.2.3
'{Func Container ID}': Func 容器 ID
</i18n>
<!-- Generated by OpenCC END -->

<template>
  <transition name="fade">
    <el-container direction="vertical" v-show="$store.state.isLoaded">
      <!-- 标题区 -->
      <el-header height="60px">
        <h1>{{ $t('PIP Tool') }}</h1>
      </el-header>

      <!-- 列表区 -->
      <el-main>
        <el-divider content-position="left"><h1>{{ $t('Install Python Package') }}</h1></el-divider>

        <el-select
          style="width: 235px"
          v-model="mirror">
          <el-option v-for="mirror in C.PIP_MIRROR" :label="mirror.name" :key="mirror.key" :value="mirror.key"></el-option>
          <el-option :label="$t('Custom PIP Index URL')" value="custom"></el-option>
        </el-select>
        <template v-if="mirror === 'custom'" placeholder="https://pypi.YOUR-PIP-MIRROR.com/simple/">
          <el-input
            style="width: 500px; margin-bottom: 5px;"
            v-model="customPIPIndexURL">
          </el-input>
          <br>
        </template>
        <el-input :placeholder="$t('package or package==1.2.3')"
          :style="mirror === 'custom' ? 'width: 740px' : 'width: 500px'"
          v-model="packageToInstall">
        </el-input>
        <el-button type="primary" @click="installPackages" :disabled="!isInstallable">
          <span v-if="isInstalling">
            <i class="fa fa-fw fa-circle-o-notch fa-spin"></i>
            {{ $t('Installing') }}
          </span>
          <span v-else>
            {{ $t('Install') }}
          </span>
        </el-button>

        <template v-if="isInstallable">
          <div class="pip-install-option">
            <el-switch
              v-model="addUpgradeOption"
              :active-text="$t('Add --upgrade option')">
            </el-switch>
          </div>

          <br>
          <div class="pip-install-tips">
            <p>
              {{ $t('You can also install the package by following command') }}{{ $t(':') }}
            </p>
            <el-row :gutter="20">
              <el-col :span="22">
                <el-input
                  type="textarea"
                  autosize
                  resize="none"
                  :value="getPIPCommand({ pretty: true })">
                </el-input>
              </el-col>
              <el-col :span="2">
                <CopyButton :content="getPIPCommand()" tip-placement="right" />
              </el-col>
            </el-row>
          </div>
        </template>

        <el-divider content-position="left"><h1>{{ $t('Installed Python Packages') }}</h1></el-divider>

        <div>
          <el-link type="primary" @click="loadInstalledPackages" :disabled="isLoadingInstalldPackages">
            <span v-if="isLoadingInstalldPackages">
              <i class="fa fa-fw fa-circle-o-notch fa-spin"></i>
              {{ $t('Loading Installed Python Packages') }}
            </span>
            <span v-else>{{ $t('Load Installed Python Packages') }}</span>
          </el-link>
        </div>

        <br>
        <el-table class="common-table" :data="installedPackages" v-if="installedPackages.length > 0">
          <el-table-column :label="$t('Package')" sortable sort-by="name">
            <template slot-scope="scope">
              <code>{{ scope.row.name }}</code>
            </template>
          </el-table-column>

          <el-table-column :label="$t('Version')">
            <template slot-scope="scope">
              <code>{{ scope.row.version }}</code>
            </template>
          </el-table-column>

          <el-table-column :label="$t('Built-in')" align="center" sortable sort-by="isBuiltin" width="100">
            <template slot-scope="scope">
              <span class="text-good" v-if="scope.row.isBuiltin">{{ $t('Yes') }}</span>
            </template>
          </el-table-column>
        </el-table>
      </el-main>

      <el-dialog
        :visible.sync="showInstallStatus"
        width="650px">
        <template slot="title">
          {{ $t('Install Python Package') }}
          <span class="text-info press-esc-to-close-tip">{{ $t('Press ESC to close') }}</span>
        </template>
        <div class="installing-dialog-content">
          <div v-for="info in installStatus" class="install-list-item">
            <div :class="(INSTALL_ITEM_STATUS[info.status] || {}).text">
              <i class="fa fa-fw" :class="(INSTALL_ITEM_STATUS[info.status] || {}).icon"></i>
              <template v-for="pkg in info.package.split(',')">
                <code>{{ pkg }}</code>
              </template>
            </div>

            <div>
              <small class="text-info install-cost">
                <template v-if="info.startTimeMs && info.endTimeMs">
                  {{ $tc('installCost', ((info.endTimeMs - info.startTimeMs) / 1000).toFixed(2)) }}
                </template>
                <template v-if="info.startTimeMs && !info.endTimeMs">
                  {{ $tc('installCost', ((nowMs - info.startTimeMs) / 1000).toFixed(2)) }}
                </template>
              </small>
              <el-button type="text" v-if="info.error" @click="showError(info.error)">{{ $t('Show Error') }}</el-button>
            </div>
          </div>
        </div>
        <div slot="footer">
          <el-dropdown split-button v-if="isInstalling" @click="showInstallStatus = false" @command="clearInstallStatus">
            {{ $t('Close') }}
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>{{ $t('Reset Install Status') }}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-button v-else type="primary" @click="clearInstallStatus">{{ $t('Finish') }}</el-button>
        </div>
      </el-dialog>

      <LongTextDialog ref="longTextDialog" />
    </el-container>
  </transition>
</template>

<script>
import LongTextDialog from '@/components/LongTextDialog'

export default {
  name: 'PIPTool',
  components: {
    LongTextDialog,
  },
  watch: {
    $route: {
      immediate: true,
      async handler(to, from) {
        await this.loadData();
      }
    },
  },
  methods: {
    getPIPCommand(opt) {
      if (!this.isInstallable) return null;

      opt = opt || {};
      let containerId = this.$store.getters.SYSTEM_INFO('_HOSTNAME') || this.$t('{Func Container ID}');
      let targetOpt   = `-t ${this.$store.getters.SYSTEM_INFO('_PIP_INSTALL_DIR')}`;

      let joinSep = ' ';
      if (opt.pretty) {
        joinSep = ' \\\n  ';
      }

      let cmdParts = [
        `sudo docker exec ${containerId}`,
        `pip install`,
        targetOpt,
      ]

      if (this.mirror) {
        cmdParts.push(`-i ${this.pipIndexURL}`);
      }

      if (this.addUpgradeOption) {
        cmdParts.push(`--upgrade`);
      }

      cmdParts.push(`${this.packageToInstall.replaceAll(',', ' ').trim().split(/\s+/).join(joinSep)}`);

      let cmd = cmdParts.join(joinSep).replace(/\s+/, ' ').trim();
      return cmd;
    },
    async loadData() {
      this.mirror = this.C.PIP_MIRROR_DEFAULT.key;

      await this.updateInstallStatus();

      this.$store.commit('updateLoadStatus', true);

      // 弹出当前安装状态
      setTimeout(() => {
        if (this.installStatus.length > 0) {
          this.showInstallStatus = true;
        }
      }, 500);
    },
    async loadInstalledPackages() {
      this.isLoadingInstalldPackages = true;
      this.installedPackages = [];

      let apiRes = await this.T.callAPI_get('/api/v1/python-packages/installed/do/list');
      this.isLoadingInstalldPackages = false;

      if (!apiRes || !apiRes.ok) return;

      this.installedPackages = apiRes.data;
    },
    async installPackages() {
      // 正在安装时，弹出状态框
      if (this.isInstalling) {
        this.showInstallStatus = true;
        return;
      }

      // 正常启动安装
      let apiRes = await this.T.callAPI('post', '/api/v1/python-packages/do/install', {
        body: {
          pipIndexURL: this.pipIndexURL,
          packages   : this.packageToInstall,
          upgrade    : this.addUpgradeOption,
        },
      });
      if (!apiRes || !apiRes.ok) return;

      await this.updateInstallStatus();

      this.showInstallStatus = true;
    },
    async updateInstallStatus() {
      let apiRes = await this.T.callAPI_get('/api/v1/python-packages/install-status/do/get');
      if (!apiRes || !apiRes.ok) return;

      this.installStatus = apiRes.data;
    },
    async clearInstallStatus() {
      let apiRes = await this.T.callAPI_get('/api/v1/python-packages/install-status/do/clear');
      if (!apiRes || !apiRes.ok) return;

      this.showInstallStatus = false;
      this.installStatus = [];
    },
    showError(error) {
      this.$refs.longTextDialog.update(error);
    },
  },
  computed: {
    INSTALL_ITEM_STATUS() {
      return {
        success: {
          text: 'text-good',
          icon: 'fa-check-circle',
        },
        failure: {
          text: 'text-bad',
          icon: 'fa-times-circle',
        },
        installing: {
          text: 'text-main',
          icon: 'fa-circle-o-notch fa-spin'
        }
      }
    },
    pipIndexURL() {
      let pipIndexURL = this.mirror === 'custom' ? this.customPIPIndexURL : this.C.PIP_MIRROR_MAP.get(this.mirror).value;
      return pipIndexURL;
    },
    isInstallable() {
      // 检查空内容
      if (this.T.isNothing(this.packageToInstall)) {
        return false;
      }

      return true;
    },
    isInstalling() {
      let notFinishedCount = this.installStatus.filter(x => {
        return x.status !== 'success' && x.status !== 'failure';
      }).length;

      return notFinishedCount > 0;
    },
  },
  props: {
  },
  data() {
    return {
      mirror           : '',
      customPIPIndexURL: 'https://pypi.YOUR-PIP-MIRROR.com/simple/',
      packageToInstall : '',
      addUpgradeOption : true,

      showInstallStatus: false,
      nowMs            : Date.now(),
      installStatus    : [],
      installedPackages: [],

      isLoadingInstalldPackages: false,

      autoUpdateInstallStatusTimer: null,
      autoUpdateNowMsTimer        : null,
    }
  },
  mounted() {
    // 加载跳转时附带信息
    let requirements = this.$route.query.requirements;
    if (requirements) {
      this.packageToInstall = this.T.fromBase64(requirements);
    }

    // 定时更新安装状态
    this.autoUpdateInstallStatusTimer = setInterval(() => {
      this.updateInstallStatus();
    }, 3 * 1000);

    // 定时更新当前时间
    this.autoUpdateNowMsTimer = setInterval(() => {
      this.nowMs = Date.now();
    }, 1 * 500);
  },
  beforeDestroy() {
    if (this.autoUpdateInstallStatusTimer) clearInterval(this.autoUpdateInstallStatusTimer);
    if (this.autoUpdateNowMsTimer)         clearInterval(this.autoUpdateNowMsTimer);
  },
}
</script>

<style scoped>
.pip-install-option,
.pip-install-tips {
  margin-top: 10px;
  width: 810px;
}
.pip-install-tips textarea {
  font-size: 14px;
  text-indent: -2em;
  padding-left: 2em;
}
.installing-dialog-content {
  display: flex;
  flex-direction: column;
  font-size: 18px;
  margin: 20px 0;
}
.install-list-item {
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;
}
.install-list-item i {
  float: left;
  position: relative;
  top: 2px;
}
.install-list-item code {
  margin-left: 25px;
  display: block;
}
.install-list-item .el-button--text {
  padding: 0;
}
.install-cost {
  white-space: nowrap;
}
</style>

<style>
</style>
