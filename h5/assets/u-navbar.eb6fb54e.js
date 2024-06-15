import{l as t,n as e,m as a,f as l,s as r,p as n,J as o,x as s,d as i,o as c,c as u,w as f,u as d,v as h,a as _,z as b,h as g,j as p,t as y,i as v,k as m}from"./index-054a1b31.js";import{_ as k}from"./u-status-bar.aefa3e64.js";import{r as x}from"./uni-app.es.a298917b.js";import{_ as C}from"./u-icon.c8042ef3.js";import{_ as I}from"./_plugin-vue_export-helper.1b428a4d.js";const S=I({name:"u-navbar",mixins:[a,l,t({props:{safeAreaInsetTop:{type:Boolean,default:()=>e.navbar.safeAreaInsetTop},placeholder:{type:Boolean,default:()=>e.navbar.placeholder},fixed:{type:Boolean,default:()=>e.navbar.fixed},border:{type:Boolean,default:()=>e.navbar.border},leftIcon:{type:String,default:()=>e.navbar.leftIcon},leftText:{type:String,default:()=>e.navbar.leftText},rightText:{type:String,default:()=>e.navbar.rightText},rightIcon:{type:String,default:()=>e.navbar.rightIcon},title:{type:[String,Number],default:()=>e.navbar.title},bgColor:{type:String,default:()=>e.navbar.bgColor},titleWidth:{type:[String,Number],default:()=>e.navbar.titleWidth},height:{type:[String,Number],default:()=>e.navbar.height},leftIconSize:{type:[String,Number],default:()=>e.navbar.leftIconSize},leftIconColor:{type:String,default:()=>e.navbar.leftIconColor},autoBack:{type:Boolean,default:()=>e.navbar.autoBack},titleStyle:{type:[String,Object],default:()=>e.navbar.titleStyle}}})],data:()=>({}),emits:["leftClick","rightClick"],methods:{addStyle:r,addUnit:n,sys:o,getPx:s,leftClick(){this.$emit("leftClick"),this.autoBack&&uni.navigateBack()},rightClick(){this.$emit("rightClick")}}},[["render",function(t,e,a,l,r,n){const o=v,s=x(i("u-status-bar"),k),I=x(i("u-icon"),C),S=m;return c(),u(o,{class:b(["u-navbar",[t.customClass]])},{default:f((()=>[t.fixed&&t.placeholder?(c(),u(o,{key:0,class:"u-navbar__placeholder",style:d({height:n.addUnit(n.getPx(t.height)+n.sys().statusBarHeight,"px")})},null,8,["style"])):h("",!0),_(o,{class:b([t.fixed&&"u-navbar--fixed"])},{default:f((()=>[t.safeAreaInsetTop?(c(),u(s,{key:0,bgColor:t.bgColor},null,8,["bgColor"])):h("",!0),_(o,{class:b(["u-navbar__content",[t.border&&"u-border-bottom"]]),style:d({height:n.addUnit(t.height),backgroundColor:t.bgColor})},{default:f((()=>[_(o,{class:"u-navbar__content__left","hover-class":"u-navbar__content__left--hover","hover-start-time":"150",onClick:n.leftClick},{default:f((()=>[g(t.$slots,"left",{},(()=>[t.leftIcon?(c(),u(I,{key:0,name:t.leftIcon,size:t.leftIconSize,color:t.leftIconColor},null,8,["name","size","color"])):h("",!0),t.leftText?(c(),u(S,{key:1,style:d({color:t.leftIconColor}),class:"u-navbar__content__left__text"},{default:f((()=>[p(y(t.leftText),1)])),_:1},8,["style"])):h("",!0)]),!0)])),_:3},8,["onClick"]),g(t.$slots,"center",{},(()=>[_(S,{class:"u-line-1 u-navbar__content__title",style:d([{width:n.addUnit(t.titleWidth)},n.addStyle(t.titleStyle)])},{default:f((()=>[p(y(t.title),1)])),_:1},8,["style"])]),!0),t.$slots.right||t.rightIcon||t.rightText?(c(),u(o,{key:0,class:"u-navbar__content__right",onClick:n.rightClick},{default:f((()=>[g(t.$slots,"right",{},(()=>[t.rightIcon?(c(),u(I,{key:0,name:t.rightIcon,size:"20"},null,8,["name"])):h("",!0),t.rightText?(c(),u(S,{key:1,class:"u-navbar__content__right__text"},{default:f((()=>[p(y(t.rightText),1)])),_:1})):h("",!0)]),!0)])),_:3},8,["onClick"])):h("",!0)])),_:3},8,["class","style"])])),_:3},8,["class"])])),_:3},8,["class"])}],["__scopeId","data-v-c986cb17"]]);export{S as _};
