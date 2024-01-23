(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42fccfe6"],{"0014":function(t,e,r){"use strict";r("a4d3"),r("e01a");var i=function(){var t=this,e=t._self._c;return e("el-dialog",{attrs:{id:"ScriptSet",visible:t.show,"close-on-click-modal":!1,"close-on-press-escape":!1,width:"750px"},on:{"update:visible":function(e){t.show=e}}},[e("template",{slot:"title"},[t._v("\n    "+t._s(t.pageTitle)+" "),e("code",{staticClass:"text-main"},[t._v(t._s(t.data.title||t.data.id))])]),t._v(" "),e("el-container",{attrs:{direction:"vertical"}},[e("el-main",[e("div",{staticClass:"setup-form"},[e("el-form",{ref:"form",attrs:{"label-width":"135px",model:t.form,disabled:!t.isEditable,rules:t.formRules}},[t.isLockedByMe?e("el-form-item",[e("InfoBlock",{attrs:{type:"success",title:t.$t("This Script is locked by you")}})],1):t.isLockedByOther?e("el-form-item",[e("InfoBlock",{attrs:{type:t.isEditable?"warning":"error",title:t.$t("This Script is locked by other user ({user})",{user:t.lockedByUser})}})],1):t._e(),t._v(" "),e("el-form-item",{staticClass:"script-set-id-field",attrs:{label:"ID",prop:"id"}},[e("el-input",{attrs:{disabled:"setup"===t.pageMode,maxlength:"60"},model:{value:t.form.id,callback:function(e){t.$set(t.form,"id",e)},expression:"form.id"}}),t._v(" "),e("InfoBlock",{attrs:{title:t.$t("Script Set ID should be a prefix of the Script ID")}})],1),t._v(" "),e("el-form-item",{attrs:{label:t.$t("Title")}},[e("el-input",{attrs:{placeholder:t.$t("Optional"),maxlength:"200"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),e("el-form-item",{attrs:{label:t.$t("Description")}},[e("el-input",{attrs:{placeholder:t.$t("Optional"),type:"textarea",resize:"none",autosize:{minRows:2},maxlength:"5000"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),t._v(" "),"add"===t.pageMode?e("el-form-item",{attrs:{label:t.$t("Script Template")}},[e("el-select",{attrs:{filterable:"","filter-method":t.T.debounce(t.doFilter)},on:{change:t.showScriptTemplate},model:{value:t.templateScriptId,callback:function(e){t.templateScriptId=e},expression:"templateScriptId"}},[e("el-option-group",[e("el-option",{key:"_basicExample",attrs:{label:t.$t("Basic Example"),value:"_basicExample"}}),t._v(" "),e("el-option",{key:"_blankScript",attrs:{label:t.$t("Blank Script"),value:"_blankScript"}})],1),t._v(" "),t.templateScriptShowOptions.length>0?e("el-option-group",{attrs:{label:t.$t("From Example Script")}},t._l(t.templateScriptShowOptions,(function(r){return e("el-option",{key:r.id,attrs:{label:r.label,value:r.id}},[e("span",{staticClass:"example-script"},[t._v(t._s(r.label))])])})),1):t._e()],1),t._v(" "),t.templateScript?e("el-button",{attrs:{type:"text"},on:{click:t.showScriptTemplate}},[t._v(t._s(t.$t("Show Script Template")))]):t._e()],1):t._e(),t._v(" "),e("el-form-item",{staticClass:"setup-footer"},["setup"===t.pageMode?e("el-button",{staticClass:"danger-button float-left",on:{click:t.deleteData}},[t._v(t._s(t.$t("Delete")))]):t._e(),t._v(" "),e("el-button",{directives:[{name:"prevent-re-click",rawName:"v-prevent-re-click"}],attrs:{type:"primary"},on:{click:t.submitData}},[t._v(t._s(t.$t("Save")))])],1)],1)],1)]),t._v(" "),e("LongTextDialog",{ref:"longTextDialog",attrs:{title:t.$t("Script Template"),mode:"python"}})],1)],2)},a=[],o=r("c7eb"),n=r("1da1"),s=(r("498a"),r("d3b7"),r("159b"),r("a15b"),r("fb6a"),r("99af"),r("13d5"),r("b64b"),r("14d9"),r("d9e2"),r("ac1f"),r("466d"),r("b76c")),c={name:"ScriptSetup",components:{LongTextDialog:s["a"]},watch:{"form.id":function(t){(!t||t.length<this.ID_PREFIX.length||t.indexOf(this.ID_PREFIX)<0)&&(this.form.id=this.ID_PREFIX)}},methods:{doFilter:function(t){t=(t||"").toLowerCase().trim(),t&&"_"!==t[0]?this.templateScriptShowOptions=this.T.filterByKeywords(t,this.templateScripts):this.templateScriptShowOptions=this.templateScripts},loadData:function(t,e){var r=this;return Object(n["a"])(Object(o["a"])().mark((function i(){var a,n,s,c;return Object(o["a"])().wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(r.scriptSetId=t,e){i.next=18;break}return r.pageMode="add",r.T.jsonClear(r.form),r.data={},r.form.id=r.ID_PREFIX,i.next=8,r.T.callAPI_getAll("/api/v1/scripts/do/list",{query:{fields:["id","title","scriptSetId","sset_title","code"],_withCode:!0,scriptName:"example"}});case 8:if(a=i.sent,a&&a.ok){i.next=11;break}return i.abrupt("return");case 11:n=a.data,n.forEach((function(t){t.shortScriptId=t.id.split("__").slice(1).join("__"),t.label="".concat(t.sset_title||t.scriptSetId," / ").concat(t.title||t.shortScriptId),r.T.appendSearchFields(t,["sset_title","scriptSetId","title","shortScriptId"])})),r.templateScripts=n,r.templateScriptShowOptions=n,r.templateScriptMap=n.reduce((function(t,e){return t[e.id]=e,t}),{}),i.next=29;break;case 18:return r.pageMode="setup",r.data.id=e,i.next=22,r.T.callAPI_getOne("/api/v1/scripts/do/list",r.scriptId);case 22:if(s=i.sent,s&&s.ok){i.next=25;break}return i.abrupt("return");case 25:r.data=s.data,c={},Object.keys(r.form).forEach((function(t){return c[t]=r.data[t]})),r.form=c;case 29:r.show=!0;case 30:case"end":return i.stop()}}),i)})))()},submitData:function(){var t=this;return Object(n["a"])(Object(o["a"])().mark((function e(){var r;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$refs.form.validate();case 3:e.next=8;break;case 5:return e.prev=5,e.t0=e["catch"](0),e.abrupt("return",console.error(e.t0));case 8:r=null,e.t1=t.pageMode,e.next="add"===e.t1?12:"setup"===e.t1?16:20;break;case 12:return e.next=14,t.addData();case 14:return r=e.sent,e.abrupt("break",20);case 16:return e.next=18,t.modifyData();case 18:return r=e.sent,e.abrupt("break",20);case 20:r&&t.$store.commit("updateEditor_selectedItemId",null);case 21:case"end":return e.stop()}}),e,null,[[0,5]])})))()},addData:function(){var t=this;return Object(n["a"])(Object(o["a"])().mark((function e(){var r,i,a;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=t.T.jsonCopy(t.form),e.t0=t.templateScriptId,e.next="_basicExample"===e.t0?4:"_blankScript"===e.t0?6:8;break;case 4:return delete r.codeDraft,e.abrupt("break",11);case 6:return r.codeDraft="",e.abrupt("break",11);case 8:return i=t.templateScriptMap[t.templateScriptId],r.codeDraft=i&&i.code?i.code:"",e.abrupt("break",11);case 11:return e.next=13,t.T.callAPI("post","/api/v1/scripts/do/add",{body:{data:r},alert:{okMessage:t.$t("Script created")}});case 13:if(a=e.sent,a&&a.ok){e.next=16;break}return e.abrupt("return");case 16:return t.$store.commit("updateScriptListSyncTime"),t.show=!1,t.$router.push({name:"code-editor",params:{id:a.data.id}}),e.abrupt("return",a.data.id);case 20:case"end":return e.stop()}}),e)})))()},modifyData:function(){var t=this;return Object(n["a"])(Object(o["a"])().mark((function e(){var r,i;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.T.jsonCopy(t.form),delete r.id,e.next=4,t.T.callAPI("post","/api/v1/scripts/:id/do/modify",{params:{id:t.scriptId},body:{data:r},alert:{okMessage:t.$t("Script saved")}});case 4:if(i=e.sent,i&&i.ok){e.next=7;break}return e.abrupt("return");case 7:return t.$store.commit("updateScriptListSyncTime"),t.show=!1,e.abrupt("return",t.scriptId);case 10:case"end":return e.stop()}}),e)})))()},deleteData:function(){var t=this;return Object(n["a"])(Object(o["a"])().mark((function e(){var r;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.T.confirm(t.$t("Are you sure you want to delete the Script?"));case 2:if(e.sent){e.next=4;break}return e.abrupt("return");case 4:return t.T.jumpDeletedEntity(t.scriptId),e.next=7,t.T.callAPI("/api/v1/scripts/:id/do/delete",{params:{id:t.scriptId},alert:{okMessage:t.$t("Script deleted")}});case 7:if(r=e.sent,r&&r.ok){e.next=10;break}return e.abrupt("return");case 10:t.$store.commit("updateScriptListSyncTime"),t.show=!1;case 12:case"end":return e.stop()}}),e)})))()},showScriptTemplate:function(){this.templateScript&&this.$refs.longTextDialog.update(this.templateScript)}},computed:{ID_PREFIX:function(){return"".concat(this.scriptSetId,"__")},pageTitle:function(){var t={setup:this.$t("Setup Script"),add:this.$t("Add Script")};return t[this.pageMode]},scriptId:function(){switch(this.pageMode){case"add":return this.form.id;case"setup":return this.data.id}},lockedByUserId:function(){return this.data.sset_lockedByUserId||this.data.lockedByUserId},lockedByUser:function(){return this.data.sset_lockedByUserId?"".concat(this.data.sset_lockedByUserName||this.data.sset_lockedByUsername):this.data.lockedByUserId?"".concat(this.data.lockedByUserName||this.data.lockedByUsername):void 0},isLockedByMe:function(){return this.lockedByUserId===this.$store.getters.userId},isLockedByOther:function(){return this.lockedByUserId&&!this.isLockedByMe},isEditable:function(){return!!this.$store.getters.isAdmin||!this.isLockedByOther},templateScript:function(){return this.templateScriptId&&!this.T.isNothing(this.templateScriptMap)&&this.templateScriptMap[this.templateScriptId]&&this.templateScriptMap[this.templateScriptId].code||""}},props:{},data:function(){var t=this;return{show:!1,pageMode:null,scriptSetId:"",data:{},templateScriptId:"_basicExample",templateScripts:[],templateScriptShowOptions:[],templateScriptMap:{},form:{id:null,title:null,description:null,codeDraft:null},formRules:{id:[{trigger:"blur",message:this.$t("Please input ID"),required:!0},{trigger:"change",message:this.$t("Only alphabets, numbers and underscore are allowed"),pattern:/^[a-zA-Z0-9_]*$/g},{trigger:"change",message:this.$t("Cannot not starts with a number"),pattern:/^[^0-9]/g},{trigger:"change",validator:function(e,r,i){if(r&&r.indexOf(t.ID_PREFIX)<0||r===t.ID_PREFIX){var a=t.$t('This Script ID should starts with "{prefix}"',{scriptSetId:t.scriptSetId,prefix:t.ID_PREFIX});return i(new Error(a))}if(!r.slice(t.ID_PREFIX.length).match(/^[^0-9]/g)){var o=t.$t("Cannot not starts with a number");return i(new Error(o))}return i()}}]}}}},l=c,p=(r("98e4"),r("2877")),d=r("6477"),u=r("5034"),f=r("4929"),m=Object(p["a"])(l,i,a,!1,null,"1a512e0a",null);"function"===typeof d["default"]&&Object(d["default"])(m),"function"===typeof u["default"]&&Object(u["default"])(m),"function"===typeof f["default"]&&Object(f["default"])(m);e["a"]=m.exports},"0797":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-CN":{"Download as a text file":"作为文本文件下载"}}'),delete t.options._Ctor}},"158a":function(t,e,r){},"21a6":function(t,e,r){(function(r){var i,a,o;(function(r,n){a=[],i=n,o="function"===typeof i?i.apply(e,a):i,void 0===o||(t.exports=o)})(0,(function(){"use strict";function e(t,e){return"undefined"==typeof e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function i(t,e,r){var i=new XMLHttpRequest;i.open("GET",t),i.responseType="blob",i.onload=function(){c(i.response,e,r)},i.onerror=function(){console.error("could not download file")},i.send()}function a(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function o(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(i){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var n="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof r&&r.global===r?r:void 0,s=n.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=n.saveAs||("object"!=typeof window||window!==n?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(t,e,r){var s=n.URL||n.webkitURL,c=document.createElement("a");e=e||t.name||"download",c.download=e,c.rel="noopener","string"==typeof t?(c.href=t,c.origin===location.origin?o(c):a(c.href)?i(t,e,r):o(c,c.target="_blank")):(c.href=s.createObjectURL(t),setTimeout((function(){s.revokeObjectURL(c.href)}),4e4),setTimeout((function(){o(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,r,n){if(r=r||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(e(t,n),r);else if(a(t))i(t,r,n);else{var s=document.createElement("a");s.href=t,s.target="_blank",setTimeout((function(){o(s)}))}}:function(t,e,r,a){if(a=a||open("","_blank"),a&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof t)return i(t,e,r);var o="application/octet-stream"===t.type,c=/constructor/i.test(n.HTMLElement)||n.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||o&&c||s)&&"undefined"!=typeof FileReader){var p=new FileReader;p.onloadend=function(){var t=p.result;t=l?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=t:location=t,a=null},p.readAsDataURL(t)}else{var d=n.URL||n.webkitURL,u=d.createObjectURL(t);a?a.location=u:location.href=u,a=null,setTimeout((function(){d.revokeObjectURL(u)}),4e4)}});n.saveAs=c.saveAs=c,t.exports=c}))}).call(this,r("c8ba"))},"27c5":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-CN":{"Add Script":"添加脚本","Setup Script":"配置脚本","Script Template":"脚本模板","Show Script Template":"显示脚本模板","Basic Example":"基础示例","Blank Script":"空白脚本","From Example Script":"来自示例脚本","Script Set ID should be a prefix of the Script ID":"脚本集 ID 应作为脚本 ID 的前缀","Please input ID":"请输入 ID","Only alphabets, numbers and underscore are allowed":"只能包含大小写英文、数字及下划线","Cannot not starts with a number":"不得以数字开头","This Script ID should starts with \\"{prefix}\\"":"本脚本 ID 必须以 \\"{prefix}\\" 开头","Script created":"脚本已创建","Script saved":"脚本已保存","Script deleted":"脚本已删除","Are you sure you want to delete the Script?":"是否确认删除此脚本？","This Script is locked by you":"当前脚本已被您锁定","This Script is locked by other user ({user})":"当前脚本已被其他用户（{user}）锁定"}}'),delete t.options._Ctor}},"2cda":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-HK":{"Add Script":"添加腳本","Are you sure you want to delete the Script?":"是否確認刪除此腳本？","Basic Example":"基礎示例","Blank Script":"空白腳本","Cannot not starts with a number":"不得以數字開頭","From Example Script":"來自示例腳本","Only alphabets, numbers and underscore are allowed":"只能包含大小寫英文、數字及下劃線","Please input ID":"請輸入 ID","Script Set ID should be a prefix of the Script ID":"腳本集 ID 應作為腳本 ID 的前綴","Script Template":"腳本模板","Script created":"腳本已創建","Script deleted":"腳本已刪除","Script saved":"腳本已保存","Setup Script":"配置腳本","Show Script Template":"顯示腳本模板","This Script ID should starts with \\"{prefix}\\"":"本腳本 ID 必須以 \\"{prefix}\\" 開頭","This Script is locked by other user ({user})":"當前腳本已被其他用户（{user}）鎖定","This Script is locked by you":"當前腳本已被您鎖定"}}'),delete t.options._Ctor}},"308c":function(t,e,r){"use strict";var i=r("c59f"),a=r.n(i);e["default"]=a.a},4929:function(t,e,r){"use strict";var i=r("91de"),a=r.n(i);e["default"]=a.a},4967:function(t,e,r){},5034:function(t,e,r){"use strict";var i=r("2cda"),a=r.n(i);e["default"]=a.a},6477:function(t,e,r){"use strict";var i=r("27c5"),a=r.n(i);e["default"]=a.a},7094:function(t,e,r){"use strict";var i=r("e254"),a=r.n(i);e["default"]=a.a},"7b0b4":function(t,e,r){"use strict";var i=r("0797"),a=r.n(i);e["default"]=a.a},"91de":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-TW":{"Add Script":"新增指令碼","Are you sure you want to delete the Script?":"是否確認刪除此指令碼？","Basic Example":"基礎示例","Blank Script":"空白指令碼","Cannot not starts with a number":"不得以數字開頭","From Example Script":"來自示例指令碼","Only alphabets, numbers and underscore are allowed":"只能包含大小寫英文、數字及下劃線","Please input ID":"請輸入 ID","Script Set ID should be a prefix of the Script ID":"指令碼集 ID 應作為指令碼 ID 的字首","Script Template":"指令碼模板","Script created":"指令碼已建立","Script deleted":"指令碼已刪除","Script saved":"指令碼已儲存","Setup Script":"配置指令碼","Show Script Template":"顯示指令碼模板","This Script ID should starts with \\"{prefix}\\"":"本指令碼 ID 必須以 \\"{prefix}\\" 開頭","This Script is locked by other user ({user})":"當前指令碼已被其他使用者（{user}）鎖定","This Script is locked by you":"當前指令碼已被您鎖定"}}'),delete t.options._Ctor}},"98e4":function(t,e,r){"use strict";r("4967")},b028:function(t,e,r){"use strict";r("cf1c")},b76c:function(t,e,r){"use strict";var i=function(){var t=this,e=t._self._c;return e("el-dialog",{attrs:{id:"LongTextDialog",visible:t.show,"close-on-click-modal":!1,width:"70%"},on:{"update:visible":function(e){t.show=e}}},[e("template",{slot:"title"},[t._v("\n    "+t._s(t.title)+"\n    "),e("span",{staticClass:"text-info press-esc-to-close-tip"},[t._v(t._s(t.$t("Press ESC to close")))])]),t._v(" "),e("div",[t.showDownload&&t.fileName&&t.content?e("div",{staticClass:"download-link"},[e("el-link",{attrs:{type:"primary"},on:{click:t.download}},[t._v("\n        "+t._s(t.$t("Download as a text file"))+"\n        "),e("i",{staticClass:"fa fa-fw fa-download"})])],1):t._e(),t._v(" "),e("textarea",{attrs:{id:"longTextDialogContent"}})])],2)},a=[],o=(r("130f"),r("21a6")),n=r.n(o),s={name:"LongTextDialog",components:{},watch:{},methods:{update:function(t,e){var r=this;this.codeMirror&&this.codeMirror.setValue(""),this.content=t,this.fileName=(e||"dump")+".txt",this.show=!0,setImmediate((function(){if(!r.codeMirror){var t={mode:r.mode||"text"};r.codeMirror=r.T.initCodeMirror("longTextDialogContent",t),r.codeMirror.setOption("theme",r.T.getCodeMirrorThemeName()),r.T.setCodeMirrorReadOnly(r.codeMirror,!0)}r.codeMirror.setValue(r.content||""),r.codeMirror.refresh(),r.codeMirror.focus()}))},download:function(){var t=new Blob([this.content],{type:"text/plain"}),e=this.fileName;n.a.saveAs(t,e)}},computed:{},props:{title:String,mode:String,showDownload:Boolean},data:function(){return{show:!1,fileName:null,content:null,codeMirror:null}},beforeDestroy:function(){this.T.destoryCodeMirror(this.codeMirror)}},c=s,l=(r("b028"),r("da7d"),r("2877")),p=r("7b0b4"),d=r("7094"),u=r("308c"),f=Object(l["a"])(c,i,a,!1,null,"fc951d86",null);"function"===typeof p["default"]&&Object(p["default"])(f),"function"===typeof d["default"]&&Object(d["default"])(f),"function"===typeof u["default"]&&Object(u["default"])(f);e["a"]=f.exports},c59f:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-TW":{"Download as a text file":"作為文字檔案下載"}}'),delete t.options._Ctor}},cf1c:function(t,e,r){},da7d:function(t,e,r){"use strict";r("158a")},e254:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-HK":{"Download as a text file":"作為文本文件下載"}}'),delete t.options._Ctor}}}]);