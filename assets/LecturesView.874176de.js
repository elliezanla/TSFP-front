import{Q as u}from"./QImg.bccb1aad.js";import{Q as n}from"./QIcon.5ca772cc.js";import{Q as f}from"./QInput.2b55d701.js";import{Q as h}from"./QPage.9f43aec5.js";import{_ as x}from"./logo_1-1-text.e6389406.js";import{a0 as w,an as v,ao as b,m,y,t as e,v as _,d as t,C as s,q as p,ap as g,F as q,z as a,aq as k}from"./index.4d875d08.js";import{_ as E}from"./ProductCard.3b305984.js";import"./focus-manager.db5612a5.js";import"./QCard.c6fa8f42.js";import"./QSeparator.cc30faa3.js";import"./QItem.d2b8fa3b.js";import"./use-router-link.2f5a64da.js";import"./vm.594ed3a6.js";var V="/TSFP-front/assets/banner_lectures.452562f8.jpg";const Q=s("div",{class:"bg-mask mask-text col-12 column flex-center"},[s("p",{class:"col-2 text-h3"},"EVENTS"),s("p",{class:"col-2 text-h5"},"\u8B1B\u5EA7\u6D3B\u52D5")],-1),N={class:"section_1 row flex-center q-gutter-sm",style:{"max-width":"1920px"}},B=s("h5",{class:"field-title q-mb-xl col-12"},"\uFF0D \u6240\u6709\u6D3B\u52D5 ALL EVENTS \uFF0D",-1),C={class:"footer"},S={class:"row justify-between footer_container q-px-xl"},z={class:"footer_map row items-center col-3"},F={class:"row"},L={class:"row col-6"},T=s("p",{class:"col-12"},"\u7DB2\u7AD9\u5C0E\u89BD",-1),U={class:"col-6 q-pl-md"},j=s("p",null,"\u652F\u63F4\u670D\u52D9",-1),I={class:"footer_center q-pa-md",style:{width:"170px"}},P=s("img",{style:{width:"100%"},src:x},null,-1),A={style:{width:"100%"},class:"text-center"},H={class:"subscribe column justify-center col-3",style:{"max-width":"300px"}},M=s("p",null,"\u8A02\u95B1\u96FB\u5B50\u5831\u5373\u6642\u638C\u63E1\u6D3B\u52D5\u6D88\u606F",-1),Y=s("section",{class:"copyright row flex-center"}," \u6CF0\u5C71\u8077\u8A13\u524D\u7AEF\u7DB2\u9801\u5C08\u984C(\u50C5\u4F5C\u5B78\u8853\u4F7F\u7528) by SU-YU-ZHEN ",-1),at={__name:"LecturesView",setup(Z){const i=w([]);return(async()=>{var l,r;try{const{data:c}=await v.get("/products");i.push(...c.result),i.reverse(),console.log(i)}catch(c){b.fire({width:"18rem",icon:"error",text:((r=(l=c==null?void 0:c.response)==null?void 0:l.data)==null?void 0:r.message)||"\u767C\u751F\u932F\u8AA4",iconColor:"#C5A768",confirmButtonColor:"#2b2b2b"})}})(),(l,r)=>{const c=_("q-sectoin"),o=_("router-link");return m(),y(h,null,{default:e(()=>[t(c,{class:"banner row"},{default:e(()=>[t(u,{src:V,style:{"max-height":"35vh",width:"100vw"}}),Q]),_:1}),s("section",N,[B,(m(!0),p(q,null,g(i,d=>(m(),p("div",{key:d._id},[t(E,k({class:"card-scal card_events"},d),null,16)]))),128))]),s("section",C,[s("div",S,[s("div",z,[s("div",F,[s("div",L,[T,t(o,{class:"col-6",to:"/"},{default:e(()=>[a("\u56DE\u9996\u9801")]),_:1}),t(o,{class:"col-6",to:"/menu"},{default:e(()=>[a("\u9910\u98F2\u4ECB\u7D39")]),_:1}),t(o,{class:"col-6",to:"/about"},{default:e(()=>[a("\u54C1\u724C\u6545\u4E8B")]),_:1}),t(o,{class:"col-6",to:"/"},{default:e(()=>[a("\u7DDA\u4E0AMENU")]),_:1}),t(o,{class:"col-6",to:"/products"},{default:e(()=>[a("\u8B1B\u5EA7\u6D3B\u52D5")]),_:1}),t(o,{class:"col-6",to:"/about/location"},{default:e(()=>[a("\u9580\u5E02\u4F4D\u5740")]),_:1}),t(o,{class:"col-6",to:"/articles"},{default:e(()=>[a("\u5C08\u6B04\u597D\u6587")]),_:1}),t(o,{to:"/myaccount/orders"},{default:e(()=>[a("\u6703\u54E1\u5C08\u5340")]),_:1})]),s("div",U,[j,t(o,{to:"/myaccount/orders"},{default:e(()=>[a("\u5831\u540D\u67E5\u8A62")]),_:1}),t(o,{to:"/service"},{default:e(()=>[a("\u5E38\u898B\u554F\u984C")]),_:1}),t(o,{to:"/service/contactus"},{default:e(()=>[a("\u806F\u7D61\u6211\u5011")]),_:1}),t(o,{to:"/"},{default:e(()=>[a("\u96B1\u79C1\u6B0A\u653F\u7B56")]),_:1})])])]),s("div",I,[P,s("div",A,[t(n,{name:"fa-brands fa-instagram",size:"1rem",class:"q-mr-sm"}),t(n,{name:"fa-brands fa-facebook",size:"1rem",class:"q-mr-sm"}),t(n,{name:"fa-brands fa-twitter",size:"1rem"})])]),s("div",H,[M,t(f,{dense:"",modelValue:l.text,"onUpdate:modelValue":r[0]||(r[0]=d=>l.text=d),placeholder:"your Email",type:"email","bg-color":"black",color:"accent","input-style":{color:"#E1BF77"}},{prepend:e(()=>[t(n,{name:"mail",class:"q-px-sm"})]),append:e(()=>[t(n,{name:"send",class:"cursor-pointer q-px-sm"})]),_:1},8,["modelValue"])])])]),Y]),_:1})}}};export{at as default};