<template>
  <el-container direction="horizontal">
    <!-- 二级导航 -->
    <el-aside width="auto">
      <div class="aside">
        <div class="aside-content">
          <el-menu
            mode="vertical"
            :unique-opened="true"
            :default-active="$route.path"
            @select="onNaviMenuSelect">
            <el-menu-item index="/management/overview">
              <span>
                <i class="fa fa-fw fa-dashboard"></i>
                {{ $t('Overview') }}
              </span>
            </el-menu-item>

            <el-menu-item index="/management/about">
              <span>
                <i class="fa fa-fw fa-info-circle"></i>
                {{ $t('About') }}
              </span>
            </el-menu-item>

            <el-menu-item index="/management/system-setting" v-if="$store.getters.isAdmin">
              <span>
                <i class="fa fa-fw fa-cog"></i>
                {{ $t('System Setting') }}
              </span>
            </el-menu-item>

            <el-menu-item index="/management/user-list" v-if="$store.getters.isAdmin">
              <span>
                <i class="fa fa-fw fa-users"></i>
                {{ $t('User Manage') }}
              </span>
            </el-menu-item>

            <el-menu-item index="/management/api-auth-list">
              <span>
                <i class="fa fa-fw fa-lock"></i>
                {{ $t('API Auth') }}
              </span>
            </el-menu-item>

            <el-menu-item index="/management/auth-link-list">
              <span>
                <i class="fa fa-fw fa-link"></i>
                {{ $t('Auth Link') }}
              </span>
            </el-menu-item>

            <el-menu-item index="/management/crontab-config-list">
              <span>
                <i class="fa fa-fw fa-clock-o"></i>
                {{ $t('Crontab Config') }}
              </span>
            </el-menu-item>

            <el-menu-item index="/management/batch-list">
              <span>
                <i class="fa fa-fw fa-tasks"></i>
                {{ $t('Batch') }}
              </span>
            </el-menu-item>

            <el-menu-item index="/management/script-set-export-history-list">
              <span>
                <i class="fa fa-fw fa-cloud-download"></i>
                {{ $t('Script Set Export') }}
              </span>
            </el-menu-item>
            <el-menu-item index="/management/script-set-import-history-list">
              <span>
                <i class="fa fa-fw fa-cloud-upload"></i>
                {{ $t('Script Set Import') }}
              </span>
            </el-menu-item>
            <el-menu-item index="/management/script-recover-point-list">
              <span>
                <i class="fa fa-fw fa-history"></i>
                {{ $t('Script Lib Recover') }}
              </span>
            </el-menu-item>

            <el-menu-item index="/management/operation-record-list">
              <span>
                <i class="fa fa-fw fa-keyboard-o"></i>
                {{ $t('Operation Records') }}
              </span>
            </el-menu-item>

            <el-menu-item index="/management/experimental-features">
              <span>
                <i class="fa fa-fw fa-flask"></i>
                {{ $t('Experimental Features') }}
              </span>
            </el-menu-item>

            <el-menu-item v-if="$store.getters.isExperimentalFeatureEnabled('PIPTool')"
              class="indent-menu" index="/management/pip-tool">
              <span>
                <i class="fa fa-fw fa-cubes"></i>
                {{ $t('PIP Tool') }}
              </span>
            </el-menu-item>

            <el-menu-item v-if="$store.getters.isExperimentalFeatureEnabled('FileManage')"
              class="indent-menu" index="/management/file-manage">
              <span>
                <i class="fa fa-fw fa-file"></i>
                {{ $t('File Manage') }}
              </span>
            </el-menu-item>
            <el-menu-item v-if="$store.getters.isExperimentalFeatureEnabled('FileService')"
              class="indent-menu" index="/management/file-service-list">
              <span>
                <i class="fa fa-fw fa-folder-open"></i>
                {{ $t('File Service') }}
              </span>
            </el-menu-item>
            <el-menu-item v-if="$store.getters.isExperimentalFeatureEnabled('FuncCacheManage')"
              class="indent-menu" index="/management/func-cache-manage">
              <span>
                <i class="fa fa-fw fa-dot-circle-o"></i>
                {{ $t('Func Cache Manage') }}
              </span>
            </el-menu-item>
            <el-menu-item v-if="$store.getters.isExperimentalFeatureEnabled('FuncStoreManage')"
              class="indent-menu" index="/management/func-store-manage">
              <span>
                <i class="fa fa-fw fa-database"></i>
                {{ $t('Func Store Manage') }}
              </span>
            </el-menu-item>

            <el-menu-item v-if="$store.getters.isExperimentalFeatureEnabled('FuncDoc')"
              class="indent-menu" :index="`${T.getBaseURL()}/#/func-doc`">
              <span>
                <i class="fa fa-fw fa-book"></i>
                {{ $t('Func Docs') }}
              </span>
            </el-menu-item>

            <el-menu-item v-if="$store.getters.isExperimentalFeatureEnabled('FuncDoc')"
              class="indent-menu" :index="`${T.getBaseURL()}/#/auth-link-func-doc`">
              <span>
                <i class="fa fa-fw fa-link"></i>
                {{ $t('Auth Link Doc') }}
              </span>
            </el-menu-item>

            <el-menu-item v-if="$store.getters.isExperimentalFeatureEnabled('OpenAPIDoc')"
              class="indent-menu" :index="`${T.getBaseURL()}/doc`">
              <span>
                <i class="fa fa-fw fa-book"></i>
                {{ $t('Open API Doc') }}
              </span>
            </el-menu-item>

            <el-menu-item v-if="$store.getters.isAdmin && $store.getters.isExperimentalFeatureEnabled('AccessKeys')"
              class="indent-menu" index="/management/access-key-list">
              <span>
                <i class="fa fa-fw fa-key"></i>
                {{ $t('Access Keys') }}
              </span>
            </el-menu-item>
          </el-menu>
        </div>
      </div>
    </el-aside>

    <!-- 主要 -->
    <router-view />
  </el-container>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Management',
  components: {
  },
  watch: {
  },
  methods: {
    onNaviMenuSelect(index) {
      if (!index) return;

      if (this.T.startsWith(index, '/')) {
        this.$router.push({ path: index });
      } else {
        this.T.openURL(index);
      }
    },
  },
  computed: {
  },
  props: {
  },
  data() {
    return {}
  },
  created() {
  },
}
</script>

<style scoped>
.aside {
  margin-top: 40px;
  margin-bottom: 40px;
}
.aside-content {
  height: 100%;
}
.aside .el-menu-item {
  padding-right: 40px;
}
.aside .indent-menu.el-menu-item {
  padding-left: 40px !important;
}
</style>
