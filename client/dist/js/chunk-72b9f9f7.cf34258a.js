(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72b9f9f7"],{"13d2e":function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"zh-CN":{"Root":"根目录","File Service disabled":"文件服务已禁用","File Service enabled":"文件服务已启用","File Service deleted":"文件服务已删除","No File Service has ever been added":"从未添加过任何文件服务","Are you sure you want to disable the File Service?":"是否确认禁用此文件服务？","Are you sure you want to delete the File Service?":"是否确认删除此文件服务？"}}'),delete e.options._Ctor}},"2ce1":function(e,t,a){},"3a6b":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e._self._c;return t("transition",{attrs:{name:"fade"}},[t("el-container",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.isLoaded,expression:"$store.state.isLoaded"}],attrs:{direction:"vertical"}},[t("el-header",{attrs:{height:"60px"}},[t("div",{staticClass:"page-header"},[t("span",[e._v(e._s(e.$t("File Service")))]),e._v(" "),t("div",{staticClass:"header-control"},[t("FuzzySearchInput",{attrs:{dataFilter:e.dataFilter}}),e._v(" "),t("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.openSetup(null,"add")}}},[t("i",{staticClass:"fa fa-fw fa-plus"}),e._v("\n            "+e._s(e.$t("New"))+"\n          ")])],1)])]),e._v(" "),t("el-main",{staticClass:"common-table-container"},[e.T.isNothing(e.data)?t("div",{staticClass:"no-data-area"},[e.T.isPageFiltered()?t("h1",{staticClass:"no-data-title"},[t("i",{staticClass:"fa fa-fw fa-search"}),e._v(e._s(e.$t("No matched data found")))]):t("h1",{staticClass:"no-data-title"},[t("i",{staticClass:"fa fa-fw fa-info-circle"}),e._v(e._s(e.$t("No File Service has ever been added")))]),e._v(" "),t("p",{staticClass:"no-data-tip"},[e._v("\n          出于安全性考虑，资源目录文件默认不对外提供\n          "),t("br"),e._v("如需从外部直接访问资源目录下文件，必须先为资源目录下的某个文件夹创建文件服务，通过文件服务接口进行访问\n        ")])]):t("el-table",{staticClass:"common-table",attrs:{height:"100%",data:e.data,"row-class-name":e.T.getHighlightRowCSS}},[t("el-table-column",{attrs:{label:e.$t("Root")},scopedSlots:e._u([{key:"default",fn:function(a){return[t("code",{staticClass:"file-service-title"},[e._v(e._s(a.row.root))]),e._v(" "),t("div",[t("span",{staticClass:"text-info"},[e._v("ID")]),e._v("\n               "),t("code",{staticClass:"text-main"},[e._v(e._s(a.row.id))]),e._v(" "),t("CopyButton",{attrs:{content:a.row.id}}),e._v(" "),a.row.note?[t("br"),e._v(" "),t("span",{staticClass:"text-info"},[e._v("　"+e._s(e.$t("Note"))+e._s(e.$t(":")))]),e._v(" "),t("span",[e._v(e._s(a.row.note))])]:e._e()],2)]}}])}),e._v(" "),t("el-table-column",{attrs:{label:e.$t("Status"),width:"120"},scopedSlots:e._u([{key:"default",fn:function(a){return[a.row.isDisabled?t("span",{staticClass:"text-bad"},[e._v(e._s(e.$t("Disabled")))]):t("span",{staticClass:"text-good"},[e._v(e._s(e.$t("Enabled")))])]}}])}),e._v(" "),t("el-table-column",{attrs:{align:"right",width:"260"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-link",{attrs:{href:a.row.openURL,target:"_blank"}},[e._v(e._s(e.$t("Open")))]),e._v(" "),a.row.isDisabled?t("el-link",{directives:[{name:"prevent-re-click",rawName:"v-prevent-re-click"}],on:{click:function(t){return e.quickSubmitData(a.row,"enable")}}},[e._v(e._s(e.$t("Enable")))]):t("el-link",{on:{click:function(t){return e.quickSubmitData(a.row,"disable")}}},[e._v(e._s(e.$t("Disable")))]),e._v(" "),t("el-link",{on:{click:function(t){return e.openSetup(a.row,"setup")}}},[e._v(e._s(e.$t("Setup")))]),e._v(" "),t("el-link",{on:{click:function(t){return e.quickSubmitData(a.row,"delete")}}},[e._v(e._s(e.$t("Delete")))])]}}])})],1)],1)],1)],1)},i=[],s=a("c7eb"),n=a("1da1"),c=(a("130f"),a("d3b7"),a("159b"),{name:"FileServiceList",components:{},watch:{$route:{immediate:!0,handler:function(e,t){var a=this;return Object(n["a"])(Object(s["a"])().mark((function e(){return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.loadData();case 2:case"end":return e.stop()}}),e)})))()}},"$store.state.isLoaded":function(e){var t=this;e&&setImmediate((function(){return t.T.autoScrollTable()}))}},methods:{loadData:function(){var e=this;return Object(n["a"])(Object(s["a"])().mark((function t(){var a,r;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.dataFilter=e.T.createListQuery(),t.next=3,e.T.callAPI_get("/api/v1/file-services/do/list",{query:a});case 3:if(r=t.sent,r&&r.ok){t.next=6;break}return t.abrupt("return");case 6:r.data.forEach((function(t){t.openURL=e.T.formatURL("/api/v1/fs/:id/",{baseURL:!0,params:{id:t.id}})})),e.data=r.data,e.$store.commit("updateLoadStatus",!0);case 9:case"end":return t.stop()}}),t)})))()},quickSubmitData:function(e,t){var a=this;return Object(n["a"])(Object(s["a"])().mark((function r(){var i;return Object(s["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:r.t0=t,r.next="disable"===r.t0?3:"delete"===r.t0?8:13;break;case 3:return r.next=5,a.T.confirm(a.$t("Are you sure you want to disable the File Service?"));case 5:if(r.sent){r.next=7;break}return r.abrupt("return");case 7:return r.abrupt("break",13);case 8:return r.next=10,a.T.confirm(a.$t("Are you sure you want to delete the File Service?"));case 10:if(r.sent){r.next=12;break}return r.abrupt("return");case 12:return r.abrupt("break",13);case 13:i=null,r.t1=t,r.next="disable"===r.t1?17:"enable"===r.t1?21:"delete"===r.t1?25:29;break;case 17:return r.next=19,a.T.callAPI("post","/api/v1/file-services/:id/do/modify",{params:{id:e.id},body:{data:{isDisabled:!0}},alert:{okMessage:a.$t("File Service disabled")}});case 19:return i=r.sent,r.abrupt("break",29);case 21:return r.next=23,a.T.callAPI("post","/api/v1/file-services/:id/do/modify",{params:{id:e.id},body:{data:{isDisabled:!1}},alert:{okMessage:a.$t("File Service enabled")}});case 23:return i=r.sent,r.abrupt("break",29);case 25:return r.next=27,a.T.callAPI("/api/v1/file-services/:id/do/delete",{params:{id:e.id},alert:{okMessage:a.$t("File Service deleted")}});case 27:return i=r.sent,r.abrupt("break",29);case 29:if(i&&i.ok){r.next=31;break}return r.abrupt("return");case 31:return a.$store.commit("updateHighlightedTableDataId",e.id),r.next=34,a.loadData();case 34:case"end":return r.stop()}}),r)})))()},openSetup:function(e,t){var a=this.T.packRouteQuery();switch(this.$store.commit("updateTableList_scrollY"),t){case"add":this.$router.push({name:"file-service-add",query:a});break;case"setup":this.$store.commit("updateHighlightedTableDataId",e.id),this.$router.push({name:"file-service-setup",params:{id:e.id},query:a});break}}},computed:{},props:{},data:function(){var e=this.T.createListQuery();return{data:[],dataFilter:{_fuzzySearch:e._fuzzySearch}}}}),o=c,l=(a("489b"),a("2877")),u=a("cc07"),d=Object(l["a"])(o,r,i,!1,null,"430a53e5",null);"function"===typeof u["default"]&&Object(u["default"])(d);t["default"]=d.exports},"489b":function(e,t,a){"use strict";a("2ce1")},cc07:function(e,t,a){"use strict";var r=a("13d2e"),i=a.n(r);t["default"]=i.a}}]);