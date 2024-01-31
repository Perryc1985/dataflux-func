(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76ce64ac"],{1080:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-TW":{"Add Batch":"新增批處理","Add Tag":"新增標籤","Are you sure you want to delete the Batch?":"是否確認刪除此批處理？","Arguments":"引數指定","Batch created":"批處理已建立","Batch deleted":"批處理已刪除","Batch saved":"批處理已儲存","Customize ID":"定製 ID","Execute":"執行","ID must starts with \\"{prefix}\\"":"ID 必須以\\"{prefix}\\"開頭","ID will be a part of the calling URL":"此 ID 用於生成呼叫時的 URL","Invalid argument format":"引數格式不正確","JSON formated arguments (**kwargs)":"JSON 格式的引數（**kwargs）","Keep":"保留","Note":"備註","Only numbers, alphabets, dot(.), underscore(_) and hyphen(-) are allowed":"只能輸入數字、英文、點（.）、下劃線（_）以及連字元（-）","Please input arguments, input \\"{}\\" when no argument":"請輸入引數，無引數時填寫 \\"{}\\"","Please select Func":"請選擇執行函式","Setup Batch":"修改批處理","Tags":"標籤","Task Record":"任務記錄","The Func accepts extra arguments not listed above":"本函式允許傳遞額外的自定義函式引數","URL Preview":"URL預覽","parameterHint":"引數值指定為 \\"INPUT_BY_CALLER\\" 時表示允許呼叫時指定本引數","randomIDString":"bat-{隨機 ID}","recentTaskCount":"{n} 個近期任務"}}'),delete t.options._Ctor}},2020:function(t,e,a){"use strict";var n=a("a2b7"),s=a.n(n);e["default"]=s.a},2706:function(t,e,a){"use strict";var n=a("cb4cc"),s=a.n(n);e["default"]=s.a},2939:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"randomIDString":"bat-{Random ID}","parameterHint":"When the parameter value is specified as \\"INPUT_BY_CALLER\\", this parameter is allowed to be specified by the caller","recentTaskCount":"recent {n} task | recent {n} tasks"}}'),delete t.options._Ctor}},"36ab":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-HK":{"Are you sure you want to delete the Batch?":"是否確認刪除此批處理？","Are you sure you want to disable the Batch?":"是否確認禁用此批處理？","Auth":"認證","Batch deleted":"批處理已刪除","Batch disabled":"批處理已禁用","Batch enabled":"批處理已啓用","Config":"配置","No Batch has ever been added":"從未添加過任何批處理","Show all contents":"展示全部內容","Task Record":"任務記錄","Using Batches, you can execute long and time-consuming Python functions":"使用批處理，可以執行長耗時的 Python 函數","failureCount":"失敗 {n}","lastFailed":"{t}調用失敗","lastSucceeded":"{t}調用成功","successCount":"成功 {n}"}}'),delete t.options._Ctor}},"58dd":function(t,e,a){"use strict";a("cfbb")},6678:function(t,e,a){"use strict";var n=a("759b"),s=a.n(n);e["default"]=s.a},"6a77":function(t,e,a){"use strict";var n=a("2939"),s=a.n(n);e["default"]=s.a},"759b":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"lastStarted":"Started {t}","lastSucceeded":"Succeeded {t}","lastFailed":"Failed {t}"}}'),delete t.options._Ctor}},9564:function(t,e,a){"use strict";var n=a("e0fa"),s=a.n(n);e["default"]=s.a},"99d5":function(t,e,a){"use strict";a.r(e);a("99af"),a("b0c0");var n=function(){var t=this,e=t._self._c;return e("transition",{attrs:{name:"fade"}},[e("el-container",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.isLoaded,expression:"$store.state.isLoaded"}],attrs:{direction:"vertical"}},[e("el-header",{attrs:{height:"60px"}},[e("div",{staticClass:"common-page-header"},[e("h1",[t._v(t._s(t.$t("Batch")))]),t._v(" "),e("div",{staticClass:"header-control"},[e("FuzzySearchInput",{attrs:{dataFilter:t.dataFilter}}),t._v(" "),e("el-tooltip",{attrs:{content:t.$t("Show all contents"),placement:"bottom",enterable:!1}},[e("el-checkbox",{attrs:{border:!0,size:"small","true-label":"_ALL","false-label":"user"},on:{change:function(e){return t.T.changePageFilter(t.dataFilter)}},model:{value:t.dataFilter.origin,callback:function(e){t.$set(t.dataFilter,"origin",e)},expression:"dataFilter.origin"}},[t._v(t._s(t.$t("Show all")))])],1),t._v(" "),e("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.openSetup(null,"add")}}},[e("i",{staticClass:"fa fa-fw fa-plus"}),t._v("\n            "+t._s(t.$t("New"))+"\n          ")])],1)])]),t._v(" "),e("el-main",{staticClass:"common-table-container"},[t.T.isNothing(t.data)?e("div",{staticClass:"no-data-area"},[t.T.isPageFiltered({ignore:{origin:"_ALL"}})?e("h1",{staticClass:"no-data-title"},[e("i",{staticClass:"fa fa-fw fa-search"}),t._v(t._s(t.$t("No matched data found")))]):e("h1",{staticClass:"no-data-title"},[e("i",{staticClass:"fa fa-fw fa-info-circle"}),t._v(t._s(t.$t("No Batch has ever been added")))]),t._v(" "),e("p",{staticClass:"no-data-tip"},[t._v("\n          "+t._s(t.$t("Using Batches, you can execute long and time-consuming Python functions"))+"\n        ")])]):e("el-table",{staticClass:"common-table",attrs:{height:"100%",data:t.data,"row-class-name":t.T.getHighlightRowCSS}},[e("el-table-column",{attrs:{label:t.$t("Func"),"min-width":"420"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("FuncInfo",{attrs:{"config-func-id":a.row.funcId,id:a.row.func_id,title:a.row.func_title,kwargsJSON:a.row.funcCallKwargsJSON}}),t._v(" "),e("div",[e("span",{staticClass:"text-info"},[t._v("ID")]),t._v("\n               "),e("code",{staticClass:"text-main"},[t._v(t._s(a.row.id))]),t._v(" "),e("CopyButton",{attrs:{content:a.row.id}}),t._v(" "),t.T.notNothing(a.row.tagsJSON)||t.T.notNothing(a.row.func_tagsJSON)?[e("br"),t._v(" "),e("span",{staticClass:"text-info"},[t._v("　"+t._s(t.$t("Tags")))]),t._v(" "),t._l(a.row.func_tagsJSON,(function(a){return e("el-tag",{key:a,attrs:{size:"mini",type:"info"}},[t._v(t._s(a))])})),t._v(" "),t._l(a.row.tagsJSON,(function(a){return e("el-tag",{key:a,attrs:{size:"mini",type:"warning"}},[t._v(t._s(a))])}))]:t._e(),t._v(" "),a.row.note?[e("br"),t._v(" "),e("span",{staticClass:"text-info"},[t._v("　"+t._s(t.$t("Note"))+t._s(t.$t(":")))]),t._v(" "),e("span",[t._v(t._s(a.row.note))])]:t._e()],2),t._v(" "),a.row.lastTaskStatus&&a.row.lastTaskStatus.exceptionType?e("InfoBlock",{attrs:{type:"error",title:"".concat(a.row.lastTaskStatus.exceptionType,": ").concat(a.row.lastTaskStatus.exceptionTEXT)}}):t._e()]}}])}),t._v(" "),e("el-table-column",{attrs:{label:t.$t("Config"),width:"240"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticClass:"text-info"},[t._v(t._s(t.$t("Auth"))+t._s(t.$t(":")))]),t._v(" "),e("el-tooltip",{attrs:{content:a.row.apia_title,disabled:!a.row.apia_title,placement:"right"}},[e("span",{class:{"text-main":!!a.row.apia_id}},[t._v(t._s(t.C.API_AUTH_MAP.get(a.row.apia_type).name))])])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:t.$t("Status"),width:"260"},scopedSlots:t._u([{key:"default",fn:function(a){return[a.row.isDisabled?e("span",{staticClass:"text-bad"},[e("i",{staticClass:"fa fa-fw fa-ban"}),t._v("\n              "+t._s(t.$t("Disabled"))+"\n            ")]):e("span",{staticClass:"text-good"},[e("i",{staticClass:"fa fa-fw fa-check"}),t._v("\n              "+t._s(t.$t("Enabled"))+"\n            ")]),t._v(" "),e("br"),t._v(" "),a.row.lastTaskStatus?e("el-tooltip",{attrs:{placement:"right",effect:"dark"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("span",{staticClass:"datetime-tip"},[t._v(t._s(t._f("datetime")(a.row.lastTaskStatus.timestamp)))])]),t._v(" "),"started"===a.row.lastTaskStatus.status?e("span",{staticClass:"text-main"},[e("i",{staticClass:"fa fa-fw fa-circle-o-notch fa-spin"}),t._v("\n                "+t._s(t.$t("lastStarted",{t:t.T.fromNow(a.row.lastTaskStatus.timestamp)}))+"\n              ")]):"success"===a.row.lastTaskStatus.status?e("span",{staticClass:"text-good"},[e("i",{staticClass:"fa fa-fw fa-check"}),t._v("\n                "+t._s(t.$t("lastSucceeded",{t:t.T.fromNow(a.row.lastTaskStatus.timestamp)}))+"\n              ")]):"failure"===a.row.lastTaskStatus.status?e("span",{staticClass:"text-bad"},[e("i",{staticClass:"fa fa-fw fa-times"}),t._v("\n                "+t._s(t.$t("lastFailed",{t:t.T.fromNow(a.row.lastTaskStatus.timestamp)}))+"\n              ")]):t._e()]):e("span",{staticClass:"text-info"},[e("i",{staticClass:"fa fa-fw fa-ellipsis-h"}),t._v("\n              "+t._s(t.$t("No recent record"))+"\n            ")])]}}])}),t._v(" "),e("el-table-column",{attrs:{align:"right",width:"350"},scopedSlots:t._u([{key:"default",fn:function(a){return[t.funcTaskRecordCountMap[a.row.id]?[e("el-link",{attrs:{disabled:!t.funcTaskRecordCountMap[a.row.id].count},on:{click:function(e){return t.common.goToTaskRecord({origin:"batch",originId:a.row.id},{hlDataId:a.row.id})}}},[t._v("\n                "+t._s(t.$t("Task Record"))+" "),t.funcTaskRecordCountMap[a.row.id].count?e("code",[t._v("("+t._s(t.T.numberLimit(t.funcTaskRecordCountMap[a.row.id].count))+")")]):t._e()])]:t._e(),t._v(" "),e("el-link",{attrs:{disabled:t.T.isNothing(a.row.func_id)},on:{click:function(e){return t.showAPI(a.row)}}},[t._v(t._s(t.$t("Example")))]),t._v(" "),a.row.isDisabled?e("el-link",{directives:[{name:"prevent-re-click",rawName:"v-prevent-re-click"}],attrs:{disabled:t.T.isNothing(a.row.func_id)},on:{click:function(e){return t.quickSubmitData(a.row,"enable")}}},[t._v(t._s(t.$t("Enable")))]):t._e(),t._v(" "),a.row.isDisabled?t._e():e("el-link",{attrs:{disabled:t.T.isNothing(a.row.func_id)},on:{click:function(e){return t.quickSubmitData(a.row,"disable")}}},[t._v(t._s(t.$t("Disable")))]),t._v(" "),e("el-link",{on:{click:function(e){return t.openSetup(a.row,"setup")}}},[t._v(t._s(t.$t("Setup")))]),t._v(" "),e("el-link",{on:{click:function(e){return t.quickSubmitData(a.row,"delete")}}},[t._v(t._s(t.$t("Delete")))])]}}])})],1)],1),t._v(" "),e("Pager",{attrs:{pageInfo:t.pageInfo}}),t._v(" "),e("BatchSetup",{ref:"setup"}),t._v(" "),e("APIExampleDialog",{ref:"apiExampleDialog",attrs:{showExecModeOption:!1,showPostExample:!0,showPostExampleSimplified:!0,showGetExample:!0,showGetExampleSimplified:!0}})],1)],1)},s=[],r=a("c7eb"),o=a("1da1"),i=(a("130f"),a("d81d"),function(){var t=this,e=t._self._c;return e("el-dialog",{attrs:{id:"ScriptSetSetup",visible:t.show,"close-on-click-modal":!1,"close-on-press-escape":!1,width:"750px"},on:{"update:visible":function(e){t.show=e}}},[e("template",{slot:"title"},[t._v("\n    "+t._s(t.pageTitle)+" "),e("code",{staticClass:"text-main"},[t._v(t._s(t.data.func_title))])]),t._v(" "),e("el-container",{attrs:{direction:"vertical"}},[e("el-main",[e("div",{staticClass:"setup-form"},[e("el-form",{ref:"form",attrs:{"label-width":"135px",model:t.form,rules:t.formRules}},["add"===t.pageMode?e("el-form-item",{attrs:{label:t.$t("Customize ID"),prop:"useCustomId"}},[e("el-switch",{model:{value:t.useCustomId,callback:function(e){t.useCustomId=e},expression:"useCustomId"}}),t._v(" "),e("span",{staticClass:"text-main float-right"},[t._v("\n              "+t._s(t.$t("URL Preview"))+t._s(t.$t(":"))+"\n              "),e("code",{staticClass:"code-font"},[t._v(t._s("/api/v1/bat/".concat(t.useCustomId?t.form.id:t.$t("randomIDString"))))])])],1):t._e(),t._v(" "),"add"===t.pageMode?e("el-form-item",{directives:[{name:"show",rawName:"v-show",value:t.useCustomId,expression:"useCustomId"}],attrs:{label:"ID",prop:"id"}},[e("el-input",{attrs:{maxlength:"60"},model:{value:t.form.id,callback:function(e){t.$set(t.form,"id",e)},expression:"form.id"}}),t._v(" "),e("InfoBlock",{attrs:{title:t.$t("ID will be a part of the calling URL")}})],1):t._e(),t._v(" "),e("el-form-item",{attrs:{label:t.$t("Execute"),prop:"funcId"}},[e("el-cascader",{ref:"funcCascader",attrs:{"popper-class":"code-font",placeholder:"--",filterable:"","filter-method":t.common.funcCascaderFilter,options:t.funcCascader,props:{expandTrigger:"hover",emitPath:!1,multiple:!1}},on:{change:t.autoFillFuncCallKwargsJSON},model:{value:t.form.funcId,callback:function(e){t.$set(t.form,"funcId",e)},expression:"form.funcId"}})],1),t._v(" "),e("el-form-item",{attrs:{label:t.$t("Arguments"),prop:"funcCallKwargsJSON"}},[e("el-input",{attrs:{type:"textarea",resize:"none",autosize:{minRows:2}},model:{value:t.form.funcCallKwargsJSON,callback:function(e){t.$set(t.form,"funcCallKwargsJSON",e)},expression:"form.funcCallKwargsJSON"}}),t._v(" "),e("InfoBlock",{attrs:{title:t.$t("JSON formated arguments (**kwargs)")}}),t._v(" "),e("InfoBlock",{attrs:{title:t.$t("parameterHint")}}),t._v(" "),t.apiCustomKwargsSupport?e("InfoBlock",{attrs:{type:"success",title:t.$t("The Func accepts extra arguments not listed above")}}):t._e()],1),t._v(" "),e("el-form-item",{attrs:{label:t.$t("Tags"),prop:"tagsJSON"}},[t._l(t.form.tagsJSON,(function(a){return e("el-tag",{key:a,attrs:{type:"warning",size:"small",closable:""},on:{close:function(e){return t.removeTag(a)}}},[t._v(t._s(a))])})),t._v(" "),t.showAddTag?e("el-input",{ref:"newTag",attrs:{size:"mini"},on:{blur:t.addTag},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTag.apply(null,arguments)}},model:{value:t.newTag,callback:function(e){t.newTag=e},expression:"newTag"}}):e("el-button",{attrs:{type:"text"},on:{click:t.openAddTagInput}},[t._v(t._s(t.$t("Add Tag")))])],2),t._v(" "),e("el-form-item",{attrs:{label:t.$t("Task Record")}},[e("span",{staticClass:"task-record-limit-prefix"},[t._v(t._s(t.$t("Keep"))+" ")]),t._v(" "),e("el-input-number",{staticClass:"task-record-limit-input",attrs:{min:t.$store.getters.SYSTEM_INFO("_TASK_RECORD_LIMIT_MIN"),max:t.$store.getters.SYSTEM_INFO("_TASK_RECORD_LIMIT_MAX"),step:10,precision:0},model:{value:t.form.taskRecordLimit,callback:function(e){t.$set(t.form,"taskRecordLimit",e)},expression:"form.taskRecordLimit"}}),t._v(" "),e("span",{staticClass:"task-record-limit-unit"},[t._v(t._s(t.$tc("recentTaskCount",t.form.taskRecordLimit,{n:""}))+" ")]),t._v(" "),e("el-link",{staticClass:"task-record-limit-clear",attrs:{type:"primary"},on:{click:function(e){e.stopPropagation(),t.form.taskRecordLimit=t.$store.getters.SYSTEM_INFO("_TASK_RECORD_FUNC_LIMIT_BY_ORIGIN_BATCH")}}},[t._v(t._s(t.$t("Restore Default")))])],1),t._v(" "),e("el-form-item",{attrs:{label:t.$t("API Auth"),prop:"apiAuthId"}},[e("el-select",{model:{value:t.form.apiAuthId,callback:function(e){t.$set(t.form,"apiAuthId",e)},expression:"form.apiAuthId"}},t._l(t.apiAuthList,(function(t){return e("el-option",{key:t.id,attrs:{label:t.label,value:t.id}})})),1)],1),t._v(" "),e("el-form-item",{attrs:{label:t.$t("Note")}},[e("el-input",{attrs:{placeholder:t.$t("Optional"),type:"textarea",resize:"none",autosize:{minRows:2},maxlength:"5000"},model:{value:t.form.note,callback:function(e){t.$set(t.form,"note",e)},expression:"form.note"}})],1),t._v(" "),e("el-form-item",{staticClass:"setup-footer"},["setup"===t.pageMode?e("el-button",{staticClass:"danger-button float-left",on:{click:t.deleteData}},[t._v(t._s(t.$t("Delete")))]):t._e(),t._v(" "),e("el-button",{directives:[{name:"prevent-re-click",rawName:"v-prevent-re-click"}],attrs:{type:"primary"},on:{click:t.submitData}},[t._v(t._s(t.$t("Save")))])],1)],1)],1)])],1)],2)}),c=[],u=(a("d3b7"),a("159b"),a("b64b"),a("e9c4"),a("25f0"),a("a434"),a("14d9"),a("d9e2"),a("ac1f"),a("466d"),{name:"BatchSetup",components:{},watch:{"form.id":function(t){t&&(t.length<this.ID_PREFIX.length||t.indexOf(this.ID_PREFIX)<0)&&(this.form.id=this.ID_PREFIX)},show:function(t){t||this.$root.$emit("reload.batchList")},useCustomId:function(t){this.form.id=t?"".concat(this.ID_PREFIX,"my-batch"):null}},methods:{loadData:function(t){var e=this;return Object(o["a"])(Object(r["a"])().mark((function a(){var n,s,o,i;return Object(r["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t){a.next=7;break}e.pageMode="add",e.T.jsonClear(e.form),e.form.taskRecordLimit=e.$store.getters.SYSTEM_INFO("_TASK_RECORD_FUNC_LIMIT_BY_ORIGIN_BATCH"),e.data={},a.next=22;break;case 7:return e.pageMode="setup",e.data.id=t,a.next=11,e.T.callAPI_getOne("/api/v1/batches/do/list",e.data.id);case 11:if(n=a.sent,n&&n.ok){a.next=14;break}return a.abrupt("return");case 14:e.data=n.data,s={},Object.keys(e.form).forEach((function(t){return s[t]=e.data[t]})),s.funcCallKwargsJSON=JSON.stringify(s.funcCallKwargsJSON,null,2),s.tagsJSON=s.tagsJSON||[],s.apiAuthId=e.data.apia_id,e.T.isNothing(s.taskRecordLimit)&&(s.taskRecordLimit=e.$store.getters.SYSTEM_INFO("_TASK_RECORD_FUNC_LIMIT_BY_ORIGIN_BATCH")),e.form=s;case 22:return a.next=24,e.common.getFuncList();case 24:return o=a.sent,e.funcMap=o.map,e.funcCascader=o.cascader,a.next=29,e.common.getAPIAuthList();case 29:i=a.sent,e.apiAuthList=i,e.show=!0;case 32:case"end":return a.stop()}}),a)})))()},submitData:function(){var t=this;return Object(o["a"])(Object(r["a"])().mark((function e(){return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$refs.form.validate();case 3:e.next=8;break;case 5:return e.prev=5,e.t0=e["catch"](0),e.abrupt("return",console.error(e.t0));case 8:e.t1=t.pageMode,e.next="add"===e.t1?11:"setup"===e.t1?14:17;break;case 11:return e.next=13,t.addData();case 13:return e.abrupt("return",e.sent);case 14:return e.next=16,t.modifyData();case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e,null,[[0,5]])})))()},addData:function(){var t=this;return Object(o["a"])(Object(r["a"])().mark((function e(){var a,n,s;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t.T.jsonCopy(t.form),n={body:{data:a},alert:{okMessage:t.$t("Batch created")}},e.prev=2,n.body.data.funcCallKwargsJSON=JSON.parse(t.form.funcCallKwargsJSON),e.next=9;break;case 6:return e.prev=6,e.t0=e["catch"](2),e.abrupt("return",t.T.alert("".concat(t.$t("Invalid argument format"),"<br>").concat(e.t0.toString())));case 9:return e.next=11,t.T.callAPI("post","/api/v1/batches/do/add",n);case 11:if(s=e.sent,s&&s.ok){e.next=14;break}return e.abrupt("return");case 14:t.$store.commit("updateHighlightedTableDataId",s.data.id),t.show=!1;case 16:case"end":return e.stop()}}),e,null,[[2,6]])})))()},modifyData:function(){var t=this;return Object(o["a"])(Object(r["a"])().mark((function e(){var a,n,s;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t.T.jsonCopy(t.form),delete a.id,n={params:{id:t.data.id},body:{data:a},alert:{okMessage:t.$t("Batch saved")}},e.prev=3,n.body.data.funcCallKwargsJSON=JSON.parse(t.form.funcCallKwargsJSON),e.next=10;break;case 7:return e.prev=7,e.t0=e["catch"](3),e.abrupt("return",t.T.alert("".concat(t.$t("Invalid argument format"),"<br>").concat(e.t0.toString())));case 10:return e.next=12,t.T.callAPI("post","/api/v1/batches/:id/do/modify",n);case 12:if(s=e.sent,s&&s.ok){e.next=15;break}return e.abrupt("return");case 15:t.$store.commit("updateHighlightedTableDataId",s.data.id),t.show=!1;case 17:case"end":return e.stop()}}),e,null,[[3,7]])})))()},deleteData:function(){var t=this;return Object(o["a"])(Object(r["a"])().mark((function e(){var a;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.T.confirm(t.$t("Are you sure you want to delete the Batch?"));case 2:if(e.sent){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,t.T.callAPI("/api/v1/batches/:id/do/delete",{params:{id:t.data.id},alert:{okMessage:t.$t("Batch deleted")}});case 6:if(a=e.sent,a&&a.ok){e.next=9;break}return e.abrupt("return");case 9:t.show=!1;case 10:case"end":return e.stop()}}),e)})))()},autoFillFuncCallKwargsJSON:function(t){var e=this.funcMap[t].argsJSON||Object.keys(this.funcMap[t].kwargsJSON),a={};e.forEach((function(t){0===t.indexOf("**")||(a[t]="INPUT_BY_CALLER")})),this.form.funcCallKwargsJSON=JSON.stringify(a,null,2)},removeTag:function(t){this.form.tagsJSON.splice(this.form.tagsJSON.indexOf(t),1)},openAddTagInput:function(){var t=this;this.showAddTag=!0,this.$nextTick((function(e){t.$refs.newTag.$refs.input.focus()}))},addTag:function(){var t=this.newTag;t&&(Array.isArray(this.form.tagsJSON)||this.$set(this.form,"tagsJSON",[]),this.form.tagsJSON.push(t)),this.showAddTag=!1,this.newTag=""}},computed:{ID_PREFIX:function(){return"bat-"},pageTitle:function(){var t={setup:this.$t("Setup Batch"),add:this.$t("Add Batch")};return t[this.pageMode]},apiCustomKwargsSupport:function(){var t=this.form.funcId;if(!t)return!1;if(!this.funcMap[t])return!1;for(var e in this.funcMap[t].kwargsJSON)if(0===e.indexOf("**"))return!0;return!1}},data:function(){var t=this,e=this.$t('Please input arguments, input "{}" when no argument');return{show:!1,pageMode:null,data:{},funcMap:{},funcCascader:[],apiAuthList:[],useCustomId:!1,showAddTag:!1,newTag:"",form:{id:null,funcId:null,funcCallKwargsJSON:null,tagsJSON:[],apiAuthId:null,taskRecordLimit:this.$store.getters.SYSTEM_INFO("_TASK_RECORD_FUNC_LIMIT_BY_ORIGIN_BATCH"),note:null},formRules:{id:[{trigger:"change",validator:function(e,a,n){if(t.T.notNothing(a)){if(0!==a.indexOf(t.ID_PREFIX)||a===t.ID_PREFIX)return n(new Error(t.$t('ID must starts with "{prefix}"',{prefix:t.ID_PREFIX})));if(!a.match(/^[0-9a-zA-Z\.\-\_]+$/g))return n(new Error(t.$t("Only numbers, alphabets, dot(.), underscore(_) and hyphen(-) are allowed")))}return n()}}],funcId:[{trigger:"blur",message:this.$t("Please select Func"),required:!0}],funcCallKwargsJSON:[{trigger:"blur",message:e,required:!0},{trigger:"change",validator:function(t,a,n){try{if(a){var s=JSON.parse(a);if(Array.isArray(s))return n(new Error(e))}return n()}catch(r){return n(new Error(e))}}}]}}}}),l=u,d=(a("fd70"),a("2877")),f=a("6a77"),p=a("2706"),h=a("9564"),m=a("f2d3"),_=Object(d["a"])(l,i,c,!1,null,"1571d56a",null);"function"===typeof f["default"]&&Object(f["default"])(_),"function"===typeof p["default"]&&Object(p["default"])(_),"function"===typeof h["default"]&&Object(h["default"])(_),"function"===typeof m["default"]&&Object(m["default"])(_);var b=_.exports,g=a("b3fd"),v={name:"BatchList",components:{BatchSetup:b,APIExampleDialog:g["a"]},watch:{$route:{immediate:!0,handler:function(t,e){var a=this;return Object(o["a"])(Object(r["a"])().mark((function t(){return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a.loadData();case 2:case"end":return t.stop()}}),t)})))()}},"$store.state.isLoaded":function(t){var e=this;t&&setImmediate((function(){return e.T.autoScrollTable()}))}},methods:{loadData:function(t){var e=this;return Object(o["a"])(Object(r["a"])().mark((function a(){var n,s;return Object(r["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t=t||{},n=e.dataFilter=e.T.createListQuery(),e.T.isNothing(e.$route.query)&&(n.origin="user"),a.next=5,e.T.callAPI_get("/api/v1/batches/do/list",{query:n});case 5:if(s=a.sent,s&&s.ok){a.next=8;break}return a.abrupt("return");case 8:e.data=s.data,e.pageInfo=s.pageInfo,e.$store.commit("updateLoadStatus",!0),e.isLocalFuncTaskRecordEnabled&&!t.skipStatistic&&(e.isFuncTaskRecordCountLoaded=!1,setTimeout(Object(o["a"])(Object(r["a"])().mark((function t(){return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.common.getFuncTaskRecordCountMap("originId",e.data.map((function(t){return t.id})));case 2:e.funcTaskRecordCountMap=t.sent,e.isFuncTaskRecordCountLoaded=!0;case 4:case"end":return t.stop()}}),t)}))),1e3));case 12:case"end":return a.stop()}}),a)})))()},quickSubmitData:function(t,e){var a=this;return Object(o["a"])(Object(r["a"])().mark((function n(){var s;return Object(r["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:n.t0=e,n.next="disable"===n.t0?3:"delete"===n.t0?8:13;break;case 3:return n.next=5,a.T.confirm(a.$t("Are you sure you want to disable the Batch?"));case 5:if(n.sent){n.next=7;break}return n.abrupt("return");case 7:return n.abrupt("break",13);case 8:return n.next=10,a.T.confirm(a.$t("Are you sure you want to delete the Batch?"));case 10:if(n.sent){n.next=12;break}return n.abrupt("return");case 12:return n.abrupt("break",13);case 13:s=null,n.t1=e,n.next="disable"===n.t1?17:"enable"===n.t1?21:"delete"===n.t1?25:29;break;case 17:return n.next=19,a.T.callAPI("post","/api/v1/batches/:id/do/modify",{params:{id:t.id},body:{data:{isDisabled:!0}},alert:{okMessage:a.$t("Batch disabled")}});case 19:return s=n.sent,n.abrupt("break",29);case 21:return n.next=23,a.T.callAPI("post","/api/v1/batches/:id/do/modify",{params:{id:t.id},body:{data:{isDisabled:!1}},alert:{okMessage:a.$t("Batch enabled")}});case 23:return s=n.sent,n.abrupt("break",29);case 25:return n.next=27,a.T.callAPI("/api/v1/batches/:id/do/delete",{params:{id:t.id},alert:{okMessage:a.$t("Batch deleted")}});case 27:return s=n.sent,n.abrupt("break",29);case 29:if(s&&s.ok){n.next=31;break}return n.abrupt("return");case 31:return a.$store.commit("updateHighlightedTableDataId",t.id),n.next=34,a.loadData({skipStatistic:!0});case 34:case"end":return n.stop()}}),n)})))()},openSetup:function(t,e){switch(e){case"add":this.$refs.setup.loadData();break;case"setup":this.$store.commit("updateHighlightedTableDataId",t.id),this.$refs.setup.loadData(t.id);break}},showAPI:function(t){var e=this;return Object(o["a"])(Object(r["a"])().mark((function a(){var n,s,o,i,c,u;return Object(r["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.T.callAPI_getOne("/api/v1/funcs/do/list",t.funcId);case 2:if(n=a.sent,n&&n.ok){a.next=5;break}return a.abrupt("return");case 5:for(i in s=e.T.formatURL("/api/v1/bat/:id",{baseURL:!0,params:{id:t.id}}),o={},t.funcCallKwargsJSON)t.funcCallKwargsJSON.hasOwnProperty(i)&&e.common.isFuncArgumentPlaceholder(t.funcCallKwargsJSON[i])&&(o[i]=t.funcCallKwargsJSON[i]);c={kwargs:o},u=n.data.kwargsJSON,e.$refs.apiExampleDialog.update(s,c,u),e.$store.commit("updateHighlightedTableDataId",t.id);case 12:case"end":return a.stop()}}),a)})))()}},computed:{isLocalFuncTaskRecordEnabled:function(){return!!this.$store.getters.SYSTEM_SETTINGS("LOCAL_FUNC_TASK_RECORD_ENABLED")}},props:{},data:function(){var t=this.T.createPageInfo(),e=this.T.createListQuery();return{data:[],pageInfo:t,funcTaskRecordCountMap:{},isFuncTaskRecordCountLoaded:!1,dataFilter:{_fuzzySearch:e._fuzzySearch,origin:e.origin}}},created:function(){var t=this;this.$root.$on("reload.batchList",(function(){return t.loadData({skipStatistic:!0})}))},destroyed:function(){this.$root.$off("reload.batchList")}},w=v,k=(a("58dd"),a("6678")),T=a("2020"),I=a("ea74"),S=a("f13a"),C=Object(d["a"])(w,n,s,!1,null,"41657d6a",null);"function"===typeof k["default"]&&Object(k["default"])(C),"function"===typeof T["default"]&&Object(T["default"])(C),"function"===typeof I["default"]&&Object(I["default"])(C),"function"===typeof S["default"]&&Object(S["default"])(C);e["default"]=C.exports},a2b7:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-CN":{"Config":"配置","Auth":"认证","Task Record":"任务记录","Batch disabled":"批处理已禁用","Batch enabled":"批处理已启用","Batch deleted":"批处理已删除","Show all contents":"展示全部内容","No Batch has ever been added":"从未添加过任何批处理","Are you sure you want to disable the Batch?":"是否确认禁用此批处理？","Are you sure you want to delete the Batch?":"是否确认删除此批处理？","lastStarted":"{t}执行","lastSucceeded":"{t}执行成功","lastFailed":"{t}执行失败","Using Batches, you can execute long and time-consuming Python functions":"使用批处理，可以执行长耗时的 Python 函数"}}'),delete t.options._Ctor}},a434:function(t,e,a){"use strict";var n=a("23e7"),s=a("7b0b"),r=a("23cb"),o=a("5926"),i=a("07fa"),c=a("3511"),u=a("65f0"),l=a("8418"),d=a("083a"),f=a("1dde"),p=f("splice"),h=Math.max,m=Math.min;n({target:"Array",proto:!0,forced:!p},{splice:function(t,e){var a,n,f,p,_,b,g=s(this),v=i(g),w=r(t,v),k=arguments.length;for(0===k?a=n=0:1===k?(a=0,n=v-w):(a=k-2,n=m(h(o(e),0),v-w)),c(v+a-n),f=u(g,n),p=0;p<n;p++)_=w+p,_ in g&&l(f,p,g[_]);if(f.length=n,a<n){for(p=w;p<v-n;p++)_=p+n,b=p+a,_ in g?g[b]=g[_]:d(g,b);for(p=v;p>v-n+a;p--)d(g,p-1)}else if(a>n)for(p=v-n;p>w;p--)_=p+n-1,b=p+a-1,_ in g?g[b]=g[_]:d(g,b);for(p=0;p<a;p++)g[p+w]=arguments[p+2];return g.length=v-n+a,f}})},cb4cc:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-CN":{"randomIDString":"bat-{随机 ID}","Add Batch":"添加批处理","Setup Batch":"修改批处理","Customize ID":"定制 ID","Execute":"执行","Arguments":"参数指定","Task Record":"任务记录","Keep":"保留","Tags":"标签","Add Tag":"添加标签","Note":"备注","URL Preview":"URL预览","ID will be a part of the calling URL":"此 ID 用于生成调用时的 URL","JSON formated arguments (**kwargs)":"JSON 格式的参数（**kwargs）","The Func accepts extra arguments not listed above":"本函数允许传递额外的自定义函数参数","ID must starts with \\"{prefix}\\"":"ID 必须以\\"{prefix}\\"开头","Only numbers, alphabets, dot(.), underscore(_) and hyphen(-) are allowed":"只能输入数字、英文、点（.）、下划线（_）以及连字符（-）","Please select Func":"请选择执行函数","Please input arguments, input \\"{}\\" when no argument":"请输入参数，无参数时填写 \\"{}\\"","Batch created":"批处理已创建","Batch saved":"批处理已保存","Batch deleted":"批处理已删除","Are you sure you want to delete the Batch?":"是否确认删除此批处理？","Invalid argument format":"参数格式不正确","parameterHint":"参数值指定为 \\"INPUT_BY_CALLER\\" 时表示允许调用时指定本参数","recentTaskCount":"{n} 个近期任务"}}'),delete t.options._Ctor}},ccb7:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-TW":{"Are you sure you want to delete the Batch?":"是否確認刪除此批處理？","Are you sure you want to disable the Batch?":"是否確認禁用此批處理？","Auth":"認證","Batch deleted":"批處理已刪除","Batch disabled":"批處理已禁用","Batch enabled":"批處理已啟用","Config":"配置","No Batch has ever been added":"從未新增過任何批處理","Show all contents":"展示全部內容","Task Record":"任務記錄","Using Batches, you can execute long and time-consuming Python functions":"使用批處理，可以執行長耗時的 Python 函式","failureCount":"失敗 {n}","lastFailed":"{t}呼叫失敗","lastSucceeded":"{t}呼叫成功","successCount":"成功 {n}"}}'),delete t.options._Ctor}},cfbb:function(t,e,a){},e0fa:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-HK":{"Add Batch":"添加批處理","Add Tag":"添加標籤","Are you sure you want to delete the Batch?":"是否確認刪除此批處理？","Arguments":"參數指定","Batch created":"批處理已創建","Batch deleted":"批處理已刪除","Batch saved":"批處理已保存","Customize ID":"定製 ID","Execute":"執行","ID must starts with \\"{prefix}\\"":"ID 必須以\\"{prefix}\\"開頭","ID will be a part of the calling URL":"此 ID 用於生成調用時的 URL","Invalid argument format":"參數格式不正確","JSON formated arguments (**kwargs)":"JSON 格式的參數（**kwargs）","Keep":"保留","Note":"備註","Only numbers, alphabets, dot(.), underscore(_) and hyphen(-) are allowed":"只能輸入數字、英文、點（.）、下劃線（_）以及連字符（-）","Please input arguments, input \\"{}\\" when no argument":"請輸入參數，無參數時填寫 \\"{}\\"","Please select Func":"請選擇執行函數","Setup Batch":"修改批處理","Tags":"標籤","Task Record":"任務記錄","The Func accepts extra arguments not listed above":"本函數允許傳遞額外的自定義函數參數","URL Preview":"URL預覽","parameterHint":"參數值指定為 \\"INPUT_BY_CALLER\\" 時表示允許調用時指定本參數","randomIDString":"bat-{隨機 ID}","recentTaskCount":"{n} 個近期任務"}}'),delete t.options._Ctor}},ea74:function(t,e,a){"use strict";var n=a("36ab"),s=a.n(n);e["default"]=s.a},f13a:function(t,e,a){"use strict";var n=a("ccb7"),s=a.n(n);e["default"]=s.a},f2d3:function(t,e,a){"use strict";var n=a("1080"),s=a.n(n);e["default"]=s.a},f9d3:function(t,e,a){},fd70:function(t,e,a){"use strict";a("f9d3")}}]);