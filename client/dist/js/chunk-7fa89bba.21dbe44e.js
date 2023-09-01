(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fa89bba"],{"0948":function(t,e,a){"use strict";a("941a")},"1fe2":function(t,e,a){"use strict";var s=a("a2b6"),i=a.n(s);e["default"]=i.a},2020:function(t,e,a){"use strict";var s=a("a2b7"),i=a.n(s);e["default"]=i.a},6601:function(t,e,a){"use strict";a("8987")},6678:function(t,e,a){"use strict";var s=a("759b"),i=a.n(s);e["default"]=i.a},"759b":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"lastSucceeded":"Succeeded {t}","lastFailed":"Failed {t}","lastRan":"Ran {t}","successCount":"Success {n}","failureCount":"Failure {n}"}}'),delete t.options._Ctor}},8987:function(t,e,a){},"941a":function(t,e,a){},"99d5":function(t,e,a){"use strict";a.r(e);a("b0c0");var s=function(){var t=this,e=t._self._c;return e("transition",{attrs:{name:"fade"}},[e("el-container",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.isLoaded,expression:"$store.state.isLoaded"}],attrs:{direction:"vertical"}},[e("el-header",{attrs:{height:"60px"}},[e("div",{staticClass:"list-page-header"},[e("span",[t._v(t._s(t.$t("Batch")))]),t._v(" "),e("div",{staticClass:"header-control"},[e("FuzzySearchInput",{attrs:{dataFilter:t.dataFilter}}),t._v(" "),e("el-tooltip",{attrs:{content:t.$t("Show all contents"),placement:"bottom",enterable:!1}},[e("el-checkbox",{attrs:{border:!0,size:"small","true-label":"_ALL","false-label":"user"},on:{change:function(e){return t.T.changePageFilter(t.dataFilter)}},model:{value:t.dataFilter.origin,callback:function(e){t.$set(t.dataFilter,"origin",e)},expression:"dataFilter.origin"}},[t._v(t._s(t.$t("Show all")))])],1),t._v(" "),e("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.openSetup(null,"add")}}},[e("i",{staticClass:"fa fa-fw fa-plus"}),t._v("\n            "+t._s(t.$t("New"))+"\n          ")])],1)])]),t._v(" "),e("el-main",{staticClass:"common-table-container"},[t.T.isNothing(t.data)?e("div",{staticClass:"no-data-area"},[t.T.isPageFiltered({ignore:{origin:"_ALL"}})?e("h1",{staticClass:"no-data-title"},[e("i",{staticClass:"fa fa-fw fa-search"}),t._v(t._s(t.$t("No matched data found")))]):e("h1",{staticClass:"no-data-title"},[e("i",{staticClass:"fa fa-fw fa-info-circle"}),t._v(t._s(t.$t("No Batch has ever been added")))]),t._v(" "),e("p",{staticClass:"no-data-tip"},[t._v("\n          "+t._s(t.$t("Using Batches, you can execute long and time-consuming Python functions"))+"\n        ")])]):e("el-table",{staticClass:"common-table",attrs:{height:"100%",data:t.data,"row-class-name":t.T.getHighlightRowCSS}},[e("el-table-column",{attrs:{label:t.$t("Func"),"min-width":"420"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("FuncInfo",{attrs:{"config-func-id":a.row.funcId,id:a.row.func_id,title:a.row.func_title,kwargsJSON:a.row.funcCallKwargsJSON}}),t._v(" "),e("div",[e("span",{staticClass:"text-info"},[t._v("ID")]),t._v("\n               "),e("code",{staticClass:"text-main"},[t._v(t._s(a.row.id))]),t._v(" "),e("CopyButton",{attrs:{content:a.row.id}}),t._v(" "),t.T.notNothing(a.row.tagsJSON)||t.T.notNothing(a.row.func_tagsJSON)?[e("br"),t._v(" "),e("span",{staticClass:"text-info"},[t._v("　"+t._s(t.$t("Tags")))]),t._v(" "),t._l(a.row.func_tagsJSON,(function(a){return e("el-tag",{key:a,attrs:{size:"mini",type:"info"}},[t._v(t._s(a))])})),t._v(" "),t._l(a.row.tagsJSON,(function(a){return e("el-tag",{key:a,attrs:{size:"mini",type:"warning"}},[t._v(t._s(a))])}))]:t._e(),t._v(" "),a.row.note?[e("br"),t._v(" "),e("span",{staticClass:"text-info"},[t._v("　"+t._s(t.$t("Note"))+t._s(t.$t(":")))]),t._v(" "),e("span",[t._v(t._s(a.row.note))])]:t._e()],2)]}}])}),t._v(" "),e("el-table-column",{attrs:{label:t.$t("Config"),width:"220"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticClass:"text-info"},[t._v(t._s(t.$t("Auth"))+t._s(t.$t(":")))]),t._v(" "),e("el-tooltip",{attrs:{content:a.row.apia_title,disabled:!a.row.apia_title,placement:"right"}},[e("span",{class:{"text-main":!!a.row.apia_id}},[t._v(t._s(t.C.API_AUTH_MAP.get(a.row.apia_type).name))])])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:t.$t("Task Record"),width:"240"},scopedSlots:t._u([{key:"default",fn:function(a){return[t.isStatisticLoaded?t.statisticMap[a.row.id]?["success"===t.statisticMap[a.row.id].lastStatus?e("span",{staticClass:"text-good"},[e("i",{staticClass:"fa fa-fw fa-check"}),t._v(" "+t._s(t.$t("lastSucceeded",{t:t.T.fromNow(t.statisticMap[a.row.id].lastStartTime)}))+"\n              ")]):"failure"===t.statisticMap[a.row.id].lastStatus?e("span",{staticClass:"text-bad"},[e("i",{staticClass:"fa fa-fw fa-times"}),t._v(" "+t._s(t.$t("lastFailed",{t:t.T.fromNow(t.statisticMap[a.row.id].lastStartTime)}))+"\n              ")]):e("span",{staticClass:"text-main"},[e("i",{staticClass:"fa fa-fw fa-clock-o"}),t._v(" "+t._s(t.$t("lastRan",{t:t.T.fromNow(t.statisticMap[a.row.id].lastStartTime)}))+"\n              ")]),t._v(" "),e("br"),t._v(" "),e("i",{staticClass:"fa fa-fw fa-pie-chart text-info"}),t._v(" "),e("span",{class:{"text-good":!!t.statisticMap[a.row.id].recentSuccessCount}},[t._v(t._s(t.$t("successCount",{n:t.T.numberLimit(t.statisticMap[a.row.id].recentSuccessCount)})))]),t._v("\n              / "),e("span",{class:{"text-bad":!!t.statisticMap[a.row.id].recentFailureCount}},[t._v(t._s(t.$t("failureCount",{n:t.T.numberLimit(t.statisticMap[a.row.id].recentFailureCount)})))])]:[t._v("\n              "+t._s(t.$t("No recent record"))+"\n            ")]:[e("i",{staticClass:"fa fa-fw fa-circle-o-notch fa-spin"}),t._v("\n              "+t._s(t.$t("Loading"))+"\n            ")]]}}])}),t._v(" "),e("el-table-column",{attrs:{label:t.$t("Status"),width:"100"},scopedSlots:t._u([{key:"default",fn:function(a){return[a.row.isDisabled?e("span",{staticClass:"text-bad"},[e("i",{staticClass:"fa fa-fw fa-ban"}),t._v(" "+t._s(t.$t("Disabled")))]):e("span",{staticClass:"text-good"},[e("i",{staticClass:"fa fa-fw fa-check"}),t._v(" "+t._s(t.$t("Enabled")))])]}}])}),t._v(" "),e("el-table-column",{attrs:{align:"right",width:"350"},scopedSlots:t._u([{key:"default",fn:function(a){return[t.statisticMap[a.row.id]?[e("el-link",{attrs:{disabled:!t.statisticMap[a.row.id].taskRecordCount},on:{click:function(e){return t.common.goToTaskRecord({origin:"batch",originId:a.row.id},{hlDataId:a.row.id})}}},[t._v("\n                "+t._s(t.$t("Task Record"))+" "),t.statisticMap[a.row.id].taskRecordCount?e("code",[t._v("("+t._s(t.T.numberLimit(t.statisticMap[a.row.id].taskRecordCount))+")")]):t._e()])]:t._e(),t._v(" "),e("el-link",{attrs:{disabled:t.T.isNothing(a.row.func_id)},on:{click:function(e){return t.showAPI(a.row)}}},[t._v(t._s(t.$t("Example")))]),t._v(" "),a.row.isDisabled?e("el-link",{directives:[{name:"prevent-re-click",rawName:"v-prevent-re-click"}],attrs:{disabled:t.T.isNothing(a.row.func_id)},on:{click:function(e){return t.quickSubmitData(a.row,"enable")}}},[t._v(t._s(t.$t("Enable")))]):t._e(),t._v(" "),a.row.isDisabled?t._e():e("el-link",{attrs:{disabled:t.T.isNothing(a.row.func_id)},on:{click:function(e){return t.quickSubmitData(a.row,"disable")}}},[t._v(t._s(t.$t("Disable")))]),t._v(" "),e("el-link",{on:{click:function(e){return t.openSetup(a.row,"setup")}}},[t._v(t._s(t.$t("Setup")))]),t._v(" "),e("el-link",{on:{click:function(e){return t.quickSubmitData(a.row,"delete")}}},[t._v(t._s(t.$t("Delete")))])]}}])})],1)],1),t._v(" "),e("Pager",{attrs:{pageInfo:t.pageInfo}}),t._v(" "),e("APIExampleDialog",{ref:"apiExampleDialog",attrs:{showExecModeOption:!1,showPostExample:!0,showPostExampleSimplified:!0,showGetExample:!0,showGetExampleSimplified:!0}})],1)],1)},i=[],n=a("c7eb"),o=a("1da1"),r=(a("130f"),a("d81d"),a("14d9"),a("b3fd")),l={name:"BatchList",components:{APIExampleDialog:r["a"]},watch:{$route:{immediate:!0,handler:function(t,e){var a=this;return Object(o["a"])(Object(n["a"])().mark((function t(){return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a.loadData();case 2:case"end":return t.stop()}}),t)})))()}},"$store.state.isLoaded":function(t){var e=this;t&&setImmediate((function(){return e.T.autoScrollTable()}))}},methods:{loadData:function(){var t=this;return Object(o["a"])(Object(n["a"])().mark((function e(){var a,s;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.dataFilter=t.T.createListQuery(),t.T.isNothing(t.$route.query)&&(a.origin="user"),e.next=4,t.T.callAPI_get("/api/v1/batches/do/list",{query:a});case 4:if(s=e.sent,s&&s.ok){e.next=7;break}return e.abrupt("return");case 7:t.data=s.data,t.pageInfo=s.pageInfo,t.$store.commit("updateLoadStatus",!0),t.isStatisticLoaded=!1,setTimeout(Object(o["a"])(Object(n["a"])().mark((function e(){return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.common.loadStatistic("originId",t.data.map((function(t){return t.id})));case 2:t.statisticMap=e.sent,t.isStatisticLoaded=!0;case 4:case"end":return e.stop()}}),e)}))),1e3);case 12:case"end":return e.stop()}}),e)})))()},quickSubmitData:function(t,e){var a=this;return Object(o["a"])(Object(n["a"])().mark((function s(){var i;return Object(n["a"])().wrap((function(s){while(1)switch(s.prev=s.next){case 0:s.t0=e,s.next="disable"===s.t0?3:"delete"===s.t0?8:13;break;case 3:return s.next=5,a.T.confirm(a.$t("Are you sure you want to disable the Batch?"));case 5:if(s.sent){s.next=7;break}return s.abrupt("return");case 7:return s.abrupt("break",13);case 8:return s.next=10,a.T.confirm(a.$t("Are you sure you want to delete the Batch?"));case 10:if(s.sent){s.next=12;break}return s.abrupt("return");case 12:return s.abrupt("break",13);case 13:i=null,s.t1=e,s.next="disable"===s.t1?17:"enable"===s.t1?21:"delete"===s.t1?25:29;break;case 17:return s.next=19,a.T.callAPI("post","/api/v1/batches/:id/do/modify",{params:{id:t.id},body:{data:{isDisabled:!0}},alert:{okMessage:a.$t("Batch disabled")}});case 19:return i=s.sent,s.abrupt("break",29);case 21:return s.next=23,a.T.callAPI("post","/api/v1/batches/:id/do/modify",{params:{id:t.id},body:{data:{isDisabled:!1}},alert:{okMessage:a.$t("Batch enabled")}});case 23:return i=s.sent,s.abrupt("break",29);case 25:return s.next=27,a.T.callAPI("/api/v1/batches/:id/do/delete",{params:{id:t.id},alert:{okMessage:a.$t("Batch deleted")}});case 27:return i=s.sent,s.abrupt("break",29);case 29:if(i&&i.ok){s.next=31;break}return s.abrupt("return");case 31:return a.$store.commit("updateHighlightedTableDataId",t.id),s.next=34,a.loadData();case 34:case"end":return s.stop()}}),s)})))()},openSetup:function(t,e){var a=this.T.packRouteQuery();switch(this.$store.commit("updateTableList_scrollY"),e){case"add":this.$router.push({name:"batch-add",query:a});break;case"setup":this.$store.commit("updateHighlightedTableDataId",t.id),this.$router.push({name:"batch-setup",params:{id:t.id},query:a});break}},showAPI:function(t){var e=this;return Object(o["a"])(Object(n["a"])().mark((function a(){var s,i,o,r,l,c;return Object(n["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.T.callAPI_getOne("/api/v1/funcs/do/list",t.funcId);case 2:if(s=a.sent,s&&s.ok){a.next=5;break}return a.abrupt("return");case 5:for(r in i=e.T.formatURL("/api/v1/bat/:id",{baseURL:!0,params:{id:t.id}}),o={},t.funcCallKwargsJSON)t.funcCallKwargsJSON.hasOwnProperty(r)&&e.common.isFuncArgumentPlaceholder(t.funcCallKwargsJSON[r])&&(o[r]=t.funcCallKwargsJSON[r]);l={kwargs:o},c=s.data.kwargsJSON,e.$refs.apiExampleDialog.update(i,l,c),e.$store.commit("updateHighlightedTableDataId",t.id);case 12:case"end":return a.stop()}}),a)})))()}},computed:{},props:{},data:function(){var t=this.T.createPageInfo(),e=this.T.createListQuery();return{data:[],pageInfo:t,statisticMap:{},isStatisticLoaded:!1,dataFilter:{_fuzzySearch:e._fuzzySearch,origin:e.origin}}}},c=l,p=(a("0948"),a("2877")),u=a("6678"),d=a("2020"),f=Object(p["a"])(c,s,i,!1,null,"25973b44",null);"function"===typeof u["default"]&&Object(u["default"])(f),"function"===typeof d["default"]&&Object(d["default"])(f);e["default"]=f.exports},a2ad:function(t,e,a){"use strict";var s=a("ebfc"),i=a.n(s);e["default"]=i.a},a2b6:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"seconds":"Second | Seconds"}}'),delete t.options._Ctor}},a2b7:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-CN":{"Config":"配置","Auth":"认证","Task Record":"任务记录","Batch disabled":"批处理已禁用","Batch enabled":"批处理已启用","Batch deleted":"批处理已删除","Show all contents":"展示全部内容","No Batch has ever been added":"从未添加过任何批处理","Are you sure you want to disable the Batch?":"是否确认禁用此批处理？","Are you sure you want to delete the Batch?":"是否确认删除此批处理？","lastSucceeded":"{t}调用成功","lastFailed":"{t}调用失败","lastRan":"{t}调用","successCount":"成功 {n}","failureCount":"失败 {n}","Using Batches, you can execute long and time-consuming Python functions":"使用批处理，可以执行长耗时的 Python 函数"}}'),delete t.options._Ctor}},b3fd:function(t,e,a){"use strict";var s=function(){var t=this,e=t._self._c;return e("el-dialog",{attrs:{title:t.title||t.$t("API Example"),visible:t.show,"close-on-click-modal":!1,"close-on-press-escape":!1,width:"950px"},on:{"update:visible":function(e){t.show=e}}},[e("span",[t.showOptions?[e("el-divider",{attrs:{"content-position":"left"}},[e("h1",[t._v(t._s(t.$t("Request Options")))])]),t._v(" "),e("el-form",{staticClass:"call-options",attrs:{"label-width":"120px"}},[t.showExecModeOption?e("el-form-item",{attrs:{label:t.$t("Async")}},[e("el-switch",{attrs:{"inactive-value":"sync","active-value":"async"},model:{value:t.callOptions.execMode,callback:function(e){t.$set(t.callOptions,"execMode",e)},expression:"callOptions.execMode"}})],1):t._e(),t._v(" "),t.showSaveResultOption?e("el-form-item",{attrs:{label:t.$t("Save Result")}},[e("el-switch",{attrs:{"inactive-value":!1,"active-value":!0},model:{value:t.callOptions.saveResult,callback:function(e){t.$set(t.callOptions,"saveResult",e)},expression:"callOptions.saveResult"}})],1):t._e(),t._v(" "),t.showTimeoutOption?e("el-form-item",{attrs:{label:t.$t("Func Timeout")}},[e("el-input-number",{attrs:{size:"mini","step-strictly":"",step:1,precision:0,min:t.$store.getters.SYSTEM_INFO("_FUNC_TASK_TIMEOUT_MIN"),max:t.$store.getters.SYSTEM_INFO("_FUNC_TASK_TIMEOUT_MAX")},model:{value:t.callOptions.timeout,callback:function(e){t.$set(t.callOptions,"timeout",e)},expression:"callOptions.timeout"}}),t._v(" "+t._s(t.$tc("seconds",t.callOptions.timeout))+"\n        ")],1):t._e(),t._v(" "),t.showAPITimeoutOption?e("el-form-item",{attrs:{label:t.$t("API Timeout")}},[e("el-input-number",{attrs:{size:"mini","step-strictly":"",step:1,precision:0,min:t.$store.getters.SYSTEM_INFO("_FUNC_TASK_MIN_API_TIMEOUT"),max:t.$store.getters.SYSTEM_INFO("_FUNC_TASK_MAX_API_TIMEOUT")},model:{value:t.callOptions.apiTimeout,callback:function(e){t.$set(t.callOptions,"apiTimeout",e)},expression:"callOptions.apiTimeout"}}),t._v(" "+t._s(t.$tc("seconds",t.callOptions.apiTimeout))+"\n        ")],1):t._e()],1)]:t._e(),t._v(" "),e("el-divider",{attrs:{"content-position":"left"}},[e("h1",[t._v(t._s(t.$t("Input Parameters")))])]),t._v(" "),t.apiBodyInput||t.supportCustomKwargs?e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:22}},[e("el-input",{attrs:{type:"textarea",autosize:"",resize:"none"},model:{value:t.apiBodyInput,callback:function(e){t.apiBodyInput=e},expression:"apiBodyInput"}}),t._v(" "),t.apiBodyInput.indexOf("kwargs")>=0?e("InfoBlock",{attrs:{type:"info",title:t.$t('The JSON inside "kwargs" is the call parameter, modify its value and check out the calling example below')}}):t._e(),t._v(" "),t.supportCustomKwargs?e("InfoBlock",{attrs:{type:"success",title:t.$t("This Python function allows additional parameters (**kwargs syntax)")}}):t._e(),t._v(" "),t.supportFileUpload?e("InfoBlock",{attrs:{type:"success",title:t.$t('This Python function allows uploading files, field name of the uploading file is "files"')}}):t._e()],1),t._v(" "),e("el-col",{attrs:{span:2}},[e("CopyButton",{attrs:{content:t.apiBodyInput}})],1)],1):t._e(),t._v(" "),e("el-divider",{attrs:{"content-position":"left"}},[e("h1",[t._v(t._s(t.$t("Calling Example")))])]),t._v(" "),t.apiBody?[t.showGet?[e("el-tabs",{attrs:{"tab-position":"top"}},[e("el-tab-pane",{attrs:{label:t.$t("Simple GET")}},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:22}},[t.onlyStringParameter?e("el-link",{staticClass:"get-example",attrs:{href:t.getExample("simplified"),underline:!0,type:"primary",target:"_blank"}},[e("code",{domProps:{innerHTML:t._s(t.getExample("simplified",{asHTML:!0,decodeURL:!0}))}})]):t._e(),t._v(" "),e("InfoBlock",{attrs:{type:t.onlyStringParameter?"info":"error",title:t.$t("Only string arguments are allowed in this from")}}),t._v(" "),t.showOptions?e("InfoBlock",{attrs:{title:t.$t('Parameter "options" are not supported in this from')}}):t._e()],1),t._v(" "),e("el-col",{attrs:{span:2}},[t.onlyStringParameter?e("CopyButton",{attrs:{content:t.getExample("simplified")}}):t._e()],1)],1)],1),t._v(" "),e("el-tab-pane",{attrs:{label:t.$t("Normal GET")}},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:22}},[e("el-link",{staticClass:"get-example",attrs:{href:t.getExample("normal"),underline:!0,type:"primary",target:"_blank"}},[e("code",{domProps:{innerHTML:t._s(t.getExample("normal",{asHTML:!0,decodeURL:!0}))}})]),t._v(" "),e("br"),t._v(" "),e("InfoBlock",{attrs:{type:"info",title:t.$t('Parameter "kwargs" should be URL encoded in HTTP request')}})],1),t._v(" "),e("el-col",{attrs:{span:2}},[e("CopyButton",{attrs:{content:t.getExample("normal")}})],1)],1)],1),t._v(" "),e("el-tab-pane",{attrs:{label:t.$t("Simple POST (JSON)")}},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:22}},[e("el-input",{attrs:{value:t.postExample("simplified",{contentType:"json"}),autosize:{minRows:6},type:"textarea",resize:"none",readonly:""}}),t._v(" "),e("InfoBlock",{attrs:{type:"info",title:t.$t('When posting JSON data, "Content-Type" should be "application/json"')}}),t._v(" "),t.showOptions?e("InfoBlock",{attrs:{title:t.$t('Parameter "options" are not supported in this from')}}):t._e()],1),t._v(" "),e("el-col",{attrs:{span:2}},[e("CopyButton",{attrs:{content:t.postExample("simplified",{contentType:"json",oneLine:!0})}})],1)],1)],1),t._v(" "),e("el-tab-pane",{attrs:{label:t.$t("Simple POST (Form)")}},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:22}},[e("el-input",{attrs:{value:t.postExample("simplified",{contentType:"form"}),autosize:{minRows:6},type:"textarea",resize:"none",readonly:""}}),t._v(" "),e("InfoBlock",{attrs:{type:"info",title:t.$t('When posting form data, "Content-Type" should be "multipart/form-data" or "application/x-www-form-urlencoded", and the values of the fields support string value only')}}),t._v(" "),t.supportFileUpload?e("InfoBlock",{attrs:{type:"warning",title:t.$t('When uploading files, "Content-Type" should be "multipart/form-data"')}}):t._e(),t._v(" "),t.showOptions?e("InfoBlock",{attrs:{type:"error",title:t.$t('Parameter "options" are not supported in this from')}}):t._e()],1),t._v(" "),e("el-col",{attrs:{span:2}},[t.onlyStringParameter?e("CopyButton",{attrs:{content:t.postExample("simplified",{contentType:"form",oneLine:!0})}}):t._e()],1)],1)],1),t._v(" "),e("el-tab-pane",{attrs:{label:t.$t("Normal POST")}},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:22}},[e("el-input",{attrs:{value:t.postExample("normal"),autosize:{minRows:6},type:"textarea",resize:"none",readonly:""}}),t._v(" "),e("InfoBlock",{attrs:{type:"info",title:t.$t('When posting JSON data, "Content-Type" should be "application/json"')}}),t._v(" "),t.supportFileUpload?e("InfoBlock",{attrs:{type:"error",title:t.$t("File uploading is not supported in this this form")}}):t._e()],1),t._v(" "),e("el-col",{attrs:{span:2}},[e("CopyButton",{attrs:{content:t.postExample("normal",{oneLine:!0})}})],1)],1)],1)],1)]:t._e()]:[e("span",{staticClass:"text-bad"},[t._v(t._s(t.$t("Invalid Parameters. Examples require a valid Body content")))])]],2)])},i=[],n=(a("b64b"),a("e9c4"),a("a15b"),a("14d9"),a("99af"),a("4de4"),a("d3b7"),{name:"APIExampleDialog",components:{},watch:{callOptions:{deep:!0,handler:function(t){var e=null;try{e=JSON.parse(this.apiBodyExample)}catch(s){}if(e){for(var a in e.options=e.options||{},t)t[a]===this.DEFAULT_CALL_OPTIONS[a]?delete e.options[a]:e.options[a]=t[a];this.T.isNothing(e.options)&&delete e.options,this.apiBodyExample=JSON.stringify(e,null,2)}}}},methods:{prettyURLForHTML:function(t){if(!t)return"";try{var e=t.split("?");if(!e[1])return t;for(var a=e[1].split("&"),s=0;s<a.length;s++)a[s]=0===s?"?"+a[s]:"&"+a[s];var i=e[0]+"<br>"+a.join("<br>");return i}catch(n){return console.error(n),t}},washAPIBody:function(t){if(t=this.T.jsonCopy(t),this.T.isNothing(t))return t;if(this.T.isNothing(t.kwargs)&&!this.supportCustomKwargs&&delete t.kwargs,this.T.isNothing(t.options)&&delete t.options,this.T.notNothing(t.kwargs))for(var e in t.kwargs)0!==e.indexOf("**")&&"files"!==e||delete t.kwargs[e];return t},update:function(t,e,a){for(var s in e=e||{},e.kwargs=e.kwargs||{},e.options=e.options||{},this.apiKwargs=this.T.jsonCopy(e.kwargs),this.funcKwargs=this.T.jsonCopy(a)||{},this.callOptions)this.callOptions[s]=this.DEFAULT_CALL_OPTIONS[s];e=this.washAPIBody(e);var i="";this.T.notNothing(e)&&(i=JSON.stringify(e,null,2)),this.apiURL=t,this.apiBodyInput=i,this.show=!0},getExample:function(t,e){if(!this.apiBody)return null;t=t||"normal",e=e||{},e.asHTML=e.asHTML||!1,e.decodeURL=e.decodeURL||!1;var a=this.washAPIBody(this.apiBody)||{},s=null,i={};switch(t){case"normal":i=a||i,s=this.T.formatURL(this.apiURL,{query:i});break;case"simplified":i=a.kwargs||i,s=this.T.formatURL(this.apiURL_simplified,{query:i});break}return e.asHTML&&(s=this.prettyURLForHTML(s)),e.decodeURL&&(s=decodeURIComponent(s)),s},postExample:function(t,e){if(!this.apiBody)return null;t=t||"normal",e=e||{},e.oneLine=e.oneLine||!1,e.contentType=e.contentType||"json";var a=this.washAPIBody(this.apiBody)||{},s="\\\n",i=["curl",s,"-X","POST",s];switch(t){case"normal":this.T.notNothing(a)&&(i.push("-H",'"Content-Type: application/json"',s),i.push("-d","'".concat(JSON.stringify(a),"'"),s)),i.push(this.apiURL);break;case"simplified":if(this.T.notNothing(a.kwargs))switch(e.contentType){case"json":i.push("-H",'"Content-Type: application/json"',s),i.push("-d","'".concat(JSON.stringify(a.kwargs),"'"),s);break;case"form":if(this.supportFileUpload)for(var n in i.push("-H",'"Content-Type: multipart/form-data"',s),a.kwargs)i.push("-F","'".concat(n,"=").concat(a.kwargs[n],"'"),s);else i.push("-H",'"Content-Type: application/x-www-form-urlencoded"',s),i.push("-d","'".concat(this.T.formatQuery(a.kwargs),"'"),s);break}this.supportFileUpload&&i.push("-F","files=@UPLOAD_FILE_PATH",s),i.push(this.apiURL_simplified);break}e.oneLine&&(i=i.filter((function(t){return t!==s})));var o=i.join(" ");return o}},computed:{DEFAULT_CALL_OPTIONS:function(){return{execMode:"sync",saveResult:!1,timeout:this.$store.getters.SYSTEM_INFO("_FUNC_TASK_TIMEOUT_DEFAULT"),apiTimeout:this.$store.getters.SYSTEM_INFO("_FUNC_TASK_DEFAULT_API_TIMEOUT")}},showOptions:function(){return this.showExecModeOption||this.showSaveResultOption||this.showTimeoutOption||this.showAPITimeoutOption},showGet:function(){return this.showGetExample||this.showGetExampleSimplified},showPost:function(){return this.showPostExample||this.showPostExampleSimplified},apiURL_simplified:function(){return"".concat(this.apiURL,"/simplified")},apiBody:function(){if(!this.apiBodyInput)return{};var t=null;try{t=JSON.parse(this.apiBodyInput)}catch(e){return null}return t},onlyStringParameter:function(){if(!this.apiBody)return!1;var t=this.apiBody.kwargs||{};for(var e in t)if("string"!==typeof t[e])return!1;return!0},supportFileUpload:function(){return!(!this.apiKwargs||!this.apiKwargs.files)&&this.common.isFuncArgumentPlaceholder(this.apiKwargs.files)},supportCustomKwargs:function(){if(this.funcKwargs)for(var t in this.funcKwargs)if(0===t.indexOf("**"))return!0;return!1}},props:{title:String,showExecModeOption:{type:Boolean,default:!1},showSaveResultOption:{type:Boolean,default:!1},showTimeoutOption:{type:Boolean,default:!1},showAPITimeoutOption:{type:Boolean,default:!1},showGetExample:{type:Boolean,default:!0},showGetExampleSimplified:{type:Boolean,default:!1},showPostExample:{type:Boolean,default:!0},showPostExampleSimplified:{type:Boolean,default:!1}},data:function(){return{show:!1,apiURL:null,apiBodyInput:null,apiKwargs:null,funcKwargs:null,callOptions:{execMode:null,saveResult:null,timeout:null,apiTimeout:null}}}}),o=n,r=(a("6601"),a("2877")),l=a("1fe2"),c=a("a2ad"),p=Object(r["a"])(o,s,i,!1,null,"46fdc89a",null);"function"===typeof l["default"]&&Object(l["default"])(p),"function"===typeof c["default"]&&Object(c["default"])(p);e["a"]=p.exports},ebfc:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-CN":{"API Example":"API 调用示例","Request Options":"请求选项","Async":"异步执行","Save Result":"保留结果","Func Timeout":"函数超时","API Timeout":"API 超时","Input Parameters":"填写参数","Calling Example":"调用示例","Simple GET":"GET 简化形式","Normal GET":"GET 标准形式","Simple POST (JSON)":"POST 简化形式（JSON）","Simple POST (Form)":"POST 简化形式（表单）","Normal POST":"POST 标准形式","The JSON inside \\"kwargs\\" is the call parameter, modify its value and check out the calling example below":"\\"kwargs\\" 内的 JSON 即为调用参数，修改其中的值并在下方查看具体调用示例","This Python function allows additional parameters (**kwargs syntax)":"本 Python 函数支持传递额外的参数（**kwargs 语法）","This Python function allows uploading files, field name of the uploading file is \\"files\\"":"本 Python 函数支持文件上传，文件字段名为\\"files\\"","Invalid Parameters. Examples require a valid Body content":"参数填写存在错误，正确填写后将展示示例","Only string arguments are allowed in this from":"此方式参数值只支持字符串","Parameter \\"kwargs\\" should be URL encoded in HTTP request":"发送请求时，\\"kwargs\\" 参数需要进行 URL encode 编码","Parameter \\"options\\" are not supported in this from":"此方式不支持 \\"options\\" 参数","When posting form data, \\"Content-Type\\" should be \\"multipart/form-data\\" or \\"application/x-www-form-urlencoded\\", and the values of the fields support string value only":"POST 表单数据时，\\"Content-Type\\" 必须指定为 \\"multipart/form-data\\" 或 \\"application/x-www-form-urlencoded\\"，此时 Body 中参数值只支持字符串","When posting JSON data, \\"Content-Type\\" should be \\"application/json\\"":"POST JSON 数据时，\\"Content-Type\\" 必须指定为 \\"application/json\\"","When uploading files, \\"Content-Type\\" should be \\"multipart/form-data\\"":"上传文件时，\\"Content-Type\\" 必须指定为 \\"multipart/form-data\\"","File uploading is not supported in this this form":"此方式不支持文件上传","seconds":"秒"}}'),delete t.options._Ctor}}}]);