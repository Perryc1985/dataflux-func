(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66da6a6d"],{"15f4":function(e,t,a){"use strict";var r=a("5c6b"),s=a.n(r);t["default"]=s.a},"55d9":function(e,t,a){"use strict";a.r(t);a("b0c0");var r=function(){var e=this,t=e._self._c;return t("transition",{attrs:{name:"fade"}},[t("el-container",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.isLoaded,expression:"$store.state.isLoaded"}],attrs:{direction:"vertical"}},[t("el-header",{attrs:{height:"60px"}},[t("h1",[e._v(e._s(e.pageTitle)+" "),t("code",{staticClass:"text-main"},[e._v(e._s(e.data.name||e.data.username))])])]),e._v(" "),t("el-main",[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:15}},[t("div",{staticClass:"setup-form"},[t("el-form",{ref:"form",attrs:{"label-width":"135px",model:e.form,rules:e.formRules}},[t("el-form-item",{staticStyle:{height:"0",overflow:"hidden"}},[t("input",{attrs:{tabindex:"-1",type:"text",name:"username"}}),e._v(" "),t("input",{attrs:{tabindex:"-1",type:"password",name:"password"}})]),e._v(" "),t("el-form-item",{attrs:{label:e.$t("Username"),prop:"username"}},[t("el-input",{attrs:{maxlength:"60"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),e._v(" "),t("el-form-item",{attrs:{label:e.$t("Name"),prop:"name"}},[t("el-input",{attrs:{maxlength:"200"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:e.$t("Email"),prop:"email"}},[t("el-input",{model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),t("el-form-item",{attrs:{label:e.$t("Password"),prop:"password"}},[t("el-input",{attrs:{placeholder:e.passwordPlaceholder,maxlength:"100","show-password":""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1)],1)],1)]),e._v(" "),t("el-col",{staticClass:"hidden-md-and-down",attrs:{span:9}})],1)],1),e._v(" "),t("el-footer",[t("div",{staticClass:"setup-footer"},[t("el-button",{directives:[{name:"prevent-re-click",rawName:"v-prevent-re-click"}],attrs:{type:"primary"},on:{click:e.submitData}},[e._v(e._s(e.$t("Save")))])],1)])],1)],1)},s=[],n=a("c7eb"),o=a("1da1"),u=(a("d3b7"),a("159b"),a("b64b"),a("14d9"),{name:"UserSetup",components:{},watch:{$route:{immediate:!0,handler:function(e,t){var a=this;return Object(o["a"])(Object(n["a"])().mark((function e(){return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.loadData();case 2:e.t0=a.T.setupPageMode(),e.next="add"===e.t0?5:"setup"===e.t0?8:9;break;case 5:return a.T.jsonClear(a.form),a.data={},e.abrupt("break",9);case 8:return e.abrupt("break",9);case 9:case"end":return e.stop()}}),e)})))()}}},methods:{loadData:function(){var e=this;return Object(o["a"])(Object(n["a"])().mark((function t(){var a,r;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("setup"!==e.T.setupPageMode()){t.next=10;break}return t.next=3,e.T.callAPI_getOne("/api/v1/users/do/list",e.$route.params.id);case 3:if(a=t.sent,a&&a.ok){t.next=6;break}return t.abrupt("return");case 6:e.data=a.data,r={},Object.keys(e.form).forEach((function(t){return r[t]=e.data[t]})),e.form=r;case 10:"add"===e.T.setupPageMode()&&(e.formRules["password"][0].required=!0),e.$store.commit("updateLoadStatus",!0);case 12:case"end":return t.stop()}}),t)})))()},submitData:function(){var e=this;return Object(o["a"])(Object(n["a"])().mark((function t(){return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$refs.form.validate();case 3:t.next=8;break;case 5:return t.prev=5,t.t0=t["catch"](0),t.abrupt("return",console.error(t.t0));case 8:t.t1=e.T.setupPageMode(),t.next="add"===t.t1?11:"setup"===t.t1?14:17;break;case 11:return t.next=13,e.addData();case 13:return t.abrupt("return",t.sent);case 14:return t.next=16,e.modifyData();case 16:return t.abrupt("return",t.sent);case 17:case"end":return t.stop()}}),t,null,[[0,5]])})))()},addData:function(){var e=this;return Object(o["a"])(Object(n["a"])().mark((function t(){var a,r;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.T.jsonCopy(e.form),a.roles=["user"],t.next=4,e.T.callAPI("post","/api/v1/users/do/add",{body:{data:a},alert:{okMessage:e.$t("User created")}});case 4:if(r=t.sent,r&&r.ok){t.next=7;break}return t.abrupt("return");case 7:e.$router.push({name:"user-list",query:e.T.getPrevQuery()});case 8:case"end":return t.stop()}}),t)})))()},modifyData:function(){var e=this;return Object(o["a"])(Object(n["a"])().mark((function t(){var a,r;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.T.jsonCopy(e.form),e.T.isNothing(a.password)&&delete a.password,t.next=4,e.T.callAPI("post","/api/v1/users/:id/do/modify",{params:{id:e.$route.params.id},body:{data:a},alert:{okMessage:e.$t("User saved")}});case 4:if(r=t.sent,r&&r.ok){t.next=7;break}return t.abrupt("return");case 7:e.$router.push({name:"user-list",query:e.T.getPrevQuery()});case 8:case"end":return t.stop()}}),t)})))()}},computed:{pageTitle:function(){var e={setup:this.$t("Setup User"),add:this.$t("Add User")};return e[this.T.setupPageMode()]},passwordPlaceholder:function(){return"add"===this.T.setupPageMode()?"":this.$t("Leave blank when not changing")}},props:{},data:function(){return{data:{},form:{username:null,name:null,email:null,password:null},formRules:{username:[{trigger:"change",message:this.$t("Please input username"),required:!0},{trigger:"change",message:this.$t("Only alphabets, numbers and underscore are allowed"),pattern:/^[a-zA-Z0-9_]*$/g}],name:[{trigger:"change",message:this.$t("Please input name"),required:!0}],password:[{trigger:"change",message:this.$t("Please input password"),required:!1}]}}}}),i=u,c=a("2877"),l=a("15f4"),d=Object(c["a"])(i,r,s,!1,null,"c6eb5c6a",null);"function"===typeof l["default"]&&Object(l["default"])(d);t["default"]=d.exports},"5c6b":function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"zh-CN":{"Add User":"添加用户","Setup User":"配置用户","Username":"登录账号","Password":"密码","Leave blank when not changing":"不修改时请留空","User created":"用户已创建","User saved":"用户已保存","Please input username":"请输入登录账号","Only alphabets, numbers and underscore are allowed":"只能包含大小写英文、数字及下划线","Please input name":"请输入名称","Please input password":"请输入密码"}}'),delete e.options._Ctor}}}]);