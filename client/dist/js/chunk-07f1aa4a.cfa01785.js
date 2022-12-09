(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07f1aa4a"],{4160:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"zh-CN":{"Add Script Market":"添加脚本市场","Setup Script Market":"配置脚本市场","Branch":"分支","Region":"地域","Password here is always required when the Script Market requires password":"如脚本市场需要密码，则每次修改都必须重新输入密码","AK Secret here is always required when the Script Market requires password":"如脚本市场需要 AK Secret，则每次修改都必须重新输入 AK Secret","Please input Script Market type":"请输入脚本市场类型","Please input URL":"请输入 URL","Please input Branch":"请输入分支","Please input user":"请输入用户名","Please input password":"请输入密码","Please input endpoint":"请输入访问地址","Please input bucket":"请输入 Bucket","Please input folder":"请输入文件夹","Please input AK Id":"请输入 AK ID","Please input AK Secret":"请输入 AK Secret","Should start with http:// or https://":"必须以 http:// 或 https://开头","Script Market added":"脚本市场已添加","Script Market saved":"脚本市场已保存","Script Market removed":"脚本市场已删除","Are you sure you want to delete the Script Market?":"是否确认删除此脚本市场？"}}'),delete e.options._Ctor}},"44ac":function(e,t,r){"use strict";var a=r("4160"),s=r.n(a);t["default"]=s.a},4920:function(e,t,r){},"5c83":function(e,t,r){"use strict";r("4920")},"64c8":function(e,t,r){"use strict";r.r(t);r("b0c0"),r("a4d3"),r("e01a");var a=function(){var e=this,t=e._self._c;return t("transition",{attrs:{name:"fade"}},[t("el-container",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.isLoaded,expression:"$store.state.isLoaded"}],attrs:{direction:"vertical"}},[t("el-header",{attrs:{height:"60px"}},[t("h1",[e._v(e._s(e.pageTitle)+" "),e.data.name?t("code",{staticClass:"text-main"},[e._v(e._s(e.data.name||e.C.API_AUTH_MAP.get(e.selectedType).name))]):e._e()])]),e._v(" "),t("el-main",[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:15}},[t("div",{staticClass:"common-form"},[t("el-form",{ref:"form",attrs:{"label-width":"135px",model:e.form,rules:e.formRules}},[t("el-form-item",{staticStyle:{height:"0",overflow:"hidden"}},[t("input",{attrs:{tabindex:"-1",type:"text",name:"username"}}),e._v(" "),t("input",{attrs:{tabindex:"-1",type:"password",name:"password"}})]),e._v(" "),"add"===e.T.setupPageMode()?t("el-form-item",{attrs:{label:e.$t("Type"),prop:"type"}},[t("el-select",{on:{change:e.switchType},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(e.C.SCRIPT_MARKET,(function(e){return t("el-option",{key:e.key,attrs:{label:e.name,value:e.key}})})),1)],1):t("el-form-item",{attrs:{label:e.$t("Type")}},[t("el-select",{attrs:{disabled:!0},model:{value:e.selectedType,callback:function(t){e.selectedType=t},expression:"selectedType"}},[t("el-option",{attrs:{label:e.C.SCRIPT_MARKET_MAP.get(e.selectedType).name,value:e.selectedType}})],1)],1),e._v(" "),e.selectedType?[e.C.SCRIPT_MARKET_MAP.get(e.selectedType).logo?t("el-form-item",[t("el-image",{staticClass:"script-market-logo",class:e.common.getScriptMarketClass(e.form),attrs:{src:e.common.getScriptMarketLogo(e.form)}})],1):e._e(),e._v(" "),t("el-form-item",[t("InfoBlock",{attrs:{type:"warning",title:e.C.SCRIPT_MARKET_MAP.get(e.selectedType).tip}})],1),e._v(" "),t("el-form-item",{attrs:{label:e.$t("Name")}},[t("el-input",{attrs:{placeholder:e.$t("Optional"),maxlength:"25"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:e.$t("Description")}},[t("el-input",{attrs:{placeholder:e.$t("Optional"),type:"textarea",resize:"none",autosize:{minRows:2},maxlength:"5000"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),e._v(" "),e.hasConfigField(e.selectedType,"url")?t("el-form-item",{attrs:{label:"URL",prop:"configJSON.url"}},[t("el-input",{attrs:{type:"textarea",resize:"none",autosize:{minRows:2},maxlength:"5000"},model:{value:e.form.configJSON.url,callback:function(t){e.$set(e.form.configJSON,"url",t)},expression:"form.configJSON.url"}})],1):e._e(),e._v(" "),e.hasConfigField(e.selectedType,"branch")?t("el-form-item",{attrs:{label:e.$t("Branch"),prop:"configJSON.branch"}},[t("el-input",{attrs:{placeholder:e.$t("Default")},model:{value:e.form.configJSON.branch,callback:function(t){e.$set(e.form.configJSON,"branch",t)},expression:"form.configJSON.branch"}})],1):e._e(),e._v(" "),e.hasConfigField(e.selectedType,"user")?t("el-form-item",{attrs:{label:e.$t("User"),prop:"configJSON.user"}},[t("el-input",{model:{value:e.form.configJSON.user,callback:function(t){e.$set(e.form.configJSON,"user",t)},expression:"form.configJSON.user"}})],1):e._e(),e._v(" "),e.hasConfigField(e.selectedType,"password")?t("el-form-item",{attrs:{label:e.$t("Password"),prop:"configJSON.password"}},[t("el-input",{attrs:{"show-password":""},model:{value:e.form.configJSON.password,callback:function(t){e.$set(e.form.configJSON,"password",t)},expression:"form.configJSON.password"}}),e._v(" "),"setup"===e.T.setupPageMode()?t("InfoBlock",{attrs:{type:"info",title:e.$t("Password here is always required when the Script Market requires password")}}):e._e()],1):e._e(),e._v(" "),e.hasConfigField(e.selectedType,"endpoint")?t("el-form-item",{attrs:{label:e.$t("Endpoint"),prop:"configJSON.endpoint"}},[t("el-input",{model:{value:e.form.configJSON.endpoint,callback:function(t){e.$set(e.form.configJSON,"endpoint",t)},expression:"form.configJSON.endpoint"}})],1):e._e(),e._v(" "),e.hasConfigField(e.selectedType,"bucket")?t("el-form-item",{attrs:{label:"Bucket",prop:"configJSON.bucket"}},[t("el-input",{model:{value:e.form.configJSON.bucket,callback:function(t){e.$set(e.form.configJSON,"bucket",t)},expression:"form.configJSON.bucket"}})],1):e._e(),e._v(" "),e.hasConfigField(e.selectedType,"folder")?t("el-form-item",{attrs:{label:e.$t("Folder"),prop:"configJSON.folder"}},[t("el-input",{model:{value:e.form.configJSON.folder,callback:function(t){e.$set(e.form.configJSON,"folder",t)},expression:"form.configJSON.folder"}})],1):e._e(),e._v(" "),e.hasConfigField(e.selectedType,"accessKeyId")?t("el-form-item",{attrs:{label:"AK ID",prop:"configJSON.accessKeyId"}},[t("el-input",{model:{value:e.form.configJSON.accessKeyId,callback:function(t){e.$set(e.form.configJSON,"accessKeyId",t)},expression:"form.configJSON.accessKeyId"}})],1):e._e(),e._v(" "),e.hasConfigField(e.selectedType,"accessKeySecret")?t("el-form-item",{attrs:{label:"AK Secret",prop:"configJSON.accessKeySecret"}},[t("el-input",{attrs:{"show-password":""},model:{value:e.form.configJSON.accessKeySecret,callback:function(t){e.$set(e.form.configJSON,"accessKeySecret",t)},expression:"form.configJSON.accessKeySecret"}}),e._v(" "),"setup"===e.T.setupPageMode()?t("InfoBlock",{attrs:{type:"info",title:e.$t("AK Secret here is always required when the Script Market requires password")}}):e._e()],1):e._e()]:e._e(),e._v(" "),t("el-form-item",["setup"===e.T.setupPageMode()?t("el-button",{on:{click:e.deleteData}},[e._v(e._s(e.$t("Delete")))]):e._e(),e._v(" "),t("div",{staticClass:"setup-right"},[t("el-button",{attrs:{type:"primary",disabled:e.isSaving},on:{click:e.submitData}},[e.isSaving?t("i",{staticClass:"fa fa-fw fa-circle-o-notch fa-spin"}):e._e(),e._v("\n                    "+e._s(e.$t("Save"))+"\n                  ")])],1)],1)],2)],1)]),e._v(" "),t("el-col",{staticClass:"hidden-md-and-down",attrs:{span:9}})],1)],1)],1)],1)},s=[],i=r("c7eb"),n=r("1da1"),o=(r("d3b7"),r("159b"),r("b64b"),{name:"ScriptMarketSetup",components:{},watch:{$route:{immediate:!0,handler:function(e,t){var r=this;return Object(n["a"])(Object(i["a"])().mark((function e(){return Object(i["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.loadData();case 2:e.t0=r.T.setupPageMode(),e.next="add"===e.t0?5:"setup"===e.t0?9:10;break;case 5:return r.T.jsonClear(r.form),r.form.configJSON={},r.data={},e.abrupt("break",10);case 9:return e.abrupt("break",10);case 10:case"end":return e.stop()}}),e)})))()}}},methods:{updateValidator:function(e){this.$refs.form&&this.$refs.form.clearValidate();var t=this.C.SCRIPT_MARKET_MAP.get(e).configFields;if(t)for(var r in t)if(t.hasOwnProperty(r)){var a=t[r];if(!a)continue;var s=this.formRules["configJSON.".concat(r)];s&&(s[0].required=!!a.isRequired)}},fillDefault:function(e){var t=this.C.SCRIPT_MARKET_MAP.get(e).configFields;if(t){var r={};for(var a in t)if(t.hasOwnProperty(a)){var s=t[a];if(!s)continue;this.T.notNothing(s.default)&&(r[a]=s.default)}this.form.configJSON=r}},switchType:function(e){this.fillDefault(e),this.updateValidator(e)},loadData:function(){var e=this;return Object(n["a"])(Object(i["a"])().mark((function t(){var r,a;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("setup"!==e.T.setupPageMode()){t.next=11;break}return t.next=3,e.T.callAPI_getOne("/api/v1/script-markets/do/list",e.$route.params.id);case 3:if(r=t.sent,r&&r.ok){t.next=6;break}return t.abrupt("return");case 6:e.data=r.data,a={},Object.keys(e.form).forEach((function(t){return a[t]=e.data[t]})),e.form=a,e.updateValidator(e.data.type);case 11:e.$store.commit("updateLoadStatus",!0);case 12:case"end":return t.stop()}}),t)})))()},submitData:function(){var e=this;return Object(n["a"])(Object(i["a"])().mark((function t(){return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$refs.form.validate();case 3:t.next=8;break;case 5:return t.prev=5,t.t0=t["catch"](0),t.abrupt("return",console.error(t.t0));case 8:e.isSaving=!0,t.t1=e.T.setupPageMode(),t.next="add"===t.t1?12:"setup"===t.t1?15:18;break;case 12:return t.next=14,e.addData();case 14:return t.abrupt("break",18);case 15:return t.next=17,e.modifyData();case 17:return t.abrupt("break",18);case 18:setTimeout((function(){e.isSaving=!1}),500);case 19:case"end":return t.stop()}}),t,null,[[0,5]])})))()},_getFromData:function(){var e=this.T.jsonCopy(this.form);if(e.configJSON)for(var t in e.configJSON)this.T.isNothing(e.configJSON[t])&&(e.configJSON[t]=null);return e},addData:function(){var e=this;return Object(n["a"])(Object(i["a"])().mark((function t(){var r,a;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("git"!==e.form.type||!e.form.configJSON.user||!e.form.configJSON.password||e.$root.checkUserProfileForGit()){t.next=2;break}return t.abrupt("return");case 2:return r=e._getFromData(),t.next=5,e.T.callAPI("post","/api/v1/script-markets/do/add",{body:{data:r},alert:{okMessage:e.$t("Script Market added")}});case 5:if(a=t.sent,a&&a.ok){t.next=8;break}return t.abrupt("return");case 8:e.$store.commit("updateTableList_scrollY"),e.$store.commit("updateHighlightedTableDataId",a.data.id),e.$router.push({name:"script-market-list",query:e.T.getPrevQuery()});case 11:case"end":return t.stop()}}),t)})))()},modifyData:function(){var e=this;return Object(n["a"])(Object(i["a"])().mark((function t(){var r,a;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e._getFromData(),delete r.id,delete r.type,t.next=5,e.T.callAPI("post","/api/v1/script-markets/:id/do/modify",{params:{id:e.$route.params.id},body:{data:r},alert:{okMessage:e.$t("Script Market saved")}});case 5:if(a=t.sent,a&&a.ok){t.next=8;break}return t.abrupt("return");case 8:e.$store.commit("updateHighlightedTableDataId",a.data.id),e.$router.push({name:"script-market-list",query:e.T.getPrevQuery()});case 10:case"end":return t.stop()}}),t)})))()},deleteData:function(){var e=this;return Object(n["a"])(Object(i["a"])().mark((function t(){var r;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("git"!==e.data.type||!e.data.isAdmin||e.$root.checkUserProfileForGit()){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.T.confirm(e.$t("Are you sure you want to delete the Script Market?"));case 4:if(t.sent){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,e.T.callAPI("/api/v1/script-markets/:id/do/delete",{params:{id:e.$route.params.id},alert:{okMessage:e.$t("Script Market removed")}});case 8:if(r=t.sent,r&&r.ok){t.next=11;break}return t.abrupt("return");case 11:e.$router.push({name:"script-market-list",query:e.T.getPrevQuery()});case 12:case"end":return t.stop()}}),t)})))()},hasConfigField:function(e,t){return!(!this.C.SCRIPT_MARKET_MAP.get(e)||!this.C.SCRIPT_MARKET_MAP.get(e).configFields)&&t in this.C.SCRIPT_MARKET_MAP.get(e).configFields}},computed:{formRules:function(){return{type:[{trigger:"change",message:this.$t("Please input Script Market type"),required:!0}],"configJSON.url":[{trigger:"change",message:this.$t("Please input URL"),required:!1},{trigger:"change",message:this.$t("Should start with http:// or https://"),pattern:this.C.RE_PATTERN.httpURL}],"configJSON.branch":[{trigger:"change",message:this.$t("Please input Branch"),required:!1}],"configJSON.user":[{trigger:"change",message:this.$t("Please input user"),required:!!this.form.configJSON.password}],"configJSON.password":[{trigger:"change",message:this.$t("Please input password"),required:!!this.form.configJSON.user}],"configJSON.endpoint":[{trigger:"change",message:this.$t("Please input endpoint"),required:!0},{trigger:"change",message:this.$t("Should start with http:// or https://"),pattern:this.C.RE_PATTERN.httpURL}],"configJSON.bucket":[{trigger:"change",message:this.$t("Please input bucket"),required:!0}],"configJSON.folder":[{trigger:"change",message:this.$t("Please input folder"),required:!0}],"configJSON.accessKeyId":[{trigger:"change",message:this.$t("Please input AK Id"),required:!0}],"configJSON.accessKeySecret":[{trigger:"change",message:this.$t("Please input AK Secret"),required:!0}]}},pageTitle:function(){var e={setup:this.$t("Setup Script Market"),add:this.$t("Add Script Market")};return e[this.T.setupPageMode()]},selectedType:function(){switch(this.T.setupPageMode()){case"add":return this.form.type;case"setup":return this.data.type}}},props:{},data:function(){return{data:{},form:{name:null,type:null,description:null,configJSON:{}},isSaving:!1}}}),c=o,l=(r("5c83"),r("2877")),u=r("44ac"),p=Object(l["a"])(c,a,s,!1,null,"a8c11d0e",null);"function"===typeof u["default"]&&Object(u["default"])(p);t["default"]=p.exports}}]);