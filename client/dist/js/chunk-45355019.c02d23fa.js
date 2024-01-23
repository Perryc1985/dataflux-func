(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45355019","chunk-4696ea54"],{"0a8f":function(e,t,a){"use strict";var s=a("168a"),n=a.n(s);t["default"]=n.a},"12fb":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("transition",{attrs:{name:"fade"}},[t("el-container",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.isLoaded,expression:"$store.state.isLoaded"}],attrs:{direction:"vertical"}},[t("el-header",{attrs:{height:"60px"}},[t("div",{staticClass:"common-page-header"},[t("h1",[e._v("Access Key")]),e._v(" "),t("div",{staticClass:"header-control"},[t("FuzzySearchInput",{attrs:{dataFilter:e.dataFilter}}),e._v(" "),t("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.openSetup(null,"add")}}},[t("i",{staticClass:"fa fa-fw fa-plus"}),e._v("\n            "+e._s(e.$t("New"))+"\n          ")])],1)])]),e._v(" "),t("el-main",{staticClass:"common-table-container"},[e.T.isNothing(e.data)?t("div",{staticClass:"no-data-area"},[e.T.isPageFiltered()?t("h1",{staticClass:"no-data-title"},[t("i",{staticClass:"fa fa-fw fa-search"}),e._v(e._s(e.$t("No matched data found")))]):t("h1",{staticClass:"no-data-title"},[t("i",{staticClass:"fa fa-fw fa-info-circle"}),e._v(e._s(e.$t("No Access Key has ever been added")))]),e._v(" "),t("p",{staticClass:"no-data-tip"},[e._v("\n          "+e._s(e.$t("Add Access Key to allow external systems to call the Open APIs of this system"))+"\n        ")])]):t("el-table",{staticClass:"common-table",attrs:{height:"100%",data:e.data,"row-class-name":e.T.getHighlightRowCSS}},[t("el-table-column",{attrs:{label:e.$t("Title")},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.title))])]}}])}),e._v(" "),t("el-table-column",{attrs:{label:"Access Key ID",width:"220"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("code",{staticClass:"text-main text-small"},[e._v(e._s(a.row.id))]),e._v(" "),t("CopyButton",{attrs:{content:a.row.id}})]}}])}),e._v(" "),t("el-table-column",{attrs:{label:"Access Key Secret",width:"350"},scopedSlots:e._u([{key:"default",fn:function(a){return[e.showSecretMap[a.row.id]?[t("code",{staticClass:"text-main text-small"},[e._v(e._s(a.row.secret))]),e._v(" "),t("CopyButton",{attrs:{content:a.row.secret}})]:[t("el-link",{attrs:{type:"primary"},on:{click:function(t){return e.showSecret(a.row)}}},[e._v(e._s(e.$t("Show")))])]]}}])}),e._v(" "),t("el-table-column",{attrs:{label:e.$t("Create Time"),width:"200"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(e._f("datetime")(a.row.createTime)))]),e._v(" "),t("br"),e._v(" "),t("span",{staticClass:"text-info"},[e._v(e._s(e._f("fromNow")(a.row.createTime)))])]}}])}),e._v(" "),t("el-table-column",{attrs:{align:"right",width:"200"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-link",{on:{click:function(t){return e.quickSubmitData(a.row,"delete")}}},[e._v(e._s(e.$t("Delete")))])]}}])})],1)],1),e._v(" "),t("Pager",{attrs:{pageInfo:e.pageInfo}}),e._v(" "),t("AccessKeySetup",{ref:"setup"})],1)],1)},n=[],c=a("c7eb"),r=a("1da1"),o=a("24fd"),i={name:"AccessKeyList",components:{AccessKeySetup:o["default"]},watch:{$route:{immediate:!0,handler:function(e,t){var a=this;return Object(r["a"])(Object(c["a"])().mark((function e(){return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.loadData();case 2:case"end":return e.stop()}}),e)})))()}}},methods:{loadData:function(){var e=this;return Object(r["a"])(Object(c["a"])().mark((function t(){var a,s;return Object(c["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.dataFilter=e.T.createListQuery({fields:["id","userId","title","secret","createTime"],sort:["-seq"]}),t.next=3,e.T.callAPI_get("/api/v1/access-keys/do/list",{query:a});case 3:if(s=t.sent,s&&s.ok){t.next=6;break}return t.abrupt("return");case 6:e.data=s.data,e.pageInfo=s.pageInfo,e.$store.commit("updateLoadStatus",!0);case 9:case"end":return t.stop()}}),t)})))()},quickSubmitData:function(e,t){var a=this;return Object(r["a"])(Object(c["a"])().mark((function s(){var n;return Object(c["a"])().wrap((function(s){while(1)switch(s.prev=s.next){case 0:s.t0=t,s.next="delete"===s.t0?3:8;break;case 3:return s.next=5,a.T.confirm(a.$t("Are you sure you want to delete the Access Key?"));case 5:if(s.sent){s.next=7;break}return s.abrupt("return");case 7:return s.abrupt("break",8);case 8:n=null,s.t1=t,s.next="delete"===s.t1?12:16;break;case 12:return s.next=14,a.T.callAPI("/api/v1/access-keys/:id/do/delete",{params:{id:e.id},alert:{okMessage:a.$t("Access Key deleted")}});case 14:return n=s.sent,s.abrupt("break",16);case 16:if(n&&n.ok){s.next=18;break}return s.abrupt("return");case 18:return a.$store.commit("updateHighlightedTableDataId",e.id),s.next=21,a.loadData();case 21:case"end":return s.stop()}}),s)})))()},openSetup:function(e,t){switch(t){case"add":this.$refs.setup.loadData();break}},showSecret:function(e){this.$set(this.showSecretMap,e.id,!0)}},computed:{},props:{},data:function(){var e=this.T.createPageInfo(),t=this.T.createListQuery();return{data:[],pageInfo:e,dataFilter:{_fuzzySearch:t._fuzzySearch},showSecretMap:{}}},created:function(){var e=this;this.$root.$on("reload.accessKeyList",(function(){return e.loadData()}))},destroyed:function(){this.$root.$off("reload.accessKeyList")}},l=i,u=a("2877"),d=a("e692"),f=a("a0ef"),p=a("e3d0"),h=Object(u["a"])(l,s,n,!1,null,"1a4c4970",null);"function"===typeof d["default"]&&Object(d["default"])(h),"function"===typeof f["default"]&&Object(f["default"])(h),"function"===typeof p["default"]&&Object(p["default"])(h);t["default"]=h.exports},"168a":function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"zh-HK":{"Access Key created":"Access Key 已創建","Add Access Key":"添加 Access Key","Auto generate...":"自動生成...","Please input title":"請輸入標題"}}'),delete e.options._Ctor}},"24fd":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("el-dialog",{attrs:{id:"ScriptSetSetup",visible:e.show,"close-on-click-modal":!1,"close-on-press-escape":!1,width:"750px"},on:{"update:visible":function(t){e.show=t}}},[t("template",{slot:"title"},[e._v("\n    "+e._s(e.$t("Add Access Key"))+"\n  ")]),e._v(" "),t("el-container",{attrs:{direction:"vertical"}},[t("el-main",[t("div",{staticClass:"setup-form"},[t("el-form",{ref:"form",attrs:{"label-width":"135px",model:e.form,rules:e.formRules}},[t("el-form-item",{attrs:{label:e.$t("Title"),prop:"title"}},[t("el-input",{attrs:{maxlength:"200"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"ID"}},[t("el-input",{attrs:{value:e.$t("Auto generate..."),disabled:!0}})],1),e._v(" "),t("el-form-item",{attrs:{label:"Secret"}},[t("el-input",{attrs:{value:e.$t("Auto generate..."),disabled:!0}})],1),e._v(" "),t("el-form-item",{staticClass:"setup-footer"},[t("el-button",{directives:[{name:"prevent-re-click",rawName:"v-prevent-re-click"}],attrs:{type:"primary"},on:{click:e.submitData}},[e._v(e._s(e.$t("Save")))])],1)],1)],1)])],1)],2)},n=[],c=a("c7eb"),r=a("1da1"),o={name:"AccessKeySetup",components:{},watch:{show:function(e){e||this.$root.$emit("reload.accessKeyList")}},methods:{loadData:function(){var e=this;return Object(r["a"])(Object(c["a"])().mark((function t(){return Object(c["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.T.jsonClear(e.form),e.data={},e.show=!0;case 3:case"end":return t.stop()}}),t)})))()},submitData:function(){var e=this;return Object(r["a"])(Object(c["a"])().mark((function t(){return Object(c["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$refs.form.validate();case 3:t.next=8;break;case 5:return t.prev=5,t.t0=t["catch"](0),t.abrupt("return",console.error(t.t0));case 8:return t.next=10,e.addData();case 10:return t.abrupt("return",t.sent);case 11:case"end":return t.stop()}}),t,null,[[0,5]])})))()},addData:function(){var e=this;return Object(r["a"])(Object(c["a"])().mark((function t(){var a;return Object(c["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.T.callAPI("post","/api/v1/access-keys/do/add",{body:{data:e.T.jsonCopy(e.form)},alert:{okMessage:e.$t("Access Key created")}});case 2:if(a=t.sent,a&&a.ok){t.next=5;break}return t.abrupt("return");case 5:e.$store.commit("updateHighlightedTableDataId",a.data.id),e.show=!1;case 7:case"end":return t.stop()}}),t)})))()}},data:function(){return{show:!1,data:{},form:{title:null},formRules:{title:[{trigger:"blur",message:this.$t("Please input title"),required:!0}]}}}},i=o,l=a("2877"),u=a("a256"),d=a("0a8f"),f=a("a17f"),p=Object(l["a"])(i,s,n,!1,null,"a32a989c",null);"function"===typeof u["default"]&&Object(u["default"])(p),"function"===typeof d["default"]&&Object(d["default"])(p),"function"===typeof f["default"]&&Object(f["default"])(p);t["default"]=p.exports},"404a":function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"zh-CN":{"Add Access Key":"添加 Access Key","Auto generate...":"自动生成...","Please input title":"请输入标题","Access Key created":"Access Key 已创建"}}'),delete e.options._Ctor}},"68fc":function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"zh-CN":{"Access Key deleted":"Access Key 已删除","No Access Key has ever been added":"从未添加过任何授权链接","Are you sure you want to delete the Access Key?":"是否确认删除此 Access Key？","Add Access Key to allow external systems to call the Open APIs of this system":"添加 Access Key，允许外部系统调用本系统的 Open API"}}'),delete e.options._Ctor}},"871c":function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"zh-TW":{"Access Key created":"Access Key 已建立","Add Access Key":"新增 Access Key","Auto generate...":"自動生成...","Please input title":"請輸入標題"}}'),delete e.options._Ctor}},a0ef:function(e,t,a){"use strict";var s=a("d77d"),n=a.n(s);t["default"]=n.a},a17f:function(e,t,a){"use strict";var s=a("871c"),n=a.n(s);t["default"]=n.a},a256:function(e,t,a){"use strict";var s=a("404a"),n=a.n(s);t["default"]=n.a},cadd:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"zh-TW":{"Access Key deleted":"Access Key 已刪除","Add Access Key to allow external systems to call the Open APIs of this system":"新增 Access Key，允許外部系統呼叫本系統的 Open API","Are you sure you want to delete the Access Key?":"是否確認刪除此 Access Key？","No Access Key has ever been added":"從未新增過任何授權連結"}}'),delete e.options._Ctor}},d77d:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"zh-HK":{"Access Key deleted":"Access Key 已刪除","Add Access Key to allow external systems to call the Open APIs of this system":"添加 Access Key，允許外部系統調用本系統的 Open API","Are you sure you want to delete the Access Key?":"是否確認刪除此 Access Key？","No Access Key has ever been added":"從未添加過任何授權鏈接"}}'),delete e.options._Ctor}},e3d0:function(e,t,a){"use strict";var s=a("cadd"),n=a.n(s);t["default"]=n.a},e692:function(e,t,a){"use strict";var s=a("68fc"),n=a.n(s);t["default"]=n.a}}]);