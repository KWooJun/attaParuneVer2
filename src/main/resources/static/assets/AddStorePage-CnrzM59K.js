import{u as oe,r as d,j as e,L as de,n as g,S as z}from"./index-8lJcAOoD.js";import{o as le,c as ce,e as x,a as c}from"./index.esm-TGsLhwhb.js";import{a as $}from"./index-CHcUfME0.js";import{h as pe}from"./index.esm-D-cqcwYI.js";import{u as ue}from"./index.esm-CSfWQ_HH.js";import{I as xe}from"./index-DAM17y8Z.js";import{u as me}from"./useModal-DczTk5yH.js";import{L as he,H as ge,C as fe,F as ye,T as je,I as o,Y as l,S as b,a as be}from"./loginStyle-kY_aPp4U.js";import{F as Ce}from"./index-D9TvFRBQ.js";import"./iconBase-DY5zKqN8.js";const H=g.button`
  color: #fff;
  border-radius: 5px;
  width: 120px;

  @media (max-width: 430px) {
    font-size: 14px;
    max-width: 80px;
    width: 100%;
    padding: 10px 0;
  }
  @media (max-width: 1400px) and (min-width: 431px) {
    width: 120px;
    padding: 15px 0;
    font-size: 20px;
  }
`,C=g.input`
  border-bottom: 1px solid #bababa;
  color: #bababa;
  @media (max-width: 430px) {
    margin-right: 20px;
    max-width: 220px;
    width: 100%;
    padding: 10px 0;
  }
  @media (max-width: 1400px) and (min-width: 431px) {
    margin-right: 30px;
    width: 350px;
    font-size: 24px;
    padding: 15px 0;
  }
`,w=g.div`
  padding: 10px 30px;
  border-radius: 30px;
  background-color: #6f4cdb;
  background-color: #ddd;
  color: #fff;
  cursor: pointer;
`,V=g.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  span {
    padding: 10px 25px;
    font-weight: 700;
    color: #6f4cdb;
  }
  input {
    font-size: 16px;
    background-color: none;
    width: 120px;
    height: 40px;
  }
