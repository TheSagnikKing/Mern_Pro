import{d as p,k as j,r as t,j as e,L as b,O as c}from"./index-CA3EcmWk.js";import{c as y}from"./barberauthApiSlice-B5SzINdS.js";const E=()=>{var i;const n=p(j),o=t.useRef(!1),[f,l]=t.useState(!1),[d,{isUninitialized:u,isLoading:h,isSuccess:x,isError:m,error:s}]=y(),g="development";t.useEffect(()=>((o.current===!0||g!=="development")&&(n||(async()=>{console.log("verifying barber refresh token");try{const{data:a}=await d();l(!0)}catch(a){console.error(a)}})()),()=>o.current=!0),[]);let r;return h?r=e.jsx("h1",{children:"Loader"}):m?r=e.jsxs(e.Fragment,{children:[e.jsxs("main",{style:{padding:"2rem",height:"100vh",width:"100%",background:"#efefef"},children:[e.jsx("h1",{style:{color:"crimson",background:"#fff",width:"30rem",height:"4.5rem",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0px 0px 4px rgba(0,0,0,0.6)",borderRadius:"5px"},children:(i=s==null?void 0:s.data)==null?void 0:i.message}),e.jsx(b,{to:"/barber-signin",children:e.jsx("h1",{style:{marginTop:"2rem",color:"red"},children:"Please Login Again"})})]}),e.jsx("div",{})]}):x&&f?r=e.jsx(c,{}):n&&u&&(r=e.jsx(c,{})),r};export{E as default};