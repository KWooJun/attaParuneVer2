import{u as _,a as F,m as K,v as U,r,R as O,o as q,b as G,n as H,j as e,w as M}from"./index-DgvhuQLs.js";import{n as i}from"./emotion-styled.browser.esm-BHLZPLA4.js";import{a as f}from"./index-CHcUfME0.js";import{B as J}from"./index-XPioK-EE.js";import{F as Q,c as V,d as W,e as X}from"./index-C8lUTx5V.js";import{b as Z,c as ee}from"./index-B-_s05js.js";import{I as te}from"./index-Bonc72oP.js";import{c as se}from"./index-DgNNhwAx.js";import{d as oe}from"./dayjs.min-Ccagk4ZG.js";import{g as ne}from"./cookie-BNspsx3t.js";import"./iconBase-BvS4BhiP.js";const ae=i.div`
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
`,re=i.div`
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
`,j=i.div`
  height: 10px;
  background-color: #ddd;
`,ie=i.div`
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
`,ce=i.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
  img {
    width: 75px;
    height: 75px;
    border-radius: 5px;
  }
`,S=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,de=i.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  background-color: #fff;
  padding: 10px 10px;
  border-radius: 5px 5px 0 0;
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  transition: height 0.3s ease-in-out;
  button {
    padding: 5px 40px;
    font-size: 14px;
    background-color: #6f4cdb;
    color: #fff;
    border-radius: 5px;
  }
`,v=i.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin: 0 30px;
  p {
    font-size: 14px;
  }
  div {
    font-size: 12px;
    color: #888888;
  }
  span {
  }
