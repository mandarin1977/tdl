(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Lc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Qe={},br=[],Dn=()=>{},zp=()=>!1,Da=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Bc=t=>t.startsWith("onUpdate:"),Ut=Object.assign,Uc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Oy=Object.prototype.hasOwnProperty,$e=(t,e)=>Oy.call(t,e),me=Array.isArray,Sr=t=>no(t)==="[object Map]",zr=t=>no(t)==="[object Set]",yd=t=>no(t)==="[object Date]",Ee=t=>typeof t=="function",ht=t=>typeof t=="string",Bn=t=>typeof t=="symbol",ze=t=>t!==null&&typeof t=="object",Wp=t=>(ze(t)||Ee(t))&&Ee(t.then)&&Ee(t.catch),Kp=Object.prototype.toString,no=t=>Kp.call(t),Vy=t=>no(t).slice(8,-1),Yp=t=>no(t)==="[object Object]",Fc=t=>ht(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ei=Lc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xa=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Ly=/-\w/g,dn=xa(t=>t.replace(Ly,e=>e.slice(1).toUpperCase())),By=/\B([A-Z])/g,cr=xa(t=>t.replace(By,"-$1").toLowerCase()),Na=xa(t=>t.charAt(0).toUpperCase()+t.slice(1)),wl=xa(t=>t?`on${Na(t)}`:""),Ts=(t,e)=>!Object.is(t,e),Vo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Jp=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Jo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ad;const Ma=()=>Ad||(Ad=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function yt(t){if(me(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=ht(s)?Hy(s):yt(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(ht(t)||ze(t))return t}const Uy=/;(?![^(]*\))/g,Fy=/:([^]+)/,$y=/\/\*[^]*?\*\//g;function Hy(t){const e={};return t.replace($y,"").split(Uy).forEach(n=>{if(n){const s=n.split(Fy);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function be(t){let e="";if(ht(t))e=t;else if(me(t))for(let n=0;n<t.length;n++){const s=be(t[n]);s&&(e+=s+" ")}else if(ze(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const jy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gy=Lc(jy);function Xp(t){return!!t||t===""}function qy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=sr(t[s],e[s]);return n}function sr(t,e){if(t===e)return!0;let n=yd(t),s=yd(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Bn(t),s=Bn(e),n||s)return t===e;if(n=me(t),s=me(e),n||s)return n&&s?qy(t,e):!1;if(n=ze(t),s=ze(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!sr(t[o],e[o]))return!1}}return String(t)===String(e)}function $c(t,e){return t.findIndex(n=>sr(n,e))}const Zp=t=>!!(t&&t.__v_isRef===!0),H=t=>ht(t)?t:t==null?"":me(t)||ze(t)&&(t.toString===Kp||!Ee(t.toString))?Zp(t)?H(t.value):JSON.stringify(t,eg,2):String(t),eg=(t,e)=>Zp(e)?eg(t,e.value):Sr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[El(s,i)+" =>"]=r,n),{})}:zr(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>El(n))}:Bn(e)?El(e):ze(e)&&!me(e)&&!Yp(e)?String(e):e,El=(t,e="")=>{var n;return Bn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Wt;class Qy{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Wt,!e&&Wt&&(this.index=(Wt.scopes||(Wt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Wt;try{return Wt=this,e()}finally{Wt=n}}}on(){++this._on===1&&(this.prevScope=Wt,Wt=this)}off(){this._on>0&&--this._on===0&&(Wt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function zy(){return Wt}let Ke;const Tl=new WeakSet;class tg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Wt&&Wt.active&&Wt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Tl.has(this)&&(Tl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||sg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Id(this),rg(this);const e=Ke,n=yn;Ke=this,yn=!0;try{return this.fn()}finally{ig(this),Ke=e,yn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Gc(e);this.deps=this.depsTail=void 0,Id(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Tl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Yl(this)&&this.run()}get dirty(){return Yl(this)}}let ng=0,Ti,Ci;function sg(t,e=!1){if(t.flags|=8,e){t.next=Ci,Ci=t;return}t.next=Ti,Ti=t}function Hc(){ng++}function jc(){if(--ng>0)return;if(Ci){let e=Ci;for(Ci=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ti;){let e=Ti;for(Ti=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function rg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ig(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Gc(s),Wy(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function Yl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(og(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function og(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ui)||(t.globalVersion=Ui,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Yl(t))))return;t.flags|=2;const e=t.dep,n=Ke,s=yn;Ke=t,yn=!0;try{rg(t);const r=t.fn(t._value);(e.version===0||Ts(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{Ke=n,yn=s,ig(t),t.flags&=-3}}function Gc(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Gc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Wy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let yn=!0;const ag=[];function ts(){ag.push(yn),yn=!1}function ns(){const t=ag.pop();yn=t===void 0?!0:t}function Id(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ke;Ke=void 0;try{e()}finally{Ke=n}}}let Ui=0;class Ky{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class qc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ke||!yn||Ke===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ke)n=this.activeLink=new Ky(Ke,this),Ke.deps?(n.prevDep=Ke.depsTail,Ke.depsTail.nextDep=n,Ke.depsTail=n):Ke.deps=Ke.depsTail=n,lg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Ke.depsTail,n.nextDep=void 0,Ke.depsTail.nextDep=n,Ke.depsTail=n,Ke.deps===n&&(Ke.deps=s)}return n}trigger(e){this.version++,Ui++,this.notify(e)}notify(e){Hc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{jc()}}}function lg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)lg(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Jl=new WeakMap,er=Symbol(""),Xl=Symbol(""),Fi=Symbol("");function Ot(t,e,n){if(yn&&Ke){let s=Jl.get(t);s||Jl.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new qc),r.map=s,r.key=n),r.track()}}function zn(t,e,n,s,r,i){const o=Jl.get(t);if(!o){Ui++;return}const l=c=>{c&&c.trigger()};if(Hc(),e==="clear")o.forEach(l);else{const c=me(t),u=c&&Fc(n);if(c&&n==="length"){const f=Number(s);o.forEach((p,m)=>{(m==="length"||m===Fi||!Bn(m)&&m>=f)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Fi)),e){case"add":c?u&&l(o.get("length")):(l(o.get(er)),Sr(t)&&l(o.get(Xl)));break;case"delete":c||(l(o.get(er)),Sr(t)&&l(o.get(Xl)));break;case"set":Sr(t)&&l(o.get(er));break}}jc()}function yr(t){const e=Fe(t);return e===t?e:(Ot(e,"iterate",Fi),cn(t)?e:e.map(St))}function Oa(t){return Ot(t=Fe(t),"iterate",Fi),t}const Yy={__proto__:null,[Symbol.iterator](){return Cl(this,Symbol.iterator,St)},concat(...t){return yr(this).concat(...t.map(e=>me(e)?yr(e):e))},entries(){return Cl(this,"entries",t=>(t[1]=St(t[1]),t))},every(t,e){return Gn(this,"every",t,e,void 0,arguments)},filter(t,e){return Gn(this,"filter",t,e,n=>n.map(St),arguments)},find(t,e){return Gn(this,"find",t,e,St,arguments)},findIndex(t,e){return Gn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Gn(this,"findLast",t,e,St,arguments)},findLastIndex(t,e){return Gn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Gn(this,"forEach",t,e,void 0,arguments)},includes(...t){return bl(this,"includes",t)},indexOf(...t){return bl(this,"indexOf",t)},join(t){return yr(this).join(t)},lastIndexOf(...t){return bl(this,"lastIndexOf",t)},map(t,e){return Gn(this,"map",t,e,void 0,arguments)},pop(){return pi(this,"pop")},push(...t){return pi(this,"push",t)},reduce(t,...e){return wd(this,"reduce",t,e)},reduceRight(t,...e){return wd(this,"reduceRight",t,e)},shift(){return pi(this,"shift")},some(t,e){return Gn(this,"some",t,e,void 0,arguments)},splice(...t){return pi(this,"splice",t)},toReversed(){return yr(this).toReversed()},toSorted(t){return yr(this).toSorted(t)},toSpliced(...t){return yr(this).toSpliced(...t)},unshift(...t){return pi(this,"unshift",t)},values(){return Cl(this,"values",St)}};function Cl(t,e,n){const s=Oa(t),r=s[e]();return s!==t&&!cn(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.done||(i.value=n(i.value)),i}),r}const Jy=Array.prototype;function Gn(t,e,n,s,r,i){const o=Oa(t),l=o!==t&&!cn(t),c=o[e];if(c!==Jy[e]){const p=c.apply(t,i);return l?St(p):p}let u=n;o!==t&&(l?u=function(p,m){return n.call(this,St(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=c.call(o,u,s);return l&&r?r(f):f}function wd(t,e,n,s){const r=Oa(t);let i=n;return r!==t&&(cn(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,St(l),c,t)}),r[e](i,...s)}function bl(t,e,n){const s=Fe(t);Ot(s,"iterate",Fi);const r=s[e](...n);return(r===-1||r===!1)&&Wc(n[0])?(n[0]=Fe(n[0]),s[e](...n)):r}function pi(t,e,n=[]){ts(),Hc();const s=Fe(t)[e].apply(t,n);return jc(),ns(),s}const Xy=Lc("__proto__,__v_isRef,__isVue"),cg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Bn));function Zy(t){Bn(t)||(t=String(t));const e=Fe(this);return Ot(e,"has",t),e.hasOwnProperty(t)}class ug{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?cA:pg:i?fg:dg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=me(e);if(!r){let c;if(o&&(c=Yy[n]))return c;if(n==="hasOwnProperty")return Zy}const l=Reflect.get(e,n,Bt(e)?e:s);if((Bn(n)?cg.has(n):Xy(n))||(r||Ot(e,"get",n),i))return l;if(Bt(l)){const c=o&&Fc(n)?l:l.value;return r&&ze(c)?ec(c):c}return ze(l)?r?ec(l):so(l):l}}class hg extends ug{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const c=ks(i);if(!cn(s)&&!ks(s)&&(i=Fe(i),s=Fe(s)),!me(e)&&Bt(i)&&!Bt(s))return c||(i.value=s),!0}const o=me(e)&&Fc(n)?Number(n)<e.length:$e(e,n),l=Reflect.set(e,n,s,Bt(e)?e:r);return e===Fe(r)&&(o?Ts(s,i)&&zn(e,"set",n,s):zn(e,"add",n,s)),l}deleteProperty(e,n){const s=$e(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&zn(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!Bn(n)||!cg.has(n))&&Ot(e,"has",n),s}ownKeys(e){return Ot(e,"iterate",me(e)?"length":er),Reflect.ownKeys(e)}}class eA extends ug{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const tA=new hg,nA=new eA,sA=new hg(!0);const Zl=t=>t,bo=t=>Reflect.getPrototypeOf(t);function rA(t,e,n){return function(...s){const r=this.__v_raw,i=Fe(r),o=Sr(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),f=n?Zl:e?Xo:St;return!e&&Ot(i,"iterate",c?Xl:er),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function So(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function iA(t,e){const n={get(r){const i=this.__v_raw,o=Fe(i),l=Fe(r);t||(Ts(r,l)&&Ot(o,"get",r),Ot(o,"get",l));const{has:c}=bo(o),u=e?Zl:t?Xo:St;if(c.call(o,r))return u(i.get(r));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&Ot(Fe(r),"iterate",er),r.size},has(r){const i=this.__v_raw,o=Fe(i),l=Fe(r);return t||(Ts(r,l)&&Ot(o,"has",r),Ot(o,"has",l)),r===l?i.has(r):i.has(r)||i.has(l)},forEach(r,i){const o=this,l=o.__v_raw,c=Fe(l),u=e?Zl:t?Xo:St;return!t&&Ot(c,"iterate",er),l.forEach((f,p)=>r.call(i,u(f),u(p),o))}};return Ut(n,t?{add:So("add"),set:So("set"),delete:So("delete"),clear:So("clear")}:{add(r){!e&&!cn(r)&&!ks(r)&&(r=Fe(r));const i=Fe(this);return bo(i).has.call(i,r)||(i.add(r),zn(i,"add",r,r)),this},set(r,i){!e&&!cn(i)&&!ks(i)&&(i=Fe(i));const o=Fe(this),{has:l,get:c}=bo(o);let u=l.call(o,r);u||(r=Fe(r),u=l.call(o,r));const f=c.call(o,r);return o.set(r,i),u?Ts(i,f)&&zn(o,"set",r,i):zn(o,"add",r,i),this},delete(r){const i=Fe(this),{has:o,get:l}=bo(i);let c=o.call(i,r);c||(r=Fe(r),c=o.call(i,r)),l&&l.call(i,r);const u=i.delete(r);return c&&zn(i,"delete",r,void 0),u},clear(){const r=Fe(this),i=r.size!==0,o=r.clear();return i&&zn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=rA(r,t,e)}),n}function Qc(t,e){const n=iA(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get($e(n,r)&&r in s?n:s,r,i)}const oA={get:Qc(!1,!1)},aA={get:Qc(!1,!0)},lA={get:Qc(!0,!1)};const dg=new WeakMap,fg=new WeakMap,pg=new WeakMap,cA=new WeakMap;function uA(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hA(t){return t.__v_skip||!Object.isExtensible(t)?0:uA(Vy(t))}function so(t){return ks(t)?t:zc(t,!1,tA,oA,dg)}function gg(t){return zc(t,!1,sA,aA,fg)}function ec(t){return zc(t,!0,nA,lA,pg)}function zc(t,e,n,s,r){if(!ze(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=hA(t);if(i===0)return t;const o=r.get(t);if(o)return o;const l=new Proxy(t,i===2?s:n);return r.set(t,l),l}function Rr(t){return ks(t)?Rr(t.__v_raw):!!(t&&t.__v_isReactive)}function ks(t){return!!(t&&t.__v_isReadonly)}function cn(t){return!!(t&&t.__v_isShallow)}function Wc(t){return t?!!t.__v_raw:!1}function Fe(t){const e=t&&t.__v_raw;return e?Fe(e):t}function dA(t){return!$e(t,"__v_skip")&&Object.isExtensible(t)&&Jp(t,"__v_skip",!0),t}const St=t=>ze(t)?so(t):t,Xo=t=>ze(t)?ec(t):t;function Bt(t){return t?t.__v_isRef===!0:!1}function V(t){return mg(t,!1)}function fA(t){return mg(t,!0)}function mg(t,e){return Bt(t)?t:new pA(t,e)}class pA{constructor(e,n){this.dep=new qc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Fe(e),this._value=n?e:St(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||cn(e)||ks(e);e=s?e:Fe(e),Ts(e,n)&&(this._rawValue=e,this._value=s?e:St(e),this.dep.trigger())}}function Pt(t){return Bt(t)?t.value:t}const gA={get:(t,e,n)=>e==="__v_raw"?t:Pt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Bt(r)&&!Bt(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function _g(t){return Rr(t)?t:new Proxy(t,gA)}class mA{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new qc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ui-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Ke!==this)return sg(this,!0),!0}get value(){const e=this.dep.track();return og(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function _A(t,e,n=!1){let s,r;return Ee(t)?s=t:(s=t.get,r=t.set),new mA(s,r,n)}const Ro={},Zo=new WeakMap;let Ws;function vA(t,e=!1,n=Ws){if(n){let s=Zo.get(n);s||Zo.set(n,s=[]),s.push(t)}}function yA(t,e,n=Qe){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:l,call:c}=n,u=G=>r?G:cn(G)||r===!1||r===0?Wn(G,1):Wn(G);let f,p,m,_,E=!1,T=!1;if(Bt(t)?(p=()=>t.value,E=cn(t)):Rr(t)?(p=()=>u(t),E=!0):me(t)?(T=!0,E=t.some(G=>Rr(G)||cn(G)),p=()=>t.map(G=>{if(Bt(G))return G.value;if(Rr(G))return u(G);if(Ee(G))return c?c(G,2):G()})):Ee(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){ts();try{m()}finally{ns()}}const G=Ws;Ws=f;try{return c?c(t,3,[_]):t(_)}finally{Ws=G}}:p=Dn,e&&r){const G=p,re=r===!0?1/0:r;p=()=>Wn(G(),re)}const I=zy(),x=()=>{f.stop(),I&&I.active&&Uc(I.effects,f)};if(i&&e){const G=e;e=(...re)=>{G(...re),x()}}let F=T?new Array(t.length).fill(Ro):Ro;const $=G=>{if(!(!(f.flags&1)||!f.dirty&&!G))if(e){const re=f.run();if(r||E||(T?re.some((we,R)=>Ts(we,F[R])):Ts(re,F))){m&&m();const we=Ws;Ws=f;try{const R=[re,F===Ro?void 0:T&&F[0]===Ro?[]:F,_];F=re,c?c(e,3,R):e(...R)}finally{Ws=we}}}else f.run()};return l&&l($),f=new tg(p),f.scheduler=o?()=>o($,!1):$,_=G=>vA(G,!1,f),m=f.onStop=()=>{const G=Zo.get(f);if(G){if(c)c(G,4);else for(const re of G)re();Zo.delete(f)}},e?s?$(!0):F=f.run():o?o($.bind(null,!0),!0):f.run(),x.pause=f.pause.bind(f),x.resume=f.resume.bind(f),x.stop=x,x}function Wn(t,e=1/0,n){if(e<=0||!ze(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Bt(t))Wn(t.value,e,n);else if(me(t))for(let s=0;s<t.length;s++)Wn(t[s],e,n);else if(zr(t)||Sr(t))t.forEach(s=>{Wn(s,e,n)});else if(Yp(t)){for(const s in t)Wn(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Wn(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ro(t,e,n,s){try{return s?t(...s):t()}catch(r){Va(r,e,n)}}function Un(t,e,n,s){if(Ee(t)){const r=ro(t,e,n,s);return r&&Wp(r)&&r.catch(i=>{Va(i,e,n)}),r}if(me(t)){const r=[];for(let i=0;i<t.length;i++)r.push(Un(t[i],e,n,s));return r}}function Va(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Qe;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,c,u)===!1)return}l=l.parent}if(i){ts(),ro(i,null,10,[t,c,u]),ns();return}}AA(t,n,r,s,o)}function AA(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const jt=[];let Rn=-1;const Pr=[];let _s=null,Ar=0;const vg=Promise.resolve();let ea=null;function Kc(t){const e=ea||vg;return t?e.then(this?t.bind(this):t):e}function IA(t){let e=Rn+1,n=jt.length;for(;e<n;){const s=e+n>>>1,r=jt[s],i=$i(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function Yc(t){if(!(t.flags&1)){const e=$i(t),n=jt[jt.length-1];!n||!(t.flags&2)&&e>=$i(n)?jt.push(t):jt.splice(IA(e),0,t),t.flags|=1,yg()}}function yg(){ea||(ea=vg.then(Ig))}function wA(t){me(t)?Pr.push(...t):_s&&t.id===-1?_s.splice(Ar+1,0,t):t.flags&1||(Pr.push(t),t.flags|=1),yg()}function Ed(t,e,n=Rn+1){for(;n<jt.length;n++){const s=jt[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;jt.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Ag(t){if(Pr.length){const e=[...new Set(Pr)].sort((n,s)=>$i(n)-$i(s));if(Pr.length=0,_s){_s.push(...e);return}for(_s=e,Ar=0;Ar<_s.length;Ar++){const n=_s[Ar];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}_s=null,Ar=0}}const $i=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ig(t){try{for(Rn=0;Rn<jt.length;Rn++){const e=jt[Rn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ro(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Rn<jt.length;Rn++){const e=jt[Rn];e&&(e.flags&=-2)}Rn=-1,jt.length=0,Ag(),ea=null,(jt.length||Pr.length)&&Ig()}}let tn=null,wg=null;function ta(t){const e=tn;return tn=t,wg=t&&t.type.__scopeId||null,e}function EA(t,e=tn,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&ra(-1);const i=ta(e);let o;try{o=t(...r)}finally{ta(i),s._d&&ra(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function mn(t,e){if(tn===null)return t;const n=Fa(tn),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,l,c=Qe]=e[r];i&&(Ee(i)&&(i={mounted:i,updated:i}),i.deep&&Wn(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Qs(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const l=r[o];i&&(l.oldValue=i[o].value);let c=l.dir[s];c&&(ts(),Un(c,n,8,[t.el,l,t,e]),ns())}}const TA=Symbol("_vte"),CA=t=>t.__isTeleport,bA=Symbol("_leaveCb");function Jc(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Jc(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Eg(t,e){return Ee(t)?Ut({name:t.name},e,{setup:t}):t}function Tg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const na=new WeakMap;function bi(t,e,n,s,r=!1){if(me(t)){t.forEach((E,T)=>bi(E,e&&(me(e)?e[T]:e),n,s,r));return}if(Si(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&bi(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?Fa(s.component):s.el,o=r?null:i,{i:l,r:c}=t,u=e&&e.r,f=l.refs===Qe?l.refs={}:l.refs,p=l.setupState,m=Fe(p),_=p===Qe?zp:E=>$e(m,E);if(u!=null&&u!==c){if(Td(e),ht(u))f[u]=null,_(u)&&(p[u]=null);else if(Bt(u)){u.value=null;const E=e;E.k&&(f[E.k]=null)}}if(Ee(c))ro(c,l,12,[o,f]);else{const E=ht(c),T=Bt(c);if(E||T){const I=()=>{if(t.f){const x=E?_(c)?p[c]:f[c]:c.value;if(r)me(x)&&Uc(x,i);else if(me(x))x.includes(i)||x.push(i);else if(E)f[c]=[i],_(c)&&(p[c]=f[c]);else{const F=[i];c.value=F,t.k&&(f[t.k]=F)}}else E?(f[c]=o,_(c)&&(p[c]=o)):T&&(c.value=o,t.k&&(f[t.k]=o))};if(o){const x=()=>{I(),na.delete(t)};x.id=-1,na.set(t,x),en(x,n)}else Td(t),I()}}}function Td(t){const e=na.get(t);e&&(e.flags|=8,na.delete(t))}Ma().requestIdleCallback;Ma().cancelIdleCallback;const Si=t=>!!t.type.__asyncLoader,Cg=t=>t.type.__isKeepAlive;function SA(t,e){bg(t,"a",e)}function RA(t,e){bg(t,"da",e)}function bg(t,e,n=Lt){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(La(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Cg(r.parent.vnode)&&PA(s,e,n,r),r=r.parent}}function PA(t,e,n,s){const r=La(e,t,s,!0);Wr(()=>{Uc(s[e],r)},n)}function La(t,e,n=Lt,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{ts();const l=io(n),c=Un(e,n,t,o);return l(),ns(),c});return s?r.unshift(i):r.push(i),i}}const as=t=>(e,n=Lt)=>{(!Gi||t==="sp")&&La(t,(...s)=>e(...s),n)},kA=as("bm"),dt=as("m"),DA=as("bu"),xA=as("u"),NA=as("bum"),Wr=as("um"),MA=as("sp"),OA=as("rtg"),VA=as("rtc");function LA(t,e=Lt){La("ec",t,e)}const BA="components";function UA(t,e){return $A(BA,t,!0,e)||t}const FA=Symbol.for("v-ndc");function $A(t,e,n=!0,s=!1){const r=tn||Lt;if(r){const i=r.type;{const l=P0(i,!1);if(l&&(l===e||l===dn(e)||l===Na(dn(e))))return i}const o=Cd(r[t]||i[t],e)||Cd(r.appContext[t],e);return!o&&s?i:o}}function Cd(t,e){return t&&(t[e]||t[dn(e)]||t[Na(dn(e))])}function Be(t,e,n,s){let r;const i=n,o=me(t);if(o||ht(t)){const l=o&&Rr(t);let c=!1,u=!1;l&&(c=!cn(t),u=ks(t),t=Oa(t)),r=new Array(t.length);for(let f=0,p=t.length;f<p;f++)r[f]=e(c?u?Xo(St(t[f])):St(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let l=0;l<t;l++)r[l]=e(l+1,l,void 0,i)}else if(ze(t))if(t[Symbol.iterator])r=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);r=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const f=l[c];r[c]=e(t[f],f,c,i)}}else r=[];return r}const tc=t=>t?Wg(t)?Fa(t):tc(t.parent):null,Ri=Ut(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>tc(t.parent),$root:t=>tc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Rg(t),$forceUpdate:t=>t.f||(t.f=()=>{Yc(t.update)}),$nextTick:t=>t.n||(t.n=Kc.bind(t.proxy)),$watch:t=>l0.bind(t)}),Sl=(t,e)=>t!==Qe&&!t.__isScriptSetup&&$e(t,e),HA={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Sl(s,e))return o[e]=1,s[e];if(r!==Qe&&$e(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&$e(u,e))return o[e]=3,i[e];if(n!==Qe&&$e(n,e))return o[e]=4,n[e];nc&&(o[e]=0)}}const f=Ri[e];let p,m;if(f)return e==="$attrs"&&Ot(t.attrs,"get",""),f(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Qe&&$e(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,$e(m,e))return m[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Sl(r,e)?(r[e]=n,!0):s!==Qe&&$e(s,e)?(s[e]=n,!0):$e(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i,type:o}},l){let c,u;return!!(n[l]||t!==Qe&&l[0]!=="$"&&$e(t,l)||Sl(e,l)||(c=i[0])&&$e(c,l)||$e(s,l)||$e(Ri,l)||$e(r.config.globalProperties,l)||(u=o.__cssModules)&&u[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:$e(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function bd(t){return me(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let nc=!0;function jA(t){const e=Rg(t),n=t.proxy,s=t.ctx;nc=!1,e.beforeCreate&&Sd(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:l,provide:c,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:_,updated:E,activated:T,deactivated:I,beforeDestroy:x,beforeUnmount:F,destroyed:$,unmounted:G,render:re,renderTracked:we,renderTriggered:R,errorCaptured:C,serverPrefetch:S,expose:D,inheritAttrs:k,components:O,directives:w,filters:Oe}=e;if(u&&GA(u,s,null),o)for(const Ve in o){const Te=o[Ve];Ee(Te)&&(s[Ve]=Te.bind(n))}if(r){const Ve=r.call(n,n);ze(Ve)&&(t.data=so(Ve))}if(nc=!0,i)for(const Ve in i){const Te=i[Ve],Dt=Ee(Te)?Te.bind(n,n):Ee(Te.get)?Te.get.bind(n,n):Dn,We=!Ee(Te)&&Ee(Te.set)?Te.set.bind(n):Dn,pt=je({get:Dt,set:We});Object.defineProperty(s,Ve,{enumerable:!0,configurable:!0,get:()=>pt.value,set:Re=>pt.value=Re})}if(l)for(const Ve in l)Sg(l[Ve],s,n,Ve);if(c){const Ve=Ee(c)?c.call(n):c;Reflect.ownKeys(Ve).forEach(Te=>{Lo(Te,Ve[Te])})}f&&Sd(f,t,"c");function rt(Ve,Te){me(Te)?Te.forEach(Dt=>Ve(Dt.bind(n))):Te&&Ve(Te.bind(n))}if(rt(kA,p),rt(dt,m),rt(DA,_),rt(xA,E),rt(SA,T),rt(RA,I),rt(LA,C),rt(VA,we),rt(OA,R),rt(NA,F),rt(Wr,G),rt(MA,S),me(D))if(D.length){const Ve=t.exposed||(t.exposed={});D.forEach(Te=>{Object.defineProperty(Ve,Te,{get:()=>n[Te],set:Dt=>n[Te]=Dt,enumerable:!0})})}else t.exposed||(t.exposed={});re&&t.render===Dn&&(t.render=re),k!=null&&(t.inheritAttrs=k),O&&(t.components=O),w&&(t.directives=w),S&&Tg(t)}function GA(t,e,n=Dn){me(t)&&(t=sc(t));for(const s in t){const r=t[s];let i;ze(r)?"default"in r?i=xn(r.from||s,r.default,!0):i=xn(r.from||s):i=xn(r),Bt(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Sd(t,e,n){Un(me(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Sg(t,e,n,s){let r=s.includes(".")?$g(n,s):()=>n[s];if(ht(t)){const i=e[t];Ee(i)&&Cs(r,i)}else if(Ee(t))Cs(r,t.bind(n));else if(ze(t))if(me(t))t.forEach(i=>Sg(i,e,n,s));else{const i=Ee(t.handler)?t.handler.bind(n):e[t.handler];Ee(i)&&Cs(r,i,t)}}function Rg(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>sa(c,u,o,!0)),sa(c,e,o)),ze(e)&&i.set(e,c),c}function sa(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&sa(t,i,n,!0),r&&r.forEach(o=>sa(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=qA[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const qA={data:Rd,props:Pd,emits:Pd,methods:vi,computed:vi,beforeCreate:$t,created:$t,beforeMount:$t,mounted:$t,beforeUpdate:$t,updated:$t,beforeDestroy:$t,beforeUnmount:$t,destroyed:$t,unmounted:$t,activated:$t,deactivated:$t,errorCaptured:$t,serverPrefetch:$t,components:vi,directives:vi,watch:zA,provide:Rd,inject:QA};function Rd(t,e){return e?t?function(){return Ut(Ee(t)?t.call(this,this):t,Ee(e)?e.call(this,this):e)}:e:t}function QA(t,e){return vi(sc(t),sc(e))}function sc(t){if(me(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function $t(t,e){return t?[...new Set([].concat(t,e))]:e}function vi(t,e){return t?Ut(Object.create(null),t,e):e}function Pd(t,e){return t?me(t)&&me(e)?[...new Set([...t,...e])]:Ut(Object.create(null),bd(t),bd(e??{})):e}function zA(t,e){if(!t)return e;if(!e)return t;const n=Ut(Object.create(null),t);for(const s in e)n[s]=$t(t[s],e[s]);return n}function Pg(){return{app:null,config:{isNativeTag:zp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let WA=0;function KA(t,e){return function(s,r=null){Ee(s)||(s=Ut({},s)),r!=null&&!ze(r)&&(r=null);const i=Pg(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:WA++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:D0,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&Ee(f.install)?(o.add(f),f.install(u,...p)):Ee(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!c){const _=u._ceVNode||Ae(s,r);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(_,f,m),c=!0,u._container=f,f.__vue_app__=u,Fa(_.component)}},onUnmount(f){l.push(f)},unmount(){c&&(Un(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=kr;kr=u;try{return f()}finally{kr=p}}};return u}}let kr=null;function Lo(t,e){if(Lt){let n=Lt.provides;const s=Lt.parent&&Lt.parent.provides;s===n&&(n=Lt.provides=Object.create(s)),n[t]=e}}function xn(t,e,n=!1){const s=T0();if(s||kr){let r=kr?kr._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Ee(e)?e.call(s&&s.proxy):e}}const kg={},Dg=()=>Object.create(kg),xg=t=>Object.getPrototypeOf(t)===kg;function YA(t,e,n,s=!1){const r={},i=Dg();t.propsDefaults=Object.create(null),Ng(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:gg(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function JA(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,l=Fe(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(Ba(t.emitsOptions,m))continue;const _=e[m];if(c)if($e(i,m))_!==i[m]&&(i[m]=_,u=!0);else{const E=dn(m);r[E]=rc(c,l,E,_,t,!1)}else _!==i[m]&&(i[m]=_,u=!0)}}}else{Ng(t,e,r,i)&&(u=!0);let f;for(const p in l)(!e||!$e(e,p)&&((f=cr(p))===p||!$e(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(r[p]=rc(c,l,p,void 0,t,!0)):delete r[p]);if(i!==l)for(const p in i)(!e||!$e(e,p))&&(delete i[p],u=!0)}u&&zn(t.attrs,"set","")}function Ng(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Ei(c))continue;const u=e[c];let f;r&&$e(r,f=dn(c))?!i||!i.includes(f)?n[f]=u:(l||(l={}))[f]=u:Ba(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=Fe(n),u=l||Qe;for(let f=0;f<i.length;f++){const p=i[f];n[p]=rc(r,c,p,u[p],t,!$e(u,p))}}return o}function rc(t,e,n,s,r,i){const o=t[n];if(o!=null){const l=$e(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Ee(c)){const{propsDefaults:u}=r;if(n in u)s=u[n];else{const f=io(r);s=u[n]=c.call(null,e),f()}}else s=c;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!l?s=!1:o[1]&&(s===""||s===cr(n))&&(s=!0))}return s}const XA=new WeakMap;function Mg(t,e,n=!1){const s=n?XA:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},l=[];let c=!1;if(!Ee(t)){const f=p=>{c=!0;const[m,_]=Mg(p,e,!0);Ut(o,m),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return ze(t)&&s.set(t,br),br;if(me(i))for(let f=0;f<i.length;f++){const p=dn(i[f]);kd(p)&&(o[p]=Qe)}else if(i)for(const f in i){const p=dn(f);if(kd(p)){const m=i[f],_=o[p]=me(m)||Ee(m)?{type:m}:Ut({},m),E=_.type;let T=!1,I=!0;if(me(E))for(let x=0;x<E.length;++x){const F=E[x],$=Ee(F)&&F.name;if($==="Boolean"){T=!0;break}else $==="String"&&(I=!1)}else T=Ee(E)&&E.name==="Boolean";_[0]=T,_[1]=I,(T||$e(_,"default"))&&l.push(p)}}const u=[o,l];return ze(t)&&s.set(t,u),u}function kd(t){return t[0]!=="$"&&!Ei(t)}const Xc=t=>t==="_"||t==="_ctx"||t==="$stable",Zc=t=>me(t)?t.map(kn):[kn(t)],ZA=(t,e,n)=>{if(e._n)return e;const s=EA((...r)=>Zc(e(...r)),n);return s._c=!1,s},Og=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Xc(r))continue;const i=t[r];if(Ee(i))e[r]=ZA(r,i,s);else if(i!=null){const o=Zc(i);e[r]=()=>o}}},Vg=(t,e)=>{const n=Zc(e);t.slots.default=()=>n},Lg=(t,e,n)=>{for(const s in e)(n||!Xc(s))&&(t[s]=e[s])},e0=(t,e,n)=>{const s=t.slots=Dg();if(t.vnode.shapeFlag&32){const r=e._;r?(Lg(s,e,n),n&&Jp(s,"_",r,!0)):Og(e,s)}else e&&Vg(t,e)},t0=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Qe;if(s.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Lg(r,e,n):(i=!e.$stable,Og(e,r)),o=e}else e&&(Vg(t,e),o={default:1});if(i)for(const l in r)!Xc(l)&&o[l]==null&&delete r[l]},en=m0;function n0(t){return s0(t)}function s0(t,e){const n=Ma();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:_=Dn,insertStaticContent:E}=t,T=(y,b,M,z=null,W=null,q=null,ne=void 0,Z=null,P=!!b.dynamicChildren)=>{if(y===b)return;y&&!gi(y,b)&&(z=K(y),Re(y,W,q,!0),y=null),b.patchFlag===-2&&(P=!1,b.dynamicChildren=null);const{type:A,ref:N,shapeFlag:Q}=b;switch(A){case Ua:I(y,b,M,z);break;case Ds:x(y,b,M,z);break;case Bo:y==null&&F(b,M,z,ne);break;case Ce:O(y,b,M,z,W,q,ne,Z,P);break;default:Q&1?re(y,b,M,z,W,q,ne,Z,P):Q&6?w(y,b,M,z,W,q,ne,Z,P):(Q&64||Q&128)&&A.process(y,b,M,z,W,q,ne,Z,P,he)}N!=null&&W?bi(N,y&&y.ref,q,b||y,!b):N==null&&y&&y.ref!=null&&bi(y.ref,null,q,y,!0)},I=(y,b,M,z)=>{if(y==null)s(b.el=l(b.children),M,z);else{const W=b.el=y.el;b.children!==y.children&&u(W,b.children)}},x=(y,b,M,z)=>{y==null?s(b.el=c(b.children||""),M,z):b.el=y.el},F=(y,b,M,z)=>{[y.el,y.anchor]=E(y.children,b,M,z,y.el,y.anchor)},$=({el:y,anchor:b},M,z)=>{let W;for(;y&&y!==b;)W=m(y),s(y,M,z),y=W;s(b,M,z)},G=({el:y,anchor:b})=>{let M;for(;y&&y!==b;)M=m(y),r(y),y=M;r(b)},re=(y,b,M,z,W,q,ne,Z,P)=>{b.type==="svg"?ne="svg":b.type==="math"&&(ne="mathml"),y==null?we(b,M,z,W,q,ne,Z,P):S(y,b,W,q,ne,Z,P)},we=(y,b,M,z,W,q,ne,Z)=>{let P,A;const{props:N,shapeFlag:Q,transition:J,dirs:ee}=y;if(P=y.el=o(y.type,q,N&&N.is,N),Q&8?f(P,y.children):Q&16&&C(y.children,P,null,z,W,Rl(y,q),ne,Z),ee&&Qs(y,null,z,"created"),R(P,y,y.scopeId,ne,z),N){for(const le in N)le!=="value"&&!Ei(le)&&i(P,le,null,N[le],q,z);"value"in N&&i(P,"value",null,N.value,q),(A=N.onVnodeBeforeMount)&&Sn(A,z,y)}ee&&Qs(y,null,z,"beforeMount");const ie=r0(W,J);ie&&J.beforeEnter(P),s(P,b,M),((A=N&&N.onVnodeMounted)||ie||ee)&&en(()=>{A&&Sn(A,z,y),ie&&J.enter(P),ee&&Qs(y,null,z,"mounted")},W)},R=(y,b,M,z,W)=>{if(M&&_(y,M),z)for(let q=0;q<z.length;q++)_(y,z[q]);if(W){let q=W.subTree;if(b===q||jg(q.type)&&(q.ssContent===b||q.ssFallback===b)){const ne=W.vnode;R(y,ne,ne.scopeId,ne.slotScopeIds,W.parent)}}},C=(y,b,M,z,W,q,ne,Z,P=0)=>{for(let A=P;A<y.length;A++){const N=y[A]=Z?vs(y[A]):kn(y[A]);T(null,N,b,M,z,W,q,ne,Z)}},S=(y,b,M,z,W,q,ne)=>{const Z=b.el=y.el;let{patchFlag:P,dynamicChildren:A,dirs:N}=b;P|=y.patchFlag&16;const Q=y.props||Qe,J=b.props||Qe;let ee;if(M&&zs(M,!1),(ee=J.onVnodeBeforeUpdate)&&Sn(ee,M,b,y),N&&Qs(b,y,M,"beforeUpdate"),M&&zs(M,!0),(Q.innerHTML&&J.innerHTML==null||Q.textContent&&J.textContent==null)&&f(Z,""),A?D(y.dynamicChildren,A,Z,M,z,Rl(b,W),q):ne||Te(y,b,Z,null,M,z,Rl(b,W),q,!1),P>0){if(P&16)k(Z,Q,J,M,W);else if(P&2&&Q.class!==J.class&&i(Z,"class",null,J.class,W),P&4&&i(Z,"style",Q.style,J.style,W),P&8){const ie=b.dynamicProps;for(let le=0;le<ie.length;le++){const ce=ie[le],ge=Q[ce],Pe=J[ce];(Pe!==ge||ce==="value")&&i(Z,ce,ge,Pe,W,M)}}P&1&&y.children!==b.children&&f(Z,b.children)}else!ne&&A==null&&k(Z,Q,J,M,W);((ee=J.onVnodeUpdated)||N)&&en(()=>{ee&&Sn(ee,M,b,y),N&&Qs(b,y,M,"updated")},z)},D=(y,b,M,z,W,q,ne)=>{for(let Z=0;Z<b.length;Z++){const P=y[Z],A=b[Z],N=P.el&&(P.type===Ce||!gi(P,A)||P.shapeFlag&198)?p(P.el):M;T(P,A,N,null,z,W,q,ne,!0)}},k=(y,b,M,z,W)=>{if(b!==M){if(b!==Qe)for(const q in b)!Ei(q)&&!(q in M)&&i(y,q,b[q],null,W,z);for(const q in M){if(Ei(q))continue;const ne=M[q],Z=b[q];ne!==Z&&q!=="value"&&i(y,q,Z,ne,W,z)}"value"in M&&i(y,"value",b.value,M.value,W)}},O=(y,b,M,z,W,q,ne,Z,P)=>{const A=b.el=y?y.el:l(""),N=b.anchor=y?y.anchor:l("");let{patchFlag:Q,dynamicChildren:J,slotScopeIds:ee}=b;ee&&(Z=Z?Z.concat(ee):ee),y==null?(s(A,M,z),s(N,M,z),C(b.children||[],M,N,W,q,ne,Z,P)):Q>0&&Q&64&&J&&y.dynamicChildren?(D(y.dynamicChildren,J,M,W,q,ne,Z),(b.key!=null||W&&b===W.subTree)&&Bg(y,b,!0)):Te(y,b,M,N,W,q,ne,Z,P)},w=(y,b,M,z,W,q,ne,Z,P)=>{b.slotScopeIds=Z,y==null?b.shapeFlag&512?W.ctx.activate(b,M,z,ne,P):Oe(b,M,z,W,q,ne,P):Ct(y,b,P)},Oe=(y,b,M,z,W,q,ne)=>{const Z=y.component=E0(y,z,W);if(Cg(y)&&(Z.ctx.renderer=he),C0(Z,!1,ne),Z.asyncDep){if(W&&W.registerDep(Z,rt,ne),!y.el){const P=Z.subTree=Ae(Ds);x(null,P,b,M),y.placeholder=P.el}}else rt(Z,y,b,M,W,q,ne)},Ct=(y,b,M)=>{const z=b.component=y.component;if(p0(y,b,M))if(z.asyncDep&&!z.asyncResolved){Ve(z,b,M);return}else z.next=b,z.update();else b.el=y.el,z.vnode=b},rt=(y,b,M,z,W,q,ne)=>{const Z=()=>{if(y.isMounted){let{next:Q,bu:J,u:ee,parent:ie,vnode:le}=y;{const Je=Ug(y);if(Je){Q&&(Q.el=le.el,Ve(y,Q,ne)),Je.asyncDep.then(()=>{y.isUnmounted||Z()});return}}let ce=Q,ge;zs(y,!1),Q?(Q.el=le.el,Ve(y,Q,ne)):Q=le,J&&Vo(J),(ge=Q.props&&Q.props.onVnodeBeforeUpdate)&&Sn(ge,ie,Q,le),zs(y,!0);const Pe=xd(y),Ye=y.subTree;y.subTree=Pe,T(Ye,Pe,p(Ye.el),K(Ye),y,W,q),Q.el=Pe.el,ce===null&&g0(y,Pe.el),ee&&en(ee,W),(ge=Q.props&&Q.props.onVnodeUpdated)&&en(()=>Sn(ge,ie,Q,le),W)}else{let Q;const{el:J,props:ee}=b,{bm:ie,m:le,parent:ce,root:ge,type:Pe}=y,Ye=Si(b);zs(y,!1),ie&&Vo(ie),!Ye&&(Q=ee&&ee.onVnodeBeforeMount)&&Sn(Q,ce,b),zs(y,!0);{ge.ce&&ge.ce._def.shadowRoot!==!1&&ge.ce._injectChildStyle(Pe);const Je=y.subTree=xd(y);T(null,Je,M,z,y,W,q),b.el=Je.el}if(le&&en(le,W),!Ye&&(Q=ee&&ee.onVnodeMounted)){const Je=b;en(()=>Sn(Q,ce,Je),W)}(b.shapeFlag&256||ce&&Si(ce.vnode)&&ce.vnode.shapeFlag&256)&&y.a&&en(y.a,W),y.isMounted=!0,b=M=z=null}};y.scope.on();const P=y.effect=new tg(Z);y.scope.off();const A=y.update=P.run.bind(P),N=y.job=P.runIfDirty.bind(P);N.i=y,N.id=y.uid,P.scheduler=()=>Yc(N),zs(y,!0),A()},Ve=(y,b,M)=>{b.component=y;const z=y.vnode.props;y.vnode=b,y.next=null,JA(y,b.props,z,M),t0(y,b.children,M),ts(),Ed(y),ns()},Te=(y,b,M,z,W,q,ne,Z,P=!1)=>{const A=y&&y.children,N=y?y.shapeFlag:0,Q=b.children,{patchFlag:J,shapeFlag:ee}=b;if(J>0){if(J&128){We(A,Q,M,z,W,q,ne,Z,P);return}else if(J&256){Dt(A,Q,M,z,W,q,ne,Z,P);return}}ee&8?(N&16&&gt(A,W,q),Q!==A&&f(M,Q)):N&16?ee&16?We(A,Q,M,z,W,q,ne,Z,P):gt(A,W,q,!0):(N&8&&f(M,""),ee&16&&C(Q,M,z,W,q,ne,Z,P))},Dt=(y,b,M,z,W,q,ne,Z,P)=>{y=y||br,b=b||br;const A=y.length,N=b.length,Q=Math.min(A,N);let J;for(J=0;J<Q;J++){const ee=b[J]=P?vs(b[J]):kn(b[J]);T(y[J],ee,M,null,W,q,ne,Z,P)}A>N?gt(y,W,q,!0,!1,Q):C(b,M,z,W,q,ne,Z,P,Q)},We=(y,b,M,z,W,q,ne,Z,P)=>{let A=0;const N=b.length;let Q=y.length-1,J=N-1;for(;A<=Q&&A<=J;){const ee=y[A],ie=b[A]=P?vs(b[A]):kn(b[A]);if(gi(ee,ie))T(ee,ie,M,null,W,q,ne,Z,P);else break;A++}for(;A<=Q&&A<=J;){const ee=y[Q],ie=b[J]=P?vs(b[J]):kn(b[J]);if(gi(ee,ie))T(ee,ie,M,null,W,q,ne,Z,P);else break;Q--,J--}if(A>Q){if(A<=J){const ee=J+1,ie=ee<N?b[ee].el:z;for(;A<=J;)T(null,b[A]=P?vs(b[A]):kn(b[A]),M,ie,W,q,ne,Z,P),A++}}else if(A>J)for(;A<=Q;)Re(y[A],W,q,!0),A++;else{const ee=A,ie=A,le=new Map;for(A=ie;A<=J;A++){const Le=b[A]=P?vs(b[A]):kn(b[A]);Le.key!=null&&le.set(Le.key,A)}let ce,ge=0;const Pe=J-ie+1;let Ye=!1,Je=0;const Ge=new Array(Pe);for(A=0;A<Pe;A++)Ge[A]=0;for(A=ee;A<=Q;A++){const Le=y[A];if(ge>=Pe){Re(Le,W,q,!0);continue}let ke;if(Le.key!=null)ke=le.get(Le.key);else for(ce=ie;ce<=J;ce++)if(Ge[ce-ie]===0&&gi(Le,b[ce])){ke=ce;break}ke===void 0?Re(Le,W,q,!0):(Ge[ke-ie]=A+1,ke>=Je?Je=ke:Ye=!0,T(Le,b[ke],M,null,W,q,ne,Z,P),ge++)}const Xe=Ye?i0(Ge):br;for(ce=Xe.length-1,A=Pe-1;A>=0;A--){const Le=ie+A,ke=b[Le],it=b[Le+1],xt=Le+1<N?it.el||it.placeholder:z;Ge[A]===0?T(null,ke,M,xt,W,q,ne,Z,P):Ye&&(ce<0||A!==Xe[ce]?pt(ke,M,xt,2):ce--)}}},pt=(y,b,M,z,W=null)=>{const{el:q,type:ne,transition:Z,children:P,shapeFlag:A}=y;if(A&6){pt(y.component.subTree,b,M,z);return}if(A&128){y.suspense.move(b,M,z);return}if(A&64){ne.move(y,b,M,he);return}if(ne===Ce){s(q,b,M);for(let Q=0;Q<P.length;Q++)pt(P[Q],b,M,z);s(y.anchor,b,M);return}if(ne===Bo){$(y,b,M);return}if(z!==2&&A&1&&Z)if(z===0)Z.beforeEnter(q),s(q,b,M),en(()=>Z.enter(q),W);else{const{leave:Q,delayLeave:J,afterLeave:ee}=Z,ie=()=>{y.ctx.isUnmounted?r(q):s(q,b,M)},le=()=>{q._isLeaving&&q[bA](!0),Q(q,()=>{ie(),ee&&ee()})};J?J(q,ie,le):le()}else s(q,b,M)},Re=(y,b,M,z=!1,W=!1)=>{const{type:q,props:ne,ref:Z,children:P,dynamicChildren:A,shapeFlag:N,patchFlag:Q,dirs:J,cacheIndex:ee}=y;if(Q===-2&&(W=!1),Z!=null&&(ts(),bi(Z,null,M,y,!0),ns()),ee!=null&&(b.renderCache[ee]=void 0),N&256){b.ctx.deactivate(y);return}const ie=N&1&&J,le=!Si(y);let ce;if(le&&(ce=ne&&ne.onVnodeBeforeUnmount)&&Sn(ce,b,y),N&6)Xt(y.component,M,z);else{if(N&128){y.suspense.unmount(M,z);return}ie&&Qs(y,null,b,"beforeUnmount"),N&64?y.type.remove(y,b,M,he,z):A&&!A.hasOnce&&(q!==Ce||Q>0&&Q&64)?gt(A,b,M,!1,!0):(q===Ce&&Q&384||!W&&N&16)&&gt(P,b,M),z&&rn(y)}(le&&(ce=ne&&ne.onVnodeUnmounted)||ie)&&en(()=>{ce&&Sn(ce,b,y),ie&&Qs(y,null,b,"unmounted")},M)},rn=y=>{const{type:b,el:M,anchor:z,transition:W}=y;if(b===Ce){Jt(M,z);return}if(b===Bo){G(y);return}const q=()=>{r(M),W&&!W.persisted&&W.afterLeave&&W.afterLeave()};if(y.shapeFlag&1&&W&&!W.persisted){const{leave:ne,delayLeave:Z}=W,P=()=>ne(M,q);Z?Z(y.el,q,P):P()}else q()},Jt=(y,b)=>{let M;for(;y!==b;)M=m(y),r(y),y=M;r(b)},Xt=(y,b,M)=>{const{bum:z,scope:W,job:q,subTree:ne,um:Z,m:P,a:A}=y;Dd(P),Dd(A),z&&Vo(z),W.stop(),q&&(q.flags|=8,Re(ne,y,b,M)),Z&&en(Z,b),en(()=>{y.isUnmounted=!0},b)},gt=(y,b,M,z=!1,W=!1,q=0)=>{for(let ne=q;ne<y.length;ne++)Re(y[ne],b,M,z,W)},K=y=>{if(y.shapeFlag&6)return K(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const b=m(y.anchor||y.el),M=b&&b[TA];return M?m(M):b};let oe=!1;const se=(y,b,M)=>{y==null?b._vnode&&Re(b._vnode,null,null,!0):T(b._vnode||null,y,b,null,null,null,M),b._vnode=y,oe||(oe=!0,Ed(),Ag(),oe=!1)},he={p:T,um:Re,m:pt,r:rn,mt:Oe,mc:C,pc:Te,pbc:D,n:K,o:t};return{render:se,hydrate:void 0,createApp:KA(se)}}function Rl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function zs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function r0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Bg(t,e,n=!1){const s=t.children,r=e.children;if(me(s)&&me(r))for(let i=0;i<s.length;i++){const o=s[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=vs(r[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Bg(o,l)),l.type===Ua&&l.patchFlag!==-1&&(l.el=o.el),l.type===Ds&&!l.el&&(l.el=o.el)}}function i0(t){const e=t.slice(),n=[0];let s,r,i,o,l;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Ug(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ug(e)}function Dd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const o0=Symbol.for("v-scx"),a0=()=>xn(o0);function Cs(t,e,n){return Fg(t,e,n)}function Fg(t,e,n=Qe){const{immediate:s,deep:r,flush:i,once:o}=n,l=Ut({},n),c=e&&s||!e&&i!=="post";let u;if(Gi){if(i==="sync"){const _=a0();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=Dn,_.resume=Dn,_.pause=Dn,_}}const f=Lt;l.call=(_,E,T)=>Un(_,f,E,T);let p=!1;i==="post"?l.scheduler=_=>{en(_,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(_,E)=>{E?_():Yc(_)}),l.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const m=yA(t,e,l);return Gi&&(u?u.push(m):c&&m()),m}function l0(t,e,n){const s=this.proxy,r=ht(t)?t.includes(".")?$g(s,t):()=>s[t]:t.bind(s,s);let i;Ee(e)?i=e:(i=e.handler,n=e);const o=io(this),l=Fg(r,i.bind(s),n);return o(),l}function $g(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const c0=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${dn(e)}Modifiers`]||t[`${cr(e)}Modifiers`];function u0(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Qe;let r=n;const i=e.startsWith("update:"),o=i&&c0(s,e.slice(7));o&&(o.trim&&(r=n.map(f=>ht(f)?f.trim():f)),o.number&&(r=n.map(Jo)));let l,c=s[l=wl(e)]||s[l=wl(dn(e))];!c&&i&&(c=s[l=wl(cr(e))]),c&&Un(c,t,6,r);const u=s[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Un(u,t,6,r)}}const h0=new WeakMap;function Hg(t,e,n=!1){const s=n?h0:e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},l=!1;if(!Ee(t)){const c=u=>{const f=Hg(u,e,!0);f&&(l=!0,Ut(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(ze(t)&&s.set(t,null),null):(me(i)?i.forEach(c=>o[c]=null):Ut(o,i),ze(t)&&s.set(t,o),o)}function Ba(t,e){return!t||!Da(e)?!1:(e=e.slice(2).replace(/Once$/,""),$e(t,e[0].toLowerCase()+e.slice(1))||$e(t,cr(e))||$e(t,e))}function xd(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:f,props:p,data:m,setupState:_,ctx:E,inheritAttrs:T}=t,I=ta(t);let x,F;try{if(n.shapeFlag&4){const G=r||s,re=G;x=kn(u.call(re,G,f,p,_,m,E)),F=l}else{const G=e;x=kn(G.length>1?G(p,{attrs:l,slots:o,emit:c}):G(p,null)),F=e.props?l:d0(l)}}catch(G){Pi.length=0,Va(G,t,1),x=Ae(Ds)}let $=x;if(F&&T!==!1){const G=Object.keys(F),{shapeFlag:re}=$;G.length&&re&7&&(i&&G.some(Bc)&&(F=f0(F,i)),$=Vr($,F,!1,!0))}return n.dirs&&($=Vr($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&Jc($,n.transition),x=$,ta(I),x}const d0=t=>{let e;for(const n in t)(n==="class"||n==="style"||Da(n))&&((e||(e={}))[n]=t[n]);return e},f0=(t,e)=>{const n={};for(const s in t)(!Bc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function p0(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Nd(s,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(o[m]!==s[m]&&!Ba(u,m))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Nd(s,o,u):!0:!!o;return!1}function Nd(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Ba(n,i))return!0}return!1}function g0({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const jg=t=>t.__isSuspense;function m0(t,e){e&&e.pendingBranch?me(t)?e.effects.push(...t):e.effects.push(t):wA(t)}const Ce=Symbol.for("v-fgt"),Ua=Symbol.for("v-txt"),Ds=Symbol.for("v-cmt"),Bo=Symbol.for("v-stc"),Pi=[];let nn=null;function L(t=!1){Pi.push(nn=t?null:[])}function _0(){Pi.pop(),nn=Pi[Pi.length-1]||null}let Hi=1;function ra(t,e=!1){Hi+=t,t<0&&nn&&e&&(nn.hasOnce=!0)}function Gg(t){return t.dynamicChildren=Hi>0?nn||br:null,_0(),Hi>0&&nn&&nn.push(t),t}function U(t,e,n,s,r,i){return Gg(h(t,e,n,s,r,i,!0))}function qg(t,e,n,s,r){return Gg(Ae(t,e,n,s,r,!0))}function ia(t){return t?t.__v_isVNode===!0:!1}function gi(t,e){return t.type===e.type&&t.key===e.key}const Qg=({key:t})=>t??null,Uo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ht(t)||Bt(t)||Ee(t)?{i:tn,r:t,k:e,f:!!n}:t:null);function h(t,e=null,n=null,s=0,r=null,i=t===Ce?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Qg(e),ref:e&&Uo(e),scopeId:wg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:tn};return l?(eu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ht(n)?8:16),Hi>0&&!o&&nn&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&nn.push(c),c}const Ae=v0;function v0(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===FA)&&(t=Ds),ia(t)){const l=Vr(t,e,!0);return n&&eu(l,n),Hi>0&&!i&&nn&&(l.shapeFlag&6?nn[nn.indexOf(t)]=l:nn.push(l)),l.patchFlag=-2,l}if(k0(t)&&(t=t.__vccOpts),e){e=y0(e);let{class:l,style:c}=e;l&&!ht(l)&&(e.class=be(l)),ze(c)&&(Wc(c)&&!me(c)&&(c=Ut({},c)),e.style=yt(c))}const o=ht(t)?1:jg(t)?128:CA(t)?64:ze(t)?4:Ee(t)?2:0;return h(t,e,n,s,r,o,i,!0)}function y0(t){return t?Wc(t)||xg(t)?Ut({},t):t:null}function Vr(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?A0(r||{},e):r,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Qg(u),ref:e&&e.ref?n&&i?me(i)?i.concat(Uo(e)):[i,Uo(e)]:Uo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ce?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Vr(t.ssContent),ssFallback:t.ssFallback&&Vr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&Jc(f,c.clone(f)),f}function ji(t=" ",e=0){return Ae(Ua,null,t,e)}function zg(t,e){const n=Ae(Bo,null,t);return n.staticCount=e,n}function ue(t="",e=!1){return e?(L(),qg(Ds,null,t)):Ae(Ds,null,t)}function kn(t){return t==null||typeof t=="boolean"?Ae(Ds):me(t)?Ae(Ce,null,t.slice()):ia(t)?vs(t):Ae(Ua,null,String(t))}function vs(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Vr(t)}function eu(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(me(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),eu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!xg(e)?e._ctx=tn:r===3&&tn&&(tn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ee(e)?(e={default:e,_ctx:tn},n=32):(e=String(e),s&64?(n=16,e=[ji(e)]):n=8);t.children=e,t.shapeFlag|=n}function A0(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=be([e.class,s.class]));else if(r==="style")e.style=yt([e.style,s.style]);else if(Da(r)){const i=e[r],o=s[r];o&&i!==o&&!(me(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Sn(t,e,n,s=null){Un(t,e,7,[n,s])}const I0=Pg();let w0=0;function E0(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||I0,i={uid:w0++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Qy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mg(s,r),emitsOptions:Hg(s,r),emit:null,emitted:null,propsDefaults:Qe,inheritAttrs:s.inheritAttrs,ctx:Qe,data:Qe,props:Qe,attrs:Qe,slots:Qe,refs:Qe,setupState:Qe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=u0.bind(null,i),t.ce&&t.ce(i),i}let Lt=null;const T0=()=>Lt||tn;let oa,ic;{const t=Ma(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};oa=e("__VUE_INSTANCE_SETTERS__",n=>Lt=n),ic=e("__VUE_SSR_SETTERS__",n=>Gi=n)}const io=t=>{const e=Lt;return oa(t),t.scope.on(),()=>{t.scope.off(),oa(e)}},Md=()=>{Lt&&Lt.scope.off(),oa(null)};function Wg(t){return t.vnode.shapeFlag&4}let Gi=!1;function C0(t,e=!1,n=!1){e&&ic(e);const{props:s,children:r}=t.vnode,i=Wg(t);YA(t,s,i,e),e0(t,r,n||e);const o=i?b0(t,e):void 0;return e&&ic(!1),o}function b0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,HA);const{setup:s}=n;if(s){ts();const r=t.setupContext=s.length>1?R0(t):null,i=io(t),o=ro(s,t,0,[t.props,r]),l=Wp(o);if(ns(),i(),(l||t.sp)&&!Si(t)&&Tg(t),l){if(o.then(Md,Md),e)return o.then(c=>{Od(t,c)}).catch(c=>{Va(c,t,0)});t.asyncDep=o}else Od(t,o)}else Kg(t)}function Od(t,e,n){Ee(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ze(e)&&(t.setupState=_g(e)),Kg(t)}function Kg(t,e,n){const s=t.type;t.render||(t.render=s.render||Dn);{const r=io(t);ts();try{jA(t)}finally{ns(),r()}}}const S0={get(t,e){return Ot(t,"get",""),t[e]}};function R0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,S0),slots:t.slots,emit:t.emit,expose:e}}function Fa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(_g(dA(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ri)return Ri[n](t)},has(e,n){return n in e||n in Ri}})):t.proxy}function P0(t,e=!0){return Ee(t)?t.displayName||t.name:t.name||e&&t.__name}function k0(t){return Ee(t)&&"__vccOpts"in t}const je=(t,e)=>_A(t,e,Gi);function Yg(t,e,n){try{ra(-1);const s=arguments.length;return s===2?ze(e)&&!me(e)?ia(e)?Ae(t,null,[e]):Ae(t,e):Ae(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ia(n)&&(n=[n]),Ae(t,e,n))}finally{ra(1)}}const D0="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let oc;const Vd=typeof window<"u"&&window.trustedTypes;if(Vd)try{oc=Vd.createPolicy("vue",{createHTML:t=>t})}catch{}const Jg=oc?t=>oc.createHTML(t):t=>t,x0="http://www.w3.org/2000/svg",N0="http://www.w3.org/1998/Math/MathML",Qn=typeof document<"u"?document:null,Ld=Qn&&Qn.createElement("template"),M0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?Qn.createElementNS(x0,t):e==="mathml"?Qn.createElementNS(N0,t):n?Qn.createElement(t,{is:n}):Qn.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Qn.createTextNode(t),createComment:t=>Qn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Qn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Ld.innerHTML=Jg(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=Ld.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},O0=Symbol("_vtc");function V0(t,e,n){const s=t[O0];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const aa=Symbol("_vod"),Xg=Symbol("_vsh"),Zg={name:"show",beforeMount(t,{value:e},{transition:n}){t[aa]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):mi(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),mi(t,!0),s.enter(t)):s.leave(t,()=>{mi(t,!1)}):mi(t,e))},beforeUnmount(t,{value:e}){mi(t,e)}};function mi(t,e){t.style.display=e?t[aa]:"none",t[Xg]=!e}const L0=Symbol(""),B0=/(?:^|;)\s*display\s*:/;function U0(t,e,n){const s=t.style,r=ht(n);let i=!1;if(n&&!r){if(e)if(ht(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Fo(s,l,"")}else for(const o in e)n[o]==null&&Fo(s,o,"");for(const o in n)o==="display"&&(i=!0),Fo(s,o,n[o])}else if(r){if(e!==n){const o=s[L0];o&&(n+=";"+o),s.cssText=n,i=B0.test(n)}}else e&&t.removeAttribute("style");aa in t&&(t[aa]=i?s.display:"",t[Xg]&&(s.display="none"))}const Bd=/\s*!important$/;function Fo(t,e,n){if(me(n))n.forEach(s=>Fo(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=F0(t,e);Bd.test(n)?t.setProperty(cr(s),n.replace(Bd,""),"important"):t[s]=n}}const Ud=["Webkit","Moz","ms"],Pl={};function F0(t,e){const n=Pl[e];if(n)return n;let s=dn(e);if(s!=="filter"&&s in t)return Pl[e]=s;s=Na(s);for(let r=0;r<Ud.length;r++){const i=Ud[r]+s;if(i in t)return Pl[e]=i}return e}const Fd="http://www.w3.org/1999/xlink";function $d(t,e,n,s,r,i=Gy(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Fd,e.slice(6,e.length)):t.setAttributeNS(Fd,e,n):n==null||i&&!Xp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Bn(n)?String(n):n)}function Hd(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Jg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Xp(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function Kn(t,e,n,s){t.addEventListener(e,n,s)}function $0(t,e,n,s){t.removeEventListener(e,n,s)}const jd=Symbol("_vei");function H0(t,e,n,s,r=null){const i=t[jd]||(t[jd]={}),o=i[e];if(s&&o)o.value=s;else{const[l,c]=j0(e);if(s){const u=i[e]=Q0(s,r);Kn(t,l,u,c)}else o&&($0(t,l,o,c),i[e]=void 0)}}const Gd=/(?:Once|Passive|Capture)$/;function j0(t){let e;if(Gd.test(t)){e={};let s;for(;s=t.match(Gd);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):cr(t.slice(2)),e]}let kl=0;const G0=Promise.resolve(),q0=()=>kl||(G0.then(()=>kl=0),kl=Date.now());function Q0(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Un(z0(s,n.value),e,5,[s])};return n.value=t,n.attached=q0(),n}function z0(t,e){if(me(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const qd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,W0=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?V0(t,s,o):e==="style"?U0(t,n,s):Da(e)?Bc(e)||H0(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):K0(t,e,s,o))?(Hd(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&$d(t,e,s,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ht(s))?Hd(t,dn(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),$d(t,e,s,o))};function K0(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&qd(e)&&Ee(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return qd(e)&&ht(n)?!1:e in t}const xs=t=>{const e=t.props["onUpdate:modelValue"]||!1;return me(e)?n=>Vo(e,n):e};function Y0(t){t.target.composing=!0}function Qd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const un=Symbol("_assign"),Zn={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[un]=xs(r);const i=s||r.props&&r.props.type==="number";Kn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=Jo(l)),t[un](l)}),n&&Kn(t,"change",()=>{t.value=t.value.trim()}),e||(Kn(t,"compositionstart",Y0),Kn(t,"compositionend",Qd),Kn(t,"change",Qd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[un]=xs(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Jo(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===c)||(t.value=c))}},J0={deep:!0,created(t,e,n){t[un]=xs(n),Kn(t,"change",()=>{const s=t._modelValue,r=Lr(t),i=t.checked,o=t[un];if(me(s)){const l=$c(s,r),c=l!==-1;if(i&&!c)o(s.concat(r));else if(!i&&c){const u=[...s];u.splice(l,1),o(u)}}else if(zr(s)){const l=new Set(s);i?l.add(r):l.delete(r),o(l)}else o(em(t,i))})},mounted:zd,beforeUpdate(t,e,n){t[un]=xs(n),zd(t,e,n)}};function zd(t,{value:e,oldValue:n},s){t._modelValue=e;let r;if(me(e))r=$c(e,s.props.value)>-1;else if(zr(e))r=e.has(s.props.value);else{if(e===n)return;r=sr(e,em(t,!0))}t.checked!==r&&(t.checked=r)}const X0={created(t,{value:e},n){t.checked=sr(e,n.props.value),t[un]=xs(n),Kn(t,"change",()=>{t[un](Lr(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t[un]=xs(s),e!==n&&(t.checked=sr(e,s.props.value))}},Z0={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=zr(e);Kn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Jo(Lr(o)):Lr(o));t[un](t.multiple?r?new Set(i):i:i[0]),t._assigning=!0,Kc(()=>{t._assigning=!1})}),t[un]=xs(s)},mounted(t,{value:e}){Wd(t,e)},beforeUpdate(t,e,n){t[un]=xs(n)},updated(t,{value:e}){t._assigning||Wd(t,e)}};function Wd(t,e){const n=t.multiple,s=me(e);if(!(n&&!s&&!zr(e))){for(let r=0,i=t.options.length;r<i;r++){const o=t.options[r],l=Lr(o);if(n)if(s){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=$c(e,l)>-1}else o.selected=e.has(l);else if(sr(Lr(o),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Lr(t){return"_value"in t?t._value:t.value}function em(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const tm={created(t,e,n){Po(t,e,n,null,"created")},mounted(t,e,n){Po(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){Po(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){Po(t,e,n,s,"updated")}};function eI(t,e){switch(t){case"SELECT":return Z0;case"TEXTAREA":return Zn;default:switch(e){case"checkbox":return J0;case"radio":return X0;default:return Zn}}}function Po(t,e,n,s,r){const o=eI(t.tagName,n.props&&n.props.type)[r];o&&o(t,e,n,s)}const tI=["ctrl","shift","alt","meta"],nI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>tI.some(n=>t[`${n}Key`]&&!e.includes(n))},ki=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=((r,...i)=>{for(let o=0;o<e.length;o++){const l=nI[e[o]];if(l&&l(r,e))return}return t(r,...i)}))},sI=Ut({patchProp:W0},M0);let Kd;function rI(){return Kd||(Kd=n0(sI))}const iI=((...t)=>{const e=rI().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=aI(s);if(!r)return;const i=e._component;!Ee(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,oI(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function oI(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function aI(t){return ht(t)?document.querySelector(t):t}/*!
 * vue-router v4.6.0
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Ir=typeof document<"u";function nm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function lI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&nm(t.default)}const Ue=Object.assign;function Dl(t,e){const n={};for(const s in e){const r=e[s];n[s]=In(r)?r.map(t):t(r)}return n}const Di=()=>{},In=Array.isArray;function Yd(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}const sm=/#/g,cI=/&/g,uI=/\//g,hI=/=/g,dI=/\?/g,rm=/\+/g,fI=/%5B/g,pI=/%5D/g,im=/%5E/g,gI=/%60/g,om=/%7B/g,mI=/%7C/g,am=/%7D/g,_I=/%20/g;function tu(t){return t==null?"":encodeURI(""+t).replace(mI,"|").replace(fI,"[").replace(pI,"]")}function vI(t){return tu(t).replace(om,"{").replace(am,"}").replace(im,"^")}function ac(t){return tu(t).replace(rm,"%2B").replace(_I,"+").replace(sm,"%23").replace(cI,"%26").replace(gI,"`").replace(om,"{").replace(am,"}").replace(im,"^")}function yI(t){return ac(t).replace(hI,"%3D")}function AI(t){return tu(t).replace(sm,"%23").replace(dI,"%3F")}function II(t){return AI(t).replace(uI,"%2F")}function qi(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const wI=/\/$/,EI=t=>t.replace(wI,"");function xl(t,e,n="/"){let s,r={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return c=l>=0&&c>l?-1:c,c>=0&&(s=e.slice(0,c),i=e.slice(c,l>0?l:e.length),r=t(i)),l>=0&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=SI(s??e,n),{fullPath:s+i+o,path:s,query:r,hash:qi(o)}}function TI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Jd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function CI(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Br(e.matched[s],n.matched[r])&&lm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Br(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function lm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!bI(t[n],e[n]))return!1;return!0}function bI(t,e){return In(t)?Xd(t,e):In(e)?Xd(e,t):t===e}function Xd(t,e){return In(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function SI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const gs={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let lc=(function(t){return t.pop="pop",t.push="push",t})({}),Nl=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function RI(t){if(!t)if(Ir){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),EI(t)}const PI=/^[^#]+#/;function kI(t,e){return t.replace(PI,"#")+e}function DI(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const $a=()=>({left:window.scrollX,top:window.scrollY});function xI(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=DI(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Zd(t,e){return(history.state?history.state.position-e:-1)+t}const cc=new Map;function NI(t,e){cc.set(t,e)}function MI(t){const e=cc.get(t);return cc.delete(t),e}function OI(t){return typeof t=="string"||t&&typeof t=="object"}function cm(t){return typeof t=="string"||typeof t=="symbol"}let at=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const um=Symbol("");at.MATCHER_NOT_FOUND+"",at.NAVIGATION_GUARD_REDIRECT+"",at.NAVIGATION_ABORTED+"",at.NAVIGATION_CANCELLED+"",at.NAVIGATION_DUPLICATED+"";function Ur(t,e){return Ue(new Error,{type:t,[um]:!0},e)}function qn(t,e){return t instanceof Error&&um in t&&(e==null||!!(t.type&e))}const VI=["params","query","hash"];function LI(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of VI)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function BI(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<n.length;++s){const r=n[s].replace(rm," "),i=r.indexOf("="),o=qi(i<0?r:r.slice(0,i)),l=i<0?null:qi(r.slice(i+1));if(o in e){let c=e[o];In(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function ef(t){let e="";for(let n in t){const s=t[n];if(n=yI(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(In(s)?s.map(r=>r&&ac(r)):[s&&ac(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function UI(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=In(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const FI=Symbol(""),tf=Symbol(""),Ha=Symbol(""),hm=Symbol(""),uc=Symbol("");function _i(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ys(t,e,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(Ur(at.NAVIGATION_ABORTED,{from:n,to:e})):m instanceof Error?c(m):OI(m)?c(Ur(at.NAVIGATION_GUARD_REDIRECT,{from:e,to:m})):(o&&s.enterCallbacks[r]===o&&typeof m=="function"&&o.push(m),l())},f=i(()=>t.call(s&&s.instances[r],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(m=>c(m))})}function Ml(t,e,n,s,r=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(nm(c)){const u=(c.__vccOpts||c)[e];u&&i.push(ys(u,n,s,o,l,r))}else{let u=c();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=lI(f)?f.default:f;o.mods[l]=f,o.components[l]=p;const m=(p.__vccOpts||p)[e];return m&&ys(m,n,s,o,l,r)()}))}}return i}function $I(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>Br(u,l))?s.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>Br(u,c))||r.push(c))}return[n,s,r]}/*!
 * vue-router v4.6.0
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let HI=()=>location.protocol+"//"+location.host;function dm(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let o=r.includes(t.slice(i))?t.slice(i).length:1,l=r.slice(o);return l[0]!=="/"&&(l="/"+l),Jd(l,"")}return Jd(n,t)+s+r}function jI(t,e,n,s){let r=[],i=[],o=null;const l=({state:m})=>{const _=dm(t,location),E=n.value,T=e.value;let I=0;if(m){if(n.value=_,e.value=m,o&&o===E){o=null;return}I=T?m.position-T.position:0}else s(_);r.forEach(x=>{x(n.value,E,{delta:I,type:lc.pop,direction:I?I>0?Nl.forward:Nl.back:Nl.unknown})})};function c(){o=n.value}function u(m){r.push(m);const _=()=>{const E=r.indexOf(m);E>-1&&r.splice(E,1)};return i.push(_),_}function f(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(Ue({},m.state,{scroll:$a()}),"")}}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:c,listen:u,destroy:p}}function nf(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?$a():null}}function GI(t){const{history:e,location:n}=window,s={value:dm(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:HI()+t+c;try{e[f?"replaceState":"pushState"](u,"",m),r.value=u}catch(_){console.error(_),n[f?"replace":"assign"](m)}}function o(c,u){i(c,Ue({},e.state,nf(r.value.back,c,r.value.forward,!0),u,{position:r.value.position}),!0),s.value=c}function l(c,u){const f=Ue({},r.value,e.state,{forward:c,scroll:$a()});i(f.current,f,!0),i(c,Ue({},nf(s.value,c,null),{position:f.position+1},u),!1),s.value=c}return{location:s,state:r,push:l,replace:o}}function qI(t){t=RI(t);const e=GI(t),n=jI(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=Ue({location:"",base:t,go:s,createHref:kI.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function QI(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),qI(t)}let Ys=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var vt=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(vt||{});const zI={type:Ys.Static,value:""},WI=/[a-zA-Z0-9_]/;function KI(t){if(!t)return[[]];if(t==="/")return[[zI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=vt.Static,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let l=0,c,u="",f="";function p(){u&&(n===vt.Static?i.push({type:Ys.Static,value:u}):n===vt.Param||n===vt.ParamRegExp||n===vt.ParamRegExpEnd?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Ys.Param,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==vt.ParamRegExp){s=n,n=vt.EscapeNext;continue}switch(n){case vt.Static:c==="/"?(u&&p(),o()):c===":"?(p(),n=vt.Param):m();break;case vt.EscapeNext:m(),n=s;break;case vt.Param:c==="("?n=vt.ParamRegExp:WI.test(c)?m():(p(),n=vt.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case vt.ParamRegExp:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=vt.ParamRegExpEnd:f+=c;break;case vt.ParamRegExpEnd:p(),n=vt.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===vt.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),r}const sf="[^/]+?",YI={sensitive:!1,strict:!1,start:!0,end:!0};var Ht=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(Ht||{});const JI=/[.+*?^${}()[\]/\\]/g;function XI(t,e){const n=Ue({},YI,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[Ht.Root];n.strict&&!u.length&&(r+="/");for(let p=0;p<u.length;p++){const m=u[p];let _=Ht.Segment+(n.sensitive?Ht.BonusCaseSensitive:0);if(m.type===Ys.Static)p||(r+="/"),r+=m.value.replace(JI,"\\$&"),_+=Ht.Static;else if(m.type===Ys.Param){const{value:E,repeatable:T,optional:I,regexp:x}=m;i.push({name:E,repeatable:T,optional:I});const F=x||sf;if(F!==sf){_+=Ht.BonusCustomRegExp;try{`${F}`}catch(G){throw new Error(`Invalid custom RegExp for param "${E}" (${F}): `+G.message)}}let $=T?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;p||($=I&&u.length<2?`(?:/${$})`:"/"+$),I&&($+="?"),r+=$,_+=Ht.Dynamic,I&&(_+=Ht.BonusOptional),T&&(_+=Ht.BonusRepeatable),F===".*"&&(_+=Ht.BonusWildcard)}f.push(_)}s.push(f)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=Ht.BonusStrict}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function l(u){const f=u.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const _=f[m]||"",E=i[m-1];p[E.name]=_&&E.repeatable?_.split("/"):_}return p}function c(u){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const _ of m)if(_.type===Ys.Static)f+=_.value;else if(_.type===Ys.Param){const{value:E,repeatable:T,optional:I}=_,x=E in u?u[E]:"";if(In(x)&&!T)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const F=In(x)?x.join("/"):x;if(!F)if(I)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${E}"`);f+=F}}return f||"/"}return{re:o,score:s,keys:i,parse:l,stringify:c}}function ZI(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===Ht.Static+Ht.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Ht.Static+Ht.Segment?1:-1:0}function fm(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=ZI(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(rf(s))return 1;if(rf(r))return-1}return r.length-s.length}function rf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const ew={strict:!1,end:!0,sensitive:!1};function tw(t,e,n){const s=XI(KI(t.path),n),r=Ue(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function nw(t,e){const n=[],s=new Map;e=Yd(ew,e);function r(p){return s.get(p)}function i(p,m,_){const E=!_,T=af(p);T.aliasOf=_&&_.record;const I=Yd(e,p),x=[T];if("alias"in p){const G=typeof p.alias=="string"?[p.alias]:p.alias;for(const re of G)x.push(af(Ue({},T,{components:_?_.record.components:T.components,path:re,aliasOf:_?_.record:T})))}let F,$;for(const G of x){const{path:re}=G;if(m&&re[0]!=="/"){const we=m.record.path,R=we[we.length-1]==="/"?"":"/";G.path=m.record.path+(re&&R+re)}if(F=tw(G,m,I),_?_.alias.push(F):($=$||F,$!==F&&$.alias.push(F),E&&p.name&&!lf(F)&&o(p.name)),pm(F)&&c(F),T.children){const we=T.children;for(let R=0;R<we.length;R++)i(we[R],F,_&&_.children[R])}_=_||F}return $?()=>{o($)}:Di}function o(p){if(cm(p)){const m=s.get(p);m&&(s.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&s.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const m=iw(p,n);n.splice(m,0,p),p.record.name&&!lf(p)&&s.set(p.record.name,p)}function u(p,m){let _,E={},T,I;if("name"in p&&p.name){if(_=s.get(p.name),!_)throw Ur(at.MATCHER_NOT_FOUND,{location:p});I=_.record.name,E=Ue(of(m.params,_.keys.filter($=>!$.optional).concat(_.parent?_.parent.keys.filter($=>$.optional):[]).map($=>$.name)),p.params&&of(p.params,_.keys.map($=>$.name))),T=_.stringify(E)}else if(p.path!=null)T=p.path,_=n.find($=>$.re.test(T)),_&&(E=_.parse(T),I=_.record.name);else{if(_=m.name?s.get(m.name):n.find($=>$.re.test(m.path)),!_)throw Ur(at.MATCHER_NOT_FOUND,{location:p,currentLocation:m});I=_.record.name,E=Ue({},m.params,p.params),T=_.stringify(E)}const x=[];let F=_;for(;F;)x.unshift(F.record),F=F.parent;return{name:I,path:T,params:E,matched:x,meta:rw(x)}}t.forEach(p=>i(p));function f(){n.length=0,s.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:l,getRecordMatcher:r}}function of(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function af(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:sw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function sw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function lf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function rw(t){return t.reduce((e,n)=>Ue(e,n.meta),{})}function iw(t,e){let n=0,s=e.length;for(;n!==s;){const i=n+s>>1;fm(t,e[i])<0?s=i:n=i+1}const r=ow(t);return r&&(s=e.lastIndexOf(r,s-1)),s}function ow(t){let e=t;for(;e=e.parent;)if(pm(e)&&fm(t,e)===0)return e}function pm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function cf(t){const e=xn(Ha),n=xn(hm),s=je(()=>{const c=Pt(t.to);return e.resolve(c)}),r=je(()=>{const{matched:c}=s.value,{length:u}=c,f=c[u-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(Br.bind(null,f));if(m>-1)return m;const _=uf(c[u-2]);return u>1&&uf(f)===_&&p[p.length-1].path!==_?p.findIndex(Br.bind(null,c[u-2])):m}),i=je(()=>r.value>-1&&hw(n.params,s.value.params)),o=je(()=>r.value>-1&&r.value===n.matched.length-1&&lm(n.params,s.value.params));function l(c={}){if(uw(c)){const u=e[Pt(t.replace)?"replace":"push"](Pt(t.to)).catch(Di);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:je(()=>s.value.href),isActive:i,isExactActive:o,navigate:l}}function aw(t){return t.length===1?t[0]:t}const lw=Eg({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:cf,setup(t,{slots:e}){const n=so(cf(t)),{options:s}=xn(Ha),r=je(()=>({[hf(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[hf(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&aw(e.default(n));return t.custom?i:Yg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),cw=lw;function uw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function hw(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!In(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function uf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const hf=(t,e,n)=>t??e??n,dw=Eg({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=xn(uc),r=je(()=>t.route||s.value),i=xn(tf,0),o=je(()=>{let u=Pt(i);const{matched:f}=r.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),l=je(()=>r.value.matched[o.value]);Lo(tf,je(()=>o.value+1)),Lo(FI,l),Lo(uc,r);const c=V();return Cs(()=>[c.value,l.value,t.name],([u,f,p],[m,_,E])=>{f&&(f.instances[p]=u,_&&_!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),u&&f&&(!_||!Br(f,_)||!m)&&(f.enterCallbacks[p]||[]).forEach(T=>T(u))},{flush:"post"}),()=>{const u=r.value,f=t.name,p=l.value,m=p&&p.components[f];if(!m)return df(n.default,{Component:m,route:u});const _=p.props[f],E=_?_===!0?u.params:typeof _=="function"?_(u):_:null,I=Yg(m,Ue({},E,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(p.instances[f]=null)},ref:c}));return df(n.default,{Component:I,route:u})||I}}});function df(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const fw=dw;function pw(t){const e=nw(t.routes,t),n=t.parseQuery||BI,s=t.stringifyQuery||ef,r=t.history,i=_i(),o=_i(),l=_i(),c=fA(gs);let u=gs;Ir&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Dl.bind(null,K=>""+K),p=Dl.bind(null,II),m=Dl.bind(null,qi);function _(K,oe){let se,he;return cm(K)?(se=e.getRecordMatcher(K),he=oe):he=K,e.addRoute(he,se)}function E(K){const oe=e.getRecordMatcher(K);oe&&e.removeRoute(oe)}function T(){return e.getRoutes().map(K=>K.record)}function I(K){return!!e.getRecordMatcher(K)}function x(K,oe){if(oe=Ue({},oe||c.value),typeof K=="string"){const M=xl(n,K,oe.path),z=e.resolve({path:M.path},oe),W=r.createHref(M.fullPath);return Ue(M,z,{params:m(z.params),hash:qi(M.hash),redirectedFrom:void 0,href:W})}let se;if(K.path!=null)se=Ue({},K,{path:xl(n,K.path,oe.path).path});else{const M=Ue({},K.params);for(const z in M)M[z]==null&&delete M[z];se=Ue({},K,{params:p(M)}),oe.params=p(oe.params)}const he=e.resolve(se,oe),fe=K.hash||"";he.params=f(m(he.params));const y=TI(s,Ue({},K,{hash:vI(fe),path:he.path})),b=r.createHref(y);return Ue({fullPath:y,hash:fe,query:s===ef?UI(K.query):K.query||{}},he,{redirectedFrom:void 0,href:b})}function F(K){return typeof K=="string"?xl(n,K,c.value.path):Ue({},K)}function $(K,oe){if(u!==K)return Ur(at.NAVIGATION_CANCELLED,{from:oe,to:K})}function G(K){return R(K)}function re(K){return G(Ue(F(K),{replace:!0}))}function we(K,oe){const se=K.matched[K.matched.length-1];if(se&&se.redirect){const{redirect:he}=se;let fe=typeof he=="function"?he(K,oe):he;return typeof fe=="string"&&(fe=fe.includes("?")||fe.includes("#")?fe=F(fe):{path:fe},fe.params={}),Ue({query:K.query,hash:K.hash,params:fe.path!=null?{}:K.params},fe)}}function R(K,oe){const se=u=x(K),he=c.value,fe=K.state,y=K.force,b=K.replace===!0,M=we(se,he);if(M)return R(Ue(F(M),{state:typeof M=="object"?Ue({},fe,M.state):fe,force:y,replace:b}),oe||se);const z=se;z.redirectedFrom=oe;let W;return!y&&CI(s,he,se)&&(W=Ur(at.NAVIGATION_DUPLICATED,{to:z,from:he}),pt(he,he,!0,!1)),(W?Promise.resolve(W):D(z,he)).catch(q=>qn(q)?qn(q,at.NAVIGATION_GUARD_REDIRECT)?q:We(q):Te(q,z,he)).then(q=>{if(q){if(qn(q,at.NAVIGATION_GUARD_REDIRECT))return R(Ue({replace:b},F(q.to),{state:typeof q.to=="object"?Ue({},fe,q.to.state):fe,force:y}),oe||z)}else q=O(z,he,!0,b,fe);return k(z,he,q),q})}function C(K,oe){const se=$(K,oe);return se?Promise.reject(se):Promise.resolve()}function S(K){const oe=Jt.values().next().value;return oe&&typeof oe.runWithContext=="function"?oe.runWithContext(K):K()}function D(K,oe){let se;const[he,fe,y]=$I(K,oe);se=Ml(he.reverse(),"beforeRouteLeave",K,oe);for(const M of he)M.leaveGuards.forEach(z=>{se.push(ys(z,K,oe))});const b=C.bind(null,K,oe);return se.push(b),gt(se).then(()=>{se=[];for(const M of i.list())se.push(ys(M,K,oe));return se.push(b),gt(se)}).then(()=>{se=Ml(fe,"beforeRouteUpdate",K,oe);for(const M of fe)M.updateGuards.forEach(z=>{se.push(ys(z,K,oe))});return se.push(b),gt(se)}).then(()=>{se=[];for(const M of y)if(M.beforeEnter)if(In(M.beforeEnter))for(const z of M.beforeEnter)se.push(ys(z,K,oe));else se.push(ys(M.beforeEnter,K,oe));return se.push(b),gt(se)}).then(()=>(K.matched.forEach(M=>M.enterCallbacks={}),se=Ml(y,"beforeRouteEnter",K,oe,S),se.push(b),gt(se))).then(()=>{se=[];for(const M of o.list())se.push(ys(M,K,oe));return se.push(b),gt(se)}).catch(M=>qn(M,at.NAVIGATION_CANCELLED)?M:Promise.reject(M))}function k(K,oe,se){l.list().forEach(he=>S(()=>he(K,oe,se)))}function O(K,oe,se,he,fe){const y=$(K,oe);if(y)return y;const b=oe===gs,M=Ir?history.state:{};se&&(he||b?r.replace(K.fullPath,Ue({scroll:b&&M&&M.scroll},fe)):r.push(K.fullPath,fe)),c.value=K,pt(K,oe,se,b),We()}let w;function Oe(){w||(w=r.listen((K,oe,se)=>{if(!Xt.listening)return;const he=x(K),fe=we(he,Xt.currentRoute.value);if(fe){R(Ue(fe,{replace:!0,force:!0}),he).catch(Di);return}u=he;const y=c.value;Ir&&NI(Zd(y.fullPath,se.delta),$a()),D(he,y).catch(b=>qn(b,at.NAVIGATION_ABORTED|at.NAVIGATION_CANCELLED)?b:qn(b,at.NAVIGATION_GUARD_REDIRECT)?(R(Ue(F(b.to),{force:!0}),he).then(M=>{qn(M,at.NAVIGATION_ABORTED|at.NAVIGATION_DUPLICATED)&&!se.delta&&se.type===lc.pop&&r.go(-1,!1)}).catch(Di),Promise.reject()):(se.delta&&r.go(-se.delta,!1),Te(b,he,y))).then(b=>{b=b||O(he,y,!1),b&&(se.delta&&!qn(b,at.NAVIGATION_CANCELLED)?r.go(-se.delta,!1):se.type===lc.pop&&qn(b,at.NAVIGATION_ABORTED|at.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),k(he,y,b)}).catch(Di)}))}let Ct=_i(),rt=_i(),Ve;function Te(K,oe,se){We(K);const he=rt.list();return he.length?he.forEach(fe=>fe(K,oe,se)):console.error(K),Promise.reject(K)}function Dt(){return Ve&&c.value!==gs?Promise.resolve():new Promise((K,oe)=>{Ct.add([K,oe])})}function We(K){return Ve||(Ve=!K,Oe(),Ct.list().forEach(([oe,se])=>K?se(K):oe()),Ct.reset()),K}function pt(K,oe,se,he){const{scrollBehavior:fe}=t;if(!Ir||!fe)return Promise.resolve();const y=!se&&MI(Zd(K.fullPath,0))||(he||!se)&&history.state&&history.state.scroll||null;return Kc().then(()=>fe(K,oe,y)).then(b=>b&&xI(b)).catch(b=>Te(b,K,oe))}const Re=K=>r.go(K);let rn;const Jt=new Set,Xt={currentRoute:c,listening:!0,addRoute:_,removeRoute:E,clearRoutes:e.clearRoutes,hasRoute:I,getRoutes:T,resolve:x,options:t,push:G,replace:re,go:Re,back:()=>Re(-1),forward:()=>Re(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:rt.add,isReady:Dt,install(K){K.component("RouterLink",cw),K.component("RouterView",fw),K.config.globalProperties.$router=Xt,Object.defineProperty(K.config.globalProperties,"$route",{enumerable:!0,get:()=>Pt(c)}),Ir&&!rn&&c.value===gs&&(rn=!0,G(r.location).catch(he=>{}));const oe={};for(const he in gs)Object.defineProperty(oe,he,{get:()=>c.value[he],enumerable:!0});K.provide(Ha,Xt),K.provide(hm,gg(oe)),K.provide(uc,c);const se=K.unmount;Jt.add(K),K.unmount=function(){Jt.delete(K),Jt.size<1&&(u=gs,w&&w(),w=null,c.value=gs,rn=!1,Ve=!1),se()}}};function gt(K){return K.reduce((oe,se)=>oe.then(()=>S(se)),Promise.resolve())}return Xt}function qt(){return xn(Ha)}const gw={__name:"App",setup(t){qt();const e=V(null),n=V(!1),s=()=>{const i=localStorage.getItem("soundEnabled");return i!==null?i==="true":!0},r=()=>{e.value&&(s()?n.value||e.value.play().then(()=>{n.value=!0}).catch(()=>{}):(e.value.pause(),n.value=!1))};return dt(()=>{try{e.value=new Audio,e.value.src=new URL("@/assets/audio/bgm.mp3",import.meta.url).href,e.value.loop=!0,e.value.volume=.5,r();const i=()=>{e.value&&s()&&!n.value&&e.value.play().then(()=>{n.value=!0}).catch(()=>{})};document.addEventListener("click",i,{once:!0}),document.addEventListener("touchstart",i,{once:!0}),window.addEventListener("soundSettingChanged",r)}catch{console.log("BGM 파일을 찾을 수 없습니다.")}}),Wr(()=>{e.value&&(e.value.pause(),e.value=null),window.removeEventListener("soundSettingChanged",r)}),(i,o)=>{const l=UA("router-view");return L(),qg(l)}}},ft=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},mw={class:"loading-screen"},_w={__name:"LoadingScreen",setup(t){const e=qt();return dt(()=>{setTimeout(()=>{e.push("/login")},3e3)}),(n,s)=>(L(),U("div",mw,[...s[0]||(s[0]=[zg('<div class="loading-container" data-v-198fdd5f><div class="logo" data-v-198fdd5f><h1 data-v-198fdd5f>TDL</h1><p data-v-198fdd5f>NFT Web3 Game</p></div><div class="loading-spinner" data-v-198fdd5f><div class="spinner" data-v-198fdd5f></div><p data-v-198fdd5f>Loading...</p></div><div class="loading-progress" data-v-198fdd5f><div class="progress-bar" data-v-198fdd5f><div class="progress-fill" data-v-198fdd5f></div></div><span class="progress-text" data-v-198fdd5f>100%</span></div></div>',1)])]))}},vw=ft(_w,[["__scopeId","data-v-198fdd5f"]]),gm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAz4SURBVHgB7d3ddRRXFobhIyJgMpAzwBGgicDjCOwQyMA4AiYDk8FMBmIiMI5AygBn0FMFjQ3or3+q6uy9z/OsVUtccK3vrVPVrdYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAjXDQA7tjtds+nH1fT9XK65n9ffvNfbqfr/XT9cXFx8a4BADnNoz9dP0/X9e44N9P123RdNgAgj2m8X03Xh935/iMEACC4eaxPuOM/xOsGAMSz+3Tcv8Rd/0Nudk4DACCO+Q59t40bEQAAAWw4/iIAACLoMP5fRsDzBgBsq+P4f/amAQDbCTD+n101AGB9uzjjP7tuAMC6drHG/7OrBgCsYxdz/GdOAejOHwMCStp9+ia+X1pc/7i4uPizQSfPGkAxCcZ/9kODjgQAUEqS8Z9dNehIAABlJBr/2YsGHQkAoIRk4z/zrYB05SVAIL2E4//RxaRBJ04AgNSyjj/0JgCAtIw/nE4AACkVGP/bBh0JACCdInf+tw06EgBAKoWO/d836EgAAGkUe+b/rkFHPoICpFDwhT9/C4CunAAA4RUc/7fGn96cAAChFf2o3/dTAHgHgK6cAABhFR3/t8afCJwAACEV/pKf76YAuG3QmRMAIJzC4//a+BOFEwAglMLj/99p/H9sEIQAAMIoPP7zM/9/evOfSAQAEILxh20JAKA74w/bEwBAV8Yf+hAAQDfGH/oRAEAXxh/6EgDA5ow/9CcAgE0Zf4hBAACbMf4QhwAANmH8IRYBAKzO+EM8AgBYlfGHmAQAsBrjD3EJAGAVxh9iEwDA4ow/xCcAgEUZf8hBAACLMf6QhwAAFmH8IRcBAJzN+EM+AgA4i/GHnAQAcDLjD3kJAOAkxh9yEwDA0Yw/5CcAgKMYf6hBAAAHM/5QhwAADmL8oRYBADzJ+EM9AgB4lPGHmgQA8CDjD3UJAOBexh9qEwDAHcYf6hMAwFeMP4xBAAB/Mf4wDgEAfGT8YSwCADD+MCABAIMz/jAmAQADM/4wLgEAgzL+MDYBAAMy/oAAgMEYf2AmAGAgxh/4TADAIIw/8CUBAAMw/sC3BAAUZ/yB+wgAKMz4Aw8RAFCU8QceIwCgIOMPPEUAQDHGHziEAIBCjD9wKAEARRh/4BgCAAow/sCxBAAkZ/yBUwgASMz4A6cSAJCU8QfOIQAgIeMPnEsAQDLGH1iCAIBEjD+wFAEASRh/YEkCABIw/sDSBAAEZ/yBNQgACMz4A2sRABCU8QfWJAAgIOMPrE0AQDDGH9iCAIBAjD+wFQEAQRh/YEsCAAIw/sDWBAB0ZvyBHgQAdGT8gV4EAHRi/IGeBAB0YPyB3gQAbMz4AxEIANiQ8QeiEACwEeMPRCIAYAPGH4hGAMDKjD8QkQCAFRl/ICoBACsx/kBkAgBWYPyB6AQALMz4AxkIAFiQ8QeyEACwEOMPZCIAYAHGH8hGAMCZjD+QkQCAMxh/ICsBACcy/kBmAgBOYPyB7AQAHMn4AxUIADiC8QeqEABwIOMPVCIA4ADGH6hGAMATjD9QkQCARxh/oCoBAA8w/kBlAgDuYfyB6gQAfMP4AyMQAPAF4w+MQgDAnvEHRiIAoBl/YDwCgOEZf2BEAoChGX9gVAKAYRl/YGQCgCEZf2B0AoDhGH8AAcBgjD/AJwKAYRh/gL8JAIZg/AG+JgAoz/gD3CUAKM34A9xPAFCW8Qd4mACgJOMP8DgBQDnGH+BpAoBSjD/AYQQAZRh/gMMJAEow/gDHEQCkZ/wBjicASM34A5xGAJCW8Qc4nQAgJeMPcB4BQDrGH+B8AoBUjD/AMgQAaRh/gOUIAFIw/gDLEgCEZ/wBlicACM34A6xDABCW8QdYjwAgJOMPsC4BQDjGH2B9AoBQpvF/Nf140+ox/kAoAoAwpvG/nH7ctHqMPxDOswZxXLd6jD8QkgAghP1z/8tWi/EHwhIAdLc/+v+p1WL8gdAEABFctVp3/8YfCM9LgHQ3nQDML/5dthqMP5CCEwC6msb/RTP+AJsTAPT2stVg/IFUBAC9XbX8jD+QjgCgt8uWm/EHUhIA9HbZ8jL+QFo+BUBXu0nLyfgDqTkBAIABCQB6y3oHPX988Xo6wHjeABISAPSW+QhdBABpCQB6e99yEwFASgKA3t61/EQAkI4AoLc/Wg0iAEjFxwDpzh8DAtieEwAieNvqcBIApOAEgO72YzmfAlQaTScBQGhOAOhuP5L/brU4CQBCcwJACPuh/L3VeRfgMycBQEhOAAhhP5A/ttxfDHQfJwFASAKAMKYImO+Wf231iAAgHAFAKFMEzO8CvG71iAAgFO8AENI0lL+0miHgnQAgBAFAWCIAYD0CgNBEAMA6BADhiQCA5QkAUhABAMsSAKQhAgCWIwBIRQQALEMAkI4IADifACAlEQBwHgFAWiIA4HQCgNREAMBpBADpiQCA4wkAShABAMcRAJQhAgAOJwAoRQQAHEYAUI4IAHiaAKAkEQDwOAFAWSIA4GECgNJEAMD9BADliQCAuwQAQxABAF8TAAxDBAD8TQAwFBEA8IkAYDgiAEAAMCgRAIxOADAsEQCMTAAwNBEAjEoAMDwRAIxIAEATAcB4BADsiQBgJAIAviACgFEIAPiGCABGIADgHiIAqE4AwANEAFCZAIBHiACgKgEATxABQEUCAA4gAoBqBAAcSAQAlQgAOIIIAKoQAHAkEQBUIADgBCIAyE4AwIlEAJCZAIAziAAgKwEAZxIBQEYCABYgAoBsBAAsRAQAmQgAWJAIALIQALAwEQBkIABgBSIAiE4AwEpEABCZAIAViQAgKgEAKxMBQEQCADYgAoBoBABsRAQAkQgA2JAIAKIQALAxEQBEIACgAxEA9CYAoBMRAPQkAKAjEQD0IgCgMxEA9CAAIAARAGxNAEAQIgDYkgCAQEQAsBUBAMGIAGALAgACEgHA2gQABCUCgDUJAAhMBABrEQAQnAgA1iAAIAERACxNAEASIgBYkgCAREQAsBQBAMmIAGAJAgASEgHAuQQAJCUCgHMIAEhMBACnEgCQnAgATiEAoAARABxLAEARIgA4hgCAQkQAcCgBAMWIAOAQAgAKEgHAUwQAFCUCgMcIAChMBAAPEQBQnAgA7iMAYAAiAPiWAIBBiADgSwIABiICgM8EAAxGBAAzAQADEgGAAIBBiQAYmwCAgYkAGJcAgMGJABiTAABEAAxIAAAfiQAYiwAA/iICYBwCAPiKCIAxCADgDhEA9QkA4F4iAGoTAMCDRADUJQCAR4kAqEkAAE8SAVCPAAAOIgKgFgEAHEwEQB0CADiKCIAaBABwNBEA+QkA4CQiAHITAMDJRADkJQCAs4gAyEkAAGcTAZCPAAAWIQIgFwEALEYEQB4CAFiUCIAcBACwOBEA8QkAYBUiAGITAMBqRADEJQCAVYkAiEkAAKsTARCPAAA2IQIgFgEAbEYEQBwCANiUCIAYBACwOREA/QkAoAsRAH0JAKAbEQD9CACgKxEAfQgAoDsRANsTAEAIIgC2JQCAMEQAbOdZAwhiGshfW80AeDFdvzUIRAAAoRSOgH9NJxyvGgThEQAQUtHHAfMjgO+nyLlt0JkTACCkoicBz5tHAQQhAICwikbA1XS6cdWgMwEAhFY0An5q0Jl3AIAUir0TML8L8J2PBdKTEwAghWInAfO7AC8bdCQAgDSKRcBVg44EAJBKoQh40aAjAQCkUyQCLht05CVAIK3sLwZOIeN3MN04AQDSKvy1wbA6AQCkJgLgNAIASC9pBNw26EgAACUkjIDbBh0JAKCMZBFw26AjAQCUkigC3jUAYFnzRwR3sV02AGB5u7gRcN2gM48AgLICPw542wCAde1inQTcNABgG7s4EfBDAwC2s+sfAW8aALC9jhFwM13PGwDQR4cIuNn52B8A9LdhBNwYfwAIZBrmV9P1Ybee340/AAQ0D/T+Ln1pb3ae+QNAbNNY/7xQCFxP18sGAOSxD4Hr3XE+7O/4DT9pXDQA7tgf38+D/mJ/fXmc/+f+ej9fFxcX/2sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABU9n/G+xQHTFSybwAAAABJRU5ErkJggg==",on=so({isLoggedIn:!1,walletAddress:"",userBalance:"0 ETH",nftCount:0,gameLevel:1,isLoading:!1}),mm=()=>{const t=(r,i)=>{on.isLoggedIn=!0,on.walletAddress=r,on.userBalance=i},e=r=>{on.nftCount=r.nftCount||0,on.gameLevel=r.gameLevel||1},n=r=>{on.isLoading=r},s=()=>{on.isLoggedIn=!1,on.walletAddress="",on.userBalance="0 ETH",on.nftCount=0,on.gameLevel=1};return{state:yw(on),setWalletConnected:t,setUserData:e,setLoading:n,logout:s}},yw=t=>new Proxy(t,{get(e,n){return e[n]},set(){return console.warn("직접 상태 수정은 금지됩니다. 액션을 사용하세요."),!1}}),Aw=()=>{};var ff={};/**
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
 */const _m=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Iw=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],l=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},vm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,l=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,_=u&63;c||(_=64,o||(m=64)),s.push(n[f],n[p],n[m],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_m(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Iw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],l=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const p=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||l==null||u==null||p==null)throw new ww;const m=i<<2|l>>4;if(s.push(m),u!==64){const _=l<<4&240|u>>2;if(s.push(_),p!==64){const E=u<<6&192|p;s.push(E)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ww extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ew=function(t){const e=_m(t);return vm.encodeByteArray(e,!0)},la=function(t){return Ew(t).replace(/\./g,"")},ym=function(t){try{return vm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Tw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Cw=()=>Tw().__FIREBASE_DEFAULTS__,bw=()=>{if(typeof process>"u"||typeof ff>"u")return;const t=ff.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Sw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ym(t[1]);return e&&JSON.parse(e)},ja=()=>{try{return Aw()||Cw()||bw()||Sw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Am=t=>ja()?.emulatorHosts?.[t],Rw=t=>{const e=Am(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Im=()=>ja()?.config,wm=t=>ja()?.[`_${t}`];/**
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
 */class Pw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Kr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Em(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function kw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[la(JSON.stringify(n)),la(JSON.stringify(o)),""].join(".")}const xi={};function Dw(){const t={prod:[],emulator:[]};for(const e of Object.keys(xi))xi[e]?t.emulator.push(e):t.prod.push(e);return t}function xw(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let pf=!1;function Tm(t,e){if(typeof window>"u"||typeof document>"u"||!Kr(window.location.host)||xi[t]===e||xi[t]||pf)return;xi[t]=e;function n(m){return`__firebase__banner__${m}`}const s="__firebase__banner",i=Dw().prod.length>0;function o(){const m=document.getElementById(s);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,_){m.setAttribute("width","24"),m.setAttribute("id",_),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{pf=!0,o()},m}function f(m,_){m.setAttribute("id",_),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=xw(s),_=n("text"),E=document.getElementById(_)||document.createElement("span"),T=n("learnmore"),I=document.getElementById(T)||document.createElement("a"),x=n("preprendIcon"),F=document.getElementById(x)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const $=m.element;l($),f(I,T);const G=u();c(F,x),$.append(F,E,I,G),document.body.appendChild($)}i?(E.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(F.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,E.innerText="Preview backend running in this workspace."),E.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function Ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Nw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ft())}function Mw(){const t=ja()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ow(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Cm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Vw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Lw(){const t=Ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Bw(){return!Mw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bm(){try{return typeof indexedDB=="object"}catch{return!1}}function Sm(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{e(r.error?.message||"")}}catch(n){e(n)}})}function Uw(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Fw="FirebaseError";class En extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Fw,Object.setPrototypeOf(this,En.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ur.prototype.create)}}class ur{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?$w(i,s):"Error",l=`${this.serviceName}: ${o} (${r}).`;return new En(r,l,s)}}function $w(t,e){return t.replace(Hw,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Hw=/\{\$([^}]+)}/g;function jw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ns(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(gf(i)&&gf(o)){if(!Ns(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function gf(t){return t!==null&&typeof t=="object"}/**
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
 */function oo(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Gw(t,e){const n=new qw(t,e);return n.subscribe.bind(n)}class qw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Qw(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Ol),r.error===void 0&&(r.error=Ol),r.complete===void 0&&(r.complete=Ol);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Qw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ol(){}/**
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
 */const zw=1e3,Ww=2,Kw=14400*1e3,Yw=.5;function mf(t,e=zw,n=Ww){const s=e*Math.pow(n,t),r=Math.round(Yw*s*(Math.random()-.5)*2);return Math.min(Kw,s+r)}/**
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
 */function Yt(t){return t&&t._delegate?t._delegate:t}class wn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ks="[DEFAULT]";/**
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
 */class Jw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Pw;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zw(e))try{this.getOrInitializeService({instanceIdentifier:Ks})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Ks){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ks){return this.instances.has(e)}getOptions(e=Ks){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);s===l&&o.resolve(r)}return r}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Xw(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ks){return this.component?this.component.multipleInstances?e:Ks:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xw(t){return t===Ks?void 0:t}function Zw(t){return t.instantiationMode==="EAGER"}/**
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
 */class e1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Jw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var De;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(De||(De={}));const t1={debug:De.DEBUG,verbose:De.VERBOSE,info:De.INFO,warn:De.WARN,error:De.ERROR,silent:De.SILENT},n1=De.INFO,s1={[De.DEBUG]:"log",[De.VERBOSE]:"log",[De.INFO]:"info",[De.WARN]:"warn",[De.ERROR]:"error"},r1=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=s1[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ga{constructor(e){this.name=e,this._logLevel=n1,this._logHandler=r1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in De))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?t1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,De.DEBUG,...e),this._logHandler(this,De.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,De.VERBOSE,...e),this._logHandler(this,De.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,De.INFO,...e),this._logHandler(this,De.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,De.WARN,...e),this._logHandler(this,De.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,De.ERROR,...e),this._logHandler(this,De.ERROR,...e)}}const i1=(t,e)=>e.some(n=>t instanceof n);let _f,vf;function o1(){return _f||(_f=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function a1(){return vf||(vf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rm=new WeakMap,hc=new WeakMap,Pm=new WeakMap,Vl=new WeakMap,nu=new WeakMap;function l1(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(bs(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Rm.set(n,t)}).catch(()=>{}),nu.set(e,t),e}function c1(t){if(hc.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});hc.set(t,e)}let dc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Pm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bs(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function u1(t){dc=t(dc)}function h1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ll(this),e,...n);return Pm.set(s,e.sort?e.sort():[e]),bs(s)}:a1().includes(t)?function(...e){return t.apply(Ll(this),e),bs(Rm.get(this))}:function(...e){return bs(t.apply(Ll(this),e))}}function d1(t){return typeof t=="function"?h1(t):(t instanceof IDBTransaction&&c1(t),i1(t,o1())?new Proxy(t,dc):t)}function bs(t){if(t instanceof IDBRequest)return l1(t);if(Vl.has(t))return Vl.get(t);const e=d1(t);return e!==t&&(Vl.set(t,e),nu.set(e,t)),e}const Ll=t=>nu.get(t);function km(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),l=bs(o);return s&&o.addEventListener("upgradeneeded",c=>{s(bs(o.result),c.oldVersion,c.newVersion,bs(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const f1=["get","getKey","getAll","getAllKeys","count"],p1=["put","add","delete","clear"],Bl=new Map;function yf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Bl.get(e))return Bl.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=p1.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||f1.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),r&&c.done]))[0]};return Bl.set(e,i),i}u1(t=>({...t,get:(e,n,s)=>yf(e,n)||t.get(e,n,s),has:(e,n)=>!!yf(e,n)||t.has(e,n)}));/**
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
 */class g1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(m1(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function m1(t){return t.getComponent()?.type==="VERSION"}const fc="@firebase/app",Af="0.14.5";/**
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
 */const ss=new Ga("@firebase/app"),_1="@firebase/app-compat",v1="@firebase/analytics-compat",y1="@firebase/analytics",A1="@firebase/app-check-compat",I1="@firebase/app-check",w1="@firebase/auth",E1="@firebase/auth-compat",T1="@firebase/database",C1="@firebase/data-connect",b1="@firebase/database-compat",S1="@firebase/functions",R1="@firebase/functions-compat",P1="@firebase/installations",k1="@firebase/installations-compat",D1="@firebase/messaging",x1="@firebase/messaging-compat",N1="@firebase/performance",M1="@firebase/performance-compat",O1="@firebase/remote-config",V1="@firebase/remote-config-compat",L1="@firebase/storage",B1="@firebase/storage-compat",U1="@firebase/firestore",F1="@firebase/ai",$1="@firebase/firestore-compat",H1="firebase",j1="12.5.0";/**
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
 */const pc="[DEFAULT]",G1={[fc]:"fire-core",[_1]:"fire-core-compat",[y1]:"fire-analytics",[v1]:"fire-analytics-compat",[I1]:"fire-app-check",[A1]:"fire-app-check-compat",[w1]:"fire-auth",[E1]:"fire-auth-compat",[T1]:"fire-rtdb",[C1]:"fire-data-connect",[b1]:"fire-rtdb-compat",[S1]:"fire-fn",[R1]:"fire-fn-compat",[P1]:"fire-iid",[k1]:"fire-iid-compat",[D1]:"fire-fcm",[x1]:"fire-fcm-compat",[N1]:"fire-perf",[M1]:"fire-perf-compat",[O1]:"fire-rc",[V1]:"fire-rc-compat",[L1]:"fire-gcs",[B1]:"fire-gcs-compat",[U1]:"fire-fst",[$1]:"fire-fst-compat",[F1]:"fire-vertex","fire-js":"fire-js",[H1]:"fire-js-all"};/**
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
 */const ca=new Map,q1=new Map,gc=new Map;function If(t,e){try{t.container.addComponent(e)}catch(n){ss.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fn(t){const e=t.name;if(gc.has(e))return ss.debug(`There were multiple attempts to register component ${e}.`),!1;gc.set(e,t);for(const n of ca.values())If(n,t);for(const n of q1.values())If(n,t);return!0}function hr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function gn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Q1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ss=new ur("app","Firebase",Q1);/**
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
 */class z1{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ss.create("app-deleted",{appName:this._name})}}/**
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
 */const Yr=j1;function Dm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:pc,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw Ss.create("bad-app-name",{appName:String(r)});if(n||(n=Im()),!n)throw Ss.create("no-options");const i=ca.get(r);if(i){if(Ns(n,i.options)&&Ns(s,i.config))return i;throw Ss.create("duplicate-app",{appName:r})}const o=new e1(r);for(const c of gc.values())o.addComponent(c);const l=new z1(n,s,o);return ca.set(r,l),l}function su(t=pc){const e=ca.get(t);if(!e&&t===pc&&Im())return Dm();if(!e)throw Ss.create("no-app",{appName:t});return e}function hn(t,e,n){let s=G1[t]??t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const o=[`Unable to register library "${s}" with version "${e}":`];r&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ss.warn(o.join(" "));return}Fn(new wn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const W1="firebase-heartbeat-database",K1=1,Qi="firebase-heartbeat-store";let Ul=null;function xm(){return Ul||(Ul=km(W1,K1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Qi)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ss.create("idb-open",{originalErrorMessage:t.message})})),Ul}async function Y1(t){try{const n=(await xm()).transaction(Qi),s=await n.objectStore(Qi).get(Nm(t));return await n.done,s}catch(e){if(e instanceof En)ss.warn(e.message);else{const n=Ss.create("idb-get",{originalErrorMessage:e?.message});ss.warn(n.message)}}}async function wf(t,e){try{const s=(await xm()).transaction(Qi,"readwrite");await s.objectStore(Qi).put(e,Nm(t)),await s.done}catch(n){if(n instanceof En)ss.warn(n.message);else{const s=Ss.create("idb-set",{originalErrorMessage:n?.message});ss.warn(s.message)}}}function Nm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const J1=1024,X1=30;class Z1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ef();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>X1){const r=nE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){ss.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ef(),{heartbeatsToSend:n,unsentEntries:s}=eE(this._heartbeatsCache.heartbeats),r=la(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return ss.warn(e),""}}}function Ef(){return new Date().toISOString().substring(0,10)}function eE(t,e=J1){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Tf(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Tf(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class tE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bm()?Sm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Y1(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return wf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return wf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Tf(t){return la(JSON.stringify({version:2,heartbeats:t})).length}function nE(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function sE(t){Fn(new wn("platform-logger",e=>new g1(e),"PRIVATE")),Fn(new wn("heartbeat",e=>new Z1(e),"PRIVATE")),hn(fc,Af,t),hn(fc,Af,"esm2020"),hn("fire-js","")}sE("");var rE="firebase",iE="12.5.0";/**
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
 */hn(rE,iE,"app");function Mm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const oE=Mm,Om=new ur("auth","Firebase",Mm());/**
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
 */const ua=new Ga("@firebase/auth");function aE(t,...e){ua.logLevel<=De.WARN&&ua.warn(`Auth (${Yr}): ${t}`,...e)}function $o(t,...e){ua.logLevel<=De.ERROR&&ua.error(`Auth (${Yr}): ${t}`,...e)}/**
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
 */function $n(t,...e){throw iu(t,...e)}function An(t,...e){return iu(t,...e)}function ru(t,e,n){const s={...oE(),[e]:n};return new ur("auth","Firebase",s).create(e,{appName:t.name})}function tr(t){return ru(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function lE(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&$n(t,"argument-error"),ru(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function iu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Om.create(t,...e)}function ve(t,e,...n){if(!t)throw iu(e,...n)}function Jn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw $o(e),new Error(e)}function rs(t,e){t||Jn(e)}/**
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
 */function mc(){return typeof self<"u"&&self.location?.href||""}function cE(){return Cf()==="http:"||Cf()==="https:"}function Cf(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function uE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cE()||Cm()||"connection"in navigator)?navigator.onLine:!0}function hE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ao{constructor(e,n){this.shortDelay=e,this.longDelay=n,rs(n>e,"Short delay should be less than long delay!"),this.isMobile=Nw()||Vw()}get(){return uE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ou(t,e){rs(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Vm{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Jn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Jn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Jn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const dE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const fE=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],pE=new ao(3e4,6e4);function au(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Jr(t,e,n,s,r={}){return Lm(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const l=oo({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...i};return Ow()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Kr(t.emulatorConfig.host)&&(u.credentials="include"),Vm.fetch()(await Bm(t,t.config.apiHost,n,l),u)})}async function Lm(t,e,n){t._canInitEmulator=!1;const s={...dE,...e};try{const r=new mE(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ko(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ko(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ko(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ko(t,"user-disabled",o);const f=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ru(t,f,u);$n(t,f)}}catch(r){if(r instanceof En)throw r;$n(t,"network-request-failed",{message:String(r)})}}async function gE(t,e,n,s,r={}){const i=await Jr(t,e,n,s,r);return"mfaPendingCredential"in i&&$n(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Bm(t,e,n,s){const r=`${e}${n}?${s}`,i=t,o=i.config.emulator?ou(t.config,r):`${t.config.apiScheme}://${r}`;return fE.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class mE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(An(this.auth,"network-request-failed")),pE.get())})}}function ko(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=An(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function _E(t,e){return Jr(t,"POST","/v1/accounts:delete",e)}async function ha(t,e){return Jr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ni(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vE(t,e=!1){const n=Yt(t),s=await n.getIdToken(e),r=lu(s);ve(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i?.sign_in_provider;return{claims:r,token:s,authTime:Ni(Fl(r.auth_time)),issuedAtTime:Ni(Fl(r.iat)),expirationTime:Ni(Fl(r.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Fl(t){return Number(t)*1e3}function lu(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return $o("JWT malformed, contained fewer than 3 sections"),null;try{const r=ym(n);return r?JSON.parse(r):($o("Failed to decode base64 JWT payload"),null)}catch(r){return $o("Caught error parsing JWT payload as JSON",r?.toString()),null}}function bf(t){const e=lu(t);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function zi(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof En&&yE(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function yE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class AE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class _c{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ni(this.lastLoginAt),this.creationTime=Ni(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function da(t){const e=t.auth,n=await t.getIdToken(),s=await zi(t,ha(e,{idToken:n}));ve(s?.users.length,e,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const i=r.providerUserInfo?.length?Um(r.providerUserInfo):[],o=wE(t.providerData,i),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!o?.length,u=l?c:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new _c(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function IE(t){const e=Yt(t);await da(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function wE(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Um(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function EE(t,e){const n=await Lm(t,{},async()=>{const s=oo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=await Bm(t,r,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:s};return t.emulatorConfig&&Kr(t.emulatorConfig.host)&&(c.credentials="include"),Vm.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function TE(t,e){return Jr(t,"POST","/v2/accounts:revokeToken",au(t,e))}/**
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
 */class Dr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const n=bf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await EE(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Dr;return s&&(ve(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(ve(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(ve(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Dr,this.toJSON())}_performRefresh(){return Jn("not implemented")}}/**
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
 */function ms(t,e){ve(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _n{constructor({uid:e,auth:n,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new AE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new _c(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await zi(this,this.stsTokenManager.getToken(this.auth,e));return ve(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vE(this,e)}reload(){return IE(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _n({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await da(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gn(this.auth.app))return Promise.reject(tr(this.auth));const e=await this.getIdToken();return await zi(this,_E(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,r=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:_,providerData:E,stsTokenManager:T}=n;ve(p&&T,e,"internal-error");const I=Dr.fromJSON(this.name,T);ve(typeof p=="string",e,"internal-error"),ms(s,e.name),ms(r,e.name),ve(typeof m=="boolean",e,"internal-error"),ve(typeof _=="boolean",e,"internal-error"),ms(i,e.name),ms(o,e.name),ms(l,e.name),ms(c,e.name),ms(u,e.name),ms(f,e.name);const x=new _n({uid:p,auth:e,email:r,emailVerified:m,displayName:s,isAnonymous:_,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:I,createdAt:u,lastLoginAt:f});return E&&Array.isArray(E)&&(x.providerData=E.map(F=>({...F}))),c&&(x._redirectEventId=c),x}static async _fromIdTokenResponse(e,n,s=!1){const r=new Dr;r.updateFromServerResponse(n);const i=new _n({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await da(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];ve(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Um(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!i?.length,l=new Dr;l.updateFromIdToken(s);const c=new _n({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new _c(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!i?.length};return Object.assign(c,u),c}}/**
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
 */const Sf=new Map;function Xn(t){rs(t instanceof Function,"Expected a class definition");let e=Sf.get(t);return e?(rs(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Sf.set(t,e),e)}/**
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
 */class Fm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Fm.type="NONE";const Rf=Fm;/**
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
 */function Ho(t,e,n){return`firebase:${t}:${e}:${n}`}class xr{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Ho(this.userKey,r.apiKey,i),this.fullPersistenceKey=Ho("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ha(this.auth,{idToken:e}).catch(()=>{});return n?_n._fromGetAccountInfoResponse(this.auth,n,e):null}return _n._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new xr(Xn(Rf),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||Xn(Rf);const o=Ho(s,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await ha(e,{idToken:f}).catch(()=>{});if(!m)break;p=await _n._fromGetAccountInfoResponse(e,m,f)}else p=_n._fromJSON(e,f);u!==i&&(l=p),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new xr(i,e,s):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new xr(i,e,s))}}/**
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
 */function Pf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Gm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($m(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qm(e))return"Blackberry";if(zm(e))return"Webos";if(Hm(e))return"Safari";if((e.includes("chrome/")||jm(e))&&!e.includes("edge/"))return"Chrome";if(qm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if(s?.length===2)return s[1]}return"Other"}function $m(t=Ft()){return/firefox\//i.test(t)}function Hm(t=Ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jm(t=Ft()){return/crios\//i.test(t)}function Gm(t=Ft()){return/iemobile/i.test(t)}function qm(t=Ft()){return/android/i.test(t)}function Qm(t=Ft()){return/blackberry/i.test(t)}function zm(t=Ft()){return/webos/i.test(t)}function cu(t=Ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function CE(t=Ft()){return cu(t)&&!!window.navigator?.standalone}function bE(){return Lw()&&document.documentMode===10}function Wm(t=Ft()){return cu(t)||qm(t)||zm(t)||Qm(t)||/windows phone/i.test(t)||Gm(t)}/**
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
 */function Km(t,e=[]){let n;switch(t){case"Browser":n=Pf(Ft());break;case"Worker":n=`${Pf(Ft())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Yr}/${s}`}/**
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
 */class SE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function RE(t,e={}){return Jr(t,"GET","/v2/passwordPolicy",au(t,e))}/**
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
 */const PE=6;class kE{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??PE,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class DE{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kf(this),this.idTokenSubscription=new kf(this),this.beforeStateQueue=new SE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Om,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await xr.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ha(this,{idToken:e}),s=await _n._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(gn(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=s?._redirectEventId,l=await this.tryRedirectSignIn(e);(!i||i===o)&&l?.user&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(i){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await da(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gn(this.app))return Promise.reject(tr(this));const n=e?Yt(e):null;return n&&ve(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gn(this.app)?Promise.reject(tr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gn(this.app)?Promise.reject(tr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Xn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await RE(this),n=new kE(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ur("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await TE(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xn(e)||this._popupRedirectResolver;ve(n,this,"argument-error"),this.redirectPersistenceManager=await xr.create(this,[Xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Km(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(gn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&aE(`Error while retrieving App Check token: ${e.error}`),e?.token}}function qa(t){return Yt(t)}class kf{constructor(e){this.auth=e,this.observer=null,this.addObserver=Gw(n=>this.observer=n)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let uu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xE(t){uu=t}function NE(t){return uu.loadJS(t)}function ME(){return uu.gapiScript}function OE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function VE(t,e){const n=hr(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Ns(i,e??{}))return r;$n(r,"already-initialized")}return n.initialize({options:e})}function LE(t,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(Xn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e?.popupRedirectResolver)}function BE(t,e,n){const s=qa(t);ve(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=Ym(e),{host:o,port:l}=UE(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){ve(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ve(Ns(u,s.config.emulator)&&Ns(f,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=u,s.emulatorConfig=f,s.settings.appVerificationDisabledForTesting=!0,Kr(o)?(Em(`${i}//${o}${c}`),Tm("Auth",!0)):FE()}function Ym(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function UE(t){const e=Ym(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Df(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Df(o)}}}function Df(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function FE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Jm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Jn("not implemented")}_getIdTokenResponse(e){return Jn("not implemented")}_linkToIdToken(e,n){return Jn("not implemented")}_getReauthenticationResolver(e){return Jn("not implemented")}}/**
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
 */async function Nr(t,e){return gE(t,"POST","/v1/accounts:signInWithIdp",au(t,e))}/**
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
 */const $E="http://localhost";class rr extends Jm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new rr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$n("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=n;if(!s||!r)return null;const o=new rr(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Nr(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Nr(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Nr(e,n)}buildRequest(){const e={requestUri:$E,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=oo(n)}return e}}/**
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
 */class hu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class lo extends hu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class As extends lo{constructor(){super("facebook.com")}static credential(e){return rr._fromParams({providerId:As.PROVIDER_ID,signInMethod:As.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return As.credentialFromTaggedObject(e)}static credentialFromError(e){return As.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return As.credential(e.oauthAccessToken)}catch{return null}}}As.FACEBOOK_SIGN_IN_METHOD="facebook.com";As.PROVIDER_ID="facebook.com";/**
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
 */class Yn extends lo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return rr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Yn.credential(n,s)}catch{return null}}}Yn.GOOGLE_SIGN_IN_METHOD="google.com";Yn.PROVIDER_ID="google.com";/**
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
 */class Is extends lo{constructor(){super("github.com")}static credential(e){return rr._fromParams({providerId:Is.PROVIDER_ID,signInMethod:Is.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Is.credentialFromTaggedObject(e)}static credentialFromError(e){return Is.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Is.credential(e.oauthAccessToken)}catch{return null}}}Is.GITHUB_SIGN_IN_METHOD="github.com";Is.PROVIDER_ID="github.com";/**
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
 */class ws extends lo{constructor(){super("twitter.com")}static credential(e,n){return rr._fromParams({providerId:ws.PROVIDER_ID,signInMethod:ws.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ws.credentialFromTaggedObject(e)}static credentialFromError(e){return ws.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return ws.credential(n,s)}catch{return null}}}ws.TWITTER_SIGN_IN_METHOD="twitter.com";ws.PROVIDER_ID="twitter.com";/**
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
 */class Fr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await _n._fromIdTokenResponse(e,s,r),o=xf(s);return new Fr({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=xf(s);return new Fr({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function xf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class fa extends En{constructor(e,n,s,r){super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,fa.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new fa(e,n,s,r)}}function Xm(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?fa._fromErrorAndOperation(t,i,e,s):i})}async function HE(t,e,n=!1){const s=await zi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Fr._forOperation(t,"link",s)}/**
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
 */async function jE(t,e,n=!1){const{auth:s}=t;if(gn(s.app))return Promise.reject(tr(s));const r="reauthenticate";try{const i=await zi(t,Xm(s,r,e,t),n);ve(i.idToken,s,"internal-error");const o=lu(i.idToken);ve(o,s,"internal-error");const{sub:l}=o;return ve(t.uid===l,s,"user-mismatch"),Fr._forOperation(t,r,i)}catch(i){throw i?.code==="auth/user-not-found"&&$n(s,"user-mismatch"),i}}/**
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
 */async function GE(t,e,n=!1){if(gn(t.app))return Promise.reject(tr(t));const s="signIn",r=await Xm(t,s,e),i=await Fr._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function qE(t,e,n,s){return Yt(t).onIdTokenChanged(e,n,s)}function QE(t,e,n){return Yt(t).beforeAuthStateChanged(e,n)}function zE(t){return Yt(t).signOut()}const pa="__sak";/**
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
 */class Zm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(pa,"1"),this.storage.removeItem(pa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const WE=1e3,KE=10;class e_ extends Zm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Wm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);bE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,KE):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},WE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}e_.type="LOCAL";const YE=e_;/**
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
 */class t_ extends Zm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}t_.type="SESSION";const n_=t_;/**
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
 */function JE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Qa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Qa(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await JE(l);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qa.receivers=[];/**
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
 */function du(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class XE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=du("",20);r.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Nn(){return window}function ZE(t){Nn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function s_(){return typeof Nn().WorkerGlobalScope<"u"&&typeof Nn().importScripts=="function"}async function eT(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tT(){return navigator?.serviceWorker?.controller||null}function nT(){return s_()?self:null}/**
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
 */const r_="firebaseLocalStorageDb",sT=1,ga="firebaseLocalStorage",i_="fbase_key";class co{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function za(t,e){return t.transaction([ga],e?"readwrite":"readonly").objectStore(ga)}function rT(){const t=indexedDB.deleteDatabase(r_);return new co(t).toPromise()}function vc(){const t=indexedDB.open(r_,sT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ga,{keyPath:i_})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ga)?e(s):(s.close(),await rT(),e(await vc()))})})}async function Nf(t,e,n){const s=za(t,!0).put({[i_]:e,value:n});return new co(s).toPromise()}async function iT(t,e){const n=za(t,!1).get(e),s=await new co(n).toPromise();return s===void 0?null:s.value}function Mf(t,e){const n=za(t,!0).delete(e);return new co(n).toPromise()}const oT=800,aT=3;class o_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>aT)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return s_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qa._getInstance(nT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await eT(),!this.activeServiceWorker)return;this.sender=new XE(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vc();return await Nf(e,pa,"1"),await Mf(e,pa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Nf(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>iT(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Mf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=za(r,!1).getAll();return new co(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}o_.type="LOCAL";const lT=o_;new ao(3e4,6e4);/**
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
 */function a_(t,e){return e?Xn(e):(ve(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class fu extends Jm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Nr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Nr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Nr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function cT(t){return GE(t.auth,new fu(t),t.bypassAuthState)}function uT(t){const{auth:e,user:n}=t;return ve(n,e,"internal-error"),jE(n,new fu(t),t.bypassAuthState)}async function hT(t){const{auth:e,user:n}=t;return ve(n,e,"internal-error"),HE(n,new fu(t),t.bypassAuthState)}/**
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
 */class l_{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cT;case"linkViaPopup":case"linkViaRedirect":return hT;case"reauthViaPopup":case"reauthViaRedirect":return uT;default:$n(this.auth,"internal-error")}}resolve(e){rs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const dT=new ao(2e3,1e4);async function fT(t,e,n){if(gn(t.app))return Promise.reject(An(t,"operation-not-supported-in-this-environment"));const s=qa(t);lE(t,e,hu);const r=a_(s,n);return new Js(s,"signInViaPopup",e,r).executeNotNull()}class Js extends l_{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Js.currentPopupAction&&Js.currentPopupAction.cancel(),Js.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){rs(this.filter.length===1,"Popup operations only handle one event");const e=du();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(An(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(An(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Js.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(An(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,dT.get())};e()}}Js.currentPopupAction=null;/**
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
 */const pT="pendingRedirect",jo=new Map;class gT extends l_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=jo.get(this.auth._key());if(!e){try{const s=await mT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}jo.set(this.auth._key(),e)}return this.bypassAuthState||jo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mT(t,e){const n=yT(e),s=vT(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function _T(t,e){jo.set(t._key(),e)}function vT(t){return Xn(t._redirectPersistence)}function yT(t){return Ho(pT,t.config.apiKey,t.name)}async function AT(t,e,n=!1){if(gn(t.app))return Promise.reject(tr(t));const s=qa(t),r=a_(s,e),o=await new gT(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const IT=600*1e3;class wT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ET(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!c_(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";n.onError(An(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=IT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Of(e))}saveEventToCache(e){this.cachedEventUids.add(Of(e)),this.lastProcessedEventTime=Date.now()}}function Of(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function c_({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function ET(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return c_(t);default:return!1}}/**
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
 */async function TT(t,e={}){return Jr(t,"GET","/v1/projects",e)}/**
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
 */const CT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bT=/^https?/;async function ST(t){if(t.config.emulator)return;const{authorizedDomains:e}=await TT(t);for(const n of e)try{if(RT(n))return}catch{}$n(t,"unauthorized-domain")}function RT(t){const e=mc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!bT.test(n))return!1;if(CT.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const PT=new ao(3e4,6e4);function Vf(){const t=Nn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function kT(t){return new Promise((e,n)=>{function s(){Vf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vf(),n(An(t,"network-request-failed"))},timeout:PT.get()})}if(Nn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Nn().gapi?.load)s();else{const r=OE("iframefcb");return Nn()[r]=()=>{gapi.load?s():n(An(t,"network-request-failed"))},NE(`${ME()}?onload=${r}`).catch(i=>n(i))}}).catch(e=>{throw Go=null,e})}let Go=null;function DT(t){return Go=Go||kT(t),Go}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const xT=new ao(5e3,15e3),NT="__/auth/iframe",MT="emulator/auth/iframe",OT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},VT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function LT(t){const e=t.config;ve(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ou(e,MT):`https://${t.config.authDomain}/${NT}`,s={apiKey:e.apiKey,appName:t.name,v:Yr},r=VT.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${oo(s).slice(1)}`}async function BT(t){const e=await DT(t),n=Nn().gapi;return ve(n,t,"internal-error"),e.open({where:document.body,url:LT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:OT,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=An(t,"network-request-failed"),l=Nn().setTimeout(()=>{i(o)},xT.get());function c(){Nn().clearTimeout(l),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const UT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},FT=500,$T=600,HT="_blank",jT="http://localhost";class Lf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GT(t,e,n,s=FT,r=$T){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const c={...UT,width:s.toString(),height:r.toString(),top:i,left:o},u=Ft().toLowerCase();n&&(l=jm(u)?HT:n),$m(u)&&(e=e||jT,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[_,E])=>`${m}${_}=${E},`,"");if(CE(u)&&l!=="_self")return qT(e||"",l),new Lf(null);const p=window.open(e||"",l,f);ve(p,t,"popup-blocked");try{p.focus()}catch{}return new Lf(p)}function qT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const QT="__/auth/handler",zT="emulator/auth/handler",WT=encodeURIComponent("fac");async function Bf(t,e,n,s,r,i){ve(t.config.authDomain,t,"auth-domain-config-required"),ve(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Yr,eventId:r};if(e instanceof hu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",jw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof lo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${WT}=${encodeURIComponent(c)}`:"";return`${KT(t)}?${oo(l).slice(1)}${u}`}function KT({config:t}){return t.emulator?ou(t,zT):`https://${t.authDomain}/${QT}`}/**
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
 */const $l="webStorageSupport";class YT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=n_,this._completeRedirectFn=AT,this._overrideRedirectResult=_T}async _openPopup(e,n,s,r){rs(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Bf(e,n,s,mc(),r);return GT(e,i,du())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Bf(e,n,s,mc(),r);return ZE(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(rs(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await BT(e),s=new wT(e);return n.register("authEvent",r=>(ve(r?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($l,{type:$l},r=>{const i=r?.[0]?.[$l];i!==void 0&&n(!!i),$n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ST(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Wm()||Hm()||cu()}}const JT=YT;var Uf="@firebase/auth",Ff="1.11.1";/**
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
 */class XT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ZT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function eC(t){Fn(new wn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=s.options;ve(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Km(t)},u=new DE(s,r,i,c);return LE(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Fn(new wn("auth-internal",e=>{const n=qa(e.getProvider("auth").getImmediate());return(s=>new XT(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hn(Uf,Ff,ZT(t)),hn(Uf,Ff,"esm2020")}/**
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
 */const tC=300,nC=wm("authIdTokenMaxAge")||tC;let $f=null;const sC=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>nC)return;const r=n?.token;$f!==r&&($f=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function rC(t=su()){const e=hr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=VE(t,{popupRedirectResolver:JT,persistence:[lT,YE,n_]}),s=wm("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=sC(i.toString());QE(n,o,()=>o(n.currentUser)),qE(n,l=>o(l))}}const r=Am("auth");return r&&BE(n,`http://${r}`),n}function iC(){return document.getElementsByTagName("head")?.[0]??document}xE({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=An("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",iC().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});eC("Browser");var Hf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rs,u_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,C){function S(){}S.prototype=C.prototype,R.F=C.prototype,R.prototype=new S,R.prototype.constructor=R,R.D=function(D,k,O){for(var w=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)w[Oe-2]=arguments[Oe];return C.prototype[k].apply(D,w)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,n),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(R,C,S){S||(S=0);const D=Array(16);if(typeof C=="string")for(var k=0;k<16;++k)D[k]=C.charCodeAt(S++)|C.charCodeAt(S++)<<8|C.charCodeAt(S++)<<16|C.charCodeAt(S++)<<24;else for(k=0;k<16;++k)D[k]=C[S++]|C[S++]<<8|C[S++]<<16|C[S++]<<24;C=R.g[0],S=R.g[1],k=R.g[2];let O=R.g[3],w;w=C+(O^S&(k^O))+D[0]+3614090360&4294967295,C=S+(w<<7&4294967295|w>>>25),w=O+(k^C&(S^k))+D[1]+3905402710&4294967295,O=C+(w<<12&4294967295|w>>>20),w=k+(S^O&(C^S))+D[2]+606105819&4294967295,k=O+(w<<17&4294967295|w>>>15),w=S+(C^k&(O^C))+D[3]+3250441966&4294967295,S=k+(w<<22&4294967295|w>>>10),w=C+(O^S&(k^O))+D[4]+4118548399&4294967295,C=S+(w<<7&4294967295|w>>>25),w=O+(k^C&(S^k))+D[5]+1200080426&4294967295,O=C+(w<<12&4294967295|w>>>20),w=k+(S^O&(C^S))+D[6]+2821735955&4294967295,k=O+(w<<17&4294967295|w>>>15),w=S+(C^k&(O^C))+D[7]+4249261313&4294967295,S=k+(w<<22&4294967295|w>>>10),w=C+(O^S&(k^O))+D[8]+1770035416&4294967295,C=S+(w<<7&4294967295|w>>>25),w=O+(k^C&(S^k))+D[9]+2336552879&4294967295,O=C+(w<<12&4294967295|w>>>20),w=k+(S^O&(C^S))+D[10]+4294925233&4294967295,k=O+(w<<17&4294967295|w>>>15),w=S+(C^k&(O^C))+D[11]+2304563134&4294967295,S=k+(w<<22&4294967295|w>>>10),w=C+(O^S&(k^O))+D[12]+1804603682&4294967295,C=S+(w<<7&4294967295|w>>>25),w=O+(k^C&(S^k))+D[13]+4254626195&4294967295,O=C+(w<<12&4294967295|w>>>20),w=k+(S^O&(C^S))+D[14]+2792965006&4294967295,k=O+(w<<17&4294967295|w>>>15),w=S+(C^k&(O^C))+D[15]+1236535329&4294967295,S=k+(w<<22&4294967295|w>>>10),w=C+(k^O&(S^k))+D[1]+4129170786&4294967295,C=S+(w<<5&4294967295|w>>>27),w=O+(S^k&(C^S))+D[6]+3225465664&4294967295,O=C+(w<<9&4294967295|w>>>23),w=k+(C^S&(O^C))+D[11]+643717713&4294967295,k=O+(w<<14&4294967295|w>>>18),w=S+(O^C&(k^O))+D[0]+3921069994&4294967295,S=k+(w<<20&4294967295|w>>>12),w=C+(k^O&(S^k))+D[5]+3593408605&4294967295,C=S+(w<<5&4294967295|w>>>27),w=O+(S^k&(C^S))+D[10]+38016083&4294967295,O=C+(w<<9&4294967295|w>>>23),w=k+(C^S&(O^C))+D[15]+3634488961&4294967295,k=O+(w<<14&4294967295|w>>>18),w=S+(O^C&(k^O))+D[4]+3889429448&4294967295,S=k+(w<<20&4294967295|w>>>12),w=C+(k^O&(S^k))+D[9]+568446438&4294967295,C=S+(w<<5&4294967295|w>>>27),w=O+(S^k&(C^S))+D[14]+3275163606&4294967295,O=C+(w<<9&4294967295|w>>>23),w=k+(C^S&(O^C))+D[3]+4107603335&4294967295,k=O+(w<<14&4294967295|w>>>18),w=S+(O^C&(k^O))+D[8]+1163531501&4294967295,S=k+(w<<20&4294967295|w>>>12),w=C+(k^O&(S^k))+D[13]+2850285829&4294967295,C=S+(w<<5&4294967295|w>>>27),w=O+(S^k&(C^S))+D[2]+4243563512&4294967295,O=C+(w<<9&4294967295|w>>>23),w=k+(C^S&(O^C))+D[7]+1735328473&4294967295,k=O+(w<<14&4294967295|w>>>18),w=S+(O^C&(k^O))+D[12]+2368359562&4294967295,S=k+(w<<20&4294967295|w>>>12),w=C+(S^k^O)+D[5]+4294588738&4294967295,C=S+(w<<4&4294967295|w>>>28),w=O+(C^S^k)+D[8]+2272392833&4294967295,O=C+(w<<11&4294967295|w>>>21),w=k+(O^C^S)+D[11]+1839030562&4294967295,k=O+(w<<16&4294967295|w>>>16),w=S+(k^O^C)+D[14]+4259657740&4294967295,S=k+(w<<23&4294967295|w>>>9),w=C+(S^k^O)+D[1]+2763975236&4294967295,C=S+(w<<4&4294967295|w>>>28),w=O+(C^S^k)+D[4]+1272893353&4294967295,O=C+(w<<11&4294967295|w>>>21),w=k+(O^C^S)+D[7]+4139469664&4294967295,k=O+(w<<16&4294967295|w>>>16),w=S+(k^O^C)+D[10]+3200236656&4294967295,S=k+(w<<23&4294967295|w>>>9),w=C+(S^k^O)+D[13]+681279174&4294967295,C=S+(w<<4&4294967295|w>>>28),w=O+(C^S^k)+D[0]+3936430074&4294967295,O=C+(w<<11&4294967295|w>>>21),w=k+(O^C^S)+D[3]+3572445317&4294967295,k=O+(w<<16&4294967295|w>>>16),w=S+(k^O^C)+D[6]+76029189&4294967295,S=k+(w<<23&4294967295|w>>>9),w=C+(S^k^O)+D[9]+3654602809&4294967295,C=S+(w<<4&4294967295|w>>>28),w=O+(C^S^k)+D[12]+3873151461&4294967295,O=C+(w<<11&4294967295|w>>>21),w=k+(O^C^S)+D[15]+530742520&4294967295,k=O+(w<<16&4294967295|w>>>16),w=S+(k^O^C)+D[2]+3299628645&4294967295,S=k+(w<<23&4294967295|w>>>9),w=C+(k^(S|~O))+D[0]+4096336452&4294967295,C=S+(w<<6&4294967295|w>>>26),w=O+(S^(C|~k))+D[7]+1126891415&4294967295,O=C+(w<<10&4294967295|w>>>22),w=k+(C^(O|~S))+D[14]+2878612391&4294967295,k=O+(w<<15&4294967295|w>>>17),w=S+(O^(k|~C))+D[5]+4237533241&4294967295,S=k+(w<<21&4294967295|w>>>11),w=C+(k^(S|~O))+D[12]+1700485571&4294967295,C=S+(w<<6&4294967295|w>>>26),w=O+(S^(C|~k))+D[3]+2399980690&4294967295,O=C+(w<<10&4294967295|w>>>22),w=k+(C^(O|~S))+D[10]+4293915773&4294967295,k=O+(w<<15&4294967295|w>>>17),w=S+(O^(k|~C))+D[1]+2240044497&4294967295,S=k+(w<<21&4294967295|w>>>11),w=C+(k^(S|~O))+D[8]+1873313359&4294967295,C=S+(w<<6&4294967295|w>>>26),w=O+(S^(C|~k))+D[15]+4264355552&4294967295,O=C+(w<<10&4294967295|w>>>22),w=k+(C^(O|~S))+D[6]+2734768916&4294967295,k=O+(w<<15&4294967295|w>>>17),w=S+(O^(k|~C))+D[13]+1309151649&4294967295,S=k+(w<<21&4294967295|w>>>11),w=C+(k^(S|~O))+D[4]+4149444226&4294967295,C=S+(w<<6&4294967295|w>>>26),w=O+(S^(C|~k))+D[11]+3174756917&4294967295,O=C+(w<<10&4294967295|w>>>22),w=k+(C^(O|~S))+D[2]+718787259&4294967295,k=O+(w<<15&4294967295|w>>>17),w=S+(O^(k|~C))+D[9]+3951481745&4294967295,R.g[0]=R.g[0]+C&4294967295,R.g[1]=R.g[1]+(k+(w<<21&4294967295|w>>>11))&4294967295,R.g[2]=R.g[2]+k&4294967295,R.g[3]=R.g[3]+O&4294967295}s.prototype.v=function(R,C){C===void 0&&(C=R.length);const S=C-this.blockSize,D=this.C;let k=this.h,O=0;for(;O<C;){if(k==0)for(;O<=S;)r(this,R,O),O+=this.blockSize;if(typeof R=="string"){for(;O<C;)if(D[k++]=R.charCodeAt(O++),k==this.blockSize){r(this,D),k=0;break}}else for(;O<C;)if(D[k++]=R[O++],k==this.blockSize){r(this,D),k=0;break}}this.h=k,this.o+=C},s.prototype.A=function(){var R=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);R[0]=128;for(var C=1;C<R.length-8;++C)R[C]=0;C=this.o*8;for(var S=R.length-8;S<R.length;++S)R[S]=C&255,C/=256;for(this.v(R),R=Array(16),C=0,S=0;S<4;++S)for(let D=0;D<32;D+=8)R[C++]=this.g[S]>>>D&255;return R};function i(R,C){var S=l;return Object.prototype.hasOwnProperty.call(S,R)?S[R]:S[R]=C(R)}function o(R,C){this.h=C;const S=[];let D=!0;for(let k=R.length-1;k>=0;k--){const O=R[k]|0;D&&O==C||(S[k]=O,D=!1)}this.g=S}var l={};function c(R){return-128<=R&&R<128?i(R,function(C){return new o([C|0],C<0?-1:0)}):new o([R|0],R<0?-1:0)}function u(R){if(isNaN(R)||!isFinite(R))return p;if(R<0)return I(u(-R));const C=[];let S=1;for(let D=0;R>=S;D++)C[D]=R/S|0,S*=4294967296;return new o(C,0)}function f(R,C){if(R.length==0)throw Error("number format error: empty string");if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if(R.charAt(0)=="-")return I(f(R.substring(1),C));if(R.indexOf("-")>=0)throw Error('number format error: interior "-" character');const S=u(Math.pow(C,8));let D=p;for(let O=0;O<R.length;O+=8){var k=Math.min(8,R.length-O);const w=parseInt(R.substring(O,O+k),C);k<8?(k=u(Math.pow(C,k)),D=D.j(k).add(u(w))):(D=D.j(S),D=D.add(u(w)))}return D}var p=c(0),m=c(1),_=c(16777216);t=o.prototype,t.m=function(){if(T(this))return-I(this).m();let R=0,C=1;for(let S=0;S<this.g.length;S++){const D=this.i(S);R+=(D>=0?D:4294967296+D)*C,C*=4294967296}return R},t.toString=function(R){if(R=R||10,R<2||36<R)throw Error("radix out of range: "+R);if(E(this))return"0";if(T(this))return"-"+I(this).toString(R);const C=u(Math.pow(R,6));var S=this;let D="";for(;;){const k=G(S,C).g;S=x(S,k.j(C));let O=((S.g.length>0?S.g[0]:S.h)>>>0).toString(R);if(S=k,E(S))return O+D;for(;O.length<6;)O="0"+O;D=O+D}},t.i=function(R){return R<0?0:R<this.g.length?this.g[R]:this.h};function E(R){if(R.h!=0)return!1;for(let C=0;C<R.g.length;C++)if(R.g[C]!=0)return!1;return!0}function T(R){return R.h==-1}t.l=function(R){return R=x(this,R),T(R)?-1:E(R)?0:1};function I(R){const C=R.g.length,S=[];for(let D=0;D<C;D++)S[D]=~R.g[D];return new o(S,~R.h).add(m)}t.abs=function(){return T(this)?I(this):this},t.add=function(R){const C=Math.max(this.g.length,R.g.length),S=[];let D=0;for(let k=0;k<=C;k++){let O=D+(this.i(k)&65535)+(R.i(k)&65535),w=(O>>>16)+(this.i(k)>>>16)+(R.i(k)>>>16);D=w>>>16,O&=65535,w&=65535,S[k]=w<<16|O}return new o(S,S[S.length-1]&-2147483648?-1:0)};function x(R,C){return R.add(I(C))}t.j=function(R){if(E(this)||E(R))return p;if(T(this))return T(R)?I(this).j(I(R)):I(I(this).j(R));if(T(R))return I(this.j(I(R)));if(this.l(_)<0&&R.l(_)<0)return u(this.m()*R.m());const C=this.g.length+R.g.length,S=[];for(var D=0;D<2*C;D++)S[D]=0;for(D=0;D<this.g.length;D++)for(let k=0;k<R.g.length;k++){const O=this.i(D)>>>16,w=this.i(D)&65535,Oe=R.i(k)>>>16,Ct=R.i(k)&65535;S[2*D+2*k]+=w*Ct,F(S,2*D+2*k),S[2*D+2*k+1]+=O*Ct,F(S,2*D+2*k+1),S[2*D+2*k+1]+=w*Oe,F(S,2*D+2*k+1),S[2*D+2*k+2]+=O*Oe,F(S,2*D+2*k+2)}for(R=0;R<C;R++)S[R]=S[2*R+1]<<16|S[2*R];for(R=C;R<2*C;R++)S[R]=0;return new o(S,0)};function F(R,C){for(;(R[C]&65535)!=R[C];)R[C+1]+=R[C]>>>16,R[C]&=65535,C++}function $(R,C){this.g=R,this.h=C}function G(R,C){if(E(C))throw Error("division by zero");if(E(R))return new $(p,p);if(T(R))return C=G(I(R),C),new $(I(C.g),I(C.h));if(T(C))return C=G(R,I(C)),new $(I(C.g),C.h);if(R.g.length>30){if(T(R)||T(C))throw Error("slowDivide_ only works with positive integers.");for(var S=m,D=C;D.l(R)<=0;)S=re(S),D=re(D);var k=we(S,1),O=we(D,1);for(D=we(D,2),S=we(S,2);!E(D);){var w=O.add(D);w.l(R)<=0&&(k=k.add(S),O=w),D=we(D,1),S=we(S,1)}return C=x(R,k.j(C)),new $(k,C)}for(k=p;R.l(C)>=0;){for(S=Math.max(1,Math.floor(R.m()/C.m())),D=Math.ceil(Math.log(S)/Math.LN2),D=D<=48?1:Math.pow(2,D-48),O=u(S),w=O.j(C);T(w)||w.l(R)>0;)S-=D,O=u(S),w=O.j(C);E(O)&&(O=m),k=k.add(O),R=x(R,w)}return new $(k,R)}t.B=function(R){return G(this,R).h},t.and=function(R){const C=Math.max(this.g.length,R.g.length),S=[];for(let D=0;D<C;D++)S[D]=this.i(D)&R.i(D);return new o(S,this.h&R.h)},t.or=function(R){const C=Math.max(this.g.length,R.g.length),S=[];for(let D=0;D<C;D++)S[D]=this.i(D)|R.i(D);return new o(S,this.h|R.h)},t.xor=function(R){const C=Math.max(this.g.length,R.g.length),S=[];for(let D=0;D<C;D++)S[D]=this.i(D)^R.i(D);return new o(S,this.h^R.h)};function re(R){const C=R.g.length+1,S=[];for(let D=0;D<C;D++)S[D]=R.i(D)<<1|R.i(D-1)>>>31;return new o(S,R.h)}function we(R,C){const S=C>>5;C%=32;const D=R.g.length-S,k=[];for(let O=0;O<D;O++)k[O]=C>0?R.i(O+S)>>>C|R.i(O+S+1)<<32-C:R.i(O+S);return new o(k,R.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,u_=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Rs=o}).apply(typeof Hf<"u"?Hf:typeof self<"u"?self:typeof window<"u"?window:{});var Do=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var h_,yi,d_,qo,yc,f_,p_,g_;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Do=="object"&&Do];for(var d=0;d<a.length;++d){var g=a[d];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=n(this);function r(a,d){if(d)e:{var g=s;a=a.split(".");for(var v=0;v<a.length-1;v++){var B=a[v];if(!(B in g))break e;g=g[B]}a=a[a.length-1],v=g[a],d=d(v),d!=v&&d!=null&&e(g,a,{configurable:!0,writable:!0,value:d})}}r("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(a){return a||function(d){var g=[],v;for(v in d)Object.prototype.hasOwnProperty.call(d,v)&&g.push([v,d[v]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function c(a,d,g){return a.call.apply(a.bind,arguments)}function u(a,d,g){return u=c,u.apply(null,arguments)}function f(a,d){var g=Array.prototype.slice.call(arguments,1);return function(){var v=g.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function p(a,d){function g(){}g.prototype=d.prototype,a.Z=d.prototype,a.prototype=new g,a.prototype.constructor=a,a.Ob=function(v,B,j){for(var te=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)te[Se-2]=arguments[Se];return d.prototype[B].apply(v,te)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function _(a){const d=a.length;if(d>0){const g=Array(d);for(let v=0;v<d;v++)g[v]=a[v];return g}return[]}function E(a,d){for(let v=1;v<arguments.length;v++){const B=arguments[v];var g=typeof B;if(g=g!="object"?g:B?Array.isArray(B)?"array":g:"null",g=="array"||g=="object"&&typeof B.length=="number"){g=a.length||0;const j=B.length||0;a.length=g+j;for(let te=0;te<j;te++)a[g+te]=B[te]}else a.push(B)}}class T{constructor(d,g){this.i=d,this.j=g,this.h=0,this.g=null}get(){let d;return this.h>0?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function I(a){o.setTimeout(()=>{throw a},0)}function x(){var a=R;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class F{constructor(){this.h=this.g=null}add(d,g){const v=$.get();v.set(d,g),this.h?this.h.next=v:this.g=v,this.h=v}}var $=new T(()=>new G,a=>a.reset());class G{constructor(){this.next=this.g=this.h=null}set(d,g){this.h=d,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let re,we=!1,R=new F,C=()=>{const a=Promise.resolve(void 0);re=()=>{a.then(S)}};function S(){for(var a;a=x();){try{a.h.call(a.g)}catch(g){I(g)}var d=$;d.j(a),d.h<100&&(d.h++,a.next=d.g,d.g=a)}we=!1}function D(){this.u=this.u,this.C=this.C}D.prototype.u=!1,D.prototype.dispose=function(){this.u||(this.u=!0,this.N())},D.prototype[Symbol.dispose]=function(){this.dispose()},D.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function k(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var O=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const g=()=>{};o.addEventListener("test",g,d),o.removeEventListener("test",g,d)}catch{}return a})();function w(a){return/^[\s\xa0]*$/.test(a)}function Oe(a,d){k.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,d)}p(Oe,k),Oe.prototype.init=function(a,d){const g=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget,d||(g=="mouseover"?d=a.fromElement:g=="mouseout"&&(d=a.toElement)),this.relatedTarget=d,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Oe.Z.h.call(this)},Oe.prototype.h=function(){Oe.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ct="closure_listenable_"+(Math.random()*1e6|0),rt=0;function Ve(a,d,g,v,B){this.listener=a,this.proxy=null,this.src=d,this.type=g,this.capture=!!v,this.ha=B,this.key=++rt,this.da=this.fa=!1}function Te(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Dt(a,d,g){for(const v in a)d.call(g,a[v],v,a)}function We(a,d){for(const g in a)d.call(void 0,a[g],g,a)}function pt(a){const d={};for(const g in a)d[g]=a[g];return d}const Re="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function rn(a,d){let g,v;for(let B=1;B<arguments.length;B++){v=arguments[B];for(g in v)a[g]=v[g];for(let j=0;j<Re.length;j++)g=Re[j],Object.prototype.hasOwnProperty.call(v,g)&&(a[g]=v[g])}}function Jt(a){this.src=a,this.g={},this.h=0}Jt.prototype.add=function(a,d,g,v,B){const j=a.toString();a=this.g[j],a||(a=this.g[j]=[],this.h++);const te=gt(a,d,v,B);return te>-1?(d=a[te],g||(d.fa=!1)):(d=new Ve(d,this.src,j,!!v,B),d.fa=g,a.push(d)),d};function Xt(a,d){const g=d.type;if(g in a.g){var v=a.g[g],B=Array.prototype.indexOf.call(v,d,void 0),j;(j=B>=0)&&Array.prototype.splice.call(v,B,1),j&&(Te(d),a.g[g].length==0&&(delete a.g[g],a.h--))}}function gt(a,d,g,v){for(let B=0;B<a.length;++B){const j=a[B];if(!j.da&&j.listener==d&&j.capture==!!g&&j.ha==v)return B}return-1}var K="closure_lm_"+(Math.random()*1e6|0),oe={};function se(a,d,g,v,B){if(Array.isArray(d)){for(let j=0;j<d.length;j++)se(a,d[j],g,v,B);return null}return g=ne(g),a&&a[Ct]?a.J(d,g,l(v)?!!v.capture:!1,B):he(a,d,g,!1,v,B)}function he(a,d,g,v,B,j){if(!d)throw Error("Invalid event type");const te=l(B)?!!B.capture:!!B;let Se=W(a);if(Se||(a[K]=Se=new Jt(a)),g=Se.add(d,g,v,te,j),g.proxy)return g;if(v=fe(),g.proxy=v,v.src=a,v.listener=g,a.addEventListener)O||(B=te),B===void 0&&(B=!1),a.addEventListener(d.toString(),v,B);else if(a.attachEvent)a.attachEvent(M(d.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return g}function fe(){function a(g){return d.call(a.src,a.listener,g)}const d=z;return a}function y(a,d,g,v,B){if(Array.isArray(d))for(var j=0;j<d.length;j++)y(a,d[j],g,v,B);else v=l(v)?!!v.capture:!!v,g=ne(g),a&&a[Ct]?(a=a.i,j=String(d).toString(),j in a.g&&(d=a.g[j],g=gt(d,g,v,B),g>-1&&(Te(d[g]),Array.prototype.splice.call(d,g,1),d.length==0&&(delete a.g[j],a.h--)))):a&&(a=W(a))&&(d=a.g[d.toString()],a=-1,d&&(a=gt(d,g,v,B)),(g=a>-1?d[a]:null)&&b(g))}function b(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[Ct])Xt(d.i,a);else{var g=a.type,v=a.proxy;d.removeEventListener?d.removeEventListener(g,v,a.capture):d.detachEvent?d.detachEvent(M(g),v):d.addListener&&d.removeListener&&d.removeListener(v),(g=W(d))?(Xt(g,a),g.h==0&&(g.src=null,d[K]=null)):Te(a)}}}function M(a){return a in oe?oe[a]:oe[a]="on"+a}function z(a,d){if(a.da)a=!0;else{d=new Oe(d,this);const g=a.listener,v=a.ha||a.src;a.fa&&b(a),a=g.call(v,d)}return a}function W(a){return a=a[K],a instanceof Jt?a:null}var q="__closure_events_fn_"+(Math.random()*1e9>>>0);function ne(a){return typeof a=="function"?a:(a[q]||(a[q]=function(d){return a.handleEvent(d)}),a[q])}function Z(){D.call(this),this.i=new Jt(this),this.M=this,this.G=null}p(Z,D),Z.prototype[Ct]=!0,Z.prototype.removeEventListener=function(a,d,g,v){y(this,a,d,g,v)};function P(a,d){var g,v=a.G;if(v)for(g=[];v;v=v.G)g.push(v);if(a=a.M,v=d.type||d,typeof d=="string")d=new k(d,a);else if(d instanceof k)d.target=d.target||a;else{var B=d;d=new k(v,a),rn(d,B)}B=!0;let j,te;if(g)for(te=g.length-1;te>=0;te--)j=d.g=g[te],B=A(j,v,!0,d)&&B;if(j=d.g=a,B=A(j,v,!0,d)&&B,B=A(j,v,!1,d)&&B,g)for(te=0;te<g.length;te++)j=d.g=g[te],B=A(j,v,!1,d)&&B}Z.prototype.N=function(){if(Z.Z.N.call(this),this.i){var a=this.i;for(const d in a.g){const g=a.g[d];for(let v=0;v<g.length;v++)Te(g[v]);delete a.g[d],a.h--}}this.G=null},Z.prototype.J=function(a,d,g,v){return this.i.add(String(a),d,!1,g,v)},Z.prototype.K=function(a,d,g,v){return this.i.add(String(a),d,!0,g,v)};function A(a,d,g,v){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();let B=!0;for(let j=0;j<d.length;++j){const te=d[j];if(te&&!te.da&&te.capture==g){const Se=te.listener,_t=te.ha||te.src;te.fa&&Xt(a.i,te),B=Se.call(_t,v)!==!1&&B}}return B&&!v.defaultPrevented}function N(a,d){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(d)>2147483647?-1:o.setTimeout(a,d||0)}function Q(a){a.g=N(()=>{a.g=null,a.i&&(a.i=!1,Q(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class J extends D{constructor(d,g){super(),this.m=d,this.l=g,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Q(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ee(a){D.call(this),this.h=a,this.g={}}p(ee,D);var ie=[];function le(a){Dt(a.g,function(d,g){this.g.hasOwnProperty(g)&&b(d)},a),a.g={}}ee.prototype.N=function(){ee.Z.N.call(this),le(this)},ee.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ce=o.JSON.stringify,ge=o.JSON.parse,Pe=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Ye(){}function Je(){}var Ge={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Xe(){k.call(this,"d")}p(Xe,k);function Le(){k.call(this,"c")}p(Le,k);var ke={},it=null;function xt(){return it=it||new Z}ke.Ia="serverreachability";function fn(a){k.call(this,ke.Ia,a)}p(fn,k);function Tn(a){const d=xt();P(d,new fn(d))}ke.STAT_EVENT="statevent";function Fs(a,d){k.call(this,ke.STAT_EVENT,a),this.stat=d}p(Fs,k);function mt(a){const d=xt();P(d,new Fs(d,a))}ke.Ja="timingevent";function ni(a,d){k.call(this,ke.Ja,a),this.size=d}p(ni,k);function ls(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},d)}function $s(){this.g=!0}$s.prototype.ua=function(){this.g=!1};function fy(a,d,g,v,B,j){a.info(function(){if(a.g)if(j){var te="",Se=j.split("&");for(let qe=0;qe<Se.length;qe++){var _t=Se[qe].split("=");if(_t.length>1){const wt=_t[0];_t=_t[1];const bn=wt.split("_");te=bn.length>=2&&bn[1]=="type"?te+(wt+"="+_t+"&"):te+(wt+"=redacted&")}}}else te=null;else te=j;return"XMLHTTP REQ ("+v+") [attempt "+B+"]: "+d+`
`+g+`
`+te})}function py(a,d,g,v,B,j,te){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+B+"]: "+d+`
`+g+`
`+j+" "+te})}function mr(a,d,g,v){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+my(a,g)+(v?" "+v:"")})}function gy(a,d){a.info(function(){return"TIMEOUT: "+d})}$s.prototype.info=function(){};function my(a,d){if(!a.g)return d;if(!d)return null;try{const j=JSON.parse(d);if(j){for(a=0;a<j.length;a++)if(Array.isArray(j[a])){var g=j[a];if(!(g.length<2)){var v=g[1];if(Array.isArray(v)&&!(v.length<1)){var B=v[0];if(B!="noop"&&B!="stop"&&B!="close")for(let te=1;te<v.length;te++)v[te]=""}}}}return ce(j)}catch{return d}}var mo={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Mh={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Oh;function ll(){}p(ll,Ye),ll.prototype.g=function(){return new XMLHttpRequest},Oh=new ll;function si(a){return encodeURIComponent(String(a))}function _y(a){var d=1;a=a.split(":");const g=[];for(;d>0&&a.length;)g.push(a.shift()),d--;return a.length&&g.push(a.join(":")),g}function cs(a,d,g,v){this.j=a,this.i=d,this.l=g,this.S=v||1,this.V=new ee(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Vh}function Vh(){this.i=null,this.g="",this.h=!1}var Lh={},cl={};function ul(a,d,g){a.M=1,a.A=vo(Cn(d)),a.u=g,a.R=!0,Bh(a,null)}function Bh(a,d){a.F=Date.now(),_o(a),a.B=Cn(a.A);var g=a.B,v=a.S;Array.isArray(v)||(v=[String(v)]),Jh(g.i,"t",v),a.C=0,g=a.j.L,a.h=new Vh,a.g=gd(a.j,g?d:null,!a.u),a.P>0&&(a.O=new J(u(a.Y,a,a.g),a.P)),d=a.V,g=a.g,v=a.ba;var B="readystatechange";Array.isArray(B)||(B&&(ie[0]=B.toString()),B=ie);for(let j=0;j<B.length;j++){const te=se(g,B[j],v||d.handleEvent,!1,d.h||d);if(!te)break;d.g[te.key]=te}d=a.J?pt(a.J):{},a.u?(a.v||(a.v="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,d)):(a.v="GET",a.g.ea(a.B,a.v,null,d)),Tn(),fy(a.i,a.v,a.B,a.l,a.S,a.u)}cs.prototype.ba=function(a){a=a.target;const d=this.O;d&&ds(a)==3?d.j():this.Y(a)},cs.prototype.Y=function(a){try{if(a==this.g)e:{const Se=ds(this.g),_t=this.g.ya(),qe=this.g.ca();if(!(Se<3)&&(Se!=3||this.g&&(this.h.h||this.g.la()||rd(this.g)))){this.K||Se!=4||_t==7||(_t==8||qe<=0?Tn(3):Tn(2)),hl(this);var d=this.g.ca();this.X=d;var g=vy(this);if(this.o=d==200,py(this.i,this.v,this.B,this.l,this.S,Se,d),this.o){if(this.U&&!this.L){t:{if(this.g){var v,B=this.g;if((v=B.g?B.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(v)){var j=v;break t}}j=null}if(a=j)mr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,dl(this,a);else{this.o=!1,this.m=3,mt(12),Hs(this),ri(this);break e}}if(this.R){a=!0;let wt;for(;!this.K&&this.C<g.length;)if(wt=yy(this,g),wt==cl){Se==4&&(this.m=4,mt(14),a=!1),mr(this.i,this.l,null,"[Incomplete Response]");break}else if(wt==Lh){this.m=4,mt(15),mr(this.i,this.l,g,"[Invalid Chunk]"),a=!1;break}else mr(this.i,this.l,wt,null),dl(this,wt);if(Uh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Se!=4||g.length!=0||this.h.h||(this.m=1,mt(16),a=!1),this.o=this.o&&a,!a)mr(this.i,this.l,g,"[Invalid Chunked Response]"),Hs(this),ri(this);else if(g.length>0&&!this.W){this.W=!0;var te=this.j;te.g==this&&te.aa&&!te.P&&(te.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),Al(te),te.P=!0,mt(11))}}else mr(this.i,this.l,g,null),dl(this,g);Se==4&&Hs(this),this.o&&!this.K&&(Se==4?hd(this.j,this):(this.o=!1,_o(this)))}else Ny(this.g),d==400&&g.indexOf("Unknown SID")>0?(this.m=3,mt(12)):(this.m=0,mt(13)),Hs(this),ri(this)}}}catch{}finally{}};function vy(a){if(!Uh(a))return a.g.la();const d=rd(a.g);if(d==="")return"";let g="";const v=d.length,B=ds(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Hs(a),ri(a),"";a.h.i=new o.TextDecoder}for(let j=0;j<v;j++)a.h.h=!0,g+=a.h.i.decode(d[j],{stream:!(B&&j==v-1)});return d.length=0,a.h.g+=g,a.C=0,a.h.g}function Uh(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function yy(a,d){var g=a.C,v=d.indexOf(`
`,g);return v==-1?cl:(g=Number(d.substring(g,v)),isNaN(g)?Lh:(v+=1,v+g>d.length?cl:(d=d.slice(v,v+g),a.C=v+g,d)))}cs.prototype.cancel=function(){this.K=!0,Hs(this)};function _o(a){a.T=Date.now()+a.H,Fh(a,a.H)}function Fh(a,d){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ls(u(a.aa,a),d)}function hl(a){a.D&&(o.clearTimeout(a.D),a.D=null)}cs.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(gy(this.i,this.B),this.M!=2&&(Tn(),mt(17)),Hs(this),this.m=2,ri(this)):Fh(this,this.T-a)};function ri(a){a.j.I==0||a.K||hd(a.j,a)}function Hs(a){hl(a);var d=a.O;d&&typeof d.dispose=="function"&&d.dispose(),a.O=null,le(a.V),a.g&&(d=a.g,a.g=null,d.abort(),d.dispose())}function dl(a,d){try{var g=a.j;if(g.I!=0&&(g.g==a||fl(g.h,a))){if(!a.L&&fl(g.h,a)&&g.I==3){try{var v=g.Ba.g.parse(d)}catch{v=null}if(Array.isArray(v)&&v.length==3){var B=v;if(B[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<a.F)Eo(g),Io(g);else break e;yl(g),mt(18)}}else g.xa=B[1],0<g.xa-g.K&&B[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=ls(u(g.Va,g),6e3));jh(g.h)<=1&&g.ta&&(g.ta=void 0)}else Gs(g,11)}else if((a.L||g.g==a)&&Eo(g),!w(d))for(B=g.Ba.g.parse(d),d=0;d<B.length;d++){let qe=B[d];const wt=qe[0];if(!(wt<=g.K))if(g.K=wt,qe=qe[1],g.I==2)if(qe[0]=="c"){g.M=qe[1],g.ba=qe[2];const bn=qe[3];bn!=null&&(g.ka=bn,g.j.info("VER="+g.ka));const qs=qe[4];qs!=null&&(g.za=qs,g.j.info("SVER="+g.za));const fs=qe[5];fs!=null&&typeof fs=="number"&&fs>0&&(v=1.5*fs,g.O=v,g.j.info("backChannelRequestTimeoutMs_="+v)),v=g;const ps=a.g;if(ps){const Co=ps.g?ps.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Co){var j=v.h;j.g||Co.indexOf("spdy")==-1&&Co.indexOf("quic")==-1&&Co.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(pl(j,j.h),j.h=null))}if(v.G){const Il=ps.g?ps.g.getResponseHeader("X-HTTP-Session-Id"):null;Il&&(v.wa=Il,Ze(v.J,v.G,Il))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-a.F,g.j.info("Handshake RTT: "+g.T+"ms")),v=g;var te=a;if(v.na=pd(v,v.L?v.ba:null,v.W),te.L){Gh(v.h,te);var Se=te,_t=v.O;_t&&(Se.H=_t),Se.D&&(hl(Se),_o(Se)),v.g=te}else cd(v);g.i.length>0&&wo(g)}else qe[0]!="stop"&&qe[0]!="close"||Gs(g,7);else g.I==3&&(qe[0]=="stop"||qe[0]=="close"?qe[0]=="stop"?Gs(g,7):vl(g):qe[0]!="noop"&&g.l&&g.l.qa(qe),g.A=0)}}Tn(4)}catch{}}var Ay=class{constructor(a,d){this.g=a,this.map=d}};function $h(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Hh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function jh(a){return a.h?1:a.g?a.g.size:0}function fl(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function pl(a,d){a.g?a.g.add(d):a.h=d}function Gh(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}$h.prototype.cancel=function(){if(this.i=qh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function qh(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const g of a.g.values())d=d.concat(g.G);return d}return _(a.i)}var Qh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Iy(a,d){if(a){a=a.split("&");for(let g=0;g<a.length;g++){const v=a[g].indexOf("=");let B,j=null;v>=0?(B=a[g].substring(0,v),j=a[g].substring(v+1)):B=a[g],d(B,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function us(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let d;a instanceof us?(this.l=a.l,ii(this,a.j),this.o=a.o,this.g=a.g,oi(this,a.u),this.h=a.h,gl(this,Xh(a.i)),this.m=a.m):a&&(d=String(a).match(Qh))?(this.l=!1,ii(this,d[1]||"",!0),this.o=ai(d[2]||""),this.g=ai(d[3]||"",!0),oi(this,d[4]),this.h=ai(d[5]||"",!0),gl(this,d[6]||"",!0),this.m=ai(d[7]||"")):(this.l=!1,this.i=new ci(null,this.l))}us.prototype.toString=function(){const a=[];var d=this.j;d&&a.push(li(d,zh,!0),":");var g=this.g;return(g||d=="file")&&(a.push("//"),(d=this.o)&&a.push(li(d,zh,!0),"@"),a.push(si(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&a.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&a.push("/"),a.push(li(g,g.charAt(0)=="/"?Ty:Ey,!0))),(g=this.i.toString())&&a.push("?",g),(g=this.m)&&a.push("#",li(g,by)),a.join("")},us.prototype.resolve=function(a){const d=Cn(this);let g=!!a.j;g?ii(d,a.j):g=!!a.o,g?d.o=a.o:g=!!a.g,g?d.g=a.g:g=a.u!=null;var v=a.h;if(g)oi(d,a.u);else if(g=!!a.h){if(v.charAt(0)!="/")if(this.g&&!this.h)v="/"+v;else{var B=d.h.lastIndexOf("/");B!=-1&&(v=d.h.slice(0,B+1)+v)}if(B=v,B==".."||B==".")v="";else if(B.indexOf("./")!=-1||B.indexOf("/.")!=-1){v=B.lastIndexOf("/",0)==0,B=B.split("/");const j=[];for(let te=0;te<B.length;){const Se=B[te++];Se=="."?v&&te==B.length&&j.push(""):Se==".."?((j.length>1||j.length==1&&j[0]!="")&&j.pop(),v&&te==B.length&&j.push("")):(j.push(Se),v=!0)}v=j.join("/")}else v=B}return g?d.h=v:g=a.i.toString()!=="",g?gl(d,Xh(a.i)):g=!!a.m,g&&(d.m=a.m),d};function Cn(a){return new us(a)}function ii(a,d,g){a.j=g?ai(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function oi(a,d){if(d){if(d=Number(d),isNaN(d)||d<0)throw Error("Bad port number "+d);a.u=d}else a.u=null}function gl(a,d,g){d instanceof ci?(a.i=d,Sy(a.i,a.l)):(g||(d=li(d,Cy)),a.i=new ci(d,a.l))}function Ze(a,d,g){a.i.set(d,g)}function vo(a){return Ze(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function ai(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function li(a,d,g){return typeof a=="string"?(a=encodeURI(a).replace(d,wy),g&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function wy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var zh=/[#\/\?@]/g,Ey=/[#\?:]/g,Ty=/[#\?]/g,Cy=/[#\?@]/g,by=/#/g;function ci(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function js(a){a.g||(a.g=new Map,a.h=0,a.i&&Iy(a.i,function(d,g){a.add(decodeURIComponent(d.replace(/\+/g," ")),g)}))}t=ci.prototype,t.add=function(a,d){js(this),this.i=null,a=_r(this,a);let g=this.g.get(a);return g||this.g.set(a,g=[]),g.push(d),this.h+=1,this};function Wh(a,d){js(a),d=_r(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function Kh(a,d){return js(a),d=_r(a,d),a.g.has(d)}t.forEach=function(a,d){js(this),this.g.forEach(function(g,v){g.forEach(function(B){a.call(d,B,v,this)},this)},this)};function Yh(a,d){js(a);let g=[];if(typeof d=="string")Kh(a,d)&&(g=g.concat(a.g.get(_r(a,d))));else for(a=Array.from(a.g.values()),d=0;d<a.length;d++)g=g.concat(a[d]);return g}t.set=function(a,d){return js(this),this.i=null,a=_r(this,a),Kh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=Yh(this,a),a.length>0?String(a[0]):d):d};function Jh(a,d,g){Wh(a,d),g.length>0&&(a.i=null,a.g.set(_r(a,d),_(g)),a.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(let v=0;v<d.length;v++){var g=d[v];const B=si(g);g=Yh(this,g);for(let j=0;j<g.length;j++){let te=B;g[j]!==""&&(te+="="+si(g[j])),a.push(te)}}return this.i=a.join("&")};function Xh(a){const d=new ci;return d.i=a.i,a.g&&(d.g=new Map(a.g),d.h=a.h),d}function _r(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function Sy(a,d){d&&!a.j&&(js(a),a.i=null,a.g.forEach(function(g,v){const B=v.toLowerCase();v!=B&&(Wh(this,v),Jh(this,B,g))},a)),a.j=d}function Ry(a,d){const g=new $s;if(o.Image){const v=new Image;v.onload=f(hs,g,"TestLoadImage: loaded",!0,d,v),v.onerror=f(hs,g,"TestLoadImage: error",!1,d,v),v.onabort=f(hs,g,"TestLoadImage: abort",!1,d,v),v.ontimeout=f(hs,g,"TestLoadImage: timeout",!1,d,v),o.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else d(!1)}function Py(a,d){const g=new $s,v=new AbortController,B=setTimeout(()=>{v.abort(),hs(g,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:v.signal}).then(j=>{clearTimeout(B),j.ok?hs(g,"TestPingServer: ok",!0,d):hs(g,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(B),hs(g,"TestPingServer: error",!1,d)})}function hs(a,d,g,v,B){try{B&&(B.onload=null,B.onerror=null,B.onabort=null,B.ontimeout=null),v(g)}catch{}}function ky(){this.g=new Pe}function ml(a){this.i=a.Sb||null,this.h=a.ab||!1}p(ml,Ye),ml.prototype.g=function(){return new yo(this.i,this.h)};function yo(a,d){Z.call(this),this.H=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(yo,Z),t=yo.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=d,this.readyState=1,hi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const d={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(d.body=a),(this.H||o).fetch(new Request(this.D,d)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ui(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,hi(this)),this.g&&(this.readyState=3,hi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Zh(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Zh(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.B.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?ui(this):hi(this),this.readyState==3&&Zh(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,ui(this))},t.Na=function(a){this.g&&(this.response=a,ui(this))},t.ga=function(){this.g&&ui(this)};function ui(a){a.readyState=4,a.l=null,a.j=null,a.B=null,hi(a)}t.setRequestHeader=function(a,d){this.A.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var g=d.next();!g.done;)g=g.value,a.push(g[0]+": "+g[1]),g=d.next();return a.join(`\r
`)};function hi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(yo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ed(a){let d="";return Dt(a,function(g,v){d+=v,d+=":",d+=g,d+=`\r
`}),d}function _l(a,d,g){e:{for(v in g){var v=!1;break e}v=!0}v||(g=ed(g),typeof a=="string"?g!=null&&si(g):Ze(a,d,g))}function ot(a){Z.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(ot,Z);var Dy=/^https?$/i,xy=["POST","PUT"];t=ot.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,d,g,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Oh.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(j){td(this,j);return}if(a=g||"",g=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var B in v)g.set(B,v[B]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const j of v.keys())g.set(j,v.get(j));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(g.keys()).find(j=>j.toLowerCase()=="content-type"),B=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(xy,d,void 0)>=0)||v||B||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,te]of g)this.g.setRequestHeader(j,te);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(j){td(this,j)}};function td(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.o=5,nd(a),Ao(a)}function nd(a){a.A||(a.A=!0,P(a,"complete"),P(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,P(this,"complete"),P(this,"abort"),Ao(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ao(this,!0)),ot.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?sd(this):this.Xa())},t.Xa=function(){sd(this)};function sd(a){if(a.h&&typeof i<"u"){if(a.v&&ds(a)==4)setTimeout(a.Ca.bind(a),0);else if(P(a,"readystatechange"),ds(a)==4){a.h=!1;try{const j=a.ca();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var g;if(!(g=d)){var v;if(v=j===0){let te=String(a.D).match(Qh)[1]||null;!te&&o.self&&o.self.location&&(te=o.self.location.protocol.slice(0,-1)),v=!Dy.test(te?te.toLowerCase():"")}g=v}if(g)P(a,"complete"),P(a,"success");else{a.o=6;try{var B=ds(a)>2?a.g.statusText:""}catch{B=""}a.l=B+" ["+a.ca()+"]",nd(a)}}finally{Ao(a)}}}}function Ao(a,d){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const g=a.g;a.g=null,d||P(a,"ready");try{g.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function ds(a){return a.g?a.g.readyState:0}t.ca=function(){try{return ds(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),ge(d)}};function rd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Ny(a){const d={};a=(a.g&&ds(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(w(a[v]))continue;var g=_y(a[v]);const B=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const j=d[B]||[];d[B]=j,j.push(g)}We(d,function(v){return v.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function di(a,d,g){return g&&g.internalChannelParams&&g.internalChannelParams[a]||d}function id(a){this.za=0,this.i=[],this.j=new $s,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=di("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=di("baseRetryDelayMs",5e3,a),this.Za=di("retryDelaySeedMs",1e4,a),this.Ta=di("forwardChannelMaxRetries",2,a),this.va=di("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new $h(a&&a.concurrentRequestLimit),this.Ba=new ky,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=id.prototype,t.ka=8,t.I=1,t.connect=function(a,d,g,v){mt(0),this.W=a,this.H=d||{},g&&v!==void 0&&(this.H.OSID=g,this.H.OAID=v),this.F=this.X,this.J=pd(this,null,this.W),wo(this)};function vl(a){if(od(a),a.I==3){var d=a.V++,g=Cn(a.J);if(Ze(g,"SID",a.M),Ze(g,"RID",d),Ze(g,"TYPE","terminate"),fi(a,g),d=new cs(a,a.j,d),d.M=2,d.A=vo(Cn(g)),g=!1,o.navigator&&o.navigator.sendBeacon)try{g=o.navigator.sendBeacon(d.A.toString(),"")}catch{}!g&&o.Image&&(new Image().src=d.A,g=!0),g||(d.g=gd(d.j,null),d.g.ea(d.A)),d.F=Date.now(),_o(d)}fd(a)}function Io(a){a.g&&(Al(a),a.g.cancel(),a.g=null)}function od(a){Io(a),a.v&&(o.clearTimeout(a.v),a.v=null),Eo(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function wo(a){if(!Hh(a.h)&&!a.m){a.m=!0;var d=a.Ea;re||C(),we||(re(),we=!0),R.add(d,a),a.D=0}}function My(a,d){return jh(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=d.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ls(u(a.Ea,a,d),dd(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const B=new cs(this,this.j,a);let j=this.o;if(this.U&&(j?(j=pt(j),rn(j,this.U)):j=this.U),this.u!==null||this.R||(B.J=j,j=null),this.S)e:{for(var d=0,g=0;g<this.i.length;g++){t:{var v=this.i[g];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(d+=v,d>4096){d=g;break e}if(d===4096||g===this.i.length-1){d=g+1;break e}}d=1e3}else d=1e3;d=ld(this,B,d),g=Cn(this.J),Ze(g,"RID",a),Ze(g,"CVER",22),this.G&&Ze(g,"X-HTTP-Session-Id",this.G),fi(this,g),j&&(this.R?d="headers="+si(ed(j))+"&"+d:this.u&&_l(g,this.u,j)),pl(this.h,B),this.Ra&&Ze(g,"TYPE","init"),this.S?(Ze(g,"$req",d),Ze(g,"SID","null"),B.U=!0,ul(B,g,null)):ul(B,g,d),this.I=2}}else this.I==3&&(a?ad(this,a):this.i.length==0||Hh(this.h)||ad(this))};function ad(a,d){var g;d?g=d.l:g=a.V++;const v=Cn(a.J);Ze(v,"SID",a.M),Ze(v,"RID",g),Ze(v,"AID",a.K),fi(a,v),a.u&&a.o&&_l(v,a.u,a.o),g=new cs(a,a.j,g,a.D+1),a.u===null&&(g.J=a.o),d&&(a.i=d.G.concat(a.i)),d=ld(a,g,1e3),g.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),pl(a.h,g),ul(g,v,d)}function fi(a,d){a.H&&Dt(a.H,function(g,v){Ze(d,v,g)}),a.l&&Dt({},function(g,v){Ze(d,v,g)})}function ld(a,d,g){g=Math.min(a.i.length,g);const v=a.l?u(a.l.Ka,a.l,a):null;e:{var B=a.i;let Se=-1;for(;;){const _t=["count="+g];Se==-1?g>0?(Se=B[0].g,_t.push("ofs="+Se)):Se=0:_t.push("ofs="+Se);let qe=!0;for(let wt=0;wt<g;wt++){var j=B[wt].g;const bn=B[wt].map;if(j-=Se,j<0)Se=Math.max(0,B[wt].g-100),qe=!1;else try{j="req"+j+"_"||"";try{var te=bn instanceof Map?bn:Object.entries(bn);for(const[qs,fs]of te){let ps=fs;l(fs)&&(ps=ce(fs)),_t.push(j+qs+"="+encodeURIComponent(ps))}}catch(qs){throw _t.push(j+"type="+encodeURIComponent("_badmap")),qs}}catch{v&&v(bn)}}if(qe){te=_t.join("&");break e}}te=void 0}return a=a.i.splice(0,g),d.G=a,te}function cd(a){if(!a.g&&!a.v){a.Y=1;var d=a.Da;re||C(),we||(re(),we=!0),R.add(d,a),a.A=0}}function yl(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ls(u(a.Da,a),dd(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,ud(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ls(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,mt(10),Io(this),ud(this))};function Al(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function ud(a){a.g=new cs(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var d=Cn(a.na);Ze(d,"RID","rpc"),Ze(d,"SID",a.M),Ze(d,"AID",a.K),Ze(d,"CI",a.F?"0":"1"),!a.F&&a.ia&&Ze(d,"TO",a.ia),Ze(d,"TYPE","xmlhttp"),fi(a,d),a.u&&a.o&&_l(d,a.u,a.o),a.O&&(a.g.H=a.O);var g=a.g;a=a.ba,g.M=1,g.A=vo(Cn(d)),g.u=null,g.R=!0,Bh(g,a)}t.Va=function(){this.C!=null&&(this.C=null,Io(this),yl(this),mt(19))};function Eo(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function hd(a,d){var g=null;if(a.g==d){Eo(a),Al(a),a.g=null;var v=2}else if(fl(a.h,d))g=d.G,Gh(a.h,d),v=1;else return;if(a.I!=0){if(d.o)if(v==1){g=d.u?d.u.length:0,d=Date.now()-d.F;var B=a.D;v=xt(),P(v,new ni(v,g)),wo(a)}else cd(a);else if(B=d.m,B==3||B==0&&d.X>0||!(v==1&&My(a,d)||v==2&&yl(a)))switch(g&&g.length>0&&(d=a.h,d.i=d.i.concat(g)),B){case 1:Gs(a,5);break;case 4:Gs(a,10);break;case 3:Gs(a,6);break;default:Gs(a,2)}}}function dd(a,d){let g=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(g*=2),g*d}function Gs(a,d){if(a.j.info("Error code "+d),d==2){var g=u(a.bb,a),v=a.Ua;const B=!v;v=new us(v||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||ii(v,"https"),vo(v),B?Ry(v.toString(),g):Py(v.toString(),g)}else mt(2);a.I=0,a.l&&a.l.pa(d),fd(a),od(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function fd(a){if(a.I=0,a.ja=[],a.l){const d=qh(a.h);(d.length!=0||a.i.length!=0)&&(E(a.ja,d),E(a.ja,a.i),a.h.i.length=0,_(a.i),a.i.length=0),a.l.oa()}}function pd(a,d,g){var v=g instanceof us?Cn(g):new us(g);if(v.g!="")d&&(v.g=d+"."+v.g),oi(v,v.u);else{var B=o.location;v=B.protocol,d=d?d+"."+B.hostname:B.hostname,B=+B.port;const j=new us(null);v&&ii(j,v),d&&(j.g=d),B&&oi(j,B),g&&(j.h=g),v=j}return g=a.G,d=a.wa,g&&d&&Ze(v,g,d),Ze(v,"VER",a.ka),fi(a,v),v}function gd(a,d,g){if(d&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Aa&&!a.ma?new ot(new ml({ab:g})):new ot(a.ma),d.Fa(a.L),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function md(){}t=md.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function To(){}To.prototype.g=function(a,d){return new Zt(a,d)};function Zt(a,d){Z.call(this),this.g=new id(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.sa&&(a?a["X-WebChannel-Client-Profile"]=d.sa:a={"X-WebChannel-Client-Profile":d.sa}),this.g.U=a,(a=d&&d.Qb)&&!w(a)&&(this.g.u=a),this.A=d&&d.supportsCrossDomainXhr||!1,this.v=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!w(d)&&(this.g.G=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new vr(this)}p(Zt,Z),Zt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Zt.prototype.close=function(){vl(this.g)},Zt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var g={};g.__data__=a,a=g}else this.v&&(g={},g.__data__=ce(a),a=g);d.i.push(new Ay(d.Ya++,a)),d.I==3&&wo(d)},Zt.prototype.N=function(){this.g.l=null,delete this.j,vl(this.g),delete this.g,Zt.Z.N.call(this)};function _d(a){Xe.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const g in d){a=g;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}p(_d,Xe);function vd(){Le.call(this),this.status=1}p(vd,Le);function vr(a){this.g=a}p(vr,md),vr.prototype.ra=function(){P(this.g,"a")},vr.prototype.qa=function(a){P(this.g,new _d(a))},vr.prototype.pa=function(a){P(this.g,new vd)},vr.prototype.oa=function(){P(this.g,"b")},To.prototype.createWebChannel=To.prototype.g,Zt.prototype.send=Zt.prototype.o,Zt.prototype.open=Zt.prototype.m,Zt.prototype.close=Zt.prototype.close,g_=function(){return new To},p_=function(){return xt()},f_=ke,yc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},mo.NO_ERROR=0,mo.TIMEOUT=8,mo.HTTP_ERROR=6,qo=mo,Mh.COMPLETE="complete",d_=Mh,Je.EventType=Ge,Ge.OPEN="a",Ge.CLOSE="b",Ge.ERROR="c",Ge.MESSAGE="d",Z.prototype.listen=Z.prototype.J,yi=Je,ot.prototype.listenOnce=ot.prototype.K,ot.prototype.getLastError=ot.prototype.Ha,ot.prototype.getLastErrorCode=ot.prototype.ya,ot.prototype.getStatus=ot.prototype.ca,ot.prototype.getResponseJson=ot.prototype.La,ot.prototype.getResponseText=ot.prototype.la,ot.prototype.send=ot.prototype.ea,ot.prototype.setWithCredentials=ot.prototype.Fa,h_=ot}).apply(typeof Do<"u"?Do:typeof self<"u"?self:typeof window<"u"?window:{});const jf="@firebase/firestore",Gf="4.9.2";/**
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
 */class Mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Mt.UNAUTHENTICATED=new Mt(null),Mt.GOOGLE_CREDENTIALS=new Mt("google-credentials-uid"),Mt.FIRST_PARTY=new Mt("first-party-uid"),Mt.MOCK_USER=new Mt("mock-user");/**
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
 */let Xr="12.3.0";/**
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
 */const ir=new Ga("@firebase/firestore");function wr(){return ir.logLevel}function ae(t,...e){if(ir.logLevel<=De.DEBUG){const n=e.map(pu);ir.debug(`Firestore (${Xr}): ${t}`,...n)}}function is(t,...e){if(ir.logLevel<=De.ERROR){const n=e.map(pu);ir.error(`Firestore (${Xr}): ${t}`,...n)}}function $r(t,...e){if(ir.logLevel<=De.WARN){const n=e.map(pu);ir.warn(`Firestore (${Xr}): ${t}`,...n)}}function pu(t){if(typeof t=="string")return t;try{/**
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
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
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
 */function _e(t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,m_(t,s,n)}function m_(t,e,n){let s=`FIRESTORE (${Xr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw is(s),new Error(s)}function He(t,e,n,s){let r="Unexpected state";typeof n=="string"?r=n:s=n,t||m_(e,r,s)}function Ie(t,e){return t}/**
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
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class de extends En{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ps{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
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
 */class __{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class oC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Mt.UNAUTHENTICATED)))}shutdown(){}}class aC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class lC{constructor(e){this.t=e,this.currentUser=Mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){He(this.o===void 0,42304);let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Ps;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ps,e.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await r(this.currentUser)}))},l=c=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ps)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(He(typeof s.accessToken=="string",31837,{l:s}),new __(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return He(e===null||typeof e=="string",2055,{h:e}),new Mt(e)}}class cC{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=Mt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class uC{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new cC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(Mt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class qf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,gn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){He(this.o===void 0,3512);const s=i=>{i.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ae("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>s(i)))};const r=i=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>r(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new qf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(He(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new qf(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function dC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class gu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=dC(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%62))}return s}}function xe(t,e){return t<e?-1:t>e?1:0}function Ac(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const r=t.charAt(s),i=e.charAt(s);if(r!==i)return Hl(r)===Hl(i)?xe(r,i):Hl(r)?1:-1}return xe(t.length,e.length)}const fC=55296,pC=57343;function Hl(t){const e=t.charCodeAt(0);return e>=fC&&e<=pC}function Hr(t,e,n){return t.length===e.length&&t.every(((s,r)=>n(s,e[r])))}/**
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
 */const Qf="__name__";class Pn{constructor(e,n,s){n===void 0?n=0:n>e.length&&_e(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&_e(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Pn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Pn?e.forEach((s=>{n.push(s)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=Pn.compareSegments(e.get(r),n.get(r));if(i!==0)return i}return xe(e.length,n.length)}static compareSegments(e,n){const s=Pn.isNumericId(e),r=Pn.isNumericId(n);return s&&!r?-1:!s&&r?1:s&&r?Pn.extractNumericId(e).compare(Pn.extractNumericId(n)):Ac(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Rs.fromString(e.substring(4,e.length-2))}}class tt extends Pn{construct(e,n,s){return new tt(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new de(X.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((r=>r.length>0)))}return new tt(n)}static emptyPath(){return new tt([])}}const gC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Rt extends Pn{construct(e,n,s){return new Rt(e,n,s)}static isValidIdentifier(e){return gC.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Rt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Qf}static keyField(){return new Rt([Qf])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new de(X.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new de(X.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new de(X.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else l==="`"?(o=!o,r++):l!=="."||o?(s+=l,r++):(i(),r++)}if(i(),o)throw new de(X.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Rt(n)}static emptyPath(){return new Rt([])}}/**
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
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(tt.fromString(e))}static fromName(e){return new pe(tt.fromString(e).popFirst(5))}static empty(){return new pe(tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&tt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return tt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new tt(e.slice()))}}/**
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
 */function mC(t,e,n){if(!n)throw new de(X.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function _C(t,e,n,s){if(e===!0&&s===!0)throw new de(X.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function zf(t){if(!pe.isDocumentKey(t))throw new de(X.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function v_(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function mu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":_e(12329,{type:typeof t})}function Wi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new de(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=mu(t);throw new de(X.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function ut(t,e){const n={typeString:t};return e&&(n.value=e),n}function uo(t,e){if(!v_(t))throw new de(X.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in t)){n=`JSON missing required field: '${s}'`;break}const o=t[s];if(r&&typeof o!==r){n=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${s}' field to equal '${i.value}'`;break}}if(n)throw new de(X.INVALID_ARGUMENT,n);return!0}/**
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
 */const Wf=-62135596800,Kf=1e6;class et{static now(){return et.fromMillis(Date.now())}static fromDate(e){return et.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*Kf);return new et(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new de(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new de(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Wf)throw new de(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new de(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Kf}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:et._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(uo(e,et._jsonSchema))return new et(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Wf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}et._jsonSchemaVersion="firestore/timestamp/1.0",et._jsonSchema={type:ut("string",et._jsonSchemaVersion),seconds:ut("number"),nanoseconds:ut("number")};/**
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
 */class ye{static fromTimestamp(e){return new ye(e)}static min(){return new ye(new et(0,0))}static max(){return new ye(new et(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ki=-1;function vC(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=ye.fromTimestamp(s===1e9?new et(n+1,0):new et(n,s));return new Ms(r,pe.empty(),e)}function yC(t){return new Ms(t.readTime,t.key,Ki)}class Ms{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Ms(ye.min(),pe.empty(),Ki)}static max(){return new Ms(ye.max(),pe.empty(),Ki)}}function AC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=pe.comparator(t.documentKey,e.documentKey),n!==0?n:xe(t.largestBatchId,e.largestBatchId))}/**
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
 */const IC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Zr(t){if(t.code!==X.FAILED_PRECONDITION||t.message!==IC)throw t;ae("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Y{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&_e(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new Y(((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof Y?n:Y.resolve(n)}catch(n){return Y.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):Y.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):Y.reject(n)}static resolve(e){return new Y(((n,s)=>{n(e)}))}static reject(e){return new Y(((n,s)=>{s(e)}))}static waitFor(e){return new Y(((n,s)=>{let r=0,i=0,o=!1;e.forEach((l=>{++r,l.next((()=>{++i,o&&i===r&&n()}),(c=>s(c)))})),o=!0,i===r&&n()}))}static or(e){let n=Y.resolve(!1);for(const s of e)n=n.next((r=>r?Y.resolve(r):s()));return n}static forEach(e,n){const s=[];return e.forEach(((r,i)=>{s.push(n.call(this,r,i))})),this.waitFor(s)}static mapArray(e,n){return new Y(((s,r)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next((f=>{o[u]=f,++l,l===i&&s(o)}),(f=>r(f)))}}))}static doWhile(e,n){return new Y(((s,r)=>{const i=()=>{e()===!0?n().next((()=>{i()}),r):s()};i()}))}}function EC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ei(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Wa{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Wa.ce=-1;/**
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
 */const _u=-1;function Ka(t){return t==null}function ma(t){return t===0&&1/t==-1/0}function TC(t){return typeof t=="number"&&Number.isInteger(t)&&!ma(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const y_="";function CC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Yf(e)),e=bC(t.get(n),e);return Yf(e)}function bC(t,e){let n=e;const s=t.length;for(let r=0;r<s;r++){const i=t.charAt(r);switch(i){case"\0":n+="";break;case y_:n+="";break;default:n+=i}}return n}function Yf(t){return t+y_+""}/**
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
 */function Jf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function dr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function A_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class st{constructor(e,n){this.comparator=e,this.root=n||bt.EMPTY}insert(e,n){return new st(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,bt.BLACK,null,null))}remove(e){return new st(this.comparator,this.root.remove(e,this.comparator).copy(null,null,bt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,s)=>(e(n,s),!1)))}toString(){const e=[];return this.inorderTraversal(((n,s)=>(e.push(`${n}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xo(this.root,e,this.comparator,!1)}getReverseIterator(){return new xo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xo(this.root,e,this.comparator,!0)}}class xo{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class bt{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??bt.RED,this.left=r??bt.EMPTY,this.right=i??bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new bt(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return bt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return bt.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _e(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _e(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw _e(27949);return e+(this.isRed()?0:1)}}bt.EMPTY=null,bt.RED=!0,bt.BLACK=!1;bt.EMPTY=new class{constructor(){this.size=0}get key(){throw _e(57766)}get value(){throw _e(16141)}get color(){throw _e(16727)}get left(){throw _e(29726)}get right(){throw _e(36894)}copy(e,n,s,r,i){return this}insert(e,n,s){return new bt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class It{constructor(e){this.comparator=e,this.data=new st(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,s)=>(e(n),!1)))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Xf(this.data.getIterator())}getIteratorFrom(e){return new Xf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((s=>{n=n.add(s)})),n}isEqual(e){if(!(e instanceof It)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new It(this.comparator);return n.data=e,n}}class Xf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class vn{constructor(e){this.fields=e,e.sort(Rt.comparator)}static empty(){return new vn([])}unionWith(e){let n=new It(Rt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new vn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Hr(this.fields,e.fields,((n,s)=>n.isEqual(s)))}}/**
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
 */class I_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class kt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new I_("Invalid base64 string: "+i):i}})(e);return new kt(n)}static fromUint8Array(e){const n=(function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i})(e);return new kt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}kt.EMPTY_BYTE_STRING=new kt("");const SC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Os(t){if(He(!!t,39018),typeof t=="string"){let e=0;const n=SC.exec(t);if(He(!!n,46558,{timestamp:t}),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:lt(t.seconds),nanos:lt(t.nanos)}}function lt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Vs(t){return typeof t=="string"?kt.fromBase64String(t):kt.fromUint8Array(t)}/**
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
 */const w_="server_timestamp",E_="__type__",T_="__previous_value__",C_="__local_write_time__";function vu(t){return(t?.mapValue?.fields||{})[E_]?.stringValue===w_}function Ya(t){const e=t.mapValue.fields[T_];return vu(e)?Ya(e):e}function Yi(t){const e=Os(t.mapValue.fields[C_].timestampValue);return new et(e.seconds,e.nanos)}/**
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
 */class RC{constructor(e,n,s,r,i,o,l,c,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=f}}const _a="(default)";class Ji{constructor(e,n){this.projectId=e,this.database=n||_a}static empty(){return new Ji("","")}get isDefaultDatabase(){return this.database===_a}isEqual(e){return e instanceof Ji&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const b_="__type__",PC="__max__",No={mapValue:{}},S_="__vector__",va="value";function Ls(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?vu(t)?4:DC(t)?9007199254740991:kC(t)?10:11:_e(28295,{value:t})}function Hn(t,e){if(t===e)return!0;const n=Ls(t);if(n!==Ls(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Yi(t).isEqual(Yi(e));case 3:return(function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=Os(r.timestampValue),l=Os(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(r,i){return Vs(r.bytesValue).isEqual(Vs(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(r,i){return lt(r.geoPointValue.latitude)===lt(i.geoPointValue.latitude)&&lt(r.geoPointValue.longitude)===lt(i.geoPointValue.longitude)})(t,e);case 2:return(function(r,i){if("integerValue"in r&&"integerValue"in i)return lt(r.integerValue)===lt(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=lt(r.doubleValue),l=lt(i.doubleValue);return o===l?ma(o)===ma(l):isNaN(o)&&isNaN(l)}return!1})(t,e);case 9:return Hr(t.arrayValue.values||[],e.arrayValue.values||[],Hn);case 10:case 11:return(function(r,i){const o=r.mapValue.fields||{},l=i.mapValue.fields||{};if(Jf(o)!==Jf(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Hn(o[c],l[c])))return!1;return!0})(t,e);default:return _e(52216,{left:t})}}function Xi(t,e){return(t.values||[]).find((n=>Hn(n,e)))!==void 0}function jr(t,e){if(t===e)return 0;const n=Ls(t),s=Ls(e);if(n!==s)return xe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return xe(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const l=lt(i.integerValue||i.doubleValue),c=lt(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(t,e);case 3:return Zf(t.timestampValue,e.timestampValue);case 4:return Zf(Yi(t),Yi(e));case 5:return Ac(t.stringValue,e.stringValue);case 6:return(function(i,o){const l=Vs(i),c=Vs(o);return l.compareTo(c)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=xe(l[u],c[u]);if(f!==0)return f}return xe(l.length,c.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const l=xe(lt(i.latitude),lt(o.latitude));return l!==0?l:xe(lt(i.longitude),lt(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return ep(t.arrayValue,e.arrayValue);case 10:return(function(i,o){const l=i.fields||{},c=o.fields||{},u=l[va]?.arrayValue,f=c[va]?.arrayValue,p=xe(u?.values?.length||0,f?.values?.length||0);return p!==0?p:ep(u,f)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===No.mapValue&&o===No.mapValue)return 0;if(i===No.mapValue)return 1;if(o===No.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const m=Ac(c[p],f[p]);if(m!==0)return m;const _=jr(l[c[p]],u[f[p]]);if(_!==0)return _}return xe(c.length,f.length)})(t.mapValue,e.mapValue);default:throw _e(23264,{he:n})}}function Zf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return xe(t,e);const n=Os(t),s=Os(e),r=xe(n.seconds,s.seconds);return r!==0?r:xe(n.nanos,s.nanos)}function ep(t,e){const n=t.values||[],s=e.values||[];for(let r=0;r<n.length&&r<s.length;++r){const i=jr(n[r],s[r]);if(i)return i}return xe(n.length,s.length)}function Gr(t){return Ic(t)}function Ic(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const s=Os(n);return`time(${s.seconds},${s.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Vs(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return pe.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let s="[",r=!0;for(const i of n.values||[])r?r=!1:s+=",",s+=Ic(i);return s+"]"})(t.arrayValue):"mapValue"in t?(function(n){const s=Object.keys(n.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${Ic(n.fields[o])}`;return r+"}"})(t.mapValue):_e(61005,{value:t})}function Qo(t){switch(Ls(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ya(t);return e?16+Qo(e):16;case 5:return 2*t.stringValue.length;case 6:return Vs(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((r,i)=>r+Qo(i)),0)})(t.arrayValue);case 10:case 11:return(function(s){let r=0;return dr(s.fields,((i,o)=>{r+=i.length+Qo(o)})),r})(t.mapValue);default:throw _e(13486,{value:t})}}function wc(t){return!!t&&"integerValue"in t}function yu(t){return!!t&&"arrayValue"in t}function tp(t){return!!t&&"nullValue"in t}function np(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function zo(t){return!!t&&"mapValue"in t}function kC(t){return(t?.mapValue?.fields||{})[b_]?.stringValue===S_}function Mi(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return dr(t.mapValue.fields,((n,s)=>e.mapValue.fields[n]=Mi(s))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Mi(t.arrayValue.values[n]);return e}return{...t}}function DC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===PC}/**
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
 */class an{constructor(e){this.value=e}static empty(){return new an({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!zo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Mi(n)}setAll(e){let n=Rt.emptyPath(),s={},r=[];e.forEach(((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=l.popLast()}o?s[l.lastSegment()]=Mi(o):r.push(l.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());zo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Hn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];zo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){dr(n,((r,i)=>e[r]=i));for(const r of s)delete e[r]}clone(){return new an(Mi(this.value))}}function R_(t){const e=[];return dr(t.fields,((n,s)=>{const r=new Rt([n]);if(zo(s)){const i=R_(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)})),new vn(e)}/**
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
 */class Vt{constructor(e,n,s,r,i,o,l){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Vt(e,0,ye.min(),ye.min(),ye.min(),an.empty(),0)}static newFoundDocument(e,n,s,r){return new Vt(e,1,n,ye.min(),s,r,0)}static newNoDocument(e,n){return new Vt(e,2,n,ye.min(),ye.min(),an.empty(),0)}static newUnknownDocument(e,n){return new Vt(e,3,n,ye.min(),ye.min(),an.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ye.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=an.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=an.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ye.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ya{constructor(e,n){this.position=e,this.inclusive=n}}function sp(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=pe.comparator(pe.fromName(o.referenceValue),n.key):s=jr(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function rp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Hn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Aa{constructor(e,n="asc"){this.field=e,this.dir=n}}function xC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class P_{}class At extends P_{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new MC(e,n,s):n==="array-contains"?new LC(e,s):n==="in"?new BC(e,s):n==="not-in"?new UC(e,s):n==="array-contains-any"?new FC(e,s):new At(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new OC(e,s):new VC(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(jr(n,this.value)):n!==null&&Ls(this.value)===Ls(n)&&this.matchesComparison(jr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jn extends P_{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new jn(e,n)}matches(e){return k_(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function k_(t){return t.op==="and"}function D_(t){return NC(t)&&k_(t)}function NC(t){for(const e of t.filters)if(e instanceof jn)return!1;return!0}function Ec(t){if(t instanceof At)return t.field.canonicalString()+t.op.toString()+Gr(t.value);if(D_(t))return t.filters.map((e=>Ec(e))).join(",");{const e=t.filters.map((n=>Ec(n))).join(",");return`${t.op}(${e})`}}function x_(t,e){return t instanceof At?(function(s,r){return r instanceof At&&s.op===r.op&&s.field.isEqual(r.field)&&Hn(s.value,r.value)})(t,e):t instanceof jn?(function(s,r){return r instanceof jn&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce(((i,o,l)=>i&&x_(o,r.filters[l])),!0):!1})(t,e):void _e(19439)}function N_(t){return t instanceof At?(function(n){return`${n.field.canonicalString()} ${n.op} ${Gr(n.value)}`})(t):t instanceof jn?(function(n){return n.op.toString()+" {"+n.getFilters().map(N_).join(" ,")+"}"})(t):"Filter"}class MC extends At{constructor(e,n,s){super(e,n,s),this.key=pe.fromName(s.referenceValue)}matches(e){const n=pe.comparator(e.key,this.key);return this.matchesComparison(n)}}class OC extends At{constructor(e,n){super(e,"in",n),this.keys=M_("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class VC extends At{constructor(e,n){super(e,"not-in",n),this.keys=M_("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function M_(t,e){return(e.arrayValue?.values||[]).map((n=>pe.fromName(n.referenceValue)))}class LC extends At{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return yu(n)&&Xi(n.arrayValue,this.value)}}class BC extends At{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Xi(this.value.arrayValue,n)}}class UC extends At{constructor(e,n){super(e,"not-in",n)}matches(e){if(Xi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Xi(this.value.arrayValue,n)}}class FC extends At{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!yu(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>Xi(this.value.arrayValue,s)))}}/**
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
 */class $C{constructor(e,n=null,s=[],r=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function ip(t,e=null,n=[],s=[],r=null,i=null,o=null){return new $C(t,e,n,s,r,i,o)}function Au(t){const e=Ie(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((s=>Ec(s))).join(","),n+="|ob:",n+=e.orderBy.map((s=>(function(i){return i.field.canonicalString()+i.dir})(s))).join(","),Ka(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>Gr(s))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>Gr(s))).join(",")),e.Te=n}return e.Te}function Iu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!xC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!x_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!rp(t.startAt,e.startAt)&&rp(t.endAt,e.endAt)}function Tc(t){return pe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ja{constructor(e,n=null,s=[],r=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function HC(t,e,n,s,r,i,o,l){return new Ja(t,e,n,s,r,i,o,l)}function wu(t){return new Ja(t)}function op(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function jC(t){return t.collectionGroup!==null}function Oi(t){const e=Ie(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new It(Rt.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((u=>{u.isInequality()&&(l=l.add(u.field))}))})),l})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Aa(i,s))})),n.has(Rt.keyField().canonicalString())||e.Ie.push(new Aa(Rt.keyField(),s))}return e.Ie}function Mn(t){const e=Ie(t);return e.Ee||(e.Ee=GC(e,Oi(t))),e.Ee}function GC(t,e){if(t.limitType==="F")return ip(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((r=>{const i=r.dir==="desc"?"asc":"desc";return new Aa(r.field,i)}));const n=t.endAt?new ya(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new ya(t.startAt.position,t.startAt.inclusive):null;return ip(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function Cc(t,e,n){return new Ja(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Xa(t,e){return Iu(Mn(t),Mn(e))&&t.limitType===e.limitType}function O_(t){return`${Au(Mn(t))}|lt:${t.limitType}`}function Er(t){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((r=>N_(r))).join(", ")}]`),Ka(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((r=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(r))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((r=>Gr(r))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((r=>Gr(r))).join(",")),`Target(${s})`})(Mn(t))}; limitType=${t.limitType})`}function Za(t,e){return e.isFoundDocument()&&(function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):pe.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)})(t,e)&&(function(s,r){for(const i of Oi(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0})(t,e)&&(function(s,r){return!(s.startAt&&!(function(o,l,c){const u=sp(o,l,c);return o.inclusive?u<=0:u<0})(s.startAt,Oi(s),r)||s.endAt&&!(function(o,l,c){const u=sp(o,l,c);return o.inclusive?u>=0:u>0})(s.endAt,Oi(s),r))})(t,e)}function qC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function V_(t){return(e,n)=>{let s=!1;for(const r of Oi(t)){const i=QC(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function QC(t,e,n){const s=t.field.isKeyField()?pe.comparator(e.key,n.key):(function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?jr(c,u):_e(42886)})(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return _e(19790,{direction:t.dir})}}/**
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
 */class fr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){dr(this.inner,((n,s)=>{for(const[r,i]of s)e(r,i)}))}isEmpty(){return A_(this.inner)}size(){return this.innerSize}}/**
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
 */const zC=new st(pe.comparator);function os(){return zC}const L_=new st(pe.comparator);function Ai(...t){let e=L_;for(const n of t)e=e.insert(n.key,n);return e}function B_(t){let e=L_;return t.forEach(((n,s)=>e=e.insert(n,s.overlayedDocument))),e}function Xs(){return Vi()}function U_(){return Vi()}function Vi(){return new fr((t=>t.toString()),((t,e)=>t.isEqual(e)))}const WC=new st(pe.comparator),KC=new It(pe.comparator);function Ne(...t){let e=KC;for(const n of t)e=e.add(n);return e}const YC=new It(xe);function JC(){return YC}/**
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
 */function Eu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ma(e)?"-0":e}}function F_(t){return{integerValue:""+t}}function XC(t,e){return TC(e)?F_(e):Eu(t,e)}/**
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
 */class el{constructor(){this._=void 0}}function ZC(t,e,n){return t instanceof Ia?(function(r,i){const o={fields:{[E_]:{stringValue:w_},[C_]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&vu(i)&&(i=Ya(i)),i&&(o.fields[T_]=i),{mapValue:o}})(n,e):t instanceof Zi?H_(t,e):t instanceof eo?j_(t,e):(function(r,i){const o=$_(r,i),l=ap(o)+ap(r.Ae);return wc(o)&&wc(r.Ae)?F_(l):Eu(r.serializer,l)})(t,e)}function eb(t,e,n){return t instanceof Zi?H_(t,e):t instanceof eo?j_(t,e):n}function $_(t,e){return t instanceof wa?(function(s){return wc(s)||(function(i){return!!i&&"doubleValue"in i})(s)})(e)?e:{integerValue:0}:null}class Ia extends el{}class Zi extends el{constructor(e){super(),this.elements=e}}function H_(t,e){const n=G_(e);for(const s of t.elements)n.some((r=>Hn(r,s)))||n.push(s);return{arrayValue:{values:n}}}class eo extends el{constructor(e){super(),this.elements=e}}function j_(t,e){let n=G_(e);for(const s of t.elements)n=n.filter((r=>!Hn(r,s)));return{arrayValue:{values:n}}}class wa extends el{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function ap(t){return lt(t.integerValue||t.doubleValue)}function G_(t){return yu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function tb(t,e){return t.field.isEqual(e.field)&&(function(s,r){return s instanceof Zi&&r instanceof Zi||s instanceof eo&&r instanceof eo?Hr(s.elements,r.elements,Hn):s instanceof wa&&r instanceof wa?Hn(s.Ae,r.Ae):s instanceof Ia&&r instanceof Ia})(t.transform,e.transform)}class nb{constructor(e,n){this.version=e,this.transformResults=n}}class es{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new es}static exists(e){return new es(void 0,e)}static updateTime(e){return new es(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class tl{}function q_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new z_(t.key,es.none()):new ho(t.key,t.data,es.none());{const n=t.data,s=an.empty();let r=new It(Rt.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new pr(t.key,s,new vn(r.toArray()),es.none())}}function sb(t,e,n){t instanceof ho?(function(r,i,o){const l=r.value.clone(),c=cp(r.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):t instanceof pr?(function(r,i,o){if(!Wo(r.precondition,i))return void i.convertToUnknownDocument(o.version);const l=cp(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Q_(r)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):(function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function Li(t,e,n,s){return t instanceof ho?(function(i,o,l,c){if(!Wo(i.precondition,o))return l;const u=i.value.clone(),f=up(i.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,s):t instanceof pr?(function(i,o,l,c){if(!Wo(i.precondition,o))return l;const u=up(i.fieldTransforms,c,o),f=o.data;return f.setAll(Q_(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,s):(function(i,o,l){return Wo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l})(t,e,n)}function rb(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=$_(s.transform,r||null);i!=null&&(n===null&&(n=an.empty()),n.set(s.field,i))}return n||null}function lp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Hr(s,r,((i,o)=>tb(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ho extends tl{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class pr extends tl{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Q_(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function cp(t,e,n){const s=new Map;He(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,l=e.data.field(i.field);s.set(i.field,eb(o,l,n[r]))}return s}function up(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,ZC(i,o,e))}return s}class z_ extends tl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ib extends tl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ob{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&sb(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Li(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Li(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=U_();return this.mutations.forEach((r=>{const i=e.get(r.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(r.key)?null:l;const c=q_(o,l);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(ye.min())})),s}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Ne())}isEqual(e){return this.batchId===e.batchId&&Hr(this.mutations,e.mutations,((n,s)=>lp(n,s)))&&Hr(this.baseMutations,e.baseMutations,((n,s)=>lp(n,s)))}}class Tu{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){He(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let r=(function(){return WC})();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Tu(e,n,s,r)}}/**
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
 */class ab{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class lb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ct,Me;function cb(t){switch(t){case X.OK:return _e(64938);case X.CANCELLED:case X.UNKNOWN:case X.DEADLINE_EXCEEDED:case X.RESOURCE_EXHAUSTED:case X.INTERNAL:case X.UNAVAILABLE:case X.UNAUTHENTICATED:return!1;case X.INVALID_ARGUMENT:case X.NOT_FOUND:case X.ALREADY_EXISTS:case X.PERMISSION_DENIED:case X.FAILED_PRECONDITION:case X.ABORTED:case X.OUT_OF_RANGE:case X.UNIMPLEMENTED:case X.DATA_LOSS:return!0;default:return _e(15467,{code:t})}}function W_(t){if(t===void 0)return is("GRPC error has no .code"),X.UNKNOWN;switch(t){case ct.OK:return X.OK;case ct.CANCELLED:return X.CANCELLED;case ct.UNKNOWN:return X.UNKNOWN;case ct.DEADLINE_EXCEEDED:return X.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return X.RESOURCE_EXHAUSTED;case ct.INTERNAL:return X.INTERNAL;case ct.UNAVAILABLE:return X.UNAVAILABLE;case ct.UNAUTHENTICATED:return X.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return X.INVALID_ARGUMENT;case ct.NOT_FOUND:return X.NOT_FOUND;case ct.ALREADY_EXISTS:return X.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return X.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return X.FAILED_PRECONDITION;case ct.ABORTED:return X.ABORTED;case ct.OUT_OF_RANGE:return X.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return X.UNIMPLEMENTED;case ct.DATA_LOSS:return X.DATA_LOSS;default:return _e(39323,{code:t})}}(Me=ct||(ct={}))[Me.OK=0]="OK",Me[Me.CANCELLED=1]="CANCELLED",Me[Me.UNKNOWN=2]="UNKNOWN",Me[Me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Me[Me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Me[Me.NOT_FOUND=5]="NOT_FOUND",Me[Me.ALREADY_EXISTS=6]="ALREADY_EXISTS",Me[Me.PERMISSION_DENIED=7]="PERMISSION_DENIED",Me[Me.UNAUTHENTICATED=16]="UNAUTHENTICATED",Me[Me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Me[Me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Me[Me.ABORTED=10]="ABORTED",Me[Me.OUT_OF_RANGE=11]="OUT_OF_RANGE",Me[Me.UNIMPLEMENTED=12]="UNIMPLEMENTED",Me[Me.INTERNAL=13]="INTERNAL",Me[Me.UNAVAILABLE=14]="UNAVAILABLE",Me[Me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function ub(){return new TextEncoder}/**
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
 */const hb=new Rs([4294967295,4294967295],0);function hp(t){const e=ub().encode(t),n=new u_;return n.update(e),new Uint8Array(n.digest())}function dp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Rs([n,s],0),new Rs([r,i],0)]}class Cu{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Ii(`Invalid padding: ${n}`);if(s<0)throw new Ii(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ii(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Ii(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Rs.fromNumber(this.ge)}ye(e,n,s){let r=e.add(n.multiply(Rs.fromNumber(s)));return r.compare(hb)===1&&(r=new Rs([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=hp(e),[s,r]=dp(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(s,r,i);if(!this.we(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Cu(i,r,n);return s.forEach((l=>o.insert(l))),o}insert(e){if(this.ge===0)return;const n=hp(e),[s,r]=dp(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(s,r,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Ii extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class nl{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,fo.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new nl(ye.min(),r,new st(xe),os(),Ne())}}class fo{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new fo(s,n,Ne(),Ne(),Ne())}}/**
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
 */class Ko{constructor(e,n,s,r){this.be=e,this.removedTargetIds=n,this.key=s,this.De=r}}class K_{constructor(e,n){this.targetId=e,this.Ce=n}}class Y_{constructor(e,n,s=kt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class fp{constructor(){this.ve=0,this.Fe=pp(),this.Me=kt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ne(),n=Ne(),s=Ne();return this.Fe.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:_e(38017,{changeType:i})}})),new fo(this.Me,this.xe,e,n,s)}qe(){this.Oe=!1,this.Fe=pp()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,He(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class db{constructor(e){this.Ge=e,this.ze=new Map,this.je=os(),this.Je=Mo(),this.He=Mo(),this.Ye=new st(xe)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const s=this.nt(n);switch(e.state){case 0:this.rt(n)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(e.resumeToken));break;default:_e(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((s,r)=>{this.rt(r)&&n(r)}))}st(e){const n=e.targetId,s=e.Ce.count,r=this.ot(n);if(r){const i=r.target;if(Tc(i))if(s===0){const o=new pe(i.path);this.et(n,o,Vt.newNoDocument(o,ye.min()))}else He(s===1,20013,{expectedCount:s});else{const o=this._t(n);if(o!==s){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=n;let o,l;try{o=Vs(s).toUint8Array()}catch(c){if(c instanceof I_)return $r("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Cu(o,r,i)}catch(c){return $r(c instanceof Ii?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,n,s){return n.Ce.count===s-this.Pt(e,n.targetId)?0:2}Pt(e,n){const s=this.Ge.getRemoteKeysForTarget(n);let r=0;return s.forEach((i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),r++)})),r}Tt(e){const n=new Map;this.ze.forEach(((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Tc(l.target)){const c=new pe(l.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,Vt.newNoDocument(c,e))}i.Be&&(n.set(o,i.ke()),i.qe())}}));let s=Ne();this.He.forEach(((i,o)=>{let l=!0;o.forEachWhile((c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(s=s.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const r=new nl(e,n,this.Ye,this.je,s);return this.je=os(),this.Je=Mo(),this.He=Mo(),this.Ye=new st(xe),r}Xe(e,n){if(!this.rt(e))return;const s=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,s){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,n)?r.Qe(n,1):r.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),s&&(this.je=this.je.insert(n,s))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new fp,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new It(xe),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new It(xe),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||ae("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new fp),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Mo(){return new st(pe.comparator)}function pp(){return new st(pe.comparator)}const fb={asc:"ASCENDING",desc:"DESCENDING"},pb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},gb={and:"AND",or:"OR"};class mb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function bc(t,e){return t.useProto3Json||Ka(e)?e:{value:e}}function Ea(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function J_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function _b(t,e){return Ea(t,e.toTimestamp())}function On(t){return He(!!t,49232),ye.fromTimestamp((function(n){const s=Os(n);return new et(s.seconds,s.nanos)})(t))}function bu(t,e){return Sc(t,e).canonicalString()}function Sc(t,e){const n=(function(r){return new tt(["projects",r.projectId,"databases",r.database])})(t).child("documents");return e===void 0?n:n.child(e)}function X_(t){const e=tt.fromString(t);return He(sv(e),10190,{key:e.toString()}),e}function Rc(t,e){return bu(t.databaseId,e.path)}function jl(t,e){const n=X_(e);if(n.get(1)!==t.databaseId.projectId)throw new de(X.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new de(X.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new pe(ev(n))}function Z_(t,e){return bu(t.databaseId,e)}function vb(t){const e=X_(t);return e.length===4?tt.emptyPath():ev(e)}function Pc(t){return new tt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ev(t){return He(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function gp(t,e,n){return{name:Rc(t,e),fields:n.value.mapValue.fields}}function yb(t,e){let n;if("targetChange"in e){e.targetChange;const s=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:_e(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=(function(u,f){return u.useProto3Json?(He(f===void 0||typeof f=="string",58123),kt.fromBase64String(f||"")):(He(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),kt.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&(function(u){const f=u.code===void 0?X.UNKNOWN:W_(u.code);return new de(f,u.message||"")})(o);n=new Y_(s,r,i,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=jl(t,s.document.name),i=On(s.document.updateTime),o=s.document.createTime?On(s.document.createTime):ye.min(),l=new an({mapValue:{fields:s.document.fields}}),c=Vt.newFoundDocument(r,i,o,l),u=s.targetIds||[],f=s.removedTargetIds||[];n=new Ko(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=jl(t,s.document),i=s.readTime?On(s.readTime):ye.min(),o=Vt.newNoDocument(r,i),l=s.removedTargetIds||[];n=new Ko([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=jl(t,s.document),i=s.removedTargetIds||[];n=new Ko([],i,r,null)}else{if(!("filter"in e))return _e(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new lb(r,i),l=s.targetId;n=new K_(l,o)}}return n}function Ab(t,e){let n;if(e instanceof ho)n={update:gp(t,e.key,e.value)};else if(e instanceof z_)n={delete:Rc(t,e.key)};else if(e instanceof pr)n={update:gp(t,e.key,e.data),updateMask:Pb(e.fieldMask)};else{if(!(e instanceof ib))return _e(16599,{Vt:e.type});n={verify:Rc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((s=>(function(i,o){const l=o.transform;if(l instanceof Ia)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Zi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof eo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof wa)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw _e(20930,{transform:o.transform})})(0,s)))),e.precondition.isNone||(n.currentDocument=(function(r,i){return i.updateTime!==void 0?{updateTime:_b(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:_e(27497)})(t,e.precondition)),n}function Ib(t,e){return t&&t.length>0?(He(e!==void 0,14353),t.map((n=>(function(r,i){let o=r.updateTime?On(r.updateTime):On(i);return o.isEqual(ye.min())&&(o=On(i)),new nb(o,r.transformResults||[])})(n,e)))):[]}function wb(t,e){return{documents:[Z_(t,e.path)]}}function Eb(t,e){const n={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=Z_(t,r);const i=(function(u){if(u.length!==0)return nv(jn.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((f=>(function(m){return{field:Tr(m.field),direction:bb(m.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=bc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:n,parent:r}}function Tb(t){let e=vb(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){He(s===1,65062);const f=n.from[0];f.allDescendants?r=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const m=tv(p);return m instanceof jn&&D_(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((m=>(function(E){return new Aa(Cr(E.field),(function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(E.direction))})(m)))})(n.orderBy));let l=null;n.limit&&(l=(function(p){let m;return m=typeof p=="object"?p.value:p,Ka(m)?null:m})(n.limit));let c=null;n.startAt&&(c=(function(p){const m=!!p.before,_=p.values||[];return new ya(_,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const m=!p.before,_=p.values||[];return new ya(_,m)})(n.endAt)),HC(e,r,o,i,l,"F",c,u)}function Cb(t,e){const n=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e(28987,{purpose:r})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function tv(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Cr(n.unaryFilter.field);return At.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Cr(n.unaryFilter.field);return At.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Cr(n.unaryFilter.field);return At.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Cr(n.unaryFilter.field);return At.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _e(61313);default:return _e(60726)}})(t):t.fieldFilter!==void 0?(function(n){return At.create(Cr(n.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _e(58110);default:return _e(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return jn.create(n.compositeFilter.filters.map((s=>tv(s))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return _e(1026)}})(n.compositeFilter.op))})(t):_e(30097,{filter:t})}function bb(t){return fb[t]}function Sb(t){return pb[t]}function Rb(t){return gb[t]}function Tr(t){return{fieldPath:t.canonicalString()}}function Cr(t){return Rt.fromServerFormat(t.fieldPath)}function nv(t){return t instanceof At?(function(n){if(n.op==="=="){if(np(n.value))return{unaryFilter:{field:Tr(n.field),op:"IS_NAN"}};if(tp(n.value))return{unaryFilter:{field:Tr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(np(n.value))return{unaryFilter:{field:Tr(n.field),op:"IS_NOT_NAN"}};if(tp(n.value))return{unaryFilter:{field:Tr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Tr(n.field),op:Sb(n.op),value:n.value}}})(t):t instanceof jn?(function(n){const s=n.getFilters().map((r=>nv(r)));return s.length===1?s[0]:{compositeFilter:{op:Rb(n.op),filters:s}}})(t):_e(54877,{filter:t})}function Pb(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function sv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Es{constructor(e,n,s,r,i=ye.min(),o=ye.min(),l=kt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Es(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Es(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Es(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Es(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class kb{constructor(e){this.yt=e}}function Db(t){const e=Tb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Cc(e,e.limit,"L"):e}/**
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
 */class xb{constructor(){this.Cn=new Nb}addToCollectionParentIndex(e,n){return this.Cn.add(n),Y.resolve()}getCollectionParents(e,n){return Y.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return Y.resolve()}deleteFieldIndex(e,n){return Y.resolve()}deleteAllFieldIndexes(e){return Y.resolve()}createTargetIndexes(e,n){return Y.resolve()}getDocumentsMatchingTarget(e,n){return Y.resolve(null)}getIndexType(e,n){return Y.resolve(0)}getFieldIndexes(e,n){return Y.resolve([])}getNextCollectionGroupToUpdate(e){return Y.resolve(null)}getMinOffset(e,n){return Y.resolve(Ms.min())}getMinOffsetFromCollectionGroup(e,n){return Y.resolve(Ms.min())}updateCollectionGroup(e,n,s){return Y.resolve()}updateIndexEntries(e,n){return Y.resolve()}}class Nb{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new It(tt.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new It(tt.comparator)).toArray()}}/**
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
 */const mp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},rv=41943040;class Kt{static withCacheSize(e){return new Kt(e,Kt.DEFAULT_COLLECTION_PERCENTILE,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Kt.DEFAULT_COLLECTION_PERCENTILE=10,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Kt.DEFAULT=new Kt(rv,Kt.DEFAULT_COLLECTION_PERCENTILE,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Kt.DISABLED=new Kt(-1,0,0);/**
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
 */class qr{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new qr(0)}static cr(){return new qr(-1)}}/**
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
 */const _p="LruGarbageCollector",Mb=1048576;function vp([t,e],[n,s]){const r=xe(t,n);return r===0?xe(e,s):r}class Ob{constructor(e){this.Ir=e,this.buffer=new It(vp),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();vp(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Vb{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ae(_p,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ei(n)?ae(_p,"Ignoring IndexedDB error during garbage collection: ",n):await Zr(n)}await this.Vr(3e5)}))}}class Lb{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(e,n){if(n===0)return Y.resolve(Wa.ce);const s=new Ob(n);return this.mr.forEachTarget(e,(r=>s.Ar(r.sequenceNumber))).next((()=>this.mr.pr(e,(r=>s.Ar(r))))).next((()=>s.maxValue))}removeTargets(e,n,s){return this.mr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ae("LruGarbageCollector","Garbage collection skipped; disabled"),Y.resolve(mp)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),mp):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let s,r,i,o,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),r=this.params.maximumSequenceNumbersToCollect):r=p,o=Date.now(),this.nthSequenceNumber(e,r)))).next((p=>(s=p,l=Date.now(),this.removeTargets(e,s,n)))).next((p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,s)))).next((p=>(u=Date.now(),wr()<=De.DEBUG&&ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${r} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),Y.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:p}))))}}function Bb(t,e){return new Lb(t,e)}/**
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
 */class Ub{constructor(){this.changes=new fr((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?Y.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class Fb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class $b{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next((r=>(s=r,this.remoteDocumentCache.getEntry(e,n)))).next((r=>(s!==null&&Li(s.mutation,r,vn.empty(),et.now()),r)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.getLocalViewOfDocuments(e,s,Ne()).next((()=>s))))}getLocalViewOfDocuments(e,n,s=Ne()){const r=Xs();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,s).next((i=>{let o=Ai();return i.forEach(((l,c)=>{o=o.insert(l,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const s=Xs();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,Ne())))}populateOverlays(e,n,s){const r=[];return s.forEach((i=>{n.has(i)||r.push(i)})),this.documentOverlayCache.getOverlays(e,r).next((i=>{i.forEach(((o,l)=>{n.set(o,l)}))}))}computeViews(e,n,s,r){let i=os();const o=Vi(),l=(function(){return Vi()})();return n.forEach(((c,u)=>{const f=s.get(u.key);r.has(u.key)&&(f===void 0||f.mutation instanceof pr)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Li(f.mutation,u,f.mutation.getFieldMask(),et.now())):o.set(u.key,vn.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((u,f)=>o.set(u,f))),n.forEach(((u,f)=>l.set(u,new Fb(f,o.get(u)??null)))),l)))}recalculateAndSaveOverlays(e,n){const s=Vi();let r=new st(((o,l)=>o-l)),i=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const l of o)l.keys().forEach((c=>{const u=n.get(c);if(u===null)return;let f=s.get(c)||vn.empty();f=l.applyToLocalView(u,f),s.set(c,f);const p=(r.get(l.batchId)||Ne()).add(c);r=r.insert(l.batchId,p)}))})).next((()=>{const o=[],l=r.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,p=U_();f.forEach((m=>{if(!i.has(m)){const _=q_(n.get(m),s.get(m));_!==null&&p.set(m,_),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return Y.waitFor(o)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,n,s,r){return(function(o){return pe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):jC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,r):this.getDocumentsMatchingCollectionQuery(e,n,s,r)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next((i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):Y.resolve(Xs());let l=Ki,c=i;return o.next((u=>Y.forEach(u,((f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?Y.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{c=c.insert(f,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,c,u,Ne()))).next((f=>({batchId:l,changes:B_(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new pe(n)).next((s=>{let r=Ai();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r}))}getDocumentsMatchingCollectionGroupQuery(e,n,s,r){const i=n.collectionGroup;let o=Ai();return this.indexManager.getCollectionParents(e,i).next((l=>Y.forEach(l,(c=>{const u=(function(p,m){return new Ja(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,s,r).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i,r)))).next((o=>{i.forEach(((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,Vt.newInvalidDocument(f)))}));let l=Ai();return o.forEach(((c,u)=>{const f=i.get(c);f!==void 0&&Li(f.mutation,u,vn.empty(),et.now()),Za(n,u)&&(l=l.insert(c,u))})),l}))}}/**
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
 */class Hb{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return Y.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(r){return{id:r.id,version:r.version,createTime:On(r.createTime)}})(n)),Y.resolve()}getNamedQuery(e,n){return Y.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(r){return{name:r.name,query:Db(r.bundledQuery),readTime:On(r.readTime)}})(n)),Y.resolve()}}/**
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
 */class jb{constructor(){this.overlays=new st(pe.comparator),this.qr=new Map}getOverlay(e,n){return Y.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Xs();return Y.forEach(n,(r=>this.getOverlay(e,r).next((i=>{i!==null&&s.set(r,i)})))).next((()=>s))}saveOverlays(e,n,s){return s.forEach(((r,i)=>{this.St(e,n,i)})),Y.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.qr.get(s);return r!==void 0&&(r.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(s)),Y.resolve()}getOverlaysForCollection(e,n,s){const r=Xs(),i=n.length+1,o=new pe(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return Y.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new st(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let f=i.get(u.largestBatchId);f===null&&(f=Xs(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=Xs(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((u,f)=>l.set(u,f))),!(l.size()>=r)););return Y.resolve(l)}St(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.qr.get(r.largestBatchId).delete(s.key);this.qr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new ab(n,s));let i=this.qr.get(n);i===void 0&&(i=Ne(),this.qr.set(n,i)),this.qr.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Gb{constructor(){this.sessionToken=kt.EMPTY_BYTE_STRING}getSessionToken(e){return Y.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,Y.resolve()}}/**
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
 */class Su{constructor(){this.Qr=new It(Et.$r),this.Ur=new It(Et.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const s=new Et(e,n);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,n){e.forEach((s=>this.addReference(s,n)))}removeReference(e,n){this.Gr(new Et(e,n))}zr(e,n){e.forEach((s=>this.removeReference(s,n)))}jr(e){const n=new pe(new tt([])),s=new Et(n,e),r=new Et(n,e+1),i=[];return this.Ur.forEachInRange([s,r],(o=>{this.Gr(o),i.push(o.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new pe(new tt([])),s=new Et(n,e),r=new Et(n,e+1);let i=Ne();return this.Ur.forEachInRange([s,r],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new Et(e,0),s=this.Qr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Et{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return pe.comparator(e.key,n.key)||xe(e.Yr,n.Yr)}static Kr(e,n){return xe(e.Yr,n.Yr)||pe.comparator(e.key,n.key)}}/**
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
 */class qb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new It(Et.$r)}checkEmpty(e){return Y.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ob(i,n,s,r);this.mutationQueue.push(o);for(const l of r)this.Zr=this.Zr.add(new Et(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return Y.resolve(o)}lookupMutationBatch(e,n){return Y.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ei(s),i=r<0?0:r;return Y.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Y.resolve(this.mutationQueue.length===0?_u:this.tr-1)}getAllMutationBatches(e){return Y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Et(n,0),r=new Et(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([s,r],(o=>{const l=this.Xr(o.Yr);i.push(l)})),Y.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new It(xe);return n.forEach((r=>{const i=new Et(r,0),o=new Et(r,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],(l=>{s=s.add(l.Yr)}))})),Y.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;pe.isDocumentKey(i)||(i=i.child(""));const o=new Et(new pe(i),0);let l=new It(xe);return this.Zr.forEachWhile((c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(l=l.add(c.Yr)),!0)}),o),Y.resolve(this.ti(l))}ti(e){const n=[];return e.forEach((s=>{const r=this.Xr(s);r!==null&&n.push(r)})),n}removeMutationBatch(e,n){He(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return Y.forEach(n.mutations,(r=>{const i=new Et(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,n){const s=new Et(n,0),r=this.Zr.firstAfterOrEqual(s);return Y.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Y.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Qb{constructor(e){this.ri=e,this.docs=(function(){return new st(pe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.ri(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return Y.resolve(s?s.document.mutableCopy():Vt.newInvalidDocument(n))}getEntries(e,n){let s=os();return n.forEach((r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Vt.newInvalidDocument(r))})),Y.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=os();const o=n.path,l=new pe(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||AC(yC(f),s)<=0||(r.has(f.key)||Za(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return Y.resolve(i)}getAllFromCollectionGroup(e,n,s,r){_e(9500)}ii(e,n){return Y.forEach(this.docs,(s=>n(s)))}newChangeBuffer(e){return new zb(this)}getSize(e){return Y.resolve(this.size)}}class zb extends Ub{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((s,r)=>{r.isValidDocument()?n.push(this.Nr.addEntry(e,r)):this.Nr.removeEntry(s)})),Y.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class Wb{constructor(e){this.persistence=e,this.si=new fr((n=>Au(n)),Iu),this.lastRemoteSnapshotVersion=ye.min(),this.highestTargetId=0,this.oi=0,this._i=new Su,this.targetCount=0,this.ai=qr.ur()}forEachTarget(e,n){return this.si.forEach(((s,r)=>n(r))),Y.resolve()}getLastRemoteSnapshotVersion(e){return Y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Y.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),Y.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.oi&&(this.oi=n),Y.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new qr(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,Y.resolve()}updateTargetData(e,n){return this.Pr(n),Y.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,Y.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.si.forEach(((o,l)=>{l.sequenceNumber<=n&&s.get(l.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)})),Y.waitFor(i).next((()=>r))}getTargetCount(e){return Y.resolve(this.targetCount)}getTargetData(e,n){const s=this.si.get(n)||null;return Y.resolve(s)}addMatchingKeys(e,n,s){return this._i.Wr(n,s),Y.resolve()}removeMatchingKeys(e,n,s){this._i.zr(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach((o=>{i.push(r.markPotentiallyOrphaned(e,o))})),Y.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),Y.resolve()}getMatchingKeysForTargetId(e,n){const s=this._i.Hr(n);return Y.resolve(s)}containsKey(e,n){return Y.resolve(this._i.containsKey(n))}}/**
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
 */class iv{constructor(e,n){this.ui={},this.overlays={},this.ci=new Wa(0),this.li=!1,this.li=!0,this.hi=new Gb,this.referenceDelegate=e(this),this.Pi=new Wb(this),this.indexManager=new xb,this.remoteDocumentCache=(function(r){return new Qb(r)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new kb(n),this.Ii=new Hb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new jb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.ui[e.toKey()];return s||(s=new qb(n,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,s){ae("MemoryPersistence","Starting transaction:",e);const r=new Kb(this.ci.next());return this.referenceDelegate.Ei(),s(r).next((i=>this.referenceDelegate.di(r).next((()=>i)))).toPromise().then((i=>(r.raiseOnCommittedEvent(),i)))}Ai(e,n){return Y.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,n))))}}class Kb extends wC{constructor(e){super(),this.currentSequenceNumber=e}}class Ru{constructor(e){this.persistence=e,this.Ri=new Su,this.Vi=null}static mi(e){return new Ru(e)}get fi(){if(this.Vi)return this.Vi;throw _e(60996)}addReference(e,n,s){return this.Ri.addReference(s,n),this.fi.delete(s.toString()),Y.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.fi.add(s.toString()),Y.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),Y.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((r=>this.fi.add(r.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next((r=>{r.forEach((i=>this.fi.add(i.toString())))})).next((()=>s.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Y.forEach(this.fi,(s=>{const r=pe.fromPath(s);return this.gi(e,r).next((i=>{i||n.removeEntry(r,ye.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((s=>{s?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return Y.or([()=>Y.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Ta{constructor(e,n){this.persistence=e,this.pi=new fr((s=>CC(s.path)),((s,r)=>s.isEqual(r))),this.garbageCollector=Bb(this,n)}static mi(e,n){return new Ta(e,n)}Ei(){}di(e){return Y.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>n.next((r=>s+r))))}wr(e){let n=0;return this.pr(e,(s=>{n++})).next((()=>n))}pr(e,n){return Y.forEach(this.pi,((s,r)=>this.br(e,s,r).next((i=>i?Y.resolve():n(r)))))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ii(e,(o=>this.br(e,o,n).next((l=>{l||(s++,i.removeEntry(o,ye.min()))})))).next((()=>i.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),Y.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),Y.resolve()}removeReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),Y.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),Y.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Qo(e.data.value)),n}br(e,n,s){return Y.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const r=this.pi.get(n);return Y.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Pu{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Es=s,this.ds=r}static As(e,n){let s=Ne(),r=Ne();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Pu(e,n.fromCache,s,r)}}/**
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
 */class Yb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Jb{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Bw()?8:EC(Ft())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,s,r){const i={result:null};return this.ys(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ws(e,n,r,s).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new Yb;return this.Ss(e,n,o).next((l=>{if(i.result=l,this.Vs)return this.bs(e,n,o,l.size)}))})).next((()=>i.result))}bs(e,n,s,r){return s.documentReadCount<this.fs?(wr()<=De.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",Er(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),Y.resolve()):(wr()<=De.DEBUG&&ae("QueryEngine","Query:",Er(n),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.gs*r?(wr()<=De.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",Er(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Mn(n))):Y.resolve())}ys(e,n){if(op(n))return Y.resolve(null);let s=Mn(n);return this.indexManager.getIndexType(e,s).next((r=>r===0?null:(n.limit!==null&&r===1&&(n=Cc(n,null,"F"),s=Mn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next((i=>{const o=Ne(...i);return this.ps.getDocuments(e,o).next((l=>this.indexManager.getMinOffset(e,s).next((c=>{const u=this.Ds(n,l);return this.Cs(n,u,o,c.readTime)?this.ys(e,Cc(n,null,"F")):this.vs(e,u,n,c)}))))})))))}ws(e,n,s,r){return op(n)||r.isEqual(ye.min())?Y.resolve(null):this.ps.getDocuments(e,s).next((i=>{const o=this.Ds(n,i);return this.Cs(n,o,s,r)?Y.resolve(null):(wr()<=De.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Er(n)),this.vs(e,o,n,vC(r,Ki)).next((l=>l)))}))}Ds(e,n){let s=new It(V_(e));return n.forEach(((r,i)=>{Za(e,i)&&(s=s.add(i))})),s}Cs(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ss(e,n,s){return wr()<=De.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",Er(n)),this.ps.getDocumentsMatchingQuery(e,n,Ms.min(),s)}vs(e,n,s,r){return this.ps.getDocumentsMatchingQuery(e,s,r).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
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
 */const ku="LocalStore",Xb=3e8;class Zb{constructor(e,n,s,r){this.persistence=e,this.Fs=n,this.serializer=r,this.Ms=new st(xe),this.xs=new fr((i=>Au(i)),Iu),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $b(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function eS(t,e,n,s){return new Zb(t,e,n,s)}async function ov(t,e){const n=Ie(t);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next((i=>(r=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(s)))).next((i=>{const o=[],l=[];let c=Ne();for(const u of r){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(s,c).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:l})))}))}))}function tS(t,e){const n=Ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const r=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,c,u,f){const p=u.batch,m=p.keys();let _=Y.resolve();return m.forEach((E=>{_=_.next((()=>f.getEntry(c,E))).next((T=>{const I=u.docVersions.get(E);He(I!==null,48541),T.version.compareTo(I)<0&&(p.applyToRemoteDocument(T,u),T.isValidDocument()&&(T.setReadTime(u.commitVersion),f.addEntry(T)))}))})),_.next((()=>l.mutationQueue.removeMutationBatch(c,p)))})(n,s,e,i).next((()=>i.apply(s))).next((()=>n.mutationQueue.performConsistencyCheck(s))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(l){let c=Ne();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c})(e)))).next((()=>n.localDocuments.getDocuments(s,r)))}))}function av(t){const e=Ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function nS(t,e){const n=Ie(t),s=e.snapshotVersion;let r=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});r=n.Ms;const l=[];e.targetChanges.forEach(((f,p)=>{const m=r.get(p);if(!m)return;l.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p))));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(kt.EMPTY_BYTE_STRING,ye.min()).withLastLimboFreeSnapshotVersion(ye.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,s)),r=r.insert(p,_),(function(T,I,x){return T.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=Xb?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0})(m,_,f)&&l.push(n.Pi.updateTargetData(i,_))}));let c=os(),u=Ne();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),l.push(sS(i,o,e.documentUpdates).next((f=>{c=f.ks,u=f.qs}))),!s.isEqual(ye.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next((p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,s)));l.push(f)}return Y.waitFor(l).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,c,u))).next((()=>c))})).then((i=>(n.Ms=r,i)))}function sS(t,e,n){let s=Ne(),r=Ne();return n.forEach((i=>s=s.add(i))),e.getEntries(t,s).next((i=>{let o=os();return n.forEach(((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(l)),c.isNoDocument()&&c.version.isEqual(ye.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):ae(ku,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)})),{ks:o,qs:r}}))}function rS(t,e){const n=Ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=_u),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function iS(t,e){const n=Ie(t);return n.persistence.runTransaction("Allocate target","readwrite",(s=>{let r;return n.Pi.getTargetData(s,e).next((i=>i?(r=i,Y.resolve(r)):n.Pi.allocateTargetId(s).next((o=>(r=new Es(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Pi.addTargetData(s,r).next((()=>r)))))))})).then((s=>{const r=n.Ms.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.xs.set(e,s.targetId)),s}))}async function kc(t,e,n){const s=Ie(t),r=s.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,(o=>s.persistence.referenceDelegate.removeTarget(o,r)))}catch(o){if(!ei(o))throw o;ae(ku,`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ms=s.Ms.remove(e),s.xs.delete(r.target)}function yp(t,e,n){const s=Ie(t);let r=ye.min(),i=Ne();return s.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,u,f){const p=Ie(c),m=p.xs.get(f);return m!==void 0?Y.resolve(p.Ms.get(m)):p.Pi.getTargetData(u,f)})(s,o,Mn(e)).next((l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(o,l.targetId).next((c=>{i=c}))})).next((()=>s.Fs.getDocumentsMatchingQuery(o,e,n?r:ye.min(),n?i:Ne()))).next((l=>(oS(s,qC(e),l),{documents:l,Qs:i})))))}function oS(t,e,n){let s=t.Os.get(e)||ye.min();n.forEach(((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)})),t.Os.set(e,s)}class Ap{constructor(){this.activeTargetIds=JC()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class aS{constructor(){this.Mo=new Ap,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,s){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Ap,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class lS{Oo(e){}shutdown(){}}/**
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
 */const Ip="ConnectivityMonitor";class wp{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ae(Ip,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ae(Ip,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Oo=null;function Dc(){return Oo===null?Oo=(function(){return 268435456+Math.round(2147483648*Math.random())})():Oo++,"0x"+Oo.toString(16)}/**
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
 */const Gl="RestConnection",cS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class uS{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${s}/databases/${r}`,this.Wo=this.databaseId.database===_a?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Go(e,n,s,r,i){const o=Dc(),l=this.zo(e,n.toUriEncodedString());ae(Gl,`Sending RPC '${e}' ${o}:`,l,s);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,r,i);const{host:u}=new URL(l),f=Kr(u);return this.Jo(e,l,c,s,f).then((p=>(ae(Gl,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw $r(Gl,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",s),p}))}Ho(e,n,s,r,i,o){return this.Go(e,n,s,r,i)}jo(e,n,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Xr})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((r,i)=>e[i]=r)),s&&s.headers.forEach(((r,i)=>e[i]=r))}zo(e,n){const s=cS[e];return`${this.Uo}/v1/${n}:${s}`}terminate(){}}/**
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
 */class hS{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Nt="WebChannelConnection";class dS extends uS{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,s,r,i){const o=Dc();return new Promise(((l,c)=>{const u=new h_;u.setWithCredentials(!0),u.listenOnce(d_.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case qo.NO_ERROR:const p=u.getResponseJson();ae(Nt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case qo.TIMEOUT:ae(Nt,`RPC '${e}' ${o} timed out`),c(new de(X.DEADLINE_EXCEEDED,"Request time out"));break;case qo.HTTP_ERROR:const m=u.getStatus();if(ae(Nt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const E=_?.error;if(E&&E.status&&E.message){const T=(function(x){const F=x.toLowerCase().replace(/_/g,"-");return Object.values(X).indexOf(F)>=0?F:X.UNKNOWN})(E.status);c(new de(T,E.message))}else c(new de(X.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new de(X.UNAVAILABLE,"Connection failed."));break;default:_e(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{ae(Nt,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(r);ae(Nt,`RPC '${e}' ${o} sending request:`,r),u.send(n,"POST",f,s,15)}))}T_(e,n,s){const r=Dc(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=g_(),l=p_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const f=i.join("");ae(Nt,`Creating RPC '${e}' stream ${r}: ${f}`,c);const p=o.createWebChannel(f,c);this.I_(p);let m=!1,_=!1;const E=new hS({Yo:I=>{_?ae(Nt,`Not sending because RPC '${e}' stream ${r} is closed:`,I):(m||(ae(Nt,`Opening RPC '${e}' stream ${r} transport.`),p.open(),m=!0),ae(Nt,`RPC '${e}' stream ${r} sending:`,I),p.send(I))},Zo:()=>p.close()}),T=(I,x,F)=>{I.listen(x,($=>{try{F($)}catch(G){setTimeout((()=>{throw G}),0)}}))};return T(p,yi.EventType.OPEN,(()=>{_||(ae(Nt,`RPC '${e}' stream ${r} transport opened.`),E.o_())})),T(p,yi.EventType.CLOSE,(()=>{_||(_=!0,ae(Nt,`RPC '${e}' stream ${r} transport closed`),E.a_(),this.E_(p))})),T(p,yi.EventType.ERROR,(I=>{_||(_=!0,$r(Nt,`RPC '${e}' stream ${r} transport errored. Name:`,I.name,"Message:",I.message),E.a_(new de(X.UNAVAILABLE,"The operation could not be completed")))})),T(p,yi.EventType.MESSAGE,(I=>{if(!_){const x=I.data[0];He(!!x,16349);const F=x,$=F?.error||F[0]?.error;if($){ae(Nt,`RPC '${e}' stream ${r} received error:`,$);const G=$.status;let re=(function(C){const S=ct[C];if(S!==void 0)return W_(S)})(G),we=$.message;re===void 0&&(re=X.INTERNAL,we="Unknown error status: "+G+" with message "+$.message),_=!0,E.a_(new de(re,we)),p.close()}else ae(Nt,`RPC '${e}' stream ${r} received:`,x),E.u_(x)}})),T(l,f_.STAT_EVENT,(I=>{I.stat===yc.PROXY?ae(Nt,`RPC '${e}' stream ${r} detected buffering proxy`):I.stat===yc.NOPROXY&&ae(Nt,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{E.__()}),0),E}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function ql(){return typeof document<"u"?document:null}/**
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
 */function sl(t){return new mb(t,!0)}/**
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
 */class lv{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=s,this.A_=r,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,n-s);r>0&&ae("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Ep="PersistentStream";class cv{constructor(e,n,s,r,i,o,l,c){this.Mi=e,this.S_=s,this.b_=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new lv(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===X.RESOURCE_EXHAUSTED?(is(n.toString()),is("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===X.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,r])=>{this.D_===n&&this.G_(s,r)}),(s=>{e((()=>{const r=new de(X.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)}))}))}G_(e,n){const s=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((r=>{s((()=>this.z_(r)))})),this.stream.onMessage((r=>{s((()=>++this.F_==1?this.J_(r):this.onNext(r)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ae(Ep,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(ae(Ep,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class fS extends cv{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=yb(this.serializer,e),s=(function(i){if(!("targetChange"in i))return ye.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ye.min():o.readTime?On(o.readTime):ye.min()})(e);return this.listener.H_(n,s)}Y_(e){const n={};n.database=Pc(this.serializer),n.addTarget=(function(i,o){let l;const c=o.target;if(l=Tc(c)?{documents:wb(i,c)}:{query:Eb(i,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=J_(i,o.resumeToken);const u=bc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(ye.min())>0){l.readTime=Ea(i,o.snapshotVersion.toTimestamp());const u=bc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l})(this.serializer,e);const s=Cb(this.serializer,e);s&&(n.labels=s),this.q_(n)}Z_(e){const n={};n.database=Pc(this.serializer),n.removeTarget=e,this.q_(n)}}class pS extends cv{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return He(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,He(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){He(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=Ib(e.writeResults,e.commitTime),s=On(e.commitTime);return this.listener.na(s,n)}ra(){const e={};e.database=Pc(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((s=>Ab(this.serializer,s)))};this.q_(n)}}/**
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
 */class gS{}class mS extends gS{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new de(X.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Go(e,Sc(n,s),r,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new de(X.UNKNOWN,i.toString())}))}Ho(e,n,s,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.Ho(e,Sc(n,s),r,o,l,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new de(X.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class _S{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(is(n),this.aa=!1):ae("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const or="RemoteStore";class vS{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((o=>{s.enqueueAndForget((async()=>{gr(this)&&(ae(or,"Restarting streams for network reachability change."),await(async function(c){const u=Ie(c);u.Ea.add(4),await po(u),u.Ra.set("Unknown"),u.Ea.delete(4),await rl(u)})(this))}))})),this.Ra=new _S(s,r)}}async function rl(t){if(gr(t))for(const e of t.da)await e(!0)}async function po(t){for(const e of t.da)await e(!1)}function uv(t,e){const n=Ie(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Mu(n)?Nu(n):ti(n).O_()&&xu(n,e))}function Du(t,e){const n=Ie(t),s=ti(n);n.Ia.delete(e),s.O_()&&hv(n,e),n.Ia.size===0&&(s.O_()?s.L_():gr(n)&&n.Ra.set("Unknown"))}function xu(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ye.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ti(t).Y_(e)}function hv(t,e){t.Va.Ue(e),ti(t).Z_(e)}function Nu(t){t.Va=new db({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ti(t).start(),t.Ra.ua()}function Mu(t){return gr(t)&&!ti(t).x_()&&t.Ia.size>0}function gr(t){return Ie(t).Ea.size===0}function dv(t){t.Va=void 0}async function yS(t){t.Ra.set("Online")}async function AS(t){t.Ia.forEach(((e,n)=>{xu(t,e)}))}async function IS(t,e){dv(t),Mu(t)?(t.Ra.ha(e),Nu(t)):t.Ra.set("Unknown")}async function wS(t,e,n){if(t.Ra.set("Online"),e instanceof Y_&&e.state===2&&e.cause)try{await(async function(r,i){const o=i.cause;for(const l of i.targetIds)r.Ia.has(l)&&(await r.remoteSyncer.rejectListen(l,o),r.Ia.delete(l),r.Va.removeTarget(l))})(t,e)}catch(s){ae(or,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ca(t,s)}else if(e instanceof Ko?t.Va.Ze(e):e instanceof K_?t.Va.st(e):t.Va.tt(e),!n.isEqual(ye.min()))try{const s=await av(t.localStore);n.compareTo(s)>=0&&await(function(i,o){const l=i.Va.Tt(o);return l.targetChanges.forEach(((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ia.get(u);f&&i.Ia.set(u,f.withResumeToken(c.resumeToken,o))}})),l.targetMismatches.forEach(((c,u)=>{const f=i.Ia.get(c);if(!f)return;i.Ia.set(c,f.withResumeToken(kt.EMPTY_BYTE_STRING,f.snapshotVersion)),hv(i,c);const p=new Es(f.target,c,u,f.sequenceNumber);xu(i,p)})),i.remoteSyncer.applyRemoteEvent(l)})(t,n)}catch(s){ae(or,"Failed to raise snapshot:",s),await Ca(t,s)}}async function Ca(t,e,n){if(!ei(e))throw e;t.Ea.add(1),await po(t),t.Ra.set("Offline"),n||(n=()=>av(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{ae(or,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await rl(t)}))}function fv(t,e){return e().catch((n=>Ca(t,n,e)))}async function il(t){const e=Ie(t),n=Bs(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:_u;for(;ES(e);)try{const r=await rS(e.localStore,s);if(r===null){e.Ta.length===0&&n.L_();break}s=r.batchId,TS(e,r)}catch(r){await Ca(e,r)}pv(e)&&gv(e)}function ES(t){return gr(t)&&t.Ta.length<10}function TS(t,e){t.Ta.push(e);const n=Bs(t);n.O_()&&n.X_&&n.ea(e.mutations)}function pv(t){return gr(t)&&!Bs(t).x_()&&t.Ta.length>0}function gv(t){Bs(t).start()}async function CS(t){Bs(t).ra()}async function bS(t){const e=Bs(t);for(const n of t.Ta)e.ea(n.mutations)}async function SS(t,e,n){const s=t.Ta.shift(),r=Tu.from(s,e,n);await fv(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await il(t)}async function RS(t,e){e&&Bs(t).X_&&await(async function(s,r){if((function(o){return cb(o)&&o!==X.ABORTED})(r.code)){const i=s.Ta.shift();Bs(s).B_(),await fv(s,(()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r))),await il(s)}})(t,e),pv(t)&&gv(t)}async function Tp(t,e){const n=Ie(t);n.asyncQueue.verifyOperationInProgress(),ae(or,"RemoteStore received new credentials");const s=gr(n);n.Ea.add(3),await po(n),s&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await rl(n)}async function PS(t,e){const n=Ie(t);e?(n.Ea.delete(2),await rl(n)):e||(n.Ea.add(2),await po(n),n.Ra.set("Unknown"))}function ti(t){return t.ma||(t.ma=(function(n,s,r){const i=Ie(n);return i.sa(),new fS(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(t.datastore,t.asyncQueue,{Xo:yS.bind(null,t),t_:AS.bind(null,t),r_:IS.bind(null,t),H_:wS.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),Mu(t)?Nu(t):t.Ra.set("Unknown")):(await t.ma.stop(),dv(t))}))),t.ma}function Bs(t){return t.fa||(t.fa=(function(n,s,r){const i=Ie(n);return i.sa(),new pS(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:CS.bind(null,t),r_:RS.bind(null,t),ta:bS.bind(null,t),na:SS.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await il(t)):(await t.fa.stop(),t.Ta.length>0&&(ae(or,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
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
 */class Ou{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Ps,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,l=new Ou(e,n,o,r,i);return l.start(s),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new de(X.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vu(t,e){if(is("AsyncQueue",`${e}: ${t}`),ei(t))return new de(X.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Mr{static emptySet(e){return new Mr(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||pe.comparator(n.key,s.key):(n,s)=>pe.comparator(n.key,s.key),this.keyedMap=Ai(),this.sortedSet=new st(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,s)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Mr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Mr;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Cp{constructor(){this.ga=new st(pe.comparator)}track(e){const n=e.doc.key,s=this.ga.get(n);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(n,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(n):e.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):_e(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,s)=>{e.push(s)})),e}}class Qr{constructor(e,n,s,r,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach((l=>{o.push({type:0,doc:l})})),new Qr(e,n,Mr.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class kS{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class DS{constructor(){this.queries=bp(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const r=Ie(n),i=r.queries;r.queries=bp(),i.forEach(((o,l)=>{for(const c of l.Sa)c.onError(s)}))})(this,new de(X.ABORTED,"Firestore shutting down"))}}function bp(){return new fr((t=>O_(t)),Xa)}async function xS(t,e){const n=Ie(t);let s=3;const r=e.query;let i=n.queries.get(r);i?!i.ba()&&e.Da()&&(s=2):(i=new kS,s=e.Da()?0:1);try{switch(s){case 0:i.wa=await n.onListen(r,!0);break;case 1:i.wa=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(o){const l=Vu(o,`Initialization of query '${Er(e.query)}' failed`);return void e.onError(l)}n.queries.set(r,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Lu(n)}async function NS(t,e){const n=Ie(t),s=e.query;let r=3;const i=n.queries.get(s);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?r=e.Da()?0:1:!i.ba()&&e.Da()&&(r=2))}switch(r){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function MS(t,e){const n=Ie(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const l of o.Sa)l.Fa(r)&&(s=!0);o.wa=r}}s&&Lu(n)}function OS(t,e,n){const s=Ie(t),r=s.queries.get(e);if(r)for(const i of r.Sa)i.onError(n);s.queries.delete(e)}function Lu(t){t.Ca.forEach((e=>{e.next()}))}var xc,Sp;(Sp=xc||(xc={})).Ma="default",Sp.Cache="cache";class VS{constructor(e,n,s){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Qr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Qr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==xc.Cache}}/**
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
 */class mv{constructor(e){this.key=e}}class _v{constructor(e){this.key=e}}class LS{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ne(),this.mutatedKeys=Ne(),this.eu=V_(e),this.tu=new Mr(this.eu)}get nu(){return this.Ya}ru(e,n){const s=n?n.iu:new Cp,r=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,l=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((f,p)=>{const m=r.get(f),_=Za(this.query,p)?p:null,E=!!m&&this.mutatedKeys.has(m.key),T=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let I=!1;m&&_?m.data.isEqual(_.data)?E!==T&&(s.track({type:3,doc:_}),I=!0):this.su(m,_)||(s.track({type:2,doc:_}),I=!0,(c&&this.eu(_,c)>0||u&&this.eu(_,u)<0)&&(l=!0)):!m&&_?(s.track({type:0,doc:_}),I=!0):m&&!_&&(s.track({type:1,doc:m}),I=!0,(c||u)&&(l=!0)),I&&(_?(o=o.add(_),i=T?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),s.track({type:1,doc:f})}return{tu:o,iu:s,Cs:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,r){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((f,p)=>(function(_,E){const T=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e(20277,{Rt:I})}};return T(_)-T(E)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(s),r=r??!1;const l=n&&!r?this._u():[],c=this.Xa.size===0&&this.current&&!r?1:0,u=c!==this.Za;return this.Za=c,o.length!==0||u?{snapshot:new Qr(this.query,e.tu,i,o,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Cp,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ne(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const n=[];return e.forEach((s=>{this.Xa.has(s)||n.push(new _v(s))})),this.Xa.forEach((s=>{e.has(s)||n.push(new mv(s))})),n}cu(e){this.Ya=e.Qs,this.Xa=Ne();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Qr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Bu="SyncEngine";class BS{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class US{constructor(e){this.key=e,this.hu=!1}}class FS{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new fr((l=>O_(l)),Xa),this.Iu=new Map,this.Eu=new Set,this.du=new st(pe.comparator),this.Au=new Map,this.Ru=new Su,this.Vu={},this.mu=new Map,this.fu=qr.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function $S(t,e,n=!0){const s=Ev(t);let r;const i=s.Tu.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.lu()):r=await vv(s,e,n,!0),r}async function HS(t,e){const n=Ev(t);await vv(n,e,!0,!1)}async function vv(t,e,n,s){const r=await iS(t.localStore,Mn(e)),i=r.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return s&&(l=await jS(t,e,i,o==="current",r.resumeToken)),t.isPrimaryClient&&n&&uv(t.remoteStore,r),l}async function jS(t,e,n,s,r){t.pu=(p,m,_)=>(async function(T,I,x,F){let $=I.view.ru(x);$.Cs&&($=await yp(T.localStore,I.query,!1).then((({documents:R})=>I.view.ru(R,$))));const G=F&&F.targetChanges.get(I.targetId),re=F&&F.targetMismatches.get(I.targetId)!=null,we=I.view.applyChanges($,T.isPrimaryClient,G,re);return Pp(T,I.targetId,we.au),we.snapshot})(t,p,m,_);const i=await yp(t.localStore,e,!0),o=new LS(e,i.Qs),l=o.ru(i.documents),c=fo.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(l,t.isPrimaryClient,c);Pp(t,n,u.au);const f=new BS(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function GS(t,e,n){const s=Ie(t),r=s.Tu.get(e),i=s.Iu.get(r.targetId);if(i.length>1)return s.Iu.set(r.targetId,i.filter((o=>!Xa(o,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await kc(s.localStore,r.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(r.targetId),n&&Du(s.remoteStore,r.targetId),Nc(s,r.targetId)})).catch(Zr)):(Nc(s,r.targetId),await kc(s.localStore,r.targetId,!0))}async function qS(t,e){const n=Ie(t),s=n.Tu.get(e),r=n.Iu.get(s.targetId);n.isPrimaryClient&&r.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Du(n.remoteStore,s.targetId))}async function QS(t,e,n){const s=ZS(t);try{const r=await(function(o,l){const c=Ie(o),u=et.now(),f=l.reduce(((_,E)=>_.add(E.key)),Ne());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",(_=>{let E=os(),T=Ne();return c.Ns.getEntries(_,f).next((I=>{E=I,E.forEach(((x,F)=>{F.isValidDocument()||(T=T.add(x))}))})).next((()=>c.localDocuments.getOverlayedDocuments(_,E))).next((I=>{p=I;const x=[];for(const F of l){const $=rb(F,p.get(F.key).overlayedDocument);$!=null&&x.push(new pr(F.key,$,R_($.value.mapValue),es.exists(!0)))}return c.mutationQueue.addMutationBatch(_,u,x,l)})).next((I=>{m=I;const x=I.applyToLocalDocumentSet(p,T);return c.documentOverlayCache.saveOverlays(_,I.batchId,x)}))})).then((()=>({batchId:m.batchId,changes:B_(p)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),(function(o,l,c){let u=o.Vu[o.currentUser.toKey()];u||(u=new st(xe)),u=u.insert(l,c),o.Vu[o.currentUser.toKey()]=u})(s,r.batchId,n),await go(s,r.changes),await il(s.remoteStore)}catch(r){const i=Vu(r,"Failed to persist write");n.reject(i)}}async function yv(t,e){const n=Ie(t);try{const s=await nS(n.localStore,e);e.targetChanges.forEach(((r,i)=>{const o=n.Au.get(i);o&&(He(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?o.hu=!0:r.modifiedDocuments.size>0?He(o.hu,14607):r.removedDocuments.size>0&&(He(o.hu,42227),o.hu=!1))})),await go(n,s,e)}catch(s){await Zr(s)}}function Rp(t,e,n){const s=Ie(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.Tu.forEach(((i,o)=>{const l=o.view.va(e);l.snapshot&&r.push(l.snapshot)})),(function(o,l){const c=Ie(o);c.onlineState=l;let u=!1;c.queries.forEach(((f,p)=>{for(const m of p.Sa)m.va(l)&&(u=!0)})),u&&Lu(c)})(s.eventManager,e),r.length&&s.Pu.H_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function zS(t,e,n){const s=Ie(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.Au.get(e),i=r&&r.key;if(i){let o=new st(pe.comparator);o=o.insert(i,Vt.newNoDocument(i,ye.min()));const l=Ne().add(i),c=new nl(ye.min(),new Map,new st(xe),o,l);await yv(s,c),s.du=s.du.remove(i),s.Au.delete(e),Uu(s)}else await kc(s.localStore,e,!1).then((()=>Nc(s,e,n))).catch(Zr)}async function WS(t,e){const n=Ie(t),s=e.batch.batchId;try{const r=await tS(n.localStore,e);Iv(n,s,null),Av(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await go(n,r)}catch(r){await Zr(r)}}async function KS(t,e,n){const s=Ie(t);try{const r=await(function(o,l){const c=Ie(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next((p=>(He(p!==null,37113),f=p.keys(),c.mutationQueue.removeMutationBatch(u,p)))).next((()=>c.mutationQueue.performConsistencyCheck(u))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>c.localDocuments.getDocuments(u,f)))}))})(s.localStore,e);Iv(s,e,n),Av(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await go(s,r)}catch(r){await Zr(r)}}function Av(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function Iv(t,e,n){const s=Ie(t);let r=s.Vu[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Vu[s.currentUser.toKey()]=r}}function Nc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Iu.get(e))t.Tu.delete(s),n&&t.Pu.yu(s,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((s=>{t.Ru.containsKey(s)||wv(t,s)}))}function wv(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Du(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Uu(t))}function Pp(t,e,n){for(const s of n)s instanceof mv?(t.Ru.addReference(s.key,e),YS(t,s)):s instanceof _v?(ae(Bu,"Document no longer in limbo: "+s.key),t.Ru.removeReference(s.key,e),t.Ru.containsKey(s.key)||wv(t,s.key)):_e(19791,{wu:s})}function YS(t,e){const n=e.key,s=n.path.canonicalString();t.du.get(n)||t.Eu.has(s)||(ae(Bu,"New document in limbo: "+n),t.Eu.add(s),Uu(t))}function Uu(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new pe(tt.fromString(e)),s=t.fu.next();t.Au.set(s,new US(n)),t.du=t.du.insert(n,s),uv(t.remoteStore,new Es(Mn(wu(n.path)),s,"TargetPurposeLimboResolution",Wa.ce))}}async function go(t,e,n){const s=Ie(t),r=[],i=[],o=[];s.Tu.isEmpty()||(s.Tu.forEach(((l,c)=>{o.push(s.pu(c,e,n).then((u=>{if((u||n)&&s.isPrimaryClient){const f=u?!u.fromCache:n?.targetChanges.get(c.targetId)?.current;s.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){r.push(u);const f=Pu.As(c.targetId,u);i.push(f)}})))})),await Promise.all(o),s.Pu.H_(r),await(async function(c,u){const f=Ie(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>Y.forEach(u,(m=>Y.forEach(m.Es,(_=>f.persistence.referenceDelegate.addReference(p,m.targetId,_))).next((()=>Y.forEach(m.ds,(_=>f.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))))))}catch(p){if(!ei(p))throw p;ae(ku,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const _=f.Ms.get(m),E=_.snapshotVersion,T=_.withLastLimboFreeSnapshotVersion(E);f.Ms=f.Ms.insert(m,T)}}})(s.localStore,i))}async function JS(t,e){const n=Ie(t);if(!n.currentUser.isEqual(e)){ae(Bu,"User change. New user:",e.toKey());const s=await ov(n.localStore,e);n.currentUser=e,(function(i,o){i.mu.forEach((l=>{l.forEach((c=>{c.reject(new de(X.CANCELLED,o))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await go(n,s.Ls)}}function XS(t,e){const n=Ie(t),s=n.Au.get(e);if(s&&s.hu)return Ne().add(s.key);{let r=Ne();const i=n.Iu.get(e);if(!i)return r;for(const o of i){const l=n.Tu.get(o);r=r.unionWith(l.view.nu)}return r}}function Ev(t){const e=Ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=yv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=XS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zS.bind(null,e),e.Pu.H_=MS.bind(null,e.eventManager),e.Pu.yu=OS.bind(null,e.eventManager),e}function ZS(t){const e=Ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=WS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=KS.bind(null,e),e}class ba{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=sl(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return eS(this.persistence,new Jb,e.initialUser,this.serializer)}Cu(e){return new iv(Ru.mi,this.serializer)}Du(e){return new aS}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ba.provider={build:()=>new ba};class eR extends ba{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){He(this.persistence.referenceDelegate instanceof Ta,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Vb(s,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Kt.withCacheSize(this.cacheSizeBytes):Kt.DEFAULT;return new iv((s=>Ta.mi(s,n)),this.serializer)}}class Mc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Rp(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=JS.bind(null,this.syncEngine),await PS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new DS})()}createDatastore(e){const n=sl(e.databaseInfo.databaseId),s=(function(i){return new dS(i)})(e.databaseInfo);return(function(i,o,l,c){return new mS(i,o,l,c)})(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return(function(s,r,i,o,l){return new vS(s,r,i,o,l)})(this.localStore,this.datastore,e.asyncQueue,(n=>Rp(this.syncEngine,n,0)),(function(){return wp.v()?new wp:new lS})())}createSyncEngine(e,n){return(function(r,i,o,l,c,u,f){const p=new FS(r,i,o,l,c,u);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const s=Ie(n);ae(or,"RemoteStore shutting down."),s.Ea.add(5),await po(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Mc.provider={build:()=>new Mc};/**
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
 */class tR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):is("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
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
 */const Us="FirestoreClient";class nR{constructor(e,n,s,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Mt.UNAUTHENTICATED,this.clientId=gu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,(async o=>{ae(Us,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(s,(o=>(ae(Us,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ps;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Vu(n,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Ql(t,e){t.asyncQueue.verifyOperationInProgress(),ae(Us,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async r=>{s.isEqual(r)||(await ov(e.localStore,r),s=r)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function kp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await sR(t);ae(Us,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((s=>Tp(e.remoteStore,s))),t.setAppCheckTokenChangeListener(((s,r)=>Tp(e.remoteStore,r))),t._onlineComponents=e}async function sR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ae(Us,"Using user provided OfflineComponentProvider");try{await Ql(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(r){return r.name==="FirebaseError"?r.code===X.FAILED_PRECONDITION||r.code===X.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(n))throw n;$r("Error using user provided cache. Falling back to memory cache: "+n),await Ql(t,new ba)}}else ae(Us,"Using default OfflineComponentProvider"),await Ql(t,new eR(void 0));return t._offlineComponents}async function Tv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ae(Us,"Using user provided OnlineComponentProvider"),await kp(t,t._uninitializedComponentsProvider._online)):(ae(Us,"Using default OnlineComponentProvider"),await kp(t,new Mc))),t._onlineComponents}function rR(t){return Tv(t).then((e=>e.syncEngine))}async function iR(t){const e=await Tv(t),n=e.eventManager;return n.onListen=$S.bind(null,e.syncEngine),n.onUnlisten=GS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=HS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=qS.bind(null,e.syncEngine),n}function oR(t,e,n={}){const s=new Ps;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,l,c,u){const f=new tR({next:m=>{f.Nu(),o.enqueueAndForget((()=>NS(i,p)));const _=m.docs.has(l);!_&&m.fromCache?u.reject(new de(X.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&c&&c.source==="server"?u.reject(new de(X.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new VS(wu(l.path),f,{includeMetadataChanges:!0,qa:!0});return xS(i,p)})(await iR(t),t.asyncQueue,e,n,s))),s.promise}/**
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
 */function Cv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Dp=new Map;/**
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
 */const bv="firestore.googleapis.com",xp=!0;class Np{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new de(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=bv,this.ssl=xp}else this.host=e.host,this.ssl=e.ssl??xp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=rv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Mb)throw new de(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_C("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Cv(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new de(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new de(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new de(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fu{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Np({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new de(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new de(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Np(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new oC;switch(s.type){case"firstParty":return new uC(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new de(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=Dp.get(n);s&&(ae("ComponentProvider","Removing Datastore"),Dp.delete(n),s.terminate())})(this),Promise.resolve()}}function aR(t,e,n,s={}){t=Wi(t,Fu);const r=Kr(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;r&&(Em(`https://${l}`),Tm("Firestore",!0)),i.host!==bv&&i.host!==l&&$r("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:r,emulatorOptions:s};if(!Ns(c,o)&&(t._setSettings(c),s.mockUserToken)){let u,f;if(typeof s.mockUserToken=="string")u=s.mockUserToken,f=Mt.MOCK_USER;else{u=kw(s.mockUserToken,t._app?.options.projectId);const p=s.mockUserToken.sub||s.mockUserToken.user_id;if(!p)throw new de(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Mt(p)}t._authCredentials=new aC(new __(u,f))}}/**
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
 */class $u{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new $u(this.firestore,e,this._query)}}class Tt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new to(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tt(this.firestore,e,this._key)}toJSON(){return{type:Tt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(uo(n,Tt._jsonSchema))return new Tt(e,s||null,new pe(tt.fromString(n.referencePath)))}}Tt._jsonSchemaVersion="firestore/documentReference/1.0",Tt._jsonSchema={type:ut("string",Tt._jsonSchemaVersion),referencePath:ut("string")};class to extends $u{constructor(e,n,s){super(e,n,wu(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new pe(e))}withConverter(e){return new to(this.firestore,e,this._path)}}function Hu(t,e,...n){if(t=Yt(t),arguments.length===1&&(e=gu.newId()),mC("doc","path",e),t instanceof Fu){const s=tt.fromString(e,...n);return zf(s),new Tt(t,null,new pe(s))}{if(!(t instanceof Tt||t instanceof to))throw new de(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(tt.fromString(e,...n));return zf(s),new Tt(t.firestore,t instanceof to?t.converter:null,new pe(s))}}/**
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
 */const Mp="AsyncQueue";class Op{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new lv(this,"async_queue_retry"),this._c=()=>{const s=ql();s&&ae(Mp,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=ql();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=ql();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new Ps;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!ei(e))throw e;ae(Mp,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,is("INTERNAL UNHANDLED ERROR: ",Vp(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const r=Ou.createAndSchedule(this,e,n,s,(i=>this.hc(i)));return this.tc.push(r),r}uc(){this.nc&&_e(47125,{Pc:Vp(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Vp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class ju extends Fu{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new Op,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Op(e),this._firestoreClient=void 0,await e}}}function lR(t,e){const n=typeof t=="object"?t:su(),s=typeof t=="string"?t:_a,r=hr(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Rw("firestore");i&&aR(r,...i)}return r}function Sv(t){if(t._terminated)throw new de(X.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||cR(t),t._firestoreClient}function cR(t){const e=t._freezeSettings(),n=(function(r,i,o,l){return new RC(r,i,o,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Cv(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)})(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new nR(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(r){const i=r?._online.build();return{_offline:r?._offline.build(i),_online:i}})(t._componentsProvider))}/**
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
 */class ln{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ln(kt.fromBase64String(e))}catch(n){throw new de(X.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ln(kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ln._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(uo(e,ln._jsonSchema))return ln.fromBase64String(e.bytes)}}ln._jsonSchemaVersion="firestore/bytes/1.0",ln._jsonSchema={type:ut("string",ln._jsonSchemaVersion),bytes:ut("string")};/**
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
 */class Gu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new de(X.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Rv{constructor(e){this._methodName=e}}/**
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
 */class Vn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new de(X.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new de(X.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Vn._jsonSchemaVersion}}static fromJSON(e){if(uo(e,Vn._jsonSchema))return new Vn(e.latitude,e.longitude)}}Vn._jsonSchemaVersion="firestore/geoPoint/1.0",Vn._jsonSchema={type:ut("string",Vn._jsonSchemaVersion),latitude:ut("number"),longitude:ut("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Ln{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ln._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(uo(e,Ln._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Ln(e.vectorValues);throw new de(X.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ln._jsonSchemaVersion="firestore/vectorValue/1.0",Ln._jsonSchema={type:ut("string",Ln._jsonSchemaVersion),vectorValues:ut("object")};/**
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
 */const uR=/^__.*__$/;class hR{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new pr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ho(e,this.data,n,this.fieldTransforms)}}function Pv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e(40011,{Ac:t})}}class qu{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new qu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.gc(e),s}yc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Sa(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Pv(this.Ac)&&uR.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class dR{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||sl(e)}Cc(e,n,s,r=!1){return new qu({Ac:e,methodName:n,Dc:s,path:Rt.emptyPath(),fc:!1,bc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fR(t){const e=t._freezeSettings(),n=sl(t._databaseId);return new dR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function pR(t,e,n,s,r,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,r);Nv("Data must be an object, but it was:",o,s);const l=Dv(s,o);let c,u;if(i.merge)c=new vn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=gR(e,p,n);if(!o.contains(m))throw new de(X.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);_R(f,m)||f.push(m)}c=new vn(f),u=o.fieldTransforms.filter((p=>c.covers(p.field)))}else c=null,u=o.fieldTransforms;return new hR(new an(l),c,u)}function kv(t,e){if(xv(t=Yt(t)))return Nv("Unsupported field value:",e,t),Dv(t,e);if(t instanceof Rv)return(function(s,r){if(!Pv(r.Ac))throw r.Sc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Sc(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,r){const i=[];let o=0;for(const l of s){let c=kv(l,r.wc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}})(t,e)}return(function(s,r){if((s=Yt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return XC(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=et.fromDate(s);return{timestampValue:Ea(r.serializer,i)}}if(s instanceof et){const i=new et(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Ea(r.serializer,i)}}if(s instanceof Vn)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof ln)return{bytesValue:J_(r.serializer,s._byteString)};if(s instanceof Tt){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:bu(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof Ln)return(function(o,l){return{mapValue:{fields:{[b_]:{stringValue:S_},[va]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw l.Sc("VectorValues must only contain numeric values.");return Eu(l.serializer,u)}))}}}}}})(s,r);throw r.Sc(`Unsupported field value: ${mu(s)}`)})(t,e)}function Dv(t,e){const n={};return A_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):dr(t,((s,r)=>{const i=kv(r,e.mc(s));i!=null&&(n[s]=i)})),{mapValue:{fields:n}}}function xv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof et||t instanceof Vn||t instanceof ln||t instanceof Tt||t instanceof Rv||t instanceof Ln)}function Nv(t,e,n){if(!xv(n)||!v_(n)){const s=mu(n);throw s==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+s)}}function gR(t,e,n){if((e=Yt(e))instanceof Gu)return e._internalPath;if(typeof e=="string")return Mv(t,e);throw Sa("Field path arguments must be of type string or ",t,!1,void 0,n)}const mR=new RegExp("[~\\*/\\[\\]]");function Mv(t,e,n){if(e.search(mR)>=0)throw Sa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Gu(...e.split("."))._internalPath}catch{throw Sa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Sa(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new de(X.INVALID_ARGUMENT,l+t+c)}function _R(t,e){return t.some((n=>n.isEqual(e)))}/**
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
 */class Ov{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new vR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Vv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class vR extends Ov{data(){return super.data()}}function Vv(t,e){return typeof e=="string"?Mv(t,e):e instanceof Gu?e._internalPath:e._delegate._internalPath}class yR{convertValue(e,n="none"){switch(Ls(e)){case 0:return null;case 1:return e.booleanValue;case 2:return lt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Vs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw _e(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return dr(e,((r,i)=>{s[r]=this.convertValue(i,n)})),s}convertVectorValue(e){const n=e.fields?.[va].arrayValue?.values?.map((s=>lt(s.doubleValue)));return new Ln(n)}convertGeoPoint(e){return new Vn(lt(e.latitude),lt(e.longitude))}convertArray(e,n){return(e.values||[]).map((s=>this.convertValue(s,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Ya(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Yi(e));default:return null}}convertTimestamp(e){const n=Os(e);return new et(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=tt.fromString(e);He(sv(s),9688,{name:e});const r=new Ji(s.get(1),s.get(3)),i=new pe(s.popFirst(5));return r.isEqual(n)||is(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function AR(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class wi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class nr extends Ov{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Yo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Vv("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new de(X.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=nr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}nr._jsonSchemaVersion="firestore/documentSnapshot/1.0",nr._jsonSchema={type:ut("string",nr._jsonSchemaVersion),bundleSource:ut("string","DocumentSnapshot"),bundleName:ut("string"),bundle:ut("string")};class Yo extends nr{data(e={}){return super.data(e)}}class Bi{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new wi(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((s=>{e.call(n,new Yo(this._firestore,this._userDataWriter,s.key,s,new wi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new de(X.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map((l=>{const c=new Yo(r._firestore,r._userDataWriter,l.doc.key,l.doc,new wi(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const c=new Yo(r._firestore,r._userDataWriter,l.doc.key,l.doc,new wi(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:IR(l.type),doc:c,oldIndex:u,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new de(X.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Bi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=gu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],r=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function IR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e(61501,{type:t})}}/**
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
 */function Qu(t){t=Wi(t,Tt);const e=Wi(t.firestore,ju);return oR(Sv(e),t._key).then((n=>TR(e,t,n)))}Bi._jsonSchemaVersion="firestore/querySnapshot/1.0",Bi._jsonSchema={type:ut("string",Bi._jsonSchemaVersion),bundleSource:ut("string","QuerySnapshot"),bundleName:ut("string"),bundle:ut("string")};class wR extends yR{constructor(e){super(),this.firestore=e}convertBytes(e){return new ln(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,n)}}function Oc(t,e,n){t=Wi(t,Tt);const s=Wi(t.firestore,ju),r=AR(t.converter,e,n);return ER(s,[pR(fR(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,es.none())])}function ER(t,e){return(function(s,r){const i=new Ps;return s.asyncQueue.enqueueAndForget((async()=>QS(await rR(s),r,i))),i.promise})(Sv(t),e)}function TR(t,e,n){const s=n.docs.get(e._key),r=new wR(t);return new nr(t,r,e._key,s,new wi(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(r){Xr=r})(Yr),Fn(new wn("firestore",((s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),l=new ju(new lC(s.getProvider("auth-internal")),new hC(o,s.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new de(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ji(u.options.projectId,f)})(o,r),o);return i={useFetchStreams:n,...i},l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),hn(jf,Gf,e),hn(jf,Gf,"esm2020")})();const Lv="@firebase/installations",zu="0.6.19";/**
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
 */const Bv=1e4,Uv=`w:${zu}`,Fv="FIS_v2",CR="https://firebaseinstallations.googleapis.com/v1",bR=3600*1e3,SR="installations",RR="Installations";/**
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
 */const PR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ar=new ur(SR,RR,PR);function $v(t){return t instanceof En&&t.code.includes("request-failed")}/**
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
 */function Hv({projectId:t}){return`${CR}/projects/${t}/installations`}function jv(t){return{token:t.token,requestStatus:2,expiresIn:DR(t.expiresIn),creationTime:Date.now()}}async function Gv(t,e){const s=(await e.json()).error;return ar.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function qv({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function kR(t,{refreshToken:e}){const n=qv(t);return n.append("Authorization",xR(e)),n}async function Qv(t){const e=await t();return e.status>=500&&e.status<600?t():e}function DR(t){return Number(t.replace("s","000"))}function xR(t){return`${Fv} ${t}`}/**
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
 */async function NR({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Hv(t),r=qv(t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={fid:n,authVersion:Fv,appId:t.appId,sdkVersion:Uv},l={method:"POST",headers:r,body:JSON.stringify(o)},c=await Qv(()=>fetch(s,l));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:jv(u.authToken)}}else throw await Gv("Create Installation",c)}/**
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
 */function zv(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function MR(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const OR=/^[cdef][\w-]{21}$/,Vc="";function VR(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=LR(t);return OR.test(n)?n:Vc}catch{return Vc}}function LR(t){return MR(t).substr(0,22)}/**
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
 */function ol(t){return`${t.appName}!${t.appId}`}/**
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
 */const Wv=new Map;function Kv(t,e){const n=ol(t);Yv(n,e),BR(n,e)}function Yv(t,e){const n=Wv.get(t);if(n)for(const s of n)s(e)}function BR(t,e){const n=UR();n&&n.postMessage({key:t,fid:e}),FR()}let Zs=null;function UR(){return!Zs&&"BroadcastChannel"in self&&(Zs=new BroadcastChannel("[Firebase] FID Change"),Zs.onmessage=t=>{Yv(t.data.key,t.data.fid)}),Zs}function FR(){Wv.size===0&&Zs&&(Zs.close(),Zs=null)}/**
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
 */const $R="firebase-installations-database",HR=1,lr="firebase-installations-store";let zl=null;function Wu(){return zl||(zl=km($R,HR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(lr)}}})),zl}async function Ra(t,e){const n=ol(t),r=(await Wu()).transaction(lr,"readwrite"),i=r.objectStore(lr),o=await i.get(n);return await i.put(e,n),await r.done,(!o||o.fid!==e.fid)&&Kv(t,e.fid),e}async function Jv(t){const e=ol(t),s=(await Wu()).transaction(lr,"readwrite");await s.objectStore(lr).delete(e),await s.done}async function al(t,e){const n=ol(t),r=(await Wu()).transaction(lr,"readwrite"),i=r.objectStore(lr),o=await i.get(n),l=e(o);return l===void 0?await i.delete(n):await i.put(l,n),await r.done,l&&(!o||o.fid!==l.fid)&&Kv(t,l.fid),l}/**
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
 */async function Ku(t){let e;const n=await al(t.appConfig,s=>{const r=jR(s),i=GR(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===Vc?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function jR(t){const e=t||{fid:VR(),registrationStatus:0};return Xv(e)}function GR(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(ar.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=qR(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:QR(t)}:{installationEntry:e}}async function qR(t,e){try{const n=await NR(t,e);return Ra(t.appConfig,n)}catch(n){throw $v(n)&&n.customData.serverCode===409?await Jv(t.appConfig):await Ra(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function QR(t){let e=await Lp(t.appConfig);for(;e.registrationStatus===1;)await zv(100),e=await Lp(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Ku(t);return s||n}return e}function Lp(t){return al(t,e=>{if(!e)throw ar.create("installation-not-found");return Xv(e)})}function Xv(t){return zR(t)?{fid:t.fid,registrationStatus:0}:t}function zR(t){return t.registrationStatus===1&&t.registrationTime+Bv<Date.now()}/**
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
 */async function WR({appConfig:t,heartbeatServiceProvider:e},n){const s=KR(t,n),r=kR(t,n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={installation:{sdkVersion:Uv,appId:t.appId}},l={method:"POST",headers:r,body:JSON.stringify(o)},c=await Qv(()=>fetch(s,l));if(c.ok){const u=await c.json();return jv(u)}else throw await Gv("Generate Auth Token",c)}function KR(t,{fid:e}){return`${Hv(t)}/${e}/authTokens:generate`}/**
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
 */async function Yu(t,e=!1){let n;const s=await al(t.appConfig,i=>{if(!Zv(i))throw ar.create("not-registered");const o=i.authToken;if(!e&&XR(o))return i;if(o.requestStatus===1)return n=YR(t,e),i;{if(!navigator.onLine)throw ar.create("app-offline");const l=eP(i);return n=JR(t,l),l}});return n?await n:s.authToken}async function YR(t,e){let n=await Bp(t.appConfig);for(;n.authToken.requestStatus===1;)await zv(100),n=await Bp(t.appConfig);const s=n.authToken;return s.requestStatus===0?Yu(t,e):s}function Bp(t){return al(t,e=>{if(!Zv(e))throw ar.create("not-registered");const n=e.authToken;return tP(n)?{...e,authToken:{requestStatus:0}}:e})}async function JR(t,e){try{const n=await WR(t,e),s={...e,authToken:n};return await Ra(t.appConfig,s),n}catch(n){if($v(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Jv(t.appConfig);else{const s={...e,authToken:{requestStatus:0}};await Ra(t.appConfig,s)}throw n}}function Zv(t){return t!==void 0&&t.registrationStatus===2}function XR(t){return t.requestStatus===2&&!ZR(t)}function ZR(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+bR}function eP(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function tP(t){return t.requestStatus===1&&t.requestTime+Bv<Date.now()}/**
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
 */async function nP(t){const e=t,{installationEntry:n,registrationPromise:s}=await Ku(e);return s?s.catch(console.error):Yu(e).catch(console.error),n.fid}/**
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
 */async function sP(t,e=!1){const n=t;return await rP(n),(await Yu(n,e)).token}async function rP(t){const{registrationPromise:e}=await Ku(t);e&&await e}/**
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
 */function iP(t){if(!t||!t.options)throw Wl("App Configuration");if(!t.name)throw Wl("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Wl(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Wl(t){return ar.create("missing-app-config-values",{valueName:t})}/**
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
 */const ey="installations",oP="installations-internal",aP=t=>{const e=t.getProvider("app").getImmediate(),n=iP(e),s=hr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},lP=t=>{const e=t.getProvider("app").getImmediate(),n=hr(e,ey).getImmediate();return{getId:()=>nP(n),getToken:r=>sP(n,r)}};function cP(){Fn(new wn(ey,aP,"PUBLIC")),Fn(new wn(oP,lP,"PRIVATE"))}cP();hn(Lv,zu);hn(Lv,zu,"esm2020");/**
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
 */const Pa="analytics",uP="firebase_id",hP="origin",dP=60*1e3,fP="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ju="https://www.googletagmanager.com/gtag/js";/**
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
 */const Gt=new Ga("@firebase/analytics");/**
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
 */const pP={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},sn=new ur("analytics","Analytics",pP);/**
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
 */function gP(t){if(!t.startsWith(Ju)){const e=sn.create("invalid-gtag-resource",{gtagURL:t});return Gt.warn(e.message),""}return t}function ty(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function mP(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function _P(t,e){const n=mP("firebase-js-sdk-policy",{createScriptURL:gP}),s=document.createElement("script"),r=`${Ju}?l=${t}&id=${e}`;s.src=n?n?.createScriptURL(r):r,s.async=!0,document.head.appendChild(s)}function vP(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function yP(t,e,n,s,r,i){const o=s[r];try{if(o)await e[o];else{const c=(await ty(n)).find(u=>u.measurementId===r);c&&await e[c.appId]}}catch(l){Gt.error(l)}t("config",r,i)}async function AP(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const l=await ty(n);for(const c of o){const u=l.find(p=>p.measurementId===c),f=u&&e[u.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){Gt.error(i)}}function IP(t,e,n,s){async function r(i,...o){try{if(i==="event"){const[l,c]=o;await AP(t,e,n,l,c)}else if(i==="config"){const[l,c]=o;await yP(t,e,n,s,l,c)}else if(i==="consent"){const[l,c]=o;t("consent",l,c)}else if(i==="get"){const[l,c,u]=o;t("get",l,c,u)}else if(i==="set"){const[l]=o;t("set",l)}else t(i,...o)}catch(l){Gt.error(l)}}return r}function wP(t,e,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=IP(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function EP(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ju)&&n.src.includes(t))return n;return null}/**
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
 */const TP=30,CP=1e3;class bP{constructor(e={},n=CP){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ny=new bP;function SP(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function RP(t){const{appId:e,apiKey:n}=t,s={method:"GET",headers:SP(n)},r=fP.replace("{app-id}",e),i=await fetch(r,s);if(i.status!==200&&i.status!==304){let o="";try{const l=await i.json();l.error?.message&&(o=l.error.message)}catch{}throw sn.create("config-fetch-failed",{httpStatus:i.status,responseMessage:o})}return i.json()}async function PP(t,e=ny,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw sn.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw sn.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new xP;return setTimeout(async()=>{l.abort()},dP),sy({appId:s,apiKey:r,measurementId:i},o,l,e)}async function sy(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=ny){const{appId:i,measurementId:o}=t;try{await kP(s,e)}catch(l){if(o)return Gt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:i,measurementId:o};throw l}try{const l=await RP(t);return r.deleteThrottleMetadata(i),l}catch(l){const c=l;if(!DP(c)){if(r.deleteThrottleMetadata(i),o)return Gt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:i,measurementId:o};throw l}const u=Number(c?.customData?.httpStatus)===503?mf(n,r.intervalMillis,TP):mf(n,r.intervalMillis),f={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return r.setThrottleMetadata(i,f),Gt.debug(`Calling attemptFetch again in ${u} millis`),sy(t,f,s,r)}}function kP(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(sn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function DP(t){if(!(t instanceof En)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class xP{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function NP(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,o={...s,send_to:i};t("event",n,o)}}async function MP(t,e,n,s){if(s&&s.global){const r={};for(const i of Object.keys(n))r[`user_properties.${i}`]=n[i];return t("set",r),Promise.resolve()}else{const r=await e;t("config",r,{update:!0,user_properties:n})}}/**
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
 */async function OP(){if(bm())try{await Sm()}catch(t){return Gt.warn(sn.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return Gt.warn(sn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function VP(t,e,n,s,r,i,o){const l=PP(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&Gt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Gt.error(m)),e.push(l);const c=OP().then(m=>{if(m)return s.getId()}),[u,f]=await Promise.all([l,c]);EP(i)||_P(i,u.measurementId),r("js",new Date);const p=o?.config??{};return p[hP]="firebase",p.update=!0,f!=null&&(p[uP]=f),r("config",u.measurementId,p),u.measurementId}/**
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
 */class LP{constructor(e){this.app=e}_delete(){return delete Or[this.app.options.appId],Promise.resolve()}}let Or={},Up=[];const Fp={};let Kl="dataLayer",BP="gtag",$p,Xu,Hp=!1;function UP(){const t=[];if(Cm()&&t.push("This is a browser extension environment."),Uw()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=sn.create("invalid-analytics-context",{errorInfo:e});Gt.warn(n.message)}}function FP(t,e,n){UP();const s=t.options.appId;if(!s)throw sn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Gt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw sn.create("no-api-key");if(Or[s]!=null)throw sn.create("already-exists",{id:s});if(!Hp){vP(Kl);const{wrappedGtag:i,gtagCore:o}=wP(Or,Up,Fp,Kl,BP);Xu=i,$p=o,Hp=!0}return Or[s]=VP(t,Up,Fp,e,$p,Kl,n),new LP(t)}function $P(t=su()){t=Yt(t);const e=hr(t,Pa);return e.isInitialized()?e.getImmediate():HP(t)}function HP(t,e={}){const n=hr(t,Pa);if(n.isInitialized()){const r=n.getImmediate();if(Ns(e,n.getOptions()))return r;throw sn.create("already-initialized")}return n.initialize({options:e})}function jP(t,e,n){t=Yt(t),MP(Xu,Or[t.app.options.appId],e,n).catch(s=>Gt.error(s))}function GP(t,e,n,s){t=Yt(t),NP(Xu,Or[t.app.options.appId],e,n,s).catch(r=>Gt.error(r))}const jp="@firebase/analytics",Gp="0.10.19";function qP(){Fn(new wn(Pa,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return FP(s,r,n)},"PUBLIC")),Fn(new wn("analytics-internal",t,"PRIVATE")),hn(jp,Gp),hn(jp,Gp,"esm2020");function t(e){try{const n=e.getProvider(Pa).getImmediate();return{logEvent:(s,r,i)=>GP(n,s,r,i),setUserProperties:(s,r)=>jP(n,s,r)}}catch(n){throw sn.create("interop-component-reg-failed",{reason:n})}}}qP();const QP={apiKey:"AIzaSyCwvJ8cUWLZPZ26i1deIAXnoLuzToIcB70",authDomain:"tuldung.firebaseapp.com",projectId:"tuldung",storageBucket:"tuldung.firebasestorage.app",messagingSenderId:"1086524417813",appId:"1:1086524417813:web:8199da4b7cebcaffc86b1c",measurementId:"G-EGV6XDKG9R"},Zu=Dm(QP),ry=rC(Zu),eh=lR(Zu);let zP=null;if(typeof window<"u")try{zP=$P(Zu)}catch(t){console.warn("Analytics 초기화 실패:",t)}const WP=new Yn,KP=async()=>{try{const e=(await fT(ry,WP)).user,n=Hu(eh,"users",e.uid);return(await Qu(n)).exists()||await Oc(n,{email:e.email,displayName:e.displayName,photoURL:e.photoURL,createdAt:new Date().toISOString(),gameData:{level:1,coins:0,totalCoin:0,catFragments:50,nftCount:0,miningCats:[],huntingCats:[],explorationCats:[],productionCats:[],inventory:[]}}),{success:!0,user:e}}catch(t){return console.error("Google 로그인 오류:",t),{success:!1,error:t.message}}},YP=async()=>{try{return await zE(ry),{success:!0}}catch(t){return console.error("로그아웃 오류:",t),{success:!1,error:t.message}}},JP=async t=>{try{const e=Hu(eh,"users",t),n=await Qu(e);return n.exists()?n.data():null}catch(e){return console.error("사용자 데이터 가져오기 오류:",e),null}},XP=async(t,e)=>{try{const n=Hu(eh,"users",t),s=await Qu(n);if(s.exists()){const r=s.data();await Oc(n,{...r,gameData:{...r.gameData,...e}},{merge:!0})}else await Oc(n,{gameData:e});return{success:!0}}catch(n){return console.error("게임 데이터 업데이트 오류:",n),{success:!1,error:n.message}}},ZP=(t,e)=>({id:t.uid,email:t.email,name:t.displayName||t.email?.split("@")[0]||"사용자",photoURL:t.photoURL,gameData:e||{level:1,coins:0,totalCoin:0,catFragments:50,nftCount:0,miningCats:[],huntingCats:[],explorationCats:[],productionCats:[],inventory:[]}}),iy=async()=>{try{const t=await KP();if(t.success){const e=t.user,n=await JP(e.uid),s=ZP(e,n?.gameData);return sessionStorage.setItem("currentUser",JSON.stringify(s)),{success:!0,user:s}}else return{success:!1,error:t.error}}catch(t){return console.error("Google 로그인 오류:",t),{success:!1,error:t.message}}},oy=async()=>{try{return await YP(),sessionStorage.removeItem("currentUser"),{success:!0}}catch(t){return console.error("로그아웃 오류:",t),{success:!1,error:t.message}}},e2=async(t,e)=>{try{const n=await XP(t,e);if(n.success){const s=JSON.parse(sessionStorage.getItem("currentUser")||"{}");s.id===t&&(s.gameData={...s.gameData,...e},sessionStorage.setItem("currentUser",JSON.stringify(s)))}return n}catch(n){return console.error("게임 데이터 업데이트 오류:",n),{success:!1,error:n.message}}},t2=Object.freeze(Object.defineProperty({__proto__:null,loginWithGoogle:iy,logout:oy,updateGameData:e2},Symbol.toStringTag,{value:"Module"})),n2={class:"login-screen"},s2={class:"input-group"},r2={class:"input-container"},i2={class:"input-group"},o2={class:"input-container"},a2=["type"],l2={key:0,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},c2={key:1,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},u2=["disabled"],h2={key:0,class:"btn-content"},d2={key:1,class:"btn-content"},f2={key:2,class:"btn-content"},p2=["disabled"],g2={key:0,class:"google-icon",viewBox:"0 0 24 24"},m2={key:1,class:"spinner-small"},_2={__name:"LoginScreen",setup(t){const e=qt(),{setWalletConnected:n,setLoading:s}=mm(),r=V(!1),i=V(!1),o=V(!1),l=V(!1),c=()=>{e.go(-1)},u=()=>{e.push("/signup")},f=V(""),p=V(""),m=async T=>{if(T.preventDefault(),!f.value.trim()||!p.value.trim()){alert("ID와 비밀번호를 모두 입력해주세요.");return}r.value=!0,s(!0);const x=JSON.parse(localStorage.getItem("users")||"[]").find(F=>F.email===f.value&&F.password===p.value);setTimeout(()=>{r.value=!1,x?(i.value=!0,sessionStorage.setItem("currentUser",JSON.stringify(x)),n(x.email,`${x.gameData.coins} 코인`),s(!1),setTimeout(()=>{e.push("/main")},1e3)):(s(!1),alert("이메일 또는 비밀번호가 올바르지 않습니다."))},2e3)},_=()=>{l.value=!l.value},E=async()=>{o.value=!0,s(!0);try{const T=await iy();T.success?(i.value=!0,n(T.user.email,`${T.user.gameData?.coins||0} 코인`),s(!1),setTimeout(()=>{e.push("/main")},1e3)):(s(!1),alert(`로그인 실패: ${T.error}`))}catch(T){s(!1),alert(`로그인 오류: ${T.message}`)}finally{o.value=!1}};return dt(()=>{const T=document.querySelector(".loginCont");T&&(T.style.opacity="0",T.style.transform="translateY(30px)",setTimeout(()=>{T.style.transition="all 0.6s ease",T.style.opacity="1",T.style.transform="translateY(0)"},100))}),(T,I)=>(L(),U("div",n2,[h("button",{class:"back-button",onClick:c},[...I[2]||(I[2]=[h("img",{src:gm,alt:"back-button",width:"20px"},null,-1)])]),I[12]||(I[12]=h("h1",{class:"login-title"},"로그인",-1)),h("form",{onSubmit:m,class:"login-form"},[h("div",s2,[I[4]||(I[4]=h("label",{class:"input-label"},"아이디(이메일계정)",-1)),h("div",r2,[I[3]||(I[3]=h("svg",{class:"input-icon",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),h("polyline",{points:"22,6 12,13 2,6"})],-1)),mn(h("input",{type:"email","onUpdate:modelValue":I[0]||(I[0]=x=>f.value=x),class:"input-field",placeholder:"이메일을 입력하세요",required:""},null,512),[[Zn,f.value]])])]),h("div",i2,[I[8]||(I[8]=h("label",{class:"input-label"},"비밀번호",-1)),h("div",o2,[I[7]||(I[7]=h("svg",{class:"input-icon",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),h("circle",{cx:"12",cy:"16",r:"1"}),h("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})],-1)),mn(h("input",{type:l.value?"text":"password","onUpdate:modelValue":I[1]||(I[1]=x=>p.value=x),class:"input-field",placeholder:"비밀번호를 입력하세요",required:""},null,8,a2),[[tm,p.value]]),h("button",{type:"button",class:"password-toggle",onClick:_},[l.value?(L(),U("svg",c2,[...I[6]||(I[6]=[h("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"},null,-1),h("line",{x1:"1",y1:"1",x2:"23",y2:"23"},null,-1)])])):(L(),U("svg",l2,[...I[5]||(I[5]=[h("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},null,-1),h("circle",{cx:"12",cy:"12",r:"3"},null,-1)])]))])])]),h("button",{type:"submit",disabled:r.value||i.value,class:be(["login-button",{connecting:r.value,connected:i.value}])},[!r.value&&!i.value?(L(),U("div",h2," 로그인 ")):ue("",!0),r.value?(L(),U("div",d2,[...I[9]||(I[9]=[h("div",{class:"spinner-small"},null,-1),ji(" 로그인 중... ",-1)])])):ue("",!0),i.value?(L(),U("div",f2,[...I[10]||(I[10]=[h("svg",{class:"check-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor"},[h("path",{d:"M20 6L9 17l-5-5"})],-1),ji(" 성공! ",-1)])])):ue("",!0)],10,u2)],32),I[13]||(I[13]=h("div",{class:"divider-section"},[h("div",{class:"divider-line"}),h("span",{class:"divider-text"},"또는"),h("div",{class:"divider-line"})],-1)),h("button",{onClick:E,disabled:o.value||r.value||i.value,class:be(["google-login-button",{loading:o.value}])},[o.value?ue("",!0):(L(),U("svg",g2,[...I[11]||(I[11]=[h("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"},null,-1),h("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"},null,-1),h("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"},null,-1),h("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"},null,-1)])])),o.value?(L(),U("div",m2)):ue("",!0),h("span",null,H(o.value?"로그인 중...":"Google로 로그인"),1)],10,p2),h("div",{class:"signup-link"},[h("button",{onClick:u,class:"signup-btn"}," 회원 가입하기 ")])]))}},v2=ft(_2,[["__scopeId","data-v-f92b1135"]]),y2={class:"signup-screen"},A2={class:"input-group"},I2={class:"input-container"},w2={class:"input-group"},E2={class:"input-container"},T2={class:"input-group"},C2={class:"input-container"},b2={class:"input-group"},S2={class:"input-container"},R2=["type"],P2={key:0,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},k2={key:1,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},D2={__name:"SignupScreen",setup(t){const e=qt(),n=V({name:"",phone:"",email:"",password:""}),s=V(!1),r=()=>{e.go(-1)},i=async l=>{if(l.preventDefault(),!n.value.name.trim()||!n.value.phone.trim()||!n.value.email.trim()||!n.value.password.trim()){alert("모든 필드를 입력해주세요.");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.value.email)){alert("올바른 이메일 형식을 입력해주세요.");return}if(n.value.password.length<6){alert("비밀번호는 6자 이상이어야 합니다.");return}const u=JSON.parse(localStorage.getItem("users")||"[]");if(u.some(m=>m.email===n.value.email)){alert("이미 가입된 이메일입니다.");return}const p={id:Date.now(),name:n.value.name,phone:n.value.phone,email:n.value.email,password:n.value.password,createdAt:new Date().toISOString(),gameData:{level:1,coins:0,nftCount:0}};u.push(p),localStorage.setItem("users",JSON.stringify(u)),console.log("회원가입 완료:",p),alert("회원가입이 완료되었습니다!"),e.push("/login")},o=()=>{s.value=!s.value};return(l,c)=>(L(),U("div",y2,[h("button",{class:"back-button",onClick:r},[...c[4]||(c[4]=[h("img",{src:gm,alt:"back-button",width:"20px"},null,-1)])]),c[16]||(c[16]=h("h1",{class:"signup-title"},"회원가입",-1)),h("form",{onSubmit:i,class:"signup-form"},[h("div",A2,[c[6]||(c[6]=h("label",{class:"input-label"},"이름",-1)),h("div",I2,[c[5]||(c[5]=h("svg",{class:"input-icon",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),h("polyline",{points:"22,6 12,13 2,6"})],-1)),mn(h("input",{type:"text","onUpdate:modelValue":c[0]||(c[0]=u=>n.value.name=u),class:"input-field",placeholder:"이름을 입력하세요",required:""},null,512),[[Zn,n.value.name]])])]),h("div",w2,[c[8]||(c[8]=h("label",{class:"input-label"},"전화번호",-1)),h("div",E2,[c[7]||(c[7]=h("svg",{class:"input-icon",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})],-1)),mn(h("input",{type:"tel","onUpdate:modelValue":c[1]||(c[1]=u=>n.value.phone=u),class:"input-field",placeholder:"전화번호를 입력하세요",required:""},null,512),[[Zn,n.value.phone]])])]),h("div",T2,[c[10]||(c[10]=h("label",{class:"input-label"},"이메일",-1)),h("div",C2,[c[9]||(c[9]=h("svg",{class:"input-icon",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),h("polyline",{points:"22,6 12,13 2,6"})],-1)),mn(h("input",{type:"email","onUpdate:modelValue":c[2]||(c[2]=u=>n.value.email=u),class:"input-field",placeholder:"이메일을 입력하세요",required:""},null,512),[[Zn,n.value.email]])])]),h("div",b2,[c[14]||(c[14]=h("label",{class:"input-label"},"비밀번호",-1)),h("div",S2,[c[13]||(c[13]=h("svg",{class:"input-icon",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),h("circle",{cx:"12",cy:"16",r:"1"}),h("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})],-1)),mn(h("input",{type:s.value?"text":"password","onUpdate:modelValue":c[3]||(c[3]=u=>n.value.password=u),class:"input-field",placeholder:"비밀번호를 입력하세요",required:""},null,8,R2),[[tm,n.value.password]]),h("button",{type:"button",class:"password-toggle",onClick:o},[s.value?(L(),U("svg",k2,[...c[12]||(c[12]=[h("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"},null,-1),h("line",{x1:"1",y1:"1",x2:"23",y2:"23"},null,-1)])])):(L(),U("svg",P2,[...c[11]||(c[11]=[h("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},null,-1),h("circle",{cx:"12",cy:"12",r:"3"},null,-1)])]))])])]),c[15]||(c[15]=h("button",{type:"submit",class:"signup-button"}," 회원가입 ",-1))],32)]))}},x2=ft(D2,[["__scopeId","data-v-be588a4f"]]),th=""+new URL("cat1-B_B8VE2s.png",import.meta.url).href,nh=""+new URL("cat10-B8AgbljH.png",import.meta.url).href,sh=""+new URL("cat11-0fJ86MBw.png",import.meta.url).href,rh=""+new URL("cat12-9jWhGICw.png",import.meta.url).href,ih=""+new URL("cat13-CHa4qUOi.png",import.meta.url).href,oh=""+new URL("cat14-CLrryeLM.png",import.meta.url).href,ah=""+new URL("cat15-CCtjZj8M.png",import.meta.url).href,lh=""+new URL("cat16-CPcR6OS6.png",import.meta.url).href,ch=""+new URL("cat17-EO7rjjtM.png",import.meta.url).href,uh=""+new URL("cat18-BGDiOePY.png",import.meta.url).href,hh=""+new URL("cat19-DxCDtOnA.png",import.meta.url).href,dh=""+new URL("cat2-0Y4nM6HW.png",import.meta.url).href,fh=""+new URL("cat20-Bz9cd08a.png",import.meta.url).href,ph=""+new URL("cat21-ECTsze2s.png",import.meta.url).href,gh=""+new URL("cat22-BvGXhyri.png",import.meta.url).href,mh=""+new URL("cat23-DqU2B_M0.png",import.meta.url).href,_h=""+new URL("cat24-7cWYLYDN.png",import.meta.url).href,vh=""+new URL("cat25-Cy0mQl6B.png",import.meta.url).href,yh=""+new URL("cat26-Bk4tHCwE.png",import.meta.url).href,Ah=""+new URL("cat27-CvtmCEXM.png",import.meta.url).href,Ih=""+new URL("cat28-B9s1wmgo.png",import.meta.url).href,wh=""+new URL("cat29-D_79HmBj.png",import.meta.url).href,Eh=""+new URL("cat3-Dp7OJMB9.png",import.meta.url).href,Th=""+new URL("cat30-Cx-HRp0m.png",import.meta.url).href,Ch=""+new URL("cat4-DHiuXgwB.png",import.meta.url).href,bh=""+new URL("cat5-BvXrfJAO.png",import.meta.url).href,Sh=""+new URL("cat6-DZOiQoo1.png",import.meta.url).href,Rh=""+new URL("cat7-CeDKF7mR.png",import.meta.url).href,Ph=""+new URL("cat8-mjRhb3fS.png",import.meta.url).href,kh=""+new URL("cat9-Bzb-Egme.png",import.meta.url).href,Dh=""+new URL("catProfile01-gY0Djz81.png",import.meta.url).href,xh=""+new URL("catProfile02-Cesbpkj5.png",import.meta.url).href,Nh=""+new URL("cat_ico-Csdt_Q01.png",import.meta.url).href,N2=""+new URL("tul1-CuZ0qR5D.png",import.meta.url).href,M2=""+new URL("tul2-Cj7OkHg6.png",import.meta.url).href,O2=""+new URL("tul3-CaPMxBJ-.png",import.meta.url).href,V2=""+new URL("tul5-CQc-0WLd.png",import.meta.url).href,L2=""+new URL("tul6-COB-AGqQ.png",import.meta.url).href,B2=""+new URL("mainPoint-D-oASrAx.png",import.meta.url).href,ay=""+new URL("mainCoin-CGuum4ry.png",import.meta.url).href,U2=""+new URL("lighting-DDPCD7_E.png",import.meta.url).href,ly=""+new URL("point_ico-CuS5zUpS.png",import.meta.url).href,cy=""+new URL("coin_ico-COVm5STX.png",import.meta.url).href,uy=""+new URL("cat_ico-Csdt_Q01.png",import.meta.url).href,F2=""+new URL("notice-Bkd9hh4q.png",import.meta.url).href,$2=""+new URL("setting-CxNpDL9x.png",import.meta.url).href,H2="modulepreload",j2=function(t,e){return new URL(t,e).href},qp={},G2=function(e,n,s){let r=Promise.resolve();if(n&&n.length>0){let u=function(f){return Promise.all(f.map(p=>Promise.resolve(p).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");r=u(n.map(f=>{if(f=j2(f,s),f in qp)return;qp[f]=!0;const p=f.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(s)for(let E=o.length-1;E>=0;E--){const T=o[E];if(T.href===f&&(!p||T.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${m}`))return;const _=document.createElement("link");if(_.rel=p?"stylesheet":H2,p||(_.as="script"),_.crossOrigin="",_.href=f,c&&_.setAttribute("nonce",c),document.head.appendChild(_),p)return new Promise((E,T)=>{_.addEventListener("load",E),_.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${f}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return r.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})},q2=()=>JSON.parse(localStorage.getItem("users")||"[]"),nt=()=>{const t=sessionStorage.getItem("currentUser");return t?JSON.parse(t):null},pn=async(t,e)=>{const n=nt();if(n&&(n.id?.length>20||n.uid))try{const{updateGameData:i}=await G2(async()=>{const{updateGameData:l}=await Promise.resolve().then(()=>t2);return{updateGameData:l}},void 0,import.meta.url);return(await i(t,e)).success}catch(i){console.error("Firebase 업데이트 실패, localStorage로 폴백:",i)}const s=q2(),r=s.findIndex(i=>i.id===t);return r!==-1?(s[r].gameData={...s[r].gameData,...e},localStorage.setItem("users",JSON.stringify(s)),n&&n.id===t&&(n.gameData={...n.gameData,...e},sessionStorage.setItem("currentUser",JSON.stringify(n))),!0):!1},Q2=(t,e)=>pn(t,{coins:e}),ka=(t,e,n)=>pn(t,{coins:e,totalCoin:n}),Qp=()=>{sessionStorage.removeItem("currentUser")},z2=()=>localStorage.getItem("appLanguage")||"한국어",hy=()=>{const t=z2();return{ko:{home:"홈",exchange:"교환소",quest:"퀘스트",inventory:"인벤토리",factory:"제작소",mining:"채굴",hunting:"사냥",exploration:"탐험",production:"생산",back:"← 뒤로",settings:"설정",notification:"알림"},en:{home:"Home",exchange:"Exchange",quest:"Quest",inventory:"Inventory",factory:"Factory",mining:"Mining",hunting:"Hunting",exploration:"Exploration",production:"Production",back:"← Back",settings:"Settings",notification:"Notification"}}[t==="한국어"?"ko":"en"]},W2={class:"headerCont"},K2={class:"headerBar"},Y2={class:"headerValue"},J2={class:"headerValue"},X2={class:"headerValue"},Z2={class:"headerValue"},ek={__name:"Header",setup(t){const e=V(localStorage.getItem("appLanguage")||"한국어");je(()=>hy());const n=qt(),s=V(0),r=V(0),i=V(50),o=V(4e3),l=V(4e3),c=()=>{const I=new Date().toDateString(),x=localStorage.getItem("energyLastDate"),F=localStorage.getItem("currentEnergy");if(x!==I)o.value=l.value,localStorage.setItem("energyLastDate",I),localStorage.setItem("currentEnergy",l.value.toString());else if(F){const $=parseInt(F)||0;o.value=Math.max(0,Math.min($,l.value))}else o.value=0},u=()=>{const I=nt();I&&(s.value=I.gameData?.coins||0,r.value=I.gameData?.totalCoin||0,i.value=I.gameData?.catFragments||I.gameData?.catCount||50),c()};V(!1);const f=()=>{n.push("/settings")},p=()=>{n.push("/notification")},m=()=>{n.push("/shop")};let _=null,E=null;dt(()=>{u(),_=setInterval(()=>{const I=localStorage.getItem("appLanguage")||"한국어";I!==e.value&&(e.value=I)},100),E=setInterval(()=>{u()},500),window.addEventListener("userDataUpdated",u)}),Wr(()=>{_&&clearInterval(_),E&&clearInterval(E),window.removeEventListener("userDataUpdated",u)});const T=I=>I>=1e9?(I/1e9).toFixed(1).replace(/\.0$/,"")+"G":I>=1e6?(I/1e6).toFixed(1).replace(/\.0$/,"")+"M":I>=1e4?(I/1e3).toFixed(1).replace(/\.0$/,"")+"K":I.toLocaleString();return(I,x)=>(L(),U("header",null,[h("div",W2,[h("div",K2,[h("button",{class:"headerItem energyItem",onClick:m},[x[0]||(x[0]=h("img",{src:U2,alt:"에너지",class:"energyIcon"},null,-1)),h("span",Y2,H(T(o.value)),1)]),x[6]||(x[6]=h("div",{class:"divider"},null,-1)),h("button",{class:"headerItem clickableItem",onClick:m},[x[1]||(x[1]=h("img",{src:ly,alt:"P",class:"pointIcon"},null,-1)),h("span",J2,H(T(s.value)),1)]),x[7]||(x[7]=h("div",{class:"divider"},null,-1)),h("button",{class:"headerItem clickableItem",onClick:m},[x[2]||(x[2]=h("img",{src:cy,alt:"C",class:"coinIcon"},null,-1)),h("span",X2,H(T(r.value)),1)]),x[8]||(x[8]=h("div",{class:"divider"},null,-1)),h("button",{class:"headerItem clickableItem",onClick:m},[x[3]||(x[3]=h("img",{src:uy,alt:"고양이",class:"catIcon"},null,-1)),h("span",Z2,H(i.value),1)]),x[9]||(x[9]=h("div",{class:"divider"},null,-1)),h("button",{class:"headerIconBtn notifi",onClick:p},[...x[4]||(x[4]=[h("img",{src:F2,alt:"알림",class:"icon-img"},null,-1)])]),x[10]||(x[10]=h("div",{class:"divider"},null,-1)),h("button",{class:"headerIconBtn menuBtn",onClick:f},[...x[5]||(x[5]=[h("img",{src:$2,alt:"설정",class:"icon-img"},null,-1)])])])])]))}},Qt=ft(ek,[["__scopeId","data-v-21b40d0f"]]),tk=""+new URL("bottom001-BEtDIm8X.png",import.meta.url).href,nk=""+new URL("bottom001_on-DT187QNm.png",import.meta.url).href,sk=""+new URL("bottom002-DzQ3N6uP.png",import.meta.url).href,rk=""+new URL("bottom002_on-C1N0vVp8.png",import.meta.url).href,ik=""+new URL("bottom003-BvgU7nGk.png",import.meta.url).href,ok=""+new URL("bottom003_on-Df8s6MrC.png",import.meta.url).href,ak=""+new URL("bottom004-CWodmmKt.png",import.meta.url).href,lk=""+new URL("bottom004_on-D8X_vvyV.png",import.meta.url).href,ck=""+new URL("bottom005-CX2HIylp.png",import.meta.url).href,uk=""+new URL("bottom005_on-DYZvET-x.png",import.meta.url).href,hk={class:"footerCont"},dk={class:"footerBar"},fk=["onClick"],pk={class:"tabContent"},gk=["src","alt"],mk={class:"tabLabel"},_k={key:0,class:"activeIndicator"},vk={__name:"Footer",setup(t){const e=qt(),n=V("home"),s=V(localStorage.getItem("appLanguage")||"한국어"),r=je(()=>hy()),i=f=>{f.key==="appLanguage"&&(s.value=f.newValue||"한국어")},o=()=>{switch(e.currentRoute.value.path){case"/main":n.value="home";break;case"/exchange":n.value="exchange";break;case"/quest":n.value="quest";break;case"/inventory":n.value="inventory";break;case"/factory":n.value="factory";break;default:n.value="home"}};let l=null;dt(()=>{o(),window.addEventListener("storage",i),l=setInterval(()=>{const f=localStorage.getItem("appLanguage")||"한국어";f!==s.value&&(s.value=f)},100)}),Wr(()=>{window.removeEventListener("storage",i),l&&clearInterval(l)}),Cs(()=>e.currentRoute.value.path,()=>{o()}),Cs(s,()=>{});const c=je(()=>[{id:"home",img:tk,imgActive:nk,label:r.value.home},{id:"exchange",img:sk,imgActive:rk,label:r.value.exchange},{id:"quest",img:ik,imgActive:ok,label:r.value.quest},{id:"inventory",img:ak,imgActive:lk,label:r.value.inventory},{id:"factory",img:ck,imgActive:uk,label:r.value.factory}]),u=f=>{switch(n.value=f,f){case"home":e.push("/main");break;case"exchange":e.push("/exchange");break;case"quest":e.push("/quest");break;case"inventory":e.push("/inventory");break;case"factory":e.push("/factory");break}};return(f,p)=>(L(),U("footer",null,[h("div",hk,[p[0]||(p[0]=h("div",{class:"footerBackground"},null,-1)),h("div",dk,[(L(!0),U(Ce,null,Be(c.value,m=>(L(),U("div",{key:m.id,class:be(["tabItem",{active:n.value===m.id}]),onClick:_=>u(m.id)},[h("div",pk,[h("img",{src:n.value===m.id?m.imgActive:m.img,alt:m.label,class:"tabIcon"},null,8,gk),h("span",mk,H(m.label),1)]),n.value===m.id?(L(),U("div",_k)):ue("",!0)],10,fk))),128))])])]))}},zt=ft(vk,[["__scopeId","data-v-5284f664"]]),yk={class:"mainScreen"},Ak={class:"mainContent"},Ik={key:0,class:"mainMenuNew"},wk={class:"totalStats"},Ek={class:"totalPoint"},Tk={class:"statValue"},Ck={class:"statNumber"},bk={class:"totalCoin"},Sk={class:"statValue"},Rk={class:"statNumber"},Pk={class:"gameModeGrid"},kk={key:1,class:"miningMode"},Dk={class:"pageHeader"},xk={class:"totalPointsDisplay"},Nk={class:"miningButtonContainer"},Mk={key:1,class:"completeMessageContainer"},Ok={class:"energySection"},Vk={class:"energyInfo"},Lk={class:"energyText"},Bk={class:"energyBar"},Uk={class:"miningCatsSection"},Fk={class:"catsListScroll"},$k=["onClick"],Hk={key:0,class:"catLevel"},jk={key:1,class:"catImage"},Gk=["src"],qk={key:2,class:"catStars"},Qk={key:3,class:"emptySlotContent"},zk={key:2,class:"miningMode"},Wk={class:"pageHeader"},Kk={class:"totalPointsDisplay"},Yk={class:"miningButtonContainer"},Jk={key:1,class:"completeMessageContainer"},Xk={class:"energySection"},Zk={class:"energyInfo"},eD={class:"energyText"},tD={class:"energyBar"},nD={class:"miningCatsSection"},sD={class:"catsListScroll"},rD=["onClick"],iD={key:0,class:"catLevel"},oD={key:1,class:"catImage"},aD=["src"],lD={key:2,class:"catStars"},cD={key:3,class:"emptySlotContent"},uD={key:3,class:"miningMode"},hD={class:"pageHeader"},dD={class:"totalPointsDisplay"},fD={class:"miningButtonContainer"},pD={key:1,class:"completeMessageContainer"},gD={class:"energySection"},mD={class:"energyInfo"},_D={class:"energyText"},vD={class:"energyBar"},yD={class:"miningCatsSection"},AD={class:"catsListScroll"},ID=["onClick"],wD={key:0,class:"catLevel"},ED={key:1,class:"catImage"},TD=["src"],CD={key:2,class:"catStars"},bD={key:3,class:"emptySlotContent"},SD={key:4,class:"miningMode"},RD={class:"pageHeader"},PD={class:"totalPointsDisplay"},kD={class:"miningButtonContainer"},DD={key:1,class:"completeMessageContainer"},xD={class:"energySection"},ND={class:"energyInfo"},MD={class:"energyText"},OD={class:"energyBar"},VD={class:"miningCatsSection"},LD={class:"catsListScroll"},BD=["onClick"],UD={key:0,class:"catLevel"},FD={key:1,class:"catImage"},$D=["src"],HD={key:2,class:"catStars"},jD={key:3,class:"emptySlotContent"},GD={key:0,class:"speechBubbles"},qD={key:1,class:"catEmojis"},QD=["src"],zD={class:"catSelectPopupBody"},WD={key:0,class:"removeCatSection"},KD={class:"availableCatsGrid"},YD=["onClick"],JD={class:"availableCatImage"},XD=["src"],ZD={class:"availableCatInfo"},ex={class:"availableCatName"},tx={class:"availableCatLevel"},nx={class:"availableCatStars"},sx={__name:"MainScreen",setup(t){const e=P=>P>=1e9?(P/1e9).toFixed(1).replace(/\.0$/,"")+"B":P>=1e6?(P/1e6).toFixed(1).replace(/\.0$/,"")+"M":P>=1e4?(P/1e3).toFixed(1).replace(/\.0$/,"")+"K":P.toLocaleString(),n=qt(),s=V(null),r=V("main"),i=V(0),o=V(0),l=V(0),c=V(50),u=V(50),f=V([]),p=V([]),m=V(null),_=V(0),E=V(!1),T=V(!0),I=V(0),x=V(!1),F=V(!0),$=V(0),G=V(!1),re=V(!0),we=V(0),R=V(!1),C=V(!0),S=P=>{r.value=P,_.value=0,E.value=!1,T.value=!0,I.value=0,x.value=!1,F.value=!0,$.value=0,G.value=!1,re.value=!0,we.value=0,R.value=!1,C.value=!0},D=()=>{n.currentRoute.value.path==="/main"&&(r.value="main")};dt(()=>{s.value=nt(),s.value&&(o.value=s.value.gameData?.coins||0,l.value=0,i.value=o.value,u.value=s.value.gameData?.catFragments||50,s.value.gameData?.miningCats&&(We.value=s.value.gameData.miningCats),s.value.gameData?.huntingCats&&(fe.value=s.value.gameData.huntingCats),s.value.gameData?.explorationCats&&(y.value=s.value.gameData.explorationCats),s.value.gameData?.productionCats&&(b.value=s.value.gameData.productionCats)),rt(),n.afterEach(D);try{m.value=new Audio,m.value.src=new URL(""+new URL("clickbgm-BvbCQtA-.mp3",import.meta.url).href,import.meta.url).href,m.value.volume=.3}catch{console.log("클릭 사운드 파일을 찾을 수 없습니다.")}const P=()=>{!k()&&m.value&&(m.value.pause(),m.value.currentTime=0)};window.addEventListener("soundSettingChanged",P),q("mining"),q("hunting"),q("exploration"),q("production"),Wr(()=>{n.afterEach(D),Z(),window.removeEventListener("soundSettingChanged",P)})});const k=()=>{const P=localStorage.getItem("soundEnabled");return P!==null?P==="true":!0},O=P=>{if(m.value&&k()&&(m.value.currentTime=0,m.value.play().catch(()=>{})),w.value<Ct.value){alert("에너지가 부족합니다!");return}if(Ve()){if(P==="mining")if(_.value++,_.value>=10){i.value+=100,_.value=0,E.value=!0,T.value=!1;const A=Math.random();let N=0;if(A<.3?N=1:A<.4&&(N=2),N>0){u.value+=N;for(let ge=0;ge<N;ge++){const Pe=Math.floor(Math.random()*6)+1,Ye=Math.min(window.innerWidth||500,500),Je=window.innerHeight||800,Ge=60,Xe=30,Le={id:Date.now()+ge,x:Math.random()*(Ye-Ge-Xe*2)+Xe,y:Math.random()*(Je-Ge-Xe*2-200)+100,imageId:Pe};p.value.push(Le),setTimeout(()=>{const ke=p.value.findIndex(it=>it.id===Le.id);ke>-1&&p.value.splice(ke,1)},2e3)}}s.value&&pn(s.value.id,{coins:i.value,catFragments:u.value});const Q=Math.min(window.innerWidth||500,500),J=window.innerHeight||800,ee=220,ie=60,le=20,ce={id:Date.now(),text:"채굴 완료! 100원 획득!",x:Math.random()*(Q-ee-le*2)+le,y:Math.random()*(J-ie-le*2-200)+100};f.value.push(ce),setTimeout(()=>{const ge=f.value.findIndex(Pe=>Pe.id===ce.id);ge>-1&&f.value.splice(ge,1)},3e3),setTimeout(()=>{E.value=!1,T.value=!0},1500)}else{const A=Math.min(window.innerWidth||500,500),N=window.innerHeight||800,Q=220,J=60,ee=20,ie={id:Date.now(),text:`채굴 진행: ${_.value}/10`,x:Math.random()*(A-Q-ee*2)+ee,y:Math.random()*(N-J-ee*2-200)+100};f.value.push(ie),setTimeout(()=>{const le=f.value.findIndex(ce=>ce.id===ie.id);le>-1&&f.value.splice(le,1)},2e3)}else if(P==="exploration")if(I.value++,I.value>=10){i.value+=100,I.value=0,x.value=!0,F.value=!1;const A=Math.random();let N=0;if(A<.3?N=1:A<.4&&(N=2),N>0){u.value+=N;for(let ge=0;ge<N;ge++){const Pe=Math.floor(Math.random()*6)+1,Ye=Math.min(window.innerWidth||500,500),Je=window.innerHeight||800,Ge=60,Xe=30,Le={id:Date.now()+ge,x:Math.random()*(Ye-Ge-Xe*2)+Xe,y:Math.random()*(Je-Ge-Xe*2-200)+100,imageId:Pe};p.value.push(Le),setTimeout(()=>{const ke=p.value.findIndex(it=>it.id===Le.id);ke>-1&&p.value.splice(ke,1)},2e3)}}s.value&&pn(s.value.id,{coins:i.value,catFragments:u.value});const Q=Math.min(window.innerWidth||500,500),J=window.innerHeight||800,ee=220,ie=60,le=20,ce={id:Date.now(),text:"탐험 완료! 100원 획득!",x:Math.random()*(Q-ee-le*2)+le,y:Math.random()*(J-ie-le*2-200)+100};f.value.push(ce),setTimeout(()=>{const ge=f.value.findIndex(Pe=>Pe.id===ce.id);ge>-1&&f.value.splice(ge,1)},3e3),setTimeout(()=>{x.value=!1,F.value=!0},1500)}else{const A=Math.min(window.innerWidth||500,500),N=window.innerHeight||800,Q=220,J=60,ee=20,ie={id:Date.now(),text:`탐험 진행: ${I.value}/10`,x:Math.random()*(A-Q-ee*2)+ee,y:Math.random()*(N-J-ee*2-200)+100};f.value.push(ie),setTimeout(()=>{const le=f.value.findIndex(ce=>ce.id===ie.id);le>-1&&f.value.splice(le,1)},2e3)}else if(P==="hunting")if($.value++,$.value>=10){i.value+=100,$.value=0,G.value=!0,re.value=!1;const A=Math.random();let N=0;if(A<.3?N=1:A<.4&&(N=2),N>0){u.value+=N;for(let ge=0;ge<N;ge++){const Pe=Math.floor(Math.random()*6)+1,Ye=Math.min(window.innerWidth||500,500),Je=window.innerHeight||800,Ge=60,Xe=30,Le={id:Date.now()+ge,x:Math.random()*(Ye-Ge-Xe*2)+Xe,y:Math.random()*(Je-Ge-Xe*2-200)+100,imageId:Pe};p.value.push(Le),setTimeout(()=>{const ke=p.value.findIndex(it=>it.id===Le.id);ke>-1&&p.value.splice(ke,1)},2e3)}}s.value&&pn(s.value.id,{coins:i.value,catFragments:u.value});const Q=Math.min(window.innerWidth||500,500),J=window.innerHeight||800,ee=220,ie=60,le=20,ce={id:Date.now(),text:"사냥 완료! 100원 획득!",x:Math.random()*(Q-ee-le*2)+le,y:Math.random()*(J-ie-le*2-200)+100};f.value.push(ce),setTimeout(()=>{const ge=f.value.findIndex(Pe=>Pe.id===ce.id);ge>-1&&f.value.splice(ge,1)},3e3),setTimeout(()=>{G.value=!1,re.value=!0},1500)}else{const A=Math.min(window.innerWidth||500,500),N=window.innerHeight||800,Q=220,J=60,ee=20,ie={id:Date.now(),text:`사냥 진행: ${$.value}/10`,x:Math.random()*(A-Q-ee*2)+ee,y:Math.random()*(N-J-ee*2-200)+100};f.value.push(ie),setTimeout(()=>{const le=f.value.findIndex(ce=>ce.id===ie.id);le>-1&&f.value.splice(le,1)},2e3)}else if(P==="production")if(we.value++,we.value>=10){i.value+=100,we.value=0,R.value=!0,C.value=!1;const A=Math.random();let N=0;if(A<.3?N=1:A<.4&&(N=2),N>0){u.value+=N;for(let ge=0;ge<N;ge++){const Pe=Math.floor(Math.random()*6)+1,Ye=Math.min(window.innerWidth||500,500),Je=window.innerHeight||800,Ge=60,Xe=30,Le={id:Date.now()+ge,x:Math.random()*(Ye-Ge-Xe*2)+Xe,y:Math.random()*(Je-Ge-Xe*2-200)+100,imageId:Pe};p.value.push(Le),setTimeout(()=>{const ke=p.value.findIndex(it=>it.id===Le.id);ke>-1&&p.value.splice(ke,1)},2e3)}}s.value&&pn(s.value.id,{coins:i.value,catFragments:u.value});const Q=Math.min(window.innerWidth||500,500),J=window.innerHeight||800,ee=220,ie=60,le=20,ce={id:Date.now(),text:"생산 완료! 100원 획득!",x:Math.random()*(Q-ee-le*2)+le,y:Math.random()*(J-ie-le*2-200)+100};f.value.push(ce),setTimeout(()=>{const ge=f.value.findIndex(Pe=>Pe.id===ce.id);ge>-1&&f.value.splice(ge,1)},3e3),setTimeout(()=>{R.value=!1,C.value=!0},1500)}else{const A=Math.min(window.innerWidth||500,500),N=window.innerHeight||800,Q=220,J=60,ee=20,ie={id:Date.now(),text:`생산 진행: ${we.value}/10`,x:Math.random()*(A-Q-ee*2)+ee,y:Math.random()*(N-J-ee*2-200)+100};f.value.push(ie),setTimeout(()=>{const le=f.value.findIndex(ce=>ce.id===ie.id);le>-1&&f.value.splice(le,1)},2e3)}}};V(1),V(0),V(!1),V({stone:0,iron:0,gold:0,diamond:0});const w=V(4e3),Oe=V(4e3),Ct=V(1),rt=()=>{const P=new Date().toDateString(),A=localStorage.getItem("energyLastDate"),N=localStorage.getItem("currentEnergy");if(A!==P)w.value=Oe.value,localStorage.setItem("energyLastDate",P),localStorage.setItem("currentEnergy",Oe.value.toString());else if(N){const Q=parseInt(N)||0;w.value=Math.max(0,Math.min(Q,Oe.value))}else w.value=0},Ve=(P=Ct.value)=>w.value>=P?(w.value=Math.max(0,w.value-P),localStorage.setItem("currentEnergy",w.value.toString()),localStorage.setItem("energyLastDate",new Date().toDateString()),!0):!1,Te=P=>{try{return new URL(Object.assign({"../assets/img/cat1.png":th,"../assets/img/cat10.png":nh,"../assets/img/cat11.png":sh,"../assets/img/cat12.png":rh,"../assets/img/cat13.png":ih,"../assets/img/cat14.png":oh,"../assets/img/cat15.png":ah,"../assets/img/cat16.png":lh,"../assets/img/cat17.png":ch,"../assets/img/cat18.png":uh,"../assets/img/cat19.png":hh,"../assets/img/cat2.png":dh,"../assets/img/cat20.png":fh,"../assets/img/cat21.png":ph,"../assets/img/cat22.png":gh,"../assets/img/cat23.png":mh,"../assets/img/cat24.png":_h,"../assets/img/cat25.png":vh,"../assets/img/cat26.png":yh,"../assets/img/cat27.png":Ah,"../assets/img/cat28.png":Ih,"../assets/img/cat29.png":wh,"../assets/img/cat3.png":Eh,"../assets/img/cat30.png":Th,"../assets/img/cat4.png":Ch,"../assets/img/cat5.png":bh,"../assets/img/cat6.png":Sh,"../assets/img/cat7.png":Rh,"../assets/img/cat8.png":Ph,"../assets/img/cat9.png":kh,"../assets/img/catProfile01.png":Dh,"../assets/img/catProfile02.png":xh,"../assets/img/cat_ico.png":Nh})[`../assets/img/cat${P}.png`],import.meta.url).href}catch{return`/src/assets/img/cat${P}.png`}},Dt=P=>{try{return new URL(Object.assign({"../assets/img/tul1.png":N2,"../assets/img/tul2.png":M2,"../assets/img/tul3.png":O2,"../assets/img/tul5.png":V2,"../assets/img/tul6.png":L2})[`../assets/img/tul${P}.png`],import.meta.url).href}catch{return`/src/assets/img/tul${P}.png`}},We=V([null,null,null,null,null,null]),pt=V(!1),Re=V(-1),rn=V([]),Jt=()=>{const P=new Set;return We.value.forEach(A=>{A&&A.id&&P.add(A.id)}),fe.value.forEach(A=>{A&&A.id&&P.add(A.id)}),y.value.forEach(A=>{A&&A.id&&P.add(A.id)}),b.value.forEach(A=>{A&&A.id&&P.add(A.id)}),P},Xt=()=>{const P=nt();if(P){const A=P.gameData?.inventory||[],Q=[...[{id:1,name:"Robot",stars:1,level:1,imageId:1},{id:2,name:"Style",stars:1,level:1,imageId:2},{id:3,name:"Suit",stars:1,level:1,imageId:3},{id:4,name:"Tech",stars:1,level:1,imageId:4},{id:5,name:"Army",stars:1,level:1,imageId:5},{id:6,name:"Detective",stars:1,level:1,imageId:6},{id:7,name:"Scholar",stars:1,level:1,imageId:7},{id:8,name:"White",stars:1,level:1,imageId:8},{id:9,name:"Green",stars:1,level:1,imageId:9},{id:10,name:"Blue",stars:1,level:1,imageId:10},{id:11,name:"Red",stars:1,level:1,imageId:11},{id:12,name:"Shirt",stars:1,level:1,imageId:12},{id:13,name:"Ninja",stars:1,level:1,imageId:13},{id:14,name:"Knight",stars:1,level:1,imageId:14},{id:15,name:"Pirate",stars:1,level:1,imageId:15},{id:16,name:"Sailor",stars:1,level:1,imageId:16},{id:17,name:"Sport",stars:1,level:1,imageId:17},{id:18,name:"Cafe",stars:1,level:1,imageId:18},{id:19,name:"Chef",stars:1,level:1,imageId:19},{id:20,name:"Fisher",stars:1,level:1,imageId:20},{id:21,name:"Farmer",stars:1,level:1,imageId:21},{id:22,name:"Doctor",stars:1,level:1,imageId:22},{id:23,name:"Teacher",stars:1,level:1,imageId:23},{id:24,name:"Artist",stars:1,level:1,imageId:24}]];A.forEach(ie=>{const le=Q.findIndex(ce=>ce.id===ie.id);le>-1?Q[le]={...Q[le],...ie}:Q.push(ie)});const J=Jt(),ee=gt();ee&&ee.id&&J.delete(ee.id),rn.value=Q.filter(ie=>!J.has(ie.id))}},gt=()=>{const P=M.value,A=Re.value;if(A<0||A>=6)return null;let N=null;return P==="mining"?N=We.value:P==="hunting"?N=fe.value:P==="exploration"?N=y.value:P==="production"&&(N=b.value),N&&N[A]?N[A]:null},K=(P,A,N)=>{M.value=A,Xt(),Re.value=P,pt.value=!0},oe=P=>{if(Re.value>=0&&Re.value<6){const A={id:P.id,level:P.level||1,stars:P.stars||1,imageId:P.imageId||P.id,name:P.name};let N=[];M.value==="mining"?N=We.value:M.value==="hunting"?N=fe.value:M.value==="exploration"?N=y.value:M.value==="production"&&(N=b.value);const Q=N.findIndex((ee,ie)=>ee&&ee.id===P.id&&ie!==Re.value);if(Q!==-1){N[Q]=null;const ee=M.value,ie=`${ee}_${Q}_${P.id}`;W.value[ee][ie]&&delete W.value[ee][ie]}M.value==="mining"?(We.value[Re.value]=A,q("mining")):M.value==="hunting"?(fe.value[Re.value]=A,q("hunting")):M.value==="exploration"?(y.value[Re.value]=A,q("exploration")):M.value==="production"&&(b.value[Re.value]=A,q("production"));const J=nt();J&&pn(J.id,{miningCats:We.value,huntingCats:fe.value,explorationCats:y.value,productionCats:b.value})}pt.value=!1,Re.value=-1,M.value="mining"},se=()=>{if(Re.value>=0&&Re.value<6){const P=M.value;let A=[];P==="mining"?A=We.value:P==="hunting"?A=fe.value:P==="exploration"?A=y.value:P==="production"&&(A=b.value);const N=A[Re.value];if(P==="mining"?(We.value[Re.value]=null,q("mining")):P==="hunting"?(fe.value[Re.value]=null,q("hunting")):P==="exploration"?(y.value[Re.value]=null,q("exploration")):P==="production"&&(b.value[Re.value]=null,q("production")),N&&N.id){const J=`${P}_${Re.value}_${N.id}`;W.value[P][J]&&delete W.value[P][J]}const Q=nt();Q&&pn(Q.id,{miningCats:We.value,huntingCats:fe.value,explorationCats:y.value,productionCats:b.value})}pt.value=!1,Re.value=-1,M.value="mining"},he=()=>{pt.value=!1,Re.value=-1,M.value="mining"},fe=V([null,null,null,null,null,null]),y=V([null,null,null,null,null,null]),b=V([null,null,null,null,null,null]),M=V("mining"),z=V({mining:null,hunting:null,exploration:null,production:null}),W=V({mining:{},hunting:{},exploration:{},production:{}}),q=P=>{z.value[P]&&(clearInterval(z.value[P]),z.value[P]=null);let A=[];P==="mining"?A=We.value:P==="hunting"?A=fe.value:P==="exploration"?A=y.value:P==="production"&&(A=b.value);const N=A.filter(Q=>Q!==null);N.length!==0&&(N.forEach((Q,J)=>{const ee=`${P}_${J}_${Q.id}`;W.value[P][ee]||(W.value[P][ee]=0)}),z.value[P]=setInterval(()=>{let Q=[];P==="mining"?Q=We.value:P==="hunting"?Q=fe.value:P==="exploration"?Q=y.value:P==="production"&&(Q=b.value);const J=Q.filter(ce=>ce!==null);if(J.length===0){ne(P);return}const ie={mining:"채굴",hunting:"사냥",exploration:"탐험",production:"생산"}[P]||"작업";let le=[];P==="mining"?le=We.value:P==="hunting"?le=fe.value:P==="exploration"?le=y.value:P==="production"&&(le=b.value),J.forEach(ce=>{const ge=le.findIndex(it=>it&&it.id===ce.id);if(ge===-1)return;const Pe=`${P}_${ge}_${ce.id}`;W.value[P][Pe]||(W.value[P][Pe]=0),W.value[P][Pe]+=1;const Ye=W.value[P][Pe],Je=Math.min(window.innerWidth||500,500),Ge=window.innerHeight||800,Xe=220,Le=60,ke=20;if(Ye>=10){i.value+=100,o.value=i.value,W.value[P][Pe]=0;const it=Math.random();let xt=0;if(it<.3?xt=1:it<.4&&(xt=2),xt>0&&(u.value+=xt,r.value===P))for(let fn=0;fn<xt;fn++){const Tn=Math.floor(Math.random()*6)+1,Fs=60,mt=30,ni={id:Date.now()+fn+ge*1e3,x:Math.random()*(Je-Fs-mt*2)+mt,y:Math.random()*(Ge-Fs-mt*2-200)+100,imageId:Tn};p.value.push(ni),setTimeout(()=>{const ls=p.value.findIndex($s=>$s.id===ni.id);ls>-1&&p.value.splice(ls,1)},2e3)}if(s.value&&pn(s.value.id,{coins:i.value,catFragments:u.value}),r.value===P){const fn={id:Date.now()+ge+ce.id*1e4,text:`${ie} 완료! 100원 획득!`,x:Math.random()*(Je-Xe-ke*2)+ke,y:Math.random()*(Ge-Le-ke*2-200)+100};f.value.push(fn),setTimeout(()=>{const Tn=f.value.findIndex(Fs=>Fs.id===fn.id);Tn>-1&&f.value.splice(Tn,1)},3e3)}}else if(r.value===P){const it={id:Date.now()+ge+ce.id*1e3+Ye*100,text:`${ie} 진행: ${Ye}/10`,x:Math.random()*(Je-Xe-ke*2)+ke,y:Math.random()*(Ge-Le-ke*2-200)+100};f.value.push(it),setTimeout(()=>{const xt=f.value.findIndex(fn=>fn.id===it.id);xt>-1&&f.value.splice(xt,1)},2e3)}})},1e3))},ne=P=>{z.value[P]&&(clearInterval(z.value[P]),z.value[P]=null)},Z=()=>{Object.keys(z.value).forEach(P=>{ne(P)})};return Cs([We,fe,y,b],()=>{["mining","hunting","exploration","production"].forEach(A=>{let N=[];A==="mining"?N=We.value:A==="hunting"?N=fe.value:A==="exploration"?N=y.value:A==="production"&&(N=b.value);const Q=N.map((J,ee)=>J?`${A}_${ee}_${J.id}`:null).filter(J=>J!==null);Object.keys(W.value[A]).forEach(J=>{Q.includes(J)||delete W.value[A][J]})}),q("mining"),q("hunting"),q("exploration"),q("production")},{deep:!0}),V(1),V(0),V(!1),V([{name:"슬라임",level:1,hp:100,maxHp:100,exp:10,gold:5},{name:"고블린",level:2,hp:150,maxHp:150,exp:20,gold:10},{name:"오크",level:3,hp:200,maxHp:200,exp:35,gold:20}]),V(null),V({level:1,exp:0,maxExp:100,hp:100,maxHp:100,attack:20}),V(1),V(0),V(!1),V(null),V([{name:"신비한 숲",level:1,difficulty:"쉬움",rewards:["나무","열매","약초"],description:"평화로운 숲에서 기본 자원을 수집할 수 있습니다.",discovered:!0},{name:"고대 유적",level:2,difficulty:"보통",rewards:["고대 유물","마법석","보석"],description:"신비한 힘이 깃든 고대 유적지입니다.",discovered:!1},{name:"용의 동굴",level:3,difficulty:"어려움",rewards:["용의 비늘","마나 크리스탈","희귀 보석"],description:"위험하지만 귀중한 보물이 숨겨진 곳입니다.",discovered:!1}]),V({wood:0,fruit:0,herb:0,artifact:0,magicStone:0,gem:0,dragonScale:0,manaCrystal:0,rareGem:0}),V(1),V(0),V(!1),V(null),V({wood:10,stone:5,iron:3,gold:1,diamond:0,herb:8,fruit:12}),V([{id:"woodenSword",name:"나무 검",level:1,materials:{wood:5,stone:2},result:{woodenSword:1},time:30,description:"기본적인 나무 검입니다."},{id:"ironSword",name:"철 검",level:2,materials:{wood:3,iron:5,stone:3},result:{ironSword:1},time:60,description:"강력한 철 검입니다."},{id:"healthPotion",name:"체력 포션",level:1,materials:{herb:3,fruit:2},result:{healthPotion:1},time:20,description:"체력을 회복시켜주는 포션입니다."}]),V({woodenSword:0,ironSword:0,healthPotion:0}),(P,A)=>(L(),U("div",yk,[Ae(Qt,{coinCount:i.value,currentEnergy:w.value,maxEnergy:Oe.value,totalCoin:l.value,catCount:c.value},null,8,["coinCount","currentEnergy","maxEnergy","totalCoin","catCount"]),h("main",Ak,[r.value==="main"?(L(),U("article",Ik,[h("div",wk,[h("div",Ek,[A[14]||(A[14]=h("div",{class:"statLabel"},"총 포인트",-1)),h("div",Tk,[A[13]||(A[13]=h("div",{class:"iconCircle pointIcon"},[h("img",{src:B2,alt:"P"})],-1)),h("span",Ck,H(e(o.value)),1)])]),A[17]||(A[17]=h("div",{class:"divider"},null,-1)),h("div",bk,[A[16]||(A[16]=h("div",{class:"statLabel"},"총코인",-1)),h("div",Sk,[A[15]||(A[15]=h("div",{class:"iconCircle coinIcon"},[h("img",{src:ay,alt:"C"})],-1)),h("span",Rk,H(e(l.value)),1)])])]),h("div",Pk,[h("div",{class:"modeCard miningCard",onClick:A[0]||(A[0]=N=>S("mining"))},[...A[18]||(A[18]=[h("div",{class:"mainmenuBtns"},null,-1),h("div",{class:"modeTitle"},"채굴",-1),h("div",{class:"modeLevel"},"Level 01",-1)])]),h("div",{class:"modeCard huntingCard",onClick:A[1]||(A[1]=N=>S("hunting"))},[...A[19]||(A[19]=[h("div",{class:"mainmenuBtns"},null,-1),h("div",{class:"modeTitle"},"사냥",-1),h("div",{class:"modeLevel"},"Level 01",-1)])]),h("div",{class:"modeCard explorationCard",onClick:A[2]||(A[2]=N=>S("exploration"))},[...A[20]||(A[20]=[h("div",{class:"mainmenuBtns"},null,-1),h("div",{class:"modeTitle"},"탐험",-1),h("div",{class:"modeLevel"},"Level 01",-1)])]),h("div",{class:"modeCard productionCard",onClick:A[3]||(A[3]=N=>S("production"))},[...A[21]||(A[21]=[h("div",{class:"mainmenuBtns"},null,-1),h("div",{class:"modeTitle"},"생산",-1),h("div",{class:"modeLevel"},"Level 01",-1)])])])])):ue("",!0),r.value==="mining"?(L(),U("div",kk,[h("div",Dk,[h("button",{class:"backBtn",onClick:A[4]||(A[4]=N=>S("main"))},"← 뒤로")]),h("div",xk,H(e(o.value)),1),h("div",Nk,[T.value&&!E.value?(L(),U("button",{key:0,onClick:A[5]||(A[5]=N=>O("mining")),class:be(["clickerBtn miningBtn",{"mining-active":_.value>0}])},null,2)):ue("",!0),E.value?(L(),U("div",Mk,[...A[22]||(A[22]=[h("div",{class:"completeMessageText"},"채굴 완료!",-1)])])):ue("",!0)]),h("div",Ok,[h("div",Vk,[A[23]||(A[23]=h("span",{class:"energyIcon"},"⚡",-1)),h("span",Lk,H(w.value.toLocaleString())+"/"+H(Oe.value.toLocaleString()),1)]),h("div",Bk,[h("div",{class:"energyFill",style:yt({width:w.value/Oe.value*100+"%"})},null,4)])]),h("div",Uk,[A[26]||(A[26]=h("div",{class:"catsListLabel"},"채굴 냥이 목록",-1)),h("div",Fk,[(L(!0),U(Ce,null,Be(We.value,(N,Q)=>(L(),U("div",{key:Q,class:be(["catCard",{emptySlot:!N,working:N&&r.value==="mining"}]),onClick:J=>K(Q,"mining")},[N?(L(),U("div",Hk,"Lv "+H(String(N.level).padStart(2,"0")),1)):ue("",!0),N?(L(),U("div",jk,[h("img",{src:Te(N.imageId),alt:"고양이"},null,8,Gk)])):ue("",!0),N?(L(),U("div",qk,[(L(!0),U(Ce,null,Be(N.stars,J=>(L(),U("span",{key:J,class:"star"},[...A[24]||(A[24]=[h("img",{src:"",alt:""},null,-1)])]))),128))])):ue("",!0),N?ue("",!0):(L(),U("div",Qk,[...A[25]||(A[25]=[h("span",{class:"emptySlotText"},"+",-1)])]))],10,$k))),128))])])])):ue("",!0),r.value==="hunting"?(L(),U("div",zk,[h("div",Wk,[h("button",{class:"backBtn",onClick:A[6]||(A[6]=N=>S("main"))},"← 뒤로")]),h("div",Kk,H(e(o.value)),1),h("div",Yk,[re.value&&!G.value?(L(),U("button",{key:0,onClick:A[7]||(A[7]=N=>O("hunting")),class:be(["clickerBtn huntingBtn",{"hunting-active":$.value>0}])},null,2)):ue("",!0),G.value?(L(),U("div",Jk,[...A[27]||(A[27]=[h("div",{class:"completeMessageText"},"사냥 완료!",-1)])])):ue("",!0)]),h("div",Xk,[h("div",Zk,[A[28]||(A[28]=h("span",{class:"energyIcon"},"⚡",-1)),h("span",eD,H(w.value.toLocaleString())+"/"+H(Oe.value.toLocaleString()),1)]),h("div",tD,[h("div",{class:"energyFill",style:yt({width:w.value/Oe.value*100+"%"})},null,4)])]),h("div",nD,[A[31]||(A[31]=h("div",{class:"catsListLabel"},"사냥 냥이 목록",-1)),h("div",sD,[(L(!0),U(Ce,null,Be(fe.value,(N,Q)=>(L(),U("div",{key:Q,class:be(["catCard",{emptySlot:!N,working:N&&r.value==="hunting"}]),onClick:J=>K(Q,"hunting")},[N?(L(),U("div",iD,"Lv "+H(String(N.level).padStart(2,"0")),1)):ue("",!0),N?(L(),U("div",oD,[h("img",{src:Te(N.imageId),alt:"고양이"},null,8,aD)])):ue("",!0),N?(L(),U("div",lD,[(L(!0),U(Ce,null,Be(N.stars,J=>(L(),U("span",{key:J,class:"star"},[...A[29]||(A[29]=[h("img",{src:"",alt:""},null,-1)])]))),128))])):ue("",!0),N?ue("",!0):(L(),U("div",cD,[...A[30]||(A[30]=[h("span",{class:"emptySlotText"},"+",-1)])]))],10,rD))),128))])])])):ue("",!0),r.value==="exploration"?(L(),U("div",uD,[h("div",hD,[h("button",{class:"backBtn",onClick:A[8]||(A[8]=N=>S("main"))},"← 뒤로")]),h("div",dD,H(e(o.value)),1),h("div",fD,[F.value&&!x.value?(L(),U("button",{key:0,onClick:A[9]||(A[9]=N=>O("exploration")),class:be(["clickerBtn explorationBtn",{"exploration-active":I.value>0}])},null,2)):ue("",!0),x.value?(L(),U("div",pD,[...A[32]||(A[32]=[h("div",{class:"completeMessageText"},"탐험 완료!",-1)])])):ue("",!0)]),h("div",gD,[h("div",mD,[A[33]||(A[33]=h("span",{class:"energyIcon"},"⚡",-1)),h("span",_D,H(w.value.toLocaleString())+"/"+H(Oe.value.toLocaleString()),1)]),h("div",vD,[h("div",{class:"energyFill",style:yt({width:w.value/Oe.value*100+"%"})},null,4)])]),h("div",yD,[A[36]||(A[36]=h("div",{class:"catsListLabel"},"탐험 냥이 목록",-1)),h("div",AD,[(L(!0),U(Ce,null,Be(y.value,(N,Q)=>(L(),U("div",{key:Q,class:be(["catCard",{emptySlot:!N,working:N&&r.value==="exploration"}]),onClick:J=>K(Q,"exploration")},[N?(L(),U("div",wD,"Lv "+H(String(N.level).padStart(2,"0")),1)):ue("",!0),N?(L(),U("div",ED,[h("img",{src:Te(N.imageId),alt:"고양이"},null,8,TD)])):ue("",!0),N?(L(),U("div",CD,[(L(!0),U(Ce,null,Be(N.stars,J=>(L(),U("span",{key:J,class:"star"},[...A[34]||(A[34]=[h("img",{src:"",alt:""},null,-1)])]))),128))])):ue("",!0),N?ue("",!0):(L(),U("div",bD,[...A[35]||(A[35]=[h("span",{class:"emptySlotText"},"+",-1)])]))],10,ID))),128))])])])):ue("",!0),r.value==="production"?(L(),U("div",SD,[h("div",RD,[h("button",{class:"backBtn",onClick:A[10]||(A[10]=N=>S("main"))},"← 뒤로")]),h("div",PD,H(e(o.value)),1),h("div",kD,[C.value&&!R.value?(L(),U("button",{key:0,onClick:A[11]||(A[11]=N=>O("production")),class:be(["clickerBtn productionBtn",{"production-active":we.value>0}])},null,2)):ue("",!0),R.value?(L(),U("div",DD,[...A[37]||(A[37]=[h("div",{class:"completeMessageText"},"생산 완료!",-1)])])):ue("",!0)]),h("div",xD,[h("div",ND,[A[38]||(A[38]=h("span",{class:"energyIcon"},"⚡",-1)),h("span",MD,H(w.value.toLocaleString())+"/"+H(Oe.value.toLocaleString()),1)]),h("div",OD,[h("div",{class:"energyFill",style:yt({width:w.value/Oe.value*100+"%"})},null,4)])]),h("div",VD,[A[41]||(A[41]=h("div",{class:"catsListLabel"},"생산 냥이 목록",-1)),h("div",LD,[(L(!0),U(Ce,null,Be(b.value,(N,Q)=>(L(),U("div",{key:Q,class:be(["catCard",{emptySlot:!N,working:N&&r.value==="production"}]),onClick:J=>K(Q,"production")},[N?(L(),U("div",UD,"Lv "+H(String(N.level).padStart(2,"0")),1)):ue("",!0),N?(L(),U("div",FD,[h("img",{src:Te(N.imageId),alt:"고양이"},null,8,$D)])):ue("",!0),N?(L(),U("div",HD,[(L(!0),U(Ce,null,Be(N.stars,J=>(L(),U("span",{key:J,class:"star"},[...A[39]||(A[39]=[h("img",{src:"",alt:""},null,-1)])]))),128))])):ue("",!0),N?ue("",!0):(L(),U("div",jD,[...A[40]||(A[40]=[h("span",{class:"emptySlotText"},"+",-1)])]))],10,BD))),128))])])])):ue("",!0)]),Ae(zt),r.value!=="main"?(L(),U("div",GD,[(L(!0),U(Ce,null,Be(f.value,N=>(L(),U("div",{key:N.id,class:"speechBubble",style:yt({left:N.x+"px",top:N.y+"px",transform:"translateX(-50%)"})},H(N.text),5))),128))])):ue("",!0),r.value!=="main"?(L(),U("div",qD,[(L(!0),U(Ce,null,Be(p.value,N=>(L(),U("div",{key:N.id,class:"catEmoji",style:yt({left:N.x+"px",top:N.y+"px"})},[h("img",{src:Dt(N.imageId),alt:"",class:"tulImage"},null,8,QD)],4))),128))])):ue("",!0),pt.value?(L(),U("div",{key:2,class:"catSelectPopupOverlay",onClick:he},[h("div",{class:"catSelectPopupContent",onClick:A[12]||(A[12]=ki(()=>{},["stop"]))},[h("div",{class:"catSelectPopupHeader"},[A[42]||(A[42]=h("h3",null,"고양이 선택",-1)),h("button",{class:"closePopupBtn",onClick:he},"×")]),h("div",zD,[gt()?(L(),U("div",WD,[h("button",{class:"removeCatBtn",onClick:se}," 고양이 제거 ")])):ue("",!0),h("div",KD,[(L(!0),U(Ce,null,Be(rn.value,N=>(L(),U("div",{key:N.id,class:"availableCatCard",onClick:Q=>oe(N)},[h("div",JD,[h("img",{src:Te(N.imageId||N.id),alt:"고양이"},null,8,XD)]),h("div",ZD,[h("div",ex,H(N.name),1),h("div",tx,"Lv "+H(String(N.level||1).padStart(2,"0")),1),h("div",nx,[(L(!0),U(Ce,null,Be(N.stars||1,Q=>(L(),U("span",{key:Q,class:"star"},"★"))),128))])])],8,YD))),128))])])])])):ue("",!0)]))}},rx=ft(sx,[["__scopeId","data-v-3b438c87"]]),ix={class:"miningPage"},ox={class:"mainContent"},ax={class:"miningContainer"},lx={class:"pageHeader"},cx={class:"levelInfo"},ux={class:"miningProgress"},hx={class:"progressBar"},dx={class:"progressText"},fx=["disabled"],px={key:0},gx={key:1},mx={class:"resources"},_x={class:"resourceList"},vx={class:"resourceItem"},yx={class:"resourceItem"},Ax={class:"resourceItem"},Ix={class:"resourceItem"},wx={__name:"MiningPage",setup(t){const e=qt(),n=V(0);dt(()=>{const c=nt();c&&(n.value=c.gameData?.coins||0)});const s=V(1),r=V(0),i=V(!1),o=V({stone:0,iron:0,gold:0,diamond:0}),l=()=>{if(i.value)return;i.value=!0,r.value=0;const c=setInterval(()=>{if(r.value+=10,r.value>=100){clearInterval(c),i.value=!1,r.value=0;const u=Math.random();u<.4?o.value.stone++:u<.7?o.value.iron++:u<.9?o.value.gold++:o.value.diamond++}},200)};return(c,u)=>(L(),U("div",ix,[Ae(Qt,{coinCount:n.value},null,8,["coinCount"]),h("main",ox,[h("div",ax,[h("div",lx,[h("button",{class:"backBtn",onClick:u[0]||(u[0]=f=>Pt(e).push("/main"))},"← 뒤로"),u[1]||(u[1]=h("h2",null,"⛏️ 채굴",-1))]),h("div",cx,[h("span",null,"채굴 레벨: "+H(s.value),1)]),h("div",ux,[h("div",hx,[h("div",{class:"progressFill",style:yt({width:r.value+"%"})},null,4)]),h("span",dx,H(r.value)+"%",1)]),h("button",{class:be(["miningBtn",{mining:i.value}]),onClick:l,disabled:i.value},[i.value?(L(),U("span",gx,"⛏️ 채굴 중...")):(L(),U("span",px,"⛏️ 채굴 시작"))],10,fx),h("div",mx,[u[6]||(u[6]=h("h3",null,"보유 자원",-1)),h("div",_x,[h("div",vx,[u[2]||(u[2]=h("span",null,"🪨 돌",-1)),h("span",null,H(o.value.stone),1)]),h("div",yx,[u[3]||(u[3]=h("span",null,"⚒️ 철",-1)),h("span",null,H(o.value.iron),1)]),h("div",Ax,[u[4]||(u[4]=h("span",null,"🥇 금",-1)),h("span",null,H(o.value.gold),1)]),h("div",Ix,[u[5]||(u[5]=h("span",null,"💎 다이아몬드",-1)),h("span",null,H(o.value.diamond),1)])])])])]),Ae(zt)]))}},Ex=ft(wx,[["__scopeId","data-v-17eb7d34"]]),Tx={class:"huntingPage"},Cx={class:"mainContent"},bx={class:"huntingContainer"},Sx={class:"pageHeader"},Rx={class:"playerStats"},Px={class:"statsGrid"},kx={class:"statItem"},Dx={class:"statItem"},xx={class:"statItem"},Nx={class:"statItem"},Mx={class:"monsterSelection"},Ox={class:"monsterList"},Vx=["onClick"],Lx={class:"monsterInfo"},Bx={class:"monsterName"},Ux={class:"monsterLevel"},Fx={class:"monsterRewards"},$x={key:0,class:"currentMonster"},Hx={class:"monsterHp"},jx={class:"hpBar"},Gx={class:"hpText"},qx={class:"huntingProgress"},Qx={class:"progressBar"},zx={class:"progressText"},Wx=["disabled"],Kx={key:0},Yx={key:1},Jx={__name:"HuntingPage",setup(t){const e=qt(),n=V(0);dt(()=>{const f=nt();f&&(n.value=f.gameData?.coins||0)}),V(1);const s=V(0),r=V(!1),i=V([{name:"슬라임",level:1,hp:100,maxHp:100,exp:10,gold:5},{name:"고블린",level:2,hp:150,maxHp:150,exp:20,gold:10},{name:"오크",level:3,hp:200,maxHp:200,exp:35,gold:20}]),o=V(null),l=V({level:1,exp:0,maxExp:100,hp:100,maxHp:100,attack:20}),c=f=>{o.value={...f}},u=()=>{if(!o.value||r.value)return;r.value=!0,s.value=0;const f=setInterval(()=>{const p=Math.floor(Math.random()*l.value.attack)+10;o.value.hp-=p,o.value.hp<=0?(clearInterval(f),r.value=!1,s.value=100,l.value.exp+=o.value.exp,l.value.hp=l.value.maxHp,l.value.exp>=l.value.maxExp&&(l.value.level++,l.value.exp=0,l.value.maxExp=Math.floor(l.value.maxExp*1.5),l.value.attack+=5,l.value.maxHp+=20,l.value.hp=l.value.maxHp),setTimeout(()=>{o.value=null,s.value=0},2e3)):s.value=(o.value.maxHp-o.value.hp)/o.value.maxHp*100},500)};return(f,p)=>(L(),U("div",Tx,[Ae(Qt,{coinCount:n.value},null,8,["coinCount"]),h("main",Cx,[h("div",bx,[h("div",Sx,[h("button",{class:"backBtn",onClick:p[0]||(p[0]=m=>Pt(e).push("/main"))},"← 뒤로"),p[1]||(p[1]=h("h2",null,"⚔️ 사냥",-1))]),h("div",Rx,[p[6]||(p[6]=h("h3",null,"플레이어 정보",-1)),h("div",Px,[h("div",kx,[p[2]||(p[2]=h("span",null,"레벨",-1)),h("span",null,H(l.value.level),1)]),h("div",Dx,[p[3]||(p[3]=h("span",null,"체력",-1)),h("span",null,H(l.value.hp)+"/"+H(l.value.maxHp),1)]),h("div",xx,[p[4]||(p[4]=h("span",null,"공격력",-1)),h("span",null,H(l.value.attack),1)]),h("div",Nx,[p[5]||(p[5]=h("span",null,"경험치",-1)),h("span",null,H(l.value.exp)+"/"+H(l.value.maxExp),1)])])]),h("div",Mx,[p[7]||(p[7]=h("h3",null,"몬스터 선택",-1)),h("div",Ox,[(L(!0),U(Ce,null,Be(i.value,m=>(L(),U("div",{key:m.name,class:be(["monsterCard",{selected:o.value?.name===m.name}]),onClick:_=>c(m)},[h("div",Lx,[h("span",Bx,H(m.name),1),h("span",Ux,"Lv."+H(m.level),1)]),h("div",Fx,[h("span",null,"EXP: "+H(m.exp),1),h("span",null,"Gold: "+H(m.gold),1)])],10,Vx))),128))])]),o.value?(L(),U("div",$x,[h("h3",null,H(o.value.name)+" (Lv."+H(o.value.level)+")",1),h("div",Hx,[h("div",jx,[h("div",{class:"hpFill",style:yt({width:o.value.hp/o.value.maxHp*100+"%"})},null,4)]),h("span",Gx,H(o.value.hp)+"/"+H(o.value.maxHp),1)]),h("div",qx,[h("div",Qx,[h("div",{class:"progressFill",style:yt({width:s.value+"%"})},null,4)]),h("span",zx,H(Math.floor(s.value))+"%",1)]),h("button",{class:be(["huntingBtn",{hunting:r.value}]),onClick:u,disabled:r.value},[r.value?(L(),U("span",Yx,"⚔️ 사냥 중...")):(L(),U("span",Kx,"⚔️ 사냥 시작"))],10,Wx)])):ue("",!0)])]),Ae(zt)]))}},Xx=ft(Jx,[["__scopeId","data-v-9c82efe6"]]),Zx={class:"explorationPage"},eN={class:"mainContent"},tN={class:"explorationContainer"},nN={class:"pageHeader"},sN={class:"levelInfo"},rN={class:"locationSelection"},iN={class:"locationList"},oN=["onClick"],aN={class:"locationInfo"},lN={class:"locationHeader"},cN={class:"locationName"},uN={class:"locationLevel"},hN={class:"locationDifficulty"},dN={class:"locationDescription"},fN={class:"locationRewards"},pN={key:0,class:"undiscoveredOverlay"},gN={key:0,class:"currentExploration"},mN={class:"explorationProgress"},_N={class:"progressBar"},vN={class:"progressText"},yN=["disabled"],AN={key:0},IN={key:1},wN={class:"explorationRewards"},EN={class:"rewardsGrid"},TN={class:"rewardIcon"},CN={class:"rewardAmount"},bN={__name:"ExplorationPage",setup(t){const e=qt(),n=V(0);dt(()=>{const p=nt();p&&(n.value=p.gameData?.coins||0)});const s=V(1),r=V(0),i=V(!1),o=V(null);V([]);const l=V([{name:"신비한 숲",level:1,difficulty:"쉬움",rewards:["나무","열매","약초"],description:"평화로운 숲에서 기본 자원을 수집할 수 있습니다.",discovered:!0},{name:"고대 유적",level:2,difficulty:"보통",rewards:["고대 유물","마법석","보석"],description:"신비한 힘이 깃든 고대 유적지입니다.",discovered:!1},{name:"용의 동굴",level:3,difficulty:"어려움",rewards:["용의 비늘","마나 크리스탈","희귀 보석"],description:"위험하지만 귀중한 보물이 숨겨진 곳입니다.",discovered:!1},{name:"천공의 섬",level:4,difficulty:"매우 어려움",rewards:["천공석","신비한 에너지","전설의 아이템"],description:"구름 위에 떠있는 신비한 섬입니다.",discovered:!1}]),c=V({wood:0,fruit:0,herb:0,artifact:0,magicStone:0,gem:0,dragonScale:0,manaCrystal:0,rareGem:0,skyStone:0,mysteriousEnergy:0,legendaryItem:0}),u=p=>{p.discovered&&(o.value=p)},f=()=>{if(!o.value||i.value)return;i.value=!0,r.value=0;const p=setInterval(()=>{if(r.value+=5,r.value>=100){clearInterval(p),i.value=!1,r.value=0;const m=Math.floor(Math.random()*o.value.rewards.length),_=o.value.rewards[m],E={나무:"wood",열매:"fruit",약초:"herb","고대 유물":"artifact",마법석:"magicStone",보석:"gem","용의 비늘":"dragonScale","마나 크리스탈":"manaCrystal","희귀 보석":"rareGem",천공석:"skyStone","신비한 에너지":"mysteriousEnergy","전설의 아이템":"legendaryItem"};if(E[_]&&c.value[E[_]]++,Math.random()<.3){const T=l.value.find(I=>!I.discovered);T&&(T.discovered=!0)}s.value++,setTimeout(()=>{o.value=null},2e3)}},300)};return(p,m)=>(L(),U("div",Zx,[Ae(Qt,{coinCount:n.value},null,8,["coinCount"]),h("main",eN,[h("div",tN,[h("div",nN,[h("button",{class:"backBtn",onClick:m[0]||(m[0]=_=>Pt(e).push("/main"))},"← 뒤로"),m[1]||(m[1]=h("h2",null,"🗺️ 탐험",-1))]),h("div",sN,[h("span",null,"탐험 레벨: "+H(s.value),1)]),h("div",rN,[m[3]||(m[3]=h("h3",null,"탐험 지역",-1)),h("div",iN,[(L(!0),U(Ce,null,Be(l.value,_=>(L(),U("div",{key:_.name,class:be(["locationCard",{selected:o.value?.name===_.name,undiscovered:!_.discovered}]),onClick:E=>u(_)},[h("div",aN,[h("div",lN,[h("span",cN,H(_.name),1),h("span",uN,"Lv."+H(_.level),1)]),h("span",hN,H(_.difficulty),1),h("p",dN,H(_.description),1),h("div",fN,[(L(!0),U(Ce,null,Be(_.rewards,E=>(L(),U("span",{key:E,class:"rewardTag"},H(E),1))),128))])]),_.discovered?ue("",!0):(L(),U("div",pN,[...m[2]||(m[2]=[h("span",null,"🔒 미발견",-1)])]))],10,oN))),128))])]),o.value?(L(),U("div",gN,[h("h3",null,H(o.value.name)+" 탐험 중",1),h("div",mN,[h("div",_N,[h("div",{class:"progressFill",style:yt({width:r.value+"%"})},null,4)]),h("span",vN,H(r.value)+"%",1)]),h("button",{class:be(["explorationBtn",{exploring:i.value}]),onClick:f,disabled:i.value},[i.value?(L(),U("span",IN,"🗺️ 탐험 중...")):(L(),U("span",AN,"🗺️ 탐험 시작"))],10,yN)])):ue("",!0),h("div",wN,[m[4]||(m[4]=h("h3",null,"탐험 보상",-1)),h("div",EN,[(L(!0),U(Ce,null,Be(c.value,(_,E)=>mn((L(),U("div",{key:E,class:"rewardItem"},[h("span",TN,H(E==="wood"?"🪵":E==="fruit"?"🍎":E==="herb"?"🌿":E==="artifact"?"🏺":E==="magicStone"||E==="gem"?"💎":E==="dragonScale"?"🐉":E==="manaCrystal"?"🔮":E==="rareGem"?"💠":E==="skyStone"?"☁️":E==="mysteriousEnergy"?"✨":E==="legendaryItem"?"⭐":"🎁"),1),h("span",CN,H(_),1)])),[[Zg,_>0]])),128))])])])]),Ae(zt)]))}},SN=ft(bN,[["__scopeId","data-v-f05b4431"]]),RN={class:"productionPage"},PN={class:"mainContent"},kN={class:"productionContainer"},DN={class:"pageHeader"},xN={class:"levelInfo"},NN={class:"inventory"},MN={class:"inventoryGrid"},ON={class:"materialIcon"},VN={class:"materialName"},LN={class:"materialAmount"},BN={class:"recipes"},UN={class:"recipeList"},FN=["onClick"],$N={class:"recipeInfo"},HN={class:"recipeHeader"},jN={class:"recipeName"},GN={class:"recipeLevel"},qN={class:"recipeDescription"},QN={class:"recipeMaterials"},zN={class:"recipeTime"},WN={key:0,class:"currentProduction"},KN={class:"productionProgress"},YN={class:"progressBar"},JN={class:"progressText"},XN=["disabled"],ZN={key:0},eM={key:1},tM={class:"producedItems"},nM={class:"itemsGrid"},sM={class:"itemIcon"},rM={class:"itemName"},iM={class:"itemAmount"},oM={__name:"ProductionPage",setup(t){const e=qt(),n=V(0);dt(()=>{const _=nt();_&&(n.value=_.gameData?.coins||0)});const s=V(1),r=V(0),i=V(!1),o=V(null),l=V({wood:10,stone:5,iron:3,gold:1,diamond:0,herb:8,fruit:12}),c=V([{id:"woodenSword",name:"나무 검",level:1,materials:{wood:5,stone:2},result:{woodenSword:1},time:30,description:"기본적인 나무 검입니다."},{id:"ironSword",name:"철 검",level:2,materials:{wood:3,iron:5,stone:3},result:{ironSword:1},time:60,description:"강력한 철 검입니다."},{id:"goldenSword",name:"황금 검",level:3,materials:{iron:3,gold:8,diamond:1},result:{goldenSword:1},time:120,description:"매우 강력한 황금 검입니다."},{id:"healthPotion",name:"체력 포션",level:1,materials:{herb:3,fruit:2},result:{healthPotion:1},time:20,description:"체력을 회복시켜주는 포션입니다."},{id:"manaPotion",name:"마나 포션",level:2,materials:{herb:5,fruit:3,stone:1},result:{manaPotion:1},time:40,description:"마나를 회복시켜주는 포션입니다."},{id:"magicRing",name:"마법 반지",level:3,materials:{gold:5,diamond:2,herb:4},result:{magicRing:1},time:90,description:"마법력을 증폭시키는 반지입니다."}]),u=V({woodenSword:0,ironSword:0,goldenSword:0,healthPotion:0,manaPotion:0,magicRing:0}),f=_=>{Object.entries(_.materials).every(([T,I])=>l.value[T]>=I)&&_.level<=s.value&&(o.value=_)},p=()=>{if(!o.value||i.value)return;Object.entries(o.value.materials).forEach(([E,T])=>{l.value[E]-=T}),i.value=!0,r.value=0;const _=setInterval(()=>{r.value+=100/(o.value.time/.1),r.value>=100&&(clearInterval(_),i.value=!1,r.value=0,Object.entries(o.value.result).forEach(([E,T])=>{u.value[E]+=T}),Math.random()<.1&&s.value++,setTimeout(()=>{o.value=null},2e3))},100)},m=_=>Object.entries(_.materials).every(([T,I])=>l.value[T]>=I)&&_.level<=s.value;return(_,E)=>(L(),U("div",RN,[Ae(Qt,{coinCount:n.value},null,8,["coinCount"]),h("main",PN,[h("div",kN,[h("div",DN,[h("button",{class:"backBtn",onClick:E[0]||(E[0]=T=>Pt(e).push("/main"))},"← 뒤로"),E[1]||(E[1]=h("h2",null,"🏭 생산",-1))]),h("div",xN,[h("span",null,"생산 레벨: "+H(s.value),1)]),h("div",NN,[E[2]||(E[2]=h("h3",null,"재료 보유량",-1)),h("div",MN,[(L(!0),U(Ce,null,Be(l.value,(T,I)=>(L(),U("div",{key:I,class:"inventoryItem"},[h("span",ON,H(I==="wood"?"🪵":I==="stone"?"🪨":I==="iron"?"⚒️":I==="gold"?"🥇":I==="diamond"?"💎":I==="herb"?"🌿":I==="fruit"?"🍎":"📦"),1),h("span",VN,H(I),1),h("span",LN,H(T),1)]))),128))])]),h("div",BN,[E[3]||(E[3]=h("h3",null,"제작 레시피",-1)),h("div",UN,[(L(!0),U(Ce,null,Be(c.value,T=>(L(),U("div",{key:T.id,class:be(["recipeCard",{selected:o.value?.id===T.id,disabled:!m(T)}]),onClick:I=>f(T)},[h("div",$N,[h("div",HN,[h("span",jN,H(T.name),1),h("span",GN,"Lv."+H(T.level),1)]),h("p",qN,H(T.description),1),h("div",QN,[(L(!0),U(Ce,null,Be(T.materials,(I,x)=>(L(),U("span",{key:x,class:"materialTag"},H(x)+" x"+H(I),1))),128))]),h("div",zN,[h("span",null,"⏱️ "+H(T.time)+"초",1)])])],10,FN))),128))])]),o.value?(L(),U("div",WN,[h("h3",null,H(o.value.name)+" 제작 중",1),h("div",KN,[h("div",YN,[h("div",{class:"progressFill",style:yt({width:r.value+"%"})},null,4)]),h("span",JN,H(Math.floor(r.value))+"%",1)]),h("button",{class:be(["productionBtn",{producing:i.value}]),onClick:p,disabled:i.value},[i.value?(L(),U("span",eM,"🏭 제작 중...")):(L(),U("span",ZN,"🏭 제작 시작"))],10,XN)])):ue("",!0),h("div",tM,[E[4]||(E[4]=h("h3",null,"제작된 아이템",-1)),h("div",nM,[(L(!0),U(Ce,null,Be(u.value,(T,I)=>mn((L(),U("div",{key:I,class:"itemCard"},[h("span",sM,H(I==="woodenSword"?"🗡️":I==="ironSword"?"⚔️":I==="goldenSword"?"🏆":I==="healthPotion"?"🧪":I==="manaPotion"?"💊":I==="magicRing"?"💍":"📦"),1),h("span",rM,H(I),1),h("span",iM,H(T),1)])),[[Zg,T>0]])),128))])])])]),Ae(zt)]))}},aM=ft(oM,[["__scopeId","data-v-2344037c"]]),lM={class:"exchangePage"},cM={class:"mainContent"},uM={class:"tabs"},hM={class:"panel"},dM={class:"panelRow"},fM={class:"inputBox"},pM={class:"panelRow"},gM={class:"inputBox"},mM={class:"panel"},_M={class:"panelRow"},vM={class:"panelRow"},yM={class:"panel"},AM={class:"panelRow"},IM={class:"valueBox"},wM={class:"panelRow"},EM={class:"valueBox"},TM={class:"panelRow"},CM={class:"valueBox"},bM={__name:"ExchangePage",setup(t){const e=V(null),n=V(0),s=V(0),r=V("buy"),i=V(""),o=V(""),l=V(""),c=V(1e3),u=V(2e3),f=je(()=>{if(r.value==="buy"&&i.value&&l.value){const x=m(l.value),F=parseInt(i.value)||c.value;return Math.floor(x/1e8*F).toLocaleString()}else if(r.value==="sell"&&o.value&&l.value){const x=m(l.value),F=parseInt(o.value)||c.value;return Math.floor(x/1e8*F).toLocaleString()}return"0"}),p=je(()=>l.value?_(m(l.value)):"0"),m=x=>{if(!x)return 0;const F=x.toLowerCase().trim();if(F.includes("억")){const $=parseFloat(F.replace("억","").trim())||1;return Math.floor($*1e8)}else if(F.includes("만")){const $=parseFloat(F.replace("만","").trim())||1;return Math.floor($*1e4)}else return parseInt(x.replace(/,/g,""))||0},_=x=>{if(x>=1e8){const F=Math.floor(x/1e8),$=Math.floor(x%1e8/1e4);return $>0?`${F}억 ${$}만`:`${F}억`}else if(x>=1e4)return`${Math.floor(x/1e4)}만`;return x.toLocaleString()},E=V(5),T=()=>{const x=nt();x&&(e.value=x,n.value=x.gameData?.coins||0,s.value=x.gameData?.totalCoin||0)},I=()=>{if(!e.value){alert("로그인이 필요합니다.");return}if(!l.value){alert("코인 수량을 입력해주세요.");return}if(r.value==="buy"){if(!i.value){alert("구매 희망가격을 입력해주세요.");return}const x=m(l.value),F=parseInt(i.value)||u.value,$=Math.floor(x/1e8*F);if(n.value<$){alert(`포인트가 부족합니다. 필요: ${$.toLocaleString()} Point`);return}if(E.value<=0){alert("오늘 남은 등록 횟수가 없습니다.");return}const G=n.value-$,re=s.value+x;ka(e.value.id,G,re)?(n.value=G,s.value=re,T(),window.dispatchEvent(new CustomEvent("userDataUpdated")),E.value--,alert(`구매 완료!
${_(x)} Coin 구매
사용한 Point: ${$.toLocaleString()}`),i.value="",l.value=""):alert("거래 실패. 다시 시도해주세요.")}else{if(!o.value){alert("판매 희망가격을 입력해주세요.");return}const x=m(l.value),F=parseInt(o.value)||c.value,$=Math.floor(x/1e8*F);if(s.value<x){alert(`코인이 부족합니다. 보유: ${_(s.value)}, 필요: ${_(x)}`);return}if(E.value<=0){alert("오늘 남은 등록 횟수가 없습니다.");return}const G=n.value+$,re=s.value-x;ka(e.value.id,G,re)?(n.value=G,s.value=re,T(),window.dispatchEvent(new CustomEvent("userDataUpdated")),E.value--,alert(`판매 완료!
${_(x)} Coin 판매
받은 Point: ${$.toLocaleString()}`),o.value="",l.value=""):alert("거래 실패. 다시 시도해주세요.")}};return Cs(r,()=>{i.value="",o.value="",l.value=""}),dt(()=>{T()}),(x,F)=>(L(),U("div",lM,[Ae(Qt,{coinCount:n.value},null,8,["coinCount"]),h("main",cM,[h("div",uM,[h("button",{class:be(["tab",{active:r.value==="buy"}]),onClick:F[0]||(F[0]=$=>r.value="buy")}," Coin 구입 ",2),h("button",{class:be(["tab",{active:r.value==="sell"}]),onClick:F[1]||(F[1]=$=>r.value="sell")}," Coin 판매 ",2)]),h("div",hM,[h("div",dM,[h("span",null,H(r.value==="buy"?"구매 희망가격":"판매 희망가격"),1),h("div",fM,[r.value==="buy"?mn((L(),U("input",{key:0,type:"number","onUpdate:modelValue":F[2]||(F[2]=$=>i.value=$),placeholder:"Point",class:"priceInput"},null,512)),[[Zn,i.value]]):ue("",!0),r.value==="sell"?mn((L(),U("input",{key:1,type:"number","onUpdate:modelValue":F[3]||(F[3]=$=>o.value=$),placeholder:"Point",class:"priceInput"},null,512)),[[Zn,o.value]]):ue("",!0),F[5]||(F[5]=h("span",null,"Point",-1))])]),h("div",pM,[h("span",null,H(r.value==="buy"?"코인 구매량":"코인 판매량"),1),h("div",gM,[mn(h("input",{type:"text","onUpdate:modelValue":F[4]||(F[4]=$=>l.value=$),placeholder:"예: 1억, 5천만",class:"coinInput"},null,512),[[Zn,l.value]]),F[6]||(F[6]=h("span",null,"Coin",-1))])])]),h("div",mM,[h("div",_M,[F[7]||(F[7]=h("span",null,"평균거래가",-1)),h("span",null,H(r.value==="buy"?"1억 Coin : ":"")+H(c.value)+H(r.value==="buy"?" p":" Point : 1억 Coin"),1)]),h("div",vM,[F[8]||(F[8]=h("span",null,"즉시거래가",-1)),h("span",null,H(r.value==="buy"?"1억 Coin : ":"")+H(u.value)+H(r.value==="buy"?" p":" Point : 1억 Coin"),1)])]),h("div",yM,[F[11]||(F[11]=h("div",{class:"panelTitle"},"예상 거래 결과",-1)),h("div",AM,[h("span",null,H(r.value==="buy"?"예치금":"받을 Point"),1),h("div",IM,[h("span",null,H(f.value),1),h("span",null,H((r.value==="buy","Point")),1)])]),h("div",wM,[h("span",null,H(r.value==="buy"?"구입 Coin":"판매 Coin"),1),h("div",EM,[h("span",null,H(p.value),1),h("span",null,H((r.value==="buy","Coin")),1)])]),h("div",TM,[F[10]||(F[10]=h("span",null,"오늘 남은 등록 횟수",-1)),h("div",CM,[h("span",null,H(E.value),1),F[9]||(F[9]=h("span",null,"회",-1))])])]),h("button",{class:"submitBtn",onClick:I},H(r.value==="buy"?"거래 신청":"판매 신청"),1)]),Ae(zt)]))}},SM=ft(bM,[["__scopeId","data-v-48b65e40"]]),RM={class:"questPage"},PM={class:"mainContent"},kM={class:"filterTabs"},DM={class:"mainTabs"},xM={class:"questList"},NM={class:"questContent"},MM={class:"questInfo"},OM={class:"questTitle"},VM={class:"questDescription"},LM=["onClick"],BM={key:1,class:"completedBadge"},UM={key:2,class:"progressBar"},FM={class:"progressText"},$M={__name:"QuestPage",setup(t){const e=V(0),n=V("inProgress"),s=V("daily"),r=()=>new Date().toDateString(),i=()=>{const p=localStorage.getItem("questLastDate"),m=r();return p!==m?(localStorage.setItem("questLastDate",m),localStorage.removeItem("rewardedQuests"),!0):!1},o=()=>{const p=localStorage.getItem("rewardedQuests");return p?JSON.parse(p):[]},l=p=>{localStorage.setItem("rewardedQuests",JSON.stringify(p)),localStorage.setItem("questLastDate",r())},c=V([{id:1,title:"일일 채굴 10회",description:"오늘 하루 채굴을 10회 완료하세요",completed:!0,rewardReceived:!1,progress:10,total:10,type:"daily"},{id:2,title:"일일 사냥 5회",description:"몬스터를 5마리 처치하세요",completed:!0,rewardReceived:!1,progress:5,total:5,type:"daily"},{id:3,title:"일일 탐험 1회",description:"탐험 활동을 1회 완료하세요",completed:!1,rewardReceived:!1,progress:0,total:1,type:"daily"},{id:4,title:"일일 생산 3개",description:"아이템을 3개 이상 생산하세요",completed:!1,rewardReceived:!1,progress:1,total:3,type:"daily"},{id:5,title:"일일 코인 1,000 획득",description:"코인을 1,000개 이상 획득하세요",completed:!1,rewardReceived:!1,progress:650,total:1e3,type:"daily"},{id:6,title:"일일 레벨업 1회",description:"레벨을 1레벨 이상 올리세요",completed:!1,rewardReceived:!1,progress:.6,total:1,type:"daily"},{id:7,title:"일일 데일리 체크",description:"게임에 접속하여 일일 퀘스트를 확인하세요",completed:!0,rewardReceived:!1,progress:1,total:1,type:"daily"},{id:8,title:"일일 랜덤 상자 수집",description:"랜덤 상자를 2개 이상 수집하세요",completed:!1,rewardReceived:!1,progress:1,total:2,type:"daily"},{id:9,title:"주간 퀘스트: 채굴 마스터",description:"일주일간 채굴을 50회 완료하세요",completed:!1,rewardReceived:!1,progress:23,total:50,type:"weekly"},{id:10,title:"주간 퀘스트: 사냥꾼",description:"일주일 동안 몬스터를 100마리 처치하세요",completed:!1,rewardReceived:!1,progress:45,total:100,type:"weekly"},{id:11,title:"주간 퀘스트: 탐험가",description:"새로운 지역을 5곳 탐험하세요",completed:!0,rewardReceived:!1,progress:5,total:5,type:"weekly"},{id:12,title:"주간 퀘스트: 생산자",description:"아이템을 50개 이상 생산하세요",completed:!1,rewardReceived:!1,progress:28,total:50,type:"weekly"},{id:13,title:"주간 퀘스트: 코인 모으기",description:"코인을 5만개 이상 획득하세요",completed:!1,rewardReceived:!1,progress:32e3,total:5e4,type:"weekly"},{id:14,title:"주간 퀘스트: 레벨업 5",description:"레벨을 5레벨 이상 올리세요",completed:!1,rewardReceived:!1,progress:3,total:5,type:"weekly"},{id:15,title:"주간 퀘스트: 수집가",description:"다양한 보물을 20개 수집하세요",completed:!1,rewardReceived:!1,progress:12,total:20,type:"weekly"},{id:16,title:"주간 퀘스트: 종합 능력",description:"모든 활동을 각각 10회 이상 수행하세요",completed:!1,rewardReceived:!1,progress:35,total:40,type:"weekly"},{id:17,title:"월간 퀘스트: 코인왕",description:"이번 달 코인을 20만 개 이상 획득하세요",completed:!1,rewardReceived:!1,progress:95e3,total:2e5,type:"monthly"},{id:18,title:"월간 퀘스트: 극한 레벨업",description:"레벨을 20레벨 이상 올리세요",completed:!1,rewardReceived:!1,progress:15,total:20,type:"monthly"},{id:19,title:"월간 퀘스트: 완벽한 수집가",description:"보물을 100개 이상 수집하세요",completed:!1,rewardReceived:!1,progress:67,total:100,type:"monthly"},{id:20,title:"월간 퀘스트: 마스터 채굴러",description:"채굴을 500회 이상 완료하세요",completed:!1,rewardReceived:!1,progress:289,total:500,type:"monthly"},{id:21,title:"월간 퀘스트: 용사",description:"몬스터를 500마리 처치하세요",completed:!1,rewardReceived:!1,progress:234,total:500,type:"monthly"},{id:22,title:"월간 퀘스트: 대탐험가",description:"새로운 지역을 20곳 탐험하세요",completed:!1,rewardReceived:!1,progress:14,total:20,type:"monthly"},{id:23,title:"월간 퀘스트: 완벽한 제작자",description:"다양한 아이템을 200개 생산하세요",completed:!1,rewardReceived:!1,progress:123,total:200,type:"monthly"},{id:24,title:"월간 퀘스트: 최고 달성자",description:"이번 달 모든 활동을 완벽하게 수행하세요",completed:!0,rewardReceived:!1,progress:100,total:100,type:"monthly"}]),u=p=>{const m=c.value.find(_=>_.id===p);if(m&&m.completed&&!m.rewardReceived){m.rewardReceived=!0;const _=o();_.includes(p)||(_.push(p),l(_)),alert("보상 받기 완료!")}},f=je(()=>{let p=c.value.filter(m=>m.type===s.value);return n.value==="inProgress"?p=p.filter(m=>!m.completed||m.completed&&!m.rewardReceived):n.value==="completed"&&(p=p.filter(m=>m.completed&&m.rewardReceived)),p.sort((m,_)=>m.completed&&!m.rewardReceived&&(_.rewardReceived||!_.completed)?-1:(m.rewardReceived||!m.completed)&&_.completed&&!_.rewardReceived?1:0)});return dt(()=>{const p=nt();p&&(e.value=p.gameData?.coins||0),i();const m=o();c.value.forEach(_=>{m.includes(_.id)&&(_.rewardReceived=!0)})}),(p,m)=>(L(),U("div",RM,[Ae(Qt,{coinCount:e.value},null,8,["coinCount"]),h("main",PM,[h("div",kM,[h("button",{class:be(["filterTab",{active:s.value==="daily"}]),onClick:m[0]||(m[0]=_=>s.value="daily")}," Daily ",2),h("button",{class:be(["filterTab",{active:s.value==="weekly"}]),onClick:m[1]||(m[1]=_=>s.value="weekly")}," Weekly ",2),h("button",{class:be(["filterTab",{active:s.value==="monthly"}]),onClick:m[2]||(m[2]=_=>s.value="monthly")}," Monthly ",2)]),h("div",DM,[h("button",{class:be(["mainTab",{active:n.value==="inProgress"}]),onClick:m[3]||(m[3]=_=>n.value="inProgress")}," 진행중 ",2),h("button",{class:be(["mainTab",{active:n.value==="completed"}]),onClick:m[4]||(m[4]=_=>n.value="completed")}," 완료 ",2)]),h("div",xM,[(L(!0),U(Ce,null,Be(f.value,_=>(L(),U("div",{key:_.id,class:"questCard"},[h("div",NM,[h("div",MM,[h("h3",OM,H(_.title),1),h("p",VM,H(_.description),1)]),m[5]||(m[5]=h("div",{class:"questCharacter"},[h("div",{class:"characterImg"},"🐱")],-1))]),_.completed&&!_.rewardReceived?(L(),U("button",{key:0,class:"rewardBtn",onClick:E=>u(_.id)}," 보상받기 ",8,LM)):_.completed&&_.rewardReceived?(L(),U("div",BM," ✓ 완료됨 ")):(L(),U("div",UM,[h("div",{class:"progressFill",style:yt({width:_.progress/_.total*100+"%"})},null,4),h("span",FM,H(_.progress)+"/"+H(_.total),1)]))]))),128))])]),Ae(zt)]))}},HM=ft($M,[["__scopeId","data-v-b2169bda"]]),jM=""+new URL("statStar1-DSWl6DZx.png",import.meta.url).href,GM=""+new URL("statStar2-7A5sNtwf.png",import.meta.url).href,qM={class:"inventoryPage"},QM={class:"mainContent"},zM={class:"topSection"},WM={class:"magicPanel"},KM={class:"panelTitle"},YM={class:"characterBox"},JM=["src"],XM={class:"profilePanel"},ZM={class:"progressBars"},eO={class:"statLabel"},tO={class:"barBg"},nO={class:"value"},sO={class:"inventoryGrid"},rO=["onClick"],iO={key:0,class:"newBadge"},oO={class:"starBadge"},aO=["src"],lO={class:"levelBadge"},cO=["src"],uO={__name:"InventoryPage",setup(t){const e=V(0),n=_=>[{name:"근력",value:_[0],progress:_[0],color:"#FF6B6B"},{name:"체력",value:_[1],progress:_[1],color:"#FF8A80"},{name:"지능",value:_[2],progress:_[2],color:"#9C27B0"},{name:"손재주",value:_[3],progress:_[3],color:"#FFA726"},{name:"용기",value:_[4],progress:_[4],color:"#00BCD4"},{name:"행운",value:_[5],progress:_[5],color:"#66BB6A"}],s=()=>Math.floor(Math.random()*3)+1,r=()=>Math.floor(Math.random()*10)+1,i=[{id:1,name:"Robot",selected:!0,stars:s(),level:r(),stats:n([33,7,29,10,11,10]),imageId:1,isNew:!1},{id:2,name:"Style",selected:!1,stars:s(),level:r(),stats:n([15,25,35,45,20,30]),imageId:2,isNew:!1},{id:3,name:"Suit",selected:!1,stars:s(),level:r(),stats:n([25,20,40,30,25,15]),imageId:3,isNew:!1},{id:4,name:"Tech",selected:!1,stars:s(),level:r(),stats:n([20,15,50,40,10,25]),imageId:4,isNew:!1},{id:5,name:"Army",selected:!1,stars:s(),level:r(),stats:n([45,40,15,20,50,10]),imageId:5,isNew:!1},{id:6,name:"Detective",selected:!1,stars:s(),level:r(),stats:n([20,25,45,30,35,25]),imageId:6,isNew:!1},{id:7,name:"Scholar",selected:!1,stars:s(),level:r(),stats:n([10,15,60,25,20,30]),imageId:7,isNew:!1},{id:8,name:"White",selected:!1,stars:s(),level:r(),stats:n([30,30,30,30,30,30]),imageId:8,isNew:!1},{id:9,name:"Green",selected:!1,stars:s(),level:r(),stats:n([25,35,20,25,30,35]),imageId:9,isNew:!1},{id:10,name:"Blue",selected:!1,stars:s(),level:r(),stats:n([20,30,35,30,25,30]),imageId:10,isNew:!1},{id:11,name:"Red",selected:!1,stars:s(),level:r(),stats:n([40,25,20,25,45,15]),imageId:11,isNew:!1},{id:12,name:"Shirt",selected:!1,stars:s(),level:r(),stats:n([22,28,32,28,22,28]),imageId:12,isNew:!1},{id:13,name:"Ninja",selected:!1,stars:s(),level:r(),stats:n([35,25,30,50,40,20]),imageId:13,isNew:!1},{id:14,name:"Knight",selected:!1,stars:s(),level:r(),stats:n([50,45,20,25,45,15]),imageId:14,isNew:!1},{id:15,name:"Pirate",selected:!1,stars:s(),level:r(),stats:n([40,35,25,35,50,25]),imageId:15,isNew:!1},{id:16,name:"Sailor",selected:!1,stars:s(),level:r(),stats:n([30,40,25,30,35,30]),imageId:16,isNew:!1},{id:17,name:"Sport",selected:!1,stars:s(),level:r(),stats:n([45,50,15,40,30,20]),imageId:17,isNew:!1},{id:18,name:"Cafe",selected:!1,stars:s(),level:r(),stats:n([20,25,30,45,25,35]),imageId:18,isNew:!1},{id:19,name:"Chef",selected:!1,stars:s(),level:r(),stats:n([25,30,25,50,20,30]),imageId:19,isNew:!1},{id:20,name:"Fisher",selected:!1,stars:s(),level:r(),stats:n([30,35,20,40,30,25]),imageId:20,isNew:!1},{id:21,name:"Farmer",selected:!1,stars:s(),level:r(),stats:n([40,45,20,35,25,30]),imageId:21,isNew:!1},{id:22,name:"Doctor",selected:!1,stars:s(),level:r(),stats:n([15,30,55,35,25,30]),imageId:22,isNew:!1},{id:23,name:"Teacher",selected:!1,stars:s(),level:r(),stats:n([20,25,50,30,30,25]),imageId:23,isNew:!1},{id:24,name:"Artist",selected:!1,stars:s(),level:r(),stats:n([15,20,40,55,25,35]),imageId:24,isNew:!1}],o=V([...i]),l=je(()=>{const _=o.value.find(E=>E.selected);return _&&_.stats?_.stats:n([33,7,29,10,11,10])}),c=je(()=>{const _=o.value.find(E=>E.selected);return _?_.name:"Magic"}),u=_=>{try{return new URL(Object.assign({"../assets/img/cat1.png":th,"../assets/img/cat10.png":nh,"../assets/img/cat11.png":sh,"../assets/img/cat12.png":rh,"../assets/img/cat13.png":ih,"../assets/img/cat14.png":oh,"../assets/img/cat15.png":ah,"../assets/img/cat16.png":lh,"../assets/img/cat17.png":ch,"../assets/img/cat18.png":uh,"../assets/img/cat19.png":hh,"../assets/img/cat2.png":dh,"../assets/img/cat20.png":fh,"../assets/img/cat21.png":ph,"../assets/img/cat22.png":gh,"../assets/img/cat23.png":mh,"../assets/img/cat24.png":_h,"../assets/img/cat25.png":vh,"../assets/img/cat26.png":yh,"../assets/img/cat27.png":Ah,"../assets/img/cat28.png":Ih,"../assets/img/cat29.png":wh,"../assets/img/cat3.png":Eh,"../assets/img/cat30.png":Th,"../assets/img/cat4.png":Ch,"../assets/img/cat5.png":bh,"../assets/img/cat6.png":Sh,"../assets/img/cat7.png":Rh,"../assets/img/cat8.png":Ph,"../assets/img/cat9.png":kh,"../assets/img/catProfile01.png":Dh,"../assets/img/catProfile02.png":xh,"../assets/img/cat_ico.png":Nh})[`../assets/img/cat${_}.png`],import.meta.url).href}catch{return`/src/assets/img/cat${_}.png`}},f=je(()=>{const _=o.value.find(E=>E.selected);return u(_?_.imageId||_.id:1)}),p=je(()=>{const _=o.value.filter(T=>T.isNew),E=o.value.filter(T=>!T.isNew);return[..._,...E]}),m=_=>{if(o.value.forEach(E=>E.selected=!1),_.selected=!0,_.isNew){_.isNew=!1;const E=nt();if(E){const T=o.value.map(I=>({...I,isNew:I.id===_.id?!1:I.isNew}));pn(E.id,{inventory:T})}}};return dt(()=>{const _=nt();if(_){e.value=_.gameData?.coins||0;const E=_.gameData?.inventory;if(E&&E.length>0){const T=[...i];E.forEach(I=>{const x=T.findIndex(F=>F.id===I.id);x>-1?T[x]={...T[x],...I}:T.push({...I,stats:n([Math.floor(Math.random()*40)+10,Math.floor(Math.random()*40)+10,Math.floor(Math.random()*40)+10,Math.floor(Math.random()*40)+10,Math.floor(Math.random()*40)+10,Math.floor(Math.random()*40)+10])})}),o.value=T}}}),(_,E)=>(L(),U("div",qM,[Ae(Qt,{coinCount:e.value},null,8,["coinCount"]),h("main",QM,[h("div",zM,[h("div",WM,[h("div",KM,H(c.value),1),h("div",YM,[h("img",{src:f.value,alt:"선택된 캐릭터",class:"selectedCharacter"},null,8,JM)])]),h("div",XM,[E[0]||(E[0]=h("div",{class:"panelTitle"},"Profile",-1)),h("div",ZM,[(L(!0),U(Ce,null,Be(l.value,(T,I)=>(L(),U("div",{key:I,class:"progressBar"},[h("div",eO,H(T.name),1),h("div",tO,[h("div",{style:yt({width:T.progress+"%",backgroundColor:T.color}),class:"barFill"},null,4)]),h("span",nO,H(T.value)+"%",1)]))),128))])])]),h("div",sO,[(L(!0),U(Ce,null,Be(p.value,T=>(L(),U("div",{key:T.id,class:be(["inventoryItem",{selected:T.selected}]),onClick:I=>m(T)},[T.isNew?(L(),U("div",iO,"NEW")):ue("",!0),h("div",oO,[(L(),U(Ce,null,Be(5,I=>h("img",{key:I,src:I<=T.stars?Pt(jM):Pt(GM),alt:"별",class:"starIcon"},null,8,aO)),64))]),h("div",lO," Lv "+H(String(T.level).padStart(2,"0")),1),h("img",{src:u(T.imageId||T.id),alt:"고양이",class:"itemIcon"},null,8,cO)],10,rO))),128))])]),Ae(zt)]))}},hO=ft(uO,[["__scopeId","data-v-8b8f967c"]]),dO=""+new URL("factory_cat-DD06P-8u.png",import.meta.url).href,fO=""+new URL("factory_under_line-BMeQefpa.png",import.meta.url).href,pO="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAAJCAYAAABE6JQbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgB7drRDYIwFAXQuoEjMIIjyEZuYNzATRgBN9ANYJPaKh8EwX5Xz0leaMjj+94AIczEGJs0fb4GAKB6xWyfFob4NigBAFC3YrYvFqISAAB1K2X7bjr0aZqV58c0lwAA1OYctrO9zQUgh/8xAAD/4lZ6A/BIcwoAQG2uaQ4r98c07eu08Z3gnmYfAIDq5Ayfsvz7/32LEiD8AaByixLwGf6zxVwCOuEPAL9hKgHdMvyfsGrpYuWe8x8AAAAASUVORK5CYII=",gO={class:"factoryPage"},mO={class:"mainContent"},_O={class:"materialsSection"},vO={class:"materialText"},yO={class:"materialCount"},AO={class:"materialText"},IO={class:"materialCount"},wO=["disabled"],EO={class:"popupCatImage"},TO=["src"],CO={__name:"FactoryPage",setup(t){const e=V(0),n=V(50),s=V(100),r=V(3),i=V(!1),o=V(1);dt(()=>{const E=nt();E&&(e.value=E.gameData?.totalCoin||0,n.value=50)});const l=()=>{if(e.value<s.value){alert(`코인이 부족합니다. (필요: ${s.value})`);return}if(n.value<r.value){alert(`고양이 파편이 부족합니다. (필요: ${r.value})`);return}const E=nt();if(E){e.value-=s.value,n.value-=r.value,o.value=p();const T=(E.gameData?.catCount||0)+1,I=E.gameData?.inventory||[],x={id:Date.now(),imageId:o.value,name:`Cat ${o.value}`,stars:Math.floor(Math.random()*3)+2,level:1,selected:!1,isNew:!0};I.unshift(x),pn(E.id,{totalCoin:e.value,catFragments:n.value,catCount:T,inventory:I}),window.dispatchEvent(new CustomEvent("userDataUpdated")),i.value=!0}},c=je(()=>e.value>=s.value&&n.value>=r.value),u=je(()=>e.value>=s.value),f=je(()=>n.value>=r.value),p=()=>Math.floor(Math.random()*30)+1,m=E=>{try{return new URL(Object.assign({"../assets/img/cat1.png":th,"../assets/img/cat10.png":nh,"../assets/img/cat11.png":sh,"../assets/img/cat12.png":rh,"../assets/img/cat13.png":ih,"../assets/img/cat14.png":oh,"../assets/img/cat15.png":ah,"../assets/img/cat16.png":lh,"../assets/img/cat17.png":ch,"../assets/img/cat18.png":uh,"../assets/img/cat19.png":hh,"../assets/img/cat2.png":dh,"../assets/img/cat20.png":fh,"../assets/img/cat21.png":ph,"../assets/img/cat22.png":gh,"../assets/img/cat23.png":mh,"../assets/img/cat24.png":_h,"../assets/img/cat25.png":vh,"../assets/img/cat26.png":yh,"../assets/img/cat27.png":Ah,"../assets/img/cat28.png":Ih,"../assets/img/cat29.png":wh,"../assets/img/cat3.png":Eh,"../assets/img/cat30.png":Th,"../assets/img/cat4.png":Ch,"../assets/img/cat5.png":bh,"../assets/img/cat6.png":Sh,"../assets/img/cat7.png":Rh,"../assets/img/cat8.png":Ph,"../assets/img/cat9.png":kh,"../assets/img/catProfile01.png":Dh,"../assets/img/catProfile02.png":xh,"../assets/img/cat_ico.png":Nh})[`../assets/img/cat${E}.png`],import.meta.url).href}catch{return`/src/assets/img/cat${E}.png`}},_=()=>{i.value=!1};return(E,T)=>(L(),U("div",gO,[Ae(Qt,{catCount:n.value},null,8,["catCount"]),h("main",mO,[T[4]||(T[4]=zg('<h1 class="pageTitle" data-v-3da76d7e>고양이 제작하기</h1><div class="catSilhouette" data-v-3da76d7e><div class="catCircle" data-v-3da76d7e><img src="'+dO+'" alt="고양이" class="catShape" data-v-3da76d7e></div></div><div class="factoryUnderLine" data-v-3da76d7e><img src="'+fO+'" alt="" class="factoryLine" data-v-3da76d7e></div><div class="divider" data-v-3da76d7e><div class="dividerLine" data-v-3da76d7e><img src="'+pO+'" alt="" class="dividerLineImg" data-v-3da76d7e></div></div>',4)),h("div",_O,[h("div",{class:be(["materialItem",{insufficient:!u.value}])},[T[1]||(T[1]=h("img",{src:ay,alt:"코인",class:"materialIcon"},null,-1)),h("span",vO,[h("span",yO,H(e.value),1),ji(" / "+H(s.value)+" Coin ",1)])],2),T[3]||(T[3]=h("div",{class:"plusSign"},"+",-1)),h("div",{class:be(["materialItem",{insufficient:!f.value}])},[T[2]||(T[2]=h("img",{src:uy,alt:"고양이",class:"materialIcon"},null,-1)),h("span",AO,[h("span",IO,H(n.value),1),ji(" / "+H(r.value)+" 고양이 파편 ",1)])],2)]),h("button",{class:be(["createButton",{disabled:!c.value}]),onClick:l,disabled:!c.value}," 데려 오기 ",10,wO)]),Ae(zt),i.value?(L(),U("div",{key:0,class:"popupOverlay",onClick:_},[h("div",{class:"popupContent",onClick:T[0]||(T[0]=ki(()=>{},["stop"]))},[h("div",EO,[h("img",{src:m(o.value),alt:"고양이"},null,8,TO)]),T[5]||(T[5]=h("h2",{class:"popupTitle"},"고양이 데려오기 성공!",-1)),T[6]||(T[6]=h("p",{class:"popupMessage"},"새로운 고양이가 인벤토리에 추가되었습니다!",-1)),h("button",{class:"popupCloseBtn",onClick:_},"확인")])])):ue("",!0)]))}},bO=ft(CO,[["__scopeId","data-v-3da76d7e"]]),SO={class:"settingsPage"},RO={class:"mainContent"},PO={class:"settingGroup"},kO={class:"settingGroup"},DO={class:"settingLabel"},xO={class:"settingInputWrapper"},NO={key:0,class:"dropdownMenu"},MO=["onClick"],OO={class:"settingGroup"},VO={class:"settingLabel"},LO={class:"settingInputWrapper"},BO={key:0,class:"dropdownMenu"},UO=["onClick"],FO={class:"settingSection"},$O={class:"sectionTitle"},HO={class:"settingToggle"},jO={class:"toggleLabel"},GO={class:"settingToggle"},qO={class:"toggleLabel"},QO={class:"settingGroup"},zO={class:"settingGroup"},WO={__name:"SettingsPage",setup(t){const e=qt(),n=V(0),s=V(null),r=V("한국어"),i=V("부산"),o=V(!0),l=V(!0),c=V(!1),u=V(!1),f=V(!1);V("");const p=["한국어","English"],m=["부산","서울","대구","인천"],_={ko:{language:"언어",region:"지역",soundSettings:"소리 설정",soundToggle:"소리 토글",viToggle:"Vi 토글",userID:"User ID",copySuccess:"User ID가 복사되었습니다!",english:"English"},en:{language:"Language",region:"Region",soundSettings:"Sound Settings",soundToggle:"Sound Toggle",viToggle:"Vibration Toggle",userID:"User ID",copySuccess:"User ID copied!",english:"English"}},E=je(()=>r.value==="한국어"?_.ko:_.en),T=F=>{r.value=F,c.value=!1,localStorage.setItem("appLanguage",F)},I=()=>{o.value=!o.value,localStorage.setItem("soundEnabled",o.value.toString()),window.dispatchEvent(new CustomEvent("soundSettingChanged",{detail:{enabled:o.value}}))};dt(()=>{const F=nt();F&&(s.value=F,n.value=F.gameData?.coins||0);const $=localStorage.getItem("appLanguage");$&&(r.value=$);const G=localStorage.getItem("soundEnabled");G!==null?o.value=G==="true":localStorage.setItem("soundEnabled","true"),x()});const x=()=>{if(!s.value)return;const F=new Date().toDateString(),$=localStorage.getItem(`checkIn_${s.value.id}`);f.value=$===F};return(F,$)=>(L(),U("div",SO,[Ae(Qt,{coinCount:n.value},null,8,["coinCount"]),h("main",RO,[h("div",PO,[h("button",{class:"userProfileBtn",onClick:$[0]||($[0]=G=>Pt(e).push("/profile"))},[...$[6]||($[6]=[h("span",{class:"userProfileIcon"},"👤",-1),h("span",null,"사용자 설정",-1),h("span",{class:"arrowIcon"},"→",-1)])])]),h("div",kO,[h("label",DO,H(r.value==="한국어"?"언어":"Language"),1),h("div",xO,[h("div",{class:"settingInput",onClick:$[1]||($[1]=G=>c.value=!c.value)},[h("span",null,H(r.value),1),$[7]||($[7]=h("span",{class:"dropdownIcon"},"▼",-1))]),c.value?(L(),U("div",NO,[(L(),U(Ce,null,Be(p,G=>h("div",{key:G,class:be(["dropdownItem",{active:r.value===G}]),onClick:re=>T(G)},H(G),11,MO)),64))])):ue("",!0)])]),h("div",OO,[h("label",VO,H(E.value.region),1),h("div",LO,[h("div",{class:"settingInput",onClick:$[2]||($[2]=G=>u.value=!u.value)},[h("span",null,H(i.value),1),$[8]||($[8]=h("span",{class:"dropdownIcon"},"▼",-1))]),u.value?(L(),U("div",BO,[(L(),U(Ce,null,Be(m,G=>h("div",{key:G,class:be(["dropdownItem",{active:i.value===G}]),onClick:re=>{i.value=G,u.value=!1}},H(G),11,UO)),64))])):ue("",!0)])]),h("div",FO,[h("h3",$O,H(E.value.soundSettings),1),h("div",HO,[h("label",jO,H(E.value.soundToggle),1),h("button",{class:be(["toggleSwitch",{active:o.value}]),onClick:I},[...$[9]||($[9]=[h("div",{class:"toggleHandle"},null,-1)])],2)]),h("div",GO,[h("label",qO,H(E.value.viToggle),1),h("button",{class:be(["toggleSwitch",{active:l.value}]),onClick:$[3]||($[3]=G=>l.value=!l.value)},[...$[10]||($[10]=[h("div",{class:"toggleHandle"},null,-1)])],2)])]),h("div",QO,[$[11]||($[11]=h("label",{class:"settingLabel"},"출석체크",-1)),h("button",{class:"checkInBtn",onClick:$[4]||($[4]=G=>Pt(e).push("/attendance"))}," 출석체크 하기 ")]),h("div",zO,[h("button",{class:"nftBtn",onClick:$[5]||($[5]=G=>Pt(e).push("/nft"))}," NFT ")])]),Ae(zt)]))}},KO=ft(WO,[["__scopeId","data-v-b5bff110"]]),YO={class:"profilePage"},JO={class:"mainContent"},XO={class:"profileHeader"},ZO={class:"profileImageWrapper"},eV=["src","alt"],tV={key:1,class:"profileImagePlaceholder"},nV={class:"profileInfo"},sV={class:"userName"},rV={class:"userEmail"},iV={class:"settingGroup"},oV={class:"settingLabel"},aV={class:"settingInput"},lV={class:"userId"},cV={key:0,class:"statsSection"},uV={class:"sectionTitle"},hV={class:"statsGrid"},dV={class:"statCard"},fV={class:"statInfo"},pV={class:"statLabel"},gV={class:"statValue"},mV={class:"statCard"},_V={class:"statInfo"},vV={class:"statLabel"},yV={class:"statValue"},AV={class:"statCard"},IV={class:"statInfo"},wV={class:"statLabel"},EV={class:"statValue"},TV={class:"statCard"},CV={class:"statInfo"},bV={class:"statLabel"},SV={class:"statValue"},RV={class:"logoutSection"},PV={__name:"UserProfilePage",setup(t){const e=qt(),{logout:n}=mm(),s=V(0),r=V(null),i=V("한국어"),o=V(""),l=V(""),c=V(""),u=V(""),f=V(!1),p={ko:{userProfile:"사용자 프로필",userID:"User ID",copySuccess:"User ID가 복사되었습니다!",logout:"로그아웃",logoutConfirm:"정말 로그아웃 하시겠습니까?",gameStats:"게임 통계",level:"레벨",points:"포인트",coins:"코인",catFragments:"고양이 파편",back:"← 뒤로"},en:{userProfile:"User Profile",userID:"User ID",copySuccess:"User ID copied!",logout:"Logout",logoutConfirm:"Are you sure you want to logout?",gameStats:"Game Stats",level:"Level",points:"Points",coins:"Coins",catFragments:"Cat Fragments",back:"← Back"}},m=je(()=>i.value==="한국어"?p.ko:p.en);dt(()=>{const I=nt();I?(r.value=I,s.value=I.gameData?.coins||0,I.uid||I.email?(f.value=!0,o.value=I.email||"",l.value=I.displayName||I.name||o.value.split("@")[0],c.value=I.photoURL||"",u.value=I.uid||I.id||""):(o.value=I.email||I.id||"",l.value=I.name||o.value.split("@")[0]||"User",u.value=I.id||"ID"+String(Math.random()).substring(2,10))):e.push("/login");const x=localStorage.getItem("appLanguage");x&&(i.value=x)});const _=()=>{navigator.clipboard.writeText(u.value),alert(m.value.copySuccess)},E=async()=>{if(confirm(m.value.logoutConfirm))try{if(f.value){const I=await oy();I.success||console.error("Firebase 로그아웃 실패:",I.error)}Qp(),n(),e.push("/login")}catch(I){console.error("로그아웃 오류:",I),Qp(),n(),e.push("/login")}},T=je(()=>r.value?{level:r.value.gameData?.level||1,points:r.value.gameData?.coins||0,coins:r.value.gameData?.totalCoin||0,catFragments:r.value.gameData?.catFragments||r.value.gameData?.catCount||0}:null);return(I,x)=>(L(),U("div",YO,[Ae(Qt,{coinCount:s.value},null,8,["coinCount"]),h("main",JO,[h("button",{class:"backBtn",onClick:x[0]||(x[0]=F=>Pt(e).push("/settings"))},H(m.value.back),1),h("div",XO,[h("div",ZO,[c.value?(L(),U("img",{key:0,src:c.value,alt:l.value,class:"profileImage"},null,8,eV)):(L(),U("div",tV,H(l.value.charAt(0).toUpperCase()),1))]),h("div",nV,[h("h2",sV,H(l.value),1),h("p",rV,H(o.value),1)])]),h("div",iV,[h("label",oV,H(m.value.userID),1),h("div",aV,[h("span",lV,H(u.value),1),h("button",{class:"copyBtn",onClick:_},"📋")])]),T.value?(L(),U("div",cV,[h("h3",uV,H(m.value.gameStats),1),h("div",hV,[h("div",dV,[x[1]||(x[1]=h("div",{class:"statIcon"},"⭐",-1)),h("div",fV,[h("div",pV,H(m.value.level),1),h("div",gV,H(T.value.level),1)])]),h("div",mV,[x[2]||(x[2]=h("div",{class:"statIcon"},"💰",-1)),h("div",_V,[h("div",vV,H(m.value.points),1),h("div",yV,H(T.value.points.toLocaleString()),1)])]),h("div",AV,[x[3]||(x[3]=h("div",{class:"statIcon"},"🪙",-1)),h("div",IV,[h("div",wV,H(m.value.coins),1),h("div",EV,H(T.value.coins.toLocaleString()),1)])]),h("div",TV,[x[4]||(x[4]=h("div",{class:"statIcon"},"🐱",-1)),h("div",CV,[h("div",bV,H(m.value.catFragments),1),h("div",SV,H(T.value.catFragments.toLocaleString()),1)])])])])):ue("",!0),h("div",RV,[h("button",{class:"logoutBtn",onClick:E},H(m.value.logout),1)])]),Ae(zt)]))}},kV=ft(PV,[["__scopeId","data-v-7270c089"]]),DV={class:"attendancePage"},xV={class:"mainContent"},NV={key:0,class:"attendanceMessage"},MV={class:"attendanceGrid"},OV=["onClick"],VV={class:"dayNumber"},LV={class:"rewardIcon"},BV={key:0,class:"specialStar"},UV={class:"rewardAmount"},FV={__name:"AttendancePage",setup(t){const e=qt(),n=V(0),s=V(null),r=V(0),i=V([]),o=V(Array.from({length:20},(m,_)=>({day:_+1,reward:"1K",rewardType:"P",hasSpecial:[5,9,10,11,16,17].includes(_+1),isChecked:!1}))),l=()=>{e.go(-1)},c=m=>{if(!s.value){alert("로그인이 필요합니다.");return}const _=new Date().toDateString();if(localStorage.getItem(`attendance_checkIn_${s.value.id}`)===_){alert("오늘 이미 출석체크를 완료했습니다! 내일 다시 시도해주세요.");return}const T=o.value[m];if(T.isChecked){alert("이미 체크된 날짜입니다.");return}if(i.value.length===0||m===i.value.length){T.isChecked=!0,i.value.push(T.day);const I=1e3;n.value+=I,localStorage.setItem(`attendance_checkIn_${s.value.id}`,_),p.value=!0,s.value&&Q2(s.value.id,n.value),u(),alert(`Day ${T.day} 출석체크 완료! ${I} 포인트 획득!`)}else alert("연속 출석체크만 가능합니다.")},u=()=>{if(s.value){const m={checkedDays:i.value,attendanceDays:i.value.length,lastUpdate:new Date().toISOString()};localStorage.setItem(`attendance_${s.value.id}`,JSON.stringify(m))}},f=()=>{if(s.value){const m=localStorage.getItem(`attendance_${s.value.id}`);if(m){const _=JSON.parse(m);i.value=_.checkedDays||[],r.value=_.attendanceDays||0,i.value.forEach(E=>{const T=E-1;o.value[T]&&(o.value[T].isChecked=!0)})}}},p=V(!1);return dt(()=>{if(s.value=nt(),s.value){n.value=s.value.gameData?.coins||0;const m=new Date().toDateString(),_=localStorage.getItem(`attendance_checkIn_${s.value.id}`);p.value=_===m}f()}),(m,_)=>(L(),U("div",DV,[Ae(Qt,{coinCount:n.value},null,8,["coinCount"]),h("main",xV,[h("button",{class:"backBtn",onClick:l},"← 뒤로"),_[1]||(_[1]=h("h1",{class:"pageTitle"},"출석체크",-1)),p.value?(L(),U("div",NV," 오늘 출석체크를 완료했습니다! 내일 다시 시도해주세요. ")):ue("",!0),h("div",MV,[(L(!0),U(Ce,null,Be(o.value,(E,T)=>(L(),U("div",{key:E.day,class:be(["dayCell",{checked:E.isChecked,disabled:p.value&&!E.isChecked}]),onClick:I=>!p.value||E.isChecked?c(T):null},[h("div",VV,"Day "+H(E.day),1),h("div",LV,[_[0]||(_[0]=h("div",{class:"iconCircle"},"P",-1)),E.hasSpecial&&!E.isChecked?(L(),U("span",BV,"⭐")):ue("",!0)]),h("div",UV,H(E.reward),1)],10,OV))),128))])]),Ae(zt)]))}},$V=ft(FV,[["__scopeId","data-v-41a53f6b"]]),HV=""+new URL("btc-DC8WHF5v.png",import.meta.url).href,jV=""+new URL("eth-DHgp7Wvq.png",import.meta.url).href,GV=""+new URL("BTC_line-DiGuGbEI.png",import.meta.url).href,qV="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAACJCAYAAABaWIDDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA85SURBVHgB7d1fchPHFsfxMybJw61KhbuCTN5yqRDbK0BeAXgFmBXErACxguAVYFZgswLEClBibnLf7rCCKDhVqSJGndPqNghibHXPjKZ75vupUqQYy/yxpf5Nd5/ThQAAMBBGtq7r3ZbIfFPvS5GidPeiHzfX3f2yotL/zPxNHxu9bfxkHxcynUrGCgEAoKf8gD/SAf+WDnl39COlNKqwIaDSrzvNLRgQAAAAveIHfTvY39WbXu1/fFW/DsVEFrMGZuKDwSy1YEAAAAD0gg78I73Sv60P96STQf9KMz9jsBwM7IxBJR0gAAAAsuYGfvNAbyPJkw8Gxi8nLILBVIPBTFpEAAAAZEkHfp3eNz9mPPBfpdVgQAAAAGTFrfHPx/rwBxmmRoIBAQAAkA0jN+/o0PVY0lzj71pQMHgXAHyi2tcP2dpI/mHXa+ZqS+19P+pLAaBJXPXXshQMNg7ONx0uAoAmqj19qOsoDPwJqfw37Fi/YU/b3gwCAKnSwb/Uwf+ZuIY9qMdecN4r5OS48P+w/xckrjjU2xMNAhMBgIFoacr/vKvfxHX6szOwb1/p/W8if/5eSDVzv/d/vtZf/7fIta/edwy0fQUWj7ckX/r3O9vRALCp/7BmT5CLSm/jQn5+IgDQY0a+12Vp+VGaUbkZVdHb6U/ng3wdGk5uiQsmI1kEgsK3Gc6BmWgA+F4TD1P/+Sn0h7i431UDCQBok45NY717IPXY6e5DvT/WKe/nsgZGSh1PvzzfSzcSFwxKSW/5YmYDgBHk7KHOBowFAHqigcFfB/75I5E/Dpq40m/C+2BQbPnzCLbc4+4uwG0AsOv/pSBndmfnLrMBAHJXc/BPbuC/SofBYGoDgP2HHgtyV2kI2CEEAMhVvTV/u6Hvr3uF/K+SHlhDMNgvfG3lM8l7RyMct7NTfqGHAICsuLa+8xcSzl71jwt5eSAD0FAwmOrS8bbvA2BDwFtNXcWeIHeEAABZqVHnX+n73S7vdyHBwOgSyelDu0RSXPwFsEbXfelI6etLR1J/isd2FNxmOQBADoxsPos40EcH/dc7uaz1d8XIjS3Xx8D6sPyRswAS5GtL93wYKCVOxZ4AAKmL2/RnS/tO7zP410MASJxv02xfHKWEm/oQwIsEQHLiOtGaw0JO7glq2xAkTX/QD0Xe7Lh1m2Bbbm8HAKTIHAV9uphjBv/mEAAyYMta9If+vv7w74prBRzy7D0/xQYAyXCzmyak+qzSaX8G/waxBJAZI9+WIl9E7JY1u/b0JwGABAQ2oavsTGhfavxTwQxAZtwLwC4JBM8EPHbrbQDQLT8rWQY8Zczg3zwCQIaWQkDI5r5FwydCAIAu+feguwHPeMTpp+0gAGTKhYD5btizbOKeB266AYAmzfckaOr/9KGgFQSAjBXycqJ39yXMlk6/URkAYO3Cr/7t1D+1/m0hAGROp8YeRZQI7lMZAGD9TEhPkylT/+2iCqAnjNx85jsHhjyLygAAaxHe9MeM9P3puaA1zAD0xrWYHgFUBgBYExPQ7tdMGPzbxwxAj/geAfY4zZDDhCrODADQpvCr/zffUPbXPmYAeoTKAABpCrr6P2TwXw8CQM9QGQAgJe7q3+yt/oy/KPtbEwJAD9WoDNgXAGgUV/+pYg9Aj8VVBsx3/CwCANTC2n/amAHotZjKgI0jKgMANMM8Dvhcrv7XjBmAnqtRGbBdyJQOXACi6IXEyJ4/svozuPpfN2YAes69oEzoGdqlyFsqAwDUYAI2FnP13wUCwAC4bn/zsQQpRlQGAIhh5Oae/ndrxU+v2PnfDZYABkRflDqgF6E7/e+7qgIgLX6vih1k7FHXX7uPFuXSZ9glLL+MtfFK3H6YiqZX7dOLB7vxr1zts+fjQl4SADpAABgYfWHa/QCrJnOPygB0yw/2I310SxY/v8b+f8i+lmUaCoqpfg29bdh2s1NCQXPc1X+x6ua/Stf+d5j+7wYBYGD8pkC7MacMeNrMbwqsBFgTv4nstr5N3fEDfotsIBC9FU+FQFBL4NX/vl5cHAg6QQAYICoDkCod9O10vl2m+kHir/CbUOnb48QeSmNnCQgEqwm9+tflxW8EnSEADJS+UPWqqgjc6b84oWtHgIa5q33bMc6MJE2VXzY41kDwkwaCqeADvulPyOzingaAJ4LOEAAGzMh3+oa7MZYwj/RFG3rWAHChDAb+T6kIBB8ysvk4oOc/V/8JIAAMHJUB6II/IOaBBB0Sk7TZR0sGgwoE/hyRkLJhrv4TQAAAlQFYKz9Y2ANiulzjb9tyILAzBBPpKQ1z+t4xfxHwFK7+E0EAAJUBWAt/1f84w+n+Jsw+WjKYSA/4wd++d4SEOa7+E0EAwIKRG/pC/iz0hVxRGYBV+N3hdoq4z1f9Ic4DwcQvGUwkM3GDv235exLamhwtIQDgncASnvNnURmAS+mUv90v8oO0o3INfRYDanXxpyx6COit8F0DU/XBHoKJJCwy0On36M02TX/SQQDAB6gMQFNcTf9iyv+ONGPmBvvi2N2f6lR6FTT7ZKTUP9OXm/asC7cUYe9TtQgEtlvheXOizmfafJ+GsUQFOpr+pIYAgH/QdH+oPxp3JQyVAXjHDxR2ejhwc+mFX22iP4+HIq+fhg74K311uXlrKRAkPEvQbSDwnRntDGEpwYxeJJxwkZAYAgD+If7Nm8oARDWEuYgObnMNlH8ctDHoX8YHgi03c5F0IHi3h0D/Z9JWIGigV0Ol4W173d9HXI0AgAtRGYAYPjzakrBS4nQ28H/KUiAY+SWDHAJBrfMM/Pfxrj+HYSTxKg77SRcBAJ9EZQBC1J/2N4e6rn8/9StF/7q4lUcgeHfAUXVZcyL3vbPft/mmH/SbmPmoGPzTRgDApagMwKqMbB5FbvirbEdA/Zl5LhlygeCaHTBv+yWDUpK1qJSY+dt1dzP+vlEVg3/6CAC4EpUBuEp8qZ+dsj7d7dP6cF6BoBUVg38eCABYCZUB+BQd/MfiWvsGmo8LeflQes7tp/l8pA99tUGfA0H/Al2fEQCwEioDcJEag/9ga8I/CgT29RS5ZyI11PnnhgCAlVEZgGURJ8B5b3W9/7/0gvd8INjUh3cyDQRTkbN7hfwyFWSFAIAgVAbA0iUhO1gdSTAG/6v4boU6OyAjv2SQaiCY+WUcrvozRQBAMCoDhi3yBDgZypp/0xIMBMn1akAcAgCiUBkwTPFd/hj8m/L+PAO7ZGDDwNrOM9Ap/vkxA39/EAAQjcqAYWHwT1PLBxxV+jV10JfjXPs04NMIAIhGZcBwxA/+nP/ehaUDjuwMQSmrvUbtVX3lD1/Sq/2/dNnu11eC3iIAoJbIyoBKlw92qAzIQ40Wv1Od7dkWJMHNFPyrFLn21fuPvv1df+U3kT9/Z1p/eAgAqI3KgH6LbPFbcQIckLYNAWpy9b8mdHNfqVcfgZUEWDfX4jdm8LetYBn8gZQRANAIXec9tJu9JEhxx3eSQ4L89ya0v39FH3ggDywBoFFUBvRDZItfveJ/s83gD+SBAIBGxW8YO9umlWga4lv88j0EcsISABrlNvW92ZXFVHCIz45cqRm65Fr8xvb3Z/AHckIAQOPcFPCZDQEhm8BKO3PgZhDQBdfit4jYmGkb/dDfH8gNAQCtoDIgL77Rjz3ch/7+wEAQANAaKgPyQItfYJjYBIjWURmQLlr8AsNFAEDrIisDZiJnO2wsa098xQZHOwN9wBIAWhdZGXCdyoC2GbvfIri/v8jprgDIHgEAa1GjMuCIyoDm1Wjxu0uLX6AfCABYGz+dH7ppTK9Q30bUpeNTaPELwCIAYK3cxr7gyoA9KgOaUaPFL4M/0DNsAkQnjNw8siV/EmZPAwQNZyJFtvhlMybQUwQAdMLvQH8hYeVnDEaRXIvf4kiC2Ra/dPkD+oglAHTCVwbYUrIq4GlUBkSo0eJ3n8Ef6C8CADqzVBkQoqQyYHU1W/weCIDeIgCgU346P/TMACoDVkCLXwCXIQCgc1QGNK9ei18Gf2AI2ASIZFAZ0Axa/AJYBTMASMg1e7hMJWEeGbkR2s6252jxC+BqBAAkg8qA+mjxC2BVBAAkxVUGzEOPmS2pDKDFL4AwBAAkp5CXE6EyIAgtfgGEIgAgSa4ywDwKfNYgKwN8i9+Iwf+MwR8YMKoAkDQjN5/pj+lIwgymMoAWvwBiMQOAxF2zO9MrCTOIygBa/AKogwCApC1VBoTsUO99ZQAtfgHURQBA8nxlAGcGeLT4BdAEAgCyQGWAU6PF7yMGfwDL2ASIrBi5qQN6sR/4tIeF/DyWzNVo8XtcyAld/gB8gBkAZEUHsvu2Z72EeWDk+7uSvegWv6GNlQAMAAEAGRpeZQAtfgE0jQCA7AytMoAWvwDaQABAloZSGRDZ4rdi8AdwFQIAstX3yoAaLX53GfwBXIUAgKz19cwA1+JXIoKKuVfIL1MBgCtQBohe6NOZAa7F76LcL7TL3z5d/gCsihkA9EQ/KgNo8QtgXZgBQG8Y+bYU+eKFhA2e/ljc7qfNafELYJ2YAUBvRFYG2PLAZ37NvTM6+I/0z27DSylBaPELIA4BAL0SWRmgIaA46mpjoNvtH7Pmv2jxG/p3BYAFlgDQS5FnBliV5mJdEphW0jI35W/b+5qRhNMli9c7dPkDEIsAgN6KrAzwikO9PWwjCPhDfWw4sd39YpoSVTT6AVAXAQC95QfaiHX1ZYsgcKBBoPYmQb/Of1sf7kncwG9VDP4AmkAAQK/5yoCInfX/UOntWJcHnur91J1HcNXvvWg5bGv6R/pSuxU51f/Rn4HBH0AzCADovQZDwJLCzgjYEFDp71AtfbwUd3WvA78ppTkVgz+AJhEAMAjthIC1qRj8ATSNMkAMghs87RHCZiJ5mTL4A2gDAQCDYQfRQk52bOc8yYI95Og1gz+AVrAEgEEy8t1I8+9jSXNJYOZO9Ts5FgBoCTMAGCTXMXBjO73ZgMVV/zcM/gDaxgwABs9tEPz8gb4c9qQzi70JYx34nwsArAEBAPA6CAJ2qt9e6R8y8ANYNwIA8BEfBEb68G58K+FLf4eJfl0d+F8/oZc/gK4QAIBLGCmvi3x5Sx+OfBjYknBT/Up6KyY66D9l0AeQAgIAEMjIDQ0B177yXf/KCz6l0s/SQf5sWsivrwQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA0PwNkHeXO5vHqaMAAAAASUVORK5CYII=",QV=""+new URL("catProfile01-gY0Djz81.png",import.meta.url).href,zV=""+new URL("catProfile02-Cesbpkj5.png",import.meta.url).href,WV=""+new URL("eth_ico-CaIyIapE.png",import.meta.url).href,KV={class:"nftPage"},YV={class:"mainContent nftWrap"},JV={class:"walletSection"},XV={class:"walletBalance"},ZV={class:"btcInfo"},eL={class:"change positive"},tL={class:"tabMenu"},nL={key:0,class:"itemList"},sL={class:"itemIcon"},rL={class:"itemInfo"},iL={class:"itemSymbol"},oL={class:"itemName"},aL={class:"itemChart"},lL={class:"itemPrice"},cL={class:"price"},uL={key:1,class:"nftList"},hL={class:"nftThumbnail"},dL={class:"nftInfo"},fL={class:"nftId"},pL={class:"collectionName"},gL={class:"nftValue"},mL={class:"ethAmount"},_L=["src"],vL={class:"usdValue positive"},yL={__name:"NFTPage",setup(t){const e=V(0),n=V("tokens"),s=V("$ 5,323.00"),r=V("0.00335"),i=V("+6.54%"),o=V(!1),l=V(!1),c=V(!1),u=nt();u&&(e.value=u.gameData?.coins||0);const f=$=>{n.value=$},p=()=>{o.value=!0},m=()=>{o.value=!1},_=()=>{l.value=!0},E=()=>{l.value=!1},T=()=>{c.value=!0},I=()=>{c.value=!1},x=V([{id:1,name:"Bitcoin",symbol:"BTC",price:"36,590.00",change:"+6.21%",isPositive:!0,image:HV,lineImage:GV},{id:2,name:"Ethereum",symbol:"ETH",price:"2,590.00",change:"+5.21%",isPositive:!0,image:jV,lineImage:qV}]),F=V([{id:1,nftId:"#1957",collectionName:"Bored Ape Yacht Club",ethAmount:"64",usdValue:"23,114.57",image:QV},{id:2,nftId:"#6513",collectionName:"Bored Ape Yacht Club",ethAmount:"199.8",usdValue:"45,114.57",image:zV}]);return($,G)=>(L(),U("div",KV,[Ae(Qt,{coinCount:e.value},null,8,["coinCount"]),h("main",YV,[h("div",JV,[G[5]||(G[5]=h("div",{class:"walletLabel"},"Current Wallet Balance",-1)),h("div",XV,H(s.value),1),h("div",ZV,[h("span",null,"BTC : "+H(r.value),1),h("span",eL,H(i.value),1)])]),h("div",{class:"actionButtons"},[h("button",{class:"actionBtn sendBtn",onClick:_},[...G[6]||(G[6]=[h("div",{class:"btnIcon"},null,-1),h("span",{class:"btnLabel"},"Send",-1)])]),h("button",{class:"actionBtn buyBtn",onClick:p},[...G[7]||(G[7]=[h("div",{class:"btnIcon"},null,-1),h("span",{class:"btnLabel"},"Buy",-1)])]),h("button",{class:"actionBtn receiveBtn",onClick:T},[...G[8]||(G[8]=[h("div",{class:"btnIcon"},null,-1),h("span",{class:"btnLabel"},"Receive",-1)])])]),h("div",tL,[h("button",{class:be(["tab",{active:n.value==="tokens"}]),onClick:G[0]||(G[0]=re=>f("tokens"))}," Tokens ",2),h("button",{class:be(["tab",{active:n.value==="nfts"}]),onClick:G[1]||(G[1]=re=>f("nfts"))}," NFTs ",2)]),n.value==="tokens"?(L(),U("div",nL,[(L(!0),U(Ce,null,Be(x.value,re=>(L(),U("div",{key:re.id,class:"item"},[h("div",sL,[h("div",{class:"iconCircle",style:yt({backgroundImage:`url(${re.image})`})},null,4)]),h("div",rL,[h("div",iL,H(re.symbol),1),h("div",oL,H(re.name),1)]),h("div",aL,[h("div",{class:"chartLine",style:yt({backgroundImage:`url(${re.lineImage})`})},null,4)]),h("div",lL,[h("div",cL,"$"+H(re.price),1),h("div",{class:be(["change",{positive:re.isPositive,negative:!re.isPositive}])},H(re.change),3)])]))),128))])):ue("",!0),n.value==="nfts"?(L(),U("div",uL,[(L(!0),U(Ce,null,Be(F.value,re=>(L(),U("div",{key:re.id,class:"nftItem"},[h("div",hL,[h("div",{class:"thumbnailPlaceholder",style:yt({backgroundImage:`url(${re.image})`})},null,4)]),h("div",dL,[h("div",fL,H(re.nftId),1),h("div",pL,H(re.collectionName),1)]),h("div",gL,[h("div",mL,[h("img",{src:Pt(WV),alt:"ETH",class:"ethIcon"},null,8,_L),h("span",null,H(re.ethAmount),1)]),h("div",vL,[G[9]||(G[9]=h("span",{class:"arrowUp"},"↑",-1)),h("span",null,"$ "+H(re.usdValue),1)])])]))),128))])):ue("",!0)]),Ae(zt),o.value?(L(),U("div",{key:0,class:"popupOverlay",onClick:m},[h("div",{class:"popupContent",onClick:G[2]||(G[2]=ki(()=>{},["stop"]))},[h("div",{class:"popupHeader"},[G[10]||(G[10]=h("h2",{class:"popupTitle"},"구매하기",-1)),h("button",{class:"closeBtn",onClick:m},"×")]),h("div",{class:"popupBody"},[G[11]||(G[11]=h("p",{class:"popupMessage"},"구매해주세요",-1)),h("div",{class:"popupActions"},[h("button",{class:"popupBtn cancelBtn",onClick:m},"취소"),h("button",{class:"popupBtn confirmBtn",onClick:m},"확인")])])])])):ue("",!0),l.value?(L(),U("div",{key:1,class:"popupOverlay",onClick:E},[h("div",{class:"popupContent",onClick:G[3]||(G[3]=ki(()=>{},["stop"]))},[h("div",{class:"popupHeader"},[G[12]||(G[12]=h("h2",{class:"popupTitle"},"전송하기",-1)),h("button",{class:"closeBtn",onClick:E},"×")]),h("div",{class:"popupBody"},[G[13]||(G[13]=h("p",{class:"popupMessage"},"전송해주세요",-1)),h("div",{class:"popupActions"},[h("button",{class:"popupBtn cancelBtn",onClick:E},"취소"),h("button",{class:"popupBtn confirmBtn",onClick:E},"확인")])])])])):ue("",!0),c.value?(L(),U("div",{key:2,class:"popupOverlay",onClick:I},[h("div",{class:"popupContent",onClick:G[4]||(G[4]=ki(()=>{},["stop"]))},[h("div",{class:"popupHeader"},[G[14]||(G[14]=h("h2",{class:"popupTitle"},"받기",-1)),h("button",{class:"closeBtn",onClick:I},"×")]),h("div",{class:"popupBody"},[G[15]||(G[15]=h("p",{class:"popupMessage"},"받아주세요",-1)),h("div",{class:"popupActions"},[h("button",{class:"popupBtn cancelBtn",onClick:I},"취소"),h("button",{class:"popupBtn confirmBtn",onClick:I},"확인")])])])])):ue("",!0)]))}},AL=ft(yL,[["__scopeId","data-v-7f13a3bd"]]),IL={class:"notificationPage"},wL={class:"mainContent"},EL={class:"pageHeader"},TL={class:"notificationList"},CL=["onClick"],bL={class:"notificationContent"},SL={class:"notificationTitle"},RL={class:"notificationMessage"},PL={class:"notificationTime"},kL={key:0,class:"unreadDot"},DL={key:0,class:"emptyState"},xL={__name:"NotificationPage",setup(t){const e=qt(),n=V(0),s=V([{id:1,title:"새로운 퀘스트가 도착했습니다!",message:"일일 퀘스트를 완료하고 보상을 받아보세요.",time:"5분 전",read:!1,type:"quest"},{id:2,title:"Coin 구매 완료",message:"1억 Coin 구매가 완료되었습니다.",time:"1시간 전",read:!1,type:"exchange"},{id:3,title:"고양이 제작 완료",message:"새로운 고양이가 인벤토리에 추가되었습니다!",time:"2시간 전",read:!0,type:"factory"},{id:4,title:"출석체크 보상",message:"출석체크를 완료하여 100 Point를 받았습니다.",time:"1일 전",read:!0,type:"attendance"}]);dt(()=>{const c=nt();c&&(n.value=c.gameData?.coins||0)});const r=c=>{c.read||(c.read=!0)},i=()=>{s.value.forEach(c=>{c.read=!0})},o=je(()=>s.value.filter(c=>!c.read).length),l=c=>{switch(r(c),c.type){case"quest":e.push("/quest");break;case"exchange":e.push("/exchange");break;case"factory":e.push("/factory");break;case"attendance":e.push("/attendance");break}};return(c,u)=>(L(),U("div",IL,[Ae(Qt,{coinCount:n.value},null,8,["coinCount"]),h("main",wL,[h("div",EL,[u[0]||(u[0]=h("h1",{class:"pageTitle"},"알림",-1)),o.value>0?(L(),U("button",{key:0,class:"markAllReadBtn",onClick:i}," 모두 읽음 ")):ue("",!0)]),h("div",TL,[(L(!0),U(Ce,null,Be(s.value,f=>(L(),U("div",{key:f.id,class:be(["notificationItem",{unread:!f.read}]),onClick:p=>l(f)},[h("div",bL,[h("div",SL,H(f.title),1),h("div",RL,H(f.message),1),h("div",PL,H(f.time),1)]),f.read?ue("",!0):(L(),U("div",kL))],10,CL))),128)),s.value.length===0?(L(),U("div",DL,[...u[1]||(u[1]=[h("p",null,"알림이 없습니다.",-1)])])):ue("",!0)])]),Ae(zt)]))}},NL=ft(xL,[["__scopeId","data-v-1cfef43b"]]),ML={class:"shopPage"},OL={class:"mainContent"},VL={class:"itemList"},LL={class:"itemInfo"},BL={class:"itemName"},UL={class:"itemDescription"},FL={class:"itemPrice"},$L={class:"priceValue"},HL={class:"priceCurrency"},jL={key:0,src:ly,alt:"P",class:"currencyIcon"},GL={key:1,src:cy,alt:"C",class:"currencyIcon"},qL=["disabled","onClick"],QL={__name:"ShopPage",setup(t){const e=V(0),n=V(0),s=V([{id:1,name:"에너지 100",description:"에너지를 100 회복합니다",price:100,currency:"point",amount:100},{id:2,name:"에너지 500",description:"에너지를 500 회복합니다",price:450,currency:"point",amount:500},{id:3,name:"에너지 1000",description:"에너지를 1000 회복합니다",price:800,currency:"point",amount:1e3},{id:4,name:"에너지 2000",description:"에너지를 2000 회복합니다",price:1500,currency:"point",amount:2e3}]),r=()=>{const o=nt();o&&(e.value=o.gameData?.coins||0,n.value=o.gameData?.totalCoin||0)},i=o=>{const l=nt();if(!l){alert("로그인이 필요합니다.");return}if(o.currency==="point"&&e.value<o.price){alert("포인트가 부족합니다.");return}if(o.currency==="coin"&&n.value<o.price){alert("코인이 부족합니다.");return}if(o.currency==="point"){const p=e.value-o.price;ka(l.email,p,n.value)}else{const p=n.value-o.price;ka(l.email,e.value,p)}const c=4e3,u=parseInt(localStorage.getItem("currentEnergy")||c.toString()),f=Math.min(u+o.amount,c);localStorage.setItem("currentEnergy",f.toString()),localStorage.setItem("energyLastDate",new Date().toDateString()),alert(`${o.name} 구매 완료! 에너지가 ${o.amount} 회복되었습니다. (현재: ${f}/${c})`),r(),window.dispatchEvent(new Event("userDataUpdated"))};return dt(()=>{r()}),(o,l)=>(L(),U("div",ML,[Ae(Qt,{coinCount:e.value},null,8,["coinCount"]),h("main",OL,[h("div",VL,[(L(!0),U(Ce,null,Be(s.value,c=>(L(),U("div",{key:c.id,class:"shopItem"},[h("div",LL,[h("h3",BL,H(c.name),1),h("p",UL,H(c.description),1)]),h("div",FL,[h("span",$L,H(c.price.toLocaleString()),1),h("span",HL,[c.currency==="point"?(L(),U("img",jL)):(L(),U("img",GL))])]),h("button",{class:"buyBtn",disabled:c.currency==="point"&&e.value<c.price||c.currency==="coin"&&n.value<c.price,onClick:u=>i(c)}," 구매 ",8,qL)]))),128))])]),Ae(zt)]))}},zL=ft(QL,[["__scopeId","data-v-c9b1c691"]]),WL=[{path:"/",redirect:"/loading"},{path:"/loading",component:vw},{path:"/login",component:v2},{path:"/signup",component:x2},{path:"/main",component:rx},{path:"/mining",component:Ex},{path:"/hunting",component:Xx},{path:"/exploration",component:SN},{path:"/production",component:aM},{path:"/exchange",component:SM},{path:"/quest",component:HM},{path:"/inventory",component:hO},{path:"/factory",component:bO},{path:"/settings",component:KO},{path:"/profile",component:kV},{path:"/attendance",component:$V},{path:"/nft",component:AL},{path:"/notification",component:NL},{path:"/shop",component:zL}],KL=pw({history:QI(),routes:WL}),dy=iI(gw);dy.use(KL);dy.mount("#app");
