!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=79)}({129:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=function(){function e(){n(this,e)}return i(e,null,[{key:"parseWithFirstPath",value:function(e,t,r){if(e&&t)return e+"//"+t+(r&&r.length>1?"/"+r.split("/",2)[1]:"")}}]),e}();t.default=u},207:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=function(){function e(){n(this,e)}return i(e,[{key:"parse",value:function(e,t,r){var n=this;if(e){var i=Object.assign([],e);if(r&&(i=this.orderLinks(r,i)),t){var u=[];return t.forEach(function(e){u.push(n.groupItems(e,i))}),this.filterValidChildren(i).concat(u)}return this.filterValidChildren(i)}}},{key:"orderLinks",value:function(e,t){if(e&&t)return e.forEach(function(e,r){t.find(function(n,i){if(n.rel===e.rel)return t.splice(i,1),t.splice(r,0,n),!0})}),t}},{key:"groupItems",value:function(e,t){var r,n=this,i=[];if(e&&e.children)return e.children.forEach(function(e){if(e.children)r=n.groupItems(e,t);else{var u=t.find(function(r,n){if(r.rel===e.rel)return t.splice(n,1),!0});u?i.push(u):i.push({href:e.href,text:e.text})}}),i=this.groupBy(e.text,i),r&&i.children.push(r),i}},{key:"groupBy",value:function(e,t){if(e&&t&&Array.isArray(t))return{text:e,children:this.filterValidChildren(t)}}},{key:"filterValidChildren",value:function(e){return e.filter(function(e){return!(!e.text||!e.href)}).map(function(e){return{text:e.text,href:e.href}})}}]),e}();t.default=u},79:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(207);Object.defineProperty(t,"NavigationItemsParser",{enumerable:!0,get:function(){return n(i).default}});var u=r(129);Object.defineProperty(t,"LinkParser",{enumerable:!0,get:function(){return n(u).default}})}})});