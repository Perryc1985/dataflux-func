(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7700d036"],{"0797":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-CN":{"Download as a text file":"作为文本文件下载"}}'),delete t.options._Ctor}},"0b24":function(t,e,o){},"11fe":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-CN":{"Request":"请求","Response":"响应","Status Code":"状态码","Cost":"耗时","Show detail":"显示请求详情","omitted.":"略","No Recent Abnormal Request":"尚无任何近期异常请求","All recent abnormal requests will be collected and shown here":"所有异常的请求会被搜集，并展示在此"}}'),delete t.options._Ctor}},"21a6":function(t,e,o){(function(o){var n,a,s;(function(o,r){a=[],n=r,s="function"===typeof n?n.apply(e,a):n,void 0===s||(t.exports=s)})(0,(function(){"use strict";function e(t,e){return"undefined"==typeof e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function n(t,e,o){var n=new XMLHttpRequest;n.open("GET",t),n.responseType="blob",n.onload=function(){c(n.response,e,o)},n.onerror=function(){console.error("could not download file")},n.send()}function a(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function s(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(n){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof o&&o.global===o?o:void 0,i=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!i?function(t,e,o){var i=r.URL||r.webkitURL,c=document.createElement("a");e=e||t.name||"download",c.download=e,c.rel="noopener","string"==typeof t?(c.href=t,c.origin===location.origin?s(c):a(c.href)?n(t,e,o):s(c,c.target="_blank")):(c.href=i.createObjectURL(t),setTimeout((function(){i.revokeObjectURL(c.href)}),4e4),setTimeout((function(){s(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,o,r){if(o=o||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(e(t,r),o);else if(a(t))n(t,o,r);else{var i=document.createElement("a");i.href=t,i.target="_blank",setTimeout((function(){s(i)}))}}:function(t,e,o,a){if(a=a||open("","_blank"),a&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof t)return n(t,e,o);var s="application/octet-stream"===t.type,c=/constructor/i.test(r.HTMLElement)||r.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||s&&c||i)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var t=u.result;t=l?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=t:location=t,a=null},u.readAsDataURL(t)}else{var d=r.URL||r.webkitURL,p=d.createObjectURL(t);a?a.location=p:location.href=p,a=null,setTimeout((function(){d.revokeObjectURL(p)}),4e4)}});r.saveAs=c.saveAs=c,t.exports=c}))}).call(this,o("c8ba"))},"7b0b4":function(t,e,o){"use strict";var n=o("0797"),a=o.n(n);e["default"]=a.a},aa65:function(t,e,o){"use strict";o("e7e4")},b11a:function(t,e,o){"use strict";o("e89f")},b76c:function(t,e,o){"use strict";var n=function(){var t=this,e=t._self._c;return e("el-dialog",{attrs:{id:"LongTextDialog",visible:t.show,"close-on-click-modal":!1,width:"70%"},on:{"update:visible":function(e){t.show=e}}},[e("template",{slot:"title"},[t._v("\n    "+t._s(t.title)+"\n    "),e("span",{staticClass:"text-info press-esc-to-close-tip"},[t._v(t._s(t.$t("Press ESC to close")))])]),t._v(" "),e("div",[t.showDownload&&t.fileName&&t.content?e("div",{staticClass:"download-link"},[e("el-link",{attrs:{type:"primary"},on:{click:t.download}},[t._v("\n        "+t._s(t.$t("Download as a text file"))+"\n        "),e("i",{staticClass:"fa fa-fw fa-download"})])],1):t._e(),t._v(" "),e("textarea",{attrs:{id:"longTextDialogContent"}})])],2)},a=[],s=(o("130f"),o("21a6")),r=o.n(s),i={name:"LongTextDialog",components:{},watch:{},methods:{update:function(t,e){var o=this;this.codeMirror&&this.codeMirror.setValue(""),this.content=t,this.fileName=(e||"dump")+".txt",this.show=!0,setImmediate((function(){o.codeMirror||(o.codeMirror=o.T.initCodeMirror("longTextDialogContent",o.mode||"text"),o.codeMirror.setOption("theme",o.T.getCodeMirrorThemeName()),o.T.setCodeMirrorReadOnly(o.codeMirror,!0)),o.codeMirror.setValue(o.content||""),o.codeMirror.refresh(),o.codeMirror.focus()}))},download:function(){var t=new Blob([this.content],{type:"text/plain"}),e=this.fileName;r.a.saveAs(t,e)}},computed:{},props:{title:String,mode:String,showDownload:Boolean},data:function(){return{show:!1,fileName:null,content:null,codeMirror:null}},beforeDestroy:function(){this.T.destoryCodeMirror(this.codeMirror)}},c=i,l=(o("aa65"),o("e5e6"),o("2877")),u=o("7b0b4"),d=Object(l["a"])(c,n,a,!1,null,"690a7898",null);"function"===typeof u["default"]&&Object(u["default"])(d);e["a"]=d.exports},cb7c:function(t,e,o){"use strict";o.r(e);o("b0c0"),o("99af");var n=function(){var t=this,e=t._self._c;return e("transition",{attrs:{name:"fade"}},[e("el-container",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.isLoaded,expression:"$store.state.isLoaded"}],attrs:{direction:"vertical"}},[e("el-header",{attrs:{height:"60px"}},[e("div",{staticClass:"list-page-header"},[e("span",[t._v(t._s(t.$t("Abnormal Requests")))]),t._v(" "),e("div",{staticClass:"header-control"},[e("el-button",{attrs:{size:"small"},on:{click:t.refresh}},[e("i",{staticClass:"fa fa-fw fa-refresh"}),t._v("\n            "+t._s(t.$t("Refresh"))+"\n          ")]),t._v(" "),e("el-radio-group",{attrs:{size:"small"},on:{change:function(e){return t.switchType(t.type)}},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},t._l(t.C.ABNORMAL_REQUEST_TYPE,(function(o,n){return e("el-radio-button",{key:o.key,attrs:{label:o.key}},[t._v(t._s(o.name))])})),1)],1)])]),t._v(" "),e("el-main",{staticClass:"common-table-container"},[t.T.isNothing(t.data)?e("div",{staticClass:"no-data-area"},[e("h1",{staticClass:"no-data-title"},[t._v(t._s(t.$t("No Recent Abnormal Request")))]),t._v(" "),e("p",{staticClass:"no-data-tip"},[t._v("\n          "+t._s(t.$t("All recent abnormal requests will be collected and shown here"))+"\n        ")])]):e("el-table",{staticClass:"common-table",attrs:{height:"100%",data:t.data,"row-class-name":t.T.getHighlightRowCSS}},[e("el-table-column",{attrs:{label:t.$t("Time"),width:"200"},scopedSlots:t._u([{key:"default",fn:function(o){return[e("span",[t._v(t._s(t._f("datetime")(o.row.reqTime)))]),t._v(" "),e("br"),t._v(" "),e("span",{staticClass:"text-info"},[t._v(t._s(t._f("fromNow")(o.row.reqTime)))])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:t.$t("User"),width:"200"},scopedSlots:t._u([{key:"default",fn:function(o){return[e("strong",[t._v(t._s(o.row.u_name||t.$t("Anonymity")))]),t._v(" "),o.row.userId?[e("br"),t._v(" "),e("span",{staticClass:"text-info"},[t._v(t._s(t.$t("User ID")))]),t._v("\n               "),e("code",{staticClass:"text-main text-small"},[t._v(t._s(o.row.userId))]),t._v(" "),e("CopyButton",{attrs:{content:o.row.userId}})]:t._e()]}}])}),t._v(" "),e("el-table-column",{attrs:{label:t.$t("Request")},scopedSlots:t._u([{key:"default",fn:function(o){return[o.row.reqRouteName?e("strong",[t._v(t._s(o.row.reqRouteName)),e("br")]):t._e(),t._v(" "),e("code",{staticClass:"text-main"},[t._v(t._s(o.row.reqMethod)+" "+t._s(decodeURI(o.row.reqURL)))]),t._v(" "),e("CopyButton",{attrs:{content:"".concat(o.row.reqMethod," ").concat(o.row.reqURL)}})]}}])}),t._v(" "),e("el-table-column",{attrs:{label:t.$t("Response"),align:"right",width:"240"},scopedSlots:t._u([{key:"default",fn:function(o){return[e("span",{staticClass:"text-info"},[t._v(t._s(t.$t("Status Code"))+t._s(t.$t(":")))]),t._v(" "),o.row.respStatusCode>=500?e("strong",{staticClass:"text-bad status-code"},[t._v(t._s(o.row.respStatusCode))]):o.row.respStatusCode>=400?e("strong",{staticClass:"text-watch status-code"},[t._v(t._s(o.row.respStatusCode))]):e("strong",{staticClass:"text-good status-code"},[t._v(t._s(o.row.respStatusCode))]),t._v(" "),t.getRespError(o.row)?e("span",[t._v(t._s(t.$t("("))+t._s(t.getRespError(o.row))+t._s(t.$t(")")))]):t._e(),t._v(" "),t.getRespMessage(o.row)?e("span",{staticClass:"text-info"},[e("br"),t._v(t._s(t.$t(t.getRespMessage(o.row))))]):t._e()]}}])}),t._v(" "),e("el-table-column",{attrs:{label:t.$t("Cost"),align:"right",width:"120"},scopedSlots:t._u([{key:"default",fn:function(o){return[t._v("\n            "+t._s(o.row.reqCost)+" "),e("span",{staticClass:"text-info"},[t._v(t._s(t.$t("ms")))])]}}])}),t._v(" "),e("el-table-column",{attrs:{width:"150",align:"right"},scopedSlots:t._u([{key:"default",fn:function(o){return[e("el-button",{attrs:{type:"text"},on:{click:function(e){return t.showDetail(o.row)}}},[t._v(t._s(t.$t("Show detail")))])]}}])})],1)],1),t._v(" "),e("Pager",{attrs:{pageInfo:t.pageInfo}}),t._v(" "),e("LongTextDialog",{ref:"longTextDialog",attrs:{showDownload:!0}})],1)],1)},a=[],s=o("c7eb"),r=o("1da1"),i=(o("14d9"),o("e9c4"),o("a15b"),o("b76c")),c={name:"AbnormalRequestList",components:{LongTextDialog:i["a"]},watch:{$route:{immediate:!0,handler:function(t,e){var o=this;return Object(r["a"])(Object(s["a"])().mark((function t(){return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o.type=o.$route.query.type||"statusCode5xx",t.next=3,o.loadData();case 3:case"end":return t.stop()}}),t)})))()}}},methods:{loadData:function(t){var e=this;return Object(r["a"])(Object(s["a"])().mark((function t(){var o,n;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=e.dataFilter=e.T.createListQuery(),t.next=3,e.T.callAPI("/api/v1/monitor/abnormal-requests/:type/do/list",{params:{type:e.type},query:o});case 3:if(n=t.sent,n&&n.ok){t.next=6;break}return t.abrupt("return");case 6:e.data=n.data,e.pageInfo=n.pageInfo,e.$store.commit("updateLoadStatus",!0);case 9:case"end":return t.stop()}}),t)})))()},switchType:function(t){this.$router.push({name:"abnormal-request-list",query:{type:t}})},getRespError:function(t){return t.respBody&&t.respBody.error||t.respError},getRespMessage:function(t){return t.respBody&&t.respBody.message||t.respMessage},showDetail:function(t){this.$store.commit("updateHighlightedTableDataId",t.id);var e=[];e.push("===== ".concat(this.$t("Request")," =====")),e.push("".concat(t.reqMethod.toUpperCase()," ").concat(t.reqURL)),t.reqBodyDump&&e.push(t.reqBodyDump),e.push("\n===== ".concat(this.$t("Response")," =====")),e.push("Status Code: ".concat(t.respStatusCode)),t.respBody?e.push(JSON.stringify(t.respBody,null,2)):t.respBodyDump?e.push(t.respBodyDump):e.push("<".concat(this.$t("omitted."),">"));var o=e.join("\n"),n=this.M(t.createTime).utcOffset(8).format("YYYYMMDD_HHmmss"),a="http-dump.".concat(n);this.$refs.longTextDialog.update(o,a)},refresh:function(){var t=this;return Object(r["a"])(Object(s["a"])().mark((function e(){return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.loadData();case 2:case"end":return e.stop()}}),e)})))()}},computed:{},props:{},data:function(){var t=this.T.createPageInfo();this.T.createListQuery();return{data:[],pageInfo:t,dataFilter:{},type:null}}},l=c,u=(o("b11a"),o("2877")),d=o("ff1b"),p=Object(u["a"])(l,n,a,!1,null,"72ec0890",null);"function"===typeof d["default"]&&Object(d["default"])(p);e["default"]=p.exports},e5e6:function(t,e,o){"use strict";o("0b24")},e7e4:function(t,e,o){},e89f:function(t,e,o){},ff1b:function(t,e,o){"use strict";var n=o("11fe"),a=o.n(n);e["default"]=a.a}}]);