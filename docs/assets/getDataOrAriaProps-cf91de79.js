function s(a){return Object.keys(a).reduce((r,t)=>((t.startsWith("data-")||t.startsWith("aria-")||t==="role")&&!t.startsWith("data-__")&&(r[t]=a[t]),r),{})}export{s as g};
