(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d84089d4"],{1165:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"zh-CN":{"About":"关于","You are using {0} browser":"您正在使用 {0} 浏览器","In this system:":"在本系统中：","Monospaced font is from {0}":"等宽字体来自 {0}","Icons used are from {0}":"图标来自 {0}","Illustrations used are from {0}":"插图来自 {0}","Code Editor is powered by {0}":"代码编辑器基于 {0} 实现","Blueprint Canvans is powered by {0}":"蓝图画布基于 {0} 实现","New version {ver} is available, click here to go to the official website":"可以升级到 {ver} 版本，点击此处前往官方网站查看","Version Information":"版本信息","System Tools":"系统工具","Version":"版本","Architecture":"架构","Release Date":"发布日期","Loading...":"加载中...","Loading System Report":"正在加载系统报告","Get System Report":"获取系统报告","Show System Metrics":"查看系统指标","Show System Logs":"查看系统日志","Show Abnormal Requests":"查看异常请求","Clear Worker Queues":"清空工作队列","Clear Log and Cache":"清空日志与缓存表","Worker Queues cleared":"工作队列已清空","Log and Cache cleared":"日志与缓存表已清空","Full Worker Queue name is DataFluxFunc-worker#workerQueue@{Number}":"完整工作队列名称为 DataFluxFunc-worker#workerQueue@{序号}","taskRemain":"（存在 {n} 个待处理任务）","Are you sure you want to clear the Worker Queues?":"是否确认清空工作队列？","Are you sure you want to clear the Log and Cache?":"是否确认清空日志与缓存表？"}}'),delete e.options._Ctor}},"190e":function(e,t,n){"use strict";var a=n("1165"),o=n.n(a);t["default"]=o.a},"21a6":function(e,t,n){(function(n){var a,o,s;(function(n,r){o=[],a=r,s="function"===typeof a?a.apply(t,o):a,void 0===s||(e.exports=s)})(0,(function(){"use strict";function t(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function a(e,t,n){var a=new XMLHttpRequest;a.open("GET",e),a.responseType="blob",a.onload=function(){c(a.response,t,n)},a.onerror=function(){console.error("could not download file")},a.send()}function o(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function s(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(a){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,i=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!i?function(e,t,n){var i=r.URL||r.webkitURL,c=document.createElement("a");t=t||e.name||"download",c.download=t,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?s(c):o(c.href)?a(e,t,n):s(c,c.target="_blank")):(c.href=i.createObjectURL(e),setTimeout((function(){i.revokeObjectURL(c.href)}),4e4),setTimeout((function(){s(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,r){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,r),n);else if(o(e))a(e,n,r);else{var i=document.createElement("a");i.href=e,i.target="_blank",setTimeout((function(){s(i)}))}}:function(e,t,n,o){if(o=o||open("","_blank"),o&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof e)return a(e,t,n);var s="application/octet-stream"===e.type,c=/constructor/i.test(r.HTMLElement)||r.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||s&&c||i)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=l?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=e:location=e,o=null},u.readAsDataURL(e)}else{var f=r.URL||r.webkitURL,d=f.createObjectURL(e);o?o.location=d:location.href=d,o=null,setTimeout((function(){f.revokeObjectURL(d)}),4e4)}});r.saveAs=c.saveAs=c,e.exports=c}))}).call(this,n("c8ba"))},"2fce":function(e,t,n){},"476e":function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"taskRemain":"(remain {n} task to process) | (remain {n} tasks to process)"}}'),delete e.options._Ctor}},"5ce2":function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"zh-CN":{"Download as a JSON file":"作为 JSON 文件下载"}}'),delete e.options._Ctor}},"67f8":function(e,t,n){"use strict";n.r(t);n("14d9");var a=function(){var e=this,t=e._self._c;return t("transition",{attrs:{name:"fade"}},[t("el-container",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.isLoaded,expression:"$store.state.isLoaded"}],attrs:{direction:"vertical"}},[t("el-header",{attrs:{height:"60px"}},[t("h1",[e._v(e._s(e.$t("About")))])]),e._v(" "),t("el-main",[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:15}},[t("div",{staticClass:"about-form"},[t("div",{staticClass:"announce"},[t("p",[t("i18n",{attrs:{path:"You are using {0} browser"}},[t("span",{staticClass:"text-main"},[e._v(e._s(e.T.getBrowser())+" ("+e._s(e.T.getEngine())+")")])])],1),e._v(" "),t("p",[e._v("\n                "+e._s(e.$t("In this system:"))+"\n                "),t("ul",[t("li",[t("i18n",{attrs:{path:"Monospaced font is from {0}"}},[t("el-link",{attrs:{href:"https://typeof.net/Iosevka/",target:"_blank"}},[t("i",{staticClass:"fa fa-fw fa-external-link"}),e._v("\n                        Iosevka\n                      ")])],1)],1),e._v(" "),t("li",[t("i18n",{attrs:{path:"Icons used are from {0}"}},[t("el-link",{attrs:{href:"https://fontawesome.com/v4/",target:"_blank"}},[t("i",{staticClass:"fa fa-fw fa-external-link"}),e._v("\n                        Font Awesome (v4)\n                      ")])],1)],1),e._v(" "),t("li",[t("i18n",{attrs:{path:"Illustrations used are from {0}"}},[t("el-link",{attrs:{href:"https://flexiple.com/illustrations/",target:"_blank"}},[t("i",{staticClass:"fa fa-fw fa-external-link"}),e._v("\n                        Scale by flexiple\n                      ")])],1)],1),e._v(" "),t("li",[t("i18n",{attrs:{path:"Code Editor is powered by {0}"}},[t("el-link",{attrs:{href:"https://codemirror.net/5/",target:"_blank"}},[t("i",{staticClass:"fa fa-fw fa-external-link"}),e._v("\n                        Code Mirror (v5)\n                      ")])],1)],1),e._v(" "),t("li",[t("i18n",{attrs:{path:"Blueprint Canvans is powered by {0}"}},[t("el-link",{attrs:{href:"https://site.logic-flow.cn/",target:"_blank"}},[t("i",{staticClass:"fa fa-fw fa-external-link"}),e._v("\n                        LogicFlow (v1.2)\n                      ")])],1)],1)])])]),e._v(" "),t("el-divider",{attrs:{"content-position":"left"}},[t("h1",[e._v(e._s(e.$t("Version Information")))])]),e._v(" "),t("el-form",{attrs:{"label-width":"120px"}},[t("el-form-item",{attrs:{label:e.$t("Version")}},[t("el-input",{attrs:{readonly:!0,value:e.FULL_VERSION}}),e._v(" "),e.common.hasNewVersion()?t("el-link",{attrs:{href:"https://func.guance.com/",target:"_blank"}},[e._v("\n                  "+e._s(e.$t("New version {ver} is available, click here to go to the official website",{ver:e.$store.state.latestVersion}))+"\n                ")]):e._e()],1),e._v(" "),t("el-form-item",{attrs:{label:e.$t("Architecture")}},[t("el-input",{attrs:{placeholder:e.$t("Loading..."),readonly:!0,value:e.imageInfo.architecture}})],1),e._v(" "),t("el-form-item",{attrs:{label:e.$t("Release Date")}},[t("el-input",{attrs:{placeholder:e.$t("Loading..."),readonly:!0,value:e.releaseDateTEXT}})],1)],1),e._v(" "),t("el-divider",{attrs:{"content-position":"left"}},[t("h1",[e._v(e._s(e.$t("System Tools")))])]),e._v(" "),t("el-form",{attrs:{"label-width":"120px"}},[t("el-form-item",[t("el-link",{directives:[{name:"prevent-re-click",rawName:"v-prevent-re-click"}],attrs:{disabled:e.isLoadingSystemInfo},on:{click:e.getSystemReport}},[e.isLoadingSystemInfo?t("span",[t("i",{staticClass:"fa fa-fw fa-circle-o-notch fa-spin"}),e._v("\n                    "+e._s(e.$t("Loading System Report"))+"\n                  ")]):t("span",[e._v(e._s(e.$t("Get System Report")))])]),e._v(" "),t("br"),e._v(" "),t("el-link",{on:{click:function(t){return e.$router.push({name:"system-metrics"})}}},[e._v(e._s(e.$t("Show System Metrics")))]),e._v("\n                　\n                "),t("el-link",{on:{click:function(t){return e.$router.push({name:"system-logs"})}}},[e._v(e._s(e.$t("Show System Logs")))]),e._v("\n                　\n                "),t("el-link",{on:{click:function(t){return e.$router.push({name:"abnormal-request-list"})}}},[e._v(e._s(e.$t("Show Abnormal Requests")))]),e._v(" "),t("br"),e._v(" "),t("el-link",{on:{click:e.clearWorkerQueues}},[e._v(e._s(e.$t("Clear Worker Queues")))]),e._v("\n                　\n                "),t("el-link",{on:{click:e.clearLogCacheTables}},[e._v(e._s(e.$t("Clear Log and Cache")))])],1)],1)],1)]),e._v(" "),t("el-col",{staticClass:"hidden-md-and-down",attrs:{span:9}})],1)],1),e._v(" "),t("JSONViewerDialog",{ref:"jsonViewerDialog",attrs:{showDownload:!0,mode:"json"}})],1)],1)},o=[],s=n("c7eb"),r=n("1da1"),i=(n("e9c4"),n("99af"),function(){var e=this,t=e._self._c;return t("el-dialog",{attrs:{id:"JSONViewerDialog",visible:e.show,"close-on-click-modal":!1,width:"70%"},on:{"update:visible":function(t){e.show=t}}},[t("template",{slot:"title"},[e._v("\n    "+e._s(e.title)+"\n    "),t("span",{staticClass:"text-info press-esc-to-close-tip"},[e._v(e._s(e.$t("Press ESC to close")))])]),e._v(" "),t("div",[e.showDownload&&e.fileName&&e.content?t("div",{staticClass:"download-link"},[t("el-link",{attrs:{type:"primary"},on:{click:e.download}},[e._v("\n        "+e._s(e.$t("Download as a JSON file"))+"\n        "),t("i",{staticClass:"fa fa-fw fa-download"})])],1):e._e(),e._v(" "),t("json-viewer",{attrs:{value:e.jsonContent,theme:"json-view-theme",sort:""}})],1)],2)}),c=[],l=(n("b64b"),n("21a6")),u=n.n(l),f={name:"JSONViewerDialog",components:{},watch:{},methods:{update:function(e,t){this.content=e,this.fileName=(t||"dump")+".json",this.show=!0},download:function(){var e=new Blob([this.content],{type:"text/plain"}),t=this.fileName;u.a.saveAs(e,t)}},computed:{jsonContent:function(){return"string"===typeof this.content?JSON.parse(this.content):this.content}},props:{title:String,showDownload:Boolean},data:function(){return{show:!1,fileName:null,content:null}}},d=f,p=(n("bb7e"),n("a7cc"),n("2877")),m=n("9472"),h=Object(p["a"])(d,i,c,!1,null,"a6e824f6",null);"function"===typeof m["default"]&&Object(m["default"])(h);var v=h.exports,w={name:"About",components:{JSONViewerDialog:v},watch:{$route:{immediate:!0,handler:function(e,t){var n=this;return Object(r["a"])(Object(s["a"])().mark((function e(){return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.loadData();case 2:case"end":return e.stop()}}),e)})))()}}},methods:{loadData:function(){var e=this;return Object(r["a"])(Object(s["a"])().mark((function t(){var n;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.commit("updateLoadStatus",!0),t.next=3,e.T.callAPI_get("/api/v1/image-info");case 3:n=t.sent,n.ok&&e.T.notNothing(n.data)?e.imageInfo={architecture:n.data.ARCHITECTURE,releaseTimestamp:n.data.RELEASE_TIMESTAMP}:e.imageInfo={architecture:e.NO_INFO_TEXT,releaseTimestamp:e.NO_INFO_TEXT};case 5:case"end":return t.stop()}}),t)})))()},getSystemReport:function(){var e=this;return Object(r["a"])(Object(s["a"])().mark((function t(){var n,a,o,r;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoadingSystemInfo=!0,t.next=3,e.T.callAPI_get("/api/v1/system-report");case 3:n=t.sent,n.ok&&e.T.notNothing(n.data)&&(a=JSON.stringify(n.data,null,2),o=e.M().format("YYYYMMDD_HHmmss"),r="system-report.".concat(o),e.$refs.jsonViewerDialog.update(a,r)),e.isLoadingSystemInfo=!1;case 6:case"end":return t.stop()}}),t)})))()},clearWorkerQueues:function(e){var t=this;return Object(r["a"])(Object(s["a"])().mark((function n(){return Object(s["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.T.confirm(t.$t("Are you sure you want to clear the Worker Queues?"));case 2:if(n.sent){n.next=4;break}return n.abrupt("return");case 4:return n.next=6,t.T.callAPI("post","/api/v1/debug/worker-queues/do/clear",{body:{workerQueues:[e]},alert:{okMessage:"".concat(t.$t("Worker Queues cleared"))}});case 6:n.sent;case 7:case"end":return n.stop()}}),n)})))()},clearLogCacheTables:function(){var e=this;return Object(r["a"])(Object(s["a"])().mark((function t(){return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.T.confirm(e.$t("Are you sure you want to clear the Log and Cache?"));case 2:if(t.sent){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,e.T.callAPI("post","/api/v1/debug/log-cache-tables/do/clear",{alert:{okMessage:"".concat(e.$t("Log and Cache cleared"))}});case 6:t.sent;case 7:case"end":return t.stop()}}),t)})))()}},computed:{NO_INFO_TEXT:function(){return this.$t("No Data")},FULL_VERSION:function(){return this.$store.getters.SYSTEM_INFO("EDITION")?"".concat(this.$store.getters.SYSTEM_INFO("VERSION")," (").concat(this.$store.getters.SYSTEM_INFO("EDITION"),")"):this.$store.getters.SYSTEM_INFO("VERSION")},releaseDateTEXT:function(){var e="",t="";if(this.imageInfo.releaseTimestamp>0){var n=1e3*this.imageInfo.releaseTimestamp;e=this.M.utc(n).locale(this.T.getUILocale()).format("YYYY-MM-DD HH:mm:ss Z"),t=this.M.utc(n).locale(this.T.getUILocale()).fromNow()}return e&&t?"".concat(e," ").concat(this.$t("(")).concat(t).concat(this.$t(")")):"-"}},props:{},data:function(){return{imageInfo:{},isLoadingSystemInfo:!1,workerQueues:[]}}},_=w,b=(n("a3b0"),n("fb21")),g=n("190e"),k=Object(p["a"])(_,a,o,!1,null,"3da03c0f",null);"function"===typeof b["default"]&&Object(b["default"])(k),"function"===typeof g["default"]&&Object(g["default"])(k);t["default"]=k.exports},"6ed1":function(e,t,n){},9472:function(e,t,n){"use strict";var a=n("5ce2"),o=n.n(a);t["default"]=o.a},a3b0:function(e,t,n){"use strict";n("2fce")},a7cc:function(e,t,n){"use strict";n("6ed1")},bb7e:function(e,t,n){"use strict";n("cfe1")},cfe1:function(e,t,n){},fb21:function(e,t,n){"use strict";var a=n("476e"),o=n.n(a);t["default"]=o.a}}]);