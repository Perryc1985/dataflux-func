(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6184d530"],{"0265":function(e,a){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"zh-TW":{"Captcha":"驗證碼","Change Password":"修改密碼","Confirm":"確認新密碼","Invalid captcha":"驗證碼錯誤或無效","Invalid old password":"舊密碼錯誤","Length of password should longer than 6":"密碼至少6位","New password":"新密碼","New password not matches":"兩次輸入密碼不一致","Old password":"舊密碼","Password changed":"密碼已修改","Password should contains uppercase, lowercase alphabet and number":"密碼必須同時包含大寫英文、小寫英文和數字","Please confirm new password":"請再輸入一遍新密碼","Please input captcha":"請輸入驗證碼","Please input new password":"請輸入新密碼","Please input old password":"請輸入舊密碼","User not found":"當前使用者不存在","You are signed in as a integrated user, please change your password in the origin system":"當前登入使用者為整合登入使用者，修改密碼請前往原系統進行操作"}}'),delete e.options._Ctor}},"0e99":function(e,a,t){"use strict";var r=t("0265"),s=t.n(r);a["default"]=s.a},"0f8f":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e._self._c;return a("transition",{attrs:{name:"fade"}},[a("el-container",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.isLoaded,expression:"$store.state.isLoaded"}],attrs:{direction:"vertical"}},[a("el-header",{attrs:{height:"60px"}},[a("h1",[e._v(e._s(e.$t("Change Password")))])]),e._v(" "),a("el-main",[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:15}},[a("div",{staticClass:"setup-form"},[a("el-form",{ref:"form",attrs:{"label-width":"135px",model:e.form,rules:e.formRules,disabled:e.$store.getters.isIntegratedUser}},[a("el-form-item",[e.$store.getters.isIntegratedUser?a("InfoBlock",{attrs:{type:"warning",title:e.$t("You are signed in as a integrated user, please change your password in the origin system")}}):e._e()],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("Old password"),prop:"oldPassword",error:e.respError.oldPassword}},[a("el-input",{attrs:{tabindex:"1",maxlength:"100",placeholder:e.$t("Please input old password"),"show-password":""},model:{value:e.form.oldPassword,callback:function(a){e.$set(e.form,"oldPassword",a)},expression:"form.oldPassword"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("New password"),prop:"newPassword"}},[a("el-input",{attrs:{tabindex:"2",maxlength:"100",placeholder:e.$t("Please input new password"),"show-password":""},model:{value:e.form.newPassword,callback:function(a){e.$set(e.form,"newPassword",a)},expression:"form.newPassword"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("Confirm"),prop:"confirmNewPassword"}},[a("el-input",{attrs:{tabindex:"3",maxlength:"100",placeholder:e.$t("Please confirm new password"),"show-password":""},model:{value:e.form.confirmNewPassword,callback:function(a){e.$set(e.form,"confirmNewPassword",a)},expression:"form.confirmNewPassword"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("Captcha"),_captcha:"",prop:"captcha",error:e.respError.captcha}},[a("el-input",{attrs:{tabindex:"4",maxlength:4,clearable:!0,placeholder:e.$t("Please input captcha")},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.submitData.apply(null,arguments)}},model:{value:e.form.captcha,callback:function(a){e.$set(e.form,"captcha",a)},expression:"form.captcha"}}),e._v(" "),a("CaptchaImage",{attrs:{"captcha-category":"changePassword","captcha-token":e.form.captchaToken},nativeOn:{click:function(a){return e.refreshCaptcha()}}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{tabindex:"5",type:"primary"},on:{click:e.submitData}},[e._v(e._s(e.$t("Change Password")))])],1)],1)],1)]),e._v(" "),a("el-col",{staticClass:"hidden-md-and-down",attrs:{span:9}})],1)],1)],1)],1)},s=[],n=t("c7eb"),o=t("1da1"),c=(t("d3b7"),t("25f0"),t("d9e2"),t("ac1f"),t("466d"),t("d4ab")),d={name:"PasswordSetup",components:{CaptchaImage:c["a"]},watch:{},methods:{submitData:function(){var e=this;return Object(o["a"])(Object(n["a"])().mark((function a(){var t,r;return Object(n["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.$refs.form.validate();case 3:a.next=8;break;case 5:return a.prev=5,a.t0=a["catch"](0),a.abrupt("return",console.error(a.t0));case 8:return e.T.jsonClear(e.respError),t=e.T.jsonCopy(e.form),a.next=12,e.T.callAPI("post","/api/v1/auth/do/change-password",{body:{captchaToken:t.captchaToken,captcha:t.captcha,changePassword:{oldPassword:t.oldPassword,newPassword:t.newPassword}},alert:{okMessage:e.$t("Password changed")}});case 12:if(r=a.sent,r.ok){a.next=23;break}a.t1=r.reason,a.next="EUserPassword"===a.t1?17:"EBizBadData"===a.t1?19:"EUserCaptcha"===a.t1?21:23;break;case 17:return e.respError.oldPassword=e.$t("Invalid old password"),a.abrupt("break",23);case 19:return e.respError.captcha=e.$t("User not found"),a.abrupt("break",23);case 21:return e.respError.captcha=e.$t("Invalid captcha"),a.abrupt("break",23);case 23:e.refreshCaptcha(),r.ok&&e.$refs.form.resetFields();case 25:case"end":return a.stop()}}),a,null,[[0,5]])})))()},refreshCaptcha:function(){this.form.captchaToken=Math.random().toString(),this.form.captcha=""}},data:function(){var e=this;return{respError:{oldPassword:null,captcha:null},form:{captchaToken:null,captcha:null,oldPassword:null,newPassword:null,confirmNewPassword:null},formRules:{oldPassword:[{trigger:"change",message:this.$t("Please input old password"),required:!0}],newPassword:[{trigger:"change",message:this.$t("Please input new password"),required:!0},{trigger:"change",required:!0,validator:function(a,t,r){return t.length<6?r(new Error(e.$t("Length of password should longer than 6"))):t.match(/[a-z]/)&&t.match(/[A-Z]/)&&t.match(/[0-9]/)?(e.$refs.form.validateField("confirmNewPassword"),r()):r(new Error(e.$t("Password should contains uppercase, lowercase alphabet and number")))}}],confirmNewPassword:[{trigger:"change",message:this.$t("Please confirm new password"),required:!0},{trigger:"change",required:!0,validator:function(a,t,r){return t!==e.form.newPassword?r(new Error(e.$t("New password not matches"))):r()}}],captcha:[{trigger:"change",message:this.$t("Please input captcha"),required:!0}]}}},created:function(){this.refreshCaptcha(),this.$store.commit("updateLoadStatus",!0)}},i=d,p=(t("21d3"),t("2877")),l=t("91d1"),u=t("255f"),h=t("0e99"),w=Object(p["a"])(i,r,s,!1,null,null,null);"function"===typeof l["default"]&&Object(l["default"])(w),"function"===typeof u["default"]&&Object(u["default"])(w),"function"===typeof h["default"]&&Object(h["default"])(w);a["default"]=w.exports},"1f68":function(e,a,t){},"21d3":function(e,a,t){"use strict";t("9c86")},"255f":function(e,a,t){"use strict";var r=t("29ac"),s=t.n(r);a["default"]=s.a},"29ac":function(e,a){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"zh-HK":{"Captcha":"驗證碼","Change Password":"修改密碼","Confirm":"確認新密碼","Invalid captcha":"驗證碼錯誤或無效","Invalid old password":"舊密碼錯誤","Length of password should longer than 6":"密碼至少6位","New password":"新密碼","New password not matches":"兩次輸入密碼不一致","Old password":"舊密碼","Password changed":"密碼已修改","Password should contains uppercase, lowercase alphabet and number":"密碼必須同時包含大寫英文、小寫英文和數字","Please confirm new password":"請再輸入一遍新密碼","Please input captcha":"請輸入驗證碼","Please input new password":"請輸入新密碼","Please input old password":"請輸入舊密碼","User not found":"當前用户不存在","You are signed in as a integrated user, please change your password in the origin system":"當前登錄用户為集成登錄用户，修改密碼請前往原系統進行操作"}}'),delete e.options._Ctor}},"91d1":function(e,a,t){"use strict";var r=t("d8e6"),s=t.n(r);a["default"]=s.a},"9c86":function(e,a,t){},c546:function(e,a,t){"use strict";t("1f68")},d4ab:function(e,a,t){"use strict";var r=function(){var e=this,a=e._self._c;return a("div",{staticClass:"captcha-image"},[a("div",{domProps:{innerHTML:e._s(e.captchaImageRaw)}})])},s=[],n=t("c7eb"),o=t("1da1"),c={name:"CaptchaImage",components:{},watch:{captchaToken:{immediate:!0,handler:function(e,a){var t=this;return Object(o["a"])(Object(n["a"])().mark((function e(){return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.showCaptchaImage();case 2:case"end":return e.stop()}}),e)})))()}}},methods:{showCaptchaImage:function(){var e=this;return Object(o["a"])(Object(n["a"])().mark((function a(){var t,r;return Object(n["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.captchaToken){a.next=2;break}return a.abrupt("return");case 2:return t={captchaToken:e.captchaToken},e.captchaCategory&&(t.captchaCategory=e.captchaCategory),a.next=6,e.T.callAPI_get(e.captchaUrl,{respType:"text",query:t});case 6:r=a.sent,e.captchaImageRaw=r||"";case 8:case"end":return a.stop()}}),a)})))()}},computed:{},props:{captchaCategory:String,captchaToken:String,captchaUrl:{type:String,default:"/api/v1/captcha/do/get"}},data:function(){return{captchaImageRaw:""}},created:function(){}},d=c,i=(t("c546"),t("2877")),p=Object(i["a"])(d,r,s,!1,null,"eee2afa2",null);a["a"]=p.exports},d8e6:function(e,a){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"zh-CN":{"Change Password":"修改密码","You are signed in as a integrated user, please change your password in the origin system":"当前登录用户为集成登录用户，修改密码请前往原系统进行操作","Old password":"旧密码","Please input old password":"请输入旧密码","New password":"新密码","Please input new password":"请输入新密码","Confirm":"确认新密码","Please confirm new password":"请再输入一遍新密码","Captcha":"验证码","Please input captcha":"请输入验证码","Password changed":"密码已修改","Invalid old password":"旧密码错误","User not found":"当前用户不存在","Invalid captcha":"验证码错误或无效","Length of password should longer than 6":"密码至少6位","Password should contains uppercase, lowercase alphabet and number":"密码必须同时包含大写英文、小写英文和数字","New password not matches":"两次输入密码不一致"}}'),delete e.options._Ctor}}}]);