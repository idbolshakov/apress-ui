!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=56)}({56:function(e,t,n){"use strict";n.r(t);n(57),n(58)},57:function(e,t,n){},58:function(e,t){app.modules.spanToLinks=function(e){function t(){var e=$("<a>");$("span[data-to]").each((function(){var t=e.clone(),n=this.attributes,r=this.parentNode,a=t[0];$(n).each((function(e){var r=n[e].nodeName,o=n[e].nodeValue;switch(r){case"data-alt":a.alt=o;break;case"data-title":a.title=o;break;case"data-to":a.href=o;break;case"data-target":a.target=o;break;case"data-text":a.innerHTML=o;break;default:try{t.attr(r,o)}catch(e){}}})),this.innerHTML&&(a.innerHTML=this.innerHTML),r.replaceChild(a,this)}))}return e.load=function(){t(),$doc.on("spansToLinks",t).trigger("load:spanToLinks")},e}(app.modules.spanToLinks||{})}});