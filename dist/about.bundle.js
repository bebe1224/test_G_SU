(()=>{var e={185:()=>{const e=document.querySelector(".glob"),t=document.querySelectorAll(".translate_texts");let r="ko";e.addEventListener("click",(()=>{r="ko"===r?"en":"ko",t.forEach((e=>{e.innerHTML=e.getAttribute(`data-${r}`)}))}))},553:()=>{let e=document.querySelector(".rolling-list");e.id="roller1";let t=e.cloneNode(!0);t.id="roller2",document.querySelector(".banner_wrap").appendChild(t),document.querySelector("#roller1").style.left="0px",document.querySelector("#roller2").style.left=document.querySelector(".rolling-list ul").offsetWidth+"px",e.classList.add("original"),t.classList.add("clone")},598:()=>{const e=gsap.timeline({scrollTrigger:{trigger:".sect1",start:"0% 10%",end:"100% 10%",markers:!1,once:!0}}),t=gsap.timeline({scrollTrigger:{trigger:".sect2",start:"0% 10%",end:"100% 10%",markers:!1,once:!0}}),r=gsap.timeline({scrollTrigger:{trigger:".sect3",start:"0% 54%",end:"50% 20%",markers:!1,once:!0}}),o=gsap.timeline({scrollTrigger:{trigger:".sect4",start:"0% 10%",end:"100% 10%",markers:!1,once:!0}});e.fromTo(".sect1  .inner .wrap > *",{autoAlpha:0,y:100},{autoAlpha:1,y:0,duration:2,stagger:.5}),ScrollTrigger.matchMedia({"(max-width: 767px)":function(){t.fromTo(".sect2 .inner .wrap > *:nth-child(1)",{autoAlpha:0,y:100},{autoAlpha:1,y:0,duration:.6}),t.fromTo(".sect2 .inner .i_w",{autoAlpha:0,y:100},{autoAlpha:1,y:0,duration:.6}),t.fromTo(".sect2 .inner .wrap > *:nth-child(2) > *",{autoAlpha:0,y:100},{autoAlpha:1,y:0,duration:.6,stagger:.2})},"(min-width: 767px)":function(){t.fromTo(".sect2 .inner > *",{autoAlpha:0,y:100},{autoAlpha:1,y:0,duration:2,stagger:.5})}}),r.fromTo(".sect3  .inner > *",{autoAlpha:0,y:100},{autoAlpha:1,y:0,duration:2}),o.fromTo(".sect4  .inner > *",{autoAlpha:0,y:100},{autoAlpha:1,y:0,duration:2,stagger:.5})},903:()=>{window.matchMedia("(max-width: 767px)").addEventListener("change",(()=>{location.reload()}))},982:()=>{const e=document.querySelector("header"),t=document.querySelector(".sect2");let r=0;window.addEventListener("scroll",(function(){const o=window.scrollY;o<r?e.classList.remove("scrolled"):e.classList.add("scrolled"),t.getBoundingClientRect().top<=100?(e.classList.add("header"),e.classList.remove("header1")):(e.classList.add("header1"),e.classList.remove("header")),r=o}));const o=document.querySelector("#M_menu"),a=document.querySelector("#m_header"),l=document.querySelector("#X");o.addEventListener("click",(()=>{a.classList.add("scrolled")})),l.addEventListener("click",(()=>{a.classList.remove("scrolled")})),document.addEventListener("keydown",(e=>{"Escape"===e.key&&a.classList.remove("scrolled")})),window.addEventListener("resize",(()=>{window.innerWidth>=767&&a.classList.contains("scrolled")&&a.classList.remove("scrolled")}))}},t={};function r(o){var a=t[o];if(void 0!==a)return a.exports;var l=t[o]={exports:{}};return e[o](l,l.exports,r),l.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(553),r(598),r(982),r(903),r(185)})()})();