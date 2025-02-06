import{R as d,b as B,w as E,x as H,q as z,r as i,y as T,u as U,j as s}from"./index-8lJcAOoD.js";import{a as j}from"./index-CHcUfME0.js";import"./lodash-ps-9DWTQ.js";import{I as K,d as L}from"./index-DAM17y8Z.js";import{g as w}from"./cookie-DPYybHad.js";import"./iconBase-DY5zKqN8.js";const W=()=>{const[u,N]=d(B),[c,h]=d(E),[k,p]=d(H),[f,O]=d(z),[x,g]=i.useState(!0),[I,v]=i.useState([]),[o,D]=i.useState(""),{state:P}=T(),b=U(),S=sessionStorage.getItem("userId"),C=w();c.userId.length,i.useEffect(()=>{const e={userId:S};(async()=>{try{const t=await j.get("/api/user",{params:e,headers:{Authorization:`Bearer ${C}`}});console.log(t.data.resultData);const a=t.data.resultData;N({...a}),p(l=>{const n=[...l];return n[0]={name:a.name,uid:a.uid,userId:a.userId},n}),h(l=>{var y;const n=(y=l.userId)==null?void 0:y.includes(a.userId);return{...l,userId:n?l.userId.filter($=>$!==a.userId):[...l.userId,a.userId]}}),m()}catch(t){console.log(t)}})()},[o]);const m=async(e=o)=>{const r=w(),t={companyId:u.companyId,page:1,size:30,name:e};console.log(t);try{const l=(await j.get("/api/user/user-payment-member/searchPeople",{params:t,headers:{Authorization:`Bearer ${r}`}})).data.resultData.memberList;v([...l])}catch(a){console.log(a)}};console.log(I);const M=e=>{const r=e.target.value;D(r)},A=e=>{console.log(e),console.log(o),e.code==="Enter"&&m()},G=e=>{console.log(e),h(r=>{var a;const t=(a=r.userId)==null?void 0:a.includes(e.userId);return{...r,userId:t?r.userId.filter(l=>l!==e.userId):[...r.userId,e.userId]}}),p(r=>r.some(a=>a.userId===e.userId)?r.filter(a=>a.userId!==e.userId):[...r,e])};console.log(c),console.log(k);const R=()=>{b(`/user/placetoorder/price/${f}`,{state:{orderId:f,userId:[c.userId]}})};return s.jsxs("div",{className:"w-full h-dvh overflow-x-hidden overflow-y-scroll scrollbar-hide",children:[s.jsxs("div",{className:"flex w-full justify-between py-6 items-center border-b border-gray",children:[s.jsx("div",{onClick:()=>b(-1),className:"flex w-[15%] justify-center",children:s.jsx(K,{className:"text-3xl"})}),s.jsx("span",{className:"text-lg font-semibold",children:"인원 선택"}),s.jsx("div",{className:"w-[15%]",children:s.jsx("span",{className:"bg-primary text-center px-3 py-1 rounded-md text-white",onClick:R,children:"다음"})})]}),s.jsxs("div",{className:"flex w-full justify-between p-4",children:[s.jsxs("div",{className:"flex",children:[s.jsx("span",{className:`${x?"bg-gray text-darkGray text-opacity-60":"bg-darkGray text-black"} px-2 py-1 rounded-s-md font-semibold`,onClick:()=>g(!1),children:"최근"}),s.jsx("span",{className:`${x?"bg-darkGray text-black":"bg-gray text-darkGray text-opacity-60"} px-2 py-1 rounded-e-md font-semibold`,onClick:()=>g(!0),children:"검색"})]}),s.jsxs("div",{children:["총 ",c.userId.length,"명 선택 중"]})]}),s.jsxs("div",{className:"w-full h-dvh ",children:[s.jsxs("div",{className:"flex w-full h-[6%] items-center px-6 border-b border-gray",children:[s.jsxs("div",{className:"flex w-[90%] items-center gap-4",children:[s.jsx("input",{type:"checkbox",className:"w-5 h-5",checked:!0,disabled:!0}),s.jsxs("label",{className:"text-xl",children:[u.name,"(",u.uid,")"]})]}),s.jsx("span",{className:"w-[20%] text-darkGray",children:"필수선택"})]}),x?s.jsxs("div",{className:"flex flex-col w-full h-dvh",children:[s.jsxs("div",{className:"flex p-6 items-center gap-1",children:[s.jsx("input",{type:"text",className:"w-[90%] border border-darkGray rounded-md px-2",placeholder:"회사 내 인원을 이름으로 검색해보세요",onChange:e=>M(e),onKeyDown:e=>A(e),value:o}),s.jsx(L,{onClick:()=>m(),className:"flex w-[10%] text-2xl"})]}),s.jsx("div",{className:"flex flex-col w-full h-dvh",children:I.map(e=>s.jsxs("div",{className:"flex w-full h-[6%] items-center gap-4 px-6 border-b border-gray",children:[s.jsx("input",{type:"checkbox",className:"w-5 h-5",id:e.userId,value:e.userId,onChange:()=>G(e)}),s.jsxs("label",{className:"text-xl",htmlFor:e.userId,children:[e.name,"(",e.uid,")"]})]},e.userId))})]}):s.jsx("div",{className:"flex flex-col w-full h-dvh",children:s.jsx("span",{className:"p-5 text-xl",children:"최근 함께한 사용자가 없습니다"})})]})]})};export{W as default};
