(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{147:function(e,t,a){"use strict";var n=a(0),c=a(5),r=a(1);const i=c.css`
  ::after {
    display: none;
  }
`;t.a=e=>{var t;const a=Object(n.useRef)(null);return Object(c.jsx)("div",{className:"form-group"},Object(c.jsx)("label",{htmlFor:"select-file"},Object(r.a)("skinlib.upload.select-file")),Object(c.jsx)("div",{className:"input-group"},Object(c.jsx)("div",{className:"custom-file"},Object(c.jsx)("input",{type:"file",className:"custom-file-input",id:"select-file",accept:e.accept,title:Object(r.a)("skinlib.upload.select-file"),ref:a,onChange:e.onChange}),Object(c.jsx)("label",{className:"custom-file-label",css:i},null===(t=e.file)||void 0===t?void 0:t.name)),Object(c.jsx)("div",{className:"input-group-append"},Object(c.jsx)("button",{className:"btn btn-default",onClick:()=>{a.current.click()}},Object(r.a)("skinlib.upload.select-file")))))}},152:function(e,t,a){"use strict";function n(e,t,a,n,c){const r=e.getImageData(t,a,n,c);for(let e=0;e<n;e++)for(let t=0;t<c;t++){const a=4*(e+t*n);if(255!==r.data[a+3])return!0}return!1}function c(e){return e/64}function r(e,t){const a=c(t),r=(t,n,c,r,i,l,s)=>(function(e,t,a,n,c,r,i,l){const s=e.getImageData(t,a,n,c);if(l)for(let e=0;e<c;e++)for(let t=0;t<n/2;t++){const a=4*(t+e*n),c=4*(n-t-1+e*n),r=s.data[a],i=s.data[a+1],l=s.data[a+2],o=s.data[a+3],u=s.data[c],d=s.data[c+1],m=s.data[c+2],f=s.data[c+3];s.data[a]=u,s.data[a+1]=d,s.data[a+2]=m,s.data[a+3]=f,s.data[c]=r,s.data[c+1]=i,s.data[c+2]=l,s.data[c+3]=o}e.putImageData(s,r,i)})(e,t*a,n*a,c*a,r*a,i*a,l*a,s);!function(e,t){if(!n(e,0,0,t,t/2)){const a=c(t),n=(t,n,c,r)=>e.clearRect(t*a,n*a,c*a,r*a);n(40,0,8,8),n(48,0,8,8),n(32,8,8,8),n(40,8,8,8),n(48,8,8,8),n(56,8,8,8)}}(e,t),r(4,16,4,4,20,48,!0),r(8,16,4,4,24,48,!0),r(0,20,4,12,24,52,!0),r(4,20,4,12,20,52,!0),r(8,20,4,12,16,52,!0),r(12,20,4,12,28,52,!0),r(44,16,4,4,36,48,!0),r(48,16,4,4,40,48,!0),r(40,20,4,12,40,52,!0),r(44,20,4,12,36,52,!0),r(48,20,4,12,32,52,!0),r(52,20,4,12,44,52,!0)}function i(e,t){let a=!1;if(t.width!==t.height){if(t.width!==2*t.height)throw new Error(`Bad skin size: ${t.width}x${t.height}`);a=!0}const n=e.getContext("2d");if(a){const a=t.width;e.width=a,e.height=a,n.clearRect(0,0,a,a),n.drawImage(t,0,0,a,a/2),r(n,a)}else e.width=t.width,e.height=t.height,n.clearRect(0,0,t.width,t.height),n.drawImage(t,0,0,e.width,e.height)}function l(e,t){const a=function(e){if(e.width===2*e.height)return e.width/64;if(17*e.width==22*e.height)return e.width/22;if(11*e.width==23*e.height)return e.width/46;throw new Error(`Bad cape size: ${e.width}x${e.height}`)}(t);e.width=64*a,e.height=32*a;const n=e.getContext("2d");n.clearRect(0,0,e.width,e.height),n.drawImage(t,0,0,t.width,t.height)}function s(e){const t=c(e.width),a=e.getContext("2d"),r=(e,c,r,i)=>n(a,e*t,c*t,r*t,i*t);return r(50,16,2,4)||r(54,20,2,12)||r(42,48,2,4)||r(46,52,2,12)?"slim":"default"}a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return s}))},153:function(e,t,a){"use strict";async function n(e){const t=document.createElement("img");return new Promise((a,n)=>{t.onload=()=>a(t),t.onerror=n,"string"==typeof e?t.src=e:(t.crossOrigin=void 0===e.crossOrigin?"anonymous":e.crossOrigin,void 0!==e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.src=e.src)})}a.d(t,"a",(function(){return n}))},225:function(e,t){},226:function(e,t,a){"use strict";a(153),a(152)},31:function(e,t,a){t.hot=function(e){return e}},37:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0),c=a(2);function r(){Object(n.useEffect)(()=>{Object(c.a)("mounted")},[])}},38:function(e,t,a){"use strict";var n,c;a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return c})),function(e){e[e.Banned=-1]="Banned",e[e.Normal=0]="Normal",e[e.Admin=1]="Admin",e[e.SuperAdmin=2]="SuperAdmin"}(n||(n={})),function(e){e.Steve="steve",e.Alex="alex",e.Cape="cape"}(c||(c={}))},413:function(e,t,a){"use strict";var n=a(225);a.o(n,"loadSkinToCanvas")&&a.d(t,"loadSkinToCanvas",(function(){return n.loadSkinToCanvas}));var c=a(152);a.d(t,"loadSkinToCanvas",(function(){return c.c}));a(153),a(226)},441:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),i=a.n(r),l=a(31),s=a(1),o=a(50),u=a(37),d=a(72),m=a(6),f=a(4),b=a(413);function p(e,t,a){const n=e.getImageData(t,a,1,1);return 0===n.data[0]&&0===n.data[1]&&0===n.data[2]}var h=a(38),g=a(11),v=a(147),j=a(61);const w=c.a.lazy(()=>Promise.all([a.e(0),a.e(3)]).then(a.bind(null,154)));t.default=Object(l.hot)(()=>{var e;const[t,a]=Object(n.useState)(""),[r,l]=Object(n.useState)(h.a.Steve),[O,E]=Object(n.useState)(!1),[x,N]=Object(n.useState)(!1),[k,y]=Object(n.useState)(null),[C,S]=Object(n.useState)(""),I=Object(o.a)("rule"),P=Object(o.a)("contentPolicy"),A=Object(o.a)("privacyNotice"),R=Object(o.a)("award"),T=Object(o.a)("score",0),F=Object(o.a)("scorePublic"),B=Object(o.a)("scorePrivate"),D=Object(o.a)("closetItemCost"),$=Object(d.a)("#previewer");Object(u.a)();const z=e=>{l(e.target.value)},_=O?B:F,L=null!==(e=null==k?void 0:k.size)&&void 0!==e?e:0,U=Math.ceil(L/1024)*_+D;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"card card-primary"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"texture-name"},Object(s.a)("skinlib.upload.texture-name")),c.a.createElement("input",{className:"form-control",id:"texture-name",type:"text",placeholder:I,value:t,onChange:e=>{a(e.target.value)}})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,Object(s.a)("skinlib.upload.texture-type")),c.a.createElement("br",null),c.a.createElement("label",{className:"mr-4"},c.a.createElement("input",{type:"radio",className:"mr-1",name:"type",value:"steve",checked:r===h.a.Steve,onChange:z}),"Steve"),c.a.createElement("label",{className:"mr-4"},c.a.createElement("input",{type:"radio",className:"mr-1",name:"type",value:"alex",checked:r===h.a.Alex,onChange:z}),"Alex"),c.a.createElement("label",{className:"mr-4"},c.a.createElement("input",{type:"radio",className:"mr-1",name:"type",value:"cape",checked:r===h.a.Cape,onChange:z}),Object(s.a)("general.cape"))),c.a.createElement(v.a,{file:k,accept:"image/png, image/x-png",onChange:async e=>{const n=e.target.files,[c]=n;if(c){y(c),!t&&c.name.endsWith(".png")&&a(c.name.slice(0,c.name.length-4));const e=URL.createObjectURL(c);S(e),r!==h.a.Cape&&l(await function(e){return new Promise(t=>{const a=new Image;a.src=e,a.onload=()=>{if(a.width!==a.height)return void t(!1);const e=document.createElement("canvas");Object(b.loadSkinToCanvas)(e,a);const n=e.width/64,c=e.getContext("2d");if(c){for(let e=46*n;e<48*n;e+=1)for(let a=52*n;a<64*n;a+=1)if(!p(c,e,a))return void t(!1);t(!0)}else t(!1)}})}(e)?h.a.Alex:h.a.Steve)}}}),P&&c.a.createElement("div",{className:"callout callout-warning",dangerouslySetInnerHTML:{__html:P}})),c.a.createElement("div",{className:"card-footer"},c.a.createElement("div",{className:"container px-0 d-flex justify-content-between"},c.a.createElement("label",{className:"mt-2",htmlFor:"is-private",title:Object(s.a)("skinlib.upload.privacy-notice")},c.a.createElement("input",{type:"checkbox",id:"is-private",className:"mr-1",checked:O,onChange:e=>{E(e.target.checked)}}),Object(s.a)("skinlib.upload.set-as-private")),c.a.createElement("button",{className:"btn btn-success",disabled:x,onClick:async()=>{if(!k)return void f.b.error(Object(s.a)("skinlib.emptyUploadFile"));if(!t)return void f.b.error(Object(s.a)("skinlib.emptyTextureName"));if("image/png"!==k.type&&"image/x-png"!==k.type)return void f.b.error(Object(s.a)("skinlib.fileExtError"));const e=new FormData;e.append("name",t),e.append("type",r),e.append("file",k,k.name),e.append("public",O?"0":"1"),N(!0);const{code:a,message:n,data:{tid:c}={tid:0}}=await m.c(g.a.texture.upload(),e);if(N(!1),0===a)window.location.href=blessing.base_url+g.a.skinlib.show(c);else if(2===a)try{await Object(f.a)({mode:"confirm",text:n,okButtonText:Object(s.a)("user.viewInSkinlib")}),window.location.href=blessing.base_url+g.a.skinlib.show(c)}catch(e){}else f.b.error(n)}},x?c.a.createElement(c.a.Fragment,null,c.a.createElement("i",{className:"fas fa-spinner fa-spin mr-1"}),c.a.createElement("span",null,Object(s.a)("skinlib.uploading"))):Object(s.a)("skinlib.upload.button"))),k&&c.a.createElement("div",{className:`callout callout-${T>U?"success":"danger"} mt-3`},c.a.createElement("div",null,Object(s.a)("skinlib.upload.cost",{score:U})),c.a.createElement("div",null,Object(s.a)("user.cur-score"),c.a.createElement("span",{className:"ml-1"},T))),O&&c.a.createElement("div",{className:"callout callout-info mt-3"},A),!O&&R>0&&c.a.createElement("div",{className:"callout callout-success mt-3"},Object(s.a)("skinlib.upload.award",{score:R})))),$&&i.a.createPortal(c.a.createElement(c.a.Suspense,{fallback:c.a.createElement(j.a,null)},c.a.createElement(w,{skin:r!==h.a.Cape?C:void 0,cape:r===h.a.Cape?C:void 0,isAlex:r===h.a.Alex})),$))})},50:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0);function c(e,t){const[a,c]=Object(n.useState)(t);return Object(n.useEffect)(()=>{c(blessing.extra[e])},[]),a}},61:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(1);t.a=()=>c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("h3",{className:"card-title"},c.a.createElement("span",null,Object(r.a)("general.texturePreview"))))),c.a.createElement("div",{className:"card-body"}))},72:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0);function c(e){const t=Object(n.useRef)(null);return Object(n.useEffect)(()=>{const a=document.querySelector(e),n=document.createElement("div");return t.current=n,a.appendChild(n),()=>{a.removeChild(n),t.current=null}},[]),t.current}}}]);