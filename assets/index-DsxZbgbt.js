(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Jc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const tt={},$i=[],Wn=()=>{},rg=()=>!1,Qa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Xc=t=>t.startsWith("onUpdate:"),sn=Object.assign,Zc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},qy=Object.prototype.hasOwnProperty,ze=(t,e)=>qy.call(t,e),ve=Array.isArray,Hi=t=>yo(t)==="[object Map]",lr=t=>yo(t)==="[object Set]",Pd=t=>yo(t)==="[object Date]",Te=t=>typeof t=="function",St=t=>typeof t=="string",es=t=>typeof t=="symbol",nt=t=>t!==null&&typeof t=="object",og=t=>(nt(t)||Te(t))&&Te(t.then)&&Te(t.catch),ag=Object.prototype.toString,yo=t=>ag.call(t),Qy=t=>yo(t).slice(8,-1),lg=t=>yo(t)==="[object Object]",eu=t=>St(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Br=Jc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wa=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Wy=/-\w/g,Nn=Wa(t=>t.replace(Wy,e=>e.slice(1).toUpperCase())),zy=/\B([A-Z])/g,Ti=Wa(t=>t.replace(zy,"-$1").toLowerCase()),za=Wa(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ol=Wa(t=>t?`on${za(t)}`:""),Fs=(t,e)=>!Object.is(t,e),Jo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},cg=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},da=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let kd;const Ka=()=>kd||(kd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ct(t){if(ve(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=St(s)?Xy(s):Ct(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(St(t)||nt(t))return t}const Ky=/;(?![^(]*\))/g,Yy=/:([^]+)/,Jy=/\/\*[^]*?\*\//g;function Xy(t){const e={};return t.replace(Jy,"").split(Ky).forEach(n=>{if(n){const s=n.split(Yy);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Re(t){let e="";if(St(t))e=t;else if(ve(t))for(let n=0;n<t.length;n++){const s=Re(t[n]);s&&(e+=s+" ")}else if(nt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Zy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",eA=Jc(Zy);function ug(t){return!!t||t===""}function tA(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=_i(t[s],e[s]);return n}function _i(t,e){if(t===e)return!0;let n=Pd(t),s=Pd(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=es(t),s=es(e),n||s)return t===e;if(n=ve(t),s=ve(e),n||s)return n&&s?tA(t,e):!1;if(n=nt(t),s=nt(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!_i(t[o],e[o]))return!1}}return String(t)===String(e)}function tu(t,e){return t.findIndex(n=>_i(n,e))}const hg=t=>!!(t&&t.__v_isRef===!0),B=t=>St(t)?t:t==null?"":ve(t)||nt(t)&&(t.toString===ag||!Te(t.toString))?hg(t)?B(t.value):JSON.stringify(t,dg,2):String(t),dg=(t,e)=>hg(e)?dg(t,e.value):Hi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Vl(s,r)+" =>"]=i,n),{})}:lr(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Vl(n))}:es(e)?Vl(e):nt(e)&&!ve(e)&&!lg(e)?String(e):e,Vl=(t,e="")=>{var n;return es(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let mn;class nA{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=mn,!e&&mn&&(this.index=(mn.scopes||(mn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=mn;try{return mn=this,e()}finally{mn=n}}}on(){++this._on===1&&(this.prevScope=mn,mn=this)}off(){this._on>0&&--this._on===0&&(mn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function sA(){return mn}let ut;const Ll=new WeakSet;class fg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,mn&&mn.active&&mn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ll.has(this)&&(Ll.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||gg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Dd(this),mg(this);const e=ut,n=Vn;ut=this,Vn=!0;try{return this.fn()}finally{vg(this),ut=e,Vn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)iu(e);this.deps=this.depsTail=void 0,Dd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ll.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){uc(this)&&this.run()}get dirty(){return uc(this)}}let pg=0,Fr,Ur;function gg(t,e=!1){if(t.flags|=8,e){t.next=Ur,Ur=t;return}t.next=Fr,Fr=t}function nu(){pg++}function su(){if(--pg>0)return;if(Ur){let e=Ur;for(Ur=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Fr;){let e=Fr;for(Fr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function mg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function vg(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),iu(s),iA(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function uc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(_g(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function _g(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===to)||(t.globalVersion=to,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!uc(t))))return;t.flags|=2;const e=t.dep,n=ut,s=Vn;ut=t,Vn=!0;try{mg(t);const i=t.fn(t._value);(e.version===0||Fs(i,t._value))&&(t.flags|=128,t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ut=n,Vn=s,vg(t),t.flags&=-3}}function iu(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)iu(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function iA(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Vn=!0;const yg=[];function _s(){yg.push(Vn),Vn=!1}function ys(){const t=yg.pop();Vn=t===void 0?!0:t}function Dd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ut;ut=void 0;try{e()}finally{ut=n}}}let to=0;class rA{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ru{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ut||!Vn||ut===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ut)n=this.activeLink=new rA(ut,this),ut.deps?(n.prevDep=ut.depsTail,ut.depsTail.nextDep=n,ut.depsTail=n):ut.deps=ut.depsTail=n,Ag(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ut.depsTail,n.nextDep=void 0,ut.depsTail.nextDep=n,ut.depsTail=n,ut.deps===n&&(ut.deps=s)}return n}trigger(e){this.version++,to++,this.notify(e)}notify(e){nu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{su()}}}function Ag(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Ag(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const hc=new WeakMap,gi=Symbol(""),dc=Symbol(""),no=Symbol("");function Zt(t,e,n){if(Vn&&ut){let s=hc.get(t);s||hc.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new ru),i.map=s,i.key=n),i.track()}}function cs(t,e,n,s,i,r){const o=hc.get(t);if(!o){to++;return}const l=c=>{c&&c.trigger()};if(nu(),e==="clear")o.forEach(l);else{const c=ve(t),u=c&&eu(n);if(c&&n==="length"){const d=Number(s);o.forEach((p,m)=>{(m==="length"||m===no||!es(m)&&m>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(no)),e){case"add":c?u&&l(o.get("length")):(l(o.get(gi)),Hi(t)&&l(o.get(dc)));break;case"delete":c||(l(o.get(gi)),Hi(t)&&l(o.get(dc)));break;case"set":Hi(t)&&l(o.get(gi));break}}su()}function Mi(t){const e=We(t);return e===t?e:(Zt(e,"iterate",no),kn(t)?e:e.map(qt))}function Ya(t){return Zt(t=We(t),"iterate",no),t}const oA={__proto__:null,[Symbol.iterator](){return Bl(this,Symbol.iterator,qt)},concat(...t){return Mi(this).concat(...t.map(e=>ve(e)?Mi(e):e))},entries(){return Bl(this,"entries",t=>(t[1]=qt(t[1]),t))},every(t,e){return os(this,"every",t,e,void 0,arguments)},filter(t,e){return os(this,"filter",t,e,n=>n.map(qt),arguments)},find(t,e){return os(this,"find",t,e,qt,arguments)},findIndex(t,e){return os(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return os(this,"findLast",t,e,qt,arguments)},findLastIndex(t,e){return os(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return os(this,"forEach",t,e,void 0,arguments)},includes(...t){return Fl(this,"includes",t)},indexOf(...t){return Fl(this,"indexOf",t)},join(t){return Mi(this).join(t)},lastIndexOf(...t){return Fl(this,"lastIndexOf",t)},map(t,e){return os(this,"map",t,e,void 0,arguments)},pop(){return Pr(this,"pop")},push(...t){return Pr(this,"push",t)},reduce(t,...e){return xd(this,"reduce",t,e)},reduceRight(t,...e){return xd(this,"reduceRight",t,e)},shift(){return Pr(this,"shift")},some(t,e){return os(this,"some",t,e,void 0,arguments)},splice(...t){return Pr(this,"splice",t)},toReversed(){return Mi(this).toReversed()},toSorted(t){return Mi(this).toSorted(t)},toSpliced(...t){return Mi(this).toSpliced(...t)},unshift(...t){return Pr(this,"unshift",t)},values(){return Bl(this,"values",qt)}};function Bl(t,e,n){const s=Ya(t),i=s[e]();return s!==t&&!kn(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.done||(r.value=n(r.value)),r}),i}const aA=Array.prototype;function os(t,e,n,s,i,r){const o=Ya(t),l=o!==t&&!kn(t),c=o[e];if(c!==aA[e]){const p=c.apply(t,r);return l?qt(p):p}let u=n;o!==t&&(l?u=function(p,m){return n.call(this,qt(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const d=c.call(o,u,s);return l&&i?i(d):d}function xd(t,e,n,s){const i=Ya(t);let r=n;return i!==t&&(kn(t)?n.length>3&&(r=function(o,l,c){return n.call(this,o,l,c,t)}):r=function(o,l,c){return n.call(this,o,qt(l),c,t)}),i[e](r,...s)}function Fl(t,e,n){const s=We(t);Zt(s,"iterate",no);const i=s[e](...n);return(i===-1||i===!1)&&lu(n[0])?(n[0]=We(n[0]),s[e](...n)):i}function Pr(t,e,n=[]){_s(),nu();const s=We(t)[e].apply(t,n);return su(),ys(),s}const lA=Jc("__proto__,__v_isRef,__isVue"),Ig=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(es));function cA(t){es(t)||(t=String(t));const e=We(this);return Zt(e,"has",t),e.hasOwnProperty(t)}class wg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?yA:bg:r?Cg:Tg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=ve(e);if(!i){let c;if(o&&(c=oA[n]))return c;if(n==="hasOwnProperty")return cA}const l=Reflect.get(e,n,nn(e)?e:s);if((es(n)?Ig.has(n):lA(n))||(i||Zt(e,"get",n),r))return l;if(nn(l)){const c=o&&eu(n)?l:l.value;return i&&nt(c)?pc(c):c}return nt(l)?i?pc(l):Ao(l):l}}class Eg extends wg{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const c=qs(r);if(!kn(s)&&!qs(s)&&(r=We(r),s=We(s)),!ve(e)&&nn(r)&&!nn(s))return c||(r.value=s),!0}const o=ve(e)&&eu(n)?Number(n)<e.length:ze(e,n),l=Reflect.set(e,n,s,nn(e)?e:i);return e===We(i)&&(o?Fs(s,r)&&cs(e,"set",n,s):cs(e,"add",n,s)),l}deleteProperty(e,n){const s=ze(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&cs(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!es(n)||!Ig.has(n))&&Zt(e,"has",n),s}ownKeys(e){return Zt(e,"iterate",ve(e)?"length":gi),Reflect.ownKeys(e)}}class uA extends wg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const hA=new Eg,dA=new uA,fA=new Eg(!0);const fc=t=>t,$o=t=>Reflect.getPrototypeOf(t);function pA(t,e,n){return function(...s){const i=this.__v_raw,r=We(i),o=Hi(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=i[t](...s),d=n?fc:e?fa:qt;return!e&&Zt(r,"iterate",c?dc:gi),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function Ho(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function gA(t,e){const n={get(i){const r=this.__v_raw,o=We(r),l=We(i);t||(Fs(i,l)&&Zt(o,"get",i),Zt(o,"get",l));const{has:c}=$o(o),u=e?fc:t?fa:qt;if(c.call(o,i))return u(r.get(i));if(c.call(o,l))return u(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&Zt(We(i),"iterate",gi),i.size},has(i){const r=this.__v_raw,o=We(r),l=We(i);return t||(Fs(i,l)&&Zt(o,"has",i),Zt(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,c=We(l),u=e?fc:t?fa:qt;return!t&&Zt(c,"iterate",gi),l.forEach((d,p)=>i.call(r,u(d),u(p),o))}};return sn(n,t?{add:Ho("add"),set:Ho("set"),delete:Ho("delete"),clear:Ho("clear")}:{add(i){!e&&!kn(i)&&!qs(i)&&(i=We(i));const r=We(this);return $o(r).has.call(r,i)||(r.add(i),cs(r,"add",i,i)),this},set(i,r){!e&&!kn(r)&&!qs(r)&&(r=We(r));const o=We(this),{has:l,get:c}=$o(o);let u=l.call(o,i);u||(i=We(i),u=l.call(o,i));const d=c.call(o,i);return o.set(i,r),u?Fs(r,d)&&cs(o,"set",i,r):cs(o,"add",i,r),this},delete(i){const r=We(this),{has:o,get:l}=$o(r);let c=o.call(r,i);c||(i=We(i),c=o.call(r,i)),l&&l.call(r,i);const u=r.delete(i);return c&&cs(r,"delete",i,void 0),u},clear(){const i=We(this),r=i.size!==0,o=i.clear();return r&&cs(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=pA(i,t,e)}),n}function ou(t,e){const n=gA(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ze(n,i)&&i in s?n:s,i,r)}const mA={get:ou(!1,!1)},vA={get:ou(!1,!0)},_A={get:ou(!0,!1)};const Tg=new WeakMap,Cg=new WeakMap,bg=new WeakMap,yA=new WeakMap;function AA(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function IA(t){return t.__v_skip||!Object.isExtensible(t)?0:AA(Qy(t))}function Ao(t){return qs(t)?t:au(t,!1,hA,mA,Tg)}function Sg(t){return au(t,!1,fA,vA,Cg)}function pc(t){return au(t,!0,dA,_A,bg)}function au(t,e,n,s,i){if(!nt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=IA(t);if(r===0)return t;const o=i.get(t);if(o)return o;const l=new Proxy(t,r===2?s:n);return i.set(t,l),l}function ji(t){return qs(t)?ji(t.__v_raw):!!(t&&t.__v_isReactive)}function qs(t){return!!(t&&t.__v_isReadonly)}function kn(t){return!!(t&&t.__v_isShallow)}function lu(t){return t?!!t.__v_raw:!1}function We(t){const e=t&&t.__v_raw;return e?We(e):t}function wA(t){return!ze(t,"__v_skip")&&Object.isExtensible(t)&&cg(t,"__v_skip",!0),t}const qt=t=>nt(t)?Ao(t):t,fa=t=>nt(t)?pc(t):t;function nn(t){return t?t.__v_isRef===!0:!1}function x(t){return Rg(t,!1)}function EA(t){return Rg(t,!0)}function Rg(t,e){return nn(t)?t:new TA(t,e)}class TA{constructor(e,n){this.dep=new ru,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:We(e),this._value=n?e:qt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||kn(e)||qs(e);e=s?e:We(e),Fs(e,n)&&(this._rawValue=e,this._value=s?e:qt(e),this.dep.trigger())}}function Wt(t){return nn(t)?t.value:t}const CA={get:(t,e,n)=>e==="__v_raw"?t:Wt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return nn(i)&&!nn(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Pg(t){return ji(t)?t:new Proxy(t,CA)}class bA{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ru(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=to-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ut!==this)return gg(this,!0),!0}get value(){const e=this.dep.track();return _g(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function SA(t,e,n=!1){let s,i;return Te(t)?s=t:(s=t.get,i=t.set),new bA(s,i,n)}const jo={},pa=new WeakMap;let ci;function RA(t,e=!1,n=ci){if(n){let s=pa.get(n);s||pa.set(n,s=[]),s.push(t)}}function PA(t,e,n=tt){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:c}=n,u=j=>i?j:kn(j)||i===!1||i===0?us(j,1):us(j);let d,p,m,v,T=!1,w=!1;if(nn(t)?(p=()=>t.value,T=kn(t)):ji(t)?(p=()=>u(t),T=!0):ve(t)?(w=!0,T=t.some(j=>ji(j)||kn(j)),p=()=>t.map(j=>{if(nn(j))return j.value;if(ji(j))return u(j);if(Te(j))return c?c(j,2):j()})):Te(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){_s();try{m()}finally{ys()}}const j=ci;ci=d;try{return c?c(t,3,[v]):t(v)}finally{ci=j}}:p=Wn,e&&i){const j=p,se=i===!0?1/0:i;p=()=>us(j(),se)}const y=sA(),k=()=>{d.stop(),y&&y.active&&Zc(y.effects,d)};if(r&&e){const j=e;e=(...se)=>{j(...se),k()}}let F=w?new Array(t.length).fill(jo):jo;const U=j=>{if(!(!(d.flags&1)||!d.dirty&&!j))if(e){const se=d.run();if(i||T||(w?se.some((Ie,S)=>Fs(Ie,F[S])):Fs(se,F))){m&&m();const Ie=ci;ci=d;try{const S=[se,F===jo?void 0:w&&F[0]===jo?[]:F,v];F=se,c?c(e,3,S):e(...S)}finally{ci=Ie}}}else d.run()};return l&&l(U),d=new fg(p),d.scheduler=o?()=>o(U,!1):U,v=j=>RA(j,!1,d),m=d.onStop=()=>{const j=pa.get(d);if(j){if(c)c(j,4);else for(const se of j)se();pa.delete(d)}},e?s?U(!0):F=d.run():o?o(U.bind(null,!0),!0):d.run(),k.pause=d.pause.bind(d),k.resume=d.resume.bind(d),k.stop=k,k}function us(t,e=1/0,n){if(e<=0||!nt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,nn(t))us(t.value,e,n);else if(ve(t))for(let s=0;s<t.length;s++)us(t[s],e,n);else if(lr(t)||Hi(t))t.forEach(s=>{us(s,e,n)});else if(lg(t)){for(const s in t)us(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&us(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Io(t,e,n,s){try{return s?t(...s):t()}catch(i){Ja(i,e,n)}}function ts(t,e,n,s){if(Te(t)){const i=Io(t,e,n,s);return i&&og(i)&&i.catch(r=>{Ja(r,e,n)}),i}if(ve(t)){const i=[];for(let r=0;r<t.length;r++)i.push(ts(t[r],e,n,s));return i}}function Ja(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||tt;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,u)===!1)return}l=l.parent}if(r){_s(),Io(r,null,10,[t,c,u]),ys();return}}kA(t,n,i,s,o)}function kA(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const un=[];let Gn=-1;const Gi=[];let xs=null,Oi=0;const kg=Promise.resolve();let ga=null;function cu(t){const e=ga||kg;return t?e.then(this?t.bind(this):t):e}function DA(t){let e=Gn+1,n=un.length;for(;e<n;){const s=e+n>>>1,i=un[s],r=so(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function uu(t){if(!(t.flags&1)){const e=so(t),n=un[un.length-1];!n||!(t.flags&2)&&e>=so(n)?un.push(t):un.splice(DA(e),0,t),t.flags|=1,Dg()}}function Dg(){ga||(ga=kg.then(Ng))}function xA(t){ve(t)?Gi.push(...t):xs&&t.id===-1?xs.splice(Oi+1,0,t):t.flags&1||(Gi.push(t),t.flags|=1),Dg()}function Nd(t,e,n=Gn+1){for(;n<un.length;n++){const s=un[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;un.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function xg(t){if(Gi.length){const e=[...new Set(Gi)].sort((n,s)=>so(n)-so(s));if(Gi.length=0,xs){xs.push(...e);return}for(xs=e,Oi=0;Oi<xs.length;Oi++){const n=xs[Oi];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}xs=null,Oi=0}}const so=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ng(t){try{for(Gn=0;Gn<un.length;Gn++){const e=un[Gn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Io(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Gn<un.length;Gn++){const e=un[Gn];e&&(e.flags&=-2)}Gn=-1,un.length=0,xg(),ga=null,(un.length||Gi.length)&&Ng()}}let wn=null,Mg=null;function ma(t){const e=wn;return wn=t,Mg=t&&t.type.__scopeId||null,e}function NA(t,e=wn,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&ya(-1);const r=ma(e);let o;try{o=t(...i)}finally{ma(r),s._d&&ya(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function fs(t,e){if(wn===null)return t;const n=tl(wn),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,c=tt]=e[i];r&&(Te(r)&&(r={mounted:r,updated:r}),r.deep&&us(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function ai(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(_s(),ts(c,n,8,[t.el,l,t,e]),ys())}}const MA=Symbol("_vte"),OA=t=>t.__isTeleport,VA=Symbol("_leaveCb");function hu(t,e){t.shapeFlag&6&&t.component?(t.transition=e,hu(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Og(t,e){return Te(t)?sn({name:t.name},e,{setup:t}):t}function Vg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const va=new WeakMap;function $r(t,e,n,s,i=!1){if(ve(t)){t.forEach((T,w)=>$r(T,e&&(ve(e)?e[w]:e),n,s,i));return}if(Hr(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&$r(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?tl(s.component):s.el,o=i?null:r,{i:l,r:c}=t,u=e&&e.r,d=l.refs===tt?l.refs={}:l.refs,p=l.setupState,m=We(p),v=p===tt?rg:T=>ze(m,T);if(u!=null&&u!==c){if(Md(e),St(u))d[u]=null,v(u)&&(p[u]=null);else if(nn(u)){u.value=null;const T=e;T.k&&(d[T.k]=null)}}if(Te(c))Io(c,l,12,[o,d]);else{const T=St(c),w=nn(c);if(T||w){const y=()=>{if(t.f){const k=T?v(c)?p[c]:d[c]:c.value;if(i)ve(k)&&Zc(k,r);else if(ve(k))k.includes(r)||k.push(r);else if(T)d[c]=[r],v(c)&&(p[c]=d[c]);else{const F=[r];c.value=F,t.k&&(d[t.k]=F)}}else T?(d[c]=o,v(c)&&(p[c]=o)):w&&(c.value=o,t.k&&(d[t.k]=o))};if(o){const k=()=>{y(),va.delete(t)};k.id=-1,va.set(t,k),In(k,n)}else Md(t),y()}}}function Md(t){const e=va.get(t);e&&(e.flags|=8,va.delete(t))}Ka().requestIdleCallback;Ka().cancelIdleCallback;const Hr=t=>!!t.type.__asyncLoader,Lg=t=>t.type.__isKeepAlive;function LA(t,e){Bg(t,"a",e)}function BA(t,e){Bg(t,"da",e)}function Bg(t,e,n=tn){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Xa(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Lg(i.parent.vnode)&&FA(s,e,n,i),i=i.parent}}function FA(t,e,n,s){const i=Xa(e,t,s,!0);cr(()=>{Zc(s[e],i)},n)}function Xa(t,e,n=tn,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{_s();const l=wo(n),c=ts(e,n,t,o);return l(),ys(),c});return s?i.unshift(r):i.push(r),r}}const Ts=t=>(e,n=tn)=>{(!oo||t==="sp")&&Xa(t,(...s)=>e(...s),n)},UA=Ts("bm"),Rt=Ts("m"),$A=Ts("bu"),HA=Ts("u"),jA=Ts("bum"),cr=Ts("um"),GA=Ts("sp"),qA=Ts("rtg"),QA=Ts("rtc");function WA(t,e=tn){Xa("ec",t,e)}const zA="components";function KA(t,e){return JA(zA,t,!0,e)||t}const YA=Symbol.for("v-ndc");function JA(t,e,n=!0,s=!1){const i=wn||tn;if(i){const r=i.type;{const l=U0(r,!1);if(l&&(l===e||l===Nn(e)||l===za(Nn(e))))return r}const o=Od(i[t]||r[t],e)||Od(i.appContext[t],e);return!o&&s?r:o}}function Od(t,e){return t&&(t[e]||t[Nn(e)]||t[za(Nn(e))])}function je(t,e,n,s){let i;const r=n,o=ve(t);if(o||St(t)){const l=o&&ji(t);let c=!1,u=!1;l&&(c=!kn(t),u=qs(t),t=Ya(t)),i=new Array(t.length);for(let d=0,p=t.length;d<p;d++)i[d]=e(c?u?fa(qt(t[d])):qt(t[d]):t[d],d,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=e(l+1,l,void 0,r)}else if(nt(t))if(t[Symbol.iterator])i=Array.from(t,(l,c)=>e(l,c,void 0,r));else{const l=Object.keys(t);i=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];i[c]=e(t[d],d,c,r)}}else i=[];return i}const gc=t=>t?rm(t)?tl(t):gc(t.parent):null,jr=sn(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>gc(t.parent),$root:t=>gc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ug(t),$forceUpdate:t=>t.f||(t.f=()=>{uu(t.update)}),$nextTick:t=>t.n||(t.n=cu.bind(t.proxy)),$watch:t=>_0.bind(t)}),Ul=(t,e)=>t!==tt&&!t.__isScriptSetup&&ze(t,e),XA={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const v=o[e];if(v!==void 0)switch(v){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Ul(s,e))return o[e]=1,s[e];if(i!==tt&&ze(i,e))return o[e]=2,i[e];if((u=t.propsOptions[0])&&ze(u,e))return o[e]=3,r[e];if(n!==tt&&ze(n,e))return o[e]=4,n[e];mc&&(o[e]=0)}}const d=jr[e];let p,m;if(d)return e==="$attrs"&&Zt(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==tt&&ze(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,ze(m,e))return m[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Ul(i,e)?(i[e]=n,!0):s!==tt&&ze(s,e)?(s[e]=n,!0):ze(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r,type:o}},l){let c,u;return!!(n[l]||t!==tt&&l[0]!=="$"&&ze(t,l)||Ul(e,l)||(c=r[0])&&ze(c,l)||ze(s,l)||ze(jr,l)||ze(i.config.globalProperties,l)||(u=o.__cssModules)&&u[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ze(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Vd(t){return ve(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let mc=!0;function ZA(t){const e=Ug(t),n=t.proxy,s=t.ctx;mc=!1,e.beforeCreate&&Ld(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:p,mounted:m,beforeUpdate:v,updated:T,activated:w,deactivated:y,beforeDestroy:k,beforeUnmount:F,destroyed:U,unmounted:j,render:se,renderTracked:Ie,renderTriggered:S,errorCaptured:I,serverPrefetch:C,expose:P,inheritAttrs:R,components:N,directives:E,filters:st}=e;if(u&&e0(u,s,null),o)for(const Ce in o){const be=o[Ce];Te(be)&&(s[Ce]=be.bind(n))}if(i){const Ce=i.call(n,n);nt(Ce)&&(t.data=Ao(Ce))}if(mc=!0,r)for(const Ce in r){const be=r[Ce],kt=Te(be)?be.bind(n,n):Te(be.get)?be.get.bind(n,n):Wn,Kt=!Te(be)&&Te(be.set)?be.set.bind(n):Wn,Lt=Xe({get:kt,set:Kt});Object.defineProperty(s,Ce,{enumerable:!0,configurable:!0,get:()=>Lt.value,set:rt=>Lt.value=rt})}if(l)for(const Ce in l)Fg(l[Ce],s,n,Ce);if(c){const Ce=Te(c)?c.call(n):c;Reflect.ownKeys(Ce).forEach(be=>{Xo(be,Ce[be])})}d&&Ld(d,t,"c");function it(Ce,be){ve(be)?be.forEach(kt=>Ce(kt.bind(n))):be&&Ce(be.bind(n))}if(it(UA,p),it(Rt,m),it($A,v),it(HA,T),it(LA,w),it(BA,y),it(WA,I),it(QA,Ie),it(qA,S),it(jA,F),it(cr,j),it(GA,C),ve(P))if(P.length){const Ce=t.exposed||(t.exposed={});P.forEach(be=>{Object.defineProperty(Ce,be,{get:()=>n[be],set:kt=>n[be]=kt,enumerable:!0})})}else t.exposed||(t.exposed={});se&&t.render===Wn&&(t.render=se),R!=null&&(t.inheritAttrs=R),N&&(t.components=N),E&&(t.directives=E),C&&Vg(t)}function e0(t,e,n=Wn){ve(t)&&(t=vc(t));for(const s in t){const i=t[s];let r;nt(i)?"default"in i?r=zn(i.from||s,i.default,!0):r=zn(i.from||s):r=zn(i),nn(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Ld(t,e,n){ts(ve(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Fg(t,e,n,s){let i=s.includes(".")?Zg(n,s):()=>n[s];if(St(t)){const r=e[t];Te(r)&&ms(i,r)}else if(Te(t))ms(i,t.bind(n));else if(nt(t))if(ve(t))t.forEach(r=>Fg(r,e,n,s));else{const r=Te(t.handler)?t.handler.bind(n):e[t.handler];Te(r)&&ms(i,r,t)}}function Ug(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(u=>_a(c,u,o,!0)),_a(c,e,o)),nt(e)&&r.set(e,c),c}function _a(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&_a(t,r,n,!0),i&&i.forEach(o=>_a(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=t0[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const t0={data:Bd,props:Fd,emits:Fd,methods:Nr,computed:Nr,beforeCreate:ln,created:ln,beforeMount:ln,mounted:ln,beforeUpdate:ln,updated:ln,beforeDestroy:ln,beforeUnmount:ln,destroyed:ln,unmounted:ln,activated:ln,deactivated:ln,errorCaptured:ln,serverPrefetch:ln,components:Nr,directives:Nr,watch:s0,provide:Bd,inject:n0};function Bd(t,e){return e?t?function(){return sn(Te(t)?t.call(this,this):t,Te(e)?e.call(this,this):e)}:e:t}function n0(t,e){return Nr(vc(t),vc(e))}function vc(t){if(ve(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ln(t,e){return t?[...new Set([].concat(t,e))]:e}function Nr(t,e){return t?sn(Object.create(null),t,e):e}function Fd(t,e){return t?ve(t)&&ve(e)?[...new Set([...t,...e])]:sn(Object.create(null),Vd(t),Vd(e??{})):e}function s0(t,e){if(!t)return e;if(!e)return t;const n=sn(Object.create(null),t);for(const s in e)n[s]=ln(t[s],e[s]);return n}function $g(){return{app:null,config:{isNativeTag:rg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let i0=0;function r0(t,e){return function(s,i=null){Te(s)||(s=sn({},s)),i!=null&&!nt(i)&&(i=null);const r=$g(),o=new WeakSet,l=[];let c=!1;const u=r.app={_uid:i0++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:H0,get config(){return r.config},set config(d){},use(d,...p){return o.has(d)||(d&&Te(d.install)?(o.add(d),d.install(u,...p)):Te(d)&&(o.add(d),d(u,...p))),u},mixin(d){return r.mixins.includes(d)||r.mixins.push(d),u},component(d,p){return p?(r.components[d]=p,u):r.components[d]},directive(d,p){return p?(r.directives[d]=p,u):r.directives[d]},mount(d,p,m){if(!c){const v=u._ceVNode||we(s,i);return v.appContext=r,m===!0?m="svg":m===!1&&(m=void 0),t(v,d,m),c=!0,u._container=d,d.__vue_app__=u,tl(v.component)}},onUnmount(d){l.push(d)},unmount(){c&&(ts(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,p){return r.provides[d]=p,u},runWithContext(d){const p=qi;qi=u;try{return d()}finally{qi=p}}};return u}}let qi=null;function Xo(t,e){if(tn){let n=tn.provides;const s=tn.parent&&tn.parent.provides;s===n&&(n=tn.provides=Object.create(s)),n[t]=e}}function zn(t,e,n=!1){const s=O0();if(s||qi){let i=qi?qi._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Te(e)?e.call(s&&s.proxy):e}}const Hg={},jg=()=>Object.create(Hg),Gg=t=>Object.getPrototypeOf(t)===Hg;function o0(t,e,n,s=!1){const i={},r=jg();t.propsDefaults=Object.create(null),qg(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Sg(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function a0(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=We(i),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(Za(t.emitsOptions,m))continue;const v=e[m];if(c)if(ze(r,m))v!==r[m]&&(r[m]=v,u=!0);else{const T=Nn(m);i[T]=_c(c,l,T,v,t,!1)}else v!==r[m]&&(r[m]=v,u=!0)}}}else{qg(t,e,i,r)&&(u=!0);let d;for(const p in l)(!e||!ze(e,p)&&((d=Ti(p))===p||!ze(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(i[p]=_c(c,l,p,void 0,t,!0)):delete i[p]);if(r!==l)for(const p in r)(!e||!ze(e,p))&&(delete r[p],u=!0)}u&&cs(t.attrs,"set","")}function qg(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Br(c))continue;const u=e[c];let d;i&&ze(i,d=Nn(c))?!r||!r.includes(d)?n[d]=u:(l||(l={}))[d]=u:Za(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(r){const c=We(n),u=l||tt;for(let d=0;d<r.length;d++){const p=r[d];n[p]=_c(i,c,p,u[p],t,!ze(u,p))}}return o}function _c(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=ze(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Te(c)){const{propsDefaults:u}=i;if(n in u)s=u[n];else{const d=wo(i);s=u[n]=c.call(null,e),d()}}else s=c;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===Ti(n))&&(s=!0))}return s}const l0=new WeakMap;function Qg(t,e,n=!1){const s=n?l0:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let c=!1;if(!Te(t)){const d=p=>{c=!0;const[m,v]=Qg(p,e,!0);sn(o,m),v&&l.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!r&&!c)return nt(t)&&s.set(t,$i),$i;if(ve(r))for(let d=0;d<r.length;d++){const p=Nn(r[d]);Ud(p)&&(o[p]=tt)}else if(r)for(const d in r){const p=Nn(d);if(Ud(p)){const m=r[d],v=o[p]=ve(m)||Te(m)?{type:m}:sn({},m),T=v.type;let w=!1,y=!0;if(ve(T))for(let k=0;k<T.length;++k){const F=T[k],U=Te(F)&&F.name;if(U==="Boolean"){w=!0;break}else U==="String"&&(y=!1)}else w=Te(T)&&T.name==="Boolean";v[0]=w,v[1]=y,(w||ze(v,"default"))&&l.push(p)}}const u=[o,l];return nt(t)&&s.set(t,u),u}function Ud(t){return t[0]!=="$"&&!Br(t)}const du=t=>t==="_"||t==="_ctx"||t==="$stable",fu=t=>ve(t)?t.map(Qn):[Qn(t)],c0=(t,e,n)=>{if(e._n)return e;const s=NA((...i)=>fu(e(...i)),n);return s._c=!1,s},Wg=(t,e,n)=>{const s=t._ctx;for(const i in t){if(du(i))continue;const r=t[i];if(Te(r))e[i]=c0(i,r,s);else if(r!=null){const o=fu(r);e[i]=()=>o}}},zg=(t,e)=>{const n=fu(e);t.slots.default=()=>n},Kg=(t,e,n)=>{for(const s in e)(n||!du(s))&&(t[s]=e[s])},u0=(t,e,n)=>{const s=t.slots=jg();if(t.vnode.shapeFlag&32){const i=e._;i?(Kg(s,e,n),n&&cg(s,"_",i,!0)):Wg(e,s)}else e&&zg(t,e)},h0=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=tt;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:Kg(i,e,n):(r=!e.$stable,Wg(e,i)),o=e}else e&&(zg(t,e),o={default:1});if(r)for(const l in i)!du(l)&&o[l]==null&&delete i[l]},In=b0;function d0(t){return f0(t)}function f0(t,e){const n=Ka();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:m,setScopeId:v=Wn,insertStaticContent:T}=t,w=(A,b,M,Q=null,K=null,W=null,ee=void 0,J=null,z=!!b.dynamicChildren)=>{if(A===b)return;A&&!kr(A,b)&&(Q=q(A),rt(A,K,W,!0),A=null),b.patchFlag===-2&&(z=!1,b.dynamicChildren=null);const{type:Z,ref:ge,shapeFlag:oe}=b;switch(Z){case el:y(A,b,M,Q);break;case Qs:k(A,b,M,Q);break;case Zo:A==null&&F(b,M,Q,ee);break;case Se:N(A,b,M,Q,K,W,ee,J,z);break;default:oe&1?se(A,b,M,Q,K,W,ee,J,z):oe&6?E(A,b,M,Q,K,W,ee,J,z):(oe&64||oe&128)&&Z.process(A,b,M,Q,K,W,ee,J,z,ue)}ge!=null&&K?$r(ge,A&&A.ref,W,b||A,!b):ge==null&&A&&A.ref!=null&&$r(A.ref,null,W,A,!0)},y=(A,b,M,Q)=>{if(A==null)s(b.el=l(b.children),M,Q);else{const K=b.el=A.el;b.children!==A.children&&u(K,b.children)}},k=(A,b,M,Q)=>{A==null?s(b.el=c(b.children||""),M,Q):b.el=A.el},F=(A,b,M,Q)=>{[A.el,A.anchor]=T(A.children,b,M,Q,A.el,A.anchor)},U=({el:A,anchor:b},M,Q)=>{let K;for(;A&&A!==b;)K=m(A),s(A,M,Q),A=K;s(b,M,Q)},j=({el:A,anchor:b})=>{let M;for(;A&&A!==b;)M=m(A),i(A),A=M;i(b)},se=(A,b,M,Q,K,W,ee,J,z)=>{b.type==="svg"?ee="svg":b.type==="math"&&(ee="mathml"),A==null?Ie(b,M,Q,K,W,ee,J,z):C(A,b,K,W,ee,J,z)},Ie=(A,b,M,Q,K,W,ee,J)=>{let z,Z;const{props:ge,shapeFlag:oe,transition:de,dirs:pe}=A;if(z=A.el=o(A.type,W,ge&&ge.is,ge),oe&8?d(z,A.children):oe&16&&I(A.children,z,null,Q,K,$l(A,W),ee,J),pe&&ai(A,null,Q,"created"),S(z,A,A.scopeId,ee,Q),ge){for(const Ge in ge)Ge!=="value"&&!Br(Ge)&&r(z,Ge,null,ge[Ge],W,Q);"value"in ge&&r(z,"value",null,ge.value,W),(Z=ge.onVnodeBeforeMount)&&jn(Z,Q,A)}pe&&ai(A,null,Q,"beforeMount");const ke=p0(K,de);ke&&de.beforeEnter(z),s(z,b,M),((Z=ge&&ge.onVnodeMounted)||ke||pe)&&In(()=>{Z&&jn(Z,Q,A),ke&&de.enter(z),pe&&ai(A,null,Q,"mounted")},K)},S=(A,b,M,Q,K)=>{if(M&&v(A,M),Q)for(let W=0;W<Q.length;W++)v(A,Q[W]);if(K){let W=K.subTree;if(b===W||tm(W.type)&&(W.ssContent===b||W.ssFallback===b)){const ee=K.vnode;S(A,ee,ee.scopeId,ee.slotScopeIds,K.parent)}}},I=(A,b,M,Q,K,W,ee,J,z=0)=>{for(let Z=z;Z<A.length;Z++){const ge=A[Z]=J?Ns(A[Z]):Qn(A[Z]);w(null,ge,b,M,Q,K,W,ee,J)}},C=(A,b,M,Q,K,W,ee)=>{const J=b.el=A.el;let{patchFlag:z,dynamicChildren:Z,dirs:ge}=b;z|=A.patchFlag&16;const oe=A.props||tt,de=b.props||tt;let pe;if(M&&li(M,!1),(pe=de.onVnodeBeforeUpdate)&&jn(pe,M,b,A),ge&&ai(b,A,M,"beforeUpdate"),M&&li(M,!0),(oe.innerHTML&&de.innerHTML==null||oe.textContent&&de.textContent==null)&&d(J,""),Z?P(A.dynamicChildren,Z,J,M,Q,$l(b,K),W):ee||be(A,b,J,null,M,Q,$l(b,K),W,!1),z>0){if(z&16)R(J,oe,de,M,K);else if(z&2&&oe.class!==de.class&&r(J,"class",null,de.class,K),z&4&&r(J,"style",oe.style,de.style,K),z&8){const ke=b.dynamicProps;for(let Ge=0;Ge<ke.length;Ge++){const Ne=ke[Ge],$e=oe[Ne],He=de[Ne];(He!==$e||Ne==="value")&&r(J,Ne,$e,He,K,M)}}z&1&&A.children!==b.children&&d(J,b.children)}else!ee&&Z==null&&R(J,oe,de,M,K);((pe=de.onVnodeUpdated)||ge)&&In(()=>{pe&&jn(pe,M,b,A),ge&&ai(b,A,M,"updated")},Q)},P=(A,b,M,Q,K,W,ee)=>{for(let J=0;J<b.length;J++){const z=A[J],Z=b[J],ge=z.el&&(z.type===Se||!kr(z,Z)||z.shapeFlag&198)?p(z.el):M;w(z,Z,ge,null,Q,K,W,ee,!0)}},R=(A,b,M,Q,K)=>{if(b!==M){if(b!==tt)for(const W in b)!Br(W)&&!(W in M)&&r(A,W,b[W],null,K,Q);for(const W in M){if(Br(W))continue;const ee=M[W],J=b[W];ee!==J&&W!=="value"&&r(A,W,J,ee,K,Q)}"value"in M&&r(A,"value",b.value,M.value,K)}},N=(A,b,M,Q,K,W,ee,J,z)=>{const Z=b.el=A?A.el:l(""),ge=b.anchor=A?A.anchor:l("");let{patchFlag:oe,dynamicChildren:de,slotScopeIds:pe}=b;pe&&(J=J?J.concat(pe):pe),A==null?(s(Z,M,Q),s(ge,M,Q),I(b.children||[],M,ge,K,W,ee,J,z)):oe>0&&oe&64&&de&&A.dynamicChildren?(P(A.dynamicChildren,de,M,K,W,ee,J),(b.key!=null||K&&b===K.subTree)&&Yg(A,b,!0)):be(A,b,M,ge,K,W,ee,J,z)},E=(A,b,M,Q,K,W,ee,J,z)=>{b.slotScopeIds=J,A==null?b.shapeFlag&512?K.ctx.activate(b,M,Q,ee,z):st(b,M,Q,K,W,ee,z):_t(A,b,z)},st=(A,b,M,Q,K,W,ee)=>{const J=A.component=M0(A,Q,K);if(Lg(A)&&(J.ctx.renderer=ue),V0(J,!1,ee),J.asyncDep){if(K&&K.registerDep(J,it,ee),!A.el){const z=J.subTree=we(Qs);k(null,z,b,M),A.placeholder=z.el}}else it(J,A,b,M,K,W,ee)},_t=(A,b,M)=>{const Q=b.component=A.component;if(T0(A,b,M))if(Q.asyncDep&&!Q.asyncResolved){Ce(Q,b,M);return}else Q.next=b,Q.update();else b.el=A.el,Q.vnode=b},it=(A,b,M,Q,K,W,ee)=>{const J=()=>{if(A.isMounted){let{next:oe,bu:de,u:pe,parent:ke,vnode:Ge}=A;{const Ye=Jg(A);if(Ye){oe&&(oe.el=Ge.el,Ce(A,oe,ee)),Ye.asyncDep.then(()=>{A.isUnmounted||J()});return}}let Ne=oe,$e;li(A,!1),oe?(oe.el=Ge.el,Ce(A,oe,ee)):oe=Ge,de&&Jo(de),($e=oe.props&&oe.props.onVnodeBeforeUpdate)&&jn($e,ke,oe,Ge),li(A,!0);const He=Hd(A),qe=A.subTree;A.subTree=He,w(qe,He,p(qe.el),q(qe),A,K,W),oe.el=He.el,Ne===null&&C0(A,He.el),pe&&In(pe,K),($e=oe.props&&oe.props.onVnodeUpdated)&&In(()=>jn($e,ke,oe,Ge),K)}else{let oe;const{el:de,props:pe}=b,{bm:ke,m:Ge,parent:Ne,root:$e,type:He}=A,qe=Hr(b);li(A,!1),ke&&Jo(ke),!qe&&(oe=pe&&pe.onVnodeBeforeMount)&&jn(oe,Ne,b),li(A,!0);{$e.ce&&$e.ce._def.shadowRoot!==!1&&$e.ce._injectChildStyle(He);const Ye=A.subTree=Hd(A);w(null,Ye,M,Q,A,K,W),b.el=Ye.el}if(Ge&&In(Ge,K),!qe&&(oe=pe&&pe.onVnodeMounted)){const Ye=b;In(()=>jn(oe,Ne,Ye),K)}(b.shapeFlag&256||Ne&&Hr(Ne.vnode)&&Ne.vnode.shapeFlag&256)&&A.a&&In(A.a,K),A.isMounted=!0,b=M=Q=null}};A.scope.on();const z=A.effect=new fg(J);A.scope.off();const Z=A.update=z.run.bind(z),ge=A.job=z.runIfDirty.bind(z);ge.i=A,ge.id=A.uid,z.scheduler=()=>uu(ge),li(A,!0),Z()},Ce=(A,b,M)=>{b.component=A;const Q=A.vnode.props;A.vnode=b,A.next=null,a0(A,b.props,Q,M),h0(A,b.children,M),_s(),Nd(A),ys()},be=(A,b,M,Q,K,W,ee,J,z=!1)=>{const Z=A&&A.children,ge=A?A.shapeFlag:0,oe=b.children,{patchFlag:de,shapeFlag:pe}=b;if(de>0){if(de&128){Kt(Z,oe,M,Q,K,W,ee,J,z);return}else if(de&256){kt(Z,oe,M,Q,K,W,ee,J,z);return}}pe&8?(ge&16&&ot(Z,K,W),oe!==Z&&d(M,oe)):ge&16?pe&16?Kt(Z,oe,M,Q,K,W,ee,J,z):ot(Z,K,W,!0):(ge&8&&d(M,""),pe&16&&I(oe,M,Q,K,W,ee,J,z))},kt=(A,b,M,Q,K,W,ee,J,z)=>{A=A||$i,b=b||$i;const Z=A.length,ge=b.length,oe=Math.min(Z,ge);let de;for(de=0;de<oe;de++){const pe=b[de]=z?Ns(b[de]):Qn(b[de]);w(A[de],pe,M,null,K,W,ee,J,z)}Z>ge?ot(A,K,W,!0,!1,oe):I(b,M,Q,K,W,ee,J,z,oe)},Kt=(A,b,M,Q,K,W,ee,J,z)=>{let Z=0;const ge=b.length;let oe=A.length-1,de=ge-1;for(;Z<=oe&&Z<=de;){const pe=A[Z],ke=b[Z]=z?Ns(b[Z]):Qn(b[Z]);if(kr(pe,ke))w(pe,ke,M,null,K,W,ee,J,z);else break;Z++}for(;Z<=oe&&Z<=de;){const pe=A[oe],ke=b[de]=z?Ns(b[de]):Qn(b[de]);if(kr(pe,ke))w(pe,ke,M,null,K,W,ee,J,z);else break;oe--,de--}if(Z>oe){if(Z<=de){const pe=de+1,ke=pe<ge?b[pe].el:Q;for(;Z<=de;)w(null,b[Z]=z?Ns(b[Z]):Qn(b[Z]),M,ke,K,W,ee,J,z),Z++}}else if(Z>de)for(;Z<=oe;)rt(A[Z],K,W,!0),Z++;else{const pe=Z,ke=Z,Ge=new Map;for(Z=ke;Z<=de;Z++){const Fe=b[Z]=z?Ns(b[Z]):Qn(b[Z]);Fe.key!=null&&Ge.set(Fe.key,Z)}let Ne,$e=0;const He=de-ke+1;let qe=!1,Ye=0;const wt=new Array(He);for(Z=0;Z<He;Z++)wt[Z]=0;for(Z=pe;Z<=oe;Z++){const Fe=A[Z];if($e>=He){rt(Fe,K,W,!0);continue}let yt;if(Fe.key!=null)yt=Ge.get(Fe.key);else for(Ne=ke;Ne<=de;Ne++)if(wt[Ne-ke]===0&&kr(Fe,b[Ne])){yt=Ne;break}yt===void 0?rt(Fe,K,W,!0):(wt[yt-ke]=Z+1,yt>=Ye?Ye=yt:qe=!0,w(Fe,b[yt],M,null,K,W,ee,J,z),$e++)}const Et=qe?g0(wt):$i;for(Ne=Et.length-1,Z=He-1;Z>=0;Z--){const Fe=ke+Z,yt=b[Fe],ti=b[Fe+1],G=Fe+1<ge?ti.el||ti.placeholder:Q;wt[Z]===0?w(null,yt,M,G,K,W,ee,J,z):qe&&(Ne<0||Z!==Et[Ne]?Lt(yt,M,G,2):Ne--)}}},Lt=(A,b,M,Q,K=null)=>{const{el:W,type:ee,transition:J,children:z,shapeFlag:Z}=A;if(Z&6){Lt(A.component.subTree,b,M,Q);return}if(Z&128){A.suspense.move(b,M,Q);return}if(Z&64){ee.move(A,b,M,ue);return}if(ee===Se){s(W,b,M);for(let oe=0;oe<z.length;oe++)Lt(z[oe],b,M,Q);s(A.anchor,b,M);return}if(ee===Zo){U(A,b,M);return}if(Q!==2&&Z&1&&J)if(Q===0)J.beforeEnter(W),s(W,b,M),In(()=>J.enter(W),K);else{const{leave:oe,delayLeave:de,afterLeave:pe}=J,ke=()=>{A.ctx.isUnmounted?i(W):s(W,b,M)},Ge=()=>{W._isLeaving&&W[VA](!0),oe(W,()=>{ke(),pe&&pe()})};de?de(W,ke,Ge):Ge()}else s(W,b,M)},rt=(A,b,M,Q=!1,K=!1)=>{const{type:W,props:ee,ref:J,children:z,dynamicChildren:Z,shapeFlag:ge,patchFlag:oe,dirs:de,cacheIndex:pe}=A;if(oe===-2&&(K=!1),J!=null&&(_s(),$r(J,null,M,A,!0),ys()),pe!=null&&(b.renderCache[pe]=void 0),ge&256){b.ctx.deactivate(A);return}const ke=ge&1&&de,Ge=!Hr(A);let Ne;if(Ge&&(Ne=ee&&ee.onVnodeBeforeUnmount)&&jn(Ne,b,A),ge&6)Yt(A.component,M,Q);else{if(ge&128){A.suspense.unmount(M,Q);return}ke&&ai(A,null,b,"beforeUnmount"),ge&64?A.type.remove(A,b,M,ue,Q):Z&&!Z.hasOnce&&(W!==Se||oe>0&&oe&64)?ot(Z,b,M,!1,!0):(W===Se&&oe&384||!K&&ge&16)&&ot(z,b,M),Q&&Cn(A)}(Ge&&(Ne=ee&&ee.onVnodeUnmounted)||ke)&&In(()=>{Ne&&jn(Ne,b,A),ke&&ai(A,null,b,"unmounted")},M)},Cn=A=>{const{type:b,el:M,anchor:Q,transition:K}=A;if(b===Se){gn(M,Q);return}if(b===Zo){j(A);return}const W=()=>{i(M),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(A.shapeFlag&1&&K&&!K.persisted){const{leave:ee,delayLeave:J}=K,z=()=>ee(M,W);J?J(A.el,W,z):z()}else W()},gn=(A,b)=>{let M;for(;A!==b;)M=m(A),i(A),A=M;i(b)},Yt=(A,b,M)=>{const{bum:Q,scope:K,job:W,subTree:ee,um:J,m:z,a:Z}=A;$d(z),$d(Z),Q&&Jo(Q),K.stop(),W&&(W.flags|=8,rt(ee,A,b,M)),J&&In(J,b),In(()=>{A.isUnmounted=!0},b)},ot=(A,b,M,Q=!1,K=!1,W=0)=>{for(let ee=W;ee<A.length;ee++)rt(A[ee],b,M,Q,K)},q=A=>{if(A.shapeFlag&6)return q(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const b=m(A.anchor||A.el),M=b&&b[MA];return M?m(M):b};let ae=!1;const te=(A,b,M)=>{A==null?b._vnode&&rt(b._vnode,null,null,!0):w(b._vnode||null,A,b,null,null,null,M),b._vnode=A,ae||(ae=!0,Nd(),xg(),ae=!1)},ue={p:w,um:rt,m:Lt,r:Cn,mt:st,mc:I,pc:be,pbc:P,n:q,o:t};return{render:te,hydrate:void 0,createApp:r0(te)}}function $l({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function li({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function p0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Yg(t,e,n=!1){const s=t.children,i=e.children;if(ve(s)&&ve(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=Ns(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&Yg(o,l)),l.type===el&&l.patchFlag!==-1&&(l.el=o.el),l.type===Qs&&!l.el&&(l.el=o.el)}}function g0(t){const e=t.slice(),n=[0];let s,i,r,o,l;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(i=n[n.length-1],t[i]<u){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<u?r=l+1:o=l;u<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Jg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Jg(e)}function $d(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const m0=Symbol.for("v-scx"),v0=()=>zn(m0);function ms(t,e,n){return Xg(t,e,n)}function Xg(t,e,n=tt){const{immediate:s,deep:i,flush:r,once:o}=n,l=sn({},n),c=e&&s||!e&&r!=="post";let u;if(oo){if(r==="sync"){const v=v0();u=v.__watcherHandles||(v.__watcherHandles=[])}else if(!c){const v=()=>{};return v.stop=Wn,v.resume=Wn,v.pause=Wn,v}}const d=tn;l.call=(v,T,w)=>ts(v,d,T,w);let p=!1;r==="post"?l.scheduler=v=>{In(v,d&&d.suspense)}:r!=="sync"&&(p=!0,l.scheduler=(v,T)=>{T?v():uu(v)}),l.augmentJob=v=>{e&&(v.flags|=4),p&&(v.flags|=2,d&&(v.id=d.uid,v.i=d))};const m=PA(t,e,l);return oo&&(u?u.push(m):c&&m()),m}function _0(t,e,n){const s=this.proxy,i=St(t)?t.includes(".")?Zg(s,t):()=>s[t]:t.bind(s,s);let r;Te(e)?r=e:(r=e.handler,n=e);const o=wo(this),l=Xg(i,r.bind(s),n);return o(),l}function Zg(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const y0=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Nn(e)}Modifiers`]||t[`${Ti(e)}Modifiers`];function A0(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||tt;let i=n;const r=e.startsWith("update:"),o=r&&y0(s,e.slice(7));o&&(o.trim&&(i=n.map(d=>St(d)?d.trim():d)),o.number&&(i=n.map(da)));let l,c=s[l=Ol(e)]||s[l=Ol(Nn(e))];!c&&r&&(c=s[l=Ol(Ti(e))]),c&&ts(c,t,6,i);const u=s[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,ts(u,t,6,i)}}const I0=new WeakMap;function em(t,e,n=!1){const s=n?I0:e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!Te(t)){const c=u=>{const d=em(u,e,!0);d&&(l=!0,sn(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(nt(t)&&s.set(t,null),null):(ve(r)?r.forEach(c=>o[c]=null):sn(o,r),nt(t)&&s.set(t,o),o)}function Za(t,e){return!t||!Qa(e)?!1:(e=e.slice(2).replace(/Once$/,""),ze(t,e[0].toLowerCase()+e.slice(1))||ze(t,Ti(e))||ze(t,e))}function Hd(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:c,render:u,renderCache:d,props:p,data:m,setupState:v,ctx:T,inheritAttrs:w}=t,y=ma(t);let k,F;try{if(n.shapeFlag&4){const j=i||s,se=j;k=Qn(u.call(se,j,d,p,v,m,T)),F=l}else{const j=e;k=Qn(j.length>1?j(p,{attrs:l,slots:o,emit:c}):j(p,null)),F=e.props?l:w0(l)}}catch(j){Gr.length=0,Ja(j,t,1),k=we(Qs)}let U=k;if(F&&w!==!1){const j=Object.keys(F),{shapeFlag:se}=U;j.length&&se&7&&(r&&j.some(Xc)&&(F=E0(F,r)),U=Ji(U,F,!1,!0))}return n.dirs&&(U=Ji(U,null,!1,!0),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&hu(U,n.transition),k=U,ma(y),k}const w0=t=>{let e;for(const n in t)(n==="class"||n==="style"||Qa(n))&&((e||(e={}))[n]=t[n]);return e},E0=(t,e)=>{const n={};for(const s in t)(!Xc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function T0(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:c}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?jd(s,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(o[m]!==s[m]&&!Za(u,m))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?jd(s,o,u):!0:!!o;return!1}function jd(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Za(n,r))return!0}return!1}function C0({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const tm=t=>t.__isSuspense;function b0(t,e){e&&e.pendingBranch?ve(t)?e.effects.push(...t):e.effects.push(t):xA(t)}const Se=Symbol.for("v-fgt"),el=Symbol.for("v-txt"),Qs=Symbol.for("v-cmt"),Zo=Symbol.for("v-stc"),Gr=[];let En=null;function O(t=!1){Gr.push(En=t?null:[])}function S0(){Gr.pop(),En=Gr[Gr.length-1]||null}let io=1;function ya(t,e=!1){io+=t,t<0&&En&&e&&(En.hasOnce=!0)}function nm(t){return t.dynamicChildren=io>0?En||$i:null,S0(),io>0&&En&&En.push(t),t}function V(t,e,n,s,i,r){return nm(h(t,e,n,s,i,r,!0))}function sm(t,e,n,s,i){return nm(we(t,e,n,s,i,!0))}function Aa(t){return t?t.__v_isVNode===!0:!1}function kr(t,e){return t.type===e.type&&t.key===e.key}const im=({key:t})=>t??null,ea=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?St(t)||nn(t)||Te(t)?{i:wn,r:t,k:e,f:!!n}:t:null);function h(t,e=null,n=null,s=0,i=null,r=t===Se?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&im(e),ref:e&&ea(e),scopeId:Mg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:wn};return l?(pu(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=St(n)?8:16),io>0&&!o&&En&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&En.push(c),c}const we=R0;function R0(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===YA)&&(t=Qs),Aa(t)){const l=Ji(t,e,!0);return n&&pu(l,n),io>0&&!r&&En&&(l.shapeFlag&6?En[En.indexOf(t)]=l:En.push(l)),l.patchFlag=-2,l}if($0(t)&&(t=t.__vccOpts),e){e=P0(e);let{class:l,style:c}=e;l&&!St(l)&&(e.class=Re(l)),nt(c)&&(lu(c)&&!ve(c)&&(c=sn({},c)),e.style=Ct(c))}const o=St(t)?1:tm(t)?128:OA(t)?64:nt(t)?4:Te(t)?2:0;return h(t,e,n,s,i,o,r,!0)}function P0(t){return t?lu(t)||Gg(t)?sn({},t):t:null}function Ji(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:c}=t,u=e?D0(i||{},e):i,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&im(u),ref:e&&e.ref?n&&r?ve(r)?r.concat(ea(e)):[r,ea(e)]:ea(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Se?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ji(t.ssContent),ssFallback:t.ssFallback&&Ji(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&hu(d,c.clone(d)),d}function ro(t=" ",e=0){return we(el,null,t,e)}function k0(t,e){const n=we(Zo,null,t);return n.staticCount=e,n}function he(t="",e=!1){return e?(O(),sm(Qs,null,t)):we(Qs,null,t)}function Qn(t){return t==null||typeof t=="boolean"?we(Qs):ve(t)?we(Se,null,t.slice()):Aa(t)?Ns(t):we(el,null,String(t))}function Ns(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ji(t)}function pu(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(ve(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),pu(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Gg(e)?e._ctx=wn:i===3&&wn&&(wn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Te(e)?(e={default:e,_ctx:wn},n=32):(e=String(e),s&64?(n=16,e=[ro(e)]):n=8);t.children=e,t.shapeFlag|=n}function D0(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Re([e.class,s.class]));else if(i==="style")e.style=Ct([e.style,s.style]);else if(Qa(i)){const r=e[i],o=s[i];o&&r!==o&&!(ve(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function jn(t,e,n,s=null){ts(t,e,7,[n,s])}const x0=$g();let N0=0;function M0(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||x0,r={uid:N0++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new nA(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Qg(s,i),emitsOptions:em(s,i),emit:null,emitted:null,propsDefaults:tt,inheritAttrs:s.inheritAttrs,ctx:tt,data:tt,props:tt,attrs:tt,slots:tt,refs:tt,setupState:tt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=A0.bind(null,r),t.ce&&t.ce(r),r}let tn=null;const O0=()=>tn||wn;let Ia,yc;{const t=Ka(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Ia=e("__VUE_INSTANCE_SETTERS__",n=>tn=n),yc=e("__VUE_SSR_SETTERS__",n=>oo=n)}const wo=t=>{const e=tn;return Ia(t),t.scope.on(),()=>{t.scope.off(),Ia(e)}},Gd=()=>{tn&&tn.scope.off(),Ia(null)};function rm(t){return t.vnode.shapeFlag&4}let oo=!1;function V0(t,e=!1,n=!1){e&&yc(e);const{props:s,children:i}=t.vnode,r=rm(t);o0(t,s,r,e),u0(t,i,n||e);const o=r?L0(t,e):void 0;return e&&yc(!1),o}function L0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,XA);const{setup:s}=n;if(s){_s();const i=t.setupContext=s.length>1?F0(t):null,r=wo(t),o=Io(s,t,0,[t.props,i]),l=og(o);if(ys(),r(),(l||t.sp)&&!Hr(t)&&Vg(t),l){if(o.then(Gd,Gd),e)return o.then(c=>{qd(t,c)}).catch(c=>{Ja(c,t,0)});t.asyncDep=o}else qd(t,o)}else om(t)}function qd(t,e,n){Te(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:nt(e)&&(t.setupState=Pg(e)),om(t)}function om(t,e,n){const s=t.type;t.render||(t.render=s.render||Wn);{const i=wo(t);_s();try{ZA(t)}finally{ys(),i()}}}const B0={get(t,e){return Zt(t,"get",""),t[e]}};function F0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,B0),slots:t.slots,emit:t.emit,expose:e}}function tl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Pg(wA(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in jr)return jr[n](t)},has(e,n){return n in e||n in jr}})):t.proxy}function U0(t,e=!0){return Te(t)?t.displayName||t.name:t.name||e&&t.__name}function $0(t){return Te(t)&&"__vccOpts"in t}const Xe=(t,e)=>SA(t,e,oo);function am(t,e,n){try{ya(-1);const s=arguments.length;return s===2?nt(e)&&!ve(e)?Aa(e)?we(t,null,[e]):we(t,e):we(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Aa(n)&&(n=[n]),we(t,e,n))}finally{ya(1)}}const H0="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ac;const Qd=typeof window<"u"&&window.trustedTypes;if(Qd)try{Ac=Qd.createPolicy("vue",{createHTML:t=>t})}catch{}const lm=Ac?t=>Ac.createHTML(t):t=>t,j0="http://www.w3.org/2000/svg",G0="http://www.w3.org/1998/Math/MathML",ls=typeof document<"u"?document:null,Wd=ls&&ls.createElement("template"),q0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?ls.createElementNS(j0,t):e==="mathml"?ls.createElementNS(G0,t):n?ls.createElement(t,{is:n}):ls.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>ls.createTextNode(t),createComment:t=>ls.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ls.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Wd.innerHTML=lm(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=Wd.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Q0=Symbol("_vtc");function W0(t,e,n){const s=t[Q0];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const wa=Symbol("_vod"),cm=Symbol("_vsh"),um={name:"show",beforeMount(t,{value:e},{transition:n}){t[wa]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Dr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Dr(t,!0),s.enter(t)):s.leave(t,()=>{Dr(t,!1)}):Dr(t,e))},beforeUnmount(t,{value:e}){Dr(t,e)}};function Dr(t,e){t.style.display=e?t[wa]:"none",t[cm]=!e}const z0=Symbol(""),K0=/(?:^|;)\s*display\s*:/;function Y0(t,e,n){const s=t.style,i=St(n);let r=!1;if(n&&!i){if(e)if(St(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&ta(s,l,"")}else for(const o in e)n[o]==null&&ta(s,o,"");for(const o in n)o==="display"&&(r=!0),ta(s,o,n[o])}else if(i){if(e!==n){const o=s[z0];o&&(n+=";"+o),s.cssText=n,r=K0.test(n)}}else e&&t.removeAttribute("style");wa in t&&(t[wa]=r?s.display:"",t[cm]&&(s.display="none"))}const zd=/\s*!important$/;function ta(t,e,n){if(ve(n))n.forEach(s=>ta(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=J0(t,e);zd.test(n)?t.setProperty(Ti(s),n.replace(zd,""),"important"):t[s]=n}}const Kd=["Webkit","Moz","ms"],Hl={};function J0(t,e){const n=Hl[e];if(n)return n;let s=Nn(e);if(s!=="filter"&&s in t)return Hl[e]=s;s=za(s);for(let i=0;i<Kd.length;i++){const r=Kd[i]+s;if(r in t)return Hl[e]=r}return e}const Yd="http://www.w3.org/1999/xlink";function Jd(t,e,n,s,i,r=eA(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Yd,e.slice(6,e.length)):t.setAttributeNS(Yd,e,n):n==null||r&&!ug(n)?t.removeAttribute(e):t.setAttribute(e,r?"":es(n)?String(n):n)}function Xd(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?lm(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=ug(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function hs(t,e,n,s){t.addEventListener(e,n,s)}function X0(t,e,n,s){t.removeEventListener(e,n,s)}const Zd=Symbol("_vei");function Z0(t,e,n,s,i=null){const r=t[Zd]||(t[Zd]={}),o=r[e];if(s&&o)o.value=s;else{const[l,c]=eI(e);if(s){const u=r[e]=sI(s,i);hs(t,l,u,c)}else o&&(X0(t,l,o,c),r[e]=void 0)}}const ef=/(?:Once|Passive|Capture)$/;function eI(t){let e;if(ef.test(t)){e={};let s;for(;s=t.match(ef);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ti(t.slice(2)),e]}let jl=0;const tI=Promise.resolve(),nI=()=>jl||(tI.then(()=>jl=0),jl=Date.now());function sI(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ts(iI(s,n.value),e,5,[s])};return n.value=t,n.attached=nI(),n}function iI(t,e){if(ve(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const tf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,rI=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?W0(t,s,o):e==="style"?Y0(t,n,s):Qa(e)?Xc(e)||Z0(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):oI(t,e,s,o))?(Xd(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Jd(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!St(s))?Xd(t,Nn(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Jd(t,e,s,o))};function oI(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&tf(e)&&Te(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return tf(e)&&St(n)?!1:e in t}const Ws=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ve(e)?n=>Jo(e,n):e};function aI(t){t.target.composing=!0}function nf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Dn=Symbol("_assign"),mi={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[Dn]=Ws(i);const r=s||i.props&&i.props.type==="number";hs(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=da(l)),t[Dn](l)}),n&&hs(t,"change",()=>{t.value=t.value.trim()}),e||(hs(t,"compositionstart",aI),hs(t,"compositionend",nf),hs(t,"change",nf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[Dn]=Ws(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?da(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===c)||(t.value=c))}},lI={deep:!0,created(t,e,n){t[Dn]=Ws(n),hs(t,"change",()=>{const s=t._modelValue,i=Xi(t),r=t.checked,o=t[Dn];if(ve(s)){const l=tu(s,i),c=l!==-1;if(r&&!c)o(s.concat(i));else if(!r&&c){const u=[...s];u.splice(l,1),o(u)}}else if(lr(s)){const l=new Set(s);r?l.add(i):l.delete(i),o(l)}else o(hm(t,r))})},mounted:sf,beforeUpdate(t,e,n){t[Dn]=Ws(n),sf(t,e,n)}};function sf(t,{value:e,oldValue:n},s){t._modelValue=e;let i;if(ve(e))i=tu(e,s.props.value)>-1;else if(lr(e))i=e.has(s.props.value);else{if(e===n)return;i=_i(e,hm(t,!0))}t.checked!==i&&(t.checked=i)}const cI={created(t,{value:e},n){t.checked=_i(e,n.props.value),t[Dn]=Ws(n),hs(t,"change",()=>{t[Dn](Xi(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t[Dn]=Ws(s),e!==n&&(t.checked=_i(e,s.props.value))}},uI={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=lr(e);hs(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?da(Xi(o)):Xi(o));t[Dn](t.multiple?i?new Set(r):r:r[0]),t._assigning=!0,cu(()=>{t._assigning=!1})}),t[Dn]=Ws(s)},mounted(t,{value:e}){rf(t,e)},beforeUpdate(t,e,n){t[Dn]=Ws(n)},updated(t,{value:e}){t._assigning||rf(t,e)}};function rf(t,e){const n=t.multiple,s=ve(e);if(!(n&&!s&&!lr(e))){for(let i=0,r=t.options.length;i<r;i++){const o=t.options[i],l=Xi(o);if(n)if(s){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=tu(e,l)>-1}else o.selected=e.has(l);else if(_i(Xi(o),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Xi(t){return"_value"in t?t._value:t.value}function hm(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const dm={created(t,e,n){Go(t,e,n,null,"created")},mounted(t,e,n){Go(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){Go(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){Go(t,e,n,s,"updated")}};function hI(t,e){switch(t){case"SELECT":return uI;case"TEXTAREA":return mi;default:switch(e){case"checkbox":return lI;case"radio":return cI;default:return mi}}}function Go(t,e,n,s,i){const o=hI(t.tagName,n.props&&n.props.type)[i];o&&o(t,e,n,s)}const dI=["ctrl","shift","alt","meta"],fI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>dI.some(n=>t[`${n}Key`]&&!e.includes(n))},qr=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=((i,...r)=>{for(let o=0;o<e.length;o++){const l=fI[e[o]];if(l&&l(i,e))return}return t(i,...r)}))},pI=sn({patchProp:rI},q0);let of;function gI(){return of||(of=d0(pI))}const mI=((...t)=>{const e=gI().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=_I(s);if(!i)return;const r=e._component;!Te(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,vI(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e});function vI(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function _I(t){return St(t)?document.querySelector(t):t}/*!
 * vue-router v4.6.0
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Vi=typeof document<"u";function fm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function yI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&fm(t.default)}const Qe=Object.assign;function Gl(t,e){const n={};for(const s in e){const i=e[s];n[s]=Bn(i)?i.map(t):t(i)}return n}const Qr=()=>{},Bn=Array.isArray;function af(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}const pm=/#/g,AI=/&/g,II=/\//g,wI=/=/g,EI=/\?/g,gm=/\+/g,TI=/%5B/g,CI=/%5D/g,mm=/%5E/g,bI=/%60/g,vm=/%7B/g,SI=/%7C/g,_m=/%7D/g,RI=/%20/g;function gu(t){return t==null?"":encodeURI(""+t).replace(SI,"|").replace(TI,"[").replace(CI,"]")}function PI(t){return gu(t).replace(vm,"{").replace(_m,"}").replace(mm,"^")}function Ic(t){return gu(t).replace(gm,"%2B").replace(RI,"+").replace(pm,"%23").replace(AI,"%26").replace(bI,"`").replace(vm,"{").replace(_m,"}").replace(mm,"^")}function kI(t){return Ic(t).replace(wI,"%3D")}function DI(t){return gu(t).replace(pm,"%23").replace(EI,"%3F")}function xI(t){return DI(t).replace(II,"%2F")}function ao(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const NI=/\/$/,MI=t=>t.replace(NI,"");function ql(t,e,n="/"){let s,i={},r="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return c=l>=0&&c>l?-1:c,c>=0&&(s=e.slice(0,c),r=e.slice(c,l>0?l:e.length),i=t(r)),l>=0&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=BI(s??e,n),{fullPath:s+r+o,path:s,query:i,hash:ao(o)}}function OI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function lf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function VI(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Zi(e.matched[s],n.matched[i])&&ym(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Zi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ym(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!LI(t[n],e[n]))return!1;return!0}function LI(t,e){return Bn(t)?cf(t,e):Bn(e)?cf(e,t):t===e}function cf(t,e){return Bn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function BI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const ks={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let wc=(function(t){return t.pop="pop",t.push="push",t})({}),Ql=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function FI(t){if(!t)if(Vi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),MI(t)}const UI=/^[^#]+#/;function $I(t,e){return t.replace(UI,"#")+e}function HI(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const nl=()=>({left:window.scrollX,top:window.scrollY});function jI(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=HI(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function uf(t,e){return(history.state?history.state.position-e:-1)+t}const Ec=new Map;function GI(t,e){Ec.set(t,e)}function qI(t){const e=Ec.get(t);return Ec.delete(t),e}function QI(t){return typeof t=="string"||t&&typeof t=="object"}function Am(t){return typeof t=="string"||typeof t=="symbol"}let vt=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const Im=Symbol("");vt.MATCHER_NOT_FOUND+"",vt.NAVIGATION_GUARD_REDIRECT+"",vt.NAVIGATION_ABORTED+"",vt.NAVIGATION_CANCELLED+"",vt.NAVIGATION_DUPLICATED+"";function er(t,e){return Qe(new Error,{type:t,[Im]:!0},e)}function as(t,e){return t instanceof Error&&Im in t&&(e==null||!!(t.type&e))}const WI=["params","query","hash"];function zI(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of WI)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function KI(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<n.length;++s){const i=n[s].replace(gm," "),r=i.indexOf("="),o=ao(r<0?i:i.slice(0,r)),l=r<0?null:ao(i.slice(r+1));if(o in e){let c=e[o];Bn(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function hf(t){let e="";for(let n in t){const s=t[n];if(n=kI(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Bn(s)?s.map(i=>i&&Ic(i)):[s&&Ic(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function YI(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Bn(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const JI=Symbol(""),df=Symbol(""),sl=Symbol(""),wm=Symbol(""),Tc=Symbol("");function xr(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ms(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(er(vt.NAVIGATION_ABORTED,{from:n,to:e})):m instanceof Error?c(m):QI(m)?c(er(vt.NAVIGATION_GUARD_REDIRECT,{from:e,to:m})):(o&&s.enterCallbacks[i]===o&&typeof m=="function"&&o.push(m),l())},d=r(()=>t.call(s&&s.instances[i],e,n,u));let p=Promise.resolve(d);t.length<3&&(p=p.then(u)),p.catch(m=>c(m))})}function Wl(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(fm(c)){const u=(c.__vccOpts||c)[e];u&&r.push(Ms(u,n,s,o,l,i))}else{let u=c();r.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=yI(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const m=(p.__vccOpts||p)[e];return m&&Ms(m,n,s,o,l,i)()}))}}return r}function XI(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(u=>Zi(u,l))?s.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>Zi(u,c))||i.push(c))}return[n,s,i]}/*!
 * vue-router v4.6.0
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let ZI=()=>location.protocol+"//"+location.host;function Em(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let o=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(o);return l[0]!=="/"&&(l="/"+l),lf(l,"")}return lf(n,t)+s+i}function ew(t,e,n,s){let i=[],r=[],o=null;const l=({state:m})=>{const v=Em(t,location),T=n.value,w=e.value;let y=0;if(m){if(n.value=v,e.value=m,o&&o===T){o=null;return}y=w?m.position-w.position:0}else s(v);i.forEach(k=>{k(n.value,T,{delta:y,type:wc.pop,direction:y?y>0?Ql.forward:Ql.back:Ql.unknown})})};function c(){o=n.value}function u(m){i.push(m);const v=()=>{const T=i.indexOf(m);T>-1&&i.splice(T,1)};return r.push(v),v}function d(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(Qe({},m.state,{scroll:nl()}),"")}}function p(){for(const m of r)m();r=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",d),document.removeEventListener("visibilitychange",d)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",d),document.addEventListener("visibilitychange",d),{pauseListeners:c,listen:u,destroy:p}}function ff(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?nl():null}}function tw(t){const{history:e,location:n}=window,s={value:Em(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,u,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:ZI()+t+c;try{e[d?"replaceState":"pushState"](u,"",m),i.value=u}catch(v){console.error(v),n[d?"replace":"assign"](m)}}function o(c,u){r(c,Qe({},e.state,ff(i.value.back,c,i.value.forward,!0),u,{position:i.value.position}),!0),s.value=c}function l(c,u){const d=Qe({},i.value,e.state,{forward:c,scroll:nl()});r(d.current,d,!0),r(c,Qe({},ff(s.value,c,null),{position:d.position+1},u),!1),s.value=c}return{location:s,state:i,push:l,replace:o}}function nw(t){t=FI(t);const e=tw(t),n=ew(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=Qe({location:"",base:t,go:s,createHref:$I.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function sw(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),nw(t)}let hi=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var Nt=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(Nt||{});const iw={type:hi.Static,value:""},rw=/[a-zA-Z0-9_]/;function ow(t){if(!t)return[[]];if(t==="/")return[[iw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${u}": ${v}`)}let n=Nt.Static,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,c,u="",d="";function p(){u&&(n===Nt.Static?r.push({type:hi.Static,value:u}):n===Nt.Param||n===Nt.ParamRegExp||n===Nt.ParamRegExpEnd?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:hi.Param,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==Nt.ParamRegExp){s=n,n=Nt.EscapeNext;continue}switch(n){case Nt.Static:c==="/"?(u&&p(),o()):c===":"?(p(),n=Nt.Param):m();break;case Nt.EscapeNext:m(),n=s;break;case Nt.Param:c==="("?n=Nt.ParamRegExp:rw.test(c)?m():(p(),n=Nt.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case Nt.ParamRegExp:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=Nt.ParamRegExpEnd:d+=c;break;case Nt.ParamRegExpEnd:p(),n=Nt.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===Nt.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),i}const pf="[^/]+?",aw={sensitive:!1,strict:!1,start:!0,end:!0};var cn=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(cn||{});const lw=/[.+*?^${}()[\]/\\]/g;function cw(t,e){const n=Qe({},aw,e),s=[];let i=n.start?"^":"";const r=[];for(const u of t){const d=u.length?[]:[cn.Root];n.strict&&!u.length&&(i+="/");for(let p=0;p<u.length;p++){const m=u[p];let v=cn.Segment+(n.sensitive?cn.BonusCaseSensitive:0);if(m.type===hi.Static)p||(i+="/"),i+=m.value.replace(lw,"\\$&"),v+=cn.Static;else if(m.type===hi.Param){const{value:T,repeatable:w,optional:y,regexp:k}=m;r.push({name:T,repeatable:w,optional:y});const F=k||pf;if(F!==pf){v+=cn.BonusCustomRegExp;try{`${F}`}catch(j){throw new Error(`Invalid custom RegExp for param "${T}" (${F}): `+j.message)}}let U=w?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;p||(U=y&&u.length<2?`(?:/${U})`:"/"+U),y&&(U+="?"),i+=U,v+=cn.Dynamic,y&&(v+=cn.BonusOptional),w&&(v+=cn.BonusRepeatable),F===".*"&&(v+=cn.BonusWildcard)}d.push(v)}s.push(d)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=cn.BonusStrict}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(u){const d=u.match(o),p={};if(!d)return null;for(let m=1;m<d.length;m++){const v=d[m]||"",T=r[m-1];p[T.name]=v&&T.repeatable?v.split("/"):v}return p}function c(u){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const v of m)if(v.type===hi.Static)d+=v.value;else if(v.type===hi.Param){const{value:T,repeatable:w,optional:y}=v,k=T in u?u[T]:"";if(Bn(k)&&!w)throw new Error(`Provided param "${T}" is an array but it is not repeatable (* or + modifiers)`);const F=Bn(k)?k.join("/"):k;if(!F)if(y)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${T}"`);d+=F}}return d||"/"}return{re:o,score:s,keys:r,parse:l,stringify:c}}function uw(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===cn.Static+cn.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===cn.Static+cn.Segment?1:-1:0}function Tm(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=uw(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(gf(s))return 1;if(gf(i))return-1}return i.length-s.length}function gf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const hw={strict:!1,end:!0,sensitive:!1};function dw(t,e,n){const s=cw(ow(t.path),n),i=Qe(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function fw(t,e){const n=[],s=new Map;e=af(hw,e);function i(p){return s.get(p)}function r(p,m,v){const T=!v,w=vf(p);w.aliasOf=v&&v.record;const y=af(e,p),k=[w];if("alias"in p){const j=typeof p.alias=="string"?[p.alias]:p.alias;for(const se of j)k.push(vf(Qe({},w,{components:v?v.record.components:w.components,path:se,aliasOf:v?v.record:w})))}let F,U;for(const j of k){const{path:se}=j;if(m&&se[0]!=="/"){const Ie=m.record.path,S=Ie[Ie.length-1]==="/"?"":"/";j.path=m.record.path+(se&&S+se)}if(F=dw(j,m,y),v?v.alias.push(F):(U=U||F,U!==F&&U.alias.push(F),T&&p.name&&!_f(F)&&o(p.name)),Cm(F)&&c(F),w.children){const Ie=w.children;for(let S=0;S<Ie.length;S++)r(Ie[S],F,v&&v.children[S])}v=v||F}return U?()=>{o(U)}:Qr}function o(p){if(Am(p)){const m=s.get(p);m&&(s.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&s.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const m=mw(p,n);n.splice(m,0,p),p.record.name&&!_f(p)&&s.set(p.record.name,p)}function u(p,m){let v,T={},w,y;if("name"in p&&p.name){if(v=s.get(p.name),!v)throw er(vt.MATCHER_NOT_FOUND,{location:p});y=v.record.name,T=Qe(mf(m.params,v.keys.filter(U=>!U.optional).concat(v.parent?v.parent.keys.filter(U=>U.optional):[]).map(U=>U.name)),p.params&&mf(p.params,v.keys.map(U=>U.name))),w=v.stringify(T)}else if(p.path!=null)w=p.path,v=n.find(U=>U.re.test(w)),v&&(T=v.parse(w),y=v.record.name);else{if(v=m.name?s.get(m.name):n.find(U=>U.re.test(m.path)),!v)throw er(vt.MATCHER_NOT_FOUND,{location:p,currentLocation:m});y=v.record.name,T=Qe({},m.params,p.params),w=v.stringify(T)}const k=[];let F=v;for(;F;)k.unshift(F.record),F=F.parent;return{name:y,path:w,params:T,matched:k,meta:gw(k)}}t.forEach(p=>r(p));function d(){n.length=0,s.clear()}return{addRoute:r,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:i}}function mf(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function vf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:pw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function pw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function _f(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function gw(t){return t.reduce((e,n)=>Qe(e,n.meta),{})}function mw(t,e){let n=0,s=e.length;for(;n!==s;){const r=n+s>>1;Tm(t,e[r])<0?s=r:n=r+1}const i=vw(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function vw(t){let e=t;for(;e=e.parent;)if(Cm(e)&&Tm(t,e)===0)return e}function Cm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function yf(t){const e=zn(sl),n=zn(wm),s=Xe(()=>{const c=Wt(t.to);return e.resolve(c)}),i=Xe(()=>{const{matched:c}=s.value,{length:u}=c,d=c[u-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(Zi.bind(null,d));if(m>-1)return m;const v=Af(c[u-2]);return u>1&&Af(d)===v&&p[p.length-1].path!==v?p.findIndex(Zi.bind(null,c[u-2])):m}),r=Xe(()=>i.value>-1&&ww(n.params,s.value.params)),o=Xe(()=>i.value>-1&&i.value===n.matched.length-1&&ym(n.params,s.value.params));function l(c={}){if(Iw(c)){const u=e[Wt(t.replace)?"replace":"push"](Wt(t.to)).catch(Qr);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:Xe(()=>s.value.href),isActive:r,isExactActive:o,navigate:l}}function _w(t){return t.length===1?t[0]:t}const yw=Og({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:yf,setup(t,{slots:e}){const n=Ao(yf(t)),{options:s}=zn(sl),i=Xe(()=>({[If(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[If(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&_w(e.default(n));return t.custom?r:am("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),Aw=yw;function Iw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ww(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Bn(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Af(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const If=(t,e,n)=>t??e??n,Ew=Og({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=zn(Tc),i=Xe(()=>t.route||s.value),r=zn(df,0),o=Xe(()=>{let u=Wt(r);const{matched:d}=i.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),l=Xe(()=>i.value.matched[o.value]);Xo(df,Xe(()=>o.value+1)),Xo(JI,l),Xo(Tc,i);const c=x();return ms(()=>[c.value,l.value,t.name],([u,d,p],[m,v,T])=>{d&&(d.instances[p]=u,v&&v!==d&&u&&u===m&&(d.leaveGuards.size||(d.leaveGuards=v.leaveGuards),d.updateGuards.size||(d.updateGuards=v.updateGuards))),u&&d&&(!v||!Zi(d,v)||!m)&&(d.enterCallbacks[p]||[]).forEach(w=>w(u))},{flush:"post"}),()=>{const u=i.value,d=t.name,p=l.value,m=p&&p.components[d];if(!m)return wf(n.default,{Component:m,route:u});const v=p.props[d],T=v?v===!0?u.params:typeof v=="function"?v(u):v:null,y=am(m,Qe({},T,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return wf(n.default,{Component:y,route:u})||y}}});function wf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Tw=Ew;function Cw(t){const e=fw(t.routes,t),n=t.parseQuery||KI,s=t.stringifyQuery||hf,i=t.history,r=xr(),o=xr(),l=xr(),c=EA(ks);let u=ks;Vi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Gl.bind(null,q=>""+q),p=Gl.bind(null,xI),m=Gl.bind(null,ao);function v(q,ae){let te,ue;return Am(q)?(te=e.getRecordMatcher(q),ue=ae):ue=q,e.addRoute(ue,te)}function T(q){const ae=e.getRecordMatcher(q);ae&&e.removeRoute(ae)}function w(){return e.getRoutes().map(q=>q.record)}function y(q){return!!e.getRecordMatcher(q)}function k(q,ae){if(ae=Qe({},ae||c.value),typeof q=="string"){const M=ql(n,q,ae.path),Q=e.resolve({path:M.path},ae),K=i.createHref(M.fullPath);return Qe(M,Q,{params:m(Q.params),hash:ao(M.hash),redirectedFrom:void 0,href:K})}let te;if(q.path!=null)te=Qe({},q,{path:ql(n,q.path,ae.path).path});else{const M=Qe({},q.params);for(const Q in M)M[Q]==null&&delete M[Q];te=Qe({},q,{params:p(M)}),ae.params=p(ae.params)}const ue=e.resolve(te,ae),xe=q.hash||"";ue.params=d(m(ue.params));const A=OI(s,Qe({},q,{hash:PI(xe),path:ue.path})),b=i.createHref(A);return Qe({fullPath:A,hash:xe,query:s===hf?YI(q.query):q.query||{}},ue,{redirectedFrom:void 0,href:b})}function F(q){return typeof q=="string"?ql(n,q,c.value.path):Qe({},q)}function U(q,ae){if(u!==q)return er(vt.NAVIGATION_CANCELLED,{from:ae,to:q})}function j(q){return S(q)}function se(q){return j(Qe(F(q),{replace:!0}))}function Ie(q,ae){const te=q.matched[q.matched.length-1];if(te&&te.redirect){const{redirect:ue}=te;let xe=typeof ue=="function"?ue(q,ae):ue;return typeof xe=="string"&&(xe=xe.includes("?")||xe.includes("#")?xe=F(xe):{path:xe},xe.params={}),Qe({query:q.query,hash:q.hash,params:xe.path!=null?{}:q.params},xe)}}function S(q,ae){const te=u=k(q),ue=c.value,xe=q.state,A=q.force,b=q.replace===!0,M=Ie(te,ue);if(M)return S(Qe(F(M),{state:typeof M=="object"?Qe({},xe,M.state):xe,force:A,replace:b}),ae||te);const Q=te;Q.redirectedFrom=ae;let K;return!A&&VI(s,ue,te)&&(K=er(vt.NAVIGATION_DUPLICATED,{to:Q,from:ue}),Lt(ue,ue,!0,!1)),(K?Promise.resolve(K):P(Q,ue)).catch(W=>as(W)?as(W,vt.NAVIGATION_GUARD_REDIRECT)?W:Kt(W):be(W,Q,ue)).then(W=>{if(W){if(as(W,vt.NAVIGATION_GUARD_REDIRECT))return S(Qe({replace:b},F(W.to),{state:typeof W.to=="object"?Qe({},xe,W.to.state):xe,force:A}),ae||Q)}else W=N(Q,ue,!0,b,xe);return R(Q,ue,W),W})}function I(q,ae){const te=U(q,ae);return te?Promise.reject(te):Promise.resolve()}function C(q){const ae=gn.values().next().value;return ae&&typeof ae.runWithContext=="function"?ae.runWithContext(q):q()}function P(q,ae){let te;const[ue,xe,A]=XI(q,ae);te=Wl(ue.reverse(),"beforeRouteLeave",q,ae);for(const M of ue)M.leaveGuards.forEach(Q=>{te.push(Ms(Q,q,ae))});const b=I.bind(null,q,ae);return te.push(b),ot(te).then(()=>{te=[];for(const M of r.list())te.push(Ms(M,q,ae));return te.push(b),ot(te)}).then(()=>{te=Wl(xe,"beforeRouteUpdate",q,ae);for(const M of xe)M.updateGuards.forEach(Q=>{te.push(Ms(Q,q,ae))});return te.push(b),ot(te)}).then(()=>{te=[];for(const M of A)if(M.beforeEnter)if(Bn(M.beforeEnter))for(const Q of M.beforeEnter)te.push(Ms(Q,q,ae));else te.push(Ms(M.beforeEnter,q,ae));return te.push(b),ot(te)}).then(()=>(q.matched.forEach(M=>M.enterCallbacks={}),te=Wl(A,"beforeRouteEnter",q,ae,C),te.push(b),ot(te))).then(()=>{te=[];for(const M of o.list())te.push(Ms(M,q,ae));return te.push(b),ot(te)}).catch(M=>as(M,vt.NAVIGATION_CANCELLED)?M:Promise.reject(M))}function R(q,ae,te){l.list().forEach(ue=>C(()=>ue(q,ae,te)))}function N(q,ae,te,ue,xe){const A=U(q,ae);if(A)return A;const b=ae===ks,M=Vi?history.state:{};te&&(ue||b?i.replace(q.fullPath,Qe({scroll:b&&M&&M.scroll},xe)):i.push(q.fullPath,xe)),c.value=q,Lt(q,ae,te,b),Kt()}let E;function st(){E||(E=i.listen((q,ae,te)=>{if(!Yt.listening)return;const ue=k(q),xe=Ie(ue,Yt.currentRoute.value);if(xe){S(Qe(xe,{replace:!0,force:!0}),ue).catch(Qr);return}u=ue;const A=c.value;Vi&&GI(uf(A.fullPath,te.delta),nl()),P(ue,A).catch(b=>as(b,vt.NAVIGATION_ABORTED|vt.NAVIGATION_CANCELLED)?b:as(b,vt.NAVIGATION_GUARD_REDIRECT)?(S(Qe(F(b.to),{force:!0}),ue).then(M=>{as(M,vt.NAVIGATION_ABORTED|vt.NAVIGATION_DUPLICATED)&&!te.delta&&te.type===wc.pop&&i.go(-1,!1)}).catch(Qr),Promise.reject()):(te.delta&&i.go(-te.delta,!1),be(b,ue,A))).then(b=>{b=b||N(ue,A,!1),b&&(te.delta&&!as(b,vt.NAVIGATION_CANCELLED)?i.go(-te.delta,!1):te.type===wc.pop&&as(b,vt.NAVIGATION_ABORTED|vt.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),R(ue,A,b)}).catch(Qr)}))}let _t=xr(),it=xr(),Ce;function be(q,ae,te){Kt(q);const ue=it.list();return ue.length?ue.forEach(xe=>xe(q,ae,te)):console.error(q),Promise.reject(q)}function kt(){return Ce&&c.value!==ks?Promise.resolve():new Promise((q,ae)=>{_t.add([q,ae])})}function Kt(q){return Ce||(Ce=!q,st(),_t.list().forEach(([ae,te])=>q?te(q):ae()),_t.reset()),q}function Lt(q,ae,te,ue){const{scrollBehavior:xe}=t;if(!Vi||!xe)return Promise.resolve();const A=!te&&qI(uf(q.fullPath,0))||(ue||!te)&&history.state&&history.state.scroll||null;return cu().then(()=>xe(q,ae,A)).then(b=>b&&jI(b)).catch(b=>be(b,q,ae))}const rt=q=>i.go(q);let Cn;const gn=new Set,Yt={currentRoute:c,listening:!0,addRoute:v,removeRoute:T,clearRoutes:e.clearRoutes,hasRoute:y,getRoutes:w,resolve:k,options:t,push:j,replace:se,go:rt,back:()=>rt(-1),forward:()=>rt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:it.add,isReady:kt,install(q){q.component("RouterLink",Aw),q.component("RouterView",Tw),q.config.globalProperties.$router=Yt,Object.defineProperty(q.config.globalProperties,"$route",{enumerable:!0,get:()=>Wt(c)}),Vi&&!Cn&&c.value===ks&&(Cn=!0,j(i.location).catch(ue=>{}));const ae={};for(const ue in ks)Object.defineProperty(ae,ue,{get:()=>c.value[ue],enumerable:!0});q.provide(sl,Yt),q.provide(wm,Sg(ae)),q.provide(Tc,c);const te=q.unmount;gn.add(q),q.unmount=function(){gn.delete(q),gn.size<1&&(u=ks,E&&E(),E=null,c.value=ks,Cn=!1,Ce=!1),te()}}};function ot(q){return q.reduce((ae,te)=>ae.then(()=>C(te)),Promise.resolve())}return Yt}function dn(){return zn(sl)}const bw={__name:"App",setup(t){dn();const e=x(null),n=x(!1),s=()=>{const r=localStorage.getItem("soundEnabled");return r!==null?r==="true":!0},i=()=>{e.value&&(s()?n.value||e.value.play().then(()=>{n.value=!0}).catch(()=>{}):(e.value.pause(),n.value=!1))};return Rt(()=>{try{e.value=new Audio,e.value.src=new URL("@/assets/audio/bgm.mp3",import.meta.url).href,e.value.loop=!0,e.value.volume=.5,i();const r=()=>{e.value&&s()&&!n.value&&e.value.play().then(()=>{n.value=!0}).catch(()=>{})};document.addEventListener("click",r,{once:!0}),document.addEventListener("touchstart",r,{once:!0}),window.addEventListener("soundSettingChanged",i)}catch{console.log("BGM 파일을 찾을 수 없습니다.")}}),cr(()=>{e.value&&(e.value.pause(),e.value=null),window.removeEventListener("soundSettingChanged",i)}),(r,o)=>{const l=KA("router-view");return O(),sm(l)}}},Sw="modulepreload",Rw=function(t){return"/tdl/"+t},Ef={},Pw=function(e,n,s){let i=Promise.resolve();if(n&&n.length>0){let c=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");i=c(n.map(u=>{if(u=Rw(u),u in Ef)return;Ef[u]=!0;const d=u.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":Sw,d||(m.as="script"),m.crossOrigin="",m.href=u,l&&m.setAttribute("nonce",l),document.head.appendChild(m),d)return new Promise((v,T)=>{m.addEventListener("load",v),m.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${u}`)))})}))}function r(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&r(l.reason);return e().catch(r)})},kw=()=>JSON.parse(localStorage.getItem("users")||"[]"),ht=()=>{const t=sessionStorage.getItem("currentUser");return t?JSON.parse(t):null},Mt=async(t,e)=>{const n=ht();if(n&&(n.id?.length>20||n.uid))try{const{updateGameData:r}=await Pw(async()=>{const{updateGameData:l}=await Promise.resolve().then(()=>d2);return{updateGameData:l}},void 0);return(await r(t,e)).success}catch(r){console.error("Firebase 업데이트 실패, localStorage로 폴백:",r)}const s=kw(),i=s.findIndex(r=>r.id===t);return i!==-1?(s[i].gameData={...s[i].gameData,...e},localStorage.setItem("users",JSON.stringify(s)),n&&n.id===t&&(n.gameData={...n.gameData,...e},sessionStorage.setItem("currentUser",JSON.stringify(n))),!0):!1},Dw=(t,e)=>Mt(t,{coins:e}),Ea=(t,e,n)=>Mt(t,{coins:e,totalCoin:n}),Tf=()=>{sessionStorage.removeItem("currentUser")},xw=()=>localStorage.getItem("appLanguage")||"한국어",bm=()=>{const t=xw();return{ko:{home:"홈",exchange:"교환소",quest:"퀘스트",inventory:"인벤토리",factory:"제작소",mining:"채굴",hunting:"사냥",exploration:"탐험",production:"생산",back:"← 뒤로",settings:"설정",notification:"알림"},en:{home:"Home",exchange:"Exchange",quest:"Quest",inventory:"Inventory",factory:"Factory",mining:"Mining",hunting:"Hunting",exploration:"Exploration",production:"Production",back:"← Back",settings:"Settings",notification:"Notification"}}[t==="한국어"?"ko":"en"]},Nw=()=>{};var Cf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Mw=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Rm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,d=r>>2,p=(r&3)<<4|l>>4;let m=(l&15)<<2|u>>6,v=u&63;c||(v=64,o||(m=64)),s.push(n[d],n[p],n[m],n[v])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Sm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Mw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||u==null||p==null)throw new Ow;const m=r<<2|l>>4;if(s.push(m),u!==64){const v=l<<4&240|u>>2;if(s.push(v),p!==64){const T=u<<6&192|p;s.push(T)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ow extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vw=function(t){const e=Sm(t);return Rm.encodeByteArray(e,!0)},Ta=function(t){return Vw(t).replace(/\./g,"")},Pm=function(t){try{return Rm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Lw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Bw=()=>Lw().__FIREBASE_DEFAULTS__,Fw=()=>{if(typeof process>"u"||typeof Cf>"u")return;const t=Cf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Uw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Pm(t[1]);return e&&JSON.parse(e)},il=()=>{try{return Nw()||Bw()||Fw()||Uw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},km=t=>il()?.emulatorHosts?.[t],$w=t=>{const e=km(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Dm=()=>il()?.config,xm=t=>il()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function ur(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Nm(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function jw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Ta(JSON.stringify(n)),Ta(JSON.stringify(o)),""].join(".")}const Wr={};function Gw(){const t={prod:[],emulator:[]};for(const e of Object.keys(Wr))Wr[e]?t.emulator.push(e):t.prod.push(e);return t}function qw(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let bf=!1;function Mm(t,e){if(typeof window>"u"||typeof document>"u"||!ur(window.location.host)||Wr[t]===e||Wr[t]||bf)return;Wr[t]=e;function n(m){return`__firebase__banner__${m}`}const s="__firebase__banner",r=Gw().prod.length>0;function o(){const m=document.getElementById(s);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,v){m.setAttribute("width","24"),m.setAttribute("id",v),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{bf=!0,o()},m}function d(m,v){m.setAttribute("id",v),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=qw(s),v=n("text"),T=document.getElementById(v)||document.createElement("span"),w=n("learnmore"),y=document.getElementById(w)||document.createElement("a"),k=n("preprendIcon"),F=document.getElementById(k)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const U=m.element;l(U),d(y,w);const j=u();c(F,k),U.append(F,T,y,j),document.body.appendChild(U)}r?(T.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,T.innerText="Preview backend running in this workspace."),T.setAttribute("id",v)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rn())}function Ww(){const t=il()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function zw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Om(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Kw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Yw(){const t=rn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Jw(){return!Ww()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Vm(){try{return typeof indexedDB=="object"}catch{return!1}}function Lm(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(n){e(n)}})}function Xw(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw="FirebaseError";class Un extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Zw,Object.setPrototypeOf(this,Un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ci.prototype.create)}}class Ci{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?e1(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Un(i,l,s)}}function e1(t,e){return t.replace(t1,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const t1=/\{\$([^}]+)}/g;function n1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zs(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Sf(r)&&Sf(o)){if(!zs(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Sf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function s1(t,e){const n=new i1(t,e);return n.subscribe.bind(n)}class i1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");r1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=zl),i.error===void 0&&(i.error=zl),i.complete===void 0&&(i.complete=zl);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function r1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function zl(){}/**
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
 */const o1=1e3,a1=2,l1=14400*1e3,c1=.5;function Rf(t,e=o1,n=a1){const s=e*Math.pow(n,t),i=Math.round(c1*s*(Math.random()-.5)*2);return Math.min(l1,s+i)}/**
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
 */function _n(t){return t&&t._delegate?t._delegate:t}class Fn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ui="[DEFAULT]";/**
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
 */class u1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Hw;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(d1(e))try{this.getOrInitializeService({instanceIdentifier:ui})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=ui){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ui){return this.instances.has(e)}getOptions(e=ui){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:h1(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ui){return this.component?this.component.multipleInstances?e:ui:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function h1(t){return t===ui?void 0:t}function d1(t){return t.instantiationMode==="EAGER"}/**
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
 */class f1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new u1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Oe||(Oe={}));const p1={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},g1=Oe.INFO,m1={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},v1=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=m1[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rl{constructor(e){this.name=e,this._logLevel=g1,this._logHandler=v1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?p1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}}const _1=(t,e)=>e.some(n=>t instanceof n);let Pf,kf;function y1(){return Pf||(Pf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function A1(){return kf||(kf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bm=new WeakMap,Cc=new WeakMap,Fm=new WeakMap,Kl=new WeakMap,mu=new WeakMap;function I1(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Us(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Bm.set(n,t)}).catch(()=>{}),mu.set(e,t),e}function w1(t){if(Cc.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Cc.set(t,e)}let bc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Cc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Us(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function E1(t){bc=t(bc)}function T1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Yl(this),e,...n);return Fm.set(s,e.sort?e.sort():[e]),Us(s)}:A1().includes(t)?function(...e){return t.apply(Yl(this),e),Us(Bm.get(this))}:function(...e){return Us(t.apply(Yl(this),e))}}function C1(t){return typeof t=="function"?T1(t):(t instanceof IDBTransaction&&w1(t),_1(t,y1())?new Proxy(t,bc):t)}function Us(t){if(t instanceof IDBRequest)return I1(t);if(Kl.has(t))return Kl.get(t);const e=C1(t);return e!==t&&(Kl.set(t,e),mu.set(e,t)),e}const Yl=t=>mu.get(t);function Um(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Us(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Us(o.result),c.oldVersion,c.newVersion,Us(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const b1=["get","getKey","getAll","getAllKeys","count"],S1=["put","add","delete","clear"],Jl=new Map;function Df(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Jl.get(e))return Jl.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=S1.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||b1.includes(n)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&c.done]))[0]};return Jl.set(e,r),r}E1(t=>({...t,get:(e,n,s)=>Df(e,n)||t.get(e,n,s),has:(e,n)=>!!Df(e,n)||t.has(e,n)}));/**
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
 */class R1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(P1(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function P1(t){return t.getComponent()?.type==="VERSION"}const Sc="@firebase/app",xf="0.14.5";/**
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
 */const As=new rl("@firebase/app"),k1="@firebase/app-compat",D1="@firebase/analytics-compat",x1="@firebase/analytics",N1="@firebase/app-check-compat",M1="@firebase/app-check",O1="@firebase/auth",V1="@firebase/auth-compat",L1="@firebase/database",B1="@firebase/data-connect",F1="@firebase/database-compat",U1="@firebase/functions",$1="@firebase/functions-compat",H1="@firebase/installations",j1="@firebase/installations-compat",G1="@firebase/messaging",q1="@firebase/messaging-compat",Q1="@firebase/performance",W1="@firebase/performance-compat",z1="@firebase/remote-config",K1="@firebase/remote-config-compat",Y1="@firebase/storage",J1="@firebase/storage-compat",X1="@firebase/firestore",Z1="@firebase/ai",eE="@firebase/firestore-compat",tE="firebase",nE="12.5.0";/**
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
 */const Rc="[DEFAULT]",sE={[Sc]:"fire-core",[k1]:"fire-core-compat",[x1]:"fire-analytics",[D1]:"fire-analytics-compat",[M1]:"fire-app-check",[N1]:"fire-app-check-compat",[O1]:"fire-auth",[V1]:"fire-auth-compat",[L1]:"fire-rtdb",[B1]:"fire-data-connect",[F1]:"fire-rtdb-compat",[U1]:"fire-fn",[$1]:"fire-fn-compat",[H1]:"fire-iid",[j1]:"fire-iid-compat",[G1]:"fire-fcm",[q1]:"fire-fcm-compat",[Q1]:"fire-perf",[W1]:"fire-perf-compat",[z1]:"fire-rc",[K1]:"fire-rc-compat",[Y1]:"fire-gcs",[J1]:"fire-gcs-compat",[X1]:"fire-fst",[eE]:"fire-fst-compat",[Z1]:"fire-vertex","fire-js":"fire-js",[tE]:"fire-js-all"};/**
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
 */const Ca=new Map,iE=new Map,Pc=new Map;function Nf(t,e){try{t.container.addComponent(e)}catch(n){As.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ns(t){const e=t.name;if(Pc.has(e))return As.debug(`There were multiple attempts to register component ${e}.`),!1;Pc.set(e,t);for(const n of Ca.values())Nf(n,t);for(const n of iE.values())Nf(n,t);return!0}function bi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Sn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const rE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$s=new Ci("app","Firebase",rE);/**
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
 */class oE{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $s.create("app-deleted",{appName:this._name})}}/**
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
 */const hr=nE;function $m(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:Rc,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw $s.create("bad-app-name",{appName:String(i)});if(n||(n=Dm()),!n)throw $s.create("no-options");const r=Ca.get(i);if(r){if(zs(n,r.options)&&zs(s,r.config))return r;throw $s.create("duplicate-app",{appName:i})}const o=new f1(i);for(const c of Pc.values())o.addComponent(c);const l=new oE(n,s,o);return Ca.set(i,l),l}function vu(t=Rc){const e=Ca.get(t);if(!e&&t===Rc&&Dm())return $m();if(!e)throw $s.create("no-app",{appName:t});return e}function xn(t,e,n){let s=sE[t]??t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),As.warn(o.join(" "));return}ns(new Fn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const aE="firebase-heartbeat-database",lE=1,lo="firebase-heartbeat-store";let Xl=null;function Hm(){return Xl||(Xl=Um(aE,lE,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(lo)}catch(n){console.warn(n)}}}}).catch(t=>{throw $s.create("idb-open",{originalErrorMessage:t.message})})),Xl}async function cE(t){try{const n=(await Hm()).transaction(lo),s=await n.objectStore(lo).get(jm(t));return await n.done,s}catch(e){if(e instanceof Un)As.warn(e.message);else{const n=$s.create("idb-get",{originalErrorMessage:e?.message});As.warn(n.message)}}}async function Mf(t,e){try{const s=(await Hm()).transaction(lo,"readwrite");await s.objectStore(lo).put(e,jm(t)),await s.done}catch(n){if(n instanceof Un)As.warn(n.message);else{const s=$s.create("idb-set",{originalErrorMessage:n?.message});As.warn(s.message)}}}function jm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const uE=1024,hE=30;class dE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Of();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>hE){const i=gE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){As.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Of(),{heartbeatsToSend:n,unsentEntries:s}=fE(this._heartbeatsCache.heartbeats),i=Ta(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return As.warn(e),""}}}function Of(){return new Date().toISOString().substring(0,10)}function fE(t,e=uE){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Vf(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Vf(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class pE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vm()?Lm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await cE(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Mf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Mf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Vf(t){return Ta(JSON.stringify({version:2,heartbeats:t})).length}function gE(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function mE(t){ns(new Fn("platform-logger",e=>new R1(e),"PRIVATE")),ns(new Fn("heartbeat",e=>new dE(e),"PRIVATE")),xn(Sc,xf,t),xn(Sc,xf,"esm2020"),xn("fire-js","")}mE("");var vE="firebase",_E="12.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xn(vE,_E,"app");function Gm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yE=Gm,qm=new Ci("auth","Firebase",Gm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba=new rl("@firebase/auth");function AE(t,...e){ba.logLevel<=Oe.WARN&&ba.warn(`Auth (${hr}): ${t}`,...e)}function na(t,...e){ba.logLevel<=Oe.ERROR&&ba.error(`Auth (${hr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(t,...e){throw yu(t,...e)}function Ln(t,...e){return yu(t,...e)}function _u(t,e,n){const s={...yE(),[e]:n};return new Ci("auth","Firebase",s).create(e,{appName:t.name})}function Hs(t){return _u(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Qm(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&ss(t,"argument-error"),_u(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function yu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return qm.create(t,...e)}function ye(t,e,...n){if(!t)throw yu(e,...n)}function ps(t){const e="INTERNAL ASSERTION FAILED: "+t;throw na(e),new Error(e)}function Is(t,e){t||ps(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(){return typeof self<"u"&&self.location?.href||""}function IE(){return Lf()==="http:"||Lf()==="https:"}function Lf(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(IE()||Om()||"connection"in navigator)?navigator.onLine:!0}function EE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,n){this.shortDelay=e,this.longDelay=n,Is(n>e,"Short delay should be less than long delay!"),this.isMobile=Qw()||Kw()}get(){return wE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(t,e){Is(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ps("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ps("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ps("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],bE=new To(3e4,6e4);function Iu(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function dr(t,e,n,s,i={}){return zm(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const l=Eo({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...r};return zw()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&ur(t.emulatorConfig.host)&&(u.credentials="include"),Wm.fetch()(await Km(t,t.config.apiHost,n,l),u)})}async function zm(t,e,n){t._canInitEmulator=!1;const s={...TE,...e};try{const i=new RE(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw qo(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const l=r.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw qo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw qo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw qo(t,"user-disabled",o);const d=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw _u(t,d,u);ss(t,d)}}catch(i){if(i instanceof Un)throw i;ss(t,"network-request-failed",{message:String(i)})}}async function SE(t,e,n,s,i={}){const r=await dr(t,e,n,s,i);return"mfaPendingCredential"in r&&ss(t,"multi-factor-auth-required",{_serverResponse:r}),r}async function Km(t,e,n,s){const i=`${e}${n}?${s}`,r=t,o=r.config.emulator?Au(t.config,i):`${t.config.apiScheme}://${i}`;return CE.includes(n)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}class RE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ln(this.auth,"network-request-failed")),bE.get())})}}function qo(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Ln(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PE(t,e){return dr(t,"POST","/v1/accounts:delete",e)}async function Sa(t,e){return dr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kE(t,e=!1){const n=_n(t),s=await n.getIdToken(e),i=wu(s);ye(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r?.sign_in_provider;return{claims:i,token:s,authTime:zr(Zl(i.auth_time)),issuedAtTime:zr(Zl(i.iat)),expirationTime:zr(Zl(i.exp)),signInProvider:o||null,signInSecondFactor:r?.sign_in_second_factor||null}}function Zl(t){return Number(t)*1e3}function wu(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return na("JWT malformed, contained fewer than 3 sections"),null;try{const i=Pm(n);return i?JSON.parse(i):(na("Failed to decode base64 JWT payload"),null)}catch(i){return na("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Bf(t){const e=wu(t);return ye(e,"internal-error"),ye(typeof e.exp<"u","internal-error"),ye(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function co(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Un&&DE(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function DE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zr(this.lastLoginAt),this.creationTime=zr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ra(t){const e=t.auth,n=await t.getIdToken(),s=await co(t,Sa(e,{idToken:n}));ye(s?.users.length,e,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const r=i.providerUserInfo?.length?Ym(i.providerUserInfo):[],o=ME(t.providerData,r),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!o?.length,u=l?c:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Dc(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function NE(t){const e=_n(t);await Ra(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ME(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Ym(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OE(t,e){const n=await zm(t,{},async()=>{const s=Eo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=await Km(t,i,"/v1/token",`key=${r}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:s};return t.emulatorConfig&&ur(t.emulatorConfig.host)&&(c.credentials="include"),Wm.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function VE(t,e){return dr(t,"POST","/v2/accounts:revokeToken",Iu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ye(e.idToken,"internal-error"),ye(typeof e.idToken<"u","internal-error"),ye(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ye(e.length!==0,"internal-error");const n=Bf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ye(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await OE(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Qi;return s&&(ye(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(ye(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(ye(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qi,this.toJSON())}_performRefresh(){return ps("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(t,e){ye(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Mn{constructor({uid:e,auth:n,stsTokenManager:s,...i}){this.providerId="firebase",this.proactiveRefresh=new xE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Dc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await co(this,this.stsTokenManager.getToken(this.auth,e));return ye(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kE(this,e)}reload(){return NE(this)}_assign(e){this!==e&&(ye(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Mn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ye(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ra(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Sn(this.auth.app))return Promise.reject(Hs(this.auth));const e=await this.getIdToken();return await co(this,PE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,i=n.email??void 0,r=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:v,providerData:T,stsTokenManager:w}=n;ye(p&&w,e,"internal-error");const y=Qi.fromJSON(this.name,w);ye(typeof p=="string",e,"internal-error"),Ds(s,e.name),Ds(i,e.name),ye(typeof m=="boolean",e,"internal-error"),ye(typeof v=="boolean",e,"internal-error"),Ds(r,e.name),Ds(o,e.name),Ds(l,e.name),Ds(c,e.name),Ds(u,e.name),Ds(d,e.name);const k=new Mn({uid:p,auth:e,email:i,emailVerified:m,displayName:s,isAnonymous:v,photoURL:o,phoneNumber:r,tenantId:l,stsTokenManager:y,createdAt:u,lastLoginAt:d});return T&&Array.isArray(T)&&(k.providerData=T.map(F=>({...F}))),c&&(k._redirectEventId=c),k}static async _fromIdTokenResponse(e,n,s=!1){const i=new Qi;i.updateFromServerResponse(n);const r=new Mn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Ra(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];ye(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Ym(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!r?.length,l=new Qi;l.updateFromIdToken(s);const c=new Mn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Dc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!r?.length};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff=new Map;function gs(t){Is(t instanceof Function,"Expected a class definition");let e=Ff.get(t);return e?(Is(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ff.set(t,e),e)}/**
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
 */class Jm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Jm.type="NONE";const Uf=Jm;/**
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
 */function sa(t,e,n){return`firebase:${t}:${e}:${n}`}class Wi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=sa(this.userKey,i.apiKey,r),this.fullPersistenceKey=sa("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Sa(this.auth,{idToken:e}).catch(()=>{});return n?Mn._fromGetAccountInfoResponse(this.auth,n,e):null}return Mn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Wi(gs(Uf),e,s);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||gs(Uf);const o=sa(s,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){let p;if(typeof d=="string"){const m=await Sa(e,{idToken:d}).catch(()=>{});if(!m)break;p=await Mn._fromGetAccountInfoResponse(e,m,d)}else p=Mn._fromJSON(e,d);u!==r&&(l=p),r=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Wi(r,e,s):(r=c[0],l&&await r._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new Wi(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sv(e))return"Blackberry";if(iv(e))return"Webos";if(Zm(e))return"Safari";if((e.includes("chrome/")||ev(e))&&!e.includes("edge/"))return"Chrome";if(nv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if(s?.length===2)return s[1]}return"Other"}function Xm(t=rn()){return/firefox\//i.test(t)}function Zm(t=rn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ev(t=rn()){return/crios\//i.test(t)}function tv(t=rn()){return/iemobile/i.test(t)}function nv(t=rn()){return/android/i.test(t)}function sv(t=rn()){return/blackberry/i.test(t)}function iv(t=rn()){return/webos/i.test(t)}function Eu(t=rn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function LE(t=rn()){return Eu(t)&&!!window.navigator?.standalone}function BE(){return Yw()&&document.documentMode===10}function rv(t=rn()){return Eu(t)||nv(t)||iv(t)||sv(t)||/windows phone/i.test(t)||tv(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov(t,e=[]){let n;switch(t){case"Browser":n=$f(rn());break;case"Worker":n=`${$f(rn())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hr}/${s}`}/**
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
 */class FE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,l)=>{try{const c=e(r);o(c)}catch(c){l(c)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function UE(t,e={}){return dr(t,"GET","/v2/passwordPolicy",Iu(t,e))}/**
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
 */const $E=6;class HE{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??$E,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hf(this),this.idTokenSubscription=new Hf(this),this.beforeStateQueue=new FE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gs(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Wi.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Sa(this,{idToken:e}),s=await Mn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Sn(this.app)){const r=this.app.settings.authIdToken;return r?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(r).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=this.redirectUser?._redirectEventId,o=s?._redirectEventId,l=await this.tryRedirectSignIn(e);(!r||r===o)&&l?.user&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(r){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(r))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ye(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ra(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=EE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Sn(this.app))return Promise.reject(Hs(this));const n=e?_n(e):null;return n&&ye(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ye(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Sn(this.app)?Promise.reject(Hs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Sn(this.app)?Promise.reject(Hs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gs(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await UE(this),n=new HE(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ci("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await VE(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gs(e)||this._popupRedirectResolver;ye(n,this,"argument-error"),this.redirectPersistenceManager=await Wi.create(this,[gs(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ye(l,this,"internal-error"),l.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ye(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ov(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(Sn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&AE(`Error while retrieving App Check token: ${e.error}`),e?.token}}function fr(t){return _n(t)}class Hf{constructor(e){this.auth=e,this.observer=null,this.addObserver=s1(n=>this.observer=n)}get next(){return ye(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function GE(t){Tu=t}function qE(t){return Tu.loadJS(t)}function QE(){return Tu.gapiScript}function WE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(t,e){const n=bi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(zs(r,e??{}))return i;ss(i,"already-initialized")}return n.initialize({options:e})}function KE(t,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(gs);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e?.popupRedirectResolver)}function YE(t,e,n){const s=fr(t);ye(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=av(e),{host:o,port:l}=JE(e),c=l===null?"":`:${l}`,u={url:`${r}//${o}${c}/`},d=Object.freeze({host:o,port:l,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){ye(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ye(zs(u,s.config.emulator)&&zs(d,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=u,s.emulatorConfig=d,s.settings.appVerificationDisabledForTesting=!0,ur(o)?(Nm(`${r}//${o}${c}`),Mm("Auth",!0)):XE()}function av(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function JE(t){const e=av(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:jf(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:jf(o)}}}function jf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function XE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ps("not implemented")}_getIdTokenResponse(e){return ps("not implemented")}_linkToIdToken(e,n){return ps("not implemented")}_getReauthenticationResolver(e){return ps("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zi(t,e){return SE(t,"POST","/v1/accounts:signInWithIdp",Iu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE="http://localhost";class yi extends lv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new yi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ss("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i,...r}=n;if(!s||!i)return null;const o=new yi(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,zi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zi(e,n)}buildRequest(){const e={requestUri:ZE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Eo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Co extends ol{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os extends Co{constructor(){super("facebook.com")}static credential(e){return yi._fromParams({providerId:Os.PROVIDER_ID,signInMethod:Os.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Os.credentialFromTaggedObject(e)}static credentialFromError(e){return Os.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Os.credential(e.oauthAccessToken)}catch{return null}}}Os.FACEBOOK_SIGN_IN_METHOD="facebook.com";Os.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds extends Co{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return yi._fromParams({providerId:ds.PROVIDER_ID,signInMethod:ds.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ds.credentialFromTaggedObject(e)}static credentialFromError(e){return ds.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return ds.credential(n,s)}catch{return null}}}ds.GOOGLE_SIGN_IN_METHOD="google.com";ds.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs extends Co{constructor(){super("github.com")}static credential(e){return yi._fromParams({providerId:Vs.PROVIDER_ID,signInMethod:Vs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vs.credentialFromTaggedObject(e)}static credentialFromError(e){return Vs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vs.credential(e.oauthAccessToken)}catch{return null}}}Vs.GITHUB_SIGN_IN_METHOD="github.com";Vs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls extends Co{constructor(){super("twitter.com")}static credential(e,n){return yi._fromParams({providerId:Ls.PROVIDER_ID,signInMethod:Ls.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ls.credentialFromTaggedObject(e)}static credentialFromError(e){return Ls.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Ls.credential(n,s)}catch{return null}}}Ls.TWITTER_SIGN_IN_METHOD="twitter.com";Ls.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Mn._fromIdTokenResponse(e,s,i),o=Gf(s);return new tr({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Gf(s);return new tr({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Gf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa extends Un{constructor(e,n,s,i){super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Pa.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Pa(e,n,s,i)}}function cv(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Pa._fromErrorAndOperation(t,r,e,s):r})}async function eT(t,e,n=!1){const s=await co(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return tr._forOperation(t,"link",s)}/**
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
 */async function tT(t,e,n=!1){const{auth:s}=t;if(Sn(s.app))return Promise.reject(Hs(s));const i="reauthenticate";try{const r=await co(t,cv(s,i,e,t),n);ye(r.idToken,s,"internal-error");const o=wu(r.idToken);ye(o,s,"internal-error");const{sub:l}=o;return ye(t.uid===l,s,"user-mismatch"),tr._forOperation(t,i,r)}catch(r){throw r?.code==="auth/user-not-found"&&ss(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nT(t,e,n=!1){if(Sn(t.app))return Promise.reject(Hs(t));const s="signIn",i=await cv(t,s,e),r=await tr._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function sT(t,e,n,s){return _n(t).onIdTokenChanged(e,n,s)}function iT(t,e,n){return _n(t).beforeAuthStateChanged(e,n)}function rT(t){return _n(t).signOut()}const ka="__sak";/**
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
 */class uv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ka,"1"),this.storage.removeItem(ka),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT=1e3,aT=10;class hv extends uv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=rv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);BE()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,aT):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},oT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}hv.type="LOCAL";const lT=hv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv extends uv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}dv.type="SESSION";const fv=dv;/**
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
 */function cT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class al{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new al(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,r)),c=await cT(l);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}al.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class uT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((l,c)=>{const u=Cu("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),l(m.data.response);break;default:clearTimeout(d),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(){return window}function hT(t){Kn().location.href=t}/**
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
 */function pv(){return typeof Kn().WorkerGlobalScope<"u"&&typeof Kn().importScripts=="function"}async function dT(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fT(){return navigator?.serviceWorker?.controller||null}function pT(){return pv()?self:null}/**
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
 */const gv="firebaseLocalStorageDb",gT=1,Da="firebaseLocalStorage",mv="fbase_key";class bo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ll(t,e){return t.transaction([Da],e?"readwrite":"readonly").objectStore(Da)}function mT(){const t=indexedDB.deleteDatabase(gv);return new bo(t).toPromise()}function xc(){const t=indexedDB.open(gv,gT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Da,{keyPath:mv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Da)?e(s):(s.close(),await mT(),e(await xc()))})})}async function qf(t,e,n){const s=ll(t,!0).put({[mv]:e,value:n});return new bo(s).toPromise()}async function vT(t,e){const n=ll(t,!1).get(e),s=await new bo(n).toPromise();return s===void 0?null:s.value}function Qf(t,e){const n=ll(t,!0).delete(e);return new bo(n).toPromise()}const _T=800,yT=3;class vv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>yT)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=al._getInstance(pT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await dT(),!this.activeServiceWorker)return;this.sender=new uT(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xc();return await qf(e,ka,"1"),await Qf(e,ka),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>qf(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>vT(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=ll(i,!1).getAll();return new bo(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_T)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vv.type="LOCAL";const AT=vv;new To(3e4,6e4);/**
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
 */function bu(t,e){return e?gs(e):(ye(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Su extends lv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function IT(t){return nT(t.auth,new Su(t),t.bypassAuthState)}function wT(t){const{auth:e,user:n}=t;return ye(n,e,"internal-error"),tT(n,new Su(t),t.bypassAuthState)}async function ET(t){const{auth:e,user:n}=t;return ye(n,e,"internal-error"),eT(n,new Su(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return IT;case"linkViaPopup":case"linkViaRedirect":return ET;case"reauthViaPopup":case"reauthViaRedirect":return wT;default:ss(this.auth,"internal-error")}}resolve(e){Is(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Is(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=new To(2e3,1e4);async function CT(t,e,n){if(Sn(t.app))return Promise.reject(Ln(t,"operation-not-supported-in-this-environment"));const s=fr(t);Qm(t,e,ol);const i=bu(s,n);return new di(s,"signInViaPopup",e,i).executeNotNull()}class di extends _v{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,di.currentPopupAction&&di.currentPopupAction.cancel(),di.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ye(e,this.auth,"internal-error"),e}async onExecution(){Is(this.filter.length===1,"Popup operations only handle one event");const e=Cu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,di.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ln(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,TT.get())};e()}}di.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT="pendingRedirect",ia=new Map;class ST extends _v{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ia.get(this.auth._key());if(!e){try{const s=await RT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ia.set(this.auth._key(),e)}return this.bypassAuthState||ia.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RT(t,e){const n=Av(e),s=yv(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}async function PT(t,e){return yv(t)._set(Av(e),"true")}function kT(t,e){ia.set(t._key(),e)}function yv(t){return gs(t._redirectPersistence)}function Av(t){return sa(bT,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(t,e,n){return DT(t,e,n)}async function DT(t,e,n){if(Sn(t.app))return Promise.reject(Hs(t));const s=fr(t);Qm(t,e,ol),await s._initializationPromise;const i=bu(s,n);return await PT(i,s),i._openRedirect(s,e,"signInViaRedirect")}async function xT(t,e){return await fr(t)._initializationPromise,Iv(t,e,!1)}async function Iv(t,e,n=!1){if(Sn(t.app))return Promise.reject(Hs(t));const s=fr(t),i=bu(s,e),o=await new ST(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT=600*1e3;class MT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!OT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!wv(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";n.onError(Ln(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=NT&&this.cachedEventUids.clear(),this.cachedEventUids.has(zf(e))}saveEventToCache(e){this.cachedEventUids.add(zf(e)),this.lastProcessedEventTime=Date.now()}}function zf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function wv({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function OT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VT(t,e={}){return dr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,BT=/^https?/;async function FT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await VT(t);for(const n of e)try{if(UT(n))return}catch{}ss(t,"unauthorized-domain")}function UT(t){const e=kc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!BT.test(n))return!1;if(LT.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const $T=new To(3e4,6e4);function Kf(){const t=Kn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function HT(t){return new Promise((e,n)=>{function s(){Kf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Kf(),n(Ln(t,"network-request-failed"))},timeout:$T.get()})}if(Kn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Kn().gapi?.load)s();else{const i=WE("iframefcb");return Kn()[i]=()=>{gapi.load?s():n(Ln(t,"network-request-failed"))},qE(`${QE()}?onload=${i}`).catch(r=>n(r))}}).catch(e=>{throw ra=null,e})}let ra=null;function jT(t){return ra=ra||HT(t),ra}/**
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
 */const GT=new To(5e3,15e3),qT="__/auth/iframe",QT="emulator/auth/iframe",WT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function KT(t){const e=t.config;ye(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Au(e,QT):`https://${t.config.authDomain}/${qT}`,s={apiKey:e.apiKey,appName:t.name,v:hr},i=zT.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Eo(s).slice(1)}`}async function YT(t){const e=await jT(t),n=Kn().gapi;return ye(n,t,"internal-error"),e.open({where:document.body,url:KT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:WT,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Ln(t,"network-request-failed"),l=Kn().setTimeout(()=>{r(o)},GT.get());function c(){Kn().clearTimeout(l),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const JT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},XT=500,ZT=600,eC="_blank",tC="http://localhost";class Yf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nC(t,e,n,s=XT,i=ZT){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const c={...JT,width:s.toString(),height:i.toString(),top:r,left:o},u=rn().toLowerCase();n&&(l=ev(u)?eC:n),Xm(u)&&(e=e||tC,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[v,T])=>`${m}${v}=${T},`,"");if(LE(u)&&l!=="_self")return sC(e||"",l),new Yf(null);const p=window.open(e||"",l,d);ye(p,t,"popup-blocked");try{p.focus()}catch{}return new Yf(p)}function sC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const iC="__/auth/handler",rC="emulator/auth/handler",oC=encodeURIComponent("fac");async function Jf(t,e,n,s,i,r){ye(t.config.authDomain,t,"auth-domain-config-required"),ye(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:hr,eventId:i};if(e instanceof ol){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",n1(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Co){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),u=c?`#${oC}=${encodeURIComponent(c)}`:"";return`${aC(t)}?${Eo(l).slice(1)}${u}`}function aC({config:t}){return t.emulator?Au(t,rC):`https://${t.authDomain}/${iC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec="webStorageSupport";class lC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fv,this._completeRedirectFn=Iv,this._overrideRedirectResult=kT}async _openPopup(e,n,s,i){Is(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const r=await Jf(e,n,s,kc(),i);return nC(e,r,Cu())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Jf(e,n,s,kc(),i);return hT(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Is(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await YT(e),s=new MT(e);return n.register("authEvent",i=>(ye(i?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ec,{type:ec},i=>{const r=i?.[0]?.[ec];r!==void 0&&n(!!r),ss(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=FT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return rv()||Zm()||Eu()}}const cC=lC;var Xf="@firebase/auth",Zf="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ye(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function dC(t){ns(new Fn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=s.options;ye(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ov(t)},u=new jE(s,i,r,c);return KE(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ns(new Fn("auth-internal",e=>{const n=fr(e.getProvider("auth").getImmediate());return(s=>new uC(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xn(Xf,Zf,hC(t)),xn(Xf,Zf,"esm2020")}/**
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
 */const fC=300,pC=xm("authIdTokenMaxAge")||fC;let ep=null;const gC=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>pC)return;const i=n?.token;ep!==i&&(ep=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function mC(t=vu()){const e=bi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=zE(t,{popupRedirectResolver:cC,persistence:[AT,lT,fv]}),s=xm("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=gC(r.toString());iT(n,o,()=>o(n.currentUser)),sT(n,l=>o(l))}}const i=km("auth");return i&&YE(n,`http://${i}`),n}function vC(){return document.getElementsByTagName("head")?.[0]??document}GE({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Ln("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",vC().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});dC("Browser");var tp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var js,Ev;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,I){function C(){}C.prototype=I.prototype,S.F=I.prototype,S.prototype=new C,S.prototype.constructor=S,S.D=function(P,R,N){for(var E=Array(arguments.length-2),st=2;st<arguments.length;st++)E[st-2]=arguments[st];return I.prototype[R].apply(P,E)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,n),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(S,I,C){C||(C=0);const P=Array(16);if(typeof I=="string")for(var R=0;R<16;++R)P[R]=I.charCodeAt(C++)|I.charCodeAt(C++)<<8|I.charCodeAt(C++)<<16|I.charCodeAt(C++)<<24;else for(R=0;R<16;++R)P[R]=I[C++]|I[C++]<<8|I[C++]<<16|I[C++]<<24;I=S.g[0],C=S.g[1],R=S.g[2];let N=S.g[3],E;E=I+(N^C&(R^N))+P[0]+3614090360&4294967295,I=C+(E<<7&4294967295|E>>>25),E=N+(R^I&(C^R))+P[1]+3905402710&4294967295,N=I+(E<<12&4294967295|E>>>20),E=R+(C^N&(I^C))+P[2]+606105819&4294967295,R=N+(E<<17&4294967295|E>>>15),E=C+(I^R&(N^I))+P[3]+3250441966&4294967295,C=R+(E<<22&4294967295|E>>>10),E=I+(N^C&(R^N))+P[4]+4118548399&4294967295,I=C+(E<<7&4294967295|E>>>25),E=N+(R^I&(C^R))+P[5]+1200080426&4294967295,N=I+(E<<12&4294967295|E>>>20),E=R+(C^N&(I^C))+P[6]+2821735955&4294967295,R=N+(E<<17&4294967295|E>>>15),E=C+(I^R&(N^I))+P[7]+4249261313&4294967295,C=R+(E<<22&4294967295|E>>>10),E=I+(N^C&(R^N))+P[8]+1770035416&4294967295,I=C+(E<<7&4294967295|E>>>25),E=N+(R^I&(C^R))+P[9]+2336552879&4294967295,N=I+(E<<12&4294967295|E>>>20),E=R+(C^N&(I^C))+P[10]+4294925233&4294967295,R=N+(E<<17&4294967295|E>>>15),E=C+(I^R&(N^I))+P[11]+2304563134&4294967295,C=R+(E<<22&4294967295|E>>>10),E=I+(N^C&(R^N))+P[12]+1804603682&4294967295,I=C+(E<<7&4294967295|E>>>25),E=N+(R^I&(C^R))+P[13]+4254626195&4294967295,N=I+(E<<12&4294967295|E>>>20),E=R+(C^N&(I^C))+P[14]+2792965006&4294967295,R=N+(E<<17&4294967295|E>>>15),E=C+(I^R&(N^I))+P[15]+1236535329&4294967295,C=R+(E<<22&4294967295|E>>>10),E=I+(R^N&(C^R))+P[1]+4129170786&4294967295,I=C+(E<<5&4294967295|E>>>27),E=N+(C^R&(I^C))+P[6]+3225465664&4294967295,N=I+(E<<9&4294967295|E>>>23),E=R+(I^C&(N^I))+P[11]+643717713&4294967295,R=N+(E<<14&4294967295|E>>>18),E=C+(N^I&(R^N))+P[0]+3921069994&4294967295,C=R+(E<<20&4294967295|E>>>12),E=I+(R^N&(C^R))+P[5]+3593408605&4294967295,I=C+(E<<5&4294967295|E>>>27),E=N+(C^R&(I^C))+P[10]+38016083&4294967295,N=I+(E<<9&4294967295|E>>>23),E=R+(I^C&(N^I))+P[15]+3634488961&4294967295,R=N+(E<<14&4294967295|E>>>18),E=C+(N^I&(R^N))+P[4]+3889429448&4294967295,C=R+(E<<20&4294967295|E>>>12),E=I+(R^N&(C^R))+P[9]+568446438&4294967295,I=C+(E<<5&4294967295|E>>>27),E=N+(C^R&(I^C))+P[14]+3275163606&4294967295,N=I+(E<<9&4294967295|E>>>23),E=R+(I^C&(N^I))+P[3]+4107603335&4294967295,R=N+(E<<14&4294967295|E>>>18),E=C+(N^I&(R^N))+P[8]+1163531501&4294967295,C=R+(E<<20&4294967295|E>>>12),E=I+(R^N&(C^R))+P[13]+2850285829&4294967295,I=C+(E<<5&4294967295|E>>>27),E=N+(C^R&(I^C))+P[2]+4243563512&4294967295,N=I+(E<<9&4294967295|E>>>23),E=R+(I^C&(N^I))+P[7]+1735328473&4294967295,R=N+(E<<14&4294967295|E>>>18),E=C+(N^I&(R^N))+P[12]+2368359562&4294967295,C=R+(E<<20&4294967295|E>>>12),E=I+(C^R^N)+P[5]+4294588738&4294967295,I=C+(E<<4&4294967295|E>>>28),E=N+(I^C^R)+P[8]+2272392833&4294967295,N=I+(E<<11&4294967295|E>>>21),E=R+(N^I^C)+P[11]+1839030562&4294967295,R=N+(E<<16&4294967295|E>>>16),E=C+(R^N^I)+P[14]+4259657740&4294967295,C=R+(E<<23&4294967295|E>>>9),E=I+(C^R^N)+P[1]+2763975236&4294967295,I=C+(E<<4&4294967295|E>>>28),E=N+(I^C^R)+P[4]+1272893353&4294967295,N=I+(E<<11&4294967295|E>>>21),E=R+(N^I^C)+P[7]+4139469664&4294967295,R=N+(E<<16&4294967295|E>>>16),E=C+(R^N^I)+P[10]+3200236656&4294967295,C=R+(E<<23&4294967295|E>>>9),E=I+(C^R^N)+P[13]+681279174&4294967295,I=C+(E<<4&4294967295|E>>>28),E=N+(I^C^R)+P[0]+3936430074&4294967295,N=I+(E<<11&4294967295|E>>>21),E=R+(N^I^C)+P[3]+3572445317&4294967295,R=N+(E<<16&4294967295|E>>>16),E=C+(R^N^I)+P[6]+76029189&4294967295,C=R+(E<<23&4294967295|E>>>9),E=I+(C^R^N)+P[9]+3654602809&4294967295,I=C+(E<<4&4294967295|E>>>28),E=N+(I^C^R)+P[12]+3873151461&4294967295,N=I+(E<<11&4294967295|E>>>21),E=R+(N^I^C)+P[15]+530742520&4294967295,R=N+(E<<16&4294967295|E>>>16),E=C+(R^N^I)+P[2]+3299628645&4294967295,C=R+(E<<23&4294967295|E>>>9),E=I+(R^(C|~N))+P[0]+4096336452&4294967295,I=C+(E<<6&4294967295|E>>>26),E=N+(C^(I|~R))+P[7]+1126891415&4294967295,N=I+(E<<10&4294967295|E>>>22),E=R+(I^(N|~C))+P[14]+2878612391&4294967295,R=N+(E<<15&4294967295|E>>>17),E=C+(N^(R|~I))+P[5]+4237533241&4294967295,C=R+(E<<21&4294967295|E>>>11),E=I+(R^(C|~N))+P[12]+1700485571&4294967295,I=C+(E<<6&4294967295|E>>>26),E=N+(C^(I|~R))+P[3]+2399980690&4294967295,N=I+(E<<10&4294967295|E>>>22),E=R+(I^(N|~C))+P[10]+4293915773&4294967295,R=N+(E<<15&4294967295|E>>>17),E=C+(N^(R|~I))+P[1]+2240044497&4294967295,C=R+(E<<21&4294967295|E>>>11),E=I+(R^(C|~N))+P[8]+1873313359&4294967295,I=C+(E<<6&4294967295|E>>>26),E=N+(C^(I|~R))+P[15]+4264355552&4294967295,N=I+(E<<10&4294967295|E>>>22),E=R+(I^(N|~C))+P[6]+2734768916&4294967295,R=N+(E<<15&4294967295|E>>>17),E=C+(N^(R|~I))+P[13]+1309151649&4294967295,C=R+(E<<21&4294967295|E>>>11),E=I+(R^(C|~N))+P[4]+4149444226&4294967295,I=C+(E<<6&4294967295|E>>>26),E=N+(C^(I|~R))+P[11]+3174756917&4294967295,N=I+(E<<10&4294967295|E>>>22),E=R+(I^(N|~C))+P[2]+718787259&4294967295,R=N+(E<<15&4294967295|E>>>17),E=C+(N^(R|~I))+P[9]+3951481745&4294967295,S.g[0]=S.g[0]+I&4294967295,S.g[1]=S.g[1]+(R+(E<<21&4294967295|E>>>11))&4294967295,S.g[2]=S.g[2]+R&4294967295,S.g[3]=S.g[3]+N&4294967295}s.prototype.v=function(S,I){I===void 0&&(I=S.length);const C=I-this.blockSize,P=this.C;let R=this.h,N=0;for(;N<I;){if(R==0)for(;N<=C;)i(this,S,N),N+=this.blockSize;if(typeof S=="string"){for(;N<I;)if(P[R++]=S.charCodeAt(N++),R==this.blockSize){i(this,P),R=0;break}}else for(;N<I;)if(P[R++]=S[N++],R==this.blockSize){i(this,P),R=0;break}}this.h=R,this.o+=I},s.prototype.A=function(){var S=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);S[0]=128;for(var I=1;I<S.length-8;++I)S[I]=0;I=this.o*8;for(var C=S.length-8;C<S.length;++C)S[C]=I&255,I/=256;for(this.v(S),S=Array(16),I=0,C=0;C<4;++C)for(let P=0;P<32;P+=8)S[I++]=this.g[C]>>>P&255;return S};function r(S,I){var C=l;return Object.prototype.hasOwnProperty.call(C,S)?C[S]:C[S]=I(S)}function o(S,I){this.h=I;const C=[];let P=!0;for(let R=S.length-1;R>=0;R--){const N=S[R]|0;P&&N==I||(C[R]=N,P=!1)}this.g=C}var l={};function c(S){return-128<=S&&S<128?r(S,function(I){return new o([I|0],I<0?-1:0)}):new o([S|0],S<0?-1:0)}function u(S){if(isNaN(S)||!isFinite(S))return p;if(S<0)return y(u(-S));const I=[];let C=1;for(let P=0;S>=C;P++)I[P]=S/C|0,C*=4294967296;return new o(I,0)}function d(S,I){if(S.length==0)throw Error("number format error: empty string");if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(S.charAt(0)=="-")return y(d(S.substring(1),I));if(S.indexOf("-")>=0)throw Error('number format error: interior "-" character');const C=u(Math.pow(I,8));let P=p;for(let N=0;N<S.length;N+=8){var R=Math.min(8,S.length-N);const E=parseInt(S.substring(N,N+R),I);R<8?(R=u(Math.pow(I,R)),P=P.j(R).add(u(E))):(P=P.j(C),P=P.add(u(E)))}return P}var p=c(0),m=c(1),v=c(16777216);t=o.prototype,t.m=function(){if(w(this))return-y(this).m();let S=0,I=1;for(let C=0;C<this.g.length;C++){const P=this.i(C);S+=(P>=0?P:4294967296+P)*I,I*=4294967296}return S},t.toString=function(S){if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(T(this))return"0";if(w(this))return"-"+y(this).toString(S);const I=u(Math.pow(S,6));var C=this;let P="";for(;;){const R=j(C,I).g;C=k(C,R.j(I));let N=((C.g.length>0?C.g[0]:C.h)>>>0).toString(S);if(C=R,T(C))return N+P;for(;N.length<6;)N="0"+N;P=N+P}},t.i=function(S){return S<0?0:S<this.g.length?this.g[S]:this.h};function T(S){if(S.h!=0)return!1;for(let I=0;I<S.g.length;I++)if(S.g[I]!=0)return!1;return!0}function w(S){return S.h==-1}t.l=function(S){return S=k(this,S),w(S)?-1:T(S)?0:1};function y(S){const I=S.g.length,C=[];for(let P=0;P<I;P++)C[P]=~S.g[P];return new o(C,~S.h).add(m)}t.abs=function(){return w(this)?y(this):this},t.add=function(S){const I=Math.max(this.g.length,S.g.length),C=[];let P=0;for(let R=0;R<=I;R++){let N=P+(this.i(R)&65535)+(S.i(R)&65535),E=(N>>>16)+(this.i(R)>>>16)+(S.i(R)>>>16);P=E>>>16,N&=65535,E&=65535,C[R]=E<<16|N}return new o(C,C[C.length-1]&-2147483648?-1:0)};function k(S,I){return S.add(y(I))}t.j=function(S){if(T(this)||T(S))return p;if(w(this))return w(S)?y(this).j(y(S)):y(y(this).j(S));if(w(S))return y(this.j(y(S)));if(this.l(v)<0&&S.l(v)<0)return u(this.m()*S.m());const I=this.g.length+S.g.length,C=[];for(var P=0;P<2*I;P++)C[P]=0;for(P=0;P<this.g.length;P++)for(let R=0;R<S.g.length;R++){const N=this.i(P)>>>16,E=this.i(P)&65535,st=S.i(R)>>>16,_t=S.i(R)&65535;C[2*P+2*R]+=E*_t,F(C,2*P+2*R),C[2*P+2*R+1]+=N*_t,F(C,2*P+2*R+1),C[2*P+2*R+1]+=E*st,F(C,2*P+2*R+1),C[2*P+2*R+2]+=N*st,F(C,2*P+2*R+2)}for(S=0;S<I;S++)C[S]=C[2*S+1]<<16|C[2*S];for(S=I;S<2*I;S++)C[S]=0;return new o(C,0)};function F(S,I){for(;(S[I]&65535)!=S[I];)S[I+1]+=S[I]>>>16,S[I]&=65535,I++}function U(S,I){this.g=S,this.h=I}function j(S,I){if(T(I))throw Error("division by zero");if(T(S))return new U(p,p);if(w(S))return I=j(y(S),I),new U(y(I.g),y(I.h));if(w(I))return I=j(S,y(I)),new U(y(I.g),I.h);if(S.g.length>30){if(w(S)||w(I))throw Error("slowDivide_ only works with positive integers.");for(var C=m,P=I;P.l(S)<=0;)C=se(C),P=se(P);var R=Ie(C,1),N=Ie(P,1);for(P=Ie(P,2),C=Ie(C,2);!T(P);){var E=N.add(P);E.l(S)<=0&&(R=R.add(C),N=E),P=Ie(P,1),C=Ie(C,1)}return I=k(S,R.j(I)),new U(R,I)}for(R=p;S.l(I)>=0;){for(C=Math.max(1,Math.floor(S.m()/I.m())),P=Math.ceil(Math.log(C)/Math.LN2),P=P<=48?1:Math.pow(2,P-48),N=u(C),E=N.j(I);w(E)||E.l(S)>0;)C-=P,N=u(C),E=N.j(I);T(N)&&(N=m),R=R.add(N),S=k(S,E)}return new U(R,S)}t.B=function(S){return j(this,S).h},t.and=function(S){const I=Math.max(this.g.length,S.g.length),C=[];for(let P=0;P<I;P++)C[P]=this.i(P)&S.i(P);return new o(C,this.h&S.h)},t.or=function(S){const I=Math.max(this.g.length,S.g.length),C=[];for(let P=0;P<I;P++)C[P]=this.i(P)|S.i(P);return new o(C,this.h|S.h)},t.xor=function(S){const I=Math.max(this.g.length,S.g.length),C=[];for(let P=0;P<I;P++)C[P]=this.i(P)^S.i(P);return new o(C,this.h^S.h)};function se(S){const I=S.g.length+1,C=[];for(let P=0;P<I;P++)C[P]=S.i(P)<<1|S.i(P-1)>>>31;return new o(C,S.h)}function Ie(S,I){const C=I>>5;I%=32;const P=S.g.length-C,R=[];for(let N=0;N<P;N++)R[N]=I>0?S.i(N+C)>>>I|S.i(N+C+1)<<32-I:S.i(N+C);return new o(R,S.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,Ev=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,js=o}).apply(typeof tp<"u"?tp:typeof self<"u"?self:typeof window<"u"?window:{});var Qo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tv,Mr,Cv,oa,Nc,bv,Sv,Rv;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qo=="object"&&Qo];for(var f=0;f<a.length;++f){var g=a[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=n(this);function i(a,f){if(f)e:{var g=s;a=a.split(".");for(var _=0;_<a.length-1;_++){var L=a[_];if(!(L in g))break e;g=g[L]}a=a[a.length-1],_=g[a],f=f(_),f!=_&&f!=null&&e(g,a,{configurable:!0,writable:!0,value:f})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(f){var g=[],_;for(_ in f)Object.prototype.hasOwnProperty.call(f,_)&&g.push([_,f[_]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var r=r||{},o=this||self;function l(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function c(a,f,g){return a.call.apply(a.bind,arguments)}function u(a,f,g){return u=c,u.apply(null,arguments)}function d(a,f){var g=Array.prototype.slice.call(arguments,1);return function(){var _=g.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function p(a,f){function g(){}g.prototype=f.prototype,a.Z=f.prototype,a.prototype=new g,a.prototype.constructor=a,a.Ob=function(_,L,$){for(var ne=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)ne[Pe-2]=arguments[Pe];return f.prototype[L].apply(_,ne)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function v(a){const f=a.length;if(f>0){const g=Array(f);for(let _=0;_<f;_++)g[_]=a[_];return g}return[]}function T(a,f){for(let _=1;_<arguments.length;_++){const L=arguments[_];var g=typeof L;if(g=g!="object"?g:L?Array.isArray(L)?"array":g:"null",g=="array"||g=="object"&&typeof L.length=="number"){g=a.length||0;const $=L.length||0;a.length=g+$;for(let ne=0;ne<$;ne++)a[g+ne]=L[ne]}else a.push(L)}}class w{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return this.h>0?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function y(a){o.setTimeout(()=>{throw a},0)}function k(){var a=S;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class F{constructor(){this.h=this.g=null}add(f,g){const _=U.get();_.set(f,g),this.h?this.h.next=_:this.g=_,this.h=_}}var U=new w(()=>new j,a=>a.reset());class j{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let se,Ie=!1,S=new F,I=()=>{const a=Promise.resolve(void 0);se=()=>{a.then(C)}};function C(){for(var a;a=k();){try{a.h.call(a.g)}catch(g){y(g)}var f=U;f.j(a),f.h<100&&(f.h++,a.next=f.g,f.g=a)}Ie=!1}function P(){this.u=this.u,this.C=this.C}P.prototype.u=!1,P.prototype.dispose=function(){this.u||(this.u=!0,this.N())},P.prototype[Symbol.dispose]=function(){this.dispose()},P.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function R(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var N=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const g=()=>{};o.addEventListener("test",g,f),o.removeEventListener("test",g,f)}catch{}return a})();function E(a){return/^[\s\xa0]*$/.test(a)}function st(a,f){R.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,f)}p(st,R),st.prototype.init=function(a,f){const g=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget,f||(g=="mouseover"?f=a.fromElement:g=="mouseout"&&(f=a.toElement)),this.relatedTarget=f,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&st.Z.h.call(this)},st.prototype.h=function(){st.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var _t="closure_listenable_"+(Math.random()*1e6|0),it=0;function Ce(a,f,g,_,L){this.listener=a,this.proxy=null,this.src=f,this.type=g,this.capture=!!_,this.ha=L,this.key=++it,this.da=this.fa=!1}function be(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function kt(a,f,g){for(const _ in a)f.call(g,a[_],_,a)}function Kt(a,f){for(const g in a)f.call(void 0,a[g],g,a)}function Lt(a){const f={};for(const g in a)f[g]=a[g];return f}const rt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Cn(a,f){let g,_;for(let L=1;L<arguments.length;L++){_=arguments[L];for(g in _)a[g]=_[g];for(let $=0;$<rt.length;$++)g=rt[$],Object.prototype.hasOwnProperty.call(_,g)&&(a[g]=_[g])}}function gn(a){this.src=a,this.g={},this.h=0}gn.prototype.add=function(a,f,g,_,L){const $=a.toString();a=this.g[$],a||(a=this.g[$]=[],this.h++);const ne=ot(a,f,_,L);return ne>-1?(f=a[ne],g||(f.fa=!1)):(f=new Ce(f,this.src,$,!!_,L),f.fa=g,a.push(f)),f};function Yt(a,f){const g=f.type;if(g in a.g){var _=a.g[g],L=Array.prototype.indexOf.call(_,f,void 0),$;($=L>=0)&&Array.prototype.splice.call(_,L,1),$&&(be(f),a.g[g].length==0&&(delete a.g[g],a.h--))}}function ot(a,f,g,_){for(let L=0;L<a.length;++L){const $=a[L];if(!$.da&&$.listener==f&&$.capture==!!g&&$.ha==_)return L}return-1}var q="closure_lm_"+(Math.random()*1e6|0),ae={};function te(a,f,g,_,L){if(Array.isArray(f)){for(let $=0;$<f.length;$++)te(a,f[$],g,_,L);return null}return g=ee(g),a&&a[_t]?a.J(f,g,l(_)?!!_.capture:!1,L):ue(a,f,g,!1,_,L)}function ue(a,f,g,_,L,$){if(!f)throw Error("Invalid event type");const ne=l(L)?!!L.capture:!!L;let Pe=K(a);if(Pe||(a[q]=Pe=new gn(a)),g=Pe.add(f,g,_,ne,$),g.proxy)return g;if(_=xe(),g.proxy=_,_.src=a,_.listener=g,a.addEventListener)N||(L=ne),L===void 0&&(L=!1),a.addEventListener(f.toString(),_,L);else if(a.attachEvent)a.attachEvent(M(f.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return g}function xe(){function a(g){return f.call(a.src,a.listener,g)}const f=Q;return a}function A(a,f,g,_,L){if(Array.isArray(f))for(var $=0;$<f.length;$++)A(a,f[$],g,_,L);else _=l(_)?!!_.capture:!!_,g=ee(g),a&&a[_t]?(a=a.i,$=String(f).toString(),$ in a.g&&(f=a.g[$],g=ot(f,g,_,L),g>-1&&(be(f[g]),Array.prototype.splice.call(f,g,1),f.length==0&&(delete a.g[$],a.h--)))):a&&(a=K(a))&&(f=a.g[f.toString()],a=-1,f&&(a=ot(f,g,_,L)),(g=a>-1?f[a]:null)&&b(g))}function b(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[_t])Yt(f.i,a);else{var g=a.type,_=a.proxy;f.removeEventListener?f.removeEventListener(g,_,a.capture):f.detachEvent?f.detachEvent(M(g),_):f.addListener&&f.removeListener&&f.removeListener(_),(g=K(f))?(Yt(g,a),g.h==0&&(g.src=null,f[q]=null)):be(a)}}}function M(a){return a in ae?ae[a]:ae[a]="on"+a}function Q(a,f){if(a.da)a=!0;else{f=new st(f,this);const g=a.listener,_=a.ha||a.src;a.fa&&b(a),a=g.call(_,f)}return a}function K(a){return a=a[q],a instanceof gn?a:null}var W="__closure_events_fn_"+(Math.random()*1e9>>>0);function ee(a){return typeof a=="function"?a:(a[W]||(a[W]=function(f){return a.handleEvent(f)}),a[W])}function J(){P.call(this),this.i=new gn(this),this.M=this,this.G=null}p(J,P),J.prototype[_t]=!0,J.prototype.removeEventListener=function(a,f,g,_){A(this,a,f,g,_)};function z(a,f){var g,_=a.G;if(_)for(g=[];_;_=_.G)g.push(_);if(a=a.M,_=f.type||f,typeof f=="string")f=new R(f,a);else if(f instanceof R)f.target=f.target||a;else{var L=f;f=new R(_,a),Cn(f,L)}L=!0;let $,ne;if(g)for(ne=g.length-1;ne>=0;ne--)$=f.g=g[ne],L=Z($,_,!0,f)&&L;if($=f.g=a,L=Z($,_,!0,f)&&L,L=Z($,_,!1,f)&&L,g)for(ne=0;ne<g.length;ne++)$=f.g=g[ne],L=Z($,_,!1,f)&&L}J.prototype.N=function(){if(J.Z.N.call(this),this.i){var a=this.i;for(const f in a.g){const g=a.g[f];for(let _=0;_<g.length;_++)be(g[_]);delete a.g[f],a.h--}}this.G=null},J.prototype.J=function(a,f,g,_){return this.i.add(String(a),f,!1,g,_)},J.prototype.K=function(a,f,g,_){return this.i.add(String(a),f,!0,g,_)};function Z(a,f,g,_){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();let L=!0;for(let $=0;$<f.length;++$){const ne=f[$];if(ne&&!ne.da&&ne.capture==g){const Pe=ne.listener,xt=ne.ha||ne.src;ne.fa&&Yt(a.i,ne),L=Pe.call(xt,_)!==!1&&L}}return L&&!_.defaultPrevented}function ge(a,f){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(f)>2147483647?-1:o.setTimeout(a,f||0)}function oe(a){a.g=ge(()=>{a.g=null,a.i&&(a.i=!1,oe(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class de extends P{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:oe(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pe(a){P.call(this),this.h=a,this.g={}}p(pe,P);var ke=[];function Ge(a){kt(a.g,function(f,g){this.g.hasOwnProperty(g)&&b(f)},a),a.g={}}pe.prototype.N=function(){pe.Z.N.call(this),Ge(this)},pe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ne=o.JSON.stringify,$e=o.JSON.parse,He=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function qe(){}function Ye(){}var wt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Et(){R.call(this,"d")}p(Et,R);function Fe(){R.call(this,"c")}p(Fe,R);var yt={},ti=null;function G(){return ti=ti||new J}yt.Ia="serverreachability";function D(a){R.call(this,yt.Ia,a)}p(D,R);function H(a){const f=G();z(f,new D(f))}yt.STAT_EVENT="statevent";function ie(a,f){R.call(this,yt.STAT_EVENT,a),this.stat=f}p(ie,R);function le(a){const f=G();z(f,new ie(f,a))}yt.Ja="timingevent";function re(a,f){R.call(this,yt.Ja,a),this.size=f}p(re,R);function De(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},f)}function Be(){this.g=!0}Be.prototype.ua=function(){this.g=!1};function at(a,f,g,_,L,$){a.info(function(){if(a.g)if($){var ne="",Pe=$.split("&");for(let et=0;et<Pe.length;et++){var xt=Pe[et].split("=");if(xt.length>1){const Ft=xt[0];xt=xt[1];const Hn=Ft.split("_");ne=Hn.length>=2&&Hn[1]=="type"?ne+(Ft+"="+xt+"&"):ne+(Ft+"=redacted&")}}}else ne=null;else ne=$;return"XMLHTTP REQ ("+_+") [attempt "+L+"]: "+f+`
`+g+`
`+ne})}function on(a,f,g,_,L,$,ne){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+L+"]: "+f+`
`+g+`
`+$+" "+ne})}function Ze(a,f,g,_){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+jt(a,g)+(_?" "+_:"")})}function Ht(a,f){a.info(function(){return"TIMEOUT: "+f})}Be.prototype.info=function(){};function jt(a,f){if(!a.g)return f;if(!f)return null;try{const $=JSON.parse(f);if($){for(a=0;a<$.length;a++)if(Array.isArray($[a])){var g=$[a];if(!(g.length<2)){var _=g[1];if(Array.isArray(_)&&!(_.length<1)){var L=_[0];if(L!="noop"&&L!="stop"&&L!="close")for(let ne=1;ne<_.length;ne++)_[ne]=""}}}}return Ne($)}catch{return f}}var Me={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},At={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},yn;function Bt(){}p(Bt,qe),Bt.prototype.g=function(){return new XMLHttpRequest},yn=new Bt;function lt(a){return encodeURIComponent(String(a))}function ct(a){var f=1;a=a.split(":");const g=[];for(;f>0&&a.length;)g.push(a.shift()),f--;return a.length&&g.push(a.join(":")),g}function Je(a,f,g,_){this.j=a,this.i=f,this.l=g,this.S=_||1,this.V=new pe(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Dt}function Dt(){this.i=null,this.g="",this.h=!1}var an={},ni={};function Di(a,f,g){a.M=1,a.A=No($n(f)),a.u=g,a.R=!0,_r(a,null)}function _r(a,f){a.F=Date.now(),xo(a),a.B=$n(a.A);var g=a.B,_=a.S;Array.isArray(_)||(_=[String(_)]),ad(g.i,"t",_),a.C=0,g=a.j.L,a.h=new Dt,a.g=Cd(a.j,g?f:null,!a.u),a.P>0&&(a.O=new de(u(a.Y,a,a.g),a.P)),f=a.V,g=a.g,_=a.ba;var L="readystatechange";Array.isArray(L)||(L&&(ke[0]=L.toString()),L=ke);for(let $=0;$<L.length;$++){const ne=te(g,L[$],_||f.handleEvent,!1,f.h||f);if(!ne)break;f.g[ne.key]=ne}f=a.J?Lt(a.J):{},a.u?(a.v||(a.v="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,f)):(a.v="GET",a.g.ea(a.B,a.v,null,f)),H(),at(a.i,a.v,a.B,a.l,a.S,a.u)}Je.prototype.ba=function(a){a=a.target;const f=this.O;f&&Ss(a)==3?f.j():this.Y(a)},Je.prototype.Y=function(a){try{if(a==this.g)e:{const Pe=Ss(this.g),xt=this.g.ya(),et=this.g.ca();if(!(Pe<3)&&(Pe!=3||this.g&&(this.h.h||this.g.la()||pd(this.g)))){this.K||Pe!=4||xt==7||(xt==8||et<=0?H(3):H(2)),Tl(this);var f=this.g.ca();this.X=f;var g=El(this);if(this.o=f==200,on(this.i,this.v,this.B,this.l,this.S,Pe,f),this.o){if(this.U&&!this.L){t:{if(this.g){var _,L=this.g;if((_=L.g?L.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(_)){var $=_;break t}}$=null}if(a=$)Ze(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Cl(this,a);else{this.o=!1,this.m=3,le(12),si(this),yr(this);break e}}if(this.R){a=!0;let Ft;for(;!this.K&&this.C<g.length;)if(Ft=Py(this,g),Ft==ni){Pe==4&&(this.m=4,le(14),a=!1),Ze(this.i,this.l,null,"[Incomplete Response]");break}else if(Ft==an){this.m=4,le(15),Ze(this.i,this.l,g,"[Invalid Chunk]"),a=!1;break}else Ze(this.i,this.l,Ft,null),Cl(this,Ft);if(Kh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Pe!=4||g.length!=0||this.h.h||(this.m=1,le(16),a=!1),this.o=this.o&&a,!a)Ze(this.i,this.l,g,"[Invalid Chunked Response]"),si(this),yr(this);else if(g.length>0&&!this.W){this.W=!0;var ne=this.j;ne.g==this&&ne.aa&&!ne.P&&(ne.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),Nl(ne),ne.P=!0,le(11))}}else Ze(this.i,this.l,g,null),Cl(this,g);Pe==4&&si(this),this.o&&!this.K&&(Pe==4?Id(this.j,this):(this.o=!1,xo(this)))}else jy(this.g),f==400&&g.indexOf("Unknown SID")>0?(this.m=3,le(12)):(this.m=0,le(13)),si(this),yr(this)}}}catch{}finally{}};function El(a){if(!Kh(a))return a.g.la();const f=pd(a.g);if(f==="")return"";let g="";const _=f.length,L=Ss(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return si(a),yr(a),"";a.h.i=new o.TextDecoder}for(let $=0;$<_;$++)a.h.h=!0,g+=a.h.i.decode(f[$],{stream:!(L&&$==_-1)});return f.length=0,a.h.g+=g,a.C=0,a.h.g}function Kh(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Py(a,f){var g=a.C,_=f.indexOf(`
`,g);return _==-1?ni:(g=Number(f.substring(g,_)),isNaN(g)?an:(_+=1,_+g>f.length?ni:(f=f.slice(_,_+g),a.C=_+g,f)))}Je.prototype.cancel=function(){this.K=!0,si(this)};function xo(a){a.T=Date.now()+a.H,Yh(a,a.H)}function Yh(a,f){if(a.D!=null)throw Error("WatchDog timer not null");a.D=De(u(a.aa,a),f)}function Tl(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Je.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Ht(this.i,this.B),this.M!=2&&(H(),le(17)),si(this),this.m=2,yr(this)):Yh(this,this.T-a)};function yr(a){a.j.I==0||a.K||Id(a.j,a)}function si(a){Tl(a);var f=a.O;f&&typeof f.dispose=="function"&&f.dispose(),a.O=null,Ge(a.V),a.g&&(f=a.g,a.g=null,f.abort(),f.dispose())}function Cl(a,f){try{var g=a.j;if(g.I!=0&&(g.g==a||bl(g.h,a))){if(!a.L&&bl(g.h,a)&&g.I==3){try{var _=g.Ba.g.parse(f)}catch{_=null}if(Array.isArray(_)&&_.length==3){var L=_;if(L[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<a.F)Bo(g),Vo(g);else break e;xl(g),le(18)}}else g.xa=L[1],0<g.xa-g.K&&L[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=De(u(g.Va,g),6e3));Zh(g.h)<=1&&g.ta&&(g.ta=void 0)}else ri(g,11)}else if((a.L||g.g==a)&&Bo(g),!E(f))for(L=g.Ba.g.parse(f),f=0;f<L.length;f++){let et=L[f];const Ft=et[0];if(!(Ft<=g.K))if(g.K=Ft,et=et[1],g.I==2)if(et[0]=="c"){g.M=et[1],g.ba=et[2];const Hn=et[3];Hn!=null&&(g.ka=Hn,g.j.info("VER="+g.ka));const oi=et[4];oi!=null&&(g.za=oi,g.j.info("SVER="+g.za));const Rs=et[5];Rs!=null&&typeof Rs=="number"&&Rs>0&&(_=1.5*Rs,g.O=_,g.j.info("backChannelRequestTimeoutMs_="+_)),_=g;const Ps=a.g;if(Ps){const Uo=Ps.g?Ps.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Uo){var $=_.h;$.g||Uo.indexOf("spdy")==-1&&Uo.indexOf("quic")==-1&&Uo.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(Sl($,$.h),$.h=null))}if(_.G){const Ml=Ps.g?Ps.g.getResponseHeader("X-HTTP-Session-Id"):null;Ml&&(_.wa=Ml,dt(_.J,_.G,Ml))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-a.F,g.j.info("Handshake RTT: "+g.T+"ms")),_=g;var ne=a;if(_.na=Td(_,_.L?_.ba:null,_.W),ne.L){ed(_.h,ne);var Pe=ne,xt=_.O;xt&&(Pe.H=xt),Pe.D&&(Tl(Pe),xo(Pe)),_.g=ne}else yd(_);g.i.length>0&&Lo(g)}else et[0]!="stop"&&et[0]!="close"||ri(g,7);else g.I==3&&(et[0]=="stop"||et[0]=="close"?et[0]=="stop"?ri(g,7):Dl(g):et[0]!="noop"&&g.l&&g.l.qa(et),g.A=0)}}H(4)}catch{}}var ky=class{constructor(a,f){this.g=a,this.map=f}};function Jh(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Xh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Zh(a){return a.h?1:a.g?a.g.size:0}function bl(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function Sl(a,f){a.g?a.g.add(f):a.h=f}function ed(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}Jh.prototype.cancel=function(){if(this.i=td(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function td(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const g of a.g.values())f=f.concat(g.G);return f}return v(a.i)}var nd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Dy(a,f){if(a){a=a.split("&");for(let g=0;g<a.length;g++){const _=a[g].indexOf("=");let L,$=null;_>=0?(L=a[g].substring(0,_),$=a[g].substring(_+1)):L=a[g],f(L,$?decodeURIComponent($.replace(/\+/g," ")):"")}}}function Cs(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let f;a instanceof Cs?(this.l=a.l,Ar(this,a.j),this.o=a.o,this.g=a.g,Ir(this,a.u),this.h=a.h,Rl(this,ld(a.i)),this.m=a.m):a&&(f=String(a).match(nd))?(this.l=!1,Ar(this,f[1]||"",!0),this.o=wr(f[2]||""),this.g=wr(f[3]||"",!0),Ir(this,f[4]),this.h=wr(f[5]||"",!0),Rl(this,f[6]||"",!0),this.m=wr(f[7]||"")):(this.l=!1,this.i=new Tr(null,this.l))}Cs.prototype.toString=function(){const a=[];var f=this.j;f&&a.push(Er(f,sd,!0),":");var g=this.g;return(g||f=="file")&&(a.push("//"),(f=this.o)&&a.push(Er(f,sd,!0),"@"),a.push(lt(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&a.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&a.push("/"),a.push(Er(g,g.charAt(0)=="/"?My:Ny,!0))),(g=this.i.toString())&&a.push("?",g),(g=this.m)&&a.push("#",Er(g,Vy)),a.join("")},Cs.prototype.resolve=function(a){const f=$n(this);let g=!!a.j;g?Ar(f,a.j):g=!!a.o,g?f.o=a.o:g=!!a.g,g?f.g=a.g:g=a.u!=null;var _=a.h;if(g)Ir(f,a.u);else if(g=!!a.h){if(_.charAt(0)!="/")if(this.g&&!this.h)_="/"+_;else{var L=f.h.lastIndexOf("/");L!=-1&&(_=f.h.slice(0,L+1)+_)}if(L=_,L==".."||L==".")_="";else if(L.indexOf("./")!=-1||L.indexOf("/.")!=-1){_=L.lastIndexOf("/",0)==0,L=L.split("/");const $=[];for(let ne=0;ne<L.length;){const Pe=L[ne++];Pe=="."?_&&ne==L.length&&$.push(""):Pe==".."?(($.length>1||$.length==1&&$[0]!="")&&$.pop(),_&&ne==L.length&&$.push("")):($.push(Pe),_=!0)}_=$.join("/")}else _=L}return g?f.h=_:g=a.i.toString()!=="",g?Rl(f,ld(a.i)):g=!!a.m,g&&(f.m=a.m),f};function $n(a){return new Cs(a)}function Ar(a,f,g){a.j=g?wr(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function Ir(a,f){if(f){if(f=Number(f),isNaN(f)||f<0)throw Error("Bad port number "+f);a.u=f}else a.u=null}function Rl(a,f,g){f instanceof Tr?(a.i=f,Ly(a.i,a.l)):(g||(f=Er(f,Oy)),a.i=new Tr(f,a.l))}function dt(a,f,g){a.i.set(f,g)}function No(a){return dt(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function wr(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Er(a,f,g){return typeof a=="string"?(a=encodeURI(a).replace(f,xy),g&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function xy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var sd=/[#\/\?@]/g,Ny=/[#\?:]/g,My=/[#\?]/g,Oy=/[#\?@]/g,Vy=/#/g;function Tr(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function ii(a){a.g||(a.g=new Map,a.h=0,a.i&&Dy(a.i,function(f,g){a.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}t=Tr.prototype,t.add=function(a,f){ii(this),this.i=null,a=xi(this,a);let g=this.g.get(a);return g||this.g.set(a,g=[]),g.push(f),this.h+=1,this};function id(a,f){ii(a),f=xi(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function rd(a,f){return ii(a),f=xi(a,f),a.g.has(f)}t.forEach=function(a,f){ii(this),this.g.forEach(function(g,_){g.forEach(function(L){a.call(f,L,_,this)},this)},this)};function od(a,f){ii(a);let g=[];if(typeof f=="string")rd(a,f)&&(g=g.concat(a.g.get(xi(a,f))));else for(a=Array.from(a.g.values()),f=0;f<a.length;f++)g=g.concat(a[f]);return g}t.set=function(a,f){return ii(this),this.i=null,a=xi(this,a),rd(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},t.get=function(a,f){return a?(a=od(this,a),a.length>0?String(a[0]):f):f};function ad(a,f,g){id(a,f),g.length>0&&(a.i=null,a.g.set(xi(a,f),v(g)),a.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(let _=0;_<f.length;_++){var g=f[_];const L=lt(g);g=od(this,g);for(let $=0;$<g.length;$++){let ne=L;g[$]!==""&&(ne+="="+lt(g[$])),a.push(ne)}}return this.i=a.join("&")};function ld(a){const f=new Tr;return f.i=a.i,a.g&&(f.g=new Map(a.g),f.h=a.h),f}function xi(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function Ly(a,f){f&&!a.j&&(ii(a),a.i=null,a.g.forEach(function(g,_){const L=_.toLowerCase();_!=L&&(id(this,_),ad(this,L,g))},a)),a.j=f}function By(a,f){const g=new Be;if(o.Image){const _=new Image;_.onload=d(bs,g,"TestLoadImage: loaded",!0,f,_),_.onerror=d(bs,g,"TestLoadImage: error",!1,f,_),_.onabort=d(bs,g,"TestLoadImage: abort",!1,f,_),_.ontimeout=d(bs,g,"TestLoadImage: timeout",!1,f,_),o.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else f(!1)}function Fy(a,f){const g=new Be,_=new AbortController,L=setTimeout(()=>{_.abort(),bs(g,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:_.signal}).then($=>{clearTimeout(L),$.ok?bs(g,"TestPingServer: ok",!0,f):bs(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),bs(g,"TestPingServer: error",!1,f)})}function bs(a,f,g,_,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),_(g)}catch{}}function Uy(){this.g=new He}function Pl(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Pl,qe),Pl.prototype.g=function(){return new Mo(this.i,this.h)};function Mo(a,f){J.call(this),this.H=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Mo,J),t=Mo.prototype,t.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=f,this.readyState=1,br(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const f={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(f.body=a),(this.H||o).fetch(new Request(this.D,f)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Cr(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,br(this)),this.g&&(this.readyState=3,br(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;cd(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function cd(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.B.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?Cr(this):br(this),this.readyState==3&&cd(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Cr(this))},t.Na=function(a){this.g&&(this.response=a,Cr(this))},t.ga=function(){this.g&&Cr(this)};function Cr(a){a.readyState=4,a.l=null,a.j=null,a.B=null,br(a)}t.setRequestHeader=function(a,f){this.A.append(a,f)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,a.push(g[0]+": "+g[1]),g=f.next();return a.join(`\r
`)};function br(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Mo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ud(a){let f="";return kt(a,function(g,_){f+=_,f+=":",f+=g,f+=`\r
`}),f}function kl(a,f,g){e:{for(_ in g){var _=!1;break e}_=!0}_||(g=ud(g),typeof a=="string"?g!=null&&lt(g):dt(a,f,g))}function mt(a){J.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(mt,J);var $y=/^https?$/i,Hy=["POST","PUT"];t=mt.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,f,g,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():yn.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch($){hd(this,$);return}if(a=g||"",g=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var L in _)g.set(L,_[L]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const $ of _.keys())g.set($,_.get($));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(g.keys()).find($=>$.toLowerCase()=="content-type"),L=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Hy,f,void 0)>=0)||_||L||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,ne]of g)this.g.setRequestHeader($,ne);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch($){hd(this,$)}};function hd(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.o=5,dd(a),Oo(a)}function dd(a){a.A||(a.A=!0,z(a,"complete"),z(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,z(this,"complete"),z(this,"abort"),Oo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Oo(this,!0)),mt.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?fd(this):this.Xa())},t.Xa=function(){fd(this)};function fd(a){if(a.h&&typeof r<"u"){if(a.v&&Ss(a)==4)setTimeout(a.Ca.bind(a),0);else if(z(a,"readystatechange"),Ss(a)==4){a.h=!1;try{const $=a.ca();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var _;if(_=$===0){let ne=String(a.D).match(nd)[1]||null;!ne&&o.self&&o.self.location&&(ne=o.self.location.protocol.slice(0,-1)),_=!$y.test(ne?ne.toLowerCase():"")}g=_}if(g)z(a,"complete"),z(a,"success");else{a.o=6;try{var L=Ss(a)>2?a.g.statusText:""}catch{L=""}a.l=L+" ["+a.ca()+"]",dd(a)}}finally{Oo(a)}}}}function Oo(a,f){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const g=a.g;a.g=null,f||z(a,"ready");try{g.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Ss(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Ss(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),$e(f)}};function pd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function jy(a){const f={};a=(a.g&&Ss(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(E(a[_]))continue;var g=ct(a[_]);const L=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const $=f[L]||[];f[L]=$,$.push(g)}Kt(f,function(_){return _.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Sr(a,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[a]||f}function gd(a){this.za=0,this.i=[],this.j=new Be,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Sr("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Sr("baseRetryDelayMs",5e3,a),this.Za=Sr("retryDelaySeedMs",1e4,a),this.Ta=Sr("forwardChannelMaxRetries",2,a),this.va=Sr("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Jh(a&&a.concurrentRequestLimit),this.Ba=new Uy,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=gd.prototype,t.ka=8,t.I=1,t.connect=function(a,f,g,_){le(0),this.W=a,this.H=f||{},g&&_!==void 0&&(this.H.OSID=g,this.H.OAID=_),this.F=this.X,this.J=Td(this,null,this.W),Lo(this)};function Dl(a){if(md(a),a.I==3){var f=a.V++,g=$n(a.J);if(dt(g,"SID",a.M),dt(g,"RID",f),dt(g,"TYPE","terminate"),Rr(a,g),f=new Je(a,a.j,f),f.M=2,f.A=No($n(g)),g=!1,o.navigator&&o.navigator.sendBeacon)try{g=o.navigator.sendBeacon(f.A.toString(),"")}catch{}!g&&o.Image&&(new Image().src=f.A,g=!0),g||(f.g=Cd(f.j,null),f.g.ea(f.A)),f.F=Date.now(),xo(f)}Ed(a)}function Vo(a){a.g&&(Nl(a),a.g.cancel(),a.g=null)}function md(a){Vo(a),a.v&&(o.clearTimeout(a.v),a.v=null),Bo(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Lo(a){if(!Xh(a.h)&&!a.m){a.m=!0;var f=a.Ea;se||I(),Ie||(se(),Ie=!0),S.add(f,a),a.D=0}}function Gy(a,f){return Zh(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=f.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=De(u(a.Ea,a,f),wd(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const L=new Je(this,this.j,a);let $=this.o;if(this.U&&($?($=Lt($),Cn($,this.U)):$=this.U),this.u!==null||this.R||(L.J=$,$=null),this.S)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var _=this.i[g];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(f+=_,f>4096){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=_d(this,L,f),g=$n(this.J),dt(g,"RID",a),dt(g,"CVER",22),this.G&&dt(g,"X-HTTP-Session-Id",this.G),Rr(this,g),$&&(this.R?f="headers="+lt(ud($))+"&"+f:this.u&&kl(g,this.u,$)),Sl(this.h,L),this.Ra&&dt(g,"TYPE","init"),this.S?(dt(g,"$req",f),dt(g,"SID","null"),L.U=!0,Di(L,g,null)):Di(L,g,f),this.I=2}}else this.I==3&&(a?vd(this,a):this.i.length==0||Xh(this.h)||vd(this))};function vd(a,f){var g;f?g=f.l:g=a.V++;const _=$n(a.J);dt(_,"SID",a.M),dt(_,"RID",g),dt(_,"AID",a.K),Rr(a,_),a.u&&a.o&&kl(_,a.u,a.o),g=new Je(a,a.j,g,a.D+1),a.u===null&&(g.J=a.o),f&&(a.i=f.G.concat(a.i)),f=_d(a,g,1e3),g.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Sl(a.h,g),Di(g,_,f)}function Rr(a,f){a.H&&kt(a.H,function(g,_){dt(f,_,g)}),a.l&&kt({},function(g,_){dt(f,_,g)})}function _d(a,f,g){g=Math.min(a.i.length,g);const _=a.l?u(a.l.Ka,a.l,a):null;e:{var L=a.i;let Pe=-1;for(;;){const xt=["count="+g];Pe==-1?g>0?(Pe=L[0].g,xt.push("ofs="+Pe)):Pe=0:xt.push("ofs="+Pe);let et=!0;for(let Ft=0;Ft<g;Ft++){var $=L[Ft].g;const Hn=L[Ft].map;if($-=Pe,$<0)Pe=Math.max(0,L[Ft].g-100),et=!1;else try{$="req"+$+"_"||"";try{var ne=Hn instanceof Map?Hn:Object.entries(Hn);for(const[oi,Rs]of ne){let Ps=Rs;l(Rs)&&(Ps=Ne(Rs)),xt.push($+oi+"="+encodeURIComponent(Ps))}}catch(oi){throw xt.push($+"type="+encodeURIComponent("_badmap")),oi}}catch{_&&_(Hn)}}if(et){ne=xt.join("&");break e}}ne=void 0}return a=a.i.splice(0,g),f.G=a,ne}function yd(a){if(!a.g&&!a.v){a.Y=1;var f=a.Da;se||I(),Ie||(se(),Ie=!0),S.add(f,a),a.A=0}}function xl(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=De(u(a.Da,a),wd(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Ad(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=De(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,le(10),Vo(this),Ad(this))};function Nl(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Ad(a){a.g=new Je(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var f=$n(a.na);dt(f,"RID","rpc"),dt(f,"SID",a.M),dt(f,"AID",a.K),dt(f,"CI",a.F?"0":"1"),!a.F&&a.ia&&dt(f,"TO",a.ia),dt(f,"TYPE","xmlhttp"),Rr(a,f),a.u&&a.o&&kl(f,a.u,a.o),a.O&&(a.g.H=a.O);var g=a.g;a=a.ba,g.M=1,g.A=No($n(f)),g.u=null,g.R=!0,_r(g,a)}t.Va=function(){this.C!=null&&(this.C=null,Vo(this),xl(this),le(19))};function Bo(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Id(a,f){var g=null;if(a.g==f){Bo(a),Nl(a),a.g=null;var _=2}else if(bl(a.h,f))g=f.G,ed(a.h,f),_=1;else return;if(a.I!=0){if(f.o)if(_==1){g=f.u?f.u.length:0,f=Date.now()-f.F;var L=a.D;_=G(),z(_,new re(_,g)),Lo(a)}else yd(a);else if(L=f.m,L==3||L==0&&f.X>0||!(_==1&&Gy(a,f)||_==2&&xl(a)))switch(g&&g.length>0&&(f=a.h,f.i=f.i.concat(g)),L){case 1:ri(a,5);break;case 4:ri(a,10);break;case 3:ri(a,6);break;default:ri(a,2)}}}function wd(a,f){let g=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(g*=2),g*f}function ri(a,f){if(a.j.info("Error code "+f),f==2){var g=u(a.bb,a),_=a.Ua;const L=!_;_=new Cs(_||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Ar(_,"https"),No(_),L?By(_.toString(),g):Fy(_.toString(),g)}else le(2);a.I=0,a.l&&a.l.pa(f),Ed(a),md(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),le(2)):(this.j.info("Failed to ping google.com"),le(1))};function Ed(a){if(a.I=0,a.ja=[],a.l){const f=td(a.h);(f.length!=0||a.i.length!=0)&&(T(a.ja,f),T(a.ja,a.i),a.h.i.length=0,v(a.i),a.i.length=0),a.l.oa()}}function Td(a,f,g){var _=g instanceof Cs?$n(g):new Cs(g);if(_.g!="")f&&(_.g=f+"."+_.g),Ir(_,_.u);else{var L=o.location;_=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;const $=new Cs(null);_&&Ar($,_),f&&($.g=f),L&&Ir($,L),g&&($.h=g),_=$}return g=a.G,f=a.wa,g&&f&&dt(_,g,f),dt(_,"VER",a.ka),Rr(a,_),_}function Cd(a,f,g){if(f&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Aa&&!a.ma?new mt(new Pl({ab:g})):new mt(a.ma),f.Fa(a.L),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function bd(){}t=bd.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Fo(){}Fo.prototype.g=function(a,f){return new An(a,f)};function An(a,f){J.call(this),this.g=new gd(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.sa&&(a?a["X-WebChannel-Client-Profile"]=f.sa:a={"X-WebChannel-Client-Profile":f.sa}),this.g.U=a,(a=f&&f.Qb)&&!E(a)&&(this.g.u=a),this.A=f&&f.supportsCrossDomainXhr||!1,this.v=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!E(f)&&(this.g.G=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new Ni(this)}p(An,J),An.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},An.prototype.close=function(){Dl(this.g)},An.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var g={};g.__data__=a,a=g}else this.v&&(g={},g.__data__=Ne(a),a=g);f.i.push(new ky(f.Ya++,a)),f.I==3&&Lo(f)},An.prototype.N=function(){this.g.l=null,delete this.j,Dl(this.g),delete this.g,An.Z.N.call(this)};function Sd(a){Et.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const g in f){a=g;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}p(Sd,Et);function Rd(){Fe.call(this),this.status=1}p(Rd,Fe);function Ni(a){this.g=a}p(Ni,bd),Ni.prototype.ra=function(){z(this.g,"a")},Ni.prototype.qa=function(a){z(this.g,new Sd(a))},Ni.prototype.pa=function(a){z(this.g,new Rd)},Ni.prototype.oa=function(){z(this.g,"b")},Fo.prototype.createWebChannel=Fo.prototype.g,An.prototype.send=An.prototype.o,An.prototype.open=An.prototype.m,An.prototype.close=An.prototype.close,Rv=function(){return new Fo},Sv=function(){return G()},bv=yt,Nc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Me.NO_ERROR=0,Me.TIMEOUT=8,Me.HTTP_ERROR=6,oa=Me,At.COMPLETE="complete",Cv=At,Ye.EventType=wt,wt.OPEN="a",wt.CLOSE="b",wt.ERROR="c",wt.MESSAGE="d",J.prototype.listen=J.prototype.J,Mr=Ye,mt.prototype.listenOnce=mt.prototype.K,mt.prototype.getLastError=mt.prototype.Ha,mt.prototype.getLastErrorCode=mt.prototype.ya,mt.prototype.getStatus=mt.prototype.ca,mt.prototype.getResponseJson=mt.prototype.La,mt.prototype.getResponseText=mt.prototype.la,mt.prototype.send=mt.prototype.ea,mt.prototype.setWithCredentials=mt.prototype.Fa,Tv=mt}).apply(typeof Qo<"u"?Qo:typeof self<"u"?self:typeof window<"u"?window:{});const np="@firebase/firestore",sp="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let pr="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai=new rl("@firebase/firestore");function Li(){return Ai.logLevel}function ce(t,...e){if(Ai.logLevel<=Oe.DEBUG){const n=e.map(Ru);Ai.debug(`Firestore (${pr}): ${t}`,...n)}}function ws(t,...e){if(Ai.logLevel<=Oe.ERROR){const n=e.map(Ru);Ai.error(`Firestore (${pr}): ${t}`,...n)}}function nr(t,...e){if(Ai.logLevel<=Oe.WARN){const n=e.map(Ru);Ai.warn(`Firestore (${pr}): ${t}`,...n)}}function Ru(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function _e(t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,Pv(t,s,n)}function Pv(t,e,n){let s=`FIRESTORE (${pr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw ws(s),new Error(s)}function Ke(t,e,n,s){let i="Unexpected state";typeof n=="string"?i=n:s=n,t||Pv(e,i,s)}function Ee(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class fe extends Un{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _C{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Xt.UNAUTHENTICATED)))}shutdown(){}}class yC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class AC{constructor(e){this.t=e,this.currentUser=Xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ke(this.o===void 0,42304);let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new Gs;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Gs,e.enqueueRetryable((()=>i(this.currentUser)))};const o=()=>{const c=r;e.enqueueRetryable((async()=>{await c.promise,await i(this.currentUser)}))},l=c=>{ce("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ce("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Gs)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==e?(ce("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ke(typeof s.accessToken=="string",31837,{l:s}),new kv(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ke(e===null||typeof e=="string",2055,{h:e}),new Xt(e)}}class IC{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=Xt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class wC{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new IC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(Xt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ip{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class EC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Sn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ke(this.o===void 0,3512);const s=r=>{r.error!=null&&ce("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.m;return this.m=r.token,ce("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable((()=>s(r)))};const i=r=>{ce("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>i(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?i(r):ce("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ip(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Ke(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new ip(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const i=TC(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%62))}return s}}function Ve(t,e){return t<e?-1:t>e?1:0}function Mc(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const i=t.charAt(s),r=e.charAt(s);if(i!==r)return tc(i)===tc(r)?Ve(i,r):tc(i)?1:-1}return Ve(t.length,e.length)}const CC=55296,bC=57343;function tc(t){const e=t.charCodeAt(0);return e>=CC&&e<=bC}function sr(t,e,n){return t.length===e.length&&t.every(((s,i)=>n(s,e[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp="__name__";class qn{constructor(e,n,s){n===void 0?n=0:n>e.length&&_e(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&_e(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return qn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof qn?e.forEach((s=>{n.push(s)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=qn.compareSegments(e.get(i),n.get(i));if(r!==0)return r}return Ve(e.length,n.length)}static compareSegments(e,n){const s=qn.isNumericId(e),i=qn.isNumericId(n);return s&&!i?-1:!s&&i?1:s&&i?qn.extractNumericId(e).compare(qn.extractNumericId(n)):Mc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return js.fromString(e.substring(4,e.length-2))}}class pt extends qn{construct(e,n,s){return new pt(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new fe(X.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((i=>i.length>0)))}return new pt(n)}static emptyPath(){return new pt([])}}const SC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qt extends qn{construct(e,n,s){return new Qt(e,n,s)}static isValidIdentifier(e){return SC.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===rp}static keyField(){return new Qt([rp])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new fe(X.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new fe(X.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new fe(X.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(s+=l,i++):(r(),i++)}if(r(),o)throw new fe(X.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qt(n)}static emptyPath(){return new Qt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function RC(t,e,n){if(!n)throw new fe(X.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function PC(t,e,n,s){if(e===!0&&s===!0)throw new fe(X.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function op(t){if(!me.isDocumentKey(t))throw new fe(X.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Dv(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function ku(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":_e(12329,{type:typeof t})}function uo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new fe(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ku(t);throw new fe(X.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function bt(t,e){const n={typeString:t};return e&&(n.value=e),n}function So(t,e){if(!Dv(t))throw new fe(X.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const i=e[s].typeString,r="value"in e[s]?{value:e[s].value}:void 0;if(!(s in t)){n=`JSON missing required field: '${s}'`;break}const o=t[s];if(i&&typeof o!==i){n=`JSON field '${s}' must be a ${i}.`;break}if(r!==void 0&&o!==r.value){n=`Expected '${s}' field to equal '${r.value}'`;break}}if(n)throw new fe(X.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap=-62135596800,lp=1e6;class ft{static now(){return ft.fromMillis(Date.now())}static fromDate(e){return ft.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*lp);return new ft(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new fe(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new fe(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<ap)throw new fe(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new fe(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/lp}_compareTo(e){return this.seconds===e.seconds?Ve(this.nanoseconds,e.nanoseconds):Ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ft._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(So(e,ft._jsonSchema))return new ft(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ap;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ft._jsonSchemaVersion="firestore/timestamp/1.0",ft._jsonSchema={type:bt("string",ft._jsonSchemaVersion),seconds:bt("number"),nanoseconds:bt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ho=-1;function kC(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=Ae.fromTimestamp(s===1e9?new ft(n+1,0):new ft(n,s));return new Ks(i,me.empty(),e)}function DC(t){return new Ks(t.readTime,t.key,ho)}class Ks{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Ks(Ae.min(),me.empty(),ho)}static max(){return new Ks(Ae.max(),me.empty(),ho)}}function xC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=me.comparator(t.documentKey,e.documentKey),n!==0?n:Ve(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class MC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gr(t){if(t.code!==X.FAILED_PRECONDITION||t.message!==NC)throw t;ce("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&_e(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new Y(((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof Y?n:Y.resolve(n)}catch(n){return Y.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):Y.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):Y.reject(n)}static resolve(e){return new Y(((n,s)=>{n(e)}))}static reject(e){return new Y(((n,s)=>{s(e)}))}static waitFor(e){return new Y(((n,s)=>{let i=0,r=0,o=!1;e.forEach((l=>{++i,l.next((()=>{++r,o&&r===i&&n()}),(c=>s(c)))})),o=!0,r===i&&n()}))}static or(e){let n=Y.resolve(!1);for(const s of e)n=n.next((i=>i?Y.resolve(i):s()));return n}static forEach(e,n){const s=[];return e.forEach(((i,r)=>{s.push(n.call(this,i,r))})),this.waitFor(s)}static mapArray(e,n){return new Y(((s,i)=>{const r=e.length,o=new Array(r);let l=0;for(let c=0;c<r;c++){const u=c;n(e[u]).next((d=>{o[u]=d,++l,l===r&&s(o)}),(d=>i(d)))}}))}static doWhile(e,n){return new Y(((s,i)=>{const r=()=>{e()===!0?n().next((()=>{r()}),i):s()};r()}))}}function OC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function mr(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class cl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}cl.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du=-1;function ul(t){return t==null}function xa(t){return t===0&&1/t==-1/0}function VC(t){return typeof t=="number"&&Number.isInteger(t)&&!xa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv="";function LC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=cp(e)),e=BC(t.get(n),e);return cp(e)}function BC(t,e){let n=e;const s=t.length;for(let i=0;i<s;i++){const r=t.charAt(i);switch(r){case"\0":n+="";break;case xv:n+="";break;default:n+=r}}return n}function cp(t){return t+xv+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Si(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Nv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n){this.comparator=e,this.root=n||Gt.EMPTY}insert(e,n){return new gt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Gt.BLACK,null,null))}remove(e){return new gt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Gt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,s)=>(e(n,s),!1)))}toString(){const e=[];return this.inorderTraversal(((n,s)=>(e.push(`${n}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wo(this.root,e,this.comparator,!0)}}class Wo{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Gt{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Gt.RED,this.left=i??Gt.EMPTY,this.right=r??Gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Gt(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Gt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Gt.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _e(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _e(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw _e(27949);return e+(this.isRed()?0:1)}}Gt.EMPTY=null,Gt.RED=!0,Gt.BLACK=!1;Gt.EMPTY=new class{constructor(){this.size=0}get key(){throw _e(57766)}get value(){throw _e(16141)}get color(){throw _e(16727)}get left(){throw _e(29726)}get right(){throw _e(36894)}copy(e,n,s,i,r){return this}insert(e,n,s){return new Gt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.comparator=e,this.data=new gt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,s)=>(e(n),!1)))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new hp(this.data.getIterator())}getIteratorFrom(e){return new hp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((s=>{n=n.add(s)})),n}isEqual(e){if(!(e instanceof Vt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Vt(this.comparator);return n.data=e,n}}class hp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this.fields=e,e.sort(Qt.comparator)}static empty(){return new On([])}unionWith(e){let n=new Vt(Qt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new On(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return sr(this.fields,e.fields,((n,s)=>n.isEqual(s)))}}/**
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
 */class Mv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Mv("Invalid base64 string: "+r):r}})(e);return new zt(n)}static fromUint8Array(e){const n=(function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r})(e);return new zt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}zt.EMPTY_BYTE_STRING=new zt("");const FC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ys(t){if(Ke(!!t,39018),typeof t=="string"){let e=0;const n=FC.exec(t);if(Ke(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:It(t.seconds),nanos:It(t.nanos)}}function It(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Js(t){return typeof t=="string"?zt.fromBase64String(t):zt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov="server_timestamp",Vv="__type__",Lv="__previous_value__",Bv="__local_write_time__";function xu(t){return(t?.mapValue?.fields||{})[Vv]?.stringValue===Ov}function hl(t){const e=t.mapValue.fields[Lv];return xu(e)?hl(e):e}function fo(t){const e=Ys(t.mapValue.fields[Bv].timestampValue);return new ft(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e,n,s,i,r,o,l,c,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=d}}const Na="(default)";class po{constructor(e,n){this.projectId=e,this.database=n||Na}static empty(){return new po("","")}get isDefaultDatabase(){return this.database===Na}isEqual(e){return e instanceof po&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv="__type__",$C="__max__",zo={mapValue:{}},Uv="__vector__",Ma="value";function Xs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?xu(t)?4:jC(t)?9007199254740991:HC(t)?10:11:_e(28295,{value:t})}function is(t,e){if(t===e)return!0;const n=Xs(t);if(n!==Xs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return fo(t).isEqual(fo(e));case 3:return(function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=Ys(i.timestampValue),l=Ys(r.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(i,r){return Js(i.bytesValue).isEqual(Js(r.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(i,r){return It(i.geoPointValue.latitude)===It(r.geoPointValue.latitude)&&It(i.geoPointValue.longitude)===It(r.geoPointValue.longitude)})(t,e);case 2:return(function(i,r){if("integerValue"in i&&"integerValue"in r)return It(i.integerValue)===It(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=It(i.doubleValue),l=It(r.doubleValue);return o===l?xa(o)===xa(l):isNaN(o)&&isNaN(l)}return!1})(t,e);case 9:return sr(t.arrayValue.values||[],e.arrayValue.values||[],is);case 10:case 11:return(function(i,r){const o=i.mapValue.fields||{},l=r.mapValue.fields||{};if(up(o)!==up(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!is(o[c],l[c])))return!1;return!0})(t,e);default:return _e(52216,{left:t})}}function go(t,e){return(t.values||[]).find((n=>is(n,e)))!==void 0}function ir(t,e){if(t===e)return 0;const n=Xs(t),s=Xs(e);if(n!==s)return Ve(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ve(t.booleanValue,e.booleanValue);case 2:return(function(r,o){const l=It(r.integerValue||r.doubleValue),c=It(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(t,e);case 3:return dp(t.timestampValue,e.timestampValue);case 4:return dp(fo(t),fo(e));case 5:return Mc(t.stringValue,e.stringValue);case 6:return(function(r,o){const l=Js(r),c=Js(o);return l.compareTo(c)})(t.bytesValue,e.bytesValue);case 7:return(function(r,o){const l=r.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=Ve(l[u],c[u]);if(d!==0)return d}return Ve(l.length,c.length)})(t.referenceValue,e.referenceValue);case 8:return(function(r,o){const l=Ve(It(r.latitude),It(o.latitude));return l!==0?l:Ve(It(r.longitude),It(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return fp(t.arrayValue,e.arrayValue);case 10:return(function(r,o){const l=r.fields||{},c=o.fields||{},u=l[Ma]?.arrayValue,d=c[Ma]?.arrayValue,p=Ve(u?.values?.length||0,d?.values?.length||0);return p!==0?p:fp(u,d)})(t.mapValue,e.mapValue);case 11:return(function(r,o){if(r===zo.mapValue&&o===zo.mapValue)return 0;if(r===zo.mapValue)return 1;if(o===zo.mapValue)return-1;const l=r.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=Mc(c[p],d[p]);if(m!==0)return m;const v=ir(l[c[p]],u[d[p]]);if(v!==0)return v}return Ve(c.length,d.length)})(t.mapValue,e.mapValue);default:throw _e(23264,{he:n})}}function dp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ve(t,e);const n=Ys(t),s=Ys(e),i=Ve(n.seconds,s.seconds);return i!==0?i:Ve(n.nanos,s.nanos)}function fp(t,e){const n=t.values||[],s=e.values||[];for(let i=0;i<n.length&&i<s.length;++i){const r=ir(n[i],s[i]);if(r)return r}return Ve(n.length,s.length)}function rr(t){return Oc(t)}function Oc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const s=Ys(n);return`time(${s.seconds},${s.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Js(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return me.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let s="[",i=!0;for(const r of n.values||[])i?i=!1:s+=",",s+=Oc(r);return s+"]"})(t.arrayValue):"mapValue"in t?(function(n){const s=Object.keys(n.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${Oc(n.fields[o])}`;return i+"}"})(t.mapValue):_e(61005,{value:t})}function aa(t){switch(Xs(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=hl(t);return e?16+aa(e):16;case 5:return 2*t.stringValue.length;case 6:return Js(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((i,r)=>i+aa(r)),0)})(t.arrayValue);case 10:case 11:return(function(s){let i=0;return Si(s.fields,((r,o)=>{i+=r.length+aa(o)})),i})(t.mapValue);default:throw _e(13486,{value:t})}}function Vc(t){return!!t&&"integerValue"in t}function Nu(t){return!!t&&"arrayValue"in t}function pp(t){return!!t&&"nullValue"in t}function gp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function la(t){return!!t&&"mapValue"in t}function HC(t){return(t?.mapValue?.fields||{})[Fv]?.stringValue===Uv}function Kr(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Si(t.mapValue.fields,((n,s)=>e.mapValue.fields[n]=Kr(s))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Kr(t.arrayValue.values[n]);return e}return{...t}}function jC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===$C}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.value=e}static empty(){return new Rn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!la(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Kr(n)}setAll(e){let n=Qt.emptyPath(),s={},i=[];e.forEach(((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=l.popLast()}o?s[l.lastSegment()]=Kr(o):i.push(l.lastSegment())}));const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());la(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return is(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];la(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Si(n,((i,r)=>e[i]=r));for(const i of s)delete e[i]}clone(){return new Rn(Kr(this.value))}}function $v(t){const e=[];return Si(t.fields,((n,s)=>{const i=new Qt([n]);if(la(s)){const r=$v(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)})),new On(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,n,s,i,r,o,l){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=l}static newInvalidDocument(e){return new en(e,0,Ae.min(),Ae.min(),Ae.min(),Rn.empty(),0)}static newFoundDocument(e,n,s,i){return new en(e,1,n,Ae.min(),s,i,0)}static newNoDocument(e,n){return new en(e,2,n,Ae.min(),Ae.min(),Rn.empty(),0)}static newUnknownDocument(e,n){return new en(e,3,n,Ae.min(),Ae.min(),Rn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof en&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new en(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Oa{constructor(e,n){this.position=e,this.inclusive=n}}function mp(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=me.comparator(me.fromName(o.referenceValue),n.key):s=ir(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function vp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!is(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Va{constructor(e,n="asc"){this.field=e,this.dir=n}}function GC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Hv{}class Ot extends Hv{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new QC(e,n,s):n==="array-contains"?new KC(e,s):n==="in"?new YC(e,s):n==="not-in"?new JC(e,s):n==="array-contains-any"?new XC(e,s):new Ot(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new WC(e,s):new zC(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ir(n,this.value)):n!==null&&Xs(this.value)===Xs(n)&&this.matchesComparison(ir(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rs extends Hv{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new rs(e,n)}matches(e){return jv(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function jv(t){return t.op==="and"}function Gv(t){return qC(t)&&jv(t)}function qC(t){for(const e of t.filters)if(e instanceof rs)return!1;return!0}function Lc(t){if(t instanceof Ot)return t.field.canonicalString()+t.op.toString()+rr(t.value);if(Gv(t))return t.filters.map((e=>Lc(e))).join(",");{const e=t.filters.map((n=>Lc(n))).join(",");return`${t.op}(${e})`}}function qv(t,e){return t instanceof Ot?(function(s,i){return i instanceof Ot&&s.op===i.op&&s.field.isEqual(i.field)&&is(s.value,i.value)})(t,e):t instanceof rs?(function(s,i){return i instanceof rs&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce(((r,o,l)=>r&&qv(o,i.filters[l])),!0):!1})(t,e):void _e(19439)}function Qv(t){return t instanceof Ot?(function(n){return`${n.field.canonicalString()} ${n.op} ${rr(n.value)}`})(t):t instanceof rs?(function(n){return n.op.toString()+" {"+n.getFilters().map(Qv).join(" ,")+"}"})(t):"Filter"}class QC extends Ot{constructor(e,n,s){super(e,n,s),this.key=me.fromName(s.referenceValue)}matches(e){const n=me.comparator(e.key,this.key);return this.matchesComparison(n)}}class WC extends Ot{constructor(e,n){super(e,"in",n),this.keys=Wv("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class zC extends Ot{constructor(e,n){super(e,"not-in",n),this.keys=Wv("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function Wv(t,e){return(e.arrayValue?.values||[]).map((n=>me.fromName(n.referenceValue)))}class KC extends Ot{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Nu(n)&&go(n.arrayValue,this.value)}}class YC extends Ot{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&go(this.value.arrayValue,n)}}class JC extends Ot{constructor(e,n){super(e,"not-in",n)}matches(e){if(go(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!go(this.value.arrayValue,n)}}class XC extends Ot{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Nu(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>go(this.value.arrayValue,s)))}}/**
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
 */class ZC{constructor(e,n=null,s=[],i=[],r=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=l,this.Te=null}}function _p(t,e=null,n=[],s=[],i=null,r=null,o=null){return new ZC(t,e,n,s,i,r,o)}function Mu(t){const e=Ee(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((s=>Lc(s))).join(","),n+="|ob:",n+=e.orderBy.map((s=>(function(r){return r.field.canonicalString()+r.dir})(s))).join(","),ul(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>rr(s))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>rr(s))).join(",")),e.Te=n}return e.Te}function Ou(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!GC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!qv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!vp(t.startAt,e.startAt)&&vp(t.endAt,e.endAt)}function Bc(t){return me.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,n=null,s=[],i=[],r=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function eb(t,e,n,s,i,r,o,l){return new dl(t,e,n,s,i,r,o,l)}function Vu(t){return new dl(t)}function yp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function tb(t){return t.collectionGroup!==null}function Yr(t){const e=Ee(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const r of e.explicitOrderBy)e.Ie.push(r),n.add(r.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Vt(Qt.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((u=>{u.isInequality()&&(l=l.add(u.field))}))})),l})(e).forEach((r=>{n.has(r.canonicalString())||r.isKeyField()||e.Ie.push(new Va(r,s))})),n.has(Qt.keyField().canonicalString())||e.Ie.push(new Va(Qt.keyField(),s))}return e.Ie}function Yn(t){const e=Ee(t);return e.Ee||(e.Ee=nb(e,Yr(t))),e.Ee}function nb(t,e){if(t.limitType==="F")return _p(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((i=>{const r=i.dir==="desc"?"asc":"desc";return new Va(i.field,r)}));const n=t.endAt?new Oa(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Oa(t.startAt.position,t.startAt.inclusive):null;return _p(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function Fc(t,e,n){return new dl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function fl(t,e){return Ou(Yn(t),Yn(e))&&t.limitType===e.limitType}function zv(t){return`${Mu(Yn(t))}|lt:${t.limitType}`}function Bi(t){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((i=>Qv(i))).join(", ")}]`),ul(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((i=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(i))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((i=>rr(i))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((i=>rr(i))).join(",")),`Target(${s})`})(Yn(t))}; limitType=${t.limitType})`}function pl(t,e){return e.isFoundDocument()&&(function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):me.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)})(t,e)&&(function(s,i){for(const r of Yr(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0})(t,e)&&(function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0})(t,e)&&(function(s,i){return!(s.startAt&&!(function(o,l,c){const u=mp(o,l,c);return o.inclusive?u<=0:u<0})(s.startAt,Yr(s),i)||s.endAt&&!(function(o,l,c){const u=mp(o,l,c);return o.inclusive?u>=0:u>0})(s.endAt,Yr(s),i))})(t,e)}function sb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Kv(t){return(e,n)=>{let s=!1;for(const i of Yr(t)){const r=ib(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function ib(t,e,n){const s=t.field.isKeyField()?me.comparator(e.key,n.key):(function(r,o,l){const c=o.data.field(r),u=l.data.field(r);return c!==null&&u!==null?ir(c,u):_e(42886)})(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return _e(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Si(this.inner,((n,s)=>{for(const[i,r]of s)e(i,r)}))}isEmpty(){return Nv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb=new gt(me.comparator);function Es(){return rb}const Yv=new gt(me.comparator);function Or(...t){let e=Yv;for(const n of t)e=e.insert(n.key,n);return e}function Jv(t){let e=Yv;return t.forEach(((n,s)=>e=e.insert(n,s.overlayedDocument))),e}function fi(){return Jr()}function Xv(){return Jr()}function Jr(){return new Ri((t=>t.toString()),((t,e)=>t.isEqual(e)))}const ob=new gt(me.comparator),ab=new Vt(me.comparator);function Le(...t){let e=ab;for(const n of t)e=e.add(n);return e}const lb=new Vt(Ve);function cb(){return lb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xa(e)?"-0":e}}function Zv(t){return{integerValue:""+t}}function ub(t,e){return VC(e)?Zv(e):Lu(t,e)}/**
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
 */class gl{constructor(){this._=void 0}}function hb(t,e,n){return t instanceof La?(function(i,r){const o={fields:{[Vv]:{stringValue:Ov},[Bv]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&xu(r)&&(r=hl(r)),r&&(o.fields[Lv]=r),{mapValue:o}})(n,e):t instanceof mo?t_(t,e):t instanceof vo?n_(t,e):(function(i,r){const o=e_(i,r),l=Ap(o)+Ap(i.Ae);return Vc(o)&&Vc(i.Ae)?Zv(l):Lu(i.serializer,l)})(t,e)}function db(t,e,n){return t instanceof mo?t_(t,e):t instanceof vo?n_(t,e):n}function e_(t,e){return t instanceof Ba?(function(s){return Vc(s)||(function(r){return!!r&&"doubleValue"in r})(s)})(e)?e:{integerValue:0}:null}class La extends gl{}class mo extends gl{constructor(e){super(),this.elements=e}}function t_(t,e){const n=s_(e);for(const s of t.elements)n.some((i=>is(i,s)))||n.push(s);return{arrayValue:{values:n}}}class vo extends gl{constructor(e){super(),this.elements=e}}function n_(t,e){let n=s_(e);for(const s of t.elements)n=n.filter((i=>!is(i,s)));return{arrayValue:{values:n}}}class Ba extends gl{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Ap(t){return It(t.integerValue||t.doubleValue)}function s_(t){return Nu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function fb(t,e){return t.field.isEqual(e.field)&&(function(s,i){return s instanceof mo&&i instanceof mo||s instanceof vo&&i instanceof vo?sr(s.elements,i.elements,is):s instanceof Ba&&i instanceof Ba?is(s.Ae,i.Ae):s instanceof La&&i instanceof La})(t.transform,e.transform)}class pb{constructor(e,n){this.version=e,this.transformResults=n}}class vs{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new vs}static exists(e){return new vs(void 0,e)}static updateTime(e){return new vs(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ca(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ml{}function i_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new o_(t.key,vs.none()):new Ro(t.key,t.data,vs.none());{const n=t.data,s=Rn.empty();let i=new Vt(Qt.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Pi(t.key,s,new On(i.toArray()),vs.none())}}function gb(t,e,n){t instanceof Ro?(function(i,r,o){const l=i.value.clone(),c=wp(i.fieldTransforms,r,o.transformResults);l.setAll(c),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):t instanceof Pi?(function(i,r,o){if(!ca(i.precondition,r))return void r.convertToUnknownDocument(o.version);const l=wp(i.fieldTransforms,r,o.transformResults),c=r.data;c.setAll(r_(i)),c.setAll(l),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):(function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function Xr(t,e,n,s){return t instanceof Ro?(function(r,o,l,c){if(!ca(r.precondition,o))return l;const u=r.value.clone(),d=Ep(r.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,s):t instanceof Pi?(function(r,o,l,c){if(!ca(r.precondition,o))return l;const u=Ep(r.fieldTransforms,c,o),d=o.data;return d.setAll(r_(r)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((p=>p.field)))})(t,e,n,s):(function(r,o,l){return ca(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l})(t,e,n)}function mb(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=e_(s.transform,i||null);r!=null&&(n===null&&(n=Rn.empty()),n.set(s.field,r))}return n||null}function Ip(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&sr(s,i,((r,o)=>fb(r,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ro extends ml{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Pi extends ml{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function r_(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function wp(t,e,n){const s=new Map;Ke(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,l=e.data.field(r.field);s.set(r.field,db(o,l,n[i]))}return s}function Ep(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,hb(r,o,e))}return s}class o_ extends ml{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vb extends ml{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&gb(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Xr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Xr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Xv();return this.mutations.forEach((i=>{const r=e.get(i.key),o=r.overlayedDocument;let l=this.applyToLocalView(o,r.mutatedFields);l=n.has(i.key)?null:l;const c=i_(o,l);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(Ae.min())})),s}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Le())}isEqual(e){return this.batchId===e.batchId&&sr(this.mutations,e.mutations,((n,s)=>Ip(n,s)))&&sr(this.baseMutations,e.baseMutations,((n,s)=>Ip(n,s)))}}class Bu{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){Ke(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let i=(function(){return ob})();const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Bu(e,n,s,i)}}/**
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
 */class yb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Ab{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tt,Ue;function Ib(t){switch(t){case X.OK:return _e(64938);case X.CANCELLED:case X.UNKNOWN:case X.DEADLINE_EXCEEDED:case X.RESOURCE_EXHAUSTED:case X.INTERNAL:case X.UNAVAILABLE:case X.UNAUTHENTICATED:return!1;case X.INVALID_ARGUMENT:case X.NOT_FOUND:case X.ALREADY_EXISTS:case X.PERMISSION_DENIED:case X.FAILED_PRECONDITION:case X.ABORTED:case X.OUT_OF_RANGE:case X.UNIMPLEMENTED:case X.DATA_LOSS:return!0;default:return _e(15467,{code:t})}}function a_(t){if(t===void 0)return ws("GRPC error has no .code"),X.UNKNOWN;switch(t){case Tt.OK:return X.OK;case Tt.CANCELLED:return X.CANCELLED;case Tt.UNKNOWN:return X.UNKNOWN;case Tt.DEADLINE_EXCEEDED:return X.DEADLINE_EXCEEDED;case Tt.RESOURCE_EXHAUSTED:return X.RESOURCE_EXHAUSTED;case Tt.INTERNAL:return X.INTERNAL;case Tt.UNAVAILABLE:return X.UNAVAILABLE;case Tt.UNAUTHENTICATED:return X.UNAUTHENTICATED;case Tt.INVALID_ARGUMENT:return X.INVALID_ARGUMENT;case Tt.NOT_FOUND:return X.NOT_FOUND;case Tt.ALREADY_EXISTS:return X.ALREADY_EXISTS;case Tt.PERMISSION_DENIED:return X.PERMISSION_DENIED;case Tt.FAILED_PRECONDITION:return X.FAILED_PRECONDITION;case Tt.ABORTED:return X.ABORTED;case Tt.OUT_OF_RANGE:return X.OUT_OF_RANGE;case Tt.UNIMPLEMENTED:return X.UNIMPLEMENTED;case Tt.DATA_LOSS:return X.DATA_LOSS;default:return _e(39323,{code:t})}}(Ue=Tt||(Tt={}))[Ue.OK=0]="OK",Ue[Ue.CANCELLED=1]="CANCELLED",Ue[Ue.UNKNOWN=2]="UNKNOWN",Ue[Ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ue[Ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ue[Ue.NOT_FOUND=5]="NOT_FOUND",Ue[Ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ue[Ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ue[Ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ue[Ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ue[Ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ue[Ue.ABORTED=10]="ABORTED",Ue[Ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ue[Ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ue[Ue.INTERNAL=13]="INTERNAL",Ue[Ue.UNAVAILABLE=14]="UNAVAILABLE",Ue[Ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function wb(){return new TextEncoder}/**
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
 */const Eb=new js([4294967295,4294967295],0);function Tp(t){const e=wb().encode(t),n=new Ev;return n.update(e),new Uint8Array(n.digest())}function Cp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new js([n,s],0),new js([i,r],0)]}class Fu{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Vr(`Invalid padding: ${n}`);if(s<0)throw new Vr(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Vr(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Vr(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=js.fromNumber(this.ge)}ye(e,n,s){let i=e.add(n.multiply(js.fromNumber(s)));return i.compare(Eb)===1&&(i=new js([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Tp(e),[s,i]=Cp(n);for(let r=0;r<this.hashCount;r++){const o=this.ye(s,i,r);if(!this.we(o))return!1}return!0}static create(e,n,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Fu(r,i,n);return s.forEach((l=>o.insert(l))),o}insert(e){if(this.ge===0)return;const n=Tp(e),[s,i]=Cp(n);for(let r=0;r<this.hashCount;r++){const o=this.ye(s,i,r);this.Se(o)}}Se(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Vr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Po.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new vl(Ae.min(),i,new gt(Ve),Es(),Le())}}class Po{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Po(s,n,Le(),Le(),Le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,n,s,i){this.be=e,this.removedTargetIds=n,this.key=s,this.De=i}}class l_{constructor(e,n){this.targetId=e,this.Ce=n}}class c_{constructor(e,n,s=zt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class bp{constructor(){this.ve=0,this.Fe=Sp(),this.Me=zt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Le(),n=Le(),s=Le();return this.Fe.forEach(((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:_e(38017,{changeType:r})}})),new Po(this.Me,this.xe,e,n,s)}qe(){this.Oe=!1,this.Fe=Sp()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ke(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Tb{constructor(e){this.Ge=e,this.ze=new Map,this.je=Es(),this.Je=Ko(),this.He=Ko(),this.Ye=new gt(Ve)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const s=this.nt(n);switch(e.state){case 0:this.rt(n)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(e.resumeToken));break;default:_e(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((s,i)=>{this.rt(i)&&n(i)}))}st(e){const n=e.targetId,s=e.Ce.count,i=this.ot(n);if(i){const r=i.target;if(Bc(r))if(s===0){const o=new me(r.path);this.et(n,o,en.newNoDocument(o,Ae.min()))}else Ke(s===1,20013,{expectedCount:s});else{const o=this._t(n);if(o!==s){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=n;let o,l;try{o=Js(s).toUint8Array()}catch(c){if(c instanceof Mv)return nr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Fu(o,i,r)}catch(c){return nr(c instanceof Vr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,n,s){return n.Ce.count===s-this.Pt(e,n.targetId)?0:2}Pt(e,n){const s=this.Ge.getRemoteKeysForTarget(n);let i=0;return s.forEach((r=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(l)||(this.et(n,r,null),i++)})),i}Tt(e){const n=new Map;this.ze.forEach(((r,o)=>{const l=this.ot(o);if(l){if(r.current&&Bc(l.target)){const c=new me(l.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,en.newNoDocument(c,e))}r.Be&&(n.set(o,r.ke()),r.qe())}}));let s=Le();this.He.forEach(((r,o)=>{let l=!0;o.forEachWhile((c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(s=s.add(r))})),this.je.forEach(((r,o)=>o.setReadTime(e)));const i=new vl(e,n,this.Ye,this.je,s);return this.je=Es(),this.Je=Ko(),this.He=Ko(),this.Ye=new gt(Ve),i}Xe(e,n){if(!this.rt(e))return;const s=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,s){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),s&&(this.je=this.je.insert(n,s))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new bp,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Vt(Ve),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Vt(Ve),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||ce("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new bp),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Ko(){return new gt(me.comparator)}function Sp(){return new gt(me.comparator)}const Cb={asc:"ASCENDING",desc:"DESCENDING"},bb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Sb={and:"AND",or:"OR"};class Rb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Uc(t,e){return t.useProto3Json||ul(e)?e:{value:e}}function Fa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function u_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Pb(t,e){return Fa(t,e.toTimestamp())}function Jn(t){return Ke(!!t,49232),Ae.fromTimestamp((function(n){const s=Ys(n);return new ft(s.seconds,s.nanos)})(t))}function Uu(t,e){return $c(t,e).canonicalString()}function $c(t,e){const n=(function(i){return new pt(["projects",i.projectId,"databases",i.database])})(t).child("documents");return e===void 0?n:n.child(e)}function h_(t){const e=pt.fromString(t);return Ke(m_(e),10190,{key:e.toString()}),e}function Hc(t,e){return Uu(t.databaseId,e.path)}function nc(t,e){const n=h_(e);if(n.get(1)!==t.databaseId.projectId)throw new fe(X.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new fe(X.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new me(f_(n))}function d_(t,e){return Uu(t.databaseId,e)}function kb(t){const e=h_(t);return e.length===4?pt.emptyPath():f_(e)}function jc(t){return new pt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function f_(t){return Ke(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Rp(t,e,n){return{name:Hc(t,e),fields:n.value.mapValue.fields}}function Db(t,e){let n;if("targetChange"in e){e.targetChange;const s=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:_e(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=(function(u,d){return u.useProto3Json?(Ke(d===void 0||typeof d=="string",58123),zt.fromBase64String(d||"")):(Ke(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),zt.fromUint8Array(d||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&(function(u){const d=u.code===void 0?X.UNKNOWN:a_(u.code);return new fe(d,u.message||"")})(o);n=new c_(s,i,r,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=nc(t,s.document.name),r=Jn(s.document.updateTime),o=s.document.createTime?Jn(s.document.createTime):Ae.min(),l=new Rn({mapValue:{fields:s.document.fields}}),c=en.newFoundDocument(i,r,o,l),u=s.targetIds||[],d=s.removedTargetIds||[];n=new ua(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=nc(t,s.document),r=s.readTime?Jn(s.readTime):Ae.min(),o=en.newNoDocument(i,r),l=s.removedTargetIds||[];n=new ua([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=nc(t,s.document),r=s.removedTargetIds||[];n=new ua([],r,i,null)}else{if(!("filter"in e))return _e(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new Ab(i,r),l=s.targetId;n=new l_(l,o)}}return n}function xb(t,e){let n;if(e instanceof Ro)n={update:Rp(t,e.key,e.value)};else if(e instanceof o_)n={delete:Hc(t,e.key)};else if(e instanceof Pi)n={update:Rp(t,e.key,e.data),updateMask:$b(e.fieldMask)};else{if(!(e instanceof vb))return _e(16599,{Vt:e.type});n={verify:Hc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((s=>(function(r,o){const l=o.transform;if(l instanceof La)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof mo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof vo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ba)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw _e(20930,{transform:o.transform})})(0,s)))),e.precondition.isNone||(n.currentDocument=(function(i,r){return r.updateTime!==void 0?{updateTime:Pb(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:_e(27497)})(t,e.precondition)),n}function Nb(t,e){return t&&t.length>0?(Ke(e!==void 0,14353),t.map((n=>(function(i,r){let o=i.updateTime?Jn(i.updateTime):Jn(r);return o.isEqual(Ae.min())&&(o=Jn(r)),new pb(o,i.transformResults||[])})(n,e)))):[]}function Mb(t,e){return{documents:[d_(t,e.path)]}}function Ob(t,e){const n={structuredQuery:{}},s=e.path;let i;e.collectionGroup!==null?(i=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=d_(t,i);const r=(function(u){if(u.length!==0)return g_(rs.create(u,"and"))})(e.filters);r&&(n.structuredQuery.where=r);const o=(function(u){if(u.length!==0)return u.map((d=>(function(m){return{field:Fi(m.field),direction:Bb(m.dir)}})(d)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Uc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:n,parent:i}}function Vb(t){let e=kb(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Ke(s===1,65062);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let r=[];n.where&&(r=(function(p){const m=p_(p);return m instanceof rs&&Gv(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((m=>(function(T){return new Va(Ui(T.field),(function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(T.direction))})(m)))})(n.orderBy));let l=null;n.limit&&(l=(function(p){let m;return m=typeof p=="object"?p.value:p,ul(m)?null:m})(n.limit));let c=null;n.startAt&&(c=(function(p){const m=!!p.before,v=p.values||[];return new Oa(v,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const m=!p.before,v=p.values||[];return new Oa(v,m)})(n.endAt)),eb(e,i,o,r,l,"F",c,u)}function Lb(t,e){const n=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e(28987,{purpose:i})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function p_(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Ui(n.unaryFilter.field);return Ot.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=Ui(n.unaryFilter.field);return Ot.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ui(n.unaryFilter.field);return Ot.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ui(n.unaryFilter.field);return Ot.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _e(61313);default:return _e(60726)}})(t):t.fieldFilter!==void 0?(function(n){return Ot.create(Ui(n.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _e(58110);default:return _e(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return rs.create(n.compositeFilter.filters.map((s=>p_(s))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return _e(1026)}})(n.compositeFilter.op))})(t):_e(30097,{filter:t})}function Bb(t){return Cb[t]}function Fb(t){return bb[t]}function Ub(t){return Sb[t]}function Fi(t){return{fieldPath:t.canonicalString()}}function Ui(t){return Qt.fromServerFormat(t.fieldPath)}function g_(t){return t instanceof Ot?(function(n){if(n.op==="=="){if(gp(n.value))return{unaryFilter:{field:Fi(n.field),op:"IS_NAN"}};if(pp(n.value))return{unaryFilter:{field:Fi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(gp(n.value))return{unaryFilter:{field:Fi(n.field),op:"IS_NOT_NAN"}};if(pp(n.value))return{unaryFilter:{field:Fi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fi(n.field),op:Fb(n.op),value:n.value}}})(t):t instanceof rs?(function(n){const s=n.getFilters().map((i=>g_(i)));return s.length===1?s[0]:{compositeFilter:{op:Ub(n.op),filters:s}}})(t):_e(54877,{filter:t})}function $b(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function m_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Hb{constructor(e){this.yt=e}}function jb(t){const e=Vb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Fc(e,e.limit,"L"):e}/**
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
 */class Gb{constructor(){this.Cn=new qb}addToCollectionParentIndex(e,n){return this.Cn.add(n),Y.resolve()}getCollectionParents(e,n){return Y.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return Y.resolve()}deleteFieldIndex(e,n){return Y.resolve()}deleteAllFieldIndexes(e){return Y.resolve()}createTargetIndexes(e,n){return Y.resolve()}getDocumentsMatchingTarget(e,n){return Y.resolve(null)}getIndexType(e,n){return Y.resolve(0)}getFieldIndexes(e,n){return Y.resolve([])}getNextCollectionGroupToUpdate(e){return Y.resolve(null)}getMinOffset(e,n){return Y.resolve(Ks.min())}getMinOffsetFromCollectionGroup(e,n){return Y.resolve(Ks.min())}updateCollectionGroup(e,n,s){return Y.resolve()}updateIndexEntries(e,n){return Y.resolve()}}class qb{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new Vt(pt.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Vt(pt.comparator)).toArray()}}/**
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
 */const Pp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},v_=41943040;class vn{static withCacheSize(e){return new vn(e,vn.DEFAULT_COLLECTION_PERCENTILE,vn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vn.DEFAULT_COLLECTION_PERCENTILE=10,vn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vn.DEFAULT=new vn(v_,vn.DEFAULT_COLLECTION_PERCENTILE,vn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vn.DISABLED=new vn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const kp="LruGarbageCollector",Qb=1048576;function Dp([t,e],[n,s]){const i=Ve(t,n);return i===0?Ve(e,s):i}class Wb{constructor(e){this.Ir=e,this.buffer=new Vt(Dp),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();Dp(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class zb{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ce(kp,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){mr(n)?ce(kp,"Ignoring IndexedDB error during garbage collection: ",n):await gr(n)}await this.Vr(3e5)}))}}class Kb{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(e,n){if(n===0)return Y.resolve(cl.ce);const s=new Wb(n);return this.mr.forEachTarget(e,(i=>s.Ar(i.sequenceNumber))).next((()=>this.mr.pr(e,(i=>s.Ar(i))))).next((()=>s.maxValue))}removeTargets(e,n,s){return this.mr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ce("LruGarbageCollector","Garbage collection skipped; disabled"),Y.resolve(Pp)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ce("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Pp):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let s,i,r,o,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(ce("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i)))).next((p=>(s=p,l=Date.now(),this.removeTargets(e,s,n)))).next((p=>(r=p,c=Date.now(),this.removeOrphanedDocuments(e,s)))).next((p=>(u=Date.now(),Li()<=Oe.DEBUG&&ce("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${r} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),Y.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:p}))))}}function Yb(t,e){return new Kb(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(){this.changes=new Ri((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,en.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?Y.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Xb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next((i=>(s=i,this.remoteDocumentCache.getEntry(e,n)))).next((i=>(s!==null&&Xr(s.mutation,i,On.empty(),ft.now()),i)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.getLocalViewOfDocuments(e,s,Le()).next((()=>s))))}getLocalViewOfDocuments(e,n,s=Le()){const i=fi();return this.populateOverlays(e,i,n).next((()=>this.computeViews(e,n,i,s).next((r=>{let o=Or();return r.forEach(((l,c)=>{o=o.insert(l,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const s=fi();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,Le())))}populateOverlays(e,n,s){const i=[];return s.forEach((r=>{n.has(r)||i.push(r)})),this.documentOverlayCache.getOverlays(e,i).next((r=>{r.forEach(((o,l)=>{n.set(o,l)}))}))}computeViews(e,n,s,i){let r=Es();const o=Jr(),l=(function(){return Jr()})();return n.forEach(((c,u)=>{const d=s.get(u.key);i.has(u.key)&&(d===void 0||d.mutation instanceof Pi)?r=r.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Xr(d.mutation,u,d.mutation.getFieldMask(),ft.now())):o.set(u.key,On.empty())})),this.recalculateAndSaveOverlays(e,r).next((c=>(c.forEach(((u,d)=>o.set(u,d))),n.forEach(((u,d)=>l.set(u,new Xb(d,o.get(u)??null)))),l)))}recalculateAndSaveOverlays(e,n){const s=Jr();let i=new gt(((o,l)=>o-l)),r=Le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const l of o)l.keys().forEach((c=>{const u=n.get(c);if(u===null)return;let d=s.get(c)||On.empty();d=l.applyToLocalView(u,d),s.set(c,d);const p=(i.get(l.batchId)||Le()).add(c);i=i.insert(l.batchId,p)}))})).next((()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,p=Xv();d.forEach((m=>{if(!r.has(m)){const v=i_(n.get(m),s.get(m));v!==null&&p.set(m,v),r=r.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return Y.waitFor(o)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,n,s,i){return(function(o){return me.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):tb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,i):this.getDocumentsMatchingCollectionQuery(e,n,s,i)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next((r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):Y.resolve(fi());let l=ho,c=r;return o.next((u=>Y.forEach(u,((d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),r.get(d)?Y.resolve():this.remoteDocumentCache.getEntry(e,d).next((m=>{c=c.insert(d,m)}))))).next((()=>this.populateOverlays(e,u,r))).next((()=>this.computeViews(e,c,u,Le()))).next((d=>({batchId:l,changes:Jv(d)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new me(n)).next((s=>{let i=Or();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i}))}getDocumentsMatchingCollectionGroupQuery(e,n,s,i){const r=n.collectionGroup;let o=Or();return this.indexManager.getCollectionParents(e,r).next((l=>Y.forEach(l,(c=>{const u=(function(p,m){return new dl(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,c.child(r));return this.getDocumentsMatchingCollectionQuery(e,u,s,i).next((d=>{d.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next((o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r,i)))).next((o=>{r.forEach(((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,en.newInvalidDocument(d)))}));let l=Or();return o.forEach(((c,u)=>{const d=r.get(c);d!==void 0&&Xr(d.mutation,u,On.empty(),ft.now()),pl(n,u)&&(l=l.insert(c,u))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return Y.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(i){return{id:i.id,version:i.version,createTime:Jn(i.createTime)}})(n)),Y.resolve()}getNamedQuery(e,n){return Y.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(i){return{name:i.name,query:jb(i.bundledQuery),readTime:Jn(i.readTime)}})(n)),Y.resolve()}}/**
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
 */class tS{constructor(){this.overlays=new gt(me.comparator),this.qr=new Map}getOverlay(e,n){return Y.resolve(this.overlays.get(n))}getOverlays(e,n){const s=fi();return Y.forEach(n,(i=>this.getOverlay(e,i).next((r=>{r!==null&&s.set(i,r)})))).next((()=>s))}saveOverlays(e,n,s){return s.forEach(((i,r)=>{this.St(e,n,r)})),Y.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.qr.get(s);return i!==void 0&&(i.forEach((r=>this.overlays=this.overlays.remove(r))),this.qr.delete(s)),Y.resolve()}getOverlaysForCollection(e,n,s){const i=fi(),r=n.length+1,o=new me(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return Y.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new gt(((u,d)=>u-d));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let d=r.get(u.largestBatchId);d===null&&(d=fi(),r=r.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=fi(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((u,d)=>l.set(u,d))),!(l.size()>=i)););return Y.resolve(l)}St(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(s.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new yb(n,s));let r=this.qr.get(n);r===void 0&&(r=Le(),this.qr.set(n,r)),this.qr.set(n,r.add(s.key))}}/**
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
 */class nS{constructor(){this.sessionToken=zt.EMPTY_BYTE_STRING}getSessionToken(e){return Y.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,Y.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(){this.Qr=new Vt(Ut.$r),this.Ur=new Vt(Ut.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const s=new Ut(e,n);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,n){e.forEach((s=>this.addReference(s,n)))}removeReference(e,n){this.Gr(new Ut(e,n))}zr(e,n){e.forEach((s=>this.removeReference(s,n)))}jr(e){const n=new me(new pt([])),s=new Ut(n,e),i=new Ut(n,e+1),r=[];return this.Ur.forEachInRange([s,i],(o=>{this.Gr(o),r.push(o.key)})),r}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new me(new pt([])),s=new Ut(n,e),i=new Ut(n,e+1);let r=Le();return this.Ur.forEachInRange([s,i],(o=>{r=r.add(o.key)})),r}containsKey(e){const n=new Ut(e,0),s=this.Qr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ut{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return me.comparator(e.key,n.key)||Ve(e.Yr,n.Yr)}static Kr(e,n){return Ve(e.Yr,n.Yr)||me.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Vt(Ut.$r)}checkEmpty(e){return Y.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new _b(r,n,s,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new Ut(l.key,r)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return Y.resolve(o)}lookupMutationBatch(e,n){return Y.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ei(s),r=i<0?0:i;return Y.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return Y.resolve(this.mutationQueue.length===0?Du:this.tr-1)}getAllMutationBatches(e){return Y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ut(n,0),i=new Ut(n,Number.POSITIVE_INFINITY),r=[];return this.Zr.forEachInRange([s,i],(o=>{const l=this.Xr(o.Yr);r.push(l)})),Y.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Vt(Ve);return n.forEach((i=>{const r=new Ut(i,0),o=new Ut(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([r,o],(l=>{s=s.add(l.Yr)}))})),Y.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;me.isDocumentKey(r)||(r=r.child(""));const o=new Ut(new me(r),0);let l=new Vt(Ve);return this.Zr.forEachWhile((c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(l=l.add(c.Yr)),!0)}),o),Y.resolve(this.ti(l))}ti(e){const n=[];return e.forEach((s=>{const i=this.Xr(s);i!==null&&n.push(i)})),n}removeMutationBatch(e,n){Ke(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return Y.forEach(n.mutations,(i=>{const r=new Ut(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,n){const s=new Ut(n,0),i=this.Zr.firstAfterOrEqual(s);return Y.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,Y.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e){this.ri=e,this.docs=(function(){return new gt(me.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.ri(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return Y.resolve(s?s.document.mutableCopy():en.newInvalidDocument(n))}getEntries(e,n){let s=Es();return n.forEach((i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():en.newInvalidDocument(i))})),Y.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Es();const o=n.path,l=new me(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||xC(DC(d),s)<=0||(i.has(d.key)||pl(n,d))&&(r=r.insert(d.key,d.mutableCopy()))}return Y.resolve(r)}getAllFromCollectionGroup(e,n,s,i){_e(9500)}ii(e,n){return Y.forEach(this.docs,(s=>n(s)))}newChangeBuffer(e){return new rS(this)}getSize(e){return Y.resolve(this.size)}}class rS extends Jb{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((s,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(s)})),Y.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e){this.persistence=e,this.si=new Ri((n=>Mu(n)),Ou),this.lastRemoteSnapshotVersion=Ae.min(),this.highestTargetId=0,this.oi=0,this._i=new $u,this.targetCount=0,this.ai=or.ur()}forEachTarget(e,n){return this.si.forEach(((s,i)=>n(i))),Y.resolve()}getLastRemoteSnapshotVersion(e){return Y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Y.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),Y.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.oi&&(this.oi=n),Y.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new or(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,Y.resolve()}updateTargetData(e,n){return this.Pr(n),Y.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,Y.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.si.forEach(((o,l)=>{l.sequenceNumber<=n&&s.get(l.targetId)===null&&(this.si.delete(o),r.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)})),Y.waitFor(r).next((()=>i))}getTargetCount(e){return Y.resolve(this.targetCount)}getTargetData(e,n){const s=this.si.get(n)||null;return Y.resolve(s)}addMatchingKeys(e,n,s){return this._i.Wr(n,s),Y.resolve()}removeMatchingKeys(e,n,s){this._i.zr(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach((o=>{r.push(i.markPotentiallyOrphaned(e,o))})),Y.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),Y.resolve()}getMatchingKeysForTargetId(e,n){const s=this._i.Hr(n);return Y.resolve(s)}containsKey(e,n){return Y.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e,n){this.ui={},this.overlays={},this.ci=new cl(0),this.li=!1,this.li=!0,this.hi=new nS,this.referenceDelegate=e(this),this.Pi=new oS(this),this.indexManager=new Gb,this.remoteDocumentCache=(function(i){return new iS(i)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new Hb(n),this.Ii=new eS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new tS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.ui[e.toKey()];return s||(s=new sS(n,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,s){ce("MemoryPersistence","Starting transaction:",e);const i=new aS(this.ci.next());return this.referenceDelegate.Ei(),s(i).next((r=>this.referenceDelegate.di(i).next((()=>r)))).toPromise().then((r=>(i.raiseOnCommittedEvent(),r)))}Ai(e,n){return Y.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,n))))}}class aS extends MC{constructor(e){super(),this.currentSequenceNumber=e}}class Hu{constructor(e){this.persistence=e,this.Ri=new $u,this.Vi=null}static mi(e){return new Hu(e)}get fi(){if(this.Vi)return this.Vi;throw _e(60996)}addReference(e,n,s){return this.Ri.addReference(s,n),this.fi.delete(s.toString()),Y.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.fi.add(s.toString()),Y.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),Y.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((i=>this.fi.add(i.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next((i=>{i.forEach((r=>this.fi.add(r.toString())))})).next((()=>s.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Y.forEach(this.fi,(s=>{const i=me.fromPath(s);return this.gi(e,i).next((r=>{r||n.removeEntry(i,Ae.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((s=>{s?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return Y.or([()=>Y.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Ua{constructor(e,n){this.persistence=e,this.pi=new Ri((s=>LC(s.path)),((s,i)=>s.isEqual(i))),this.garbageCollector=Yb(this,n)}static mi(e,n){return new Ua(e,n)}Ei(){}di(e){return Y.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>n.next((i=>s+i))))}wr(e){let n=0;return this.pr(e,(s=>{n++})).next((()=>n))}pr(e,n){return Y.forEach(this.pi,((s,i)=>this.br(e,s,i).next((r=>r?Y.resolve():n(i)))))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const i=this.persistence.getRemoteDocumentCache(),r=i.newChangeBuffer();return i.ii(e,(o=>this.br(e,o,n).next((l=>{l||(s++,r.removeEntry(o,Ae.min()))})))).next((()=>r.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),Y.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),Y.resolve()}removeReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),Y.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),Y.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=aa(e.data.value)),n}br(e,n,s){return Y.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return Y.resolve(i!==void 0&&i>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Es=s,this.ds=i}static As(e,n){let s=Le(),i=Le();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new ju(e,n.fromCache,s,i)}}/**
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
 */class lS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class cS{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Jw()?8:OC(rn())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,s,i){const r={result:null};return this.ys(e,n).next((o=>{r.result=o})).next((()=>{if(!r.result)return this.ws(e,n,i,s).next((o=>{r.result=o}))})).next((()=>{if(r.result)return;const o=new lS;return this.Ss(e,n,o).next((l=>{if(r.result=l,this.Vs)return this.bs(e,n,o,l.size)}))})).next((()=>r.result))}bs(e,n,s,i){return s.documentReadCount<this.fs?(Li()<=Oe.DEBUG&&ce("QueryEngine","SDK will not create cache indexes for query:",Bi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),Y.resolve()):(Li()<=Oe.DEBUG&&ce("QueryEngine","Query:",Bi(n),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.gs*i?(Li()<=Oe.DEBUG&&ce("QueryEngine","The SDK decides to create cache indexes for query:",Bi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yn(n))):Y.resolve())}ys(e,n){if(yp(n))return Y.resolve(null);let s=Yn(n);return this.indexManager.getIndexType(e,s).next((i=>i===0?null:(n.limit!==null&&i===1&&(n=Fc(n,null,"F"),s=Yn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next((r=>{const o=Le(...r);return this.ps.getDocuments(e,o).next((l=>this.indexManager.getMinOffset(e,s).next((c=>{const u=this.Ds(n,l);return this.Cs(n,u,o,c.readTime)?this.ys(e,Fc(n,null,"F")):this.vs(e,u,n,c)}))))})))))}ws(e,n,s,i){return yp(n)||i.isEqual(Ae.min())?Y.resolve(null):this.ps.getDocuments(e,s).next((r=>{const o=this.Ds(n,r);return this.Cs(n,o,s,i)?Y.resolve(null):(Li()<=Oe.DEBUG&&ce("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Bi(n)),this.vs(e,o,n,kC(i,ho)).next((l=>l)))}))}Ds(e,n){let s=new Vt(Kv(e));return n.forEach(((i,r)=>{pl(e,r)&&(s=s.add(r))})),s}Cs(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ss(e,n,s){return Li()<=Oe.DEBUG&&ce("QueryEngine","Using full collection scan to execute query:",Bi(n)),this.ps.getDocumentsMatchingQuery(e,n,Ks.min(),s)}vs(e,n,s,i){return this.ps.getDocumentsMatchingQuery(e,s,i).next((r=>(n.forEach((o=>{r=r.insert(o.key,o)})),r)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu="LocalStore",uS=3e8;class hS{constructor(e,n,s,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new gt(Ve),this.xs=new Ri((r=>Mu(r)),Ou),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Zb(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function dS(t,e,n,s){return new hS(t,e,n,s)}async function y_(t,e){const n=Ee(t);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next((r=>(i=r,n.Bs(e),n.mutationQueue.getAllMutationBatches(s)))).next((r=>{const o=[],l=[];let c=Le();for(const u of i){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of r){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(s,c).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:l})))}))}))}function fS(t,e){const n=Ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const i=e.batch.keys(),r=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,c,u,d){const p=u.batch,m=p.keys();let v=Y.resolve();return m.forEach((T=>{v=v.next((()=>d.getEntry(c,T))).next((w=>{const y=u.docVersions.get(T);Ke(y!==null,48541),w.version.compareTo(y)<0&&(p.applyToRemoteDocument(w,u),w.isValidDocument()&&(w.setReadTime(u.commitVersion),d.addEntry(w)))}))})),v.next((()=>l.mutationQueue.removeMutationBatch(c,p)))})(n,s,e,r).next((()=>r.apply(s))).next((()=>n.mutationQueue.performConsistencyCheck(s))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(l){let c=Le();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c})(e)))).next((()=>n.localDocuments.getDocuments(s,i)))}))}function A_(t){const e=Ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function pS(t,e){const n=Ee(t),s=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const l=[];e.targetChanges.forEach(((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.Pi.removeMatchingKeys(r,d.removedDocuments,p).next((()=>n.Pi.addMatchingKeys(r,d.addedDocuments,p))));let v=m.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(zt.EMPTY_BYTE_STRING,Ae.min()).withLastLimboFreeSnapshotVersion(Ae.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,s)),i=i.insert(p,v),(function(w,y,k){return w.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=uS?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0})(m,v,d)&&l.push(n.Pi.updateTargetData(r,v))}));let c=Es(),u=Le();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(r,d))})),l.push(gS(r,o,e.documentUpdates).next((d=>{c=d.ks,u=d.qs}))),!s.isEqual(Ae.min())){const d=n.Pi.getLastRemoteSnapshotVersion(r).next((p=>n.Pi.setTargetsMetadata(r,r.currentSequenceNumber,s)));l.push(d)}return Y.waitFor(l).next((()=>o.apply(r))).next((()=>n.localDocuments.getLocalViewOfDocuments(r,c,u))).next((()=>c))})).then((r=>(n.Ms=i,r)))}function gS(t,e,n){let s=Le(),i=Le();return n.forEach((r=>s=s.add(r))),e.getEntries(t,s).next((r=>{let o=Es();return n.forEach(((l,c)=>{const u=r.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(Ae.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):ce(Gu,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)})),{ks:o,qs:i}}))}function mS(t,e){const n=Ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Du),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function vS(t,e){const n=Ee(t);return n.persistence.runTransaction("Allocate target","readwrite",(s=>{let i;return n.Pi.getTargetData(s,e).next((r=>r?(i=r,Y.resolve(i)):n.Pi.allocateTargetId(s).next((o=>(i=new Bs(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Pi.addTargetData(s,i).next((()=>i)))))))})).then((s=>{const i=n.Ms.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.xs.set(e,s.targetId)),s}))}async function Gc(t,e,n){const s=Ee(t),i=s.Ms.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,(o=>s.persistence.referenceDelegate.removeTarget(o,i)))}catch(o){if(!mr(o))throw o;ce(Gu,`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ms=s.Ms.remove(e),s.xs.delete(i.target)}function xp(t,e,n){const s=Ee(t);let i=Ae.min(),r=Le();return s.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,u,d){const p=Ee(c),m=p.xs.get(d);return m!==void 0?Y.resolve(p.Ms.get(m)):p.Pi.getTargetData(u,d)})(s,o,Yn(e)).next((l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(o,l.targetId).next((c=>{r=c}))})).next((()=>s.Fs.getDocumentsMatchingQuery(o,e,n?i:Ae.min(),n?r:Le()))).next((l=>(_S(s,sb(e),l),{documents:l,Qs:r})))))}function _S(t,e,n){let s=t.Os.get(e)||Ae.min();n.forEach(((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)})),t.Os.set(e,s)}class Np{constructor(){this.activeTargetIds=cb()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class yS{constructor(){this.Mo=new Np,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,s){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Np,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class AS{Oo(e){}shutdown(){}}/**
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
 */const Mp="ConnectivityMonitor";class Op{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ce(Mp,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ce(Mp,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Yo=null;function qc(){return Yo===null?Yo=(function(){return 268435456+Math.round(2147483648*Math.random())})():Yo++,"0x"+Yo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc="RestConnection",IS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class wS{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${s}/databases/${i}`,this.Wo=this.databaseId.database===Na?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Go(e,n,s,i,r){const o=qc(),l=this.zo(e,n.toUriEncodedString());ce(sc,`Sending RPC '${e}' ${o}:`,l,s);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,i,r);const{host:u}=new URL(l),d=ur(u);return this.Jo(e,l,c,s,d).then((p=>(ce(sc,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw nr(sc,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",s),p}))}Ho(e,n,s,i,r,o){return this.Go(e,n,s,i,r)}jo(e,n,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+pr})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((i,r)=>e[r]=i)),s&&s.headers.forEach(((i,r)=>e[r]=i))}zo(e,n){const s=IS[e];return`${this.Uo}/v1/${n}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt="WebChannelConnection";class TS extends wS{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,s,i,r){const o=qc();return new Promise(((l,c)=>{const u=new Tv;u.setWithCredentials(!0),u.listenOnce(Cv.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case oa.NO_ERROR:const p=u.getResponseJson();ce(Jt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case oa.TIMEOUT:ce(Jt,`RPC '${e}' ${o} timed out`),c(new fe(X.DEADLINE_EXCEEDED,"Request time out"));break;case oa.HTTP_ERROR:const m=u.getStatus();if(ce(Jt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const T=v?.error;if(T&&T.status&&T.message){const w=(function(k){const F=k.toLowerCase().replace(/_/g,"-");return Object.values(X).indexOf(F)>=0?F:X.UNKNOWN})(T.status);c(new fe(w,T.message))}else c(new fe(X.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new fe(X.UNAVAILABLE,"Connection failed."));break;default:_e(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{ce(Jt,`RPC '${e}' ${o} completed.`)}}));const d=JSON.stringify(i);ce(Jt,`RPC '${e}' ${o} sending request:`,i),u.send(n,"POST",d,s,15)}))}T_(e,n,s){const i=qc(),r=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Rv(),l=Sv(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const d=r.join("");ce(Jt,`Creating RPC '${e}' stream ${i}: ${d}`,c);const p=o.createWebChannel(d,c);this.I_(p);let m=!1,v=!1;const T=new ES({Yo:y=>{v?ce(Jt,`Not sending because RPC '${e}' stream ${i} is closed:`,y):(m||(ce(Jt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),ce(Jt,`RPC '${e}' stream ${i} sending:`,y),p.send(y))},Zo:()=>p.close()}),w=(y,k,F)=>{y.listen(k,(U=>{try{F(U)}catch(j){setTimeout((()=>{throw j}),0)}}))};return w(p,Mr.EventType.OPEN,(()=>{v||(ce(Jt,`RPC '${e}' stream ${i} transport opened.`),T.o_())})),w(p,Mr.EventType.CLOSE,(()=>{v||(v=!0,ce(Jt,`RPC '${e}' stream ${i} transport closed`),T.a_(),this.E_(p))})),w(p,Mr.EventType.ERROR,(y=>{v||(v=!0,nr(Jt,`RPC '${e}' stream ${i} transport errored. Name:`,y.name,"Message:",y.message),T.a_(new fe(X.UNAVAILABLE,"The operation could not be completed")))})),w(p,Mr.EventType.MESSAGE,(y=>{if(!v){const k=y.data[0];Ke(!!k,16349);const F=k,U=F?.error||F[0]?.error;if(U){ce(Jt,`RPC '${e}' stream ${i} received error:`,U);const j=U.status;let se=(function(I){const C=Tt[I];if(C!==void 0)return a_(C)})(j),Ie=U.message;se===void 0&&(se=X.INTERNAL,Ie="Unknown error status: "+j+" with message "+U.message),v=!0,T.a_(new fe(se,Ie)),p.close()}else ce(Jt,`RPC '${e}' stream ${i} received:`,k),T.u_(k)}})),w(l,bv.STAT_EVENT,(y=>{y.stat===Nc.PROXY?ce(Jt,`RPC '${e}' stream ${i} detected buffering proxy`):y.stat===Nc.NOPROXY&&ce(Jt,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{T.__()}),0),T}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function ic(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(t){return new Rb(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Mi=e,this.timerId=n,this.d_=s,this.A_=i,this.R_=r,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-s);i>0&&ce("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp="PersistentStream";class w_{constructor(e,n,s,i,r,o,l,c){this.Mi=e,this.S_=s,this.b_=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new I_(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===X.RESOURCE_EXHAUSTED?(ws(n.toString()),ws("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===X.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,i])=>{this.D_===n&&this.G_(s,i)}),(s=>{e((()=>{const i=new fe(X.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(i)}))}))}G_(e,n){const s=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{s((()=>this.z_(i)))})),this.stream.onMessage((i=>{s((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ce(Vp,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(ce(Vp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class CS extends w_{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=Db(this.serializer,e),s=(function(r){if(!("targetChange"in r))return Ae.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?Ae.min():o.readTime?Jn(o.readTime):Ae.min()})(e);return this.listener.H_(n,s)}Y_(e){const n={};n.database=jc(this.serializer),n.addTarget=(function(r,o){let l;const c=o.target;if(l=Bc(c)?{documents:Mb(r,c)}:{query:Ob(r,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=u_(r,o.resumeToken);const u=Uc(r,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(Ae.min())>0){l.readTime=Fa(r,o.snapshotVersion.toTimestamp());const u=Uc(r,o.expectedCount);u!==null&&(l.expectedCount=u)}return l})(this.serializer,e);const s=Lb(this.serializer,e);s&&(n.labels=s),this.q_(n)}Z_(e){const n={};n.database=jc(this.serializer),n.removeTarget=e,this.q_(n)}}class bS extends w_{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Ke(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ke(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ke(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=Nb(e.writeResults,e.commitTime),s=Jn(e.commitTime);return this.listener.na(s,n)}ra(){const e={};e.database=jc(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((s=>xb(this.serializer,s)))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{}class RS extends SS{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new fe(X.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.Go(e,$c(n,s),i,r,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new fe(X.UNKNOWN,r.toString())}))}Ho(e,n,s,i,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.Ho(e,$c(n,s),i,o,l,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new fe(X.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class PS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */const Ii="RemoteStore";class kS{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=r,this.Aa.Oo((o=>{s.enqueueAndForget((async()=>{ki(this)&&(ce(Ii,"Restarting streams for network reachability change."),await(async function(c){const u=Ee(c);u.Ea.add(4),await ko(u),u.Ra.set("Unknown"),u.Ea.delete(4),await yl(u)})(this))}))})),this.Ra=new PS(s,i)}}async function yl(t){if(ki(t))for(const e of t.da)await e(!0)}async function ko(t){for(const e of t.da)await e(!1)}function E_(t,e){const n=Ee(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),zu(n)?Wu(n):vr(n).O_()&&Qu(n,e))}function qu(t,e){const n=Ee(t),s=vr(n);n.Ia.delete(e),s.O_()&&T_(n,e),n.Ia.size===0&&(s.O_()?s.L_():ki(n)&&n.Ra.set("Unknown"))}function Qu(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ae.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}vr(t).Y_(e)}function T_(t,e){t.Va.Ue(e),vr(t).Z_(e)}function Wu(t){t.Va=new Tb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),vr(t).start(),t.Ra.ua()}function zu(t){return ki(t)&&!vr(t).x_()&&t.Ia.size>0}function ki(t){return Ee(t).Ea.size===0}function C_(t){t.Va=void 0}async function DS(t){t.Ra.set("Online")}async function xS(t){t.Ia.forEach(((e,n)=>{Qu(t,e)}))}async function NS(t,e){C_(t),zu(t)?(t.Ra.ha(e),Wu(t)):t.Ra.set("Unknown")}async function MS(t,e,n){if(t.Ra.set("Online"),e instanceof c_&&e.state===2&&e.cause)try{await(async function(i,r){const o=r.cause;for(const l of r.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))})(t,e)}catch(s){ce(Ii,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await $a(t,s)}else if(e instanceof ua?t.Va.Ze(e):e instanceof l_?t.Va.st(e):t.Va.tt(e),!n.isEqual(Ae.min()))try{const s=await A_(t.localStore);n.compareTo(s)>=0&&await(function(r,o){const l=r.Va.Tt(o);return l.targetChanges.forEach(((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=r.Ia.get(u);d&&r.Ia.set(u,d.withResumeToken(c.resumeToken,o))}})),l.targetMismatches.forEach(((c,u)=>{const d=r.Ia.get(c);if(!d)return;r.Ia.set(c,d.withResumeToken(zt.EMPTY_BYTE_STRING,d.snapshotVersion)),T_(r,c);const p=new Bs(d.target,c,u,d.sequenceNumber);Qu(r,p)})),r.remoteSyncer.applyRemoteEvent(l)})(t,n)}catch(s){ce(Ii,"Failed to raise snapshot:",s),await $a(t,s)}}async function $a(t,e,n){if(!mr(e))throw e;t.Ea.add(1),await ko(t),t.Ra.set("Offline"),n||(n=()=>A_(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{ce(Ii,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await yl(t)}))}function b_(t,e){return e().catch((n=>$a(t,n,e)))}async function Al(t){const e=Ee(t),n=Zs(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Du;for(;OS(e);)try{const i=await mS(e.localStore,s);if(i===null){e.Ta.length===0&&n.L_();break}s=i.batchId,VS(e,i)}catch(i){await $a(e,i)}S_(e)&&R_(e)}function OS(t){return ki(t)&&t.Ta.length<10}function VS(t,e){t.Ta.push(e);const n=Zs(t);n.O_()&&n.X_&&n.ea(e.mutations)}function S_(t){return ki(t)&&!Zs(t).x_()&&t.Ta.length>0}function R_(t){Zs(t).start()}async function LS(t){Zs(t).ra()}async function BS(t){const e=Zs(t);for(const n of t.Ta)e.ea(n.mutations)}async function FS(t,e,n){const s=t.Ta.shift(),i=Bu.from(s,e,n);await b_(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await Al(t)}async function US(t,e){e&&Zs(t).X_&&await(async function(s,i){if((function(o){return Ib(o)&&o!==X.ABORTED})(i.code)){const r=s.Ta.shift();Zs(s).B_(),await b_(s,(()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i))),await Al(s)}})(t,e),S_(t)&&R_(t)}async function Lp(t,e){const n=Ee(t);n.asyncQueue.verifyOperationInProgress(),ce(Ii,"RemoteStore received new credentials");const s=ki(n);n.Ea.add(3),await ko(n),s&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await yl(n)}async function $S(t,e){const n=Ee(t);e?(n.Ea.delete(2),await yl(n)):e||(n.Ea.add(2),await ko(n),n.Ra.set("Unknown"))}function vr(t){return t.ma||(t.ma=(function(n,s,i){const r=Ee(n);return r.sa(),new CS(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)})(t.datastore,t.asyncQueue,{Xo:DS.bind(null,t),t_:xS.bind(null,t),r_:NS.bind(null,t),H_:MS.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),zu(t)?Wu(t):t.Ra.set("Unknown")):(await t.ma.stop(),C_(t))}))),t.ma}function Zs(t){return t.fa||(t.fa=(function(n,s,i){const r=Ee(n);return r.sa(),new bS(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)})(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:LS.bind(null,t),r_:US.bind(null,t),ta:BS.bind(null,t),na:FS.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await Al(t)):(await t.fa.stop(),t.Ta.length>0&&(ce(Ii,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Gs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,l=new Ku(e,n,o,i,r);return l.start(s),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new fe(X.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yu(t,e){if(ws("AsyncQueue",`${e}: ${t}`),mr(t))return new fe(X.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{static emptySet(e){return new Ki(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||me.comparator(n.key,s.key):(n,s)=>me.comparator(n.key,s.key),this.keyedMap=Or(),this.sortedSet=new gt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,s)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ki)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Bp{constructor(){this.ga=new gt(me.comparator)}track(e){const n=e.doc.key,s=this.ga.get(n);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(n,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(n):e.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):_e(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,s)=>{e.push(s)})),e}}class ar{constructor(e,n,s,i,r,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach((l=>{o.push({type:0,doc:l})})),new ar(e,n,Ki.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class jS{constructor(){this.queries=Fp(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const i=Ee(n),r=i.queries;i.queries=Fp(),r.forEach(((o,l)=>{for(const c of l.Sa)c.onError(s)}))})(this,new fe(X.ABORTED,"Firestore shutting down"))}}function Fp(){return new Ri((t=>zv(t)),fl)}async function GS(t,e){const n=Ee(t);let s=3;const i=e.query;let r=n.queries.get(i);r?!r.ba()&&e.Da()&&(s=2):(r=new HS,s=e.Da()?0:1);try{switch(s){case 0:r.wa=await n.onListen(i,!0);break;case 1:r.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Yu(o,`Initialization of query '${Bi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,r),r.Sa.push(e),e.va(n.onlineState),r.wa&&e.Fa(r.wa)&&Ju(n)}async function qS(t,e){const n=Ee(t),s=e.query;let i=3;const r=n.queries.get(s);if(r){const o=r.Sa.indexOf(e);o>=0&&(r.Sa.splice(o,1),r.Sa.length===0?i=e.Da()?0:1:!r.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function QS(t,e){const n=Ee(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const l of o.Sa)l.Fa(i)&&(s=!0);o.wa=i}}s&&Ju(n)}function WS(t,e,n){const s=Ee(t),i=s.queries.get(e);if(i)for(const r of i.Sa)r.onError(n);s.queries.delete(e)}function Ju(t){t.Ca.forEach((e=>{e.next()}))}var Qc,Up;(Up=Qc||(Qc={})).Ma="default",Up.Cache="cache";class zS{constructor(e,n,s){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new ar(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=ar.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Qc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e){this.key=e}}class k_{constructor(e){this.key=e}}class KS{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Le(),this.mutatedKeys=Le(),this.eu=Kv(e),this.tu=new Ki(this.eu)}get nu(){return this.Ya}ru(e,n){const s=n?n.iu:new Bp,i=n?n.tu:this.tu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((d,p)=>{const m=i.get(d),v=pl(this.query,p)?p:null,T=!!m&&this.mutatedKeys.has(m.key),w=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let y=!1;m&&v?m.data.isEqual(v.data)?T!==w&&(s.track({type:3,doc:v}),y=!0):this.su(m,v)||(s.track({type:2,doc:v}),y=!0,(c&&this.eu(v,c)>0||u&&this.eu(v,u)<0)&&(l=!0)):!m&&v?(s.track({type:0,doc:v}),y=!0):m&&!v&&(s.track({type:1,doc:m}),y=!0,(c||u)&&(l=!0)),y&&(v?(o=o.add(v),r=w?r.add(d):r.delete(d)):(o=o.delete(d),r=r.delete(d)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),r=r.delete(d.key),s.track({type:1,doc:d})}return{tu:o,iu:s,Cs:l,mutatedKeys:r}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,i){const r=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((d,p)=>(function(v,T){const w=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e(20277,{Rt:y})}};return w(v)-w(T)})(d.type,p.type)||this.eu(d.doc,p.doc))),this.ou(s),i=i??!1;const l=n&&!i?this._u():[],c=this.Xa.size===0&&this.current&&!i?1:0,u=c!==this.Za;return this.Za=c,o.length!==0||u?{snapshot:new ar(this.query,e.tu,r,o,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Bp,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Le(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const n=[];return e.forEach((s=>{this.Xa.has(s)||n.push(new k_(s))})),this.Xa.forEach((s=>{e.has(s)||n.push(new P_(s))})),n}cu(e){this.Ya=e.Qs,this.Xa=Le();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return ar.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Xu="SyncEngine";class YS{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class JS{constructor(e){this.key=e,this.hu=!1}}class XS{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Ri((l=>zv(l)),fl),this.Iu=new Map,this.Eu=new Set,this.du=new gt(me.comparator),this.Au=new Map,this.Ru=new $u,this.Vu={},this.mu=new Map,this.fu=or.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function ZS(t,e,n=!0){const s=V_(t);let i;const r=s.Tu.get(e);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.lu()):i=await D_(s,e,n,!0),i}async function eR(t,e){const n=V_(t);await D_(n,e,!0,!1)}async function D_(t,e,n,s){const i=await vS(t.localStore,Yn(e)),r=i.targetId,o=t.sharedClientState.addLocalQueryTarget(r,n);let l;return s&&(l=await tR(t,e,r,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&E_(t.remoteStore,i),l}async function tR(t,e,n,s,i){t.pu=(p,m,v)=>(async function(w,y,k,F){let U=y.view.ru(k);U.Cs&&(U=await xp(w.localStore,y.query,!1).then((({documents:S})=>y.view.ru(S,U))));const j=F&&F.targetChanges.get(y.targetId),se=F&&F.targetMismatches.get(y.targetId)!=null,Ie=y.view.applyChanges(U,w.isPrimaryClient,j,se);return Hp(w,y.targetId,Ie.au),Ie.snapshot})(t,p,m,v);const r=await xp(t.localStore,e,!0),o=new KS(e,r.Qs),l=o.ru(r.documents),c=Po.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),u=o.applyChanges(l,t.isPrimaryClient,c);Hp(t,n,u.au);const d=new YS(e,n,o);return t.Tu.set(e,d),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function nR(t,e,n){const s=Ee(t),i=s.Tu.get(e),r=s.Iu.get(i.targetId);if(r.length>1)return s.Iu.set(i.targetId,r.filter((o=>!fl(o,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await Gc(s.localStore,i.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(i.targetId),n&&qu(s.remoteStore,i.targetId),Wc(s,i.targetId)})).catch(gr)):(Wc(s,i.targetId),await Gc(s.localStore,i.targetId,!0))}async function sR(t,e){const n=Ee(t),s=n.Tu.get(e),i=n.Iu.get(s.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),qu(n.remoteStore,s.targetId))}async function iR(t,e,n){const s=hR(t);try{const i=await(function(o,l){const c=Ee(o),u=ft.now(),d=l.reduce(((v,T)=>v.add(T.key)),Le());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",(v=>{let T=Es(),w=Le();return c.Ns.getEntries(v,d).next((y=>{T=y,T.forEach(((k,F)=>{F.isValidDocument()||(w=w.add(k))}))})).next((()=>c.localDocuments.getOverlayedDocuments(v,T))).next((y=>{p=y;const k=[];for(const F of l){const U=mb(F,p.get(F.key).overlayedDocument);U!=null&&k.push(new Pi(F.key,U,$v(U.value.mapValue),vs.exists(!0)))}return c.mutationQueue.addMutationBatch(v,u,k,l)})).next((y=>{m=y;const k=y.applyToLocalDocumentSet(p,w);return c.documentOverlayCache.saveOverlays(v,y.batchId,k)}))})).then((()=>({batchId:m.batchId,changes:Jv(p)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),(function(o,l,c){let u=o.Vu[o.currentUser.toKey()];u||(u=new gt(Ve)),u=u.insert(l,c),o.Vu[o.currentUser.toKey()]=u})(s,i.batchId,n),await Do(s,i.changes),await Al(s.remoteStore)}catch(i){const r=Yu(i,"Failed to persist write");n.reject(r)}}async function x_(t,e){const n=Ee(t);try{const s=await pS(n.localStore,e);e.targetChanges.forEach(((i,r)=>{const o=n.Au.get(r);o&&(Ke(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?Ke(o.hu,14607):i.removedDocuments.size>0&&(Ke(o.hu,42227),o.hu=!1))})),await Do(n,s,e)}catch(s){await gr(s)}}function $p(t,e,n){const s=Ee(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.Tu.forEach(((r,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)})),(function(o,l){const c=Ee(o);c.onlineState=l;let u=!1;c.queries.forEach(((d,p)=>{for(const m of p.Sa)m.va(l)&&(u=!0)})),u&&Ju(c)})(s.eventManager,e),i.length&&s.Pu.H_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function rR(t,e,n){const s=Ee(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.Au.get(e),r=i&&i.key;if(r){let o=new gt(me.comparator);o=o.insert(r,en.newNoDocument(r,Ae.min()));const l=Le().add(r),c=new vl(Ae.min(),new Map,new gt(Ve),o,l);await x_(s,c),s.du=s.du.remove(r),s.Au.delete(e),Zu(s)}else await Gc(s.localStore,e,!1).then((()=>Wc(s,e,n))).catch(gr)}async function oR(t,e){const n=Ee(t),s=e.batch.batchId;try{const i=await fS(n.localStore,e);M_(n,s,null),N_(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Do(n,i)}catch(i){await gr(i)}}async function aR(t,e,n){const s=Ee(t);try{const i=await(function(o,l){const c=Ee(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next((p=>(Ke(p!==null,37113),d=p.keys(),c.mutationQueue.removeMutationBatch(u,p)))).next((()=>c.mutationQueue.performConsistencyCheck(u))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d))).next((()=>c.localDocuments.getDocuments(u,d)))}))})(s.localStore,e);M_(s,e,n),N_(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Do(s,i)}catch(i){await gr(i)}}function N_(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function M_(t,e,n){const s=Ee(t);let i=s.Vu[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.Vu[s.currentUser.toKey()]=i}}function Wc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Iu.get(e))t.Tu.delete(s),n&&t.Pu.yu(s,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((s=>{t.Ru.containsKey(s)||O_(t,s)}))}function O_(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(qu(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Zu(t))}function Hp(t,e,n){for(const s of n)s instanceof P_?(t.Ru.addReference(s.key,e),lR(t,s)):s instanceof k_?(ce(Xu,"Document no longer in limbo: "+s.key),t.Ru.removeReference(s.key,e),t.Ru.containsKey(s.key)||O_(t,s.key)):_e(19791,{wu:s})}function lR(t,e){const n=e.key,s=n.path.canonicalString();t.du.get(n)||t.Eu.has(s)||(ce(Xu,"New document in limbo: "+n),t.Eu.add(s),Zu(t))}function Zu(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new me(pt.fromString(e)),s=t.fu.next();t.Au.set(s,new JS(n)),t.du=t.du.insert(n,s),E_(t.remoteStore,new Bs(Yn(Vu(n.path)),s,"TargetPurposeLimboResolution",cl.ce))}}async function Do(t,e,n){const s=Ee(t),i=[],r=[],o=[];s.Tu.isEmpty()||(s.Tu.forEach(((l,c)=>{o.push(s.pu(c,e,n).then((u=>{if((u||n)&&s.isPrimaryClient){const d=u?!u.fromCache:n?.targetChanges.get(c.targetId)?.current;s.sharedClientState.updateQueryState(c.targetId,d?"current":"not-current")}if(u){i.push(u);const d=ju.As(c.targetId,u);r.push(d)}})))})),await Promise.all(o),s.Pu.H_(i),await(async function(c,u){const d=Ee(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>Y.forEach(u,(m=>Y.forEach(m.Es,(v=>d.persistence.referenceDelegate.addReference(p,m.targetId,v))).next((()=>Y.forEach(m.ds,(v=>d.persistence.referenceDelegate.removeReference(p,m.targetId,v)))))))))}catch(p){if(!mr(p))throw p;ce(Gu,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const v=d.Ms.get(m),T=v.snapshotVersion,w=v.withLastLimboFreeSnapshotVersion(T);d.Ms=d.Ms.insert(m,w)}}})(s.localStore,r))}async function cR(t,e){const n=Ee(t);if(!n.currentUser.isEqual(e)){ce(Xu,"User change. New user:",e.toKey());const s=await y_(n.localStore,e);n.currentUser=e,(function(r,o){r.mu.forEach((l=>{l.forEach((c=>{c.reject(new fe(X.CANCELLED,o))}))})),r.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Do(n,s.Ls)}}function uR(t,e){const n=Ee(t),s=n.Au.get(e);if(s&&s.hu)return Le().add(s.key);{let i=Le();const r=n.Iu.get(e);if(!r)return i;for(const o of r){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function V_(t){const e=Ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=x_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=uR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=rR.bind(null,e),e.Pu.H_=QS.bind(null,e.eventManager),e.Pu.yu=WS.bind(null,e.eventManager),e}function hR(t){const e=Ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=oR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=aR.bind(null,e),e}class Ha{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=_l(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return dS(this.persistence,new cS,e.initialUser,this.serializer)}Cu(e){return new __(Hu.mi,this.serializer)}Du(e){return new yS}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ha.provider={build:()=>new Ha};class dR extends Ha{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Ke(this.persistence.referenceDelegate instanceof Ua,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new zb(s,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?vn.withCacheSize(this.cacheSizeBytes):vn.DEFAULT;return new __((s=>Ua.mi(s,n)),this.serializer)}}class zc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>$p(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=cR.bind(null,this.syncEngine),await $S(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new jS})()}createDatastore(e){const n=_l(e.databaseInfo.databaseId),s=(function(r){return new TS(r)})(e.databaseInfo);return(function(r,o,l,c){return new RS(r,o,l,c)})(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return(function(s,i,r,o,l){return new kS(s,i,r,o,l)})(this.localStore,this.datastore,e.asyncQueue,(n=>$p(this.syncEngine,n,0)),(function(){return Op.v()?new Op:new AS})())}createSyncEngine(e,n){return(function(i,r,o,l,c,u,d){const p=new XS(i,r,o,l,c,u);return d&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const s=Ee(n);ce(Ii,"RemoteStore shutting down."),s.Ea.add(5),await ko(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}zc.provider={build:()=>new zc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class fR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):ws("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei="FirestoreClient";class pR{constructor(e,n,s,i,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Xt.UNAUTHENTICATED,this.clientId=Pu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(s,(async o=>{ce(ei,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(s,(o=>(ce(ei,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Yu(n,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function rc(t,e){t.asyncQueue.verifyOperationInProgress(),ce(ei,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async i=>{s.isEqual(i)||(await y_(e.localStore,i),s=i)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function jp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await gR(t);ce(ei,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((s=>Lp(e.remoteStore,s))),t.setAppCheckTokenChangeListener(((s,i)=>Lp(e.remoteStore,i))),t._onlineComponents=e}async function gR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ce(ei,"Using user provided OfflineComponentProvider");try{await rc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(i){return i.name==="FirebaseError"?i.code===X.FAILED_PRECONDITION||i.code===X.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(n))throw n;nr("Error using user provided cache. Falling back to memory cache: "+n),await rc(t,new Ha)}}else ce(ei,"Using default OfflineComponentProvider"),await rc(t,new dR(void 0));return t._offlineComponents}async function L_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ce(ei,"Using user provided OnlineComponentProvider"),await jp(t,t._uninitializedComponentsProvider._online)):(ce(ei,"Using default OnlineComponentProvider"),await jp(t,new zc))),t._onlineComponents}function mR(t){return L_(t).then((e=>e.syncEngine))}async function vR(t){const e=await L_(t),n=e.eventManager;return n.onListen=ZS.bind(null,e.syncEngine),n.onUnlisten=nR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=eR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=sR.bind(null,e.syncEngine),n}function _R(t,e,n={}){const s=new Gs;return t.asyncQueue.enqueueAndForget((async()=>(function(r,o,l,c,u){const d=new fR({next:m=>{d.Nu(),o.enqueueAndForget((()=>qS(r,p)));const v=m.docs.has(l);!v&&m.fromCache?u.reject(new fe(X.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&m.fromCache&&c&&c.source==="server"?u.reject(new fe(X.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new zS(Vu(l.path),d,{includeMetadataChanges:!0,qa:!0});return GS(r,p)})(await vR(t),t.asyncQueue,e,n,s))),s.promise}/**
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
 */function B_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_="firestore.googleapis.com",qp=!0;class Qp{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new fe(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=F_,this.ssl=qp}else this.host=e.host,this.ssl=e.ssl??qp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=v_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Qb)throw new fe(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}PC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=B_(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new fe(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new fe(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new fe(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,i){return s.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class eh{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new fe(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new fe(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new _C;switch(s.type){case"firstParty":return new wC(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new fe(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=Gp.get(n);s&&(ce("ComponentProvider","Removing Datastore"),Gp.delete(n),s.terminate())})(this),Promise.resolve()}}function yR(t,e,n,s={}){t=uo(t,eh);const i=ur(e),r=t._getSettings(),o={...r,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(Nm(`https://${l}`),Mm("Firestore",!0)),r.host!==F_&&r.host!==l&&nr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...r,host:l,ssl:i,emulatorOptions:s};if(!zs(c,o)&&(t._setSettings(c),s.mockUserToken)){let u,d;if(typeof s.mockUserToken=="string")u=s.mockUserToken,d=Xt.MOCK_USER;else{u=jw(s.mockUserToken,t._app?.options.projectId);const p=s.mockUserToken.sub||s.mockUserToken.user_id;if(!p)throw new fe(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Xt(p)}t._authCredentials=new yC(new kv(u,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new th(this.firestore,e,this._query)}}class $t{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _o(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $t(this.firestore,e,this._key)}toJSON(){return{type:$t._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(So(n,$t._jsonSchema))return new $t(e,s||null,new me(pt.fromString(n.referencePath)))}}$t._jsonSchemaVersion="firestore/documentReference/1.0",$t._jsonSchema={type:bt("string",$t._jsonSchemaVersion),referencePath:bt("string")};class _o extends th{constructor(e,n,s){super(e,n,Vu(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $t(this.firestore,null,new me(e))}withConverter(e){return new _o(this.firestore,e,this._path)}}function nh(t,e,...n){if(t=_n(t),arguments.length===1&&(e=Pu.newId()),RC("doc","path",e),t instanceof eh){const s=pt.fromString(e,...n);return op(s),new $t(t,null,new me(s))}{if(!(t instanceof $t||t instanceof _o))throw new fe(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(pt.fromString(e,...n));return op(s),new $t(t.firestore,t instanceof _o?t.converter:null,new me(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp="AsyncQueue";class zp{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new I_(this,"async_queue_retry"),this._c=()=>{const s=ic();s&&ce(Wp,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=ic();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=ic();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new Gs;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!mr(e))throw e;ce(Wp,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,ws("INTERNAL UNHANDLED ERROR: ",Kp(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=Ku.createAndSchedule(this,e,n,s,(r=>this.hc(r)));return this.tc.push(i),i}uc(){this.nc&&_e(47125,{Pc:Kp(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Kp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class sh extends eh{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new zp,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new zp(e),this._firestoreClient=void 0,await e}}}function AR(t,e){const n=typeof t=="object"?t:vu(),s=typeof t=="string"?t:Na,i=bi(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=$w("firestore");r&&yR(i,...r)}return i}function U_(t){if(t._terminated)throw new fe(X.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||IR(t),t._firestoreClient}function IR(t){const e=t._freezeSettings(),n=(function(i,r,o,l){return new UC(i,r,o,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,B_(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)})(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new pR(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(i){const r=i?._online.build();return{_offline:i?._offline.build(r),_online:r}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pn(zt.fromBase64String(e))}catch(n){throw new fe(X.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Pn(zt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Pn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(So(e,Pn._jsonSchema))return Pn.fromBase64String(e.bytes)}}Pn._jsonSchemaVersion="firestore/bytes/1.0",Pn._jsonSchema={type:bt("string",Pn._jsonSchemaVersion),bytes:bt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new fe(X.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new fe(X.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new fe(X.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ve(this._lat,e._lat)||Ve(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Xn._jsonSchemaVersion}}static fromJSON(e){if(So(e,Xn._jsonSchema))return new Xn(e.latitude,e.longitude)}}Xn._jsonSchemaVersion="firestore/geoPoint/1.0",Xn._jsonSchema={type:bt("string",Xn._jsonSchemaVersion),latitude:bt("number"),longitude:bt("number")};/**
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
 */class Zn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,i){if(s.length!==i.length)return!1;for(let r=0;r<s.length;++r)if(s[r]!==i[r])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Zn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(So(e,Zn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Zn(e.vectorValues);throw new fe(X.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Zn._jsonSchemaVersion="firestore/vectorValue/1.0",Zn._jsonSchema={type:bt("string",Zn._jsonSchemaVersion),vectorValues:bt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR=/^__.*__$/;class ER{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Pi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ro(e,this.data,n,this.fieldTransforms)}}function H_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e(40011,{Ac:t})}}class rh{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Rc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new rh({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.gc(e),s}yc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return ja(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(H_(this.Ac)&&wR.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class TR{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||_l(e)}Cc(e,n,s,i=!1){return new rh({Ac:e,methodName:n,Dc:s,path:Qt.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function CR(t){const e=t._freezeSettings(),n=_l(t._databaseId);return new TR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function bR(t,e,n,s,i,r={}){const o=t.Cc(r.merge||r.mergeFields?2:0,e,n,i);Q_("Data must be an object, but it was:",o,s);const l=G_(s,o);let c,u;if(r.merge)c=new On(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const d=[];for(const p of r.mergeFields){const m=SR(e,p,n);if(!o.contains(m))throw new fe(X.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);PR(d,m)||d.push(m)}c=new On(d),u=o.fieldTransforms.filter((p=>c.covers(p.field)))}else c=null,u=o.fieldTransforms;return new ER(new Rn(l),c,u)}function j_(t,e){if(q_(t=_n(t)))return Q_("Unsupported field value:",e,t),G_(t,e);if(t instanceof $_)return(function(s,i){if(!H_(i.Ac))throw i.Sc(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,i){const r=[];let o=0;for(const l of s){let c=j_(l,i.wc(o));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),o++}return{arrayValue:{values:r}}})(t,e)}return(function(s,i){if((s=_n(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return ub(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=ft.fromDate(s);return{timestampValue:Fa(i.serializer,r)}}if(s instanceof ft){const r=new ft(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Fa(i.serializer,r)}}if(s instanceof Xn)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Pn)return{bytesValue:u_(i.serializer,s._byteString)};if(s instanceof $t){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Uu(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof Zn)return(function(o,l){return{mapValue:{fields:{[Fv]:{stringValue:Uv},[Ma]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw l.Sc("VectorValues must only contain numeric values.");return Lu(l.serializer,u)}))}}}}}})(s,i);throw i.Sc(`Unsupported field value: ${ku(s)}`)})(t,e)}function G_(t,e){const n={};return Nv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Si(t,((s,i)=>{const r=j_(i,e.mc(s));r!=null&&(n[s]=r)})),{mapValue:{fields:n}}}function q_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ft||t instanceof Xn||t instanceof Pn||t instanceof $t||t instanceof $_||t instanceof Zn)}function Q_(t,e,n){if(!q_(n)||!Dv(n)){const s=ku(n);throw s==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+s)}}function SR(t,e,n){if((e=_n(e))instanceof ih)return e._internalPath;if(typeof e=="string")return W_(t,e);throw ja("Field path arguments must be of type string or ",t,!1,void 0,n)}const RR=new RegExp("[~\\*/\\[\\]]");function W_(t,e,n){if(e.search(RR)>=0)throw ja(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ih(...e.split("."))._internalPath}catch{throw ja(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ja(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new fe(X.INVALID_ARGUMENT,l+t+c)}function PR(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new $t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new kR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(K_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class kR extends z_{data(){return super.data()}}function K_(t,e){return typeof e=="string"?W_(t,e):e instanceof ih?e._internalPath:e._delegate._internalPath}class DR{convertValue(e,n="none"){switch(Xs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return It(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Js(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw _e(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return Si(e,((i,r)=>{s[i]=this.convertValue(r,n)})),s}convertVectorValue(e){const n=e.fields?.[Ma].arrayValue?.values?.map((s=>It(s.doubleValue)));return new Zn(n)}convertGeoPoint(e){return new Xn(It(e.latitude),It(e.longitude))}convertArray(e,n){return(e.values||[]).map((s=>this.convertValue(s,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const s=hl(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(fo(e));default:return null}}convertTimestamp(e){const n=Ys(e);return new ft(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=pt.fromString(e);Ke(m_(s),9688,{name:e});const i=new po(s.get(1),s.get(3)),r=new me(s.popFirst(5));return i.isEqual(n)||ws(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xR(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class Lr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vi extends z_{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ha(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(K_("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new fe(X.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=vi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}vi._jsonSchemaVersion="firestore/documentSnapshot/1.0",vi._jsonSchema={type:bt("string",vi._jsonSchemaVersion),bundleSource:bt("string","DocumentSnapshot"),bundleName:bt("string"),bundle:bt("string")};class ha extends vi{data(e={}){return super.data(e)}}class Zr{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Lr(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((s=>{e.call(n,new ha(this._firestore,this._userDataWriter,s.key,s,new Lr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new fe(X.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map((l=>{const c=new ha(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Lr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((l=>r||l.type!==3)).map((l=>{const c=new ha(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Lr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:NR(l.type),doc:c,oldIndex:u,newIndex:d}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new fe(X.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Zr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Pu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],i=[];return this.docs.forEach((r=>{r._document!==null&&(n.push(r._document),s.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),i.push(r.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function NR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(t){t=uo(t,$t);const e=uo(t.firestore,sh);return _R(U_(e),t._key).then((n=>VR(e,t,n)))}Zr._jsonSchemaVersion="firestore/querySnapshot/1.0",Zr._jsonSchema={type:bt("string",Zr._jsonSchemaVersion),bundleSource:bt("string","QuerySnapshot"),bundleName:bt("string"),bundle:bt("string")};class MR extends DR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new $t(this.firestore,null,n)}}function Kc(t,e,n){t=uo(t,$t);const s=uo(t.firestore,sh),i=xR(t.converter,e,n);return OR(s,[bR(CR(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,vs.none())])}function OR(t,e){return(function(s,i){const r=new Gs;return s.asyncQueue.enqueueAndForget((async()=>iR(await mR(s),i,r))),r.promise})(U_(t),e)}function VR(t,e,n){const s=n.docs.get(e._key),i=new MR(t);return new vi(t,i,e._key,s,new Lr(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){pr=i})(hr),ns(new Fn("firestore",((s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),l=new sh(new AC(s.getProvider("auth-internal")),new EC(o,s.getProvider("app-check-internal")),(function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new fe(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new po(u.options.projectId,d)})(o,i),o);return r={useFetchStreams:n,...r},l._setSettings(r),l}),"PUBLIC").setMultipleInstances(!0)),xn(np,sp,e),xn(np,sp,"esm2020")})();const Y_="@firebase/installations",ah="0.6.19";/**
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
 */const J_=1e4,X_=`w:${ah}`,Z_="FIS_v2",LR="https://firebaseinstallations.googleapis.com/v1",BR=3600*1e3,FR="installations",UR="Installations";/**
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
 */const $R={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},wi=new Ci(FR,UR,$R);function ey(t){return t instanceof Un&&t.code.includes("request-failed")}/**
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
 */function ty({projectId:t}){return`${LR}/projects/${t}/installations`}function ny(t){return{token:t.token,requestStatus:2,expiresIn:jR(t.expiresIn),creationTime:Date.now()}}async function sy(t,e){const s=(await e.json()).error;return wi.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function iy({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function HR(t,{refreshToken:e}){const n=iy(t);return n.append("Authorization",GR(e)),n}async function ry(t){const e=await t();return e.status>=500&&e.status<600?t():e}function jR(t){return Number(t.replace("s","000"))}function GR(t){return`${Z_} ${t}`}/**
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
 */async function qR({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=ty(t),i=iy(t),r=e.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Z_,appId:t.appId,sdkVersion:X_},l={method:"POST",headers:i,body:JSON.stringify(o)},c=await ry(()=>fetch(s,l));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:ny(u.authToken)}}else throw await sy("Create Installation",c)}/**
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
 */function oy(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function QR(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const WR=/^[cdef][\w-]{21}$/,Yc="";function zR(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=KR(t);return WR.test(n)?n:Yc}catch{return Yc}}function KR(t){return QR(t).substr(0,22)}/**
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
 */function Il(t){return`${t.appName}!${t.appId}`}/**
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
 */const ay=new Map;function ly(t,e){const n=Il(t);cy(n,e),YR(n,e)}function cy(t,e){const n=ay.get(t);if(n)for(const s of n)s(e)}function YR(t,e){const n=JR();n&&n.postMessage({key:t,fid:e}),XR()}let pi=null;function JR(){return!pi&&"BroadcastChannel"in self&&(pi=new BroadcastChannel("[Firebase] FID Change"),pi.onmessage=t=>{cy(t.data.key,t.data.fid)}),pi}function XR(){ay.size===0&&pi&&(pi.close(),pi=null)}/**
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
 */const ZR="firebase-installations-database",eP=1,Ei="firebase-installations-store";let oc=null;function lh(){return oc||(oc=Um(ZR,eP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ei)}}})),oc}async function Ga(t,e){const n=Il(t),i=(await lh()).transaction(Ei,"readwrite"),r=i.objectStore(Ei),o=await r.get(n);return await r.put(e,n),await i.done,(!o||o.fid!==e.fid)&&ly(t,e.fid),e}async function uy(t){const e=Il(t),s=(await lh()).transaction(Ei,"readwrite");await s.objectStore(Ei).delete(e),await s.done}async function wl(t,e){const n=Il(t),i=(await lh()).transaction(Ei,"readwrite"),r=i.objectStore(Ei),o=await r.get(n),l=e(o);return l===void 0?await r.delete(n):await r.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&ly(t,l.fid),l}/**
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
 */async function ch(t){let e;const n=await wl(t.appConfig,s=>{const i=tP(s),r=nP(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===Yc?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function tP(t){const e=t||{fid:zR(),registrationStatus:0};return hy(e)}function nP(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(wi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=sP(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:iP(t)}:{installationEntry:e}}async function sP(t,e){try{const n=await qR(t,e);return Ga(t.appConfig,n)}catch(n){throw ey(n)&&n.customData.serverCode===409?await uy(t.appConfig):await Ga(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function iP(t){let e=await Yp(t.appConfig);for(;e.registrationStatus===1;)await oy(100),e=await Yp(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await ch(t);return s||n}return e}function Yp(t){return wl(t,e=>{if(!e)throw wi.create("installation-not-found");return hy(e)})}function hy(t){return rP(t)?{fid:t.fid,registrationStatus:0}:t}function rP(t){return t.registrationStatus===1&&t.registrationTime+J_<Date.now()}/**
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
 */async function oP({appConfig:t,heartbeatServiceProvider:e},n){const s=aP(t,n),i=HR(t,n),r=e.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:X_,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},c=await ry(()=>fetch(s,l));if(c.ok){const u=await c.json();return ny(u)}else throw await sy("Generate Auth Token",c)}function aP(t,{fid:e}){return`${ty(t)}/${e}/authTokens:generate`}/**
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
 */async function uh(t,e=!1){let n;const s=await wl(t.appConfig,r=>{if(!dy(r))throw wi.create("not-registered");const o=r.authToken;if(!e&&uP(o))return r;if(o.requestStatus===1)return n=lP(t,e),r;{if(!navigator.onLine)throw wi.create("app-offline");const l=dP(r);return n=cP(t,l),l}});return n?await n:s.authToken}async function lP(t,e){let n=await Jp(t.appConfig);for(;n.authToken.requestStatus===1;)await oy(100),n=await Jp(t.appConfig);const s=n.authToken;return s.requestStatus===0?uh(t,e):s}function Jp(t){return wl(t,e=>{if(!dy(e))throw wi.create("not-registered");const n=e.authToken;return fP(n)?{...e,authToken:{requestStatus:0}}:e})}async function cP(t,e){try{const n=await oP(t,e),s={...e,authToken:n};return await Ga(t.appConfig,s),n}catch(n){if(ey(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await uy(t.appConfig);else{const s={...e,authToken:{requestStatus:0}};await Ga(t.appConfig,s)}throw n}}function dy(t){return t!==void 0&&t.registrationStatus===2}function uP(t){return t.requestStatus===2&&!hP(t)}function hP(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+BR}function dP(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function fP(t){return t.requestStatus===1&&t.requestTime+J_<Date.now()}/**
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
 */async function pP(t){const e=t,{installationEntry:n,registrationPromise:s}=await ch(e);return s?s.catch(console.error):uh(e).catch(console.error),n.fid}/**
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
 */async function gP(t,e=!1){const n=t;return await mP(n),(await uh(n,e)).token}async function mP(t){const{registrationPromise:e}=await ch(t);e&&await e}/**
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
 */function vP(t){if(!t||!t.options)throw ac("App Configuration");if(!t.name)throw ac("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ac(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ac(t){return wi.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy="installations",_P="installations-internal",yP=t=>{const e=t.getProvider("app").getImmediate(),n=vP(e),s=bi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},AP=t=>{const e=t.getProvider("app").getImmediate(),n=bi(e,fy).getImmediate();return{getId:()=>pP(n),getToken:i=>gP(n,i)}};function IP(){ns(new Fn(fy,yP,"PUBLIC")),ns(new Fn(_P,AP,"PRIVATE"))}IP();xn(Y_,ah);xn(Y_,ah,"esm2020");/**
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
 */const qa="analytics",wP="firebase_id",EP="origin",TP=60*1e3,CP="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",hh="https://www.googletagmanager.com/gtag/js";/**
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
 */const hn=new rl("@firebase/analytics");/**
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
 */const bP={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Tn=new Ci("analytics","Analytics",bP);/**
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
 */function SP(t){if(!t.startsWith(hh)){const e=Tn.create("invalid-gtag-resource",{gtagURL:t});return hn.warn(e.message),""}return t}function py(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function RP(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function PP(t,e){const n=RP("firebase-js-sdk-policy",{createScriptURL:SP}),s=document.createElement("script"),i=`${hh}?l=${t}&id=${e}`;s.src=n?n?.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function kP(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function DP(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const c=(await py(n)).find(u=>u.measurementId===i);c&&await e[c.appId]}}catch(l){hn.error(l)}t("config",i,r)}async function xP(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await py(n);for(const c of o){const u=l.find(p=>p.measurementId===c),d=u&&e[u.appId];if(d)r.push(d);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){hn.error(r)}}function NP(t,e,n,s){async function i(r,...o){try{if(r==="event"){const[l,c]=o;await xP(t,e,n,l,c)}else if(r==="config"){const[l,c]=o;await DP(t,e,n,s,l,c)}else if(r==="consent"){const[l,c]=o;t("consent",l,c)}else if(r==="get"){const[l,c,u]=o;t("get",l,c,u)}else if(r==="set"){const[l]=o;t("set",l)}else t(r,...o)}catch(l){hn.error(l)}}return i}function MP(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=NP(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function OP(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(hh)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VP=30,LP=1e3;class BP{constructor(e={},n=LP){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const gy=new BP;function FP(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function UP(t){const{appId:e,apiKey:n}=t,s={method:"GET",headers:FP(n)},i=CP.replace("{app-id}",e),r=await fetch(i,s);if(r.status!==200&&r.status!==304){let o="";try{const l=await r.json();l.error?.message&&(o=l.error.message)}catch{}throw Tn.create("config-fetch-failed",{httpStatus:r.status,responseMessage:o})}return r.json()}async function $P(t,e=gy,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw Tn.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw Tn.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new GP;return setTimeout(async()=>{l.abort()},TP),my({appId:s,apiKey:i,measurementId:r},o,l,e)}async function my(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=gy){const{appId:r,measurementId:o}=t;try{await HP(s,e)}catch(l){if(o)return hn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:r,measurementId:o};throw l}try{const l=await UP(t);return i.deleteThrottleMetadata(r),l}catch(l){const c=l;if(!jP(c)){if(i.deleteThrottleMetadata(r),o)return hn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:r,measurementId:o};throw l}const u=Number(c?.customData?.httpStatus)===503?Rf(n,i.intervalMillis,VP):Rf(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(r,d),hn.debug(`Calling attemptFetch again in ${u} millis`),my(t,d,s,i)}}function HP(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s(Tn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function jP(t){if(!(t instanceof Un)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class GP{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function qP(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,o={...s,send_to:r};t("event",n,o)}}async function QP(t,e,n,s){if(s&&s.global){const i={};for(const r of Object.keys(n))i[`user_properties.${r}`]=n[r];return t("set",i),Promise.resolve()}else{const i=await e;t("config",i,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WP(){if(Vm())try{await Lm()}catch(t){return hn.warn(Tn.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return hn.warn(Tn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function zP(t,e,n,s,i,r,o){const l=$P(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&hn.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>hn.error(m)),e.push(l);const c=WP().then(m=>{if(m)return s.getId()}),[u,d]=await Promise.all([l,c]);OP(r)||PP(r,u.measurementId),i("js",new Date);const p=o?.config??{};return p[EP]="firebase",p.update=!0,d!=null&&(p[wP]=d),i("config",u.measurementId,p),u.measurementId}/**
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
 */class KP{constructor(e){this.app=e}_delete(){return delete Yi[this.app.options.appId],Promise.resolve()}}let Yi={},Xp=[];const Zp={};let lc="dataLayer",YP="gtag",eg,dh,tg=!1;function JP(){const t=[];if(Om()&&t.push("This is a browser extension environment."),Xw()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=Tn.create("invalid-analytics-context",{errorInfo:e});hn.warn(n.message)}}function XP(t,e,n){JP();const s=t.options.appId;if(!s)throw Tn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)hn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Tn.create("no-api-key");if(Yi[s]!=null)throw Tn.create("already-exists",{id:s});if(!tg){kP(lc);const{wrappedGtag:r,gtagCore:o}=MP(Yi,Xp,Zp,lc,YP);dh=r,eg=o,tg=!0}return Yi[s]=zP(t,Xp,Zp,e,eg,lc,n),new KP(t)}function ZP(t=vu()){t=_n(t);const e=bi(t,qa);return e.isInitialized()?e.getImmediate():e2(t)}function e2(t,e={}){const n=bi(t,qa);if(n.isInitialized()){const i=n.getImmediate();if(zs(e,n.getOptions()))return i;throw Tn.create("already-initialized")}return n.initialize({options:e})}function t2(t,e,n){t=_n(t),QP(dh,Yi[t.app.options.appId],e,n).catch(s=>hn.error(s))}function n2(t,e,n,s){t=_n(t),qP(dh,Yi[t.app.options.appId],e,n,s).catch(i=>hn.error(i))}const ng="@firebase/analytics",sg="0.10.19";function s2(){ns(new Fn(qa,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return XP(s,i,n)},"PUBLIC")),ns(new Fn("analytics-internal",t,"PRIVATE")),xn(ng,sg),xn(ng,sg,"esm2020");function t(e){try{const n=e.getProvider(qa).getImmediate();return{logEvent:(s,i,r)=>n2(n,s,i,r),setUserProperties:(s,i)=>t2(n,s,i)}}catch(n){throw Tn.create("interop-component-reg-failed",{reason:n})}}}s2();const i2={apiKey:"AIzaSyCwvJ8cUWLZPZ26i1deIAXnoLuzToIcB70",authDomain:"tuldung.firebaseapp.com",projectId:"tuldung",storageBucket:"tuldung.firebasestorage.app",messagingSenderId:"1086524417813",appId:"1:1086524417813:web:8199da4b7cebcaffc86b1c",measurementId:"G-EGV6XDKG9R"},fh=$m(i2),eo=mC(fh),ph=AR(fh);let r2=null;if(typeof window<"u")try{r2=ZP(fh)}catch(t){console.warn("Analytics 초기화 실패:",t)}const cc=new ds,vy=async t=>{const e=nh(ph,"users",t.uid);(await oh(e)).exists()||await Kc(e,{email:t.email,displayName:t.displayName,photoURL:t.photoURL,createdAt:new Date().toISOString(),gameData:{level:1,coins:0,totalCoin:0,catFragments:50,nftCount:0,miningCats:[null,null,null,null,null,null],huntingCats:[null,null,null,null,null,null],explorationCats:[null,null,null,null,null,null],productionCats:[null,null,null,null,null,null],inventory:[]}})},o2=()=>{try{if(typeof navigator>"u")return!1;const t=navigator.userAgent||navigator.vendor||"",e=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t),n=/KAKAOTALK|KakaoTalk|NAVER|Line|Daum/i.test(t),s=window.innerWidth<=768;return e||n||s}catch(t){return console.error("환경 감지 오류:",t),!1}},a2=async()=>{try{if(o2())return await Wf(eo,cc),{success:!0,redirect:!0};try{const e=(await CT(eo,cc)).user;return await vy(e),{success:!0,user:e}}catch(t){if(t.code==="auth/popup-blocked"||t.code==="auth/popup-closed-by-user"||t.message?.includes("disallowed_useragent"))return console.log("Popup 실패, redirect로 전환:",t.message),await Wf(eo,cc),{success:!0,redirect:!0};throw t}}catch(t){return console.error("Google 로그인 오류:",t),{success:!1,error:t.message}}},l2=async()=>{try{console.log("getRedirectResult 호출 중...");const t=await xT(eo);if(console.log("getRedirectResult 결과:",t),t&&t.user){const e=t.user;return console.log("인증된 사용자:",e.email,e.uid),await vy(e),console.log("Firestore 저장 완료"),{success:!0,user:e}}return console.log("리다이렉트 결과 없음 (result가 null이거나 user가 없음)"),{success:!1,error:"리다이렉트 결과가 없습니다."}}catch(t){return console.error("리다이렉트 결과 처리 오류:",t),{success:!1,error:t.message}}},c2=async()=>{try{return await rT(eo),{success:!0}}catch(t){return console.error("로그아웃 오류:",t),{success:!1,error:t.message}}},gh=async t=>{try{const e=nh(ph,"users",t),n=await oh(e);return n.exists()?n.data():null}catch(e){return console.error("사용자 데이터 가져오기 오류:",e),null}},u2=async(t,e)=>{try{const n=nh(ph,"users",t),s=await oh(n);if(s.exists()){const i=s.data();await Kc(n,{...i,gameData:{...i.gameData,...e}},{merge:!0})}else await Kc(n,{gameData:e});return{success:!0}}catch(n){return console.error("게임 데이터 업데이트 오류:",n),{success:!1,error:n.message}}},_y=(t,e)=>({id:t.uid,email:t.email,name:t.displayName||t.email?.split("@")[0]||"사용자",photoURL:t.photoURL,gameData:e||{level:1,coins:0,totalCoin:0,catFragments:50,nftCount:0,miningCats:[null,null,null,null,null,null],huntingCats:[null,null,null,null,null,null],explorationCats:[null,null,null,null,null,null],productionCats:[null,null,null,null,null,null],inventory:[]}}),yy=async()=>{try{const t=await a2();if(t.redirect)return{success:!0,redirect:!0};if(t.success&&t.user){const e=t.user,n=await gh(e.uid),s=_y(e,n?.gameData);return sessionStorage.setItem("currentUser",JSON.stringify(s)),{success:!0,user:s}}else return{success:!1,error:t.error}}catch(t){return console.error("Google 로그인 오류:",t),{success:!1,error:t.message}}},Ay=async()=>{try{console.log("handleGoogleRedirect 호출됨");const t=await l2();if(console.log("handleRedirectResult 결과:",t),t&&t.success&&t.user){const e=t.user;console.log("Firebase 사용자:",e.email);const n=await gh(e.uid);console.log("게임 데이터:",n);const s=_y(e,n?.gameData);return console.log("변환된 사용자:",s),sessionStorage.setItem("currentUser",JSON.stringify(s)),console.log("세션 스토리지에 저장 완료"),{success:!0,user:s}}return console.log("리다이렉트 결과 없음:",t?.error),{success:!1,error:t?.error||"리다이렉트 결과가 없습니다."}}catch(t){return console.error("리다이렉트 처리 오류:",t),{success:!1,error:t.message}}},Iy=async()=>{try{return await c2(),sessionStorage.removeItem("currentUser"),{success:!0}}catch(t){return console.error("로그아웃 오류:",t),{success:!1,error:t.message}}},h2=async(t,e)=>{try{const n=await u2(t,e);if(n.success){const s=JSON.parse(sessionStorage.getItem("currentUser")||"{}");s.id===t&&(s.gameData={...s.gameData,...e},sessionStorage.setItem("currentUser",JSON.stringify(s)))}return n}catch(n){return console.error("게임 데이터 업데이트 오류:",n),{success:!1,error:n.message}}},d2=Object.freeze(Object.defineProperty({__proto__:null,handleGoogleRedirect:Ay,loginWithGoogle:yy,logout:Iy,updateGameData:h2},Symbol.toStringTag,{value:"Module"})),f2="/tdl/assets/tdl_splashLogo-b8p6ictM.png",p2="/tdl/assets/tdl_splash_bg-B78B8oeM.png",Pt=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},g2={class:"loading-screen"},m2={class:"loading-bar-container"},v2={class:"loading-bar-track"},_2={__name:"LoadingScreen",setup(t){const e=dn(),n=x(0);return Rt(()=>{const r=.5333333333333333,o=setInterval(()=>{n.value+=r,n.value>=100&&(n.value=100,clearInterval(o),setTimeout(()=>{ht()?e.push("/main"):e.push("/login")},200))},16)}),(s,i)=>(O(),V("div",g2,[i[0]||(i[0]=h("div",{class:"logo-top"},[h("img",{src:f2,alt:"TDL Logo",class:"splash-logo"})],-1)),h("div",m2,[h("div",v2,[h("div",{class:"loading-bar-fill",style:Ct({width:n.value+"%"})},null,4)])]),i[1]||(i[1]=h("div",{class:"splash-bg"},[h("img",{src:p2,alt:"Splash Background",class:"splash-bg-image"})],-1))]))}},y2=Pt(_2,[["__scopeId","data-v-91347297"]]),bn=Ao({isLoggedIn:!1,walletAddress:"",userBalance:"0 ETH",nftCount:0,gameLevel:1,isLoading:!1}),wy=()=>{const t=(i,r)=>{bn.isLoggedIn=!0,bn.walletAddress=i,bn.userBalance=r},e=i=>{bn.nftCount=i.nftCount||0,bn.gameLevel=i.gameLevel||1},n=i=>{bn.isLoading=i},s=()=>{bn.isLoggedIn=!1,bn.walletAddress="",bn.userBalance="0 ETH",bn.nftCount=0,bn.gameLevel=1};return{state:A2(bn),setWalletConnected:t,setUserData:e,setLoading:n,logout:s}},A2=t=>new Proxy(t,{get(e,n){return e[n]},set(){return console.warn("직접 상태 수정은 금지됩니다. 액션을 사용하세요."),!1}}),I2={class:"login-screen"},w2={class:"input-group"},E2={class:"input-container"},T2={class:"input-group"},C2={class:"input-container"},b2=["type"],S2={key:0,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},R2={key:1,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},P2=["disabled"],k2={key:0,class:"btn-content"},D2={key:1,class:"btn-content"},x2={key:2,class:"btn-content"},N2=["disabled"],M2={key:0,class:"google-icon",viewBox:"0 0 24 24"},O2={key:1,class:"spinner-small"},V2={__name:"LoginScreen",setup(t){const e=dn(),{setWalletConnected:n,setLoading:s}=wy(),i=x(!1),r=x(!1),o=x(!1),l=x(!1),c=()=>{e.push("/signup")},u=x(""),d=x(""),p=async w=>{if(w.preventDefault(),!u.value.trim()||!d.value.trim()){alert("ID와 비밀번호를 모두 입력해주세요.");return}i.value=!0,s(!0);const k=JSON.parse(localStorage.getItem("users")||"[]").find(F=>F.email===u.value&&F.password===d.value);setTimeout(()=>{i.value=!1,k?(r.value=!0,sessionStorage.setItem("currentUser",JSON.stringify(k)),n(k.email,`${k.gameData.coins} 코인`),s(!1),setTimeout(()=>{e.push("/main")},1e3)):(s(!1),alert("이메일 또는 비밀번호가 올바르지 않습니다."))},2e3)},m=()=>{l.value=!l.value},v=()=>{try{if(typeof navigator>"u")return!1;const w=navigator.userAgent||navigator.vendor||"";return/KAKAOTALK/i.test(w)||/KakaoTalk/i.test(w)}catch(w){return console.error("카카오톡 WebView 감지 오류:",w),!1}},T=async()=>{if(v())if(confirm(`카카오톡 인앱 브라우저에서는 Google 로그인이 제한됩니다.

외부 브라우저(Chrome, Safari 등)에서 열어주세요.

외부 브라우저로 열까요?`)){const y=window.location.href;window.open(y,"_blank");return}else return;o.value=!0,s(!0);try{const w=await yy();if(w.redirect)return;w.success&&w.user?(r.value=!0,n(w.user.email,`${w.user.gameData?.coins||0} 코인`),s(!1),setTimeout(()=>{e.push("/main")},1e3)):(s(!1),alert(`로그인 실패: ${w.error}`))}catch(w){s(!1),alert(`로그인 오류: ${w.message}`)}finally{o.value=!1}};return Rt(async()=>{s(!1),o.value=!1;try{if(v()&&setTimeout(()=>{alert(`⚠️ 카카오톡 인앱 브라우저에서는 Google 로그인이 제한됩니다.

Google의 보안 정책상 카카오톡 WebView에서는 로그인이 차단됩니다.

✅ 해결 방법:
1. 카카오톡에서 "외부 브라우저로 열기" 선택
2. 또는 Chrome, Safari 등 외부 브라우저에서 직접 접속

현재 페이지를 외부 브라우저로 열어주세요.`)},500),ht()){console.log("이미 로그인된 상태, 메인으로 이동"),e.push("/main");return}setTimeout(()=>{const y=document.querySelector(".loginCont");y&&(y.style.opacity="0",y.style.transform="translateY(30px)",setTimeout(()=>{y.style.transition="all 0.6s ease",y.style.opacity="1",y.style.transform="translateY(0)"},100))},100)}catch(w){console.error("onMounted 오류:",w)}}),(w,y)=>(O(),V("div",I2,[y[11]||(y[11]=h("h1",{class:"login-title"},"로그인",-1)),h("form",{onSubmit:p,class:"login-form"},[h("div",w2,[y[3]||(y[3]=h("label",{class:"input-label"},"아이디(이메일계정)",-1)),h("div",E2,[y[2]||(y[2]=h("svg",{class:"input-icon",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),h("polyline",{points:"22,6 12,13 2,6"})],-1)),fs(h("input",{type:"email","onUpdate:modelValue":y[0]||(y[0]=k=>u.value=k),class:"input-field",placeholder:"이메일을 입력하세요",required:""},null,512),[[mi,u.value]])])]),h("div",T2,[y[7]||(y[7]=h("label",{class:"input-label"},"비밀번호",-1)),h("div",C2,[y[6]||(y[6]=h("svg",{class:"input-icon",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),h("circle",{cx:"12",cy:"16",r:"1"}),h("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})],-1)),fs(h("input",{type:l.value?"text":"password","onUpdate:modelValue":y[1]||(y[1]=k=>d.value=k),class:"input-field",placeholder:"비밀번호를 입력하세요",required:""},null,8,b2),[[dm,d.value]]),h("button",{type:"button",class:"password-toggle",onClick:m},[l.value?(O(),V("svg",R2,[...y[5]||(y[5]=[h("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"},null,-1),h("line",{x1:"1",y1:"1",x2:"23",y2:"23"},null,-1)])])):(O(),V("svg",S2,[...y[4]||(y[4]=[h("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},null,-1),h("circle",{cx:"12",cy:"12",r:"3"},null,-1)])]))])])]),h("button",{type:"submit",disabled:i.value||r.value,class:Re(["login-button",{connecting:i.value,connected:r.value}])},[!i.value&&!r.value?(O(),V("div",k2," 로그인 ")):he("",!0),i.value?(O(),V("div",D2,[...y[8]||(y[8]=[h("div",{class:"spinner-small"},null,-1),ro(" 로그인 중... ",-1)])])):he("",!0),r.value?(O(),V("div",x2,[...y[9]||(y[9]=[h("svg",{class:"check-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor"},[h("path",{d:"M20 6L9 17l-5-5"})],-1),ro(" 성공! ",-1)])])):he("",!0)],10,P2)],32),y[12]||(y[12]=h("div",{class:"divider-section"},[h("div",{class:"divider-line"}),h("span",{class:"divider-text"},"또는"),h("div",{class:"divider-line"})],-1)),h("button",{onClick:T,disabled:o.value||i.value||r.value,class:Re(["google-login-button",{loading:o.value}])},[o.value?he("",!0):(O(),V("svg",M2,[...y[10]||(y[10]=[h("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"},null,-1),h("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"},null,-1),h("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"},null,-1),h("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"},null,-1)])])),o.value?(O(),V("div",O2)):he("",!0),h("span",null,B(o.value?"로그인 중...":"Google로 로그인"),1)],10,N2),h("div",{class:"signup-link"},[h("button",{onClick:c,class:"signup-btn"}," 회원 가입하기 ")])]))}},L2=Pt(V2,[["__scopeId","data-v-e9ecbdbd"]]),B2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAz4SURBVHgB7d3ddRRXFobhIyJgMpAzwBGgicDjCOwQyMA4AiYDk8FMBmIiMI5AygBn0FMFjQ3or3+q6uy9z/OsVUtccK3vrVPVrdYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAjXDQA7tjtds+nH1fT9XK65n9ffvNfbqfr/XT9cXFx8a4BADnNoz9dP0/X9e44N9P123RdNgAgj2m8X03Xh935/iMEACC4eaxPuOM/xOsGAMSz+3Tcv8Rd/0Nudk4DACCO+Q59t40bEQAAAWw4/iIAACLoMP5fRsDzBgBsq+P4f/amAQDbCTD+n101AGB9uzjjP7tuAMC6drHG/7OrBgCsYxdz/GdOAejOHwMCStp9+ia+X1pc/7i4uPizQSfPGkAxCcZ/9kODjgQAUEqS8Z9dNehIAABlJBr/2YsGHQkAoIRk4z/zrYB05SVAIL2E4//RxaRBJ04AgNSyjj/0JgCAtIw/nE4AACkVGP/bBh0JACCdInf+tw06EgBAKoWO/d836EgAAGkUe+b/rkFHPoICpFDwhT9/C4CunAAA4RUc/7fGn96cAAChFf2o3/dTAHgHgK6cAABhFR3/t8afCJwAACEV/pKf76YAuG3QmRMAIJzC4//a+BOFEwAglMLj/99p/H9sEIQAAMIoPP7zM/9/evOfSAQAEILxh20JAKA74w/bEwBAV8Yf+hAAQDfGH/oRAEAXxh/6EgDA5ow/9CcAgE0Zf4hBAACbMf4QhwAANmH8IRYBAKzO+EM8AgBYlfGHmAQAsBrjD3EJAGAVxh9iEwDA4ow/xCcAgEUZf8hBAACLMf6QhwAAFmH8IRcBAJzN+EM+AgA4i/GHnAQAcDLjD3kJAOAkxh9yEwDA0Yw/5CcAgKMYf6hBAAAHM/5QhwAADmL8oRYBADzJ+EM9AgB4lPGHmgQA8CDjD3UJAOBexh9qEwDAHcYf6hMAwFeMP4xBAAB/Mf4wDgEAfGT8YSwCADD+MCABAIMz/jAmAQADM/4wLgEAgzL+MDYBAAMy/oAAgMEYf2AmAGAgxh/4TADAIIw/8CUBAAMw/sC3BAAUZ/yB+wgAKMz4Aw8RAFCU8QceIwCgIOMPPEUAQDHGHziEAIBCjD9wKAEARRh/4BgCAAow/sCxBAAkZ/yBUwgASMz4A6cSAJCU8QfOIQAgIeMPnEsAQDLGH1iCAIBEjD+wFAEASRh/YEkCABIw/sDSBAAEZ/yBNQgACMz4A2sRABCU8QfWJAAgIOMPrE0AQDDGH9iCAIBAjD+wFQEAQRh/YEsCAAIw/sDWBAB0ZvyBHgQAdGT8gV4EAHRi/IGeBAB0YPyB3gQAbMz4AxEIANiQ8QeiEACwEeMPRCIAYAPGH4hGAMDKjD8QkQCAFRl/ICoBACsx/kBkAgBWYPyB6AQALMz4AxkIAFiQ8QeyEACwEOMPZCIAYAHGH8hGAMCZjD+QkQCAMxh/ICsBACcy/kBmAgBOYPyB7AQAHMn4AxUIADiC8QeqEABwIOMPVCIA4ADGH6hGAMATjD9QkQCARxh/oCoBAA8w/kBlAgDuYfyB6gQAfMP4AyMQAPAF4w+MQgDAnvEHRiIAoBl/YDwCgOEZf2BEAoChGX9gVAKAYRl/YGQCgCEZf2B0AoDhGH8AAcBgjD/AJwKAYRh/gL8JAIZg/AG+JgAoz/gD3CUAKM34A9xPAFCW8Qd4mACgJOMP8DgBQDnGH+BpAoBSjD/AYQQAZRh/gMMJAEow/gDHEQCkZ/wBjicASM34A5xGAJCW8Qc4nQAgJeMPcB4BQDrGH+B8AoBUjD/AMgQAaRh/gOUIAFIw/gDLEgCEZ/wBlicACM34A6xDABCW8QdYjwAgJOMPsC4BQDjGH2B9AoBQpvF/Nf140+ox/kAoAoAwpvG/nH7ctHqMPxDOswZxXLd6jD8QkgAghP1z/8tWi/EHwhIAdLc/+v+p1WL8gdAEABFctVp3/8YfCM9LgHQ3nQDML/5dthqMP5CCEwC6msb/RTP+AJsTAPT2stVg/IFUBAC9XbX8jD+QjgCgt8uWm/EHUhIA9HbZ8jL+QFo+BUBXu0nLyfgDqTkBAIABCQB6y3oHPX988Xo6wHjeABISAPSW+QhdBABpCQB6e99yEwFASgKA3t61/EQAkI4AoLc/Wg0iAEjFxwDpzh8DAtieEwAieNvqcBIApOAEgO72YzmfAlQaTScBQGhOAOhuP5L/brU4CQBCcwJACPuh/L3VeRfgMycBQEhOAAhhP5A/ttxfDHQfJwFASAKAMKYImO+Wf231iAAgHAFAKFMEzO8CvG71iAAgFO8AENI0lL+0miHgnQAgBAFAWCIAYD0CgNBEAMA6BADhiQCA5QkAUhABAMsSAKQhAgCWIwBIRQQALEMAkI4IADifACAlEQBwHgFAWiIA4HQCgNREAMBpBADpiQCA4wkAShABAMcRAJQhAgAOJwAoRQQAHEYAUI4IAHiaAKAkEQDwOAFAWSIA4GECgNJEAMD9BADliQCAuwQAQxABAF8TAAxDBAD8TQAwFBEA8IkAYDgiAEAAMCgRAIxOADAsEQCMTAAwNBEAjEoAMDwRAIxIAEATAcB4BADsiQBgJAIAviACgFEIAPiGCABGIADgHiIAqE4AwANEAFCZAIBHiACgKgEATxABQEUCAA4gAoBqBAAcSAQAlQgAOIIIAKoQAHAkEQBUIADgBCIAyE4AwIlEAJCZAIAziAAgKwEAZxIBQEYCABYgAoBsBAAsRAQAmQgAWJAIALIQALAwEQBkIABgBSIAiE4AwEpEABCZAIAViQAgKgEAKxMBQEQCADYgAoBoBABsRAQAkQgA2JAIAKIQALAxEQBEIACgAxEA9CYAoBMRAPQkAKAjEQD0IgCgMxEA9CAAIAARAGxNAEAQIgDYkgCAQEQAsBUBAMGIAGALAgACEgHA2gQABCUCgDUJAAhMBABrEQAQnAgA1iAAIAERACxNAEASIgBYkgCAREQAsBQBAMmIAGAJAgASEgHAuQQAJCUCgHMIAEhMBACnEgCQnAgATiEAoAARABxLAEARIgA4hgCAQkQAcCgBAMWIAOAQAgAKEgHAUwQAFCUCgMcIAChMBAAPEQBQnAgA7iMAYAAiAPiWAIBBiADgSwIABiICgM8EAAxGBAAzAQADEgGAAIBBiQAYmwCAgYkAGJcAgMGJABiTAABEAAxIAAAfiQAYiwAA/iICYBwCAPiKCIAxCADgDhEA9QkA4F4iAGoTAMCDRADUJQCAR4kAqEkAAE8SAVCPAAAOIgKgFgEAHEwEQB0CADiKCIAaBABwNBEA+QkA4CQiAHITAMDJRADkJQCAs4gAyEkAAGcTAZCPAAAWIQIgFwEALEYEQB4CAFiUCIAcBACwOBEA8QkAYBUiAGITAMBqRADEJQCAVYkAiEkAAKsTARCPAAA2IQIgFgEAbEYEQBwCANiUCIAYBACwOREA/QkAoAsRAH0JAKAbEQD9CACgKxEAfQgAoDsRANsTAEAIIgC2JQCAMEQAbOdZAwhiGshfW80AeDFdvzUIRAAAoRSOgH9NJxyvGgThEQAQUtHHAfMjgO+nyLlt0JkTACCkoicBz5tHAQQhAICwikbA1XS6cdWgMwEAhFY0An5q0Jl3AIAUir0TML8L8J2PBdKTEwAghWInAfO7AC8bdCQAgDSKRcBVg44EAJBKoQh40aAjAQCkUyQCLht05CVAIK3sLwZOIeN3MN04AQDSKvy1wbA6AQCkJgLgNAIASC9pBNw26EgAACUkjIDbBh0JAKCMZBFw26AjAQCUkigC3jUAYFnzRwR3sV02AGB5u7gRcN2gM48AgLICPw542wCAde1inQTcNABgG7s4EfBDAwC2s+sfAW8aALC9jhFwM13PGwDQR4cIuNn52B8A9LdhBNwYfwAIZBrmV9P1Ybee340/AAQ0D/T+Ln1pb3ae+QNAbNNY/7xQCFxP18sGAOSxD4Hr3XE+7O/4DT9pXDQA7tgf38+D/mJ/fXmc/+f+ej9fFxcX/2sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABU9n/G+xQHTFSybwAAAABJRU5ErkJggg==",F2={class:"signup-screen"},U2={class:"input-group"},$2={class:"input-container"},H2={class:"input-group"},j2={class:"input-container"},G2={class:"input-group"},q2={class:"input-container"},Q2={class:"input-group"},W2={class:"input-container"},z2=["type"],K2={key:0,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Y2={key:1,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},J2={__name:"SignupScreen",setup(t){const e=dn(),n=x({name:"",phone:"",email:"",password:""}),s=x(!1),i=()=>{e.go(-1)},r=async l=>{if(l.preventDefault(),!n.value.name.trim()||!n.value.phone.trim()||!n.value.email.trim()||!n.value.password.trim()){alert("모든 필드를 입력해주세요.");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.value.email)){alert("올바른 이메일 형식을 입력해주세요.");return}if(n.value.password.length<6){alert("비밀번호는 6자 이상이어야 합니다.");return}const u=JSON.parse(localStorage.getItem("users")||"[]");if(u.some(m=>m.email===n.value.email)){alert("이미 가입된 이메일입니다.");return}const p={id:Date.now(),name:n.value.name,phone:n.value.phone,email:n.value.email,password:n.value.password,createdAt:new Date().toISOString(),gameData:{level:1,coins:0,nftCount:0}};u.push(p),localStorage.setItem("users",JSON.stringify(u)),console.log("회원가입 완료:",p),alert("회원가입이 완료되었습니다!"),e.push("/login")},o=()=>{s.value=!s.value};return(l,c)=>(O(),V("div",F2,[h("button",{class:"back-button",onClick:i},[...c[4]||(c[4]=[h("img",{src:B2,alt:"back-button",width:"20px"},null,-1)])]),c[16]||(c[16]=h("h1",{class:"signup-title"},"회원가입",-1)),h("form",{onSubmit:r,class:"signup-form"},[h("div",U2,[c[6]||(c[6]=h("label",{class:"input-label"},"이름",-1)),h("div",$2,[c[5]||(c[5]=h("svg",{class:"input-icon",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),h("polyline",{points:"22,6 12,13 2,6"})],-1)),fs(h("input",{type:"text","onUpdate:modelValue":c[0]||(c[0]=u=>n.value.name=u),class:"input-field",placeholder:"이름을 입력하세요",required:""},null,512),[[mi,n.value.name]])])]),h("div",H2,[c[8]||(c[8]=h("label",{class:"input-label"},"전화번호",-1)),h("div",j2,[c[7]||(c[7]=h("svg",{class:"input-icon",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})],-1)),fs(h("input",{type:"tel","onUpdate:modelValue":c[1]||(c[1]=u=>n.value.phone=u),class:"input-field",placeholder:"전화번호를 입력하세요",required:""},null,512),[[mi,n.value.phone]])])]),h("div",G2,[c[10]||(c[10]=h("label",{class:"input-label"},"이메일",-1)),h("div",q2,[c[9]||(c[9]=h("svg",{class:"input-icon",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),h("polyline",{points:"22,6 12,13 2,6"})],-1)),fs(h("input",{type:"email","onUpdate:modelValue":c[2]||(c[2]=u=>n.value.email=u),class:"input-field",placeholder:"이메일을 입력하세요",required:""},null,512),[[mi,n.value.email]])])]),h("div",Q2,[c[14]||(c[14]=h("label",{class:"input-label"},"비밀번호",-1)),h("div",W2,[c[13]||(c[13]=h("svg",{class:"input-icon",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),h("circle",{cx:"12",cy:"16",r:"1"}),h("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})],-1)),fs(h("input",{type:s.value?"text":"password","onUpdate:modelValue":c[3]||(c[3]=u=>n.value.password=u),class:"input-field",placeholder:"비밀번호를 입력하세요",required:""},null,8,z2),[[dm,n.value.password]]),h("button",{type:"button",class:"password-toggle",onClick:o},[s.value?(O(),V("svg",Y2,[...c[12]||(c[12]=[h("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"},null,-1),h("line",{x1:"1",y1:"1",x2:"23",y2:"23"},null,-1)])])):(O(),V("svg",K2,[...c[11]||(c[11]=[h("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},null,-1),h("circle",{cx:"12",cy:"12",r:"3"},null,-1)])]))])])]),c[15]||(c[15]=h("button",{type:"submit",class:"signup-button"}," 회원가입 ",-1))],32)]))}},X2=Pt(J2,[["__scopeId","data-v-8fe702ff"]]),mh="/tdl/assets/cat1-B_B8VE2s.png",vh="/tdl/assets/cat10-B8AgbljH.png",_h="/tdl/assets/cat11-0fJ86MBw.png",yh="/tdl/assets/cat12-9jWhGICw.png",Ah="/tdl/assets/cat13-CHa4qUOi.png",Ih="/tdl/assets/cat14-CLrryeLM.png",wh="/tdl/assets/cat15-CCtjZj8M.png",Eh="/tdl/assets/cat16-CPcR6OS6.png",Th="/tdl/assets/cat17-EO7rjjtM.png",Ch="/tdl/assets/cat18-BGDiOePY.png",bh="/tdl/assets/cat19-DxCDtOnA.png",Sh="/tdl/assets/cat2-0Y4nM6HW.png",Rh="/tdl/assets/cat20-Bz9cd08a.png",Ph="/tdl/assets/cat21-ECTsze2s.png",kh="/tdl/assets/cat22-BvGXhyri.png",Dh="/tdl/assets/cat23-DqU2B_M0.png",xh="/tdl/assets/cat24-7cWYLYDN.png",Nh="/tdl/assets/cat25-Cy0mQl6B.png",Mh="/tdl/assets/cat26-Bk4tHCwE.png",Oh="/tdl/assets/cat27-CvtmCEXM.png",Vh="/tdl/assets/cat28-B9s1wmgo.png",Lh="/tdl/assets/cat29-D_79HmBj.png",Bh="/tdl/assets/cat3-Dp7OJMB9.png",Fh="/tdl/assets/cat30-Cx-HRp0m.png",Uh="/tdl/assets/cat4-DHiuXgwB.png",$h="/tdl/assets/cat5-BvXrfJAO.png",Hh="/tdl/assets/cat6-DZOiQoo1.png",jh="/tdl/assets/cat7-CeDKF7mR.png",Gh="/tdl/assets/cat8-mjRhb3fS.png",qh="/tdl/assets/cat9-Bzb-Egme.png",Qh="/tdl/assets/catProfile01-gY0Djz81.png",Wh="/tdl/assets/catProfile02-Cesbpkj5.png",zh="/tdl/assets/cat_ico-Csdt_Q01.png",Z2="/tdl/assets/tul1-CuZ0qR5D.png",ek="/tdl/assets/tul2-Cj7OkHg6.png",tk="/tdl/assets/tul3-CaPMxBJ-.png",nk="/tdl/assets/tul5-CQc-0WLd.png",sk="/tdl/assets/tul6-COB-AGqQ.png",ik="/tdl/assets/mainPoint-D-oASrAx.png",Ey="/tdl/assets/mainCoin-CGuum4ry.png",rk="/tdl/assets/lighting-DDPCD7_E.png",Ty="/tdl/assets/point_ico-CuS5zUpS.png",Cy="/tdl/assets/coin_ico-COVm5STX.png",by="/tdl/assets/cat_ico-Csdt_Q01.png",ok="/tdl/assets/notice-Bkd9hh4q.png",ak="/tdl/assets/setting-CxNpDL9x.png",lk={class:"headerCont"},ck={class:"headerBar"},uk={class:"headerValue"},hk={class:"headerValue"},dk={class:"headerValue"},fk={class:"headerValue"},pk={__name:"Header",setup(t){const e=x(localStorage.getItem("appLanguage")||"한국어");Xe(()=>bm());const n=dn(),s=x(0),i=x(0),r=x(50),o=x(4e3),l=x(4e3),c=()=>{const y=new Date().toDateString(),k=localStorage.getItem("energyLastDate"),F=localStorage.getItem("currentEnergy");if(k!==y)o.value=l.value,localStorage.setItem("energyLastDate",y),localStorage.setItem("currentEnergy",l.value.toString());else if(F){const U=parseInt(F)||0;o.value=Math.max(0,Math.min(U,l.value))}else o.value=l.value,localStorage.setItem("energyLastDate",y),localStorage.setItem("currentEnergy",l.value.toString())},u=()=>{const y=ht();y&&(s.value=y.gameData?.coins||0,i.value=y.gameData?.totalCoin||0,r.value=y.gameData?.catFragments||y.gameData?.catCount||50),c()};x(!1);const d=()=>{n.push("/settings")},p=()=>{n.push("/notification")},m=()=>{n.push("/shop")};let v=null,T=null;Rt(()=>{u(),v=setInterval(()=>{const y=localStorage.getItem("appLanguage")||"한국어";y!==e.value&&(e.value=y)},100),T=setInterval(()=>{u()},500),window.addEventListener("userDataUpdated",u)}),cr(()=>{v&&clearInterval(v),T&&clearInterval(T),window.removeEventListener("userDataUpdated",u)});const w=y=>y>=1e9?(y/1e9).toFixed(1).replace(/\.0$/,"")+"G":y>=1e6?(y/1e6).toFixed(1).replace(/\.0$/,"")+"M":y>=1e4?(y/1e3).toFixed(1).replace(/\.0$/,"")+"K":y.toLocaleString();return(y,k)=>(O(),V("header",null,[h("div",lk,[h("div",ck,[h("button",{class:"headerItem energyItem",onClick:m},[k[0]||(k[0]=h("img",{src:rk,alt:"에너지",class:"energyIcon"},null,-1)),h("span",uk,B(w(o.value))+" / "+B(w(l.value)),1)]),k[6]||(k[6]=h("div",{class:"divider"},null,-1)),h("button",{class:"headerItem clickableItem",onClick:m},[k[1]||(k[1]=h("img",{src:Ty,alt:"P",class:"pointIcon"},null,-1)),h("span",hk,B(w(s.value)),1)]),k[7]||(k[7]=h("div",{class:"divider"},null,-1)),h("button",{class:"headerItem clickableItem",onClick:m},[k[2]||(k[2]=h("img",{src:Cy,alt:"C",class:"coinIcon"},null,-1)),h("span",dk,B(w(i.value)),1)]),k[8]||(k[8]=h("div",{class:"divider"},null,-1)),h("button",{class:"headerItem clickableItem",onClick:m},[k[3]||(k[3]=h("img",{src:by,alt:"고양이",class:"catIcon"},null,-1)),h("span",fk,B(r.value),1)]),k[9]||(k[9]=h("div",{class:"divider"},null,-1)),h("button",{class:"headerIconBtn notifi",onClick:p},[...k[4]||(k[4]=[h("img",{src:ok,alt:"알림",class:"icon-img"},null,-1)])]),k[10]||(k[10]=h("div",{class:"divider"},null,-1)),h("button",{class:"headerIconBtn menuBtn",onClick:d},[...k[5]||(k[5]=[h("img",{src:ak,alt:"설정",class:"icon-img"},null,-1)])])])])]))}},fn=Pt(pk,[["__scopeId","data-v-69190070"]]),gk="/tdl/assets/bottom001-BEtDIm8X.png",mk="/tdl/assets/bottom001_on-DT187QNm.png",vk="/tdl/assets/bottom002-DzQ3N6uP.png",_k="/tdl/assets/bottom002_on-C1N0vVp8.png",yk="/tdl/assets/bottom003-BvgU7nGk.png",Ak="/tdl/assets/bottom003_on-Df8s6MrC.png",Ik="/tdl/assets/bottom004-CWodmmKt.png",wk="/tdl/assets/bottom004_on-D8X_vvyV.png",Ek="/tdl/assets/bottom005-CX2HIylp.png",Tk="/tdl/assets/bottom005_on-DYZvET-x.png",Ck={class:"footerCont"},bk={class:"footerBar"},Sk=["onClick"],Rk={class:"tabContent"},Pk=["src","alt"],kk={class:"tabLabel"},Dk={key:0,class:"activeIndicator"},xk={__name:"Footer",setup(t){const e=dn(),n=x("home"),s=x(localStorage.getItem("appLanguage")||"한국어"),i=Xe(()=>bm()),r=d=>{d.key==="appLanguage"&&(s.value=d.newValue||"한국어")},o=()=>{switch(e.currentRoute.value.path){case"/main":n.value="home";break;case"/exchange":n.value="exchange";break;case"/quest":n.value="quest";break;case"/inventory":n.value="inventory";break;case"/factory":n.value="factory";break;default:n.value="home"}};let l=null;Rt(()=>{o(),window.addEventListener("storage",r),l=setInterval(()=>{const d=localStorage.getItem("appLanguage")||"한국어";d!==s.value&&(s.value=d)},100)}),cr(()=>{window.removeEventListener("storage",r),l&&clearInterval(l)}),ms(()=>e.currentRoute.value.path,()=>{o()}),ms(s,()=>{});const c=Xe(()=>[{id:"home",img:gk,imgActive:mk,label:i.value.home},{id:"exchange",img:vk,imgActive:_k,label:i.value.exchange},{id:"quest",img:yk,imgActive:Ak,label:i.value.quest},{id:"inventory",img:Ik,imgActive:wk,label:i.value.inventory},{id:"factory",img:Ek,imgActive:Tk,label:i.value.factory}]),u=d=>{switch(n.value=d,d){case"home":e.push("/main");break;case"exchange":e.push("/exchange");break;case"quest":e.push("/quest");break;case"inventory":e.push("/inventory");break;case"factory":e.push("/factory");break}};return(d,p)=>(O(),V("footer",null,[h("div",Ck,[p[0]||(p[0]=h("div",{class:"footerBackground"},null,-1)),h("div",bk,[(O(!0),V(Se,null,je(c.value,m=>(O(),V("div",{key:m.id,class:Re(["tabItem",{active:n.value===m.id}]),onClick:v=>u(m.id)},[h("div",Rk,[h("img",{src:n.value===m.id?m.imgActive:m.img,alt:m.label,class:"tabIcon"},null,8,Pk),h("span",kk,B(m.label),1)]),n.value===m.id?(O(),V("div",Dk)):he("",!0)],10,Sk))),128))])])]))}},pn=Pt(xk,[["__scopeId","data-v-5284f664"]]),Nk={class:"mainScreen"},Mk={class:"mainContent"},Ok={key:0,class:"mainMenuNew"},Vk={class:"totalStats"},Lk={class:"totalPoint"},Bk={class:"statValue"},Fk={class:"statNumber"},Uk={class:"totalCoin"},$k={class:"statValue"},Hk={class:"statNumber"},jk={class:"gameModeGrid"},Gk={class:"modeLevel"},qk={class:"modeLevel"},Qk={class:"modeLevel"},Wk={class:"modeLevel"},zk={key:1,class:"miningMode"},Kk={class:"pageHeader"},Yk={class:"totalPointsDisplay"},Jk={class:"miningButtonContainer"},Xk={key:1,class:"completeMessageContainer"},Zk={class:"rewardInfo"},eD={class:"rewardItem"},tD={key:0,class:"rewardItem"},nD={class:"energySection"},sD={class:"energyInfo"},iD={class:"energyText"},rD={class:"energyBar"},oD={class:"miningCatsSection"},aD={class:"catsListScroll"},lD=["onClick"],cD={key:0,class:"catLevel"},uD={key:1,class:"catImage"},hD=["src"],dD={key:2,class:"catStars"},fD={key:3,class:"emptySlotContent"},pD={key:2,class:"miningMode"},gD={class:"pageHeader"},mD={class:"totalPointsDisplay"},vD={class:"miningButtonContainer"},_D={key:1,class:"completeMessageContainer"},yD={class:"rewardInfo"},AD={class:"rewardItem"},ID={key:0,class:"rewardItem"},wD={class:"energySection"},ED={class:"energyInfo"},TD={class:"energyText"},CD={class:"energyBar"},bD={class:"miningCatsSection"},SD={class:"catsListScroll"},RD=["onClick"],PD={key:0,class:"catLevel"},kD={key:1,class:"catImage"},DD=["src"],xD={key:2,class:"catStars"},ND={key:3,class:"emptySlotContent"},MD={key:3,class:"miningMode"},OD={class:"pageHeader"},VD={class:"totalPointsDisplay"},LD={class:"miningButtonContainer"},BD={key:1,class:"completeMessageContainer"},FD={class:"rewardInfo"},UD={class:"rewardItem"},$D={key:0,class:"rewardItem"},HD={class:"energySection"},jD={class:"energyInfo"},GD={class:"energyText"},qD={class:"energyBar"},QD={class:"miningCatsSection"},WD={class:"catsListScroll"},zD=["onClick"],KD={key:0,class:"catLevel"},YD={key:1,class:"catImage"},JD=["src"],XD={key:2,class:"catStars"},ZD={key:3,class:"emptySlotContent"},ex={key:4,class:"miningMode"},tx={class:"pageHeader"},nx={class:"totalPointsDisplay"},sx={class:"miningButtonContainer"},ix={key:1,class:"completeMessageContainer"},rx={class:"rewardInfo"},ox={class:"rewardItem"},ax={key:0,class:"rewardItem"},lx={class:"energySection"},cx={class:"energyInfo"},ux={class:"energyText"},hx={class:"energyBar"},dx={class:"miningCatsSection"},fx={class:"catsListScroll"},px=["onClick"],gx={key:0,class:"catLevel"},mx={key:1,class:"catImage"},vx=["src"],_x={key:2,class:"catStars"},yx={key:3,class:"emptySlotContent"},Ax={key:0,class:"speechBubbles"},Ix={key:1,class:"catEmojis"},wx=["src","onError"],Ex={class:"catSelectPopupBody"},Tx={key:0,class:"removeCatSection"},Cx={class:"availableCatsGrid"},bx=["onClick"],Sx={class:"availableCatImage"},Rx=["src"],Px={class:"availableCatInfo"},kx={class:"availableCatName"},Dx={class:"availableCatLevel"},xx={class:"availableCatStars"},Nx={__name:"MainScreen",setup(t){const e=G=>G>=1e9?(G/1e9).toFixed(1).replace(/\.0$/,"")+"B":G>=1e6?(G/1e6).toFixed(1).replace(/\.0$/,"")+"M":G>=1e4?(G/1e3).toFixed(1).replace(/\.0$/,"")+"K":G.toLocaleString(),n=dn(),s=x(null),i=x("main"),r=x(0),o=x(0),l=x(0),c=x(50),u=x(50),d=x([]),p=x([]),m=x(null),v=x(0),T=x(0),w=x(1),y=x(!1),k=x(!0),F=x({points:0,fragments:0}),U=x(0),j=x(0),se=x(1),Ie=x(!1),S=x(!0),I=x({points:0,fragments:0}),C=x(0),P=x(0),R=x(1),N=x(!1),E=x(!0),st=x({points:0,fragments:0}),_t=x(0),it=x(0),Ce=x(1),be=x(!1),kt=x(!0),Kt=x({points:0,fragments:0}),Lt=G=>Math.pow(2,G-1),rt=G=>{i.value=G,v.value=0,y.value=!1,k.value=!0,U.value=0,Ie.value=!1,S.value=!0,C.value=0,N.value=!1,E.value=!0,_t.value=0,be.value=!1,kt.value=!0},Cn=()=>{n.currentRoute.value.path==="/main"&&(i.value="main")};Rt(()=>{s.value=ht(),s.value&&(o.value=s.value.gameData?.coins||0,l.value=s.value.gameData?.totalCoin||0,r.value=o.value,u.value=s.value.gameData?.catFragments||50,w.value=s.value.gameData?.miningLevel||1,T.value=s.value.gameData?.miningTotalClicks||0,R.value=s.value.gameData?.huntingLevel||1,P.value=s.value.gameData?.huntingTotalClicks||0,se.value=s.value.gameData?.explorationLevel||1,j.value=s.value.gameData?.explorationTotalClicks||0,Ce.value=s.value.gameData?.productionLevel||1,it.value=s.value.gameData?.productionTotalClicks||0,xe.value=s.value.gameData?.planetLevel||1,te.value=s.value.gameData?.planetEnergy||0,s.value.gameData?.miningCats&&(Array.isArray(s.value.gameData.miningCats)&&s.value.gameData.miningCats.length===0?ee.value=[null,null,null,null,null,null]:ee.value=s.value.gameData.miningCats),s.value.gameData?.huntingCats&&(Array.isArray(s.value.gameData.huntingCats)&&s.value.gameData.huntingCats.length===0?$e.value=[null,null,null,null,null,null]:$e.value=s.value.gameData.huntingCats),s.value.gameData?.explorationCats&&(Array.isArray(s.value.gameData.explorationCats)&&s.value.gameData.explorationCats.length===0?He.value=[null,null,null,null,null,null]:He.value=s.value.gameData.explorationCats),s.value.gameData?.productionCats&&(Array.isArray(s.value.gameData.productionCats)&&s.value.gameData.productionCats.length===0?qe.value=[null,null,null,null,null,null]:qe.value=s.value.gameData.productionCats)),b(),n.afterEach(Cn);try{m.value=new Audio,m.value.src=new URL("/tdl/assets/clickbgm-BvbCQtA-.mp3",import.meta.url).href,m.value.volume=.3}catch{console.log("클릭 사운드 파일을 찾을 수 없습니다.")}const G=()=>{!gn()&&m.value&&(m.value.pause(),m.value.currentTime=0)};window.addEventListener("soundSettingChanged",G),Fe("mining"),Fe("hunting"),Fe("exploration"),Fe("production"),cr(()=>{n.afterEach(Cn),ti(),window.removeEventListener("soundSettingChanged",G)})});const gn=()=>{const G=localStorage.getItem("soundEnabled");return G!==null?G==="true":!0},Yt=G=>{if(m.value&&gn()&&(m.value.currentTime=0,m.value.play().catch(()=>{})),ot.value<ae.value){alert("에너지가 부족합니다!");return}if(M()){if(G==="mining"){if(v.value++,T.value++,T.value>=w.value*1e3){w.value++;const D={id:Date.now(),text:`채굴 레벨업! Lv.${w.value}`,x:Math.random()*(Math.min(window.innerWidth||500,500)-220-40)+20,y:Math.random()*(window.innerHeight||500)+100};d.value.push(D),setTimeout(()=>{const H=d.value.findIndex(ie=>ie.id===D.id);H>-1&&d.value.splice(H,1)},3e3),s.value&&Mt(s.value.id,{miningLevel:w.value,miningTotalClicks:T.value})}if(v.value>=10){const ie=100*Lt(w.value);r.value+=ie,o.value=r.value,v.value=0,y.value=!0,k.value=!1,A();const le=Math.random();let re=0;if(le<.3?re=1:le<.4&&(re=2),F.value={points:ie,fragments:re},re>0){u.value+=re;for(let Me=0;Me<re;Me++){const At=Math.floor(Math.random()*6)+1,yn=Math.min(window.innerWidth||500,500),Bt=window.innerHeight||800,lt=60,ct=30,Je={id:Date.now()+Me,x:Math.random()*(yn-lt-ct*2)+ct,y:Math.random()*(Bt-lt-ct*2-200)+100,imageId:At};p.value.push(Je),setTimeout(()=>{const Dt=p.value.findIndex(an=>an.id===Je.id);Dt>-1&&p.value.splice(Dt,1)},2e3)}}s.value&&Mt(s.value.id,{coins:r.value,catFragments:u.value,miningTotalClicks:T.value,miningLevel:w.value});const De=Math.min(window.innerWidth||500,500),Be=window.innerHeight||800,at=220,on=re>0?80:60,Ze=20;let Ht=`채굴 완료!
${ie.toLocaleString()}point 획득!`;re>0&&(Ht+=`
고양이 파편 ${re}개 획득!`);const jt={id:Date.now(),text:Ht,x:Math.random()*(De-at-Ze*2)+Ze,y:Math.random()*(Be-on-Ze*2-200)+100};d.value.push(jt),setTimeout(()=>{const Me=d.value.findIndex(At=>At.id===jt.id);Me>-1&&d.value.splice(Me,1)},3e3),setTimeout(()=>{y.value=!1,k.value=!0,F.value={points:0,fragments:0}},1500)}else{const D=Math.min(window.innerWidth||500,500),H=window.innerHeight||800,ie=220,le=60,re=20,De={id:Date.now(),text:`채굴 진행: ${v.value}/10`,x:Math.random()*(D-ie-re*2)+re,y:Math.random()*(H-le-re*2-200)+100};d.value.push(De),setTimeout(()=>{const Be=d.value.findIndex(at=>at.id===De.id);Be>-1&&d.value.splice(Be,1)},2e3)}}else if(G==="exploration"){if(U.value++,j.value++,j.value>=se.value*1e3){se.value++;const D={id:Date.now(),text:`탐험 레벨업! Lv.${se.value}`,x:Math.random()*(Math.min(window.innerWidth||500,500)-220-40)+20,y:Math.random()*(window.innerHeight||500)+100};d.value.push(D),setTimeout(()=>{const H=d.value.findIndex(ie=>ie.id===D.id);H>-1&&d.value.splice(H,1)},3e3),s.value&&Mt(s.value.id,{explorationLevel:se.value,explorationTotalClicks:j.value})}if(U.value>=10){const ie=100*Lt(se.value);r.value+=ie,o.value=r.value,U.value=0,Ie.value=!0,S.value=!1,A();const le=Math.random();let re=0;if(le<.3?re=1:le<.4&&(re=2),I.value={points:ie,fragments:re},re>0){u.value+=re;for(let Me=0;Me<re;Me++){const At=Math.floor(Math.random()*6)+1,yn=Math.min(window.innerWidth||500,500),Bt=window.innerHeight||800,lt=60,ct=30,Je={id:Date.now()+Me,x:Math.random()*(yn-lt-ct*2)+ct,y:Math.random()*(Bt-lt-ct*2-200)+100,imageId:At};p.value.push(Je),setTimeout(()=>{const Dt=p.value.findIndex(an=>an.id===Je.id);Dt>-1&&p.value.splice(Dt,1)},2e3)}}s.value&&Mt(s.value.id,{coins:r.value,catFragments:u.value,explorationTotalClicks:j.value,explorationLevel:se.value});const De=Math.min(window.innerWidth||500,500),Be=window.innerHeight||800,at=220,on=re>0?80:60,Ze=20;let Ht=`탐험 완료!
${ie.toLocaleString()}point 획득!`;re>0&&(Ht+=`
고양이 파편 ${re}개 획득!`);const jt={id:Date.now(),text:Ht,x:Math.random()*(De-at-Ze*2)+Ze,y:Math.random()*(Be-on-Ze*2-200)+100};d.value.push(jt),setTimeout(()=>{const Me=d.value.findIndex(At=>At.id===jt.id);Me>-1&&d.value.splice(Me,1)},3e3),setTimeout(()=>{Ie.value=!1,S.value=!0,I.value={points:0,fragments:0}},1500)}else{const D=Math.min(window.innerWidth||500,500),H=window.innerHeight||800,ie=220,le=60,re=20,De={id:Date.now(),text:`탐험 진행: ${U.value}/10`,x:Math.random()*(D-ie-re*2)+re,y:Math.random()*(H-le-re*2-200)+100};d.value.push(De),setTimeout(()=>{const Be=d.value.findIndex(at=>at.id===De.id);Be>-1&&d.value.splice(Be,1)},2e3)}}else if(G==="hunting"){if(C.value++,P.value++,P.value>=R.value*1e3){R.value++;const D={id:Date.now(),text:`사냥 레벨업! Lv.${R.value}`,x:Math.random()*(Math.min(window.innerWidth||500,500)-220-40)+20,y:Math.random()*(window.innerHeight||500)+100};d.value.push(D),setTimeout(()=>{const H=d.value.findIndex(ie=>ie.id===D.id);H>-1&&d.value.splice(H,1)},3e3),s.value&&Mt(s.value.id,{huntingLevel:R.value,huntingTotalClicks:P.value})}if(C.value>=10){const ie=100*Lt(R.value);r.value+=ie,o.value=r.value,C.value=0,N.value=!0,E.value=!1,A();const le=Math.random();let re=0;if(le<.3?re=1:le<.4&&(re=2),st.value={points:ie,fragments:re},re>0){u.value+=re;for(let Me=0;Me<re;Me++){const At=Math.floor(Math.random()*6)+1,yn=Math.min(window.innerWidth||500,500),Bt=window.innerHeight||800,lt=60,ct=30,Je={id:Date.now()+Me,x:Math.random()*(yn-lt-ct*2)+ct,y:Math.random()*(Bt-lt-ct*2-200)+100,imageId:At};p.value.push(Je),setTimeout(()=>{const Dt=p.value.findIndex(an=>an.id===Je.id);Dt>-1&&p.value.splice(Dt,1)},2e3)}}s.value&&Mt(s.value.id,{coins:r.value,catFragments:u.value,huntingTotalClicks:P.value,huntingLevel:R.value});const De=Math.min(window.innerWidth||500,500),Be=window.innerHeight||800,at=220,on=re>0?80:60,Ze=20;let Ht=`사냥 완료!
${ie.toLocaleString()}point 획득!`;re>0&&(Ht+=`
고양이 파편 ${re}개 획득!`);const jt={id:Date.now(),text:Ht,x:Math.random()*(De-at-Ze*2)+Ze,y:Math.random()*(Be-on-Ze*2-200)+100};d.value.push(jt),setTimeout(()=>{const Me=d.value.findIndex(At=>At.id===jt.id);Me>-1&&d.value.splice(Me,1)},3e3),setTimeout(()=>{N.value=!1,E.value=!0,st.value={points:0,fragments:0}},1500)}else{const D=Math.min(window.innerWidth||500,500),H=window.innerHeight||800,ie=220,le=60,re=20,De={id:Date.now(),text:`사냥 진행: ${C.value}/10`,x:Math.random()*(D-ie-re*2)+re,y:Math.random()*(H-le-re*2-200)+100};d.value.push(De),setTimeout(()=>{const Be=d.value.findIndex(at=>at.id===De.id);Be>-1&&d.value.splice(Be,1)},2e3)}}else if(G==="production"){if(_t.value++,it.value++,it.value>=Ce.value*1e3){Ce.value++;const D={id:Date.now(),text:`생산 레벨업! Lv.${Ce.value}`,x:Math.random()*(Math.min(window.innerWidth||500,500)-220-40)+20,y:Math.random()*(window.innerHeight||500)+100};d.value.push(D),setTimeout(()=>{const H=d.value.findIndex(ie=>ie.id===D.id);H>-1&&d.value.splice(H,1)},3e3),s.value&&Mt(s.value.id,{productionLevel:Ce.value,productionTotalClicks:it.value})}if(_t.value>=10){const ie=100*Lt(Ce.value);r.value+=ie,o.value=r.value,_t.value=0,be.value=!0,kt.value=!1,A();const le=Math.random();let re=0;if(le<.3?re=1:le<.4&&(re=2),Kt.value={points:ie,fragments:re},re>0){u.value+=re;for(let Me=0;Me<re;Me++){const At=Math.floor(Math.random()*6)+1,yn=Math.min(window.innerWidth||500,500),Bt=window.innerHeight||800,lt=60,ct=30,Je={id:Date.now()+Me,x:Math.random()*(yn-lt-ct*2)+ct,y:Math.random()*(Bt-lt-ct*2-200)+100,imageId:At};p.value.push(Je),setTimeout(()=>{const Dt=p.value.findIndex(an=>an.id===Je.id);Dt>-1&&p.value.splice(Dt,1)},2e3)}}s.value&&Mt(s.value.id,{coins:r.value,catFragments:u.value,productionTotalClicks:it.value,productionLevel:Ce.value});const De=Math.min(window.innerWidth||500,500),Be=window.innerHeight||800,at=220,on=re>0?80:60,Ze=20;let Ht=`생산 완료!
${ie.toLocaleString()}point 획득!`;re>0&&(Ht+=`
고양이 파편 ${re}개 획득!`);const jt={id:Date.now(),text:Ht,x:Math.random()*(De-at-Ze*2)+Ze,y:Math.random()*(Be-on-Ze*2-200)+100};d.value.push(jt),setTimeout(()=>{const Me=d.value.findIndex(At=>At.id===jt.id);Me>-1&&d.value.splice(Me,1)},3e3),setTimeout(()=>{be.value=!1,kt.value=!0,Kt.value={points:0,fragments:0}},1500)}else{const D=Math.min(window.innerWidth||500,500),H=window.innerHeight||800,ie=220,le=60,re=20,De={id:Date.now(),text:`생산 진행: ${_t.value}/10`,x:Math.random()*(D-ie-re*2)+re,y:Math.random()*(H-le-re*2-200)+100};d.value.push(De),setTimeout(()=>{const Be=d.value.findIndex(at=>at.id===De.id);Be>-1&&d.value.splice(Be,1)},2e3)}}}};x(0),x(!1),x({stone:0,iron:0,gold:0,diamond:0});const ot=x(4e3),q=x(4e3),ae=x(1),te=x(0),ue=x(2e3),xe=x(1),A=()=>{if(te.value=Math.min(ue.value,te.value+50),te.value>=ue.value){if(i.value==="mining"?w.value++:i.value==="hunting"?R.value++:i.value==="exploration"?se.value++:i.value==="production"&&Ce.value++,te.value=0,s.value){const G={planetEnergy:te.value,miningLevel:w.value,huntingLevel:R.value,explorationLevel:se.value,productionLevel:Ce.value};Mt(s.value.id,G)}}else s.value&&Mt(s.value.id,{planetEnergy:te.value})},b=()=>{const G=new Date().toDateString(),D=localStorage.getItem("energyLastDate"),H=localStorage.getItem("currentEnergy");if(D!==G)ot.value=q.value,localStorage.setItem("energyLastDate",G),localStorage.setItem("currentEnergy",q.value.toString());else if(H){const ie=parseInt(H)||0;ot.value=Math.max(0,Math.min(ie,q.value))}else ot.value=q.value,localStorage.setItem("energyLastDate",G),localStorage.setItem("currentEnergy",q.value.toString())},M=(G=ae.value)=>ot.value>=G?(ot.value=Math.max(0,ot.value-G),localStorage.setItem("currentEnergy",ot.value.toString()),localStorage.setItem("energyLastDate",new Date().toDateString()),!0):!1,Q=G=>{try{return new URL(Object.assign({"../assets/img/cat1.png":mh,"../assets/img/cat10.png":vh,"../assets/img/cat11.png":_h,"../assets/img/cat12.png":yh,"../assets/img/cat13.png":Ah,"../assets/img/cat14.png":Ih,"../assets/img/cat15.png":wh,"../assets/img/cat16.png":Eh,"../assets/img/cat17.png":Th,"../assets/img/cat18.png":Ch,"../assets/img/cat19.png":bh,"../assets/img/cat2.png":Sh,"../assets/img/cat20.png":Rh,"../assets/img/cat21.png":Ph,"../assets/img/cat22.png":kh,"../assets/img/cat23.png":Dh,"../assets/img/cat24.png":xh,"../assets/img/cat25.png":Nh,"../assets/img/cat26.png":Mh,"../assets/img/cat27.png":Oh,"../assets/img/cat28.png":Vh,"../assets/img/cat29.png":Lh,"../assets/img/cat3.png":Bh,"../assets/img/cat30.png":Fh,"../assets/img/cat4.png":Uh,"../assets/img/cat5.png":$h,"../assets/img/cat6.png":Hh,"../assets/img/cat7.png":jh,"../assets/img/cat8.png":Gh,"../assets/img/cat9.png":qh,"../assets/img/catProfile01.png":Qh,"../assets/img/catProfile02.png":Wh,"../assets/img/cat_ico.png":zh})[`../assets/img/cat${G}.png`],import.meta.url).href}catch{return`/src/assets/img/cat${G}.png`}},K=G=>{try{return new URL(Object.assign({"../assets/img/tul1.png":Z2,"../assets/img/tul2.png":ek,"../assets/img/tul3.png":tk,"../assets/img/tul5.png":nk,"../assets/img/tul6.png":sk})[`../assets/img/tul${G}.png`],import.meta.url).href}catch{return`/src/assets/img/tul${G}.png`}},W=G=>{const D=p.value.findIndex(H=>H.id===G);D>-1&&p.value.splice(D,1)},ee=x([null,null,null,null,null,null]),J=x(!1),z=x(-1),Z=x([]),ge=()=>{const G=new Set;return ee.value.forEach(D=>{D&&D.id&&G.add(D.id)}),$e.value.forEach(D=>{D&&D.id&&G.add(D.id)}),He.value.forEach(D=>{D&&D.id&&G.add(D.id)}),qe.value.forEach(D=>{D&&D.id&&G.add(D.id)}),G},oe=()=>{const G=ht();if(G){const D=G.gameData?.inventory||[],ie=[...[{id:1,name:"Robot",stars:1,level:1,imageId:1},{id:2,name:"Style",stars:1,level:1,imageId:2},{id:3,name:"Suit",stars:1,level:1,imageId:3},{id:4,name:"Tech",stars:1,level:1,imageId:4},{id:5,name:"Army",stars:1,level:1,imageId:5},{id:6,name:"Detective",stars:1,level:1,imageId:6},{id:7,name:"Scholar",stars:1,level:1,imageId:7},{id:8,name:"White",stars:1,level:1,imageId:8},{id:9,name:"Green",stars:1,level:1,imageId:9},{id:10,name:"Blue",stars:1,level:1,imageId:10},{id:11,name:"Red",stars:1,level:1,imageId:11},{id:12,name:"Shirt",stars:1,level:1,imageId:12},{id:13,name:"Ninja",stars:1,level:1,imageId:13},{id:14,name:"Knight",stars:1,level:1,imageId:14},{id:15,name:"Pirate",stars:1,level:1,imageId:15},{id:16,name:"Sailor",stars:1,level:1,imageId:16},{id:17,name:"Sport",stars:1,level:1,imageId:17},{id:18,name:"Cafe",stars:1,level:1,imageId:18},{id:19,name:"Chef",stars:1,level:1,imageId:19},{id:20,name:"Fisher",stars:1,level:1,imageId:20},{id:21,name:"Farmer",stars:1,level:1,imageId:21},{id:22,name:"Doctor",stars:1,level:1,imageId:22},{id:23,name:"Teacher",stars:1,level:1,imageId:23},{id:24,name:"Artist",stars:1,level:1,imageId:24}]];D.forEach(De=>{const Be=ie.findIndex(at=>at.id===De.id);Be>-1?ie[Be]={...ie[Be],...De}:ie.push(De)});const le=ge(),re=de();re&&re.id&&le.delete(re.id),Z.value=ie.filter(De=>!le.has(De.id))}},de=()=>{const G=Ye.value,D=z.value;if(D<0||D>=6)return null;let H=null;return G==="mining"?H=ee.value:G==="hunting"?H=$e.value:G==="exploration"?H=He.value:G==="production"&&(H=qe.value),H&&H[D]?H[D]:null},pe=(G,D,H)=>{Ye.value=D,oe(),z.value=G,J.value=!0},ke=G=>{if(z.value>=0&&z.value<6){const D={id:G.id,level:G.level||1,stars:G.stars||1,imageId:G.imageId||G.id,name:G.name};let H=[];Ye.value==="mining"?H=ee.value:Ye.value==="hunting"?H=$e.value:Ye.value==="exploration"?H=He.value:Ye.value==="production"&&(H=qe.value);const ie=H.findIndex((re,De)=>re&&re.id===G.id&&De!==z.value);if(ie!==-1){H[ie]=null;const re=Ye.value,De=`${re}_${ie}_${G.id}`;Et.value[re][De]&&delete Et.value[re][De]}Ye.value==="mining"?(ee.value[z.value]=D,Fe("mining")):Ye.value==="hunting"?($e.value[z.value]=D,Fe("hunting")):Ye.value==="exploration"?(He.value[z.value]=D,Fe("exploration")):Ye.value==="production"&&(qe.value[z.value]=D,Fe("production"));const le=ht();le&&Mt(le.id,{miningCats:ee.value,huntingCats:$e.value,explorationCats:He.value,productionCats:qe.value})}J.value=!1,z.value=-1,Ye.value="mining"},Ge=()=>{if(z.value>=0&&z.value<6){const G=Ye.value;let D=[];G==="mining"?D=ee.value:G==="hunting"?D=$e.value:G==="exploration"?D=He.value:G==="production"&&(D=qe.value);const H=D[z.value];if(G==="mining"?(ee.value[z.value]=null,Fe("mining")):G==="hunting"?($e.value[z.value]=null,Fe("hunting")):G==="exploration"?(He.value[z.value]=null,Fe("exploration")):G==="production"&&(qe.value[z.value]=null,Fe("production")),H&&H.id){const le=`${G}_${z.value}_${H.id}`;Et.value[G][le]&&delete Et.value[G][le]}const ie=ht();ie&&Mt(ie.id,{miningCats:ee.value,huntingCats:$e.value,explorationCats:He.value,productionCats:qe.value})}J.value=!1,z.value=-1,Ye.value="mining"},Ne=()=>{J.value=!1,z.value=-1,Ye.value="mining"},$e=x([null,null,null,null,null,null]),He=x([null,null,null,null,null,null]),qe=x([null,null,null,null,null,null]),Ye=x("mining"),wt=x({mining:null,hunting:null,exploration:null,production:null}),Et=x({mining:{},hunting:{},exploration:{},production:{}}),Fe=G=>{wt.value[G]&&(clearInterval(wt.value[G]),wt.value[G]=null);let D=[];G==="mining"?D=ee.value:G==="hunting"?D=$e.value:G==="exploration"?D=He.value:G==="production"&&(D=qe.value);const H=D.filter(ie=>ie!==null);H.length!==0&&(H.forEach((ie,le)=>{const re=`${G}_${le}_${ie.id}`;Et.value[G][re]||(Et.value[G][re]=0)}),wt.value[G]=setInterval(()=>{let ie=[];G==="mining"?ie=ee.value:G==="hunting"?ie=$e.value:G==="exploration"?ie=He.value:G==="production"&&(ie=qe.value);const le=ie.filter(at=>at!==null);if(le.length===0){yt(G);return}const De={mining:"채굴",hunting:"사냥",exploration:"탐험",production:"생산"}[G]||"작업";let Be=[];G==="mining"?Be=ee.value:G==="hunting"?Be=$e.value:G==="exploration"?Be=He.value:G==="production"&&(Be=qe.value),le.forEach(at=>{const on=Be.findIndex(lt=>lt&&lt.id===at.id);if(on===-1)return;const Ze=`${G}_${on}_${at.id}`;Et.value[G][Ze]||(Et.value[G][Ze]=0),Et.value[G][Ze]+=1;const Ht=Et.value[G][Ze],jt=Math.min(window.innerWidth||500,500),Me=window.innerHeight||800,At=220,yn=60,Bt=20;if(Ht>=10){r.value+=100,o.value=r.value,Et.value[G][Ze]=0,consumePlanetEnergy();const lt=Math.random();let ct=0;if(lt<.3?ct=1:lt<.4&&(ct=2),ct>0&&(u.value+=ct,i.value===G))for(let Je=0;Je<ct;Je++){const Dt=Math.floor(Math.random()*6)+1,an=60,ni=30,Di={id:Date.now()+Je+on*1e3,x:Math.random()*(jt-an-ni*2)+ni,y:Math.random()*(Me-an-ni*2-200)+100,imageId:Dt};p.value.push(Di),setTimeout(()=>{const _r=p.value.findIndex(El=>El.id===Di.id);_r>-1&&p.value.splice(_r,1)},2e3)}if(s.value&&Mt(s.value.id,{coins:r.value,catFragments:u.value}),i.value===G){const Je={id:Date.now()+on+at.id*1e4,text:`${De} 완료! 100원 획득!`,x:Math.random()*(jt-At-Bt*2)+Bt,y:Math.random()*(Me-yn-Bt*2-200)+100};d.value.push(Je),setTimeout(()=>{const Dt=d.value.findIndex(an=>an.id===Je.id);Dt>-1&&d.value.splice(Dt,1)},3e3)}}else if(i.value===G){const lt={id:Date.now()+on+at.id*1e3+Ht*100,text:`${De} 진행: ${Ht}/10`,x:Math.random()*(jt-At-Bt*2)+Bt,y:Math.random()*(Me-yn-Bt*2-200)+100};d.value.push(lt),setTimeout(()=>{const ct=d.value.findIndex(Je=>Je.id===lt.id);ct>-1&&d.value.splice(ct,1)},2e3)}})},1e3))},yt=G=>{wt.value[G]&&(clearInterval(wt.value[G]),wt.value[G]=null)},ti=()=>{Object.keys(wt.value).forEach(G=>{yt(G)})};return ms(r,G=>{o.value=G}),ms([ee,$e,He,qe],()=>{["mining","hunting","exploration","production"].forEach(D=>{let H=[];D==="mining"?H=ee.value:D==="hunting"?H=$e.value:D==="exploration"?H=He.value:D==="production"&&(H=qe.value);const ie=H.map((le,re)=>le?`${D}_${re}_${le.id}`:null).filter(le=>le!==null);Object.keys(Et.value[D]).forEach(le=>{ie.includes(le)||delete Et.value[D][le]})}),Fe("mining"),Fe("hunting"),Fe("exploration"),Fe("production")},{deep:!0}),x(0),x(!1),x([{name:"슬라임",level:1,hp:100,maxHp:100,exp:10,gold:5},{name:"고블린",level:2,hp:150,maxHp:150,exp:20,gold:10},{name:"오크",level:3,hp:200,maxHp:200,exp:35,gold:20}]),x(null),x({level:1,exp:0,maxExp:100,hp:100,maxHp:100,attack:20}),x(0),x(!1),x(null),x([{name:"신비한 숲",level:1,difficulty:"쉬움",rewards:["나무","열매","약초"],description:"평화로운 숲에서 기본 자원을 수집할 수 있습니다.",discovered:!0},{name:"고대 유적",level:2,difficulty:"보통",rewards:["고대 유물","마법석","보석"],description:"신비한 힘이 깃든 고대 유적지입니다.",discovered:!1},{name:"용의 동굴",level:3,difficulty:"어려움",rewards:["용의 비늘","마나 크리스탈","희귀 보석"],description:"위험하지만 귀중한 보물이 숨겨진 곳입니다.",discovered:!1}]),x({wood:0,fruit:0,herb:0,artifact:0,magicStone:0,gem:0,dragonScale:0,manaCrystal:0,rareGem:0}),x(0),x(!1),x(null),x({wood:10,stone:5,iron:3,gold:1,diamond:0,herb:8,fruit:12}),x([{id:"woodenSword",name:"나무 검",level:1,materials:{wood:5,stone:2},result:{woodenSword:1},time:30,description:"기본적인 나무 검입니다."},{id:"ironSword",name:"철 검",level:2,materials:{wood:3,iron:5,stone:3},result:{ironSword:1},time:60,description:"강력한 철 검입니다."},{id:"healthPotion",name:"체력 포션",level:1,materials:{herb:3,fruit:2},result:{healthPotion:1},time:20,description:"체력을 회복시켜주는 포션입니다."}]),x({woodenSword:0,ironSword:0,healthPotion:0}),(G,D)=>(O(),V("div",Nk,[we(fn,{coinCount:r.value,currentEnergy:ot.value,maxEnergy:q.value,totalCoin:l.value,catCount:c.value},null,8,["coinCount","currentEnergy","maxEnergy","totalCoin","catCount"]),h("main",Mk,[i.value==="main"?(O(),V("article",Ok,[h("div",Vk,[h("div",Lk,[D[14]||(D[14]=h("div",{class:"statLabel"},"총 포인트",-1)),h("div",Bk,[D[13]||(D[13]=h("div",{class:"iconCircle pointIcon"},[h("img",{src:ik,alt:"P"})],-1)),h("span",Fk,B(e(o.value)),1)])]),D[17]||(D[17]=h("div",{class:"divider"},null,-1)),h("div",Uk,[D[16]||(D[16]=h("div",{class:"statLabel"},"총코인",-1)),h("div",$k,[D[15]||(D[15]=h("div",{class:"iconCircle coinIcon"},[h("img",{src:Ey,alt:"C"})],-1)),h("span",Hk,B(e(l.value)),1)])])]),h("div",jk,[h("div",{class:"modeCard miningCard",onClick:D[0]||(D[0]=H=>rt("mining"))},[D[18]||(D[18]=h("div",{class:"mainmenuBtns"},null,-1)),D[19]||(D[19]=h("div",{class:"modeTitle"},"채굴",-1)),h("div",Gk,"Level "+B(String(w.value).padStart(2,"0")),1)]),h("div",{class:"modeCard huntingCard",onClick:D[1]||(D[1]=H=>rt("hunting"))},[D[20]||(D[20]=h("div",{class:"mainmenuBtns"},null,-1)),D[21]||(D[21]=h("div",{class:"modeTitle"},"사냥",-1)),h("div",qk,"Level "+B(String(R.value).padStart(2,"0")),1)]),h("div",{class:"modeCard explorationCard",onClick:D[2]||(D[2]=H=>rt("exploration"))},[D[22]||(D[22]=h("div",{class:"mainmenuBtns"},null,-1)),D[23]||(D[23]=h("div",{class:"modeTitle"},"탐험",-1)),h("div",Qk,"Level "+B(String(se.value).padStart(2,"0")),1)]),h("div",{class:"modeCard productionCard",onClick:D[3]||(D[3]=H=>rt("production"))},[D[24]||(D[24]=h("div",{class:"mainmenuBtns"},null,-1)),D[25]||(D[25]=h("div",{class:"modeTitle"},"생산",-1)),h("div",Wk,"Level "+B(String(Ce.value).padStart(2,"0")),1)])])])):he("",!0),i.value==="mining"?(O(),V("div",zk,[h("div",Kk,[h("button",{class:"backBtn",onClick:D[4]||(D[4]=H=>rt("main"))},"← 뒤로")]),h("div",Yk,B(e(o.value)),1),h("div",Jk,[k.value&&!y.value?(O(),V("button",{key:0,onClick:D[5]||(D[5]=H=>Yt("mining")),class:Re(["clickerBtn miningBtn",{"mining-active":v.value>0}])},null,2)):he("",!0),y.value?(O(),V("div",Xk,[D[26]||(D[26]=h("div",{class:"completeMessageText"},"채굴 완료!",-1)),h("div",Zk,[h("div",eD,B(F.value.points.toLocaleString())+"point 획득!",1),F.value.fragments>0?(O(),V("div",tD,"고양이 파편 "+B(F.value.fragments)+"개 획득!",1)):he("",!0)])])):he("",!0)]),h("div",nD,[h("div",sD,[D[27]||(D[27]=h("span",{class:"energyIcon"},"⚡",-1)),h("span",iD,B(te.value.toLocaleString())+"/"+B(ue.value.toLocaleString()),1)]),h("div",rD,[h("div",{class:"energyFill",style:Ct({width:te.value/ue.value*100+"%"})},null,4)])]),h("div",oD,[D[30]||(D[30]=h("div",{class:"catsListLabel"},"채굴 냥이 목록",-1)),h("div",aD,[(O(!0),V(Se,null,je(ee.value,(H,ie)=>(O(),V("div",{key:ie,class:Re(["catCard",{emptySlot:!H,working:H&&i.value==="mining"}]),onClick:le=>pe(ie,"mining")},[H?(O(),V("div",cD,"Lv "+B(String(H.level).padStart(2,"0")),1)):he("",!0),H?(O(),V("div",uD,[h("img",{src:Q(H.imageId),alt:"고양이"},null,8,hD)])):he("",!0),H?(O(),V("div",dD,[(O(!0),V(Se,null,je(H.stars,le=>(O(),V("span",{key:le,class:"star"},[...D[28]||(D[28]=[h("img",{src:"",alt:""},null,-1)])]))),128))])):he("",!0),H?he("",!0):(O(),V("div",fD,[...D[29]||(D[29]=[h("span",{class:"emptySlotText"},"+",-1)])]))],10,lD))),128))])])])):he("",!0),i.value==="hunting"?(O(),V("div",pD,[h("div",gD,[h("button",{class:"backBtn",onClick:D[6]||(D[6]=H=>rt("main"))},"← 뒤로")]),h("div",mD,B(e(o.value)),1),h("div",vD,[E.value&&!N.value?(O(),V("button",{key:0,onClick:D[7]||(D[7]=H=>Yt("hunting")),class:Re(["clickerBtn huntingBtn",{"hunting-active":C.value>0}])},null,2)):he("",!0),N.value?(O(),V("div",_D,[D[31]||(D[31]=h("div",{class:"completeMessageText"},"사냥 완료!",-1)),h("div",yD,[h("div",AD,B(st.value.points.toLocaleString())+"point 획득!",1),st.value.fragments>0?(O(),V("div",ID,"고양이 파편 "+B(st.value.fragments)+"개 획득!",1)):he("",!0)])])):he("",!0)]),h("div",wD,[h("div",ED,[D[32]||(D[32]=h("span",{class:"energyIcon"},"⚡",-1)),h("span",TD,B(te.value.toLocaleString())+"/"+B(ue.value.toLocaleString()),1)]),h("div",CD,[h("div",{class:"energyFill",style:Ct({width:te.value/ue.value*100+"%"})},null,4)])]),h("div",bD,[D[35]||(D[35]=h("div",{class:"catsListLabel"},"사냥 냥이 목록",-1)),h("div",SD,[(O(!0),V(Se,null,je($e.value,(H,ie)=>(O(),V("div",{key:ie,class:Re(["catCard",{emptySlot:!H,working:H&&i.value==="hunting"}]),onClick:le=>pe(ie,"hunting")},[H?(O(),V("div",PD,"Lv "+B(String(H.level).padStart(2,"0")),1)):he("",!0),H?(O(),V("div",kD,[h("img",{src:Q(H.imageId),alt:"고양이"},null,8,DD)])):he("",!0),H?(O(),V("div",xD,[(O(!0),V(Se,null,je(H.stars,le=>(O(),V("span",{key:le,class:"star"},[...D[33]||(D[33]=[h("img",{src:"",alt:""},null,-1)])]))),128))])):he("",!0),H?he("",!0):(O(),V("div",ND,[...D[34]||(D[34]=[h("span",{class:"emptySlotText"},"+",-1)])]))],10,RD))),128))])])])):he("",!0),i.value==="exploration"?(O(),V("div",MD,[h("div",OD,[h("button",{class:"backBtn",onClick:D[8]||(D[8]=H=>rt("main"))},"← 뒤로")]),h("div",VD,B(e(o.value)),1),h("div",LD,[S.value&&!Ie.value?(O(),V("button",{key:0,onClick:D[9]||(D[9]=H=>Yt("exploration")),class:Re(["clickerBtn explorationBtn",{"exploration-active":U.value>0}])},null,2)):he("",!0),Ie.value?(O(),V("div",BD,[D[36]||(D[36]=h("div",{class:"completeMessageText"},"탐험 완료!",-1)),h("div",FD,[h("div",UD,B(I.value.points.toLocaleString())+"point 획득!",1),I.value.fragments>0?(O(),V("div",$D,"고양이 파편 "+B(I.value.fragments)+"개 획득!",1)):he("",!0)])])):he("",!0)]),h("div",HD,[h("div",jD,[D[37]||(D[37]=h("span",{class:"energyIcon"},"⚡",-1)),h("span",GD,B(te.value.toLocaleString())+"/"+B(ue.value.toLocaleString()),1)]),h("div",qD,[h("div",{class:"energyFill",style:Ct({width:te.value/ue.value*100+"%"})},null,4)])]),h("div",QD,[D[40]||(D[40]=h("div",{class:"catsListLabel"},"탐험 냥이 목록",-1)),h("div",WD,[(O(!0),V(Se,null,je(He.value,(H,ie)=>(O(),V("div",{key:ie,class:Re(["catCard",{emptySlot:!H,working:H&&i.value==="exploration"}]),onClick:le=>pe(ie,"exploration")},[H?(O(),V("div",KD,"Lv "+B(String(H.level).padStart(2,"0")),1)):he("",!0),H?(O(),V("div",YD,[h("img",{src:Q(H.imageId),alt:"고양이"},null,8,JD)])):he("",!0),H?(O(),V("div",XD,[(O(!0),V(Se,null,je(H.stars,le=>(O(),V("span",{key:le,class:"star"},[...D[38]||(D[38]=[h("img",{src:"",alt:""},null,-1)])]))),128))])):he("",!0),H?he("",!0):(O(),V("div",ZD,[...D[39]||(D[39]=[h("span",{class:"emptySlotText"},"+",-1)])]))],10,zD))),128))])])])):he("",!0),i.value==="production"?(O(),V("div",ex,[h("div",tx,[h("button",{class:"backBtn",onClick:D[10]||(D[10]=H=>rt("main"))},"← 뒤로")]),h("div",nx,B(e(o.value)),1),h("div",sx,[kt.value&&!be.value?(O(),V("button",{key:0,onClick:D[11]||(D[11]=H=>Yt("production")),class:Re(["clickerBtn productionBtn",{"production-active":_t.value>0}])},null,2)):he("",!0),be.value?(O(),V("div",ix,[D[41]||(D[41]=h("div",{class:"completeMessageText"},"생산 완료!",-1)),h("div",rx,[h("div",ox,B(Kt.value.points.toLocaleString())+"point 획득!",1),Kt.value.fragments>0?(O(),V("div",ax,"고양이 파편 "+B(Kt.value.fragments)+"개 획득!",1)):he("",!0)])])):he("",!0)]),h("div",lx,[h("div",cx,[D[42]||(D[42]=h("span",{class:"energyIcon"},"⚡",-1)),h("span",ux,B(te.value.toLocaleString())+"/"+B(ue.value.toLocaleString()),1)]),h("div",hx,[h("div",{class:"energyFill",style:Ct({width:te.value/ue.value*100+"%"})},null,4)])]),h("div",dx,[D[45]||(D[45]=h("div",{class:"catsListLabel"},"생산 냥이 목록",-1)),h("div",fx,[(O(!0),V(Se,null,je(qe.value,(H,ie)=>(O(),V("div",{key:ie,class:Re(["catCard",{emptySlot:!H,working:H&&i.value==="production"}]),onClick:le=>pe(ie,"production")},[H?(O(),V("div",gx,"Lv "+B(String(H.level).padStart(2,"0")),1)):he("",!0),H?(O(),V("div",mx,[h("img",{src:Q(H.imageId),alt:"고양이"},null,8,vx)])):he("",!0),H?(O(),V("div",_x,[(O(!0),V(Se,null,je(H.stars,le=>(O(),V("span",{key:le,class:"star"},[...D[43]||(D[43]=[h("img",{src:"",alt:""},null,-1)])]))),128))])):he("",!0),H?he("",!0):(O(),V("div",yx,[...D[44]||(D[44]=[h("span",{class:"emptySlotText"},"+",-1)])]))],10,px))),128))])])])):he("",!0)]),we(pn),i.value!=="main"?(O(),V("div",Ax,[(O(!0),V(Se,null,je(d.value,H=>(O(),V("div",{key:H.id,class:"speechBubble",style:Ct({left:H.x+"px",top:H.y+"px",transform:"translateX(-50%)"})},B(H.text),5))),128))])):he("",!0),i.value!=="main"?(O(),V("div",Ix,[(O(!0),V(Se,null,je(p.value,H=>(O(),V("div",{key:H.id,class:"catEmoji",style:Ct({left:H.x+"px",top:H.y+"px"})},[h("img",{src:K(H.imageId),alt:"",class:"tulImage",onError:ie=>W(H.id)},null,40,wx)],4))),128))])):he("",!0),J.value?(O(),V("div",{key:2,class:"catSelectPopupOverlay",onClick:Ne},[h("div",{class:"catSelectPopupContent",onClick:D[12]||(D[12]=qr(()=>{},["stop"]))},[h("div",{class:"catSelectPopupHeader"},[D[46]||(D[46]=h("h3",null,"고양이 선택",-1)),h("button",{class:"closePopupBtn",onClick:Ne},"×")]),h("div",Ex,[de()?(O(),V("div",Tx,[h("button",{class:"removeCatBtn",onClick:Ge}," 고양이 제거 ")])):he("",!0),h("div",Cx,[(O(!0),V(Se,null,je(Z.value,H=>(O(),V("div",{key:H.id,class:"availableCatCard",onClick:ie=>ke(H)},[h("div",Sx,[h("img",{src:Q(H.imageId||H.id),alt:"고양이"},null,8,Rx)]),h("div",Px,[h("div",kx,B(H.name),1),h("div",Dx,"Lv "+B(String(H.level||1).padStart(2,"0")),1),h("div",xx,[(O(!0),V(Se,null,je(H.stars||1,ie=>(O(),V("span",{key:ie,class:"star"},"★"))),128))])])],8,bx))),128))])])])])):he("",!0)]))}},Mx=Pt(Nx,[["__scopeId","data-v-a1ce1a95"]]),Ox={class:"miningPage"},Vx={class:"mainContent"},Lx={class:"miningContainer"},Bx={class:"pageHeader"},Fx={class:"levelInfo"},Ux={class:"miningProgress"},$x={class:"progressBar"},Hx={class:"progressText"},jx=["disabled"],Gx={key:0},qx={key:1},Qx={class:"resources"},Wx={class:"resourceList"},zx={class:"resourceItem"},Kx={class:"resourceItem"},Yx={class:"resourceItem"},Jx={class:"resourceItem"},Xx={__name:"MiningPage",setup(t){const e=dn(),n=x(0);Rt(()=>{const c=ht();c&&(n.value=c.gameData?.coins||0)});const s=x(1),i=x(0),r=x(!1),o=x({stone:0,iron:0,gold:0,diamond:0}),l=()=>{if(r.value)return;r.value=!0,i.value=0;const c=setInterval(()=>{if(i.value+=10,i.value>=100){clearInterval(c),r.value=!1,i.value=0;const u=Math.random();u<.4?o.value.stone++:u<.7?o.value.iron++:u<.9?o.value.gold++:o.value.diamond++}},200)};return(c,u)=>(O(),V("div",Ox,[we(fn,{coinCount:n.value},null,8,["coinCount"]),h("main",Vx,[h("div",Lx,[h("div",Bx,[h("button",{class:"backBtn",onClick:u[0]||(u[0]=d=>Wt(e).push("/main"))},"← 뒤로"),u[1]||(u[1]=h("h2",null,"⛏️ 채굴",-1))]),h("div",Fx,[h("span",null,"채굴 레벨: "+B(s.value),1)]),h("div",Ux,[h("div",$x,[h("div",{class:"progressFill",style:Ct({width:i.value+"%"})},null,4)]),h("span",Hx,B(i.value)+"%",1)]),h("button",{class:Re(["miningBtn",{mining:r.value}]),onClick:l,disabled:r.value},[r.value?(O(),V("span",qx,"⛏️ 채굴 중...")):(O(),V("span",Gx,"⛏️ 채굴 시작"))],10,jx),h("div",Qx,[u[6]||(u[6]=h("h3",null,"보유 자원",-1)),h("div",Wx,[h("div",zx,[u[2]||(u[2]=h("span",null,"🪨 돌",-1)),h("span",null,B(o.value.stone),1)]),h("div",Kx,[u[3]||(u[3]=h("span",null,"⚒️ 철",-1)),h("span",null,B(o.value.iron),1)]),h("div",Yx,[u[4]||(u[4]=h("span",null,"🥇 금",-1)),h("span",null,B(o.value.gold),1)]),h("div",Jx,[u[5]||(u[5]=h("span",null,"💎 다이아몬드",-1)),h("span",null,B(o.value.diamond),1)])])])])]),we(pn)]))}},Zx=Pt(Xx,[["__scopeId","data-v-17eb7d34"]]),eN={class:"huntingPage"},tN={class:"mainContent"},nN={class:"huntingContainer"},sN={class:"pageHeader"},iN={class:"playerStats"},rN={class:"statsGrid"},oN={class:"statItem"},aN={class:"statItem"},lN={class:"statItem"},cN={class:"statItem"},uN={class:"monsterSelection"},hN={class:"monsterList"},dN=["onClick"],fN={class:"monsterInfo"},pN={class:"monsterName"},gN={class:"monsterLevel"},mN={class:"monsterRewards"},vN={key:0,class:"currentMonster"},_N={class:"monsterHp"},yN={class:"hpBar"},AN={class:"hpText"},IN={class:"huntingProgress"},wN={class:"progressBar"},EN={class:"progressText"},TN=["disabled"],CN={key:0},bN={key:1},SN={__name:"HuntingPage",setup(t){const e=dn(),n=x(0);Rt(()=>{const d=ht();d&&(n.value=d.gameData?.coins||0)}),x(1);const s=x(0),i=x(!1),r=x([{name:"슬라임",level:1,hp:100,maxHp:100,exp:10,gold:5},{name:"고블린",level:2,hp:150,maxHp:150,exp:20,gold:10},{name:"오크",level:3,hp:200,maxHp:200,exp:35,gold:20}]),o=x(null),l=x({level:1,exp:0,maxExp:100,hp:100,maxHp:100,attack:20}),c=d=>{o.value={...d}},u=()=>{if(!o.value||i.value)return;i.value=!0,s.value=0;const d=setInterval(()=>{const p=Math.floor(Math.random()*l.value.attack)+10;o.value.hp-=p,o.value.hp<=0?(clearInterval(d),i.value=!1,s.value=100,l.value.exp+=o.value.exp,l.value.hp=l.value.maxHp,l.value.exp>=l.value.maxExp&&(l.value.level++,l.value.exp=0,l.value.maxExp=Math.floor(l.value.maxExp*1.5),l.value.attack+=5,l.value.maxHp+=20,l.value.hp=l.value.maxHp),setTimeout(()=>{o.value=null,s.value=0},2e3)):s.value=(o.value.maxHp-o.value.hp)/o.value.maxHp*100},500)};return(d,p)=>(O(),V("div",eN,[we(fn,{coinCount:n.value},null,8,["coinCount"]),h("main",tN,[h("div",nN,[h("div",sN,[h("button",{class:"backBtn",onClick:p[0]||(p[0]=m=>Wt(e).push("/main"))},"← 뒤로"),p[1]||(p[1]=h("h2",null,"⚔️ 사냥",-1))]),h("div",iN,[p[6]||(p[6]=h("h3",null,"플레이어 정보",-1)),h("div",rN,[h("div",oN,[p[2]||(p[2]=h("span",null,"레벨",-1)),h("span",null,B(l.value.level),1)]),h("div",aN,[p[3]||(p[3]=h("span",null,"체력",-1)),h("span",null,B(l.value.hp)+"/"+B(l.value.maxHp),1)]),h("div",lN,[p[4]||(p[4]=h("span",null,"공격력",-1)),h("span",null,B(l.value.attack),1)]),h("div",cN,[p[5]||(p[5]=h("span",null,"경험치",-1)),h("span",null,B(l.value.exp)+"/"+B(l.value.maxExp),1)])])]),h("div",uN,[p[7]||(p[7]=h("h3",null,"몬스터 선택",-1)),h("div",hN,[(O(!0),V(Se,null,je(r.value,m=>(O(),V("div",{key:m.name,class:Re(["monsterCard",{selected:o.value?.name===m.name}]),onClick:v=>c(m)},[h("div",fN,[h("span",pN,B(m.name),1),h("span",gN,"Lv."+B(m.level),1)]),h("div",mN,[h("span",null,"EXP: "+B(m.exp),1),h("span",null,"Gold: "+B(m.gold),1)])],10,dN))),128))])]),o.value?(O(),V("div",vN,[h("h3",null,B(o.value.name)+" (Lv."+B(o.value.level)+")",1),h("div",_N,[h("div",yN,[h("div",{class:"hpFill",style:Ct({width:o.value.hp/o.value.maxHp*100+"%"})},null,4)]),h("span",AN,B(o.value.hp)+"/"+B(o.value.maxHp),1)]),h("div",IN,[h("div",wN,[h("div",{class:"progressFill",style:Ct({width:s.value+"%"})},null,4)]),h("span",EN,B(Math.floor(s.value))+"%",1)]),h("button",{class:Re(["huntingBtn",{hunting:i.value}]),onClick:u,disabled:i.value},[i.value?(O(),V("span",bN,"⚔️ 사냥 중...")):(O(),V("span",CN,"⚔️ 사냥 시작"))],10,TN)])):he("",!0)])]),we(pn)]))}},RN=Pt(SN,[["__scopeId","data-v-9c82efe6"]]),PN={class:"explorationPage"},kN={class:"mainContent"},DN={class:"explorationContainer"},xN={class:"pageHeader"},NN={class:"levelInfo"},MN={class:"locationSelection"},ON={class:"locationList"},VN=["onClick"],LN={class:"locationInfo"},BN={class:"locationHeader"},FN={class:"locationName"},UN={class:"locationLevel"},$N={class:"locationDifficulty"},HN={class:"locationDescription"},jN={class:"locationRewards"},GN={key:0,class:"undiscoveredOverlay"},qN={key:0,class:"currentExploration"},QN={class:"explorationProgress"},WN={class:"progressBar"},zN={class:"progressText"},KN=["disabled"],YN={key:0},JN={key:1},XN={class:"explorationRewards"},ZN={class:"rewardsGrid"},eM={class:"rewardIcon"},tM={class:"rewardAmount"},nM={__name:"ExplorationPage",setup(t){const e=dn(),n=x(0);Rt(()=>{const p=ht();p&&(n.value=p.gameData?.coins||0)});const s=x(1),i=x(0),r=x(!1),o=x(null);x([]);const l=x([{name:"신비한 숲",level:1,difficulty:"쉬움",rewards:["나무","열매","약초"],description:"평화로운 숲에서 기본 자원을 수집할 수 있습니다.",discovered:!0},{name:"고대 유적",level:2,difficulty:"보통",rewards:["고대 유물","마법석","보석"],description:"신비한 힘이 깃든 고대 유적지입니다.",discovered:!1},{name:"용의 동굴",level:3,difficulty:"어려움",rewards:["용의 비늘","마나 크리스탈","희귀 보석"],description:"위험하지만 귀중한 보물이 숨겨진 곳입니다.",discovered:!1},{name:"천공의 섬",level:4,difficulty:"매우 어려움",rewards:["천공석","신비한 에너지","전설의 아이템"],description:"구름 위에 떠있는 신비한 섬입니다.",discovered:!1}]),c=x({wood:0,fruit:0,herb:0,artifact:0,magicStone:0,gem:0,dragonScale:0,manaCrystal:0,rareGem:0,skyStone:0,mysteriousEnergy:0,legendaryItem:0}),u=p=>{p.discovered&&(o.value=p)},d=()=>{if(!o.value||r.value)return;r.value=!0,i.value=0;const p=setInterval(()=>{if(i.value+=5,i.value>=100){clearInterval(p),r.value=!1,i.value=0;const m=Math.floor(Math.random()*o.value.rewards.length),v=o.value.rewards[m],T={나무:"wood",열매:"fruit",약초:"herb","고대 유물":"artifact",마법석:"magicStone",보석:"gem","용의 비늘":"dragonScale","마나 크리스탈":"manaCrystal","희귀 보석":"rareGem",천공석:"skyStone","신비한 에너지":"mysteriousEnergy","전설의 아이템":"legendaryItem"};if(T[v]&&c.value[T[v]]++,Math.random()<.3){const w=l.value.find(y=>!y.discovered);w&&(w.discovered=!0)}s.value++,setTimeout(()=>{o.value=null},2e3)}},300)};return(p,m)=>(O(),V("div",PN,[we(fn,{coinCount:n.value},null,8,["coinCount"]),h("main",kN,[h("div",DN,[h("div",xN,[h("button",{class:"backBtn",onClick:m[0]||(m[0]=v=>Wt(e).push("/main"))},"← 뒤로"),m[1]||(m[1]=h("h2",null,"🗺️ 탐험",-1))]),h("div",NN,[h("span",null,"탐험 레벨: "+B(s.value),1)]),h("div",MN,[m[3]||(m[3]=h("h3",null,"탐험 지역",-1)),h("div",ON,[(O(!0),V(Se,null,je(l.value,v=>(O(),V("div",{key:v.name,class:Re(["locationCard",{selected:o.value?.name===v.name,undiscovered:!v.discovered}]),onClick:T=>u(v)},[h("div",LN,[h("div",BN,[h("span",FN,B(v.name),1),h("span",UN,"Lv."+B(v.level),1)]),h("span",$N,B(v.difficulty),1),h("p",HN,B(v.description),1),h("div",jN,[(O(!0),V(Se,null,je(v.rewards,T=>(O(),V("span",{key:T,class:"rewardTag"},B(T),1))),128))])]),v.discovered?he("",!0):(O(),V("div",GN,[...m[2]||(m[2]=[h("span",null,"🔒 미발견",-1)])]))],10,VN))),128))])]),o.value?(O(),V("div",qN,[h("h3",null,B(o.value.name)+" 탐험 중",1),h("div",QN,[h("div",WN,[h("div",{class:"progressFill",style:Ct({width:i.value+"%"})},null,4)]),h("span",zN,B(i.value)+"%",1)]),h("button",{class:Re(["explorationBtn",{exploring:r.value}]),onClick:d,disabled:r.value},[r.value?(O(),V("span",JN,"🗺️ 탐험 중...")):(O(),V("span",YN,"🗺️ 탐험 시작"))],10,KN)])):he("",!0),h("div",XN,[m[4]||(m[4]=h("h3",null,"탐험 보상",-1)),h("div",ZN,[(O(!0),V(Se,null,je(c.value,(v,T)=>fs((O(),V("div",{key:T,class:"rewardItem"},[h("span",eM,B(T==="wood"?"🪵":T==="fruit"?"🍎":T==="herb"?"🌿":T==="artifact"?"🏺":T==="magicStone"||T==="gem"?"💎":T==="dragonScale"?"🐉":T==="manaCrystal"?"🔮":T==="rareGem"?"💠":T==="skyStone"?"☁️":T==="mysteriousEnergy"?"✨":T==="legendaryItem"?"⭐":"🎁"),1),h("span",tM,B(v),1)])),[[um,v>0]])),128))])])])]),we(pn)]))}},sM=Pt(nM,[["__scopeId","data-v-f05b4431"]]),iM={class:"productionPage"},rM={class:"mainContent"},oM={class:"productionContainer"},aM={class:"pageHeader"},lM={class:"levelInfo"},cM={class:"inventory"},uM={class:"inventoryGrid"},hM={class:"materialIcon"},dM={class:"materialName"},fM={class:"materialAmount"},pM={class:"recipes"},gM={class:"recipeList"},mM=["onClick"],vM={class:"recipeInfo"},_M={class:"recipeHeader"},yM={class:"recipeName"},AM={class:"recipeLevel"},IM={class:"recipeDescription"},wM={class:"recipeMaterials"},EM={class:"recipeTime"},TM={key:0,class:"currentProduction"},CM={class:"productionProgress"},bM={class:"progressBar"},SM={class:"progressText"},RM=["disabled"],PM={key:0},kM={key:1},DM={class:"producedItems"},xM={class:"itemsGrid"},NM={class:"itemIcon"},MM={class:"itemName"},OM={class:"itemAmount"},VM={__name:"ProductionPage",setup(t){const e=dn(),n=x(0);Rt(()=>{const v=ht();v&&(n.value=v.gameData?.coins||0)});const s=x(1),i=x(0),r=x(!1),o=x(null),l=x({wood:10,stone:5,iron:3,gold:1,diamond:0,herb:8,fruit:12}),c=x([{id:"woodenSword",name:"나무 검",level:1,materials:{wood:5,stone:2},result:{woodenSword:1},time:30,description:"기본적인 나무 검입니다."},{id:"ironSword",name:"철 검",level:2,materials:{wood:3,iron:5,stone:3},result:{ironSword:1},time:60,description:"강력한 철 검입니다."},{id:"goldenSword",name:"황금 검",level:3,materials:{iron:3,gold:8,diamond:1},result:{goldenSword:1},time:120,description:"매우 강력한 황금 검입니다."},{id:"healthPotion",name:"체력 포션",level:1,materials:{herb:3,fruit:2},result:{healthPotion:1},time:20,description:"체력을 회복시켜주는 포션입니다."},{id:"manaPotion",name:"마나 포션",level:2,materials:{herb:5,fruit:3,stone:1},result:{manaPotion:1},time:40,description:"마나를 회복시켜주는 포션입니다."},{id:"magicRing",name:"마법 반지",level:3,materials:{gold:5,diamond:2,herb:4},result:{magicRing:1},time:90,description:"마법력을 증폭시키는 반지입니다."}]),u=x({woodenSword:0,ironSword:0,goldenSword:0,healthPotion:0,manaPotion:0,magicRing:0}),d=v=>{Object.entries(v.materials).every(([w,y])=>l.value[w]>=y)&&v.level<=s.value&&(o.value=v)},p=()=>{if(!o.value||r.value)return;Object.entries(o.value.materials).forEach(([T,w])=>{l.value[T]-=w}),r.value=!0,i.value=0;const v=setInterval(()=>{i.value+=100/(o.value.time/.1),i.value>=100&&(clearInterval(v),r.value=!1,i.value=0,Object.entries(o.value.result).forEach(([T,w])=>{u.value[T]+=w}),Math.random()<.1&&s.value++,setTimeout(()=>{o.value=null},2e3))},100)},m=v=>Object.entries(v.materials).every(([w,y])=>l.value[w]>=y)&&v.level<=s.value;return(v,T)=>(O(),V("div",iM,[we(fn,{coinCount:n.value},null,8,["coinCount"]),h("main",rM,[h("div",oM,[h("div",aM,[h("button",{class:"backBtn",onClick:T[0]||(T[0]=w=>Wt(e).push("/main"))},"← 뒤로"),T[1]||(T[1]=h("h2",null,"🏭 생산",-1))]),h("div",lM,[h("span",null,"생산 레벨: "+B(s.value),1)]),h("div",cM,[T[2]||(T[2]=h("h3",null,"재료 보유량",-1)),h("div",uM,[(O(!0),V(Se,null,je(l.value,(w,y)=>(O(),V("div",{key:y,class:"inventoryItem"},[h("span",hM,B(y==="wood"?"🪵":y==="stone"?"🪨":y==="iron"?"⚒️":y==="gold"?"🥇":y==="diamond"?"💎":y==="herb"?"🌿":y==="fruit"?"🍎":"📦"),1),h("span",dM,B(y),1),h("span",fM,B(w),1)]))),128))])]),h("div",pM,[T[3]||(T[3]=h("h3",null,"제작 레시피",-1)),h("div",gM,[(O(!0),V(Se,null,je(c.value,w=>(O(),V("div",{key:w.id,class:Re(["recipeCard",{selected:o.value?.id===w.id,disabled:!m(w)}]),onClick:y=>d(w)},[h("div",vM,[h("div",_M,[h("span",yM,B(w.name),1),h("span",AM,"Lv."+B(w.level),1)]),h("p",IM,B(w.description),1),h("div",wM,[(O(!0),V(Se,null,je(w.materials,(y,k)=>(O(),V("span",{key:k,class:"materialTag"},B(k)+" x"+B(y),1))),128))]),h("div",EM,[h("span",null,"⏱️ "+B(w.time)+"초",1)])])],10,mM))),128))])]),o.value?(O(),V("div",TM,[h("h3",null,B(o.value.name)+" 제작 중",1),h("div",CM,[h("div",bM,[h("div",{class:"progressFill",style:Ct({width:i.value+"%"})},null,4)]),h("span",SM,B(Math.floor(i.value))+"%",1)]),h("button",{class:Re(["productionBtn",{producing:r.value}]),onClick:p,disabled:r.value},[r.value?(O(),V("span",kM,"🏭 제작 중...")):(O(),V("span",PM,"🏭 제작 시작"))],10,RM)])):he("",!0),h("div",DM,[T[4]||(T[4]=h("h3",null,"제작된 아이템",-1)),h("div",xM,[(O(!0),V(Se,null,je(u.value,(w,y)=>fs((O(),V("div",{key:y,class:"itemCard"},[h("span",NM,B(y==="woodenSword"?"🗡️":y==="ironSword"?"⚔️":y==="goldenSword"?"🏆":y==="healthPotion"?"🧪":y==="manaPotion"?"💊":y==="magicRing"?"💍":"📦"),1),h("span",MM,B(y),1),h("span",OM,B(w),1)])),[[um,w>0]])),128))])])])]),we(pn)]))}},LM=Pt(VM,[["__scopeId","data-v-2344037c"]]),BM={class:"exchangePage"},FM={class:"mainContent"},UM={class:"tabs"},$M={class:"infoCard"},HM={class:"infoRow"},jM={class:"value"},GM={class:"infoRow"},qM={class:"value"},QM={class:"infoRow"},WM={class:"value"},zM={class:"inputCard"},KM={class:"inputLabel"},YM={class:"inputWrapper"},JM={key:0,class:"resultInfo"},XM={class:"resultRow"},ZM={class:"resultValue"},eO=["disabled"],ig=1e3,tO={__name:"ExchangePage",setup(t){const e=x(null),n=x(0),s=x(0),i=x("buy"),r=x(""),o=Xe(()=>{if(!r.value)return 0;const u=parseFloat(r.value)||0;return Math.floor(u*ig)}),l=()=>{const u=ht();u&&(e.value=u,n.value=u.gameData?.coins||0,s.value=u.gameData?.totalCoin||0)},c=()=>{if(!e.value){alert("로그인이 필요합니다.");return}if(!r.value||parseFloat(r.value)<=0){alert("코인 수량을 입력해주세요.");return}const u=parseFloat(r.value),d=u;if(i.value==="buy"){const p=o.value;if(n.value<p){alert(`포인트가 부족합니다.
필요: ${p.toLocaleString()} Point
보유: ${n.value.toLocaleString()} Point`);return}const m=n.value-p,v=s.value+d;Ea(e.value.id,m,v)?(n.value=m,s.value=v,l(),window.dispatchEvent(new CustomEvent("userDataUpdated")),alert(`구매 완료!
${u} Coin 구매
사용한 Point: ${p.toLocaleString()}`),r.value=""):alert("거래 실패. 다시 시도해주세요.")}else{if(s.value<d){alert(`코인이 부족합니다.
필요: ${u} Coin
보유: ${s.value.toLocaleString()} Coin`);return}const p=o.value,m=n.value+p,v=s.value-d;Ea(e.value.id,m,v)?(n.value=m,s.value=v,l(),window.dispatchEvent(new CustomEvent("userDataUpdated")),alert(`판매 완료!
${u} Coin 판매
받은 Point: ${p.toLocaleString()}`),r.value=""):alert("거래 실패. 다시 시도해주세요.")}};return ms(i,()=>{r.value=""}),Rt(()=>{l()}),(u,d)=>(O(),V("div",BM,[we(fn,{coinCount:n.value},null,8,["coinCount"]),h("main",FM,[h("div",UM,[h("button",{class:Re(["tab",{active:i.value==="buy"}]),onClick:d[0]||(d[0]=p=>i.value="buy")}," Coin 구매 ",2),h("button",{class:Re(["tab",{active:i.value==="sell"}]),onClick:d[1]||(d[1]=p=>i.value="sell")}," Coin 판매 ",2)]),h("div",$M,[h("div",HM,[d[3]||(d[3]=h("span",null,"보유 포인트",-1)),h("span",jM,B(n.value.toLocaleString())+" P",1)]),h("div",GM,[d[4]||(d[4]=h("span",null,"보유 코인",-1)),h("span",qM,B(s.value.toLocaleString())+" C",1)]),h("div",QM,[d[5]||(d[5]=h("span",null,"거래가",-1)),h("span",WM,"1 Coin = "+B(ig.toLocaleString())+" Point",1)])]),h("div",zM,[h("label",KM,B(i.value==="buy"?"구매할 코인 수량":"판매할 코인 수량"),1),h("div",YM,[fs(h("input",{type:"number","onUpdate:modelValue":d[2]||(d[2]=p=>r.value=p),placeholder:"예: 1",class:"amountInput",step:"0.01",min:"0"},null,512),[[mi,r.value]]),d[6]||(d[6]=h("span",{class:"unit"},"Coin",-1))]),r.value&&parseFloat(r.value)>0?(O(),V("div",JM,[h("div",XM,[h("span",null,B(i.value==="buy"?"필요 포인트":"받을 포인트"),1),h("span",ZM,B(o.value.toLocaleString())+" P",1)])])):he("",!0)]),h("button",{class:"submitBtn",onClick:c,disabled:!r.value||parseFloat(r.value)<=0},B(i.value==="buy"?"구매하기":"판매하기"),9,eO)]),we(pn)]))}},nO=Pt(tO,[["__scopeId","data-v-212c7d26"]]),sO={class:"questPage"},iO={class:"mainContent"},rO={class:"filterTabs"},oO={class:"mainTabs"},aO={class:"questList"},lO={class:"questContent"},cO={class:"questInfo"},uO={class:"questTitle"},hO={class:"questDescription"},dO=["onClick"],fO={key:1,class:"completedBadge"},pO={key:2,class:"progressBar"},gO={class:"progressText"},mO={__name:"QuestPage",setup(t){const e=x(0),n=x("inProgress"),s=x("daily"),i=()=>new Date().toDateString(),r=()=>{const p=localStorage.getItem("questLastDate"),m=i();return p!==m?(localStorage.setItem("questLastDate",m),localStorage.removeItem("rewardedQuests"),!0):!1},o=()=>{const p=localStorage.getItem("rewardedQuests");return p?JSON.parse(p):[]},l=p=>{localStorage.setItem("rewardedQuests",JSON.stringify(p)),localStorage.setItem("questLastDate",i())},c=x([{id:1,title:"일일 채굴 10회",description:"오늘 하루 채굴을 10회 완료하세요",completed:!0,rewardReceived:!1,progress:10,total:10,type:"daily"},{id:2,title:"일일 사냥 5회",description:"몬스터를 5마리 처치하세요",completed:!0,rewardReceived:!1,progress:5,total:5,type:"daily"},{id:3,title:"일일 탐험 1회",description:"탐험 활동을 1회 완료하세요",completed:!1,rewardReceived:!1,progress:0,total:1,type:"daily"},{id:4,title:"일일 생산 3개",description:"아이템을 3개 이상 생산하세요",completed:!1,rewardReceived:!1,progress:1,total:3,type:"daily"},{id:5,title:"일일 코인 1,000 획득",description:"코인을 1,000개 이상 획득하세요",completed:!1,rewardReceived:!1,progress:650,total:1e3,type:"daily"},{id:6,title:"일일 레벨업 1회",description:"레벨을 1레벨 이상 올리세요",completed:!1,rewardReceived:!1,progress:.6,total:1,type:"daily"},{id:7,title:"일일 데일리 체크",description:"게임에 접속하여 일일 퀘스트를 확인하세요",completed:!0,rewardReceived:!1,progress:1,total:1,type:"daily"},{id:8,title:"일일 랜덤 상자 수집",description:"랜덤 상자를 2개 이상 수집하세요",completed:!1,rewardReceived:!1,progress:1,total:2,type:"daily"},{id:9,title:"주간 퀘스트: 채굴 마스터",description:"일주일간 채굴을 50회 완료하세요",completed:!1,rewardReceived:!1,progress:23,total:50,type:"weekly"},{id:10,title:"주간 퀘스트: 사냥꾼",description:"일주일 동안 몬스터를 100마리 처치하세요",completed:!1,rewardReceived:!1,progress:45,total:100,type:"weekly"},{id:11,title:"주간 퀘스트: 탐험가",description:"새로운 지역을 5곳 탐험하세요",completed:!0,rewardReceived:!1,progress:5,total:5,type:"weekly"},{id:12,title:"주간 퀘스트: 생산자",description:"아이템을 50개 이상 생산하세요",completed:!1,rewardReceived:!1,progress:28,total:50,type:"weekly"},{id:13,title:"주간 퀘스트: 코인 모으기",description:"코인을 5만개 이상 획득하세요",completed:!1,rewardReceived:!1,progress:32e3,total:5e4,type:"weekly"},{id:14,title:"주간 퀘스트: 레벨업 5",description:"레벨을 5레벨 이상 올리세요",completed:!1,rewardReceived:!1,progress:3,total:5,type:"weekly"},{id:15,title:"주간 퀘스트: 수집가",description:"다양한 보물을 20개 수집하세요",completed:!1,rewardReceived:!1,progress:12,total:20,type:"weekly"},{id:16,title:"주간 퀘스트: 종합 능력",description:"모든 활동을 각각 10회 이상 수행하세요",completed:!1,rewardReceived:!1,progress:35,total:40,type:"weekly"},{id:17,title:"월간 퀘스트: 코인왕",description:"이번 달 코인을 20만 개 이상 획득하세요",completed:!1,rewardReceived:!1,progress:95e3,total:2e5,type:"monthly"},{id:18,title:"월간 퀘스트: 극한 레벨업",description:"레벨을 20레벨 이상 올리세요",completed:!1,rewardReceived:!1,progress:15,total:20,type:"monthly"},{id:19,title:"월간 퀘스트: 완벽한 수집가",description:"보물을 100개 이상 수집하세요",completed:!1,rewardReceived:!1,progress:67,total:100,type:"monthly"},{id:20,title:"월간 퀘스트: 마스터 채굴러",description:"채굴을 500회 이상 완료하세요",completed:!1,rewardReceived:!1,progress:289,total:500,type:"monthly"},{id:21,title:"월간 퀘스트: 용사",description:"몬스터를 500마리 처치하세요",completed:!1,rewardReceived:!1,progress:234,total:500,type:"monthly"},{id:22,title:"월간 퀘스트: 대탐험가",description:"새로운 지역을 20곳 탐험하세요",completed:!1,rewardReceived:!1,progress:14,total:20,type:"monthly"},{id:23,title:"월간 퀘스트: 완벽한 제작자",description:"다양한 아이템을 200개 생산하세요",completed:!1,rewardReceived:!1,progress:123,total:200,type:"monthly"},{id:24,title:"월간 퀘스트: 최고 달성자",description:"이번 달 모든 활동을 완벽하게 수행하세요",completed:!0,rewardReceived:!1,progress:100,total:100,type:"monthly"}]),u=p=>{const m=c.value.find(v=>v.id===p);if(m&&m.completed&&!m.rewardReceived){m.rewardReceived=!0;const v=o();v.includes(p)||(v.push(p),l(v)),alert("보상 받기 완료!")}},d=Xe(()=>{let p=c.value.filter(m=>m.type===s.value);return n.value==="inProgress"?p=p.filter(m=>!m.completed||m.completed&&!m.rewardReceived):n.value==="completed"&&(p=p.filter(m=>m.completed&&m.rewardReceived)),p.sort((m,v)=>m.completed&&!m.rewardReceived&&(v.rewardReceived||!v.completed)?-1:(m.rewardReceived||!m.completed)&&v.completed&&!v.rewardReceived?1:0)});return Rt(()=>{const p=ht();p&&(e.value=p.gameData?.coins||0),r();const m=o();c.value.forEach(v=>{m.includes(v.id)&&(v.rewardReceived=!0)})}),(p,m)=>(O(),V("div",sO,[we(fn,{coinCount:e.value},null,8,["coinCount"]),h("main",iO,[h("div",rO,[h("button",{class:Re(["filterTab",{active:s.value==="daily"}]),onClick:m[0]||(m[0]=v=>s.value="daily")}," Daily ",2),h("button",{class:Re(["filterTab",{active:s.value==="weekly"}]),onClick:m[1]||(m[1]=v=>s.value="weekly")}," Weekly ",2),h("button",{class:Re(["filterTab",{active:s.value==="monthly"}]),onClick:m[2]||(m[2]=v=>s.value="monthly")}," Monthly ",2)]),h("div",oO,[h("button",{class:Re(["mainTab",{active:n.value==="inProgress"}]),onClick:m[3]||(m[3]=v=>n.value="inProgress")}," 진행중 ",2),h("button",{class:Re(["mainTab",{active:n.value==="completed"}]),onClick:m[4]||(m[4]=v=>n.value="completed")}," 완료 ",2)]),h("div",aO,[(O(!0),V(Se,null,je(d.value,v=>(O(),V("div",{key:v.id,class:"questCard"},[h("div",lO,[h("div",cO,[h("h3",uO,B(v.title),1),h("p",hO,B(v.description),1)]),m[5]||(m[5]=h("div",{class:"questCharacter"},[h("div",{class:"characterImg"},"🐱")],-1))]),v.completed&&!v.rewardReceived?(O(),V("button",{key:0,class:"rewardBtn",onClick:T=>u(v.id)}," 보상받기 ",8,dO)):v.completed&&v.rewardReceived?(O(),V("div",fO," ✓ 완료됨 ")):(O(),V("div",pO,[h("div",{class:"progressFill",style:Ct({width:v.progress/v.total*100+"%"})},null,4),h("span",gO,B(v.progress)+"/"+B(v.total),1)]))]))),128))])]),we(pn)]))}},vO=Pt(mO,[["__scopeId","data-v-7bee4ca6"]]),_O="/tdl/assets/statStar1-DSWl6DZx.png",yO="/tdl/assets/statStar2-7A5sNtwf.png",AO={class:"inventoryPage"},IO={class:"mainContent"},wO={class:"topSection"},EO={class:"magicPanel"},TO={class:"panelTitle"},CO={class:"characterBox"},bO=["src"],SO={class:"profilePanel"},RO={class:"progressBars"},PO={class:"statLabel"},kO={class:"barBg"},DO={class:"value"},xO={class:"inventoryGrid"},NO=["onClick"],MO={key:0,class:"newBadge"},OO={class:"starBadge"},VO=["src"],LO={class:"levelBadge"},BO=["src"],FO={__name:"InventoryPage",setup(t){const e=x(0),n=v=>[{name:"근력",value:v[0],progress:v[0],color:"#FF6B6B"},{name:"체력",value:v[1],progress:v[1],color:"#FF8A80"},{name:"지능",value:v[2],progress:v[2],color:"#9C27B0"},{name:"손재주",value:v[3],progress:v[3],color:"#FFA726"},{name:"용기",value:v[4],progress:v[4],color:"#00BCD4"},{name:"행운",value:v[5],progress:v[5],color:"#66BB6A"}],s=()=>Math.floor(Math.random()*3)+1,i=()=>Math.floor(Math.random()*10)+1,r=[{id:1,name:"Robot",selected:!0,stars:s(),level:i(),stats:n([33,7,29,10,11,10]),imageId:1,isNew:!1},{id:2,name:"Style",selected:!1,stars:s(),level:i(),stats:n([15,25,35,45,20,30]),imageId:2,isNew:!1},{id:3,name:"Suit",selected:!1,stars:s(),level:i(),stats:n([25,20,40,30,25,15]),imageId:3,isNew:!1},{id:4,name:"Tech",selected:!1,stars:s(),level:i(),stats:n([20,15,50,40,10,25]),imageId:4,isNew:!1},{id:5,name:"Army",selected:!1,stars:s(),level:i(),stats:n([45,40,15,20,50,10]),imageId:5,isNew:!1},{id:6,name:"Detective",selected:!1,stars:s(),level:i(),stats:n([20,25,45,30,35,25]),imageId:6,isNew:!1},{id:7,name:"Scholar",selected:!1,stars:s(),level:i(),stats:n([10,15,60,25,20,30]),imageId:7,isNew:!1},{id:8,name:"White",selected:!1,stars:s(),level:i(),stats:n([30,30,30,30,30,30]),imageId:8,isNew:!1},{id:9,name:"Green",selected:!1,stars:s(),level:i(),stats:n([25,35,20,25,30,35]),imageId:9,isNew:!1},{id:10,name:"Blue",selected:!1,stars:s(),level:i(),stats:n([20,30,35,30,25,30]),imageId:10,isNew:!1},{id:11,name:"Red",selected:!1,stars:s(),level:i(),stats:n([40,25,20,25,45,15]),imageId:11,isNew:!1},{id:12,name:"Shirt",selected:!1,stars:s(),level:i(),stats:n([22,28,32,28,22,28]),imageId:12,isNew:!1},{id:13,name:"Ninja",selected:!1,stars:s(),level:i(),stats:n([35,25,30,50,40,20]),imageId:13,isNew:!1},{id:14,name:"Knight",selected:!1,stars:s(),level:i(),stats:n([50,45,20,25,45,15]),imageId:14,isNew:!1},{id:15,name:"Pirate",selected:!1,stars:s(),level:i(),stats:n([40,35,25,35,50,25]),imageId:15,isNew:!1},{id:16,name:"Sailor",selected:!1,stars:s(),level:i(),stats:n([30,40,25,30,35,30]),imageId:16,isNew:!1},{id:17,name:"Sport",selected:!1,stars:s(),level:i(),stats:n([45,50,15,40,30,20]),imageId:17,isNew:!1},{id:18,name:"Cafe",selected:!1,stars:s(),level:i(),stats:n([20,25,30,45,25,35]),imageId:18,isNew:!1},{id:19,name:"Chef",selected:!1,stars:s(),level:i(),stats:n([25,30,25,50,20,30]),imageId:19,isNew:!1},{id:20,name:"Fisher",selected:!1,stars:s(),level:i(),stats:n([30,35,20,40,30,25]),imageId:20,isNew:!1},{id:21,name:"Farmer",selected:!1,stars:s(),level:i(),stats:n([40,45,20,35,25,30]),imageId:21,isNew:!1},{id:22,name:"Doctor",selected:!1,stars:s(),level:i(),stats:n([15,30,55,35,25,30]),imageId:22,isNew:!1},{id:23,name:"Teacher",selected:!1,stars:s(),level:i(),stats:n([20,25,50,30,30,25]),imageId:23,isNew:!1},{id:24,name:"Artist",selected:!1,stars:s(),level:i(),stats:n([15,20,40,55,25,35]),imageId:24,isNew:!1}],o=x([...r]),l=Xe(()=>{const v=o.value.find(T=>T.selected);return v&&v.stats?v.stats:n([33,7,29,10,11,10])}),c=Xe(()=>{const v=o.value.find(T=>T.selected);return v?v.name:"Magic"}),u=v=>{try{return new URL(Object.assign({"../assets/img/cat1.png":mh,"../assets/img/cat10.png":vh,"../assets/img/cat11.png":_h,"../assets/img/cat12.png":yh,"../assets/img/cat13.png":Ah,"../assets/img/cat14.png":Ih,"../assets/img/cat15.png":wh,"../assets/img/cat16.png":Eh,"../assets/img/cat17.png":Th,"../assets/img/cat18.png":Ch,"../assets/img/cat19.png":bh,"../assets/img/cat2.png":Sh,"../assets/img/cat20.png":Rh,"../assets/img/cat21.png":Ph,"../assets/img/cat22.png":kh,"../assets/img/cat23.png":Dh,"../assets/img/cat24.png":xh,"../assets/img/cat25.png":Nh,"../assets/img/cat26.png":Mh,"../assets/img/cat27.png":Oh,"../assets/img/cat28.png":Vh,"../assets/img/cat29.png":Lh,"../assets/img/cat3.png":Bh,"../assets/img/cat30.png":Fh,"../assets/img/cat4.png":Uh,"../assets/img/cat5.png":$h,"../assets/img/cat6.png":Hh,"../assets/img/cat7.png":jh,"../assets/img/cat8.png":Gh,"../assets/img/cat9.png":qh,"../assets/img/catProfile01.png":Qh,"../assets/img/catProfile02.png":Wh,"../assets/img/cat_ico.png":zh})[`../assets/img/cat${v}.png`],import.meta.url).href}catch{return`/src/assets/img/cat${v}.png`}},d=Xe(()=>{const v=o.value.find(T=>T.selected);return u(v?v.imageId||v.id:1)}),p=Xe(()=>{const v=o.value.filter(w=>w.isNew),T=o.value.filter(w=>!w.isNew);return[...v,...T]}),m=v=>{if(o.value.forEach(T=>T.selected=!1),v.selected=!0,v.isNew){v.isNew=!1;const T=ht();if(T){const w=o.value.map(y=>({...y,isNew:y.id===v.id?!1:y.isNew}));Mt(T.id,{inventory:w})}}};return Rt(()=>{const v=ht();if(v){e.value=v.gameData?.coins||0;const T=v.gameData?.inventory;if(T&&T.length>0){const w=[...r];T.forEach(y=>{const k=w.findIndex(F=>F.id===y.id);k>-1?w[k]={...w[k],...y}:w.push({...y,stats:n([Math.floor(Math.random()*40)+10,Math.floor(Math.random()*40)+10,Math.floor(Math.random()*40)+10,Math.floor(Math.random()*40)+10,Math.floor(Math.random()*40)+10,Math.floor(Math.random()*40)+10])})}),o.value=w}}}),(v,T)=>(O(),V("div",AO,[we(fn,{coinCount:e.value},null,8,["coinCount"]),h("main",IO,[h("div",wO,[h("div",EO,[h("div",TO,B(c.value),1),h("div",CO,[h("img",{src:d.value,alt:"선택된 캐릭터",class:"selectedCharacter"},null,8,bO)])]),h("div",SO,[T[0]||(T[0]=h("div",{class:"panelTitle"},"Profile",-1)),h("div",RO,[(O(!0),V(Se,null,je(l.value,(w,y)=>(O(),V("div",{key:y,class:"progressBar"},[h("div",PO,B(w.name),1),h("div",kO,[h("div",{style:Ct({width:w.progress+"%",backgroundColor:w.color}),class:"barFill"},null,4)]),h("span",DO,B(w.value)+"%",1)]))),128))])])]),h("div",xO,[(O(!0),V(Se,null,je(p.value,w=>(O(),V("div",{key:w.id,class:Re(["inventoryItem",{selected:w.selected}]),onClick:y=>m(w)},[w.isNew?(O(),V("div",MO,"NEW")):he("",!0),h("div",OO,[(O(),V(Se,null,je(5,y=>h("img",{key:y,src:y<=w.stars?Wt(_O):Wt(yO),alt:"별",class:"starIcon"},null,8,VO)),64))]),h("div",LO," Lv "+B(String(w.level).padStart(2,"0")),1),h("img",{src:u(w.imageId||w.id),alt:"고양이",class:"itemIcon"},null,8,BO)],10,NO))),128))])]),we(pn)]))}},UO=Pt(FO,[["__scopeId","data-v-93b70a94"]]),$O="/tdl/assets/factory_cat-DD06P-8u.png",HO="/tdl/assets/factory_under_line-BMeQefpa.png",jO="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAAJCAYAAABE6JQbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgB7drRDYIwFAXQuoEjMIIjyEZuYNzATRgBN9ANYJPaKh8EwX5Xz0leaMjj+94AIczEGJs0fb4GAKB6xWyfFob4NigBAFC3YrYvFqISAAB1K2X7bjr0aZqV58c0lwAA1OYctrO9zQUgh/8xAAD/4lZ6A/BIcwoAQG2uaQ4r98c07eu08Z3gnmYfAIDq5Ayfsvz7/32LEiD8AaByixLwGf6zxVwCOuEPAL9hKgHdMvyfsGrpYuWe8x8AAAAASUVORK5CYII=",GO={class:"factoryPage"},qO={class:"mainContent"},QO={class:"materialsSection"},WO={class:"materialText"},zO={class:"materialCount"},KO={class:"materialText"},YO={class:"materialCount"},JO=["disabled"],XO={class:"popupCatImage"},ZO=["src"],eV={__name:"FactoryPage",setup(t){const e=x(0),n=x(50),s=x(100),i=x(3),r=x(!1),o=x(1);Rt(()=>{const T=ht();T&&(e.value=T.gameData?.totalCoin||0,n.value=50)});const l=()=>{if(e.value<s.value){alert(`코인이 부족합니다. (필요: ${s.value})`);return}if(n.value<i.value){alert(`고양이 파편이 부족합니다. (필요: ${i.value})`);return}const T=ht();if(T){e.value-=s.value,n.value-=i.value,o.value=p();const w=(T.gameData?.catCount||0)+1,y=T.gameData?.inventory||[],k={id:Date.now(),imageId:o.value,name:`Cat ${o.value}`,stars:Math.floor(Math.random()*3)+2,level:1,selected:!1,isNew:!0};y.unshift(k),Mt(T.id,{totalCoin:e.value,catFragments:n.value,catCount:w,inventory:y}),window.dispatchEvent(new CustomEvent("userDataUpdated")),r.value=!0}},c=Xe(()=>e.value>=s.value&&n.value>=i.value),u=Xe(()=>e.value>=s.value),d=Xe(()=>n.value>=i.value),p=()=>Math.floor(Math.random()*30)+1,m=T=>{try{return new URL(Object.assign({"../assets/img/cat1.png":mh,"../assets/img/cat10.png":vh,"../assets/img/cat11.png":_h,"../assets/img/cat12.png":yh,"../assets/img/cat13.png":Ah,"../assets/img/cat14.png":Ih,"../assets/img/cat15.png":wh,"../assets/img/cat16.png":Eh,"../assets/img/cat17.png":Th,"../assets/img/cat18.png":Ch,"../assets/img/cat19.png":bh,"../assets/img/cat2.png":Sh,"../assets/img/cat20.png":Rh,"../assets/img/cat21.png":Ph,"../assets/img/cat22.png":kh,"../assets/img/cat23.png":Dh,"../assets/img/cat24.png":xh,"../assets/img/cat25.png":Nh,"../assets/img/cat26.png":Mh,"../assets/img/cat27.png":Oh,"../assets/img/cat28.png":Vh,"../assets/img/cat29.png":Lh,"../assets/img/cat3.png":Bh,"../assets/img/cat30.png":Fh,"../assets/img/cat4.png":Uh,"../assets/img/cat5.png":$h,"../assets/img/cat6.png":Hh,"../assets/img/cat7.png":jh,"../assets/img/cat8.png":Gh,"../assets/img/cat9.png":qh,"../assets/img/catProfile01.png":Qh,"../assets/img/catProfile02.png":Wh,"../assets/img/cat_ico.png":zh})[`../assets/img/cat${T}.png`],import.meta.url).href}catch{return`/src/assets/img/cat${T}.png`}},v=()=>{r.value=!1};return(T,w)=>(O(),V("div",GO,[we(fn,{catCount:n.value},null,8,["catCount"]),h("main",qO,[w[4]||(w[4]=k0('<h1 class="pageTitle" data-v-b6a2e140>고양이 제작하기</h1><div class="catSilhouette" data-v-b6a2e140><div class="catCircle" data-v-b6a2e140><img src="'+$O+'" alt="고양이" class="catShape" data-v-b6a2e140></div></div><div class="factoryUnderLine" data-v-b6a2e140><img src="'+HO+'" alt="" class="factoryLine" data-v-b6a2e140></div><div class="divider" data-v-b6a2e140><div class="dividerLine" data-v-b6a2e140><img src="'+jO+'" alt="" class="dividerLineImg" data-v-b6a2e140></div></div>',4)),h("div",QO,[h("div",{class:Re(["materialItem",{insufficient:!u.value}])},[w[1]||(w[1]=h("img",{src:Ey,alt:"코인",class:"materialIcon"},null,-1)),h("span",WO,[h("span",zO,B(e.value),1),ro(" / "+B(s.value)+" Coin ",1)])],2),w[3]||(w[3]=h("div",{class:"plusSign"},"+",-1)),h("div",{class:Re(["materialItem",{insufficient:!d.value}])},[w[2]||(w[2]=h("img",{src:by,alt:"고양이",class:"materialIcon"},null,-1)),h("span",KO,[h("span",YO,B(n.value),1),ro(" / "+B(i.value)+" 고양이 파편 ",1)])],2)]),h("button",{class:Re(["createButton",{disabled:!c.value}]),onClick:l,disabled:!c.value}," 데려 오기 ",10,JO)]),we(pn),r.value?(O(),V("div",{key:0,class:"popupOverlay",onClick:v},[h("div",{class:"popupContent",onClick:w[0]||(w[0]=qr(()=>{},["stop"]))},[h("div",XO,[h("img",{src:m(o.value),alt:"고양이"},null,8,ZO)]),w[5]||(w[5]=h("h2",{class:"popupTitle"},"고양이 데려오기 성공!",-1)),w[6]||(w[6]=h("p",{class:"popupMessage"},"새로운 고양이가 인벤토리에 추가되었습니다!",-1)),h("button",{class:"popupCloseBtn",onClick:v},"확인")])])):he("",!0)]))}},tV=Pt(eV,[["__scopeId","data-v-b6a2e140"]]),nV={class:"settingsPage"},sV={class:"mainContent"},iV={class:"settingGroup"},rV={class:"settingGroup"},oV={class:"settingLabel"},aV={class:"settingInputWrapper"},lV={key:0,class:"dropdownMenu"},cV=["onClick"],uV={class:"settingGroup"},hV={class:"settingLabel"},dV={class:"settingInputWrapper"},fV={key:0,class:"dropdownMenu"},pV=["onClick"],gV={class:"settingSection"},mV={class:"sectionTitle"},vV={class:"settingToggle"},_V={class:"toggleLabel"},yV={class:"settingToggle"},AV={class:"toggleLabel"},IV={class:"settingGroup"},wV={class:"settingGroup"},EV={__name:"SettingsPage",setup(t){const e=dn(),n=x(0),s=x(null),i=x("한국어"),r=x("부산"),o=x(!0),l=x(!0),c=x(!1),u=x(!1),d=x(!1);x("");const p=["한국어","English"],m=["부산","서울","대구","인천"],v={ko:{language:"언어",region:"지역",soundSettings:"소리 설정",soundToggle:"소리 토글",viToggle:"Vi 토글",userID:"User ID",copySuccess:"User ID가 복사되었습니다!",english:"English"},en:{language:"Language",region:"Region",soundSettings:"Sound Settings",soundToggle:"Sound Toggle",viToggle:"Vibration Toggle",userID:"User ID",copySuccess:"User ID copied!",english:"English"}},T=Xe(()=>i.value==="한국어"?v.ko:v.en),w=F=>{i.value=F,c.value=!1,localStorage.setItem("appLanguage",F)},y=()=>{o.value=!o.value,localStorage.setItem("soundEnabled",o.value.toString()),window.dispatchEvent(new CustomEvent("soundSettingChanged",{detail:{enabled:o.value}}))};Rt(()=>{const F=ht();F&&(s.value=F,n.value=F.gameData?.coins||0);const U=localStorage.getItem("appLanguage");U&&(i.value=U);const j=localStorage.getItem("soundEnabled");j!==null?o.value=j==="true":localStorage.setItem("soundEnabled","true"),k()});const k=()=>{if(!s.value)return;const F=new Date().toDateString(),U=localStorage.getItem(`checkIn_${s.value.id}`);d.value=U===F};return(F,U)=>(O(),V("div",nV,[we(fn,{coinCount:n.value},null,8,["coinCount"]),h("main",sV,[h("div",iV,[h("button",{class:"userProfileBtn",onClick:U[0]||(U[0]=j=>Wt(e).push("/profile"))},[...U[6]||(U[6]=[h("span",{class:"userProfileIcon"},"👤",-1),h("span",null,"사용자 설정",-1),h("span",{class:"arrowIcon"},"→",-1)])])]),h("div",rV,[h("label",oV,B(i.value==="한국어"?"언어":"Language"),1),h("div",aV,[h("div",{class:"settingInput",onClick:U[1]||(U[1]=j=>c.value=!c.value)},[h("span",null,B(i.value),1),U[7]||(U[7]=h("span",{class:"dropdownIcon"},"▼",-1))]),c.value?(O(),V("div",lV,[(O(),V(Se,null,je(p,j=>h("div",{key:j,class:Re(["dropdownItem",{active:i.value===j}]),onClick:se=>w(j)},B(j),11,cV)),64))])):he("",!0)])]),h("div",uV,[h("label",hV,B(T.value.region),1),h("div",dV,[h("div",{class:"settingInput",onClick:U[2]||(U[2]=j=>u.value=!u.value)},[h("span",null,B(r.value),1),U[8]||(U[8]=h("span",{class:"dropdownIcon"},"▼",-1))]),u.value?(O(),V("div",fV,[(O(),V(Se,null,je(m,j=>h("div",{key:j,class:Re(["dropdownItem",{active:r.value===j}]),onClick:se=>{r.value=j,u.value=!1}},B(j),11,pV)),64))])):he("",!0)])]),h("div",gV,[h("h3",mV,B(T.value.soundSettings),1),h("div",vV,[h("label",_V,B(T.value.soundToggle),1),h("button",{class:Re(["toggleSwitch",{active:o.value}]),onClick:y},[...U[9]||(U[9]=[h("div",{class:"toggleHandle"},null,-1)])],2)]),h("div",yV,[h("label",AV,B(T.value.viToggle),1),h("button",{class:Re(["toggleSwitch",{active:l.value}]),onClick:U[3]||(U[3]=j=>l.value=!l.value)},[...U[10]||(U[10]=[h("div",{class:"toggleHandle"},null,-1)])],2)])]),h("div",IV,[U[11]||(U[11]=h("label",{class:"settingLabel"},"출석체크",-1)),h("button",{class:"checkInBtn",onClick:U[4]||(U[4]=j=>Wt(e).push("/attendance"))}," 출석체크 하기 ")]),h("div",wV,[h("button",{class:"nftBtn",onClick:U[5]||(U[5]=j=>Wt(e).push("/nft"))}," NFT ")])]),we(pn)]))}},TV=Pt(EV,[["__scopeId","data-v-ab0a9e0d"]]),CV={class:"profilePage"},bV={class:"mainContent"},SV={class:"profileHeader"},RV={class:"profileImageWrapper"},PV=["src","alt"],kV={key:1,class:"profileImagePlaceholder"},DV={class:"profileInfo"},xV={class:"userName"},NV={class:"userEmail"},MV={class:"settingGroup"},OV={class:"settingLabel"},VV={class:"settingInput"},LV={class:"userId"},BV={key:0,class:"statsSection"},FV={class:"sectionTitle"},UV={class:"statsGrid"},$V={class:"statCard"},HV={class:"statInfo"},jV={class:"statLabel"},GV={class:"statValue"},qV={class:"statCard"},QV={class:"statInfo"},WV={class:"statLabel"},zV={class:"statValue"},KV={class:"statCard"},YV={class:"statInfo"},JV={class:"statLabel"},XV={class:"statValue"},ZV={class:"statCard"},eL={class:"statInfo"},tL={class:"statLabel"},nL={class:"statValue"},sL={class:"logoutSection"},iL={__name:"UserProfilePage",setup(t){const e=dn(),{logout:n}=wy(),s=x(0),i=x(null),r=x("한국어"),o=x(""),l=x(""),c=x(""),u=x(""),d=x(!1),p={ko:{userProfile:"사용자 프로필",userID:"User ID",copySuccess:"User ID가 복사되었습니다!",logout:"로그아웃",logoutConfirm:"정말 로그아웃 하시겠습니까?",gameStats:"게임 통계",level:"레벨",points:"포인트",coins:"코인",catFragments:"고양이 파편",back:"← 뒤로"},en:{userProfile:"User Profile",userID:"User ID",copySuccess:"User ID copied!",logout:"Logout",logoutConfirm:"Are you sure you want to logout?",gameStats:"Game Stats",level:"Level",points:"Points",coins:"Coins",catFragments:"Cat Fragments",back:"← Back"}},m=Xe(()=>r.value==="한국어"?p.ko:p.en);Rt(()=>{const y=ht();y?(i.value=y,s.value=y.gameData?.coins||0,y.uid||y.email?(d.value=!0,o.value=y.email||"",l.value=y.displayName||y.name||o.value.split("@")[0],c.value=y.photoURL||"",u.value=y.uid||y.id||""):(o.value=y.email||y.id||"",l.value=y.name||o.value.split("@")[0]||"User",u.value=y.id||"ID"+String(Math.random()).substring(2,10))):e.push("/login");const k=localStorage.getItem("appLanguage");k&&(r.value=k)});const v=()=>{navigator.clipboard.writeText(u.value),alert(m.value.copySuccess)},T=async()=>{if(confirm(m.value.logoutConfirm))try{if(d.value){const y=await Iy();y.success||console.error("Firebase 로그아웃 실패:",y.error)}Tf(),n(),e.push("/login")}catch(y){console.error("로그아웃 오류:",y),Tf(),n(),e.push("/login")}},w=Xe(()=>i.value?{level:i.value.gameData?.level||1,points:i.value.gameData?.coins||0,coins:i.value.gameData?.totalCoin||0,catFragments:i.value.gameData?.catFragments||i.value.gameData?.catCount||0}:null);return(y,k)=>(O(),V("div",CV,[we(fn,{coinCount:s.value},null,8,["coinCount"]),h("main",bV,[h("button",{class:"backBtn",onClick:k[0]||(k[0]=F=>Wt(e).push("/settings"))},B(m.value.back),1),h("div",SV,[h("div",RV,[c.value?(O(),V("img",{key:0,src:c.value,alt:l.value,class:"profileImage"},null,8,PV)):(O(),V("div",kV,B(l.value.charAt(0).toUpperCase()),1))]),h("div",DV,[h("h2",xV,B(l.value),1),h("p",NV,B(o.value),1)])]),h("div",MV,[h("label",OV,B(m.value.userID),1),h("div",VV,[h("span",LV,B(u.value),1),h("button",{class:"copyBtn",onClick:v},"📋")])]),w.value?(O(),V("div",BV,[h("h3",FV,B(m.value.gameStats),1),h("div",UV,[h("div",$V,[k[1]||(k[1]=h("div",{class:"statIcon"},"⭐",-1)),h("div",HV,[h("div",jV,B(m.value.level),1),h("div",GV,B(w.value.level),1)])]),h("div",qV,[k[2]||(k[2]=h("div",{class:"statIcon"},"💰",-1)),h("div",QV,[h("div",WV,B(m.value.points),1),h("div",zV,B(w.value.points.toLocaleString()),1)])]),h("div",KV,[k[3]||(k[3]=h("div",{class:"statIcon"},"🪙",-1)),h("div",YV,[h("div",JV,B(m.value.coins),1),h("div",XV,B(w.value.coins.toLocaleString()),1)])]),h("div",ZV,[k[4]||(k[4]=h("div",{class:"statIcon"},"🐱",-1)),h("div",eL,[h("div",tL,B(m.value.catFragments),1),h("div",nL,B(w.value.catFragments.toLocaleString()),1)])])])])):he("",!0),h("div",sL,[h("button",{class:"logoutBtn",onClick:T},B(m.value.logout),1)])]),we(pn)]))}},rL=Pt(iL,[["__scopeId","data-v-737deece"]]),oL={class:"attendancePage"},aL={class:"mainContent"},lL={class:"attendanceInfo"},cL={class:"infoItem"},uL={class:"infoValue"},hL={class:"infoItem"},dL={class:"infoValue"},fL={key:0,class:"attendanceMessage"},pL={class:"attendanceGrid"},gL=["onClick"],mL={class:"dayNumber"},vL={class:"rewardIcon"},_L={key:0,class:"specialStar"},yL={class:"rewardAmount"},AL={__name:"AttendancePage",setup(t){const e=dn(),n=x(0),s=x(null),i=x(0),r=x([]),o=x(null),l=x(0),c=x(Array.from({length:20},(y,k)=>({day:k+1,reward:"1K",rewardType:"P",hasSpecial:[5,9,10,11,16,17].includes(k+1),isChecked:!1}))),u=(y,k)=>new Date(y).toDateString()===new Date(k).toDateString(),d=()=>{e.go(-1)},p=async y=>{if(!s.value){alert("로그인이 필요합니다.");return}const k=new Date;k.toDateString();const F=k.toISOString();if(o.value&&u(o.value,F)){alert("오늘 이미 출석체크를 완료했습니다! 내일 다시 시도해주세요.");return}const U=c.value[y];if(U.isChecked){alert("이미 체크된 날짜입니다.");return}const j=r.value.length;if(o.value){const Ie=new Date(o.value),S=Math.floor((k-Ie)/(1e3*60*60*24));if(S>0&&y!==j){alert("다음 순서의 출석체크만 가능합니다.");return}S===1?l.value+=1:S>1&&(l.value=1)}else l.value=1;U.isChecked=!0,r.value.push(U.day),i.value=r.value.length;const se=1e3;n.value+=se,o.value=F,s.value&&(await Dw(s.value.id,n.value),await m()),alert(`Day ${U.day} 출석체크 완료! ${se} 포인트 획득!`),window.dispatchEvent(new Event("userDataUpdated"))},m=async()=>{if(s.value){const y={checkedDays:r.value,attendanceDays:i.value,consecutiveDays:l.value,lastCheckInDate:o.value,lastUpdate:new Date().toISOString()};localStorage.setItem(`attendance_${s.value.id}`,JSON.stringify(y)),await Mt(s.value.id,{attendance:y})}},v=async()=>{if(s.value){let y=null;const k=s.value.id?.length>20||s.value.uid;if(k)try{const F=await gh(s.value.id);if(F?.gameData?.attendance){y=F.gameData.attendance;const U=JSON.parse(sessionStorage.getItem("currentUser")||"{}");U.id===s.value.id&&(U.gameData={...U.gameData,...F.gameData},sessionStorage.setItem("currentUser",JSON.stringify(U)),s.value=U)}}catch(F){console.error("Firebase에서 출석체크 데이터 가져오기 실패:",F)}if(!y&&s.value.gameData?.attendance&&(y=s.value.gameData.attendance),!y){const F=localStorage.getItem(`attendance_${s.value.id}`);F&&(y=JSON.parse(F),k&&y&&await Mt(s.value.id,{attendance:y}))}y&&(r.value=y.checkedDays||[],i.value=y.attendanceDays||0,l.value=y.consecutiveDays||0,o.value=y.lastCheckInDate||null,r.value.forEach(F=>{const U=F-1;c.value[U]&&(c.value[U].isChecked=!0)}))}},T=Xe(()=>{if(!o.value)return!0;const y=new Date,k=new Date(o.value),F=y.toDateString(),U=k.toDateString();return F!==U}),w=Xe(()=>r.value.length);return Rt(async()=>{s.value=ht(),s.value&&(n.value=s.value.gameData?.coins||0,await v())}),(y,k)=>(O(),V("div",oL,[we(fn,{coinCount:n.value},null,8,["coinCount"]),h("main",aL,[h("button",{class:"backBtn",onClick:d},"← 뒤로"),k[3]||(k[3]=h("h1",{class:"pageTitle"},"출석체크",-1)),h("div",lL,[h("div",cL,[k[0]||(k[0]=h("span",{class:"infoLabel"},"연속 출석:",-1)),h("span",uL,B(l.value)+"일",1)]),h("div",hL,[k[1]||(k[1]=h("span",{class:"infoLabel"},"총 출석:",-1)),h("span",dL,B(i.value)+"일",1)])]),T.value?he("",!0):(O(),V("div",fL," 오늘 출석체크를 완료했습니다! 내일 다시 시도해주세요. ")),h("div",pL,[(O(!0),V(Se,null,je(c.value,(F,U)=>(O(),V("div",{key:F.day,class:Re(["dayCell",{checked:F.isChecked,disabled:!T.value&&!F.isChecked||U!==w.value&&!F.isChecked,nextCheckable:T.value&&U===w.value&&!F.isChecked}]),onClick:j=>T.value&&(U===w.value||F.isChecked)?p(U):null},[h("div",mL,"Day "+B(F.day),1),h("div",vL,[k[2]||(k[2]=h("div",{class:"iconCircle"},"P",-1)),F.hasSpecial&&!F.isChecked?(O(),V("span",_L,"⭐")):he("",!0)]),h("div",yL,B(F.reward),1)],10,gL))),128))])]),we(pn)]))}},IL=Pt(AL,[["__scopeId","data-v-473b169a"]]),wL="/tdl/assets/btc-DC8WHF5v.png",EL="/tdl/assets/eth-DHgp7Wvq.png",TL="/tdl/assets/BTC_line-DiGuGbEI.png",CL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAACJCAYAAABaWIDDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA85SURBVHgB7d1fchPHFsfxMybJw61KhbuCTN5yqRDbK0BeAXgFmBXErACxguAVYFZgswLEClBibnLf7rCCKDhVqSJGndPqNghibHXPjKZ75vupUqQYy/yxpf5Nd5/ThQAAMBBGtq7r3ZbIfFPvS5GidPeiHzfX3f2yotL/zPxNHxu9bfxkHxcynUrGCgEAoKf8gD/SAf+WDnl39COlNKqwIaDSrzvNLRgQAAAAveIHfTvY39WbXu1/fFW/DsVEFrMGZuKDwSy1YEAAAAD0gg78I73Sv60P96STQf9KMz9jsBwM7IxBJR0gAAAAsuYGfvNAbyPJkw8Gxi8nLILBVIPBTFpEAAAAZEkHfp3eNz9mPPBfpdVgQAAAAGTFrfHPx/rwBxmmRoIBAQAAkA0jN+/o0PVY0lzj71pQMHgXAHyi2tcP2dpI/mHXa+ZqS+19P+pLAaBJXPXXshQMNg7ONx0uAoAmqj19qOsoDPwJqfw37Fi/YU/b3gwCAKnSwb/Uwf+ZuIY9qMdecN4r5OS48P+w/xckrjjU2xMNAhMBgIFoacr/vKvfxHX6szOwb1/p/W8if/5eSDVzv/d/vtZf/7fIta/edwy0fQUWj7ckX/r3O9vRALCp/7BmT5CLSm/jQn5+IgDQY0a+12Vp+VGaUbkZVdHb6U/ng3wdGk5uiQsmI1kEgsK3Gc6BmWgA+F4TD1P/+Sn0h7i431UDCQBok45NY717IPXY6e5DvT/WKe/nsgZGSh1PvzzfSzcSFwxKSW/5YmYDgBHk7KHOBowFAHqigcFfB/75I5E/Dpq40m/C+2BQbPnzCLbc4+4uwG0AsOv/pSBndmfnLrMBAHJXc/BPbuC/SofBYGoDgP2HHgtyV2kI2CEEAMhVvTV/u6Hvr3uF/K+SHlhDMNgvfG3lM8l7RyMct7NTfqGHAICsuLa+8xcSzl71jwt5eSAD0FAwmOrS8bbvA2BDwFtNXcWeIHeEAABZqVHnX+n73S7vdyHBwOgSyelDu0RSXPwFsEbXfelI6etLR1J/isd2FNxmOQBADoxsPos40EcH/dc7uaz1d8XIjS3Xx8D6sPyRswAS5GtL93wYKCVOxZ4AAKmL2/RnS/tO7zP410MASJxv02xfHKWEm/oQwIsEQHLiOtGaw0JO7glq2xAkTX/QD0Xe7Lh1m2Bbbm8HAKTIHAV9uphjBv/mEAAyYMta9If+vv7w74prBRzy7D0/xQYAyXCzmyak+qzSaX8G/waxBJAZI9+WIl9E7JY1u/b0JwGABAQ2oavsTGhfavxTwQxAZtwLwC4JBM8EPHbrbQDQLT8rWQY8Zczg3zwCQIaWQkDI5r5FwydCAIAu+feguwHPeMTpp+0gAGTKhYD5btizbOKeB266AYAmzfckaOr/9KGgFQSAjBXycqJ39yXMlk6/URkAYO3Cr/7t1D+1/m0hAGROp8YeRZQI7lMZAGD9TEhPkylT/+2iCqAnjNx85jsHhjyLygAAaxHe9MeM9P3puaA1zAD0xrWYHgFUBgBYExPQ7tdMGPzbxwxAj/geAfY4zZDDhCrODADQpvCr/zffUPbXPmYAeoTKAABpCrr6P2TwXw8CQM9QGQAgJe7q3+yt/oy/KPtbEwJAD9WoDNgXAGgUV/+pYg9Aj8VVBsx3/CwCANTC2n/amAHotZjKgI0jKgMANMM8Dvhcrv7XjBmAnqtRGbBdyJQOXACi6IXEyJ4/svozuPpfN2YAes69oEzoGdqlyFsqAwDUYAI2FnP13wUCwAC4bn/zsQQpRlQGAIhh5Oae/ndrxU+v2PnfDZYABkRflDqgF6E7/e+7qgIgLX6vih1k7FHXX7uPFuXSZ9glLL+MtfFK3H6YiqZX7dOLB7vxr1zts+fjQl4SADpAABgYfWHa/QCrJnOPygB0yw/2I310SxY/v8b+f8i+lmUaCoqpfg29bdh2s1NCQXPc1X+x6ua/Stf+d5j+7wYBYGD8pkC7MacMeNrMbwqsBFgTv4nstr5N3fEDfotsIBC9FU+FQFBL4NX/vl5cHAg6QQAYICoDkCod9O10vl2m+kHir/CbUOnb48QeSmNnCQgEqwm9+tflxW8EnSEADJS+UPWqqgjc6b84oWtHgIa5q33bMc6MJE2VXzY41kDwkwaCqeADvulPyOzingaAJ4LOEAAGzMh3+oa7MZYwj/RFG3rWAHChDAb+T6kIBB8ysvk4oOc/V/8JIAAMHJUB6II/IOaBBB0Sk7TZR0sGgwoE/hyRkLJhrv4TQAAAlQFYKz9Y2ANiulzjb9tyILAzBBPpKQ1z+t4xfxHwFK7+E0EAAJUBWAt/1f84w+n+Jsw+WjKYSA/4wd++d4SEOa7+E0EAwIKRG/pC/iz0hVxRGYBV+N3hdoq4z1f9Ic4DwcQvGUwkM3GDv235exLamhwtIQDgncASnvNnURmAS+mUv90v8oO0o3INfRYDanXxpyx6COit8F0DU/XBHoKJJCwy0On36M02TX/SQQDAB6gMQFNcTf9iyv+ONGPmBvvi2N2f6lR6FTT7ZKTUP9OXm/asC7cUYe9TtQgEtlvheXOizmfafJ+GsUQFOpr+pIYAgH/QdH+oPxp3JQyVAXjHDxR2ejhwc+mFX22iP4+HIq+fhg74K311uXlrKRAkPEvQbSDwnRntDGEpwYxeJJxwkZAYAgD+If7Nm8oARDWEuYgObnMNlH8ctDHoX8YHgi03c5F0IHi3h0D/Z9JWIGigV0Ol4W173d9HXI0AgAtRGYAYPjzakrBS4nQ28H/KUiAY+SWDHAJBrfMM/Pfxrj+HYSTxKg77SRcBAJ9EZQBC1J/2N4e6rn8/9StF/7q4lUcgeHfAUXVZcyL3vbPft/mmH/SbmPmoGPzTRgDApagMwKqMbB5FbvirbEdA/Zl5LhlygeCaHTBv+yWDUpK1qJSY+dt1dzP+vlEVg3/6CAC4EpUBuEp8qZ+dsj7d7dP6cF6BoBUVg38eCABYCZUB+BQd/MfiWvsGmo8LeflQes7tp/l8pA99tUGfA0H/Al2fEQCwEioDcJEag/9ga8I/CgT29RS5ZyI11PnnhgCAlVEZgGURJ8B5b3W9/7/0gvd8INjUh3cyDQRTkbN7hfwyFWSFAIAgVAbA0iUhO1gdSTAG/6v4boU6OyAjv2SQaiCY+WUcrvozRQBAMCoDhi3yBDgZypp/0xIMBMn1akAcAgCiUBkwTPFd/hj8m/L+PAO7ZGDDwNrOM9Ap/vkxA39/EAAQjcqAYWHwT1PLBxxV+jV10JfjXPs04NMIAIhGZcBwxA/+nP/ehaUDjuwMQSmrvUbtVX3lD1/Sq/2/dNnu11eC3iIAoJbIyoBKlw92qAzIQ40Wv1Od7dkWJMHNFPyrFLn21fuPvv1df+U3kT9/Z1p/eAgAqI3KgH6LbPFbcQIckLYNAWpy9b8mdHNfqVcfgZUEWDfX4jdm8LetYBn8gZQRANAIXec9tJu9JEhxx3eSQ4L89ya0v39FH3ggDywBoFFUBvRDZItfveJ/s83gD+SBAIBGxW8YO9umlWga4lv88j0EcsISABrlNvW92ZXFVHCIz45cqRm65Fr8xvb3Z/AHckIAQOPcFPCZDQEhm8BKO3PgZhDQBdfit4jYmGkb/dDfH8gNAQCtoDIgL77Rjz3ch/7+wEAQANAaKgPyQItfYJjYBIjWURmQLlr8AsNFAEDrIisDZiJnO2wsa098xQZHOwN9wBIAWhdZGXCdyoC2GbvfIri/v8jprgDIHgEAa1GjMuCIyoDm1Wjxu0uLX6AfCABYGz+dH7ppTK9Q30bUpeNTaPELwCIAYK3cxr7gyoA9KgOaUaPFL4M/0DNsAkQnjNw8siV/EmZPAwQNZyJFtvhlMybQUwQAdMLvQH8hYeVnDEaRXIvf4kiC2Ra/dPkD+oglAHTCVwbYUrIq4GlUBkSo0eJ3n8Ef6C8CADqzVBkQoqQyYHU1W/weCIDeIgCgU346P/TMACoDVkCLXwCXIQCgc1QGNK9ei18Gf2AI2ASIZFAZ0Axa/AJYBTMASMg1e7hMJWEeGbkR2s6252jxC+BqBAAkg8qA+mjxC2BVBAAkxVUGzEOPmS2pDKDFL4AwBAAkp5CXE6EyIAgtfgGEIgAgSa4ywDwKfNYgKwN8i9+Iwf+MwR8YMKoAkDQjN5/pj+lIwgymMoAWvwBiMQOAxF2zO9MrCTOIygBa/AKogwCApC1VBoTsUO99ZQAtfgHURQBA8nxlAGcGeLT4BdAEAgCyQGWAU6PF7yMGfwDL2ASIrBi5qQN6sR/4tIeF/DyWzNVo8XtcyAld/gB8gBkAZEUHsvu2Z72EeWDk+7uSvegWv6GNlQAMAAEAGRpeZQAtfgE0jQCA7AytMoAWvwDaQABAloZSGRDZ4rdi8AdwFQIAstX3yoAaLX53GfwBXIUAgKz19cwA1+JXIoKKuVfIL1MBgCtQBohe6NOZAa7F76LcL7TL3z5d/gCsihkA9EQ/KgNo8QtgXZgBQG8Y+bYU+eKFhA2e/ljc7qfNafELYJ2YAUBvRFYG2PLAZ37NvTM6+I/0z27DSylBaPELIA4BAL0SWRmgIaA46mpjoNvtH7Pmv2jxG/p3BYAFlgDQS5FnBliV5mJdEphW0jI35W/b+5qRhNMli9c7dPkDEIsAgN6KrAzwikO9PWwjCPhDfWw4sd39YpoSVTT6AVAXAQC95QfaiHX1ZYsgcKBBoPYmQb/Of1sf7kncwG9VDP4AmkAAQK/5yoCInfX/UOntWJcHnur91J1HcNXvvWg5bGv6R/pSuxU51f/Rn4HBH0AzCADovQZDwJLCzgjYEFDp71AtfbwUd3WvA78ppTkVgz+AJhEAMAjthIC1qRj8ATSNMkAMghs87RHCZiJ5mTL4A2gDAQCDYQfRQk52bOc8yYI95Og1gz+AVrAEgEEy8t1I8+9jSXNJYOZO9Ts5FgBoCTMAGCTXMXBjO73ZgMVV/zcM/gDaxgwABs9tEPz8gb4c9qQzi70JYx34nwsArAEBAPA6CAJ2qt9e6R8y8ANYNwIA8BEfBEb68G58K+FLf4eJfl0d+F8/oZc/gK4QAIBLGCmvi3x5Sx+OfBjYknBT/Up6KyY66D9l0AeQAgIAEMjIDQ0B177yXf/KCz6l0s/SQf5sWsivrwQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA0PwNkHeXO5vHqaMAAAAASUVORK5CYII=",bL="/tdl/assets/catProfile01-gY0Djz81.png",SL="/tdl/assets/catProfile02-Cesbpkj5.png",RL="/tdl/assets/eth_ico-CaIyIapE.png",PL={class:"nftPage"},kL={class:"mainContent nftWrap"},DL={class:"walletSection"},xL={class:"walletBalance"},NL={class:"btcInfo"},ML={class:"change positive"},OL={class:"tabMenu"},VL={key:0,class:"itemList"},LL={class:"itemIcon"},BL={class:"itemInfo"},FL={class:"itemSymbol"},UL={class:"itemName"},$L={class:"itemChart"},HL={class:"itemPrice"},jL={class:"price"},GL={key:1,class:"nftList"},qL={class:"nftThumbnail"},QL={class:"nftInfo"},WL={class:"nftId"},zL={class:"collectionName"},KL={class:"nftValue"},YL={class:"ethAmount"},JL=["src"],XL={class:"usdValue positive"},ZL={__name:"NFTPage",setup(t){const e=x(0),n=x("tokens"),s=x("$ 5,323.00"),i=x("0.00335"),r=x("+6.54%"),o=x(!1),l=x(!1),c=x(!1),u=ht();u&&(e.value=u.gameData?.coins||0);const d=U=>{n.value=U},p=()=>{o.value=!0},m=()=>{o.value=!1},v=()=>{l.value=!0},T=()=>{l.value=!1},w=()=>{c.value=!0},y=()=>{c.value=!1},k=x([{id:1,name:"Bitcoin",symbol:"BTC",price:"36,590.00",change:"+6.21%",isPositive:!0,image:wL,lineImage:TL},{id:2,name:"Ethereum",symbol:"ETH",price:"2,590.00",change:"+5.21%",isPositive:!0,image:EL,lineImage:CL}]),F=x([{id:1,nftId:"#1957",collectionName:"Bored Ape Yacht Club",ethAmount:"64",usdValue:"23,114.57",image:bL},{id:2,nftId:"#6513",collectionName:"Bored Ape Yacht Club",ethAmount:"199.8",usdValue:"45,114.57",image:SL}]);return(U,j)=>(O(),V("div",PL,[we(fn,{coinCount:e.value},null,8,["coinCount"]),h("main",kL,[h("div",DL,[j[5]||(j[5]=h("div",{class:"walletLabel"},"Current Wallet Balance",-1)),h("div",xL,B(s.value),1),h("div",NL,[h("span",null,"BTC : "+B(i.value),1),h("span",ML,B(r.value),1)])]),h("div",{class:"actionButtons"},[h("button",{class:"actionBtn sendBtn",onClick:v},[...j[6]||(j[6]=[h("div",{class:"btnIcon"},null,-1),h("span",{class:"btnLabel"},"Send",-1)])]),h("button",{class:"actionBtn buyBtn",onClick:p},[...j[7]||(j[7]=[h("div",{class:"btnIcon"},null,-1),h("span",{class:"btnLabel"},"Buy",-1)])]),h("button",{class:"actionBtn receiveBtn",onClick:w},[...j[8]||(j[8]=[h("div",{class:"btnIcon"},null,-1),h("span",{class:"btnLabel"},"Receive",-1)])])]),h("div",OL,[h("button",{class:Re(["tab",{active:n.value==="tokens"}]),onClick:j[0]||(j[0]=se=>d("tokens"))}," Tokens ",2),h("button",{class:Re(["tab",{active:n.value==="nfts"}]),onClick:j[1]||(j[1]=se=>d("nfts"))}," NFTs ",2)]),n.value==="tokens"?(O(),V("div",VL,[(O(!0),V(Se,null,je(k.value,se=>(O(),V("div",{key:se.id,class:"item"},[h("div",LL,[h("div",{class:"iconCircle",style:Ct({backgroundImage:`url(${se.image})`})},null,4)]),h("div",BL,[h("div",FL,B(se.symbol),1),h("div",UL,B(se.name),1)]),h("div",$L,[h("div",{class:"chartLine",style:Ct({backgroundImage:`url(${se.lineImage})`})},null,4)]),h("div",HL,[h("div",jL,"$"+B(se.price),1),h("div",{class:Re(["change",{positive:se.isPositive,negative:!se.isPositive}])},B(se.change),3)])]))),128))])):he("",!0),n.value==="nfts"?(O(),V("div",GL,[(O(!0),V(Se,null,je(F.value,se=>(O(),V("div",{key:se.id,class:"nftItem"},[h("div",qL,[h("div",{class:"thumbnailPlaceholder",style:Ct({backgroundImage:`url(${se.image})`})},null,4)]),h("div",QL,[h("div",WL,B(se.nftId),1),h("div",zL,B(se.collectionName),1)]),h("div",KL,[h("div",YL,[h("img",{src:Wt(RL),alt:"ETH",class:"ethIcon"},null,8,JL),h("span",null,B(se.ethAmount),1)]),h("div",XL,[j[9]||(j[9]=h("span",{class:"arrowUp"},"↑",-1)),h("span",null,"$ "+B(se.usdValue),1)])])]))),128))])):he("",!0)]),we(pn),o.value?(O(),V("div",{key:0,class:"popupOverlay",onClick:m},[h("div",{class:"popupContent",onClick:j[2]||(j[2]=qr(()=>{},["stop"]))},[h("div",{class:"popupHeader"},[j[10]||(j[10]=h("h2",{class:"popupTitle"},"구매하기",-1)),h("button",{class:"closeBtn",onClick:m},"×")]),h("div",{class:"popupBody"},[j[11]||(j[11]=h("p",{class:"popupMessage"},"구매해주세요",-1)),h("div",{class:"popupActions"},[h("button",{class:"popupBtn cancelBtn",onClick:m},"취소"),h("button",{class:"popupBtn confirmBtn",onClick:m},"확인")])])])])):he("",!0),l.value?(O(),V("div",{key:1,class:"popupOverlay",onClick:T},[h("div",{class:"popupContent",onClick:j[3]||(j[3]=qr(()=>{},["stop"]))},[h("div",{class:"popupHeader"},[j[12]||(j[12]=h("h2",{class:"popupTitle"},"전송하기",-1)),h("button",{class:"closeBtn",onClick:T},"×")]),h("div",{class:"popupBody"},[j[13]||(j[13]=h("p",{class:"popupMessage"},"전송해주세요",-1)),h("div",{class:"popupActions"},[h("button",{class:"popupBtn cancelBtn",onClick:T},"취소"),h("button",{class:"popupBtn confirmBtn",onClick:T},"확인")])])])])):he("",!0),c.value?(O(),V("div",{key:2,class:"popupOverlay",onClick:y},[h("div",{class:"popupContent",onClick:j[4]||(j[4]=qr(()=>{},["stop"]))},[h("div",{class:"popupHeader"},[j[14]||(j[14]=h("h2",{class:"popupTitle"},"받기",-1)),h("button",{class:"closeBtn",onClick:y},"×")]),h("div",{class:"popupBody"},[j[15]||(j[15]=h("p",{class:"popupMessage"},"받아주세요",-1)),h("div",{class:"popupActions"},[h("button",{class:"popupBtn cancelBtn",onClick:y},"취소"),h("button",{class:"popupBtn confirmBtn",onClick:y},"확인")])])])])):he("",!0)]))}},e4=Pt(ZL,[["__scopeId","data-v-b73bf2b5"]]),t4={class:"notificationPage"},n4={class:"mainContent"},s4={class:"pageHeader"},i4={class:"notificationList"},r4=["onClick"],o4={class:"notificationContent"},a4={class:"notificationTitle"},l4={class:"notificationMessage"},c4={class:"notificationTime"},u4={key:0,class:"unreadDot"},h4={key:0,class:"emptyState"},d4={__name:"NotificationPage",setup(t){const e=dn(),n=x(0),s=x([{id:1,title:"새로운 퀘스트가 도착했습니다!",message:"일일 퀘스트를 완료하고 보상을 받아보세요.",time:"5분 전",read:!1,type:"quest"},{id:2,title:"Coin 구매 완료",message:"1억 Coin 구매가 완료되었습니다.",time:"1시간 전",read:!1,type:"exchange"},{id:3,title:"고양이 제작 완료",message:"새로운 고양이가 인벤토리에 추가되었습니다!",time:"2시간 전",read:!0,type:"factory"},{id:4,title:"출석체크 보상",message:"출석체크를 완료하여 100 Point를 받았습니다.",time:"1일 전",read:!0,type:"attendance"}]);Rt(()=>{const c=ht();c&&(n.value=c.gameData?.coins||0)});const i=c=>{c.read||(c.read=!0)},r=()=>{s.value.forEach(c=>{c.read=!0})},o=Xe(()=>s.value.filter(c=>!c.read).length),l=c=>{switch(i(c),c.type){case"quest":e.push("/quest");break;case"exchange":e.push("/exchange");break;case"factory":e.push("/factory");break;case"attendance":e.push("/attendance");break}};return(c,u)=>(O(),V("div",t4,[we(fn,{coinCount:n.value},null,8,["coinCount"]),h("main",n4,[h("div",s4,[u[0]||(u[0]=h("h1",{class:"pageTitle"},"알림",-1)),o.value>0?(O(),V("button",{key:0,class:"markAllReadBtn",onClick:r}," 모두 읽음 ")):he("",!0)]),h("div",i4,[(O(!0),V(Se,null,je(s.value,d=>(O(),V("div",{key:d.id,class:Re(["notificationItem",{unread:!d.read}]),onClick:p=>l(d)},[h("div",o4,[h("div",a4,B(d.title),1),h("div",l4,B(d.message),1),h("div",c4,B(d.time),1)]),d.read?he("",!0):(O(),V("div",u4))],10,r4))),128)),s.value.length===0?(O(),V("div",h4,[...u[1]||(u[1]=[h("p",null,"알림이 없습니다.",-1)])])):he("",!0)])]),we(pn)]))}},f4=Pt(d4,[["__scopeId","data-v-776e57f4"]]),p4={class:"shopPage"},g4={class:"mainContent"},m4={class:"itemList"},v4={class:"itemInfo"},_4={class:"itemName"},y4={class:"itemDescription"},A4={class:"itemPrice"},I4={class:"priceValue"},w4={class:"priceCurrency"},E4={key:0,src:Ty,alt:"P",class:"currencyIcon"},T4={key:1,src:Cy,alt:"C",class:"currencyIcon"},C4=["disabled","onClick"],b4={__name:"ShopPage",setup(t){const e=x(0),n=x(0),s=x([{id:1,name:"에너지 100",description:"에너지를 100 회복합니다",price:100,currency:"point",amount:100},{id:2,name:"에너지 500",description:"에너지를 500 회복합니다",price:450,currency:"point",amount:500},{id:3,name:"에너지 1000",description:"에너지를 1000 회복합니다",price:800,currency:"point",amount:1e3},{id:4,name:"에너지 2000",description:"에너지를 2000 회복합니다",price:1500,currency:"point",amount:2e3}]),i=()=>{const o=ht();o&&(e.value=o.gameData?.coins||0,n.value=o.gameData?.totalCoin||0)},r=o=>{const l=ht();if(!l){alert("로그인이 필요합니다.");return}if(o.currency==="point"&&e.value<o.price){alert("포인트가 부족합니다.");return}if(o.currency==="coin"&&n.value<o.price){alert("코인이 부족합니다.");return}if(o.currency==="point"){const p=e.value-o.price;Ea(l.email,p,n.value)}else{const p=n.value-o.price;Ea(l.email,e.value,p)}const c=4e3,u=parseInt(localStorage.getItem("currentEnergy")||c.toString()),d=Math.min(u+o.amount,c);localStorage.setItem("currentEnergy",d.toString()),localStorage.setItem("energyLastDate",new Date().toDateString()),alert(`${o.name} 구매 완료! 에너지가 ${o.amount} 회복되었습니다. (현재: ${d}/${c})`),i(),window.dispatchEvent(new Event("userDataUpdated"))};return Rt(()=>{i()}),(o,l)=>(O(),V("div",p4,[we(fn,{coinCount:e.value},null,8,["coinCount"]),h("main",g4,[h("div",m4,[(O(!0),V(Se,null,je(s.value,c=>(O(),V("div",{key:c.id,class:"shopItem"},[h("div",v4,[h("h3",_4,B(c.name),1),h("p",y4,B(c.description),1)]),h("div",A4,[h("span",I4,B(c.price.toLocaleString()),1),h("span",w4,[c.currency==="point"?(O(),V("img",E4)):(O(),V("img",T4))])]),h("button",{class:"buyBtn",disabled:c.currency==="point"&&e.value<c.price||c.currency==="coin"&&n.value<c.price,onClick:u=>r(c)}," 구매 ",8,C4)]))),128))])]),we(pn)]))}},S4=Pt(b4,[["__scopeId","data-v-e5203ede"]]),R4=["/loading","/login","/signup"],P4=[{path:"/",redirect:"/loading"},{path:"/loading",component:y2},{path:"/login",component:L2},{path:"/signup",component:X2},{path:"/main",component:Mx},{path:"/mining",component:Zx},{path:"/hunting",component:RN},{path:"/exploration",component:sM},{path:"/production",component:LM},{path:"/exchange",component:nO},{path:"/quest",component:vO},{path:"/inventory",component:UO},{path:"/factory",component:tV},{path:"/settings",component:TV},{path:"/profile",component:rL},{path:"/attendance",component:IL},{path:"/nft",component:e4},{path:"/notification",component:f4},{path:"/shop",component:S4}],Sy=Cw({history:sw(),routes:P4});Sy.beforeEach(async(t,e,n)=>{if(t.path==="/login")try{const o=await Ay();if(o&&o.success&&o.user){console.log("라우터 가드: 리다이렉트 로그인 성공, 메인으로 이동"),n("/main");return}}catch{console.log("라우터 가드: 리다이렉트 결과 없음")}const i=!!ht(),r=R4.includes(t.path);if(i&&(t.path==="/login"||t.path==="/signup")){n("/main");return}if(!i&&!r){n("/login");return}n()});const Ry=mI(bw);Ry.use(Sy);Ry.mount("#app");
