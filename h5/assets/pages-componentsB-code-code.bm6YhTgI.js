import{_ as e,r as t,ak as s,a,A as o,o as d,f as n,w as i,i as l,g as u,m as c,t as C,n as g}from"./index-CbbCK9cD.js";const h=e({data:()=>({tips:"",tips1:"",tips2:"",disabled1:!1,disabled2:!1,disabled3:!1}),onReady(){},methods:{codeChange(e){this.tips=e},codeChange1(e){this.tips1=e},codeChange2(e){this.tips2=e},getCode(){this.$refs.uCode.canGetCode?(uni.showLoading({title:"正在获取验证码"}),setTimeout((()=>{uni.hideLoading(),uni.$u.toast("验证码已发送"),this.$refs.uCode.start()}),2e3)):uni.$u.toast("倒计时结束后再发送")},getCode1(){this.$refs.uCode1.canGetCode?(uni.showLoading({title:"正在获取验证码"}),setTimeout((()=>{uni.hideLoading(),uni.$u.toast("验证码已发送"),this.$refs.uCode1.start()}),2e3)):uni.$u.toast("倒计时结束后再发送")},getCode2(){this.$refs.uCode2.canGetCode?(uni.showLoading({title:"正在获取验证码"}),setTimeout((()=>{uni.hideLoading(),uni.$u.toast("验证码已发送"),this.$refs.uCode2.start()}),2e3)):uni.$u.toast("倒计时结束后再发送")}}},[["render",function(e,h,_,r,f,b){const p=g,m=t(a("up-code"),s),k=t(a("up-button"),o),x=l;return d(),n(x,{class:"u-page"},{default:i((()=>[u(x,{class:"u-demo-block"},{default:i((()=>[u(p,{class:"u-demo-block__title"},{default:i((()=>[c("基础功能")])),_:1}),u(x,{class:"u-demo-block__content"},{default:i((()=>[u(m,{ref:"uCode",onChange:b.codeChange,seconds:"20","change-text":"XS获取",onStart:h[0]||(h[0]=e=>f.disabled1=!0),onEnd:h[1]||(h[1]=e=>f.disabled1=!1)},null,8,["onChange"]),u(k,{onClick:b.getCode,text:f.tips,type:"success",size:"small",disabled:f.disabled1},null,8,["onClick","text","disabled"])])),_:1})])),_:1}),u(x,{class:"u-demo-block"},{default:i((()=>[u(p,{class:"u-demo-block__title"},{default:i((()=>[c("保持倒计时(开始后，左上角返退出此页面再进入，会发现倒计时还在继续)")])),_:1}),u(x,{class:"u-demo-block__content"},{default:i((()=>[u(m,{ref:"uCode1",onChange:b.codeChange1,"keep-running":"","change-text":"倒计时XS",onStart:h[2]||(h[2]=e=>f.disabled2=!0),onEnd:h[3]||(h[3]=e=>f.disabled2=!1)},null,8,["onChange"]),u(k,{type:"primary",onClick:b.getCode1,text:f.tips1,size:"small",disabled:f.disabled2},null,8,["onClick","text","disabled"])])),_:1})])),_:1}),u(x,{class:"u-demo-block"},{default:i((()=>[u(p,{class:"u-demo-block__title"},{default:i((()=>[c("文本样式")])),_:1}),u(x,{class:"u-demo-block__content"},{default:i((()=>[u(m,{ref:"uCode2",onChange:b.codeChange2,"keep-running":"","start-text":"点我获取验证码"},null,8,["onChange"]),u(p,{onClick:b.getCode2,text:f.tips2,class:"u-page__code-text"},{default:i((()=>[c(C(f.tips2),1)])),_:1},8,["onClick","text"])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-831ea341"]]);export{h as default};
