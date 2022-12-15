(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-088827da"],{3286:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-CN":{"User disabled":"用户已禁用","User enabled":"用户已启用","No User has ever been added":"从未添加过任何用户","Are you sure you want to disable the User?":"是否确认禁用此用户？"}}'),delete t.options._Ctor}},ac7d:function(t,e,a){"use strict";var s=a("3286"),r=a.n(s);e["default"]=r.a},fbd0:function(t,e,a){"use strict";a.r(e);a("b0c0");var s=function(){var t=this,e=t._self._c;return e("transition",{attrs:{name:"fade"}},[e("el-container",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.isLoaded,expression:"$store.state.isLoaded"}],attrs:{direction:"vertical"}},[e("el-header",{attrs:{height:"60px"}},[e("div",{staticClass:"page-header"},[e("span",[t._v(t._s(t.$t("User Manager")))]),t._v(" "),e("div",{staticClass:"header-control"},[e("FuzzySearchInput",{attrs:{dataFilter:t.dataFilter}}),t._v(" "),e("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.openSetup(null,"add")}}},[e("i",{staticClass:"fa fa-fw fa-plus"}),t._v("\n            "+t._s(t.$t("New"))+"\n          ")])],1)])]),t._v(" "),e("el-main",{staticClass:"common-table-container"},[t.T.isNothing(t.data)?e("div",{staticClass:"no-data-area"},[t.T.isPageFiltered()?e("h1",{staticClass:"no-data-title"},[e("i",{staticClass:"fa fa-fw fa-search"}),t._v(t._s(t.$t("No matched data found")))]):e("h1",{staticClass:"no-data-title"},[e("i",{staticClass:"fa fa-fw fa-info-circle"}),t._v(t._s(t.$t("No User has ever been added")))]),t._v(" "),e("p",{staticClass:"no-data-tip"},[t._v("\n          添加成员，允许其他用户使用本平台\n        ")])]):t._e(),t._v(" "),e("el-table",{staticClass:"common-table",attrs:{height:"100%",data:t.data,"row-class-name":t.T.getHighlightRowCSS}},[e("el-table-column",{attrs:{label:t.$t("Username"),width:"300"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("code",{staticClass:"text-main"},[t._v(t._s(a.row.username))]),t._v(" "),e("CopyButton",{attrs:{content:a.row.username}})]}}])}),t._v(" "),e("el-table-column",{attrs:{label:t.$t("Name"),width:"300"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.name))])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:t.$t("Email"),width:"300"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.email))])]}}])}),t._v(" "),e("el-table-column"),t._v(" "),e("el-table-column",{attrs:{label:t.$t("Status"),width:"100"},scopedSlots:t._u([{key:"default",fn:function(a){return[a.row.isDisabled?e("span",{staticClass:"text-bad"},[t._v(t._s(t.$t("Disabled")))]):e("span",{staticClass:"text-good"},[t._v(t._s(t.$t("Enabled")))])]}}])}),t._v(" "),e("el-table-column",{attrs:{align:"right",width:"200"},scopedSlots:t._u([{key:"default",fn:function(a){return[Array.isArray(a.row.roles)&&a.row.roles.indexOf("sa")>=0?e("span",{staticClass:"text-bad"},[t._v(t._s(t.$t("Administrator")))]):[a.row.isDisabled?e("el-link",{on:{click:function(e){return t.quickSubmitData(a.row,"enable")}}},[t._v(t._s(t.$t("Enable")))]):e("el-link",{on:{click:function(e){return t.quickSubmitData(a.row,"disable")}}},[t._v(t._s(t.$t("Disable")))]),t._v(" "),e("el-link",{on:{click:function(e){return t.openSetup(a.row,"setup")}}},[t._v(t._s(t.$t("Setup")))])]]}}])})],1)],1),t._v(" "),e("Pager",{attrs:{pageInfo:t.pageInfo}})],1)],1)},r=[],n=a("c7eb"),i=a("1da1"),o=(a("130f"),{name:"UserList",components:{},watch:{$route:{immediate:!0,handler:function(t,e){var a=this;return Object(i["a"])(Object(n["a"])().mark((function t(){return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a.loadData();case 2:case"end":return t.stop()}}),t)})))()}},"$store.state.isLoaded":function(t){var e=this;t&&setImmediate((function(){return e.T.autoScrollTable()}))}},methods:{loadData:function(){var t=this;return Object(i["a"])(Object(n["a"])().mark((function e(){var a,s;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.dataFilter=t.T.createListQuery({sort:["seq"]}),e.next=3,t.T.callAPI_get("/api/v1/users/do/list",{query:a});case 3:if(s=e.sent,s&&s.ok){e.next=6;break}return e.abrupt("return");case 6:t.data=s.data,t.pageInfo=s.pageInfo,t.$store.commit("updateLoadStatus",!0);case 9:case"end":return e.stop()}}),e)})))()},quickSubmitData:function(t,e){var a=this;return Object(i["a"])(Object(n["a"])().mark((function s(){var r;return Object(n["a"])().wrap((function(s){while(1)switch(s.prev=s.next){case 0:s.t0=e,s.next="disable"===s.t0?3:8;break;case 3:return s.next=5,a.T.confirm(a.$t("Are you sure you want to disable the User?"));case 5:if(s.sent){s.next=7;break}return s.abrupt("return");case 7:return s.abrupt("break",8);case 8:r=null,s.t1=e,s.next="disable"===s.t1?12:"enable"===s.t1?16:20;break;case 12:return s.next=14,a.T.callAPI("post","/api/v1/users/:id/do/modify",{params:{id:t.id},body:{data:{isDisabled:!0}},alert:{okMessage:a.$t("User disabled")}});case 14:return r=s.sent,s.abrupt("break",20);case 16:return s.next=18,a.T.callAPI("post","/api/v1/users/:id/do/modify",{params:{id:t.id},body:{data:{isDisabled:!1}},alert:{okMessage:a.$t("User enabled")}});case 18:return r=s.sent,s.abrupt("break",20);case 20:if(r&&r.ok){s.next=22;break}return s.abrupt("return");case 22:return a.$store.commit("updateHighlightedTableDataId",t.id),s.next=25,a.loadData();case 25:case"end":return s.stop()}}),s)})))()},openSetup:function(t,e){var a=this.T.packRouteQuery();switch(e){case"add":this.$router.push({name:"user-add",query:a});break;case"setup":this.$store.commit("updateHighlightedTableDataId",t.id),this.$router.push({name:"user-setup",params:{id:t.id},query:a});break}}},computed:{},props:{},data:function(){var t=this.T.createPageInfo(),e=this.T.createListQuery();return{data:[],pageInfo:t,dataFilter:{_fuzzySearch:e._fuzzySearch}}}}),u=o,c=a("2877"),l=a("ac7d"),d=Object(c["a"])(u,s,r,!1,null,"6feecd52",null);"function"===typeof l["default"]&&Object(l["default"])(d);e["default"]=d.exports}}]);