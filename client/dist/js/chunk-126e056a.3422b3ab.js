(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-126e056a"],{"1fe2":function(t,e,o){"use strict";var n=o("a2b6"),i=o.n(n);e["default"]=i.a},"26fe":function(t,e,o){"use strict";o("3fee")},"3fee":function(t,e,o){},"9f77":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-HK":{"API Example":"API 調用示例","API Timeout":"API 超時","Async":"異步執行","Calling Example":"調用示例","File uploading is not supported in this this form":"此方式不支持文件上傳","Func Timeout":"函數超時","Input Parameters":"填寫參數","Invalid Parameters. Examples require a valid Body content":"參數填寫存在錯誤，正確填寫後將展示示例","Normal GET":"GET 標準形式","Normal POST":"POST 標準形式","Only string arguments are allowed in this from":"此方式參數值只支持字符串","Parameter \\"kwargs\\" should be URL encoded in HTTP request":"發送請求時，\\"kwargs\\" 參數需要進行 URL encode 編碼","Parameter \\"options\\" are not supported in this from":"此方式不支持 \\"options\\" 參數","Request Options":"請求選項","Save Result":"保留結果","Simple GET":"GET 簡化形式","Simple POST (Form)":"POST 簡化形式（表單）","Simple POST (JSON)":"POST 簡化形式（JSON）","The JSON inside \\"kwargs\\" is the call parameter, modify its value and check out the calling example below":"\\"kwargs\\" 內的 JSON 即為調用參數，修改其中的值並在下方查看具體調用示例","This Python function allows additional parameters (**kwargs syntax)":"本 Python 函數支持傳遞額外的參數（**kwargs 語法）","This Python function allows uploading files, field name of the uploading file is \\"files\\"":"本 Python 函數支持文件上傳，文件字段名為\\"files\\"","When posting JSON data, \\"Content-Type\\" should be \\"application/json\\"":"POST JSON 數據時，\\"Content-Type\\" 必須指定為 \\"application/json\\"","When posting form data, \\"Content-Type\\" should be \\"multipart/form-data\\" or \\"application/x-www-form-urlencoded\\", and the values of the fields support string value only":"POST 表單數據時，\\"Content-Type\\" 必須指定為 \\"multipart/form-data\\" 或 \\"application/x-www-form-urlencoded\\"，此時 Body 中參數值只支持字符串","When uploading files, \\"Content-Type\\" should be \\"multipart/form-data\\"":"上傳文件時，\\"Content-Type\\" 必須指定為 \\"multipart/form-data\\"","seconds":"秒"}}'),delete t.options._Ctor}},a2ad:function(t,e,o){"use strict";var n=o("ebfc"),i=o.n(n);e["default"]=i.a},a2b6:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"seconds":"Second | Seconds"}}'),delete t.options._Ctor}},ac47:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-TW":{"API Example":"API 呼叫示例","API Timeout":"API 超時","Async":"非同步執行","Calling Example":"呼叫示例","File uploading is not supported in this this form":"此方式不支援檔案上傳","Func Timeout":"函式超時","Input Parameters":"填寫引數","Invalid Parameters. Examples require a valid Body content":"引數填寫存在錯誤，正確填寫後將展示示例","Normal GET":"GET 標準形式","Normal POST":"POST 標準形式","Only string arguments are allowed in this from":"此方式引數值只支援字串","Parameter \\"kwargs\\" should be URL encoded in HTTP request":"傳送請求時，\\"kwargs\\" 引數需要進行 URL encode 編碼","Parameter \\"options\\" are not supported in this from":"此方式不支援 \\"options\\" 引數","Request Options":"請求選項","Save Result":"保留結果","Simple GET":"GET 簡化形式","Simple POST (Form)":"POST 簡化形式（表單）","Simple POST (JSON)":"POST 簡化形式（JSON）","The JSON inside \\"kwargs\\" is the call parameter, modify its value and check out the calling example below":"\\"kwargs\\" 內的 JSON 即為呼叫引數，修改其中的值並在下方檢視具體呼叫示例","This Python function allows additional parameters (**kwargs syntax)":"本 Python 函式支援傳遞額外的引數（**kwargs 語法）","This Python function allows uploading files, field name of the uploading file is \\"files\\"":"本 Python 函式支援檔案上傳，檔案欄位名為\\"files\\"","When posting JSON data, \\"Content-Type\\" should be \\"application/json\\"":"POST JSON 資料時，\\"Content-Type\\" 必須指定為 \\"application/json\\"","When posting form data, \\"Content-Type\\" should be \\"multipart/form-data\\" or \\"application/x-www-form-urlencoded\\", and the values of the fields support string value only":"POST 表單資料時，\\"Content-Type\\" 必須指定為 \\"multipart/form-data\\" 或 \\"application/x-www-form-urlencoded\\"，此時 Body 中引數值只支援字串","When uploading files, \\"Content-Type\\" should be \\"multipart/form-data\\"":"上傳檔案時，\\"Content-Type\\" 必須指定為 \\"multipart/form-data\\"","seconds":"秒"}}'),delete t.options._Ctor}},af5a:function(t,e,o){"use strict";var n=o("ac47"),i=o.n(n);e["default"]=i.a},b3fd:function(t,e,o){"use strict";var n=function(){var t=this,e=t._self._c;return e("el-dialog",{attrs:{title:t.title||t.$t("API Example"),visible:t.show,"close-on-click-modal":!1,"close-on-press-escape":!1,width:"950px"},on:{"update:visible":function(e){t.show=e}}},[e("span",[t.showOptions?[e("el-divider",{attrs:{"content-position":"left"}},[e("h1",[t._v(t._s(t.$t("Request Options")))])]),t._v(" "),e("el-form",{staticClass:"call-options",attrs:{"label-width":"120px"}},[t.showExecModeOption?e("el-form-item",{attrs:{label:t.$t("Async")}},[e("el-switch",{attrs:{"inactive-value":"sync","active-value":"async"},model:{value:t.callOptions.execMode,callback:function(e){t.$set(t.callOptions,"execMode",e)},expression:"callOptions.execMode"}})],1):t._e(),t._v(" "),t.showSaveResultOption?e("el-form-item",{attrs:{label:t.$t("Save Result")}},[e("el-switch",{attrs:{"inactive-value":!1,"active-value":!0},model:{value:t.callOptions.saveResult,callback:function(e){t.$set(t.callOptions,"saveResult",e)},expression:"callOptions.saveResult"}})],1):t._e(),t._v(" "),t.showTimeoutOption?e("el-form-item",{attrs:{label:t.$t("Func Timeout")}},[e("el-input-number",{attrs:{size:"mini","step-strictly":"",step:1,precision:0,min:t.$store.getters.SYSTEM_INFO("_FUNC_TASK_TIMEOUT_MIN"),max:t.$store.getters.SYSTEM_INFO("_FUNC_TASK_TIMEOUT_MAX")},model:{value:t.callOptions.timeout,callback:function(e){t.$set(t.callOptions,"timeout",e)},expression:"callOptions.timeout"}}),t._v(" "+t._s(t.$tc("seconds",t.callOptions.timeout))+"\n        ")],1):t._e(),t._v(" "),t.showAPITimeoutOption?e("el-form-item",{attrs:{label:t.$t("API Timeout")}},[e("el-input-number",{attrs:{size:"mini","step-strictly":"",step:1,precision:0,min:t.$store.getters.SYSTEM_INFO("_FUNC_TASK_MIN_API_TIMEOUT"),max:t.$store.getters.SYSTEM_INFO("_FUNC_TASK_MAX_API_TIMEOUT")},model:{value:t.callOptions.apiTimeout,callback:function(e){t.$set(t.callOptions,"apiTimeout",e)},expression:"callOptions.apiTimeout"}}),t._v(" "+t._s(t.$tc("seconds",t.callOptions.apiTimeout))+"\n        ")],1):t._e()],1)]:t._e(),t._v(" "),e("el-divider",{attrs:{"content-position":"left"}},[e("h1",[t._v(t._s(t.$t("Input Parameters")))])]),t._v(" "),t.apiBodyInput||t.supportCustomKwargs?e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:22}},[e("el-input",{attrs:{type:"textarea",autosize:"",resize:"none"},model:{value:t.apiBodyInput,callback:function(e){t.apiBodyInput=e},expression:"apiBodyInput"}}),t._v(" "),t.apiBodyInput.indexOf("kwargs")>=0?e("InfoBlock",{attrs:{type:"info",title:t.$t('The JSON inside "kwargs" is the call parameter, modify its value and check out the calling example below')}}):t._e(),t._v(" "),t.supportCustomKwargs?e("InfoBlock",{attrs:{type:"success",title:t.$t("This Python function allows additional parameters (**kwargs syntax)")}}):t._e(),t._v(" "),t.supportFileUpload?e("InfoBlock",{attrs:{type:"success",title:t.$t('This Python function allows uploading files, field name of the uploading file is "files"')}}):t._e()],1),t._v(" "),e("el-col",{attrs:{span:2}},[e("CopyButton",{attrs:{content:t.apiBodyInput}})],1)],1):t._e(),t._v(" "),e("el-divider",{attrs:{"content-position":"left"}},[e("h1",[t._v(t._s(t.$t("Calling Example")))])]),t._v(" "),t.apiBody?[t.showGet?[e("el-tabs",{attrs:{"tab-position":"top"}},[e("el-tab-pane",{attrs:{label:t.$t("Simple GET")}},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:22}},[t.onlyStringParameter?e("el-link",{staticClass:"get-example",attrs:{href:t.getExample("simplified"),underline:!0,type:"primary",target:"_blank"}},[e("code",{domProps:{innerHTML:t._s(t.getExample("simplified",{asHTML:!0,decodeURL:!0}))}})]):t._e(),t._v(" "),e("InfoBlock",{attrs:{type:t.onlyStringParameter?"info":"error",title:t.$t("Only string arguments are allowed in this from")}}),t._v(" "),t.showOptions?e("InfoBlock",{attrs:{title:t.$t('Parameter "options" are not supported in this from')}}):t._e()],1),t._v(" "),e("el-col",{attrs:{span:2}},[t.onlyStringParameter?e("CopyButton",{attrs:{content:t.getExample("simplified")}}):t._e()],1)],1)],1),t._v(" "),e("el-tab-pane",{attrs:{label:t.$t("Normal GET")}},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:22}},[e("el-link",{staticClass:"get-example",attrs:{href:t.getExample("normal"),underline:!0,type:"primary",target:"_blank"}},[e("code",{domProps:{innerHTML:t._s(t.getExample("normal",{asHTML:!0,decodeURL:!0}))}})]),t._v(" "),e("br"),t._v(" "),e("InfoBlock",{attrs:{type:"info",title:t.$t('Parameter "kwargs" should be URL encoded in HTTP request')}})],1),t._v(" "),e("el-col",{attrs:{span:2}},[e("CopyButton",{attrs:{content:t.getExample("normal")}})],1)],1)],1),t._v(" "),e("el-tab-pane",{attrs:{label:t.$t("Simple POST (JSON)")}},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:22}},[e("el-input",{attrs:{value:t.postExample("simplified",{contentType:"json"}),autosize:{minRows:6},type:"textarea",resize:"none",readonly:""}}),t._v(" "),e("InfoBlock",{attrs:{type:"info",title:t.$t('When posting JSON data, "Content-Type" should be "application/json"')}}),t._v(" "),t.showOptions?e("InfoBlock",{attrs:{title:t.$t('Parameter "options" are not supported in this from')}}):t._e()],1),t._v(" "),e("el-col",{attrs:{span:2}},[e("CopyButton",{attrs:{content:t.postExample("simplified",{contentType:"json",oneLine:!0})}})],1)],1)],1),t._v(" "),e("el-tab-pane",{attrs:{label:t.$t("Simple POST (Form)")}},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:22}},[e("el-input",{attrs:{value:t.postExample("simplified",{contentType:"form"}),autosize:{minRows:6},type:"textarea",resize:"none",readonly:""}}),t._v(" "),e("InfoBlock",{attrs:{type:"info",title:t.$t('When posting form data, "Content-Type" should be "multipart/form-data" or "application/x-www-form-urlencoded", and the values of the fields support string value only')}}),t._v(" "),t.supportFileUpload?e("InfoBlock",{attrs:{type:"warning",title:t.$t('When uploading files, "Content-Type" should be "multipart/form-data"')}}):t._e(),t._v(" "),t.showOptions?e("InfoBlock",{attrs:{type:"error",title:t.$t('Parameter "options" are not supported in this from')}}):t._e()],1),t._v(" "),e("el-col",{attrs:{span:2}},[t.onlyStringParameter?e("CopyButton",{attrs:{content:t.postExample("simplified",{contentType:"form",oneLine:!0})}}):t._e()],1)],1)],1),t._v(" "),e("el-tab-pane",{attrs:{label:t.$t("Normal POST")}},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:22}},[e("el-input",{attrs:{value:t.postExample("normal"),autosize:{minRows:6},type:"textarea",resize:"none",readonly:""}}),t._v(" "),e("InfoBlock",{attrs:{type:"info",title:t.$t('When posting JSON data, "Content-Type" should be "application/json"')}}),t._v(" "),t.supportFileUpload?e("InfoBlock",{attrs:{type:"error",title:t.$t("File uploading is not supported in this this form")}}):t._e()],1),t._v(" "),e("el-col",{attrs:{span:2}},[e("CopyButton",{attrs:{content:t.postExample("normal",{oneLine:!0})}})],1)],1)],1)],1)]:t._e()]:[e("span",{staticClass:"text-bad"},[t._v(t._s(t.$t("Invalid Parameters. Examples require a valid Body content")))])]],2)])},i=[],a=(o("b64b"),o("e9c4"),o("a15b"),o("14d9"),o("99af"),o("4de4"),o("d3b7"),{name:"APIExampleDialog",components:{},watch:{callOptions:{deep:!0,handler:function(t){var e=null;try{e=JSON.parse(this.apiBodyExample)}catch(n){}if(e){for(var o in e.options=e.options||{},t)t[o]===this.DEFAULT_CALL_OPTIONS[o]?delete e.options[o]:e.options[o]=t[o];this.T.isNothing(e.options)&&delete e.options,this.apiBodyExample=JSON.stringify(e,null,2)}}}},methods:{prettyURLForHTML:function(t){if(!t)return"";try{var e=t.split("?");if(!e[1])return t;for(var o=e[1].split("&"),n=0;n<o.length;n++)o[n]=0===n?"?"+o[n]:"&"+o[n];var i=e[0]+"<br>"+o.join("<br>");return i}catch(a){return console.error(a),t}},washAPIBody:function(t){if(t=this.T.jsonCopy(t),this.T.isNothing(t))return t;if(this.T.isNothing(t.kwargs)&&!this.supportCustomKwargs&&delete t.kwargs,this.T.isNothing(t.options)&&delete t.options,this.T.notNothing(t.kwargs))for(var e in t.kwargs)0!==e.indexOf("**")&&"files"!==e||delete t.kwargs[e];return t},update:function(t,e,o){for(var n in e=e||{},e.kwargs=e.kwargs||{},e.options=e.options||{},this.apiKwargs=this.T.jsonCopy(e.kwargs),this.funcKwargs=this.T.jsonCopy(o)||{},this.callOptions)this.callOptions[n]=this.DEFAULT_CALL_OPTIONS[n];e=this.washAPIBody(e);var i="";this.T.notNothing(e)&&(i=JSON.stringify(e,null,2)),this.apiURL=t,this.apiBodyInput=i,this.show=!0},getExample:function(t,e){if(!this.apiBody)return null;t=t||"normal",e=e||{},e.asHTML=e.asHTML||!1,e.decodeURL=e.decodeURL||!1;var o=this.washAPIBody(this.apiBody)||{},n=null,i={};switch(t){case"normal":i=o||i,n=this.T.formatURL(this.apiURL,{query:i});break;case"simplified":i=o.kwargs||i,n=this.T.formatURL(this.apiURL_simplified,{query:i});break}return e.asHTML&&(n=this.prettyURLForHTML(n)),e.decodeURL&&(n=decodeURIComponent(n)),n},postExample:function(t,e){if(!this.apiBody)return null;t=t||"normal",e=e||{},e.oneLine=e.oneLine||!1,e.contentType=e.contentType||"json";var o=this.washAPIBody(this.apiBody)||{},n="\\\n",i=["curl",n,"-X","POST",n];switch(t){case"normal":this.T.notNothing(o)&&(i.push("-H",'"Content-Type: application/json"',n),i.push("-d","'".concat(JSON.stringify(o),"'"),n)),i.push(this.apiURL);break;case"simplified":if(this.T.notNothing(o.kwargs))switch(e.contentType){case"json":i.push("-H",'"Content-Type: application/json"',n),i.push("-d","'".concat(JSON.stringify(o.kwargs),"'"),n);break;case"form":if(this.supportFileUpload)for(var a in i.push("-H",'"Content-Type: multipart/form-data"',n),o.kwargs)i.push("-F","'".concat(a,"=").concat(o.kwargs[a],"'"),n);else i.push("-H",'"Content-Type: application/x-www-form-urlencoded"',n),i.push("-d","'".concat(this.T.formatQuery(o.kwargs),"'"),n);break}this.supportFileUpload&&i.push("-F","files=@UPLOAD_FILE_PATH",n),i.push(this.apiURL_simplified);break}e.oneLine&&(i=i.filter((function(t){return t!==n})));var s=i.join(" ");return s}},computed:{DEFAULT_CALL_OPTIONS:function(){return{execMode:"sync",saveResult:!1,timeout:this.$store.getters.SYSTEM_INFO("_FUNC_TASK_TIMEOUT_DEFAULT"),apiTimeout:this.$store.getters.SYSTEM_INFO("_FUNC_TASK_DEFAULT_API_TIMEOUT")}},showOptions:function(){return this.showExecModeOption||this.showSaveResultOption||this.showTimeoutOption||this.showAPITimeoutOption},showGet:function(){return this.showGetExample||this.showGetExampleSimplified},showPost:function(){return this.showPostExample||this.showPostExampleSimplified},apiURL_simplified:function(){return"".concat(this.apiURL,"/simplified")},apiBody:function(){if(!this.apiBodyInput)return{};var t=null;try{t=JSON.parse(this.apiBodyInput)}catch(e){return null}return t},onlyStringParameter:function(){if(!this.apiBody)return!1;var t=this.apiBody.kwargs||{};for(var e in t)if("string"!==typeof t[e])return!1;return!0},supportFileUpload:function(){return!(!this.apiKwargs||!this.apiKwargs.files)&&this.common.isFuncArgumentPlaceholder(this.apiKwargs.files)},supportCustomKwargs:function(){if(this.funcKwargs)for(var t in this.funcKwargs)if(0===t.indexOf("**"))return!0;return!1}},props:{title:String,showExecModeOption:{type:Boolean,default:!1},showSaveResultOption:{type:Boolean,default:!1},showTimeoutOption:{type:Boolean,default:!1},showAPITimeoutOption:{type:Boolean,default:!1},showGetExample:{type:Boolean,default:!0},showGetExampleSimplified:{type:Boolean,default:!1},showPostExample:{type:Boolean,default:!0},showPostExampleSimplified:{type:Boolean,default:!1}},data:function(){return{show:!1,apiURL:null,apiBodyInput:null,apiKwargs:null,funcKwargs:null,callOptions:{execMode:null,saveResult:null,timeout:null,apiTimeout:null}}}}),s=a,l=(o("26fe"),o("2877")),r=o("1fe2"),p=o("a2ad"),u=o("dad7"),d=o("af5a"),c=Object(l["a"])(s,n,i,!1,null,"b4ea2ab2",null);"function"===typeof r["default"]&&Object(r["default"])(c),"function"===typeof p["default"]&&Object(p["default"])(c),"function"===typeof u["default"]&&Object(u["default"])(c),"function"===typeof d["default"]&&Object(d["default"])(c);e["a"]=c.exports},dad7:function(t,e,o){"use strict";var n=o("9f77"),i=o.n(n);e["default"]=i.a},ebfc:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-CN":{"API Example":"API 调用示例","Request Options":"请求选项","Async":"异步执行","Save Result":"保留结果","Func Timeout":"函数超时","API Timeout":"API 超时","Input Parameters":"填写参数","Calling Example":"调用示例","Simple GET":"GET 简化形式","Normal GET":"GET 标准形式","Simple POST (JSON)":"POST 简化形式（JSON）","Simple POST (Form)":"POST 简化形式（表单）","Normal POST":"POST 标准形式","The JSON inside \\"kwargs\\" is the call parameter, modify its value and check out the calling example below":"\\"kwargs\\" 内的 JSON 即为调用参数，修改其中的值并在下方查看具体调用示例","This Python function allows additional parameters (**kwargs syntax)":"本 Python 函数支持传递额外的参数（**kwargs 语法）","This Python function allows uploading files, field name of the uploading file is \\"files\\"":"本 Python 函数支持文件上传，文件字段名为\\"files\\"","Invalid Parameters. Examples require a valid Body content":"参数填写存在错误，正确填写后将展示示例","Only string arguments are allowed in this from":"此方式参数值只支持字符串","Parameter \\"kwargs\\" should be URL encoded in HTTP request":"发送请求时，\\"kwargs\\" 参数需要进行 URL encode 编码","Parameter \\"options\\" are not supported in this from":"此方式不支持 \\"options\\" 参数","When posting form data, \\"Content-Type\\" should be \\"multipart/form-data\\" or \\"application/x-www-form-urlencoded\\", and the values of the fields support string value only":"POST 表单数据时，\\"Content-Type\\" 必须指定为 \\"multipart/form-data\\" 或 \\"application/x-www-form-urlencoded\\"，此时 Body 中参数值只支持字符串","When posting JSON data, \\"Content-Type\\" should be \\"application/json\\"":"POST JSON 数据时，\\"Content-Type\\" 必须指定为 \\"application/json\\"","When uploading files, \\"Content-Type\\" should be \\"multipart/form-data\\"":"上传文件时，\\"Content-Type\\" 必须指定为 \\"multipart/form-data\\"","File uploading is not supported in this this form":"此方式不支持文件上传","seconds":"秒"}}'),delete t.options._Ctor}}}]);