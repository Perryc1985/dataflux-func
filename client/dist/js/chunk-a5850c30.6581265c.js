(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a5850c30"],{"06c5":function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));a("fb6a"),a("d3b7"),a("25f0"),a("b0c0"),a("a630"),a("3ca3"),a("ac1f"),a("00b4");var n=a("6b75");function s(t,e){if(t){if("string"===typeof t)return Object(n["a"])(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(n["a"])(t,e):void 0}}},"0797":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-CN":{"Download as a text file":"作为文本文件下载"}}'),delete t.options._Ctor}},"0b24":function(t,e,a){},"20cc":function(t,e,a){},"21a6":function(t,e,a){(function(a){var n,s,o;(function(a,i){s=[],n=i,o="function"===typeof n?n.apply(e,s):n,void 0===o||(t.exports=o)})(0,(function(){"use strict";function e(t,e){return"undefined"==typeof e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function n(t,e,a){var n=new XMLHttpRequest;n.open("GET",t),n.responseType="blob",n.onload=function(){l(n.response,e,a)},n.onerror=function(){console.error("could not download file")},n.send()}function s(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function o(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(n){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof a&&a.global===a?a:void 0,r=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!r?function(t,e,a){var r=i.URL||i.webkitURL,l=document.createElement("a");e=e||t.name||"download",l.download=e,l.rel="noopener","string"==typeof t?(l.href=t,l.origin===location.origin?o(l):s(l.href)?n(t,e,a):o(l,l.target="_blank")):(l.href=r.createObjectURL(t),setTimeout((function(){r.revokeObjectURL(l.href)}),4e4),setTimeout((function(){o(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,a,i){if(a=a||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(e(t,i),a);else if(s(t))n(t,a,i);else{var r=document.createElement("a");r.href=t,r.target="_blank",setTimeout((function(){o(r)}))}}:function(t,e,a,s){if(s=s||open("","_blank"),s&&(s.document.title=s.document.body.innerText="downloading..."),"string"==typeof t)return n(t,e,a);var o="application/octet-stream"===t.type,l=/constructor/i.test(i.HTMLElement)||i.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||o&&l||r)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var t=u.result;t=c?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),s?s.location.href=t:location=t,s=null},u.readAsDataURL(t)}else{var d=i.URL||i.webkitURL,f=d.createObjectURL(t);s?s.location=f:location.href=f,s=null,setTimeout((function(){d.revokeObjectURL(f)}),4e4)}});i.saveAs=l.saveAs=l,t.exports=l}))}).call(this,a("c8ba"))},"2aa4":function(t,e,a){"use strict";var n=a("bcb3"),s=a.n(n);e["default"]=s.a},3709:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-CN":{"PIP Tool":"PIP 工具","Mirror":"镜像源","Install Python Package":"安装 Python 包","Installed Python Packages":"已安装的 Python 包","Package":"包","Version":"版本","Built-in":"内置","Exactly match":"完全匹配","Load Installed Python Packages":"加载已安装的 Python 包列表","Loading Installed Python Packages":"正在加载已安装的 Python 包列表","Show Error":"显示错误信息","Reset Install Status":"复位安装状态","package or package==1.2.3":"package 或 package==1.2.3","Package installed: {pkg}":"包已安装：{pkg}","[object Object]":"Func 容器 ID","You can also install the package by following command":"您也可以使用以下命令来安装","Previous installing may still running":"之前的安装似乎仍然在运行","Are you sure you want to install the package now?":"是否确定现在就安装？","installCost":"（耗时 {n} 秒）"}}'),delete t.options._Ctor}},"4eb8":function(t,e,a){"use strict";var n=a("3709"),s=a.n(n);e["default"]=s.a},"6b75":function(t,e,a){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}a.d(e,"a",(function(){return n}))},"7b0b4":function(t,e,a){"use strict";var n=a("0797"),s=a.n(n);e["default"]=s.a},"7d55":function(t,e,a){"use strict";a("20cc")},a630:function(t,e,a){var n=a("23e7"),s=a("4df4"),o=a("1c7e"),i=!o((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:i},{from:s})},aa65:function(t,e,a){"use strict";a("e7e4")},b76c:function(t,e,a){"use strict";var n=function(){var t=this,e=t._self._c;return e("el-dialog",{attrs:{id:"LongTextDialog",visible:t.show,"close-on-click-modal":!1,width:"70%"},on:{"update:visible":function(e){t.show=e}}},[e("template",{slot:"title"},[t._v("\n    "+t._s(t.title)+"\n    "),e("span",{staticClass:"text-info press-esc-to-close-tip"},[t._v(t._s(t.$t("Press ESC to close")))])]),t._v(" "),e("div",[t.showDownload&&t.fileName&&t.content?e("div",{staticClass:"download-link"},[e("el-link",{attrs:{type:"primary"},on:{click:t.download}},[t._v("\n        "+t._s(t.$t("Download as a text file"))+"\n        "),e("i",{staticClass:"fa fa-fw fa-download"})])],1):t._e(),t._v(" "),e("textarea",{attrs:{id:"longTextDialogContent"}})])],2)},s=[],o=(a("130f"),a("21a6")),i=a.n(o),r={name:"LongTextDialog",components:{},watch:{},methods:{update:function(t,e){var a=this;this.codeMirror&&this.codeMirror.setValue(""),this.content=t,this.fileName=(e||"dump")+".txt",this.show=!0,setImmediate((function(){a.codeMirror||(a.codeMirror=a.T.initCodeMirror("longTextDialogContent",a.mode||"text"),a.codeMirror.setOption("theme",a.T.getCodeMirrorThemeName()),a.T.setCodeMirrorReadOnly(a.codeMirror,!0)),a.codeMirror.setValue(a.content||""),a.codeMirror.refresh(),a.codeMirror.focus()}))},download:function(){var t=new Blob([this.content],{type:"text/plain"}),e=this.fileName;i.a.saveAs(t,e)}},computed:{},props:{title:String,mode:String,showDownload:Boolean},data:function(){return{show:!1,fileName:null,content:null,codeMirror:null}},beforeDestroy:function(){this.T.destoryCodeMirror(this.codeMirror)}},l=r,c=(a("aa65"),a("e5e6"),a("2877")),u=a("7b0b4"),d=Object(c["a"])(l,n,s,!1,null,"690a7898",null);"function"===typeof u["default"]&&Object(u["default"])(d);e["a"]=d.exports},bcb3:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"installCost":"(Cost {n} s)"}}'),delete t.options._Ctor}},c3bb:function(t,e,a){"use strict";a.r(e);a("b0c0"),a("b680");var n=function(){var t=this,e=t._self._c;return e("transition",{attrs:{name:"fade"}},[e("el-container",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.isLoaded,expression:"$store.state.isLoaded"}],attrs:{direction:"vertical"}},[e("el-header",{attrs:{height:"60px"}},[e("h1",[t._v(t._s(t.$t("PIP Tool")))])]),t._v(" "),e("el-main",[e("el-divider",{attrs:{"content-position":"left"}},[e("h1",[t._v(t._s(t.$t("Install Python Package")))])]),t._v(" "),e("el-select",{staticStyle:{width:"235px"},model:{value:t.pypiMirror,callback:function(e){t.pypiMirror=e},expression:"pypiMirror"}},t._l(t.C.PIP_MIRROR,(function(t){return e("el-option",{key:t.key,attrs:{label:t.name,value:t.value}})})),1),t._v(" "),e("el-input",{staticStyle:{width:"500px"},attrs:{placeholder:t.$t("package or package==1.2.3")},model:{value:t.packageToInstall,callback:function(e){t.packageToInstall=e},expression:"packageToInstall"}}),t._v(" "),e("el-button",{attrs:{type:"primary",disabled:!t.isInstallable},on:{click:t.installPackages}},[t.isInstalling?e("span",[e("i",{staticClass:"fa fa-fw fa-circle-o-notch fa-spin"}),t._v("\n          "+t._s(t.$t("Installing"))+"\n        ")]):e("span",[t._v(t._s(t.$t("Install")))])]),t._v(" "),e("p",{staticClass:"pip-install-tips"},[t.isInstallable?[t._v("\n          "+t._s(t.$t("You can also install the package by following command"))+t._s(t.$t(":"))+"\n          "),e("br"),t._v(" "),e("CopyButton",{attrs:{content:t.getPIPCommand(),"tip-placement":"left"}}),t._v(" "),e("code",{staticClass:"text-main",domProps:{innerHTML:t._s(t.getPIPCommand({pretty:!0}))}})]:t._e()],2),t._v(" "),e("el-divider",{attrs:{"content-position":"left"}},[e("h1",[t._v(t._s(t.$t("Installed Python Packages")))])]),t._v(" "),e("el-button",{attrs:{disabled:t.isLoadingInstalldPackages},on:{click:t.loadInstalledPackages}},[t.isLoadingInstalldPackages?e("span",[e("i",{staticClass:"fa fa-fw fa-circle-o-notch fa-spin"}),t._v("\n          "+t._s(t.$t("Loading Installed Python Packages"))+"\n        ")]):e("span",[t._v(t._s(t.$t("Load Installed Python Packages")))])]),t._v(" "),t.installedPackages.length>0?e("el-table",{staticClass:"common-table",attrs:{data:t.installedPackages}},[e("el-table-column",{attrs:{label:t.$t("Package"),sortable:"","sort-by":"name"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("code",[t._v(t._s(a.row.name))])]}}],null,!1,370914816)}),t._v(" "),e("el-table-column",{attrs:{label:t.$t("Version")},scopedSlots:t._u([{key:"default",fn:function(a){return[e("code",[t._v(t._s(a.row.version))])]}}],null,!1,2406261309)}),t._v(" "),e("el-table-column",{attrs:{label:t.$t("Built-in"),align:"center",sortable:"","sort-by":"isBuiltin",width:"100"},scopedSlots:t._u([{key:"default",fn:function(a){return[a.row.isBuiltin?e("span",{staticClass:"text-good"},[t._v(t._s(t.$t("Yes")))]):t._e()]}}],null,!1,4156707113)})],1):t._e()],1),t._v(" "),e("el-dialog",{attrs:{visible:t.showInstallStatus,width:"650px"},on:{"update:visible":function(e){t.showInstallStatus=e}}},[e("template",{slot:"title"},[t._v("\n        "+t._s(t.$t("Install Python Package"))+"\n        "),e("span",{staticClass:"text-info press-esc-to-close-tip"},[t._v(t._s(t.$t("Press ESC to close")))])]),t._v(" "),e("div",{staticClass:"installing-dialog-content"},t._l(t.installStatus,(function(a){return e("div",{staticClass:"install-list-item"},[e("div",["success"===a.status?e("span",{staticClass:"text-good"},[e("i",{staticClass:"fa fa-fw fa-check-circle"}),t._v(" "),e("code",[t._v(t._s(a.package))])]):"failure"===a.status?e("span",{staticClass:"text-bad"},[e("i",{staticClass:"fa fa-fw fa-times-circle"}),t._v(" "),e("code",[t._v(t._s(a.package))])]):"installing"===a.status?e("span",{staticClass:"text-main"},[e("i",{staticClass:"fa fa-fw fa-circle-o-notch fa-spin"}),t._v(" "),e("code",[t._v(t._s(a.package))])]):e("span",[e("i",{staticClass:"fa fa-fw"}),t._v(" "),e("code",[t._v(t._s(a.package))])]),t._v(" "),e("small",{staticClass:"text-info"},[a.startTimeMs&&a.endTimeMs?[t._v("\n                "+t._s(t.$tc("installCost",((a.endTimeMs-a.startTimeMs)/1e3).toFixed(2)))+"\n              ")]:t._e(),t._v(" "),a.startTimeMs&&!a.endTimeMs?[t._v("\n                "+t._s(t.$tc("installCost",((t.nowMs-a.startTimeMs)/1e3).toFixed(2)))+"\n              ")]:t._e()],2)]),t._v(" "),e("div",[a.error?e("el-button",{attrs:{type:"text"},on:{click:function(e){return t.showError(a.error)}}},[t._v(t._s(t.$t("Show Error")))]):t._e()],1)])})),0),t._v(" "),e("div",{attrs:{slot:"footer"},slot:"footer"},[t.isInstalling?e("el-dropdown",{attrs:{"split-button":""},on:{click:function(e){t.showInstallStatus=!1},command:t.clearInstallStatus}},[t._v("\n          "+t._s(t.$t("Close"))+"\n          "),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",[t._v(t._s(t.$t("Reset Install Status")))])],1)],1):e("el-button",{attrs:{type:"primary"},on:{click:t.clearInstallStatus}},[t._v(t._s(t.$t("Finish")))])],1)],2),t._v(" "),e("LongTextDialog",{ref:"longTextDialog"})],1)],1)},s=[],o=(a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("d9e2"),a("06c5"));function i(t,e){var a="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=Object(o["a"])(t))||e&&t&&"number"===typeof t.length){a&&(t=a);var n=0,s=function(){};return{s:s,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,r=!0,l=!1;return{s:function(){a=a.call(t)},n:function(){var t=a.next();return r=t.done,t},e:function(t){l=!0,i=t},f:function(){try{r||null==a["return"]||a["return"]()}finally{if(l)throw i}}}}var r=a("c7eb"),l=a("1da1"),c=(a("99af"),a("a15b"),a("ac1f"),a("1276"),a("498a"),a("4de4"),a("b76c")),u={name:"PIPTool",components:{LongTextDialog:c["a"]},watch:{$route:{immediate:!0,handler:function(t,e){var a=this;return Object(l["a"])(Object(r["a"])().mark((function t(){return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a.loadData();case 2:case"end":return t.stop()}}),t)})))()}}},methods:{getPIPCommand:function(t){if(!this.isInstallable)return null;t=t||{};var e=this.$store.getters.SYSTEM_INFO("_HOSTNAME")||this.$t("{Func Container ID}"),a="-t ".concat(this.$store.getters.SYSTEM_INFO("_PIP_INSTALL_DIR")),n=this.pypiMirror?"-i ".concat(this.pypiMirror):"",s="sudo docker exec ".concat(e," pip install ").concat(a," ").concat(n," ");return s=t.pretty?"".concat(s," \\<br>&#12288;&#12288;&#12288;").concat(this.packageToInstall.trim().split(/\s+/).join(" \\<br>&#12288;&#12288;&#12288;")):"".concat(s," ").concat(this.packageToInstall).trim(),s},loadData:function(){var t=this;return Object(l["a"])(Object(r["a"])().mark((function e(){return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.pypiMirror=t.C.PIP_MIRROR_DEFAULT.value,e.next=3,t.updateInstallStatus();case 3:t.$store.commit("updateLoadStatus",!0),setTimeout((function(){t.installStatus.length>0&&(t.showInstallStatus=!0)}),500);case 5:case"end":return e.stop()}}),e)})))()},loadInstalledPackages:function(){var t=this;return Object(l["a"])(Object(r["a"])().mark((function e(){var a;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoadingInstalldPackages=!0,t.installedPackages=[],e.next=4,t.T.callAPI_get("/api/v1/python-packages/installed/do/list");case 4:if(a=e.sent,t.isLoadingInstalldPackages=!1,a&&a.ok){e.next=8;break}return e.abrupt("return");case 8:t.installedPackages=a.data;case 9:case"end":return e.stop()}}),e)})))()},installPackages:function(){var t=this;return Object(l["a"])(Object(r["a"])().mark((function e(){var a;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.isInstalling){e.next=3;break}return t.showInstallStatus=!0,e.abrupt("return");case 3:return e.next=5,t.T.callAPI("post","/api/v1/python-packages/do/install",{body:{mirror:t.pypiMirror,packages:t.packageToInstall}});case 5:if(a=e.sent,a&&a.ok){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,t.updateInstallStatus();case 10:t.showInstallStatus=!0;case 11:case"end":return e.stop()}}),e)})))()},updateInstallStatus:function(){var t=this;return Object(l["a"])(Object(r["a"])().mark((function e(){var a;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.T.callAPI_get("/api/v1/python-packages/install-status/do/get");case 2:if(a=e.sent,a&&a.ok){e.next=5;break}return e.abrupt("return");case 5:t.installStatus=a.data;case 6:case"end":return e.stop()}}),e)})))()},clearInstallStatus:function(){var t=this;return Object(l["a"])(Object(r["a"])().mark((function e(){var a;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.T.callAPI_get("/api/v1/python-packages/install-status/do/clear");case 2:if(a=e.sent,a&&a.ok){e.next=5;break}return e.abrupt("return");case 5:t.showInstallStatus=!1,t.installStatus=[];case 7:case"end":return e.stop()}}),e)})))()},showError:function(t){this.$refs.longTextDialog.update(t)}},computed:{isInstallable:function(){if(this.T.isNothing(this.packageToInstall))return!1;var t,e=i(this.packageToInstall.trim().split(/\s+/));try{for(e.s();!(t=e.n()).done;){var a=t.value,n=a.split("==");if(n.length>2)return!1;if(this.T.isNothing(n[0]))return!1;if(n.length>1&&this.T.isNothing(n[1]))return!1}}catch(s){e.e(s)}finally{e.f()}return!0},isInstalling:function(){var t=this.installStatus.filter((function(t){return"success"!==t.status&&"failure"!==t.status})).length;return t>0}},props:{},data:function(){return{pypiMirror:"",packageToInstall:"",showInstallStatus:!1,nowMs:Date.now(),installStatus:[],installedPackages:[],isLoadingInstalldPackages:!1,autoUpdateInstallStatusTimer:null,autoUpdateNowMsTimer:null}},mounted:function(){var t=this,e=this.$route.query.requirements;e&&(this.packageToInstall=this.T.fromBase64(e)),this.autoUpdateInstallStatusTimer=setInterval((function(){t.updateInstallStatus()}),3e3),this.autoUpdateNowMsTimer=setInterval((function(){t.nowMs=Date.now()}),500)},beforeDestroy:function(){this.autoUpdateInstallStatusTimer&&clearInterval(this.autoUpdateInstallStatusTimer),this.autoUpdateNowMsTimer&&clearInterval(this.autoUpdateNowMsTimer)}},d=u,f=(a("7d55"),a("2877")),p=a("2aa4"),h=a("4eb8"),v=Object(f["a"])(d,n,s,!1,null,"59768b86",null);"function"===typeof p["default"]&&Object(p["default"])(v),"function"===typeof h["default"]&&Object(h["default"])(v);e["default"]=v.exports},e5e6:function(t,e,a){"use strict";a("0b24")},e7e4:function(t,e,a){}}]);