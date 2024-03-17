var Fa=Object.defineProperty;var Na=(t,e,n)=>e in t?Fa(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var js=(t,e,n)=>(Na(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function rs(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const H={},vt=[],we=()=>{},Ma=()=>!1,Wn=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ss=t=>t.startsWith("onUpdate:"),ae=Object.assign,is=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},$a=Object.prototype.hasOwnProperty,F=(t,e)=>$a.call(t,e),V=Array.isArray,It=t=>Gn(t)==="[object Map]",Qi=t=>Gn(t)==="[object Set]",C=t=>typeof t=="function",X=t=>typeof t=="string",Nt=t=>typeof t=="symbol",K=t=>t!==null&&typeof t=="object",Yi=t=>(K(t)||C(t))&&C(t.then)&&C(t.catch),Ji=Object.prototype.toString,Gn=t=>Ji.call(t),La=t=>Gn(t).slice(8,-1),Xi=t=>Gn(t)==="[object Object]",os=t=>X(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,qt=rs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qn=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ka=/-(\w)/g,Vt=Qn(t=>t.replace(ka,(e,n)=>n?n.toUpperCase():"")),Ba=/\B([A-Z])/g,mt=Qn(t=>t.replace(Ba,"-$1").toLowerCase()),Zi=Qn(t=>t.charAt(0).toUpperCase()+t.slice(1)),gr=Qn(t=>t?`on${Zi(t)}`:""),ft=(t,e)=>!Object.is(t,e),Vn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Fn=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Dr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Hs;const eo=()=>Hs||(Hs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function as(t){if(V(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=X(r)?za(r):as(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(X(t)||K(t))return t}const Ua=/;(?![^(]*\))/g,ja=/:([^]+)/,Ha=/\/\*[^]*?\*\//g;function za(t){const e={};return t.replace(Ha,"").split(Ua).forEach(n=>{if(n){const r=n.split(ja);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ls(t){let e="";if(X(t))e=t;else if(V(t))for(let n=0;n<t.length;n++){const r=ls(t[n]);r&&(e+=r+" ")}else if(K(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const qa="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ka=rs(qa);function to(t){return!!t||t===""}const no=t=>X(t)?t:t==null?"":V(t)||K(t)&&(t.toString===Ji||!C(t.toString))?JSON.stringify(t,ro,2):String(t),ro=(t,e)=>e&&e.__v_isRef?ro(t,e.value):It(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[_r(r,i)+" =>"]=s,n),{})}:Qi(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>_r(n))}:Nt(e)?_r(e):K(e)&&!V(e)&&!Xi(e)?String(e):e,_r=(t,e="")=>{var n;return Nt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ie;class Wa{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ie,!e&&Ie&&(this.index=(Ie.scopes||(Ie.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ie;try{return Ie=this,e()}finally{Ie=n}}}on(){Ie=this}off(){Ie=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Ga(t,e=Ie){e&&e.active&&e.effects.push(t)}function Qa(){return Ie}let lt;class cs{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Ga(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,gt();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Ya(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),_t()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Qe,n=lt;try{return Qe=!0,lt=this,this._runnings++,zs(this),this.fn()}finally{qs(this),this._runnings--,lt=n,Qe=e}}stop(){var e;this.active&&(zs(this),qs(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function Ya(t){return t.value}function zs(t){t._trackId++,t._depsLength=0}function qs(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)so(t.deps[e],t);t.deps.length=t._depsLength}}function so(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Qe=!0,Or=0;const io=[];function gt(){io.push(Qe),Qe=!1}function _t(){const t=io.pop();Qe=t===void 0?!0:t}function us(){Or++}function fs(){for(Or--;!Or&&Fr.length;)Fr.shift()()}function oo(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&so(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Fr=[];function ao(t,e,n){us();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Fr.push(r.scheduler)))}fs()}const lo=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Nr=new WeakMap,ct=Symbol(""),Mr=Symbol("");function pe(t,e,n){if(Qe&&lt){let r=Nr.get(t);r||Nr.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=lo(()=>r.delete(n))),oo(lt,s)}}function Le(t,e,n,r,s,i){const o=Nr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&V(t)){const l=Number(r);o.forEach((u,h)=>{(h==="length"||!Nt(h)&&h>=l)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":V(t)?os(n)&&a.push(o.get("length")):(a.push(o.get(ct)),It(t)&&a.push(o.get(Mr)));break;case"delete":V(t)||(a.push(o.get(ct)),It(t)&&a.push(o.get(Mr)));break;case"set":It(t)&&a.push(o.get(ct));break}us();for(const l of a)l&&ao(l,4);fs()}const Ja=rs("__proto__,__v_isRef,__isVue"),co=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Nt)),Ks=Xa();function Xa(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=L(this);for(let i=0,o=this.length;i<o;i++)pe(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(L)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){gt(),us();const r=L(this)[e].apply(this,n);return fs(),_t(),r}}),t}function Za(t){const e=L(this);return pe(e,"has",t),e.hasOwnProperty(t)}class uo{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?hl:mo:i?po:ho).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=V(e);if(!s){if(o&&F(Ks,n))return Reflect.get(Ks,n,r);if(n==="hasOwnProperty")return Za}const a=Reflect.get(e,n,r);return(Nt(n)?co.has(n):Ja(n))||(s||pe(e,"get",n),i)?a:be(a)?o&&os(n)?a:a.value:K(a)?s?go(a):ps(a):a}}class fo extends uo{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Xt(i);if(!$r(r)&&!Xt(r)&&(i=L(i),r=L(r)),!V(e)&&be(i)&&!be(r))return l?!1:(i.value=r,!0)}const o=V(e)&&os(n)?Number(n)<e.length:F(e,n),a=Reflect.set(e,n,r,s);return e===L(s)&&(o?ft(r,i)&&Le(e,"set",n,r):Le(e,"add",n,r)),a}deleteProperty(e,n){const r=F(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Le(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Nt(n)||!co.has(n))&&pe(e,"has",n),r}ownKeys(e){return pe(e,"iterate",V(e)?"length":ct),Reflect.ownKeys(e)}}class el extends uo{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const tl=new fo,nl=new el,rl=new fo(!0),hs=t=>t,Yn=t=>Reflect.getPrototypeOf(t);function bn(t,e,n=!1,r=!1){t=t.__v_raw;const s=L(t),i=L(e);n||(ft(e,i)&&pe(s,"get",e),pe(s,"get",i));const{has:o}=Yn(s),a=r?hs:n?_s:gs;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function En(t,e=!1){const n=this.__v_raw,r=L(n),s=L(t);return e||(ft(t,s)&&pe(r,"has",t),pe(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function wn(t,e=!1){return t=t.__v_raw,!e&&pe(L(t),"iterate",ct),Reflect.get(t,"size",t)}function Ws(t){t=L(t);const e=L(this);return Yn(e).has.call(e,t)||(e.add(t),Le(e,"add",t,t)),this}function Gs(t,e){e=L(e);const n=L(this),{has:r,get:s}=Yn(n);let i=r.call(n,t);i||(t=L(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?ft(e,o)&&Le(n,"set",t,e):Le(n,"add",t,e),this}function Qs(t){const e=L(this),{has:n,get:r}=Yn(e);let s=n.call(e,t);s||(t=L(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Le(e,"delete",t,void 0),i}function Ys(){const t=L(this),e=t.size!==0,n=t.clear();return e&&Le(t,"clear",void 0,void 0),n}function vn(t,e){return function(r,s){const i=this,o=i.__v_raw,a=L(o),l=e?hs:t?_s:gs;return!t&&pe(a,"iterate",ct),o.forEach((u,h)=>r.call(s,l(u),l(h),i))}}function In(t,e,n){return function(...r){const s=this.__v_raw,i=L(s),o=It(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),h=n?hs:e?_s:gs;return!e&&pe(i,"iterate",l?Mr:ct),{next(){const{value:g,done:E}=u.next();return E?{value:g,done:E}:{value:a?[h(g[0]),h(g[1])]:h(g),done:E}},[Symbol.iterator](){return this}}}}function He(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function sl(){const t={get(i){return bn(this,i)},get size(){return wn(this)},has:En,add:Ws,set:Gs,delete:Qs,clear:Ys,forEach:vn(!1,!1)},e={get(i){return bn(this,i,!1,!0)},get size(){return wn(this)},has:En,add:Ws,set:Gs,delete:Qs,clear:Ys,forEach:vn(!1,!0)},n={get(i){return bn(this,i,!0)},get size(){return wn(this,!0)},has(i){return En.call(this,i,!0)},add:He("add"),set:He("set"),delete:He("delete"),clear:He("clear"),forEach:vn(!0,!1)},r={get(i){return bn(this,i,!0,!0)},get size(){return wn(this,!0)},has(i){return En.call(this,i,!0)},add:He("add"),set:He("set"),delete:He("delete"),clear:He("clear"),forEach:vn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=In(i,!1,!1),n[i]=In(i,!0,!1),e[i]=In(i,!1,!0),r[i]=In(i,!0,!0)}),[t,n,e,r]}const[il,ol,al,ll]=sl();function ds(t,e){const n=e?t?ll:al:t?ol:il;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(F(n,s)&&s in r?n:r,s,i)}const cl={get:ds(!1,!1)},ul={get:ds(!1,!0)},fl={get:ds(!0,!1)},ho=new WeakMap,po=new WeakMap,mo=new WeakMap,hl=new WeakMap;function dl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pl(t){return t.__v_skip||!Object.isExtensible(t)?0:dl(La(t))}function ps(t){return Xt(t)?t:ms(t,!1,tl,cl,ho)}function ml(t){return ms(t,!1,rl,ul,po)}function go(t){return ms(t,!0,nl,fl,mo)}function ms(t,e,n,r,s){if(!K(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=pl(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Tt(t){return Xt(t)?Tt(t.__v_raw):!!(t&&t.__v_isReactive)}function Xt(t){return!!(t&&t.__v_isReadonly)}function $r(t){return!!(t&&t.__v_isShallow)}function _o(t){return Tt(t)||Xt(t)}function L(t){const e=t&&t.__v_raw;return e?L(e):t}function yo(t){return Object.isExtensible(t)&&Fn(t,"__v_skip",!0),t}const gs=t=>K(t)?ps(t):t,_s=t=>K(t)?go(t):t;class bo{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new cs(()=>e(this._value),()=>yr(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=L(this);return(!e._cacheable||e.effect.dirty)&&ft(e._value,e._value=e.effect.run())&&yr(e,4),_l(e),e.effect._dirtyLevel>=2&&yr(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function gl(t,e,n=!1){let r,s;const i=C(t);return i?(r=t,s=we):(r=t.get,s=t.set),new bo(r,s,i||!s,n)}function _l(t){var e;Qe&&lt&&(t=L(t),oo(lt,(e=t.dep)!=null?e:t.dep=lo(()=>t.dep=void 0,t instanceof bo?t:void 0)))}function yr(t,e=4,n){t=L(t);const r=t.dep;r&&ao(r,e)}function be(t){return!!(t&&t.__v_isRef===!0)}function yl(t){return be(t)?t.value:t}const bl={get:(t,e,n)=>yl(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return be(s)&&!be(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Eo(t){return Tt(t)?t:new Proxy(t,bl)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ye(t,e,n,r){try{return r?t(...r):t()}catch(s){Jn(s,e,n)}}function Pe(t,e,n,r){if(C(t)){const i=Ye(t,e,n,r);return i&&Yi(i)&&i.catch(o=>{Jn(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Pe(t[i],e,n,r));return s}function Jn(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const u=i.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Ye(l,null,10,[t,o,a]);return}}El(t,n,s,r)}function El(t,e,n,r=!0){console.error(t)}let Zt=!1,Lr=!1;const oe=[];let Fe=0;const At=[];let ze=null,ot=0;const wo=Promise.resolve();let ys=null;function wl(t){const e=ys||wo;return t?e.then(this?t.bind(this):t):e}function vl(t){let e=Fe+1,n=oe.length;for(;e<n;){const r=e+n>>>1,s=oe[r],i=en(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function bs(t){(!oe.length||!oe.includes(t,Zt&&t.allowRecurse?Fe+1:Fe))&&(t.id==null?oe.push(t):oe.splice(vl(t.id),0,t),vo())}function vo(){!Zt&&!Lr&&(Lr=!0,ys=wo.then(To))}function Il(t){const e=oe.indexOf(t);e>Fe&&oe.splice(e,1)}function Tl(t){V(t)?At.push(...t):(!ze||!ze.includes(t,t.allowRecurse?ot+1:ot))&&At.push(t),vo()}function Js(t,e,n=Zt?Fe+1:0){for(;n<oe.length;n++){const r=oe[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;oe.splice(n,1),n--,r()}}}function Io(t){if(At.length){const e=[...new Set(At)].sort((n,r)=>en(n)-en(r));if(At.length=0,ze){ze.push(...e);return}for(ze=e,ot=0;ot<ze.length;ot++)ze[ot]();ze=null,ot=0}}const en=t=>t.id==null?1/0:t.id,Al=(t,e)=>{const n=en(t)-en(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function To(t){Lr=!1,Zt=!0,oe.sort(Al);try{for(Fe=0;Fe<oe.length;Fe++){const e=oe[Fe];e&&e.active!==!1&&Ye(e,null,14)}}finally{Fe=0,oe.length=0,Io(),Zt=!1,ys=null,(oe.length||At.length)&&To()}}function Pl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||H;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const h=`${o==="modelValue"?"model":o}Modifiers`,{number:g,trim:E}=r[h]||H;E&&(s=n.map(T=>X(T)?T.trim():T)),g&&(s=n.map(Dr))}let a,l=r[a=gr(e)]||r[a=gr(Vt(e))];!l&&i&&(l=r[a=gr(mt(e))]),l&&Pe(l,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Pe(u,t,6,s)}}function Ao(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!C(t)){const l=u=>{const h=Ao(u,e,!0);h&&(a=!0,ae(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(K(t)&&r.set(t,null),null):(V(i)?i.forEach(l=>o[l]=null):ae(o,i),K(t)&&r.set(t,o),o)}function Xn(t,e){return!t||!Wn(e)?!1:(e=e.slice(2).replace(/Once$/,""),F(t,e[0].toLowerCase()+e.slice(1))||F(t,mt(e))||F(t,e))}let ge=null,Po=null;function Nn(t){const e=ge;return ge=t,Po=t&&t.type.__scopeId||null,e}function Sl(t,e=ge,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ai(-1);const i=Nn(e);let o;try{o=t(...s)}finally{Nn(i),r._d&&ai(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function br(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:u,render:h,renderCache:g,data:E,setupState:T,ctx:M,inheritAttrs:$}=t;let Z,Q;const Re=Nn(t);try{if(n.shapeFlag&4){const ee=s||r,Ee=ee;Z=Oe(h.call(Ee,ee,g,i,T,E,M)),Q=l}else{const ee=e;Z=Oe(ee.length>1?ee(i,{attrs:l,slots:a,emit:u}):ee(i,null)),Q=e.props?l:Rl(l)}}catch(ee){Gt.length=0,Jn(ee,t,1),Z=ke(tn)}let U=Z;if(Q&&$!==!1){const ee=Object.keys(Q),{shapeFlag:Ee}=U;ee.length&&Ee&7&&(o&&ee.some(ss)&&(Q=Vl(Q,o)),U=xt(U,Q))}return n.dirs&&(U=xt(U),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&(U.transition=n.transition),Z=U,Nn(Re),Z}const Rl=t=>{let e;for(const n in t)(n==="class"||n==="style"||Wn(n))&&((e||(e={}))[n]=t[n]);return e},Vl=(t,e)=>{const n={};for(const r in t)(!ss(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function xl(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Xs(r,o,u):!!o;if(l&8){const h=e.dynamicProps;for(let g=0;g<h.length;g++){const E=h[g];if(o[E]!==r[E]&&!Xn(u,E))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Xs(r,o,u):!0:!!o;return!1}function Xs(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Xn(n,i))return!0}return!1}function Cl({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Dl=Symbol.for("v-ndc"),Ol=t=>t.__isSuspense;function Fl(t,e){e&&e.pendingBranch?V(t)?e.effects.push(...t):e.effects.push(t):Tl(t)}const Nl=Symbol.for("v-scx"),Ml=()=>Cn(Nl),Tn={};function Er(t,e,n){return So(t,e,n)}function So(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=H){if(e&&i){const N=e;e=(...Me)=>{N(...Me),Ee()}}const l=ue,u=N=>r===!0?N:at(N,r===!1?1:void 0);let h,g=!1,E=!1;if(be(t)?(h=()=>t.value,g=$r(t)):Tt(t)?(h=()=>u(t),g=!0):V(t)?(E=!0,g=t.some(N=>Tt(N)||$r(N)),h=()=>t.map(N=>{if(be(N))return N.value;if(Tt(N))return u(N);if(C(N))return Ye(N,l,2)})):C(t)?e?h=()=>Ye(t,l,2):h=()=>(T&&T(),Pe(t,l,3,[M])):h=we,e&&r){const N=h;h=()=>at(N())}let T,M=N=>{T=U.onStop=()=>{Ye(N,l,4),T=U.onStop=void 0}},$;if(nr)if(M=we,e?n&&Pe(e,l,3,[h(),E?[]:void 0,M]):h(),s==="sync"){const N=Ml();$=N.__watcherHandles||(N.__watcherHandles=[])}else return we;let Z=E?new Array(t.length).fill(Tn):Tn;const Q=()=>{if(!(!U.active||!U.dirty))if(e){const N=U.run();(r||g||(E?N.some((Me,Ve)=>ft(Me,Z[Ve])):ft(N,Z)))&&(T&&T(),Pe(e,l,3,[N,Z===Tn?void 0:E&&Z[0]===Tn?[]:Z,M]),Z=N)}else U.run()};Q.allowRecurse=!!e;let Re;s==="sync"?Re=Q:s==="post"?Re=()=>fe(Q,l&&l.suspense):(Q.pre=!0,l&&(Q.id=l.uid),Re=()=>bs(Q));const U=new cs(h,we,Re),ee=Qa(),Ee=()=>{U.stop(),ee&&is(ee.effects,U)};return e?n?Q():Z=U.run():s==="post"?fe(U.run.bind(U),l&&l.suspense):U.run(),$&&$.push(Ee),Ee}function $l(t,e,n){const r=this.proxy,s=X(t)?t.includes(".")?Ro(r,t):()=>r[t]:t.bind(r,r);let i;C(e)?i=e:(i=e.handler,n=e);const o=dn(this),a=So(s,i.bind(r),n);return o(),a}function Ro(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function at(t,e,n=0,r){if(!K(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),be(t))at(t.value,e,n,r);else if(V(t))for(let s=0;s<t.length;s++)at(t[s],e,n,r);else if(Qi(t)||It(t))t.forEach(s=>{at(s,e,n,r)});else if(Xi(t))for(const s in t)at(t[s],e,n,r);return t}function Ll(t,e){if(ge===null)return t;const n=rr(ge)||ge.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=H]=e[s];i&&(C(i)&&(i={mounted:i,updated:i}),i.deep&&at(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function rt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(gt(),Pe(l,n,8,[t.el,a,t,e]),_t())}}const xn=t=>!!t.type.__asyncLoader,Vo=t=>t.type.__isKeepAlive;function kl(t,e){xo(t,"a",e)}function Bl(t,e){xo(t,"da",e)}function xo(t,e,n=ue){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Zn(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Vo(s.parent.vnode)&&Ul(r,e,n,s),s=s.parent}}function Ul(t,e,n,r){const s=Zn(e,t,r,!0);Co(()=>{is(r[e],s)},n)}function Zn(t,e,n=ue,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;gt();const a=dn(n),l=Pe(e,n,t,o);return a(),_t(),l});return r?s.unshift(i):s.push(i),i}}const je=t=>(e,n=ue)=>(!nr||t==="sp")&&Zn(t,(...r)=>e(...r),n),jl=je("bm"),Hl=je("m"),zl=je("bu"),ql=je("u"),Kl=je("bum"),Co=je("um"),Wl=je("sp"),Gl=je("rtg"),Ql=je("rtc");function Yl(t,e=ue){Zn("ec",t,e)}function Do(t,e,n,r){let s;const i=n&&n[r];if(V(t)||X(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(K(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const u=o[a];s[a]=e(t[u],u,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const kr=t=>t?qo(t)?rr(t)||t.proxy:kr(t.parent):null,Kt=ae(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>kr(t.parent),$root:t=>kr(t.root),$emit:t=>t.emit,$options:t=>Es(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,bs(t.update)}),$nextTick:t=>t.n||(t.n=wl.bind(t.proxy)),$watch:t=>$l.bind(t)}),wr=(t,e)=>t!==H&&!t.__isScriptSetup&&F(t,e),Jl={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const T=o[e];if(T!==void 0)switch(T){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(wr(r,e))return o[e]=1,r[e];if(s!==H&&F(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&F(u,e))return o[e]=3,i[e];if(n!==H&&F(n,e))return o[e]=4,n[e];Br&&(o[e]=0)}}const h=Kt[e];let g,E;if(h)return e==="$attrs"&&pe(t,"get",e),h(t);if((g=a.__cssModules)&&(g=g[e]))return g;if(n!==H&&F(n,e))return o[e]=4,n[e];if(E=l.config.globalProperties,F(E,e))return E[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return wr(s,e)?(s[e]=n,!0):r!==H&&F(r,e)?(r[e]=n,!0):F(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==H&&F(t,o)||wr(e,o)||(a=i[0])&&F(a,o)||F(r,o)||F(Kt,o)||F(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:F(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Zs(t){return V(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Br=!0;function Xl(t){const e=Es(t),n=t.proxy,r=t.ctx;Br=!1,e.beforeCreate&&ei(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:u,created:h,beforeMount:g,mounted:E,beforeUpdate:T,updated:M,activated:$,deactivated:Z,beforeDestroy:Q,beforeUnmount:Re,destroyed:U,unmounted:ee,render:Ee,renderTracked:N,renderTriggered:Me,errorCaptured:Ve,serverPrefetch:fr,expose:et,inheritAttrs:kt,components:mn,directives:gn,filters:hr}=e;if(u&&Zl(u,r,null),o)for(const q in o){const j=o[q];C(j)&&(r[q]=j.bind(n))}if(s){const q=s.call(n,n);K(q)&&(t.data=ps(q))}if(Br=!0,i)for(const q in i){const j=i[q],tt=C(j)?j.bind(n,n):C(j.get)?j.get.bind(n,n):we,_n=!C(j)&&C(j.set)?j.set.bind(n):we,nt=xc({get:tt,set:_n});Object.defineProperty(r,q,{enumerable:!0,configurable:!0,get:()=>nt.value,set:xe=>nt.value=xe})}if(a)for(const q in a)Oo(a[q],r,n,q);if(l){const q=C(l)?l.call(n):l;Reflect.ownKeys(q).forEach(j=>{ic(j,q[j])})}h&&ei(h,t,"c");function le(q,j){V(j)?j.forEach(tt=>q(tt.bind(n))):j&&q(j.bind(n))}if(le(jl,g),le(Hl,E),le(zl,T),le(ql,M),le(kl,$),le(Bl,Z),le(Yl,Ve),le(Ql,N),le(Gl,Me),le(Kl,Re),le(Co,ee),le(Wl,fr),V(et))if(et.length){const q=t.exposed||(t.exposed={});et.forEach(j=>{Object.defineProperty(q,j,{get:()=>n[j],set:tt=>n[j]=tt})})}else t.exposed||(t.exposed={});Ee&&t.render===we&&(t.render=Ee),kt!=null&&(t.inheritAttrs=kt),mn&&(t.components=mn),gn&&(t.directives=gn)}function Zl(t,e,n=we){V(t)&&(t=Ur(t));for(const r in t){const s=t[r];let i;K(s)?"default"in s?i=Cn(s.from||r,s.default,!0):i=Cn(s.from||r):i=Cn(s),be(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function ei(t,e,n){Pe(V(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Oo(t,e,n,r){const s=r.includes(".")?Ro(n,r):()=>n[r];if(X(t)){const i=e[t];C(i)&&Er(s,i)}else if(C(t))Er(s,t.bind(n));else if(K(t))if(V(t))t.forEach(i=>Oo(i,e,n,r));else{const i=C(t.handler)?t.handler.bind(n):e[t.handler];C(i)&&Er(s,i,t)}}function Es(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>Mn(l,u,o,!0)),Mn(l,e,o)),K(e)&&i.set(e,l),l}function Mn(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Mn(t,i,n,!0),s&&s.forEach(o=>Mn(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=ec[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const ec={data:ti,props:ni,emits:ni,methods:zt,computed:zt,beforeCreate:ce,created:ce,beforeMount:ce,mounted:ce,beforeUpdate:ce,updated:ce,beforeDestroy:ce,beforeUnmount:ce,destroyed:ce,unmounted:ce,activated:ce,deactivated:ce,errorCaptured:ce,serverPrefetch:ce,components:zt,directives:zt,watch:nc,provide:ti,inject:tc};function ti(t,e){return e?t?function(){return ae(C(t)?t.call(this,this):t,C(e)?e.call(this,this):e)}:e:t}function tc(t,e){return zt(Ur(t),Ur(e))}function Ur(t){if(V(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ce(t,e){return t?[...new Set([].concat(t,e))]:e}function zt(t,e){return t?ae(Object.create(null),t,e):e}function ni(t,e){return t?V(t)&&V(e)?[...new Set([...t,...e])]:ae(Object.create(null),Zs(t),Zs(e??{})):e}function nc(t,e){if(!t)return e;if(!e)return t;const n=ae(Object.create(null),t);for(const r in e)n[r]=ce(t[r],e[r]);return n}function Fo(){return{app:null,config:{isNativeTag:Ma,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let rc=0;function sc(t,e){return function(r,s=null){C(r)||(r=ae({},r)),s!=null&&!K(s)&&(s=null);const i=Fo(),o=new WeakSet;let a=!1;const l=i.app={_uid:rc++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Cc,get config(){return i.config},set config(u){},use(u,...h){return o.has(u)||(u&&C(u.install)?(o.add(u),u.install(l,...h)):C(u)&&(o.add(u),u(l,...h))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,h){return h?(i.components[u]=h,l):i.components[u]},directive(u,h){return h?(i.directives[u]=h,l):i.directives[u]},mount(u,h,g){if(!a){const E=ke(r,s);return E.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),h&&e?e(E,u):t(E,u,g),a=!0,l._container=u,u.__vue_app__=l,rr(E.component)||E.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(u,h){return i.provides[u]=h,l},runWithContext(u){const h=Wt;Wt=l;try{return u()}finally{Wt=h}}};return l}}let Wt=null;function ic(t,e){if(ue){let n=ue.provides;const r=ue.parent&&ue.parent.provides;r===n&&(n=ue.provides=Object.create(r)),n[t]=e}}function Cn(t,e,n=!1){const r=ue||ge;if(r||Wt){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Wt._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&C(e)?e.call(r&&r.proxy):e}}function oc(t,e,n,r=!1){const s={},i={};Fn(i,tr,1),t.propsDefaults=Object.create(null),No(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:ml(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function ac(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=L(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let g=0;g<h.length;g++){let E=h[g];if(Xn(t.emitsOptions,E))continue;const T=e[E];if(l)if(F(i,E))T!==i[E]&&(i[E]=T,u=!0);else{const M=Vt(E);s[M]=jr(l,a,M,T,t,!1)}else T!==i[E]&&(i[E]=T,u=!0)}}}else{No(t,e,s,i)&&(u=!0);let h;for(const g in a)(!e||!F(e,g)&&((h=mt(g))===g||!F(e,h)))&&(l?n&&(n[g]!==void 0||n[h]!==void 0)&&(s[g]=jr(l,a,g,void 0,t,!0)):delete s[g]);if(i!==a)for(const g in i)(!e||!F(e,g))&&(delete i[g],u=!0)}u&&Le(t,"set","$attrs")}function No(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(qt(l))continue;const u=e[l];let h;s&&F(s,h=Vt(l))?!i||!i.includes(h)?n[h]=u:(a||(a={}))[h]=u:Xn(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=L(n),u=a||H;for(let h=0;h<i.length;h++){const g=i[h];n[g]=jr(s,l,g,u[g],t,!F(u,g))}}return o}function jr(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=F(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&C(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=dn(s);r=u[n]=l.call(null,e),h()}}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===mt(n))&&(r=!0))}return r}function Mo(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!C(t)){const h=g=>{l=!0;const[E,T]=Mo(g,e,!0);ae(o,E),T&&a.push(...T)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!l)return K(t)&&r.set(t,vt),vt;if(V(i))for(let h=0;h<i.length;h++){const g=Vt(i[h]);ri(g)&&(o[g]=H)}else if(i)for(const h in i){const g=Vt(h);if(ri(g)){const E=i[h],T=o[g]=V(E)||C(E)?{type:E}:ae({},E);if(T){const M=oi(Boolean,T.type),$=oi(String,T.type);T[0]=M>-1,T[1]=$<0||M<$,(M>-1||F(T,"default"))&&a.push(g)}}}const u=[o,a];return K(t)&&r.set(t,u),u}function ri(t){return t[0]!=="$"&&!qt(t)}function si(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function ii(t,e){return si(t)===si(e)}function oi(t,e){return V(e)?e.findIndex(n=>ii(n,t)):C(e)&&ii(e,t)?0:-1}const $o=t=>t[0]==="_"||t==="$stable",ws=t=>V(t)?t.map(Oe):[Oe(t)],lc=(t,e,n)=>{if(e._n)return e;const r=Sl((...s)=>ws(e(...s)),n);return r._c=!1,r},Lo=(t,e,n)=>{const r=t._ctx;for(const s in t){if($o(s))continue;const i=t[s];if(C(i))e[s]=lc(s,i,r);else if(i!=null){const o=ws(i);e[s]=()=>o}}},ko=(t,e)=>{const n=ws(e);t.slots.default=()=>n},cc=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=L(e),Fn(e,"_",n)):Lo(e,t.slots={})}else t.slots={},e&&ko(t,e);Fn(t.slots,tr,1)},uc=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=H;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ae(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Lo(e,s)),o=e}else e&&(ko(t,e),o={default:1});if(i)for(const a in s)!$o(a)&&o[a]==null&&delete s[a]};function Hr(t,e,n,r,s=!1){if(V(t)){t.forEach((E,T)=>Hr(E,e&&(V(e)?e[T]:e),n,r,s));return}if(xn(r)&&!s)return;const i=r.shapeFlag&4?rr(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,u=e&&e.r,h=a.refs===H?a.refs={}:a.refs,g=a.setupState;if(u!=null&&u!==l&&(X(u)?(h[u]=null,F(g,u)&&(g[u]=null)):be(u)&&(u.value=null)),C(l))Ye(l,a,12,[o,h]);else{const E=X(l),T=be(l);if(E||T){const M=()=>{if(t.f){const $=E?F(g,l)?g[l]:h[l]:l.value;s?V($)&&is($,i):V($)?$.includes(i)||$.push(i):E?(h[l]=[i],F(g,l)&&(g[l]=h[l])):(l.value=[i],t.k&&(h[t.k]=l.value))}else E?(h[l]=o,F(g,l)&&(g[l]=o)):T&&(l.value=o,t.k&&(h[t.k]=o))};o?(M.id=-1,fe(M,n)):M()}}}const fe=Fl;function fc(t){return hc(t)}function hc(t,e){const n=eo();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:h,parentNode:g,nextSibling:E,setScopeId:T=we,insertStaticContent:M}=t,$=(c,f,d,p=null,m=null,b=null,v=void 0,y=null,w=!!f.dynamicChildren)=>{if(c===f)return;c&&!Ut(c,f)&&(p=yn(c),xe(c,m,b,!0),c=null),f.patchFlag===-2&&(w=!1,f.dynamicChildren=null);const{type:_,ref:I,shapeFlag:P}=f;switch(_){case er:Z(c,f,d,p);break;case tn:Q(c,f,d,p);break;case Ir:c==null&&Re(f,d,p,v);break;case Te:mn(c,f,d,p,m,b,v,y,w);break;default:P&1?Ee(c,f,d,p,m,b,v,y,w):P&6?gn(c,f,d,p,m,b,v,y,w):(P&64||P&128)&&_.process(c,f,d,p,m,b,v,y,w,yt)}I!=null&&m&&Hr(I,c&&c.ref,b,f||c,!f)},Z=(c,f,d,p)=>{if(c==null)r(f.el=a(f.children),d,p);else{const m=f.el=c.el;f.children!==c.children&&u(m,f.children)}},Q=(c,f,d,p)=>{c==null?r(f.el=l(f.children||""),d,p):f.el=c.el},Re=(c,f,d,p)=>{[c.el,c.anchor]=M(c.children,f,d,p,c.el,c.anchor)},U=({el:c,anchor:f},d,p)=>{let m;for(;c&&c!==f;)m=E(c),r(c,d,p),c=m;r(f,d,p)},ee=({el:c,anchor:f})=>{let d;for(;c&&c!==f;)d=E(c),s(c),c=d;s(f)},Ee=(c,f,d,p,m,b,v,y,w)=>{f.type==="svg"?v="svg":f.type==="math"&&(v="mathml"),c==null?N(f,d,p,m,b,v,y,w):fr(c,f,m,b,v,y,w)},N=(c,f,d,p,m,b,v,y)=>{let w,_;const{props:I,shapeFlag:P,transition:A,dirs:R}=c;if(w=c.el=o(c.type,b,I&&I.is,I),P&8?h(w,c.children):P&16&&Ve(c.children,w,null,p,m,vr(c,b),v,y),R&&rt(c,null,p,"created"),Me(w,c,c.scopeId,v,p),I){for(const k in I)k!=="value"&&!qt(k)&&i(w,k,null,I[k],b,c.children,p,m,$e);"value"in I&&i(w,"value",null,I.value,b),(_=I.onVnodeBeforeMount)&&De(_,p,c)}R&&rt(c,null,p,"beforeMount");const D=dc(m,A);D&&A.beforeEnter(w),r(w,f,d),((_=I&&I.onVnodeMounted)||D||R)&&fe(()=>{_&&De(_,p,c),D&&A.enter(w),R&&rt(c,null,p,"mounted")},m)},Me=(c,f,d,p,m)=>{if(d&&T(c,d),p)for(let b=0;b<p.length;b++)T(c,p[b]);if(m){let b=m.subTree;if(f===b){const v=m.vnode;Me(c,v,v.scopeId,v.slotScopeIds,m.parent)}}},Ve=(c,f,d,p,m,b,v,y,w=0)=>{for(let _=w;_<c.length;_++){const I=c[_]=y?qe(c[_]):Oe(c[_]);$(null,I,f,d,p,m,b,v,y)}},fr=(c,f,d,p,m,b,v)=>{const y=f.el=c.el;let{patchFlag:w,dynamicChildren:_,dirs:I}=f;w|=c.patchFlag&16;const P=c.props||H,A=f.props||H;let R;if(d&&st(d,!1),(R=A.onVnodeBeforeUpdate)&&De(R,d,f,c),I&&rt(f,c,d,"beforeUpdate"),d&&st(d,!0),_?et(c.dynamicChildren,_,y,d,p,vr(f,m),b):v||j(c,f,y,null,d,p,vr(f,m),b,!1),w>0){if(w&16)kt(y,f,P,A,d,p,m);else if(w&2&&P.class!==A.class&&i(y,"class",null,A.class,m),w&4&&i(y,"style",P.style,A.style,m),w&8){const D=f.dynamicProps;for(let k=0;k<D.length;k++){const z=D[k],te=P[z],ve=A[z];(ve!==te||z==="value")&&i(y,z,te,ve,m,c.children,d,p,$e)}}w&1&&c.children!==f.children&&h(y,f.children)}else!v&&_==null&&kt(y,f,P,A,d,p,m);((R=A.onVnodeUpdated)||I)&&fe(()=>{R&&De(R,d,f,c),I&&rt(f,c,d,"updated")},p)},et=(c,f,d,p,m,b,v)=>{for(let y=0;y<f.length;y++){const w=c[y],_=f[y],I=w.el&&(w.type===Te||!Ut(w,_)||w.shapeFlag&70)?g(w.el):d;$(w,_,I,null,p,m,b,v,!0)}},kt=(c,f,d,p,m,b,v)=>{if(d!==p){if(d!==H)for(const y in d)!qt(y)&&!(y in p)&&i(c,y,d[y],null,v,f.children,m,b,$e);for(const y in p){if(qt(y))continue;const w=p[y],_=d[y];w!==_&&y!=="value"&&i(c,y,_,w,v,f.children,m,b,$e)}"value"in p&&i(c,"value",d.value,p.value,v)}},mn=(c,f,d,p,m,b,v,y,w)=>{const _=f.el=c?c.el:a(""),I=f.anchor=c?c.anchor:a("");let{patchFlag:P,dynamicChildren:A,slotScopeIds:R}=f;R&&(y=y?y.concat(R):R),c==null?(r(_,d,p),r(I,d,p),Ve(f.children||[],d,I,m,b,v,y,w)):P>0&&P&64&&A&&c.dynamicChildren?(et(c.dynamicChildren,A,d,m,b,v,y),(f.key!=null||m&&f===m.subTree)&&Bo(c,f,!0)):j(c,f,d,I,m,b,v,y,w)},gn=(c,f,d,p,m,b,v,y,w)=>{f.slotScopeIds=y,c==null?f.shapeFlag&512?m.ctx.activate(f,d,p,v,w):hr(f,d,p,m,b,v,w):Ms(c,f,w)},hr=(c,f,d,p,m,b,v)=>{const y=c.component=Tc(c,p,m);if(Vo(c)&&(y.ctx.renderer=yt),Ac(y),y.asyncDep){if(m&&m.registerDep(y,le),!c.el){const w=y.subTree=ke(tn);Q(null,w,f,d)}}else le(y,c,f,d,m,b,v)},Ms=(c,f,d)=>{const p=f.component=c.component;if(xl(c,f,d))if(p.asyncDep&&!p.asyncResolved){q(p,f,d);return}else p.next=f,Il(p.update),p.effect.dirty=!0,p.update();else f.el=c.el,p.vnode=f},le=(c,f,d,p,m,b,v)=>{const y=()=>{if(c.isMounted){let{next:I,bu:P,u:A,parent:R,vnode:D}=c;{const bt=Uo(c);if(bt){I&&(I.el=D.el,q(c,I,v)),bt.asyncDep.then(()=>{c.isUnmounted||y()});return}}let k=I,z;st(c,!1),I?(I.el=D.el,q(c,I,v)):I=D,P&&Vn(P),(z=I.props&&I.props.onVnodeBeforeUpdate)&&De(z,R,I,D),st(c,!0);const te=br(c),ve=c.subTree;c.subTree=te,$(ve,te,g(ve.el),yn(ve),c,m,b),I.el=te.el,k===null&&Cl(c,te.el),A&&fe(A,m),(z=I.props&&I.props.onVnodeUpdated)&&fe(()=>De(z,R,I,D),m)}else{let I;const{el:P,props:A}=f,{bm:R,m:D,parent:k}=c,z=xn(f);if(st(c,!1),R&&Vn(R),!z&&(I=A&&A.onVnodeBeforeMount)&&De(I,k,f),st(c,!0),P&&mr){const te=()=>{c.subTree=br(c),mr(P,c.subTree,c,m,null)};z?f.type.__asyncLoader().then(()=>!c.isUnmounted&&te()):te()}else{const te=c.subTree=br(c);$(null,te,d,p,c,m,b),f.el=te.el}if(D&&fe(D,m),!z&&(I=A&&A.onVnodeMounted)){const te=f;fe(()=>De(I,k,te),m)}(f.shapeFlag&256||k&&xn(k.vnode)&&k.vnode.shapeFlag&256)&&c.a&&fe(c.a,m),c.isMounted=!0,f=d=p=null}},w=c.effect=new cs(y,we,()=>bs(_),c.scope),_=c.update=()=>{w.dirty&&w.run()};_.id=c.uid,st(c,!0),_()},q=(c,f,d)=>{f.component=c;const p=c.vnode.props;c.vnode=f,c.next=null,ac(c,f.props,p,d),uc(c,f.children,d),gt(),Js(c),_t()},j=(c,f,d,p,m,b,v,y,w=!1)=>{const _=c&&c.children,I=c?c.shapeFlag:0,P=f.children,{patchFlag:A,shapeFlag:R}=f;if(A>0){if(A&128){_n(_,P,d,p,m,b,v,y,w);return}else if(A&256){tt(_,P,d,p,m,b,v,y,w);return}}R&8?(I&16&&$e(_,m,b),P!==_&&h(d,P)):I&16?R&16?_n(_,P,d,p,m,b,v,y,w):$e(_,m,b,!0):(I&8&&h(d,""),R&16&&Ve(P,d,p,m,b,v,y,w))},tt=(c,f,d,p,m,b,v,y,w)=>{c=c||vt,f=f||vt;const _=c.length,I=f.length,P=Math.min(_,I);let A;for(A=0;A<P;A++){const R=f[A]=w?qe(f[A]):Oe(f[A]);$(c[A],R,d,null,m,b,v,y,w)}_>I?$e(c,m,b,!0,!1,P):Ve(f,d,p,m,b,v,y,w,P)},_n=(c,f,d,p,m,b,v,y,w)=>{let _=0;const I=f.length;let P=c.length-1,A=I-1;for(;_<=P&&_<=A;){const R=c[_],D=f[_]=w?qe(f[_]):Oe(f[_]);if(Ut(R,D))$(R,D,d,null,m,b,v,y,w);else break;_++}for(;_<=P&&_<=A;){const R=c[P],D=f[A]=w?qe(f[A]):Oe(f[A]);if(Ut(R,D))$(R,D,d,null,m,b,v,y,w);else break;P--,A--}if(_>P){if(_<=A){const R=A+1,D=R<I?f[R].el:p;for(;_<=A;)$(null,f[_]=w?qe(f[_]):Oe(f[_]),d,D,m,b,v,y,w),_++}}else if(_>A)for(;_<=P;)xe(c[_],m,b,!0),_++;else{const R=_,D=_,k=new Map;for(_=D;_<=A;_++){const me=f[_]=w?qe(f[_]):Oe(f[_]);me.key!=null&&k.set(me.key,_)}let z,te=0;const ve=A-D+1;let bt=!1,ks=0;const Bt=new Array(ve);for(_=0;_<ve;_++)Bt[_]=0;for(_=R;_<=P;_++){const me=c[_];if(te>=ve){xe(me,m,b,!0);continue}let Ce;if(me.key!=null)Ce=k.get(me.key);else for(z=D;z<=A;z++)if(Bt[z-D]===0&&Ut(me,f[z])){Ce=z;break}Ce===void 0?xe(me,m,b,!0):(Bt[Ce-D]=_+1,Ce>=ks?ks=Ce:bt=!0,$(me,f[Ce],d,null,m,b,v,y,w),te++)}const Bs=bt?pc(Bt):vt;for(z=Bs.length-1,_=ve-1;_>=0;_--){const me=D+_,Ce=f[me],Us=me+1<I?f[me+1].el:p;Bt[_]===0?$(null,Ce,d,Us,m,b,v,y,w):bt&&(z<0||_!==Bs[z]?nt(Ce,d,Us,2):z--)}}},nt=(c,f,d,p,m=null)=>{const{el:b,type:v,transition:y,children:w,shapeFlag:_}=c;if(_&6){nt(c.component.subTree,f,d,p);return}if(_&128){c.suspense.move(f,d,p);return}if(_&64){v.move(c,f,d,yt);return}if(v===Te){r(b,f,d);for(let P=0;P<w.length;P++)nt(w[P],f,d,p);r(c.anchor,f,d);return}if(v===Ir){U(c,f,d);return}if(p!==2&&_&1&&y)if(p===0)y.beforeEnter(b),r(b,f,d),fe(()=>y.enter(b),m);else{const{leave:P,delayLeave:A,afterLeave:R}=y,D=()=>r(b,f,d),k=()=>{P(b,()=>{D(),R&&R()})};A?A(b,D,k):k()}else r(b,f,d)},xe=(c,f,d,p=!1,m=!1)=>{const{type:b,props:v,ref:y,children:w,dynamicChildren:_,shapeFlag:I,patchFlag:P,dirs:A}=c;if(y!=null&&Hr(y,null,d,c,!0),I&256){f.ctx.deactivate(c);return}const R=I&1&&A,D=!xn(c);let k;if(D&&(k=v&&v.onVnodeBeforeUnmount)&&De(k,f,c),I&6)Oa(c.component,d,p);else{if(I&128){c.suspense.unmount(d,p);return}R&&rt(c,null,f,"beforeUnmount"),I&64?c.type.remove(c,f,d,m,yt,p):_&&(b!==Te||P>0&&P&64)?$e(_,f,d,!1,!0):(b===Te&&P&384||!m&&I&16)&&$e(w,f,d),p&&$s(c)}(D&&(k=v&&v.onVnodeUnmounted)||R)&&fe(()=>{k&&De(k,f,c),R&&rt(c,null,f,"unmounted")},d)},$s=c=>{const{type:f,el:d,anchor:p,transition:m}=c;if(f===Te){Da(d,p);return}if(f===Ir){ee(c);return}const b=()=>{s(d),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(c.shapeFlag&1&&m&&!m.persisted){const{leave:v,delayLeave:y}=m,w=()=>v(d,b);y?y(c.el,b,w):w()}else b()},Da=(c,f)=>{let d;for(;c!==f;)d=E(c),s(c),c=d;s(f)},Oa=(c,f,d)=>{const{bum:p,scope:m,update:b,subTree:v,um:y}=c;p&&Vn(p),m.stop(),b&&(b.active=!1,xe(v,c,f,d)),y&&fe(y,f),fe(()=>{c.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},$e=(c,f,d,p=!1,m=!1,b=0)=>{for(let v=b;v<c.length;v++)xe(c[v],f,d,p,m)},yn=c=>c.shapeFlag&6?yn(c.component.subTree):c.shapeFlag&128?c.suspense.next():E(c.anchor||c.el);let dr=!1;const Ls=(c,f,d)=>{c==null?f._vnode&&xe(f._vnode,null,null,!0):$(f._vnode||null,c,f,null,null,null,d),dr||(dr=!0,Js(),Io(),dr=!1),f._vnode=c},yt={p:$,um:xe,m:nt,r:$s,mt:hr,mc:Ve,pc:j,pbc:et,n:yn,o:t};let pr,mr;return e&&([pr,mr]=e(yt)),{render:Ls,hydrate:pr,createApp:sc(Ls,pr)}}function vr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function st({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function dc(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Bo(t,e,n=!1){const r=t.children,s=e.children;if(V(r)&&V(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=qe(s[i]),a.el=o.el),n||Bo(o,a)),a.type===er&&(a.el=o.el)}}function pc(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Uo(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Uo(e)}const mc=t=>t.__isTeleport,Te=Symbol.for("v-fgt"),er=Symbol.for("v-txt"),tn=Symbol.for("v-cmt"),Ir=Symbol.for("v-stc"),Gt=[];let Ae=null;function ut(t=!1){Gt.push(Ae=t?null:[])}function gc(){Gt.pop(),Ae=Gt[Gt.length-1]||null}let nn=1;function ai(t){nn+=t}function jo(t){return t.dynamicChildren=nn>0?Ae||vt:null,gc(),nn>0&&Ae&&Ae.push(t),t}function Pt(t,e,n,r,s,i){return jo(G(t,e,n,r,s,i,!0))}function _c(t,e,n,r,s){return jo(ke(t,e,n,r,s,!0))}function yc(t){return t?t.__v_isVNode===!0:!1}function Ut(t,e){return t.type===e.type&&t.key===e.key}const tr="__vInternal",Ho=({key:t})=>t??null,Dn=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?X(t)||be(t)||C(t)?{i:ge,r:t,k:e,f:!!n}:t:null);function G(t,e=null,n=null,r=0,s=null,i=t===Te?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ho(e),ref:e&&Dn(e),scopeId:Po,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ge};return a?(vs(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=X(n)?8:16),nn>0&&!o&&Ae&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ae.push(l),l}const ke=bc;function bc(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Dl)&&(t=tn),yc(t)){const a=xt(t,e,!0);return n&&vs(a,n),nn>0&&!i&&Ae&&(a.shapeFlag&6?Ae[Ae.indexOf(t)]=a:Ae.push(a)),a.patchFlag|=-2,a}if(Vc(t)&&(t=t.__vccOpts),e){e=Ec(e);let{class:a,style:l}=e;a&&!X(a)&&(e.class=ls(a)),K(l)&&(_o(l)&&!V(l)&&(l=ae({},l)),e.style=as(l))}const o=X(t)?1:Ol(t)?128:mc(t)?64:K(t)?4:C(t)?2:0;return G(t,e,n,r,s,o,i,!0)}function Ec(t){return t?_o(t)||tr in t?ae({},t):t:null}function xt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?wc(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ho(a),ref:e&&e.ref?n&&s?V(s)?s.concat(Dn(e)):[s,Dn(e)]:Dn(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Te?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&xt(t.ssContent),ssFallback:t.ssFallback&&xt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function zo(t=" ",e=0){return ke(er,null,t,e)}function Oe(t){return t==null||typeof t=="boolean"?ke(tn):V(t)?ke(Te,null,t.slice()):typeof t=="object"?qe(t):ke(er,null,String(t))}function qe(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:xt(t)}function vs(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(V(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),vs(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(tr in e)?e._ctx=ge:s===3&&ge&&(ge.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else C(e)?(e={default:e,_ctx:ge},n=32):(e=String(e),r&64?(n=16,e=[zo(e)]):n=8);t.children=e,t.shapeFlag|=n}function wc(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ls([e.class,r.class]));else if(s==="style")e.style=as([e.style,r.style]);else if(Wn(s)){const i=e[s],o=r[s];o&&i!==o&&!(V(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function De(t,e,n,r=null){Pe(t,e,7,[n,r])}const vc=Fo();let Ic=0;function Tc(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||vc,i={uid:Ic++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Wa(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mo(r,s),emitsOptions:Ao(r,s),emit:null,emitted:null,propsDefaults:H,inheritAttrs:r.inheritAttrs,ctx:H,data:H,props:H,attrs:H,slots:H,refs:H,setupState:H,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Pl.bind(null,i),t.ce&&t.ce(i),i}let ue=null,$n,zr;{const t=eo(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};$n=e("__VUE_INSTANCE_SETTERS__",n=>ue=n),zr=e("__VUE_SSR_SETTERS__",n=>nr=n)}const dn=t=>{const e=ue;return $n(t),t.scope.on(),()=>{t.scope.off(),$n(e)}},li=()=>{ue&&ue.scope.off(),$n(null)};function qo(t){return t.vnode.shapeFlag&4}let nr=!1;function Ac(t,e=!1){e&&zr(e);const{props:n,children:r}=t.vnode,s=qo(t);oc(t,n,s,e),cc(t,r);const i=s?Pc(t,e):void 0;return e&&zr(!1),i}function Pc(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=yo(new Proxy(t.ctx,Jl));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Rc(t):null,i=dn(t);gt();const o=Ye(r,t,0,[t.props,s]);if(_t(),i(),Yi(o)){if(o.then(li,li),e)return o.then(a=>{ci(t,a,e)}).catch(a=>{Jn(a,t,0)});t.asyncDep=o}else ci(t,o,e)}else Ko(t,e)}function ci(t,e,n){C(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:K(e)&&(t.setupState=Eo(e)),Ko(t,n)}let ui;function Ko(t,e,n){const r=t.type;if(!t.render){if(!e&&ui&&!r.render){const s=r.template||Es(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,u=ae(ae({isCustomElement:i,delimiters:a},o),l);r.render=ui(s,u)}}t.render=r.render||we}{const s=dn(t);gt();try{Xl(t)}finally{_t(),s()}}}function Sc(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return pe(t,"get","$attrs"),e[n]}}))}function Rc(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Sc(t)},slots:t.slots,emit:t.emit,expose:e}}function rr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Eo(yo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Kt)return Kt[n](t)},has(e,n){return n in e||n in Kt}}))}function Vc(t){return C(t)&&"__vccOpts"in t}const xc=(t,e)=>gl(t,e,nr),Cc="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Dc="http://www.w3.org/2000/svg",Oc="http://www.w3.org/1998/Math/MathML",Ke=typeof document<"u"?document:null,fi=Ke&&Ke.createElement("template"),Fc={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Ke.createElementNS(Dc,t):e==="mathml"?Ke.createElementNS(Oc,t):Ke.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Ke.createTextNode(t),createComment:t=>Ke.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ke.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{fi.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=fi.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Nc=Symbol("_vtc");function Mc(t,e,n){const r=t[Nc];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const hi=Symbol("_vod"),$c=Symbol("_vsh"),Lc=Symbol(""),kc=/(^|;)\s*display\s*:/;function Bc(t,e,n){const r=t.style,s=X(n);let i=!1;if(n&&!s){if(e)if(X(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&On(r,a,"")}else for(const o in e)n[o]==null&&On(r,o,"");for(const o in n)o==="display"&&(i=!0),On(r,o,n[o])}else if(s){if(e!==n){const o=r[Lc];o&&(n+=";"+o),r.cssText=n,i=kc.test(n)}}else e&&t.removeAttribute("style");hi in t&&(t[hi]=i?r.display:"",t[$c]&&(r.display="none"))}const di=/\s*!important$/;function On(t,e,n){if(V(n))n.forEach(r=>On(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Uc(t,e);di.test(n)?t.setProperty(mt(r),n.replace(di,""),"important"):t[r]=n}}const pi=["Webkit","Moz","ms"],Tr={};function Uc(t,e){const n=Tr[e];if(n)return n;let r=Vt(e);if(r!=="filter"&&r in t)return Tr[e]=r;r=Zi(r);for(let s=0;s<pi.length;s++){const i=pi[s]+r;if(i in t)return Tr[e]=i}return e}const mi="http://www.w3.org/1999/xlink";function jc(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(mi,e.slice(6,e.length)):t.setAttributeNS(mi,e,n);else{const i=Ka(e);n==null||i&&!to(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Hc(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const u=a==="OPTION"?t.getAttribute("value")||"":t.value,h=n??"";(u!==h||!("_value"in t))&&(t.value=h),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=to(n):n==null&&u==="string"?(n="",l=!0):u==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Et(t,e,n,r){t.addEventListener(e,n,r)}function zc(t,e,n,r){t.removeEventListener(e,n,r)}const gi=Symbol("_vei");function qc(t,e,n,r,s=null){const i=t[gi]||(t[gi]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=Kc(e);if(r){const u=i[e]=Qc(r,s);Et(t,a,u,l)}else o&&(zc(t,a,o,l),i[e]=void 0)}}const _i=/(?:Once|Passive|Capture)$/;function Kc(t){let e;if(_i.test(t)){e={};let r;for(;r=t.match(_i);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):mt(t.slice(2)),e]}let Ar=0;const Wc=Promise.resolve(),Gc=()=>Ar||(Wc.then(()=>Ar=0),Ar=Date.now());function Qc(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Pe(Yc(r,n.value),e,5,[r])};return n.value=t,n.attached=Gc(),n}function Yc(t,e){if(V(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const yi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Jc=(t,e,n,r,s,i,o,a,l)=>{const u=s==="svg";e==="class"?Mc(t,r,u):e==="style"?Bc(t,n,r):Wn(e)?ss(e)||qc(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Xc(t,e,r,u))?Hc(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),jc(t,e,r,u))};function Xc(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&yi(e)&&C(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return yi(e)&&X(n)?!1:e in t}const bi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return V(e)?n=>Vn(e,n):e};function Zc(t){t.target.composing=!0}function Ei(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Pr=Symbol("_assign"),eu={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Pr]=bi(s);const i=r||s.props&&s.props.type==="number";Et(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Dr(a)),t[Pr](a)}),n&&Et(t,"change",()=>{t.value=t.value.trim()}),e||(Et(t,"compositionstart",Zc),Et(t,"compositionend",Ei),Et(t,"change",Ei))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[Pr]=bi(i),t.composing)return;const o=s||t.type==="number"?Dr(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},tu={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},nu=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=mt(s.key);if(e.some(o=>o===i||tu[o]===i))return t(s)})},ru=ae({patchProp:Jc},Fc);let wi;function su(){return wi||(wi=fc(ru))}const iu=(...t)=>{const e=su().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=au(r);if(!s)return;const i=e._component;!C(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,ou(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function ou(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function au(t){return X(t)?document.querySelector(t):t}var vi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},lu=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Go={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,h=i>>2,g=(i&3)<<4|a>>4;let E=(a&15)<<2|u>>6,T=u&63;l||(T=64,o||(E=64)),r.push(n[h],n[g],n[E],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Wo(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):lu(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const g=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||g==null)throw new cu;const E=i<<2|a>>4;if(r.push(E),u!==64){const T=a<<4&240|u>>2;if(r.push(T),g!==64){const M=u<<6&192|g;r.push(M)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class cu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uu=function(t){const e=Wo(t);return Go.encodeByteArray(e,!0)},Ln=function(t){return uu(t).replace(/\./g,"")},fu=function(t){try{return Go.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du=()=>hu().__FIREBASE_DEFAULTS__,pu=()=>{if(typeof process>"u"||typeof vi>"u")return;const t=vi.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},mu=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&fu(t[1]);return e&&JSON.parse(e)},Qo=()=>{try{return du()||pu()||mu()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},gu=t=>{var e,n;return(n=(e=Qo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_u=t=>{const e=gu(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Yo=()=>{var t;return(t=Qo())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ln(JSON.stringify(n)),Ln(JSON.stringify(o)),""].join(".")}function Eu(){try{return typeof indexedDB=="object"}catch{return!1}}function wu(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu="FirebaseError";class Mt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vu,Object.setPrototypeOf(this,Mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jo.prototype.create)}}class Jo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Iu(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Mt(s,a,r)}}function Iu(t,e){return t.replace(Tu,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Tu=/\{\$([^}]+)}/g;function qr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ii(i)&&Ii(o)){if(!qr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ii(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t){return t&&t._delegate?t._delegate:t}class rn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new yu;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Su(e))try{this.getOrInitializeService({instanceIdentifier:it})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=it){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=it){return this.instances.has(e)}getOptions(e=it){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Pu(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=it){return this.component?this.component.multipleInstances?e:it:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Pu(t){return t===it?void 0:t}function Su(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Au(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(B||(B={}));const Vu={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},xu=B.INFO,Cu={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},Du=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Cu[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xo{constructor(e){this.name=e,this._logLevel=xu,this._logHandler=Du,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in B))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...e),this._logHandler(this,B.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...e),this._logHandler(this,B.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,B.INFO,...e),this._logHandler(this,B.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,B.WARN,...e),this._logHandler(this,B.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...e),this._logHandler(this,B.ERROR,...e)}}const Ou=(t,e)=>e.some(n=>t instanceof n);let Ti,Ai;function Fu(){return Ti||(Ti=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Nu(){return Ai||(Ai=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zo=new WeakMap,Kr=new WeakMap,ea=new WeakMap,Sr=new WeakMap,Is=new WeakMap;function Mu(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Je(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Zo.set(n,t)}).catch(()=>{}),Is.set(e,t),e}function $u(t){if(Kr.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Kr.set(t,e)}let Wr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Kr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ea.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Je(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Lu(t){Wr=t(Wr)}function ku(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Rr(this),e,...n);return ea.set(r,e.sort?e.sort():[e]),Je(r)}:Nu().includes(t)?function(...e){return t.apply(Rr(this),e),Je(Zo.get(this))}:function(...e){return Je(t.apply(Rr(this),e))}}function Bu(t){return typeof t=="function"?ku(t):(t instanceof IDBTransaction&&$u(t),Ou(t,Fu())?new Proxy(t,Wr):t)}function Je(t){if(t instanceof IDBRequest)return Mu(t);if(Sr.has(t))return Sr.get(t);const e=Bu(t);return e!==t&&(Sr.set(t,e),Is.set(e,t)),e}const Rr=t=>Is.get(t);function Uu(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Je(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Je(o.result),l.oldVersion,l.newVersion,Je(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const ju=["get","getKey","getAll","getAllKeys","count"],Hu=["put","add","delete","clear"],Vr=new Map;function Pi(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vr.get(e))return Vr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Hu.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ju.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&l.done]))[0]};return Vr.set(e,i),i}Lu(t=>({...t,get:(e,n,r)=>Pi(e,n)||t.get(e,n,r),has:(e,n)=>!!Pi(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qu(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function qu(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gr="@firebase/app",Si="0.9.29";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht=new Xo("@firebase/app"),Ku="@firebase/app-compat",Wu="@firebase/analytics-compat",Gu="@firebase/analytics",Qu="@firebase/app-check-compat",Yu="@firebase/app-check",Ju="@firebase/auth",Xu="@firebase/auth-compat",Zu="@firebase/database",ef="@firebase/database-compat",tf="@firebase/functions",nf="@firebase/functions-compat",rf="@firebase/installations",sf="@firebase/installations-compat",of="@firebase/messaging",af="@firebase/messaging-compat",lf="@firebase/performance",cf="@firebase/performance-compat",uf="@firebase/remote-config",ff="@firebase/remote-config-compat",hf="@firebase/storage",df="@firebase/storage-compat",pf="@firebase/firestore",mf="@firebase/firestore-compat",gf="firebase",_f="10.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr="[DEFAULT]",yf={[Gr]:"fire-core",[Ku]:"fire-core-compat",[Gu]:"fire-analytics",[Wu]:"fire-analytics-compat",[Yu]:"fire-app-check",[Qu]:"fire-app-check-compat",[Ju]:"fire-auth",[Xu]:"fire-auth-compat",[Zu]:"fire-rtdb",[ef]:"fire-rtdb-compat",[tf]:"fire-fn",[nf]:"fire-fn-compat",[rf]:"fire-iid",[sf]:"fire-iid-compat",[of]:"fire-fcm",[af]:"fire-fcm-compat",[lf]:"fire-perf",[cf]:"fire-perf-compat",[uf]:"fire-rc",[ff]:"fire-rc-compat",[hf]:"fire-gcs",[df]:"fire-gcs-compat",[pf]:"fire-fst",[mf]:"fire-fst-compat","fire-js":"fire-js",[gf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=new Map,Yr=new Map;function bf(t,e){try{t.container.addComponent(e)}catch(n){ht.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Bn(t){const e=t.name;if(Yr.has(e))return ht.debug(`There were multiple attempts to register component ${e}.`),!1;Yr.set(e,t);for(const n of kn.values())bf(n,t);return!0}function Ef(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Xe=new Jo("app","Firebase",wf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xe.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If=_f;function ta(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qr,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Xe.create("bad-app-name",{appName:String(s)});if(n||(n=Yo()),!n)throw Xe.create("no-options");const i=kn.get(s);if(i){if(qr(n,i.options)&&qr(r,i.config))return i;throw Xe.create("duplicate-app",{appName:s})}const o=new Ru(s);for(const l of Yr.values())o.addComponent(l);const a=new vf(n,r,o);return kn.set(s,a),a}function Tf(t=Qr){const e=kn.get(t);if(!e&&t===Qr&&Yo())return ta();if(!e)throw Xe.create("no-app",{appName:t});return e}function St(t,e,n){var r;let s=(r=yf[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ht.warn(a.join(" "));return}Bn(new rn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af="firebase-heartbeat-database",Pf=1,sn="firebase-heartbeat-store";let xr=null;function na(){return xr||(xr=Uu(Af,Pf,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(sn)}catch(n){console.warn(n)}}}}).catch(t=>{throw Xe.create("idb-open",{originalErrorMessage:t.message})})),xr}async function Sf(t){try{const n=(await na()).transaction(sn),r=await n.objectStore(sn).get(ra(t));return await n.done,r}catch(e){if(e instanceof Mt)ht.warn(e.message);else{const n=Xe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ht.warn(n.message)}}}async function Ri(t,e){try{const r=(await na()).transaction(sn,"readwrite");await r.objectStore(sn).put(e,ra(t)),await r.done}catch(n){if(n instanceof Mt)ht.warn(n.message);else{const r=Xe.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ht.warn(r.message)}}}function ra(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf=1024,Vf=30*24*60*60*1e3;class xf{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Df(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Vi();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Vf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Vi(),{heartbeatsToSend:r,unsentEntries:s}=Cf(this._heartbeatsCache.heartbeats),i=Ln(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Vi(){return new Date().toISOString().substring(0,10)}function Cf(t,e=Rf){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),xi(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),xi(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Df{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Eu()?wu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Sf(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ri(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ri(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function xi(t){return Ln(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(t){Bn(new rn("platform-logger",e=>new zu(e),"PRIVATE")),Bn(new rn("heartbeat",e=>new xf(e),"PRIVATE")),St(Gr,Si,t),St(Gr,Si,"esm2017"),St("fire-js","")}Of("");var Ff="firebase",Nf="10.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */St(Ff,Nf,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}he.UNAUTHENTICATED=new he(null),he.GOOGLE_CREDENTIALS=new he("google-credentials-uid"),he.FIRST_PARTY=new he("first-party-uid"),he.MOCK_USER=new he("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $t="10.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=new Xo("@firebase/firestore");function Un(t,...e){if(Dt.logLevel<=B.DEBUG){const n=e.map(As);Dt.debug(`Firestore (${$t}): ${t}`,...n)}}function Ts(t,...e){if(Dt.logLevel<=B.ERROR){const n=e.map(As);Dt.error(`Firestore (${$t}): ${t}`,...n)}}function sa(t,...e){if(Dt.logLevel<=B.WARN){const n=e.map(As);Dt.warn(`Firestore (${$t}): ${t}`,...n)}}function As(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(t="Unexpected state"){const e=`FIRESTORE (${$t}) INTERNAL ASSERTION FAILED: `+t;throw Ts(e),new Error(e)}function Ze(t,e){t||W()}function sr(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci="ok",Mf="cancelled",Qt="unknown",x="invalid-argument",$f="deadline-exceeded",Lf="not-found",kf="permission-denied",Jr="unauthenticated",Bf="resource-exhausted",Ot="failed-precondition",Uf="aborted",jf="out-of-range",ia="unimplemented",Hf="internal",zf="unavailable";class S extends Mt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(he.UNAUTHENTICATED))}shutdown(){}}class Kf{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Wf{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(Ze(typeof e.accessToken=="string"),new oa(e.accessToken,new he(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class Gf{constructor(e,n,r){this.t=e,this.i=n,this.o=r,this.type="FirstParty",this.user=he.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class Qf{constructor(e,n,r){this.t=e,this.i=n,this.o=r}getToken(){return Promise.resolve(new Gf(this.t,this.i,this.o))}start(e,n){e.enqueueRetryable(()=>n(he.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Yf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Jf{constructor(e){this.h=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(Ze(typeof e.token=="string"),new Yf(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e,n,r,s,i,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class on{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new on("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof on&&e.projectId===this.projectId&&e.database===this.database}}class an{constructor(e,n,r){n===void 0?n=0:n>e.length&&W(),r===void 0?r=e.length-n:r>e.length-n&&W(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return an.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof an?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class J extends an{construct(e,n,r){return new J(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new S(x,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new J(n)}static emptyPath(){return new J([])}}const Zf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class de extends an{construct(e,n,r){return new de(e,n,r)}static isValidIdentifier(e){return Zf.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),de.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new de(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new S(x,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new S(x,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new S(x,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new S(x,"Unterminated ` in path: "+e);return new de(n)}static emptyPath(){return new de([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(J.fromString(e))}static fromName(e){return new se(J.fromString(e).popFirst(5))}static empty(){return new se(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&J.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return J.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new J(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(t,e,n){if(!n)throw new S(x,`Function ${t}() cannot be called with an empty ${e}.`)}function Di(t){if(!se.isDocumentKey(t))throw new S(x,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Oi(t){if(se.isDocumentKey(t))throw new S(x,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ir(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":W()}function or(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new S(x,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ir(t);throw new S(x,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let An=null;function eh(){return An===null?An=function(){return 268435456+Math.round(2147483648*Math.random())}():An++,"0x"+An.toString(16)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(t){return t==null}function jn(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fi,O;function Ni(t){if(t===void 0)return Ts("RPC_ERROR","HTTP error has no status"),Qt;switch(t){case 200:return Ci;case 400:return Ot;case 401:return Jr;case 403:return kf;case 404:return Lf;case 409:return Uf;case 416:return jf;case 429:return Bf;case 499:return Mf;case 500:return Qt;case 501:return ia;case 503:return zf;case 504:return $f;default:return t>=200&&t<300?Ci:t>=400&&t<500?Ot:t>=500&&t<600?Hf:Qt}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(O=Fi||(Fi={}))[O.OK=0]="OK",O[O.CANCELLED=1]="CANCELLED",O[O.UNKNOWN=2]="UNKNOWN",O[O.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",O[O.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",O[O.NOT_FOUND=5]="NOT_FOUND",O[O.ALREADY_EXISTS=6]="ALREADY_EXISTS",O[O.PERMISSION_DENIED=7]="PERMISSION_DENIED",O[O.UNAUTHENTICATED=16]="UNAUTHENTICATED",O[O.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",O[O.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",O[O.ABORTED=10]="ABORTED",O[O.OUT_OF_RANGE=11]="OUT_OF_RANGE",O[O.UNIMPLEMENTED=12]="UNIMPLEMENTED",O[O.INTERNAL=13]="INTERNAL",O[O.UNAVAILABLE=14]="UNAVAILABLE",O[O.DATA_LOSS=15]="DATA_LOSS";class rh extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.m=r+"://"+n.host,this.A=`projects/${s}/databases/${i}`,this.T=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get R(){return!1}P(n,r,s,i,o){const a=eh(),l=this.I(n,r.toUriEncodedString());Un("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const u={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.V(u,i,o),this.p(n,l,u,s).then(h=>(Un("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw sa("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",s),h})}g(n,r,s,i,o,a){return this.P(n,r,s,i,o)}V(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+$t}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}I(n,r){const s=nh[n];return`${this.m}/v1/${r}:${s}`}terminate(){}}{constructor(e,n){super(e),this.F=n}v(e,n){throw new Error("Not supported by FetchConnection")}async p(e,n,r,s){var i;const o=JSON.stringify(s);let a;try{a=await this.F(n,{method:"POST",headers:r,body:o})}catch(l){const u=l;throw new S(Ni(u.status),"Request failed with error: "+u.statusText)}if(!a.ok){let l=await a.json();Array.isArray(l)&&(l=l[0]);const u=(i=l==null?void 0:l.error)===null||i===void 0?void 0:i.message;throw new S(Ni(a.status),`Request failed with error: ${u??a.statusText}`)}return a.json()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=sh(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function ca(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ar(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new oh("Invalid base64 string: "+i):i}}(e);return new Ue(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ue(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ue.EMPTY_BYTE_STRING=new Ue("");const ah=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function dt(t){if(Ze(!!t),typeof t=="string"){let e=0;const n=ah.exec(t);if(Ze(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Y(t.seconds),nanos:Y(t.nanos)}}function Y(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ln(t){return typeof t=="string"?Ue.fromBase64String(t):Ue.fromUint8Array(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new S(x,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new S(x,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new S(x,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new S(x,"Timestamp seconds out of range: "+e)}static now(){return _e.fromMillis(Date.now())}static fromDate(e){return _e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new _e(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function fa(t){const e=t.mapValue.fields.__previous_value__;return ua(e)?fa(e):e}function cn(t){const e=dt(t.mapValue.fields.__local_write_time__.timestampValue);return new _e(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn={fields:{__type__:{stringValue:"__max__"}}};function pt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ua(t)?4:function(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:10:W()}function Hn(t,e){if(t===e)return!0;const n=pt(t);if(n!==pt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return cn(t).isEqual(cn(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=dt(s.timestampValue),a=dt(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ln(s.bytesValue).isEqual(ln(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Y(s.geoPointValue.latitude)===Y(i.geoPointValue.latitude)&&Y(s.geoPointValue.longitude)===Y(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Y(s.integerValue)===Y(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Y(s.doubleValue),a=Y(i.doubleValue);return o===a?jn(o)===jn(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ca(t.arrayValue.values||[],e.arrayValue.values||[],Hn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Mi(o)!==Mi(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Hn(o[l],a[l])))return!1;return!0}(t,e);default:return W()}}function un(t,e){return(t.values||[]).find(n=>Hn(n,e))!==void 0}function zn(t,e){if(t===e)return 0;const n=pt(t),r=pt(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Y(i.integerValue||i.doubleValue),l=Y(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return $i(t.timestampValue,e.timestampValue);case 4:return $i(cn(t),cn(e));case 5:return ne(t.stringValue,e.stringValue);case 6:return function(i,o){const a=ln(i),l=ln(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=ne(a[u],l[u]);if(h!==0)return h}return ne(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ne(Y(i.latitude),Y(o.latitude));return a!==0?a:ne(Y(i.longitude),Y(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const h=zn(a[u],l[u]);if(h)return h}return ne(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Pn&&o===Pn)return 0;if(i===Pn)return 1;if(o===Pn)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let g=0;g<l.length&&g<h.length;++g){const E=ne(l[g],h[g]);if(E!==0)return E;const T=zn(a[l[g]],u[h[g]]);if(T!==0)return T}return ne(l.length,h.length)}(t.mapValue,e.mapValue);default:throw W()}}function $i(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=dt(t),r=dt(e),s=ne(n.seconds,r.seconds);return s!==0?s:ne(n.nanos,r.nanos)}function Li(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ha(t){return!!t&&"arrayValue"in t}function ki(t){return!!t&&"nullValue"in t}function Bi(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Cr(t){return!!t&&"mapValue"in t}function Yt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ar(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Yt(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Yt(t.arrayValue.values[n]);return e}return Object.assign({},t)}class Ui{constructor(e,n){this.position=e,this.inclusive=n}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{}class Se extends da{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new lh(e,n,r):n==="array-contains"?new fh(e,r):n==="in"?new hh(e,r):n==="not-in"?new dh(e,r):n==="array-contains-any"?new ph(e,r):new Se(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new ch(e,r):new uh(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(zn(n,this.value)):n!==null&&pt(this.value)===pt(n)&&this.matchesComparison(zn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pn extends da{constructor(e,n){super(),this.filters=e,this.op=n,this.D=null}static create(e,n){return new pn(e,n)}matches(e){return function(r){return r.op==="and"}(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.D!==null||(this.D=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.D}getFilters(){return Object.assign([],this.filters)}}class lh extends Se{constructor(e,n,r){super(e,n,r),this.key=se.fromName(r.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class ch extends Se{constructor(e,n){super(e,"in",n),this.keys=pa("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class uh extends Se{constructor(e,n){super(e,"not-in",n),this.keys=pa("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function pa(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>se.fromName(r.referenceValue))}class fh extends Se{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ha(n)&&un(n.arrayValue,this.value)}}class hh extends Se{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&un(this.value.arrayValue,n)}}class dh extends Se{constructor(e,n){super(e,"not-in",n)}matches(e){if(un(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!un(this.value.arrayValue,n)}}class ph extends Se{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ha(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>un(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,n="asc"){this.field=e,this.dir=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ie(e)}static min(){return new ie(new _e(0,0))}static max(){return new ie(new _e(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,n){this.comparator=e,this.root=n||re.EMPTY}insert(e,n){return new qn(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,re.BLACK,null,null))}remove(e){return new qn(this.comparator,this.root.remove(e,this.comparator).copy(null,null,re.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Sn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Sn(this.root,e,this.comparator,!1)}getReverseIterator(){return new Sn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Sn(this.root,e,this.comparator,!0)}}class Sn{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class re{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??re.RED,this.left=s??re.EMPTY,this.right=i??re.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new re(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return re.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return re.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,re.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,re.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const e=this.left.check();if(e!==this.right.check())throw W();return e+(this.isRed()?0:1)}}re.EMPTY=null,re.RED=!0,re.BLACK=!1;re.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(e,n,r,s,i){return this}insert(e,n,r){return new re(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.comparator=e,this.data=new qn(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ji(this.data.getIterator())}getIteratorFrom(e){return new ji(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof fn)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new fn(this.comparator);return n.data=e,n}}class ji{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.fields=e,e.sort(de.comparator)}static empty(){return new hn([])}unionWith(e){let n=new fn(de.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new hn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ca(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.value=e}static empty(){return new Ne({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Cr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Yt(n)}setAll(e){let n=de.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Yt(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Cr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Hn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Cr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ar(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ne(Yt(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new We(e,0,ie.min(),ie.min(),ie.min(),Ne.empty(),0)}static newFoundDocument(e,n,r,s){return new We(e,1,n,ie.min(),r,s,0)}static newNoDocument(e,n){return new We(e,2,n,ie.min(),ie.min(),Ne.empty(),0)}static newUnknownDocument(e,n){return new We(e,3,n,ie.min(),ie.min(),Ne.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ne.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ne.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof We&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new We(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.C=null}}function Hi(t,e=null,n=[],r=[],s=null,i=null,o=null){return new mh(t,e,n,r,s,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.S=null,this.N=null,this.O=null,this.startAt,this.endAt}}function gh(t){return t.collectionGroup!==null}function _h(t){const e=sr(t);if(e.S===null){e.S=[];const n=new Set;for(const i of e.explicitOrderBy)e.S.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new fn(de.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.S.push(new Xr(i,r))}),n.has(de.keyField().canonicalString())||e.S.push(new Xr(de.keyField(),r))}return e.S}function yh(t){const e=sr(t);return e.N||(e.N=bh(e,_h(t))),e.N}function bh(t,e){if(t.limitType==="F")return Hi(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Xr(s.field,i)});const n=t.endAt?new Ui(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ui(t.startAt.position,t.startAt.inclusive):null;return Hi(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Zr(t,e){const n=t.filters.concat([e]);return new ma(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(t,e){return function(r){return typeof r=="number"&&Number.isInteger(r)&&!jn(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}(e)?function(r){return{integerValue:""+r}}(e):function(r,s){if(r.useProto3Json){if(isNaN(s))return{doubleValue:"NaN"};if(s===1/0)return{doubleValue:"Infinity"};if(s===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jn(s)?"-0":s}}(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(){this._=void 0}}class wh extends lr{}class vh extends lr{constructor(e){super(),this.elements=e}}class Ih extends lr{constructor(e){super(),this.elements=e}}class Th extends lr{constructor(e,n){super(),this.serializer=e,this.q=n}}class Rt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Rt}static exists(e){return new Rt(void 0,e)}static updateTime(e){return new Rt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class cr{}class ga extends cr{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class _a extends cr{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}class ya extends cr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ah extends cr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph={asc:"ASCENDING",desc:"DESCENDING"},Sh={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Rh={and:"AND",or:"OR"};class Vh{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function es(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xh(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ch(t,e){return es(t,e.toTimestamp())}function zi(t){return Ze(!!t),ie.fromTimestamp(function(n){const r=dt(n);return new _e(r.seconds,r.nanos)}(t))}function Ps(t,e){return ts(t,e).canonicalString()}function ts(t,e){const n=function(s){return new J(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function ns(t,e){return Ps(t.databaseId,e.path)}function Dh(t,e){const n=function(s){const i=J.fromString(s);return Ze(Ea(i)),i}(e);if(n.get(1)!==t.databaseId.projectId)throw new S(x,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new S(x,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(function(s){return Ze(s.length>4&&s.get(4)==="documents"),s.popFirst(5)}(n))}function qi(t,e,n){return{name:ns(t,e),fields:n.value.mapValue.fields}}function Oh(t,e){let n;if(e instanceof ga)n={update:qi(t,e.key,e.value)};else if(e instanceof ya)n={delete:ns(t,e.key)};else if(e instanceof _a)n={update:qi(t,e.key,e.data),updateMask:Lh(e.fieldMask)};else{if(!(e instanceof Ah))return W();n={verify:ns(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof wh)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof vh)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ih)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Th)return{fieldPath:o.field.canonicalString(),increment:a.q};throw W()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Ch(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:W()}(t,e.precondition)),n}function Fh(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=function(u,h){return Ps(u.databaseId,h)}(t,s);const i=function(u){if(u.length!==0)return ba(pn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(E){return{field:wt(E.field),direction:Nh(E.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=function(u,h){return u.useProto3Json||th(h)?h:{value:h}}(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{B:n,parent:s}}function Nh(t){return Ph[t]}function Mh(t){return Sh[t]}function $h(t){return Rh[t]}function wt(t){return{fieldPath:t.canonicalString()}}function ba(t){return t instanceof Se?function(n){if(n.op==="=="){if(Bi(n.value))return{unaryFilter:{field:wt(n.field),op:"IS_NAN"}};if(ki(n.value))return{unaryFilter:{field:wt(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Bi(n.value))return{unaryFilter:{field:wt(n.field),op:"IS_NOT_NAN"}};if(ki(n.value))return{unaryFilter:{field:wt(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wt(n.field),op:Mh(n.op),value:n.value}}}(t):t instanceof pn?function(n){const r=n.getFilters().map(s=>ba(s));return r.length===1?r[0]:{compositeFilter:{op:$h(n.op),filters:r}}}(t):W()}function Lh(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ea(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(t){return new Vh(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.Y=!1}Z(){if(this.Y)throw new S(Ot,"The client has already been terminated.")}P(e,n,r,s){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.P(e,ts(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===Jr&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new S(Qt,i.toString())})}g(e,n,r,s,i){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.g(e,ts(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===Jr&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new S(Qt,o.toString())})}terminate(){this.Y=!0,this.connection.terminate()}}async function wa(t,e){const n=sr(t),r={writes:e.map(s=>Oh(n.serializer,s))};await n.P("Commit",n.serializer.databaseId,J.emptyPath(),r)}async function Bh(t,e){const n=sr(t),{B:r,parent:s}=Fh(n.serializer,yh(e));return(await n.g("RunQuery",n.serializer.databaseId,s,{structuredQuery:r.structuredQuery})).filter(i=>!!i.document).map(i=>function(a,l,u){const h=Dh(a,l.name),g=zi(l.updateTime),E=l.createTime?zi(l.createTime):ie.min(),T=new Ne({mapValue:{fields:l.fields}}),M=We.newFoundDocument(h,g,E,T);return u&&M.setHasCommittedMutations(),u?M.setHasCommittedMutations():M}(n.serializer,i.document,void 0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt=new Map;function Rs(t){if(t._terminated)throw new S(Ot,"The client has already been terminated.");if(!Jt.has(t)){Un("ComponentProvider","Initializing Datastore");const e=function(i){return new rh(i,fetch.bind(null))}(function(i,o,a,l){return new Xf(i,o,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,la(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,t.app.options.appId||"",t._persistenceKey,t._freezeSettings())),n=Ss(t._databaseId),r=function(i,o,a,l){return new kh(i,o,a,l)}(t._authCredentials,t._appCheckCredentials,e,n);Jt.set(t,r)}return Jt.get(t)}class Ki{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new S(x,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new S(x,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(i,o,a,l){if(o===!0&&l===!0)throw new S(x,`${i} and ${a} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=la((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new S(x,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new S(x,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new S(x,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ur{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ki({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new S(Ot,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new S(Ot,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ki(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new qf;switch(r.type){case"firstParty":return new Qf(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new S(x,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Jt.get(n);r&&(Un("ComponentProvider","Removing Datastore"),Jt.delete(n),r.terminate())}(this),Promise.resolve()}}function jt(t,e){const n=typeof t=="object"?t:Tf(),r=typeof t=="string"?t:e||"(default)",s=Ef(n,"firestore/lite").getImmediate({identifier:r});if(!s._initialized){const i=_u("firestore");i&&Uh(s,...i)}return s}function Uh(t,e,n,r={}){var s;const i=(t=or(t,ur))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&sa("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=he.MOCK_USER;else{a=bu(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new S(x,"mockUserToken must contain 'sub' or 'user_id' field!");l=new he(u)}t._authCredentials=new Kf(new oa(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Lt(this.firestore,e,this._query)}}class ye{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Be(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ye(this.firestore,e,this._key)}}class Be extends Lt{constructor(e,n,r){super(e,n,function(i){return new ma(i)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ye(this.firestore,null,new se(e))}withConverter(e){return new Be(this.firestore,e,this._path)}}function Ht(t,e,...n){if(t=Ct(t),aa("collection","path",e),t instanceof ur){const r=J.fromString(e,...n);return Oi(r),new Be(t,null,r)}{if(!(t instanceof ye||t instanceof Be))throw new S(x,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(J.fromString(e,...n));return Oi(r),new Be(t.firestore,null,r)}}function jh(t,e,...n){if(t=Ct(t),arguments.length===1&&(e=ih.newId()),aa("doc","path",e),t instanceof ur){const r=J.fromString(e,...n);return Di(r),new ye(t,null,new se(r))}{if(!(t instanceof ye||t instanceof Be))throw new S(x,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(J.fromString(e,...n));return Di(r),new ye(t.firestore,t instanceof Be?t.converter:null,new se(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ft(Ue.fromBase64String(e))}catch(n){throw new S(x,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ft(Ue.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new S(x,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new de(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new S(x,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new S(x,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh=/^__.*__$/;class zh{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new _a(e,this.data,this.fieldMask,n,this.fieldTransforms):new ga(e,this.data,n,this.fieldTransforms)}}function Ia(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class Cs{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.tt(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get et(){return this.settings.et}rt(e){return new Cs(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}nt(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.rt({path:r,it:!1});return s.st(e),s}ot(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.rt({path:r,it:!1});return s.tt(),s}ut(e){return this.rt({path:void 0,it:!0})}_t(e){return Kn(e,this.settings.methodName,this.settings.ct||!1,this.path,this.settings.lt)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}tt(){if(this.path)for(let e=0;e<this.path.length;e++)this.st(this.path.get(e))}st(e){if(e.length===0)throw this._t("Document fields must not be empty");if(Ia(this.et)&&Hh.test(e))throw this._t('Document fields cannot begin and end with "__"')}}class qh{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ss(e)}ht(e,n,r,s=!1){return new Cs({et:e,methodName:n,lt:r,path:de.emptyPath(),it:!1,ct:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ta(t){const e=t._freezeSettings(),n=Ss(t._databaseId);return new qh(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Kh(t,e,n,r,s,i={}){const o=t.ht(i.merge||i.mergeFields?2:0,e,n,s);Sa("Data must be an object, but it was:",o,r);const a=Aa(r,o);let l,u;if(i.merge)l=new hn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const g of i.mergeFields){const E=Gh(e,g,n);if(!o.contains(E))throw new S(x,`Field '${E}' is specified in your field mask but missing from your input data.`);Yh(h,E)||h.push(E)}l=new hn(h),u=o.fieldTransforms.filter(g=>l.covers(g.field))}else l=null,u=o.fieldTransforms;return new zh(new Ne(a),l,u)}function Wh(t,e,n,r=!1){return Ds(n,t.ht(r?4:3,e))}function Ds(t,e){if(Pa(t=Ct(t)))return Sa("Unsupported field value:",e,t),Aa(t,e);if(t instanceof va)return function(r,s){if(!Ia(s.et))throw s._t(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s._t(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.it&&e.et!==4)throw e._t("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Ds(a,s.ut(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ct(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Eh(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=_e.fromDate(r);return{timestampValue:es(s.serializer,i)}}if(r instanceof _e){const i=new _e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:es(s.serializer,i)}}if(r instanceof xs)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ft)return{bytesValue:xh(s.serializer,r._byteString)};if(r instanceof ye){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s._t(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ps(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s._t(`Unsupported field value: ${ir(r)}`)}(t,e)}function Aa(t,e){const n={};return function(s){for(const i in s)if(Object.prototype.hasOwnProperty.call(s,i))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ar(t,(r,s)=>{const i=Ds(s,e.nt(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Pa(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof _e||t instanceof xs||t instanceof Ft||t instanceof ye||t instanceof va)}function Sa(t,e,n){if(!Pa(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=ir(n);throw r==="an object"?e._t(t+" a custom object"):e._t(t+" "+r)}}function Gh(t,e,n){if((e=Ct(e))instanceof Vs)return e._internalPath;if(typeof e=="string")return Ra(t,e);throw Kn("Field path arguments must be of type string or ",t,!1,void 0,n)}const Qh=new RegExp("[~\\*/\\[\\]]");function Ra(t,e,n){if(e.search(Qh)>=0)throw Kn(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Vs(...e.split("."))._internalPath}catch{throw Kn(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Kn(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new S(x,a+t+l)}function Yh(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ye(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Va(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Zh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Va extends Jh{data(){return super.data()}}class Xh{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}function Zh(t,e){return typeof e=="string"?Ra(t,e):e instanceof Vs?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{}class ed extends Os{}function td(t,e,...n){let r=[];e instanceof Os&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof Ns).length,a=i.filter(l=>l instanceof Fs).length;if(o>1||o>0&&a>0)throw new S(x,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Fs extends ed{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Fs(e,n,r)}_apply(e){const n=this._parse(e);return xa(e._query,n),new Lt(e.firestore,e.converter,Zr(e._query,n))}_parse(e){const n=Ta(e.firestore);return function(i,o,a,l,u,h,g){let E;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new S(x,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Gi(g,h);const T=[];for(const M of g)T.push(Wi(l,i,M));E={arrayValue:{values:T}}}else E=Wi(l,i,g)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Gi(g,h),E=Wh(a,o,g,h==="in"||h==="not-in");return Se.create(u,h,E)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Ns extends Os{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ns(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:pn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)xa(o,l),o=Zr(o,l)}(e._query,n),new Lt(e.firestore,e.converter,Zr(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Wi(t,e,n){if(typeof(n=Ct(n))=="string"){if(n==="")throw new S(x,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!gh(e)&&n.indexOf("/")!==-1)throw new S(x,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(J.fromString(n));if(!se.isDocumentKey(r))throw new S(x,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Li(t,new se(r))}if(n instanceof ye)return Li(t,n._key);throw new S(x,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ir(n)}.`)}function Gi(t,e){if(!Array.isArray(t)||t.length===0)throw new S(x,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function xa(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new S(x,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new S(x,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class rd extends class{convertValue(n,r="none"){switch(pt(n)){case 0:return null;case 1:return n.booleanValue;case 2:return Y(n.integerValue||n.doubleValue);case 3:return this.convertTimestamp(n.timestampValue);case 4:return this.convertServerTimestamp(n,r);case 5:return n.stringValue;case 6:return this.convertBytes(ln(n.bytesValue));case 7:return this.convertReference(n.referenceValue);case 8:return this.convertGeoPoint(n.geoPointValue);case 9:return this.convertArray(n.arrayValue,r);case 10:return this.convertObject(n.mapValue,r);default:throw W()}}convertObject(n,r){return this.convertObjectMap(n.fields,r)}convertObjectMap(n,r="none"){const s={};return ar(n,(i,o)=>{s[i]=this.convertValue(o,r)}),s}convertGeoPoint(n){return new xs(Y(n.latitude),Y(n.longitude))}convertArray(n,r){return(n.values||[]).map(s=>this.convertValue(s,r))}convertServerTimestamp(n,r){switch(r){case"previous":const s=fa(n);return s==null?null:this.convertValue(s,r);case"estimate":return this.convertTimestamp(cn(n));default:return null}}convertTimestamp(n){const r=dt(n);return new _e(r.seconds,r.nanos)}convertDocumentKey(n,r){const s=J.fromString(n);Ze(Ea(s));const i=new on(s.get(1),s.get(3)),o=new se(s.popFirst(5));return i.isEqual(r)||Ts(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),o}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ft(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ye(this.firestore,null,n)}}function Rn(t){(function(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new S(ia,"limitToLast() queries require specifying at least one orderBy() clause")})((t=or(t,Lt))._query);const e=Rs(t.firestore),n=new rd(t.firestore);return Bh(e,t._query).then(r=>{const s=r.map(i=>new Va(t.firestore,n,i.key,i,t.converter));return t._query.limitType==="L"&&s.reverse(),new Xh(t,s)})}function sd(t){return wa(Rs((t=or(t,ye)).firestore),[new ya(t._key,Rt.none())])}function id(t,e){const n=jh(t=or(t,Be)),r=nd(t.converter,e),s=Kh(Ta(t.firestore),"addDoc",n._key,r,n.converter!==null,{});return wa(Rs(t.firestore),[s.toMutation(n._key,Rt.exists(!1))]).then(()=>n)}(function(){(function(n){$t=n})(`${If}_lite`),Bn(new rn("firestore/lite",(e,{instanceIdentifier:n,options:r})=>{const s=e.getProvider("app").getImmediate(),i=new ur(new Wf(e.getProvider("auth-internal")),new Jf(e.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new S(x,'"projectId" not provided in firebase.initializeApp.');return new on(a.options.projectId,l)}(s,n),s);return r&&i._setSettings(r),i},"PUBLIC").setMultipleInstances(!0)),St("firestore-lite","4.5.0",""),St("firestore-lite","4.5.0","esm2017")})();const Ge=new class{constructor(){js(this,"clearRoom",async()=>{const e=jt(this.firebase),n=Ht(e,"rooms",this.roomId,"messages");(await Rn(td(n))).forEach(async s=>{await sd(s.ref)})});this.roomId="omar-room",this.x=4,console.log("Store Created");const e={apiKey:"AIzaSyDCZsmbYNV1C494T9rDot5jT91bf1eEBSQ",authDomain:"fakegpt-d7649.firebaseapp.com",projectId:"fakegpt-d7649",storageBucket:"fakegpt-d7649.appspot.com",messagingSenderId:"840473404747",appId:"1:840473404747:web:dc6354a25f76ef1adff4ce"};this.firebase=ta(e)}getLatest(){return this.x++}getRoomMessages(){const e=jt(this.firebase),n=Ht(e,"rooms",this.roomId,"messages");return Rn(n)}addMessageToRoom(e){const n=jt(this.firebase),r=Ht(n,"rooms",this.roomId,"messages");return id(r,e)}getRooms(){const e=jt(this.firebase),n=Ht(e,"rooms");return Rn(n)}setRoomId(e){this.roomId=e}getData(){const e=jt(this.firebase),n=Ht(e,"rooms",this.roomId,"messages"),r=Rn(n);r.then(s=>{console.log(s),s.forEach(i=>{console.log(i.data())})}),console.log(r)}addToDatabase(){}},od={class:"w-full flex justify-center bg-[#212121]"},ad={class:"h-full w-[90%] sm:w-[70%] flex flex-col py-10 justify-between"},ld={class:"flex flex-col gap-4"},cd=G("div",{class:""},null,-1),ud={id:"search_input",class:"border-white/80 border rounded-lg flex items-center"},fd={data(){return{x:5,messages:[]}},methods:{changeMessage(){},updateX(){this.x=Ge.getLatest()},getData(){Ge.getData()},getMessages(){Ge.getRoomMessages().then(t=>{console.log("Gettring messages ... "),this.messages=[],t.forEach(e=>{this.messages.push(e.data())}),this.messages.sort((e,n)=>e.timestamp-n.timestamp)})},addMessage(t){let e=new Date().getTime();Ge.addMessageToRoom({message:t,timestamp:e}).then(r=>{this.getMessages()}),this.outMessage=""}},beforeMount(){this.getMessages()}},Ca=Object.assign(fd,{__name:"Chat",props:{msg:{type:String,required:!1}},setup(t){return(e,n)=>(ut(),Pt("div",od,[G("div",ad,[G("div",ld,[(ut(!0),Pt(Te,null,Do(e.messages,r=>(ut(),Pt("div",null,no(r.message),1))),256))]),cd,G("div",ud,[Ll(G("input",{ref:"input",onKeyup:n[0]||(n[0]=nu(r=>e.addMessage(e.outMessage),["enter"])),class:"w-full bg-white/0 p-4 px-4","onUpdate:modelValue":n[1]||(n[1]=r=>e.outMessage=r)},null,544),[[eu,e.outMessage]]),G("button",{onClick:n[2]||(n[2]=r=>e.addMessage(e.outMessage)),class:"material-symbols-outlined rounded-full p-[0.35rem] mx-5 hover:bg-white/20"}," send ")])])]))}}),hd={class:"flex flex-row w-screen h-screen bg-slate-500"},dd={class:"min-w-[17rem] max-w-[18.5rem] bg-[#171717] h-full hidden sm:flex flex-col p-4 gap-4"},pd=G("span",{class:"rounded-full bg-white w-7 h-7"},null,-1),md={id:"chats_list",class:"flex flex-col gap-5"},gd=G("section",{class:"text-[12px] px-2"},"Public",-1),_d=["onClick"],yd=G("div",{hidden:""},[G("section",{class:"text-[12px] px-2"},"Tommorow :)"),G("button",{class:"rounded-md hover:bg-slate-200/5 flex items-center text-sm font-medium p-2 gap-2 text-white w-full truncate"}," How asdf asdf asd to sda get ")],-1),bd={class:"flex flex-col w-full"},Ed={class:"h-[3rem] sm:hidden flex-grow-0 bg-[#171717] flex justify-center items-center"},wd={data(){return{rooms:[],show:!0}},components:{Chat:Ca},methods:{getRooms(){Ge.getRooms().then(t=>{this.rooms=[],t.forEach(e=>{let n=e.data();n.id=e.id,this.rooms.push(n)})})},setRoom(t){console.log("Changing room"),Ge.setRoomId(t),window.location.href=window.location.href.replace(window.location.pathname,"/"+t)},clearRoom(){console.log("Deleteing"),Ge.clearRoom().then(()=>{window.location.reload()})}},beforeMount(){this.getRooms();let t=window.location.pathname.replace("/","").trim();console.log(t),Ge.setRoomId(t)}},vd=Object.assign(wd,{__name:"Main",setup(t){return(e,n)=>(ut(),Pt("div",hd,[G("div",dd,[G("button",{onClick:n[0]||(n[0]=r=>e.clearRoom()),class:"rounded-md hover:bg-slate-200/5 flex items-center text-sm font-medium p-2 gap-2 text-white"},[pd,zo(" Clear Chat ")]),G("div",md,[G("div",null,[gd,(ut(!0),Pt(Te,null,Do(e.rooms,r=>(ut(),Pt("button",{onClick:s=>e.setRoom(r.id),class:"rounded-md hover:bg-slate-200/5 flex items-center text-sm font-medium p-2 gap-2 text-white w-full truncate"},no(r.room_name),9,_d))),256))]),yd])]),G("div",bd,[G("div",Ed,[G("button",{onClick:n[1]||(n[1]=r=>e.clearRoom()),class:"material-symbols-outlined rounded-full bg-slate-800 w-[2rem] h-[2rem]"}," delete ")]),ke(Ca,{class:"flex-grow w-full",msg:"asdf",ref:"chatCom"},null,512)])]))}}),Id={__name:"App",setup(t){return(e,n)=>(ut(),_c(vd))}};iu(Id).mount("#app");
