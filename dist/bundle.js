!function(e){var r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)n.d(t,o,function(r){return e[r]}.bind(null,o));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=0)}([function(e,r,n){"use strict";n.r(r);var t=function(){var e=[{h1:"Взыскание дебиторской задолженности",p:"Индивидуальный подход и нацеленность на достижение результата",background:'url("../img/header-slider/Rectangle5.png") center'},{h1:"Юридический аутсорсинг",p:"Гарантия своевременности и качества услуг",background:'url("../img/header-slider/Rectangle1.png") center'},{h1:"Юридическая консультация",p:"Детальные разъяснения вопросов по ведению бизнеса от профессионалов",background:'url("../img/header-slider/Rectangle2.png") center'},{h1:"Ликвидация предприятия",p:"Эффективное решение сложных задач",background:'url("../img/header-slider/Rectangle3.png") center'},{h1:"Регистрация ООО",p:"Гарантируем минимальные сроки регистрации под ключ ",background:'url("../img/header-slider/Rectangle4.png") center'}],r=document.querySelector(".slider__nav-left"),n=document.querySelector(".slider__nav-right"),t=document.querySelector(".slider"),o=t.querySelector("h1"),c=t.querySelector("p"),u=0;function a(r){t.style.background=e[r].background,o.textContent=e[r].h1,c.textContent=e[r].p}r.addEventListener("click",(function(){a(u=u?u-1:4),t.style.transition="0.6s ease"})),n.addEventListener("click",(function(){a(u=Math.abs(u+1)%5),t.style.transition="0.6s ease"}))};var o=function(){var e=[{background:'url("../img/carousel/carousel.png") center'},{background:'url("../img/carousel/carousel1.png") center'},{background:'url("../img/carousel/carousel2.png") center'},{background:'url("../img/carousel/carousel3.png") center'},{background:'url("../img/carousel/carousel4.png") center'}],r=document.querySelector(".carousel__arrow-left"),n=document.querySelector(".carousel__arrow-right"),t=(document.querySelector(".carousel"),document.querySelector(".carousel__image")),o=0;r.addEventListener("click",(function(){o=o?o-1:4,t.style.background=e[o].background,t.style.transition="0.6s ease"})),n.addEventListener("click",(function(){o=Math.abs(o+1)%5,t.style.background=e[o].background,t.style.transition="0.6s ease"}))};window.addEventListener("DOMContentLoaded",(function(){t(),o()}))}]);
//# sourceMappingURL=bundle.js.map