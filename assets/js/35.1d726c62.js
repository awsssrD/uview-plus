(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{314:function(t,e,o){},325:function(t,e,o){"use strict";o(314)},411:function(t,e,o){"use strict";o.r(e);var i=o(315),s=o(303),a={name:"Sidebar",components:{SidebarLinks:i.default,NavLinks:s.default},data:()=>({apiShow:""}),props:["items"],created(){if("undefined"!=typeof window)switch(this.apiShow=localStorage.getItem("apiShow")?localStorage.getItem("apiShow"):"composition",console.log(this.apiShow,"apiShow"),this.apiShow){case"options":document.querySelector("#app").classList.remove("show-composition"),document.querySelector("#app").classList.add("show-options");break;case"composition":default:document.querySelector("#app").classList.remove("show-options"),document.querySelector("#app").classList.add("show-composition")}},methods:{apiChange(t){if("undefined"!=typeof window)switch(localStorage.setItem("apiShow",t),this.apiShow){case"options":document.querySelector("#app").classList.remove("show-composition"),document.querySelector("#app").classList.add("show-options");break;case"composition":default:document.querySelector("#app").classList.remove("show-options"),document.querySelector("#app").classList.add("show-composition")}}}},n=(o(325),o(6)),p=Object(n.a)(a,(function(){var t=this,e=t._self._c;return e("div",[e("aside",{staticClass:"sidebar",style:{marginTop:t.showV2Tips?"2.3rem":0}},[e("a",{staticClass:"jump-linker",attrs:{target:"_blank",href:"https://uiadmin.net?from=uview-plus"}},[e("img",{attrs:{src:t.$withBase("/customer/uiadmin.jpg")}})]),t._v(" "),e("div",{staticClass:"jump-linker",attrs:{target:"_blank"}},[e("img",{attrs:{src:t.$withBase("/customer/meituan2.png")}})]),t._v(" "),e("div",{staticStyle:{"background-color":"#f9f9f9",padding:"15px 10px","margin-top":"15px",width:"170px","border-radius":"6px"}},[e("el-switch",{attrs:{"active-value":"composition","inactive-value":"options","active-text":"组合式","inactive-text":"选项式"},on:{change:t.apiChange},model:{value:t.apiShow,callback:function(e){t.apiShow=e},expression:"apiShow"}})],1),t._v(" "),e("NavLinks"),t._v(" "),t._t("top"),t._v(" "),e("SidebarLinks",{attrs:{depth:0,items:t.items}}),t._v(" "),t._t("bottom")],2)])}),[],!1,null,null,null);e.default=p.exports}}]);