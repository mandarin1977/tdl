(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Qc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const tt={},$i=[],Qn=()=>{},Kp=()=>!1,Ga=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Wc=t=>t.startsWith("onUpdate:"),sn=Object.assign,zc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},xy=Object.prototype.hasOwnProperty,ze=(t,e)=>xy.call(t,e),_e=Array.isArray,Hi=t=>_o(t)==="[object Map]",lr=t=>_o(t)==="[object Set]",yd=t=>_o(t)==="[object Date]",Te=t=>typeof t=="function",St=t=>typeof t=="string",es=t=>typeof t=="symbol",nt=t=>t!==null&&typeof t=="object",Yp=t=>(nt(t)||Te(t))&&Te(t.then)&&Te(t.catch),Jp=Object.prototype.toString,_o=t=>Jp.call(t),Ny=t=>_o(t).slice(8,-1),Xp=t=>_o(t)==="[object Object]",Kc=t=>St(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Lr=Qc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qa=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},My=/-\w/g,xn=qa(t=>t.replace(My,e=>e.slice(1).toUpperCase())),Oy=/\B([A-Z])/g,Ei=qa(t=>t.replace(Oy,"-$1").toLowerCase()),Qa=qa(t=>t.charAt(0).toUpperCase()+t.slice(1)),xl=qa(t=>t?`on${Qa(t)}`:""),Fs=(t,e)=>!Object.is(t,e),Ko=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Zp=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},ua=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ad;const Wa=()=>Ad||(Ad=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ct(t){if(_e(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=St(s)?Fy(s):Ct(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(St(t)||nt(t))return t}const Vy=/;(?![^(]*\))/g,Ly=/:([^]+)/,By=/\/\*[^]*?\*\//g;function Fy(t){const e={};return t.replace(By,"").split(Vy).forEach(n=>{if(n){const s=n.split(Ly);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Pe(t){let e="";if(St(t))e=t;else if(_e(t))for(let n=0;n<t.length;n++){const s=Pe(t[n]);s&&(e+=s+" ")}else if(nt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Uy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$y=Qc(Uy);function eg(t){return!!t||t===""}function Hy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=_i(t[s],e[s]);return n}function _i(t,e){if(t===e)return!0;let n=yd(t),s=yd(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=es(t),s=es(e),n||s)return t===e;if(n=_e(t),s=_e(e),n||s)return n&&s?Hy(t,e):!1;if(n=nt(t),s=nt(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!_i(t[o],e[o]))return!1}}return String(t)===String(e)}function Yc(t,e){return t.findIndex(n=>_i(n,e))}const tg=t=>!!(t&&t.__v_isRef===!0),B=t=>St(t)?t:t==null?"":_e(t)||nt(t)&&(t.toString===Jp||!Te(t.toString))?tg(t)?B(t.value):JSON.stringify(t,ng,2):String(t),ng=(t,e)=>tg(e)?ng(t,e.value):Hi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Nl(s,r)+" =>"]=i,n),{})}:lr(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Nl(n))}:es(e)?Nl(e):nt(e)&&!_e(e)&&!Xp(e)?String(e):e,Nl=(t,e="")=>{var n;return es(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let mn;class jy{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=mn,!e&&mn&&(this.index=(mn.scopes||(mn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=mn;try{return mn=this,e()}finally{mn=n}}}on(){++this._on===1&&(this.prevScope=mn,mn=this)}off(){this._on>0&&--this._on===0&&(mn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Gy(){return mn}let ut;const Ml=new WeakSet;class sg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,mn&&mn.active&&mn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ml.has(this)&&(Ml.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||rg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Id(this),og(this);const e=ut,n=On;ut=this,On=!0;try{return this.fn()}finally{ag(this),ut=e,On=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Zc(e);this.deps=this.depsTail=void 0,Id(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ml.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){oc(this)&&this.run()}get dirty(){return oc(this)}}let ig=0,Br,Fr;function rg(t,e=!1){if(t.flags|=8,e){t.next=Fr,Fr=t;return}t.next=Br,Br=t}function Jc(){ig++}function Xc(){if(--ig>0)return;if(Fr){let e=Fr;for(Fr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Br;){let e=Br;for(Br=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function og(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ag(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),Zc(s),qy(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function oc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(lg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function lg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Zr)||(t.globalVersion=Zr,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!oc(t))))return;t.flags|=2;const e=t.dep,n=ut,s=On;ut=t,On=!0;try{og(t);const i=t.fn(t._value);(e.version===0||Fs(i,t._value))&&(t.flags|=128,t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ut=n,On=s,ag(t),t.flags&=-3}}function Zc(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Zc(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function qy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let On=!0;const cg=[];function _s(){cg.push(On),On=!1}function vs(){const t=cg.pop();On=t===void 0?!0:t}function Id(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ut;ut=void 0;try{e()}finally{ut=n}}}let Zr=0;class Qy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class eu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ut||!On||ut===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ut)n=this.activeLink=new Qy(ut,this),ut.deps?(n.prevDep=ut.depsTail,ut.depsTail.nextDep=n,ut.depsTail=n):ut.deps=ut.depsTail=n,ug(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ut.depsTail,n.nextDep=void 0,ut.depsTail.nextDep=n,ut.depsTail=n,ut.deps===n&&(ut.deps=s)}return n}trigger(e){this.version++,Zr++,this.notify(e)}notify(e){Jc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Xc()}}}function ug(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)ug(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ac=new WeakMap,fi=Symbol(""),lc=Symbol(""),eo=Symbol("");function Zt(t,e,n){if(On&&ut){let s=ac.get(t);s||ac.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new eu),i.map=s,i.key=n),i.track()}}function ls(t,e,n,s,i,r){const o=ac.get(t);if(!o){Zr++;return}const l=c=>{c&&c.trigger()};if(Jc(),e==="clear")o.forEach(l);else{const c=_e(t),u=c&&Kc(n);if(c&&n==="length"){const d=Number(s);o.forEach((p,m)=>{(m==="length"||m===eo||!es(m)&&m>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(eo)),e){case"add":c?u&&l(o.get("length")):(l(o.get(fi)),Hi(t)&&l(o.get(lc)));break;case"delete":c||(l(o.get(fi)),Hi(t)&&l(o.get(lc)));break;case"set":Hi(t)&&l(o.get(fi));break}}Xc()}function Ni(t){const e=We(t);return e===t?e:(Zt(e,"iterate",eo),Pn(t)?e:e.map(qt))}function za(t){return Zt(t=We(t),"iterate",eo),t}const Wy={__proto__:null,[Symbol.iterator](){return Ol(this,Symbol.iterator,qt)},concat(...t){return Ni(this).concat(...t.map(e=>_e(e)?Ni(e):e))},entries(){return Ol(this,"entries",t=>(t[1]=qt(t[1]),t))},every(t,e){return rs(this,"every",t,e,void 0,arguments)},filter(t,e){return rs(this,"filter",t,e,n=>n.map(qt),arguments)},find(t,e){return rs(this,"find",t,e,qt,arguments)},findIndex(t,e){return rs(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return rs(this,"findLast",t,e,qt,arguments)},findLastIndex(t,e){return rs(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return rs(this,"forEach",t,e,void 0,arguments)},includes(...t){return Vl(this,"includes",t)},indexOf(...t){return Vl(this,"indexOf",t)},join(t){return Ni(this).join(t)},lastIndexOf(...t){return Vl(this,"lastIndexOf",t)},map(t,e){return rs(this,"map",t,e,void 0,arguments)},pop(){return Rr(this,"pop")},push(...t){return Rr(this,"push",t)},reduce(t,...e){return wd(this,"reduce",t,e)},reduceRight(t,...e){return wd(this,"reduceRight",t,e)},shift(){return Rr(this,"shift")},some(t,e){return rs(this,"some",t,e,void 0,arguments)},splice(...t){return Rr(this,"splice",t)},toReversed(){return Ni(this).toReversed()},toSorted(t){return Ni(this).toSorted(t)},toSpliced(...t){return Ni(this).toSpliced(...t)},unshift(...t){return Rr(this,"unshift",t)},values(){return Ol(this,"values",qt)}};function Ol(t,e,n){const s=za(t),i=s[e]();return s!==t&&!Pn(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.done||(r.value=n(r.value)),r}),i}const zy=Array.prototype;function rs(t,e,n,s,i,r){const o=za(t),l=o!==t&&!Pn(t),c=o[e];if(c!==zy[e]){const p=c.apply(t,r);return l?qt(p):p}let u=n;o!==t&&(l?u=function(p,m){return n.call(this,qt(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const d=c.call(o,u,s);return l&&i?i(d):d}function wd(t,e,n,s){const i=za(t);let r=n;return i!==t&&(Pn(t)?n.length>3&&(r=function(o,l,c){return n.call(this,o,l,c,t)}):r=function(o,l,c){return n.call(this,o,qt(l),c,t)}),i[e](r,...s)}function Vl(t,e,n){const s=We(t);Zt(s,"iterate",eo);const i=s[e](...n);return(i===-1||i===!1)&&su(n[0])?(n[0]=We(n[0]),s[e](...n)):i}function Rr(t,e,n=[]){_s(),Jc();const s=We(t)[e].apply(t,n);return Xc(),vs(),s}const Ky=Qc("__proto__,__v_isRef,__isVue"),hg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(es));function Yy(t){es(t)||(t=String(t));const e=We(this);return Zt(e,"has",t),e.hasOwnProperty(t)}class dg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?oA:mg:r?gg:pg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=_e(e);if(!i){let c;if(o&&(c=Wy[n]))return c;if(n==="hasOwnProperty")return Yy}const l=Reflect.get(e,n,nn(e)?e:s);if((es(n)?hg.has(n):Ky(n))||(i||Zt(e,"get",n),r))return l;if(nn(l)){const c=o&&Kc(n)?l:l.value;return i&&nt(c)?uc(c):c}return nt(l)?i?uc(l):vo(l):l}}class fg extends dg{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const c=Gs(r);if(!Pn(s)&&!Gs(s)&&(r=We(r),s=We(s)),!_e(e)&&nn(r)&&!nn(s))return c||(r.value=s),!0}const o=_e(e)&&Kc(n)?Number(n)<e.length:ze(e,n),l=Reflect.set(e,n,s,nn(e)?e:i);return e===We(i)&&(o?Fs(s,r)&&ls(e,"set",n,s):ls(e,"add",n,s)),l}deleteProperty(e,n){const s=ze(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&ls(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!es(n)||!hg.has(n))&&Zt(e,"has",n),s}ownKeys(e){return Zt(e,"iterate",_e(e)?"length":fi),Reflect.ownKeys(e)}}class Jy extends dg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Xy=new fg,Zy=new Jy,eA=new fg(!0);const cc=t=>t,Fo=t=>Reflect.getPrototypeOf(t);function tA(t,e,n){return function(...s){const i=this.__v_raw,r=We(i),o=Hi(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=i[t](...s),d=n?cc:e?ha:qt;return!e&&Zt(r,"iterate",c?lc:fi),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function Uo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function nA(t,e){const n={get(i){const r=this.__v_raw,o=We(r),l=We(i);t||(Fs(i,l)&&Zt(o,"get",i),Zt(o,"get",l));const{has:c}=Fo(o),u=e?cc:t?ha:qt;if(c.call(o,i))return u(r.get(i));if(c.call(o,l))return u(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&Zt(We(i),"iterate",fi),i.size},has(i){const r=this.__v_raw,o=We(r),l=We(i);return t||(Fs(i,l)&&Zt(o,"has",i),Zt(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,c=We(l),u=e?cc:t?ha:qt;return!t&&Zt(c,"iterate",fi),l.forEach((d,p)=>i.call(r,u(d),u(p),o))}};return sn(n,t?{add:Uo("add"),set:Uo("set"),delete:Uo("delete"),clear:Uo("clear")}:{add(i){!e&&!Pn(i)&&!Gs(i)&&(i=We(i));const r=We(this);return Fo(r).has.call(r,i)||(r.add(i),ls(r,"add",i,i)),this},set(i,r){!e&&!Pn(r)&&!Gs(r)&&(r=We(r));const o=We(this),{has:l,get:c}=Fo(o);let u=l.call(o,i);u||(i=We(i),u=l.call(o,i));const d=c.call(o,i);return o.set(i,r),u?Fs(r,d)&&ls(o,"set",i,r):ls(o,"add",i,r),this},delete(i){const r=We(this),{has:o,get:l}=Fo(r);let c=o.call(r,i);c||(i=We(i),c=o.call(r,i)),l&&l.call(r,i);const u=r.delete(i);return c&&ls(r,"delete",i,void 0),u},clear(){const i=We(this),r=i.size!==0,o=i.clear();return r&&ls(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=tA(i,t,e)}),n}function tu(t,e){const n=nA(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ze(n,i)&&i in s?n:s,i,r)}const sA={get:tu(!1,!1)},iA={get:tu(!1,!0)},rA={get:tu(!0,!1)};const pg=new WeakMap,gg=new WeakMap,mg=new WeakMap,oA=new WeakMap;function aA(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lA(t){return t.__v_skip||!Object.isExtensible(t)?0:aA(Ny(t))}function vo(t){return Gs(t)?t:nu(t,!1,Xy,sA,pg)}function _g(t){return nu(t,!1,eA,iA,gg)}function uc(t){return nu(t,!0,Zy,rA,mg)}function nu(t,e,n,s,i){if(!nt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=lA(t);if(r===0)return t;const o=i.get(t);if(o)return o;const l=new Proxy(t,r===2?s:n);return i.set(t,l),l}function ji(t){return Gs(t)?ji(t.__v_raw):!!(t&&t.__v_isReactive)}function Gs(t){return!!(t&&t.__v_isReadonly)}function Pn(t){return!!(t&&t.__v_isShallow)}function su(t){return t?!!t.__v_raw:!1}function We(t){const e=t&&t.__v_raw;return e?We(e):t}function cA(t){return!ze(t,"__v_skip")&&Object.isExtensible(t)&&Zp(t,"__v_skip",!0),t}const qt=t=>nt(t)?vo(t):t,ha=t=>nt(t)?uc(t):t;function nn(t){return t?t.__v_isRef===!0:!1}function D(t){return vg(t,!1)}function uA(t){return vg(t,!0)}function vg(t,e){return nn(t)?t:new hA(t,e)}class hA{constructor(e,n){this.dep=new eu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:We(e),this._value=n?e:qt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Pn(e)||Gs(e);e=s?e:We(e),Fs(e,n)&&(this._rawValue=e,this._value=s?e:qt(e),this.dep.trigger())}}function Wt(t){return nn(t)?t.value:t}const dA={get:(t,e,n)=>e==="__v_raw"?t:Wt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return nn(i)&&!nn(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function yg(t){return ji(t)?t:new Proxy(t,dA)}class fA{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new eu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Zr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ut!==this)return rg(this,!0),!0}get value(){const e=this.dep.track();return lg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function pA(t,e,n=!1){let s,i;return Te(t)?s=t:(s=t.get,i=t.set),new fA(s,i,n)}const $o={},da=new WeakMap;let li;function gA(t,e=!1,n=li){if(n){let s=da.get(n);s||da.set(n,s=[]),s.push(t)}}function mA(t,e,n=tt){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:c}=n,u=j=>i?j:Pn(j)||i===!1||i===0?cs(j,1):cs(j);let d,p,m,_,w=!1,b=!1;if(nn(t)?(p=()=>t.value,w=Pn(t)):ji(t)?(p=()=>u(t),w=!0):_e(t)?(b=!0,w=t.some(j=>ji(j)||Pn(j)),p=()=>t.map(j=>{if(nn(j))return j.value;if(ji(j))return u(j);if(Te(j))return c?c(j,2):j()})):Te(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){_s();try{m()}finally{vs()}}const j=li;li=d;try{return c?c(t,3,[_]):t(_)}finally{li=j}}:p=Qn,e&&i){const j=p,se=i===!0?1/0:i;p=()=>cs(j(),se)}const I=Gy(),x=()=>{d.stop(),I&&I.active&&zc(I.effects,d)};if(r&&e){const j=e;e=(...se)=>{j(...se),x()}}let U=b?new Array(t.length).fill($o):$o;const F=j=>{if(!(!(d.flags&1)||!d.dirty&&!j))if(e){const se=d.run();if(i||w||(b?se.some((Ie,S)=>Fs(Ie,U[S])):Fs(se,U))){m&&m();const Ie=li;li=d;try{const S=[se,U===$o?void 0:b&&U[0]===$o?[]:U,_];U=se,c?c(e,3,S):e(...S)}finally{li=Ie}}}else d.run()};return l&&l(F),d=new sg(p),d.scheduler=o?()=>o(F,!1):F,_=j=>gA(j,!1,d),m=d.onStop=()=>{const j=da.get(d);if(j){if(c)c(j,4);else for(const se of j)se();da.delete(d)}},e?s?F(!0):U=d.run():o?o(F.bind(null,!0),!0):d.run(),x.pause=d.pause.bind(d),x.resume=d.resume.bind(d),x.stop=x,x}function cs(t,e=1/0,n){if(e<=0||!nt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,nn(t))cs(t.value,e,n);else if(_e(t))for(let s=0;s<t.length;s++)cs(t[s],e,n);else if(lr(t)||Hi(t))t.forEach(s=>{cs(s,e,n)});else if(Xp(t)){for(const s in t)cs(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&cs(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function yo(t,e,n,s){try{return s?t(...s):t()}catch(i){Ka(i,e,n)}}function ts(t,e,n,s){if(Te(t)){const i=yo(t,e,n,s);return i&&Yp(i)&&i.catch(r=>{Ka(r,e,n)}),i}if(_e(t)){const i=[];for(let r=0;r<t.length;r++)i.push(ts(t[r],e,n,s));return i}}function Ka(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||tt;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,u)===!1)return}l=l.parent}if(r){_s(),yo(r,null,10,[t,c,u]),vs();return}}_A(t,n,i,s,o)}function _A(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const un=[];let Hn=-1;const Gi=[];let xs=null,Mi=0;const Ag=Promise.resolve();let fa=null;function iu(t){const e=fa||Ag;return t?e.then(this?t.bind(this):t):e}function vA(t){let e=Hn+1,n=un.length;for(;e<n;){const s=e+n>>>1,i=un[s],r=to(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function ru(t){if(!(t.flags&1)){const e=to(t),n=un[un.length-1];!n||!(t.flags&2)&&e>=to(n)?un.push(t):un.splice(vA(e),0,t),t.flags|=1,Ig()}}function Ig(){fa||(fa=Ag.then(Eg))}function yA(t){_e(t)?Gi.push(...t):xs&&t.id===-1?xs.splice(Mi+1,0,t):t.flags&1||(Gi.push(t),t.flags|=1),Ig()}function Ed(t,e,n=Hn+1){for(;n<un.length;n++){const s=un[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;un.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function wg(t){if(Gi.length){const e=[...new Set(Gi)].sort((n,s)=>to(n)-to(s));if(Gi.length=0,xs){xs.push(...e);return}for(xs=e,Mi=0;Mi<xs.length;Mi++){const n=xs[Mi];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}xs=null,Mi=0}}const to=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Eg(t){try{for(Hn=0;Hn<un.length;Hn++){const e=un[Hn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),yo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Hn<un.length;Hn++){const e=un[Hn];e&&(e.flags&=-2)}Hn=-1,un.length=0,wg(),fa=null,(un.length||Gi.length)&&Eg()}}let wn=null,Tg=null;function pa(t){const e=wn;return wn=t,Tg=t&&t.type.__scopeId||null,e}function AA(t,e=wn,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&_a(-1);const r=pa(e);let o;try{o=t(...i)}finally{pa(r),s._d&&_a(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ds(t,e){if(wn===null)return t;const n=Za(wn),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,c=tt]=e[i];r&&(Te(r)&&(r={mounted:r,updated:r}),r.deep&&cs(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function oi(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(_s(),ts(c,n,8,[t.el,l,t,e]),vs())}}const IA=Symbol("_vte"),wA=t=>t.__isTeleport,EA=Symbol("_leaveCb");function ou(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ou(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Cg(t,e){return Te(t)?sn({name:t.name},e,{setup:t}):t}function bg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const ga=new WeakMap;function Ur(t,e,n,s,i=!1){if(_e(t)){t.forEach((w,b)=>Ur(w,e&&(_e(e)?e[b]:e),n,s,i));return}if($r(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Ur(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Za(s.component):s.el,o=i?null:r,{i:l,r:c}=t,u=e&&e.r,d=l.refs===tt?l.refs={}:l.refs,p=l.setupState,m=We(p),_=p===tt?Kp:w=>ze(m,w);if(u!=null&&u!==c){if(Td(e),St(u))d[u]=null,_(u)&&(p[u]=null);else if(nn(u)){u.value=null;const w=e;w.k&&(d[w.k]=null)}}if(Te(c))yo(c,l,12,[o,d]);else{const w=St(c),b=nn(c);if(w||b){const I=()=>{if(t.f){const x=w?_(c)?p[c]:d[c]:c.value;if(i)_e(x)&&zc(x,r);else if(_e(x))x.includes(r)||x.push(r);else if(w)d[c]=[r],_(c)&&(p[c]=d[c]);else{const U=[r];c.value=U,t.k&&(d[t.k]=U)}}else w?(d[c]=o,_(c)&&(p[c]=o)):b&&(c.value=o,t.k&&(d[t.k]=o))};if(o){const x=()=>{I(),ga.delete(t)};x.id=-1,ga.set(t,x),In(x,n)}else Td(t),I()}}}function Td(t){const e=ga.get(t);e&&(e.flags|=8,ga.delete(t))}Wa().requestIdleCallback;Wa().cancelIdleCallback;const $r=t=>!!t.type.__asyncLoader,Sg=t=>t.type.__isKeepAlive;function TA(t,e){Rg(t,"a",e)}function CA(t,e){Rg(t,"da",e)}function Rg(t,e,n=tn){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ya(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Sg(i.parent.vnode)&&bA(s,e,n,i),i=i.parent}}function bA(t,e,n,s){const i=Ya(e,t,s,!0);cr(()=>{zc(s[e],i)},n)}function Ya(t,e,n=tn,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{_s();const l=Ao(n),c=ts(e,n,t,o);return l(),vs(),c});return s?i.unshift(r):i.push(r),r}}const Ts=t=>(e,n=tn)=>{(!io||t==="sp")&&Ya(t,(...s)=>e(...s),n)},SA=Ts("bm"),Rt=Ts("m"),RA=Ts("bu"),PA=Ts("u"),kA=Ts("bum"),cr=Ts("um"),DA=Ts("sp"),xA=Ts("rtg"),NA=Ts("rtc");function MA(t,e=tn){Ya("ec",t,e)}const OA="components";function VA(t,e){return BA(OA,t,!0,e)||t}const LA=Symbol.for("v-ndc");function BA(t,e,n=!0,s=!1){const i=wn||tn;if(i){const r=i.type;{const l=S0(r,!1);if(l&&(l===e||l===xn(e)||l===Qa(xn(e))))return r}const o=Cd(i[t]||r[t],e)||Cd(i.appContext[t],e);return!o&&s?r:o}}function Cd(t,e){return t&&(t[e]||t[xn(e)]||t[Qa(xn(e))])}function je(t,e,n,s){let i;const r=n,o=_e(t);if(o||St(t)){const l=o&&ji(t);let c=!1,u=!1;l&&(c=!Pn(t),u=Gs(t),t=za(t)),i=new Array(t.length);for(let d=0,p=t.length;d<p;d++)i[d]=e(c?u?ha(qt(t[d])):qt(t[d]):t[d],d,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=e(l+1,l,void 0,r)}else if(nt(t))if(t[Symbol.iterator])i=Array.from(t,(l,c)=>e(l,c,void 0,r));else{const l=Object.keys(t);i=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];i[c]=e(t[d],d,c,r)}}else i=[];return i}const hc=t=>t?Kg(t)?Za(t):hc(t.parent):null,Hr=sn(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>hc(t.parent),$root:t=>hc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>kg(t),$forceUpdate:t=>t.f||(t.f=()=>{ru(t.update)}),$nextTick:t=>t.n||(t.n=iu.bind(t.proxy)),$watch:t=>r0.bind(t)}),Ll=(t,e)=>t!==tt&&!t.__isScriptSetup&&ze(t,e),FA={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Ll(s,e))return o[e]=1,s[e];if(i!==tt&&ze(i,e))return o[e]=2,i[e];if((u=t.propsOptions[0])&&ze(u,e))return o[e]=3,r[e];if(n!==tt&&ze(n,e))return o[e]=4,n[e];dc&&(o[e]=0)}}const d=Hr[e];let p,m;if(d)return e==="$attrs"&&Zt(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==tt&&ze(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,ze(m,e))return m[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Ll(i,e)?(i[e]=n,!0):s!==tt&&ze(s,e)?(s[e]=n,!0):ze(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r,type:o}},l){let c,u;return!!(n[l]||t!==tt&&l[0]!=="$"&&ze(t,l)||Ll(e,l)||(c=r[0])&&ze(c,l)||ze(s,l)||ze(Hr,l)||ze(i.config.globalProperties,l)||(u=o.__cssModules)&&u[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ze(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function bd(t){return _e(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let dc=!0;function UA(t){const e=kg(t),n=t.proxy,s=t.ctx;dc=!1,e.beforeCreate&&Sd(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:p,mounted:m,beforeUpdate:_,updated:w,activated:b,deactivated:I,beforeDestroy:x,beforeUnmount:U,destroyed:F,unmounted:j,render:se,renderTracked:Ie,renderTriggered:S,errorCaptured:A,serverPrefetch:T,expose:P,inheritAttrs:R,components:N,directives:E,filters:st}=e;if(u&&$A(u,s,null),o)for(const Ce in o){const be=o[Ce];Te(be)&&(s[Ce]=be.bind(n))}if(i){const Ce=i.call(n,n);nt(Ce)&&(t.data=vo(Ce))}if(dc=!0,r)for(const Ce in r){const be=r[Ce],kt=Te(be)?be.bind(n,n):Te(be.get)?be.get.bind(n,n):Qn,Kt=!Te(be)&&Te(be.set)?be.set.bind(n):Qn,Lt=Xe({get:kt,set:Kt});Object.defineProperty(s,Ce,{enumerable:!0,configurable:!0,get:()=>Lt.value,set:rt=>Lt.value=rt})}if(l)for(const Ce in l)Pg(l[Ce],s,n,Ce);if(c){const Ce=Te(c)?c.call(n):c;Reflect.ownKeys(Ce).forEach(be=>{Yo(be,Ce[be])})}d&&Sd(d,t,"c");function it(Ce,be){_e(be)?be.forEach(kt=>Ce(kt.bind(n))):be&&Ce(be.bind(n))}if(it(SA,p),it(Rt,m),it(RA,_),it(PA,w),it(TA,b),it(CA,I),it(MA,A),it(NA,Ie),it(xA,S),it(kA,U),it(cr,j),it(DA,T),_e(P))if(P.length){const Ce=t.exposed||(t.exposed={});P.forEach(be=>{Object.defineProperty(Ce,be,{get:()=>n[be],set:kt=>n[be]=kt,enumerable:!0})})}else t.exposed||(t.exposed={});se&&t.render===Qn&&(t.render=se),R!=null&&(t.inheritAttrs=R),N&&(t.components=N),E&&(t.directives=E),T&&bg(t)}function $A(t,e,n=Qn){_e(t)&&(t=fc(t));for(const s in t){const i=t[s];let r;nt(i)?"default"in i?r=Wn(i.from||s,i.default,!0):r=Wn(i.from||s):r=Wn(i),nn(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Sd(t,e,n){ts(_e(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Pg(t,e,n,s){let i=s.includes(".")?jg(n,s):()=>n[s];if(St(t)){const r=e[t];Te(r)&&gs(i,r)}else if(Te(t))gs(i,t.bind(n));else if(nt(t))if(_e(t))t.forEach(r=>Pg(r,e,n,s));else{const r=Te(t.handler)?t.handler.bind(n):e[t.handler];Te(r)&&gs(i,r,t)}}function kg(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(u=>ma(c,u,o,!0)),ma(c,e,o)),nt(e)&&r.set(e,c),c}function ma(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&ma(t,r,n,!0),i&&i.forEach(o=>ma(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=HA[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const HA={data:Rd,props:Pd,emits:Pd,methods:xr,computed:xr,beforeCreate:ln,created:ln,beforeMount:ln,mounted:ln,beforeUpdate:ln,updated:ln,beforeDestroy:ln,beforeUnmount:ln,destroyed:ln,unmounted:ln,activated:ln,deactivated:ln,errorCaptured:ln,serverPrefetch:ln,components:xr,directives:xr,watch:GA,provide:Rd,inject:jA};function Rd(t,e){return e?t?function(){return sn(Te(t)?t.call(this,this):t,Te(e)?e.call(this,this):e)}:e:t}function jA(t,e){return xr(fc(t),fc(e))}function fc(t){if(_e(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ln(t,e){return t?[...new Set([].concat(t,e))]:e}function xr(t,e){return t?sn(Object.create(null),t,e):e}function Pd(t,e){return t?_e(t)&&_e(e)?[...new Set([...t,...e])]:sn(Object.create(null),bd(t),bd(e??{})):e}function GA(t,e){if(!t)return e;if(!e)return t;const n=sn(Object.create(null),t);for(const s in e)n[s]=ln(t[s],e[s]);return n}function Dg(){return{app:null,config:{isNativeTag:Kp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qA=0;function QA(t,e){return function(s,i=null){Te(s)||(s=sn({},s)),i!=null&&!nt(i)&&(i=null);const r=Dg(),o=new WeakSet,l=[];let c=!1;const u=r.app={_uid:qA++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:P0,get config(){return r.config},set config(d){},use(d,...p){return o.has(d)||(d&&Te(d.install)?(o.add(d),d.install(u,...p)):Te(d)&&(o.add(d),d(u,...p))),u},mixin(d){return r.mixins.includes(d)||r.mixins.push(d),u},component(d,p){return p?(r.components[d]=p,u):r.components[d]},directive(d,p){return p?(r.directives[d]=p,u):r.directives[d]},mount(d,p,m){if(!c){const _=u._ceVNode||we(s,i);return _.appContext=r,m===!0?m="svg":m===!1&&(m=void 0),t(_,d,m),c=!0,u._container=d,d.__vue_app__=u,Za(_.component)}},onUnmount(d){l.push(d)},unmount(){c&&(ts(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,p){return r.provides[d]=p,u},runWithContext(d){const p=qi;qi=u;try{return d()}finally{qi=p}}};return u}}let qi=null;function Yo(t,e){if(tn){let n=tn.provides;const s=tn.parent&&tn.parent.provides;s===n&&(n=tn.provides=Object.create(s)),n[t]=e}}function Wn(t,e,n=!1){const s=w0();if(s||qi){let i=qi?qi._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Te(e)?e.call(s&&s.proxy):e}}const xg={},Ng=()=>Object.create(xg),Mg=t=>Object.getPrototypeOf(t)===xg;function WA(t,e,n,s=!1){const i={},r=Ng();t.propsDefaults=Object.create(null),Og(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:_g(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function zA(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=We(i),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(Ja(t.emitsOptions,m))continue;const _=e[m];if(c)if(ze(r,m))_!==r[m]&&(r[m]=_,u=!0);else{const w=xn(m);i[w]=pc(c,l,w,_,t,!1)}else _!==r[m]&&(r[m]=_,u=!0)}}}else{Og(t,e,i,r)&&(u=!0);let d;for(const p in l)(!e||!ze(e,p)&&((d=Ei(p))===p||!ze(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(i[p]=pc(c,l,p,void 0,t,!0)):delete i[p]);if(r!==l)for(const p in r)(!e||!ze(e,p))&&(delete r[p],u=!0)}u&&ls(t.attrs,"set","")}function Og(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Lr(c))continue;const u=e[c];let d;i&&ze(i,d=xn(c))?!r||!r.includes(d)?n[d]=u:(l||(l={}))[d]=u:Ja(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(r){const c=We(n),u=l||tt;for(let d=0;d<r.length;d++){const p=r[d];n[p]=pc(i,c,p,u[p],t,!ze(u,p))}}return o}function pc(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=ze(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Te(c)){const{propsDefaults:u}=i;if(n in u)s=u[n];else{const d=Ao(i);s=u[n]=c.call(null,e),d()}}else s=c;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===Ei(n))&&(s=!0))}return s}const KA=new WeakMap;function Vg(t,e,n=!1){const s=n?KA:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let c=!1;if(!Te(t)){const d=p=>{c=!0;const[m,_]=Vg(p,e,!0);sn(o,m),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!r&&!c)return nt(t)&&s.set(t,$i),$i;if(_e(r))for(let d=0;d<r.length;d++){const p=xn(r[d]);kd(p)&&(o[p]=tt)}else if(r)for(const d in r){const p=xn(d);if(kd(p)){const m=r[d],_=o[p]=_e(m)||Te(m)?{type:m}:sn({},m),w=_.type;let b=!1,I=!0;if(_e(w))for(let x=0;x<w.length;++x){const U=w[x],F=Te(U)&&U.name;if(F==="Boolean"){b=!0;break}else F==="String"&&(I=!1)}else b=Te(w)&&w.name==="Boolean";_[0]=b,_[1]=I,(b||ze(_,"default"))&&l.push(p)}}const u=[o,l];return nt(t)&&s.set(t,u),u}function kd(t){return t[0]!=="$"&&!Lr(t)}const au=t=>t==="_"||t==="_ctx"||t==="$stable",lu=t=>_e(t)?t.map(Gn):[Gn(t)],YA=(t,e,n)=>{if(e._n)return e;const s=AA((...i)=>lu(e(...i)),n);return s._c=!1,s},Lg=(t,e,n)=>{const s=t._ctx;for(const i in t){if(au(i))continue;const r=t[i];if(Te(r))e[i]=YA(i,r,s);else if(r!=null){const o=lu(r);e[i]=()=>o}}},Bg=(t,e)=>{const n=lu(e);t.slots.default=()=>n},Fg=(t,e,n)=>{for(const s in e)(n||!au(s))&&(t[s]=e[s])},JA=(t,e,n)=>{const s=t.slots=Ng();if(t.vnode.shapeFlag&32){const i=e._;i?(Fg(s,e,n),n&&Zp(s,"_",i,!0)):Lg(e,s)}else e&&Bg(t,e)},XA=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=tt;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:Fg(i,e,n):(r=!e.$stable,Lg(e,i)),o=e}else e&&(Bg(t,e),o={default:1});if(r)for(const l in i)!au(l)&&o[l]==null&&delete i[l]},In=f0;function ZA(t){return e0(t)}function e0(t,e){const n=Wa();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:m,setScopeId:_=Qn,insertStaticContent:w}=t,b=(y,C,M,Q=null,K=null,W=null,ee=void 0,J=null,z=!!C.dynamicChildren)=>{if(y===C)return;y&&!Pr(y,C)&&(Q=q(y),rt(y,K,W,!0),y=null),C.patchFlag===-2&&(z=!1,C.dynamicChildren=null);const{type:Z,ref:ge,shapeFlag:oe}=C;switch(Z){case Xa:I(y,C,M,Q);break;case qs:x(y,C,M,Q);break;case Jo:y==null&&U(C,M,Q,ee);break;case Se:N(y,C,M,Q,K,W,ee,J,z);break;default:oe&1?se(y,C,M,Q,K,W,ee,J,z):oe&6?E(y,C,M,Q,K,W,ee,J,z):(oe&64||oe&128)&&Z.process(y,C,M,Q,K,W,ee,J,z,ue)}ge!=null&&K?Ur(ge,y&&y.ref,W,C||y,!C):ge==null&&y&&y.ref!=null&&Ur(y.ref,null,W,y,!0)},I=(y,C,M,Q)=>{if(y==null)s(C.el=l(C.children),M,Q);else{const K=C.el=y.el;C.children!==y.children&&u(K,C.children)}},x=(y,C,M,Q)=>{y==null?s(C.el=c(C.children||""),M,Q):C.el=y.el},U=(y,C,M,Q)=>{[y.el,y.anchor]=w(y.children,C,M,Q,y.el,y.anchor)},F=({el:y,anchor:C},M,Q)=>{let K;for(;y&&y!==C;)K=m(y),s(y,M,Q),y=K;s(C,M,Q)},j=({el:y,anchor:C})=>{let M;for(;y&&y!==C;)M=m(y),i(y),y=M;i(C)},se=(y,C,M,Q,K,W,ee,J,z)=>{C.type==="svg"?ee="svg":C.type==="math"&&(ee="mathml"),y==null?Ie(C,M,Q,K,W,ee,J,z):T(y,C,K,W,ee,J,z)},Ie=(y,C,M,Q,K,W,ee,J)=>{let z,Z;const{props:ge,shapeFlag:oe,transition:de,dirs:pe}=y;if(z=y.el=o(y.type,W,ge&&ge.is,ge),oe&8?d(z,y.children):oe&16&&A(y.children,z,null,Q,K,Bl(y,W),ee,J),pe&&oi(y,null,Q,"created"),S(z,y,y.scopeId,ee,Q),ge){for(const Ge in ge)Ge!=="value"&&!Lr(Ge)&&r(z,Ge,null,ge[Ge],W,Q);"value"in ge&&r(z,"value",null,ge.value,W),(Z=ge.onVnodeBeforeMount)&&$n(Z,Q,y)}pe&&oi(y,null,Q,"beforeMount");const ke=t0(K,de);ke&&de.beforeEnter(z),s(z,C,M),((Z=ge&&ge.onVnodeMounted)||ke||pe)&&In(()=>{Z&&$n(Z,Q,y),ke&&de.enter(z),pe&&oi(y,null,Q,"mounted")},K)},S=(y,C,M,Q,K)=>{if(M&&_(y,M),Q)for(let W=0;W<Q.length;W++)_(y,Q[W]);if(K){let W=K.subTree;if(C===W||qg(W.type)&&(W.ssContent===C||W.ssFallback===C)){const ee=K.vnode;S(y,ee,ee.scopeId,ee.slotScopeIds,K.parent)}}},A=(y,C,M,Q,K,W,ee,J,z=0)=>{for(let Z=z;Z<y.length;Z++){const ge=y[Z]=J?Ns(y[Z]):Gn(y[Z]);b(null,ge,C,M,Q,K,W,ee,J)}},T=(y,C,M,Q,K,W,ee)=>{const J=C.el=y.el;let{patchFlag:z,dynamicChildren:Z,dirs:ge}=C;z|=y.patchFlag&16;const oe=y.props||tt,de=C.props||tt;let pe;if(M&&ai(M,!1),(pe=de.onVnodeBeforeUpdate)&&$n(pe,M,C,y),ge&&oi(C,y,M,"beforeUpdate"),M&&ai(M,!0),(oe.innerHTML&&de.innerHTML==null||oe.textContent&&de.textContent==null)&&d(J,""),Z?P(y.dynamicChildren,Z,J,M,Q,Bl(C,K),W):ee||be(y,C,J,null,M,Q,Bl(C,K),W,!1),z>0){if(z&16)R(J,oe,de,M,K);else if(z&2&&oe.class!==de.class&&r(J,"class",null,de.class,K),z&4&&r(J,"style",oe.style,de.style,K),z&8){const ke=C.dynamicProps;for(let Ge=0;Ge<ke.length;Ge++){const Ne=ke[Ge],$e=oe[Ne],He=de[Ne];(He!==$e||Ne==="value")&&r(J,Ne,$e,He,K,M)}}z&1&&y.children!==C.children&&d(J,C.children)}else!ee&&Z==null&&R(J,oe,de,M,K);((pe=de.onVnodeUpdated)||ge)&&In(()=>{pe&&$n(pe,M,C,y),ge&&oi(C,y,M,"updated")},Q)},P=(y,C,M,Q,K,W,ee)=>{for(let J=0;J<C.length;J++){const z=y[J],Z=C[J],ge=z.el&&(z.type===Se||!Pr(z,Z)||z.shapeFlag&198)?p(z.el):M;b(z,Z,ge,null,Q,K,W,ee,!0)}},R=(y,C,M,Q,K)=>{if(C!==M){if(C!==tt)for(const W in C)!Lr(W)&&!(W in M)&&r(y,W,C[W],null,K,Q);for(const W in M){if(Lr(W))continue;const ee=M[W],J=C[W];ee!==J&&W!=="value"&&r(y,W,J,ee,K,Q)}"value"in M&&r(y,"value",C.value,M.value,K)}},N=(y,C,M,Q,K,W,ee,J,z)=>{const Z=C.el=y?y.el:l(""),ge=C.anchor=y?y.anchor:l("");let{patchFlag:oe,dynamicChildren:de,slotScopeIds:pe}=C;pe&&(J=J?J.concat(pe):pe),y==null?(s(Z,M,Q),s(ge,M,Q),A(C.children||[],M,ge,K,W,ee,J,z)):oe>0&&oe&64&&de&&y.dynamicChildren?(P(y.dynamicChildren,de,M,K,W,ee,J),(C.key!=null||K&&C===K.subTree)&&Ug(y,C,!0)):be(y,C,M,ge,K,W,ee,J,z)},E=(y,C,M,Q,K,W,ee,J,z)=>{C.slotScopeIds=J,y==null?C.shapeFlag&512?K.ctx.activate(C,M,Q,ee,z):st(C,M,Q,K,W,ee,z):vt(y,C,z)},st=(y,C,M,Q,K,W,ee)=>{const J=y.component=I0(y,Q,K);if(Sg(y)&&(J.ctx.renderer=ue),E0(J,!1,ee),J.asyncDep){if(K&&K.registerDep(J,it,ee),!y.el){const z=J.subTree=we(qs);x(null,z,C,M),y.placeholder=z.el}}else it(J,y,C,M,K,W,ee)},vt=(y,C,M)=>{const Q=C.component=y.component;if(h0(y,C,M))if(Q.asyncDep&&!Q.asyncResolved){Ce(Q,C,M);return}else Q.next=C,Q.update();else C.el=y.el,Q.vnode=C},it=(y,C,M,Q,K,W,ee)=>{const J=()=>{if(y.isMounted){let{next:oe,bu:de,u:pe,parent:ke,vnode:Ge}=y;{const Ye=$g(y);if(Ye){oe&&(oe.el=Ge.el,Ce(y,oe,ee)),Ye.asyncDep.then(()=>{y.isUnmounted||J()});return}}let Ne=oe,$e;ai(y,!1),oe?(oe.el=Ge.el,Ce(y,oe,ee)):oe=Ge,de&&Ko(de),($e=oe.props&&oe.props.onVnodeBeforeUpdate)&&$n($e,ke,oe,Ge),ai(y,!0);const He=xd(y),qe=y.subTree;y.subTree=He,b(qe,He,p(qe.el),q(qe),y,K,W),oe.el=He.el,Ne===null&&d0(y,He.el),pe&&In(pe,K),($e=oe.props&&oe.props.onVnodeUpdated)&&In(()=>$n($e,ke,oe,Ge),K)}else{let oe;const{el:de,props:pe}=C,{bm:ke,m:Ge,parent:Ne,root:$e,type:He}=y,qe=$r(C);ai(y,!1),ke&&Ko(ke),!qe&&(oe=pe&&pe.onVnodeBeforeMount)&&$n(oe,Ne,C),ai(y,!0);{$e.ce&&$e.ce._def.shadowRoot!==!1&&$e.ce._injectChildStyle(He);const Ye=y.subTree=xd(y);b(null,Ye,M,Q,y,K,W),C.el=Ye.el}if(Ge&&In(Ge,K),!qe&&(oe=pe&&pe.onVnodeMounted)){const Ye=C;In(()=>$n(oe,Ne,Ye),K)}(C.shapeFlag&256||Ne&&$r(Ne.vnode)&&Ne.vnode.shapeFlag&256)&&y.a&&In(y.a,K),y.isMounted=!0,C=M=Q=null}};y.scope.on();const z=y.effect=new sg(J);y.scope.off();const Z=y.update=z.run.bind(z),ge=y.job=z.runIfDirty.bind(z);ge.i=y,ge.id=y.uid,z.scheduler=()=>ru(ge),ai(y,!0),Z()},Ce=(y,C,M)=>{C.component=y;const Q=y.vnode.props;y.vnode=C,y.next=null,zA(y,C.props,Q,M),XA(y,C.children,M),_s(),Ed(y),vs()},be=(y,C,M,Q,K,W,ee,J,z=!1)=>{const Z=y&&y.children,ge=y?y.shapeFlag:0,oe=C.children,{patchFlag:de,shapeFlag:pe}=C;if(de>0){if(de&128){Kt(Z,oe,M,Q,K,W,ee,J,z);return}else if(de&256){kt(Z,oe,M,Q,K,W,ee,J,z);return}}pe&8?(ge&16&&ot(Z,K,W),oe!==Z&&d(M,oe)):ge&16?pe&16?Kt(Z,oe,M,Q,K,W,ee,J,z):ot(Z,K,W,!0):(ge&8&&d(M,""),pe&16&&A(oe,M,Q,K,W,ee,J,z))},kt=(y,C,M,Q,K,W,ee,J,z)=>{y=y||$i,C=C||$i;const Z=y.length,ge=C.length,oe=Math.min(Z,ge);let de;for(de=0;de<oe;de++){const pe=C[de]=z?Ns(C[de]):Gn(C[de]);b(y[de],pe,M,null,K,W,ee,J,z)}Z>ge?ot(y,K,W,!0,!1,oe):A(C,M,Q,K,W,ee,J,z,oe)},Kt=(y,C,M,Q,K,W,ee,J,z)=>{let Z=0;const ge=C.length;let oe=y.length-1,de=ge-1;for(;Z<=oe&&Z<=de;){const pe=y[Z],ke=C[Z]=z?Ns(C[Z]):Gn(C[Z]);if(Pr(pe,ke))b(pe,ke,M,null,K,W,ee,J,z);else break;Z++}for(;Z<=oe&&Z<=de;){const pe=y[oe],ke=C[de]=z?Ns(C[de]):Gn(C[de]);if(Pr(pe,ke))b(pe,ke,M,null,K,W,ee,J,z);else break;oe--,de--}if(Z>oe){if(Z<=de){const pe=de+1,ke=pe<ge?C[pe].el:Q;for(;Z<=de;)b(null,C[Z]=z?Ns(C[Z]):Gn(C[Z]),M,ke,K,W,ee,J,z),Z++}}else if(Z>de)for(;Z<=oe;)rt(y[Z],K,W,!0),Z++;else{const pe=Z,ke=Z,Ge=new Map;for(Z=ke;Z<=de;Z++){const Fe=C[Z]=z?Ns(C[Z]):Gn(C[Z]);Fe.key!=null&&Ge.set(Fe.key,Z)}let Ne,$e=0;const He=de-ke+1;let qe=!1,Ye=0;const wt=new Array(He);for(Z=0;Z<He;Z++)wt[Z]=0;for(Z=pe;Z<=oe;Z++){const Fe=y[Z];if($e>=He){rt(Fe,K,W,!0);continue}let yt;if(Fe.key!=null)yt=Ge.get(Fe.key);else for(Ne=ke;Ne<=de;Ne++)if(wt[Ne-ke]===0&&Pr(Fe,C[Ne])){yt=Ne;break}yt===void 0?rt(Fe,K,W,!0):(wt[yt-ke]=Z+1,yt>=Ye?Ye=yt:qe=!0,b(Fe,C[yt],M,null,K,W,ee,J,z),$e++)}const Et=qe?n0(wt):$i;for(Ne=Et.length-1,Z=He-1;Z>=0;Z--){const Fe=ke+Z,yt=C[Fe],ei=C[Fe+1],G=Fe+1<ge?ei.el||ei.placeholder:Q;wt[Z]===0?b(null,yt,M,G,K,W,ee,J,z):qe&&(Ne<0||Z!==Et[Ne]?Lt(yt,M,G,2):Ne--)}}},Lt=(y,C,M,Q,K=null)=>{const{el:W,type:ee,transition:J,children:z,shapeFlag:Z}=y;if(Z&6){Lt(y.component.subTree,C,M,Q);return}if(Z&128){y.suspense.move(C,M,Q);return}if(Z&64){ee.move(y,C,M,ue);return}if(ee===Se){s(W,C,M);for(let oe=0;oe<z.length;oe++)Lt(z[oe],C,M,Q);s(y.anchor,C,M);return}if(ee===Jo){F(y,C,M);return}if(Q!==2&&Z&1&&J)if(Q===0)J.beforeEnter(W),s(W,C,M),In(()=>J.enter(W),K);else{const{leave:oe,delayLeave:de,afterLeave:pe}=J,ke=()=>{y.ctx.isUnmounted?i(W):s(W,C,M)},Ge=()=>{W._isLeaving&&W[EA](!0),oe(W,()=>{ke(),pe&&pe()})};de?de(W,ke,Ge):Ge()}else s(W,C,M)},rt=(y,C,M,Q=!1,K=!1)=>{const{type:W,props:ee,ref:J,children:z,dynamicChildren:Z,shapeFlag:ge,patchFlag:oe,dirs:de,cacheIndex:pe}=y;if(oe===-2&&(K=!1),J!=null&&(_s(),Ur(J,null,M,y,!0),vs()),pe!=null&&(C.renderCache[pe]=void 0),ge&256){C.ctx.deactivate(y);return}const ke=ge&1&&de,Ge=!$r(y);let Ne;if(Ge&&(Ne=ee&&ee.onVnodeBeforeUnmount)&&$n(Ne,C,y),ge&6)Yt(y.component,M,Q);else{if(ge&128){y.suspense.unmount(M,Q);return}ke&&oi(y,null,C,"beforeUnmount"),ge&64?y.type.remove(y,C,M,ue,Q):Z&&!Z.hasOnce&&(W!==Se||oe>0&&oe&64)?ot(Z,C,M,!1,!0):(W===Se&&oe&384||!K&&ge&16)&&ot(z,C,M),Q&&Cn(y)}(Ge&&(Ne=ee&&ee.onVnodeUnmounted)||ke)&&In(()=>{Ne&&$n(Ne,C,y),ke&&oi(y,null,C,"unmounted")},M)},Cn=y=>{const{type:C,el:M,anchor:Q,transition:K}=y;if(C===Se){gn(M,Q);return}if(C===Jo){j(y);return}const W=()=>{i(M),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(y.shapeFlag&1&&K&&!K.persisted){const{leave:ee,delayLeave:J}=K,z=()=>ee(M,W);J?J(y.el,W,z):z()}else W()},gn=(y,C)=>{let M;for(;y!==C;)M=m(y),i(y),y=M;i(C)},Yt=(y,C,M)=>{const{bum:Q,scope:K,job:W,subTree:ee,um:J,m:z,a:Z}=y;Dd(z),Dd(Z),Q&&Ko(Q),K.stop(),W&&(W.flags|=8,rt(ee,y,C,M)),J&&In(J,C),In(()=>{y.isUnmounted=!0},C)},ot=(y,C,M,Q=!1,K=!1,W=0)=>{for(let ee=W;ee<y.length;ee++)rt(y[ee],C,M,Q,K)},q=y=>{if(y.shapeFlag&6)return q(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const C=m(y.anchor||y.el),M=C&&C[IA];return M?m(M):C};let ae=!1;const te=(y,C,M)=>{y==null?C._vnode&&rt(C._vnode,null,null,!0):b(C._vnode||null,y,C,null,null,null,M),C._vnode=y,ae||(ae=!0,Ed(),wg(),ae=!1)},ue={p:b,um:rt,m:Lt,r:Cn,mt:st,mc:A,pc:be,pbc:P,n:q,o:t};return{render:te,hydrate:void 0,createApp:QA(te)}}function Bl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ai({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function t0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ug(t,e,n=!1){const s=t.children,i=e.children;if(_e(s)&&_e(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=Ns(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&Ug(o,l)),l.type===Xa&&l.patchFlag!==-1&&(l.el=o.el),l.type===qs&&!l.el&&(l.el=o.el)}}function n0(t){const e=t.slice(),n=[0];let s,i,r,o,l;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(i=n[n.length-1],t[i]<u){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<u?r=l+1:o=l;u<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function $g(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:$g(e)}function Dd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const s0=Symbol.for("v-scx"),i0=()=>Wn(s0);function gs(t,e,n){return Hg(t,e,n)}function Hg(t,e,n=tt){const{immediate:s,deep:i,flush:r,once:o}=n,l=sn({},n),c=e&&s||!e&&r!=="post";let u;if(io){if(r==="sync"){const _=i0();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=Qn,_.resume=Qn,_.pause=Qn,_}}const d=tn;l.call=(_,w,b)=>ts(_,d,w,b);let p=!1;r==="post"?l.scheduler=_=>{In(_,d&&d.suspense)}:r!=="sync"&&(p=!0,l.scheduler=(_,w)=>{w?_():ru(_)}),l.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,d&&(_.id=d.uid,_.i=d))};const m=mA(t,e,l);return io&&(u?u.push(m):c&&m()),m}function r0(t,e,n){const s=this.proxy,i=St(t)?t.includes(".")?jg(s,t):()=>s[t]:t.bind(s,s);let r;Te(e)?r=e:(r=e.handler,n=e);const o=Ao(this),l=Hg(i,r.bind(s),n);return o(),l}function jg(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const o0=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${xn(e)}Modifiers`]||t[`${Ei(e)}Modifiers`];function a0(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||tt;let i=n;const r=e.startsWith("update:"),o=r&&o0(s,e.slice(7));o&&(o.trim&&(i=n.map(d=>St(d)?d.trim():d)),o.number&&(i=n.map(ua)));let l,c=s[l=xl(e)]||s[l=xl(xn(e))];!c&&r&&(c=s[l=xl(Ei(e))]),c&&ts(c,t,6,i);const u=s[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,ts(u,t,6,i)}}const l0=new WeakMap;function Gg(t,e,n=!1){const s=n?l0:e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!Te(t)){const c=u=>{const d=Gg(u,e,!0);d&&(l=!0,sn(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(nt(t)&&s.set(t,null),null):(_e(r)?r.forEach(c=>o[c]=null):sn(o,r),nt(t)&&s.set(t,o),o)}function Ja(t,e){return!t||!Ga(e)?!1:(e=e.slice(2).replace(/Once$/,""),ze(t,e[0].toLowerCase()+e.slice(1))||ze(t,Ei(e))||ze(t,e))}function xd(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:c,render:u,renderCache:d,props:p,data:m,setupState:_,ctx:w,inheritAttrs:b}=t,I=pa(t);let x,U;try{if(n.shapeFlag&4){const j=i||s,se=j;x=Gn(u.call(se,j,d,p,_,m,w)),U=l}else{const j=e;x=Gn(j.length>1?j(p,{attrs:l,slots:o,emit:c}):j(p,null)),U=e.props?l:c0(l)}}catch(j){jr.length=0,Ka(j,t,1),x=we(qs)}let F=x;if(U&&b!==!1){const j=Object.keys(U),{shapeFlag:se}=F;j.length&&se&7&&(r&&j.some(Wc)&&(U=u0(U,r)),F=Ji(F,U,!1,!0))}return n.dirs&&(F=Ji(F,null,!1,!0),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&ou(F,n.transition),x=F,pa(I),x}const c0=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ga(n))&&((e||(e={}))[n]=t[n]);return e},u0=(t,e)=>{const n={};for(const s in t)(!Wc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function h0(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:c}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Nd(s,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(o[m]!==s[m]&&!Ja(u,m))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Nd(s,o,u):!0:!!o;return!1}function Nd(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Ja(n,r))return!0}return!1}function d0({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const qg=t=>t.__isSuspense;function f0(t,e){e&&e.pendingBranch?_e(t)?e.effects.push(...t):e.effects.push(t):yA(t)}const Se=Symbol.for("v-fgt"),Xa=Symbol.for("v-txt"),qs=Symbol.for("v-cmt"),Jo=Symbol.for("v-stc"),jr=[];let En=null;function O(t=!1){jr.push(En=t?null:[])}function p0(){jr.pop(),En=jr[jr.length-1]||null}let no=1;function _a(t,e=!1){no+=t,t<0&&En&&e&&(En.hasOnce=!0)}function Qg(t){return t.dynamicChildren=no>0?En||$i:null,p0(),no>0&&En&&En.push(t),t}function L(t,e,n,s,i,r){return Qg(h(t,e,n,s,i,r,!0))}function Wg(t,e,n,s,i){return Qg(we(t,e,n,s,i,!0))}function va(t){return t?t.__v_isVNode===!0:!1}function Pr(t,e){return t.type===e.type&&t.key===e.key}const zg=({key:t})=>t??null,Xo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?St(t)||nn(t)||Te(t)?{i:wn,r:t,k:e,f:!!n}:t:null);function h(t,e=null,n=null,s=0,i=null,r=t===Se?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&zg(e),ref:e&&Xo(e),scopeId:Tg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:wn};return l?(cu(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=St(n)?8:16),no>0&&!o&&En&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&En.push(c),c}const we=g0;function g0(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===LA)&&(t=qs),va(t)){const l=Ji(t,e,!0);return n&&cu(l,n),no>0&&!r&&En&&(l.shapeFlag&6?En[En.indexOf(t)]=l:En.push(l)),l.patchFlag=-2,l}if(R0(t)&&(t=t.__vccOpts),e){e=m0(e);let{class:l,style:c}=e;l&&!St(l)&&(e.class=Pe(l)),nt(c)&&(su(c)&&!_e(c)&&(c=sn({},c)),e.style=Ct(c))}const o=St(t)?1:qg(t)?128:wA(t)?64:nt(t)?4:Te(t)?2:0;return h(t,e,n,s,i,o,r,!0)}function m0(t){return t?su(t)||Mg(t)?sn({},t):t:null}function Ji(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:c}=t,u=e?v0(i||{},e):i,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&zg(u),ref:e&&e.ref?n&&r?_e(r)?r.concat(Xo(e)):[r,Xo(e)]:Xo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Se?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ji(t.ssContent),ssFallback:t.ssFallback&&Ji(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&ou(d,c.clone(d)),d}function so(t=" ",e=0){return we(Xa,null,t,e)}function _0(t,e){const n=we(Jo,null,t);return n.staticCount=e,n}function he(t="",e=!1){return e?(O(),Wg(qs,null,t)):we(qs,null,t)}function Gn(t){return t==null||typeof t=="boolean"?we(qs):_e(t)?we(Se,null,t.slice()):va(t)?Ns(t):we(Xa,null,String(t))}function Ns(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ji(t)}function cu(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(_e(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),cu(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Mg(e)?e._ctx=wn:i===3&&wn&&(wn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Te(e)?(e={default:e,_ctx:wn},n=32):(e=String(e),s&64?(n=16,e=[so(e)]):n=8);t.children=e,t.shapeFlag|=n}function v0(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Pe([e.class,s.class]));else if(i==="style")e.style=Ct([e.style,s.style]);else if(Ga(i)){const r=e[i],o=s[i];o&&r!==o&&!(_e(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function $n(t,e,n,s=null){ts(t,e,7,[n,s])}const y0=Dg();let A0=0;function I0(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||y0,r={uid:A0++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new jy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vg(s,i),emitsOptions:Gg(s,i),emit:null,emitted:null,propsDefaults:tt,inheritAttrs:s.inheritAttrs,ctx:tt,data:tt,props:tt,attrs:tt,slots:tt,refs:tt,setupState:tt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=a0.bind(null,r),t.ce&&t.ce(r),r}let tn=null;const w0=()=>tn||wn;let ya,gc;{const t=Wa(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};ya=e("__VUE_INSTANCE_SETTERS__",n=>tn=n),gc=e("__VUE_SSR_SETTERS__",n=>io=n)}const Ao=t=>{const e=tn;return ya(t),t.scope.on(),()=>{t.scope.off(),ya(e)}},Md=()=>{tn&&tn.scope.off(),ya(null)};function Kg(t){return t.vnode.shapeFlag&4}let io=!1;function E0(t,e=!1,n=!1){e&&gc(e);const{props:s,children:i}=t.vnode,r=Kg(t);WA(t,s,r,e),JA(t,i,n||e);const o=r?T0(t,e):void 0;return e&&gc(!1),o}function T0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,FA);const{setup:s}=n;if(s){_s();const i=t.setupContext=s.length>1?b0(t):null,r=Ao(t),o=yo(s,t,0,[t.props,i]),l=Yp(o);if(vs(),r(),(l||t.sp)&&!$r(t)&&bg(t),l){if(o.then(Md,Md),e)return o.then(c=>{Od(t,c)}).catch(c=>{Ka(c,t,0)});t.asyncDep=o}else Od(t,o)}else Yg(t)}function Od(t,e,n){Te(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:nt(e)&&(t.setupState=yg(e)),Yg(t)}function Yg(t,e,n){const s=t.type;t.render||(t.render=s.render||Qn);{const i=Ao(t);_s();try{UA(t)}finally{vs(),i()}}}const C0={get(t,e){return Zt(t,"get",""),t[e]}};function b0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,C0),slots:t.slots,emit:t.emit,expose:e}}function Za(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(yg(cA(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Hr)return Hr[n](t)},has(e,n){return n in e||n in Hr}})):t.proxy}function S0(t,e=!0){return Te(t)?t.displayName||t.name:t.name||e&&t.__name}function R0(t){return Te(t)&&"__vccOpts"in t}const Xe=(t,e)=>pA(t,e,io);function Jg(t,e,n){try{_a(-1);const s=arguments.length;return s===2?nt(e)&&!_e(e)?va(e)?we(t,null,[e]):we(t,e):we(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&va(n)&&(n=[n]),we(t,e,n))}finally{_a(1)}}const P0="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let mc;const Vd=typeof window<"u"&&window.trustedTypes;if(Vd)try{mc=Vd.createPolicy("vue",{createHTML:t=>t})}catch{}const Xg=mc?t=>mc.createHTML(t):t=>t,k0="http://www.w3.org/2000/svg",D0="http://www.w3.org/1998/Math/MathML",as=typeof document<"u"?document:null,Ld=as&&as.createElement("template"),x0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?as.createElementNS(k0,t):e==="mathml"?as.createElementNS(D0,t):n?as.createElement(t,{is:n}):as.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>as.createTextNode(t),createComment:t=>as.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>as.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Ld.innerHTML=Xg(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=Ld.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},N0=Symbol("_vtc");function M0(t,e,n){const s=t[N0];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Aa=Symbol("_vod"),Zg=Symbol("_vsh"),em={name:"show",beforeMount(t,{value:e},{transition:n}){t[Aa]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):kr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),kr(t,!0),s.enter(t)):s.leave(t,()=>{kr(t,!1)}):kr(t,e))},beforeUnmount(t,{value:e}){kr(t,e)}};function kr(t,e){t.style.display=e?t[Aa]:"none",t[Zg]=!e}const O0=Symbol(""),V0=/(?:^|;)\s*display\s*:/;function L0(t,e,n){const s=t.style,i=St(n);let r=!1;if(n&&!i){if(e)if(St(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Zo(s,l,"")}else for(const o in e)n[o]==null&&Zo(s,o,"");for(const o in n)o==="display"&&(r=!0),Zo(s,o,n[o])}else if(i){if(e!==n){const o=s[O0];o&&(n+=";"+o),s.cssText=n,r=V0.test(n)}}else e&&t.removeAttribute("style");Aa in t&&(t[Aa]=r?s.display:"",t[Zg]&&(s.display="none"))}const Bd=/\s*!important$/;function Zo(t,e,n){if(_e(n))n.forEach(s=>Zo(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=B0(t,e);Bd.test(n)?t.setProperty(Ei(s),n.replace(Bd,""),"important"):t[s]=n}}const Fd=["Webkit","Moz","ms"],Fl={};function B0(t,e){const n=Fl[e];if(n)return n;let s=xn(e);if(s!=="filter"&&s in t)return Fl[e]=s;s=Qa(s);for(let i=0;i<Fd.length;i++){const r=Fd[i]+s;if(r in t)return Fl[e]=r}return e}const Ud="http://www.w3.org/1999/xlink";function $d(t,e,n,s,i,r=$y(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ud,e.slice(6,e.length)):t.setAttributeNS(Ud,e,n):n==null||r&&!eg(n)?t.removeAttribute(e):t.setAttribute(e,r?"":es(n)?String(n):n)}function Hd(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Xg(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=eg(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function us(t,e,n,s){t.addEventListener(e,n,s)}function F0(t,e,n,s){t.removeEventListener(e,n,s)}const jd=Symbol("_vei");function U0(t,e,n,s,i=null){const r=t[jd]||(t[jd]={}),o=r[e];if(s&&o)o.value=s;else{const[l,c]=$0(e);if(s){const u=r[e]=G0(s,i);us(t,l,u,c)}else o&&(F0(t,l,o,c),r[e]=void 0)}}const Gd=/(?:Once|Passive|Capture)$/;function $0(t){let e;if(Gd.test(t)){e={};let s;for(;s=t.match(Gd);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ei(t.slice(2)),e]}let Ul=0;const H0=Promise.resolve(),j0=()=>Ul||(H0.then(()=>Ul=0),Ul=Date.now());function G0(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ts(q0(s,n.value),e,5,[s])};return n.value=t,n.attached=j0(),n}function q0(t,e){if(_e(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const qd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Q0=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?M0(t,s,o):e==="style"?L0(t,n,s):Ga(e)?Wc(e)||U0(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):W0(t,e,s,o))?(Hd(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&$d(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!St(s))?Hd(t,xn(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),$d(t,e,s,o))};function W0(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&qd(e)&&Te(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return qd(e)&&St(n)?!1:e in t}const Qs=t=>{const e=t.props["onUpdate:modelValue"]||!1;return _e(e)?n=>Ko(e,n):e};function z0(t){t.target.composing=!0}function Qd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const kn=Symbol("_assign"),pi={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[kn]=Qs(i);const r=s||i.props&&i.props.type==="number";us(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=ua(l)),t[kn](l)}),n&&us(t,"change",()=>{t.value=t.value.trim()}),e||(us(t,"compositionstart",z0),us(t,"compositionend",Qd),us(t,"change",Qd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[kn]=Qs(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?ua(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===c)||(t.value=c))}},K0={deep:!0,created(t,e,n){t[kn]=Qs(n),us(t,"change",()=>{const s=t._modelValue,i=Xi(t),r=t.checked,o=t[kn];if(_e(s)){const l=Yc(s,i),c=l!==-1;if(r&&!c)o(s.concat(i));else if(!r&&c){const u=[...s];u.splice(l,1),o(u)}}else if(lr(s)){const l=new Set(s);r?l.add(i):l.delete(i),o(l)}else o(tm(t,r))})},mounted:Wd,beforeUpdate(t,e,n){t[kn]=Qs(n),Wd(t,e,n)}};function Wd(t,{value:e,oldValue:n},s){t._modelValue=e;let i;if(_e(e))i=Yc(e,s.props.value)>-1;else if(lr(e))i=e.has(s.props.value);else{if(e===n)return;i=_i(e,tm(t,!0))}t.checked!==i&&(t.checked=i)}const Y0={created(t,{value:e},n){t.checked=_i(e,n.props.value),t[kn]=Qs(n),us(t,"change",()=>{t[kn](Xi(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t[kn]=Qs(s),e!==n&&(t.checked=_i(e,s.props.value))}},J0={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=lr(e);us(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ua(Xi(o)):Xi(o));t[kn](t.multiple?i?new Set(r):r:r[0]),t._assigning=!0,iu(()=>{t._assigning=!1})}),t[kn]=Qs(s)},mounted(t,{value:e}){zd(t,e)},beforeUpdate(t,e,n){t[kn]=Qs(n)},updated(t,{value:e}){t._assigning||zd(t,e)}};function zd(t,e){const n=t.multiple,s=_e(e);if(!(n&&!s&&!lr(e))){for(let i=0,r=t.options.length;i<r;i++){const o=t.options[i],l=Xi(o);if(n)if(s){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=Yc(e,l)>-1}else o.selected=e.has(l);else if(_i(Xi(o),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Xi(t){return"_value"in t?t._value:t.value}function tm(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const nm={created(t,e,n){Ho(t,e,n,null,"created")},mounted(t,e,n){Ho(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){Ho(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){Ho(t,e,n,s,"updated")}};function X0(t,e){switch(t){case"SELECT":return J0;case"TEXTAREA":return pi;default:switch(e){case"checkbox":return K0;case"radio":return Y0;default:return pi}}}function Ho(t,e,n,s,i){const o=X0(t.tagName,n.props&&n.props.type)[i];o&&o(t,e,n,s)}const Z0=["ctrl","shift","alt","meta"],eI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Z0.some(n=>t[`${n}Key`]&&!e.includes(n))},Gr=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=((i,...r)=>{for(let o=0;o<e.length;o++){const l=eI[e[o]];if(l&&l(i,e))return}return t(i,...r)}))},tI=sn({patchProp:Q0},x0);let Kd;function nI(){return Kd||(Kd=ZA(tI))}const sI=((...t)=>{const e=nI().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=rI(s);if(!i)return;const r=e._component;!Te(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,iI(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e});function iI(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function rI(t){return St(t)?document.querySelector(t):t}/*!
 * vue-router v4.6.0
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Oi=typeof document<"u";function sm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function oI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&sm(t.default)}const Qe=Object.assign;function $l(t,e){const n={};for(const s in e){const i=e[s];n[s]=Vn(i)?i.map(t):t(i)}return n}const qr=()=>{},Vn=Array.isArray;function Yd(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}const im=/#/g,aI=/&/g,lI=/\//g,cI=/=/g,uI=/\?/g,rm=/\+/g,hI=/%5B/g,dI=/%5D/g,om=/%5E/g,fI=/%60/g,am=/%7B/g,pI=/%7C/g,lm=/%7D/g,gI=/%20/g;function uu(t){return t==null?"":encodeURI(""+t).replace(pI,"|").replace(hI,"[").replace(dI,"]")}function mI(t){return uu(t).replace(am,"{").replace(lm,"}").replace(om,"^")}function _c(t){return uu(t).replace(rm,"%2B").replace(gI,"+").replace(im,"%23").replace(aI,"%26").replace(fI,"`").replace(am,"{").replace(lm,"}").replace(om,"^")}function _I(t){return _c(t).replace(cI,"%3D")}function vI(t){return uu(t).replace(im,"%23").replace(uI,"%3F")}function yI(t){return vI(t).replace(lI,"%2F")}function ro(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const AI=/\/$/,II=t=>t.replace(AI,"");function Hl(t,e,n="/"){let s,i={},r="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return c=l>=0&&c>l?-1:c,c>=0&&(s=e.slice(0,c),r=e.slice(c,l>0?l:e.length),i=t(r)),l>=0&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=CI(s??e,n),{fullPath:s+r+o,path:s,query:i,hash:ro(o)}}function wI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Jd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function EI(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Zi(e.matched[s],n.matched[i])&&cm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Zi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function cm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!TI(t[n],e[n]))return!1;return!0}function TI(t,e){return Vn(t)?Xd(t,e):Vn(e)?Xd(e,t):t===e}function Xd(t,e){return Vn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function CI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const ks={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let vc=(function(t){return t.pop="pop",t.push="push",t})({}),jl=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function bI(t){if(!t)if(Oi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),II(t)}const SI=/^[^#]+#/;function RI(t,e){return t.replace(SI,"#")+e}function PI(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const el=()=>({left:window.scrollX,top:window.scrollY});function kI(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=PI(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Zd(t,e){return(history.state?history.state.position-e:-1)+t}const yc=new Map;function DI(t,e){yc.set(t,e)}function xI(t){const e=yc.get(t);return yc.delete(t),e}function NI(t){return typeof t=="string"||t&&typeof t=="object"}function um(t){return typeof t=="string"||typeof t=="symbol"}let _t=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const hm=Symbol("");_t.MATCHER_NOT_FOUND+"",_t.NAVIGATION_GUARD_REDIRECT+"",_t.NAVIGATION_ABORTED+"",_t.NAVIGATION_CANCELLED+"",_t.NAVIGATION_DUPLICATED+"";function er(t,e){return Qe(new Error,{type:t,[hm]:!0},e)}function os(t,e){return t instanceof Error&&hm in t&&(e==null||!!(t.type&e))}const MI=["params","query","hash"];function OI(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of MI)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function VI(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<n.length;++s){const i=n[s].replace(rm," "),r=i.indexOf("="),o=ro(r<0?i:i.slice(0,r)),l=r<0?null:ro(i.slice(r+1));if(o in e){let c=e[o];Vn(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function ef(t){let e="";for(let n in t){const s=t[n];if(n=_I(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Vn(s)?s.map(i=>i&&_c(i)):[s&&_c(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function LI(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Vn(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const BI=Symbol(""),tf=Symbol(""),tl=Symbol(""),dm=Symbol(""),Ac=Symbol("");function Dr(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ms(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(er(_t.NAVIGATION_ABORTED,{from:n,to:e})):m instanceof Error?c(m):NI(m)?c(er(_t.NAVIGATION_GUARD_REDIRECT,{from:e,to:m})):(o&&s.enterCallbacks[i]===o&&typeof m=="function"&&o.push(m),l())},d=r(()=>t.call(s&&s.instances[i],e,n,u));let p=Promise.resolve(d);t.length<3&&(p=p.then(u)),p.catch(m=>c(m))})}function Gl(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(sm(c)){const u=(c.__vccOpts||c)[e];u&&r.push(Ms(u,n,s,o,l,i))}else{let u=c();r.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=oI(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const m=(p.__vccOpts||p)[e];return m&&Ms(m,n,s,o,l,i)()}))}}return r}function FI(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(u=>Zi(u,l))?s.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>Zi(u,c))||i.push(c))}return[n,s,i]}/*!
 * vue-router v4.6.0
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let UI=()=>location.protocol+"//"+location.host;function fm(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let o=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(o);return l[0]!=="/"&&(l="/"+l),Jd(l,"")}return Jd(n,t)+s+i}function $I(t,e,n,s){let i=[],r=[],o=null;const l=({state:m})=>{const _=fm(t,location),w=n.value,b=e.value;let I=0;if(m){if(n.value=_,e.value=m,o&&o===w){o=null;return}I=b?m.position-b.position:0}else s(_);i.forEach(x=>{x(n.value,w,{delta:I,type:vc.pop,direction:I?I>0?jl.forward:jl.back:jl.unknown})})};function c(){o=n.value}function u(m){i.push(m);const _=()=>{const w=i.indexOf(m);w>-1&&i.splice(w,1)};return r.push(_),_}function d(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(Qe({},m.state,{scroll:el()}),"")}}function p(){for(const m of r)m();r=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",d),document.removeEventListener("visibilitychange",d)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",d),document.addEventListener("visibilitychange",d),{pauseListeners:c,listen:u,destroy:p}}function nf(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?el():null}}function HI(t){const{history:e,location:n}=window,s={value:fm(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,u,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:UI()+t+c;try{e[d?"replaceState":"pushState"](u,"",m),i.value=u}catch(_){console.error(_),n[d?"replace":"assign"](m)}}function o(c,u){r(c,Qe({},e.state,nf(i.value.back,c,i.value.forward,!0),u,{position:i.value.position}),!0),s.value=c}function l(c,u){const d=Qe({},i.value,e.state,{forward:c,scroll:el()});r(d.current,d,!0),r(c,Qe({},nf(s.value,c,null),{position:d.position+1},u),!1),s.value=c}return{location:s,state:i,push:l,replace:o}}function jI(t){t=bI(t);const e=HI(t),n=$I(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=Qe({location:"",base:t,go:s,createHref:RI.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function GI(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),jI(t)}let ui=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var Nt=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(Nt||{});const qI={type:ui.Static,value:""},QI=/[a-zA-Z0-9_]/;function WI(t){if(!t)return[[]];if(t==="/")return[[qI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=Nt.Static,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,c,u="",d="";function p(){u&&(n===Nt.Static?r.push({type:ui.Static,value:u}):n===Nt.Param||n===Nt.ParamRegExp||n===Nt.ParamRegExpEnd?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:ui.Param,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==Nt.ParamRegExp){s=n,n=Nt.EscapeNext;continue}switch(n){case Nt.Static:c==="/"?(u&&p(),o()):c===":"?(p(),n=Nt.Param):m();break;case Nt.EscapeNext:m(),n=s;break;case Nt.Param:c==="("?n=Nt.ParamRegExp:QI.test(c)?m():(p(),n=Nt.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case Nt.ParamRegExp:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=Nt.ParamRegExpEnd:d+=c;break;case Nt.ParamRegExpEnd:p(),n=Nt.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===Nt.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),i}const sf="[^/]+?",zI={sensitive:!1,strict:!1,start:!0,end:!0};var cn=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(cn||{});const KI=/[.+*?^${}()[\]/\\]/g;function YI(t,e){const n=Qe({},zI,e),s=[];let i=n.start?"^":"";const r=[];for(const u of t){const d=u.length?[]:[cn.Root];n.strict&&!u.length&&(i+="/");for(let p=0;p<u.length;p++){const m=u[p];let _=cn.Segment+(n.sensitive?cn.BonusCaseSensitive:0);if(m.type===ui.Static)p||(i+="/"),i+=m.value.replace(KI,"\\$&"),_+=cn.Static;else if(m.type===ui.Param){const{value:w,repeatable:b,optional:I,regexp:x}=m;r.push({name:w,repeatable:b,optional:I});const U=x||sf;if(U!==sf){_+=cn.BonusCustomRegExp;try{`${U}`}catch(j){throw new Error(`Invalid custom RegExp for param "${w}" (${U}): `+j.message)}}let F=b?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;p||(F=I&&u.length<2?`(?:/${F})`:"/"+F),I&&(F+="?"),i+=F,_+=cn.Dynamic,I&&(_+=cn.BonusOptional),b&&(_+=cn.BonusRepeatable),U===".*"&&(_+=cn.BonusWildcard)}d.push(_)}s.push(d)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=cn.BonusStrict}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(u){const d=u.match(o),p={};if(!d)return null;for(let m=1;m<d.length;m++){const _=d[m]||"",w=r[m-1];p[w.name]=_&&w.repeatable?_.split("/"):_}return p}function c(u){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const _ of m)if(_.type===ui.Static)d+=_.value;else if(_.type===ui.Param){const{value:w,repeatable:b,optional:I}=_,x=w in u?u[w]:"";if(Vn(x)&&!b)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const U=Vn(x)?x.join("/"):x;if(!U)if(I)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${w}"`);d+=U}}return d||"/"}return{re:o,score:s,keys:r,parse:l,stringify:c}}function JI(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===cn.Static+cn.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===cn.Static+cn.Segment?1:-1:0}function pm(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=JI(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(rf(s))return 1;if(rf(i))return-1}return i.length-s.length}function rf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const XI={strict:!1,end:!0,sensitive:!1};function ZI(t,e,n){const s=YI(WI(t.path),n),i=Qe(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function ew(t,e){const n=[],s=new Map;e=Yd(XI,e);function i(p){return s.get(p)}function r(p,m,_){const w=!_,b=af(p);b.aliasOf=_&&_.record;const I=Yd(e,p),x=[b];if("alias"in p){const j=typeof p.alias=="string"?[p.alias]:p.alias;for(const se of j)x.push(af(Qe({},b,{components:_?_.record.components:b.components,path:se,aliasOf:_?_.record:b})))}let U,F;for(const j of x){const{path:se}=j;if(m&&se[0]!=="/"){const Ie=m.record.path,S=Ie[Ie.length-1]==="/"?"":"/";j.path=m.record.path+(se&&S+se)}if(U=ZI(j,m,I),_?_.alias.push(U):(F=F||U,F!==U&&F.alias.push(U),w&&p.name&&!lf(U)&&o(p.name)),gm(U)&&c(U),b.children){const Ie=b.children;for(let S=0;S<Ie.length;S++)r(Ie[S],U,_&&_.children[S])}_=_||U}return F?()=>{o(F)}:qr}function o(p){if(um(p)){const m=s.get(p);m&&(s.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&s.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const m=sw(p,n);n.splice(m,0,p),p.record.name&&!lf(p)&&s.set(p.record.name,p)}function u(p,m){let _,w={},b,I;if("name"in p&&p.name){if(_=s.get(p.name),!_)throw er(_t.MATCHER_NOT_FOUND,{location:p});I=_.record.name,w=Qe(of(m.params,_.keys.filter(F=>!F.optional).concat(_.parent?_.parent.keys.filter(F=>F.optional):[]).map(F=>F.name)),p.params&&of(p.params,_.keys.map(F=>F.name))),b=_.stringify(w)}else if(p.path!=null)b=p.path,_=n.find(F=>F.re.test(b)),_&&(w=_.parse(b),I=_.record.name);else{if(_=m.name?s.get(m.name):n.find(F=>F.re.test(m.path)),!_)throw er(_t.MATCHER_NOT_FOUND,{location:p,currentLocation:m});I=_.record.name,w=Qe({},m.params,p.params),b=_.stringify(w)}const x=[];let U=_;for(;U;)x.unshift(U.record),U=U.parent;return{name:I,path:b,params:w,matched:x,meta:nw(x)}}t.forEach(p=>r(p));function d(){n.length=0,s.clear()}return{addRoute:r,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:i}}function of(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function af(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:tw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function tw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function lf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function nw(t){return t.reduce((e,n)=>Qe(e,n.meta),{})}function sw(t,e){let n=0,s=e.length;for(;n!==s;){const r=n+s>>1;pm(t,e[r])<0?s=r:n=r+1}const i=iw(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function iw(t){let e=t;for(;e=e.parent;)if(gm(e)&&pm(t,e)===0)return e}function gm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function cf(t){const e=Wn(tl),n=Wn(dm),s=Xe(()=>{const c=Wt(t.to);return e.resolve(c)}),i=Xe(()=>{const{matched:c}=s.value,{length:u}=c,d=c[u-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(Zi.bind(null,d));if(m>-1)return m;const _=uf(c[u-2]);return u>1&&uf(d)===_&&p[p.length-1].path!==_?p.findIndex(Zi.bind(null,c[u-2])):m}),r=Xe(()=>i.value>-1&&cw(n.params,s.value.params)),o=Xe(()=>i.value>-1&&i.value===n.matched.length-1&&cm(n.params,s.value.params));function l(c={}){if(lw(c)){const u=e[Wt(t.replace)?"replace":"push"](Wt(t.to)).catch(qr);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:Xe(()=>s.value.href),isActive:r,isExactActive:o,navigate:l}}function rw(t){return t.length===1?t[0]:t}const ow=Cg({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:cf,setup(t,{slots:e}){const n=vo(cf(t)),{options:s}=Wn(tl),i=Xe(()=>({[hf(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[hf(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&rw(e.default(n));return t.custom?r:Jg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),aw=ow;function lw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function cw(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Vn(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function uf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const hf=(t,e,n)=>t??e??n,uw=Cg({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Wn(Ac),i=Xe(()=>t.route||s.value),r=Wn(tf,0),o=Xe(()=>{let u=Wt(r);const{matched:d}=i.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),l=Xe(()=>i.value.matched[o.value]);Yo(tf,Xe(()=>o.value+1)),Yo(BI,l),Yo(Ac,i);const c=D();return gs(()=>[c.value,l.value,t.name],([u,d,p],[m,_,w])=>{d&&(d.instances[p]=u,_&&_!==d&&u&&u===m&&(d.leaveGuards.size||(d.leaveGuards=_.leaveGuards),d.updateGuards.size||(d.updateGuards=_.updateGuards))),u&&d&&(!_||!Zi(d,_)||!m)&&(d.enterCallbacks[p]||[]).forEach(b=>b(u))},{flush:"post"}),()=>{const u=i.value,d=t.name,p=l.value,m=p&&p.components[d];if(!m)return df(n.default,{Component:m,route:u});const _=p.props[d],w=_?_===!0?u.params:typeof _=="function"?_(u):_:null,I=Jg(m,Qe({},w,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return df(n.default,{Component:I,route:u})||I}}});function df(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const hw=uw;function dw(t){const e=ew(t.routes,t),n=t.parseQuery||VI,s=t.stringifyQuery||ef,i=t.history,r=Dr(),o=Dr(),l=Dr(),c=uA(ks);let u=ks;Oi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=$l.bind(null,q=>""+q),p=$l.bind(null,yI),m=$l.bind(null,ro);function _(q,ae){let te,ue;return um(q)?(te=e.getRecordMatcher(q),ue=ae):ue=q,e.addRoute(ue,te)}function w(q){const ae=e.getRecordMatcher(q);ae&&e.removeRoute(ae)}function b(){return e.getRoutes().map(q=>q.record)}function I(q){return!!e.getRecordMatcher(q)}function x(q,ae){if(ae=Qe({},ae||c.value),typeof q=="string"){const M=Hl(n,q,ae.path),Q=e.resolve({path:M.path},ae),K=i.createHref(M.fullPath);return Qe(M,Q,{params:m(Q.params),hash:ro(M.hash),redirectedFrom:void 0,href:K})}let te;if(q.path!=null)te=Qe({},q,{path:Hl(n,q.path,ae.path).path});else{const M=Qe({},q.params);for(const Q in M)M[Q]==null&&delete M[Q];te=Qe({},q,{params:p(M)}),ae.params=p(ae.params)}const ue=e.resolve(te,ae),xe=q.hash||"";ue.params=d(m(ue.params));const y=wI(s,Qe({},q,{hash:mI(xe),path:ue.path})),C=i.createHref(y);return Qe({fullPath:y,hash:xe,query:s===ef?LI(q.query):q.query||{}},ue,{redirectedFrom:void 0,href:C})}function U(q){return typeof q=="string"?Hl(n,q,c.value.path):Qe({},q)}function F(q,ae){if(u!==q)return er(_t.NAVIGATION_CANCELLED,{from:ae,to:q})}function j(q){return S(q)}function se(q){return j(Qe(U(q),{replace:!0}))}function Ie(q,ae){const te=q.matched[q.matched.length-1];if(te&&te.redirect){const{redirect:ue}=te;let xe=typeof ue=="function"?ue(q,ae):ue;return typeof xe=="string"&&(xe=xe.includes("?")||xe.includes("#")?xe=U(xe):{path:xe},xe.params={}),Qe({query:q.query,hash:q.hash,params:xe.path!=null?{}:q.params},xe)}}function S(q,ae){const te=u=x(q),ue=c.value,xe=q.state,y=q.force,C=q.replace===!0,M=Ie(te,ue);if(M)return S(Qe(U(M),{state:typeof M=="object"?Qe({},xe,M.state):xe,force:y,replace:C}),ae||te);const Q=te;Q.redirectedFrom=ae;let K;return!y&&EI(s,ue,te)&&(K=er(_t.NAVIGATION_DUPLICATED,{to:Q,from:ue}),Lt(ue,ue,!0,!1)),(K?Promise.resolve(K):P(Q,ue)).catch(W=>os(W)?os(W,_t.NAVIGATION_GUARD_REDIRECT)?W:Kt(W):be(W,Q,ue)).then(W=>{if(W){if(os(W,_t.NAVIGATION_GUARD_REDIRECT))return S(Qe({replace:C},U(W.to),{state:typeof W.to=="object"?Qe({},xe,W.to.state):xe,force:y}),ae||Q)}else W=N(Q,ue,!0,C,xe);return R(Q,ue,W),W})}function A(q,ae){const te=F(q,ae);return te?Promise.reject(te):Promise.resolve()}function T(q){const ae=gn.values().next().value;return ae&&typeof ae.runWithContext=="function"?ae.runWithContext(q):q()}function P(q,ae){let te;const[ue,xe,y]=FI(q,ae);te=Gl(ue.reverse(),"beforeRouteLeave",q,ae);for(const M of ue)M.leaveGuards.forEach(Q=>{te.push(Ms(Q,q,ae))});const C=A.bind(null,q,ae);return te.push(C),ot(te).then(()=>{te=[];for(const M of r.list())te.push(Ms(M,q,ae));return te.push(C),ot(te)}).then(()=>{te=Gl(xe,"beforeRouteUpdate",q,ae);for(const M of xe)M.updateGuards.forEach(Q=>{te.push(Ms(Q,q,ae))});return te.push(C),ot(te)}).then(()=>{te=[];for(const M of y)if(M.beforeEnter)if(Vn(M.beforeEnter))for(const Q of M.beforeEnter)te.push(Ms(Q,q,ae));else te.push(Ms(M.beforeEnter,q,ae));return te.push(C),ot(te)}).then(()=>(q.matched.forEach(M=>M.enterCallbacks={}),te=Gl(y,"beforeRouteEnter",q,ae,T),te.push(C),ot(te))).then(()=>{te=[];for(const M of o.list())te.push(Ms(M,q,ae));return te.push(C),ot(te)}).catch(M=>os(M,_t.NAVIGATION_CANCELLED)?M:Promise.reject(M))}function R(q,ae,te){l.list().forEach(ue=>T(()=>ue(q,ae,te)))}function N(q,ae,te,ue,xe){const y=F(q,ae);if(y)return y;const C=ae===ks,M=Oi?history.state:{};te&&(ue||C?i.replace(q.fullPath,Qe({scroll:C&&M&&M.scroll},xe)):i.push(q.fullPath,xe)),c.value=q,Lt(q,ae,te,C),Kt()}let E;function st(){E||(E=i.listen((q,ae,te)=>{if(!Yt.listening)return;const ue=x(q),xe=Ie(ue,Yt.currentRoute.value);if(xe){S(Qe(xe,{replace:!0,force:!0}),ue).catch(qr);return}u=ue;const y=c.value;Oi&&DI(Zd(y.fullPath,te.delta),el()),P(ue,y).catch(C=>os(C,_t.NAVIGATION_ABORTED|_t.NAVIGATION_CANCELLED)?C:os(C,_t.NAVIGATION_GUARD_REDIRECT)?(S(Qe(U(C.to),{force:!0}),ue).then(M=>{os(M,_t.NAVIGATION_ABORTED|_t.NAVIGATION_DUPLICATED)&&!te.delta&&te.type===vc.pop&&i.go(-1,!1)}).catch(qr),Promise.reject()):(te.delta&&i.go(-te.delta,!1),be(C,ue,y))).then(C=>{C=C||N(ue,y,!1),C&&(te.delta&&!os(C,_t.NAVIGATION_CANCELLED)?i.go(-te.delta,!1):te.type===vc.pop&&os(C,_t.NAVIGATION_ABORTED|_t.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),R(ue,y,C)}).catch(qr)}))}let vt=Dr(),it=Dr(),Ce;function be(q,ae,te){Kt(q);const ue=it.list();return ue.length?ue.forEach(xe=>xe(q,ae,te)):console.error(q),Promise.reject(q)}function kt(){return Ce&&c.value!==ks?Promise.resolve():new Promise((q,ae)=>{vt.add([q,ae])})}function Kt(q){return Ce||(Ce=!q,st(),vt.list().forEach(([ae,te])=>q?te(q):ae()),vt.reset()),q}function Lt(q,ae,te,ue){const{scrollBehavior:xe}=t;if(!Oi||!xe)return Promise.resolve();const y=!te&&xI(Zd(q.fullPath,0))||(ue||!te)&&history.state&&history.state.scroll||null;return iu().then(()=>xe(q,ae,y)).then(C=>C&&kI(C)).catch(C=>be(C,q,ae))}const rt=q=>i.go(q);let Cn;const gn=new Set,Yt={currentRoute:c,listening:!0,addRoute:_,removeRoute:w,clearRoutes:e.clearRoutes,hasRoute:I,getRoutes:b,resolve:x,options:t,push:j,replace:se,go:rt,back:()=>rt(-1),forward:()=>rt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:it.add,isReady:kt,install(q){q.component("RouterLink",aw),q.component("RouterView",hw),q.config.globalProperties.$router=Yt,Object.defineProperty(q.config.globalProperties,"$route",{enumerable:!0,get:()=>Wt(c)}),Oi&&!Cn&&c.value===ks&&(Cn=!0,j(i.location).catch(ue=>{}));const ae={};for(const ue in ks)Object.defineProperty(ae,ue,{get:()=>c.value[ue],enumerable:!0});q.provide(tl,Yt),q.provide(dm,_g(ae)),q.provide(Ac,c);const te=q.unmount;gn.add(q),q.unmount=function(){gn.delete(q),gn.size<1&&(u=ks,E&&E(),E=null,c.value=ks,Cn=!1,Ce=!1),te()}}};function ot(q){return q.reduce((ae,te)=>ae.then(()=>T(te)),Promise.resolve())}return Yt}function dn(){return Wn(tl)}const fw={__name:"App",setup(t){dn();const e=D(null),n=D(!1),s=()=>{const r=localStorage.getItem("soundEnabled");return r!==null?r==="true":!0},i=()=>{e.value&&(s()?n.value||e.value.play().then(()=>{n.value=!0}).catch(()=>{}):(e.value.pause(),n.value=!1))};return Rt(()=>{try{e.value=new Audio,e.value.src=new URL("@/assets/audio/bgm.mp3",import.meta.url).href,e.value.loop=!0,e.value.volume=.5,i();const r=()=>{e.value&&s()&&!n.value&&e.value.play().then(()=>{n.value=!0}).catch(()=>{})};document.addEventListener("click",r,{once:!0}),document.addEventListener("touchstart",r,{once:!0}),window.addEventListener("soundSettingChanged",i)}catch{console.log("BGM 파일을 찾을 수 없습니다.")}}),cr(()=>{e.value&&(e.value.pause(),e.value=null),window.removeEventListener("soundSettingChanged",i)}),(r,o)=>{const l=VA("router-view");return O(),Wg(l)}}},pw="modulepreload",gw=function(t){return"/tdl/"+t},ff={},mw=function(e,n,s){let i=Promise.resolve();if(n&&n.length>0){let c=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");i=c(n.map(u=>{if(u=gw(u),u in ff)return;ff[u]=!0;const d=u.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":pw,d||(m.as="script"),m.crossOrigin="",m.href=u,l&&m.setAttribute("nonce",l),document.head.appendChild(m),d)return new Promise((_,w)=>{m.addEventListener("load",_),m.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${u}`)))})}))}function r(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&r(l.reason);return e().catch(r)})},_w=()=>JSON.parse(localStorage.getItem("users")||"[]"),ht=()=>{const t=sessionStorage.getItem("currentUser");return t?JSON.parse(t):null},Mt=async(t,e)=>{const n=ht();if(n&&(n.id?.length>20||n.uid))try{const{updateGameData:r}=await mw(async()=>{const{updateGameData:l}=await Promise.resolve().then(()=>aV);return{updateGameData:l}},void 0);return(await r(t,e)).success}catch(r){console.error("Firebase 업데이트 실패, localStorage로 폴백:",r)}const s=_w(),i=s.findIndex(r=>r.id===t);return i!==-1?(s[i].gameData={...s[i].gameData,...e},localStorage.setItem("users",JSON.stringify(s)),n&&n.id===t&&(n.gameData={...n.gameData,...e},sessionStorage.setItem("currentUser",JSON.stringify(n))),!0):!1},vw=(t,e)=>Mt(t,{coins:e}),Ia=(t,e,n)=>Mt(t,{coins:e,totalCoin:n}),pf=()=>{sessionStorage.removeItem("currentUser")},yw=()=>localStorage.getItem("appLanguage")||"한국어",mm=()=>{const t=yw();return{ko:{home:"홈",exchange:"교환소",quest:"퀘스트",inventory:"인벤토리",factory:"제작소",mining:"채굴",hunting:"사냥",exploration:"탐험",production:"생산",back:"← 뒤로",settings:"설정",notification:"알림"},en:{home:"Home",exchange:"Exchange",quest:"Quest",inventory:"Inventory",factory:"Factory",mining:"Mining",hunting:"Hunting",exploration:"Exploration",production:"Production",back:"← Back",settings:"Settings",notification:"Notification"}}[t==="한국어"?"ko":"en"]},Aw="/tdl/assets/tdl_splashLogo-b8p6ictM.png",Iw="/tdl/assets/tdl_splash_bg-B78B8oeM.png",Pt=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},ww={class:"loading-screen"},Ew={class:"loading-bar-container"},Tw={class:"loading-bar-track"},Cw={__name:"LoadingScreen",setup(t){const e=dn(),n=D(0);return Rt(()=>{const r=.5333333333333333,o=setInterval(()=>{n.value+=r,n.value>=100&&(n.value=100,clearInterval(o),setTimeout(()=>{ht()?e.push("/main"):e.push("/login")},200))},16)}),(s,i)=>(O(),L("div",ww,[i[0]||(i[0]=h("div",{class:"logo-top"},[h("img",{src:Aw,alt:"TDL Logo",class:"splash-logo"})],-1)),h("div",Ew,[h("div",Tw,[h("div",{class:"loading-bar-fill",style:Ct({width:n.value+"%"})},null,4)])]),i[1]||(i[1]=h("div",{class:"splash-bg"},[h("img",{src:Iw,alt:"Splash Background",class:"splash-bg-image"})],-1))]))}},bw=Pt(Cw,[["__scopeId","data-v-91347297"]]),bn=vo({isLoggedIn:!1,walletAddress:"",userBalance:"0 ETH",nftCount:0,gameLevel:1,isLoading:!1}),_m=()=>{const t=(i,r)=>{bn.isLoggedIn=!0,bn.walletAddress=i,bn.userBalance=r},e=i=>{bn.nftCount=i.nftCount||0,bn.gameLevel=i.gameLevel||1},n=i=>{bn.isLoading=i},s=()=>{bn.isLoggedIn=!1,bn.walletAddress="",bn.userBalance="0 ETH",bn.nftCount=0,bn.gameLevel=1};return{state:Sw(bn),setWalletConnected:t,setUserData:e,setLoading:n,logout:s}},Sw=t=>new Proxy(t,{get(e,n){return e[n]},set(){return console.warn("직접 상태 수정은 금지됩니다. 액션을 사용하세요."),!1}}),Rw={class:"login-screen"},Pw={class:"input-group"},kw={class:"input-container"},Dw={class:"input-group"},xw={class:"input-container"},Nw=["type"],Mw={key:0,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Ow={key:1,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Vw=["disabled"],Lw={key:0,class:"btn-content"},Bw={key:1,class:"btn-content"},Fw={key:2,class:"btn-content"},Uw={__name:"LoginScreen",setup(t){const e=dn(),{setWalletConnected:n,setLoading:s}=_m(),i=D(!1),r=D(!1),o=D(!1),l=()=>{e.push("/signup")},c=D(""),u=D(""),d=async m=>{if(m.preventDefault(),!c.value.trim()||!u.value.trim()){alert("ID와 비밀번호를 모두 입력해주세요.");return}i.value=!0,s(!0);const w=JSON.parse(localStorage.getItem("users")||"[]").find(b=>b.email===c.value&&b.password===u.value);setTimeout(()=>{i.value=!1,w?(r.value=!0,sessionStorage.setItem("currentUser",JSON.stringify(w)),n(w.email,`${w.gameData.coins} 코인`),s(!1),setTimeout(()=>{e.push("/main")},1e3)):(s(!1),alert("이메일 또는 비밀번호가 올바르지 않습니다."))},2e3)},p=()=>{o.value=!o.value};return Rt(()=>{if(s(!1),ht()){e.push("/main");return}const _=document.querySelector(".loginCont");_&&(_.style.opacity="0",_.style.transform="translateY(30px)",setTimeout(()=>{_.style.transition="all 0.6s ease",_.style.opacity="1",_.style.transform="translateY(0)"},100))}),(m,_)=>(O(),L("div",Rw,[_[10]||(_[10]=h("h1",{class:"login-title"},"로그인",-1)),h("form",{onSubmit:d,class:"login-form"},[h("div",Pw,[_[3]||(_[3]=h("label",{class:"input-label"},"아이디(이메일계정)",-1)),h("div",kw,[_[2]||(_[2]=h("svg",{class:"input-icon",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),h("polyline",{points:"22,6 12,13 2,6"})],-1)),ds(h("input",{type:"email","onUpdate:modelValue":_[0]||(_[0]=w=>c.value=w),class:"input-field",placeholder:"이메일을 입력하세요",required:""},null,512),[[pi,c.value]])])]),h("div",Dw,[_[7]||(_[7]=h("label",{class:"input-label"},"비밀번호",-1)),h("div",xw,[_[6]||(_[6]=h("svg",{class:"input-icon",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),h("circle",{cx:"12",cy:"16",r:"1"}),h("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})],-1)),ds(h("input",{type:o.value?"text":"password","onUpdate:modelValue":_[1]||(_[1]=w=>u.value=w),class:"input-field",placeholder:"비밀번호를 입력하세요",required:""},null,8,Nw),[[nm,u.value]]),h("button",{type:"button",class:"password-toggle",onClick:p},[o.value?(O(),L("svg",Ow,[..._[5]||(_[5]=[h("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"},null,-1),h("line",{x1:"1",y1:"1",x2:"23",y2:"23"},null,-1)])])):(O(),L("svg",Mw,[..._[4]||(_[4]=[h("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},null,-1),h("circle",{cx:"12",cy:"12",r:"3"},null,-1)])]))])])]),h("button",{type:"submit",disabled:i.value||r.value,class:Pe(["login-button",{connecting:i.value,connected:r.value}])},[!i.value&&!r.value?(O(),L("div",Lw," 로그인 ")):he("",!0),i.value?(O(),L("div",Bw,[..._[8]||(_[8]=[h("div",{class:"spinner-small"},null,-1),so(" 로그인 중... ",-1)])])):he("",!0),r.value?(O(),L("div",Fw,[..._[9]||(_[9]=[h("svg",{class:"check-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor"},[h("path",{d:"M20 6L9 17l-5-5"})],-1),so(" 성공! ",-1)])])):he("",!0)],10,Vw)],32),h("div",{class:"signup-link"},[h("button",{onClick:l,class:"signup-btn"}," 회원 가입하기 ")])]))}},$w=Pt(Uw,[["__scopeId","data-v-475abb12"]]),Hw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAz4SURBVHgB7d3ddRRXFobhIyJgMpAzwBGgicDjCOwQyMA4AiYDk8FMBmIiMI5AygBn0FMFjQ3or3+q6uy9z/OsVUtccK3vrVPVrdYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAjXDQA7tjtds+nH1fT9XK65n9ffvNfbqfr/XT9cXFx8a4BADnNoz9dP0/X9e44N9P123RdNgAgj2m8X03Xh935/iMEACC4eaxPuOM/xOsGAMSz+3Tcv8Rd/0Nudk4DACCO+Q59t40bEQAAAWw4/iIAACLoMP5fRsDzBgBsq+P4f/amAQDbCTD+n101AGB9uzjjP7tuAMC6drHG/7OrBgCsYxdz/GdOAejOHwMCStp9+ia+X1pc/7i4uPizQSfPGkAxCcZ/9kODjgQAUEqS8Z9dNehIAABlJBr/2YsGHQkAoIRk4z/zrYB05SVAIL2E4//RxaRBJ04AgNSyjj/0JgCAtIw/nE4AACkVGP/bBh0JACCdInf+tw06EgBAKoWO/d836EgAAGkUe+b/rkFHPoICpFDwhT9/C4CunAAA4RUc/7fGn96cAAChFf2o3/dTAHgHgK6cAABhFR3/t8afCJwAACEV/pKf76YAuG3QmRMAIJzC4//a+BOFEwAglMLj/99p/H9sEIQAAMIoPP7zM/9/evOfSAQAEILxh20JAKA74w/bEwBAV8Yf+hAAQDfGH/oRAEAXxh/6EgDA5ow/9CcAgE0Zf4hBAACbMf4QhwAANmH8IRYBAKzO+EM8AgBYlfGHmAQAsBrjD3EJAGAVxh9iEwDA4ow/xCcAgEUZf8hBAACLMf6QhwAAFmH8IRcBAJzN+EM+AgA4i/GHnAQAcDLjD3kJAOAkxh9yEwDA0Yw/5CcAgKMYf6hBAAAHM/5QhwAADmL8oRYBADzJ+EM9AgB4lPGHmgQA8CDjD3UJAOBexh9qEwDAHcYf6hMAwFeMP4xBAAB/Mf4wDgEAfGT8YSwCADD+MCABAIMz/jAmAQADM/4wLgEAgzL+MDYBAAMy/oAAgMEYf2AmAGAgxh/4TADAIIw/8CUBAAMw/sC3BAAUZ/yB+wgAKMz4Aw8RAFCU8QceIwCgIOMPPEUAQDHGHziEAIBCjD9wKAEARRh/4BgCAAow/sCxBAAkZ/yBUwgASMz4A6cSAJCU8QfOIQAgIeMPnEsAQDLGH1iCAIBEjD+wFAEASRh/YEkCABIw/sDSBAAEZ/yBNQgACMz4A2sRABCU8QfWJAAgIOMPrE0AQDDGH9iCAIBAjD+wFQEAQRh/YEsCAAIw/sDWBAB0ZvyBHgQAdGT8gV4EAHRi/IGeBAB0YPyB3gQAbMz4AxEIANiQ8QeiEACwEeMPRCIAYAPGH4hGAMDKjD8QkQCAFRl/ICoBACsx/kBkAgBWYPyB6AQALMz4AxkIAFiQ8QeyEACwEOMPZCIAYAHGH8hGAMCZjD+QkQCAMxh/ICsBACcy/kBmAgBOYPyB7AQAHMn4AxUIADiC8QeqEABwIOMPVCIA4ADGH6hGAMATjD9QkQCARxh/oCoBAA8w/kBlAgDuYfyB6gQAfMP4AyMQAPAF4w+MQgDAnvEHRiIAoBl/YDwCgOEZf2BEAoChGX9gVAKAYRl/YGQCgCEZf2B0AoDhGH8AAcBgjD/AJwKAYRh/gL8JAIZg/AG+JgAoz/gD3CUAKM34A9xPAFCW8Qd4mACgJOMP8DgBQDnGH+BpAoBSjD/AYQQAZRh/gMMJAEow/gDHEQCkZ/wBjicASM34A5xGAJCW8Qc4nQAgJeMPcB4BQDrGH+B8AoBUjD/AMgQAaRh/gOUIAFIw/gDLEgCEZ/wBlicACM34A6xDABCW8QdYjwAgJOMPsC4BQDjGH2B9AoBQpvF/Nf140+ox/kAoAoAwpvG/nH7ctHqMPxDOswZxXLd6jD8QkgAghP1z/8tWi/EHwhIAdLc/+v+p1WL8gdAEABFctVp3/8YfCM9LgHQ3nQDML/5dthqMP5CCEwC6msb/RTP+AJsTAPT2stVg/IFUBAC9XbX8jD+QjgCgt8uWm/EHUhIA9HbZ8jL+QFo+BUBXu0nLyfgDqTkBAIABCQB6y3oHPX988Xo6wHjeABISAPSW+QhdBABpCQB6e99yEwFASgKA3t61/EQAkI4AoLc/Wg0iAEjFxwDpzh8DAtieEwAieNvqcBIApOAEgO72YzmfAlQaTScBQGhOAOhuP5L/brU4CQBCcwJACPuh/L3VeRfgMycBQEhOAAhhP5A/ttxfDHQfJwFASAKAMKYImO+Wf231iAAgHAFAKFMEzO8CvG71iAAgFO8AENI0lL+0miHgnQAgBAFAWCIAYD0CgNBEAMA6BADhiQCA5QkAUhABAMsSAKQhAgCWIwBIRQQALEMAkI4IADifACAlEQBwHgFAWiIA4HQCgNREAMBpBADpiQCA4wkAShABAMcRAJQhAgAOJwAoRQQAHEYAUI4IAHiaAKAkEQDwOAFAWSIA4GECgNJEAMD9BADliQCAuwQAQxABAF8TAAxDBAD8TQAwFBEA8IkAYDgiAEAAMCgRAIxOADAsEQCMTAAwNBEAjEoAMDwRAIxIAEATAcB4BADsiQBgJAIAviACgFEIAPiGCABGIADgHiIAqE4AwANEAFCZAIBHiACgKgEATxABQEUCAA4gAoBqBAAcSAQAlQgAOIIIAKoQAHAkEQBUIADgBCIAyE4AwIlEAJCZAIAziAAgKwEAZxIBQEYCABYgAoBsBAAsRAQAmQgAWJAIALIQALAwEQBkIABgBSIAiE4AwEpEABCZAIAViQAgKgEAKxMBQEQCADYgAoBoBABsRAQAkQgA2JAIAKIQALAxEQBEIACgAxEA9CYAoBMRAPQkAKAjEQD0IgCgMxEA9CAAIAARAGxNAEAQIgDYkgCAQEQAsBUBAMGIAGALAgACEgHA2gQABCUCgDUJAAhMBABrEQAQnAgA1iAAIAERACxNAEASIgBYkgCAREQAsBQBAMmIAGAJAgASEgHAuQQAJCUCgHMIAEhMBACnEgCQnAgATiEAoAARABxLAEARIgA4hgCAQkQAcCgBAMWIAOAQAgAKEgHAUwQAFCUCgMcIAChMBAAPEQBQnAgA7iMAYAAiAPiWAIBBiADgSwIABiICgM8EAAxGBAAzAQADEgGAAIBBiQAYmwCAgYkAGJcAgMGJABiTAABEAAxIAAAfiQAYiwAA/iICYBwCAPiKCIAxCADgDhEA9QkA4F4iAGoTAMCDRADUJQCAR4kAqEkAAE8SAVCPAAAOIgKgFgEAHEwEQB0CADiKCIAaBABwNBEA+QkA4CQiAHITAMDJRADkJQCAs4gAyEkAAGcTAZCPAAAWIQIgFwEALEYEQB4CAFiUCIAcBACwOBEA8QkAYBUiAGITAMBqRADEJQCAVYkAiEkAAKsTARCPAAA2IQIgFgEAbEYEQBwCANiUCIAYBACwOREA/QkAoAsRAH0JAKAbEQD9CACgKxEAfQgAoDsRANsTAEAIIgC2JQCAMEQAbOdZAwhiGshfW80AeDFdvzUIRAAAoRSOgH9NJxyvGgThEQAQUtHHAfMjgO+nyLlt0JkTACCkoicBz5tHAQQhAICwikbA1XS6cdWgMwEAhFY0An5q0Jl3AIAUir0TML8L8J2PBdKTEwAghWInAfO7AC8bdCQAgDSKRcBVg44EAJBKoQh40aAjAQCkUyQCLht05CVAIK3sLwZOIeN3MN04AQDSKvy1wbA6AQCkJgLgNAIASC9pBNw26EgAACUkjIDbBh0JAKCMZBFw26AjAQCUkigC3jUAYFnzRwR3sV02AGB5u7gRcN2gM48AgLICPw542wCAde1inQTcNABgG7s4EfBDAwC2s+sfAW8aALC9jhFwM13PGwDQR4cIuNn52B8A9LdhBNwYfwAIZBrmV9P1Ybee340/AAQ0D/T+Ln1pb3ae+QNAbNNY/7xQCFxP18sGAOSxD4Hr3XE+7O/4DT9pXDQA7tgf38+D/mJ/fXmc/+f+ej9fFxcX/2sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABU9n/G+xQHTFSybwAAAABJRU5ErkJggg==",jw={class:"signup-screen"},Gw={class:"input-group"},qw={class:"input-container"},Qw={class:"input-group"},Ww={class:"input-container"},zw={class:"input-group"},Kw={class:"input-container"},Yw={class:"input-group"},Jw={class:"input-container"},Xw=["type"],Zw={key:0,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},eE={key:1,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},tE={__name:"SignupScreen",setup(t){const e=dn(),n=D({name:"",phone:"",email:"",password:""}),s=D(!1),i=()=>{e.go(-1)},r=async l=>{if(l.preventDefault(),!n.value.name.trim()||!n.value.phone.trim()||!n.value.email.trim()||!n.value.password.trim()){alert("모든 필드를 입력해주세요.");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.value.email)){alert("올바른 이메일 형식을 입력해주세요.");return}if(n.value.password.length<6){alert("비밀번호는 6자 이상이어야 합니다.");return}const u=JSON.parse(localStorage.getItem("users")||"[]");if(u.some(m=>m.email===n.value.email)){alert("이미 가입된 이메일입니다.");return}const p={id:Date.now(),name:n.value.name,phone:n.value.phone,email:n.value.email,password:n.value.password,createdAt:new Date().toISOString(),gameData:{level:1,coins:0,nftCount:0}};u.push(p),localStorage.setItem("users",JSON.stringify(u)),console.log("회원가입 완료:",p),alert("회원가입이 완료되었습니다!"),e.push("/login")},o=()=>{s.value=!s.value};return(l,c)=>(O(),L("div",jw,[h("button",{class:"back-button",onClick:i},[...c[4]||(c[4]=[h("img",{src:Hw,alt:"back-button",width:"20px"},null,-1)])]),c[16]||(c[16]=h("h1",{class:"signup-title"},"회원가입",-1)),h("form",{onSubmit:r,class:"signup-form"},[h("div",Gw,[c[6]||(c[6]=h("label",{class:"input-label"},"이름",-1)),h("div",qw,[c[5]||(c[5]=h("svg",{class:"input-icon",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),h("polyline",{points:"22,6 12,13 2,6"})],-1)),ds(h("input",{type:"text","onUpdate:modelValue":c[0]||(c[0]=u=>n.value.name=u),class:"input-field",placeholder:"이름을 입력하세요",required:""},null,512),[[pi,n.value.name]])])]),h("div",Qw,[c[8]||(c[8]=h("label",{class:"input-label"},"전화번호",-1)),h("div",Ww,[c[7]||(c[7]=h("svg",{class:"input-icon",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})],-1)),ds(h("input",{type:"tel","onUpdate:modelValue":c[1]||(c[1]=u=>n.value.phone=u),class:"input-field",placeholder:"전화번호를 입력하세요",required:""},null,512),[[pi,n.value.phone]])])]),h("div",zw,[c[10]||(c[10]=h("label",{class:"input-label"},"이메일",-1)),h("div",Kw,[c[9]||(c[9]=h("svg",{class:"input-icon",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),h("polyline",{points:"22,6 12,13 2,6"})],-1)),ds(h("input",{type:"email","onUpdate:modelValue":c[2]||(c[2]=u=>n.value.email=u),class:"input-field",placeholder:"이메일을 입력하세요",required:""},null,512),[[pi,n.value.email]])])]),h("div",Yw,[c[14]||(c[14]=h("label",{class:"input-label"},"비밀번호",-1)),h("div",Jw,[c[13]||(c[13]=h("svg",{class:"input-icon",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),h("circle",{cx:"12",cy:"16",r:"1"}),h("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})],-1)),ds(h("input",{type:s.value?"text":"password","onUpdate:modelValue":c[3]||(c[3]=u=>n.value.password=u),class:"input-field",placeholder:"비밀번호를 입력하세요",required:""},null,8,Xw),[[nm,n.value.password]]),h("button",{type:"button",class:"password-toggle",onClick:o},[s.value?(O(),L("svg",eE,[...c[12]||(c[12]=[h("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"},null,-1),h("line",{x1:"1",y1:"1",x2:"23",y2:"23"},null,-1)])])):(O(),L("svg",Zw,[...c[11]||(c[11]=[h("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},null,-1),h("circle",{cx:"12",cy:"12",r:"3"},null,-1)])]))])])]),c[15]||(c[15]=h("button",{type:"submit",class:"signup-button"}," 회원가입 ",-1))],32)]))}},nE=Pt(tE,[["__scopeId","data-v-8fe702ff"]]),hu="/tdl/assets/cat1-B_B8VE2s.png",du="/tdl/assets/cat10-B8AgbljH.png",fu="/tdl/assets/cat11-0fJ86MBw.png",pu="/tdl/assets/cat12-9jWhGICw.png",gu="/tdl/assets/cat13-CHa4qUOi.png",mu="/tdl/assets/cat14-CLrryeLM.png",_u="/tdl/assets/cat15-CCtjZj8M.png",vu="/tdl/assets/cat16-CPcR6OS6.png",yu="/tdl/assets/cat17-EO7rjjtM.png",Au="/tdl/assets/cat18-BGDiOePY.png",Iu="/tdl/assets/cat19-DxCDtOnA.png",wu="/tdl/assets/cat2-0Y4nM6HW.png",Eu="/tdl/assets/cat20-Bz9cd08a.png",Tu="/tdl/assets/cat21-ECTsze2s.png",Cu="/tdl/assets/cat22-BvGXhyri.png",bu="/tdl/assets/cat23-DqU2B_M0.png",Su="/tdl/assets/cat24-7cWYLYDN.png",Ru="/tdl/assets/cat25-Cy0mQl6B.png",Pu="/tdl/assets/cat26-Bk4tHCwE.png",ku="/tdl/assets/cat27-CvtmCEXM.png",Du="/tdl/assets/cat28-B9s1wmgo.png",xu="/tdl/assets/cat29-D_79HmBj.png",Nu="/tdl/assets/cat3-Dp7OJMB9.png",Mu="/tdl/assets/cat30-Cx-HRp0m.png",Ou="/tdl/assets/cat4-DHiuXgwB.png",Vu="/tdl/assets/cat5-BvXrfJAO.png",Lu="/tdl/assets/cat6-DZOiQoo1.png",Bu="/tdl/assets/cat7-CeDKF7mR.png",Fu="/tdl/assets/cat8-mjRhb3fS.png",Uu="/tdl/assets/cat9-Bzb-Egme.png",$u="/tdl/assets/catProfile01-gY0Djz81.png",Hu="/tdl/assets/catProfile02-Cesbpkj5.png",ju="/tdl/assets/cat_ico-Csdt_Q01.png",sE="/tdl/assets/tul1-CuZ0qR5D.png",iE="/tdl/assets/tul2-Cj7OkHg6.png",rE="/tdl/assets/tul3-CaPMxBJ-.png",oE="/tdl/assets/tul5-CQc-0WLd.png",aE="/tdl/assets/tul6-COB-AGqQ.png",lE="/tdl/assets/mainPoint-D-oASrAx.png",vm="/tdl/assets/mainCoin-CGuum4ry.png",cE="/tdl/assets/lighting-DDPCD7_E.png",ym="/tdl/assets/point_ico-CuS5zUpS.png",Am="/tdl/assets/coin_ico-COVm5STX.png",Im="/tdl/assets/cat_ico-Csdt_Q01.png",uE="/tdl/assets/notice-Bkd9hh4q.png",hE="/tdl/assets/setting-CxNpDL9x.png",dE={class:"headerCont"},fE={class:"headerBar"},pE={class:"headerValue"},gE={class:"headerValue"},mE={class:"headerValue"},_E={class:"headerValue"},vE={__name:"Header",setup(t){const e=D(localStorage.getItem("appLanguage")||"한국어");Xe(()=>mm());const n=dn(),s=D(0),i=D(0),r=D(50),o=D(4e3),l=D(4e3),c=()=>{const I=new Date().toDateString(),x=localStorage.getItem("energyLastDate"),U=localStorage.getItem("currentEnergy");if(x!==I)o.value=l.value,localStorage.setItem("energyLastDate",I),localStorage.setItem("currentEnergy",l.value.toString());else if(U){const F=parseInt(U)||0;o.value=Math.max(0,Math.min(F,l.value))}else o.value=l.value,localStorage.setItem("energyLastDate",I),localStorage.setItem("currentEnergy",l.value.toString())},u=()=>{const I=ht();I&&(s.value=I.gameData?.coins||0,i.value=I.gameData?.totalCoin||0,r.value=I.gameData?.catFragments||I.gameData?.catCount||50),c()};D(!1);const d=()=>{n.push("/settings")},p=()=>{n.push("/notification")},m=()=>{n.push("/shop")};let _=null,w=null;Rt(()=>{u(),_=setInterval(()=>{const I=localStorage.getItem("appLanguage")||"한국어";I!==e.value&&(e.value=I)},100),w=setInterval(()=>{u()},500),window.addEventListener("userDataUpdated",u)}),cr(()=>{_&&clearInterval(_),w&&clearInterval(w),window.removeEventListener("userDataUpdated",u)});const b=I=>I>=1e9?(I/1e9).toFixed(1).replace(/\.0$/,"")+"G":I>=1e6?(I/1e6).toFixed(1).replace(/\.0$/,"")+"M":I>=1e4?(I/1e3).toFixed(1).replace(/\.0$/,"")+"K":I.toLocaleString();return(I,x)=>(O(),L("header",null,[h("div",dE,[h("div",fE,[h("button",{class:"headerItem energyItem",onClick:m},[x[0]||(x[0]=h("img",{src:cE,alt:"에너지",class:"energyIcon"},null,-1)),h("span",pE,B(b(o.value))+" / "+B(b(l.value)),1)]),x[6]||(x[6]=h("div",{class:"divider"},null,-1)),h("button",{class:"headerItem clickableItem",onClick:m},[x[1]||(x[1]=h("img",{src:ym,alt:"P",class:"pointIcon"},null,-1)),h("span",gE,B(b(s.value)),1)]),x[7]||(x[7]=h("div",{class:"divider"},null,-1)),h("button",{class:"headerItem clickableItem",onClick:m},[x[2]||(x[2]=h("img",{src:Am,alt:"C",class:"coinIcon"},null,-1)),h("span",mE,B(b(i.value)),1)]),x[8]||(x[8]=h("div",{class:"divider"},null,-1)),h("button",{class:"headerItem clickableItem",onClick:m},[x[3]||(x[3]=h("img",{src:Im,alt:"고양이",class:"catIcon"},null,-1)),h("span",_E,B(r.value),1)]),x[9]||(x[9]=h("div",{class:"divider"},null,-1)),h("button",{class:"headerIconBtn notifi",onClick:p},[...x[4]||(x[4]=[h("img",{src:uE,alt:"알림",class:"icon-img"},null,-1)])]),x[10]||(x[10]=h("div",{class:"divider"},null,-1)),h("button",{class:"headerIconBtn menuBtn",onClick:d},[...x[5]||(x[5]=[h("img",{src:hE,alt:"설정",class:"icon-img"},null,-1)])])])])]))}},fn=Pt(vE,[["__scopeId","data-v-69190070"]]),yE="/tdl/assets/bottom001-BEtDIm8X.png",AE="/tdl/assets/bottom001_on-DT187QNm.png",IE="/tdl/assets/bottom002-DzQ3N6uP.png",wE="/tdl/assets/bottom002_on-C1N0vVp8.png",EE="/tdl/assets/bottom003-BvgU7nGk.png",TE="/tdl/assets/bottom003_on-Df8s6MrC.png",CE="/tdl/assets/bottom004-CWodmmKt.png",bE="/tdl/assets/bottom004_on-D8X_vvyV.png",SE="/tdl/assets/bottom005-CX2HIylp.png",RE="/tdl/assets/bottom005_on-DYZvET-x.png",PE={class:"footerCont"},kE={class:"footerBar"},DE=["onClick"],xE={class:"tabContent"},NE=["src","alt"],ME={class:"tabLabel"},OE={key:0,class:"activeIndicator"},VE={__name:"Footer",setup(t){const e=dn(),n=D("home"),s=D(localStorage.getItem("appLanguage")||"한국어"),i=Xe(()=>mm()),r=d=>{d.key==="appLanguage"&&(s.value=d.newValue||"한국어")},o=()=>{switch(e.currentRoute.value.path){case"/main":n.value="home";break;case"/exchange":n.value="exchange";break;case"/quest":n.value="quest";break;case"/inventory":n.value="inventory";break;case"/factory":n.value="factory";break;default:n.value="home"}};let l=null;Rt(()=>{o(),window.addEventListener("storage",r),l=setInterval(()=>{const d=localStorage.getItem("appLanguage")||"한국어";d!==s.value&&(s.value=d)},100)}),cr(()=>{window.removeEventListener("storage",r),l&&clearInterval(l)}),gs(()=>e.currentRoute.value.path,()=>{o()}),gs(s,()=>{});const c=Xe(()=>[{id:"home",img:yE,imgActive:AE,label:i.value.home},{id:"exchange",img:IE,imgActive:wE,label:i.value.exchange},{id:"quest",img:EE,imgActive:TE,label:i.value.quest},{id:"inventory",img:CE,imgActive:bE,label:i.value.inventory},{id:"factory",img:SE,imgActive:RE,label:i.value.factory}]),u=d=>{switch(n.value=d,d){case"home":e.push("/main");break;case"exchange":e.push("/exchange");break;case"quest":e.push("/quest");break;case"inventory":e.push("/inventory");break;case"factory":e.push("/factory");break}};return(d,p)=>(O(),L("footer",null,[h("div",PE,[p[0]||(p[0]=h("div",{class:"footerBackground"},null,-1)),h("div",kE,[(O(!0),L(Se,null,je(c.value,m=>(O(),L("div",{key:m.id,class:Pe(["tabItem",{active:n.value===m.id}]),onClick:_=>u(m.id)},[h("div",xE,[h("img",{src:n.value===m.id?m.imgActive:m.img,alt:m.label,class:"tabIcon"},null,8,NE),h("span",ME,B(m.label),1)]),n.value===m.id?(O(),L("div",OE)):he("",!0)],10,DE))),128))])])]))}},pn=Pt(VE,[["__scopeId","data-v-5284f664"]]),LE={class:"mainScreen"},BE={class:"mainContent"},FE={key:0,class:"mainMenuNew"},UE={class:"totalStats"},$E={class:"totalPoint"},HE={class:"statValue"},jE={class:"statNumber"},GE={class:"totalCoin"},qE={class:"statValue"},QE={class:"statNumber"},WE={class:"gameModeGrid"},zE={class:"modeLevel"},KE={class:"modeLevel"},YE={class:"modeLevel"},JE={class:"modeLevel"},XE={key:1,class:"miningMode"},ZE={class:"pageHeader"},e1={class:"totalPointsDisplay"},t1={class:"miningButtonContainer"},n1={key:1,class:"completeMessageContainer"},s1={class:"rewardInfo"},i1={class:"rewardItem"},r1={key:0,class:"rewardItem"},o1={class:"energySection"},a1={class:"energyInfo"},l1={class:"energyText"},c1={class:"energyBar"},u1={class:"miningCatsSection"},h1={class:"catsListScroll"},d1=["onClick"],f1={key:0,class:"catLevel"},p1={key:1,class:"catImage"},g1=["src"],m1={key:2,class:"catStars"},_1={key:3,class:"emptySlotContent"},v1={key:2,class:"miningMode"},y1={class:"pageHeader"},A1={class:"totalPointsDisplay"},I1={class:"miningButtonContainer"},w1={key:1,class:"completeMessageContainer"},E1={class:"rewardInfo"},T1={class:"rewardItem"},C1={key:0,class:"rewardItem"},b1={class:"energySection"},S1={class:"energyInfo"},R1={class:"energyText"},P1={class:"energyBar"},k1={class:"miningCatsSection"},D1={class:"catsListScroll"},x1=["onClick"],N1={key:0,class:"catLevel"},M1={key:1,class:"catImage"},O1=["src"],V1={key:2,class:"catStars"},L1={key:3,class:"emptySlotContent"},B1={key:3,class:"miningMode"},F1={class:"pageHeader"},U1={class:"totalPointsDisplay"},$1={class:"miningButtonContainer"},H1={key:1,class:"completeMessageContainer"},j1={class:"rewardInfo"},G1={class:"rewardItem"},q1={key:0,class:"rewardItem"},Q1={class:"energySection"},W1={class:"energyInfo"},z1={class:"energyText"},K1={class:"energyBar"},Y1={class:"miningCatsSection"},J1={class:"catsListScroll"},X1=["onClick"],Z1={key:0,class:"catLevel"},eT={key:1,class:"catImage"},tT=["src"],nT={key:2,class:"catStars"},sT={key:3,class:"emptySlotContent"},iT={key:4,class:"miningMode"},rT={class:"pageHeader"},oT={class:"totalPointsDisplay"},aT={class:"miningButtonContainer"},lT={key:1,class:"completeMessageContainer"},cT={class:"rewardInfo"},uT={class:"rewardItem"},hT={key:0,class:"rewardItem"},dT={class:"energySection"},fT={class:"energyInfo"},pT={class:"energyText"},gT={class:"energyBar"},mT={class:"miningCatsSection"},_T={class:"catsListScroll"},vT=["onClick"],yT={key:0,class:"catLevel"},AT={key:1,class:"catImage"},IT=["src"],wT={key:2,class:"catStars"},ET={key:3,class:"emptySlotContent"},TT={key:0,class:"speechBubbles"},CT={key:1,class:"catEmojis"},bT=["src","onError"],ST={class:"catSelectPopupBody"},RT={key:0,class:"removeCatSection"},PT={class:"availableCatsGrid"},kT=["onClick"],DT={class:"availableCatImage"},xT=["src"],NT={class:"availableCatInfo"},MT={class:"availableCatName"},OT={class:"availableCatLevel"},VT={class:"availableCatStars"},LT={__name:"MainScreen",setup(t){const e=G=>G>=1e9?(G/1e9).toFixed(1).replace(/\.0$/,"")+"B":G>=1e6?(G/1e6).toFixed(1).replace(/\.0$/,"")+"M":G>=1e4?(G/1e3).toFixed(1).replace(/\.0$/,"")+"K":G.toLocaleString(),n=dn(),s=D(null),i=D("main"),r=D(0),o=D(0),l=D(0),c=D(50),u=D(50),d=D([]),p=D([]),m=D(null),_=D(0),w=D(0),b=D(1),I=D(!1),x=D(!0),U=D({points:0,fragments:0}),F=D(0),j=D(0),se=D(1),Ie=D(!1),S=D(!0),A=D({points:0,fragments:0}),T=D(0),P=D(0),R=D(1),N=D(!1),E=D(!0),st=D({points:0,fragments:0}),vt=D(0),it=D(0),Ce=D(1),be=D(!1),kt=D(!0),Kt=D({points:0,fragments:0}),Lt=G=>Math.pow(2,G-1),rt=G=>{i.value=G,_.value=0,I.value=!1,x.value=!0,F.value=0,Ie.value=!1,S.value=!0,T.value=0,N.value=!1,E.value=!0,vt.value=0,be.value=!1,kt.value=!0},Cn=()=>{n.currentRoute.value.path==="/main"&&(i.value="main")};Rt(()=>{s.value=ht(),s.value&&(o.value=s.value.gameData?.coins||0,l.value=s.value.gameData?.totalCoin||0,r.value=o.value,u.value=s.value.gameData?.catFragments||50,b.value=s.value.gameData?.miningLevel||1,w.value=s.value.gameData?.miningTotalClicks||0,R.value=s.value.gameData?.huntingLevel||1,P.value=s.value.gameData?.huntingTotalClicks||0,se.value=s.value.gameData?.explorationLevel||1,j.value=s.value.gameData?.explorationTotalClicks||0,Ce.value=s.value.gameData?.productionLevel||1,it.value=s.value.gameData?.productionTotalClicks||0,xe.value=s.value.gameData?.planetLevel||1,te.value=s.value.gameData?.planetEnergy||0,s.value.gameData?.miningCats&&(Array.isArray(s.value.gameData.miningCats)&&s.value.gameData.miningCats.length===0?ee.value=[null,null,null,null,null,null]:ee.value=s.value.gameData.miningCats),s.value.gameData?.huntingCats&&(Array.isArray(s.value.gameData.huntingCats)&&s.value.gameData.huntingCats.length===0?$e.value=[null,null,null,null,null,null]:$e.value=s.value.gameData.huntingCats),s.value.gameData?.explorationCats&&(Array.isArray(s.value.gameData.explorationCats)&&s.value.gameData.explorationCats.length===0?He.value=[null,null,null,null,null,null]:He.value=s.value.gameData.explorationCats),s.value.gameData?.productionCats&&(Array.isArray(s.value.gameData.productionCats)&&s.value.gameData.productionCats.length===0?qe.value=[null,null,null,null,null,null]:qe.value=s.value.gameData.productionCats)),C(),n.afterEach(Cn);try{m.value=new Audio,m.value.src=new URL("/tdl/assets/clickbgm-BvbCQtA-.mp3",import.meta.url).href,m.value.volume=.3}catch{console.log("클릭 사운드 파일을 찾을 수 없습니다.")}const G=()=>{!gn()&&m.value&&(m.value.pause(),m.value.currentTime=0)};window.addEventListener("soundSettingChanged",G),Fe("mining"),Fe("hunting"),Fe("exploration"),Fe("production"),cr(()=>{n.afterEach(Cn),ei(),window.removeEventListener("soundSettingChanged",G)})});const gn=()=>{const G=localStorage.getItem("soundEnabled");return G!==null?G==="true":!0},Yt=G=>{if(m.value&&gn()&&(m.value.currentTime=0,m.value.play().catch(()=>{})),ot.value<ae.value){alert("에너지가 부족합니다!");return}if(M()){if(G==="mining"){if(_.value++,w.value++,w.value>=b.value*1e3){b.value++;const k={id:Date.now(),text:`채굴 레벨업! Lv.${b.value}`,x:Math.random()*(Math.min(window.innerWidth||500,500)-220-40)+20,y:Math.random()*(window.innerHeight||500)+100};d.value.push(k),setTimeout(()=>{const H=d.value.findIndex(ie=>ie.id===k.id);H>-1&&d.value.splice(H,1)},3e3),s.value&&Mt(s.value.id,{miningLevel:b.value,miningTotalClicks:w.value})}if(_.value>=10){const ie=100*Lt(b.value);r.value+=ie,o.value=r.value,_.value=0,I.value=!0,x.value=!1,y();const le=Math.random();let re=0;if(le<.3?re=1:le<.4&&(re=2),U.value={points:ie,fragments:re},re>0){u.value+=re;for(let Me=0;Me<re;Me++){const At=Math.floor(Math.random()*6)+1,yn=Math.min(window.innerWidth||500,500),Bt=window.innerHeight||800,lt=60,ct=30,Je={id:Date.now()+Me,x:Math.random()*(yn-lt-ct*2)+ct,y:Math.random()*(Bt-lt-ct*2-200)+100,imageId:At};p.value.push(Je),setTimeout(()=>{const Dt=p.value.findIndex(an=>an.id===Je.id);Dt>-1&&p.value.splice(Dt,1)},2e3)}}s.value&&Mt(s.value.id,{coins:r.value,catFragments:u.value,miningTotalClicks:w.value,miningLevel:b.value});const De=Math.min(window.innerWidth||500,500),Be=window.innerHeight||800,at=220,on=re>0?80:60,Ze=20;let Ht=`채굴 완료!
${ie.toLocaleString()}point 획득!`;re>0&&(Ht+=`
고양이 파편 ${re}개 획득!`);const jt={id:Date.now(),text:Ht,x:Math.random()*(De-at-Ze*2)+Ze,y:Math.random()*(Be-on-Ze*2-200)+100};d.value.push(jt),setTimeout(()=>{const Me=d.value.findIndex(At=>At.id===jt.id);Me>-1&&d.value.splice(Me,1)},3e3),setTimeout(()=>{I.value=!1,x.value=!0,U.value={points:0,fragments:0}},1500)}else{const k=Math.min(window.innerWidth||500,500),H=window.innerHeight||800,ie=220,le=60,re=20,De={id:Date.now(),text:`채굴 진행: ${_.value}/10`,x:Math.random()*(k-ie-re*2)+re,y:Math.random()*(H-le-re*2-200)+100};d.value.push(De),setTimeout(()=>{const Be=d.value.findIndex(at=>at.id===De.id);Be>-1&&d.value.splice(Be,1)},2e3)}}else if(G==="exploration"){if(F.value++,j.value++,j.value>=se.value*1e3){se.value++;const k={id:Date.now(),text:`탐험 레벨업! Lv.${se.value}`,x:Math.random()*(Math.min(window.innerWidth||500,500)-220-40)+20,y:Math.random()*(window.innerHeight||500)+100};d.value.push(k),setTimeout(()=>{const H=d.value.findIndex(ie=>ie.id===k.id);H>-1&&d.value.splice(H,1)},3e3),s.value&&Mt(s.value.id,{explorationLevel:se.value,explorationTotalClicks:j.value})}if(F.value>=10){const ie=100*Lt(se.value);r.value+=ie,o.value=r.value,F.value=0,Ie.value=!0,S.value=!1,y();const le=Math.random();let re=0;if(le<.3?re=1:le<.4&&(re=2),A.value={points:ie,fragments:re},re>0){u.value+=re;for(let Me=0;Me<re;Me++){const At=Math.floor(Math.random()*6)+1,yn=Math.min(window.innerWidth||500,500),Bt=window.innerHeight||800,lt=60,ct=30,Je={id:Date.now()+Me,x:Math.random()*(yn-lt-ct*2)+ct,y:Math.random()*(Bt-lt-ct*2-200)+100,imageId:At};p.value.push(Je),setTimeout(()=>{const Dt=p.value.findIndex(an=>an.id===Je.id);Dt>-1&&p.value.splice(Dt,1)},2e3)}}s.value&&Mt(s.value.id,{coins:r.value,catFragments:u.value,explorationTotalClicks:j.value,explorationLevel:se.value});const De=Math.min(window.innerWidth||500,500),Be=window.innerHeight||800,at=220,on=re>0?80:60,Ze=20;let Ht=`탐험 완료!
${ie.toLocaleString()}point 획득!`;re>0&&(Ht+=`
고양이 파편 ${re}개 획득!`);const jt={id:Date.now(),text:Ht,x:Math.random()*(De-at-Ze*2)+Ze,y:Math.random()*(Be-on-Ze*2-200)+100};d.value.push(jt),setTimeout(()=>{const Me=d.value.findIndex(At=>At.id===jt.id);Me>-1&&d.value.splice(Me,1)},3e3),setTimeout(()=>{Ie.value=!1,S.value=!0,A.value={points:0,fragments:0}},1500)}else{const k=Math.min(window.innerWidth||500,500),H=window.innerHeight||800,ie=220,le=60,re=20,De={id:Date.now(),text:`탐험 진행: ${F.value}/10`,x:Math.random()*(k-ie-re*2)+re,y:Math.random()*(H-le-re*2-200)+100};d.value.push(De),setTimeout(()=>{const Be=d.value.findIndex(at=>at.id===De.id);Be>-1&&d.value.splice(Be,1)},2e3)}}else if(G==="hunting"){if(T.value++,P.value++,P.value>=R.value*1e3){R.value++;const k={id:Date.now(),text:`사냥 레벨업! Lv.${R.value}`,x:Math.random()*(Math.min(window.innerWidth||500,500)-220-40)+20,y:Math.random()*(window.innerHeight||500)+100};d.value.push(k),setTimeout(()=>{const H=d.value.findIndex(ie=>ie.id===k.id);H>-1&&d.value.splice(H,1)},3e3),s.value&&Mt(s.value.id,{huntingLevel:R.value,huntingTotalClicks:P.value})}if(T.value>=10){const ie=100*Lt(R.value);r.value+=ie,o.value=r.value,T.value=0,N.value=!0,E.value=!1,y();const le=Math.random();let re=0;if(le<.3?re=1:le<.4&&(re=2),st.value={points:ie,fragments:re},re>0){u.value+=re;for(let Me=0;Me<re;Me++){const At=Math.floor(Math.random()*6)+1,yn=Math.min(window.innerWidth||500,500),Bt=window.innerHeight||800,lt=60,ct=30,Je={id:Date.now()+Me,x:Math.random()*(yn-lt-ct*2)+ct,y:Math.random()*(Bt-lt-ct*2-200)+100,imageId:At};p.value.push(Je),setTimeout(()=>{const Dt=p.value.findIndex(an=>an.id===Je.id);Dt>-1&&p.value.splice(Dt,1)},2e3)}}s.value&&Mt(s.value.id,{coins:r.value,catFragments:u.value,huntingTotalClicks:P.value,huntingLevel:R.value});const De=Math.min(window.innerWidth||500,500),Be=window.innerHeight||800,at=220,on=re>0?80:60,Ze=20;let Ht=`사냥 완료!
${ie.toLocaleString()}point 획득!`;re>0&&(Ht+=`
고양이 파편 ${re}개 획득!`);const jt={id:Date.now(),text:Ht,x:Math.random()*(De-at-Ze*2)+Ze,y:Math.random()*(Be-on-Ze*2-200)+100};d.value.push(jt),setTimeout(()=>{const Me=d.value.findIndex(At=>At.id===jt.id);Me>-1&&d.value.splice(Me,1)},3e3),setTimeout(()=>{N.value=!1,E.value=!0,st.value={points:0,fragments:0}},1500)}else{const k=Math.min(window.innerWidth||500,500),H=window.innerHeight||800,ie=220,le=60,re=20,De={id:Date.now(),text:`사냥 진행: ${T.value}/10`,x:Math.random()*(k-ie-re*2)+re,y:Math.random()*(H-le-re*2-200)+100};d.value.push(De),setTimeout(()=>{const Be=d.value.findIndex(at=>at.id===De.id);Be>-1&&d.value.splice(Be,1)},2e3)}}else if(G==="production"){if(vt.value++,it.value++,it.value>=Ce.value*1e3){Ce.value++;const k={id:Date.now(),text:`생산 레벨업! Lv.${Ce.value}`,x:Math.random()*(Math.min(window.innerWidth||500,500)-220-40)+20,y:Math.random()*(window.innerHeight||500)+100};d.value.push(k),setTimeout(()=>{const H=d.value.findIndex(ie=>ie.id===k.id);H>-1&&d.value.splice(H,1)},3e3),s.value&&Mt(s.value.id,{productionLevel:Ce.value,productionTotalClicks:it.value})}if(vt.value>=10){const ie=100*Lt(Ce.value);r.value+=ie,o.value=r.value,vt.value=0,be.value=!0,kt.value=!1,y();const le=Math.random();let re=0;if(le<.3?re=1:le<.4&&(re=2),Kt.value={points:ie,fragments:re},re>0){u.value+=re;for(let Me=0;Me<re;Me++){const At=Math.floor(Math.random()*6)+1,yn=Math.min(window.innerWidth||500,500),Bt=window.innerHeight||800,lt=60,ct=30,Je={id:Date.now()+Me,x:Math.random()*(yn-lt-ct*2)+ct,y:Math.random()*(Bt-lt-ct*2-200)+100,imageId:At};p.value.push(Je),setTimeout(()=>{const Dt=p.value.findIndex(an=>an.id===Je.id);Dt>-1&&p.value.splice(Dt,1)},2e3)}}s.value&&Mt(s.value.id,{coins:r.value,catFragments:u.value,productionTotalClicks:it.value,productionLevel:Ce.value});const De=Math.min(window.innerWidth||500,500),Be=window.innerHeight||800,at=220,on=re>0?80:60,Ze=20;let Ht=`생산 완료!
${ie.toLocaleString()}point 획득!`;re>0&&(Ht+=`
고양이 파편 ${re}개 획득!`);const jt={id:Date.now(),text:Ht,x:Math.random()*(De-at-Ze*2)+Ze,y:Math.random()*(Be-on-Ze*2-200)+100};d.value.push(jt),setTimeout(()=>{const Me=d.value.findIndex(At=>At.id===jt.id);Me>-1&&d.value.splice(Me,1)},3e3),setTimeout(()=>{be.value=!1,kt.value=!0,Kt.value={points:0,fragments:0}},1500)}else{const k=Math.min(window.innerWidth||500,500),H=window.innerHeight||800,ie=220,le=60,re=20,De={id:Date.now(),text:`생산 진행: ${vt.value}/10`,x:Math.random()*(k-ie-re*2)+re,y:Math.random()*(H-le-re*2-200)+100};d.value.push(De),setTimeout(()=>{const Be=d.value.findIndex(at=>at.id===De.id);Be>-1&&d.value.splice(Be,1)},2e3)}}}};D(0),D(!1),D({stone:0,iron:0,gold:0,diamond:0});const ot=D(4e3),q=D(4e3),ae=D(1),te=D(0),ue=D(2e3),xe=D(1),y=()=>{if(te.value=Math.min(ue.value,te.value+50),te.value>=ue.value){if(i.value==="mining"?b.value++:i.value==="hunting"?R.value++:i.value==="exploration"?se.value++:i.value==="production"&&Ce.value++,te.value=0,s.value){const G={planetEnergy:te.value,miningLevel:b.value,huntingLevel:R.value,explorationLevel:se.value,productionLevel:Ce.value};Mt(s.value.id,G)}}else s.value&&Mt(s.value.id,{planetEnergy:te.value})},C=()=>{const G=new Date().toDateString(),k=localStorage.getItem("energyLastDate"),H=localStorage.getItem("currentEnergy");if(k!==G)ot.value=q.value,localStorage.setItem("energyLastDate",G),localStorage.setItem("currentEnergy",q.value.toString());else if(H){const ie=parseInt(H)||0;ot.value=Math.max(0,Math.min(ie,q.value))}else ot.value=q.value,localStorage.setItem("energyLastDate",G),localStorage.setItem("currentEnergy",q.value.toString())},M=(G=ae.value)=>ot.value>=G?(ot.value=Math.max(0,ot.value-G),localStorage.setItem("currentEnergy",ot.value.toString()),localStorage.setItem("energyLastDate",new Date().toDateString()),!0):!1,Q=G=>{try{return new URL(Object.assign({"../assets/img/cat1.png":hu,"../assets/img/cat10.png":du,"../assets/img/cat11.png":fu,"../assets/img/cat12.png":pu,"../assets/img/cat13.png":gu,"../assets/img/cat14.png":mu,"../assets/img/cat15.png":_u,"../assets/img/cat16.png":vu,"../assets/img/cat17.png":yu,"../assets/img/cat18.png":Au,"../assets/img/cat19.png":Iu,"../assets/img/cat2.png":wu,"../assets/img/cat20.png":Eu,"../assets/img/cat21.png":Tu,"../assets/img/cat22.png":Cu,"../assets/img/cat23.png":bu,"../assets/img/cat24.png":Su,"../assets/img/cat25.png":Ru,"../assets/img/cat26.png":Pu,"../assets/img/cat27.png":ku,"../assets/img/cat28.png":Du,"../assets/img/cat29.png":xu,"../assets/img/cat3.png":Nu,"../assets/img/cat30.png":Mu,"../assets/img/cat4.png":Ou,"../assets/img/cat5.png":Vu,"../assets/img/cat6.png":Lu,"../assets/img/cat7.png":Bu,"../assets/img/cat8.png":Fu,"../assets/img/cat9.png":Uu,"../assets/img/catProfile01.png":$u,"../assets/img/catProfile02.png":Hu,"../assets/img/cat_ico.png":ju})[`../assets/img/cat${G}.png`],import.meta.url).href}catch{return`/src/assets/img/cat${G}.png`}},K=G=>{try{return new URL(Object.assign({"../assets/img/tul1.png":sE,"../assets/img/tul2.png":iE,"../assets/img/tul3.png":rE,"../assets/img/tul5.png":oE,"../assets/img/tul6.png":aE})[`../assets/img/tul${G}.png`],import.meta.url).href}catch{return`/src/assets/img/tul${G}.png`}},W=G=>{const k=p.value.findIndex(H=>H.id===G);k>-1&&p.value.splice(k,1)},ee=D([null,null,null,null,null,null]),J=D(!1),z=D(-1),Z=D([]),ge=()=>{const G=new Set;return ee.value.forEach(k=>{k&&k.id&&G.add(k.id)}),$e.value.forEach(k=>{k&&k.id&&G.add(k.id)}),He.value.forEach(k=>{k&&k.id&&G.add(k.id)}),qe.value.forEach(k=>{k&&k.id&&G.add(k.id)}),G},oe=()=>{const G=ht();if(G){const k=G.gameData?.inventory||[],ie=[...[{id:1,name:"Robot",stars:1,level:1,imageId:1},{id:2,name:"Style",stars:1,level:1,imageId:2},{id:3,name:"Suit",stars:1,level:1,imageId:3},{id:4,name:"Tech",stars:1,level:1,imageId:4},{id:5,name:"Army",stars:1,level:1,imageId:5},{id:6,name:"Detective",stars:1,level:1,imageId:6},{id:7,name:"Scholar",stars:1,level:1,imageId:7},{id:8,name:"White",stars:1,level:1,imageId:8},{id:9,name:"Green",stars:1,level:1,imageId:9},{id:10,name:"Blue",stars:1,level:1,imageId:10},{id:11,name:"Red",stars:1,level:1,imageId:11},{id:12,name:"Shirt",stars:1,level:1,imageId:12},{id:13,name:"Ninja",stars:1,level:1,imageId:13},{id:14,name:"Knight",stars:1,level:1,imageId:14},{id:15,name:"Pirate",stars:1,level:1,imageId:15},{id:16,name:"Sailor",stars:1,level:1,imageId:16},{id:17,name:"Sport",stars:1,level:1,imageId:17},{id:18,name:"Cafe",stars:1,level:1,imageId:18},{id:19,name:"Chef",stars:1,level:1,imageId:19},{id:20,name:"Fisher",stars:1,level:1,imageId:20},{id:21,name:"Farmer",stars:1,level:1,imageId:21},{id:22,name:"Doctor",stars:1,level:1,imageId:22},{id:23,name:"Teacher",stars:1,level:1,imageId:23},{id:24,name:"Artist",stars:1,level:1,imageId:24}]];k.forEach(De=>{const Be=ie.findIndex(at=>at.id===De.id);Be>-1?ie[Be]={...ie[Be],...De}:ie.push(De)});const le=ge(),re=de();re&&re.id&&le.delete(re.id),Z.value=ie.filter(De=>!le.has(De.id))}},de=()=>{const G=Ye.value,k=z.value;if(k<0||k>=6)return null;let H=null;return G==="mining"?H=ee.value:G==="hunting"?H=$e.value:G==="exploration"?H=He.value:G==="production"&&(H=qe.value),H&&H[k]?H[k]:null},pe=(G,k,H)=>{Ye.value=k,oe(),z.value=G,J.value=!0},ke=G=>{if(z.value>=0&&z.value<6){const k={id:G.id,level:G.level||1,stars:G.stars||1,imageId:G.imageId||G.id,name:G.name};let H=[];Ye.value==="mining"?H=ee.value:Ye.value==="hunting"?H=$e.value:Ye.value==="exploration"?H=He.value:Ye.value==="production"&&(H=qe.value);const ie=H.findIndex((re,De)=>re&&re.id===G.id&&De!==z.value);if(ie!==-1){H[ie]=null;const re=Ye.value,De=`${re}_${ie}_${G.id}`;Et.value[re][De]&&delete Et.value[re][De]}Ye.value==="mining"?(ee.value[z.value]=k,Fe("mining")):Ye.value==="hunting"?($e.value[z.value]=k,Fe("hunting")):Ye.value==="exploration"?(He.value[z.value]=k,Fe("exploration")):Ye.value==="production"&&(qe.value[z.value]=k,Fe("production"));const le=ht();le&&Mt(le.id,{miningCats:ee.value,huntingCats:$e.value,explorationCats:He.value,productionCats:qe.value})}J.value=!1,z.value=-1,Ye.value="mining"},Ge=()=>{if(z.value>=0&&z.value<6){const G=Ye.value;let k=[];G==="mining"?k=ee.value:G==="hunting"?k=$e.value:G==="exploration"?k=He.value:G==="production"&&(k=qe.value);const H=k[z.value];if(G==="mining"?(ee.value[z.value]=null,Fe("mining")):G==="hunting"?($e.value[z.value]=null,Fe("hunting")):G==="exploration"?(He.value[z.value]=null,Fe("exploration")):G==="production"&&(qe.value[z.value]=null,Fe("production")),H&&H.id){const le=`${G}_${z.value}_${H.id}`;Et.value[G][le]&&delete Et.value[G][le]}const ie=ht();ie&&Mt(ie.id,{miningCats:ee.value,huntingCats:$e.value,explorationCats:He.value,productionCats:qe.value})}J.value=!1,z.value=-1,Ye.value="mining"},Ne=()=>{J.value=!1,z.value=-1,Ye.value="mining"},$e=D([null,null,null,null,null,null]),He=D([null,null,null,null,null,null]),qe=D([null,null,null,null,null,null]),Ye=D("mining"),wt=D({mining:null,hunting:null,exploration:null,production:null}),Et=D({mining:{},hunting:{},exploration:{},production:{}}),Fe=G=>{wt.value[G]&&(clearInterval(wt.value[G]),wt.value[G]=null);let k=[];G==="mining"?k=ee.value:G==="hunting"?k=$e.value:G==="exploration"?k=He.value:G==="production"&&(k=qe.value);const H=k.filter(ie=>ie!==null);H.length!==0&&(H.forEach((ie,le)=>{const re=`${G}_${le}_${ie.id}`;Et.value[G][re]||(Et.value[G][re]=0)}),wt.value[G]=setInterval(()=>{let ie=[];G==="mining"?ie=ee.value:G==="hunting"?ie=$e.value:G==="exploration"?ie=He.value:G==="production"&&(ie=qe.value);const le=ie.filter(at=>at!==null);if(le.length===0){yt(G);return}const De={mining:"채굴",hunting:"사냥",exploration:"탐험",production:"생산"}[G]||"작업";let Be=[];G==="mining"?Be=ee.value:G==="hunting"?Be=$e.value:G==="exploration"?Be=He.value:G==="production"&&(Be=qe.value),le.forEach(at=>{const on=Be.findIndex(lt=>lt&&lt.id===at.id);if(on===-1)return;const Ze=`${G}_${on}_${at.id}`;Et.value[G][Ze]||(Et.value[G][Ze]=0),Et.value[G][Ze]+=1;const Ht=Et.value[G][Ze],jt=Math.min(window.innerWidth||500,500),Me=window.innerHeight||800,At=220,yn=60,Bt=20;if(Ht>=10){r.value+=100,o.value=r.value,Et.value[G][Ze]=0,consumePlanetEnergy();const lt=Math.random();let ct=0;if(lt<.3?ct=1:lt<.4&&(ct=2),ct>0&&(u.value+=ct,i.value===G))for(let Je=0;Je<ct;Je++){const Dt=Math.floor(Math.random()*6)+1,an=60,ti=30,ki={id:Date.now()+Je+on*1e3,x:Math.random()*(jt-an-ti*2)+ti,y:Math.random()*(Me-an-ti*2-200)+100,imageId:Dt};p.value.push(ki),setTimeout(()=>{const _r=p.value.findIndex(Al=>Al.id===ki.id);_r>-1&&p.value.splice(_r,1)},2e3)}if(s.value&&Mt(s.value.id,{coins:r.value,catFragments:u.value}),i.value===G){const Je={id:Date.now()+on+at.id*1e4,text:`${De} 완료! 100원 획득!`,x:Math.random()*(jt-At-Bt*2)+Bt,y:Math.random()*(Me-yn-Bt*2-200)+100};d.value.push(Je),setTimeout(()=>{const Dt=d.value.findIndex(an=>an.id===Je.id);Dt>-1&&d.value.splice(Dt,1)},3e3)}}else if(i.value===G){const lt={id:Date.now()+on+at.id*1e3+Ht*100,text:`${De} 진행: ${Ht}/10`,x:Math.random()*(jt-At-Bt*2)+Bt,y:Math.random()*(Me-yn-Bt*2-200)+100};d.value.push(lt),setTimeout(()=>{const ct=d.value.findIndex(Je=>Je.id===lt.id);ct>-1&&d.value.splice(ct,1)},2e3)}})},1e3))},yt=G=>{wt.value[G]&&(clearInterval(wt.value[G]),wt.value[G]=null)},ei=()=>{Object.keys(wt.value).forEach(G=>{yt(G)})};return gs(r,G=>{o.value=G}),gs([ee,$e,He,qe],()=>{["mining","hunting","exploration","production"].forEach(k=>{let H=[];k==="mining"?H=ee.value:k==="hunting"?H=$e.value:k==="exploration"?H=He.value:k==="production"&&(H=qe.value);const ie=H.map((le,re)=>le?`${k}_${re}_${le.id}`:null).filter(le=>le!==null);Object.keys(Et.value[k]).forEach(le=>{ie.includes(le)||delete Et.value[k][le]})}),Fe("mining"),Fe("hunting"),Fe("exploration"),Fe("production")},{deep:!0}),D(0),D(!1),D([{name:"슬라임",level:1,hp:100,maxHp:100,exp:10,gold:5},{name:"고블린",level:2,hp:150,maxHp:150,exp:20,gold:10},{name:"오크",level:3,hp:200,maxHp:200,exp:35,gold:20}]),D(null),D({level:1,exp:0,maxExp:100,hp:100,maxHp:100,attack:20}),D(0),D(!1),D(null),D([{name:"신비한 숲",level:1,difficulty:"쉬움",rewards:["나무","열매","약초"],description:"평화로운 숲에서 기본 자원을 수집할 수 있습니다.",discovered:!0},{name:"고대 유적",level:2,difficulty:"보통",rewards:["고대 유물","마법석","보석"],description:"신비한 힘이 깃든 고대 유적지입니다.",discovered:!1},{name:"용의 동굴",level:3,difficulty:"어려움",rewards:["용의 비늘","마나 크리스탈","희귀 보석"],description:"위험하지만 귀중한 보물이 숨겨진 곳입니다.",discovered:!1}]),D({wood:0,fruit:0,herb:0,artifact:0,magicStone:0,gem:0,dragonScale:0,manaCrystal:0,rareGem:0}),D(0),D(!1),D(null),D({wood:10,stone:5,iron:3,gold:1,diamond:0,herb:8,fruit:12}),D([{id:"woodenSword",name:"나무 검",level:1,materials:{wood:5,stone:2},result:{woodenSword:1},time:30,description:"기본적인 나무 검입니다."},{id:"ironSword",name:"철 검",level:2,materials:{wood:3,iron:5,stone:3},result:{ironSword:1},time:60,description:"강력한 철 검입니다."},{id:"healthPotion",name:"체력 포션",level:1,materials:{herb:3,fruit:2},result:{healthPotion:1},time:20,description:"체력을 회복시켜주는 포션입니다."}]),D({woodenSword:0,ironSword:0,healthPotion:0}),(G,k)=>(O(),L("div",LE,[we(fn,{coinCount:r.value,currentEnergy:ot.value,maxEnergy:q.value,totalCoin:l.value,catCount:c.value},null,8,["coinCount","currentEnergy","maxEnergy","totalCoin","catCount"]),h("main",BE,[i.value==="main"?(O(),L("article",FE,[h("div",UE,[h("div",$E,[k[14]||(k[14]=h("div",{class:"statLabel"},"총 포인트",-1)),h("div",HE,[k[13]||(k[13]=h("div",{class:"iconCircle pointIcon"},[h("img",{src:lE,alt:"P"})],-1)),h("span",jE,B(e(o.value)),1)])]),k[17]||(k[17]=h("div",{class:"divider"},null,-1)),h("div",GE,[k[16]||(k[16]=h("div",{class:"statLabel"},"총코인",-1)),h("div",qE,[k[15]||(k[15]=h("div",{class:"iconCircle coinIcon"},[h("img",{src:vm,alt:"C"})],-1)),h("span",QE,B(e(l.value)),1)])])]),h("div",WE,[h("div",{class:"modeCard miningCard",onClick:k[0]||(k[0]=H=>rt("mining"))},[k[18]||(k[18]=h("div",{class:"mainmenuBtns"},null,-1)),k[19]||(k[19]=h("div",{class:"modeTitle"},"채굴",-1)),h("div",zE,"Level "+B(String(b.value).padStart(2,"0")),1)]),h("div",{class:"modeCard huntingCard",onClick:k[1]||(k[1]=H=>rt("hunting"))},[k[20]||(k[20]=h("div",{class:"mainmenuBtns"},null,-1)),k[21]||(k[21]=h("div",{class:"modeTitle"},"사냥",-1)),h("div",KE,"Level "+B(String(R.value).padStart(2,"0")),1)]),h("div",{class:"modeCard explorationCard",onClick:k[2]||(k[2]=H=>rt("exploration"))},[k[22]||(k[22]=h("div",{class:"mainmenuBtns"},null,-1)),k[23]||(k[23]=h("div",{class:"modeTitle"},"탐험",-1)),h("div",YE,"Level "+B(String(se.value).padStart(2,"0")),1)]),h("div",{class:"modeCard productionCard",onClick:k[3]||(k[3]=H=>rt("production"))},[k[24]||(k[24]=h("div",{class:"mainmenuBtns"},null,-1)),k[25]||(k[25]=h("div",{class:"modeTitle"},"생산",-1)),h("div",JE,"Level "+B(String(Ce.value).padStart(2,"0")),1)])])])):he("",!0),i.value==="mining"?(O(),L("div",XE,[h("div",ZE,[h("button",{class:"backBtn",onClick:k[4]||(k[4]=H=>rt("main"))},"← 뒤로")]),h("div",e1,B(e(o.value)),1),h("div",t1,[x.value&&!I.value?(O(),L("button",{key:0,onClick:k[5]||(k[5]=H=>Yt("mining")),class:Pe(["clickerBtn miningBtn",{"mining-active":_.value>0}])},null,2)):he("",!0),I.value?(O(),L("div",n1,[k[26]||(k[26]=h("div",{class:"completeMessageText"},"채굴 완료!",-1)),h("div",s1,[h("div",i1,B(U.value.points.toLocaleString())+"point 획득!",1),U.value.fragments>0?(O(),L("div",r1,"고양이 파편 "+B(U.value.fragments)+"개 획득!",1)):he("",!0)])])):he("",!0)]),h("div",o1,[h("div",a1,[k[27]||(k[27]=h("span",{class:"energyIcon"},"⚡",-1)),h("span",l1,B(te.value.toLocaleString())+"/"+B(ue.value.toLocaleString()),1)]),h("div",c1,[h("div",{class:"energyFill",style:Ct({width:te.value/ue.value*100+"%"})},null,4)])]),h("div",u1,[k[30]||(k[30]=h("div",{class:"catsListLabel"},"채굴 냥이 목록",-1)),h("div",h1,[(O(!0),L(Se,null,je(ee.value,(H,ie)=>(O(),L("div",{key:ie,class:Pe(["catCard",{emptySlot:!H,working:H&&i.value==="mining"}]),onClick:le=>pe(ie,"mining")},[H?(O(),L("div",f1,"Lv "+B(String(H.level).padStart(2,"0")),1)):he("",!0),H?(O(),L("div",p1,[h("img",{src:Q(H.imageId),alt:"고양이"},null,8,g1)])):he("",!0),H?(O(),L("div",m1,[(O(!0),L(Se,null,je(H.stars,le=>(O(),L("span",{key:le,class:"star"},[...k[28]||(k[28]=[h("img",{src:"",alt:""},null,-1)])]))),128))])):he("",!0),H?he("",!0):(O(),L("div",_1,[...k[29]||(k[29]=[h("span",{class:"emptySlotText"},"+",-1)])]))],10,d1))),128))])])])):he("",!0),i.value==="hunting"?(O(),L("div",v1,[h("div",y1,[h("button",{class:"backBtn",onClick:k[6]||(k[6]=H=>rt("main"))},"← 뒤로")]),h("div",A1,B(e(o.value)),1),h("div",I1,[E.value&&!N.value?(O(),L("button",{key:0,onClick:k[7]||(k[7]=H=>Yt("hunting")),class:Pe(["clickerBtn huntingBtn",{"hunting-active":T.value>0}])},null,2)):he("",!0),N.value?(O(),L("div",w1,[k[31]||(k[31]=h("div",{class:"completeMessageText"},"사냥 완료!",-1)),h("div",E1,[h("div",T1,B(st.value.points.toLocaleString())+"point 획득!",1),st.value.fragments>0?(O(),L("div",C1,"고양이 파편 "+B(st.value.fragments)+"개 획득!",1)):he("",!0)])])):he("",!0)]),h("div",b1,[h("div",S1,[k[32]||(k[32]=h("span",{class:"energyIcon"},"⚡",-1)),h("span",R1,B(te.value.toLocaleString())+"/"+B(ue.value.toLocaleString()),1)]),h("div",P1,[h("div",{class:"energyFill",style:Ct({width:te.value/ue.value*100+"%"})},null,4)])]),h("div",k1,[k[35]||(k[35]=h("div",{class:"catsListLabel"},"사냥 냥이 목록",-1)),h("div",D1,[(O(!0),L(Se,null,je($e.value,(H,ie)=>(O(),L("div",{key:ie,class:Pe(["catCard",{emptySlot:!H,working:H&&i.value==="hunting"}]),onClick:le=>pe(ie,"hunting")},[H?(O(),L("div",N1,"Lv "+B(String(H.level).padStart(2,"0")),1)):he("",!0),H?(O(),L("div",M1,[h("img",{src:Q(H.imageId),alt:"고양이"},null,8,O1)])):he("",!0),H?(O(),L("div",V1,[(O(!0),L(Se,null,je(H.stars,le=>(O(),L("span",{key:le,class:"star"},[...k[33]||(k[33]=[h("img",{src:"",alt:""},null,-1)])]))),128))])):he("",!0),H?he("",!0):(O(),L("div",L1,[...k[34]||(k[34]=[h("span",{class:"emptySlotText"},"+",-1)])]))],10,x1))),128))])])])):he("",!0),i.value==="exploration"?(O(),L("div",B1,[h("div",F1,[h("button",{class:"backBtn",onClick:k[8]||(k[8]=H=>rt("main"))},"← 뒤로")]),h("div",U1,B(e(o.value)),1),h("div",$1,[S.value&&!Ie.value?(O(),L("button",{key:0,onClick:k[9]||(k[9]=H=>Yt("exploration")),class:Pe(["clickerBtn explorationBtn",{"exploration-active":F.value>0}])},null,2)):he("",!0),Ie.value?(O(),L("div",H1,[k[36]||(k[36]=h("div",{class:"completeMessageText"},"탐험 완료!",-1)),h("div",j1,[h("div",G1,B(A.value.points.toLocaleString())+"point 획득!",1),A.value.fragments>0?(O(),L("div",q1,"고양이 파편 "+B(A.value.fragments)+"개 획득!",1)):he("",!0)])])):he("",!0)]),h("div",Q1,[h("div",W1,[k[37]||(k[37]=h("span",{class:"energyIcon"},"⚡",-1)),h("span",z1,B(te.value.toLocaleString())+"/"+B(ue.value.toLocaleString()),1)]),h("div",K1,[h("div",{class:"energyFill",style:Ct({width:te.value/ue.value*100+"%"})},null,4)])]),h("div",Y1,[k[40]||(k[40]=h("div",{class:"catsListLabel"},"탐험 냥이 목록",-1)),h("div",J1,[(O(!0),L(Se,null,je(He.value,(H,ie)=>(O(),L("div",{key:ie,class:Pe(["catCard",{emptySlot:!H,working:H&&i.value==="exploration"}]),onClick:le=>pe(ie,"exploration")},[H?(O(),L("div",Z1,"Lv "+B(String(H.level).padStart(2,"0")),1)):he("",!0),H?(O(),L("div",eT,[h("img",{src:Q(H.imageId),alt:"고양이"},null,8,tT)])):he("",!0),H?(O(),L("div",nT,[(O(!0),L(Se,null,je(H.stars,le=>(O(),L("span",{key:le,class:"star"},[...k[38]||(k[38]=[h("img",{src:"",alt:""},null,-1)])]))),128))])):he("",!0),H?he("",!0):(O(),L("div",sT,[...k[39]||(k[39]=[h("span",{class:"emptySlotText"},"+",-1)])]))],10,X1))),128))])])])):he("",!0),i.value==="production"?(O(),L("div",iT,[h("div",rT,[h("button",{class:"backBtn",onClick:k[10]||(k[10]=H=>rt("main"))},"← 뒤로")]),h("div",oT,B(e(o.value)),1),h("div",aT,[kt.value&&!be.value?(O(),L("button",{key:0,onClick:k[11]||(k[11]=H=>Yt("production")),class:Pe(["clickerBtn productionBtn",{"production-active":vt.value>0}])},null,2)):he("",!0),be.value?(O(),L("div",lT,[k[41]||(k[41]=h("div",{class:"completeMessageText"},"생산 완료!",-1)),h("div",cT,[h("div",uT,B(Kt.value.points.toLocaleString())+"point 획득!",1),Kt.value.fragments>0?(O(),L("div",hT,"고양이 파편 "+B(Kt.value.fragments)+"개 획득!",1)):he("",!0)])])):he("",!0)]),h("div",dT,[h("div",fT,[k[42]||(k[42]=h("span",{class:"energyIcon"},"⚡",-1)),h("span",pT,B(te.value.toLocaleString())+"/"+B(ue.value.toLocaleString()),1)]),h("div",gT,[h("div",{class:"energyFill",style:Ct({width:te.value/ue.value*100+"%"})},null,4)])]),h("div",mT,[k[45]||(k[45]=h("div",{class:"catsListLabel"},"생산 냥이 목록",-1)),h("div",_T,[(O(!0),L(Se,null,je(qe.value,(H,ie)=>(O(),L("div",{key:ie,class:Pe(["catCard",{emptySlot:!H,working:H&&i.value==="production"}]),onClick:le=>pe(ie,"production")},[H?(O(),L("div",yT,"Lv "+B(String(H.level).padStart(2,"0")),1)):he("",!0),H?(O(),L("div",AT,[h("img",{src:Q(H.imageId),alt:"고양이"},null,8,IT)])):he("",!0),H?(O(),L("div",wT,[(O(!0),L(Se,null,je(H.stars,le=>(O(),L("span",{key:le,class:"star"},[...k[43]||(k[43]=[h("img",{src:"",alt:""},null,-1)])]))),128))])):he("",!0),H?he("",!0):(O(),L("div",ET,[...k[44]||(k[44]=[h("span",{class:"emptySlotText"},"+",-1)])]))],10,vT))),128))])])])):he("",!0)]),we(pn),i.value!=="main"?(O(),L("div",TT,[(O(!0),L(Se,null,je(d.value,H=>(O(),L("div",{key:H.id,class:"speechBubble",style:Ct({left:H.x+"px",top:H.y+"px",transform:"translateX(-50%)"})},B(H.text),5))),128))])):he("",!0),i.value!=="main"?(O(),L("div",CT,[(O(!0),L(Se,null,je(p.value,H=>(O(),L("div",{key:H.id,class:"catEmoji",style:Ct({left:H.x+"px",top:H.y+"px"})},[h("img",{src:K(H.imageId),alt:"",class:"tulImage",onError:ie=>W(H.id)},null,40,bT)],4))),128))])):he("",!0),J.value?(O(),L("div",{key:2,class:"catSelectPopupOverlay",onClick:Ne},[h("div",{class:"catSelectPopupContent",onClick:k[12]||(k[12]=Gr(()=>{},["stop"]))},[h("div",{class:"catSelectPopupHeader"},[k[46]||(k[46]=h("h3",null,"고양이 선택",-1)),h("button",{class:"closePopupBtn",onClick:Ne},"×")]),h("div",ST,[de()?(O(),L("div",RT,[h("button",{class:"removeCatBtn",onClick:Ge}," 고양이 제거 ")])):he("",!0),h("div",PT,[(O(!0),L(Se,null,je(Z.value,H=>(O(),L("div",{key:H.id,class:"availableCatCard",onClick:ie=>ke(H)},[h("div",DT,[h("img",{src:Q(H.imageId||H.id),alt:"고양이"},null,8,xT)]),h("div",NT,[h("div",MT,B(H.name),1),h("div",OT,"Lv "+B(String(H.level||1).padStart(2,"0")),1),h("div",VT,[(O(!0),L(Se,null,je(H.stars||1,ie=>(O(),L("span",{key:ie,class:"star"},"★"))),128))])])],8,kT))),128))])])])])):he("",!0)]))}},BT=Pt(LT,[["__scopeId","data-v-a1ce1a95"]]),FT={class:"miningPage"},UT={class:"mainContent"},$T={class:"miningContainer"},HT={class:"pageHeader"},jT={class:"levelInfo"},GT={class:"miningProgress"},qT={class:"progressBar"},QT={class:"progressText"},WT=["disabled"],zT={key:0},KT={key:1},YT={class:"resources"},JT={class:"resourceList"},XT={class:"resourceItem"},ZT={class:"resourceItem"},eC={class:"resourceItem"},tC={class:"resourceItem"},nC={__name:"MiningPage",setup(t){const e=dn(),n=D(0);Rt(()=>{const c=ht();c&&(n.value=c.gameData?.coins||0)});const s=D(1),i=D(0),r=D(!1),o=D({stone:0,iron:0,gold:0,diamond:0}),l=()=>{if(r.value)return;r.value=!0,i.value=0;const c=setInterval(()=>{if(i.value+=10,i.value>=100){clearInterval(c),r.value=!1,i.value=0;const u=Math.random();u<.4?o.value.stone++:u<.7?o.value.iron++:u<.9?o.value.gold++:o.value.diamond++}},200)};return(c,u)=>(O(),L("div",FT,[we(fn,{coinCount:n.value},null,8,["coinCount"]),h("main",UT,[h("div",$T,[h("div",HT,[h("button",{class:"backBtn",onClick:u[0]||(u[0]=d=>Wt(e).push("/main"))},"← 뒤로"),u[1]||(u[1]=h("h2",null,"⛏️ 채굴",-1))]),h("div",jT,[h("span",null,"채굴 레벨: "+B(s.value),1)]),h("div",GT,[h("div",qT,[h("div",{class:"progressFill",style:Ct({width:i.value+"%"})},null,4)]),h("span",QT,B(i.value)+"%",1)]),h("button",{class:Pe(["miningBtn",{mining:r.value}]),onClick:l,disabled:r.value},[r.value?(O(),L("span",KT,"⛏️ 채굴 중...")):(O(),L("span",zT,"⛏️ 채굴 시작"))],10,WT),h("div",YT,[u[6]||(u[6]=h("h3",null,"보유 자원",-1)),h("div",JT,[h("div",XT,[u[2]||(u[2]=h("span",null,"🪨 돌",-1)),h("span",null,B(o.value.stone),1)]),h("div",ZT,[u[3]||(u[3]=h("span",null,"⚒️ 철",-1)),h("span",null,B(o.value.iron),1)]),h("div",eC,[u[4]||(u[4]=h("span",null,"🥇 금",-1)),h("span",null,B(o.value.gold),1)]),h("div",tC,[u[5]||(u[5]=h("span",null,"💎 다이아몬드",-1)),h("span",null,B(o.value.diamond),1)])])])])]),we(pn)]))}},sC=Pt(nC,[["__scopeId","data-v-17eb7d34"]]),iC={class:"huntingPage"},rC={class:"mainContent"},oC={class:"huntingContainer"},aC={class:"pageHeader"},lC={class:"playerStats"},cC={class:"statsGrid"},uC={class:"statItem"},hC={class:"statItem"},dC={class:"statItem"},fC={class:"statItem"},pC={class:"monsterSelection"},gC={class:"monsterList"},mC=["onClick"],_C={class:"monsterInfo"},vC={class:"monsterName"},yC={class:"monsterLevel"},AC={class:"monsterRewards"},IC={key:0,class:"currentMonster"},wC={class:"monsterHp"},EC={class:"hpBar"},TC={class:"hpText"},CC={class:"huntingProgress"},bC={class:"progressBar"},SC={class:"progressText"},RC=["disabled"],PC={key:0},kC={key:1},DC={__name:"HuntingPage",setup(t){const e=dn(),n=D(0);Rt(()=>{const d=ht();d&&(n.value=d.gameData?.coins||0)}),D(1);const s=D(0),i=D(!1),r=D([{name:"슬라임",level:1,hp:100,maxHp:100,exp:10,gold:5},{name:"고블린",level:2,hp:150,maxHp:150,exp:20,gold:10},{name:"오크",level:3,hp:200,maxHp:200,exp:35,gold:20}]),o=D(null),l=D({level:1,exp:0,maxExp:100,hp:100,maxHp:100,attack:20}),c=d=>{o.value={...d}},u=()=>{if(!o.value||i.value)return;i.value=!0,s.value=0;const d=setInterval(()=>{const p=Math.floor(Math.random()*l.value.attack)+10;o.value.hp-=p,o.value.hp<=0?(clearInterval(d),i.value=!1,s.value=100,l.value.exp+=o.value.exp,l.value.hp=l.value.maxHp,l.value.exp>=l.value.maxExp&&(l.value.level++,l.value.exp=0,l.value.maxExp=Math.floor(l.value.maxExp*1.5),l.value.attack+=5,l.value.maxHp+=20,l.value.hp=l.value.maxHp),setTimeout(()=>{o.value=null,s.value=0},2e3)):s.value=(o.value.maxHp-o.value.hp)/o.value.maxHp*100},500)};return(d,p)=>(O(),L("div",iC,[we(fn,{coinCount:n.value},null,8,["coinCount"]),h("main",rC,[h("div",oC,[h("div",aC,[h("button",{class:"backBtn",onClick:p[0]||(p[0]=m=>Wt(e).push("/main"))},"← 뒤로"),p[1]||(p[1]=h("h2",null,"⚔️ 사냥",-1))]),h("div",lC,[p[6]||(p[6]=h("h3",null,"플레이어 정보",-1)),h("div",cC,[h("div",uC,[p[2]||(p[2]=h("span",null,"레벨",-1)),h("span",null,B(l.value.level),1)]),h("div",hC,[p[3]||(p[3]=h("span",null,"체력",-1)),h("span",null,B(l.value.hp)+"/"+B(l.value.maxHp),1)]),h("div",dC,[p[4]||(p[4]=h("span",null,"공격력",-1)),h("span",null,B(l.value.attack),1)]),h("div",fC,[p[5]||(p[5]=h("span",null,"경험치",-1)),h("span",null,B(l.value.exp)+"/"+B(l.value.maxExp),1)])])]),h("div",pC,[p[7]||(p[7]=h("h3",null,"몬스터 선택",-1)),h("div",gC,[(O(!0),L(Se,null,je(r.value,m=>(O(),L("div",{key:m.name,class:Pe(["monsterCard",{selected:o.value?.name===m.name}]),onClick:_=>c(m)},[h("div",_C,[h("span",vC,B(m.name),1),h("span",yC,"Lv."+B(m.level),1)]),h("div",AC,[h("span",null,"EXP: "+B(m.exp),1),h("span",null,"Gold: "+B(m.gold),1)])],10,mC))),128))])]),o.value?(O(),L("div",IC,[h("h3",null,B(o.value.name)+" (Lv."+B(o.value.level)+")",1),h("div",wC,[h("div",EC,[h("div",{class:"hpFill",style:Ct({width:o.value.hp/o.value.maxHp*100+"%"})},null,4)]),h("span",TC,B(o.value.hp)+"/"+B(o.value.maxHp),1)]),h("div",CC,[h("div",bC,[h("div",{class:"progressFill",style:Ct({width:s.value+"%"})},null,4)]),h("span",SC,B(Math.floor(s.value))+"%",1)]),h("button",{class:Pe(["huntingBtn",{hunting:i.value}]),onClick:u,disabled:i.value},[i.value?(O(),L("span",kC,"⚔️ 사냥 중...")):(O(),L("span",PC,"⚔️ 사냥 시작"))],10,RC)])):he("",!0)])]),we(pn)]))}},xC=Pt(DC,[["__scopeId","data-v-9c82efe6"]]),NC={class:"explorationPage"},MC={class:"mainContent"},OC={class:"explorationContainer"},VC={class:"pageHeader"},LC={class:"levelInfo"},BC={class:"locationSelection"},FC={class:"locationList"},UC=["onClick"],$C={class:"locationInfo"},HC={class:"locationHeader"},jC={class:"locationName"},GC={class:"locationLevel"},qC={class:"locationDifficulty"},QC={class:"locationDescription"},WC={class:"locationRewards"},zC={key:0,class:"undiscoveredOverlay"},KC={key:0,class:"currentExploration"},YC={class:"explorationProgress"},JC={class:"progressBar"},XC={class:"progressText"},ZC=["disabled"],eb={key:0},tb={key:1},nb={class:"explorationRewards"},sb={class:"rewardsGrid"},ib={class:"rewardIcon"},rb={class:"rewardAmount"},ob={__name:"ExplorationPage",setup(t){const e=dn(),n=D(0);Rt(()=>{const p=ht();p&&(n.value=p.gameData?.coins||0)});const s=D(1),i=D(0),r=D(!1),o=D(null);D([]);const l=D([{name:"신비한 숲",level:1,difficulty:"쉬움",rewards:["나무","열매","약초"],description:"평화로운 숲에서 기본 자원을 수집할 수 있습니다.",discovered:!0},{name:"고대 유적",level:2,difficulty:"보통",rewards:["고대 유물","마법석","보석"],description:"신비한 힘이 깃든 고대 유적지입니다.",discovered:!1},{name:"용의 동굴",level:3,difficulty:"어려움",rewards:["용의 비늘","마나 크리스탈","희귀 보석"],description:"위험하지만 귀중한 보물이 숨겨진 곳입니다.",discovered:!1},{name:"천공의 섬",level:4,difficulty:"매우 어려움",rewards:["천공석","신비한 에너지","전설의 아이템"],description:"구름 위에 떠있는 신비한 섬입니다.",discovered:!1}]),c=D({wood:0,fruit:0,herb:0,artifact:0,magicStone:0,gem:0,dragonScale:0,manaCrystal:0,rareGem:0,skyStone:0,mysteriousEnergy:0,legendaryItem:0}),u=p=>{p.discovered&&(o.value=p)},d=()=>{if(!o.value||r.value)return;r.value=!0,i.value=0;const p=setInterval(()=>{if(i.value+=5,i.value>=100){clearInterval(p),r.value=!1,i.value=0;const m=Math.floor(Math.random()*o.value.rewards.length),_=o.value.rewards[m],w={나무:"wood",열매:"fruit",약초:"herb","고대 유물":"artifact",마법석:"magicStone",보석:"gem","용의 비늘":"dragonScale","마나 크리스탈":"manaCrystal","희귀 보석":"rareGem",천공석:"skyStone","신비한 에너지":"mysteriousEnergy","전설의 아이템":"legendaryItem"};if(w[_]&&c.value[w[_]]++,Math.random()<.3){const b=l.value.find(I=>!I.discovered);b&&(b.discovered=!0)}s.value++,setTimeout(()=>{o.value=null},2e3)}},300)};return(p,m)=>(O(),L("div",NC,[we(fn,{coinCount:n.value},null,8,["coinCount"]),h("main",MC,[h("div",OC,[h("div",VC,[h("button",{class:"backBtn",onClick:m[0]||(m[0]=_=>Wt(e).push("/main"))},"← 뒤로"),m[1]||(m[1]=h("h2",null,"🗺️ 탐험",-1))]),h("div",LC,[h("span",null,"탐험 레벨: "+B(s.value),1)]),h("div",BC,[m[3]||(m[3]=h("h3",null,"탐험 지역",-1)),h("div",FC,[(O(!0),L(Se,null,je(l.value,_=>(O(),L("div",{key:_.name,class:Pe(["locationCard",{selected:o.value?.name===_.name,undiscovered:!_.discovered}]),onClick:w=>u(_)},[h("div",$C,[h("div",HC,[h("span",jC,B(_.name),1),h("span",GC,"Lv."+B(_.level),1)]),h("span",qC,B(_.difficulty),1),h("p",QC,B(_.description),1),h("div",WC,[(O(!0),L(Se,null,je(_.rewards,w=>(O(),L("span",{key:w,class:"rewardTag"},B(w),1))),128))])]),_.discovered?he("",!0):(O(),L("div",zC,[...m[2]||(m[2]=[h("span",null,"🔒 미발견",-1)])]))],10,UC))),128))])]),o.value?(O(),L("div",KC,[h("h3",null,B(o.value.name)+" 탐험 중",1),h("div",YC,[h("div",JC,[h("div",{class:"progressFill",style:Ct({width:i.value+"%"})},null,4)]),h("span",XC,B(i.value)+"%",1)]),h("button",{class:Pe(["explorationBtn",{exploring:r.value}]),onClick:d,disabled:r.value},[r.value?(O(),L("span",tb,"🗺️ 탐험 중...")):(O(),L("span",eb,"🗺️ 탐험 시작"))],10,ZC)])):he("",!0),h("div",nb,[m[4]||(m[4]=h("h3",null,"탐험 보상",-1)),h("div",sb,[(O(!0),L(Se,null,je(c.value,(_,w)=>ds((O(),L("div",{key:w,class:"rewardItem"},[h("span",ib,B(w==="wood"?"🪵":w==="fruit"?"🍎":w==="herb"?"🌿":w==="artifact"?"🏺":w==="magicStone"||w==="gem"?"💎":w==="dragonScale"?"🐉":w==="manaCrystal"?"🔮":w==="rareGem"?"💠":w==="skyStone"?"☁️":w==="mysteriousEnergy"?"✨":w==="legendaryItem"?"⭐":"🎁"),1),h("span",rb,B(_),1)])),[[em,_>0]])),128))])])])]),we(pn)]))}},ab=Pt(ob,[["__scopeId","data-v-f05b4431"]]),lb={class:"productionPage"},cb={class:"mainContent"},ub={class:"productionContainer"},hb={class:"pageHeader"},db={class:"levelInfo"},fb={class:"inventory"},pb={class:"inventoryGrid"},gb={class:"materialIcon"},mb={class:"materialName"},_b={class:"materialAmount"},vb={class:"recipes"},yb={class:"recipeList"},Ab=["onClick"],Ib={class:"recipeInfo"},wb={class:"recipeHeader"},Eb={class:"recipeName"},Tb={class:"recipeLevel"},Cb={class:"recipeDescription"},bb={class:"recipeMaterials"},Sb={class:"recipeTime"},Rb={key:0,class:"currentProduction"},Pb={class:"productionProgress"},kb={class:"progressBar"},Db={class:"progressText"},xb=["disabled"],Nb={key:0},Mb={key:1},Ob={class:"producedItems"},Vb={class:"itemsGrid"},Lb={class:"itemIcon"},Bb={class:"itemName"},Fb={class:"itemAmount"},Ub={__name:"ProductionPage",setup(t){const e=dn(),n=D(0);Rt(()=>{const _=ht();_&&(n.value=_.gameData?.coins||0)});const s=D(1),i=D(0),r=D(!1),o=D(null),l=D({wood:10,stone:5,iron:3,gold:1,diamond:0,herb:8,fruit:12}),c=D([{id:"woodenSword",name:"나무 검",level:1,materials:{wood:5,stone:2},result:{woodenSword:1},time:30,description:"기본적인 나무 검입니다."},{id:"ironSword",name:"철 검",level:2,materials:{wood:3,iron:5,stone:3},result:{ironSword:1},time:60,description:"강력한 철 검입니다."},{id:"goldenSword",name:"황금 검",level:3,materials:{iron:3,gold:8,diamond:1},result:{goldenSword:1},time:120,description:"매우 강력한 황금 검입니다."},{id:"healthPotion",name:"체력 포션",level:1,materials:{herb:3,fruit:2},result:{healthPotion:1},time:20,description:"체력을 회복시켜주는 포션입니다."},{id:"manaPotion",name:"마나 포션",level:2,materials:{herb:5,fruit:3,stone:1},result:{manaPotion:1},time:40,description:"마나를 회복시켜주는 포션입니다."},{id:"magicRing",name:"마법 반지",level:3,materials:{gold:5,diamond:2,herb:4},result:{magicRing:1},time:90,description:"마법력을 증폭시키는 반지입니다."}]),u=D({woodenSword:0,ironSword:0,goldenSword:0,healthPotion:0,manaPotion:0,magicRing:0}),d=_=>{Object.entries(_.materials).every(([b,I])=>l.value[b]>=I)&&_.level<=s.value&&(o.value=_)},p=()=>{if(!o.value||r.value)return;Object.entries(o.value.materials).forEach(([w,b])=>{l.value[w]-=b}),r.value=!0,i.value=0;const _=setInterval(()=>{i.value+=100/(o.value.time/.1),i.value>=100&&(clearInterval(_),r.value=!1,i.value=0,Object.entries(o.value.result).forEach(([w,b])=>{u.value[w]+=b}),Math.random()<.1&&s.value++,setTimeout(()=>{o.value=null},2e3))},100)},m=_=>Object.entries(_.materials).every(([b,I])=>l.value[b]>=I)&&_.level<=s.value;return(_,w)=>(O(),L("div",lb,[we(fn,{coinCount:n.value},null,8,["coinCount"]),h("main",cb,[h("div",ub,[h("div",hb,[h("button",{class:"backBtn",onClick:w[0]||(w[0]=b=>Wt(e).push("/main"))},"← 뒤로"),w[1]||(w[1]=h("h2",null,"🏭 생산",-1))]),h("div",db,[h("span",null,"생산 레벨: "+B(s.value),1)]),h("div",fb,[w[2]||(w[2]=h("h3",null,"재료 보유량",-1)),h("div",pb,[(O(!0),L(Se,null,je(l.value,(b,I)=>(O(),L("div",{key:I,class:"inventoryItem"},[h("span",gb,B(I==="wood"?"🪵":I==="stone"?"🪨":I==="iron"?"⚒️":I==="gold"?"🥇":I==="diamond"?"💎":I==="herb"?"🌿":I==="fruit"?"🍎":"📦"),1),h("span",mb,B(I),1),h("span",_b,B(b),1)]))),128))])]),h("div",vb,[w[3]||(w[3]=h("h3",null,"제작 레시피",-1)),h("div",yb,[(O(!0),L(Se,null,je(c.value,b=>(O(),L("div",{key:b.id,class:Pe(["recipeCard",{selected:o.value?.id===b.id,disabled:!m(b)}]),onClick:I=>d(b)},[h("div",Ib,[h("div",wb,[h("span",Eb,B(b.name),1),h("span",Tb,"Lv."+B(b.level),1)]),h("p",Cb,B(b.description),1),h("div",bb,[(O(!0),L(Se,null,je(b.materials,(I,x)=>(O(),L("span",{key:x,class:"materialTag"},B(x)+" x"+B(I),1))),128))]),h("div",Sb,[h("span",null,"⏱️ "+B(b.time)+"초",1)])])],10,Ab))),128))])]),o.value?(O(),L("div",Rb,[h("h3",null,B(o.value.name)+" 제작 중",1),h("div",Pb,[h("div",kb,[h("div",{class:"progressFill",style:Ct({width:i.value+"%"})},null,4)]),h("span",Db,B(Math.floor(i.value))+"%",1)]),h("button",{class:Pe(["productionBtn",{producing:r.value}]),onClick:p,disabled:r.value},[r.value?(O(),L("span",Mb,"🏭 제작 중...")):(O(),L("span",Nb,"🏭 제작 시작"))],10,xb)])):he("",!0),h("div",Ob,[w[4]||(w[4]=h("h3",null,"제작된 아이템",-1)),h("div",Vb,[(O(!0),L(Se,null,je(u.value,(b,I)=>ds((O(),L("div",{key:I,class:"itemCard"},[h("span",Lb,B(I==="woodenSword"?"🗡️":I==="ironSword"?"⚔️":I==="goldenSword"?"🏆":I==="healthPotion"?"🧪":I==="manaPotion"?"💊":I==="magicRing"?"💍":"📦"),1),h("span",Bb,B(I),1),h("span",Fb,B(b),1)])),[[em,b>0]])),128))])])])]),we(pn)]))}},$b=Pt(Ub,[["__scopeId","data-v-2344037c"]]),Hb={class:"exchangePage"},jb={class:"mainContent"},Gb={class:"tabs"},qb={class:"infoCard"},Qb={class:"infoRow"},Wb={class:"value"},zb={class:"infoRow"},Kb={class:"value"},Yb={class:"infoRow"},Jb={class:"value"},Xb={class:"inputCard"},Zb={class:"inputLabel"},eS={class:"inputWrapper"},tS={key:0,class:"resultInfo"},nS={class:"resultRow"},sS={class:"resultValue"},iS=["disabled"],gf=1e3,rS={__name:"ExchangePage",setup(t){const e=D(null),n=D(0),s=D(0),i=D("buy"),r=D(""),o=Xe(()=>{if(!r.value)return 0;const u=parseFloat(r.value)||0;return Math.floor(u*gf)}),l=()=>{const u=ht();u&&(e.value=u,n.value=u.gameData?.coins||0,s.value=u.gameData?.totalCoin||0)},c=()=>{if(!e.value){alert("로그인이 필요합니다.");return}if(!r.value||parseFloat(r.value)<=0){alert("코인 수량을 입력해주세요.");return}const u=parseFloat(r.value),d=u;if(i.value==="buy"){const p=o.value;if(n.value<p){alert(`포인트가 부족합니다.
필요: ${p.toLocaleString()} Point
보유: ${n.value.toLocaleString()} Point`);return}const m=n.value-p,_=s.value+d;Ia(e.value.id,m,_)?(n.value=m,s.value=_,l(),window.dispatchEvent(new CustomEvent("userDataUpdated")),alert(`구매 완료!
${u} Coin 구매
사용한 Point: ${p.toLocaleString()}`),r.value=""):alert("거래 실패. 다시 시도해주세요.")}else{if(s.value<d){alert(`코인이 부족합니다.
필요: ${u} Coin
보유: ${s.value.toLocaleString()} Coin`);return}const p=o.value,m=n.value+p,_=s.value-d;Ia(e.value.id,m,_)?(n.value=m,s.value=_,l(),window.dispatchEvent(new CustomEvent("userDataUpdated")),alert(`판매 완료!
${u} Coin 판매
받은 Point: ${p.toLocaleString()}`),r.value=""):alert("거래 실패. 다시 시도해주세요.")}};return gs(i,()=>{r.value=""}),Rt(()=>{l()}),(u,d)=>(O(),L("div",Hb,[we(fn,{coinCount:n.value},null,8,["coinCount"]),h("main",jb,[h("div",Gb,[h("button",{class:Pe(["tab",{active:i.value==="buy"}]),onClick:d[0]||(d[0]=p=>i.value="buy")}," Coin 구매 ",2),h("button",{class:Pe(["tab",{active:i.value==="sell"}]),onClick:d[1]||(d[1]=p=>i.value="sell")}," Coin 판매 ",2)]),h("div",qb,[h("div",Qb,[d[3]||(d[3]=h("span",null,"보유 포인트",-1)),h("span",Wb,B(n.value.toLocaleString())+" P",1)]),h("div",zb,[d[4]||(d[4]=h("span",null,"보유 코인",-1)),h("span",Kb,B(s.value.toLocaleString())+" C",1)]),h("div",Yb,[d[5]||(d[5]=h("span",null,"거래가",-1)),h("span",Jb,"1 Coin = "+B(gf.toLocaleString())+" Point",1)])]),h("div",Xb,[h("label",Zb,B(i.value==="buy"?"구매할 코인 수량":"판매할 코인 수량"),1),h("div",eS,[ds(h("input",{type:"number","onUpdate:modelValue":d[2]||(d[2]=p=>r.value=p),placeholder:"예: 1",class:"amountInput",step:"0.01",min:"0"},null,512),[[pi,r.value]]),d[6]||(d[6]=h("span",{class:"unit"},"Coin",-1))]),r.value&&parseFloat(r.value)>0?(O(),L("div",tS,[h("div",nS,[h("span",null,B(i.value==="buy"?"필요 포인트":"받을 포인트"),1),h("span",sS,B(o.value.toLocaleString())+" P",1)])])):he("",!0)]),h("button",{class:"submitBtn",onClick:c,disabled:!r.value||parseFloat(r.value)<=0},B(i.value==="buy"?"구매하기":"판매하기"),9,iS)]),we(pn)]))}},oS=Pt(rS,[["__scopeId","data-v-212c7d26"]]),aS={class:"questPage"},lS={class:"mainContent"},cS={class:"filterTabs"},uS={class:"mainTabs"},hS={class:"questList"},dS={class:"questContent"},fS={class:"questInfo"},pS={class:"questTitle"},gS={class:"questDescription"},mS=["onClick"],_S={key:1,class:"completedBadge"},vS={key:2,class:"progressBar"},yS={class:"progressText"},AS={__name:"QuestPage",setup(t){const e=D(0),n=D("inProgress"),s=D("daily"),i=()=>new Date().toDateString(),r=()=>{const p=localStorage.getItem("questLastDate"),m=i();return p!==m?(localStorage.setItem("questLastDate",m),localStorage.removeItem("rewardedQuests"),!0):!1},o=()=>{const p=localStorage.getItem("rewardedQuests");return p?JSON.parse(p):[]},l=p=>{localStorage.setItem("rewardedQuests",JSON.stringify(p)),localStorage.setItem("questLastDate",i())},c=D([{id:1,title:"일일 채굴 10회",description:"오늘 하루 채굴을 10회 완료하세요",completed:!0,rewardReceived:!1,progress:10,total:10,type:"daily"},{id:2,title:"일일 사냥 5회",description:"몬스터를 5마리 처치하세요",completed:!0,rewardReceived:!1,progress:5,total:5,type:"daily"},{id:3,title:"일일 탐험 1회",description:"탐험 활동을 1회 완료하세요",completed:!1,rewardReceived:!1,progress:0,total:1,type:"daily"},{id:4,title:"일일 생산 3개",description:"아이템을 3개 이상 생산하세요",completed:!1,rewardReceived:!1,progress:1,total:3,type:"daily"},{id:5,title:"일일 코인 1,000 획득",description:"코인을 1,000개 이상 획득하세요",completed:!1,rewardReceived:!1,progress:650,total:1e3,type:"daily"},{id:6,title:"일일 레벨업 1회",description:"레벨을 1레벨 이상 올리세요",completed:!1,rewardReceived:!1,progress:.6,total:1,type:"daily"},{id:7,title:"일일 데일리 체크",description:"게임에 접속하여 일일 퀘스트를 확인하세요",completed:!0,rewardReceived:!1,progress:1,total:1,type:"daily"},{id:8,title:"일일 랜덤 상자 수집",description:"랜덤 상자를 2개 이상 수집하세요",completed:!1,rewardReceived:!1,progress:1,total:2,type:"daily"},{id:9,title:"주간 퀘스트: 채굴 마스터",description:"일주일간 채굴을 50회 완료하세요",completed:!1,rewardReceived:!1,progress:23,total:50,type:"weekly"},{id:10,title:"주간 퀘스트: 사냥꾼",description:"일주일 동안 몬스터를 100마리 처치하세요",completed:!1,rewardReceived:!1,progress:45,total:100,type:"weekly"},{id:11,title:"주간 퀘스트: 탐험가",description:"새로운 지역을 5곳 탐험하세요",completed:!0,rewardReceived:!1,progress:5,total:5,type:"weekly"},{id:12,title:"주간 퀘스트: 생산자",description:"아이템을 50개 이상 생산하세요",completed:!1,rewardReceived:!1,progress:28,total:50,type:"weekly"},{id:13,title:"주간 퀘스트: 코인 모으기",description:"코인을 5만개 이상 획득하세요",completed:!1,rewardReceived:!1,progress:32e3,total:5e4,type:"weekly"},{id:14,title:"주간 퀘스트: 레벨업 5",description:"레벨을 5레벨 이상 올리세요",completed:!1,rewardReceived:!1,progress:3,total:5,type:"weekly"},{id:15,title:"주간 퀘스트: 수집가",description:"다양한 보물을 20개 수집하세요",completed:!1,rewardReceived:!1,progress:12,total:20,type:"weekly"},{id:16,title:"주간 퀘스트: 종합 능력",description:"모든 활동을 각각 10회 이상 수행하세요",completed:!1,rewardReceived:!1,progress:35,total:40,type:"weekly"},{id:17,title:"월간 퀘스트: 코인왕",description:"이번 달 코인을 20만 개 이상 획득하세요",completed:!1,rewardReceived:!1,progress:95e3,total:2e5,type:"monthly"},{id:18,title:"월간 퀘스트: 극한 레벨업",description:"레벨을 20레벨 이상 올리세요",completed:!1,rewardReceived:!1,progress:15,total:20,type:"monthly"},{id:19,title:"월간 퀘스트: 완벽한 수집가",description:"보물을 100개 이상 수집하세요",completed:!1,rewardReceived:!1,progress:67,total:100,type:"monthly"},{id:20,title:"월간 퀘스트: 마스터 채굴러",description:"채굴을 500회 이상 완료하세요",completed:!1,rewardReceived:!1,progress:289,total:500,type:"monthly"},{id:21,title:"월간 퀘스트: 용사",description:"몬스터를 500마리 처치하세요",completed:!1,rewardReceived:!1,progress:234,total:500,type:"monthly"},{id:22,title:"월간 퀘스트: 대탐험가",description:"새로운 지역을 20곳 탐험하세요",completed:!1,rewardReceived:!1,progress:14,total:20,type:"monthly"},{id:23,title:"월간 퀘스트: 완벽한 제작자",description:"다양한 아이템을 200개 생산하세요",completed:!1,rewardReceived:!1,progress:123,total:200,type:"monthly"},{id:24,title:"월간 퀘스트: 최고 달성자",description:"이번 달 모든 활동을 완벽하게 수행하세요",completed:!0,rewardReceived:!1,progress:100,total:100,type:"monthly"}]),u=p=>{const m=c.value.find(_=>_.id===p);if(m&&m.completed&&!m.rewardReceived){m.rewardReceived=!0;const _=o();_.includes(p)||(_.push(p),l(_)),alert("보상 받기 완료!")}},d=Xe(()=>{let p=c.value.filter(m=>m.type===s.value);return n.value==="inProgress"?p=p.filter(m=>!m.completed||m.completed&&!m.rewardReceived):n.value==="completed"&&(p=p.filter(m=>m.completed&&m.rewardReceived)),p.sort((m,_)=>m.completed&&!m.rewardReceived&&(_.rewardReceived||!_.completed)?-1:(m.rewardReceived||!m.completed)&&_.completed&&!_.rewardReceived?1:0)});return Rt(()=>{const p=ht();p&&(e.value=p.gameData?.coins||0),r();const m=o();c.value.forEach(_=>{m.includes(_.id)&&(_.rewardReceived=!0)})}),(p,m)=>(O(),L("div",aS,[we(fn,{coinCount:e.value},null,8,["coinCount"]),h("main",lS,[h("div",cS,[h("button",{class:Pe(["filterTab",{active:s.value==="daily"}]),onClick:m[0]||(m[0]=_=>s.value="daily")}," Daily ",2),h("button",{class:Pe(["filterTab",{active:s.value==="weekly"}]),onClick:m[1]||(m[1]=_=>s.value="weekly")}," Weekly ",2),h("button",{class:Pe(["filterTab",{active:s.value==="monthly"}]),onClick:m[2]||(m[2]=_=>s.value="monthly")}," Monthly ",2)]),h("div",uS,[h("button",{class:Pe(["mainTab",{active:n.value==="inProgress"}]),onClick:m[3]||(m[3]=_=>n.value="inProgress")}," 진행중 ",2),h("button",{class:Pe(["mainTab",{active:n.value==="completed"}]),onClick:m[4]||(m[4]=_=>n.value="completed")}," 완료 ",2)]),h("div",hS,[(O(!0),L(Se,null,je(d.value,_=>(O(),L("div",{key:_.id,class:"questCard"},[h("div",dS,[h("div",fS,[h("h3",pS,B(_.title),1),h("p",gS,B(_.description),1)]),m[5]||(m[5]=h("div",{class:"questCharacter"},[h("div",{class:"characterImg"},"🐱")],-1))]),_.completed&&!_.rewardReceived?(O(),L("button",{key:0,class:"rewardBtn",onClick:w=>u(_.id)}," 보상받기 ",8,mS)):_.completed&&_.rewardReceived?(O(),L("div",_S," ✓ 완료됨 ")):(O(),L("div",vS,[h("div",{class:"progressFill",style:Ct({width:_.progress/_.total*100+"%"})},null,4),h("span",yS,B(_.progress)+"/"+B(_.total),1)]))]))),128))])]),we(pn)]))}},IS=Pt(AS,[["__scopeId","data-v-7bee4ca6"]]),wS="/tdl/assets/statStar1-DSWl6DZx.png",ES="/tdl/assets/statStar2-7A5sNtwf.png",TS={class:"inventoryPage"},CS={class:"mainContent"},bS={class:"topSection"},SS={class:"magicPanel"},RS={class:"panelTitle"},PS={class:"characterBox"},kS=["src"],DS={class:"profilePanel"},xS={class:"progressBars"},NS={class:"statLabel"},MS={class:"barBg"},OS={class:"value"},VS={class:"inventoryGrid"},LS=["onClick"],BS={key:0,class:"newBadge"},FS={class:"starBadge"},US=["src"],$S={class:"levelBadge"},HS=["src"],jS={__name:"InventoryPage",setup(t){const e=D(0),n=_=>[{name:"근력",value:_[0],progress:_[0],color:"#FF6B6B"},{name:"체력",value:_[1],progress:_[1],color:"#FF8A80"},{name:"지능",value:_[2],progress:_[2],color:"#9C27B0"},{name:"손재주",value:_[3],progress:_[3],color:"#FFA726"},{name:"용기",value:_[4],progress:_[4],color:"#00BCD4"},{name:"행운",value:_[5],progress:_[5],color:"#66BB6A"}],s=()=>Math.floor(Math.random()*3)+1,i=()=>Math.floor(Math.random()*10)+1,r=[{id:1,name:"Robot",selected:!0,stars:s(),level:i(),stats:n([33,7,29,10,11,10]),imageId:1,isNew:!1},{id:2,name:"Style",selected:!1,stars:s(),level:i(),stats:n([15,25,35,45,20,30]),imageId:2,isNew:!1},{id:3,name:"Suit",selected:!1,stars:s(),level:i(),stats:n([25,20,40,30,25,15]),imageId:3,isNew:!1},{id:4,name:"Tech",selected:!1,stars:s(),level:i(),stats:n([20,15,50,40,10,25]),imageId:4,isNew:!1},{id:5,name:"Army",selected:!1,stars:s(),level:i(),stats:n([45,40,15,20,50,10]),imageId:5,isNew:!1},{id:6,name:"Detective",selected:!1,stars:s(),level:i(),stats:n([20,25,45,30,35,25]),imageId:6,isNew:!1},{id:7,name:"Scholar",selected:!1,stars:s(),level:i(),stats:n([10,15,60,25,20,30]),imageId:7,isNew:!1},{id:8,name:"White",selected:!1,stars:s(),level:i(),stats:n([30,30,30,30,30,30]),imageId:8,isNew:!1},{id:9,name:"Green",selected:!1,stars:s(),level:i(),stats:n([25,35,20,25,30,35]),imageId:9,isNew:!1},{id:10,name:"Blue",selected:!1,stars:s(),level:i(),stats:n([20,30,35,30,25,30]),imageId:10,isNew:!1},{id:11,name:"Red",selected:!1,stars:s(),level:i(),stats:n([40,25,20,25,45,15]),imageId:11,isNew:!1},{id:12,name:"Shirt",selected:!1,stars:s(),level:i(),stats:n([22,28,32,28,22,28]),imageId:12,isNew:!1},{id:13,name:"Ninja",selected:!1,stars:s(),level:i(),stats:n([35,25,30,50,40,20]),imageId:13,isNew:!1},{id:14,name:"Knight",selected:!1,stars:s(),level:i(),stats:n([50,45,20,25,45,15]),imageId:14,isNew:!1},{id:15,name:"Pirate",selected:!1,stars:s(),level:i(),stats:n([40,35,25,35,50,25]),imageId:15,isNew:!1},{id:16,name:"Sailor",selected:!1,stars:s(),level:i(),stats:n([30,40,25,30,35,30]),imageId:16,isNew:!1},{id:17,name:"Sport",selected:!1,stars:s(),level:i(),stats:n([45,50,15,40,30,20]),imageId:17,isNew:!1},{id:18,name:"Cafe",selected:!1,stars:s(),level:i(),stats:n([20,25,30,45,25,35]),imageId:18,isNew:!1},{id:19,name:"Chef",selected:!1,stars:s(),level:i(),stats:n([25,30,25,50,20,30]),imageId:19,isNew:!1},{id:20,name:"Fisher",selected:!1,stars:s(),level:i(),stats:n([30,35,20,40,30,25]),imageId:20,isNew:!1},{id:21,name:"Farmer",selected:!1,stars:s(),level:i(),stats:n([40,45,20,35,25,30]),imageId:21,isNew:!1},{id:22,name:"Doctor",selected:!1,stars:s(),level:i(),stats:n([15,30,55,35,25,30]),imageId:22,isNew:!1},{id:23,name:"Teacher",selected:!1,stars:s(),level:i(),stats:n([20,25,50,30,30,25]),imageId:23,isNew:!1},{id:24,name:"Artist",selected:!1,stars:s(),level:i(),stats:n([15,20,40,55,25,35]),imageId:24,isNew:!1}],o=D([...r]),l=Xe(()=>{const _=o.value.find(w=>w.selected);return _&&_.stats?_.stats:n([33,7,29,10,11,10])}),c=Xe(()=>{const _=o.value.find(w=>w.selected);return _?_.name:"Magic"}),u=_=>{try{return new URL(Object.assign({"../assets/img/cat1.png":hu,"../assets/img/cat10.png":du,"../assets/img/cat11.png":fu,"../assets/img/cat12.png":pu,"../assets/img/cat13.png":gu,"../assets/img/cat14.png":mu,"../assets/img/cat15.png":_u,"../assets/img/cat16.png":vu,"../assets/img/cat17.png":yu,"../assets/img/cat18.png":Au,"../assets/img/cat19.png":Iu,"../assets/img/cat2.png":wu,"../assets/img/cat20.png":Eu,"../assets/img/cat21.png":Tu,"../assets/img/cat22.png":Cu,"../assets/img/cat23.png":bu,"../assets/img/cat24.png":Su,"../assets/img/cat25.png":Ru,"../assets/img/cat26.png":Pu,"../assets/img/cat27.png":ku,"../assets/img/cat28.png":Du,"../assets/img/cat29.png":xu,"../assets/img/cat3.png":Nu,"../assets/img/cat30.png":Mu,"../assets/img/cat4.png":Ou,"../assets/img/cat5.png":Vu,"../assets/img/cat6.png":Lu,"../assets/img/cat7.png":Bu,"../assets/img/cat8.png":Fu,"../assets/img/cat9.png":Uu,"../assets/img/catProfile01.png":$u,"../assets/img/catProfile02.png":Hu,"../assets/img/cat_ico.png":ju})[`../assets/img/cat${_}.png`],import.meta.url).href}catch{return`/src/assets/img/cat${_}.png`}},d=Xe(()=>{const _=o.value.find(w=>w.selected);return u(_?_.imageId||_.id:1)}),p=Xe(()=>{const _=o.value.filter(b=>b.isNew),w=o.value.filter(b=>!b.isNew);return[..._,...w]}),m=_=>{if(o.value.forEach(w=>w.selected=!1),_.selected=!0,_.isNew){_.isNew=!1;const w=ht();if(w){const b=o.value.map(I=>({...I,isNew:I.id===_.id?!1:I.isNew}));Mt(w.id,{inventory:b})}}};return Rt(()=>{const _=ht();if(_){e.value=_.gameData?.coins||0;const w=_.gameData?.inventory;if(w&&w.length>0){const b=[...r];w.forEach(I=>{const x=b.findIndex(U=>U.id===I.id);x>-1?b[x]={...b[x],...I}:b.push({...I,stats:n([Math.floor(Math.random()*40)+10,Math.floor(Math.random()*40)+10,Math.floor(Math.random()*40)+10,Math.floor(Math.random()*40)+10,Math.floor(Math.random()*40)+10,Math.floor(Math.random()*40)+10])})}),o.value=b}}}),(_,w)=>(O(),L("div",TS,[we(fn,{coinCount:e.value},null,8,["coinCount"]),h("main",CS,[h("div",bS,[h("div",SS,[h("div",RS,B(c.value),1),h("div",PS,[h("img",{src:d.value,alt:"선택된 캐릭터",class:"selectedCharacter"},null,8,kS)])]),h("div",DS,[w[0]||(w[0]=h("div",{class:"panelTitle"},"Profile",-1)),h("div",xS,[(O(!0),L(Se,null,je(l.value,(b,I)=>(O(),L("div",{key:I,class:"progressBar"},[h("div",NS,B(b.name),1),h("div",MS,[h("div",{style:Ct({width:b.progress+"%",backgroundColor:b.color}),class:"barFill"},null,4)]),h("span",OS,B(b.value)+"%",1)]))),128))])])]),h("div",VS,[(O(!0),L(Se,null,je(p.value,b=>(O(),L("div",{key:b.id,class:Pe(["inventoryItem",{selected:b.selected}]),onClick:I=>m(b)},[b.isNew?(O(),L("div",BS,"NEW")):he("",!0),h("div",FS,[(O(),L(Se,null,je(5,I=>h("img",{key:I,src:I<=b.stars?Wt(wS):Wt(ES),alt:"별",class:"starIcon"},null,8,US)),64))]),h("div",$S," Lv "+B(String(b.level).padStart(2,"0")),1),h("img",{src:u(b.imageId||b.id),alt:"고양이",class:"itemIcon"},null,8,HS)],10,LS))),128))])]),we(pn)]))}},GS=Pt(jS,[["__scopeId","data-v-93b70a94"]]),qS="/tdl/assets/factory_cat-DD06P-8u.png",QS="/tdl/assets/factory_under_line-BMeQefpa.png",WS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAAJCAYAAABE6JQbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgB7drRDYIwFAXQuoEjMIIjyEZuYNzATRgBN9ANYJPaKh8EwX5Xz0leaMjj+94AIczEGJs0fb4GAKB6xWyfFob4NigBAFC3YrYvFqISAAB1K2X7bjr0aZqV58c0lwAA1OYctrO9zQUgh/8xAAD/4lZ6A/BIcwoAQG2uaQ4r98c07eu08Z3gnmYfAIDq5Ayfsvz7/32LEiD8AaByixLwGf6zxVwCOuEPAL9hKgHdMvyfsGrpYuWe8x8AAAAASUVORK5CYII=",zS={class:"factoryPage"},KS={class:"mainContent"},YS={class:"materialsSection"},JS={class:"materialText"},XS={class:"materialCount"},ZS={class:"materialText"},eR={class:"materialCount"},tR=["disabled"],nR={class:"popupCatImage"},sR=["src"],iR={__name:"FactoryPage",setup(t){const e=D(0),n=D(50),s=D(100),i=D(3),r=D(!1),o=D(1);Rt(()=>{const w=ht();w&&(e.value=w.gameData?.totalCoin||0,n.value=50)});const l=()=>{if(e.value<s.value){alert(`코인이 부족합니다. (필요: ${s.value})`);return}if(n.value<i.value){alert(`고양이 파편이 부족합니다. (필요: ${i.value})`);return}const w=ht();if(w){e.value-=s.value,n.value-=i.value,o.value=p();const b=(w.gameData?.catCount||0)+1,I=w.gameData?.inventory||[],x={id:Date.now(),imageId:o.value,name:`Cat ${o.value}`,stars:Math.floor(Math.random()*3)+2,level:1,selected:!1,isNew:!0};I.unshift(x),Mt(w.id,{totalCoin:e.value,catFragments:n.value,catCount:b,inventory:I}),window.dispatchEvent(new CustomEvent("userDataUpdated")),r.value=!0}},c=Xe(()=>e.value>=s.value&&n.value>=i.value),u=Xe(()=>e.value>=s.value),d=Xe(()=>n.value>=i.value),p=()=>Math.floor(Math.random()*30)+1,m=w=>{try{return new URL(Object.assign({"../assets/img/cat1.png":hu,"../assets/img/cat10.png":du,"../assets/img/cat11.png":fu,"../assets/img/cat12.png":pu,"../assets/img/cat13.png":gu,"../assets/img/cat14.png":mu,"../assets/img/cat15.png":_u,"../assets/img/cat16.png":vu,"../assets/img/cat17.png":yu,"../assets/img/cat18.png":Au,"../assets/img/cat19.png":Iu,"../assets/img/cat2.png":wu,"../assets/img/cat20.png":Eu,"../assets/img/cat21.png":Tu,"../assets/img/cat22.png":Cu,"../assets/img/cat23.png":bu,"../assets/img/cat24.png":Su,"../assets/img/cat25.png":Ru,"../assets/img/cat26.png":Pu,"../assets/img/cat27.png":ku,"../assets/img/cat28.png":Du,"../assets/img/cat29.png":xu,"../assets/img/cat3.png":Nu,"../assets/img/cat30.png":Mu,"../assets/img/cat4.png":Ou,"../assets/img/cat5.png":Vu,"../assets/img/cat6.png":Lu,"../assets/img/cat7.png":Bu,"../assets/img/cat8.png":Fu,"../assets/img/cat9.png":Uu,"../assets/img/catProfile01.png":$u,"../assets/img/catProfile02.png":Hu,"../assets/img/cat_ico.png":ju})[`../assets/img/cat${w}.png`],import.meta.url).href}catch{return`/src/assets/img/cat${w}.png`}},_=()=>{r.value=!1};return(w,b)=>(O(),L("div",zS,[we(fn,{catCount:n.value},null,8,["catCount"]),h("main",KS,[b[4]||(b[4]=_0('<h1 class="pageTitle" data-v-b6a2e140>고양이 제작하기</h1><div class="catSilhouette" data-v-b6a2e140><div class="catCircle" data-v-b6a2e140><img src="'+qS+'" alt="고양이" class="catShape" data-v-b6a2e140></div></div><div class="factoryUnderLine" data-v-b6a2e140><img src="'+QS+'" alt="" class="factoryLine" data-v-b6a2e140></div><div class="divider" data-v-b6a2e140><div class="dividerLine" data-v-b6a2e140><img src="'+WS+'" alt="" class="dividerLineImg" data-v-b6a2e140></div></div>',4)),h("div",YS,[h("div",{class:Pe(["materialItem",{insufficient:!u.value}])},[b[1]||(b[1]=h("img",{src:vm,alt:"코인",class:"materialIcon"},null,-1)),h("span",JS,[h("span",XS,B(e.value),1),so(" / "+B(s.value)+" Coin ",1)])],2),b[3]||(b[3]=h("div",{class:"plusSign"},"+",-1)),h("div",{class:Pe(["materialItem",{insufficient:!d.value}])},[b[2]||(b[2]=h("img",{src:Im,alt:"고양이",class:"materialIcon"},null,-1)),h("span",ZS,[h("span",eR,B(n.value),1),so(" / "+B(i.value)+" 고양이 파편 ",1)])],2)]),h("button",{class:Pe(["createButton",{disabled:!c.value}]),onClick:l,disabled:!c.value}," 데려 오기 ",10,tR)]),we(pn),r.value?(O(),L("div",{key:0,class:"popupOverlay",onClick:_},[h("div",{class:"popupContent",onClick:b[0]||(b[0]=Gr(()=>{},["stop"]))},[h("div",nR,[h("img",{src:m(o.value),alt:"고양이"},null,8,sR)]),b[5]||(b[5]=h("h2",{class:"popupTitle"},"고양이 데려오기 성공!",-1)),b[6]||(b[6]=h("p",{class:"popupMessage"},"새로운 고양이가 인벤토리에 추가되었습니다!",-1)),h("button",{class:"popupCloseBtn",onClick:_},"확인")])])):he("",!0)]))}},rR=Pt(iR,[["__scopeId","data-v-b6a2e140"]]),oR={class:"settingsPage"},aR={class:"mainContent"},lR={class:"settingGroup"},cR={class:"settingGroup"},uR={class:"settingLabel"},hR={class:"settingInputWrapper"},dR={key:0,class:"dropdownMenu"},fR=["onClick"],pR={class:"settingGroup"},gR={class:"settingLabel"},mR={class:"settingInputWrapper"},_R={key:0,class:"dropdownMenu"},vR=["onClick"],yR={class:"settingSection"},AR={class:"sectionTitle"},IR={class:"settingToggle"},wR={class:"toggleLabel"},ER={class:"settingToggle"},TR={class:"toggleLabel"},CR={class:"settingGroup"},bR={class:"settingGroup"},SR={__name:"SettingsPage",setup(t){const e=dn(),n=D(0),s=D(null),i=D("한국어"),r=D("부산"),o=D(!0),l=D(!0),c=D(!1),u=D(!1),d=D(!1);D("");const p=["한국어","English"],m=["부산","서울","대구","인천"],_={ko:{language:"언어",region:"지역",soundSettings:"소리 설정",soundToggle:"소리 토글",viToggle:"Vi 토글",userID:"User ID",copySuccess:"User ID가 복사되었습니다!",english:"English"},en:{language:"Language",region:"Region",soundSettings:"Sound Settings",soundToggle:"Sound Toggle",viToggle:"Vibration Toggle",userID:"User ID",copySuccess:"User ID copied!",english:"English"}},w=Xe(()=>i.value==="한국어"?_.ko:_.en),b=U=>{i.value=U,c.value=!1,localStorage.setItem("appLanguage",U)},I=()=>{o.value=!o.value,localStorage.setItem("soundEnabled",o.value.toString()),window.dispatchEvent(new CustomEvent("soundSettingChanged",{detail:{enabled:o.value}}))};Rt(()=>{const U=ht();U&&(s.value=U,n.value=U.gameData?.coins||0);const F=localStorage.getItem("appLanguage");F&&(i.value=F);const j=localStorage.getItem("soundEnabled");j!==null?o.value=j==="true":localStorage.setItem("soundEnabled","true"),x()});const x=()=>{if(!s.value)return;const U=new Date().toDateString(),F=localStorage.getItem(`checkIn_${s.value.id}`);d.value=F===U};return(U,F)=>(O(),L("div",oR,[we(fn,{coinCount:n.value},null,8,["coinCount"]),h("main",aR,[h("div",lR,[h("button",{class:"userProfileBtn",onClick:F[0]||(F[0]=j=>Wt(e).push("/profile"))},[...F[6]||(F[6]=[h("span",{class:"userProfileIcon"},"👤",-1),h("span",null,"사용자 설정",-1),h("span",{class:"arrowIcon"},"→",-1)])])]),h("div",cR,[h("label",uR,B(i.value==="한국어"?"언어":"Language"),1),h("div",hR,[h("div",{class:"settingInput",onClick:F[1]||(F[1]=j=>c.value=!c.value)},[h("span",null,B(i.value),1),F[7]||(F[7]=h("span",{class:"dropdownIcon"},"▼",-1))]),c.value?(O(),L("div",dR,[(O(),L(Se,null,je(p,j=>h("div",{key:j,class:Pe(["dropdownItem",{active:i.value===j}]),onClick:se=>b(j)},B(j),11,fR)),64))])):he("",!0)])]),h("div",pR,[h("label",gR,B(w.value.region),1),h("div",mR,[h("div",{class:"settingInput",onClick:F[2]||(F[2]=j=>u.value=!u.value)},[h("span",null,B(r.value),1),F[8]||(F[8]=h("span",{class:"dropdownIcon"},"▼",-1))]),u.value?(O(),L("div",_R,[(O(),L(Se,null,je(m,j=>h("div",{key:j,class:Pe(["dropdownItem",{active:r.value===j}]),onClick:se=>{r.value=j,u.value=!1}},B(j),11,vR)),64))])):he("",!0)])]),h("div",yR,[h("h3",AR,B(w.value.soundSettings),1),h("div",IR,[h("label",wR,B(w.value.soundToggle),1),h("button",{class:Pe(["toggleSwitch",{active:o.value}]),onClick:I},[...F[9]||(F[9]=[h("div",{class:"toggleHandle"},null,-1)])],2)]),h("div",ER,[h("label",TR,B(w.value.viToggle),1),h("button",{class:Pe(["toggleSwitch",{active:l.value}]),onClick:F[3]||(F[3]=j=>l.value=!l.value)},[...F[10]||(F[10]=[h("div",{class:"toggleHandle"},null,-1)])],2)])]),h("div",CR,[F[11]||(F[11]=h("label",{class:"settingLabel"},"출석체크",-1)),h("button",{class:"checkInBtn",onClick:F[4]||(F[4]=j=>Wt(e).push("/attendance"))}," 출석체크 하기 ")]),h("div",bR,[h("button",{class:"nftBtn",onClick:F[5]||(F[5]=j=>Wt(e).push("/nft"))}," NFT ")])]),we(pn)]))}},RR=Pt(SR,[["__scopeId","data-v-ab0a9e0d"]]),PR=()=>{};var mf={};/**
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
 */const wm=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},kR=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Em={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,d=r>>2,p=(r&3)<<4|l>>4;let m=(l&15)<<2|u>>6,_=u&63;c||(_=64,o||(m=64)),s.push(n[d],n[p],n[m],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(wm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||u==null||p==null)throw new DR;const m=r<<2|l>>4;if(s.push(m),u!==64){const _=l<<4&240|u>>2;if(s.push(_),p!==64){const w=u<<6&192|p;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class DR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xR=function(t){const e=wm(t);return Em.encodeByteArray(e,!0)},wa=function(t){return xR(t).replace(/\./g,"")},Tm=function(t){try{return Em.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function NR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const MR=()=>NR().__FIREBASE_DEFAULTS__,OR=()=>{if(typeof process>"u"||typeof mf>"u")return;const t=mf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},VR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Tm(t[1]);return e&&JSON.parse(e)},nl=()=>{try{return PR()||MR()||OR()||VR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Cm=t=>nl()?.emulatorHosts?.[t],LR=t=>{const e=Cm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},bm=()=>nl()?.config,Sm=t=>nl()?.[`_${t}`];/**
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
 */class BR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function ur(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Rm(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function FR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...t};return[wa(JSON.stringify(n)),wa(JSON.stringify(o)),""].join(".")}const Qr={};function UR(){const t={prod:[],emulator:[]};for(const e of Object.keys(Qr))Qr[e]?t.emulator.push(e):t.prod.push(e);return t}function $R(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let _f=!1;function Pm(t,e){if(typeof window>"u"||typeof document>"u"||!ur(window.location.host)||Qr[t]===e||Qr[t]||_f)return;Qr[t]=e;function n(m){return`__firebase__banner__${m}`}const s="__firebase__banner",r=UR().prod.length>0;function o(){const m=document.getElementById(s);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,_){m.setAttribute("width","24"),m.setAttribute("id",_),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{_f=!0,o()},m}function d(m,_){m.setAttribute("id",_),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=$R(s),_=n("text"),w=document.getElementById(_)||document.createElement("span"),b=n("learnmore"),I=document.getElementById(b)||document.createElement("a"),x=n("preprendIcon"),U=document.getElementById(x)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const F=m.element;l(F),d(I,b);const j=u();c(U,x),F.append(U,w,I,j),document.body.appendChild(F)}r?(w.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,w.innerText="Preview backend running in this workspace."),w.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function rn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function HR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rn())}function jR(){const t=nl()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function GR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function km(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function QR(){const t=rn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function WR(){return!jR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Dm(){try{return typeof indexedDB=="object"}catch{return!1}}function xm(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(n){e(n)}})}function zR(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const KR="FirebaseError";class Bn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=KR,Object.setPrototypeOf(this,Bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ti.prototype.create)}}class Ti{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?YR(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Bn(i,l,s)}}function YR(t,e){return t.replace(JR,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const JR=/\{\$([^}]+)}/g;function XR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ws(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(vf(r)&&vf(o)){if(!Ws(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function vf(t){return t!==null&&typeof t=="object"}/**
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
 */function Io(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ZR(t,e){const n=new eP(t,e);return n.subscribe.bind(n)}class eP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");tP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=ql),i.error===void 0&&(i.error=ql),i.complete===void 0&&(i.complete=ql);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ql(){}/**
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
 */const nP=1e3,sP=2,iP=14400*1e3,rP=.5;function yf(t,e=nP,n=sP){const s=e*Math.pow(n,t),i=Math.round(rP*s*(Math.random()-.5)*2);return Math.min(iP,s+i)}/**
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
 */function vn(t){return t&&t._delegate?t._delegate:t}class Ln{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ci="[DEFAULT]";/**
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
 */class oP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new BR;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lP(e))try{this.getOrInitializeService({instanceIdentifier:ci})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=ci){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ci){return this.instances.has(e)}getOptions(e=ci){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:aP(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ci){return this.component?this.component.multipleInstances?e:ci:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function aP(t){return t===ci?void 0:t}function lP(t){return t.instantiationMode==="EAGER"}/**
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
 */class cP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new oP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Oe||(Oe={}));const uP={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},hP=Oe.INFO,dP={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},fP=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=dP[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sl{constructor(e){this.name=e,this._logLevel=hP,this._logHandler=fP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}}const pP=(t,e)=>e.some(n=>t instanceof n);let Af,If;function gP(){return Af||(Af=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mP(){return If||(If=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Nm=new WeakMap,Ic=new WeakMap,Mm=new WeakMap,Ql=new WeakMap,Gu=new WeakMap;function _P(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Us(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Nm.set(n,t)}).catch(()=>{}),Gu.set(e,t),e}function vP(t){if(Ic.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ic.set(t,e)}let wc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ic.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Mm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Us(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function yP(t){wc=t(wc)}function AP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Wl(this),e,...n);return Mm.set(s,e.sort?e.sort():[e]),Us(s)}:mP().includes(t)?function(...e){return t.apply(Wl(this),e),Us(Nm.get(this))}:function(...e){return Us(t.apply(Wl(this),e))}}function IP(t){return typeof t=="function"?AP(t):(t instanceof IDBTransaction&&vP(t),pP(t,gP())?new Proxy(t,wc):t)}function Us(t){if(t instanceof IDBRequest)return _P(t);if(Ql.has(t))return Ql.get(t);const e=IP(t);return e!==t&&(Ql.set(t,e),Gu.set(e,t)),e}const Wl=t=>Gu.get(t);function Om(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Us(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Us(o.result),c.oldVersion,c.newVersion,Us(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const wP=["get","getKey","getAll","getAllKeys","count"],EP=["put","add","delete","clear"],zl=new Map;function wf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zl.get(e))return zl.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=EP.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||wP.includes(n)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&c.done]))[0]};return zl.set(e,r),r}yP(t=>({...t,get:(e,n,s)=>wf(e,n)||t.get(e,n,s),has:(e,n)=>!!wf(e,n)||t.has(e,n)}));/**
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
 */class TP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(CP(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function CP(t){return t.getComponent()?.type==="VERSION"}const Ec="@firebase/app",Ef="0.14.5";/**
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
 */const ys=new sl("@firebase/app"),bP="@firebase/app-compat",SP="@firebase/analytics-compat",RP="@firebase/analytics",PP="@firebase/app-check-compat",kP="@firebase/app-check",DP="@firebase/auth",xP="@firebase/auth-compat",NP="@firebase/database",MP="@firebase/data-connect",OP="@firebase/database-compat",VP="@firebase/functions",LP="@firebase/functions-compat",BP="@firebase/installations",FP="@firebase/installations-compat",UP="@firebase/messaging",$P="@firebase/messaging-compat",HP="@firebase/performance",jP="@firebase/performance-compat",GP="@firebase/remote-config",qP="@firebase/remote-config-compat",QP="@firebase/storage",WP="@firebase/storage-compat",zP="@firebase/firestore",KP="@firebase/ai",YP="@firebase/firestore-compat",JP="firebase",XP="12.5.0";/**
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
 */const Tc="[DEFAULT]",ZP={[Ec]:"fire-core",[bP]:"fire-core-compat",[RP]:"fire-analytics",[SP]:"fire-analytics-compat",[kP]:"fire-app-check",[PP]:"fire-app-check-compat",[DP]:"fire-auth",[xP]:"fire-auth-compat",[NP]:"fire-rtdb",[MP]:"fire-data-connect",[OP]:"fire-rtdb-compat",[VP]:"fire-fn",[LP]:"fire-fn-compat",[BP]:"fire-iid",[FP]:"fire-iid-compat",[UP]:"fire-fcm",[$P]:"fire-fcm-compat",[HP]:"fire-perf",[jP]:"fire-perf-compat",[GP]:"fire-rc",[qP]:"fire-rc-compat",[QP]:"fire-gcs",[WP]:"fire-gcs-compat",[zP]:"fire-fst",[YP]:"fire-fst-compat",[KP]:"fire-vertex","fire-js":"fire-js",[JP]:"fire-js-all"};/**
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
 */const Ea=new Map,e2=new Map,Cc=new Map;function Tf(t,e){try{t.container.addComponent(e)}catch(n){ys.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ns(t){const e=t.name;if(Cc.has(e))return ys.debug(`There were multiple attempts to register component ${e}.`),!1;Cc.set(e,t);for(const n of Ea.values())Tf(n,t);for(const n of e2.values())Tf(n,t);return!0}function Ci(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function qn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const t2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$s=new Ti("app","Firebase",t2);/**
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
 */class n2{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $s.create("app-deleted",{appName:this._name})}}/**
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
 */const hr=XP;function Vm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:Tc,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw $s.create("bad-app-name",{appName:String(i)});if(n||(n=bm()),!n)throw $s.create("no-options");const r=Ea.get(i);if(r){if(Ws(n,r.options)&&Ws(s,r.config))return r;throw $s.create("duplicate-app",{appName:i})}const o=new cP(i);for(const c of Cc.values())o.addComponent(c);const l=new n2(n,s,o);return Ea.set(i,l),l}function qu(t=Tc){const e=Ea.get(t);if(!e&&t===Tc&&bm())return Vm();if(!e)throw $s.create("no-app",{appName:t});return e}function Dn(t,e,n){let s=ZP[t]??t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ys.warn(o.join(" "));return}ns(new Ln(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const s2="firebase-heartbeat-database",i2=1,oo="firebase-heartbeat-store";let Kl=null;function Lm(){return Kl||(Kl=Om(s2,i2,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(oo)}catch(n){console.warn(n)}}}}).catch(t=>{throw $s.create("idb-open",{originalErrorMessage:t.message})})),Kl}async function r2(t){try{const n=(await Lm()).transaction(oo),s=await n.objectStore(oo).get(Bm(t));return await n.done,s}catch(e){if(e instanceof Bn)ys.warn(e.message);else{const n=$s.create("idb-get",{originalErrorMessage:e?.message});ys.warn(n.message)}}}async function Cf(t,e){try{const s=(await Lm()).transaction(oo,"readwrite");await s.objectStore(oo).put(e,Bm(t)),await s.done}catch(n){if(n instanceof Bn)ys.warn(n.message);else{const s=$s.create("idb-set",{originalErrorMessage:n?.message});ys.warn(s.message)}}}function Bm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const o2=1024,a2=30;class l2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new u2(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=bf();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>a2){const i=h2(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){ys.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=bf(),{heartbeatsToSend:n,unsentEntries:s}=c2(this._heartbeatsCache.heartbeats),i=wa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return ys.warn(e),""}}}function bf(){return new Date().toISOString().substring(0,10)}function c2(t,e=o2){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Sf(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Sf(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class u2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Dm()?xm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await r2(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Cf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Cf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Sf(t){return wa(JSON.stringify({version:2,heartbeats:t})).length}function h2(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function d2(t){ns(new Ln("platform-logger",e=>new TP(e),"PRIVATE")),ns(new Ln("heartbeat",e=>new l2(e),"PRIVATE")),Dn(Ec,Ef,t),Dn(Ec,Ef,"esm2020"),Dn("fire-js","")}d2("");var f2="firebase",p2="12.5.0";/**
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
 */Dn(f2,p2,"app");function Fm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const g2=Fm,Um=new Ti("auth","Firebase",Fm());/**
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
 */const Ta=new sl("@firebase/auth");function m2(t,...e){Ta.logLevel<=Oe.WARN&&Ta.warn(`Auth (${hr}): ${t}`,...e)}function ea(t,...e){Ta.logLevel<=Oe.ERROR&&Ta.error(`Auth (${hr}): ${t}`,...e)}/**
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
 */function As(t,...e){throw Qu(t,...e)}function zn(t,...e){return Qu(t,...e)}function $m(t,e,n){const s={...g2(),[e]:n};return new Ti("auth","Firebase",s).create(e,{appName:t.name})}function gi(t){return $m(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Qu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Um.create(t,...e)}function ye(t,e,...n){if(!t)throw Qu(e,...n)}function fs(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ea(e),new Error(e)}function Is(t,e){t||fs(e)}/**
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
 */function bc(){return typeof self<"u"&&self.location?.href||""}function _2(){return Rf()==="http:"||Rf()==="https:"}function Rf(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function v2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_2()||km()||"connection"in navigator)?navigator.onLine:!0}function y2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class wo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Is(n>e,"Short delay should be less than long delay!"),this.isMobile=HR()||qR()}get(){return v2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Wu(t,e){Is(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Hm{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;fs("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;fs("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;fs("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const A2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const I2=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],w2=new wo(3e4,6e4);function zu(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function dr(t,e,n,s,i={}){return jm(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const l=Io({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...r};return GR()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&ur(t.emulatorConfig.host)&&(u.credentials="include"),Hm.fetch()(await Gm(t,t.config.apiHost,n,l),u)})}async function jm(t,e,n){t._canInitEmulator=!1;const s={...A2,...e};try{const i=new T2(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw jo(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const l=r.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw jo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw jo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw jo(t,"user-disabled",o);const d=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw $m(t,d,u);As(t,d)}}catch(i){if(i instanceof Bn)throw i;As(t,"network-request-failed",{message:String(i)})}}async function E2(t,e,n,s,i={}){const r=await dr(t,e,n,s,i);return"mfaPendingCredential"in r&&As(t,"multi-factor-auth-required",{_serverResponse:r}),r}async function Gm(t,e,n,s){const i=`${e}${n}?${s}`,r=t,o=r.config.emulator?Wu(t.config,i):`${t.config.apiScheme}://${i}`;return I2.includes(n)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}class T2{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(zn(this.auth,"network-request-failed")),w2.get())})}}function jo(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=zn(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function C2(t,e){return dr(t,"POST","/v1/accounts:delete",e)}async function Ca(t,e){return dr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Wr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function b2(t,e=!1){const n=vn(t),s=await n.getIdToken(e),i=Ku(s);ye(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r?.sign_in_provider;return{claims:i,token:s,authTime:Wr(Yl(i.auth_time)),issuedAtTime:Wr(Yl(i.iat)),expirationTime:Wr(Yl(i.exp)),signInProvider:o||null,signInSecondFactor:r?.sign_in_second_factor||null}}function Yl(t){return Number(t)*1e3}function Ku(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ea("JWT malformed, contained fewer than 3 sections"),null;try{const i=Tm(n);return i?JSON.parse(i):(ea("Failed to decode base64 JWT payload"),null)}catch(i){return ea("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Pf(t){const e=Ku(t);return ye(e,"internal-error"),ye(typeof e.exp<"u","internal-error"),ye(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ao(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Bn&&S2(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function S2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class R2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Sc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wr(this.lastLoginAt),this.creationTime=Wr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ba(t){const e=t.auth,n=await t.getIdToken(),s=await ao(t,Ca(e,{idToken:n}));ye(s?.users.length,e,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const r=i.providerUserInfo?.length?qm(i.providerUserInfo):[],o=k2(t.providerData,r),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!o?.length,u=l?c:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Sc(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function P2(t){const e=vn(t);await ba(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function k2(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function qm(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function D2(t,e){const n=await jm(t,{},async()=>{const s=Io({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=await Gm(t,i,"/v1/token",`key=${r}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:s};return t.emulatorConfig&&ur(t.emulatorConfig.host)&&(c.credentials="include"),Hm.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function x2(t,e){return dr(t,"POST","/v2/accounts:revokeToken",zu(t,e))}/**
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
 */class Qi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ye(e.idToken,"internal-error"),ye(typeof e.idToken<"u","internal-error"),ye(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Pf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ye(e.length!==0,"internal-error");const n=Pf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ye(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await D2(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Qi;return s&&(ye(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(ye(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(ye(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qi,this.toJSON())}_performRefresh(){return fs("not implemented")}}/**
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
 */function Ds(t,e){ye(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Nn{constructor({uid:e,auth:n,stsTokenManager:s,...i}){this.providerId="firebase",this.proactiveRefresh=new R2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Sc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ao(this,this.stsTokenManager.getToken(this.auth,e));return ye(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return b2(this,e)}reload(){return P2(this)}_assign(e){this!==e&&(ye(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Nn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ye(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ba(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qn(this.auth.app))return Promise.reject(gi(this.auth));const e=await this.getIdToken();return await ao(this,C2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,i=n.email??void 0,r=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:_,providerData:w,stsTokenManager:b}=n;ye(p&&b,e,"internal-error");const I=Qi.fromJSON(this.name,b);ye(typeof p=="string",e,"internal-error"),Ds(s,e.name),Ds(i,e.name),ye(typeof m=="boolean",e,"internal-error"),ye(typeof _=="boolean",e,"internal-error"),Ds(r,e.name),Ds(o,e.name),Ds(l,e.name),Ds(c,e.name),Ds(u,e.name),Ds(d,e.name);const x=new Nn({uid:p,auth:e,email:i,emailVerified:m,displayName:s,isAnonymous:_,photoURL:o,phoneNumber:r,tenantId:l,stsTokenManager:I,createdAt:u,lastLoginAt:d});return w&&Array.isArray(w)&&(x.providerData=w.map(U=>({...U}))),c&&(x._redirectEventId=c),x}static async _fromIdTokenResponse(e,n,s=!1){const i=new Qi;i.updateFromServerResponse(n);const r=new Nn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await ba(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];ye(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?qm(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!r?.length,l=new Qi;l.updateFromIdToken(s);const c=new Nn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Sc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!r?.length};return Object.assign(c,u),c}}/**
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
 */const kf=new Map;function ps(t){Is(t instanceof Function,"Expected a class definition");let e=kf.get(t);return e?(Is(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,kf.set(t,e),e)}/**
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
 */class Qm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Qm.type="NONE";const Df=Qm;/**
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
 */function ta(t,e,n){return`firebase:${t}:${e}:${n}`}class Wi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=ta(this.userKey,i.apiKey,r),this.fullPersistenceKey=ta("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ca(this.auth,{idToken:e}).catch(()=>{});return n?Nn._fromGetAccountInfoResponse(this.auth,n,e):null}return Nn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Wi(ps(Df),e,s);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||ps(Df);const o=ta(s,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){let p;if(typeof d=="string"){const m=await Ca(e,{idToken:d}).catch(()=>{});if(!m)break;p=await Nn._fromGetAccountInfoResponse(e,m,d)}else p=Nn._fromJSON(e,d);u!==r&&(l=p),r=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Wi(r,e,s):(r=c[0],l&&await r._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new Wi(r,e,s))}}/**
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
 */function xf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ym(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xm(e))return"Blackberry";if(Zm(e))return"Webos";if(zm(e))return"Safari";if((e.includes("chrome/")||Km(e))&&!e.includes("edge/"))return"Chrome";if(Jm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if(s?.length===2)return s[1]}return"Other"}function Wm(t=rn()){return/firefox\//i.test(t)}function zm(t=rn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Km(t=rn()){return/crios\//i.test(t)}function Ym(t=rn()){return/iemobile/i.test(t)}function Jm(t=rn()){return/android/i.test(t)}function Xm(t=rn()){return/blackberry/i.test(t)}function Zm(t=rn()){return/webos/i.test(t)}function Yu(t=rn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function N2(t=rn()){return Yu(t)&&!!window.navigator?.standalone}function M2(){return QR()&&document.documentMode===10}function e_(t=rn()){return Yu(t)||Jm(t)||Zm(t)||Xm(t)||/windows phone/i.test(t)||Ym(t)}/**
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
 */function t_(t,e=[]){let n;switch(t){case"Browser":n=xf(rn());break;case"Worker":n=`${xf(rn())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hr}/${s}`}/**
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
 */class O2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,l)=>{try{const c=e(r);o(c)}catch(c){l(c)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function V2(t,e={}){return dr(t,"GET","/v2/passwordPolicy",zu(t,e))}/**
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
 */const L2=6;class B2{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??L2,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class F2{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nf(this),this.idTokenSubscription=new Nf(this),this.beforeStateQueue=new O2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Um,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ps(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Wi.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ca(this,{idToken:e}),s=await Nn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(qn(this.app)){const r=this.app.settings.authIdToken;return r?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(r).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=this.redirectUser?._redirectEventId,o=s?._redirectEventId,l=await this.tryRedirectSignIn(e);(!r||r===o)&&l?.user&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(r){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(r))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ye(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ba(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=y2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(qn(this.app))return Promise.reject(gi(this));const n=e?vn(e):null;return n&&ye(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ye(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return qn(this.app)?Promise.reject(gi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return qn(this.app)?Promise.reject(gi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ps(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await V2(this),n=new B2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ti("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await x2(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ps(e)||this._popupRedirectResolver;ye(n,this,"argument-error"),this.redirectPersistenceManager=await Wi.create(this,[ps(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ye(l,this,"internal-error"),l.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ye(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=t_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(qn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&m2(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Ju(t){return vn(t)}class Nf{constructor(e){this.auth=e,this.observer=null,this.addObserver=ZR(n=>this.observer=n)}get next(){return ye(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Xu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function U2(t){Xu=t}function $2(t){return Xu.loadJS(t)}function H2(){return Xu.gapiScript}function j2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function G2(t,e){const n=Ci(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Ws(r,e??{}))return i;As(i,"already-initialized")}return n.initialize({options:e})}function q2(t,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(ps);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e?.popupRedirectResolver)}function Q2(t,e,n){const s=Ju(t);ye(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=n_(e),{host:o,port:l}=W2(e),c=l===null?"":`:${l}`,u={url:`${r}//${o}${c}/`},d=Object.freeze({host:o,port:l,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){ye(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ye(Ws(u,s.config.emulator)&&Ws(d,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=u,s.emulatorConfig=d,s.settings.appVerificationDisabledForTesting=!0,ur(o)?(Rm(`${r}//${o}${c}`),Pm("Auth",!0)):z2()}function n_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function W2(t){const e=n_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Mf(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Mf(o)}}}function Mf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function z2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class s_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return fs("not implemented")}_getIdTokenResponse(e){return fs("not implemented")}_linkToIdToken(e,n){return fs("not implemented")}_getReauthenticationResolver(e){return fs("not implemented")}}/**
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
 */async function zi(t,e){return E2(t,"POST","/v1/accounts:signInWithIdp",zu(t,e))}/**
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
 */const K2="http://localhost";class vi extends s_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new vi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):As("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i,...r}=n;if(!s||!i)return null;const o=new vi(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,zi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zi(e,n)}buildRequest(){const e={requestUri:K2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Io(n)}return e}}/**
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
 */class i_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Eo extends i_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Os extends Eo{constructor(){super("facebook.com")}static credential(e){return vi._fromParams({providerId:Os.PROVIDER_ID,signInMethod:Os.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Os.credentialFromTaggedObject(e)}static credentialFromError(e){return Os.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Os.credential(e.oauthAccessToken)}catch{return null}}}Os.FACEBOOK_SIGN_IN_METHOD="facebook.com";Os.PROVIDER_ID="facebook.com";/**
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
 */class hs extends Eo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return vi._fromParams({providerId:hs.PROVIDER_ID,signInMethod:hs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hs.credentialFromTaggedObject(e)}static credentialFromError(e){return hs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return hs.credential(n,s)}catch{return null}}}hs.GOOGLE_SIGN_IN_METHOD="google.com";hs.PROVIDER_ID="google.com";/**
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
 */class Vs extends Eo{constructor(){super("github.com")}static credential(e){return vi._fromParams({providerId:Vs.PROVIDER_ID,signInMethod:Vs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vs.credentialFromTaggedObject(e)}static credentialFromError(e){return Vs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vs.credential(e.oauthAccessToken)}catch{return null}}}Vs.GITHUB_SIGN_IN_METHOD="github.com";Vs.PROVIDER_ID="github.com";/**
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
 */class Ls extends Eo{constructor(){super("twitter.com")}static credential(e,n){return vi._fromParams({providerId:Ls.PROVIDER_ID,signInMethod:Ls.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ls.credentialFromTaggedObject(e)}static credentialFromError(e){return Ls.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Ls.credential(n,s)}catch{return null}}}Ls.TWITTER_SIGN_IN_METHOD="twitter.com";Ls.PROVIDER_ID="twitter.com";/**
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
 */class tr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Nn._fromIdTokenResponse(e,s,i),o=Of(s);return new tr({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Of(s);return new tr({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Of(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Sa extends Bn{constructor(e,n,s,i){super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Sa.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Sa(e,n,s,i)}}function r_(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Sa._fromErrorAndOperation(t,r,e,s):r})}async function Y2(t,e,n=!1){const s=await ao(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return tr._forOperation(t,"link",s)}/**
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
 */async function J2(t,e,n=!1){const{auth:s}=t;if(qn(s.app))return Promise.reject(gi(s));const i="reauthenticate";try{const r=await ao(t,r_(s,i,e,t),n);ye(r.idToken,s,"internal-error");const o=Ku(r.idToken);ye(o,s,"internal-error");const{sub:l}=o;return ye(t.uid===l,s,"user-mismatch"),tr._forOperation(t,i,r)}catch(r){throw r?.code==="auth/user-not-found"&&As(s,"user-mismatch"),r}}/**
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
 */async function X2(t,e,n=!1){if(qn(t.app))return Promise.reject(gi(t));const s="signIn",i=await r_(t,s,e),r=await tr._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function Z2(t,e,n,s){return vn(t).onIdTokenChanged(e,n,s)}function ek(t,e,n){return vn(t).beforeAuthStateChanged(e,n)}function tk(t){return vn(t).signOut()}const Ra="__sak";/**
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
 */class o_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ra,"1"),this.storage.removeItem(Ra),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const nk=1e3,sk=10;class a_ extends o_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=e_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);M2()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,sk):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},nk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}a_.type="LOCAL";const ik=a_;/**
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
 */class l_ extends o_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}l_.type="SESSION";const c_=l_;/**
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
 */function rk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class il{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new il(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,r)),c=await rk(l);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}il.receivers=[];/**
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
 */function Zu(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class ok{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((l,c)=>{const u=Zu("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),l(m.data.response);break;default:clearTimeout(d),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Kn(){return window}function ak(t){Kn().location.href=t}/**
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
 */function u_(){return typeof Kn().WorkerGlobalScope<"u"&&typeof Kn().importScripts=="function"}async function lk(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ck(){return navigator?.serviceWorker?.controller||null}function uk(){return u_()?self:null}/**
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
 */const h_="firebaseLocalStorageDb",hk=1,Pa="firebaseLocalStorage",d_="fbase_key";class To{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rl(t,e){return t.transaction([Pa],e?"readwrite":"readonly").objectStore(Pa)}function dk(){const t=indexedDB.deleteDatabase(h_);return new To(t).toPromise()}function Rc(){const t=indexedDB.open(h_,hk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Pa,{keyPath:d_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Pa)?e(s):(s.close(),await dk(),e(await Rc()))})})}async function Vf(t,e,n){const s=rl(t,!0).put({[d_]:e,value:n});return new To(s).toPromise()}async function fk(t,e){const n=rl(t,!1).get(e),s=await new To(n).toPromise();return s===void 0?null:s.value}function Lf(t,e){const n=rl(t,!0).delete(e);return new To(n).toPromise()}const pk=800,gk=3;class f_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>gk)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return u_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=il._getInstance(uk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await lk(),!this.activeServiceWorker)return;this.sender=new ok(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ck()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rc();return await Vf(e,Ra,"1"),await Lf(e,Ra),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Vf(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>fk(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Lf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=rl(i,!1).getAll();return new To(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}f_.type="LOCAL";const mk=f_;new wo(3e4,6e4);/**
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
 */function _k(t,e){return e?ps(e):(ye(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class eh extends s_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function vk(t){return X2(t.auth,new eh(t),t.bypassAuthState)}function yk(t){const{auth:e,user:n}=t;return ye(n,e,"internal-error"),J2(n,new eh(t),t.bypassAuthState)}async function Ak(t){const{auth:e,user:n}=t;return ye(n,e,"internal-error"),Y2(n,new eh(t),t.bypassAuthState)}/**
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
 */class p_{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vk;case"linkViaPopup":case"linkViaRedirect":return Ak;case"reauthViaPopup":case"reauthViaRedirect":return yk;default:As(this.auth,"internal-error")}}resolve(e){Is(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Is(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ik=new wo(2e3,1e4);class Ui extends p_{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Ui.currentPopupAction&&Ui.currentPopupAction.cancel(),Ui.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ye(e,this.auth,"internal-error"),e}async onExecution(){Is(this.filter.length===1,"Popup operations only handle one event");const e=Zu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(zn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(zn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ui.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(zn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ik.get())};e()}}Ui.currentPopupAction=null;/**
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
 */const wk="pendingRedirect",na=new Map;class Ek extends p_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=na.get(this.auth._key());if(!e){try{const s=await Tk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}na.set(this.auth._key(),e)}return this.bypassAuthState||na.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Tk(t,e){const n=Sk(e),s=bk(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function Ck(t,e){na.set(t._key(),e)}function bk(t){return ps(t._redirectPersistence)}function Sk(t){return ta(wk,t.config.apiKey,t.name)}async function Rk(t,e,n=!1){if(qn(t.app))return Promise.reject(gi(t));const s=Ju(t),i=_k(s,e),o=await new Ek(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const Pk=600*1e3;class kk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Dk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!g_(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";n.onError(zn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Pk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bf(e))}saveEventToCache(e){this.cachedEventUids.add(Bf(e)),this.lastProcessedEventTime=Date.now()}}function Bf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function g_({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function Dk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return g_(t);default:return!1}}/**
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
 */async function xk(t,e={}){return dr(t,"GET","/v1/projects",e)}/**
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
 */const Nk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Mk=/^https?/;async function Ok(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xk(t);for(const n of e)try{if(Vk(n))return}catch{}As(t,"unauthorized-domain")}function Vk(t){const e=bc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Mk.test(n))return!1;if(Nk.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const Lk=new wo(3e4,6e4);function Ff(){const t=Kn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Bk(t){return new Promise((e,n)=>{function s(){Ff(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ff(),n(zn(t,"network-request-failed"))},timeout:Lk.get()})}if(Kn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Kn().gapi?.load)s();else{const i=j2("iframefcb");return Kn()[i]=()=>{gapi.load?s():n(zn(t,"network-request-failed"))},$2(`${H2()}?onload=${i}`).catch(r=>n(r))}}).catch(e=>{throw sa=null,e})}let sa=null;function Fk(t){return sa=sa||Bk(t),sa}/**
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
 */const Uk=new wo(5e3,15e3),$k="__/auth/iframe",Hk="emulator/auth/iframe",jk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Gk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qk(t){const e=t.config;ye(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Wu(e,Hk):`https://${t.config.authDomain}/${$k}`,s={apiKey:e.apiKey,appName:t.name,v:hr},i=Gk.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Io(s).slice(1)}`}async function Qk(t){const e=await Fk(t),n=Kn().gapi;return ye(n,t,"internal-error"),e.open({where:document.body,url:qk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jk,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=zn(t,"network-request-failed"),l=Kn().setTimeout(()=>{r(o)},Uk.get());function c(){Kn().clearTimeout(l),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const Wk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zk=500,Kk=600,Yk="_blank",Jk="http://localhost";class Uf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Xk(t,e,n,s=zk,i=Kk){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const c={...Wk,width:s.toString(),height:i.toString(),top:r,left:o},u=rn().toLowerCase();n&&(l=Km(u)?Yk:n),Wm(u)&&(e=e||Jk,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[_,w])=>`${m}${_}=${w},`,"");if(N2(u)&&l!=="_self")return Zk(e||"",l),new Uf(null);const p=window.open(e||"",l,d);ye(p,t,"popup-blocked");try{p.focus()}catch{}return new Uf(p)}function Zk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const eD="__/auth/handler",tD="emulator/auth/handler",nD=encodeURIComponent("fac");async function $f(t,e,n,s,i,r){ye(t.config.authDomain,t,"auth-domain-config-required"),ye(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:hr,eventId:i};if(e instanceof i_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",XR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Eo){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),u=c?`#${nD}=${encodeURIComponent(c)}`:"";return`${sD(t)}?${Io(l).slice(1)}${u}`}function sD({config:t}){return t.emulator?Wu(t,tD):`https://${t.authDomain}/${eD}`}/**
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
 */const Jl="webStorageSupport";class iD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=c_,this._completeRedirectFn=Rk,this._overrideRedirectResult=Ck}async _openPopup(e,n,s,i){Is(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const r=await $f(e,n,s,bc(),i);return Xk(e,r,Zu())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await $f(e,n,s,bc(),i);return ak(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Is(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Qk(e),s=new kk(e);return n.register("authEvent",i=>(ye(i?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Jl,{type:Jl},i=>{const r=i?.[0]?.[Jl];r!==void 0&&n(!!r),As(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ok(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return e_()||zm()||Yu()}}const rD=iD;var Hf="@firebase/auth",jf="1.11.1";/**
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
 */class oD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ye(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function aD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function lD(t){ns(new Ln("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=s.options;ye(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:t_(t)},u=new F2(s,i,r,c);return q2(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ns(new Ln("auth-internal",e=>{const n=Ju(e.getProvider("auth").getImmediate());return(s=>new oD(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dn(Hf,jf,aD(t)),Dn(Hf,jf,"esm2020")}/**
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
 */const cD=300,uD=Sm("authIdTokenMaxAge")||cD;let Gf=null;const hD=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>uD)return;const i=n?.token;Gf!==i&&(Gf=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function dD(t=qu()){const e=Ci(t,"auth");if(e.isInitialized())return e.getImmediate();const n=G2(t,{popupRedirectResolver:rD,persistence:[mk,ik,c_]}),s=Sm("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=hD(r.toString());ek(n,o,()=>o(n.currentUser)),Z2(n,l=>o(l))}}const i=Cm("auth");return i&&Q2(n,`http://${i}`),n}function fD(){return document.getElementsByTagName("head")?.[0]??document}U2({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=zn("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",fD().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});lD("Browser");var qf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hs,m_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,A){function T(){}T.prototype=A.prototype,S.F=A.prototype,S.prototype=new T,S.prototype.constructor=S,S.D=function(P,R,N){for(var E=Array(arguments.length-2),st=2;st<arguments.length;st++)E[st-2]=arguments[st];return A.prototype[R].apply(P,E)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,n),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(S,A,T){T||(T=0);const P=Array(16);if(typeof A=="string")for(var R=0;R<16;++R)P[R]=A.charCodeAt(T++)|A.charCodeAt(T++)<<8|A.charCodeAt(T++)<<16|A.charCodeAt(T++)<<24;else for(R=0;R<16;++R)P[R]=A[T++]|A[T++]<<8|A[T++]<<16|A[T++]<<24;A=S.g[0],T=S.g[1],R=S.g[2];let N=S.g[3],E;E=A+(N^T&(R^N))+P[0]+3614090360&4294967295,A=T+(E<<7&4294967295|E>>>25),E=N+(R^A&(T^R))+P[1]+3905402710&4294967295,N=A+(E<<12&4294967295|E>>>20),E=R+(T^N&(A^T))+P[2]+606105819&4294967295,R=N+(E<<17&4294967295|E>>>15),E=T+(A^R&(N^A))+P[3]+3250441966&4294967295,T=R+(E<<22&4294967295|E>>>10),E=A+(N^T&(R^N))+P[4]+4118548399&4294967295,A=T+(E<<7&4294967295|E>>>25),E=N+(R^A&(T^R))+P[5]+1200080426&4294967295,N=A+(E<<12&4294967295|E>>>20),E=R+(T^N&(A^T))+P[6]+2821735955&4294967295,R=N+(E<<17&4294967295|E>>>15),E=T+(A^R&(N^A))+P[7]+4249261313&4294967295,T=R+(E<<22&4294967295|E>>>10),E=A+(N^T&(R^N))+P[8]+1770035416&4294967295,A=T+(E<<7&4294967295|E>>>25),E=N+(R^A&(T^R))+P[9]+2336552879&4294967295,N=A+(E<<12&4294967295|E>>>20),E=R+(T^N&(A^T))+P[10]+4294925233&4294967295,R=N+(E<<17&4294967295|E>>>15),E=T+(A^R&(N^A))+P[11]+2304563134&4294967295,T=R+(E<<22&4294967295|E>>>10),E=A+(N^T&(R^N))+P[12]+1804603682&4294967295,A=T+(E<<7&4294967295|E>>>25),E=N+(R^A&(T^R))+P[13]+4254626195&4294967295,N=A+(E<<12&4294967295|E>>>20),E=R+(T^N&(A^T))+P[14]+2792965006&4294967295,R=N+(E<<17&4294967295|E>>>15),E=T+(A^R&(N^A))+P[15]+1236535329&4294967295,T=R+(E<<22&4294967295|E>>>10),E=A+(R^N&(T^R))+P[1]+4129170786&4294967295,A=T+(E<<5&4294967295|E>>>27),E=N+(T^R&(A^T))+P[6]+3225465664&4294967295,N=A+(E<<9&4294967295|E>>>23),E=R+(A^T&(N^A))+P[11]+643717713&4294967295,R=N+(E<<14&4294967295|E>>>18),E=T+(N^A&(R^N))+P[0]+3921069994&4294967295,T=R+(E<<20&4294967295|E>>>12),E=A+(R^N&(T^R))+P[5]+3593408605&4294967295,A=T+(E<<5&4294967295|E>>>27),E=N+(T^R&(A^T))+P[10]+38016083&4294967295,N=A+(E<<9&4294967295|E>>>23),E=R+(A^T&(N^A))+P[15]+3634488961&4294967295,R=N+(E<<14&4294967295|E>>>18),E=T+(N^A&(R^N))+P[4]+3889429448&4294967295,T=R+(E<<20&4294967295|E>>>12),E=A+(R^N&(T^R))+P[9]+568446438&4294967295,A=T+(E<<5&4294967295|E>>>27),E=N+(T^R&(A^T))+P[14]+3275163606&4294967295,N=A+(E<<9&4294967295|E>>>23),E=R+(A^T&(N^A))+P[3]+4107603335&4294967295,R=N+(E<<14&4294967295|E>>>18),E=T+(N^A&(R^N))+P[8]+1163531501&4294967295,T=R+(E<<20&4294967295|E>>>12),E=A+(R^N&(T^R))+P[13]+2850285829&4294967295,A=T+(E<<5&4294967295|E>>>27),E=N+(T^R&(A^T))+P[2]+4243563512&4294967295,N=A+(E<<9&4294967295|E>>>23),E=R+(A^T&(N^A))+P[7]+1735328473&4294967295,R=N+(E<<14&4294967295|E>>>18),E=T+(N^A&(R^N))+P[12]+2368359562&4294967295,T=R+(E<<20&4294967295|E>>>12),E=A+(T^R^N)+P[5]+4294588738&4294967295,A=T+(E<<4&4294967295|E>>>28),E=N+(A^T^R)+P[8]+2272392833&4294967295,N=A+(E<<11&4294967295|E>>>21),E=R+(N^A^T)+P[11]+1839030562&4294967295,R=N+(E<<16&4294967295|E>>>16),E=T+(R^N^A)+P[14]+4259657740&4294967295,T=R+(E<<23&4294967295|E>>>9),E=A+(T^R^N)+P[1]+2763975236&4294967295,A=T+(E<<4&4294967295|E>>>28),E=N+(A^T^R)+P[4]+1272893353&4294967295,N=A+(E<<11&4294967295|E>>>21),E=R+(N^A^T)+P[7]+4139469664&4294967295,R=N+(E<<16&4294967295|E>>>16),E=T+(R^N^A)+P[10]+3200236656&4294967295,T=R+(E<<23&4294967295|E>>>9),E=A+(T^R^N)+P[13]+681279174&4294967295,A=T+(E<<4&4294967295|E>>>28),E=N+(A^T^R)+P[0]+3936430074&4294967295,N=A+(E<<11&4294967295|E>>>21),E=R+(N^A^T)+P[3]+3572445317&4294967295,R=N+(E<<16&4294967295|E>>>16),E=T+(R^N^A)+P[6]+76029189&4294967295,T=R+(E<<23&4294967295|E>>>9),E=A+(T^R^N)+P[9]+3654602809&4294967295,A=T+(E<<4&4294967295|E>>>28),E=N+(A^T^R)+P[12]+3873151461&4294967295,N=A+(E<<11&4294967295|E>>>21),E=R+(N^A^T)+P[15]+530742520&4294967295,R=N+(E<<16&4294967295|E>>>16),E=T+(R^N^A)+P[2]+3299628645&4294967295,T=R+(E<<23&4294967295|E>>>9),E=A+(R^(T|~N))+P[0]+4096336452&4294967295,A=T+(E<<6&4294967295|E>>>26),E=N+(T^(A|~R))+P[7]+1126891415&4294967295,N=A+(E<<10&4294967295|E>>>22),E=R+(A^(N|~T))+P[14]+2878612391&4294967295,R=N+(E<<15&4294967295|E>>>17),E=T+(N^(R|~A))+P[5]+4237533241&4294967295,T=R+(E<<21&4294967295|E>>>11),E=A+(R^(T|~N))+P[12]+1700485571&4294967295,A=T+(E<<6&4294967295|E>>>26),E=N+(T^(A|~R))+P[3]+2399980690&4294967295,N=A+(E<<10&4294967295|E>>>22),E=R+(A^(N|~T))+P[10]+4293915773&4294967295,R=N+(E<<15&4294967295|E>>>17),E=T+(N^(R|~A))+P[1]+2240044497&4294967295,T=R+(E<<21&4294967295|E>>>11),E=A+(R^(T|~N))+P[8]+1873313359&4294967295,A=T+(E<<6&4294967295|E>>>26),E=N+(T^(A|~R))+P[15]+4264355552&4294967295,N=A+(E<<10&4294967295|E>>>22),E=R+(A^(N|~T))+P[6]+2734768916&4294967295,R=N+(E<<15&4294967295|E>>>17),E=T+(N^(R|~A))+P[13]+1309151649&4294967295,T=R+(E<<21&4294967295|E>>>11),E=A+(R^(T|~N))+P[4]+4149444226&4294967295,A=T+(E<<6&4294967295|E>>>26),E=N+(T^(A|~R))+P[11]+3174756917&4294967295,N=A+(E<<10&4294967295|E>>>22),E=R+(A^(N|~T))+P[2]+718787259&4294967295,R=N+(E<<15&4294967295|E>>>17),E=T+(N^(R|~A))+P[9]+3951481745&4294967295,S.g[0]=S.g[0]+A&4294967295,S.g[1]=S.g[1]+(R+(E<<21&4294967295|E>>>11))&4294967295,S.g[2]=S.g[2]+R&4294967295,S.g[3]=S.g[3]+N&4294967295}s.prototype.v=function(S,A){A===void 0&&(A=S.length);const T=A-this.blockSize,P=this.C;let R=this.h,N=0;for(;N<A;){if(R==0)for(;N<=T;)i(this,S,N),N+=this.blockSize;if(typeof S=="string"){for(;N<A;)if(P[R++]=S.charCodeAt(N++),R==this.blockSize){i(this,P),R=0;break}}else for(;N<A;)if(P[R++]=S[N++],R==this.blockSize){i(this,P),R=0;break}}this.h=R,this.o+=A},s.prototype.A=function(){var S=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);S[0]=128;for(var A=1;A<S.length-8;++A)S[A]=0;A=this.o*8;for(var T=S.length-8;T<S.length;++T)S[T]=A&255,A/=256;for(this.v(S),S=Array(16),A=0,T=0;T<4;++T)for(let P=0;P<32;P+=8)S[A++]=this.g[T]>>>P&255;return S};function r(S,A){var T=l;return Object.prototype.hasOwnProperty.call(T,S)?T[S]:T[S]=A(S)}function o(S,A){this.h=A;const T=[];let P=!0;for(let R=S.length-1;R>=0;R--){const N=S[R]|0;P&&N==A||(T[R]=N,P=!1)}this.g=T}var l={};function c(S){return-128<=S&&S<128?r(S,function(A){return new o([A|0],A<0?-1:0)}):new o([S|0],S<0?-1:0)}function u(S){if(isNaN(S)||!isFinite(S))return p;if(S<0)return I(u(-S));const A=[];let T=1;for(let P=0;S>=T;P++)A[P]=S/T|0,T*=4294967296;return new o(A,0)}function d(S,A){if(S.length==0)throw Error("number format error: empty string");if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(S.charAt(0)=="-")return I(d(S.substring(1),A));if(S.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=u(Math.pow(A,8));let P=p;for(let N=0;N<S.length;N+=8){var R=Math.min(8,S.length-N);const E=parseInt(S.substring(N,N+R),A);R<8?(R=u(Math.pow(A,R)),P=P.j(R).add(u(E))):(P=P.j(T),P=P.add(u(E)))}return P}var p=c(0),m=c(1),_=c(16777216);t=o.prototype,t.m=function(){if(b(this))return-I(this).m();let S=0,A=1;for(let T=0;T<this.g.length;T++){const P=this.i(T);S+=(P>=0?P:4294967296+P)*A,A*=4294967296}return S},t.toString=function(S){if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(w(this))return"0";if(b(this))return"-"+I(this).toString(S);const A=u(Math.pow(S,6));var T=this;let P="";for(;;){const R=j(T,A).g;T=x(T,R.j(A));let N=((T.g.length>0?T.g[0]:T.h)>>>0).toString(S);if(T=R,w(T))return N+P;for(;N.length<6;)N="0"+N;P=N+P}},t.i=function(S){return S<0?0:S<this.g.length?this.g[S]:this.h};function w(S){if(S.h!=0)return!1;for(let A=0;A<S.g.length;A++)if(S.g[A]!=0)return!1;return!0}function b(S){return S.h==-1}t.l=function(S){return S=x(this,S),b(S)?-1:w(S)?0:1};function I(S){const A=S.g.length,T=[];for(let P=0;P<A;P++)T[P]=~S.g[P];return new o(T,~S.h).add(m)}t.abs=function(){return b(this)?I(this):this},t.add=function(S){const A=Math.max(this.g.length,S.g.length),T=[];let P=0;for(let R=0;R<=A;R++){let N=P+(this.i(R)&65535)+(S.i(R)&65535),E=(N>>>16)+(this.i(R)>>>16)+(S.i(R)>>>16);P=E>>>16,N&=65535,E&=65535,T[R]=E<<16|N}return new o(T,T[T.length-1]&-2147483648?-1:0)};function x(S,A){return S.add(I(A))}t.j=function(S){if(w(this)||w(S))return p;if(b(this))return b(S)?I(this).j(I(S)):I(I(this).j(S));if(b(S))return I(this.j(I(S)));if(this.l(_)<0&&S.l(_)<0)return u(this.m()*S.m());const A=this.g.length+S.g.length,T=[];for(var P=0;P<2*A;P++)T[P]=0;for(P=0;P<this.g.length;P++)for(let R=0;R<S.g.length;R++){const N=this.i(P)>>>16,E=this.i(P)&65535,st=S.i(R)>>>16,vt=S.i(R)&65535;T[2*P+2*R]+=E*vt,U(T,2*P+2*R),T[2*P+2*R+1]+=N*vt,U(T,2*P+2*R+1),T[2*P+2*R+1]+=E*st,U(T,2*P+2*R+1),T[2*P+2*R+2]+=N*st,U(T,2*P+2*R+2)}for(S=0;S<A;S++)T[S]=T[2*S+1]<<16|T[2*S];for(S=A;S<2*A;S++)T[S]=0;return new o(T,0)};function U(S,A){for(;(S[A]&65535)!=S[A];)S[A+1]+=S[A]>>>16,S[A]&=65535,A++}function F(S,A){this.g=S,this.h=A}function j(S,A){if(w(A))throw Error("division by zero");if(w(S))return new F(p,p);if(b(S))return A=j(I(S),A),new F(I(A.g),I(A.h));if(b(A))return A=j(S,I(A)),new F(I(A.g),A.h);if(S.g.length>30){if(b(S)||b(A))throw Error("slowDivide_ only works with positive integers.");for(var T=m,P=A;P.l(S)<=0;)T=se(T),P=se(P);var R=Ie(T,1),N=Ie(P,1);for(P=Ie(P,2),T=Ie(T,2);!w(P);){var E=N.add(P);E.l(S)<=0&&(R=R.add(T),N=E),P=Ie(P,1),T=Ie(T,1)}return A=x(S,R.j(A)),new F(R,A)}for(R=p;S.l(A)>=0;){for(T=Math.max(1,Math.floor(S.m()/A.m())),P=Math.ceil(Math.log(T)/Math.LN2),P=P<=48?1:Math.pow(2,P-48),N=u(T),E=N.j(A);b(E)||E.l(S)>0;)T-=P,N=u(T),E=N.j(A);w(N)&&(N=m),R=R.add(N),S=x(S,E)}return new F(R,S)}t.B=function(S){return j(this,S).h},t.and=function(S){const A=Math.max(this.g.length,S.g.length),T=[];for(let P=0;P<A;P++)T[P]=this.i(P)&S.i(P);return new o(T,this.h&S.h)},t.or=function(S){const A=Math.max(this.g.length,S.g.length),T=[];for(let P=0;P<A;P++)T[P]=this.i(P)|S.i(P);return new o(T,this.h|S.h)},t.xor=function(S){const A=Math.max(this.g.length,S.g.length),T=[];for(let P=0;P<A;P++)T[P]=this.i(P)^S.i(P);return new o(T,this.h^S.h)};function se(S){const A=S.g.length+1,T=[];for(let P=0;P<A;P++)T[P]=S.i(P)<<1|S.i(P-1)>>>31;return new o(T,S.h)}function Ie(S,A){const T=A>>5;A%=32;const P=S.g.length-T,R=[];for(let N=0;N<P;N++)R[N]=A>0?S.i(N+T)>>>A|S.i(N+T+1)<<32-A:S.i(N+T);return new o(R,S.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,m_=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Hs=o}).apply(typeof qf<"u"?qf:typeof self<"u"?self:typeof window<"u"?window:{});var Go=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var __,Nr,v_,ia,Pc,y_,A_,I_;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Go=="object"&&Go];for(var f=0;f<a.length;++f){var g=a[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=n(this);function i(a,f){if(f)e:{var g=s;a=a.split(".");for(var v=0;v<a.length-1;v++){var V=a[v];if(!(V in g))break e;g=g[V]}a=a[a.length-1],v=g[a],f=f(v),f!=v&&f!=null&&e(g,a,{configurable:!0,writable:!0,value:f})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(f){var g=[],v;for(v in f)Object.prototype.hasOwnProperty.call(f,v)&&g.push([v,f[v]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var r=r||{},o=this||self;function l(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function c(a,f,g){return a.call.apply(a.bind,arguments)}function u(a,f,g){return u=c,u.apply(null,arguments)}function d(a,f){var g=Array.prototype.slice.call(arguments,1);return function(){var v=g.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function p(a,f){function g(){}g.prototype=f.prototype,a.Z=f.prototype,a.prototype=new g,a.prototype.constructor=a,a.Ob=function(v,V,$){for(var ne=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)ne[Re-2]=arguments[Re];return f.prototype[V].apply(v,ne)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function _(a){const f=a.length;if(f>0){const g=Array(f);for(let v=0;v<f;v++)g[v]=a[v];return g}return[]}function w(a,f){for(let v=1;v<arguments.length;v++){const V=arguments[v];var g=typeof V;if(g=g!="object"?g:V?Array.isArray(V)?"array":g:"null",g=="array"||g=="object"&&typeof V.length=="number"){g=a.length||0;const $=V.length||0;a.length=g+$;for(let ne=0;ne<$;ne++)a[g+ne]=V[ne]}else a.push(V)}}class b{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return this.h>0?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function I(a){o.setTimeout(()=>{throw a},0)}function x(){var a=S;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class U{constructor(){this.h=this.g=null}add(f,g){const v=F.get();v.set(f,g),this.h?this.h.next=v:this.g=v,this.h=v}}var F=new b(()=>new j,a=>a.reset());class j{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let se,Ie=!1,S=new U,A=()=>{const a=Promise.resolve(void 0);se=()=>{a.then(T)}};function T(){for(var a;a=x();){try{a.h.call(a.g)}catch(g){I(g)}var f=F;f.j(a),f.h<100&&(f.h++,a.next=f.g,f.g=a)}Ie=!1}function P(){this.u=this.u,this.C=this.C}P.prototype.u=!1,P.prototype.dispose=function(){this.u||(this.u=!0,this.N())},P.prototype[Symbol.dispose]=function(){this.dispose()},P.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function R(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var N=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const g=()=>{};o.addEventListener("test",g,f),o.removeEventListener("test",g,f)}catch{}return a})();function E(a){return/^[\s\xa0]*$/.test(a)}function st(a,f){R.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,f)}p(st,R),st.prototype.init=function(a,f){const g=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget,f||(g=="mouseover"?f=a.fromElement:g=="mouseout"&&(f=a.toElement)),this.relatedTarget=f,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&st.Z.h.call(this)},st.prototype.h=function(){st.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var vt="closure_listenable_"+(Math.random()*1e6|0),it=0;function Ce(a,f,g,v,V){this.listener=a,this.proxy=null,this.src=f,this.type=g,this.capture=!!v,this.ha=V,this.key=++it,this.da=this.fa=!1}function be(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function kt(a,f,g){for(const v in a)f.call(g,a[v],v,a)}function Kt(a,f){for(const g in a)f.call(void 0,a[g],g,a)}function Lt(a){const f={};for(const g in a)f[g]=a[g];return f}const rt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Cn(a,f){let g,v;for(let V=1;V<arguments.length;V++){v=arguments[V];for(g in v)a[g]=v[g];for(let $=0;$<rt.length;$++)g=rt[$],Object.prototype.hasOwnProperty.call(v,g)&&(a[g]=v[g])}}function gn(a){this.src=a,this.g={},this.h=0}gn.prototype.add=function(a,f,g,v,V){const $=a.toString();a=this.g[$],a||(a=this.g[$]=[],this.h++);const ne=ot(a,f,v,V);return ne>-1?(f=a[ne],g||(f.fa=!1)):(f=new Ce(f,this.src,$,!!v,V),f.fa=g,a.push(f)),f};function Yt(a,f){const g=f.type;if(g in a.g){var v=a.g[g],V=Array.prototype.indexOf.call(v,f,void 0),$;($=V>=0)&&Array.prototype.splice.call(v,V,1),$&&(be(f),a.g[g].length==0&&(delete a.g[g],a.h--))}}function ot(a,f,g,v){for(let V=0;V<a.length;++V){const $=a[V];if(!$.da&&$.listener==f&&$.capture==!!g&&$.ha==v)return V}return-1}var q="closure_lm_"+(Math.random()*1e6|0),ae={};function te(a,f,g,v,V){if(Array.isArray(f)){for(let $=0;$<f.length;$++)te(a,f[$],g,v,V);return null}return g=ee(g),a&&a[vt]?a.J(f,g,l(v)?!!v.capture:!1,V):ue(a,f,g,!1,v,V)}function ue(a,f,g,v,V,$){if(!f)throw Error("Invalid event type");const ne=l(V)?!!V.capture:!!V;let Re=K(a);if(Re||(a[q]=Re=new gn(a)),g=Re.add(f,g,v,ne,$),g.proxy)return g;if(v=xe(),g.proxy=v,v.src=a,v.listener=g,a.addEventListener)N||(V=ne),V===void 0&&(V=!1),a.addEventListener(f.toString(),v,V);else if(a.attachEvent)a.attachEvent(M(f.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return g}function xe(){function a(g){return f.call(a.src,a.listener,g)}const f=Q;return a}function y(a,f,g,v,V){if(Array.isArray(f))for(var $=0;$<f.length;$++)y(a,f[$],g,v,V);else v=l(v)?!!v.capture:!!v,g=ee(g),a&&a[vt]?(a=a.i,$=String(f).toString(),$ in a.g&&(f=a.g[$],g=ot(f,g,v,V),g>-1&&(be(f[g]),Array.prototype.splice.call(f,g,1),f.length==0&&(delete a.g[$],a.h--)))):a&&(a=K(a))&&(f=a.g[f.toString()],a=-1,f&&(a=ot(f,g,v,V)),(g=a>-1?f[a]:null)&&C(g))}function C(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[vt])Yt(f.i,a);else{var g=a.type,v=a.proxy;f.removeEventListener?f.removeEventListener(g,v,a.capture):f.detachEvent?f.detachEvent(M(g),v):f.addListener&&f.removeListener&&f.removeListener(v),(g=K(f))?(Yt(g,a),g.h==0&&(g.src=null,f[q]=null)):be(a)}}}function M(a){return a in ae?ae[a]:ae[a]="on"+a}function Q(a,f){if(a.da)a=!0;else{f=new st(f,this);const g=a.listener,v=a.ha||a.src;a.fa&&C(a),a=g.call(v,f)}return a}function K(a){return a=a[q],a instanceof gn?a:null}var W="__closure_events_fn_"+(Math.random()*1e9>>>0);function ee(a){return typeof a=="function"?a:(a[W]||(a[W]=function(f){return a.handleEvent(f)}),a[W])}function J(){P.call(this),this.i=new gn(this),this.M=this,this.G=null}p(J,P),J.prototype[vt]=!0,J.prototype.removeEventListener=function(a,f,g,v){y(this,a,f,g,v)};function z(a,f){var g,v=a.G;if(v)for(g=[];v;v=v.G)g.push(v);if(a=a.M,v=f.type||f,typeof f=="string")f=new R(f,a);else if(f instanceof R)f.target=f.target||a;else{var V=f;f=new R(v,a),Cn(f,V)}V=!0;let $,ne;if(g)for(ne=g.length-1;ne>=0;ne--)$=f.g=g[ne],V=Z($,v,!0,f)&&V;if($=f.g=a,V=Z($,v,!0,f)&&V,V=Z($,v,!1,f)&&V,g)for(ne=0;ne<g.length;ne++)$=f.g=g[ne],V=Z($,v,!1,f)&&V}J.prototype.N=function(){if(J.Z.N.call(this),this.i){var a=this.i;for(const f in a.g){const g=a.g[f];for(let v=0;v<g.length;v++)be(g[v]);delete a.g[f],a.h--}}this.G=null},J.prototype.J=function(a,f,g,v){return this.i.add(String(a),f,!1,g,v)},J.prototype.K=function(a,f,g,v){return this.i.add(String(a),f,!0,g,v)};function Z(a,f,g,v){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();let V=!0;for(let $=0;$<f.length;++$){const ne=f[$];if(ne&&!ne.da&&ne.capture==g){const Re=ne.listener,xt=ne.ha||ne.src;ne.fa&&Yt(a.i,ne),V=Re.call(xt,v)!==!1&&V}}return V&&!v.defaultPrevented}function ge(a,f){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(f)>2147483647?-1:o.setTimeout(a,f||0)}function oe(a){a.g=ge(()=>{a.g=null,a.i&&(a.i=!1,oe(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class de extends P{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:oe(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pe(a){P.call(this),this.h=a,this.g={}}p(pe,P);var ke=[];function Ge(a){kt(a.g,function(f,g){this.g.hasOwnProperty(g)&&C(f)},a),a.g={}}pe.prototype.N=function(){pe.Z.N.call(this),Ge(this)},pe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ne=o.JSON.stringify,$e=o.JSON.parse,He=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function qe(){}function Ye(){}var wt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Et(){R.call(this,"d")}p(Et,R);function Fe(){R.call(this,"c")}p(Fe,R);var yt={},ei=null;function G(){return ei=ei||new J}yt.Ia="serverreachability";function k(a){R.call(this,yt.Ia,a)}p(k,R);function H(a){const f=G();z(f,new k(f))}yt.STAT_EVENT="statevent";function ie(a,f){R.call(this,yt.STAT_EVENT,a),this.stat=f}p(ie,R);function le(a){const f=G();z(f,new ie(f,a))}yt.Ja="timingevent";function re(a,f){R.call(this,yt.Ja,a),this.size=f}p(re,R);function De(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},f)}function Be(){this.g=!0}Be.prototype.ua=function(){this.g=!1};function at(a,f,g,v,V,$){a.info(function(){if(a.g)if($){var ne="",Re=$.split("&");for(let et=0;et<Re.length;et++){var xt=Re[et].split("=");if(xt.length>1){const Ft=xt[0];xt=xt[1];const Un=Ft.split("_");ne=Un.length>=2&&Un[1]=="type"?ne+(Ft+"="+xt+"&"):ne+(Ft+"=redacted&")}}}else ne=null;else ne=$;return"XMLHTTP REQ ("+v+") [attempt "+V+"]: "+f+`
`+g+`
`+ne})}function on(a,f,g,v,V,$,ne){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+V+"]: "+f+`
`+g+`
`+$+" "+ne})}function Ze(a,f,g,v){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+jt(a,g)+(v?" "+v:"")})}function Ht(a,f){a.info(function(){return"TIMEOUT: "+f})}Be.prototype.info=function(){};function jt(a,f){if(!a.g)return f;if(!f)return null;try{const $=JSON.parse(f);if($){for(a=0;a<$.length;a++)if(Array.isArray($[a])){var g=$[a];if(!(g.length<2)){var v=g[1];if(Array.isArray(v)&&!(v.length<1)){var V=v[0];if(V!="noop"&&V!="stop"&&V!="close")for(let ne=1;ne<v.length;ne++)v[ne]=""}}}}return Ne($)}catch{return f}}var Me={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},At={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},yn;function Bt(){}p(Bt,qe),Bt.prototype.g=function(){return new XMLHttpRequest},yn=new Bt;function lt(a){return encodeURIComponent(String(a))}function ct(a){var f=1;a=a.split(":");const g=[];for(;f>0&&a.length;)g.push(a.shift()),f--;return a.length&&g.push(a.join(":")),g}function Je(a,f,g,v){this.j=a,this.i=f,this.l=g,this.S=v||1,this.V=new pe(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Dt}function Dt(){this.i=null,this.g="",this.h=!1}var an={},ti={};function ki(a,f,g){a.M=1,a.A=Do(Fn(f)),a.u=g,a.R=!0,_r(a,null)}function _r(a,f){a.F=Date.now(),ko(a),a.B=Fn(a.A);var g=a.B,v=a.S;Array.isArray(v)||(v=[String(v)]),Jh(g.i,"t",v),a.C=0,g=a.j.L,a.h=new Dt,a.g=gd(a.j,g?f:null,!a.u),a.P>0&&(a.O=new de(u(a.Y,a,a.g),a.P)),f=a.V,g=a.g,v=a.ba;var V="readystatechange";Array.isArray(V)||(V&&(ke[0]=V.toString()),V=ke);for(let $=0;$<V.length;$++){const ne=te(g,V[$],v||f.handleEvent,!1,f.h||f);if(!ne)break;f.g[ne.key]=ne}f=a.J?Lt(a.J):{},a.u?(a.v||(a.v="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,f)):(a.v="GET",a.g.ea(a.B,a.v,null,f)),H(),at(a.i,a.v,a.B,a.l,a.S,a.u)}Je.prototype.ba=function(a){a=a.target;const f=this.O;f&&Ss(a)==3?f.j():this.Y(a)},Je.prototype.Y=function(a){try{if(a==this.g)e:{const Re=Ss(this.g),xt=this.g.ya(),et=this.g.ca();if(!(Re<3)&&(Re!=3||this.g&&(this.h.h||this.g.la()||id(this.g)))){this.K||Re!=4||xt==7||(xt==8||et<=0?H(3):H(2)),Il(this);var f=this.g.ca();this.X=f;var g=Al(this);if(this.o=f==200,on(this.i,this.v,this.B,this.l,this.S,Re,f),this.o){if(this.U&&!this.L){t:{if(this.g){var v,V=this.g;if((v=V.g?V.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(v)){var $=v;break t}}$=null}if(a=$)Ze(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,wl(this,a);else{this.o=!1,this.m=3,le(12),ni(this),vr(this);break e}}if(this.R){a=!0;let Ft;for(;!this.K&&this.C<g.length;)if(Ft=my(this,g),Ft==ti){Re==4&&(this.m=4,le(14),a=!1),Ze(this.i,this.l,null,"[Incomplete Response]");break}else if(Ft==an){this.m=4,le(15),Ze(this.i,this.l,g,"[Invalid Chunk]"),a=!1;break}else Ze(this.i,this.l,Ft,null),wl(this,Ft);if(Fh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Re!=4||g.length!=0||this.h.h||(this.m=1,le(16),a=!1),this.o=this.o&&a,!a)Ze(this.i,this.l,g,"[Invalid Chunked Response]"),ni(this),vr(this);else if(g.length>0&&!this.W){this.W=!0;var ne=this.j;ne.g==this&&ne.aa&&!ne.P&&(ne.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),kl(ne),ne.P=!0,le(11))}}else Ze(this.i,this.l,g,null),wl(this,g);Re==4&&ni(this),this.o&&!this.K&&(Re==4?hd(this.j,this):(this.o=!1,ko(this)))}else ky(this.g),f==400&&g.indexOf("Unknown SID")>0?(this.m=3,le(12)):(this.m=0,le(13)),ni(this),vr(this)}}}catch{}finally{}};function Al(a){if(!Fh(a))return a.g.la();const f=id(a.g);if(f==="")return"";let g="";const v=f.length,V=Ss(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return ni(a),vr(a),"";a.h.i=new o.TextDecoder}for(let $=0;$<v;$++)a.h.h=!0,g+=a.h.i.decode(f[$],{stream:!(V&&$==v-1)});return f.length=0,a.h.g+=g,a.C=0,a.h.g}function Fh(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function my(a,f){var g=a.C,v=f.indexOf(`
`,g);return v==-1?ti:(g=Number(f.substring(g,v)),isNaN(g)?an:(v+=1,v+g>f.length?ti:(f=f.slice(v,v+g),a.C=v+g,f)))}Je.prototype.cancel=function(){this.K=!0,ni(this)};function ko(a){a.T=Date.now()+a.H,Uh(a,a.H)}function Uh(a,f){if(a.D!=null)throw Error("WatchDog timer not null");a.D=De(u(a.aa,a),f)}function Il(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Je.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Ht(this.i,this.B),this.M!=2&&(H(),le(17)),ni(this),this.m=2,vr(this)):Uh(this,this.T-a)};function vr(a){a.j.I==0||a.K||hd(a.j,a)}function ni(a){Il(a);var f=a.O;f&&typeof f.dispose=="function"&&f.dispose(),a.O=null,Ge(a.V),a.g&&(f=a.g,a.g=null,f.abort(),f.dispose())}function wl(a,f){try{var g=a.j;if(g.I!=0&&(g.g==a||El(g.h,a))){if(!a.L&&El(g.h,a)&&g.I==3){try{var v=g.Ba.g.parse(f)}catch{v=null}if(Array.isArray(v)&&v.length==3){var V=v;if(V[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<a.F)Vo(g),Mo(g);else break e;Pl(g),le(18)}}else g.xa=V[1],0<g.xa-g.K&&V[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=De(u(g.Va,g),6e3));jh(g.h)<=1&&g.ta&&(g.ta=void 0)}else ii(g,11)}else if((a.L||g.g==a)&&Vo(g),!E(f))for(V=g.Ba.g.parse(f),f=0;f<V.length;f++){let et=V[f];const Ft=et[0];if(!(Ft<=g.K))if(g.K=Ft,et=et[1],g.I==2)if(et[0]=="c"){g.M=et[1],g.ba=et[2];const Un=et[3];Un!=null&&(g.ka=Un,g.j.info("VER="+g.ka));const ri=et[4];ri!=null&&(g.za=ri,g.j.info("SVER="+g.za));const Rs=et[5];Rs!=null&&typeof Rs=="number"&&Rs>0&&(v=1.5*Rs,g.O=v,g.j.info("backChannelRequestTimeoutMs_="+v)),v=g;const Ps=a.g;if(Ps){const Bo=Ps.g?Ps.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Bo){var $=v.h;$.g||Bo.indexOf("spdy")==-1&&Bo.indexOf("quic")==-1&&Bo.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(Tl($,$.h),$.h=null))}if(v.G){const Dl=Ps.g?Ps.g.getResponseHeader("X-HTTP-Session-Id"):null;Dl&&(v.wa=Dl,dt(v.J,v.G,Dl))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-a.F,g.j.info("Handshake RTT: "+g.T+"ms")),v=g;var ne=a;if(v.na=pd(v,v.L?v.ba:null,v.W),ne.L){Gh(v.h,ne);var Re=ne,xt=v.O;xt&&(Re.H=xt),Re.D&&(Il(Re),ko(Re)),v.g=ne}else cd(v);g.i.length>0&&Oo(g)}else et[0]!="stop"&&et[0]!="close"||ii(g,7);else g.I==3&&(et[0]=="stop"||et[0]=="close"?et[0]=="stop"?ii(g,7):Rl(g):et[0]!="noop"&&g.l&&g.l.qa(et),g.A=0)}}H(4)}catch{}}var _y=class{constructor(a,f){this.g=a,this.map=f}};function $h(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Hh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function jh(a){return a.h?1:a.g?a.g.size:0}function El(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function Tl(a,f){a.g?a.g.add(f):a.h=f}function Gh(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}$h.prototype.cancel=function(){if(this.i=qh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function qh(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const g of a.g.values())f=f.concat(g.G);return f}return _(a.i)}var Qh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vy(a,f){if(a){a=a.split("&");for(let g=0;g<a.length;g++){const v=a[g].indexOf("=");let V,$=null;v>=0?(V=a[g].substring(0,v),$=a[g].substring(v+1)):V=a[g],f(V,$?decodeURIComponent($.replace(/\+/g," ")):"")}}}function Cs(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let f;a instanceof Cs?(this.l=a.l,yr(this,a.j),this.o=a.o,this.g=a.g,Ar(this,a.u),this.h=a.h,Cl(this,Xh(a.i)),this.m=a.m):a&&(f=String(a).match(Qh))?(this.l=!1,yr(this,f[1]||"",!0),this.o=Ir(f[2]||""),this.g=Ir(f[3]||"",!0),Ar(this,f[4]),this.h=Ir(f[5]||"",!0),Cl(this,f[6]||"",!0),this.m=Ir(f[7]||"")):(this.l=!1,this.i=new Er(null,this.l))}Cs.prototype.toString=function(){const a=[];var f=this.j;f&&a.push(wr(f,Wh,!0),":");var g=this.g;return(g||f=="file")&&(a.push("//"),(f=this.o)&&a.push(wr(f,Wh,!0),"@"),a.push(lt(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&a.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&a.push("/"),a.push(wr(g,g.charAt(0)=="/"?Iy:Ay,!0))),(g=this.i.toString())&&a.push("?",g),(g=this.m)&&a.push("#",wr(g,Ey)),a.join("")},Cs.prototype.resolve=function(a){const f=Fn(this);let g=!!a.j;g?yr(f,a.j):g=!!a.o,g?f.o=a.o:g=!!a.g,g?f.g=a.g:g=a.u!=null;var v=a.h;if(g)Ar(f,a.u);else if(g=!!a.h){if(v.charAt(0)!="/")if(this.g&&!this.h)v="/"+v;else{var V=f.h.lastIndexOf("/");V!=-1&&(v=f.h.slice(0,V+1)+v)}if(V=v,V==".."||V==".")v="";else if(V.indexOf("./")!=-1||V.indexOf("/.")!=-1){v=V.lastIndexOf("/",0)==0,V=V.split("/");const $=[];for(let ne=0;ne<V.length;){const Re=V[ne++];Re=="."?v&&ne==V.length&&$.push(""):Re==".."?(($.length>1||$.length==1&&$[0]!="")&&$.pop(),v&&ne==V.length&&$.push("")):($.push(Re),v=!0)}v=$.join("/")}else v=V}return g?f.h=v:g=a.i.toString()!=="",g?Cl(f,Xh(a.i)):g=!!a.m,g&&(f.m=a.m),f};function Fn(a){return new Cs(a)}function yr(a,f,g){a.j=g?Ir(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function Ar(a,f){if(f){if(f=Number(f),isNaN(f)||f<0)throw Error("Bad port number "+f);a.u=f}else a.u=null}function Cl(a,f,g){f instanceof Er?(a.i=f,Ty(a.i,a.l)):(g||(f=wr(f,wy)),a.i=new Er(f,a.l))}function dt(a,f,g){a.i.set(f,g)}function Do(a){return dt(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Ir(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function wr(a,f,g){return typeof a=="string"?(a=encodeURI(a).replace(f,yy),g&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function yy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Wh=/[#\/\?@]/g,Ay=/[#\?:]/g,Iy=/[#\?]/g,wy=/[#\?@]/g,Ey=/#/g;function Er(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function si(a){a.g||(a.g=new Map,a.h=0,a.i&&vy(a.i,function(f,g){a.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}t=Er.prototype,t.add=function(a,f){si(this),this.i=null,a=Di(this,a);let g=this.g.get(a);return g||this.g.set(a,g=[]),g.push(f),this.h+=1,this};function zh(a,f){si(a),f=Di(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function Kh(a,f){return si(a),f=Di(a,f),a.g.has(f)}t.forEach=function(a,f){si(this),this.g.forEach(function(g,v){g.forEach(function(V){a.call(f,V,v,this)},this)},this)};function Yh(a,f){si(a);let g=[];if(typeof f=="string")Kh(a,f)&&(g=g.concat(a.g.get(Di(a,f))));else for(a=Array.from(a.g.values()),f=0;f<a.length;f++)g=g.concat(a[f]);return g}t.set=function(a,f){return si(this),this.i=null,a=Di(this,a),Kh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},t.get=function(a,f){return a?(a=Yh(this,a),a.length>0?String(a[0]):f):f};function Jh(a,f,g){zh(a,f),g.length>0&&(a.i=null,a.g.set(Di(a,f),_(g)),a.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(let v=0;v<f.length;v++){var g=f[v];const V=lt(g);g=Yh(this,g);for(let $=0;$<g.length;$++){let ne=V;g[$]!==""&&(ne+="="+lt(g[$])),a.push(ne)}}return this.i=a.join("&")};function Xh(a){const f=new Er;return f.i=a.i,a.g&&(f.g=new Map(a.g),f.h=a.h),f}function Di(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function Ty(a,f){f&&!a.j&&(si(a),a.i=null,a.g.forEach(function(g,v){const V=v.toLowerCase();v!=V&&(zh(this,v),Jh(this,V,g))},a)),a.j=f}function Cy(a,f){const g=new Be;if(o.Image){const v=new Image;v.onload=d(bs,g,"TestLoadImage: loaded",!0,f,v),v.onerror=d(bs,g,"TestLoadImage: error",!1,f,v),v.onabort=d(bs,g,"TestLoadImage: abort",!1,f,v),v.ontimeout=d(bs,g,"TestLoadImage: timeout",!1,f,v),o.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else f(!1)}function by(a,f){const g=new Be,v=new AbortController,V=setTimeout(()=>{v.abort(),bs(g,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:v.signal}).then($=>{clearTimeout(V),$.ok?bs(g,"TestPingServer: ok",!0,f):bs(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(V),bs(g,"TestPingServer: error",!1,f)})}function bs(a,f,g,v,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),v(g)}catch{}}function Sy(){this.g=new He}function bl(a){this.i=a.Sb||null,this.h=a.ab||!1}p(bl,qe),bl.prototype.g=function(){return new xo(this.i,this.h)};function xo(a,f){J.call(this),this.H=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(xo,J),t=xo.prototype,t.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=f,this.readyState=1,Cr(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const f={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(f.body=a),(this.H||o).fetch(new Request(this.D,f)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Tr(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Cr(this)),this.g&&(this.readyState=3,Cr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Zh(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Zh(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.B.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?Tr(this):Cr(this),this.readyState==3&&Zh(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Tr(this))},t.Na=function(a){this.g&&(this.response=a,Tr(this))},t.ga=function(){this.g&&Tr(this)};function Tr(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Cr(a)}t.setRequestHeader=function(a,f){this.A.append(a,f)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,a.push(g[0]+": "+g[1]),g=f.next();return a.join(`\r
`)};function Cr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(xo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ed(a){let f="";return kt(a,function(g,v){f+=v,f+=":",f+=g,f+=`\r
`}),f}function Sl(a,f,g){e:{for(v in g){var v=!1;break e}v=!0}v||(g=ed(g),typeof a=="string"?g!=null&&lt(g):dt(a,f,g))}function mt(a){J.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(mt,J);var Ry=/^https?$/i,Py=["POST","PUT"];t=mt.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,f,g,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():yn.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch($){td(this,$);return}if(a=g||"",g=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var V in v)g.set(V,v[V]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const $ of v.keys())g.set($,v.get($));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(g.keys()).find($=>$.toLowerCase()=="content-type"),V=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Py,f,void 0)>=0)||v||V||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,ne]of g)this.g.setRequestHeader($,ne);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch($){td(this,$)}};function td(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.o=5,nd(a),No(a)}function nd(a){a.A||(a.A=!0,z(a,"complete"),z(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,z(this,"complete"),z(this,"abort"),No(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),No(this,!0)),mt.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?sd(this):this.Xa())},t.Xa=function(){sd(this)};function sd(a){if(a.h&&typeof r<"u"){if(a.v&&Ss(a)==4)setTimeout(a.Ca.bind(a),0);else if(z(a,"readystatechange"),Ss(a)==4){a.h=!1;try{const $=a.ca();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var v;if(v=$===0){let ne=String(a.D).match(Qh)[1]||null;!ne&&o.self&&o.self.location&&(ne=o.self.location.protocol.slice(0,-1)),v=!Ry.test(ne?ne.toLowerCase():"")}g=v}if(g)z(a,"complete"),z(a,"success");else{a.o=6;try{var V=Ss(a)>2?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.ca()+"]",nd(a)}}finally{No(a)}}}}function No(a,f){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const g=a.g;a.g=null,f||z(a,"ready");try{g.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Ss(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Ss(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),$e(f)}};function id(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ky(a){const f={};a=(a.g&&Ss(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(E(a[v]))continue;var g=ct(a[v]);const V=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const $=f[V]||[];f[V]=$,$.push(g)}Kt(f,function(v){return v.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function br(a,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[a]||f}function rd(a){this.za=0,this.i=[],this.j=new Be,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=br("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=br("baseRetryDelayMs",5e3,a),this.Za=br("retryDelaySeedMs",1e4,a),this.Ta=br("forwardChannelMaxRetries",2,a),this.va=br("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new $h(a&&a.concurrentRequestLimit),this.Ba=new Sy,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=rd.prototype,t.ka=8,t.I=1,t.connect=function(a,f,g,v){le(0),this.W=a,this.H=f||{},g&&v!==void 0&&(this.H.OSID=g,this.H.OAID=v),this.F=this.X,this.J=pd(this,null,this.W),Oo(this)};function Rl(a){if(od(a),a.I==3){var f=a.V++,g=Fn(a.J);if(dt(g,"SID",a.M),dt(g,"RID",f),dt(g,"TYPE","terminate"),Sr(a,g),f=new Je(a,a.j,f),f.M=2,f.A=Do(Fn(g)),g=!1,o.navigator&&o.navigator.sendBeacon)try{g=o.navigator.sendBeacon(f.A.toString(),"")}catch{}!g&&o.Image&&(new Image().src=f.A,g=!0),g||(f.g=gd(f.j,null),f.g.ea(f.A)),f.F=Date.now(),ko(f)}fd(a)}function Mo(a){a.g&&(kl(a),a.g.cancel(),a.g=null)}function od(a){Mo(a),a.v&&(o.clearTimeout(a.v),a.v=null),Vo(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Oo(a){if(!Hh(a.h)&&!a.m){a.m=!0;var f=a.Ea;se||A(),Ie||(se(),Ie=!0),S.add(f,a),a.D=0}}function Dy(a,f){return jh(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=f.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=De(u(a.Ea,a,f),dd(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const V=new Je(this,this.j,a);let $=this.o;if(this.U&&($?($=Lt($),Cn($,this.U)):$=this.U),this.u!==null||this.R||(V.J=$,$=null),this.S)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var v=this.i[g];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(f+=v,f>4096){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=ld(this,V,f),g=Fn(this.J),dt(g,"RID",a),dt(g,"CVER",22),this.G&&dt(g,"X-HTTP-Session-Id",this.G),Sr(this,g),$&&(this.R?f="headers="+lt(ed($))+"&"+f:this.u&&Sl(g,this.u,$)),Tl(this.h,V),this.Ra&&dt(g,"TYPE","init"),this.S?(dt(g,"$req",f),dt(g,"SID","null"),V.U=!0,ki(V,g,null)):ki(V,g,f),this.I=2}}else this.I==3&&(a?ad(this,a):this.i.length==0||Hh(this.h)||ad(this))};function ad(a,f){var g;f?g=f.l:g=a.V++;const v=Fn(a.J);dt(v,"SID",a.M),dt(v,"RID",g),dt(v,"AID",a.K),Sr(a,v),a.u&&a.o&&Sl(v,a.u,a.o),g=new Je(a,a.j,g,a.D+1),a.u===null&&(g.J=a.o),f&&(a.i=f.G.concat(a.i)),f=ld(a,g,1e3),g.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Tl(a.h,g),ki(g,v,f)}function Sr(a,f){a.H&&kt(a.H,function(g,v){dt(f,v,g)}),a.l&&kt({},function(g,v){dt(f,v,g)})}function ld(a,f,g){g=Math.min(a.i.length,g);const v=a.l?u(a.l.Ka,a.l,a):null;e:{var V=a.i;let Re=-1;for(;;){const xt=["count="+g];Re==-1?g>0?(Re=V[0].g,xt.push("ofs="+Re)):Re=0:xt.push("ofs="+Re);let et=!0;for(let Ft=0;Ft<g;Ft++){var $=V[Ft].g;const Un=V[Ft].map;if($-=Re,$<0)Re=Math.max(0,V[Ft].g-100),et=!1;else try{$="req"+$+"_"||"";try{var ne=Un instanceof Map?Un:Object.entries(Un);for(const[ri,Rs]of ne){let Ps=Rs;l(Rs)&&(Ps=Ne(Rs)),xt.push($+ri+"="+encodeURIComponent(Ps))}}catch(ri){throw xt.push($+"type="+encodeURIComponent("_badmap")),ri}}catch{v&&v(Un)}}if(et){ne=xt.join("&");break e}}ne=void 0}return a=a.i.splice(0,g),f.G=a,ne}function cd(a){if(!a.g&&!a.v){a.Y=1;var f=a.Da;se||A(),Ie||(se(),Ie=!0),S.add(f,a),a.A=0}}function Pl(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=De(u(a.Da,a),dd(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,ud(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=De(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,le(10),Mo(this),ud(this))};function kl(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function ud(a){a.g=new Je(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var f=Fn(a.na);dt(f,"RID","rpc"),dt(f,"SID",a.M),dt(f,"AID",a.K),dt(f,"CI",a.F?"0":"1"),!a.F&&a.ia&&dt(f,"TO",a.ia),dt(f,"TYPE","xmlhttp"),Sr(a,f),a.u&&a.o&&Sl(f,a.u,a.o),a.O&&(a.g.H=a.O);var g=a.g;a=a.ba,g.M=1,g.A=Do(Fn(f)),g.u=null,g.R=!0,_r(g,a)}t.Va=function(){this.C!=null&&(this.C=null,Mo(this),Pl(this),le(19))};function Vo(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function hd(a,f){var g=null;if(a.g==f){Vo(a),kl(a),a.g=null;var v=2}else if(El(a.h,f))g=f.G,Gh(a.h,f),v=1;else return;if(a.I!=0){if(f.o)if(v==1){g=f.u?f.u.length:0,f=Date.now()-f.F;var V=a.D;v=G(),z(v,new re(v,g)),Oo(a)}else cd(a);else if(V=f.m,V==3||V==0&&f.X>0||!(v==1&&Dy(a,f)||v==2&&Pl(a)))switch(g&&g.length>0&&(f=a.h,f.i=f.i.concat(g)),V){case 1:ii(a,5);break;case 4:ii(a,10);break;case 3:ii(a,6);break;default:ii(a,2)}}}function dd(a,f){let g=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(g*=2),g*f}function ii(a,f){if(a.j.info("Error code "+f),f==2){var g=u(a.bb,a),v=a.Ua;const V=!v;v=new Cs(v||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||yr(v,"https"),Do(v),V?Cy(v.toString(),g):by(v.toString(),g)}else le(2);a.I=0,a.l&&a.l.pa(f),fd(a),od(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),le(2)):(this.j.info("Failed to ping google.com"),le(1))};function fd(a){if(a.I=0,a.ja=[],a.l){const f=qh(a.h);(f.length!=0||a.i.length!=0)&&(w(a.ja,f),w(a.ja,a.i),a.h.i.length=0,_(a.i),a.i.length=0),a.l.oa()}}function pd(a,f,g){var v=g instanceof Cs?Fn(g):new Cs(g);if(v.g!="")f&&(v.g=f+"."+v.g),Ar(v,v.u);else{var V=o.location;v=V.protocol,f=f?f+"."+V.hostname:V.hostname,V=+V.port;const $=new Cs(null);v&&yr($,v),f&&($.g=f),V&&Ar($,V),g&&($.h=g),v=$}return g=a.G,f=a.wa,g&&f&&dt(v,g,f),dt(v,"VER",a.ka),Sr(a,v),v}function gd(a,f,g){if(f&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Aa&&!a.ma?new mt(new bl({ab:g})):new mt(a.ma),f.Fa(a.L),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function md(){}t=md.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Lo(){}Lo.prototype.g=function(a,f){return new An(a,f)};function An(a,f){J.call(this),this.g=new rd(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.sa&&(a?a["X-WebChannel-Client-Profile"]=f.sa:a={"X-WebChannel-Client-Profile":f.sa}),this.g.U=a,(a=f&&f.Qb)&&!E(a)&&(this.g.u=a),this.A=f&&f.supportsCrossDomainXhr||!1,this.v=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!E(f)&&(this.g.G=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new xi(this)}p(An,J),An.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},An.prototype.close=function(){Rl(this.g)},An.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var g={};g.__data__=a,a=g}else this.v&&(g={},g.__data__=Ne(a),a=g);f.i.push(new _y(f.Ya++,a)),f.I==3&&Oo(f)},An.prototype.N=function(){this.g.l=null,delete this.j,Rl(this.g),delete this.g,An.Z.N.call(this)};function _d(a){Et.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const g in f){a=g;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}p(_d,Et);function vd(){Fe.call(this),this.status=1}p(vd,Fe);function xi(a){this.g=a}p(xi,md),xi.prototype.ra=function(){z(this.g,"a")},xi.prototype.qa=function(a){z(this.g,new _d(a))},xi.prototype.pa=function(a){z(this.g,new vd)},xi.prototype.oa=function(){z(this.g,"b")},Lo.prototype.createWebChannel=Lo.prototype.g,An.prototype.send=An.prototype.o,An.prototype.open=An.prototype.m,An.prototype.close=An.prototype.close,I_=function(){return new Lo},A_=function(){return G()},y_=yt,Pc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Me.NO_ERROR=0,Me.TIMEOUT=8,Me.HTTP_ERROR=6,ia=Me,At.COMPLETE="complete",v_=At,Ye.EventType=wt,wt.OPEN="a",wt.CLOSE="b",wt.ERROR="c",wt.MESSAGE="d",J.prototype.listen=J.prototype.J,Nr=Ye,mt.prototype.listenOnce=mt.prototype.K,mt.prototype.getLastError=mt.prototype.Ha,mt.prototype.getLastErrorCode=mt.prototype.ya,mt.prototype.getStatus=mt.prototype.ca,mt.prototype.getResponseJson=mt.prototype.La,mt.prototype.getResponseText=mt.prototype.la,mt.prototype.send=mt.prototype.ea,mt.prototype.setWithCredentials=mt.prototype.Fa,__=mt}).apply(typeof Go<"u"?Go:typeof self<"u"?self:typeof window<"u"?window:{});const Qf="@firebase/firestore",Wf="4.9.2";/**
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
 */class Xt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xt.UNAUTHENTICATED=new Xt(null),Xt.GOOGLE_CREDENTIALS=new Xt("google-credentials-uid"),Xt.FIRST_PARTY=new Xt("first-party-uid"),Xt.MOCK_USER=new Xt("mock-user");/**
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
 */let fr="12.3.0";/**
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
 */const yi=new sl("@firebase/firestore");function Vi(){return yi.logLevel}function ce(t,...e){if(yi.logLevel<=Oe.DEBUG){const n=e.map(th);yi.debug(`Firestore (${fr}): ${t}`,...n)}}function ws(t,...e){if(yi.logLevel<=Oe.ERROR){const n=e.map(th);yi.error(`Firestore (${fr}): ${t}`,...n)}}function nr(t,...e){if(yi.logLevel<=Oe.WARN){const n=e.map(th);yi.warn(`Firestore (${fr}): ${t}`,...n)}}function th(t){if(typeof t=="string")return t;try{/**
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
 */function ve(t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,w_(t,s,n)}function w_(t,e,n){let s=`FIRESTORE (${fr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw ws(s),new Error(s)}function Ke(t,e,n,s){let i="Unexpected state";typeof n=="string"?i=n:s=n,t||w_(e,i,s)}function Ee(t,e){return t}/**
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
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class fe extends Bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class js{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
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
 */class E_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class pD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Xt.UNAUTHENTICATED)))}shutdown(){}}class gD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class mD{constructor(e){this.t=e,this.currentUser=Xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ke(this.o===void 0,42304);let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new js;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new js,e.enqueueRetryable((()=>i(this.currentUser)))};const o=()=>{const c=r;e.enqueueRetryable((async()=>{await c.promise,await i(this.currentUser)}))},l=c=>{ce("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ce("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new js)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==e?(ce("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ke(typeof s.accessToken=="string",31837,{l:s}),new E_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ke(e===null||typeof e=="string",2055,{h:e}),new Xt(e)}}class _D{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=Xt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class vD{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new _D(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(Xt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class zf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yD{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,qn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ke(this.o===void 0,3512);const s=r=>{r.error!=null&&ce("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.m;return this.m=r.token,ce("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable((()=>s(r)))};const i=r=>{ce("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>i(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?i(r):ce("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new zf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Ke(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new zf(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function AD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class nh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const i=AD(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%62))}return s}}function Ve(t,e){return t<e?-1:t>e?1:0}function kc(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const i=t.charAt(s),r=e.charAt(s);if(i!==r)return Xl(i)===Xl(r)?Ve(i,r):Xl(i)?1:-1}return Ve(t.length,e.length)}const ID=55296,wD=57343;function Xl(t){const e=t.charCodeAt(0);return e>=ID&&e<=wD}function sr(t,e,n){return t.length===e.length&&t.every(((s,i)=>n(s,e[i])))}/**
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
 */const Kf="__name__";class jn{constructor(e,n,s){n===void 0?n=0:n>e.length&&ve(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&ve(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return jn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof jn?e.forEach((s=>{n.push(s)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=jn.compareSegments(e.get(i),n.get(i));if(r!==0)return r}return Ve(e.length,n.length)}static compareSegments(e,n){const s=jn.isNumericId(e),i=jn.isNumericId(n);return s&&!i?-1:!s&&i?1:s&&i?jn.extractNumericId(e).compare(jn.extractNumericId(n)):kc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Hs.fromString(e.substring(4,e.length-2))}}class pt extends jn{construct(e,n,s){return new pt(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new fe(X.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((i=>i.length>0)))}return new pt(n)}static emptyPath(){return new pt([])}}const ED=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qt extends jn{construct(e,n,s){return new Qt(e,n,s)}static isValidIdentifier(e){return ED.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Kf}static keyField(){return new Qt([Kf])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new fe(X.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new fe(X.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new fe(X.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(s+=l,i++):(r(),i++)}if(r(),o)throw new fe(X.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qt(n)}static emptyPath(){return new Qt([])}}/**
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
 */class me{constructor(e){this.path=e}static fromPath(e){return new me(pt.fromString(e))}static fromName(e){return new me(pt.fromString(e).popFirst(5))}static empty(){return new me(pt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return pt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new me(new pt(e.slice()))}}/**
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
 */function TD(t,e,n){if(!n)throw new fe(X.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function CD(t,e,n,s){if(e===!0&&s===!0)throw new fe(X.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Yf(t){if(!me.isDocumentKey(t))throw new fe(X.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function T_(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function sh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ve(12329,{type:typeof t})}function lo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new fe(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sh(t);throw new fe(X.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function bt(t,e){const n={typeString:t};return e&&(n.value=e),n}function Co(t,e){if(!T_(t))throw new fe(X.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const i=e[s].typeString,r="value"in e[s]?{value:e[s].value}:void 0;if(!(s in t)){n=`JSON missing required field: '${s}'`;break}const o=t[s];if(i&&typeof o!==i){n=`JSON field '${s}' must be a ${i}.`;break}if(r!==void 0&&o!==r.value){n=`Expected '${s}' field to equal '${r.value}'`;break}}if(n)throw new fe(X.INVALID_ARGUMENT,n);return!0}/**
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
 */const Jf=-62135596800,Xf=1e6;class ft{static now(){return ft.fromMillis(Date.now())}static fromDate(e){return ft.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*Xf);return new ft(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new fe(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new fe(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Jf)throw new fe(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new fe(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Xf}_compareTo(e){return this.seconds===e.seconds?Ve(this.nanoseconds,e.nanoseconds):Ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ft._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Co(e,ft._jsonSchema))return new ft(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Jf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ft._jsonSchemaVersion="firestore/timestamp/1.0",ft._jsonSchema={type:bt("string",ft._jsonSchemaVersion),seconds:bt("number"),nanoseconds:bt("number")};/**
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
 */class Ae{static fromTimestamp(e){return new Ae(e)}static min(){return new Ae(new ft(0,0))}static max(){return new Ae(new ft(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const co=-1;function bD(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=Ae.fromTimestamp(s===1e9?new ft(n+1,0):new ft(n,s));return new zs(i,me.empty(),e)}function SD(t){return new zs(t.readTime,t.key,co)}class zs{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new zs(Ae.min(),me.empty(),co)}static max(){return new zs(Ae.max(),me.empty(),co)}}function RD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=me.comparator(t.documentKey,e.documentKey),n!==0?n:Ve(t.largestBatchId,e.largestBatchId))}/**
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
 */const PD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function pr(t){if(t.code!==X.FAILED_PRECONDITION||t.message!==PD)throw t;ce("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Y{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ve(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new Y(((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof Y?n:Y.resolve(n)}catch(n){return Y.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):Y.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):Y.reject(n)}static resolve(e){return new Y(((n,s)=>{n(e)}))}static reject(e){return new Y(((n,s)=>{s(e)}))}static waitFor(e){return new Y(((n,s)=>{let i=0,r=0,o=!1;e.forEach((l=>{++i,l.next((()=>{++r,o&&r===i&&n()}),(c=>s(c)))})),o=!0,r===i&&n()}))}static or(e){let n=Y.resolve(!1);for(const s of e)n=n.next((i=>i?Y.resolve(i):s()));return n}static forEach(e,n){const s=[];return e.forEach(((i,r)=>{s.push(n.call(this,i,r))})),this.waitFor(s)}static mapArray(e,n){return new Y(((s,i)=>{const r=e.length,o=new Array(r);let l=0;for(let c=0;c<r;c++){const u=c;n(e[u]).next((d=>{o[u]=d,++l,l===r&&s(o)}),(d=>i(d)))}}))}static doWhile(e,n){return new Y(((s,i)=>{const r=()=>{e()===!0?n().next((()=>{r()}),i):s()};r()}))}}function DD(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function gr(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ol{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ol.ce=-1;/**
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
 */const ih=-1;function al(t){return t==null}function ka(t){return t===0&&1/t==-1/0}function xD(t){return typeof t=="number"&&Number.isInteger(t)&&!ka(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const C_="";function ND(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Zf(e)),e=MD(t.get(n),e);return Zf(e)}function MD(t,e){let n=e;const s=t.length;for(let i=0;i<s;i++){const r=t.charAt(i);switch(r){case"\0":n+="";break;case C_:n+="";break;default:n+=r}}return n}function Zf(t){return t+C_+""}/**
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
 */function ep(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function bi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function b_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class gt{constructor(e,n){this.comparator=e,this.root=n||Gt.EMPTY}insert(e,n){return new gt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Gt.BLACK,null,null))}remove(e){return new gt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Gt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,s)=>(e(n,s),!1)))}toString(){const e=[];return this.inorderTraversal(((n,s)=>(e.push(`${n}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qo(this.root,e,this.comparator,!1)}getReverseIterator(){return new qo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qo(this.root,e,this.comparator,!0)}}class qo{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Gt{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Gt.RED,this.left=i??Gt.EMPTY,this.right=r??Gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Gt(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Gt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Gt.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ve(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ve(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ve(27949);return e+(this.isRed()?0:1)}}Gt.EMPTY=null,Gt.RED=!0,Gt.BLACK=!1;Gt.EMPTY=new class{constructor(){this.size=0}get key(){throw ve(57766)}get value(){throw ve(16141)}get color(){throw ve(16727)}get left(){throw ve(29726)}get right(){throw ve(36894)}copy(e,n,s,i,r){return this}insert(e,n,s){return new Gt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Vt{constructor(e){this.comparator=e,this.data=new gt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,s)=>(e(n),!1)))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new tp(this.data.getIterator())}getIteratorFrom(e){return new tp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((s=>{n=n.add(s)})),n}isEqual(e){if(!(e instanceof Vt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Vt(this.comparator);return n.data=e,n}}class tp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Mn{constructor(e){this.fields=e,e.sort(Qt.comparator)}static empty(){return new Mn([])}unionWith(e){let n=new Vt(Qt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Mn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return sr(this.fields,e.fields,((n,s)=>n.isEqual(s)))}}/**
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
 */class S_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class zt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new S_("Invalid base64 string: "+r):r}})(e);return new zt(n)}static fromUint8Array(e){const n=(function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r})(e);return new zt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}zt.EMPTY_BYTE_STRING=new zt("");const OD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ks(t){if(Ke(!!t,39018),typeof t=="string"){let e=0;const n=OD.exec(t);if(Ke(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:It(t.seconds),nanos:It(t.nanos)}}function It(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ys(t){return typeof t=="string"?zt.fromBase64String(t):zt.fromUint8Array(t)}/**
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
 */const R_="server_timestamp",P_="__type__",k_="__previous_value__",D_="__local_write_time__";function rh(t){return(t?.mapValue?.fields||{})[P_]?.stringValue===R_}function ll(t){const e=t.mapValue.fields[k_];return rh(e)?ll(e):e}function uo(t){const e=Ks(t.mapValue.fields[D_].timestampValue);return new ft(e.seconds,e.nanos)}/**
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
 */class VD{constructor(e,n,s,i,r,o,l,c,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=d}}const Da="(default)";class ho{constructor(e,n){this.projectId=e,this.database=n||Da}static empty(){return new ho("","")}get isDefaultDatabase(){return this.database===Da}isEqual(e){return e instanceof ho&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const x_="__type__",LD="__max__",Qo={mapValue:{}},N_="__vector__",xa="value";function Js(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?rh(t)?4:FD(t)?9007199254740991:BD(t)?10:11:ve(28295,{value:t})}function ss(t,e){if(t===e)return!0;const n=Js(t);if(n!==Js(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return uo(t).isEqual(uo(e));case 3:return(function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=Ks(i.timestampValue),l=Ks(r.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(i,r){return Ys(i.bytesValue).isEqual(Ys(r.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(i,r){return It(i.geoPointValue.latitude)===It(r.geoPointValue.latitude)&&It(i.geoPointValue.longitude)===It(r.geoPointValue.longitude)})(t,e);case 2:return(function(i,r){if("integerValue"in i&&"integerValue"in r)return It(i.integerValue)===It(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=It(i.doubleValue),l=It(r.doubleValue);return o===l?ka(o)===ka(l):isNaN(o)&&isNaN(l)}return!1})(t,e);case 9:return sr(t.arrayValue.values||[],e.arrayValue.values||[],ss);case 10:case 11:return(function(i,r){const o=i.mapValue.fields||{},l=r.mapValue.fields||{};if(ep(o)!==ep(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!ss(o[c],l[c])))return!1;return!0})(t,e);default:return ve(52216,{left:t})}}function fo(t,e){return(t.values||[]).find((n=>ss(n,e)))!==void 0}function ir(t,e){if(t===e)return 0;const n=Js(t),s=Js(e);if(n!==s)return Ve(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ve(t.booleanValue,e.booleanValue);case 2:return(function(r,o){const l=It(r.integerValue||r.doubleValue),c=It(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(t,e);case 3:return np(t.timestampValue,e.timestampValue);case 4:return np(uo(t),uo(e));case 5:return kc(t.stringValue,e.stringValue);case 6:return(function(r,o){const l=Ys(r),c=Ys(o);return l.compareTo(c)})(t.bytesValue,e.bytesValue);case 7:return(function(r,o){const l=r.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=Ve(l[u],c[u]);if(d!==0)return d}return Ve(l.length,c.length)})(t.referenceValue,e.referenceValue);case 8:return(function(r,o){const l=Ve(It(r.latitude),It(o.latitude));return l!==0?l:Ve(It(r.longitude),It(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return sp(t.arrayValue,e.arrayValue);case 10:return(function(r,o){const l=r.fields||{},c=o.fields||{},u=l[xa]?.arrayValue,d=c[xa]?.arrayValue,p=Ve(u?.values?.length||0,d?.values?.length||0);return p!==0?p:sp(u,d)})(t.mapValue,e.mapValue);case 11:return(function(r,o){if(r===Qo.mapValue&&o===Qo.mapValue)return 0;if(r===Qo.mapValue)return 1;if(o===Qo.mapValue)return-1;const l=r.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=kc(c[p],d[p]);if(m!==0)return m;const _=ir(l[c[p]],u[d[p]]);if(_!==0)return _}return Ve(c.length,d.length)})(t.mapValue,e.mapValue);default:throw ve(23264,{he:n})}}function np(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ve(t,e);const n=Ks(t),s=Ks(e),i=Ve(n.seconds,s.seconds);return i!==0?i:Ve(n.nanos,s.nanos)}function sp(t,e){const n=t.values||[],s=e.values||[];for(let i=0;i<n.length&&i<s.length;++i){const r=ir(n[i],s[i]);if(r)return r}return Ve(n.length,s.length)}function rr(t){return Dc(t)}function Dc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const s=Ks(n);return`time(${s.seconds},${s.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Ys(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return me.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let s="[",i=!0;for(const r of n.values||[])i?i=!1:s+=",",s+=Dc(r);return s+"]"})(t.arrayValue):"mapValue"in t?(function(n){const s=Object.keys(n.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${Dc(n.fields[o])}`;return i+"}"})(t.mapValue):ve(61005,{value:t})}function ra(t){switch(Js(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ll(t);return e?16+ra(e):16;case 5:return 2*t.stringValue.length;case 6:return Ys(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((i,r)=>i+ra(r)),0)})(t.arrayValue);case 10:case 11:return(function(s){let i=0;return bi(s.fields,((r,o)=>{i+=r.length+ra(o)})),i})(t.mapValue);default:throw ve(13486,{value:t})}}function xc(t){return!!t&&"integerValue"in t}function oh(t){return!!t&&"arrayValue"in t}function ip(t){return!!t&&"nullValue"in t}function rp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function oa(t){return!!t&&"mapValue"in t}function BD(t){return(t?.mapValue?.fields||{})[x_]?.stringValue===N_}function zr(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return bi(t.mapValue.fields,((n,s)=>e.mapValue.fields[n]=zr(s))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=zr(t.arrayValue.values[n]);return e}return{...t}}function FD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===LD}/**
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
 */class Sn{constructor(e){this.value=e}static empty(){return new Sn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!oa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=zr(n)}setAll(e){let n=Qt.emptyPath(),s={},i=[];e.forEach(((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=l.popLast()}o?s[l.lastSegment()]=zr(o):i.push(l.lastSegment())}));const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());oa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ss(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];oa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){bi(n,((i,r)=>e[i]=r));for(const i of s)delete e[i]}clone(){return new Sn(zr(this.value))}}function M_(t){const e=[];return bi(t.fields,((n,s)=>{const i=new Qt([n]);if(oa(s)){const r=M_(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)})),new Mn(e)}/**
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
 */class en{constructor(e,n,s,i,r,o,l){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=l}static newInvalidDocument(e){return new en(e,0,Ae.min(),Ae.min(),Ae.min(),Sn.empty(),0)}static newFoundDocument(e,n,s,i){return new en(e,1,n,Ae.min(),s,i,0)}static newNoDocument(e,n){return new en(e,2,n,Ae.min(),Ae.min(),Sn.empty(),0)}static newUnknownDocument(e,n){return new en(e,3,n,Ae.min(),Ae.min(),Sn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Sn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Sn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof en&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new en(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Na{constructor(e,n){this.position=e,this.inclusive=n}}function op(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=me.comparator(me.fromName(o.referenceValue),n.key):s=ir(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function ap(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ss(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ma{constructor(e,n="asc"){this.field=e,this.dir=n}}function UD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class O_{}class Ot extends O_{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new HD(e,n,s):n==="array-contains"?new qD(e,s):n==="in"?new QD(e,s):n==="not-in"?new WD(e,s):n==="array-contains-any"?new zD(e,s):new Ot(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new jD(e,s):new GD(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ir(n,this.value)):n!==null&&Js(this.value)===Js(n)&&this.matchesComparison(ir(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class is extends O_{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new is(e,n)}matches(e){return V_(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function V_(t){return t.op==="and"}function L_(t){return $D(t)&&V_(t)}function $D(t){for(const e of t.filters)if(e instanceof is)return!1;return!0}function Nc(t){if(t instanceof Ot)return t.field.canonicalString()+t.op.toString()+rr(t.value);if(L_(t))return t.filters.map((e=>Nc(e))).join(",");{const e=t.filters.map((n=>Nc(n))).join(",");return`${t.op}(${e})`}}function B_(t,e){return t instanceof Ot?(function(s,i){return i instanceof Ot&&s.op===i.op&&s.field.isEqual(i.field)&&ss(s.value,i.value)})(t,e):t instanceof is?(function(s,i){return i instanceof is&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce(((r,o,l)=>r&&B_(o,i.filters[l])),!0):!1})(t,e):void ve(19439)}function F_(t){return t instanceof Ot?(function(n){return`${n.field.canonicalString()} ${n.op} ${rr(n.value)}`})(t):t instanceof is?(function(n){return n.op.toString()+" {"+n.getFilters().map(F_).join(" ,")+"}"})(t):"Filter"}class HD extends Ot{constructor(e,n,s){super(e,n,s),this.key=me.fromName(s.referenceValue)}matches(e){const n=me.comparator(e.key,this.key);return this.matchesComparison(n)}}class jD extends Ot{constructor(e,n){super(e,"in",n),this.keys=U_("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class GD extends Ot{constructor(e,n){super(e,"not-in",n),this.keys=U_("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function U_(t,e){return(e.arrayValue?.values||[]).map((n=>me.fromName(n.referenceValue)))}class qD extends Ot{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return oh(n)&&fo(n.arrayValue,this.value)}}class QD extends Ot{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&fo(this.value.arrayValue,n)}}class WD extends Ot{constructor(e,n){super(e,"not-in",n)}matches(e){if(fo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!fo(this.value.arrayValue,n)}}class zD extends Ot{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!oh(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>fo(this.value.arrayValue,s)))}}/**
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
 */class KD{constructor(e,n=null,s=[],i=[],r=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=l,this.Te=null}}function lp(t,e=null,n=[],s=[],i=null,r=null,o=null){return new KD(t,e,n,s,i,r,o)}function ah(t){const e=Ee(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((s=>Nc(s))).join(","),n+="|ob:",n+=e.orderBy.map((s=>(function(r){return r.field.canonicalString()+r.dir})(s))).join(","),al(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>rr(s))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>rr(s))).join(",")),e.Te=n}return e.Te}function lh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!UD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!B_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ap(t.startAt,e.startAt)&&ap(t.endAt,e.endAt)}function Mc(t){return me.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class cl{constructor(e,n=null,s=[],i=[],r=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function YD(t,e,n,s,i,r,o,l){return new cl(t,e,n,s,i,r,o,l)}function ch(t){return new cl(t)}function cp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function JD(t){return t.collectionGroup!==null}function Kr(t){const e=Ee(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const r of e.explicitOrderBy)e.Ie.push(r),n.add(r.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Vt(Qt.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((u=>{u.isInequality()&&(l=l.add(u.field))}))})),l})(e).forEach((r=>{n.has(r.canonicalString())||r.isKeyField()||e.Ie.push(new Ma(r,s))})),n.has(Qt.keyField().canonicalString())||e.Ie.push(new Ma(Qt.keyField(),s))}return e.Ie}function Yn(t){const e=Ee(t);return e.Ee||(e.Ee=XD(e,Kr(t))),e.Ee}function XD(t,e){if(t.limitType==="F")return lp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((i=>{const r=i.dir==="desc"?"asc":"desc";return new Ma(i.field,r)}));const n=t.endAt?new Na(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Na(t.startAt.position,t.startAt.inclusive):null;return lp(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function Oc(t,e,n){return new cl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ul(t,e){return lh(Yn(t),Yn(e))&&t.limitType===e.limitType}function $_(t){return`${ah(Yn(t))}|lt:${t.limitType}`}function Li(t){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((i=>F_(i))).join(", ")}]`),al(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((i=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(i))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((i=>rr(i))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((i=>rr(i))).join(",")),`Target(${s})`})(Yn(t))}; limitType=${t.limitType})`}function hl(t,e){return e.isFoundDocument()&&(function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):me.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)})(t,e)&&(function(s,i){for(const r of Kr(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0})(t,e)&&(function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0})(t,e)&&(function(s,i){return!(s.startAt&&!(function(o,l,c){const u=op(o,l,c);return o.inclusive?u<=0:u<0})(s.startAt,Kr(s),i)||s.endAt&&!(function(o,l,c){const u=op(o,l,c);return o.inclusive?u>=0:u>0})(s.endAt,Kr(s),i))})(t,e)}function ZD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function H_(t){return(e,n)=>{let s=!1;for(const i of Kr(t)){const r=ex(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function ex(t,e,n){const s=t.field.isKeyField()?me.comparator(e.key,n.key):(function(r,o,l){const c=o.data.field(r),u=l.data.field(r);return c!==null&&u!==null?ir(c,u):ve(42886)})(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ve(19790,{direction:t.dir})}}/**
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
 */class Si{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){bi(this.inner,((n,s)=>{for(const[i,r]of s)e(i,r)}))}isEmpty(){return b_(this.inner)}size(){return this.innerSize}}/**
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
 */const tx=new gt(me.comparator);function Es(){return tx}const j_=new gt(me.comparator);function Mr(...t){let e=j_;for(const n of t)e=e.insert(n.key,n);return e}function G_(t){let e=j_;return t.forEach(((n,s)=>e=e.insert(n,s.overlayedDocument))),e}function hi(){return Yr()}function q_(){return Yr()}function Yr(){return new Si((t=>t.toString()),((t,e)=>t.isEqual(e)))}const nx=new gt(me.comparator),sx=new Vt(me.comparator);function Le(...t){let e=sx;for(const n of t)e=e.add(n);return e}const ix=new Vt(Ve);function rx(){return ix}/**
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
 */function uh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ka(e)?"-0":e}}function Q_(t){return{integerValue:""+t}}function ox(t,e){return xD(e)?Q_(e):uh(t,e)}/**
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
 */class dl{constructor(){this._=void 0}}function ax(t,e,n){return t instanceof Oa?(function(i,r){const o={fields:{[P_]:{stringValue:R_},[D_]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&rh(r)&&(r=ll(r)),r&&(o.fields[k_]=r),{mapValue:o}})(n,e):t instanceof po?z_(t,e):t instanceof go?K_(t,e):(function(i,r){const o=W_(i,r),l=up(o)+up(i.Ae);return xc(o)&&xc(i.Ae)?Q_(l):uh(i.serializer,l)})(t,e)}function lx(t,e,n){return t instanceof po?z_(t,e):t instanceof go?K_(t,e):n}function W_(t,e){return t instanceof Va?(function(s){return xc(s)||(function(r){return!!r&&"doubleValue"in r})(s)})(e)?e:{integerValue:0}:null}class Oa extends dl{}class po extends dl{constructor(e){super(),this.elements=e}}function z_(t,e){const n=Y_(e);for(const s of t.elements)n.some((i=>ss(i,s)))||n.push(s);return{arrayValue:{values:n}}}class go extends dl{constructor(e){super(),this.elements=e}}function K_(t,e){let n=Y_(e);for(const s of t.elements)n=n.filter((i=>!ss(i,s)));return{arrayValue:{values:n}}}class Va extends dl{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function up(t){return It(t.integerValue||t.doubleValue)}function Y_(t){return oh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function cx(t,e){return t.field.isEqual(e.field)&&(function(s,i){return s instanceof po&&i instanceof po||s instanceof go&&i instanceof go?sr(s.elements,i.elements,ss):s instanceof Va&&i instanceof Va?ss(s.Ae,i.Ae):s instanceof Oa&&i instanceof Oa})(t.transform,e.transform)}class ux{constructor(e,n){this.version=e,this.transformResults=n}}class ms{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ms}static exists(e){return new ms(void 0,e)}static updateTime(e){return new ms(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function aa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class fl{}function J_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Z_(t.key,ms.none()):new bo(t.key,t.data,ms.none());{const n=t.data,s=Sn.empty();let i=new Vt(Qt.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Ri(t.key,s,new Mn(i.toArray()),ms.none())}}function hx(t,e,n){t instanceof bo?(function(i,r,o){const l=i.value.clone(),c=dp(i.fieldTransforms,r,o.transformResults);l.setAll(c),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):t instanceof Ri?(function(i,r,o){if(!aa(i.precondition,r))return void r.convertToUnknownDocument(o.version);const l=dp(i.fieldTransforms,r,o.transformResults),c=r.data;c.setAll(X_(i)),c.setAll(l),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):(function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function Jr(t,e,n,s){return t instanceof bo?(function(r,o,l,c){if(!aa(r.precondition,o))return l;const u=r.value.clone(),d=fp(r.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,s):t instanceof Ri?(function(r,o,l,c){if(!aa(r.precondition,o))return l;const u=fp(r.fieldTransforms,c,o),d=o.data;return d.setAll(X_(r)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((p=>p.field)))})(t,e,n,s):(function(r,o,l){return aa(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l})(t,e,n)}function dx(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=W_(s.transform,i||null);r!=null&&(n===null&&(n=Sn.empty()),n.set(s.field,r))}return n||null}function hp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&sr(s,i,((r,o)=>cx(r,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class bo extends fl{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ri extends fl{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function X_(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function dp(t,e,n){const s=new Map;Ke(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,l=e.data.field(r.field);s.set(r.field,lx(o,l,n[i]))}return s}function fp(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,ax(r,o,e))}return s}class Z_ extends fl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fx extends fl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class px{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&hx(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Jr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Jr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=q_();return this.mutations.forEach((i=>{const r=e.get(i.key),o=r.overlayedDocument;let l=this.applyToLocalView(o,r.mutatedFields);l=n.has(i.key)?null:l;const c=J_(o,l);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(Ae.min())})),s}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Le())}isEqual(e){return this.batchId===e.batchId&&sr(this.mutations,e.mutations,((n,s)=>hp(n,s)))&&sr(this.baseMutations,e.baseMutations,((n,s)=>hp(n,s)))}}class hh{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){Ke(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let i=(function(){return nx})();const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new hh(e,n,s,i)}}/**
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
 */class gx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class mx{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Tt,Ue;function _x(t){switch(t){case X.OK:return ve(64938);case X.CANCELLED:case X.UNKNOWN:case X.DEADLINE_EXCEEDED:case X.RESOURCE_EXHAUSTED:case X.INTERNAL:case X.UNAVAILABLE:case X.UNAUTHENTICATED:return!1;case X.INVALID_ARGUMENT:case X.NOT_FOUND:case X.ALREADY_EXISTS:case X.PERMISSION_DENIED:case X.FAILED_PRECONDITION:case X.ABORTED:case X.OUT_OF_RANGE:case X.UNIMPLEMENTED:case X.DATA_LOSS:return!0;default:return ve(15467,{code:t})}}function ev(t){if(t===void 0)return ws("GRPC error has no .code"),X.UNKNOWN;switch(t){case Tt.OK:return X.OK;case Tt.CANCELLED:return X.CANCELLED;case Tt.UNKNOWN:return X.UNKNOWN;case Tt.DEADLINE_EXCEEDED:return X.DEADLINE_EXCEEDED;case Tt.RESOURCE_EXHAUSTED:return X.RESOURCE_EXHAUSTED;case Tt.INTERNAL:return X.INTERNAL;case Tt.UNAVAILABLE:return X.UNAVAILABLE;case Tt.UNAUTHENTICATED:return X.UNAUTHENTICATED;case Tt.INVALID_ARGUMENT:return X.INVALID_ARGUMENT;case Tt.NOT_FOUND:return X.NOT_FOUND;case Tt.ALREADY_EXISTS:return X.ALREADY_EXISTS;case Tt.PERMISSION_DENIED:return X.PERMISSION_DENIED;case Tt.FAILED_PRECONDITION:return X.FAILED_PRECONDITION;case Tt.ABORTED:return X.ABORTED;case Tt.OUT_OF_RANGE:return X.OUT_OF_RANGE;case Tt.UNIMPLEMENTED:return X.UNIMPLEMENTED;case Tt.DATA_LOSS:return X.DATA_LOSS;default:return ve(39323,{code:t})}}(Ue=Tt||(Tt={}))[Ue.OK=0]="OK",Ue[Ue.CANCELLED=1]="CANCELLED",Ue[Ue.UNKNOWN=2]="UNKNOWN",Ue[Ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ue[Ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ue[Ue.NOT_FOUND=5]="NOT_FOUND",Ue[Ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ue[Ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ue[Ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ue[Ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ue[Ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ue[Ue.ABORTED=10]="ABORTED",Ue[Ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ue[Ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ue[Ue.INTERNAL=13]="INTERNAL",Ue[Ue.UNAVAILABLE=14]="UNAVAILABLE",Ue[Ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function vx(){return new TextEncoder}/**
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
 */const yx=new Hs([4294967295,4294967295],0);function pp(t){const e=vx().encode(t),n=new m_;return n.update(e),new Uint8Array(n.digest())}function gp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Hs([n,s],0),new Hs([i,r],0)]}class dh{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Or(`Invalid padding: ${n}`);if(s<0)throw new Or(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Or(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Or(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Hs.fromNumber(this.ge)}ye(e,n,s){let i=e.add(n.multiply(Hs.fromNumber(s)));return i.compare(yx)===1&&(i=new Hs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=pp(e),[s,i]=gp(n);for(let r=0;r<this.hashCount;r++){const o=this.ye(s,i,r);if(!this.we(o))return!1}return!0}static create(e,n,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new dh(r,i,n);return s.forEach((l=>o.insert(l))),o}insert(e){if(this.ge===0)return;const n=pp(e),[s,i]=gp(n);for(let r=0;r<this.hashCount;r++){const o=this.ye(s,i,r);this.Se(o)}}Se(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Or extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class pl{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,So.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new pl(Ae.min(),i,new gt(Ve),Es(),Le())}}class So{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new So(s,n,Le(),Le(),Le())}}/**
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
 */class la{constructor(e,n,s,i){this.be=e,this.removedTargetIds=n,this.key=s,this.De=i}}class tv{constructor(e,n){this.targetId=e,this.Ce=n}}class nv{constructor(e,n,s=zt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class mp{constructor(){this.ve=0,this.Fe=_p(),this.Me=zt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Le(),n=Le(),s=Le();return this.Fe.forEach(((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:ve(38017,{changeType:r})}})),new So(this.Me,this.xe,e,n,s)}qe(){this.Oe=!1,this.Fe=_p()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ke(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Ax{constructor(e){this.Ge=e,this.ze=new Map,this.je=Es(),this.Je=Wo(),this.He=Wo(),this.Ye=new gt(Ve)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const s=this.nt(n);switch(e.state){case 0:this.rt(n)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(e.resumeToken));break;default:ve(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((s,i)=>{this.rt(i)&&n(i)}))}st(e){const n=e.targetId,s=e.Ce.count,i=this.ot(n);if(i){const r=i.target;if(Mc(r))if(s===0){const o=new me(r.path);this.et(n,o,en.newNoDocument(o,Ae.min()))}else Ke(s===1,20013,{expectedCount:s});else{const o=this._t(n);if(o!==s){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=n;let o,l;try{o=Ys(s).toUint8Array()}catch(c){if(c instanceof S_)return nr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new dh(o,i,r)}catch(c){return nr(c instanceof Or?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,n,s){return n.Ce.count===s-this.Pt(e,n.targetId)?0:2}Pt(e,n){const s=this.Ge.getRemoteKeysForTarget(n);let i=0;return s.forEach((r=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(l)||(this.et(n,r,null),i++)})),i}Tt(e){const n=new Map;this.ze.forEach(((r,o)=>{const l=this.ot(o);if(l){if(r.current&&Mc(l.target)){const c=new me(l.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,en.newNoDocument(c,e))}r.Be&&(n.set(o,r.ke()),r.qe())}}));let s=Le();this.He.forEach(((r,o)=>{let l=!0;o.forEachWhile((c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(s=s.add(r))})),this.je.forEach(((r,o)=>o.setReadTime(e)));const i=new pl(e,n,this.Ye,this.je,s);return this.je=Es(),this.Je=Wo(),this.He=Wo(),this.Ye=new gt(Ve),i}Xe(e,n){if(!this.rt(e))return;const s=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,s){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),s&&(this.je=this.je.insert(n,s))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new mp,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Vt(Ve),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Vt(Ve),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||ce("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new mp),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Wo(){return new gt(me.comparator)}function _p(){return new gt(me.comparator)}const Ix={asc:"ASCENDING",desc:"DESCENDING"},wx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ex={and:"AND",or:"OR"};class Tx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Vc(t,e){return t.useProto3Json||al(e)?e:{value:e}}function La(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function sv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Cx(t,e){return La(t,e.toTimestamp())}function Jn(t){return Ke(!!t,49232),Ae.fromTimestamp((function(n){const s=Ks(n);return new ft(s.seconds,s.nanos)})(t))}function fh(t,e){return Lc(t,e).canonicalString()}function Lc(t,e){const n=(function(i){return new pt(["projects",i.projectId,"databases",i.database])})(t).child("documents");return e===void 0?n:n.child(e)}function iv(t){const e=pt.fromString(t);return Ke(cv(e),10190,{key:e.toString()}),e}function Bc(t,e){return fh(t.databaseId,e.path)}function Zl(t,e){const n=iv(e);if(n.get(1)!==t.databaseId.projectId)throw new fe(X.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new fe(X.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new me(ov(n))}function rv(t,e){return fh(t.databaseId,e)}function bx(t){const e=iv(t);return e.length===4?pt.emptyPath():ov(e)}function Fc(t){return new pt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ov(t){return Ke(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function vp(t,e,n){return{name:Bc(t,e),fields:n.value.mapValue.fields}}function Sx(t,e){let n;if("targetChange"in e){e.targetChange;const s=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ve(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=(function(u,d){return u.useProto3Json?(Ke(d===void 0||typeof d=="string",58123),zt.fromBase64String(d||"")):(Ke(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),zt.fromUint8Array(d||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&(function(u){const d=u.code===void 0?X.UNKNOWN:ev(u.code);return new fe(d,u.message||"")})(o);n=new nv(s,i,r,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Zl(t,s.document.name),r=Jn(s.document.updateTime),o=s.document.createTime?Jn(s.document.createTime):Ae.min(),l=new Sn({mapValue:{fields:s.document.fields}}),c=en.newFoundDocument(i,r,o,l),u=s.targetIds||[],d=s.removedTargetIds||[];n=new la(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Zl(t,s.document),r=s.readTime?Jn(s.readTime):Ae.min(),o=en.newNoDocument(i,r),l=s.removedTargetIds||[];n=new la([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Zl(t,s.document),r=s.removedTargetIds||[];n=new la([],r,i,null)}else{if(!("filter"in e))return ve(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new mx(i,r),l=s.targetId;n=new tv(l,o)}}return n}function Rx(t,e){let n;if(e instanceof bo)n={update:vp(t,e.key,e.value)};else if(e instanceof Z_)n={delete:Bc(t,e.key)};else if(e instanceof Ri)n={update:vp(t,e.key,e.data),updateMask:Lx(e.fieldMask)};else{if(!(e instanceof fx))return ve(16599,{Vt:e.type});n={verify:Bc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((s=>(function(r,o){const l=o.transform;if(l instanceof Oa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof po)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof go)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Va)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw ve(20930,{transform:o.transform})})(0,s)))),e.precondition.isNone||(n.currentDocument=(function(i,r){return r.updateTime!==void 0?{updateTime:Cx(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:ve(27497)})(t,e.precondition)),n}function Px(t,e){return t&&t.length>0?(Ke(e!==void 0,14353),t.map((n=>(function(i,r){let o=i.updateTime?Jn(i.updateTime):Jn(r);return o.isEqual(Ae.min())&&(o=Jn(r)),new ux(o,i.transformResults||[])})(n,e)))):[]}function kx(t,e){return{documents:[rv(t,e.path)]}}function Dx(t,e){const n={structuredQuery:{}},s=e.path;let i;e.collectionGroup!==null?(i=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=rv(t,i);const r=(function(u){if(u.length!==0)return lv(is.create(u,"and"))})(e.filters);r&&(n.structuredQuery.where=r);const o=(function(u){if(u.length!==0)return u.map((d=>(function(m){return{field:Bi(m.field),direction:Mx(m.dir)}})(d)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Vc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:n,parent:i}}function xx(t){let e=bx(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Ke(s===1,65062);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let r=[];n.where&&(r=(function(p){const m=av(p);return m instanceof is&&L_(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((m=>(function(w){return new Ma(Fi(w.field),(function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(w.direction))})(m)))})(n.orderBy));let l=null;n.limit&&(l=(function(p){let m;return m=typeof p=="object"?p.value:p,al(m)?null:m})(n.limit));let c=null;n.startAt&&(c=(function(p){const m=!!p.before,_=p.values||[];return new Na(_,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const m=!p.before,_=p.values||[];return new Na(_,m)})(n.endAt)),YD(e,i,o,r,l,"F",c,u)}function Nx(t,e){const n=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ve(28987,{purpose:i})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function av(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Fi(n.unaryFilter.field);return Ot.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=Fi(n.unaryFilter.field);return Ot.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Fi(n.unaryFilter.field);return Ot.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Fi(n.unaryFilter.field);return Ot.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ve(61313);default:return ve(60726)}})(t):t.fieldFilter!==void 0?(function(n){return Ot.create(Fi(n.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ve(58110);default:return ve(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return is.create(n.compositeFilter.filters.map((s=>av(s))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ve(1026)}})(n.compositeFilter.op))})(t):ve(30097,{filter:t})}function Mx(t){return Ix[t]}function Ox(t){return wx[t]}function Vx(t){return Ex[t]}function Bi(t){return{fieldPath:t.canonicalString()}}function Fi(t){return Qt.fromServerFormat(t.fieldPath)}function lv(t){return t instanceof Ot?(function(n){if(n.op==="=="){if(rp(n.value))return{unaryFilter:{field:Bi(n.field),op:"IS_NAN"}};if(ip(n.value))return{unaryFilter:{field:Bi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(rp(n.value))return{unaryFilter:{field:Bi(n.field),op:"IS_NOT_NAN"}};if(ip(n.value))return{unaryFilter:{field:Bi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bi(n.field),op:Ox(n.op),value:n.value}}})(t):t instanceof is?(function(n){const s=n.getFilters().map((i=>lv(i)));return s.length===1?s[0]:{compositeFilter:{op:Vx(n.op),filters:s}}})(t):ve(54877,{filter:t})}function Lx(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function cv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Bs{constructor(e,n,s,i,r=Ae.min(),o=Ae.min(),l=zt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Bs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Bs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Bs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Bs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Bx{constructor(e){this.yt=e}}function Fx(t){const e=xx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Oc(e,e.limit,"L"):e}/**
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
 */class Ux{constructor(){this.Cn=new $x}addToCollectionParentIndex(e,n){return this.Cn.add(n),Y.resolve()}getCollectionParents(e,n){return Y.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return Y.resolve()}deleteFieldIndex(e,n){return Y.resolve()}deleteAllFieldIndexes(e){return Y.resolve()}createTargetIndexes(e,n){return Y.resolve()}getDocumentsMatchingTarget(e,n){return Y.resolve(null)}getIndexType(e,n){return Y.resolve(0)}getFieldIndexes(e,n){return Y.resolve([])}getNextCollectionGroupToUpdate(e){return Y.resolve(null)}getMinOffset(e,n){return Y.resolve(zs.min())}getMinOffsetFromCollectionGroup(e,n){return Y.resolve(zs.min())}updateCollectionGroup(e,n,s){return Y.resolve()}updateIndexEntries(e,n){return Y.resolve()}}class $x{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new Vt(pt.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Vt(pt.comparator)).toArray()}}/**
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
 */const yp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},uv=41943040;class _n{static withCacheSize(e){return new _n(e,_n.DEFAULT_COLLECTION_PERCENTILE,_n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */_n.DEFAULT_COLLECTION_PERCENTILE=10,_n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_n.DEFAULT=new _n(uv,_n.DEFAULT_COLLECTION_PERCENTILE,_n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_n.DISABLED=new _n(-1,0,0);/**
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
 */class or{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new or(0)}static cr(){return new or(-1)}}/**
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
 */const Ap="LruGarbageCollector",Hx=1048576;function Ip([t,e],[n,s]){const i=Ve(t,n);return i===0?Ve(e,s):i}class jx{constructor(e){this.Ir=e,this.buffer=new Vt(Ip),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();Ip(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Gx{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ce(Ap,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){gr(n)?ce(Ap,"Ignoring IndexedDB error during garbage collection: ",n):await pr(n)}await this.Vr(3e5)}))}}class qx{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(e,n){if(n===0)return Y.resolve(ol.ce);const s=new jx(n);return this.mr.forEachTarget(e,(i=>s.Ar(i.sequenceNumber))).next((()=>this.mr.pr(e,(i=>s.Ar(i))))).next((()=>s.maxValue))}removeTargets(e,n,s){return this.mr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ce("LruGarbageCollector","Garbage collection skipped; disabled"),Y.resolve(yp)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ce("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),yp):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let s,i,r,o,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(ce("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i)))).next((p=>(s=p,l=Date.now(),this.removeTargets(e,s,n)))).next((p=>(r=p,c=Date.now(),this.removeOrphanedDocuments(e,s)))).next((p=>(u=Date.now(),Vi()<=Oe.DEBUG&&ce("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${r} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),Y.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:p}))))}}function Qx(t,e){return new qx(t,e)}/**
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
 */class Wx{constructor(){this.changes=new Si((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,en.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?Y.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class zx{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Kx{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next((i=>(s=i,this.remoteDocumentCache.getEntry(e,n)))).next((i=>(s!==null&&Jr(s.mutation,i,Mn.empty(),ft.now()),i)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.getLocalViewOfDocuments(e,s,Le()).next((()=>s))))}getLocalViewOfDocuments(e,n,s=Le()){const i=hi();return this.populateOverlays(e,i,n).next((()=>this.computeViews(e,n,i,s).next((r=>{let o=Mr();return r.forEach(((l,c)=>{o=o.insert(l,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const s=hi();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,Le())))}populateOverlays(e,n,s){const i=[];return s.forEach((r=>{n.has(r)||i.push(r)})),this.documentOverlayCache.getOverlays(e,i).next((r=>{r.forEach(((o,l)=>{n.set(o,l)}))}))}computeViews(e,n,s,i){let r=Es();const o=Yr(),l=(function(){return Yr()})();return n.forEach(((c,u)=>{const d=s.get(u.key);i.has(u.key)&&(d===void 0||d.mutation instanceof Ri)?r=r.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Jr(d.mutation,u,d.mutation.getFieldMask(),ft.now())):o.set(u.key,Mn.empty())})),this.recalculateAndSaveOverlays(e,r).next((c=>(c.forEach(((u,d)=>o.set(u,d))),n.forEach(((u,d)=>l.set(u,new zx(d,o.get(u)??null)))),l)))}recalculateAndSaveOverlays(e,n){const s=Yr();let i=new gt(((o,l)=>o-l)),r=Le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const l of o)l.keys().forEach((c=>{const u=n.get(c);if(u===null)return;let d=s.get(c)||Mn.empty();d=l.applyToLocalView(u,d),s.set(c,d);const p=(i.get(l.batchId)||Le()).add(c);i=i.insert(l.batchId,p)}))})).next((()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,p=q_();d.forEach((m=>{if(!r.has(m)){const _=J_(n.get(m),s.get(m));_!==null&&p.set(m,_),r=r.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return Y.waitFor(o)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,n,s,i){return(function(o){return me.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):JD(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,i):this.getDocumentsMatchingCollectionQuery(e,n,s,i)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next((r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):Y.resolve(hi());let l=co,c=r;return o.next((u=>Y.forEach(u,((d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),r.get(d)?Y.resolve():this.remoteDocumentCache.getEntry(e,d).next((m=>{c=c.insert(d,m)}))))).next((()=>this.populateOverlays(e,u,r))).next((()=>this.computeViews(e,c,u,Le()))).next((d=>({batchId:l,changes:G_(d)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new me(n)).next((s=>{let i=Mr();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i}))}getDocumentsMatchingCollectionGroupQuery(e,n,s,i){const r=n.collectionGroup;let o=Mr();return this.indexManager.getCollectionParents(e,r).next((l=>Y.forEach(l,(c=>{const u=(function(p,m){return new cl(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,c.child(r));return this.getDocumentsMatchingCollectionQuery(e,u,s,i).next((d=>{d.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next((o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r,i)))).next((o=>{r.forEach(((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,en.newInvalidDocument(d)))}));let l=Mr();return o.forEach(((c,u)=>{const d=r.get(c);d!==void 0&&Jr(d.mutation,u,Mn.empty(),ft.now()),hl(n,u)&&(l=l.insert(c,u))})),l}))}}/**
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
 */class Yx{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return Y.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(i){return{id:i.id,version:i.version,createTime:Jn(i.createTime)}})(n)),Y.resolve()}getNamedQuery(e,n){return Y.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(i){return{name:i.name,query:Fx(i.bundledQuery),readTime:Jn(i.readTime)}})(n)),Y.resolve()}}/**
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
 */class Jx{constructor(){this.overlays=new gt(me.comparator),this.qr=new Map}getOverlay(e,n){return Y.resolve(this.overlays.get(n))}getOverlays(e,n){const s=hi();return Y.forEach(n,(i=>this.getOverlay(e,i).next((r=>{r!==null&&s.set(i,r)})))).next((()=>s))}saveOverlays(e,n,s){return s.forEach(((i,r)=>{this.St(e,n,r)})),Y.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.qr.get(s);return i!==void 0&&(i.forEach((r=>this.overlays=this.overlays.remove(r))),this.qr.delete(s)),Y.resolve()}getOverlaysForCollection(e,n,s){const i=hi(),r=n.length+1,o=new me(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return Y.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new gt(((u,d)=>u-d));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let d=r.get(u.largestBatchId);d===null&&(d=hi(),r=r.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=hi(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((u,d)=>l.set(u,d))),!(l.size()>=i)););return Y.resolve(l)}St(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(s.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new gx(n,s));let r=this.qr.get(n);r===void 0&&(r=Le(),this.qr.set(n,r)),this.qr.set(n,r.add(s.key))}}/**
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
 */class Xx{constructor(){this.sessionToken=zt.EMPTY_BYTE_STRING}getSessionToken(e){return Y.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,Y.resolve()}}/**
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
 */class ph{constructor(){this.Qr=new Vt(Ut.$r),this.Ur=new Vt(Ut.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const s=new Ut(e,n);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,n){e.forEach((s=>this.addReference(s,n)))}removeReference(e,n){this.Gr(new Ut(e,n))}zr(e,n){e.forEach((s=>this.removeReference(s,n)))}jr(e){const n=new me(new pt([])),s=new Ut(n,e),i=new Ut(n,e+1),r=[];return this.Ur.forEachInRange([s,i],(o=>{this.Gr(o),r.push(o.key)})),r}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new me(new pt([])),s=new Ut(n,e),i=new Ut(n,e+1);let r=Le();return this.Ur.forEachInRange([s,i],(o=>{r=r.add(o.key)})),r}containsKey(e){const n=new Ut(e,0),s=this.Qr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ut{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return me.comparator(e.key,n.key)||Ve(e.Yr,n.Yr)}static Kr(e,n){return Ve(e.Yr,n.Yr)||me.comparator(e.key,n.key)}}/**
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
 */class Zx{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Vt(Ut.$r)}checkEmpty(e){return Y.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new px(r,n,s,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new Ut(l.key,r)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return Y.resolve(o)}lookupMutationBatch(e,n){return Y.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ei(s),r=i<0?0:i;return Y.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return Y.resolve(this.mutationQueue.length===0?ih:this.tr-1)}getAllMutationBatches(e){return Y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ut(n,0),i=new Ut(n,Number.POSITIVE_INFINITY),r=[];return this.Zr.forEachInRange([s,i],(o=>{const l=this.Xr(o.Yr);r.push(l)})),Y.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Vt(Ve);return n.forEach((i=>{const r=new Ut(i,0),o=new Ut(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([r,o],(l=>{s=s.add(l.Yr)}))})),Y.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;me.isDocumentKey(r)||(r=r.child(""));const o=new Ut(new me(r),0);let l=new Vt(Ve);return this.Zr.forEachWhile((c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(l=l.add(c.Yr)),!0)}),o),Y.resolve(this.ti(l))}ti(e){const n=[];return e.forEach((s=>{const i=this.Xr(s);i!==null&&n.push(i)})),n}removeMutationBatch(e,n){Ke(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return Y.forEach(n.mutations,(i=>{const r=new Ut(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,n){const s=new Ut(n,0),i=this.Zr.firstAfterOrEqual(s);return Y.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,Y.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class eN{constructor(e){this.ri=e,this.docs=(function(){return new gt(me.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.ri(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return Y.resolve(s?s.document.mutableCopy():en.newInvalidDocument(n))}getEntries(e,n){let s=Es();return n.forEach((i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():en.newInvalidDocument(i))})),Y.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Es();const o=n.path,l=new me(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||RD(SD(d),s)<=0||(i.has(d.key)||hl(n,d))&&(r=r.insert(d.key,d.mutableCopy()))}return Y.resolve(r)}getAllFromCollectionGroup(e,n,s,i){ve(9500)}ii(e,n){return Y.forEach(this.docs,(s=>n(s)))}newChangeBuffer(e){return new tN(this)}getSize(e){return Y.resolve(this.size)}}class tN extends Wx{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((s,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(s)})),Y.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class nN{constructor(e){this.persistence=e,this.si=new Si((n=>ah(n)),lh),this.lastRemoteSnapshotVersion=Ae.min(),this.highestTargetId=0,this.oi=0,this._i=new ph,this.targetCount=0,this.ai=or.ur()}forEachTarget(e,n){return this.si.forEach(((s,i)=>n(i))),Y.resolve()}getLastRemoteSnapshotVersion(e){return Y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Y.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),Y.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.oi&&(this.oi=n),Y.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new or(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,Y.resolve()}updateTargetData(e,n){return this.Pr(n),Y.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,Y.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.si.forEach(((o,l)=>{l.sequenceNumber<=n&&s.get(l.targetId)===null&&(this.si.delete(o),r.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)})),Y.waitFor(r).next((()=>i))}getTargetCount(e){return Y.resolve(this.targetCount)}getTargetData(e,n){const s=this.si.get(n)||null;return Y.resolve(s)}addMatchingKeys(e,n,s){return this._i.Wr(n,s),Y.resolve()}removeMatchingKeys(e,n,s){this._i.zr(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach((o=>{r.push(i.markPotentiallyOrphaned(e,o))})),Y.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),Y.resolve()}getMatchingKeysForTargetId(e,n){const s=this._i.Hr(n);return Y.resolve(s)}containsKey(e,n){return Y.resolve(this._i.containsKey(n))}}/**
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
 */class hv{constructor(e,n){this.ui={},this.overlays={},this.ci=new ol(0),this.li=!1,this.li=!0,this.hi=new Xx,this.referenceDelegate=e(this),this.Pi=new nN(this),this.indexManager=new Ux,this.remoteDocumentCache=(function(i){return new eN(i)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new Bx(n),this.Ii=new Yx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Jx,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.ui[e.toKey()];return s||(s=new Zx(n,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,s){ce("MemoryPersistence","Starting transaction:",e);const i=new sN(this.ci.next());return this.referenceDelegate.Ei(),s(i).next((r=>this.referenceDelegate.di(i).next((()=>r)))).toPromise().then((r=>(i.raiseOnCommittedEvent(),r)))}Ai(e,n){return Y.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,n))))}}class sN extends kD{constructor(e){super(),this.currentSequenceNumber=e}}class gh{constructor(e){this.persistence=e,this.Ri=new ph,this.Vi=null}static mi(e){return new gh(e)}get fi(){if(this.Vi)return this.Vi;throw ve(60996)}addReference(e,n,s){return this.Ri.addReference(s,n),this.fi.delete(s.toString()),Y.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.fi.add(s.toString()),Y.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),Y.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((i=>this.fi.add(i.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next((i=>{i.forEach((r=>this.fi.add(r.toString())))})).next((()=>s.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Y.forEach(this.fi,(s=>{const i=me.fromPath(s);return this.gi(e,i).next((r=>{r||n.removeEntry(i,Ae.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((s=>{s?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return Y.or([()=>Y.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Ba{constructor(e,n){this.persistence=e,this.pi=new Si((s=>ND(s.path)),((s,i)=>s.isEqual(i))),this.garbageCollector=Qx(this,n)}static mi(e,n){return new Ba(e,n)}Ei(){}di(e){return Y.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>n.next((i=>s+i))))}wr(e){let n=0;return this.pr(e,(s=>{n++})).next((()=>n))}pr(e,n){return Y.forEach(this.pi,((s,i)=>this.br(e,s,i).next((r=>r?Y.resolve():n(i)))))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const i=this.persistence.getRemoteDocumentCache(),r=i.newChangeBuffer();return i.ii(e,(o=>this.br(e,o,n).next((l=>{l||(s++,r.removeEntry(o,Ae.min()))})))).next((()=>r.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),Y.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),Y.resolve()}removeReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),Y.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),Y.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ra(e.data.value)),n}br(e,n,s){return Y.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return Y.resolve(i!==void 0&&i>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class mh{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Es=s,this.ds=i}static As(e,n){let s=Le(),i=Le();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new mh(e,n.fromCache,s,i)}}/**
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
 */class iN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class rN{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return WR()?8:DD(rn())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,s,i){const r={result:null};return this.ys(e,n).next((o=>{r.result=o})).next((()=>{if(!r.result)return this.ws(e,n,i,s).next((o=>{r.result=o}))})).next((()=>{if(r.result)return;const o=new iN;return this.Ss(e,n,o).next((l=>{if(r.result=l,this.Vs)return this.bs(e,n,o,l.size)}))})).next((()=>r.result))}bs(e,n,s,i){return s.documentReadCount<this.fs?(Vi()<=Oe.DEBUG&&ce("QueryEngine","SDK will not create cache indexes for query:",Li(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),Y.resolve()):(Vi()<=Oe.DEBUG&&ce("QueryEngine","Query:",Li(n),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.gs*i?(Vi()<=Oe.DEBUG&&ce("QueryEngine","The SDK decides to create cache indexes for query:",Li(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yn(n))):Y.resolve())}ys(e,n){if(cp(n))return Y.resolve(null);let s=Yn(n);return this.indexManager.getIndexType(e,s).next((i=>i===0?null:(n.limit!==null&&i===1&&(n=Oc(n,null,"F"),s=Yn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next((r=>{const o=Le(...r);return this.ps.getDocuments(e,o).next((l=>this.indexManager.getMinOffset(e,s).next((c=>{const u=this.Ds(n,l);return this.Cs(n,u,o,c.readTime)?this.ys(e,Oc(n,null,"F")):this.vs(e,u,n,c)}))))})))))}ws(e,n,s,i){return cp(n)||i.isEqual(Ae.min())?Y.resolve(null):this.ps.getDocuments(e,s).next((r=>{const o=this.Ds(n,r);return this.Cs(n,o,s,i)?Y.resolve(null):(Vi()<=Oe.DEBUG&&ce("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Li(n)),this.vs(e,o,n,bD(i,co)).next((l=>l)))}))}Ds(e,n){let s=new Vt(H_(e));return n.forEach(((i,r)=>{hl(e,r)&&(s=s.add(r))})),s}Cs(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ss(e,n,s){return Vi()<=Oe.DEBUG&&ce("QueryEngine","Using full collection scan to execute query:",Li(n)),this.ps.getDocumentsMatchingQuery(e,n,zs.min(),s)}vs(e,n,s,i){return this.ps.getDocumentsMatchingQuery(e,s,i).next((r=>(n.forEach((o=>{r=r.insert(o.key,o)})),r)))}}/**
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
 */const _h="LocalStore",oN=3e8;class aN{constructor(e,n,s,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new gt(Ve),this.xs=new Si((r=>ah(r)),lh),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Kx(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function lN(t,e,n,s){return new aN(t,e,n,s)}async function dv(t,e){const n=Ee(t);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next((r=>(i=r,n.Bs(e),n.mutationQueue.getAllMutationBatches(s)))).next((r=>{const o=[],l=[];let c=Le();for(const u of i){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of r){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(s,c).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:l})))}))}))}function cN(t,e){const n=Ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const i=e.batch.keys(),r=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,c,u,d){const p=u.batch,m=p.keys();let _=Y.resolve();return m.forEach((w=>{_=_.next((()=>d.getEntry(c,w))).next((b=>{const I=u.docVersions.get(w);Ke(I!==null,48541),b.version.compareTo(I)<0&&(p.applyToRemoteDocument(b,u),b.isValidDocument()&&(b.setReadTime(u.commitVersion),d.addEntry(b)))}))})),_.next((()=>l.mutationQueue.removeMutationBatch(c,p)))})(n,s,e,r).next((()=>r.apply(s))).next((()=>n.mutationQueue.performConsistencyCheck(s))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(l){let c=Le();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c})(e)))).next((()=>n.localDocuments.getDocuments(s,i)))}))}function fv(t){const e=Ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function uN(t,e){const n=Ee(t),s=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const l=[];e.targetChanges.forEach(((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.Pi.removeMatchingKeys(r,d.removedDocuments,p).next((()=>n.Pi.addMatchingKeys(r,d.addedDocuments,p))));let _=m.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(zt.EMPTY_BYTE_STRING,Ae.min()).withLastLimboFreeSnapshotVersion(Ae.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,s)),i=i.insert(p,_),(function(b,I,x){return b.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=oN?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0})(m,_,d)&&l.push(n.Pi.updateTargetData(r,_))}));let c=Es(),u=Le();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(r,d))})),l.push(hN(r,o,e.documentUpdates).next((d=>{c=d.ks,u=d.qs}))),!s.isEqual(Ae.min())){const d=n.Pi.getLastRemoteSnapshotVersion(r).next((p=>n.Pi.setTargetsMetadata(r,r.currentSequenceNumber,s)));l.push(d)}return Y.waitFor(l).next((()=>o.apply(r))).next((()=>n.localDocuments.getLocalViewOfDocuments(r,c,u))).next((()=>c))})).then((r=>(n.Ms=i,r)))}function hN(t,e,n){let s=Le(),i=Le();return n.forEach((r=>s=s.add(r))),e.getEntries(t,s).next((r=>{let o=Es();return n.forEach(((l,c)=>{const u=r.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(Ae.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):ce(_h,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)})),{ks:o,qs:i}}))}function dN(t,e){const n=Ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=ih),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function fN(t,e){const n=Ee(t);return n.persistence.runTransaction("Allocate target","readwrite",(s=>{let i;return n.Pi.getTargetData(s,e).next((r=>r?(i=r,Y.resolve(i)):n.Pi.allocateTargetId(s).next((o=>(i=new Bs(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Pi.addTargetData(s,i).next((()=>i)))))))})).then((s=>{const i=n.Ms.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.xs.set(e,s.targetId)),s}))}async function Uc(t,e,n){const s=Ee(t),i=s.Ms.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,(o=>s.persistence.referenceDelegate.removeTarget(o,i)))}catch(o){if(!gr(o))throw o;ce(_h,`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ms=s.Ms.remove(e),s.xs.delete(i.target)}function wp(t,e,n){const s=Ee(t);let i=Ae.min(),r=Le();return s.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,u,d){const p=Ee(c),m=p.xs.get(d);return m!==void 0?Y.resolve(p.Ms.get(m)):p.Pi.getTargetData(u,d)})(s,o,Yn(e)).next((l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(o,l.targetId).next((c=>{r=c}))})).next((()=>s.Fs.getDocumentsMatchingQuery(o,e,n?i:Ae.min(),n?r:Le()))).next((l=>(pN(s,ZD(e),l),{documents:l,Qs:r})))))}function pN(t,e,n){let s=t.Os.get(e)||Ae.min();n.forEach(((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)})),t.Os.set(e,s)}class Ep{constructor(){this.activeTargetIds=rx()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class gN{constructor(){this.Mo=new Ep,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,s){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Ep,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class mN{Oo(e){}shutdown(){}}/**
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
 */const Tp="ConnectivityMonitor";class Cp{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ce(Tp,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ce(Tp,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let zo=null;function $c(){return zo===null?zo=(function(){return 268435456+Math.round(2147483648*Math.random())})():zo++,"0x"+zo.toString(16)}/**
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
 */const ec="RestConnection",_N={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class vN{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${s}/databases/${i}`,this.Wo=this.databaseId.database===Da?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Go(e,n,s,i,r){const o=$c(),l=this.zo(e,n.toUriEncodedString());ce(ec,`Sending RPC '${e}' ${o}:`,l,s);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,i,r);const{host:u}=new URL(l),d=ur(u);return this.Jo(e,l,c,s,d).then((p=>(ce(ec,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw nr(ec,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",s),p}))}Ho(e,n,s,i,r,o){return this.Go(e,n,s,i,r)}jo(e,n,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+fr})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((i,r)=>e[r]=i)),s&&s.headers.forEach(((i,r)=>e[r]=i))}zo(e,n){const s=_N[e];return`${this.Uo}/v1/${n}:${s}`}terminate(){}}/**
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
 */class yN{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Jt="WebChannelConnection";class AN extends vN{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,s,i,r){const o=$c();return new Promise(((l,c)=>{const u=new __;u.setWithCredentials(!0),u.listenOnce(v_.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case ia.NO_ERROR:const p=u.getResponseJson();ce(Jt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case ia.TIMEOUT:ce(Jt,`RPC '${e}' ${o} timed out`),c(new fe(X.DEADLINE_EXCEEDED,"Request time out"));break;case ia.HTTP_ERROR:const m=u.getStatus();if(ce(Jt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const w=_?.error;if(w&&w.status&&w.message){const b=(function(x){const U=x.toLowerCase().replace(/_/g,"-");return Object.values(X).indexOf(U)>=0?U:X.UNKNOWN})(w.status);c(new fe(b,w.message))}else c(new fe(X.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new fe(X.UNAVAILABLE,"Connection failed."));break;default:ve(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{ce(Jt,`RPC '${e}' ${o} completed.`)}}));const d=JSON.stringify(i);ce(Jt,`RPC '${e}' ${o} sending request:`,i),u.send(n,"POST",d,s,15)}))}T_(e,n,s){const i=$c(),r=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=I_(),l=A_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const d=r.join("");ce(Jt,`Creating RPC '${e}' stream ${i}: ${d}`,c);const p=o.createWebChannel(d,c);this.I_(p);let m=!1,_=!1;const w=new yN({Yo:I=>{_?ce(Jt,`Not sending because RPC '${e}' stream ${i} is closed:`,I):(m||(ce(Jt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),ce(Jt,`RPC '${e}' stream ${i} sending:`,I),p.send(I))},Zo:()=>p.close()}),b=(I,x,U)=>{I.listen(x,(F=>{try{U(F)}catch(j){setTimeout((()=>{throw j}),0)}}))};return b(p,Nr.EventType.OPEN,(()=>{_||(ce(Jt,`RPC '${e}' stream ${i} transport opened.`),w.o_())})),b(p,Nr.EventType.CLOSE,(()=>{_||(_=!0,ce(Jt,`RPC '${e}' stream ${i} transport closed`),w.a_(),this.E_(p))})),b(p,Nr.EventType.ERROR,(I=>{_||(_=!0,nr(Jt,`RPC '${e}' stream ${i} transport errored. Name:`,I.name,"Message:",I.message),w.a_(new fe(X.UNAVAILABLE,"The operation could not be completed")))})),b(p,Nr.EventType.MESSAGE,(I=>{if(!_){const x=I.data[0];Ke(!!x,16349);const U=x,F=U?.error||U[0]?.error;if(F){ce(Jt,`RPC '${e}' stream ${i} received error:`,F);const j=F.status;let se=(function(A){const T=Tt[A];if(T!==void 0)return ev(T)})(j),Ie=F.message;se===void 0&&(se=X.INTERNAL,Ie="Unknown error status: "+j+" with message "+F.message),_=!0,w.a_(new fe(se,Ie)),p.close()}else ce(Jt,`RPC '${e}' stream ${i} received:`,x),w.u_(x)}})),b(l,y_.STAT_EVENT,(I=>{I.stat===Pc.PROXY?ce(Jt,`RPC '${e}' stream ${i} detected buffering proxy`):I.stat===Pc.NOPROXY&&ce(Jt,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{w.__()}),0),w}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function tc(){return typeof document<"u"?document:null}/**
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
 */function gl(t){return new Tx(t,!0)}/**
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
 */class pv{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Mi=e,this.timerId=n,this.d_=s,this.A_=i,this.R_=r,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-s);i>0&&ce("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const bp="PersistentStream";class gv{constructor(e,n,s,i,r,o,l,c){this.Mi=e,this.S_=s,this.b_=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new pv(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===X.RESOURCE_EXHAUSTED?(ws(n.toString()),ws("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===X.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,i])=>{this.D_===n&&this.G_(s,i)}),(s=>{e((()=>{const i=new fe(X.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(i)}))}))}G_(e,n){const s=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{s((()=>this.z_(i)))})),this.stream.onMessage((i=>{s((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ce(bp,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(ce(bp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class IN extends gv{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=Sx(this.serializer,e),s=(function(r){if(!("targetChange"in r))return Ae.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?Ae.min():o.readTime?Jn(o.readTime):Ae.min()})(e);return this.listener.H_(n,s)}Y_(e){const n={};n.database=Fc(this.serializer),n.addTarget=(function(r,o){let l;const c=o.target;if(l=Mc(c)?{documents:kx(r,c)}:{query:Dx(r,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=sv(r,o.resumeToken);const u=Vc(r,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(Ae.min())>0){l.readTime=La(r,o.snapshotVersion.toTimestamp());const u=Vc(r,o.expectedCount);u!==null&&(l.expectedCount=u)}return l})(this.serializer,e);const s=Nx(this.serializer,e);s&&(n.labels=s),this.q_(n)}Z_(e){const n={};n.database=Fc(this.serializer),n.removeTarget=e,this.q_(n)}}class wN extends gv{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Ke(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ke(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ke(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=Px(e.writeResults,e.commitTime),s=Jn(e.commitTime);return this.listener.na(s,n)}ra(){const e={};e.database=Fc(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((s=>Rx(this.serializer,s)))};this.q_(n)}}/**
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
 */class EN{}class TN extends EN{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new fe(X.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.Go(e,Lc(n,s),i,r,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new fe(X.UNKNOWN,r.toString())}))}Ho(e,n,s,i,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.Ho(e,Lc(n,s),i,o,l,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new fe(X.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class CN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ws(n),this.aa=!1):ce("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Ai="RemoteStore";class bN{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=r,this.Aa.Oo((o=>{s.enqueueAndForget((async()=>{Pi(this)&&(ce(Ai,"Restarting streams for network reachability change."),await(async function(c){const u=Ee(c);u.Ea.add(4),await Ro(u),u.Ra.set("Unknown"),u.Ea.delete(4),await ml(u)})(this))}))})),this.Ra=new CN(s,i)}}async function ml(t){if(Pi(t))for(const e of t.da)await e(!0)}async function Ro(t){for(const e of t.da)await e(!1)}function mv(t,e){const n=Ee(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Ih(n)?Ah(n):mr(n).O_()&&yh(n,e))}function vh(t,e){const n=Ee(t),s=mr(n);n.Ia.delete(e),s.O_()&&_v(n,e),n.Ia.size===0&&(s.O_()?s.L_():Pi(n)&&n.Ra.set("Unknown"))}function yh(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ae.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}mr(t).Y_(e)}function _v(t,e){t.Va.Ue(e),mr(t).Z_(e)}function Ah(t){t.Va=new Ax({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),mr(t).start(),t.Ra.ua()}function Ih(t){return Pi(t)&&!mr(t).x_()&&t.Ia.size>0}function Pi(t){return Ee(t).Ea.size===0}function vv(t){t.Va=void 0}async function SN(t){t.Ra.set("Online")}async function RN(t){t.Ia.forEach(((e,n)=>{yh(t,e)}))}async function PN(t,e){vv(t),Ih(t)?(t.Ra.ha(e),Ah(t)):t.Ra.set("Unknown")}async function kN(t,e,n){if(t.Ra.set("Online"),e instanceof nv&&e.state===2&&e.cause)try{await(async function(i,r){const o=r.cause;for(const l of r.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))})(t,e)}catch(s){ce(Ai,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Fa(t,s)}else if(e instanceof la?t.Va.Ze(e):e instanceof tv?t.Va.st(e):t.Va.tt(e),!n.isEqual(Ae.min()))try{const s=await fv(t.localStore);n.compareTo(s)>=0&&await(function(r,o){const l=r.Va.Tt(o);return l.targetChanges.forEach(((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=r.Ia.get(u);d&&r.Ia.set(u,d.withResumeToken(c.resumeToken,o))}})),l.targetMismatches.forEach(((c,u)=>{const d=r.Ia.get(c);if(!d)return;r.Ia.set(c,d.withResumeToken(zt.EMPTY_BYTE_STRING,d.snapshotVersion)),_v(r,c);const p=new Bs(d.target,c,u,d.sequenceNumber);yh(r,p)})),r.remoteSyncer.applyRemoteEvent(l)})(t,n)}catch(s){ce(Ai,"Failed to raise snapshot:",s),await Fa(t,s)}}async function Fa(t,e,n){if(!gr(e))throw e;t.Ea.add(1),await Ro(t),t.Ra.set("Offline"),n||(n=()=>fv(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{ce(Ai,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await ml(t)}))}function yv(t,e){return e().catch((n=>Fa(t,n,e)))}async function _l(t){const e=Ee(t),n=Xs(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:ih;for(;DN(e);)try{const i=await dN(e.localStore,s);if(i===null){e.Ta.length===0&&n.L_();break}s=i.batchId,xN(e,i)}catch(i){await Fa(e,i)}Av(e)&&Iv(e)}function DN(t){return Pi(t)&&t.Ta.length<10}function xN(t,e){t.Ta.push(e);const n=Xs(t);n.O_()&&n.X_&&n.ea(e.mutations)}function Av(t){return Pi(t)&&!Xs(t).x_()&&t.Ta.length>0}function Iv(t){Xs(t).start()}async function NN(t){Xs(t).ra()}async function MN(t){const e=Xs(t);for(const n of t.Ta)e.ea(n.mutations)}async function ON(t,e,n){const s=t.Ta.shift(),i=hh.from(s,e,n);await yv(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await _l(t)}async function VN(t,e){e&&Xs(t).X_&&await(async function(s,i){if((function(o){return _x(o)&&o!==X.ABORTED})(i.code)){const r=s.Ta.shift();Xs(s).B_(),await yv(s,(()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i))),await _l(s)}})(t,e),Av(t)&&Iv(t)}async function Sp(t,e){const n=Ee(t);n.asyncQueue.verifyOperationInProgress(),ce(Ai,"RemoteStore received new credentials");const s=Pi(n);n.Ea.add(3),await Ro(n),s&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await ml(n)}async function LN(t,e){const n=Ee(t);e?(n.Ea.delete(2),await ml(n)):e||(n.Ea.add(2),await Ro(n),n.Ra.set("Unknown"))}function mr(t){return t.ma||(t.ma=(function(n,s,i){const r=Ee(n);return r.sa(),new IN(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)})(t.datastore,t.asyncQueue,{Xo:SN.bind(null,t),t_:RN.bind(null,t),r_:PN.bind(null,t),H_:kN.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),Ih(t)?Ah(t):t.Ra.set("Unknown")):(await t.ma.stop(),vv(t))}))),t.ma}function Xs(t){return t.fa||(t.fa=(function(n,s,i){const r=Ee(n);return r.sa(),new wN(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)})(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:NN.bind(null,t),r_:VN.bind(null,t),ta:MN.bind(null,t),na:ON.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await _l(t)):(await t.fa.stop(),t.Ta.length>0&&(ce(Ai,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
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
 */class wh{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new js,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,l=new wh(e,n,o,i,r);return l.start(s),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new fe(X.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Eh(t,e){if(ws("AsyncQueue",`${e}: ${t}`),gr(t))return new fe(X.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ki{static emptySet(e){return new Ki(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||me.comparator(n.key,s.key):(n,s)=>me.comparator(n.key,s.key),this.keyedMap=Mr(),this.sortedSet=new gt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,s)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ki)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Ki;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Rp{constructor(){this.ga=new gt(me.comparator)}track(e){const n=e.doc.key,s=this.ga.get(n);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(n,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(n):e.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ve(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,s)=>{e.push(s)})),e}}class ar{constructor(e,n,s,i,r,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach((l=>{o.push({type:0,doc:l})})),new ar(e,n,Ki.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ul(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class BN{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class FN{constructor(){this.queries=Pp(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const i=Ee(n),r=i.queries;i.queries=Pp(),r.forEach(((o,l)=>{for(const c of l.Sa)c.onError(s)}))})(this,new fe(X.ABORTED,"Firestore shutting down"))}}function Pp(){return new Si((t=>$_(t)),ul)}async function UN(t,e){const n=Ee(t);let s=3;const i=e.query;let r=n.queries.get(i);r?!r.ba()&&e.Da()&&(s=2):(r=new BN,s=e.Da()?0:1);try{switch(s){case 0:r.wa=await n.onListen(i,!0);break;case 1:r.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Eh(o,`Initialization of query '${Li(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,r),r.Sa.push(e),e.va(n.onlineState),r.wa&&e.Fa(r.wa)&&Th(n)}async function $N(t,e){const n=Ee(t),s=e.query;let i=3;const r=n.queries.get(s);if(r){const o=r.Sa.indexOf(e);o>=0&&(r.Sa.splice(o,1),r.Sa.length===0?i=e.Da()?0:1:!r.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function HN(t,e){const n=Ee(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const l of o.Sa)l.Fa(i)&&(s=!0);o.wa=i}}s&&Th(n)}function jN(t,e,n){const s=Ee(t),i=s.queries.get(e);if(i)for(const r of i.Sa)r.onError(n);s.queries.delete(e)}function Th(t){t.Ca.forEach((e=>{e.next()}))}var Hc,kp;(kp=Hc||(Hc={})).Ma="default",kp.Cache="cache";class GN{constructor(e,n,s){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new ar(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=ar.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Hc.Cache}}/**
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
 */class wv{constructor(e){this.key=e}}class Ev{constructor(e){this.key=e}}class qN{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Le(),this.mutatedKeys=Le(),this.eu=H_(e),this.tu=new Ki(this.eu)}get nu(){return this.Ya}ru(e,n){const s=n?n.iu:new Rp,i=n?n.tu:this.tu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((d,p)=>{const m=i.get(d),_=hl(this.query,p)?p:null,w=!!m&&this.mutatedKeys.has(m.key),b=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let I=!1;m&&_?m.data.isEqual(_.data)?w!==b&&(s.track({type:3,doc:_}),I=!0):this.su(m,_)||(s.track({type:2,doc:_}),I=!0,(c&&this.eu(_,c)>0||u&&this.eu(_,u)<0)&&(l=!0)):!m&&_?(s.track({type:0,doc:_}),I=!0):m&&!_&&(s.track({type:1,doc:m}),I=!0,(c||u)&&(l=!0)),I&&(_?(o=o.add(_),r=b?r.add(d):r.delete(d)):(o=o.delete(d),r=r.delete(d)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),r=r.delete(d.key),s.track({type:1,doc:d})}return{tu:o,iu:s,Cs:l,mutatedKeys:r}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,i){const r=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((d,p)=>(function(_,w){const b=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ve(20277,{Rt:I})}};return b(_)-b(w)})(d.type,p.type)||this.eu(d.doc,p.doc))),this.ou(s),i=i??!1;const l=n&&!i?this._u():[],c=this.Xa.size===0&&this.current&&!i?1:0,u=c!==this.Za;return this.Za=c,o.length!==0||u?{snapshot:new ar(this.query,e.tu,r,o,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Rp,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Le(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const n=[];return e.forEach((s=>{this.Xa.has(s)||n.push(new Ev(s))})),this.Xa.forEach((s=>{e.has(s)||n.push(new wv(s))})),n}cu(e){this.Ya=e.Qs,this.Xa=Le();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return ar.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Ch="SyncEngine";class QN{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class WN{constructor(e){this.key=e,this.hu=!1}}class zN{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Si((l=>$_(l)),ul),this.Iu=new Map,this.Eu=new Set,this.du=new gt(me.comparator),this.Au=new Map,this.Ru=new ph,this.Vu={},this.mu=new Map,this.fu=or.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function KN(t,e,n=!0){const s=Pv(t);let i;const r=s.Tu.get(e);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.lu()):i=await Tv(s,e,n,!0),i}async function YN(t,e){const n=Pv(t);await Tv(n,e,!0,!1)}async function Tv(t,e,n,s){const i=await fN(t.localStore,Yn(e)),r=i.targetId,o=t.sharedClientState.addLocalQueryTarget(r,n);let l;return s&&(l=await JN(t,e,r,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&mv(t.remoteStore,i),l}async function JN(t,e,n,s,i){t.pu=(p,m,_)=>(async function(b,I,x,U){let F=I.view.ru(x);F.Cs&&(F=await wp(b.localStore,I.query,!1).then((({documents:S})=>I.view.ru(S,F))));const j=U&&U.targetChanges.get(I.targetId),se=U&&U.targetMismatches.get(I.targetId)!=null,Ie=I.view.applyChanges(F,b.isPrimaryClient,j,se);return xp(b,I.targetId,Ie.au),Ie.snapshot})(t,p,m,_);const r=await wp(t.localStore,e,!0),o=new qN(e,r.Qs),l=o.ru(r.documents),c=So.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),u=o.applyChanges(l,t.isPrimaryClient,c);xp(t,n,u.au);const d=new QN(e,n,o);return t.Tu.set(e,d),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function XN(t,e,n){const s=Ee(t),i=s.Tu.get(e),r=s.Iu.get(i.targetId);if(r.length>1)return s.Iu.set(i.targetId,r.filter((o=>!ul(o,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await Uc(s.localStore,i.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(i.targetId),n&&vh(s.remoteStore,i.targetId),jc(s,i.targetId)})).catch(pr)):(jc(s,i.targetId),await Uc(s.localStore,i.targetId,!0))}async function ZN(t,e){const n=Ee(t),s=n.Tu.get(e),i=n.Iu.get(s.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),vh(n.remoteStore,s.targetId))}async function eM(t,e,n){const s=aM(t);try{const i=await(function(o,l){const c=Ee(o),u=ft.now(),d=l.reduce(((_,w)=>_.add(w.key)),Le());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",(_=>{let w=Es(),b=Le();return c.Ns.getEntries(_,d).next((I=>{w=I,w.forEach(((x,U)=>{U.isValidDocument()||(b=b.add(x))}))})).next((()=>c.localDocuments.getOverlayedDocuments(_,w))).next((I=>{p=I;const x=[];for(const U of l){const F=dx(U,p.get(U.key).overlayedDocument);F!=null&&x.push(new Ri(U.key,F,M_(F.value.mapValue),ms.exists(!0)))}return c.mutationQueue.addMutationBatch(_,u,x,l)})).next((I=>{m=I;const x=I.applyToLocalDocumentSet(p,b);return c.documentOverlayCache.saveOverlays(_,I.batchId,x)}))})).then((()=>({batchId:m.batchId,changes:G_(p)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),(function(o,l,c){let u=o.Vu[o.currentUser.toKey()];u||(u=new gt(Ve)),u=u.insert(l,c),o.Vu[o.currentUser.toKey()]=u})(s,i.batchId,n),await Po(s,i.changes),await _l(s.remoteStore)}catch(i){const r=Eh(i,"Failed to persist write");n.reject(r)}}async function Cv(t,e){const n=Ee(t);try{const s=await uN(n.localStore,e);e.targetChanges.forEach(((i,r)=>{const o=n.Au.get(r);o&&(Ke(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?Ke(o.hu,14607):i.removedDocuments.size>0&&(Ke(o.hu,42227),o.hu=!1))})),await Po(n,s,e)}catch(s){await pr(s)}}function Dp(t,e,n){const s=Ee(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.Tu.forEach(((r,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)})),(function(o,l){const c=Ee(o);c.onlineState=l;let u=!1;c.queries.forEach(((d,p)=>{for(const m of p.Sa)m.va(l)&&(u=!0)})),u&&Th(c)})(s.eventManager,e),i.length&&s.Pu.H_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function tM(t,e,n){const s=Ee(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.Au.get(e),r=i&&i.key;if(r){let o=new gt(me.comparator);o=o.insert(r,en.newNoDocument(r,Ae.min()));const l=Le().add(r),c=new pl(Ae.min(),new Map,new gt(Ve),o,l);await Cv(s,c),s.du=s.du.remove(r),s.Au.delete(e),bh(s)}else await Uc(s.localStore,e,!1).then((()=>jc(s,e,n))).catch(pr)}async function nM(t,e){const n=Ee(t),s=e.batch.batchId;try{const i=await cN(n.localStore,e);Sv(n,s,null),bv(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Po(n,i)}catch(i){await pr(i)}}async function sM(t,e,n){const s=Ee(t);try{const i=await(function(o,l){const c=Ee(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next((p=>(Ke(p!==null,37113),d=p.keys(),c.mutationQueue.removeMutationBatch(u,p)))).next((()=>c.mutationQueue.performConsistencyCheck(u))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d))).next((()=>c.localDocuments.getDocuments(u,d)))}))})(s.localStore,e);Sv(s,e,n),bv(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Po(s,i)}catch(i){await pr(i)}}function bv(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function Sv(t,e,n){const s=Ee(t);let i=s.Vu[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.Vu[s.currentUser.toKey()]=i}}function jc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Iu.get(e))t.Tu.delete(s),n&&t.Pu.yu(s,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((s=>{t.Ru.containsKey(s)||Rv(t,s)}))}function Rv(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(vh(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),bh(t))}function xp(t,e,n){for(const s of n)s instanceof wv?(t.Ru.addReference(s.key,e),iM(t,s)):s instanceof Ev?(ce(Ch,"Document no longer in limbo: "+s.key),t.Ru.removeReference(s.key,e),t.Ru.containsKey(s.key)||Rv(t,s.key)):ve(19791,{wu:s})}function iM(t,e){const n=e.key,s=n.path.canonicalString();t.du.get(n)||t.Eu.has(s)||(ce(Ch,"New document in limbo: "+n),t.Eu.add(s),bh(t))}function bh(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new me(pt.fromString(e)),s=t.fu.next();t.Au.set(s,new WN(n)),t.du=t.du.insert(n,s),mv(t.remoteStore,new Bs(Yn(ch(n.path)),s,"TargetPurposeLimboResolution",ol.ce))}}async function Po(t,e,n){const s=Ee(t),i=[],r=[],o=[];s.Tu.isEmpty()||(s.Tu.forEach(((l,c)=>{o.push(s.pu(c,e,n).then((u=>{if((u||n)&&s.isPrimaryClient){const d=u?!u.fromCache:n?.targetChanges.get(c.targetId)?.current;s.sharedClientState.updateQueryState(c.targetId,d?"current":"not-current")}if(u){i.push(u);const d=mh.As(c.targetId,u);r.push(d)}})))})),await Promise.all(o),s.Pu.H_(i),await(async function(c,u){const d=Ee(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>Y.forEach(u,(m=>Y.forEach(m.Es,(_=>d.persistence.referenceDelegate.addReference(p,m.targetId,_))).next((()=>Y.forEach(m.ds,(_=>d.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))))))}catch(p){if(!gr(p))throw p;ce(_h,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const _=d.Ms.get(m),w=_.snapshotVersion,b=_.withLastLimboFreeSnapshotVersion(w);d.Ms=d.Ms.insert(m,b)}}})(s.localStore,r))}async function rM(t,e){const n=Ee(t);if(!n.currentUser.isEqual(e)){ce(Ch,"User change. New user:",e.toKey());const s=await dv(n.localStore,e);n.currentUser=e,(function(r,o){r.mu.forEach((l=>{l.forEach((c=>{c.reject(new fe(X.CANCELLED,o))}))})),r.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Po(n,s.Ls)}}function oM(t,e){const n=Ee(t),s=n.Au.get(e);if(s&&s.hu)return Le().add(s.key);{let i=Le();const r=n.Iu.get(e);if(!r)return i;for(const o of r){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function Pv(t){const e=Ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Cv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=oM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tM.bind(null,e),e.Pu.H_=HN.bind(null,e.eventManager),e.Pu.yu=jN.bind(null,e.eventManager),e}function aM(t){const e=Ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=sM.bind(null,e),e}class Ua{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=gl(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return lN(this.persistence,new rN,e.initialUser,this.serializer)}Cu(e){return new hv(gh.mi,this.serializer)}Du(e){return new gN}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ua.provider={build:()=>new Ua};class lM extends Ua{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Ke(this.persistence.referenceDelegate instanceof Ba,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Gx(s,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?_n.withCacheSize(this.cacheSizeBytes):_n.DEFAULT;return new hv((s=>Ba.mi(s,n)),this.serializer)}}class Gc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Dp(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=rM.bind(null,this.syncEngine),await LN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new FN})()}createDatastore(e){const n=gl(e.databaseInfo.databaseId),s=(function(r){return new AN(r)})(e.databaseInfo);return(function(r,o,l,c){return new TN(r,o,l,c)})(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return(function(s,i,r,o,l){return new bN(s,i,r,o,l)})(this.localStore,this.datastore,e.asyncQueue,(n=>Dp(this.syncEngine,n,0)),(function(){return Cp.v()?new Cp:new mN})())}createSyncEngine(e,n){return(function(i,r,o,l,c,u,d){const p=new zN(i,r,o,l,c,u);return d&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const s=Ee(n);ce(Ai,"RemoteStore shutting down."),s.Ea.add(5),await Ro(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Gc.provider={build:()=>new Gc};/**
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
 */class cM{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):ws("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
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
 */const Zs="FirestoreClient";class uM{constructor(e,n,s,i,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Xt.UNAUTHENTICATED,this.clientId=nh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(s,(async o=>{ce(Zs,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(s,(o=>(ce(Zs,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new js;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Eh(n,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function nc(t,e){t.asyncQueue.verifyOperationInProgress(),ce(Zs,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async i=>{s.isEqual(i)||(await dv(e.localStore,i),s=i)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Np(t,e){t.asyncQueue.verifyOperationInProgress();const n=await hM(t);ce(Zs,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((s=>Sp(e.remoteStore,s))),t.setAppCheckTokenChangeListener(((s,i)=>Sp(e.remoteStore,i))),t._onlineComponents=e}async function hM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ce(Zs,"Using user provided OfflineComponentProvider");try{await nc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(i){return i.name==="FirebaseError"?i.code===X.FAILED_PRECONDITION||i.code===X.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(n))throw n;nr("Error using user provided cache. Falling back to memory cache: "+n),await nc(t,new Ua)}}else ce(Zs,"Using default OfflineComponentProvider"),await nc(t,new lM(void 0));return t._offlineComponents}async function kv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ce(Zs,"Using user provided OnlineComponentProvider"),await Np(t,t._uninitializedComponentsProvider._online)):(ce(Zs,"Using default OnlineComponentProvider"),await Np(t,new Gc))),t._onlineComponents}function dM(t){return kv(t).then((e=>e.syncEngine))}async function fM(t){const e=await kv(t),n=e.eventManager;return n.onListen=KN.bind(null,e.syncEngine),n.onUnlisten=XN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=YN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=ZN.bind(null,e.syncEngine),n}function pM(t,e,n={}){const s=new js;return t.asyncQueue.enqueueAndForget((async()=>(function(r,o,l,c,u){const d=new cM({next:m=>{d.Nu(),o.enqueueAndForget((()=>$N(r,p)));const _=m.docs.has(l);!_&&m.fromCache?u.reject(new fe(X.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&c&&c.source==="server"?u.reject(new fe(X.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new GN(ch(l.path),d,{includeMetadataChanges:!0,qa:!0});return UN(r,p)})(await fM(t),t.asyncQueue,e,n,s))),s.promise}/**
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
 */function Dv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Mp=new Map;/**
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
 */const xv="firestore.googleapis.com",Op=!0;class Vp{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new fe(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=xv,this.ssl=Op}else this.host=e.host,this.ssl=e.ssl??Op;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=uv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Hx)throw new fe(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}CD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Dv(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new fe(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new fe(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new fe(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,i){return s.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Sh{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new fe(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new fe(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new pD;switch(s.type){case"firstParty":return new vD(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new fe(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=Mp.get(n);s&&(ce("ComponentProvider","Removing Datastore"),Mp.delete(n),s.terminate())})(this),Promise.resolve()}}function gM(t,e,n,s={}){t=lo(t,Sh);const i=ur(e),r=t._getSettings(),o={...r,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(Rm(`https://${l}`),Pm("Firestore",!0)),r.host!==xv&&r.host!==l&&nr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...r,host:l,ssl:i,emulatorOptions:s};if(!Ws(c,o)&&(t._setSettings(c),s.mockUserToken)){let u,d;if(typeof s.mockUserToken=="string")u=s.mockUserToken,d=Xt.MOCK_USER;else{u=FR(s.mockUserToken,t._app?.options.projectId);const p=s.mockUserToken.sub||s.mockUserToken.user_id;if(!p)throw new fe(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Xt(p)}t._authCredentials=new gD(new E_(u,d))}}/**
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
 */class Rh{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Rh(this.firestore,e,this._query)}}class $t{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mo(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $t(this.firestore,e,this._key)}toJSON(){return{type:$t._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(Co(n,$t._jsonSchema))return new $t(e,s||null,new me(pt.fromString(n.referencePath)))}}$t._jsonSchemaVersion="firestore/documentReference/1.0",$t._jsonSchema={type:bt("string",$t._jsonSchemaVersion),referencePath:bt("string")};class mo extends Rh{constructor(e,n,s){super(e,n,ch(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $t(this.firestore,null,new me(e))}withConverter(e){return new mo(this.firestore,e,this._path)}}function Nv(t,e,...n){if(t=vn(t),arguments.length===1&&(e=nh.newId()),TD("doc","path",e),t instanceof Sh){const s=pt.fromString(e,...n);return Yf(s),new $t(t,null,new me(s))}{if(!(t instanceof $t||t instanceof mo))throw new fe(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(pt.fromString(e,...n));return Yf(s),new $t(t.firestore,t instanceof mo?t.converter:null,new me(s))}}/**
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
 */const Lp="AsyncQueue";class Bp{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new pv(this,"async_queue_retry"),this._c=()=>{const s=tc();s&&ce(Lp,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=tc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=tc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new js;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!gr(e))throw e;ce(Lp,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,ws("INTERNAL UNHANDLED ERROR: ",Fp(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=wh.createAndSchedule(this,e,n,s,(r=>this.hc(r)));return this.tc.push(i),i}uc(){this.nc&&ve(47125,{Pc:Fp(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Fp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Ph extends Sh{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new Bp,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Bp(e),this._firestoreClient=void 0,await e}}}function mM(t,e){const n=typeof t=="object"?t:qu(),s=typeof t=="string"?t:Da,i=Ci(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=LR("firestore");r&&gM(i,...r)}return i}function Mv(t){if(t._terminated)throw new fe(X.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||_M(t),t._firestoreClient}function _M(t){const e=t._freezeSettings(),n=(function(i,r,o,l){return new VD(i,r,o,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Dv(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)})(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new uM(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(i){const r=i?._online.build();return{_offline:i?._offline.build(r),_online:r}})(t._componentsProvider))}/**
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
 */class Rn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rn(zt.fromBase64String(e))}catch(n){throw new fe(X.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Rn(zt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Rn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Co(e,Rn._jsonSchema))return Rn.fromBase64String(e.bytes)}}Rn._jsonSchemaVersion="firestore/bytes/1.0",Rn._jsonSchema={type:bt("string",Rn._jsonSchemaVersion),bytes:bt("string")};/**
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
 */class kh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new fe(X.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ov{constructor(e){this._methodName=e}}/**
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
 */class Xn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new fe(X.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new fe(X.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ve(this._lat,e._lat)||Ve(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Xn._jsonSchemaVersion}}static fromJSON(e){if(Co(e,Xn._jsonSchema))return new Xn(e.latitude,e.longitude)}}Xn._jsonSchemaVersion="firestore/geoPoint/1.0",Xn._jsonSchema={type:bt("string",Xn._jsonSchemaVersion),latitude:bt("number"),longitude:bt("number")};/**
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
 */class Zn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,i){if(s.length!==i.length)return!1;for(let r=0;r<s.length;++r)if(s[r]!==i[r])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Zn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Co(e,Zn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Zn(e.vectorValues);throw new fe(X.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Zn._jsonSchemaVersion="firestore/vectorValue/1.0",Zn._jsonSchema={type:bt("string",Zn._jsonSchemaVersion),vectorValues:bt("object")};/**
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
 */const vM=/^__.*__$/;class yM{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Ri(e,this.data,this.fieldMask,n,this.fieldTransforms):new bo(e,this.data,n,this.fieldTransforms)}}function Vv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve(40011,{Ac:t})}}class Dh{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Rc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Dh({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.gc(e),s}yc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return $a(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Vv(this.Ac)&&vM.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class AM{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||gl(e)}Cc(e,n,s,i=!1){return new Dh({Ac:e,methodName:n,Dc:s,path:Qt.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function IM(t){const e=t._freezeSettings(),n=gl(t._databaseId);return new AM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function wM(t,e,n,s,i,r={}){const o=t.Cc(r.merge||r.mergeFields?2:0,e,n,i);Uv("Data must be an object, but it was:",o,s);const l=Bv(s,o);let c,u;if(r.merge)c=new Mn(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const d=[];for(const p of r.mergeFields){const m=EM(e,p,n);if(!o.contains(m))throw new fe(X.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);CM(d,m)||d.push(m)}c=new Mn(d),u=o.fieldTransforms.filter((p=>c.covers(p.field)))}else c=null,u=o.fieldTransforms;return new yM(new Sn(l),c,u)}function Lv(t,e){if(Fv(t=vn(t)))return Uv("Unsupported field value:",e,t),Bv(t,e);if(t instanceof Ov)return(function(s,i){if(!Vv(i.Ac))throw i.Sc(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,i){const r=[];let o=0;for(const l of s){let c=Lv(l,i.wc(o));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),o++}return{arrayValue:{values:r}}})(t,e)}return(function(s,i){if((s=vn(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return ox(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=ft.fromDate(s);return{timestampValue:La(i.serializer,r)}}if(s instanceof ft){const r=new ft(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:La(i.serializer,r)}}if(s instanceof Xn)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Rn)return{bytesValue:sv(i.serializer,s._byteString)};if(s instanceof $t){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:fh(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof Zn)return(function(o,l){return{mapValue:{fields:{[x_]:{stringValue:N_},[xa]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw l.Sc("VectorValues must only contain numeric values.");return uh(l.serializer,u)}))}}}}}})(s,i);throw i.Sc(`Unsupported field value: ${sh(s)}`)})(t,e)}function Bv(t,e){const n={};return b_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bi(t,((s,i)=>{const r=Lv(i,e.mc(s));r!=null&&(n[s]=r)})),{mapValue:{fields:n}}}function Fv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ft||t instanceof Xn||t instanceof Rn||t instanceof $t||t instanceof Ov||t instanceof Zn)}function Uv(t,e,n){if(!Fv(n)||!T_(n)){const s=sh(n);throw s==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+s)}}function EM(t,e,n){if((e=vn(e))instanceof kh)return e._internalPath;if(typeof e=="string")return $v(t,e);throw $a("Field path arguments must be of type string or ",t,!1,void 0,n)}const TM=new RegExp("[~\\*/\\[\\]]");function $v(t,e,n){if(e.search(TM)>=0)throw $a(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new kh(...e.split("."))._internalPath}catch{throw $a(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function $a(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new fe(X.INVALID_ARGUMENT,l+t+c)}function CM(t,e){return t.some((n=>n.isEqual(e)))}/**
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
 */class Hv{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new $t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(jv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class bM extends Hv{data(){return super.data()}}function jv(t,e){return typeof e=="string"?$v(t,e):e instanceof kh?e._internalPath:e._delegate._internalPath}class SM{convertValue(e,n="none"){switch(Js(e)){case 0:return null;case 1:return e.booleanValue;case 2:return It(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ys(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ve(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return bi(e,((i,r)=>{s[i]=this.convertValue(r,n)})),s}convertVectorValue(e){const n=e.fields?.[xa].arrayValue?.values?.map((s=>It(s.doubleValue)));return new Zn(n)}convertGeoPoint(e){return new Xn(It(e.latitude),It(e.longitude))}convertArray(e,n){return(e.values||[]).map((s=>this.convertValue(s,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const s=ll(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(uo(e));default:return null}}convertTimestamp(e){const n=Ks(e);return new ft(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=pt.fromString(e);Ke(cv(s),9688,{name:e});const i=new ho(s.get(1),s.get(3)),r=new me(s.popFirst(5));return i.isEqual(n)||ws(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function RM(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class Vr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mi extends Hv{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ca(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(jv("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new fe(X.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=mi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}mi._jsonSchemaVersion="firestore/documentSnapshot/1.0",mi._jsonSchema={type:bt("string",mi._jsonSchemaVersion),bundleSource:bt("string","DocumentSnapshot"),bundleName:bt("string"),bundle:bt("string")};class ca extends mi{data(e={}){return super.data(e)}}class Xr{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Vr(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((s=>{e.call(n,new ca(this._firestore,this._userDataWriter,s.key,s,new Vr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new fe(X.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map((l=>{const c=new ca(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Vr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((l=>r||l.type!==3)).map((l=>{const c=new ca(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Vr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:PM(l.type),doc:c,oldIndex:u,newIndex:d}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new fe(X.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Xr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=nh.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],i=[];return this.docs.forEach((r=>{r._document!==null&&(n.push(r._document),s.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),i.push(r.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function PM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve(61501,{type:t})}}/**
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
 */function Gv(t){t=lo(t,$t);const e=lo(t.firestore,Ph);return pM(Mv(e),t._key).then((n=>xM(e,t,n)))}Xr._jsonSchemaVersion="firestore/querySnapshot/1.0",Xr._jsonSchema={type:bt("string",Xr._jsonSchemaVersion),bundleSource:bt("string","QuerySnapshot"),bundleName:bt("string"),bundle:bt("string")};class kM extends SM{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new $t(this.firestore,null,n)}}function Up(t,e,n){t=lo(t,$t);const s=lo(t.firestore,Ph),i=RM(t.converter,e,n);return DM(s,[wM(IM(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,ms.none())])}function DM(t,e){return(function(s,i){const r=new js;return s.asyncQueue.enqueueAndForget((async()=>eM(await dM(s),i,r))),r.promise})(Mv(t),e)}function xM(t,e,n){const s=n.docs.get(e._key),i=new kM(t);return new mi(t,i,e._key,s,new Vr(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){fr=i})(hr),ns(new Ln("firestore",((s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),l=new Ph(new mD(s.getProvider("auth-internal")),new yD(o,s.getProvider("app-check-internal")),(function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new fe(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ho(u.options.projectId,d)})(o,i),o);return r={useFetchStreams:n,...r},l._setSettings(r),l}),"PUBLIC").setMultipleInstances(!0)),Dn(Qf,Wf,e),Dn(Qf,Wf,"esm2020")})();const qv="@firebase/installations",xh="0.6.19";/**
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
 */const Qv=1e4,Wv=`w:${xh}`,zv="FIS_v2",NM="https://firebaseinstallations.googleapis.com/v1",MM=3600*1e3,OM="installations",VM="Installations";/**
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
 */const LM={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ii=new Ti(OM,VM,LM);function Kv(t){return t instanceof Bn&&t.code.includes("request-failed")}/**
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
 */function Yv({projectId:t}){return`${NM}/projects/${t}/installations`}function Jv(t){return{token:t.token,requestStatus:2,expiresIn:FM(t.expiresIn),creationTime:Date.now()}}async function Xv(t,e){const s=(await e.json()).error;return Ii.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Zv({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function BM(t,{refreshToken:e}){const n=Zv(t);return n.append("Authorization",UM(e)),n}async function ey(t){const e=await t();return e.status>=500&&e.status<600?t():e}function FM(t){return Number(t.replace("s","000"))}function UM(t){return`${zv} ${t}`}/**
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
 */async function $M({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Yv(t),i=Zv(t),r=e.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:zv,appId:t.appId,sdkVersion:Wv},l={method:"POST",headers:i,body:JSON.stringify(o)},c=await ey(()=>fetch(s,l));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Jv(u.authToken)}}else throw await Xv("Create Installation",c)}/**
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
 */function ty(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function HM(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const jM=/^[cdef][\w-]{21}$/,qc="";function GM(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=qM(t);return jM.test(n)?n:qc}catch{return qc}}function qM(t){return HM(t).substr(0,22)}/**
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
 */function vl(t){return`${t.appName}!${t.appId}`}/**
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
 */const ny=new Map;function sy(t,e){const n=vl(t);iy(n,e),QM(n,e)}function iy(t,e){const n=ny.get(t);if(n)for(const s of n)s(e)}function QM(t,e){const n=WM();n&&n.postMessage({key:t,fid:e}),zM()}let di=null;function WM(){return!di&&"BroadcastChannel"in self&&(di=new BroadcastChannel("[Firebase] FID Change"),di.onmessage=t=>{iy(t.data.key,t.data.fid)}),di}function zM(){ny.size===0&&di&&(di.close(),di=null)}/**
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
 */const KM="firebase-installations-database",YM=1,wi="firebase-installations-store";let sc=null;function Nh(){return sc||(sc=Om(KM,YM,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(wi)}}})),sc}async function Ha(t,e){const n=vl(t),i=(await Nh()).transaction(wi,"readwrite"),r=i.objectStore(wi),o=await r.get(n);return await r.put(e,n),await i.done,(!o||o.fid!==e.fid)&&sy(t,e.fid),e}async function ry(t){const e=vl(t),s=(await Nh()).transaction(wi,"readwrite");await s.objectStore(wi).delete(e),await s.done}async function yl(t,e){const n=vl(t),i=(await Nh()).transaction(wi,"readwrite"),r=i.objectStore(wi),o=await r.get(n),l=e(o);return l===void 0?await r.delete(n):await r.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&sy(t,l.fid),l}/**
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
 */async function Mh(t){let e;const n=await yl(t.appConfig,s=>{const i=JM(s),r=XM(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===qc?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function JM(t){const e=t||{fid:GM(),registrationStatus:0};return oy(e)}function XM(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ii.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=ZM(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:eO(t)}:{installationEntry:e}}async function ZM(t,e){try{const n=await $M(t,e);return Ha(t.appConfig,n)}catch(n){throw Kv(n)&&n.customData.serverCode===409?await ry(t.appConfig):await Ha(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function eO(t){let e=await $p(t.appConfig);for(;e.registrationStatus===1;)await ty(100),e=await $p(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Mh(t);return s||n}return e}function $p(t){return yl(t,e=>{if(!e)throw Ii.create("installation-not-found");return oy(e)})}function oy(t){return tO(t)?{fid:t.fid,registrationStatus:0}:t}function tO(t){return t.registrationStatus===1&&t.registrationTime+Qv<Date.now()}/**
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
 */async function nO({appConfig:t,heartbeatServiceProvider:e},n){const s=sO(t,n),i=BM(t,n),r=e.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:Wv,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},c=await ey(()=>fetch(s,l));if(c.ok){const u=await c.json();return Jv(u)}else throw await Xv("Generate Auth Token",c)}function sO(t,{fid:e}){return`${Yv(t)}/${e}/authTokens:generate`}/**
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
 */async function Oh(t,e=!1){let n;const s=await yl(t.appConfig,r=>{if(!ay(r))throw Ii.create("not-registered");const o=r.authToken;if(!e&&oO(o))return r;if(o.requestStatus===1)return n=iO(t,e),r;{if(!navigator.onLine)throw Ii.create("app-offline");const l=lO(r);return n=rO(t,l),l}});return n?await n:s.authToken}async function iO(t,e){let n=await Hp(t.appConfig);for(;n.authToken.requestStatus===1;)await ty(100),n=await Hp(t.appConfig);const s=n.authToken;return s.requestStatus===0?Oh(t,e):s}function Hp(t){return yl(t,e=>{if(!ay(e))throw Ii.create("not-registered");const n=e.authToken;return cO(n)?{...e,authToken:{requestStatus:0}}:e})}async function rO(t,e){try{const n=await nO(t,e),s={...e,authToken:n};return await Ha(t.appConfig,s),n}catch(n){if(Kv(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ry(t.appConfig);else{const s={...e,authToken:{requestStatus:0}};await Ha(t.appConfig,s)}throw n}}function ay(t){return t!==void 0&&t.registrationStatus===2}function oO(t){return t.requestStatus===2&&!aO(t)}function aO(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+MM}function lO(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function cO(t){return t.requestStatus===1&&t.requestTime+Qv<Date.now()}/**
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
 */async function uO(t){const e=t,{installationEntry:n,registrationPromise:s}=await Mh(e);return s?s.catch(console.error):Oh(e).catch(console.error),n.fid}/**
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
 */async function hO(t,e=!1){const n=t;return await dO(n),(await Oh(n,e)).token}async function dO(t){const{registrationPromise:e}=await Mh(t);e&&await e}/**
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
 */function fO(t){if(!t||!t.options)throw ic("App Configuration");if(!t.name)throw ic("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ic(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ic(t){return Ii.create("missing-app-config-values",{valueName:t})}/**
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
 */const ly="installations",pO="installations-internal",gO=t=>{const e=t.getProvider("app").getImmediate(),n=fO(e),s=Ci(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},mO=t=>{const e=t.getProvider("app").getImmediate(),n=Ci(e,ly).getImmediate();return{getId:()=>uO(n),getToken:i=>hO(n,i)}};function _O(){ns(new Ln(ly,gO,"PUBLIC")),ns(new Ln(pO,mO,"PRIVATE"))}_O();Dn(qv,xh);Dn(qv,xh,"esm2020");/**
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
 */const ja="analytics",vO="firebase_id",yO="origin",AO=60*1e3,IO="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Vh="https://www.googletagmanager.com/gtag/js";/**
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
 */const hn=new sl("@firebase/analytics");/**
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
 */const wO={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Tn=new Ti("analytics","Analytics",wO);/**
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
 */function EO(t){if(!t.startsWith(Vh)){const e=Tn.create("invalid-gtag-resource",{gtagURL:t});return hn.warn(e.message),""}return t}function cy(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function TO(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function CO(t,e){const n=TO("firebase-js-sdk-policy",{createScriptURL:EO}),s=document.createElement("script"),i=`${Vh}?l=${t}&id=${e}`;s.src=n?n?.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function bO(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function SO(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const c=(await cy(n)).find(u=>u.measurementId===i);c&&await e[c.appId]}}catch(l){hn.error(l)}t("config",i,r)}async function RO(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await cy(n);for(const c of o){const u=l.find(p=>p.measurementId===c),d=u&&e[u.appId];if(d)r.push(d);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){hn.error(r)}}function PO(t,e,n,s){async function i(r,...o){try{if(r==="event"){const[l,c]=o;await RO(t,e,n,l,c)}else if(r==="config"){const[l,c]=o;await SO(t,e,n,s,l,c)}else if(r==="consent"){const[l,c]=o;t("consent",l,c)}else if(r==="get"){const[l,c,u]=o;t("get",l,c,u)}else if(r==="set"){const[l]=o;t("set",l)}else t(r,...o)}catch(l){hn.error(l)}}return i}function kO(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=PO(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function DO(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Vh)&&n.src.includes(t))return n;return null}/**
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
 */const xO=30,NO=1e3;class MO{constructor(e={},n=NO){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const uy=new MO;function OO(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function VO(t){const{appId:e,apiKey:n}=t,s={method:"GET",headers:OO(n)},i=IO.replace("{app-id}",e),r=await fetch(i,s);if(r.status!==200&&r.status!==304){let o="";try{const l=await r.json();l.error?.message&&(o=l.error.message)}catch{}throw Tn.create("config-fetch-failed",{httpStatus:r.status,responseMessage:o})}return r.json()}async function LO(t,e=uy,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw Tn.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw Tn.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new UO;return setTimeout(async()=>{l.abort()},AO),hy({appId:s,apiKey:i,measurementId:r},o,l,e)}async function hy(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=uy){const{appId:r,measurementId:o}=t;try{await BO(s,e)}catch(l){if(o)return hn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:r,measurementId:o};throw l}try{const l=await VO(t);return i.deleteThrottleMetadata(r),l}catch(l){const c=l;if(!FO(c)){if(i.deleteThrottleMetadata(r),o)return hn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:r,measurementId:o};throw l}const u=Number(c?.customData?.httpStatus)===503?yf(n,i.intervalMillis,xO):yf(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(r,d),hn.debug(`Calling attemptFetch again in ${u} millis`),hy(t,d,s,i)}}function BO(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s(Tn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function FO(t){if(!(t instanceof Bn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class UO{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function $O(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,o={...s,send_to:r};t("event",n,o)}}async function HO(t,e,n,s){if(s&&s.global){const i={};for(const r of Object.keys(n))i[`user_properties.${r}`]=n[r];return t("set",i),Promise.resolve()}else{const i=await e;t("config",i,{update:!0,user_properties:n})}}/**
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
 */async function jO(){if(Dm())try{await xm()}catch(t){return hn.warn(Tn.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return hn.warn(Tn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function GO(t,e,n,s,i,r,o){const l=LO(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&hn.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>hn.error(m)),e.push(l);const c=jO().then(m=>{if(m)return s.getId()}),[u,d]=await Promise.all([l,c]);DO(r)||CO(r,u.measurementId),i("js",new Date);const p=o?.config??{};return p[yO]="firebase",p.update=!0,d!=null&&(p[vO]=d),i("config",u.measurementId,p),u.measurementId}/**
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
 */class qO{constructor(e){this.app=e}_delete(){return delete Yi[this.app.options.appId],Promise.resolve()}}let Yi={},jp=[];const Gp={};let rc="dataLayer",QO="gtag",qp,Lh,Qp=!1;function WO(){const t=[];if(km()&&t.push("This is a browser extension environment."),zR()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=Tn.create("invalid-analytics-context",{errorInfo:e});hn.warn(n.message)}}function zO(t,e,n){WO();const s=t.options.appId;if(!s)throw Tn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)hn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Tn.create("no-api-key");if(Yi[s]!=null)throw Tn.create("already-exists",{id:s});if(!Qp){bO(rc);const{wrappedGtag:r,gtagCore:o}=kO(Yi,jp,Gp,rc,QO);Lh=r,qp=o,Qp=!0}return Yi[s]=GO(t,jp,Gp,e,qp,rc,n),new qO(t)}function KO(t=qu()){t=vn(t);const e=Ci(t,ja);return e.isInitialized()?e.getImmediate():YO(t)}function YO(t,e={}){const n=Ci(t,ja);if(n.isInitialized()){const i=n.getImmediate();if(Ws(e,n.getOptions()))return i;throw Tn.create("already-initialized")}return n.initialize({options:e})}function JO(t,e,n){t=vn(t),HO(Lh,Yi[t.app.options.appId],e,n).catch(s=>hn.error(s))}function XO(t,e,n,s){t=vn(t),$O(Lh,Yi[t.app.options.appId],e,n,s).catch(i=>hn.error(i))}const Wp="@firebase/analytics",zp="0.10.19";function ZO(){ns(new Ln(ja,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return zO(s,i,n)},"PUBLIC")),ns(new Ln("analytics-internal",t,"PRIVATE")),Dn(Wp,zp),Dn(Wp,zp,"esm2020");function t(e){try{const n=e.getProvider(ja).getImmediate();return{logEvent:(s,i,r)=>XO(n,s,i,r),setUserProperties:(s,i)=>JO(n,s,i)}}catch(n){throw Tn.create("interop-component-reg-failed",{reason:n})}}}ZO();const eV={apiKey:"AIzaSyCwvJ8cUWLZPZ26i1deIAXnoLuzToIcB70",authDomain:"tuldung.firebaseapp.com",projectId:"tuldung",storageBucket:"tuldung.firebasestorage.app",messagingSenderId:"1086524417813",appId:"1:1086524417813:web:8199da4b7cebcaffc86b1c",measurementId:"G-EGV6XDKG9R"},Bh=Vm(eV),tV=dD(Bh),dy=mM(Bh);let nV=null;if(typeof window<"u")try{nV=KO(Bh)}catch(t){console.warn("Analytics 초기화 실패:",t)}new hs;const sV=async()=>{try{return await tk(tV),{success:!0}}catch(t){return console.error("로그아웃 오류:",t),{success:!1,error:t.message}}},iV=async t=>{try{const e=Nv(dy,"users",t),n=await Gv(e);return n.exists()?n.data():null}catch(e){return console.error("사용자 데이터 가져오기 오류:",e),null}},rV=async(t,e)=>{try{const n=Nv(dy,"users",t),s=await Gv(n);if(s.exists()){const i=s.data();await Up(n,{...i,gameData:{...i.gameData,...e}},{merge:!0})}else await Up(n,{gameData:e});return{success:!0}}catch(n){return console.error("게임 데이터 업데이트 오류:",n),{success:!1,error:n.message}}},fy=async()=>{try{return await sV(),sessionStorage.removeItem("currentUser"),{success:!0}}catch(t){return console.error("로그아웃 오류:",t),{success:!1,error:t.message}}},oV=async(t,e)=>{try{const n=await rV(t,e);if(n.success){const s=JSON.parse(sessionStorage.getItem("currentUser")||"{}");s.id===t&&(s.gameData={...s.gameData,...e},sessionStorage.setItem("currentUser",JSON.stringify(s)))}return n}catch(n){return console.error("게임 데이터 업데이트 오류:",n),{success:!1,error:n.message}}},aV=Object.freeze(Object.defineProperty({__proto__:null,logout:fy,updateGameData:oV},Symbol.toStringTag,{value:"Module"})),lV={class:"profilePage"},cV={class:"mainContent"},uV={class:"profileHeader"},hV={class:"profileImageWrapper"},dV=["src","alt"],fV={key:1,class:"profileImagePlaceholder"},pV={class:"profileInfo"},gV={class:"userName"},mV={class:"userEmail"},_V={class:"settingGroup"},vV={class:"settingLabel"},yV={class:"settingInput"},AV={class:"userId"},IV={key:0,class:"statsSection"},wV={class:"sectionTitle"},EV={class:"statsGrid"},TV={class:"statCard"},CV={class:"statInfo"},bV={class:"statLabel"},SV={class:"statValue"},RV={class:"statCard"},PV={class:"statInfo"},kV={class:"statLabel"},DV={class:"statValue"},xV={class:"statCard"},NV={class:"statInfo"},MV={class:"statLabel"},OV={class:"statValue"},VV={class:"statCard"},LV={class:"statInfo"},BV={class:"statLabel"},FV={class:"statValue"},UV={class:"logoutSection"},$V={__name:"UserProfilePage",setup(t){const e=dn(),{logout:n}=_m(),s=D(0),i=D(null),r=D("한국어"),o=D(""),l=D(""),c=D(""),u=D(""),d=D(!1),p={ko:{userProfile:"사용자 프로필",userID:"User ID",copySuccess:"User ID가 복사되었습니다!",logout:"로그아웃",logoutConfirm:"정말 로그아웃 하시겠습니까?",gameStats:"게임 통계",level:"레벨",points:"포인트",coins:"코인",catFragments:"고양이 파편",back:"← 뒤로"},en:{userProfile:"User Profile",userID:"User ID",copySuccess:"User ID copied!",logout:"Logout",logoutConfirm:"Are you sure you want to logout?",gameStats:"Game Stats",level:"Level",points:"Points",coins:"Coins",catFragments:"Cat Fragments",back:"← Back"}},m=Xe(()=>r.value==="한국어"?p.ko:p.en);Rt(()=>{const I=ht();I?(i.value=I,s.value=I.gameData?.coins||0,I.uid||I.email?(d.value=!0,o.value=I.email||"",l.value=I.displayName||I.name||o.value.split("@")[0],c.value=I.photoURL||"",u.value=I.uid||I.id||""):(o.value=I.email||I.id||"",l.value=I.name||o.value.split("@")[0]||"User",u.value=I.id||"ID"+String(Math.random()).substring(2,10))):e.push("/login");const x=localStorage.getItem("appLanguage");x&&(r.value=x)});const _=()=>{navigator.clipboard.writeText(u.value),alert(m.value.copySuccess)},w=async()=>{if(confirm(m.value.logoutConfirm))try{if(d.value){const I=await fy();I.success||console.error("Firebase 로그아웃 실패:",I.error)}pf(),n(),e.push("/login")}catch(I){console.error("로그아웃 오류:",I),pf(),n(),e.push("/login")}},b=Xe(()=>i.value?{level:i.value.gameData?.level||1,points:i.value.gameData?.coins||0,coins:i.value.gameData?.totalCoin||0,catFragments:i.value.gameData?.catFragments||i.value.gameData?.catCount||0}:null);return(I,x)=>(O(),L("div",lV,[we(fn,{coinCount:s.value},null,8,["coinCount"]),h("main",cV,[h("button",{class:"backBtn",onClick:x[0]||(x[0]=U=>Wt(e).push("/settings"))},B(m.value.back),1),h("div",uV,[h("div",hV,[c.value?(O(),L("img",{key:0,src:c.value,alt:l.value,class:"profileImage"},null,8,dV)):(O(),L("div",fV,B(l.value.charAt(0).toUpperCase()),1))]),h("div",pV,[h("h2",gV,B(l.value),1),h("p",mV,B(o.value),1)])]),h("div",_V,[h("label",vV,B(m.value.userID),1),h("div",yV,[h("span",AV,B(u.value),1),h("button",{class:"copyBtn",onClick:_},"📋")])]),b.value?(O(),L("div",IV,[h("h3",wV,B(m.value.gameStats),1),h("div",EV,[h("div",TV,[x[1]||(x[1]=h("div",{class:"statIcon"},"⭐",-1)),h("div",CV,[h("div",bV,B(m.value.level),1),h("div",SV,B(b.value.level),1)])]),h("div",RV,[x[2]||(x[2]=h("div",{class:"statIcon"},"💰",-1)),h("div",PV,[h("div",kV,B(m.value.points),1),h("div",DV,B(b.value.points.toLocaleString()),1)])]),h("div",xV,[x[3]||(x[3]=h("div",{class:"statIcon"},"🪙",-1)),h("div",NV,[h("div",MV,B(m.value.coins),1),h("div",OV,B(b.value.coins.toLocaleString()),1)])]),h("div",VV,[x[4]||(x[4]=h("div",{class:"statIcon"},"🐱",-1)),h("div",LV,[h("div",BV,B(m.value.catFragments),1),h("div",FV,B(b.value.catFragments.toLocaleString()),1)])])])])):he("",!0),h("div",UV,[h("button",{class:"logoutBtn",onClick:w},B(m.value.logout),1)])]),we(pn)]))}},HV=Pt($V,[["__scopeId","data-v-737deece"]]),jV={class:"attendancePage"},GV={class:"mainContent"},qV={class:"attendanceInfo"},QV={class:"infoItem"},WV={class:"infoValue"},zV={class:"infoItem"},KV={class:"infoValue"},YV={key:0,class:"attendanceMessage"},JV={class:"attendanceGrid"},XV=["onClick"],ZV={class:"dayNumber"},eL={class:"rewardIcon"},tL={key:0,class:"specialStar"},nL={class:"rewardAmount"},sL={__name:"AttendancePage",setup(t){const e=dn(),n=D(0),s=D(null),i=D(0),r=D([]),o=D(null),l=D(0),c=D(Array.from({length:20},(I,x)=>({day:x+1,reward:"1K",rewardType:"P",hasSpecial:[5,9,10,11,16,17].includes(x+1),isChecked:!1}))),u=(I,x)=>new Date(I).toDateString()===new Date(x).toDateString(),d=()=>{e.go(-1)},p=async I=>{if(!s.value){alert("로그인이 필요합니다.");return}const x=new Date;x.toDateString();const U=x.toISOString();if(o.value&&u(o.value,U)){alert("오늘 이미 출석체크를 완료했습니다! 내일 다시 시도해주세요.");return}const F=c.value[I];if(F.isChecked){alert("이미 체크된 날짜입니다.");return}const j=r.value.length;if(o.value){const Ie=new Date(o.value),S=Math.floor((x-Ie)/(1e3*60*60*24));if(S>0&&I!==j){alert("다음 순서의 출석체크만 가능합니다.");return}S===1?l.value+=1:S>1&&(l.value=1)}else l.value=1;F.isChecked=!0,r.value.push(F.day),i.value=r.value.length;const se=1e3;n.value+=se,o.value=U,s.value&&(await vw(s.value.id,n.value),await m()),alert(`Day ${F.day} 출석체크 완료! ${se} 포인트 획득!`),window.dispatchEvent(new Event("userDataUpdated"))},m=async()=>{if(s.value){const I={checkedDays:r.value,attendanceDays:i.value,consecutiveDays:l.value,lastCheckInDate:o.value,lastUpdate:new Date().toISOString()};localStorage.setItem(`attendance_${s.value.id}`,JSON.stringify(I)),await Mt(s.value.id,{attendance:I})}},_=async()=>{if(s.value){let I=null;const x=s.value.id?.length>20||s.value.uid;if(x)try{const U=await iV(s.value.id);if(U?.gameData?.attendance){I=U.gameData.attendance;const F=JSON.parse(sessionStorage.getItem("currentUser")||"{}");F.id===s.value.id&&(F.gameData={...F.gameData,...U.gameData},sessionStorage.setItem("currentUser",JSON.stringify(F)),s.value=F)}}catch(U){console.error("Firebase에서 출석체크 데이터 가져오기 실패:",U)}if(!I&&s.value.gameData?.attendance&&(I=s.value.gameData.attendance),!I){const U=localStorage.getItem(`attendance_${s.value.id}`);U&&(I=JSON.parse(U),x&&I&&await Mt(s.value.id,{attendance:I}))}I&&(r.value=I.checkedDays||[],i.value=I.attendanceDays||0,l.value=I.consecutiveDays||0,o.value=I.lastCheckInDate||null,r.value.forEach(U=>{const F=U-1;c.value[F]&&(c.value[F].isChecked=!0)}))}},w=Xe(()=>{if(!o.value)return!0;const I=new Date,x=new Date(o.value),U=I.toDateString(),F=x.toDateString();return U!==F}),b=Xe(()=>r.value.length);return Rt(async()=>{s.value=ht(),s.value&&(n.value=s.value.gameData?.coins||0,await _())}),(I,x)=>(O(),L("div",jV,[we(fn,{coinCount:n.value},null,8,["coinCount"]),h("main",GV,[h("button",{class:"backBtn",onClick:d},"← 뒤로"),x[3]||(x[3]=h("h1",{class:"pageTitle"},"출석체크",-1)),h("div",qV,[h("div",QV,[x[0]||(x[0]=h("span",{class:"infoLabel"},"연속 출석:",-1)),h("span",WV,B(l.value)+"일",1)]),h("div",zV,[x[1]||(x[1]=h("span",{class:"infoLabel"},"총 출석:",-1)),h("span",KV,B(i.value)+"일",1)])]),w.value?he("",!0):(O(),L("div",YV," 오늘 출석체크를 완료했습니다! 내일 다시 시도해주세요. ")),h("div",JV,[(O(!0),L(Se,null,je(c.value,(U,F)=>(O(),L("div",{key:U.day,class:Pe(["dayCell",{checked:U.isChecked,disabled:!w.value&&!U.isChecked||F!==b.value&&!U.isChecked,nextCheckable:w.value&&F===b.value&&!U.isChecked}]),onClick:j=>w.value&&(F===b.value||U.isChecked)?p(F):null},[h("div",ZV,"Day "+B(U.day),1),h("div",eL,[x[2]||(x[2]=h("div",{class:"iconCircle"},"P",-1)),U.hasSpecial&&!U.isChecked?(O(),L("span",tL,"⭐")):he("",!0)]),h("div",nL,B(U.reward),1)],10,XV))),128))])]),we(pn)]))}},iL=Pt(sL,[["__scopeId","data-v-473b169a"]]),rL="/tdl/assets/btc-DC8WHF5v.png",oL="/tdl/assets/eth-DHgp7Wvq.png",aL="/tdl/assets/BTC_line-DiGuGbEI.png",lL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAACJCAYAAABaWIDDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA85SURBVHgB7d1fchPHFsfxMybJw61KhbuCTN5yqRDbK0BeAXgFmBXErACxguAVYFZgswLEClBibnLf7rCCKDhVqSJGndPqNghibHXPjKZ75vupUqQYy/yxpf5Nd5/ThQAAMBBGtq7r3ZbIfFPvS5GidPeiHzfX3f2yotL/zPxNHxu9bfxkHxcynUrGCgEAoKf8gD/SAf+WDnl39COlNKqwIaDSrzvNLRgQAAAAveIHfTvY39WbXu1/fFW/DsVEFrMGZuKDwSy1YEAAAAD0gg78I73Sv60P96STQf9KMz9jsBwM7IxBJR0gAAAAsuYGfvNAbyPJkw8Gxi8nLILBVIPBTFpEAAAAZEkHfp3eNz9mPPBfpdVgQAAAAGTFrfHPx/rwBxmmRoIBAQAAkA0jN+/o0PVY0lzj71pQMHgXAHyi2tcP2dpI/mHXa+ZqS+19P+pLAaBJXPXXshQMNg7ONx0uAoAmqj19qOsoDPwJqfw37Fi/YU/b3gwCAKnSwb/Uwf+ZuIY9qMdecN4r5OS48P+w/xckrjjU2xMNAhMBgIFoacr/vKvfxHX6szOwb1/p/W8if/5eSDVzv/d/vtZf/7fIta/edwy0fQUWj7ckX/r3O9vRALCp/7BmT5CLSm/jQn5+IgDQY0a+12Vp+VGaUbkZVdHb6U/ng3wdGk5uiQsmI1kEgsK3Gc6BmWgA+F4TD1P/+Sn0h7i431UDCQBok45NY717IPXY6e5DvT/WKe/nsgZGSh1PvzzfSzcSFwxKSW/5YmYDgBHk7KHOBowFAHqigcFfB/75I5E/Dpq40m/C+2BQbPnzCLbc4+4uwG0AsOv/pSBndmfnLrMBAHJXc/BPbuC/SofBYGoDgP2HHgtyV2kI2CEEAMhVvTV/u6Hvr3uF/K+SHlhDMNgvfG3lM8l7RyMct7NTfqGHAICsuLa+8xcSzl71jwt5eSAD0FAwmOrS8bbvA2BDwFtNXcWeIHeEAABZqVHnX+n73S7vdyHBwOgSyelDu0RSXPwFsEbXfelI6etLR1J/isd2FNxmOQBADoxsPos40EcH/dc7uaz1d8XIjS3Xx8D6sPyRswAS5GtL93wYKCVOxZ4AAKmL2/RnS/tO7zP410MASJxv02xfHKWEm/oQwIsEQHLiOtGaw0JO7glq2xAkTX/QD0Xe7Lh1m2Bbbm8HAKTIHAV9uphjBv/mEAAyYMta9If+vv7w74prBRzy7D0/xQYAyXCzmyak+qzSaX8G/waxBJAZI9+WIl9E7JY1u/b0JwGABAQ2oavsTGhfavxTwQxAZtwLwC4JBM8EPHbrbQDQLT8rWQY8Zczg3zwCQIaWQkDI5r5FwydCAIAu+feguwHPeMTpp+0gAGTKhYD5btizbOKeB266AYAmzfckaOr/9KGgFQSAjBXycqJ39yXMlk6/URkAYO3Cr/7t1D+1/m0hAGROp8YeRZQI7lMZAGD9TEhPkylT/+2iCqAnjNx85jsHhjyLygAAaxHe9MeM9P3puaA1zAD0xrWYHgFUBgBYExPQ7tdMGPzbxwxAj/geAfY4zZDDhCrODADQpvCr/zffUPbXPmYAeoTKAABpCrr6P2TwXw8CQM9QGQAgJe7q3+yt/oy/KPtbEwJAD9WoDNgXAGgUV/+pYg9Aj8VVBsx3/CwCANTC2n/amAHotZjKgI0jKgMANMM8Dvhcrv7XjBmAnqtRGbBdyJQOXACi6IXEyJ4/svozuPpfN2YAes69oEzoGdqlyFsqAwDUYAI2FnP13wUCwAC4bn/zsQQpRlQGAIhh5Oae/ndrxU+v2PnfDZYABkRflDqgF6E7/e+7qgIgLX6vih1k7FHXX7uPFuXSZ9glLL+MtfFK3H6YiqZX7dOLB7vxr1zts+fjQl4SADpAABgYfWHa/QCrJnOPygB0yw/2I310SxY/v8b+f8i+lmUaCoqpfg29bdh2s1NCQXPc1X+x6ua/Stf+d5j+7wYBYGD8pkC7MacMeNrMbwqsBFgTv4nstr5N3fEDfotsIBC9FU+FQFBL4NX/vl5cHAg6QQAYICoDkCod9O10vl2m+kHir/CbUOnb48QeSmNnCQgEqwm9+tflxW8EnSEADJS+UPWqqgjc6b84oWtHgIa5q33bMc6MJE2VXzY41kDwkwaCqeADvulPyOzingaAJ4LOEAAGzMh3+oa7MZYwj/RFG3rWAHChDAb+T6kIBB8ysvk4oOc/V/8JIAAMHJUB6II/IOaBBB0Sk7TZR0sGgwoE/hyRkLJhrv4TQAAAlQFYKz9Y2ANiulzjb9tyILAzBBPpKQ1z+t4xfxHwFK7+E0EAAJUBWAt/1f84w+n+Jsw+WjKYSA/4wd++d4SEOa7+E0EAwIKRG/pC/iz0hVxRGYBV+N3hdoq4z1f9Ic4DwcQvGUwkM3GDv235exLamhwtIQDgncASnvNnURmAS+mUv90v8oO0o3INfRYDanXxpyx6COit8F0DU/XBHoKJJCwy0On36M02TX/SQQDAB6gMQFNcTf9iyv+ONGPmBvvi2N2f6lR6FTT7ZKTUP9OXm/asC7cUYe9TtQgEtlvheXOizmfafJ+GsUQFOpr+pIYAgH/QdH+oPxp3JQyVAXjHDxR2ejhwc+mFX22iP4+HIq+fhg74K311uXlrKRAkPEvQbSDwnRntDGEpwYxeJJxwkZAYAgD+If7Nm8oARDWEuYgObnMNlH8ctDHoX8YHgi03c5F0IHi3h0D/Z9JWIGigV0Ol4W173d9HXI0AgAtRGYAYPjzakrBS4nQ28H/KUiAY+SWDHAJBrfMM/Pfxrj+HYSTxKg77SRcBAJ9EZQBC1J/2N4e6rn8/9StF/7q4lUcgeHfAUXVZcyL3vbPft/mmH/SbmPmoGPzTRgDApagMwKqMbB5FbvirbEdA/Zl5LhlygeCaHTBv+yWDUpK1qJSY+dt1dzP+vlEVg3/6CAC4EpUBuEp8qZ+dsj7d7dP6cF6BoBUVg38eCABYCZUB+BQd/MfiWvsGmo8LeflQes7tp/l8pA99tUGfA0H/Al2fEQCwEioDcJEag/9ga8I/CgT29RS5ZyI11PnnhgCAlVEZgGURJ8B5b3W9/7/0gvd8INjUh3cyDQRTkbN7hfwyFWSFAIAgVAbA0iUhO1gdSTAG/6v4boU6OyAjv2SQaiCY+WUcrvozRQBAMCoDhi3yBDgZypp/0xIMBMn1akAcAgCiUBkwTPFd/hj8m/L+PAO7ZGDDwNrOM9Ap/vkxA39/EAAQjcqAYWHwT1PLBxxV+jV10JfjXPs04NMIAIhGZcBwxA/+nP/ehaUDjuwMQSmrvUbtVX3lD1/Sq/2/dNnu11eC3iIAoJbIyoBKlw92qAzIQ40Wv1Od7dkWJMHNFPyrFLn21fuPvv1df+U3kT9/Z1p/eAgAqI3KgH6LbPFbcQIckLYNAWpy9b8mdHNfqVcfgZUEWDfX4jdm8LetYBn8gZQRANAIXec9tJu9JEhxx3eSQ4L89ya0v39FH3ggDywBoFFUBvRDZItfveJ/s83gD+SBAIBGxW8YO9umlWga4lv88j0EcsISABrlNvW92ZXFVHCIz45cqRm65Fr8xvb3Z/AHckIAQOPcFPCZDQEhm8BKO3PgZhDQBdfit4jYmGkb/dDfH8gNAQCtoDIgL77Rjz3ch/7+wEAQANAaKgPyQItfYJjYBIjWURmQLlr8AsNFAEDrIisDZiJnO2wsa098xQZHOwN9wBIAWhdZGXCdyoC2GbvfIri/v8jprgDIHgEAa1GjMuCIyoDm1Wjxu0uLX6AfCABYGz+dH7ppTK9Q30bUpeNTaPELwCIAYK3cxr7gyoA9KgOaUaPFL4M/0DNsAkQnjNw8siV/EmZPAwQNZyJFtvhlMybQUwQAdMLvQH8hYeVnDEaRXIvf4kiC2Ra/dPkD+oglAHTCVwbYUrIq4GlUBkSo0eJ3n8Ef6C8CADqzVBkQoqQyYHU1W/weCIDeIgCgU346P/TMACoDVkCLXwCXIQCgc1QGNK9ei18Gf2AI2ASIZFAZ0Axa/AJYBTMASMg1e7hMJWEeGbkR2s6252jxC+BqBAAkg8qA+mjxC2BVBAAkxVUGzEOPmS2pDKDFL4AwBAAkp5CXE6EyIAgtfgGEIgAgSa4ywDwKfNYgKwN8i9+Iwf+MwR8YMKoAkDQjN5/pj+lIwgymMoAWvwBiMQOAxF2zO9MrCTOIygBa/AKogwCApC1VBoTsUO99ZQAtfgHURQBA8nxlAGcGeLT4BdAEAgCyQGWAU6PF7yMGfwDL2ASIrBi5qQN6sR/4tIeF/DyWzNVo8XtcyAld/gB8gBkAZEUHsvu2Z72EeWDk+7uSvegWv6GNlQAMAAEAGRpeZQAtfgE0jQCA7AytMoAWvwDaQABAloZSGRDZ4rdi8AdwFQIAstX3yoAaLX53GfwBXIUAgKz19cwA1+JXIoKKuVfIL1MBgCtQBohe6NOZAa7F76LcL7TL3z5d/gCsihkA9EQ/KgNo8QtgXZgBQG8Y+bYU+eKFhA2e/ljc7qfNafELYJ2YAUBvRFYG2PLAZ37NvTM6+I/0z27DSylBaPELIA4BAL0SWRmgIaA46mpjoNvtH7Pmv2jxG/p3BYAFlgDQS5FnBliV5mJdEphW0jI35W/b+5qRhNMli9c7dPkDEIsAgN6KrAzwikO9PWwjCPhDfWw4sd39YpoSVTT6AVAXAQC95QfaiHX1ZYsgcKBBoPYmQb/Of1sf7kncwG9VDP4AmkAAQK/5yoCInfX/UOntWJcHnur91J1HcNXvvWg5bGv6R/pSuxU51f/Rn4HBH0AzCADovQZDwJLCzgjYEFDp71AtfbwUd3WvA78ppTkVgz+AJhEAMAjthIC1qRj8ATSNMkAMghs87RHCZiJ5mTL4A2gDAQCDYQfRQk52bOc8yYI95Og1gz+AVrAEgEEy8t1I8+9jSXNJYOZO9Ts5FgBoCTMAGCTXMXBjO73ZgMVV/zcM/gDaxgwABs9tEPz8gb4c9qQzi70JYx34nwsArAEBAPA6CAJ2qt9e6R8y8ANYNwIA8BEfBEb68G58K+FLf4eJfl0d+F8/oZc/gK4QAIBLGCmvi3x5Sx+OfBjYknBT/Up6KyY66D9l0AeQAgIAEMjIDQ0B177yXf/KCz6l0s/SQf5sWsivrwQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA0PwNkHeXO5vHqaMAAAAASUVORK5CYII=",cL="/tdl/assets/catProfile01-gY0Djz81.png",uL="/tdl/assets/catProfile02-Cesbpkj5.png",hL="/tdl/assets/eth_ico-CaIyIapE.png",dL={class:"nftPage"},fL={class:"mainContent nftWrap"},pL={class:"walletSection"},gL={class:"walletBalance"},mL={class:"btcInfo"},_L={class:"change positive"},vL={class:"tabMenu"},yL={key:0,class:"itemList"},AL={class:"itemIcon"},IL={class:"itemInfo"},wL={class:"itemSymbol"},EL={class:"itemName"},TL={class:"itemChart"},CL={class:"itemPrice"},bL={class:"price"},SL={key:1,class:"nftList"},RL={class:"nftThumbnail"},PL={class:"nftInfo"},kL={class:"nftId"},DL={class:"collectionName"},xL={class:"nftValue"},NL={class:"ethAmount"},ML=["src"],OL={class:"usdValue positive"},VL={__name:"NFTPage",setup(t){const e=D(0),n=D("tokens"),s=D("$ 5,323.00"),i=D("0.00335"),r=D("+6.54%"),o=D(!1),l=D(!1),c=D(!1),u=ht();u&&(e.value=u.gameData?.coins||0);const d=F=>{n.value=F},p=()=>{o.value=!0},m=()=>{o.value=!1},_=()=>{l.value=!0},w=()=>{l.value=!1},b=()=>{c.value=!0},I=()=>{c.value=!1},x=D([{id:1,name:"Bitcoin",symbol:"BTC",price:"36,590.00",change:"+6.21%",isPositive:!0,image:rL,lineImage:aL},{id:2,name:"Ethereum",symbol:"ETH",price:"2,590.00",change:"+5.21%",isPositive:!0,image:oL,lineImage:lL}]),U=D([{id:1,nftId:"#1957",collectionName:"Bored Ape Yacht Club",ethAmount:"64",usdValue:"23,114.57",image:cL},{id:2,nftId:"#6513",collectionName:"Bored Ape Yacht Club",ethAmount:"199.8",usdValue:"45,114.57",image:uL}]);return(F,j)=>(O(),L("div",dL,[we(fn,{coinCount:e.value},null,8,["coinCount"]),h("main",fL,[h("div",pL,[j[5]||(j[5]=h("div",{class:"walletLabel"},"Current Wallet Balance",-1)),h("div",gL,B(s.value),1),h("div",mL,[h("span",null,"BTC : "+B(i.value),1),h("span",_L,B(r.value),1)])]),h("div",{class:"actionButtons"},[h("button",{class:"actionBtn sendBtn",onClick:_},[...j[6]||(j[6]=[h("div",{class:"btnIcon"},null,-1),h("span",{class:"btnLabel"},"Send",-1)])]),h("button",{class:"actionBtn buyBtn",onClick:p},[...j[7]||(j[7]=[h("div",{class:"btnIcon"},null,-1),h("span",{class:"btnLabel"},"Buy",-1)])]),h("button",{class:"actionBtn receiveBtn",onClick:b},[...j[8]||(j[8]=[h("div",{class:"btnIcon"},null,-1),h("span",{class:"btnLabel"},"Receive",-1)])])]),h("div",vL,[h("button",{class:Pe(["tab",{active:n.value==="tokens"}]),onClick:j[0]||(j[0]=se=>d("tokens"))}," Tokens ",2),h("button",{class:Pe(["tab",{active:n.value==="nfts"}]),onClick:j[1]||(j[1]=se=>d("nfts"))}," NFTs ",2)]),n.value==="tokens"?(O(),L("div",yL,[(O(!0),L(Se,null,je(x.value,se=>(O(),L("div",{key:se.id,class:"item"},[h("div",AL,[h("div",{class:"iconCircle",style:Ct({backgroundImage:`url(${se.image})`})},null,4)]),h("div",IL,[h("div",wL,B(se.symbol),1),h("div",EL,B(se.name),1)]),h("div",TL,[h("div",{class:"chartLine",style:Ct({backgroundImage:`url(${se.lineImage})`})},null,4)]),h("div",CL,[h("div",bL,"$"+B(se.price),1),h("div",{class:Pe(["change",{positive:se.isPositive,negative:!se.isPositive}])},B(se.change),3)])]))),128))])):he("",!0),n.value==="nfts"?(O(),L("div",SL,[(O(!0),L(Se,null,je(U.value,se=>(O(),L("div",{key:se.id,class:"nftItem"},[h("div",RL,[h("div",{class:"thumbnailPlaceholder",style:Ct({backgroundImage:`url(${se.image})`})},null,4)]),h("div",PL,[h("div",kL,B(se.nftId),1),h("div",DL,B(se.collectionName),1)]),h("div",xL,[h("div",NL,[h("img",{src:Wt(hL),alt:"ETH",class:"ethIcon"},null,8,ML),h("span",null,B(se.ethAmount),1)]),h("div",OL,[j[9]||(j[9]=h("span",{class:"arrowUp"},"↑",-1)),h("span",null,"$ "+B(se.usdValue),1)])])]))),128))])):he("",!0)]),we(pn),o.value?(O(),L("div",{key:0,class:"popupOverlay",onClick:m},[h("div",{class:"popupContent",onClick:j[2]||(j[2]=Gr(()=>{},["stop"]))},[h("div",{class:"popupHeader"},[j[10]||(j[10]=h("h2",{class:"popupTitle"},"구매하기",-1)),h("button",{class:"closeBtn",onClick:m},"×")]),h("div",{class:"popupBody"},[j[11]||(j[11]=h("p",{class:"popupMessage"},"구매해주세요",-1)),h("div",{class:"popupActions"},[h("button",{class:"popupBtn cancelBtn",onClick:m},"취소"),h("button",{class:"popupBtn confirmBtn",onClick:m},"확인")])])])])):he("",!0),l.value?(O(),L("div",{key:1,class:"popupOverlay",onClick:w},[h("div",{class:"popupContent",onClick:j[3]||(j[3]=Gr(()=>{},["stop"]))},[h("div",{class:"popupHeader"},[j[12]||(j[12]=h("h2",{class:"popupTitle"},"전송하기",-1)),h("button",{class:"closeBtn",onClick:w},"×")]),h("div",{class:"popupBody"},[j[13]||(j[13]=h("p",{class:"popupMessage"},"전송해주세요",-1)),h("div",{class:"popupActions"},[h("button",{class:"popupBtn cancelBtn",onClick:w},"취소"),h("button",{class:"popupBtn confirmBtn",onClick:w},"확인")])])])])):he("",!0),c.value?(O(),L("div",{key:2,class:"popupOverlay",onClick:I},[h("div",{class:"popupContent",onClick:j[4]||(j[4]=Gr(()=>{},["stop"]))},[h("div",{class:"popupHeader"},[j[14]||(j[14]=h("h2",{class:"popupTitle"},"받기",-1)),h("button",{class:"closeBtn",onClick:I},"×")]),h("div",{class:"popupBody"},[j[15]||(j[15]=h("p",{class:"popupMessage"},"받아주세요",-1)),h("div",{class:"popupActions"},[h("button",{class:"popupBtn cancelBtn",onClick:I},"취소"),h("button",{class:"popupBtn confirmBtn",onClick:I},"확인")])])])])):he("",!0)]))}},LL=Pt(VL,[["__scopeId","data-v-b73bf2b5"]]),BL={class:"notificationPage"},FL={class:"mainContent"},UL={class:"pageHeader"},$L={class:"notificationList"},HL=["onClick"],jL={class:"notificationContent"},GL={class:"notificationTitle"},qL={class:"notificationMessage"},QL={class:"notificationTime"},WL={key:0,class:"unreadDot"},zL={key:0,class:"emptyState"},KL={__name:"NotificationPage",setup(t){const e=dn(),n=D(0),s=D([{id:1,title:"새로운 퀘스트가 도착했습니다!",message:"일일 퀘스트를 완료하고 보상을 받아보세요.",time:"5분 전",read:!1,type:"quest"},{id:2,title:"Coin 구매 완료",message:"1억 Coin 구매가 완료되었습니다.",time:"1시간 전",read:!1,type:"exchange"},{id:3,title:"고양이 제작 완료",message:"새로운 고양이가 인벤토리에 추가되었습니다!",time:"2시간 전",read:!0,type:"factory"},{id:4,title:"출석체크 보상",message:"출석체크를 완료하여 100 Point를 받았습니다.",time:"1일 전",read:!0,type:"attendance"}]);Rt(()=>{const c=ht();c&&(n.value=c.gameData?.coins||0)});const i=c=>{c.read||(c.read=!0)},r=()=>{s.value.forEach(c=>{c.read=!0})},o=Xe(()=>s.value.filter(c=>!c.read).length),l=c=>{switch(i(c),c.type){case"quest":e.push("/quest");break;case"exchange":e.push("/exchange");break;case"factory":e.push("/factory");break;case"attendance":e.push("/attendance");break}};return(c,u)=>(O(),L("div",BL,[we(fn,{coinCount:n.value},null,8,["coinCount"]),h("main",FL,[h("div",UL,[u[0]||(u[0]=h("h1",{class:"pageTitle"},"알림",-1)),o.value>0?(O(),L("button",{key:0,class:"markAllReadBtn",onClick:r}," 모두 읽음 ")):he("",!0)]),h("div",$L,[(O(!0),L(Se,null,je(s.value,d=>(O(),L("div",{key:d.id,class:Pe(["notificationItem",{unread:!d.read}]),onClick:p=>l(d)},[h("div",jL,[h("div",GL,B(d.title),1),h("div",qL,B(d.message),1),h("div",QL,B(d.time),1)]),d.read?he("",!0):(O(),L("div",WL))],10,HL))),128)),s.value.length===0?(O(),L("div",zL,[...u[1]||(u[1]=[h("p",null,"알림이 없습니다.",-1)])])):he("",!0)])]),we(pn)]))}},YL=Pt(KL,[["__scopeId","data-v-776e57f4"]]),JL={class:"shopPage"},XL={class:"mainContent"},ZL={class:"itemList"},e4={class:"itemInfo"},t4={class:"itemName"},n4={class:"itemDescription"},s4={class:"itemPrice"},i4={class:"priceValue"},r4={class:"priceCurrency"},o4={key:0,src:ym,alt:"P",class:"currencyIcon"},a4={key:1,src:Am,alt:"C",class:"currencyIcon"},l4=["disabled","onClick"],c4={__name:"ShopPage",setup(t){const e=D(0),n=D(0),s=D([{id:1,name:"에너지 100",description:"에너지를 100 회복합니다",price:100,currency:"point",amount:100},{id:2,name:"에너지 500",description:"에너지를 500 회복합니다",price:450,currency:"point",amount:500},{id:3,name:"에너지 1000",description:"에너지를 1000 회복합니다",price:800,currency:"point",amount:1e3},{id:4,name:"에너지 2000",description:"에너지를 2000 회복합니다",price:1500,currency:"point",amount:2e3}]),i=()=>{const o=ht();o&&(e.value=o.gameData?.coins||0,n.value=o.gameData?.totalCoin||0)},r=o=>{const l=ht();if(!l){alert("로그인이 필요합니다.");return}if(o.currency==="point"&&e.value<o.price){alert("포인트가 부족합니다.");return}if(o.currency==="coin"&&n.value<o.price){alert("코인이 부족합니다.");return}if(o.currency==="point"){const p=e.value-o.price;Ia(l.email,p,n.value)}else{const p=n.value-o.price;Ia(l.email,e.value,p)}const c=4e3,u=parseInt(localStorage.getItem("currentEnergy")||c.toString()),d=Math.min(u+o.amount,c);localStorage.setItem("currentEnergy",d.toString()),localStorage.setItem("energyLastDate",new Date().toDateString()),alert(`${o.name} 구매 완료! 에너지가 ${o.amount} 회복되었습니다. (현재: ${d}/${c})`),i(),window.dispatchEvent(new Event("userDataUpdated"))};return Rt(()=>{i()}),(o,l)=>(O(),L("div",JL,[we(fn,{coinCount:e.value},null,8,["coinCount"]),h("main",XL,[h("div",ZL,[(O(!0),L(Se,null,je(s.value,c=>(O(),L("div",{key:c.id,class:"shopItem"},[h("div",e4,[h("h3",t4,B(c.name),1),h("p",n4,B(c.description),1)]),h("div",s4,[h("span",i4,B(c.price.toLocaleString()),1),h("span",r4,[c.currency==="point"?(O(),L("img",o4)):(O(),L("img",a4))])]),h("button",{class:"buyBtn",disabled:c.currency==="point"&&e.value<c.price||c.currency==="coin"&&n.value<c.price,onClick:u=>r(c)}," 구매 ",8,l4)]))),128))])]),we(pn)]))}},u4=Pt(c4,[["__scopeId","data-v-e5203ede"]]),h4=["/loading","/login","/signup"],d4=[{path:"/",redirect:"/loading"},{path:"/loading",component:bw},{path:"/login",component:$w},{path:"/signup",component:nE},{path:"/main",component:BT},{path:"/mining",component:sC},{path:"/hunting",component:xC},{path:"/exploration",component:ab},{path:"/production",component:$b},{path:"/exchange",component:oS},{path:"/quest",component:IS},{path:"/inventory",component:GS},{path:"/factory",component:rR},{path:"/settings",component:RR},{path:"/profile",component:HV},{path:"/attendance",component:iL},{path:"/nft",component:LL},{path:"/notification",component:YL},{path:"/shop",component:u4}],py=dw({history:GI(),routes:d4});py.beforeEach((t,e,n)=>{const i=!!ht(),r=h4.includes(t.path);if(i&&(t.path==="/login"||t.path==="/signup")){n("/main");return}if(!i&&!r){n("/login");return}n()});const gy=sI(fw);gy.use(py);gy.mount("#app");
