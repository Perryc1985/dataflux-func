(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d4849d6"],{"0797":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-CN":{"Download as a text file":"作为文本文件下载"}}'),delete t.options._Ctor}},"21a6":function(t,e,a){(function(a){var n,o,r;(function(a,s){o=[],n=s,r="function"===typeof n?n.apply(e,o):n,void 0===r||(t.exports=r)})(0,(function(){"use strict";function e(t,e){return"undefined"==typeof e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function n(t,e,a){var n=new XMLHttpRequest;n.open("GET",t),n.responseType="blob",n.onload=function(){i(n.response,e,a)},n.onerror=function(){console.error("could not download file")},n.send()}function o(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function r(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(n){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var s="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof a&&a.global===a?a:void 0,c=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),i=s.saveAs||("object"!=typeof window||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(t,e,a){var c=s.URL||s.webkitURL,i=document.createElement("a");e=e||t.name||"download",i.download=e,i.rel="noopener","string"==typeof t?(i.href=t,i.origin===location.origin?r(i):o(i.href)?n(t,e,a):r(i,i.target="_blank")):(i.href=c.createObjectURL(t),setTimeout((function(){c.revokeObjectURL(i.href)}),4e4),setTimeout((function(){r(i)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,a,s){if(a=a||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(e(t,s),a);else if(o(t))n(t,a,s);else{var c=document.createElement("a");c.href=t,c.target="_blank",setTimeout((function(){r(c)}))}}:function(t,e,a,o){if(o=o||open("","_blank"),o&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof t)return n(t,e,a);var r="application/octet-stream"===t.type,i=/constructor/i.test(s.HTMLElement)||s.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||r&&i||c)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var t=u.result;t=l?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=t:location=t,o=null},u.readAsDataURL(t)}else{var d=s.URL||s.webkitURL,f=d.createObjectURL(t);o?o.location=f:location.href=f,o=null,setTimeout((function(){d.revokeObjectURL(f)}),4e4)}});s.saveAs=i.saveAs=i,t.exports=i}))}).call(this,a("c8ba"))},"3aac":function(t,e,a){},"68fc":function(t,e,a){"use strict";a("8026")},"7b0b4":function(t,e,a){"use strict";var n=a("0797"),o=a.n(n);e["default"]=o.a},8026:function(t,e,a){},a7c9:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("transition",{attrs:{name:"fade"}},[e("el-container",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.isLoaded,expression:"$store.state.isLoaded"}],attrs:{direction:"vertical"}},[e("el-header",{attrs:{height:"60px"}},[e("div",{staticClass:"common-page-header"},[e("h1",[t._v(t._s(t.$t("Func Cache Manage")))]),t._v(" "),e("div",{staticClass:"header-control"},[e("small",{staticClass:"text-info"},[t._v(t._s(t.$t("Search for more data")))]),t._v(" "),e("FuzzySearchInput",{attrs:{dataFilter:t.dataFilter}})],1)])]),t._v(" "),e("el-main",{staticClass:"common-table-container"},[t.T.isNothing(t.data)?e("div",{staticClass:"no-data-area"},[t.T.isPageFiltered()?e("h1",{staticClass:"no-data-title"},[e("i",{staticClass:"fa fa-fw fa-search"}),t._v(t._s(t.$t("No matched data found")))]):e("h1",{staticClass:"no-data-title"},[e("i",{staticClass:"fa fa-fw fa-info-circle"}),t._v(t._s(t.$t("No Func Cache data has ever been added")))]),t._v(" "),e("p",{staticClass:"no-data-tip"},[e("i18n",{attrs:{path:"Using {0} and {1} to setting and getting cache data in Script"}},[e("code",{staticClass:"code-font"},[t._v("DFF.CACHE.set('key', 'value')")]),t._v(" "),e("code",{staticClass:"code-font"},[t._v("DFF.CACHE('key')")])]),t._v(" "),e("br"),t._v(" "),e("i18n",{attrs:{path:"See {0} for more information"}},[e("el-link",{attrs:{href:"https://func.guance.com/doc/development-guide-builtin-features-dff-cache/",target:"_blank"}},[e("i",{staticClass:"fa fa-fw fa-book"}),t._v("\n              "+t._s(t.$t("Document"))+"\n            ")])],1)],1)]):e("el-table",{staticClass:"common-table",attrs:{height:"100%",data:t.data}},[e("el-table-column",{attrs:{label:t.$t("Type"),width:"120"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("code",[t._v(t._s(a.row.type.toLowerCase()))])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"Key"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("code",{staticClass:"text-main"},[t._v(t._s(a.row.key))]),t._v(" "),e("CopyButton",{attrs:{content:a.row.key}})]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"Scope"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("code",{staticClass:"text-main"},[t._v(t._s(a.row.scope))]),t._v(" "),e("CopyButton",{attrs:{content:a.row.scope}})]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"TTL",sortable:"","sort-by":"ttl",width:"180"},scopedSlots:t._u([{key:"default",fn:function(a){return[-1===a.row.ttl?e("span",{staticClass:"text-bad"},[t._v(t._s(t.$t("Never")))]):[e("code",{staticClass:"text-good"},[t._v(t._s(a.row.ttl))]),t._v(" "),e("small",{staticClass:"text-info"},[t._v(t._s(t.$t("("))+t._s(t._f("fromNow")(1e3*a.row.ttl+Date.now()))+t._s(t.$t(")")))])]]}}])}),t._v(" "),e("el-table-column",{attrs:{label:t.$t("Memory usage"),sortable:"","sort-by":"memoryUsage",align:"right",width:"150"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("code",{class:{"text-bad":a.row.isOverSized}},[t._v(t._s(a.row.memoryUsageHuman))])]}}])}),t._v(" "),e("el-table-column",{attrs:{align:"right",width:"200"},scopedSlots:t._u([{key:"default",fn:function(a){return[["string","list","hash"].indexOf(a.row.type)>=0&&!a.row.isOverSized?e("el-link",{on:{click:function(e){return t.showDetail(a.row)}}},[t._v("\n              "+t._s(t.$t("Show content"))+"\n            ")]):t._e(),t._v(" "),e("el-link",{on:{click:function(e){return t.quickSubmitData(a.row,"delete")}}},[t._v(t._s(t.$t("Delete")))])]}}])})],1)],1),t._v(" "),e("LongTextDialog",{ref:"longTextDialog",attrs:{showDownload:!0}})],1)],1)},o=[],r=a("c7eb"),s=a("1da1"),c=(a("d3b7"),a("159b"),a("99af"),a("b64b"),a("e9c4"),a("b76c")),i={name:"FuncCacheManage",components:{LongTextDialog:c["a"]},watch:{$route:{immediate:!0,handler:function(t,e){var a=this;return Object(s["a"])(Object(r["a"])().mark((function t(){return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a.loadData();case 2:case"end":return t.stop()}}),t)})))()}}},methods:{loadData:function(){var t=this;return Object(s["a"])(Object(r["a"])().mark((function e(){var a,n;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.dataFilter=t.T.createListQuery(),e.next=3,t.T.callAPI_get("/api/v1/func-caches/do/list",{query:a});case 3:if(n=e.sent,n&&n.ok){e.next=6;break}return e.abrupt("return");case 6:t.data=n.data,t.data.forEach((function(e){e.memoryUsage&&(e.memoryUsageHuman=t.T.byteSizeHuman(e.memoryUsage),e.isOverSized=e.memoryUsage>102400)})),t.$store.commit("updateLoadStatus",!0);case 9:case"end":return e.stop()}}),e)})))()},quickSubmitData:function(t,e){var a=this;return Object(s["a"])(Object(r["a"])().mark((function n(){var o,s;return Object(r["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:o='<small>\n          <br>Key: <code class="text-main">'.concat(t.key,'</code>\n          <br>Scope: <code class="text-main">').concat(t.scope,"</code>\n        <small>"),n.t0=e,n.next="delete"===n.t0?4:9;break;case 4:return n.next=6,a.T.confirm(a.$t("Are you sure you want to delete the Func Cache data?")+o);case 6:if(n.sent){n.next=8;break}return n.abrupt("return");case 8:return n.abrupt("break",9);case 9:s=null,n.t1=e,n.next="delete"===n.t1?13:17;break;case 13:return n.next=15,a.T.callAPI("/api/v1/func-caches/:scope/:key/do/delete",{params:{scope:t.scope,key:t.key},alert:{okMessage:a.$t("Func Cache data deleted")}});case 15:return s=n.sent,n.abrupt("break",17);case 17:if(s&&s.ok){n.next=19;break}return n.abrupt("return");case 19:return n.next=21,a.loadData();case 21:case"end":return n.stop()}}),n)})))()},showDetail:function(t){var e=this;return Object(s["a"])(Object(r["a"])().mark((function a(){var n,o,s,c;return Object(r["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.T.callAPI_get("/api/v1/func-caches/:scope/:key/do/get",{params:{scope:t.scope,key:t.key}});case 2:if(n=a.sent,n.ok){a.next=5;break}return a.abrupt("return");case 5:o=n.data;try{"string"===typeof o&&(o=JSON.parse(o)),o=JSON.stringify(o,null,2)}catch(r){}s=e.M(t.createTime).format("YYYYMMDD_HHmmss"),c="".concat(t.scope,".").concat(t.key,".").concat(s),e.$refs.longTextDialog.update(o,c);case 10:case"end":return a.stop()}}),a)})))()}},computed:{},props:{},data:function(){var t=this.T.createListQuery();return{data:[],dataFilter:{_fuzzySearch:t._fuzzySearch}}}},l=i,u=a("2877"),d=a("fc26"),f=Object(u["a"])(l,n,o,!1,null,"7b4e7b1b",null);"function"===typeof d["default"]&&Object(d["default"])(f);e["default"]=f.exports},acd7:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-CN":{"Type":"类型","Never":"永不过期","Memory usage":"内存使用","Show content":"显示内容","Func Cache data deleted":"函数缓存数据已删除","Search for more data":"搜索以查看更多内容","No Func Cache data has ever been added":"从未添加过任何函数缓存数据","Are you sure you want to delete the Func Cache data?":"是否确认删除此函数缓存数据？","Using {0} and {1} to setting and getting cache data in Script":"可以使用 {0} 和 {1} 在脚本中存取缓存数据","See {0} for more information":"查看 {0} 来获取更多信息"}}'),delete t.options._Ctor}},b76c:function(t,e,a){"use strict";var n=function(){var t=this,e=t._self._c;return e("el-dialog",{attrs:{id:"LongTextDialog",visible:t.show,"close-on-click-modal":!1,width:"70%"},on:{"update:visible":function(e){t.show=e}}},[e("template",{slot:"title"},[t._v("\n    "+t._s(t.title)+"\n    "),e("span",{staticClass:"text-info press-esc-to-close-tip"},[t._v(t._s(t.$t("Press ESC to close")))])]),t._v(" "),e("div",[t.showDownload&&t.fileName&&t.content?e("div",{staticClass:"download-link"},[e("el-link",{attrs:{type:"primary"},on:{click:t.download}},[t._v("\n        "+t._s(t.$t("Download as a text file"))+"\n        "),e("i",{staticClass:"fa fa-fw fa-download"})])],1):t._e(),t._v(" "),e("textarea",{attrs:{id:"longTextDialogContent"}})])],2)},o=[],r=(a("130f"),a("21a6")),s=a.n(r),c={name:"LongTextDialog",components:{},watch:{},methods:{update:function(t,e){var a=this;this.codeMirror&&this.codeMirror.setValue(""),this.content=t,this.fileName=(e||"dump")+".txt",this.show=!0,setImmediate((function(){if(!a.codeMirror){var t={mode:a.mode||"text"};a.codeMirror=a.T.initCodeMirror("longTextDialogContent",t),a.codeMirror.setOption("theme",a.T.getCodeMirrorThemeName()),a.T.setCodeMirrorReadOnly(a.codeMirror,!0)}a.codeMirror.setValue(a.content||""),a.codeMirror.refresh(),a.codeMirror.focus()}))},download:function(){var t=new Blob([this.content],{type:"text/plain"}),e=this.fileName;s.a.saveAs(t,e)}},computed:{},props:{title:String,mode:String,showDownload:Boolean},data:function(){return{show:!1,fileName:null,content:null,codeMirror:null}},beforeDestroy:function(){this.T.destoryCodeMirror(this.codeMirror)}},i=c,l=(a("68fc"),a("cb4e"),a("2877")),u=a("7b0b4"),d=Object(l["a"])(i,n,o,!1,null,"7f557796",null);"function"===typeof u["default"]&&Object(u["default"])(d);e["a"]=d.exports},cb4e:function(t,e,a){"use strict";a("3aac")},fc26:function(t,e,a){"use strict";var n=a("acd7"),o=a.n(n);e["default"]=o.a}}]);