import{F as e,M as t}from"./index-dc2efb5d.js";import{F as r}from"./index-7e2c481a.js";import{I as s,C as l}from"./index-7679c4b6.js";import"./index-11ddad6c.js";import"./placements-df26f13d.js";import"./useMergedState-bc5b73c9.js";import"./useFlexGapSupport-1eccfea1.js";import"./index-e911f948.js";const o="_container_yxnpy_1",i={container:o};function h(){const a=[{label:"苹果",value:1},{label:"香蕉",value:2},{label:"西瓜",value:3},{label:"菠萝",value:4}];return e.jsx("div",{className:i.container,children:e.jsxs(r,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},style:{maxWidth:600},initialValues:{remember:!0,checkboxlist:[1]},autoComplete:"off",children:[e.jsx(r.Item,{label:"用户名",name:"username",rules:[{required:!0,message:"请输入用户名！"}],children:e.jsx(s,{})}),e.jsx(r.Item,{label:"密码",name:"password",rules:[{required:!0,message:"请输入密码！"}],children:e.jsx(s.Password,{})}),e.jsx(r.Item,{label:"最喜欢的水果",name:"checkboxlist",rules:[{required:!0,message:"请至少选择一项！"}],children:e.jsx(l.Group,{options:a})}),e.jsx(r.Item,{wrapperCol:{offset:8,span:16},children:e.jsx(t,{type:"primary",htmlType:"submit",children:"提交"})})]})})}export{h as default};
