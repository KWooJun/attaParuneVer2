import{u as ae,r as d,j as e}from"./index-DgvhuQLs.js";import{n as g}from"./emotion-styled.browser.esm-BHLZPLA4.js";import{o as oe,c as de,e as m,a as c}from"./index.esm-B93EDcIm.js";import{a as $}from"./index-CHcUfME0.js";import{h as le}from"./index.esm-D0W_YgrV.js";import{u as ce}from"./index.esm-ADTgdix5.js";import{I as pe}from"./index-Bonc72oP.js";import{L as xe}from"./Loading-mi2riH_p.js";import{u as me}from"./useModal-CGuKP8PO.js";import{L as ue,H as he,C as ge,F as ye,T as fe,I as o,Y as l,S as b,a as je}from"./loginStyle-wkVDl0VW.js";import{F as be}from"./index-C8lUTx5V.js";import"./iconBase-BvS4BhiP.js";import"./animation-DR5N1PjO.js";const B=g.button`
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
`,H=g.div`
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
`,Ce=de({adminId:m(),restaurantName:c().required("가게이름은 필수입니다.").min(2,"가게이름은 최소 2자 이상이어야 합니다."),restaurantAddress:c(),businessNumber:c(),restaurantNumber:c().required("전화번호는 필수입니다.").matches(/^\d{10,12}$/,"하이픈을 빼고 10~12자리 숫자만 입력해주세요."),categoryId:m(),operatingHours:c(),restaurantDescription:c().required("상세 설명은 필수입니다."),maxCapacity:m().min(1,"가게 규모는 1 이상이어야 합니다."),lat:m(),lng:m()});function He(){var T,A,N,F,z;const v=ae(),[V,L]=d.useState(!1),[I,E]=d.useState({}),[p,k]=d.useState({startTime:"10:00",endTime:"22:00"}),[S,y]=d.useState(!1),[R,q]=d.useState(!1),{Modal:M,open:f,close:Y}=me({title:"주소검색"}),{register:n,handleSubmit:K,formState:{errors:x},watch:r,setValue:i}=ce({mode:"all",resolver:oe(Ce)}),U=async t=>{try{await $.post("/api/restaurant",t),alert("가게 등록이 완료 되었습니다."),v("/store")}catch(s){console.log(s)}},O=t=>{S?(console.log(t),L(s=>!s),U(t)):alert("사업자 진위여부를 확인해주세요.")},P=r("adminId"),G=r("restaurantName"),J=r("restaurantAddress"),u=r("businessNumber"),Q=r("restaurantNumber"),h=r("categoryId"),W=r("operatingHours"),X=r("restaurantDescription"),Z=r("maxCapacity"),_=r("lat"),ee=r("lng"),D=P&&G&&J&&u&&Q&&h&&W&&X&&Z&&_&&ee,te=async()=>{q(!0);try{const s=(await $.post(`/api/user/company/status?bNo=${u}`)).data.resultData;s.bstt==="계속사업자"||s.bstt==="신규사업자"?y(!0):y(!1)}catch(t){console.log(t)}},se=async t=>{try{const a=await(await fetch(`https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(t)}`,{headers:{Authorization:"KakaoAK c39062d8559862a0fe376de133d3af0c"}})).json();if(a.documents.length>0){const{x:j,y:ie}=a.documents[0];i("lat",ie),i("lng",j)}}catch(s){console.error("Error fetching coordinates:",s)}},re=async t=>{console.log(t);let s=t.address,a="";const j=t.zonecode;t.addressType==="R"&&(t.bname!==""&&(a+=t.bname),t.buildingName!==""&&(a+=a!==""?`, ${t.buildingName}`:t.buildingName),s+=a!==""?` (${a})`:""),await se(s),Y(),E({fullAddress:s,zoneCode:j}),console.log(s),i("restaurantAddress",s)};d.useEffect(()=>{i("operatingHours",`${p.startTime} ~ ${p.endTime}`),console.log("운영시간 ",r("operatingHours"))},[p]);const ne=sessionStorage.getItem("adminId");return d.useEffect(()=>{i("adminId",ne),i("categoryId",1)},[]),e.jsxs("div",{children:[e.jsxs(ue,{style:{position:"relative"},children:[e.jsx(he,{children:e.jsx(ge,{children:e.jsx(pe,{style:{width:"100%",height:"100%",cursor:"pointer"},onClick:()=>v(-1)})})}),e.jsx(ye,{children:e.jsxs("form",{onSubmit:K(O),children:[e.jsx("input",{type:"tel",style:{position:"absolute",left:"-5000px"},...n("adminId")}),e.jsx("input",{type:"tel",...n("lat"),style:{position:"absolute",left:"-5000px"}}),e.jsx("input",{type:"tel",...n("lng"),style:{position:"absolute",left:"-5000px"}}),e.jsx(fe,{children:"온라인 입점신청서"}),e.jsxs(o,{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:20,width:500},children:[e.jsx(C,{type:"text",placeholder:"사업자등록번호",...n("businessNumber")}),e.jsx(B,{type:"button",style:{backgroundColor:u?"#6F4CDB":"#ddd"},disabled:!u,onClick:()=>{te()},children:"번호조회"})]}),R?S?e.jsxs(l,{style:{color:"#888"},children:[e.jsx(be,{}),"입점신청 가능한 사업자번호입니다."]}):e.jsx(l,{style:{color:"red"},children:"사업자 번호를 확인해 주세요."}):e.jsx(e.Fragment,{})]}),e.jsxs(o,{children:[e.jsx(b,{type:"text",placeholder:"가게 이름",...n("restaurantName")}),e.jsx(l,{children:(T=x.restaurantName)==null?void 0:T.message})]}),e.jsxs(o,{children:[e.jsx(b,{type:"tel",maxLength:12,placeholder:"가게 전화번호",...n("restaurantNumber")}),e.jsx(l,{children:(A=x.restaurantNumber)==null?void 0:A.message})]}),e.jsxs(o,{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:20,width:500},children:[e.jsx(C,{type:"text",placeholder:"가게 주소",value:I?I.fullAddress:"",onClick:()=>f(),...n("restaurantAddress")}),e.jsx(B,{type:"button",style:{backgroundColor:"#6F4CDB"},onClick:()=>f(),children:"주소찾기"})]}),e.jsx(l,{children:(N=x.restaurantAddress)==null?void 0:N.message})]}),e.jsxs(o,{children:[e.jsx(b,{type:"text",placeholder:"가게 상세설명",...n("restaurantDescription")}),e.jsx(l,{children:(F=x.restaurantDescription)==null?void 0:F.message})]}),e.jsxs(o,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:500,fontSize:24},children:[e.jsx("div",{style:{fontSize:24},children:"가게 규모 : "}),e.jsx(C,{type:"number",placeholder:"0",style:{width:300,textAlign:"right",paddingRight:20},...n("maxCapacity",{setValueAs:t=>t===""?0:t})}),e.jsx("div",{children:"명"})]}),e.jsx(l,{children:(z=x.maxCapacity)==null?void 0:z.message})]}),e.jsx(o,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:20,width:500},children:[e.jsx("div",{style:{fontSize:24},children:"카테고리 선택"}),e.jsxs("div",{style:{display:"flex",gap:20},children:[e.jsx(w,{onClick:()=>i("categoryId",1),style:{backgroundColor:h===1&&"#6F4CDB"},children:"한식"}),e.jsx(w,{onClick:()=>i("categoryId",2),style:{backgroundColor:h===2&&"#6F4CDB"},children:"중식"}),e.jsx(w,{onClick:()=>i("categoryId",3),style:{backgroundColor:h===3&&"#6F4CDB"},children:"일식"})]})]})}),e.jsxs(o,{children:[e.jsx("div",{style:{fontSize:24,textAlign:"left"},children:"운영시간"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:20,width:500},children:[e.jsxs(H,{children:[e.jsx("span",{children:"오픈시간"}),e.jsx("input",{type:"time",value:p.startTime,onChange:t=>k(s=>({...s,startTime:t.target.value}))})]}),e.jsxs(H,{children:[e.jsx("span",{children:"마감시간"}),e.jsx("input",{type:"time",value:p.endTime,onChange:t=>k(s=>({...s,endTime:t.target.value}))})]})]})]}),e.jsx("div",{style:{marginLeft:20,marginRight:20,marginTop:40},children:e.jsx(je,{type:"submit",style:{backgroundColor:D?"#6F4CDB":"#ddd"},disabled:!D,children:"확인"})})]})})]}),f?e.jsx(M,{children:e.jsx(le,{onComplete:t=>re(t)})}):e.jsx(e.Fragment,{}),V&&e.jsx(xe,{})]})}export{He as default};
