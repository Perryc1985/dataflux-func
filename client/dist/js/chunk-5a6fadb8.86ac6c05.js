(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a6fadb8"],{"1f1d":function(e,t,a){"use strict";a("91f9")},2532:function(e,t,a){"use strict";var n=a("23e7"),r=a("e330"),o=a("5a34"),s=a("1d80"),i=a("577e"),l=a("ab13"),c=r("".indexOf);n({target:"String",proto:!0,forced:!l("includes")},{includes:function(e){return!!~c(i(s(this)),i(o(e)),arguments.length>1?arguments[1]:void 0)}})},"2b62":function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"zh-CN":{"Go Top":"返回顶层","Go Up":"向上","File size limit":"文件大小限制","Path":"路径","Create time":"创建时间","Update time":"更新时间","Package":"Wheel包","Mirror":"PIP镜像","File uploaded":"文件已上传","Wheel package installed: {name}":"Wheel包已安装：{name}","Please input destination path":"请输入目标路径","File <code class=\\"text-main\\">{name}</code> already existed, please input a new name":"文件 <code class=\\"text-main\\">{name}</code> 已经存在，请输入新文件名","Install Wheel package":"安装Wheel包","Are you sure you want to delete the content?":"是否确定删除此内容？","Delete file":"删除文件","File already existed":"文件已经存在","File too large (size limit: {size})":"文件过大（大小限制：{size}）","Uploading {filename}":"正在上传 {filename}","Processing...":"正在处理..."}}'),delete e.options._Ctor}},"5c26":function(e,t,a){"use strict";var n=a("2b62"),r=a.n(n);t["default"]=r.a},"684d":function(e,t,a){"use strict";a("a214")},"6a60":function(e,t,a){"use strict";a.r(t);a("99af"),a("fb6a"),a("a15b"),a("b0c0"),a("caad"),a("2532");var n=function(){var e=this,t=e._self._c;return t("transition",{attrs:{name:"fade"}},[t("el-container",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.isLoaded,expression:"$store.state.isLoaded"},{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.isProcessing,expression:"isProcessing",modifiers:{fullscreen:!0,lock:!0}}],attrs:{direction:"vertical","element-loading-spinner":"el-icon-loading","element-loading-text":e.progressTip||e.$t("Processing...")}},[t("el-header",{attrs:{height:"60px"}},[t("div",{staticClass:"page-header"},[t("span",[e._v(e._s(e.$t("File Manage")))]),e._v("\n\n        　\n        "),t("el-tooltip",{attrs:{content:e.$t("Go Up")}},[t("el-button",{attrs:{disabled:"/"===e.currentFolder,size:"small"},on:{click:function(t){return e.enterFolder("..")}}},[t("i",{staticClass:"fa fa-fw fa-arrow-up"})])],1),e._v(" "),t("el-tooltip",{attrs:{content:e.$t("Refresh")}},[t("el-button",{staticClass:"fix-compact-button",attrs:{size:"small"},on:{click:function(t){return e.loadData({isRefresh:!0})}}},[t("i",{staticClass:"fa fa-fw fa-refresh"})])],1),e._v("\n\n        　\n        "),t("el-popover",{attrs:{placement:"bottom",width:"240"},model:{value:e.showMkdirPopover,callback:function(t){e.showMkdirPopover=t},expression:"showMkdirPopover"}},[t("div",{staticClass:"popover-input"},[t("el-input",{ref:"mkdirName",attrs:{size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.resourceOperation(e.mkdirName,"mkdir")}},model:{value:e.mkdirName,callback:function(t){e.mkdirName=t},expression:"mkdirName"}}),e._v(" "),t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.resourceOperation(e.mkdirName,"mkdir")}}},[e._v(e._s(e.$t("Add")))])],1),e._v(" "),t("el-button",{attrs:{slot:"reference",size:"small"},slot:"reference"},[t("i",{staticClass:"fa fa-fw fa-plus"}),e._v("\n            "+e._s(e.$t("Folder"))+"\n          ")])],1),e._v(" "),t("el-tooltip",{attrs:{content:"".concat(e.$t("File size limit")).concat(e.$t(":")," ").concat(e.T.byteSizeHuman(e.$store.getters.CONFIG("_EX_UPLOAD_RESOURCE_FILE_SIZE_LIMIT"))),placement:"bottom"}},[t("el-upload",{ref:"upload",staticClass:"upload-button",attrs:{limit:2,multiple:!1,"auto-upload":!0,"show-file-list":!1,"http-request":e.handleUpload,"on-change":e.onUploadFileChange,action:""}},[t("el-button",{attrs:{size:"small"}},[t("i",{staticClass:"fa fa-fw fa-cloud-upload"}),e._v("\n              "+e._s(e.$t("Upload"))+"\n            ")])],1)],1),e._v("\n\n        　\n        "),"/"!==e.currentFolder?t("code",{staticClass:"resource-navi"},[t("small",[e._v(e._s(e.$t("Path"))+e._s(e.$t(":")))]),e._v(" "),t("el-button",{attrs:{size:"small"},on:{click:function(t){return e.enterFolder()}}},[t("i",{staticClass:"fa fa-fw fa-home"})]),e._l(e.currentFolder.slice(1).split("/"),(function(a,n){return[t("div",{staticClass:"path-sep"},[t("i",{staticClass:"fa fa-angle-right"})]),t("el-button",{key:n,attrs:{size:"small"},on:{click:function(t){e.enterFolder(e.currentFolder.split("/").slice(0,n+2).join("/"),!0)}}},[e._v("\n              "+e._s(a)+"\n            ")])]}))],2):e._e()],1)]),e._v(" "),t("el-main",{staticClass:"common-table-container"},[t("el-table",{staticClass:"common-table",attrs:{height:"100%",data:e.files}},[t("el-table-column",{attrs:{label:e.$t("Name"),sortable:"","sort-by":"name"},scopedSlots:e._u([{key:"default",fn:function(a){return["folder"===a.row.type?t("el-link",{on:{click:function(t){return e.enterFolder(a.row.name)}}},[t("i",{class:"fa fa-fw fa-".concat(a.row.icon)}),e._v(" "),t("code",[e._v(e._s(a.row.name)+"/")])]):[t("i",{class:"fa fa-fw fa-".concat(a.row.icon)}),e._v(" "),t("code",[e._v(e._s(a.row.name))])]]}}])}),e._v(" "),t("el-table-column",{attrs:{label:e.$t("Create time"),sortable:"","sort-by":"createTime",width:"200"},scopedSlots:e._u([{key:"default",fn:function(a){return[a.row.createTime?[t("span",[e._v(e._s(e._f("datetime")(a.row.createTime)))]),e._v(" "),t("br"),e._v(" "),t("span",{staticClass:"text-info"},[e._v(e._s(e._f("fromNow")(a.row.createTime)))])]:[e._v("\n              -\n            ")]]}}])}),e._v(" "),t("el-table-column",{attrs:{label:e.$t("Update time"),sortable:"","sort-by":"updateTime",width:"200"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(e._f("datetime")(a.row.updateTime)))]),e._v(" "),t("br"),e._v(" "),t("span",{staticClass:"text-info"},[e._v(e._s(e._f("fromNow")(a.row.updateTime)))])]}}])}),e._v(" "),t("el-table-column",{attrs:{label:e.$t("Size"),sortable:"","sort-by":"size",align:"right",width:"120"},scopedSlots:e._u([{key:"default",fn:function(a){return[a.row.size?t("code",[e._v(e._s(a.row.sizeHuman))]):e._e()]}}])}),e._v(" "),t("el-table-column",{attrs:{align:"right",width:"260"},scopedSlots:e._u([{key:"default",fn:function(a){return["folder"===a.row.type?t("el-link",{on:{click:function(t){return e.enterFolder(a.row.name)}}},[e._v(e._s(e.$t("Enter")))]):"file"===a.row.type?[t("el-link",{attrs:{href:a.row.downloadURL,download:a.row.name,target:"_blank"}},[e._v(e._s(e.$t("Download")))]),e._v(" "),e.previewExts.includes(a.row.ext)||!a.row.ext?t("el-link",{attrs:{href:a.row.previewURL,target:"_blank"}},[e._v(e._s(e.$t("Open")))]):e._e(),e._v(" "),"whl"===a.row.ext?t("el-link",{on:{click:function(t){return e.openInstallWheel(a.row.name)}}},[e._v(e._s(e.$t("Install")))]):e._e()]:e._e(),e._v(" "),t("el-dropdown",{on:{command:e.resourceOperationCmd}},[t("el-link",{attrs:{underline:!1}},[e._v(e._s(e.$t("More"))),t("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e.zipExts.includes(a.row.ext)?t("el-dropdown-item",{attrs:{command:{data:a.row,operation:"unzip"}}},[e._v(e._s(e.$t("Unzip")))]):t("el-dropdown-item",{attrs:{command:{data:a.row,operation:"zip"}}},[e._v(e._s(e.$t("Zip")))]),e._v(" "),t("el-dropdown-item",{attrs:{command:{data:a.row,operation:"cp"}}},[e._v(e._s(e.$t("Copy")))]),e._v(" "),t("el-dropdown-item",{attrs:{command:{data:a.row,operation:"mv"}}},[e._v(e._s(e.$t("Move")))]),e._v(" "),t("el-dropdown-item",{attrs:{command:{data:a.row,operation:"rm"}}},[e._v(e._s(e.$t("Delete")))])],1)],1)]}}])})],1)],1),e._v(" "),t("el-dialog",{attrs:{title:e.$t("Install Wheel package"),width:"30%",visible:e.showInstallWheel},on:{"update:visible":function(t){e.showInstallWheel=t}}},[t("div",[t("el-form",{ref:"form",attrs:{"label-width":"80px"}},[t("el-form-item",{attrs:{label:e.$t("Package")}},[t("el-input",{attrs:{disabled:!0,value:e.wheelToInstall}})],1),e._v(" "),t("el-form-item",{attrs:{label:e.$t("Mirror")}},[t("el-select",{model:{value:e.pypiMirror,callback:function(t){e.pypiMirror=t},expression:"pypiMirror"}},e._l(e.C.PIP_MIRROR,(function(e){return t("el-option",{key:e.key,attrs:{label:e.name,value:e.value}})})),1)],1)],1)],1),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.showInstallWheel=!1}}},[e._v(e._s(e.$t("Cancel")))]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:e.installWheel}},[e._v(e._s(e.$t("Install")))])],1)])],1)],1)},r=[],o=a("c7eb"),s=a("1da1"),i=(a("d3b7"),a("159b"),a("4e82"),a("b680"),a("a434"),47),l=92,c=46;function u(e){return e===i||e===l}function d(e){return e===i}function p(e){if(0===e.length)return".";var t=e.charCodeAt(0)===i,a=e.charCodeAt(e.length-1)===i;return e=f(e,!t,"/",d),0!==e.length||t||(e="."),e.length>0&&a&&(e+="/"),t?"/"+e:e}function f(e,t,a,n){for(var r,o="",s=0,l=-1,u=0,d=0;d<=e.length;++d){if(d<e.length)r=e.charCodeAt(d);else{if(n(r))break;r=i}if(n(r)){if(l===d-1||1===u);else if(l!==d-1&&2===u){if(o.length<2||2!==s||o.charCodeAt(o.length-1)!==c||o.charCodeAt(o.length-2)!==c)if(o.length>2){var p=o.lastIndexOf(a);if(p!==o.length-1){-1===p?(o="",s=0):(o=o.slice(0,p),s=o.length-1-o.lastIndexOf(a)),l=d,u=0;continue}}else if(2===o.length||1===o.length){o="",s=0,l=d,u=0;continue}t&&(o.length>0?o+="".concat(a,".."):o="..",s=2)}else o.length>0?o+=a+e.slice(l+1,d):o=e.slice(l+1,d),s=d-l-1;l=d,u=0}else r===c&&-1!==u?++u:u=-1}return o}function m(){if(0===arguments.length)return".";for(var e,t,a=arguments[0].indexOf("/")>-1?"/":"\\",n=0;n<arguments.length;++n){var r=arguments[n];r.length>0&&(void 0===e?e=t=r:e+=a+r)}if(void 0===e)return".";var o=!0,s=0;if(u(t.charCodeAt(0))){++s;var i=t.length;i>1&&u(t.charCodeAt(1))&&(++s,i>2&&(u(t.charCodeAt(2))?++s:o=!1))}if(o){for(;s<e.length;++s)if(!u(e.charCodeAt(s)))break;s>=2&&(e=a+e.slice(s))}return p(e)}var h={name:"FileManage",components:{},watch:{$route:{immediate:!0,handler:function(e,t){var a=this;return Object(s["a"])(Object(o["a"])().mark((function e(){return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.loadData();case 2:case"end":return e.stop()}}),e)})))()}},showMkdirPopover:function(e){var t=this;e?this.$nextTick((function(){t.$refs.mkdirName.focus()})):this.mkdirName=""}},methods:{loadData:function(e){var t=this;return Object(s["a"])(Object(o["a"])().mark((function a(){var n,r,s,i;return Object(o["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e=e||{},e.isRefresh&&t.$store.commit("updateLoadStatus",!1),n=t.dataFilter=t.T.createListQuery(),a.next=6,t.T.callAPI_get("/api/v1/resources/dir",{query:n});case 6:if(r=a.sent,r&&r.ok){a.next=9;break}return a.abrupt("return");case 9:s=r.data,i={},s.forEach((function(e){switch(i[e.name]=!0,e.type){case"folder":e.icon="folder-o";break;case"file":e.icon="file-o",e.ext=null,e.name.indexOf(".")>0&&(e.ext=e.name.split(".").pop()),e.size&&(e.sizeHuman=t.T.byteSizeHuman(e.size)),e.previewURL=t.T.formatURL("/api/v1/resources",{baseURL:!0,auth:!0,query:{preview:!0,filePath:t.getPath(e.name)}}),e.downloadURL=t.T.formatURL("/api/v1/resources",{baseURL:!0,auth:!0,query:{filePath:t.getPath(e.name)}});break}switch(e.ext){case"zip":case"rar":case"7z":case"tar":case"bz":case"gz":e.icon="file-archive-o";break;case"htm":case"html":case"css":case"js":case"ts":case"coffee":case"py":case"ipynb":case"go":case"java":case"php":case"pl":case"sh":case"rb":case"lua":case"kt":case"r":case"h":case"c":case"cpp":case"cs":case"m":case"swift":case"sql":case"ini":case"xml":case"toml":case"yaml":case"json":case"jsonl":e.icon="file-code-o";break;case"jpg":case"jpeg":case"png":case"gif":case"bmp":e.icon="file-image-o";break;case"pdf":e.icon="file-pdf-o";break;case"txt":case"csv":case"md":case"markdown":e.icon="file-text-o";break;case"mp3":e.icon="file-audio-o";break;case"avi":case"mp4":case"mkv":e.icon="file-video-o";break;case"doc":case"docx":e.icon="file-word-o";break;case"xls":case"xlsx":e.icon="file-excel-o";break;case"ppt":case"pptx":e.icon="file-powerpoint-o";break}})),s.sort((function(e,t){return e.type!==t.type?"folder"===e.type?-1:1:e.name!==t.name?e.name<t.name?-1:1:0})),t.files=s,t.fileNameMap=i,t.$store.commit("updateLoadStatus",!0);case 16:case"end":return a.stop()}}),a)})))()},getPath:function(e){return m(this.currentFolder,e)},enterFolder:function(e,t){this.dataFilter.folder=e?t?e:this.getPath(e):"/",this.T.changePageFilter(this.dataFilter)},resourceOperationCmd:function(e){var t=this;return Object(s["a"])(Object(o["a"])().mark((function a(){var n,r;return Object(o["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e){a.next=2;break}return a.abrupt("return");case 2:return n=e.data.name,r=e.operation,a.next=6,t.resourceOperation(n,r);case 6:return a.abrupt("return",a.sent);case 7:case"end":return a.stop()}}),a)})))()},resourceOperation:function(e,t){var a=this;return Object(s["a"])(Object(o["a"])().mark((function n(){var r,s,i;return Object(o["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=null,n.t0=t,n.next="cp"===n.t0?4:"mv"===n.t0?10:"rm"===n.t0?16:21;break;case 4:return n.next=6,a.T.prompt(a.$t("Please input destination path"),e);case 6:if(r=n.sent,r){n.next=9;break}return n.abrupt("return");case 9:return n.abrupt("break",21);case 10:return n.next=12,a.T.prompt(a.$t("Please input destination path"),"./".concat(e));case 12:if(r=n.sent,r){n.next=15;break}return n.abrupt("return");case 15:return n.abrupt("break",21);case 16:return n.next=18,a.T.confirm(a.$t("Are you sure you want to delete the content?"));case 18:if(n.sent){n.next=20;break}return n.abrupt("return");case 20:return n.abrupt("break",21);case 21:return s=setTimeout((function(){a.isProcessing=!0}),200),n.next=24,a.T.callAPI("post","/api/v1/resources/operate",{body:{targetPath:a.getPath(e),operation:t,operationArgument:r}});case 24:if(i=n.sent,clearTimeout(s),a.isProcessing=!1,i.ok){n.next=29;break}return n.abrupt("return",a.loadData());case 29:n.t1=t,n.next="mkdir"===n.t1?32:37;break;case 32:return a.showMkdirPopover=!1,a.mkdirName="",n.next=36,a.enterFolder(e);case 36:return n.abrupt("break",40);case 37:return n.next=39,a.loadData();case 39:return n.abrupt("break",40);case 40:case"end":return n.stop()}}),n)})))()},handleUpload:function(e){var t=this;return Object(s["a"])(Object(o["a"])().mark((function a(){var n,r,s,i,l,c,u,d,p,f,m,h,b,v,_;return Object(o["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n=t.$store.getters.CONFIG("_EX_UPLOAD_RESOURCE_FILE_SIZE_LIMIT"),!(e.file.size>n)){a.next=4;break}return r=t.T.byteSizeHuman(n),a.abrupt("return",t.T.alert(t.$t("File too large (size limit: {size})",{size:r})));case 4:if(s=e.file.name,i=null,!t.fileNameMap[s]){a.next=32;break}l=null,a.prev=8,c=s.split("."),u="",c.length>1&&(u=".".concat(c.pop())),d=c.join("."),p=null,f=2;case 15:if(p="".concat(d,"-").concat(f).concat(u),t.fileNameMap[p]){a.next=19;break}return a.abrupt("break",22);case 19:f++,a.next=15;break;case 22:return a.next=24,t.$prompt(t.$t('File <code class="text-main">{name}</code> already existed, please input a new name',{name:s}),t.$t("Upload"),{customClass:"uploadRename",inputValue:p,dangerouslyUseHTMLString:!0,closeOnClickModal:!1,confirmButtonText:t.$t("Upload"),cancelButtonText:t.$t("Cancel"),inputValidator:function(e){if(t.fileNameMap[e])return t.$t("File already existed")}});case 24:l=a.sent,a.next=31;break;case 27:return a.prev=27,a.t0=a["catch"](8),t.$refs.upload.clearFiles(),a.abrupt("return");case 31:i=l.value;case 32:return m=new FormData,m.append("files",e.file),m.append("folder",t.dataFilter.folder||"."),i&&m.append("rename",i),h=setTimeout((function(){t.isProcessing=!0}),200),b=null,v=null,_=t.T.throttle((function(e){t.progressTip=e}),500),a.next=42,t.T.callAPI("post","/api/v1/resources",{body:m,alert:{okMessage:t.$t("File uploaded")},onUploadProgress:function(e){var a="".concat(t.$t("Uploading {filename}",{filename:i||s}));if(b&&v){var n=(e.loaded/e.total*100).toFixed(2),r=(e.loaded-v)/(e.timeStamp-b)*1e3;a+=" (".concat(n,"%, ").concat(t.T.byteSizeHuman(e.loaded),"/").concat(t.T.byteSizeHuman(e.total),", ").concat(t.T.byteSizeHuman(r),"/s)")}b=e.timeStamp,v=e.loaded,_(a)}});case 42:return a.sent,clearTimeout(h),t.isProcessing=!1,t.progressTip="",a.next=48,t.loadData();case 48:t.$refs.upload.clearFiles();case 49:case"end":return a.stop()}}),a,null,[[8,27]])})))()},onUploadFileChange:function(e,t){t.length>1&&t.splice(0,1)},openInstallWheel:function(e){this.wheelToInstall=e,this.pypiMirror=this.C.PIP_MIRROR_DEFAULT.value,this.showInstallWheel=!0},installWheel:function(){var e=this;return Object(s["a"])(Object(o["a"])().mark((function t(){var a,n;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.wheelToInstall,n=setTimeout((function(){e.isProcessing=!0}),200),t.next=4,e.T.callAPI("post","/api/v1/python-packages/install",{body:{mirror:e.pypiMirror,pkg:e.getPath(a)},alert:{okMessage:e.$t("Wheel package installed: {name}",{name:a})}});case 4:t.sent,clearTimeout(n),e.isProcessing=!1,e.showInstallWheel=!1;case 8:case"end":return t.stop()}}),t)})))()}},computed:{previewExts:function(){return["jpg","jpeg","png","bmp","gif","mp3","mp4","pdf","txt","htm","html","json","md","markdown"]},zipExts:function(){return["zip","tar","gz","bz","7z"]},currentFolder:function(){return this.dataFilter.folder||"/"}},props:{},data:function(){var e=this.T.createListQuery();return{files:[],fileNameMap:{},showMkdirPopover:!1,mkdirName:"",showInstallWheel:!1,wheelToInstall:"",pypiMirror:"",isProcessing:!1,progressTip:"",dataFilter:{folder:e.folder}}}},b=h,v=(a("684d"),a("1f1d"),a("2877")),_=a("5c26"),w=Object(v["a"])(b,n,r,!1,null,"c560beb6",null);"function"===typeof _["default"]&&Object(_["default"])(w);t["default"]=w.exports},"91f9":function(e,t,a){},a214:function(e,t,a){},a434:function(e,t,a){"use strict";var n=a("23e7"),r=a("7b0b"),o=a("23cb"),s=a("5926"),i=a("07fa"),l=a("3511"),c=a("65f0"),u=a("8418"),d=a("083a"),p=a("1dde"),f=p("splice"),m=Math.max,h=Math.min;n({target:"Array",proto:!0,forced:!f},{splice:function(e,t){var a,n,p,f,b,v,_=r(this),w=i(_),k=o(e,w),g=arguments.length;for(0===g?a=n=0:1===g?(a=0,n=w-k):(a=g-2,n=h(m(s(t),0),w-k)),l(w+a-n),p=c(_,n),f=0;f<n;f++)b=k+f,b in _&&u(p,f,_[b]);if(p.length=n,a<n){for(f=k;f<w-n;f++)b=f+n,v=f+a,b in _?_[v]=_[b]:d(_,v);for(f=w;f>w-n+a;f--)d(_,f-1)}else if(a>n)for(f=w-n;f>k;f--)b=f+n-1,v=f+a-1,b in _?_[v]=_[b]:d(_,v);for(f=0;f<a;f++)_[f+k]=arguments[f+2];return _.length=w-n+a,p}})},caad:function(e,t,a){"use strict";var n=a("23e7"),r=a("4d64").includes,o=a("d039"),s=a("44d2"),i=o((function(){return!Array(1).includes()}));n({target:"Array",proto:!0,forced:i},{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),s("includes")}}]);