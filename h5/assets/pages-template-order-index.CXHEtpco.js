import{_ as e,r as t,aO as l,a as s,u as a,a3 as i,o as r,f as o,w as c,i as d,g as u,h as n,j as f,F as m,m as g,k as p,a_ as _,$ as b,a0 as h,t as y,n as L}from"./index-CbbCK9cD.js";const w=e({data:()=>({orderList:[[],[],[],[]],dataList:[{id:1,store:"夏日流星限定贩卖",deal:"交易成功",goodsList:[{goodsUrl:"//img13.360buyimg.com/n7/jfs/t1/103005/7/17719/314825/5e8c19faEb7eed50d/5b81ae4b2f7f3bb7.jpg",title:"【冬日限定】现货 原创jk制服女2020冬装新款小清新宽松软糯毛衣外套女开衫短款百搭日系甜美风",type:"灰色;M",deliveryTime:"付款后30天内发货",price:"348.58",number:2},{goodsUrl:"//img12.360buyimg.com/n7/jfs/t1/102191/19/9072/330688/5e0af7cfE17698872/c91c00d713bf729a.jpg",title:"【葡萄藤】现货 小清新学院风制服格裙百褶裙女短款百搭日系甜美风原创jk制服女2020新款",type:"45cm;S",deliveryTime:"付款后30天内发货",price:"135.00",number:1}]},{id:2,store:"江南皮革厂",deal:"交易失败",goodsList:[{goodsUrl:"//img14.360buyimg.com/n7/jfs/t1/60319/15/6105/406802/5d43f68aE9f00db8c/0affb7ac46c345e2.jpg",title:"【冬日限定】现货 原创jk制服女2020冬装新款小清新宽松软糯毛衣外套女开衫短款百搭日系甜美风",type:"粉色;M",deliveryTime:"付款后7天内发货",price:"128.05",number:1}]},{id:3,store:"三星旗舰店",deal:"交易失败",goodsList:[{goodsUrl:"//img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg",title:"三星（SAMSUNG）京品家电 UA65RUF70AJXXZ 65英寸4K超高清 HDR 京东微联 智能语音 教育资源液晶电视机",type:"4K，广色域",deliveryTime:"保质5年",price:"1998",number:3},{goodsUrl:"//img14.360buyimg.com/n7/jfs/t6007/205/4099529191/294869/ae4e6d4f/595dcf19Ndce3227d.jpg!q90.jpg",title:"美的(Midea)639升 对开门冰箱 19分钟急速净味 一级能效冷藏双开门杀菌智能家用双变频节能 BCD-639WKPZM(E)",type:"容量大，速冻",deliveryTime:"保质5年",price:"2354",number:1}]},{id:4,store:"三星旗舰店",deal:"交易失败",goodsList:[{goodsUrl:"//img10.360buyimg.com/n7/jfs/t22300/31/1505958241/171936/9e201a89/5b2b12ffNe6dbb594.jpg!q90.jpg",title:"法国进口红酒 拉菲（LAFITE）传奇波尔多干红葡萄酒750ml*6整箱装",type:"4K，广色域",deliveryTime:"珍藏10年好酒",price:"1543",number:3},{goodsUrl:"//img10.360buyimg.com/n7/jfs/t1/107598/17/3766/525060/5e143aacE9a94d43c/03573ae60b8bf0ee.jpg",title:"蓝妹（BLUE GIRL）酷爽啤酒 清啤 原装进口啤酒 罐装 500ml*9听 整箱装",type:"一打",deliveryTime:"口感好",price:"120",number:1}]},{id:5,store:"三星旗舰店",deal:"交易成功",goodsList:[{goodsUrl:"//img12.360buyimg.com/n7/jfs/t1/52408/35/3554/78293/5d12e9cfEfd118ba1/ba5995e62cbd747f.jpg!q90.jpg",title:"企业微信 中控人脸指纹识别考勤机刷脸机 无线签到异地多店打卡机WX108",type:"识别效率高",deliveryTime:"使用方便",price:"451",number:9}]}],list:[{name:"待付款"},{name:"待发货"},{name:"待收货"},{name:"待评价",count:12}],current:0,swiperCurrent:0,tabsHeight:0,dx:0,loadStatus:["loadmore","loadmore","loadmore","loadmore"]}),onLoad(){this.getOrderList(0),this.getOrderList(1),this.getOrderList(3)},computed:{priceDecimal:()=>e=>e!==parseInt(e)?e.slice(-2):"00",priceInt:()=>e=>e!==parseInt(e)?e.split(".")[0]:e},methods:{reachBottom(){2!=this.current&&(this.loadStatus.splice(this.current,1,"loading"),setTimeout((()=>{this.getOrderList(this.current)}),1200))},getOrderList(e){for(let t=0;t<5;t++){let t=this.$u.random(0,this.dataList.length-1),l=JSON.parse(JSON.stringify(this.dataList[t]));l.id=this.$u.guid(),this.orderList[e].push(l)}this.loadStatus.splice(this.current,1,"loadmore")},totalPrice(e){let t=0;return e.map((e=>{t+=parseFloat(e.price)})),t.toFixed(2)},totalNum(e){let t=0;return e.map((e=>{t+=e.number})),t},change(e){this.swiperCurrent=e.index,this.getOrderList(e.index)},transition({detail:{dx:e}}){},animationfinish({detail:{current:e}}){this.swiperCurrent=e,this.current=e}}},[["render",function(e,w,j,v,x,S){const T=t(s("up-tabs"),l),U=d,I=t(s("up-icon"),a),C=p,k=L,D=t(s("up-loadmore"),i),E=_,N=b,O=h;return r(),o(U,null,{default:c((()=>[u(U,{class:"wrap"},{default:c((()=>[u(U,{class:"u-tabs-box"},{default:c((()=>[u(T,{activeColor:"#f29100",ref:"tabs",list:x.list,current:x.current,onChange:S.change,"is-scroll":!1,swiperWidth:"750"},null,8,["list","current","onChange"])])),_:1}),u(O,{class:"swiper-box",current:x.swiperCurrent,onTransition:S.transition,onAnimationfinish:S.animationfinish},{default:c((()=>[u(N,{class:"swiper-item"},{default:c((()=>[u(E,{"scroll-y":"",style:{height:"100%",width:"100%"},onScrolltolower:S.reachBottom},{default:c((()=>[u(U,{class:"page-box"},{default:c((()=>[(r(!0),n(m,null,f(x.orderList[0],((e,t)=>(r(),o(U,{class:"order",key:e.id},{default:c((()=>[u(U,{class:"top"},{default:c((()=>[u(U,{class:"left"},{default:c((()=>[u(I,{name:"home",size:30,color:"rgb(94,94,94)"}),u(U,{class:"store"},{default:c((()=>[g(y(e.store),1)])),_:2},1024),u(I,{name:"arrow-right",color:"rgb(203,203,203)",size:26})])),_:2},1024),u(U,{class:"right"},{default:c((()=>[g(y(e.deal),1)])),_:2},1024)])),_:2},1024),(r(!0),n(m,null,f(e.goodsList,((e,t)=>(r(),o(U,{class:"item",key:t},{default:c((()=>[u(U,{class:"left"},{default:c((()=>[u(C,{src:e.goodsUrl,mode:"aspectFill"},null,8,["src"])])),_:2},1024),u(U,{class:"content"},{default:c((()=>[u(U,{class:"title u-line-2"},{default:c((()=>[g(y(e.title),1)])),_:2},1024),u(U,{class:"type"},{default:c((()=>[g(y(e.type),1)])),_:2},1024),u(U,{class:"delivery-time"},{default:c((()=>[g("发货时间 "+y(e.deliveryTime),1)])),_:2},1024)])),_:2},1024),u(U,{class:"right"},{default:c((()=>[u(U,{class:"price"},{default:c((()=>[g(" ￥"+y(S.priceInt(e.price))+" ",1),u(k,{class:"decimal"},{default:c((()=>[g("."+y(S.priceDecimal(e.price)),1)])),_:2},1024)])),_:2},1024),u(U,{class:"number"},{default:c((()=>[g("x"+y(e.number),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128)),u(U,{class:"total"},{default:c((()=>[g(" 共"+y(S.totalNum(e.goodsList))+"件商品 合计: ",1),u(k,{class:"total-price"},{default:c((()=>[g(" ￥"+y(S.priceInt(S.totalPrice(e.goodsList)))+". ",1),u(k,{class:"decimal"},{default:c((()=>[g(y(S.priceDecimal(S.totalPrice(e.goodsList))),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),u(U,{class:"bottom"},{default:c((()=>[u(U,{class:"more"},{default:c((()=>[u(I,{name:"more-dot-fill",color:"rgb(203,203,203)"})])),_:1}),u(U,{class:"logistics btn"},{default:c((()=>[g("查看物流")])),_:1}),u(U,{class:"exchange btn"},{default:c((()=>[g("卖了换钱")])),_:1}),u(U,{class:"evaluate btn"},{default:c((()=>[g("评价")])),_:1})])),_:1})])),_:2},1024)))),128)),u(D,{status:x.loadStatus[0],bgColor:"#f2f2f2"},null,8,["status"])])),_:1})])),_:1},8,["onScrolltolower"])])),_:1}),u(N,{class:"swiper-item"},{default:c((()=>[u(E,{"scroll-y":"",style:{height:"100%",width:"100%"},onScrolltolower:S.reachBottom},{default:c((()=>[u(U,{class:"page-box"},{default:c((()=>[(r(!0),n(m,null,f(x.orderList[1],((e,t)=>(r(),o(U,{class:"order",key:e.id},{default:c((()=>[u(U,{class:"top"},{default:c((()=>[u(U,{class:"left"},{default:c((()=>[u(I,{name:"home",size:30,color:"rgb(94,94,94)"}),u(U,{class:"store"},{default:c((()=>[g(y(e.store),1)])),_:2},1024),u(I,{name:"arrow-right",color:"rgb(203,203,203)",size:26})])),_:2},1024),u(U,{class:"right"},{default:c((()=>[g(y(e.deal),1)])),_:2},1024)])),_:2},1024),(r(!0),n(m,null,f(e.goodsList,((e,t)=>(r(),o(U,{class:"item",key:t},{default:c((()=>[u(U,{class:"left"},{default:c((()=>[u(C,{src:e.goodsUrl,mode:"aspectFill"},null,8,["src"])])),_:2},1024),u(U,{class:"content"},{default:c((()=>[u(U,{class:"title u-line-2"},{default:c((()=>[g(y(e.title),1)])),_:2},1024),u(U,{class:"type"},{default:c((()=>[g(y(e.type),1)])),_:2},1024),u(U,{class:"delivery-time"},{default:c((()=>[g("发货时间 "+y(e.deliveryTime),1)])),_:2},1024)])),_:2},1024),u(U,{class:"right"},{default:c((()=>[u(U,{class:"price"},{default:c((()=>[g(" ￥"+y(S.priceInt(e.price))+" ",1),u(k,{class:"decimal"},{default:c((()=>[g("."+y(S.priceDecimal(e.price)),1)])),_:2},1024)])),_:2},1024),u(U,{class:"number"},{default:c((()=>[g("x"+y(e.number),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128)),u(U,{class:"total"},{default:c((()=>[g(" 共"+y(S.totalNum(e.goodsList))+"件商品 合计: ",1),u(k,{class:"total-price"},{default:c((()=>[g(" ￥"+y(S.priceInt(S.totalPrice(e.goodsList)))+". ",1),u(k,{class:"decimal"},{default:c((()=>[g(y(S.priceDecimal(S.totalPrice(e.goodsList))),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),u(U,{class:"bottom"},{default:c((()=>[u(U,{class:"more"},{default:c((()=>[u(I,{name:"more-dot-fill",color:"rgb(203,203,203)"})])),_:1}),u(U,{class:"logistics btn"},{default:c((()=>[g("查看物流")])),_:1}),u(U,{class:"exchange btn"},{default:c((()=>[g("卖了换钱")])),_:1}),u(U,{class:"evaluate btn"},{default:c((()=>[g("评价")])),_:1})])),_:1})])),_:2},1024)))),128)),u(D,{status:x.loadStatus[1],bgColor:"#f2f2f2"},null,8,["status"])])),_:1})])),_:1},8,["onScrolltolower"])])),_:1}),u(N,{class:"swiper-item"},{default:c((()=>[u(E,{"scroll-y":"",style:{height:"100%",width:"100%"}},{default:c((()=>[u(U,{class:"page-box"},{default:c((()=>[u(U,null,{default:c((()=>[u(U,{class:"centre"},{default:c((()=>[u(C,{src:"https://cdn.uviewui.com/uview/template/taobao-order.png",mode:""}),u(U,{class:"explain"},{default:c((()=>[g(" 您还没有相关的订单 "),u(U,{class:"tips"},{default:c((()=>[g("可以去看看有那些想买的")])),_:1})])),_:1}),u(U,{class:"btn"},{default:c((()=>[g("随便逛逛")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),u(N,{class:"swiper-item"},{default:c((()=>[u(E,{"scroll-y":"",style:{height:"100%",width:"100%"},onScrolltolower:S.reachBottom},{default:c((()=>[u(U,{class:"page-box"},{default:c((()=>[(r(!0),n(m,null,f(x.orderList[3],((e,t)=>(r(),o(U,{class:"order",key:e.id},{default:c((()=>[u(U,{class:"top"},{default:c((()=>[u(U,{class:"left"},{default:c((()=>[u(I,{name:"home",size:30,color:"rgb(94,94,94)"}),u(U,{class:"store"},{default:c((()=>[g(y(e.store),1)])),_:2},1024),u(I,{name:"arrow-right",color:"rgb(203,203,203)",size:26})])),_:2},1024),u(U,{class:"right"},{default:c((()=>[g(y(e.deal),1)])),_:2},1024)])),_:2},1024),(r(!0),n(m,null,f(e.goodsList,((e,t)=>(r(),o(U,{class:"item",key:t},{default:c((()=>[u(U,{class:"left"},{default:c((()=>[u(C,{src:e.goodsUrl,mode:"aspectFill"},null,8,["src"])])),_:2},1024),u(U,{class:"content"},{default:c((()=>[u(U,{class:"title u-line-2"},{default:c((()=>[g(y(e.title),1)])),_:2},1024),u(U,{class:"type"},{default:c((()=>[g(y(e.type),1)])),_:2},1024),u(U,{class:"delivery-time"},{default:c((()=>[g("发货时间 "+y(e.deliveryTime),1)])),_:2},1024)])),_:2},1024),u(U,{class:"right"},{default:c((()=>[u(U,{class:"price"},{default:c((()=>[g(" ￥"+y(S.priceInt(e.price))+" ",1),u(k,{class:"decimal"},{default:c((()=>[g("."+y(S.priceDecimal(e.price)),1)])),_:2},1024)])),_:2},1024),u(U,{class:"number"},{default:c((()=>[g("x"+y(e.number),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128)),u(U,{class:"total"},{default:c((()=>[g(" 共"+y(S.totalNum(e.goodsList))+"件商品 合计: ",1),u(k,{class:"total-price"},{default:c((()=>[g(" ￥"+y(S.priceInt(S.totalPrice(e.goodsList)))+". ",1),u(k,{class:"decimal"},{default:c((()=>[g(y(S.priceDecimal(S.totalPrice(e.goodsList))),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),u(U,{class:"bottom"},{default:c((()=>[u(U,{class:"more"},{default:c((()=>[u(I,{name:"more-dot-fill",color:"rgb(203,203,203)"})])),_:1}),u(U,{class:"logistics btn"},{default:c((()=>[g("查看物流")])),_:1}),u(U,{class:"exchange btn"},{default:c((()=>[g("卖了换钱")])),_:1}),u(U,{class:"evaluate btn"},{default:c((()=>[g("评价")])),_:1})])),_:1})])),_:2},1024)))),128)),u(D,{status:x.loadStatus[3],bgColor:"#f2f2f2"},null,8,["status"])])),_:1})])),_:1},8,["onScrolltolower"])])),_:1})])),_:1},8,["current","onTransition","onAnimationfinish"])])),_:1})])),_:1})}],["__scopeId","data-v-c226026c"]]);export{w as default};
