import{G as n,F as t}from"./index-5a2f0ab2.js";import{R as e}from"./index-2d6e611c.js";import"./useMergedState-769a646a.js";import"./getDataOrAriaProps-cf91de79.js";import"./index-df21c418.js";function h(){const o=n(),r=s=>{n.setState(()=>({token:s.target.value})),o.loadAuth()};return t.jsxs("div",{children:[t.jsx("div",{children:"权限切换"}),t.jsxs(e.Group,{defaultValue:o.token,buttonStyle:"solid",onChange:r,children:[t.jsx(e.Button,{value:"fake-token-1",children:"admin"}),t.jsx(e.Button,{value:"fake-token-2",children:"test"})]})]})}export{h as default};