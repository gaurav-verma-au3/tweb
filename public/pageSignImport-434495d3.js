import{a as o,A as s,_ as r,S as m}from"./index-4dc57066.js";import{p as h}from"./putPreloader-4f534c85.js";import{P as d}from"./page-ba71be4f.js";let i;const g=async()=>{const{dcId:e,token:u,tgAddr:n}=i;let a;try{o.managers.apiManager.setBaseDcId(e);const t=await o.managers.apiManager.invokeApi("auth.importWebTokenAuthorization",{api_id:s.id,api_hash:s.hash,web_auth_token:u},{dcId:e,ignoreErrors:!0});t._==="auth.authorization"&&(o.managers.apiManager.setUser(t.user),a=r(()=>import("./pageIm-703b20a4.js"),["./pageIm-703b20a4.js","./index-4dc57066.js","./index-80a0e9a4.css","./page-ba71be4f.js"],import.meta.url))}catch(t){switch(t.type){case"SESSION_PASSWORD_NEEDED":{t.handled=!0,a=r(()=>import("./pagePassword-870a7588.js"),["./pagePassword-870a7588.js","./index-4dc57066.js","./index-80a0e9a4.css","./putPreloader-4f534c85.js","./page-ba71be4f.js","./button-cd613a17.js","./htmlToSpan-83e934e2.js","./wrapEmojiText-4b334cdf.js","./loginPage-d2f4626a.js"],import.meta.url);break}default:{console.error("authorization import error:",t);const p=m.authState._;p==="authStateSignIn"?a=r(()=>import("./pageSignIn-2086e81f.js"),["./pageSignIn-2086e81f.js","./index-4dc57066.js","./index-80a0e9a4.css","./putPreloader-4f534c85.js","./page-ba71be4f.js","./countryInputField-df0b269b.js","./button-cd613a17.js","./wrapEmojiText-4b334cdf.js","./scrollable-c3fb7843.js","./pageSignQR-20252a0a.js","./textToSvgURL-c6ebb454.js"],import.meta.url):p==="authStateSignQr"&&(a=r(()=>import("./pageSignQR-20252a0a.js").then(_=>_.a),["./pageSignQR-20252a0a.js","./index-4dc57066.js","./index-80a0e9a4.css","./page-ba71be4f.js","./button-cd613a17.js","./putPreloader-4f534c85.js","./textToSvgURL-c6ebb454.js"],import.meta.url));break}}}location.hash=n?.trim()?"#?tgaddr="+encodeURIComponent(n):"",a&&a.then(t=>t.default.mount())},l=new d("page-signImport",!0,()=>{h(l.pageEl.firstElementChild,!0),g()},e=>{i=e,o.managers.appStateManager.pushToState("authState",{_:"authStateSignImport",data:i})});export{l as default};
//# sourceMappingURL=pageSignImport-434495d3.js.map