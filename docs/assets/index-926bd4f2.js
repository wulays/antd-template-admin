import{s as r,r as n,v as t}from"./index-ea61881a.js";import{R as e}from"./index-4f876a97.js";import"./useMergedState-e6b06b84.js";import"./getDataOrAriaProps-cf91de79.js";import"./index-8babba2d.js";function c(){const o=r(),s=n.useCallback(a=>{r.setState(()=>({token:a.target.value})),o.loadAuth()},[]);return t.jsxs("div",{children:[t.jsx("div",{children:"权限切换"}),t.jsxs(e.Group,{defaultValue:o.token,buttonStyle:"solid",onChange:s,children:[t.jsx(e.Button,{value:"fake-token-1",children:"admin"}),t.jsx(e.Button,{value:"fake-token-2",children:"test"})]})]})}export{c as default};