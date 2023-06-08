import{Q as be,R as Ce,S as Se,T as $e,r as d,g as ie,m as ae,a as Ee,C as O,b as S,j as ke,aC as xe,n as Oe,aD as we,aE as je,a4 as Ie,aF as _e,am as Ne,W as X,a3 as Te,k as Be,J as Pe,v as E,B as Re}from"./index-ea61881a.js";import{u as Le}from"./use-animate-ad02324a.js";import{S as He}from"./index-609072ce.js";import{g as Me}from"./getDataOrAriaProps-cf91de79.js";import"./SVGVisualElement-f1fbeac3.js";let ze=function(e){be(o,e);var t=Ce(o);function o(){var n;return Se(this,o),n=t.apply(this,arguments),n.state={error:void 0,info:{componentStack:""}},n}return $e(o,[{key:"componentDidCatch",value:function(r,a){this.setState({error:r,info:a})}},{key:"render",value:function(){const{message:r,description:a,children:c}=this.props,{error:l,info:s}=this.state,u=s&&s.componentStack?s.componentStack:null,p=typeof r>"u"?(l||"").toString():r,f=typeof a>"u"?u:a;return l?d.createElement(le,{type:"error",message:p,description:d.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},f)}):c}}]),o}(d.Component);const De=ze,R=(e,t,o,n,r)=>({backgroundColor:e,border:`${n.lineWidth}px ${n.lineType} ${t}`,[`${r}-icon`]:{color:o}}),Ae=e=>{const{componentCls:t,motionDurationSlow:o,marginXS:n,marginSM:r,fontSize:a,fontSizeLG:c,lineHeight:l,borderRadiusLG:s,motionEaseInOutCirc:u,alertIconSizeLG:p,colorText:f,paddingContentVerticalSM:g,alertPaddingHorizontal:m,paddingMD:h,paddingContentHorizontalLG:b}=e;return{[t]:Object.assign(Object.assign({},Ee(e)),{position:"relative",display:"flex",alignItems:"center",padding:`${g}px ${m}px`,wordWrap:"break-word",borderRadius:s,[`&${t}-rtl`]:{direction:"rtl"},[`${t}-content`]:{flex:1,minWidth:0},[`${t}-icon`]:{marginInlineEnd:n,lineHeight:0},["&-description"]:{display:"none",fontSize:a,lineHeight:l},"&-message":{color:f},[`&${t}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${o} ${u}, opacity ${o} ${u},
        padding-top ${o} ${u}, padding-bottom ${o} ${u},
        margin-bottom ${o} ${u}`},[`&${t}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${t}-with-description`]:{alignItems:"flex-start",paddingInline:b,paddingBlock:h,[`${t}-icon`]:{marginInlineEnd:r,fontSize:p,lineHeight:0},[`${t}-message`]:{display:"block",marginBottom:n,color:f,fontSize:c},[`${t}-description`]:{display:"block"}},[`${t}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},Fe=e=>{const{componentCls:t,colorSuccess:o,colorSuccessBorder:n,colorSuccessBg:r,colorWarning:a,colorWarningBorder:c,colorWarningBg:l,colorError:s,colorErrorBorder:u,colorErrorBg:p,colorInfo:f,colorInfoBorder:g,colorInfoBg:m}=e;return{[t]:{"&-success":R(r,n,o,e,t),"&-info":R(m,g,f,e,t),"&-warning":R(l,c,a,e,t),"&-error":Object.assign(Object.assign({},R(p,u,s,e,t)),{[`${t}-description > pre`]:{margin:0,padding:0}})}}},We=e=>{const{componentCls:t,iconCls:o,motionDurationMid:n,marginXS:r,fontSizeIcon:a,colorIcon:c,colorIconHover:l}=e;return{[t]:{["&-action"]:{marginInlineStart:r},[`${t}-close-icon`]:{marginInlineStart:r,padding:0,overflow:"hidden",fontSize:a,lineHeight:`${a}px`,backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${o}-close`]:{color:c,transition:`color ${n}`,"&:hover":{color:l}}},"&-close-text":{color:c,transition:`color ${n}`,"&:hover":{color:l}}}}},Ve=e=>[Ae(e),Fe(e),We(e)],Ge=ie("Alert",e=>{const{fontSizeHeading3:t}=e,o=ae(e,{alertIconSizeLG:t,alertPaddingHorizontal:12});return[Ve(o)]});var qe=globalThis&&globalThis.__rest||function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};const Ke={success:we,info:je,error:Ie,warning:_e},Ue=e=>{const{icon:t,prefixCls:o,type:n}=e,r=Ke[n]||null;return t?xe(t,d.createElement("span",{className:`${o}-icon`},t),()=>({className:S(`${o}-icon`,{[t.props.className]:t.props.className})})):d.createElement(r,{className:`${o}-icon`})},Xe=e=>{const{isClosable:t,closeText:o,prefixCls:n,closeIcon:r,handleClose:a}=e;return t?d.createElement("button",{type:"button",onClick:a,className:`${n}-close-icon`,tabIndex:0},o?d.createElement("span",{className:`${n}-close-text`},o):r):null},se=e=>{var{description:t,prefixCls:o,message:n,banner:r,className:a,rootClassName:c,style:l,onMouseEnter:s,onMouseLeave:u,onClick:p,afterClose:f,showIcon:g,closable:m,closeText:h,closeIcon:b=d.createElement(Oe,null),action:C}=e,v=qe(e,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]);const[$,k]=d.useState(!1),T=d.useRef(),{getPrefixCls:B,direction:z}=d.useContext(O),y=B("alert",o),[P,_]=Ge(y),fe=x=>{var N;k(!0),(N=v.onClose)===null||N===void 0||N.call(v,x)},ge=()=>{const{type:x}=v;return x!==void 0?x:r?"warning":"info"},he=h?!0:m,Y=ge(),J=r&&g===void 0?!0:g,me=S(y,`${y}-${Y}`,{[`${y}-with-description`]:!!t,[`${y}-no-icon`]:!J,[`${y}-banner`]:!!r,[`${y}-rtl`]:z==="rtl"},a,c,_),ve=Me(v);return P(d.createElement(ke,{visible:!$,motionName:`${y}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:x=>({maxHeight:x.offsetHeight}),onLeaveEnd:f},x=>{let{className:N,style:ye}=x;return d.createElement("div",Object.assign({ref:T,"data-show":!$,className:S(me,N),style:Object.assign(Object.assign({},l),ye),onMouseEnter:s,onMouseLeave:u,onClick:p,role:"alert"},ve),J?d.createElement(Ue,{description:t,icon:v.icon,prefixCls:y,type:Y}):null,d.createElement("div",{className:`${y}-content`},n?d.createElement("div",{className:`${y}-message`},n):null,t?d.createElement("div",{className:`${y}-description`},t):null),C?d.createElement("div",{className:`${y}-action`},C):null,d.createElement(Xe,{isClosable:!!he,closeText:h,prefixCls:y,closeIcon:b,handleClose:fe}))}))};se.ErrorBoundary=De;const le=se,Ye=e=>{const{prefixCls:t,className:o,style:n,size:r,shape:a}=e,c=S({[`${t}-lg`]:r==="large",[`${t}-sm`]:r==="small"}),l=S({[`${t}-circle`]:a==="circle",[`${t}-square`]:a==="square",[`${t}-round`]:a==="round"}),s=d.useMemo(()=>typeof r=="number"?{width:r,height:r,lineHeight:`${r}px`}:{},[r]);return d.createElement("span",{className:S(t,c,l,o),style:Object.assign(Object.assign({},s),n)})},H=Ye,Je=new Ne("ant-skeleton-loading",{"0%":{backgroundPosition:"100% 50%"},"100%":{backgroundPosition:"0 50%"}}),M=e=>({height:e,lineHeight:`${e}px`}),w=e=>Object.assign({width:e},M(e)),Qe=e=>({background:e.skeletonLoadingBackground,backgroundSize:"400% 100%",animationName:Je,animationDuration:e.skeletonLoadingMotionDuration,animationTimingFunction:"ease",animationIterationCount:"infinite"}),D=e=>Object.assign({width:e*5,minWidth:e*5},M(e)),Ze=e=>{const{skeletonAvatarCls:t,color:o,controlHeight:n,controlHeightLG:r,controlHeightSM:a}=e;return{[`${t}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:o},w(n)),[`${t}${t}-circle`]:{borderRadius:"50%"},[`${t}${t}-lg`]:Object.assign({},w(r)),[`${t}${t}-sm`]:Object.assign({},w(a))}},en=e=>{const{controlHeight:t,borderRadiusSM:o,skeletonInputCls:n,controlHeightLG:r,controlHeightSM:a,color:c}=e;return{[`${n}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:c,borderRadius:o},D(t)),[`${n}-lg`]:Object.assign({},D(r)),[`${n}-sm`]:Object.assign({},D(a))}},Q=e=>Object.assign({width:e},M(e)),nn=e=>{const{skeletonImageCls:t,imageSizeBase:o,color:n,borderRadiusSM:r}=e;return{[`${t}`]:Object.assign(Object.assign({display:"flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",background:n,borderRadius:r},Q(o*2)),{[`${t}-path`]:{fill:"#bfbfbf"},[`${t}-svg`]:Object.assign(Object.assign({},Q(o)),{maxWidth:o*4,maxHeight:o*4}),[`${t}-svg${t}-svg-circle`]:{borderRadius:"50%"}}),[`${t}${t}-circle`]:{borderRadius:"50%"}}},A=(e,t,o)=>{const{skeletonButtonCls:n}=e;return{[`${o}${n}-circle`]:{width:t,minWidth:t,borderRadius:"50%"},[`${o}${n}-round`]:{borderRadius:t}}},F=e=>Object.assign({width:e*2,minWidth:e*2},M(e)),tn=e=>{const{borderRadiusSM:t,skeletonButtonCls:o,controlHeight:n,controlHeightLG:r,controlHeightSM:a,color:c}=e;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({[`${o}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:c,borderRadius:t,width:n*2,minWidth:n*2},F(n))},A(e,n,o)),{[`${o}-lg`]:Object.assign({},F(r))}),A(e,r,`${o}-lg`)),{[`${o}-sm`]:Object.assign({},F(a))}),A(e,a,`${o}-sm`))},on=e=>{const{componentCls:t,skeletonAvatarCls:o,skeletonTitleCls:n,skeletonParagraphCls:r,skeletonButtonCls:a,skeletonInputCls:c,skeletonImageCls:l,controlHeight:s,controlHeightLG:u,controlHeightSM:p,color:f,padding:g,marginSM:m,borderRadius:h,skeletonTitleHeight:b,skeletonBlockRadius:C,skeletonParagraphLineHeight:v,controlHeightXS:$,skeletonParagraphMarginTop:k}=e;return{[`${t}`]:{display:"table",width:"100%",[`${t}-header`]:{display:"table-cell",paddingInlineEnd:g,verticalAlign:"top",[`${o}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:f},w(s)),[`${o}-circle`]:{borderRadius:"50%"},[`${o}-lg`]:Object.assign({},w(u)),[`${o}-sm`]:Object.assign({},w(p))},[`${t}-content`]:{display:"table-cell",width:"100%",verticalAlign:"top",[`${n}`]:{width:"100%",height:b,background:f,borderRadius:C,[`+ ${r}`]:{marginBlockStart:p}},[`${r}`]:{padding:0,"> li":{width:"100%",height:v,listStyle:"none",background:f,borderRadius:C,"+ li":{marginBlockStart:$}}},[`${r}> li:last-child:not(:first-child):not(:nth-child(2))`]:{width:"61%"}},[`&-round ${t}-content`]:{[`${n}, ${r} > li`]:{borderRadius:h}}},[`${t}-with-avatar ${t}-content`]:{[`${n}`]:{marginBlockStart:m,[`+ ${r}`]:{marginBlockStart:k}}},[`${t}${t}-element`]:Object.assign(Object.assign(Object.assign(Object.assign({display:"inline-block",width:"auto"},tn(e)),Ze(e)),en(e)),nn(e)),[`${t}${t}-block`]:{width:"100%",[`${a}`]:{width:"100%"},[`${c}`]:{width:"100%"}},[`${t}${t}-active`]:{[`
        ${n},
        ${r} > li,
        ${o},
        ${a},
        ${c},
        ${l}
      `]:Object.assign({},Qe(e))}}},j=ie("Skeleton",e=>{const{componentCls:t}=e,o=ae(e,{skeletonAvatarCls:`${t}-avatar`,skeletonTitleCls:`${t}-title`,skeletonParagraphCls:`${t}-paragraph`,skeletonButtonCls:`${t}-button`,skeletonInputCls:`${t}-input`,skeletonImageCls:`${t}-image`,imageSizeBase:e.controlHeight*1.5,skeletonTitleHeight:e.controlHeight/2,skeletonBlockRadius:e.borderRadiusSM,skeletonParagraphLineHeight:e.controlHeight/2,skeletonParagraphMarginTop:e.marginLG+e.marginXXS,borderRadius:100,skeletonLoadingBackground:`linear-gradient(90deg, ${e.color} 25%, ${e.colorGradientEnd} 37%, ${e.color} 63%)`,skeletonLoadingMotionDuration:"1.4s"});return[on(o)]},e=>{const{colorFillContent:t,colorFill:o}=e;return{color:t,colorGradientEnd:o}}),rn=e=>{const{prefixCls:t,className:o,rootClassName:n,active:r,shape:a="circle",size:c="default"}=e,{getPrefixCls:l}=d.useContext(O),s=l("skeleton",t),[u,p]=j(s),f=X(e,["prefixCls","className"]),g=S(s,`${s}-element`,{[`${s}-active`]:r},o,n,p);return u(d.createElement("div",{className:g},d.createElement(H,Object.assign({prefixCls:`${s}-avatar`,shape:a,size:c},f))))},an=rn,sn=e=>{const{prefixCls:t,className:o,rootClassName:n,active:r,block:a=!1,size:c="default"}=e,{getPrefixCls:l}=d.useContext(O),s=l("skeleton",t),[u,p]=j(s),f=X(e,["prefixCls"]),g=S(s,`${s}-element`,{[`${s}-active`]:r,[`${s}-block`]:a},o,n,p);return u(d.createElement("div",{className:g},d.createElement(H,Object.assign({prefixCls:`${s}-button`,size:c},f))))},ln=sn;var cn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"dot-chart",theme:"outlined"};const un=cn;var dn=function(t,o){return d.createElement(Te,Be({},t,{ref:o,icon:un}))};const pn=d.forwardRef(dn),fn=e=>{const{prefixCls:t,className:o,rootClassName:n,style:r,active:a,children:c}=e,{getPrefixCls:l}=d.useContext(O),s=l("skeleton",t),[u,p]=j(s),f=S(s,`${s}-element`,{[`${s}-active`]:a},p,o,n),g=c??d.createElement(pn,null);return u(d.createElement("div",{className:f},d.createElement("div",{className:S(`${s}-image`,o),style:r},g)))},gn=fn,hn="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",mn=e=>{const{prefixCls:t,className:o,rootClassName:n,style:r,active:a}=e,{getPrefixCls:c}=d.useContext(O),l=c("skeleton",t),[s,u]=j(l),p=S(l,`${l}-element`,{[`${l}-active`]:a},o,n,u);return s(d.createElement("div",{className:p},d.createElement("div",{className:S(`${l}-image`,o),style:r},d.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:`${l}-image-svg`},d.createElement("path",{d:hn,className:`${l}-image-path`})))))},vn=mn,yn=e=>{const{prefixCls:t,className:o,rootClassName:n,active:r,block:a,size:c="default"}=e,{getPrefixCls:l}=d.useContext(O),s=l("skeleton",t),[u,p]=j(s),f=X(e,["prefixCls"]),g=S(s,`${s}-element`,{[`${s}-active`]:r,[`${s}-block`]:a},o,n,p);return u(d.createElement("div",{className:g},d.createElement(H,Object.assign({prefixCls:`${s}-input`,size:c},f))))},bn=yn,Cn=e=>{const t=l=>{const{width:s,rows:u=2}=e;if(Array.isArray(s))return s[l];if(u-1===l)return s},{prefixCls:o,className:n,style:r,rows:a}=e,c=Pe(Array(a)).map((l,s)=>d.createElement("li",{key:s,style:{width:t(s)}}));return d.createElement("ul",{className:S(o,n),style:r},c)},Sn=Cn,$n=e=>{let{prefixCls:t,className:o,width:n,style:r}=e;return d.createElement("h3",{className:S(t,o),style:Object.assign({width:n},r)})},En=$n;function W(e){return e&&typeof e=="object"?e:{}}function kn(e,t){return e&&!t?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function xn(e,t){return!e&&t?{width:"38%"}:e&&t?{width:"50%"}:{}}function On(e,t){const o={};return(!e||!t)&&(o.width="61%"),!e&&t?o.rows=3:o.rows=2,o}const I=e=>{const{prefixCls:t,loading:o,className:n,rootClassName:r,style:a,children:c,avatar:l=!1,title:s=!0,paragraph:u=!0,active:p,round:f}=e,{getPrefixCls:g,direction:m}=d.useContext(O),h=g("skeleton",t),[b,C]=j(h);if(o||!("loading"in e)){const v=!!l,$=!!s,k=!!u;let T;if(v){const y=Object.assign(Object.assign({prefixCls:`${h}-avatar`},kn($,k)),W(l));T=d.createElement("div",{className:`${h}-header`},d.createElement(H,Object.assign({},y)))}let B;if($||k){let y;if($){const _=Object.assign(Object.assign({prefixCls:`${h}-title`},xn(v,k)),W(s));y=d.createElement(En,Object.assign({},_))}let P;if(k){const _=Object.assign(Object.assign({prefixCls:`${h}-paragraph`},On(v,$)),W(u));P=d.createElement(Sn,Object.assign({},_))}B=d.createElement("div",{className:`${h}-content`},y,P)}const z=S(h,{[`${h}-with-avatar`]:v,[`${h}-active`]:p,[`${h}-rtl`]:m==="rtl",[`${h}-round`]:f},n,r,C);return b(d.createElement("div",{className:z,style:a},T,B))}return typeof c<"u"?c:null};I.Button=ln;I.Avatar=an;I.Input=bn;I.Image=vn;I.Node=gn;const V=I;var i={},wn={get exports(){return i},set exports(e){i=e}},jn="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",In=jn,_n=In;function ce(){}function ue(){}ue.resetWarningCache=ce;var Nn=function(){function e(n,r,a,c,l,s){if(s!==_n){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:ue,resetWarningCache:ce};return o.PropTypes=o,o};wn.exports=Nn();var K=globalThis&&globalThis.__assign||function(){return K=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++){t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},K.apply(this,arguments)},de={onActivate:i.func,onAddUndo:i.func,onBeforeAddUndo:i.func,onBeforeExecCommand:i.func,onBeforeGetContent:i.func,onBeforeRenderUI:i.func,onBeforeSetContent:i.func,onBeforePaste:i.func,onBlur:i.func,onChange:i.func,onClearUndos:i.func,onClick:i.func,onContextMenu:i.func,onCommentChange:i.func,onCopy:i.func,onCut:i.func,onDblclick:i.func,onDeactivate:i.func,onDirty:i.func,onDrag:i.func,onDragDrop:i.func,onDragEnd:i.func,onDragGesture:i.func,onDragOver:i.func,onDrop:i.func,onExecCommand:i.func,onFocus:i.func,onFocusIn:i.func,onFocusOut:i.func,onGetContent:i.func,onHide:i.func,onInit:i.func,onKeyDown:i.func,onKeyPress:i.func,onKeyUp:i.func,onLoadContent:i.func,onMouseDown:i.func,onMouseEnter:i.func,onMouseLeave:i.func,onMouseMove:i.func,onMouseOut:i.func,onMouseOver:i.func,onMouseUp:i.func,onNodeChange:i.func,onObjectResizeStart:i.func,onObjectResized:i.func,onObjectSelected:i.func,onPaste:i.func,onPostProcess:i.func,onPostRender:i.func,onPreProcess:i.func,onProgressState:i.func,onRedo:i.func,onRemove:i.func,onReset:i.func,onSaveContent:i.func,onSelectionChange:i.func,onSetAttrib:i.func,onSetContent:i.func,onShow:i.func,onSubmit:i.func,onUndo:i.func,onVisualAid:i.func,onSkinLoadError:i.func,onThemeLoadError:i.func,onModelLoadError:i.func,onPluginLoadError:i.func,onIconsLoadError:i.func,onLanguageLoadError:i.func,onScriptsLoad:i.func,onScriptsLoadError:i.func},Tn=K({apiKey:i.string,id:i.string,inline:i.bool,init:i.object,initialValue:i.string,onEditorChange:i.func,value:i.string,tagName:i.string,cloudChannel:i.string,plugins:i.oneOfType([i.string,i.array]),toolbar:i.oneOfType([i.string,i.array]),disabled:i.bool,textareaName:i.string,tinymceScriptSrc:i.oneOfType([i.string,i.arrayOf(i.string),i.arrayOf(i.shape({src:i.string,async:i.bool,defer:i.bool}))]),rollback:i.oneOfType([i.number,i.oneOf([!1])]),scriptLoading:i.shape({async:i.bool,defer:i.bool,delay:i.number})},de),G=function(e){return typeof e=="function"},Z=function(e){return e in de},ee=function(e){return e.substr(2)},Bn=function(e,t,o,n,r,a,c){var l=Object.keys(r).filter(Z),s=Object.keys(a).filter(Z),u=l.filter(function(f){return a[f]===void 0}),p=s.filter(function(f){return r[f]===void 0});u.forEach(function(f){var g=ee(f),m=c[g];o(g,m),delete c[g]}),p.forEach(function(f){var g=n(e,f),m=ee(f);c[m]=g,t(m,g)})},Pn=function(e,t,o,n,r){return Bn(r,e.on.bind(e),e.off.bind(e),function(a,c){return function(l){var s;return(s=a(c))===null||s===void 0?void 0:s(l,e)}},t,o,n)},ne=0,pe=function(e){var t=Date.now(),o=Math.floor(Math.random()*1e9);return ne++,e+"_"+o+ne+String(t)},te=function(e){return e!==null&&(e.tagName.toLowerCase()==="textarea"||e.tagName.toLowerCase()==="input")},oe=function(e){return typeof e>"u"||e===""?[]:Array.isArray(e)?e:e.split(" ")},Rn=function(e,t){return oe(e).concat(oe(t))},Ln=function(){return window.InputEvent&&typeof InputEvent.prototype.getTargetRanges=="function"},Hn=function(e){if(!("isConnected"in Node.prototype)){for(var t=e,o=e.parentNode;o!=null;)t=o,o=t.parentNode;return t===e.ownerDocument}return e.isConnected},re=function(e,t){e!==void 0&&(e.mode!=null&&typeof e.mode=="object"&&typeof e.mode.set=="function"?e.mode.set(t):e.setMode(t))},U=globalThis&&globalThis.__assign||function(){return U=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++){t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},U.apply(this,arguments)},Mn=function(e,t,o){var n,r,a=e.createElement("script");a.referrerPolicy="origin",a.type="application/javascript",a.id=t.id,a.src=t.src,a.async=(n=t.async)!==null&&n!==void 0?n:!1,a.defer=(r=t.defer)!==null&&r!==void 0?r:!1;var c=function(){a.removeEventListener("load",c),a.removeEventListener("error",l),o(t.src)},l=function(s){a.removeEventListener("load",c),a.removeEventListener("error",l),o(t.src,s)};a.addEventListener("load",c),a.addEventListener("error",l),e.head&&e.head.appendChild(a)},zn=function(e){var t={},o=function(c,l){var s=t[c];s.done=!0,s.error=l;for(var u=0,p=s.handlers;u<p.length;u++){var f=p[u];f(c,l)}s.handlers=[]},n=function(c,l,s){var u=function($){return s!==void 0?s($):console.error($)};if(c.length===0){u(new Error("At least one script must be provided"));return}for(var p=0,f=!1,g=function($,k){f||(k?(f=!0,u(k)):++p===c.length&&l())},m=0,h=c;m<h.length;m++){var b=h[m],C=t[b.src];if(C)C.done?g(b.src,C.error):C.handlers.push(g);else{var v=pe("tiny-");t[b.src]={id:v,src:b.src,done:!1,error:null,handlers:[g]},Mn(e,U({id:v},b),o)}}},r=function(){for(var c,l=0,s=Object.values(t);l<s.length;l++){var u=s[l],p=e.getElementById(u.id);p!=null&&p.tagName==="SCRIPT"&&((c=p.parentNode)===null||c===void 0||c.removeChild(p))}t={}},a=function(){return e};return{loadScripts:n,deleteScripts:r,getDocument:a}},Dn=function(){var e=[],t=function(r){var a=e.find(function(c){return c.getDocument()===r});return a===void 0&&(a=zn(r),e.push(a)),a},o=function(r,a,c,l,s){var u=function(){return t(r).loadScripts(a,l,s)};c>0?setTimeout(u,c):u()},n=function(){for(var r=e.pop();r!=null;r=e.pop())r.deleteScripts()};return{loadList:o,reinitialize:n}},An=Dn(),q=function(e){var t=e;return t&&t.tinymce?t.tinymce:null},Fn=globalThis&&globalThis.__extends||function(){var e=function(t,o){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(n[a]=r[a])},e(t,o)};return function(t,o){if(typeof o!="function"&&o!==null)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");e(t,o);function n(){this.constructor=t}t.prototype=o===null?Object.create(o):(n.prototype=o.prototype,new n)}}(),L=globalThis&&globalThis.__assign||function(){return L=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++){t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},L.apply(this,arguments)},Wn=function(e){Fn(t,e);function t(o){var n=this,r,a,c;return n=e.call(this,o)||this,n.rollbackTimer=void 0,n.valueCursor=void 0,n.rollbackChange=function(){var l=n.editor,s=n.props.value;l&&s&&s!==n.currentContent&&l.undoManager.ignore(function(){if(l.setContent(s),n.valueCursor&&(!n.inline||l.hasFocus()))try{l.selection.moveToBookmark(n.valueCursor)}catch{}}),n.rollbackTimer=void 0},n.handleBeforeInput=function(l){if(n.props.value!==void 0&&n.props.value===n.currentContent&&n.editor&&(!n.inline||n.editor.hasFocus()))try{n.valueCursor=n.editor.selection.getBookmark(3)}catch{}},n.handleBeforeInputSpecial=function(l){(l.key==="Enter"||l.key==="Backspace"||l.key==="Delete")&&n.handleBeforeInput(l)},n.handleEditorChange=function(l){var s=n.editor;if(s&&s.initialized){var u=s.getContent();n.props.value!==void 0&&n.props.value!==u&&n.props.rollback!==!1&&(n.rollbackTimer||(n.rollbackTimer=window.setTimeout(n.rollbackChange,typeof n.props.rollback=="number"?n.props.rollback:200))),u!==n.currentContent&&(n.currentContent=u,G(n.props.onEditorChange)&&n.props.onEditorChange(u,s))}},n.handleEditorChangeSpecial=function(l){(l.key==="Backspace"||l.key==="Delete")&&n.handleEditorChange(l)},n.initialise=function(l){var s,u,p;l===void 0&&(l=0);var f=n.elementRef.current;if(f){if(!Hn(f)){if(l===0)setTimeout(function(){return n.initialise(1)},1);else if(l<100)setTimeout(function(){return n.initialise(l+1)},100);else throw new Error("tinymce can only be initialised when in a document");return}var g=q(n.view);if(!g)throw new Error("tinymce should have been loaded into global scope");var m=L(L({},n.props.init),{selector:void 0,target:f,readonly:n.props.disabled,inline:n.inline,plugins:Rn((s=n.props.init)===null||s===void 0?void 0:s.plugins,n.props.plugins),toolbar:(u=n.props.toolbar)!==null&&u!==void 0?u:(p=n.props.init)===null||p===void 0?void 0:p.toolbar,setup:function(h){n.editor=h,n.bindHandlers({}),n.inline&&!te(f)&&h.once("PostRender",function(b){h.setContent(n.getInitialValue(),{no_events:!0})}),n.props.init&&G(n.props.init.setup)&&n.props.init.setup(h)},init_instance_callback:function(h){var b,C,v=n.getInitialValue();n.currentContent=(b=n.currentContent)!==null&&b!==void 0?b:h.getContent(),n.currentContent!==v&&(n.currentContent=v,h.setContent(v),h.undoManager.clear(),h.undoManager.add(),h.setDirty(!1));var $=(C=n.props.disabled)!==null&&C!==void 0?C:!1;re(n.editor,$?"readonly":"design"),n.props.init&&G(n.props.init.init_instance_callback)&&n.props.init.init_instance_callback(h)}});n.inline||(f.style.visibility=""),te(f)&&(f.value=n.getInitialValue()),g.init(m)}},n.id=n.props.id||pe("tiny-react"),n.elementRef=d.createRef(),n.inline=(c=(r=n.props.inline)!==null&&r!==void 0?r:(a=n.props.init)===null||a===void 0?void 0:a.inline)!==null&&c!==void 0?c:!1,n.boundHandlers={},n}return Object.defineProperty(t.prototype,"view",{get:function(){var o,n;return(n=(o=this.elementRef.current)===null||o===void 0?void 0:o.ownerDocument.defaultView)!==null&&n!==void 0?n:window},enumerable:!1,configurable:!0}),t.prototype.componentDidUpdate=function(o){var n=this,r,a;if(this.rollbackTimer&&(clearTimeout(this.rollbackTimer),this.rollbackTimer=void 0),this.editor&&(this.bindHandlers(o),this.editor.initialized)){if(this.currentContent=(r=this.currentContent)!==null&&r!==void 0?r:this.editor.getContent(),typeof this.props.initialValue=="string"&&this.props.initialValue!==o.initialValue)this.editor.setContent(this.props.initialValue),this.editor.undoManager.clear(),this.editor.undoManager.add(),this.editor.setDirty(!1);else if(typeof this.props.value=="string"&&this.props.value!==this.currentContent){var c=this.editor;c.undoManager.transact(function(){var s;if(!n.inline||c.hasFocus())try{s=c.selection.getBookmark(3)}catch{}var u=n.valueCursor;if(c.setContent(n.props.value),!n.inline||c.hasFocus())for(var p=0,f=[s,u];p<f.length;p++){var g=f[p];if(g)try{c.selection.moveToBookmark(g),n.valueCursor=g;break}catch{}}})}if(this.props.disabled!==o.disabled){var l=(a=this.props.disabled)!==null&&a!==void 0?a:!1;re(this.editor,l?"readonly":"design")}}},t.prototype.componentDidMount=function(){var o=this,n,r,a,c,l;if(q(this.view)!==null)this.initialise();else if(Array.isArray(this.props.tinymceScriptSrc)&&this.props.tinymceScriptSrc.length===0)(r=(n=this.props).onScriptsLoadError)===null||r===void 0||r.call(n,new Error("No `tinymce` global is present but the `tinymceScriptSrc` prop was an empty array."));else if(!((a=this.elementRef.current)===null||a===void 0)&&a.ownerDocument){var s=function(){var p,f;(f=(p=o.props).onScriptsLoad)===null||f===void 0||f.call(p),o.initialise()},u=function(p){var f,g;(g=(f=o.props).onScriptsLoadError)===null||g===void 0||g.call(f,p)};An.loadList(this.elementRef.current.ownerDocument,this.getScriptSources(),(l=(c=this.props.scriptLoading)===null||c===void 0?void 0:c.delay)!==null&&l!==void 0?l:0,s,u)}},t.prototype.componentWillUnmount=function(){var o=this,n=this.editor;n&&(n.off(this.changeEvents(),this.handleEditorChange),n.off(this.beforeInputEvent(),this.handleBeforeInput),n.off("keypress",this.handleEditorChangeSpecial),n.off("keydown",this.handleBeforeInputSpecial),n.off("NewBlock",this.handleEditorChange),Object.keys(this.boundHandlers).forEach(function(r){n.off(r,o.boundHandlers[r])}),this.boundHandlers={},n.remove(),this.editor=void 0)},t.prototype.render=function(){return this.inline?this.renderInline():this.renderIframe()},t.prototype.changeEvents=function(){var o,n,r,a=(r=(n=(o=q(this.view))===null||o===void 0?void 0:o.Env)===null||n===void 0?void 0:n.browser)===null||r===void 0?void 0:r.isIE();return a?"change keyup compositionend setcontent CommentChange":"change input compositionend setcontent CommentChange"},t.prototype.beforeInputEvent=function(){return Ln()?"beforeinput SelectionChange":"SelectionChange"},t.prototype.renderInline=function(){var o=this.props.tagName,n=o===void 0?"div":o;return d.createElement(n,{ref:this.elementRef,id:this.id})},t.prototype.renderIframe=function(){return d.createElement("textarea",{ref:this.elementRef,style:{visibility:"hidden"},name:this.props.textareaName,id:this.id})},t.prototype.getScriptSources=function(){var o,n,r=(o=this.props.scriptLoading)===null||o===void 0?void 0:o.async,a=(n=this.props.scriptLoading)===null||n===void 0?void 0:n.defer;if(this.props.tinymceScriptSrc!==void 0)return typeof this.props.tinymceScriptSrc=="string"?[{src:this.props.tinymceScriptSrc,async:r,defer:a}]:this.props.tinymceScriptSrc.map(function(u){return typeof u=="string"?{src:u,async:r,defer:a}:u});var c=this.props.cloudChannel,l=this.props.apiKey?this.props.apiKey:"no-api-key",s="https://cdn.tiny.cloud/1/".concat(l,"/tinymce/").concat(c,"/tinymce.min.js");return[{src:s,async:r,defer:a}]},t.prototype.getInitialValue=function(){return typeof this.props.initialValue=="string"?this.props.initialValue:typeof this.props.value=="string"?this.props.value:""},t.prototype.bindHandlers=function(o){var n=this;if(this.editor!==void 0){Pn(this.editor,o,this.props,this.boundHandlers,function(l){return n.props[l]});var r=function(l){return l.onEditorChange!==void 0||l.value!==void 0},a=r(o),c=r(this.props);!a&&c?(this.editor.on(this.changeEvents(),this.handleEditorChange),this.editor.on(this.beforeInputEvent(),this.handleBeforeInput),this.editor.on("keydown",this.handleBeforeInputSpecial),this.editor.on("keyup",this.handleEditorChangeSpecial),this.editor.on("NewBlock",this.handleEditorChange)):a&&!c&&(this.editor.off(this.changeEvents(),this.handleEditorChange),this.editor.off(this.beforeInputEvent(),this.handleBeforeInput),this.editor.off("keydown",this.handleBeforeInputSpecial),this.editor.off("keyup",this.handleEditorChangeSpecial),this.editor.off("NewBlock",this.handleEditorChange))}},t.propTypes=Tn,t.defaultProps={cloudChannel:"6"},t}(d.Component);const Vn=d.forwardRef(function(e,t){const o=d.useRef(null),[n,r]=d.useState(!0);d.useImperativeHandle(t,()=>({getContent:()=>{var u;return(u=o.current)==null?void 0:u.getContent()},setContent:u=>{var p;return(p=o.current)==null?void 0:p.setContent(u)},getEditor:()=>o.current}),[o]);const a="undo redo | blocks | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | forecolor backcolor removeformat",[c,l]=Le(),s={language_url:"/antd-template-admin/tinymce/langs/zh-Hans.js",language:"zh-Hans",min_height:300,toolbar:a,branding:!1,menubar:!1,toolbar_mode:"sliding",insertdatetime_formats:["%Y年%m月%d日","%H点%M分%S秒","%Y-%m-%d","%H:%M:%S"],init_instance_callback:()=>{r(!1),l(c.current.elementRef.current,{opacity:[0,1]})}};return E.jsxs("div",{style:{position:"relative"},children:[n&&E.jsxs("div",{style:{position:"absolute",right:"0",left:"0",zIndex:9,backgroundColor:"#fff",overflow:"hidden"},children:[E.jsx(He,{children:a.split("|").map(u=>{const p=u.trim().split(" ");return p.length>1?p.map(f=>E.jsx(V.Button,{active:!0,style:{minWidth:"auto",width:"34px"}},f)):E.jsx(V.Button,{active:!0,style:{width:"130px"}},p[0])})}),E.jsx(V.Button,{active:!0,block:!0,style:{marginTop:"5px",height:"360px"}})]}),E.jsx(Wn,{ref:c,tinymceScriptSrc:"/antd-template-admin/tinymce/tinymce.min.js",onInit:(u,p)=>o.current=p,init:{...s,...e==null?void 0:e.config}})]})}),Gn="_container_yxnpy_1",qn={container:Gn};function Qn(){const e=d.useRef(null),t=d.useCallback(()=>{var o;alert((o=e.current)==null?void 0:o.getContent())},[e]);return E.jsxs("div",{className:qn.container,children:[E.jsx(le,{style:{marginBottom:"15px"},message:"这里富文本选用 TinyMCE，找了很多了，好像这个还是比较合适",type:"info"}),E.jsx(Vn,{ref:e}),E.jsx("div",{style:{marginTop:"15px"},children:E.jsx(Re,{type:"primary",onClick:t,children:"打印文本内容"})})]})}export{Qn as default};
