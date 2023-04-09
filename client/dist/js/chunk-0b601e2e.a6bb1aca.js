(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b601e2e"],{"0052":function(e,t,a){},"01f8":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e._self._c;return t("transition",{attrs:{name:"fade"}},[t("el-container",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.isLoaded,expression:"$store.state.isLoaded"}],attrs:{direction:"vertical"}},[t("el-header",{attrs:{height:"60px"}},[t("h1",[e._v(e._s(e.$t("System Config")))])]),e._v(" "),t("el-main",[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:15}},[t("div",{staticClass:"common-form"},[t("el-form",{ref:"form",attrs:{"label-width":"135px",model:e.form}},[t("el-divider",{attrs:{"content-position":"left"}},[t("h3",[e._v(e._s(e.$t("Custom Site Title")))])]),e._v(" "),t("el-form-item",[t("InfoBlock",{attrs:{title:e.$t("Use the specified text as the site title")}})],1),e._v(" "),t("el-form-item",{attrs:{label:e.$t("Enable"),prop:"CUSTOM_SITE_TITLE_ENABLED"}},[t("el-select",{class:e.enableClass(e.form["CUSTOM_SITE_TITLE_ENABLED"]),model:{value:e.form["CUSTOM_SITE_TITLE_ENABLED"],callback:function(t){e.$set(e.form,"CUSTOM_SITE_TITLE_ENABLED",t)},expression:"form['CUSTOM_SITE_TITLE_ENABLED']"}},[t("el-option",{key:"true",attrs:{label:e.$t("Enabled"),value:!0}}),e._v(" "),t("el-option",{key:"false",attrs:{label:e.$t("Disabled"),value:!1}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:e.$t("Text"),prop:"CUSTOM_SITE_TITLE_TEXT"}},[t("el-input",{model:{value:e.form["CUSTOM_SITE_TITLE_TEXT"],callback:function(t){e.$set(e.form,"CUSTOM_SITE_TITLE_TEXT",t)},expression:"form['CUSTOM_SITE_TITLE_TEXT']"}})],1),e._v(" "),t("el-divider",{attrs:{"content-position":"left"}},[t("h3",[e._v(e._s(e.$t("Custom Site Favicon")))])]),e._v(" "),t("el-form-item",[t("InfoBlock",{attrs:{title:e.$t("Use the specified image as the site icon (favicon)")}})],1),e._v(" "),t("el-form-item",{attrs:{label:e.$t("Enable"),prop:"CUSTOM_FAVICON_ENABLED"}},[t("el-select",{class:e.enableClass(e.form["CUSTOM_FAVICON_ENABLED"]),model:{value:e.form["CUSTOM_FAVICON_ENABLED"],callback:function(t){e.$set(e.form,"CUSTOM_FAVICON_ENABLED",t)},expression:"form['CUSTOM_FAVICON_ENABLED']"}},[t("el-option",{key:"true",attrs:{label:e.$t("Enabled"),value:!0}}),e._v(" "),t("el-option",{key:"false",attrs:{label:e.$t("Disabled"),value:!1}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:e.$t("Image"),prop:"CUSTOM_FAVICON_IMAGE_SRC"}},[t("el-upload",{ref:"CUSTOM_FAVICON_IMAGE_SRC",attrs:{drag:"",limit:2,multiple:!1,"auto-upload":!1,"show-file-list":!1,accept:[".jpg",".jpeg",".png",".gif","ico"],"on-change":e.onCustomFaviconChange}},[e.form.CUSTOM_FAVICON_IMAGE_SRC?t("div",{staticClass:"image-preview"},[t("img",{attrs:{src:e.form.CUSTOM_FAVICON_IMAGE_SRC}})]):[t("i",{staticClass:"fa fa-cloud-upload"}),e._v(" "),t("div",{staticClass:"el-upload__text"},[e._v(e._s(e.$t("Drag file to here, or click here to upload")))])]],2)],1),e._v(" "),t("el-divider",{attrs:{"content-position":"left"}},[t("h3",[e._v(e._s(e.$t("Custom Site Logo")))])]),e._v(" "),t("el-form-item",[t("InfoBlock",{attrs:{title:e.$t("Use the specified image as the system Logo")}})],1),e._v(" "),t("el-form-item",{attrs:{label:e.$t("Enable"),prop:"CUSTOM_LOGO_ENABLED"}},[t("el-select",{class:e.enableClass(e.form["CUSTOM_LOGO_ENABLED"]),model:{value:e.form["CUSTOM_LOGO_ENABLED"],callback:function(t){e.$set(e.form,"CUSTOM_LOGO_ENABLED",t)},expression:"form['CUSTOM_LOGO_ENABLED']"}},[t("el-option",{key:"true",attrs:{label:e.$t("Enabled"),value:!0}}),e._v(" "),t("el-option",{key:"false",attrs:{label:e.$t("Disabled"),value:!1}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:e.$t("Image"),prop:"CUSTOM_LOGO_IMAGE_SRC"}},[t("el-upload",{ref:"CUSTOM_LOGO_IMAGE_SRC",attrs:{drag:"",limit:2,multiple:!1,"auto-upload":!1,"show-file-list":!1,accept:[".jpg",".jpeg",".png",".gif"],"on-change":e.onCustomLogoChange}},[e.form.CUSTOM_LOGO_IMAGE_SRC?t("div",{staticClass:"image-preview"},[t("img",{attrs:{src:e.form.CUSTOM_LOGO_IMAGE_SRC}})]):[t("i",{staticClass:"fa fa-cloud-upload"}),e._v(" "),t("div",{staticClass:"el-upload__text"},[e._v(e._s(e.$t("Drag file to here, or click here to upload")))])]],2)],1),e._v(" "),t("el-divider",{attrs:{"content-position":"left"}},[t("h3",[e._v(e._s(e.$t("Notice Bar")))])]),e._v(" "),t("el-form-item",[t("InfoBlock",{attrs:{title:e.$t("Show a fixed alert bar at the top of all pages")}})],1),e._v(" "),t("el-form-item",{attrs:{label:e.$t("Enable"),prop:"NOTICE_BAR_ENABLED"}},[t("el-select",{class:e.enableClass(e.form["NOTICE_BAR_ENABLED"]),model:{value:e.form["NOTICE_BAR_ENABLED"],callback:function(t){e.$set(e.form,"NOTICE_BAR_ENABLED",t)},expression:"form['NOTICE_BAR_ENABLED']"}},[t("el-option",{key:"true",attrs:{label:e.$t("Enabled"),value:!0}}),e._v(" "),t("el-option",{key:"false",attrs:{label:e.$t("Disabled"),value:!1}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:e.$t("Text"),prop:"NOTICE_BAR_TEXT"}},[t("el-input",{attrs:{type:"textarea",autosize:{minRows:2}},model:{value:e.form["NOTICE_BAR_TEXT"],callback:function(t){e.$set(e.form,"NOTICE_BAR_TEXT",t)},expression:"form['NOTICE_BAR_TEXT']"}})],1),e._v(" "),t("el-form-item",{attrs:{label:e.$t("Color"),prop:"NOTICE_BAR_COLOR"}},[t("el-color-picker",{attrs:{predefine:e.colorPanel,"color-format":"rgb"},on:{"active-change":e.onNoticeBarColorChange},model:{value:e.form["NOTICE_BAR_COLOR"],callback:function(t){e.$set(e.form,"NOTICE_BAR_COLOR",t)},expression:"form['NOTICE_BAR_COLOR']"}})],1),e._v(" "),t("el-divider",{attrs:{"content-position":"left"}},[t("h3",[e._v(e._s(e.$t("Doc Link in Navi Bar")))])]),e._v(" "),t("el-form-item",[t("InfoBlock",{attrs:{title:e.$t("Show a Document Link to the specified URL in the Navi Bar")}})],1),e._v(" "),t("el-form-item",{attrs:{label:e.$t("Enable"),prop:"NAVI_DOC_LINK_ENABLED"}},[t("el-select",{class:e.enableClass(e.form["NAVI_DOC_LINK_ENABLED"]),model:{value:e.form["NAVI_DOC_LINK_ENABLED"],callback:function(t){e.$set(e.form,"NAVI_DOC_LINK_ENABLED",t)},expression:"form['NAVI_DOC_LINK_ENABLED']"}},[t("el-option",{key:"true",attrs:{label:e.$t("Enabled"),value:!0}}),e._v(" "),t("el-option",{key:"false",attrs:{label:e.$t("Disabled"),value:!1}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:e.$t("URL"),prop:"NAVI_DOC_LINK_URL"}},[t("el-input",{attrs:{type:"textarea",autosize:{minRows:2}},model:{value:e.form["NAVI_DOC_LINK_URL"],callback:function(t){e.$set(e.form,"NAVI_DOC_LINK_URL",t)},expression:"form['NAVI_DOC_LINK_URL']"}})],1),e._v(" "),t("el-divider",{attrs:{"content-position":"left"}},[t("h3",[e._v(e._s(e.$t("Monitor Data Report")))])]),e._v(" "),t("el-form-item",[t("InfoBlock",{attrs:{title:e.$t("Report the monitor data of DataFlux Func to the specified URL")}})],1),e._v(" "),t("el-form-item",{attrs:{label:e.$t("Enable"),prop:"MONITOR_DATA_UPLOAD_ENABLED"}},[t("el-select",{class:e.enableClass(e.form["MONITOR_DATA_UPLOAD_ENABLED"]),model:{value:e.form["MONITOR_DATA_UPLOAD_ENABLED"],callback:function(t){e.$set(e.form,"MONITOR_DATA_UPLOAD_ENABLED",t)},expression:"form['MONITOR_DATA_UPLOAD_ENABLED']"}},[t("el-option",{key:"true",attrs:{label:e.$t("Enabled"),value:!0}}),e._v(" "),t("el-option",{key:"false",attrs:{label:e.$t("Disabled"),value:!1}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:e.$t("URL"),prop:"MONITOR_DATA_UPLOAD_URL"}},[t("el-input",{attrs:{placeholder:"http(s)://<DataKit / DataWay Domain>:<Port>?token=<Token>",type:"textarea",autosize:{minRows:2}},model:{value:e.form["MONITOR_DATA_UPLOAD_URL"],callback:function(t){e.$set(e.form,"MONITOR_DATA_UPLOAD_URL",t)},expression:"form['MONITOR_DATA_UPLOAD_URL']"}})],1),e._v(" "),t("el-divider",{attrs:{"content-position":"left"}},[t("h3",[e._v(e._s(e.$t("Official Script Market")))])]),e._v(" "),t("el-form-item",[t("InfoBlock",{attrs:{title:e.$t("Show quick creation button for Official Script Market")}})],1),e._v(" "),t("el-form-item",{attrs:{label:e.$t("Enable"),prop:"OFFICIAL_SCRIPT_MARKET_ENABLED"}},[t("el-select",{class:e.enableClass(e.form["OFFICIAL_SCRIPT_MARKET_ENABLED"]),model:{value:e.form["OFFICIAL_SCRIPT_MARKET_ENABLED"],callback:function(t){e.$set(e.form,"OFFICIAL_SCRIPT_MARKET_ENABLED",t)},expression:"form['OFFICIAL_SCRIPT_MARKET_ENABLED']"}},[t("el-option",{key:"true",attrs:{label:e.$t("Enabled"),value:!0}}),e._v(" "),t("el-option",{key:"false",attrs:{label:e.$t("Disabled"),value:!1}})],1)],1),e._v(" "),e.showAdvancedConfigs?[t("el-divider",{attrs:{"content-position":"left"}},[t("h3",{staticClass:"text-bad"},[e._v(e._s(e.$t("Advanced Configs")))])]),e._v(" "),t("el-form-item",[t("InfoBlock",{attrs:{type:"error",title:e.$t("If you don't know the meaning of these configurations, please don't make any changes!")}})],1),e._v(" "),t("el-form-item",{attrs:{label:e.$t("DataFlux Func ID"),prop:"DATAFLUX_FUNC_ID"}},[t("el-input",{model:{value:e.form["DATAFLUX_FUNC_ID"],callback:function(t){e.$set(e.form,"DATAFLUX_FUNC_ID",t)},expression:"form['DATAFLUX_FUNC_ID']"}})],1)]:e._e(),e._v(" "),t("el-divider"),e._v(" "),t("el-form-item",[t("el-button",{on:{click:function(t){e.showAdvancedConfigs=!e.showAdvancedConfigs}}},[e._v(e._s(e.showAdvancedConfigs?e.$t("Hide Advanced Configs"):e.$t("Show Advanced Configs")))]),e._v(" "),t("div",{staticClass:"setup-right"},[t("el-button",{directives:[{name:"prevent-re-click",rawName:"v-prevent-re-click"}],attrs:{type:"primary"},on:{click:e.submitData}},[e._v(e._s(e.$t("Save and Refresh")))])],1)],1)],2)],1)]),e._v(" "),t("el-col",{staticClass:"hidden-md-and-down",attrs:{span:9}})],1)],1)],1)],1)},r=[],l=a("c7eb"),n=a("1da1"),s=(a("fb6a"),a("ac1f"),a("466d"),a("d3b7"),a("ddb0"),a("a434"),{name:"SystemConfig",components:{},watch:{$route:{immediate:!0,handler:function(e,t){var a=this;return Object(n["a"])(Object(l["a"])().mark((function e(){return Object(l["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.loadData();case 2:case"end":return e.stop()}}),e)})))()}}},methods:{loadData:function(){var e=this;return Object(n["a"])(Object(l["a"])().mark((function t(){return Object(l["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("loadSystemConfig");case 2:e.data=e.T.jsonCopy(e.$root.variableConfig),e.form=e.T.jsonCopy(e.$root.variableConfig),e.$store.commit("updateLoadStatus",!0);case 5:case"end":return t.stop()}}),t)})))()},submitData:function(){var e=this;return Object(n["a"])(Object(l["a"])().mark((function t(){return Object(l["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$refs.form.validate();case 3:t.next=8;break;case 5:return t.prev=5,t.t0=t["catch"](0),t.abrupt("return",console.error(t.t0));case 8:return t.next=10,e.setData();case 10:return t.abrupt("return",t.sent);case 11:case"end":return t.stop()}}),t,null,[[0,5]])})))()},setData:function(){var e=this;return Object(n["a"])(Object(l["a"])().mark((function t(){var a,o,r,n;return Object(l["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=null,t.t0=Object(l["a"])().keys(e.form);case 2:if((t.t1=t.t0()).done){t.next=16;break}if(o=t.t1.value,r=e.form[o],n=e.T.isNothing(r)?null:r,n!==e.data[o]){t.next=8;break}return t.abrupt("continue",2);case 8:return"_URL"===o.slice(-4)&&n&&!n.match(/^\w+:\/\//g)&&(n="http://".concat(n)),t.next=11,e.T.callAPI("post","/api/v1/system-configs/:id/do/set",{params:{id:o},body:{data:{value:n}}});case 11:if(a=t.sent,a&&a.ok){t.next=14;break}return t.abrupt("return");case 14:t.next=2;break;case 16:if(a&&!a.ok){t.next=20;break}return t.next=19,e.T.alert(e.$t("System Config Saved. Page will be refreshed soon..."),"success");case 19:location.reload();case 20:case"end":return t.stop()}}),t)})))()},enableClass:function(e){return!0===e?"config-enabled":!1===e?"config-disabled":""},onCustomBase64ImageChange:function(e,t,a){var o=this;t.length>1&&t.splice(0,1);var r=new FileReader;r.readAsDataURL(e.raw),r.onload=function(){o.form[a]=r.result}},onCustomFaviconChange:function(e,t){return this.onCustomBase64ImageChange(e,t,"CUSTOM_FAVICON_IMAGE_SRC")},onCustomLogoChange:function(e,t){return this.onCustomBase64ImageChange(e,t,"CUSTOM_LOGO_IMAGE_SRC")},onNoticeBarColorChange:function(e){this.form.NOTICE_BAR_COLOR=e}},computed:{colorPanel:function(){return["#FF0000","#FF6600","#3BA272","#359EC6","#5470C6","#9A60B4","#EA7CCC","#666666","#000000"]}},props:{},data:function(){return{data:{},form:{},showAdvancedConfigs:!1}}}),i=s,c=(a("671a"),a("2877")),_=a("88a7"),f=Object(c["a"])(i,o,r,!1,null,null,null);"function"===typeof _["default"]&&Object(_["default"])(f);t["default"]=f.exports},"671a":function(e,t,a){"use strict";a("0052")},"88a7":function(e,t,a){"use strict";var o=a("b298"),r=a.n(o);t["default"]=r.a},a434:function(e,t,a){"use strict";var o=a("23e7"),r=a("7b0b"),l=a("23cb"),n=a("5926"),s=a("07fa"),i=a("3511"),c=a("65f0"),_=a("8418"),f=a("083a"),m=a("1dde"),u=m("splice"),p=Math.max,d=Math.min;o({target:"Array",proto:!0,forced:!u},{splice:function(e,t){var a,o,m,u,C,v,O=r(this),E=s(O),A=l(e,E),T=arguments.length;for(0===T?a=o=0:1===T?(a=0,o=E-A):(a=T-2,o=d(p(n(t),0),E-A)),i(E+a-o),m=c(O,o),u=0;u<o;u++)C=A+u,C in O&&_(m,u,O[C]);if(m.length=o,a<o){for(u=A;u<E-o;u++)C=u+o,v=u+a,C in O?O[v]=O[C]:f(O,v);for(u=E;u>E-o+a;u--)f(O,u-1)}else if(a>o)for(u=E-o;u>A;u--)C=u+o-1,v=u+a-1,C in O?O[v]=O[C]:f(O,v);for(u=0;u<a;u++)O[u+A]=arguments[u+2];return O.length=E-o+a,m}})},b298:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"zh-CN":{"Custom Site Title":"自定义网站标题","Custom Site Favicon":"自定义网站 Favicon","Custom Site Logo":"自定义网站 Logo","Notice Bar":"顶部提示栏","Doc Link in Navi Bar":"导航栏文档链接","Monitor Data Report":"监控数据上报","Official Script Market":"官方脚本市场","Show Advanced Configs":"显示高级配置","Hide Advanced Configs":"隐藏高级配置","Advanced Configs":"高级配置","Enable":"启用","Text":"文案","Color":"颜色","Image":"图片","URL":"URL 地址","DataKit / DataWay URL":"DataKit / DataWay URL 地址","Drag file to here, or click here to upload":"将文件拖到此处，或点击此处上传","System Config Saved. Page will be refreshed soon...":"系统配置已保存，页面即将刷新...","Use the specified text as the site title":"使用指定的文案作为网站标题","Use the specified image as the site icon (favicon)":"使用指定的图片作为网站图标（favicon）","Use the specified image as the system Logo":"使用指定的图片作为网站 Logo","Show a fixed alert bar at the top of all pages":"在所有页面顶部展示固定的提示栏","Show a Document Link to the specified URL in the Navi Bar":"在导航栏展示文档链接，点击后可以跳转至指定的 URL 地址","Report the monitor data of DataFlux Func to the specified URL":"将 DataFlux Func 的监控数据上报到指定 URL","Show quick creation button for Official Script Market":"显示官方脚本市场快捷创建按钮","If you don\'t know the meaning of these configurations, please don\'t make any changes!":"如果您不知道这些配置的意义，请不要作任何修改！","Save and Refresh":"保存并刷新"}}'),delete e.options._Ctor}}}]);