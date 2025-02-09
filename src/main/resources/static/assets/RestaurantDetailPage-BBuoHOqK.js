import{r as d,R as B,m as R,u as F,n as M,j as e}from"./index-DgvhuQLs.js";import{n as o}from"./emotion-styled.browser.esm-BHLZPLA4.js";import{a as $}from"./index-CHcUfME0.js";import{B as v}from"./index-XPioK-EE.js";import{I as L,a as N}from"./index-Bonc72oP.js";import{c as P}from"./index-DgNNhwAx.js";import{g as A}from"./cookie-BNspsx3t.js";import"./iconBase-BvS4BhiP.js";const D=o.div`
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
`,T=o.div`
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
`,b=o.div`
  width: 100%;
  height: 10px;
  background-color: #ddd;
`,E=o.div`
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
`,_=o.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
  img {
    width: 75px;
    height: 75px;
    border-radius: 5px;
  }
`,G=o.div`
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
`,K=o.div`
  width: 20px;
  height: 20px;
  background-color: #ddd;
  color: #fff;
  border-radius: 50%;
  line-height: 20px;
  text-align: center;
  padding-right: 1px;
  font-size: 9px;
`,x=o.div`
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
`,q=o.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  background-color: #fff;
  padding: 10px 0;
  border-radius: 5px 5px 0 0;
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`,H=o.div`
  display: flex;
  justify-content: center;
  button {
    font-size: 10px;
    padding: 5px 100px;
    border-radius: 5px;
    background-color: #6f4cdb;
    color: #fff;
  }
`;function ee(){var j,m;const[t,y]=d.useState({}),[l,h]=d.useState(!1),[J,u]=B(R),[i,p]=d.useState({}),[g,k]=d.useState([]),a=F(),{id:c}=M(),C=async()=>{try{const r=(await $.get(`/api/restaurant?restaurantId=${c}`)).data.resultData;console.log(r.menuCateList),k(r.menuCateList),y(r),console.log(r)}catch(s){console.log(s)}},w=()=>{switch(t.categoryId){case 1:return"한식";case 2:return"중식";case 3:return"일식";default:return"잘못된 값"}},f=s=>{const r=A();s?r?(u(!0),h(!0)):(alert("로그인이 필요한 서비스입니다."),a("/auth")):r?(u(!1),a(`/user/restaurant/detail/reserve/${c}`)):(alert("로그인이 필요한 서비스입니다."),a("/auth"))},I=[1,2,3,4,5,6,7,8],S=["11:30","12:00","12:30","13:00","13:30"];return d.useEffect(()=>{C(),console.log(c)},[]),e.jsxs("div",{style:{height:"100vh"},children:[e.jsx("img",{src:`http://112.222.157.156:5222/pic/restaurant/${t==null?void 0:t.restaurantId}/${(j=t==null?void 0:t.restaurantPics)==null?void 0:j.filePath}`,alt:"가게 이미지",style:{width:"100%",height:260,position:"relative"}}),e.jsx(D,{children:e.jsx(L,{style:{width:"100%",height:"100%"},onClick:()=>a(-1)})}),e.jsxs(T,{onClick:()=>console.log(g),children:[e.jsxs("div",{children:[(m=t==null?void 0:t.restaurantAddress)==null?void 0:m.match(/^(?:대구광역시|대구)\s*(.+)/)[1]," ",e.jsx("span",{children:"I"})," ",w()]}),e.jsx("h1",{children:t==null?void 0:t.restaurantName}),e.jsx("div",{children:t==null?void 0:t.restaurantDescription}),e.jsxs("h2",{children:[e.jsx(P,{}),t==null?void 0:t.restaurantAddress]}),e.jsxs("h2",{style:{marginTop:10},children:[e.jsx(v,{}),"매장 연락처 : ",t==null?void 0:t.restaurantNumber]})]}),e.jsx(b,{}),e.jsxs(E,{children:[e.jsx("h1",{children:"메뉴"}),g.map((s,r)=>e.jsx("div",{children:s.menuList.map((n,z)=>e.jsxs("div",{children:[e.jsxs(_,{children:[e.jsx("img",{src:`http://112.222.157.156:5222/pic/menu/${n==null?void 0:n.menuId}/${n==null?void 0:n.menuPic}`,alt:"메뉴 이미지"}),e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("div",{children:n==null?void 0:n.menuName}),e.jsxs("span",{children:[n==null?void 0:n.price.toLocaleString("ko-KR"),"원"]})]}),e.jsx("span",{className:"text-darkGray text-opacity-60",children:n==null?void 0:n.details})]})]}),e.jsx(b,{style:{height:1,backgroundColor:"#eee",marginBottom:10}})]},z))},r))]}),!l&&e.jsxs(G,{children:[e.jsx("button",{onClick:()=>f(!1),children:"앉아서 주문"}),e.jsx("button",{onClick:()=>f(!0),children:"예약하기"})]}),l&&e.jsxs(q,{children:[e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginRight:10},children:e.jsx(N,{onClick:()=>{h(!1),p({})}})}),e.jsx("div",{style:{textAlign:"center",fontSize:12,marginBottom:10},children:"예약할 시간과 인원을 선택해주세요"}),e.jsxs(x,{children:[e.jsx("span",{children:"인원수"}),e.jsx("div",{style:{display:"flex",gap:10},children:I.map((s,r)=>e.jsxs(K,{style:{backgroundColor:s===i.count&&"#6F4CDB"},onClick:()=>p({...i,count:s}),children:[s,"명"]},r))})]}),e.jsxs(x,{children:[e.jsx("span",{children:"시간 선택"}),e.jsx("div",{style:{display:"flex",gap:5},children:S.map((s,r)=>e.jsxs("p",{style:{backgroundColor:s===i.time&&"#6F4CDB"},onClick:()=>p({...i,time:s}),children:[s==="11:30"?"오전":"오후"," ",s==="13:00"?"1:00":s==="13:30"?"1:30":s]},r))})]}),e.jsxs(x,{style:{gap:5,color:"#FF9500"},children:[e.jsx(v,{}),e.jsx("div",{children:"9명 이상은 가게에 직접 문의해주세요"})]}),e.jsx(H,{children:e.jsx("button",{onClick:()=>{i.time&&i.count?a(`/user/restaurant/detail/reserve/${c}`,{state:i}):alert("시간과 인원을 선택해주세요")},children:"확인"})})]})]})}export{ee as default};
