(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{597:function(a,e,t){"use strict";t.r(e);var v=t(35),_=Object(v.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"webpack4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack4"}},[a._v("#")]),a._v(" Webpack4")]),a._v(" "),t("h2",{attrs:{id:"webpack与grunt、gulp的不同"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack与grunt、gulp的不同"}},[a._v("#")]),a._v(" webpack与grunt、gulp的不同")]),a._v(" "),t("ol",[t("li",[a._v("三者都是前端构建工具，grunt和gulp在早期比较流行，现在webpack相对来说比较主流，不过一些轻量化的任务还是会用gulp来处理，比如单独打包CSS文件等。")]),a._v(" "),t("li",[a._v("grunt和gulp是基于任务和流（Task、Stream）的。类似jQuery，找到一个（或一类）文件，对其做一系列链式操作，更新流上的数据， 整条链式操作构成了一个任务，多个任务就构成了整个web的构建流程。")]),a._v(" "),t("li",[a._v("webpack是基于入口的。webpack会自动地递归解析入口所需要加载的所有资源文件，然后用不同的Loader来处理不同的文件，用Plugin来扩展webpack功能。")]),a._v(" "),t("li",[a._v("从构建思路来说，gulp和grunt需要开发者将整个前端构建过程拆分成多个"),t("code",[a._v("Task")]),a._v("，并合理控制所有"),t("code",[a._v("Task")]),a._v("的调用关系 webpack需要开发者找到入口，并需要清楚对于不同的资源应该使用什么Loader做何种解析和加工")])]),a._v(" "),t("h2",{attrs:{id:"webpack怎么优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack怎么优化"}},[a._v("#")]),a._v(" webpack怎么优化")]),a._v(" "),t("ul",[t("li",[a._v("多入口情况下，使用CommonsChunkPlugin来提取公共代码")]),a._v(" "),t("li",[a._v("通过externals配置来提取常用库")]),a._v(" "),t("li",[a._v("利用DllPlugin和DllReferencePlugin预编译资源模块 通过DllPlugin来对那些我们引用但是绝对不会修改的npm包来进行预编译，再通过DllReferencePlugin将预编译的模块加载进来。")]),a._v(" "),t("li",[a._v("使用Happypack 实现多线程加速编译")]),a._v(" "),t("li",[a._v("使用webpack-uglify-parallel来提升uglifyPlugin的压缩速度。 原理上webpack-uglify-parallel采用了多核并行压缩来提升压缩速度")]),a._v(" "),t("li",[a._v("使用Tree-shaking和Scope Hoisting来剔除多余代码")])]),a._v(" "),t("h2",{attrs:{id:"常见的loader及作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见的loader及作用"}},[a._v("#")]),a._v(" 常见的Loader及作用")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("loader")]),a._v(" "),t("th",[a._v("说明")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("babel-loader")]),a._v(" "),t("td",[a._v("把 ES6 转换成 ES5")])]),a._v(" "),t("tr",[t("td",[a._v("css-loader")]),a._v(" "),t("td",[a._v("加载 CSS，支持模块化、压缩、文件导入等特性")])]),a._v(" "),t("tr",[t("td",[a._v("style-loader")]),a._v(" "),t("td",[a._v("把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS")])]),a._v(" "),t("tr",[t("td",[a._v("file-loader")]),a._v(" "),t("td",[a._v("把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件")])]),a._v(" "),t("tr",[t("td",[a._v("url-loader")]),a._v(" "),t("td",[a._v("和 file-loader 类似，但是能在文件很小的情况下以 base64 的方式把文件内容注入到代码中去")])]),a._v(" "),t("tr",[t("td",[a._v("source-map-loader")]),a._v(" "),t("td",[a._v("加载额外的 Source Map 文件，以方便断点调试")])]),a._v(" "),t("tr",[t("td",[a._v("image-loader")]),a._v(" "),t("td",[a._v("加载并且压缩图片文件")])]),a._v(" "),t("tr",[t("td",[a._v("eslint-loader")]),a._v(" "),t("td",[a._v("通过 ESLint 检查 JavaScript 代码")])])])]),a._v(" "),t("h2",{attrs:{id:"常见的plugin及作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见的plugin及作用"}},[a._v("#")]),a._v(" 常见的Plugin及作用")]),a._v(" "),t("h3",{attrs:{id:"html-webpack-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#html-webpack-plugin"}},[a._v("#")]),a._v(" html-webpack-plugin")]),a._v(" "),t("p",[a._v("在内存中生成html 页面的插件;并加上"),t("code",[a._v('<script src="bundle.js" type="text/javascript"><\/script>')])]),a._v(" "),t("h3",{attrs:{id:"webpack-defineplugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-defineplugin"}},[a._v("#")]),a._v(" webpack.DefinePlugin")]),a._v(" "),t("p",[a._v("在打包过程中"),t("code",[a._v("定义全局变量")]),a._v("(定义环境变量)，主要用于告诉业务代码当前环境，是生产环境还得开发环境。之后就可以针对不同环境进行不同操作，比如生产环境要压缩，开发环境不需要压缩")]),a._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("webpack"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("DefinePlugin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[a._v("'process.env'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" env\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h3",{attrs:{id:"uglifyjs-webpack-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uglifyjs-webpack-plugin"}},[a._v("#")]),a._v(" uglifyjs-webpack-plugin")]),a._v(" "),t("p",[a._v("通过UglifyES压缩ES6代码")]),a._v(" "),t("h3",{attrs:{id:"commons-chunk-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commons-chunk-plugin"}},[a._v("#")]),a._v(" commons-chunk-plugin")]),a._v(" "),t("p",[a._v("提取公共代码")]),a._v(" "),t("h2",{attrs:{id:"loader和plugin的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#loader和plugin的区别"}},[a._v("#")]),a._v(" Loader和Plugin的区别")]),a._v(" "),t("p",[a._v("由于 webpack 本身只能打包commonjs规范的js文件，所以，针对css，图片等格式的文件没法打包，就需要引入第三方的模块进行打包。")]),a._v(" "),t("h3",{attrs:{id:"功能不同"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#功能不同"}},[a._v("#")]),a._v(" 功能不同")]),a._v(" "),t("p",[a._v("Loader：加载器，作用是为了"),t("strong",[a._v("转化文件")]),a._v("，完成压缩打包，比如")]),a._v(" "),t("ul",[t("li",[a._v("css-loader和style-loader模块是为了打包css的")]),a._v(" "),t("li",[a._v("babel-loader和babel-core模块时为了把ES6的代码转成ES5")]),a._v(" "),t("li",[a._v("url-loader和file-loader是把图片进行打包的")])]),a._v(" "),t("p",[a._v("Plugin: 插件，作用于webpack本身上的。而且plugin不仅只局限在打包，资源的加载上，它的功能要更加丰富。从打包优化和压缩，到重新定义环境变量，功能强大到可以用来处理各种各样的任务。webpack提供了很多开箱即用的插件：CommonChunkPlugin主要用于提取第三方库和公共模块，避免首屏加载的bundle文件，或者按需加载的bundle文件体积过大，导致加载时间过长，是一把优化的利器。而在多页面应用中，更是能够为每个页面间的应用程序共享代码创建bundle")]),a._v(" "),t("h3",{attrs:{id:"运行时机不同"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行时机不同"}},[a._v("#")]),a._v(" 运行时机不同")]),a._v(" "),t("ol",[t("li",[a._v("loader运行在打包文件之前（loader为在模块加载时的预处理文件）")]),a._v(" "),t("li",[a._v("plugins在整个编译周期都起作用")])]),a._v(" "),t("h2",{attrs:{id:"是否写过loader和plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#是否写过loader和plugin"}},[a._v("#")]),a._v(" 是否写过Loader和Plugin")]),a._v(" "),t("h2",{attrs:{id:"webpack的生命周期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack的生命周期"}},[a._v("#")]),a._v(" webpack的生命周期")]),a._v(" "),t("p",[a._v("webpack的构建流程是什么?从读取配置到输出文件这个过程尽量说全？")]),a._v(" "),t("p",[a._v("Webpack 的运行流程是一个串行的过程，从启动到结束会依次执行以下流程：")]),a._v(" "),t("ol",[t("li",[t("strong",[a._v("初始化参数")]),a._v("：从配置文件和 "),t("code",[a._v("Shell")]),a._v(" 语句中读取与合并参数，得出最终的参数；")]),a._v(" "),t("li",[t("strong",[a._v("开始编译")]),a._v("：用上一步得到的参数初始化 "),t("code",[a._v("Compiler")]),a._v(" 对象，加载所有配置的插件，执行对象的 "),t("code",[a._v("run")]),a._v(" 方法开始执行编译；")]),a._v(" "),t("li",[t("strong",[a._v("确定入口")]),a._v("：根据配置中的 "),t("code",[a._v("entry")]),a._v(" 找出所有的入口文件；")]),a._v(" "),t("li",[t("strong",[a._v("编译模块")]),a._v("：从入口文件出发，调用所有配置的 "),t("code",[a._v("Loader")]),a._v(" 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理；")]),a._v(" "),t("li",[t("strong",[a._v("完成模块编译")]),a._v("：在经过第4步使用 "),t("code",[a._v("Loader")]),a._v(" 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系；")]),a._v(" "),t("li",[t("strong",[a._v("输出资源")]),a._v("：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 "),t("code",[a._v("Chunk")]),a._v("，再把每个 "),t("code",[a._v("Chunk")]),a._v(" 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会；")]),a._v(" "),t("li",[t("strong",[a._v("输出完成")]),a._v("：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。")])]),a._v(" "),t("p",[a._v("在以上过程中，Webpack 会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用 Webpack 提供的 API 改变 Webpack 的运行结果。")]),a._v(" "),t("h2",{attrs:{id:"webpack的热更新是如何做到的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack的热更新是如何做到的"}},[a._v("#")]),a._v(" webpack的热更新是如何做到的")]),a._v(" "),t("p",[a._v("热更新（Hot Module Replacement，简称HMR）无需完全刷新整个页面的同时，更新模块")]),a._v(" "),t("p",[a._v("WDS (webpack-dev-server插件)的模块热替换")]),a._v(" "),t("ol",[t("li",[a._v("使用"),t("code",[a._v("weback.HotModuleReplacementPlugin")]),a._v(",会生成两个补丁文件：")])]),a._v(" "),t("ul",[t("li",[a._v("上一次编译生成的"),t("code",[a._v("hash.hot-update.json")]),a._v(",说明上次编译到现在哪些代码块发生改变")]),a._v(" "),t("li",[a._v("chunk名字，上一次编译生成的"),t("code",[a._v("hash.hot-update.js")]),a._v("，存放着此次代码块最新的模块定义，里面会用"),t("code",[a._v("webpackHotUpdate")]),a._v("方法")])]),a._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("p",[a._v("向代码快中注入HMR runtime代码，热更新的主要逻辑，比如拉取拉取代码，执行代码，执行"),t("code",[a._v("accept")]),a._v("回调都是它注入的到chunk中的")])]),a._v(" "),t("li",[t("p",[t("code",[a._v("hotCreateRequire")]),a._v("会帮助我们给模块module的"),t("code",[a._v("parents")]),a._v("，"),t("code",[a._v("children")]),a._v("赋值")])])]),a._v(" "),t("h2",{attrs:{id:"module-chunk-bundle分别什么意思-有何区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#module-chunk-bundle分别什么意思-有何区别"}},[a._v("#")]),a._v(" module chunk bundle分别什么意思，有何区别")]),a._v(" "),t("ul",[t("li",[a._v("module - 各源码文件")]),a._v(" "),t("li",[a._v("chunk - 多模块的合并成的，如entry、import()、splitChunk")]),a._v(" "),t("li",[a._v("bundle - 最终的输出文件")])]),a._v(" "),t("h2",{attrs:{id:"webpack如何实现懒加载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack如何实现懒加载"}},[a._v("#")]),a._v(" webpack如何实现懒加载")]),a._v(" "),t("h2",{attrs:{id:"webpack常见的性能优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack常见的性能优化"}},[a._v("#")]),a._v(" webpack常见的性能优化")]),a._v(" "),t("h2",{attrs:{id:"如何提高webpack的构建速度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何提高webpack的构建速度"}},[a._v("#")]),a._v(" 如何提高webpack的构建速度")]),a._v(" "),t("h2",{attrs:{id:"babel-runtime和babel-polyfill的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#babel-runtime和babel-polyfill的区别"}},[a._v("#")]),a._v(" babel-runtime和babel-polyfill的区别")]),a._v(" "),t("h2",{attrs:{id:"webpack基本配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack基本配置"}},[a._v("#")]),a._v(" webpack基本配置")]),a._v(" "),t("p",[a._v("https://www.cnblogs.com/gaoht/p/11310365.html")])])}),[],!1,null,null,null);e.default=_.exports}}]);