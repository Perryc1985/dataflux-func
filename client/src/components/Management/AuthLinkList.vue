<i18n locale="en" lang="yaml">
lastStarted  : 'Started {t}'
lastSucceeded: 'Succeeded {t}'
lastFailed   : 'Failed {t}'
</i18n>

<i18n locale="zh-CN" lang="yaml">
Config     : 配置
Auth       : 认证
Expires    : 过期
Throttling : 限流
Task Record: 任务记录

Auth Link disabled: 授权链接已禁用
Auth Link enabled : 授权链接已启用
Auth Link deleted : 授权链接已删除

Show all contents: 展示全部内容
No Auth Link has ever been added: 从未添加过任何授权链接

Are you sure you want to disable the Auth Link?: 是否确认禁用此授权链接？
Are you sure you want to delete the Auth Link?: 是否确认删除此授权链接？

lastStarted  : '{t}执行'
lastSucceeded: '{t}执行成功'
lastFailed   : '{t}执行失败'

If you need to access the Python function from an external system,                                              : 如需要从外部系统访问 Python 函数，
you must first create an Auth Link for the Python function and access the Python function through the Auth Link.: 必须先为 Python 函数创建授权链接，通过授权链接访问 Python 函数
</i18n>

<!-- Generated by OpenCC START -->
<i18n locale="zh-HK" lang="yaml">
Are you sure you want to delete the Auth Link?: 是否確認刪除此授權鏈接？
Are you sure you want to disable the Auth Link?: 是否確認禁用此授權鏈接？
Auth: 認證
Auth Link deleted: 授權鏈接已刪除
Auth Link disabled: 授權鏈接已禁用
Auth Link enabled: 授權鏈接已啓用
Config: 配置
Expires: 過期
If you need to access the Python function from an external system,: 如需要從外部系統訪問 Python 函數，
No Auth Link has ever been added: 從未添加過任何授權鏈接
Show all contents: 展示全部內容
Task Record: 任務記錄
Throttling: 限流
lastFailed: '{t}執行失敗'
lastStarted: '{t}執行'
lastSucceeded: '{t}執行成功'
you must first create an Auth Link for the Python function and access the Python function through the Auth Link.: 必須先為 Python 函數創建授權鏈接，通過授權鏈接訪問 Python 函數
</i18n>
<i18n locale="zh-TW" lang="yaml">
Are you sure you want to delete the Auth Link?: 是否確認刪除此授權連結？
Are you sure you want to disable the Auth Link?: 是否確認禁用此授權連結？
Auth: 認證
Auth Link deleted: 授權連結已刪除
Auth Link disabled: 授權連結已禁用
Auth Link enabled: 授權連結已啟用
Config: 配置
Expires: 過期
If you need to access the Python function from an external system,: 如需要從外部系統訪問 Python 函式，
No Auth Link has ever been added: 從未新增過任何授權連結
Show all contents: 展示全部內容
Task Record: 任務記錄
Throttling: 限流
lastFailed: '{t}執行失敗'
lastStarted: '{t}執行'
lastSucceeded: '{t}執行成功'
you must first create an Auth Link for the Python function and access the Python function through the Auth Link.: 必須先為 Python 函式建立授權連結，透過授權連結訪問 Python 函式
</i18n>
<!-- Generated by OpenCC END -->

