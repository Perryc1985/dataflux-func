(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57ec82ae"],{"1f68":function(e,t,a){},"468a":function(e,t,a){"use strict";a("66b4")},"66b4":function(e,t,a){},"704e":function(e,t,a){"use strict";var n=a("f077"),r=a.n(n);t["default"]=r.a},8685:function(e,t,a){"use strict";a("bf04")},bf04:function(e,t,a){},c546:function(e,t,a){"use strict";a("1f68")},d4ab:function(e,t,a){"use strict";var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"captcha-image"},[t("div",{domProps:{innerHTML:e._s(e.captchaImageRaw)}})])},r=[],s=a("c7eb"),i=a("1da1"),c={name:"CaptchaImage",components:{},watch:{captchaToken:{immediate:!0,handler:function(e,t){var a=this;return Object(i["a"])(Object(s["a"])().mark((function e(){return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.showCaptchaImage();case 2:case"end":return e.stop()}}),e)})))()}}},methods:{showCaptchaImage:function(){var e=this;return Object(i["a"])(Object(s["a"])().mark((function t(){var a,n;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.captchaToken){t.next=2;break}return t.abrupt("return");case 2:return a={captchaToken:e.captchaToken},e.captchaCategory&&(a.captchaCategory=e.captchaCategory),t.next=6,e.T.callAPI_get(e.captchaUrl,{respType:"text",query:a});case 6:n=t.sent,e.captchaImageRaw=n||"";case 8:case"end":return t.stop()}}),t)})))()}},computed:{},props:{captchaCategory:String,captchaToken:String,captchaUrl:{type:String,default:"/api/v1/captcha/do/get"}},data:function(){return{captchaImageRaw:""}},created:function(){}},o=c,u=(a("c546"),a("2877")),l=Object(u["a"])(o,n,r,!1,null,"eee2afa2",null);t["a"]=l.exports},d504:function(e,t,a){"use strict";a.r(t);a("b0c0");var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"sign-in"},[t("div",{staticClass:"sign-in-area"},[t("Logo",{staticClass:"logo",attrs:{type:"auto",width:"400px",height:"70px"}}),e._v(" "),t("div",{staticClass:"sign-in-panel"},[t("el-form",{ref:"form",staticClass:"sign-in-form",attrs:{model:e.form,rules:e.formRules}},[e.signInFuncs&&e.signInFuncs.length>0?t("el-form-item",{attrs:{prop:"funcId"}},[t("el-select",{attrs:{placeholder:e.$t("Please select sign in method")},model:{value:e.form.funcId,callback:function(t){e.$set(e.form,"funcId",t)},expression:"form.funcId"}},[t("i",{staticClass:"fth-man-icon fth-man-icon-integration",attrs:{slot:"prefix"},slot:"prefix"}),e._v(" "),t("el-option",{attrs:{label:e.$t("DataFlux Func built-in user"),value:e.BUILTIN_SIGN_IN_FUNC_ID}}),e._v(" "),e._l(e.signInFuncs,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],2)],1):e._e(),e._v(" "),t("el-form-item",{attrs:{prop:"username"}},[t("el-input",{attrs:{tabindex:"1",maxlength:"100",placeholder:e.$t("Username")},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}},[t("i",{staticClass:"fth-man-icon fth-man-icon-account-number",attrs:{slot:"prefix"},slot:"prefix"})])],1),e._v(" "),t("el-form-item",{attrs:{prop:"password",error:e.respError.password}},[t("el-input",{attrs:{tabindex:"2",maxlength:"100","show-password":"",placeholder:e.$t("Password")},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}},[t("i",{staticClass:"fth-man-icon fth-man-icon-password",attrs:{slot:"prefix"},slot:"prefix"})])],1),e._v(" "),t("el-form-item",{attrs:{_captcha:"",prop:"captcha",error:e.respError.captcha}},[t("el-input",{attrs:{tabindex:"3",maxlength:4,clearable:!0,placeholder:e.$t("Captcha")},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitData.apply(null,arguments)}},model:{value:e.form.captcha,callback:function(t){e.$set(e.form,"captcha",t)},expression:"form.captcha"}},[t("i",{staticClass:"fth-man-icon fth-man-icon-verification-code",attrs:{slot:"prefix"},slot:"prefix"})]),e._v(" "),t("CaptchaImage",{attrs:{"captcha-category":"signIn","captcha-token":e.form.captchaToken},nativeOn:{click:function(t){return e.refreshCaptcha()}}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{tabindex:"4",type:"primary",disabled:e.isSigningIn},on:{click:e.submitData}},[e.isSigningIn?t("i",{staticClass:"fa fa-fw fa-circle-o-notch fa-spin"}):e._e(),e._v("\n            "+e._s(e.$t("Sign In"))+"\n          ")]),e._v(" "),t("div",{staticClass:"ui-extra"},[t("el-dropdown",{staticClass:"ui-locale-select",on:{command:e.$root.setUILocale}},[t("span",[t("i",{staticClass:"fa fa-fw fa-globe"}),e._v(" "+e._s(e.uiLocaleDetail.name))]),e._v(" "),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.C.UI_LOCALE,(function(a){return t("el-dropdown-item",{key:a.key,attrs:{command:a.key}},[t("span",{class:{"selected-option":e.uiLocaleDetail.key===a.key}},[e._v("\n                    "+e._s(a.name)+"\n                    "),a.tip?t("span",{staticClass:"ui-locale-tip"},[e._v(e._s(a.tip))]):e._e()])])})),1)],1),e._v(" "),e.respError.other?t("div",{staticClass:"ui-error-message text-bad"},[e._v(e._s(e.respError.other))]):e._e()],1)],1)],1)],1)],1)])},r=[],s=a("c7eb"),i=a("1da1"),c=(a("d3b7"),a("25f0"),a("d4ab")),o={name:"Index",components:{CaptchaImage:c["a"]},watch:{},methods:{submitData:function(){var e=this;return Object(i["a"])(Object(s["a"])().mark((function t(){var a,n,r,i,c,o,u;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isSigningIn=!0,e.submitFailed=!1,a=e.form.funcId,n=e.form.username,t.prev=4,t.next=7,e.$refs.form.validate();case 7:t.next=13;break;case 9:return t.prev=9,t.t0=t["catch"](4),e.isSigningIn=!1,t.abrupt("return",console.error(t.t0));case 13:return t.next=15,e.$refs.form.clearValidate();case 15:return e.T.jsonClear(e.respError),r=e.T.jsonCopy(e.form),i=null,c={captchaToken:r.captchaToken,captcha:r.captcha,signIn:{username:r.username,password:r.password}},e.isBuiltInSignIn?i="/api/v1/auth/do/sign-in":(i="/api/v1/func/integration/sign-in",c.signIn.funcId=r.funcId),t.next=22,e.T.callAPI("post",i,{body:c,alert:{muteError:!0}});case 22:if(o=t.sent,e.$refs.form.resetFields(),e.form.funcId=a,e.form.username=n,o.ok){t.next=48;break}e.refreshCaptcha(),t.t1=o.reason,t.next="EUserPassword"===t.t1?31:"EUserCaptcha"===t.t1?33:"EUserDisabled"===t.t1?35:"EFuncResultParsingFailed"===t.t1?37:"EFuncFailed.SignInFuncRaisedException"===t.t1?39:"EFuncFailed.SignInFuncTimeout"===t.t1?41:"EFuncFailed.SignInFuncReturnedFalseOrNothing"===t.t1?43:45;break;case 31:return e.respError.password=e.$t("Invalid username or password"),t.abrupt("break",45);case 33:return e.respError.captcha=e.$t("Invalid captcha"),t.abrupt("break",45);case 35:return e.respError.other=e.$t("User has been disabled"),t.abrupt("break",45);case 37:return e.respError.other=e.$t("Integration sign-in func returned an unexpected value, please contact admin"),t.abrupt("break",45);case 39:return e.respError.other=o.message||e.$t("Sign in failed. Error occured in integration sign-in func, please concat admin"),t.abrupt("break",45);case 41:return e.respError.other=e.$t("Sign in failed. Integration sign-in func timeout, please concat admin"),t.abrupt("break",45);case 43:return e.respError.other=e.$t("Sign in failed. Integration sign-in func returned `False` or empty value, please concat admin"),t.abrupt("break",45);case 45:return e.isSigningIn=!1,e.submitFailed=!0,t.abrupt("return");case 48:u=o.data.xAuthToken,e.$store.dispatch("signIn",u),setTimeout((function(){e.isSigningIn=!1}),1e3);case 51:case"end":return t.stop()}}),t,null,[[4,9]])})))()},refreshCaptcha:function(){this.form.captchaToken=Math.random().toString(),this.form.captcha=""}},computed:{BUILTIN_SIGN_IN_FUNC_ID:function(){return"builtIn"},signInFuncs:function(){return this.$store.getters.CONFIG("INTEGRATED_SIGN_IN_FUNC")},isBuiltInSignIn:function(){return this.T.isNothing(this.signInFuncs)||this.form.funcId===this.BUILTIN_SIGN_IN_FUNC_ID},uiLocaleDetail:function(){return this.C.UI_LOCALE_MAP.get(this.$store.getters.uiLocale)}},props:{},data:function(){return{isSigningIn:!1,respError:{password:null,captcha:null,other:null},form:{captchaToken:null,captcha:null,funcId:null,username:null,password:null},formRules:{username:[{trigger:"change",message:this.$t("Please input username"),required:!0}],password:[{trigger:"change",message:this.$t("Please input password"),required:!0}],captcha:[{trigger:"change",message:this.$t("Please input captcha"),required:!0},{trigger:"change",message:this.$t("Captcha should be a 4-digit number"),length:4,pattern:/^\d{4}$/g}]},submitFailed:!1}},created:function(){this.form.funcId=this.BUILTIN_SIGN_IN_FUNC_ID,this.refreshCaptcha()}},u=o,l=(a("8685"),a("468a"),a("2877")),p=a("704e"),d=Object(l["a"])(u,n,r,!1,null,"9903d436",null);"function"===typeof p["default"]&&Object(p["default"])(d);t["default"]=d.exports},f077:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"zh-CN":{"Please select sign in method":"请选择登录方式","DataFlux Func built-in user":"DataFlux Func 内置用户","Username":"请输入账号","Password":"请输入密码","Captcha":"请输入验证码","Sign In":"登录","Please input username":"请输入用户名","Please input password":"请输入密码","Please input captcha":"请输入验证码","Captcha should be a 4-digit number":"验证码为4位数字","Invalid username or password":"用户名或密码错误","Invalid captcha":"验证码错误或无效","User has been disabled":"当前用户已被禁用","Integration sign-in func returned an unexpected value, please contact admin":"集成登录函数返回了未预期的结果，请联系系统管理员","Sign in failed. Error occured in integration sign-in func, please concat admin":"登录失败。集成登录函数抛出异常，请联系系统管理员","Sign in failed. Integration sign-in func timeout, please concat admin":"登录失败，集成登录函数超时，请联系系统管理员","Sign in failed. Integration sign-in func returned `False` or empty value, please concat admin":"登录失败，集成登录函数返回`False`或空内容，请联系系统管理员"}}'),delete e.options._Ctor}}}]);