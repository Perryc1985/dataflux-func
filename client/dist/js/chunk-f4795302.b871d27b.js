(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f4795302"],{"1b6c":function(e,t,a){"use strict";var r=a("669c"),n=a.n(r);t["default"]=n.a},"3bc7":function(e,t,a){"use strict";var r=a("f1e9"),n=a.n(r);t["default"]=n.a},5475:function(e,t,a){"use strict";a.r(t);a("b0c0");var r=function(){var e=this,t=e._self._c;return t("transition",{attrs:{name:"fade"}},[t("el-container",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.isLoaded,expression:"$store.state.isLoaded"}],attrs:{direction:"vertical"}},[t("el-header",{attrs:{height:"60px"}},[t("h1",[e._v("\n        "+e._s(e.$t("User Profile"))+"\n      ")])]),e._v(" "),t("el-main",[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:15}},[t("div",{staticClass:"setup-form"},[t("el-form",{ref:"form",attrs:{"label-width":"135px",model:e.form,rules:e.formRules,disabled:e.$store.getters.isIntegratedUser}},[t("el-form-item",[e.$store.getters.isIntegratedUser?t("InfoBlock",{attrs:{type:"warning",title:e.$t("You are signed in as a integrated user, please change your profile in the origin system")}}):e._e()],1),e._v(" "),t("el-form-item",{attrs:{label:e.$t("Username")}},[t("el-input",{attrs:{disabled:!0},model:{value:e.data.username,callback:function(t){e.$set(e.data,"username",t)},expression:"data.username"}})],1),e._v(" "),t("el-form-item",{attrs:{label:e.$t("Name"),prop:"name"}},[t("el-input",{attrs:{maxlength:"200"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:e.$t("Email"),prop:"email"}},[t("el-input",{attrs:{maxlength:"200"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),t("el-form-item",{attrs:{label:e.$t("Mobile"),prop:"mobile"}},[t("el-input",{attrs:{maxlength:"30"},model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.submitData}},[e._v(e._s(e.$t("Modify")))])],1)],1)],1)]),e._v(" "),t("el-col",{staticClass:"hidden-md-and-down",attrs:{span:9}})],1)],1)],1)],1)},n=[],s=a("c7eb"),i=a("1da1"),o=(a("d3b7"),a("159b"),a("b64b"),{name:"ProfileSetup",components:{},watch:{$route:{immediate:!0,handler:function(e,t){var a=this;return Object(i["a"])(Object(s["a"])().mark((function e(){return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.loadData();case 2:case"end":return e.stop()}}),e)})))()}}},methods:{loadData:function(){var e=this;return Object(i["a"])(Object(s["a"])().mark((function t(){var a,r;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.T.callAPI_get("/api/v1/auth/profile/do/get");case 2:if(a=t.sent,a&&a.ok){t.next=5;break}return t.abrupt("return");case 5:e.data=a.data,r={},Object.keys(e.form).forEach((function(t){return r[t]=e.data[t]})),e.form=r,e.$store.commit("updateLoadStatus",!0);case 10:case"end":return t.stop()}}),t)})))()},submitData:function(){var e=this;return Object(i["a"])(Object(s["a"])().mark((function t(){var a;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$refs.form.validate();case 3:t.next=8;break;case 5:return t.prev=5,t.t0=t["catch"](0),t.abrupt("return",console.error(t.t0));case 8:return t.next=10,e.T.callAPI("post","/api/v1/auth/profile/do/modify",{body:{data:e.T.jsonCopy(e.form)},alert:{okMessage:e.$t("User Profile saved")}});case 10:if(a=t.sent,a&&a.ok){t.next=13;break}return t.abrupt("return");case 13:return t.next=15,e.loadData();case 15:e.$store.dispatch("loadUserProfile");case 16:case"end":return t.stop()}}),t,null,[[0,5]])})))()}},data:function(){return{data:{},form:{name:null,email:null,mobile:null},formRules:{name:[{trigger:"change",message:this.$t("Please input name"),required:!0}],email:[{trigger:"change",message:this.$t("Please input email"),required:!1,pattern:this.C.RE_PATTERN.email}]}}}}),l=o,u=a("2877"),c=a("1b6c"),f=a("3bc7"),m=a("a143"),p=Object(u["a"])(l,r,n,!1,null,"293b3027",null);"function"===typeof c["default"]&&Object(c["default"])(p),"function"===typeof f["default"]&&Object(f["default"])(p),"function"===typeof m["default"]&&Object(m["default"])(p);t["default"]=p.exports},"669c":function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"zh-CN":{"User Profile":"用户信息","You are signed in as a integrated user, please change your profile in the origin system":"当前登录用户为集成登录用户，修改信息请前往原系统进行操作","Please input name":"请输入名称","Please input email":"请输入邮箱","User Profile saved":"用户信息已保存"}}'),delete e.options._Ctor}},a143:function(e,t,a){"use strict";var r=a("e259"),n=a.n(r);t["default"]=n.a},e259:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"zh-TW":{"Please input email":"請輸入郵箱","Please input name":"請輸入名稱","User Profile":"使用者資訊","User Profile saved":"使用者資訊已儲存","You are signed in as a integrated user, please change your profile in the origin system":"當前登入使用者為整合登入使用者，修改資訊請前往原系統進行操作"}}'),delete e.options._Ctor}},f1e9:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"zh-HK":{"Please input email":"請輸入郵箱","Please input name":"請輸入名稱","User Profile":"用户信息","User Profile saved":"用户信息已保存","You are signed in as a integrated user, please change your profile in the origin system":"當前登錄用户為集成登錄用户，修改信息請前往原系統進行操作"}}'),delete e.options._Ctor}}}]);