import{l as e,n as t,m as n,f as i,p as l,x as o,s,o as r,c as a,w as p,j as d,t as u,E as c,u as f,k}from"./index-054a1b31.js";import{_ as S}from"./_plugin-vue_export-helper.1b428a4d.js";const m=S({name:"u-link",mixins:[n,i,e({props:{color:{type:String,default:()=>t.link.color},fontSize:{type:[String,Number],default:()=>t.link.fontSize},underLine:{type:Boolean,default:()=>t.link.underLine},href:{type:String,default:()=>t.link.href},mpTips:{type:String,default:()=>t.link.mpTips},lineColor:{type:String,default:()=>t.link.lineColor},text:{type:String,default:()=>t.link.text}}})],computed:{linkStyle(){return{color:this.color,fontSize:l(this.fontSize),lineHeight:l(o(this.fontSize)+2),textDecoration:this.underLine?"underline":"none"}}},emits:["click"],methods:{addStyle:s,openLink(){window.open(this.href),this.$emit("click")}}},[["render",function(e,t,n,i,l,o){const s=k;return r(),a(s,{class:"u-link",onClick:c(o.openLink,["stop"]),style:f([o.linkStyle,o.addStyle(e.customStyle)])},{default:p((()=>[d(u(e.text),1)])),_:1},8,["onClick","style"])}],["__scopeId","data-v-b8c99cbe"]]);export{m as _};