<template>
  <transition name="fade">
    <el-container direction="vertical" v-show="$store.state.isLoaded">
      <!-- 标题区 -->
      <el-header height="60px">
        <div class="common-page-header">
          <h1>{{ $t('Auth Link') }}</h1>
          <div class="header-control">
            <FuzzySearchInput :dataFilter="dataFilter"></FuzzySearchInput>

            <el-tooltip :content="$t('Show all contents')" placement="bottom" :enterable="false">
              <el-checkbox
                :border="true"
                size="small"
                v-model="dataFilter.origin"
                true-label="_ALL"
                false-label="user"
                @change="T.changePageFilter(dataFilter)">{{ $t('Show all') }}</el-checkbox>
            </el-tooltip>
            <el-button @click="openSetup(null, 'add')" type="primary" size="small">
              <i class="fa fa-fw fa-plus"></i>
              {{ $t('New') }}
            </el-button>
          </div>
        </div>
      </el-header>

      <!-- 列表区 -->
      <el-main class="common-table-container">
        <div class="no-data-area" v-if="T.isNothing(data)">
          <h1 class="no-data-title" v-if="T.isPageFiltered({ ignore: { origin: '_ALL' } })"><i class="fa fa-fw fa-search"></i>{{ $t('No matched data found') }}</h1>
          <h1 class="no-data-title" v-else><i class="fa fa-fw fa-info-circle"></i>{{ $t('No Auth Link has ever been added') }}</h1>

          <p class="no-data-tip">
            {{ $t('If you need to access the Python function from an external system,') }}
            <br>{{ $t('you must first create an Auth Link for the Python function and access the Python function through the Auth Link.') }}
          </p>
        </div>
        <el-table v-else
          class="common-table" height="100%"
          :data="data"
          :row-class-name="T.getHighlightRowCSS">

          <el-table-column :label="$t('Func')" min-width="420">
            <template slot-scope="scope">
              <FuncInfo
                :config-func-id="scope.row.funcId"
                :id="scope.row.func_id"
                :title="scope.row.func_title"
                :kwargsJSON="scope.row.funcCallKwargsJSON" />

              <div>
                <span class="text-info">ID</span>
                &nbsp;<code class="text-main">{{ scope.row.id }}</code>
                <CopyButton :content="scope.row.id" />

                <template v-if="T.notNothing(scope.row.tagsJSON) || T.notNothing(scope.row.func_tagsJSON)">
                  <br>
                  <span class="text-info">&#12288;{{ $t('Tags') }}</span>
                  <el-tag size="mini" type="info" v-for="t in scope.row.func_tagsJSON" :key="t">{{ t }}</el-tag>
                  <el-tag size="mini" type="warning" v-for="t in scope.row.tagsJSON" :key="t">{{ t }}</el-tag>
                </template>

                <template v-if="scope.row.note">
                  <br>
                  <span class="text-info">&#12288;{{ $t('Note') }}{{ $t(':') }}</span>
                  <span>{{ scope.row.note }}</span>
                </template>
              </div>

              <InfoBlock v-if="scope.row.lastTaskStatus && scope.row.lastTaskStatus.exceptionType"
                type="error" :title="`${scope.row.lastTaskStatus.exceptionType}: ${scope.row.lastTaskStatus.exceptionTEXT}`" />
            </template>
          </el-table-column>

          <el-table-column :label="$t('Config')" width="240">
            <template slot-scope="scope">
              <span class="text-info">{{ $t('Auth') }}{{ $t(':') }}</span>
              <el-tooltip :content="scope.row.apia_title" :disabled="!!!scope.row.apia_title" placement="right">
                <span :class="{ 'text-main': !!scope.row.apia_id }">{{ C.API_AUTH_MAP.get(scope.row.apia_type).name }}</span>
              </el-tooltip>

              <br>
              <span class="text-info">{{ $t('Expires') }}{{ $t(':') }}</span>
              <span v-if="!scope.row.expireTime">-</span>
              <template v-else>
                <RelativeDateTime :datetime="scope.row.expireTime"
                  :class="T.isExpired(scope.row.expireTime) ? 'text-bad' : 'text-good'" />
              </template>

              <br>
              <span class="text-info">{{ $t('Throttling') }}{{ $t(':') }}</span>
              <span v-if="T.isNothing(scope.row.throttlingJSON)">-</span>
              <el-tooltip v-else placement="right">
                <div slot="content">
                  <template v-for="opt in C.AUTH_LINK_THROTTLING">
                    <span v-if="scope.row.throttlingJSON[opt.key]">{{ $tc(opt.name, scope.row.throttlingJSON[opt.key]) }}<br></span>
                  </template>
                </div>
                <span class="text-bad">{{ $t('ON') }}</span>
              </el-tooltip>
            </template>
          </el-table-column>

          <el-table-column :label="$t('Status')" width="260">
            <template slot-scope="scope">
              <span v-if="scope.row.isDisabled" class="text-bad">
                <i class="fa fa-fw fa-ban"></i>
                {{ $t('Disabled') }}
              </span>
              <span v-else class="text-good">
                <i class="fa fa-fw fa-check"></i>
                {{ $t('Enabled') }}
              </span>

              <br>
              <el-tooltip placement="right" effect="dark" v-if="scope.row.lastTaskStatus">
                <div slot="content">
                  <span class="datetime-tip">{{ scope.row.lastTaskStatus.timestamp | datetime }}</span>
                </div>
                <span v-if="scope.row.lastTaskStatus.status === 'started'" class="text-main">
                  <i class="fa fa-fw fa-circle-o-notch fa-spin"></i>
                  {{ $t('lastStarted', { t: T.fromNow(scope.row.lastTaskStatus.timestamp) }) }}
                </span>
                <span v-else-if="scope.row.lastTaskStatus.status === 'success'" class="text-good">
                  <i class="fa fa-fw fa-check"></i>
                  {{ $t('lastSucceeded', { t: T.fromNow(scope.row.lastTaskStatus.timestamp) }) }}
                </span>
                <span v-else-if="scope.row.lastTaskStatus.status === 'failure'" class="text-bad">
                  <i class="fa fa-fw fa-times"></i>
                  {{ $t('lastFailed', { t: T.fromNow(scope.row.lastTaskStatus.timestamp) }) }}
                </span>
              </el-tooltip>
              <span v-else class="text-info">
                <i class="fa fa-fw fa-ellipsis-h"></i>
                {{ $t('No recent record') }}
              </span>
            </template>
          </el-table-column>

          <el-table-column align="right" width="380">
            <template slot-scope="scope">
              <template v-if="funcTaskRecordCountMap[scope.row.id]">
                <el-link @click="common.goToTaskRecord({ origin: 'authLink', originId: scope.row.id }, { hlDataId: scope.row.id })" :disabled="!funcTaskRecordCountMap[scope.row.id].count">
                  {{ $t('Task Record') }} <code v-if="funcTaskRecordCountMap[scope.row.id].count">({{ T.numberLimit(funcTaskRecordCountMap[scope.row.id].count) }})</code>
                </el-link>
              </template>

              <el-link :disabled="T.isNothing(scope.row.func_id)" @click="showAPI(scope.row)">{{ $t('Example') }}</el-link>
              <el-link :disabled="T.isNothing(scope.row.func_id)" v-if="scope.row.isDisabled" v-prevent-re-click @click="quickSubmitData(scope.row, 'enable')">{{ $t('Enable') }}</el-link>
              <el-link :disabled="T.isNothing(scope.row.func_id)" v-else @click="quickSubmitData(scope.row, 'disable')">{{ $t('Disable') }}</el-link>
              <el-link @click="openSetup(scope.row, 'setup')">{{ $t('Setup') }}</el-link>
              <el-link @click="quickSubmitData(scope.row, 'delete')">{{ $t('Delete') }}</el-link>
            </template>
          </el-table-column>
        </el-table>
      </el-main>

      <!-- 翻页区 -->
      <Pager :pageInfo="pageInfo" />
      <AuthLinkSetup ref="setup" />

      <APIExampleDialog ref="apiExampleDialog"
        :showPostExample="true"
        :showPostExampleSimplified="true"
        :showGetExample="true"
        :showGetExampleSimplified="true"></APIExampleDialog>
    </el-container>
  </transition>
