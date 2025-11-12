(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Qc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const tt={},$i=[],Qn=()=>{},Kp=()=>!1,Ga=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),zc=t=>t.startsWith("onUpdate:"),sn=Object.assign,Wc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},xy=Object.prototype.hasOwnProperty,We=(t,e)=>xy.call(t,e),_e=Array.isArray,Hi=t=>_o(t)==="[object Map]",lr=t=>_o(t)==="[object Set]",yd=t=>_o(t)==="[object Date]",Te=t=>typeof t=="function",St=t=>typeof t=="string",es=t=>typeof t=="symbol",nt=t=>t!==null&&typeof t=="object",Yp=t=>(nt(t)||Te(t))&&Te(t.then)&&Te(t.catch),Jp=Object.prototype.toString,_o=t=>Jp.call(t),Ny=t=>_o(t).slice(8,-1),Xp=t=>_o(t)==="[object Object]",Kc=t=>St(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Lr=Qc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qa=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},My=/-\w/g,xn=qa(t=>t.replace(My,e=>e.slice(1).toUpperCase())),Oy=/\B([A-Z])/g,Ei=qa(t=>t.replace(Oy,"-$1").toLowerCase()),Qa=qa(t=>t.charAt(0).toUpperCase()+t.slice(1)),xl=qa(t=>t?`on${Qa(t)}`:""),Fs=(t,e)=>!Object.is(t,e),Ko=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Zp=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},ua=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ad;const za=()=>Ad||(Ad=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ct(t){if(_e(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=St(s)?Fy(s):Ct(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(St(t)||nt(t))return t}const Vy=/;(?![^(]*\))/g,Ly=/:([^]+)/,By=/\/\*[^]*?\*\//g;function Fy(t){const e={};return t.replace(By,"").split(Vy).forEach(n=>{if(n){const s=n.split(Ly);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Re(t){let e="";if(St(t))e=t;else if(_e(t))for(let n=0;n<t.length;n++){const s=Re(t[n]);s&&(e+=s+" ")}else if(nt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Uy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$y=Qc(Uy);function eg(t){return!!t||t===""}function Hy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=_i(t[s],e[s]);return n}function _i(t,e){if(t===e)return!0;let n=yd(t),s=yd(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=es(t),s=es(e),n||s)return t===e;if(n=_e(t),s=_e(e),n||s)return n&&s?Hy(t,e):!1;if(n=nt(t),s=nt(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!_i(t[o],e[o]))return!1}}return String(t)===String(e)}function Yc(t,e){return t.findIndex(n=>_i(n,e))}const tg=t=>!!(t&&t.__v_isRef===!0),B=t=>St(t)?t:t==null?"":_e(t)||nt(t)&&(t.toString===Jp||!Te(t.toString))?tg(t)?B(t.value):JSON.stringify(t,ng,2):String(t),ng=(t,e)=>tg(e)?ng(t,e.value):Hi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Nl(s,r)+" =>"]=i,n),{})}:lr(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Nl(n))}:es(e)?Nl(e):nt(e)&&!_e(e)&&!Xp(e)?String(e):e,Nl=(t,e="")=>{var n;return es(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let mn;class jy{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=mn,!e&&mn&&(this.index=(mn.scopes||(mn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=mn;try{return mn=this,e()}finally{mn=n}}}on(){++this._on===1&&(this.prevScope=mn,mn=this)}off(){this._on>0&&--this._on===0&&(mn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Gy(){return mn}let ut;const Ml=new WeakSet;class sg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,mn&&mn.active&&mn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ml.has(this)&&(Ml.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||rg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Id(this),og(this);const e=ut,n=On;ut=this,On=!0;try{return this.fn()}finally{ag(this),ut=e,On=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Zc(e);this.deps=this.depsTail=void 0,Id(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ml.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){oc(this)&&this.run()}get dirty(){return oc(this)}}let ig=0,Br,Fr;function rg(t,e=!1){if(t.flags|=8,e){t.next=Fr,Fr=t;return}t.next=Br,Br=t}function Jc(){ig++}function Xc(){if(--ig>0)return;if(Fr){let e=Fr;for(Fr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Br;){let e=Br;for(Br=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function og(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ag(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),Zc(s),qy(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function oc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(lg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function lg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Zr)||(t.globalVersion=Zr,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!oc(t))))return;t.flags|=2;const e=t.dep,n=ut,s=On;ut=t,On=!0;try{og(t);const i=t.fn(t._value);(e.version===0||Fs(i,t._value))&&(t.flags|=128,t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ut=n,On=s,ag(t),t.flags&=-3}}function Zc(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Zc(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function qy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let On=!0;const cg=[];function _s(){cg.push(On),On=!1}function vs(){const t=cg.pop();On=t===void 0?!0:t}function Id(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ut;ut=void 0;try{e()}finally{ut=n}}}let Zr=0;class Qy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class eu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ut||!On||ut===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ut)n=this.activeLink=new Qy(ut,this),ut.deps?(n.prevDep=ut.depsTail,ut.depsTail.nextDep=n,ut.depsTail=n):ut.deps=ut.depsTail=n,ug(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ut.depsTail,n.nextDep=void 0,ut.depsTail.nextDep=n,ut.depsTail=n,ut.deps===n&&(ut.deps=s)}return n}trigger(e){this.version++,Zr++,this.notify(e)}notify(e){Jc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Xc()}}}function ug(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)ug(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ac=new WeakMap,fi=Symbol(""),lc=Symbol(""),eo=Symbol("");function Zt(t,e,n){if(On&&ut){let s=ac.get(t);s||ac.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new eu),i.map=s,i.key=n),i.track()}}function ls(t,e,n,s,i,r){const o=ac.get(t);if(!o){Zr++;return}const l=c=>{c&&c.trigger()};if(Jc(),e==="clear")o.forEach(l);else{const c=_e(t),u=c&&Kc(n);if(c&&n==="length"){const d=Number(s);o.forEach((p,m)=>{(m==="length"||m===eo||!es(m)&&m>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(eo)),e){case"add":c?u&&l(o.get("length")):(l(o.get(fi)),Hi(t)&&l(o.get(lc)));break;case"delete":c||(l(o.get(fi)),Hi(t)&&l(o.get(lc)));break;case"set":Hi(t)&&l(o.get(fi));break}}Xc()}function Ni(t){const e=ze(t);return e===t?e:(Zt(e,"iterate",eo),Pn(t)?e:e.map(qt))}function Wa(t){return Zt(t=ze(t),"iterate",eo),t}const zy={__proto__:null,[Symbol.iterator](){return Ol(this,Symbol.iterator,qt)},concat(...t){return Ni(this).concat(...t.map(e=>_e(e)?Ni(e):e))},entries(){return Ol(this,"entries",t=>(t[1]=qt(t[1]),t))},every(t,e){return rs(this,"every",t,e,void 0,arguments)},filter(t,e){return rs(this,"filter",t,e,n=>n.map(qt),arguments)},find(t,e){return rs(this,"find",t,e,qt,arguments)},findIndex(t,e){return rs(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return rs(this,"findLast",t,e,qt,arguments)},findLastIndex(t,e){return rs(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return rs(this,"forEach",t,e,void 0,arguments)},includes(...t){return Vl(this,"includes",t)},indexOf(...t){return Vl(this,"indexOf",t)},join(t){return Ni(this).join(t)},lastIndexOf(...t){return Vl(this,"lastIndexOf",t)},map(t,e){return rs(this,"map",t,e,void 0,arguments)},pop(){return Rr(this,"pop")},push(...t){return Rr(this,"push",t)},reduce(t,...e){return wd(this,"reduce",t,e)},reduceRight(t,...e){return wd(this,"reduceRight",t,e)},shift(){return Rr(this,"shift")},some(t,e){return rs(this,"some",t,e,void 0,arguments)},splice(...t){return Rr(this,"splice",t)},toReversed(){return Ni(this).toReversed()},toSorted(t){return Ni(this).toSorted(t)},toSpliced(...t){return Ni(this).toSpliced(...t)},unshift(...t){return Rr(this,"unshift",t)},values(){return Ol(this,"values",qt)}};function Ol(t,e,n){const s=Wa(t),i=s[e]();return s!==t&&!Pn(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.done||(r.value=n(r.value)),r}),i}const Wy=Array.prototype;function rs(t,e,n,s,i,r){const o=Wa(t),l=o!==t&&!Pn(t),c=o[e];if(c!==Wy[e]){const p=c.apply(t,r);return l?qt(p):p}let u=n;o!==t&&(l?u=function(p,m){return n.call(this,qt(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const d=c.call(o,u,s);return l&&i?i(d):d}function wd(t,e,n,s){const i=Wa(t);let r=n;return i!==t&&(Pn(t)?n.length>3&&(r=function(o,l,c){return n.call(this,o,l,c,t)}):r=function(o,l,c){return n.call(this,o,qt(l),c,t)}),i[e](r,...s)}function Vl(t,e,n){const s=ze(t);Zt(s,"iterate",eo);const i=s[e](...n);return(i===-1||i===!1)&&su(n[0])?(n[0]=ze(n[0]),s[e](...n)):i}function Rr(t,e,n=[]){_s(),Jc();const s=ze(t)[e].apply(t,n);return Xc(),vs(),s}const Ky=Qc("__proto__,__v_isRef,__isVue"),hg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(es));function Yy(t){es(t)||(t=String(t));const e=ze(this);return Zt(e,"has",t),e.hasOwnProperty(t)}class dg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?oA:mg:r?gg:pg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=_e(e);if(!i){let c;if(o&&(c=zy[n]))return c;if(n==="hasOwnProperty")return Yy}const l=Reflect.get(e,n,nn(e)?e:s);if((es(n)?hg.has(n):Ky(n))||(i||Zt(e,"get",n),r))return l;if(nn(l)){const c=o&&Kc(n)?l:l.value;return i&&nt(c)?uc(c):c}return nt(l)?i?uc(l):vo(l):l}}class fg extends dg{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const c=Gs(r);if(!Pn(s)&&!Gs(s)&&(r=ze(r),s=ze(s)),!_e(e)&&nn(r)&&!nn(s))return c||(r.value=s),!0}const o=_e(e)&&Kc(n)?Number(n)<e.length:We(e,n),l=Reflect.set(e,n,s,nn(e)?e:i);return e===ze(i)&&(o?Fs(s,r)&&ls(e,"set",n,s):ls(e,"add",n,s)),l}deleteProperty(e,n){const s=We(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&ls(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!es(n)||!hg.has(n))&&Zt(e,"has",n),s}ownKeys(e){return Zt(e,"iterate",_e(e)?"length":fi),Reflect.ownKeys(e)}}class Jy extends dg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Xy=new fg,Zy=new Jy,eA=new fg(!0);const cc=t=>t,Fo=t=>Reflect.getPrototypeOf(t);function tA(t,e,n){return function(...s){const i=this.__v_raw,r=ze(i),o=Hi(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=i[t](...s),d=n?cc:e?ha:qt;return!e&&Zt(r,"iterate",c?lc:fi),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function Uo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function nA(t,e){const n={get(i){const r=this.__v_raw,o=ze(r),l=ze(i);t||(Fs(i,l)&&Zt(o,"get",i),Zt(o,"get",l));const{has:c}=Fo(o),u=e?cc:t?ha:qt;if(c.call(o,i))return u(r.get(i));if(c.call(o,l))return u(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&Zt(ze(i),"iterate",fi),i.size},has(i){const r=this.__v_raw,o=ze(r),l=ze(i);return t||(Fs(i,l)&&Zt(o,"has",i),Zt(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,c=ze(l),u=e?cc:t?ha:qt;return!t&&Zt(c,"iterate",fi),l.forEach((d,p)=>i.call(r,u(d),u(p),o))}};return sn(n,t?{add:Uo("add"),set:Uo("set"),delete:Uo("delete"),clear:Uo("clear")}:{add(i){!e&&!Pn(i)&&!Gs(i)&&(i=ze(i));const r=ze(this);return Fo(r).has.call(r,i)||(r.add(i),ls(r,"add",i,i)),this},set(i,r){!e&&!Pn(r)&&!Gs(r)&&(r=ze(r));const o=ze(this),{has:l,get:c}=Fo(o);let u=l.call(o,i);u||(i=ze(i),u=l.call(o,i));const d=c.call(o,i);return o.set(i,r),u?Fs(r,d)&&ls(o,"set",i,r):ls(o,"add",i,r),this},delete(i){const r=ze(this),{has:o,get:l}=Fo(r);let c=o.call(r,i);c||(i=ze(i),c=o.call(r,i)),l&&l.call(r,i);const u=r.delete(i);return c&&ls(r,"delete",i,void 0),u},clear(){const i=ze(this),r=i.size!==0,o=i.clear();return r&&ls(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=tA(i,t,e)}),n}function tu(t,e){const n=nA(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(We(n,i)&&i in s?n:s,i,r)}const sA={get:tu(!1,!1)},iA={get:tu(!1,!0)},rA={get:tu(!0,!1)};const pg=new WeakMap,gg=new WeakMap,mg=new WeakMap,oA=new WeakMap;function aA(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lA(t){return t.__v_skip||!Object.isExtensible(t)?0:aA(Ny(t))}function vo(t){return Gs(t)?t:nu(t,!1,Xy,sA,pg)}function _g(t){return nu(t,!1,eA,iA,gg)}function uc(t){return nu(t,!0,Zy,rA,mg)}function nu(t,e,n,s,i){if(!nt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=lA(t);if(r===0)return t;const o=i.get(t);if(o)return o;const l=new Proxy(t,r===2?s:n);return i.set(t,l),l}function ji(t){return Gs(t)?ji(t.__v_raw):!!(t&&t.__v_isReactive)}function Gs(t){return!!(t&&t.__v_isReadonly)}function Pn(t){return!!(t&&t.__v_isShallow)}function su(t){return t?!!t.__v_raw:!1}function ze(t){const e=t&&t.__v_raw;return e?ze(e):t}function cA(t){return!We(t,"__v_skip")&&Object.isExtensible(t)&&Zp(t,"__v_skip",!0),t}const qt=t=>nt(t)?vo(t):t,ha=t=>nt(t)?uc(t):t;function nn(t){return t?t.__v_isRef===!0:!1}function D(t){return vg(t,!1)}function uA(t){return vg(t,!0)}function vg(t,e){return nn(t)?t:new hA(t,e)}class hA{constructor(e,n){this.dep=new eu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ze(e),this._value=n?e:qt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Pn(e)||Gs(e);e=s?e:ze(e),Fs(e,n)&&(this._rawValue=e,this._value=s?e:qt(e),this.dep.trigger())}}function zt(t){return nn(t)?t.value:t}const dA={get:(t,e,n)=>e==="__v_raw"?t:zt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return nn(i)&&!nn(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function yg(t){return ji(t)?t:new Proxy(t,dA)}class fA{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new eu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Zr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ut!==this)return rg(this,!0),!0}get value(){const e=this.dep.track();return lg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function pA(t,e,n=!1){let s,i;return Te(t)?s=t:(s=t.get,i=t.set),new fA(s,i,n)}const $o={},da=new WeakMap;let li;function gA(t,e=!1,n=li){if(n){let s=da.get(n);s||da.set(n,s=[]),s.push(t)}}function mA(t,e,n=tt){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:c}=n,u=j=>i?j:Pn(j)||i===!1||i===0?cs(j,1):cs(j);let d,p,m,_,I=!1,b=!1;if(nn(t)?(p=()=>t.value,I=Pn(t)):ji(t)?(p=()=>u(t),I=!0):_e(t)?(b=!0,I=t.some(j=>ji(j)||Pn(j)),p=()=>t.map(j=>{if(nn(j))return j.value;if(ji(j))return u(j);if(Te(j))return c?c(j,2):j()})):Te(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){_s();try{m()}finally{vs()}}const j=li;li=d;try{return c?c(t,3,[_]):t(_)}finally{li=j}}:p=Qn,e&&i){const j=p,se=i===!0?1/0:i;p=()=>cs(j(),se)}const w=Gy(),x=()=>{d.stop(),w&&w.active&&Wc(w.effects,d)};if(r&&e){const j=e;e=(...se)=>{j(...se),x()}}let U=b?new Array(t.length).fill($o):$o;const F=j=>{if(!(!(d.flags&1)||!d.dirty&&!j))if(e){const se=d.run();if(i||I||(b?se.some((Ie,S)=>Fs(Ie,U[S])):Fs(se,U))){m&&m();const Ie=li;li=d;try{const S=[se,U===$o?void 0:b&&U[0]===$o?[]:U,_];U=se,c?c(e,3,S):e(...S)}finally{li=Ie}}}else d.run()};return l&&l(F),d=new sg(p),d.scheduler=o?()=>o(F,!1):F,_=j=>gA(j,!1,d),m=d.onStop=()=>{const j=da.get(d);if(j){if(c)c(j,4);else for(const se of j)se();da.delete(d)}},e?s?F(!0):U=d.run():o?o(F.bind(null,!0),!0):d.run(),x.pause=d.pause.bind(d),x.resume=d.resume.bind(d),x.stop=x,x}function cs(t,e=1/0,n){if(e<=0||!nt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,nn(t))cs(t.value,e,n);else if(_e(t))for(let s=0;s<t.length;s++)cs(t[s],e,n);else if(lr(t)||Hi(t))t.forEach(s=>{cs(s,e,n)});else if(Xp(t)){for(const s in t)cs(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&cs(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function yo(t,e,n,s){try{return s?t(...s):t()}catch(i){Ka(i,e,n)}}function ts(t,e,n,s){if(Te(t)){const i=yo(t,e,n,s);return i&&Yp(i)&&i.catch(r=>{Ka(r,e,n)}),i}if(_e(t)){const i=[];for(let r=0;r<t.length;r++)i.push(ts(t[r],e,n,s));return i}}function Ka(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||tt;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,u)===!1)return}l=l.parent}if(r){_s(),yo(r,null,10,[t,c,u]),vs();return}}_A(t,n,i,s,o)}function _A(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const un=[];let Hn=-1;const Gi=[];let xs=null,Mi=0;const Ag=Promise.resolve();let fa=null;function iu(t){const e=fa||Ag;return t?e.then(this?t.bind(this):t):e}function vA(t){let e=Hn+1,n=un.length;for(;e<n;){const s=e+n>>>1,i=un[s],r=to(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function ru(t){if(!(t.flags&1)){const e=to(t),n=un[un.length-1];!n||!(t.flags&2)&&e>=to(n)?un.push(t):un.splice(vA(e),0,t),t.flags|=1,Ig()}}function Ig(){fa||(fa=Ag.then(Eg))}function yA(t){_e(t)?Gi.push(...t):xs&&t.id===-1?xs.splice(Mi+1,0,t):t.flags&1||(Gi.push(t),t.flags|=1),Ig()}function Ed(t,e,n=Hn+1){for(;n<un.length;n++){const s=un[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;un.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function wg(t){if(Gi.length){const e=[...new Set(Gi)].sort((n,s)=>to(n)-to(s));if(Gi.length=0,xs){xs.push(...e);return}for(xs=e,Mi=0;Mi<xs.length;Mi++){const n=xs[Mi];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}xs=null,Mi=0}}const to=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Eg(t){try{for(Hn=0;Hn<un.length;Hn++){const e=un[Hn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),yo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Hn<un.length;Hn++){const e=un[Hn];e&&(e.flags&=-2)}Hn=-1,un.length=0,wg(),fa=null,(un.length||Gi.length)&&Eg()}}let wn=null,Tg=null;function pa(t){const e=wn;return wn=t,Tg=t&&t.type.__scopeId||null,e}function AA(t,e=wn,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&_a(-1);const r=pa(e);let o;try{o=t(...i)}finally{pa(r),s._d&&_a(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ds(t,e){if(wn===null)return t;const n=Za(wn),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,c=tt]=e[i];r&&(Te(r)&&(r={mounted:r,updated:r}),r.deep&&cs(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function oi(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(_s(),ts(c,n,8,[t.el,l,t,e]),vs())}}const IA=Symbol("_vte"),wA=t=>t.__isTeleport,EA=Symbol("_leaveCb");function ou(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ou(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Cg(t,e){return Te(t)?sn({name:t.name},e,{setup:t}):t}function bg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const ga=new WeakMap;function Ur(t,e,n,s,i=!1){if(_e(t)){t.forEach((I,b)=>Ur(I,e&&(_e(e)?e[b]:e),n,s,i));return}if($r(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Ur(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Za(s.component):s.el,o=i?null:r,{i:l,r:c}=t,u=e&&e.r,d=l.refs===tt?l.refs={}:l.refs,p=l.setupState,m=ze(p),_=p===tt?Kp:I=>We(m,I);if(u!=null&&u!==c){if(Td(e),St(u))d[u]=null,_(u)&&(p[u]=null);else if(nn(u)){u.value=null;const I=e;I.k&&(d[I.k]=null)}}if(Te(c))yo(c,l,12,[o,d]);else{const I=St(c),b=nn(c);if(I||b){const w=()=>{if(t.f){const x=I?_(c)?p[c]:d[c]:c.value;if(i)_e(x)&&Wc(x,r);else if(_e(x))x.includes(r)||x.push(r);else if(I)d[c]=[r],_(c)&&(p[c]=d[c]);else{const U=[r];c.value=U,t.k&&(d[t.k]=U)}}else I?(d[c]=o,_(c)&&(p[c]=o)):b&&(c.value=o,t.k&&(d[t.k]=o))};if(o){const x=()=>{w(),ga.delete(t)};x.id=-1,ga.set(t,x),In(x,n)}else Td(t),w()}}}function Td(t){const e=ga.get(t);e&&(e.flags|=8,ga.delete(t))}za().requestIdleCallback;za().cancelIdleCallback;const $r=t=>!!t.type.__asyncLoader,Sg=t=>t.type.__isKeepAlive;function TA(t,e){Rg(t,"a",e)}function CA(t,e){Rg(t,"da",e)}function Rg(t,e,n=tn){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ya(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Sg(i.parent.vnode)&&bA(s,e,n,i),i=i.parent}}function bA(t,e,n,s){const i=Ya(e,t,s,!0);cr(()=>{Wc(s[e],i)},n)}function Ya(t,e,n=tn,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{_s();const l=Ao(n),c=ts(e,n,t,o);return l(),vs(),c});return s?i.unshift(r):i.push(r),r}}const Ts=t=>(e,n=tn)=>{(!io||t==="sp")&&Ya(t,(...s)=>e(...s),n)},SA=Ts("bm"),Rt=Ts("m"),RA=Ts("bu"),PA=Ts("u"),kA=Ts("bum"),cr=Ts("um"),DA=Ts("sp"),xA=Ts("rtg"),NA=Ts("rtc");function MA(t,e=tn){Ya("ec",t,e)}const OA="components";function VA(t,e){return BA(OA,t,!0,e)||t}const LA=Symbol.for("v-ndc");function BA(t,e,n=!0,s=!1){const i=wn||tn;if(i){const r=i.type;{const l=S0(r,!1);if(l&&(l===e||l===xn(e)||l===Qa(xn(e))))return r}const o=Cd(i[t]||r[t],e)||Cd(i.appContext[t],e);return!o&&s?r:o}}function Cd(t,e){return t&&(t[e]||t[xn(e)]||t[Qa(xn(e))])}function je(t,e,n,s){let i;const r=n,o=_e(t);if(o||St(t)){const l=o&&ji(t);let c=!1,u=!1;l&&(c=!Pn(t),u=Gs(t),t=Wa(t)),i=new Array(t.length);for(let d=0,p=t.length;d<p;d++)i[d]=e(c?u?ha(qt(t[d])):qt(t[d]):t[d],d,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=e(l+1,l,void 0,r)}else if(nt(t))if(t[Symbol.iterator])i=Array.from(t,(l,c)=>e(l,c,void 0,r));else{const l=Object.keys(t);i=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];i[c]=e(t[d],d,c,r)}}else i=[];return i}const hc=t=>t?Kg(t)?Za(t):hc(t.parent):null,Hr=sn(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>hc(t.parent),$root:t=>hc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>kg(t),$forceUpdate:t=>t.f||(t.f=()=>{ru(t.update)}),$nextTick:t=>t.n||(t.n=iu.bind(t.proxy)),$watch:t=>r0.bind(t)}),Ll=(t,e)=>t!==tt&&!t.__isScriptSetup&&We(t,e),FA={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Ll(s,e))return o[e]=1,s[e];if(i!==tt&&We(i,e))return o[e]=2,i[e];if((u=t.propsOptions[0])&&We(u,e))return o[e]=3,r[e];if(n!==tt&&We(n,e))return o[e]=4,n[e];dc&&(o[e]=0)}}const d=Hr[e];let p,m;if(d)return e==="$attrs"&&Zt(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==tt&&We(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,We(m,e))return m[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Ll(i,e)?(i[e]=n,!0):s!==tt&&We(s,e)?(s[e]=n,!0):We(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r,type:o}},l){let c,u;return!!(n[l]||t!==tt&&l[0]!=="$"&&We(t,l)||Ll(e,l)||(c=r[0])&&We(c,l)||We(s,l)||We(Hr,l)||We(i.config.globalProperties,l)||(u=o.__cssModules)&&u[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:We(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function bd(t){return _e(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let dc=!0;function UA(t){const e=kg(t),n=t.proxy,s=t.ctx;dc=!1,e.beforeCreate&&Sd(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:p,mounted:m,beforeUpdate:_,updated:I,activated:b,deactivated:w,beforeDestroy:x,beforeUnmount:U,destroyed:F,unmounted:j,render:se,renderTracked:Ie,renderTriggered:S,errorCaptured:A,serverPrefetch:T,expose:P,inheritAttrs:R,components:N,directives:E,filters:st}=e;if(u&&$A(u,s,null),o)for(const Ce in o){const be=o[Ce];Te(be)&&(s[Ce]=be.bind(n))}if(i){const Ce=i.call(n,n);nt(Ce)&&(t.data=vo(Ce))}if(dc=!0,r)for(const Ce in r){const be=r[Ce],kt=Te(be)?be.bind(n,n):Te(be.get)?be.get.bind(n,n):Qn,Kt=!Te(be)&&Te(be.set)?be.set.bind(n):Qn,Lt=Xe({get:kt,set:Kt});Object.defineProperty(s,Ce,{enumerable:!0,configurable:!0,get:()=>Lt.value,set:rt=>Lt.value=rt})}if(l)for(const Ce in l)Pg(l[Ce],s,n,Ce);if(c){const Ce=Te(c)?c.call(n):c;Reflect.ownKeys(Ce).forEach(be=>{Yo(be,Ce[be])})}d&&Sd(d,t,"c");function it(Ce,be){_e(be)?be.forEach(kt=>Ce(kt.bind(n))):be&&Ce(be.bind(n))}if(it(SA,p),it(Rt,m),it(RA,_),it(PA,I),it(TA,b),it(CA,w),it(MA,A),it(NA,Ie),it(xA,S),it(kA,U),it(cr,j),it(DA,T),_e(P))if(P.length){const Ce=t.exposed||(t.exposed={});P.forEach(be=>{Object.defineProperty(Ce,be,{get:()=>n[be],set:kt=>n[be]=kt,enumerable:!0})})}else t.exposed||(t.exposed={});se&&t.render===Qn&&(t.render=se),R!=null&&(t.inheritAttrs=R),N&&(t.components=N),E&&(t.directives=E),T&&bg(t)}function $A(t,e,n=Qn){_e(t)&&(t=fc(t));for(const s in t){const i=t[s];let r;nt(i)?"default"in i?r=zn(i.from||s,i.default,!0):r=zn(i.from||s):r=zn(i),nn(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Sd(t,e,n){ts(_e(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Pg(t,e,n,s){let i=s.includes(".")?jg(n,s):()=>n[s];if(St(t)){const r=e[t];Te(r)&&gs(i,r)}else if(Te(t))gs(i,t.bind(n));else if(nt(t))if(_e(t))t.forEach(r=>Pg(r,e,n,s));else{const r=Te(t.handler)?t.handler.bind(n):e[t.handler];Te(r)&&gs(i,r,t)}}function kg(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(u=>ma(c,u,o,!0)),ma(c,e,o)),nt(e)&&r.set(e,c),c}function ma(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&ma(t,r,n,!0),i&&i.forEach(o=>ma(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=HA[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const HA={data:Rd,props:Pd,emits:Pd,methods:xr,computed:xr,beforeCreate:ln,created:ln,beforeMount:ln,mounted:ln,beforeUpdate:ln,updated:ln,beforeDestroy:ln,beforeUnmount:ln,destroyed:ln,unmounted:ln,activated:ln,deactivated:ln,errorCaptured:ln,serverPrefetch:ln,components:xr,directives:xr,watch:GA,provide:Rd,inject:jA};function Rd(t,e){return e?t?function(){return sn(Te(t)?t.call(this,this):t,Te(e)?e.call(this,this):e)}:e:t}function jA(t,e){return xr(fc(t),fc(e))}function fc(t){if(_e(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ln(t,e){return t?[...new Set([].concat(t,e))]:e}function xr(t,e){return t?sn(Object.create(null),t,e):e}function Pd(t,e){return t?_e(t)&&_e(e)?[...new Set([...t,...e])]:sn(Object.create(null),bd(t),bd(e??{})):e}function GA(t,e){if(!t)return e;if(!e)return t;const n=sn(Object.create(null),t);for(const s in e)n[s]=ln(t[s],e[s]);return n}function Dg(){return{app:null,config:{isNativeTag:Kp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qA=0;function QA(t,e){return function(s,i=null){Te(s)||(s=sn({},s)),i!=null&&!nt(i)&&(i=null);const r=Dg(),o=new WeakSet,l=[];let c=!1;const u=r.app={_uid:qA++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:P0,get config(){return r.config},set config(d){},use(d,...p){return o.has(d)||(d&&Te(d.install)?(o.add(d),d.install(u,...p)):Te(d)&&(o.add(d),d(u,...p))),u},mixin(d){return r.mixins.includes(d)||r.mixins.push(d),u},component(d,p){return p?(r.components[d]=p,u):r.components[d]},directive(d,p){return p?(r.directives[d]=p,u):r.directives[d]},mount(d,p,m){if(!c){const _=u._ceVNode||we(s,i);return _.appContext=r,m===!0?m="svg":m===!1&&(m=void 0),t(_,d,m),c=!0,u._container=d,d.__vue_app__=u,Za(_.component)}},onUnmount(d){l.push(d)},unmount(){c&&(ts(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,p){return r.provides[d]=p,u},runWithContext(d){const p=qi;qi=u;try{return d()}finally{qi=p}}};return u}}let qi=null;function Yo(t,e){if(tn){let n=tn.provides;const s=tn.parent&&tn.parent.provides;s===n&&(n=tn.provides=Object.create(s)),n[t]=e}}function zn(t,e,n=!1){const s=w0();if(s||qi){let i=qi?qi._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Te(e)?e.call(s&&s.proxy):e}}const xg={},Ng=()=>Object.create(xg),Mg=t=>Object.getPrototypeOf(t)===xg;function zA(t,e,n,s=!1){const i={},r=Ng();t.propsDefaults=Object.create(null),Og(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:_g(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function WA(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=ze(i),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(Ja(t.emitsOptions,m))continue;const _=e[m];if(c)if(We(r,m))_!==r[m]&&(r[m]=_,u=!0);else{const I=xn(m);i[I]=pc(c,l,I,_,t,!1)}else _!==r[m]&&(r[m]=_,u=!0)}}}else{Og(t,e,i,r)&&(u=!0);let d;for(const p in l)(!e||!We(e,p)&&((d=Ei(p))===p||!We(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(i[p]=pc(c,l,p,void 0,t,!0)):delete i[p]);if(r!==l)for(const p in r)(!e||!We(e,p))&&(delete r[p],u=!0)}u&&ls(t.attrs,"set","")}function Og(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Lr(c))continue;const u=e[c];let d;i&&We(i,d=xn(c))?!r||!r.includes(d)?n[d]=u:(l||(l={}))[d]=u:Ja(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(r){const c=ze(n),u=l||tt;for(let d=0;d<r.length;d++){const p=r[d];n[p]=pc(i,c,p,u[p],t,!We(u,p))}}return o}function pc(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=We(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Te(c)){const{propsDefaults:u}=i;if(n in u)s=u[n];else{const d=Ao(i);s=u[n]=c.call(null,e),d()}}else s=c;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===Ei(n))&&(s=!0))}return s}const KA=new WeakMap;function Vg(t,e,n=!1){const s=n?KA:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let c=!1;if(!Te(t)){const d=p=>{c=!0;const[m,_]=Vg(p,e,!0);sn(o,m),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!r&&!c)return nt(t)&&s.set(t,$i),$i;if(_e(r))for(let d=0;d<r.length;d++){const p=xn(r[d]);kd(p)&&(o[p]=tt)}else if(r)for(const d in r){const p=xn(d);if(kd(p)){const m=r[d],_=o[p]=_e(m)||Te(m)?{type:m}:sn({},m),I=_.type;let b=!1,w=!0;if(_e(I))for(let x=0;x<I.length;++x){const U=I[x],F=Te(U)&&U.name;if(F==="Boolean"){b=!0;break}else F==="String"&&(w=!1)}else b=Te(I)&&I.name==="Boolean";_[0]=b,_[1]=w,(b||We(_,"default"))&&l.push(p)}}const u=[o,l];return nt(t)&&s.set(t,u),u}function kd(t){return t[0]!=="$"&&!Lr(t)}const au=t=>t==="_"||t==="_ctx"||t==="$stable",lu=t=>_e(t)?t.map(Gn):[Gn(t)],YA=(t,e,n)=>{if(e._n)return e;const s=AA((...i)=>lu(e(...i)),n);return s._c=!1,s},Lg=(t,e,n)=>{const s=t._ctx;for(const i in t){if(au(i))continue;const r=t[i];if(Te(r))e[i]=YA(i,r,s);else if(r!=null){const o=lu(r);e[i]=()=>o}}},Bg=(t,e)=>{const n=lu(e);t.slots.default=()=>n},Fg=(t,e,n)=>{for(const s in e)(n||!au(s))&&(t[s]=e[s])},JA=(t,e,n)=>{const s=t.slots=Ng();if(t.vnode.shapeFlag&32){const i=e._;i?(Fg(s,e,n),n&&Zp(s,"_",i,!0)):Lg(e,s)}else e&&Bg(t,e)},XA=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=tt;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:Fg(i,e,n):(r=!e.$stable,Lg(e,i)),o=e}else e&&(Bg(t,e),o={default:1});if(r)for(const l in i)!au(l)&&o[l]==null&&delete i[l]},In=f0;function ZA(t){return e0(t)}function e0(t,e){const n=za();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:m,setScopeId:_=Qn,insertStaticContent:I}=t,b=(y,C,M,Q=null,K=null,z=null,ee=void 0,J=null,W=!!C.dynamicChildren)=>{if(y===C)return;y&&!Pr(y,C)&&(Q=q(y),rt(y,K,z,!0),y=null),C.patchFlag===-2&&(W=!1,C.dynamicChildren=null);const{type:Z,ref:ge,shapeFlag:oe}=C;switch(Z){case Xa:w(y,C,M,Q);break;case qs:x(y,C,M,Q);break;case Jo:y==null&&U(C,M,Q,ee);break;case Se:N(y,C,M,Q,K,z,ee,J,W);break;default:oe&1?se(y,C,M,Q,K,z,ee,J,W):oe&6?E(y,C,M,Q,K,z,ee,J,W):(oe&64||oe&128)&&Z.process(y,C,M,Q,K,z,ee,J,W,ue)}ge!=null&&K?Ur(ge,y&&y.ref,z,C||y,!C):ge==null&&y&&y.ref!=null&&Ur(y.ref,null,z,y,!0)},w=(y,C,M,Q)=>{if(y==null)s(C.el=l(C.children),M,Q);else{const K=C.el=y.el;C.children!==y.children&&u(K,C.children)}},x=(y,C,M,Q)=>{y==null?s(C.el=c(C.children||""),M,Q):C.el=y.el},U=(y,C,M,Q)=>{[y.el,y.anchor]=I(y.children,C,M,Q,y.el,y.anchor)},F=({el:y,anchor:C},M,Q)=>{let K;for(;y&&y!==C;)K=m(y),s(y,M,Q),y=K;s(C,M,Q)},j=({el:y,anchor:C})=>{let M;for(;y&&y!==C;)M=m(y),i(y),y=M;i(C)},se=(y,C,M,Q,K,z,ee,J,W)=>{C.type==="svg"?ee="svg":C.type==="math"&&(ee="mathml"),y==null?Ie(C,M,Q,K,z,ee,J,W):T(y,C,K,z,ee,J,W)},Ie=(y,C,M,Q,K,z,ee,J)=>{let W,Z;const{props:ge,shapeFlag:oe,transition:de,dirs:pe}=y;if(W=y.el=o(y.type,z,ge&&ge.is,ge),oe&8?d(W,y.children):oe&16&&A(y.children,W,null,Q,K,Bl(y,z),ee,J),pe&&oi(y,null,Q,"created"),S(W,y,y.scopeId,ee,Q),ge){for(const Ge in ge)Ge!=="value"&&!Lr(Ge)&&r(W,Ge,null,ge[Ge],z,Q);"value"in ge&&r(W,"value",null,ge.value,z),(Z=ge.onVnodeBeforeMount)&&$n(Z,Q,y)}pe&&oi(y,null,Q,"beforeMount");const ke=t0(K,de);ke&&de.beforeEnter(W),s(W,C,M),((Z=ge&&ge.onVnodeMounted)||ke||pe)&&In(()=>{Z&&$n(Z,Q,y),ke&&de.enter(W),pe&&oi(y,null,Q,"mounted")},K)},S=(y,C,M,Q,K)=>{if(M&&_(y,M),Q)for(let z=0;z<Q.length;z++)_(y,Q[z]);if(K){let z=K.subTree;if(C===z||qg(z.type)&&(z.ssContent===C||z.ssFallback===C)){const ee=K.vnode;S(y,ee,ee.scopeId,ee.slotScopeIds,K.parent)}}},A=(y,C,M,Q,K,z,ee,J,W=0)=>{for(let Z=W;Z<y.length;Z++){const ge=y[Z]=J?Ns(y[Z]):Gn(y[Z]);b(null,ge,C,M,Q,K,z,ee,J)}},T=(y,C,M,Q,K,z,ee)=>{const J=C.el=y.el;let{patchFlag:W,dynamicChildren:Z,dirs:ge}=C;W|=y.patchFlag&16;const oe=y.props||tt,de=C.props||tt;let pe;if(M&&ai(M,!1),(pe=de.onVnodeBeforeUpdate)&&$n(pe,M,C,y),ge&&oi(C,y,M,"beforeUpdate"),M&&ai(M,!0),(oe.innerHTML&&de.innerHTML==null||oe.textContent&&de.textContent==null)&&d(J,""),Z?P(y.dynamicChildren,Z,J,M,Q,Bl(C,K),z):ee||be(y,C,J,null,M,Q,Bl(C,K),z,!1),W>0){if(W&16)R(J,oe,de,M,K);else if(W&2&&oe.class!==de.class&&r(J,"class",null,de.class,K),W&4&&r(J,"style",oe.style,de.style,K),W&8){const ke=C.dynamicProps;for(let Ge=0;Ge<ke.length;Ge++){const Ne=ke[Ge],$e=oe[Ne],He=de[Ne];(He!==$e||Ne==="value")&&r(J,Ne,$e,He,K,M)}}W&1&&y.children!==C.children&&d(J,C.children)}else!ee&&Z==null&&R(J,oe,de,M,K);((pe=de.onVnodeUpdated)||ge)&&In(()=>{pe&&$n(pe,M,C,y),ge&&oi(C,y,M,"updated")},Q)},P=(y,C,M,Q,K,z,ee)=>{for(let J=0;J<C.length;J++){const W=y[J],Z=C[J],ge=W.el&&(W.type===Se||!Pr(W,Z)||W.shapeFlag&198)?p(W.el):M;b(W,Z,ge,null,Q,K,z,ee,!0)}},R=(y,C,M,Q,K)=>{if(C!==M){if(C!==tt)for(const z in C)!Lr(z)&&!(z in M)&&r(y,z,C[z],null,K,Q);for(const z in M){if(Lr(z))continue;const ee=M[z],J=C[z];ee!==J&&z!=="value"&&r(y,z,J,ee,K,Q)}"value"in M&&r(y,"value",C.value,M.value,K)}},N=(y,C,M,Q,K,z,ee,J,W)=>{const Z=C.el=y?y.el:l(""),ge=C.anchor=y?y.anchor:l("");let{patchFlag:oe,dynamicChildren:de,slotScopeIds:pe}=C;pe&&(J=J?J.concat(pe):pe),y==null?(s(Z,M,Q),s(ge,M,Q),A(C.children||[],M,ge,K,z,ee,J,W)):oe>0&&oe&64&&de&&y.dynamicChildren?(P(y.dynamicChildren,de,M,K,z,ee,J),(C.key!=null||K&&C===K.subTree)&&Ug(y,C,!0)):be(y,C,M,ge,K,z,ee,J,W)},E=(y,C,M,Q,K,z,ee,J,W)=>{C.slotScopeIds=J,y==null?C.shapeFlag&512?K.ctx.activate(C,M,Q,ee,W):st(C,M,Q,K,z,ee,W):vt(y,C,W)},st=(y,C,M,Q,K,z,ee)=>{const J=y.component=I0(y,Q,K);if(Sg(y)&&(J.ctx.renderer=ue),E0(J,!1,ee),J.asyncDep){if(K&&K.registerDep(J,it,ee),!y.el){const W=J.subTree=we(qs);x(null,W,C,M),y.placeholder=W.el}}else it(J,y,C,M,K,z,ee)},vt=(y,C,M)=>{const Q=C.component=y.component;if(h0(y,C,M))if(Q.asyncDep&&!Q.asyncResolved){Ce(Q,C,M);return}else Q.next=C,Q.update();else C.el=y.el,Q.vnode=C},it=(y,C,M,Q,K,z,ee)=>{const J=()=>{if(y.isMounted){let{next:oe,bu:de,u:pe,parent:ke,vnode:Ge}=y;{const Ye=$g(y);if(Ye){oe&&(oe.el=Ge.el,Ce(y,oe,ee)),Ye.asyncDep.then(()=>{y.isUnmounted||J()});return}}let Ne=oe,$e;ai(y,!1),oe?(oe.el=Ge.el,Ce(y,oe,ee)):oe=Ge,de&&Ko(de),($e=oe.props&&oe.props.onVnodeBeforeUpdate)&&$n($e,ke,oe,Ge),ai(y,!0);const He=xd(y),qe=y.subTree;y.subTree=He,b(qe,He,p(qe.el),q(qe),y,K,z),oe.el=He.el,Ne===null&&d0(y,He.el),pe&&In(pe,K),($e=oe.props&&oe.props.onVnodeUpdated)&&In(()=>$n($e,ke,oe,Ge),K)}else{let oe;const{el:de,props:pe}=C,{bm:ke,m:Ge,parent:Ne,root:$e,type:He}=y,qe=$r(C);ai(y,!1),ke&&Ko(ke),!qe&&(oe=pe&&pe.onVnodeBeforeMount)&&$n(oe,Ne,C),ai(y,!0);{$e.ce&&$e.ce._def.shadowRoot!==!1&&$e.ce._injectChildStyle(He);const Ye=y.subTree=xd(y);b(null,Ye,M,Q,y,K,z),C.el=Ye.el}if(Ge&&In(Ge,K),!qe&&(oe=pe&&pe.onVnodeMounted)){const Ye=C;In(()=>$n(oe,Ne,Ye),K)}(C.shapeFlag&256||Ne&&$r(Ne.vnode)&&Ne.vnode.shapeFlag&256)&&y.a&&In(y.a,K),y.isMounted=!0,C=M=Q=null}};y.scope.on();const W=y.effect=new sg(J);y.scope.off();const Z=y.update=W.run.bind(W),ge=y.job=W.runIfDirty.bind(W);ge.i=y,ge.id=y.uid,W.scheduler=()=>ru(ge),ai(y,!0),Z()},Ce=(y,C,M)=>{C.component=y;const Q=y.vnode.props;y.vnode=C,y.next=null,WA(y,C.props,Q,M),XA(y,C.children,M),_s(),Ed(y),vs()},be=(y,C,M,Q,K,z,ee,J,W=!1)=>{const Z=y&&y.children,ge=y?y.shapeFlag:0,oe=C.children,{patchFlag:de,shapeFlag:pe}=C;if(de>0){if(de&128){Kt(Z,oe,M,Q,K,z,ee,J,W);return}else if(de&256){kt(Z,oe,M,Q,K,z,ee,J,W);return}}pe&8?(ge&16&&ot(Z,K,z),oe!==Z&&d(M,oe)):ge&16?pe&16?Kt(Z,oe,M,Q,K,z,ee,J,W):ot(Z,K,z,!0):(ge&8&&d(M,""),pe&16&&A(oe,M,Q,K,z,ee,J,W))},kt=(y,C,M,Q,K,z,ee,J,W)=>{y=y||$i,C=C||$i;const Z=y.length,ge=C.length,oe=Math.min(Z,ge);let de;for(de=0;de<oe;de++){const pe=C[de]=W?Ns(C[de]):Gn(C[de]);b(y[de],pe,M,null,K,z,ee,J,W)}Z>ge?ot(y,K,z,!0,!1,oe):A(C,M,Q,K,z,ee,J,W,oe)},Kt=(y,C,M,Q,K,z,ee,J,W)=>{let Z=0;const ge=C.length;let oe=y.length-1,de=ge-1;for(;Z<=oe&&Z<=de;){const pe=y[Z],ke=C[Z]=W?Ns(C[Z]):Gn(C[Z]);if(Pr(pe,ke))b(pe,ke,M,null,K,z,ee,J,W);else break;Z++}for(;Z<=oe&&Z<=de;){const pe=y[oe],ke=C[de]=W?Ns(C[de]):Gn(C[de]);if(Pr(pe,ke))b(pe,ke,M,null,K,z,ee,J,W);else break;oe--,de--}if(Z>oe){if(Z<=de){const pe=de+1,ke=pe<ge?C[pe].el:Q;for(;Z<=de;)b(null,C[Z]=W?Ns(C[Z]):Gn(C[Z]),M,ke,K,z,ee,J,W),Z++}}else if(Z>de)for(;Z<=oe;)rt(y[Z],K,z,!0),Z++;else{const pe=Z,ke=Z,Ge=new Map;for(Z=ke;Z<=de;Z++){const Fe=C[Z]=W?Ns(C[Z]):Gn(C[Z]);Fe.key!=null&&Ge.set(Fe.key,Z)}let Ne,$e=0;const He=de-ke+1;let qe=!1,Ye=0;const wt=new Array(He);for(Z=0;Z<He;Z++)wt[Z]=0;for(Z=pe;Z<=oe;Z++){const Fe=y[Z];if($e>=He){rt(Fe,K,z,!0);continue}let yt;if(Fe.key!=null)yt=Ge.get(Fe.key);else for(Ne=ke;Ne<=de;Ne++)if(wt[Ne-ke]===0&&Pr(Fe,C[Ne])){yt=Ne;break}yt===void 0?rt(Fe,K,z,!0):(wt[yt-ke]=Z+1,yt>=Ye?Ye=yt:qe=!0,b(Fe,C[yt],M,null,K,z,ee,J,W),$e++)}const Et=qe?n0(wt):$i;for(Ne=Et.length-1,Z=He-1;Z>=0;Z--){const Fe=ke+Z,yt=C[Fe],ei=C[Fe+1],G=Fe+1<ge?ei.el||ei.placeholder:Q;wt[Z]===0?b(null,yt,M,G,K,z,ee,J,W):qe&&(Ne<0||Z!==Et[Ne]?Lt(yt,M,G,2):Ne--)}}},Lt=(y,C,M,Q,K=null)=>{const{el:z,type:ee,transition:J,children:W,shapeFlag:Z}=y;if(Z&6){Lt(y.component.subTree,C,M,Q);return}if(Z&128){y.suspense.move(C,M,Q);return}if(Z&64){ee.move(y,C,M,ue);return}if(ee===Se){s(z,C,M);for(let oe=0;oe<W.length;oe++)Lt(W[oe],C,M,Q);s(y.anchor,C,M);return}if(ee===Jo){F(y,C,M);return}if(Q!==2&&Z&1&&J)if(Q===0)J.beforeEnter(z),s(z,C,M),In(()=>J.enter(z),K);else{const{leave:oe,delayLeave:de,afterLeave:pe}=J,ke=()=>{y.ctx.isUnmounted?i(z):s(z,C,M)},Ge=()=>{z._isLeaving&&z[EA](!0),oe(z,()=>{ke(),pe&&pe()})};de?de(z,ke,Ge):Ge()}else s(z,C,M)},rt=(y,C,M,Q=!1,K=!1)=>{const{type:z,props:ee,ref:J,children:W,dynamicChildren:Z,shapeFlag:ge,patchFlag:oe,dirs:de,cacheIndex:pe}=y;if(oe===-2&&(K=!1),J!=null&&(_s(),Ur(J,null,M,y,!0),vs()),pe!=null&&(C.renderCache[pe]=void 0),ge&256){C.ctx.deactivate(y);return}const ke=ge&1&&de,Ge=!$r(y);let Ne;if(Ge&&(Ne=ee&&ee.onVnodeBeforeUnmount)&&$n(Ne,C,y),ge&6)Yt(y.component,M,Q);else{if(ge&128){y.suspense.unmount(M,Q);return}ke&&oi(y,null,C,"beforeUnmount"),ge&64?y.type.remove(y,C,M,ue,Q):Z&&!Z.hasOnce&&(z!==Se||oe>0&&oe&64)?ot(Z,C,M,!1,!0):(z===Se&&oe&384||!K&&ge&16)&&ot(W,C,M),Q&&Cn(y)}(Ge&&(Ne=ee&&ee.onVnodeUnmounted)||ke)&&In(()=>{Ne&&$n(Ne,C,y),ke&&oi(y,null,C,"unmounted")},M)},Cn=y=>{const{type:C,el:M,anchor:Q,transition:K}=y;if(C===Se){gn(M,Q);return}if(C===Jo){j(y);return}const z=()=>{i(M),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(y.shapeFlag&1&&K&&!K.persisted){const{leave:ee,delayLeave:J}=K,W=()=>ee(M,z);J?J(y.el,z,W):W()}else z()},gn=(y,C)=>{let M;for(;y!==C;)M=m(y),i(y),y=M;i(C)},Yt=(y,C,M)=>{const{bum:Q,scope:K,job:z,subTree:ee,um:J,m:W,a:Z}=y;Dd(W),Dd(Z),Q&&Ko(Q),K.stop(),z&&(z.flags|=8,rt(ee,y,C,M)),J&&In(J,C),In(()=>{y.isUnmounted=!0},C)},ot=(y,C,M,Q=!1,K=!1,z=0)=>{for(let ee=z;ee<y.length;ee++)rt(y[ee],C,M,Q,K)},q=y=>{if(y.shapeFlag&6)return q(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const C=m(y.anchor||y.el),M=C&&C[IA];return M?m(M):C};let ae=!1;const te=(y,C,M)=>{y==null?C._vnode&&rt(C._vnode,null,null,!0):b(C._vnode||null,y,C,null,null,null,M),C._vnode=y,ae||(ae=!0,Ed(),wg(),ae=!1)},ue={p:b,um:rt,m:Lt,r:Cn,mt:st,mc:A,pc:be,pbc:P,n:q,o:t};return{render:te,hydrate:void 0,createApp:QA(te)}}function Bl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ai({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function t0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ug(t,e,n=!1){const s=t.children,i=e.children;if(_e(s)&&_e(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=Ns(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&Ug(o,l)),l.type===Xa&&l.patchFlag!==-1&&(l.el=o.el),l.type===qs&&!l.el&&(l.el=o.el)}}function n0(t){const e=t.slice(),n=[0];let s,i,r,o,l;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(i=n[n.length-1],t[i]<u){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<u?r=l+1:o=l;u<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function $g(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:$g(e)}function Dd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const s0=Symbol.for("v-scx"),i0=()=>zn(s0);function gs(t,e,n){return Hg(t,e,n)}function Hg(t,e,n=tt){const{immediate:s,deep:i,flush:r,once:o}=n,l=sn({},n),c=e&&s||!e&&r!=="post";let u;if(io){if(r==="sync"){const _=i0();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=Qn,_.resume=Qn,_.pause=Qn,_}}const d=tn;l.call=(_,I,b)=>ts(_,d,I,b);let p=!1;r==="post"?l.scheduler=_=>{In(_,d&&d.suspense)}:r!=="sync"&&(p=!0,l.scheduler=(_,I)=>{I?_():ru(_)}),l.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,d&&(_.id=d.uid,_.i=d))};const m=mA(t,e,l);return io&&(u?u.push(m):c&&m()),m}function r0(t,e,n){const s=this.proxy,i=St(t)?t.includes(".")?jg(s,t):()=>s[t]:t.bind(s,s);let r;Te(e)?r=e:(r=e.handler,n=e);const o=Ao(this),l=Hg(i,r.bind(s),n);return o(),l}function jg(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const o0=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${xn(e)}Modifiers`]||t[`${Ei(e)}Modifiers`];function a0(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||tt;let i=n;const r=e.startsWith("update:"),o=r&&o0(s,e.slice(7));o&&(o.trim&&(i=n.map(d=>St(d)?d.trim():d)),o.number&&(i=n.map(ua)));let l,c=s[l=xl(e)]||s[l=xl(xn(e))];!c&&r&&(c=s[l=xl(Ei(e))]),c&&ts(c,t,6,i);const u=s[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,ts(u,t,6,i)}}const l0=new WeakMap;function Gg(t,e,n=!1){const s=n?l0:e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!Te(t)){const c=u=>{const d=Gg(u,e,!0);d&&(l=!0,sn(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(nt(t)&&s.set(t,null),null):(_e(r)?r.forEach(c=>o[c]=null):sn(o,r),nt(t)&&s.set(t,o),o)}function Ja(t,e){return!t||!Ga(e)?!1:(e=e.slice(2).replace(/Once$/,""),We(t,e[0].toLowerCase()+e.slice(1))||We(t,Ei(e))||We(t,e))}function xd(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:c,render:u,renderCache:d,props:p,data:m,setupState:_,ctx:I,inheritAttrs:b}=t,w=pa(t);let x,U;try{if(n.shapeFlag&4){const j=i||s,se=j;x=Gn(u.call(se,j,d,p,_,m,I)),U=l}else{const j=e;x=Gn(j.length>1?j(p,{attrs:l,slots:o,emit:c}):j(p,null)),U=e.props?l:c0(l)}}catch(j){jr.length=0,Ka(j,t,1),x=we(qs)}let F=x;if(U&&b!==!1){const j=Object.keys(U),{shapeFlag:se}=F;j.length&&se&7&&(r&&j.some(zc)&&(U=u0(U,r)),F=Ji(F,U,!1,!0))}return n.dirs&&(F=Ji(F,null,!1,!0),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&ou(F,n.transition),x=F,pa(w),x}const c0=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ga(n))&&((e||(e={}))[n]=t[n]);return e},u0=(t,e)=>{const n={};for(const s in t)(!zc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function h0(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:c}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Nd(s,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(o[m]!==s[m]&&!Ja(u,m))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Nd(s,o,u):!0:!!o;return!1}function Nd(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Ja(n,r))return!0}return!1}function d0({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const qg=t=>t.__isSuspense;function f0(t,e){e&&e.pendingBranch?_e(t)?e.effects.push(...t):e.effects.push(t):yA(t)}const Se=Symbol.for("v-fgt"),Xa=Symbol.for("v-txt"),qs=Symbol.for("v-cmt"),Jo=Symbol.for("v-stc"),jr=[];let En=null;function O(t=!1){jr.push(En=t?null:[])}function p0(){jr.pop(),En=jr[jr.length-1]||null}let no=1;function _a(t,e=!1){no+=t,t<0&&En&&e&&(En.hasOnce=!0)}function Qg(t){return t.dynamicChildren=no>0?En||$i:null,p0(),no>0&&En&&En.push(t),t}function V(t,e,n,s,i,r){return Qg(h(t,e,n,s,i,r,!0))}function zg(t,e,n,s,i){return Qg(we(t,e,n,s,i,!0))}function va(t){return t?t.__v_isVNode===!0:!1}function Pr(t,e){return t.type===e.type&&t.key===e.key}const Wg=({key:t})=>t??null,Xo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?St(t)||nn(t)||Te(t)?{i:wn,r:t,k:e,f:!!n}:t:null);function h(t,e=null,n=null,s=0,i=null,r=t===Se?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Wg(e),ref:e&&Xo(e),scopeId:Tg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:wn};return l?(cu(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=St(n)?8:16),no>0&&!o&&En&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&En.push(c),c}const we=g0;function g0(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===LA)&&(t=qs),va(t)){const l=Ji(t,e,!0);return n&&cu(l,n),no>0&&!r&&En&&(l.shapeFlag&6?En[En.indexOf(t)]=l:En.push(l)),l.patchFlag=-2,l}if(R0(t)&&(t=t.__vccOpts),e){e=m0(e);let{class:l,style:c}=e;l&&!St(l)&&(e.class=Re(l)),nt(c)&&(su(c)&&!_e(c)&&(c=sn({},c)),e.style=Ct(c))}const o=St(t)?1:qg(t)?128:wA(t)?64:nt(t)?4:Te(t)?2:0;return h(t,e,n,s,i,o,r,!0)}function m0(t){return t?su(t)||Mg(t)?sn({},t):t:null}function Ji(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:c}=t,u=e?v0(i||{},e):i,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Wg(u),ref:e&&e.ref?n&&r?_e(r)?r.concat(Xo(e)):[r,Xo(e)]:Xo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Se?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ji(t.ssContent),ssFallback:t.ssFallback&&Ji(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&ou(d,c.clone(d)),d}function so(t=" ",e=0){return we(Xa,null,t,e)}function _0(t,e){const n=we(Jo,null,t);return n.staticCount=e,n}function he(t="",e=!1){return e?(O(),zg(qs,null,t)):we(qs,null,t)}function Gn(t){return t==null||typeof t=="boolean"?we(qs):_e(t)?we(Se,null,t.slice()):va(t)?Ns(t):we(Xa,null,String(t))}function Ns(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ji(t)}function cu(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(_e(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),cu(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Mg(e)?e._ctx=wn:i===3&&wn&&(wn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Te(e)?(e={default:e,_ctx:wn},n=32):(e=String(e),s&64?(n=16,e=[so(e)]):n=8);t.children=e,t.shapeFlag|=n}function v0(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Re([e.class,s.class]));else if(i==="style")e.style=Ct([e.style,s.style]);else if(Ga(i)){const r=e[i],o=s[i];o&&r!==o&&!(_e(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function $n(t,e,n,s=null){ts(t,e,7,[n,s])}const y0=Dg();let A0=0;function I0(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||y0,r={uid:A0++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new jy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vg(s,i),emitsOptions:Gg(s,i),emit:null,emitted:null,propsDefaults:tt,inheritAttrs:s.inheritAttrs,ctx:tt,data:tt,props:tt,attrs:tt,slots:tt,refs:tt,setupState:tt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=a0.bind(null,r),t.ce&&t.ce(r),r}let tn=null;const w0=()=>tn||wn;let ya,gc;{const t=za(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};ya=e("__VUE_INSTANCE_SETTERS__",n=>tn=n),gc=e("__VUE_SSR_SETTERS__",n=>io=n)}const Ao=t=>{const e=tn;return ya(t),t.scope.on(),()=>{t.scope.off(),ya(e)}},Md=()=>{tn&&tn.scope.off(),ya(null)};function Kg(t){return t.vnode.shapeFlag&4}let io=!1;function E0(t,e=!1,n=!1){e&&gc(e);const{props:s,children:i}=t.vnode,r=Kg(t);zA(t,s,r,e),JA(t,i,n||e);const o=r?T0(t,e):void 0;return e&&gc(!1),o}function T0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,FA);const{setup:s}=n;if(s){_s();const i=t.setupContext=s.length>1?b0(t):null,r=Ao(t),o=yo(s,t,0,[t.props,i]),l=Yp(o);if(vs(),r(),(l||t.sp)&&!$r(t)&&bg(t),l){if(o.then(Md,Md),e)return o.then(c=>{Od(t,c)}).catch(c=>{Ka(c,t,0)});t.asyncDep=o}else Od(t,o)}else Yg(t)}function Od(t,e,n){Te(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:nt(e)&&(t.setupState=yg(e)),Yg(t)}function Yg(t,e,n){const s=t.type;t.render||(t.render=s.render||Qn);{const i=Ao(t);_s();try{UA(t)}finally{vs(),i()}}}const C0={get(t,e){return Zt(t,"get",""),t[e]}};function b0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,C0),slots:t.slots,emit:t.emit,expose:e}}function Za(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(yg(cA(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Hr)return Hr[n](t)},has(e,n){return n in e||n in Hr}})):t.proxy}function S0(t,e=!0){return Te(t)?t.displayName||t.name:t.name||e&&t.__name}function R0(t){return Te(t)&&"__vccOpts"in t}const Xe=(t,e)=>pA(t,e,io);function Jg(t,e,n){try{_a(-1);const s=arguments.length;return s===2?nt(e)&&!_e(e)?va(e)?we(t,null,[e]):we(t,e):we(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&va(n)&&(n=[n]),we(t,e,n))}finally{_a(1)}}const P0="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let mc;const Vd=typeof window<"u"&&window.trustedTypes;if(Vd)try{mc=Vd.createPolicy("vue",{createHTML:t=>t})}catch{}const Xg=mc?t=>mc.createHTML(t):t=>t,k0="http://www.w3.org/2000/svg",D0="http://www.w3.org/1998/Math/MathML",as=typeof document<"u"?document:null,Ld=as&&as.createElement("template"),x0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?as.createElementNS(k0,t):e==="mathml"?as.createElementNS(D0,t):n?as.createElement(t,{is:n}):as.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>as.createTextNode(t),createComment:t=>as.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>as.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Ld.innerHTML=Xg(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=Ld.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},N0=Symbol("_vtc");function M0(t,e,n){const s=t[N0];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Aa=Symbol("_vod"),Zg=Symbol("_vsh"),em={name:"show",beforeMount(t,{value:e},{transition:n}){t[Aa]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):kr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),kr(t,!0),s.enter(t)):s.leave(t,()=>{kr(t,!1)}):kr(t,e))},beforeUnmount(t,{value:e}){kr(t,e)}};function kr(t,e){t.style.display=e?t[Aa]:"none",t[Zg]=!e}const O0=Symbol(""),V0=/(?:^|;)\s*display\s*:/;function L0(t,e,n){const s=t.style,i=St(n);let r=!1;if(n&&!i){if(e)if(St(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Zo(s,l,"")}else for(const o in e)n[o]==null&&Zo(s,o,"");for(const o in n)o==="display"&&(r=!0),Zo(s,o,n[o])}else if(i){if(e!==n){const o=s[O0];o&&(n+=";"+o),s.cssText=n,r=V0.test(n)}}else e&&t.removeAttribute("style");Aa in t&&(t[Aa]=r?s.display:"",t[Zg]&&(s.display="none"))}const Bd=/\s*!important$/;function Zo(t,e,n){if(_e(n))n.forEach(s=>Zo(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=B0(t,e);Bd.test(n)?t.setProperty(Ei(s),n.replace(Bd,""),"important"):t[s]=n}}const Fd=["Webkit","Moz","ms"],Fl={};function B0(t,e){const n=Fl[e];if(n)return n;let s=xn(e);if(s!=="filter"&&s in t)return Fl[e]=s;s=Qa(s);for(let i=0;i<Fd.length;i++){const r=Fd[i]+s;if(r in t)return Fl[e]=r}return e}const Ud="http://www.w3.org/1999/xlink";function $d(t,e,n,s,i,r=$y(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ud,e.slice(6,e.length)):t.setAttributeNS(Ud,e,n):n==null||r&&!eg(n)?t.removeAttribute(e):t.setAttribute(e,r?"":es(n)?String(n):n)}function Hd(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Xg(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=eg(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function us(t,e,n,s){t.addEventListener(e,n,s)}function F0(t,e,n,s){t.removeEventListener(e,n,s)}const jd=Symbol("_vei");function U0(t,e,n,s,i=null){const r=t[jd]||(t[jd]={}),o=r[e];if(s&&o)o.value=s;else{const[l,c]=$0(e);if(s){const u=r[e]=G0(s,i);us(t,l,u,c)}else o&&(F0(t,l,o,c),r[e]=void 0)}}const Gd=/(?:Once|Passive|Capture)$/;function $0(t){let e;if(Gd.test(t)){e={};let s;for(;s=t.match(Gd);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ei(t.slice(2)),e]}let Ul=0;const H0=Promise.resolve(),j0=()=>Ul||(H0.then(()=>Ul=0),Ul=Date.now());function G0(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ts(q0(s,n.value),e,5,[s])};return n.value=t,n.attached=j0(),n}function q0(t,e){if(_e(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const qd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Q0=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?M0(t,s,o):e==="style"?L0(t,n,s):Ga(e)?zc(e)||U0(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):z0(t,e,s,o))?(Hd(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&$d(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!St(s))?Hd(t,xn(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),$d(t,e,s,o))};function z0(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&qd(e)&&Te(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return qd(e)&&St(n)?!1:e in t}const Qs=t=>{const e=t.props["onUpdate:modelValue"]||!1;return _e(e)?n=>Ko(e,n):e};function W0(t){t.target.composing=!0}function Qd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const kn=Symbol("_assign"),pi={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[kn]=Qs(i);const r=s||i.props&&i.props.type==="number";us(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=ua(l)),t[kn](l)}),n&&us(t,"change",()=>{t.value=t.value.trim()}),e||(us(t,"compositionstart",W0),us(t,"compositionend",Qd),us(t,"change",Qd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[kn]=Qs(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?ua(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===c)||(t.value=c))}},K0={deep:!0,created(t,e,n){t[kn]=Qs(n),us(t,"change",()=>{const s=t._modelValue,i=Xi(t),r=t.checked,o=t[kn];if(_e(s)){const l=Yc(s,i),c=l!==-1;if(r&&!c)o(s.concat(i));else if(!r&&c){const u=[...s];u.splice(l,1),o(u)}}else if(lr(s)){const l=new Set(s);r?l.add(i):l.delete(i),o(l)}else o(tm(t,r))})},mounted:zd,beforeUpdate(t,e,n){t[kn]=Qs(n),zd(t,e,n)}};function zd(t,{value:e,oldValue:n},s){t._modelValue=e;let i;if(_e(e))i=Yc(e,s.props.value)>-1;else if(lr(e))i=e.has(s.props.value);else{if(e===n)return;i=_i(e,tm(t,!0))}t.checked!==i&&(t.checked=i)}const Y0={created(t,{value:e},n){t.checked=_i(e,n.props.value),t[kn]=Qs(n),us(t,"change",()=>{t[kn](Xi(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t[kn]=Qs(s),e!==n&&(t.checked=_i(e,s.props.value))}},J0={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=lr(e);us(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ua(Xi(o)):Xi(o));t[kn](t.multiple?i?new Set(r):r:r[0]),t._assigning=!0,iu(()=>{t._assigning=!1})}),t[kn]=Qs(s)},mounted(t,{value:e}){Wd(t,e)},beforeUpdate(t,e,n){t[kn]=Qs(n)},updated(t,{value:e}){t._assigning||Wd(t,e)}};function Wd(t,e){const n=t.multiple,s=_e(e);if(!(n&&!s&&!lr(e))){for(let i=0,r=t.options.length;i<r;i++){const o=t.options[i],l=Xi(o);if(n)if(s){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=Yc(e,l)>-1}else o.selected=e.has(l);else if(_i(Xi(o),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Xi(t){return"_value"in t?t._value:t.value}function tm(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const nm={created(t,e,n){Ho(t,e,n,null,"created")},mounted(t,e,n){Ho(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){Ho(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){Ho(t,e,n,s,"updated")}};function X0(t,e){switch(t){case"SELECT":return J0;case"TEXTAREA":return pi;default:switch(e){case"checkbox":return K0;case"radio":return Y0;default:return pi}}}function Ho(t,e,n,s,i){const o=X0(t.tagName,n.props&&n.props.type)[i];o&&o(t,e,n,s)}const Z0=["ctrl","shift","alt","meta"],eI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Z0.some(n=>t[`${n}Key`]&&!e.includes(n))},Gr=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=((i,...r)=>{for(let o=0;o<e.length;o++){const l=eI[e[o]];if(l&&l(i,e))return}return t(i,...r)}))},tI=sn({patchProp:Q0},x0);let Kd;function nI(){return Kd||(Kd=ZA(tI))}const sI=((...t)=>{const e=nI().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=rI(s);if(!i)return;const r=e._component;!Te(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,iI(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e});function iI(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function rI(t){return St(t)?document.querySelector(t):t}/*!
 * vue-router v4.6.0
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Oi=typeof document<"u";function sm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function oI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&sm(t.default)}const Qe=Object.assign;function $l(t,e){const n={};for(const s in e){const i=e[s];n[s]=Vn(i)?i.map(t):t(i)}return n}const qr=()=>{},Vn=Array.isArray;function Yd(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}const im=/#/g,aI=/&/g,lI=/\//g,cI=/=/g,uI=/\?/g,rm=/\+/g,hI=/%5B/g,dI=/%5D/g,om=/%5E/g,fI=/%60/g,am=/%7B/g,pI=/%7C/g,lm=/%7D/g,gI=/%20/g;function uu(t){return t==null?"":encodeURI(""+t).replace(pI,"|").replace(hI,"[").replace(dI,"]")}function mI(t){return uu(t).replace(am,"{").replace(lm,"}").replace(om,"^")}function _c(t){return uu(t).replace(rm,"%2B").replace(gI,"+").replace(im,"%23").replace(aI,"%26").replace(fI,"`").replace(am,"{").replace(lm,"}").replace(om,"^")}function _I(t){return _c(t).replace(cI,"%3D")}function vI(t){return uu(t).replace(im,"%23").replace(uI,"%3F")}function yI(t){return vI(t).replace(lI,"%2F")}function ro(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const AI=/\/$/,II=t=>t.replace(AI,"");function Hl(t,e,n="/"){let s,i={},r="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return c=l>=0&&c>l?-1:c,c>=0&&(s=e.slice(0,c),r=e.slice(c,l>0?l:e.length),i=t(r)),l>=0&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=CI(s??e,n),{fullPath:s+r+o,path:s,query:i,hash:ro(o)}}function wI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Jd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function EI(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Zi(e.matched[s],n.matched[i])&&cm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Zi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function cm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!TI(t[n],e[n]))return!1;return!0}function TI(t,e){return Vn(t)?Xd(t,e):Vn(e)?Xd(e,t):t===e}function Xd(t,e){return Vn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function CI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const ks={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let vc=(function(t){return t.pop="pop",t.push="push",t})({}),jl=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function bI(t){if(!t)if(Oi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),II(t)}const SI=/^[^#]+#/;function RI(t,e){return t.replace(SI,"#")+e}function PI(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const el=()=>({left:window.scrollX,top:window.scrollY});function kI(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=PI(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Zd(t,e){return(history.state?history.state.position-e:-1)+t}const yc=new Map;function DI(t,e){yc.set(t,e)}function xI(t){const e=yc.get(t);return yc.delete(t),e}function NI(t){return typeof t=="string"||t&&typeof t=="object"}function um(t){return typeof t=="string"||typeof t=="symbol"}let _t=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const hm=Symbol("");_t.MATCHER_NOT_FOUND+"",_t.NAVIGATION_GUARD_REDIRECT+"",_t.NAVIGATION_ABORTED+"",_t.NAVIGATION_CANCELLED+"",_t.NAVIGATION_DUPLICATED+"";function er(t,e){return Qe(new Error,{type:t,[hm]:!0},e)}function os(t,e){return t instanceof Error&&hm in t&&(e==null||!!(t.type&e))}const MI=["params","query","hash"];function OI(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of MI)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function VI(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<n.length;++s){const i=n[s].replace(rm," "),r=i.indexOf("="),o=ro(r<0?i:i.slice(0,r)),l=r<0?null:ro(i.slice(r+1));if(o in e){let c=e[o];Vn(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function ef(t){let e="";for(let n in t){const s=t[n];if(n=_I(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Vn(s)?s.map(i=>i&&_c(i)):[s&&_c(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function LI(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Vn(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const BI=Symbol(""),tf=Symbol(""),tl=Symbol(""),dm=Symbol(""),Ac=Symbol("");function Dr(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ms(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(er(_t.NAVIGATION_ABORTED,{from:n,to:e})):m instanceof Error?c(m):NI(m)?c(er(_t.NAVIGATION_GUARD_REDIRECT,{from:e,to:m})):(o&&s.enterCallbacks[i]===o&&typeof m=="function"&&o.push(m),l())},d=r(()=>t.call(s&&s.instances[i],e,n,u));let p=Promise.resolve(d);t.length<3&&(p=p.then(u)),p.catch(m=>c(m))})}function Gl(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(sm(c)){const u=(c.__vccOpts||c)[e];u&&r.push(Ms(u,n,s,o,l,i))}else{let u=c();r.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=oI(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const m=(p.__vccOpts||p)[e];return m&&Ms(m,n,s,o,l,i)()}))}}return r}function FI(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(u=>Zi(u,l))?s.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>Zi(u,c))||i.push(c))}return[n,s,i]}/*!
 * vue-router v4.6.0
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let UI=()=>location.protocol+"//"+location.host;function fm(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let o=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(o);return l[0]!=="/"&&(l="/"+l),Jd(l,"")}return Jd(n,t)+s+i}function $I(t,e,n,s){let i=[],r=[],o=null;const l=({state:m})=>{const _=fm(t,location),I=n.value,b=e.value;let w=0;if(m){if(n.value=_,e.value=m,o&&o===I){o=null;return}w=b?m.position-b.position:0}else s(_);i.forEach(x=>{x(n.value,I,{delta:w,type:vc.pop,direction:w?w>0?jl.forward:jl.back:jl.unknown})})};function c(){o=n.value}function u(m){i.push(m);const _=()=>{const I=i.indexOf(m);I>-1&&i.splice(I,1)};return r.push(_),_}function d(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(Qe({},m.state,{scroll:el()}),"")}}function p(){for(const m of r)m();r=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",d),document.removeEventListener("visibilitychange",d)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",d),document.addEventListener("visibilitychange",d),{pauseListeners:c,listen:u,destroy:p}}function nf(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?el():null}}function HI(t){const{history:e,location:n}=window,s={value:fm(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,u,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:UI()+t+c;try{e[d?"replaceState":"pushState"](u,"",m),i.value=u}catch(_){console.error(_),n[d?"replace":"assign"](m)}}function o(c,u){r(c,Qe({},e.state,nf(i.value.back,c,i.value.forward,!0),u,{position:i.value.position}),!0),s.value=c}function l(c,u){const d=Qe({},i.value,e.state,{forward:c,scroll:el()});r(d.current,d,!0),r(c,Qe({},nf(s.value,c,null),{position:d.position+1},u),!1),s.value=c}return{location:s,state:i,push:l,replace:o}}function jI(t){t=bI(t);const e=HI(t),n=$I(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=Qe({location:"",base:t,go:s,createHref:RI.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function GI(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),jI(t)}let ui=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var Nt=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(Nt||{});const qI={type:ui.Static,value:""},QI=/[a-zA-Z0-9_]/;function zI(t){if(!t)return[[]];if(t==="/")return[[qI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=Nt.Static,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,c,u="",d="";function p(){u&&(n===Nt.Static?r.push({type:ui.Static,value:u}):n===Nt.Param||n===Nt.ParamRegExp||n===Nt.ParamRegExpEnd?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:ui.Param,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==Nt.ParamRegExp){s=n,n=Nt.EscapeNext;continue}switch(n){case Nt.Static:c==="/"?(u&&p(),o()):c===":"?(p(),n=Nt.Param):m();break;case Nt.EscapeNext:m(),n=s;break;case Nt.Param:c==="("?n=Nt.ParamRegExp:QI.test(c)?m():(p(),n=Nt.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case Nt.ParamRegExp:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=Nt.ParamRegExpEnd:d+=c;break;case Nt.ParamRegExpEnd:p(),n=Nt.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===Nt.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),i}const sf="[^/]+?",WI={sensitive:!1,strict:!1,start:!0,end:!0};var cn=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(cn||{});const KI=/[.+*?^${}()[\]/\\]/g;function YI(t,e){const n=Qe({},WI,e),s=[];let i=n.start?"^":"";const r=[];for(const u of t){const d=u.length?[]:[cn.Root];n.strict&&!u.length&&(i+="/");for(let p=0;p<u.length;p++){const m=u[p];let _=cn.Segment+(n.sensitive?cn.BonusCaseSensitive:0);if(m.type===ui.Static)p||(i+="/"),i+=m.value.replace(KI,"\\$&"),_+=cn.Static;else if(m.type===ui.Param){const{value:I,repeatable:b,optional:w,regexp:x}=m;r.push({name:I,repeatable:b,optional:w});const U=x||sf;if(U!==sf){_+=cn.BonusCustomRegExp;try{`${U}`}catch(j){throw new Error(`Invalid custom RegExp for param "${I}" (${U}): `+j.message)}}let F=b?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;p||(F=w&&u.length<2?`(?:/${F})`:"/"+F),w&&(F+="?"),i+=F,_+=cn.Dynamic,w&&(_+=cn.BonusOptional),b&&(_+=cn.BonusRepeatable),U===".*"&&(_+=cn.BonusWildcard)}d.push(_)}s.push(d)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=cn.BonusStrict}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(u){const d=u.match(o),p={};if(!d)return null;for(let m=1;m<d.length;m++){const _=d[m]||"",I=r[m-1];p[I.name]=_&&I.repeatable?_.split("/"):_}return p}function c(u){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const _ of m)if(_.type===ui.Static)d+=_.value;else if(_.type===ui.Param){const{value:I,repeatable:b,optional:w}=_,x=I in u?u[I]:"";if(Vn(x)&&!b)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const U=Vn(x)?x.join("/"):x;if(!U)if(w)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${I}"`);d+=U}}return d||"/"}return{re:o,score:s,keys:r,parse:l,stringify:c}}function JI(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===cn.Static+cn.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===cn.Static+cn.Segment?1:-1:0}function pm(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=JI(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(rf(s))return 1;if(rf(i))return-1}return i.length-s.length}function rf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const XI={strict:!1,end:!0,sensitive:!1};function ZI(t,e,n){const s=YI(zI(t.path),n),i=Qe(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function ew(t,e){const n=[],s=new Map;e=Yd(XI,e);function i(p){return s.get(p)}function r(p,m,_){const I=!_,b=af(p);b.aliasOf=_&&_.record;const w=Yd(e,p),x=[b];if("alias"in p){const j=typeof p.alias=="string"?[p.alias]:p.alias;for(const se of j)x.push(af(Qe({},b,{components:_?_.record.components:b.components,path:se,aliasOf:_?_.record:b})))}let U,F;for(const j of x){const{path:se}=j;if(m&&se[0]!=="/"){const Ie=m.record.path,S=Ie[Ie.length-1]==="/"?"":"/";j.path=m.record.path+(se&&S+se)}if(U=ZI(j,m,w),_?_.alias.push(U):(F=F||U,F!==U&&F.alias.push(U),I&&p.name&&!lf(U)&&o(p.name)),gm(U)&&c(U),b.children){const Ie=b.children;for(let S=0;S<Ie.length;S++)r(Ie[S],U,_&&_.children[S])}_=_||U}return F?()=>{o(F)}:qr}function o(p){if(um(p)){const m=s.get(p);m&&(s.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&s.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const m=sw(p,n);n.splice(m,0,p),p.record.name&&!lf(p)&&s.set(p.record.name,p)}function u(p,m){let _,I={},b,w;if("name"in p&&p.name){if(_=s.get(p.name),!_)throw er(_t.MATCHER_NOT_FOUND,{location:p});w=_.record.name,I=Qe(of(m.params,_.keys.filter(F=>!F.optional).concat(_.parent?_.parent.keys.filter(F=>F.optional):[]).map(F=>F.name)),p.params&&of(p.params,_.keys.map(F=>F.name))),b=_.stringify(I)}else if(p.path!=null)b=p.path,_=n.find(F=>F.re.test(b)),_&&(I=_.parse(b),w=_.record.name);else{if(_=m.name?s.get(m.name):n.find(F=>F.re.test(m.path)),!_)throw er(_t.MATCHER_NOT_FOUND,{location:p,currentLocation:m});w=_.record.name,I=Qe({},m.params,p.params),b=_.stringify(I)}const x=[];let U=_;for(;U;)x.unshift(U.record),U=U.parent;return{name:w,path:b,params:I,matched:x,meta:nw(x)}}t.forEach(p=>r(p));function d(){n.length=0,s.clear()}return{addRoute:r,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:i}}function of(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function af(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:tw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function tw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function lf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function nw(t){return t.reduce((e,n)=>Qe(e,n.meta),{})}function sw(t,e){let n=0,s=e.length;for(;n!==s;){const r=n+s>>1;pm(t,e[r])<0?s=r:n=r+1}const i=iw(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function iw(t){let e=t;for(;e=e.parent;)if(gm(e)&&pm(t,e)===0)return e}function gm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function cf(t){const e=zn(tl),n=zn(dm),s=Xe(()=>{const c=zt(t.to);return e.resolve(c)}),i=Xe(()=>{const{matched:c}=s.value,{length:u}=c,d=c[u-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(Zi.bind(null,d));if(m>-1)return m;const _=uf(c[u-2]);return u>1&&uf(d)===_&&p[p.length-1].path!==_?p.findIndex(Zi.bind(null,c[u-2])):m}),r=Xe(()=>i.value>-1&&cw(n.params,s.value.params)),o=Xe(()=>i.value>-1&&i.value===n.matched.length-1&&cm(n.params,s.value.params));function l(c={}){if(lw(c)){const u=e[zt(t.replace)?"replace":"push"](zt(t.to)).catch(qr);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:Xe(()=>s.value.href),isActive:r,isExactActive:o,navigate:l}}function rw(t){return t.length===1?t[0]:t}const ow=Cg({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:cf,setup(t,{slots:e}){const n=vo(cf(t)),{options:s}=zn(tl),i=Xe(()=>({[hf(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[hf(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&rw(e.default(n));return t.custom?r:Jg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),aw=ow;function lw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function cw(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Vn(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function uf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const hf=(t,e,n)=>t??e??n,uw=Cg({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=zn(Ac),i=Xe(()=>t.route||s.value),r=zn(tf,0),o=Xe(()=>{let u=zt(r);const{matched:d}=i.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),l=Xe(()=>i.value.matched[o.value]);Yo(tf,Xe(()=>o.value+1)),Yo(BI,l),Yo(Ac,i);const c=D();return gs(()=>[c.value,l.value,t.name],([u,d,p],[m,_,I])=>{d&&(d.instances[p]=u,_&&_!==d&&u&&u===m&&(d.leaveGuards.size||(d.leaveGuards=_.leaveGuards),d.updateGuards.size||(d.updateGuards=_.updateGuards))),u&&d&&(!_||!Zi(d,_)||!m)&&(d.enterCallbacks[p]||[]).forEach(b=>b(u))},{flush:"post"}),()=>{const u=i.value,d=t.name,p=l.value,m=p&&p.components[d];if(!m)return df(n.default,{Component:m,route:u});const _=p.props[d],I=_?_===!0?u.params:typeof _=="function"?_(u):_:null,w=Jg(m,Qe({},I,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return df(n.default,{Component:w,route:u})||w}}});function df(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const hw=uw;function dw(t){const e=ew(t.routes,t),n=t.parseQuery||VI,s=t.stringifyQuery||ef,i=t.history,r=Dr(),o=Dr(),l=Dr(),c=uA(ks);let u=ks;Oi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=$l.bind(null,q=>""+q),p=$l.bind(null,yI),m=$l.bind(null,ro);function _(q,ae){let te,ue;return um(q)?(te=e.getRecordMatcher(q),ue=ae):ue=q,e.addRoute(ue,te)}function I(q){const ae=e.getRecordMatcher(q);ae&&e.removeRoute(ae)}function b(){return e.getRoutes().map(q=>q.record)}function w(q){return!!e.getRecordMatcher(q)}function x(q,ae){if(ae=Qe({},ae||c.value),typeof q=="string"){const M=Hl(n,q,ae.path),Q=e.resolve({path:M.path},ae),K=i.createHref(M.fullPath);return Qe(M,Q,{params:m(Q.params),hash:ro(M.hash),redirectedFrom:void 0,href:K})}let te;if(q.path!=null)te=Qe({},q,{path:Hl(n,q.path,ae.path).path});else{const M=Qe({},q.params);for(const Q in M)M[Q]==null&&delete M[Q];te=Qe({},q,{params:p(M)}),ae.params=p(ae.params)}const ue=e.resolve(te,ae),xe=q.hash||"";ue.params=d(m(ue.params));const y=wI(s,Qe({},q,{hash:mI(xe),path:ue.path})),C=i.createHref(y);return Qe({fullPath:y,hash:xe,query:s===ef?LI(q.query):q.query||{}},ue,{redirectedFrom:void 0,href:C})}function U(q){return typeof q=="string"?Hl(n,q,c.value.path):Qe({},q)}function F(q,ae){if(u!==q)return er(_t.NAVIGATION_CANCELLED,{from:ae,to:q})}function j(q){return S(q)}function se(q){return j(Qe(U(q),{replace:!0}))}function Ie(q,ae){const te=q.matched[q.matched.length-1];if(te&&te.redirect){const{redirect:ue}=te;let xe=typeof ue=="function"?ue(q,ae):ue;return typeof xe=="string"&&(xe=xe.includes("?")||xe.includes("#")?xe=U(xe):{path:xe},xe.params={}),Qe({query:q.query,hash:q.hash,params:xe.path!=null?{}:q.params},xe)}}function S(q,ae){const te=u=x(q),ue=c.value,xe=q.state,y=q.force,C=q.replace===!0,M=Ie(te,ue);if(M)return S(Qe(U(M),{state:typeof M=="object"?Qe({},xe,M.state):xe,force:y,replace:C}),ae||te);const Q=te;Q.redirectedFrom=ae;let K;return!y&&EI(s,ue,te)&&(K=er(_t.NAVIGATION_DUPLICATED,{to:Q,from:ue}),Lt(ue,ue,!0,!1)),(K?Promise.resolve(K):P(Q,ue)).catch(z=>os(z)?os(z,_t.NAVIGATION_GUARD_REDIRECT)?z:Kt(z):be(z,Q,ue)).then(z=>{if(z){if(os(z,_t.NAVIGATION_GUARD_REDIRECT))return S(Qe({replace:C},U(z.to),{state:typeof z.to=="object"?Qe({},xe,z.to.state):xe,force:y}),ae||Q)}else z=N(Q,ue,!0,C,xe);return R(Q,ue,z),z})}function A(q,ae){const te=F(q,ae);return te?Promise.reject(te):Promise.resolve()}function T(q){const ae=gn.values().next().value;return ae&&typeof ae.runWithContext=="function"?ae.runWithContext(q):q()}function P(q,ae){let te;const[ue,xe,y]=FI(q,ae);te=Gl(ue.reverse(),"beforeRouteLeave",q,ae);for(const M of ue)M.leaveGuards.forEach(Q=>{te.push(Ms(Q,q,ae))});const C=A.bind(null,q,ae);return te.push(C),ot(te).then(()=>{te=[];for(const M of r.list())te.push(Ms(M,q,ae));return te.push(C),ot(te)}).then(()=>{te=Gl(xe,"beforeRouteUpdate",q,ae);for(const M of xe)M.updateGuards.forEach(Q=>{te.push(Ms(Q,q,ae))});return te.push(C),ot(te)}).then(()=>{te=[];for(const M of y)if(M.beforeEnter)if(Vn(M.beforeEnter))for(const Q of M.beforeEnter)te.push(Ms(Q,q,ae));else te.push(Ms(M.beforeEnter,q,ae));return te.push(C),ot(te)}).then(()=>(q.matched.forEach(M=>M.enterCallbacks={}),te=Gl(y,"beforeRouteEnter",q,ae,T),te.push(C),ot(te))).then(()=>{te=[];for(const M of o.list())te.push(Ms(M,q,ae));return te.push(C),ot(te)}).catch(M=>os(M,_t.NAVIGATION_CANCELLED)?M:Promise.reject(M))}function R(q,ae,te){l.list().forEach(ue=>T(()=>ue(q,ae,te)))}function N(q,ae,te,ue,xe){const y=F(q,ae);if(y)return y;const C=ae===ks,M=Oi?history.state:{};te&&(ue||C?i.replace(q.fullPath,Qe({scroll:C&&M&&M.scroll},xe)):i.push(q.fullPath,xe)),c.value=q,Lt(q,ae,te,C),Kt()}let E;function st(){E||(E=i.listen((q,ae,te)=>{if(!Yt.listening)return;const ue=x(q),xe=Ie(ue,Yt.currentRoute.value);if(xe){S(Qe(xe,{replace:!0,force:!0}),ue).catch(qr);return}u=ue;const y=c.value;Oi&&DI(Zd(y.fullPath,te.delta),el()),P(ue,y).catch(C=>os(C,_t.NAVIGATION_ABORTED|_t.NAVIGATION_CANCELLED)?C:os(C,_t.NAVIGATION_GUARD_REDIRECT)?(S(Qe(U(C.to),{force:!0}),ue).then(M=>{os(M,_t.NAVIGATION_ABORTED|_t.NAVIGATION_DUPLICATED)&&!te.delta&&te.type===vc.pop&&i.go(-1,!1)}).catch(qr),Promise.reject()):(te.delta&&i.go(-te.delta,!1),be(C,ue,y))).then(C=>{C=C||N(ue,y,!1),C&&(te.delta&&!os(C,_t.NAVIGATION_CANCELLED)?i.go(-te.delta,!1):te.type===vc.pop&&os(C,_t.NAVIGATION_ABORTED|_t.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),R(ue,y,C)}).catch(qr)}))}let vt=Dr(),it=Dr(),Ce;function be(q,ae,te){Kt(q);const ue=it.list();return ue.length?ue.forEach(xe=>xe(q,ae,te)):console.error(q),Promise.reject(q)}function kt(){return Ce&&c.value!==ks?Promise.resolve():new Promise((q,ae)=>{vt.add([q,ae])})}function Kt(q){return Ce||(Ce=!q,st(),vt.list().forEach(([ae,te])=>q?te(q):ae()),vt.reset()),q}function Lt(q,ae,te,ue){const{scrollBehavior:xe}=t;if(!Oi||!xe)return Promise.resolve();const y=!te&&xI(Zd(q.fullPath,0))||(ue||!te)&&history.state&&history.state.scroll||null;return iu().then(()=>xe(q,ae,y)).then(C=>C&&kI(C)).catch(C=>be(C,q,ae))}const rt=q=>i.go(q);let Cn;const gn=new Set,Yt={currentRoute:c,listening:!0,addRoute:_,removeRoute:I,clearRoutes:e.clearRoutes,hasRoute:w,getRoutes:b,resolve:x,options:t,push:j,replace:se,go:rt,back:()=>rt(-1),forward:()=>rt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:it.add,isReady:kt,install(q){q.component("RouterLink",aw),q.component("RouterView",hw),q.config.globalProperties.$router=Yt,Object.defineProperty(q.config.globalProperties,"$route",{enumerable:!0,get:()=>zt(c)}),Oi&&!Cn&&c.value===ks&&(Cn=!0,j(i.location).catch(ue=>{}));const ae={};for(const ue in ks)Object.defineProperty(ae,ue,{get:()=>c.value[ue],enumerable:!0});q.provide(tl,Yt),q.provide(dm,_g(ae)),q.provide(Ac,c);const te=q.unmount;gn.add(q),q.unmount=function(){gn.delete(q),gn.size<1&&(u=ks,E&&E(),E=null,c.value=ks,Cn=!1,Ce=!1),te()}}};function ot(q){return q.reduce((ae,te)=>ae.then(()=>T(te)),Promise.resolve())}return Yt}function dn(){return zn(tl)}const fw={__name:"App",setup(t){dn();const e=D(null),n=D(!1),s=()=>{const r=localStorage.getItem("soundEnabled");return r!==null?r==="true":!0},i=()=>{e.value&&(s()?n.value||e.value.play().then(()=>{n.value=!0}).catch(()=>{}):(e.value.pause(),n.value=!1))};return Rt(()=>{try{e.value=new Audio,e.value.src=new URL("@/assets/audio/bgm.mp3",import.meta.url).href,e.value.loop=!0,e.value.volume=.5,i();const r=()=>{e.value&&s()&&!n.value&&e.value.play().then(()=>{n.value=!0}).catch(()=>{})};document.addEventListener("click",r,{once:!0}),document.addEventListener("touchstart",r,{once:!0}),window.addEventListener("soundSettingChanged",i)}catch{console.log("BGM 파일을 찾을 수 없습니다.")}}),cr(()=>{e.value&&(e.value.pause(),e.value=null),window.removeEventListener("soundSettingChanged",i)}),(r,o)=>{const l=VA("router-view");return O(),zg(l)}}},pw="modulepreload",gw=function(t){return"/tdl/"+t},ff={},mw=function(e,n,s){let i=Promise.resolve();if(n&&n.length>0){let c=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");i=c(n.map(u=>{if(u=gw(u),u in ff)return;ff[u]=!0;const d=u.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":pw,d||(m.as="script"),m.crossOrigin="",m.href=u,l&&m.setAttribute("nonce",l),document.head.appendChild(m),d)return new Promise((_,I)=>{m.addEventListener("load",_),m.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${u}`)))})}))}function r(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&r(l.reason);return e().catch(r)})},_w=()=>JSON.parse(localStorage.getItem("users")||"[]"),ht=()=>{const t=sessionStorage.getItem("currentUser");return t?JSON.parse(t):null},Mt=async(t,e)=>{const n=ht();if(n&&(n.id?.length>20||n.uid))try{const{updateGameData:r}=await mw(async()=>{const{updateGameData:l}=await Promise.resolve().then(()=>uV);return{updateGameData:l}},void 0);return(await r(t,e)).success}catch(r){console.error("Firebase 업데이트 실패, localStorage로 폴백:",r)}const s=_w(),i=s.findIndex(r=>r.id===t);return i!==-1?(s[i].gameData={...s[i].gameData,...e},localStorage.setItem("users",JSON.stringify(s)),n&&n.id===t&&(n.gameData={...n.gameData,...e},sessionStorage.setItem("currentUser",JSON.stringify(n))),!0):!1},vw=(t,e)=>Mt(t,{coins:e}),Ia=(t,e,n)=>Mt(t,{coins:e,totalCoin:n}),pf=()=>{sessionStorage.removeItem("currentUser")},yw=()=>localStorage.getItem("appLanguage")||"한국어",mm=()=>{const t=yw();return{ko:{home:"홈",exchange:"교환소",quest:"퀘스트",inventory:"인벤토리",factory:"제작소",mining:"채굴",hunting:"사냥",exploration:"탐험",production:"생산",back:"← 뒤로",settings:"설정",notification:"알림"},en:{home:"Home",exchange:"Exchange",quest:"Quest",inventory:"Inventory",factory:"Factory",mining:"Mining",hunting:"Hunting",exploration:"Exploration",production:"Production",back:"← Back",settings:"Settings",notification:"Notification"}}[t==="한국어"?"ko":"en"]},Aw="/tdl/assets/tdl_splashLogo-b8p6ictM.png",Iw="/tdl/assets/tdl_splash_bg-B78B8oeM.png",Pt=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},ww={class:"loading-screen"},Ew={class:"loading-bar-container"},Tw={class:"loading-bar-track"},Cw={__name:"LoadingScreen",setup(t){const e=dn(),n=D(0);return Rt(()=>{const r=.5333333333333333,o=setInterval(()=>{n.value+=r,n.value>=100&&(n.value=100,clearInterval(o),setTimeout(()=>{ht()?e.push("/main"):e.push("/login")},200))},16)}),(s,i)=>(O(),V("div",ww,[i[0]||(i[0]=h("div",{class:"logo-top"},[h("img",{src:Aw,alt:"TDL Logo",class:"splash-logo"})],-1)),h("div",Ew,[h("div",Tw,[h("div",{class:"loading-bar-fill",style:Ct({width:n.value+"%"})},null,4)])]),i[1]||(i[1]=h("div",{class:"splash-bg"},[h("img",{src:Iw,alt:"Splash Background",class:"splash-bg-image"})],-1))]))}},bw=Pt(Cw,[["__scopeId","data-v-91347297"]]),bn=vo({isLoggedIn:!1,walletAddress:"",userBalance:"0 ETH",nftCount:0,gameLevel:1,isLoading:!1}),_m=()=>{const t=(i,r)=>{bn.isLoggedIn=!0,bn.walletAddress=i,bn.userBalance=r},e=i=>{bn.nftCount=i.nftCount||0,bn.gameLevel=i.gameLevel||1},n=i=>{bn.isLoading=i},s=()=>{bn.isLoggedIn=!1,bn.walletAddress="",bn.userBalance="0 ETH",bn.nftCount=0,bn.gameLevel=1};return{state:Sw(bn),setWalletConnected:t,setUserData:e,setLoading:n,logout:s}},Sw=t=>new Proxy(t,{get(e,n){return e[n]},set(){return console.warn("직접 상태 수정은 금지됩니다. 액션을 사용하세요."),!1}}),Rw={class:"login-screen"},Pw={class:"input-group"},kw={class:"input-container"},Dw={class:"input-group"},xw={class:"input-container"},Nw=["type"],Mw={key:0,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Ow={key:1,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Vw=["disabled"],Lw={key:0,class:"btn-content"},Bw={key:1,class:"btn-content"},Fw={key:2,class:"btn-content"},Uw=["disabled"],$w={key:0,class:"google-icon",viewBox:"0 0 24 24"},Hw={key:1,class:"spinner-small"},jw={__name:"LoginScreen",setup(t){const e=dn(),{setWalletConnected:n,setLoading:s}=_m(),i=D(!1),r=D(!1),o=D(!1),l=()=>{e.push("/signup")},c=D(""),u=D(""),d=async m=>{if(m.preventDefault(),!c.value.trim()||!u.value.trim()){alert("ID와 비밀번호를 모두 입력해주세요.");return}i.value=!0,s(!0);const I=JSON.parse(localStorage.getItem("users")||"[]").find(b=>b.email===c.value&&b.password===u.value);setTimeout(()=>{i.value=!1,I?(r.value=!0,sessionStorage.setItem("currentUser",JSON.stringify(I)),n(I.email,`${I.gameData.coins} 코인`),s(!1),setTimeout(()=>{e.push("/main")},1e3)):(s(!1),alert("이메일 또는 비밀번호가 올바르지 않습니다."))},2e3)},p=()=>{o.value=!o.value};return Rt(()=>{if(s(!1),ht()){e.push("/main");return}const _=document.querySelector(".loginCont");_&&(_.style.opacity="0",_.style.transform="translateY(30px)",setTimeout(()=>{_.style.transition="all 0.6s ease",_.style.opacity="1",_.style.transform="translateY(0)"},100))}),(m,_)=>(O(),V("div",Rw,[_[12]||(_[12]=h("h1",{class:"login-title"},"로그인",-1)),h("form",{onSubmit:d,class:"login-form"},[h("div",Pw,[_[4]||(_[4]=h("label",{class:"input-label"},"아이디(이메일계정)",-1)),h("div",kw,[_[3]||(_[3]=h("svg",{class:"input-icon",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),h("polyline",{points:"22,6 12,13 2,6"})],-1)),ds(h("input",{type:"email","onUpdate:modelValue":_[0]||(_[0]=I=>c.value=I),class:"input-field",placeholder:"이메일을 입력하세요",required:""},null,512),[[pi,c.value]])])]),h("div",Dw,[_[8]||(_[8]=h("label",{class:"input-label"},"비밀번호",-1)),h("div",xw,[_[7]||(_[7]=h("svg",{class:"input-icon",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),h("circle",{cx:"12",cy:"16",r:"1"}),h("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})],-1)),ds(h("input",{type:o.value?"text":"password","onUpdate:modelValue":_[1]||(_[1]=I=>u.value=I),class:"input-field",placeholder:"비밀번호를 입력하세요",required:""},null,8,Nw),[[nm,u.value]]),h("button",{type:"button",class:"password-toggle",onClick:p},[o.value?(O(),V("svg",Ow,[..._[6]||(_[6]=[h("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"},null,-1),h("line",{x1:"1",y1:"1",x2:"23",y2:"23"},null,-1)])])):(O(),V("svg",Mw,[..._[5]||(_[5]=[h("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},null,-1),h("circle",{cx:"12",cy:"12",r:"3"},null,-1)])]))])])]),h("button",{type:"submit",disabled:i.value||r.value,class:Re(["login-button",{connecting:i.value,connected:r.value}])},[!i.value&&!r.value?(O(),V("div",Lw," 로그인 ")):he("",!0),i.value?(O(),V("div",Bw,[..._[9]||(_[9]=[h("div",{class:"spinner-small"},null,-1),so(" 로그인 중... ",-1)])])):he("",!0),r.value?(O(),V("div",Fw,[..._[10]||(_[10]=[h("svg",{class:"check-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor"},[h("path",{d:"M20 6L9 17l-5-5"})],-1),so(" 성공! ",-1)])])):he("",!0)],10,Vw)],32),_[13]||(_[13]=h("div",{class:"divider-section"},[h("div",{class:"divider-line"}),h("span",{class:"divider-text"},"또는"),h("div",{class:"divider-line"})],-1)),h("button",{onClick:_[2]||(_[2]=(...I)=>m.handleGoogleLogin&&m.handleGoogleLogin(...I)),disabled:m.isGoogleLoading||i.value||r.value,class:Re(["google-login-button",{loading:m.isGoogleLoading}])},[m.isGoogleLoading?he("",!0):(O(),V("svg",$w,[..._[11]||(_[11]=[h("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"},null,-1),h("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"},null,-1),h("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"},null,-1),h("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"},null,-1)])])),m.isGoogleLoading?(O(),V("div",Hw)):he("",!0),h("span",null,B(m.isGoogleLoading?"로그인 중...":"Google로 로그인"),1)],10,Uw),h("div",{class:"signup-link"},[h("button",{onClick:l,class:"signup-btn"}," 회원 가입하기 ")])]))}},Gw=Pt(jw,[["__scopeId","data-v-4894d8c4"]]),qw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAz4SURBVHgB7d3ddRRXFobhIyJgMpAzwBGgicDjCOwQyMA4AiYDk8FMBmIiMI5AygBn0FMFjQ3or3+q6uy9z/OsVUtccK3vrVPVrdYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAjXDQA7tjtds+nH1fT9XK65n9ffvNfbqfr/XT9cXFx8a4BADnNoz9dP0/X9e44N9P123RdNgAgj2m8X03Xh935/iMEACC4eaxPuOM/xOsGAMSz+3Tcv8Rd/0Nudk4DACCO+Q59t40bEQAAAWw4/iIAACLoMP5fRsDzBgBsq+P4f/amAQDbCTD+n101AGB9uzjjP7tuAMC6drHG/7OrBgCsYxdz/GdOAejOHwMCStp9+ia+X1pc/7i4uPizQSfPGkAxCcZ/9kODjgQAUEqS8Z9dNehIAABlJBr/2YsGHQkAoIRk4z/zrYB05SVAIL2E4//RxaRBJ04AgNSyjj/0JgCAtIw/nE4AACkVGP/bBh0JACCdInf+tw06EgBAKoWO/d836EgAAGkUe+b/rkFHPoICpFDwhT9/C4CunAAA4RUc/7fGn96cAAChFf2o3/dTAHgHgK6cAABhFR3/t8afCJwAACEV/pKf76YAuG3QmRMAIJzC4//a+BOFEwAglMLj/99p/H9sEIQAAMIoPP7zM/9/evOfSAQAEILxh20JAKA74w/bEwBAV8Yf+hAAQDfGH/oRAEAXxh/6EgDA5ow/9CcAgE0Zf4hBAACbMf4QhwAANmH8IRYBAKzO+EM8AgBYlfGHmAQAsBrjD3EJAGAVxh9iEwDA4ow/xCcAgEUZf8hBAACLMf6QhwAAFmH8IRcBAJzN+EM+AgA4i/GHnAQAcDLjD3kJAOAkxh9yEwDA0Yw/5CcAgKMYf6hBAAAHM/5QhwAADmL8oRYBADzJ+EM9AgB4lPGHmgQA8CDjD3UJAOBexh9qEwDAHcYf6hMAwFeMP4xBAAB/Mf4wDgEAfGT8YSwCADD+MCABAIMz/jAmAQADM/4wLgEAgzL+MDYBAAMy/oAAgMEYf2AmAGAgxh/4TADAIIw/8CUBAAMw/sC3BAAUZ/yB+wgAKMz4Aw8RAFCU8QceIwCgIOMPPEUAQDHGHziEAIBCjD9wKAEARRh/4BgCAAow/sCxBAAkZ/yBUwgASMz4A6cSAJCU8QfOIQAgIeMPnEsAQDLGH1iCAIBEjD+wFAEASRh/YEkCABIw/sDSBAAEZ/yBNQgACMz4A2sRABCU8QfWJAAgIOMPrE0AQDDGH9iCAIBAjD+wFQEAQRh/YEsCAAIw/sDWBAB0ZvyBHgQAdGT8gV4EAHRi/IGeBAB0YPyB3gQAbMz4AxEIANiQ8QeiEACwEeMPRCIAYAPGH4hGAMDKjD8QkQCAFRl/ICoBACsx/kBkAgBWYPyB6AQALMz4AxkIAFiQ8QeyEACwEOMPZCIAYAHGH8hGAMCZjD+QkQCAMxh/ICsBACcy/kBmAgBOYPyB7AQAHMn4AxUIADiC8QeqEABwIOMPVCIA4ADGH6hGAMATjD9QkQCARxh/oCoBAA8w/kBlAgDuYfyB6gQAfMP4AyMQAPAF4w+MQgDAnvEHRiIAoBl/YDwCgOEZf2BEAoChGX9gVAKAYRl/YGQCgCEZf2B0AoDhGH8AAcBgjD/AJwKAYRh/gL8JAIZg/AG+JgAoz/gD3CUAKM34A9xPAFCW8Qd4mACgJOMP8DgBQDnGH+BpAoBSjD/AYQQAZRh/gMMJAEow/gDHEQCkZ/wBjicASM34A5xGAJCW8Qc4nQAgJeMPcB4BQDrGH+B8AoBUjD/AMgQAaRh/gOUIAFIw/gDLEgCEZ/wBlicACM34A6xDABCW8QdYjwAgJOMPsC4BQDjGH2B9AoBQpvF/Nf140+ox/kAoAoAwpvG/nH7ctHqMPxDOswZxXLd6jD8QkgAghP1z/8tWi/EHwhIAdLc/+v+p1WL8gdAEABFctVp3/8YfCM9LgHQ3nQDML/5dthqMP5CCEwC6msb/RTP+AJsTAPT2stVg/IFUBAC9XbX8jD+QjgCgt8uWm/EHUhIA9HbZ8jL+QFo+BUBXu0nLyfgDqTkBAIABCQB6y3oHPX988Xo6wHjeABISAPSW+QhdBABpCQB6e99yEwFASgKA3t61/EQAkI4AoLc/Wg0iAEjFxwDpzh8DAtieEwAieNvqcBIApOAEgO72YzmfAlQaTScBQGhOAOhuP5L/brU4CQBCcwJACPuh/L3VeRfgMycBQEhOAAhhP5A/ttxfDHQfJwFASAKAMKYImO+Wf231iAAgHAFAKFMEzO8CvG71iAAgFO8AENI0lL+0miHgnQAgBAFAWCIAYD0CgNBEAMA6BADhiQCA5QkAUhABAMsSAKQhAgCWIwBIRQQALEMAkI4IADifACAlEQBwHgFAWiIA4HQCgNREAMBpBADpiQCA4wkAShABAMcRAJQhAgAOJwAoRQQAHEYAUI4IAHiaAKAkEQDwOAFAWSIA4GECgNJEAMD9BADliQCAuwQAQxABAF8TAAxDBAD8TQAwFBEA8IkAYDgiAEAAMCgRAIxOADAsEQCMTAAwNBEAjEoAMDwRAIxIAEATAcB4BADsiQBgJAIAviACgFEIAPiGCABGIADgHiIAqE4AwANEAFCZAIBHiACgKgEATxABQEUCAA4gAoBqBAAcSAQAlQgAOIIIAKoQAHAkEQBUIADgBCIAyE4AwIlEAJCZAIAziAAgKwEAZxIBQEYCABYgAoBsBAAsRAQAmQgAWJAIALIQALAwEQBkIABgBSIAiE4AwEpEABCZAIAViQAgKgEAKxMBQEQCADYgAoBoBABsRAQAkQgA2JAIAKIQALAxEQBEIACgAxEA9CYAoBMRAPQkAKAjEQD0IgCgMxEA9CAAIAARAGxNAEAQIgDYkgCAQEQAsBUBAMGIAGALAgACEgHA2gQABCUCgDUJAAhMBABrEQAQnAgA1iAAIAERACxNAEASIgBYkgCAREQAsBQBAMmIAGAJAgASEgHAuQQAJCUCgHMIAEhMBACnEgCQnAgATiEAoAARABxLAEARIgA4hgCAQkQAcCgBAMWIAOAQAgAKEgHAUwQAFCUCgMcIAChMBAAPEQBQnAgA7iMAYAAiAPiWAIBBiADgSwIABiICgM8EAAxGBAAzAQADEgGAAIBBiQAYmwCAgYkAGJcAgMGJABiTAABEAAxIAAAfiQAYiwAA/iICYBwCAPiKCIAxCADgDhEA9QkA4F4iAGoTAMCDRADUJQCAR4kAqEkAAE8SAVCPAAAOIgKgFgEAHEwEQB0CADiKCIAaBABwNBEA+QkA4CQiAHITAMDJRADkJQCAs4gAyEkAAGcTAZCPAAAWIQIgFwEALEYEQB4CAFiUCIAcBACwOBEA8QkAYBUiAGITAMBqRADEJQCAVYkAiEkAAKsTARCPAAA2IQIgFgEAbEYEQBwCANiUCIAYBACwOREA/QkAoAsRAH0JAKAbEQD9CACgKxEAfQgAoDsRANsTAEAIIgC2JQCAMEQAbOdZAwhiGshfW80AeDFdvzUIRAAAoRSOgH9NJxyvGgThEQAQUtHHAfMjgO+nyLlt0JkTACCkoicBz5tHAQQhAICwikbA1XS6cdWgMwEAhFY0An5q0Jl3AIAUir0TML8L8J2PBdKTEwAghWInAfO7AC8bdCQAgDSKRcBVg44EAJBKoQh40aAjAQCkUyQCLht05CVAIK3sLwZOIeN3MN04AQDSKvy1wbA6AQCkJgLgNAIASC9pBNw26EgAACUkjIDbBh0JAKCMZBFw26AjAQCUkigC3jUAYFnzRwR3sV02AGB5u7gRcN2gM48AgLICPw542wCAde1inQTcNABgG7s4EfBDAwC2s+sfAW8aALC9jhFwM13PGwDQR4cIuNn52B8A9LdhBNwYfwAIZBrmV9P1Ybee340/AAQ0D/T+Ln1pb3ae+QNAbNNY/7xQCFxP18sGAOSxD4Hr3XE+7O/4DT9pXDQA7tgf38+D/mJ/fXmc/+f+ej9fFxcX/2sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABU9n/G+xQHTFSybwAAAABJRU5ErkJggg==",Qw={class:"signup-screen"},zw={class:"input-group"},Ww={class:"input-container"},Kw={class:"input-group"},Yw={class:"input-container"},Jw={class:"input-group"},Xw={class:"input-container"},Zw={class:"input-group"},e1={class:"input-container"},t1=["type"],n1={key:0,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},s1={key:1,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},i1={__name:"SignupScreen",setup(t){const e=dn(),n=D({name:"",phone:"",email:"",password:""}),s=D(!1),i=()=>{e.go(-1)},r=async l=>{if(l.preventDefault(),!n.value.name.trim()||!n.value.phone.trim()||!n.value.email.trim()||!n.value.password.trim()){alert("모든 필드를 입력해주세요.");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.value.email)){alert("올바른 이메일 형식을 입력해주세요.");return}if(n.value.password.length<6){alert("비밀번호는 6자 이상이어야 합니다.");return}const u=JSON.parse(localStorage.getItem("users")||"[]");if(u.some(m=>m.email===n.value.email)){alert("이미 가입된 이메일입니다.");return}const p={id:Date.now(),name:n.value.name,phone:n.value.phone,email:n.value.email,password:n.value.password,createdAt:new Date().toISOString(),gameData:{level:1,coins:0,nftCount:0}};u.push(p),localStorage.setItem("users",JSON.stringify(u)),console.log("회원가입 완료:",p),alert("회원가입이 완료되었습니다!"),e.push("/login")},o=()=>{s.value=!s.value};return(l,c)=>(O(),V("div",Qw,[h("button",{class:"back-button",onClick:i},[...c[4]||(c[4]=[h("img",{src:qw,alt:"back-button",width:"20px"},null,-1)])]),c[16]||(c[16]=h("h1",{class:"signup-title"},"회원가입",-1)),h("form",{onSubmit:r,class:"signup-form"},[h("div",zw,[c[6]||(c[6]=h("label",{class:"input-label"},"이름",-1)),h("div",Ww,[c[5]||(c[5]=h("svg",{class:"input-icon",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),h("polyline",{points:"22,6 12,13 2,6"})],-1)),ds(h("input",{type:"text","onUpdate:modelValue":c[0]||(c[0]=u=>n.value.name=u),class:"input-field",placeholder:"이름을 입력하세요",required:""},null,512),[[pi,n.value.name]])])]),h("div",Kw,[c[8]||(c[8]=h("label",{class:"input-label"},"전화번호",-1)),h("div",Yw,[c[7]||(c[7]=h("svg",{class:"input-icon",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})],-1)),ds(h("input",{type:"tel","onUpdate:modelValue":c[1]||(c[1]=u=>n.value.phone=u),class:"input-field",placeholder:"전화번호를 입력하세요",required:""},null,512),[[pi,n.value.phone]])])]),h("div",Jw,[c[10]||(c[10]=h("label",{class:"input-label"},"이메일",-1)),h("div",Xw,[c[9]||(c[9]=h("svg",{class:"input-icon",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),h("polyline",{points:"22,6 12,13 2,6"})],-1)),ds(h("input",{type:"email","onUpdate:modelValue":c[2]||(c[2]=u=>n.value.email=u),class:"input-field",placeholder:"이메일을 입력하세요",required:""},null,512),[[pi,n.value.email]])])]),h("div",Zw,[c[14]||(c[14]=h("label",{class:"input-label"},"비밀번호",-1)),h("div",e1,[c[13]||(c[13]=h("svg",{class:"input-icon",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),h("circle",{cx:"12",cy:"16",r:"1"}),h("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})],-1)),ds(h("input",{type:s.value?"text":"password","onUpdate:modelValue":c[3]||(c[3]=u=>n.value.password=u),class:"input-field",placeholder:"비밀번호를 입력하세요",required:""},null,8,t1),[[nm,n.value.password]]),h("button",{type:"button",class:"password-toggle",onClick:o},[s.value?(O(),V("svg",s1,[...c[12]||(c[12]=[h("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"},null,-1),h("line",{x1:"1",y1:"1",x2:"23",y2:"23"},null,-1)])])):(O(),V("svg",n1,[...c[11]||(c[11]=[h("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},null,-1),h("circle",{cx:"12",cy:"12",r:"3"},null,-1)])]))])])]),c[15]||(c[15]=h("button",{type:"submit",class:"signup-button"}," 회원가입 ",-1))],32)]))}},r1=Pt(i1,[["__scopeId","data-v-8fe702ff"]]),hu="/tdl/assets/cat1-B_B8VE2s.png",du="/tdl/assets/cat10-B8AgbljH.png",fu="/tdl/assets/cat11-0fJ86MBw.png",pu="/tdl/assets/cat12-9jWhGICw.png",gu="/tdl/assets/cat13-CHa4qUOi.png",mu="/tdl/assets/cat14-CLrryeLM.png",_u="/tdl/assets/cat15-CCtjZj8M.png",vu="/tdl/assets/cat16-CPcR6OS6.png",yu="/tdl/assets/cat17-EO7rjjtM.png",Au="/tdl/assets/cat18-BGDiOePY.png",Iu="/tdl/assets/cat19-DxCDtOnA.png",wu="/tdl/assets/cat2-0Y4nM6HW.png",Eu="/tdl/assets/cat20-Bz9cd08a.png",Tu="/tdl/assets/cat21-ECTsze2s.png",Cu="/tdl/assets/cat22-BvGXhyri.png",bu="/tdl/assets/cat23-DqU2B_M0.png",Su="/tdl/assets/cat24-7cWYLYDN.png",Ru="/tdl/assets/cat25-Cy0mQl6B.png",Pu="/tdl/assets/cat26-Bk4tHCwE.png",ku="/tdl/assets/cat27-CvtmCEXM.png",Du="/tdl/assets/cat28-B9s1wmgo.png",xu="/tdl/assets/cat29-D_79HmBj.png",Nu="/tdl/assets/cat3-Dp7OJMB9.png",Mu="/tdl/assets/cat30-Cx-HRp0m.png",Ou="/tdl/assets/cat4-DHiuXgwB.png",Vu="/tdl/assets/cat5-BvXrfJAO.png",Lu="/tdl/assets/cat6-DZOiQoo1.png",Bu="/tdl/assets/cat7-CeDKF7mR.png",Fu="/tdl/assets/cat8-mjRhb3fS.png",Uu="/tdl/assets/cat9-Bzb-Egme.png",$u="/tdl/assets/catProfile01-gY0Djz81.png",Hu="/tdl/assets/catProfile02-Cesbpkj5.png",ju="/tdl/assets/cat_ico-Csdt_Q01.png",o1="/tdl/assets/tul1-CuZ0qR5D.png",a1="/tdl/assets/tul2-Cj7OkHg6.png",l1="/tdl/assets/tul3-CaPMxBJ-.png",c1="/tdl/assets/tul5-CQc-0WLd.png",u1="/tdl/assets/tul6-COB-AGqQ.png",h1="/tdl/assets/mainPoint-D-oASrAx.png",vm="/tdl/assets/mainCoin-CGuum4ry.png",d1="/tdl/assets/lighting-DDPCD7_E.png",ym="/tdl/assets/point_ico-CuS5zUpS.png",Am="/tdl/assets/coin_ico-COVm5STX.png",Im="/tdl/assets/cat_ico-Csdt_Q01.png",f1="/tdl/assets/notice-Bkd9hh4q.png",p1="/tdl/assets/setting-CxNpDL9x.png",g1={class:"headerCont"},m1={class:"headerBar"},_1={class:"headerValue"},v1={class:"headerValue"},y1={class:"headerValue"},A1={class:"headerValue"},I1={__name:"Header",setup(t){const e=D(localStorage.getItem("appLanguage")||"한국어");Xe(()=>mm());const n=dn(),s=D(0),i=D(0),r=D(50),o=D(4e3),l=D(4e3),c=()=>{const w=new Date().toDateString(),x=localStorage.getItem("energyLastDate"),U=localStorage.getItem("currentEnergy");if(x!==w)o.value=l.value,localStorage.setItem("energyLastDate",w),localStorage.setItem("currentEnergy",l.value.toString());else if(U){const F=parseInt(U)||0;o.value=Math.max(0,Math.min(F,l.value))}else o.value=l.value,localStorage.setItem("energyLastDate",w),localStorage.setItem("currentEnergy",l.value.toString())},u=()=>{const w=ht();w&&(s.value=w.gameData?.coins||0,i.value=w.gameData?.totalCoin||0,r.value=w.gameData?.catFragments||w.gameData?.catCount||50),c()};D(!1);const d=()=>{n.push("/settings")},p=()=>{n.push("/notification")},m=()=>{n.push("/shop")};let _=null,I=null;Rt(()=>{u(),_=setInterval(()=>{const w=localStorage.getItem("appLanguage")||"한국어";w!==e.value&&(e.value=w)},100),I=setInterval(()=>{u()},500),window.addEventListener("userDataUpdated",u)}),cr(()=>{_&&clearInterval(_),I&&clearInterval(I),window.removeEventListener("userDataUpdated",u)});const b=w=>w>=1e9?(w/1e9).toFixed(1).replace(/\.0$/,"")+"G":w>=1e6?(w/1e6).toFixed(1).replace(/\.0$/,"")+"M":w>=1e4?(w/1e3).toFixed(1).replace(/\.0$/,"")+"K":w.toLocaleString();return(w,x)=>(O(),V("header",null,[h("div",g1,[h("div",m1,[h("button",{class:"headerItem energyItem",onClick:m},[x[0]||(x[0]=h("img",{src:d1,alt:"에너지",class:"energyIcon"},null,-1)),h("span",_1,B(b(o.value))+" / "+B(b(l.value)),1)]),x[6]||(x[6]=h("div",{class:"divider"},null,-1)),h("button",{class:"headerItem clickableItem",onClick:m},[x[1]||(x[1]=h("img",{src:ym,alt:"P",class:"pointIcon"},null,-1)),h("span",v1,B(b(s.value)),1)]),x[7]||(x[7]=h("div",{class:"divider"},null,-1)),h("button",{class:"headerItem clickableItem",onClick:m},[x[2]||(x[2]=h("img",{src:Am,alt:"C",class:"coinIcon"},null,-1)),h("span",y1,B(b(i.value)),1)]),x[8]||(x[8]=h("div",{class:"divider"},null,-1)),h("button",{class:"headerItem clickableItem",onClick:m},[x[3]||(x[3]=h("img",{src:Im,alt:"고양이",class:"catIcon"},null,-1)),h("span",A1,B(r.value),1)]),x[9]||(x[9]=h("div",{class:"divider"},null,-1)),h("button",{class:"headerIconBtn notifi",onClick:p},[...x[4]||(x[4]=[h("img",{src:f1,alt:"알림",class:"icon-img"},null,-1)])]),x[10]||(x[10]=h("div",{class:"divider"},null,-1)),h("button",{class:"headerIconBtn menuBtn",onClick:d},[...x[5]||(x[5]=[h("img",{src:p1,alt:"설정",class:"icon-img"},null,-1)])])])])]))}},fn=Pt(I1,[["__scopeId","data-v-69190070"]]),w1="/tdl/assets/bottom001-BEtDIm8X.png",E1="/tdl/assets/bottom001_on-DT187QNm.png",T1="/tdl/assets/bottom002-DzQ3N6uP.png",C1="/tdl/assets/bottom002_on-C1N0vVp8.png",b1="/tdl/assets/bottom003-BvgU7nGk.png",S1="/tdl/assets/bottom003_on-Df8s6MrC.png",R1="/tdl/assets/bottom004-CWodmmKt.png",P1="/tdl/assets/bottom004_on-D8X_vvyV.png",k1="/tdl/assets/bottom005-CX2HIylp.png",D1="/tdl/assets/bottom005_on-DYZvET-x.png",x1={class:"footerCont"},N1={class:"footerBar"},M1=["onClick"],O1={class:"tabContent"},V1=["src","alt"],L1={class:"tabLabel"},B1={key:0,class:"activeIndicator"},F1={__name:"Footer",setup(t){const e=dn(),n=D("home"),s=D(localStorage.getItem("appLanguage")||"한국어"),i=Xe(()=>mm()),r=d=>{d.key==="appLanguage"&&(s.value=d.newValue||"한국어")},o=()=>{switch(e.currentRoute.value.path){case"/main":n.value="home";break;case"/exchange":n.value="exchange";break;case"/quest":n.value="quest";break;case"/inventory":n.value="inventory";break;case"/factory":n.value="factory";break;default:n.value="home"}};let l=null;Rt(()=>{o(),window.addEventListener("storage",r),l=setInterval(()=>{const d=localStorage.getItem("appLanguage")||"한국어";d!==s.value&&(s.value=d)},100)}),cr(()=>{window.removeEventListener("storage",r),l&&clearInterval(l)}),gs(()=>e.currentRoute.value.path,()=>{o()}),gs(s,()=>{});const c=Xe(()=>[{id:"home",img:w1,imgActive:E1,label:i.value.home},{id:"exchange",img:T1,imgActive:C1,label:i.value.exchange},{id:"quest",img:b1,imgActive:S1,label:i.value.quest},{id:"inventory",img:R1,imgActive:P1,label:i.value.inventory},{id:"factory",img:k1,imgActive:D1,label:i.value.factory}]),u=d=>{switch(n.value=d,d){case"home":e.push("/main");break;case"exchange":e.push("/exchange");break;case"quest":e.push("/quest");break;case"inventory":e.push("/inventory");break;case"factory":e.push("/factory");break}};return(d,p)=>(O(),V("footer",null,[h("div",x1,[p[0]||(p[0]=h("div",{class:"footerBackground"},null,-1)),h("div",N1,[(O(!0),V(Se,null,je(c.value,m=>(O(),V("div",{key:m.id,class:Re(["tabItem",{active:n.value===m.id}]),onClick:_=>u(m.id)},[h("div",O1,[h("img",{src:n.value===m.id?m.imgActive:m.img,alt:m.label,class:"tabIcon"},null,8,V1),h("span",L1,B(m.label),1)]),n.value===m.id?(O(),V("div",B1)):he("",!0)],10,M1))),128))])])]))}},pn=Pt(F1,[["__scopeId","data-v-5284f664"]]),U1={class:"mainScreen"},$1={class:"mainContent"},H1={key:0,class:"mainMenuNew"},j1={class:"totalStats"},G1={class:"totalPoint"},q1={class:"statValue"},Q1={class:"statNumber"},z1={class:"totalCoin"},W1={class:"statValue"},K1={class:"statNumber"},Y1={class:"gameModeGrid"},J1={class:"modeLevel"},X1={class:"modeLevel"},Z1={class:"modeLevel"},eE={class:"modeLevel"},tE={key:1,class:"miningMode"},nE={class:"pageHeader"},sE={class:"totalPointsDisplay"},iE={class:"miningButtonContainer"},rE={key:1,class:"completeMessageContainer"},oE={class:"rewardInfo"},aE={class:"rewardItem"},lE={key:0,class:"rewardItem"},cE={class:"energySection"},uE={class:"energyInfo"},hE={class:"energyText"},dE={class:"energyBar"},fE={class:"miningCatsSection"},pE={class:"catsListScroll"},gE=["onClick"],mE={key:0,class:"catLevel"},_E={key:1,class:"catImage"},vE=["src"],yE={key:2,class:"catStars"},AE={key:3,class:"emptySlotContent"},IE={key:2,class:"miningMode"},wE={class:"pageHeader"},EE={class:"totalPointsDisplay"},TE={class:"miningButtonContainer"},CE={key:1,class:"completeMessageContainer"},bE={class:"rewardInfo"},SE={class:"rewardItem"},RE={key:0,class:"rewardItem"},PE={class:"energySection"},kE={class:"energyInfo"},DE={class:"energyText"},xE={class:"energyBar"},NE={class:"miningCatsSection"},ME={class:"catsListScroll"},OE=["onClick"],VE={key:0,class:"catLevel"},LE={key:1,class:"catImage"},BE=["src"],FE={key:2,class:"catStars"},UE={key:3,class:"emptySlotContent"},$E={key:3,class:"miningMode"},HE={class:"pageHeader"},jE={class:"totalPointsDisplay"},GE={class:"miningButtonContainer"},qE={key:1,class:"completeMessageContainer"},QE={class:"rewardInfo"},zE={class:"rewardItem"},WE={key:0,class:"rewardItem"},KE={class:"energySection"},YE={class:"energyInfo"},JE={class:"energyText"},XE={class:"energyBar"},ZE={class:"miningCatsSection"},eT={class:"catsListScroll"},tT=["onClick"],nT={key:0,class:"catLevel"},sT={key:1,class:"catImage"},iT=["src"],rT={key:2,class:"catStars"},oT={key:3,class:"emptySlotContent"},aT={key:4,class:"miningMode"},lT={class:"pageHeader"},cT={class:"totalPointsDisplay"},uT={class:"miningButtonContainer"},hT={key:1,class:"completeMessageContainer"},dT={class:"rewardInfo"},fT={class:"rewardItem"},pT={key:0,class:"rewardItem"},gT={class:"energySection"},mT={class:"energyInfo"},_T={class:"energyText"},vT={class:"energyBar"},yT={class:"miningCatsSection"},AT={class:"catsListScroll"},IT=["onClick"],wT={key:0,class:"catLevel"},ET={key:1,class:"catImage"},TT=["src"],CT={key:2,class:"catStars"},bT={key:3,class:"emptySlotContent"},ST={key:0,class:"speechBubbles"},RT={key:1,class:"catEmojis"},PT=["src","onError"],kT={class:"catSelectPopupBody"},DT={key:0,class:"removeCatSection"},xT={class:"availableCatsGrid"},NT=["onClick"],MT={class:"availableCatImage"},OT=["src"],VT={class:"availableCatInfo"},LT={class:"availableCatName"},BT={class:"availableCatLevel"},FT={class:"availableCatStars"},UT={__name:"MainScreen",setup(t){const e=G=>G>=1e9?(G/1e9).toFixed(1).replace(/\.0$/,"")+"B":G>=1e6?(G/1e6).toFixed(1).replace(/\.0$/,"")+"M":G>=1e4?(G/1e3).toFixed(1).replace(/\.0$/,"")+"K":G.toLocaleString(),n=dn(),s=D(null),i=D("main"),r=D(0),o=D(0),l=D(0),c=D(50),u=D(50),d=D([]),p=D([]),m=D(null),_=D(0),I=D(0),b=D(1),w=D(!1),x=D(!0),U=D({points:0,fragments:0}),F=D(0),j=D(0),se=D(1),Ie=D(!1),S=D(!0),A=D({points:0,fragments:0}),T=D(0),P=D(0),R=D(1),N=D(!1),E=D(!0),st=D({points:0,fragments:0}),vt=D(0),it=D(0),Ce=D(1),be=D(!1),kt=D(!0),Kt=D({points:0,fragments:0}),Lt=G=>Math.pow(2,G-1),rt=G=>{i.value=G,_.value=0,w.value=!1,x.value=!0,F.value=0,Ie.value=!1,S.value=!0,T.value=0,N.value=!1,E.value=!0,vt.value=0,be.value=!1,kt.value=!0},Cn=()=>{n.currentRoute.value.path==="/main"&&(i.value="main")};Rt(()=>{s.value=ht(),s.value&&(o.value=s.value.gameData?.coins||0,l.value=s.value.gameData?.totalCoin||0,r.value=o.value,u.value=s.value.gameData?.catFragments||50,b.value=s.value.gameData?.miningLevel||1,I.value=s.value.gameData?.miningTotalClicks||0,R.value=s.value.gameData?.huntingLevel||1,P.value=s.value.gameData?.huntingTotalClicks||0,se.value=s.value.gameData?.explorationLevel||1,j.value=s.value.gameData?.explorationTotalClicks||0,Ce.value=s.value.gameData?.productionLevel||1,it.value=s.value.gameData?.productionTotalClicks||0,xe.value=s.value.gameData?.planetLevel||1,te.value=s.value.gameData?.planetEnergy||0,s.value.gameData?.miningCats&&(Array.isArray(s.value.gameData.miningCats)&&s.value.gameData.miningCats.length===0?ee.value=[null,null,null,null,null,null]:ee.value=s.value.gameData.miningCats),s.value.gameData?.huntingCats&&(Array.isArray(s.value.gameData.huntingCats)&&s.value.gameData.huntingCats.length===0?$e.value=[null,null,null,null,null,null]:$e.value=s.value.gameData.huntingCats),s.value.gameData?.explorationCats&&(Array.isArray(s.value.gameData.explorationCats)&&s.value.gameData.explorationCats.length===0?He.value=[null,null,null,null,null,null]:He.value=s.value.gameData.explorationCats),s.value.gameData?.productionCats&&(Array.isArray(s.value.gameData.productionCats)&&s.value.gameData.productionCats.length===0?qe.value=[null,null,null,null,null,null]:qe.value=s.value.gameData.productionCats)),C(),n.afterEach(Cn);try{m.value=new Audio,m.value.src=new URL("/tdl/assets/clickbgm-BvbCQtA-.mp3",import.meta.url).href,m.value.volume=.3}catch{console.log("클릭 사운드 파일을 찾을 수 없습니다.")}const G=()=>{!gn()&&m.value&&(m.value.pause(),m.value.currentTime=0)};window.addEventListener("soundSettingChanged",G),Fe("mining"),Fe("hunting"),Fe("exploration"),Fe("production"),cr(()=>{n.afterEach(Cn),ei(),window.removeEventListener("soundSettingChanged",G)})});const gn=()=>{const G=localStorage.getItem("soundEnabled");return G!==null?G==="true":!0},Yt=G=>{if(m.value&&gn()&&(m.value.currentTime=0,m.value.play().catch(()=>{})),ot.value<ae.value){alert("에너지가 부족합니다!");return}if(M()){if(G==="mining"){if(_.value++,I.value++,I.value>=b.value*1e3){b.value++;const k={id:Date.now(),text:`채굴 레벨업! Lv.${b.value}`,x:Math.random()*(Math.min(window.innerWidth||500,500)-220-40)+20,y:Math.random()*(window.innerHeight||500)+100};d.value.push(k),setTimeout(()=>{const H=d.value.findIndex(ie=>ie.id===k.id);H>-1&&d.value.splice(H,1)},3e3),s.value&&Mt(s.value.id,{miningLevel:b.value,miningTotalClicks:I.value})}if(_.value>=10){const ie=100*Lt(b.value);r.value+=ie,o.value=r.value,_.value=0,w.value=!0,x.value=!1,y();const le=Math.random();let re=0;if(le<.3?re=1:le<.4&&(re=2),U.value={points:ie,fragments:re},re>0){u.value+=re;for(let Me=0;Me<re;Me++){const At=Math.floor(Math.random()*6)+1,yn=Math.min(window.innerWidth||500,500),Bt=window.innerHeight||800,lt=60,ct=30,Je={id:Date.now()+Me,x:Math.random()*(yn-lt-ct*2)+ct,y:Math.random()*(Bt-lt-ct*2-200)+100,imageId:At};p.value.push(Je),setTimeout(()=>{const Dt=p.value.findIndex(an=>an.id===Je.id);Dt>-1&&p.value.splice(Dt,1)},2e3)}}s.value&&Mt(s.value.id,{coins:r.value,catFragments:u.value,miningTotalClicks:I.value,miningLevel:b.value});const De=Math.min(window.innerWidth||500,500),Be=window.innerHeight||800,at=220,on=re>0?80:60,Ze=20;let Ht=`채굴 완료!
${ie.toLocaleString()}point 획득!`;re>0&&(Ht+=`
고양이 파편 ${re}개 획득!`);const jt={id:Date.now(),text:Ht,x:Math.random()*(De-at-Ze*2)+Ze,y:Math.random()*(Be-on-Ze*2-200)+100};d.value.push(jt),setTimeout(()=>{const Me=d.value.findIndex(At=>At.id===jt.id);Me>-1&&d.value.splice(Me,1)},3e3),setTimeout(()=>{w.value=!1,x.value=!0,U.value={points:0,fragments:0}},1500)}else{const k=Math.min(window.innerWidth||500,500),H=window.innerHeight||800,ie=220,le=60,re=20,De={id:Date.now(),text:`채굴 진행: ${_.value}/10`,x:Math.random()*(k-ie-re*2)+re,y:Math.random()*(H-le-re*2-200)+100};d.value.push(De),setTimeout(()=>{const Be=d.value.findIndex(at=>at.id===De.id);Be>-1&&d.value.splice(Be,1)},2e3)}}else if(G==="exploration"){if(F.value++,j.value++,j.value>=se.value*1e3){se.value++;const k={id:Date.now(),text:`탐험 레벨업! Lv.${se.value}`,x:Math.random()*(Math.min(window.innerWidth||500,500)-220-40)+20,y:Math.random()*(window.innerHeight||500)+100};d.value.push(k),setTimeout(()=>{const H=d.value.findIndex(ie=>ie.id===k.id);H>-1&&d.value.splice(H,1)},3e3),s.value&&Mt(s.value.id,{explorationLevel:se.value,explorationTotalClicks:j.value})}if(F.value>=10){const ie=100*Lt(se.value);r.value+=ie,o.value=r.value,F.value=0,Ie.value=!0,S.value=!1,y();const le=Math.random();let re=0;if(le<.3?re=1:le<.4&&(re=2),A.value={points:ie,fragments:re},re>0){u.value+=re;for(let Me=0;Me<re;Me++){const At=Math.floor(Math.random()*6)+1,yn=Math.min(window.innerWidth||500,500),Bt=window.innerHeight||800,lt=60,ct=30,Je={id:Date.now()+Me,x:Math.random()*(yn-lt-ct*2)+ct,y:Math.random()*(Bt-lt-ct*2-200)+100,imageId:At};p.value.push(Je),setTimeout(()=>{const Dt=p.value.findIndex(an=>an.id===Je.id);Dt>-1&&p.value.splice(Dt,1)},2e3)}}s.value&&Mt(s.value.id,{coins:r.value,catFragments:u.value,explorationTotalClicks:j.value,explorationLevel:se.value});const De=Math.min(window.innerWidth||500,500),Be=window.innerHeight||800,at=220,on=re>0?80:60,Ze=20;let Ht=`탐험 완료!
${ie.toLocaleString()}point 획득!`;re>0&&(Ht+=`
고양이 파편 ${re}개 획득!`);const jt={id:Date.now(),text:Ht,x:Math.random()*(De-at-Ze*2)+Ze,y:Math.random()*(Be-on-Ze*2-200)+100};d.value.push(jt),setTimeout(()=>{const Me=d.value.findIndex(At=>At.id===jt.id);Me>-1&&d.value.splice(Me,1)},3e3),setTimeout(()=>{Ie.value=!1,S.value=!0,A.value={points:0,fragments:0}},1500)}else{const k=Math.min(window.innerWidth||500,500),H=window.innerHeight||800,ie=220,le=60,re=20,De={id:Date.now(),text:`탐험 진행: ${F.value}/10`,x:Math.random()*(k-ie-re*2)+re,y:Math.random()*(H-le-re*2-200)+100};d.value.push(De),setTimeout(()=>{const Be=d.value.findIndex(at=>at.id===De.id);Be>-1&&d.value.splice(Be,1)},2e3)}}else if(G==="hunting"){if(T.value++,P.value++,P.value>=R.value*1e3){R.value++;const k={id:Date.now(),text:`사냥 레벨업! Lv.${R.value}`,x:Math.random()*(Math.min(window.innerWidth||500,500)-220-40)+20,y:Math.random()*(window.innerHeight||500)+100};d.value.push(k),setTimeout(()=>{const H=d.value.findIndex(ie=>ie.id===k.id);H>-1&&d.value.splice(H,1)},3e3),s.value&&Mt(s.value.id,{huntingLevel:R.value,huntingTotalClicks:P.value})}if(T.value>=10){const ie=100*Lt(R.value);r.value+=ie,o.value=r.value,T.value=0,N.value=!0,E.value=!1,y();const le=Math.random();let re=0;if(le<.3?re=1:le<.4&&(re=2),st.value={points:ie,fragments:re},re>0){u.value+=re;for(let Me=0;Me<re;Me++){const At=Math.floor(Math.random()*6)+1,yn=Math.min(window.innerWidth||500,500),Bt=window.innerHeight||800,lt=60,ct=30,Je={id:Date.now()+Me,x:Math.random()*(yn-lt-ct*2)+ct,y:Math.random()*(Bt-lt-ct*2-200)+100,imageId:At};p.value.push(Je),setTimeout(()=>{const Dt=p.value.findIndex(an=>an.id===Je.id);Dt>-1&&p.value.splice(Dt,1)},2e3)}}s.value&&Mt(s.value.id,{coins:r.value,catFragments:u.value,huntingTotalClicks:P.value,huntingLevel:R.value});const De=Math.min(window.innerWidth||500,500),Be=window.innerHeight||800,at=220,on=re>0?80:60,Ze=20;let Ht=`사냥 완료!
${ie.toLocaleString()}point 획득!`;re>0&&(Ht+=`
고양이 파편 ${re}개 획득!`);const jt={id:Date.now(),text:Ht,x:Math.random()*(De-at-Ze*2)+Ze,y:Math.random()*(Be-on-Ze*2-200)+100};d.value.push(jt),setTimeout(()=>{const Me=d.value.findIndex(At=>At.id===jt.id);Me>-1&&d.value.splice(Me,1)},3e3),setTimeout(()=>{N.value=!1,E.value=!0,st.value={points:0,fragments:0}},1500)}else{const k=Math.min(window.innerWidth||500,500),H=window.innerHeight||800,ie=220,le=60,re=20,De={id:Date.now(),text:`사냥 진행: ${T.value}/10`,x:Math.random()*(k-ie-re*2)+re,y:Math.random()*(H-le-re*2-200)+100};d.value.push(De),setTimeout(()=>{const Be=d.value.findIndex(at=>at.id===De.id);Be>-1&&d.value.splice(Be,1)},2e3)}}else if(G==="production"){if(vt.value++,it.value++,it.value>=Ce.value*1e3){Ce.value++;const k={id:Date.now(),text:`생산 레벨업! Lv.${Ce.value}`,x:Math.random()*(Math.min(window.innerWidth||500,500)-220-40)+20,y:Math.random()*(window.innerHeight||500)+100};d.value.push(k),setTimeout(()=>{const H=d.value.findIndex(ie=>ie.id===k.id);H>-1&&d.value.splice(H,1)},3e3),s.value&&Mt(s.value.id,{productionLevel:Ce.value,productionTotalClicks:it.value})}if(vt.value>=10){const ie=100*Lt(Ce.value);r.value+=ie,o.value=r.value,vt.value=0,be.value=!0,kt.value=!1,y();const le=Math.random();let re=0;if(le<.3?re=1:le<.4&&(re=2),Kt.value={points:ie,fragments:re},re>0){u.value+=re;for(let Me=0;Me<re;Me++){const At=Math.floor(Math.random()*6)+1,yn=Math.min(window.innerWidth||500,500),Bt=window.innerHeight||800,lt=60,ct=30,Je={id:Date.now()+Me,x:Math.random()*(yn-lt-ct*2)+ct,y:Math.random()*(Bt-lt-ct*2-200)+100,imageId:At};p.value.push(Je),setTimeout(()=>{const Dt=p.value.findIndex(an=>an.id===Je.id);Dt>-1&&p.value.splice(Dt,1)},2e3)}}s.value&&Mt(s.value.id,{coins:r.value,catFragments:u.value,productionTotalClicks:it.value,productionLevel:Ce.value});const De=Math.min(window.innerWidth||500,500),Be=window.innerHeight||800,at=220,on=re>0?80:60,Ze=20;let Ht=`생산 완료!
${ie.toLocaleString()}point 획득!`;re>0&&(Ht+=`
고양이 파편 ${re}개 획득!`);const jt={id:Date.now(),text:Ht,x:Math.random()*(De-at-Ze*2)+Ze,y:Math.random()*(Be-on-Ze*2-200)+100};d.value.push(jt),setTimeout(()=>{const Me=d.value.findIndex(At=>At.id===jt.id);Me>-1&&d.value.splice(Me,1)},3e3),setTimeout(()=>{be.value=!1,kt.value=!0,Kt.value={points:0,fragments:0}},1500)}else{const k=Math.min(window.innerWidth||500,500),H=window.innerHeight||800,ie=220,le=60,re=20,De={id:Date.now(),text:`생산 진행: ${vt.value}/10`,x:Math.random()*(k-ie-re*2)+re,y:Math.random()*(H-le-re*2-200)+100};d.value.push(De),setTimeout(()=>{const Be=d.value.findIndex(at=>at.id===De.id);Be>-1&&d.value.splice(Be,1)},2e3)}}}};D(0),D(!1),D({stone:0,iron:0,gold:0,diamond:0});const ot=D(4e3),q=D(4e3),ae=D(1),te=D(0),ue=D(2e3),xe=D(1),y=()=>{if(te.value=Math.min(ue.value,te.value+50),te.value>=ue.value){if(i.value==="mining"?b.value++:i.value==="hunting"?R.value++:i.value==="exploration"?se.value++:i.value==="production"&&Ce.value++,te.value=0,s.value){const G={planetEnergy:te.value,miningLevel:b.value,huntingLevel:R.value,explorationLevel:se.value,productionLevel:Ce.value};Mt(s.value.id,G)}}else s.value&&Mt(s.value.id,{planetEnergy:te.value})},C=()=>{const G=new Date().toDateString(),k=localStorage.getItem("energyLastDate"),H=localStorage.getItem("currentEnergy");if(k!==G)ot.value=q.value,localStorage.setItem("energyLastDate",G),localStorage.setItem("currentEnergy",q.value.toString());else if(H){const ie=parseInt(H)||0;ot.value=Math.max(0,Math.min(ie,q.value))}else ot.value=q.value,localStorage.setItem("energyLastDate",G),localStorage.setItem("currentEnergy",q.value.toString())},M=(G=ae.value)=>ot.value>=G?(ot.value=Math.max(0,ot.value-G),localStorage.setItem("currentEnergy",ot.value.toString()),localStorage.setItem("energyLastDate",new Date().toDateString()),!0):!1,Q=G=>{try{return new URL(Object.assign({"../assets/img/cat1.png":hu,"../assets/img/cat10.png":du,"../assets/img/cat11.png":fu,"../assets/img/cat12.png":pu,"../assets/img/cat13.png":gu,"../assets/img/cat14.png":mu,"../assets/img/cat15.png":_u,"../assets/img/cat16.png":vu,"../assets/img/cat17.png":yu,"../assets/img/cat18.png":Au,"../assets/img/cat19.png":Iu,"../assets/img/cat2.png":wu,"../assets/img/cat20.png":Eu,"../assets/img/cat21.png":Tu,"../assets/img/cat22.png":Cu,"../assets/img/cat23.png":bu,"../assets/img/cat24.png":Su,"../assets/img/cat25.png":Ru,"../assets/img/cat26.png":Pu,"../assets/img/cat27.png":ku,"../assets/img/cat28.png":Du,"../assets/img/cat29.png":xu,"../assets/img/cat3.png":Nu,"../assets/img/cat30.png":Mu,"../assets/img/cat4.png":Ou,"../assets/img/cat5.png":Vu,"../assets/img/cat6.png":Lu,"../assets/img/cat7.png":Bu,"../assets/img/cat8.png":Fu,"../assets/img/cat9.png":Uu,"../assets/img/catProfile01.png":$u,"../assets/img/catProfile02.png":Hu,"../assets/img/cat_ico.png":ju})[`../assets/img/cat${G}.png`],import.meta.url).href}catch{return`/src/assets/img/cat${G}.png`}},K=G=>{try{return new URL(Object.assign({"../assets/img/tul1.png":o1,"../assets/img/tul2.png":a1,"../assets/img/tul3.png":l1,"../assets/img/tul5.png":c1,"../assets/img/tul6.png":u1})[`../assets/img/tul${G}.png`],import.meta.url).href}catch{return`/src/assets/img/tul${G}.png`}},z=G=>{const k=p.value.findIndex(H=>H.id===G);k>-1&&p.value.splice(k,1)},ee=D([null,null,null,null,null,null]),J=D(!1),W=D(-1),Z=D([]),ge=()=>{const G=new Set;return ee.value.forEach(k=>{k&&k.id&&G.add(k.id)}),$e.value.forEach(k=>{k&&k.id&&G.add(k.id)}),He.value.forEach(k=>{k&&k.id&&G.add(k.id)}),qe.value.forEach(k=>{k&&k.id&&G.add(k.id)}),G},oe=()=>{const G=ht();if(G){const k=G.gameData?.inventory||[],ie=[...[{id:1,name:"Robot",stars:1,level:1,imageId:1},{id:2,name:"Style",stars:1,level:1,imageId:2},{id:3,name:"Suit",stars:1,level:1,imageId:3},{id:4,name:"Tech",stars:1,level:1,imageId:4},{id:5,name:"Army",stars:1,level:1,imageId:5},{id:6,name:"Detective",stars:1,level:1,imageId:6},{id:7,name:"Scholar",stars:1,level:1,imageId:7},{id:8,name:"White",stars:1,level:1,imageId:8},{id:9,name:"Green",stars:1,level:1,imageId:9},{id:10,name:"Blue",stars:1,level:1,imageId:10},{id:11,name:"Red",stars:1,level:1,imageId:11},{id:12,name:"Shirt",stars:1,level:1,imageId:12},{id:13,name:"Ninja",stars:1,level:1,imageId:13},{id:14,name:"Knight",stars:1,level:1,imageId:14},{id:15,name:"Pirate",stars:1,level:1,imageId:15},{id:16,name:"Sailor",stars:1,level:1,imageId:16},{id:17,name:"Sport",stars:1,level:1,imageId:17},{id:18,name:"Cafe",stars:1,level:1,imageId:18},{id:19,name:"Chef",stars:1,level:1,imageId:19},{id:20,name:"Fisher",stars:1,level:1,imageId:20},{id:21,name:"Farmer",stars:1,level:1,imageId:21},{id:22,name:"Doctor",stars:1,level:1,imageId:22},{id:23,name:"Teacher",stars:1,level:1,imageId:23},{id:24,name:"Artist",stars:1,level:1,imageId:24}]];k.forEach(De=>{const Be=ie.findIndex(at=>at.id===De.id);Be>-1?ie[Be]={...ie[Be],...De}:ie.push(De)});const le=ge(),re=de();re&&re.id&&le.delete(re.id),Z.value=ie.filter(De=>!le.has(De.id))}},de=()=>{const G=Ye.value,k=W.value;if(k<0||k>=6)return null;let H=null;return G==="mining"?H=ee.value:G==="hunting"?H=$e.value:G==="exploration"?H=He.value:G==="production"&&(H=qe.value),H&&H[k]?H[k]:null},pe=(G,k,H)=>{Ye.value=k,oe(),W.value=G,J.value=!0},ke=G=>{if(W.value>=0&&W.value<6){const k={id:G.id,level:G.level||1,stars:G.stars||1,imageId:G.imageId||G.id,name:G.name};let H=[];Ye.value==="mining"?H=ee.value:Ye.value==="hunting"?H=$e.value:Ye.value==="exploration"?H=He.value:Ye.value==="production"&&(H=qe.value);const ie=H.findIndex((re,De)=>re&&re.id===G.id&&De!==W.value);if(ie!==-1){H[ie]=null;const re=Ye.value,De=`${re}_${ie}_${G.id}`;Et.value[re][De]&&delete Et.value[re][De]}Ye.value==="mining"?(ee.value[W.value]=k,Fe("mining")):Ye.value==="hunting"?($e.value[W.value]=k,Fe("hunting")):Ye.value==="exploration"?(He.value[W.value]=k,Fe("exploration")):Ye.value==="production"&&(qe.value[W.value]=k,Fe("production"));const le=ht();le&&Mt(le.id,{miningCats:ee.value,huntingCats:$e.value,explorationCats:He.value,productionCats:qe.value})}J.value=!1,W.value=-1,Ye.value="mining"},Ge=()=>{if(W.value>=0&&W.value<6){const G=Ye.value;let k=[];G==="mining"?k=ee.value:G==="hunting"?k=$e.value:G==="exploration"?k=He.value:G==="production"&&(k=qe.value);const H=k[W.value];if(G==="mining"?(ee.value[W.value]=null,Fe("mining")):G==="hunting"?($e.value[W.value]=null,Fe("hunting")):G==="exploration"?(He.value[W.value]=null,Fe("exploration")):G==="production"&&(qe.value[W.value]=null,Fe("production")),H&&H.id){const le=`${G}_${W.value}_${H.id}`;Et.value[G][le]&&delete Et.value[G][le]}const ie=ht();ie&&Mt(ie.id,{miningCats:ee.value,huntingCats:$e.value,explorationCats:He.value,productionCats:qe.value})}J.value=!1,W.value=-1,Ye.value="mining"},Ne=()=>{J.value=!1,W.value=-1,Ye.value="mining"},$e=D([null,null,null,null,null,null]),He=D([null,null,null,null,null,null]),qe=D([null,null,null,null,null,null]),Ye=D("mining"),wt=D({mining:null,hunting:null,exploration:null,production:null}),Et=D({mining:{},hunting:{},exploration:{},production:{}}),Fe=G=>{wt.value[G]&&(clearInterval(wt.value[G]),wt.value[G]=null);let k=[];G==="mining"?k=ee.value:G==="hunting"?k=$e.value:G==="exploration"?k=He.value:G==="production"&&(k=qe.value);const H=k.filter(ie=>ie!==null);H.length!==0&&(H.forEach((ie,le)=>{const re=`${G}_${le}_${ie.id}`;Et.value[G][re]||(Et.value[G][re]=0)}),wt.value[G]=setInterval(()=>{let ie=[];G==="mining"?ie=ee.value:G==="hunting"?ie=$e.value:G==="exploration"?ie=He.value:G==="production"&&(ie=qe.value);const le=ie.filter(at=>at!==null);if(le.length===0){yt(G);return}const De={mining:"채굴",hunting:"사냥",exploration:"탐험",production:"생산"}[G]||"작업";let Be=[];G==="mining"?Be=ee.value:G==="hunting"?Be=$e.value:G==="exploration"?Be=He.value:G==="production"&&(Be=qe.value),le.forEach(at=>{const on=Be.findIndex(lt=>lt&&lt.id===at.id);if(on===-1)return;const Ze=`${G}_${on}_${at.id}`;Et.value[G][Ze]||(Et.value[G][Ze]=0),Et.value[G][Ze]+=1;const Ht=Et.value[G][Ze],jt=Math.min(window.innerWidth||500,500),Me=window.innerHeight||800,At=220,yn=60,Bt=20;if(Ht>=10){r.value+=100,o.value=r.value,Et.value[G][Ze]=0,consumePlanetEnergy();const lt=Math.random();let ct=0;if(lt<.3?ct=1:lt<.4&&(ct=2),ct>0&&(u.value+=ct,i.value===G))for(let Je=0;Je<ct;Je++){const Dt=Math.floor(Math.random()*6)+1,an=60,ti=30,ki={id:Date.now()+Je+on*1e3,x:Math.random()*(jt-an-ti*2)+ti,y:Math.random()*(Me-an-ti*2-200)+100,imageId:Dt};p.value.push(ki),setTimeout(()=>{const _r=p.value.findIndex(Al=>Al.id===ki.id);_r>-1&&p.value.splice(_r,1)},2e3)}if(s.value&&Mt(s.value.id,{coins:r.value,catFragments:u.value}),i.value===G){const Je={id:Date.now()+on+at.id*1e4,text:`${De} 완료! 100원 획득!`,x:Math.random()*(jt-At-Bt*2)+Bt,y:Math.random()*(Me-yn-Bt*2-200)+100};d.value.push(Je),setTimeout(()=>{const Dt=d.value.findIndex(an=>an.id===Je.id);Dt>-1&&d.value.splice(Dt,1)},3e3)}}else if(i.value===G){const lt={id:Date.now()+on+at.id*1e3+Ht*100,text:`${De} 진행: ${Ht}/10`,x:Math.random()*(jt-At-Bt*2)+Bt,y:Math.random()*(Me-yn-Bt*2-200)+100};d.value.push(lt),setTimeout(()=>{const ct=d.value.findIndex(Je=>Je.id===lt.id);ct>-1&&d.value.splice(ct,1)},2e3)}})},1e3))},yt=G=>{wt.value[G]&&(clearInterval(wt.value[G]),wt.value[G]=null)},ei=()=>{Object.keys(wt.value).forEach(G=>{yt(G)})};return gs(r,G=>{o.value=G}),gs([ee,$e,He,qe],()=>{["mining","hunting","exploration","production"].forEach(k=>{let H=[];k==="mining"?H=ee.value:k==="hunting"?H=$e.value:k==="exploration"?H=He.value:k==="production"&&(H=qe.value);const ie=H.map((le,re)=>le?`${k}_${re}_${le.id}`:null).filter(le=>le!==null);Object.keys(Et.value[k]).forEach(le=>{ie.includes(le)||delete Et.value[k][le]})}),Fe("mining"),Fe("hunting"),Fe("exploration"),Fe("production")},{deep:!0}),D(0),D(!1),D([{name:"슬라임",level:1,hp:100,maxHp:100,exp:10,gold:5},{name:"고블린",level:2,hp:150,maxHp:150,exp:20,gold:10},{name:"오크",level:3,hp:200,maxHp:200,exp:35,gold:20}]),D(null),D({level:1,exp:0,maxExp:100,hp:100,maxHp:100,attack:20}),D(0),D(!1),D(null),D([{name:"신비한 숲",level:1,difficulty:"쉬움",rewards:["나무","열매","약초"],description:"평화로운 숲에서 기본 자원을 수집할 수 있습니다.",discovered:!0},{name:"고대 유적",level:2,difficulty:"보통",rewards:["고대 유물","마법석","보석"],description:"신비한 힘이 깃든 고대 유적지입니다.",discovered:!1},{name:"용의 동굴",level:3,difficulty:"어려움",rewards:["용의 비늘","마나 크리스탈","희귀 보석"],description:"위험하지만 귀중한 보물이 숨겨진 곳입니다.",discovered:!1}]),D({wood:0,fruit:0,herb:0,artifact:0,magicStone:0,gem:0,dragonScale:0,manaCrystal:0,rareGem:0}),D(0),D(!1),D(null),D({wood:10,stone:5,iron:3,gold:1,diamond:0,herb:8,fruit:12}),D([{id:"woodenSword",name:"나무 검",level:1,materials:{wood:5,stone:2},result:{woodenSword:1},time:30,description:"기본적인 나무 검입니다."},{id:"ironSword",name:"철 검",level:2,materials:{wood:3,iron:5,stone:3},result:{ironSword:1},time:60,description:"강력한 철 검입니다."},{id:"healthPotion",name:"체력 포션",level:1,materials:{herb:3,fruit:2},result:{healthPotion:1},time:20,description:"체력을 회복시켜주는 포션입니다."}]),D({woodenSword:0,ironSword:0,healthPotion:0}),(G,k)=>(O(),V("div",U1,[we(fn,{coinCount:r.value,currentEnergy:ot.value,maxEnergy:q.value,totalCoin:l.value,catCount:c.value},null,8,["coinCount","currentEnergy","maxEnergy","totalCoin","catCount"]),h("main",$1,[i.value==="main"?(O(),V("article",H1,[h("div",j1,[h("div",G1,[k[14]||(k[14]=h("div",{class:"statLabel"},"총 포인트",-1)),h("div",q1,[k[13]||(k[13]=h("div",{class:"iconCircle pointIcon"},[h("img",{src:h1,alt:"P"})],-1)),h("span",Q1,B(e(o.value)),1)])]),k[17]||(k[17]=h("div",{class:"divider"},null,-1)),h("div",z1,[k[16]||(k[16]=h("div",{class:"statLabel"},"총코인",-1)),h("div",W1,[k[15]||(k[15]=h("div",{class:"iconCircle coinIcon"},[h("img",{src:vm,alt:"C"})],-1)),h("span",K1,B(e(l.value)),1)])])]),h("div",Y1,[h("div",{class:"modeCard miningCard",onClick:k[0]||(k[0]=H=>rt("mining"))},[k[18]||(k[18]=h("div",{class:"mainmenuBtns"},null,-1)),k[19]||(k[19]=h("div",{class:"modeTitle"},"채굴",-1)),h("div",J1,"Level "+B(String(b.value).padStart(2,"0")),1)]),h("div",{class:"modeCard huntingCard",onClick:k[1]||(k[1]=H=>rt("hunting"))},[k[20]||(k[20]=h("div",{class:"mainmenuBtns"},null,-1)),k[21]||(k[21]=h("div",{class:"modeTitle"},"사냥",-1)),h("div",X1,"Level "+B(String(R.value).padStart(2,"0")),1)]),h("div",{class:"modeCard explorationCard",onClick:k[2]||(k[2]=H=>rt("exploration"))},[k[22]||(k[22]=h("div",{class:"mainmenuBtns"},null,-1)),k[23]||(k[23]=h("div",{class:"modeTitle"},"탐험",-1)),h("div",Z1,"Level "+B(String(se.value).padStart(2,"0")),1)]),h("div",{class:"modeCard productionCard",onClick:k[3]||(k[3]=H=>rt("production"))},[k[24]||(k[24]=h("div",{class:"mainmenuBtns"},null,-1)),k[25]||(k[25]=h("div",{class:"modeTitle"},"생산",-1)),h("div",eE,"Level "+B(String(Ce.value).padStart(2,"0")),1)])])])):he("",!0),i.value==="mining"?(O(),V("div",tE,[h("div",nE,[h("button",{class:"backBtn",onClick:k[4]||(k[4]=H=>rt("main"))},"← 뒤로")]),h("div",sE,B(e(o.value)),1),h("div",iE,[x.value&&!w.value?(O(),V("button",{key:0,onClick:k[5]||(k[5]=H=>Yt("mining")),class:Re(["clickerBtn miningBtn",{"mining-active":_.value>0}])},null,2)):he("",!0),w.value?(O(),V("div",rE,[k[26]||(k[26]=h("div",{class:"completeMessageText"},"채굴 완료!",-1)),h("div",oE,[h("div",aE,B(U.value.points.toLocaleString())+"point 획득!",1),U.value.fragments>0?(O(),V("div",lE,"고양이 파편 "+B(U.value.fragments)+"개 획득!",1)):he("",!0)])])):he("",!0)]),h("div",cE,[h("div",uE,[k[27]||(k[27]=h("span",{class:"energyIcon"},"⚡",-1)),h("span",hE,B(te.value.toLocaleString())+"/"+B(ue.value.toLocaleString()),1)]),h("div",dE,[h("div",{class:"energyFill",style:Ct({width:te.value/ue.value*100+"%"})},null,4)])]),h("div",fE,[k[30]||(k[30]=h("div",{class:"catsListLabel"},"채굴 냥이 목록",-1)),h("div",pE,[(O(!0),V(Se,null,je(ee.value,(H,ie)=>(O(),V("div",{key:ie,class:Re(["catCard",{emptySlot:!H,working:H&&i.value==="mining"}]),onClick:le=>pe(ie,"mining")},[H?(O(),V("div",mE,"Lv "+B(String(H.level).padStart(2,"0")),1)):he("",!0),H?(O(),V("div",_E,[h("img",{src:Q(H.imageId),alt:"고양이"},null,8,vE)])):he("",!0),H?(O(),V("div",yE,[(O(!0),V(Se,null,je(H.stars,le=>(O(),V("span",{key:le,class:"star"},[...k[28]||(k[28]=[h("img",{src:"",alt:""},null,-1)])]))),128))])):he("",!0),H?he("",!0):(O(),V("div",AE,[...k[29]||(k[29]=[h("span",{class:"emptySlotText"},"+",-1)])]))],10,gE))),128))])])])):he("",!0),i.value==="hunting"?(O(),V("div",IE,[h("div",wE,[h("button",{class:"backBtn",onClick:k[6]||(k[6]=H=>rt("main"))},"← 뒤로")]),h("div",EE,B(e(o.value)),1),h("div",TE,[E.value&&!N.value?(O(),V("button",{key:0,onClick:k[7]||(k[7]=H=>Yt("hunting")),class:Re(["clickerBtn huntingBtn",{"hunting-active":T.value>0}])},null,2)):he("",!0),N.value?(O(),V("div",CE,[k[31]||(k[31]=h("div",{class:"completeMessageText"},"사냥 완료!",-1)),h("div",bE,[h("div",SE,B(st.value.points.toLocaleString())+"point 획득!",1),st.value.fragments>0?(O(),V("div",RE,"고양이 파편 "+B(st.value.fragments)+"개 획득!",1)):he("",!0)])])):he("",!0)]),h("div",PE,[h("div",kE,[k[32]||(k[32]=h("span",{class:"energyIcon"},"⚡",-1)),h("span",DE,B(te.value.toLocaleString())+"/"+B(ue.value.toLocaleString()),1)]),h("div",xE,[h("div",{class:"energyFill",style:Ct({width:te.value/ue.value*100+"%"})},null,4)])]),h("div",NE,[k[35]||(k[35]=h("div",{class:"catsListLabel"},"사냥 냥이 목록",-1)),h("div",ME,[(O(!0),V(Se,null,je($e.value,(H,ie)=>(O(),V("div",{key:ie,class:Re(["catCard",{emptySlot:!H,working:H&&i.value==="hunting"}]),onClick:le=>pe(ie,"hunting")},[H?(O(),V("div",VE,"Lv "+B(String(H.level).padStart(2,"0")),1)):he("",!0),H?(O(),V("div",LE,[h("img",{src:Q(H.imageId),alt:"고양이"},null,8,BE)])):he("",!0),H?(O(),V("div",FE,[(O(!0),V(Se,null,je(H.stars,le=>(O(),V("span",{key:le,class:"star"},[...k[33]||(k[33]=[h("img",{src:"",alt:""},null,-1)])]))),128))])):he("",!0),H?he("",!0):(O(),V("div",UE,[...k[34]||(k[34]=[h("span",{class:"emptySlotText"},"+",-1)])]))],10,OE))),128))])])])):he("",!0),i.value==="exploration"?(O(),V("div",$E,[h("div",HE,[h("button",{class:"backBtn",onClick:k[8]||(k[8]=H=>rt("main"))},"← 뒤로")]),h("div",jE,B(e(o.value)),1),h("div",GE,[S.value&&!Ie.value?(O(),V("button",{key:0,onClick:k[9]||(k[9]=H=>Yt("exploration")),class:Re(["clickerBtn explorationBtn",{"exploration-active":F.value>0}])},null,2)):he("",!0),Ie.value?(O(),V("div",qE,[k[36]||(k[36]=h("div",{class:"completeMessageText"},"탐험 완료!",-1)),h("div",QE,[h("div",zE,B(A.value.points.toLocaleString())+"point 획득!",1),A.value.fragments>0?(O(),V("div",WE,"고양이 파편 "+B(A.value.fragments)+"개 획득!",1)):he("",!0)])])):he("",!0)]),h("div",KE,[h("div",YE,[k[37]||(k[37]=h("span",{class:"energyIcon"},"⚡",-1)),h("span",JE,B(te.value.toLocaleString())+"/"+B(ue.value.toLocaleString()),1)]),h("div",XE,[h("div",{class:"energyFill",style:Ct({width:te.value/ue.value*100+"%"})},null,4)])]),h("div",ZE,[k[40]||(k[40]=h("div",{class:"catsListLabel"},"탐험 냥이 목록",-1)),h("div",eT,[(O(!0),V(Se,null,je(He.value,(H,ie)=>(O(),V("div",{key:ie,class:Re(["catCard",{emptySlot:!H,working:H&&i.value==="exploration"}]),onClick:le=>pe(ie,"exploration")},[H?(O(),V("div",nT,"Lv "+B(String(H.level).padStart(2,"0")),1)):he("",!0),H?(O(),V("div",sT,[h("img",{src:Q(H.imageId),alt:"고양이"},null,8,iT)])):he("",!0),H?(O(),V("div",rT,[(O(!0),V(Se,null,je(H.stars,le=>(O(),V("span",{key:le,class:"star"},[...k[38]||(k[38]=[h("img",{src:"",alt:""},null,-1)])]))),128))])):he("",!0),H?he("",!0):(O(),V("div",oT,[...k[39]||(k[39]=[h("span",{class:"emptySlotText"},"+",-1)])]))],10,tT))),128))])])])):he("",!0),i.value==="production"?(O(),V("div",aT,[h("div",lT,[h("button",{class:"backBtn",onClick:k[10]||(k[10]=H=>rt("main"))},"← 뒤로")]),h("div",cT,B(e(o.value)),1),h("div",uT,[kt.value&&!be.value?(O(),V("button",{key:0,onClick:k[11]||(k[11]=H=>Yt("production")),class:Re(["clickerBtn productionBtn",{"production-active":vt.value>0}])},null,2)):he("",!0),be.value?(O(),V("div",hT,[k[41]||(k[41]=h("div",{class:"completeMessageText"},"생산 완료!",-1)),h("div",dT,[h("div",fT,B(Kt.value.points.toLocaleString())+"point 획득!",1),Kt.value.fragments>0?(O(),V("div",pT,"고양이 파편 "+B(Kt.value.fragments)+"개 획득!",1)):he("",!0)])])):he("",!0)]),h("div",gT,[h("div",mT,[k[42]||(k[42]=h("span",{class:"energyIcon"},"⚡",-1)),h("span",_T,B(te.value.toLocaleString())+"/"+B(ue.value.toLocaleString()),1)]),h("div",vT,[h("div",{class:"energyFill",style:Ct({width:te.value/ue.value*100+"%"})},null,4)])]),h("div",yT,[k[45]||(k[45]=h("div",{class:"catsListLabel"},"생산 냥이 목록",-1)),h("div",AT,[(O(!0),V(Se,null,je(qe.value,(H,ie)=>(O(),V("div",{key:ie,class:Re(["catCard",{emptySlot:!H,working:H&&i.value==="production"}]),onClick:le=>pe(ie,"production")},[H?(O(),V("div",wT,"Lv "+B(String(H.level).padStart(2,"0")),1)):he("",!0),H?(O(),V("div",ET,[h("img",{src:Q(H.imageId),alt:"고양이"},null,8,TT)])):he("",!0),H?(O(),V("div",CT,[(O(!0),V(Se,null,je(H.stars,le=>(O(),V("span",{key:le,class:"star"},[...k[43]||(k[43]=[h("img",{src:"",alt:""},null,-1)])]))),128))])):he("",!0),H?he("",!0):(O(),V("div",bT,[...k[44]||(k[44]=[h("span",{class:"emptySlotText"},"+",-1)])]))],10,IT))),128))])])])):he("",!0)]),we(pn),i.value!=="main"?(O(),V("div",ST,[(O(!0),V(Se,null,je(d.value,H=>(O(),V("div",{key:H.id,class:"speechBubble",style:Ct({left:H.x+"px",top:H.y+"px",transform:"translateX(-50%)"})},B(H.text),5))),128))])):he("",!0),i.value!=="main"?(O(),V("div",RT,[(O(!0),V(Se,null,je(p.value,H=>(O(),V("div",{key:H.id,class:"catEmoji",style:Ct({left:H.x+"px",top:H.y+"px"})},[h("img",{src:K(H.imageId),alt:"",class:"tulImage",onError:ie=>z(H.id)},null,40,PT)],4))),128))])):he("",!0),J.value?(O(),V("div",{key:2,class:"catSelectPopupOverlay",onClick:Ne},[h("div",{class:"catSelectPopupContent",onClick:k[12]||(k[12]=Gr(()=>{},["stop"]))},[h("div",{class:"catSelectPopupHeader"},[k[46]||(k[46]=h("h3",null,"고양이 선택",-1)),h("button",{class:"closePopupBtn",onClick:Ne},"×")]),h("div",kT,[de()?(O(),V("div",DT,[h("button",{class:"removeCatBtn",onClick:Ge}," 고양이 제거 ")])):he("",!0),h("div",xT,[(O(!0),V(Se,null,je(Z.value,H=>(O(),V("div",{key:H.id,class:"availableCatCard",onClick:ie=>ke(H)},[h("div",MT,[h("img",{src:Q(H.imageId||H.id),alt:"고양이"},null,8,OT)]),h("div",VT,[h("div",LT,B(H.name),1),h("div",BT,"Lv "+B(String(H.level||1).padStart(2,"0")),1),h("div",FT,[(O(!0),V(Se,null,je(H.stars||1,ie=>(O(),V("span",{key:ie,class:"star"},"★"))),128))])])],8,NT))),128))])])])])):he("",!0)]))}},$T=Pt(UT,[["__scopeId","data-v-a1ce1a95"]]),HT={class:"miningPage"},jT={class:"mainContent"},GT={class:"miningContainer"},qT={class:"pageHeader"},QT={class:"levelInfo"},zT={class:"miningProgress"},WT={class:"progressBar"},KT={class:"progressText"},YT=["disabled"],JT={key:0},XT={key:1},ZT={class:"resources"},eC={class:"resourceList"},tC={class:"resourceItem"},nC={class:"resourceItem"},sC={class:"resourceItem"},iC={class:"resourceItem"},rC={__name:"MiningPage",setup(t){const e=dn(),n=D(0);Rt(()=>{const c=ht();c&&(n.value=c.gameData?.coins||0)});const s=D(1),i=D(0),r=D(!1),o=D({stone:0,iron:0,gold:0,diamond:0}),l=()=>{if(r.value)return;r.value=!0,i.value=0;const c=setInterval(()=>{if(i.value+=10,i.value>=100){clearInterval(c),r.value=!1,i.value=0;const u=Math.random();u<.4?o.value.stone++:u<.7?o.value.iron++:u<.9?o.value.gold++:o.value.diamond++}},200)};return(c,u)=>(O(),V("div",HT,[we(fn,{coinCount:n.value},null,8,["coinCount"]),h("main",jT,[h("div",GT,[h("div",qT,[h("button",{class:"backBtn",onClick:u[0]||(u[0]=d=>zt(e).push("/main"))},"← 뒤로"),u[1]||(u[1]=h("h2",null,"⛏️ 채굴",-1))]),h("div",QT,[h("span",null,"채굴 레벨: "+B(s.value),1)]),h("div",zT,[h("div",WT,[h("div",{class:"progressFill",style:Ct({width:i.value+"%"})},null,4)]),h("span",KT,B(i.value)+"%",1)]),h("button",{class:Re(["miningBtn",{mining:r.value}]),onClick:l,disabled:r.value},[r.value?(O(),V("span",XT,"⛏️ 채굴 중...")):(O(),V("span",JT,"⛏️ 채굴 시작"))],10,YT),h("div",ZT,[u[6]||(u[6]=h("h3",null,"보유 자원",-1)),h("div",eC,[h("div",tC,[u[2]||(u[2]=h("span",null,"🪨 돌",-1)),h("span",null,B(o.value.stone),1)]),h("div",nC,[u[3]||(u[3]=h("span",null,"⚒️ 철",-1)),h("span",null,B(o.value.iron),1)]),h("div",sC,[u[4]||(u[4]=h("span",null,"🥇 금",-1)),h("span",null,B(o.value.gold),1)]),h("div",iC,[u[5]||(u[5]=h("span",null,"💎 다이아몬드",-1)),h("span",null,B(o.value.diamond),1)])])])])]),we(pn)]))}},oC=Pt(rC,[["__scopeId","data-v-17eb7d34"]]),aC={class:"huntingPage"},lC={class:"mainContent"},cC={class:"huntingContainer"},uC={class:"pageHeader"},hC={class:"playerStats"},dC={class:"statsGrid"},fC={class:"statItem"},pC={class:"statItem"},gC={class:"statItem"},mC={class:"statItem"},_C={class:"monsterSelection"},vC={class:"monsterList"},yC=["onClick"],AC={class:"monsterInfo"},IC={class:"monsterName"},wC={class:"monsterLevel"},EC={class:"monsterRewards"},TC={key:0,class:"currentMonster"},CC={class:"monsterHp"},bC={class:"hpBar"},SC={class:"hpText"},RC={class:"huntingProgress"},PC={class:"progressBar"},kC={class:"progressText"},DC=["disabled"],xC={key:0},NC={key:1},MC={__name:"HuntingPage",setup(t){const e=dn(),n=D(0);Rt(()=>{const d=ht();d&&(n.value=d.gameData?.coins||0)}),D(1);const s=D(0),i=D(!1),r=D([{name:"슬라임",level:1,hp:100,maxHp:100,exp:10,gold:5},{name:"고블린",level:2,hp:150,maxHp:150,exp:20,gold:10},{name:"오크",level:3,hp:200,maxHp:200,exp:35,gold:20}]),o=D(null),l=D({level:1,exp:0,maxExp:100,hp:100,maxHp:100,attack:20}),c=d=>{o.value={...d}},u=()=>{if(!o.value||i.value)return;i.value=!0,s.value=0;const d=setInterval(()=>{const p=Math.floor(Math.random()*l.value.attack)+10;o.value.hp-=p,o.value.hp<=0?(clearInterval(d),i.value=!1,s.value=100,l.value.exp+=o.value.exp,l.value.hp=l.value.maxHp,l.value.exp>=l.value.maxExp&&(l.value.level++,l.value.exp=0,l.value.maxExp=Math.floor(l.value.maxExp*1.5),l.value.attack+=5,l.value.maxHp+=20,l.value.hp=l.value.maxHp),setTimeout(()=>{o.value=null,s.value=0},2e3)):s.value=(o.value.maxHp-o.value.hp)/o.value.maxHp*100},500)};return(d,p)=>(O(),V("div",aC,[we(fn,{coinCount:n.value},null,8,["coinCount"]),h("main",lC,[h("div",cC,[h("div",uC,[h("button",{class:"backBtn",onClick:p[0]||(p[0]=m=>zt(e).push("/main"))},"← 뒤로"),p[1]||(p[1]=h("h2",null,"⚔️ 사냥",-1))]),h("div",hC,[p[6]||(p[6]=h("h3",null,"플레이어 정보",-1)),h("div",dC,[h("div",fC,[p[2]||(p[2]=h("span",null,"레벨",-1)),h("span",null,B(l.value.level),1)]),h("div",pC,[p[3]||(p[3]=h("span",null,"체력",-1)),h("span",null,B(l.value.hp)+"/"+B(l.value.maxHp),1)]),h("div",gC,[p[4]||(p[4]=h("span",null,"공격력",-1)),h("span",null,B(l.value.attack),1)]),h("div",mC,[p[5]||(p[5]=h("span",null,"경험치",-1)),h("span",null,B(l.value.exp)+"/"+B(l.value.maxExp),1)])])]),h("div",_C,[p[7]||(p[7]=h("h3",null,"몬스터 선택",-1)),h("div",vC,[(O(!0),V(Se,null,je(r.value,m=>(O(),V("div",{key:m.name,class:Re(["monsterCard",{selected:o.value?.name===m.name}]),onClick:_=>c(m)},[h("div",AC,[h("span",IC,B(m.name),1),h("span",wC,"Lv."+B(m.level),1)]),h("div",EC,[h("span",null,"EXP: "+B(m.exp),1),h("span",null,"Gold: "+B(m.gold),1)])],10,yC))),128))])]),o.value?(O(),V("div",TC,[h("h3",null,B(o.value.name)+" (Lv."+B(o.value.level)+")",1),h("div",CC,[h("div",bC,[h("div",{class:"hpFill",style:Ct({width:o.value.hp/o.value.maxHp*100+"%"})},null,4)]),h("span",SC,B(o.value.hp)+"/"+B(o.value.maxHp),1)]),h("div",RC,[h("div",PC,[h("div",{class:"progressFill",style:Ct({width:s.value+"%"})},null,4)]),h("span",kC,B(Math.floor(s.value))+"%",1)]),h("button",{class:Re(["huntingBtn",{hunting:i.value}]),onClick:u,disabled:i.value},[i.value?(O(),V("span",NC,"⚔️ 사냥 중...")):(O(),V("span",xC,"⚔️ 사냥 시작"))],10,DC)])):he("",!0)])]),we(pn)]))}},OC=Pt(MC,[["__scopeId","data-v-9c82efe6"]]),VC={class:"explorationPage"},LC={class:"mainContent"},BC={class:"explorationContainer"},FC={class:"pageHeader"},UC={class:"levelInfo"},$C={class:"locationSelection"},HC={class:"locationList"},jC=["onClick"],GC={class:"locationInfo"},qC={class:"locationHeader"},QC={class:"locationName"},zC={class:"locationLevel"},WC={class:"locationDifficulty"},KC={class:"locationDescription"},YC={class:"locationRewards"},JC={key:0,class:"undiscoveredOverlay"},XC={key:0,class:"currentExploration"},ZC={class:"explorationProgress"},eb={class:"progressBar"},tb={class:"progressText"},nb=["disabled"],sb={key:0},ib={key:1},rb={class:"explorationRewards"},ob={class:"rewardsGrid"},ab={class:"rewardIcon"},lb={class:"rewardAmount"},cb={__name:"ExplorationPage",setup(t){const e=dn(),n=D(0);Rt(()=>{const p=ht();p&&(n.value=p.gameData?.coins||0)});const s=D(1),i=D(0),r=D(!1),o=D(null);D([]);const l=D([{name:"신비한 숲",level:1,difficulty:"쉬움",rewards:["나무","열매","약초"],description:"평화로운 숲에서 기본 자원을 수집할 수 있습니다.",discovered:!0},{name:"고대 유적",level:2,difficulty:"보통",rewards:["고대 유물","마법석","보석"],description:"신비한 힘이 깃든 고대 유적지입니다.",discovered:!1},{name:"용의 동굴",level:3,difficulty:"어려움",rewards:["용의 비늘","마나 크리스탈","희귀 보석"],description:"위험하지만 귀중한 보물이 숨겨진 곳입니다.",discovered:!1},{name:"천공의 섬",level:4,difficulty:"매우 어려움",rewards:["천공석","신비한 에너지","전설의 아이템"],description:"구름 위에 떠있는 신비한 섬입니다.",discovered:!1}]),c=D({wood:0,fruit:0,herb:0,artifact:0,magicStone:0,gem:0,dragonScale:0,manaCrystal:0,rareGem:0,skyStone:0,mysteriousEnergy:0,legendaryItem:0}),u=p=>{p.discovered&&(o.value=p)},d=()=>{if(!o.value||r.value)return;r.value=!0,i.value=0;const p=setInterval(()=>{if(i.value+=5,i.value>=100){clearInterval(p),r.value=!1,i.value=0;const m=Math.floor(Math.random()*o.value.rewards.length),_=o.value.rewards[m],I={나무:"wood",열매:"fruit",약초:"herb","고대 유물":"artifact",마법석:"magicStone",보석:"gem","용의 비늘":"dragonScale","마나 크리스탈":"manaCrystal","희귀 보석":"rareGem",천공석:"skyStone","신비한 에너지":"mysteriousEnergy","전설의 아이템":"legendaryItem"};if(I[_]&&c.value[I[_]]++,Math.random()<.3){const b=l.value.find(w=>!w.discovered);b&&(b.discovered=!0)}s.value++,setTimeout(()=>{o.value=null},2e3)}},300)};return(p,m)=>(O(),V("div",VC,[we(fn,{coinCount:n.value},null,8,["coinCount"]),h("main",LC,[h("div",BC,[h("div",FC,[h("button",{class:"backBtn",onClick:m[0]||(m[0]=_=>zt(e).push("/main"))},"← 뒤로"),m[1]||(m[1]=h("h2",null,"🗺️ 탐험",-1))]),h("div",UC,[h("span",null,"탐험 레벨: "+B(s.value),1)]),h("div",$C,[m[3]||(m[3]=h("h3",null,"탐험 지역",-1)),h("div",HC,[(O(!0),V(Se,null,je(l.value,_=>(O(),V("div",{key:_.name,class:Re(["locationCard",{selected:o.value?.name===_.name,undiscovered:!_.discovered}]),onClick:I=>u(_)},[h("div",GC,[h("div",qC,[h("span",QC,B(_.name),1),h("span",zC,"Lv."+B(_.level),1)]),h("span",WC,B(_.difficulty),1),h("p",KC,B(_.description),1),h("div",YC,[(O(!0),V(Se,null,je(_.rewards,I=>(O(),V("span",{key:I,class:"rewardTag"},B(I),1))),128))])]),_.discovered?he("",!0):(O(),V("div",JC,[...m[2]||(m[2]=[h("span",null,"🔒 미발견",-1)])]))],10,jC))),128))])]),o.value?(O(),V("div",XC,[h("h3",null,B(o.value.name)+" 탐험 중",1),h("div",ZC,[h("div",eb,[h("div",{class:"progressFill",style:Ct({width:i.value+"%"})},null,4)]),h("span",tb,B(i.value)+"%",1)]),h("button",{class:Re(["explorationBtn",{exploring:r.value}]),onClick:d,disabled:r.value},[r.value?(O(),V("span",ib,"🗺️ 탐험 중...")):(O(),V("span",sb,"🗺️ 탐험 시작"))],10,nb)])):he("",!0),h("div",rb,[m[4]||(m[4]=h("h3",null,"탐험 보상",-1)),h("div",ob,[(O(!0),V(Se,null,je(c.value,(_,I)=>ds((O(),V("div",{key:I,class:"rewardItem"},[h("span",ab,B(I==="wood"?"🪵":I==="fruit"?"🍎":I==="herb"?"🌿":I==="artifact"?"🏺":I==="magicStone"||I==="gem"?"💎":I==="dragonScale"?"🐉":I==="manaCrystal"?"🔮":I==="rareGem"?"💠":I==="skyStone"?"☁️":I==="mysteriousEnergy"?"✨":I==="legendaryItem"?"⭐":"🎁"),1),h("span",lb,B(_),1)])),[[em,_>0]])),128))])])])]),we(pn)]))}},ub=Pt(cb,[["__scopeId","data-v-f05b4431"]]),hb={class:"productionPage"},db={class:"mainContent"},fb={class:"productionContainer"},pb={class:"pageHeader"},gb={class:"levelInfo"},mb={class:"inventory"},_b={class:"inventoryGrid"},vb={class:"materialIcon"},yb={class:"materialName"},Ab={class:"materialAmount"},Ib={class:"recipes"},wb={class:"recipeList"},Eb=["onClick"],Tb={class:"recipeInfo"},Cb={class:"recipeHeader"},bb={class:"recipeName"},Sb={class:"recipeLevel"},Rb={class:"recipeDescription"},Pb={class:"recipeMaterials"},kb={class:"recipeTime"},Db={key:0,class:"currentProduction"},xb={class:"productionProgress"},Nb={class:"progressBar"},Mb={class:"progressText"},Ob=["disabled"],Vb={key:0},Lb={key:1},Bb={class:"producedItems"},Fb={class:"itemsGrid"},Ub={class:"itemIcon"},$b={class:"itemName"},Hb={class:"itemAmount"},jb={__name:"ProductionPage",setup(t){const e=dn(),n=D(0);Rt(()=>{const _=ht();_&&(n.value=_.gameData?.coins||0)});const s=D(1),i=D(0),r=D(!1),o=D(null),l=D({wood:10,stone:5,iron:3,gold:1,diamond:0,herb:8,fruit:12}),c=D([{id:"woodenSword",name:"나무 검",level:1,materials:{wood:5,stone:2},result:{woodenSword:1},time:30,description:"기본적인 나무 검입니다."},{id:"ironSword",name:"철 검",level:2,materials:{wood:3,iron:5,stone:3},result:{ironSword:1},time:60,description:"강력한 철 검입니다."},{id:"goldenSword",name:"황금 검",level:3,materials:{iron:3,gold:8,diamond:1},result:{goldenSword:1},time:120,description:"매우 강력한 황금 검입니다."},{id:"healthPotion",name:"체력 포션",level:1,materials:{herb:3,fruit:2},result:{healthPotion:1},time:20,description:"체력을 회복시켜주는 포션입니다."},{id:"manaPotion",name:"마나 포션",level:2,materials:{herb:5,fruit:3,stone:1},result:{manaPotion:1},time:40,description:"마나를 회복시켜주는 포션입니다."},{id:"magicRing",name:"마법 반지",level:3,materials:{gold:5,diamond:2,herb:4},result:{magicRing:1},time:90,description:"마법력을 증폭시키는 반지입니다."}]),u=D({woodenSword:0,ironSword:0,goldenSword:0,healthPotion:0,manaPotion:0,magicRing:0}),d=_=>{Object.entries(_.materials).every(([b,w])=>l.value[b]>=w)&&_.level<=s.value&&(o.value=_)},p=()=>{if(!o.value||r.value)return;Object.entries(o.value.materials).forEach(([I,b])=>{l.value[I]-=b}),r.value=!0,i.value=0;const _=setInterval(()=>{i.value+=100/(o.value.time/.1),i.value>=100&&(clearInterval(_),r.value=!1,i.value=0,Object.entries(o.value.result).forEach(([I,b])=>{u.value[I]+=b}),Math.random()<.1&&s.value++,setTimeout(()=>{o.value=null},2e3))},100)},m=_=>Object.entries(_.materials).every(([b,w])=>l.value[b]>=w)&&_.level<=s.value;return(_,I)=>(O(),V("div",hb,[we(fn,{coinCount:n.value},null,8,["coinCount"]),h("main",db,[h("div",fb,[h("div",pb,[h("button",{class:"backBtn",onClick:I[0]||(I[0]=b=>zt(e).push("/main"))},"← 뒤로"),I[1]||(I[1]=h("h2",null,"🏭 생산",-1))]),h("div",gb,[h("span",null,"생산 레벨: "+B(s.value),1)]),h("div",mb,[I[2]||(I[2]=h("h3",null,"재료 보유량",-1)),h("div",_b,[(O(!0),V(Se,null,je(l.value,(b,w)=>(O(),V("div",{key:w,class:"inventoryItem"},[h("span",vb,B(w==="wood"?"🪵":w==="stone"?"🪨":w==="iron"?"⚒️":w==="gold"?"🥇":w==="diamond"?"💎":w==="herb"?"🌿":w==="fruit"?"🍎":"📦"),1),h("span",yb,B(w),1),h("span",Ab,B(b),1)]))),128))])]),h("div",Ib,[I[3]||(I[3]=h("h3",null,"제작 레시피",-1)),h("div",wb,[(O(!0),V(Se,null,je(c.value,b=>(O(),V("div",{key:b.id,class:Re(["recipeCard",{selected:o.value?.id===b.id,disabled:!m(b)}]),onClick:w=>d(b)},[h("div",Tb,[h("div",Cb,[h("span",bb,B(b.name),1),h("span",Sb,"Lv."+B(b.level),1)]),h("p",Rb,B(b.description),1),h("div",Pb,[(O(!0),V(Se,null,je(b.materials,(w,x)=>(O(),V("span",{key:x,class:"materialTag"},B(x)+" x"+B(w),1))),128))]),h("div",kb,[h("span",null,"⏱️ "+B(b.time)+"초",1)])])],10,Eb))),128))])]),o.value?(O(),V("div",Db,[h("h3",null,B(o.value.name)+" 제작 중",1),h("div",xb,[h("div",Nb,[h("div",{class:"progressFill",style:Ct({width:i.value+"%"})},null,4)]),h("span",Mb,B(Math.floor(i.value))+"%",1)]),h("button",{class:Re(["productionBtn",{producing:r.value}]),onClick:p,disabled:r.value},[r.value?(O(),V("span",Lb,"🏭 제작 중...")):(O(),V("span",Vb,"🏭 제작 시작"))],10,Ob)])):he("",!0),h("div",Bb,[I[4]||(I[4]=h("h3",null,"제작된 아이템",-1)),h("div",Fb,[(O(!0),V(Se,null,je(u.value,(b,w)=>ds((O(),V("div",{key:w,class:"itemCard"},[h("span",Ub,B(w==="woodenSword"?"🗡️":w==="ironSword"?"⚔️":w==="goldenSword"?"🏆":w==="healthPotion"?"🧪":w==="manaPotion"?"💊":w==="magicRing"?"💍":"📦"),1),h("span",$b,B(w),1),h("span",Hb,B(b),1)])),[[em,b>0]])),128))])])])]),we(pn)]))}},Gb=Pt(jb,[["__scopeId","data-v-2344037c"]]),qb={class:"exchangePage"},Qb={class:"mainContent"},zb={class:"tabs"},Wb={class:"infoCard"},Kb={class:"infoRow"},Yb={class:"value"},Jb={class:"infoRow"},Xb={class:"value"},Zb={class:"infoRow"},eS={class:"value"},tS={class:"inputCard"},nS={class:"inputLabel"},sS={class:"inputWrapper"},iS={key:0,class:"resultInfo"},rS={class:"resultRow"},oS={class:"resultValue"},aS=["disabled"],gf=1e3,lS={__name:"ExchangePage",setup(t){const e=D(null),n=D(0),s=D(0),i=D("buy"),r=D(""),o=Xe(()=>{if(!r.value)return 0;const u=parseFloat(r.value)||0;return Math.floor(u*gf)}),l=()=>{const u=ht();u&&(e.value=u,n.value=u.gameData?.coins||0,s.value=u.gameData?.totalCoin||0)},c=()=>{if(!e.value){alert("로그인이 필요합니다.");return}if(!r.value||parseFloat(r.value)<=0){alert("코인 수량을 입력해주세요.");return}const u=parseFloat(r.value),d=u;if(i.value==="buy"){const p=o.value;if(n.value<p){alert(`포인트가 부족합니다.
필요: ${p.toLocaleString()} Point
보유: ${n.value.toLocaleString()} Point`);return}const m=n.value-p,_=s.value+d;Ia(e.value.id,m,_)?(n.value=m,s.value=_,l(),window.dispatchEvent(new CustomEvent("userDataUpdated")),alert(`구매 완료!
${u} Coin 구매
사용한 Point: ${p.toLocaleString()}`),r.value=""):alert("거래 실패. 다시 시도해주세요.")}else{if(s.value<d){alert(`코인이 부족합니다.
필요: ${u} Coin
보유: ${s.value.toLocaleString()} Coin`);return}const p=o.value,m=n.value+p,_=s.value-d;Ia(e.value.id,m,_)?(n.value=m,s.value=_,l(),window.dispatchEvent(new CustomEvent("userDataUpdated")),alert(`판매 완료!
${u} Coin 판매
받은 Point: ${p.toLocaleString()}`),r.value=""):alert("거래 실패. 다시 시도해주세요.")}};return gs(i,()=>{r.value=""}),Rt(()=>{l()}),(u,d)=>(O(),V("div",qb,[we(fn,{coinCount:n.value},null,8,["coinCount"]),h("main",Qb,[h("div",zb,[h("button",{class:Re(["tab",{active:i.value==="buy"}]),onClick:d[0]||(d[0]=p=>i.value="buy")}," Coin 구매 ",2),h("button",{class:Re(["tab",{active:i.value==="sell"}]),onClick:d[1]||(d[1]=p=>i.value="sell")}," Coin 판매 ",2)]),h("div",Wb,[h("div",Kb,[d[3]||(d[3]=h("span",null,"보유 포인트",-1)),h("span",Yb,B(n.value.toLocaleString())+" P",1)]),h("div",Jb,[d[4]||(d[4]=h("span",null,"보유 코인",-1)),h("span",Xb,B(s.value.toLocaleString())+" C",1)]),h("div",Zb,[d[5]||(d[5]=h("span",null,"거래가",-1)),h("span",eS,"1 Coin = "+B(gf.toLocaleString())+" Point",1)])]),h("div",tS,[h("label",nS,B(i.value==="buy"?"구매할 코인 수량":"판매할 코인 수량"),1),h("div",sS,[ds(h("input",{type:"number","onUpdate:modelValue":d[2]||(d[2]=p=>r.value=p),placeholder:"예: 1",class:"amountInput",step:"0.01",min:"0"},null,512),[[pi,r.value]]),d[6]||(d[6]=h("span",{class:"unit"},"Coin",-1))]),r.value&&parseFloat(r.value)>0?(O(),V("div",iS,[h("div",rS,[h("span",null,B(i.value==="buy"?"필요 포인트":"받을 포인트"),1),h("span",oS,B(o.value.toLocaleString())+" P",1)])])):he("",!0)]),h("button",{class:"submitBtn",onClick:c,disabled:!r.value||parseFloat(r.value)<=0},B(i.value==="buy"?"구매하기":"판매하기"),9,aS)]),we(pn)]))}},cS=Pt(lS,[["__scopeId","data-v-212c7d26"]]),uS={class:"questPage"},hS={class:"mainContent"},dS={class:"filterTabs"},fS={class:"mainTabs"},pS={class:"questList"},gS={class:"questContent"},mS={class:"questInfo"},_S={class:"questTitle"},vS={class:"questDescription"},yS=["onClick"],AS={key:1,class:"completedBadge"},IS={key:2,class:"progressBar"},wS={class:"progressText"},ES={__name:"QuestPage",setup(t){const e=D(0),n=D("inProgress"),s=D("daily"),i=()=>new Date().toDateString(),r=()=>{const p=localStorage.getItem("questLastDate"),m=i();return p!==m?(localStorage.setItem("questLastDate",m),localStorage.removeItem("rewardedQuests"),!0):!1},o=()=>{const p=localStorage.getItem("rewardedQuests");return p?JSON.parse(p):[]},l=p=>{localStorage.setItem("rewardedQuests",JSON.stringify(p)),localStorage.setItem("questLastDate",i())},c=D([{id:1,title:"일일 채굴 10회",description:"오늘 하루 채굴을 10회 완료하세요",completed:!0,rewardReceived:!1,progress:10,total:10,type:"daily"},{id:2,title:"일일 사냥 5회",description:"몬스터를 5마리 처치하세요",completed:!0,rewardReceived:!1,progress:5,total:5,type:"daily"},{id:3,title:"일일 탐험 1회",description:"탐험 활동을 1회 완료하세요",completed:!1,rewardReceived:!1,progress:0,total:1,type:"daily"},{id:4,title:"일일 생산 3개",description:"아이템을 3개 이상 생산하세요",completed:!1,rewardReceived:!1,progress:1,total:3,type:"daily"},{id:5,title:"일일 코인 1,000 획득",description:"코인을 1,000개 이상 획득하세요",completed:!1,rewardReceived:!1,progress:650,total:1e3,type:"daily"},{id:6,title:"일일 레벨업 1회",description:"레벨을 1레벨 이상 올리세요",completed:!1,rewardReceived:!1,progress:.6,total:1,type:"daily"},{id:7,title:"일일 데일리 체크",description:"게임에 접속하여 일일 퀘스트를 확인하세요",completed:!0,rewardReceived:!1,progress:1,total:1,type:"daily"},{id:8,title:"일일 랜덤 상자 수집",description:"랜덤 상자를 2개 이상 수집하세요",completed:!1,rewardReceived:!1,progress:1,total:2,type:"daily"},{id:9,title:"주간 퀘스트: 채굴 마스터",description:"일주일간 채굴을 50회 완료하세요",completed:!1,rewardReceived:!1,progress:23,total:50,type:"weekly"},{id:10,title:"주간 퀘스트: 사냥꾼",description:"일주일 동안 몬스터를 100마리 처치하세요",completed:!1,rewardReceived:!1,progress:45,total:100,type:"weekly"},{id:11,title:"주간 퀘스트: 탐험가",description:"새로운 지역을 5곳 탐험하세요",completed:!0,rewardReceived:!1,progress:5,total:5,type:"weekly"},{id:12,title:"주간 퀘스트: 생산자",description:"아이템을 50개 이상 생산하세요",completed:!1,rewardReceived:!1,progress:28,total:50,type:"weekly"},{id:13,title:"주간 퀘스트: 코인 모으기",description:"코인을 5만개 이상 획득하세요",completed:!1,rewardReceived:!1,progress:32e3,total:5e4,type:"weekly"},{id:14,title:"주간 퀘스트: 레벨업 5",description:"레벨을 5레벨 이상 올리세요",completed:!1,rewardReceived:!1,progress:3,total:5,type:"weekly"},{id:15,title:"주간 퀘스트: 수집가",description:"다양한 보물을 20개 수집하세요",completed:!1,rewardReceived:!1,progress:12,total:20,type:"weekly"},{id:16,title:"주간 퀘스트: 종합 능력",description:"모든 활동을 각각 10회 이상 수행하세요",completed:!1,rewardReceived:!1,progress:35,total:40,type:"weekly"},{id:17,title:"월간 퀘스트: 코인왕",description:"이번 달 코인을 20만 개 이상 획득하세요",completed:!1,rewardReceived:!1,progress:95e3,total:2e5,type:"monthly"},{id:18,title:"월간 퀘스트: 극한 레벨업",description:"레벨을 20레벨 이상 올리세요",completed:!1,rewardReceived:!1,progress:15,total:20,type:"monthly"},{id:19,title:"월간 퀘스트: 완벽한 수집가",description:"보물을 100개 이상 수집하세요",completed:!1,rewardReceived:!1,progress:67,total:100,type:"monthly"},{id:20,title:"월간 퀘스트: 마스터 채굴러",description:"채굴을 500회 이상 완료하세요",completed:!1,rewardReceived:!1,progress:289,total:500,type:"monthly"},{id:21,title:"월간 퀘스트: 용사",description:"몬스터를 500마리 처치하세요",completed:!1,rewardReceived:!1,progress:234,total:500,type:"monthly"},{id:22,title:"월간 퀘스트: 대탐험가",description:"새로운 지역을 20곳 탐험하세요",completed:!1,rewardReceived:!1,progress:14,total:20,type:"monthly"},{id:23,title:"월간 퀘스트: 완벽한 제작자",description:"다양한 아이템을 200개 생산하세요",completed:!1,rewardReceived:!1,progress:123,total:200,type:"monthly"},{id:24,title:"월간 퀘스트: 최고 달성자",description:"이번 달 모든 활동을 완벽하게 수행하세요",completed:!0,rewardReceived:!1,progress:100,total:100,type:"monthly"}]),u=p=>{const m=c.value.find(_=>_.id===p);if(m&&m.completed&&!m.rewardReceived){m.rewardReceived=!0;const _=o();_.includes(p)||(_.push(p),l(_)),alert("보상 받기 완료!")}},d=Xe(()=>{let p=c.value.filter(m=>m.type===s.value);return n.value==="inProgress"?p=p.filter(m=>!m.completed||m.completed&&!m.rewardReceived):n.value==="completed"&&(p=p.filter(m=>m.completed&&m.rewardReceived)),p.sort((m,_)=>m.completed&&!m.rewardReceived&&(_.rewardReceived||!_.completed)?-1:(m.rewardReceived||!m.completed)&&_.completed&&!_.rewardReceived?1:0)});return Rt(()=>{const p=ht();p&&(e.value=p.gameData?.coins||0),r();const m=o();c.value.forEach(_=>{m.includes(_.id)&&(_.rewardReceived=!0)})}),(p,m)=>(O(),V("div",uS,[we(fn,{coinCount:e.value},null,8,["coinCount"]),h("main",hS,[h("div",dS,[h("button",{class:Re(["filterTab",{active:s.value==="daily"}]),onClick:m[0]||(m[0]=_=>s.value="daily")}," Daily ",2),h("button",{class:Re(["filterTab",{active:s.value==="weekly"}]),onClick:m[1]||(m[1]=_=>s.value="weekly")}," Weekly ",2),h("button",{class:Re(["filterTab",{active:s.value==="monthly"}]),onClick:m[2]||(m[2]=_=>s.value="monthly")}," Monthly ",2)]),h("div",fS,[h("button",{class:Re(["mainTab",{active:n.value==="inProgress"}]),onClick:m[3]||(m[3]=_=>n.value="inProgress")}," 진행중 ",2),h("button",{class:Re(["mainTab",{active:n.value==="completed"}]),onClick:m[4]||(m[4]=_=>n.value="completed")}," 완료 ",2)]),h("div",pS,[(O(!0),V(Se,null,je(d.value,_=>(O(),V("div",{key:_.id,class:"questCard"},[h("div",gS,[h("div",mS,[h("h3",_S,B(_.title),1),h("p",vS,B(_.description),1)]),m[5]||(m[5]=h("div",{class:"questCharacter"},[h("div",{class:"characterImg"},"🐱")],-1))]),_.completed&&!_.rewardReceived?(O(),V("button",{key:0,class:"rewardBtn",onClick:I=>u(_.id)}," 보상받기 ",8,yS)):_.completed&&_.rewardReceived?(O(),V("div",AS," ✓ 완료됨 ")):(O(),V("div",IS,[h("div",{class:"progressFill",style:Ct({width:_.progress/_.total*100+"%"})},null,4),h("span",wS,B(_.progress)+"/"+B(_.total),1)]))]))),128))])]),we(pn)]))}},TS=Pt(ES,[["__scopeId","data-v-7bee4ca6"]]),CS="/tdl/assets/statStar1-DSWl6DZx.png",bS="/tdl/assets/statStar2-7A5sNtwf.png",SS={class:"inventoryPage"},RS={class:"mainContent"},PS={class:"topSection"},kS={class:"magicPanel"},DS={class:"panelTitle"},xS={class:"characterBox"},NS=["src"],MS={class:"profilePanel"},OS={class:"progressBars"},VS={class:"statLabel"},LS={class:"barBg"},BS={class:"value"},FS={class:"inventoryGrid"},US=["onClick"],$S={key:0,class:"newBadge"},HS={class:"starBadge"},jS=["src"],GS={class:"levelBadge"},qS=["src"],QS={__name:"InventoryPage",setup(t){const e=D(0),n=_=>[{name:"근력",value:_[0],progress:_[0],color:"#FF6B6B"},{name:"체력",value:_[1],progress:_[1],color:"#FF8A80"},{name:"지능",value:_[2],progress:_[2],color:"#9C27B0"},{name:"손재주",value:_[3],progress:_[3],color:"#FFA726"},{name:"용기",value:_[4],progress:_[4],color:"#00BCD4"},{name:"행운",value:_[5],progress:_[5],color:"#66BB6A"}],s=()=>Math.floor(Math.random()*3)+1,i=()=>Math.floor(Math.random()*10)+1,r=[{id:1,name:"Robot",selected:!0,stars:s(),level:i(),stats:n([33,7,29,10,11,10]),imageId:1,isNew:!1},{id:2,name:"Style",selected:!1,stars:s(),level:i(),stats:n([15,25,35,45,20,30]),imageId:2,isNew:!1},{id:3,name:"Suit",selected:!1,stars:s(),level:i(),stats:n([25,20,40,30,25,15]),imageId:3,isNew:!1},{id:4,name:"Tech",selected:!1,stars:s(),level:i(),stats:n([20,15,50,40,10,25]),imageId:4,isNew:!1},{id:5,name:"Army",selected:!1,stars:s(),level:i(),stats:n([45,40,15,20,50,10]),imageId:5,isNew:!1},{id:6,name:"Detective",selected:!1,stars:s(),level:i(),stats:n([20,25,45,30,35,25]),imageId:6,isNew:!1},{id:7,name:"Scholar",selected:!1,stars:s(),level:i(),stats:n([10,15,60,25,20,30]),imageId:7,isNew:!1},{id:8,name:"White",selected:!1,stars:s(),level:i(),stats:n([30,30,30,30,30,30]),imageId:8,isNew:!1},{id:9,name:"Green",selected:!1,stars:s(),level:i(),stats:n([25,35,20,25,30,35]),imageId:9,isNew:!1},{id:10,name:"Blue",selected:!1,stars:s(),level:i(),stats:n([20,30,35,30,25,30]),imageId:10,isNew:!1},{id:11,name:"Red",selected:!1,stars:s(),level:i(),stats:n([40,25,20,25,45,15]),imageId:11,isNew:!1},{id:12,name:"Shirt",selected:!1,stars:s(),level:i(),stats:n([22,28,32,28,22,28]),imageId:12,isNew:!1},{id:13,name:"Ninja",selected:!1,stars:s(),level:i(),stats:n([35,25,30,50,40,20]),imageId:13,isNew:!1},{id:14,name:"Knight",selected:!1,stars:s(),level:i(),stats:n([50,45,20,25,45,15]),imageId:14,isNew:!1},{id:15,name:"Pirate",selected:!1,stars:s(),level:i(),stats:n([40,35,25,35,50,25]),imageId:15,isNew:!1},{id:16,name:"Sailor",selected:!1,stars:s(),level:i(),stats:n([30,40,25,30,35,30]),imageId:16,isNew:!1},{id:17,name:"Sport",selected:!1,stars:s(),level:i(),stats:n([45,50,15,40,30,20]),imageId:17,isNew:!1},{id:18,name:"Cafe",selected:!1,stars:s(),level:i(),stats:n([20,25,30,45,25,35]),imageId:18,isNew:!1},{id:19,name:"Chef",selected:!1,stars:s(),level:i(),stats:n([25,30,25,50,20,30]),imageId:19,isNew:!1},{id:20,name:"Fisher",selected:!1,stars:s(),level:i(),stats:n([30,35,20,40,30,25]),imageId:20,isNew:!1},{id:21,name:"Farmer",selected:!1,stars:s(),level:i(),stats:n([40,45,20,35,25,30]),imageId:21,isNew:!1},{id:22,name:"Doctor",selected:!1,stars:s(),level:i(),stats:n([15,30,55,35,25,30]),imageId:22,isNew:!1},{id:23,name:"Teacher",selected:!1,stars:s(),level:i(),stats:n([20,25,50,30,30,25]),imageId:23,isNew:!1},{id:24,name:"Artist",selected:!1,stars:s(),level:i(),stats:n([15,20,40,55,25,35]),imageId:24,isNew:!1}],o=D([...r]),l=Xe(()=>{const _=o.value.find(I=>I.selected);return _&&_.stats?_.stats:n([33,7,29,10,11,10])}),c=Xe(()=>{const _=o.value.find(I=>I.selected);return _?_.name:"Magic"}),u=_=>{try{return new URL(Object.assign({"../assets/img/cat1.png":hu,"../assets/img/cat10.png":du,"../assets/img/cat11.png":fu,"../assets/img/cat12.png":pu,"../assets/img/cat13.png":gu,"../assets/img/cat14.png":mu,"../assets/img/cat15.png":_u,"../assets/img/cat16.png":vu,"../assets/img/cat17.png":yu,"../assets/img/cat18.png":Au,"../assets/img/cat19.png":Iu,"../assets/img/cat2.png":wu,"../assets/img/cat20.png":Eu,"../assets/img/cat21.png":Tu,"../assets/img/cat22.png":Cu,"../assets/img/cat23.png":bu,"../assets/img/cat24.png":Su,"../assets/img/cat25.png":Ru,"../assets/img/cat26.png":Pu,"../assets/img/cat27.png":ku,"../assets/img/cat28.png":Du,"../assets/img/cat29.png":xu,"../assets/img/cat3.png":Nu,"../assets/img/cat30.png":Mu,"../assets/img/cat4.png":Ou,"../assets/img/cat5.png":Vu,"../assets/img/cat6.png":Lu,"../assets/img/cat7.png":Bu,"../assets/img/cat8.png":Fu,"../assets/img/cat9.png":Uu,"../assets/img/catProfile01.png":$u,"../assets/img/catProfile02.png":Hu,"../assets/img/cat_ico.png":ju})[`../assets/img/cat${_}.png`],import.meta.url).href}catch{return`/src/assets/img/cat${_}.png`}},d=Xe(()=>{const _=o.value.find(I=>I.selected);return u(_?_.imageId||_.id:1)}),p=Xe(()=>{const _=o.value.filter(b=>b.isNew),I=o.value.filter(b=>!b.isNew);return[..._,...I]}),m=_=>{if(o.value.forEach(I=>I.selected=!1),_.selected=!0,_.isNew){_.isNew=!1;const I=ht();if(I){const b=o.value.map(w=>({...w,isNew:w.id===_.id?!1:w.isNew}));Mt(I.id,{inventory:b})}}};return Rt(()=>{const _=ht();if(_){e.value=_.gameData?.coins||0;const I=_.gameData?.inventory;if(I&&I.length>0){const b=[...r];I.forEach(w=>{const x=b.findIndex(U=>U.id===w.id);x>-1?b[x]={...b[x],...w}:b.push({...w,stats:n([Math.floor(Math.random()*40)+10,Math.floor(Math.random()*40)+10,Math.floor(Math.random()*40)+10,Math.floor(Math.random()*40)+10,Math.floor(Math.random()*40)+10,Math.floor(Math.random()*40)+10])})}),o.value=b}}}),(_,I)=>(O(),V("div",SS,[we(fn,{coinCount:e.value},null,8,["coinCount"]),h("main",RS,[h("div",PS,[h("div",kS,[h("div",DS,B(c.value),1),h("div",xS,[h("img",{src:d.value,alt:"선택된 캐릭터",class:"selectedCharacter"},null,8,NS)])]),h("div",MS,[I[0]||(I[0]=h("div",{class:"panelTitle"},"Profile",-1)),h("div",OS,[(O(!0),V(Se,null,je(l.value,(b,w)=>(O(),V("div",{key:w,class:"progressBar"},[h("div",VS,B(b.name),1),h("div",LS,[h("div",{style:Ct({width:b.progress+"%",backgroundColor:b.color}),class:"barFill"},null,4)]),h("span",BS,B(b.value)+"%",1)]))),128))])])]),h("div",FS,[(O(!0),V(Se,null,je(p.value,b=>(O(),V("div",{key:b.id,class:Re(["inventoryItem",{selected:b.selected}]),onClick:w=>m(b)},[b.isNew?(O(),V("div",$S,"NEW")):he("",!0),h("div",HS,[(O(),V(Se,null,je(5,w=>h("img",{key:w,src:w<=b.stars?zt(CS):zt(bS),alt:"별",class:"starIcon"},null,8,jS)),64))]),h("div",GS," Lv "+B(String(b.level).padStart(2,"0")),1),h("img",{src:u(b.imageId||b.id),alt:"고양이",class:"itemIcon"},null,8,qS)],10,US))),128))])]),we(pn)]))}},zS=Pt(QS,[["__scopeId","data-v-93b70a94"]]),WS="/tdl/assets/factory_cat-DD06P-8u.png",KS="/tdl/assets/factory_under_line-BMeQefpa.png",YS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAAJCAYAAABE6JQbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgB7drRDYIwFAXQuoEjMIIjyEZuYNzATRgBN9ANYJPaKh8EwX5Xz0leaMjj+94AIczEGJs0fb4GAKB6xWyfFob4NigBAFC3YrYvFqISAAB1K2X7bjr0aZqV58c0lwAA1OYctrO9zQUgh/8xAAD/4lZ6A/BIcwoAQG2uaQ4r98c07eu08Z3gnmYfAIDq5Ayfsvz7/32LEiD8AaByixLwGf6zxVwCOuEPAL9hKgHdMvyfsGrpYuWe8x8AAAAASUVORK5CYII=",JS={class:"factoryPage"},XS={class:"mainContent"},ZS={class:"materialsSection"},eR={class:"materialText"},tR={class:"materialCount"},nR={class:"materialText"},sR={class:"materialCount"},iR=["disabled"],rR={class:"popupCatImage"},oR=["src"],aR={__name:"FactoryPage",setup(t){const e=D(0),n=D(50),s=D(100),i=D(3),r=D(!1),o=D(1);Rt(()=>{const I=ht();I&&(e.value=I.gameData?.totalCoin||0,n.value=50)});const l=()=>{if(e.value<s.value){alert(`코인이 부족합니다. (필요: ${s.value})`);return}if(n.value<i.value){alert(`고양이 파편이 부족합니다. (필요: ${i.value})`);return}const I=ht();if(I){e.value-=s.value,n.value-=i.value,o.value=p();const b=(I.gameData?.catCount||0)+1,w=I.gameData?.inventory||[],x={id:Date.now(),imageId:o.value,name:`Cat ${o.value}`,stars:Math.floor(Math.random()*3)+2,level:1,selected:!1,isNew:!0};w.unshift(x),Mt(I.id,{totalCoin:e.value,catFragments:n.value,catCount:b,inventory:w}),window.dispatchEvent(new CustomEvent("userDataUpdated")),r.value=!0}},c=Xe(()=>e.value>=s.value&&n.value>=i.value),u=Xe(()=>e.value>=s.value),d=Xe(()=>n.value>=i.value),p=()=>Math.floor(Math.random()*30)+1,m=I=>{try{return new URL(Object.assign({"../assets/img/cat1.png":hu,"../assets/img/cat10.png":du,"../assets/img/cat11.png":fu,"../assets/img/cat12.png":pu,"../assets/img/cat13.png":gu,"../assets/img/cat14.png":mu,"../assets/img/cat15.png":_u,"../assets/img/cat16.png":vu,"../assets/img/cat17.png":yu,"../assets/img/cat18.png":Au,"../assets/img/cat19.png":Iu,"../assets/img/cat2.png":wu,"../assets/img/cat20.png":Eu,"../assets/img/cat21.png":Tu,"../assets/img/cat22.png":Cu,"../assets/img/cat23.png":bu,"../assets/img/cat24.png":Su,"../assets/img/cat25.png":Ru,"../assets/img/cat26.png":Pu,"../assets/img/cat27.png":ku,"../assets/img/cat28.png":Du,"../assets/img/cat29.png":xu,"../assets/img/cat3.png":Nu,"../assets/img/cat30.png":Mu,"../assets/img/cat4.png":Ou,"../assets/img/cat5.png":Vu,"../assets/img/cat6.png":Lu,"../assets/img/cat7.png":Bu,"../assets/img/cat8.png":Fu,"../assets/img/cat9.png":Uu,"../assets/img/catProfile01.png":$u,"../assets/img/catProfile02.png":Hu,"../assets/img/cat_ico.png":ju})[`../assets/img/cat${I}.png`],import.meta.url).href}catch{return`/src/assets/img/cat${I}.png`}},_=()=>{r.value=!1};return(I,b)=>(O(),V("div",JS,[we(fn,{catCount:n.value},null,8,["catCount"]),h("main",XS,[b[4]||(b[4]=_0('<h1 class="pageTitle" data-v-b6a2e140>고양이 제작하기</h1><div class="catSilhouette" data-v-b6a2e140><div class="catCircle" data-v-b6a2e140><img src="'+WS+'" alt="고양이" class="catShape" data-v-b6a2e140></div></div><div class="factoryUnderLine" data-v-b6a2e140><img src="'+KS+'" alt="" class="factoryLine" data-v-b6a2e140></div><div class="divider" data-v-b6a2e140><div class="dividerLine" data-v-b6a2e140><img src="'+YS+'" alt="" class="dividerLineImg" data-v-b6a2e140></div></div>',4)),h("div",ZS,[h("div",{class:Re(["materialItem",{insufficient:!u.value}])},[b[1]||(b[1]=h("img",{src:vm,alt:"코인",class:"materialIcon"},null,-1)),h("span",eR,[h("span",tR,B(e.value),1),so(" / "+B(s.value)+" Coin ",1)])],2),b[3]||(b[3]=h("div",{class:"plusSign"},"+",-1)),h("div",{class:Re(["materialItem",{insufficient:!d.value}])},[b[2]||(b[2]=h("img",{src:Im,alt:"고양이",class:"materialIcon"},null,-1)),h("span",nR,[h("span",sR,B(n.value),1),so(" / "+B(i.value)+" 고양이 파편 ",1)])],2)]),h("button",{class:Re(["createButton",{disabled:!c.value}]),onClick:l,disabled:!c.value}," 데려 오기 ",10,iR)]),we(pn),r.value?(O(),V("div",{key:0,class:"popupOverlay",onClick:_},[h("div",{class:"popupContent",onClick:b[0]||(b[0]=Gr(()=>{},["stop"]))},[h("div",rR,[h("img",{src:m(o.value),alt:"고양이"},null,8,oR)]),b[5]||(b[5]=h("h2",{class:"popupTitle"},"고양이 데려오기 성공!",-1)),b[6]||(b[6]=h("p",{class:"popupMessage"},"새로운 고양이가 인벤토리에 추가되었습니다!",-1)),h("button",{class:"popupCloseBtn",onClick:_},"확인")])])):he("",!0)]))}},lR=Pt(aR,[["__scopeId","data-v-b6a2e140"]]),cR={class:"settingsPage"},uR={class:"mainContent"},hR={class:"settingGroup"},dR={class:"settingGroup"},fR={class:"settingLabel"},pR={class:"settingInputWrapper"},gR={key:0,class:"dropdownMenu"},mR=["onClick"],_R={class:"settingGroup"},vR={class:"settingLabel"},yR={class:"settingInputWrapper"},AR={key:0,class:"dropdownMenu"},IR=["onClick"],wR={class:"settingSection"},ER={class:"sectionTitle"},TR={class:"settingToggle"},CR={class:"toggleLabel"},bR={class:"settingToggle"},SR={class:"toggleLabel"},RR={class:"settingGroup"},PR={class:"settingGroup"},kR={__name:"SettingsPage",setup(t){const e=dn(),n=D(0),s=D(null),i=D("한국어"),r=D("부산"),o=D(!0),l=D(!0),c=D(!1),u=D(!1),d=D(!1);D("");const p=["한국어","English"],m=["부산","서울","대구","인천"],_={ko:{language:"언어",region:"지역",soundSettings:"소리 설정",soundToggle:"소리 토글",viToggle:"Vi 토글",userID:"User ID",copySuccess:"User ID가 복사되었습니다!",english:"English"},en:{language:"Language",region:"Region",soundSettings:"Sound Settings",soundToggle:"Sound Toggle",viToggle:"Vibration Toggle",userID:"User ID",copySuccess:"User ID copied!",english:"English"}},I=Xe(()=>i.value==="한국어"?_.ko:_.en),b=U=>{i.value=U,c.value=!1,localStorage.setItem("appLanguage",U)},w=()=>{o.value=!o.value,localStorage.setItem("soundEnabled",o.value.toString()),window.dispatchEvent(new CustomEvent("soundSettingChanged",{detail:{enabled:o.value}}))};Rt(()=>{const U=ht();U&&(s.value=U,n.value=U.gameData?.coins||0);const F=localStorage.getItem("appLanguage");F&&(i.value=F);const j=localStorage.getItem("soundEnabled");j!==null?o.value=j==="true":localStorage.setItem("soundEnabled","true"),x()});const x=()=>{if(!s.value)return;const U=new Date().toDateString(),F=localStorage.getItem(`checkIn_${s.value.id}`);d.value=F===U};return(U,F)=>(O(),V("div",cR,[we(fn,{coinCount:n.value},null,8,["coinCount"]),h("main",uR,[h("div",hR,[h("button",{class:"userProfileBtn",onClick:F[0]||(F[0]=j=>zt(e).push("/profile"))},[...F[6]||(F[6]=[h("span",{class:"userProfileIcon"},"👤",-1),h("span",null,"사용자 설정",-1),h("span",{class:"arrowIcon"},"→",-1)])])]),h("div",dR,[h("label",fR,B(i.value==="한국어"?"언어":"Language"),1),h("div",pR,[h("div",{class:"settingInput",onClick:F[1]||(F[1]=j=>c.value=!c.value)},[h("span",null,B(i.value),1),F[7]||(F[7]=h("span",{class:"dropdownIcon"},"▼",-1))]),c.value?(O(),V("div",gR,[(O(),V(Se,null,je(p,j=>h("div",{key:j,class:Re(["dropdownItem",{active:i.value===j}]),onClick:se=>b(j)},B(j),11,mR)),64))])):he("",!0)])]),h("div",_R,[h("label",vR,B(I.value.region),1),h("div",yR,[h("div",{class:"settingInput",onClick:F[2]||(F[2]=j=>u.value=!u.value)},[h("span",null,B(r.value),1),F[8]||(F[8]=h("span",{class:"dropdownIcon"},"▼",-1))]),u.value?(O(),V("div",AR,[(O(),V(Se,null,je(m,j=>h("div",{key:j,class:Re(["dropdownItem",{active:r.value===j}]),onClick:se=>{r.value=j,u.value=!1}},B(j),11,IR)),64))])):he("",!0)])]),h("div",wR,[h("h3",ER,B(I.value.soundSettings),1),h("div",TR,[h("label",CR,B(I.value.soundToggle),1),h("button",{class:Re(["toggleSwitch",{active:o.value}]),onClick:w},[...F[9]||(F[9]=[h("div",{class:"toggleHandle"},null,-1)])],2)]),h("div",bR,[h("label",SR,B(I.value.viToggle),1),h("button",{class:Re(["toggleSwitch",{active:l.value}]),onClick:F[3]||(F[3]=j=>l.value=!l.value)},[...F[10]||(F[10]=[h("div",{class:"toggleHandle"},null,-1)])],2)])]),h("div",RR,[F[11]||(F[11]=h("label",{class:"settingLabel"},"출석체크",-1)),h("button",{class:"checkInBtn",onClick:F[4]||(F[4]=j=>zt(e).push("/attendance"))}," 출석체크 하기 ")]),h("div",PR,[h("button",{class:"nftBtn",onClick:F[5]||(F[5]=j=>zt(e).push("/nft"))}," NFT ")])]),we(pn)]))}},DR=Pt(kR,[["__scopeId","data-v-ab0a9e0d"]]),xR=()=>{};var mf={};/**
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
 */const wm=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},NR=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Em={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,d=r>>2,p=(r&3)<<4|l>>4;let m=(l&15)<<2|u>>6,_=u&63;c||(_=64,o||(m=64)),s.push(n[d],n[p],n[m],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(wm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):NR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||u==null||p==null)throw new MR;const m=r<<2|l>>4;if(s.push(m),u!==64){const _=l<<4&240|u>>2;if(s.push(_),p!==64){const I=u<<6&192|p;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class MR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const OR=function(t){const e=wm(t);return Em.encodeByteArray(e,!0)},wa=function(t){return OR(t).replace(/\./g,"")},Tm=function(t){try{return Em.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function VR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const LR=()=>VR().__FIREBASE_DEFAULTS__,BR=()=>{if(typeof process>"u"||typeof mf>"u")return;const t=mf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},FR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Tm(t[1]);return e&&JSON.parse(e)},nl=()=>{try{return xR()||LR()||BR()||FR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Cm=t=>nl()?.emulatorHosts?.[t],UR=t=>{const e=Cm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},bm=()=>nl()?.config,Sm=t=>nl()?.[`_${t}`];/**
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
 */class $R{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function HR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...t};return[wa(JSON.stringify(n)),wa(JSON.stringify(o)),""].join(".")}const Qr={};function jR(){const t={prod:[],emulator:[]};for(const e of Object.keys(Qr))Qr[e]?t.emulator.push(e):t.prod.push(e);return t}function GR(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let _f=!1;function Pm(t,e){if(typeof window>"u"||typeof document>"u"||!ur(window.location.host)||Qr[t]===e||Qr[t]||_f)return;Qr[t]=e;function n(m){return`__firebase__banner__${m}`}const s="__firebase__banner",r=jR().prod.length>0;function o(){const m=document.getElementById(s);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,_){m.setAttribute("width","24"),m.setAttribute("id",_),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{_f=!0,o()},m}function d(m,_){m.setAttribute("id",_),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=GR(s),_=n("text"),I=document.getElementById(_)||document.createElement("span"),b=n("learnmore"),w=document.getElementById(b)||document.createElement("a"),x=n("preprendIcon"),U=document.getElementById(x)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const F=m.element;l(F),d(w,b);const j=u();c(U,x),F.append(U,I,w,j),document.body.appendChild(F)}r?(I.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function rn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rn())}function QR(){const t=nl()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function zR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function km(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function WR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function KR(){const t=rn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function YR(){return!QR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Dm(){try{return typeof indexedDB=="object"}catch{return!1}}function xm(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(n){e(n)}})}function JR(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const XR="FirebaseError";class Bn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=XR,Object.setPrototypeOf(this,Bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ti.prototype.create)}}class Ti{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?ZR(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Bn(i,l,s)}}function ZR(t,e){return t.replace(eP,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const eP=/\{\$([^}]+)}/g;function tP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zs(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(vf(r)&&vf(o)){if(!zs(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function vf(t){return t!==null&&typeof t=="object"}/**
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
 */function Io(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function nP(t,e){const n=new sP(t,e);return n.subscribe.bind(n)}class sP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");iP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=ql),i.error===void 0&&(i.error=ql),i.complete===void 0&&(i.complete=ql);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function iP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ql(){}/**
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
 */const rP=1e3,oP=2,aP=14400*1e3,lP=.5;function yf(t,e=rP,n=oP){const s=e*Math.pow(n,t),i=Math.round(lP*s*(Math.random()-.5)*2);return Math.min(aP,s+i)}/**
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
 */class cP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new $R;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hP(e))try{this.getOrInitializeService({instanceIdentifier:ci})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=ci){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ci){return this.instances.has(e)}getOptions(e=ci){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:uP(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ci){return this.component?this.component.multipleInstances?e:ci:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uP(t){return t===ci?void 0:t}function hP(t){return t.instantiationMode==="EAGER"}/**
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
 */class dP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Oe||(Oe={}));const fP={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},pP=Oe.INFO,gP={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},mP=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=gP[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sl{constructor(e){this.name=e,this._logLevel=pP,this._logHandler=mP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}}const _P=(t,e)=>e.some(n=>t instanceof n);let Af,If;function vP(){return Af||(Af=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yP(){return If||(If=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Nm=new WeakMap,Ic=new WeakMap,Mm=new WeakMap,Ql=new WeakMap,Gu=new WeakMap;function AP(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Us(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Nm.set(n,t)}).catch(()=>{}),Gu.set(e,t),e}function IP(t){if(Ic.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ic.set(t,e)}let wc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ic.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Mm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Us(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function wP(t){wc=t(wc)}function EP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(zl(this),e,...n);return Mm.set(s,e.sort?e.sort():[e]),Us(s)}:yP().includes(t)?function(...e){return t.apply(zl(this),e),Us(Nm.get(this))}:function(...e){return Us(t.apply(zl(this),e))}}function TP(t){return typeof t=="function"?EP(t):(t instanceof IDBTransaction&&IP(t),_P(t,vP())?new Proxy(t,wc):t)}function Us(t){if(t instanceof IDBRequest)return AP(t);if(Ql.has(t))return Ql.get(t);const e=TP(t);return e!==t&&(Ql.set(t,e),Gu.set(e,t)),e}const zl=t=>Gu.get(t);function Om(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Us(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Us(o.result),c.oldVersion,c.newVersion,Us(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const CP=["get","getKey","getAll","getAllKeys","count"],bP=["put","add","delete","clear"],Wl=new Map;function wf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wl.get(e))return Wl.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=bP.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||CP.includes(n)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&c.done]))[0]};return Wl.set(e,r),r}wP(t=>({...t,get:(e,n,s)=>wf(e,n)||t.get(e,n,s),has:(e,n)=>!!wf(e,n)||t.has(e,n)}));/**
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
 */class SP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(RP(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function RP(t){return t.getComponent()?.type==="VERSION"}const Ec="@firebase/app",Ef="0.14.5";/**
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
 */const ys=new sl("@firebase/app"),PP="@firebase/app-compat",kP="@firebase/analytics-compat",DP="@firebase/analytics",xP="@firebase/app-check-compat",NP="@firebase/app-check",MP="@firebase/auth",OP="@firebase/auth-compat",VP="@firebase/database",LP="@firebase/data-connect",BP="@firebase/database-compat",FP="@firebase/functions",UP="@firebase/functions-compat",$P="@firebase/installations",HP="@firebase/installations-compat",jP="@firebase/messaging",GP="@firebase/messaging-compat",qP="@firebase/performance",QP="@firebase/performance-compat",zP="@firebase/remote-config",WP="@firebase/remote-config-compat",KP="@firebase/storage",YP="@firebase/storage-compat",JP="@firebase/firestore",XP="@firebase/ai",ZP="@firebase/firestore-compat",e2="firebase",t2="12.5.0";/**
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
 */const Tc="[DEFAULT]",n2={[Ec]:"fire-core",[PP]:"fire-core-compat",[DP]:"fire-analytics",[kP]:"fire-analytics-compat",[NP]:"fire-app-check",[xP]:"fire-app-check-compat",[MP]:"fire-auth",[OP]:"fire-auth-compat",[VP]:"fire-rtdb",[LP]:"fire-data-connect",[BP]:"fire-rtdb-compat",[FP]:"fire-fn",[UP]:"fire-fn-compat",[$P]:"fire-iid",[HP]:"fire-iid-compat",[jP]:"fire-fcm",[GP]:"fire-fcm-compat",[qP]:"fire-perf",[QP]:"fire-perf-compat",[zP]:"fire-rc",[WP]:"fire-rc-compat",[KP]:"fire-gcs",[YP]:"fire-gcs-compat",[JP]:"fire-fst",[ZP]:"fire-fst-compat",[XP]:"fire-vertex","fire-js":"fire-js",[e2]:"fire-js-all"};/**
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
 */const Ea=new Map,s2=new Map,Cc=new Map;function Tf(t,e){try{t.container.addComponent(e)}catch(n){ys.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ns(t){const e=t.name;if(Cc.has(e))return ys.debug(`There were multiple attempts to register component ${e}.`),!1;Cc.set(e,t);for(const n of Ea.values())Tf(n,t);for(const n of s2.values())Tf(n,t);return!0}function Ci(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function qn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const i2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$s=new Ti("app","Firebase",i2);/**
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
 */class r2{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $s.create("app-deleted",{appName:this._name})}}/**
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
 */const hr=t2;function Vm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:Tc,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw $s.create("bad-app-name",{appName:String(i)});if(n||(n=bm()),!n)throw $s.create("no-options");const r=Ea.get(i);if(r){if(zs(n,r.options)&&zs(s,r.config))return r;throw $s.create("duplicate-app",{appName:i})}const o=new dP(i);for(const c of Cc.values())o.addComponent(c);const l=new r2(n,s,o);return Ea.set(i,l),l}function qu(t=Tc){const e=Ea.get(t);if(!e&&t===Tc&&bm())return Vm();if(!e)throw $s.create("no-app",{appName:t});return e}function Dn(t,e,n){let s=n2[t]??t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ys.warn(o.join(" "));return}ns(new Ln(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const o2="firebase-heartbeat-database",a2=1,oo="firebase-heartbeat-store";let Kl=null;function Lm(){return Kl||(Kl=Om(o2,a2,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(oo)}catch(n){console.warn(n)}}}}).catch(t=>{throw $s.create("idb-open",{originalErrorMessage:t.message})})),Kl}async function l2(t){try{const n=(await Lm()).transaction(oo),s=await n.objectStore(oo).get(Bm(t));return await n.done,s}catch(e){if(e instanceof Bn)ys.warn(e.message);else{const n=$s.create("idb-get",{originalErrorMessage:e?.message});ys.warn(n.message)}}}async function Cf(t,e){try{const s=(await Lm()).transaction(oo,"readwrite");await s.objectStore(oo).put(e,Bm(t)),await s.done}catch(n){if(n instanceof Bn)ys.warn(n.message);else{const s=$s.create("idb-set",{originalErrorMessage:n?.message});ys.warn(s.message)}}}function Bm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const c2=1024,u2=30;class h2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new f2(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=bf();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>u2){const i=p2(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){ys.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=bf(),{heartbeatsToSend:n,unsentEntries:s}=d2(this._heartbeatsCache.heartbeats),i=wa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return ys.warn(e),""}}}function bf(){return new Date().toISOString().substring(0,10)}function d2(t,e=c2){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Sf(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Sf(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class f2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Dm()?xm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await l2(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Cf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Cf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Sf(t){return wa(JSON.stringify({version:2,heartbeats:t})).length}function p2(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function g2(t){ns(new Ln("platform-logger",e=>new SP(e),"PRIVATE")),ns(new Ln("heartbeat",e=>new h2(e),"PRIVATE")),Dn(Ec,Ef,t),Dn(Ec,Ef,"esm2020"),Dn("fire-js","")}g2("");var m2="firebase",_2="12.5.0";/**
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
 */Dn(m2,_2,"app");function Fm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const v2=Fm,Um=new Ti("auth","Firebase",Fm());/**
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
 */const Ta=new sl("@firebase/auth");function y2(t,...e){Ta.logLevel<=Oe.WARN&&Ta.warn(`Auth (${hr}): ${t}`,...e)}function ea(t,...e){Ta.logLevel<=Oe.ERROR&&Ta.error(`Auth (${hr}): ${t}`,...e)}/**
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
 */function As(t,...e){throw Qu(t,...e)}function Wn(t,...e){return Qu(t,...e)}function $m(t,e,n){const s={...v2(),[e]:n};return new Ti("auth","Firebase",s).create(e,{appName:t.name})}function gi(t){return $m(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Qu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Um.create(t,...e)}function ye(t,e,...n){if(!t)throw Qu(e,...n)}function fs(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ea(e),new Error(e)}function Is(t,e){t||fs(e)}/**
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
 */function bc(){return typeof self<"u"&&self.location?.href||""}function A2(){return Rf()==="http:"||Rf()==="https:"}function Rf(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function I2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(A2()||km()||"connection"in navigator)?navigator.onLine:!0}function w2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class wo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Is(n>e,"Short delay should be less than long delay!"),this.isMobile=qR()||WR()}get(){return I2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function zu(t,e){Is(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */const E2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const T2=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],C2=new wo(3e4,6e4);function Wu(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function dr(t,e,n,s,i={}){return jm(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const l=Io({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...r};return zR()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&ur(t.emulatorConfig.host)&&(u.credentials="include"),Hm.fetch()(await Gm(t,t.config.apiHost,n,l),u)})}async function jm(t,e,n){t._canInitEmulator=!1;const s={...E2,...e};try{const i=new S2(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw jo(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const l=r.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw jo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw jo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw jo(t,"user-disabled",o);const d=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw $m(t,d,u);As(t,d)}}catch(i){if(i instanceof Bn)throw i;As(t,"network-request-failed",{message:String(i)})}}async function b2(t,e,n,s,i={}){const r=await dr(t,e,n,s,i);return"mfaPendingCredential"in r&&As(t,"multi-factor-auth-required",{_serverResponse:r}),r}async function Gm(t,e,n,s){const i=`${e}${n}?${s}`,r=t,o=r.config.emulator?zu(t.config,i):`${t.config.apiScheme}://${i}`;return T2.includes(n)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}class S2{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Wn(this.auth,"network-request-failed")),C2.get())})}}function jo(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Wn(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function R2(t,e){return dr(t,"POST","/v1/accounts:delete",e)}async function Ca(t,e){return dr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function zr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function P2(t,e=!1){const n=vn(t),s=await n.getIdToken(e),i=Ku(s);ye(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r?.sign_in_provider;return{claims:i,token:s,authTime:zr(Yl(i.auth_time)),issuedAtTime:zr(Yl(i.iat)),expirationTime:zr(Yl(i.exp)),signInProvider:o||null,signInSecondFactor:r?.sign_in_second_factor||null}}function Yl(t){return Number(t)*1e3}function Ku(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ea("JWT malformed, contained fewer than 3 sections"),null;try{const i=Tm(n);return i?JSON.parse(i):(ea("Failed to decode base64 JWT payload"),null)}catch(i){return ea("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Pf(t){const e=Ku(t);return ye(e,"internal-error"),ye(typeof e.exp<"u","internal-error"),ye(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ao(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Bn&&k2(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function k2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class D2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Sc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zr(this.lastLoginAt),this.creationTime=zr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ba(t){const e=t.auth,n=await t.getIdToken(),s=await ao(t,Ca(e,{idToken:n}));ye(s?.users.length,e,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const r=i.providerUserInfo?.length?qm(i.providerUserInfo):[],o=N2(t.providerData,r),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!o?.length,u=l?c:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Sc(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function x2(t){const e=vn(t);await ba(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function N2(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function qm(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function M2(t,e){const n=await jm(t,{},async()=>{const s=Io({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=await Gm(t,i,"/v1/token",`key=${r}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:s};return t.emulatorConfig&&ur(t.emulatorConfig.host)&&(c.credentials="include"),Hm.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function O2(t,e){return dr(t,"POST","/v2/accounts:revokeToken",Wu(t,e))}/**
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
 */class Qi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ye(e.idToken,"internal-error"),ye(typeof e.idToken<"u","internal-error"),ye(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Pf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ye(e.length!==0,"internal-error");const n=Pf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ye(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await M2(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Qi;return s&&(ye(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(ye(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(ye(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qi,this.toJSON())}_performRefresh(){return fs("not implemented")}}/**
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
 */function Ds(t,e){ye(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Nn{constructor({uid:e,auth:n,stsTokenManager:s,...i}){this.providerId="firebase",this.proactiveRefresh=new D2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Sc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ao(this,this.stsTokenManager.getToken(this.auth,e));return ye(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return P2(this,e)}reload(){return x2(this)}_assign(e){this!==e&&(ye(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Nn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ye(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ba(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qn(this.auth.app))return Promise.reject(gi(this.auth));const e=await this.getIdToken();return await ao(this,R2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,i=n.email??void 0,r=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:_,providerData:I,stsTokenManager:b}=n;ye(p&&b,e,"internal-error");const w=Qi.fromJSON(this.name,b);ye(typeof p=="string",e,"internal-error"),Ds(s,e.name),Ds(i,e.name),ye(typeof m=="boolean",e,"internal-error"),ye(typeof _=="boolean",e,"internal-error"),Ds(r,e.name),Ds(o,e.name),Ds(l,e.name),Ds(c,e.name),Ds(u,e.name),Ds(d,e.name);const x=new Nn({uid:p,auth:e,email:i,emailVerified:m,displayName:s,isAnonymous:_,photoURL:o,phoneNumber:r,tenantId:l,stsTokenManager:w,createdAt:u,lastLoginAt:d});return I&&Array.isArray(I)&&(x.providerData=I.map(U=>({...U}))),c&&(x._redirectEventId=c),x}static async _fromIdTokenResponse(e,n,s=!1){const i=new Qi;i.updateFromServerResponse(n);const r=new Nn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await ba(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];ye(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?qm(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!r?.length,l=new Qi;l.updateFromIdToken(s);const c=new Nn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Sc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!r?.length};return Object.assign(c,u),c}}/**
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
 */function ta(t,e,n){return`firebase:${t}:${e}:${n}`}class zi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=ta(this.userKey,i.apiKey,r),this.fullPersistenceKey=ta("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ca(this.auth,{idToken:e}).catch(()=>{});return n?Nn._fromGetAccountInfoResponse(this.auth,n,e):null}return Nn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new zi(ps(Df),e,s);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||ps(Df);const o=ta(s,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){let p;if(typeof d=="string"){const m=await Ca(e,{idToken:d}).catch(()=>{});if(!m)break;p=await Nn._fromGetAccountInfoResponse(e,m,d)}else p=Nn._fromJSON(e,d);u!==r&&(l=p),r=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new zi(r,e,s):(r=c[0],l&&await r._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new zi(r,e,s))}}/**
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
 */function xf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ym(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xm(e))return"Blackberry";if(Zm(e))return"Webos";if(Wm(e))return"Safari";if((e.includes("chrome/")||Km(e))&&!e.includes("edge/"))return"Chrome";if(Jm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if(s?.length===2)return s[1]}return"Other"}function zm(t=rn()){return/firefox\//i.test(t)}function Wm(t=rn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Km(t=rn()){return/crios\//i.test(t)}function Ym(t=rn()){return/iemobile/i.test(t)}function Jm(t=rn()){return/android/i.test(t)}function Xm(t=rn()){return/blackberry/i.test(t)}function Zm(t=rn()){return/webos/i.test(t)}function Yu(t=rn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function V2(t=rn()){return Yu(t)&&!!window.navigator?.standalone}function L2(){return KR()&&document.documentMode===10}function e_(t=rn()){return Yu(t)||Jm(t)||Zm(t)||Xm(t)||/windows phone/i.test(t)||Ym(t)}/**
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
 */class B2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,l)=>{try{const c=e(r);o(c)}catch(c){l(c)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function F2(t,e={}){return dr(t,"GET","/v2/passwordPolicy",Wu(t,e))}/**
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
 */const U2=6;class $2{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??U2,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class H2{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nf(this),this.idTokenSubscription=new Nf(this),this.beforeStateQueue=new B2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Um,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ps(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await zi.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ca(this,{idToken:e}),s=await Nn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(qn(this.app)){const r=this.app.settings.authIdToken;return r?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(r).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=this.redirectUser?._redirectEventId,o=s?._redirectEventId,l=await this.tryRedirectSignIn(e);(!r||r===o)&&l?.user&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(r){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(r))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ye(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ba(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=w2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(qn(this.app))return Promise.reject(gi(this));const n=e?vn(e):null;return n&&ye(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ye(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return qn(this.app)?Promise.reject(gi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return qn(this.app)?Promise.reject(gi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ps(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await F2(this),n=new $2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ti("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await O2(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ps(e)||this._popupRedirectResolver;ye(n,this,"argument-error"),this.redirectPersistenceManager=await zi.create(this,[ps(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ye(l,this,"internal-error"),l.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ye(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=t_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(qn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&y2(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Ju(t){return vn(t)}class Nf{constructor(e){this.auth=e,this.observer=null,this.addObserver=nP(n=>this.observer=n)}get next(){return ye(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Xu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function j2(t){Xu=t}function G2(t){return Xu.loadJS(t)}function q2(){return Xu.gapiScript}function Q2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function z2(t,e){const n=Ci(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(zs(r,e??{}))return i;As(i,"already-initialized")}return n.initialize({options:e})}function W2(t,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(ps);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e?.popupRedirectResolver)}function K2(t,e,n){const s=Ju(t);ye(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=n_(e),{host:o,port:l}=Y2(e),c=l===null?"":`:${l}`,u={url:`${r}//${o}${c}/`},d=Object.freeze({host:o,port:l,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){ye(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ye(zs(u,s.config.emulator)&&zs(d,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=u,s.emulatorConfig=d,s.settings.appVerificationDisabledForTesting=!0,ur(o)?(Rm(`${r}//${o}${c}`),Pm("Auth",!0)):J2()}function n_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Y2(t){const e=n_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Mf(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Mf(o)}}}function Mf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function J2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */async function Wi(t,e){return b2(t,"POST","/v1/accounts:signInWithIdp",Wu(t,e))}/**
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
 */const X2="http://localhost";class vi extends s_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new vi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):As("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i,...r}=n;if(!s||!i)return null;const o=new vi(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Wi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Wi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Wi(e,n)}buildRequest(){const e={requestUri:X2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Io(n)}return e}}/**
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
 */class Sa extends Bn{constructor(e,n,s,i){super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Sa.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Sa(e,n,s,i)}}function r_(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Sa._fromErrorAndOperation(t,r,e,s):r})}async function Z2(t,e,n=!1){const s=await ao(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return tr._forOperation(t,"link",s)}/**
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
 */async function ek(t,e,n=!1){const{auth:s}=t;if(qn(s.app))return Promise.reject(gi(s));const i="reauthenticate";try{const r=await ao(t,r_(s,i,e,t),n);ye(r.idToken,s,"internal-error");const o=Ku(r.idToken);ye(o,s,"internal-error");const{sub:l}=o;return ye(t.uid===l,s,"user-mismatch"),tr._forOperation(t,i,r)}catch(r){throw r?.code==="auth/user-not-found"&&As(s,"user-mismatch"),r}}/**
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
 */async function tk(t,e,n=!1){if(qn(t.app))return Promise.reject(gi(t));const s="signIn",i=await r_(t,s,e),r=await tr._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function nk(t,e,n,s){return vn(t).onIdTokenChanged(e,n,s)}function sk(t,e,n){return vn(t).beforeAuthStateChanged(e,n)}function ik(t){return vn(t).signOut()}const Ra="__sak";/**
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
 */const rk=1e3,ok=10;class a_ extends o_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=e_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);L2()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ok):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},rk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}a_.type="LOCAL";const ak=a_;/**
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
 */function lk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class il{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new il(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,r)),c=await lk(l);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}il.receivers=[];/**
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
 */class ck{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((l,c)=>{const u=Zu("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),l(m.data.response);break;default:clearTimeout(d),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Kn(){return window}function uk(t){Kn().location.href=t}/**
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
 */function u_(){return typeof Kn().WorkerGlobalScope<"u"&&typeof Kn().importScripts=="function"}async function hk(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dk(){return navigator?.serviceWorker?.controller||null}function fk(){return u_()?self:null}/**
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
 */const h_="firebaseLocalStorageDb",pk=1,Pa="firebaseLocalStorage",d_="fbase_key";class To{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rl(t,e){return t.transaction([Pa],e?"readwrite":"readonly").objectStore(Pa)}function gk(){const t=indexedDB.deleteDatabase(h_);return new To(t).toPromise()}function Rc(){const t=indexedDB.open(h_,pk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Pa,{keyPath:d_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Pa)?e(s):(s.close(),await gk(),e(await Rc()))})})}async function Vf(t,e,n){const s=rl(t,!0).put({[d_]:e,value:n});return new To(s).toPromise()}async function mk(t,e){const n=rl(t,!1).get(e),s=await new To(n).toPromise();return s===void 0?null:s.value}function Lf(t,e){const n=rl(t,!0).delete(e);return new To(n).toPromise()}const _k=800,vk=3;class f_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>vk)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return u_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=il._getInstance(fk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await hk(),!this.activeServiceWorker)return;this.sender=new ck(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rc();return await Vf(e,Ra,"1"),await Lf(e,Ra),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Vf(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>mk(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Lf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=rl(i,!1).getAll();return new To(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_k)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}f_.type="LOCAL";const yk=f_;new wo(3e4,6e4);/**
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
 */function Ak(t,e){return e?ps(e):(ye(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class eh extends s_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Wi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Wi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ik(t){return tk(t.auth,new eh(t),t.bypassAuthState)}function wk(t){const{auth:e,user:n}=t;return ye(n,e,"internal-error"),ek(n,new eh(t),t.bypassAuthState)}async function Ek(t){const{auth:e,user:n}=t;return ye(n,e,"internal-error"),Z2(n,new eh(t),t.bypassAuthState)}/**
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
 */class p_{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ik;case"linkViaPopup":case"linkViaRedirect":return Ek;case"reauthViaPopup":case"reauthViaRedirect":return wk;default:As(this.auth,"internal-error")}}resolve(e){Is(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Is(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Tk=new wo(2e3,1e4);class Ui extends p_{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Ui.currentPopupAction&&Ui.currentPopupAction.cancel(),Ui.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ye(e,this.auth,"internal-error"),e}async onExecution(){Is(this.filter.length===1,"Popup operations only handle one event");const e=Zu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ui.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Wn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Tk.get())};e()}}Ui.currentPopupAction=null;/**
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
 */const Ck="pendingRedirect",na=new Map;class bk extends p_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=na.get(this.auth._key());if(!e){try{const s=await Sk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}na.set(this.auth._key(),e)}return this.bypassAuthState||na.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Sk(t,e){const n=kk(e),s=Pk(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function Rk(t,e){na.set(t._key(),e)}function Pk(t){return ps(t._redirectPersistence)}function kk(t){return ta(Ck,t.config.apiKey,t.name)}async function Dk(t,e,n=!1){if(qn(t.app))return Promise.reject(gi(t));const s=Ju(t),i=Ak(s,e),o=await new bk(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const xk=600*1e3;class Nk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Mk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!g_(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";n.onError(Wn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bf(e))}saveEventToCache(e){this.cachedEventUids.add(Bf(e)),this.lastProcessedEventTime=Date.now()}}function Bf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function g_({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function Mk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return g_(t);default:return!1}}/**
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
 */async function Ok(t,e={}){return dr(t,"GET","/v1/projects",e)}/**
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
 */const Vk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Lk=/^https?/;async function Bk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ok(t);for(const n of e)try{if(Fk(n))return}catch{}As(t,"unauthorized-domain")}function Fk(t){const e=bc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Lk.test(n))return!1;if(Vk.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const Uk=new wo(3e4,6e4);function Ff(){const t=Kn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $k(t){return new Promise((e,n)=>{function s(){Ff(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ff(),n(Wn(t,"network-request-failed"))},timeout:Uk.get()})}if(Kn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Kn().gapi?.load)s();else{const i=Q2("iframefcb");return Kn()[i]=()=>{gapi.load?s():n(Wn(t,"network-request-failed"))},G2(`${q2()}?onload=${i}`).catch(r=>n(r))}}).catch(e=>{throw sa=null,e})}let sa=null;function Hk(t){return sa=sa||$k(t),sa}/**
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
 */const jk=new wo(5e3,15e3),Gk="__/auth/iframe",qk="emulator/auth/iframe",Qk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Wk(t){const e=t.config;ye(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zu(e,qk):`https://${t.config.authDomain}/${Gk}`,s={apiKey:e.apiKey,appName:t.name,v:hr},i=zk.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Io(s).slice(1)}`}async function Kk(t){const e=await Hk(t),n=Kn().gapi;return ye(n,t,"internal-error"),e.open({where:document.body,url:Wk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Qk,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Wn(t,"network-request-failed"),l=Kn().setTimeout(()=>{r(o)},jk.get());function c(){Kn().clearTimeout(l),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const Yk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Jk=500,Xk=600,Zk="_blank",eD="http://localhost";class Uf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tD(t,e,n,s=Jk,i=Xk){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const c={...Yk,width:s.toString(),height:i.toString(),top:r,left:o},u=rn().toLowerCase();n&&(l=Km(u)?Zk:n),zm(u)&&(e=e||eD,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[_,I])=>`${m}${_}=${I},`,"");if(V2(u)&&l!=="_self")return nD(e||"",l),new Uf(null);const p=window.open(e||"",l,d);ye(p,t,"popup-blocked");try{p.focus()}catch{}return new Uf(p)}function nD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const sD="__/auth/handler",iD="emulator/auth/handler",rD=encodeURIComponent("fac");async function $f(t,e,n,s,i,r){ye(t.config.authDomain,t,"auth-domain-config-required"),ye(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:hr,eventId:i};if(e instanceof i_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",tP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Eo){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),u=c?`#${rD}=${encodeURIComponent(c)}`:"";return`${oD(t)}?${Io(l).slice(1)}${u}`}function oD({config:t}){return t.emulator?zu(t,iD):`https://${t.authDomain}/${sD}`}/**
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
 */const Jl="webStorageSupport";class aD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=c_,this._completeRedirectFn=Dk,this._overrideRedirectResult=Rk}async _openPopup(e,n,s,i){Is(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const r=await $f(e,n,s,bc(),i);return tD(e,r,Zu())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await $f(e,n,s,bc(),i);return uk(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Is(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Kk(e),s=new Nk(e);return n.register("authEvent",i=>(ye(i?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Jl,{type:Jl},i=>{const r=i?.[0]?.[Jl];r!==void 0&&n(!!r),As(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Bk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return e_()||Wm()||Yu()}}const lD=aD;var Hf="@firebase/auth",jf="1.11.1";/**
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
 */class cD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ye(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function uD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hD(t){ns(new Ln("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=s.options;ye(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:t_(t)},u=new H2(s,i,r,c);return W2(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ns(new Ln("auth-internal",e=>{const n=Ju(e.getProvider("auth").getImmediate());return(s=>new cD(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dn(Hf,jf,uD(t)),Dn(Hf,jf,"esm2020")}/**
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
 */const dD=300,fD=Sm("authIdTokenMaxAge")||dD;let Gf=null;const pD=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>fD)return;const i=n?.token;Gf!==i&&(Gf=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function gD(t=qu()){const e=Ci(t,"auth");if(e.isInitialized())return e.getImmediate();const n=z2(t,{popupRedirectResolver:lD,persistence:[yk,ak,c_]}),s=Sm("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=pD(r.toString());sk(n,o,()=>o(n.currentUser)),nk(n,l=>o(l))}}const i=Cm("auth");return i&&K2(n,`http://${i}`),n}function mD(){return document.getElementsByTagName("head")?.[0]??document}j2({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Wn("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",mD().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hD("Browser");var qf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hs,m_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,A){function T(){}T.prototype=A.prototype,S.F=A.prototype,S.prototype=new T,S.prototype.constructor=S,S.D=function(P,R,N){for(var E=Array(arguments.length-2),st=2;st<arguments.length;st++)E[st-2]=arguments[st];return A.prototype[R].apply(P,E)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,n),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(S,A,T){T||(T=0);const P=Array(16);if(typeof A=="string")for(var R=0;R<16;++R)P[R]=A.charCodeAt(T++)|A.charCodeAt(T++)<<8|A.charCodeAt(T++)<<16|A.charCodeAt(T++)<<24;else for(R=0;R<16;++R)P[R]=A[T++]|A[T++]<<8|A[T++]<<16|A[T++]<<24;A=S.g[0],T=S.g[1],R=S.g[2];let N=S.g[3],E;E=A+(N^T&(R^N))+P[0]+3614090360&4294967295,A=T+(E<<7&4294967295|E>>>25),E=N+(R^A&(T^R))+P[1]+3905402710&4294967295,N=A+(E<<12&4294967295|E>>>20),E=R+(T^N&(A^T))+P[2]+606105819&4294967295,R=N+(E<<17&4294967295|E>>>15),E=T+(A^R&(N^A))+P[3]+3250441966&4294967295,T=R+(E<<22&4294967295|E>>>10),E=A+(N^T&(R^N))+P[4]+4118548399&4294967295,A=T+(E<<7&4294967295|E>>>25),E=N+(R^A&(T^R))+P[5]+1200080426&4294967295,N=A+(E<<12&4294967295|E>>>20),E=R+(T^N&(A^T))+P[6]+2821735955&4294967295,R=N+(E<<17&4294967295|E>>>15),E=T+(A^R&(N^A))+P[7]+4249261313&4294967295,T=R+(E<<22&4294967295|E>>>10),E=A+(N^T&(R^N))+P[8]+1770035416&4294967295,A=T+(E<<7&4294967295|E>>>25),E=N+(R^A&(T^R))+P[9]+2336552879&4294967295,N=A+(E<<12&4294967295|E>>>20),E=R+(T^N&(A^T))+P[10]+4294925233&4294967295,R=N+(E<<17&4294967295|E>>>15),E=T+(A^R&(N^A))+P[11]+2304563134&4294967295,T=R+(E<<22&4294967295|E>>>10),E=A+(N^T&(R^N))+P[12]+1804603682&4294967295,A=T+(E<<7&4294967295|E>>>25),E=N+(R^A&(T^R))+P[13]+4254626195&4294967295,N=A+(E<<12&4294967295|E>>>20),E=R+(T^N&(A^T))+P[14]+2792965006&4294967295,R=N+(E<<17&4294967295|E>>>15),E=T+(A^R&(N^A))+P[15]+1236535329&4294967295,T=R+(E<<22&4294967295|E>>>10),E=A+(R^N&(T^R))+P[1]+4129170786&4294967295,A=T+(E<<5&4294967295|E>>>27),E=N+(T^R&(A^T))+P[6]+3225465664&4294967295,N=A+(E<<9&4294967295|E>>>23),E=R+(A^T&(N^A))+P[11]+643717713&4294967295,R=N+(E<<14&4294967295|E>>>18),E=T+(N^A&(R^N))+P[0]+3921069994&4294967295,T=R+(E<<20&4294967295|E>>>12),E=A+(R^N&(T^R))+P[5]+3593408605&4294967295,A=T+(E<<5&4294967295|E>>>27),E=N+(T^R&(A^T))+P[10]+38016083&4294967295,N=A+(E<<9&4294967295|E>>>23),E=R+(A^T&(N^A))+P[15]+3634488961&4294967295,R=N+(E<<14&4294967295|E>>>18),E=T+(N^A&(R^N))+P[4]+3889429448&4294967295,T=R+(E<<20&4294967295|E>>>12),E=A+(R^N&(T^R))+P[9]+568446438&4294967295,A=T+(E<<5&4294967295|E>>>27),E=N+(T^R&(A^T))+P[14]+3275163606&4294967295,N=A+(E<<9&4294967295|E>>>23),E=R+(A^T&(N^A))+P[3]+4107603335&4294967295,R=N+(E<<14&4294967295|E>>>18),E=T+(N^A&(R^N))+P[8]+1163531501&4294967295,T=R+(E<<20&4294967295|E>>>12),E=A+(R^N&(T^R))+P[13]+2850285829&4294967295,A=T+(E<<5&4294967295|E>>>27),E=N+(T^R&(A^T))+P[2]+4243563512&4294967295,N=A+(E<<9&4294967295|E>>>23),E=R+(A^T&(N^A))+P[7]+1735328473&4294967295,R=N+(E<<14&4294967295|E>>>18),E=T+(N^A&(R^N))+P[12]+2368359562&4294967295,T=R+(E<<20&4294967295|E>>>12),E=A+(T^R^N)+P[5]+4294588738&4294967295,A=T+(E<<4&4294967295|E>>>28),E=N+(A^T^R)+P[8]+2272392833&4294967295,N=A+(E<<11&4294967295|E>>>21),E=R+(N^A^T)+P[11]+1839030562&4294967295,R=N+(E<<16&4294967295|E>>>16),E=T+(R^N^A)+P[14]+4259657740&4294967295,T=R+(E<<23&4294967295|E>>>9),E=A+(T^R^N)+P[1]+2763975236&4294967295,A=T+(E<<4&4294967295|E>>>28),E=N+(A^T^R)+P[4]+1272893353&4294967295,N=A+(E<<11&4294967295|E>>>21),E=R+(N^A^T)+P[7]+4139469664&4294967295,R=N+(E<<16&4294967295|E>>>16),E=T+(R^N^A)+P[10]+3200236656&4294967295,T=R+(E<<23&4294967295|E>>>9),E=A+(T^R^N)+P[13]+681279174&4294967295,A=T+(E<<4&4294967295|E>>>28),E=N+(A^T^R)+P[0]+3936430074&4294967295,N=A+(E<<11&4294967295|E>>>21),E=R+(N^A^T)+P[3]+3572445317&4294967295,R=N+(E<<16&4294967295|E>>>16),E=T+(R^N^A)+P[6]+76029189&4294967295,T=R+(E<<23&4294967295|E>>>9),E=A+(T^R^N)+P[9]+3654602809&4294967295,A=T+(E<<4&4294967295|E>>>28),E=N+(A^T^R)+P[12]+3873151461&4294967295,N=A+(E<<11&4294967295|E>>>21),E=R+(N^A^T)+P[15]+530742520&4294967295,R=N+(E<<16&4294967295|E>>>16),E=T+(R^N^A)+P[2]+3299628645&4294967295,T=R+(E<<23&4294967295|E>>>9),E=A+(R^(T|~N))+P[0]+4096336452&4294967295,A=T+(E<<6&4294967295|E>>>26),E=N+(T^(A|~R))+P[7]+1126891415&4294967295,N=A+(E<<10&4294967295|E>>>22),E=R+(A^(N|~T))+P[14]+2878612391&4294967295,R=N+(E<<15&4294967295|E>>>17),E=T+(N^(R|~A))+P[5]+4237533241&4294967295,T=R+(E<<21&4294967295|E>>>11),E=A+(R^(T|~N))+P[12]+1700485571&4294967295,A=T+(E<<6&4294967295|E>>>26),E=N+(T^(A|~R))+P[3]+2399980690&4294967295,N=A+(E<<10&4294967295|E>>>22),E=R+(A^(N|~T))+P[10]+4293915773&4294967295,R=N+(E<<15&4294967295|E>>>17),E=T+(N^(R|~A))+P[1]+2240044497&4294967295,T=R+(E<<21&4294967295|E>>>11),E=A+(R^(T|~N))+P[8]+1873313359&4294967295,A=T+(E<<6&4294967295|E>>>26),E=N+(T^(A|~R))+P[15]+4264355552&4294967295,N=A+(E<<10&4294967295|E>>>22),E=R+(A^(N|~T))+P[6]+2734768916&4294967295,R=N+(E<<15&4294967295|E>>>17),E=T+(N^(R|~A))+P[13]+1309151649&4294967295,T=R+(E<<21&4294967295|E>>>11),E=A+(R^(T|~N))+P[4]+4149444226&4294967295,A=T+(E<<6&4294967295|E>>>26),E=N+(T^(A|~R))+P[11]+3174756917&4294967295,N=A+(E<<10&4294967295|E>>>22),E=R+(A^(N|~T))+P[2]+718787259&4294967295,R=N+(E<<15&4294967295|E>>>17),E=T+(N^(R|~A))+P[9]+3951481745&4294967295,S.g[0]=S.g[0]+A&4294967295,S.g[1]=S.g[1]+(R+(E<<21&4294967295|E>>>11))&4294967295,S.g[2]=S.g[2]+R&4294967295,S.g[3]=S.g[3]+N&4294967295}s.prototype.v=function(S,A){A===void 0&&(A=S.length);const T=A-this.blockSize,P=this.C;let R=this.h,N=0;for(;N<A;){if(R==0)for(;N<=T;)i(this,S,N),N+=this.blockSize;if(typeof S=="string"){for(;N<A;)if(P[R++]=S.charCodeAt(N++),R==this.blockSize){i(this,P),R=0;break}}else for(;N<A;)if(P[R++]=S[N++],R==this.blockSize){i(this,P),R=0;break}}this.h=R,this.o+=A},s.prototype.A=function(){var S=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);S[0]=128;for(var A=1;A<S.length-8;++A)S[A]=0;A=this.o*8;for(var T=S.length-8;T<S.length;++T)S[T]=A&255,A/=256;for(this.v(S),S=Array(16),A=0,T=0;T<4;++T)for(let P=0;P<32;P+=8)S[A++]=this.g[T]>>>P&255;return S};function r(S,A){var T=l;return Object.prototype.hasOwnProperty.call(T,S)?T[S]:T[S]=A(S)}function o(S,A){this.h=A;const T=[];let P=!0;for(let R=S.length-1;R>=0;R--){const N=S[R]|0;P&&N==A||(T[R]=N,P=!1)}this.g=T}var l={};function c(S){return-128<=S&&S<128?r(S,function(A){return new o([A|0],A<0?-1:0)}):new o([S|0],S<0?-1:0)}function u(S){if(isNaN(S)||!isFinite(S))return p;if(S<0)return w(u(-S));const A=[];let T=1;for(let P=0;S>=T;P++)A[P]=S/T|0,T*=4294967296;return new o(A,0)}function d(S,A){if(S.length==0)throw Error("number format error: empty string");if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(S.charAt(0)=="-")return w(d(S.substring(1),A));if(S.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=u(Math.pow(A,8));let P=p;for(let N=0;N<S.length;N+=8){var R=Math.min(8,S.length-N);const E=parseInt(S.substring(N,N+R),A);R<8?(R=u(Math.pow(A,R)),P=P.j(R).add(u(E))):(P=P.j(T),P=P.add(u(E)))}return P}var p=c(0),m=c(1),_=c(16777216);t=o.prototype,t.m=function(){if(b(this))return-w(this).m();let S=0,A=1;for(let T=0;T<this.g.length;T++){const P=this.i(T);S+=(P>=0?P:4294967296+P)*A,A*=4294967296}return S},t.toString=function(S){if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(I(this))return"0";if(b(this))return"-"+w(this).toString(S);const A=u(Math.pow(S,6));var T=this;let P="";for(;;){const R=j(T,A).g;T=x(T,R.j(A));let N=((T.g.length>0?T.g[0]:T.h)>>>0).toString(S);if(T=R,I(T))return N+P;for(;N.length<6;)N="0"+N;P=N+P}},t.i=function(S){return S<0?0:S<this.g.length?this.g[S]:this.h};function I(S){if(S.h!=0)return!1;for(let A=0;A<S.g.length;A++)if(S.g[A]!=0)return!1;return!0}function b(S){return S.h==-1}t.l=function(S){return S=x(this,S),b(S)?-1:I(S)?0:1};function w(S){const A=S.g.length,T=[];for(let P=0;P<A;P++)T[P]=~S.g[P];return new o(T,~S.h).add(m)}t.abs=function(){return b(this)?w(this):this},t.add=function(S){const A=Math.max(this.g.length,S.g.length),T=[];let P=0;for(let R=0;R<=A;R++){let N=P+(this.i(R)&65535)+(S.i(R)&65535),E=(N>>>16)+(this.i(R)>>>16)+(S.i(R)>>>16);P=E>>>16,N&=65535,E&=65535,T[R]=E<<16|N}return new o(T,T[T.length-1]&-2147483648?-1:0)};function x(S,A){return S.add(w(A))}t.j=function(S){if(I(this)||I(S))return p;if(b(this))return b(S)?w(this).j(w(S)):w(w(this).j(S));if(b(S))return w(this.j(w(S)));if(this.l(_)<0&&S.l(_)<0)return u(this.m()*S.m());const A=this.g.length+S.g.length,T=[];for(var P=0;P<2*A;P++)T[P]=0;for(P=0;P<this.g.length;P++)for(let R=0;R<S.g.length;R++){const N=this.i(P)>>>16,E=this.i(P)&65535,st=S.i(R)>>>16,vt=S.i(R)&65535;T[2*P+2*R]+=E*vt,U(T,2*P+2*R),T[2*P+2*R+1]+=N*vt,U(T,2*P+2*R+1),T[2*P+2*R+1]+=E*st,U(T,2*P+2*R+1),T[2*P+2*R+2]+=N*st,U(T,2*P+2*R+2)}for(S=0;S<A;S++)T[S]=T[2*S+1]<<16|T[2*S];for(S=A;S<2*A;S++)T[S]=0;return new o(T,0)};function U(S,A){for(;(S[A]&65535)!=S[A];)S[A+1]+=S[A]>>>16,S[A]&=65535,A++}function F(S,A){this.g=S,this.h=A}function j(S,A){if(I(A))throw Error("division by zero");if(I(S))return new F(p,p);if(b(S))return A=j(w(S),A),new F(w(A.g),w(A.h));if(b(A))return A=j(S,w(A)),new F(w(A.g),A.h);if(S.g.length>30){if(b(S)||b(A))throw Error("slowDivide_ only works with positive integers.");for(var T=m,P=A;P.l(S)<=0;)T=se(T),P=se(P);var R=Ie(T,1),N=Ie(P,1);for(P=Ie(P,2),T=Ie(T,2);!I(P);){var E=N.add(P);E.l(S)<=0&&(R=R.add(T),N=E),P=Ie(P,1),T=Ie(T,1)}return A=x(S,R.j(A)),new F(R,A)}for(R=p;S.l(A)>=0;){for(T=Math.max(1,Math.floor(S.m()/A.m())),P=Math.ceil(Math.log(T)/Math.LN2),P=P<=48?1:Math.pow(2,P-48),N=u(T),E=N.j(A);b(E)||E.l(S)>0;)T-=P,N=u(T),E=N.j(A);I(N)&&(N=m),R=R.add(N),S=x(S,E)}return new F(R,S)}t.B=function(S){return j(this,S).h},t.and=function(S){const A=Math.max(this.g.length,S.g.length),T=[];for(let P=0;P<A;P++)T[P]=this.i(P)&S.i(P);return new o(T,this.h&S.h)},t.or=function(S){const A=Math.max(this.g.length,S.g.length),T=[];for(let P=0;P<A;P++)T[P]=this.i(P)|S.i(P);return new o(T,this.h|S.h)},t.xor=function(S){const A=Math.max(this.g.length,S.g.length),T=[];for(let P=0;P<A;P++)T[P]=this.i(P)^S.i(P);return new o(T,this.h^S.h)};function se(S){const A=S.g.length+1,T=[];for(let P=0;P<A;P++)T[P]=S.i(P)<<1|S.i(P-1)>>>31;return new o(T,S.h)}function Ie(S,A){const T=A>>5;A%=32;const P=S.g.length-T,R=[];for(let N=0;N<P;N++)R[N]=A>0?S.i(N+T)>>>A|S.i(N+T+1)<<32-A:S.i(N+T);return new o(R,S.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,m_=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Hs=o}).apply(typeof qf<"u"?qf:typeof self<"u"?self:typeof window<"u"?window:{});var Go=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var __,Nr,v_,ia,Pc,y_,A_,I_;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Go=="object"&&Go];for(var f=0;f<a.length;++f){var g=a[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=n(this);function i(a,f){if(f)e:{var g=s;a=a.split(".");for(var v=0;v<a.length-1;v++){var L=a[v];if(!(L in g))break e;g=g[L]}a=a[a.length-1],v=g[a],f=f(v),f!=v&&f!=null&&e(g,a,{configurable:!0,writable:!0,value:f})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(f){var g=[],v;for(v in f)Object.prototype.hasOwnProperty.call(f,v)&&g.push([v,f[v]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var r=r||{},o=this||self;function l(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function c(a,f,g){return a.call.apply(a.bind,arguments)}function u(a,f,g){return u=c,u.apply(null,arguments)}function d(a,f){var g=Array.prototype.slice.call(arguments,1);return function(){var v=g.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function p(a,f){function g(){}g.prototype=f.prototype,a.Z=f.prototype,a.prototype=new g,a.prototype.constructor=a,a.Ob=function(v,L,$){for(var ne=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)ne[Pe-2]=arguments[Pe];return f.prototype[L].apply(v,ne)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function _(a){const f=a.length;if(f>0){const g=Array(f);for(let v=0;v<f;v++)g[v]=a[v];return g}return[]}function I(a,f){for(let v=1;v<arguments.length;v++){const L=arguments[v];var g=typeof L;if(g=g!="object"?g:L?Array.isArray(L)?"array":g:"null",g=="array"||g=="object"&&typeof L.length=="number"){g=a.length||0;const $=L.length||0;a.length=g+$;for(let ne=0;ne<$;ne++)a[g+ne]=L[ne]}else a.push(L)}}class b{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return this.h>0?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function w(a){o.setTimeout(()=>{throw a},0)}function x(){var a=S;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class U{constructor(){this.h=this.g=null}add(f,g){const v=F.get();v.set(f,g),this.h?this.h.next=v:this.g=v,this.h=v}}var F=new b(()=>new j,a=>a.reset());class j{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let se,Ie=!1,S=new U,A=()=>{const a=Promise.resolve(void 0);se=()=>{a.then(T)}};function T(){for(var a;a=x();){try{a.h.call(a.g)}catch(g){w(g)}var f=F;f.j(a),f.h<100&&(f.h++,a.next=f.g,f.g=a)}Ie=!1}function P(){this.u=this.u,this.C=this.C}P.prototype.u=!1,P.prototype.dispose=function(){this.u||(this.u=!0,this.N())},P.prototype[Symbol.dispose]=function(){this.dispose()},P.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function R(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var N=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const g=()=>{};o.addEventListener("test",g,f),o.removeEventListener("test",g,f)}catch{}return a})();function E(a){return/^[\s\xa0]*$/.test(a)}function st(a,f){R.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,f)}p(st,R),st.prototype.init=function(a,f){const g=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget,f||(g=="mouseover"?f=a.fromElement:g=="mouseout"&&(f=a.toElement)),this.relatedTarget=f,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&st.Z.h.call(this)},st.prototype.h=function(){st.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var vt="closure_listenable_"+(Math.random()*1e6|0),it=0;function Ce(a,f,g,v,L){this.listener=a,this.proxy=null,this.src=f,this.type=g,this.capture=!!v,this.ha=L,this.key=++it,this.da=this.fa=!1}function be(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function kt(a,f,g){for(const v in a)f.call(g,a[v],v,a)}function Kt(a,f){for(const g in a)f.call(void 0,a[g],g,a)}function Lt(a){const f={};for(const g in a)f[g]=a[g];return f}const rt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Cn(a,f){let g,v;for(let L=1;L<arguments.length;L++){v=arguments[L];for(g in v)a[g]=v[g];for(let $=0;$<rt.length;$++)g=rt[$],Object.prototype.hasOwnProperty.call(v,g)&&(a[g]=v[g])}}function gn(a){this.src=a,this.g={},this.h=0}gn.prototype.add=function(a,f,g,v,L){const $=a.toString();a=this.g[$],a||(a=this.g[$]=[],this.h++);const ne=ot(a,f,v,L);return ne>-1?(f=a[ne],g||(f.fa=!1)):(f=new Ce(f,this.src,$,!!v,L),f.fa=g,a.push(f)),f};function Yt(a,f){const g=f.type;if(g in a.g){var v=a.g[g],L=Array.prototype.indexOf.call(v,f,void 0),$;($=L>=0)&&Array.prototype.splice.call(v,L,1),$&&(be(f),a.g[g].length==0&&(delete a.g[g],a.h--))}}function ot(a,f,g,v){for(let L=0;L<a.length;++L){const $=a[L];if(!$.da&&$.listener==f&&$.capture==!!g&&$.ha==v)return L}return-1}var q="closure_lm_"+(Math.random()*1e6|0),ae={};function te(a,f,g,v,L){if(Array.isArray(f)){for(let $=0;$<f.length;$++)te(a,f[$],g,v,L);return null}return g=ee(g),a&&a[vt]?a.J(f,g,l(v)?!!v.capture:!1,L):ue(a,f,g,!1,v,L)}function ue(a,f,g,v,L,$){if(!f)throw Error("Invalid event type");const ne=l(L)?!!L.capture:!!L;let Pe=K(a);if(Pe||(a[q]=Pe=new gn(a)),g=Pe.add(f,g,v,ne,$),g.proxy)return g;if(v=xe(),g.proxy=v,v.src=a,v.listener=g,a.addEventListener)N||(L=ne),L===void 0&&(L=!1),a.addEventListener(f.toString(),v,L);else if(a.attachEvent)a.attachEvent(M(f.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return g}function xe(){function a(g){return f.call(a.src,a.listener,g)}const f=Q;return a}function y(a,f,g,v,L){if(Array.isArray(f))for(var $=0;$<f.length;$++)y(a,f[$],g,v,L);else v=l(v)?!!v.capture:!!v,g=ee(g),a&&a[vt]?(a=a.i,$=String(f).toString(),$ in a.g&&(f=a.g[$],g=ot(f,g,v,L),g>-1&&(be(f[g]),Array.prototype.splice.call(f,g,1),f.length==0&&(delete a.g[$],a.h--)))):a&&(a=K(a))&&(f=a.g[f.toString()],a=-1,f&&(a=ot(f,g,v,L)),(g=a>-1?f[a]:null)&&C(g))}function C(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[vt])Yt(f.i,a);else{var g=a.type,v=a.proxy;f.removeEventListener?f.removeEventListener(g,v,a.capture):f.detachEvent?f.detachEvent(M(g),v):f.addListener&&f.removeListener&&f.removeListener(v),(g=K(f))?(Yt(g,a),g.h==0&&(g.src=null,f[q]=null)):be(a)}}}function M(a){return a in ae?ae[a]:ae[a]="on"+a}function Q(a,f){if(a.da)a=!0;else{f=new st(f,this);const g=a.listener,v=a.ha||a.src;a.fa&&C(a),a=g.call(v,f)}return a}function K(a){return a=a[q],a instanceof gn?a:null}var z="__closure_events_fn_"+(Math.random()*1e9>>>0);function ee(a){return typeof a=="function"?a:(a[z]||(a[z]=function(f){return a.handleEvent(f)}),a[z])}function J(){P.call(this),this.i=new gn(this),this.M=this,this.G=null}p(J,P),J.prototype[vt]=!0,J.prototype.removeEventListener=function(a,f,g,v){y(this,a,f,g,v)};function W(a,f){var g,v=a.G;if(v)for(g=[];v;v=v.G)g.push(v);if(a=a.M,v=f.type||f,typeof f=="string")f=new R(f,a);else if(f instanceof R)f.target=f.target||a;else{var L=f;f=new R(v,a),Cn(f,L)}L=!0;let $,ne;if(g)for(ne=g.length-1;ne>=0;ne--)$=f.g=g[ne],L=Z($,v,!0,f)&&L;if($=f.g=a,L=Z($,v,!0,f)&&L,L=Z($,v,!1,f)&&L,g)for(ne=0;ne<g.length;ne++)$=f.g=g[ne],L=Z($,v,!1,f)&&L}J.prototype.N=function(){if(J.Z.N.call(this),this.i){var a=this.i;for(const f in a.g){const g=a.g[f];for(let v=0;v<g.length;v++)be(g[v]);delete a.g[f],a.h--}}this.G=null},J.prototype.J=function(a,f,g,v){return this.i.add(String(a),f,!1,g,v)},J.prototype.K=function(a,f,g,v){return this.i.add(String(a),f,!0,g,v)};function Z(a,f,g,v){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();let L=!0;for(let $=0;$<f.length;++$){const ne=f[$];if(ne&&!ne.da&&ne.capture==g){const Pe=ne.listener,xt=ne.ha||ne.src;ne.fa&&Yt(a.i,ne),L=Pe.call(xt,v)!==!1&&L}}return L&&!v.defaultPrevented}function ge(a,f){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(f)>2147483647?-1:o.setTimeout(a,f||0)}function oe(a){a.g=ge(()=>{a.g=null,a.i&&(a.i=!1,oe(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class de extends P{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:oe(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pe(a){P.call(this),this.h=a,this.g={}}p(pe,P);var ke=[];function Ge(a){kt(a.g,function(f,g){this.g.hasOwnProperty(g)&&C(f)},a),a.g={}}pe.prototype.N=function(){pe.Z.N.call(this),Ge(this)},pe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ne=o.JSON.stringify,$e=o.JSON.parse,He=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function qe(){}function Ye(){}var wt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Et(){R.call(this,"d")}p(Et,R);function Fe(){R.call(this,"c")}p(Fe,R);var yt={},ei=null;function G(){return ei=ei||new J}yt.Ia="serverreachability";function k(a){R.call(this,yt.Ia,a)}p(k,R);function H(a){const f=G();W(f,new k(f))}yt.STAT_EVENT="statevent";function ie(a,f){R.call(this,yt.STAT_EVENT,a),this.stat=f}p(ie,R);function le(a){const f=G();W(f,new ie(f,a))}yt.Ja="timingevent";function re(a,f){R.call(this,yt.Ja,a),this.size=f}p(re,R);function De(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},f)}function Be(){this.g=!0}Be.prototype.ua=function(){this.g=!1};function at(a,f,g,v,L,$){a.info(function(){if(a.g)if($){var ne="",Pe=$.split("&");for(let et=0;et<Pe.length;et++){var xt=Pe[et].split("=");if(xt.length>1){const Ft=xt[0];xt=xt[1];const Un=Ft.split("_");ne=Un.length>=2&&Un[1]=="type"?ne+(Ft+"="+xt+"&"):ne+(Ft+"=redacted&")}}}else ne=null;else ne=$;return"XMLHTTP REQ ("+v+") [attempt "+L+"]: "+f+`
`+g+`
`+ne})}function on(a,f,g,v,L,$,ne){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+L+"]: "+f+`
`+g+`
`+$+" "+ne})}function Ze(a,f,g,v){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+jt(a,g)+(v?" "+v:"")})}function Ht(a,f){a.info(function(){return"TIMEOUT: "+f})}Be.prototype.info=function(){};function jt(a,f){if(!a.g)return f;if(!f)return null;try{const $=JSON.parse(f);if($){for(a=0;a<$.length;a++)if(Array.isArray($[a])){var g=$[a];if(!(g.length<2)){var v=g[1];if(Array.isArray(v)&&!(v.length<1)){var L=v[0];if(L!="noop"&&L!="stop"&&L!="close")for(let ne=1;ne<v.length;ne++)v[ne]=""}}}}return Ne($)}catch{return f}}var Me={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},At={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},yn;function Bt(){}p(Bt,qe),Bt.prototype.g=function(){return new XMLHttpRequest},yn=new Bt;function lt(a){return encodeURIComponent(String(a))}function ct(a){var f=1;a=a.split(":");const g=[];for(;f>0&&a.length;)g.push(a.shift()),f--;return a.length&&g.push(a.join(":")),g}function Je(a,f,g,v){this.j=a,this.i=f,this.l=g,this.S=v||1,this.V=new pe(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Dt}function Dt(){this.i=null,this.g="",this.h=!1}var an={},ti={};function ki(a,f,g){a.M=1,a.A=Do(Fn(f)),a.u=g,a.R=!0,_r(a,null)}function _r(a,f){a.F=Date.now(),ko(a),a.B=Fn(a.A);var g=a.B,v=a.S;Array.isArray(v)||(v=[String(v)]),Jh(g.i,"t",v),a.C=0,g=a.j.L,a.h=new Dt,a.g=gd(a.j,g?f:null,!a.u),a.P>0&&(a.O=new de(u(a.Y,a,a.g),a.P)),f=a.V,g=a.g,v=a.ba;var L="readystatechange";Array.isArray(L)||(L&&(ke[0]=L.toString()),L=ke);for(let $=0;$<L.length;$++){const ne=te(g,L[$],v||f.handleEvent,!1,f.h||f);if(!ne)break;f.g[ne.key]=ne}f=a.J?Lt(a.J):{},a.u?(a.v||(a.v="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,f)):(a.v="GET",a.g.ea(a.B,a.v,null,f)),H(),at(a.i,a.v,a.B,a.l,a.S,a.u)}Je.prototype.ba=function(a){a=a.target;const f=this.O;f&&Ss(a)==3?f.j():this.Y(a)},Je.prototype.Y=function(a){try{if(a==this.g)e:{const Pe=Ss(this.g),xt=this.g.ya(),et=this.g.ca();if(!(Pe<3)&&(Pe!=3||this.g&&(this.h.h||this.g.la()||id(this.g)))){this.K||Pe!=4||xt==7||(xt==8||et<=0?H(3):H(2)),Il(this);var f=this.g.ca();this.X=f;var g=Al(this);if(this.o=f==200,on(this.i,this.v,this.B,this.l,this.S,Pe,f),this.o){if(this.U&&!this.L){t:{if(this.g){var v,L=this.g;if((v=L.g?L.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(v)){var $=v;break t}}$=null}if(a=$)Ze(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,wl(this,a);else{this.o=!1,this.m=3,le(12),ni(this),vr(this);break e}}if(this.R){a=!0;let Ft;for(;!this.K&&this.C<g.length;)if(Ft=my(this,g),Ft==ti){Pe==4&&(this.m=4,le(14),a=!1),Ze(this.i,this.l,null,"[Incomplete Response]");break}else if(Ft==an){this.m=4,le(15),Ze(this.i,this.l,g,"[Invalid Chunk]"),a=!1;break}else Ze(this.i,this.l,Ft,null),wl(this,Ft);if(Fh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Pe!=4||g.length!=0||this.h.h||(this.m=1,le(16),a=!1),this.o=this.o&&a,!a)Ze(this.i,this.l,g,"[Invalid Chunked Response]"),ni(this),vr(this);else if(g.length>0&&!this.W){this.W=!0;var ne=this.j;ne.g==this&&ne.aa&&!ne.P&&(ne.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),kl(ne),ne.P=!0,le(11))}}else Ze(this.i,this.l,g,null),wl(this,g);Pe==4&&ni(this),this.o&&!this.K&&(Pe==4?hd(this.j,this):(this.o=!1,ko(this)))}else ky(this.g),f==400&&g.indexOf("Unknown SID")>0?(this.m=3,le(12)):(this.m=0,le(13)),ni(this),vr(this)}}}catch{}finally{}};function Al(a){if(!Fh(a))return a.g.la();const f=id(a.g);if(f==="")return"";let g="";const v=f.length,L=Ss(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return ni(a),vr(a),"";a.h.i=new o.TextDecoder}for(let $=0;$<v;$++)a.h.h=!0,g+=a.h.i.decode(f[$],{stream:!(L&&$==v-1)});return f.length=0,a.h.g+=g,a.C=0,a.h.g}function Fh(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function my(a,f){var g=a.C,v=f.indexOf(`
`,g);return v==-1?ti:(g=Number(f.substring(g,v)),isNaN(g)?an:(v+=1,v+g>f.length?ti:(f=f.slice(v,v+g),a.C=v+g,f)))}Je.prototype.cancel=function(){this.K=!0,ni(this)};function ko(a){a.T=Date.now()+a.H,Uh(a,a.H)}function Uh(a,f){if(a.D!=null)throw Error("WatchDog timer not null");a.D=De(u(a.aa,a),f)}function Il(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Je.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Ht(this.i,this.B),this.M!=2&&(H(),le(17)),ni(this),this.m=2,vr(this)):Uh(this,this.T-a)};function vr(a){a.j.I==0||a.K||hd(a.j,a)}function ni(a){Il(a);var f=a.O;f&&typeof f.dispose=="function"&&f.dispose(),a.O=null,Ge(a.V),a.g&&(f=a.g,a.g=null,f.abort(),f.dispose())}function wl(a,f){try{var g=a.j;if(g.I!=0&&(g.g==a||El(g.h,a))){if(!a.L&&El(g.h,a)&&g.I==3){try{var v=g.Ba.g.parse(f)}catch{v=null}if(Array.isArray(v)&&v.length==3){var L=v;if(L[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<a.F)Vo(g),Mo(g);else break e;Pl(g),le(18)}}else g.xa=L[1],0<g.xa-g.K&&L[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=De(u(g.Va,g),6e3));jh(g.h)<=1&&g.ta&&(g.ta=void 0)}else ii(g,11)}else if((a.L||g.g==a)&&Vo(g),!E(f))for(L=g.Ba.g.parse(f),f=0;f<L.length;f++){let et=L[f];const Ft=et[0];if(!(Ft<=g.K))if(g.K=Ft,et=et[1],g.I==2)if(et[0]=="c"){g.M=et[1],g.ba=et[2];const Un=et[3];Un!=null&&(g.ka=Un,g.j.info("VER="+g.ka));const ri=et[4];ri!=null&&(g.za=ri,g.j.info("SVER="+g.za));const Rs=et[5];Rs!=null&&typeof Rs=="number"&&Rs>0&&(v=1.5*Rs,g.O=v,g.j.info("backChannelRequestTimeoutMs_="+v)),v=g;const Ps=a.g;if(Ps){const Bo=Ps.g?Ps.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Bo){var $=v.h;$.g||Bo.indexOf("spdy")==-1&&Bo.indexOf("quic")==-1&&Bo.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(Tl($,$.h),$.h=null))}if(v.G){const Dl=Ps.g?Ps.g.getResponseHeader("X-HTTP-Session-Id"):null;Dl&&(v.wa=Dl,dt(v.J,v.G,Dl))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-a.F,g.j.info("Handshake RTT: "+g.T+"ms")),v=g;var ne=a;if(v.na=pd(v,v.L?v.ba:null,v.W),ne.L){Gh(v.h,ne);var Pe=ne,xt=v.O;xt&&(Pe.H=xt),Pe.D&&(Il(Pe),ko(Pe)),v.g=ne}else cd(v);g.i.length>0&&Oo(g)}else et[0]!="stop"&&et[0]!="close"||ii(g,7);else g.I==3&&(et[0]=="stop"||et[0]=="close"?et[0]=="stop"?ii(g,7):Rl(g):et[0]!="noop"&&g.l&&g.l.qa(et),g.A=0)}}H(4)}catch{}}var _y=class{constructor(a,f){this.g=a,this.map=f}};function $h(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Hh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function jh(a){return a.h?1:a.g?a.g.size:0}function El(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function Tl(a,f){a.g?a.g.add(f):a.h=f}function Gh(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}$h.prototype.cancel=function(){if(this.i=qh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function qh(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const g of a.g.values())f=f.concat(g.G);return f}return _(a.i)}var Qh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vy(a,f){if(a){a=a.split("&");for(let g=0;g<a.length;g++){const v=a[g].indexOf("=");let L,$=null;v>=0?(L=a[g].substring(0,v),$=a[g].substring(v+1)):L=a[g],f(L,$?decodeURIComponent($.replace(/\+/g," ")):"")}}}function Cs(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let f;a instanceof Cs?(this.l=a.l,yr(this,a.j),this.o=a.o,this.g=a.g,Ar(this,a.u),this.h=a.h,Cl(this,Xh(a.i)),this.m=a.m):a&&(f=String(a).match(Qh))?(this.l=!1,yr(this,f[1]||"",!0),this.o=Ir(f[2]||""),this.g=Ir(f[3]||"",!0),Ar(this,f[4]),this.h=Ir(f[5]||"",!0),Cl(this,f[6]||"",!0),this.m=Ir(f[7]||"")):(this.l=!1,this.i=new Er(null,this.l))}Cs.prototype.toString=function(){const a=[];var f=this.j;f&&a.push(wr(f,zh,!0),":");var g=this.g;return(g||f=="file")&&(a.push("//"),(f=this.o)&&a.push(wr(f,zh,!0),"@"),a.push(lt(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&a.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&a.push("/"),a.push(wr(g,g.charAt(0)=="/"?Iy:Ay,!0))),(g=this.i.toString())&&a.push("?",g),(g=this.m)&&a.push("#",wr(g,Ey)),a.join("")},Cs.prototype.resolve=function(a){const f=Fn(this);let g=!!a.j;g?yr(f,a.j):g=!!a.o,g?f.o=a.o:g=!!a.g,g?f.g=a.g:g=a.u!=null;var v=a.h;if(g)Ar(f,a.u);else if(g=!!a.h){if(v.charAt(0)!="/")if(this.g&&!this.h)v="/"+v;else{var L=f.h.lastIndexOf("/");L!=-1&&(v=f.h.slice(0,L+1)+v)}if(L=v,L==".."||L==".")v="";else if(L.indexOf("./")!=-1||L.indexOf("/.")!=-1){v=L.lastIndexOf("/",0)==0,L=L.split("/");const $=[];for(let ne=0;ne<L.length;){const Pe=L[ne++];Pe=="."?v&&ne==L.length&&$.push(""):Pe==".."?(($.length>1||$.length==1&&$[0]!="")&&$.pop(),v&&ne==L.length&&$.push("")):($.push(Pe),v=!0)}v=$.join("/")}else v=L}return g?f.h=v:g=a.i.toString()!=="",g?Cl(f,Xh(a.i)):g=!!a.m,g&&(f.m=a.m),f};function Fn(a){return new Cs(a)}function yr(a,f,g){a.j=g?Ir(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function Ar(a,f){if(f){if(f=Number(f),isNaN(f)||f<0)throw Error("Bad port number "+f);a.u=f}else a.u=null}function Cl(a,f,g){f instanceof Er?(a.i=f,Ty(a.i,a.l)):(g||(f=wr(f,wy)),a.i=new Er(f,a.l))}function dt(a,f,g){a.i.set(f,g)}function Do(a){return dt(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Ir(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function wr(a,f,g){return typeof a=="string"?(a=encodeURI(a).replace(f,yy),g&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function yy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var zh=/[#\/\?@]/g,Ay=/[#\?:]/g,Iy=/[#\?]/g,wy=/[#\?@]/g,Ey=/#/g;function Er(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function si(a){a.g||(a.g=new Map,a.h=0,a.i&&vy(a.i,function(f,g){a.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}t=Er.prototype,t.add=function(a,f){si(this),this.i=null,a=Di(this,a);let g=this.g.get(a);return g||this.g.set(a,g=[]),g.push(f),this.h+=1,this};function Wh(a,f){si(a),f=Di(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function Kh(a,f){return si(a),f=Di(a,f),a.g.has(f)}t.forEach=function(a,f){si(this),this.g.forEach(function(g,v){g.forEach(function(L){a.call(f,L,v,this)},this)},this)};function Yh(a,f){si(a);let g=[];if(typeof f=="string")Kh(a,f)&&(g=g.concat(a.g.get(Di(a,f))));else for(a=Array.from(a.g.values()),f=0;f<a.length;f++)g=g.concat(a[f]);return g}t.set=function(a,f){return si(this),this.i=null,a=Di(this,a),Kh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},t.get=function(a,f){return a?(a=Yh(this,a),a.length>0?String(a[0]):f):f};function Jh(a,f,g){Wh(a,f),g.length>0&&(a.i=null,a.g.set(Di(a,f),_(g)),a.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(let v=0;v<f.length;v++){var g=f[v];const L=lt(g);g=Yh(this,g);for(let $=0;$<g.length;$++){let ne=L;g[$]!==""&&(ne+="="+lt(g[$])),a.push(ne)}}return this.i=a.join("&")};function Xh(a){const f=new Er;return f.i=a.i,a.g&&(f.g=new Map(a.g),f.h=a.h),f}function Di(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function Ty(a,f){f&&!a.j&&(si(a),a.i=null,a.g.forEach(function(g,v){const L=v.toLowerCase();v!=L&&(Wh(this,v),Jh(this,L,g))},a)),a.j=f}function Cy(a,f){const g=new Be;if(o.Image){const v=new Image;v.onload=d(bs,g,"TestLoadImage: loaded",!0,f,v),v.onerror=d(bs,g,"TestLoadImage: error",!1,f,v),v.onabort=d(bs,g,"TestLoadImage: abort",!1,f,v),v.ontimeout=d(bs,g,"TestLoadImage: timeout",!1,f,v),o.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else f(!1)}function by(a,f){const g=new Be,v=new AbortController,L=setTimeout(()=>{v.abort(),bs(g,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:v.signal}).then($=>{clearTimeout(L),$.ok?bs(g,"TestPingServer: ok",!0,f):bs(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),bs(g,"TestPingServer: error",!1,f)})}function bs(a,f,g,v,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),v(g)}catch{}}function Sy(){this.g=new He}function bl(a){this.i=a.Sb||null,this.h=a.ab||!1}p(bl,qe),bl.prototype.g=function(){return new xo(this.i,this.h)};function xo(a,f){J.call(this),this.H=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(xo,J),t=xo.prototype,t.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=f,this.readyState=1,Cr(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const f={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(f.body=a),(this.H||o).fetch(new Request(this.D,f)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Tr(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Cr(this)),this.g&&(this.readyState=3,Cr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Zh(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Zh(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.B.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?Tr(this):Cr(this),this.readyState==3&&Zh(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Tr(this))},t.Na=function(a){this.g&&(this.response=a,Tr(this))},t.ga=function(){this.g&&Tr(this)};function Tr(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Cr(a)}t.setRequestHeader=function(a,f){this.A.append(a,f)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,a.push(g[0]+": "+g[1]),g=f.next();return a.join(`\r
`)};function Cr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(xo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ed(a){let f="";return kt(a,function(g,v){f+=v,f+=":",f+=g,f+=`\r
`}),f}function Sl(a,f,g){e:{for(v in g){var v=!1;break e}v=!0}v||(g=ed(g),typeof a=="string"?g!=null&&lt(g):dt(a,f,g))}function mt(a){J.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(mt,J);var Ry=/^https?$/i,Py=["POST","PUT"];t=mt.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,f,g,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():yn.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch($){td(this,$);return}if(a=g||"",g=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var L in v)g.set(L,v[L]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const $ of v.keys())g.set($,v.get($));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(g.keys()).find($=>$.toLowerCase()=="content-type"),L=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Py,f,void 0)>=0)||v||L||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,ne]of g)this.g.setRequestHeader($,ne);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch($){td(this,$)}};function td(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.o=5,nd(a),No(a)}function nd(a){a.A||(a.A=!0,W(a,"complete"),W(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,W(this,"complete"),W(this,"abort"),No(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),No(this,!0)),mt.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?sd(this):this.Xa())},t.Xa=function(){sd(this)};function sd(a){if(a.h&&typeof r<"u"){if(a.v&&Ss(a)==4)setTimeout(a.Ca.bind(a),0);else if(W(a,"readystatechange"),Ss(a)==4){a.h=!1;try{const $=a.ca();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var v;if(v=$===0){let ne=String(a.D).match(Qh)[1]||null;!ne&&o.self&&o.self.location&&(ne=o.self.location.protocol.slice(0,-1)),v=!Ry.test(ne?ne.toLowerCase():"")}g=v}if(g)W(a,"complete"),W(a,"success");else{a.o=6;try{var L=Ss(a)>2?a.g.statusText:""}catch{L=""}a.l=L+" ["+a.ca()+"]",nd(a)}}finally{No(a)}}}}function No(a,f){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const g=a.g;a.g=null,f||W(a,"ready");try{g.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Ss(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Ss(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),$e(f)}};function id(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ky(a){const f={};a=(a.g&&Ss(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(E(a[v]))continue;var g=ct(a[v]);const L=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const $=f[L]||[];f[L]=$,$.push(g)}Kt(f,function(v){return v.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function br(a,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[a]||f}function rd(a){this.za=0,this.i=[],this.j=new Be,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=br("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=br("baseRetryDelayMs",5e3,a),this.Za=br("retryDelaySeedMs",1e4,a),this.Ta=br("forwardChannelMaxRetries",2,a),this.va=br("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new $h(a&&a.concurrentRequestLimit),this.Ba=new Sy,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=rd.prototype,t.ka=8,t.I=1,t.connect=function(a,f,g,v){le(0),this.W=a,this.H=f||{},g&&v!==void 0&&(this.H.OSID=g,this.H.OAID=v),this.F=this.X,this.J=pd(this,null,this.W),Oo(this)};function Rl(a){if(od(a),a.I==3){var f=a.V++,g=Fn(a.J);if(dt(g,"SID",a.M),dt(g,"RID",f),dt(g,"TYPE","terminate"),Sr(a,g),f=new Je(a,a.j,f),f.M=2,f.A=Do(Fn(g)),g=!1,o.navigator&&o.navigator.sendBeacon)try{g=o.navigator.sendBeacon(f.A.toString(),"")}catch{}!g&&o.Image&&(new Image().src=f.A,g=!0),g||(f.g=gd(f.j,null),f.g.ea(f.A)),f.F=Date.now(),ko(f)}fd(a)}function Mo(a){a.g&&(kl(a),a.g.cancel(),a.g=null)}function od(a){Mo(a),a.v&&(o.clearTimeout(a.v),a.v=null),Vo(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Oo(a){if(!Hh(a.h)&&!a.m){a.m=!0;var f=a.Ea;se||A(),Ie||(se(),Ie=!0),S.add(f,a),a.D=0}}function Dy(a,f){return jh(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=f.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=De(u(a.Ea,a,f),dd(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const L=new Je(this,this.j,a);let $=this.o;if(this.U&&($?($=Lt($),Cn($,this.U)):$=this.U),this.u!==null||this.R||(L.J=$,$=null),this.S)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var v=this.i[g];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(f+=v,f>4096){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=ld(this,L,f),g=Fn(this.J),dt(g,"RID",a),dt(g,"CVER",22),this.G&&dt(g,"X-HTTP-Session-Id",this.G),Sr(this,g),$&&(this.R?f="headers="+lt(ed($))+"&"+f:this.u&&Sl(g,this.u,$)),Tl(this.h,L),this.Ra&&dt(g,"TYPE","init"),this.S?(dt(g,"$req",f),dt(g,"SID","null"),L.U=!0,ki(L,g,null)):ki(L,g,f),this.I=2}}else this.I==3&&(a?ad(this,a):this.i.length==0||Hh(this.h)||ad(this))};function ad(a,f){var g;f?g=f.l:g=a.V++;const v=Fn(a.J);dt(v,"SID",a.M),dt(v,"RID",g),dt(v,"AID",a.K),Sr(a,v),a.u&&a.o&&Sl(v,a.u,a.o),g=new Je(a,a.j,g,a.D+1),a.u===null&&(g.J=a.o),f&&(a.i=f.G.concat(a.i)),f=ld(a,g,1e3),g.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Tl(a.h,g),ki(g,v,f)}function Sr(a,f){a.H&&kt(a.H,function(g,v){dt(f,v,g)}),a.l&&kt({},function(g,v){dt(f,v,g)})}function ld(a,f,g){g=Math.min(a.i.length,g);const v=a.l?u(a.l.Ka,a.l,a):null;e:{var L=a.i;let Pe=-1;for(;;){const xt=["count="+g];Pe==-1?g>0?(Pe=L[0].g,xt.push("ofs="+Pe)):Pe=0:xt.push("ofs="+Pe);let et=!0;for(let Ft=0;Ft<g;Ft++){var $=L[Ft].g;const Un=L[Ft].map;if($-=Pe,$<0)Pe=Math.max(0,L[Ft].g-100),et=!1;else try{$="req"+$+"_"||"";try{var ne=Un instanceof Map?Un:Object.entries(Un);for(const[ri,Rs]of ne){let Ps=Rs;l(Rs)&&(Ps=Ne(Rs)),xt.push($+ri+"="+encodeURIComponent(Ps))}}catch(ri){throw xt.push($+"type="+encodeURIComponent("_badmap")),ri}}catch{v&&v(Un)}}if(et){ne=xt.join("&");break e}}ne=void 0}return a=a.i.splice(0,g),f.G=a,ne}function cd(a){if(!a.g&&!a.v){a.Y=1;var f=a.Da;se||A(),Ie||(se(),Ie=!0),S.add(f,a),a.A=0}}function Pl(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=De(u(a.Da,a),dd(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,ud(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=De(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,le(10),Mo(this),ud(this))};function kl(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function ud(a){a.g=new Je(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var f=Fn(a.na);dt(f,"RID","rpc"),dt(f,"SID",a.M),dt(f,"AID",a.K),dt(f,"CI",a.F?"0":"1"),!a.F&&a.ia&&dt(f,"TO",a.ia),dt(f,"TYPE","xmlhttp"),Sr(a,f),a.u&&a.o&&Sl(f,a.u,a.o),a.O&&(a.g.H=a.O);var g=a.g;a=a.ba,g.M=1,g.A=Do(Fn(f)),g.u=null,g.R=!0,_r(g,a)}t.Va=function(){this.C!=null&&(this.C=null,Mo(this),Pl(this),le(19))};function Vo(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function hd(a,f){var g=null;if(a.g==f){Vo(a),kl(a),a.g=null;var v=2}else if(El(a.h,f))g=f.G,Gh(a.h,f),v=1;else return;if(a.I!=0){if(f.o)if(v==1){g=f.u?f.u.length:0,f=Date.now()-f.F;var L=a.D;v=G(),W(v,new re(v,g)),Oo(a)}else cd(a);else if(L=f.m,L==3||L==0&&f.X>0||!(v==1&&Dy(a,f)||v==2&&Pl(a)))switch(g&&g.length>0&&(f=a.h,f.i=f.i.concat(g)),L){case 1:ii(a,5);break;case 4:ii(a,10);break;case 3:ii(a,6);break;default:ii(a,2)}}}function dd(a,f){let g=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(g*=2),g*f}function ii(a,f){if(a.j.info("Error code "+f),f==2){var g=u(a.bb,a),v=a.Ua;const L=!v;v=new Cs(v||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||yr(v,"https"),Do(v),L?Cy(v.toString(),g):by(v.toString(),g)}else le(2);a.I=0,a.l&&a.l.pa(f),fd(a),od(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),le(2)):(this.j.info("Failed to ping google.com"),le(1))};function fd(a){if(a.I=0,a.ja=[],a.l){const f=qh(a.h);(f.length!=0||a.i.length!=0)&&(I(a.ja,f),I(a.ja,a.i),a.h.i.length=0,_(a.i),a.i.length=0),a.l.oa()}}function pd(a,f,g){var v=g instanceof Cs?Fn(g):new Cs(g);if(v.g!="")f&&(v.g=f+"."+v.g),Ar(v,v.u);else{var L=o.location;v=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;const $=new Cs(null);v&&yr($,v),f&&($.g=f),L&&Ar($,L),g&&($.h=g),v=$}return g=a.G,f=a.wa,g&&f&&dt(v,g,f),dt(v,"VER",a.ka),Sr(a,v),v}function gd(a,f,g){if(f&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Aa&&!a.ma?new mt(new bl({ab:g})):new mt(a.ma),f.Fa(a.L),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function md(){}t=md.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Lo(){}Lo.prototype.g=function(a,f){return new An(a,f)};function An(a,f){J.call(this),this.g=new rd(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.sa&&(a?a["X-WebChannel-Client-Profile"]=f.sa:a={"X-WebChannel-Client-Profile":f.sa}),this.g.U=a,(a=f&&f.Qb)&&!E(a)&&(this.g.u=a),this.A=f&&f.supportsCrossDomainXhr||!1,this.v=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!E(f)&&(this.g.G=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new xi(this)}p(An,J),An.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},An.prototype.close=function(){Rl(this.g)},An.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var g={};g.__data__=a,a=g}else this.v&&(g={},g.__data__=Ne(a),a=g);f.i.push(new _y(f.Ya++,a)),f.I==3&&Oo(f)},An.prototype.N=function(){this.g.l=null,delete this.j,Rl(this.g),delete this.g,An.Z.N.call(this)};function _d(a){Et.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const g in f){a=g;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}p(_d,Et);function vd(){Fe.call(this),this.status=1}p(vd,Fe);function xi(a){this.g=a}p(xi,md),xi.prototype.ra=function(){W(this.g,"a")},xi.prototype.qa=function(a){W(this.g,new _d(a))},xi.prototype.pa=function(a){W(this.g,new vd)},xi.prototype.oa=function(){W(this.g,"b")},Lo.prototype.createWebChannel=Lo.prototype.g,An.prototype.send=An.prototype.o,An.prototype.open=An.prototype.m,An.prototype.close=An.prototype.close,I_=function(){return new Lo},A_=function(){return G()},y_=yt,Pc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Me.NO_ERROR=0,Me.TIMEOUT=8,Me.HTTP_ERROR=6,ia=Me,At.COMPLETE="complete",v_=At,Ye.EventType=wt,wt.OPEN="a",wt.CLOSE="b",wt.ERROR="c",wt.MESSAGE="d",J.prototype.listen=J.prototype.J,Nr=Ye,mt.prototype.listenOnce=mt.prototype.K,mt.prototype.getLastError=mt.prototype.Ha,mt.prototype.getLastErrorCode=mt.prototype.ya,mt.prototype.getStatus=mt.prototype.ca,mt.prototype.getResponseJson=mt.prototype.La,mt.prototype.getResponseText=mt.prototype.la,mt.prototype.send=mt.prototype.ea,mt.prototype.setWithCredentials=mt.prototype.Fa,__=mt}).apply(typeof Go<"u"?Go:typeof self<"u"?self:typeof window<"u"?window:{});const Qf="@firebase/firestore",zf="4.9.2";/**
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
 */class E_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _D{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Xt.UNAUTHENTICATED)))}shutdown(){}}class vD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class yD{constructor(e){this.t=e,this.currentUser=Xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ke(this.o===void 0,42304);let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new js;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new js,e.enqueueRetryable((()=>i(this.currentUser)))};const o=()=>{const c=r;e.enqueueRetryable((async()=>{await c.promise,await i(this.currentUser)}))},l=c=>{ce("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ce("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new js)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==e?(ce("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ke(typeof s.accessToken=="string",31837,{l:s}),new E_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ke(e===null||typeof e=="string",2055,{h:e}),new Xt(e)}}class AD{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=Xt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ID{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new AD(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(Xt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Wf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wD{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,qn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ke(this.o===void 0,3512);const s=r=>{r.error!=null&&ce("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.m;return this.m=r.token,ce("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable((()=>s(r)))};const i=r=>{ce("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>i(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?i(r):ce("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Wf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Ke(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Wf(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function ED(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class nh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const i=ED(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%62))}return s}}function Ve(t,e){return t<e?-1:t>e?1:0}function kc(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const i=t.charAt(s),r=e.charAt(s);if(i!==r)return Xl(i)===Xl(r)?Ve(i,r):Xl(i)?1:-1}return Ve(t.length,e.length)}const TD=55296,CD=57343;function Xl(t){const e=t.charCodeAt(0);return e>=TD&&e<=CD}function sr(t,e,n){return t.length===e.length&&t.every(((s,i)=>n(s,e[i])))}/**
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
 */const Kf="__name__";class jn{constructor(e,n,s){n===void 0?n=0:n>e.length&&ve(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&ve(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return jn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof jn?e.forEach((s=>{n.push(s)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=jn.compareSegments(e.get(i),n.get(i));if(r!==0)return r}return Ve(e.length,n.length)}static compareSegments(e,n){const s=jn.isNumericId(e),i=jn.isNumericId(n);return s&&!i?-1:!s&&i?1:s&&i?jn.extractNumericId(e).compare(jn.extractNumericId(n)):kc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Hs.fromString(e.substring(4,e.length-2))}}class pt extends jn{construct(e,n,s){return new pt(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new fe(X.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((i=>i.length>0)))}return new pt(n)}static emptyPath(){return new pt([])}}const bD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qt extends jn{construct(e,n,s){return new Qt(e,n,s)}static isValidIdentifier(e){return bD.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Kf}static keyField(){return new Qt([Kf])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new fe(X.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new fe(X.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new fe(X.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(s+=l,i++):(r(),i++)}if(r(),o)throw new fe(X.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qt(n)}static emptyPath(){return new Qt([])}}/**
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
 */function SD(t,e,n){if(!n)throw new fe(X.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function RD(t,e,n,s){if(e===!0&&s===!0)throw new fe(X.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Yf(t){if(!me.isDocumentKey(t))throw new fe(X.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function T_(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function sh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ve(12329,{type:typeof t})}function lo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new fe(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sh(t);throw new fe(X.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const co=-1;function PD(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=Ae.fromTimestamp(s===1e9?new ft(n+1,0):new ft(n,s));return new Ws(i,me.empty(),e)}function kD(t){return new Ws(t.readTime,t.key,co)}class Ws{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Ws(Ae.min(),me.empty(),co)}static max(){return new Ws(Ae.max(),me.empty(),co)}}function DD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=me.comparator(t.documentKey,e.documentKey),n!==0?n:Ve(t.largestBatchId,e.largestBatchId))}/**
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
 */const xD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ND{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function pr(t){if(t.code!==X.FAILED_PRECONDITION||t.message!==xD)throw t;ce("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Y{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ve(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new Y(((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof Y?n:Y.resolve(n)}catch(n){return Y.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):Y.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):Y.reject(n)}static resolve(e){return new Y(((n,s)=>{n(e)}))}static reject(e){return new Y(((n,s)=>{s(e)}))}static waitFor(e){return new Y(((n,s)=>{let i=0,r=0,o=!1;e.forEach((l=>{++i,l.next((()=>{++r,o&&r===i&&n()}),(c=>s(c)))})),o=!0,r===i&&n()}))}static or(e){let n=Y.resolve(!1);for(const s of e)n=n.next((i=>i?Y.resolve(i):s()));return n}static forEach(e,n){const s=[];return e.forEach(((i,r)=>{s.push(n.call(this,i,r))})),this.waitFor(s)}static mapArray(e,n){return new Y(((s,i)=>{const r=e.length,o=new Array(r);let l=0;for(let c=0;c<r;c++){const u=c;n(e[u]).next((d=>{o[u]=d,++l,l===r&&s(o)}),(d=>i(d)))}}))}static doWhile(e,n){return new Y(((s,i)=>{const r=()=>{e()===!0?n().next((()=>{r()}),i):s()};r()}))}}function MD(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function gr(t){return t.name==="IndexedDbTransactionError"}/**
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
 */const ih=-1;function al(t){return t==null}function ka(t){return t===0&&1/t==-1/0}function OD(t){return typeof t=="number"&&Number.isInteger(t)&&!ka(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const C_="";function VD(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Zf(e)),e=LD(t.get(n),e);return Zf(e)}function LD(t,e){let n=e;const s=t.length;for(let i=0;i<s;i++){const r=t.charAt(i);switch(r){case"\0":n+="";break;case C_:n+="";break;default:n+=r}}return n}function Zf(t){return t+C_+""}/**
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
 */class Wt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new S_("Invalid base64 string: "+r):r}})(e);return new Wt(n)}static fromUint8Array(e){const n=(function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r})(e);return new Wt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Wt.EMPTY_BYTE_STRING=new Wt("");const BD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ks(t){if(Ke(!!t,39018),typeof t=="string"){let e=0;const n=BD.exec(t);if(Ke(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:It(t.seconds),nanos:It(t.nanos)}}function It(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ys(t){return typeof t=="string"?Wt.fromBase64String(t):Wt.fromUint8Array(t)}/**
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
 */class FD{constructor(e,n,s,i,r,o,l,c,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=d}}const Da="(default)";class ho{constructor(e,n){this.projectId=e,this.database=n||Da}static empty(){return new ho("","")}get isDefaultDatabase(){return this.database===Da}isEqual(e){return e instanceof ho&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const x_="__type__",UD="__max__",Qo={mapValue:{}},N_="__vector__",xa="value";function Js(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?rh(t)?4:HD(t)?9007199254740991:$D(t)?10:11:ve(28295,{value:t})}function ss(t,e){if(t===e)return!0;const n=Js(t);if(n!==Js(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return uo(t).isEqual(uo(e));case 3:return(function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=Ks(i.timestampValue),l=Ks(r.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(i,r){return Ys(i.bytesValue).isEqual(Ys(r.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(i,r){return It(i.geoPointValue.latitude)===It(r.geoPointValue.latitude)&&It(i.geoPointValue.longitude)===It(r.geoPointValue.longitude)})(t,e);case 2:return(function(i,r){if("integerValue"in i&&"integerValue"in r)return It(i.integerValue)===It(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=It(i.doubleValue),l=It(r.doubleValue);return o===l?ka(o)===ka(l):isNaN(o)&&isNaN(l)}return!1})(t,e);case 9:return sr(t.arrayValue.values||[],e.arrayValue.values||[],ss);case 10:case 11:return(function(i,r){const o=i.mapValue.fields||{},l=r.mapValue.fields||{};if(ep(o)!==ep(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!ss(o[c],l[c])))return!1;return!0})(t,e);default:return ve(52216,{left:t})}}function fo(t,e){return(t.values||[]).find((n=>ss(n,e)))!==void 0}function ir(t,e){if(t===e)return 0;const n=Js(t),s=Js(e);if(n!==s)return Ve(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ve(t.booleanValue,e.booleanValue);case 2:return(function(r,o){const l=It(r.integerValue||r.doubleValue),c=It(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(t,e);case 3:return np(t.timestampValue,e.timestampValue);case 4:return np(uo(t),uo(e));case 5:return kc(t.stringValue,e.stringValue);case 6:return(function(r,o){const l=Ys(r),c=Ys(o);return l.compareTo(c)})(t.bytesValue,e.bytesValue);case 7:return(function(r,o){const l=r.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=Ve(l[u],c[u]);if(d!==0)return d}return Ve(l.length,c.length)})(t.referenceValue,e.referenceValue);case 8:return(function(r,o){const l=Ve(It(r.latitude),It(o.latitude));return l!==0?l:Ve(It(r.longitude),It(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return sp(t.arrayValue,e.arrayValue);case 10:return(function(r,o){const l=r.fields||{},c=o.fields||{},u=l[xa]?.arrayValue,d=c[xa]?.arrayValue,p=Ve(u?.values?.length||0,d?.values?.length||0);return p!==0?p:sp(u,d)})(t.mapValue,e.mapValue);case 11:return(function(r,o){if(r===Qo.mapValue&&o===Qo.mapValue)return 0;if(r===Qo.mapValue)return 1;if(o===Qo.mapValue)return-1;const l=r.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=kc(c[p],d[p]);if(m!==0)return m;const _=ir(l[c[p]],u[d[p]]);if(_!==0)return _}return Ve(c.length,d.length)})(t.mapValue,e.mapValue);default:throw ve(23264,{he:n})}}function np(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ve(t,e);const n=Ks(t),s=Ks(e),i=Ve(n.seconds,s.seconds);return i!==0?i:Ve(n.nanos,s.nanos)}function sp(t,e){const n=t.values||[],s=e.values||[];for(let i=0;i<n.length&&i<s.length;++i){const r=ir(n[i],s[i]);if(r)return r}return Ve(n.length,s.length)}function rr(t){return Dc(t)}function Dc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const s=Ks(n);return`time(${s.seconds},${s.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Ys(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return me.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let s="[",i=!0;for(const r of n.values||[])i?i=!1:s+=",",s+=Dc(r);return s+"]"})(t.arrayValue):"mapValue"in t?(function(n){const s=Object.keys(n.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${Dc(n.fields[o])}`;return i+"}"})(t.mapValue):ve(61005,{value:t})}function ra(t){switch(Js(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ll(t);return e?16+ra(e):16;case 5:return 2*t.stringValue.length;case 6:return Ys(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((i,r)=>i+ra(r)),0)})(t.arrayValue);case 10:case 11:return(function(s){let i=0;return bi(s.fields,((r,o)=>{i+=r.length+ra(o)})),i})(t.mapValue);default:throw ve(13486,{value:t})}}function xc(t){return!!t&&"integerValue"in t}function oh(t){return!!t&&"arrayValue"in t}function ip(t){return!!t&&"nullValue"in t}function rp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function oa(t){return!!t&&"mapValue"in t}function $D(t){return(t?.mapValue?.fields||{})[x_]?.stringValue===N_}function Wr(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return bi(t.mapValue.fields,((n,s)=>e.mapValue.fields[n]=Wr(s))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Wr(t.arrayValue.values[n]);return e}return{...t}}function HD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===UD}/**
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
 */class Sn{constructor(e){this.value=e}static empty(){return new Sn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!oa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wr(n)}setAll(e){let n=Qt.emptyPath(),s={},i=[];e.forEach(((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=l.popLast()}o?s[l.lastSegment()]=Wr(o):i.push(l.lastSegment())}));const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());oa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ss(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];oa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){bi(n,((i,r)=>e[i]=r));for(const i of s)delete e[i]}clone(){return new Sn(Wr(this.value))}}function M_(t){const e=[];return bi(t.fields,((n,s)=>{const i=new Qt([n]);if(oa(s)){const r=M_(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)})),new Mn(e)}/**
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
 */class Ma{constructor(e,n="asc"){this.field=e,this.dir=n}}function jD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class O_{}class Ot extends O_{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new qD(e,n,s):n==="array-contains"?new WD(e,s):n==="in"?new KD(e,s):n==="not-in"?new YD(e,s):n==="array-contains-any"?new JD(e,s):new Ot(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new QD(e,s):new zD(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ir(n,this.value)):n!==null&&Js(this.value)===Js(n)&&this.matchesComparison(ir(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class is extends O_{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new is(e,n)}matches(e){return V_(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function V_(t){return t.op==="and"}function L_(t){return GD(t)&&V_(t)}function GD(t){for(const e of t.filters)if(e instanceof is)return!1;return!0}function Nc(t){if(t instanceof Ot)return t.field.canonicalString()+t.op.toString()+rr(t.value);if(L_(t))return t.filters.map((e=>Nc(e))).join(",");{const e=t.filters.map((n=>Nc(n))).join(",");return`${t.op}(${e})`}}function B_(t,e){return t instanceof Ot?(function(s,i){return i instanceof Ot&&s.op===i.op&&s.field.isEqual(i.field)&&ss(s.value,i.value)})(t,e):t instanceof is?(function(s,i){return i instanceof is&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce(((r,o,l)=>r&&B_(o,i.filters[l])),!0):!1})(t,e):void ve(19439)}function F_(t){return t instanceof Ot?(function(n){return`${n.field.canonicalString()} ${n.op} ${rr(n.value)}`})(t):t instanceof is?(function(n){return n.op.toString()+" {"+n.getFilters().map(F_).join(" ,")+"}"})(t):"Filter"}class qD extends Ot{constructor(e,n,s){super(e,n,s),this.key=me.fromName(s.referenceValue)}matches(e){const n=me.comparator(e.key,this.key);return this.matchesComparison(n)}}class QD extends Ot{constructor(e,n){super(e,"in",n),this.keys=U_("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class zD extends Ot{constructor(e,n){super(e,"not-in",n),this.keys=U_("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function U_(t,e){return(e.arrayValue?.values||[]).map((n=>me.fromName(n.referenceValue)))}class WD extends Ot{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return oh(n)&&fo(n.arrayValue,this.value)}}class KD extends Ot{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&fo(this.value.arrayValue,n)}}class YD extends Ot{constructor(e,n){super(e,"not-in",n)}matches(e){if(fo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!fo(this.value.arrayValue,n)}}class JD extends Ot{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!oh(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>fo(this.value.arrayValue,s)))}}/**
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
 */class XD{constructor(e,n=null,s=[],i=[],r=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=l,this.Te=null}}function lp(t,e=null,n=[],s=[],i=null,r=null,o=null){return new XD(t,e,n,s,i,r,o)}function ah(t){const e=Ee(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((s=>Nc(s))).join(","),n+="|ob:",n+=e.orderBy.map((s=>(function(r){return r.field.canonicalString()+r.dir})(s))).join(","),al(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>rr(s))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>rr(s))).join(",")),e.Te=n}return e.Te}function lh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!jD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!B_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ap(t.startAt,e.startAt)&&ap(t.endAt,e.endAt)}function Mc(t){return me.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class cl{constructor(e,n=null,s=[],i=[],r=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function ZD(t,e,n,s,i,r,o,l){return new cl(t,e,n,s,i,r,o,l)}function ch(t){return new cl(t)}function cp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ex(t){return t.collectionGroup!==null}function Kr(t){const e=Ee(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const r of e.explicitOrderBy)e.Ie.push(r),n.add(r.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Vt(Qt.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((u=>{u.isInequality()&&(l=l.add(u.field))}))})),l})(e).forEach((r=>{n.has(r.canonicalString())||r.isKeyField()||e.Ie.push(new Ma(r,s))})),n.has(Qt.keyField().canonicalString())||e.Ie.push(new Ma(Qt.keyField(),s))}return e.Ie}function Yn(t){const e=Ee(t);return e.Ee||(e.Ee=tx(e,Kr(t))),e.Ee}function tx(t,e){if(t.limitType==="F")return lp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((i=>{const r=i.dir==="desc"?"asc":"desc";return new Ma(i.field,r)}));const n=t.endAt?new Na(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Na(t.startAt.position,t.startAt.inclusive):null;return lp(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function Oc(t,e,n){return new cl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ul(t,e){return lh(Yn(t),Yn(e))&&t.limitType===e.limitType}function $_(t){return`${ah(Yn(t))}|lt:${t.limitType}`}function Li(t){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((i=>F_(i))).join(", ")}]`),al(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((i=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(i))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((i=>rr(i))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((i=>rr(i))).join(",")),`Target(${s})`})(Yn(t))}; limitType=${t.limitType})`}function hl(t,e){return e.isFoundDocument()&&(function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):me.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)})(t,e)&&(function(s,i){for(const r of Kr(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0})(t,e)&&(function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0})(t,e)&&(function(s,i){return!(s.startAt&&!(function(o,l,c){const u=op(o,l,c);return o.inclusive?u<=0:u<0})(s.startAt,Kr(s),i)||s.endAt&&!(function(o,l,c){const u=op(o,l,c);return o.inclusive?u>=0:u>0})(s.endAt,Kr(s),i))})(t,e)}function nx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function H_(t){return(e,n)=>{let s=!1;for(const i of Kr(t)){const r=sx(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function sx(t,e,n){const s=t.field.isKeyField()?me.comparator(e.key,n.key):(function(r,o,l){const c=o.data.field(r),u=l.data.field(r);return c!==null&&u!==null?ir(c,u):ve(42886)})(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ve(19790,{direction:t.dir})}}/**
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
 */const ix=new gt(me.comparator);function Es(){return ix}const j_=new gt(me.comparator);function Mr(...t){let e=j_;for(const n of t)e=e.insert(n.key,n);return e}function G_(t){let e=j_;return t.forEach(((n,s)=>e=e.insert(n,s.overlayedDocument))),e}function hi(){return Yr()}function q_(){return Yr()}function Yr(){return new Si((t=>t.toString()),((t,e)=>t.isEqual(e)))}const rx=new gt(me.comparator),ox=new Vt(me.comparator);function Le(...t){let e=ox;for(const n of t)e=e.add(n);return e}const ax=new Vt(Ve);function lx(){return ax}/**
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
 */function uh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ka(e)?"-0":e}}function Q_(t){return{integerValue:""+t}}function cx(t,e){return OD(e)?Q_(e):uh(t,e)}/**
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
 */class dl{constructor(){this._=void 0}}function ux(t,e,n){return t instanceof Oa?(function(i,r){const o={fields:{[P_]:{stringValue:R_},[D_]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&rh(r)&&(r=ll(r)),r&&(o.fields[k_]=r),{mapValue:o}})(n,e):t instanceof po?W_(t,e):t instanceof go?K_(t,e):(function(i,r){const o=z_(i,r),l=up(o)+up(i.Ae);return xc(o)&&xc(i.Ae)?Q_(l):uh(i.serializer,l)})(t,e)}function hx(t,e,n){return t instanceof po?W_(t,e):t instanceof go?K_(t,e):n}function z_(t,e){return t instanceof Va?(function(s){return xc(s)||(function(r){return!!r&&"doubleValue"in r})(s)})(e)?e:{integerValue:0}:null}class Oa extends dl{}class po extends dl{constructor(e){super(),this.elements=e}}function W_(t,e){const n=Y_(e);for(const s of t.elements)n.some((i=>ss(i,s)))||n.push(s);return{arrayValue:{values:n}}}class go extends dl{constructor(e){super(),this.elements=e}}function K_(t,e){let n=Y_(e);for(const s of t.elements)n=n.filter((i=>!ss(i,s)));return{arrayValue:{values:n}}}class Va extends dl{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function up(t){return It(t.integerValue||t.doubleValue)}function Y_(t){return oh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function dx(t,e){return t.field.isEqual(e.field)&&(function(s,i){return s instanceof po&&i instanceof po||s instanceof go&&i instanceof go?sr(s.elements,i.elements,ss):s instanceof Va&&i instanceof Va?ss(s.Ae,i.Ae):s instanceof Oa&&i instanceof Oa})(t.transform,e.transform)}class fx{constructor(e,n){this.version=e,this.transformResults=n}}class ms{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ms}static exists(e){return new ms(void 0,e)}static updateTime(e){return new ms(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function aa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class fl{}function J_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Z_(t.key,ms.none()):new bo(t.key,t.data,ms.none());{const n=t.data,s=Sn.empty();let i=new Vt(Qt.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Ri(t.key,s,new Mn(i.toArray()),ms.none())}}function px(t,e,n){t instanceof bo?(function(i,r,o){const l=i.value.clone(),c=dp(i.fieldTransforms,r,o.transformResults);l.setAll(c),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):t instanceof Ri?(function(i,r,o){if(!aa(i.precondition,r))return void r.convertToUnknownDocument(o.version);const l=dp(i.fieldTransforms,r,o.transformResults),c=r.data;c.setAll(X_(i)),c.setAll(l),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):(function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function Jr(t,e,n,s){return t instanceof bo?(function(r,o,l,c){if(!aa(r.precondition,o))return l;const u=r.value.clone(),d=fp(r.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,s):t instanceof Ri?(function(r,o,l,c){if(!aa(r.precondition,o))return l;const u=fp(r.fieldTransforms,c,o),d=o.data;return d.setAll(X_(r)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((p=>p.field)))})(t,e,n,s):(function(r,o,l){return aa(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l})(t,e,n)}function gx(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=z_(s.transform,i||null);r!=null&&(n===null&&(n=Sn.empty()),n.set(s.field,r))}return n||null}function hp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&sr(s,i,((r,o)=>dx(r,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class bo extends fl{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ri extends fl{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function X_(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function dp(t,e,n){const s=new Map;Ke(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,l=e.data.field(r.field);s.set(r.field,hx(o,l,n[i]))}return s}function fp(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,ux(r,o,e))}return s}class Z_ extends fl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class mx extends fl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class _x{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&px(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Jr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Jr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=q_();return this.mutations.forEach((i=>{const r=e.get(i.key),o=r.overlayedDocument;let l=this.applyToLocalView(o,r.mutatedFields);l=n.has(i.key)?null:l;const c=J_(o,l);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(Ae.min())})),s}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Le())}isEqual(e){return this.batchId===e.batchId&&sr(this.mutations,e.mutations,((n,s)=>hp(n,s)))&&sr(this.baseMutations,e.baseMutations,((n,s)=>hp(n,s)))}}class hh{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){Ke(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let i=(function(){return rx})();const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new hh(e,n,s,i)}}/**
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
 */class vx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class yx{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Tt,Ue;function Ax(t){switch(t){case X.OK:return ve(64938);case X.CANCELLED:case X.UNKNOWN:case X.DEADLINE_EXCEEDED:case X.RESOURCE_EXHAUSTED:case X.INTERNAL:case X.UNAVAILABLE:case X.UNAUTHENTICATED:return!1;case X.INVALID_ARGUMENT:case X.NOT_FOUND:case X.ALREADY_EXISTS:case X.PERMISSION_DENIED:case X.FAILED_PRECONDITION:case X.ABORTED:case X.OUT_OF_RANGE:case X.UNIMPLEMENTED:case X.DATA_LOSS:return!0;default:return ve(15467,{code:t})}}function ev(t){if(t===void 0)return ws("GRPC error has no .code"),X.UNKNOWN;switch(t){case Tt.OK:return X.OK;case Tt.CANCELLED:return X.CANCELLED;case Tt.UNKNOWN:return X.UNKNOWN;case Tt.DEADLINE_EXCEEDED:return X.DEADLINE_EXCEEDED;case Tt.RESOURCE_EXHAUSTED:return X.RESOURCE_EXHAUSTED;case Tt.INTERNAL:return X.INTERNAL;case Tt.UNAVAILABLE:return X.UNAVAILABLE;case Tt.UNAUTHENTICATED:return X.UNAUTHENTICATED;case Tt.INVALID_ARGUMENT:return X.INVALID_ARGUMENT;case Tt.NOT_FOUND:return X.NOT_FOUND;case Tt.ALREADY_EXISTS:return X.ALREADY_EXISTS;case Tt.PERMISSION_DENIED:return X.PERMISSION_DENIED;case Tt.FAILED_PRECONDITION:return X.FAILED_PRECONDITION;case Tt.ABORTED:return X.ABORTED;case Tt.OUT_OF_RANGE:return X.OUT_OF_RANGE;case Tt.UNIMPLEMENTED:return X.UNIMPLEMENTED;case Tt.DATA_LOSS:return X.DATA_LOSS;default:return ve(39323,{code:t})}}(Ue=Tt||(Tt={}))[Ue.OK=0]="OK",Ue[Ue.CANCELLED=1]="CANCELLED",Ue[Ue.UNKNOWN=2]="UNKNOWN",Ue[Ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ue[Ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ue[Ue.NOT_FOUND=5]="NOT_FOUND",Ue[Ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ue[Ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ue[Ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ue[Ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ue[Ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ue[Ue.ABORTED=10]="ABORTED",Ue[Ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ue[Ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ue[Ue.INTERNAL=13]="INTERNAL",Ue[Ue.UNAVAILABLE=14]="UNAVAILABLE",Ue[Ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Ix(){return new TextEncoder}/**
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
 */const wx=new Hs([4294967295,4294967295],0);function pp(t){const e=Ix().encode(t),n=new m_;return n.update(e),new Uint8Array(n.digest())}function gp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Hs([n,s],0),new Hs([i,r],0)]}class dh{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Or(`Invalid padding: ${n}`);if(s<0)throw new Or(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Or(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Or(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Hs.fromNumber(this.ge)}ye(e,n,s){let i=e.add(n.multiply(Hs.fromNumber(s)));return i.compare(wx)===1&&(i=new Hs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=pp(e),[s,i]=gp(n);for(let r=0;r<this.hashCount;r++){const o=this.ye(s,i,r);if(!this.we(o))return!1}return!0}static create(e,n,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new dh(r,i,n);return s.forEach((l=>o.insert(l))),o}insert(e){if(this.ge===0)return;const n=pp(e),[s,i]=gp(n);for(let r=0;r<this.hashCount;r++){const o=this.ye(s,i,r);this.Se(o)}}Se(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Or extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class la{constructor(e,n,s,i){this.be=e,this.removedTargetIds=n,this.key=s,this.De=i}}class tv{constructor(e,n){this.targetId=e,this.Ce=n}}class nv{constructor(e,n,s=Wt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class mp{constructor(){this.ve=0,this.Fe=_p(),this.Me=Wt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Le(),n=Le(),s=Le();return this.Fe.forEach(((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:ve(38017,{changeType:r})}})),new So(this.Me,this.xe,e,n,s)}qe(){this.Oe=!1,this.Fe=_p()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ke(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Ex{constructor(e){this.Ge=e,this.ze=new Map,this.je=Es(),this.Je=zo(),this.He=zo(),this.Ye=new gt(Ve)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const s=this.nt(n);switch(e.state){case 0:this.rt(n)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(e.resumeToken));break;default:ve(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((s,i)=>{this.rt(i)&&n(i)}))}st(e){const n=e.targetId,s=e.Ce.count,i=this.ot(n);if(i){const r=i.target;if(Mc(r))if(s===0){const o=new me(r.path);this.et(n,o,en.newNoDocument(o,Ae.min()))}else Ke(s===1,20013,{expectedCount:s});else{const o=this._t(n);if(o!==s){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=n;let o,l;try{o=Ys(s).toUint8Array()}catch(c){if(c instanceof S_)return nr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new dh(o,i,r)}catch(c){return nr(c instanceof Or?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,n,s){return n.Ce.count===s-this.Pt(e,n.targetId)?0:2}Pt(e,n){const s=this.Ge.getRemoteKeysForTarget(n);let i=0;return s.forEach((r=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(l)||(this.et(n,r,null),i++)})),i}Tt(e){const n=new Map;this.ze.forEach(((r,o)=>{const l=this.ot(o);if(l){if(r.current&&Mc(l.target)){const c=new me(l.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,en.newNoDocument(c,e))}r.Be&&(n.set(o,r.ke()),r.qe())}}));let s=Le();this.He.forEach(((r,o)=>{let l=!0;o.forEachWhile((c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(s=s.add(r))})),this.je.forEach(((r,o)=>o.setReadTime(e)));const i=new pl(e,n,this.Ye,this.je,s);return this.je=Es(),this.Je=zo(),this.He=zo(),this.Ye=new gt(Ve),i}Xe(e,n){if(!this.rt(e))return;const s=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,s){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),s&&(this.je=this.je.insert(n,s))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new mp,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Vt(Ve),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Vt(Ve),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||ce("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new mp),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function zo(){return new gt(me.comparator)}function _p(){return new gt(me.comparator)}const Tx={asc:"ASCENDING",desc:"DESCENDING"},Cx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},bx={and:"AND",or:"OR"};class Sx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Vc(t,e){return t.useProto3Json||al(e)?e:{value:e}}function La(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function sv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Rx(t,e){return La(t,e.toTimestamp())}function Jn(t){return Ke(!!t,49232),Ae.fromTimestamp((function(n){const s=Ks(n);return new ft(s.seconds,s.nanos)})(t))}function fh(t,e){return Lc(t,e).canonicalString()}function Lc(t,e){const n=(function(i){return new pt(["projects",i.projectId,"databases",i.database])})(t).child("documents");return e===void 0?n:n.child(e)}function iv(t){const e=pt.fromString(t);return Ke(cv(e),10190,{key:e.toString()}),e}function Bc(t,e){return fh(t.databaseId,e.path)}function Zl(t,e){const n=iv(e);if(n.get(1)!==t.databaseId.projectId)throw new fe(X.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new fe(X.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new me(ov(n))}function rv(t,e){return fh(t.databaseId,e)}function Px(t){const e=iv(t);return e.length===4?pt.emptyPath():ov(e)}function Fc(t){return new pt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ov(t){return Ke(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function vp(t,e,n){return{name:Bc(t,e),fields:n.value.mapValue.fields}}function kx(t,e){let n;if("targetChange"in e){e.targetChange;const s=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ve(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=(function(u,d){return u.useProto3Json?(Ke(d===void 0||typeof d=="string",58123),Wt.fromBase64String(d||"")):(Ke(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Wt.fromUint8Array(d||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&(function(u){const d=u.code===void 0?X.UNKNOWN:ev(u.code);return new fe(d,u.message||"")})(o);n=new nv(s,i,r,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Zl(t,s.document.name),r=Jn(s.document.updateTime),o=s.document.createTime?Jn(s.document.createTime):Ae.min(),l=new Sn({mapValue:{fields:s.document.fields}}),c=en.newFoundDocument(i,r,o,l),u=s.targetIds||[],d=s.removedTargetIds||[];n=new la(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Zl(t,s.document),r=s.readTime?Jn(s.readTime):Ae.min(),o=en.newNoDocument(i,r),l=s.removedTargetIds||[];n=new la([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Zl(t,s.document),r=s.removedTargetIds||[];n=new la([],r,i,null)}else{if(!("filter"in e))return ve(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new yx(i,r),l=s.targetId;n=new tv(l,o)}}return n}function Dx(t,e){let n;if(e instanceof bo)n={update:vp(t,e.key,e.value)};else if(e instanceof Z_)n={delete:Bc(t,e.key)};else if(e instanceof Ri)n={update:vp(t,e.key,e.data),updateMask:Ux(e.fieldMask)};else{if(!(e instanceof mx))return ve(16599,{Vt:e.type});n={verify:Bc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((s=>(function(r,o){const l=o.transform;if(l instanceof Oa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof po)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof go)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Va)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw ve(20930,{transform:o.transform})})(0,s)))),e.precondition.isNone||(n.currentDocument=(function(i,r){return r.updateTime!==void 0?{updateTime:Rx(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:ve(27497)})(t,e.precondition)),n}function xx(t,e){return t&&t.length>0?(Ke(e!==void 0,14353),t.map((n=>(function(i,r){let o=i.updateTime?Jn(i.updateTime):Jn(r);return o.isEqual(Ae.min())&&(o=Jn(r)),new fx(o,i.transformResults||[])})(n,e)))):[]}function Nx(t,e){return{documents:[rv(t,e.path)]}}function Mx(t,e){const n={structuredQuery:{}},s=e.path;let i;e.collectionGroup!==null?(i=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=rv(t,i);const r=(function(u){if(u.length!==0)return lv(is.create(u,"and"))})(e.filters);r&&(n.structuredQuery.where=r);const o=(function(u){if(u.length!==0)return u.map((d=>(function(m){return{field:Bi(m.field),direction:Lx(m.dir)}})(d)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Vc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:n,parent:i}}function Ox(t){let e=Px(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Ke(s===1,65062);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let r=[];n.where&&(r=(function(p){const m=av(p);return m instanceof is&&L_(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((m=>(function(I){return new Ma(Fi(I.field),(function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(I.direction))})(m)))})(n.orderBy));let l=null;n.limit&&(l=(function(p){let m;return m=typeof p=="object"?p.value:p,al(m)?null:m})(n.limit));let c=null;n.startAt&&(c=(function(p){const m=!!p.before,_=p.values||[];return new Na(_,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const m=!p.before,_=p.values||[];return new Na(_,m)})(n.endAt)),ZD(e,i,o,r,l,"F",c,u)}function Vx(t,e){const n=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ve(28987,{purpose:i})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function av(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Fi(n.unaryFilter.field);return Ot.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=Fi(n.unaryFilter.field);return Ot.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Fi(n.unaryFilter.field);return Ot.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Fi(n.unaryFilter.field);return Ot.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ve(61313);default:return ve(60726)}})(t):t.fieldFilter!==void 0?(function(n){return Ot.create(Fi(n.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ve(58110);default:return ve(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return is.create(n.compositeFilter.filters.map((s=>av(s))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ve(1026)}})(n.compositeFilter.op))})(t):ve(30097,{filter:t})}function Lx(t){return Tx[t]}function Bx(t){return Cx[t]}function Fx(t){return bx[t]}function Bi(t){return{fieldPath:t.canonicalString()}}function Fi(t){return Qt.fromServerFormat(t.fieldPath)}function lv(t){return t instanceof Ot?(function(n){if(n.op==="=="){if(rp(n.value))return{unaryFilter:{field:Bi(n.field),op:"IS_NAN"}};if(ip(n.value))return{unaryFilter:{field:Bi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(rp(n.value))return{unaryFilter:{field:Bi(n.field),op:"IS_NOT_NAN"}};if(ip(n.value))return{unaryFilter:{field:Bi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bi(n.field),op:Bx(n.op),value:n.value}}})(t):t instanceof is?(function(n){const s=n.getFilters().map((i=>lv(i)));return s.length===1?s[0]:{compositeFilter:{op:Fx(n.op),filters:s}}})(t):ve(54877,{filter:t})}function Ux(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function cv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Bs{constructor(e,n,s,i,r=Ae.min(),o=Ae.min(),l=Wt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Bs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Bs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Bs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Bs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class $x{constructor(e){this.yt=e}}function Hx(t){const e=Ox({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Oc(e,e.limit,"L"):e}/**
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
 */class jx{constructor(){this.Cn=new Gx}addToCollectionParentIndex(e,n){return this.Cn.add(n),Y.resolve()}getCollectionParents(e,n){return Y.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return Y.resolve()}deleteFieldIndex(e,n){return Y.resolve()}deleteAllFieldIndexes(e){return Y.resolve()}createTargetIndexes(e,n){return Y.resolve()}getDocumentsMatchingTarget(e,n){return Y.resolve(null)}getIndexType(e,n){return Y.resolve(0)}getFieldIndexes(e,n){return Y.resolve([])}getNextCollectionGroupToUpdate(e){return Y.resolve(null)}getMinOffset(e,n){return Y.resolve(Ws.min())}getMinOffsetFromCollectionGroup(e,n){return Y.resolve(Ws.min())}updateCollectionGroup(e,n,s){return Y.resolve()}updateIndexEntries(e,n){return Y.resolve()}}class Gx{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new Vt(pt.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Vt(pt.comparator)).toArray()}}/**
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
 */const Ap="LruGarbageCollector",qx=1048576;function Ip([t,e],[n,s]){const i=Ve(t,n);return i===0?Ve(e,s):i}class Qx{constructor(e){this.Ir=e,this.buffer=new Vt(Ip),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();Ip(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class zx{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ce(Ap,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){gr(n)?ce(Ap,"Ignoring IndexedDB error during garbage collection: ",n):await pr(n)}await this.Vr(3e5)}))}}class Wx{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(e,n){if(n===0)return Y.resolve(ol.ce);const s=new Qx(n);return this.mr.forEachTarget(e,(i=>s.Ar(i.sequenceNumber))).next((()=>this.mr.pr(e,(i=>s.Ar(i))))).next((()=>s.maxValue))}removeTargets(e,n,s){return this.mr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ce("LruGarbageCollector","Garbage collection skipped; disabled"),Y.resolve(yp)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ce("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),yp):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let s,i,r,o,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(ce("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i)))).next((p=>(s=p,l=Date.now(),this.removeTargets(e,s,n)))).next((p=>(r=p,c=Date.now(),this.removeOrphanedDocuments(e,s)))).next((p=>(u=Date.now(),Vi()<=Oe.DEBUG&&ce("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${r} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),Y.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:p}))))}}function Kx(t,e){return new Wx(t,e)}/**
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
 */class Yx{constructor(){this.changes=new Si((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,en.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?Y.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Jx{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Xx{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next((i=>(s=i,this.remoteDocumentCache.getEntry(e,n)))).next((i=>(s!==null&&Jr(s.mutation,i,Mn.empty(),ft.now()),i)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.getLocalViewOfDocuments(e,s,Le()).next((()=>s))))}getLocalViewOfDocuments(e,n,s=Le()){const i=hi();return this.populateOverlays(e,i,n).next((()=>this.computeViews(e,n,i,s).next((r=>{let o=Mr();return r.forEach(((l,c)=>{o=o.insert(l,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const s=hi();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,Le())))}populateOverlays(e,n,s){const i=[];return s.forEach((r=>{n.has(r)||i.push(r)})),this.documentOverlayCache.getOverlays(e,i).next((r=>{r.forEach(((o,l)=>{n.set(o,l)}))}))}computeViews(e,n,s,i){let r=Es();const o=Yr(),l=(function(){return Yr()})();return n.forEach(((c,u)=>{const d=s.get(u.key);i.has(u.key)&&(d===void 0||d.mutation instanceof Ri)?r=r.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Jr(d.mutation,u,d.mutation.getFieldMask(),ft.now())):o.set(u.key,Mn.empty())})),this.recalculateAndSaveOverlays(e,r).next((c=>(c.forEach(((u,d)=>o.set(u,d))),n.forEach(((u,d)=>l.set(u,new Jx(d,o.get(u)??null)))),l)))}recalculateAndSaveOverlays(e,n){const s=Yr();let i=new gt(((o,l)=>o-l)),r=Le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const l of o)l.keys().forEach((c=>{const u=n.get(c);if(u===null)return;let d=s.get(c)||Mn.empty();d=l.applyToLocalView(u,d),s.set(c,d);const p=(i.get(l.batchId)||Le()).add(c);i=i.insert(l.batchId,p)}))})).next((()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,p=q_();d.forEach((m=>{if(!r.has(m)){const _=J_(n.get(m),s.get(m));_!==null&&p.set(m,_),r=r.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return Y.waitFor(o)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,n,s,i){return(function(o){return me.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ex(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,i):this.getDocumentsMatchingCollectionQuery(e,n,s,i)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next((r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):Y.resolve(hi());let l=co,c=r;return o.next((u=>Y.forEach(u,((d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),r.get(d)?Y.resolve():this.remoteDocumentCache.getEntry(e,d).next((m=>{c=c.insert(d,m)}))))).next((()=>this.populateOverlays(e,u,r))).next((()=>this.computeViews(e,c,u,Le()))).next((d=>({batchId:l,changes:G_(d)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new me(n)).next((s=>{let i=Mr();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i}))}getDocumentsMatchingCollectionGroupQuery(e,n,s,i){const r=n.collectionGroup;let o=Mr();return this.indexManager.getCollectionParents(e,r).next((l=>Y.forEach(l,(c=>{const u=(function(p,m){return new cl(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,c.child(r));return this.getDocumentsMatchingCollectionQuery(e,u,s,i).next((d=>{d.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next((o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r,i)))).next((o=>{r.forEach(((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,en.newInvalidDocument(d)))}));let l=Mr();return o.forEach(((c,u)=>{const d=r.get(c);d!==void 0&&Jr(d.mutation,u,Mn.empty(),ft.now()),hl(n,u)&&(l=l.insert(c,u))})),l}))}}/**
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
 */class Zx{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return Y.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(i){return{id:i.id,version:i.version,createTime:Jn(i.createTime)}})(n)),Y.resolve()}getNamedQuery(e,n){return Y.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(i){return{name:i.name,query:Hx(i.bundledQuery),readTime:Jn(i.readTime)}})(n)),Y.resolve()}}/**
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
 */class eN{constructor(){this.overlays=new gt(me.comparator),this.qr=new Map}getOverlay(e,n){return Y.resolve(this.overlays.get(n))}getOverlays(e,n){const s=hi();return Y.forEach(n,(i=>this.getOverlay(e,i).next((r=>{r!==null&&s.set(i,r)})))).next((()=>s))}saveOverlays(e,n,s){return s.forEach(((i,r)=>{this.St(e,n,r)})),Y.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.qr.get(s);return i!==void 0&&(i.forEach((r=>this.overlays=this.overlays.remove(r))),this.qr.delete(s)),Y.resolve()}getOverlaysForCollection(e,n,s){const i=hi(),r=n.length+1,o=new me(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return Y.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new gt(((u,d)=>u-d));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let d=r.get(u.largestBatchId);d===null&&(d=hi(),r=r.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=hi(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((u,d)=>l.set(u,d))),!(l.size()>=i)););return Y.resolve(l)}St(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(s.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new vx(n,s));let r=this.qr.get(n);r===void 0&&(r=Le(),this.qr.set(n,r)),this.qr.set(n,r.add(s.key))}}/**
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
 */class tN{constructor(){this.sessionToken=Wt.EMPTY_BYTE_STRING}getSessionToken(e){return Y.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,Y.resolve()}}/**
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
 */class nN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Vt(Ut.$r)}checkEmpty(e){return Y.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new _x(r,n,s,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new Ut(l.key,r)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return Y.resolve(o)}lookupMutationBatch(e,n){return Y.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ei(s),r=i<0?0:i;return Y.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return Y.resolve(this.mutationQueue.length===0?ih:this.tr-1)}getAllMutationBatches(e){return Y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ut(n,0),i=new Ut(n,Number.POSITIVE_INFINITY),r=[];return this.Zr.forEachInRange([s,i],(o=>{const l=this.Xr(o.Yr);r.push(l)})),Y.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Vt(Ve);return n.forEach((i=>{const r=new Ut(i,0),o=new Ut(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([r,o],(l=>{s=s.add(l.Yr)}))})),Y.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;me.isDocumentKey(r)||(r=r.child(""));const o=new Ut(new me(r),0);let l=new Vt(Ve);return this.Zr.forEachWhile((c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(l=l.add(c.Yr)),!0)}),o),Y.resolve(this.ti(l))}ti(e){const n=[];return e.forEach((s=>{const i=this.Xr(s);i!==null&&n.push(i)})),n}removeMutationBatch(e,n){Ke(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return Y.forEach(n.mutations,(i=>{const r=new Ut(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,n){const s=new Ut(n,0),i=this.Zr.firstAfterOrEqual(s);return Y.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,Y.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class sN{constructor(e){this.ri=e,this.docs=(function(){return new gt(me.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.ri(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return Y.resolve(s?s.document.mutableCopy():en.newInvalidDocument(n))}getEntries(e,n){let s=Es();return n.forEach((i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():en.newInvalidDocument(i))})),Y.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Es();const o=n.path,l=new me(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||DD(kD(d),s)<=0||(i.has(d.key)||hl(n,d))&&(r=r.insert(d.key,d.mutableCopy()))}return Y.resolve(r)}getAllFromCollectionGroup(e,n,s,i){ve(9500)}ii(e,n){return Y.forEach(this.docs,(s=>n(s)))}newChangeBuffer(e){return new iN(this)}getSize(e){return Y.resolve(this.size)}}class iN extends Yx{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((s,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(s)})),Y.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class rN{constructor(e){this.persistence=e,this.si=new Si((n=>ah(n)),lh),this.lastRemoteSnapshotVersion=Ae.min(),this.highestTargetId=0,this.oi=0,this._i=new ph,this.targetCount=0,this.ai=or.ur()}forEachTarget(e,n){return this.si.forEach(((s,i)=>n(i))),Y.resolve()}getLastRemoteSnapshotVersion(e){return Y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Y.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),Y.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.oi&&(this.oi=n),Y.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new or(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,Y.resolve()}updateTargetData(e,n){return this.Pr(n),Y.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,Y.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.si.forEach(((o,l)=>{l.sequenceNumber<=n&&s.get(l.targetId)===null&&(this.si.delete(o),r.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)})),Y.waitFor(r).next((()=>i))}getTargetCount(e){return Y.resolve(this.targetCount)}getTargetData(e,n){const s=this.si.get(n)||null;return Y.resolve(s)}addMatchingKeys(e,n,s){return this._i.Wr(n,s),Y.resolve()}removeMatchingKeys(e,n,s){this._i.zr(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach((o=>{r.push(i.markPotentiallyOrphaned(e,o))})),Y.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),Y.resolve()}getMatchingKeysForTargetId(e,n){const s=this._i.Hr(n);return Y.resolve(s)}containsKey(e,n){return Y.resolve(this._i.containsKey(n))}}/**
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
 */class hv{constructor(e,n){this.ui={},this.overlays={},this.ci=new ol(0),this.li=!1,this.li=!0,this.hi=new tN,this.referenceDelegate=e(this),this.Pi=new rN(this),this.indexManager=new jx,this.remoteDocumentCache=(function(i){return new sN(i)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new $x(n),this.Ii=new Zx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new eN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.ui[e.toKey()];return s||(s=new nN(n,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,s){ce("MemoryPersistence","Starting transaction:",e);const i=new oN(this.ci.next());return this.referenceDelegate.Ei(),s(i).next((r=>this.referenceDelegate.di(i).next((()=>r)))).toPromise().then((r=>(i.raiseOnCommittedEvent(),r)))}Ai(e,n){return Y.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,n))))}}class oN extends ND{constructor(e){super(),this.currentSequenceNumber=e}}class gh{constructor(e){this.persistence=e,this.Ri=new ph,this.Vi=null}static mi(e){return new gh(e)}get fi(){if(this.Vi)return this.Vi;throw ve(60996)}addReference(e,n,s){return this.Ri.addReference(s,n),this.fi.delete(s.toString()),Y.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.fi.add(s.toString()),Y.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),Y.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((i=>this.fi.add(i.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next((i=>{i.forEach((r=>this.fi.add(r.toString())))})).next((()=>s.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Y.forEach(this.fi,(s=>{const i=me.fromPath(s);return this.gi(e,i).next((r=>{r||n.removeEntry(i,Ae.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((s=>{s?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return Y.or([()=>Y.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Ba{constructor(e,n){this.persistence=e,this.pi=new Si((s=>VD(s.path)),((s,i)=>s.isEqual(i))),this.garbageCollector=Kx(this,n)}static mi(e,n){return new Ba(e,n)}Ei(){}di(e){return Y.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>n.next((i=>s+i))))}wr(e){let n=0;return this.pr(e,(s=>{n++})).next((()=>n))}pr(e,n){return Y.forEach(this.pi,((s,i)=>this.br(e,s,i).next((r=>r?Y.resolve():n(i)))))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const i=this.persistence.getRemoteDocumentCache(),r=i.newChangeBuffer();return i.ii(e,(o=>this.br(e,o,n).next((l=>{l||(s++,r.removeEntry(o,Ae.min()))})))).next((()=>r.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),Y.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),Y.resolve()}removeReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),Y.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),Y.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ra(e.data.value)),n}br(e,n,s){return Y.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return Y.resolve(i!==void 0&&i>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class aN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class lN{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return YR()?8:MD(rn())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,s,i){const r={result:null};return this.ys(e,n).next((o=>{r.result=o})).next((()=>{if(!r.result)return this.ws(e,n,i,s).next((o=>{r.result=o}))})).next((()=>{if(r.result)return;const o=new aN;return this.Ss(e,n,o).next((l=>{if(r.result=l,this.Vs)return this.bs(e,n,o,l.size)}))})).next((()=>r.result))}bs(e,n,s,i){return s.documentReadCount<this.fs?(Vi()<=Oe.DEBUG&&ce("QueryEngine","SDK will not create cache indexes for query:",Li(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),Y.resolve()):(Vi()<=Oe.DEBUG&&ce("QueryEngine","Query:",Li(n),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.gs*i?(Vi()<=Oe.DEBUG&&ce("QueryEngine","The SDK decides to create cache indexes for query:",Li(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yn(n))):Y.resolve())}ys(e,n){if(cp(n))return Y.resolve(null);let s=Yn(n);return this.indexManager.getIndexType(e,s).next((i=>i===0?null:(n.limit!==null&&i===1&&(n=Oc(n,null,"F"),s=Yn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next((r=>{const o=Le(...r);return this.ps.getDocuments(e,o).next((l=>this.indexManager.getMinOffset(e,s).next((c=>{const u=this.Ds(n,l);return this.Cs(n,u,o,c.readTime)?this.ys(e,Oc(n,null,"F")):this.vs(e,u,n,c)}))))})))))}ws(e,n,s,i){return cp(n)||i.isEqual(Ae.min())?Y.resolve(null):this.ps.getDocuments(e,s).next((r=>{const o=this.Ds(n,r);return this.Cs(n,o,s,i)?Y.resolve(null):(Vi()<=Oe.DEBUG&&ce("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Li(n)),this.vs(e,o,n,PD(i,co)).next((l=>l)))}))}Ds(e,n){let s=new Vt(H_(e));return n.forEach(((i,r)=>{hl(e,r)&&(s=s.add(r))})),s}Cs(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ss(e,n,s){return Vi()<=Oe.DEBUG&&ce("QueryEngine","Using full collection scan to execute query:",Li(n)),this.ps.getDocumentsMatchingQuery(e,n,Ws.min(),s)}vs(e,n,s,i){return this.ps.getDocumentsMatchingQuery(e,s,i).next((r=>(n.forEach((o=>{r=r.insert(o.key,o)})),r)))}}/**
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
 */const _h="LocalStore",cN=3e8;class uN{constructor(e,n,s,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new gt(Ve),this.xs=new Si((r=>ah(r)),lh),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Xx(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function hN(t,e,n,s){return new uN(t,e,n,s)}async function dv(t,e){const n=Ee(t);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next((r=>(i=r,n.Bs(e),n.mutationQueue.getAllMutationBatches(s)))).next((r=>{const o=[],l=[];let c=Le();for(const u of i){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of r){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(s,c).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:l})))}))}))}function dN(t,e){const n=Ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const i=e.batch.keys(),r=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,c,u,d){const p=u.batch,m=p.keys();let _=Y.resolve();return m.forEach((I=>{_=_.next((()=>d.getEntry(c,I))).next((b=>{const w=u.docVersions.get(I);Ke(w!==null,48541),b.version.compareTo(w)<0&&(p.applyToRemoteDocument(b,u),b.isValidDocument()&&(b.setReadTime(u.commitVersion),d.addEntry(b)))}))})),_.next((()=>l.mutationQueue.removeMutationBatch(c,p)))})(n,s,e,r).next((()=>r.apply(s))).next((()=>n.mutationQueue.performConsistencyCheck(s))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(l){let c=Le();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c})(e)))).next((()=>n.localDocuments.getDocuments(s,i)))}))}function fv(t){const e=Ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function fN(t,e){const n=Ee(t),s=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const l=[];e.targetChanges.forEach(((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.Pi.removeMatchingKeys(r,d.removedDocuments,p).next((()=>n.Pi.addMatchingKeys(r,d.addedDocuments,p))));let _=m.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(Wt.EMPTY_BYTE_STRING,Ae.min()).withLastLimboFreeSnapshotVersion(Ae.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,s)),i=i.insert(p,_),(function(b,w,x){return b.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=cN?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0})(m,_,d)&&l.push(n.Pi.updateTargetData(r,_))}));let c=Es(),u=Le();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(r,d))})),l.push(pN(r,o,e.documentUpdates).next((d=>{c=d.ks,u=d.qs}))),!s.isEqual(Ae.min())){const d=n.Pi.getLastRemoteSnapshotVersion(r).next((p=>n.Pi.setTargetsMetadata(r,r.currentSequenceNumber,s)));l.push(d)}return Y.waitFor(l).next((()=>o.apply(r))).next((()=>n.localDocuments.getLocalViewOfDocuments(r,c,u))).next((()=>c))})).then((r=>(n.Ms=i,r)))}function pN(t,e,n){let s=Le(),i=Le();return n.forEach((r=>s=s.add(r))),e.getEntries(t,s).next((r=>{let o=Es();return n.forEach(((l,c)=>{const u=r.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(Ae.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):ce(_h,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)})),{ks:o,qs:i}}))}function gN(t,e){const n=Ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=ih),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function mN(t,e){const n=Ee(t);return n.persistence.runTransaction("Allocate target","readwrite",(s=>{let i;return n.Pi.getTargetData(s,e).next((r=>r?(i=r,Y.resolve(i)):n.Pi.allocateTargetId(s).next((o=>(i=new Bs(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Pi.addTargetData(s,i).next((()=>i)))))))})).then((s=>{const i=n.Ms.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.xs.set(e,s.targetId)),s}))}async function Uc(t,e,n){const s=Ee(t),i=s.Ms.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,(o=>s.persistence.referenceDelegate.removeTarget(o,i)))}catch(o){if(!gr(o))throw o;ce(_h,`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ms=s.Ms.remove(e),s.xs.delete(i.target)}function wp(t,e,n){const s=Ee(t);let i=Ae.min(),r=Le();return s.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,u,d){const p=Ee(c),m=p.xs.get(d);return m!==void 0?Y.resolve(p.Ms.get(m)):p.Pi.getTargetData(u,d)})(s,o,Yn(e)).next((l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(o,l.targetId).next((c=>{r=c}))})).next((()=>s.Fs.getDocumentsMatchingQuery(o,e,n?i:Ae.min(),n?r:Le()))).next((l=>(_N(s,nx(e),l),{documents:l,Qs:r})))))}function _N(t,e,n){let s=t.Os.get(e)||Ae.min();n.forEach(((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)})),t.Os.set(e,s)}class Ep{constructor(){this.activeTargetIds=lx()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vN{constructor(){this.Mo=new Ep,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,s){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Ep,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class yN{Oo(e){}shutdown(){}}/**
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
 */let Wo=null;function $c(){return Wo===null?Wo=(function(){return 268435456+Math.round(2147483648*Math.random())})():Wo++,"0x"+Wo.toString(16)}/**
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
 */const ec="RestConnection",AN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class IN{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${s}/databases/${i}`,this.Wo=this.databaseId.database===Da?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Go(e,n,s,i,r){const o=$c(),l=this.zo(e,n.toUriEncodedString());ce(ec,`Sending RPC '${e}' ${o}:`,l,s);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,i,r);const{host:u}=new URL(l),d=ur(u);return this.Jo(e,l,c,s,d).then((p=>(ce(ec,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw nr(ec,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",s),p}))}Ho(e,n,s,i,r,o){return this.Go(e,n,s,i,r)}jo(e,n,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+fr})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((i,r)=>e[r]=i)),s&&s.headers.forEach(((i,r)=>e[r]=i))}zo(e,n){const s=AN[e];return`${this.Uo}/v1/${n}:${s}`}terminate(){}}/**
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
 */class wN{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Jt="WebChannelConnection";class EN extends IN{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,s,i,r){const o=$c();return new Promise(((l,c)=>{const u=new __;u.setWithCredentials(!0),u.listenOnce(v_.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case ia.NO_ERROR:const p=u.getResponseJson();ce(Jt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case ia.TIMEOUT:ce(Jt,`RPC '${e}' ${o} timed out`),c(new fe(X.DEADLINE_EXCEEDED,"Request time out"));break;case ia.HTTP_ERROR:const m=u.getStatus();if(ce(Jt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const I=_?.error;if(I&&I.status&&I.message){const b=(function(x){const U=x.toLowerCase().replace(/_/g,"-");return Object.values(X).indexOf(U)>=0?U:X.UNKNOWN})(I.status);c(new fe(b,I.message))}else c(new fe(X.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new fe(X.UNAVAILABLE,"Connection failed."));break;default:ve(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{ce(Jt,`RPC '${e}' ${o} completed.`)}}));const d=JSON.stringify(i);ce(Jt,`RPC '${e}' ${o} sending request:`,i),u.send(n,"POST",d,s,15)}))}T_(e,n,s){const i=$c(),r=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=I_(),l=A_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const d=r.join("");ce(Jt,`Creating RPC '${e}' stream ${i}: ${d}`,c);const p=o.createWebChannel(d,c);this.I_(p);let m=!1,_=!1;const I=new wN({Yo:w=>{_?ce(Jt,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(m||(ce(Jt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),ce(Jt,`RPC '${e}' stream ${i} sending:`,w),p.send(w))},Zo:()=>p.close()}),b=(w,x,U)=>{w.listen(x,(F=>{try{U(F)}catch(j){setTimeout((()=>{throw j}),0)}}))};return b(p,Nr.EventType.OPEN,(()=>{_||(ce(Jt,`RPC '${e}' stream ${i} transport opened.`),I.o_())})),b(p,Nr.EventType.CLOSE,(()=>{_||(_=!0,ce(Jt,`RPC '${e}' stream ${i} transport closed`),I.a_(),this.E_(p))})),b(p,Nr.EventType.ERROR,(w=>{_||(_=!0,nr(Jt,`RPC '${e}' stream ${i} transport errored. Name:`,w.name,"Message:",w.message),I.a_(new fe(X.UNAVAILABLE,"The operation could not be completed")))})),b(p,Nr.EventType.MESSAGE,(w=>{if(!_){const x=w.data[0];Ke(!!x,16349);const U=x,F=U?.error||U[0]?.error;if(F){ce(Jt,`RPC '${e}' stream ${i} received error:`,F);const j=F.status;let se=(function(A){const T=Tt[A];if(T!==void 0)return ev(T)})(j),Ie=F.message;se===void 0&&(se=X.INTERNAL,Ie="Unknown error status: "+j+" with message "+F.message),_=!0,I.a_(new fe(se,Ie)),p.close()}else ce(Jt,`RPC '${e}' stream ${i} received:`,x),I.u_(x)}})),b(l,y_.STAT_EVENT,(w=>{w.stat===Pc.PROXY?ce(Jt,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===Pc.NOPROXY&&ce(Jt,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{I.__()}),0),I}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function tc(){return typeof document<"u"?document:null}/**
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
 */function gl(t){return new Sx(t,!0)}/**
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
 */const bp="PersistentStream";class gv{constructor(e,n,s,i,r,o,l,c){this.Mi=e,this.S_=s,this.b_=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new pv(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===X.RESOURCE_EXHAUSTED?(ws(n.toString()),ws("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===X.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,i])=>{this.D_===n&&this.G_(s,i)}),(s=>{e((()=>{const i=new fe(X.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(i)}))}))}G_(e,n){const s=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{s((()=>this.z_(i)))})),this.stream.onMessage((i=>{s((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ce(bp,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(ce(bp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class TN extends gv{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=kx(this.serializer,e),s=(function(r){if(!("targetChange"in r))return Ae.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?Ae.min():o.readTime?Jn(o.readTime):Ae.min()})(e);return this.listener.H_(n,s)}Y_(e){const n={};n.database=Fc(this.serializer),n.addTarget=(function(r,o){let l;const c=o.target;if(l=Mc(c)?{documents:Nx(r,c)}:{query:Mx(r,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=sv(r,o.resumeToken);const u=Vc(r,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(Ae.min())>0){l.readTime=La(r,o.snapshotVersion.toTimestamp());const u=Vc(r,o.expectedCount);u!==null&&(l.expectedCount=u)}return l})(this.serializer,e);const s=Vx(this.serializer,e);s&&(n.labels=s),this.q_(n)}Z_(e){const n={};n.database=Fc(this.serializer),n.removeTarget=e,this.q_(n)}}class CN extends gv{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Ke(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ke(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ke(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=xx(e.writeResults,e.commitTime),s=Jn(e.commitTime);return this.listener.na(s,n)}ra(){const e={};e.database=Fc(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((s=>Dx(this.serializer,s)))};this.q_(n)}}/**
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
 */class bN{}class SN extends bN{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new fe(X.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.Go(e,Lc(n,s),i,r,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new fe(X.UNKNOWN,r.toString())}))}Ho(e,n,s,i,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.Ho(e,Lc(n,s),i,o,l,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new fe(X.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class RN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */const Ai="RemoteStore";class PN{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=r,this.Aa.Oo((o=>{s.enqueueAndForget((async()=>{Pi(this)&&(ce(Ai,"Restarting streams for network reachability change."),await(async function(c){const u=Ee(c);u.Ea.add(4),await Ro(u),u.Ra.set("Unknown"),u.Ea.delete(4),await ml(u)})(this))}))})),this.Ra=new RN(s,i)}}async function ml(t){if(Pi(t))for(const e of t.da)await e(!0)}async function Ro(t){for(const e of t.da)await e(!1)}function mv(t,e){const n=Ee(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Ih(n)?Ah(n):mr(n).O_()&&yh(n,e))}function vh(t,e){const n=Ee(t),s=mr(n);n.Ia.delete(e),s.O_()&&_v(n,e),n.Ia.size===0&&(s.O_()?s.L_():Pi(n)&&n.Ra.set("Unknown"))}function yh(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ae.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}mr(t).Y_(e)}function _v(t,e){t.Va.Ue(e),mr(t).Z_(e)}function Ah(t){t.Va=new Ex({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),mr(t).start(),t.Ra.ua()}function Ih(t){return Pi(t)&&!mr(t).x_()&&t.Ia.size>0}function Pi(t){return Ee(t).Ea.size===0}function vv(t){t.Va=void 0}async function kN(t){t.Ra.set("Online")}async function DN(t){t.Ia.forEach(((e,n)=>{yh(t,e)}))}async function xN(t,e){vv(t),Ih(t)?(t.Ra.ha(e),Ah(t)):t.Ra.set("Unknown")}async function NN(t,e,n){if(t.Ra.set("Online"),e instanceof nv&&e.state===2&&e.cause)try{await(async function(i,r){const o=r.cause;for(const l of r.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))})(t,e)}catch(s){ce(Ai,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Fa(t,s)}else if(e instanceof la?t.Va.Ze(e):e instanceof tv?t.Va.st(e):t.Va.tt(e),!n.isEqual(Ae.min()))try{const s=await fv(t.localStore);n.compareTo(s)>=0&&await(function(r,o){const l=r.Va.Tt(o);return l.targetChanges.forEach(((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=r.Ia.get(u);d&&r.Ia.set(u,d.withResumeToken(c.resumeToken,o))}})),l.targetMismatches.forEach(((c,u)=>{const d=r.Ia.get(c);if(!d)return;r.Ia.set(c,d.withResumeToken(Wt.EMPTY_BYTE_STRING,d.snapshotVersion)),_v(r,c);const p=new Bs(d.target,c,u,d.sequenceNumber);yh(r,p)})),r.remoteSyncer.applyRemoteEvent(l)})(t,n)}catch(s){ce(Ai,"Failed to raise snapshot:",s),await Fa(t,s)}}async function Fa(t,e,n){if(!gr(e))throw e;t.Ea.add(1),await Ro(t),t.Ra.set("Offline"),n||(n=()=>fv(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{ce(Ai,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await ml(t)}))}function yv(t,e){return e().catch((n=>Fa(t,n,e)))}async function _l(t){const e=Ee(t),n=Xs(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:ih;for(;MN(e);)try{const i=await gN(e.localStore,s);if(i===null){e.Ta.length===0&&n.L_();break}s=i.batchId,ON(e,i)}catch(i){await Fa(e,i)}Av(e)&&Iv(e)}function MN(t){return Pi(t)&&t.Ta.length<10}function ON(t,e){t.Ta.push(e);const n=Xs(t);n.O_()&&n.X_&&n.ea(e.mutations)}function Av(t){return Pi(t)&&!Xs(t).x_()&&t.Ta.length>0}function Iv(t){Xs(t).start()}async function VN(t){Xs(t).ra()}async function LN(t){const e=Xs(t);for(const n of t.Ta)e.ea(n.mutations)}async function BN(t,e,n){const s=t.Ta.shift(),i=hh.from(s,e,n);await yv(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await _l(t)}async function FN(t,e){e&&Xs(t).X_&&await(async function(s,i){if((function(o){return Ax(o)&&o!==X.ABORTED})(i.code)){const r=s.Ta.shift();Xs(s).B_(),await yv(s,(()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i))),await _l(s)}})(t,e),Av(t)&&Iv(t)}async function Sp(t,e){const n=Ee(t);n.asyncQueue.verifyOperationInProgress(),ce(Ai,"RemoteStore received new credentials");const s=Pi(n);n.Ea.add(3),await Ro(n),s&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await ml(n)}async function UN(t,e){const n=Ee(t);e?(n.Ea.delete(2),await ml(n)):e||(n.Ea.add(2),await Ro(n),n.Ra.set("Unknown"))}function mr(t){return t.ma||(t.ma=(function(n,s,i){const r=Ee(n);return r.sa(),new TN(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)})(t.datastore,t.asyncQueue,{Xo:kN.bind(null,t),t_:DN.bind(null,t),r_:xN.bind(null,t),H_:NN.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),Ih(t)?Ah(t):t.Ra.set("Unknown")):(await t.ma.stop(),vv(t))}))),t.ma}function Xs(t){return t.fa||(t.fa=(function(n,s,i){const r=Ee(n);return r.sa(),new CN(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)})(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:VN.bind(null,t),r_:FN.bind(null,t),ta:LN.bind(null,t),na:BN.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await _l(t)):(await t.fa.stop(),t.Ta.length>0&&(ce(Ai,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
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
 */class $N{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class HN{constructor(){this.queries=Pp(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const i=Ee(n),r=i.queries;i.queries=Pp(),r.forEach(((o,l)=>{for(const c of l.Sa)c.onError(s)}))})(this,new fe(X.ABORTED,"Firestore shutting down"))}}function Pp(){return new Si((t=>$_(t)),ul)}async function jN(t,e){const n=Ee(t);let s=3;const i=e.query;let r=n.queries.get(i);r?!r.ba()&&e.Da()&&(s=2):(r=new $N,s=e.Da()?0:1);try{switch(s){case 0:r.wa=await n.onListen(i,!0);break;case 1:r.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Eh(o,`Initialization of query '${Li(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,r),r.Sa.push(e),e.va(n.onlineState),r.wa&&e.Fa(r.wa)&&Th(n)}async function GN(t,e){const n=Ee(t),s=e.query;let i=3;const r=n.queries.get(s);if(r){const o=r.Sa.indexOf(e);o>=0&&(r.Sa.splice(o,1),r.Sa.length===0?i=e.Da()?0:1:!r.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function qN(t,e){const n=Ee(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const l of o.Sa)l.Fa(i)&&(s=!0);o.wa=i}}s&&Th(n)}function QN(t,e,n){const s=Ee(t),i=s.queries.get(e);if(i)for(const r of i.Sa)r.onError(n);s.queries.delete(e)}function Th(t){t.Ca.forEach((e=>{e.next()}))}var Hc,kp;(kp=Hc||(Hc={})).Ma="default",kp.Cache="cache";class zN{constructor(e,n,s){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new ar(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=ar.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Hc.Cache}}/**
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
 */class wv{constructor(e){this.key=e}}class Ev{constructor(e){this.key=e}}class WN{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Le(),this.mutatedKeys=Le(),this.eu=H_(e),this.tu=new Ki(this.eu)}get nu(){return this.Ya}ru(e,n){const s=n?n.iu:new Rp,i=n?n.tu:this.tu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((d,p)=>{const m=i.get(d),_=hl(this.query,p)?p:null,I=!!m&&this.mutatedKeys.has(m.key),b=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let w=!1;m&&_?m.data.isEqual(_.data)?I!==b&&(s.track({type:3,doc:_}),w=!0):this.su(m,_)||(s.track({type:2,doc:_}),w=!0,(c&&this.eu(_,c)>0||u&&this.eu(_,u)<0)&&(l=!0)):!m&&_?(s.track({type:0,doc:_}),w=!0):m&&!_&&(s.track({type:1,doc:m}),w=!0,(c||u)&&(l=!0)),w&&(_?(o=o.add(_),r=b?r.add(d):r.delete(d)):(o=o.delete(d),r=r.delete(d)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),r=r.delete(d.key),s.track({type:1,doc:d})}return{tu:o,iu:s,Cs:l,mutatedKeys:r}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,i){const r=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((d,p)=>(function(_,I){const b=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ve(20277,{Rt:w})}};return b(_)-b(I)})(d.type,p.type)||this.eu(d.doc,p.doc))),this.ou(s),i=i??!1;const l=n&&!i?this._u():[],c=this.Xa.size===0&&this.current&&!i?1:0,u=c!==this.Za;return this.Za=c,o.length!==0||u?{snapshot:new ar(this.query,e.tu,r,o,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Rp,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Le(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const n=[];return e.forEach((s=>{this.Xa.has(s)||n.push(new Ev(s))})),this.Xa.forEach((s=>{e.has(s)||n.push(new wv(s))})),n}cu(e){this.Ya=e.Qs,this.Xa=Le();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return ar.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Ch="SyncEngine";class KN{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class YN{constructor(e){this.key=e,this.hu=!1}}class JN{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Si((l=>$_(l)),ul),this.Iu=new Map,this.Eu=new Set,this.du=new gt(me.comparator),this.Au=new Map,this.Ru=new ph,this.Vu={},this.mu=new Map,this.fu=or.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function XN(t,e,n=!0){const s=Pv(t);let i;const r=s.Tu.get(e);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.lu()):i=await Tv(s,e,n,!0),i}async function ZN(t,e){const n=Pv(t);await Tv(n,e,!0,!1)}async function Tv(t,e,n,s){const i=await mN(t.localStore,Yn(e)),r=i.targetId,o=t.sharedClientState.addLocalQueryTarget(r,n);let l;return s&&(l=await eM(t,e,r,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&mv(t.remoteStore,i),l}async function eM(t,e,n,s,i){t.pu=(p,m,_)=>(async function(b,w,x,U){let F=w.view.ru(x);F.Cs&&(F=await wp(b.localStore,w.query,!1).then((({documents:S})=>w.view.ru(S,F))));const j=U&&U.targetChanges.get(w.targetId),se=U&&U.targetMismatches.get(w.targetId)!=null,Ie=w.view.applyChanges(F,b.isPrimaryClient,j,se);return xp(b,w.targetId,Ie.au),Ie.snapshot})(t,p,m,_);const r=await wp(t.localStore,e,!0),o=new WN(e,r.Qs),l=o.ru(r.documents),c=So.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),u=o.applyChanges(l,t.isPrimaryClient,c);xp(t,n,u.au);const d=new KN(e,n,o);return t.Tu.set(e,d),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function tM(t,e,n){const s=Ee(t),i=s.Tu.get(e),r=s.Iu.get(i.targetId);if(r.length>1)return s.Iu.set(i.targetId,r.filter((o=>!ul(o,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await Uc(s.localStore,i.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(i.targetId),n&&vh(s.remoteStore,i.targetId),jc(s,i.targetId)})).catch(pr)):(jc(s,i.targetId),await Uc(s.localStore,i.targetId,!0))}async function nM(t,e){const n=Ee(t),s=n.Tu.get(e),i=n.Iu.get(s.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),vh(n.remoteStore,s.targetId))}async function sM(t,e,n){const s=uM(t);try{const i=await(function(o,l){const c=Ee(o),u=ft.now(),d=l.reduce(((_,I)=>_.add(I.key)),Le());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",(_=>{let I=Es(),b=Le();return c.Ns.getEntries(_,d).next((w=>{I=w,I.forEach(((x,U)=>{U.isValidDocument()||(b=b.add(x))}))})).next((()=>c.localDocuments.getOverlayedDocuments(_,I))).next((w=>{p=w;const x=[];for(const U of l){const F=gx(U,p.get(U.key).overlayedDocument);F!=null&&x.push(new Ri(U.key,F,M_(F.value.mapValue),ms.exists(!0)))}return c.mutationQueue.addMutationBatch(_,u,x,l)})).next((w=>{m=w;const x=w.applyToLocalDocumentSet(p,b);return c.documentOverlayCache.saveOverlays(_,w.batchId,x)}))})).then((()=>({batchId:m.batchId,changes:G_(p)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),(function(o,l,c){let u=o.Vu[o.currentUser.toKey()];u||(u=new gt(Ve)),u=u.insert(l,c),o.Vu[o.currentUser.toKey()]=u})(s,i.batchId,n),await Po(s,i.changes),await _l(s.remoteStore)}catch(i){const r=Eh(i,"Failed to persist write");n.reject(r)}}async function Cv(t,e){const n=Ee(t);try{const s=await fN(n.localStore,e);e.targetChanges.forEach(((i,r)=>{const o=n.Au.get(r);o&&(Ke(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?Ke(o.hu,14607):i.removedDocuments.size>0&&(Ke(o.hu,42227),o.hu=!1))})),await Po(n,s,e)}catch(s){await pr(s)}}function Dp(t,e,n){const s=Ee(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.Tu.forEach(((r,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)})),(function(o,l){const c=Ee(o);c.onlineState=l;let u=!1;c.queries.forEach(((d,p)=>{for(const m of p.Sa)m.va(l)&&(u=!0)})),u&&Th(c)})(s.eventManager,e),i.length&&s.Pu.H_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function iM(t,e,n){const s=Ee(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.Au.get(e),r=i&&i.key;if(r){let o=new gt(me.comparator);o=o.insert(r,en.newNoDocument(r,Ae.min()));const l=Le().add(r),c=new pl(Ae.min(),new Map,new gt(Ve),o,l);await Cv(s,c),s.du=s.du.remove(r),s.Au.delete(e),bh(s)}else await Uc(s.localStore,e,!1).then((()=>jc(s,e,n))).catch(pr)}async function rM(t,e){const n=Ee(t),s=e.batch.batchId;try{const i=await dN(n.localStore,e);Sv(n,s,null),bv(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Po(n,i)}catch(i){await pr(i)}}async function oM(t,e,n){const s=Ee(t);try{const i=await(function(o,l){const c=Ee(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next((p=>(Ke(p!==null,37113),d=p.keys(),c.mutationQueue.removeMutationBatch(u,p)))).next((()=>c.mutationQueue.performConsistencyCheck(u))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d))).next((()=>c.localDocuments.getDocuments(u,d)))}))})(s.localStore,e);Sv(s,e,n),bv(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Po(s,i)}catch(i){await pr(i)}}function bv(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function Sv(t,e,n){const s=Ee(t);let i=s.Vu[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.Vu[s.currentUser.toKey()]=i}}function jc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Iu.get(e))t.Tu.delete(s),n&&t.Pu.yu(s,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((s=>{t.Ru.containsKey(s)||Rv(t,s)}))}function Rv(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(vh(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),bh(t))}function xp(t,e,n){for(const s of n)s instanceof wv?(t.Ru.addReference(s.key,e),aM(t,s)):s instanceof Ev?(ce(Ch,"Document no longer in limbo: "+s.key),t.Ru.removeReference(s.key,e),t.Ru.containsKey(s.key)||Rv(t,s.key)):ve(19791,{wu:s})}function aM(t,e){const n=e.key,s=n.path.canonicalString();t.du.get(n)||t.Eu.has(s)||(ce(Ch,"New document in limbo: "+n),t.Eu.add(s),bh(t))}function bh(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new me(pt.fromString(e)),s=t.fu.next();t.Au.set(s,new YN(n)),t.du=t.du.insert(n,s),mv(t.remoteStore,new Bs(Yn(ch(n.path)),s,"TargetPurposeLimboResolution",ol.ce))}}async function Po(t,e,n){const s=Ee(t),i=[],r=[],o=[];s.Tu.isEmpty()||(s.Tu.forEach(((l,c)=>{o.push(s.pu(c,e,n).then((u=>{if((u||n)&&s.isPrimaryClient){const d=u?!u.fromCache:n?.targetChanges.get(c.targetId)?.current;s.sharedClientState.updateQueryState(c.targetId,d?"current":"not-current")}if(u){i.push(u);const d=mh.As(c.targetId,u);r.push(d)}})))})),await Promise.all(o),s.Pu.H_(i),await(async function(c,u){const d=Ee(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>Y.forEach(u,(m=>Y.forEach(m.Es,(_=>d.persistence.referenceDelegate.addReference(p,m.targetId,_))).next((()=>Y.forEach(m.ds,(_=>d.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))))))}catch(p){if(!gr(p))throw p;ce(_h,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const _=d.Ms.get(m),I=_.snapshotVersion,b=_.withLastLimboFreeSnapshotVersion(I);d.Ms=d.Ms.insert(m,b)}}})(s.localStore,r))}async function lM(t,e){const n=Ee(t);if(!n.currentUser.isEqual(e)){ce(Ch,"User change. New user:",e.toKey());const s=await dv(n.localStore,e);n.currentUser=e,(function(r,o){r.mu.forEach((l=>{l.forEach((c=>{c.reject(new fe(X.CANCELLED,o))}))})),r.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Po(n,s.Ls)}}function cM(t,e){const n=Ee(t),s=n.Au.get(e);if(s&&s.hu)return Le().add(s.key);{let i=Le();const r=n.Iu.get(e);if(!r)return i;for(const o of r){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function Pv(t){const e=Ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Cv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=iM.bind(null,e),e.Pu.H_=qN.bind(null,e.eventManager),e.Pu.yu=QN.bind(null,e.eventManager),e}function uM(t){const e=Ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=oM.bind(null,e),e}class Ua{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=gl(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return hN(this.persistence,new lN,e.initialUser,this.serializer)}Cu(e){return new hv(gh.mi,this.serializer)}Du(e){return new vN}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ua.provider={build:()=>new Ua};class hM extends Ua{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Ke(this.persistence.referenceDelegate instanceof Ba,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new zx(s,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?_n.withCacheSize(this.cacheSizeBytes):_n.DEFAULT;return new hv((s=>Ba.mi(s,n)),this.serializer)}}class Gc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Dp(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=lM.bind(null,this.syncEngine),await UN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new HN})()}createDatastore(e){const n=gl(e.databaseInfo.databaseId),s=(function(r){return new EN(r)})(e.databaseInfo);return(function(r,o,l,c){return new SN(r,o,l,c)})(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return(function(s,i,r,o,l){return new PN(s,i,r,o,l)})(this.localStore,this.datastore,e.asyncQueue,(n=>Dp(this.syncEngine,n,0)),(function(){return Cp.v()?new Cp:new yN})())}createSyncEngine(e,n){return(function(i,r,o,l,c,u,d){const p=new JN(i,r,o,l,c,u);return d&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const s=Ee(n);ce(Ai,"RemoteStore shutting down."),s.Ea.add(5),await Ro(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Gc.provider={build:()=>new Gc};/**
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
 */class dM{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):ws("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
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
 */const Zs="FirestoreClient";class fM{constructor(e,n,s,i,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Xt.UNAUTHENTICATED,this.clientId=nh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(s,(async o=>{ce(Zs,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(s,(o=>(ce(Zs,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new js;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Eh(n,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function nc(t,e){t.asyncQueue.verifyOperationInProgress(),ce(Zs,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async i=>{s.isEqual(i)||(await dv(e.localStore,i),s=i)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Np(t,e){t.asyncQueue.verifyOperationInProgress();const n=await pM(t);ce(Zs,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((s=>Sp(e.remoteStore,s))),t.setAppCheckTokenChangeListener(((s,i)=>Sp(e.remoteStore,i))),t._onlineComponents=e}async function pM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ce(Zs,"Using user provided OfflineComponentProvider");try{await nc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(i){return i.name==="FirebaseError"?i.code===X.FAILED_PRECONDITION||i.code===X.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(n))throw n;nr("Error using user provided cache. Falling back to memory cache: "+n),await nc(t,new Ua)}}else ce(Zs,"Using default OfflineComponentProvider"),await nc(t,new hM(void 0));return t._offlineComponents}async function kv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ce(Zs,"Using user provided OnlineComponentProvider"),await Np(t,t._uninitializedComponentsProvider._online)):(ce(Zs,"Using default OnlineComponentProvider"),await Np(t,new Gc))),t._onlineComponents}function gM(t){return kv(t).then((e=>e.syncEngine))}async function mM(t){const e=await kv(t),n=e.eventManager;return n.onListen=XN.bind(null,e.syncEngine),n.onUnlisten=tM.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=ZN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=nM.bind(null,e.syncEngine),n}function _M(t,e,n={}){const s=new js;return t.asyncQueue.enqueueAndForget((async()=>(function(r,o,l,c,u){const d=new dM({next:m=>{d.Nu(),o.enqueueAndForget((()=>GN(r,p)));const _=m.docs.has(l);!_&&m.fromCache?u.reject(new fe(X.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&c&&c.source==="server"?u.reject(new fe(X.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new zN(ch(l.path),d,{includeMetadataChanges:!0,qa:!0});return jN(r,p)})(await mM(t),t.asyncQueue,e,n,s))),s.promise}/**
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
 */const xv="firestore.googleapis.com",Op=!0;class Vp{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new fe(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=xv,this.ssl=Op}else this.host=e.host,this.ssl=e.ssl??Op;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=uv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<qx)throw new fe(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}RD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Dv(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new fe(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new fe(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new fe(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,i){return s.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Sh{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new fe(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new fe(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new _D;switch(s.type){case"firstParty":return new ID(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new fe(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=Mp.get(n);s&&(ce("ComponentProvider","Removing Datastore"),Mp.delete(n),s.terminate())})(this),Promise.resolve()}}function vM(t,e,n,s={}){t=lo(t,Sh);const i=ur(e),r=t._getSettings(),o={...r,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(Rm(`https://${l}`),Pm("Firestore",!0)),r.host!==xv&&r.host!==l&&nr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...r,host:l,ssl:i,emulatorOptions:s};if(!zs(c,o)&&(t._setSettings(c),s.mockUserToken)){let u,d;if(typeof s.mockUserToken=="string")u=s.mockUserToken,d=Xt.MOCK_USER;else{u=HR(s.mockUserToken,t._app?.options.projectId);const p=s.mockUserToken.sub||s.mockUserToken.user_id;if(!p)throw new fe(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Xt(p)}t._authCredentials=new vD(new E_(u,d))}}/**
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
 */class Rh{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Rh(this.firestore,e,this._query)}}class $t{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mo(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $t(this.firestore,e,this._key)}toJSON(){return{type:$t._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(Co(n,$t._jsonSchema))return new $t(e,s||null,new me(pt.fromString(n.referencePath)))}}$t._jsonSchemaVersion="firestore/documentReference/1.0",$t._jsonSchema={type:bt("string",$t._jsonSchemaVersion),referencePath:bt("string")};class mo extends Rh{constructor(e,n,s){super(e,n,ch(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $t(this.firestore,null,new me(e))}withConverter(e){return new mo(this.firestore,e,this._path)}}function Nv(t,e,...n){if(t=vn(t),arguments.length===1&&(e=nh.newId()),SD("doc","path",e),t instanceof Sh){const s=pt.fromString(e,...n);return Yf(s),new $t(t,null,new me(s))}{if(!(t instanceof $t||t instanceof mo))throw new fe(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(pt.fromString(e,...n));return Yf(s),new $t(t.firestore,t instanceof mo?t.converter:null,new me(s))}}/**
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
`+t.stack),e}class Ph extends Sh{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new Bp,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Bp(e),this._firestoreClient=void 0,await e}}}function yM(t,e){const n=typeof t=="object"?t:qu(),s=typeof t=="string"?t:Da,i=Ci(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=UR("firestore");r&&vM(i,...r)}return i}function Mv(t){if(t._terminated)throw new fe(X.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||AM(t),t._firestoreClient}function AM(t){const e=t._freezeSettings(),n=(function(i,r,o,l){return new FD(i,r,o,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Dv(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)})(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new fM(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(i){const r=i?._online.build();return{_offline:i?._offline.build(r),_online:r}})(t._componentsProvider))}/**
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
 */class Rn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rn(Wt.fromBase64String(e))}catch(n){throw new fe(X.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Rn(Wt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Rn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Co(e,Rn._jsonSchema))return Rn.fromBase64String(e.bytes)}}Rn._jsonSchemaVersion="firestore/bytes/1.0",Rn._jsonSchema={type:bt("string",Rn._jsonSchemaVersion),bytes:bt("string")};/**
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
 */const IM=/^__.*__$/;class wM{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Ri(e,this.data,this.fieldMask,n,this.fieldTransforms):new bo(e,this.data,n,this.fieldTransforms)}}function Vv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve(40011,{Ac:t})}}class Dh{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Rc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Dh({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.gc(e),s}yc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return $a(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Vv(this.Ac)&&IM.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class EM{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||gl(e)}Cc(e,n,s,i=!1){return new Dh({Ac:e,methodName:n,Dc:s,path:Qt.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function TM(t){const e=t._freezeSettings(),n=gl(t._databaseId);return new EM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function CM(t,e,n,s,i,r={}){const o=t.Cc(r.merge||r.mergeFields?2:0,e,n,i);Uv("Data must be an object, but it was:",o,s);const l=Bv(s,o);let c,u;if(r.merge)c=new Mn(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const d=[];for(const p of r.mergeFields){const m=bM(e,p,n);if(!o.contains(m))throw new fe(X.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);RM(d,m)||d.push(m)}c=new Mn(d),u=o.fieldTransforms.filter((p=>c.covers(p.field)))}else c=null,u=o.fieldTransforms;return new wM(new Sn(l),c,u)}function Lv(t,e){if(Fv(t=vn(t)))return Uv("Unsupported field value:",e,t),Bv(t,e);if(t instanceof Ov)return(function(s,i){if(!Vv(i.Ac))throw i.Sc(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,i){const r=[];let o=0;for(const l of s){let c=Lv(l,i.wc(o));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),o++}return{arrayValue:{values:r}}})(t,e)}return(function(s,i){if((s=vn(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return cx(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=ft.fromDate(s);return{timestampValue:La(i.serializer,r)}}if(s instanceof ft){const r=new ft(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:La(i.serializer,r)}}if(s instanceof Xn)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Rn)return{bytesValue:sv(i.serializer,s._byteString)};if(s instanceof $t){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:fh(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof Zn)return(function(o,l){return{mapValue:{fields:{[x_]:{stringValue:N_},[xa]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw l.Sc("VectorValues must only contain numeric values.");return uh(l.serializer,u)}))}}}}}})(s,i);throw i.Sc(`Unsupported field value: ${sh(s)}`)})(t,e)}function Bv(t,e){const n={};return b_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bi(t,((s,i)=>{const r=Lv(i,e.mc(s));r!=null&&(n[s]=r)})),{mapValue:{fields:n}}}function Fv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ft||t instanceof Xn||t instanceof Rn||t instanceof $t||t instanceof Ov||t instanceof Zn)}function Uv(t,e,n){if(!Fv(n)||!T_(n)){const s=sh(n);throw s==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+s)}}function bM(t,e,n){if((e=vn(e))instanceof kh)return e._internalPath;if(typeof e=="string")return $v(t,e);throw $a("Field path arguments must be of type string or ",t,!1,void 0,n)}const SM=new RegExp("[~\\*/\\[\\]]");function $v(t,e,n){if(e.search(SM)>=0)throw $a(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new kh(...e.split("."))._internalPath}catch{throw $a(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function $a(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new fe(X.INVALID_ARGUMENT,l+t+c)}function RM(t,e){return t.some((n=>n.isEqual(e)))}/**
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
 */class Hv{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new $t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new PM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(jv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class PM extends Hv{data(){return super.data()}}function jv(t,e){return typeof e=="string"?$v(t,e):e instanceof kh?e._internalPath:e._delegate._internalPath}class kM{convertValue(e,n="none"){switch(Js(e)){case 0:return null;case 1:return e.booleanValue;case 2:return It(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ys(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ve(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return bi(e,((i,r)=>{s[i]=this.convertValue(r,n)})),s}convertVectorValue(e){const n=e.fields?.[xa].arrayValue?.values?.map((s=>It(s.doubleValue)));return new Zn(n)}convertGeoPoint(e){return new Xn(It(e.latitude),It(e.longitude))}convertArray(e,n){return(e.values||[]).map((s=>this.convertValue(s,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const s=ll(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(uo(e));default:return null}}convertTimestamp(e){const n=Ks(e);return new ft(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=pt.fromString(e);Ke(cv(s),9688,{name:e});const i=new ho(s.get(1),s.get(3)),r=new me(s.popFirst(5));return i.isEqual(n)||ws(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function DM(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class Vr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mi extends Hv{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ca(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(jv("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new fe(X.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=mi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}mi._jsonSchemaVersion="firestore/documentSnapshot/1.0",mi._jsonSchema={type:bt("string",mi._jsonSchemaVersion),bundleSource:bt("string","DocumentSnapshot"),bundleName:bt("string"),bundle:bt("string")};class ca extends mi{data(e={}){return super.data(e)}}class Xr{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Vr(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((s=>{e.call(n,new ca(this._firestore,this._userDataWriter,s.key,s,new Vr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new fe(X.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map((l=>{const c=new ca(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Vr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((l=>r||l.type!==3)).map((l=>{const c=new ca(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Vr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:xM(l.type),doc:c,oldIndex:u,newIndex:d}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new fe(X.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Xr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=nh.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],i=[];return this.docs.forEach((r=>{r._document!==null&&(n.push(r._document),s.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),i.push(r.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function xM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve(61501,{type:t})}}/**
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
 */function Gv(t){t=lo(t,$t);const e=lo(t.firestore,Ph);return _M(Mv(e),t._key).then((n=>OM(e,t,n)))}Xr._jsonSchemaVersion="firestore/querySnapshot/1.0",Xr._jsonSchema={type:bt("string",Xr._jsonSchemaVersion),bundleSource:bt("string","QuerySnapshot"),bundleName:bt("string"),bundle:bt("string")};class NM extends kM{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new $t(this.firestore,null,n)}}function Up(t,e,n){t=lo(t,$t);const s=lo(t.firestore,Ph),i=DM(t.converter,e,n);return MM(s,[CM(TM(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,ms.none())])}function MM(t,e){return(function(s,i){const r=new js;return s.asyncQueue.enqueueAndForget((async()=>sM(await gM(s),i,r))),r.promise})(Mv(t),e)}function OM(t,e,n){const s=n.docs.get(e._key),i=new NM(t);return new mi(t,i,e._key,s,new Vr(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){fr=i})(hr),ns(new Ln("firestore",((s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),l=new Ph(new yD(s.getProvider("auth-internal")),new wD(o,s.getProvider("app-check-internal")),(function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new fe(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ho(u.options.projectId,d)})(o,i),o);return r={useFetchStreams:n,...r},l._setSettings(r),l}),"PUBLIC").setMultipleInstances(!0)),Dn(Qf,zf,e),Dn(Qf,zf,"esm2020")})();const qv="@firebase/installations",xh="0.6.19";/**
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
 */const Qv=1e4,zv=`w:${xh}`,Wv="FIS_v2",VM="https://firebaseinstallations.googleapis.com/v1",LM=3600*1e3,BM="installations",FM="Installations";/**
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
 */const UM={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ii=new Ti(BM,FM,UM);function Kv(t){return t instanceof Bn&&t.code.includes("request-failed")}/**
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
 */function Yv({projectId:t}){return`${VM}/projects/${t}/installations`}function Jv(t){return{token:t.token,requestStatus:2,expiresIn:HM(t.expiresIn),creationTime:Date.now()}}async function Xv(t,e){const s=(await e.json()).error;return Ii.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Zv({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function $M(t,{refreshToken:e}){const n=Zv(t);return n.append("Authorization",jM(e)),n}async function ey(t){const e=await t();return e.status>=500&&e.status<600?t():e}function HM(t){return Number(t.replace("s","000"))}function jM(t){return`${Wv} ${t}`}/**
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
 */async function GM({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Yv(t),i=Zv(t),r=e.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Wv,appId:t.appId,sdkVersion:zv},l={method:"POST",headers:i,body:JSON.stringify(o)},c=await ey(()=>fetch(s,l));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Jv(u.authToken)}}else throw await Xv("Create Installation",c)}/**
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
 */function qM(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const QM=/^[cdef][\w-]{21}$/,qc="";function zM(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=WM(t);return QM.test(n)?n:qc}catch{return qc}}function WM(t){return qM(t).substr(0,22)}/**
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
 */const ny=new Map;function sy(t,e){const n=vl(t);iy(n,e),KM(n,e)}function iy(t,e){const n=ny.get(t);if(n)for(const s of n)s(e)}function KM(t,e){const n=YM();n&&n.postMessage({key:t,fid:e}),JM()}let di=null;function YM(){return!di&&"BroadcastChannel"in self&&(di=new BroadcastChannel("[Firebase] FID Change"),di.onmessage=t=>{iy(t.data.key,t.data.fid)}),di}function JM(){ny.size===0&&di&&(di.close(),di=null)}/**
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
 */const XM="firebase-installations-database",ZM=1,wi="firebase-installations-store";let sc=null;function Nh(){return sc||(sc=Om(XM,ZM,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(wi)}}})),sc}async function Ha(t,e){const n=vl(t),i=(await Nh()).transaction(wi,"readwrite"),r=i.objectStore(wi),o=await r.get(n);return await r.put(e,n),await i.done,(!o||o.fid!==e.fid)&&sy(t,e.fid),e}async function ry(t){const e=vl(t),s=(await Nh()).transaction(wi,"readwrite");await s.objectStore(wi).delete(e),await s.done}async function yl(t,e){const n=vl(t),i=(await Nh()).transaction(wi,"readwrite"),r=i.objectStore(wi),o=await r.get(n),l=e(o);return l===void 0?await r.delete(n):await r.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&sy(t,l.fid),l}/**
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
 */async function Mh(t){let e;const n=await yl(t.appConfig,s=>{const i=eO(s),r=tO(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===qc?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function eO(t){const e=t||{fid:zM(),registrationStatus:0};return oy(e)}function tO(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ii.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=nO(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:sO(t)}:{installationEntry:e}}async function nO(t,e){try{const n=await GM(t,e);return Ha(t.appConfig,n)}catch(n){throw Kv(n)&&n.customData.serverCode===409?await ry(t.appConfig):await Ha(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function sO(t){let e=await $p(t.appConfig);for(;e.registrationStatus===1;)await ty(100),e=await $p(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Mh(t);return s||n}return e}function $p(t){return yl(t,e=>{if(!e)throw Ii.create("installation-not-found");return oy(e)})}function oy(t){return iO(t)?{fid:t.fid,registrationStatus:0}:t}function iO(t){return t.registrationStatus===1&&t.registrationTime+Qv<Date.now()}/**
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
 */async function rO({appConfig:t,heartbeatServiceProvider:e},n){const s=oO(t,n),i=$M(t,n),r=e.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:zv,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},c=await ey(()=>fetch(s,l));if(c.ok){const u=await c.json();return Jv(u)}else throw await Xv("Generate Auth Token",c)}function oO(t,{fid:e}){return`${Yv(t)}/${e}/authTokens:generate`}/**
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
 */async function Oh(t,e=!1){let n;const s=await yl(t.appConfig,r=>{if(!ay(r))throw Ii.create("not-registered");const o=r.authToken;if(!e&&cO(o))return r;if(o.requestStatus===1)return n=aO(t,e),r;{if(!navigator.onLine)throw Ii.create("app-offline");const l=hO(r);return n=lO(t,l),l}});return n?await n:s.authToken}async function aO(t,e){let n=await Hp(t.appConfig);for(;n.authToken.requestStatus===1;)await ty(100),n=await Hp(t.appConfig);const s=n.authToken;return s.requestStatus===0?Oh(t,e):s}function Hp(t){return yl(t,e=>{if(!ay(e))throw Ii.create("not-registered");const n=e.authToken;return dO(n)?{...e,authToken:{requestStatus:0}}:e})}async function lO(t,e){try{const n=await rO(t,e),s={...e,authToken:n};return await Ha(t.appConfig,s),n}catch(n){if(Kv(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ry(t.appConfig);else{const s={...e,authToken:{requestStatus:0}};await Ha(t.appConfig,s)}throw n}}function ay(t){return t!==void 0&&t.registrationStatus===2}function cO(t){return t.requestStatus===2&&!uO(t)}function uO(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+LM}function hO(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function dO(t){return t.requestStatus===1&&t.requestTime+Qv<Date.now()}/**
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
 */async function fO(t){const e=t,{installationEntry:n,registrationPromise:s}=await Mh(e);return s?s.catch(console.error):Oh(e).catch(console.error),n.fid}/**
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
 */async function pO(t,e=!1){const n=t;return await gO(n),(await Oh(n,e)).token}async function gO(t){const{registrationPromise:e}=await Mh(t);e&&await e}/**
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
 */function mO(t){if(!t||!t.options)throw ic("App Configuration");if(!t.name)throw ic("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ic(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ic(t){return Ii.create("missing-app-config-values",{valueName:t})}/**
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
 */const ly="installations",_O="installations-internal",vO=t=>{const e=t.getProvider("app").getImmediate(),n=mO(e),s=Ci(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},yO=t=>{const e=t.getProvider("app").getImmediate(),n=Ci(e,ly).getImmediate();return{getId:()=>fO(n),getToken:i=>pO(n,i)}};function AO(){ns(new Ln(ly,vO,"PUBLIC")),ns(new Ln(_O,yO,"PRIVATE"))}AO();Dn(qv,xh);Dn(qv,xh,"esm2020");/**
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
 */const ja="analytics",IO="firebase_id",wO="origin",EO=60*1e3,TO="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Vh="https://www.googletagmanager.com/gtag/js";/**
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
 */const CO={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Tn=new Ti("analytics","Analytics",CO);/**
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
 */function bO(t){if(!t.startsWith(Vh)){const e=Tn.create("invalid-gtag-resource",{gtagURL:t});return hn.warn(e.message),""}return t}function cy(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function SO(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function RO(t,e){const n=SO("firebase-js-sdk-policy",{createScriptURL:bO}),s=document.createElement("script"),i=`${Vh}?l=${t}&id=${e}`;s.src=n?n?.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function PO(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function kO(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const c=(await cy(n)).find(u=>u.measurementId===i);c&&await e[c.appId]}}catch(l){hn.error(l)}t("config",i,r)}async function DO(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await cy(n);for(const c of o){const u=l.find(p=>p.measurementId===c),d=u&&e[u.appId];if(d)r.push(d);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){hn.error(r)}}function xO(t,e,n,s){async function i(r,...o){try{if(r==="event"){const[l,c]=o;await DO(t,e,n,l,c)}else if(r==="config"){const[l,c]=o;await kO(t,e,n,s,l,c)}else if(r==="consent"){const[l,c]=o;t("consent",l,c)}else if(r==="get"){const[l,c,u]=o;t("get",l,c,u)}else if(r==="set"){const[l]=o;t("set",l)}else t(r,...o)}catch(l){hn.error(l)}}return i}function NO(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=xO(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function MO(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Vh)&&n.src.includes(t))return n;return null}/**
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
 */const OO=30,VO=1e3;class LO{constructor(e={},n=VO){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const uy=new LO;function BO(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function FO(t){const{appId:e,apiKey:n}=t,s={method:"GET",headers:BO(n)},i=TO.replace("{app-id}",e),r=await fetch(i,s);if(r.status!==200&&r.status!==304){let o="";try{const l=await r.json();l.error?.message&&(o=l.error.message)}catch{}throw Tn.create("config-fetch-failed",{httpStatus:r.status,responseMessage:o})}return r.json()}async function UO(t,e=uy,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw Tn.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw Tn.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new jO;return setTimeout(async()=>{l.abort()},EO),hy({appId:s,apiKey:i,measurementId:r},o,l,e)}async function hy(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=uy){const{appId:r,measurementId:o}=t;try{await $O(s,e)}catch(l){if(o)return hn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:r,measurementId:o};throw l}try{const l=await FO(t);return i.deleteThrottleMetadata(r),l}catch(l){const c=l;if(!HO(c)){if(i.deleteThrottleMetadata(r),o)return hn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:r,measurementId:o};throw l}const u=Number(c?.customData?.httpStatus)===503?yf(n,i.intervalMillis,OO):yf(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(r,d),hn.debug(`Calling attemptFetch again in ${u} millis`),hy(t,d,s,i)}}function $O(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s(Tn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function HO(t){if(!(t instanceof Bn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class jO{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function GO(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,o={...s,send_to:r};t("event",n,o)}}async function qO(t,e,n,s){if(s&&s.global){const i={};for(const r of Object.keys(n))i[`user_properties.${r}`]=n[r];return t("set",i),Promise.resolve()}else{const i=await e;t("config",i,{update:!0,user_properties:n})}}/**
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
 */async function QO(){if(Dm())try{await xm()}catch(t){return hn.warn(Tn.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return hn.warn(Tn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function zO(t,e,n,s,i,r,o){const l=UO(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&hn.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>hn.error(m)),e.push(l);const c=QO().then(m=>{if(m)return s.getId()}),[u,d]=await Promise.all([l,c]);MO(r)||RO(r,u.measurementId),i("js",new Date);const p=o?.config??{};return p[wO]="firebase",p.update=!0,d!=null&&(p[IO]=d),i("config",u.measurementId,p),u.measurementId}/**
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
 */class WO{constructor(e){this.app=e}_delete(){return delete Yi[this.app.options.appId],Promise.resolve()}}let Yi={},jp=[];const Gp={};let rc="dataLayer",KO="gtag",qp,Lh,Qp=!1;function YO(){const t=[];if(km()&&t.push("This is a browser extension environment."),JR()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=Tn.create("invalid-analytics-context",{errorInfo:e});hn.warn(n.message)}}function JO(t,e,n){YO();const s=t.options.appId;if(!s)throw Tn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)hn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Tn.create("no-api-key");if(Yi[s]!=null)throw Tn.create("already-exists",{id:s});if(!Qp){PO(rc);const{wrappedGtag:r,gtagCore:o}=NO(Yi,jp,Gp,rc,KO);Lh=r,qp=o,Qp=!0}return Yi[s]=zO(t,jp,Gp,e,qp,rc,n),new WO(t)}function XO(t=qu()){t=vn(t);const e=Ci(t,ja);return e.isInitialized()?e.getImmediate():ZO(t)}function ZO(t,e={}){const n=Ci(t,ja);if(n.isInitialized()){const i=n.getImmediate();if(zs(e,n.getOptions()))return i;throw Tn.create("already-initialized")}return n.initialize({options:e})}function eV(t,e,n){t=vn(t),qO(Lh,Yi[t.app.options.appId],e,n).catch(s=>hn.error(s))}function tV(t,e,n,s){t=vn(t),GO(Lh,Yi[t.app.options.appId],e,n,s).catch(i=>hn.error(i))}const zp="@firebase/analytics",Wp="0.10.19";function nV(){ns(new Ln(ja,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return JO(s,i,n)},"PUBLIC")),ns(new Ln("analytics-internal",t,"PRIVATE")),Dn(zp,Wp),Dn(zp,Wp,"esm2020");function t(e){try{const n=e.getProvider(ja).getImmediate();return{logEvent:(s,i,r)=>tV(n,s,i,r),setUserProperties:(s,i)=>eV(n,s,i)}}catch(n){throw Tn.create("interop-component-reg-failed",{reason:n})}}}nV();const sV={apiKey:"AIzaSyCwvJ8cUWLZPZ26i1deIAXnoLuzToIcB70",authDomain:"tuldung.firebaseapp.com",projectId:"tuldung",storageBucket:"tuldung.firebasestorage.app",messagingSenderId:"1086524417813",appId:"1:1086524417813:web:8199da4b7cebcaffc86b1c",measurementId:"G-EGV6XDKG9R"},Bh=Vm(sV),iV=gD(Bh),dy=yM(Bh);let rV=null;if(typeof window<"u")try{rV=XO(Bh)}catch(t){console.warn("Analytics 초기화 실패:",t)}new hs;const oV=async()=>{try{return await ik(iV),{success:!0}}catch(t){return console.error("로그아웃 오류:",t),{success:!1,error:t.message}}},aV=async t=>{try{const e=Nv(dy,"users",t),n=await Gv(e);return n.exists()?n.data():null}catch(e){return console.error("사용자 데이터 가져오기 오류:",e),null}},lV=async(t,e)=>{try{const n=Nv(dy,"users",t),s=await Gv(n);if(s.exists()){const i=s.data();await Up(n,{...i,gameData:{...i.gameData,...e}},{merge:!0})}else await Up(n,{gameData:e});return{success:!0}}catch(n){return console.error("게임 데이터 업데이트 오류:",n),{success:!1,error:n.message}}},fy=async()=>{try{return await oV(),sessionStorage.removeItem("currentUser"),{success:!0}}catch(t){return console.error("로그아웃 오류:",t),{success:!1,error:t.message}}},cV=async(t,e)=>{try{const n=await lV(t,e);if(n.success){const s=JSON.parse(sessionStorage.getItem("currentUser")||"{}");s.id===t&&(s.gameData={...s.gameData,...e},sessionStorage.setItem("currentUser",JSON.stringify(s)))}return n}catch(n){return console.error("게임 데이터 업데이트 오류:",n),{success:!1,error:n.message}}},uV=Object.freeze(Object.defineProperty({__proto__:null,logout:fy,updateGameData:cV},Symbol.toStringTag,{value:"Module"})),hV={class:"profilePage"},dV={class:"mainContent"},fV={class:"profileHeader"},pV={class:"profileImageWrapper"},gV=["src","alt"],mV={key:1,class:"profileImagePlaceholder"},_V={class:"profileInfo"},vV={class:"userName"},yV={class:"userEmail"},AV={class:"settingGroup"},IV={class:"settingLabel"},wV={class:"settingInput"},EV={class:"userId"},TV={key:0,class:"statsSection"},CV={class:"sectionTitle"},bV={class:"statsGrid"},SV={class:"statCard"},RV={class:"statInfo"},PV={class:"statLabel"},kV={class:"statValue"},DV={class:"statCard"},xV={class:"statInfo"},NV={class:"statLabel"},MV={class:"statValue"},OV={class:"statCard"},VV={class:"statInfo"},LV={class:"statLabel"},BV={class:"statValue"},FV={class:"statCard"},UV={class:"statInfo"},$V={class:"statLabel"},HV={class:"statValue"},jV={class:"logoutSection"},GV={__name:"UserProfilePage",setup(t){const e=dn(),{logout:n}=_m(),s=D(0),i=D(null),r=D("한국어"),o=D(""),l=D(""),c=D(""),u=D(""),d=D(!1),p={ko:{userProfile:"사용자 프로필",userID:"User ID",copySuccess:"User ID가 복사되었습니다!",logout:"로그아웃",logoutConfirm:"정말 로그아웃 하시겠습니까?",gameStats:"게임 통계",level:"레벨",points:"포인트",coins:"코인",catFragments:"고양이 파편",back:"← 뒤로"},en:{userProfile:"User Profile",userID:"User ID",copySuccess:"User ID copied!",logout:"Logout",logoutConfirm:"Are you sure you want to logout?",gameStats:"Game Stats",level:"Level",points:"Points",coins:"Coins",catFragments:"Cat Fragments",back:"← Back"}},m=Xe(()=>r.value==="한국어"?p.ko:p.en);Rt(()=>{const w=ht();w?(i.value=w,s.value=w.gameData?.coins||0,w.uid||w.email?(d.value=!0,o.value=w.email||"",l.value=w.displayName||w.name||o.value.split("@")[0],c.value=w.photoURL||"",u.value=w.uid||w.id||""):(o.value=w.email||w.id||"",l.value=w.name||o.value.split("@")[0]||"User",u.value=w.id||"ID"+String(Math.random()).substring(2,10))):e.push("/login");const x=localStorage.getItem("appLanguage");x&&(r.value=x)});const _=()=>{navigator.clipboard.writeText(u.value),alert(m.value.copySuccess)},I=async()=>{if(confirm(m.value.logoutConfirm))try{if(d.value){const w=await fy();w.success||console.error("Firebase 로그아웃 실패:",w.error)}pf(),n(),e.push("/login")}catch(w){console.error("로그아웃 오류:",w),pf(),n(),e.push("/login")}},b=Xe(()=>i.value?{level:i.value.gameData?.level||1,points:i.value.gameData?.coins||0,coins:i.value.gameData?.totalCoin||0,catFragments:i.value.gameData?.catFragments||i.value.gameData?.catCount||0}:null);return(w,x)=>(O(),V("div",hV,[we(fn,{coinCount:s.value},null,8,["coinCount"]),h("main",dV,[h("button",{class:"backBtn",onClick:x[0]||(x[0]=U=>zt(e).push("/settings"))},B(m.value.back),1),h("div",fV,[h("div",pV,[c.value?(O(),V("img",{key:0,src:c.value,alt:l.value,class:"profileImage"},null,8,gV)):(O(),V("div",mV,B(l.value.charAt(0).toUpperCase()),1))]),h("div",_V,[h("h2",vV,B(l.value),1),h("p",yV,B(o.value),1)])]),h("div",AV,[h("label",IV,B(m.value.userID),1),h("div",wV,[h("span",EV,B(u.value),1),h("button",{class:"copyBtn",onClick:_},"📋")])]),b.value?(O(),V("div",TV,[h("h3",CV,B(m.value.gameStats),1),h("div",bV,[h("div",SV,[x[1]||(x[1]=h("div",{class:"statIcon"},"⭐",-1)),h("div",RV,[h("div",PV,B(m.value.level),1),h("div",kV,B(b.value.level),1)])]),h("div",DV,[x[2]||(x[2]=h("div",{class:"statIcon"},"💰",-1)),h("div",xV,[h("div",NV,B(m.value.points),1),h("div",MV,B(b.value.points.toLocaleString()),1)])]),h("div",OV,[x[3]||(x[3]=h("div",{class:"statIcon"},"🪙",-1)),h("div",VV,[h("div",LV,B(m.value.coins),1),h("div",BV,B(b.value.coins.toLocaleString()),1)])]),h("div",FV,[x[4]||(x[4]=h("div",{class:"statIcon"},"🐱",-1)),h("div",UV,[h("div",$V,B(m.value.catFragments),1),h("div",HV,B(b.value.catFragments.toLocaleString()),1)])])])])):he("",!0),h("div",jV,[h("button",{class:"logoutBtn",onClick:I},B(m.value.logout),1)])]),we(pn)]))}},qV=Pt(GV,[["__scopeId","data-v-737deece"]]),QV={class:"attendancePage"},zV={class:"mainContent"},WV={class:"attendanceInfo"},KV={class:"infoItem"},YV={class:"infoValue"},JV={class:"infoItem"},XV={class:"infoValue"},ZV={key:0,class:"attendanceMessage"},e4={class:"attendanceGrid"},t4=["onClick"],n4={class:"dayNumber"},s4={class:"rewardIcon"},i4={key:0,class:"specialStar"},r4={class:"rewardAmount"},o4={__name:"AttendancePage",setup(t){const e=dn(),n=D(0),s=D(null),i=D(0),r=D([]),o=D(null),l=D(0),c=D(Array.from({length:20},(w,x)=>({day:x+1,reward:"1K",rewardType:"P",hasSpecial:[5,9,10,11,16,17].includes(x+1),isChecked:!1}))),u=(w,x)=>new Date(w).toDateString()===new Date(x).toDateString(),d=()=>{e.go(-1)},p=async w=>{if(!s.value){alert("로그인이 필요합니다.");return}const x=new Date;x.toDateString();const U=x.toISOString();if(o.value&&u(o.value,U)){alert("오늘 이미 출석체크를 완료했습니다! 내일 다시 시도해주세요.");return}const F=c.value[w];if(F.isChecked){alert("이미 체크된 날짜입니다.");return}const j=r.value.length;if(o.value){const Ie=new Date(o.value),S=Math.floor((x-Ie)/(1e3*60*60*24));if(S>0&&w!==j){alert("다음 순서의 출석체크만 가능합니다.");return}S===1?l.value+=1:S>1&&(l.value=1)}else l.value=1;F.isChecked=!0,r.value.push(F.day),i.value=r.value.length;const se=1e3;n.value+=se,o.value=U,s.value&&(await vw(s.value.id,n.value),await m()),alert(`Day ${F.day} 출석체크 완료! ${se} 포인트 획득!`),window.dispatchEvent(new Event("userDataUpdated"))},m=async()=>{if(s.value){const w={checkedDays:r.value,attendanceDays:i.value,consecutiveDays:l.value,lastCheckInDate:o.value,lastUpdate:new Date().toISOString()};localStorage.setItem(`attendance_${s.value.id}`,JSON.stringify(w)),await Mt(s.value.id,{attendance:w})}},_=async()=>{if(s.value){let w=null;const x=s.value.id?.length>20||s.value.uid;if(x)try{const U=await aV(s.value.id);if(U?.gameData?.attendance){w=U.gameData.attendance;const F=JSON.parse(sessionStorage.getItem("currentUser")||"{}");F.id===s.value.id&&(F.gameData={...F.gameData,...U.gameData},sessionStorage.setItem("currentUser",JSON.stringify(F)),s.value=F)}}catch(U){console.error("Firebase에서 출석체크 데이터 가져오기 실패:",U)}if(!w&&s.value.gameData?.attendance&&(w=s.value.gameData.attendance),!w){const U=localStorage.getItem(`attendance_${s.value.id}`);U&&(w=JSON.parse(U),x&&w&&await Mt(s.value.id,{attendance:w}))}w&&(r.value=w.checkedDays||[],i.value=w.attendanceDays||0,l.value=w.consecutiveDays||0,o.value=w.lastCheckInDate||null,r.value.forEach(U=>{const F=U-1;c.value[F]&&(c.value[F].isChecked=!0)}))}},I=Xe(()=>{if(!o.value)return!0;const w=new Date,x=new Date(o.value),U=w.toDateString(),F=x.toDateString();return U!==F}),b=Xe(()=>r.value.length);return Rt(async()=>{s.value=ht(),s.value&&(n.value=s.value.gameData?.coins||0,await _())}),(w,x)=>(O(),V("div",QV,[we(fn,{coinCount:n.value},null,8,["coinCount"]),h("main",zV,[h("button",{class:"backBtn",onClick:d},"← 뒤로"),x[3]||(x[3]=h("h1",{class:"pageTitle"},"출석체크",-1)),h("div",WV,[h("div",KV,[x[0]||(x[0]=h("span",{class:"infoLabel"},"연속 출석:",-1)),h("span",YV,B(l.value)+"일",1)]),h("div",JV,[x[1]||(x[1]=h("span",{class:"infoLabel"},"총 출석:",-1)),h("span",XV,B(i.value)+"일",1)])]),I.value?he("",!0):(O(),V("div",ZV," 오늘 출석체크를 완료했습니다! 내일 다시 시도해주세요. ")),h("div",e4,[(O(!0),V(Se,null,je(c.value,(U,F)=>(O(),V("div",{key:U.day,class:Re(["dayCell",{checked:U.isChecked,disabled:!I.value&&!U.isChecked||F!==b.value&&!U.isChecked,nextCheckable:I.value&&F===b.value&&!U.isChecked}]),onClick:j=>I.value&&(F===b.value||U.isChecked)?p(F):null},[h("div",n4,"Day "+B(U.day),1),h("div",s4,[x[2]||(x[2]=h("div",{class:"iconCircle"},"P",-1)),U.hasSpecial&&!U.isChecked?(O(),V("span",i4,"⭐")):he("",!0)]),h("div",r4,B(U.reward),1)],10,t4))),128))])]),we(pn)]))}},a4=Pt(o4,[["__scopeId","data-v-473b169a"]]),l4="/tdl/assets/btc-DC8WHF5v.png",c4="/tdl/assets/eth-DHgp7Wvq.png",u4="/tdl/assets/BTC_line-DiGuGbEI.png",h4="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAACJCAYAAABaWIDDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA85SURBVHgB7d1fchPHFsfxMybJw61KhbuCTN5yqRDbK0BeAXgFmBXErACxguAVYFZgswLEClBibnLf7rCCKDhVqSJGndPqNghibHXPjKZ75vupUqQYy/yxpf5Nd5/ThQAAMBBGtq7r3ZbIfFPvS5GidPeiHzfX3f2yotL/zPxNHxu9bfxkHxcynUrGCgEAoKf8gD/SAf+WDnl39COlNKqwIaDSrzvNLRgQAAAAveIHfTvY39WbXu1/fFW/DsVEFrMGZuKDwSy1YEAAAAD0gg78I73Sv60P96STQf9KMz9jsBwM7IxBJR0gAAAAsuYGfvNAbyPJkw8Gxi8nLILBVIPBTFpEAAAAZEkHfp3eNz9mPPBfpdVgQAAAAGTFrfHPx/rwBxmmRoIBAQAAkA0jN+/o0PVY0lzj71pQMHgXAHyi2tcP2dpI/mHXa+ZqS+19P+pLAaBJXPXXshQMNg7ONx0uAoAmqj19qOsoDPwJqfw37Fi/YU/b3gwCAKnSwb/Uwf+ZuIY9qMdecN4r5OS48P+w/xckrjjU2xMNAhMBgIFoacr/vKvfxHX6szOwb1/p/W8if/5eSDVzv/d/vtZf/7fIta/edwy0fQUWj7ckX/r3O9vRALCp/7BmT5CLSm/jQn5+IgDQY0a+12Vp+VGaUbkZVdHb6U/ng3wdGk5uiQsmI1kEgsK3Gc6BmWgA+F4TD1P/+Sn0h7i431UDCQBok45NY717IPXY6e5DvT/WKe/nsgZGSh1PvzzfSzcSFwxKSW/5YmYDgBHk7KHOBowFAHqigcFfB/75I5E/Dpq40m/C+2BQbPnzCLbc4+4uwG0AsOv/pSBndmfnLrMBAHJXc/BPbuC/SofBYGoDgP2HHgtyV2kI2CEEAMhVvTV/u6Hvr3uF/K+SHlhDMNgvfG3lM8l7RyMct7NTfqGHAICsuLa+8xcSzl71jwt5eSAD0FAwmOrS8bbvA2BDwFtNXcWeIHeEAABZqVHnX+n73S7vdyHBwOgSyelDu0RSXPwFsEbXfelI6etLR1J/isd2FNxmOQBADoxsPos40EcH/dc7uaz1d8XIjS3Xx8D6sPyRswAS5GtL93wYKCVOxZ4AAKmL2/RnS/tO7zP410MASJxv02xfHKWEm/oQwIsEQHLiOtGaw0JO7glq2xAkTX/QD0Xe7Lh1m2Bbbm8HAKTIHAV9uphjBv/mEAAyYMta9If+vv7w74prBRzy7D0/xQYAyXCzmyak+qzSaX8G/waxBJAZI9+WIl9E7JY1u/b0JwGABAQ2oavsTGhfavxTwQxAZtwLwC4JBM8EPHbrbQDQLT8rWQY8Zczg3zwCQIaWQkDI5r5FwydCAIAu+feguwHPeMTpp+0gAGTKhYD5btizbOKeB266AYAmzfckaOr/9KGgFQSAjBXycqJ39yXMlk6/URkAYO3Cr/7t1D+1/m0hAGROp8YeRZQI7lMZAGD9TEhPkylT/+2iCqAnjNx85jsHhjyLygAAaxHe9MeM9P3puaA1zAD0xrWYHgFUBgBYExPQ7tdMGPzbxwxAj/geAfY4zZDDhCrODADQpvCr/zffUPbXPmYAeoTKAABpCrr6P2TwXw8CQM9QGQAgJe7q3+yt/oy/KPtbEwJAD9WoDNgXAGgUV/+pYg9Aj8VVBsx3/CwCANTC2n/amAHotZjKgI0jKgMANMM8Dvhcrv7XjBmAnqtRGbBdyJQOXACi6IXEyJ4/svozuPpfN2YAes69oEzoGdqlyFsqAwDUYAI2FnP13wUCwAC4bn/zsQQpRlQGAIhh5Oae/ndrxU+v2PnfDZYABkRflDqgF6E7/e+7qgIgLX6vih1k7FHXX7uPFuXSZ9glLL+MtfFK3H6YiqZX7dOLB7vxr1zts+fjQl4SADpAABgYfWHa/QCrJnOPygB0yw/2I310SxY/v8b+f8i+lmUaCoqpfg29bdh2s1NCQXPc1X+x6ua/Stf+d5j+7wYBYGD8pkC7MacMeNrMbwqsBFgTv4nstr5N3fEDfotsIBC9FU+FQFBL4NX/vl5cHAg6QQAYICoDkCod9O10vl2m+kHir/CbUOnb48QeSmNnCQgEqwm9+tflxW8EnSEADJS+UPWqqgjc6b84oWtHgIa5q33bMc6MJE2VXzY41kDwkwaCqeADvulPyOzingaAJ4LOEAAGzMh3+oa7MZYwj/RFG3rWAHChDAb+T6kIBB8ysvk4oOc/V/8JIAAMHJUB6II/IOaBBB0Sk7TZR0sGgwoE/hyRkLJhrv4TQAAAlQFYKz9Y2ANiulzjb9tyILAzBBPpKQ1z+t4xfxHwFK7+E0EAAJUBWAt/1f84w+n+Jsw+WjKYSA/4wd++d4SEOa7+E0EAwIKRG/pC/iz0hVxRGYBV+N3hdoq4z1f9Ic4DwcQvGUwkM3GDv235exLamhwtIQDgncASnvNnURmAS+mUv90v8oO0o3INfRYDanXxpyx6COit8F0DU/XBHoKJJCwy0On36M02TX/SQQDAB6gMQFNcTf9iyv+ONGPmBvvi2N2f6lR6FTT7ZKTUP9OXm/asC7cUYe9TtQgEtlvheXOizmfafJ+GsUQFOpr+pIYAgH/QdH+oPxp3JQyVAXjHDxR2ejhwc+mFX22iP4+HIq+fhg74K311uXlrKRAkPEvQbSDwnRntDGEpwYxeJJxwkZAYAgD+If7Nm8oARDWEuYgObnMNlH8ctDHoX8YHgi03c5F0IHi3h0D/Z9JWIGigV0Ol4W173d9HXI0AgAtRGYAYPjzakrBS4nQ28H/KUiAY+SWDHAJBrfMM/Pfxrj+HYSTxKg77SRcBAJ9EZQBC1J/2N4e6rn8/9StF/7q4lUcgeHfAUXVZcyL3vbPft/mmH/SbmPmoGPzTRgDApagMwKqMbB5FbvirbEdA/Zl5LhlygeCaHTBv+yWDUpK1qJSY+dt1dzP+vlEVg3/6CAC4EpUBuEp8qZ+dsj7d7dP6cF6BoBUVg38eCABYCZUB+BQd/MfiWvsGmo8LeflQes7tp/l8pA99tUGfA0H/Al2fEQCwEioDcJEag/9ga8I/CgT29RS5ZyI11PnnhgCAlVEZgGURJ8B5b3W9/7/0gvd8INjUh3cyDQRTkbN7hfwyFWSFAIAgVAbA0iUhO1gdSTAG/6v4boU6OyAjv2SQaiCY+WUcrvozRQBAMCoDhi3yBDgZypp/0xIMBMn1akAcAgCiUBkwTPFd/hj8m/L+PAO7ZGDDwNrOM9Ap/vkxA39/EAAQjcqAYWHwT1PLBxxV+jV10JfjXPs04NMIAIhGZcBwxA/+nP/ehaUDjuwMQSmrvUbtVX3lD1/Sq/2/dNnu11eC3iIAoJbIyoBKlw92qAzIQ40Wv1Od7dkWJMHNFPyrFLn21fuPvv1df+U3kT9/Z1p/eAgAqI3KgH6LbPFbcQIckLYNAWpy9b8mdHNfqVcfgZUEWDfX4jdm8LetYBn8gZQRANAIXec9tJu9JEhxx3eSQ4L89ya0v39FH3ggDywBoFFUBvRDZItfveJ/s83gD+SBAIBGxW8YO9umlWga4lv88j0EcsISABrlNvW92ZXFVHCIz45cqRm65Fr8xvb3Z/AHckIAQOPcFPCZDQEhm8BKO3PgZhDQBdfit4jYmGkb/dDfH8gNAQCtoDIgL77Rjz3ch/7+wEAQANAaKgPyQItfYJjYBIjWURmQLlr8AsNFAEDrIisDZiJnO2wsa098xQZHOwN9wBIAWhdZGXCdyoC2GbvfIri/v8jprgDIHgEAa1GjMuCIyoDm1Wjxu0uLX6AfCABYGz+dH7ppTK9Q30bUpeNTaPELwCIAYK3cxr7gyoA9KgOaUaPFL4M/0DNsAkQnjNw8siV/EmZPAwQNZyJFtvhlMybQUwQAdMLvQH8hYeVnDEaRXIvf4kiC2Ra/dPkD+oglAHTCVwbYUrIq4GlUBkSo0eJ3n8Ef6C8CADqzVBkQoqQyYHU1W/weCIDeIgCgU346P/TMACoDVkCLXwCXIQCgc1QGNK9ei18Gf2AI2ASIZFAZ0Axa/AJYBTMASMg1e7hMJWEeGbkR2s6252jxC+BqBAAkg8qA+mjxC2BVBAAkxVUGzEOPmS2pDKDFL4AwBAAkp5CXE6EyIAgtfgGEIgAgSa4ywDwKfNYgKwN8i9+Iwf+MwR8YMKoAkDQjN5/pj+lIwgymMoAWvwBiMQOAxF2zO9MrCTOIygBa/AKogwCApC1VBoTsUO99ZQAtfgHURQBA8nxlAGcGeLT4BdAEAgCyQGWAU6PF7yMGfwDL2ASIrBi5qQN6sR/4tIeF/DyWzNVo8XtcyAld/gB8gBkAZEUHsvu2Z72EeWDk+7uSvegWv6GNlQAMAAEAGRpeZQAtfgE0jQCA7AytMoAWvwDaQABAloZSGRDZ4rdi8AdwFQIAstX3yoAaLX53GfwBXIUAgKz19cwA1+JXIoKKuVfIL1MBgCtQBohe6NOZAa7F76LcL7TL3z5d/gCsihkA9EQ/KgNo8QtgXZgBQG8Y+bYU+eKFhA2e/ljc7qfNafELYJ2YAUBvRFYG2PLAZ37NvTM6+I/0z27DSylBaPELIA4BAL0SWRmgIaA46mpjoNvtH7Pmv2jxG/p3BYAFlgDQS5FnBliV5mJdEphW0jI35W/b+5qRhNMli9c7dPkDEIsAgN6KrAzwikO9PWwjCPhDfWw4sd39YpoSVTT6AVAXAQC95QfaiHX1ZYsgcKBBoPYmQb/Of1sf7kncwG9VDP4AmkAAQK/5yoCInfX/UOntWJcHnur91J1HcNXvvWg5bGv6R/pSuxU51f/Rn4HBH0AzCADovQZDwJLCzgjYEFDp71AtfbwUd3WvA78ppTkVgz+AJhEAMAjthIC1qRj8ATSNMkAMghs87RHCZiJ5mTL4A2gDAQCDYQfRQk52bOc8yYI95Og1gz+AVrAEgEEy8t1I8+9jSXNJYOZO9Ts5FgBoCTMAGCTXMXBjO73ZgMVV/zcM/gDaxgwABs9tEPz8gb4c9qQzi70JYx34nwsArAEBAPA6CAJ2qt9e6R8y8ANYNwIA8BEfBEb68G58K+FLf4eJfl0d+F8/oZc/gK4QAIBLGCmvi3x5Sx+OfBjYknBT/Up6KyY66D9l0AeQAgIAEMjIDQ0B177yXf/KCz6l0s/SQf5sWsivrwQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA0PwNkHeXO5vHqaMAAAAASUVORK5CYII=",d4="/tdl/assets/catProfile01-gY0Djz81.png",f4="/tdl/assets/catProfile02-Cesbpkj5.png",p4="/tdl/assets/eth_ico-CaIyIapE.png",g4={class:"nftPage"},m4={class:"mainContent nftWrap"},_4={class:"walletSection"},v4={class:"walletBalance"},y4={class:"btcInfo"},A4={class:"change positive"},I4={class:"tabMenu"},w4={key:0,class:"itemList"},E4={class:"itemIcon"},T4={class:"itemInfo"},C4={class:"itemSymbol"},b4={class:"itemName"},S4={class:"itemChart"},R4={class:"itemPrice"},P4={class:"price"},k4={key:1,class:"nftList"},D4={class:"nftThumbnail"},x4={class:"nftInfo"},N4={class:"nftId"},M4={class:"collectionName"},O4={class:"nftValue"},V4={class:"ethAmount"},L4=["src"],B4={class:"usdValue positive"},F4={__name:"NFTPage",setup(t){const e=D(0),n=D("tokens"),s=D("$ 5,323.00"),i=D("0.00335"),r=D("+6.54%"),o=D(!1),l=D(!1),c=D(!1),u=ht();u&&(e.value=u.gameData?.coins||0);const d=F=>{n.value=F},p=()=>{o.value=!0},m=()=>{o.value=!1},_=()=>{l.value=!0},I=()=>{l.value=!1},b=()=>{c.value=!0},w=()=>{c.value=!1},x=D([{id:1,name:"Bitcoin",symbol:"BTC",price:"36,590.00",change:"+6.21%",isPositive:!0,image:l4,lineImage:u4},{id:2,name:"Ethereum",symbol:"ETH",price:"2,590.00",change:"+5.21%",isPositive:!0,image:c4,lineImage:h4}]),U=D([{id:1,nftId:"#1957",collectionName:"Bored Ape Yacht Club",ethAmount:"64",usdValue:"23,114.57",image:d4},{id:2,nftId:"#6513",collectionName:"Bored Ape Yacht Club",ethAmount:"199.8",usdValue:"45,114.57",image:f4}]);return(F,j)=>(O(),V("div",g4,[we(fn,{coinCount:e.value},null,8,["coinCount"]),h("main",m4,[h("div",_4,[j[5]||(j[5]=h("div",{class:"walletLabel"},"Current Wallet Balance",-1)),h("div",v4,B(s.value),1),h("div",y4,[h("span",null,"BTC : "+B(i.value),1),h("span",A4,B(r.value),1)])]),h("div",{class:"actionButtons"},[h("button",{class:"actionBtn sendBtn",onClick:_},[...j[6]||(j[6]=[h("div",{class:"btnIcon"},null,-1),h("span",{class:"btnLabel"},"Send",-1)])]),h("button",{class:"actionBtn buyBtn",onClick:p},[...j[7]||(j[7]=[h("div",{class:"btnIcon"},null,-1),h("span",{class:"btnLabel"},"Buy",-1)])]),h("button",{class:"actionBtn receiveBtn",onClick:b},[...j[8]||(j[8]=[h("div",{class:"btnIcon"},null,-1),h("span",{class:"btnLabel"},"Receive",-1)])])]),h("div",I4,[h("button",{class:Re(["tab",{active:n.value==="tokens"}]),onClick:j[0]||(j[0]=se=>d("tokens"))}," Tokens ",2),h("button",{class:Re(["tab",{active:n.value==="nfts"}]),onClick:j[1]||(j[1]=se=>d("nfts"))}," NFTs ",2)]),n.value==="tokens"?(O(),V("div",w4,[(O(!0),V(Se,null,je(x.value,se=>(O(),V("div",{key:se.id,class:"item"},[h("div",E4,[h("div",{class:"iconCircle",style:Ct({backgroundImage:`url(${se.image})`})},null,4)]),h("div",T4,[h("div",C4,B(se.symbol),1),h("div",b4,B(se.name),1)]),h("div",S4,[h("div",{class:"chartLine",style:Ct({backgroundImage:`url(${se.lineImage})`})},null,4)]),h("div",R4,[h("div",P4,"$"+B(se.price),1),h("div",{class:Re(["change",{positive:se.isPositive,negative:!se.isPositive}])},B(se.change),3)])]))),128))])):he("",!0),n.value==="nfts"?(O(),V("div",k4,[(O(!0),V(Se,null,je(U.value,se=>(O(),V("div",{key:se.id,class:"nftItem"},[h("div",D4,[h("div",{class:"thumbnailPlaceholder",style:Ct({backgroundImage:`url(${se.image})`})},null,4)]),h("div",x4,[h("div",N4,B(se.nftId),1),h("div",M4,B(se.collectionName),1)]),h("div",O4,[h("div",V4,[h("img",{src:zt(p4),alt:"ETH",class:"ethIcon"},null,8,L4),h("span",null,B(se.ethAmount),1)]),h("div",B4,[j[9]||(j[9]=h("span",{class:"arrowUp"},"↑",-1)),h("span",null,"$ "+B(se.usdValue),1)])])]))),128))])):he("",!0)]),we(pn),o.value?(O(),V("div",{key:0,class:"popupOverlay",onClick:m},[h("div",{class:"popupContent",onClick:j[2]||(j[2]=Gr(()=>{},["stop"]))},[h("div",{class:"popupHeader"},[j[10]||(j[10]=h("h2",{class:"popupTitle"},"구매하기",-1)),h("button",{class:"closeBtn",onClick:m},"×")]),h("div",{class:"popupBody"},[j[11]||(j[11]=h("p",{class:"popupMessage"},"구매해주세요",-1)),h("div",{class:"popupActions"},[h("button",{class:"popupBtn cancelBtn",onClick:m},"취소"),h("button",{class:"popupBtn confirmBtn",onClick:m},"확인")])])])])):he("",!0),l.value?(O(),V("div",{key:1,class:"popupOverlay",onClick:I},[h("div",{class:"popupContent",onClick:j[3]||(j[3]=Gr(()=>{},["stop"]))},[h("div",{class:"popupHeader"},[j[12]||(j[12]=h("h2",{class:"popupTitle"},"전송하기",-1)),h("button",{class:"closeBtn",onClick:I},"×")]),h("div",{class:"popupBody"},[j[13]||(j[13]=h("p",{class:"popupMessage"},"전송해주세요",-1)),h("div",{class:"popupActions"},[h("button",{class:"popupBtn cancelBtn",onClick:I},"취소"),h("button",{class:"popupBtn confirmBtn",onClick:I},"확인")])])])])):he("",!0),c.value?(O(),V("div",{key:2,class:"popupOverlay",onClick:w},[h("div",{class:"popupContent",onClick:j[4]||(j[4]=Gr(()=>{},["stop"]))},[h("div",{class:"popupHeader"},[j[14]||(j[14]=h("h2",{class:"popupTitle"},"받기",-1)),h("button",{class:"closeBtn",onClick:w},"×")]),h("div",{class:"popupBody"},[j[15]||(j[15]=h("p",{class:"popupMessage"},"받아주세요",-1)),h("div",{class:"popupActions"},[h("button",{class:"popupBtn cancelBtn",onClick:w},"취소"),h("button",{class:"popupBtn confirmBtn",onClick:w},"확인")])])])])):he("",!0)]))}},U4=Pt(F4,[["__scopeId","data-v-b73bf2b5"]]),$4={class:"notificationPage"},H4={class:"mainContent"},j4={class:"pageHeader"},G4={class:"notificationList"},q4=["onClick"],Q4={class:"notificationContent"},z4={class:"notificationTitle"},W4={class:"notificationMessage"},K4={class:"notificationTime"},Y4={key:0,class:"unreadDot"},J4={key:0,class:"emptyState"},X4={__name:"NotificationPage",setup(t){const e=dn(),n=D(0),s=D([{id:1,title:"새로운 퀘스트가 도착했습니다!",message:"일일 퀘스트를 완료하고 보상을 받아보세요.",time:"5분 전",read:!1,type:"quest"},{id:2,title:"Coin 구매 완료",message:"1억 Coin 구매가 완료되었습니다.",time:"1시간 전",read:!1,type:"exchange"},{id:3,title:"고양이 제작 완료",message:"새로운 고양이가 인벤토리에 추가되었습니다!",time:"2시간 전",read:!0,type:"factory"},{id:4,title:"출석체크 보상",message:"출석체크를 완료하여 100 Point를 받았습니다.",time:"1일 전",read:!0,type:"attendance"}]);Rt(()=>{const c=ht();c&&(n.value=c.gameData?.coins||0)});const i=c=>{c.read||(c.read=!0)},r=()=>{s.value.forEach(c=>{c.read=!0})},o=Xe(()=>s.value.filter(c=>!c.read).length),l=c=>{switch(i(c),c.type){case"quest":e.push("/quest");break;case"exchange":e.push("/exchange");break;case"factory":e.push("/factory");break;case"attendance":e.push("/attendance");break}};return(c,u)=>(O(),V("div",$4,[we(fn,{coinCount:n.value},null,8,["coinCount"]),h("main",H4,[h("div",j4,[u[0]||(u[0]=h("h1",{class:"pageTitle"},"알림",-1)),o.value>0?(O(),V("button",{key:0,class:"markAllReadBtn",onClick:r}," 모두 읽음 ")):he("",!0)]),h("div",G4,[(O(!0),V(Se,null,je(s.value,d=>(O(),V("div",{key:d.id,class:Re(["notificationItem",{unread:!d.read}]),onClick:p=>l(d)},[h("div",Q4,[h("div",z4,B(d.title),1),h("div",W4,B(d.message),1),h("div",K4,B(d.time),1)]),d.read?he("",!0):(O(),V("div",Y4))],10,q4))),128)),s.value.length===0?(O(),V("div",J4,[...u[1]||(u[1]=[h("p",null,"알림이 없습니다.",-1)])])):he("",!0)])]),we(pn)]))}},Z4=Pt(X4,[["__scopeId","data-v-776e57f4"]]),eL={class:"shopPage"},tL={class:"mainContent"},nL={class:"itemList"},sL={class:"itemInfo"},iL={class:"itemName"},rL={class:"itemDescription"},oL={class:"itemPrice"},aL={class:"priceValue"},lL={class:"priceCurrency"},cL={key:0,src:ym,alt:"P",class:"currencyIcon"},uL={key:1,src:Am,alt:"C",class:"currencyIcon"},hL=["disabled","onClick"],dL={__name:"ShopPage",setup(t){const e=D(0),n=D(0),s=D([{id:1,name:"에너지 100",description:"에너지를 100 회복합니다",price:100,currency:"point",amount:100},{id:2,name:"에너지 500",description:"에너지를 500 회복합니다",price:450,currency:"point",amount:500},{id:3,name:"에너지 1000",description:"에너지를 1000 회복합니다",price:800,currency:"point",amount:1e3},{id:4,name:"에너지 2000",description:"에너지를 2000 회복합니다",price:1500,currency:"point",amount:2e3}]),i=()=>{const o=ht();o&&(e.value=o.gameData?.coins||0,n.value=o.gameData?.totalCoin||0)},r=o=>{const l=ht();if(!l){alert("로그인이 필요합니다.");return}if(o.currency==="point"&&e.value<o.price){alert("포인트가 부족합니다.");return}if(o.currency==="coin"&&n.value<o.price){alert("코인이 부족합니다.");return}if(o.currency==="point"){const p=e.value-o.price;Ia(l.email,p,n.value)}else{const p=n.value-o.price;Ia(l.email,e.value,p)}const c=4e3,u=parseInt(localStorage.getItem("currentEnergy")||c.toString()),d=Math.min(u+o.amount,c);localStorage.setItem("currentEnergy",d.toString()),localStorage.setItem("energyLastDate",new Date().toDateString()),alert(`${o.name} 구매 완료! 에너지가 ${o.amount} 회복되었습니다. (현재: ${d}/${c})`),i(),window.dispatchEvent(new Event("userDataUpdated"))};return Rt(()=>{i()}),(o,l)=>(O(),V("div",eL,[we(fn,{coinCount:e.value},null,8,["coinCount"]),h("main",tL,[h("div",nL,[(O(!0),V(Se,null,je(s.value,c=>(O(),V("div",{key:c.id,class:"shopItem"},[h("div",sL,[h("h3",iL,B(c.name),1),h("p",rL,B(c.description),1)]),h("div",oL,[h("span",aL,B(c.price.toLocaleString()),1),h("span",lL,[c.currency==="point"?(O(),V("img",cL)):(O(),V("img",uL))])]),h("button",{class:"buyBtn",disabled:c.currency==="point"&&e.value<c.price||c.currency==="coin"&&n.value<c.price,onClick:u=>r(c)}," 구매 ",8,hL)]))),128))])]),we(pn)]))}},fL=Pt(dL,[["__scopeId","data-v-e5203ede"]]),pL=["/loading","/login","/signup"],gL=[{path:"/",redirect:"/loading"},{path:"/loading",component:bw},{path:"/login",component:Gw},{path:"/signup",component:r1},{path:"/main",component:$T},{path:"/mining",component:oC},{path:"/hunting",component:OC},{path:"/exploration",component:ub},{path:"/production",component:Gb},{path:"/exchange",component:cS},{path:"/quest",component:TS},{path:"/inventory",component:zS},{path:"/factory",component:lR},{path:"/settings",component:DR},{path:"/profile",component:qV},{path:"/attendance",component:a4},{path:"/nft",component:U4},{path:"/notification",component:Z4},{path:"/shop",component:fL}],py=dw({history:GI(),routes:gL});py.beforeEach((t,e,n)=>{const i=!!ht(),r=pL.includes(t.path);if(i&&(t.path==="/login"||t.path==="/signup")){n("/main");return}if(!i&&!r){n("/login");return}n()});const gy=sI(fw);gy.use(py);gy.mount("#app");
