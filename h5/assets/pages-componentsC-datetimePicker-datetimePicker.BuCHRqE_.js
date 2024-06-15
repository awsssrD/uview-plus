import{_ as e}from"./u-navbar.2DUR7Gjj.js";import{r as o,o as n,c as l,w as a,i as t,a as i,b as r,d as s,F as u,e as m}from"./index-DArMB7YI.js";import{r as c}from"./uni-app.es.C8d2MG9Z.js";import{_ as d}from"./u-input.GmOmqbLR.js";import{_ as h,a as p}from"./u-form.BXrKjRfa.js";import{_ as C}from"./u-datetime-picker.Cw3gRWCK.js";import{_ as f}from"./u-cell.B4xc4BKf.js";import{_ as w}from"./u-cell-group.xrdSBnNN.js";import{_ as v}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./u-status-bar.Ub69dQnQ.js";import"./u-icon.DIvTErIx.js";import"./u-line.BI7-eYRr.js";import"./u-picker.DV0nN5Vx.js";import"./u-loading-icon.uIlQuheu.js";import"./u-popup.BUiTsVrZ.js";import"./u-overlay.Czf8H4fN.js";import"./u-transition.CMuaf7ip.js";import"./u-safe-bottom.Ckio142Q.js";import"./index.t89P32GB.js";const g=v({data(){const e=new Date;return e.getFullYear(),uni.$u.padZero(e.getMonth()+1),e.getDate(),{current:0,value1:Number(new Date),value2:Number(new Date),value3:Number(new Date),value4:"05:28",value5:Number(new Date),value6:Number(new Date),value7:Number(new Date),show1:!1,show2:!1,show3:!1,show4:!1,show5:!1,show6:!1,show7:!1,list:[{title:"完整日期时间",iconUrl:"https://cdn.uviewui.com/uview/demo/datetime-picker/6.png"},{title:"年月日",iconUrl:"https://cdn.uviewui.com/uview/demo/datetime-picker/4.png"},{title:"年月",iconUrl:"https://cdn.uviewui.com/uview/demo/datetime-picker/3.png"},{title:"时间",iconUrl:"https://cdn.uviewui.com/uview/demo/datetime-picker/5.png"},{title:"过滤器(保留偶数年)",iconUrl:"https://cdn.uviewui.com/uview/demo/datetime-picker/2.png"},{title:"格式化",iconUrl:"https://cdn.uviewui.com/uview/demo/datetime-picker/1.png"},{title:"限制最大最小值",iconUrl:"https://cdn.uviewui.com/uview/demo/datetime-picker/7.png"}]}},methods:{close(){this[`show${this.current}`]=!1},cancel(){this[`show${this.current}`]=!1},confirm(e){this[`show${this.current}`]=!1,this.result(e.value,e.mode)},change(e){},navigateBack(){uni.navigateBack()},filter:(e,o)=>"year"===e?o.filter((e=>e%2==0)):o,showDatetimePicker(e){this.current=e+1,this[`show${e+1}`]=!0},result(e,o){const n=uni.$u.timeFormat,l=uni.$u.toast;switch(o){case"datetime":return l(n(e,"yyyy-mm-dd hh:MM"));case"date":return l(n(e,"yyyy-mm-dd"));case"year-month":return l(n(e,"yyyy-mm"));case"time":return l(e);default:return""}},formatter:(e,o)=>"year"===e?`${o}年`:"month"===e?`${o}月`:"day"===e?`${o}日`:o}},[["render",function(v,g,k,y,V,_){const b=c(o("up-navbar"),e),j=c(o("up-input"),d),U=c(o("up-form-item"),h),O=c(o("up-datetime-picker"),C),D=c(o("up-form"),p),$=t,x=m,N=c(o("up-cell"),f),B=c(o("up-cell-group"),w);return n(),l($,{class:"u-page"},{default:a((()=>[i(b,{title:"datetimePicker 时间日期选择器",onLeftClick:_.navigateBack,safeAreaInsetTop:"",fixed:"",placeholder:""},null,8,["onLeftClick"]),i($,{class:"u-demo-block__content",style:{padding:"0 15px"}},{default:a((()=>[i(D,{class:"u-demo-block__content",labelPosition:"left",ref:"form1"},{default:a((()=>[i(U,{label:"姓名",prop:"userInfo.name",borderBottom:"",ref:"item1"},{default:a((()=>[i(j)])),_:1},512),i(U,{borderBottom:"",label:"日期"},{default:a((()=>[i(O,{hasInput:"",placeholder:"请选择日期",mode:"datetime",modelValue:1714266792e3})])),_:1})])),_:1},512)])),_:1}),i(B,null,{default:a((()=>[(n(!0),r(u,null,s(V.list,((e,o)=>(n(),l(N,{onClick:e=>_.showDatetimePicker(o),title:e.title,key:o,isLink:""},{default:a((()=>[i(x,{slot:"icon",class:"u-cell-icon",src:e.iconUrl,mode:"widthFix"},null,8,["src"])])),_:2},1032,["onClick","title"])))),128))])),_:1}),i(O,{show:V.show1,modelValue:V.value1,"onUpdate:modelValue":g[0]||(g[0]=e=>V.value1=e),mode:"datetime",closeOnClickOverlay:"",onConfirm:_.confirm,onCancel:_.cancel,onChange:_.change,onClose:_.close},null,8,["show","modelValue","onConfirm","onCancel","onChange","onClose"]),i(O,{show:V.show2,modelValue:V.value2,"onUpdate:modelValue":g[1]||(g[1]=e=>V.value2=e),mode:"date",closeOnClickOverlay:"",onConfirm:_.confirm,onCancel:_.cancel,onChange:_.change,onClose:_.close},null,8,["show","modelValue","onConfirm","onCancel","onChange","onClose"]),i(O,{show:V.show3,modelValue:V.value3,"onUpdate:modelValue":g[2]||(g[2]=e=>V.value3=e),mode:"year-month",closeOnClickOverlay:"",onConfirm:_.confirm,onCancel:_.cancel,onChange:_.change,onClose:_.close},null,8,["show","modelValue","onConfirm","onCancel","onChange","onClose"]),i(O,{show:V.show4,modelValue:V.value4,"onUpdate:modelValue":g[3]||(g[3]=e=>V.value4=e),mode:"time",closeOnClickOverlay:"",onConfirm:_.confirm,onCancel:_.cancel,onChange:_.change,onClose:_.close},null,8,["show","modelValue","onConfirm","onCancel","onChange","onClose"]),i(O,{show:V.show5,modelValue:V.value5,"onUpdate:modelValue":g[4]||(g[4]=e=>V.value5=e),filter:_.filter,mode:"date",closeOnClickOverlay:"",onConfirm:_.confirm,onCancel:_.cancel,onChange:_.change,onClose:_.close},null,8,["show","modelValue","filter","onConfirm","onCancel","onChange","onClose"]),i(O,{show:V.show6,modelValue:V.value6,"onUpdate:modelValue":g[5]||(g[5]=e=>V.value6=e),mode:"date",formatter:_.formatter,closeOnClickOverlay:"",onConfirm:_.confirm,onCancel:_.cancel,onChange:_.change,onClose:_.close},null,8,["show","modelValue","formatter","onConfirm","onCancel","onChange","onClose"]),i(O,{show:V.show7,modelValue:V.value7,"onUpdate:modelValue":g[6]||(g[6]=e=>V.value7=e),mode:"datetime",minDate:15875248e5,maxDate:1786778555e3,closeOnClickOverlay:"",onConfirm:_.confirm,onCancel:_.cancel,onChange:_.change,onClose:_.close},null,8,["show","modelValue","onConfirm","onCancel","onChange","onClose"])])),_:1})}],["__scopeId","data-v-8d3dbe98"]]);export{g as default};
