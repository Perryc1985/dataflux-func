(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52e8523f"],{"21a6":function(t,e,n){(function(n){var o,a,s;(function(n,i){a=[],o=i,s="function"===typeof o?o.apply(e,a):o,void 0===s||(t.exports=s)})(0,(function(){"use strict";function e(t,e){return"undefined"==typeof e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function o(t,e,n){var o=new XMLHttpRequest;o.open("GET",t),o.responseType="blob",o.onload=function(){c(o.response,e,n)},o.onerror=function(){console.error("could not download file")},o.send()}function a(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function s(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(o){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,r=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!r?function(t,e,n){var r=i.URL||i.webkitURL,c=document.createElement("a");e=e||t.name||"download",c.download=e,c.rel="noopener","string"==typeof t?(c.href=t,c.origin===location.origin?s(c):a(c.href)?o(t,e,n):s(c,c.target="_blank")):(c.href=r.createObjectURL(t),setTimeout((function(){r.revokeObjectURL(c.href)}),4e4),setTimeout((function(){s(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,n,i){if(n=n||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(e(t,i),n);else if(a(t))o(t,n,i);else{var r=document.createElement("a");r.href=t,r.target="_blank",setTimeout((function(){s(r)}))}}:function(t,e,n,a){if(a=a||open("","_blank"),a&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof t)return o(t,e,n);var s="application/octet-stream"===t.type,c=/constructor/i.test(i.HTMLElement)||i.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||s&&c||r)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var t=d.result;t=l?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=t:location=t,a=null},d.readAsDataURL(t)}else{var p=i.URL||i.webkitURL,u=p.createObjectURL(t);a?a.location=u:location.href=u,a=null,setTimeout((function(){p.revokeObjectURL(u)}),4e4)}});i.saveAs=c.saveAs=c,t.exports=c}))}).call(this,n("c8ba"))},"329f":function(t,e,n){"use strict";n("7e85")},"3ffc":function(t,e,n){"use strict";var o=n("f4b7"),a=n.n(o);e["default"]=a.a},"40a2":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-CN":{"No Script Set has ever been exported":"从未导出过任何脚本集","Exporting Script Sets for backup or sharing Script Sets":"使用脚本集导出功能备份或分享脚本集"}}'),delete t.options._Ctor}},70948:function(t,e,n){"use strict";var o=n("88bc"),a=n.n(o);e["default"]=a.a},"71b7":function(t,e,n){"use strict";var o=n("ef3a"),a=n.n(o);e["default"]=a.a},"76c7":function(t,e,n){"use strict";n("eb3a")},"7e85":function(t,e,n){},"88bc":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-HK":{"Data exported":"數據已導出","Exported Connectors will not include sensitive data (such as password), please re-entered them after import":"導出的連接器不包含敏感數據（如密碼等），請在導入後重新輸入","Exported content has been downloaded as a zip file:":"導出內容已作為 zip 文件下載：","Exporting with related contents":"導出並附帶關聯內容","Meaningful notes can provide a reliable reference for the future":"有意義的備註可以為將來提供可靠的參考","Please input note":"請輸入備註","Please select at least one Script Set":"請選擇導出腳本集","Related Contents":"關聯內容"}}'),delete t.options._Ctor}},9438:function(t,e,n){"use strict";var o=n("c026"),a=n.n(o);e["default"]=a.a},c026:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-TW":{"Exporting Script Sets for backup or sharing Script Sets":"使用指令碼集匯出功能備份或分享指令碼集","No Script Set has ever been exported":"從未匯出過任何指令碼集"}}'),delete t.options._Ctor}},c155:function(t,e,n){"use strict";var o=n("40a2"),a=n.n(o);e["default"]=a.a},c856:function(t,e,n){"use strict";var o=n("d61f"),a=n.n(o);e["default"]=a.a},d61f:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-CN":{"Related Contents":"关联内容","Exporting with related contents":"导出并附带关联内容","Exported Connectors will not include sensitive data (such as password), please re-entered them after import":"导出的连接器不包含敏感数据（如密码等），请在导入后重新输入","Meaningful notes can provide a reliable reference for the future":"有意义的备注可以为将来提供可靠的参考","Please select at least one Script Set":"请选择导出脚本集","Please input note":"请输入备注","Data exported":"数据已导出","Exported content has been downloaded as a zip file:":"导出内容已作为 zip 文件下载："}}'),delete t.options._Ctor}},de2a:function(t,e,n){"use strict";n.r(e);n("99af"),n("b0c0");var o=function(){var t=this,e=t._self._c;return e("transition",{attrs:{name:"fade"}},[e("el-container",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.isLoaded,expression:"$store.state.isLoaded"}],attrs:{direction:"vertical"}},[e("el-header",{attrs:{height:"60px"}},[e("div",{staticClass:"common-page-header"},[e("h1",[t._v(t._s(t.$t("Script Set Export History")))]),t._v(" "),e("div",{staticClass:"header-control"})])]),t._v(" "),e("el-main",[t.T.isNothing(t.data)?e("div",{staticClass:"no-data-area"},[t.T.isPageFiltered()?e("h1",{staticClass:"no-data-title"},[e("i",{staticClass:"fa fa-fw fa-search"}),t._v(t._s(t.$t("No matched data found")))]):e("h1",{staticClass:"no-data-title"},[e("i",{staticClass:"fa fa-fw fa-info-circle"}),t._v(t._s(t.$t("No Script Set has ever been exported")))]),t._v(" "),e("p",{staticClass:"no-data-tip"},[t._v("\n          "+t._s(t.$t("Exporting Script Sets for backup or sharing Script Sets"))+"\n        ")])]):[e("el-timeline",t._l(t.data,(function(n){return e("el-timeline-item",{key:n.id,attrs:{placement:"top",size:"large",type:"primary",timestamp:"".concat(t.T.getDateTimeString(n.createTime)," (").concat(t.T.fromNow(n.createTime),")")}},[e("el-card",{staticClass:"history-card",attrs:{shadow:"hover"}},[t._l(t.C.IMPORT_DATA_TYPE,(function(o){return[t.T.notNothing(n.summaryJSON[o.key])?e("div",{staticClass:"history-summary"},[e("span",{staticClass:"text-info"},[t._v(t._s(t.$t(o.name))+t._s(t.$t(":")))]),t._v(" "),e("p",t._l(n.summaryJSON[o.key],(function(n){return e("span",{key:n.id},[e("span",{class:o.showClass},[t._v(t._s(n[o.showField]||n.id))]),t._v("\n                      　\n                      "),e("small",[t._v("\n                        "+t._s(t.$t("("))+"\n                        "),e("span",{staticClass:"text-info"},[t._v("ID")]),t._v("\n                         "),e("code",{staticClass:"text-main"},[t._v(t._s(n.id))]),t._v("\n                        "+t._s(t.$t(")"))+"\n                      ")]),t._v(" "),e("br")])})),0)]):t._e()]})),t._v(" "),t.T.notNothing(n.note)?e("div",{staticClass:"history-note"},[e("span",{staticClass:"text-info"},[t._v(t._s(t.$t("Note"))+t._s(t.$t(":")))]),t._v(" "),e("pre",{staticClass:"text-info text-small"},[t._v(t._s(n.note))])]):t._e()],2)],1)})),1)]],2),t._v(" "),e("el-footer",[e("div",{staticClass:"setup-page-footer"},[e("el-button",{on:{click:function(e){return t.openSetup(null,"export")}}},[e("i",{staticClass:"fa fa-fw fa-cloud-download"}),t._v("\n          "+t._s(t.$t("Script Set Export"))+"\n        ")])],1)]),t._v(" "),e("ScriptSetExport",{ref:"setup"})],1)],1)},a=[],s=n("c7eb"),i=n("1da1"),r=(n("d3b7"),n("159b"),function(){var t=this,e=t._self._c;return e("el-dialog",{attrs:{id:"ScriptSetSetup",visible:t.show,"close-on-click-modal":!1,"close-on-press-escape":!1,width:"750px"},on:{"update:visible":function(e){t.show=e}}},[e("template",{slot:"title"},[t._v("\n    "+t._s(t.$t("Script Set Export"))+"\n  ")]),t._v(" "),e("el-container",{attrs:{direction:"vertical"}},[e("el-main",[e("div",{staticClass:"export-form"},[e("el-form",{ref:"form",attrs:{"label-width":"135px",model:t.form,rules:t.formRules}},[e("el-form-item",{attrs:{label:t.$t("Script Set"),prop:"scriptSetIds"}},[e("el-select",{attrs:{multiple:"",filterable:"","filter-method":t.T.debounce(t.doScriptSetFilter),placeholder:t.$t("Please select")},model:{value:t.form.scriptSetIds,callback:function(e){t.$set(t.form,"scriptSetIds",e)},expression:"form.scriptSetIds"}},t._l(t.selectScriptSetOptions,(function(n){return e("el-option",{key:n.id,attrs:{label:n.title||n.id,value:n.id}},[e("span",{staticClass:"select-item-name"},[t._v(t._s(n.title||n.id))]),t._v(" "),e("code",{staticClass:"select-item-id code-font"},[t._v("ID: "+t._s(n.id))])])})),1)],1),t._v(" "),e("el-form-item",{attrs:{label:t.$t("Related Contents")}},[e("el-checkbox",{attrs:{size:"medium",border:"",label:t.$t("Auth Link")},model:{value:t.form.includeAuthLinks,callback:function(e){t.$set(t.form,"includeAuthLinks",e)},expression:"form.includeAuthLinks"}}),t._v(" "),e("el-checkbox",{attrs:{size:"medium",border:"",label:t.$t("Crontab Config")},model:{value:t.form.includeCrontabConfigs,callback:function(e){t.$set(t.form,"includeCrontabConfigs",e)},expression:"form.includeCrontabConfigs"}}),t._v(" "),e("el-checkbox",{attrs:{size:"medium",border:"",label:t.$t("Batch")},model:{value:t.form.includeBatches,callback:function(e){t.$set(t.form,"includeBatches",e)},expression:"form.includeBatches"}}),t._v(" "),e("InfoBlock",{attrs:{title:t.$t("Exporting with related contents")}})],1),t._v(" "),e("el-form-item",{attrs:{label:t.$t("Connector"),prop:"connectorIds"}},[e("el-select",{attrs:{multiple:"",filterable:"","filter-method":t.T.debounce(t.doConnectorFilter),placeholder:t.$t("Please select")},model:{value:t.form.connectorIds,callback:function(e){t.$set(t.form,"connectorIds",e)},expression:"form.connectorIds"}},t._l(t.selectConnectorOptions,(function(n){return e("el-option",{key:n.id,attrs:{label:n.title||n.id,value:n.id}},[e("span",{staticClass:"select-item-name"},[t._v(t._s(n.title||n.id))]),t._v(" "),e("code",{staticClass:"select-item-id code-font"},[t._v("ID: "+t._s(n.id))])])})),1),t._v(" "),t.T.notNothing(t.form.connectorIds)?e("InfoBlock",{attrs:{type:"warning",title:t.$t("Exported Connectors will not include sensitive data (such as password), please re-entered them after import")}}):t._e()],1),t._v(" "),e("el-form-item",{attrs:{label:t.$t("ENV"),prop:"envVariableIds"}},[e("el-select",{attrs:{multiple:"",filterable:"","filter-method":t.T.debounce(t.doEnvVariableFilter),placeholder:t.$t("Please select")},model:{value:t.form.envVariableIds,callback:function(e){t.$set(t.form,"envVariableIds",e)},expression:"form.envVariableIds"}},t._l(t.selectEnvVariableOptions,(function(n){return e("el-option",{key:n.id,attrs:{label:n.title||n.id,value:n.id}},[e("span",{staticClass:"select-item-name"},[t._v(t._s(n.title||n.id))]),t._v(" "),e("code",{staticClass:"select-item-id code-font"},[t._v("ID: "+t._s(n.id))])])})),1)],1),t._v(" "),e("el-form-item",{attrs:{label:t.$t("Note"),prop:"note"}},[e("el-input",{attrs:{type:"textarea",resize:"none",autosize:{minRows:2},maxlength:"5000"},model:{value:t.form.note,callback:function(e){t.$set(t.form,"note",e)},expression:"form.note"}}),t._v(" "),e("InfoBlock",{attrs:{title:t.$t("Meaningful notes can provide a reliable reference for the future")}})],1),t._v(" "),e("el-form-item",{staticClass:"setup-footer"},[e("el-button",{directives:[{name:"prevent-re-click",rawName:"v-prevent-re-click"}],attrs:{type:"primary"},on:{click:t.submitData}},[t._v(t._s(t.$t("Export")))])],1)],1)],1)]),t._v(" "),e("el-dialog",{attrs:{title:t.$t("Data exported"),visible:t.showDownloadFilename,width:"750px"},on:{"update:visible":function(e){t.showDownloadFilename=e}}},[e("div",{staticClass:"download-filename-dialog-content"},[e("p",{staticClass:"text-good"},[t._v(t._s(t.$t("Data exported")))]),t._v(" "),e("p",[t._v(t._s(t.$t("Exported content has been downloaded as a zip file:")))]),t._v(" "),e("p",{staticClass:"download-filename"},[e("i",{staticClass:"fa fa-fw fa-3x fa-file-archive-o"}),t._v(" "),e("code",[t._v(t._s(t.downloadFilename))])])]),t._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{type:"primary"},on:{click:function(e){t.showDownloadFilename=!1}}},[t._v("\n          "+t._s(t.$t("Very good"))+"\n        ")])],1)])],1)],2)}),c=[],l=(n("4de4"),n("a15b"),n("498a"),n("21a6")),d=n.n(l),p={name:"ScriptSetExport",components:{},watch:{show:function(t){t||this.$root.$emit("reload.scriptSetExportHistoryList")}},methods:{loadData:function(){var t=this;return Object(i["a"])(Object(s["a"])().mark((function e(){var n,o,a,i,r;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={query:{fields:["id","title","origin","originId"]}},e.next=3,t.T.callAPI_getAll("/api/v1/script-sets/do/list",n);case 3:if(o=e.sent,o&&o.ok){e.next=6;break}return e.abrupt("return");case 6:return a=o.data,a=a.filter((function(e){return!t.common.shouldScriptSetHidden(e)})),a.forEach((function(e){t.T.appendSearchFields(e,["id","title"])})),t.scriptSets=a,t.selectScriptSetOptions=a,e.next=13,t.T.callAPI_getAll("/api/v1/connectors/do/list",n);case 13:if(o=e.sent,o&&o.ok){e.next=16;break}return e.abrupt("return");case 16:return i=o.data,i.forEach((function(e){t.T.appendSearchFields(e,["id","title"])})),t.connectors=i,t.selectConnectorOptions=i,e.next=22,t.T.callAPI_getAll("/api/v1/env-variables/do/list",n);case 22:if(o=e.sent,o&&o.ok){e.next=25;break}return e.abrupt("return");case 25:r=o.data,r.forEach((function(e){t.T.appendSearchFields(e,["id","title"])})),t.envVariables=r,t.selectEnvVariableOptions=r,t.show=!0;case 30:case"end":return e.stop()}}),e)})))()},submitData:function(){var t=this;return Object(i["a"])(Object(s["a"])().mark((function e(){return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$refs.form.validate();case 3:e.next=8;break;case 5:return e.prev=5,e.t0=e["catch"](0),e.abrupt("return",console.error(e.t0));case 8:return e.next=10,t.exportData();case 10:return e.abrupt("return",e.sent);case 11:case"end":return e.stop()}}),e,null,[[0,5]])})))()},exportData:function(){var t=this;return Object(i["a"])(Object(s["a"])().mark((function e(){var n,o,a,i,r;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={respType:"blob",packResp:!0,body:t.T.jsonCopy(t.form)},e.next=3,t.T.callAPI("post","/api/v1/script-sets/do/export",n);case 3:if(o=e.sent,o&&o.ok){e.next=6;break}return e.abrupt("return");case 6:a=new Blob([o.data],{type:o.extra.contentType}),i=[t.$store.getters.SYSTEM_INFO("_FUNC_EXPORT_FILENAME"),t.M().utcOffset("+08:00").format("YYYYMMDD_HHmmss")],r=i.join("-")+".zip",d.a.saveAs(a,r),t.downloadFilename=r,t.showDownloadFilename=!0,t.show=!1;case 13:case"end":return e.stop()}}),e)})))()},doScriptSetFilter:function(t){t=(t||"").toLowerCase().trim(),this.selectScriptSetOptions=t?this.T.filterByKeywords(t,this.scriptSets):this.scriptSets},doConnectorFilter:function(t){t=(t||"").toLowerCase().trim(),this.selectConnectorOptions=t?this.T.filterByKeywords(t,this.connectors):this.connectors},doEnvVariableFilter:function(t){t=(t||"").toLowerCase().trim(),this.selectEnvVariableOptions=t?this.T.filterByKeywords(t,this.envVariables):this.envVariables}},props:{},data:function(){return{show:!1,showDownloadFilename:!1,downloadFilename:null,scriptSets:[],connectors:[],envVariables:[],selectScriptSetOptions:[],selectConnectorOptions:[],selectEnvVariableOptions:[],form:{note:"",scriptSetIds:[],includeAuthLinks:!1,includeCrontabConfigs:!1,includeBatches:!1,connectorIds:[],envVariableIds:[]},formRules:{scriptSetIds:[{trigger:"blur",message:this.$t("Please select at least one Script Set"),required:!0,type:"array",min:1}],note:[{trigger:"blur",message:this.$t("Please input note"),required:!0,min:1}]}}}},u=p,f=(n("329f"),n("2877")),m=n("c856"),v=n("70948"),h=n("71b7"),b=Object(f["a"])(u,r,c,!1,null,"a222de70",null);"function"===typeof m["default"]&&Object(m["default"])(b),"function"===typeof v["default"]&&Object(v["default"])(b),"function"===typeof h["default"]&&Object(h["default"])(b);var _=b.exports,w={name:"ScriptSetExportHistoryList",components:{ScriptSetExport:_},watch:{$route:{immediate:!0,handler:function(t,e){var n=this;return Object(i["a"])(Object(s["a"])().mark((function t(){return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.loadData();case 2:case"end":return t.stop()}}),t)})))()}}},methods:{loadData:function(){var t=this;return Object(i["a"])(Object(s["a"])().mark((function e(){var n;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.T.callAPI_get("/api/v1/script-set-export-history/do/list",{query:{pageSize:20}});case 2:if(n=e.sent,n&&n.ok){e.next=5;break}return e.abrupt("return");case 5:n.data.forEach((function(e){e.summaryJSON&&e.summaryJSON.dataSources&&(e.summaryJSON.connectors=e.summaryJSON.dataSources),t.T.isNothing(e.note)&&(e.note=t.T.jsonFindSafe(e,"summaryJSON.extra.note"))})),t.data=n.data,t.$store.commit("updateLoadStatus",!0);case 8:case"end":return e.stop()}}),e)})))()},openSetup:function(t,e){switch(e){case"export":this.$refs.setup.loadData();break}}},computed:{},props:{},data:function(){return{data:[]}},created:function(){var t=this;this.$root.$on("reload.scriptSetExportHistoryList",(function(){return t.loadData()}))},destroyed:function(){this.$root.$off("reload.scriptSetExportHistoryList")}},S=w,x=(n("76c7"),n("c155")),g=n("3ffc"),y=n("9438"),C=Object(f["a"])(S,o,a,!1,null,"11a43f1c",null);"function"===typeof x["default"]&&Object(x["default"])(C),"function"===typeof g["default"]&&Object(g["default"])(C),"function"===typeof y["default"]&&Object(y["default"])(C);e["default"]=C.exports},eb3a:function(t,e,n){},ef3a:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-TW":{"Data exported":"資料已匯出","Exported Connectors will not include sensitive data (such as password), please re-entered them after import":"匯出的聯結器不包含敏感資料（如密碼等），請在匯入後重新輸入","Exported content has been downloaded as a zip file:":"匯出內容已作為 zip 檔案下載：","Exporting with related contents":"匯出並附帶關聯內容","Meaningful notes can provide a reliable reference for the future":"有意義的備註可以為將來提供可靠的參考","Please input note":"請輸入備註","Please select at least one Script Set":"請選擇匯出指令碼集","Related Contents":"關聯內容"}}'),delete t.options._Ctor}},f4b7:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-HK":{"Exporting Script Sets for backup or sharing Script Sets":"使用腳本集導出功能備份或分享腳本集","No Script Set has ever been exported":"從未導出過任何腳本集"}}'),delete t.options._Ctor}}}]);