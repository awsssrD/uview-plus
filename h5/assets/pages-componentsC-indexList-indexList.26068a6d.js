import{_ as t}from"./u-avatar.f88705d7.js";import{l as e,n as i,m as s,f as n,p as o,$ as a,W as l,o as r,c as d,w as u,a as c,u as h,j as m,t as f,k as _,i as p,y as g,h as x,z as v,J as I,x as y,d as L,v as w,E as b,b as C,F as H,r as T,I as S,e as j}from"./index-054a1b31.js";import{r as z}from"./uni-app.es.a298917b.js";import{_ as $}from"./u-line.30a45b6c.js";import{_ as k}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as A}from"./u-transition.20ac4530.js";import"./u-icon.c8042ef3.js";import"./u-text.ce4250c6.js";import"./u-link.0d5e6672.js";const V=k({name:"u-index-anchor",mixins:[s,n,e({props:{text:{type:[String,Number],default:()=>i.indexAnchor.text},color:{type:String,default:()=>i.indexAnchor.color},size:{type:[String,Number],default:()=>i.indexAnchor.size},bgColor:{type:String,default:()=>i.indexAnchor.bgColor},height:{type:[String,Number],default:()=>i.indexAnchor.height}}})],data:()=>({}),mounted(){this.init()},methods:{addUnit:o,init(){const t=a.call(this,"u-index-list");if(!t)return l();t.anchors.push(this);const e=a.call(this,"u-index-item");if(!e)return l();e.id=this.text.charCodeAt(0)}}},[["render",function(t,e,i,s,n,o){const a=_,l=p;return r(),d(l,{class:"u-index-anchor u-border-bottom",ref:`u-index-anchor-${t.text}`,style:h({height:o.addUnit(t.height),backgroundColor:t.bgColor})},{default:u((()=>[c(a,{class:"u-index-anchor__text",style:h({fontSize:o.addUnit(t.size),color:t.color})},{default:u((()=>[m(f(t.text),1)])),_:1},8,["style"])])),_:1},8,["style"])}],["__scopeId","data-v-ad3cf32e"]]);const N=k({name:"u-index-item",mixins:[s,n,e({props:{}})],data:()=>({top:0,height:0,id:""}),created(){this.anchor={}},mounted(){this.init()},methods:{init(){if(this.getParentData("u-index-list"),!this.parent)return l();g().then((()=>{this.getIndexItemRect().then((t=>{this.top=Math.ceil(t.top),this.height=Math.ceil(t.height)}))}))},getIndexItemRect(){return new Promise((t=>{this.$uGetRect(".u-index-item").then((e=>{t(e)}))}))}}},[["render",function(t,e,i,s,n,o){const a=p;return r(),d(a,{class:v(["u-index-item",[`u-index-item-${n.id}`]]),id:`u-index-item-${n.id}`},{default:u((()=>[x(t.$slots,"default",{},void 0,!0)])),_:3},8,["id","class"])}],["__scopeId","data-v-d9ef0376"]]),R=e({props:{inactiveColor:{type:String,default:()=>i.indexList.inactiveColor},activeColor:{type:String,default:()=>i.indexList.activeColor},indexList:{type:Array,default:()=>i.indexList.indexList},sticky:{type:Boolean,default:()=>i.indexList.sticky},customNavHeight:{type:[String,Number],default:()=>i.indexList.customNavHeight}}});const U=k({name:"u-index-list",mixins:[s,n,R],data:()=>({activeIndex:-1,touchmoveIndex:1,letterInfo:{height:0,itemHeight:0,top:0},indicatorHeight:50,touching:!1,scrollTop:0,scrollViewHeight:0,sys:I(),scrolling:!1,scrollIntoView:""}),computed:{uIndexList(){return this.indexList.length?this.indexList:(()=>{const t=[],e="A".charCodeAt(0);for(let i=0;i<26;i++)t.push(String.fromCharCode(e+i));return t})()},indicatorTop(){const{top:t,itemHeight:e}=this.letterInfo;return Math.floor(t+e*this.activeIndex+e/2-this.indicatorHeight/2)}},watch:{uIndexList:{immediate:!0,handler(){g().then((()=>{this.setIndexListLetterInfo()}))}}},created(){this.children=[],this.anchors=[],this.init()},mounted(){this.setIndexListLetterInfo()},methods:{addUnit:o,init(){let t=y(this.customNavHeight);this.scrollViewHeight=this.sys.windowHeight-t},touchStart(t){const e=t.changedTouches[0];if(!e)return;this.touching=!0;const{pageY:i}=e,s=this.getIndexListLetter(i);this.setValueForTouch(s)},touchMove(t){let e=t.changedTouches[0];if(!e)return;this.touching||(this.touching=!0);const{pageY:i}=e,s=this.getIndexListLetter(i);this.setValueForTouch(s)},touchEnd(t){g(300).then((()=>{this.touching=!1}))},getIndexListLetterRect(){return new Promise((t=>{this.$uGetRect(".u-index-list__letter").then((e=>{t(e)}))}))},setIndexListLetterInfo(){this.getIndexListLetterRect().then((t=>{const{height:e}=t,i=I(),s=i.windowHeight;let n=0;n=0==this.customNavHeight?i.windowTop:y(this.customNavHeight),this.letterInfo={height:e,top:(s-e)/2+n/2,itemHeight:Math.floor(e/this.uIndexList.length)}}))},getIndexListLetter(t){const{top:e,height:i,itemHeight:s}=this.letterInfo;return(t+=I().windowTop)<e?0:t>=e+i?this.uIndexList.length-1:Math.floor((t-e)/s)},setValueForTouch(t){t!==this.activeIndex&&(this.activeIndex=t,this.scrollIntoView=`u-index-item-${this.uIndexList[t].charCodeAt(0)}`)},getHeaderRect(){return new Promise((t=>{dom.getComponentRect(this.$refs.header,(e=>{t(e.size)}))}))},async scrollHandler(t){if(this.touching||this.scrolling)return;this.scrolling=!0,g(10).then((()=>{this.scrolling=!1}));let e=0;const i=this.children.length;let s=this.children;this.anchors,e=t.detail.scrollTop,e+=y(this.customNavHeight);for(let n=0;n<i;n++){const t=s[n],o=s[n+1];if(e<=s[0].top||e>=s[i-1].top+s[i-1].height){this.activeIndex=-1;break}if(!o){this.activeIndex=i-1;break}if(e>t.top&&e<o.top){this.activeIndex=n;break}}}}},[["render",function(t,e,i,s,n,o){const a=p,l=S,g=_,I=z(L("u-transition"),A);return r(),d(a,{class:"u-index-list"},{default:u((()=>[c(l,{scrollTop:n.scrollTop,scrollIntoView:n.scrollIntoView,"offset-accuracy":1,style:h({maxHeight:o.addUnit(n.scrollViewHeight)}),"scroll-y":"",onScroll:o.scrollHandler,ref:"uList"},{default:u((()=>[t.$slots.header?(r(),d(a,{key:0},{default:u((()=>[x(t.$slots,"header",{},void 0,!0)])),_:3})):w("",!0),x(t.$slots,"default",{},void 0,!0),t.$slots.footer?(r(),d(a,{key:1},{default:u((()=>[x(t.$slots,"footer",{},void 0,!0)])),_:3})):w("",!0)])),_:3},8,["scrollTop","scrollIntoView","style","onScroll"]),c(a,{class:"u-index-list__letter",ref:"u-index-list__letter",style:h({top:o.addUnit(n.letterInfo.top||100)}),onTouchstart:b(o.touchStart,["prevent"]),onTouchmove:b(o.touchMove,["prevent"]),onTouchend:b(o.touchEnd,["prevent"]),onTouchcancel:b(o.touchEnd,["prevent"])},{default:u((()=>[(r(!0),C(H,null,T(o.uIndexList,((e,i)=>(r(),d(a,{class:"u-index-list__letter__item",key:i,style:h({backgroundColor:n.activeIndex===i?t.activeColor:"transparent"})},{default:u((()=>[c(g,{class:"u-index-list__letter__item__index",style:h({color:n.activeIndex===i?"#fff":t.inactiveColor})},{default:u((()=>[m(f(e),1)])),_:2},1032,["style"])])),_:2},1032,["style"])))),128))])),_:1},8,["style","onTouchstart","onTouchmove","onTouchend","onTouchcancel"]),c(I,{mode:"fade",show:n.touching,customStyle:{position:"fixed",right:"50px",top:o.addUnit(o.indicatorTop),zIndex:2}},{default:u((()=>[c(a,{class:v(["u-index-list__indicator",["u-index-list__indicator--show"]]),style:h({height:o.addUnit(n.indicatorHeight),width:o.addUnit(n.indicatorHeight)})},{default:u((()=>[c(g,{class:"u-index-list__indicator__text"},{default:u((()=>[m(f(o.uIndexList[n.activeIndex]),1)])),_:1})])),_:1},8,["style"])])),_:1},8,["show","customStyle"])])),_:3})}],["__scopeId","data-v-28012ff9"]]),M=()=>{const t=[],e="A".charCodeAt(0);t.push("↑"),t.push("☆");for(let i=0;i<26;i++)t.push(String.fromCharCode(e+i));return t.push("#"),t};const q=k({data:()=>({indexList:M(),urls:["./static/uview/album/1.jpg","./static/uview/album/2.jpg","./static/uview/album/3.jpg","./static/uview/album/4.jpg","./static/uview/album/5.jpg","./static/uview/album/6.jpg","./static/uview/album/7.jpg","./static/uview/album/8.jpg","./static/uview/album/9.jpg","./static/uview/album/10.jpg"],names:["勇往无敌","疯狂的迪飙","磊爱可","梦幻梦幻梦","枫中飘瓢","飞翔天使","曾经第一","追风幻影族长","麦小姐","胡格罗雅","Red磊磊","乐乐立立","青龙爆风","跑跑卡叮车","山里狼","supersonic超"]}),computed:{itemArr(){return this.indexList.map((t=>{const e=[];for(let i=0;i<10;i++)e.push({name:this.names[uni.$u.random(0,this.names.length-1)],url:this.urls[uni.$u.random(0,this.urls.length-1)]});return e}))}}},[["render",function(e,i,s,n,o,a){const l=z(L("up-avatar"),t),h=_,g=p,x=z(L("up-line"),$),v=z(L("up-index-anchor"),V),I=j,y=z(L("up-index-item"),N),w=z(L("up-index-list"),U);return r(),d(w,{indexList:o.indexList},{default:u((()=>[c(g,{slot:"header",class:"list"},{default:u((()=>[c(g,{class:"list__item"},{default:u((()=>[c(l,{shape:"square",size:"35",icon:"man-add-fill",fontSize:"26",randomBgColor:""}),c(h,{class:"list__item__user-name"},{default:u((()=>[m("新的朋友")])),_:1})])),_:1}),c(x),c(g,{class:"list__item"},{default:u((()=>[c(l,{shape:"square",size:"35",icon:"tags-fill",fontSize:"26",randomBgColor:""}),c(h,{class:"list__item__user-name"},{default:u((()=>[m("标签")])),_:1})])),_:1}),c(x),c(g,{class:"list__item"},{default:u((()=>[c(l,{shape:"square",size:"35",icon:"chrome-circle-fill",fontSize:"26",randomBgColor:""}),c(h,{class:"list__item__user-name"},{default:u((()=>[m("朋友圈")])),_:1})])),_:1}),c(x),c(g,{class:"list__item"},{default:u((()=>[c(l,{shape:"square",size:"35",icon:"qq-fill",fontSize:"26",randomBgColor:""}),c(h,{class:"list__item__user-name"},{default:u((()=>[m("QQ")])),_:1})])),_:1}),c(x)])),_:1}),(r(!0),C(H,null,T(a.itemArr,((t,e)=>(r(),d(y,{key:e},{default:u((()=>[c(v,{text:o.indexList[e]},null,8,["text"]),(r(!0),C(H,null,T(t,((t,e)=>(r(),d(g,{class:"list",key:e},{default:u((()=>[c(g,{class:"list__item"},{default:u((()=>[c(I,{class:"list__item__avatar",src:t.url},null,8,["src"]),c(h,{class:"list__item__user-name"},{default:u((()=>[m(f(t.name),1)])),_:2},1024)])),_:2},1024),c(x)])),_:2},1024)))),128))])),_:2},1024)))),128)),c(g,{slot:"footer",class:"u-safe-area-inset--bottom"},{default:u((()=>[c(h,{class:"list__footer"},{default:u((()=>[m("共305位好友")])),_:1})])),_:1})])),_:1},8,["indexList"])}],["__scopeId","data-v-6b6d41d3"]]);export{q as default};
