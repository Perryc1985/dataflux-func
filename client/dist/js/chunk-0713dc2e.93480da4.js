(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0713dc2e"],{"0797":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-CN":{"Download as text file":"作为文本文件下载"}}'),delete t.options._Ctor}},"07f4":function(t,e,n){"use strict";n("ba2d")},"0bfb":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-CN":{"overviewCountUnit":"个","workerCount":"工作单元 {n} 个","taskCount":"排队任务 {n} 个","scriptSetOverviewCount":"（{n} 个）","recentOperationCount":"最近 {n} 条","Overview":"总览","Biz Entity":"业务实体","Worker Queue Info":"队列信息","Script overview":"脚本总览","Origin":"来源","Code size":"代码大小","Publish ver.":"发布版本","Publish time":"发布时间","Never published":"从未发布","Recent operations":"最近操作记录","Client":"客户端","Client ID":"客户端ID","IP Address":"IP地址","Operation":"操作","Data ID":"数据ID","MODIFY":"修改操作","DELETE":"删除操作","Cost":"耗时","Show detail":"显示请求详情","Request":"请求","Response":"响应","Pressure":"压力"}}'),delete t.options._Ctor}},1578:function(t,e,n){"use strict";var o=n("da56"),s=n.n(o);e["default"]=s.a},"183a":function(t,e,n){},"21a6":function(t,e,n){(function(n){var o,s,a;(function(n,r){s=[],o=r,a="function"===typeof o?o.apply(e,s):o,void 0===a||(t.exports=a)})(0,(function(){"use strict";function e(t,e){return"undefined"==typeof e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function o(t,e,n){var o=new XMLHttpRequest;o.open("GET",t),o.responseType="blob",o.onload=function(){c(o.response,e,n)},o.onerror=function(){console.error("could not download file")},o.send()}function s(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function a(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(o){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,i=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!i?function(t,e,n){var i=r.URL||r.webkitURL,c=document.createElement("a");e=e||t.name||"download",c.download=e,c.rel="noopener","string"==typeof t?(c.href=t,c.origin===location.origin?a(c):s(c.href)?o(t,e,n):a(c,c.target="_blank")):(c.href=i.createObjectURL(t),setTimeout((function(){i.revokeObjectURL(c.href)}),4e4),setTimeout((function(){a(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,n,r){if(n=n||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(e(t,r),n);else if(s(t))o(t,n,r);else{var i=document.createElement("a");i.href=t,i.target="_blank",setTimeout((function(){a(i)}))}}:function(t,e,n,s){if(s=s||open("","_blank"),s&&(s.document.title=s.document.body.innerText="downloading..."),"string"==typeof t)return o(t,e,n);var a="application/octet-stream"===t.type,c=/constructor/i.test(r.HTMLElement)||r.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||a&&c||i)&&"undefined"!=typeof FileReader){var l=new FileReader;l.onloadend=function(){var t=l.result;t=u?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),s?s.location.href=t:location=t,s=null},l.readAsDataURL(t)}else{var d=r.URL||r.webkitURL,f=d.createObjectURL(t);s?s.location=f:location.href=f,s=null,setTimeout((function(){d.revokeObjectURL(f)}),4e4)}});r.saveAs=c.saveAs=c,t.exports=c}))}).call(this,n("c8ba"))},3641:function(t,e,n){},"4d09":function(t,e,n){"use strict";var o=n("0bfb"),s=n.n(o);e["default"]=s.a},"7b0b4":function(t,e,n){"use strict";var o=n("0797"),s=n.n(o);e["default"]=s.a},8157:function(t,e,n){"use strict";n.r(e);n("b0c0"),n("a15b"),n("8a79");var o=function(){var t=this,e=t._self._c;return e("transition",{attrs:{name:"fade"}},[e("el-container",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.isLoaded,expression:"$store.state.isLoaded"}],attrs:{direction:"vertical"}},[e("el-header",{attrs:{height:"60px"}},[e("h1",[t._v(t._s(t.$t("Overview")))])]),t._v(" "),e("el-main",[e("el-divider",{attrs:{"content-position":"left"}},[e("h1",[t._v(t._s(t.$t("Biz Entity")))])]),t._v(" "),t._l(t.bizEntityCount,(function(n){return e("el-card",{key:n.name,staticClass:"overview-card",attrs:{shadow:"hover"}},[t.C.OVERVIEW_ENTITY_MAP.get(n.name).icon?e("i",{staticClass:"fa fa-fw overview-icon",class:t.C.OVERVIEW_ENTITY_MAP.get(n.name).icon}):t.C.OVERVIEW_ENTITY_MAP.get(n.name).tagText?e("i",{staticClass:"overview-icon overview-icon-text",attrs:{type:"info"}},[e("code",[t._v(t._s(t.C.OVERVIEW_ENTITY_MAP.get(n.name).tagText))])]):t._e(),t._v(" "),e("span",{staticClass:"overview-name"},[t._v(t._s(t.C.OVERVIEW_ENTITY_MAP.get(n.name).name))]),t._v(" "),e("span",{staticClass:"overview-count",style:{"font-size":t.overviewCountFontSize(n.count)+"px"}},[t._v("\n          "+t._s(n.count)+"\n          "),e("span",{staticClass:"overview-count-unit"},[t._v(t._s(t.$t("overviewCountUnit")))])])])})),t._v(" "),e("el-divider",{attrs:{"content-position":"left"}},[e("h1",[t._v(t._s(t.$t("Worker Queue Info")))])]),t._v(" "),t._l(t.workerQueueInfo,(function(n,o){return e("el-card",{key:o,staticClass:"worker-queue-card",class:{"worker-queue-highlight":n.taskCount>0},attrs:{shadow:"hover"}},[e("div",{staticClass:"worker-queue-info"},[e("span",{staticClass:"worker-queue-number"},[t._v("#"+t._s(o))]),t._v(" "),e("br"),e("span",{class:{"text-bad":(n.workerCount||0)<=0}},[t._v(t._s(t.$tc("workerCount",n.workerCount||0)))]),t._v(" "),e("br"),e("span",{class:{"text-main":(n.taskCount||0)>0}},[t._v(t._s(t.$tc("taskCount",t.T.numberLimit(n.taskCount,999))))])]),t._v(" "),e("el-progress",{attrs:{type:"circle",width:"110",percentage:t.workerQueuePressurePercentage(n.pressure,n.maxPressure),format:t.workerQueuePressureFormat,color:t.WORKER_QUEUE_PRESSURE_COLORS}})],1)})),t._v(" "),e("el-divider",{staticClass:"overview-divider",attrs:{"content-position":"left"}},[e("h1",[t._v(t._s(t.$t("Script overview"))+" "+t._s(t.$tc("scriptSetOverviewCount",t.scriptSetOverview.length)))])]),t._v(" "),e("el-table",{attrs:{data:t.scriptSetOverview}},[e("el-table-column",{attrs:{label:t.$t("Script Set"),sortable:""},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",[t._v(t._s(n.row.title||n.row.id))])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:t.$t("ID"),sortable:""},scopedSlots:t._u([{key:"default",fn:function(n){return[e("code",{staticClass:"text-main"},[t._v(t._s(n.row.id))]),t._v(" "),e("CopyButton",{attrs:{content:n.row.id}})]}}])}),t._v(" "),e("el-table-column",{attrs:{label:t.$t("Origin"),sortable:"","sort-by":"origin",width:"150"},scopedSlots:t._u([{key:"default",fn:function(n){return[n.row.origin?"user"===n.row.origin?e("span",[e("i",{staticClass:"fa fa-fw fa-user"}),t._v("\n              "+t._s(t.$t("User"))+"\n            ")]):"builtin"===n.row.origin?e("span",{staticClass:"text-watch"},[e("i",{staticClass:"fa fa-fw fa-microchip"}),t._v("\n              "+t._s(t.$t("Built-in"))+"\n            ")]):"scriptMarket"===n.row.origin?e("span",{staticClass:"text-main"},[e("i",{staticClass:"fa fa-fw fa-shopping-cart"}),t._v("\n              "+t._s(t.$t("Script Market"))+"\n            ")]):"UNKNOW"===n.row.origin?e("span",{staticClass:"text-info"},[e("i",{staticClass:"fa fa-fw fa-question-circle"}),t._v("\n              "+t._s(t.$t("UNKNOW"))+"\n            ")]):e("span",{staticClass:"text-info"},[e("i",{staticClass:"fa fa-fw fa-question-circle"}),t._v("\n              "+t._s(t.$t("UNKNOW"))+"("+t._s(n.row.origin)+")\n            ")]):e("span",[t._v("-")])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:t.$t("Script"),sortable:"","sort-by":"scriptCount",align:"right",width:"120"},scopedSlots:t._u([{key:"default",fn:function(n){return[n.row.scriptCount?e("code",[t._v(t._s(n.row.scriptCount))]):e("code",[t._v("-")])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:t.$t("Func"),sortable:"","sort-by":"funcCount",align:"right",width:"120"},scopedSlots:t._u([{key:"default",fn:function(n){return[n.row.funcCount?e("code",[t._v(t._s(n.row.funcCount))]):e("code",[t._v("-")])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:t.$t("Code size"),sortable:"","sort-by":"codeSize",align:"right",width:"140"},scopedSlots:t._u([{key:"default",fn:function(n){return[n.row.codeSize?e("code",[t._v(t._s(n.row.codeSizeHuman))]):t._e()]}}])}),t._v(" "),e("el-table-column",{attrs:{label:t.$t("Publish time"),sortable:"","sort-by":"latestPublishTimestamp",align:"right",width:"200"},scopedSlots:t._u([{key:"default",fn:function(n){return[n.row.latestPublishTime?[e("span",[t._v(t._s(t._f("datetime")(n.row.latestPublishTime)))]),t._v(" "),e("br"),t._v(" "),e("span",{staticClass:"text-info"},[t._v(t._s(t._f("fromNow")(n.row.latestPublishTime)))])]:t._e()]}}])})],1),t._v(" "),e("el-divider",{staticClass:"overview-divider",attrs:{"content-position":"left"}},[e("h1",[t._v(t._s(t.$t("Recent operations"))+" "+t._s(t.$tc("recentOperationCount",t.latestOperations.length)))])]),t._v(" "),e("el-table",{attrs:{data:t.latestOperations}},[e("el-table-column",{attrs:{label:t.$t("Time"),width:"200"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",[t._v(t._s(t._f("datetime")(n.row.createTime)))]),t._v(" "),e("br"),t._v(" "),e("span",{staticClass:"text-info"},[t._v(t._s(t._f("fromNow")(n.row.createTime)))])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:t.$t("User"),width:"350"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("strong",[t._v(t._s(n.row.u_name||t.$t("Anonymity")))]),t._v(" "),n.row.userId?[e("br"),t._v(" "),e("span",{staticClass:"text-info"},[t._v(t._s(t.$t("User ID")))]),t._v("\n               "),e("code",{staticClass:"text-main"},[t._v(t._s(n.row.userId))]),t._v(" "),e("CopyButton",{attrs:{content:n.row.userId}})]:t._e(),t._v(" "),t.T.notNothing(n.row.clientIPsJSON)?[e("br"),t._v(" "),e("span",{staticClass:"text-info"},[t._v(t._s(t.$t("IP Address")))]),t._v("\n               "),e("code",{staticClass:"text-main"},[t._v(t._s(n.row.clientIPsJSON.join(", ")))]),t._v(" "),e("CopyButton",{attrs:{content:n.row.clientIPsJSON.join(", ")}})]:t._e()]}}])}),t._v(" "),e("el-table-column",{attrs:{label:t.$t("Operation")},scopedSlots:t._u([{key:"default",fn:function(n){return[n.row.respStatusCode>=200&&n.row.respStatusCode<400?e("span",{staticClass:"text-good"},[e("i",{staticClass:"fa fa-fw fa-check"})]):e("span",{staticClass:"text-bad"},[e("i",{staticClass:"fa fa-fw fa-times"})]),t._v(" "),e("span",[t._v(t._s(t.$t(n.row.reqRouteName)))]),t._v(" "),t.T.endsWith(n.row.reqRoute,"/do/modify")?e("strong",{staticClass:"text-watch"},[t._v("\n              （"+t._s(t.$t("MODIFY"))+"）\n            ")]):t._e(),t._v(" "),t.T.endsWith(n.row.reqRoute,"/do/delete")?e("strong",{staticClass:"text-bad"},[t._v("\n              （"+t._s(t.$t("DELETE"))+"）\n            ")]):t._e(),t._v(" "),n.row._operationEntityId?[e("br"),t._v(" "),e("i",{staticClass:"fa fa-fw"}),t._v(" "),e("span",{staticClass:"text-info"},[t._v(t._s(t.$t("Data ID")))]),t._v("\n               "),e("code",{staticClass:"text-main"},[t._v(t._s(n.row._operationEntityId))]),t._v(" "),e("CopyButton",{attrs:{content:n.row._operationEntityId}})]:t._e()]}}])}),t._v(" "),e("el-table-column",{attrs:{label:t.$t("Cost"),align:"right",width:"100"},scopedSlots:t._u([{key:"default",fn:function(n){return[t._v("\n            "+t._s(n.row.reqCost)+" "),e("span",{staticClass:"text-info"},[t._v(t._s(t.$t("ms")))])]}}])}),t._v(" "),e("el-table-column",{attrs:{align:"right",width:"150"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-button",{attrs:{type:"text"},on:{click:function(e){return t.showDetail(n.row)}}},[t._v(t._s(t.$t("Show detail")))])]}}])})],1)],2),t._v(" "),e("LongTextDialog",{ref:"longTextDialog",attrs:{showDownload:!0}})],1)],1)},s=[],a=n("c7eb"),r=n("1da1"),i=(n("d3b7"),n("159b"),n("14d9"),n("99af"),n("e9c4"),n("b76c")),c={name:"Overview",components:{LongTextDialog:i["a"]},watch:{$route:{immediate:!0,handler:function(t,e){var n=this;return Object(r["a"])(Object(a["a"])().mark((function t(){return Object(a["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.loadData();case 2:case"end":return t.stop()}}),t)})))()}}},methods:{loadData:function(t,e){var n=this;return Object(r["a"])(Object(a["a"])().mark((function o(){var s,r;return Object(a["a"])().wrap((function(o){while(1)switch(o.prev=o.next){case 0:return e=e||{},s=null,n.T.notNothing(t)&&(s={sections:t.join(",")}),o.next=5,n.T.callAPI_get("/api/v1/func/overview",{query:s,alert:{muteError:e.mute}});case 5:if(r=o.sent,r&&r.ok){o.next=8;break}return o.abrupt("return");case 8:r.data.scriptSetOverview&&r.data.scriptSetOverview.forEach((function(t){t.codeSize&&(t.codeSizeHuman=n.T.byteSizeHuman(t.codeSize)),t.latestPublishTimestamp=0,t.latestPublishTime&&(t.latestPublishTimestamp=new Date(t.latestPublishTime).getTime())})),(t||n.OVERVIEW_SECTIONS).forEach((function(t){n[t]=r.data[t]})),n.$store.commit("updateLoadStatus",!0);case 11:case"end":return o.stop()}}),o)})))()},showDetail:function(t){this.$store.commit("updateHighlightedTableDataId",t.id);var e=[];e.push("===== ".concat(this.$t("Request")," =====")),e.push("".concat(t.reqMethod.toUpperCase()," ").concat(this.T.formatURL(t.reqRoute,{params:t.reqParamsJSON,query:t.reqQueryJSON}))),t.reqBodyJSON&&e.push(JSON.stringify(t.reqBodyJSON,null,2)),e.push("\n===== ".concat(this.$t("Response")," =====")),e.push("Status Code: ".concat(t.respStatusCode)),t.respBodyJSON&&e.push(JSON.stringify(t.respBodyJSON,null,2));var n=e.join("\n"),o=this.M(t.createTime).utcOffset(8).format("YYYYMMDD_HHmmss"),s="http-dump.".concat(o);this.$refs.longTextDialog.update(n,s)},overviewCountFontSize:function(t){var e=(""+t).length,n=parseInt(280/e*1.2);return Math.min(80,n)},workerQueuePressurePercentage:function(t,e){var n=100*t/(2*e);return n<0?n=0:n>100&&(n=100),n},workerQueuePressureFormat:function(t){return"".concat(this.$t("Pressure")).concat(this.$t(":")," ").concat(parseInt(2*t))}},computed:{OVERVIEW_SECTIONS:function(){return["bizEntityCount","workerQueueInfo","scriptSetOverview","latestOperations"]},WORKER_QUEUE_PRESSURE_COLORS:function(){return[{color:"#00aa00",percentage:50},{color:"#ff6600",percentage:80},{color:"#ff0000",percentage:100}]}},props:{},data:function(){return{bizEntityCount:[],workerQueueInfo:[],scriptSetOverview:[],latestOperations:[],autoRefreshTimer:null}},mounted:function(){var t=this;this.autoRefreshTimer=setInterval((function(){t.loadData(["workerQueueInfo"],{mute:!0})}),5e3)},beforeDestroy:function(){this.autoRefreshTimer&&clearInterval(this.autoRefreshTimer)}},u=c,l=(n("07f4"),n("c2f8"),n("2877")),d=n("1578"),f=n("4d09"),v=Object(l["a"])(u,o,s,!1,null,"8fbd2a5e",null);"function"===typeof d["default"]&&Object(d["default"])(v),"function"===typeof f["default"]&&Object(f["default"])(v);e["default"]=v.exports},"8a79":function(t,e,n){"use strict";var o=n("23e7"),s=n("e330"),a=n("06cf").f,r=n("50c4"),i=n("577e"),c=n("5a34"),u=n("1d80"),l=n("ab13"),d=n("c430"),f=s("".endsWith),v=s("".slice),p=Math.min,_=l("endsWith"),w=!d&&!_&&!!function(){var t=a(String.prototype,"endsWith");return t&&!t.writable}();o({target:"String",proto:!0,forced:!w&&!_},{endsWith:function(t){var e=i(u(this));c(t);var n=arguments.length>1?arguments[1]:void 0,o=e.length,s=void 0===n?o:p(r(n),o),a=i(t);return f?f(e,a,s):v(e,s-a.length,s)===a}})},9303:function(t,e,n){},b76c:function(t,e,n){"use strict";var o=function(){var t=this,e=t._self._c;return e("el-dialog",{attrs:{id:"LongTextDialog",visible:t.show,"close-on-click-modal":!1,width:"70%"},on:{"update:visible":function(e){t.show=e}}},[e("template",{slot:"title"},[t._v("\n    "+t._s(t.title)+"\n    "),e("span",{staticClass:"text-info press-esc-to-close-tip"},[t._v(t._s(t.$t("Press ESC to close")))])]),t._v(" "),e("div",[t.showDownload&&t.fileName&&t.content?e("div",{staticClass:"download-link"},[e("el-link",{attrs:{type:"primary"},on:{click:t.download}},[t._v("\n        "+t._s(t.$t("Download as text file"))+"\n        "),e("i",{staticClass:"fa fa-fw fa-download"})])],1):t._e(),t._v(" "),e("textarea",{attrs:{id:"longTextDialogContent"}})])],2)},s=[],a=(n("130f"),n("21a6")),r=n.n(a),i={name:"LongTextDialog",components:{},watch:{},methods:{update:function(t,e){var n=this;this.codeMirror&&this.codeMirror.setValue(""),this.content=t,this.fileName=(e||"dump")+".txt",this.show=!0,setImmediate((function(){n.codeMirror||(n.codeMirror=n.T.initCodeMirror("longTextDialogContent",n.mode||"text"),n.codeMirror.setOption("theme",n.T.getCodeMirrorThemeName()),n.T.setCodeMirrorReadOnly(n.codeMirror,!0)),n.codeMirror.setValue(n.content||""),n.codeMirror.refresh(),n.codeMirror.focus()}))},download:function(){var t=new Blob([this.content],{type:"text/plain"}),e=this.fileName;r.a.saveAs(t,e)}},computed:{},props:{title:String,mode:Boolean,showDownload:Boolean},data:function(){return{show:!1,fileName:null,content:null,codeMirror:null}},beforeDestroy:function(){this.T.destoryCodeMirror(this.codeMirror)}},c=i,u=(n("c8d4"),n("d9ed"),n("2877")),l=n("7b0b4"),d=Object(u["a"])(c,o,s,!1,null,"96f726ca",null);"function"===typeof l["default"]&&Object(l["default"])(d);e["a"]=d.exports},ba2d:function(t,e,n){},c2f8:function(t,e,n){"use strict";n("3641")},c8d4:function(t,e,n){"use strict";n("183a")},d9ed:function(t,e,n){"use strict";n("9303")},da56:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"overviewCountUnit":"","workerCount":"NO Worker | {n} Worker | {n} Workers","taskCount":"NO Queued Task | {n} Queued Task | {n} Queued Tasks","scriptSetOverviewCount":"(NO Script Set) | ({n} Script Set) | ({n} Script Sets)","recentOperationCount":"(Latest {n} Operation) | (Latest {n} Operations)"}}'),delete t.options._Ctor}}}]);