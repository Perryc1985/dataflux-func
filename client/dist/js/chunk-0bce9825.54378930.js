(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bce9825"],{"0d62":function(e,t,i){"use strict";i.r(t);i("14d9"),i("b0c0");var o=function(){var e=this,t=e._self._c;return t("transition",{attrs:{name:"fade"}},[t("el-container",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.isLoaded,expression:"$store.state.isLoaded"}]},[t("el-header",{staticClass:"code-viewer",staticStyle:{height:"unset !important"}},[t("div",{staticClass:"code-viewer-action-left"},[t("code",{staticClass:"code-viewer-action-title"},[t("i",{staticClass:"fa fa-file-code-o"}),e._v("\n          "+e._s(e.data.id)+"\n          "),t("el-tooltip",{attrs:{content:e.$t("Script Setup"),placement:"bottom",enterable:!1}},[t("el-button",{attrs:{type:"text"},on:{click:function(t){return t.stopPropagation(),e.$router.push({name:"script-setup",params:{id:e.data.id}})}}},[t("i",{staticClass:"fa fa-fw fa-wrench"})])],1)],1)]),e._v(" "),t("div",{staticClass:"code-viewer-action-breaker hidden-lg-and-up"}),e._v(" "),t("div",{staticClass:"code-viewer-action-right"},[t("el-form",{attrs:{inline:!0}},[t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.conflictStatus,expression:"conflictStatus"}]},["otherTab"===e.conflictStatus?t("span",{staticClass:"text-bad"},[e._v(e._s(e.$t("Script is under editing in other tab, please wait...")))]):"otherClient"===e.conflictStatus?t("span",{staticClass:"text-bad"},[e._v(e._s(e.$t("Script is under editing in other client, please wait...")))]):e._e(),e._v("\n            　\n            　\n          ")]),e._v(" "),t("el-form-item",[t("el-select",{staticStyle:{width:"150px"},attrs:{"popper-class":"code-font",size:"mini",filterable:"",placeholder:e.$t("Select Target")},model:{value:e.selectedItemId,callback:function(t){e.selectedItemId=t},expression:"selectedItemId"}},e._l(e.selectableItems,(function(i){return t("el-option",{key:i.id,attrs:{label:i.name,value:i.id}},["todo"===i.type?t("el-tag",{staticClass:"select-todo-tag",attrs:{size:"mini",type:e.C.TODO_TYPE_MAP.get(i.todoType).tagType}},[t("i",{staticClass:"fa fa-fw",class:e.C.TODO_TYPE_MAP.get(i.todoType).icon}),e._v("\n                  "+e._s(i.todoType)+"\n                ")]):t("el-tag",{staticClass:"select-item-tag",attrs:{type:"info",size:"mini"}},[e._v(e._s(i.type))]),e._v("\n                "+e._s(i.name)+"\n              ")],1)})),1)],1),e._v(" "),e.conflictStatus?e._e():t("el-form-item",[t("el-tooltip",{attrs:{placement:"bottom",enterable:!1}},[t("div",{attrs:{slot:"content"},slot:"content"},[e._v("\n                "+e._s(e.$t("Shortcut"))+e._s(e.$t(":"))+" "),t("code",[e._v(e._s(e.T.getSuperKeyName())+" + E")])]),e._v(" "),t("el-button",{attrs:{type:"primary",plain:"",size:"mini"},on:{click:e.startEdit}},[t("i",{staticClass:"fa fa-fw",class:[e.C.CODE_VIEWR_USER_OPERATION_MAP.get(e.userOperation).icon]}),e._v(" "+e._s(e.C.CODE_VIEWR_USER_OPERATION_MAP.get(e.userOperation).name))])],1)],1),e._v(" "),t("el-form-item",[t("el-radio-group",{attrs:{size:"mini",plain:""},model:{value:e.showMode,callback:function(t){e.showMode=t},expression:"showMode"}},e._l(e.C.CODE_VIEWER_SHOW_MODE,(function(i,o){return t("el-tooltip",{key:i.key,attrs:{placement:"bottom",enterable:!1}},[t("div",{attrs:{slot:"content"},slot:"content"},[e._v("\n                  "+e._s(e.$t("Shortcut"))+e._s(e.$t(":"))+" "),t("code",[e._v(e._s(e.T.getSuperKeyName())+" + "+e._s(o+1))])]),e._v(" "),t("el-radio-button",{attrs:{label:i.key}},[e._v(e._s(i.name))])],1)})),1)],1),e._v(" "),t("el-form-item",[t("el-tooltip",{attrs:{content:e.$t("Download"),placement:"bottom",enterable:!1}},[t("el-button",{directives:[{name:"prevent-re-click",rawName:"v-prevent-re-click"}],attrs:{plain:"",size:"mini"},on:{click:e.download}},[e._v(e._s(e.$t("Download {type}",{type:e.C.CODE_VIEWER_SHOW_MODE_MAP.get(e.showMode).name})))])],1)],1),e._v(" "),t("el-form-item",[t("el-button-group",[t("el-tooltip",{attrs:{content:e.$t("Code Editor setting"),placement:"bottom",enterable:!1}},[t("el-button",{attrs:{plain:"",size:"mini"},on:{click:function(t){return e.$refs.codeEditorSetting.open()}}},[t("i",{staticClass:"fa fa-fw fa-cog"})])],1)],1)],1)],1)],1),e._v(" "),e.isLockedByOther?t("InfoBlock",{attrs:{type:e.isEditable?"warning":"error",title:e.$t("This Script is locked by other user ({user})",{user:e.lockedByUser})}}):"builtin"===e.data.sset_origin?t("InfoBlock",{attrs:{type:"warning",title:e.$t("This is a built-in Script, code will be reset when the system restarts")}}):t("InfoBlock",{attrs:{type:"warning",title:e.$t("Currently in view mode, click Edit button to enter edit mode")}})],1),e._v(" "),t("el-main",{style:e.$store.getters.codeMirrorSetting.style,attrs:{id:"editorContainer_CodeViewer"}},[t("textarea",{attrs:{id:"editor_CodeViewer"}}),e._v(" "),t("h1",{attrs:{id:"viewModeHint"}},[e._v(e._s(e.$t("View Mode")))])]),e._v(" "),t("CodeEditorSetting",{ref:"codeEditorSetting",attrs:{codeMirror:e.codeMirror}})],1)],1)},r=[],s=i("c7eb"),n=i("1da1"),a=(i("130f"),i("99af"),i("d3b7"),i("159b"),i("c08f")),c=i("bf68"),d=i("21a6"),l=i.n(d),u={name:"CodeViewer",components:{CodeEditorSetting:a["a"]},watch:{$route:{immediate:!0,handler:function(e,t){var i=this;return Object(n["a"])(Object(s["a"])().mark((function e(){return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.loadData();case 2:case"end":return e.stop()}}),e)})))()}},showMode:function(e){this.loadData()},codeMirrorTheme:function(e){this.codeMirror.setOption("theme",e)},selectedItemId:function(e){this.$store.commit("updateEditor_selectedItemId",e),this.highlightQuickSelectItem()},"$store.state.Editor_selectedItemId":function(e){this.selectedItemId!==e&&(this.selectedItemId=e)},"$store.state.shortcutAction":function(e){switch(e.action){case"codeViewer.showDraft":this.showMode="draft";break;case"codeViewer.showPublished":this.showMode="published";break;case"codeViewer.showDiff":this.showMode="diff";break;case"codeViewer.enterEditor":this.conflictStatus||this.startEdit();break}}},methods:{loadData:function(){var e=this;return Object(n["a"])(Object(s["a"])().mark((function t(){var i,o;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.T.callAPI_getOne("/api/v1/scripts/do/list",e.$route.params.id,{query:{_withCode:!0,_withCodeDraft:!0}});case 2:if(i=t.sent,i.ok&&i.data){t.next=6;break}return e.$router.push({name:"intro"}),t.abrupt("return");case 6:e.data=i.data,o=e.T.getDiffInfo(e.data.code,e.data.codeDraft),e.diffAddedCount=o.addedCount,e.diffRemovedCount=o.removedCount,e.$store.commit("updateLoadStatus",!0),setImmediate((function(){switch(e.codeMirror.setValue(""),e.showMode){case"draft":case"published":var t=e.C.CODE_VIEWER_SHOW_MODE_MAP.get(e.showMode).codeField;e.codeMirror.setValue(e.data[t]||""),e.T.setCodeMirrorMode(e.codeMirror,"python");break;case"diff":var i=e.data.title?" (".concat(e.data.title,")"):"",o="".concat(e.scriptId).concat(i),r=e.data.code||"",s=e.data.codeDraft||"",n=e.$t("Published Code"),a=e.$t("Saved Draft Code"),d=Object(c["createPatch"])(o,r,s,n,a);e.codeMirror.setValue(d),e.T.setCodeMirrorMode(e.codeMirror,"diff");break}if(e.codeMirror.refresh(),e.codeMirror.focus(),e.updateSelectableItems(),e.$store.state.Editor_selectedItemId)e.selectedItemId=e.$store.state.Editor_selectedItemId,e.highlightQuickSelectItem();else{var l=e.$store.state.Editor_scriptCursorMap[e.scriptId];e.T.jumpToCodeMirrorLine(e.codeMirror,l)}e.isReady=!0}));case 13:case"end":return t.stop()}}),t)})))()},startEdit:function(){this.$router.push({name:"code-editor",params:{id:this.data.id}})},updateSelectableItems:function(){this.selectableItems=this.common.getSelectableItems(this.data.codeDraft,this.scriptId)},_clearLineHighlight:function(e){try{this.codeMirror.removeLineClass(e,"text"),this.codeMirror.removeLineClass(e,"background"),this.codeMirror.removeLineClass(e,"wrap");var t=this.codeMirror.lineInfo(e).widgets;Array.isArray(t)&&t.forEach((function(e){e.clear()}))}catch(i){}},_setLineHighlight:function(e){if(!this.codeMirror)return null;if(e=e||{},e.textClass&&this.codeMirror.addLineClass(e.line,"text",e.textClass),e.backgroundClass&&this.codeMirror.addLineClass(e.line,"background",e.backgroundClass),e.wrapClass&&this.codeMirror.addLineClass(e.line,"wrap",e.wrapClass),e.lineWidgetConfig){var t=e.lineWidgetConfig,i=null;switch(t.type){}i&&this.codeMirror.addLineWidget(e.line,i)}return this.T.jumpToCodeMirrorLine(this.codeMirror,e.line),this.codeMirror.lineInfo(e.line)},updateHighlightLineConfig:function(e,t){var i=this.T.jsonCopy(this.$store.state.codeViewer_highlightedLineConfigMap)||{};if(null===t?i[this.scriptId]&&delete i[this.scriptId][e]:(i[this.scriptId]||(i[this.scriptId]={}),i[this.scriptId][e]=t),this.codeMirror){for(var o in this.highlightedLineInfoMap)if(this.highlightedLineInfoMap.hasOwnProperty(o)){var r=this.highlightedLineInfoMap[o];for(var s in r)if(r.hasOwnProperty(s)){var n=r[s];this._clearLineHighlight(n.handle.lineNo())}}var a={},c=i[this.scriptId]||{};for(var d in c)if(c.hasOwnProperty(d)){var l=c[d],u=this._setLineHighlight(l);u&&(a[this.scriptId]||(a[this.scriptId]={}),a[this.scriptId][d]=u)}this.highlightedLineInfoMap=a,this.$store.commit("updateCodeViewer_highlightedLineConfigMap",i)}},highlightQuickSelectItem:function(){this.$store.state.isLoaded&&this.codeMirror&&this.selectedItem&&(this.updateHighlightLineConfig("selectedFuncLine",null),this.updateHighlightLineConfig("selectedFuncLine",{line:this.selectedItem.line,marginType:"next",textClass:"highlight-text",backgroundClass:"current-func-background highlight-code-line-blink"}))},download:function(){var e=new Blob([this.codeMirror.getValue()],{type:"text/plain"}),t=null;switch(this.showMode){case"draft":t=this.data.id+".draft.py";break;case"published":t=this.data.id+".py";break;case"diff":t=this.data.id+".py.diff";break}l.a.saveAs(e,t)}},computed:{codeMirrorTheme:function(){return this.T.getCodeMirrorThemeName()},scriptId:function(){return this.T.isNothing(this.data)?this.$route.params.id:this.data.id},scriptSetId:function(){return this.scriptId.split("__")[0]},conflictStatus:function(){return this.$store.getters.getConflictStatus(this.$route)},lockedByUserId:function(){return this.data.sset_lockedByUserId||this.data.lockedByUserId},lockedByUser:function(){return this.data.sset_lockedByUserId?"".concat(this.data.sset_lockedByUserName||this.data.sset_lockedByUsername):this.data.lockedByUserId?"".concat(this.data.lockedByUserName||this.data.lockedByUsername):void 0},isLockedByMe:function(){return this.lockedByUserId===this.$store.getters.userId},isLockedByOther:function(){return this.lockedByUserId&&!this.isLockedByMe},isEditable:function(){return!!this.$store.getters.isAdmin||!this.isLockedByOther},userOperation:function(){return this.isEditable?"edit":"debug"},codeLines:function(){return(this.data.code||"").split("\n").length},codeDraftLines:function(){return(this.data.codeDraft||"").split("\n").length},selectedItem:function(){if(!this.selectedItemId)return null;for(var e=0;e<this.selectableItems.length;e++){var t=this.selectableItems[e];if(t.id===this.selectedItemId)return t}}},props:{},data:function(){return{isReady:!1,codeMirror:null,highlightedLineInfoMap:{},data:{},selectableItems:[],selectedItemId:"",showMode:"draft",diffAddedCount:0,diffRemovedCount:0}},mounted:function(){var e=this;setImmediate((function(){e.codeMirror=e.T.initCodeMirror("editor_CodeViewer"),e.codeMirror.setOption("theme",e.codeMirrorTheme),e.codeMirror.on("cursorActivity",(function(){if(e.isReady){var t={scriptId:e.scriptId,cursor:e.codeMirror.getCursor()};e.$store.commit("updateEditor_scriptCursorMap",t)}})),e.T.setCodeMirrorReadOnly(e.codeMirror,!0)}))},beforeDestroy:function(){this.T.destoryCodeMirror(this.codeMirror)}},h=u,f=(i("66d4"),i("c13d"),i("2877")),p=i("7f09"),m=i("2383"),g=Object(f["a"])(h,o,r,!1,null,"44e78bbb",null);"function"===typeof p["default"]&&Object(p["default"])(g),"function"===typeof m["default"]&&Object(m["default"])(g);t["default"]=g.exports},"21a6":function(e,t,i){(function(i){var o,r,s;(function(i,n){r=[],o=n,s="function"===typeof o?o.apply(t,r):o,void 0===s||(e.exports=s)})(0,(function(){"use strict";function t(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function o(e,t,i){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){c(o.response,t,i)},o.onerror=function(){console.error("could not download file")},o.send()}function r(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function s(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(o){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var n="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof i&&i.global===i?i:void 0,a=n.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=n.saveAs||("object"!=typeof window||window!==n?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(e,t,i){var a=n.URL||n.webkitURL,c=document.createElement("a");t=t||e.name||"download",c.download=t,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?s(c):r(c.href)?o(e,t,i):s(c,c.target="_blank")):(c.href=a.createObjectURL(e),setTimeout((function(){a.revokeObjectURL(c.href)}),4e4),setTimeout((function(){s(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,i,n){if(i=i||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,n),i);else if(r(e))o(e,i,n);else{var a=document.createElement("a");a.href=e,a.target="_blank",setTimeout((function(){s(a)}))}}:function(e,t,i,r){if(r=r||open("","_blank"),r&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof e)return o(e,t,i);var s="application/octet-stream"===e.type,c=/constructor/i.test(n.HTMLElement)||n.safari,d=/CriOS\/[\d]+/.test(navigator.userAgent);if((d||s&&c||a)&&"undefined"!=typeof FileReader){var l=new FileReader;l.onloadend=function(){var e=l.result;e=d?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location=e,r=null},l.readAsDataURL(e)}else{var u=n.URL||n.webkitURL,h=u.createObjectURL(e);r?r.location=h:location.href=h,r=null,setTimeout((function(){u.revokeObjectURL(h)}),4e4)}});n.saveAs=c.saveAs=c,e.exports=c}))}).call(this,i("c8ba"))},2383:function(e,t,i){"use strict";var o=i("25c2"),r=i.n(o);t["default"]=r.a},"25c2":function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"zh-CN":{"Script Setup":"脚本设置","Script is under editing in other tab, please wait...":"其他标签页或窗口正在编辑此脚本，请稍后...","Script is under editing in other client, please wait...":"其他客户端正在编辑此脚本，请稍后...","Shortcut":"快捷键","Select Target":"选择跳转目标","Download {type}":"下载{type}","Code Editor setting":"代码编辑器设置","This is a built-in Script, code will be reset when the system restarts":"这是一个内置脚本，代码会在系统重启后复位","This Script is locked by other user ({user})":"当前脚本被其他用户（{user}）锁定","Currently in view mode, click Edit button to enter edit mode":"当前为查看模式，点击「编辑」按钮进入编辑模式","View Mode":"查看模式","Published Code":"已发布的代码","Saved Draft Code":"已保存的草稿代码"}}'),delete e.options._Ctor}},2705:function(e,t,i){"use strict";i("39f7")},"322c":function(e,t,i){"use strict";i("ed75")},"39f7":function(e,t,i){},"5f56":function(e,t,i){},"66d4":function(e,t,i){"use strict";i("5f56")},"72e3":function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"zh-CN":{"Code Editor setting":"代码编辑器设置","Setting of Code Editor only effect current browser":"代码编辑器配置仅保存在当前浏览器，更换浏览器或电脑后需要重新配置","Theme":"主题","Font Size":"文字大小","Line Height":"行高","Reset to default":"恢复默认设置","Please input font size":"请输入文字大小","Font size should be a integer between 12 and 36":"文字大小设置范围为 12-36 px","Please input line height":"请输入行高","Line height should be a number between 1 and 2":"行高设置范围为 1-2 倍"}}'),delete e.options._Ctor}},"759b":function(e,t,i){"use strict";var o=i("72e3"),r=i.n(o);t["default"]=r.a},"7e33":function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"codeLines":"{n} line | {n} lines"}}'),delete e.options._Ctor}},"7f09":function(e,t,i){"use strict";var o=i("7e33"),r=i.n(o);t["default"]=r.a},"8afd":function(e,t,i){},c08f:function(e,t,i){"use strict";i("b0c0");var o=function(){var e=this,t=e._self._c;return t("el-drawer",{attrs:{modal:!1,visible:e.show,direction:"rtl"},on:{"update:visible":function(t){e.show=t}}},[t("div",{attrs:{slot:"title"},slot:"title"},[t("i",{staticClass:"fa fa-fw fa-cog"}),e._v(" "+e._s(e.$t("Code Editor setting"))+"\n  ")]),e._v(" "),t("div",{staticClass:"code-editor-setting"},[t("InfoBlock",{attrs:{type:"warning",title:e.$t("Setting of Code Editor only effect current browser")}}),e._v(" "),t("br"),e._v(" "),t("el-form",{ref:"form",attrs:{"label-width":"100px",model:e.form,rules:e.formRules}},[t("el-form-item",{attrs:{label:e.$t("Theme")}},[t("el-select",{model:{value:e.form.theme,callback:function(t){e.$set(e.form,"theme",t)},expression:"form.theme"}},e._l(e.C.CODE_MIRROR_THEME,(function(i){return t("el-option",{key:i.key,attrs:{label:e.$t(i.name),value:i.key}})})),1)],1),e._v(" "),t("el-form-item",{attrs:{label:e.$t("Font Size"),prop:"style.fontSize"}},[t("el-slider",{attrs:{min:12,max:36,step:1,"show-input":!0,"show-input-controls":!1,"show-tooltip":!1},model:{value:e.form.style.fontSize,callback:function(t){e.$set(e.form.style,"fontSize",e._n(t))},expression:"form.style.fontSize"}})],1),e._v(" "),t("el-form-item",{attrs:{label:e.$t("Line Height"),prop:"style.lineHeight"}},[t("el-slider",{attrs:{min:1,max:2,step:.1,"show-input":!0,"show-input-controls":!1,"show-tooltip":!1},model:{value:e.form.style.lineHeight,callback:function(t){e.$set(e.form.style,"lineHeight",e._n(t))},expression:"form.style.lineHeight"}})],1),e._v(" "),t("el-form-item",[t("div",{staticClass:"setup-right"},[t("el-button",{on:{click:e.resetDefault}},[e._v(e._s(e.$t("Reset to default")))])],1)])],1)],1)])},r=[],s=(i("130f"),{name:"CodeEditorSetting",components:{},watch:{form:{deep:!0,handler:function(e,t){var i=this,o=this.T.jsonCopy(this.form);this.$store.commit("updateCodeMirrorSetting",o),setImmediate((function(){i.codeMirror&&i.codeMirror.refresh()}))}}},methods:{open:function(){this.show=!0},resetDefault:function(){this.form=this.T.jsonCopy({theme:this.C.CODE_MIRROR_THEME_DEFAULT.key,style:this.$store.getters.DEFAULT_STATE.codeMirrorStyle})}},props:{codeMirror:Object},data:function(){var e=this.T.jsonCopy({theme:this.$store.getters.codeMirrorSetting.theme,style:{fontSize:parseInt(this.$store.getters.codeMirrorSetting.style.fontSize),lineHeight:this.$store.getters.codeMirrorSetting.style.lineHeight}});return{show:!1,form:e,formRules:{"style.fontSize":[{trigger:"change",message:this.$t("Please input font size"),required:!0},{trigger:"change",message:this.$t("Font size should be a integer between 12 and 36"),type:"integer",min:12,max:36}],"style.lineHeight":[{trigger:"change",message:this.$t("Please input line height"),required:!0},{trigger:"change",message:this.$t("Line height should be a number between 1 and 2"),type:"number",min:1,max:2}]}}}}),n=s,a=(i("2705"),i("322c"),i("2877")),c=i("759b"),d=Object(a["a"])(n,o,r,!1,null,"5e649849",null);"function"===typeof c["default"]&&Object(c["default"])(d);t["a"]=d.exports},c13d:function(e,t,i){"use strict";i("8afd")},ed75:function(e,t,i){}}]);