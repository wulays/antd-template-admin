import{r as t,j as S,n as $,b as j,h as p,_ as w,l as g}from"./index-1c91ad10.js";import{a as D}from"./useMergedState-b9167af1.js";var M=["prefixCls","className","style","checked","disabled","defaultChecked","type","onChange"],H=t.forwardRef(function(a,k){var c,d=a.prefixCls,n=d===void 0?"rc-checkbox":d,m=a.className,C=a.style,_=a.checked,s=a.disabled,i=a.defaultChecked,b=i===void 0?!1:i,u=a.type,o=u===void 0?"checkbox":u,l=a.onChange,y=S(a,M),r=t.useRef(null),x=D(b,{value:_}),f=$(x,2),v=f[0],N=f[1];t.useImperativeHandle(k,function(){return{focus:function(){var e;(e=r.current)===null||e===void 0||e.focus()},blur:function(){var e;(e=r.current)===null||e===void 0||e.blur()},input:r.current}});var E=j(n,m,(c={},p(c,"".concat(n,"-checked"),v),p(c,"".concat(n,"-disabled"),s),c)),P=function(e){s||("checked"in a||N(e.target.checked),l==null||l({target:g(g({},a),{},{type:o,checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))};return t.createElement("span",{className:E,style:C},t.createElement("input",w({},y,{className:"".concat(n,"-input"),ref:r,onChange:P,disabled:s,checked:!!v,type:o})),t.createElement("span",{className:"".concat(n,"-inner")}))});export{H as C};