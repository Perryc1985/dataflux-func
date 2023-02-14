(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26d0fa74"],{"0806":function(t,e,a){},"212e":function(t,e,a){t.exports=a.p+"img/intro-script-market.8841db2b.png"},"34c8":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-CN":{"Welcome":"欢迎","Before you start, please read the following":"在开始之前，请阅读以下内容","Left Sidebar":"编辑器左侧栏","In the left sidebar you can find the core module entrance of the Editor:":"在左边侧栏可以找到编辑器的核心模块入口：","Edit and manage Script Sets and Scripts":"进行脚本集和脚本的编辑和管理","Manage the various external systems available within the Script":"管理脚本内可用的各外部系统","Manage the environment variables available within the Script":"管理脚本内可用的环境变量","Every tab supports quick jumping. Enter ID or name and select it to jump to the item.":"每个标签页都支持快速跳转。输入目标 ID 或名称并选择，即可定位到项目。","Information about the item and the actions that can be performed will be displayed after hovering over it.":"将鼠标悬停在项目上，可展示项目的相关信息以及可进行的操作。","The gray divider between the left sidebar and the editing area can be dragged to adjust the left sidebar width.":"拖动左侧栏与编辑区的灰色分割线，可以调整左侧栏宽度。","Built-in Features":"内置功能","Some built-in objects are pre-injected into the context of the Script and can be accessed directly without importing.":"脚本的上下文环境预先注入了一些内置对象，无需导入即可直接使用。","codeExample":"# 导出函数为 HTTP API 接口\\n@DFF.API(\'API 名称\')\\ndef hello_world():\\n    # 从连接器查询数据\\n    db = DFF.CONN(\'db\')\\n    db.query(\'SELECT * FROM table LIMIT 3\', database=\'my_database\')\\n\\n    # 使用环境变量\\n    company_name = DFF.ENV(\'my_env\')\\n\\n    # 日志输出\\n    DFF.log(\'Hello, world!\')\\n    print(\'Hello, world\')\\n\\n    # 数据返回\\n    ret = {\\n      \'msg\': \'Hello, world\'\\n    }\\n    return ret","Code Editor":"代码编辑器","Select the Script in the left sidebar to enter the Code Editor.":"在左边侧栏中选择脚本进入此脚本的代码编辑器","The common shortcuts for the Code Editor are similar to Sublime Text:":"代码编辑器的基本快捷键与 Sublime Text 类似：","Prompt when typing":"键入时提示","Auto-completion":"自动补全","Toggle comments":"注释/取消注释","Add selection to next find match":"将下一个查找匹配项添加到选择","When no characters are selected":"未选中字符时","Cut whole line":"剪切整行","Copy whole line":"复制整行","Indent lines":"增加行缩进","Outdent lines":"减少行缩进","When multiple lines are selected":"选中多行时","When the focus is in the Code Editor":"焦点在编辑器内时","Open search bar":"打开搜索栏","Features built on the Script are located in the management page.":"建立在脚本之上的各项功能位于管理页面。","Usage overview":"使用概况","System version and status":"系统版本和状态","API authentication for Auth Links and Batches":"用于授权链接和批处理的 API 认证","Allow Python functions be called as HTTP APIs":"允许 Python 函数作为 HTTP API 调用","Calling Python functions at regular intervals":"定时调用 Python 函数","Allow Python functions be called as asynchronous HTTP APIs":"允许 Python 函数作为异步 HTTP API 调用","Export Script Sets as zip files":"将脚本集导出为 zip 文件","Import Script Sets from zip files":"从 zip 文件导入将脚本集","Recover Script Lib to a previous moment":"将脚本库恢复到以前的某个时刻","Manage the users who use the system":"管理使用本系统的用户","Some customization options for the system":"一些客制化选项","Some key operation records":"一些关键操作记录","Toggling experimental features":"打开/关闭实验性功能","Distribute and share code by publishing and installing Script Sets using git repositories, Alibaba Cloud OSS, file services etc.":"使用 git 库、阿里云 OSS、文件服务等进行脚本集的发布、安装，实现代码的分发和共享。"}}'),delete t.options._Ctor}},"3a7f":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("transition",{attrs:{name:"fade"}},[e("el-container",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.isLoaded,expression:"$store.state.isLoaded"}],attrs:{direction:"vertical"}},[e("el-header",{attrs:{height:"60px"}},[e("h1",{staticClass:"main-text"},[t._v("\n        "+t._s(t.$t("Welcome"))+"\n      ")])]),t._v(" "),e("el-main",[e("div",{staticClass:"intro-content"},[e("InfoBlock",{attrs:{type:"warning",title:t.$t("Before you start, please read the following")}}),t._v(" "),e("el-divider",{attrs:{"content-position":"left"}},[e("h1",[e("i",[t._v(t._s(t.$t("Left Sidebar")))])])]),t._v(" "),e("p",[t._v("\n          "+t._s(t.$t("In the left sidebar you can find the core module entrance of the Editor:"))+"\n          "),e("table",{staticClass:"intro-feature-table"},[e("tbody",[e("tr",[e("td",[t._v(t._s(t.$t("Script Lib")))]),t._v(" "),e("td",[e("i",{staticClass:"fa fa-fw fa-long-arrow-right"})]),t._v(" "),e("td",[t._v(t._s(t.$t("Edit and manage Script Sets and Scripts")))])]),t._v(" "),e("tr",[e("td",[t._v(t._s(t.$t("Connector")))]),t._v(" "),e("td",[e("i",{staticClass:"fa fa-fw fa-long-arrow-right"})]),t._v(" "),e("td",[t._v(t._s(t.$t("Manage the various external systems available within the Script")))])]),t._v(" "),e("tr",[e("td",[t._v(t._s(t.$t("ENV")))]),t._v(" "),e("td",[e("i",{staticClass:"fa fa-fw fa-long-arrow-right"})]),t._v(" "),e("td",[t._v(t._s(t.$t("Manage the environment variables available within the Script")))])])])])]),t._v(" "),e("p",[t._v(t._s(t.$t("Every tab supports quick jumping. Enter ID or name and select it to jump to the item.")))]),t._v(" "),e("p",[t._v(t._s(t.$t("Information about the item and the actions that can be performed will be displayed after hovering over it.")))]),t._v(" "),e("p",[t._v(t._s(t.$t("The gray divider between the left sidebar and the editing area can be dragged to adjust the left sidebar width.")))]),t._v(" "),e("el-divider",{attrs:{"content-position":"left"}},[e("h1",[e("i",[t._v(t._s(t.$t("Built-in Features")))])])]),t._v(" "),e("p",[t._v(t._s(t.$t("Some built-in objects are pre-injected into the context of the Script and can be accessed directly without importing.")))]),t._v(" "),e("div",{style:t.$store.getters.codeMirrorSetting.style,attrs:{id:"editorContainer_Intro"}},[e("textarea",{attrs:{id:"editor_Intro"}},[t._v(t._s(t.$t("codeExample")))])]),t._v(" "),e("el-divider",{attrs:{"content-position":"left"}},[e("h1",[e("i",[t._v(t._s(t.$t("Code Editor")))])])]),t._v(" "),e("p",[t._v("\n          "+t._s(t.$t("Select the Script in the left sidebar to enter the Code Editor."))),e("br"),t._v("\n          "+t._s(t.$t("The common shortcuts for the Code Editor are similar to Sublime Text:"))+"\n          "),e("ul",[e("li",[t._v(t._s(t.$t("Prompt when typing"))+" "),e("i",{staticClass:"fa fa-fw fa-caret-right"}),t._v(" "),e("kbd",[t._v("Tab")]),t._v(t._s(t.$t(":"))+" "+t._s(t.$t("Auto-completion")))]),t._v(" "),e("li",[e("kbd",[t._v(t._s(t.T.getSuperKeyName()))]),t._v(" + "),e("kbd",[t._v("/")]),t._v(t._s(t.$t(":"))+" "+t._s(t.$t("Toggle comments")))]),t._v(" "),e("li",[e("kbd",[t._v(t._s(t.T.getSuperKeyName()))]),t._v(" + "),e("kbd",[t._v("D")]),t._v(t._s(t.$t(":"))+" "+t._s(t.$t("Add selection to next find match")))]),t._v(" "),e("li",[t._v(t._s(t.$t("When no characters are selected"))+" "),e("i",{staticClass:"fa fa-fw fa-caret-right"}),t._v(" "),e("kbd",[t._v(t._s(t.T.getSuperKeyName()))]),t._v(" + "),e("kbd",[t._v("X")]),t._v(t._s(t.$t(":"))+" "+t._s(t.$t("Cut whole line")))]),t._v(" "),e("li",[t._v(t._s(t.$t("When no characters are selected"))+" "),e("i",{staticClass:"fa fa-fw fa-caret-right"}),t._v(" "),e("kbd",[t._v(t._s(t.T.getSuperKeyName()))]),t._v(" + "),e("kbd",[t._v("C")]),t._v(t._s(t.$t(":"))+" "+t._s(t.$t("Copy whole line")))]),t._v(" "),e("li",[e("kbd",[t._v(t._s(t.T.getSuperKeyName()))]),t._v(" + "),e("kbd",[t._v("]")]),t._v(t._s(t.$t(":"))+" "+t._s(t.$t("Indent lines")))]),t._v(" "),e("li",[e("kbd",[t._v(t._s(t.T.getSuperKeyName()))]),t._v(" + "),e("kbd",[t._v("[")]),t._v(t._s(t.$t(":"))+" "+t._s(t.$t("Outdent lines")))]),t._v(" "),e("li",[t._v(t._s(t.$t("When multiple lines are selected"))+" "),e("i",{staticClass:"fa fa-fw fa-caret-right"}),t._v(" "),e("kbd",[t._v("Tab")]),t._v(t._s(t.$t(":"))+" "+t._s(t.$t("Indent lines")))]),t._v(" "),e("li",[t._v(t._s(t.$t("When multiple lines are selected"))+" "),e("i",{staticClass:"fa fa-fw fa-caret-right"}),t._v(" "),e("kbd",[t._v("Shift")]),t._v(" + "),e("kbd",[t._v("Tab")]),t._v(t._s(t.$t(":"))+" "+t._s(t.$t("Outdent lines")))]),t._v(" "),e("li",[t._v(t._s(t.$t("When the focus is in the Code Editor"))+" "),e("i",{staticClass:"fa fa-fw fa-caret-right"}),t._v(" "),e("kbd",[t._v(t._s(t.T.getSuperKeyName()))]),t._v(" + "),e("kbd",[t._v("F")]),t._v(t._s(t.$t(":"))+" "+t._s(t.$t("Open search bar")))])])]),t._v(" "),e("el-divider",{attrs:{"content-position":"left"}},[e("h1",[e("i",[t._v(t._s(t.$t("Management")))])])]),t._v(" "),e("p",[t._v("\n          "+t._s(t.$t("Features built on the Script are located in the management page."))+"\n          "),e("table",{staticClass:"intro-feature-table"},[e("tbody",[e("tr",[e("td",[e("i",{staticClass:"fa fa-fw fa-dashboard"}),t._v(" "+t._s(t.$t("Overview")))]),t._v(" "),e("td",[e("i",{staticClass:"fa fa-fw fa-long-arrow-right"})]),t._v(" "),e("td",[t._v(t._s(t.$t("Usage overview")))])]),t._v(" "),e("tr",[e("td",[e("i",{staticClass:"fa fa-fw fa-info-circle"}),t._v(" "+t._s(t.$t("About")))]),t._v(" "),e("td",[e("i",{staticClass:"fa fa-fw fa-long-arrow-right"})]),t._v(" "),e("td",[t._v(t._s(t.$t("System version and status")))])]),t._v(" "),e("tr",[e("td",[e("i",{staticClass:"fa fa-fw fa-lock"}),t._v(" "+t._s(t.$t("API Auth")))]),t._v(" "),e("td",[e("i",{staticClass:"fa fa-fw fa-long-arrow-right"})]),t._v(" "),e("td",[t._v(t._s(t.$t("API authentication for Auth Links and Batches")))])]),t._v(" "),e("tr",[e("td",[e("i",{staticClass:"fa fa-fw fa-link"}),t._v(" "+t._s(t.$t("Auth Link")))]),t._v(" "),e("td",[e("i",{staticClass:"fa fa-fw fa-long-arrow-right"})]),t._v(" "),e("td",[t._v(t._s(t.$t("Allow Python functions be called as HTTP APIs")))])]),t._v(" "),e("tr",[e("td",[e("i",{staticClass:"fa fa-fw fa-clock-o"}),t._v(" "+t._s(t.$t("Crontab Config")))]),t._v(" "),e("td",[e("i",{staticClass:"fa fa-fw fa-long-arrow-right"})]),t._v(" "),e("td",[t._v(t._s(t.$t("Calling Python functions at regular intervals")))])]),t._v(" "),e("tr",[e("td",[e("i",{staticClass:"fa fa-fw fa-tasks"}),t._v(" "+t._s(t.$t("Batch")))]),t._v(" "),e("td",[e("i",{staticClass:"fa fa-fw fa-long-arrow-right"})]),t._v(" "),e("td",[t._v(t._s(t.$t("Allow Python functions be called as asynchronous HTTP APIs")))])]),t._v(" "),e("tr",[e("td",[e("i",{staticClass:"fa fa-fw fa-cloud-download"}),t._v(" "+t._s(t.$t("Script Set Export")))]),t._v(" "),e("td",[e("i",{staticClass:"fa fa-fw fa-long-arrow-right"})]),t._v(" "),e("td",[t._v(t._s(t.$t("Export Script Sets as zip files")))])]),t._v(" "),e("tr",[e("td",[e("i",{staticClass:"fa fa-fw fa-cloud-upload"}),t._v(" "+t._s(t.$t("Script Sets Import")))]),t._v(" "),e("td",[e("i",{staticClass:"fa fa-fw fa-long-arrow-right"})]),t._v(" "),e("td",[t._v(t._s(t.$t("Import Script Sets from zip files")))])]),t._v(" "),e("tr",[e("td",[e("i",{staticClass:"fa fa-fw fa-history"}),t._v(" "+t._s(t.$t("Script Lib Recover")))]),t._v(" "),e("td",[e("i",{staticClass:"fa fa-fw fa-long-arrow-right"})]),t._v(" "),e("td",[t._v(t._s(t.$t("Recover Script Lib to a previous moment")))])]),t._v(" "),e("tr",[e("td",[e("i",{staticClass:"fa fa-fw fa-users"}),t._v(" "+t._s(t.$t("User Manage")))]),t._v(" "),e("td",[e("i",{staticClass:"fa fa-fw fa-long-arrow-right"})]),t._v(" "),e("td",[t._v(t._s(t.$t("Manage the users who use the system")))])]),t._v(" "),e("tr",[e("td",[e("i",{staticClass:"fa fa-fw fa-cog"}),t._v(" "+t._s(t.$t("System Config")))]),t._v(" "),e("td",[e("i",{staticClass:"fa fa-fw fa-long-arrow-right"})]),t._v(" "),e("td",[t._v(t._s(t.$t("Some customization options for the system")))])]),t._v(" "),e("tr",[e("td",[e("i",{staticClass:"fa fa-fw fa-keyboard-o"}),t._v(" "+t._s(t.$t("Operation Records")))]),t._v(" "),e("td",[e("i",{staticClass:"fa fa-fw fa-long-arrow-right"})]),t._v(" "),e("td",[t._v(t._s(t.$t("Some key operation records")))])]),t._v(" "),e("tr",[e("td",[e("i",{staticClass:"fa fa-fw fa-flask"}),t._v(" "+t._s(t.$t("Experimental Features")))]),t._v(" "),e("td",[e("i",{staticClass:"fa fa-fw fa-long-arrow-right"})]),t._v(" "),e("td",[t._v(t._s(t.$t("Toggling experimental features")))])])])])]),t._v(" "),e("el-divider",{attrs:{"content-position":"left"}},[e("h1",[e("i",[t._v(t._s(t.$t("Script Market")))])])]),t._v(" "),e("p",[t._v("\n          "+t._s(t.$t("Distribute and share code by publishing and installing Script Sets using git repositories, Alibaba Cloud OSS, file services etc."))+"\n        ")]),t._v(" "),e("el-image",{attrs:{src:t.img_introScriptMarket}})],1)])],1)],1)},s=[],r=(a("130f"),a("212e")),n=a.n(r),o={name:"Intro",components:{},watch:{codeMirrorTheme:function(t){this.codeMirror.setOption("theme",t)}},methods:{onCollapseChange:function(t){var e=this;Array.isArray(t)&&t.indexOf("engineBuiltinFunction")>=0&&setImmediate((function(){e.codeMirror&&e.codeMirror.refresh()}))}},computed:{IMAGES:function(){return{introImg_editorEntry:introImg_editorEntry,introImg_editorAside:introImg_editorAside}},codeMirrorTheme:function(){return this.T.getCodeMirrorThemeName()},featureNameWidth_leftSidebar:function(){switch(this.$store.state.uiLocale){case"en":return"90px";case"zh-CN":default:return"70px"}},featureNameWidth_management:function(){switch(this.$store.state.uiLocale){case"en":return"200px";case"zh-CN":default:return"130px"}}},props:{},data:function(){return{codeMirror:null,img_introScriptMarket:n.a}},created:function(){this.$store.commit("updateLoadStatus",!0)},mounted:function(){var t=this;setImmediate((function(){t.codeMirror=t.T.initCodeMirror("editor_Intro"),t.codeMirror.setOption("theme",t.codeMirrorTheme),document.getElementsByTagName("main")[0].scrollTo(0,0)}))},beforeDestroy:function(){this.T.destoryCodeMirror(this.codeMirror)}},l=o,d=(a("e1c8"),a("bd59"),a("2877")),_=a("e55a"),c=a("9a6c"),f=Object(d["a"])(l,i,s,!1,null,"63d36aac",null);"function"===typeof _["default"]&&Object(_["default"])(f),"function"===typeof c["default"]&&Object(c["default"])(f);e["default"]=f.exports},"7a4e":function(t,e,a){},"9a6c":function(t,e,a){"use strict";var i=a("34c8"),s=a.n(i);e["default"]=s.a},bd59:function(t,e,a){"use strict";a("0806")},cf19:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push("{\"en\":{\"codeExample\":\"# Export function as an HTTP API\\n@DFF.API('API Name')\\ndef hello_world():\\n    # Query data from connector\\n    db = DFF.CONN('db')\\n    db.query('SELECT * FROM table LIMIT 3', database='my_database')\\n\\n    # Get environment variable\\n    company_name = DFF.ENV('my_env')\\n\\n    # Print logs\\n    DFF.log('Hello, world!')\\n    print('Hello, world')\\n\\n    # Return data\\n    ret = {\\n      'msg': 'Hello, world'\\n    }\\n    return ret\"}}"),delete t.options._Ctor}},e1c8:function(t,e,a){"use strict";a("7a4e")},e55a:function(t,e,a){"use strict";var i=a("cf19"),s=a.n(i);e["default"]=s.a}}]);