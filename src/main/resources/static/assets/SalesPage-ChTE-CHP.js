import{r as d,j as e}from"./index-DgvhuQLs.js";import{n as l}from"./emotion-styled.browser.esm-BHLZPLA4.js";import{a as h}from"./index-CHcUfME0.js";import{g as j}from"./cookie-BNspsx3t.js";const a=l.div`
  margin: 30px 35px;
  overflow-y: scroll;
`;l.button`
  border: 1px solid #929292;
  padding: 5px 15px;
  border-radius: 5px;
  background-color: #fff;
`;const f=l.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 25px;
  background-color: #eee;
  font-weight: 700;
  align-items: center;
  border-radius: 10px 10px 0 0;
  border: 1px solid #929292;
`,r=l.div`
  justify-content: space-between;
  display: flex;
  background-color: #eee;
  border-left: 1px solid #929292;
`,s=l.div`
  width: 20%;
  text-align: center;
  padding: 10px 0;
  border-right: 1px solid #929292;
  border-bottom: 1px solid #929292;
`;function m(){const[i,c]=d.useState([]);sessionStorage.getItem("restaurantId");const x=j();return d.useEffect(()=>{const o={restaurantId:1,startDate:"",endData:"",page:1,size:15};(async()=>{try{const n=await h.get("/api/restaurant/orderList",{params:o,headers:{Authorization:`Bearer ${x}`}});console.log(n.data.resultData);const t=n.data.resultData;c([...t])}catch(n){console.log(n)}})()},[]),console.log(i),e.jsxs(a,{className:"scrollbar-hide",children:[e.jsxs(f,{children:[e.jsx("div",{children:"매출 내역"}),e.jsxs("div",{style:{display:"flex",gap:10,alignItems:"center"},children:[e.jsx("label",{htmlFor:"",children:"시작일"}),e.jsx("input",{type:"date",className:"px-2"}),e.jsx("span",{children:"~"}),e.jsx("label",{htmlFor:"",children:"종료일"}),e.jsx("input",{type:"date",className:"px-2"})]})]}),e.jsxs(r,{children:[e.jsx(s,{children:"주문 번호"}),e.jsx(s,{children:"주문 일시"}),e.jsx(s,{children:"주문자 성함"}),e.jsx(s,{children:"주문한 메뉴"}),e.jsx(s,{children:"주문 종류"})]}),e.jsxs(r,{style:{backgroundColor:"#fff"},children:[e.jsx(s,{children:"1113461412"}),e.jsx(s,{children:"2025.01.03 17:30:46 "}),e.jsx(s,{children:"홍길동"}),e.jsx(s,{children:"양지쌀국수"}),e.jsx(s,{children:"앉아서 주문"})]}),e.jsxs(r,{style:{backgroundColor:"#fff"},children:[e.jsx(s,{children:"1113461412"}),e.jsx(s,{children:"2025.01.03 17:30:46 "}),e.jsx(s,{children:"홍길동"}),e.jsx(s,{children:"양지쌀국수"}),e.jsx(s,{children:"앉아서 주문"})]}),e.jsxs(r,{style:{backgroundColor:"#fff"},children:[e.jsx(s,{children:"1113461412"}),e.jsx(s,{children:"2025.01.03 17:30:46 "}),e.jsx(s,{children:"홍길동"}),e.jsx(s,{children:"양지쌀국수"}),e.jsx(s,{children:"앉아서 주문"})]}),e.jsxs(r,{style:{backgroundColor:"#fff"},children:[e.jsx(s,{children:"1113461412"}),e.jsx(s,{children:"2025.01.03 17:30:46 "}),e.jsx(s,{children:"홍길동"}),e.jsx(s,{children:"양지쌀국수"}),e.jsx(s,{children:"앉아서 주문"})]}),e.jsxs(r,{style:{backgroundColor:"#fff"},children:[e.jsx(s,{children:"1113461412"}),e.jsx(s,{children:"2025.01.03 17:30:46 "}),e.jsx(s,{children:"홍길동"}),e.jsx(s,{children:"양지쌀국수"}),e.jsx(s,{children:"앉아서 주문"})]}),e.jsxs(r,{style:{backgroundColor:"#fff"},children:[e.jsx(s,{children:"1113461412"}),e.jsx(s,{children:"2025.01.03 17:30:46 "}),e.jsx(s,{children:"홍길동"}),e.jsx(s,{children:"양지쌀국수"}),e.jsx(s,{children:"앉아서 주문"})]}),e.jsxs(r,{style:{backgroundColor:"#fff"},children:[e.jsx(s,{children:"1113461412"}),e.jsx(s,{children:"2025.01.03 17:30:46 "}),e.jsx(s,{children:"홍길동"}),e.jsx(s,{children:"양지쌀국수"}),e.jsx(s,{children:"앉아서 주문"})]}),e.jsxs(r,{style:{backgroundColor:"#fff"},children:[e.jsx(s,{children:"1113461412"}),e.jsx(s,{children:"2025.01.03 17:30:46 "}),e.jsx(s,{children:"홍길동"}),e.jsx(s,{children:"양지쌀국수"}),e.jsx(s,{children:"앉아서 주문"})]}),e.jsxs(r,{style:{backgroundColor:"#fff"},children:[e.jsx(s,{children:"1113461412"}),e.jsx(s,{children:"2025.01.03 17:30:46 "}),e.jsx(s,{children:"홍길동"}),e.jsx(s,{children:"양지쌀국수"}),e.jsx(s,{children:"앉아서 주문"})]}),e.jsxs(r,{style:{backgroundColor:"#fff"},children:[e.jsx(s,{children:"1113461412"}),e.jsx(s,{children:"2025.01.03 17:30:46 "}),e.jsx(s,{children:"홍길동"}),e.jsx(s,{children:"양지쌀국수"}),e.jsx(s,{children:"앉아서 주문"})]}),e.jsxs(r,{style:{backgroundColor:"#fff"},children:[e.jsx(s,{children:"1113461412"}),e.jsx(s,{children:"2025.01.03 17:30:46 "}),e.jsx(s,{children:"홍길동"}),e.jsx(s,{children:"양지쌀국수"}),e.jsx(s,{children:"앉아서 주문"})]}),e.jsxs(r,{style:{backgroundColor:"#fff"},children:[e.jsx(s,{children:"1113461412"}),e.jsx(s,{children:"2025.01.03 17:30:46 "}),e.jsx(s,{children:"홍길동"}),e.jsx(s,{children:"양지쌀국수"}),e.jsx(s,{children:"앉아서 주문"})]}),e.jsxs(r,{style:{backgroundColor:"#fff"},children:[e.jsx(s,{children:"1113461412"}),e.jsx(s,{children:"2025.01.03 17:30:46 "}),e.jsx(s,{children:"홍길동"}),e.jsx(s,{children:"양지쌀국수"}),e.jsx(s,{children:"앉아서 주문"})]})]})}export{m as default};
