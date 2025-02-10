import{r as s,j as e}from"./index-DgvhuQLs.js";import{n as i}from"./emotion-styled.browser.esm-BHLZPLA4.js";import{a as S}from"./index-BDdqncIb.js";import{F as q}from"./index-B-_s05js.js";import{a as H}from"./index-Bonc72oP.js";import{S as K}from"./SideBar-DE36Ozw7.js";import{o as Q,c as X,d as Y,e as M,a as $}from"./index.esm-B93EDcIm.js";import{a as p}from"./index-CHcUfME0.js";import{u as Z}from"./index.esm-ADTgdix5.js";import{g as _}from"./cookie-BNspsx3t.js";import{u as ee}from"./useModal-CGuKP8PO.js";import"./iconBase-BvS4BhiP.js";import"./index-C8lUTx5V.js";import"./index-CmTjqX1u.js";import"./index-h4UF_XZQ.js";import"./roleAtom-JDXEFqt3.js";const te=i.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  background-color: #eee;
  max-height: 100vh;
  height: auto;
  overflow: hidden;
`,ae=i.div`
  flex-wrap: wrap;
  padding: 30px 30px;
  padding-bottom: 30px;
  background-color: #fff;
  border-radius: 10px;
  width: 750px;
  max-height: calc(100vh - 60px);
  overflow-y: auto;
  box-shadow:
    0px 20px 25px -5px rgba(0, 0, 0, 0.1),
    0px 10px 10px -5px rgba(0, 0, 0, 0.04);
`,k=i.div`
  font-size: 24px;
  font-weight: 700;
`,re=i.div`
  box-shadow:
    0px 20px 25px -5px rgba(0, 0, 0, 0.1),
    0px 10px 10px -5px rgba(0, 0, 0, 0.04);
  width: 320px;
  background-color: #fff;
`,ie=i.div`
  margin: 10px 0;
  width: calc(33.33% - 26.66px);
  height: 260px;
`,P=i.img`
  width: 200px;
  height: 200px;
  border-radius: 5px;
  background-color: #eee;
`,oe=i.div`
  margin-top: 5px;
  font-size: 20px;
`,se=i.div`
  margin-top: 5px;
  font-size: 14px;
  font-weight: 700;
`,B=i.div`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  cursor: pointer;
`,F=i.div`
  margin: 10px auto;
  img {
    display: block;
    width: 200px;
    height: 200px;
    border-radius: 5px;
    background-color: #eee;
    position: relative;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
  }
  span {
    display: block;
    width: 60px;
    text-align: left;
  }
  input {
    width: 120px;
  }
  button {
    margin-top: 20px;
    padding: 5px 20px;
    color: #fff;
    background-color: #6f4cdb;
    border-radius: 5px;
  }
  p {
    width: 25px;
    height: 25px;
    position: absolute;
    right: 96px;
    bottom: 37%;
    color: #6f4cdb;
    background-color: #fff;
    border-radius: 15px;
  }