`;function Ie(){var w,k;const b=_(),h=F(K),L=U(),{time:C,count:P}=L.state||{},[n,A]=r.useState({}),[I,u]=r.useState(!1),[R,z]=r.useState([]),[c,l]=r.useState([]),[d,p]=r.useState([]),[ue,y]=O(q),[x,D]=r.useState({}),T=F(G),{id:m}=H(),N=async()=>{try{const t=await f.get(`/api/restaurant?restaurantId=${m}`),s=t.data.resultData;A(t.data.resultData),z(s.menuCateList),console.log(t.data.resultData)}catch(t){console.log(t)}},$=async()=>{const t=ne();try{if(h){const s=await f.post("/api/reservation",x,{headers:{Authorization:t}});console.log(s.data.resultData),y(s.data.resultData),M(s.data.resultData)}else{const s=await f.post("/api/order/with-detail",x,{headers:{Authorization:t}});console.log(s.data.resultData),y(s.data.resultData),M(s.data.resultData)}alert(`${C}에 예약이 완료 되었습니다.`),b("/user")}catch(s){console.log(s)}},B=()=>{switch(n.categoryId){case 1:return"한식";case 2:return"중식";case 3:return"일식";default:return"기타"}},E=t=>{const s=[...c];s[t].menuCount+=1,l(s);const o=[...d];o[t].menuCount+=1,p(o)},Y=t=>{const s=[...c];s[t].menuCount>1&&(s[t].menuCount-=1,l(s));const o=[...d];o[t].menuCount>1&&(o[t].menuCount-=1,p(o))};return r.useEffect(()=>{N(),console.log(m)},[]),r.useEffect(()=>{const t=window.sessionStorage.getItem("userId");if(h){const o=`${oe(new Date).format("YYYY-MM-DD")} ${C}`;console.log("현재 시간",o),console.log(d),D({userId:parseInt(t),restaurantId:parseInt(m),reservationTime:o,reservationPeopleCount:P,userPhone:T.phone.replace(/-/g,""),menuList:[...d]})}else D({userId:t,restaurantId:parseInt(m),orderDetails:[...d]})},[d]),r.useEffect(()=>{console.log("포스트 데이터",x)},[x]),e.jsxs("div",{style:{height:"100vh"},children:[e.jsx("img",{src:`http://112.222.157.156:5222/pic/restaurant/${n.restaurantId}/${(w=n.restaurantPics)==null?void 0:w.filePath}`,alt:"가게 이미지",style:{width:"100%",height:260,position:"relative"}}),e.jsx(ae,{children:e.jsx(te,{style:{width:"100%",height:"100%"},onClick:()=>b(-1)})}),e.jsxs(re,{children:[e.jsxs("div",{children:[(k=n==null?void 0:n.restaurantAddress)==null?void 0:k.match(/^(?:대구광역시|대구)\s*(.+)/)[1]," ",e.jsx("span",{children:"I"})," ",B()]}),e.jsx("h1",{children:n.restaurantName}),e.jsx("div",{children:n.restaurantDescription}),e.jsxs("h2",{children:[e.jsx(se,{}),n.restaurantAddress]}),e.jsxs("h2",{style:{marginTop:10},children:[e.jsx(J,{}),"매장 연락처 : ",n.restaurantNumber]})]}),e.jsx(j,{}),e.jsxs(ie,{children:[e.jsx("h1",{children:"메뉴 선택"}),R.map((t,s)=>e.jsx("div",{children:t.menuList.map(o=>e.jsxs("div",{children:[e.jsxs(ce,{children:[e.jsx("img",{src:`http://112.222.157.156:5222/pic/menu/${o.menuId}/${o==null?void 0:o.menuPic}`,alt:"메뉴 이미지"}),e.jsxs("div",{onClick:()=>console.log(),children:[e.jsx("div",{children:o.menuName}),e.jsxs("span",{children:[o.price.toLocaleString("ko-KR"),"원"]})]}),e.jsx("div",{style:{position:"absolute",right:20},children:c.some(a=>a.menuId===o.menuId)?e.jsx(Q,{onClick:()=>{l(a=>a.filter(g=>g.menuId!==o.menuId)),p(a=>a.filter(g=>g.menuId!==o.menuId)),u(!0)}}):e.jsx(V,{onClick:()=>{l(a=>[...a,{menuId:o.menuId,menuName:o.menuName,price:o.price,menuCount:1}]),p(a=>[...a,{menuId:o.menuId,menuCount:1}]),u(!0)}})})]}),e.jsx(j,{style:{height:1,backgroundColor:"#eee",marginBottom:10}})]},o.menuId))},s))]}),e.jsxs(de,{children:[e.jsx(S,{children:I?e.jsx(W,{style:{color:"#6F6F6F"},onClick:()=>u(!1)}):e.jsx(X,{style:{color:"#6F6F6F"},onClick:()=>u(!0)})}),I&&e.jsxs("div",{children:[c.map((t,s)=>e.jsxs("div",{children:[e.jsxs(v,{children:[e.jsx("p",{children:t.menuName}),e.jsx("div",{children:t.price.toLocaleString()})]}),e.jsxs(v,{style:{margin:"5px 30px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:15},children:[e.jsx("p",{onClick:()=>Y(s),children:e.jsx(Z,{})}),e.jsx("p",{children:t.menuCount}),e.jsx("p",{onClick:()=>E(s),children:e.jsx(ee,{})})]}),e.jsxs("div",{children:[(t.menuCount*t.price).toLocaleString("ko-KR"),"원"]})]})]},s)),e.jsx(j,{style:{height:1,backgroundColor:"#eee",margin:"10px 0"}}),e.jsxs(v,{style:{marginBottom:10},children:[e.jsxs("p",{children:["총 수량 ",c.reduce((t,s)=>t+s.menuCount,0),"개"]}),e.jsxs("p",{children:["총"," ",c.reduce((t,s)=>t+s.menuCount*s.price,0).toLocaleString("ko-KR"),"원"]})]}),e.jsx(S,{children:e.jsx("button",{onClick:()=>$(),children:h?"예약하기":"결제하기"})})]})]})]})}export{Ie as default};
