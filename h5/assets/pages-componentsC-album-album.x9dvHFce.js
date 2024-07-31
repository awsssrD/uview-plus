import{l as t,n as e,m as l,f as u,p as s,N as a,y as i,r as o,o as r,c as m,w as d,b as c,d as n,F as p,i as h,u as _,a as g,v as b,e as w,j as f,k as y}from"./index-Bw_WXD-x.js";import{_ as x}from"./u-text.a75ODk8r.js";import{r as v}from"./uni-app.es.D8d9oESY.js";import{_ as k}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{_ as S}from"./logo.CjzPZupr.js";import"./u-icon.zmyT30hQ.js";import"./u-link.a2dUvRf2.js";const j=k({name:"u-album",mixins:[l,u,t({props:{urls:{type:Array,default:()=>e.album.urls},keyName:{type:String,default:()=>e.album.keyName},singleSize:{type:[String,Number],default:()=>e.album.singleSize},multipleSize:{type:[String,Number],default:()=>e.album.multipleSize},space:{type:[String,Number],default:()=>e.album.space},singleMode:{type:String,default:()=>e.album.singleMode},multipleMode:{type:String,default:()=>e.album.multipleMode},maxCount:{type:[String,Number],default:()=>e.album.maxCount},previewFullImage:{type:Boolean,default:()=>e.album.previewFullImage},rowCount:{type:[String,Number],default:()=>e.album.rowCount},showMore:{type:Boolean,default:()=>e.album.showMore},shape:{type:String,default:()=>e.image.shape},radius:{type:[String,Number],default:()=>e.image.radius},autoWrap:{type:Boolean,default:()=>e.album.autoWrap}}})],data:()=>({singleWidth:0,singleHeight:0,singlePercent:.6}),watch:{urls:{immediate:!0,handler(t){1===t.length&&this.getImageRect()}}},emits:["albumWidth"],computed:{imageStyle(){return(t,e)=>{const{space:l,rowCount:u,multipleSize:s,urls:a}=this,{addUnit:i,addStyle:o}=uni.$u,r=this.showUrls.length;this.urls.length;const m={marginRight:i(l),marginBottom:i(l)};return t!==r||this.autoWrap||(m.marginBottom=0),this.autoWrap||(e===u||t===r&&e===this.showUrls[t-1].length)&&(m.marginRight=0),m}},showUrls(){if(this.autoWrap)return[this.urls.slice(0,this.maxCount)];{const t=[];return this.urls.map(((e,l)=>{if(l+1<=this.maxCount){const u=Math.floor(l/this.rowCount);t[u]||(t[u]=[]),t[u].push(e)}})),t}},imageWidth(){return s(1===this.urls.length?this.singleWidth:this.multipleSize,"px")},imageHeight(){return s(1===this.urls.length?this.singleHeight:this.multipleSize,"px")},albumWidth(){let t=0;return t=1===this.urls.length?this.singleWidth:this.showUrls[0].length*this.multipleSize+this.space*(this.showUrls[0].length-1),this.$emit("albumWidth",t),t}},methods:{addUnit:s,onPreviewTap(t){const e=this.urls.map((t=>this.getSrc(t)));uni.previewImage({current:t,urls:e})},getSrc(t){return a.object(t)?this.keyName&&t[this.keyName]||t.src:t},getImageRect(){const t=this.getSrc(this.urls[0]);uni.getImageInfo({src:t,success:t=>{const e=t.width>=t.height;this.singleWidth=e?this.singleSize:t.width/t.height*this.singleSize,this.singleHeight=e?t.height/t.width*this.singleWidth:this.singleSize},fail:()=>{this.getComponentWidth()}})},async getComponentWidth(){await i(30),this.$uGetRect(".u-album__row").then((t=>{this.singleWidth=t.width*this.singlePercent}))}}},[["render",function(t,e,l,u,s,a){const i=w,f=v(o("up-text"),x),y=h;return r(),m(y,{class:"u-album"},{default:d((()=>[(r(!0),c(p,null,n(a.showUrls,((e,l)=>(r(),m(y,{class:"u-album__row",ref_for:!0,ref:"u-album__row",forComputedUse:a.albumWidth,key:l,style:_({flexWrap:t.autoWrap?"wrap":"nowrap"})},{default:d((()=>[(r(!0),c(p,null,n(e,((e,u)=>(r(),m(y,{class:"u-album__row__wrapper",key:u,style:_([a.imageStyle(l+1,u+1)]),onClick:l=>t.previewFullImage?a.onPreviewTap(a.getSrc(e)):""},{default:d((()=>[g(i,{src:a.getSrc(e),mode:1===t.urls.length?a.imageHeight>0?t.singleMode:"widthFix":t.multipleMode,style:_([{width:a.imageWidth,height:a.imageHeight,borderRadius:"circle"==t.shape?"10000px":a.addUnit(t.radius)}])},null,8,["src","mode","style"]),t.showMore&&t.urls.length>t.rowCount*a.showUrls.length&&l===a.showUrls.length-1&&u===a.showUrls[a.showUrls.length-1].length-1?(r(),m(y,{key:0,class:"u-album__row__wrapper__text",style:_({borderRadius:"circle"==t.shape?"50%":a.addUnit(t.radius)})},{default:d((()=>[g(f,{text:"+"+(t.urls.length-t.maxCount),color:"#fff",size:.3*t.multipleSize,align:"center",customStyle:"justify-content: center"},null,8,["text","size"])])),_:1},8,["style"])):b("",!0)])),_:2},1032,["style","onClick"])))),128))])),_:2},1032,["forComputedUse","style"])))),128))])),_:1})}],["__scopeId","data-v-c3276117"]]);const W=k({data:()=>({albumWidth:0,urls1:[{src2:"https://cdn.uviewui.com/uview/album/1.jpg"}],urls2:["https://cdn.uviewui.com/uview/album/1.jpg","https://cdn.uviewui.com/uview/album/2.jpg","https://cdn.uviewui.com/uview/album/3.jpg","https://cdn.uviewui.com/uview/album/4.jpg","https://cdn.uviewui.com/uview/album/5.jpg","https://cdn.uviewui.com/uview/album/6.jpg","https://cdn.uviewui.com/uview/album/7.jpg","https://cdn.uviewui.com/uview/album/8.jpg","https://cdn.uviewui.com/uview/album/9.jpg","https://cdn.uviewui.com/uview/album/10.jpg"],urls3:["https://cdn.uviewui.com/uview/album/5.jpg","https://cdn.uviewui.com/uview/album/6.jpg","https://cdn.uviewui.com/uview/album/7.jpg","https://cdn.uviewui.com/uview/album/8.jpg"],urls4:["https://cdn.uviewui.com/uview/album/7.jpg","https://cdn.uviewui.com/uview/album/8.jpg","https://cdn.uviewui.com/uview/album/9.jpg","https://cdn.uviewui.com/uview/album/10.jpg"]})},[["render",function(t,e,l,u,s,a){const i=y,c=w,n=h,p=v(o("up-text"),x),b=v(o("up-album"),j);return r(),m(n,{class:"u-page"},{default:d((()=>[g(n,{class:"u-demo-block"},{default:d((()=>[g(i,{class:"u-demo-block__title"},{default:d((()=>[f("基础使用")])),_:1}),g(n,{class:"u-demo-block__content"},{default:d((()=>[g(n,{class:"album"},{default:d((()=>[g(n,{class:"album__avatar"},{default:d((()=>[g(c,{src:S,mode:"",style:{width:"32px",height:"32px"}})])),_:1}),g(n,{class:"album__content"},{default:d((()=>[g(p,{text:"uview-plus",type:"primary",bold:"",size:"17"}),g(p,{margin:"0 0 8px 0",text:"全面的组件和便捷的工具会让您信手拈来，如鱼得水"}),g(b,{urls:s.urls1,keyName:"src2"},null,8,["urls"])])),_:1})])),_:1})])),_:1})])),_:1}),g(n,{class:"u-demo-block"},{default:d((()=>[g(i,{class:"u-demo-block__title"},{default:d((()=>[f("多图模式")])),_:1}),g(n,{class:"u-demo-block__content"},{default:d((()=>[g(n,{class:"album"},{default:d((()=>[g(n,{class:"album__avatar"},{default:d((()=>[g(c,{src:S,mode:"",style:{width:"32px",height:"32px"}})])),_:1}),g(n,{class:"album__content"},{default:d((()=>[g(p,{text:"uview-plus",type:"primary",bold:"",size:"17"}),g(p,{margin:"0 0 8px 0",text:"全面的组件和便捷的工具会让您信手拈来，如鱼得水"}),g(b,{urls:s.urls2},null,8,["urls"])])),_:1})])),_:1})])),_:1})])),_:1}),g(n,{class:"u-demo-block"},{default:d((()=>[g(i,{class:"u-demo-block__title"},{default:d((()=>[f("图文对齐")])),_:1}),g(n,{class:"u-demo-block__content"},{default:d((()=>[g(n,{class:"album"},{default:d((()=>[g(n,{class:"album__avatar"},{default:d((()=>[g(c,{src:S,mode:"",style:{width:"32px",height:"32px"}})])),_:1}),g(n,{class:"album__content"},{default:d((()=>[g(p,{text:"uview-plus",type:"primary",bold:"",size:"17"}),g(n,{style:_({marginBottom:"8px",width:s.albumWidth+"px"})},{default:d((()=>[g(p,{text:"全面的组件和便捷的工具会让您信手拈来，如鱼得水",customStyle:{width:s.albumWidth+"px"}},null,8,["customStyle"])])),_:1},8,["style"]),g(b,{urls:s.urls2,onAlbumWidth:e[0]||(e[0]=t=>s.albumWidth=t),multipleSize:"68"},null,8,["urls"])])),_:1})])),_:1})])),_:1})])),_:1}),g(n,{class:"u-demo-block"},{default:d((()=>[g(i,{class:"u-demo-block__title"},{default:d((()=>[f("更改裁剪模式")])),_:1}),g(n,{class:"u-demo-block__content"},{default:d((()=>[g(n,{class:"album"},{default:d((()=>[g(n,{class:"album__avatar"},{default:d((()=>[g(c,{src:S,mode:"",style:{width:"32px",height:"32px"}})])),_:1}),g(n,{class:"album__content"},{default:d((()=>[g(p,{text:"uview-plus",type:"primary",bold:"",size:"17"}),g(p,{margin:"0 0 8px 0",text:"全面的组件和便捷的工具会让您信手拈来，如鱼得水"}),g(b,{urls:s.urls3,rowCount:"2",maxCount:"4",multipleMode:"scaleToFill"},null,8,["urls"])])),_:1})])),_:1})])),_:1})])),_:1}),g(n,{class:"u-demo-block"},{default:d((()=>[g(i,{class:"u-demo-block__title"},{default:d((()=>[f("更改图片大小")])),_:1}),g(n,{class:"u-demo-block__content"},{default:d((()=>[g(n,{class:"album"},{default:d((()=>[g(n,{class:"album__avatar"},{default:d((()=>[g(c,{src:S,mode:"",style:{width:"32px",height:"32px"}})])),_:1}),g(n,{class:"album__content"},{default:d((()=>[g(p,{text:"uview-plus",type:"primary",bold:"",size:"17"}),g(p,{margin:"0 0 8px 0",text:"全面的组件和便捷的工具会让您信手拈来，如鱼得水"}),g(b,{urls:s.urls4,rowCount:"2",maxCount:"4",multipleSize:"50"},null,8,["urls"])])),_:1})])),_:1})])),_:1})])),_:1}),g(n,{class:"u-demo-block"},{default:d((()=>[g(i,{class:"u-demo-block__title"},{default:d((()=>[f("自定义圆角")])),_:1}),g(n,{class:"u-demo-block__content"},{default:d((()=>[g(n,{class:"album"},{default:d((()=>[g(n,{class:"album__avatar"},{default:d((()=>[g(c,{src:S,mode:"",style:{width:"32px",height:"32px"}})])),_:1}),g(n,{class:"album__content"},{default:d((()=>[g(p,{text:"uview-plus",type:"primary",bold:"",size:"17"}),g(p,{margin:"0 0 8px 0",text:"全面的组件和便捷的工具会让您信手拈来，如鱼得水"}),g(b,{urls:s.urls2,radius:"10"},null,8,["urls"])])),_:1})])),_:1})])),_:1})])),_:1}),g(n,{class:"u-demo-block"},{default:d((()=>[g(i,{class:"u-demo-block__title"},{default:d((()=>[f("自定义形状")])),_:1}),g(n,{class:"u-demo-block__content"},{default:d((()=>[g(n,{class:"album"},{default:d((()=>[g(n,{class:"album__avatar"},{default:d((()=>[g(c,{src:S,mode:"",style:{width:"32px",height:"32px"}})])),_:1}),g(n,{class:"album__content"},{default:d((()=>[g(p,{text:"uview-plus",type:"primary",bold:"",size:"17"}),g(p,{margin:"0 0 8px 0",text:"全面的组件和便捷的工具会让您信手拈来，如鱼得水"}),g(b,{urls:s.urls2,shape:"circle"},null,8,["urls"])])),_:1})])),_:1})])),_:1})])),_:1}),g(n,{class:"u-demo-block"},{default:d((()=>[g(i,{class:"u-demo-block__title"},{default:d((()=>[f("自适应自动换行")])),_:1}),g(n,{class:"u-demo-block__content"},{default:d((()=>[g(n,{class:"album"},{default:d((()=>[g(n,{class:"album__avatar"},{default:d((()=>[g(c,{src:S,mode:"",style:{width:"32px",height:"32px"}})])),_:1}),g(n,{class:"album__content"},{default:d((()=>[g(p,{text:"uview-plus",type:"primary",bold:"",size:"17"}),g(p,{margin:"0 0 8px 0",text:"每行占满自动换行(不受rowCount限制)"}),g(b,{urls:s.urls2,"max-count":9,autoWrap:""},null,8,["urls"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-59cdccad"]]);export{W as default};
