import{u as i,j as e,B as l,r as d,H as o}from"./index-BS2gDEhP.js";import{T as t}from"./TextField-BKRcOXN5.js";const m="_form_g2aqz_1",c={form:m},u=()=>{const s=i(),n=r=>{r.preventDefault();const a=r.currentTarget;s(d({name:a.elements.name.value,email:a.elements.email.value,password:a.elements.password.value})),a.reset()};return e.jsxs("form",{className:c.form,onSubmit:n,autoComplete:"off",children:[e.jsx(t,{id:"standard-basic",label:"Username",variant:"standard",type:"text",name:"name",placeholder:"Enter username",required:!0}),e.jsx(t,{id:"standard-basic",label:"Email",variant:"standard",type:"email",name:"email",placeholder:"Enter email",required:!0}),e.jsx(t,{id:"standard-basic",label:"Password",variant:"standard",type:"password",name:"password",placeholder:"Enter password, at least 7 characters.",pattern:".{7,}",title:"Your password must contain at least 7 characters.",required:!0}),e.jsx(l,{type:"submit",variant:"outlined",style:{width:"100px",marginTop:"30px",alignSelf:"center"},children:"Register"})]})};function h(){return e.jsxs("div",{children:[e.jsx(o,{children:e.jsx("title",{children:"Sign up here"})}),e.jsx(u,{})]})}export{h as default};