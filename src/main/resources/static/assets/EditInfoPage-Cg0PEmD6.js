import{u as n,R as o,b as c,S as l,j as e}from"./index-DgvhuQLs.js";import{M as m}from"./MenuBar-DzkljZ6U.js";import{N as x}from"./NotificationIcon-CFXwNBzz.js";import{I as d}from"./index-Bonc72oP.js";import{M as p}from"./index-CmTjqX1u.js";import"./index-B-_s05js.js";import"./iconBase-BvS4BhiP.js";import"./index-DgNNhwAx.js";import"./index-CHcUfME0.js";import"./index-BDdqncIb.js";import"./index-C8lUTx5V.js";import"./cookie-BNspsx3t.js";function I(){const r=n(),[s,f]=o(c),a=l.mixin({toast:!0,position:"center",showConfirmButton:!1,timer:1e3,timerProgressBar:!0,didOpen:t=>{t.onmouseenter=l.stopTimer,t.onmouseleave=l.resumeTimer}}),i=t=>{t.preventDefault(),a.fire({icon:"success",title:"핸드폰 번호가 변경되었습니다"}),r("/user/userInfo")};return e.jsxs("div",{className:"h-dvh overflow-x-hidden overflow-y-scroll scrollbar-hide",children:[e.jsxs("div",{className:"absolute w-full h-10% flex justify-between items-center px-3 py-5 border-b-2 border-gray border-opacity-70 bg-white ",children:[e.jsx(d,{className:"text-3xl",onClick:()=>r(-1)}),e.jsx("span",{className:"text-xl font-semibold",children:"내 정보 수정"}),e.jsx("div",{children:" "}),e.jsx(x,{})]}),e.jsxs("form",{className:"flex flex-col h-dvh justify-around mt-16 gap-10",onSubmit:t=>i(t),children:[e.jsxs("div",{className:"w-full flex flex-col items-center gap-3",children:[e.jsx("img",{src:"/profile.jpeg",alt:"프로필 이미지",className:"w-32 rounded-full bg-auto"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"pr-3",children:"사용가능 포인트"}),e.jsx("span",{className:"font-bold text-2xl",children:s.point})]}),e.jsxs("span",{className:"flex items-center gap-2 px-3 py-1 border-2 border-gray rounded-xl",children:[e.jsx(p,{className:"text-xl"}),s.email]})]}),e.jsx("div",{className:"h-1/6 flex justify-center items-center",children:e.jsxs("div",{className:"flex gap-5 items-center justify-center",children:[e.jsxs("div",{className:"flex flex-col gap-6 font-thin text-lg h-full text-darkGray",children:[e.jsx("span",{children:"이름"}),e.jsx("span",{children:"아이디"}),e.jsx("span",{children:"소속"}),e.jsx("label",{htmlFor:"phone",children:"휴대폰"})]}),e.jsxs("div",{className:"flex flex-col gap-6 font-medium text-lg w-2/3 h-full",children:[e.jsx("span",{children:s.name}),e.jsx("span",{children:s.uid}),e.jsx("span",{children:s.companyName}),e.jsx("input",{type:"tel",id:"phone",pattern:"[0-9]{3}-[0-9]{4}-[0-9]{4}",defaultValue:s.phone,autoFocus:!0,className:"px-2 w-full"})]})]})}),e.jsx("div",{className:"flex justify-center gap-5 pb-32",children:e.jsx("button",{type:"submit",className:"px-3 py-1 bg-primary rounded-lg text-white font-semibold text-center",children:"변경하기"})})]}),e.jsx(m,{})]})}export{I as default};
