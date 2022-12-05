/*! For license information please see main.js.LICENSE.txt */
(()=>{var e={52:()=>{sr.reveal(".animation",{duration:0,delay:50,viewFactor:.8,afterReveal:function(e){null!==e.querySelector("embed")&&null!==e&&(e.querySelector("embed").src=e.dataset.src)}})},951:()=>{(()=>{const e=document.documentElement,t=window;let n,o=t.scrollY||e.scrollTop,i=0,r=0;const s=document.querySelector(".header");let a;window.addEventListener("scroll",(function(){n=t.scrollY||e.scrollTop,i=n>o?2:1,n>100?s.classList.add("header-scroll"):s.classList.remove("header-scroll"),i!==r&&(a=!0,2===i&&n>100?s.classList.add("hide"):1===i?s.classList.remove("hide"):a=!1),o=n,a&&(r=i)}))})()},598:()=>{function e(e){var t=!0,n=!1,o=null,i={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function r(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function s(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function a(e){t=!1}function c(){document.addEventListener("mousemove",l),document.addEventListener("mousedown",l),document.addEventListener("mouseup",l),document.addEventListener("pointermove",l),document.addEventListener("pointerdown",l),document.addEventListener("pointerup",l),document.addEventListener("touchmove",l),document.addEventListener("touchstart",l),document.addEventListener("touchend",l)}function l(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",l),document.removeEventListener("mousedown",l),document.removeEventListener("mouseup",l),document.removeEventListener("pointermove",l),document.removeEventListener("pointerdown",l),document.removeEventListener("pointerup",l),document.removeEventListener("touchmove",l),document.removeEventListener("touchstart",l),document.removeEventListener("touchend",l))}document.addEventListener("keydown",(function(n){n.metaKey||n.altKey||n.ctrlKey||(r(e.activeElement)&&s(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",a,!0),document.addEventListener("pointerdown",a,!0),document.addEventListener("touchstart",a,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(n&&(t=!0),c())}),!0),c(),e.addEventListener("focus",(function(e){var n,o,a;r(e.target)&&(t||(o=(n=e.target).type,"INPUT"===(a=n.tagName)&&i[o]&&!n.readOnly||"TEXTAREA"===a&&!n.readOnly||n.isContentEditable))&&s(e.target)}),!0),e.addEventListener("blur",(function(e){var t;r(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout((function(){n=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}(()=>{"use strict";n(598);const e=function(e){return"object"==typeof window.Node?e instanceof window.Node:null!==e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},t=function(t,n){if(void 0===n&&(n=document),t instanceof Array)return t.filter(e);if(e(t))return[t];if(o=t,i=Object.prototype.toString.call(o),"object"==typeof window.NodeList?o instanceof window.NodeList:null!==o&&"object"==typeof o&&"number"==typeof o.length&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(i)&&(0===o.length||e(o[0])))return Array.prototype.slice.call(t);var o,i;if("string"==typeof t)try{var r=n.querySelectorAll(t);return Array.prototype.slice.call(r)}catch(e){return[]}return[]};function o(e){if(e.constructor!==Array)throw new TypeError("Expected array.");if(16===e.length)return e;if(6===e.length){var t=i();return t[0]=e[0],t[1]=e[1],t[4]=e[2],t[5]=e[3],t[12]=e[4],t[13]=e[5],t}throw new RangeError("Expected array with either 6 or 16 values.")}function i(){for(var e=[],t=0;t<16;t++)t%5==0?e.push(1):e.push(0);return e}function r(e,t){for(var n=o(e),i=o(t),r=[],s=0;s<4;s++)for(var a=[n[s],n[s+4],n[s+8],n[s+12]],c=0;c<4;c++){var l=4*c,d=[i[l],i[l+1],i[l+2],i[l+3]],u=a[0]*d[0]+a[1]*d[1]+a[2]*d[2]+a[3]*d[3];r[s+l]=u}return r}function s(e){if("string"==typeof e){var t=e.match(/matrix(3d)?\(([^)]+)\)/);if(t)return o(t[2].split(", ").map(parseFloat))}return i()}function a(e,t){var n=i();return n[0]=e,n[5]="number"==typeof t?t:e,n}var c,l=(c=Date.now(),function(e){var t=Date.now();t-c>16?(c=t,e(t)):setTimeout((function(){return l(e)}),0)});const d=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||l;var u={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}},f=function(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",(function(){document.body.style.height="100%"}))},m=function(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}};function v(e){return null!==e&&e instanceof Object&&(e.constructor===Object||"[object Object]"===Object.prototype.toString.call(e))}function h(e,t){if(v(e))return Object.keys(e).forEach((function(n){return t(e[n],n,e)}));if(e instanceof Array)return e.forEach((function(n,o){return t(n,o,e)}));throw new TypeError("Expected either an array or object literal.")}function p(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];if(this.constructor.debug&&console){var o="%cScrollReveal: "+e;t.forEach((function(e){return o+="\n — "+e})),console.log(o,"color: #ea654b;")}}function y(){var e=this,n={active:[],stale:[]},o={active:[],stale:[]},i={active:[],stale:[]};try{h(t("[data-sr-id]"),(function(e){var t=parseInt(e.getAttribute("data-sr-id"));n.active.push(t)}))}catch(e){throw e}h(this.store.elements,(function(e){-1===n.active.indexOf(e.id)&&n.stale.push(e.id)})),h(n.stale,(function(t){return delete e.store.elements[t]})),h(this.store.elements,(function(e){-1===i.active.indexOf(e.containerId)&&i.active.push(e.containerId),e.hasOwnProperty("sequence")&&-1===o.active.indexOf(e.sequence.id)&&o.active.push(e.sequence.id)})),h(this.store.containers,(function(e){-1===i.active.indexOf(e.id)&&i.stale.push(e.id)})),h(i.stale,(function(t){var n=e.store.containers[t].node;n.removeEventListener("scroll",e.delegate),n.removeEventListener("resize",e.delegate),delete e.store.containers[t]})),h(this.store.sequences,(function(e){-1===o.active.indexOf(e.id)&&o.stale.push(e.id)})),h(o.stale,(function(t){return delete e.store.sequences[t]}))}var g=function(){var e={},t=document.documentElement.style;function n(n,o){if(void 0===o&&(o=t),n&&"string"==typeof n){if(e[n])return e[n];if("string"==typeof o[n])return e[n]=n;if("string"==typeof o["-webkit-"+n])return e[n]="-webkit-"+n;throw new RangeError('Unable to find "'+n+'" style property.')}throw new TypeError("Expected a string.")}return n.clearCache=function(){return e={}},n}();function b(e){var t=window.getComputedStyle(e.node),n=t.position,o=e.config,c={},l=(e.node.getAttribute("style")||"").match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];c.computed=l?l.map((function(e){return e.trim()})).join("; ")+";":"",c.generated=l.some((function(e){return e.match(/visibility\s?:\s?visible/i)}))?c.computed:l.concat(["visibility: visible"]).map((function(e){return e.trim()})).join("; ")+";";var d,u,f,m=parseFloat(t.opacity),v=isNaN(parseFloat(o.opacity))?parseFloat(t.opacity):parseFloat(o.opacity),h={computed:m!==v?"opacity: "+m+";":"",generated:m!==v?"opacity: "+v+";":""},p=[];if(parseFloat(o.distance)){var y="top"===o.origin||"bottom"===o.origin?"Y":"X",b=o.distance;"top"!==o.origin&&"left"!==o.origin||(b=/^-/.test(b)?b.substr(1):"-"+b);var w=b.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),E=w[0];switch(w[1]){case"em":b=parseInt(t.fontSize)*E;break;case"px":b=E;break;case"%":b="Y"===y?e.node.getBoundingClientRect().height*E/100:e.node.getBoundingClientRect().width*E/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}"Y"===y?p.push(function(e){var t=i();return t[13]=e,t}(b)):p.push(function(e){var t=i();return t[12]=e,t}(b))}o.rotate.x&&p.push((d=o.rotate.x,u=Math.PI/180*d,(f=i())[5]=f[10]=Math.cos(u),f[6]=f[9]=Math.sin(u),f[9]*=-1,f)),o.rotate.y&&p.push(function(e){var t=Math.PI/180*e,n=i();return n[0]=n[10]=Math.cos(t),n[2]=n[8]=Math.sin(t),n[2]*=-1,n}(o.rotate.y)),o.rotate.z&&p.push(function(e){var t=Math.PI/180*e,n=i();return n[0]=n[5]=Math.cos(t),n[1]=n[4]=Math.sin(t),n[4]*=-1,n}(o.rotate.z)),1!==o.scale&&(0===o.scale?p.push(a(2e-4)):p.push(a(o.scale)));var L={};if(p.length){L.property=g("transform"),L.computed={raw:t[L.property],matrix:s(t[L.property])},p.unshift(L.computed.matrix);var T=p.reduce(r);L.generated={initial:L.property+": matrix3d("+T.join(", ")+");",final:L.property+": matrix3d("+L.computed.matrix.join(", ")+");"}}else L.generated={initial:"",final:""};var j={};if(h.generated||L.generated.initial){j.property=g("transition"),j.computed=t[j.property],j.fragments=[];var x=o.delay,O=o.duration,k=o.easing;h.generated&&j.fragments.push({delayed:"opacity "+O/1e3+"s "+k+" "+x/1e3+"s",instant:"opacity "+O/1e3+"s "+k+" 0s"}),L.generated.initial&&j.fragments.push({delayed:L.property+" "+O/1e3+"s "+k+" "+x/1e3+"s",instant:L.property+" "+O/1e3+"s "+k+" 0s"}),j.computed&&!j.computed.match(/all 0s|none 0s/)&&j.fragments.unshift({delayed:j.computed,instant:j.computed});var A=j.fragments.reduce((function(e,t,n){return e.delayed+=0===n?t.delayed:", "+t.delayed,e.instant+=0===n?t.instant:", "+t.instant,e}),{delayed:"",instant:""});j.generated={delayed:j.property+": "+A.delayed+";",instant:j.property+": "+A.instant+";"}}else j.generated={delayed:"",instant:""};return{inline:c,opacity:h,position:n,transform:L,transition:j}}function w(e,t){t.split(";").forEach((function(t){var n=t.split(":"),o=n[0],i=n.slice(1);o&&i&&(e.style[o.trim()]=i.join(":"))}))}function E(e){var n,o=this;try{h(t(e),(function(e){var t=e.getAttribute("data-sr-id");if(null!==t){n=!0;var i=o.store.elements[t];i.callbackTimer&&window.clearTimeout(i.callbackTimer.clock),w(i.node,i.styles.inline.generated),e.removeAttribute("data-sr-id"),delete o.store.elements[t]}}))}catch(e){return p.call(this,"Clean failed.",e.message)}if(n)try{y.call(this)}catch(e){return p.call(this,"Clean failed.",e.message)}}function L(){var e=this;h(this.store.elements,(function(e){w(e.node,e.styles.inline.generated),e.node.removeAttribute("data-sr-id")})),h(this.store.containers,(function(t){var n=t.node===document.documentElement?window:t.node;n.removeEventListener("scroll",e.delegate),n.removeEventListener("resize",e.delegate)})),this.store={containers:{},elements:{},history:[],sequences:{}}}function T(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];if(v(e))return h(t,(function(t){h(t,(function(t,n){v(t)?(e[n]&&v(e[n])||(e[n]={}),T(e[n],t)):e[n]=t}))})),e;throw new TypeError("Target must be an object literal.")}function j(e){return void 0===e&&(e=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(e)}var x,O=(x=0,function(){return x++});function k(){var e=this;y.call(this),h(this.store.elements,(function(e){var t=[e.styles.inline.generated];e.visible?(t.push(e.styles.opacity.computed),t.push(e.styles.transform.generated.final),e.revealed=!0):(t.push(e.styles.opacity.generated),t.push(e.styles.transform.generated.initial),e.revealed=!1),w(e.node,t.filter((function(e){return""!==e})).join(" "))})),h(this.store.containers,(function(t){var n=t.node===document.documentElement?window:t.node;n.addEventListener("scroll",e.delegate),n.addEventListener("resize",e.delegate)})),this.delegate(),this.initTimeout=null}function A(e,t){void 0===t&&(t={});var n=t.pristine||this.pristine,o="always"===e.config.useDelay||"onload"===e.config.useDelay&&n||"once"===e.config.useDelay&&!e.seen,i=e.visible&&!e.revealed,r=!e.visible&&e.revealed&&e.config.reset;return t.reveal||i?q.call(this,e,o):t.reset||r?N.call(this,e):void 0}function q(e,t){var n=[e.styles.inline.generated,e.styles.opacity.computed,e.styles.transform.generated.final];t?n.push(e.styles.transition.generated.delayed):n.push(e.styles.transition.generated.instant),e.revealed=e.seen=!0,w(e.node,n.filter((function(e){return""!==e})).join(" ")),R.call(this,e,t)}function N(e){var t=[e.styles.inline.generated,e.styles.opacity.generated,e.styles.transform.generated.initial,e.styles.transition.generated.instant];e.revealed=!1,w(e.node,t.filter((function(e){return""!==e})).join(" ")),R.call(this,e)}function R(e,t){var n=this,o=t?e.config.duration+e.config.delay:e.config.duration,i=e.revealed?e.config.beforeReveal:e.config.beforeReset,r=e.revealed?e.config.afterReveal:e.config.afterReset,s=0;e.callbackTimer&&(s=Date.now()-e.callbackTimer.start,window.clearTimeout(e.callbackTimer.clock)),i(e.node),e.callbackTimer={start:Date.now(),clock:window.setTimeout((function(){r(e.node),e.callbackTimer=null,e.revealed&&!e.config.reset&&e.config.cleanup&&E.call(n,e.node)}),o-s)}}function P(e,t){if(void 0===t&&(t=this.pristine),!e.visible&&e.revealed&&e.config.reset)return A.call(this,e,{reset:!0});var n=this.store.sequences[e.sequence.id],o=e.sequence.index;if(n){var i=new M(n,"visible",this.store),r=new M(n,"revealed",this.store);if(n.models={visible:i,revealed:r},!r.body.length){var s=n.members[i.body[0]],a=this.store.elements[s];if(a)return I.call(this,n,i.body[0],-1,t),I.call(this,n,i.body[0],1,t),A.call(this,a,{reveal:!0,pristine:t})}if(!n.blocked.head&&o===[].concat(r.head).pop()&&o>=[].concat(i.body).shift())return I.call(this,n,o,-1,t),A.call(this,e,{reveal:!0,pristine:t});if(!n.blocked.foot&&o===[].concat(r.foot).shift()&&o<=[].concat(i.body).pop())return I.call(this,n,o,1,t),A.call(this,e,{reveal:!0,pristine:t})}}function S(e){var t=Math.abs(e);if(isNaN(t))throw new RangeError("Invalid sequence interval.");this.id=O(),this.interval=Math.max(t,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1}}function M(e,t,n){var o=this;this.head=[],this.body=[],this.foot=[],h(e.members,(function(e,i){var r=n.elements[e];r&&r[t]&&o.body.push(i)})),this.body.length&&h(e.members,(function(e,i){var r=n.elements[e];r&&!r[t]&&(i<o.body[0]?o.head.push(i):o.foot.push(i))}))}function I(e,t,n,o){var i=this,r=["head",null,"foot"][1+n],s=e.members[t+n],a=this.store.elements[s];e.blocked[r]=!0,setTimeout((function(){e.blocked[r]=!1,a&&P.call(i,a,o)}),e.interval)}function C(e,n,o){var i=this;void 0===n&&(n={}),void 0===o&&(o=!1);var r,s=[],a=n.interval||u.interval;try{a&&(r=new S(a));var c=t(e);if(!c.length)throw new Error("Invalid reveal target.");var l=c.reduce((function(e,o){var a={},c=o.getAttribute("data-sr-id");c?(T(a,i.store.elements[c]),w(a.node,a.styles.inline.computed)):(a.id=O(),a.node=o,a.seen=!1,a.revealed=!1,a.visible=!1);var l=T({},a.config||i.defaults,n);if(!l.mobile&&j()||!l.desktop&&!j())return c&&E.call(i,a),e;var d,u=t(l.container)[0];if(!u)throw new Error("Invalid container.");return u.contains(o)?(d=function(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];var o=null;return h(t,(function(t){h(t,(function(t){null===o&&t.node===e&&(o=t.id)}))})),o}(u,s,i.store.containers),null===d&&(d=O(),s.push({id:d,node:u})),a.config=l,a.containerId=d,a.styles=b(a),r&&(a.sequence={id:r.id,index:r.members.length},r.members.push(a.id)),e.push(a),e):e}),[]);h(l,(function(e){i.store.elements[e.id]=e,e.node.setAttribute("data-sr-id",e.id)}))}catch(e){return p.call(this,"Reveal failed.",e.message)}h(s,(function(e){i.store.containers[e.id]={id:e.id,node:e.node}})),r&&(this.store.sequences[r.id]=r),!0!==o&&(this.store.history.push({target:e,options:n}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(k.bind(this),0))}function D(){var e=this;h(this.store.history,(function(t){C.call(e,t.target,t.options,!0)})),k.call(this)}var F,z,Y,H,$,U,B,W,K=Math.sign||function(e){return(e>0)-(e<0)||+e};function X(e,t){var n=t?e.node.clientHeight:e.node.offsetHeight,o=t?e.node.clientWidth:e.node.offsetWidth,i=0,r=0,s=e.node;do{isNaN(s.offsetTop)||(i+=s.offsetTop),isNaN(s.offsetLeft)||(r+=s.offsetLeft),s=s.offsetParent}while(s);return{bounds:{top:i,right:r+o,bottom:i+n,left:r},height:n,width:o}}function _(e){var t,n;return e.node===document.documentElement?(t=window.pageYOffset,n=window.pageXOffset):(t=e.node.scrollTop,n=e.node.scrollLeft),{top:t,left:n}}function G(e){void 0===e&&(e={});var t=this.store.containers[e.containerId];if(t){var n=Math.max(0,Math.min(1,e.config.viewFactor)),o=e.config.viewOffset,i=e.geometry.bounds.top+e.geometry.height*n,r=e.geometry.bounds.right-e.geometry.width*n,s=e.geometry.bounds.bottom-e.geometry.height*n,a=e.geometry.bounds.left+e.geometry.width*n,c=t.geometry.bounds.top+t.scroll.top+o.top,l=t.geometry.bounds.right+t.scroll.left-o.right,d=t.geometry.bounds.bottom+t.scroll.top-o.bottom,u=t.geometry.bounds.left+t.scroll.left+o.left;return i<d&&r>u&&s>c&&a<l||"fixed"===e.styles.position}}function V(e,t){var n=this;void 0===e&&(e={type:"init"}),void 0===t&&(t=this.store.elements),d((function(){var o="init"===e.type||"resize"===e.type;h(n.store.containers,(function(e){o&&(e.geometry=X.call(n,e,!0));var t=_.call(n,e);e.scroll&&(e.direction={x:K(t.left-e.scroll.left),y:K(t.top-e.scroll.top)}),e.scroll=t})),h(t,(function(e){(o||void 0===e.geometry)&&(e.geometry=X.call(n,e)),e.visible=G.call(n,e)})),h(t,(function(e){e.sequence?P.call(n,e):A.call(n,e)})),n.pristine=!1}))}function J(e){var n;if(void 0===e&&(e={}),void 0===this||Object.getPrototypeOf(this)!==J.prototype)return new J(e);if(!J.isSupported())return p.call(this,"Instantiation failed.","This browser is not supported."),m();try{n=T({},U||u,e)}catch(e){return p.call(this,"Invalid configuration.",e.message),m()}try{if(!t(n.container)[0])throw new Error("Invalid container.")}catch(e){return p.call(this,e.message),m()}return!(U=n).mobile&&j()||!U.desktop&&!j()?(p.call(this,"This device is disabled.","desktop: "+U.desktop,"mobile: "+U.mobile),m()):(f(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,F=F||V.bind(this),z=z||L.bind(this),Y=Y||C.bind(this),H=H||E.bind(this),$=$||D.bind(this),Object.defineProperty(this,"delegate",{get:function(){return F}}),Object.defineProperty(this,"destroy",{get:function(){return z}}),Object.defineProperty(this,"reveal",{get:function(){return Y}}),Object.defineProperty(this,"clean",{get:function(){return H}}),Object.defineProperty(this,"sync",{get:function(){return $}}),Object.defineProperty(this,"defaults",{get:function(){return U}}),Object.defineProperty(this,"version",{get:function(){return"4.0.9"}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),W||(W=this))}J.isSupported=function(){return function(){var e=document.documentElement.style;return"transform"in e||"WebkitTransform"in e}()&&function(){var e=document.documentElement.style;return"transition"in e||"WebkitTransition"in e}()},Object.defineProperty(J,"debug",{get:function(){return B||!1},set:function(e){return B="boolean"==typeof e?e:B}}),J();const Q=J;window.sr=Q();const Z={windowEl:window,documentEl:document,htmlEl:document.documentElement,bodyEl:document.body};let ee=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,n=!1,o=null,i=null;return function r(){for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];if(n)return o=a,void(i=this);e.apply(this,a),n=!0,setTimeout((()=>{n=!1,i&&(r.apply(i,o),i=null,o=null)}),t)}}((()=>{let e=window.innerHeight;document.documentElement.style.setProperty("--vh",`${e}px`)}));ee(),window.addEventListener("resize",ee);const te=()=>{var e;const t=null===(e=document)||void 0===e?void 0:e.querySelectorAll(".fixed-block"),n=(document.body,parseInt(Z.bodyEl.dataset.position,10));t.forEach((e=>{e.style.paddingRight="0px"})),Z.bodyEl.style.paddingRight="0px",Z.bodyEl.style.top="auto",Z.bodyEl.classList.remove("dis-scroll"),window.scroll({top:n,left:0}),Z.bodyEl.removeAttribute("data-position"),Z.htmlEl.style.scrollBehavior="smooth"};!function(){var e,t,n,o;const i=null===(e=document)||void 0===e?void 0:e.querySelector("[data-burger]"),r=null===(t=document)||void 0===t?void 0:t.querySelector("[data-menu]"),s=null===(n=document)||void 0===n?void 0:n.querySelectorAll("[data-menu-item]"),a=null===(o=document)||void 0===o?void 0:o.querySelector("[data-menu-overlay]");null==i||i.addEventListener("click",(e=>{var t;null==i||i.classList.toggle("burger--active"),null==r||r.classList.toggle("menu--active"),null===(t=document.querySelector(".header"))||void 0===t||t.classList.toggle("header--active")})),null==a||a.addEventListener("click",(()=>{var e;i.classList.remove("burger--active"),r.classList.remove("menu--active"),null===(e=document.querySelector(".header"))||void 0===e||e.classList.toggle("header--active"),te()})),null==s||s.forEach((e=>{e.addEventListener("click",(()=>{i.classList.remove("burger--active"),r.classList.remove("menu--active"),te()}))}))}(),(()=>{var e,t;const n=null===(e=document)||void 0===e||null===(t=e.querySelector(".header"))||void 0===t?void 0:t.offsetHeight;document.querySelector(":root").style.setProperty("--header-height",`${n}px`)})(),n(951),n(52)})()})();