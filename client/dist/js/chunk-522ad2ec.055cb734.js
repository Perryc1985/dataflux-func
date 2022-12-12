(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-522ad2ec"],{"16b6":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-CN":{"Publish Script Set":"发布脚本集","Delete Script Set":"删除脚本集","Install Script Set":"脚本集详情","Upgrade Script Set":"脚本集详情","Local":"本地","Remote":"远端","Requirements":"依赖项","Publisher":"发布者","Publish Time":"发布时间","Not Published":"尚未发布","Not Installed":"尚未安装","No Corresponding Script Set":"无对应脚本集","Edited":"已修改","New Version":"新版本","Publish Note":"发布说明","This Script Set is not from current Script Market":"此脚本集并非来自本脚本市场","This Script Set is edited locally":"此脚本集已在本地被修改","Please input note":"请输入发布说明","Are you sure you want to publish the Script Set to the Script Market?":"是否确认发布脚本集到此脚本市场？","Are you sure you want to delete the Script Set from the Script Market?":"是否确认从脚本市场删除此脚本集？","Are you sure you want to install the Script Set?":"是否确认安装此脚本集？","Are you sure you want to upgrade the Script Set?":"是否确认升级此脚本集？","This Script Market is locked by you":"当前脚本市场已被您锁定","This Script Market is locked by other user ({user})":"当前脚本市场已被其他用户（{user}）锁定","Script Set published to the Script Market":"脚本集已发布至脚本市场","Script Set deleted from the Script Market":"脚本集已从脚本市场删除","Script Set installed, new Script Set is in effect immediately":"脚本集已安装，新脚本集立即生效","Script Set upgraded, new Script Set is in effect immediately":"脚本集已升级，新脚本集立即生效","This Script Set requires 3rd party Python packages, do you want to open PIP tool now?":"此脚本集依赖第三方 Python 包，是否现在前往PIP工具？","No Script Set has ever been published":"尚未发布过任何脚本集到脚本市场","FoundScriptSetCount":"找不到脚本集 | 共找到 {n} 个脚本集 | 共找到 {n} 个脚本集","ScriptCount":"不包含任何脚本 | 包含 {n} 个脚本 | 包含 {n} 个脚本","Processing...":"正在处理..."}}'),delete t.options._Ctor}},3399:function(t,e,r){},5966:function(t,e,r){"use strict";r("3399")},"5afd":function(t,e,r){"use strict";r.r(e);r("a4d3"),r("e01a");var i=function(){var t=this,e=t._self._c;return e("transition",{attrs:{name:"fade"}},[t.$store.state.isLoaded?t._e():e("PageLoading"),t._v(" "),e("el-container",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.isLoaded,expression:"$store.state.isLoaded"}],attrs:{direction:"vertical"}},[e("el-header",{attrs:{height:"60px"}},[e("div",{staticClass:"page-header"},[e("span",[t._v("\n          "+t._s(t.$t("Script Market"))+"\n          "),e("code",{staticClass:"text-main script-market-name"},[t._v(t._s(t.common.getScriptMarketName(t.scriptMarket)))])]),t._v(" "),t.T.notNothing(t.data)?e("div",{staticClass:"header-control"},[e("span",{staticClass:"text-main"},[t._v(t._s(t.$tc("FoundScriptSetCount",t.filteredData.length)))]),t._v("\n          　\n          "),e("el-input",{staticClass:"filter-input",attrs:{placeholder:t.$t("Filter"),size:"small"},model:{value:t.filterTEXT,callback:function(e){t.filterTEXT=e},expression:"filterTEXT"}},[t.filterTEXT?e("i",{staticClass:"el-input__icon el-icon-close text-main",attrs:{slot:"prefix"},on:{click:function(e){t.filterTEXT=""}},slot:"prefix"}):t._e()])],1):t._e()])]),t._v(" "),t.isLockedByMe||t.isLockedByOther?e("div",{staticStyle:{padding:"0 30px"}},[t.isLockedByMe?e("InfoBlock",{attrs:{type:"success",title:t.$t("This Script Market is locked by you")}}):t.isLockedByOther?e("InfoBlock",{attrs:{type:t.isAccessible?"warning":"error",title:t.$t("This Script Market is locked by other user ({user})",{user:t.lockedByUser})}}):t._e()],1):t._e(),t._v(" "),e("el-main",{staticClass:"common-table-container"},[t.T.isNothing(t.filteredData)?e("div",{staticClass:"no-data-area"},[t.T.notNothing(t.filterTEXT)?e("h1",{staticClass:"no-data-title"},[e("i",{staticClass:"fa fa-fw fa-search"}),t._v(t._s(t.$t("No matched data found")))]):e("h1",{staticClass:"no-data-title"},[e("i",{staticClass:"fa fa-fw fa-info-circle"}),t._v(t._s(t.$t("No Script Set has ever been published")))]),t._v(" "),e("p",{staticClass:"no-data-tip"},[t._v("\n          发布后的脚本集将在此展示，可以挑选需要的脚本集安装到本地\n        ")])]):e("el-table",{staticClass:"common-table",attrs:{height:"100%",data:t.filteredData,"row-class-name":t.T.getHighlightRowCSS}},[t.hasLocalMarker?e("el-table-column",{attrs:{width:"100",align:"right"},scopedSlots:t._u([{key:"default",fn:function(r){return[r.row.isLocalEdited||t.scriptMarket.isAdmin&&r.row.isUpdated?e("el-tag",{attrs:{effect:"dark",type:"danger",size:"mini"}},[t._v("\n              "+t._s(t.$t("Edited"))+"\n            ")]):t._e()]}}],null,!1,1473263384)}):t._e(),t._v(" "),e("el-table-column",{scopedSlots:t._u([{key:"header",fn:function(r){return[e("i",{staticClass:"fa fa-fw fa-home"}),t._v("\n            "+t._s(t.$t("Local"))+"\n          ")]}},{key:"default",fn:function(r){return[r.row.local?[e("strong",{staticClass:"script-set-name"},[t._v("\n                "+t._s(r.row.local.title||r.row.local.id)+"\n              ")]),t._v(" "),e("div",[e("span",{staticClass:"text-info"},[t._v("ID")]),t._v("\n                 "),e("code",{staticClass:"text-main"},[t._v(t._s(r.row.local.id))]),t._v(" "),e("br"),t._v("\n                　"+t._s(t.$tc("ScriptCount",(r.row.local.scripts||[]).length))+"\n              ")])]:[t.scriptMarket.isAdmin?[e("i",{staticClass:"text-info"},[t._v(t._s(t.$t("No Corresponding Script Set")))])]:[e("i",{staticClass:"text-info"},[t._v(t._s(t.$t("Not Installed")))])]]]}}])}),t._v(" "),e("el-table-column",{attrs:{width:"120"},scopedSlots:t._u([{key:"default",fn:function(r){return[r.row.isConflict?e("el-tooltip",{attrs:{effect:"dark",content:t.$t("This Script Set is not from current Script Market"),placement:"top",enterable:!1}},[e("i",{staticClass:"fa fa-fw fa-ban fa-2x text-bad"})]):r.row.isLocalEdited?e("el-tooltip",{attrs:{effect:"dark",content:t.$t("This Script Set is edited locally"),placement:"top",enterable:!1}},[e("i",{staticClass:"fa fa-fw fa-pencil-square-o fa-2x text-bad"})]):t.scriptMarket.isAdmin&&r.row.local?e("span",{class:r.row.isIdMatched?"text-main":"text-info"},t._l([.3,.5,1],(function(t){return e("i",{staticClass:"fa fa-angle-right fa-2x",style:{opacity:t}})})),0):!t.scriptMarket.isAdmin&&r.row.remote?e("span",{class:r.row.isIdMatched?"text-main":"text-info"},t._l([1,.5,.3],(function(t){return e("i",{staticClass:"fa fa-angle-left fa-2x",style:{opacity:t}})})),0):t._e()]}}])}),t._v(" "),t.hasRemoteMarker?e("el-table-column",{attrs:{width:"100",align:"right"},scopedSlots:t._u([{key:"default",fn:function(r){return[r.row.remote&&r.row.isUpdated&&!r.row.isConflict?e("el-tag",{attrs:{effect:"dark",type:"danger",size:"mini"}},[t._v("\n              "+t._s(t.$t("New Version"))+"\n            ")]):t._e()]}}],null,!1,642821072)}):t._e(),t._v(" "),e("el-table-column",{scopedSlots:t._u([{key:"header",fn:function(r){return[e("i",{staticClass:"fa fa-fw fa-cloud"}),t._v("\n            "+t._s(t.$t("Remote"))+"\n          ")]}},{key:"default",fn:function(r){return[r.row.remote?[e("strong",{staticClass:"script-set-name"},[t._v("\n                "+t._s(r.row.remote.title||r.row.remote.id)+"\n              ")]),t._v(" "),e("div",[e("span",{staticClass:"text-info"},[t._v("ID")]),t._v("\n                 "),e("code",{staticClass:"text-main"},[t._v(t._s(r.row.remote.id))]),t._v(" "),e("br"),t._v("\n                　"+t._s(t.$tc("ScriptCount",(r.row.remote.scripts||[]).length))+"\n              ")])]:[t.scriptMarket.isAdmin?e("i",{staticClass:"text-info"},[t._v(t._s(t.$t("Not Published")))]):e("i",{staticClass:"text-info"},[t._v(t._s(t.$t("No Corresponding Script Set")))])]]}}])}),t._v(" "),e("el-table-column",{attrs:{label:t.$t("Publisher"),width:"200"},scopedSlots:t._u([{key:"default",fn:function(r){return[r.row.remote?[e("span",[t._v(t._s(r.row.remote._exportUser))])]:t._e()]}}])}),t._v(" "),e("el-table-column",{attrs:{label:t.$t("Publish Time"),width:"200"},scopedSlots:t._u([{key:"default",fn:function(r){return[r.row.remote?[e("span",[t._v(t._s(t._f("datetime")(r.row.remote._exportTime)))]),t._v(" "),e("br"),t._v(" "),e("span",{staticClass:"text-info"},[t._v(t._s(t._f("fromNow")(r.row.remote._exportTime)))])]:t._e()]}}])}),t._v(" "),e("el-table-column",{attrs:{align:"right",width:"120"},scopedSlots:t._u([{key:"default",fn:function(r){return[t.scriptMarket.isAdmin?[e("el-link",{attrs:{disabled:!t.isAccessible||!r.row.local},on:{click:function(e){return t.openDialog(r.row.local,"publish")}}},[t._v(t._s(t.$t("Publish")))]),t._v(" "),e("el-link",{attrs:{disabled:!t.isAccessible||!r.row.remote},on:{click:function(e){return t.openDialog(r.row.remote,"delete")}}},[t._v(t._s(t.$t("Delete")))])]:r.row.remote?[r.row.local?e("el-link",{attrs:{disabled:!t.isAccessible||r.row.isConflict||r.row.isLocalEdited},on:{click:function(e){return t.openDialog(r.row.remote,"upgrade")}}},[t._v(t._s(t.$t("Upgrade")))]):e("el-link",{attrs:{disabled:!t.isAccessible||r.row.isConflict||r.row.isLocalEdited},on:{click:function(e){return t.openDialog(r.row.remote,"install")}}},[t._v(t._s(t.$t("Install")))])]:t._e()]}}])})],1)],1),t._v(" "),e("el-dialog",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.isProcessing,expression:"isProcessing",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"operation-detail",attrs:{title:t.operationDialogTitle,visible:t.showOperation,"close-on-click-modal":!1,"close-on-press-escape":!1,"element-loading-spinner":"el-icon-loading","element-loading-text":t.$t("Processing...")},on:{"update:visible":function(e){t.showOperation=e}}},[e("el-form",{ref:"form",attrs:{"label-width":"115px",model:t.form,rules:t.formRules}},[e("el-form-item",{attrs:{label:t.$t("Name")}},[e("el-input",{attrs:{disabled:"",value:t.scriptSetToOperate.title}})],1),t._v(" "),e("el-form-item",{attrs:{label:"ID"}},[e("el-input",{attrs:{disabled:"",value:t.scriptSetToOperate.id}})],1),t._v(" "),t.T.notNothing(t.scriptSetToOperate.description)?e("el-form-item",{attrs:{label:t.$t("Description")}},[e("el-input",{attrs:{disabled:"",type:"textarea",resize:"none",autosize:{minRows:2},value:t.scriptSetToOperate.description}})],1):t._e(),t._v(" "),t.T.notNothing(t.scriptSetToOperate.requirements)?e("el-form-item",{attrs:{label:t.$t("Requirements")}},[e("el-input",{attrs:{disabled:"",type:"textarea",resize:"none",autosize:{minRows:2},value:t.scriptSetToOperate.requirements}})],1):t._e(),t._v(" "),t.isWriteOperation?e("el-form-item",{attrs:{label:t.$t("Publish Note"),prop:"note"}},[e("el-input",{attrs:{type:"textarea",resize:"none",autosize:{minRows:2}},model:{value:t.form.note,callback:function(e){t.$set(t.form,"note",e)},expression:"form.note"}})],1):t._e()],1),t._v(" "),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{size:"small"},on:{click:function(e){t.showOperation=!1}}},[t._v(t._s(t.$t("Cancel")))]),t._v(" "),e("el-button",{attrs:{size:"small",type:"primary",loading:t.isProcessing},on:{click:function(e){return t.submitData(t.operation)}}},[t._v(t._s(t.operationButtonTitle))])],1)],1)],1)],1)},a=[],s=r("c7eb"),o=r("1da1"),n=(r("13d5"),r("d3b7"),r("159b"),r("07ac"),r("4e82"),r("498a"),{name:"ScriptMarketDetail",components:{},watch:{$route:{immediate:!0,handler:function(t,e){var r=this;return Object(o["a"])(Object(s["a"])().mark((function t(){return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.loadData();case 2:case"end":return t.stop()}}),t)})))()}}},methods:{loadData:function(){var t=this;return Object(o["a"])(Object(s["a"])().mark((function e(){var r,i,a;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.T.callAPI_getOne("/api/v1/script-markets/do/list",t.$route.params.id);case 2:if(r=e.sent,r&&r.ok){e.next=5;break}return e.abrupt("return");case 5:return t.scriptMarket=r.data,e.next=8,t.T.callAPI_get("/api/v1/script-markets/:id/script-sets/do/list",{params:{id:t.$route.params.id}});case 8:if(r=e.sent,r&&r.ok){e.next=11;break}return e.abrupt("return",t.$router.push({name:"script-market-list"}));case 11:return i=r.data.reduce((function(t,e){return t[e.id]={remote:e},t}),{}),e.next=15,t.T.callAPI_getAll("/api/v1/script-sets/do/list",{query:{_withScripts:!0,fields:["id","title","description","requirements","scripts","md5","origin","originId","originMD5"]}});case 15:if(r=e.sent,r&&r.ok){e.next=18;break}return e.abrupt("return");case 18:r.data.forEach((function(e){var r=i[e.id];r?r.local=e:t.scriptMarket.isAdmin&&(i[e.id]={local:e})})),a=Object.values(i),a.forEach((function(e){e.local&&(e.isLocalEdited=e.local.originMD5&&e.local.md5!==e.local.originMD5),e.isIdMatched=!(!e.local||!e.remote),e.isIdMatched&&(e.local.originMD5!==e.remote.originMD5&&(e.isUpdated=!0),t.scriptMarket.isAdmin||"scriptMarket"===e.local.origin&&e.local.originId===t.scriptMarket.id||(e.isConflict=!0))})),a.sort((function(e,r){if(e.isUpdated!==r.isUpdated)return e.isUpdated?-1:1;if(e.isIdMatched===r.isIdMatched){if(t.scriptMarket.isAdmin){if(e.local&&!r.local)return-1;if(!e.local&&r.local)return 1}else{if(e.remote&&!r.remote)return-1;if(!e.remote&&r.remote)return 1}return(e.local||e.remote).id<(r.local||r.remote).id?-1:(e.local||e.remote).id===(r.local||r.remote).id?0:1}return e.isIdMatched?-1:r.isIdMatched?1:void 0})),a.forEach((function(e){t.T.appendSearchKeywords(e,["local.id","local.title","remote.id","remote.title"])})),t.data=a,t.$store.commit("updateLoadStatus",!0);case 25:case"end":return e.stop()}}),e)})))()},openDialog:function(t,e){switch(this.form.note=null,e){case"publish":case"delete":if("git"===this.scriptMarket.type&&!this.$root.checkUserProfileForGit())return;break}switch(e){case"publish":this.operationDialogTitle=this.$t("Publish Script Set"),this.operationButtonTitle=this.$t("Publish");break;case"delete":this.operationDialogTitle=this.$t("Delete Script Set"),this.operationButtonTitle=this.$t("Delete");break;case"install":this.operationDialogTitle=this.$t("Install Script Set"),this.operationButtonTitle=this.$t("Install");break;case"upgrade":this.operationDialogTitle=this.$t("Upgrade Script Set"),this.operationButtonTitle=this.$t("Upgrade");break}this.operation=e,this.scriptSetToOperate=t,this.showOperation=!0},submitData:function(t){var e=this;return Object(o["a"])(Object(s["a"])().mark((function r(){var i;return Object(s["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.$refs.form.validate();case 3:r.next=8;break;case 5:return r.prev=5,r.t0=r["catch"](0),r.abrupt("return",console.error(r.t0));case 8:r.t1=t,r.next="publish"===r.t1?11:"delete"===r.t1?16:"install"===r.t1?21:"upgrade"===r.t1?26:31;break;case 11:return r.next=13,e.T.confirm(e.$t("Are you sure you want to publish the Script Set to the Script Market?"));case 13:if(r.sent){r.next=15;break}return r.abrupt("return");case 15:return r.abrupt("break",31);case 16:return r.next=18,e.T.confirm(e.$t("Are you sure you want to delete the Script Set from the Script Market?"));case 18:if(r.sent){r.next=20;break}return r.abrupt("return");case 20:return r.abrupt("break",31);case 21:return r.next=23,e.T.confirm(e.$t("Are you sure you want to install the Script Set?"));case 23:if(r.sent){r.next=25;break}return r.abrupt("return");case 25:return r.abrupt("break",31);case 26:return r.next=28,e.T.confirm(e.$t("Are you sure you want to upgrade the Script Set?"));case 28:if(r.sent){r.next=30;break}return r.abrupt("return");case 30:return r.abrupt("break",31);case 31:e.isProcessing=!0,i=null,r.t2=t,r.next="publish"===r.t2?36:"delete"===r.t2?40:"install"===r.t2?44:"upgrade"===r.t2?49:54;break;case 36:return r.next=38,e.T.callAPI("post","/api/v1/script-markets/:id/do/publish",{params:{id:e.scriptMarket.id},body:{scriptSetIds:[e.scriptSetToOperate.id],mode:"add",note:e.form.note},alert:{okMessage:e.$t("Script Set published to the Script Market")}});case 38:return i=r.sent,r.abrupt("break",54);case 40:return r.next=42,e.T.callAPI("post","/api/v1/script-markets/:id/do/publish",{params:{id:e.scriptMarket.id},body:{scriptSetIds:[e.scriptSetToOperate.id],mode:"delete",note:e.form.note},alert:{okMessage:e.$t("Script Set deleted from the Script Market")}});case 42:return i=r.sent,r.abrupt("break",54);case 44:return r.next=46,e.T.callAPI("post","/api/v1/script-markets/:id/do/install",{params:{id:e.scriptMarket.id},body:{scriptSetIds:[e.scriptSetToOperate.id]},alert:{okMessage:e.$t("Script Set installed, new Script Set is in effect immediately")}});case 46:return i=r.sent,e.$store.commit("updateScriptListSyncTime"),r.abrupt("break",54);case 49:return r.next=51,e.T.callAPI("post","/api/v1/script-markets/:id/do/install",{params:{id:e.scriptMarket.id},body:{scriptSetIds:[e.scriptSetToOperate.id]},alert:{okMessage:e.$t("Script Set upgraded, new Script Set is in effect immediately")}});case 51:return i=r.sent,e.$store.commit("updateScriptListSyncTime"),r.abrupt("break",54);case 54:if(i&&i.ok){r.next=56;break}return r.abrupt("return");case 56:return r.next=58,e.common.checkScriptMarketUpdate({force:!0});case 58:r.t3=t,r.next="install"===r.t3||"upgrade"===r.t3?61:67;break;case 61:if(!e.T.notNothing(i.data.requirements)){r.next=66;break}return r.next=64,e.T.confirm(e.$t("This Script Set requires 3rd party Python packages, do you want to open PIP tool now?"));case 64:if(!r.sent){r.next=66;break}return r.abrupt("return",e.common.goToPIPTools(i.data.requirements));case 66:return r.abrupt("break",67);case 67:return r.next=69,e.loadData();case 69:e.isProcessing=!1,e.showOperation=!1;case 71:case"end":return r.stop()}}),r,null,[[0,5]])})))()}},computed:{isWriteOperation:function(){switch(this.operation){case"publish":case"delete":return!0;default:return!1}},lockedByUser:function(){return"".concat(this.scriptMarket.lockedByUserName||this.scriptMarket.lockedByUsername)},isLockedByMe:function(){return this.scriptMarket.lockedByUserId===this.$store.getters.userId},isLockedByOther:function(){return this.scriptMarket.lockedByUserId&&!this.isLockedByMe},isAccessible:function(){return!!this.$store.getters.isAdmin||!this.isLockedByOther},hasLocalMarker:function(){for(var t=0;t<this.data.length;t++){var e=this.data[t];if(e.isLocalEdited||this.scriptMarket.isAdmin&&e.isUpdated)return!0}return!1},hasRemoteMarker:function(){for(var t=0;t<this.data.length;t++){var e=this.data[t];if(e.remote&&e.isUpdated&&!e.isConflict)return!0}return!1},formRules:function(){return{note:[{trigger:"change",message:this.$t("Please input note"),required:!0}]}},filteredData:function(){var t=(this.filterTEXT||"").toLowerCase().trim();return t?this.T.searchKeywords(t,this.data):this.data}},props:{},data:function(){return{data:[],scriptMarket:{},showLocalScriptSets:!1,form:{note:null},filterTEXT:"",scriptSetToOperate:{},operation:null,showOperation:!1,operationDialogTitle:null,operationButtonTitle:null,isProcessing:!1}}}),c=n,l=(r("6899"),r("5966"),r("2877")),u=r("7443"),d=r("72dc"),p=Object(l["a"])(c,i,a,!1,null,"e3c49eb6",null);"function"===typeof u["default"]&&Object(u["default"])(p),"function"===typeof d["default"]&&Object(d["default"])(p);e["default"]=p.exports},6899:function(t,e,r){"use strict";r("c16a")},"6b3c":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"FoundScriptSetCount":"Scrpt Set not Found | Found {n} Script Set | Found {n} Script Sets","ScriptCount":"No Script included | Includes {n} Script | Includes {n} Scripts"}}'),delete t.options._Ctor}},"72dc":function(t,e,r){"use strict";var i=r("16b6"),a=r.n(i);e["default"]=a.a},7443:function(t,e,r){"use strict";var i=r("6b3c"),a=r.n(i);e["default"]=a.a},c16a:function(t,e,r){}}]);