(()=>{var e={14:()=>{const e=gsap.timeline({scrollTrigger:{trigger:".sect1",start:"0% 10%",end:"100% 10%",markers:!1,once:!0}}),t=gsap.timeline({scrollTrigger:{trigger:".sect2",start:"0% 20%",end:"100% 10%",markers:!1,once:!0}}),n=gsap.timeline({scrollTrigger:{trigger:".sect3",start:"0% 54%",end:"50% 20%",markers:!1,once:!0}}),r=gsap.timeline({scrollTrigger:{trigger:".sect4",start:"0% 20%",end:"100% 10%",markers:!1,once:!0}});e.fromTo(".sect1  .inner .wrap > *",{autoAlpha:0,y:100},{autoAlpha:1,y:0,duration:2,stagger:.5}),ScrollTrigger.matchMedia({"(max-width: 767px)":function(){t.fromTo(".sect2  .inner .wrap > *",{autoAlpha:0,y:100},{autoAlpha:1,y:0,duration:2,stagger:.5})},"(min-width: 767px)":function(){t.fromTo(".sect2 .inner .wrap > *",{autoAlpha:0,y:100},{autoAlpha:1,y:0,duration:1.2,stagger:.4}),t.fromTo(".sect2 .swiper_screen",{autoAlpha:0,x:100},{autoAlpha:1,x:0,duration:1},"-=0.4")}}),n.fromTo(".sect3 .inner .wrap > *",{autoAlpha:0,y:100},{autoAlpha:1,y:0,duration:2,stagger:.5}),ScrollTrigger.matchMedia({"(max-width: 767px)":function(){r.fromTo(".sect4 .inner .wrap > *",{autoAlpha:0,y:100},{autoAlpha:1,y:0,duration:2,stagger:.5})},"(min-width: 767px)":function(){r.fromTo(".sect4 .inner > *",{autoAlpha:0,y:100},{autoAlpha:1,y:0,duration:2,stagger:.5})}})},185:()=>{const e=document.querySelector(".glob"),t=document.querySelectorAll(".translate_texts");let n="ko";e.addEventListener("click",(()=>{n="ko"===n?"en":"ko",t.forEach((e=>{e.innerHTML=e.getAttribute(`data-${n}`)}))}))},386:()=>{function e(e){const t=document.querySelectorAll(".swiper400 span"),n=document.querySelectorAll(".sect2 .swiper .swiper-wrapper .swiper400");if(t.forEach((e=>e.style.opacity=0)),n.forEach((e=>e.style.filter="brightness(0.5) invert(0)")),e.activeIndex>=0){const r=t[e.activeIndex],o=n[e.activeIndex];r&&(r.style.opacity=1),o&&(o.style.filter="none")}}const t=new Swiper(".height400",{slidesPerView:"auto",centeredSlides:!0,spaceBetween:32,speed:1e3,on:{init:function(){e(this)},slideChange:function(){e(this)}},pagination:{el:".height400-pagination",clickable:!0}});window.addEventListener("resize",(function(){window.innerWidth<=768&&t.slideTo(0)}))},419:()=>{function e(){document.querySelectorAll(".btn").forEach((e=>{window.innerWidth<=767?(e.classList.remove("btn3"),e.classList.add("btn1")):(e.classList.remove("btn1"),e.classList.add("btn3"))}))}function t(){document.querySelectorAll(".btn4").forEach((e=>{window.innerWidth<=767?(e.classList.remove("btn4"),e.classList.add("btn2")):(e.classList.remove("btn2"),e.classList.add("btn4"))}))}e(),t(),window.addEventListener("resize",(()=>{e(),t()})),function(){const e=document.querySelectorAll(".btn14"),t=document.querySelector(".btn14 .text"),n=document.querySelector(".swiper_screen");e.forEach((e=>{e.addEventListener("click",(()=>{n.style.transition="0.5s ease-in-out","100%"===n.style.width?(n.style.width="47%",t.textContent="open me"):(n.style.width="100%",t.textContent="close me")}))})),window.addEventListener("resize",(function(){window.innerWidth<=768&&(n.style.width="47%",t.textContent="open me")}))}()},903:()=>{window.matchMedia("(max-width: 767px)").addEventListener("change",(()=>{location.reload()}))},982:()=>{const e=document.querySelector("header"),t=document.querySelector(".sect2");let n=0;window.addEventListener("scroll",(function(){const r=window.scrollY;r<n?e.classList.remove("scrolled"):e.classList.add("scrolled"),t.getBoundingClientRect().top<=100?(e.classList.add("header"),e.classList.remove("header1")):(e.classList.add("header1"),e.classList.remove("header")),n=r}));const r=document.querySelector("#M_menu"),o=document.querySelector("#m_header"),s=document.querySelector("#X");r.addEventListener("click",(()=>{o.classList.add("scrolled")})),s.addEventListener("click",(()=>{o.classList.remove("scrolled")})),document.addEventListener("keydown",(e=>{"Escape"===e.key&&o.classList.remove("scrolled")})),window.addEventListener("resize",(()=>{window.innerWidth>=767&&o.classList.contains("scrolled")&&o.classList.remove("scrolled")}))}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(419),n(14),n(982),n(903),n(386),n(185)})()})();