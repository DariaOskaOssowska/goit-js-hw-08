!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},l=e.parcelRequired7c6;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in a){var l=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,l.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},e.parcelRequired7c6=l);var n=l("1WSnx");const r=document.querySelector(".feedback-form"),o=document.querySelector('input[name="email"]'),s=document.querySelector('textarea[name="message"]');r.addEventListener("input",(0,n.throttle)((e=>{const t={email:r.elements.email.value,message:r.elements.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(t)),console.log(t)}),500)),r.addEventListener("submit",(e=>{e.preventDefault();const{elements:{email:t,message:a}}=e.currentTarget;console.log({email:t.value,message:a.value}),e.currentTarget.reset(),localStorage.clear()}));const i=localStorage.getItem("feedback-form-state"),u=JSON.parse(i);null!==u&&(o.value=u.email,s.value=u.message)}();
//# sourceMappingURL=03-feedback.8fb9bbb9.js.map
