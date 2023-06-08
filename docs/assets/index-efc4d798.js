import{r as o,g as ne,m as ae,a as be,c as tt,C as Y,b as z,i as rt,d as de,t as ue,e as Te,p as Be,f as nt,_ as q,w as at,h as me,j as $e,k as Oe,l as je,K as le,u as Ne,P as ot,n as st,N as lt,o as it,q as ve,s as ye,v as m,L as pe,x as xe,y as te,B as ct,z as dt,A as ie,O as ut}from"./index-ea61881a.js";import{u as mt,D as Me,a as pt,S as ee,M as ft}from"./index-ae381978.js";import{r as gt,R as ht,g as bt,P as vt,a as yt,T as xt}from"./index-7fff6bd7.js";import{l as St}from"./logo-d3ff92ff.js";import{u as Ct}from"./use-animate-ad02324a.js";import"./useMergedState-e6b06b84.js";import"./index-609072ce.js";import"./SVGVisualElement-f1fbeac3.js";const fe=o.createContext("default"),Pe=e=>{let{children:t,size:n}=e;const r=o.useContext(fe);return o.createElement(fe.Provider,{value:n||r},t)},wt=e=>{const{antCls:t,componentCls:n,iconCls:r,avatarBg:a,avatarColor:c,avatarSizeBase:s,avatarSizeLG:i,avatarSizeSM:d,avatarFontSizeBase:p,avatarFontSizeLG:l,avatarFontSizeSM:u,borderRadius:f,borderRadiusLG:g,borderRadiusSM:v,lineWidth:b,lineType:C}=e,y=(h,S,x)=>({width:h,height:h,lineHeight:`${h-b*2}px`,borderRadius:"50%",[`&${n}-square`]:{borderRadius:x},[`${n}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${n}-icon`]:{fontSize:S,[`> ${r}`]:{margin:0}}});return{[n]:Object.assign(Object.assign(Object.assign(Object.assign({},be(e)),{position:"relative",display:"inline-block",overflow:"hidden",color:c,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:a,border:`${b}px ${C} transparent`,["&-image"]:{background:"transparent"},[`${t}-image-img`]:{display:"block"}}),y(s,p,f)),{["&-lg"]:Object.assign({},y(i,l,g)),["&-sm"]:Object.assign({},y(d,u,v)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},$t=e=>{const{componentCls:t,avatarGroupBorderColor:n,avatarGroupSpace:r}=e;return{[`${t}-group`]:{display:"inline-flex",[`${t}`]:{borderColor:n},["> *:not(:first-child)"]:{marginInlineStart:r}}}},De=ne("Avatar",e=>{const{colorTextLightSolid:t,controlHeight:n,controlHeightLG:r,controlHeightSM:a,fontSize:c,fontSizeLG:s,fontSizeXL:i,fontSizeHeading3:d,marginXS:p,colorBorderBg:l,colorTextPlaceholder:u}=e,f=ae(e,{avatarBg:u,avatarColor:t,avatarSizeBase:n,avatarSizeLG:r,avatarSizeSM:a,avatarFontSizeBase:Math.round((s+i)/2),avatarFontSizeLG:d,avatarFontSizeSM:c,avatarGroupSpace:-p,avatarGroupBorderColor:l});return[wt(f),$t(f)]});var Ot=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const jt=(e,t)=>{const n=o.useContext(fe),[r,a]=o.useState(1),[c,s]=o.useState(!1),[i,d]=o.useState(!0),p=o.useRef(null),l=o.useRef(null),u=tt(t,p),{getPrefixCls:f}=o.useContext(Y),g=()=>{if(!l.current||!p.current)return;const _=l.current.offsetWidth,N=p.current.offsetWidth;if(_!==0&&N!==0){const{gap:K=4}=e;K*2<N&&a(N-K*2<_?(N-K*2)/_:1)}};o.useEffect(()=>{s(!0)},[]),o.useEffect(()=>{d(!0),a(1)},[e.src]),o.useEffect(g,[e.gap]);const v=()=>{const{onError:_}=e;(_==null?void 0:_())!==!1&&d(!1)},{prefixCls:b,shape:C="circle",size:y="default",src:h,srcSet:S,icon:x,className:w,rootClassName:O,alt:k,draggable:I,children:F,crossOrigin:M}=e,B=Ot(e,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),j=y==="default"?n:y,W=Object.keys(typeof j=="object"?j||{}:{}).some(_=>["xs","sm","md","lg","xl","xxl"].includes(_)),R=mt(W),D=o.useMemo(()=>{if(typeof j!="object")return{};const _=gt.find(K=>R[K]),N=j[_];return N?{width:N,height:N,lineHeight:`${N}px`,fontSize:x?N/2:18}:{}},[R,j]),E=f("avatar",b),[L,V]=De(E),G=z({[`${E}-lg`]:j==="large",[`${E}-sm`]:j==="small"}),H=o.isValidElement(h),A=z(E,G,{[`${E}-${C}`]:!!C,[`${E}-image`]:H||h&&i,[`${E}-icon`]:!!x},w,O,V),U=typeof j=="number"?{width:j,height:j,lineHeight:`${j}px`,fontSize:x?j/2:18}:{};let $;if(typeof h=="string"&&i)$=o.createElement("img",{src:h,draggable:I,srcSet:S,onError:v,alt:k,crossOrigin:M});else if(H)$=h;else if(x)$=x;else if(c||r!==1){const _=`scale(${r}) translateX(-50%)`,N={msTransform:_,WebkitTransform:_,transform:_},K=typeof j=="number"?{lineHeight:`${j}px`}:{};$=o.createElement(ht,{onResize:g},o.createElement("span",{className:`${E}-string`,ref:l,style:Object.assign(Object.assign({},K),N)},F))}else $=o.createElement("span",{className:`${E}-string`,style:{opacity:0},ref:l},F);return delete B.onError,delete B.gap,L(o.createElement("span",Object.assign({},B,{style:Object.assign(Object.assign(Object.assign({},U),D),B.style),className:A,ref:u}),$))},Nt=o.forwardRef(jt),Le=Nt,re=e=>e?typeof e=="function"?e():e:null,Pt=e=>{const{componentCls:t,popoverBg:n,popoverColor:r,width:a,fontWeightStrong:c,popoverPadding:s,boxShadowSecondary:i,colorTextHeading:d,borderRadiusLG:p,zIndexPopup:l,marginXS:u,colorBgElevated:f}=e;return[{[t]:Object.assign(Object.assign({},be(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:l,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":f,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${t}-content`]:{position:"relative"},[`${t}-inner`]:{backgroundColor:n,backgroundClip:"padding-box",borderRadius:p,boxShadow:i,padding:s},[`${t}-title`]:{minWidth:a,marginBottom:u,color:d,fontWeight:c},[`${t}-inner-content`]:{color:r}})},bt(e,{colorBg:"var(--antd-arrow-background-color)"}),{[`${t}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block",[`${t}-content`]:{display:"inline-block"}}}]},Et=e=>{const{componentCls:t}=e;return{[t]:vt.map(n=>{const r=e[`${n}6`];return{[`&${t}-${n}`]:{"--antd-arrow-background-color":r,[`${t}-inner`]:{backgroundColor:r},[`${t}-arrow`]:{background:"transparent"}}}})}},_t=e=>{const{componentCls:t,lineWidth:n,lineType:r,colorSplit:a,paddingSM:c,controlHeight:s,fontSize:i,lineHeight:d,padding:p}=e,l=s-Math.round(i*d),u=l/2,f=l/2-n,g=p;return{[t]:{[`${t}-inner`]:{padding:0},[`${t}-title`]:{margin:0,padding:`${u}px ${g}px ${f}px`,borderBottom:`${n}px ${r} ${a}`},[`${t}-inner-content`]:{padding:`${c}px ${g}px`}}}},He=ne("Popover",e=>{const{colorBgElevated:t,colorText:n,wireframe:r}=e,a=ae(e,{popoverBg:t,popoverColor:n,popoverPadding:12});return[Pt(a),Et(a),r&&_t(a),rt(a,"zoom-big")]},e=>{let{zIndexPopupBase:t}=e;return{zIndexPopup:t+30,width:177}});var kt=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const zt=(e,t,n)=>{if(!(!t&&!n))return o.createElement(o.Fragment,null,t&&o.createElement("div",{className:`${e}-title`},re(t)),o.createElement("div",{className:`${e}-inner-content`},re(n)))};function It(e){const{hashId:t,prefixCls:n,className:r,style:a,placement:c="top",title:s,content:i,children:d}=e;return o.createElement("div",{className:z(t,n,`${n}-pure`,`${n}-placement-${c}`,r),style:a},o.createElement("div",{className:`${n}-arrow`}),o.createElement(yt,Object.assign({},e,{className:t,prefixCls:n}),d||zt(n,s,i)))}function Rt(e){const{prefixCls:t}=e,n=kt(e,["prefixCls"]),{getPrefixCls:r}=o.useContext(Y),a=r("popover",t),[c,s]=He(a);return c(o.createElement(It,Object.assign({},n,{prefixCls:a,hashId:s})))}var Tt=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Bt=e=>{let{title:t,content:n,prefixCls:r}=e;return o.createElement(o.Fragment,null,t&&o.createElement("div",{className:`${r}-title`},re(t)),o.createElement("div",{className:`${r}-inner-content`},re(n)))},Ae=o.forwardRef((e,t)=>{const{prefixCls:n,title:r,content:a,overlayClassName:c,placement:s="top",trigger:i="hover",mouseEnterDelay:d=.1,mouseLeaveDelay:p=.1,overlayStyle:l={}}=e,u=Tt(e,["prefixCls","title","content","overlayClassName","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),{getPrefixCls:f}=o.useContext(Y),g=f("popover",n),[v,b]=He(g),C=f(),y=z(c,b);return v(o.createElement(xt,Object.assign({placement:s,trigger:i,mouseEnterDelay:d,mouseLeaveDelay:p,overlayStyle:l},u,{prefixCls:g,overlayClassName:y,ref:t,overlay:r||a?o.createElement(Bt,{prefixCls:g,title:r,content:a}):null,transitionName:de(C,"zoom-big",u.transitionName),"data-popover-inject":!0})))});Ae._InternalPanelDoNotUseOrYouWillBeFired=Rt;const Mt=Ae,Dt=e=>{const{getPrefixCls:t,direction:n}=o.useContext(Y),{prefixCls:r,className:a,rootClassName:c,maxCount:s,maxStyle:i,size:d}=e,p=t("avatar",r),l=`${p}-group`,[u,f]=De(p),g=z(l,{[`${l}-rtl`]:n==="rtl"},a,c,f),{children:v,maxPopoverPlacement:b="top",maxPopoverTrigger:C="hover"}=e,y=ue(v).map((S,x)=>Te(S,{key:`avatar-key-${x}`})),h=y.length;if(s&&s<h){const S=y.slice(0,s),x=y.slice(s,h);return S.push(o.createElement(Mt,{key:"avatar-popover-key",content:x,trigger:C,placement:b,overlayClassName:`${l}-popover`},o.createElement(Le,{style:i},`+${h-s}`))),u(o.createElement(Pe,{size:d},o.createElement("div",{className:g,style:e.style},S)))}return u(o.createElement(Pe,{size:d},o.createElement("div",{className:g,style:e.style},y)))},Lt=Dt,Fe=Le;Fe.Group=Lt;const Ht=Fe,We=e=>{let{children:t}=e;const{getPrefixCls:n}=o.useContext(Y),r=n("breadcrumb");return o.createElement("li",{className:`${r}-separator`,"aria-hidden":"true"},t===""?t:t||"/")};We.__ANT_BREADCRUMB_SEPARATOR=!0;const Se=We;var At=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function Ft(e,t){if(e.title===void 0)return null;const n=Object.keys(t).join("|");return typeof e.title=="object"?e.title:String(e.title).replace(new RegExp(`:(${n})`,"g"),(r,a)=>t[a]||r)}function Xe(e,t,n,r){if(n==null)return null;const{className:a,onClick:c}=t,s=At(t,["className","onClick"]),i=Object.assign(Object.assign({},Be(s,{data:!0,aria:!0})),{onClick:c});return r!==void 0?o.createElement("a",Object.assign({},i,{className:z(`${e}-link`,a),href:r}),n):o.createElement("span",Object.assign({},i,{className:z(`${e}-link`,a)}),n)}function Wt(e,t){return(r,a,c,s,i)=>{if(t)return t(r,a,c,s);const d=Ft(r,a);return Xe(e,r,d,i)}}var ge=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Ge=e=>{const{prefixCls:t,separator:n="/",children:r,menu:a,overlay:c,dropdownProps:s,href:i}=e,p=(l=>{if(a||c){const u=Object.assign({},s);if(a){const f=a||{},{items:g}=f,v=ge(f,["items"]);u.menu=Object.assign(Object.assign({},v),{items:g==null?void 0:g.map((b,C)=>{var{key:y,title:h,label:S,path:x}=b,w=ge(b,["key","title","label","path"]);let O=S??h;return x&&(O=o.createElement("a",{href:`${i}${x}`},O)),Object.assign(Object.assign({},w),{key:y??C,label:O})})})}else c&&(u.overlay=c);return o.createElement(Me,Object.assign({placement:"bottom"},u),o.createElement("span",{className:`${t}-overlay-link`},l,o.createElement(pt,null)))}return l})(r);return p!=null?o.createElement(o.Fragment,null,o.createElement("li",null,p),n&&o.createElement(Se,null,n)):null},Ke=e=>{const{prefixCls:t,children:n,href:r}=e,a=ge(e,["prefixCls","children","href"]),{getPrefixCls:c}=o.useContext(Y),s=c("breadcrumb",t);return o.createElement(Ge,Object.assign({},a,{prefixCls:s}),Xe(s,a,n,r))};Ke.__ANT_BREADCRUMB_ITEM=!0;const Xt=Ke,Gt=e=>{const{componentCls:t,iconCls:n}=e;return{[t]:Object.assign(Object.assign({},be(e)),{color:e.breadcrumbBaseColor,fontSize:e.breadcrumbFontSize,[n]:{fontSize:e.breadcrumbIconFontSize},ol:{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"},a:Object.assign({color:e.breadcrumbLinkColor,transition:`color ${e.motionDurationMid}`,padding:`0 ${e.paddingXXS}px`,borderRadius:e.borderRadiusSM,height:e.lineHeight*e.fontSize,display:"inline-block",marginInline:-e.marginXXS,"&:hover":{color:e.breadcrumbLinkColorHover,backgroundColor:e.colorBgTextHover}},nt(e)),["li:last-child"]:{color:e.breadcrumbLastItemColor},[`${t}-separator`]:{marginInline:e.breadcrumbSeparatorMargin,color:e.breadcrumbSeparatorColor},[`${t}-link`]:{[`
          > ${n} + span,
          > ${n} + a
        `]:{marginInlineStart:e.marginXXS}},[`${t}-overlay-link`]:{borderRadius:e.borderRadiusSM,height:e.lineHeight*e.fontSize,display:"inline-block",padding:`0 ${e.paddingXXS}px`,marginInline:-e.marginXXS,[`> ${n}`]:{marginInlineStart:e.marginXXS,fontSize:e.fontSizeIcon},"&:hover":{color:e.breadcrumbLinkColorHover,backgroundColor:e.colorBgTextHover,a:{color:e.breadcrumbLinkColorHover}},a:{"&:hover":{backgroundColor:"transparent"}}},[`&${e.componentCls}-rtl`]:{direction:"rtl"}})}},Kt=ne("Breadcrumb",e=>{const t=ae(e,{breadcrumbBaseColor:e.colorTextDescription,breadcrumbFontSize:e.fontSize,breadcrumbIconFontSize:e.fontSize,breadcrumbLinkColor:e.colorTextDescription,breadcrumbLinkColorHover:e.colorText,breadcrumbLastItemColor:e.colorText,breadcrumbSeparatorMargin:e.marginXS,breadcrumbSeparatorColor:e.colorTextDescription});return[Gt(t)]});var Ee=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function qt(e){const{breadcrumbName:t,children:n}=e,r=Ee(e,["breadcrumbName","children"]),a=Object.assign({title:t},r);return n&&(a.menu={items:n.map(c=>{var{breadcrumbName:s}=c,i=Ee(c,["breadcrumbName"]);return Object.assign(Object.assign({},i),{title:s})})}),a}function Yt(e,t){return o.useMemo(()=>e||(t?t.map(qt):null),[e,t])}var Vt=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Ut=(e,t)=>{if(t===void 0)return t;let n=(t||"").replace(/^\//,"");return Object.keys(e).forEach(r=>{n=n.replace(`:${r}`,e[r])}),n},Ce=e=>{const{prefixCls:t,separator:n="/",style:r,className:a,rootClassName:c,routes:s,items:i,children:d,itemRender:p,params:l={}}=e,u=Vt(e,["prefixCls","separator","style","className","rootClassName","routes","items","children","itemRender","params"]),{getPrefixCls:f,direction:g}=o.useContext(Y);let v;const b=f("breadcrumb",t),[C,y]=Kt(b),h=Yt(i,s),S=Wt(b,p);if(h&&h.length>0){const w=[],O=i||s;v=h.map((k,I)=>{const{path:F,key:M,type:B,menu:j,overlay:W,onClick:R,className:D,separator:E}=k,L=Ut(l,F);L!==void 0&&w.push(L);const V=M??I;if(B==="separator")return o.createElement(Se,{key:V},E);const G={},H=I===h.length-1;j?G.menu=j:W&&(G.overlay=W),D&&(G.className=D);let{href:A}=k;return w.length&&L!==void 0&&(A=`#/${w.join("/")}`),o.createElement(Ge,Object.assign({key:V},G,Be(k,{data:!0,aria:!0}),{href:A,separator:H?"":n,onClick:R,prefixCls:b}),S(k,l,O,w,A))})}else if(d){const w=ue(d).length;v=ue(d).map((O,k)=>{if(!O)return O;const I=k===w-1;return Te(O,{separator:I?"":n,key:k})})}const x=z(b,{[`${b}-rtl`]:g==="rtl"},a,c,y);return C(o.createElement("nav",Object.assign({className:x,style:r},u),o.createElement("ol",null,v)))};Ce.Item=Xt;Ce.Separator=Se;const Zt=Ce;var Jt=function(t){var n=t.prefixCls,r=t.className,a=t.style,c=t.children,s=t.containerRef;return o.createElement(o.Fragment,null,o.createElement("div",{className:z("".concat(n,"-content"),r),style:q({},a),"aria-modal":"true",role:"dialog",ref:s},c))},_e=o.createContext(null);function ke(e){return typeof e=="string"&&String(Number(e))===e?(at(!1,"Invalid value type of `width` or `height` which should be number type instead."),Number(e)):e}var ze={width:0,height:0,overflow:"hidden",outline:"none",position:"absolute"};function Qt(e,t){var n,r,a,c,s=e.prefixCls,i=e.open,d=e.placement,p=e.inline,l=e.push,u=e.forceRender,f=e.autoFocus,g=e.keyboard,v=e.rootClassName,b=e.rootStyle,C=e.zIndex,y=e.className,h=e.style,S=e.motion,x=e.width,w=e.height,O=e.children,k=e.contentWrapperStyle,I=e.mask,F=e.maskClosable,M=e.maskMotion,B=e.maskClassName,j=e.maskStyle,W=e.afterOpenChange,R=e.onClose,D=o.useRef(),E=o.useRef(),L=o.useRef();o.useImperativeHandle(t,function(){return D.current});var V=function(T){var J=T.keyCode,Q=T.shiftKey;switch(J){case le.TAB:{if(J===le.TAB){if(!Q&&document.activeElement===L.current){var oe;(oe=E.current)===null||oe===void 0||oe.focus({preventScroll:!0})}else if(Q&&document.activeElement===E.current){var se;(se=L.current)===null||se===void 0||se.focus({preventScroll:!0})}}break}case le.ESC:{R&&g&&(T.stopPropagation(),R(T));break}}};o.useEffect(function(){if(i&&f){var P;(P=D.current)===null||P===void 0||P.focus({preventScroll:!0})}},[i]);var G=o.useState(!1),H=me(G,2),A=H[0],U=H[1],$=o.useContext(_e),_;l===!1?_={distance:0}:l===!0?_={}:_=l||{};var N=(n=(r=(a=_)===null||a===void 0?void 0:a.distance)!==null&&r!==void 0?r:$==null?void 0:$.pushDistance)!==null&&n!==void 0?n:180,K=o.useMemo(function(){return{pushDistance:N,push:function(){U(!0)},pull:function(){U(!1)}}},[N]);o.useEffect(function(){if(i){var P;$==null||(P=$.push)===null||P===void 0||P.call($)}else{var T;$==null||(T=$.pull)===null||T===void 0||T.call($)}},[i]),o.useEffect(function(){return function(){var P;$==null||(P=$.pull)===null||P===void 0||P.call($)}},[]);var Je=I&&o.createElement($e,Oe({key:"mask"},M,{visible:i}),function(P,T){var J=P.className,Q=P.style;return o.createElement("div",{className:z("".concat(s,"-mask"),J,B),style:q(q({},Q),j),onClick:F&&i?R:void 0,ref:T})}),Qe=typeof S=="function"?S(d):S,Z={};if(A&&N)switch(d){case"top":Z.transform="translateY(".concat(N,"px)");break;case"bottom":Z.transform="translateY(".concat(-N,"px)");break;case"left":Z.transform="translateX(".concat(N,"px)");break;default:Z.transform="translateX(".concat(-N,"px)");break}d==="left"||d==="right"?Z.width=ke(x):Z.height=ke(w);var et=o.createElement($e,Oe({key:"panel"},Qe,{visible:i,forceRender:u,onVisibleChanged:function(T){W==null||W(T)},removeOnLeave:!1,leavedClassName:"".concat(s,"-content-wrapper-hidden")}),function(P,T){var J=P.className,Q=P.style;return o.createElement("div",{className:z("".concat(s,"-content-wrapper"),J),style:q(q(q({},Z),Q),k)},o.createElement(Jt,{containerRef:T,prefixCls:s,className:y,style:h},O))}),we=q({},b);return C&&(we.zIndex=C),o.createElement(_e.Provider,{value:K},o.createElement("div",{className:z(s,"".concat(s,"-").concat(d),v,(c={},je(c,"".concat(s,"-open"),i),je(c,"".concat(s,"-inline"),p),c)),style:we,tabIndex:-1,ref:D,onKeyDown:V},Je,o.createElement("div",{tabIndex:0,ref:E,style:ze,"aria-hidden":"true","data-sentinel":"start"}),et,o.createElement("div",{tabIndex:0,ref:L,style:ze,"aria-hidden":"true","data-sentinel":"end"})))}var er=o.forwardRef(Qt),tr=function(t){var n=t.open,r=n===void 0?!1:n,a=t.prefixCls,c=a===void 0?"rc-drawer":a,s=t.placement,i=s===void 0?"right":s,d=t.autoFocus,p=d===void 0?!0:d,l=t.keyboard,u=l===void 0?!0:l,f=t.width,g=f===void 0?378:f,v=t.mask,b=v===void 0?!0:v,C=t.maskClosable,y=C===void 0?!0:C,h=t.getContainer,S=t.forceRender,x=t.afterOpenChange,w=t.destroyOnClose,O=o.useState(!1),k=me(O,2),I=k[0],F=k[1],M=o.useState(!1),B=me(M,2),j=B[0],W=B[1];Ne(function(){W(!0)},[]);var R=j?r:!1,D=o.useRef(),E=o.useRef();Ne(function(){R&&(E.current=document.activeElement)},[R]);var L=function(H){var A;if(F(H),x==null||x(H),!H&&E.current&&!(!((A=D.current)===null||A===void 0)&&A.contains(E.current))){var U;(U=E.current)===null||U===void 0||U.focus({preventScroll:!0})}};if(!S&&!I&&!R&&w)return null;var V=q(q({},t),{},{open:R,prefixCls:c,placement:i,autoFocus:p,keyboard:u,width:g,mask:b,maskClosable:y,inline:h===!1,afterOpenChange:L,ref:D});return o.createElement(ot,{open:R||S||I,autoDestroy:!1,getContainer:h,autoLock:b&&(R||I)},o.createElement(er,V))};const rr=e=>{const{prefixCls:t,title:n,footer:r,extra:a,closable:c=!0,closeIcon:s=o.createElement(st,null),onClose:i,headerStyle:d,drawerStyle:p,bodyStyle:l,footerStyle:u,children:f}=e,g=c&&o.createElement("button",{type:"button",onClick:i,"aria-label":"Close",className:`${t}-close`},s),v=o.useMemo(()=>!n&&!c?null:o.createElement("div",{style:d,className:z(`${t}-header`,{[`${t}-header-close-only`]:c&&!n&&!a})},o.createElement("div",{className:`${t}-header-title`},g,n&&o.createElement("div",{className:`${t}-title`},n)),a&&o.createElement("div",{className:`${t}-extra`},a)),[c,g,a,d,t,n]),b=o.useMemo(()=>{if(!r)return null;const C=`${t}-footer`;return o.createElement("div",{className:C,style:u},r)},[r,u,t]);return o.createElement("div",{className:`${t}-wrapper-body`,style:p},v,o.createElement("div",{className:`${t}-body`,style:l},f),b)},qe=rr,nr=e=>{const{componentCls:t,motionDurationSlow:n}=e,r={"&-enter, &-appear, &-leave":{"&-start":{transition:"none"},"&-active":{transition:`all ${n}`}}};return{[t]:{[`${t}-mask-motion`]:{"&-enter, &-appear, &-leave":{"&-active":{transition:`all ${n}`}},"&-enter, &-appear":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}}},[`${t}-panel-motion`]:{"&-left":[r,{"&-enter, &-appear":{"&-start":{transform:"translateX(-100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(-100%)"}}}],"&-right":[r,{"&-enter, &-appear":{"&-start":{transform:"translateX(100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(100%)"}}}],"&-top":[r,{"&-enter, &-appear":{"&-start":{transform:"translateY(-100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(-100%)"}}}],"&-bottom":[r,{"&-enter, &-appear":{"&-start":{transform:"translateY(100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(100%)"}}}]}}}},ar=nr,or=e=>{const{componentCls:t,zIndexPopup:n,colorBgMask:r,colorBgElevated:a,motionDurationSlow:c,motionDurationMid:s,padding:i,paddingLG:d,fontSizeLG:p,lineHeightLG:l,lineWidth:u,lineType:f,colorSplit:g,marginSM:v,colorIcon:b,colorIconHover:C,colorText:y,fontWeightStrong:h,footerPaddingBlock:S,footerPaddingInline:x}=e,w=`${t}-content-wrapper`;return{[t]:{position:"fixed",inset:0,zIndex:n,pointerEvents:"none","&-pure":{position:"relative",background:a,[`&${t}-left`]:{boxShadow:e.boxShadowDrawerLeft},[`&${t}-right`]:{boxShadow:e.boxShadowDrawerRight},[`&${t}-top`]:{boxShadow:e.boxShadowDrawerUp},[`&${t}-bottom`]:{boxShadow:e.boxShadowDrawerDown}},"&-inline":{position:"absolute"},[`${t}-mask`]:{position:"absolute",inset:0,zIndex:n,background:r,pointerEvents:"auto"},[w]:{position:"absolute",zIndex:n,transition:`all ${c}`,"&-hidden":{display:"none"}},[`&-left > ${w}`]:{top:0,bottom:0,left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowDrawerLeft},[`&-right > ${w}`]:{top:0,right:{_skip_check_:!0,value:0},bottom:0,boxShadow:e.boxShadowDrawerRight},[`&-top > ${w}`]:{top:0,insetInline:0,boxShadow:e.boxShadowDrawerUp},[`&-bottom > ${w}`]:{bottom:0,insetInline:0,boxShadow:e.boxShadowDrawerDown},[`${t}-content`]:{width:"100%",height:"100%",overflow:"auto",background:a,pointerEvents:"auto"},[`${t}-wrapper-body`]:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},[`${t}-header`]:{display:"flex",flex:0,alignItems:"center",padding:`${i}px ${d}px`,fontSize:p,lineHeight:l,borderBottom:`${u}px ${f} ${g}`,"&-title":{display:"flex",flex:1,alignItems:"center",minWidth:0,minHeight:0}},[`${t}-extra`]:{flex:"none"},[`${t}-close`]:{display:"inline-block",marginInlineEnd:v,color:b,fontWeight:h,fontSize:p,fontStyle:"normal",lineHeight:1,textAlign:"center",textTransform:"none",textDecoration:"none",background:"transparent",border:0,outline:0,cursor:"pointer",transition:`color ${s}`,textRendering:"auto","&:focus, &:hover":{color:C,textDecoration:"none"}},[`${t}-title`]:{flex:1,margin:0,color:y,fontWeight:e.fontWeightStrong,fontSize:p,lineHeight:l},[`${t}-body`]:{flex:1,minWidth:0,minHeight:0,padding:d,overflow:"auto"},[`${t}-footer`]:{flexShrink:0,padding:`${S}px ${x}px`,borderTop:`${u}px ${f} ${g}`},"&-rtl":{direction:"rtl"}}}},Ye=ne("Drawer",e=>{const t=ae(e,{});return[or(t),ar(t)]},e=>({zIndexPopup:e.zIndexPopupBase,footerPaddingBlock:e.paddingXS,footerPaddingInline:e.padding}));var Ve=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const sr={distance:180};function Ue(e){const{rootClassName:t,width:n,height:r,size:a="default",mask:c=!0,push:s=sr,open:i,afterOpenChange:d,onClose:p,prefixCls:l,getContainer:u,visible:f,afterVisibleChange:g}=e,v=Ve(e,["rootClassName","width","height","size","mask","push","open","afterOpenChange","onClose","prefixCls","getContainer","visible","afterVisibleChange"]),{getPopupContainer:b,getPrefixCls:C,direction:y}=o.useContext(Y),h=C("drawer",l),[S,x]=Ye(h),w=u===void 0&&b?()=>b(document.body):u,O=z({"no-mask":!c,[`${h}-rtl`]:y==="rtl"},t,x),k=o.useMemo(()=>n??(a==="large"?736:378),[n,a]),I=o.useMemo(()=>r??(a==="large"?736:378),[r,a]),F={motionName:de(h,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500},M=B=>({motionName:de(h,`panel-motion-${B}`),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500});return S(o.createElement(lt,null,o.createElement(it,{status:!0,override:!0},o.createElement(tr,Object.assign({prefixCls:h,onClose:p,maskMotion:F,motion:M},v,{open:i??f,mask:c,push:s,width:k,height:I,rootClassName:O,getContainer:w,afterOpenChange:d??g}),o.createElement(qe,Object.assign({prefixCls:h},v,{onClose:p}))))))}function lr(e){var{prefixCls:t,style:n,className:r,placement:a="right"}=e,c=Ve(e,["prefixCls","style","className","placement"]);const{getPrefixCls:s}=o.useContext(Y),i=s("drawer",t),[d,p]=Ye(i);return d(o.createElement("div",{className:z(i,`${i}-pure`,`${i}-${a}`,p,r),style:n},o.createElement(qe,Object.assign({prefixCls:i},c))))}Ue._InternalPanelDoNotUseOrYouWillBeFired=lr;const ir="_warpper_1gqjh_1",cr="_container_1gqjh_7",dr="_main_1gqjh_13",ur="_content_1gqjh_19",mr="_logo_1gqjh_44",pr="_collapsed_1gqjh_56",X={warpper:ir,container:cr,main:dr,content:ur,"nav-bar":"_nav-bar_1gqjh_25","side-bar":"_side-bar_1gqjh_32",logo:mr,"has-header":"_has-header_1gqjh_52",collapsed:pr};function Ie(e){var i,d;const t=ve(),n=ye(),r=[((d=(i=e.route)==null?void 0:i.meta)==null?void 0:d.activeMenu)||t.pathname],a=s(c(e.authMenu));function c(p){return p.filter(l=>{var u,f;return!((u=l==null?void 0:l.meta)!=null&&u.hidden)&&(!((f=l.meta)!=null&&f.auth)||n.auth.some(g=>{var v,b;return(b=(v=l.meta)==null?void 0:v.auth)==null?void 0:b.includes(g)}))})}function s(p){return p.map(l=>{var f,g,v,b,C,y,h,S,x;const u=l.children&&c(l.children);if(u&&u.length===1&&!((f=l.meta)!=null&&f.alwaysShow)){const w=u[0],O=w.path||l.path,k=((g=w.meta)==null?void 0:g.icon)||((v=l.meta)==null?void 0:v.icon),I=((b=w.meta)==null?void 0:b.name)||((C=l.meta)==null?void 0:C.name);return{key:O||w.id||l.id,label:O?m.jsx(pe,{to:O,children:I}):I,icon:k&&m.jsx(ee,{name:k})}}return{key:l.path||l.id,label:!l.children&&l.path?m.jsx(pe,{to:l.path,children:(y=l.meta)==null?void 0:y.name}):(h=l.meta)==null?void 0:h.name,icon:((S=l.meta)==null?void 0:S.icon)&&m.jsx(ee,{name:(x=l.meta)==null?void 0:x.icon}),children:l.children&&s(u)}})}return m.jsx(ft,{defaultOpenKeys:e.defaultOpenKeys,selectedKeys:r,mode:"inline",inlineCollapsed:e.collapsMenu,items:a,style:{border:"none"},onClick:e.onClick})}const fr="_warp_zi973_1",gr="_logo_zi973_9",hr={warp:fr,logo:gr},br="_user_1g09h_1",vr={user:br};function Ze(){const e=ye(),t=xe(),n=[{key:"dashboard",label:m.jsx(pe,{to:e.homepath||"/",children:"首页"})},{type:"divider"},{key:"logut",label:"退出登录",danger:!0,onClick:()=>{e.logout(),t("/login")}}];return m.jsx("div",{className:vr.user,children:m.jsx(Me,{menu:{items:n},placement:"bottom",arrow:{pointAtCenter:!0},children:m.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[m.jsx(Ht,{size:28,icon:m.jsx(ee,{name:"ant-design:user-outlined"})}),e.userName]})})})}const yr="_logo_aii1q_1",xr={logo:yr};function he(e){const t=te();return m.jsxs("div",{className:z([xr.logo,e.className]),children:[m.jsx("img",{src:St,alt:""}),m.jsx("span",{children:t.appTitle})]})}function Sr(){const e=te();return m.jsxs("div",{className:hr.warp,children:[m.jsx("div",{children:e.hasLogo&&m.jsx(he,{})}),e.hasHeader&&m.jsx(Ze,{})]})}const Cr="_warp_e3m5u_1",wr="_breadcrumb_e3m5u_9",Re={warp:Cr,breadcrumb:wr};function $r(e){const t=te();return m.jsxs("div",{className:Re.warp,children:[m.jsxs("div",{className:Re.breadcrumb,children:[m.jsx(ct,{type:"link",onClick:t.toggleCollapsMenu,style:{fontSize:18,border:"none"},children:t.collapsMenu?m.jsx(ee,{name:"ant-design:menu-fold-outlined"}):m.jsx(ee,{name:"ant-design:menu-unfold-outlined"})}),m.jsx(Zt,{items:e.list})]}),(!t.hasHeader||!t.showHeader)&&m.jsx(Ze,{})]})}const Or="_container_15rgm_1",jr="_tag_15rgm_7",Nr="_active_15rgm_19",ce={container:Or,tag:jr,active:Nr};function Pr(e){const t=te(),n=ve(),r=xe();o.useEffect(()=>{var s,i;(s=e.route.meta)!=null&&s.name&&t.setTagView({path:n.pathname,title:(i=e.route.meta)==null?void 0:i.name})},[n.pathname]);const a=o.useCallback(s=>{if(t.removeTagView(s),t.tagView.length<=1)r("/");else if(n.pathname===s){const i=t.tagView.filter(d=>d.path!==s);r(i[i.length-1].path)}},[t.tagView,n.pathname]),c=o.useCallback(s=>{r(s)},[]);return m.jsx("div",{className:ce.container,children:t.tagView.map(s=>m.jsxs("span",{className:z([ce.tag,n.pathname===s.path?ce.active:""]),onClick:()=>c(s.path),children:[s.title,m.jsx(ee,{name:"ant-design:close-outlined",onClick:i=>{i.stopPropagation(),a(s.path)}})]},s.path))})}function Mr(){var p;const e=te(),t=ye(),n=ve(),r=xe(),a=dt(ie.routes,n)||[],c=(p=a==null?void 0:a.find(l=>l.pathname===n.pathname))==null?void 0:p.route,s=a.map(l=>{var u;return{title:(u=l.route.meta)==null?void 0:u.name}}),[i,d]=Ct();return o.useEffect(()=>{const l=setTimeout(()=>{t.loadAuth()});return()=>{clearTimeout(l)}},[t.loadAuth]),o.useEffect(()=>{if(c.children){r(c.children[0].path||t.homepath||"/");return}d("div",{opacity:[0,1]})},[c]),m.jsxs("div",{className:X.warpper,children:[e.hasHeader&&e.showHeader&&m.jsx(Sr,{}),m.jsxs("div",{className:z([X.container,{[X["has-header"]]:e.hasHeader}]),children:[m.jsx("div",{className:`${X["side-bar"]} ${e.collapsMenu?X.collapsed:""}`,children:e.showHeader?m.jsxs(m.Fragment,{children:[!e.hasHeader&&e.hasLogo&&m.jsx(he,{className:X.logo}),m.jsx(Ie,{collapsMenu:e.collapsMenu,authMenu:ie.routes,defaultOpenKeys:a.slice(0,-1).map(l=>l.pathname),route:c})]}):m.jsxs(Ue,{placement:"left",width:240,headerStyle:{display:"none"},bodyStyle:{padding:"10px 0px"},open:!e.collapsMenu,onClose:e.toggleCollapsMenu,children:[e.hasLogo&&m.jsx(he,{className:X.logo}),m.jsx(Ie,{collapsMenu:!1,authMenu:ie.routes,route:c,defaultOpenKeys:a.slice(0,-1).map(l=>l.pathname),onClick:e.toggleCollapsMenu})]})}),m.jsxs("div",{className:X.main,children:[m.jsxs("div",{className:e.headerFixed?X["nav-bar"]:"",children:[m.jsx($r,{list:s}),e.hasTagView&&m.jsx(Pr,{route:c})]}),m.jsx("div",{ref:i,className:X.content,children:m.jsx(ut,{})})]})]})]})}export{Mr as default};
