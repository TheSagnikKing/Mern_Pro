import{u as a,r as s,j as e,L as i}from"./index-CA3EcmWk.js";const d=()=>{const n=localStorage.getItem("AdminLoggedIn"),o=localStorage.getItem("BarberLoggedIn");console.log("From Barber BarberLoggedin",o),console.log("From Barber AdminLoggedin",n);const r=a();return s.useEffect(()=>{n==="false"&&o==="true"?r("/barber-dashboard"):n==="true"&&o==="false"&&r("/admin-dashboard")},[o,n,r]),e.jsx("main",{className:"public__main",children:e.jsxs("div",{className:"public__main__div",children:[e.jsx("h1",{children:"Welcome to my complete auth project"}),e.jsx("p",{children:"This is my first project with Redux Toolkit and Rtk Query"}),e.jsx(i,{to:"/admin-signin",children:"Admin Login"}),e.jsx(i,{to:"/barber-signin",children:"Barber Login"})]})})};export{d as default};
