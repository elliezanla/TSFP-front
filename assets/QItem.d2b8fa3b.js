import{u as E,a as K}from"./focus-manager.db5612a5.js";import{u as R,a as B}from"./use-router-link.2f5a64da.js";import{H as w,r as o,c as n,h as v,L as A,K as D,R as I,g as P}from"./index.4d875d08.js";var F=w({name:"QItem",props:{...E,...R,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(t,{slots:d,emit:f}){const{proxy:{$q:i}}=P(),m=K(t,i),{hasLink:s,linkAttrs:b,linkClass:k,linkTag:q,navigateOnClick:g}=B(),u=o(null),l=o(null),r=n(()=>t.clickable===!0||s.value===!0||t.tag==="label"),a=n(()=>t.disable!==!0&&r.value===!0),y=n(()=>"q-item q-item-type row no-wrap"+(t.dense===!0?" q-item--dense":"")+(m.value===!0?" q-item--dark":"")+(s.value===!0&&t.active===null?k.value:t.active===!0?` q-item--active${t.activeClass!==void 0?` ${t.activeClass}`:""}`:"")+(t.disable===!0?" disabled":"")+(a.value===!0?" q-item--clickable q-link cursor-pointer "+(t.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(t.focused===!0?" q-manual-focusable--focused":""):"")),C=n(()=>{if(t.insetLevel===void 0)return null;const e=i.lang.rtl===!0?"Right":"Left";return{["padding"+e]:16+t.insetLevel*56+"px"}});function h(e){a.value===!0&&(l.value!==null&&(e.qKeyEvent!==!0&&document.activeElement===u.value?l.value.focus():document.activeElement===l.value&&u.value.focus()),g(e))}function L(e){if(a.value===!0&&A(e,13)===!0){D(e),e.qKeyEvent=!0;const c=new MouseEvent("click",e);c.qKeyEvent=!0,u.value.dispatchEvent(c)}f("keyup",e)}function x(){const e=I(d.default,[]);return a.value===!0&&e.unshift(v("div",{class:"q-focus-helper",tabindex:-1,ref:l})),e}return()=>{const e={ref:u,class:y.value,style:C.value,role:"listitem",onClick:h,onKeyup:L};return a.value===!0?(e.tabindex=t.tabindex||"0",Object.assign(e,b.value)):r.value===!0&&(e["aria-disabled"]="true"),v(q.value,e,x())}}});export{F as Q};