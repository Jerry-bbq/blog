(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{426:function(t,e,s){t.exports=s.p+"assets/img/webkit-painting.da7a7c3c.png"},498:function(t,e,s){"use strict";s.r(e);var a=s(26),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"浏览器的渲染过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的渲染过程"}},[t._v("#")]),t._v(" 浏览器的渲染过程")]),t._v(" "),a("p",[t._v("\b\b以webkit渲染的为例:")]),t._v(" "),a("p",[a("img",{attrs:{src:s(426),alt:"\b\bwebkit渲染过程"}})]),t._v(" "),a("h2",{attrs:{id:"_1-解析html生成dom树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-解析html生成dom树"}},[t._v("#")]),t._v(" 1.解析HTML生成DOM树")]),t._v(" "),a("p",[t._v("当浏览器接收到服务器响应来的HTML文档后，会遍历文档节点，"),a("code",[t._v("HTML Parser")]),t._v("将HTML标记解析成DOM Tree")]),t._v(" "),a("h2",{attrs:{id:"_2-解析css生成cssom规则树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-解析css生成cssom规则树"}},[t._v("#")]),t._v(" 2.解析CSS生成CSSOM规则树")]),t._v(" "),a("p",[a("code",[t._v("CSS Parse")]),t._v("将每个CSS文件都被解析成一个StyleSheet对象，每个对象都包含Style Rules，Style Rules也叫CSSOM（CSS Object Model）")]),t._v(" "),a("h2",{attrs:{id:"_3-将dom树与cssom规则树合并在一起生成rendertree渲染树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-将dom树与cssom规则树合并在一起生成rendertree渲染树"}},[t._v("#")]),t._v(" 3. 将DOM树与CSSOM规则树合并在一起生成RenderTree渲染树")]),t._v(" "),a("p",[t._v("Render Tree的构建其实就是DOM Tree和CSSOM Attach的过程(每个 DOM 节点都有一个“attach”方法)")]),t._v(" "),a("h2",{attrs:{id:"_4-遍历渲染树开始布局-计算每个节点的位置、大小-layout-回流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-遍历渲染树开始布局-计算每个节点的位置、大小-layout-回流"}},[t._v("#")]),t._v(" 4.遍历渲染树开始布局，计算每个节点的位置、大小（Layout(回流）")]),t._v(" "),a("p",[t._v("创建渲染树后，下一步就是布局"),a("code",[t._v("Layout")]),t._v(",或者叫回流（reflow），这个过程就是通过渲染树中渲染对象的信息，计算出每一个渲染对象的位置和尺寸，将其安置在浏览器窗口的正确位置，而有些时候我们会在文档布局完成后对DOM进行修改，这时候可能需要重新进行布局，也可称其为回流，本质上还是一个布局的过程，每一个渲染对象都有一个布局或者回流方法，实现其布局或回流。")]),t._v(" "),a("h2",{attrs:{id:"_5-将渲染树每个节点绘制到屏幕"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-将渲染树每个节点绘制到屏幕"}},[t._v("#")]),t._v(" 5.将渲染树每个节点绘制到屏幕")]),t._v(" "),a("p",[t._v("在绘制阶段，系统会遍历渲染树，并调用渲染器的"),a("code",[t._v("Painting")]),t._v("方法，将渲染器的内容显示在屏幕上")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("说明")]),t._v(" "),a("ul",[a("li",[t._v("在构建DOM Tree的过程中可能会被CSS或者JS的加载而执行阻塞")]),t._v(" "),a("li",[t._v("解析DOM和解析CSS同时进行，但是与JS执行是互斥的")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);