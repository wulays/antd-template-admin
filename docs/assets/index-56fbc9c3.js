import{r as s,F as a,M as x}from"./index-5a2f0ab2.js";import{I as h,C as j}from"./index-3e395cfd.js";import{S as y,T as k,a as g}from"./index-3ab51ff4.js";import"./index-df21c418.js";import"./useMergedState-769a646a.js";import"./placements-bb185351.js";import"./dropdown-97721031.js";import"./index-ebb536d9.js";import"./index-90fd840e.js";import"./useFlexGapSupport-2e56b859.js";import"./index-2d6e611c.js";import"./getDataOrAriaProps-cf91de79.js";const f="_container_yxnpy_1",b={container:f};function z(){const i=[{key:0,name:"a",age:32,state:"1",address:"西湖区湖底公园1号"},{key:1,name:"b",age:32,state:"1",address:"桥洞"},{key:2,name:"c",age:22,state:"0",address:"西湖区湖底公园2号"},{key:3,name:"ac",age:22,state:"0",address:"西湖区湖底公园2号"}],[c,m]=s.useState([]);s.useEffect(()=>{d()},[]);const r=[{title:"姓名",dataIndex:"name"},{title:"年龄",dataIndex:"age"},{title:"状态",dataIndex:"state",render:e=>a.jsx(g,{color:e==="1"?"success":"error",children:e==="1"?"有效":"无效"})},{title:"住址",dataIndex:"address"}],[t,n]=s.useState({keyword:"",state:void 0}),[o,p]=s.useState(r.map(e=>e.dataIndex)),u=e=>{p(e)},d=()=>{m(i.filter(e=>(!t.keyword||e.name.includes(t.keyword))&&(!t.state||e.state===t.state)))};return a.jsxs("div",{className:b.container,children:[a.jsxs("ul",{className:"search-list",children:[a.jsxs("li",{children:[a.jsx("span",{children:"关键字"}),a.jsx(h,{value:t.keyword,placeholder:"请输入姓名进行查询",allowClear:!0,onChange:e=>n(l=>({...l,keyword:e.target.value}))})]}),a.jsxs("li",{children:[a.jsx("span",{children:"状态"}),a.jsx(y,{defaultValue:t.state,style:{width:120},onChange:e=>n(l=>({...l,state:e})),options:[{value:"0",label:"无效"},{value:"1",label:"有效"}],allowClear:!0,placeholder:"全部"})]}),a.jsx("li",{children:a.jsx(j.Group,{options:r.map(e=>e.dataIndex),value:o,onChange:u})}),a.jsx("li",{children:a.jsx(x,{type:"primary",onClick:d,children:"查询"})})]}),a.jsx(k,{size:"small",bordered:!0,dataSource:c,columns:r.filter(e=>o.includes(e.dataIndex))})]})}export{z as default};