`,ne=X({restaurantId:M(),categoryName:$(),menuName:$(),price:M(),pic:Y()});function Ce(){var N;const f=sessionStorage.getItem("restaurantId"),l=_(),[d,E]=s.useState(!1),[n,m]=s.useState({modal1:!1,modal2:!1}),[L,z]=s.useState([]),[y,j]=s.useState(),[u,A]=s.useState({}),[g,R]=s.useState({}),[T,O]=s.useState(),{register:o,handleSubmit:b,setValue:r}=Z({mode:"onChange",resolver:Q(ne)}),J=()=>{if(n.modal1)return"메뉴 추가하기";if(n.modal2)return"메뉴 수정하기"},{Modal:v,open:I}=ee({title:J()}),x=async()=>{try{const t=(await p.get(`/api/restaurant?restaurantId=${f}`)).data.resultData;A(t),z(t.menuCateList)}catch(a){console.log(a)}},U=async(a,t)=>{try{await p.delete(`/api/restaurant/menu?categoryId=${a}&menuId=${t}`,{headers:{Authorization:`Bearer ${l}`,"Content-Type":"multipart/form-data"}}),alert("메뉴가 삭제 되었습니다."),x()}catch(c){console.log(c)}},G=async a=>{try{await p.post("/api/restaurant/menu",a,{headers:{Authorization:`Bearer ${l}`,"Content-Type":"multipart/form-data"}}),m({}),alert("메뉴가 추가되었습니다."),x()}catch(t){console.log(a),console.log(t)}},V=async a=>{try{await p.patch("/api/pic/restaurant/menu",a,{headers:{Authorization:`Bearer ${l}`,"Content-Type":"multipart/form-data"}})}catch(t){console.log(t)}},W=async a=>{try{await p.patch("/api/restaurant/menu",a,{headers:{Authorization:`Bearer ${l}`}}),m({}),alert("메뉴가 수정되었습니다."),x()}catch(t){console.log(t)}},w=a=>{const t=a.target.files[0];t&&(j(URL.createObjectURL(t)),r("pic",[t]))},C=a=>{console.log("폼데이터:",a);const t=new FormData,c={restaurantId:a.restaurantId,categoryName:a.categoryName,menuName:a.menuName,price:a.price};console.log(a.pic),t.append("pic",a.pic[0]),t.append("p",new Blob([JSON.stringify(c)],{type:"application/json"}));const D={menuId:g.menuId,categoryId:g.categoryId,menuName:a.menuName,price:a.price},h=new FormData;h.append("pic",a.pic[0]),h.append("p",new Blob([JSON.stringify({menuId:g.menuId})],{type:"application/json"})),console.log("FormData 확인:",[...t.entries()]),console.log("patchData 확인:",D),console.log("ImgData 확인:",[...h.entries()]),n.modal1?G(t):n.modal2&&(V(h),W(D))};return s.useEffect(()=>{x(),r("restaurantId",f)},[]),e.jsxs("div",{children:[e.jsxs(te,{children:[e.jsx(K,{}),e.jsx("div",{style:{padding:"10px 10px"},children:e.jsx(ae,{className:"scrollbar-hide",children:L.map(a=>e.jsxs("div",{children:[e.jsx(k,{children:a.categoryName}),e.jsx("div",{style:{display:"flex",gap:40,flexWrap:"wrap",marginBottom:30},children:a.menuList.map(t=>e.jsxs(ie,{children:[e.jsx(P,{src:`http://112.222.157.156:5222/pic/menu/${t.menuId}/${t==null?void 0:t.menuPic}`,alt:"없음"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsx(oe,{children:t.menuName}),d?e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5},children:[e.jsx(q,{onClick:()=>{R(c=>({...c,menuId:t.menuId,categoryId:a.categoryId})),O(`http://112.222.157.156:5222/pic/menu/${t.menuId}/${t==null?void 0:t.menuPic}`),m({modal2:!0}),r("categoryName",a.categoryName),r("menuName",t.menuName),r("price",t.price),r("pic",`http://112.222.157.156:5222/pic/menu/${t.menuId}/${t==null?void 0:t.menuPic}`),I()},style:{width:20,height:20,cursor:"pointer"}}),e.jsx(H,{onClick:()=>U(a.categoryId,t.menuId),style:{width:25,height:25,cursor:"pointer"}})]}):e.jsx(e.Fragment,{})]}),e.jsxs(se,{children:[t.price.toLocaleString(),"원"]})]},t.menuId))})]},a.categoryId))})}),e.jsxs(re,{children:[e.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:50},children:e.jsx(P,{style:{borderRadius:100},src:`http://112.222.157.156:5222/pic/restaurant/${u.restaurantId}/${(N=u.restaurantPics)==null?void 0:N.filePath}`,alt:"없음"})}),e.jsx(k,{style:{color:"#B3A1EC",marginLeft:0,textAlign:"center",marginBottom:40},children:u.restaurantName}),e.jsx(B,{onClick:()=>{m({modal1:!0}),r("categoryName",""),r("menuName",""),r("price",""),r("pic",null),j(null),I()},children:"메뉴 추가"}),e.jsx(B,{style:{backgroundColor:d?"#A28CE8":"#fff",color:d?"#fff":"#333"},onClick:()=>E(!d),children:"메뉴 수정"})]})]}),n.modal1&&e.jsx(v,{children:e.jsx(F,{children:e.jsxs("form",{onSubmit:b(C),children:[e.jsx("img",{src:y}),e.jsxs("p",{children:[e.jsx("label",{htmlFor:"menuImg",children:e.jsx(S,{style:{width:"100%",height:"100%"}})}),e.jsx("input",{type:"file",id:"menuImg",className:"opacity-0",accept:"image/png, image/jpeg",...o("pic"),onChange:a=>w(a)})]}),e.jsxs("div",{children:[e.jsx("span",{children:"카테고리"}),e.jsx("input",{type:"text",placeholder:"카테고리 이름",...o("categoryName")})]}),e.jsxs("div",{children:[e.jsx("span",{children:"메뉴명"}),e.jsx("input",{type:"text",placeholder:"메뉴명",...o("menuName")})]}),e.jsxs("div",{children:[e.jsx("span",{children:"메뉴가격"}),e.jsx("input",{type:"number",placeholder:"가격",...o("price")})]}),e.jsx("button",{type:"submit",children:"추가"})]})})}),n.modal2&&e.jsx(v,{children:e.jsx(F,{children:e.jsxs("form",{onSubmit:b(C),children:[e.jsx("img",{src:y||T}),e.jsxs("p",{children:[e.jsx("label",{htmlFor:"menuImg",children:e.jsx(S,{style:{width:"100%",height:"100%"}})}),e.jsx("input",{type:"file",id:"menuImg",className:"opacity-0",accept:"image/png, image/jpeg",...o("pic"),onChange:a=>w(a)})]}),e.jsxs("div",{children:[e.jsx("span",{children:"카테고리"}),e.jsx("input",{type:"text",placeholder:"카테고리 이름",...o("categoryName")})]}),e.jsxs("div",{children:[e.jsx("span",{children:"메뉴명"}),e.jsx("input",{type:"text",placeholder:"메뉴명",...o("menuName")})]}),e.jsxs("div",{children:[e.jsx("span",{children:"메뉴가격"}),e.jsx("input",{type:"number",placeholder:"가격",...o("price")})]}),e.jsx("button",{type:"submit",children:"수정완료"})]})})})]})}export{Ce as default};
