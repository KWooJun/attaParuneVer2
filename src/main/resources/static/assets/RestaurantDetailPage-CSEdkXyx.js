import{r as d,R,s as F,u as M,v as T,j as e,S as x,n as r}from"./index-8lJcAOoD.js";import{a as $}from"./index-CHcUfME0.js";import{B as b}from"./index-BI6WUhOr.js";import{I as L,a as N}from"./index-DAM17y8Z.js";import{c as P}from"./index-Cng87bAU.js";import{g as A}from"./cookie-DPYybHad.js";import"./iconBase-DY5zKqN8.js";const D=r.div`
  background-color: #fff;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  padding: 3px;
  cursor: pointer;
  position: absolute;
  top: 0;
  margin: 10px 20px;
  color: #333;
`,E=r.div`
  padding: 15px 25px;
  div {
    font-size: 10px;
    color: #bababa;
    margin-bottom: 5px;
  }
  span {
    color: #eee;
    padding: 0 5px;
  }
  h1 {
    margin-bottom: 5px;
  }
  h2 {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 10px;
  }
`,y=r.div`
  width: 100%;
  height: 10px;
  background-color: #ddd;
`,O=r.div`
  overflow-y: auto;
  padding: 15px 25px;
  padding-bottom: 100px;
  div {
    color: #707070;
  }
  span {
    word-wrap: break-word;
    font-size: 12px;
    font-weight: 700;
  }
  h1 {
    font-weight: 700;
    margin-bottom: 20px;
  }
`,_=r.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
  img {
    width: 75px;
    height: 75px;
    border-radius: 5px;
  }
`,G=r.div`
  display: flex;
  gap: 35px;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 100%;
  bottom: 0;
  position: absolute;
  background-color: #fff;
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  button {
    padding: 5px 40px;
    font-size: 14px;
    background-color: #6f4cdb;
    color: #fff;
    border-radius: 5px;
  }
`,K=r.div`
  width: 20px;
  height: 20px;
  background-color: #ddd;
  color: #fff;
  border-radius: 50%;
  line-height: 20px;
  text-align: center;
  padding-right: 1px;
  font-size: 9px;
`,p=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  margin-bottom: 10px;
  span {
    width: 40px;
    margin-right: 10px;
  }
  p {
    padding: 2px 5px;
    border-radius: 2px;
    background-color: #e7e1f9;
    color: #fff;
    font-size: 8px;
  }
`,q=r.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  background-color: #fff;
  padding: 10px 0;
  border-radius: 5px 5px 0 0;
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`,H=r.div`
  display: flex;
  justify-content: center;
  button {
    font-size: 10px;
    padding: 5px 100px;
    border-radius: 5px;
    background-color: #6f4cdb;
    color: #fff;
  }
