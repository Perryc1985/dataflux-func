(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a490fa3"],{"01f8":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[a("el-container",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.isLoaded,expression:"$store.state.isLoaded"}],attrs:{direction:"vertical"}},[a("el-header",{attrs:{height:"60px"}},[a("h1",[t._v(t._s(t.$t("System Config")))])]),t._v(" "),a("el-main",[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:15}},[a("div",{staticClass:"common-form"},[a("el-form",{ref:"form",attrs:{"label-width":"120px",model:t.form}},[a("el-divider",{attrs:{"content-position":"left"}},[a("h1",[t._v(t._s(t.$t("Notice Bar")))])]),t._v(" "),a("el-form-item",[a("InfoBlock",{attrs:{title:"启用并配置文案后，会在整个DataFlux Func UI界面顶部展示固定的提示栏"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("Enable"),prop:"NOTICE_BAR_ENABLED"}},[a("el-select",{class:t.enableClass(t.form["NOTICE_BAR_ENABLED"]),model:{value:t.form["NOTICE_BAR_ENABLED"],callback:function(e){t.$set(t.form,"NOTICE_BAR_ENABLED",e)},expression:"form['NOTICE_BAR_ENABLED']"}},[a("el-option",{key:"true",attrs:{label:t.$t("Enabled"),value:!0}}),t._v(" "),a("el-option",{key:"false",attrs:{label:t.$t("Disabled"),value:!1}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("Text"),prop:"NOTICE_BAR_TEXT"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:2}},model:{value:t.form["NOTICE_BAR_TEXT"],callback:function(e){t.$set(t.form,"NOTICE_BAR_TEXT",e)},expression:"form['NOTICE_BAR_TEXT']"}})],1),t._v(" "),a("el-divider",{attrs:{"content-position":"left"}},[a("h1",[t._v(t._s(t.$t("Monitor Data Upload")))])]),t._v(" "),a("el-form-item",[a("InfoBlock",{attrs:{title:"启用并配置上报地址（DataWay 或 DataKit）后，会将任务执行信息上报"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("Enable"),prop:"MONITOR_DATA_UPLOAD_ENABLED"}},[a("el-select",{class:t.enableClass(t.form["NOTICE_BAR_ENABLED"]),model:{value:t.form["MONITOR_DATA_UPLOAD_ENABLED"],callback:function(e){t.$set(t.form,"MONITOR_DATA_UPLOAD_ENABLED",e)},expression:"form['MONITOR_DATA_UPLOAD_ENABLED']"}},[a("el-option",{key:"true",attrs:{label:t.$t("Enabled"),value:!0}}),t._v(" "),a("el-option",{key:"false",attrs:{label:t.$t("Disabled"),value:!1}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("URL"),prop:"MONITOR_DATA_UPLOAD_URL"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:2}},model:{value:t.form["MONITOR_DATA_UPLOAD_URL"],callback:function(e){t.$set(t.form,"MONITOR_DATA_UPLOAD_URL",e)},expression:"form['MONITOR_DATA_UPLOAD_URL']"}})],1),t._v(" "),a("el-form-item",[a("div",{staticClass:"setup-right"},[a("el-button",{directives:[{name:"prevent-re-click",rawName:"v-prevent-re-click"}],attrs:{type:"primary"},on:{click:t.submitData}},[t._v(t._s(t.$t("Save")))])],1)])],1)],1)]),t._v(" "),a("el-col",{staticClass:"hidden-md-and-down",attrs:{span:9}})],1)],1)],1)],1)},n=[],s=a("c7eb"),o=a("1da1"),l=(a("d3b7"),a("159b"),a("ddb0"),{name:"SystemConfig",components:{},watch:{$route:{immediate:!0,handler:function(t,e){var a=this;return Object(o["a"])(Object(s["a"])().mark((function t(){return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a.loadData();case 2:case"end":return t.stop()}}),t)})))()}}},methods:{loadData:function(){var t=this;return Object(o["a"])(Object(s["a"])().mark((function e(){var a,r;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.T.callAPI_get("/api/v1/system-configs/do/list");case 2:if(a=e.sent,a.ok){e.next=5;break}return e.abrupt("return");case 5:t.data=a.data,r=t.T.jsonCopy(t.$store.getters.CONFIG("VARIABLE_CONFIG")),t.data.forEach((function(e){r[e.id]=t.T.isNothing(e.value)?null:e.value})),t.form=r,t.$store.commit("updateLoadStatus",!0);case 10:case"end":return e.stop()}}),e)})))()},submitData:function(){var t=this;return Object(o["a"])(Object(s["a"])().mark((function e(){return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$refs.form.validate();case 3:e.next=8;break;case 5:return e.prev=5,e.t0=e["catch"](0),e.abrupt("return",console.error(e.t0));case 8:return e.next=10,t.setData();case 10:return e.abrupt("return",e.sent);case 11:case"end":return e.stop()}}),e,null,[[0,5]])})))()},setData:function(){var t=this;return Object(o["a"])(Object(s["a"])().mark((function e(){var a,r,n,o;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=null,e.t0=Object(s["a"])().keys(t.form);case 2:if((e.t1=e.t0()).done){e.next=13;break}return r=e.t1.value,n=t.form[r],o=t.T.isNothing(n)?null:n,e.next=8,t.T.callAPI("post","/api/v1/system-configs/:id/do/set",{params:{id:r},body:{data:{value:o}}});case 8:if(a=e.sent,a.ok){e.next=11;break}return e.abrupt("break",13);case 11:e.next=2;break;case 13:a.ok&&(t.T.alert(t.$t("System Config Saved"),"success"),t.$store.dispatch("reloadSystemConfig"));case 14:case"end":return e.stop()}}),e)})))()},enableClass:function(t){return!0===t?"config-enabled":!1===t?"config-disabled":""}},computed:{},props:{},data:function(){return{data:{},form:{NOTICE_BAR_ENABLED:null,NOTICE_BAR_TEXT:null,MONITOR_DATA_UPLOAD_ENABLED:null,MONITOR_DATA_UPLOAD_URL:null}}}}),i=l,c=(a("4cf9"),a("2877")),u=a("88a7"),f=Object(c["a"])(i,r,n,!1,null,null,null);"function"===typeof u["default"]&&Object(u["default"])(f);e["default"]=f.exports},"4bf6":function(t,e,a){},"4cf9":function(t,e,a){"use strict";a("4bf6")},"88a7":function(t,e,a){"use strict";var r=a("b298"),n=a.n(r);e["default"]=n.a},b298:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-CN":{"Notice Bar":"顶部提示栏","Monitor Data Upload":"监控数据上报","Enable":"启用功能","Text":"文案","URL":"URL地址","System Config Saved":"系统配置已保存"}}'),delete t.options._Ctor}}}]);