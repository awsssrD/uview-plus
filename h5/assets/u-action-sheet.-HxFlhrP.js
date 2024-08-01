import{l as e,n as t,f as s,p as a,r as o,o as i,c as n,w as c,a as l,j as r,t as p,E as h,v as d,u,h as m,b as _,d as f,F as g,k as y,i as S,I as k}from"./index-CnFxcOhE.js";import{_ as w}from"./u-icon.DwBF2lj0.js";import{r as C}from"./uni-app.es.BxD5sEAM.js";import{_ as v}from"./u-line.C9C4zuUw.js";import{_ as x}from"./u-loading-icon.BaFuCKO2.js";import{_ as $}from"./u-gap.CeJ8ez4Y.js";import{_ as b}from"./u-popup.DkWqI6ye.js";import{_ as T}from"./_plugin-vue_export-helper.BCo6x5W8.js";const B=e({props:{lang:String,sessionFrom:String,sendMessageTitle:String,sendMessagePath:String,sendMessageImg:String,showMessageCard:Boolean,appParameter:String,formType:String,openType:String}});const A=T({name:"u-action-sheet",mixins:[e({props:{openType:String},methods:{onGetUserInfo(e){this.$emit("getuserinfo",e.detail)},onContact(e){this.$emit("contact",e.detail)},onGetPhoneNumber(e){this.$emit("getphonenumber",e.detail)},onError(e){this.$emit("error",e.detail)},onLaunchApp(e){this.$emit("launchapp",e.detail)},onOpenSetting(e){this.$emit("opensetting",e.detail)}}}),B,s,e({props:{show:{type:Boolean,default:()=>t.actionSheet.show},title:{type:String,default:()=>t.actionSheet.title},description:{type:String,default:()=>t.actionSheet.description},actions:{type:Array,default:()=>t.actionSheet.actions},cancelText:{type:String,default:()=>t.actionSheet.cancelText},closeOnClickAction:{type:Boolean,default:()=>t.actionSheet.closeOnClickAction},safeAreaInsetBottom:{type:Boolean,default:()=>t.actionSheet.safeAreaInsetBottom},openType:{type:String,default:()=>t.actionSheet.openType},closeOnClickOverlay:{type:Boolean,default:()=>t.actionSheet.closeOnClickOverlay},round:{type:[Boolean,String,Number],default:()=>t.actionSheet.round},wrapMaxHeight:{type:[String],default:()=>t.actionSheet.wrapMaxHeight}}})],data:()=>({}),computed:{itemStyle(){return e=>{let t={};return this.actions[e].color&&(t.color=this.actions[e].color),this.actions[e].fontSize&&(t.fontSize=a(this.actions[e].fontSize)),this.actions[e].disabled&&(t.color="#c0c4cc"),t}}},emits:["close","select","update:show"],methods:{closeHandler(){this.closeOnClickOverlay&&(this.$emit("update:show"),this.$emit("close"))},cancel(){this.$emit("update:show"),this.$emit("close")},selectHandler(e){const t=this.actions[e];!t||t.disabled||t.loading||(this.$emit("select",t),this.closeOnClickAction&&(this.$emit("update:show"),this.$emit("close")))}}},[["render",function(e,t,s,a,T,B){const A=y,I=C(o("u-icon"),w),O=S,j=C(o("u-line"),v),H=C(o("u-loading-icon"),x),M=k,z=C(o("u-gap"),$),F=C(o("u-popup"),b);return i(),n(F,{show:e.show,mode:"bottom",onClose:B.closeHandler,safeAreaInsetBottom:e.safeAreaInsetBottom,round:e.round},{default:c((()=>[l(O,{class:"u-action-sheet"},{default:c((()=>[e.title?(i(),n(O,{key:0,class:"u-action-sheet__header"},{default:c((()=>[l(A,{class:"u-action-sheet__header__title u-line-1"},{default:c((()=>[r(p(e.title),1)])),_:1}),l(O,{class:"u-action-sheet__header__icon-wrap",onClick:h(B.cancel,["stop"])},{default:c((()=>[l(I,{name:"close",size:"17",color:"#c8c9cc",bold:""})])),_:1},8,["onClick"])])),_:1})):d("",!0),e.description?(i(),n(A,{key:1,class:"u-action-sheet__description",style:u([{marginTop:`${e.title&&e.description?0:"18px"}`}])},{default:c((()=>[r(p(e.description),1)])),_:1},8,["style"])):d("",!0),m(e.$slots,"default",{},(()=>[e.description?(i(),n(j,{key:0})):d("",!0),l(M,{"scroll-y":"",class:"u-action-sheet__item-wrap",style:u({maxHeight:e.wrapMaxHeight})},{default:c((()=>[(i(!0),_(g,null,f(e.actions,((t,s)=>(i(),n(O,{key:s},{default:c((()=>[l(O,{class:"u-action-sheet__item-wrap__item",onClick:h((e=>B.selectHandler(s)),["stop"]),"hover-class":t.disabled||t.loading?"":"u-action-sheet--hover","hover-stay-time":150},{default:c((()=>[t.loading?(i(),n(H,{key:1,"custom-class":"van-action-sheet__loading",size:"18",mode:"circle"})):(i(),_(g,{key:0},[l(A,{class:"u-action-sheet__item-wrap__item__name",style:u([B.itemStyle(s)])},{default:c((()=>[r(p(t.name),1)])),_:2},1032,["style"]),t.subname?(i(),n(A,{key:0,class:"u-action-sheet__item-wrap__item__subname"},{default:c((()=>[r(p(t.subname),1)])),_:2},1024)):d("",!0)],64))])),_:2},1032,["onClick","hover-class"]),s!==e.actions.length-1?(i(),n(j,{key:0})):d("",!0)])),_:2},1024)))),128))])),_:1},8,["style"])]),!0),e.cancelText?(i(),n(z,{key:2,bgColor:"#eaeaec",height:"6"})):d("",!0),e.cancelText?(i(),n(O,{key:3,class:"u-action-sheet__item-wrap__item u-action-sheet__cancel","hover-class":"u-action-sheet--hover",onClick:B.cancel},{default:c((()=>[l(A,{onTouchmove:t[0]||(t[0]=h((()=>{}),["stop","prevent"])),"hover-stay-time":150,class:"u-action-sheet__cancel-text"},{default:c((()=>[r(p(e.cancelText),1)])),_:1})])),_:1},8,["onClick"])):d("",!0)])),_:3})])),_:3},8,["show","onClose","safeAreaInsetBottom","round"])}],["__scopeId","data-v-d5904ac5"]]);export{A as _};