`;function ee(){var j,v;const[t,C]=d.useState({}),[u,h]=d.useState(!1),[J,g]=R(F),[i,l]=d.useState({}),[f,k]=d.useState([]),a=M(),{id:c}=T(),w=async()=>{try{const n=(await $.get(`/api/restaurant?restaurantId=${c}`)).data.resultData;console.log(n.menuCateList),k(n.menuCateList),C(n),console.log(n)}catch(o){console.log(o)}},B=()=>{switch(t.categoryId){case 1:return"한식";case 2:return"중식";case 3:return"일식";default:return"잘못된 값"}},m=o=>{const n=A();o?n?(g(!0),h(!0)):x.fire({title:"로그인이 필요한 서비스입니다.",icon:"error",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}).then(s=>{s.isConfirmed&&a("/auth")}):n?(g(!1),a(`/user/restaurant/detail/reserve/${c}`)):x.fire({title:"로그인이 필요한 서비스입니다.",icon:"error",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}).then(s=>{s.isConfirmed&&a("/auth")})},I=[1,2,3,4,5,6,7,8],S=["11:30","12:00","12:30","13:00","13:30"];return d.useEffect(()=>{w(),console.log(c)},[]),e.jsxs("div",{style:{height:"100vh"},children:[e.jsx("img",{src:`http://112.222.157.156:5222/pic/restaurant/${t==null?void 0:t.restaurantId}/${(j=t==null?void 0:t.restaurantPics)==null?void 0:j.filePath}`,alt:"가게 이미지",style:{width:"100%",height:260,position:"relative"}}),e.jsx(D,{children:e.jsx(L,{style:{width:"100%",height:"100%"},onClick:()=>a(-1)})}),e.jsxs(E,{onClick:()=>console.log(f),children:[e.jsxs("div",{children:[(v=t==null?void 0:t.restaurantAddress)==null?void 0:v.match(/^(?:대구광역시|대구)\s*(.+)/)[1]," ",e.jsx("span",{children:"I"})," ",B()]}),e.jsx("h1",{children:t==null?void 0:t.restaurantName}),e.jsx("div",{children:t==null?void 0:t.restaurantDescription}),e.jsxs("h2",{children:[e.jsx(P,{}),t==null?void 0:t.restaurantAddress]}),e.jsxs("h2",{style:{marginTop:10},children:[e.jsx(b,{}),"매장 연락처 : ",t==null?void 0:t.restaurantNumber]})]}),e.jsx(y,{}),e.jsxs(O,{children:[e.jsx("h1",{children:"메뉴"}),f.map((o,n)=>e.jsx("div",{children:o.menuList.map((s,z)=>e.jsxs("div",{children:[e.jsxs(_,{children:[e.jsx("img",{src:`http://112.222.157.156:5222/pic/menu/${s==null?void 0:s.menuId}/${s==null?void 0:s.menuPic}`,alt:"메뉴 이미지"}),e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("div",{children:s==null?void 0:s.menuName}),e.jsxs("span",{children:[s==null?void 0:s.price.toLocaleString("ko-KR"),"원"]})]}),e.jsx("span",{className:"text-darkGray text-opacity-60",children:s==null?void 0:s.details})]})]}),e.jsx(y,{style:{height:1,backgroundColor:"#eee",marginBottom:10}})]},z))},n))]}),!u&&e.jsxs(G,{children:[e.jsx("button",{onClick:()=>m(!1),children:"앉아서 주문"}),e.jsx("button",{onClick:()=>m(!0),children:"예약하기"})]}),u&&e.jsxs(q,{children:[e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginRight:10},children:e.jsx(N,{onClick:()=>{h(!1),l({})}})}),e.jsx("div",{style:{textAlign:"center",fontSize:12,marginBottom:10},children:"예약할 시간과 인원을 선택해주세요"}),e.jsxs(p,{children:[e.jsx("span",{children:"인원수"}),e.jsx("div",{style:{display:"flex",gap:10},children:I.map((o,n)=>e.jsxs(K,{style:{backgroundColor:o===i.count&&"#6F4CDB"},onClick:()=>l({...i,count:o}),children:[o,"명"]},n))})]}),e.jsxs(p,{children:[e.jsx("span",{children:"시간 선택"}),e.jsx("div",{style:{display:"flex",gap:5},children:S.map((o,n)=>e.jsxs("p",{style:{backgroundColor:o===i.time&&"#6F4CDB"},onClick:()=>l({...i,time:o}),children:[o==="11:30"?"오전":"오후"," ",o==="13:00"?"1:00":o==="13:30"?"1:30":o]},n))})]}),e.jsxs(p,{style:{gap:5,color:"#FF9500"},children:[e.jsx(b,{}),e.jsx("div",{children:"9명 이상은 가게에 직접 문의해주세요"})]}),e.jsx(H,{children:e.jsx("button",{onClick:()=>{i.time&&i.count?a(`/user/restaurant/detail/reserve/${c}`,{state:i}):x.fire({title:"시간과 인원을 선택해주세요.",icon:"error",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1})},children:"확인"})})]})]})}export{ee as default};
