(()=>{var t={8422:(t,e,n)=>{"use strict";n.r(e)}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{n(8422);var t=document.querySelectorAll(".lang");function e(t){t.preventDefault(),this.removeEventListener("click",e)}window.addEventListener("touchstart",(function t(){document.querySelectorAll(".lang-link").forEach((function(t){t.addEventListener("click",e)})),window.DOUBLE_CLICK_ENABLED=!0,window.removeEventListener("touchstart",t,!1)}),!1),t.forEach((function(t){var n=t.querySelectorAll(".sub");t.addEventListener("mouseover",(function(){return function(t,e){0!==t.length&&t.forEach((function(t){t.style.height="60px",t.style.width="60px",t.classList.add("backToPosition")}));t.length>4&&window.matchMedia("(max-width: 992px)").matches&&(e.style.marginBottom="50px")}(n,t)})),t.addEventListener("mouseout",(function(){return function(t,n){0!==t.length&&t.forEach((function(t){t.style.height="35px",t.style.width="35px",t.classList.remove("backToPosition")}));t.length>4&&window.matchMedia("(max-width: 992px)").matches&&(n.style.marginBottom="0");window.DOUBLE_CLICK_ENABLED&&n.querySelectorAll(".lang-link").forEach((function(t){t.addEventListener("click",e)}))}(n,t)}))}))})()})();