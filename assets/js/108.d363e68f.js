(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{577:function(t,a,s){"use strict";s.r(a);var n=s(6),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"lazyload-图片懒加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lazyload-图片懒加载"}},[t._v("#")]),t._v(" LazyLoad 图片懒加载 "),a("to-api")],1),t._v(" "),a("demo-model",{attrs:{url:"/pages/componentsA/lazyLoad/lazyLoad"}}),t._v(" "),a("p",[t._v("懒加载使用的场景为：页面有很多图片时，APP会同时加载所有的图片，导致页面卡顿，各个位置的图片出现前后不一致等"),a("br"),t._v("\n本组件高度封装和集成，创新性地使用"),a("code",[t._v("uni.createIntersectionObserver")]),t._v("\n接口，保证高性能的同时，还有其他友好的可配置参数，比如预加载占位图，加载错误占位图，加载位置参数(threshold)，各种事件等。")]),t._v(" "),a("custom-block"),t._v(" "),a("h3",{attrs:{id:"平台差异说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#平台差异说明"}},[t._v("#")]),t._v(" 平台差异说明")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("App")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("H5")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("微信小程序")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("支付宝小程序")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("百度小程序")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("头条小程序")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("QQ小程序")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("√")])])])]),t._v(" "),a("h3",{attrs:{id:"基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[t._v("#")]),t._v(" 基本使用")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("image")]),t._v("参数传入图片的"),a("code",[t._v("src")]),t._v("路径即可")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("由于uni-app默认给了image组件的"),a("code",[t._v("height")]),t._v("为225px，同时也只有在uni-appimage组件的"),a("code",[t._v("mode")]),t._v("参数为"),a("code",[t._v("widthFix")]),t._v("时，image才会自动计算出一个高度值\n覆盖默认的"),a("code",[t._v("height")]),t._v("(225px)。其他"),a("code",[t._v("mode")]),t._v("参数下，如果设置"),a("code",[t._v("height")]),t._v("为"),a("code",[t._v("auto")]),t._v("，或者"),a("code",[t._v("100%")]),t._v("的话，图片将会无法显示。")]),t._v(" "),a("p",[t._v("所以：当您使用uView的"),a("code",[t._v("lazyload")]),t._v("组件时，如果设置"),a("code",[t._v("height")]),t._v("参数为"),a("code",[t._v("auto")]),t._v("，或者"),a("code",[t._v("100%")]),t._v("，而"),a("code",[t._v("img-mode")]),t._v("参数又不为"),a("code",[t._v("widthFix")]),t._v("的话，图片将会不显示，这不是uView的BUG。")]),t._v(" "),a("p",[t._v("结论：如果"),a("code",[t._v("img-mode")]),t._v("参数不为"),a("code",[t._v("widthFix")]),t._v("的话，必须设置"),a("code",[t._v("height")]),t._v("参数为一个固定的高度(单位rpx)，否则无效。")])]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("up-lazy-load")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-for")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("(item, index) in list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":key")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":image")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("item.src"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("up-lazy-load")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设计成数组内嵌对象而不是纯数组形式，是考虑到真实环境后端返回的数据为如此形式")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("list")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里图片不存在，会加载失败，显示错误的占位图")]),t._v("\n\t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h3",{attrs:{id:"配置占位图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置占位图"}},[t._v("#")]),t._v(" 配置占位图")]),t._v(" "),a("p",[t._v("占位图有两种情况：")]),t._v(" "),a("ul",[a("li",[t._v("一种是正常预加载时显示的，通过"),a("code",[t._v("loading-img")]),t._v('配置类似"正在加载"的占位图。')]),t._v(" "),a("li",[t._v("另一种是图片加载失败(如图片不存在，路径不完整等)，通过"),a("code",[t._v("error-img")]),t._v('参数配置类似"图片加载错误"的占位图')])]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("up-lazy-load")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":image")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":loading-img")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("loadingImg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":error-img")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("errorImg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("up-lazy-load")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("loadingImg")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/static/uView/loading.png'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("errorImg")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/static/uView/load_error.png'")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h3",{attrs:{id:"图片加载位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片加载位置"}},[t._v("#")]),t._v(" 图片加载位置")]),t._v(" "),a("p",[t._v("可以通过"),a("code",[t._v("threshold")]),t._v("参数设置图片距离屏幕底部多少距离时触发图片加载，单位rpx，说明：")]),t._v(" "),a("ul",[a("li",[t._v("如果取负值(如-300)，为尚未到达屏幕底部，距离300rpx时触发")]),t._v(" "),a("li",[t._v("如果取正数(如300)，为图片超出屏幕底部300rpx时触发")])]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("up-lazy-load")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":image")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("threshold")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("300"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("up-lazy-load")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h3",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("h3",{attrs:{id:"props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" Props")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("可选值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("index")]),t._v(" "),a("td",[t._v("用户自定义值，在事件触发时回调，用以区分是哪个图片")]),t._v(" "),a("td",[t._v("String | Number")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("image")]),t._v(" "),a("td",[t._v("图片路径")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("loading-img")]),t._v(" "),a("td",[t._v("预加载时的占位图")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("error-img")]),t._v(" "),a("td",[t._v("图片加载出错时的占位图")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("threshold")]),t._v(" "),a("td",[t._v("触发加载时的位置，见上方说明，单位 rpx")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("100")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("duration")]),t._v(" "),a("td",[t._v("图片加载成功时，淡入淡出时间，单位ms")]),t._v(" "),a("td",[t._v("String | Number")]),t._v(" "),a("td",[t._v("500")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("effect")]),t._v(" "),a("td",[t._v("图片加载成功时，淡入淡出的css动画效果")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("ease-in-out")]),t._v(" "),a("td",[t._v("linear /  ease / ease-in / ease-out")])]),t._v(" "),a("tr",[a("td",[t._v("is-effect")]),t._v(" "),a("td",[t._v("图片加载成功时，是否启用淡入淡出效果")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("border-radius")]),t._v(" "),a("td",[t._v("图片圆角值，单位rpx")]),t._v(" "),a("td",[t._v("String | Number")]),t._v(" "),a("td",[t._v("0")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("height")]),t._v(" "),a("td",[t._v("图片高度，注意：实际高度可能受"),a("code",[t._v("img-mode")]),t._v("参数影响")]),t._v(" "),a("td",[t._v("String | Number")]),t._v(" "),a("td",[t._v("450")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("img-mode")]),t._v(" "),a("td",[t._v("图片的裁剪模式，详见"),a("a",{attrs:{href:"https://uniapp.dcloud.io/component/image",target:"_blank",rel:"noopener noreferrer"}},[t._v("image组件裁剪模式"),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("String | Number")]),t._v(" "),a("td",[t._v("widthFix")]),t._v(" "),a("td",[t._v("-")])])])]),t._v(" "),a("h3",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("回调参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("版本")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("click")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("点击图片时触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("index：用户通过props传递的"),a("code",[t._v("index")]),t._v("值")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("load")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图片加载成功时触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("index：用户通过props传递的"),a("code",[t._v("index")]),t._v("值")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("error")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图片加载失败时触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("index：用户通过props传递的"),a("code",[t._v("index")]),t._v("值")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);