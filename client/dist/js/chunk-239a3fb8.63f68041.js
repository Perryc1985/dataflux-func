(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-239a3fb8"],{"0797":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-CN":{"Download as a text file":"作为文本文件下载"}}'),delete t.options._Ctor}},"13ba":function(t,e,o){"use strict";var n=o("d10d"),a=o.n(n);e["default"]=a.a},"158a":function(t,e,o){},"21a6":function(t,e,o){(function(o){var n,a,s;(function(o,i){a=[],n=i,s="function"===typeof n?n.apply(e,a):n,void 0===s||(t.exports=s)})(0,(function(){"use strict";function e(t,e){return"undefined"==typeof e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function n(t,e,o){var n=new XMLHttpRequest;n.open("GET",t),n.responseType="blob",n.onload=function(){c(n.response,e,o)},n.onerror=function(){console.error("could not download file")},n.send()}function a(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function s(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(n){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof o&&o.global===o?o:void 0,r=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!r?function(t,e,o){var r=i.URL||i.webkitURL,c=document.createElement("a");e=e||t.name||"download",c.download=e,c.rel="noopener","string"==typeof t?(c.href=t,c.origin===location.origin?s(c):a(c.href)?n(t,e,o):s(c,c.target="_blank")):(c.href=r.createObjectURL(t),setTimeout((function(){r.revokeObjectURL(c.href)}),4e4),setTimeout((function(){s(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,o,i){if(o=o||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(e(t,i),o);else if(a(t))n(t,o,i);else{var r=document.createElement("a");r.href=t,r.target="_blank",setTimeout((function(){s(r)}))}}:function(t,e,o,a){if(a=a||open("","_blank"),a&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof t)return n(t,e,o);var s="application/octet-stream"===t.type,c=/constructor/i.test(i.HTMLElement)||i.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||s&&c||r)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var t=d.result;t=l?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=t:location=t,a=null},d.readAsDataURL(t)}else{var u=i.URL||i.webkitURL,f=u.createObjectURL(t);a?a.location=f:location.href=f,a=null,setTimeout((function(){u.revokeObjectURL(f)}),4e4)}});i.saveAs=c.saveAs=c,t.exports=c}))}).call(this,o("c8ba"))},"2f37":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-CN":{"IP Address":"IP地址","Operation":"操作","Data ID":"数据 ID","MODIFY":"修改操作","DELETE":"删除操作","Cost":"耗时","Request":"请求","Response":"响应","No Recent Operation Records":"无近期操作记录","All recent important operations will be collected by the system and shown here":"所有重要的操作会被系统搜集并展示在此"}}'),delete t.options._Ctor}},"308c":function(t,e,o){"use strict";var n=o("c59f"),a=o.n(n);e["default"]=a.a},"3b0a":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-TW":{"All recent important operations will be collected by the system and shown here":"所有重要的操作會被系統蒐集並展示在此","Cost":"耗時","DELETE":"刪除操作","Data ID":"資料 ID","IP Address":"IP地址","MODIFY":"修改操作","No Recent Operation Records":"無近期操作記錄","Operation":"操作","Request":"請求","Response":"響應"}}'),delete t.options._Ctor}},4244:function(t,e,o){"use strict";var n=o("3b0a"),a=o.n(n);e["default"]=a.a},"48bd":function(t,e,o){"use strict";var n=o("2f37"),a=o.n(n);e["default"]=a.a},"4b38":function(t,e,o){"use strict";o.r(e);o("a15b"),o("8a79");var n=function(){var t=this,e=t._self._c;return e("transition",{attrs:{name:"fade"}},[e("el-container",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.isLoaded,expression:"$store.state.isLoaded"}],attrs:{direction:"vertical"}},[e("el-header",{attrs:{height:"60px"}},[e("div",{staticClass:"common-page-header"},[e("h1",[t._v(t._s(t.$t("Operation Records")))]),t._v(" "),e("div",{staticClass:"header-control"},[e("FuzzySearchInput",{attrs:{dataFilter:t.dataFilter}})],1)])]),t._v(" "),e("el-main",{staticClass:"common-table-container"},[t.T.isNothing(t.data)?e("div",{staticClass:"no-data-area"},[t.T.isPageFiltered()?e("h1",{staticClass:"no-data-title"},[e("i",{staticClass:"fa fa-fw fa-search"}),t._v(t._s(t.$t("No matched data found")))]):e("h1",{staticClass:"no-data-title"},[e("i",{staticClass:"fa fa-fw fa-info-circle"}),t._v(t._s(t.$t("No Recent Operation Records")))]),t._v(" "),e("p",{staticClass:"no-data-tip"},[t._v("\n          "+t._s(t.$t("All recent important operations will be collected by the system and shown here"))+"\n        ")])]):e("el-table",{staticClass:"common-table",attrs:{height:"100%",data:t.data,"row-class-name":t.T.getHighlightRowCSS}},[e("el-table-column",{attrs:{label:t.$t("Time"),width:"200"},scopedSlots:t._u([{key:"default",fn:function(o){return[e("span",[t._v(t._s(t._f("datetime")(o.row.createTime)))]),t._v(" "),e("br"),t._v(" "),e("span",{staticClass:"text-info"},[t._v(t._s(t._f("fromNow")(o.row.createTime)))])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:t.$t("User"),width:"350"},scopedSlots:t._u([{key:"default",fn:function(o){return[e("strong",[t._v(t._s(o.row.u_name||t.$t("Anonymity")))]),t._v(" "),o.row.userId?[e("br"),t._v(" "),e("span",{staticClass:"text-info"},[t._v(t._s(t.$t("User ID")))]),t._v("\n               "),e("code",{staticClass:"text-main"},[t._v(t._s(o.row.userId))]),t._v(" "),e("CopyButton",{attrs:{content:o.row.userId}})]:t._e(),t._v(" "),t.T.notNothing(o.row.clientIPsJSON)?[e("br"),t._v(" "),e("span",{staticClass:"text-info"},[t._v(t._s(t.$t("IP Address")))]),t._v("\n               "),e("code",{staticClass:"text-main"},[t._v(t._s(o.row.clientIPsJSON.join(", ")))]),t._v(" "),e("CopyButton",{attrs:{content:o.row.clientIPsJSON.join(", ")}})]:t._e()]}}])}),t._v(" "),e("el-table-column",{attrs:{label:t.$t("Operation")},scopedSlots:t._u([{key:"default",fn:function(o){return[o.row.respStatusCode>=200&&o.row.respStatusCode<400?e("span",{staticClass:"text-good"},[e("i",{staticClass:"fa fa-fw fa-check"})]):e("span",{staticClass:"text-bad"},[e("i",{staticClass:"fa fa-fw fa-times"})]),t._v(" "),e("span",[t._v(t._s(t.$t(o.row.reqRouteName)))]),t._v(" "),t.T.endsWith(o.row.reqRoute,"/do/modify")?e("strong",{staticClass:"text-watch"},[t._v("\n              （"+t._s(t.$t("MODIFY"))+"）\n            ")]):t._e(),t._v(" "),t.T.endsWith(o.row.reqRoute,"/do/delete")?e("strong",{staticClass:"text-bad"},[t._v("\n              （"+t._s(t.$t("DELETE"))+"）\n            ")]):t._e(),t._v(" "),o.row._operationEntityId?[e("br"),t._v(" "),e("i",{staticClass:"fa fa-fw"}),t._v(" "),e("span",{staticClass:"text-info"},[t._v(t._s(t.$t("Data ID")))]),t._v("\n               "),e("code",{staticClass:"text-main"},[t._v(t._s(o.row._operationEntityId))]),t._v(" "),e("CopyButton",{attrs:{content:o.row._operationEntityId}})]:t._e()]}}])}),t._v(" "),e("el-table-column",{attrs:{label:t.$t("Cost"),align:"right",width:"100"},scopedSlots:t._u([{key:"default",fn:function(o){return[t._v("\n            "+t._s(o.row.reqCost)+" "),e("span",{staticClass:"text-info"},[t._v(t._s(t.$t("ms")))])]}}])}),t._v(" "),e("el-table-column",{attrs:{align:"right",width:"150"},scopedSlots:t._u([{key:"default",fn:function(o){return[e("el-link",{attrs:{type:"primary"},on:{click:function(e){return t.showDetail(o.row)}}},[t._v(t._s(t.$t("Show detail")))])]}}])})],1)],1),t._v(" "),e("Pager",{attrs:{pageInfo:t.pageInfo}}),t._v(" "),e("LongTextDialog",{ref:"longTextDialog",attrs:{showDownload:!0}})],1)],1)},a=[],s=o("c7eb"),i=o("1da1"),r=(o("d3b7"),o("159b"),o("14d9"),o("99af"),o("e9c4"),o("b0c0"),o("b76c")),c={name:"OperationRecordList",components:{LongTextDialog:r["a"]},watch:{$route:{immediate:!0,handler:function(t,e){var o=this;return Object(i["a"])(Object(s["a"])().mark((function t(){return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.loadData();case 2:case"end":return t.stop()}}),t)})))()}}},methods:{loadData:function(){var t=this;return Object(i["a"])(Object(s["a"])().mark((function e(){var o,n;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=t.dataFilter=t.T.createListQuery(),e.next=3,t.T.callAPI_get("/api/v1/operation-records/do/list",{query:o});case 3:if(n=e.sent,n&&n.ok){e.next=6;break}return e.abrupt("return");case 6:n.data.forEach((function(e){e.reqRouteName=e.reqRouteNames[t.$store.getters.uiLocale]||e.reqRouteNames.default})),t.data=n.data,t.pageInfo=n.pageInfo,t.$store.commit("updateLoadStatus",!0);case 10:case"end":return e.stop()}}),e)})))()},showDetail:function(t){var e=this;this.$store.commit("updateHighlightedTableDataId",t.id);var o=[];o.push("===== ".concat(this.$t("Request")," =====")),o.push("".concat(t.reqMethod.toUpperCase()," ").concat(this.T.formatURL(t.reqRoute,{params:t.reqParamsJSON,query:t.reqQueryJSON}))),t.reqBodyJSON&&o.push(JSON.stringify(t.reqBodyJSON,null,2)),t.reqFileInfoJSON&&(o.push("\n===== ".concat(this.$t("Upload")," =====")),t.reqFileInfoJSON.forEach((function(t){o.push("".concat(t.name," <").concat(e.T.byteSizeHuman(t.size),">"))}))),o.push("\n===== ".concat(this.$t("Response")," =====")),o.push("Status Code: ".concat(t.respStatusCode)),t.respBodyJSON&&o.push(JSON.stringify(t.respBodyJSON,null,2));var n=o.join("\n"),a=this.M(t.createTime).format("YYYYMMDD_HHmmss"),s="http-dump.".concat(a);this.$refs.longTextDialog.update(n,s)}},computed:{},props:{},data:function(){var t=this.T.createPageInfo(),e=this.T.createListQuery();return{data:[],pageInfo:t,dataFilter:{_fuzzySearch:e._fuzzySearch}}}},l=c,d=o("2877"),u=o("48bd"),f=o("13ba"),p=o("4244"),h=Object(d["a"])(l,n,a,!1,null,"7b6f9e54",null);"function"===typeof u["default"]&&Object(u["default"])(h),"function"===typeof f["default"]&&Object(f["default"])(h),"function"===typeof p["default"]&&Object(p["default"])(h);e["default"]=h.exports},7094:function(t,e,o){"use strict";var n=o("e254"),a=o.n(n);e["default"]=a.a},"7b0b4":function(t,e,o){"use strict";var n=o("0797"),a=o.n(n);e["default"]=a.a},"8a79":function(t,e,o){"use strict";var n=o("23e7"),a=o("e330"),s=o("06cf").f,i=o("50c4"),r=o("577e"),c=o("5a34"),l=o("1d80"),d=o("ab13"),u=o("c430"),f=a("".endsWith),p=a("".slice),h=Math.min,_=d("endsWith"),v=!u&&!_&&!!function(){var t=s(String.prototype,"endsWith");return t&&!t.writable}();n({target:"String",proto:!0,forced:!v&&!_},{endsWith:function(t){var e=r(l(this));c(t);var o=arguments.length>1?arguments[1]:void 0,n=e.length,a=void 0===o?n:h(i(o),n),s=r(t);return f?f(e,s,a):p(e,a-s.length,a)===s}})},b028:function(t,e,o){"use strict";o("cf1c")},b76c:function(t,e,o){"use strict";var n=function(){var t=this,e=t._self._c;return e("el-dialog",{attrs:{id:"LongTextDialog",visible:t.show,"close-on-click-modal":!1,width:"70%"},on:{"update:visible":function(e){t.show=e}}},[e("template",{slot:"title"},[t._v("\n    "+t._s(t.title)+"\n    "),e("span",{staticClass:"text-info press-esc-to-close-tip"},[t._v(t._s(t.$t("Press ESC to close")))])]),t._v(" "),e("div",[t.showDownload&&t.fileName&&t.content?e("div",{staticClass:"download-link"},[e("el-link",{attrs:{type:"primary"},on:{click:t.download}},[t._v("\n        "+t._s(t.$t("Download as a text file"))+"\n        "),e("i",{staticClass:"fa fa-fw fa-download"})])],1):t._e(),t._v(" "),e("textarea",{attrs:{id:"longTextDialogContent"}})])],2)},a=[],s=(o("130f"),o("21a6")),i=o.n(s),r={name:"LongTextDialog",components:{},watch:{},methods:{update:function(t,e){var o=this;this.codeMirror&&this.codeMirror.setValue(""),this.content=t,this.fileName=(e||"dump")+".txt",this.show=!0,setImmediate((function(){if(!o.codeMirror){var t={mode:o.mode||"text"};o.codeMirror=o.T.initCodeMirror("longTextDialogContent",t),o.codeMirror.setOption("theme",o.T.getCodeMirrorThemeName()),o.T.setCodeMirrorReadOnly(o.codeMirror,!0)}o.codeMirror.setValue(o.content||""),o.codeMirror.refresh(),o.codeMirror.focus()}))},download:function(){var t=new Blob([this.content],{type:"text/plain"}),e=this.fileName;i.a.saveAs(t,e)}},computed:{},props:{title:String,mode:String,showDownload:Boolean},data:function(){return{show:!1,fileName:null,content:null,codeMirror:null}},beforeDestroy:function(){this.T.destoryCodeMirror(this.codeMirror)}},c=r,l=(o("b028"),o("da7d"),o("2877")),d=o("7b0b4"),u=o("7094"),f=o("308c"),p=Object(l["a"])(c,n,a,!1,null,"fc951d86",null);"function"===typeof d["default"]&&Object(d["default"])(p),"function"===typeof u["default"]&&Object(u["default"])(p),"function"===typeof f["default"]&&Object(f["default"])(p);e["a"]=p.exports},c59f:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-TW":{"Download as a text file":"作為文字檔案下載"}}'),delete t.options._Ctor}},cf1c:function(t,e,o){},d10d:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-HK":{"All recent important operations will be collected by the system and shown here":"所有重要的操作會被系統蒐集並展示在此","Cost":"耗時","DELETE":"刪除操作","Data ID":"數據 ID","IP Address":"IP地址","MODIFY":"修改操作","No Recent Operation Records":"無近期操作記錄","Operation":"操作","Request":"請求","Response":"響應"}}'),delete t.options._Ctor}},da7d:function(t,e,o){"use strict";o("158a")},e254:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-HK":{"Download as a text file":"作為文本文件下載"}}'),delete t.options._Ctor}}}]);