`,we=ce({adminId:x(),restaurantName:c().required("가게이름은 필수입니다.").min(2,"가게이름은 최소 2자 이상이어야 합니다."),restaurantAddress:c(),businessNumber:c(),restaurantNumber:c().required("전화번호는 필수입니다.").matches(/^\d{10,12}$/,"하이픈을 빼고 10~12자리 숫자만 입력해주세요."),categoryId:x(),operatingHours:c(),restaurantDescription:c().required("상세 설명은 필수입니다."),maxCapacity:x().min(1,"가게 규모는 1 이상이어야 합니다."),lat:x(),lng:x()});function ze(){var D,A,N,B,F;const v=oe(),[L,E]=d.useState(!1),[I,R]=d.useState({}),[p,k]=d.useState({startTime:"10:00",endTime:"22:00"}),[S,f]=d.useState(!1),[q,M]=d.useState(!1),{Modal:O,open:y,close:Y}=me({title:"주소검색"}),{register:i,handleSubmit:K,formState:{errors:u},watch:n,setValue:r}=ue({mode:"all",resolver:le(we)}),U=async t=>{try{await $.post("/api/restaurant",t),z.fire({title:"가게 등록이 완료 되었습니다.",icon:"success",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}).then(s=>{s.isConfirmed&&v("/store")})}catch(s){console.log(s)}},P=t=>{S?(console.log(t),E(s=>!s),U(t)):z.fire({title:"사업자 진위여부를 확인해주세요.",icon:"error",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1})},G=n("adminId"),J=n("restaurantName"),Q=n("restaurantAddress"),m=n("businessNumber"),W=n("restaurantNumber"),h=n("categoryId"),X=n("operatingHours"),Z=n("restaurantDescription"),_=n("maxCapacity"),ee=n("lat"),te=n("lng"),T=G&&J&&Q&&m&&W&&h&&X&&Z&&_&&ee&&te,se=async()=>{M(!0);try{const s=(await $.post(`/api/user/company/status?bNo=${m}`)).data.resultData;s.bstt==="계속사업자"||s.bstt==="신규사업자"?f(!0):f(!1)}catch(t){console.log(t)}},ne=async t=>{try{const a=await(await fetch(`https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(t)}`,{headers:{Authorization:"KakaoAK c39062d8559862a0fe376de133d3af0c"}})).json();if(a.documents.length>0){const{x:j,y:ae}=a.documents[0];r("lat",ae),r("lng",j)}}catch(s){console.error("Error fetching coordinates:",s)}},ie=async t=>{console.log(t);let s=t.address,a="";const j=t.zonecode;t.addressType==="R"&&(t.bname!==""&&(a+=t.bname),t.buildingName!==""&&(a+=a!==""?`, ${t.buildingName}`:t.buildingName),s+=a!==""?` (${a})`:""),await ne(s),Y(),R({fullAddress:s,zoneCode:j}),console.log(s),r("restaurantAddress",s)};d.useEffect(()=>{r("operatingHours",`${p.startTime} ~ ${p.endTime}`),console.log("운영시간 ",n("operatingHours"))},[p]);const re=sessionStorage.getItem("adminId");return d.useEffect(()=>{r("adminId",re),r("categoryId",1)},[]),e.jsxs("div",{children:[e.jsxs(he,{style:{position:"relative"},children:[e.jsx(ge,{children:e.jsx(fe,{children:e.jsx(xe,{style:{width:"100%",height:"100%",cursor:"pointer"},onClick:()=>v("/")})})}),e.jsx(ye,{children:e.jsxs("form",{onSubmit:K(P),children:[e.jsx("input",{type:"tel",style:{position:"absolute",left:"-5000px"},...i("adminId")}),e.jsx("input",{type:"tel",...i("lat"),style:{position:"absolute",left:"-5000px"}}),e.jsx("input",{type:"tel",...i("lng"),style:{position:"absolute",left:"-5000px"}}),e.jsx(je,{children:"온라인 입점신청서"}),e.jsxs(o,{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:20,width:500},children:[e.jsx(C,{type:"text",placeholder:"사업자등록번호",...i("businessNumber")}),e.jsx(H,{type:"button",style:{backgroundColor:m?"#6F4CDB":"#ddd"},disabled:!m,onClick:()=>{se()},children:"번호조회"})]}),q?S?e.jsxs(l,{style:{color:"#888"},children:[e.jsx(Ce,{}),"입점신청 가능한 사업자번호입니다."]}):e.jsx(l,{style:{color:"red"},children:"사업자 번호를 확인해 주세요."}):e.jsx(e.Fragment,{})]}),e.jsxs(o,{children:[e.jsx(b,{type:"text",placeholder:"가게 이름",...i("restaurantName")}),e.jsx(l,{children:(D=u.restaurantName)==null?void 0:D.message})]}),e.jsxs(o,{children:[e.jsx(b,{type:"tel",maxLength:12,placeholder:"가게 전화번호",...i("restaurantNumber")}),e.jsx(l,{children:(A=u.restaurantNumber)==null?void 0:A.message})]}),e.jsxs(o,{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:20,width:500},children:[e.jsx(C,{type:"text",placeholder:"가게 주소",value:I?I.fullAddress:"",onClick:()=>y(),...i("restaurantAddress")}),e.jsx(H,{type:"button",style:{backgroundColor:"#6F4CDB"},onClick:()=>y(),children:"주소찾기"})]}),e.jsx(l,{children:(N=u.restaurantAddress)==null?void 0:N.message})]}),e.jsxs(o,{children:[e.jsx(b,{type:"text",placeholder:"가게 상세설명",...i("restaurantDescription")}),e.jsx(l,{children:(B=u.restaurantDescription)==null?void 0:B.message})]}),e.jsxs(o,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:500,fontSize:24},children:[e.jsx("div",{style:{fontSize:24},children:"가게 규모 : "}),e.jsx(C,{type:"number",placeholder:"0",style:{width:300,textAlign:"right",paddingRight:20},...i("maxCapacity",{setValueAs:t=>t===""?0:t})}),e.jsx("div",{children:"명"})]}),e.jsx(l,{children:(F=u.maxCapacity)==null?void 0:F.message})]}),e.jsx(o,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:20,width:500},children:[e.jsx("div",{style:{fontSize:24},children:"카테고리 선택"}),e.jsxs("div",{style:{display:"flex",gap:20},children:[e.jsx(w,{onClick:()=>r("categoryId",1),style:{backgroundColor:h===1&&"#6F4CDB"},children:"한식"}),e.jsx(w,{onClick:()=>r("categoryId",2),style:{backgroundColor:h===2&&"#6F4CDB"},children:"중식"}),e.jsx(w,{onClick:()=>r("categoryId",3),style:{backgroundColor:h===3&&"#6F4CDB"},children:"일식"})]})]})}),e.jsxs(o,{children:[e.jsx("div",{style:{fontSize:24,textAlign:"left"},children:"운영시간"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:20,width:500},children:[e.jsxs(V,{children:[e.jsx("span",{children:"오픈시간"}),e.jsx("input",{type:"time",value:p.startTime,onChange:t=>k(s=>({...s,startTime:t.target.value}))})]}),e.jsxs(V,{children:[e.jsx("span",{children:"마감시간"}),e.jsx("input",{type:"time",value:p.endTime,onChange:t=>k(s=>({...s,endTime:t.target.value}))})]})]})]}),e.jsx("div",{style:{marginLeft:20,marginRight:20,marginTop:40},children:e.jsx(be,{type:"submit",style:{backgroundColor:T?"#6F4CDB":"#ddd"},disabled:!T,children:"확인"})})]})})]}),y?e.jsx(O,{children:e.jsx(pe,{onComplete:t=>ie(t)})}):e.jsx(e.Fragment,{}),L&&e.jsx(de,{})]})}export{ze as default};
