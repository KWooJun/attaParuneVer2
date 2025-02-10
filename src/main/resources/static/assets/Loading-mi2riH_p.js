import{r as s,j as b}from"./index-DgvhuQLs.js";import{n as S}from"./emotion-styled.browser.esm-BHLZPLA4.js";import{p as E,a as z,c as y}from"./animation-DR5N1PjO.js";var a=function(){return a=Object.assign||function(e){for(var o,r=1,n=arguments.length;r<n;r++){o=arguments[r];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},a.apply(this,arguments)},L=function(e,o){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&o.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)o.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r},h=z("MoonLoader","100% {transform: rotate(360deg)}","moon");function P(e){var o=e.loading,r=o===void 0?!0:o,n=e.color,t=n===void 0?"#000000":n,d=e.speedMultiplier,u=d===void 0?1:d,p=e.cssOverride,O=p===void 0?{}:p,f=e.size,x=f===void 0?60:f,j=L(e,["loading","color","speedMultiplier","cssOverride","size"]),m=E(x),i=m.value,l=m.unit,c=Math.round(i/7),w=a({display:"inherit",position:"relative",width:"".concat("".concat(i+c*2).concat(l)),height:"".concat("".concat(i+c*2).concat(l)),animation:"".concat(h," ").concat(.6/u,"s 0s infinite linear"),animationFillMode:"forwards"},O),g=function(v){return{width:y(v),height:y(v),borderRadius:"100%"}},M=a(a({},g(c)),{backgroundColor:"".concat(t),opacity:"0.8",position:"absolute",top:"".concat("".concat(i/2-c/2).concat(l)),animation:"".concat(h," ").concat(.6/u,"s 0s infinite linear"),animationFillMode:"forwards"}),_=a(a({},g(i)),{border:"".concat(c,"px solid ").concat(t),opacity:"0.1",boxSizing:"content-box",position:"absolute"});return r?s.createElement("span",a({style:w},j),s.createElement("span",{style:M}),s.createElement("span",{style:_})):null}const k=S.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
`,C=()=>b.jsx(k,{children:b.jsx(P,{size:200,speedMultiplier:.3})});export{C as L};
