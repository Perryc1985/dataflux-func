(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fb5ee180"],{"29c8":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[t.$store.state.isLoaded?n("el-container",{attrs:{direction:"vertical"}},[n("el-header",{attrs:{height:"60px"}},[n("h1",[t._v("\n        "+t._s(t.$t("API Auth"))+"\n        "),n("div",{staticClass:"header-control"},[n("FuzzySearchInput",{attrs:{dataFilter:t.dataFilter,searchTip:t.$t("Search API Auth(ID, note), Func(ID, kwargs, title, description, tags)")}}),t._v(" "),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.openSetup(null,"add")}}},[n("i",{staticClass:"fa fa-fw fa-plus"}),t._v("\n            "+t._s(t.$t("New"))+"\n          ")])],1)])]),t._v(" "),n("el-main",{staticClass:"common-table-container"},[t.T.isNothing(t.data)?n("div",{staticClass:"no-data-area"},[t.T.isPageFiltered()?n("h1",{staticClass:"no-data-title"},[t._v(t._s(t.$t("No matched data found")))]):n("h1",{staticClass:"no-data-title"},[t._v(t._s(t.$t("No API Auth has ever been added")))]),t._v(" "),n("p",{staticClass:"no-data-tip"},[t._v("\n          授权链接、批处理的API在默认情况下不需要认证即可访问\n          "),n("br"),t._v("如需要增强安全性，可以创建API认证后，为授权链接、批处理选择所需的API认证\n        ")])]):n("el-table",{staticClass:"common-table",attrs:{height:"100%",data:t.data,"row-class-name":t.highlightRow}},[n("el-table-column",{attrs:{label:t.$t("Auth Type")},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(t.C.API_AUTH_MAP.get(e.row.type).name)+"\n          ")]}}],null,!1,876640692)}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("Name")},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(e.row.name)+"\n          ")]}}],null,!1,1969434650)}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("Config")},scopedSlots:t._u([{key:"default",fn:function(e){return["fixedField"===e.row.type?n("span",[t.T.isNothing(e.row.configJSON.fixedFields)?n("span",{staticClass:"text-bad"},[t._v("\n                "+t._s(t.$t("No config"))+"\n              ")]):n("span",[t._v("\n                "+t._s(t.C.API_AUTH_FIXED_FIELD_LOCATION_MAP.get(e.row.configJSON.fixedFields[0].location).name)+"\n                "),n("code",{staticClass:"text-code"},[t._v(t._s(e.row.configJSON.fixedFields[0].name))]),t._v(" "),e.row.configJSON.fixedFields.length>1?n("span",[n("br"),t._v("　\n                  "+t._s(t.$tc("andMoreConfigs",e.row.configJSON.fixedFields.length-1))+"\n                ")]):t._e()])]):"httpBasic"===e.row.type||"httpDigest"===e.row.type?n("span",[t.T.isNothing(e.row.configJSON.httpAuth)?n("span",{staticClass:"text-bad"},[t._v("\n                "+t._s(t.$t("No config"))+"\n              ")]):n("span",[n("code",{staticClass:"text-code"},[t._v("\n                  "+t._s(e.row.configJSON.httpAuth[0].username)+"\n                ")]),t._v(" "),e.row.configJSON.httpAuth.length>1?n("span",[n("br"),t._v("　\n                  "+t._s(t.$tc("andMoreUsers",e.row.configJSON.httpAuth.length-1))+"\n                ")]):t._e()])]):"func"===e.row.type?n("FuncInfo",{attrs:{id:e.row.func_id,title:e.row.func_title,name:e.row.func_name}}):t._e()]}}],null,!1,1903689157)}),t._v(" "),n("el-table-column",{attrs:{align:"right",width:"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{disabled:"func"===e.row.type&&t.T.isNothing(e.row.func_id),type:"text"},on:{click:function(n){return t.openSetup(e.row,"setup")}}},[t._v(t._s(t.$t("Setup")))]),t._v(" "),n("el-button",{attrs:{type:"text"},on:{click:function(n){return t.quickSubmitData(e.row,"delete")}}},[t._v(t._s(t.$t("Delete")))])]}}],null,!1,3608315151)})],1)],1),t._v(" "),n("Pager",{attrs:{pageInfo:t.pageInfo}})],1):t._e()],1)},r=[],o=n("a6db"),s=(n("8d65"),n("672e"),{name:"APIAuthList",components:{},watch:{$route:{immediate:!0,handler:function(t,e){var n=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.loadData();case 2:case"end":return t.stop()}}),t)})))()}},"$store.state.isLoaded":function(t){var e=this;t&&setImmediate((function(){e.T.autoScrollTable(e.$store.state.APIAuthList_scrollY)}))}},methods:{highlightRow:function(t){var e=t.row;t.rowIndex;return this.$store.state.highlightedTableDataId===e.id?"hl-row":""},loadData:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.T.callAPI_get("/api/v1/api-auth/do/list",{query:t.T.createListQuery()});case 2:if(n=e.sent,n.ok){e.next=5;break}return e.abrupt("return");case 5:t.data=n.data,t.pageInfo=n.pageInfo,t.$store.commit("updateLoadStatus",!0);case 8:case"end":return e.stop()}}),e)})))()},quickSubmitData:function(t,e){var n=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:a.t0=e,a.next="delete"===a.t0?3:8;break;case 3:return a.next=5,n.T.confirm(n.$t("Are you sure you want to delete the API Auth?"));case 5:if(a.sent){a.next=7;break}return a.abrupt("return");case 7:return a.abrupt("break",8);case 8:r=null,a.t1=e,a.next="delete"===a.t1?12:16;break;case 12:return a.next=14,n.T.callAPI("/api/v1/api-auth/:id/do/delete",{params:{id:t.id},alert:{okMessage:n.$t("API Auth deleted")}});case 14:return r=a.sent,a.abrupt("break",16);case 16:if(r&&r.ok){a.next=18;break}return a.abrupt("return");case 18:return n.$store.commit("updateHighlightedTableDataId",t.id),a.next=21,n.loadData();case 21:case"end":return a.stop()}}),a)})))()},openSetup:function(t,e){var n=this.T.packRouteQuery();switch(this.$store.commit("updateAPIAuthList_scrollY",this.T.getTableScrollY()),e){case"add":this.$router.push({name:"api-auth-add",query:n});break;case"setup":this.$store.commit("updateHighlightedTableDataId",t.id),this.$router.push({name:"api-auth-setup",params:{id:t.id},query:n});break}}},computed:{},props:{},data:function(){var t=this.T.createPageInfo(),e=this.T.createListQuery();return{data:[],pageInfo:t,dataFilter:{_fuzzySearch:e._fuzzySearch}}}}),i=s,u=n("0620"),c=n("dd91"),l=n("809f"),d=Object(u["a"])(i,a,r,!1,null,"6ea2c9c1",null);"function"===typeof c["default"]&&Object(c["default"])(d),"function"===typeof l["default"]&&Object(l["default"])(d);e["default"]=d.exports},"67c1":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-CN":{"Auth Type":"认证类型","Config":"配置","No config":"未配置","andMoreConfigs":"以及其他 {n} 项目配置","andMoreUsers":"以及其他 {n} 个用户","API Auth deleted":"API认证已删除","Search API Auth(ID, note), Func(ID, kwargs, title, description, tags)":"搜索API认证（ID、备注），函数（ID、参数、标题、描述、标签）","No API Auth has ever been added":"从未添加过任何API认证","Are you sure you want to delete the API Auth?":"是否确认删除此API认证？"}}'),delete t.options._Ctor}},"809f":function(t,e,n){"use strict";var a=n("67c1"),r=n.n(a);e["default"]=r.a},a5fb:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"andMoreConfigs":"and {n} more config | and {n} more configs","andMoreUsers":"and {n} more user | and {n} more users"}}'),delete t.options._Ctor}},dd91:function(t,e,n){"use strict";var a=n("a5fb"),r=n.n(a);e["default"]=r.a}}]);