</template>

<script>
import AuthLinkSetup from '@/components/Management/AuthLinkSetup'
import APIExampleDialog from '@/components/APIExampleDialog'

export default {
  name: 'AuthLinkList',
  components: {
    AuthLinkSetup,
    APIExampleDialog,
  },
  watch: {
    $route: {
      immediate: true,
      async handler(to, from) {
        await this.loadData();
      }
    },
    '$store.state.isLoaded': function(val) {
      if (!val) return;

      setImmediate(() => this.T.autoScrollTable());
    },
  },
  methods: {
    async loadData(options) {
      options = options || {};

      // 默认过滤条件
      let _listQuery = this.dataFilter = this.T.createListQuery();
      if (this.T.isNothing(this.$route.query)) {
        _listQuery.origin = 'user';
      }

      let apiRes = await this.T.callAPI_get('/api/v1/auth-links/do/list', {
        query: _listQuery,
      });
      if (!apiRes || !apiRes.ok) return;

      this.data = apiRes.data;
      this.pageInfo = apiRes.pageInfo;

      this.$store.commit('updateLoadStatus', true);

      // 获取任务记录数量信息
      if (this.isLocalFuncTaskRecordEnabled && !options.skipStatistic) {
        this.isFuncTaskRecordCountLoaded = false;
        setTimeout(async () => {
          this.funcTaskRecordCountMap = await this.common.getFuncTaskRecordCountMap('originId', this.data.map(d => d.id));
          this.isFuncTaskRecordCountLoaded = true;
        }, 1000);
      }
    },
    async quickSubmitData(d, operation) {
      switch(operation) {
        case 'disable':
          if (!await this.T.confirm(this.$t('Are you sure you want to disable the Auth Link?'))) return;
          break;

        case 'delete':
          if (!await this.T.confirm(this.$t('Are you sure you want to delete the Auth Link?'))) return;
          break;
      }

      let apiRes = null;
      switch(operation) {
        case 'disable':
          apiRes = await this.T.callAPI('post', '/api/v1/auth-links/:id/do/modify', {
            params: { id: d.id },
            body  : { data: { isDisabled: true } },
            alert : { okMessage: this.$t('Auth Link disabled') },
          });
          break;

        case 'enable':
          apiRes = await this.T.callAPI('post', '/api/v1/auth-links/:id/do/modify', {
            params: { id: d.id },
            body  : { data: { isDisabled: false } },
            alert : { okMessage: this.$t('Auth Link enabled') },
          });
          break;

        case 'delete':
          apiRes = await this.T.callAPI('/api/v1/auth-links/:id/do/delete', {
            params: { id: d.id },
            alert : { okMessage: this.$t('Auth Link deleted') },
          });
          break;
      }
      if (!apiRes || !apiRes.ok) return;

      this.$store.commit('updateHighlightedTableDataId', d.id);

      await this.loadData({ skipStatistic: true });
    },
    openSetup(d, target) {
      switch(target) {
        case 'add':
          this.$refs.setup.loadData();
          break;

        case 'setup':
          this.$store.commit('updateHighlightedTableDataId', d.id);
          this.$refs.setup.loadData(d.id);
          break;
      }
    },
    async showAPI(d) {
      // 获取函数详情
      let apiRes = await this.T.callAPI_getOne('/api/v1/funcs/do/list', d.funcId);
      if (!apiRes || !apiRes.ok) return;

      // 生成API请求示例
      let apiURL = this.T.formatURL('/api/v1/al/:id', {
        baseURL: true,
        params : { id: d.id },
      });

      let funcCallKwargsJSON = {};
      for (let k in d.funcCallKwargsJSON) if (d.funcCallKwargsJSON.hasOwnProperty(k)) {
        if (this.common.isFuncArgumentPlaceholder(d.funcCallKwargsJSON[k])) {
          funcCallKwargsJSON[k] = d.funcCallKwargsJSON[k];
        }
      }
      let apiBody = { kwargs: funcCallKwargsJSON };
      let funcKwargs = apiRes.data.kwargsJSON;

      this.$refs.apiExampleDialog.update(apiURL, apiBody, funcKwargs);

      this.$store.commit('updateHighlightedTableDataId', d.id);
    },
  },
  computed: {
    isLocalFuncTaskRecordEnabled() {
      return !!this.$store.getters.SYSTEM_SETTINGS('LOCAL_FUNC_TASK_RECORD_ENABLED');
    },
  },
  props: {
  },
  data() {
    let _pageInfo   = this.T.createPageInfo();
    let _dataFilter = this.T.createListQuery();

    return {
      data    : [],
      pageInfo: _pageInfo,

      funcTaskRecordCountMap     : {},
      isFuncTaskRecordCountLoaded: false,

      dataFilter: {
        _fuzzySearch: _dataFilter._fuzzySearch,
        origin      : _dataFilter.origin,
      },
    }
  },
  created() {
    this.$root.$on('reload.authLinkList', () => this.loadData({ skipStatistic: true }));
  },
  destroyed() {
    this.$root.$off('reload.authLinkList');
  },
}
</script>

<style scoped>
.datetime-tip {
  font-size: 16px;
}
</style>

<style>
</style>
