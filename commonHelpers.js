import{S as O}from"./assets/vendor-4ea312d0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const P=document.querySelector(".logo-link");P.addEventListener("click",()=>{window.location.reload()});P.removeEventListener("click",()=>{window.location.reload()});const W=document.querySelector(".header-navigation-item-burger"),T=document.querySelector(".header-modal-wrapper"),G=document.querySelector(".header-modal-wrapper-item-svg-container"),V=document.querySelector("body");function R(){T.classList.toggle("active"),V.classList.toggle("is-hidden"),E.classList.remove("active-checkbox"),k.classList.remove("active-modal"),b.forEach(e=>{e.addEventListener("click",S)})}W.addEventListener("click",R);G.addEventListener("click",R);const b=document.querySelectorAll(".header-modal-container-item");function S(){T.classList.remove("active"),V.classList.remove("is-hidden"),E.classList.remove("active-checkbox"),k.classList.remove("active-modal"),b.forEach(e=>{e.removeEventListener("click",S)})}b.forEach(e=>{e.addEventListener("click",S)});const J=document.querySelector(".header-modal-wrapper-select-box-container"),X=document.querySelector(".header-modal-wrapper-select-box-container-tablet"),E=document.querySelector(".header-modal-wrapper-select-box-checkbox");document.querySelector(".header-modal-selectlang-container");const k=document.querySelector(".header-modal-selectlang-checkbox"),Y=document.querySelector(".header-modal-wrapper-select-box-container-text"),z=document.querySelector(".header-modal-wrapper-select-box-container-text-modal"),r="select-lang";localStorage.getItem(r);const h=document.querySelectorAll("[data-btn]");h.forEach(e=>{e.addEventListener("click",t=>{localStorage.setItem(r,t.target.dataset.btn),w(h,"active-header-checkbox"),e.classList.add("active-header-checkbox"),q()})});function w(e,t){e.forEach(s=>{s.classList.remove(t)})}function Q(){switch(localStorage.getItem(r)){case"ua":document.querySelector('[data-btn="ua"]').classList.add("active-header-checkbox");break;case"en":document.querySelector('[data-btn="en"]').classList.add("active-header-checkbox");break;default:document.querySelector('[data-btn="ua"]').classList.add("active-header-checkbox");break}}w(h,"active-header-checkbox-modal");const M=document.querySelectorAll("[data-btn-modal]");M.forEach(e=>{e.addEventListener("click",t=>{localStorage.setItem(r,t.target.dataset.btnModal),w(M,"active-header-checkbox-modal"),e.classList.add("active-header-checkbox-modal"),q()})});function Z(){switch(localStorage.getItem(r)){case"ua":document.querySelector('[data-btn-modal="ua"]').classList.add("active-header-checkbox-modal");break;case"en":document.querySelector('[data-btn-modal="en"]').classList.add("active-header-checkbox-modal");break;default:document.querySelector('[data-btn-modal="ua"]').classList.add("active-header-checkbox-modal");break}}function $(){E.classList.toggle("active-checkbox")}X.addEventListener("click",$);function ee(){k.classList.toggle("active-modal")}J.addEventListener("click",ee);function q(){const e=localStorage.getItem(r).toUpperCase()||"UA";Y.textContent=e,z.textContent=e,Q(),Z()}q();document.querySelectorAll(".faq-list-item").forEach(e=>{const t=e.querySelector(".faq-list-item-container");t.addEventListener("click",()=>{e.classList.toggle("open"),t.classList.toggle("active")})});const te=document.querySelector(".services-swiper"),oe={speed:700,spaceBetween:32,slidesPerView:"auto",pagination:{el:".services-pagination",clickable:!0},loop:!0,breakpoints:{1440:{slidesPerView:"3",spaceBetween:40,loop:!1}}},ne=new O(te,oe);ne.pagination.init();const ce=document.querySelector(".reviews-swiper"),se={speed:700,spaceBetween:32,slidesPerView:"auto",pagination:{el:".reviews-pagination",clickable:!0},breakpoints:{1024:{spaceBetween:40,navigation:{nextEl:".reviews-btn-next",prevEl:".reviews-btn-prew"},keyboard:{enabled:!0,onlyInViewport:!1}}},loop:!0},re=new O(ce,se);re.pagination.init();const m=document.querySelector(".modal-container"),ae=document.querySelector(".modal"),j=document.querySelector(".modal-close"),le=document.querySelector(".modal-title"),ie=document.querySelector(".modal-text"),de=document.querySelector(".social-icons");function A(){m.classList.add("visible"),document.body.classList.add("body-overflow"),j.addEventListener("click",l),m.addEventListener("click",y),window.addEventListener("keydown",y)}function y(e){e.target===e.currentTarget&&l(),e.key==="Escape"&&l()}function l(){m.classList.remove("visible"),document.body.classList.remove("body-overflow"),j.removeEventListener("click",l),m.removeEventListener("click",l),window.removeEventListener("keydown",y)}function ue(){ae.classList.add("modal-error"),le.textContent="На жаль, наразі наш сервер не відповідає!",ie.textContent="Будь ласка, скористайтеся соціальними мережами експерта  для отримання зворотнього зв’язку:",de.classList.remove("hidden-icons")}const me=document.querySelector(".js-modal-form"),v=document.querySelector(".js-select-button"),N=document.querySelector(".js-modal-select-list"),f=document.querySelector(".js-modal-select"),D=document.querySelector('input[name="name"]'),a=document.querySelector('input[name="phone"]'),F=document.querySelector('button[name="services"]'),x=a.closest(".modal-input-wrapper"),C=document.querySelector(".js-consultation-modal"),ve=document.querySelector(".js-consultation-modal-close"),u="invalid",p="select-active",B="show-prefix",H="visible",fe="https://numismatics-project-backend.onrender.com/api/application",L={key:"data-selected",selected:"true",notSelected:"false"};me.addEventListener("submit",pe);v.addEventListener("click",be);N.addEventListener("click",Se);D.addEventListener("focus",I);a.addEventListener("focus",I);F.addEventListener("focus",I);a.addEventListener("input",Ee);a.addEventListener("focus",he);a.addEventListener("blur",ye);ve.addEventListener("click",i);C.addEventListener("click",ke);function pe(e){e.preventDefault();const t=e.target.elements,s=t.name.value.trim(),c=t.phone.value.trim(),o=t.comment.value.trim(),n=t.services.getAttribute(L.key);if(!ge({name:s,phone:c,services:n}))return;const K=t.services.querySelector("#modal-services").textContent;Le({name:s,phone:"+38"+c,service:K,question:o}),e.target.reset(),t.services.querySelector("span").textContent="Послуги",t.services.dataset.selected="false",x.classList.remove(B)}async function Le(e){try{const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};if(!(await fetch(fe,t)).ok)throw new Error;i(),A()}catch{i(),ue(),A()}}function ge({name:e,phone:t,services:s}){let c=!0;return e||(D.classList.add(u),c=!1),t.length<10&&(a.classList.add(u),c=!1),s===L.notSelected&&(F.classList.add(u),c=!1),c}function he(e){x.classList.add(B)}function ye(e){e.target.value.trim()||(e.target.value="",x.classList.remove(B))}function I(e){e.currentTarget.classList.remove(u)}function be(){f.classList.toggle(p),f.classList.contains(p)?window.addEventListener("click",g):window.removeEventListener("click",g)}function g({target:e}){!v.contains(e)&&!N.contains(e)&&(f.classList.remove(p),window.removeEventListener("click",g))}function Se(e){e.target!==e.currentTarget&&(v.setAttribute(L.key,L.selected),v.querySelector("#modal-services").textContent=e.target.textContent.trim(),f.classList.remove(p),window.removeEventListener("click",g))}function Ee(e){const t=e.target.value.replace(/\D/g,"");if(t.length>10){e.target.value=t.slice(0,10);return}e.target.value=t}function U(e){e.key==="Escape"&&i()}function ke(e){e.target===e.currentTarget&&i()}function i(){C.classList.remove(H),document.body.style.overflow="",window.removeEventListener("keydown",U)}function _(){C.classList.add(H),document.body.style.overflow="hidden",window.addEventListener("keydown",U)}const we=document.querySelector(".hero-btn");we.addEventListener("click",_);const qe=document.querySelector(".services-button");qe.addEventListener("click",_);
//# sourceMappingURL=commonHelpers.js.map
