import{_ as e}from"./u-icon.c8042ef3.js";import{l as t,n as a,m as i,f as l,p as o,q as s,s as c,N as r,Z as n,d as h,o as d,c as p,w as u,a as b,z as C,E as k,u as m,h as f,j as S,t as D,i as x,k as y}from"./index-054a1b31.js";import{r as g}from"./uni-app.es.a298917b.js";import{_ as z}from"./_plugin-vue_export-helper.1b428a4d.js";const v=z({name:"u-checkbox",mixins:[i,l,t({props:{name:{type:[String,Number,Boolean],default:()=>a.checkbox.name},shape:{type:String,default:()=>a.checkbox.shape},size:{type:[String,Number],default:()=>a.checkbox.size},checked:{type:Boolean,default:()=>a.checkbox.checked},disabled:{type:[String,Boolean],default:()=>a.checkbox.disabled},activeColor:{type:String,default:()=>a.checkbox.activeColor},inactiveColor:{type:String,default:()=>a.checkbox.inactiveColor},iconSize:{type:[String,Number],default:()=>a.checkbox.iconSize},iconColor:{type:String,default:()=>a.checkbox.iconColor},label:{type:[String,Number],default:()=>a.checkbox.label},labelSize:{type:[String,Number],default:()=>a.checkbox.labelSize},labelColor:{type:String,default:()=>a.checkbox.labelColor},labelDisabled:{type:[String,Boolean],default:()=>a.checkbox.labelDisabled},usedAlone:{type:[Boolean],default:()=>!1}}})],data:()=>({isChecked:!1,parentData:{iconSize:12,labelDisabled:null,disabled:null,shape:"square",activeColor:null,inactiveColor:null,size:18,modelValue:null,iconColor:null,placement:"row",borderBottom:!1,iconPlacement:"left"}}),computed:{elDisabled(){return""!==this.disabled?this.disabled:null!==this.parentData.disabled&&this.parentData.disabled},elLabelDisabled(){return""!==this.labelDisabled?this.labelDisabled:null!==this.parentData.labelDisabled&&this.parentData.labelDisabled},elSize(){return this.size?this.size:this.parentData.size?this.parentData.size:21},elIconSize(){return this.iconSize?this.iconSize:this.parentData.iconSize?this.parentData.iconSize:12},elActiveColor(){return this.activeColor?this.activeColor:this.parentData.activeColor?this.parentData.activeColor:"#2979ff"},elInactiveColor(){return this.inactiveColor?this.inactiveColor:this.parentData.inactiveColor?this.parentData.inactiveColor:"#c8c9cc"},elLabelColor(){return this.labelColor?this.labelColor:this.parentData.labelColor?this.parentData.labelColor:"#606266"},elShape(){return this.shape?this.shape:this.parentData.shape?this.parentData.shape:"circle"},elLabelSize(){return o(this.labelSize?this.labelSize:this.parentData.labelSize?this.parentData.labelSize:"15")},elIconColor(){const e=this.iconColor?this.iconColor:this.parentData.iconColor?this.parentData.iconColor:"#ffffff";return this.elDisabled?this.isChecked?this.elInactiveColor:"transparent":this.isChecked?e:"transparent"},iconClasses(){let e=[];return e.push("u-checkbox__icon-wrap--"+this.elShape),this.elDisabled&&e.push("u-checkbox__icon-wrap--disabled"),this.isChecked&&this.elDisabled&&e.push("u-checkbox__icon-wrap--disabled--checked"),e},iconWrapStyle(){const e={};return e.backgroundColor=this.isChecked&&!this.elDisabled?this.elActiveColor:"#ffffff",e.borderColor=this.isChecked&&!this.elDisabled?this.elActiveColor:this.elInactiveColor,e.width=o(this.elSize),e.height=o(this.elSize),this.usedAlone||"right"===this.parentData.iconPlacement&&(e.marginRight=0),e},checkboxStyle(){const e={};return this.usedAlone||(this.parentData.borderBottom&&this.parentData.placement,this.parentData.borderBottom&&"column"===this.parentData.placement&&(e.paddingBottom="8px")),s(e,c(this.customStyle))}},mounted(){this.init()},emits:["change"],methods:{init(){this.usedAlone||(this.updateParentData(),this.parent);const e=this.parentData.modelValue;this.checked?this.isChecked=!0:!this.usedAlone&&r.array(e)&&(this.isChecked=e.some((e=>e===this.name)))},updateParentData(){this.getParentData("u-checkbox-group")},wrapperClickHandler(e){(this.usedAlone||"right"===this.parentData.iconPlacement)&&this.iconClickHandler(e)},iconClickHandler(e){this.preventEvent(e),this.elDisabled||this.setRadioCheckedStatus()},labelClickHandler(e){this.preventEvent(e),this.elLabelDisabled||this.elDisabled||this.setRadioCheckedStatus()},emitEvent(){this.$emit("change",this.isChecked),this.$nextTick((()=>{n(this,"change")}))},setRadioCheckedStatus(){this.isChecked=!this.isChecked,this.emitEvent(),this.usedAlone||"function"==typeof this.parent.unCheckedOther&&this.parent.unCheckedOther(this)}},watch:{checked(){this.isChecked=this.checked}}},[["render",function(t,a,i,l,o,s){const c=g(h("u-icon"),e),r=x,n=y;return d(),p(r,{class:C(["u-checkbox cursor-pointer",[`u-checkbox-label--${o.parentData.iconPlacement}`,o.parentData.borderBottom&&"column"===o.parentData.placement&&"u-border-bottom"]]),style:m([s.checkboxStyle]),onClick:k(s.wrapperClickHandler,["stop"])},{default:u((()=>[b(r,{class:C(["u-checkbox__icon-wrap cursor-pointer",s.iconClasses]),onClick:k(s.iconClickHandler,["stop"]),style:m([s.iconWrapStyle])},{default:u((()=>[f(t.$slots,"icon",{},(()=>[b(c,{class:"u-checkbox__icon-wrap__icon",name:"checkbox-mark",size:s.elIconSize,color:s.elIconColor},null,8,["size","color"])]),!0)])),_:3},8,["onClick","class","style"]),f(t.$slots,"label",{label:t.label,elDisabled:s.elDisabled},(()=>[b(n,{onClick:k(s.labelClickHandler,["stop"]),style:m({color:s.elDisabled?s.elInactiveColor:s.elLabelColor,fontSize:s.elLabelSize,lineHeight:s.elLabelSize})},{default:u((()=>[S(D(t.label),1)])),_:1},8,["onClick","style"])]),!0)])),_:3},8,["style","onClick","class"])}],["__scopeId","data-v-b30de8c1"]]);const _=z({name:"u-checkbox-group",mixins:[i,l,t({props:{name:{type:String,default:()=>a.checkboxGroup.name},modelValue:{type:Array,default:()=>a.checkboxGroup.value},shape:{type:String,default:()=>a.checkboxGroup.shape},disabled:{type:Boolean,default:()=>a.checkboxGroup.disabled},activeColor:{type:String,default:()=>a.checkboxGroup.activeColor},inactiveColor:{type:String,default:()=>a.checkboxGroup.inactiveColor},size:{type:[String,Number],default:()=>a.checkboxGroup.size},placement:{type:String,default:()=>a.checkboxGroup.placement},labelSize:{type:[String,Number],default:()=>a.checkboxGroup.labelSize},labelColor:{type:[String],default:()=>a.checkboxGroup.labelColor},labelDisabled:{type:Boolean,default:()=>a.checkboxGroup.labelDisabled},iconColor:{type:String,default:()=>a.checkboxGroup.iconColor},iconSize:{type:[String,Number],default:()=>a.checkboxGroup.iconSize},iconPlacement:{type:String,default:()=>a.checkboxGroup.iconPlacement},borderBottom:{type:Boolean,default:()=>a.checkboxGroup.borderBottom}}})],computed:{parentData(){return[this.modelValue,this.disabled,this.inactiveColor,this.activeColor,this.size,this.labelDisabled,this.shape,this.iconSize,this.borderBottom,this.placement]},bemClass(){return this.bem("checkbox-group",["placement"])}},watch:{parentData:{handler(){this.children.length&&this.children.map((e=>{"function"==typeof e.init&&e.init()}))},deep:!0}},data:()=>({}),created(){this.children=[]},emits:["update:modelValue","change"],methods:{unCheckedOther(e){const t=[];this.children.map((e=>{e.isChecked&&t.push(e.name)})),this.$emit("change",t),this.$emit("update:modelValue",t)}}},[["render",function(e,t,a,i,l,o){const s=x;return d(),p(s,{class:C(["u-checkbox-group",o.bemClass])},{default:u((()=>[f(e.$slots,"default",{},void 0,!0)])),_:3},8,["class"])}],["__scopeId","data-v-9a97727d"]]);export{v as _,_ as a};
