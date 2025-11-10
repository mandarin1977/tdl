(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Lc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Qe={},bi=[],Dn=()=>{},zp=()=>!1,Da=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Bc=t=>t.startsWith("onUpdate:"),Ft=Object.assign,Fc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},My=Object.prototype.hasOwnProperty,$e=(t,e)=>My.call(t,e),me=Array.isArray,Si=t=>no(t)==="[object Map]",zi=t=>no(t)==="[object Set]",yd=t=>no(t)==="[object Date]",Ee=t=>typeof t=="function",ht=t=>typeof t=="string",Bn=t=>typeof t=="symbol",ze=t=>t!==null&&typeof t=="object",Wp=t=>(ze(t)||Ee(t))&&Ee(t.then)&&Ee(t.catch),Kp=Object.prototype.toString,no=t=>Kp.call(t),Oy=t=>no(t).slice(8,-1),Yp=t=>no(t)==="[object Object]",Uc=t=>ht(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Er=Lc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xa=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Vy=/-\w/g,dn=xa(t=>t.replace(Vy,e=>e.slice(1).toUpperCase())),Ly=/\B([A-Z])/g,ci=xa(t=>t.replace(Ly,"-$1").toLowerCase()),Na=xa(t=>t.charAt(0).toUpperCase()+t.slice(1)),wl=xa(t=>t?`on${Na(t)}`:""),Ts=(t,e)=>!Object.is(t,e),Vo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Jp=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Jo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ad;const Ma=()=>Ad||(Ad=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function yt(t){if(me(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=ht(s)?$y(s):yt(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(ht(t)||ze(t))return t}const By=/;(?![^(]*\))/g,Fy=/:([^]+)/,Uy=/\/\*[^]*?\*\//g;function $y(t){const e={};return t.replace(Uy,"").split(By).forEach(n=>{if(n){const s=n.split(Fy);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function be(t){let e="";if(ht(t))e=t;else if(me(t))for(let n=0;n<t.length;n++){const s=be(t[n]);s&&(e+=s+" ")}else if(ze(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Hy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",jy=Lc(Hy);function Xp(t){return!!t||t===""}function Gy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=si(t[s],e[s]);return n}function si(t,e){if(t===e)return!0;let n=yd(t),s=yd(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Bn(t),s=Bn(e),n||s)return t===e;if(n=me(t),s=me(e),n||s)return n&&s?Gy(t,e):!1;if(n=ze(t),s=ze(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!si(t[o],e[o]))return!1}}return String(t)===String(e)}function $c(t,e){return t.findIndex(n=>si(n,e))}const Zp=t=>!!(t&&t.__v_isRef===!0),H=t=>ht(t)?t:t==null?"":me(t)||ze(t)&&(t.toString===Kp||!Ee(t.toString))?Zp(t)?H(t.value):JSON.stringify(t,eg,2):String(t),eg=(t,e)=>Zp(e)?eg(t,e.value):Si(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[El(s,r)+" =>"]=i,n),{})}:zi(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>El(n))}:Bn(e)?El(e):ze(e)&&!me(e)&&!Yp(e)?String(e):e,El=(t,e="")=>{var n;return Bn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Wt;class qy{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Wt,!e&&Wt&&(this.index=(Wt.scopes||(Wt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Wt;try{return Wt=this,e()}finally{Wt=n}}}on(){++this._on===1&&(this.prevScope=Wt,Wt=this)}off(){this._on>0&&--this._on===0&&(Wt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Qy(){return Wt}let Ke;const Tl=new WeakSet;class tg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Wt&&Wt.active&&Wt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Tl.has(this)&&(Tl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||sg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Id(this),ig(this);const e=Ke,n=yn;Ke=this,yn=!0;try{return this.fn()}finally{rg(this),Ke=e,yn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Gc(e);this.deps=this.depsTail=void 0,Id(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Tl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Yl(this)&&this.run()}get dirty(){return Yl(this)}}let ng=0,Tr,Cr;function sg(t,e=!1){if(t.flags|=8,e){t.next=Cr,Cr=t;return}t.next=Tr,Tr=t}function Hc(){ng++}function jc(){if(--ng>0)return;if(Cr){let e=Cr;for(Cr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Tr;){let e=Tr;for(Tr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function ig(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function rg(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),Gc(s),zy(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function Yl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(og(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function og(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Fr)||(t.globalVersion=Fr,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Yl(t))))return;t.flags|=2;const e=t.dep,n=Ke,s=yn;Ke=t,yn=!0;try{ig(t);const i=t.fn(t._value);(e.version===0||Ts(i,t._value))&&(t.flags|=128,t._value=i,e.version++)}catch(i){throw e.version++,i}finally{Ke=n,yn=s,rg(t),t.flags&=-3}}function Gc(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Gc(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function zy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let yn=!0;const ag=[];function ts(){ag.push(yn),yn=!1}function ns(){const t=ag.pop();yn=t===void 0?!0:t}function Id(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ke;Ke=void 0;try{e()}finally{Ke=n}}}let Fr=0;class Wy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class qc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ke||!yn||Ke===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ke)n=this.activeLink=new Wy(Ke,this),Ke.deps?(n.prevDep=Ke.depsTail,Ke.depsTail.nextDep=n,Ke.depsTail=n):Ke.deps=Ke.depsTail=n,lg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Ke.depsTail,n.nextDep=void 0,Ke.depsTail.nextDep=n,Ke.depsTail=n,Ke.deps===n&&(Ke.deps=s)}return n}trigger(e){this.version++,Fr++,this.notify(e)}notify(e){Hc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{jc()}}}function lg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)lg(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Jl=new WeakMap,ei=Symbol(""),Xl=Symbol(""),Ur=Symbol("");function Ot(t,e,n){if(yn&&Ke){let s=Jl.get(t);s||Jl.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new qc),i.map=s,i.key=n),i.track()}}function zn(t,e,n,s,i,r){const o=Jl.get(t);if(!o){Fr++;return}const l=c=>{c&&c.trigger()};if(Hc(),e==="clear")o.forEach(l);else{const c=me(t),u=c&&Uc(n);if(c&&n==="length"){const f=Number(s);o.forEach((p,m)=>{(m==="length"||m===Ur||!Bn(m)&&m>=f)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Ur)),e){case"add":c?u&&l(o.get("length")):(l(o.get(ei)),Si(t)&&l(o.get(Xl)));break;case"delete":c||(l(o.get(ei)),Si(t)&&l(o.get(Xl)));break;case"set":Si(t)&&l(o.get(ei));break}}jc()}function yi(t){const e=Ue(t);return e===t?e:(Ot(e,"iterate",Ur),cn(t)?e:e.map(St))}function Oa(t){return Ot(t=Ue(t),"iterate",Ur),t}const Ky={__proto__:null,[Symbol.iterator](){return Cl(this,Symbol.iterator,St)},concat(...t){return yi(this).concat(...t.map(e=>me(e)?yi(e):e))},entries(){return Cl(this,"entries",t=>(t[1]=St(t[1]),t))},every(t,e){return Gn(this,"every",t,e,void 0,arguments)},filter(t,e){return Gn(this,"filter",t,e,n=>n.map(St),arguments)},find(t,e){return Gn(this,"find",t,e,St,arguments)},findIndex(t,e){return Gn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Gn(this,"findLast",t,e,St,arguments)},findLastIndex(t,e){return Gn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Gn(this,"forEach",t,e,void 0,arguments)},includes(...t){return bl(this,"includes",t)},indexOf(...t){return bl(this,"indexOf",t)},join(t){return yi(this).join(t)},lastIndexOf(...t){return bl(this,"lastIndexOf",t)},map(t,e){return Gn(this,"map",t,e,void 0,arguments)},pop(){return pr(this,"pop")},push(...t){return pr(this,"push",t)},reduce(t,...e){return wd(this,"reduce",t,e)},reduceRight(t,...e){return wd(this,"reduceRight",t,e)},shift(){return pr(this,"shift")},some(t,e){return Gn(this,"some",t,e,void 0,arguments)},splice(...t){return pr(this,"splice",t)},toReversed(){return yi(this).toReversed()},toSorted(t){return yi(this).toSorted(t)},toSpliced(...t){return yi(this).toSpliced(...t)},unshift(...t){return pr(this,"unshift",t)},values(){return Cl(this,"values",St)}};function Cl(t,e,n){const s=Oa(t),i=s[e]();return s!==t&&!cn(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.done||(r.value=n(r.value)),r}),i}const Yy=Array.prototype;function Gn(t,e,n,s,i,r){const o=Oa(t),l=o!==t&&!cn(t),c=o[e];if(c!==Yy[e]){const p=c.apply(t,r);return l?St(p):p}let u=n;o!==t&&(l?u=function(p,m){return n.call(this,St(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=c.call(o,u,s);return l&&i?i(f):f}function wd(t,e,n,s){const i=Oa(t);let r=n;return i!==t&&(cn(t)?n.length>3&&(r=function(o,l,c){return n.call(this,o,l,c,t)}):r=function(o,l,c){return n.call(this,o,St(l),c,t)}),i[e](r,...s)}function bl(t,e,n){const s=Ue(t);Ot(s,"iterate",Ur);const i=s[e](...n);return(i===-1||i===!1)&&Wc(n[0])?(n[0]=Ue(n[0]),s[e](...n)):i}function pr(t,e,n=[]){ts(),Hc();const s=Ue(t)[e].apply(t,n);return jc(),ns(),s}const Jy=Lc("__proto__,__v_isRef,__isVue"),cg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Bn));function Xy(t){Bn(t)||(t=String(t));const e=Ue(this);return Ot(e,"has",t),e.hasOwnProperty(t)}class ug{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?lA:pg:r?fg:dg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=me(e);if(!i){let c;if(o&&(c=Ky[n]))return c;if(n==="hasOwnProperty")return Xy}const l=Reflect.get(e,n,Bt(e)?e:s);if((Bn(n)?cg.has(n):Jy(n))||(i||Ot(e,"get",n),r))return l;if(Bt(l)){const c=o&&Uc(n)?l:l.value;return i&&ze(c)?ec(c):c}return ze(l)?i?ec(l):so(l):l}}class hg extends ug{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const c=ks(r);if(!cn(s)&&!ks(s)&&(r=Ue(r),s=Ue(s)),!me(e)&&Bt(r)&&!Bt(s))return c||(r.value=s),!0}const o=me(e)&&Uc(n)?Number(n)<e.length:$e(e,n),l=Reflect.set(e,n,s,Bt(e)?e:i);return e===Ue(i)&&(o?Ts(s,r)&&zn(e,"set",n,s):zn(e,"add",n,s)),l}deleteProperty(e,n){const s=$e(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&zn(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Bn(n)||!cg.has(n))&&Ot(e,"has",n),s}ownKeys(e){return Ot(e,"iterate",me(e)?"length":ei),Reflect.ownKeys(e)}}class Zy extends ug{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const eA=new hg,tA=new Zy,nA=new hg(!0);const Zl=t=>t,bo=t=>Reflect.getPrototypeOf(t);function sA(t,e,n){return function(...s){const i=this.__v_raw,r=Ue(i),o=Si(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=i[t](...s),f=n?Zl:e?Xo:St;return!e&&Ot(r,"iterate",c?Xl:ei),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function So(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function iA(t,e){const n={get(i){const r=this.__v_raw,o=Ue(r),l=Ue(i);t||(Ts(i,l)&&Ot(o,"get",i),Ot(o,"get",l));const{has:c}=bo(o),u=e?Zl:t?Xo:St;if(c.call(o,i))return u(r.get(i));if(c.call(o,l))return u(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&Ot(Ue(i),"iterate",ei),i.size},has(i){const r=this.__v_raw,o=Ue(r),l=Ue(i);return t||(Ts(i,l)&&Ot(o,"has",i),Ot(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,c=Ue(l),u=e?Zl:t?Xo:St;return!t&&Ot(c,"iterate",ei),l.forEach((f,p)=>i.call(r,u(f),u(p),o))}};return Ft(n,t?{add:So("add"),set:So("set"),delete:So("delete"),clear:So("clear")}:{add(i){!e&&!cn(i)&&!ks(i)&&(i=Ue(i));const r=Ue(this);return bo(r).has.call(r,i)||(r.add(i),zn(r,"add",i,i)),this},set(i,r){!e&&!cn(r)&&!ks(r)&&(r=Ue(r));const o=Ue(this),{has:l,get:c}=bo(o);let u=l.call(o,i);u||(i=Ue(i),u=l.call(o,i));const f=c.call(o,i);return o.set(i,r),u?Ts(r,f)&&zn(o,"set",i,r):zn(o,"add",i,r),this},delete(i){const r=Ue(this),{has:o,get:l}=bo(r);let c=o.call(r,i);c||(i=Ue(i),c=o.call(r,i)),l&&l.call(r,i);const u=r.delete(i);return c&&zn(r,"delete",i,void 0),u},clear(){const i=Ue(this),r=i.size!==0,o=i.clear();return r&&zn(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=sA(i,t,e)}),n}function Qc(t,e){const n=iA(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get($e(n,i)&&i in s?n:s,i,r)}const rA={get:Qc(!1,!1)},oA={get:Qc(!1,!0)},aA={get:Qc(!0,!1)};const dg=new WeakMap,fg=new WeakMap,pg=new WeakMap,lA=new WeakMap;function cA(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function uA(t){return t.__v_skip||!Object.isExtensible(t)?0:cA(Oy(t))}function so(t){return ks(t)?t:zc(t,!1,eA,rA,dg)}function gg(t){return zc(t,!1,nA,oA,fg)}function ec(t){return zc(t,!0,tA,aA,pg)}function zc(t,e,n,s,i){if(!ze(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=uA(t);if(r===0)return t;const o=i.get(t);if(o)return o;const l=new Proxy(t,r===2?s:n);return i.set(t,l),l}function Ri(t){return ks(t)?Ri(t.__v_raw):!!(t&&t.__v_isReactive)}function ks(t){return!!(t&&t.__v_isReadonly)}function cn(t){return!!(t&&t.__v_isShallow)}function Wc(t){return t?!!t.__v_raw:!1}function Ue(t){const e=t&&t.__v_raw;return e?Ue(e):t}function hA(t){return!$e(t,"__v_skip")&&Object.isExtensible(t)&&Jp(t,"__v_skip",!0),t}const St=t=>ze(t)?so(t):t,Xo=t=>ze(t)?ec(t):t;function Bt(t){return t?t.__v_isRef===!0:!1}function V(t){return mg(t,!1)}function dA(t){return mg(t,!0)}function mg(t,e){return Bt(t)?t:new fA(t,e)}class fA{constructor(e,n){this.dep=new qc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ue(e),this._value=n?e:St(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||cn(e)||ks(e);e=s?e:Ue(e),Ts(e,n)&&(this._rawValue=e,this._value=s?e:St(e),this.dep.trigger())}}function Pt(t){return Bt(t)?t.value:t}const pA={get:(t,e,n)=>e==="__v_raw"?t:Pt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Bt(i)&&!Bt(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function _g(t){return Ri(t)?t:new Proxy(t,pA)}class gA{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new qc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Fr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Ke!==this)return sg(this,!0),!0}get value(){const e=this.dep.track();return og(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function mA(t,e,n=!1){let s,i;return Ee(t)?s=t:(s=t.get,i=t.set),new gA(s,i,n)}const Ro={},Zo=new WeakMap;let Ws;function _A(t,e=!1,n=Ws){if(n){let s=Zo.get(n);s||Zo.set(n,s=[]),s.push(t)}}function vA(t,e,n=Qe){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:c}=n,u=G=>i?G:cn(G)||i===!1||i===0?Wn(G,1):Wn(G);let f,p,m,_,I=!1,w=!1;if(Bt(t)?(p=()=>t.value,I=cn(t)):Ri(t)?(p=()=>u(t),I=!0):me(t)?(w=!0,I=t.some(G=>Ri(G)||cn(G)),p=()=>t.map(G=>{if(Bt(G))return G.value;if(Ri(G))return u(G);if(Ee(G))return c?c(G,2):G()})):Ee(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){ts();try{m()}finally{ns()}}const G=Ws;Ws=f;try{return c?c(t,3,[_]):t(_)}finally{Ws=G}}:p=Dn,e&&i){const G=p,ie=i===!0?1/0:i;p=()=>Wn(G(),ie)}const S=Qy(),M=()=>{f.stop(),S&&S.active&&Fc(S.effects,f)};if(r&&e){const G=e;e=(...ie)=>{G(...ie),M()}}let U=w?new Array(t.length).fill(Ro):Ro;const $=G=>{if(!(!(f.flags&1)||!f.dirty&&!G))if(e){const ie=f.run();if(i||I||(w?ie.some((we,R)=>Ts(we,U[R])):Ts(ie,U))){m&&m();const we=Ws;Ws=f;try{const R=[ie,U===Ro?void 0:w&&U[0]===Ro?[]:U,_];U=ie,c?c(e,3,R):e(...R)}finally{Ws=we}}}else f.run()};return l&&l($),f=new tg(p),f.scheduler=o?()=>o($,!1):$,_=G=>_A(G,!1,f),m=f.onStop=()=>{const G=Zo.get(f);if(G){if(c)c(G,4);else for(const ie of G)ie();Zo.delete(f)}},e?s?$(!0):U=f.run():o?o($.bind(null,!0),!0):f.run(),M.pause=f.pause.bind(f),M.resume=f.resume.bind(f),M.stop=M,M}function Wn(t,e=1/0,n){if(e<=0||!ze(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Bt(t))Wn(t.value,e,n);else if(me(t))for(let s=0;s<t.length;s++)Wn(t[s],e,n);else if(zi(t)||Si(t))t.forEach(s=>{Wn(s,e,n)});else if(Yp(t)){for(const s in t)Wn(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Wn(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function io(t,e,n,s){try{return s?t(...s):t()}catch(i){Va(i,e,n)}}function Fn(t,e,n,s){if(Ee(t)){const i=io(t,e,n,s);return i&&Wp(i)&&i.catch(r=>{Va(r,e,n)}),i}if(me(t)){const i=[];for(let r=0;r<t.length;r++)i.push(Fn(t[r],e,n,s));return i}}function Va(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Qe;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,c,u)===!1)return}l=l.parent}if(r){ts(),io(r,null,10,[t,c,u]),ns();return}}yA(t,n,i,s,o)}function yA(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const jt=[];let Rn=-1;const Pi=[];let _s=null,Ai=0;const vg=Promise.resolve();let ea=null;function Kc(t){const e=ea||vg;return t?e.then(this?t.bind(this):t):e}function AA(t){let e=Rn+1,n=jt.length;for(;e<n;){const s=e+n>>>1,i=jt[s],r=$r(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function Yc(t){if(!(t.flags&1)){const e=$r(t),n=jt[jt.length-1];!n||!(t.flags&2)&&e>=$r(n)?jt.push(t):jt.splice(AA(e),0,t),t.flags|=1,yg()}}function yg(){ea||(ea=vg.then(Ig))}function IA(t){me(t)?Pi.push(...t):_s&&t.id===-1?_s.splice(Ai+1,0,t):t.flags&1||(Pi.push(t),t.flags|=1),yg()}function Ed(t,e,n=Rn+1){for(;n<jt.length;n++){const s=jt[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;jt.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Ag(t){if(Pi.length){const e=[...new Set(Pi)].sort((n,s)=>$r(n)-$r(s));if(Pi.length=0,_s){_s.push(...e);return}for(_s=e,Ai=0;Ai<_s.length;Ai++){const n=_s[Ai];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}_s=null,Ai=0}}const $r=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ig(t){try{for(Rn=0;Rn<jt.length;Rn++){const e=jt[Rn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),io(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Rn<jt.length;Rn++){const e=jt[Rn];e&&(e.flags&=-2)}Rn=-1,jt.length=0,Ag(),ea=null,(jt.length||Pi.length)&&Ig()}}let tn=null,wg=null;function ta(t){const e=tn;return tn=t,wg=t&&t.type.__scopeId||null,e}function wA(t,e=tn,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&ia(-1);const r=ta(e);let o;try{o=t(...i)}finally{ta(r),s._d&&ia(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function mn(t,e){if(tn===null)return t;const n=Ua(tn),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,c=Qe]=e[i];r&&(Ee(r)&&(r={mounted:r,updated:r}),r.deep&&Wn(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Qs(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(ts(),Fn(c,n,8,[t.el,l,t,e]),ns())}}const EA=Symbol("_vte"),TA=t=>t.__isTeleport,CA=Symbol("_leaveCb");function Jc(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Jc(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Eg(t,e){return Ee(t)?Ft({name:t.name},e,{setup:t}):t}function Tg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const na=new WeakMap;function br(t,e,n,s,i=!1){if(me(t)){t.forEach((I,w)=>br(I,e&&(me(e)?e[w]:e),n,s,i));return}if(Sr(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&br(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Ua(s.component):s.el,o=i?null:r,{i:l,r:c}=t,u=e&&e.r,f=l.refs===Qe?l.refs={}:l.refs,p=l.setupState,m=Ue(p),_=p===Qe?zp:I=>$e(m,I);if(u!=null&&u!==c){if(Td(e),ht(u))f[u]=null,_(u)&&(p[u]=null);else if(Bt(u)){u.value=null;const I=e;I.k&&(f[I.k]=null)}}if(Ee(c))io(c,l,12,[o,f]);else{const I=ht(c),w=Bt(c);if(I||w){const S=()=>{if(t.f){const M=I?_(c)?p[c]:f[c]:c.value;if(i)me(M)&&Fc(M,r);else if(me(M))M.includes(r)||M.push(r);else if(I)f[c]=[r],_(c)&&(p[c]=f[c]);else{const U=[r];c.value=U,t.k&&(f[t.k]=U)}}else I?(f[c]=o,_(c)&&(p[c]=o)):w&&(c.value=o,t.k&&(f[t.k]=o))};if(o){const M=()=>{S(),na.delete(t)};M.id=-1,na.set(t,M),en(M,n)}else Td(t),S()}}}function Td(t){const e=na.get(t);e&&(e.flags|=8,na.delete(t))}Ma().requestIdleCallback;Ma().cancelIdleCallback;const Sr=t=>!!t.type.__asyncLoader,Cg=t=>t.type.__isKeepAlive;function bA(t,e){bg(t,"a",e)}function SA(t,e){bg(t,"da",e)}function bg(t,e,n=Lt){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(La(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Cg(i.parent.vnode)&&RA(s,e,n,i),i=i.parent}}function RA(t,e,n,s){const i=La(e,t,s,!0);Wi(()=>{Fc(s[e],i)},n)}function La(t,e,n=Lt,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{ts();const l=ro(n),c=Fn(e,n,t,o);return l(),ns(),c});return s?i.unshift(r):i.push(r),r}}const as=t=>(e,n=Lt)=>{(!Gr||t==="sp")&&La(t,(...s)=>e(...s),n)},PA=as("bm"),dt=as("m"),kA=as("bu"),DA=as("u"),xA=as("bum"),Wi=as("um"),NA=as("sp"),MA=as("rtg"),OA=as("rtc");function VA(t,e=Lt){La("ec",t,e)}const LA="components";function BA(t,e){return UA(LA,t,!0,e)||t}const FA=Symbol.for("v-ndc");function UA(t,e,n=!0,s=!1){const i=tn||Lt;if(i){const r=i.type;{const l=R0(r,!1);if(l&&(l===e||l===dn(e)||l===Na(dn(e))))return r}const o=Cd(i[t]||r[t],e)||Cd(i.appContext[t],e);return!o&&s?r:o}}function Cd(t,e){return t&&(t[e]||t[dn(e)]||t[Na(dn(e))])}function Be(t,e,n,s){let i;const r=n,o=me(t);if(o||ht(t)){const l=o&&Ri(t);let c=!1,u=!1;l&&(c=!cn(t),u=ks(t),t=Oa(t)),i=new Array(t.length);for(let f=0,p=t.length;f<p;f++)i[f]=e(c?u?Xo(St(t[f])):St(t[f]):t[f],f,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=e(l+1,l,void 0,r)}else if(ze(t))if(t[Symbol.iterator])i=Array.from(t,(l,c)=>e(l,c,void 0,r));else{const l=Object.keys(t);i=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const f=l[c];i[c]=e(t[f],f,c,r)}}else i=[];return i}const tc=t=>t?Wg(t)?Ua(t):tc(t.parent):null,Rr=Ft(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>tc(t.parent),$root:t=>tc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Rg(t),$forceUpdate:t=>t.f||(t.f=()=>{Yc(t.update)}),$nextTick:t=>t.n||(t.n=Kc.bind(t.proxy)),$watch:t=>a0.bind(t)}),Sl=(t,e)=>t!==Qe&&!t.__isScriptSetup&&$e(t,e),$A={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Sl(s,e))return o[e]=1,s[e];if(i!==Qe&&$e(i,e))return o[e]=2,i[e];if((u=t.propsOptions[0])&&$e(u,e))return o[e]=3,r[e];if(n!==Qe&&$e(n,e))return o[e]=4,n[e];nc&&(o[e]=0)}}const f=Rr[e];let p,m;if(f)return e==="$attrs"&&Ot(t.attrs,"get",""),f(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Qe&&$e(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,$e(m,e))return m[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Sl(i,e)?(i[e]=n,!0):s!==Qe&&$e(s,e)?(s[e]=n,!0):$e(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r,type:o}},l){let c,u;return!!(n[l]||t!==Qe&&l[0]!=="$"&&$e(t,l)||Sl(e,l)||(c=r[0])&&$e(c,l)||$e(s,l)||$e(Rr,l)||$e(i.config.globalProperties,l)||(u=o.__cssModules)&&u[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:$e(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function bd(t){return me(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let nc=!0;function HA(t){const e=Rg(t),n=t.proxy,s=t.ctx;nc=!1,e.beforeCreate&&Sd(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:_,updated:I,activated:w,deactivated:S,beforeDestroy:M,beforeUnmount:U,destroyed:$,unmounted:G,render:ie,renderTracked:we,renderTriggered:R,errorCaptured:T,serverPrefetch:b,expose:D,inheritAttrs:k,components:O,directives:E,filters:Oe}=e;if(u&&jA(u,s,null),o)for(const Ve in o){const Te=o[Ve];Ee(Te)&&(s[Ve]=Te.bind(n))}if(i){const Ve=i.call(n,n);ze(Ve)&&(t.data=so(Ve))}if(nc=!0,r)for(const Ve in r){const Te=r[Ve],Dt=Ee(Te)?Te.bind(n,n):Ee(Te.get)?Te.get.bind(n,n):Dn,We=!Ee(Te)&&Ee(Te.set)?Te.set.bind(n):Dn,pt=je({get:Dt,set:We});Object.defineProperty(s,Ve,{enumerable:!0,configurable:!0,get:()=>pt.value,set:Re=>pt.value=Re})}if(l)for(const Ve in l)Sg(l[Ve],s,n,Ve);if(c){const Ve=Ee(c)?c.call(n):c;Reflect.ownKeys(Ve).forEach(Te=>{Lo(Te,Ve[Te])})}f&&Sd(f,t,"c");function it(Ve,Te){me(Te)?Te.forEach(Dt=>Ve(Dt.bind(n))):Te&&Ve(Te.bind(n))}if(it(PA,p),it(dt,m),it(kA,_),it(DA,I),it(bA,w),it(SA,S),it(VA,T),it(OA,we),it(MA,R),it(xA,U),it(Wi,G),it(NA,b),me(D))if(D.length){const Ve=t.exposed||(t.exposed={});D.forEach(Te=>{Object.defineProperty(Ve,Te,{get:()=>n[Te],set:Dt=>n[Te]=Dt,enumerable:!0})})}else t.exposed||(t.exposed={});ie&&t.render===Dn&&(t.render=ie),k!=null&&(t.inheritAttrs=k),O&&(t.components=O),E&&(t.directives=E),b&&Tg(t)}function jA(t,e,n=Dn){me(t)&&(t=sc(t));for(const s in t){const i=t[s];let r;ze(i)?"default"in i?r=xn(i.from||s,i.default,!0):r=xn(i.from||s):r=xn(i),Bt(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Sd(t,e,n){Fn(me(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Sg(t,e,n,s){let i=s.includes(".")?$g(n,s):()=>n[s];if(ht(t)){const r=e[t];Ee(r)&&Cs(i,r)}else if(Ee(t))Cs(i,t.bind(n));else if(ze(t))if(me(t))t.forEach(r=>Sg(r,e,n,s));else{const r=Ee(t.handler)?t.handler.bind(n):e[t.handler];Ee(r)&&Cs(i,r,t)}}function Rg(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(u=>sa(c,u,o,!0)),sa(c,e,o)),ze(e)&&r.set(e,c),c}function sa(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&sa(t,r,n,!0),i&&i.forEach(o=>sa(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=GA[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const GA={data:Rd,props:Pd,emits:Pd,methods:vr,computed:vr,beforeCreate:$t,created:$t,beforeMount:$t,mounted:$t,beforeUpdate:$t,updated:$t,beforeDestroy:$t,beforeUnmount:$t,destroyed:$t,unmounted:$t,activated:$t,deactivated:$t,errorCaptured:$t,serverPrefetch:$t,components:vr,directives:vr,watch:QA,provide:Rd,inject:qA};function Rd(t,e){return e?t?function(){return Ft(Ee(t)?t.call(this,this):t,Ee(e)?e.call(this,this):e)}:e:t}function qA(t,e){return vr(sc(t),sc(e))}function sc(t){if(me(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function $t(t,e){return t?[...new Set([].concat(t,e))]:e}function vr(t,e){return t?Ft(Object.create(null),t,e):e}function Pd(t,e){return t?me(t)&&me(e)?[...new Set([...t,...e])]:Ft(Object.create(null),bd(t),bd(e??{})):e}function QA(t,e){if(!t)return e;if(!e)return t;const n=Ft(Object.create(null),t);for(const s in e)n[s]=$t(t[s],e[s]);return n}function Pg(){return{app:null,config:{isNativeTag:zp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zA=0;function WA(t,e){return function(s,i=null){Ee(s)||(s=Ft({},s)),i!=null&&!ze(i)&&(i=null);const r=Pg(),o=new WeakSet,l=[];let c=!1;const u=r.app={_uid:zA++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:k0,get config(){return r.config},set config(f){},use(f,...p){return o.has(f)||(f&&Ee(f.install)?(o.add(f),f.install(u,...p)):Ee(f)&&(o.add(f),f(u,...p))),u},mixin(f){return r.mixins.includes(f)||r.mixins.push(f),u},component(f,p){return p?(r.components[f]=p,u):r.components[f]},directive(f,p){return p?(r.directives[f]=p,u):r.directives[f]},mount(f,p,m){if(!c){const _=u._ceVNode||Ae(s,i);return _.appContext=r,m===!0?m="svg":m===!1&&(m=void 0),t(_,f,m),c=!0,u._container=f,f.__vue_app__=u,Ua(_.component)}},onUnmount(f){l.push(f)},unmount(){c&&(Fn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return r.provides[f]=p,u},runWithContext(f){const p=ki;ki=u;try{return f()}finally{ki=p}}};return u}}let ki=null;function Lo(t,e){if(Lt){let n=Lt.provides;const s=Lt.parent&&Lt.parent.provides;s===n&&(n=Lt.provides=Object.create(s)),n[t]=e}}function xn(t,e,n=!1){const s=E0();if(s||ki){let i=ki?ki._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Ee(e)?e.call(s&&s.proxy):e}}const kg={},Dg=()=>Object.create(kg),xg=t=>Object.getPrototypeOf(t)===kg;function KA(t,e,n,s=!1){const i={},r=Dg();t.propsDefaults=Object.create(null),Ng(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:gg(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function YA(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=Ue(i),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(Ba(t.emitsOptions,m))continue;const _=e[m];if(c)if($e(r,m))_!==r[m]&&(r[m]=_,u=!0);else{const I=dn(m);i[I]=ic(c,l,I,_,t,!1)}else _!==r[m]&&(r[m]=_,u=!0)}}}else{Ng(t,e,i,r)&&(u=!0);let f;for(const p in l)(!e||!$e(e,p)&&((f=ci(p))===p||!$e(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(i[p]=ic(c,l,p,void 0,t,!0)):delete i[p]);if(r!==l)for(const p in r)(!e||!$e(e,p))&&(delete r[p],u=!0)}u&&zn(t.attrs,"set","")}function Ng(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Er(c))continue;const u=e[c];let f;i&&$e(i,f=dn(c))?!r||!r.includes(f)?n[f]=u:(l||(l={}))[f]=u:Ba(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(r){const c=Ue(n),u=l||Qe;for(let f=0;f<r.length;f++){const p=r[f];n[p]=ic(i,c,p,u[p],t,!$e(u,p))}}return o}function ic(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=$e(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Ee(c)){const{propsDefaults:u}=i;if(n in u)s=u[n];else{const f=ro(i);s=u[n]=c.call(null,e),f()}}else s=c;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===ci(n))&&(s=!0))}return s}const JA=new WeakMap;function Mg(t,e,n=!1){const s=n?JA:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let c=!1;if(!Ee(t)){const f=p=>{c=!0;const[m,_]=Mg(p,e,!0);Ft(o,m),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!r&&!c)return ze(t)&&s.set(t,bi),bi;if(me(r))for(let f=0;f<r.length;f++){const p=dn(r[f]);kd(p)&&(o[p]=Qe)}else if(r)for(const f in r){const p=dn(f);if(kd(p)){const m=r[f],_=o[p]=me(m)||Ee(m)?{type:m}:Ft({},m),I=_.type;let w=!1,S=!0;if(me(I))for(let M=0;M<I.length;++M){const U=I[M],$=Ee(U)&&U.name;if($==="Boolean"){w=!0;break}else $==="String"&&(S=!1)}else w=Ee(I)&&I.name==="Boolean";_[0]=w,_[1]=S,(w||$e(_,"default"))&&l.push(p)}}const u=[o,l];return ze(t)&&s.set(t,u),u}function kd(t){return t[0]!=="$"&&!Er(t)}const Xc=t=>t==="_"||t==="_ctx"||t==="$stable",Zc=t=>me(t)?t.map(kn):[kn(t)],XA=(t,e,n)=>{if(e._n)return e;const s=wA((...i)=>Zc(e(...i)),n);return s._c=!1,s},Og=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Xc(i))continue;const r=t[i];if(Ee(r))e[i]=XA(i,r,s);else if(r!=null){const o=Zc(r);e[i]=()=>o}}},Vg=(t,e)=>{const n=Zc(e);t.slots.default=()=>n},Lg=(t,e,n)=>{for(const s in e)(n||!Xc(s))&&(t[s]=e[s])},ZA=(t,e,n)=>{const s=t.slots=Dg();if(t.vnode.shapeFlag&32){const i=e._;i?(Lg(s,e,n),n&&Jp(s,"_",i,!0)):Og(e,s)}else e&&Vg(t,e)},e0=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Qe;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:Lg(i,e,n):(r=!e.$stable,Og(e,i)),o=e}else e&&(Vg(t,e),o={default:1});if(r)for(const l in i)!Xc(l)&&o[l]==null&&delete i[l]},en=g0;function t0(t){return n0(t)}function n0(t,e){const n=Ma();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:_=Dn,insertStaticContent:I}=t,w=(y,C,N,z=null,W=null,q=null,ne=void 0,Z=null,P=!!C.dynamicChildren)=>{if(y===C)return;y&&!gr(y,C)&&(z=K(y),Re(y,W,q,!0),y=null),C.patchFlag===-2&&(P=!1,C.dynamicChildren=null);const{type:A,ref:x,shapeFlag:Q}=C;switch(A){case Fa:S(y,C,N,z);break;case Ds:M(y,C,N,z);break;case Bo:y==null&&U(C,N,z,ne);break;case Ce:O(y,C,N,z,W,q,ne,Z,P);break;default:Q&1?ie(y,C,N,z,W,q,ne,Z,P):Q&6?E(y,C,N,z,W,q,ne,Z,P):(Q&64||Q&128)&&A.process(y,C,N,z,W,q,ne,Z,P,he)}x!=null&&W?br(x,y&&y.ref,q,C||y,!C):x==null&&y&&y.ref!=null&&br(y.ref,null,q,y,!0)},S=(y,C,N,z)=>{if(y==null)s(C.el=l(C.children),N,z);else{const W=C.el=y.el;C.children!==y.children&&u(W,C.children)}},M=(y,C,N,z)=>{y==null?s(C.el=c(C.children||""),N,z):C.el=y.el},U=(y,C,N,z)=>{[y.el,y.anchor]=I(y.children,C,N,z,y.el,y.anchor)},$=({el:y,anchor:C},N,z)=>{let W;for(;y&&y!==C;)W=m(y),s(y,N,z),y=W;s(C,N,z)},G=({el:y,anchor:C})=>{let N;for(;y&&y!==C;)N=m(y),i(y),y=N;i(C)},ie=(y,C,N,z,W,q,ne,Z,P)=>{C.type==="svg"?ne="svg":C.type==="math"&&(ne="mathml"),y==null?we(C,N,z,W,q,ne,Z,P):b(y,C,W,q,ne,Z,P)},we=(y,C,N,z,W,q,ne,Z)=>{let P,A;const{props:x,shapeFlag:Q,transition:J,dirs:ee}=y;if(P=y.el=o(y.type,q,x&&x.is,x),Q&8?f(P,y.children):Q&16&&T(y.children,P,null,z,W,Rl(y,q),ne,Z),ee&&Qs(y,null,z,"created"),R(P,y,y.scopeId,ne,z),x){for(const le in x)le!=="value"&&!Er(le)&&r(P,le,null,x[le],q,z);"value"in x&&r(P,"value",null,x.value,q),(A=x.onVnodeBeforeMount)&&Sn(A,z,y)}ee&&Qs(y,null,z,"beforeMount");const re=s0(W,J);re&&J.beforeEnter(P),s(P,C,N),((A=x&&x.onVnodeMounted)||re||ee)&&en(()=>{A&&Sn(A,z,y),re&&J.enter(P),ee&&Qs(y,null,z,"mounted")},W)},R=(y,C,N,z,W)=>{if(N&&_(y,N),z)for(let q=0;q<z.length;q++)_(y,z[q]);if(W){let q=W.subTree;if(C===q||jg(q.type)&&(q.ssContent===C||q.ssFallback===C)){const ne=W.vnode;R(y,ne,ne.scopeId,ne.slotScopeIds,W.parent)}}},T=(y,C,N,z,W,q,ne,Z,P=0)=>{for(let A=P;A<y.length;A++){const x=y[A]=Z?vs(y[A]):kn(y[A]);w(null,x,C,N,z,W,q,ne,Z)}},b=(y,C,N,z,W,q,ne)=>{const Z=C.el=y.el;let{patchFlag:P,dynamicChildren:A,dirs:x}=C;P|=y.patchFlag&16;const Q=y.props||Qe,J=C.props||Qe;let ee;if(N&&zs(N,!1),(ee=J.onVnodeBeforeUpdate)&&Sn(ee,N,C,y),x&&Qs(C,y,N,"beforeUpdate"),N&&zs(N,!0),(Q.innerHTML&&J.innerHTML==null||Q.textContent&&J.textContent==null)&&f(Z,""),A?D(y.dynamicChildren,A,Z,N,z,Rl(C,W),q):ne||Te(y,C,Z,null,N,z,Rl(C,W),q,!1),P>0){if(P&16)k(Z,Q,J,N,W);else if(P&2&&Q.class!==J.class&&r(Z,"class",null,J.class,W),P&4&&r(Z,"style",Q.style,J.style,W),P&8){const re=C.dynamicProps;for(let le=0;le<re.length;le++){const ce=re[le],ge=Q[ce],Pe=J[ce];(Pe!==ge||ce==="value")&&r(Z,ce,ge,Pe,W,N)}}P&1&&y.children!==C.children&&f(Z,C.children)}else!ne&&A==null&&k(Z,Q,J,N,W);((ee=J.onVnodeUpdated)||x)&&en(()=>{ee&&Sn(ee,N,C,y),x&&Qs(C,y,N,"updated")},z)},D=(y,C,N,z,W,q,ne)=>{for(let Z=0;Z<C.length;Z++){const P=y[Z],A=C[Z],x=P.el&&(P.type===Ce||!gr(P,A)||P.shapeFlag&198)?p(P.el):N;w(P,A,x,null,z,W,q,ne,!0)}},k=(y,C,N,z,W)=>{if(C!==N){if(C!==Qe)for(const q in C)!Er(q)&&!(q in N)&&r(y,q,C[q],null,W,z);for(const q in N){if(Er(q))continue;const ne=N[q],Z=C[q];ne!==Z&&q!=="value"&&r(y,q,Z,ne,W,z)}"value"in N&&r(y,"value",C.value,N.value,W)}},O=(y,C,N,z,W,q,ne,Z,P)=>{const A=C.el=y?y.el:l(""),x=C.anchor=y?y.anchor:l("");let{patchFlag:Q,dynamicChildren:J,slotScopeIds:ee}=C;ee&&(Z=Z?Z.concat(ee):ee),y==null?(s(A,N,z),s(x,N,z),T(C.children||[],N,x,W,q,ne,Z,P)):Q>0&&Q&64&&J&&y.dynamicChildren?(D(y.dynamicChildren,J,N,W,q,ne,Z),(C.key!=null||W&&C===W.subTree)&&Bg(y,C,!0)):Te(y,C,N,x,W,q,ne,Z,P)},E=(y,C,N,z,W,q,ne,Z,P)=>{C.slotScopeIds=Z,y==null?C.shapeFlag&512?W.ctx.activate(C,N,z,ne,P):Oe(C,N,z,W,q,ne,P):Ct(y,C,P)},Oe=(y,C,N,z,W,q,ne)=>{const Z=y.component=w0(y,z,W);if(Cg(y)&&(Z.ctx.renderer=he),T0(Z,!1,ne),Z.asyncDep){if(W&&W.registerDep(Z,it,ne),!y.el){const P=Z.subTree=Ae(Ds);M(null,P,C,N),y.placeholder=P.el}}else it(Z,y,C,N,W,q,ne)},Ct=(y,C,N)=>{const z=C.component=y.component;if(f0(y,C,N))if(z.asyncDep&&!z.asyncResolved){Ve(z,C,N);return}else z.next=C,z.update();else C.el=y.el,z.vnode=C},it=(y,C,N,z,W,q,ne)=>{const Z=()=>{if(y.isMounted){let{next:Q,bu:J,u:ee,parent:re,vnode:le}=y;{const Je=Fg(y);if(Je){Q&&(Q.el=le.el,Ve(y,Q,ne)),Je.asyncDep.then(()=>{y.isUnmounted||Z()});return}}let ce=Q,ge;zs(y,!1),Q?(Q.el=le.el,Ve(y,Q,ne)):Q=le,J&&Vo(J),(ge=Q.props&&Q.props.onVnodeBeforeUpdate)&&Sn(ge,re,Q,le),zs(y,!0);const Pe=xd(y),Ye=y.subTree;y.subTree=Pe,w(Ye,Pe,p(Ye.el),K(Ye),y,W,q),Q.el=Pe.el,ce===null&&p0(y,Pe.el),ee&&en(ee,W),(ge=Q.props&&Q.props.onVnodeUpdated)&&en(()=>Sn(ge,re,Q,le),W)}else{let Q;const{el:J,props:ee}=C,{bm:re,m:le,parent:ce,root:ge,type:Pe}=y,Ye=Sr(C);zs(y,!1),re&&Vo(re),!Ye&&(Q=ee&&ee.onVnodeBeforeMount)&&Sn(Q,ce,C),zs(y,!0);{ge.ce&&ge.ce._def.shadowRoot!==!1&&ge.ce._injectChildStyle(Pe);const Je=y.subTree=xd(y);w(null,Je,N,z,y,W,q),C.el=Je.el}if(le&&en(le,W),!Ye&&(Q=ee&&ee.onVnodeMounted)){const Je=C;en(()=>Sn(Q,ce,Je),W)}(C.shapeFlag&256||ce&&Sr(ce.vnode)&&ce.vnode.shapeFlag&256)&&y.a&&en(y.a,W),y.isMounted=!0,C=N=z=null}};y.scope.on();const P=y.effect=new tg(Z);y.scope.off();const A=y.update=P.run.bind(P),x=y.job=P.runIfDirty.bind(P);x.i=y,x.id=y.uid,P.scheduler=()=>Yc(x),zs(y,!0),A()},Ve=(y,C,N)=>{C.component=y;const z=y.vnode.props;y.vnode=C,y.next=null,YA(y,C.props,z,N),e0(y,C.children,N),ts(),Ed(y),ns()},Te=(y,C,N,z,W,q,ne,Z,P=!1)=>{const A=y&&y.children,x=y?y.shapeFlag:0,Q=C.children,{patchFlag:J,shapeFlag:ee}=C;if(J>0){if(J&128){We(A,Q,N,z,W,q,ne,Z,P);return}else if(J&256){Dt(A,Q,N,z,W,q,ne,Z,P);return}}ee&8?(x&16&&gt(A,W,q),Q!==A&&f(N,Q)):x&16?ee&16?We(A,Q,N,z,W,q,ne,Z,P):gt(A,W,q,!0):(x&8&&f(N,""),ee&16&&T(Q,N,z,W,q,ne,Z,P))},Dt=(y,C,N,z,W,q,ne,Z,P)=>{y=y||bi,C=C||bi;const A=y.length,x=C.length,Q=Math.min(A,x);let J;for(J=0;J<Q;J++){const ee=C[J]=P?vs(C[J]):kn(C[J]);w(y[J],ee,N,null,W,q,ne,Z,P)}A>x?gt(y,W,q,!0,!1,Q):T(C,N,z,W,q,ne,Z,P,Q)},We=(y,C,N,z,W,q,ne,Z,P)=>{let A=0;const x=C.length;let Q=y.length-1,J=x-1;for(;A<=Q&&A<=J;){const ee=y[A],re=C[A]=P?vs(C[A]):kn(C[A]);if(gr(ee,re))w(ee,re,N,null,W,q,ne,Z,P);else break;A++}for(;A<=Q&&A<=J;){const ee=y[Q],re=C[J]=P?vs(C[J]):kn(C[J]);if(gr(ee,re))w(ee,re,N,null,W,q,ne,Z,P);else break;Q--,J--}if(A>Q){if(A<=J){const ee=J+1,re=ee<x?C[ee].el:z;for(;A<=J;)w(null,C[A]=P?vs(C[A]):kn(C[A]),N,re,W,q,ne,Z,P),A++}}else if(A>J)for(;A<=Q;)Re(y[A],W,q,!0),A++;else{const ee=A,re=A,le=new Map;for(A=re;A<=J;A++){const Le=C[A]=P?vs(C[A]):kn(C[A]);Le.key!=null&&le.set(Le.key,A)}let ce,ge=0;const Pe=J-re+1;let Ye=!1,Je=0;const Ge=new Array(Pe);for(A=0;A<Pe;A++)Ge[A]=0;for(A=ee;A<=Q;A++){const Le=y[A];if(ge>=Pe){Re(Le,W,q,!0);continue}let ke;if(Le.key!=null)ke=le.get(Le.key);else for(ce=re;ce<=J;ce++)if(Ge[ce-re]===0&&gr(Le,C[ce])){ke=ce;break}ke===void 0?Re(Le,W,q,!0):(Ge[ke-re]=A+1,ke>=Je?Je=ke:Ye=!0,w(Le,C[ke],N,null,W,q,ne,Z,P),ge++)}const Xe=Ye?i0(Ge):bi;for(ce=Xe.length-1,A=Pe-1;A>=0;A--){const Le=re+A,ke=C[Le],rt=C[Le+1],xt=Le+1<x?rt.el||rt.placeholder:z;Ge[A]===0?w(null,ke,N,xt,W,q,ne,Z,P):Ye&&(ce<0||A!==Xe[ce]?pt(ke,N,xt,2):ce--)}}},pt=(y,C,N,z,W=null)=>{const{el:q,type:ne,transition:Z,children:P,shapeFlag:A}=y;if(A&6){pt(y.component.subTree,C,N,z);return}if(A&128){y.suspense.move(C,N,z);return}if(A&64){ne.move(y,C,N,he);return}if(ne===Ce){s(q,C,N);for(let Q=0;Q<P.length;Q++)pt(P[Q],C,N,z);s(y.anchor,C,N);return}if(ne===Bo){$(y,C,N);return}if(z!==2&&A&1&&Z)if(z===0)Z.beforeEnter(q),s(q,C,N),en(()=>Z.enter(q),W);else{const{leave:Q,delayLeave:J,afterLeave:ee}=Z,re=()=>{y.ctx.isUnmounted?i(q):s(q,C,N)},le=()=>{q._isLeaving&&q[CA](!0),Q(q,()=>{re(),ee&&ee()})};J?J(q,re,le):le()}else s(q,C,N)},Re=(y,C,N,z=!1,W=!1)=>{const{type:q,props:ne,ref:Z,children:P,dynamicChildren:A,shapeFlag:x,patchFlag:Q,dirs:J,cacheIndex:ee}=y;if(Q===-2&&(W=!1),Z!=null&&(ts(),br(Z,null,N,y,!0),ns()),ee!=null&&(C.renderCache[ee]=void 0),x&256){C.ctx.deactivate(y);return}const re=x&1&&J,le=!Sr(y);let ce;if(le&&(ce=ne&&ne.onVnodeBeforeUnmount)&&Sn(ce,C,y),x&6)Xt(y.component,N,z);else{if(x&128){y.suspense.unmount(N,z);return}re&&Qs(y,null,C,"beforeUnmount"),x&64?y.type.remove(y,C,N,he,z):A&&!A.hasOnce&&(q!==Ce||Q>0&&Q&64)?gt(A,C,N,!1,!0):(q===Ce&&Q&384||!W&&x&16)&&gt(P,C,N),z&&rn(y)}(le&&(ce=ne&&ne.onVnodeUnmounted)||re)&&en(()=>{ce&&Sn(ce,C,y),re&&Qs(y,null,C,"unmounted")},N)},rn=y=>{const{type:C,el:N,anchor:z,transition:W}=y;if(C===Ce){Jt(N,z);return}if(C===Bo){G(y);return}const q=()=>{i(N),W&&!W.persisted&&W.afterLeave&&W.afterLeave()};if(y.shapeFlag&1&&W&&!W.persisted){const{leave:ne,delayLeave:Z}=W,P=()=>ne(N,q);Z?Z(y.el,q,P):P()}else q()},Jt=(y,C)=>{let N;for(;y!==C;)N=m(y),i(y),y=N;i(C)},Xt=(y,C,N)=>{const{bum:z,scope:W,job:q,subTree:ne,um:Z,m:P,a:A}=y;Dd(P),Dd(A),z&&Vo(z),W.stop(),q&&(q.flags|=8,Re(ne,y,C,N)),Z&&en(Z,C),en(()=>{y.isUnmounted=!0},C)},gt=(y,C,N,z=!1,W=!1,q=0)=>{for(let ne=q;ne<y.length;ne++)Re(y[ne],C,N,z,W)},K=y=>{if(y.shapeFlag&6)return K(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const C=m(y.anchor||y.el),N=C&&C[EA];return N?m(N):C};let oe=!1;const se=(y,C,N)=>{y==null?C._vnode&&Re(C._vnode,null,null,!0):w(C._vnode||null,y,C,null,null,null,N),C._vnode=y,oe||(oe=!0,Ed(),Ag(),oe=!1)},he={p:w,um:Re,m:pt,r:rn,mt:Oe,mc:T,pc:Te,pbc:D,n:K,o:t};return{render:se,hydrate:void 0,createApp:WA(se)}}function Rl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function zs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function s0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Bg(t,e,n=!1){const s=t.children,i=e.children;if(me(s)&&me(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=vs(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&Bg(o,l)),l.type===Fa&&l.patchFlag!==-1&&(l.el=o.el),l.type===Ds&&!l.el&&(l.el=o.el)}}function i0(t){const e=t.slice(),n=[0];let s,i,r,o,l;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(i=n[n.length-1],t[i]<u){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<u?r=l+1:o=l;u<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Fg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Fg(e)}function Dd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const r0=Symbol.for("v-scx"),o0=()=>xn(r0);function Cs(t,e,n){return Ug(t,e,n)}function Ug(t,e,n=Qe){const{immediate:s,deep:i,flush:r,once:o}=n,l=Ft({},n),c=e&&s||!e&&r!=="post";let u;if(Gr){if(r==="sync"){const _=o0();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=Dn,_.resume=Dn,_.pause=Dn,_}}const f=Lt;l.call=(_,I,w)=>Fn(_,f,I,w);let p=!1;r==="post"?l.scheduler=_=>{en(_,f&&f.suspense)}:r!=="sync"&&(p=!0,l.scheduler=(_,I)=>{I?_():Yc(_)}),l.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const m=vA(t,e,l);return Gr&&(u?u.push(m):c&&m()),m}function a0(t,e,n){const s=this.proxy,i=ht(t)?t.includes(".")?$g(s,t):()=>s[t]:t.bind(s,s);let r;Ee(e)?r=e:(r=e.handler,n=e);const o=ro(this),l=Ug(i,r.bind(s),n);return o(),l}function $g(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const l0=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${dn(e)}Modifiers`]||t[`${ci(e)}Modifiers`];function c0(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Qe;let i=n;const r=e.startsWith("update:"),o=r&&l0(s,e.slice(7));o&&(o.trim&&(i=n.map(f=>ht(f)?f.trim():f)),o.number&&(i=n.map(Jo)));let l,c=s[l=wl(e)]||s[l=wl(dn(e))];!c&&r&&(c=s[l=wl(ci(e))]),c&&Fn(c,t,6,i);const u=s[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Fn(u,t,6,i)}}const u0=new WeakMap;function Hg(t,e,n=!1){const s=n?u0:e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!Ee(t)){const c=u=>{const f=Hg(u,e,!0);f&&(l=!0,Ft(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(ze(t)&&s.set(t,null),null):(me(r)?r.forEach(c=>o[c]=null):Ft(o,r),ze(t)&&s.set(t,o),o)}function Ba(t,e){return!t||!Da(e)?!1:(e=e.slice(2).replace(/Once$/,""),$e(t,e[0].toLowerCase()+e.slice(1))||$e(t,ci(e))||$e(t,e))}function xd(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:c,render:u,renderCache:f,props:p,data:m,setupState:_,ctx:I,inheritAttrs:w}=t,S=ta(t);let M,U;try{if(n.shapeFlag&4){const G=i||s,ie=G;M=kn(u.call(ie,G,f,p,_,m,I)),U=l}else{const G=e;M=kn(G.length>1?G(p,{attrs:l,slots:o,emit:c}):G(p,null)),U=e.props?l:h0(l)}}catch(G){Pr.length=0,Va(G,t,1),M=Ae(Ds)}let $=M;if(U&&w!==!1){const G=Object.keys(U),{shapeFlag:ie}=$;G.length&&ie&7&&(r&&G.some(Bc)&&(U=d0(U,r)),$=Vi($,U,!1,!0))}return n.dirs&&($=Vi($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&Jc($,n.transition),M=$,ta(S),M}const h0=t=>{let e;for(const n in t)(n==="class"||n==="style"||Da(n))&&((e||(e={}))[n]=t[n]);return e},d0=(t,e)=>{const n={};for(const s in t)(!Bc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function f0(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:c}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Nd(s,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(o[m]!==s[m]&&!Ba(u,m))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Nd(s,o,u):!0:!!o;return!1}function Nd(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Ba(n,r))return!0}return!1}function p0({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const jg=t=>t.__isSuspense;function g0(t,e){e&&e.pendingBranch?me(t)?e.effects.push(...t):e.effects.push(t):IA(t)}const Ce=Symbol.for("v-fgt"),Fa=Symbol.for("v-txt"),Ds=Symbol.for("v-cmt"),Bo=Symbol.for("v-stc"),Pr=[];let nn=null;function L(t=!1){Pr.push(nn=t?null:[])}function m0(){Pr.pop(),nn=Pr[Pr.length-1]||null}let Hr=1;function ia(t,e=!1){Hr+=t,t<0&&nn&&e&&(nn.hasOnce=!0)}function Gg(t){return t.dynamicChildren=Hr>0?nn||bi:null,m0(),Hr>0&&nn&&nn.push(t),t}function F(t,e,n,s,i,r){return Gg(h(t,e,n,s,i,r,!0))}function qg(t,e,n,s,i){return Gg(Ae(t,e,n,s,i,!0))}function ra(t){return t?t.__v_isVNode===!0:!1}function gr(t,e){return t.type===e.type&&t.key===e.key}const Qg=({key:t})=>t??null,Fo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ht(t)||Bt(t)||Ee(t)?{i:tn,r:t,k:e,f:!!n}:t:null);function h(t,e=null,n=null,s=0,i=null,r=t===Ce?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Qg(e),ref:e&&Fo(e),scopeId:wg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:tn};return l?(eu(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=ht(n)?8:16),Hr>0&&!o&&nn&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&nn.push(c),c}const Ae=_0;function _0(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===FA)&&(t=Ds),ra(t)){const l=Vi(t,e,!0);return n&&eu(l,n),Hr>0&&!r&&nn&&(l.shapeFlag&6?nn[nn.indexOf(t)]=l:nn.push(l)),l.patchFlag=-2,l}if(P0(t)&&(t=t.__vccOpts),e){e=v0(e);let{class:l,style:c}=e;l&&!ht(l)&&(e.class=be(l)),ze(c)&&(Wc(c)&&!me(c)&&(c=Ft({},c)),e.style=yt(c))}const o=ht(t)?1:jg(t)?128:TA(t)?64:ze(t)?4:Ee(t)?2:0;return h(t,e,n,s,i,o,r,!0)}function v0(t){return t?Wc(t)||xg(t)?Ft({},t):t:null}function Vi(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:c}=t,u=e?y0(i||{},e):i,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Qg(u),ref:e&&e.ref?n&&r?me(r)?r.concat(Fo(e)):[r,Fo(e)]:Fo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ce?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Vi(t.ssContent),ssFallback:t.ssFallback&&Vi(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&Jc(f,c.clone(f)),f}function jr(t=" ",e=0){return Ae(Fa,null,t,e)}function zg(t,e){const n=Ae(Bo,null,t);return n.staticCount=e,n}function ue(t="",e=!1){return e?(L(),qg(Ds,null,t)):Ae(Ds,null,t)}function kn(t){return t==null||typeof t=="boolean"?Ae(Ds):me(t)?Ae(Ce,null,t.slice()):ra(t)?vs(t):Ae(Fa,null,String(t))}function vs(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Vi(t)}function eu(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(me(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),eu(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!xg(e)?e._ctx=tn:i===3&&tn&&(tn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ee(e)?(e={default:e,_ctx:tn},n=32):(e=String(e),s&64?(n=16,e=[jr(e)]):n=8);t.children=e,t.shapeFlag|=n}function y0(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=be([e.class,s.class]));else if(i==="style")e.style=yt([e.style,s.style]);else if(Da(i)){const r=e[i],o=s[i];o&&r!==o&&!(me(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Sn(t,e,n,s=null){Fn(t,e,7,[n,s])}const A0=Pg();let I0=0;function w0(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||A0,r={uid:I0++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new qy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mg(s,i),emitsOptions:Hg(s,i),emit:null,emitted:null,propsDefaults:Qe,inheritAttrs:s.inheritAttrs,ctx:Qe,data:Qe,props:Qe,attrs:Qe,slots:Qe,refs:Qe,setupState:Qe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=c0.bind(null,r),t.ce&&t.ce(r),r}let Lt=null;const E0=()=>Lt||tn;let oa,rc;{const t=Ma(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};oa=e("__VUE_INSTANCE_SETTERS__",n=>Lt=n),rc=e("__VUE_SSR_SETTERS__",n=>Gr=n)}const ro=t=>{const e=Lt;return oa(t),t.scope.on(),()=>{t.scope.off(),oa(e)}},Md=()=>{Lt&&Lt.scope.off(),oa(null)};function Wg(t){return t.vnode.shapeFlag&4}let Gr=!1;function T0(t,e=!1,n=!1){e&&rc(e);const{props:s,children:i}=t.vnode,r=Wg(t);KA(t,s,r,e),ZA(t,i,n||e);const o=r?C0(t,e):void 0;return e&&rc(!1),o}function C0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,$A);const{setup:s}=n;if(s){ts();const i=t.setupContext=s.length>1?S0(t):null,r=ro(t),o=io(s,t,0,[t.props,i]),l=Wp(o);if(ns(),r(),(l||t.sp)&&!Sr(t)&&Tg(t),l){if(o.then(Md,Md),e)return o.then(c=>{Od(t,c)}).catch(c=>{Va(c,t,0)});t.asyncDep=o}else Od(t,o)}else Kg(t)}function Od(t,e,n){Ee(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ze(e)&&(t.setupState=_g(e)),Kg(t)}function Kg(t,e,n){const s=t.type;t.render||(t.render=s.render||Dn);{const i=ro(t);ts();try{HA(t)}finally{ns(),i()}}}const b0={get(t,e){return Ot(t,"get",""),t[e]}};function S0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,b0),slots:t.slots,emit:t.emit,expose:e}}function Ua(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(_g(hA(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Rr)return Rr[n](t)},has(e,n){return n in e||n in Rr}})):t.proxy}function R0(t,e=!0){return Ee(t)?t.displayName||t.name:t.name||e&&t.__name}function P0(t){return Ee(t)&&"__vccOpts"in t}const je=(t,e)=>mA(t,e,Gr);function Yg(t,e,n){try{ia(-1);const s=arguments.length;return s===2?ze(e)&&!me(e)?ra(e)?Ae(t,null,[e]):Ae(t,e):Ae(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ra(n)&&(n=[n]),Ae(t,e,n))}finally{ia(1)}}const k0="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let oc;const Vd=typeof window<"u"&&window.trustedTypes;if(Vd)try{oc=Vd.createPolicy("vue",{createHTML:t=>t})}catch{}const Jg=oc?t=>oc.createHTML(t):t=>t,D0="http://www.w3.org/2000/svg",x0="http://www.w3.org/1998/Math/MathML",Qn=typeof document<"u"?document:null,Ld=Qn&&Qn.createElement("template"),N0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?Qn.createElementNS(D0,t):e==="mathml"?Qn.createElementNS(x0,t):n?Qn.createElement(t,{is:n}):Qn.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Qn.createTextNode(t),createComment:t=>Qn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Qn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Ld.innerHTML=Jg(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=Ld.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},M0=Symbol("_vtc");function O0(t,e,n){const s=t[M0];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const aa=Symbol("_vod"),Xg=Symbol("_vsh"),Zg={name:"show",beforeMount(t,{value:e},{transition:n}){t[aa]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):mr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),mr(t,!0),s.enter(t)):s.leave(t,()=>{mr(t,!1)}):mr(t,e))},beforeUnmount(t,{value:e}){mr(t,e)}};function mr(t,e){t.style.display=e?t[aa]:"none",t[Xg]=!e}const V0=Symbol(""),L0=/(?:^|;)\s*display\s*:/;function B0(t,e,n){const s=t.style,i=ht(n);let r=!1;if(n&&!i){if(e)if(ht(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Uo(s,l,"")}else for(const o in e)n[o]==null&&Uo(s,o,"");for(const o in n)o==="display"&&(r=!0),Uo(s,o,n[o])}else if(i){if(e!==n){const o=s[V0];o&&(n+=";"+o),s.cssText=n,r=L0.test(n)}}else e&&t.removeAttribute("style");aa in t&&(t[aa]=r?s.display:"",t[Xg]&&(s.display="none"))}const Bd=/\s*!important$/;function Uo(t,e,n){if(me(n))n.forEach(s=>Uo(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=F0(t,e);Bd.test(n)?t.setProperty(ci(s),n.replace(Bd,""),"important"):t[s]=n}}const Fd=["Webkit","Moz","ms"],Pl={};function F0(t,e){const n=Pl[e];if(n)return n;let s=dn(e);if(s!=="filter"&&s in t)return Pl[e]=s;s=Na(s);for(let i=0;i<Fd.length;i++){const r=Fd[i]+s;if(r in t)return Pl[e]=r}return e}const Ud="http://www.w3.org/1999/xlink";function $d(t,e,n,s,i,r=jy(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ud,e.slice(6,e.length)):t.setAttributeNS(Ud,e,n):n==null||r&&!Xp(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Bn(n)?String(n):n)}function Hd(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Jg(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Xp(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function Kn(t,e,n,s){t.addEventListener(e,n,s)}function U0(t,e,n,s){t.removeEventListener(e,n,s)}const jd=Symbol("_vei");function $0(t,e,n,s,i=null){const r=t[jd]||(t[jd]={}),o=r[e];if(s&&o)o.value=s;else{const[l,c]=H0(e);if(s){const u=r[e]=q0(s,i);Kn(t,l,u,c)}else o&&(U0(t,l,o,c),r[e]=void 0)}}const Gd=/(?:Once|Passive|Capture)$/;function H0(t){let e;if(Gd.test(t)){e={};let s;for(;s=t.match(Gd);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ci(t.slice(2)),e]}let kl=0;const j0=Promise.resolve(),G0=()=>kl||(j0.then(()=>kl=0),kl=Date.now());function q0(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Fn(Q0(s,n.value),e,5,[s])};return n.value=t,n.attached=G0(),n}function Q0(t,e){if(me(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const qd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,z0=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?O0(t,s,o):e==="style"?B0(t,n,s):Da(e)?Bc(e)||$0(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):W0(t,e,s,o))?(Hd(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&$d(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ht(s))?Hd(t,dn(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),$d(t,e,s,o))};function W0(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&qd(e)&&Ee(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return qd(e)&&ht(n)?!1:e in t}const xs=t=>{const e=t.props["onUpdate:modelValue"]||!1;return me(e)?n=>Vo(e,n):e};function K0(t){t.target.composing=!0}function Qd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const un=Symbol("_assign"),Zn={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[un]=xs(i);const r=s||i.props&&i.props.type==="number";Kn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=Jo(l)),t[un](l)}),n&&Kn(t,"change",()=>{t.value=t.value.trim()}),e||(Kn(t,"compositionstart",K0),Kn(t,"compositionend",Qd),Kn(t,"change",Qd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[un]=xs(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?Jo(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===c)||(t.value=c))}},Y0={deep:!0,created(t,e,n){t[un]=xs(n),Kn(t,"change",()=>{const s=t._modelValue,i=Li(t),r=t.checked,o=t[un];if(me(s)){const l=$c(s,i),c=l!==-1;if(r&&!c)o(s.concat(i));else if(!r&&c){const u=[...s];u.splice(l,1),o(u)}}else if(zi(s)){const l=new Set(s);r?l.add(i):l.delete(i),o(l)}else o(em(t,r))})},mounted:zd,beforeUpdate(t,e,n){t[un]=xs(n),zd(t,e,n)}};function zd(t,{value:e,oldValue:n},s){t._modelValue=e;let i;if(me(e))i=$c(e,s.props.value)>-1;else if(zi(e))i=e.has(s.props.value);else{if(e===n)return;i=si(e,em(t,!0))}t.checked!==i&&(t.checked=i)}const J0={created(t,{value:e},n){t.checked=si(e,n.props.value),t[un]=xs(n),Kn(t,"change",()=>{t[un](Li(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t[un]=xs(s),e!==n&&(t.checked=si(e,s.props.value))}},X0={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=zi(e);Kn(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Jo(Li(o)):Li(o));t[un](t.multiple?i?new Set(r):r:r[0]),t._assigning=!0,Kc(()=>{t._assigning=!1})}),t[un]=xs(s)},mounted(t,{value:e}){Wd(t,e)},beforeUpdate(t,e,n){t[un]=xs(n)},updated(t,{value:e}){t._assigning||Wd(t,e)}};function Wd(t,e){const n=t.multiple,s=me(e);if(!(n&&!s&&!zi(e))){for(let i=0,r=t.options.length;i<r;i++){const o=t.options[i],l=Li(o);if(n)if(s){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=$c(e,l)>-1}else o.selected=e.has(l);else if(si(Li(o),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Li(t){return"_value"in t?t._value:t.value}function em(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const tm={created(t,e,n){Po(t,e,n,null,"created")},mounted(t,e,n){Po(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){Po(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){Po(t,e,n,s,"updated")}};function Z0(t,e){switch(t){case"SELECT":return X0;case"TEXTAREA":return Zn;default:switch(e){case"checkbox":return Y0;case"radio":return J0;default:return Zn}}}function Po(t,e,n,s,i){const o=Z0(t.tagName,n.props&&n.props.type)[i];o&&o(t,e,n,s)}const eI=["ctrl","shift","alt","meta"],tI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>eI.some(n=>t[`${n}Key`]&&!e.includes(n))},kr=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=((i,...r)=>{for(let o=0;o<e.length;o++){const l=tI[e[o]];if(l&&l(i,e))return}return t(i,...r)}))},nI=Ft({patchProp:z0},N0);let Kd;function sI(){return Kd||(Kd=t0(nI))}const iI=((...t)=>{const e=sI().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=oI(s);if(!i)return;const r=e._component;!Ee(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,rI(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e});function rI(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function oI(t){return ht(t)?document.querySelector(t):t}/*!
 * vue-router v4.6.0
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Ii=typeof document<"u";function nm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function aI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&nm(t.default)}const Fe=Object.assign;function Dl(t,e){const n={};for(const s in e){const i=e[s];n[s]=In(i)?i.map(t):t(i)}return n}const Dr=()=>{},In=Array.isArray;function Yd(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}const sm=/#/g,lI=/&/g,cI=/\//g,uI=/=/g,hI=/\?/g,im=/\+/g,dI=/%5B/g,fI=/%5D/g,rm=/%5E/g,pI=/%60/g,om=/%7B/g,gI=/%7C/g,am=/%7D/g,mI=/%20/g;function tu(t){return t==null?"":encodeURI(""+t).replace(gI,"|").replace(dI,"[").replace(fI,"]")}function _I(t){return tu(t).replace(om,"{").replace(am,"}").replace(rm,"^")}function ac(t){return tu(t).replace(im,"%2B").replace(mI,"+").replace(sm,"%23").replace(lI,"%26").replace(pI,"`").replace(om,"{").replace(am,"}").replace(rm,"^")}function vI(t){return ac(t).replace(uI,"%3D")}function yI(t){return tu(t).replace(sm,"%23").replace(hI,"%3F")}function AI(t){return yI(t).replace(cI,"%2F")}function qr(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const II=/\/$/,wI=t=>t.replace(II,"");function xl(t,e,n="/"){let s,i={},r="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return c=l>=0&&c>l?-1:c,c>=0&&(s=e.slice(0,c),r=e.slice(c,l>0?l:e.length),i=t(r)),l>=0&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=bI(s??e,n),{fullPath:s+r+o,path:s,query:i,hash:qr(o)}}function EI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Jd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function TI(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Bi(e.matched[s],n.matched[i])&&lm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Bi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function lm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!CI(t[n],e[n]))return!1;return!0}function CI(t,e){return In(t)?Xd(t,e):In(e)?Xd(e,t):t===e}function Xd(t,e){return In(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function bI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const gs={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let lc=(function(t){return t.pop="pop",t.push="push",t})({}),Nl=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function SI(t){if(!t)if(Ii){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),wI(t)}const RI=/^[^#]+#/;function PI(t,e){return t.replace(RI,"#")+e}function kI(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const $a=()=>({left:window.scrollX,top:window.scrollY});function DI(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=kI(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Zd(t,e){return(history.state?history.state.position-e:-1)+t}const cc=new Map;function xI(t,e){cc.set(t,e)}function NI(t){const e=cc.get(t);return cc.delete(t),e}function MI(t){return typeof t=="string"||t&&typeof t=="object"}function cm(t){return typeof t=="string"||typeof t=="symbol"}let at=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const um=Symbol("");at.MATCHER_NOT_FOUND+"",at.NAVIGATION_GUARD_REDIRECT+"",at.NAVIGATION_ABORTED+"",at.NAVIGATION_CANCELLED+"",at.NAVIGATION_DUPLICATED+"";function Fi(t,e){return Fe(new Error,{type:t,[um]:!0},e)}function qn(t,e){return t instanceof Error&&um in t&&(e==null||!!(t.type&e))}const OI=["params","query","hash"];function VI(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of OI)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function LI(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<n.length;++s){const i=n[s].replace(im," "),r=i.indexOf("="),o=qr(r<0?i:i.slice(0,r)),l=r<0?null:qr(i.slice(r+1));if(o in e){let c=e[o];In(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function ef(t){let e="";for(let n in t){const s=t[n];if(n=vI(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(In(s)?s.map(i=>i&&ac(i)):[s&&ac(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function BI(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=In(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const FI=Symbol(""),tf=Symbol(""),Ha=Symbol(""),hm=Symbol(""),uc=Symbol("");function _r(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ys(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(Fi(at.NAVIGATION_ABORTED,{from:n,to:e})):m instanceof Error?c(m):MI(m)?c(Fi(at.NAVIGATION_GUARD_REDIRECT,{from:e,to:m})):(o&&s.enterCallbacks[i]===o&&typeof m=="function"&&o.push(m),l())},f=r(()=>t.call(s&&s.instances[i],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(m=>c(m))})}function Ml(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(nm(c)){const u=(c.__vccOpts||c)[e];u&&r.push(ys(u,n,s,o,l,i))}else{let u=c();r.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=aI(f)?f.default:f;o.mods[l]=f,o.components[l]=p;const m=(p.__vccOpts||p)[e];return m&&ys(m,n,s,o,l,i)()}))}}return r}function UI(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(u=>Bi(u,l))?s.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>Bi(u,c))||i.push(c))}return[n,s,i]}/*!
 * vue-router v4.6.0
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let $I=()=>location.protocol+"//"+location.host;function dm(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let o=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(o);return l[0]!=="/"&&(l="/"+l),Jd(l,"")}return Jd(n,t)+s+i}function HI(t,e,n,s){let i=[],r=[],o=null;const l=({state:m})=>{const _=dm(t,location),I=n.value,w=e.value;let S=0;if(m){if(n.value=_,e.value=m,o&&o===I){o=null;return}S=w?m.position-w.position:0}else s(_);i.forEach(M=>{M(n.value,I,{delta:S,type:lc.pop,direction:S?S>0?Nl.forward:Nl.back:Nl.unknown})})};function c(){o=n.value}function u(m){i.push(m);const _=()=>{const I=i.indexOf(m);I>-1&&i.splice(I,1)};return r.push(_),_}function f(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(Fe({},m.state,{scroll:$a()}),"")}}function p(){for(const m of r)m();r=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:c,listen:u,destroy:p}}function nf(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?$a():null}}function jI(t){const{history:e,location:n}=window,s={value:dm(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,u,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:$I()+t+c;try{e[f?"replaceState":"pushState"](u,"",m),i.value=u}catch(_){console.error(_),n[f?"replace":"assign"](m)}}function o(c,u){r(c,Fe({},e.state,nf(i.value.back,c,i.value.forward,!0),u,{position:i.value.position}),!0),s.value=c}function l(c,u){const f=Fe({},i.value,e.state,{forward:c,scroll:$a()});r(f.current,f,!0),r(c,Fe({},nf(s.value,c,null),{position:f.position+1},u),!1),s.value=c}return{location:s,state:i,push:l,replace:o}}function GI(t){t=SI(t);const e=jI(t),n=HI(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=Fe({location:"",base:t,go:s,createHref:PI.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function qI(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),GI(t)}let Ys=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var vt=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(vt||{});const QI={type:Ys.Static,value:""},zI=/[a-zA-Z0-9_]/;function WI(t){if(!t)return[[]];if(t==="/")return[[QI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=vt.Static,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,c,u="",f="";function p(){u&&(n===vt.Static?r.push({type:Ys.Static,value:u}):n===vt.Param||n===vt.ParamRegExp||n===vt.ParamRegExpEnd?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:Ys.Param,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==vt.ParamRegExp){s=n,n=vt.EscapeNext;continue}switch(n){case vt.Static:c==="/"?(u&&p(),o()):c===":"?(p(),n=vt.Param):m();break;case vt.EscapeNext:m(),n=s;break;case vt.Param:c==="("?n=vt.ParamRegExp:zI.test(c)?m():(p(),n=vt.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case vt.ParamRegExp:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=vt.ParamRegExpEnd:f+=c;break;case vt.ParamRegExpEnd:p(),n=vt.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===vt.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),i}const sf="[^/]+?",KI={sensitive:!1,strict:!1,start:!0,end:!0};var Ht=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(Ht||{});const YI=/[.+*?^${}()[\]/\\]/g;function JI(t,e){const n=Fe({},KI,e),s=[];let i=n.start?"^":"";const r=[];for(const u of t){const f=u.length?[]:[Ht.Root];n.strict&&!u.length&&(i+="/");for(let p=0;p<u.length;p++){const m=u[p];let _=Ht.Segment+(n.sensitive?Ht.BonusCaseSensitive:0);if(m.type===Ys.Static)p||(i+="/"),i+=m.value.replace(YI,"\\$&"),_+=Ht.Static;else if(m.type===Ys.Param){const{value:I,repeatable:w,optional:S,regexp:M}=m;r.push({name:I,repeatable:w,optional:S});const U=M||sf;if(U!==sf){_+=Ht.BonusCustomRegExp;try{`${U}`}catch(G){throw new Error(`Invalid custom RegExp for param "${I}" (${U}): `+G.message)}}let $=w?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;p||($=S&&u.length<2?`(?:/${$})`:"/"+$),S&&($+="?"),i+=$,_+=Ht.Dynamic,S&&(_+=Ht.BonusOptional),w&&(_+=Ht.BonusRepeatable),U===".*"&&(_+=Ht.BonusWildcard)}f.push(_)}s.push(f)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=Ht.BonusStrict}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(u){const f=u.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const _=f[m]||"",I=r[m-1];p[I.name]=_&&I.repeatable?_.split("/"):_}return p}function c(u){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const _ of m)if(_.type===Ys.Static)f+=_.value;else if(_.type===Ys.Param){const{value:I,repeatable:w,optional:S}=_,M=I in u?u[I]:"";if(In(M)&&!w)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const U=In(M)?M.join("/"):M;if(!U)if(S)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${I}"`);f+=U}}return f||"/"}return{re:o,score:s,keys:r,parse:l,stringify:c}}function XI(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===Ht.Static+Ht.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Ht.Static+Ht.Segment?1:-1:0}function fm(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=XI(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(rf(s))return 1;if(rf(i))return-1}return i.length-s.length}function rf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const ZI={strict:!1,end:!0,sensitive:!1};function ew(t,e,n){const s=JI(WI(t.path),n),i=Fe(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function tw(t,e){const n=[],s=new Map;e=Yd(ZI,e);function i(p){return s.get(p)}function r(p,m,_){const I=!_,w=af(p);w.aliasOf=_&&_.record;const S=Yd(e,p),M=[w];if("alias"in p){const G=typeof p.alias=="string"?[p.alias]:p.alias;for(const ie of G)M.push(af(Fe({},w,{components:_?_.record.components:w.components,path:ie,aliasOf:_?_.record:w})))}let U,$;for(const G of M){const{path:ie}=G;if(m&&ie[0]!=="/"){const we=m.record.path,R=we[we.length-1]==="/"?"":"/";G.path=m.record.path+(ie&&R+ie)}if(U=ew(G,m,S),_?_.alias.push(U):($=$||U,$!==U&&$.alias.push(U),I&&p.name&&!lf(U)&&o(p.name)),pm(U)&&c(U),w.children){const we=w.children;for(let R=0;R<we.length;R++)r(we[R],U,_&&_.children[R])}_=_||U}return $?()=>{o($)}:Dr}function o(p){if(cm(p)){const m=s.get(p);m&&(s.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&s.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const m=iw(p,n);n.splice(m,0,p),p.record.name&&!lf(p)&&s.set(p.record.name,p)}function u(p,m){let _,I={},w,S;if("name"in p&&p.name){if(_=s.get(p.name),!_)throw Fi(at.MATCHER_NOT_FOUND,{location:p});S=_.record.name,I=Fe(of(m.params,_.keys.filter($=>!$.optional).concat(_.parent?_.parent.keys.filter($=>$.optional):[]).map($=>$.name)),p.params&&of(p.params,_.keys.map($=>$.name))),w=_.stringify(I)}else if(p.path!=null)w=p.path,_=n.find($=>$.re.test(w)),_&&(I=_.parse(w),S=_.record.name);else{if(_=m.name?s.get(m.name):n.find($=>$.re.test(m.path)),!_)throw Fi(at.MATCHER_NOT_FOUND,{location:p,currentLocation:m});S=_.record.name,I=Fe({},m.params,p.params),w=_.stringify(I)}const M=[];let U=_;for(;U;)M.unshift(U.record),U=U.parent;return{name:S,path:w,params:I,matched:M,meta:sw(M)}}t.forEach(p=>r(p));function f(){n.length=0,s.clear()}return{addRoute:r,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:l,getRecordMatcher:i}}function of(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function af(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:nw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function nw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function lf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function sw(t){return t.reduce((e,n)=>Fe(e,n.meta),{})}function iw(t,e){let n=0,s=e.length;for(;n!==s;){const r=n+s>>1;fm(t,e[r])<0?s=r:n=r+1}const i=rw(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function rw(t){let e=t;for(;e=e.parent;)if(pm(e)&&fm(t,e)===0)return e}function pm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function cf(t){const e=xn(Ha),n=xn(hm),s=je(()=>{const c=Pt(t.to);return e.resolve(c)}),i=je(()=>{const{matched:c}=s.value,{length:u}=c,f=c[u-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(Bi.bind(null,f));if(m>-1)return m;const _=uf(c[u-2]);return u>1&&uf(f)===_&&p[p.length-1].path!==_?p.findIndex(Bi.bind(null,c[u-2])):m}),r=je(()=>i.value>-1&&uw(n.params,s.value.params)),o=je(()=>i.value>-1&&i.value===n.matched.length-1&&lm(n.params,s.value.params));function l(c={}){if(cw(c)){const u=e[Pt(t.replace)?"replace":"push"](Pt(t.to)).catch(Dr);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:je(()=>s.value.href),isActive:r,isExactActive:o,navigate:l}}function ow(t){return t.length===1?t[0]:t}const aw=Eg({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:cf,setup(t,{slots:e}){const n=so(cf(t)),{options:s}=xn(Ha),i=je(()=>({[hf(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[hf(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&ow(e.default(n));return t.custom?r:Yg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),lw=aw;function cw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function uw(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!In(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function uf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const hf=(t,e,n)=>t??e??n,hw=Eg({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=xn(uc),i=je(()=>t.route||s.value),r=xn(tf,0),o=je(()=>{let u=Pt(r);const{matched:f}=i.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),l=je(()=>i.value.matched[o.value]);Lo(tf,je(()=>o.value+1)),Lo(FI,l),Lo(uc,i);const c=V();return Cs(()=>[c.value,l.value,t.name],([u,f,p],[m,_,I])=>{f&&(f.instances[p]=u,_&&_!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),u&&f&&(!_||!Bi(f,_)||!m)&&(f.enterCallbacks[p]||[]).forEach(w=>w(u))},{flush:"post"}),()=>{const u=i.value,f=t.name,p=l.value,m=p&&p.components[f];if(!m)return df(n.default,{Component:m,route:u});const _=p.props[f],I=_?_===!0?u.params:typeof _=="function"?_(u):_:null,S=Yg(m,Fe({},I,e,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(p.instances[f]=null)},ref:c}));return df(n.default,{Component:S,route:u})||S}}});function df(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const dw=hw;function fw(t){const e=tw(t.routes,t),n=t.parseQuery||LI,s=t.stringifyQuery||ef,i=t.history,r=_r(),o=_r(),l=_r(),c=dA(gs);let u=gs;Ii&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Dl.bind(null,K=>""+K),p=Dl.bind(null,AI),m=Dl.bind(null,qr);function _(K,oe){let se,he;return cm(K)?(se=e.getRecordMatcher(K),he=oe):he=K,e.addRoute(he,se)}function I(K){const oe=e.getRecordMatcher(K);oe&&e.removeRoute(oe)}function w(){return e.getRoutes().map(K=>K.record)}function S(K){return!!e.getRecordMatcher(K)}function M(K,oe){if(oe=Fe({},oe||c.value),typeof K=="string"){const N=xl(n,K,oe.path),z=e.resolve({path:N.path},oe),W=i.createHref(N.fullPath);return Fe(N,z,{params:m(z.params),hash:qr(N.hash),redirectedFrom:void 0,href:W})}let se;if(K.path!=null)se=Fe({},K,{path:xl(n,K.path,oe.path).path});else{const N=Fe({},K.params);for(const z in N)N[z]==null&&delete N[z];se=Fe({},K,{params:p(N)}),oe.params=p(oe.params)}const he=e.resolve(se,oe),fe=K.hash||"";he.params=f(m(he.params));const y=EI(s,Fe({},K,{hash:_I(fe),path:he.path})),C=i.createHref(y);return Fe({fullPath:y,hash:fe,query:s===ef?BI(K.query):K.query||{}},he,{redirectedFrom:void 0,href:C})}function U(K){return typeof K=="string"?xl(n,K,c.value.path):Fe({},K)}function $(K,oe){if(u!==K)return Fi(at.NAVIGATION_CANCELLED,{from:oe,to:K})}function G(K){return R(K)}function ie(K){return G(Fe(U(K),{replace:!0}))}function we(K,oe){const se=K.matched[K.matched.length-1];if(se&&se.redirect){const{redirect:he}=se;let fe=typeof he=="function"?he(K,oe):he;return typeof fe=="string"&&(fe=fe.includes("?")||fe.includes("#")?fe=U(fe):{path:fe},fe.params={}),Fe({query:K.query,hash:K.hash,params:fe.path!=null?{}:K.params},fe)}}function R(K,oe){const se=u=M(K),he=c.value,fe=K.state,y=K.force,C=K.replace===!0,N=we(se,he);if(N)return R(Fe(U(N),{state:typeof N=="object"?Fe({},fe,N.state):fe,force:y,replace:C}),oe||se);const z=se;z.redirectedFrom=oe;let W;return!y&&TI(s,he,se)&&(W=Fi(at.NAVIGATION_DUPLICATED,{to:z,from:he}),pt(he,he,!0,!1)),(W?Promise.resolve(W):D(z,he)).catch(q=>qn(q)?qn(q,at.NAVIGATION_GUARD_REDIRECT)?q:We(q):Te(q,z,he)).then(q=>{if(q){if(qn(q,at.NAVIGATION_GUARD_REDIRECT))return R(Fe({replace:C},U(q.to),{state:typeof q.to=="object"?Fe({},fe,q.to.state):fe,force:y}),oe||z)}else q=O(z,he,!0,C,fe);return k(z,he,q),q})}function T(K,oe){const se=$(K,oe);return se?Promise.reject(se):Promise.resolve()}function b(K){const oe=Jt.values().next().value;return oe&&typeof oe.runWithContext=="function"?oe.runWithContext(K):K()}function D(K,oe){let se;const[he,fe,y]=UI(K,oe);se=Ml(he.reverse(),"beforeRouteLeave",K,oe);for(const N of he)N.leaveGuards.forEach(z=>{se.push(ys(z,K,oe))});const C=T.bind(null,K,oe);return se.push(C),gt(se).then(()=>{se=[];for(const N of r.list())se.push(ys(N,K,oe));return se.push(C),gt(se)}).then(()=>{se=Ml(fe,"beforeRouteUpdate",K,oe);for(const N of fe)N.updateGuards.forEach(z=>{se.push(ys(z,K,oe))});return se.push(C),gt(se)}).then(()=>{se=[];for(const N of y)if(N.beforeEnter)if(In(N.beforeEnter))for(const z of N.beforeEnter)se.push(ys(z,K,oe));else se.push(ys(N.beforeEnter,K,oe));return se.push(C),gt(se)}).then(()=>(K.matched.forEach(N=>N.enterCallbacks={}),se=Ml(y,"beforeRouteEnter",K,oe,b),se.push(C),gt(se))).then(()=>{se=[];for(const N of o.list())se.push(ys(N,K,oe));return se.push(C),gt(se)}).catch(N=>qn(N,at.NAVIGATION_CANCELLED)?N:Promise.reject(N))}function k(K,oe,se){l.list().forEach(he=>b(()=>he(K,oe,se)))}function O(K,oe,se,he,fe){const y=$(K,oe);if(y)return y;const C=oe===gs,N=Ii?history.state:{};se&&(he||C?i.replace(K.fullPath,Fe({scroll:C&&N&&N.scroll},fe)):i.push(K.fullPath,fe)),c.value=K,pt(K,oe,se,C),We()}let E;function Oe(){E||(E=i.listen((K,oe,se)=>{if(!Xt.listening)return;const he=M(K),fe=we(he,Xt.currentRoute.value);if(fe){R(Fe(fe,{replace:!0,force:!0}),he).catch(Dr);return}u=he;const y=c.value;Ii&&xI(Zd(y.fullPath,se.delta),$a()),D(he,y).catch(C=>qn(C,at.NAVIGATION_ABORTED|at.NAVIGATION_CANCELLED)?C:qn(C,at.NAVIGATION_GUARD_REDIRECT)?(R(Fe(U(C.to),{force:!0}),he).then(N=>{qn(N,at.NAVIGATION_ABORTED|at.NAVIGATION_DUPLICATED)&&!se.delta&&se.type===lc.pop&&i.go(-1,!1)}).catch(Dr),Promise.reject()):(se.delta&&i.go(-se.delta,!1),Te(C,he,y))).then(C=>{C=C||O(he,y,!1),C&&(se.delta&&!qn(C,at.NAVIGATION_CANCELLED)?i.go(-se.delta,!1):se.type===lc.pop&&qn(C,at.NAVIGATION_ABORTED|at.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),k(he,y,C)}).catch(Dr)}))}let Ct=_r(),it=_r(),Ve;function Te(K,oe,se){We(K);const he=it.list();return he.length?he.forEach(fe=>fe(K,oe,se)):console.error(K),Promise.reject(K)}function Dt(){return Ve&&c.value!==gs?Promise.resolve():new Promise((K,oe)=>{Ct.add([K,oe])})}function We(K){return Ve||(Ve=!K,Oe(),Ct.list().forEach(([oe,se])=>K?se(K):oe()),Ct.reset()),K}function pt(K,oe,se,he){const{scrollBehavior:fe}=t;if(!Ii||!fe)return Promise.resolve();const y=!se&&NI(Zd(K.fullPath,0))||(he||!se)&&history.state&&history.state.scroll||null;return Kc().then(()=>fe(K,oe,y)).then(C=>C&&DI(C)).catch(C=>Te(C,K,oe))}const Re=K=>i.go(K);let rn;const Jt=new Set,Xt={currentRoute:c,listening:!0,addRoute:_,removeRoute:I,clearRoutes:e.clearRoutes,hasRoute:S,getRoutes:w,resolve:M,options:t,push:G,replace:ie,go:Re,back:()=>Re(-1),forward:()=>Re(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:it.add,isReady:Dt,install(K){K.component("RouterLink",lw),K.component("RouterView",dw),K.config.globalProperties.$router=Xt,Object.defineProperty(K.config.globalProperties,"$route",{enumerable:!0,get:()=>Pt(c)}),Ii&&!rn&&c.value===gs&&(rn=!0,G(i.location).catch(he=>{}));const oe={};for(const he in gs)Object.defineProperty(oe,he,{get:()=>c.value[he],enumerable:!0});K.provide(Ha,Xt),K.provide(hm,gg(oe)),K.provide(uc,c);const se=K.unmount;Jt.add(K),K.unmount=function(){Jt.delete(K),Jt.size<1&&(u=gs,E&&E(),E=null,c.value=gs,rn=!1,Ve=!1),se()}}};function gt(K){return K.reduce((oe,se)=>oe.then(()=>b(se)),Promise.resolve())}return Xt}function qt(){return xn(Ha)}const pw={__name:"App",setup(t){qt();const e=V(null),n=V(!1),s=()=>{const r=localStorage.getItem("soundEnabled");return r!==null?r==="true":!0},i=()=>{e.value&&(s()?n.value||e.value.play().then(()=>{n.value=!0}).catch(()=>{}):(e.value.pause(),n.value=!1))};return dt(()=>{try{e.value=new Audio,e.value.src=new URL("@/assets/audio/bgm.mp3",import.meta.url).href,e.value.loop=!0,e.value.volume=.5,i();const r=()=>{e.value&&s()&&!n.value&&e.value.play().then(()=>{n.value=!0}).catch(()=>{})};document.addEventListener("click",r,{once:!0}),document.addEventListener("touchstart",r,{once:!0}),window.addEventListener("soundSettingChanged",i)}catch{console.log("BGM 파일을 찾을 수 없습니다.")}}),Wi(()=>{e.value&&(e.value.pause(),e.value=null),window.removeEventListener("soundSettingChanged",i)}),(r,o)=>{const l=BA("router-view");return L(),qg(l)}}},ft=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},gw={class:"loading-screen"},mw={__name:"LoadingScreen",setup(t){const e=qt();return dt(()=>{setTimeout(()=>{e.push("/login")},3e3)}),(n,s)=>(L(),F("div",gw,[...s[0]||(s[0]=[zg('<div class="loading-container" data-v-198fdd5f><div class="logo" data-v-198fdd5f><h1 data-v-198fdd5f>TDL</h1><p data-v-198fdd5f>NFT Web3 Game</p></div><div class="loading-spinner" data-v-198fdd5f><div class="spinner" data-v-198fdd5f></div><p data-v-198fdd5f>Loading...</p></div><div class="loading-progress" data-v-198fdd5f><div class="progress-bar" data-v-198fdd5f><div class="progress-fill" data-v-198fdd5f></div></div><span class="progress-text" data-v-198fdd5f>100%</span></div></div>',1)])]))}},_w=ft(mw,[["__scopeId","data-v-198fdd5f"]]),on=so({isLoggedIn:!1,walletAddress:"",userBalance:"0 ETH",nftCount:0,gameLevel:1,isLoading:!1}),gm=()=>{const t=(i,r)=>{on.isLoggedIn=!0,on.walletAddress=i,on.userBalance=r},e=i=>{on.nftCount=i.nftCount||0,on.gameLevel=i.gameLevel||1},n=i=>{on.isLoading=i},s=()=>{on.isLoggedIn=!1,on.walletAddress="",on.userBalance="0 ETH",on.nftCount=0,on.gameLevel=1};return{state:vw(on),setWalletConnected:t,setUserData:e,setLoading:n,logout:s}},vw=t=>new Proxy(t,{get(e,n){return e[n]},set(){return console.warn("직접 상태 수정은 금지됩니다. 액션을 사용하세요."),!1}}),yw=()=>{};var ff={};/**
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
 */const mm=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Aw=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},_m={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,f=r>>2,p=(r&3)<<4|l>>4;let m=(l&15)<<2|u>>6,_=u&63;c||(_=64,o||(m=64)),s.push(n[f],n[p],n[m],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(mm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Aw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||u==null||p==null)throw new Iw;const m=r<<2|l>>4;if(s.push(m),u!==64){const _=l<<4&240|u>>2;if(s.push(_),p!==64){const I=u<<6&192|p;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Iw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ww=function(t){const e=mm(t);return _m.encodeByteArray(e,!0)},la=function(t){return ww(t).replace(/\./g,"")},vm=function(t){try{return _m.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ew(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Tw=()=>Ew().__FIREBASE_DEFAULTS__,Cw=()=>{if(typeof process>"u"||typeof ff>"u")return;const t=ff.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vm(t[1]);return e&&JSON.parse(e)},ja=()=>{try{return yw()||Tw()||Cw()||bw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ym=t=>ja()?.emulatorHosts?.[t],Sw=t=>{const e=ym(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Am=()=>ja()?.config,Im=t=>ja()?.[`_${t}`];/**
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
 */class Rw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Ki(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function wm(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function Pw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...t};return[la(JSON.stringify(n)),la(JSON.stringify(o)),""].join(".")}const xr={};function kw(){const t={prod:[],emulator:[]};for(const e of Object.keys(xr))xr[e]?t.emulator.push(e):t.prod.push(e);return t}function Dw(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let pf=!1;function Em(t,e){if(typeof window>"u"||typeof document>"u"||!Ki(window.location.host)||xr[t]===e||xr[t]||pf)return;xr[t]=e;function n(m){return`__firebase__banner__${m}`}const s="__firebase__banner",r=kw().prod.length>0;function o(){const m=document.getElementById(s);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,_){m.setAttribute("width","24"),m.setAttribute("id",_),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{pf=!0,o()},m}function f(m,_){m.setAttribute("id",_),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=Dw(s),_=n("text"),I=document.getElementById(_)||document.createElement("span"),w=n("learnmore"),S=document.getElementById(w)||document.createElement("a"),M=n("preprendIcon"),U=document.getElementById(M)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const $=m.element;l($),f(S,w);const G=u();c(U,M),$.append(U,I,S,G),document.body.appendChild($)}r?(I.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(U.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,I.innerText="Preview backend running in this workspace."),I.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function Ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ut())}function Nw(){const t=ja()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Mw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Tm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ow(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vw(){const t=Ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Lw(){return!Nw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Cm(){try{return typeof indexedDB=="object"}catch{return!1}}function bm(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(n){e(n)}})}function Bw(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Fw="FirebaseError";class En extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Fw,Object.setPrototypeOf(this,En.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ui.prototype.create)}}class ui{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Uw(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new En(i,l,s)}}function Uw(t,e){return t.replace($w,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const $w=/\{\$([^}]+)}/g;function Hw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ns(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(gf(r)&&gf(o)){if(!Ns(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function gf(t){return t!==null&&typeof t=="object"}/**
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
 */function oo(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function jw(t,e){const n=new Gw(t,e);return n.subscribe.bind(n)}class Gw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");qw(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Ol),i.error===void 0&&(i.error=Ol),i.complete===void 0&&(i.complete=Ol);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ol(){}/**
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
 */const Qw=1e3,zw=2,Ww=14400*1e3,Kw=.5;function mf(t,e=Qw,n=zw){const s=e*Math.pow(n,t),i=Math.round(Kw*s*(Math.random()-.5)*2);return Math.min(Ww,s+i)}/**
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
 */class Yw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Rw;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xw(e))try{this.getOrInitializeService({instanceIdentifier:Ks})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ks){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ks){return this.instances.has(e)}getOptions(e=Ks){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Jw(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ks){return this.component?this.component.multipleInstances?e:Ks:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jw(t){return t===Ks?void 0:t}function Xw(t){return t.instantiationMode==="EAGER"}/**
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
 */class Zw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Yw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var De;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(De||(De={}));const e1={debug:De.DEBUG,verbose:De.VERBOSE,info:De.INFO,warn:De.WARN,error:De.ERROR,silent:De.SILENT},t1=De.INFO,n1={[De.DEBUG]:"log",[De.VERBOSE]:"log",[De.INFO]:"info",[De.WARN]:"warn",[De.ERROR]:"error"},s1=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=n1[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ga{constructor(e){this.name=e,this._logLevel=t1,this._logHandler=s1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in De))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?e1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,De.DEBUG,...e),this._logHandler(this,De.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,De.VERBOSE,...e),this._logHandler(this,De.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,De.INFO,...e),this._logHandler(this,De.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,De.WARN,...e),this._logHandler(this,De.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,De.ERROR,...e),this._logHandler(this,De.ERROR,...e)}}const i1=(t,e)=>e.some(n=>t instanceof n);let _f,vf;function r1(){return _f||(_f=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function o1(){return vf||(vf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sm=new WeakMap,hc=new WeakMap,Rm=new WeakMap,Vl=new WeakMap,nu=new WeakMap;function a1(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(bs(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Sm.set(n,t)}).catch(()=>{}),nu.set(e,t),e}function l1(t){if(hc.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});hc.set(t,e)}let dc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Rm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bs(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function c1(t){dc=t(dc)}function u1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ll(this),e,...n);return Rm.set(s,e.sort?e.sort():[e]),bs(s)}:o1().includes(t)?function(...e){return t.apply(Ll(this),e),bs(Sm.get(this))}:function(...e){return bs(t.apply(Ll(this),e))}}function h1(t){return typeof t=="function"?u1(t):(t instanceof IDBTransaction&&l1(t),i1(t,r1())?new Proxy(t,dc):t)}function bs(t){if(t instanceof IDBRequest)return a1(t);if(Vl.has(t))return Vl.get(t);const e=h1(t);return e!==t&&(Vl.set(t,e),nu.set(e,t)),e}const Ll=t=>nu.get(t);function Pm(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=bs(o);return s&&o.addEventListener("upgradeneeded",c=>{s(bs(o.result),c.oldVersion,c.newVersion,bs(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const d1=["get","getKey","getAll","getAllKeys","count"],f1=["put","add","delete","clear"],Bl=new Map;function yf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Bl.get(e))return Bl.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=f1.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||d1.includes(n)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&c.done]))[0]};return Bl.set(e,r),r}c1(t=>({...t,get:(e,n,s)=>yf(e,n)||t.get(e,n,s),has:(e,n)=>!!yf(e,n)||t.has(e,n)}));/**
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
 */class p1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(g1(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function g1(t){return t.getComponent()?.type==="VERSION"}const fc="@firebase/app",Af="0.14.5";/**
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
 */const ss=new Ga("@firebase/app"),m1="@firebase/app-compat",_1="@firebase/analytics-compat",v1="@firebase/analytics",y1="@firebase/app-check-compat",A1="@firebase/app-check",I1="@firebase/auth",w1="@firebase/auth-compat",E1="@firebase/database",T1="@firebase/data-connect",C1="@firebase/database-compat",b1="@firebase/functions",S1="@firebase/functions-compat",R1="@firebase/installations",P1="@firebase/installations-compat",k1="@firebase/messaging",D1="@firebase/messaging-compat",x1="@firebase/performance",N1="@firebase/performance-compat",M1="@firebase/remote-config",O1="@firebase/remote-config-compat",V1="@firebase/storage",L1="@firebase/storage-compat",B1="@firebase/firestore",F1="@firebase/ai",U1="@firebase/firestore-compat",$1="firebase",H1="12.5.0";/**
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
 */const pc="[DEFAULT]",j1={[fc]:"fire-core",[m1]:"fire-core-compat",[v1]:"fire-analytics",[_1]:"fire-analytics-compat",[A1]:"fire-app-check",[y1]:"fire-app-check-compat",[I1]:"fire-auth",[w1]:"fire-auth-compat",[E1]:"fire-rtdb",[T1]:"fire-data-connect",[C1]:"fire-rtdb-compat",[b1]:"fire-fn",[S1]:"fire-fn-compat",[R1]:"fire-iid",[P1]:"fire-iid-compat",[k1]:"fire-fcm",[D1]:"fire-fcm-compat",[x1]:"fire-perf",[N1]:"fire-perf-compat",[M1]:"fire-rc",[O1]:"fire-rc-compat",[V1]:"fire-gcs",[L1]:"fire-gcs-compat",[B1]:"fire-fst",[U1]:"fire-fst-compat",[F1]:"fire-vertex","fire-js":"fire-js",[$1]:"fire-js-all"};/**
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
 */const ca=new Map,G1=new Map,gc=new Map;function If(t,e){try{t.container.addComponent(e)}catch(n){ss.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Un(t){const e=t.name;if(gc.has(e))return ss.debug(`There were multiple attempts to register component ${e}.`),!1;gc.set(e,t);for(const n of ca.values())If(n,t);for(const n of G1.values())If(n,t);return!0}function hi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function gn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const q1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ss=new ui("app","Firebase",q1);/**
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
 */class Q1{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ss.create("app-deleted",{appName:this._name})}}/**
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
 */const Yi=H1;function km(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:pc,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw Ss.create("bad-app-name",{appName:String(i)});if(n||(n=Am()),!n)throw Ss.create("no-options");const r=ca.get(i);if(r){if(Ns(n,r.options)&&Ns(s,r.config))return r;throw Ss.create("duplicate-app",{appName:i})}const o=new Zw(i);for(const c of gc.values())o.addComponent(c);const l=new Q1(n,s,o);return ca.set(i,l),l}function su(t=pc){const e=ca.get(t);if(!e&&t===pc&&Am())return km();if(!e)throw Ss.create("no-app",{appName:t});return e}function hn(t,e,n){let s=j1[t]??t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ss.warn(o.join(" "));return}Un(new wn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const z1="firebase-heartbeat-database",W1=1,Qr="firebase-heartbeat-store";let Fl=null;function Dm(){return Fl||(Fl=Pm(z1,W1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Qr)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ss.create("idb-open",{originalErrorMessage:t.message})})),Fl}async function K1(t){try{const n=(await Dm()).transaction(Qr),s=await n.objectStore(Qr).get(xm(t));return await n.done,s}catch(e){if(e instanceof En)ss.warn(e.message);else{const n=Ss.create("idb-get",{originalErrorMessage:e?.message});ss.warn(n.message)}}}async function wf(t,e){try{const s=(await Dm()).transaction(Qr,"readwrite");await s.objectStore(Qr).put(e,xm(t)),await s.done}catch(n){if(n instanceof En)ss.warn(n.message);else{const s=Ss.create("idb-set",{originalErrorMessage:n?.message});ss.warn(s.message)}}}function xm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Y1=1024,J1=30;class X1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new eE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ef();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>J1){const i=tE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){ss.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ef(),{heartbeatsToSend:n,unsentEntries:s}=Z1(this._heartbeatsCache.heartbeats),i=la(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return ss.warn(e),""}}}function Ef(){return new Date().toISOString().substring(0,10)}function Z1(t,e=Y1){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Tf(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Tf(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class eE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Cm()?bm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await K1(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return wf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return wf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Tf(t){return la(JSON.stringify({version:2,heartbeats:t})).length}function tE(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function nE(t){Un(new wn("platform-logger",e=>new p1(e),"PRIVATE")),Un(new wn("heartbeat",e=>new X1(e),"PRIVATE")),hn(fc,Af,t),hn(fc,Af,"esm2020"),hn("fire-js","")}nE("");var sE="firebase",iE="12.5.0";/**
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
 */hn(sE,iE,"app");function Nm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rE=Nm,Mm=new ui("auth","Firebase",Nm());/**
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
 */const ua=new Ga("@firebase/auth");function oE(t,...e){ua.logLevel<=De.WARN&&ua.warn(`Auth (${Yi}): ${t}`,...e)}function $o(t,...e){ua.logLevel<=De.ERROR&&ua.error(`Auth (${Yi}): ${t}`,...e)}/**
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
 */function $n(t,...e){throw ru(t,...e)}function An(t,...e){return ru(t,...e)}function iu(t,e,n){const s={...rE(),[e]:n};return new ui("auth","Firebase",s).create(e,{appName:t.name})}function ti(t){return iu(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function aE(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&$n(t,"argument-error"),iu(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ru(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Mm.create(t,...e)}function ve(t,e,...n){if(!t)throw ru(e,...n)}function Jn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw $o(e),new Error(e)}function is(t,e){t||Jn(e)}/**
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
 */function mc(){return typeof self<"u"&&self.location?.href||""}function lE(){return Cf()==="http:"||Cf()==="https:"}function Cf(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function cE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lE()||Tm()||"connection"in navigator)?navigator.onLine:!0}function uE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ao{constructor(e,n){this.shortDelay=e,this.longDelay=n,is(n>e,"Short delay should be less than long delay!"),this.isMobile=xw()||Ow()}get(){return cE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ou(t,e){is(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Om{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Jn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Jn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Jn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const hE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const dE=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],fE=new ao(3e4,6e4);function au(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ji(t,e,n,s,i={}){return Vm(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const l=oo({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...r};return Mw()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Ki(t.emulatorConfig.host)&&(u.credentials="include"),Om.fetch()(await Lm(t,t.config.apiHost,n,l),u)})}async function Vm(t,e,n){t._canInitEmulator=!1;const s={...hE,...e};try{const i=new gE(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ko(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const l=r.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ko(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ko(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ko(t,"user-disabled",o);const f=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw iu(t,f,u);$n(t,f)}}catch(i){if(i instanceof En)throw i;$n(t,"network-request-failed",{message:String(i)})}}async function pE(t,e,n,s,i={}){const r=await Ji(t,e,n,s,i);return"mfaPendingCredential"in r&&$n(t,"multi-factor-auth-required",{_serverResponse:r}),r}async function Lm(t,e,n,s){const i=`${e}${n}?${s}`,r=t,o=r.config.emulator?ou(t.config,i):`${t.config.apiScheme}://${i}`;return dE.includes(n)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}class gE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(An(this.auth,"network-request-failed")),fE.get())})}}function ko(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=An(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function mE(t,e){return Ji(t,"POST","/v1/accounts:delete",e)}async function ha(t,e){return Ji(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Nr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _E(t,e=!1){const n=Yt(t),s=await n.getIdToken(e),i=lu(s);ve(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r?.sign_in_provider;return{claims:i,token:s,authTime:Nr(Ul(i.auth_time)),issuedAtTime:Nr(Ul(i.iat)),expirationTime:Nr(Ul(i.exp)),signInProvider:o||null,signInSecondFactor:r?.sign_in_second_factor||null}}function Ul(t){return Number(t)*1e3}function lu(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return $o("JWT malformed, contained fewer than 3 sections"),null;try{const i=vm(n);return i?JSON.parse(i):($o("Failed to decode base64 JWT payload"),null)}catch(i){return $o("Caught error parsing JWT payload as JSON",i?.toString()),null}}function bf(t){const e=lu(t);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function zr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof En&&vE(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function vE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class yE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class _c{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Nr(this.lastLoginAt),this.creationTime=Nr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function da(t){const e=t.auth,n=await t.getIdToken(),s=await zr(t,ha(e,{idToken:n}));ve(s?.users.length,e,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const r=i.providerUserInfo?.length?Bm(i.providerUserInfo):[],o=IE(t.providerData,r),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!o?.length,u=l?c:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new _c(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function AE(t){const e=Yt(t);await da(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function IE(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Bm(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function wE(t,e){const n=await Vm(t,{},async()=>{const s=oo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=await Lm(t,i,"/v1/token",`key=${r}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:s};return t.emulatorConfig&&Ki(t.emulatorConfig.host)&&(c.credentials="include"),Om.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function EE(t,e){return Ji(t,"POST","/v2/accounts:revokeToken",au(t,e))}/**
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
 */class Di{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const n=bf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await wE(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Di;return s&&(ve(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(ve(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(ve(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Di,this.toJSON())}_performRefresh(){return Jn("not implemented")}}/**
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
 */function ms(t,e){ve(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _n{constructor({uid:e,auth:n,stsTokenManager:s,...i}){this.providerId="firebase",this.proactiveRefresh=new yE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new _c(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await zr(this,this.stsTokenManager.getToken(this.auth,e));return ve(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _E(this,e)}reload(){return AE(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _n({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await da(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gn(this.auth.app))return Promise.reject(ti(this.auth));const e=await this.getIdToken();return await zr(this,mE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,i=n.email??void 0,r=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:_,providerData:I,stsTokenManager:w}=n;ve(p&&w,e,"internal-error");const S=Di.fromJSON(this.name,w);ve(typeof p=="string",e,"internal-error"),ms(s,e.name),ms(i,e.name),ve(typeof m=="boolean",e,"internal-error"),ve(typeof _=="boolean",e,"internal-error"),ms(r,e.name),ms(o,e.name),ms(l,e.name),ms(c,e.name),ms(u,e.name),ms(f,e.name);const M=new _n({uid:p,auth:e,email:i,emailVerified:m,displayName:s,isAnonymous:_,photoURL:o,phoneNumber:r,tenantId:l,stsTokenManager:S,createdAt:u,lastLoginAt:f});return I&&Array.isArray(I)&&(M.providerData=I.map(U=>({...U}))),c&&(M._redirectEventId=c),M}static async _fromIdTokenResponse(e,n,s=!1){const i=new Di;i.updateFromServerResponse(n);const r=new _n({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await da(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];ve(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Bm(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!r?.length,l=new Di;l.updateFromIdToken(s);const c=new _n({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new _c(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!r?.length};return Object.assign(c,u),c}}/**
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
 */const Sf=new Map;function Xn(t){is(t instanceof Function,"Expected a class definition");let e=Sf.get(t);return e?(is(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Sf.set(t,e),e)}/**
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
 */function Ho(t,e,n){return`firebase:${t}:${e}:${n}`}class xi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Ho(this.userKey,i.apiKey,r),this.fullPersistenceKey=Ho("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ha(this.auth,{idToken:e}).catch(()=>{});return n?_n._fromGetAccountInfoResponse(this.auth,n,e):null}return _n._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new xi(Xn(Rf),e,s);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||Xn(Rf);const o=Ho(s,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await ha(e,{idToken:f}).catch(()=>{});if(!m)break;p=await _n._fromGetAccountInfoResponse(e,m,f)}else p=_n._fromJSON(e,f);u!==r&&(l=p),r=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new xi(r,e,s):(r=c[0],l&&await r._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new xi(r,e,s))}}/**
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
 */function Pf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Um(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qm(e))return"Blackberry";if(Qm(e))return"Webos";if($m(e))return"Safari";if((e.includes("chrome/")||Hm(e))&&!e.includes("edge/"))return"Chrome";if(Gm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if(s?.length===2)return s[1]}return"Other"}function Um(t=Ut()){return/firefox\//i.test(t)}function $m(t=Ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Hm(t=Ut()){return/crios\//i.test(t)}function jm(t=Ut()){return/iemobile/i.test(t)}function Gm(t=Ut()){return/android/i.test(t)}function qm(t=Ut()){return/blackberry/i.test(t)}function Qm(t=Ut()){return/webos/i.test(t)}function cu(t=Ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function TE(t=Ut()){return cu(t)&&!!window.navigator?.standalone}function CE(){return Vw()&&document.documentMode===10}function zm(t=Ut()){return cu(t)||Gm(t)||Qm(t)||qm(t)||/windows phone/i.test(t)||jm(t)}/**
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
 */function Wm(t,e=[]){let n;switch(t){case"Browser":n=Pf(Ut());break;case"Worker":n=`${Pf(Ut())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Yi}/${s}`}/**
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
 */class bE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,l)=>{try{const c=e(r);o(c)}catch(c){l(c)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function SE(t,e={}){return Ji(t,"GET","/v2/passwordPolicy",au(t,e))}/**
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
 */const RE=6;class PE{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??RE,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class kE{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kf(this),this.idTokenSubscription=new kf(this),this.beforeStateQueue=new bE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Mm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await xi.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ha(this,{idToken:e}),s=await _n._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(gn(this.app)){const r=this.app.settings.authIdToken;return r?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(r).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=this.redirectUser?._redirectEventId,o=s?._redirectEventId,l=await this.tryRedirectSignIn(e);(!r||r===o)&&l?.user&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(r){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(r))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await da(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=uE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gn(this.app))return Promise.reject(ti(this));const n=e?Yt(e):null;return n&&ve(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gn(this.app)?Promise.reject(ti(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gn(this.app)?Promise.reject(ti(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Xn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await SE(this),n=new PE(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ui("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await EE(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xn(e)||this._popupRedirectResolver;ve(n,this,"argument-error"),this.redirectPersistenceManager=await xi.create(this,[Xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(l,this,"internal-error"),l.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(gn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&oE(`Error while retrieving App Check token: ${e.error}`),e?.token}}function qa(t){return Yt(t)}class kf{constructor(e){this.auth=e,this.observer=null,this.addObserver=jw(n=>this.observer=n)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let uu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function DE(t){uu=t}function xE(t){return uu.loadJS(t)}function NE(){return uu.gapiScript}function ME(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function OE(t,e){const n=hi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Ns(r,e??{}))return i;$n(i,"already-initialized")}return n.initialize({options:e})}function VE(t,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(Xn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e?.popupRedirectResolver)}function LE(t,e,n){const s=qa(t);ve(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=Km(e),{host:o,port:l}=BE(e),c=l===null?"":`:${l}`,u={url:`${r}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){ve(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ve(Ns(u,s.config.emulator)&&Ns(f,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=u,s.emulatorConfig=f,s.settings.appVerificationDisabledForTesting=!0,Ki(o)?(wm(`${r}//${o}${c}`),Em("Auth",!0)):FE()}function Km(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function BE(t){const e=Km(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Df(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Df(o)}}}function Df(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function FE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ym{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Jn("not implemented")}_getIdTokenResponse(e){return Jn("not implemented")}_linkToIdToken(e,n){return Jn("not implemented")}_getReauthenticationResolver(e){return Jn("not implemented")}}/**
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
 */async function Ni(t,e){return pE(t,"POST","/v1/accounts:signInWithIdp",au(t,e))}/**
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
 */const UE="http://localhost";class ii extends Ym{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ii(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$n("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i,...r}=n;if(!s||!i)return null;const o=new ii(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ni(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ni(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ni(e,n)}buildRequest(){const e={requestUri:UE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=oo(n)}return e}}/**
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
 */class As extends lo{constructor(){super("facebook.com")}static credential(e){return ii._fromParams({providerId:As.PROVIDER_ID,signInMethod:As.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return As.credentialFromTaggedObject(e)}static credentialFromError(e){return As.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return As.credential(e.oauthAccessToken)}catch{return null}}}As.FACEBOOK_SIGN_IN_METHOD="facebook.com";As.PROVIDER_ID="facebook.com";/**
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
 */class Yn extends lo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ii._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Yn.credential(n,s)}catch{return null}}}Yn.GOOGLE_SIGN_IN_METHOD="google.com";Yn.PROVIDER_ID="google.com";/**
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
 */class Is extends lo{constructor(){super("github.com")}static credential(e){return ii._fromParams({providerId:Is.PROVIDER_ID,signInMethod:Is.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Is.credentialFromTaggedObject(e)}static credentialFromError(e){return Is.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Is.credential(e.oauthAccessToken)}catch{return null}}}Is.GITHUB_SIGN_IN_METHOD="github.com";Is.PROVIDER_ID="github.com";/**
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
 */class ws extends lo{constructor(){super("twitter.com")}static credential(e,n){return ii._fromParams({providerId:ws.PROVIDER_ID,signInMethod:ws.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ws.credentialFromTaggedObject(e)}static credentialFromError(e){return ws.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return ws.credential(n,s)}catch{return null}}}ws.TWITTER_SIGN_IN_METHOD="twitter.com";ws.PROVIDER_ID="twitter.com";/**
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
 */class Ui{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await _n._fromIdTokenResponse(e,s,i),o=xf(s);return new Ui({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=xf(s);return new Ui({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function xf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class fa extends En{constructor(e,n,s,i){super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,fa.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new fa(e,n,s,i)}}function Jm(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?fa._fromErrorAndOperation(t,r,e,s):r})}async function $E(t,e,n=!1){const s=await zr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ui._forOperation(t,"link",s)}/**
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
 */async function HE(t,e,n=!1){const{auth:s}=t;if(gn(s.app))return Promise.reject(ti(s));const i="reauthenticate";try{const r=await zr(t,Jm(s,i,e,t),n);ve(r.idToken,s,"internal-error");const o=lu(r.idToken);ve(o,s,"internal-error");const{sub:l}=o;return ve(t.uid===l,s,"user-mismatch"),Ui._forOperation(t,i,r)}catch(r){throw r?.code==="auth/user-not-found"&&$n(s,"user-mismatch"),r}}/**
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
 */async function jE(t,e,n=!1){if(gn(t.app))return Promise.reject(ti(t));const s="signIn",i=await Jm(t,s,e),r=await Ui._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function GE(t,e,n,s){return Yt(t).onIdTokenChanged(e,n,s)}function qE(t,e,n){return Yt(t).beforeAuthStateChanged(e,n)}function QE(t){return Yt(t).signOut()}const pa="__sak";/**
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
 */class Xm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(pa,"1"),this.storage.removeItem(pa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const zE=1e3,WE=10;class Zm extends Xm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=zm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);CE()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,WE):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},zE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zm.type="LOCAL";const KE=Zm;/**
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
 */class e_ extends Xm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}e_.type="SESSION";const t_=e_;/**
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
 */function YE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Qa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Qa(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,r)),c=await YE(l);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qa.receivers=[];/**
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
 */class JE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((l,c)=>{const u=du("",20);i.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),l(m.data.response);break;default:clearTimeout(f),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Nn(){return window}function XE(t){Nn().location.href=t}/**
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
 */function n_(){return typeof Nn().WorkerGlobalScope<"u"&&typeof Nn().importScripts=="function"}async function ZE(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eT(){return navigator?.serviceWorker?.controller||null}function tT(){return n_()?self:null}/**
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
 */const s_="firebaseLocalStorageDb",nT=1,ga="firebaseLocalStorage",i_="fbase_key";class co{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function za(t,e){return t.transaction([ga],e?"readwrite":"readonly").objectStore(ga)}function sT(){const t=indexedDB.deleteDatabase(s_);return new co(t).toPromise()}function vc(){const t=indexedDB.open(s_,nT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ga,{keyPath:i_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ga)?e(s):(s.close(),await sT(),e(await vc()))})})}async function Nf(t,e,n){const s=za(t,!0).put({[i_]:e,value:n});return new co(s).toPromise()}async function iT(t,e){const n=za(t,!1).get(e),s=await new co(n).toPromise();return s===void 0?null:s.value}function Mf(t,e){const n=za(t,!0).delete(e);return new co(n).toPromise()}const rT=800,oT=3;class r_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>oT)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return n_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qa._getInstance(tT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await ZE(),!this.activeServiceWorker)return;this.sender=new JE(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||eT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vc();return await Nf(e,pa,"1"),await Mf(e,pa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Nf(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>iT(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Mf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=za(i,!1).getAll();return new co(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}r_.type="LOCAL";const aT=r_;new ao(3e4,6e4);/**
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
 */function o_(t,e){return e?Xn(e):(ve(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class fu extends Ym{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ni(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ni(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ni(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function lT(t){return jE(t.auth,new fu(t),t.bypassAuthState)}function cT(t){const{auth:e,user:n}=t;return ve(n,e,"internal-error"),HE(n,new fu(t),t.bypassAuthState)}async function uT(t){const{auth:e,user:n}=t;return ve(n,e,"internal-error"),$E(n,new fu(t),t.bypassAuthState)}/**
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
 */class a_{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lT;case"linkViaPopup":case"linkViaRedirect":return uT;case"reauthViaPopup":case"reauthViaRedirect":return cT;default:$n(this.auth,"internal-error")}}resolve(e){is(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){is(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const hT=new ao(2e3,1e4);async function dT(t,e,n){if(gn(t.app))return Promise.reject(An(t,"operation-not-supported-in-this-environment"));const s=qa(t);aE(t,e,hu);const i=o_(s,n);return new Js(s,"signInViaPopup",e,i).executeNotNull()}class Js extends a_{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Js.currentPopupAction&&Js.currentPopupAction.cancel(),Js.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){is(this.filter.length===1,"Popup operations only handle one event");const e=du();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(An(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(An(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Js.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(An(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hT.get())};e()}}Js.currentPopupAction=null;/**
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
 */const fT="pendingRedirect",jo=new Map;class pT extends a_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=jo.get(this.auth._key());if(!e){try{const s=await gT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}jo.set(this.auth._key(),e)}return this.bypassAuthState||jo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gT(t,e){const n=vT(e),s=_T(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function mT(t,e){jo.set(t._key(),e)}function _T(t){return Xn(t._redirectPersistence)}function vT(t){return Ho(fT,t.config.apiKey,t.name)}async function yT(t,e,n=!1){if(gn(t.app))return Promise.reject(ti(t));const s=qa(t),i=o_(s,e),o=await new pT(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const AT=600*1e3;class IT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!l_(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";n.onError(An(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=AT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Of(e))}saveEventToCache(e){this.cachedEventUids.add(Of(e)),this.lastProcessedEventTime=Date.now()}}function Of(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function l_({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function wT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return l_(t);default:return!1}}/**
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
 */async function ET(t,e={}){return Ji(t,"GET","/v1/projects",e)}/**
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
 */const TT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,CT=/^https?/;async function bT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ET(t);for(const n of e)try{if(ST(n))return}catch{}$n(t,"unauthorized-domain")}function ST(t){const e=mc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!CT.test(n))return!1;if(TT.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const RT=new ao(3e4,6e4);function Vf(){const t=Nn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function PT(t){return new Promise((e,n)=>{function s(){Vf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vf(),n(An(t,"network-request-failed"))},timeout:RT.get()})}if(Nn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Nn().gapi?.load)s();else{const i=ME("iframefcb");return Nn()[i]=()=>{gapi.load?s():n(An(t,"network-request-failed"))},xE(`${NE()}?onload=${i}`).catch(r=>n(r))}}).catch(e=>{throw Go=null,e})}let Go=null;function kT(t){return Go=Go||PT(t),Go}/**
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
 */const DT=new ao(5e3,15e3),xT="__/auth/iframe",NT="emulator/auth/iframe",MT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},OT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function VT(t){const e=t.config;ve(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ou(e,NT):`https://${t.config.authDomain}/${xT}`,s={apiKey:e.apiKey,appName:t.name,v:Yi},i=OT.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${oo(s).slice(1)}`}async function LT(t){const e=await kT(t),n=Nn().gapi;return ve(n,t,"internal-error"),e.open({where:document.body,url:VT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:MT,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=An(t,"network-request-failed"),l=Nn().setTimeout(()=>{r(o)},DT.get());function c(){Nn().clearTimeout(l),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const BT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},FT=500,UT=600,$T="_blank",HT="http://localhost";class Lf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jT(t,e,n,s=FT,i=UT){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const c={...BT,width:s.toString(),height:i.toString(),top:r,left:o},u=Ut().toLowerCase();n&&(l=Hm(u)?$T:n),Um(u)&&(e=e||HT,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[_,I])=>`${m}${_}=${I},`,"");if(TE(u)&&l!=="_self")return GT(e||"",l),new Lf(null);const p=window.open(e||"",l,f);ve(p,t,"popup-blocked");try{p.focus()}catch{}return new Lf(p)}function GT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const qT="__/auth/handler",QT="emulator/auth/handler",zT=encodeURIComponent("fac");async function Bf(t,e,n,s,i,r){ve(t.config.authDomain,t,"auth-domain-config-required"),ve(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Yi,eventId:i};if(e instanceof hu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Hw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof lo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${zT}=${encodeURIComponent(c)}`:"";return`${WT(t)}?${oo(l).slice(1)}${u}`}function WT({config:t}){return t.emulator?ou(t,QT):`https://${t.authDomain}/${qT}`}/**
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
 */const $l="webStorageSupport";class KT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=t_,this._completeRedirectFn=yT,this._overrideRedirectResult=mT}async _openPopup(e,n,s,i){is(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const r=await Bf(e,n,s,mc(),i);return jT(e,r,du())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Bf(e,n,s,mc(),i);return XE(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(is(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await LT(e),s=new IT(e);return n.register("authEvent",i=>(ve(i?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($l,{type:$l},i=>{const r=i?.[0]?.[$l];r!==void 0&&n(!!r),$n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return zm()||$m()||cu()}}const YT=KT;var Ff="@firebase/auth",Uf="1.11.1";/**
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
 */class JT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function XT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ZT(t){Un(new wn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=s.options;ve(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wm(t)},u=new kE(s,i,r,c);return VE(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Un(new wn("auth-internal",e=>{const n=qa(e.getProvider("auth").getImmediate());return(s=>new JT(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hn(Ff,Uf,XT(t)),hn(Ff,Uf,"esm2020")}/**
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
 */const eC=300,tC=Im("authIdTokenMaxAge")||eC;let $f=null;const nC=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>tC)return;const i=n?.token;$f!==i&&($f=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function sC(t=su()){const e=hi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=OE(t,{popupRedirectResolver:YT,persistence:[aT,KE,t_]}),s=Im("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=nC(r.toString());qE(n,o,()=>o(n.currentUser)),GE(n,l=>o(l))}}const i=ym("auth");return i&&LE(n,`http://${i}`),n}function iC(){return document.getElementsByTagName("head")?.[0]??document}DE({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=An("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",iC().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ZT("Browser");var Hf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rs,c_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,T){function b(){}b.prototype=T.prototype,R.F=T.prototype,R.prototype=new b,R.prototype.constructor=R,R.D=function(D,k,O){for(var E=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)E[Oe-2]=arguments[Oe];return T.prototype[k].apply(D,E)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,n),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(R,T,b){b||(b=0);const D=Array(16);if(typeof T=="string")for(var k=0;k<16;++k)D[k]=T.charCodeAt(b++)|T.charCodeAt(b++)<<8|T.charCodeAt(b++)<<16|T.charCodeAt(b++)<<24;else for(k=0;k<16;++k)D[k]=T[b++]|T[b++]<<8|T[b++]<<16|T[b++]<<24;T=R.g[0],b=R.g[1],k=R.g[2];let O=R.g[3],E;E=T+(O^b&(k^O))+D[0]+3614090360&4294967295,T=b+(E<<7&4294967295|E>>>25),E=O+(k^T&(b^k))+D[1]+3905402710&4294967295,O=T+(E<<12&4294967295|E>>>20),E=k+(b^O&(T^b))+D[2]+606105819&4294967295,k=O+(E<<17&4294967295|E>>>15),E=b+(T^k&(O^T))+D[3]+3250441966&4294967295,b=k+(E<<22&4294967295|E>>>10),E=T+(O^b&(k^O))+D[4]+4118548399&4294967295,T=b+(E<<7&4294967295|E>>>25),E=O+(k^T&(b^k))+D[5]+1200080426&4294967295,O=T+(E<<12&4294967295|E>>>20),E=k+(b^O&(T^b))+D[6]+2821735955&4294967295,k=O+(E<<17&4294967295|E>>>15),E=b+(T^k&(O^T))+D[7]+4249261313&4294967295,b=k+(E<<22&4294967295|E>>>10),E=T+(O^b&(k^O))+D[8]+1770035416&4294967295,T=b+(E<<7&4294967295|E>>>25),E=O+(k^T&(b^k))+D[9]+2336552879&4294967295,O=T+(E<<12&4294967295|E>>>20),E=k+(b^O&(T^b))+D[10]+4294925233&4294967295,k=O+(E<<17&4294967295|E>>>15),E=b+(T^k&(O^T))+D[11]+2304563134&4294967295,b=k+(E<<22&4294967295|E>>>10),E=T+(O^b&(k^O))+D[12]+1804603682&4294967295,T=b+(E<<7&4294967295|E>>>25),E=O+(k^T&(b^k))+D[13]+4254626195&4294967295,O=T+(E<<12&4294967295|E>>>20),E=k+(b^O&(T^b))+D[14]+2792965006&4294967295,k=O+(E<<17&4294967295|E>>>15),E=b+(T^k&(O^T))+D[15]+1236535329&4294967295,b=k+(E<<22&4294967295|E>>>10),E=T+(k^O&(b^k))+D[1]+4129170786&4294967295,T=b+(E<<5&4294967295|E>>>27),E=O+(b^k&(T^b))+D[6]+3225465664&4294967295,O=T+(E<<9&4294967295|E>>>23),E=k+(T^b&(O^T))+D[11]+643717713&4294967295,k=O+(E<<14&4294967295|E>>>18),E=b+(O^T&(k^O))+D[0]+3921069994&4294967295,b=k+(E<<20&4294967295|E>>>12),E=T+(k^O&(b^k))+D[5]+3593408605&4294967295,T=b+(E<<5&4294967295|E>>>27),E=O+(b^k&(T^b))+D[10]+38016083&4294967295,O=T+(E<<9&4294967295|E>>>23),E=k+(T^b&(O^T))+D[15]+3634488961&4294967295,k=O+(E<<14&4294967295|E>>>18),E=b+(O^T&(k^O))+D[4]+3889429448&4294967295,b=k+(E<<20&4294967295|E>>>12),E=T+(k^O&(b^k))+D[9]+568446438&4294967295,T=b+(E<<5&4294967295|E>>>27),E=O+(b^k&(T^b))+D[14]+3275163606&4294967295,O=T+(E<<9&4294967295|E>>>23),E=k+(T^b&(O^T))+D[3]+4107603335&4294967295,k=O+(E<<14&4294967295|E>>>18),E=b+(O^T&(k^O))+D[8]+1163531501&4294967295,b=k+(E<<20&4294967295|E>>>12),E=T+(k^O&(b^k))+D[13]+2850285829&4294967295,T=b+(E<<5&4294967295|E>>>27),E=O+(b^k&(T^b))+D[2]+4243563512&4294967295,O=T+(E<<9&4294967295|E>>>23),E=k+(T^b&(O^T))+D[7]+1735328473&4294967295,k=O+(E<<14&4294967295|E>>>18),E=b+(O^T&(k^O))+D[12]+2368359562&4294967295,b=k+(E<<20&4294967295|E>>>12),E=T+(b^k^O)+D[5]+4294588738&4294967295,T=b+(E<<4&4294967295|E>>>28),E=O+(T^b^k)+D[8]+2272392833&4294967295,O=T+(E<<11&4294967295|E>>>21),E=k+(O^T^b)+D[11]+1839030562&4294967295,k=O+(E<<16&4294967295|E>>>16),E=b+(k^O^T)+D[14]+4259657740&4294967295,b=k+(E<<23&4294967295|E>>>9),E=T+(b^k^O)+D[1]+2763975236&4294967295,T=b+(E<<4&4294967295|E>>>28),E=O+(T^b^k)+D[4]+1272893353&4294967295,O=T+(E<<11&4294967295|E>>>21),E=k+(O^T^b)+D[7]+4139469664&4294967295,k=O+(E<<16&4294967295|E>>>16),E=b+(k^O^T)+D[10]+3200236656&4294967295,b=k+(E<<23&4294967295|E>>>9),E=T+(b^k^O)+D[13]+681279174&4294967295,T=b+(E<<4&4294967295|E>>>28),E=O+(T^b^k)+D[0]+3936430074&4294967295,O=T+(E<<11&4294967295|E>>>21),E=k+(O^T^b)+D[3]+3572445317&4294967295,k=O+(E<<16&4294967295|E>>>16),E=b+(k^O^T)+D[6]+76029189&4294967295,b=k+(E<<23&4294967295|E>>>9),E=T+(b^k^O)+D[9]+3654602809&4294967295,T=b+(E<<4&4294967295|E>>>28),E=O+(T^b^k)+D[12]+3873151461&4294967295,O=T+(E<<11&4294967295|E>>>21),E=k+(O^T^b)+D[15]+530742520&4294967295,k=O+(E<<16&4294967295|E>>>16),E=b+(k^O^T)+D[2]+3299628645&4294967295,b=k+(E<<23&4294967295|E>>>9),E=T+(k^(b|~O))+D[0]+4096336452&4294967295,T=b+(E<<6&4294967295|E>>>26),E=O+(b^(T|~k))+D[7]+1126891415&4294967295,O=T+(E<<10&4294967295|E>>>22),E=k+(T^(O|~b))+D[14]+2878612391&4294967295,k=O+(E<<15&4294967295|E>>>17),E=b+(O^(k|~T))+D[5]+4237533241&4294967295,b=k+(E<<21&4294967295|E>>>11),E=T+(k^(b|~O))+D[12]+1700485571&4294967295,T=b+(E<<6&4294967295|E>>>26),E=O+(b^(T|~k))+D[3]+2399980690&4294967295,O=T+(E<<10&4294967295|E>>>22),E=k+(T^(O|~b))+D[10]+4293915773&4294967295,k=O+(E<<15&4294967295|E>>>17),E=b+(O^(k|~T))+D[1]+2240044497&4294967295,b=k+(E<<21&4294967295|E>>>11),E=T+(k^(b|~O))+D[8]+1873313359&4294967295,T=b+(E<<6&4294967295|E>>>26),E=O+(b^(T|~k))+D[15]+4264355552&4294967295,O=T+(E<<10&4294967295|E>>>22),E=k+(T^(O|~b))+D[6]+2734768916&4294967295,k=O+(E<<15&4294967295|E>>>17),E=b+(O^(k|~T))+D[13]+1309151649&4294967295,b=k+(E<<21&4294967295|E>>>11),E=T+(k^(b|~O))+D[4]+4149444226&4294967295,T=b+(E<<6&4294967295|E>>>26),E=O+(b^(T|~k))+D[11]+3174756917&4294967295,O=T+(E<<10&4294967295|E>>>22),E=k+(T^(O|~b))+D[2]+718787259&4294967295,k=O+(E<<15&4294967295|E>>>17),E=b+(O^(k|~T))+D[9]+3951481745&4294967295,R.g[0]=R.g[0]+T&4294967295,R.g[1]=R.g[1]+(k+(E<<21&4294967295|E>>>11))&4294967295,R.g[2]=R.g[2]+k&4294967295,R.g[3]=R.g[3]+O&4294967295}s.prototype.v=function(R,T){T===void 0&&(T=R.length);const b=T-this.blockSize,D=this.C;let k=this.h,O=0;for(;O<T;){if(k==0)for(;O<=b;)i(this,R,O),O+=this.blockSize;if(typeof R=="string"){for(;O<T;)if(D[k++]=R.charCodeAt(O++),k==this.blockSize){i(this,D),k=0;break}}else for(;O<T;)if(D[k++]=R[O++],k==this.blockSize){i(this,D),k=0;break}}this.h=k,this.o+=T},s.prototype.A=function(){var R=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);R[0]=128;for(var T=1;T<R.length-8;++T)R[T]=0;T=this.o*8;for(var b=R.length-8;b<R.length;++b)R[b]=T&255,T/=256;for(this.v(R),R=Array(16),T=0,b=0;b<4;++b)for(let D=0;D<32;D+=8)R[T++]=this.g[b]>>>D&255;return R};function r(R,T){var b=l;return Object.prototype.hasOwnProperty.call(b,R)?b[R]:b[R]=T(R)}function o(R,T){this.h=T;const b=[];let D=!0;for(let k=R.length-1;k>=0;k--){const O=R[k]|0;D&&O==T||(b[k]=O,D=!1)}this.g=b}var l={};function c(R){return-128<=R&&R<128?r(R,function(T){return new o([T|0],T<0?-1:0)}):new o([R|0],R<0?-1:0)}function u(R){if(isNaN(R)||!isFinite(R))return p;if(R<0)return S(u(-R));const T=[];let b=1;for(let D=0;R>=b;D++)T[D]=R/b|0,b*=4294967296;return new o(T,0)}function f(R,T){if(R.length==0)throw Error("number format error: empty string");if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(R.charAt(0)=="-")return S(f(R.substring(1),T));if(R.indexOf("-")>=0)throw Error('number format error: interior "-" character');const b=u(Math.pow(T,8));let D=p;for(let O=0;O<R.length;O+=8){var k=Math.min(8,R.length-O);const E=parseInt(R.substring(O,O+k),T);k<8?(k=u(Math.pow(T,k)),D=D.j(k).add(u(E))):(D=D.j(b),D=D.add(u(E)))}return D}var p=c(0),m=c(1),_=c(16777216);t=o.prototype,t.m=function(){if(w(this))return-S(this).m();let R=0,T=1;for(let b=0;b<this.g.length;b++){const D=this.i(b);R+=(D>=0?D:4294967296+D)*T,T*=4294967296}return R},t.toString=function(R){if(R=R||10,R<2||36<R)throw Error("radix out of range: "+R);if(I(this))return"0";if(w(this))return"-"+S(this).toString(R);const T=u(Math.pow(R,6));var b=this;let D="";for(;;){const k=G(b,T).g;b=M(b,k.j(T));let O=((b.g.length>0?b.g[0]:b.h)>>>0).toString(R);if(b=k,I(b))return O+D;for(;O.length<6;)O="0"+O;D=O+D}},t.i=function(R){return R<0?0:R<this.g.length?this.g[R]:this.h};function I(R){if(R.h!=0)return!1;for(let T=0;T<R.g.length;T++)if(R.g[T]!=0)return!1;return!0}function w(R){return R.h==-1}t.l=function(R){return R=M(this,R),w(R)?-1:I(R)?0:1};function S(R){const T=R.g.length,b=[];for(let D=0;D<T;D++)b[D]=~R.g[D];return new o(b,~R.h).add(m)}t.abs=function(){return w(this)?S(this):this},t.add=function(R){const T=Math.max(this.g.length,R.g.length),b=[];let D=0;for(let k=0;k<=T;k++){let O=D+(this.i(k)&65535)+(R.i(k)&65535),E=(O>>>16)+(this.i(k)>>>16)+(R.i(k)>>>16);D=E>>>16,O&=65535,E&=65535,b[k]=E<<16|O}return new o(b,b[b.length-1]&-2147483648?-1:0)};function M(R,T){return R.add(S(T))}t.j=function(R){if(I(this)||I(R))return p;if(w(this))return w(R)?S(this).j(S(R)):S(S(this).j(R));if(w(R))return S(this.j(S(R)));if(this.l(_)<0&&R.l(_)<0)return u(this.m()*R.m());const T=this.g.length+R.g.length,b=[];for(var D=0;D<2*T;D++)b[D]=0;for(D=0;D<this.g.length;D++)for(let k=0;k<R.g.length;k++){const O=this.i(D)>>>16,E=this.i(D)&65535,Oe=R.i(k)>>>16,Ct=R.i(k)&65535;b[2*D+2*k]+=E*Ct,U(b,2*D+2*k),b[2*D+2*k+1]+=O*Ct,U(b,2*D+2*k+1),b[2*D+2*k+1]+=E*Oe,U(b,2*D+2*k+1),b[2*D+2*k+2]+=O*Oe,U(b,2*D+2*k+2)}for(R=0;R<T;R++)b[R]=b[2*R+1]<<16|b[2*R];for(R=T;R<2*T;R++)b[R]=0;return new o(b,0)};function U(R,T){for(;(R[T]&65535)!=R[T];)R[T+1]+=R[T]>>>16,R[T]&=65535,T++}function $(R,T){this.g=R,this.h=T}function G(R,T){if(I(T))throw Error("division by zero");if(I(R))return new $(p,p);if(w(R))return T=G(S(R),T),new $(S(T.g),S(T.h));if(w(T))return T=G(R,S(T)),new $(S(T.g),T.h);if(R.g.length>30){if(w(R)||w(T))throw Error("slowDivide_ only works with positive integers.");for(var b=m,D=T;D.l(R)<=0;)b=ie(b),D=ie(D);var k=we(b,1),O=we(D,1);for(D=we(D,2),b=we(b,2);!I(D);){var E=O.add(D);E.l(R)<=0&&(k=k.add(b),O=E),D=we(D,1),b=we(b,1)}return T=M(R,k.j(T)),new $(k,T)}for(k=p;R.l(T)>=0;){for(b=Math.max(1,Math.floor(R.m()/T.m())),D=Math.ceil(Math.log(b)/Math.LN2),D=D<=48?1:Math.pow(2,D-48),O=u(b),E=O.j(T);w(E)||E.l(R)>0;)b-=D,O=u(b),E=O.j(T);I(O)&&(O=m),k=k.add(O),R=M(R,E)}return new $(k,R)}t.B=function(R){return G(this,R).h},t.and=function(R){const T=Math.max(this.g.length,R.g.length),b=[];for(let D=0;D<T;D++)b[D]=this.i(D)&R.i(D);return new o(b,this.h&R.h)},t.or=function(R){const T=Math.max(this.g.length,R.g.length),b=[];for(let D=0;D<T;D++)b[D]=this.i(D)|R.i(D);return new o(b,this.h|R.h)},t.xor=function(R){const T=Math.max(this.g.length,R.g.length),b=[];for(let D=0;D<T;D++)b[D]=this.i(D)^R.i(D);return new o(b,this.h^R.h)};function ie(R){const T=R.g.length+1,b=[];for(let D=0;D<T;D++)b[D]=R.i(D)<<1|R.i(D-1)>>>31;return new o(b,R.h)}function we(R,T){const b=T>>5;T%=32;const D=R.g.length-b,k=[];for(let O=0;O<D;O++)k[O]=T>0?R.i(O+b)>>>T|R.i(O+b+1)<<32-T:R.i(O+b);return new o(k,R.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,c_=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Rs=o}).apply(typeof Hf<"u"?Hf:typeof self<"u"?self:typeof window<"u"?window:{});var Do=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var u_,yr,h_,qo,yc,d_,f_,p_;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Do=="object"&&Do];for(var d=0;d<a.length;++d){var g=a[d];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=n(this);function i(a,d){if(d)e:{var g=s;a=a.split(".");for(var v=0;v<a.length-1;v++){var B=a[v];if(!(B in g))break e;g=g[B]}a=a[a.length-1],v=g[a],d=d(v),d!=v&&d!=null&&e(g,a,{configurable:!0,writable:!0,value:d})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(d){var g=[],v;for(v in d)Object.prototype.hasOwnProperty.call(d,v)&&g.push([v,d[v]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var r=r||{},o=this||self;function l(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function c(a,d,g){return a.call.apply(a.bind,arguments)}function u(a,d,g){return u=c,u.apply(null,arguments)}function f(a,d){var g=Array.prototype.slice.call(arguments,1);return function(){var v=g.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function p(a,d){function g(){}g.prototype=d.prototype,a.Z=d.prototype,a.prototype=new g,a.prototype.constructor=a,a.Ob=function(v,B,j){for(var te=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)te[Se-2]=arguments[Se];return d.prototype[B].apply(v,te)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function _(a){const d=a.length;if(d>0){const g=Array(d);for(let v=0;v<d;v++)g[v]=a[v];return g}return[]}function I(a,d){for(let v=1;v<arguments.length;v++){const B=arguments[v];var g=typeof B;if(g=g!="object"?g:B?Array.isArray(B)?"array":g:"null",g=="array"||g=="object"&&typeof B.length=="number"){g=a.length||0;const j=B.length||0;a.length=g+j;for(let te=0;te<j;te++)a[g+te]=B[te]}else a.push(B)}}class w{constructor(d,g){this.i=d,this.j=g,this.h=0,this.g=null}get(){let d;return this.h>0?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function S(a){o.setTimeout(()=>{throw a},0)}function M(){var a=R;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class U{constructor(){this.h=this.g=null}add(d,g){const v=$.get();v.set(d,g),this.h?this.h.next=v:this.g=v,this.h=v}}var $=new w(()=>new G,a=>a.reset());class G{constructor(){this.next=this.g=this.h=null}set(d,g){this.h=d,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let ie,we=!1,R=new U,T=()=>{const a=Promise.resolve(void 0);ie=()=>{a.then(b)}};function b(){for(var a;a=M();){try{a.h.call(a.g)}catch(g){S(g)}var d=$;d.j(a),d.h<100&&(d.h++,a.next=d.g,d.g=a)}we=!1}function D(){this.u=this.u,this.C=this.C}D.prototype.u=!1,D.prototype.dispose=function(){this.u||(this.u=!0,this.N())},D.prototype[Symbol.dispose]=function(){this.dispose()},D.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function k(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var O=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const g=()=>{};o.addEventListener("test",g,d),o.removeEventListener("test",g,d)}catch{}return a})();function E(a){return/^[\s\xa0]*$/.test(a)}function Oe(a,d){k.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,d)}p(Oe,k),Oe.prototype.init=function(a,d){const g=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget,d||(g=="mouseover"?d=a.fromElement:g=="mouseout"&&(d=a.toElement)),this.relatedTarget=d,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Oe.Z.h.call(this)},Oe.prototype.h=function(){Oe.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ct="closure_listenable_"+(Math.random()*1e6|0),it=0;function Ve(a,d,g,v,B){this.listener=a,this.proxy=null,this.src=d,this.type=g,this.capture=!!v,this.ha=B,this.key=++it,this.da=this.fa=!1}function Te(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Dt(a,d,g){for(const v in a)d.call(g,a[v],v,a)}function We(a,d){for(const g in a)d.call(void 0,a[g],g,a)}function pt(a){const d={};for(const g in a)d[g]=a[g];return d}const Re="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function rn(a,d){let g,v;for(let B=1;B<arguments.length;B++){v=arguments[B];for(g in v)a[g]=v[g];for(let j=0;j<Re.length;j++)g=Re[j],Object.prototype.hasOwnProperty.call(v,g)&&(a[g]=v[g])}}function Jt(a){this.src=a,this.g={},this.h=0}Jt.prototype.add=function(a,d,g,v,B){const j=a.toString();a=this.g[j],a||(a=this.g[j]=[],this.h++);const te=gt(a,d,v,B);return te>-1?(d=a[te],g||(d.fa=!1)):(d=new Ve(d,this.src,j,!!v,B),d.fa=g,a.push(d)),d};function Xt(a,d){const g=d.type;if(g in a.g){var v=a.g[g],B=Array.prototype.indexOf.call(v,d,void 0),j;(j=B>=0)&&Array.prototype.splice.call(v,B,1),j&&(Te(d),a.g[g].length==0&&(delete a.g[g],a.h--))}}function gt(a,d,g,v){for(let B=0;B<a.length;++B){const j=a[B];if(!j.da&&j.listener==d&&j.capture==!!g&&j.ha==v)return B}return-1}var K="closure_lm_"+(Math.random()*1e6|0),oe={};function se(a,d,g,v,B){if(Array.isArray(d)){for(let j=0;j<d.length;j++)se(a,d[j],g,v,B);return null}return g=ne(g),a&&a[Ct]?a.J(d,g,l(v)?!!v.capture:!1,B):he(a,d,g,!1,v,B)}function he(a,d,g,v,B,j){if(!d)throw Error("Invalid event type");const te=l(B)?!!B.capture:!!B;let Se=W(a);if(Se||(a[K]=Se=new Jt(a)),g=Se.add(d,g,v,te,j),g.proxy)return g;if(v=fe(),g.proxy=v,v.src=a,v.listener=g,a.addEventListener)O||(B=te),B===void 0&&(B=!1),a.addEventListener(d.toString(),v,B);else if(a.attachEvent)a.attachEvent(N(d.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return g}function fe(){function a(g){return d.call(a.src,a.listener,g)}const d=z;return a}function y(a,d,g,v,B){if(Array.isArray(d))for(var j=0;j<d.length;j++)y(a,d[j],g,v,B);else v=l(v)?!!v.capture:!!v,g=ne(g),a&&a[Ct]?(a=a.i,j=String(d).toString(),j in a.g&&(d=a.g[j],g=gt(d,g,v,B),g>-1&&(Te(d[g]),Array.prototype.splice.call(d,g,1),d.length==0&&(delete a.g[j],a.h--)))):a&&(a=W(a))&&(d=a.g[d.toString()],a=-1,d&&(a=gt(d,g,v,B)),(g=a>-1?d[a]:null)&&C(g))}function C(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[Ct])Xt(d.i,a);else{var g=a.type,v=a.proxy;d.removeEventListener?d.removeEventListener(g,v,a.capture):d.detachEvent?d.detachEvent(N(g),v):d.addListener&&d.removeListener&&d.removeListener(v),(g=W(d))?(Xt(g,a),g.h==0&&(g.src=null,d[K]=null)):Te(a)}}}function N(a){return a in oe?oe[a]:oe[a]="on"+a}function z(a,d){if(a.da)a=!0;else{d=new Oe(d,this);const g=a.listener,v=a.ha||a.src;a.fa&&C(a),a=g.call(v,d)}return a}function W(a){return a=a[K],a instanceof Jt?a:null}var q="__closure_events_fn_"+(Math.random()*1e9>>>0);function ne(a){return typeof a=="function"?a:(a[q]||(a[q]=function(d){return a.handleEvent(d)}),a[q])}function Z(){D.call(this),this.i=new Jt(this),this.M=this,this.G=null}p(Z,D),Z.prototype[Ct]=!0,Z.prototype.removeEventListener=function(a,d,g,v){y(this,a,d,g,v)};function P(a,d){var g,v=a.G;if(v)for(g=[];v;v=v.G)g.push(v);if(a=a.M,v=d.type||d,typeof d=="string")d=new k(d,a);else if(d instanceof k)d.target=d.target||a;else{var B=d;d=new k(v,a),rn(d,B)}B=!0;let j,te;if(g)for(te=g.length-1;te>=0;te--)j=d.g=g[te],B=A(j,v,!0,d)&&B;if(j=d.g=a,B=A(j,v,!0,d)&&B,B=A(j,v,!1,d)&&B,g)for(te=0;te<g.length;te++)j=d.g=g[te],B=A(j,v,!1,d)&&B}Z.prototype.N=function(){if(Z.Z.N.call(this),this.i){var a=this.i;for(const d in a.g){const g=a.g[d];for(let v=0;v<g.length;v++)Te(g[v]);delete a.g[d],a.h--}}this.G=null},Z.prototype.J=function(a,d,g,v){return this.i.add(String(a),d,!1,g,v)},Z.prototype.K=function(a,d,g,v){return this.i.add(String(a),d,!0,g,v)};function A(a,d,g,v){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();let B=!0;for(let j=0;j<d.length;++j){const te=d[j];if(te&&!te.da&&te.capture==g){const Se=te.listener,_t=te.ha||te.src;te.fa&&Xt(a.i,te),B=Se.call(_t,v)!==!1&&B}}return B&&!v.defaultPrevented}function x(a,d){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(d)>2147483647?-1:o.setTimeout(a,d||0)}function Q(a){a.g=x(()=>{a.g=null,a.i&&(a.i=!1,Q(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class J extends D{constructor(d,g){super(),this.m=d,this.l=g,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Q(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ee(a){D.call(this),this.h=a,this.g={}}p(ee,D);var re=[];function le(a){Dt(a.g,function(d,g){this.g.hasOwnProperty(g)&&C(d)},a),a.g={}}ee.prototype.N=function(){ee.Z.N.call(this),le(this)},ee.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ce=o.JSON.stringify,ge=o.JSON.parse,Pe=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Ye(){}function Je(){}var Ge={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Xe(){k.call(this,"d")}p(Xe,k);function Le(){k.call(this,"c")}p(Le,k);var ke={},rt=null;function xt(){return rt=rt||new Z}ke.Ia="serverreachability";function fn(a){k.call(this,ke.Ia,a)}p(fn,k);function Tn(a){const d=xt();P(d,new fn(d))}ke.STAT_EVENT="statevent";function Us(a,d){k.call(this,ke.STAT_EVENT,a),this.stat=d}p(Us,k);function mt(a){const d=xt();P(d,new Us(d,a))}ke.Ja="timingevent";function nr(a,d){k.call(this,ke.Ja,a),this.size=d}p(nr,k);function ls(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},d)}function $s(){this.g=!0}$s.prototype.ua=function(){this.g=!1};function dy(a,d,g,v,B,j){a.info(function(){if(a.g)if(j){var te="",Se=j.split("&");for(let qe=0;qe<Se.length;qe++){var _t=Se[qe].split("=");if(_t.length>1){const wt=_t[0];_t=_t[1];const bn=wt.split("_");te=bn.length>=2&&bn[1]=="type"?te+(wt+"="+_t+"&"):te+(wt+"=redacted&")}}}else te=null;else te=j;return"XMLHTTP REQ ("+v+") [attempt "+B+"]: "+d+`
`+g+`
`+te})}function fy(a,d,g,v,B,j,te){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+B+"]: "+d+`
`+g+`
`+j+" "+te})}function mi(a,d,g,v){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+gy(a,g)+(v?" "+v:"")})}function py(a,d){a.info(function(){return"TIMEOUT: "+d})}$s.prototype.info=function(){};function gy(a,d){if(!a.g)return d;if(!d)return null;try{const j=JSON.parse(d);if(j){for(a=0;a<j.length;a++)if(Array.isArray(j[a])){var g=j[a];if(!(g.length<2)){var v=g[1];if(Array.isArray(v)&&!(v.length<1)){var B=v[0];if(B!="noop"&&B!="stop"&&B!="close")for(let te=1;te<v.length;te++)v[te]=""}}}}return ce(j)}catch{return d}}var mo={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Mh={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Oh;function ll(){}p(ll,Ye),ll.prototype.g=function(){return new XMLHttpRequest},Oh=new ll;function sr(a){return encodeURIComponent(String(a))}function my(a){var d=1;a=a.split(":");const g=[];for(;d>0&&a.length;)g.push(a.shift()),d--;return a.length&&g.push(a.join(":")),g}function cs(a,d,g,v){this.j=a,this.i=d,this.l=g,this.S=v||1,this.V=new ee(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Vh}function Vh(){this.i=null,this.g="",this.h=!1}var Lh={},cl={};function ul(a,d,g){a.M=1,a.A=vo(Cn(d)),a.u=g,a.R=!0,Bh(a,null)}function Bh(a,d){a.F=Date.now(),_o(a),a.B=Cn(a.A);var g=a.B,v=a.S;Array.isArray(v)||(v=[String(v)]),Jh(g.i,"t",v),a.C=0,g=a.j.L,a.h=new Vh,a.g=gd(a.j,g?d:null,!a.u),a.P>0&&(a.O=new J(u(a.Y,a,a.g),a.P)),d=a.V,g=a.g,v=a.ba;var B="readystatechange";Array.isArray(B)||(B&&(re[0]=B.toString()),B=re);for(let j=0;j<B.length;j++){const te=se(g,B[j],v||d.handleEvent,!1,d.h||d);if(!te)break;d.g[te.key]=te}d=a.J?pt(a.J):{},a.u?(a.v||(a.v="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,d)):(a.v="GET",a.g.ea(a.B,a.v,null,d)),Tn(),dy(a.i,a.v,a.B,a.l,a.S,a.u)}cs.prototype.ba=function(a){a=a.target;const d=this.O;d&&ds(a)==3?d.j():this.Y(a)},cs.prototype.Y=function(a){try{if(a==this.g)e:{const Se=ds(this.g),_t=this.g.ya(),qe=this.g.ca();if(!(Se<3)&&(Se!=3||this.g&&(this.h.h||this.g.la()||id(this.g)))){this.K||Se!=4||_t==7||(_t==8||qe<=0?Tn(3):Tn(2)),hl(this);var d=this.g.ca();this.X=d;var g=_y(this);if(this.o=d==200,fy(this.i,this.v,this.B,this.l,this.S,Se,d),this.o){if(this.U&&!this.L){t:{if(this.g){var v,B=this.g;if((v=B.g?B.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(v)){var j=v;break t}}j=null}if(a=j)mi(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,dl(this,a);else{this.o=!1,this.m=3,mt(12),Hs(this),ir(this);break e}}if(this.R){a=!0;let wt;for(;!this.K&&this.C<g.length;)if(wt=vy(this,g),wt==cl){Se==4&&(this.m=4,mt(14),a=!1),mi(this.i,this.l,null,"[Incomplete Response]");break}else if(wt==Lh){this.m=4,mt(15),mi(this.i,this.l,g,"[Invalid Chunk]"),a=!1;break}else mi(this.i,this.l,wt,null),dl(this,wt);if(Fh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Se!=4||g.length!=0||this.h.h||(this.m=1,mt(16),a=!1),this.o=this.o&&a,!a)mi(this.i,this.l,g,"[Invalid Chunked Response]"),Hs(this),ir(this);else if(g.length>0&&!this.W){this.W=!0;var te=this.j;te.g==this&&te.aa&&!te.P&&(te.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),Al(te),te.P=!0,mt(11))}}else mi(this.i,this.l,g,null),dl(this,g);Se==4&&Hs(this),this.o&&!this.K&&(Se==4?hd(this.j,this):(this.o=!1,_o(this)))}else xy(this.g),d==400&&g.indexOf("Unknown SID")>0?(this.m=3,mt(12)):(this.m=0,mt(13)),Hs(this),ir(this)}}}catch{}finally{}};function _y(a){if(!Fh(a))return a.g.la();const d=id(a.g);if(d==="")return"";let g="";const v=d.length,B=ds(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Hs(a),ir(a),"";a.h.i=new o.TextDecoder}for(let j=0;j<v;j++)a.h.h=!0,g+=a.h.i.decode(d[j],{stream:!(B&&j==v-1)});return d.length=0,a.h.g+=g,a.C=0,a.h.g}function Fh(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function vy(a,d){var g=a.C,v=d.indexOf(`
`,g);return v==-1?cl:(g=Number(d.substring(g,v)),isNaN(g)?Lh:(v+=1,v+g>d.length?cl:(d=d.slice(v,v+g),a.C=v+g,d)))}cs.prototype.cancel=function(){this.K=!0,Hs(this)};function _o(a){a.T=Date.now()+a.H,Uh(a,a.H)}function Uh(a,d){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ls(u(a.aa,a),d)}function hl(a){a.D&&(o.clearTimeout(a.D),a.D=null)}cs.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(py(this.i,this.B),this.M!=2&&(Tn(),mt(17)),Hs(this),this.m=2,ir(this)):Uh(this,this.T-a)};function ir(a){a.j.I==0||a.K||hd(a.j,a)}function Hs(a){hl(a);var d=a.O;d&&typeof d.dispose=="function"&&d.dispose(),a.O=null,le(a.V),a.g&&(d=a.g,a.g=null,d.abort(),d.dispose())}function dl(a,d){try{var g=a.j;if(g.I!=0&&(g.g==a||fl(g.h,a))){if(!a.L&&fl(g.h,a)&&g.I==3){try{var v=g.Ba.g.parse(d)}catch{v=null}if(Array.isArray(v)&&v.length==3){var B=v;if(B[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<a.F)Eo(g),Io(g);else break e;yl(g),mt(18)}}else g.xa=B[1],0<g.xa-g.K&&B[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=ls(u(g.Va,g),6e3));jh(g.h)<=1&&g.ta&&(g.ta=void 0)}else Gs(g,11)}else if((a.L||g.g==a)&&Eo(g),!E(d))for(B=g.Ba.g.parse(d),d=0;d<B.length;d++){let qe=B[d];const wt=qe[0];if(!(wt<=g.K))if(g.K=wt,qe=qe[1],g.I==2)if(qe[0]=="c"){g.M=qe[1],g.ba=qe[2];const bn=qe[3];bn!=null&&(g.ka=bn,g.j.info("VER="+g.ka));const qs=qe[4];qs!=null&&(g.za=qs,g.j.info("SVER="+g.za));const fs=qe[5];fs!=null&&typeof fs=="number"&&fs>0&&(v=1.5*fs,g.O=v,g.j.info("backChannelRequestTimeoutMs_="+v)),v=g;const ps=a.g;if(ps){const Co=ps.g?ps.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Co){var j=v.h;j.g||Co.indexOf("spdy")==-1&&Co.indexOf("quic")==-1&&Co.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(pl(j,j.h),j.h=null))}if(v.G){const Il=ps.g?ps.g.getResponseHeader("X-HTTP-Session-Id"):null;Il&&(v.wa=Il,Ze(v.J,v.G,Il))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-a.F,g.j.info("Handshake RTT: "+g.T+"ms")),v=g;var te=a;if(v.na=pd(v,v.L?v.ba:null,v.W),te.L){Gh(v.h,te);var Se=te,_t=v.O;_t&&(Se.H=_t),Se.D&&(hl(Se),_o(Se)),v.g=te}else cd(v);g.i.length>0&&wo(g)}else qe[0]!="stop"&&qe[0]!="close"||Gs(g,7);else g.I==3&&(qe[0]=="stop"||qe[0]=="close"?qe[0]=="stop"?Gs(g,7):vl(g):qe[0]!="noop"&&g.l&&g.l.qa(qe),g.A=0)}}Tn(4)}catch{}}var yy=class{constructor(a,d){this.g=a,this.map=d}};function $h(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Hh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function jh(a){return a.h?1:a.g?a.g.size:0}function fl(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function pl(a,d){a.g?a.g.add(d):a.h=d}function Gh(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}$h.prototype.cancel=function(){if(this.i=qh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function qh(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const g of a.g.values())d=d.concat(g.G);return d}return _(a.i)}var Qh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ay(a,d){if(a){a=a.split("&");for(let g=0;g<a.length;g++){const v=a[g].indexOf("=");let B,j=null;v>=0?(B=a[g].substring(0,v),j=a[g].substring(v+1)):B=a[g],d(B,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function us(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let d;a instanceof us?(this.l=a.l,rr(this,a.j),this.o=a.o,this.g=a.g,or(this,a.u),this.h=a.h,gl(this,Xh(a.i)),this.m=a.m):a&&(d=String(a).match(Qh))?(this.l=!1,rr(this,d[1]||"",!0),this.o=ar(d[2]||""),this.g=ar(d[3]||"",!0),or(this,d[4]),this.h=ar(d[5]||"",!0),gl(this,d[6]||"",!0),this.m=ar(d[7]||"")):(this.l=!1,this.i=new cr(null,this.l))}us.prototype.toString=function(){const a=[];var d=this.j;d&&a.push(lr(d,zh,!0),":");var g=this.g;return(g||d=="file")&&(a.push("//"),(d=this.o)&&a.push(lr(d,zh,!0),"@"),a.push(sr(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&a.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&a.push("/"),a.push(lr(g,g.charAt(0)=="/"?Ey:wy,!0))),(g=this.i.toString())&&a.push("?",g),(g=this.m)&&a.push("#",lr(g,Cy)),a.join("")},us.prototype.resolve=function(a){const d=Cn(this);let g=!!a.j;g?rr(d,a.j):g=!!a.o,g?d.o=a.o:g=!!a.g,g?d.g=a.g:g=a.u!=null;var v=a.h;if(g)or(d,a.u);else if(g=!!a.h){if(v.charAt(0)!="/")if(this.g&&!this.h)v="/"+v;else{var B=d.h.lastIndexOf("/");B!=-1&&(v=d.h.slice(0,B+1)+v)}if(B=v,B==".."||B==".")v="";else if(B.indexOf("./")!=-1||B.indexOf("/.")!=-1){v=B.lastIndexOf("/",0)==0,B=B.split("/");const j=[];for(let te=0;te<B.length;){const Se=B[te++];Se=="."?v&&te==B.length&&j.push(""):Se==".."?((j.length>1||j.length==1&&j[0]!="")&&j.pop(),v&&te==B.length&&j.push("")):(j.push(Se),v=!0)}v=j.join("/")}else v=B}return g?d.h=v:g=a.i.toString()!=="",g?gl(d,Xh(a.i)):g=!!a.m,g&&(d.m=a.m),d};function Cn(a){return new us(a)}function rr(a,d,g){a.j=g?ar(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function or(a,d){if(d){if(d=Number(d),isNaN(d)||d<0)throw Error("Bad port number "+d);a.u=d}else a.u=null}function gl(a,d,g){d instanceof cr?(a.i=d,by(a.i,a.l)):(g||(d=lr(d,Ty)),a.i=new cr(d,a.l))}function Ze(a,d,g){a.i.set(d,g)}function vo(a){return Ze(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function ar(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function lr(a,d,g){return typeof a=="string"?(a=encodeURI(a).replace(d,Iy),g&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Iy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var zh=/[#\/\?@]/g,wy=/[#\?:]/g,Ey=/[#\?]/g,Ty=/[#\?@]/g,Cy=/#/g;function cr(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function js(a){a.g||(a.g=new Map,a.h=0,a.i&&Ay(a.i,function(d,g){a.add(decodeURIComponent(d.replace(/\+/g," ")),g)}))}t=cr.prototype,t.add=function(a,d){js(this),this.i=null,a=_i(this,a);let g=this.g.get(a);return g||this.g.set(a,g=[]),g.push(d),this.h+=1,this};function Wh(a,d){js(a),d=_i(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function Kh(a,d){return js(a),d=_i(a,d),a.g.has(d)}t.forEach=function(a,d){js(this),this.g.forEach(function(g,v){g.forEach(function(B){a.call(d,B,v,this)},this)},this)};function Yh(a,d){js(a);let g=[];if(typeof d=="string")Kh(a,d)&&(g=g.concat(a.g.get(_i(a,d))));else for(a=Array.from(a.g.values()),d=0;d<a.length;d++)g=g.concat(a[d]);return g}t.set=function(a,d){return js(this),this.i=null,a=_i(this,a),Kh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=Yh(this,a),a.length>0?String(a[0]):d):d};function Jh(a,d,g){Wh(a,d),g.length>0&&(a.i=null,a.g.set(_i(a,d),_(g)),a.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(let v=0;v<d.length;v++){var g=d[v];const B=sr(g);g=Yh(this,g);for(let j=0;j<g.length;j++){let te=B;g[j]!==""&&(te+="="+sr(g[j])),a.push(te)}}return this.i=a.join("&")};function Xh(a){const d=new cr;return d.i=a.i,a.g&&(d.g=new Map(a.g),d.h=a.h),d}function _i(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function by(a,d){d&&!a.j&&(js(a),a.i=null,a.g.forEach(function(g,v){const B=v.toLowerCase();v!=B&&(Wh(this,v),Jh(this,B,g))},a)),a.j=d}function Sy(a,d){const g=new $s;if(o.Image){const v=new Image;v.onload=f(hs,g,"TestLoadImage: loaded",!0,d,v),v.onerror=f(hs,g,"TestLoadImage: error",!1,d,v),v.onabort=f(hs,g,"TestLoadImage: abort",!1,d,v),v.ontimeout=f(hs,g,"TestLoadImage: timeout",!1,d,v),o.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else d(!1)}function Ry(a,d){const g=new $s,v=new AbortController,B=setTimeout(()=>{v.abort(),hs(g,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:v.signal}).then(j=>{clearTimeout(B),j.ok?hs(g,"TestPingServer: ok",!0,d):hs(g,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(B),hs(g,"TestPingServer: error",!1,d)})}function hs(a,d,g,v,B){try{B&&(B.onload=null,B.onerror=null,B.onabort=null,B.ontimeout=null),v(g)}catch{}}function Py(){this.g=new Pe}function ml(a){this.i=a.Sb||null,this.h=a.ab||!1}p(ml,Ye),ml.prototype.g=function(){return new yo(this.i,this.h)};function yo(a,d){Z.call(this),this.H=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(yo,Z),t=yo.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=d,this.readyState=1,hr(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const d={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(d.body=a),(this.H||o).fetch(new Request(this.D,d)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ur(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,hr(this)),this.g&&(this.readyState=3,hr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Zh(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Zh(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.B.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?ur(this):hr(this),this.readyState==3&&Zh(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,ur(this))},t.Na=function(a){this.g&&(this.response=a,ur(this))},t.ga=function(){this.g&&ur(this)};function ur(a){a.readyState=4,a.l=null,a.j=null,a.B=null,hr(a)}t.setRequestHeader=function(a,d){this.A.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var g=d.next();!g.done;)g=g.value,a.push(g[0]+": "+g[1]),g=d.next();return a.join(`\r
`)};function hr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(yo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ed(a){let d="";return Dt(a,function(g,v){d+=v,d+=":",d+=g,d+=`\r
`}),d}function _l(a,d,g){e:{for(v in g){var v=!1;break e}v=!0}v||(g=ed(g),typeof a=="string"?g!=null&&sr(g):Ze(a,d,g))}function ot(a){Z.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(ot,Z);var ky=/^https?$/i,Dy=["POST","PUT"];t=ot.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,d,g,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Oh.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(j){td(this,j);return}if(a=g||"",g=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var B in v)g.set(B,v[B]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const j of v.keys())g.set(j,v.get(j));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(g.keys()).find(j=>j.toLowerCase()=="content-type"),B=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Dy,d,void 0)>=0)||v||B||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,te]of g)this.g.setRequestHeader(j,te);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(j){td(this,j)}};function td(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.o=5,nd(a),Ao(a)}function nd(a){a.A||(a.A=!0,P(a,"complete"),P(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,P(this,"complete"),P(this,"abort"),Ao(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ao(this,!0)),ot.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?sd(this):this.Xa())},t.Xa=function(){sd(this)};function sd(a){if(a.h&&typeof r<"u"){if(a.v&&ds(a)==4)setTimeout(a.Ca.bind(a),0);else if(P(a,"readystatechange"),ds(a)==4){a.h=!1;try{const j=a.ca();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var g;if(!(g=d)){var v;if(v=j===0){let te=String(a.D).match(Qh)[1]||null;!te&&o.self&&o.self.location&&(te=o.self.location.protocol.slice(0,-1)),v=!ky.test(te?te.toLowerCase():"")}g=v}if(g)P(a,"complete"),P(a,"success");else{a.o=6;try{var B=ds(a)>2?a.g.statusText:""}catch{B=""}a.l=B+" ["+a.ca()+"]",nd(a)}}finally{Ao(a)}}}}function Ao(a,d){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const g=a.g;a.g=null,d||P(a,"ready");try{g.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function ds(a){return a.g?a.g.readyState:0}t.ca=function(){try{return ds(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),ge(d)}};function id(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function xy(a){const d={};a=(a.g&&ds(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(E(a[v]))continue;var g=my(a[v]);const B=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const j=d[B]||[];d[B]=j,j.push(g)}We(d,function(v){return v.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function dr(a,d,g){return g&&g.internalChannelParams&&g.internalChannelParams[a]||d}function rd(a){this.za=0,this.i=[],this.j=new $s,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=dr("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=dr("baseRetryDelayMs",5e3,a),this.Za=dr("retryDelaySeedMs",1e4,a),this.Ta=dr("forwardChannelMaxRetries",2,a),this.va=dr("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new $h(a&&a.concurrentRequestLimit),this.Ba=new Py,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=rd.prototype,t.ka=8,t.I=1,t.connect=function(a,d,g,v){mt(0),this.W=a,this.H=d||{},g&&v!==void 0&&(this.H.OSID=g,this.H.OAID=v),this.F=this.X,this.J=pd(this,null,this.W),wo(this)};function vl(a){if(od(a),a.I==3){var d=a.V++,g=Cn(a.J);if(Ze(g,"SID",a.M),Ze(g,"RID",d),Ze(g,"TYPE","terminate"),fr(a,g),d=new cs(a,a.j,d),d.M=2,d.A=vo(Cn(g)),g=!1,o.navigator&&o.navigator.sendBeacon)try{g=o.navigator.sendBeacon(d.A.toString(),"")}catch{}!g&&o.Image&&(new Image().src=d.A,g=!0),g||(d.g=gd(d.j,null),d.g.ea(d.A)),d.F=Date.now(),_o(d)}fd(a)}function Io(a){a.g&&(Al(a),a.g.cancel(),a.g=null)}function od(a){Io(a),a.v&&(o.clearTimeout(a.v),a.v=null),Eo(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function wo(a){if(!Hh(a.h)&&!a.m){a.m=!0;var d=a.Ea;ie||T(),we||(ie(),we=!0),R.add(d,a),a.D=0}}function Ny(a,d){return jh(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=d.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ls(u(a.Ea,a,d),dd(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const B=new cs(this,this.j,a);let j=this.o;if(this.U&&(j?(j=pt(j),rn(j,this.U)):j=this.U),this.u!==null||this.R||(B.J=j,j=null),this.S)e:{for(var d=0,g=0;g<this.i.length;g++){t:{var v=this.i[g];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(d+=v,d>4096){d=g;break e}if(d===4096||g===this.i.length-1){d=g+1;break e}}d=1e3}else d=1e3;d=ld(this,B,d),g=Cn(this.J),Ze(g,"RID",a),Ze(g,"CVER",22),this.G&&Ze(g,"X-HTTP-Session-Id",this.G),fr(this,g),j&&(this.R?d="headers="+sr(ed(j))+"&"+d:this.u&&_l(g,this.u,j)),pl(this.h,B),this.Ra&&Ze(g,"TYPE","init"),this.S?(Ze(g,"$req",d),Ze(g,"SID","null"),B.U=!0,ul(B,g,null)):ul(B,g,d),this.I=2}}else this.I==3&&(a?ad(this,a):this.i.length==0||Hh(this.h)||ad(this))};function ad(a,d){var g;d?g=d.l:g=a.V++;const v=Cn(a.J);Ze(v,"SID",a.M),Ze(v,"RID",g),Ze(v,"AID",a.K),fr(a,v),a.u&&a.o&&_l(v,a.u,a.o),g=new cs(a,a.j,g,a.D+1),a.u===null&&(g.J=a.o),d&&(a.i=d.G.concat(a.i)),d=ld(a,g,1e3),g.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),pl(a.h,g),ul(g,v,d)}function fr(a,d){a.H&&Dt(a.H,function(g,v){Ze(d,v,g)}),a.l&&Dt({},function(g,v){Ze(d,v,g)})}function ld(a,d,g){g=Math.min(a.i.length,g);const v=a.l?u(a.l.Ka,a.l,a):null;e:{var B=a.i;let Se=-1;for(;;){const _t=["count="+g];Se==-1?g>0?(Se=B[0].g,_t.push("ofs="+Se)):Se=0:_t.push("ofs="+Se);let qe=!0;for(let wt=0;wt<g;wt++){var j=B[wt].g;const bn=B[wt].map;if(j-=Se,j<0)Se=Math.max(0,B[wt].g-100),qe=!1;else try{j="req"+j+"_"||"";try{var te=bn instanceof Map?bn:Object.entries(bn);for(const[qs,fs]of te){let ps=fs;l(fs)&&(ps=ce(fs)),_t.push(j+qs+"="+encodeURIComponent(ps))}}catch(qs){throw _t.push(j+"type="+encodeURIComponent("_badmap")),qs}}catch{v&&v(bn)}}if(qe){te=_t.join("&");break e}}te=void 0}return a=a.i.splice(0,g),d.G=a,te}function cd(a){if(!a.g&&!a.v){a.Y=1;var d=a.Da;ie||T(),we||(ie(),we=!0),R.add(d,a),a.A=0}}function yl(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ls(u(a.Da,a),dd(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,ud(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ls(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,mt(10),Io(this),ud(this))};function Al(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function ud(a){a.g=new cs(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var d=Cn(a.na);Ze(d,"RID","rpc"),Ze(d,"SID",a.M),Ze(d,"AID",a.K),Ze(d,"CI",a.F?"0":"1"),!a.F&&a.ia&&Ze(d,"TO",a.ia),Ze(d,"TYPE","xmlhttp"),fr(a,d),a.u&&a.o&&_l(d,a.u,a.o),a.O&&(a.g.H=a.O);var g=a.g;a=a.ba,g.M=1,g.A=vo(Cn(d)),g.u=null,g.R=!0,Bh(g,a)}t.Va=function(){this.C!=null&&(this.C=null,Io(this),yl(this),mt(19))};function Eo(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function hd(a,d){var g=null;if(a.g==d){Eo(a),Al(a),a.g=null;var v=2}else if(fl(a.h,d))g=d.G,Gh(a.h,d),v=1;else return;if(a.I!=0){if(d.o)if(v==1){g=d.u?d.u.length:0,d=Date.now()-d.F;var B=a.D;v=xt(),P(v,new nr(v,g)),wo(a)}else cd(a);else if(B=d.m,B==3||B==0&&d.X>0||!(v==1&&Ny(a,d)||v==2&&yl(a)))switch(g&&g.length>0&&(d=a.h,d.i=d.i.concat(g)),B){case 1:Gs(a,5);break;case 4:Gs(a,10);break;case 3:Gs(a,6);break;default:Gs(a,2)}}}function dd(a,d){let g=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(g*=2),g*d}function Gs(a,d){if(a.j.info("Error code "+d),d==2){var g=u(a.bb,a),v=a.Ua;const B=!v;v=new us(v||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||rr(v,"https"),vo(v),B?Sy(v.toString(),g):Ry(v.toString(),g)}else mt(2);a.I=0,a.l&&a.l.pa(d),fd(a),od(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function fd(a){if(a.I=0,a.ja=[],a.l){const d=qh(a.h);(d.length!=0||a.i.length!=0)&&(I(a.ja,d),I(a.ja,a.i),a.h.i.length=0,_(a.i),a.i.length=0),a.l.oa()}}function pd(a,d,g){var v=g instanceof us?Cn(g):new us(g);if(v.g!="")d&&(v.g=d+"."+v.g),or(v,v.u);else{var B=o.location;v=B.protocol,d=d?d+"."+B.hostname:B.hostname,B=+B.port;const j=new us(null);v&&rr(j,v),d&&(j.g=d),B&&or(j,B),g&&(j.h=g),v=j}return g=a.G,d=a.wa,g&&d&&Ze(v,g,d),Ze(v,"VER",a.ka),fr(a,v),v}function gd(a,d,g){if(d&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Aa&&!a.ma?new ot(new ml({ab:g})):new ot(a.ma),d.Fa(a.L),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function md(){}t=md.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function To(){}To.prototype.g=function(a,d){return new Zt(a,d)};function Zt(a,d){Z.call(this),this.g=new rd(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.sa&&(a?a["X-WebChannel-Client-Profile"]=d.sa:a={"X-WebChannel-Client-Profile":d.sa}),this.g.U=a,(a=d&&d.Qb)&&!E(a)&&(this.g.u=a),this.A=d&&d.supportsCrossDomainXhr||!1,this.v=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!E(d)&&(this.g.G=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new vi(this)}p(Zt,Z),Zt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Zt.prototype.close=function(){vl(this.g)},Zt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var g={};g.__data__=a,a=g}else this.v&&(g={},g.__data__=ce(a),a=g);d.i.push(new yy(d.Ya++,a)),d.I==3&&wo(d)},Zt.prototype.N=function(){this.g.l=null,delete this.j,vl(this.g),delete this.g,Zt.Z.N.call(this)};function _d(a){Xe.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const g in d){a=g;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}p(_d,Xe);function vd(){Le.call(this),this.status=1}p(vd,Le);function vi(a){this.g=a}p(vi,md),vi.prototype.ra=function(){P(this.g,"a")},vi.prototype.qa=function(a){P(this.g,new _d(a))},vi.prototype.pa=function(a){P(this.g,new vd)},vi.prototype.oa=function(){P(this.g,"b")},To.prototype.createWebChannel=To.prototype.g,Zt.prototype.send=Zt.prototype.o,Zt.prototype.open=Zt.prototype.m,Zt.prototype.close=Zt.prototype.close,p_=function(){return new To},f_=function(){return xt()},d_=ke,yc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},mo.NO_ERROR=0,mo.TIMEOUT=8,mo.HTTP_ERROR=6,qo=mo,Mh.COMPLETE="complete",h_=Mh,Je.EventType=Ge,Ge.OPEN="a",Ge.CLOSE="b",Ge.ERROR="c",Ge.MESSAGE="d",Z.prototype.listen=Z.prototype.J,yr=Je,ot.prototype.listenOnce=ot.prototype.K,ot.prototype.getLastError=ot.prototype.Ha,ot.prototype.getLastErrorCode=ot.prototype.ya,ot.prototype.getStatus=ot.prototype.ca,ot.prototype.getResponseJson=ot.prototype.La,ot.prototype.getResponseText=ot.prototype.la,ot.prototype.send=ot.prototype.ea,ot.prototype.setWithCredentials=ot.prototype.Fa,u_=ot}).apply(typeof Do<"u"?Do:typeof self<"u"?self:typeof window<"u"?window:{});const jf="@firebase/firestore",Gf="4.9.2";/**
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
 */let Xi="12.3.0";/**
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
 */const ri=new Ga("@firebase/firestore");function wi(){return ri.logLevel}function ae(t,...e){if(ri.logLevel<=De.DEBUG){const n=e.map(pu);ri.debug(`Firestore (${Xi}): ${t}`,...n)}}function rs(t,...e){if(ri.logLevel<=De.ERROR){const n=e.map(pu);ri.error(`Firestore (${Xi}): ${t}`,...n)}}function $i(t,...e){if(ri.logLevel<=De.WARN){const n=e.map(pu);ri.warn(`Firestore (${Xi}): ${t}`,...n)}}function pu(t){if(typeof t=="string")return t;try{/**
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
 */function _e(t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,g_(t,s,n)}function g_(t,e,n){let s=`FIRESTORE (${Xi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw rs(s),new Error(s)}function He(t,e,n,s){let i="Unexpected state";typeof n=="string"?i=n:s=n,t||g_(e,i,s)}function Ie(t,e){return t}/**
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
 */class m_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Mt.UNAUTHENTICATED)))}shutdown(){}}class oC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class aC{constructor(e){this.t=e,this.currentUser=Mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){He(this.o===void 0,42304);let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new Ps;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Ps,e.enqueueRetryable((()=>i(this.currentUser)))};const o=()=>{const c=r;e.enqueueRetryable((async()=>{await c.promise,await i(this.currentUser)}))},l=c=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Ps)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(He(typeof s.accessToken=="string",31837,{l:s}),new m_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return He(e===null||typeof e=="string",2055,{h:e}),new Mt(e)}}class lC{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=Mt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class cC{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new lC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(Mt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class qf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,gn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){He(this.o===void 0,3512);const s=r=>{r.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.m;return this.m=r.token,ae("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable((()=>s(r)))};const i=r=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>i(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?i(r):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new qf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(He(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new qf(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function hC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class gu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const i=hC(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%62))}return s}}function xe(t,e){return t<e?-1:t>e?1:0}function Ac(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const i=t.charAt(s),r=e.charAt(s);if(i!==r)return Hl(i)===Hl(r)?xe(i,r):Hl(i)?1:-1}return xe(t.length,e.length)}const dC=55296,fC=57343;function Hl(t){const e=t.charCodeAt(0);return e>=dC&&e<=fC}function Hi(t,e,n){return t.length===e.length&&t.every(((s,i)=>n(s,e[i])))}/**
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
 */const Qf="__name__";class Pn{constructor(e,n,s){n===void 0?n=0:n>e.length&&_e(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&_e(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Pn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Pn?e.forEach((s=>{n.push(s)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=Pn.compareSegments(e.get(i),n.get(i));if(r!==0)return r}return xe(e.length,n.length)}static compareSegments(e,n){const s=Pn.isNumericId(e),i=Pn.isNumericId(n);return s&&!i?-1:!s&&i?1:s&&i?Pn.extractNumericId(e).compare(Pn.extractNumericId(n)):Ac(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Rs.fromString(e.substring(4,e.length-2))}}class tt extends Pn{construct(e,n,s){return new tt(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new de(X.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((i=>i.length>0)))}return new tt(n)}static emptyPath(){return new tt([])}}const pC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Rt extends Pn{construct(e,n,s){return new Rt(e,n,s)}static isValidIdentifier(e){return pC.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Rt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Qf}static keyField(){return new Rt([Qf])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new de(X.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new de(X.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new de(X.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(s+=l,i++):(r(),i++)}if(r(),o)throw new de(X.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Rt(n)}static emptyPath(){return new Rt([])}}/**
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
 */function gC(t,e,n){if(!n)throw new de(X.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mC(t,e,n,s){if(e===!0&&s===!0)throw new de(X.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function zf(t){if(!pe.isDocumentKey(t))throw new de(X.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function __(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function mu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":_e(12329,{type:typeof t})}function Wr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new de(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=mu(t);throw new de(X.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function ut(t,e){const n={typeString:t};return e&&(n.value=e),n}function uo(t,e){if(!__(t))throw new de(X.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const i=e[s].typeString,r="value"in e[s]?{value:e[s].value}:void 0;if(!(s in t)){n=`JSON missing required field: '${s}'`;break}const o=t[s];if(i&&typeof o!==i){n=`JSON field '${s}' must be a ${i}.`;break}if(r!==void 0&&o!==r.value){n=`Expected '${s}' field to equal '${r.value}'`;break}}if(n)throw new de(X.INVALID_ARGUMENT,n);return!0}/**
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
 */const Kr=-1;function _C(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=ye.fromTimestamp(s===1e9?new et(n+1,0):new et(n,s));return new Ms(i,pe.empty(),e)}function vC(t){return new Ms(t.readTime,t.key,Kr)}class Ms{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Ms(ye.min(),pe.empty(),Kr)}static max(){return new Ms(ye.max(),pe.empty(),Kr)}}function yC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=pe.comparator(t.documentKey,e.documentKey),n!==0?n:xe(t.largestBatchId,e.largestBatchId))}/**
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
 */const AC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class IC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Zi(t){if(t.code!==X.FAILED_PRECONDITION||t.message!==AC)throw t;ae("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Y{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&_e(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new Y(((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof Y?n:Y.resolve(n)}catch(n){return Y.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):Y.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):Y.reject(n)}static resolve(e){return new Y(((n,s)=>{n(e)}))}static reject(e){return new Y(((n,s)=>{s(e)}))}static waitFor(e){return new Y(((n,s)=>{let i=0,r=0,o=!1;e.forEach((l=>{++i,l.next((()=>{++r,o&&r===i&&n()}),(c=>s(c)))})),o=!0,r===i&&n()}))}static or(e){let n=Y.resolve(!1);for(const s of e)n=n.next((i=>i?Y.resolve(i):s()));return n}static forEach(e,n){const s=[];return e.forEach(((i,r)=>{s.push(n.call(this,i,r))})),this.waitFor(s)}static mapArray(e,n){return new Y(((s,i)=>{const r=e.length,o=new Array(r);let l=0;for(let c=0;c<r;c++){const u=c;n(e[u]).next((f=>{o[u]=f,++l,l===r&&s(o)}),(f=>i(f)))}}))}static doWhile(e,n){return new Y(((s,i)=>{const r=()=>{e()===!0?n().next((()=>{r()}),i):s()};r()}))}}function wC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function er(t){return t.name==="IndexedDbTransactionError"}/**
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
 */const _u=-1;function Ka(t){return t==null}function ma(t){return t===0&&1/t==-1/0}function EC(t){return typeof t=="number"&&Number.isInteger(t)&&!ma(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const v_="";function TC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Yf(e)),e=CC(t.get(n),e);return Yf(e)}function CC(t,e){let n=e;const s=t.length;for(let i=0;i<s;i++){const r=t.charAt(i);switch(r){case"\0":n+="";break;case v_:n+="";break;default:n+=r}}return n}function Yf(t){return t+v_+""}/**
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
 */function Jf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function di(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function y_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class st{constructor(e,n){this.comparator=e,this.root=n||bt.EMPTY}insert(e,n){return new st(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,bt.BLACK,null,null))}remove(e){return new st(this.comparator,this.root.remove(e,this.comparator).copy(null,null,bt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,s)=>(e(n,s),!1)))}toString(){const e=[];return this.inorderTraversal(((n,s)=>(e.push(`${n}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xo(this.root,e,this.comparator,!1)}getReverseIterator(){return new xo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xo(this.root,e,this.comparator,!0)}}class xo{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class bt{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??bt.RED,this.left=i??bt.EMPTY,this.right=r??bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new bt(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return bt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return bt.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _e(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _e(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw _e(27949);return e+(this.isRed()?0:1)}}bt.EMPTY=null,bt.RED=!0,bt.BLACK=!1;bt.EMPTY=new class{constructor(){this.size=0}get key(){throw _e(57766)}get value(){throw _e(16141)}get color(){throw _e(16727)}get left(){throw _e(29726)}get right(){throw _e(36894)}copy(e,n,s,i,r){return this}insert(e,n,s){return new bt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class It{constructor(e){this.comparator=e,this.data=new st(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,s)=>(e(n),!1)))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Xf(this.data.getIterator())}getIteratorFrom(e){return new Xf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((s=>{n=n.add(s)})),n}isEqual(e){if(!(e instanceof It)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new It(this.comparator);return n.data=e,n}}class Xf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class vn{constructor(e){this.fields=e,e.sort(Rt.comparator)}static empty(){return new vn([])}unionWith(e){let n=new It(Rt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new vn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Hi(this.fields,e.fields,((n,s)=>n.isEqual(s)))}}/**
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
 */class A_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class kt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new A_("Invalid base64 string: "+r):r}})(e);return new kt(n)}static fromUint8Array(e){const n=(function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r})(e);return new kt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}kt.EMPTY_BYTE_STRING=new kt("");const bC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Os(t){if(He(!!t,39018),typeof t=="string"){let e=0;const n=bC.exec(t);if(He(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:lt(t.seconds),nanos:lt(t.nanos)}}function lt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Vs(t){return typeof t=="string"?kt.fromBase64String(t):kt.fromUint8Array(t)}/**
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
 */const I_="server_timestamp",w_="__type__",E_="__previous_value__",T_="__local_write_time__";function vu(t){return(t?.mapValue?.fields||{})[w_]?.stringValue===I_}function Ya(t){const e=t.mapValue.fields[E_];return vu(e)?Ya(e):e}function Yr(t){const e=Os(t.mapValue.fields[T_].timestampValue);return new et(e.seconds,e.nanos)}/**
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
 */class SC{constructor(e,n,s,i,r,o,l,c,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=f}}const _a="(default)";class Jr{constructor(e,n){this.projectId=e,this.database=n||_a}static empty(){return new Jr("","")}get isDefaultDatabase(){return this.database===_a}isEqual(e){return e instanceof Jr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const C_="__type__",RC="__max__",No={mapValue:{}},b_="__vector__",va="value";function Ls(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?vu(t)?4:kC(t)?9007199254740991:PC(t)?10:11:_e(28295,{value:t})}function Hn(t,e){if(t===e)return!0;const n=Ls(t);if(n!==Ls(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Yr(t).isEqual(Yr(e));case 3:return(function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=Os(i.timestampValue),l=Os(r.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(i,r){return Vs(i.bytesValue).isEqual(Vs(r.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(i,r){return lt(i.geoPointValue.latitude)===lt(r.geoPointValue.latitude)&&lt(i.geoPointValue.longitude)===lt(r.geoPointValue.longitude)})(t,e);case 2:return(function(i,r){if("integerValue"in i&&"integerValue"in r)return lt(i.integerValue)===lt(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=lt(i.doubleValue),l=lt(r.doubleValue);return o===l?ma(o)===ma(l):isNaN(o)&&isNaN(l)}return!1})(t,e);case 9:return Hi(t.arrayValue.values||[],e.arrayValue.values||[],Hn);case 10:case 11:return(function(i,r){const o=i.mapValue.fields||{},l=r.mapValue.fields||{};if(Jf(o)!==Jf(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Hn(o[c],l[c])))return!1;return!0})(t,e);default:return _e(52216,{left:t})}}function Xr(t,e){return(t.values||[]).find((n=>Hn(n,e)))!==void 0}function ji(t,e){if(t===e)return 0;const n=Ls(t),s=Ls(e);if(n!==s)return xe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return xe(t.booleanValue,e.booleanValue);case 2:return(function(r,o){const l=lt(r.integerValue||r.doubleValue),c=lt(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(t,e);case 3:return Zf(t.timestampValue,e.timestampValue);case 4:return Zf(Yr(t),Yr(e));case 5:return Ac(t.stringValue,e.stringValue);case 6:return(function(r,o){const l=Vs(r),c=Vs(o);return l.compareTo(c)})(t.bytesValue,e.bytesValue);case 7:return(function(r,o){const l=r.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=xe(l[u],c[u]);if(f!==0)return f}return xe(l.length,c.length)})(t.referenceValue,e.referenceValue);case 8:return(function(r,o){const l=xe(lt(r.latitude),lt(o.latitude));return l!==0?l:xe(lt(r.longitude),lt(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return ep(t.arrayValue,e.arrayValue);case 10:return(function(r,o){const l=r.fields||{},c=o.fields||{},u=l[va]?.arrayValue,f=c[va]?.arrayValue,p=xe(u?.values?.length||0,f?.values?.length||0);return p!==0?p:ep(u,f)})(t.mapValue,e.mapValue);case 11:return(function(r,o){if(r===No.mapValue&&o===No.mapValue)return 0;if(r===No.mapValue)return 1;if(o===No.mapValue)return-1;const l=r.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const m=Ac(c[p],f[p]);if(m!==0)return m;const _=ji(l[c[p]],u[f[p]]);if(_!==0)return _}return xe(c.length,f.length)})(t.mapValue,e.mapValue);default:throw _e(23264,{he:n})}}function Zf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return xe(t,e);const n=Os(t),s=Os(e),i=xe(n.seconds,s.seconds);return i!==0?i:xe(n.nanos,s.nanos)}function ep(t,e){const n=t.values||[],s=e.values||[];for(let i=0;i<n.length&&i<s.length;++i){const r=ji(n[i],s[i]);if(r)return r}return xe(n.length,s.length)}function Gi(t){return Ic(t)}function Ic(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const s=Os(n);return`time(${s.seconds},${s.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Vs(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return pe.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let s="[",i=!0;for(const r of n.values||[])i?i=!1:s+=",",s+=Ic(r);return s+"]"})(t.arrayValue):"mapValue"in t?(function(n){const s=Object.keys(n.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${Ic(n.fields[o])}`;return i+"}"})(t.mapValue):_e(61005,{value:t})}function Qo(t){switch(Ls(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ya(t);return e?16+Qo(e):16;case 5:return 2*t.stringValue.length;case 6:return Vs(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((i,r)=>i+Qo(r)),0)})(t.arrayValue);case 10:case 11:return(function(s){let i=0;return di(s.fields,((r,o)=>{i+=r.length+Qo(o)})),i})(t.mapValue);default:throw _e(13486,{value:t})}}function wc(t){return!!t&&"integerValue"in t}function yu(t){return!!t&&"arrayValue"in t}function tp(t){return!!t&&"nullValue"in t}function np(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function zo(t){return!!t&&"mapValue"in t}function PC(t){return(t?.mapValue?.fields||{})[C_]?.stringValue===b_}function Mr(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return di(t.mapValue.fields,((n,s)=>e.mapValue.fields[n]=Mr(s))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Mr(t.arrayValue.values[n]);return e}return{...t}}function kC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===RC}/**
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
 */class an{constructor(e){this.value=e}static empty(){return new an({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!zo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Mr(n)}setAll(e){let n=Rt.emptyPath(),s={},i=[];e.forEach(((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=l.popLast()}o?s[l.lastSegment()]=Mr(o):i.push(l.lastSegment())}));const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());zo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Hn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];zo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){di(n,((i,r)=>e[i]=r));for(const i of s)delete e[i]}clone(){return new an(Mr(this.value))}}function S_(t){const e=[];return di(t.fields,((n,s)=>{const i=new Rt([n]);if(zo(s)){const r=S_(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)})),new vn(e)}/**
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
 */class Vt{constructor(e,n,s,i,r,o,l){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Vt(e,0,ye.min(),ye.min(),ye.min(),an.empty(),0)}static newFoundDocument(e,n,s,i){return new Vt(e,1,n,ye.min(),s,i,0)}static newNoDocument(e,n){return new Vt(e,2,n,ye.min(),ye.min(),an.empty(),0)}static newUnknownDocument(e,n){return new Vt(e,3,n,ye.min(),ye.min(),an.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ye.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=an.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=an.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ye.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ya{constructor(e,n){this.position=e,this.inclusive=n}}function sp(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=pe.comparator(pe.fromName(o.referenceValue),n.key):s=ji(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function ip(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Hn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Aa{constructor(e,n="asc"){this.field=e,this.dir=n}}function DC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class R_{}class At extends R_{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new NC(e,n,s):n==="array-contains"?new VC(e,s):n==="in"?new LC(e,s):n==="not-in"?new BC(e,s):n==="array-contains-any"?new FC(e,s):new At(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new MC(e,s):new OC(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ji(n,this.value)):n!==null&&Ls(this.value)===Ls(n)&&this.matchesComparison(ji(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jn extends R_{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new jn(e,n)}matches(e){return P_(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function P_(t){return t.op==="and"}function k_(t){return xC(t)&&P_(t)}function xC(t){for(const e of t.filters)if(e instanceof jn)return!1;return!0}function Ec(t){if(t instanceof At)return t.field.canonicalString()+t.op.toString()+Gi(t.value);if(k_(t))return t.filters.map((e=>Ec(e))).join(",");{const e=t.filters.map((n=>Ec(n))).join(",");return`${t.op}(${e})`}}function D_(t,e){return t instanceof At?(function(s,i){return i instanceof At&&s.op===i.op&&s.field.isEqual(i.field)&&Hn(s.value,i.value)})(t,e):t instanceof jn?(function(s,i){return i instanceof jn&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce(((r,o,l)=>r&&D_(o,i.filters[l])),!0):!1})(t,e):void _e(19439)}function x_(t){return t instanceof At?(function(n){return`${n.field.canonicalString()} ${n.op} ${Gi(n.value)}`})(t):t instanceof jn?(function(n){return n.op.toString()+" {"+n.getFilters().map(x_).join(" ,")+"}"})(t):"Filter"}class NC extends At{constructor(e,n,s){super(e,n,s),this.key=pe.fromName(s.referenceValue)}matches(e){const n=pe.comparator(e.key,this.key);return this.matchesComparison(n)}}class MC extends At{constructor(e,n){super(e,"in",n),this.keys=N_("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class OC extends At{constructor(e,n){super(e,"not-in",n),this.keys=N_("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function N_(t,e){return(e.arrayValue?.values||[]).map((n=>pe.fromName(n.referenceValue)))}class VC extends At{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return yu(n)&&Xr(n.arrayValue,this.value)}}class LC extends At{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Xr(this.value.arrayValue,n)}}class BC extends At{constructor(e,n){super(e,"not-in",n)}matches(e){if(Xr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Xr(this.value.arrayValue,n)}}class FC extends At{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!yu(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>Xr(this.value.arrayValue,s)))}}/**
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
 */class UC{constructor(e,n=null,s=[],i=[],r=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=l,this.Te=null}}function rp(t,e=null,n=[],s=[],i=null,r=null,o=null){return new UC(t,e,n,s,i,r,o)}function Au(t){const e=Ie(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((s=>Ec(s))).join(","),n+="|ob:",n+=e.orderBy.map((s=>(function(r){return r.field.canonicalString()+r.dir})(s))).join(","),Ka(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>Gi(s))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>Gi(s))).join(",")),e.Te=n}return e.Te}function Iu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!DC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!D_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ip(t.startAt,e.startAt)&&ip(t.endAt,e.endAt)}function Tc(t){return pe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ja{constructor(e,n=null,s=[],i=[],r=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function $C(t,e,n,s,i,r,o,l){return new Ja(t,e,n,s,i,r,o,l)}function wu(t){return new Ja(t)}function op(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function HC(t){return t.collectionGroup!==null}function Or(t){const e=Ie(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const r of e.explicitOrderBy)e.Ie.push(r),n.add(r.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new It(Rt.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((u=>{u.isInequality()&&(l=l.add(u.field))}))})),l})(e).forEach((r=>{n.has(r.canonicalString())||r.isKeyField()||e.Ie.push(new Aa(r,s))})),n.has(Rt.keyField().canonicalString())||e.Ie.push(new Aa(Rt.keyField(),s))}return e.Ie}function Mn(t){const e=Ie(t);return e.Ee||(e.Ee=jC(e,Or(t))),e.Ee}function jC(t,e){if(t.limitType==="F")return rp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((i=>{const r=i.dir==="desc"?"asc":"desc";return new Aa(i.field,r)}));const n=t.endAt?new ya(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new ya(t.startAt.position,t.startAt.inclusive):null;return rp(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function Cc(t,e,n){return new Ja(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Xa(t,e){return Iu(Mn(t),Mn(e))&&t.limitType===e.limitType}function M_(t){return`${Au(Mn(t))}|lt:${t.limitType}`}function Ei(t){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((i=>x_(i))).join(", ")}]`),Ka(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((i=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(i))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((i=>Gi(i))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((i=>Gi(i))).join(",")),`Target(${s})`})(Mn(t))}; limitType=${t.limitType})`}function Za(t,e){return e.isFoundDocument()&&(function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):pe.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)})(t,e)&&(function(s,i){for(const r of Or(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0})(t,e)&&(function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0})(t,e)&&(function(s,i){return!(s.startAt&&!(function(o,l,c){const u=sp(o,l,c);return o.inclusive?u<=0:u<0})(s.startAt,Or(s),i)||s.endAt&&!(function(o,l,c){const u=sp(o,l,c);return o.inclusive?u>=0:u>0})(s.endAt,Or(s),i))})(t,e)}function GC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function O_(t){return(e,n)=>{let s=!1;for(const i of Or(t)){const r=qC(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function qC(t,e,n){const s=t.field.isKeyField()?pe.comparator(e.key,n.key):(function(r,o,l){const c=o.data.field(r),u=l.data.field(r);return c!==null&&u!==null?ji(c,u):_e(42886)})(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return _e(19790,{direction:t.dir})}}/**
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
 */class fi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){di(this.inner,((n,s)=>{for(const[i,r]of s)e(i,r)}))}isEmpty(){return y_(this.inner)}size(){return this.innerSize}}/**
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
 */const QC=new st(pe.comparator);function os(){return QC}const V_=new st(pe.comparator);function Ar(...t){let e=V_;for(const n of t)e=e.insert(n.key,n);return e}function L_(t){let e=V_;return t.forEach(((n,s)=>e=e.insert(n,s.overlayedDocument))),e}function Xs(){return Vr()}function B_(){return Vr()}function Vr(){return new fi((t=>t.toString()),((t,e)=>t.isEqual(e)))}const zC=new st(pe.comparator),WC=new It(pe.comparator);function Ne(...t){let e=WC;for(const n of t)e=e.add(n);return e}const KC=new It(xe);function YC(){return KC}/**
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
 */function Eu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ma(e)?"-0":e}}function F_(t){return{integerValue:""+t}}function JC(t,e){return EC(e)?F_(e):Eu(t,e)}/**
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
 */class el{constructor(){this._=void 0}}function XC(t,e,n){return t instanceof Ia?(function(i,r){const o={fields:{[w_]:{stringValue:I_},[T_]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&vu(r)&&(r=Ya(r)),r&&(o.fields[E_]=r),{mapValue:o}})(n,e):t instanceof Zr?$_(t,e):t instanceof eo?H_(t,e):(function(i,r){const o=U_(i,r),l=ap(o)+ap(i.Ae);return wc(o)&&wc(i.Ae)?F_(l):Eu(i.serializer,l)})(t,e)}function ZC(t,e,n){return t instanceof Zr?$_(t,e):t instanceof eo?H_(t,e):n}function U_(t,e){return t instanceof wa?(function(s){return wc(s)||(function(r){return!!r&&"doubleValue"in r})(s)})(e)?e:{integerValue:0}:null}class Ia extends el{}class Zr extends el{constructor(e){super(),this.elements=e}}function $_(t,e){const n=j_(e);for(const s of t.elements)n.some((i=>Hn(i,s)))||n.push(s);return{arrayValue:{values:n}}}class eo extends el{constructor(e){super(),this.elements=e}}function H_(t,e){let n=j_(e);for(const s of t.elements)n=n.filter((i=>!Hn(i,s)));return{arrayValue:{values:n}}}class wa extends el{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function ap(t){return lt(t.integerValue||t.doubleValue)}function j_(t){return yu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function eb(t,e){return t.field.isEqual(e.field)&&(function(s,i){return s instanceof Zr&&i instanceof Zr||s instanceof eo&&i instanceof eo?Hi(s.elements,i.elements,Hn):s instanceof wa&&i instanceof wa?Hn(s.Ae,i.Ae):s instanceof Ia&&i instanceof Ia})(t.transform,e.transform)}class tb{constructor(e,n){this.version=e,this.transformResults=n}}class es{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new es}static exists(e){return new es(void 0,e)}static updateTime(e){return new es(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class tl{}function G_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Q_(t.key,es.none()):new ho(t.key,t.data,es.none());{const n=t.data,s=an.empty();let i=new It(Rt.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new pi(t.key,s,new vn(i.toArray()),es.none())}}function nb(t,e,n){t instanceof ho?(function(i,r,o){const l=i.value.clone(),c=cp(i.fieldTransforms,r,o.transformResults);l.setAll(c),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):t instanceof pi?(function(i,r,o){if(!Wo(i.precondition,r))return void r.convertToUnknownDocument(o.version);const l=cp(i.fieldTransforms,r,o.transformResults),c=r.data;c.setAll(q_(i)),c.setAll(l),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):(function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function Lr(t,e,n,s){return t instanceof ho?(function(r,o,l,c){if(!Wo(r.precondition,o))return l;const u=r.value.clone(),f=up(r.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,s):t instanceof pi?(function(r,o,l,c){if(!Wo(r.precondition,o))return l;const u=up(r.fieldTransforms,c,o),f=o.data;return f.setAll(q_(r)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((p=>p.field)))})(t,e,n,s):(function(r,o,l){return Wo(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l})(t,e,n)}function sb(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=U_(s.transform,i||null);r!=null&&(n===null&&(n=an.empty()),n.set(s.field,r))}return n||null}function lp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&Hi(s,i,((r,o)=>eb(r,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ho extends tl{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class pi extends tl{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function q_(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function cp(t,e,n){const s=new Map;He(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,l=e.data.field(r.field);s.set(r.field,ZC(o,l,n[i]))}return s}function up(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,XC(r,o,e))}return s}class Q_ extends tl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ib extends tl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class rb{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&nb(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Lr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Lr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=B_();return this.mutations.forEach((i=>{const r=e.get(i.key),o=r.overlayedDocument;let l=this.applyToLocalView(o,r.mutatedFields);l=n.has(i.key)?null:l;const c=G_(o,l);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(ye.min())})),s}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Ne())}isEqual(e){return this.batchId===e.batchId&&Hi(this.mutations,e.mutations,((n,s)=>lp(n,s)))&&Hi(this.baseMutations,e.baseMutations,((n,s)=>lp(n,s)))}}class Tu{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){He(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let i=(function(){return zC})();const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Tu(e,n,s,i)}}/**
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
 */class ob{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ab{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ct,Me;function lb(t){switch(t){case X.OK:return _e(64938);case X.CANCELLED:case X.UNKNOWN:case X.DEADLINE_EXCEEDED:case X.RESOURCE_EXHAUSTED:case X.INTERNAL:case X.UNAVAILABLE:case X.UNAUTHENTICATED:return!1;case X.INVALID_ARGUMENT:case X.NOT_FOUND:case X.ALREADY_EXISTS:case X.PERMISSION_DENIED:case X.FAILED_PRECONDITION:case X.ABORTED:case X.OUT_OF_RANGE:case X.UNIMPLEMENTED:case X.DATA_LOSS:return!0;default:return _e(15467,{code:t})}}function z_(t){if(t===void 0)return rs("GRPC error has no .code"),X.UNKNOWN;switch(t){case ct.OK:return X.OK;case ct.CANCELLED:return X.CANCELLED;case ct.UNKNOWN:return X.UNKNOWN;case ct.DEADLINE_EXCEEDED:return X.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return X.RESOURCE_EXHAUSTED;case ct.INTERNAL:return X.INTERNAL;case ct.UNAVAILABLE:return X.UNAVAILABLE;case ct.UNAUTHENTICATED:return X.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return X.INVALID_ARGUMENT;case ct.NOT_FOUND:return X.NOT_FOUND;case ct.ALREADY_EXISTS:return X.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return X.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return X.FAILED_PRECONDITION;case ct.ABORTED:return X.ABORTED;case ct.OUT_OF_RANGE:return X.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return X.UNIMPLEMENTED;case ct.DATA_LOSS:return X.DATA_LOSS;default:return _e(39323,{code:t})}}(Me=ct||(ct={}))[Me.OK=0]="OK",Me[Me.CANCELLED=1]="CANCELLED",Me[Me.UNKNOWN=2]="UNKNOWN",Me[Me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Me[Me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Me[Me.NOT_FOUND=5]="NOT_FOUND",Me[Me.ALREADY_EXISTS=6]="ALREADY_EXISTS",Me[Me.PERMISSION_DENIED=7]="PERMISSION_DENIED",Me[Me.UNAUTHENTICATED=16]="UNAUTHENTICATED",Me[Me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Me[Me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Me[Me.ABORTED=10]="ABORTED",Me[Me.OUT_OF_RANGE=11]="OUT_OF_RANGE",Me[Me.UNIMPLEMENTED=12]="UNIMPLEMENTED",Me[Me.INTERNAL=13]="INTERNAL",Me[Me.UNAVAILABLE=14]="UNAVAILABLE",Me[Me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function cb(){return new TextEncoder}/**
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
 */const ub=new Rs([4294967295,4294967295],0);function hp(t){const e=cb().encode(t),n=new c_;return n.update(e),new Uint8Array(n.digest())}function dp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Rs([n,s],0),new Rs([i,r],0)]}class Cu{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Ir(`Invalid padding: ${n}`);if(s<0)throw new Ir(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ir(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Ir(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Rs.fromNumber(this.ge)}ye(e,n,s){let i=e.add(n.multiply(Rs.fromNumber(s)));return i.compare(ub)===1&&(i=new Rs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=hp(e),[s,i]=dp(n);for(let r=0;r<this.hashCount;r++){const o=this.ye(s,i,r);if(!this.we(o))return!1}return!0}static create(e,n,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Cu(r,i,n);return s.forEach((l=>o.insert(l))),o}insert(e){if(this.ge===0)return;const n=hp(e),[s,i]=dp(n);for(let r=0;r<this.hashCount;r++){const o=this.ye(s,i,r);this.Se(o)}}Se(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Ir extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class nl{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,fo.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new nl(ye.min(),i,new st(xe),os(),Ne())}}class fo{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new fo(s,n,Ne(),Ne(),Ne())}}/**
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
 */class Ko{constructor(e,n,s,i){this.be=e,this.removedTargetIds=n,this.key=s,this.De=i}}class W_{constructor(e,n){this.targetId=e,this.Ce=n}}class K_{constructor(e,n,s=kt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class fp{constructor(){this.ve=0,this.Fe=pp(),this.Me=kt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ne(),n=Ne(),s=Ne();return this.Fe.forEach(((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:_e(38017,{changeType:r})}})),new fo(this.Me,this.xe,e,n,s)}qe(){this.Oe=!1,this.Fe=pp()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,He(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class hb{constructor(e){this.Ge=e,this.ze=new Map,this.je=os(),this.Je=Mo(),this.He=Mo(),this.Ye=new st(xe)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const s=this.nt(n);switch(e.state){case 0:this.rt(n)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(e.resumeToken));break;default:_e(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((s,i)=>{this.rt(i)&&n(i)}))}st(e){const n=e.targetId,s=e.Ce.count,i=this.ot(n);if(i){const r=i.target;if(Tc(r))if(s===0){const o=new pe(r.path);this.et(n,o,Vt.newNoDocument(o,ye.min()))}else He(s===1,20013,{expectedCount:s});else{const o=this._t(n);if(o!==s){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=n;let o,l;try{o=Vs(s).toUint8Array()}catch(c){if(c instanceof A_)return $i("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Cu(o,i,r)}catch(c){return $i(c instanceof Ir?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,n,s){return n.Ce.count===s-this.Pt(e,n.targetId)?0:2}Pt(e,n){const s=this.Ge.getRemoteKeysForTarget(n);let i=0;return s.forEach((r=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(l)||(this.et(n,r,null),i++)})),i}Tt(e){const n=new Map;this.ze.forEach(((r,o)=>{const l=this.ot(o);if(l){if(r.current&&Tc(l.target)){const c=new pe(l.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,Vt.newNoDocument(c,e))}r.Be&&(n.set(o,r.ke()),r.qe())}}));let s=Ne();this.He.forEach(((r,o)=>{let l=!0;o.forEachWhile((c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(s=s.add(r))})),this.je.forEach(((r,o)=>o.setReadTime(e)));const i=new nl(e,n,this.Ye,this.je,s);return this.je=os(),this.Je=Mo(),this.He=Mo(),this.Ye=new st(xe),i}Xe(e,n){if(!this.rt(e))return;const s=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,s){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),s&&(this.je=this.je.insert(n,s))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new fp,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new It(xe),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new It(xe),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||ae("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new fp),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Mo(){return new st(pe.comparator)}function pp(){return new st(pe.comparator)}const db={asc:"ASCENDING",desc:"DESCENDING"},fb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},pb={and:"AND",or:"OR"};class gb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function bc(t,e){return t.useProto3Json||Ka(e)?e:{value:e}}function Ea(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Y_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function mb(t,e){return Ea(t,e.toTimestamp())}function On(t){return He(!!t,49232),ye.fromTimestamp((function(n){const s=Os(n);return new et(s.seconds,s.nanos)})(t))}function bu(t,e){return Sc(t,e).canonicalString()}function Sc(t,e){const n=(function(i){return new tt(["projects",i.projectId,"databases",i.database])})(t).child("documents");return e===void 0?n:n.child(e)}function J_(t){const e=tt.fromString(t);return He(nv(e),10190,{key:e.toString()}),e}function Rc(t,e){return bu(t.databaseId,e.path)}function jl(t,e){const n=J_(e);if(n.get(1)!==t.databaseId.projectId)throw new de(X.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new de(X.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new pe(Z_(n))}function X_(t,e){return bu(t.databaseId,e)}function _b(t){const e=J_(t);return e.length===4?tt.emptyPath():Z_(e)}function Pc(t){return new tt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Z_(t){return He(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function gp(t,e,n){return{name:Rc(t,e),fields:n.value.mapValue.fields}}function vb(t,e){let n;if("targetChange"in e){e.targetChange;const s=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:_e(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=(function(u,f){return u.useProto3Json?(He(f===void 0||typeof f=="string",58123),kt.fromBase64String(f||"")):(He(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),kt.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&(function(u){const f=u.code===void 0?X.UNKNOWN:z_(u.code);return new de(f,u.message||"")})(o);n=new K_(s,i,r,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=jl(t,s.document.name),r=On(s.document.updateTime),o=s.document.createTime?On(s.document.createTime):ye.min(),l=new an({mapValue:{fields:s.document.fields}}),c=Vt.newFoundDocument(i,r,o,l),u=s.targetIds||[],f=s.removedTargetIds||[];n=new Ko(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=jl(t,s.document),r=s.readTime?On(s.readTime):ye.min(),o=Vt.newNoDocument(i,r),l=s.removedTargetIds||[];n=new Ko([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=jl(t,s.document),r=s.removedTargetIds||[];n=new Ko([],r,i,null)}else{if(!("filter"in e))return _e(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new ab(i,r),l=s.targetId;n=new W_(l,o)}}return n}function yb(t,e){let n;if(e instanceof ho)n={update:gp(t,e.key,e.value)};else if(e instanceof Q_)n={delete:Rc(t,e.key)};else if(e instanceof pi)n={update:gp(t,e.key,e.data),updateMask:Rb(e.fieldMask)};else{if(!(e instanceof ib))return _e(16599,{Vt:e.type});n={verify:Rc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((s=>(function(r,o){const l=o.transform;if(l instanceof Ia)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Zr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof eo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof wa)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw _e(20930,{transform:o.transform})})(0,s)))),e.precondition.isNone||(n.currentDocument=(function(i,r){return r.updateTime!==void 0?{updateTime:mb(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:_e(27497)})(t,e.precondition)),n}function Ab(t,e){return t&&t.length>0?(He(e!==void 0,14353),t.map((n=>(function(i,r){let o=i.updateTime?On(i.updateTime):On(r);return o.isEqual(ye.min())&&(o=On(r)),new tb(o,i.transformResults||[])})(n,e)))):[]}function Ib(t,e){return{documents:[X_(t,e.path)]}}function wb(t,e){const n={structuredQuery:{}},s=e.path;let i;e.collectionGroup!==null?(i=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=X_(t,i);const r=(function(u){if(u.length!==0)return tv(jn.create(u,"and"))})(e.filters);r&&(n.structuredQuery.where=r);const o=(function(u){if(u.length!==0)return u.map((f=>(function(m){return{field:Ti(m.field),direction:Cb(m.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=bc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:n,parent:i}}function Eb(t){let e=_b(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){He(s===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let r=[];n.where&&(r=(function(p){const m=ev(p);return m instanceof jn&&k_(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((m=>(function(I){return new Aa(Ci(I.field),(function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(I.direction))})(m)))})(n.orderBy));let l=null;n.limit&&(l=(function(p){let m;return m=typeof p=="object"?p.value:p,Ka(m)?null:m})(n.limit));let c=null;n.startAt&&(c=(function(p){const m=!!p.before,_=p.values||[];return new ya(_,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const m=!p.before,_=p.values||[];return new ya(_,m)})(n.endAt)),$C(e,i,o,r,l,"F",c,u)}function Tb(t,e){const n=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e(28987,{purpose:i})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function ev(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Ci(n.unaryFilter.field);return At.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=Ci(n.unaryFilter.field);return At.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ci(n.unaryFilter.field);return At.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ci(n.unaryFilter.field);return At.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _e(61313);default:return _e(60726)}})(t):t.fieldFilter!==void 0?(function(n){return At.create(Ci(n.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _e(58110);default:return _e(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return jn.create(n.compositeFilter.filters.map((s=>ev(s))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return _e(1026)}})(n.compositeFilter.op))})(t):_e(30097,{filter:t})}function Cb(t){return db[t]}function bb(t){return fb[t]}function Sb(t){return pb[t]}function Ti(t){return{fieldPath:t.canonicalString()}}function Ci(t){return Rt.fromServerFormat(t.fieldPath)}function tv(t){return t instanceof At?(function(n){if(n.op==="=="){if(np(n.value))return{unaryFilter:{field:Ti(n.field),op:"IS_NAN"}};if(tp(n.value))return{unaryFilter:{field:Ti(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(np(n.value))return{unaryFilter:{field:Ti(n.field),op:"IS_NOT_NAN"}};if(tp(n.value))return{unaryFilter:{field:Ti(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ti(n.field),op:bb(n.op),value:n.value}}})(t):t instanceof jn?(function(n){const s=n.getFilters().map((i=>tv(i)));return s.length===1?s[0]:{compositeFilter:{op:Sb(n.op),filters:s}}})(t):_e(54877,{filter:t})}function Rb(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function nv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Es{constructor(e,n,s,i,r=ye.min(),o=ye.min(),l=kt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Es(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Es(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Es(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Es(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Pb{constructor(e){this.yt=e}}function kb(t){const e=Eb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Cc(e,e.limit,"L"):e}/**
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
 */class Db{constructor(){this.Cn=new xb}addToCollectionParentIndex(e,n){return this.Cn.add(n),Y.resolve()}getCollectionParents(e,n){return Y.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return Y.resolve()}deleteFieldIndex(e,n){return Y.resolve()}deleteAllFieldIndexes(e){return Y.resolve()}createTargetIndexes(e,n){return Y.resolve()}getDocumentsMatchingTarget(e,n){return Y.resolve(null)}getIndexType(e,n){return Y.resolve(0)}getFieldIndexes(e,n){return Y.resolve([])}getNextCollectionGroupToUpdate(e){return Y.resolve(null)}getMinOffset(e,n){return Y.resolve(Ms.min())}getMinOffsetFromCollectionGroup(e,n){return Y.resolve(Ms.min())}updateCollectionGroup(e,n,s){return Y.resolve()}updateIndexEntries(e,n){return Y.resolve()}}class xb{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new It(tt.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new It(tt.comparator)).toArray()}}/**
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
 */const mp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},sv=41943040;class Kt{static withCacheSize(e){return new Kt(e,Kt.DEFAULT_COLLECTION_PERCENTILE,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Kt.DEFAULT_COLLECTION_PERCENTILE=10,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Kt.DEFAULT=new Kt(sv,Kt.DEFAULT_COLLECTION_PERCENTILE,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Kt.DISABLED=new Kt(-1,0,0);/**
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
 */class qi{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new qi(0)}static cr(){return new qi(-1)}}/**
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
 */const _p="LruGarbageCollector",Nb=1048576;function vp([t,e],[n,s]){const i=xe(t,n);return i===0?xe(e,s):i}class Mb{constructor(e){this.Ir=e,this.buffer=new It(vp),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();vp(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Ob{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ae(_p,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){er(n)?ae(_p,"Ignoring IndexedDB error during garbage collection: ",n):await Zi(n)}await this.Vr(3e5)}))}}class Vb{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(e,n){if(n===0)return Y.resolve(Wa.ce);const s=new Mb(n);return this.mr.forEachTarget(e,(i=>s.Ar(i.sequenceNumber))).next((()=>this.mr.pr(e,(i=>s.Ar(i))))).next((()=>s.maxValue))}removeTargets(e,n,s){return this.mr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ae("LruGarbageCollector","Garbage collection skipped; disabled"),Y.resolve(mp)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),mp):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let s,i,r,o,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i)))).next((p=>(s=p,l=Date.now(),this.removeTargets(e,s,n)))).next((p=>(r=p,c=Date.now(),this.removeOrphanedDocuments(e,s)))).next((p=>(u=Date.now(),wi()<=De.DEBUG&&ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${r} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),Y.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:p}))))}}function Lb(t,e){return new Vb(t,e)}/**
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
 */class Bb{constructor(){this.changes=new fi((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?Y.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Ub{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next((i=>(s=i,this.remoteDocumentCache.getEntry(e,n)))).next((i=>(s!==null&&Lr(s.mutation,i,vn.empty(),et.now()),i)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.getLocalViewOfDocuments(e,s,Ne()).next((()=>s))))}getLocalViewOfDocuments(e,n,s=Ne()){const i=Xs();return this.populateOverlays(e,i,n).next((()=>this.computeViews(e,n,i,s).next((r=>{let o=Ar();return r.forEach(((l,c)=>{o=o.insert(l,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const s=Xs();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,Ne())))}populateOverlays(e,n,s){const i=[];return s.forEach((r=>{n.has(r)||i.push(r)})),this.documentOverlayCache.getOverlays(e,i).next((r=>{r.forEach(((o,l)=>{n.set(o,l)}))}))}computeViews(e,n,s,i){let r=os();const o=Vr(),l=(function(){return Vr()})();return n.forEach(((c,u)=>{const f=s.get(u.key);i.has(u.key)&&(f===void 0||f.mutation instanceof pi)?r=r.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Lr(f.mutation,u,f.mutation.getFieldMask(),et.now())):o.set(u.key,vn.empty())})),this.recalculateAndSaveOverlays(e,r).next((c=>(c.forEach(((u,f)=>o.set(u,f))),n.forEach(((u,f)=>l.set(u,new Fb(f,o.get(u)??null)))),l)))}recalculateAndSaveOverlays(e,n){const s=Vr();let i=new st(((o,l)=>o-l)),r=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const l of o)l.keys().forEach((c=>{const u=n.get(c);if(u===null)return;let f=s.get(c)||vn.empty();f=l.applyToLocalView(u,f),s.set(c,f);const p=(i.get(l.batchId)||Ne()).add(c);i=i.insert(l.batchId,p)}))})).next((()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,p=B_();f.forEach((m=>{if(!r.has(m)){const _=G_(n.get(m),s.get(m));_!==null&&p.set(m,_),r=r.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return Y.waitFor(o)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,n,s,i){return(function(o){return pe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):HC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,i):this.getDocumentsMatchingCollectionQuery(e,n,s,i)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next((r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):Y.resolve(Xs());let l=Kr,c=r;return o.next((u=>Y.forEach(u,((f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),r.get(f)?Y.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{c=c.insert(f,m)}))))).next((()=>this.populateOverlays(e,u,r))).next((()=>this.computeViews(e,c,u,Ne()))).next((f=>({batchId:l,changes:L_(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new pe(n)).next((s=>{let i=Ar();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i}))}getDocumentsMatchingCollectionGroupQuery(e,n,s,i){const r=n.collectionGroup;let o=Ar();return this.indexManager.getCollectionParents(e,r).next((l=>Y.forEach(l,(c=>{const u=(function(p,m){return new Ja(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,c.child(r));return this.getDocumentsMatchingCollectionQuery(e,u,s,i).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next((o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r,i)))).next((o=>{r.forEach(((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,Vt.newInvalidDocument(f)))}));let l=Ar();return o.forEach(((c,u)=>{const f=r.get(c);f!==void 0&&Lr(f.mutation,u,vn.empty(),et.now()),Za(n,u)&&(l=l.insert(c,u))})),l}))}}/**
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
 */class $b{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return Y.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(i){return{id:i.id,version:i.version,createTime:On(i.createTime)}})(n)),Y.resolve()}getNamedQuery(e,n){return Y.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(i){return{name:i.name,query:kb(i.bundledQuery),readTime:On(i.readTime)}})(n)),Y.resolve()}}/**
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
 */class Hb{constructor(){this.overlays=new st(pe.comparator),this.qr=new Map}getOverlay(e,n){return Y.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Xs();return Y.forEach(n,(i=>this.getOverlay(e,i).next((r=>{r!==null&&s.set(i,r)})))).next((()=>s))}saveOverlays(e,n,s){return s.forEach(((i,r)=>{this.St(e,n,r)})),Y.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.qr.get(s);return i!==void 0&&(i.forEach((r=>this.overlays=this.overlays.remove(r))),this.qr.delete(s)),Y.resolve()}getOverlaysForCollection(e,n,s){const i=Xs(),r=n.length+1,o=new pe(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return Y.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new st(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let f=r.get(u.largestBatchId);f===null&&(f=Xs(),r=r.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=Xs(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((u,f)=>l.set(u,f))),!(l.size()>=i)););return Y.resolve(l)}St(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(s.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new ob(n,s));let r=this.qr.get(n);r===void 0&&(r=Ne(),this.qr.set(n,r)),this.qr.set(n,r.add(s.key))}}/**
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
 */class jb{constructor(){this.sessionToken=kt.EMPTY_BYTE_STRING}getSessionToken(e){return Y.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,Y.resolve()}}/**
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
 */class Su{constructor(){this.Qr=new It(Et.$r),this.Ur=new It(Et.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const s=new Et(e,n);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,n){e.forEach((s=>this.addReference(s,n)))}removeReference(e,n){this.Gr(new Et(e,n))}zr(e,n){e.forEach((s=>this.removeReference(s,n)))}jr(e){const n=new pe(new tt([])),s=new Et(n,e),i=new Et(n,e+1),r=[];return this.Ur.forEachInRange([s,i],(o=>{this.Gr(o),r.push(o.key)})),r}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new pe(new tt([])),s=new Et(n,e),i=new Et(n,e+1);let r=Ne();return this.Ur.forEachInRange([s,i],(o=>{r=r.add(o.key)})),r}containsKey(e){const n=new Et(e,0),s=this.Qr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Et{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return pe.comparator(e.key,n.key)||xe(e.Yr,n.Yr)}static Kr(e,n){return xe(e.Yr,n.Yr)||pe.comparator(e.key,n.key)}}/**
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
 */class Gb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new It(Et.$r)}checkEmpty(e){return Y.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new rb(r,n,s,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new Et(l.key,r)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return Y.resolve(o)}lookupMutationBatch(e,n){return Y.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ei(s),r=i<0?0:i;return Y.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return Y.resolve(this.mutationQueue.length===0?_u:this.tr-1)}getAllMutationBatches(e){return Y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Et(n,0),i=new Et(n,Number.POSITIVE_INFINITY),r=[];return this.Zr.forEachInRange([s,i],(o=>{const l=this.Xr(o.Yr);r.push(l)})),Y.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new It(xe);return n.forEach((i=>{const r=new Et(i,0),o=new Et(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([r,o],(l=>{s=s.add(l.Yr)}))})),Y.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;pe.isDocumentKey(r)||(r=r.child(""));const o=new Et(new pe(r),0);let l=new It(xe);return this.Zr.forEachWhile((c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(l=l.add(c.Yr)),!0)}),o),Y.resolve(this.ti(l))}ti(e){const n=[];return e.forEach((s=>{const i=this.Xr(s);i!==null&&n.push(i)})),n}removeMutationBatch(e,n){He(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return Y.forEach(n.mutations,(i=>{const r=new Et(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,n){const s=new Et(n,0),i=this.Zr.firstAfterOrEqual(s);return Y.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,Y.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class qb{constructor(e){this.ri=e,this.docs=(function(){return new st(pe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.ri(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return Y.resolve(s?s.document.mutableCopy():Vt.newInvalidDocument(n))}getEntries(e,n){let s=os();return n.forEach((i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Vt.newInvalidDocument(i))})),Y.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=os();const o=n.path,l=new pe(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||yC(vC(f),s)<=0||(i.has(f.key)||Za(n,f))&&(r=r.insert(f.key,f.mutableCopy()))}return Y.resolve(r)}getAllFromCollectionGroup(e,n,s,i){_e(9500)}ii(e,n){return Y.forEach(this.docs,(s=>n(s)))}newChangeBuffer(e){return new Qb(this)}getSize(e){return Y.resolve(this.size)}}class Qb extends Bb{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((s,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(s)})),Y.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class zb{constructor(e){this.persistence=e,this.si=new fi((n=>Au(n)),Iu),this.lastRemoteSnapshotVersion=ye.min(),this.highestTargetId=0,this.oi=0,this._i=new Su,this.targetCount=0,this.ai=qi.ur()}forEachTarget(e,n){return this.si.forEach(((s,i)=>n(i))),Y.resolve()}getLastRemoteSnapshotVersion(e){return Y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Y.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),Y.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.oi&&(this.oi=n),Y.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new qi(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,Y.resolve()}updateTargetData(e,n){return this.Pr(n),Y.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,Y.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.si.forEach(((o,l)=>{l.sequenceNumber<=n&&s.get(l.targetId)===null&&(this.si.delete(o),r.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)})),Y.waitFor(r).next((()=>i))}getTargetCount(e){return Y.resolve(this.targetCount)}getTargetData(e,n){const s=this.si.get(n)||null;return Y.resolve(s)}addMatchingKeys(e,n,s){return this._i.Wr(n,s),Y.resolve()}removeMatchingKeys(e,n,s){this._i.zr(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach((o=>{r.push(i.markPotentiallyOrphaned(e,o))})),Y.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),Y.resolve()}getMatchingKeysForTargetId(e,n){const s=this._i.Hr(n);return Y.resolve(s)}containsKey(e,n){return Y.resolve(this._i.containsKey(n))}}/**
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
 */class iv{constructor(e,n){this.ui={},this.overlays={},this.ci=new Wa(0),this.li=!1,this.li=!0,this.hi=new jb,this.referenceDelegate=e(this),this.Pi=new zb(this),this.indexManager=new Db,this.remoteDocumentCache=(function(i){return new qb(i)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new Pb(n),this.Ii=new $b(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Hb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.ui[e.toKey()];return s||(s=new Gb(n,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,s){ae("MemoryPersistence","Starting transaction:",e);const i=new Wb(this.ci.next());return this.referenceDelegate.Ei(),s(i).next((r=>this.referenceDelegate.di(i).next((()=>r)))).toPromise().then((r=>(i.raiseOnCommittedEvent(),r)))}Ai(e,n){return Y.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,n))))}}class Wb extends IC{constructor(e){super(),this.currentSequenceNumber=e}}class Ru{constructor(e){this.persistence=e,this.Ri=new Su,this.Vi=null}static mi(e){return new Ru(e)}get fi(){if(this.Vi)return this.Vi;throw _e(60996)}addReference(e,n,s){return this.Ri.addReference(s,n),this.fi.delete(s.toString()),Y.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.fi.add(s.toString()),Y.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),Y.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((i=>this.fi.add(i.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next((i=>{i.forEach((r=>this.fi.add(r.toString())))})).next((()=>s.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Y.forEach(this.fi,(s=>{const i=pe.fromPath(s);return this.gi(e,i).next((r=>{r||n.removeEntry(i,ye.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((s=>{s?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return Y.or([()=>Y.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Ta{constructor(e,n){this.persistence=e,this.pi=new fi((s=>TC(s.path)),((s,i)=>s.isEqual(i))),this.garbageCollector=Lb(this,n)}static mi(e,n){return new Ta(e,n)}Ei(){}di(e){return Y.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>n.next((i=>s+i))))}wr(e){let n=0;return this.pr(e,(s=>{n++})).next((()=>n))}pr(e,n){return Y.forEach(this.pi,((s,i)=>this.br(e,s,i).next((r=>r?Y.resolve():n(i)))))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const i=this.persistence.getRemoteDocumentCache(),r=i.newChangeBuffer();return i.ii(e,(o=>this.br(e,o,n).next((l=>{l||(s++,r.removeEntry(o,ye.min()))})))).next((()=>r.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),Y.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),Y.resolve()}removeReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),Y.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),Y.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Qo(e.data.value)),n}br(e,n,s){return Y.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return Y.resolve(i!==void 0&&i>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Pu{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Es=s,this.ds=i}static As(e,n){let s=Ne(),i=Ne();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Pu(e,n.fromCache,s,i)}}/**
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
 */class Kb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Yb{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Lw()?8:wC(Ut())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,s,i){const r={result:null};return this.ys(e,n).next((o=>{r.result=o})).next((()=>{if(!r.result)return this.ws(e,n,i,s).next((o=>{r.result=o}))})).next((()=>{if(r.result)return;const o=new Kb;return this.Ss(e,n,o).next((l=>{if(r.result=l,this.Vs)return this.bs(e,n,o,l.size)}))})).next((()=>r.result))}bs(e,n,s,i){return s.documentReadCount<this.fs?(wi()<=De.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",Ei(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),Y.resolve()):(wi()<=De.DEBUG&&ae("QueryEngine","Query:",Ei(n),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.gs*i?(wi()<=De.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",Ei(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Mn(n))):Y.resolve())}ys(e,n){if(op(n))return Y.resolve(null);let s=Mn(n);return this.indexManager.getIndexType(e,s).next((i=>i===0?null:(n.limit!==null&&i===1&&(n=Cc(n,null,"F"),s=Mn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next((r=>{const o=Ne(...r);return this.ps.getDocuments(e,o).next((l=>this.indexManager.getMinOffset(e,s).next((c=>{const u=this.Ds(n,l);return this.Cs(n,u,o,c.readTime)?this.ys(e,Cc(n,null,"F")):this.vs(e,u,n,c)}))))})))))}ws(e,n,s,i){return op(n)||i.isEqual(ye.min())?Y.resolve(null):this.ps.getDocuments(e,s).next((r=>{const o=this.Ds(n,r);return this.Cs(n,o,s,i)?Y.resolve(null):(wi()<=De.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ei(n)),this.vs(e,o,n,_C(i,Kr)).next((l=>l)))}))}Ds(e,n){let s=new It(O_(e));return n.forEach(((i,r)=>{Za(e,r)&&(s=s.add(r))})),s}Cs(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ss(e,n,s){return wi()<=De.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",Ei(n)),this.ps.getDocumentsMatchingQuery(e,n,Ms.min(),s)}vs(e,n,s,i){return this.ps.getDocumentsMatchingQuery(e,s,i).next((r=>(n.forEach((o=>{r=r.insert(o.key,o)})),r)))}}/**
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
 */const ku="LocalStore",Jb=3e8;class Xb{constructor(e,n,s,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new st(xe),this.xs=new fi((r=>Au(r)),Iu),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ub(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function Zb(t,e,n,s){return new Xb(t,e,n,s)}async function rv(t,e){const n=Ie(t);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next((r=>(i=r,n.Bs(e),n.mutationQueue.getAllMutationBatches(s)))).next((r=>{const o=[],l=[];let c=Ne();for(const u of i){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of r){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(s,c).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:l})))}))}))}function eS(t,e){const n=Ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const i=e.batch.keys(),r=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,c,u,f){const p=u.batch,m=p.keys();let _=Y.resolve();return m.forEach((I=>{_=_.next((()=>f.getEntry(c,I))).next((w=>{const S=u.docVersions.get(I);He(S!==null,48541),w.version.compareTo(S)<0&&(p.applyToRemoteDocument(w,u),w.isValidDocument()&&(w.setReadTime(u.commitVersion),f.addEntry(w)))}))})),_.next((()=>l.mutationQueue.removeMutationBatch(c,p)))})(n,s,e,r).next((()=>r.apply(s))).next((()=>n.mutationQueue.performConsistencyCheck(s))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(l){let c=Ne();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c})(e)))).next((()=>n.localDocuments.getDocuments(s,i)))}))}function ov(t){const e=Ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function tS(t,e){const n=Ie(t),s=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const l=[];e.targetChanges.forEach(((f,p)=>{const m=i.get(p);if(!m)return;l.push(n.Pi.removeMatchingKeys(r,f.removedDocuments,p).next((()=>n.Pi.addMatchingKeys(r,f.addedDocuments,p))));let _=m.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(kt.EMPTY_BYTE_STRING,ye.min()).withLastLimboFreeSnapshotVersion(ye.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,s)),i=i.insert(p,_),(function(w,S,M){return w.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=Jb?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0})(m,_,f)&&l.push(n.Pi.updateTargetData(r,_))}));let c=os(),u=Ne();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(r,f))})),l.push(nS(r,o,e.documentUpdates).next((f=>{c=f.ks,u=f.qs}))),!s.isEqual(ye.min())){const f=n.Pi.getLastRemoteSnapshotVersion(r).next((p=>n.Pi.setTargetsMetadata(r,r.currentSequenceNumber,s)));l.push(f)}return Y.waitFor(l).next((()=>o.apply(r))).next((()=>n.localDocuments.getLocalViewOfDocuments(r,c,u))).next((()=>c))})).then((r=>(n.Ms=i,r)))}function nS(t,e,n){let s=Ne(),i=Ne();return n.forEach((r=>s=s.add(r))),e.getEntries(t,s).next((r=>{let o=os();return n.forEach(((l,c)=>{const u=r.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(ye.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):ae(ku,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)})),{ks:o,qs:i}}))}function sS(t,e){const n=Ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=_u),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function iS(t,e){const n=Ie(t);return n.persistence.runTransaction("Allocate target","readwrite",(s=>{let i;return n.Pi.getTargetData(s,e).next((r=>r?(i=r,Y.resolve(i)):n.Pi.allocateTargetId(s).next((o=>(i=new Es(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Pi.addTargetData(s,i).next((()=>i)))))))})).then((s=>{const i=n.Ms.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.xs.set(e,s.targetId)),s}))}async function kc(t,e,n){const s=Ie(t),i=s.Ms.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,(o=>s.persistence.referenceDelegate.removeTarget(o,i)))}catch(o){if(!er(o))throw o;ae(ku,`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ms=s.Ms.remove(e),s.xs.delete(i.target)}function yp(t,e,n){const s=Ie(t);let i=ye.min(),r=Ne();return s.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,u,f){const p=Ie(c),m=p.xs.get(f);return m!==void 0?Y.resolve(p.Ms.get(m)):p.Pi.getTargetData(u,f)})(s,o,Mn(e)).next((l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(o,l.targetId).next((c=>{r=c}))})).next((()=>s.Fs.getDocumentsMatchingQuery(o,e,n?i:ye.min(),n?r:Ne()))).next((l=>(rS(s,GC(e),l),{documents:l,Qs:r})))))}function rS(t,e,n){let s=t.Os.get(e)||ye.min();n.forEach(((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)})),t.Os.set(e,s)}class Ap{constructor(){this.activeTargetIds=YC()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class oS{constructor(){this.Mo=new Ap,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,s){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Ap,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class aS{Oo(e){}shutdown(){}}/**
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
 */const Gl="RestConnection",lS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class cS{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${s}/databases/${i}`,this.Wo=this.databaseId.database===_a?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Go(e,n,s,i,r){const o=Dc(),l=this.zo(e,n.toUriEncodedString());ae(Gl,`Sending RPC '${e}' ${o}:`,l,s);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,i,r);const{host:u}=new URL(l),f=Ki(u);return this.Jo(e,l,c,s,f).then((p=>(ae(Gl,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw $i(Gl,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",s),p}))}Ho(e,n,s,i,r,o){return this.Go(e,n,s,i,r)}jo(e,n,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Xi})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((i,r)=>e[r]=i)),s&&s.headers.forEach(((i,r)=>e[r]=i))}zo(e,n){const s=lS[e];return`${this.Uo}/v1/${n}:${s}`}terminate(){}}/**
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
 */class uS{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Nt="WebChannelConnection";class hS extends cS{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,s,i,r){const o=Dc();return new Promise(((l,c)=>{const u=new u_;u.setWithCredentials(!0),u.listenOnce(h_.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case qo.NO_ERROR:const p=u.getResponseJson();ae(Nt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case qo.TIMEOUT:ae(Nt,`RPC '${e}' ${o} timed out`),c(new de(X.DEADLINE_EXCEEDED,"Request time out"));break;case qo.HTTP_ERROR:const m=u.getStatus();if(ae(Nt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const I=_?.error;if(I&&I.status&&I.message){const w=(function(M){const U=M.toLowerCase().replace(/_/g,"-");return Object.values(X).indexOf(U)>=0?U:X.UNKNOWN})(I.status);c(new de(w,I.message))}else c(new de(X.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new de(X.UNAVAILABLE,"Connection failed."));break;default:_e(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{ae(Nt,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(i);ae(Nt,`RPC '${e}' ${o} sending request:`,i),u.send(n,"POST",f,s,15)}))}T_(e,n,s){const i=Dc(),r=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=p_(),l=f_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const f=r.join("");ae(Nt,`Creating RPC '${e}' stream ${i}: ${f}`,c);const p=o.createWebChannel(f,c);this.I_(p);let m=!1,_=!1;const I=new uS({Yo:S=>{_?ae(Nt,`Not sending because RPC '${e}' stream ${i} is closed:`,S):(m||(ae(Nt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),ae(Nt,`RPC '${e}' stream ${i} sending:`,S),p.send(S))},Zo:()=>p.close()}),w=(S,M,U)=>{S.listen(M,($=>{try{U($)}catch(G){setTimeout((()=>{throw G}),0)}}))};return w(p,yr.EventType.OPEN,(()=>{_||(ae(Nt,`RPC '${e}' stream ${i} transport opened.`),I.o_())})),w(p,yr.EventType.CLOSE,(()=>{_||(_=!0,ae(Nt,`RPC '${e}' stream ${i} transport closed`),I.a_(),this.E_(p))})),w(p,yr.EventType.ERROR,(S=>{_||(_=!0,$i(Nt,`RPC '${e}' stream ${i} transport errored. Name:`,S.name,"Message:",S.message),I.a_(new de(X.UNAVAILABLE,"The operation could not be completed")))})),w(p,yr.EventType.MESSAGE,(S=>{if(!_){const M=S.data[0];He(!!M,16349);const U=M,$=U?.error||U[0]?.error;if($){ae(Nt,`RPC '${e}' stream ${i} received error:`,$);const G=$.status;let ie=(function(T){const b=ct[T];if(b!==void 0)return z_(b)})(G),we=$.message;ie===void 0&&(ie=X.INTERNAL,we="Unknown error status: "+G+" with message "+$.message),_=!0,I.a_(new de(ie,we)),p.close()}else ae(Nt,`RPC '${e}' stream ${i} received:`,M),I.u_(M)}})),w(l,d_.STAT_EVENT,(S=>{S.stat===yc.PROXY?ae(Nt,`RPC '${e}' stream ${i} detected buffering proxy`):S.stat===yc.NOPROXY&&ae(Nt,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{I.__()}),0),I}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function ql(){return typeof document<"u"?document:null}/**
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
 */function sl(t){return new gb(t,!0)}/**
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
 */class av{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Mi=e,this.timerId=n,this.d_=s,this.A_=i,this.R_=r,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-s);i>0&&ae("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Ep="PersistentStream";class lv{constructor(e,n,s,i,r,o,l,c){this.Mi=e,this.S_=s,this.b_=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new av(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===X.RESOURCE_EXHAUSTED?(rs(n.toString()),rs("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===X.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,i])=>{this.D_===n&&this.G_(s,i)}),(s=>{e((()=>{const i=new de(X.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(i)}))}))}G_(e,n){const s=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{s((()=>this.z_(i)))})),this.stream.onMessage((i=>{s((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ae(Ep,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(ae(Ep,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class dS extends lv{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=vb(this.serializer,e),s=(function(r){if(!("targetChange"in r))return ye.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?ye.min():o.readTime?On(o.readTime):ye.min()})(e);return this.listener.H_(n,s)}Y_(e){const n={};n.database=Pc(this.serializer),n.addTarget=(function(r,o){let l;const c=o.target;if(l=Tc(c)?{documents:Ib(r,c)}:{query:wb(r,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Y_(r,o.resumeToken);const u=bc(r,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(ye.min())>0){l.readTime=Ea(r,o.snapshotVersion.toTimestamp());const u=bc(r,o.expectedCount);u!==null&&(l.expectedCount=u)}return l})(this.serializer,e);const s=Tb(this.serializer,e);s&&(n.labels=s),this.q_(n)}Z_(e){const n={};n.database=Pc(this.serializer),n.removeTarget=e,this.q_(n)}}class fS extends lv{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return He(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,He(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){He(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=Ab(e.writeResults,e.commitTime),s=On(e.commitTime);return this.listener.na(s,n)}ra(){const e={};e.database=Pc(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((s=>yb(this.serializer,s)))};this.q_(n)}}/**
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
 */class pS{}class gS extends pS{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new de(X.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.Go(e,Sc(n,s),i,r,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new de(X.UNKNOWN,r.toString())}))}Ho(e,n,s,i,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.Ho(e,Sc(n,s),i,o,l,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new de(X.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class mS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(rs(n),this.aa=!1):ae("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const oi="RemoteStore";class _S{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=r,this.Aa.Oo((o=>{s.enqueueAndForget((async()=>{gi(this)&&(ae(oi,"Restarting streams for network reachability change."),await(async function(c){const u=Ie(c);u.Ea.add(4),await po(u),u.Ra.set("Unknown"),u.Ea.delete(4),await il(u)})(this))}))})),this.Ra=new mS(s,i)}}async function il(t){if(gi(t))for(const e of t.da)await e(!0)}async function po(t){for(const e of t.da)await e(!1)}function cv(t,e){const n=Ie(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Mu(n)?Nu(n):tr(n).O_()&&xu(n,e))}function Du(t,e){const n=Ie(t),s=tr(n);n.Ia.delete(e),s.O_()&&uv(n,e),n.Ia.size===0&&(s.O_()?s.L_():gi(n)&&n.Ra.set("Unknown"))}function xu(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ye.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}tr(t).Y_(e)}function uv(t,e){t.Va.Ue(e),tr(t).Z_(e)}function Nu(t){t.Va=new hb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),tr(t).start(),t.Ra.ua()}function Mu(t){return gi(t)&&!tr(t).x_()&&t.Ia.size>0}function gi(t){return Ie(t).Ea.size===0}function hv(t){t.Va=void 0}async function vS(t){t.Ra.set("Online")}async function yS(t){t.Ia.forEach(((e,n)=>{xu(t,e)}))}async function AS(t,e){hv(t),Mu(t)?(t.Ra.ha(e),Nu(t)):t.Ra.set("Unknown")}async function IS(t,e,n){if(t.Ra.set("Online"),e instanceof K_&&e.state===2&&e.cause)try{await(async function(i,r){const o=r.cause;for(const l of r.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))})(t,e)}catch(s){ae(oi,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ca(t,s)}else if(e instanceof Ko?t.Va.Ze(e):e instanceof W_?t.Va.st(e):t.Va.tt(e),!n.isEqual(ye.min()))try{const s=await ov(t.localStore);n.compareTo(s)>=0&&await(function(r,o){const l=r.Va.Tt(o);return l.targetChanges.forEach(((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=r.Ia.get(u);f&&r.Ia.set(u,f.withResumeToken(c.resumeToken,o))}})),l.targetMismatches.forEach(((c,u)=>{const f=r.Ia.get(c);if(!f)return;r.Ia.set(c,f.withResumeToken(kt.EMPTY_BYTE_STRING,f.snapshotVersion)),uv(r,c);const p=new Es(f.target,c,u,f.sequenceNumber);xu(r,p)})),r.remoteSyncer.applyRemoteEvent(l)})(t,n)}catch(s){ae(oi,"Failed to raise snapshot:",s),await Ca(t,s)}}async function Ca(t,e,n){if(!er(e))throw e;t.Ea.add(1),await po(t),t.Ra.set("Offline"),n||(n=()=>ov(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{ae(oi,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await il(t)}))}function dv(t,e){return e().catch((n=>Ca(t,n,e)))}async function rl(t){const e=Ie(t),n=Bs(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:_u;for(;wS(e);)try{const i=await sS(e.localStore,s);if(i===null){e.Ta.length===0&&n.L_();break}s=i.batchId,ES(e,i)}catch(i){await Ca(e,i)}fv(e)&&pv(e)}function wS(t){return gi(t)&&t.Ta.length<10}function ES(t,e){t.Ta.push(e);const n=Bs(t);n.O_()&&n.X_&&n.ea(e.mutations)}function fv(t){return gi(t)&&!Bs(t).x_()&&t.Ta.length>0}function pv(t){Bs(t).start()}async function TS(t){Bs(t).ra()}async function CS(t){const e=Bs(t);for(const n of t.Ta)e.ea(n.mutations)}async function bS(t,e,n){const s=t.Ta.shift(),i=Tu.from(s,e,n);await dv(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await rl(t)}async function SS(t,e){e&&Bs(t).X_&&await(async function(s,i){if((function(o){return lb(o)&&o!==X.ABORTED})(i.code)){const r=s.Ta.shift();Bs(s).B_(),await dv(s,(()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i))),await rl(s)}})(t,e),fv(t)&&pv(t)}async function Tp(t,e){const n=Ie(t);n.asyncQueue.verifyOperationInProgress(),ae(oi,"RemoteStore received new credentials");const s=gi(n);n.Ea.add(3),await po(n),s&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await il(n)}async function RS(t,e){const n=Ie(t);e?(n.Ea.delete(2),await il(n)):e||(n.Ea.add(2),await po(n),n.Ra.set("Unknown"))}function tr(t){return t.ma||(t.ma=(function(n,s,i){const r=Ie(n);return r.sa(),new dS(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)})(t.datastore,t.asyncQueue,{Xo:vS.bind(null,t),t_:yS.bind(null,t),r_:AS.bind(null,t),H_:IS.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),Mu(t)?Nu(t):t.Ra.set("Unknown")):(await t.ma.stop(),hv(t))}))),t.ma}function Bs(t){return t.fa||(t.fa=(function(n,s,i){const r=Ie(n);return r.sa(),new fS(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)})(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:TS.bind(null,t),r_:SS.bind(null,t),ta:CS.bind(null,t),na:bS.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await rl(t)):(await t.fa.stop(),t.Ta.length>0&&(ae(oi,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
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
 */class Ou{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Ps,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,l=new Ou(e,n,o,i,r);return l.start(s),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new de(X.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vu(t,e){if(rs("AsyncQueue",`${e}: ${t}`),er(t))return new de(X.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Mi{static emptySet(e){return new Mi(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||pe.comparator(n.key,s.key):(n,s)=>pe.comparator(n.key,s.key),this.keyedMap=Ar(),this.sortedSet=new st(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,s)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Mi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Mi;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Cp{constructor(){this.ga=new st(pe.comparator)}track(e){const n=e.doc.key,s=this.ga.get(n);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(n,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(n):e.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):_e(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,s)=>{e.push(s)})),e}}class Qi{constructor(e,n,s,i,r,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach((l=>{o.push({type:0,doc:l})})),new Qi(e,n,Mi.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class PS{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class kS{constructor(){this.queries=bp(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const i=Ie(n),r=i.queries;i.queries=bp(),r.forEach(((o,l)=>{for(const c of l.Sa)c.onError(s)}))})(this,new de(X.ABORTED,"Firestore shutting down"))}}function bp(){return new fi((t=>M_(t)),Xa)}async function DS(t,e){const n=Ie(t);let s=3;const i=e.query;let r=n.queries.get(i);r?!r.ba()&&e.Da()&&(s=2):(r=new PS,s=e.Da()?0:1);try{switch(s){case 0:r.wa=await n.onListen(i,!0);break;case 1:r.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Vu(o,`Initialization of query '${Ei(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,r),r.Sa.push(e),e.va(n.onlineState),r.wa&&e.Fa(r.wa)&&Lu(n)}async function xS(t,e){const n=Ie(t),s=e.query;let i=3;const r=n.queries.get(s);if(r){const o=r.Sa.indexOf(e);o>=0&&(r.Sa.splice(o,1),r.Sa.length===0?i=e.Da()?0:1:!r.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function NS(t,e){const n=Ie(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const l of o.Sa)l.Fa(i)&&(s=!0);o.wa=i}}s&&Lu(n)}function MS(t,e,n){const s=Ie(t),i=s.queries.get(e);if(i)for(const r of i.Sa)r.onError(n);s.queries.delete(e)}function Lu(t){t.Ca.forEach((e=>{e.next()}))}var xc,Sp;(Sp=xc||(xc={})).Ma="default",Sp.Cache="cache";class OS{constructor(e,n,s){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Qi(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Qi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==xc.Cache}}/**
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
 */class gv{constructor(e){this.key=e}}class mv{constructor(e){this.key=e}}class VS{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ne(),this.mutatedKeys=Ne(),this.eu=O_(e),this.tu=new Mi(this.eu)}get nu(){return this.Ya}ru(e,n){const s=n?n.iu:new Cp,i=n?n.tu:this.tu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((f,p)=>{const m=i.get(f),_=Za(this.query,p)?p:null,I=!!m&&this.mutatedKeys.has(m.key),w=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let S=!1;m&&_?m.data.isEqual(_.data)?I!==w&&(s.track({type:3,doc:_}),S=!0):this.su(m,_)||(s.track({type:2,doc:_}),S=!0,(c&&this.eu(_,c)>0||u&&this.eu(_,u)<0)&&(l=!0)):!m&&_?(s.track({type:0,doc:_}),S=!0):m&&!_&&(s.track({type:1,doc:m}),S=!0,(c||u)&&(l=!0)),S&&(_?(o=o.add(_),r=w?r.add(f):r.delete(f)):(o=o.delete(f),r=r.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),r=r.delete(f.key),s.track({type:1,doc:f})}return{tu:o,iu:s,Cs:l,mutatedKeys:r}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,i){const r=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((f,p)=>(function(_,I){const w=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e(20277,{Rt:S})}};return w(_)-w(I)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(s),i=i??!1;const l=n&&!i?this._u():[],c=this.Xa.size===0&&this.current&&!i?1:0,u=c!==this.Za;return this.Za=c,o.length!==0||u?{snapshot:new Qi(this.query,e.tu,r,o,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Cp,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ne(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const n=[];return e.forEach((s=>{this.Xa.has(s)||n.push(new mv(s))})),this.Xa.forEach((s=>{e.has(s)||n.push(new gv(s))})),n}cu(e){this.Ya=e.Qs,this.Xa=Ne();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Qi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Bu="SyncEngine";class LS{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class BS{constructor(e){this.key=e,this.hu=!1}}class FS{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new fi((l=>M_(l)),Xa),this.Iu=new Map,this.Eu=new Set,this.du=new st(pe.comparator),this.Au=new Map,this.Ru=new Su,this.Vu={},this.mu=new Map,this.fu=qi.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function US(t,e,n=!0){const s=wv(t);let i;const r=s.Tu.get(e);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.lu()):i=await _v(s,e,n,!0),i}async function $S(t,e){const n=wv(t);await _v(n,e,!0,!1)}async function _v(t,e,n,s){const i=await iS(t.localStore,Mn(e)),r=i.targetId,o=t.sharedClientState.addLocalQueryTarget(r,n);let l;return s&&(l=await HS(t,e,r,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&cv(t.remoteStore,i),l}async function HS(t,e,n,s,i){t.pu=(p,m,_)=>(async function(w,S,M,U){let $=S.view.ru(M);$.Cs&&($=await yp(w.localStore,S.query,!1).then((({documents:R})=>S.view.ru(R,$))));const G=U&&U.targetChanges.get(S.targetId),ie=U&&U.targetMismatches.get(S.targetId)!=null,we=S.view.applyChanges($,w.isPrimaryClient,G,ie);return Pp(w,S.targetId,we.au),we.snapshot})(t,p,m,_);const r=await yp(t.localStore,e,!0),o=new VS(e,r.Qs),l=o.ru(r.documents),c=fo.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),u=o.applyChanges(l,t.isPrimaryClient,c);Pp(t,n,u.au);const f=new LS(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function jS(t,e,n){const s=Ie(t),i=s.Tu.get(e),r=s.Iu.get(i.targetId);if(r.length>1)return s.Iu.set(i.targetId,r.filter((o=>!Xa(o,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await kc(s.localStore,i.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(i.targetId),n&&Du(s.remoteStore,i.targetId),Nc(s,i.targetId)})).catch(Zi)):(Nc(s,i.targetId),await kc(s.localStore,i.targetId,!0))}async function GS(t,e){const n=Ie(t),s=n.Tu.get(e),i=n.Iu.get(s.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Du(n.remoteStore,s.targetId))}async function qS(t,e,n){const s=XS(t);try{const i=await(function(o,l){const c=Ie(o),u=et.now(),f=l.reduce(((_,I)=>_.add(I.key)),Ne());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",(_=>{let I=os(),w=Ne();return c.Ns.getEntries(_,f).next((S=>{I=S,I.forEach(((M,U)=>{U.isValidDocument()||(w=w.add(M))}))})).next((()=>c.localDocuments.getOverlayedDocuments(_,I))).next((S=>{p=S;const M=[];for(const U of l){const $=sb(U,p.get(U.key).overlayedDocument);$!=null&&M.push(new pi(U.key,$,S_($.value.mapValue),es.exists(!0)))}return c.mutationQueue.addMutationBatch(_,u,M,l)})).next((S=>{m=S;const M=S.applyToLocalDocumentSet(p,w);return c.documentOverlayCache.saveOverlays(_,S.batchId,M)}))})).then((()=>({batchId:m.batchId,changes:L_(p)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),(function(o,l,c){let u=o.Vu[o.currentUser.toKey()];u||(u=new st(xe)),u=u.insert(l,c),o.Vu[o.currentUser.toKey()]=u})(s,i.batchId,n),await go(s,i.changes),await rl(s.remoteStore)}catch(i){const r=Vu(i,"Failed to persist write");n.reject(r)}}async function vv(t,e){const n=Ie(t);try{const s=await tS(n.localStore,e);e.targetChanges.forEach(((i,r)=>{const o=n.Au.get(r);o&&(He(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?He(o.hu,14607):i.removedDocuments.size>0&&(He(o.hu,42227),o.hu=!1))})),await go(n,s,e)}catch(s){await Zi(s)}}function Rp(t,e,n){const s=Ie(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.Tu.forEach(((r,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)})),(function(o,l){const c=Ie(o);c.onlineState=l;let u=!1;c.queries.forEach(((f,p)=>{for(const m of p.Sa)m.va(l)&&(u=!0)})),u&&Lu(c)})(s.eventManager,e),i.length&&s.Pu.H_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function QS(t,e,n){const s=Ie(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.Au.get(e),r=i&&i.key;if(r){let o=new st(pe.comparator);o=o.insert(r,Vt.newNoDocument(r,ye.min()));const l=Ne().add(r),c=new nl(ye.min(),new Map,new st(xe),o,l);await vv(s,c),s.du=s.du.remove(r),s.Au.delete(e),Fu(s)}else await kc(s.localStore,e,!1).then((()=>Nc(s,e,n))).catch(Zi)}async function zS(t,e){const n=Ie(t),s=e.batch.batchId;try{const i=await eS(n.localStore,e);Av(n,s,null),yv(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await go(n,i)}catch(i){await Zi(i)}}async function WS(t,e,n){const s=Ie(t);try{const i=await(function(o,l){const c=Ie(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next((p=>(He(p!==null,37113),f=p.keys(),c.mutationQueue.removeMutationBatch(u,p)))).next((()=>c.mutationQueue.performConsistencyCheck(u))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>c.localDocuments.getDocuments(u,f)))}))})(s.localStore,e);Av(s,e,n),yv(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await go(s,i)}catch(i){await Zi(i)}}function yv(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function Av(t,e,n){const s=Ie(t);let i=s.Vu[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.Vu[s.currentUser.toKey()]=i}}function Nc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Iu.get(e))t.Tu.delete(s),n&&t.Pu.yu(s,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((s=>{t.Ru.containsKey(s)||Iv(t,s)}))}function Iv(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Du(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Fu(t))}function Pp(t,e,n){for(const s of n)s instanceof gv?(t.Ru.addReference(s.key,e),KS(t,s)):s instanceof mv?(ae(Bu,"Document no longer in limbo: "+s.key),t.Ru.removeReference(s.key,e),t.Ru.containsKey(s.key)||Iv(t,s.key)):_e(19791,{wu:s})}function KS(t,e){const n=e.key,s=n.path.canonicalString();t.du.get(n)||t.Eu.has(s)||(ae(Bu,"New document in limbo: "+n),t.Eu.add(s),Fu(t))}function Fu(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new pe(tt.fromString(e)),s=t.fu.next();t.Au.set(s,new BS(n)),t.du=t.du.insert(n,s),cv(t.remoteStore,new Es(Mn(wu(n.path)),s,"TargetPurposeLimboResolution",Wa.ce))}}async function go(t,e,n){const s=Ie(t),i=[],r=[],o=[];s.Tu.isEmpty()||(s.Tu.forEach(((l,c)=>{o.push(s.pu(c,e,n).then((u=>{if((u||n)&&s.isPrimaryClient){const f=u?!u.fromCache:n?.targetChanges.get(c.targetId)?.current;s.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){i.push(u);const f=Pu.As(c.targetId,u);r.push(f)}})))})),await Promise.all(o),s.Pu.H_(i),await(async function(c,u){const f=Ie(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>Y.forEach(u,(m=>Y.forEach(m.Es,(_=>f.persistence.referenceDelegate.addReference(p,m.targetId,_))).next((()=>Y.forEach(m.ds,(_=>f.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))))))}catch(p){if(!er(p))throw p;ae(ku,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const _=f.Ms.get(m),I=_.snapshotVersion,w=_.withLastLimboFreeSnapshotVersion(I);f.Ms=f.Ms.insert(m,w)}}})(s.localStore,r))}async function YS(t,e){const n=Ie(t);if(!n.currentUser.isEqual(e)){ae(Bu,"User change. New user:",e.toKey());const s=await rv(n.localStore,e);n.currentUser=e,(function(r,o){r.mu.forEach((l=>{l.forEach((c=>{c.reject(new de(X.CANCELLED,o))}))})),r.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await go(n,s.Ls)}}function JS(t,e){const n=Ie(t),s=n.Au.get(e);if(s&&s.hu)return Ne().add(s.key);{let i=Ne();const r=n.Iu.get(e);if(!r)return i;for(const o of r){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function wv(t){const e=Ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=vv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=JS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=QS.bind(null,e),e.Pu.H_=NS.bind(null,e.eventManager),e.Pu.yu=MS.bind(null,e.eventManager),e}function XS(t){const e=Ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=WS.bind(null,e),e}class ba{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=sl(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return Zb(this.persistence,new Yb,e.initialUser,this.serializer)}Cu(e){return new iv(Ru.mi,this.serializer)}Du(e){return new oS}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ba.provider={build:()=>new ba};class ZS extends ba{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){He(this.persistence.referenceDelegate instanceof Ta,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Ob(s,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Kt.withCacheSize(this.cacheSizeBytes):Kt.DEFAULT;return new iv((s=>Ta.mi(s,n)),this.serializer)}}class Mc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Rp(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=YS.bind(null,this.syncEngine),await RS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new kS})()}createDatastore(e){const n=sl(e.databaseInfo.databaseId),s=(function(r){return new hS(r)})(e.databaseInfo);return(function(r,o,l,c){return new gS(r,o,l,c)})(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return(function(s,i,r,o,l){return new _S(s,i,r,o,l)})(this.localStore,this.datastore,e.asyncQueue,(n=>Rp(this.syncEngine,n,0)),(function(){return wp.v()?new wp:new aS})())}createSyncEngine(e,n){return(function(i,r,o,l,c,u,f){const p=new FS(i,r,o,l,c,u);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const s=Ie(n);ae(oi,"RemoteStore shutting down."),s.Ea.add(5),await po(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Mc.provider={build:()=>new Mc};/**
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
 */class eR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):rs("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
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
 */const Fs="FirestoreClient";class tR{constructor(e,n,s,i,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Mt.UNAUTHENTICATED,this.clientId=gu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(s,(async o=>{ae(Fs,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(s,(o=>(ae(Fs,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ps;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Vu(n,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Ql(t,e){t.asyncQueue.verifyOperationInProgress(),ae(Fs,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async i=>{s.isEqual(i)||(await rv(e.localStore,i),s=i)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function kp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await nR(t);ae(Fs,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((s=>Tp(e.remoteStore,s))),t.setAppCheckTokenChangeListener(((s,i)=>Tp(e.remoteStore,i))),t._onlineComponents=e}async function nR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ae(Fs,"Using user provided OfflineComponentProvider");try{await Ql(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(i){return i.name==="FirebaseError"?i.code===X.FAILED_PRECONDITION||i.code===X.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(n))throw n;$i("Error using user provided cache. Falling back to memory cache: "+n),await Ql(t,new ba)}}else ae(Fs,"Using default OfflineComponentProvider"),await Ql(t,new ZS(void 0));return t._offlineComponents}async function Ev(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ae(Fs,"Using user provided OnlineComponentProvider"),await kp(t,t._uninitializedComponentsProvider._online)):(ae(Fs,"Using default OnlineComponentProvider"),await kp(t,new Mc))),t._onlineComponents}function sR(t){return Ev(t).then((e=>e.syncEngine))}async function iR(t){const e=await Ev(t),n=e.eventManager;return n.onListen=US.bind(null,e.syncEngine),n.onUnlisten=jS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=$S.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=GS.bind(null,e.syncEngine),n}function rR(t,e,n={}){const s=new Ps;return t.asyncQueue.enqueueAndForget((async()=>(function(r,o,l,c,u){const f=new eR({next:m=>{f.Nu(),o.enqueueAndForget((()=>xS(r,p)));const _=m.docs.has(l);!_&&m.fromCache?u.reject(new de(X.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&c&&c.source==="server"?u.reject(new de(X.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new OS(wu(l.path),f,{includeMetadataChanges:!0,qa:!0});return DS(r,p)})(await iR(t),t.asyncQueue,e,n,s))),s.promise}/**
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
 */function Tv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Cv="firestore.googleapis.com",xp=!0;class Np{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new de(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Cv,this.ssl=xp}else this.host=e.host,this.ssl=e.ssl??xp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=sv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Nb)throw new de(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Tv(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new de(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new de(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new de(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,i){return s.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Uu{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Np({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new de(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new de(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Np(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new rC;switch(s.type){case"firstParty":return new cC(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new de(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=Dp.get(n);s&&(ae("ComponentProvider","Removing Datastore"),Dp.delete(n),s.terminate())})(this),Promise.resolve()}}function oR(t,e,n,s={}){t=Wr(t,Uu);const i=Ki(e),r=t._getSettings(),o={...r,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(wm(`https://${l}`),Em("Firestore",!0)),r.host!==Cv&&r.host!==l&&$i("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...r,host:l,ssl:i,emulatorOptions:s};if(!Ns(c,o)&&(t._setSettings(c),s.mockUserToken)){let u,f;if(typeof s.mockUserToken=="string")u=s.mockUserToken,f=Mt.MOCK_USER;else{u=Pw(s.mockUserToken,t._app?.options.projectId);const p=s.mockUserToken.sub||s.mockUserToken.user_id;if(!p)throw new de(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Mt(p)}t._authCredentials=new oC(new m_(u,f))}}/**
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
 */class $u{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new $u(this.firestore,e,this._query)}}class Tt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new to(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tt(this.firestore,e,this._key)}toJSON(){return{type:Tt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(uo(n,Tt._jsonSchema))return new Tt(e,s||null,new pe(tt.fromString(n.referencePath)))}}Tt._jsonSchemaVersion="firestore/documentReference/1.0",Tt._jsonSchema={type:ut("string",Tt._jsonSchemaVersion),referencePath:ut("string")};class to extends $u{constructor(e,n,s){super(e,n,wu(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new pe(e))}withConverter(e){return new to(this.firestore,e,this._path)}}function Hu(t,e,...n){if(t=Yt(t),arguments.length===1&&(e=gu.newId()),gC("doc","path",e),t instanceof Uu){const s=tt.fromString(e,...n);return zf(s),new Tt(t,null,new pe(s))}{if(!(t instanceof Tt||t instanceof to))throw new de(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(tt.fromString(e,...n));return zf(s),new Tt(t.firestore,t instanceof to?t.converter:null,new pe(s))}}/**
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
 */const Mp="AsyncQueue";class Op{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new av(this,"async_queue_retry"),this._c=()=>{const s=ql();s&&ae(Mp,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=ql();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=ql();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new Ps;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!er(e))throw e;ae(Mp,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,rs("INTERNAL UNHANDLED ERROR: ",Vp(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=Ou.createAndSchedule(this,e,n,s,(r=>this.hc(r)));return this.tc.push(i),i}uc(){this.nc&&_e(47125,{Pc:Vp(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Vp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class ju extends Uu{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new Op,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Op(e),this._firestoreClient=void 0,await e}}}function aR(t,e){const n=typeof t=="object"?t:su(),s=typeof t=="string"?t:_a,i=hi(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Sw("firestore");r&&oR(i,...r)}return i}function bv(t){if(t._terminated)throw new de(X.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||lR(t),t._firestoreClient}function lR(t){const e=t._freezeSettings(),n=(function(i,r,o,l){return new SC(i,r,o,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Tv(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)})(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new tR(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(i){const r=i?._online.build();return{_offline:i?._offline.build(r),_online:r}})(t._componentsProvider))}/**
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
 */class Sv{constructor(e){this._methodName=e}}/**
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
 */class Ln{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,i){if(s.length!==i.length)return!1;for(let r=0;r<s.length;++r)if(s[r]!==i[r])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ln._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(uo(e,Ln._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Ln(e.vectorValues);throw new de(X.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ln._jsonSchemaVersion="firestore/vectorValue/1.0",Ln._jsonSchema={type:ut("string",Ln._jsonSchemaVersion),vectorValues:ut("object")};/**
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
 */const cR=/^__.*__$/;class uR{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new pi(e,this.data,this.fieldMask,n,this.fieldTransforms):new ho(e,this.data,n,this.fieldTransforms)}}function Rv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e(40011,{Ac:t})}}class qu{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Rc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new qu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.gc(e),s}yc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Sa(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Rv(this.Ac)&&cR.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class hR{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||sl(e)}Cc(e,n,s,i=!1){return new qu({Ac:e,methodName:n,Dc:s,path:Rt.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function dR(t){const e=t._freezeSettings(),n=sl(t._databaseId);return new hR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function fR(t,e,n,s,i,r={}){const o=t.Cc(r.merge||r.mergeFields?2:0,e,n,i);xv("Data must be an object, but it was:",o,s);const l=kv(s,o);let c,u;if(r.merge)c=new vn(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const f=[];for(const p of r.mergeFields){const m=pR(e,p,n);if(!o.contains(m))throw new de(X.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);mR(f,m)||f.push(m)}c=new vn(f),u=o.fieldTransforms.filter((p=>c.covers(p.field)))}else c=null,u=o.fieldTransforms;return new uR(new an(l),c,u)}function Pv(t,e){if(Dv(t=Yt(t)))return xv("Unsupported field value:",e,t),kv(t,e);if(t instanceof Sv)return(function(s,i){if(!Rv(i.Ac))throw i.Sc(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,i){const r=[];let o=0;for(const l of s){let c=Pv(l,i.wc(o));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),o++}return{arrayValue:{values:r}}})(t,e)}return(function(s,i){if((s=Yt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return JC(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=et.fromDate(s);return{timestampValue:Ea(i.serializer,r)}}if(s instanceof et){const r=new et(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Ea(i.serializer,r)}}if(s instanceof Vn)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof ln)return{bytesValue:Y_(i.serializer,s._byteString)};if(s instanceof Tt){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:bu(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof Ln)return(function(o,l){return{mapValue:{fields:{[C_]:{stringValue:b_},[va]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw l.Sc("VectorValues must only contain numeric values.");return Eu(l.serializer,u)}))}}}}}})(s,i);throw i.Sc(`Unsupported field value: ${mu(s)}`)})(t,e)}function kv(t,e){const n={};return y_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):di(t,((s,i)=>{const r=Pv(i,e.mc(s));r!=null&&(n[s]=r)})),{mapValue:{fields:n}}}function Dv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof et||t instanceof Vn||t instanceof ln||t instanceof Tt||t instanceof Sv||t instanceof Ln)}function xv(t,e,n){if(!Dv(n)||!__(n)){const s=mu(n);throw s==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+s)}}function pR(t,e,n){if((e=Yt(e))instanceof Gu)return e._internalPath;if(typeof e=="string")return Nv(t,e);throw Sa("Field path arguments must be of type string or ",t,!1,void 0,n)}const gR=new RegExp("[~\\*/\\[\\]]");function Nv(t,e,n){if(e.search(gR)>=0)throw Sa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Gu(...e.split("."))._internalPath}catch{throw Sa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Sa(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new de(X.INVALID_ARGUMENT,l+t+c)}function mR(t,e){return t.some((n=>n.isEqual(e)))}/**
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
 */class Mv{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _R(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ov("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class _R extends Mv{data(){return super.data()}}function Ov(t,e){return typeof e=="string"?Nv(t,e):e instanceof Gu?e._internalPath:e._delegate._internalPath}class vR{convertValue(e,n="none"){switch(Ls(e)){case 0:return null;case 1:return e.booleanValue;case 2:return lt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Vs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw _e(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return di(e,((i,r)=>{s[i]=this.convertValue(r,n)})),s}convertVectorValue(e){const n=e.fields?.[va].arrayValue?.values?.map((s=>lt(s.doubleValue)));return new Ln(n)}convertGeoPoint(e){return new Vn(lt(e.latitude),lt(e.longitude))}convertArray(e,n){return(e.values||[]).map((s=>this.convertValue(s,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Ya(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Yr(e));default:return null}}convertTimestamp(e){const n=Os(e);return new et(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=tt.fromString(e);He(nv(s),9688,{name:e});const i=new Jr(s.get(1),s.get(3)),r=new pe(s.popFirst(5));return i.isEqual(n)||rs(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function yR(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class wr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ni extends Mv{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Yo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Ov("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new de(X.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ni._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ni._jsonSchemaVersion="firestore/documentSnapshot/1.0",ni._jsonSchema={type:ut("string",ni._jsonSchemaVersion),bundleSource:ut("string","DocumentSnapshot"),bundleName:ut("string"),bundle:ut("string")};class Yo extends ni{data(e={}){return super.data(e)}}class Br{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new wr(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((s=>{e.call(n,new Yo(this._firestore,this._userDataWriter,s.key,s,new wr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new de(X.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map((l=>{const c=new Yo(i._firestore,i._userDataWriter,l.doc.key,l.doc,new wr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((l=>r||l.type!==3)).map((l=>{const c=new Yo(i._firestore,i._userDataWriter,l.doc.key,l.doc,new wr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:AR(l.type),doc:c,oldIndex:u,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new de(X.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Br._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=gu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],i=[];return this.docs.forEach((r=>{r._document!==null&&(n.push(r._document),s.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),i.push(r.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function AR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e(61501,{type:t})}}/**
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
 */function Qu(t){t=Wr(t,Tt);const e=Wr(t.firestore,ju);return rR(bv(e),t._key).then((n=>ER(e,t,n)))}Br._jsonSchemaVersion="firestore/querySnapshot/1.0",Br._jsonSchema={type:ut("string",Br._jsonSchemaVersion),bundleSource:ut("string","QuerySnapshot"),bundleName:ut("string"),bundle:ut("string")};class IR extends vR{constructor(e){super(),this.firestore=e}convertBytes(e){return new ln(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,n)}}function Oc(t,e,n){t=Wr(t,Tt);const s=Wr(t.firestore,ju),i=yR(t.converter,e,n);return wR(s,[fR(dR(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,es.none())])}function wR(t,e){return(function(s,i){const r=new Ps;return s.asyncQueue.enqueueAndForget((async()=>qS(await sR(s),i,r))),r.promise})(bv(t),e)}function ER(t,e,n){const s=n.docs.get(e._key),i=new IR(t);return new ni(t,i,e._key,s,new wr(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Xi=i})(Yi),Un(new wn("firestore",((s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),l=new ju(new aC(s.getProvider("auth-internal")),new uC(o,s.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new de(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Jr(u.options.projectId,f)})(o,i),o);return r={useFetchStreams:n,...r},l._setSettings(r),l}),"PUBLIC").setMultipleInstances(!0)),hn(jf,Gf,e),hn(jf,Gf,"esm2020")})();const Vv="@firebase/installations",zu="0.6.19";/**
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
 */const Lv=1e4,Bv=`w:${zu}`,Fv="FIS_v2",TR="https://firebaseinstallations.googleapis.com/v1",CR=3600*1e3,bR="installations",SR="Installations";/**
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
 */const RR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ai=new ui(bR,SR,RR);function Uv(t){return t instanceof En&&t.code.includes("request-failed")}/**
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
 */function $v({projectId:t}){return`${TR}/projects/${t}/installations`}function Hv(t){return{token:t.token,requestStatus:2,expiresIn:kR(t.expiresIn),creationTime:Date.now()}}async function jv(t,e){const s=(await e.json()).error;return ai.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Gv({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function PR(t,{refreshToken:e}){const n=Gv(t);return n.append("Authorization",DR(e)),n}async function qv(t){const e=await t();return e.status>=500&&e.status<600?t():e}function kR(t){return Number(t.replace("s","000"))}function DR(t){return`${Fv} ${t}`}/**
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
 */async function xR({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=$v(t),i=Gv(t),r=e.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Fv,appId:t.appId,sdkVersion:Bv},l={method:"POST",headers:i,body:JSON.stringify(o)},c=await qv(()=>fetch(s,l));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Hv(u.authToken)}}else throw await jv("Create Installation",c)}/**
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
 */function Qv(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function NR(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const MR=/^[cdef][\w-]{21}$/,Vc="";function OR(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=VR(t);return MR.test(n)?n:Vc}catch{return Vc}}function VR(t){return NR(t).substr(0,22)}/**
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
 */const zv=new Map;function Wv(t,e){const n=ol(t);Kv(n,e),LR(n,e)}function Kv(t,e){const n=zv.get(t);if(n)for(const s of n)s(e)}function LR(t,e){const n=BR();n&&n.postMessage({key:t,fid:e}),FR()}let Zs=null;function BR(){return!Zs&&"BroadcastChannel"in self&&(Zs=new BroadcastChannel("[Firebase] FID Change"),Zs.onmessage=t=>{Kv(t.data.key,t.data.fid)}),Zs}function FR(){zv.size===0&&Zs&&(Zs.close(),Zs=null)}/**
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
 */const UR="firebase-installations-database",$R=1,li="firebase-installations-store";let zl=null;function Wu(){return zl||(zl=Pm(UR,$R,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(li)}}})),zl}async function Ra(t,e){const n=ol(t),i=(await Wu()).transaction(li,"readwrite"),r=i.objectStore(li),o=await r.get(n);return await r.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Wv(t,e.fid),e}async function Yv(t){const e=ol(t),s=(await Wu()).transaction(li,"readwrite");await s.objectStore(li).delete(e),await s.done}async function al(t,e){const n=ol(t),i=(await Wu()).transaction(li,"readwrite"),r=i.objectStore(li),o=await r.get(n),l=e(o);return l===void 0?await r.delete(n):await r.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&Wv(t,l.fid),l}/**
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
 */async function Ku(t){let e;const n=await al(t.appConfig,s=>{const i=HR(s),r=jR(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===Vc?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function HR(t){const e=t||{fid:OR(),registrationStatus:0};return Jv(e)}function jR(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ai.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=GR(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:qR(t)}:{installationEntry:e}}async function GR(t,e){try{const n=await xR(t,e);return Ra(t.appConfig,n)}catch(n){throw Uv(n)&&n.customData.serverCode===409?await Yv(t.appConfig):await Ra(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function qR(t){let e=await Lp(t.appConfig);for(;e.registrationStatus===1;)await Qv(100),e=await Lp(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Ku(t);return s||n}return e}function Lp(t){return al(t,e=>{if(!e)throw ai.create("installation-not-found");return Jv(e)})}function Jv(t){return QR(t)?{fid:t.fid,registrationStatus:0}:t}function QR(t){return t.registrationStatus===1&&t.registrationTime+Lv<Date.now()}/**
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
 */async function zR({appConfig:t,heartbeatServiceProvider:e},n){const s=WR(t,n),i=PR(t,n),r=e.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:Bv,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},c=await qv(()=>fetch(s,l));if(c.ok){const u=await c.json();return Hv(u)}else throw await jv("Generate Auth Token",c)}function WR(t,{fid:e}){return`${$v(t)}/${e}/authTokens:generate`}/**
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
 */async function Yu(t,e=!1){let n;const s=await al(t.appConfig,r=>{if(!Xv(r))throw ai.create("not-registered");const o=r.authToken;if(!e&&JR(o))return r;if(o.requestStatus===1)return n=KR(t,e),r;{if(!navigator.onLine)throw ai.create("app-offline");const l=ZR(r);return n=YR(t,l),l}});return n?await n:s.authToken}async function KR(t,e){let n=await Bp(t.appConfig);for(;n.authToken.requestStatus===1;)await Qv(100),n=await Bp(t.appConfig);const s=n.authToken;return s.requestStatus===0?Yu(t,e):s}function Bp(t){return al(t,e=>{if(!Xv(e))throw ai.create("not-registered");const n=e.authToken;return eP(n)?{...e,authToken:{requestStatus:0}}:e})}async function YR(t,e){try{const n=await zR(t,e),s={...e,authToken:n};return await Ra(t.appConfig,s),n}catch(n){if(Uv(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Yv(t.appConfig);else{const s={...e,authToken:{requestStatus:0}};await Ra(t.appConfig,s)}throw n}}function Xv(t){return t!==void 0&&t.registrationStatus===2}function JR(t){return t.requestStatus===2&&!XR(t)}function XR(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+CR}function ZR(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function eP(t){return t.requestStatus===1&&t.requestTime+Lv<Date.now()}/**
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
 */async function tP(t){const e=t,{installationEntry:n,registrationPromise:s}=await Ku(e);return s?s.catch(console.error):Yu(e).catch(console.error),n.fid}/**
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
 */async function nP(t,e=!1){const n=t;return await sP(n),(await Yu(n,e)).token}async function sP(t){const{registrationPromise:e}=await Ku(t);e&&await e}/**
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
 */function iP(t){if(!t||!t.options)throw Wl("App Configuration");if(!t.name)throw Wl("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Wl(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Wl(t){return ai.create("missing-app-config-values",{valueName:t})}/**
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
 */const Zv="installations",rP="installations-internal",oP=t=>{const e=t.getProvider("app").getImmediate(),n=iP(e),s=hi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},aP=t=>{const e=t.getProvider("app").getImmediate(),n=hi(e,Zv).getImmediate();return{getId:()=>tP(n),getToken:i=>nP(n,i)}};function lP(){Un(new wn(Zv,oP,"PUBLIC")),Un(new wn(rP,aP,"PRIVATE"))}lP();hn(Vv,zu);hn(Vv,zu,"esm2020");/**
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
 */const Pa="analytics",cP="firebase_id",uP="origin",hP=60*1e3,dP="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ju="https://www.googletagmanager.com/gtag/js";/**
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
 */const fP={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},sn=new ui("analytics","Analytics",fP);/**
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
 */function pP(t){if(!t.startsWith(Ju)){const e=sn.create("invalid-gtag-resource",{gtagURL:t});return Gt.warn(e.message),""}return t}function ey(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function gP(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function mP(t,e){const n=gP("firebase-js-sdk-policy",{createScriptURL:pP}),s=document.createElement("script"),i=`${Ju}?l=${t}&id=${e}`;s.src=n?n?.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function _P(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function vP(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const c=(await ey(n)).find(u=>u.measurementId===i);c&&await e[c.appId]}}catch(l){Gt.error(l)}t("config",i,r)}async function yP(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await ey(n);for(const c of o){const u=l.find(p=>p.measurementId===c),f=u&&e[u.appId];if(f)r.push(f);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){Gt.error(r)}}function AP(t,e,n,s){async function i(r,...o){try{if(r==="event"){const[l,c]=o;await yP(t,e,n,l,c)}else if(r==="config"){const[l,c]=o;await vP(t,e,n,s,l,c)}else if(r==="consent"){const[l,c]=o;t("consent",l,c)}else if(r==="get"){const[l,c,u]=o;t("get",l,c,u)}else if(r==="set"){const[l]=o;t("set",l)}else t(r,...o)}catch(l){Gt.error(l)}}return i}function IP(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=AP(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function wP(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ju)&&n.src.includes(t))return n;return null}/**
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
 */const EP=30,TP=1e3;class CP{constructor(e={},n=TP){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ty=new CP;function bP(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function SP(t){const{appId:e,apiKey:n}=t,s={method:"GET",headers:bP(n)},i=dP.replace("{app-id}",e),r=await fetch(i,s);if(r.status!==200&&r.status!==304){let o="";try{const l=await r.json();l.error?.message&&(o=l.error.message)}catch{}throw sn.create("config-fetch-failed",{httpStatus:r.status,responseMessage:o})}return r.json()}async function RP(t,e=ty,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw sn.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw sn.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new DP;return setTimeout(async()=>{l.abort()},hP),ny({appId:s,apiKey:i,measurementId:r},o,l,e)}async function ny(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=ty){const{appId:r,measurementId:o}=t;try{await PP(s,e)}catch(l){if(o)return Gt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:r,measurementId:o};throw l}try{const l=await SP(t);return i.deleteThrottleMetadata(r),l}catch(l){const c=l;if(!kP(c)){if(i.deleteThrottleMetadata(r),o)return Gt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:r,measurementId:o};throw l}const u=Number(c?.customData?.httpStatus)===503?mf(n,i.intervalMillis,EP):mf(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(r,f),Gt.debug(`Calling attemptFetch again in ${u} millis`),ny(t,f,s,i)}}function PP(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s(sn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function kP(t){if(!(t instanceof En)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class DP{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function xP(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,o={...s,send_to:r};t("event",n,o)}}async function NP(t,e,n,s){if(s&&s.global){const i={};for(const r of Object.keys(n))i[`user_properties.${r}`]=n[r];return t("set",i),Promise.resolve()}else{const i=await e;t("config",i,{update:!0,user_properties:n})}}/**
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
 */async function MP(){if(Cm())try{await bm()}catch(t){return Gt.warn(sn.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return Gt.warn(sn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function OP(t,e,n,s,i,r,o){const l=RP(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&Gt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Gt.error(m)),e.push(l);const c=MP().then(m=>{if(m)return s.getId()}),[u,f]=await Promise.all([l,c]);wP(r)||mP(r,u.measurementId),i("js",new Date);const p=o?.config??{};return p[uP]="firebase",p.update=!0,f!=null&&(p[cP]=f),i("config",u.measurementId,p),u.measurementId}/**
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
 */class VP{constructor(e){this.app=e}_delete(){return delete Oi[this.app.options.appId],Promise.resolve()}}let Oi={},Fp=[];const Up={};let Kl="dataLayer",LP="gtag",$p,Xu,Hp=!1;function BP(){const t=[];if(Tm()&&t.push("This is a browser extension environment."),Bw()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=sn.create("invalid-analytics-context",{errorInfo:e});Gt.warn(n.message)}}function FP(t,e,n){BP();const s=t.options.appId;if(!s)throw sn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Gt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw sn.create("no-api-key");if(Oi[s]!=null)throw sn.create("already-exists",{id:s});if(!Hp){_P(Kl);const{wrappedGtag:r,gtagCore:o}=IP(Oi,Fp,Up,Kl,LP);Xu=r,$p=o,Hp=!0}return Oi[s]=OP(t,Fp,Up,e,$p,Kl,n),new VP(t)}function UP(t=su()){t=Yt(t);const e=hi(t,Pa);return e.isInitialized()?e.getImmediate():$P(t)}function $P(t,e={}){const n=hi(t,Pa);if(n.isInitialized()){const i=n.getImmediate();if(Ns(e,n.getOptions()))return i;throw sn.create("already-initialized")}return n.initialize({options:e})}function HP(t,e,n){t=Yt(t),NP(Xu,Oi[t.app.options.appId],e,n).catch(s=>Gt.error(s))}function jP(t,e,n,s){t=Yt(t),xP(Xu,Oi[t.app.options.appId],e,n,s).catch(i=>Gt.error(i))}const jp="@firebase/analytics",Gp="0.10.19";function GP(){Un(new wn(Pa,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return FP(s,i,n)},"PUBLIC")),Un(new wn("analytics-internal",t,"PRIVATE")),hn(jp,Gp),hn(jp,Gp,"esm2020");function t(e){try{const n=e.getProvider(Pa).getImmediate();return{logEvent:(s,i,r)=>jP(n,s,i,r),setUserProperties:(s,i)=>HP(n,s,i)}}catch(n){throw sn.create("interop-component-reg-failed",{reason:n})}}}GP();const qP={apiKey:"AIzaSyCwvJ8cUWLZPZ26i1deIAXnoLuzToIcB70",authDomain:"tuldung.firebaseapp.com",projectId:"tuldung",storageBucket:"tuldung.firebasestorage.app",messagingSenderId:"1086524417813",appId:"1:1086524417813:web:8199da4b7cebcaffc86b1c",measurementId:"G-EGV6XDKG9R"},Zu=km(qP),sy=sC(Zu),eh=aR(Zu);let QP=null;if(typeof window<"u")try{QP=UP(Zu)}catch(t){console.warn("Analytics 초기화 실패:",t)}const zP=new Yn,WP=async()=>{try{const e=(await dT(sy,zP)).user,n=Hu(eh,"users",e.uid);return(await Qu(n)).exists()||await Oc(n,{email:e.email,displayName:e.displayName,photoURL:e.photoURL,createdAt:new Date().toISOString(),gameData:{level:1,coins:0,totalCoin:0,catFragments:50,nftCount:0,miningCats:[],huntingCats:[],explorationCats:[],productionCats:[],inventory:[]}}),{success:!0,user:e}}catch(t){return console.error("Google 로그인 오류:",t),{success:!1,error:t.message}}},KP=async()=>{try{return await QE(sy),{success:!0}}catch(t){return console.error("로그아웃 오류:",t),{success:!1,error:t.message}}},YP=async t=>{try{const e=Hu(eh,"users",t),n=await Qu(e);return n.exists()?n.data():null}catch(e){return console.error("사용자 데이터 가져오기 오류:",e),null}},JP=async(t,e)=>{try{const n=Hu(eh,"users",t),s=await Qu(n);if(s.exists()){const i=s.data();await Oc(n,{...i,gameData:{...i.gameData,...e}},{merge:!0})}else await Oc(n,{gameData:e});return{success:!0}}catch(n){return console.error("게임 데이터 업데이트 오류:",n),{success:!1,error:n.message}}},XP=(t,e)=>({id:t.uid,email:t.email,name:t.displayName||t.email?.split("@")[0]||"사용자",photoURL:t.photoURL,gameData:e||{level:1,coins:0,totalCoin:0,catFragments:50,nftCount:0,miningCats:[],huntingCats:[],explorationCats:[],productionCats:[],inventory:[]}}),iy=async()=>{try{const t=await WP();if(t.success){const e=t.user,n=await YP(e.uid),s=XP(e,n?.gameData);return sessionStorage.setItem("currentUser",JSON.stringify(s)),{success:!0,user:s}}else return{success:!1,error:t.error}}catch(t){return console.error("Google 로그인 오류:",t),{success:!1,error:t.message}}},ry=async()=>{try{return await KP(),sessionStorage.removeItem("currentUser"),{success:!0}}catch(t){return console.error("로그아웃 오류:",t),{success:!1,error:t.message}}},ZP=async(t,e)=>{try{const n=await JP(t,e);if(n.success){const s=JSON.parse(sessionStorage.getItem("currentUser")||"{}");s.id===t&&(s.gameData={...s.gameData,...e},sessionStorage.setItem("currentUser",JSON.stringify(s)))}return n}catch(n){return console.error("게임 데이터 업데이트 오류:",n),{success:!1,error:n.message}}},e2=Object.freeze(Object.defineProperty({__proto__:null,loginWithGoogle:iy,logout:ry,updateGameData:ZP},Symbol.toStringTag,{value:"Module"})),t2={class:"login-screen"},n2={class:"input-group"},s2={class:"input-container"},i2={class:"input-group"},r2={class:"input-container"},o2=["type"],a2={key:0,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},l2={key:1,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},c2=["disabled"],u2={key:0,class:"btn-content"},h2={key:1,class:"btn-content"},d2={key:2,class:"btn-content"},f2=["disabled"],p2={key:0,class:"google-icon",viewBox:"0 0 24 24"},g2={key:1,class:"spinner-small"},m2={__name:"LoginScreen",setup(t){const e=qt(),{setWalletConnected:n,setLoading:s}=gm(),i=V(!1),r=V(!1),o=V(!1),l=V(!1),c=()=>{e.push("/signup")},u=V(""),f=V(""),p=async I=>{if(I.preventDefault(),!u.value.trim()||!f.value.trim()){alert("ID와 비밀번호를 모두 입력해주세요.");return}i.value=!0,s(!0);const S=JSON.parse(localStorage.getItem("users")||"[]").find(M=>M.email===u.value&&M.password===f.value);setTimeout(()=>{i.value=!1,S?(r.value=!0,sessionStorage.setItem("currentUser",JSON.stringify(S)),n(S.email,`${S.gameData.coins} 코인`),s(!1),setTimeout(()=>{e.push("/main")},1e3)):(s(!1),alert("이메일 또는 비밀번호가 올바르지 않습니다."))},2e3)},m=()=>{l.value=!l.value},_=async()=>{o.value=!0,s(!0);try{const I=await iy();I.success?(r.value=!0,n(I.user.email,`${I.user.gameData?.coins||0} 코인`),s(!1),setTimeout(()=>{e.push("/main")},1e3)):(s(!1),alert(`로그인 실패: ${I.error}`))}catch(I){s(!1),alert(`로그인 오류: ${I.message}`)}finally{o.value=!1}};return dt(()=>{const I=document.querySelector(".loginCont");I&&(I.style.opacity="0",I.style.transform="translateY(30px)",setTimeout(()=>{I.style.transition="all 0.6s ease",I.style.opacity="1",I.style.transform="translateY(0)"},100))}),(I,w)=>(L(),F("div",t2,[w[11]||(w[11]=h("h1",{class:"login-title"},"로그인",-1)),h("form",{onSubmit:p,class:"login-form"},[h("div",n2,[w[3]||(w[3]=h("label",{class:"input-label"},"아이디(이메일계정)",-1)),h("div",s2,[w[2]||(w[2]=h("svg",{class:"input-icon",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),h("polyline",{points:"22,6 12,13 2,6"})],-1)),mn(h("input",{type:"email","onUpdate:modelValue":w[0]||(w[0]=S=>u.value=S),class:"input-field",placeholder:"이메일을 입력하세요",required:""},null,512),[[Zn,u.value]])])]),h("div",i2,[w[7]||(w[7]=h("label",{class:"input-label"},"비밀번호",-1)),h("div",r2,[w[6]||(w[6]=h("svg",{class:"input-icon",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),h("circle",{cx:"12",cy:"16",r:"1"}),h("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})],-1)),mn(h("input",{type:l.value?"text":"password","onUpdate:modelValue":w[1]||(w[1]=S=>f.value=S),class:"input-field",placeholder:"비밀번호를 입력하세요",required:""},null,8,o2),[[tm,f.value]]),h("button",{type:"button",class:"password-toggle",onClick:m},[l.value?(L(),F("svg",l2,[...w[5]||(w[5]=[h("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"},null,-1),h("line",{x1:"1",y1:"1",x2:"23",y2:"23"},null,-1)])])):(L(),F("svg",a2,[...w[4]||(w[4]=[h("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},null,-1),h("circle",{cx:"12",cy:"12",r:"3"},null,-1)])]))])])]),h("button",{type:"submit",disabled:i.value||r.value,class:be(["login-button",{connecting:i.value,connected:r.value}])},[!i.value&&!r.value?(L(),F("div",u2," 로그인 ")):ue("",!0),i.value?(L(),F("div",h2,[...w[8]||(w[8]=[h("div",{class:"spinner-small"},null,-1),jr(" 로그인 중... ",-1)])])):ue("",!0),r.value?(L(),F("div",d2,[...w[9]||(w[9]=[h("svg",{class:"check-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor"},[h("path",{d:"M20 6L9 17l-5-5"})],-1),jr(" 성공! ",-1)])])):ue("",!0)],10,c2)],32),w[12]||(w[12]=h("div",{class:"divider-section"},[h("div",{class:"divider-line"}),h("span",{class:"divider-text"},"또는"),h("div",{class:"divider-line"})],-1)),h("button",{onClick:_,disabled:o.value||i.value||r.value,class:be(["google-login-button",{loading:o.value}])},[o.value?ue("",!0):(L(),F("svg",p2,[...w[10]||(w[10]=[h("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"},null,-1),h("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"},null,-1),h("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"},null,-1),h("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"},null,-1)])])),o.value?(L(),F("div",g2)):ue("",!0),h("span",null,H(o.value?"로그인 중...":"Google로 로그인"),1)],10,f2),h("div",{class:"signup-link"},[h("button",{onClick:c,class:"signup-btn"}," 회원 가입하기 ")])]))}},_2=ft(m2,[["__scopeId","data-v-a6947b46"]]),v2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAz4SURBVHgB7d3ddRRXFobhIyJgMpAzwBGgicDjCOwQyMA4AiYDk8FMBmIiMI5AygBn0FMFjQ3or3+q6uy9z/OsVUtccK3vrVPVrdYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAjXDQA7tjtds+nH1fT9XK65n9ffvNfbqfr/XT9cXFx8a4BADnNoz9dP0/X9e44N9P123RdNgAgj2m8X03Xh935/iMEACC4eaxPuOM/xOsGAMSz+3Tcv8Rd/0Nudk4DACCO+Q59t40bEQAAAWw4/iIAACLoMP5fRsDzBgBsq+P4f/amAQDbCTD+n101AGB9uzjjP7tuAMC6drHG/7OrBgCsYxdz/GdOAejOHwMCStp9+ia+X1pc/7i4uPizQSfPGkAxCcZ/9kODjgQAUEqS8Z9dNehIAABlJBr/2YsGHQkAoIRk4z/zrYB05SVAIL2E4//RxaRBJ04AgNSyjj/0JgCAtIw/nE4AACkVGP/bBh0JACCdInf+tw06EgBAKoWO/d836EgAAGkUe+b/rkFHPoICpFDwhT9/C4CunAAA4RUc/7fGn96cAAChFf2o3/dTAHgHgK6cAABhFR3/t8afCJwAACEV/pKf76YAuG3QmRMAIJzC4//a+BOFEwAglMLj/99p/H9sEIQAAMIoPP7zM/9/evOfSAQAEILxh20JAKA74w/bEwBAV8Yf+hAAQDfGH/oRAEAXxh/6EgDA5ow/9CcAgE0Zf4hBAACbMf4QhwAANmH8IRYBAKzO+EM8AgBYlfGHmAQAsBrjD3EJAGAVxh9iEwDA4ow/xCcAgEUZf8hBAACLMf6QhwAAFmH8IRcBAJzN+EM+AgA4i/GHnAQAcDLjD3kJAOAkxh9yEwDA0Yw/5CcAgKMYf6hBAAAHM/5QhwAADmL8oRYBADzJ+EM9AgB4lPGHmgQA8CDjD3UJAOBexh9qEwDAHcYf6hMAwFeMP4xBAAB/Mf4wDgEAfGT8YSwCADD+MCABAIMz/jAmAQADM/4wLgEAgzL+MDYBAAMy/oAAgMEYf2AmAGAgxh/4TADAIIw/8CUBAAMw/sC3BAAUZ/yB+wgAKMz4Aw8RAFCU8QceIwCgIOMPPEUAQDHGHziEAIBCjD9wKAEARRh/4BgCAAow/sCxBAAkZ/yBUwgASMz4A6cSAJCU8QfOIQAgIeMPnEsAQDLGH1iCAIBEjD+wFAEASRh/YEkCABIw/sDSBAAEZ/yBNQgACMz4A2sRABCU8QfWJAAgIOMPrE0AQDDGH9iCAIBAjD+wFQEAQRh/YEsCAAIw/sDWBAB0ZvyBHgQAdGT8gV4EAHRi/IGeBAB0YPyB3gQAbMz4AxEIANiQ8QeiEACwEeMPRCIAYAPGH4hGAMDKjD8QkQCAFRl/ICoBACsx/kBkAgBWYPyB6AQALMz4AxkIAFiQ8QeyEACwEOMPZCIAYAHGH8hGAMCZjD+QkQCAMxh/ICsBACcy/kBmAgBOYPyB7AQAHMn4AxUIADiC8QeqEABwIOMPVCIA4ADGH6hGAMATjD9QkQCARxh/oCoBAA8w/kBlAgDuYfyB6gQAfMP4AyMQAPAF4w+MQgDAnvEHRiIAoBl/YDwCgOEZf2BEAoChGX9gVAKAYRl/YGQCgCEZf2B0AoDhGH8AAcBgjD/AJwKAYRh/gL8JAIZg/AG+JgAoz/gD3CUAKM34A9xPAFCW8Qd4mACgJOMP8DgBQDnGH+BpAoBSjD/AYQQAZRh/gMMJAEow/gDHEQCkZ/wBjicASM34A5xGAJCW8Qc4nQAgJeMPcB4BQDrGH+B8AoBUjD/AMgQAaRh/gOUIAFIw/gDLEgCEZ/wBlicACM34A6xDABCW8QdYjwAgJOMPsC4BQDjGH2B9AoBQpvF/Nf140+ox/kAoAoAwpvG/nH7ctHqMPxDOswZxXLd6jD8QkgAghP1z/8tWi/EHwhIAdLc/+v+p1WL8gdAEABFctVp3/8YfCM9LgHQ3nQDML/5dthqMP5CCEwC6msb/RTP+AJsTAPT2stVg/IFUBAC9XbX8jD+QjgCgt8uWm/EHUhIA9HbZ8jL+QFo+BUBXu0nLyfgDqTkBAIABCQB6y3oHPX988Xo6wHjeABISAPSW+QhdBABpCQB6e99yEwFASgKA3t61/EQAkI4AoLc/Wg0iAEjFxwDpzh8DAtieEwAieNvqcBIApOAEgO72YzmfAlQaTScBQGhOAOhuP5L/brU4CQBCcwJACPuh/L3VeRfgMycBQEhOAAhhP5A/ttxfDHQfJwFASAKAMKYImO+Wf231iAAgHAFAKFMEzO8CvG71iAAgFO8AENI0lL+0miHgnQAgBAFAWCIAYD0CgNBEAMA6BADhiQCA5QkAUhABAMsSAKQhAgCWIwBIRQQALEMAkI4IADifACAlEQBwHgFAWiIA4HQCgNREAMBpBADpiQCA4wkAShABAMcRAJQhAgAOJwAoRQQAHEYAUI4IAHiaAKAkEQDwOAFAWSIA4GECgNJEAMD9BADliQCAuwQAQxABAF8TAAxDBAD8TQAwFBEA8IkAYDgiAEAAMCgRAIxOADAsEQCMTAAwNBEAjEoAMDwRAIxIAEATAcB4BADsiQBgJAIAviACgFEIAPiGCABGIADgHiIAqE4AwANEAFCZAIBHiACgKgEATxABQEUCAA4gAoBqBAAcSAQAlQgAOIIIAKoQAHAkEQBUIADgBCIAyE4AwIlEAJCZAIAziAAgKwEAZxIBQEYCABYgAoBsBAAsRAQAmQgAWJAIALIQALAwEQBkIABgBSIAiE4AwEpEABCZAIAViQAgKgEAKxMBQEQCADYgAoBoBABsRAQAkQgA2JAIAKIQALAxEQBEIACgAxEA9CYAoBMRAPQkAKAjEQD0IgCgMxEA9CAAIAARAGxNAEAQIgDYkgCAQEQAsBUBAMGIAGALAgACEgHA2gQABCUCgDUJAAhMBABrEQAQnAgA1iAAIAERACxNAEASIgBYkgCAREQAsBQBAMmIAGAJAgASEgHAuQQAJCUCgHMIAEhMBACnEgCQnAgATiEAoAARABxLAEARIgA4hgCAQkQAcCgBAMWIAOAQAgAKEgHAUwQAFCUCgMcIAChMBAAPEQBQnAgA7iMAYAAiAPiWAIBBiADgSwIABiICgM8EAAxGBAAzAQADEgGAAIBBiQAYmwCAgYkAGJcAgMGJABiTAABEAAxIAAAfiQAYiwAA/iICYBwCAPiKCIAxCADgDhEA9QkA4F4iAGoTAMCDRADUJQCAR4kAqEkAAE8SAVCPAAAOIgKgFgEAHEwEQB0CADiKCIAaBABwNBEA+QkA4CQiAHITAMDJRADkJQCAs4gAyEkAAGcTAZCPAAAWIQIgFwEALEYEQB4CAFiUCIAcBACwOBEA8QkAYBUiAGITAMBqRADEJQCAVYkAiEkAAKsTARCPAAA2IQIgFgEAbEYEQBwCANiUCIAYBACwOREA/QkAoAsRAH0JAKAbEQD9CACgKxEAfQgAoDsRANsTAEAIIgC2JQCAMEQAbOdZAwhiGshfW80AeDFdvzUIRAAAoRSOgH9NJxyvGgThEQAQUtHHAfMjgO+nyLlt0JkTACCkoicBz5tHAQQhAICwikbA1XS6cdWgMwEAhFY0An5q0Jl3AIAUir0TML8L8J2PBdKTEwAghWInAfO7AC8bdCQAgDSKRcBVg44EAJBKoQh40aAjAQCkUyQCLht05CVAIK3sLwZOIeN3MN04AQDSKvy1wbA6AQCkJgLgNAIASC9pBNw26EgAACUkjIDbBh0JAKCMZBFw26AjAQCUkigC3jUAYFnzRwR3sV02AGB5u7gRcN2gM48AgLICPw542wCAde1inQTcNABgG7s4EfBDAwC2s+sfAW8aALC9jhFwM13PGwDQR4cIuNn52B8A9LdhBNwYfwAIZBrmV9P1Ybee340/AAQ0D/T+Ln1pb3ae+QNAbNNY/7xQCFxP18sGAOSxD4Hr3XE+7O/4DT9pXDQA7tgf38+D/mJ/fXmc/+f+ej9fFxcX/2sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABU9n/G+xQHTFSybwAAAABJRU5ErkJggg==",y2={class:"signup-screen"},A2={class:"input-group"},I2={class:"input-container"},w2={class:"input-group"},E2={class:"input-container"},T2={class:"input-group"},C2={class:"input-container"},b2={class:"input-group"},S2={class:"input-container"},R2=["type"],P2={key:0,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},k2={key:1,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},D2={__name:"SignupScreen",setup(t){const e=qt(),n=V({name:"",phone:"",email:"",password:""}),s=V(!1),i=()=>{e.go(-1)},r=async l=>{if(l.preventDefault(),!n.value.name.trim()||!n.value.phone.trim()||!n.value.email.trim()||!n.value.password.trim()){alert("모든 필드를 입력해주세요.");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.value.email)){alert("올바른 이메일 형식을 입력해주세요.");return}if(n.value.password.length<6){alert("비밀번호는 6자 이상이어야 합니다.");return}const u=JSON.parse(localStorage.getItem("users")||"[]");if(u.some(m=>m.email===n.value.email)){alert("이미 가입된 이메일입니다.");return}const p={id:Date.now(),name:n.value.name,phone:n.value.phone,email:n.value.email,password:n.value.password,createdAt:new Date().toISOString(),gameData:{level:1,coins:0,nftCount:0}};u.push(p),localStorage.setItem("users",JSON.stringify(u)),console.log("회원가입 완료:",p),alert("회원가입이 완료되었습니다!"),e.push("/login")},o=()=>{s.value=!s.value};return(l,c)=>(L(),F("div",y2,[h("button",{class:"back-button",onClick:i},[...c[4]||(c[4]=[h("img",{src:v2,alt:"back-button",width:"20px"},null,-1)])]),c[16]||(c[16]=h("h1",{class:"signup-title"},"회원가입",-1)),h("form",{onSubmit:r,class:"signup-form"},[h("div",A2,[c[6]||(c[6]=h("label",{class:"input-label"},"이름",-1)),h("div",I2,[c[5]||(c[5]=h("svg",{class:"input-icon",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),h("polyline",{points:"22,6 12,13 2,6"})],-1)),mn(h("input",{type:"text","onUpdate:modelValue":c[0]||(c[0]=u=>n.value.name=u),class:"input-field",placeholder:"이름을 입력하세요",required:""},null,512),[[Zn,n.value.name]])])]),h("div",w2,[c[8]||(c[8]=h("label",{class:"input-label"},"전화번호",-1)),h("div",E2,[c[7]||(c[7]=h("svg",{class:"input-icon",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})],-1)),mn(h("input",{type:"tel","onUpdate:modelValue":c[1]||(c[1]=u=>n.value.phone=u),class:"input-field",placeholder:"전화번호를 입력하세요",required:""},null,512),[[Zn,n.value.phone]])])]),h("div",T2,[c[10]||(c[10]=h("label",{class:"input-label"},"이메일",-1)),h("div",C2,[c[9]||(c[9]=h("svg",{class:"input-icon",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),h("polyline",{points:"22,6 12,13 2,6"})],-1)),mn(h("input",{type:"email","onUpdate:modelValue":c[2]||(c[2]=u=>n.value.email=u),class:"input-field",placeholder:"이메일을 입력하세요",required:""},null,512),[[Zn,n.value.email]])])]),h("div",b2,[c[14]||(c[14]=h("label",{class:"input-label"},"비밀번호",-1)),h("div",S2,[c[13]||(c[13]=h("svg",{class:"input-icon",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),h("circle",{cx:"12",cy:"16",r:"1"}),h("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})],-1)),mn(h("input",{type:s.value?"text":"password","onUpdate:modelValue":c[3]||(c[3]=u=>n.value.password=u),class:"input-field",placeholder:"비밀번호를 입력하세요",required:""},null,8,R2),[[tm,n.value.password]]),h("button",{type:"button",class:"password-toggle",onClick:o},[s.value?(L(),F("svg",k2,[...c[12]||(c[12]=[h("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"},null,-1),h("line",{x1:"1",y1:"1",x2:"23",y2:"23"},null,-1)])])):(L(),F("svg",P2,[...c[11]||(c[11]=[h("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},null,-1),h("circle",{cx:"12",cy:"12",r:"3"},null,-1)])]))])])]),c[15]||(c[15]=h("button",{type:"submit",class:"signup-button"}," 회원가입 ",-1))],32)]))}},x2=ft(D2,[["__scopeId","data-v-be588a4f"]]),th="/tdl/assets/cat1-B_B8VE2s.png",nh="/tdl/assets/cat10-B8AgbljH.png",sh="/tdl/assets/cat11-0fJ86MBw.png",ih="/tdl/assets/cat12-9jWhGICw.png",rh="/tdl/assets/cat13-CHa4qUOi.png",oh="/tdl/assets/cat14-CLrryeLM.png",ah="/tdl/assets/cat15-CCtjZj8M.png",lh="/tdl/assets/cat16-CPcR6OS6.png",ch="/tdl/assets/cat17-EO7rjjtM.png",uh="/tdl/assets/cat18-BGDiOePY.png",hh="/tdl/assets/cat19-DxCDtOnA.png",dh="/tdl/assets/cat2-0Y4nM6HW.png",fh="/tdl/assets/cat20-Bz9cd08a.png",ph="/tdl/assets/cat21-ECTsze2s.png",gh="/tdl/assets/cat22-BvGXhyri.png",mh="/tdl/assets/cat23-DqU2B_M0.png",_h="/tdl/assets/cat24-7cWYLYDN.png",vh="/tdl/assets/cat25-Cy0mQl6B.png",yh="/tdl/assets/cat26-Bk4tHCwE.png",Ah="/tdl/assets/cat27-CvtmCEXM.png",Ih="/tdl/assets/cat28-B9s1wmgo.png",wh="/tdl/assets/cat29-D_79HmBj.png",Eh="/tdl/assets/cat3-Dp7OJMB9.png",Th="/tdl/assets/cat30-Cx-HRp0m.png",Ch="/tdl/assets/cat4-DHiuXgwB.png",bh="/tdl/assets/cat5-BvXrfJAO.png",Sh="/tdl/assets/cat6-DZOiQoo1.png",Rh="/tdl/assets/cat7-CeDKF7mR.png",Ph="/tdl/assets/cat8-mjRhb3fS.png",kh="/tdl/assets/cat9-Bzb-Egme.png",Dh="/tdl/assets/catProfile01-gY0Djz81.png",xh="/tdl/assets/catProfile02-Cesbpkj5.png",Nh="/tdl/assets/cat_ico-Csdt_Q01.png",N2="/tdl/assets/tul1-CuZ0qR5D.png",M2="/tdl/assets/tul2-Cj7OkHg6.png",O2="/tdl/assets/tul3-CaPMxBJ-.png",V2="/tdl/assets/tul5-CQc-0WLd.png",L2="/tdl/assets/tul6-COB-AGqQ.png",B2="/tdl/assets/mainPoint-D-oASrAx.png",oy="/tdl/assets/mainCoin-CGuum4ry.png",F2="/tdl/assets/lighting-DDPCD7_E.png",ay="/tdl/assets/point_ico-CuS5zUpS.png",ly="/tdl/assets/coin_ico-COVm5STX.png",cy="/tdl/assets/cat_ico-Csdt_Q01.png",U2="/tdl/assets/notice-Bkd9hh4q.png",$2="/tdl/assets/setting-CxNpDL9x.png",H2="modulepreload",j2=function(t){return"/tdl/"+t},qp={},G2=function(e,n,s){let i=Promise.resolve();if(n&&n.length>0){let c=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");i=c(n.map(u=>{if(u=j2(u),u in qp)return;qp[u]=!0;const f=u.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const m=document.createElement("link");if(m.rel=f?"stylesheet":H2,f||(m.as="script"),m.crossOrigin="",m.href=u,l&&m.setAttribute("nonce",l),document.head.appendChild(m),f)return new Promise((_,I)=>{m.addEventListener("load",_),m.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${u}`)))})}))}function r(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&r(l.reason);return e().catch(r)})},q2=()=>JSON.parse(localStorage.getItem("users")||"[]"),nt=()=>{const t=sessionStorage.getItem("currentUser");return t?JSON.parse(t):null},pn=async(t,e)=>{const n=nt();if(n&&(n.id?.length>20||n.uid))try{const{updateGameData:r}=await G2(async()=>{const{updateGameData:l}=await Promise.resolve().then(()=>e2);return{updateGameData:l}},void 0);return(await r(t,e)).success}catch(r){console.error("Firebase 업데이트 실패, localStorage로 폴백:",r)}const s=q2(),i=s.findIndex(r=>r.id===t);return i!==-1?(s[i].gameData={...s[i].gameData,...e},localStorage.setItem("users",JSON.stringify(s)),n&&n.id===t&&(n.gameData={...n.gameData,...e},sessionStorage.setItem("currentUser",JSON.stringify(n))),!0):!1},Q2=(t,e)=>pn(t,{coins:e}),ka=(t,e,n)=>pn(t,{coins:e,totalCoin:n}),Qp=()=>{sessionStorage.removeItem("currentUser")},z2=()=>localStorage.getItem("appLanguage")||"한국어",uy=()=>{const t=z2();return{ko:{home:"홈",exchange:"교환소",quest:"퀘스트",inventory:"인벤토리",factory:"제작소",mining:"채굴",hunting:"사냥",exploration:"탐험",production:"생산",back:"← 뒤로",settings:"설정",notification:"알림"},en:{home:"Home",exchange:"Exchange",quest:"Quest",inventory:"Inventory",factory:"Factory",mining:"Mining",hunting:"Hunting",exploration:"Exploration",production:"Production",back:"← Back",settings:"Settings",notification:"Notification"}}[t==="한국어"?"ko":"en"]},W2={class:"headerCont"},K2={class:"headerBar"},Y2={class:"headerValue"},J2={class:"headerValue"},X2={class:"headerValue"},Z2={class:"headerValue"},ek={__name:"Header",setup(t){const e=V(localStorage.getItem("appLanguage")||"한국어");je(()=>uy());const n=qt(),s=V(0),i=V(0),r=V(50),o=V(4e3),l=V(4e3),c=()=>{const S=new Date().toDateString(),M=localStorage.getItem("energyLastDate"),U=localStorage.getItem("currentEnergy");if(M!==S)o.value=l.value,localStorage.setItem("energyLastDate",S),localStorage.setItem("currentEnergy",l.value.toString());else if(U){const $=parseInt(U)||0;o.value=Math.max(0,Math.min($,l.value))}else o.value=0},u=()=>{const S=nt();S&&(s.value=S.gameData?.coins||0,i.value=S.gameData?.totalCoin||0,r.value=S.gameData?.catFragments||S.gameData?.catCount||50),c()};V(!1);const f=()=>{n.push("/settings")},p=()=>{n.push("/notification")},m=()=>{n.push("/shop")};let _=null,I=null;dt(()=>{u(),_=setInterval(()=>{const S=localStorage.getItem("appLanguage")||"한국어";S!==e.value&&(e.value=S)},100),I=setInterval(()=>{u()},500),window.addEventListener("userDataUpdated",u)}),Wi(()=>{_&&clearInterval(_),I&&clearInterval(I),window.removeEventListener("userDataUpdated",u)});const w=S=>S>=1e9?(S/1e9).toFixed(1).replace(/\.0$/,"")+"G":S>=1e6?(S/1e6).toFixed(1).replace(/\.0$/,"")+"M":S>=1e4?(S/1e3).toFixed(1).replace(/\.0$/,"")+"K":S.toLocaleString();return(S,M)=>(L(),F("header",null,[h("div",W2,[h("div",K2,[h("button",{class:"headerItem energyItem",onClick:m},[M[0]||(M[0]=h("img",{src:F2,alt:"에너지",class:"energyIcon"},null,-1)),h("span",Y2,H(w(o.value)),1)]),M[6]||(M[6]=h("div",{class:"divider"},null,-1)),h("button",{class:"headerItem clickableItem",onClick:m},[M[1]||(M[1]=h("img",{src:ay,alt:"P",class:"pointIcon"},null,-1)),h("span",J2,H(w(s.value)),1)]),M[7]||(M[7]=h("div",{class:"divider"},null,-1)),h("button",{class:"headerItem clickableItem",onClick:m},[M[2]||(M[2]=h("img",{src:ly,alt:"C",class:"coinIcon"},null,-1)),h("span",X2,H(w(i.value)),1)]),M[8]||(M[8]=h("div",{class:"divider"},null,-1)),h("button",{class:"headerItem clickableItem",onClick:m},[M[3]||(M[3]=h("img",{src:cy,alt:"고양이",class:"catIcon"},null,-1)),h("span",Z2,H(r.value),1)]),M[9]||(M[9]=h("div",{class:"divider"},null,-1)),h("button",{class:"headerIconBtn notifi",onClick:p},[...M[4]||(M[4]=[h("img",{src:U2,alt:"알림",class:"icon-img"},null,-1)])]),M[10]||(M[10]=h("div",{class:"divider"},null,-1)),h("button",{class:"headerIconBtn menuBtn",onClick:f},[...M[5]||(M[5]=[h("img",{src:$2,alt:"설정",class:"icon-img"},null,-1)])])])])]))}},Qt=ft(ek,[["__scopeId","data-v-21b40d0f"]]),tk="/tdl/assets/bottom001-BEtDIm8X.png",nk="/tdl/assets/bottom001_on-DT187QNm.png",sk="/tdl/assets/bottom002-DzQ3N6uP.png",ik="/tdl/assets/bottom002_on-C1N0vVp8.png",rk="/tdl/assets/bottom003-BvgU7nGk.png",ok="/tdl/assets/bottom003_on-Df8s6MrC.png",ak="/tdl/assets/bottom004-CWodmmKt.png",lk="/tdl/assets/bottom004_on-D8X_vvyV.png",ck="/tdl/assets/bottom005-CX2HIylp.png",uk="/tdl/assets/bottom005_on-DYZvET-x.png",hk={class:"footerCont"},dk={class:"footerBar"},fk=["onClick"],pk={class:"tabContent"},gk=["src","alt"],mk={class:"tabLabel"},_k={key:0,class:"activeIndicator"},vk={__name:"Footer",setup(t){const e=qt(),n=V("home"),s=V(localStorage.getItem("appLanguage")||"한국어"),i=je(()=>uy()),r=f=>{f.key==="appLanguage"&&(s.value=f.newValue||"한국어")},o=()=>{switch(e.currentRoute.value.path){case"/main":n.value="home";break;case"/exchange":n.value="exchange";break;case"/quest":n.value="quest";break;case"/inventory":n.value="inventory";break;case"/factory":n.value="factory";break;default:n.value="home"}};let l=null;dt(()=>{o(),window.addEventListener("storage",r),l=setInterval(()=>{const f=localStorage.getItem("appLanguage")||"한국어";f!==s.value&&(s.value=f)},100)}),Wi(()=>{window.removeEventListener("storage",r),l&&clearInterval(l)}),Cs(()=>e.currentRoute.value.path,()=>{o()}),Cs(s,()=>{});const c=je(()=>[{id:"home",img:tk,imgActive:nk,label:i.value.home},{id:"exchange",img:sk,imgActive:ik,label:i.value.exchange},{id:"quest",img:rk,imgActive:ok,label:i.value.quest},{id:"inventory",img:ak,imgActive:lk,label:i.value.inventory},{id:"factory",img:ck,imgActive:uk,label:i.value.factory}]),u=f=>{switch(n.value=f,f){case"home":e.push("/main");break;case"exchange":e.push("/exchange");break;case"quest":e.push("/quest");break;case"inventory":e.push("/inventory");break;case"factory":e.push("/factory");break}};return(f,p)=>(L(),F("footer",null,[h("div",hk,[p[0]||(p[0]=h("div",{class:"footerBackground"},null,-1)),h("div",dk,[(L(!0),F(Ce,null,Be(c.value,m=>(L(),F("div",{key:m.id,class:be(["tabItem",{active:n.value===m.id}]),onClick:_=>u(m.id)},[h("div",pk,[h("img",{src:n.value===m.id?m.imgActive:m.img,alt:m.label,class:"tabIcon"},null,8,gk),h("span",mk,H(m.label),1)]),n.value===m.id?(L(),F("div",_k)):ue("",!0)],10,fk))),128))])])]))}},zt=ft(vk,[["__scopeId","data-v-5284f664"]]),yk={class:"mainScreen"},Ak={class:"mainContent"},Ik={key:0,class:"mainMenuNew"},wk={class:"totalStats"},Ek={class:"totalPoint"},Tk={class:"statValue"},Ck={class:"statNumber"},bk={class:"totalCoin"},Sk={class:"statValue"},Rk={class:"statNumber"},Pk={class:"gameModeGrid"},kk={key:1,class:"miningMode"},Dk={class:"pageHeader"},xk={class:"totalPointsDisplay"},Nk={class:"miningButtonContainer"},Mk={key:1,class:"completeMessageContainer"},Ok={class:"energySection"},Vk={class:"energyInfo"},Lk={class:"energyText"},Bk={class:"energyBar"},Fk={class:"miningCatsSection"},Uk={class:"catsListScroll"},$k=["onClick"],Hk={key:0,class:"catLevel"},jk={key:1,class:"catImage"},Gk=["src"],qk={key:2,class:"catStars"},Qk={key:3,class:"emptySlotContent"},zk={key:2,class:"miningMode"},Wk={class:"pageHeader"},Kk={class:"totalPointsDisplay"},Yk={class:"miningButtonContainer"},Jk={key:1,class:"completeMessageContainer"},Xk={class:"energySection"},Zk={class:"energyInfo"},eD={class:"energyText"},tD={class:"energyBar"},nD={class:"miningCatsSection"},sD={class:"catsListScroll"},iD=["onClick"],rD={key:0,class:"catLevel"},oD={key:1,class:"catImage"},aD=["src"],lD={key:2,class:"catStars"},cD={key:3,class:"emptySlotContent"},uD={key:3,class:"miningMode"},hD={class:"pageHeader"},dD={class:"totalPointsDisplay"},fD={class:"miningButtonContainer"},pD={key:1,class:"completeMessageContainer"},gD={class:"energySection"},mD={class:"energyInfo"},_D={class:"energyText"},vD={class:"energyBar"},yD={class:"miningCatsSection"},AD={class:"catsListScroll"},ID=["onClick"],wD={key:0,class:"catLevel"},ED={key:1,class:"catImage"},TD=["src"],CD={key:2,class:"catStars"},bD={key:3,class:"emptySlotContent"},SD={key:4,class:"miningMode"},RD={class:"pageHeader"},PD={class:"totalPointsDisplay"},kD={class:"miningButtonContainer"},DD={key:1,class:"completeMessageContainer"},xD={class:"energySection"},ND={class:"energyInfo"},MD={class:"energyText"},OD={class:"energyBar"},VD={class:"miningCatsSection"},LD={class:"catsListScroll"},BD=["onClick"],FD={key:0,class:"catLevel"},UD={key:1,class:"catImage"},$D=["src"],HD={key:2,class:"catStars"},jD={key:3,class:"emptySlotContent"},GD={key:0,class:"speechBubbles"},qD={key:1,class:"catEmojis"},QD=["src"],zD={class:"catSelectPopupBody"},WD={key:0,class:"removeCatSection"},KD={class:"availableCatsGrid"},YD=["onClick"],JD={class:"availableCatImage"},XD=["src"],ZD={class:"availableCatInfo"},ex={class:"availableCatName"},tx={class:"availableCatLevel"},nx={class:"availableCatStars"},sx={__name:"MainScreen",setup(t){const e=P=>P>=1e9?(P/1e9).toFixed(1).replace(/\.0$/,"")+"B":P>=1e6?(P/1e6).toFixed(1).replace(/\.0$/,"")+"M":P>=1e4?(P/1e3).toFixed(1).replace(/\.0$/,"")+"K":P.toLocaleString(),n=qt(),s=V(null),i=V("main"),r=V(0),o=V(0),l=V(0),c=V(50),u=V(50),f=V([]),p=V([]),m=V(null),_=V(0),I=V(!1),w=V(!0),S=V(0),M=V(!1),U=V(!0),$=V(0),G=V(!1),ie=V(!0),we=V(0),R=V(!1),T=V(!0),b=P=>{i.value=P,_.value=0,I.value=!1,w.value=!0,S.value=0,M.value=!1,U.value=!0,$.value=0,G.value=!1,ie.value=!0,we.value=0,R.value=!1,T.value=!0},D=()=>{n.currentRoute.value.path==="/main"&&(i.value="main")};dt(()=>{s.value=nt(),s.value&&(o.value=s.value.gameData?.coins||0,l.value=0,r.value=o.value,u.value=s.value.gameData?.catFragments||50,s.value.gameData?.miningCats&&(We.value=s.value.gameData.miningCats),s.value.gameData?.huntingCats&&(fe.value=s.value.gameData.huntingCats),s.value.gameData?.explorationCats&&(y.value=s.value.gameData.explorationCats),s.value.gameData?.productionCats&&(C.value=s.value.gameData.productionCats)),it(),n.afterEach(D);try{m.value=new Audio,m.value.src=new URL("/tdl/assets/clickbgm-BvbCQtA-.mp3",import.meta.url).href,m.value.volume=.3}catch{console.log("클릭 사운드 파일을 찾을 수 없습니다.")}const P=()=>{!k()&&m.value&&(m.value.pause(),m.value.currentTime=0)};window.addEventListener("soundSettingChanged",P),q("mining"),q("hunting"),q("exploration"),q("production"),Wi(()=>{n.afterEach(D),Z(),window.removeEventListener("soundSettingChanged",P)})});const k=()=>{const P=localStorage.getItem("soundEnabled");return P!==null?P==="true":!0},O=P=>{if(m.value&&k()&&(m.value.currentTime=0,m.value.play().catch(()=>{})),E.value<Ct.value){alert("에너지가 부족합니다!");return}if(Ve()){if(P==="mining")if(_.value++,_.value>=10){r.value+=100,_.value=0,I.value=!0,w.value=!1;const A=Math.random();let x=0;if(A<.3?x=1:A<.4&&(x=2),x>0){u.value+=x;for(let ge=0;ge<x;ge++){const Pe=Math.floor(Math.random()*6)+1,Ye=Math.min(window.innerWidth||500,500),Je=window.innerHeight||800,Ge=60,Xe=30,Le={id:Date.now()+ge,x:Math.random()*(Ye-Ge-Xe*2)+Xe,y:Math.random()*(Je-Ge-Xe*2-200)+100,imageId:Pe};p.value.push(Le),setTimeout(()=>{const ke=p.value.findIndex(rt=>rt.id===Le.id);ke>-1&&p.value.splice(ke,1)},2e3)}}s.value&&pn(s.value.id,{coins:r.value,catFragments:u.value});const Q=Math.min(window.innerWidth||500,500),J=window.innerHeight||800,ee=220,re=60,le=20,ce={id:Date.now(),text:"채굴 완료! 100원 획득!",x:Math.random()*(Q-ee-le*2)+le,y:Math.random()*(J-re-le*2-200)+100};f.value.push(ce),setTimeout(()=>{const ge=f.value.findIndex(Pe=>Pe.id===ce.id);ge>-1&&f.value.splice(ge,1)},3e3),setTimeout(()=>{I.value=!1,w.value=!0},1500)}else{const A=Math.min(window.innerWidth||500,500),x=window.innerHeight||800,Q=220,J=60,ee=20,re={id:Date.now(),text:`채굴 진행: ${_.value}/10`,x:Math.random()*(A-Q-ee*2)+ee,y:Math.random()*(x-J-ee*2-200)+100};f.value.push(re),setTimeout(()=>{const le=f.value.findIndex(ce=>ce.id===re.id);le>-1&&f.value.splice(le,1)},2e3)}else if(P==="exploration")if(S.value++,S.value>=10){r.value+=100,S.value=0,M.value=!0,U.value=!1;const A=Math.random();let x=0;if(A<.3?x=1:A<.4&&(x=2),x>0){u.value+=x;for(let ge=0;ge<x;ge++){const Pe=Math.floor(Math.random()*6)+1,Ye=Math.min(window.innerWidth||500,500),Je=window.innerHeight||800,Ge=60,Xe=30,Le={id:Date.now()+ge,x:Math.random()*(Ye-Ge-Xe*2)+Xe,y:Math.random()*(Je-Ge-Xe*2-200)+100,imageId:Pe};p.value.push(Le),setTimeout(()=>{const ke=p.value.findIndex(rt=>rt.id===Le.id);ke>-1&&p.value.splice(ke,1)},2e3)}}s.value&&pn(s.value.id,{coins:r.value,catFragments:u.value});const Q=Math.min(window.innerWidth||500,500),J=window.innerHeight||800,ee=220,re=60,le=20,ce={id:Date.now(),text:"탐험 완료! 100원 획득!",x:Math.random()*(Q-ee-le*2)+le,y:Math.random()*(J-re-le*2-200)+100};f.value.push(ce),setTimeout(()=>{const ge=f.value.findIndex(Pe=>Pe.id===ce.id);ge>-1&&f.value.splice(ge,1)},3e3),setTimeout(()=>{M.value=!1,U.value=!0},1500)}else{const A=Math.min(window.innerWidth||500,500),x=window.innerHeight||800,Q=220,J=60,ee=20,re={id:Date.now(),text:`탐험 진행: ${S.value}/10`,x:Math.random()*(A-Q-ee*2)+ee,y:Math.random()*(x-J-ee*2-200)+100};f.value.push(re),setTimeout(()=>{const le=f.value.findIndex(ce=>ce.id===re.id);le>-1&&f.value.splice(le,1)},2e3)}else if(P==="hunting")if($.value++,$.value>=10){r.value+=100,$.value=0,G.value=!0,ie.value=!1;const A=Math.random();let x=0;if(A<.3?x=1:A<.4&&(x=2),x>0){u.value+=x;for(let ge=0;ge<x;ge++){const Pe=Math.floor(Math.random()*6)+1,Ye=Math.min(window.innerWidth||500,500),Je=window.innerHeight||800,Ge=60,Xe=30,Le={id:Date.now()+ge,x:Math.random()*(Ye-Ge-Xe*2)+Xe,y:Math.random()*(Je-Ge-Xe*2-200)+100,imageId:Pe};p.value.push(Le),setTimeout(()=>{const ke=p.value.findIndex(rt=>rt.id===Le.id);ke>-1&&p.value.splice(ke,1)},2e3)}}s.value&&pn(s.value.id,{coins:r.value,catFragments:u.value});const Q=Math.min(window.innerWidth||500,500),J=window.innerHeight||800,ee=220,re=60,le=20,ce={id:Date.now(),text:"사냥 완료! 100원 획득!",x:Math.random()*(Q-ee-le*2)+le,y:Math.random()*(J-re-le*2-200)+100};f.value.push(ce),setTimeout(()=>{const ge=f.value.findIndex(Pe=>Pe.id===ce.id);ge>-1&&f.value.splice(ge,1)},3e3),setTimeout(()=>{G.value=!1,ie.value=!0},1500)}else{const A=Math.min(window.innerWidth||500,500),x=window.innerHeight||800,Q=220,J=60,ee=20,re={id:Date.now(),text:`사냥 진행: ${$.value}/10`,x:Math.random()*(A-Q-ee*2)+ee,y:Math.random()*(x-J-ee*2-200)+100};f.value.push(re),setTimeout(()=>{const le=f.value.findIndex(ce=>ce.id===re.id);le>-1&&f.value.splice(le,1)},2e3)}else if(P==="production")if(we.value++,we.value>=10){r.value+=100,we.value=0,R.value=!0,T.value=!1;const A=Math.random();let x=0;if(A<.3?x=1:A<.4&&(x=2),x>0){u.value+=x;for(let ge=0;ge<x;ge++){const Pe=Math.floor(Math.random()*6)+1,Ye=Math.min(window.innerWidth||500,500),Je=window.innerHeight||800,Ge=60,Xe=30,Le={id:Date.now()+ge,x:Math.random()*(Ye-Ge-Xe*2)+Xe,y:Math.random()*(Je-Ge-Xe*2-200)+100,imageId:Pe};p.value.push(Le),setTimeout(()=>{const ke=p.value.findIndex(rt=>rt.id===Le.id);ke>-1&&p.value.splice(ke,1)},2e3)}}s.value&&pn(s.value.id,{coins:r.value,catFragments:u.value});const Q=Math.min(window.innerWidth||500,500),J=window.innerHeight||800,ee=220,re=60,le=20,ce={id:Date.now(),text:"생산 완료! 100원 획득!",x:Math.random()*(Q-ee-le*2)+le,y:Math.random()*(J-re-le*2-200)+100};f.value.push(ce),setTimeout(()=>{const ge=f.value.findIndex(Pe=>Pe.id===ce.id);ge>-1&&f.value.splice(ge,1)},3e3),setTimeout(()=>{R.value=!1,T.value=!0},1500)}else{const A=Math.min(window.innerWidth||500,500),x=window.innerHeight||800,Q=220,J=60,ee=20,re={id:Date.now(),text:`생산 진행: ${we.value}/10`,x:Math.random()*(A-Q-ee*2)+ee,y:Math.random()*(x-J-ee*2-200)+100};f.value.push(re),setTimeout(()=>{const le=f.value.findIndex(ce=>ce.id===re.id);le>-1&&f.value.splice(le,1)},2e3)}}};V(1),V(0),V(!1),V({stone:0,iron:0,gold:0,diamond:0});const E=V(4e3),Oe=V(4e3),Ct=V(1),it=()=>{const P=new Date().toDateString(),A=localStorage.getItem("energyLastDate"),x=localStorage.getItem("currentEnergy");if(A!==P)E.value=Oe.value,localStorage.setItem("energyLastDate",P),localStorage.setItem("currentEnergy",Oe.value.toString());else if(x){const Q=parseInt(x)||0;E.value=Math.max(0,Math.min(Q,Oe.value))}else E.value=0},Ve=(P=Ct.value)=>E.value>=P?(E.value=Math.max(0,E.value-P),localStorage.setItem("currentEnergy",E.value.toString()),localStorage.setItem("energyLastDate",new Date().toDateString()),!0):!1,Te=P=>{try{return new URL(Object.assign({"../assets/img/cat1.png":th,"../assets/img/cat10.png":nh,"../assets/img/cat11.png":sh,"../assets/img/cat12.png":ih,"../assets/img/cat13.png":rh,"../assets/img/cat14.png":oh,"../assets/img/cat15.png":ah,"../assets/img/cat16.png":lh,"../assets/img/cat17.png":ch,"../assets/img/cat18.png":uh,"../assets/img/cat19.png":hh,"../assets/img/cat2.png":dh,"../assets/img/cat20.png":fh,"../assets/img/cat21.png":ph,"../assets/img/cat22.png":gh,"../assets/img/cat23.png":mh,"../assets/img/cat24.png":_h,"../assets/img/cat25.png":vh,"../assets/img/cat26.png":yh,"../assets/img/cat27.png":Ah,"../assets/img/cat28.png":Ih,"../assets/img/cat29.png":wh,"../assets/img/cat3.png":Eh,"../assets/img/cat30.png":Th,"../assets/img/cat4.png":Ch,"../assets/img/cat5.png":bh,"../assets/img/cat6.png":Sh,"../assets/img/cat7.png":Rh,"../assets/img/cat8.png":Ph,"../assets/img/cat9.png":kh,"../assets/img/catProfile01.png":Dh,"../assets/img/catProfile02.png":xh,"../assets/img/cat_ico.png":Nh})[`../assets/img/cat${P}.png`],import.meta.url).href}catch{return`/src/assets/img/cat${P}.png`}},Dt=P=>{try{return new URL(Object.assign({"../assets/img/tul1.png":N2,"../assets/img/tul2.png":M2,"../assets/img/tul3.png":O2,"../assets/img/tul5.png":V2,"../assets/img/tul6.png":L2})[`../assets/img/tul${P}.png`],import.meta.url).href}catch{return`/src/assets/img/tul${P}.png`}},We=V([null,null,null,null,null,null]),pt=V(!1),Re=V(-1),rn=V([]),Jt=()=>{const P=new Set;return We.value.forEach(A=>{A&&A.id&&P.add(A.id)}),fe.value.forEach(A=>{A&&A.id&&P.add(A.id)}),y.value.forEach(A=>{A&&A.id&&P.add(A.id)}),C.value.forEach(A=>{A&&A.id&&P.add(A.id)}),P},Xt=()=>{const P=nt();if(P){const A=P.gameData?.inventory||[],Q=[...[{id:1,name:"Robot",stars:1,level:1,imageId:1},{id:2,name:"Style",stars:1,level:1,imageId:2},{id:3,name:"Suit",stars:1,level:1,imageId:3},{id:4,name:"Tech",stars:1,level:1,imageId:4},{id:5,name:"Army",stars:1,level:1,imageId:5},{id:6,name:"Detective",stars:1,level:1,imageId:6},{id:7,name:"Scholar",stars:1,level:1,imageId:7},{id:8,name:"White",stars:1,level:1,imageId:8},{id:9,name:"Green",stars:1,level:1,imageId:9},{id:10,name:"Blue",stars:1,level:1,imageId:10},{id:11,name:"Red",stars:1,level:1,imageId:11},{id:12,name:"Shirt",stars:1,level:1,imageId:12},{id:13,name:"Ninja",stars:1,level:1,imageId:13},{id:14,name:"Knight",stars:1,level:1,imageId:14},{id:15,name:"Pirate",stars:1,level:1,imageId:15},{id:16,name:"Sailor",stars:1,level:1,imageId:16},{id:17,name:"Sport",stars:1,level:1,imageId:17},{id:18,name:"Cafe",stars:1,level:1,imageId:18},{id:19,name:"Chef",stars:1,level:1,imageId:19},{id:20,name:"Fisher",stars:1,level:1,imageId:20},{id:21,name:"Farmer",stars:1,level:1,imageId:21},{id:22,name:"Doctor",stars:1,level:1,imageId:22},{id:23,name:"Teacher",stars:1,level:1,imageId:23},{id:24,name:"Artist",stars:1,level:1,imageId:24}]];A.forEach(re=>{const le=Q.findIndex(ce=>ce.id===re.id);le>-1?Q[le]={...Q[le],...re}:Q.push(re)});const J=Jt(),ee=gt();ee&&ee.id&&J.delete(ee.id),rn.value=Q.filter(re=>!J.has(re.id))}},gt=()=>{const P=N.value,A=Re.value;if(A<0||A>=6)return null;let x=null;return P==="mining"?x=We.value:P==="hunting"?x=fe.value:P==="exploration"?x=y.value:P==="production"&&(x=C.value),x&&x[A]?x[A]:null},K=(P,A,x)=>{N.value=A,Xt(),Re.value=P,pt.value=!0},oe=P=>{if(Re.value>=0&&Re.value<6){const A={id:P.id,level:P.level||1,stars:P.stars||1,imageId:P.imageId||P.id,name:P.name};let x=[];N.value==="mining"?x=We.value:N.value==="hunting"?x=fe.value:N.value==="exploration"?x=y.value:N.value==="production"&&(x=C.value);const Q=x.findIndex((ee,re)=>ee&&ee.id===P.id&&re!==Re.value);if(Q!==-1){x[Q]=null;const ee=N.value,re=`${ee}_${Q}_${P.id}`;W.value[ee][re]&&delete W.value[ee][re]}N.value==="mining"?(We.value[Re.value]=A,q("mining")):N.value==="hunting"?(fe.value[Re.value]=A,q("hunting")):N.value==="exploration"?(y.value[Re.value]=A,q("exploration")):N.value==="production"&&(C.value[Re.value]=A,q("production"));const J=nt();J&&pn(J.id,{miningCats:We.value,huntingCats:fe.value,explorationCats:y.value,productionCats:C.value})}pt.value=!1,Re.value=-1,N.value="mining"},se=()=>{if(Re.value>=0&&Re.value<6){const P=N.value;let A=[];P==="mining"?A=We.value:P==="hunting"?A=fe.value:P==="exploration"?A=y.value:P==="production"&&(A=C.value);const x=A[Re.value];if(P==="mining"?(We.value[Re.value]=null,q("mining")):P==="hunting"?(fe.value[Re.value]=null,q("hunting")):P==="exploration"?(y.value[Re.value]=null,q("exploration")):P==="production"&&(C.value[Re.value]=null,q("production")),x&&x.id){const J=`${P}_${Re.value}_${x.id}`;W.value[P][J]&&delete W.value[P][J]}const Q=nt();Q&&pn(Q.id,{miningCats:We.value,huntingCats:fe.value,explorationCats:y.value,productionCats:C.value})}pt.value=!1,Re.value=-1,N.value="mining"},he=()=>{pt.value=!1,Re.value=-1,N.value="mining"},fe=V([null,null,null,null,null,null]),y=V([null,null,null,null,null,null]),C=V([null,null,null,null,null,null]),N=V("mining"),z=V({mining:null,hunting:null,exploration:null,production:null}),W=V({mining:{},hunting:{},exploration:{},production:{}}),q=P=>{z.value[P]&&(clearInterval(z.value[P]),z.value[P]=null);let A=[];P==="mining"?A=We.value:P==="hunting"?A=fe.value:P==="exploration"?A=y.value:P==="production"&&(A=C.value);const x=A.filter(Q=>Q!==null);x.length!==0&&(x.forEach((Q,J)=>{const ee=`${P}_${J}_${Q.id}`;W.value[P][ee]||(W.value[P][ee]=0)}),z.value[P]=setInterval(()=>{let Q=[];P==="mining"?Q=We.value:P==="hunting"?Q=fe.value:P==="exploration"?Q=y.value:P==="production"&&(Q=C.value);const J=Q.filter(ce=>ce!==null);if(J.length===0){ne(P);return}const re={mining:"채굴",hunting:"사냥",exploration:"탐험",production:"생산"}[P]||"작업";let le=[];P==="mining"?le=We.value:P==="hunting"?le=fe.value:P==="exploration"?le=y.value:P==="production"&&(le=C.value),J.forEach(ce=>{const ge=le.findIndex(rt=>rt&&rt.id===ce.id);if(ge===-1)return;const Pe=`${P}_${ge}_${ce.id}`;W.value[P][Pe]||(W.value[P][Pe]=0),W.value[P][Pe]+=1;const Ye=W.value[P][Pe],Je=Math.min(window.innerWidth||500,500),Ge=window.innerHeight||800,Xe=220,Le=60,ke=20;if(Ye>=10){r.value+=100,o.value=r.value,W.value[P][Pe]=0;const rt=Math.random();let xt=0;if(rt<.3?xt=1:rt<.4&&(xt=2),xt>0&&(u.value+=xt,i.value===P))for(let fn=0;fn<xt;fn++){const Tn=Math.floor(Math.random()*6)+1,Us=60,mt=30,nr={id:Date.now()+fn+ge*1e3,x:Math.random()*(Je-Us-mt*2)+mt,y:Math.random()*(Ge-Us-mt*2-200)+100,imageId:Tn};p.value.push(nr),setTimeout(()=>{const ls=p.value.findIndex($s=>$s.id===nr.id);ls>-1&&p.value.splice(ls,1)},2e3)}if(s.value&&pn(s.value.id,{coins:r.value,catFragments:u.value}),i.value===P){const fn={id:Date.now()+ge+ce.id*1e4,text:`${re} 완료! 100원 획득!`,x:Math.random()*(Je-Xe-ke*2)+ke,y:Math.random()*(Ge-Le-ke*2-200)+100};f.value.push(fn),setTimeout(()=>{const Tn=f.value.findIndex(Us=>Us.id===fn.id);Tn>-1&&f.value.splice(Tn,1)},3e3)}}else if(i.value===P){const rt={id:Date.now()+ge+ce.id*1e3+Ye*100,text:`${re} 진행: ${Ye}/10`,x:Math.random()*(Je-Xe-ke*2)+ke,y:Math.random()*(Ge-Le-ke*2-200)+100};f.value.push(rt),setTimeout(()=>{const xt=f.value.findIndex(fn=>fn.id===rt.id);xt>-1&&f.value.splice(xt,1)},2e3)}})},1e3))},ne=P=>{z.value[P]&&(clearInterval(z.value[P]),z.value[P]=null)},Z=()=>{Object.keys(z.value).forEach(P=>{ne(P)})};return Cs([We,fe,y,C],()=>{["mining","hunting","exploration","production"].forEach(A=>{let x=[];A==="mining"?x=We.value:A==="hunting"?x=fe.value:A==="exploration"?x=y.value:A==="production"&&(x=C.value);const Q=x.map((J,ee)=>J?`${A}_${ee}_${J.id}`:null).filter(J=>J!==null);Object.keys(W.value[A]).forEach(J=>{Q.includes(J)||delete W.value[A][J]})}),q("mining"),q("hunting"),q("exploration"),q("production")},{deep:!0}),V(1),V(0),V(!1),V([{name:"슬라임",level:1,hp:100,maxHp:100,exp:10,gold:5},{name:"고블린",level:2,hp:150,maxHp:150,exp:20,gold:10},{name:"오크",level:3,hp:200,maxHp:200,exp:35,gold:20}]),V(null),V({level:1,exp:0,maxExp:100,hp:100,maxHp:100,attack:20}),V(1),V(0),V(!1),V(null),V([{name:"신비한 숲",level:1,difficulty:"쉬움",rewards:["나무","열매","약초"],description:"평화로운 숲에서 기본 자원을 수집할 수 있습니다.",discovered:!0},{name:"고대 유적",level:2,difficulty:"보통",rewards:["고대 유물","마법석","보석"],description:"신비한 힘이 깃든 고대 유적지입니다.",discovered:!1},{name:"용의 동굴",level:3,difficulty:"어려움",rewards:["용의 비늘","마나 크리스탈","희귀 보석"],description:"위험하지만 귀중한 보물이 숨겨진 곳입니다.",discovered:!1}]),V({wood:0,fruit:0,herb:0,artifact:0,magicStone:0,gem:0,dragonScale:0,manaCrystal:0,rareGem:0}),V(1),V(0),V(!1),V(null),V({wood:10,stone:5,iron:3,gold:1,diamond:0,herb:8,fruit:12}),V([{id:"woodenSword",name:"나무 검",level:1,materials:{wood:5,stone:2},result:{woodenSword:1},time:30,description:"기본적인 나무 검입니다."},{id:"ironSword",name:"철 검",level:2,materials:{wood:3,iron:5,stone:3},result:{ironSword:1},time:60,description:"강력한 철 검입니다."},{id:"healthPotion",name:"체력 포션",level:1,materials:{herb:3,fruit:2},result:{healthPotion:1},time:20,description:"체력을 회복시켜주는 포션입니다."}]),V({woodenSword:0,ironSword:0,healthPotion:0}),(P,A)=>(L(),F("div",yk,[Ae(Qt,{coinCount:r.value,currentEnergy:E.value,maxEnergy:Oe.value,totalCoin:l.value,catCount:c.value},null,8,["coinCount","currentEnergy","maxEnergy","totalCoin","catCount"]),h("main",Ak,[i.value==="main"?(L(),F("article",Ik,[h("div",wk,[h("div",Ek,[A[14]||(A[14]=h("div",{class:"statLabel"},"총 포인트",-1)),h("div",Tk,[A[13]||(A[13]=h("div",{class:"iconCircle pointIcon"},[h("img",{src:B2,alt:"P"})],-1)),h("span",Ck,H(e(o.value)),1)])]),A[17]||(A[17]=h("div",{class:"divider"},null,-1)),h("div",bk,[A[16]||(A[16]=h("div",{class:"statLabel"},"총코인",-1)),h("div",Sk,[A[15]||(A[15]=h("div",{class:"iconCircle coinIcon"},[h("img",{src:oy,alt:"C"})],-1)),h("span",Rk,H(e(l.value)),1)])])]),h("div",Pk,[h("div",{class:"modeCard miningCard",onClick:A[0]||(A[0]=x=>b("mining"))},[...A[18]||(A[18]=[h("div",{class:"mainmenuBtns"},null,-1),h("div",{class:"modeTitle"},"채굴",-1),h("div",{class:"modeLevel"},"Level 01",-1)])]),h("div",{class:"modeCard huntingCard",onClick:A[1]||(A[1]=x=>b("hunting"))},[...A[19]||(A[19]=[h("div",{class:"mainmenuBtns"},null,-1),h("div",{class:"modeTitle"},"사냥",-1),h("div",{class:"modeLevel"},"Level 01",-1)])]),h("div",{class:"modeCard explorationCard",onClick:A[2]||(A[2]=x=>b("exploration"))},[...A[20]||(A[20]=[h("div",{class:"mainmenuBtns"},null,-1),h("div",{class:"modeTitle"},"탐험",-1),h("div",{class:"modeLevel"},"Level 01",-1)])]),h("div",{class:"modeCard productionCard",onClick:A[3]||(A[3]=x=>b("production"))},[...A[21]||(A[21]=[h("div",{class:"mainmenuBtns"},null,-1),h("div",{class:"modeTitle"},"생산",-1),h("div",{class:"modeLevel"},"Level 01",-1)])])])])):ue("",!0),i.value==="mining"?(L(),F("div",kk,[h("div",Dk,[h("button",{class:"backBtn",onClick:A[4]||(A[4]=x=>b("main"))},"← 뒤로")]),h("div",xk,H(e(o.value)),1),h("div",Nk,[w.value&&!I.value?(L(),F("button",{key:0,onClick:A[5]||(A[5]=x=>O("mining")),class:be(["clickerBtn miningBtn",{"mining-active":_.value>0}])},null,2)):ue("",!0),I.value?(L(),F("div",Mk,[...A[22]||(A[22]=[h("div",{class:"completeMessageText"},"채굴 완료!",-1)])])):ue("",!0)]),h("div",Ok,[h("div",Vk,[A[23]||(A[23]=h("span",{class:"energyIcon"},"⚡",-1)),h("span",Lk,H(E.value.toLocaleString())+"/"+H(Oe.value.toLocaleString()),1)]),h("div",Bk,[h("div",{class:"energyFill",style:yt({width:E.value/Oe.value*100+"%"})},null,4)])]),h("div",Fk,[A[26]||(A[26]=h("div",{class:"catsListLabel"},"채굴 냥이 목록",-1)),h("div",Uk,[(L(!0),F(Ce,null,Be(We.value,(x,Q)=>(L(),F("div",{key:Q,class:be(["catCard",{emptySlot:!x,working:x&&i.value==="mining"}]),onClick:J=>K(Q,"mining")},[x?(L(),F("div",Hk,"Lv "+H(String(x.level).padStart(2,"0")),1)):ue("",!0),x?(L(),F("div",jk,[h("img",{src:Te(x.imageId),alt:"고양이"},null,8,Gk)])):ue("",!0),x?(L(),F("div",qk,[(L(!0),F(Ce,null,Be(x.stars,J=>(L(),F("span",{key:J,class:"star"},[...A[24]||(A[24]=[h("img",{src:"",alt:""},null,-1)])]))),128))])):ue("",!0),x?ue("",!0):(L(),F("div",Qk,[...A[25]||(A[25]=[h("span",{class:"emptySlotText"},"+",-1)])]))],10,$k))),128))])])])):ue("",!0),i.value==="hunting"?(L(),F("div",zk,[h("div",Wk,[h("button",{class:"backBtn",onClick:A[6]||(A[6]=x=>b("main"))},"← 뒤로")]),h("div",Kk,H(e(o.value)),1),h("div",Yk,[ie.value&&!G.value?(L(),F("button",{key:0,onClick:A[7]||(A[7]=x=>O("hunting")),class:be(["clickerBtn huntingBtn",{"hunting-active":$.value>0}])},null,2)):ue("",!0),G.value?(L(),F("div",Jk,[...A[27]||(A[27]=[h("div",{class:"completeMessageText"},"사냥 완료!",-1)])])):ue("",!0)]),h("div",Xk,[h("div",Zk,[A[28]||(A[28]=h("span",{class:"energyIcon"},"⚡",-1)),h("span",eD,H(E.value.toLocaleString())+"/"+H(Oe.value.toLocaleString()),1)]),h("div",tD,[h("div",{class:"energyFill",style:yt({width:E.value/Oe.value*100+"%"})},null,4)])]),h("div",nD,[A[31]||(A[31]=h("div",{class:"catsListLabel"},"사냥 냥이 목록",-1)),h("div",sD,[(L(!0),F(Ce,null,Be(fe.value,(x,Q)=>(L(),F("div",{key:Q,class:be(["catCard",{emptySlot:!x,working:x&&i.value==="hunting"}]),onClick:J=>K(Q,"hunting")},[x?(L(),F("div",rD,"Lv "+H(String(x.level).padStart(2,"0")),1)):ue("",!0),x?(L(),F("div",oD,[h("img",{src:Te(x.imageId),alt:"고양이"},null,8,aD)])):ue("",!0),x?(L(),F("div",lD,[(L(!0),F(Ce,null,Be(x.stars,J=>(L(),F("span",{key:J,class:"star"},[...A[29]||(A[29]=[h("img",{src:"",alt:""},null,-1)])]))),128))])):ue("",!0),x?ue("",!0):(L(),F("div",cD,[...A[30]||(A[30]=[h("span",{class:"emptySlotText"},"+",-1)])]))],10,iD))),128))])])])):ue("",!0),i.value==="exploration"?(L(),F("div",uD,[h("div",hD,[h("button",{class:"backBtn",onClick:A[8]||(A[8]=x=>b("main"))},"← 뒤로")]),h("div",dD,H(e(o.value)),1),h("div",fD,[U.value&&!M.value?(L(),F("button",{key:0,onClick:A[9]||(A[9]=x=>O("exploration")),class:be(["clickerBtn explorationBtn",{"exploration-active":S.value>0}])},null,2)):ue("",!0),M.value?(L(),F("div",pD,[...A[32]||(A[32]=[h("div",{class:"completeMessageText"},"탐험 완료!",-1)])])):ue("",!0)]),h("div",gD,[h("div",mD,[A[33]||(A[33]=h("span",{class:"energyIcon"},"⚡",-1)),h("span",_D,H(E.value.toLocaleString())+"/"+H(Oe.value.toLocaleString()),1)]),h("div",vD,[h("div",{class:"energyFill",style:yt({width:E.value/Oe.value*100+"%"})},null,4)])]),h("div",yD,[A[36]||(A[36]=h("div",{class:"catsListLabel"},"탐험 냥이 목록",-1)),h("div",AD,[(L(!0),F(Ce,null,Be(y.value,(x,Q)=>(L(),F("div",{key:Q,class:be(["catCard",{emptySlot:!x,working:x&&i.value==="exploration"}]),onClick:J=>K(Q,"exploration")},[x?(L(),F("div",wD,"Lv "+H(String(x.level).padStart(2,"0")),1)):ue("",!0),x?(L(),F("div",ED,[h("img",{src:Te(x.imageId),alt:"고양이"},null,8,TD)])):ue("",!0),x?(L(),F("div",CD,[(L(!0),F(Ce,null,Be(x.stars,J=>(L(),F("span",{key:J,class:"star"},[...A[34]||(A[34]=[h("img",{src:"",alt:""},null,-1)])]))),128))])):ue("",!0),x?ue("",!0):(L(),F("div",bD,[...A[35]||(A[35]=[h("span",{class:"emptySlotText"},"+",-1)])]))],10,ID))),128))])])])):ue("",!0),i.value==="production"?(L(),F("div",SD,[h("div",RD,[h("button",{class:"backBtn",onClick:A[10]||(A[10]=x=>b("main"))},"← 뒤로")]),h("div",PD,H(e(o.value)),1),h("div",kD,[T.value&&!R.value?(L(),F("button",{key:0,onClick:A[11]||(A[11]=x=>O("production")),class:be(["clickerBtn productionBtn",{"production-active":we.value>0}])},null,2)):ue("",!0),R.value?(L(),F("div",DD,[...A[37]||(A[37]=[h("div",{class:"completeMessageText"},"생산 완료!",-1)])])):ue("",!0)]),h("div",xD,[h("div",ND,[A[38]||(A[38]=h("span",{class:"energyIcon"},"⚡",-1)),h("span",MD,H(E.value.toLocaleString())+"/"+H(Oe.value.toLocaleString()),1)]),h("div",OD,[h("div",{class:"energyFill",style:yt({width:E.value/Oe.value*100+"%"})},null,4)])]),h("div",VD,[A[41]||(A[41]=h("div",{class:"catsListLabel"},"생산 냥이 목록",-1)),h("div",LD,[(L(!0),F(Ce,null,Be(C.value,(x,Q)=>(L(),F("div",{key:Q,class:be(["catCard",{emptySlot:!x,working:x&&i.value==="production"}]),onClick:J=>K(Q,"production")},[x?(L(),F("div",FD,"Lv "+H(String(x.level).padStart(2,"0")),1)):ue("",!0),x?(L(),F("div",UD,[h("img",{src:Te(x.imageId),alt:"고양이"},null,8,$D)])):ue("",!0),x?(L(),F("div",HD,[(L(!0),F(Ce,null,Be(x.stars,J=>(L(),F("span",{key:J,class:"star"},[...A[39]||(A[39]=[h("img",{src:"",alt:""},null,-1)])]))),128))])):ue("",!0),x?ue("",!0):(L(),F("div",jD,[...A[40]||(A[40]=[h("span",{class:"emptySlotText"},"+",-1)])]))],10,BD))),128))])])])):ue("",!0)]),Ae(zt),i.value!=="main"?(L(),F("div",GD,[(L(!0),F(Ce,null,Be(f.value,x=>(L(),F("div",{key:x.id,class:"speechBubble",style:yt({left:x.x+"px",top:x.y+"px",transform:"translateX(-50%)"})},H(x.text),5))),128))])):ue("",!0),i.value!=="main"?(L(),F("div",qD,[(L(!0),F(Ce,null,Be(p.value,x=>(L(),F("div",{key:x.id,class:"catEmoji",style:yt({left:x.x+"px",top:x.y+"px"})},[h("img",{src:Dt(x.imageId),alt:"",class:"tulImage"},null,8,QD)],4))),128))])):ue("",!0),pt.value?(L(),F("div",{key:2,class:"catSelectPopupOverlay",onClick:he},[h("div",{class:"catSelectPopupContent",onClick:A[12]||(A[12]=kr(()=>{},["stop"]))},[h("div",{class:"catSelectPopupHeader"},[A[42]||(A[42]=h("h3",null,"고양이 선택",-1)),h("button",{class:"closePopupBtn",onClick:he},"×")]),h("div",zD,[gt()?(L(),F("div",WD,[h("button",{class:"removeCatBtn",onClick:se}," 고양이 제거 ")])):ue("",!0),h("div",KD,[(L(!0),F(Ce,null,Be(rn.value,x=>(L(),F("div",{key:x.id,class:"availableCatCard",onClick:Q=>oe(x)},[h("div",JD,[h("img",{src:Te(x.imageId||x.id),alt:"고양이"},null,8,XD)]),h("div",ZD,[h("div",ex,H(x.name),1),h("div",tx,"Lv "+H(String(x.level||1).padStart(2,"0")),1),h("div",nx,[(L(!0),F(Ce,null,Be(x.stars||1,Q=>(L(),F("span",{key:Q,class:"star"},"★"))),128))])])],8,YD))),128))])])])])):ue("",!0)]))}},ix=ft(sx,[["__scopeId","data-v-3b438c87"]]),rx={class:"miningPage"},ox={class:"mainContent"},ax={class:"miningContainer"},lx={class:"pageHeader"},cx={class:"levelInfo"},ux={class:"miningProgress"},hx={class:"progressBar"},dx={class:"progressText"},fx=["disabled"],px={key:0},gx={key:1},mx={class:"resources"},_x={class:"resourceList"},vx={class:"resourceItem"},yx={class:"resourceItem"},Ax={class:"resourceItem"},Ix={class:"resourceItem"},wx={__name:"MiningPage",setup(t){const e=qt(),n=V(0);dt(()=>{const c=nt();c&&(n.value=c.gameData?.coins||0)});const s=V(1),i=V(0),r=V(!1),o=V({stone:0,iron:0,gold:0,diamond:0}),l=()=>{if(r.value)return;r.value=!0,i.value=0;const c=setInterval(()=>{if(i.value+=10,i.value>=100){clearInterval(c),r.value=!1,i.value=0;const u=Math.random();u<.4?o.value.stone++:u<.7?o.value.iron++:u<.9?o.value.gold++:o.value.diamond++}},200)};return(c,u)=>(L(),F("div",rx,[Ae(Qt,{coinCount:n.value},null,8,["coinCount"]),h("main",ox,[h("div",ax,[h("div",lx,[h("button",{class:"backBtn",onClick:u[0]||(u[0]=f=>Pt(e).push("/main"))},"← 뒤로"),u[1]||(u[1]=h("h2",null,"⛏️ 채굴",-1))]),h("div",cx,[h("span",null,"채굴 레벨: "+H(s.value),1)]),h("div",ux,[h("div",hx,[h("div",{class:"progressFill",style:yt({width:i.value+"%"})},null,4)]),h("span",dx,H(i.value)+"%",1)]),h("button",{class:be(["miningBtn",{mining:r.value}]),onClick:l,disabled:r.value},[r.value?(L(),F("span",gx,"⛏️ 채굴 중...")):(L(),F("span",px,"⛏️ 채굴 시작"))],10,fx),h("div",mx,[u[6]||(u[6]=h("h3",null,"보유 자원",-1)),h("div",_x,[h("div",vx,[u[2]||(u[2]=h("span",null,"🪨 돌",-1)),h("span",null,H(o.value.stone),1)]),h("div",yx,[u[3]||(u[3]=h("span",null,"⚒️ 철",-1)),h("span",null,H(o.value.iron),1)]),h("div",Ax,[u[4]||(u[4]=h("span",null,"🥇 금",-1)),h("span",null,H(o.value.gold),1)]),h("div",Ix,[u[5]||(u[5]=h("span",null,"💎 다이아몬드",-1)),h("span",null,H(o.value.diamond),1)])])])])]),Ae(zt)]))}},Ex=ft(wx,[["__scopeId","data-v-17eb7d34"]]),Tx={class:"huntingPage"},Cx={class:"mainContent"},bx={class:"huntingContainer"},Sx={class:"pageHeader"},Rx={class:"playerStats"},Px={class:"statsGrid"},kx={class:"statItem"},Dx={class:"statItem"},xx={class:"statItem"},Nx={class:"statItem"},Mx={class:"monsterSelection"},Ox={class:"monsterList"},Vx=["onClick"],Lx={class:"monsterInfo"},Bx={class:"monsterName"},Fx={class:"monsterLevel"},Ux={class:"monsterRewards"},$x={key:0,class:"currentMonster"},Hx={class:"monsterHp"},jx={class:"hpBar"},Gx={class:"hpText"},qx={class:"huntingProgress"},Qx={class:"progressBar"},zx={class:"progressText"},Wx=["disabled"],Kx={key:0},Yx={key:1},Jx={__name:"HuntingPage",setup(t){const e=qt(),n=V(0);dt(()=>{const f=nt();f&&(n.value=f.gameData?.coins||0)}),V(1);const s=V(0),i=V(!1),r=V([{name:"슬라임",level:1,hp:100,maxHp:100,exp:10,gold:5},{name:"고블린",level:2,hp:150,maxHp:150,exp:20,gold:10},{name:"오크",level:3,hp:200,maxHp:200,exp:35,gold:20}]),o=V(null),l=V({level:1,exp:0,maxExp:100,hp:100,maxHp:100,attack:20}),c=f=>{o.value={...f}},u=()=>{if(!o.value||i.value)return;i.value=!0,s.value=0;const f=setInterval(()=>{const p=Math.floor(Math.random()*l.value.attack)+10;o.value.hp-=p,o.value.hp<=0?(clearInterval(f),i.value=!1,s.value=100,l.value.exp+=o.value.exp,l.value.hp=l.value.maxHp,l.value.exp>=l.value.maxExp&&(l.value.level++,l.value.exp=0,l.value.maxExp=Math.floor(l.value.maxExp*1.5),l.value.attack+=5,l.value.maxHp+=20,l.value.hp=l.value.maxHp),setTimeout(()=>{o.value=null,s.value=0},2e3)):s.value=(o.value.maxHp-o.value.hp)/o.value.maxHp*100},500)};return(f,p)=>(L(),F("div",Tx,[Ae(Qt,{coinCount:n.value},null,8,["coinCount"]),h("main",Cx,[h("div",bx,[h("div",Sx,[h("button",{class:"backBtn",onClick:p[0]||(p[0]=m=>Pt(e).push("/main"))},"← 뒤로"),p[1]||(p[1]=h("h2",null,"⚔️ 사냥",-1))]),h("div",Rx,[p[6]||(p[6]=h("h3",null,"플레이어 정보",-1)),h("div",Px,[h("div",kx,[p[2]||(p[2]=h("span",null,"레벨",-1)),h("span",null,H(l.value.level),1)]),h("div",Dx,[p[3]||(p[3]=h("span",null,"체력",-1)),h("span",null,H(l.value.hp)+"/"+H(l.value.maxHp),1)]),h("div",xx,[p[4]||(p[4]=h("span",null,"공격력",-1)),h("span",null,H(l.value.attack),1)]),h("div",Nx,[p[5]||(p[5]=h("span",null,"경험치",-1)),h("span",null,H(l.value.exp)+"/"+H(l.value.maxExp),1)])])]),h("div",Mx,[p[7]||(p[7]=h("h3",null,"몬스터 선택",-1)),h("div",Ox,[(L(!0),F(Ce,null,Be(r.value,m=>(L(),F("div",{key:m.name,class:be(["monsterCard",{selected:o.value?.name===m.name}]),onClick:_=>c(m)},[h("div",Lx,[h("span",Bx,H(m.name),1),h("span",Fx,"Lv."+H(m.level),1)]),h("div",Ux,[h("span",null,"EXP: "+H(m.exp),1),h("span",null,"Gold: "+H(m.gold),1)])],10,Vx))),128))])]),o.value?(L(),F("div",$x,[h("h3",null,H(o.value.name)+" (Lv."+H(o.value.level)+")",1),h("div",Hx,[h("div",jx,[h("div",{class:"hpFill",style:yt({width:o.value.hp/o.value.maxHp*100+"%"})},null,4)]),h("span",Gx,H(o.value.hp)+"/"+H(o.value.maxHp),1)]),h("div",qx,[h("div",Qx,[h("div",{class:"progressFill",style:yt({width:s.value+"%"})},null,4)]),h("span",zx,H(Math.floor(s.value))+"%",1)]),h("button",{class:be(["huntingBtn",{hunting:i.value}]),onClick:u,disabled:i.value},[i.value?(L(),F("span",Yx,"⚔️ 사냥 중...")):(L(),F("span",Kx,"⚔️ 사냥 시작"))],10,Wx)])):ue("",!0)])]),Ae(zt)]))}},Xx=ft(Jx,[["__scopeId","data-v-9c82efe6"]]),Zx={class:"explorationPage"},eN={class:"mainContent"},tN={class:"explorationContainer"},nN={class:"pageHeader"},sN={class:"levelInfo"},iN={class:"locationSelection"},rN={class:"locationList"},oN=["onClick"],aN={class:"locationInfo"},lN={class:"locationHeader"},cN={class:"locationName"},uN={class:"locationLevel"},hN={class:"locationDifficulty"},dN={class:"locationDescription"},fN={class:"locationRewards"},pN={key:0,class:"undiscoveredOverlay"},gN={key:0,class:"currentExploration"},mN={class:"explorationProgress"},_N={class:"progressBar"},vN={class:"progressText"},yN=["disabled"],AN={key:0},IN={key:1},wN={class:"explorationRewards"},EN={class:"rewardsGrid"},TN={class:"rewardIcon"},CN={class:"rewardAmount"},bN={__name:"ExplorationPage",setup(t){const e=qt(),n=V(0);dt(()=>{const p=nt();p&&(n.value=p.gameData?.coins||0)});const s=V(1),i=V(0),r=V(!1),o=V(null);V([]);const l=V([{name:"신비한 숲",level:1,difficulty:"쉬움",rewards:["나무","열매","약초"],description:"평화로운 숲에서 기본 자원을 수집할 수 있습니다.",discovered:!0},{name:"고대 유적",level:2,difficulty:"보통",rewards:["고대 유물","마법석","보석"],description:"신비한 힘이 깃든 고대 유적지입니다.",discovered:!1},{name:"용의 동굴",level:3,difficulty:"어려움",rewards:["용의 비늘","마나 크리스탈","희귀 보석"],description:"위험하지만 귀중한 보물이 숨겨진 곳입니다.",discovered:!1},{name:"천공의 섬",level:4,difficulty:"매우 어려움",rewards:["천공석","신비한 에너지","전설의 아이템"],description:"구름 위에 떠있는 신비한 섬입니다.",discovered:!1}]),c=V({wood:0,fruit:0,herb:0,artifact:0,magicStone:0,gem:0,dragonScale:0,manaCrystal:0,rareGem:0,skyStone:0,mysteriousEnergy:0,legendaryItem:0}),u=p=>{p.discovered&&(o.value=p)},f=()=>{if(!o.value||r.value)return;r.value=!0,i.value=0;const p=setInterval(()=>{if(i.value+=5,i.value>=100){clearInterval(p),r.value=!1,i.value=0;const m=Math.floor(Math.random()*o.value.rewards.length),_=o.value.rewards[m],I={나무:"wood",열매:"fruit",약초:"herb","고대 유물":"artifact",마법석:"magicStone",보석:"gem","용의 비늘":"dragonScale","마나 크리스탈":"manaCrystal","희귀 보석":"rareGem",천공석:"skyStone","신비한 에너지":"mysteriousEnergy","전설의 아이템":"legendaryItem"};if(I[_]&&c.value[I[_]]++,Math.random()<.3){const w=l.value.find(S=>!S.discovered);w&&(w.discovered=!0)}s.value++,setTimeout(()=>{o.value=null},2e3)}},300)};return(p,m)=>(L(),F("div",Zx,[Ae(Qt,{coinCount:n.value},null,8,["coinCount"]),h("main",eN,[h("div",tN,[h("div",nN,[h("button",{class:"backBtn",onClick:m[0]||(m[0]=_=>Pt(e).push("/main"))},"← 뒤로"),m[1]||(m[1]=h("h2",null,"🗺️ 탐험",-1))]),h("div",sN,[h("span",null,"탐험 레벨: "+H(s.value),1)]),h("div",iN,[m[3]||(m[3]=h("h3",null,"탐험 지역",-1)),h("div",rN,[(L(!0),F(Ce,null,Be(l.value,_=>(L(),F("div",{key:_.name,class:be(["locationCard",{selected:o.value?.name===_.name,undiscovered:!_.discovered}]),onClick:I=>u(_)},[h("div",aN,[h("div",lN,[h("span",cN,H(_.name),1),h("span",uN,"Lv."+H(_.level),1)]),h("span",hN,H(_.difficulty),1),h("p",dN,H(_.description),1),h("div",fN,[(L(!0),F(Ce,null,Be(_.rewards,I=>(L(),F("span",{key:I,class:"rewardTag"},H(I),1))),128))])]),_.discovered?ue("",!0):(L(),F("div",pN,[...m[2]||(m[2]=[h("span",null,"🔒 미발견",-1)])]))],10,oN))),128))])]),o.value?(L(),F("div",gN,[h("h3",null,H(o.value.name)+" 탐험 중",1),h("div",mN,[h("div",_N,[h("div",{class:"progressFill",style:yt({width:i.value+"%"})},null,4)]),h("span",vN,H(i.value)+"%",1)]),h("button",{class:be(["explorationBtn",{exploring:r.value}]),onClick:f,disabled:r.value},[r.value?(L(),F("span",IN,"🗺️ 탐험 중...")):(L(),F("span",AN,"🗺️ 탐험 시작"))],10,yN)])):ue("",!0),h("div",wN,[m[4]||(m[4]=h("h3",null,"탐험 보상",-1)),h("div",EN,[(L(!0),F(Ce,null,Be(c.value,(_,I)=>mn((L(),F("div",{key:I,class:"rewardItem"},[h("span",TN,H(I==="wood"?"🪵":I==="fruit"?"🍎":I==="herb"?"🌿":I==="artifact"?"🏺":I==="magicStone"||I==="gem"?"💎":I==="dragonScale"?"🐉":I==="manaCrystal"?"🔮":I==="rareGem"?"💠":I==="skyStone"?"☁️":I==="mysteriousEnergy"?"✨":I==="legendaryItem"?"⭐":"🎁"),1),h("span",CN,H(_),1)])),[[Zg,_>0]])),128))])])])]),Ae(zt)]))}},SN=ft(bN,[["__scopeId","data-v-f05b4431"]]),RN={class:"productionPage"},PN={class:"mainContent"},kN={class:"productionContainer"},DN={class:"pageHeader"},xN={class:"levelInfo"},NN={class:"inventory"},MN={class:"inventoryGrid"},ON={class:"materialIcon"},VN={class:"materialName"},LN={class:"materialAmount"},BN={class:"recipes"},FN={class:"recipeList"},UN=["onClick"],$N={class:"recipeInfo"},HN={class:"recipeHeader"},jN={class:"recipeName"},GN={class:"recipeLevel"},qN={class:"recipeDescription"},QN={class:"recipeMaterials"},zN={class:"recipeTime"},WN={key:0,class:"currentProduction"},KN={class:"productionProgress"},YN={class:"progressBar"},JN={class:"progressText"},XN=["disabled"],ZN={key:0},eM={key:1},tM={class:"producedItems"},nM={class:"itemsGrid"},sM={class:"itemIcon"},iM={class:"itemName"},rM={class:"itemAmount"},oM={__name:"ProductionPage",setup(t){const e=qt(),n=V(0);dt(()=>{const _=nt();_&&(n.value=_.gameData?.coins||0)});const s=V(1),i=V(0),r=V(!1),o=V(null),l=V({wood:10,stone:5,iron:3,gold:1,diamond:0,herb:8,fruit:12}),c=V([{id:"woodenSword",name:"나무 검",level:1,materials:{wood:5,stone:2},result:{woodenSword:1},time:30,description:"기본적인 나무 검입니다."},{id:"ironSword",name:"철 검",level:2,materials:{wood:3,iron:5,stone:3},result:{ironSword:1},time:60,description:"강력한 철 검입니다."},{id:"goldenSword",name:"황금 검",level:3,materials:{iron:3,gold:8,diamond:1},result:{goldenSword:1},time:120,description:"매우 강력한 황금 검입니다."},{id:"healthPotion",name:"체력 포션",level:1,materials:{herb:3,fruit:2},result:{healthPotion:1},time:20,description:"체력을 회복시켜주는 포션입니다."},{id:"manaPotion",name:"마나 포션",level:2,materials:{herb:5,fruit:3,stone:1},result:{manaPotion:1},time:40,description:"마나를 회복시켜주는 포션입니다."},{id:"magicRing",name:"마법 반지",level:3,materials:{gold:5,diamond:2,herb:4},result:{magicRing:1},time:90,description:"마법력을 증폭시키는 반지입니다."}]),u=V({woodenSword:0,ironSword:0,goldenSword:0,healthPotion:0,manaPotion:0,magicRing:0}),f=_=>{Object.entries(_.materials).every(([w,S])=>l.value[w]>=S)&&_.level<=s.value&&(o.value=_)},p=()=>{if(!o.value||r.value)return;Object.entries(o.value.materials).forEach(([I,w])=>{l.value[I]-=w}),r.value=!0,i.value=0;const _=setInterval(()=>{i.value+=100/(o.value.time/.1),i.value>=100&&(clearInterval(_),r.value=!1,i.value=0,Object.entries(o.value.result).forEach(([I,w])=>{u.value[I]+=w}),Math.random()<.1&&s.value++,setTimeout(()=>{o.value=null},2e3))},100)},m=_=>Object.entries(_.materials).every(([w,S])=>l.value[w]>=S)&&_.level<=s.value;return(_,I)=>(L(),F("div",RN,[Ae(Qt,{coinCount:n.value},null,8,["coinCount"]),h("main",PN,[h("div",kN,[h("div",DN,[h("button",{class:"backBtn",onClick:I[0]||(I[0]=w=>Pt(e).push("/main"))},"← 뒤로"),I[1]||(I[1]=h("h2",null,"🏭 생산",-1))]),h("div",xN,[h("span",null,"생산 레벨: "+H(s.value),1)]),h("div",NN,[I[2]||(I[2]=h("h3",null,"재료 보유량",-1)),h("div",MN,[(L(!0),F(Ce,null,Be(l.value,(w,S)=>(L(),F("div",{key:S,class:"inventoryItem"},[h("span",ON,H(S==="wood"?"🪵":S==="stone"?"🪨":S==="iron"?"⚒️":S==="gold"?"🥇":S==="diamond"?"💎":S==="herb"?"🌿":S==="fruit"?"🍎":"📦"),1),h("span",VN,H(S),1),h("span",LN,H(w),1)]))),128))])]),h("div",BN,[I[3]||(I[3]=h("h3",null,"제작 레시피",-1)),h("div",FN,[(L(!0),F(Ce,null,Be(c.value,w=>(L(),F("div",{key:w.id,class:be(["recipeCard",{selected:o.value?.id===w.id,disabled:!m(w)}]),onClick:S=>f(w)},[h("div",$N,[h("div",HN,[h("span",jN,H(w.name),1),h("span",GN,"Lv."+H(w.level),1)]),h("p",qN,H(w.description),1),h("div",QN,[(L(!0),F(Ce,null,Be(w.materials,(S,M)=>(L(),F("span",{key:M,class:"materialTag"},H(M)+" x"+H(S),1))),128))]),h("div",zN,[h("span",null,"⏱️ "+H(w.time)+"초",1)])])],10,UN))),128))])]),o.value?(L(),F("div",WN,[h("h3",null,H(o.value.name)+" 제작 중",1),h("div",KN,[h("div",YN,[h("div",{class:"progressFill",style:yt({width:i.value+"%"})},null,4)]),h("span",JN,H(Math.floor(i.value))+"%",1)]),h("button",{class:be(["productionBtn",{producing:r.value}]),onClick:p,disabled:r.value},[r.value?(L(),F("span",eM,"🏭 제작 중...")):(L(),F("span",ZN,"🏭 제작 시작"))],10,XN)])):ue("",!0),h("div",tM,[I[4]||(I[4]=h("h3",null,"제작된 아이템",-1)),h("div",nM,[(L(!0),F(Ce,null,Be(u.value,(w,S)=>mn((L(),F("div",{key:S,class:"itemCard"},[h("span",sM,H(S==="woodenSword"?"🗡️":S==="ironSword"?"⚔️":S==="goldenSword"?"🏆":S==="healthPotion"?"🧪":S==="manaPotion"?"💊":S==="magicRing"?"💍":"📦"),1),h("span",iM,H(S),1),h("span",rM,H(w),1)])),[[Zg,w>0]])),128))])])])]),Ae(zt)]))}},aM=ft(oM,[["__scopeId","data-v-2344037c"]]),lM={class:"exchangePage"},cM={class:"mainContent"},uM={class:"tabs"},hM={class:"panel"},dM={class:"panelRow"},fM={class:"inputBox"},pM={class:"panelRow"},gM={class:"inputBox"},mM={class:"panel"},_M={class:"panelRow"},vM={class:"panelRow"},yM={class:"panel"},AM={class:"panelRow"},IM={class:"valueBox"},wM={class:"panelRow"},EM={class:"valueBox"},TM={class:"panelRow"},CM={class:"valueBox"},bM={__name:"ExchangePage",setup(t){const e=V(null),n=V(0),s=V(0),i=V("buy"),r=V(""),o=V(""),l=V(""),c=V(1e3),u=V(2e3),f=je(()=>{if(i.value==="buy"&&r.value&&l.value){const M=m(l.value),U=parseInt(r.value)||c.value;return Math.floor(M/1e8*U).toLocaleString()}else if(i.value==="sell"&&o.value&&l.value){const M=m(l.value),U=parseInt(o.value)||c.value;return Math.floor(M/1e8*U).toLocaleString()}return"0"}),p=je(()=>l.value?_(m(l.value)):"0"),m=M=>{if(!M)return 0;const U=M.toLowerCase().trim();if(U.includes("억")){const $=parseFloat(U.replace("억","").trim())||1;return Math.floor($*1e8)}else if(U.includes("만")){const $=parseFloat(U.replace("만","").trim())||1;return Math.floor($*1e4)}else return parseInt(M.replace(/,/g,""))||0},_=M=>{if(M>=1e8){const U=Math.floor(M/1e8),$=Math.floor(M%1e8/1e4);return $>0?`${U}억 ${$}만`:`${U}억`}else if(M>=1e4)return`${Math.floor(M/1e4)}만`;return M.toLocaleString()},I=V(5),w=()=>{const M=nt();M&&(e.value=M,n.value=M.gameData?.coins||0,s.value=M.gameData?.totalCoin||0)},S=()=>{if(!e.value){alert("로그인이 필요합니다.");return}if(!l.value){alert("코인 수량을 입력해주세요.");return}if(i.value==="buy"){if(!r.value){alert("구매 희망가격을 입력해주세요.");return}const M=m(l.value),U=parseInt(r.value)||u.value,$=Math.floor(M/1e8*U);if(n.value<$){alert(`포인트가 부족합니다. 필요: ${$.toLocaleString()} Point`);return}if(I.value<=0){alert("오늘 남은 등록 횟수가 없습니다.");return}const G=n.value-$,ie=s.value+M;ka(e.value.id,G,ie)?(n.value=G,s.value=ie,w(),window.dispatchEvent(new CustomEvent("userDataUpdated")),I.value--,alert(`구매 완료!
${_(M)} Coin 구매
사용한 Point: ${$.toLocaleString()}`),r.value="",l.value=""):alert("거래 실패. 다시 시도해주세요.")}else{if(!o.value){alert("판매 희망가격을 입력해주세요.");return}const M=m(l.value),U=parseInt(o.value)||c.value,$=Math.floor(M/1e8*U);if(s.value<M){alert(`코인이 부족합니다. 보유: ${_(s.value)}, 필요: ${_(M)}`);return}if(I.value<=0){alert("오늘 남은 등록 횟수가 없습니다.");return}const G=n.value+$,ie=s.value-M;ka(e.value.id,G,ie)?(n.value=G,s.value=ie,w(),window.dispatchEvent(new CustomEvent("userDataUpdated")),I.value--,alert(`판매 완료!
${_(M)} Coin 판매
받은 Point: ${$.toLocaleString()}`),o.value="",l.value=""):alert("거래 실패. 다시 시도해주세요.")}};return Cs(i,()=>{r.value="",o.value="",l.value=""}),dt(()=>{w()}),(M,U)=>(L(),F("div",lM,[Ae(Qt,{coinCount:n.value},null,8,["coinCount"]),h("main",cM,[h("div",uM,[h("button",{class:be(["tab",{active:i.value==="buy"}]),onClick:U[0]||(U[0]=$=>i.value="buy")}," Coin 구입 ",2),h("button",{class:be(["tab",{active:i.value==="sell"}]),onClick:U[1]||(U[1]=$=>i.value="sell")}," Coin 판매 ",2)]),h("div",hM,[h("div",dM,[h("span",null,H(i.value==="buy"?"구매 희망가격":"판매 희망가격"),1),h("div",fM,[i.value==="buy"?mn((L(),F("input",{key:0,type:"number","onUpdate:modelValue":U[2]||(U[2]=$=>r.value=$),placeholder:"Point",class:"priceInput"},null,512)),[[Zn,r.value]]):ue("",!0),i.value==="sell"?mn((L(),F("input",{key:1,type:"number","onUpdate:modelValue":U[3]||(U[3]=$=>o.value=$),placeholder:"Point",class:"priceInput"},null,512)),[[Zn,o.value]]):ue("",!0),U[5]||(U[5]=h("span",null,"Point",-1))])]),h("div",pM,[h("span",null,H(i.value==="buy"?"코인 구매량":"코인 판매량"),1),h("div",gM,[mn(h("input",{type:"text","onUpdate:modelValue":U[4]||(U[4]=$=>l.value=$),placeholder:"예: 1억, 5천만",class:"coinInput"},null,512),[[Zn,l.value]]),U[6]||(U[6]=h("span",null,"Coin",-1))])])]),h("div",mM,[h("div",_M,[U[7]||(U[7]=h("span",null,"평균거래가",-1)),h("span",null,H(i.value==="buy"?"1억 Coin : ":"")+H(c.value)+H(i.value==="buy"?" p":" Point : 1억 Coin"),1)]),h("div",vM,[U[8]||(U[8]=h("span",null,"즉시거래가",-1)),h("span",null,H(i.value==="buy"?"1억 Coin : ":"")+H(u.value)+H(i.value==="buy"?" p":" Point : 1억 Coin"),1)])]),h("div",yM,[U[11]||(U[11]=h("div",{class:"panelTitle"},"예상 거래 결과",-1)),h("div",AM,[h("span",null,H(i.value==="buy"?"예치금":"받을 Point"),1),h("div",IM,[h("span",null,H(f.value),1),h("span",null,H((i.value==="buy","Point")),1)])]),h("div",wM,[h("span",null,H(i.value==="buy"?"구입 Coin":"판매 Coin"),1),h("div",EM,[h("span",null,H(p.value),1),h("span",null,H((i.value==="buy","Coin")),1)])]),h("div",TM,[U[10]||(U[10]=h("span",null,"오늘 남은 등록 횟수",-1)),h("div",CM,[h("span",null,H(I.value),1),U[9]||(U[9]=h("span",null,"회",-1))])])]),h("button",{class:"submitBtn",onClick:S},H(i.value==="buy"?"거래 신청":"판매 신청"),1)]),Ae(zt)]))}},SM=ft(bM,[["__scopeId","data-v-48b65e40"]]),RM={class:"questPage"},PM={class:"mainContent"},kM={class:"filterTabs"},DM={class:"mainTabs"},xM={class:"questList"},NM={class:"questContent"},MM={class:"questInfo"},OM={class:"questTitle"},VM={class:"questDescription"},LM=["onClick"],BM={key:1,class:"completedBadge"},FM={key:2,class:"progressBar"},UM={class:"progressText"},$M={__name:"QuestPage",setup(t){const e=V(0),n=V("inProgress"),s=V("daily"),i=()=>new Date().toDateString(),r=()=>{const p=localStorage.getItem("questLastDate"),m=i();return p!==m?(localStorage.setItem("questLastDate",m),localStorage.removeItem("rewardedQuests"),!0):!1},o=()=>{const p=localStorage.getItem("rewardedQuests");return p?JSON.parse(p):[]},l=p=>{localStorage.setItem("rewardedQuests",JSON.stringify(p)),localStorage.setItem("questLastDate",i())},c=V([{id:1,title:"일일 채굴 10회",description:"오늘 하루 채굴을 10회 완료하세요",completed:!0,rewardReceived:!1,progress:10,total:10,type:"daily"},{id:2,title:"일일 사냥 5회",description:"몬스터를 5마리 처치하세요",completed:!0,rewardReceived:!1,progress:5,total:5,type:"daily"},{id:3,title:"일일 탐험 1회",description:"탐험 활동을 1회 완료하세요",completed:!1,rewardReceived:!1,progress:0,total:1,type:"daily"},{id:4,title:"일일 생산 3개",description:"아이템을 3개 이상 생산하세요",completed:!1,rewardReceived:!1,progress:1,total:3,type:"daily"},{id:5,title:"일일 코인 1,000 획득",description:"코인을 1,000개 이상 획득하세요",completed:!1,rewardReceived:!1,progress:650,total:1e3,type:"daily"},{id:6,title:"일일 레벨업 1회",description:"레벨을 1레벨 이상 올리세요",completed:!1,rewardReceived:!1,progress:.6,total:1,type:"daily"},{id:7,title:"일일 데일리 체크",description:"게임에 접속하여 일일 퀘스트를 확인하세요",completed:!0,rewardReceived:!1,progress:1,total:1,type:"daily"},{id:8,title:"일일 랜덤 상자 수집",description:"랜덤 상자를 2개 이상 수집하세요",completed:!1,rewardReceived:!1,progress:1,total:2,type:"daily"},{id:9,title:"주간 퀘스트: 채굴 마스터",description:"일주일간 채굴을 50회 완료하세요",completed:!1,rewardReceived:!1,progress:23,total:50,type:"weekly"},{id:10,title:"주간 퀘스트: 사냥꾼",description:"일주일 동안 몬스터를 100마리 처치하세요",completed:!1,rewardReceived:!1,progress:45,total:100,type:"weekly"},{id:11,title:"주간 퀘스트: 탐험가",description:"새로운 지역을 5곳 탐험하세요",completed:!0,rewardReceived:!1,progress:5,total:5,type:"weekly"},{id:12,title:"주간 퀘스트: 생산자",description:"아이템을 50개 이상 생산하세요",completed:!1,rewardReceived:!1,progress:28,total:50,type:"weekly"},{id:13,title:"주간 퀘스트: 코인 모으기",description:"코인을 5만개 이상 획득하세요",completed:!1,rewardReceived:!1,progress:32e3,total:5e4,type:"weekly"},{id:14,title:"주간 퀘스트: 레벨업 5",description:"레벨을 5레벨 이상 올리세요",completed:!1,rewardReceived:!1,progress:3,total:5,type:"weekly"},{id:15,title:"주간 퀘스트: 수집가",description:"다양한 보물을 20개 수집하세요",completed:!1,rewardReceived:!1,progress:12,total:20,type:"weekly"},{id:16,title:"주간 퀘스트: 종합 능력",description:"모든 활동을 각각 10회 이상 수행하세요",completed:!1,rewardReceived:!1,progress:35,total:40,type:"weekly"},{id:17,title:"월간 퀘스트: 코인왕",description:"이번 달 코인을 20만 개 이상 획득하세요",completed:!1,rewardReceived:!1,progress:95e3,total:2e5,type:"monthly"},{id:18,title:"월간 퀘스트: 극한 레벨업",description:"레벨을 20레벨 이상 올리세요",completed:!1,rewardReceived:!1,progress:15,total:20,type:"monthly"},{id:19,title:"월간 퀘스트: 완벽한 수집가",description:"보물을 100개 이상 수집하세요",completed:!1,rewardReceived:!1,progress:67,total:100,type:"monthly"},{id:20,title:"월간 퀘스트: 마스터 채굴러",description:"채굴을 500회 이상 완료하세요",completed:!1,rewardReceived:!1,progress:289,total:500,type:"monthly"},{id:21,title:"월간 퀘스트: 용사",description:"몬스터를 500마리 처치하세요",completed:!1,rewardReceived:!1,progress:234,total:500,type:"monthly"},{id:22,title:"월간 퀘스트: 대탐험가",description:"새로운 지역을 20곳 탐험하세요",completed:!1,rewardReceived:!1,progress:14,total:20,type:"monthly"},{id:23,title:"월간 퀘스트: 완벽한 제작자",description:"다양한 아이템을 200개 생산하세요",completed:!1,rewardReceived:!1,progress:123,total:200,type:"monthly"},{id:24,title:"월간 퀘스트: 최고 달성자",description:"이번 달 모든 활동을 완벽하게 수행하세요",completed:!0,rewardReceived:!1,progress:100,total:100,type:"monthly"}]),u=p=>{const m=c.value.find(_=>_.id===p);if(m&&m.completed&&!m.rewardReceived){m.rewardReceived=!0;const _=o();_.includes(p)||(_.push(p),l(_)),alert("보상 받기 완료!")}},f=je(()=>{let p=c.value.filter(m=>m.type===s.value);return n.value==="inProgress"?p=p.filter(m=>!m.completed||m.completed&&!m.rewardReceived):n.value==="completed"&&(p=p.filter(m=>m.completed&&m.rewardReceived)),p.sort((m,_)=>m.completed&&!m.rewardReceived&&(_.rewardReceived||!_.completed)?-1:(m.rewardReceived||!m.completed)&&_.completed&&!_.rewardReceived?1:0)});return dt(()=>{const p=nt();p&&(e.value=p.gameData?.coins||0),r();const m=o();c.value.forEach(_=>{m.includes(_.id)&&(_.rewardReceived=!0)})}),(p,m)=>(L(),F("div",RM,[Ae(Qt,{coinCount:e.value},null,8,["coinCount"]),h("main",PM,[h("div",kM,[h("button",{class:be(["filterTab",{active:s.value==="daily"}]),onClick:m[0]||(m[0]=_=>s.value="daily")}," Daily ",2),h("button",{class:be(["filterTab",{active:s.value==="weekly"}]),onClick:m[1]||(m[1]=_=>s.value="weekly")}," Weekly ",2),h("button",{class:be(["filterTab",{active:s.value==="monthly"}]),onClick:m[2]||(m[2]=_=>s.value="monthly")}," Monthly ",2)]),h("div",DM,[h("button",{class:be(["mainTab",{active:n.value==="inProgress"}]),onClick:m[3]||(m[3]=_=>n.value="inProgress")}," 진행중 ",2),h("button",{class:be(["mainTab",{active:n.value==="completed"}]),onClick:m[4]||(m[4]=_=>n.value="completed")}," 완료 ",2)]),h("div",xM,[(L(!0),F(Ce,null,Be(f.value,_=>(L(),F("div",{key:_.id,class:"questCard"},[h("div",NM,[h("div",MM,[h("h3",OM,H(_.title),1),h("p",VM,H(_.description),1)]),m[5]||(m[5]=h("div",{class:"questCharacter"},[h("div",{class:"characterImg"},"🐱")],-1))]),_.completed&&!_.rewardReceived?(L(),F("button",{key:0,class:"rewardBtn",onClick:I=>u(_.id)}," 보상받기 ",8,LM)):_.completed&&_.rewardReceived?(L(),F("div",BM," ✓ 완료됨 ")):(L(),F("div",FM,[h("div",{class:"progressFill",style:yt({width:_.progress/_.total*100+"%"})},null,4),h("span",UM,H(_.progress)+"/"+H(_.total),1)]))]))),128))])]),Ae(zt)]))}},HM=ft($M,[["__scopeId","data-v-b2169bda"]]),jM="/tdl/assets/statStar1-DSWl6DZx.png",GM="/tdl/assets/statStar2-7A5sNtwf.png",qM={class:"inventoryPage"},QM={class:"mainContent"},zM={class:"topSection"},WM={class:"magicPanel"},KM={class:"panelTitle"},YM={class:"characterBox"},JM=["src"],XM={class:"profilePanel"},ZM={class:"progressBars"},eO={class:"statLabel"},tO={class:"barBg"},nO={class:"value"},sO={class:"inventoryGrid"},iO=["onClick"],rO={key:0,class:"newBadge"},oO={class:"starBadge"},aO=["src"],lO={class:"levelBadge"},cO=["src"],uO={__name:"InventoryPage",setup(t){const e=V(0),n=_=>[{name:"근력",value:_[0],progress:_[0],color:"#FF6B6B"},{name:"체력",value:_[1],progress:_[1],color:"#FF8A80"},{name:"지능",value:_[2],progress:_[2],color:"#9C27B0"},{name:"손재주",value:_[3],progress:_[3],color:"#FFA726"},{name:"용기",value:_[4],progress:_[4],color:"#00BCD4"},{name:"행운",value:_[5],progress:_[5],color:"#66BB6A"}],s=()=>Math.floor(Math.random()*3)+1,i=()=>Math.floor(Math.random()*10)+1,r=[{id:1,name:"Robot",selected:!0,stars:s(),level:i(),stats:n([33,7,29,10,11,10]),imageId:1,isNew:!1},{id:2,name:"Style",selected:!1,stars:s(),level:i(),stats:n([15,25,35,45,20,30]),imageId:2,isNew:!1},{id:3,name:"Suit",selected:!1,stars:s(),level:i(),stats:n([25,20,40,30,25,15]),imageId:3,isNew:!1},{id:4,name:"Tech",selected:!1,stars:s(),level:i(),stats:n([20,15,50,40,10,25]),imageId:4,isNew:!1},{id:5,name:"Army",selected:!1,stars:s(),level:i(),stats:n([45,40,15,20,50,10]),imageId:5,isNew:!1},{id:6,name:"Detective",selected:!1,stars:s(),level:i(),stats:n([20,25,45,30,35,25]),imageId:6,isNew:!1},{id:7,name:"Scholar",selected:!1,stars:s(),level:i(),stats:n([10,15,60,25,20,30]),imageId:7,isNew:!1},{id:8,name:"White",selected:!1,stars:s(),level:i(),stats:n([30,30,30,30,30,30]),imageId:8,isNew:!1},{id:9,name:"Green",selected:!1,stars:s(),level:i(),stats:n([25,35,20,25,30,35]),imageId:9,isNew:!1},{id:10,name:"Blue",selected:!1,stars:s(),level:i(),stats:n([20,30,35,30,25,30]),imageId:10,isNew:!1},{id:11,name:"Red",selected:!1,stars:s(),level:i(),stats:n([40,25,20,25,45,15]),imageId:11,isNew:!1},{id:12,name:"Shirt",selected:!1,stars:s(),level:i(),stats:n([22,28,32,28,22,28]),imageId:12,isNew:!1},{id:13,name:"Ninja",selected:!1,stars:s(),level:i(),stats:n([35,25,30,50,40,20]),imageId:13,isNew:!1},{id:14,name:"Knight",selected:!1,stars:s(),level:i(),stats:n([50,45,20,25,45,15]),imageId:14,isNew:!1},{id:15,name:"Pirate",selected:!1,stars:s(),level:i(),stats:n([40,35,25,35,50,25]),imageId:15,isNew:!1},{id:16,name:"Sailor",selected:!1,stars:s(),level:i(),stats:n([30,40,25,30,35,30]),imageId:16,isNew:!1},{id:17,name:"Sport",selected:!1,stars:s(),level:i(),stats:n([45,50,15,40,30,20]),imageId:17,isNew:!1},{id:18,name:"Cafe",selected:!1,stars:s(),level:i(),stats:n([20,25,30,45,25,35]),imageId:18,isNew:!1},{id:19,name:"Chef",selected:!1,stars:s(),level:i(),stats:n([25,30,25,50,20,30]),imageId:19,isNew:!1},{id:20,name:"Fisher",selected:!1,stars:s(),level:i(),stats:n([30,35,20,40,30,25]),imageId:20,isNew:!1},{id:21,name:"Farmer",selected:!1,stars:s(),level:i(),stats:n([40,45,20,35,25,30]),imageId:21,isNew:!1},{id:22,name:"Doctor",selected:!1,stars:s(),level:i(),stats:n([15,30,55,35,25,30]),imageId:22,isNew:!1},{id:23,name:"Teacher",selected:!1,stars:s(),level:i(),stats:n([20,25,50,30,30,25]),imageId:23,isNew:!1},{id:24,name:"Artist",selected:!1,stars:s(),level:i(),stats:n([15,20,40,55,25,35]),imageId:24,isNew:!1}],o=V([...r]),l=je(()=>{const _=o.value.find(I=>I.selected);return _&&_.stats?_.stats:n([33,7,29,10,11,10])}),c=je(()=>{const _=o.value.find(I=>I.selected);return _?_.name:"Magic"}),u=_=>{try{return new URL(Object.assign({"../assets/img/cat1.png":th,"../assets/img/cat10.png":nh,"../assets/img/cat11.png":sh,"../assets/img/cat12.png":ih,"../assets/img/cat13.png":rh,"../assets/img/cat14.png":oh,"../assets/img/cat15.png":ah,"../assets/img/cat16.png":lh,"../assets/img/cat17.png":ch,"../assets/img/cat18.png":uh,"../assets/img/cat19.png":hh,"../assets/img/cat2.png":dh,"../assets/img/cat20.png":fh,"../assets/img/cat21.png":ph,"../assets/img/cat22.png":gh,"../assets/img/cat23.png":mh,"../assets/img/cat24.png":_h,"../assets/img/cat25.png":vh,"../assets/img/cat26.png":yh,"../assets/img/cat27.png":Ah,"../assets/img/cat28.png":Ih,"../assets/img/cat29.png":wh,"../assets/img/cat3.png":Eh,"../assets/img/cat30.png":Th,"../assets/img/cat4.png":Ch,"../assets/img/cat5.png":bh,"../assets/img/cat6.png":Sh,"../assets/img/cat7.png":Rh,"../assets/img/cat8.png":Ph,"../assets/img/cat9.png":kh,"../assets/img/catProfile01.png":Dh,"../assets/img/catProfile02.png":xh,"../assets/img/cat_ico.png":Nh})[`../assets/img/cat${_}.png`],import.meta.url).href}catch{return`/src/assets/img/cat${_}.png`}},f=je(()=>{const _=o.value.find(I=>I.selected);return u(_?_.imageId||_.id:1)}),p=je(()=>{const _=o.value.filter(w=>w.isNew),I=o.value.filter(w=>!w.isNew);return[..._,...I]}),m=_=>{if(o.value.forEach(I=>I.selected=!1),_.selected=!0,_.isNew){_.isNew=!1;const I=nt();if(I){const w=o.value.map(S=>({...S,isNew:S.id===_.id?!1:S.isNew}));pn(I.id,{inventory:w})}}};return dt(()=>{const _=nt();if(_){e.value=_.gameData?.coins||0;const I=_.gameData?.inventory;if(I&&I.length>0){const w=[...r];I.forEach(S=>{const M=w.findIndex(U=>U.id===S.id);M>-1?w[M]={...w[M],...S}:w.push({...S,stats:n([Math.floor(Math.random()*40)+10,Math.floor(Math.random()*40)+10,Math.floor(Math.random()*40)+10,Math.floor(Math.random()*40)+10,Math.floor(Math.random()*40)+10,Math.floor(Math.random()*40)+10])})}),o.value=w}}}),(_,I)=>(L(),F("div",qM,[Ae(Qt,{coinCount:e.value},null,8,["coinCount"]),h("main",QM,[h("div",zM,[h("div",WM,[h("div",KM,H(c.value),1),h("div",YM,[h("img",{src:f.value,alt:"선택된 캐릭터",class:"selectedCharacter"},null,8,JM)])]),h("div",XM,[I[0]||(I[0]=h("div",{class:"panelTitle"},"Profile",-1)),h("div",ZM,[(L(!0),F(Ce,null,Be(l.value,(w,S)=>(L(),F("div",{key:S,class:"progressBar"},[h("div",eO,H(w.name),1),h("div",tO,[h("div",{style:yt({width:w.progress+"%",backgroundColor:w.color}),class:"barFill"},null,4)]),h("span",nO,H(w.value)+"%",1)]))),128))])])]),h("div",sO,[(L(!0),F(Ce,null,Be(p.value,w=>(L(),F("div",{key:w.id,class:be(["inventoryItem",{selected:w.selected}]),onClick:S=>m(w)},[w.isNew?(L(),F("div",rO,"NEW")):ue("",!0),h("div",oO,[(L(),F(Ce,null,Be(5,S=>h("img",{key:S,src:S<=w.stars?Pt(jM):Pt(GM),alt:"별",class:"starIcon"},null,8,aO)),64))]),h("div",lO," Lv "+H(String(w.level).padStart(2,"0")),1),h("img",{src:u(w.imageId||w.id),alt:"고양이",class:"itemIcon"},null,8,cO)],10,iO))),128))])]),Ae(zt)]))}},hO=ft(uO,[["__scopeId","data-v-8b8f967c"]]),dO="/tdl/assets/factory_cat-DD06P-8u.png",fO="/tdl/assets/factory_under_line-BMeQefpa.png",pO="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAAJCAYAAABE6JQbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgB7drRDYIwFAXQuoEjMIIjyEZuYNzATRgBN9ANYJPaKh8EwX5Xz0leaMjj+94AIczEGJs0fb4GAKB6xWyfFob4NigBAFC3YrYvFqISAAB1K2X7bjr0aZqV58c0lwAA1OYctrO9zQUgh/8xAAD/4lZ6A/BIcwoAQG2uaQ4r98c07eu08Z3gnmYfAIDq5Ayfsvz7/32LEiD8AaByixLwGf6zxVwCOuEPAL9hKgHdMvyfsGrpYuWe8x8AAAAASUVORK5CYII=",gO={class:"factoryPage"},mO={class:"mainContent"},_O={class:"materialsSection"},vO={class:"materialText"},yO={class:"materialCount"},AO={class:"materialText"},IO={class:"materialCount"},wO=["disabled"],EO={class:"popupCatImage"},TO=["src"],CO={__name:"FactoryPage",setup(t){const e=V(0),n=V(50),s=V(100),i=V(3),r=V(!1),o=V(1);dt(()=>{const I=nt();I&&(e.value=I.gameData?.totalCoin||0,n.value=50)});const l=()=>{if(e.value<s.value){alert(`코인이 부족합니다. (필요: ${s.value})`);return}if(n.value<i.value){alert(`고양이 파편이 부족합니다. (필요: ${i.value})`);return}const I=nt();if(I){e.value-=s.value,n.value-=i.value,o.value=p();const w=(I.gameData?.catCount||0)+1,S=I.gameData?.inventory||[],M={id:Date.now(),imageId:o.value,name:`Cat ${o.value}`,stars:Math.floor(Math.random()*3)+2,level:1,selected:!1,isNew:!0};S.unshift(M),pn(I.id,{totalCoin:e.value,catFragments:n.value,catCount:w,inventory:S}),window.dispatchEvent(new CustomEvent("userDataUpdated")),r.value=!0}},c=je(()=>e.value>=s.value&&n.value>=i.value),u=je(()=>e.value>=s.value),f=je(()=>n.value>=i.value),p=()=>Math.floor(Math.random()*30)+1,m=I=>{try{return new URL(Object.assign({"../assets/img/cat1.png":th,"../assets/img/cat10.png":nh,"../assets/img/cat11.png":sh,"../assets/img/cat12.png":ih,"../assets/img/cat13.png":rh,"../assets/img/cat14.png":oh,"../assets/img/cat15.png":ah,"../assets/img/cat16.png":lh,"../assets/img/cat17.png":ch,"../assets/img/cat18.png":uh,"../assets/img/cat19.png":hh,"../assets/img/cat2.png":dh,"../assets/img/cat20.png":fh,"../assets/img/cat21.png":ph,"../assets/img/cat22.png":gh,"../assets/img/cat23.png":mh,"../assets/img/cat24.png":_h,"../assets/img/cat25.png":vh,"../assets/img/cat26.png":yh,"../assets/img/cat27.png":Ah,"../assets/img/cat28.png":Ih,"../assets/img/cat29.png":wh,"../assets/img/cat3.png":Eh,"../assets/img/cat30.png":Th,"../assets/img/cat4.png":Ch,"../assets/img/cat5.png":bh,"../assets/img/cat6.png":Sh,"../assets/img/cat7.png":Rh,"../assets/img/cat8.png":Ph,"../assets/img/cat9.png":kh,"../assets/img/catProfile01.png":Dh,"../assets/img/catProfile02.png":xh,"../assets/img/cat_ico.png":Nh})[`../assets/img/cat${I}.png`],import.meta.url).href}catch{return`/src/assets/img/cat${I}.png`}},_=()=>{r.value=!1};return(I,w)=>(L(),F("div",gO,[Ae(Qt,{catCount:n.value},null,8,["catCount"]),h("main",mO,[w[4]||(w[4]=zg('<h1 class="pageTitle" data-v-3da76d7e>고양이 제작하기</h1><div class="catSilhouette" data-v-3da76d7e><div class="catCircle" data-v-3da76d7e><img src="'+dO+'" alt="고양이" class="catShape" data-v-3da76d7e></div></div><div class="factoryUnderLine" data-v-3da76d7e><img src="'+fO+'" alt="" class="factoryLine" data-v-3da76d7e></div><div class="divider" data-v-3da76d7e><div class="dividerLine" data-v-3da76d7e><img src="'+pO+'" alt="" class="dividerLineImg" data-v-3da76d7e></div></div>',4)),h("div",_O,[h("div",{class:be(["materialItem",{insufficient:!u.value}])},[w[1]||(w[1]=h("img",{src:oy,alt:"코인",class:"materialIcon"},null,-1)),h("span",vO,[h("span",yO,H(e.value),1),jr(" / "+H(s.value)+" Coin ",1)])],2),w[3]||(w[3]=h("div",{class:"plusSign"},"+",-1)),h("div",{class:be(["materialItem",{insufficient:!f.value}])},[w[2]||(w[2]=h("img",{src:cy,alt:"고양이",class:"materialIcon"},null,-1)),h("span",AO,[h("span",IO,H(n.value),1),jr(" / "+H(i.value)+" 고양이 파편 ",1)])],2)]),h("button",{class:be(["createButton",{disabled:!c.value}]),onClick:l,disabled:!c.value}," 데려 오기 ",10,wO)]),Ae(zt),r.value?(L(),F("div",{key:0,class:"popupOverlay",onClick:_},[h("div",{class:"popupContent",onClick:w[0]||(w[0]=kr(()=>{},["stop"]))},[h("div",EO,[h("img",{src:m(o.value),alt:"고양이"},null,8,TO)]),w[5]||(w[5]=h("h2",{class:"popupTitle"},"고양이 데려오기 성공!",-1)),w[6]||(w[6]=h("p",{class:"popupMessage"},"새로운 고양이가 인벤토리에 추가되었습니다!",-1)),h("button",{class:"popupCloseBtn",onClick:_},"확인")])])):ue("",!0)]))}},bO=ft(CO,[["__scopeId","data-v-3da76d7e"]]),SO={class:"settingsPage"},RO={class:"mainContent"},PO={class:"settingGroup"},kO={class:"settingGroup"},DO={class:"settingLabel"},xO={class:"settingInputWrapper"},NO={key:0,class:"dropdownMenu"},MO=["onClick"],OO={class:"settingGroup"},VO={class:"settingLabel"},LO={class:"settingInputWrapper"},BO={key:0,class:"dropdownMenu"},FO=["onClick"],UO={class:"settingSection"},$O={class:"sectionTitle"},HO={class:"settingToggle"},jO={class:"toggleLabel"},GO={class:"settingToggle"},qO={class:"toggleLabel"},QO={class:"settingGroup"},zO={class:"settingGroup"},WO={__name:"SettingsPage",setup(t){const e=qt(),n=V(0),s=V(null),i=V("한국어"),r=V("부산"),o=V(!0),l=V(!0),c=V(!1),u=V(!1),f=V(!1);V("");const p=["한국어","English"],m=["부산","서울","대구","인천"],_={ko:{language:"언어",region:"지역",soundSettings:"소리 설정",soundToggle:"소리 토글",viToggle:"Vi 토글",userID:"User ID",copySuccess:"User ID가 복사되었습니다!",english:"English"},en:{language:"Language",region:"Region",soundSettings:"Sound Settings",soundToggle:"Sound Toggle",viToggle:"Vibration Toggle",userID:"User ID",copySuccess:"User ID copied!",english:"English"}},I=je(()=>i.value==="한국어"?_.ko:_.en),w=U=>{i.value=U,c.value=!1,localStorage.setItem("appLanguage",U)},S=()=>{o.value=!o.value,localStorage.setItem("soundEnabled",o.value.toString()),window.dispatchEvent(new CustomEvent("soundSettingChanged",{detail:{enabled:o.value}}))};dt(()=>{const U=nt();U&&(s.value=U,n.value=U.gameData?.coins||0);const $=localStorage.getItem("appLanguage");$&&(i.value=$);const G=localStorage.getItem("soundEnabled");G!==null?o.value=G==="true":localStorage.setItem("soundEnabled","true"),M()});const M=()=>{if(!s.value)return;const U=new Date().toDateString(),$=localStorage.getItem(`checkIn_${s.value.id}`);f.value=$===U};return(U,$)=>(L(),F("div",SO,[Ae(Qt,{coinCount:n.value},null,8,["coinCount"]),h("main",RO,[h("div",PO,[h("button",{class:"userProfileBtn",onClick:$[0]||($[0]=G=>Pt(e).push("/profile"))},[...$[6]||($[6]=[h("span",{class:"userProfileIcon"},"👤",-1),h("span",null,"사용자 설정",-1),h("span",{class:"arrowIcon"},"→",-1)])])]),h("div",kO,[h("label",DO,H(i.value==="한국어"?"언어":"Language"),1),h("div",xO,[h("div",{class:"settingInput",onClick:$[1]||($[1]=G=>c.value=!c.value)},[h("span",null,H(i.value),1),$[7]||($[7]=h("span",{class:"dropdownIcon"},"▼",-1))]),c.value?(L(),F("div",NO,[(L(),F(Ce,null,Be(p,G=>h("div",{key:G,class:be(["dropdownItem",{active:i.value===G}]),onClick:ie=>w(G)},H(G),11,MO)),64))])):ue("",!0)])]),h("div",OO,[h("label",VO,H(I.value.region),1),h("div",LO,[h("div",{class:"settingInput",onClick:$[2]||($[2]=G=>u.value=!u.value)},[h("span",null,H(r.value),1),$[8]||($[8]=h("span",{class:"dropdownIcon"},"▼",-1))]),u.value?(L(),F("div",BO,[(L(),F(Ce,null,Be(m,G=>h("div",{key:G,class:be(["dropdownItem",{active:r.value===G}]),onClick:ie=>{r.value=G,u.value=!1}},H(G),11,FO)),64))])):ue("",!0)])]),h("div",UO,[h("h3",$O,H(I.value.soundSettings),1),h("div",HO,[h("label",jO,H(I.value.soundToggle),1),h("button",{class:be(["toggleSwitch",{active:o.value}]),onClick:S},[...$[9]||($[9]=[h("div",{class:"toggleHandle"},null,-1)])],2)]),h("div",GO,[h("label",qO,H(I.value.viToggle),1),h("button",{class:be(["toggleSwitch",{active:l.value}]),onClick:$[3]||($[3]=G=>l.value=!l.value)},[...$[10]||($[10]=[h("div",{class:"toggleHandle"},null,-1)])],2)])]),h("div",QO,[$[11]||($[11]=h("label",{class:"settingLabel"},"출석체크",-1)),h("button",{class:"checkInBtn",onClick:$[4]||($[4]=G=>Pt(e).push("/attendance"))}," 출석체크 하기 ")]),h("div",zO,[h("button",{class:"nftBtn",onClick:$[5]||($[5]=G=>Pt(e).push("/nft"))}," NFT ")])]),Ae(zt)]))}},KO=ft(WO,[["__scopeId","data-v-b5bff110"]]),YO={class:"profilePage"},JO={class:"mainContent"},XO={class:"profileHeader"},ZO={class:"profileImageWrapper"},eV=["src","alt"],tV={key:1,class:"profileImagePlaceholder"},nV={class:"profileInfo"},sV={class:"userName"},iV={class:"userEmail"},rV={class:"settingGroup"},oV={class:"settingLabel"},aV={class:"settingInput"},lV={class:"userId"},cV={key:0,class:"statsSection"},uV={class:"sectionTitle"},hV={class:"statsGrid"},dV={class:"statCard"},fV={class:"statInfo"},pV={class:"statLabel"},gV={class:"statValue"},mV={class:"statCard"},_V={class:"statInfo"},vV={class:"statLabel"},yV={class:"statValue"},AV={class:"statCard"},IV={class:"statInfo"},wV={class:"statLabel"},EV={class:"statValue"},TV={class:"statCard"},CV={class:"statInfo"},bV={class:"statLabel"},SV={class:"statValue"},RV={class:"logoutSection"},PV={__name:"UserProfilePage",setup(t){const e=qt(),{logout:n}=gm(),s=V(0),i=V(null),r=V("한국어"),o=V(""),l=V(""),c=V(""),u=V(""),f=V(!1),p={ko:{userProfile:"사용자 프로필",userID:"User ID",copySuccess:"User ID가 복사되었습니다!",logout:"로그아웃",logoutConfirm:"정말 로그아웃 하시겠습니까?",gameStats:"게임 통계",level:"레벨",points:"포인트",coins:"코인",catFragments:"고양이 파편",back:"← 뒤로"},en:{userProfile:"User Profile",userID:"User ID",copySuccess:"User ID copied!",logout:"Logout",logoutConfirm:"Are you sure you want to logout?",gameStats:"Game Stats",level:"Level",points:"Points",coins:"Coins",catFragments:"Cat Fragments",back:"← Back"}},m=je(()=>r.value==="한국어"?p.ko:p.en);dt(()=>{const S=nt();S?(i.value=S,s.value=S.gameData?.coins||0,S.uid||S.email?(f.value=!0,o.value=S.email||"",l.value=S.displayName||S.name||o.value.split("@")[0],c.value=S.photoURL||"",u.value=S.uid||S.id||""):(o.value=S.email||S.id||"",l.value=S.name||o.value.split("@")[0]||"User",u.value=S.id||"ID"+String(Math.random()).substring(2,10))):e.push("/login");const M=localStorage.getItem("appLanguage");M&&(r.value=M)});const _=()=>{navigator.clipboard.writeText(u.value),alert(m.value.copySuccess)},I=async()=>{if(confirm(m.value.logoutConfirm))try{if(f.value){const S=await ry();S.success||console.error("Firebase 로그아웃 실패:",S.error)}Qp(),n(),e.push("/login")}catch(S){console.error("로그아웃 오류:",S),Qp(),n(),e.push("/login")}},w=je(()=>i.value?{level:i.value.gameData?.level||1,points:i.value.gameData?.coins||0,coins:i.value.gameData?.totalCoin||0,catFragments:i.value.gameData?.catFragments||i.value.gameData?.catCount||0}:null);return(S,M)=>(L(),F("div",YO,[Ae(Qt,{coinCount:s.value},null,8,["coinCount"]),h("main",JO,[h("button",{class:"backBtn",onClick:M[0]||(M[0]=U=>Pt(e).push("/settings"))},H(m.value.back),1),h("div",XO,[h("div",ZO,[c.value?(L(),F("img",{key:0,src:c.value,alt:l.value,class:"profileImage"},null,8,eV)):(L(),F("div",tV,H(l.value.charAt(0).toUpperCase()),1))]),h("div",nV,[h("h2",sV,H(l.value),1),h("p",iV,H(o.value),1)])]),h("div",rV,[h("label",oV,H(m.value.userID),1),h("div",aV,[h("span",lV,H(u.value),1),h("button",{class:"copyBtn",onClick:_},"📋")])]),w.value?(L(),F("div",cV,[h("h3",uV,H(m.value.gameStats),1),h("div",hV,[h("div",dV,[M[1]||(M[1]=h("div",{class:"statIcon"},"⭐",-1)),h("div",fV,[h("div",pV,H(m.value.level),1),h("div",gV,H(w.value.level),1)])]),h("div",mV,[M[2]||(M[2]=h("div",{class:"statIcon"},"💰",-1)),h("div",_V,[h("div",vV,H(m.value.points),1),h("div",yV,H(w.value.points.toLocaleString()),1)])]),h("div",AV,[M[3]||(M[3]=h("div",{class:"statIcon"},"🪙",-1)),h("div",IV,[h("div",wV,H(m.value.coins),1),h("div",EV,H(w.value.coins.toLocaleString()),1)])]),h("div",TV,[M[4]||(M[4]=h("div",{class:"statIcon"},"🐱",-1)),h("div",CV,[h("div",bV,H(m.value.catFragments),1),h("div",SV,H(w.value.catFragments.toLocaleString()),1)])])])])):ue("",!0),h("div",RV,[h("button",{class:"logoutBtn",onClick:I},H(m.value.logout),1)])]),Ae(zt)]))}},kV=ft(PV,[["__scopeId","data-v-7270c089"]]),DV={class:"attendancePage"},xV={class:"mainContent"},NV={key:0,class:"attendanceMessage"},MV={class:"attendanceGrid"},OV=["onClick"],VV={class:"dayNumber"},LV={class:"rewardIcon"},BV={key:0,class:"specialStar"},FV={class:"rewardAmount"},UV={__name:"AttendancePage",setup(t){const e=qt(),n=V(0),s=V(null),i=V(0),r=V([]),o=V(Array.from({length:20},(m,_)=>({day:_+1,reward:"1K",rewardType:"P",hasSpecial:[5,9,10,11,16,17].includes(_+1),isChecked:!1}))),l=()=>{e.go(-1)},c=m=>{if(!s.value){alert("로그인이 필요합니다.");return}const _=new Date().toDateString();if(localStorage.getItem(`attendance_checkIn_${s.value.id}`)===_){alert("오늘 이미 출석체크를 완료했습니다! 내일 다시 시도해주세요.");return}const w=o.value[m];if(w.isChecked){alert("이미 체크된 날짜입니다.");return}if(r.value.length===0||m===r.value.length){w.isChecked=!0,r.value.push(w.day);const S=1e3;n.value+=S,localStorage.setItem(`attendance_checkIn_${s.value.id}`,_),p.value=!0,s.value&&Q2(s.value.id,n.value),u(),alert(`Day ${w.day} 출석체크 완료! ${S} 포인트 획득!`)}else alert("연속 출석체크만 가능합니다.")},u=()=>{if(s.value){const m={checkedDays:r.value,attendanceDays:r.value.length,lastUpdate:new Date().toISOString()};localStorage.setItem(`attendance_${s.value.id}`,JSON.stringify(m))}},f=()=>{if(s.value){const m=localStorage.getItem(`attendance_${s.value.id}`);if(m){const _=JSON.parse(m);r.value=_.checkedDays||[],i.value=_.attendanceDays||0,r.value.forEach(I=>{const w=I-1;o.value[w]&&(o.value[w].isChecked=!0)})}}},p=V(!1);return dt(()=>{if(s.value=nt(),s.value){n.value=s.value.gameData?.coins||0;const m=new Date().toDateString(),_=localStorage.getItem(`attendance_checkIn_${s.value.id}`);p.value=_===m}f()}),(m,_)=>(L(),F("div",DV,[Ae(Qt,{coinCount:n.value},null,8,["coinCount"]),h("main",xV,[h("button",{class:"backBtn",onClick:l},"← 뒤로"),_[1]||(_[1]=h("h1",{class:"pageTitle"},"출석체크",-1)),p.value?(L(),F("div",NV," 오늘 출석체크를 완료했습니다! 내일 다시 시도해주세요. ")):ue("",!0),h("div",MV,[(L(!0),F(Ce,null,Be(o.value,(I,w)=>(L(),F("div",{key:I.day,class:be(["dayCell",{checked:I.isChecked,disabled:p.value&&!I.isChecked}]),onClick:S=>!p.value||I.isChecked?c(w):null},[h("div",VV,"Day "+H(I.day),1),h("div",LV,[_[0]||(_[0]=h("div",{class:"iconCircle"},"P",-1)),I.hasSpecial&&!I.isChecked?(L(),F("span",BV,"⭐")):ue("",!0)]),h("div",FV,H(I.reward),1)],10,OV))),128))])]),Ae(zt)]))}},$V=ft(UV,[["__scopeId","data-v-41a53f6b"]]),HV="/tdl/assets/btc-DC8WHF5v.png",jV="/tdl/assets/eth-DHgp7Wvq.png",GV="/tdl/assets/BTC_line-DiGuGbEI.png",qV="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAACJCAYAAABaWIDDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA85SURBVHgB7d1fchPHFsfxMybJw61KhbuCTN5yqRDbK0BeAXgFmBXErACxguAVYFZgswLEClBibnLf7rCCKDhVqSJGndPqNghibHXPjKZ75vupUqQYy/yxpf5Nd5/ThQAAMBBGtq7r3ZbIfFPvS5GidPeiHzfX3f2yotL/zPxNHxu9bfxkHxcynUrGCgEAoKf8gD/SAf+WDnl39COlNKqwIaDSrzvNLRgQAAAAveIHfTvY39WbXu1/fFW/DsVEFrMGZuKDwSy1YEAAAAD0gg78I73Sv60P96STQf9KMz9jsBwM7IxBJR0gAAAAsuYGfvNAbyPJkw8Gxi8nLILBVIPBTFpEAAAAZEkHfp3eNz9mPPBfpdVgQAAAAGTFrfHPx/rwBxmmRoIBAQAAkA0jN+/o0PVY0lzj71pQMHgXAHyi2tcP2dpI/mHXa+ZqS+19P+pLAaBJXPXXshQMNg7ONx0uAoAmqj19qOsoDPwJqfw37Fi/YU/b3gwCAKnSwb/Uwf+ZuIY9qMdecN4r5OS48P+w/xckrjjU2xMNAhMBgIFoacr/vKvfxHX6szOwb1/p/W8if/5eSDVzv/d/vtZf/7fIta/edwy0fQUWj7ckX/r3O9vRALCp/7BmT5CLSm/jQn5+IgDQY0a+12Vp+VGaUbkZVdHb6U/ng3wdGk5uiQsmI1kEgsK3Gc6BmWgA+F4TD1P/+Sn0h7i431UDCQBok45NY717IPXY6e5DvT/WKe/nsgZGSh1PvzzfSzcSFwxKSW/5YmYDgBHk7KHOBowFAHqigcFfB/75I5E/Dpq40m/C+2BQbPnzCLbc4+4uwG0AsOv/pSBndmfnLrMBAHJXc/BPbuC/SofBYGoDgP2HHgtyV2kI2CEEAMhVvTV/u6Hvr3uF/K+SHlhDMNgvfG3lM8l7RyMct7NTfqGHAICsuLa+8xcSzl71jwt5eSAD0FAwmOrS8bbvA2BDwFtNXcWeIHeEAABZqVHnX+n73S7vdyHBwOgSyelDu0RSXPwFsEbXfelI6etLR1J/isd2FNxmOQBADoxsPos40EcH/dc7uaz1d8XIjS3Xx8D6sPyRswAS5GtL93wYKCVOxZ4AAKmL2/RnS/tO7zP410MASJxv02xfHKWEm/oQwIsEQHLiOtGaw0JO7glq2xAkTX/QD0Xe7Lh1m2Bbbm8HAKTIHAV9uphjBv/mEAAyYMta9If+vv7w74prBRzy7D0/xQYAyXCzmyak+qzSaX8G/waxBJAZI9+WIl9E7JY1u/b0JwGABAQ2oavsTGhfavxTwQxAZtwLwC4JBM8EPHbrbQDQLT8rWQY8Zczg3zwCQIaWQkDI5r5FwydCAIAu+feguwHPeMTpp+0gAGTKhYD5btizbOKeB266AYAmzfckaOr/9KGgFQSAjBXycqJ39yXMlk6/URkAYO3Cr/7t1D+1/m0hAGROp8YeRZQI7lMZAGD9TEhPkylT/+2iCqAnjNx85jsHhjyLygAAaxHe9MeM9P3puaA1zAD0xrWYHgFUBgBYExPQ7tdMGPzbxwxAj/geAfY4zZDDhCrODADQpvCr/zffUPbXPmYAeoTKAABpCrr6P2TwXw8CQM9QGQAgJe7q3+yt/oy/KPtbEwJAD9WoDNgXAGgUV/+pYg9Aj8VVBsx3/CwCANTC2n/amAHotZjKgI0jKgMANMM8Dvhcrv7XjBmAnqtRGbBdyJQOXACi6IXEyJ4/svozuPpfN2YAes69oEzoGdqlyFsqAwDUYAI2FnP13wUCwAC4bn/zsQQpRlQGAIhh5Oae/ndrxU+v2PnfDZYABkRflDqgF6E7/e+7qgIgLX6vih1k7FHXX7uPFuXSZ9glLL+MtfFK3H6YiqZX7dOLB7vxr1zts+fjQl4SADpAABgYfWHa/QCrJnOPygB0yw/2I310SxY/v8b+f8i+lmUaCoqpfg29bdh2s1NCQXPc1X+x6ua/Stf+d5j+7wYBYGD8pkC7MacMeNrMbwqsBFgTv4nstr5N3fEDfotsIBC9FU+FQFBL4NX/vl5cHAg6QQAYICoDkCod9O10vl2m+kHir/CbUOnb48QeSmNnCQgEqwm9+tflxW8EnSEADJS+UPWqqgjc6b84oWtHgIa5q33bMc6MJE2VXzY41kDwkwaCqeADvulPyOzingaAJ4LOEAAGzMh3+oa7MZYwj/RFG3rWAHChDAb+T6kIBB8ysvk4oOc/V/8JIAAMHJUB6II/IOaBBB0Sk7TZR0sGgwoE/hyRkLJhrv4TQAAAlQFYKz9Y2ANiulzjb9tyILAzBBPpKQ1z+t4xfxHwFK7+E0EAAJUBWAt/1f84w+n+Jsw+WjKYSA/4wd++d4SEOa7+E0EAwIKRG/pC/iz0hVxRGYBV+N3hdoq4z1f9Ic4DwcQvGUwkM3GDv235exLamhwtIQDgncASnvNnURmAS+mUv90v8oO0o3INfRYDanXxpyx6COit8F0DU/XBHoKJJCwy0On36M02TX/SQQDAB6gMQFNcTf9iyv+ONGPmBvvi2N2f6lR6FTT7ZKTUP9OXm/asC7cUYe9TtQgEtlvheXOizmfafJ+GsUQFOpr+pIYAgH/QdH+oPxp3JQyVAXjHDxR2ejhwc+mFX22iP4+HIq+fhg74K311uXlrKRAkPEvQbSDwnRntDGEpwYxeJJxwkZAYAgD+If7Nm8oARDWEuYgObnMNlH8ctDHoX8YHgi03c5F0IHi3h0D/Z9JWIGigV0Ol4W173d9HXI0AgAtRGYAYPjzakrBS4nQ28H/KUiAY+SWDHAJBrfMM/Pfxrj+HYSTxKg77SRcBAJ9EZQBC1J/2N4e6rn8/9StF/7q4lUcgeHfAUXVZcyL3vbPft/mmH/SbmPmoGPzTRgDApagMwKqMbB5FbvirbEdA/Zl5LhlygeCaHTBv+yWDUpK1qJSY+dt1dzP+vlEVg3/6CAC4EpUBuEp8qZ+dsj7d7dP6cF6BoBUVg38eCABYCZUB+BQd/MfiWvsGmo8LeflQes7tp/l8pA99tUGfA0H/Al2fEQCwEioDcJEag/9ga8I/CgT29RS5ZyI11PnnhgCAlVEZgGURJ8B5b3W9/7/0gvd8INjUh3cyDQRTkbN7hfwyFWSFAIAgVAbA0iUhO1gdSTAG/6v4boU6OyAjv2SQaiCY+WUcrvozRQBAMCoDhi3yBDgZypp/0xIMBMn1akAcAgCiUBkwTPFd/hj8m/L+PAO7ZGDDwNrOM9Ap/vkxA39/EAAQjcqAYWHwT1PLBxxV+jV10JfjXPs04NMIAIhGZcBwxA/+nP/ehaUDjuwMQSmrvUbtVX3lD1/Sq/2/dNnu11eC3iIAoJbIyoBKlw92qAzIQ40Wv1Od7dkWJMHNFPyrFLn21fuPvv1df+U3kT9/Z1p/eAgAqI3KgH6LbPFbcQIckLYNAWpy9b8mdHNfqVcfgZUEWDfX4jdm8LetYBn8gZQRANAIXec9tJu9JEhxx3eSQ4L89ya0v39FH3ggDywBoFFUBvRDZItfveJ/s83gD+SBAIBGxW8YO9umlWga4lv88j0EcsISABrlNvW92ZXFVHCIz45cqRm65Fr8xvb3Z/AHckIAQOPcFPCZDQEhm8BKO3PgZhDQBdfit4jYmGkb/dDfH8gNAQCtoDIgL77Rjz3ch/7+wEAQANAaKgPyQItfYJjYBIjWURmQLlr8AsNFAEDrIisDZiJnO2wsa098xQZHOwN9wBIAWhdZGXCdyoC2GbvfIri/v8jprgDIHgEAa1GjMuCIyoDm1Wjxu0uLX6AfCABYGz+dH7ppTK9Q30bUpeNTaPELwCIAYK3cxr7gyoA9KgOaUaPFL4M/0DNsAkQnjNw8siV/EmZPAwQNZyJFtvhlMybQUwQAdMLvQH8hYeVnDEaRXIvf4kiC2Ra/dPkD+oglAHTCVwbYUrIq4GlUBkSo0eJ3n8Ef6C8CADqzVBkQoqQyYHU1W/weCIDeIgCgU346P/TMACoDVkCLXwCXIQCgc1QGNK9ei18Gf2AI2ASIZFAZ0Axa/AJYBTMASMg1e7hMJWEeGbkR2s6252jxC+BqBAAkg8qA+mjxC2BVBAAkxVUGzEOPmS2pDKDFL4AwBAAkp5CXE6EyIAgtfgGEIgAgSa4ywDwKfNYgKwN8i9+Iwf+MwR8YMKoAkDQjN5/pj+lIwgymMoAWvwBiMQOAxF2zO9MrCTOIygBa/AKogwCApC1VBoTsUO99ZQAtfgHURQBA8nxlAGcGeLT4BdAEAgCyQGWAU6PF7yMGfwDL2ASIrBi5qQN6sR/4tIeF/DyWzNVo8XtcyAld/gB8gBkAZEUHsvu2Z72EeWDk+7uSvegWv6GNlQAMAAEAGRpeZQAtfgE0jQCA7AytMoAWvwDaQABAloZSGRDZ4rdi8AdwFQIAstX3yoAaLX53GfwBXIUAgKz19cwA1+JXIoKKuVfIL1MBgCtQBohe6NOZAa7F76LcL7TL3z5d/gCsihkA9EQ/KgNo8QtgXZgBQG8Y+bYU+eKFhA2e/ljc7qfNafELYJ2YAUBvRFYG2PLAZ37NvTM6+I/0z27DSylBaPELIA4BAL0SWRmgIaA46mpjoNvtH7Pmv2jxG/p3BYAFlgDQS5FnBliV5mJdEphW0jI35W/b+5qRhNMli9c7dPkDEIsAgN6KrAzwikO9PWwjCPhDfWw4sd39YpoSVTT6AVAXAQC95QfaiHX1ZYsgcKBBoPYmQb/Of1sf7kncwG9VDP4AmkAAQK/5yoCInfX/UOntWJcHnur91J1HcNXvvWg5bGv6R/pSuxU51f/Rn4HBH0AzCADovQZDwJLCzgjYEFDp71AtfbwUd3WvA78ppTkVgz+AJhEAMAjthIC1qRj8ATSNMkAMghs87RHCZiJ5mTL4A2gDAQCDYQfRQk52bOc8yYI95Og1gz+AVrAEgEEy8t1I8+9jSXNJYOZO9Ts5FgBoCTMAGCTXMXBjO73ZgMVV/zcM/gDaxgwABs9tEPz8gb4c9qQzi70JYx34nwsArAEBAPA6CAJ2qt9e6R8y8ANYNwIA8BEfBEb68G58K+FLf4eJfl0d+F8/oZc/gK4QAIBLGCmvi3x5Sx+OfBjYknBT/Up6KyY66D9l0AeQAgIAEMjIDQ0B177yXf/KCz6l0s/SQf5sWsivrwQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA0PwNkHeXO5vHqaMAAAAASUVORK5CYII=",QV="/tdl/assets/catProfile01-gY0Djz81.png",zV="/tdl/assets/catProfile02-Cesbpkj5.png",WV="/tdl/assets/eth_ico-CaIyIapE.png",KV={class:"nftPage"},YV={class:"mainContent nftWrap"},JV={class:"walletSection"},XV={class:"walletBalance"},ZV={class:"btcInfo"},e4={class:"change positive"},t4={class:"tabMenu"},n4={key:0,class:"itemList"},s4={class:"itemIcon"},i4={class:"itemInfo"},r4={class:"itemSymbol"},o4={class:"itemName"},a4={class:"itemChart"},l4={class:"itemPrice"},c4={class:"price"},u4={key:1,class:"nftList"},h4={class:"nftThumbnail"},d4={class:"nftInfo"},f4={class:"nftId"},p4={class:"collectionName"},g4={class:"nftValue"},m4={class:"ethAmount"},_4=["src"],v4={class:"usdValue positive"},y4={__name:"NFTPage",setup(t){const e=V(0),n=V("tokens"),s=V("$ 5,323.00"),i=V("0.00335"),r=V("+6.54%"),o=V(!1),l=V(!1),c=V(!1),u=nt();u&&(e.value=u.gameData?.coins||0);const f=$=>{n.value=$},p=()=>{o.value=!0},m=()=>{o.value=!1},_=()=>{l.value=!0},I=()=>{l.value=!1},w=()=>{c.value=!0},S=()=>{c.value=!1},M=V([{id:1,name:"Bitcoin",symbol:"BTC",price:"36,590.00",change:"+6.21%",isPositive:!0,image:HV,lineImage:GV},{id:2,name:"Ethereum",symbol:"ETH",price:"2,590.00",change:"+5.21%",isPositive:!0,image:jV,lineImage:qV}]),U=V([{id:1,nftId:"#1957",collectionName:"Bored Ape Yacht Club",ethAmount:"64",usdValue:"23,114.57",image:QV},{id:2,nftId:"#6513",collectionName:"Bored Ape Yacht Club",ethAmount:"199.8",usdValue:"45,114.57",image:zV}]);return($,G)=>(L(),F("div",KV,[Ae(Qt,{coinCount:e.value},null,8,["coinCount"]),h("main",YV,[h("div",JV,[G[5]||(G[5]=h("div",{class:"walletLabel"},"Current Wallet Balance",-1)),h("div",XV,H(s.value),1),h("div",ZV,[h("span",null,"BTC : "+H(i.value),1),h("span",e4,H(r.value),1)])]),h("div",{class:"actionButtons"},[h("button",{class:"actionBtn sendBtn",onClick:_},[...G[6]||(G[6]=[h("div",{class:"btnIcon"},null,-1),h("span",{class:"btnLabel"},"Send",-1)])]),h("button",{class:"actionBtn buyBtn",onClick:p},[...G[7]||(G[7]=[h("div",{class:"btnIcon"},null,-1),h("span",{class:"btnLabel"},"Buy",-1)])]),h("button",{class:"actionBtn receiveBtn",onClick:w},[...G[8]||(G[8]=[h("div",{class:"btnIcon"},null,-1),h("span",{class:"btnLabel"},"Receive",-1)])])]),h("div",t4,[h("button",{class:be(["tab",{active:n.value==="tokens"}]),onClick:G[0]||(G[0]=ie=>f("tokens"))}," Tokens ",2),h("button",{class:be(["tab",{active:n.value==="nfts"}]),onClick:G[1]||(G[1]=ie=>f("nfts"))}," NFTs ",2)]),n.value==="tokens"?(L(),F("div",n4,[(L(!0),F(Ce,null,Be(M.value,ie=>(L(),F("div",{key:ie.id,class:"item"},[h("div",s4,[h("div",{class:"iconCircle",style:yt({backgroundImage:`url(${ie.image})`})},null,4)]),h("div",i4,[h("div",r4,H(ie.symbol),1),h("div",o4,H(ie.name),1)]),h("div",a4,[h("div",{class:"chartLine",style:yt({backgroundImage:`url(${ie.lineImage})`})},null,4)]),h("div",l4,[h("div",c4,"$"+H(ie.price),1),h("div",{class:be(["change",{positive:ie.isPositive,negative:!ie.isPositive}])},H(ie.change),3)])]))),128))])):ue("",!0),n.value==="nfts"?(L(),F("div",u4,[(L(!0),F(Ce,null,Be(U.value,ie=>(L(),F("div",{key:ie.id,class:"nftItem"},[h("div",h4,[h("div",{class:"thumbnailPlaceholder",style:yt({backgroundImage:`url(${ie.image})`})},null,4)]),h("div",d4,[h("div",f4,H(ie.nftId),1),h("div",p4,H(ie.collectionName),1)]),h("div",g4,[h("div",m4,[h("img",{src:Pt(WV),alt:"ETH",class:"ethIcon"},null,8,_4),h("span",null,H(ie.ethAmount),1)]),h("div",v4,[G[9]||(G[9]=h("span",{class:"arrowUp"},"↑",-1)),h("span",null,"$ "+H(ie.usdValue),1)])])]))),128))])):ue("",!0)]),Ae(zt),o.value?(L(),F("div",{key:0,class:"popupOverlay",onClick:m},[h("div",{class:"popupContent",onClick:G[2]||(G[2]=kr(()=>{},["stop"]))},[h("div",{class:"popupHeader"},[G[10]||(G[10]=h("h2",{class:"popupTitle"},"구매하기",-1)),h("button",{class:"closeBtn",onClick:m},"×")]),h("div",{class:"popupBody"},[G[11]||(G[11]=h("p",{class:"popupMessage"},"구매해주세요",-1)),h("div",{class:"popupActions"},[h("button",{class:"popupBtn cancelBtn",onClick:m},"취소"),h("button",{class:"popupBtn confirmBtn",onClick:m},"확인")])])])])):ue("",!0),l.value?(L(),F("div",{key:1,class:"popupOverlay",onClick:I},[h("div",{class:"popupContent",onClick:G[3]||(G[3]=kr(()=>{},["stop"]))},[h("div",{class:"popupHeader"},[G[12]||(G[12]=h("h2",{class:"popupTitle"},"전송하기",-1)),h("button",{class:"closeBtn",onClick:I},"×")]),h("div",{class:"popupBody"},[G[13]||(G[13]=h("p",{class:"popupMessage"},"전송해주세요",-1)),h("div",{class:"popupActions"},[h("button",{class:"popupBtn cancelBtn",onClick:I},"취소"),h("button",{class:"popupBtn confirmBtn",onClick:I},"확인")])])])])):ue("",!0),c.value?(L(),F("div",{key:2,class:"popupOverlay",onClick:S},[h("div",{class:"popupContent",onClick:G[4]||(G[4]=kr(()=>{},["stop"]))},[h("div",{class:"popupHeader"},[G[14]||(G[14]=h("h2",{class:"popupTitle"},"받기",-1)),h("button",{class:"closeBtn",onClick:S},"×")]),h("div",{class:"popupBody"},[G[15]||(G[15]=h("p",{class:"popupMessage"},"받아주세요",-1)),h("div",{class:"popupActions"},[h("button",{class:"popupBtn cancelBtn",onClick:S},"취소"),h("button",{class:"popupBtn confirmBtn",onClick:S},"확인")])])])])):ue("",!0)]))}},A4=ft(y4,[["__scopeId","data-v-7f13a3bd"]]),I4={class:"notificationPage"},w4={class:"mainContent"},E4={class:"pageHeader"},T4={class:"notificationList"},C4=["onClick"],b4={class:"notificationContent"},S4={class:"notificationTitle"},R4={class:"notificationMessage"},P4={class:"notificationTime"},k4={key:0,class:"unreadDot"},D4={key:0,class:"emptyState"},x4={__name:"NotificationPage",setup(t){const e=qt(),n=V(0),s=V([{id:1,title:"새로운 퀘스트가 도착했습니다!",message:"일일 퀘스트를 완료하고 보상을 받아보세요.",time:"5분 전",read:!1,type:"quest"},{id:2,title:"Coin 구매 완료",message:"1억 Coin 구매가 완료되었습니다.",time:"1시간 전",read:!1,type:"exchange"},{id:3,title:"고양이 제작 완료",message:"새로운 고양이가 인벤토리에 추가되었습니다!",time:"2시간 전",read:!0,type:"factory"},{id:4,title:"출석체크 보상",message:"출석체크를 완료하여 100 Point를 받았습니다.",time:"1일 전",read:!0,type:"attendance"}]);dt(()=>{const c=nt();c&&(n.value=c.gameData?.coins||0)});const i=c=>{c.read||(c.read=!0)},r=()=>{s.value.forEach(c=>{c.read=!0})},o=je(()=>s.value.filter(c=>!c.read).length),l=c=>{switch(i(c),c.type){case"quest":e.push("/quest");break;case"exchange":e.push("/exchange");break;case"factory":e.push("/factory");break;case"attendance":e.push("/attendance");break}};return(c,u)=>(L(),F("div",I4,[Ae(Qt,{coinCount:n.value},null,8,["coinCount"]),h("main",w4,[h("div",E4,[u[0]||(u[0]=h("h1",{class:"pageTitle"},"알림",-1)),o.value>0?(L(),F("button",{key:0,class:"markAllReadBtn",onClick:r}," 모두 읽음 ")):ue("",!0)]),h("div",T4,[(L(!0),F(Ce,null,Be(s.value,f=>(L(),F("div",{key:f.id,class:be(["notificationItem",{unread:!f.read}]),onClick:p=>l(f)},[h("div",b4,[h("div",S4,H(f.title),1),h("div",R4,H(f.message),1),h("div",P4,H(f.time),1)]),f.read?ue("",!0):(L(),F("div",k4))],10,C4))),128)),s.value.length===0?(L(),F("div",D4,[...u[1]||(u[1]=[h("p",null,"알림이 없습니다.",-1)])])):ue("",!0)])]),Ae(zt)]))}},N4=ft(x4,[["__scopeId","data-v-1cfef43b"]]),M4={class:"shopPage"},O4={class:"mainContent"},V4={class:"itemList"},L4={class:"itemInfo"},B4={class:"itemName"},F4={class:"itemDescription"},U4={class:"itemPrice"},$4={class:"priceValue"},H4={class:"priceCurrency"},j4={key:0,src:ay,alt:"P",class:"currencyIcon"},G4={key:1,src:ly,alt:"C",class:"currencyIcon"},q4=["disabled","onClick"],Q4={__name:"ShopPage",setup(t){const e=V(0),n=V(0),s=V([{id:1,name:"에너지 100",description:"에너지를 100 회복합니다",price:100,currency:"point",amount:100},{id:2,name:"에너지 500",description:"에너지를 500 회복합니다",price:450,currency:"point",amount:500},{id:3,name:"에너지 1000",description:"에너지를 1000 회복합니다",price:800,currency:"point",amount:1e3},{id:4,name:"에너지 2000",description:"에너지를 2000 회복합니다",price:1500,currency:"point",amount:2e3}]),i=()=>{const o=nt();o&&(e.value=o.gameData?.coins||0,n.value=o.gameData?.totalCoin||0)},r=o=>{const l=nt();if(!l){alert("로그인이 필요합니다.");return}if(o.currency==="point"&&e.value<o.price){alert("포인트가 부족합니다.");return}if(o.currency==="coin"&&n.value<o.price){alert("코인이 부족합니다.");return}if(o.currency==="point"){const p=e.value-o.price;ka(l.email,p,n.value)}else{const p=n.value-o.price;ka(l.email,e.value,p)}const c=4e3,u=parseInt(localStorage.getItem("currentEnergy")||c.toString()),f=Math.min(u+o.amount,c);localStorage.setItem("currentEnergy",f.toString()),localStorage.setItem("energyLastDate",new Date().toDateString()),alert(`${o.name} 구매 완료! 에너지가 ${o.amount} 회복되었습니다. (현재: ${f}/${c})`),i(),window.dispatchEvent(new Event("userDataUpdated"))};return dt(()=>{i()}),(o,l)=>(L(),F("div",M4,[Ae(Qt,{coinCount:e.value},null,8,["coinCount"]),h("main",O4,[h("div",V4,[(L(!0),F(Ce,null,Be(s.value,c=>(L(),F("div",{key:c.id,class:"shopItem"},[h("div",L4,[h("h3",B4,H(c.name),1),h("p",F4,H(c.description),1)]),h("div",U4,[h("span",$4,H(c.price.toLocaleString()),1),h("span",H4,[c.currency==="point"?(L(),F("img",j4)):(L(),F("img",G4))])]),h("button",{class:"buyBtn",disabled:c.currency==="point"&&e.value<c.price||c.currency==="coin"&&n.value<c.price,onClick:u=>r(c)}," 구매 ",8,q4)]))),128))])]),Ae(zt)]))}},z4=ft(Q4,[["__scopeId","data-v-c9b1c691"]]),W4=[{path:"/",redirect:"/loading"},{path:"/loading",component:_w},{path:"/login",component:_2},{path:"/signup",component:x2},{path:"/main",component:ix},{path:"/mining",component:Ex},{path:"/hunting",component:Xx},{path:"/exploration",component:SN},{path:"/production",component:aM},{path:"/exchange",component:SM},{path:"/quest",component:HM},{path:"/inventory",component:hO},{path:"/factory",component:bO},{path:"/settings",component:KO},{path:"/profile",component:kV},{path:"/attendance",component:$V},{path:"/nft",component:A4},{path:"/notification",component:N4},{path:"/shop",component:z4}],K4=fw({history:qI(),routes:W4}),hy=iI(pw);hy.use(K4);hy.mount("#app");
