import{r as e,o as t,c as s,w as o,i as a,a as d,j as i,t as n,k as u}from"./index-DArMB7YI.js";import{_ as l}from"./u-code.BWCiGNC_.js";import{r as c}from"./uni-app.es.C8d2MG9Z.js";import{_ as r}from"./u-button.C6W-LFeU.js";import{_ as C}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./u-loading-icon.uIlQuheu.js";import"./u-icon.DIvTErIx.js";const p=C({data:()=>({tips:"",tips1:"",tips2:"",disabled1:!1,disabled2:!1,disabled3:!1}),onReady(){},methods:{codeChange(e){this.tips=e},codeChange1(e){this.tips1=e},codeChange2(e){this.tips2=e},getCode(){this.$refs.uCode.canGetCode?(uni.showLoading({title:"正在获取验证码"}),setTimeout((()=>{uni.hideLoading(),uni.$u.toast("验证码已发送"),this.$refs.uCode.start()}),2e3)):uni.$u.toast("倒计时结束后再发送")},getCode1(){this.$refs.uCode1.canGetCode?(uni.showLoading({title:"正在获取验证码"}),setTimeout((()=>{uni.hideLoading(),uni.$u.toast("验证码已发送"),this.$refs.uCode1.start()}),2e3)):uni.$u.toast("倒计时结束后再发送")},getCode2(){this.$refs.uCode2.canGetCode?(uni.showLoading({title:"正在获取验证码"}),setTimeout((()=>{uni.hideLoading(),uni.$u.toast("验证码已发送"),this.$refs.uCode2.start()}),2e3)):uni.$u.toast("倒计时结束后再发送")}}},[["render",function(C,p,g,_,h,m){const f=u,b=c(e("up-code"),l),k=c(e("up-button"),r),x=a;return t(),s(x,{class:"u-page"},{default:o((()=>[d(x,{class:"u-demo-block"},{default:o((()=>[d(f,{class:"u-demo-block__title"},{default:o((()=>[i("基础功能")])),_:1}),d(x,{class:"u-demo-block__content"},{default:o((()=>[d(b,{ref:"uCode",onChange:m.codeChange,seconds:"20","change-text":"XS获取",onStart:p[0]||(p[0]=e=>h.disabled1=!0),onEnd:p[1]||(p[1]=e=>h.disabled1=!1)},null,8,["onChange"]),d(k,{onClick:m.getCode,text:h.tips,type:"success",size:"small",disabled:h.disabled1},null,8,["onClick","text","disabled"])])),_:1})])),_:1}),d(x,{class:"u-demo-block"},{default:o((()=>[d(f,{class:"u-demo-block__title"},{default:o((()=>[i("保持倒计时(开始后，左上角返退出此页面再进入，会发现倒计时还在继续)")])),_:1}),d(x,{class:"u-demo-block__content"},{default:o((()=>[d(b,{ref:"uCode1",onChange:m.codeChange1,"keep-running":"","change-text":"倒计时XS",onStart:p[2]||(p[2]=e=>h.disabled2=!0),onEnd:p[3]||(p[3]=e=>h.disabled2=!1)},null,8,["onChange"]),d(k,{type:"primary",onClick:m.getCode1,text:h.tips1,size:"small",disabled:h.disabled2},null,8,["onClick","text","disabled"])])),_:1})])),_:1}),d(x,{class:"u-demo-block"},{default:o((()=>[d(f,{class:"u-demo-block__title"},{default:o((()=>[i("文本样式")])),_:1}),d(x,{class:"u-demo-block__content"},{default:o((()=>[d(b,{ref:"uCode2",onChange:m.codeChange2,"keep-running":"","start-text":"点我获取验证码"},null,8,["onChange"]),d(f,{onClick:m.getCode2,text:h.tips2,class:"u-page__code-text"},{default:o((()=>[i(n(h.tips2),1)])),_:1},8,["onClick","text"])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-831ea341"]]);export{p as default};
