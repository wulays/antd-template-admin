import{g as fe,m as pe,a as ge,r as a,C as re,b as O,l as W,z as J,o as he,aM as Re,n as ve,U as d,P as be,k as H,_ as M,i as ze,a9 as je,ay as Me,x as Ae,M as A,a8 as G,J as Be,F as T}from"./index-5a2f0ab2.js";import{S as Le}from"./index-286770ff.js";import{S as We}from"./index-90fd840e.js";import{T as He,M as De,b as Fe,c as Ve}from"./placements-bb185351.js";import{u as Ge,a as ne}from"./useMergedState-769a646a.js";import{R as Xe}from"./PurePanel-3cee14af.js";import"./useFlexGapSupport-2e56b859.js";const Je=t=>{const{componentCls:e,sizePaddingEdgeHorizontal:o,colorSplit:n,lineWidth:r}=t;return{[e]:Object.assign(Object.assign({},ge(t)),{borderBlockStart:`${r}px solid ${n}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:`0 ${t.dividerVerticalGutterMargin}px`,verticalAlign:"middle",borderTop:0,borderInlineStart:`${r}px solid ${n}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${t.dividerHorizontalGutterMargin}px 0`},[`&-horizontal${e}-with-text`]:{display:"flex",alignItems:"center",margin:`${t.dividerHorizontalWithTextGutterMargin}px 0`,color:t.colorTextHeading,fontWeight:500,fontSize:t.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${n}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${r}px solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${e}-with-text-left`]:{"&::before":{width:"5%"},"&::after":{width:"95%"}},[`&-horizontal${e}-with-text-right`]:{"&::before":{width:"95%"},"&::after":{width:"5%"}},[`${e}-inner-text`]:{display:"inline-block",padding:"0 1em"},"&-dashed":{background:"none",borderColor:n,borderStyle:"dashed",borderWidth:`${r}px 0 0`},[`&-horizontal${e}-with-text${e}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${e}-dashed`]:{borderInlineStartWidth:r,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${e}-with-text`]:{color:t.colorText,fontWeight:"normal",fontSize:t.fontSize},[`&-horizontal${e}-with-text-left${e}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${e}-inner-text`]:{paddingInlineStart:o}},[`&-horizontal${e}-with-text-right${e}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${e}-inner-text`]:{paddingInlineEnd:o}}})}},Ue=fe("Divider",t=>{const e=pe(t,{dividerVerticalGutterMargin:t.marginXS,dividerHorizontalWithTextGutterMargin:t.margin,dividerHorizontalGutterMargin:t.marginLG});return[Je(e)]},{sizePaddingEdgeHorizontal:0});var Ye=globalThis&&globalThis.__rest||function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(o[n[r]]=t[n[r]]);return o};const Ze=t=>{const{getPrefixCls:e,direction:o}=a.useContext(re),{prefixCls:n,type:r="horizontal",orientation:s="center",orientationMargin:l,className:i,rootClassName:f,children:u,dashed:p,plain:m}=t,b=Ye(t,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain"]),g=e("divider",n),[c,C]=Ue(g),h=s.length>0?`-${s}`:s,v=!!u,x=s==="left"&&l!=null,w=s==="right"&&l!=null,$=O(g,C,`${g}-${r}`,{[`${g}-with-text`]:v,[`${g}-with-text${h}`]:v,[`${g}-dashed`]:!!p,[`${g}-plain`]:!!m,[`${g}-rtl`]:o==="rtl",[`${g}-no-default-orientation-margin-left`]:x,[`${g}-no-default-orientation-margin-right`]:w},i,f),E=Object.assign(Object.assign({},x&&{marginLeft:l}),w&&{marginRight:l});return c(a.createElement("div",Object.assign({className:$},b,{role:"separator"}),u&&r!=="vertical"&&a.createElement("span",{className:`${g}-inner-text`,style:E},u)))},qe=Ze;function Ke(t){var e=window.innerWidth||document.documentElement.clientWidth,o=window.innerHeight||document.documentElement.clientHeight,n=t.getBoundingClientRect(),r=n.top,s=n.right,l=n.bottom,i=n.left;return r>=0&&i>=0&&s<=e&&l<=o}function Qe(t,e,o,n){var r=a.useState(void 0),s=W(r,2),l=s[0],i=s[1];J(function(){var c=typeof t=="function"?t():t;i(c||null)});var f=a.useState(null),u=W(f,2),p=u[0],m=u[1],b=Ge(function(){if(l){!Ke(l)&&e&&l.scrollIntoView(n);var c=l.getBoundingClientRect(),C=c.left,h=c.top,v=c.width,x=c.height,w={left:C,top:h,width:v,height:x,radius:0};m(function($){return JSON.stringify($)!==JSON.stringify(w)?w:$})}else m(null)});J(function(){return b(),window.addEventListener("resize",b),function(){window.removeEventListener("resize",b)}},[l,e,b]);var g=a.useMemo(function(){if(!p)return p;var c=(o==null?void 0:o.offset)||6,C=(o==null?void 0:o.radius)||2;return{left:p.left-c,top:p.top-c,width:p.width+c*2,height:p.height+c*2,radius:C}},[p,o]);return[g,l]}function et(t){var e=t.prefixCls,o=t.current,n=t.total,r=t.title,s=t.description,l=t.onClose,i=t.onPrev,f=t.onNext,u=t.onFinish,p=t.className;return a.createElement("div",{className:O("".concat(e,"-content"),p)},a.createElement("div",{className:"".concat(e,"-inner")},a.createElement("button",{type:"button",onClick:l,"aria-label":"Close",className:"".concat(e,"-close")},a.createElement("span",{className:"".concat(e,"-close-x")},"×")),a.createElement("div",{className:"".concat(e,"-header")},a.createElement("div",{className:"".concat(e,"-title")},r)),a.createElement("div",{className:"".concat(e,"-description")},s),a.createElement("div",{className:"".concat(e,"-footer")},a.createElement("div",{className:"".concat(e,"-sliders")},n>1?he(Array.from({length:n}).keys()).map(function(m,b){return a.createElement("span",{key:m,className:b===o?"active":""})}):null),a.createElement("div",{className:"".concat(e,"-buttons")},o!==0?a.createElement("button",{className:"".concat(e,"-prev-btn"),onClick:i},"Prev"):null,o===n-1?a.createElement("button",{className:"".concat(e,"-finish-btn"),onClick:u},"Finish"):a.createElement("button",{className:"".concat(e,"-next-btn"),onClick:f},"Next")))))}var tt=function(e){var o=e.current,n=e.renderPanel;return a.createElement(a.Fragment,null,typeof n=="function"?n(e,o):a.createElement(et,e))},X={fill:"transparent",pointerEvents:"auto"},nt=function(e){var o=e.prefixCls,n=e.rootClassName,r=e.pos,s=e.showMask,l=e.style,i=l===void 0?{}:l,f=e.fill,u=f===void 0?"rgba(0,0,0,0.5)":f,p=e.open,m=e.animated,b=e.zIndex,g=Re(),c="".concat(o,"-mask-").concat(g),C=ve(m)==="object"?m==null?void 0:m.placeholder:m;return d.createElement(be,{open:p,autoLock:!0},d.createElement("div",{className:O("".concat(o,"-mask"),n),style:H({position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:b,pointerEvents:"none"},i)},s?d.createElement("svg",{style:{width:"100%",height:"100%"}},d.createElement("defs",null,d.createElement("mask",{id:c},d.createElement("rect",{x:"0",y:"0",width:"100vw",height:"100vh",fill:"white"}),r&&d.createElement("rect",{x:r.left,y:r.top,rx:r.radius,width:r.width,height:r.height,fill:"black",className:C?"".concat(o,"-placeholder-animated"):""}))),d.createElement("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:u,mask:"url(#".concat(c,")")}),r&&d.createElement(d.Fragment,null,d.createElement("rect",M({},X,{x:"0",y:"0",width:"100%",height:r.top})),d.createElement("rect",M({},X,{x:"0",y:"0",width:r.left,height:"100%"})),d.createElement("rect",M({},X,{x:"0",y:r.top+r.height,width:"100%",height:"calc(100vh - ".concat(r.top+r.height,"px)")})),d.createElement("rect",M({},X,{x:r.left+r.width,y:"0",width:"calc(100vw - ".concat(r.left+r.width,"px)"),height:"100%"})))):null))},rt=[0,0],me={left:{points:["cr","cl"],offset:[-8,0]},right:{points:["cl","cr"],offset:[8,0]},top:{points:["bc","tc"],offset:[0,-8]},bottom:{points:["tc","bc"],offset:[0,8]},topLeft:{points:["bl","tl"],offset:[0,-8]},leftTop:{points:["tr","tl"],offset:[-8,0]},topRight:{points:["br","tr"],offset:[0,-8]},rightTop:{points:["tl","tr"],offset:[8,0]},bottomRight:{points:["tr","br"],offset:[0,8]},rightBottom:{points:["bl","br"],offset:[8,0]},bottomLeft:{points:["tl","bl"],offset:[0,8]},leftBottom:{points:["br","bl"],offset:[-8,0]}};function xe(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e={};return Object.keys(me).forEach(function(o){e[o]=H(H({},me[o]),{},{autoArrow:t,targetOffset:rt})}),e}xe();var ot=["prefixCls","steps","defaultCurrent","current","onChange","onClose","onFinish","open","mask","arrow","rootClassName","placement","renderPanel","gap","animated","scrollIntoViewOptions","zIndex"],at={left:"50%",top:"50%",width:1,height:1},it=function(e){var o=e.prefixCls,n=o===void 0?"rc-tour":o,r=e.steps,s=r===void 0?[]:r,l=e.defaultCurrent,i=e.current,f=e.onChange,u=e.onClose,p=e.onFinish,m=e.open,b=e.mask,g=b===void 0?!0:b,c=e.arrow,C=c===void 0?!0:c,h=e.rootClassName,v=e.placement,x=v===void 0?"bottom":v,w=e.renderPanel,$=e.gap,E=e.animated,S=e.scrollIntoViewOptions,B=S===void 0?!0:S,R=e.zIndex,D=R===void 0?1001:R,U=ze(e,ot),z=a.useRef(),Y=ne(0,{value:i,defaultValue:l}),F=W(Y,2),y=F[0],P=F[1],Z=ne(void 0,{value:m,postState:function(N){return y<0||y>=s.length?!1:N??!0}}),oe=W(Z,2),I=oe[0],$e=oe[1],ae=a.useRef(I);J(function(){I&&!ae.current&&P(0),ae.current=I},[I]);var _=s[y]||{},Se=_.target,q=_.placement,Ee=_.style,ie=_.arrow,Pe=_.className,K=_.mask,Q=_.scrollIntoViewOptions,Ne=q??x,L=I&&(K??g),Oe=Q??B,Te=Qe(Se,m,$,Oe),le=W(Te,2),se=le[0],ee=le[1],V=ee?typeof ie>"u"?C:ie:!1,ce=ve(V)==="object"?V.pointAtCenter:!1;J(function(){var k;(k=z.current)===null||k===void 0||k.forceAlign()},[ce,y]);var de=function(N){P(N),f==null||f(N)};if(ee===void 0)return null;var ue=function(){$e(!1),u==null||u(y)},Ie=function(){return a.createElement(tt,M({arrow:V,key:"content",prefixCls:n,total:s.length,renderPanel:w,onPrev:function(){de(y-1)},onNext:function(){de(y+1)},onClose:ue,current:y,onFinish:function(){ue(),p==null||p()}},s[y]))},ke=typeof L=="boolean"?L:!!L,j=typeof L=="boolean"?void 0:L,_e=function(N){return N||ee||document.body};return a.createElement(a.Fragment,null,a.createElement(nt,{zIndex:D,prefixCls:n,pos:se,showMask:ke,style:j==null?void 0:j.style,fill:j==null?void 0:j.color,open:I,animated:E,rootClassName:h}),a.createElement(He,M({builtinPlacements:xe(ce)},U,{ref:z,popupStyle:Ee,popupPlacement:Ne,popupVisible:I,popupClassName:O(h,Pe),prefixCls:n,popup:Ie,forceRender:!1,destroyPopupOnHide:!0,zIndex:D,getTriggerDOMNode:_e,arrow:!!V}),a.createElement(be,{open:I,autoLock:!0},a.createElement("div",{className:O(h,"".concat(n,"-target-placeholder")),style:H(H({},se||at),{},{position:"fixed",pointerEvents:"none"})}))))};function te(t){return t!=null}const lt=t=>{let{stepProps:e,current:o,type:n,indicatorsRender:r}=t;var s,l;const{prefixCls:i,total:f=1,title:u,onClose:p,onPrev:m,onNext:b,onFinish:g,cover:c,description:C,nextButtonProps:h,prevButtonProps:v,type:x,className:w}=e,$=x??n,E=o===f-1,S=()=>{var P;m==null||m(),(P=v==null?void 0:v.onClick)===null||P===void 0||P.call(v)},B=()=>{var P;E?g==null||g():b==null||b(),(P=h==null?void 0:h.onClick)===null||P===void 0||P.call(h)},R=te(u)?d.createElement("div",{className:`${i}-header`},d.createElement("div",{className:`${i}-title`},u)):null,D=te(C)?d.createElement("div",{className:`${i}-description`},C):null,U=te(c)?d.createElement("div",{className:`${i}-cover`},c):null;let z;r?z=r(o,f):z=he(Array.from({length:f}).keys()).map((P,Z)=>d.createElement("span",{key:P,className:O(Z===o&&`${i}-indicator-active`,`${i}-indicator`)}));const Y=$==="primary"?"default":"primary",F={type:"default",ghost:$==="primary"},[y]=je("Tour",Me.Tour);return d.createElement("div",{className:O(w,`${i}-content`)},d.createElement("div",{className:`${i}-inner`},d.createElement(Ae,{className:`${i}-close`,onClick:p}),U,R,D,d.createElement("div",{className:`${i}-footer`},f>1&&d.createElement("div",{className:`${i}-indicators`},z),d.createElement("div",{className:`${i}-buttons`},o!==0?d.createElement(A,Object.assign({},F,v,{onClick:S,size:"small",className:O(`${i}-prev-btn`,v==null?void 0:v.className)}),(s=v==null?void 0:v.children)!==null&&s!==void 0?s:y==null?void 0:y.Previous):null,d.createElement(A,Object.assign({type:Y},h,{onClick:B,size:"small",className:O(`${i}-next-btn`,h==null?void 0:h.className)}),(l=h==null?void 0:h.children)!==null&&l!==void 0?l:E?y==null?void 0:y.Finish:y==null?void 0:y.Next)))))},ye=lt,st=t=>{const{componentCls:e,lineHeight:o,padding:n,paddingXS:r,borderRadius:s,borderRadiusXS:l,colorPrimary:i,colorText:f,colorFill:u,indicatorHeight:p,indicatorWidth:m,boxShadowTertiary:b,tourZIndexPopup:g,fontSize:c,colorBgContainer:C,fontWeightStrong:h,marginXS:v,colorTextLightSolid:x,tourBorderRadius:w,colorWhite:$,colorBgTextHover:E,tourCloseSize:S,motionDurationSlow:B,antCls:R}=t;return[{[e]:Object.assign(Object.assign({},ge(t)),{color:f,position:"absolute",zIndex:g,display:"block",visibility:"visible",fontSize:c,lineHeight:o,width:520,"--antd-arrow-background-color":C,"&-pure":{maxWidth:"100%",position:"relative"},[`&${e}-hidden`]:{display:"none"},[`${e}-content`]:{position:"relative"},[`${e}-inner`]:{textAlign:"start",textDecoration:"none",borderRadius:w,boxShadow:b,position:"relative",backgroundColor:C,border:"none",backgroundClip:"padding-box",[`${e}-close`]:{position:"absolute",top:n,insetInlineEnd:n,color:t.colorIcon,outline:"none",width:S,height:S,borderRadius:t.borderRadiusSM,transition:`background-color ${t.motionDurationMid}, color ${t.motionDurationMid}`,display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:t.colorIconHover,backgroundColor:t.wireframe?"transparent":t.colorFillContent}},[`${e}-cover`]:{textAlign:"center",padding:`${n+S+r}px ${n}px 0`,img:{width:"100%"}},[`${e}-header`]:{padding:`${n}px ${n}px ${r}px`,[`${e}-title`]:{lineHeight:o,fontSize:c,fontWeight:h}},[`${e}-description`]:{padding:`0 ${n}px`,lineHeight:o,wordWrap:"break-word"},[`${e}-footer`]:{padding:`${r}px ${n}px ${n}px`,textAlign:"end",borderRadius:`0 0 ${l}px ${l}px`,display:"flex",[`${e}-indicators`]:{display:"inline-block",[`${e}-indicator`]:{width:m,height:p,display:"inline-block",borderRadius:"50%",background:u,"&:not(:last-child)":{marginInlineEnd:p},"&-active":{background:i}}},[`${e}-buttons`]:{marginInlineStart:"auto",[`${R}-btn`]:{marginInlineStart:v}}}},[`${e}-primary, &${e}-primary`]:{"--antd-arrow-background-color":i,[`${e}-inner`]:{color:x,textAlign:"start",textDecoration:"none",backgroundColor:i,borderRadius:s,boxShadow:b,[`${e}-close`]:{color:x},[`${e}-indicators`]:{[`${e}-indicator`]:{background:new G(x).setAlpha(.15).toRgbString(),"&-active":{background:x}}},[`${e}-prev-btn`]:{color:x,borderColor:new G(x).setAlpha(.15).toRgbString(),backgroundColor:i,"&:hover":{backgroundColor:new G(x).setAlpha(.15).toRgbString(),borderColor:"transparent"}},[`${e}-next-btn`]:{color:i,borderColor:"transparent",background:$,"&:hover":{background:new G(E).onBackground($).toRgbString()}}}}}),[`${e}-mask`]:{[`${e}-placeholder-animated`]:{transition:`all ${B}`}},[["&-placement-left","&-placement-leftTop","&-placement-leftBottom","&-placement-right","&-placement-rightTop","&-placement-rightBottom"].join(",")]:{[`${e}-inner`]:{borderRadius:Math.min(w,De)}}},Fe(t,{colorBg:"var(--antd-arrow-background-color)",contentRadius:w,limitVerticalRadius:!0})]},Ce=fe("Tour",t=>{const{borderRadiusLG:e,fontSize:o,lineHeight:n}=t,r=pe(t,{tourZIndexPopup:t.zIndexPopupBase+70,indicatorWidth:6,indicatorHeight:6,tourBorderRadius:e,tourCloseSize:o*n});return[st(r)]});var ct=globalThis&&globalThis.__rest||function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(o[n[r]]=t[n[r]]);return o};const dt=t=>{const{prefixCls:e,current:o=0,total:n=6,className:r,style:s,type:l}=t,i=ct(t,["prefixCls","current","total","className","style","type"]),{getPrefixCls:f}=a.useContext(re),u=f("tour",e),[p,m]=Ce(u);return p(a.createElement(Xe,{prefixCls:u,hashId:m,className:O(r,`${u}-pure`,l&&`${u}-${l}`),style:s},a.createElement(ye,{stepProps:Object.assign(Object.assign({},i),{prefixCls:u,total:n}),current:o,type:l})))},ut=dt,mt=t=>{let{defaultType:e,steps:o=[],current:n,defaultCurrent:r}=t;var s;const[l,i]=ne(r,{value:n});a.useLayoutEffect(()=>{n!==void 0&&i(n)},[n]);const f=typeof l=="number"?(s=o[l])===null||s===void 0?void 0:s.type:e;return{currentMergedType:f??e,updateInnerCurrent:i}},ft=mt;var pt=globalThis&&globalThis.__rest||function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(o[n[r]]=t[n[r]]);return o};const we=t=>{const{prefixCls:e,current:o,defaultCurrent:n,type:r,rootClassName:s,indicatorsRender:l,steps:i}=t,f=pt(t,["prefixCls","current","defaultCurrent","type","rootClassName","indicatorsRender","steps"]),{getPrefixCls:u,direction:p}=a.useContext(re),m=u("tour",e),[b,g]=Ce(m),{token:c}=Be.useToken(),{currentMergedType:C,updateInnerCurrent:h}=ft({defaultType:r,steps:i,current:o,defaultCurrent:n}),v=Ve({arrowPointAtCenter:!0,autoAdjustOverflow:!0,offset:c.marginXXS,arrowWidth:c.sizePopupArrow,borderRadius:c.borderRadius}),x=O({[`${m}-primary`]:C==="primary",[`${m}-rtl`]:p==="rtl"},g,s),w=(E,S)=>d.createElement(ye,{type:r,stepProps:E,current:S,indicatorsRender:l}),$=E=>{var S;h(E),(S=t.onChange)===null||S===void 0||S.call(t,E)};return b(d.createElement(it,Object.assign({},f,{rootClassName:x,prefixCls:m,current:o,defaultCurrent:n,animated:!0,renderPanel:w,builtinPlacements:v,onChange:$,steps:i})))};we._InternalPanelDoNotUseOrYouWillBeFired=ut;const gt=we,ht="_container_yxnpy_1",vt={container:ht};function Et(){const t=a.useRef(null),e=a.useRef(null),o=a.useRef(null),[n,r]=a.useState(!1),s=[{title:"上传文件",description:"把你的文件放在这里.",cover:T.jsx("img",{alt:"tour.png",src:"https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"}),target:()=>t.current},{title:"保存",description:"保存更改.",target:()=>e.current},{title:"其他操作",description:"点击查看其他操作.",target:()=>o.current}];return T.jsxs("div",{className:vt.container,children:[T.jsx(A,{type:"primary",onClick:()=>r(!0),children:"开始指引"}),T.jsx(qe,{}),T.jsxs(We,{children:[T.jsx(A,{ref:t,children:" 上传"}),T.jsx(A,{ref:e,type:"primary",children:"保存"}),T.jsx(A,{ref:o,icon:T.jsx(Le,{name:"ant-design:ellipsis-outlined"})})]}),T.jsx(gt,{open:n,onClose:()=>r(!1),steps:s})]})}export{Et as default};