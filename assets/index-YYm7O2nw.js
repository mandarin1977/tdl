(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function jc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Xe={},xi=[],Bn=()=>{},Xp=()=>!1,Ba=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Gc=t=>t.startsWith("onUpdate:"),Wt=Object.assign,qc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},My=Object.prototype.hasOwnProperty,We=(t,e)=>My.call(t,e),Ae=Array.isArray,Ni=t=>uo(t)==="[object Map]",Zi=t=>uo(t)==="[object Set]",Ed=t=>uo(t)==="[object Date]",Re=t=>typeof t=="function",wt=t=>typeof t=="string",qn=t=>typeof t=="symbol",et=t=>t!==null&&typeof t=="object",Zp=t=>(et(t)||Re(t))&&Re(t.then)&&Re(t.catch),eg=Object.prototype.toString,uo=t=>eg.call(t),Oy=t=>uo(t).slice(8,-1),tg=t=>uo(t)==="[object Object]",Qc=t=>wt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Dr=jc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fa=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Vy=/-\w/g,En=Fa(t=>t.replace(Vy,e=>e.slice(1).toUpperCase())),Ly=/\B([A-Z])/g,gi=Fa(t=>t.replace(Ly,"-$1").toLowerCase()),Ua=Fa(t=>t.charAt(0).toUpperCase()+t.slice(1)),Rl=Fa(t=>t?`on${Ua(t)}`:""),xs=(t,e)=>!Object.is(t,e),jo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ng=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},ia=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Td;const $a=()=>Td||(Td=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function At(t){if(Ae(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=wt(s)?$y(s):At(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(wt(t)||et(t))return t}const By=/;(?![^(]*\))/g,Fy=/:([^]+)/,Uy=/\/\*[^]*?\*\//g;function $y(t){const e={};return t.replace(Uy,"").split(By).forEach(n=>{if(n){const s=n.split(Fy);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function De(t){let e="";if(wt(t))e=t;else if(Ae(t))for(let n=0;n<t.length;n++){const s=De(t[n]);s&&(e+=s+" ")}else if(et(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Hy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",jy=jc(Hy);function sg(t){return!!t||t===""}function Gy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=ci(t[s],e[s]);return n}function ci(t,e){if(t===e)return!0;let n=Ed(t),s=Ed(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=qn(t),s=qn(e),n||s)return t===e;if(n=Ae(t),s=Ae(e),n||s)return n&&s?Gy(t,e):!1;if(n=et(t),s=et(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!ci(t[o],e[o]))return!1}}return String(t)===String(e)}function Wc(t,e){return t.findIndex(n=>ci(n,e))}const ig=t=>!!(t&&t.__v_isRef===!0),U=t=>wt(t)?t:t==null?"":Ae(t)||et(t)&&(t.toString===eg||!Re(t.toString))?ig(t)?U(t.value):JSON.stringify(t,rg,2):String(t),rg=(t,e)=>ig(e)?rg(t,e.value):Ni(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Pl(s,r)+" =>"]=i,n),{})}:Zi(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Pl(n))}:qn(e)?Pl(e):et(e)&&!Ae(e)&&!tg(e)?String(e):e,Pl=(t,e="")=>{var n;return qn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let on;class qy{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=on,!e&&on&&(this.index=(on.scopes||(on.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=on;try{return on=this,e()}finally{on=n}}}on(){++this._on===1&&(this.prevScope=on,on=this)}off(){this._on>0&&--this._on===0&&(on=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Qy(){return on}let nt;const kl=new WeakSet;class og{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,on&&on.active&&on.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,kl.has(this)&&(kl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||lg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Cd(this),cg(this);const e=nt,n=Sn;nt=this,Sn=!0;try{return this.fn()}finally{ug(this),nt=e,Sn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Yc(e);this.deps=this.depsTail=void 0,Cd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?kl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){nc(this)&&this.run()}get dirty(){return nc(this)}}let ag=0,xr,Nr;function lg(t,e=!1){if(t.flags|=8,e){t.next=Nr,Nr=t;return}t.next=xr,xr=t}function zc(){ag++}function Kc(){if(--ag>0)return;if(Nr){let e=Nr;for(Nr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;xr;){let e=xr;for(xr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function cg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ug(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),Yc(s),Wy(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function nc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(hg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function hg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Wr)||(t.globalVersion=Wr,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!nc(t))))return;t.flags|=2;const e=t.dep,n=nt,s=Sn;nt=t,Sn=!0;try{cg(t);const i=t.fn(t._value);(e.version===0||xs(i,t._value))&&(t.flags|=128,t._value=i,e.version++)}catch(i){throw e.version++,i}finally{nt=n,Sn=s,ug(t),t.flags&=-3}}function Yc(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Yc(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Wy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Sn=!0;const dg=[];function cs(){dg.push(Sn),Sn=!1}function us(){const t=dg.pop();Sn=t===void 0?!0:t}function Cd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=nt;nt=void 0;try{e()}finally{nt=n}}}let Wr=0;class zy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Jc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!nt||!Sn||nt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==nt)n=this.activeLink=new zy(nt,this),nt.deps?(n.prevDep=nt.depsTail,nt.depsTail.nextDep=n,nt.depsTail=n):nt.deps=nt.depsTail=n,fg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=nt.depsTail,n.nextDep=void 0,nt.depsTail.nextDep=n,nt.depsTail=n,nt.deps===n&&(nt.deps=s)}return n}trigger(e){this.version++,Wr++,this.notify(e)}notify(e){zc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Kc()}}}function fg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)fg(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const sc=new WeakMap,ri=Symbol(""),ic=Symbol(""),zr=Symbol("");function jt(t,e,n){if(Sn&&nt){let s=sc.get(t);s||sc.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new Jc),i.map=s,i.key=n),i.track()}}function es(t,e,n,s,i,r){const o=sc.get(t);if(!o){Wr++;return}const l=c=>{c&&c.trigger()};if(zc(),e==="clear")o.forEach(l);else{const c=Ae(t),u=c&&Qc(n);if(c&&n==="length"){const d=Number(s);o.forEach((p,m)=>{(m==="length"||m===zr||!qn(m)&&m>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(zr)),e){case"add":c?u&&l(o.get("length")):(l(o.get(ri)),Ni(t)&&l(o.get(ic)));break;case"delete":c||(l(o.get(ri)),Ni(t)&&l(o.get(ic)));break;case"set":Ni(t)&&l(o.get(ri));break}}Kc()}function Ci(t){const e=Qe(t);return e===t?e:(jt(e,"iterate",zr),An(t)?e:e.map(Vt))}function Ha(t){return jt(t=Qe(t),"iterate",zr),t}const Ky={__proto__:null,[Symbol.iterator](){return Dl(this,Symbol.iterator,Vt)},concat(...t){return Ci(this).concat(...t.map(e=>Ae(e)?Ci(e):e))},entries(){return Dl(this,"entries",t=>(t[1]=Vt(t[1]),t))},every(t,e){return Jn(this,"every",t,e,void 0,arguments)},filter(t,e){return Jn(this,"filter",t,e,n=>n.map(Vt),arguments)},find(t,e){return Jn(this,"find",t,e,Vt,arguments)},findIndex(t,e){return Jn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Jn(this,"findLast",t,e,Vt,arguments)},findLastIndex(t,e){return Jn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Jn(this,"forEach",t,e,void 0,arguments)},includes(...t){return xl(this,"includes",t)},indexOf(...t){return xl(this,"indexOf",t)},join(t){return Ci(this).join(t)},lastIndexOf(...t){return xl(this,"lastIndexOf",t)},map(t,e){return Jn(this,"map",t,e,void 0,arguments)},pop(){return wr(this,"pop")},push(...t){return wr(this,"push",t)},reduce(t,...e){return bd(this,"reduce",t,e)},reduceRight(t,...e){return bd(this,"reduceRight",t,e)},shift(){return wr(this,"shift")},some(t,e){return Jn(this,"some",t,e,void 0,arguments)},splice(...t){return wr(this,"splice",t)},toReversed(){return Ci(this).toReversed()},toSorted(t){return Ci(this).toSorted(t)},toSpliced(...t){return Ci(this).toSpliced(...t)},unshift(...t){return wr(this,"unshift",t)},values(){return Dl(this,"values",Vt)}};function Dl(t,e,n){const s=Ha(t),i=s[e]();return s!==t&&!An(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.done||(r.value=n(r.value)),r}),i}const Yy=Array.prototype;function Jn(t,e,n,s,i,r){const o=Ha(t),l=o!==t&&!An(t),c=o[e];if(c!==Yy[e]){const p=c.apply(t,r);return l?Vt(p):p}let u=n;o!==t&&(l?u=function(p,m){return n.call(this,Vt(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const d=c.call(o,u,s);return l&&i?i(d):d}function bd(t,e,n,s){const i=Ha(t);let r=n;return i!==t&&(An(t)?n.length>3&&(r=function(o,l,c){return n.call(this,o,l,c,t)}):r=function(o,l,c){return n.call(this,o,Vt(l),c,t)}),i[e](r,...s)}function xl(t,e,n){const s=Qe(t);jt(s,"iterate",zr);const i=s[e](...n);return(i===-1||i===!1)&&eu(n[0])?(n[0]=Qe(n[0]),s[e](...n)):i}function wr(t,e,n=[]){cs(),zc();const s=Qe(t)[e].apply(t,n);return Kc(),us(),s}const Jy=jc("__proto__,__v_isRef,__isVue"),pg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(qn));function Xy(t){qn(t)||(t=String(t));const e=Qe(this);return jt(e,"has",t),e.hasOwnProperty(t)}class gg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?lA:yg:r?vg:_g).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=Ae(e);if(!i){let c;if(o&&(c=Ky[n]))return c;if(n==="hasOwnProperty")return Xy}const l=Reflect.get(e,n,Qt(e)?e:s);if((qn(n)?pg.has(n):Jy(n))||(i||jt(e,"get",n),r))return l;if(Qt(l)){const c=o&&Qc(n)?l:l.value;return i&&et(c)?oc(c):c}return et(l)?i?oc(l):ho(l):l}}class mg extends gg{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const c=Ls(r);if(!An(s)&&!Ls(s)&&(r=Qe(r),s=Qe(s)),!Ae(e)&&Qt(r)&&!Qt(s))return c||(r.value=s),!0}const o=Ae(e)&&Qc(n)?Number(n)<e.length:We(e,n),l=Reflect.set(e,n,s,Qt(e)?e:i);return e===Qe(i)&&(o?xs(s,r)&&es(e,"set",n,s):es(e,"add",n,s)),l}deleteProperty(e,n){const s=We(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&es(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!qn(n)||!pg.has(n))&&jt(e,"has",n),s}ownKeys(e){return jt(e,"iterate",Ae(e)?"length":ri),Reflect.ownKeys(e)}}class Zy extends gg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const eA=new mg,tA=new Zy,nA=new mg(!0);const rc=t=>t,No=t=>Reflect.getPrototypeOf(t);function sA(t,e,n){return function(...s){const i=this.__v_raw,r=Qe(i),o=Ni(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=i[t](...s),d=n?rc:e?ra:Vt;return!e&&jt(r,"iterate",c?ic:ri),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function Mo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function iA(t,e){const n={get(i){const r=this.__v_raw,o=Qe(r),l=Qe(i);t||(xs(i,l)&&jt(o,"get",i),jt(o,"get",l));const{has:c}=No(o),u=e?rc:t?ra:Vt;if(c.call(o,i))return u(r.get(i));if(c.call(o,l))return u(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&jt(Qe(i),"iterate",ri),i.size},has(i){const r=this.__v_raw,o=Qe(r),l=Qe(i);return t||(xs(i,l)&&jt(o,"has",i),jt(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,c=Qe(l),u=e?rc:t?ra:Vt;return!t&&jt(c,"iterate",ri),l.forEach((d,p)=>i.call(r,u(d),u(p),o))}};return Wt(n,t?{add:Mo("add"),set:Mo("set"),delete:Mo("delete"),clear:Mo("clear")}:{add(i){!e&&!An(i)&&!Ls(i)&&(i=Qe(i));const r=Qe(this);return No(r).has.call(r,i)||(r.add(i),es(r,"add",i,i)),this},set(i,r){!e&&!An(r)&&!Ls(r)&&(r=Qe(r));const o=Qe(this),{has:l,get:c}=No(o);let u=l.call(o,i);u||(i=Qe(i),u=l.call(o,i));const d=c.call(o,i);return o.set(i,r),u?xs(r,d)&&es(o,"set",i,r):es(o,"add",i,r),this},delete(i){const r=Qe(this),{has:o,get:l}=No(r);let c=o.call(r,i);c||(i=Qe(i),c=o.call(r,i)),l&&l.call(r,i);const u=r.delete(i);return c&&es(r,"delete",i,void 0),u},clear(){const i=Qe(this),r=i.size!==0,o=i.clear();return r&&es(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=sA(i,t,e)}),n}function Xc(t,e){const n=iA(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(We(n,i)&&i in s?n:s,i,r)}const rA={get:Xc(!1,!1)},oA={get:Xc(!1,!0)},aA={get:Xc(!0,!1)};const _g=new WeakMap,vg=new WeakMap,yg=new WeakMap,lA=new WeakMap;function cA(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function uA(t){return t.__v_skip||!Object.isExtensible(t)?0:cA(Oy(t))}function ho(t){return Ls(t)?t:Zc(t,!1,eA,rA,_g)}function Ag(t){return Zc(t,!1,nA,oA,vg)}function oc(t){return Zc(t,!0,tA,aA,yg)}function Zc(t,e,n,s,i){if(!et(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=uA(t);if(r===0)return t;const o=i.get(t);if(o)return o;const l=new Proxy(t,r===2?s:n);return i.set(t,l),l}function Mi(t){return Ls(t)?Mi(t.__v_raw):!!(t&&t.__v_isReactive)}function Ls(t){return!!(t&&t.__v_isReadonly)}function An(t){return!!(t&&t.__v_isShallow)}function eu(t){return t?!!t.__v_raw:!1}function Qe(t){const e=t&&t.__v_raw;return e?Qe(e):t}function hA(t){return!We(t,"__v_skip")&&Object.isExtensible(t)&&ng(t,"__v_skip",!0),t}const Vt=t=>et(t)?ho(t):t,ra=t=>et(t)?oc(t):t;function Qt(t){return t?t.__v_isRef===!0:!1}function N(t){return Ig(t,!1)}function dA(t){return Ig(t,!0)}function Ig(t,e){return Qt(t)?t:new fA(t,e)}class fA{constructor(e,n){this.dep=new Jc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Qe(e),this._value=n?e:Vt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||An(e)||Ls(e);e=s?e:Qe(e),xs(e,n)&&(this._rawValue=e,this._value=s?e:Vt(e),this.dep.trigger())}}function Bt(t){return Qt(t)?t.value:t}const pA={get:(t,e,n)=>e==="__v_raw"?t:Bt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Qt(i)&&!Qt(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function wg(t){return Mi(t)?t:new Proxy(t,pA)}class gA{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Jc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Wr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&nt!==this)return lg(this,!0),!0}get value(){const e=this.dep.track();return hg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function mA(t,e,n=!1){let s,i;return Re(t)?s=t:(s=t.get,i=t.set),new gA(s,i,n)}const Oo={},oa=new WeakMap;let Zs;function _A(t,e=!1,n=Zs){if(n){let s=oa.get(n);s||oa.set(n,s=[]),s.push(t)}}function vA(t,e,n=Xe){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:c}=n,u=$=>i?$:An($)||i===!1||i===0?ts($,1):ts($);let d,p,m,_,y=!1,A=!1;if(Qt(t)?(p=()=>t.value,y=An(t)):Mi(t)?(p=()=>u(t),y=!0):Ae(t)?(A=!0,y=t.some($=>Mi($)||An($)),p=()=>t.map($=>{if(Qt($))return $.value;if(Mi($))return u($);if(Re($))return c?c($,2):$()})):Re(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){cs();try{m()}finally{us()}}const $=Zs;Zs=d;try{return c?c(t,3,[_]):t(_)}finally{Zs=$}}:p=Bn,e&&i){const $=p,oe=i===!0?1/0:i;p=()=>ts($(),oe)}const C=Qy(),L=()=>{d.stop(),C&&C.active&&qc(C.effects,d)};if(r&&e){const $=e;e=(...oe)=>{$(...oe),L()}}let Q=A?new Array(t.length).fill(Oo):Oo;const j=$=>{if(!(!(d.flags&1)||!d.dirty&&!$))if(e){const oe=d.run();if(i||y||(A?oe.some((Pe,S)=>xs(Pe,Q[S])):xs(oe,Q))){m&&m();const Pe=Zs;Zs=d;try{const S=[oe,Q===Oo?void 0:A&&Q[0]===Oo?[]:Q,_];Q=oe,c?c(e,3,S):e(...S)}finally{Zs=Pe}}}else d.run()};return l&&l(j),d=new og(p),d.scheduler=o?()=>o(j,!1):j,_=$=>_A($,!1,d),m=d.onStop=()=>{const $=oa.get(d);if($){if(c)c($,4);else for(const oe of $)oe();oa.delete(d)}},e?s?j(!0):Q=d.run():o?o(j.bind(null,!0),!0):d.run(),L.pause=d.pause.bind(d),L.resume=d.resume.bind(d),L.stop=L,L}function ts(t,e=1/0,n){if(e<=0||!et(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Qt(t))ts(t.value,e,n);else if(Ae(t))for(let s=0;s<t.length;s++)ts(t[s],e,n);else if(Zi(t)||Ni(t))t.forEach(s=>{ts(s,e,n)});else if(tg(t)){for(const s in t)ts(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&ts(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function fo(t,e,n,s){try{return s?t(...s):t()}catch(i){ja(i,e,n)}}function Qn(t,e,n,s){if(Re(t)){const i=fo(t,e,n,s);return i&&Zp(i)&&i.catch(r=>{ja(r,e,n)}),i}if(Ae(t)){const i=[];for(let r=0;r<t.length;r++)i.push(Qn(t[r],e,n,s));return i}}function ja(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Xe;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,u)===!1)return}l=l.parent}if(r){cs(),fo(r,null,10,[t,c,u]),us();return}}yA(t,n,i,s,o)}function yA(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Xt=[];let On=-1;const Oi=[];let Cs=null,bi=0;const Eg=Promise.resolve();let aa=null;function tu(t){const e=aa||Eg;return t?e.then(this?t.bind(this):t):e}function AA(t){let e=On+1,n=Xt.length;for(;e<n;){const s=e+n>>>1,i=Xt[s],r=Kr(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function nu(t){if(!(t.flags&1)){const e=Kr(t),n=Xt[Xt.length-1];!n||!(t.flags&2)&&e>=Kr(n)?Xt.push(t):Xt.splice(AA(e),0,t),t.flags|=1,Tg()}}function Tg(){aa||(aa=Eg.then(bg))}function IA(t){Ae(t)?Oi.push(...t):Cs&&t.id===-1?Cs.splice(bi+1,0,t):t.flags&1||(Oi.push(t),t.flags|=1),Tg()}function Sd(t,e,n=On+1){for(;n<Xt.length;n++){const s=Xt[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Xt.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Cg(t){if(Oi.length){const e=[...new Set(Oi)].sort((n,s)=>Kr(n)-Kr(s));if(Oi.length=0,Cs){Cs.push(...e);return}for(Cs=e,bi=0;bi<Cs.length;bi++){const n=Cs[bi];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Cs=null,bi=0}}const Kr=t=>t.id==null?t.flags&2?-1:1/0:t.id;function bg(t){try{for(On=0;On<Xt.length;On++){const e=Xt[On];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),fo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;On<Xt.length;On++){const e=Xt[On];e&&(e.flags&=-2)}On=-1,Xt.length=0,Cg(),aa=null,(Xt.length||Oi.length)&&bg()}}let pn=null,Sg=null;function la(t){const e=pn;return pn=t,Sg=t&&t.type.__scopeId||null,e}function wA(t,e=pn,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&ha(-1);const r=la(e);let o;try{o=t(...i)}finally{la(r),s._d&&ha(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function is(t,e){if(pn===null)return t;const n=Wa(pn),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,c=Xe]=e[i];r&&(Re(r)&&(r={mounted:r,updated:r}),r.deep&&ts(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Js(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(cs(),Qn(c,n,8,[t.el,l,t,e]),us())}}const EA=Symbol("_vte"),TA=t=>t.__isTeleport,CA=Symbol("_leaveCb");function su(t,e){t.shapeFlag&6&&t.component?(t.transition=e,su(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Rg(t,e){return Re(t)?Wt({name:t.name},e,{setup:t}):t}function Pg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const ca=new WeakMap;function Mr(t,e,n,s,i=!1){if(Ae(t)){t.forEach((y,A)=>Mr(y,e&&(Ae(e)?e[A]:e),n,s,i));return}if(Or(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Mr(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Wa(s.component):s.el,o=i?null:r,{i:l,r:c}=t,u=e&&e.r,d=l.refs===Xe?l.refs={}:l.refs,p=l.setupState,m=Qe(p),_=p===Xe?Xp:y=>We(m,y);if(u!=null&&u!==c){if(Rd(e),wt(u))d[u]=null,_(u)&&(p[u]=null);else if(Qt(u)){u.value=null;const y=e;y.k&&(d[y.k]=null)}}if(Re(c))fo(c,l,12,[o,d]);else{const y=wt(c),A=Qt(c);if(y||A){const C=()=>{if(t.f){const L=y?_(c)?p[c]:d[c]:c.value;if(i)Ae(L)&&qc(L,r);else if(Ae(L))L.includes(r)||L.push(r);else if(y)d[c]=[r],_(c)&&(p[c]=d[c]);else{const Q=[r];c.value=Q,t.k&&(d[t.k]=Q)}}else y?(d[c]=o,_(c)&&(p[c]=o)):A&&(c.value=o,t.k&&(d[t.k]=o))};if(o){const L=()=>{C(),ca.delete(t)};L.id=-1,ca.set(t,L),fn(L,n)}else Rd(t),C()}}}function Rd(t){const e=ca.get(t);e&&(e.flags|=8,ca.delete(t))}$a().requestIdleCallback;$a().cancelIdleCallback;const Or=t=>!!t.type.__asyncLoader,kg=t=>t.type.__isKeepAlive;function bA(t,e){Dg(t,"a",e)}function SA(t,e){Dg(t,"da",e)}function Dg(t,e,n=qt){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ga(e,s,n),n){let i=n.parent;for(;i&&i.parent;)kg(i.parent.vnode)&&RA(s,e,n,i),i=i.parent}}function RA(t,e,n,s){const i=Ga(e,t,s,!0);er(()=>{qc(s[e],i)},n)}function Ga(t,e,n=qt,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{cs();const l=po(n),c=Qn(e,n,t,o);return l(),us(),c});return s?i.unshift(r):i.push(r),r}}const gs=t=>(e,n=qt)=>{(!Xr||t==="sp")&&Ga(t,(...s)=>e(...s),n)},PA=gs("bm"),Et=gs("m"),kA=gs("bu"),DA=gs("u"),xA=gs("bum"),er=gs("um"),NA=gs("sp"),MA=gs("rtg"),OA=gs("rtc");function VA(t,e=qt){Ga("ec",t,e)}const LA="components";function BA(t,e){return UA(LA,t,!0,e)||t}const FA=Symbol.for("v-ndc");function UA(t,e,n=!0,s=!1){const i=pn||qt;if(i){const r=i.type;{const l=P0(r,!1);if(l&&(l===e||l===En(e)||l===Ua(En(e))))return r}const o=Pd(i[t]||r[t],e)||Pd(i.appContext[t],e);return!o&&s?r:o}}function Pd(t,e){return t&&(t[e]||t[En(e)]||t[Ua(En(e))])}function je(t,e,n,s){let i;const r=n,o=Ae(t);if(o||wt(t)){const l=o&&Mi(t);let c=!1,u=!1;l&&(c=!An(t),u=Ls(t),t=Ha(t)),i=new Array(t.length);for(let d=0,p=t.length;d<p;d++)i[d]=e(c?u?ra(Vt(t[d])):Vt(t[d]):t[d],d,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=e(l+1,l,void 0,r)}else if(et(t))if(t[Symbol.iterator])i=Array.from(t,(l,c)=>e(l,c,void 0,r));else{const l=Object.keys(t);i=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];i[c]=e(t[d],d,c,r)}}else i=[];return i}const ac=t=>t?Xg(t)?Wa(t):ac(t.parent):null,Vr=Wt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ac(t.parent),$root:t=>ac(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ng(t),$forceUpdate:t=>t.f||(t.f=()=>{nu(t.update)}),$nextTick:t=>t.n||(t.n=tu.bind(t.proxy)),$watch:t=>a0.bind(t)}),Nl=(t,e)=>t!==Xe&&!t.__isScriptSetup&&We(t,e),$A={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Nl(s,e))return o[e]=1,s[e];if(i!==Xe&&We(i,e))return o[e]=2,i[e];if((u=t.propsOptions[0])&&We(u,e))return o[e]=3,r[e];if(n!==Xe&&We(n,e))return o[e]=4,n[e];lc&&(o[e]=0)}}const d=Vr[e];let p,m;if(d)return e==="$attrs"&&jt(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Xe&&We(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,We(m,e))return m[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Nl(i,e)?(i[e]=n,!0):s!==Xe&&We(s,e)?(s[e]=n,!0):We(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r,type:o}},l){let c,u;return!!(n[l]||t!==Xe&&l[0]!=="$"&&We(t,l)||Nl(e,l)||(c=r[0])&&We(c,l)||We(s,l)||We(Vr,l)||We(i.config.globalProperties,l)||(u=o.__cssModules)&&u[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:We(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function kd(t){return Ae(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let lc=!0;function HA(t){const e=Ng(t),n=t.proxy,s=t.ctx;lc=!1,e.beforeCreate&&Dd(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:p,mounted:m,beforeUpdate:_,updated:y,activated:A,deactivated:C,beforeDestroy:L,beforeUnmount:Q,destroyed:j,unmounted:$,render:oe,renderTracked:Pe,renderTriggered:S,errorCaptured:w,serverPrefetch:T,expose:P,inheritAttrs:R,components:D,directives:E,filters:Ke}=e;if(u&&jA(u,s,null),o)for(const Ve in o){const Ce=o[Ve];Re(Ce)&&(s[Ve]=Ce.bind(n))}if(i){const Ve=i.call(n,n);et(Ve)&&(t.data=ho(Ve))}if(lc=!0,r)for(const Ve in r){const Ce=r[Ve],Mt=Re(Ce)?Ce.bind(n,n):Re(Ce.get)?Ce.get.bind(n,n):Bn,cn=!Re(Ce)&&Re(Ce.set)?Ce.set.bind(n):Bn,Pt=Ze({get:Mt,set:cn});Object.defineProperty(s,Ve,{enumerable:!0,configurable:!0,get:()=>Pt.value,set:Le=>Pt.value=Le})}if(l)for(const Ve in l)xg(l[Ve],s,n,Ve);if(c){const Ve=Re(c)?c.call(n):c;Reflect.ownKeys(Ve).forEach(Ce=>{Go(Ce,Ve[Ce])})}d&&Dd(d,t,"c");function st(Ve,Ce){Ae(Ce)?Ce.forEach(Mt=>Ve(Mt.bind(n))):Ce&&Ve(Ce.bind(n))}if(st(PA,p),st(Et,m),st(kA,_),st(DA,y),st(bA,A),st(SA,C),st(VA,w),st(OA,Pe),st(MA,S),st(xA,Q),st(er,$),st(NA,T),Ae(P))if(P.length){const Ve=t.exposed||(t.exposed={});P.forEach(Ce=>{Object.defineProperty(Ve,Ce,{get:()=>n[Ce],set:Mt=>n[Ce]=Mt,enumerable:!0})})}else t.exposed||(t.exposed={});oe&&t.render===Bn&&(t.render=oe),R!=null&&(t.inheritAttrs=R),D&&(t.components=D),E&&(t.directives=E),T&&Pg(t)}function jA(t,e,n=Bn){Ae(t)&&(t=cc(t));for(const s in t){const i=t[s];let r;et(i)?"default"in i?r=Fn(i.from||s,i.default,!0):r=Fn(i.from||s):r=Fn(i),Qt(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Dd(t,e,n){Qn(Ae(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function xg(t,e,n,s){let i=s.includes(".")?Qg(n,s):()=>n[s];if(wt(t)){const r=e[t];Re(r)&&as(i,r)}else if(Re(t))as(i,t.bind(n));else if(et(t))if(Ae(t))t.forEach(r=>xg(r,e,n,s));else{const r=Re(t.handler)?t.handler.bind(n):e[t.handler];Re(r)&&as(i,r,t)}}function Ng(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(u=>ua(c,u,o,!0)),ua(c,e,o)),et(e)&&r.set(e,c),c}function ua(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&ua(t,r,n,!0),i&&i.forEach(o=>ua(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=GA[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const GA={data:xd,props:Nd,emits:Nd,methods:br,computed:br,beforeCreate:Kt,created:Kt,beforeMount:Kt,mounted:Kt,beforeUpdate:Kt,updated:Kt,beforeDestroy:Kt,beforeUnmount:Kt,destroyed:Kt,unmounted:Kt,activated:Kt,deactivated:Kt,errorCaptured:Kt,serverPrefetch:Kt,components:br,directives:br,watch:QA,provide:xd,inject:qA};function xd(t,e){return e?t?function(){return Wt(Re(t)?t.call(this,this):t,Re(e)?e.call(this,this):e)}:e:t}function qA(t,e){return br(cc(t),cc(e))}function cc(t){if(Ae(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Kt(t,e){return t?[...new Set([].concat(t,e))]:e}function br(t,e){return t?Wt(Object.create(null),t,e):e}function Nd(t,e){return t?Ae(t)&&Ae(e)?[...new Set([...t,...e])]:Wt(Object.create(null),kd(t),kd(e??{})):e}function QA(t,e){if(!t)return e;if(!e)return t;const n=Wt(Object.create(null),t);for(const s in e)n[s]=Kt(t[s],e[s]);return n}function Mg(){return{app:null,config:{isNativeTag:Xp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let WA=0;function zA(t,e){return function(s,i=null){Re(s)||(s=Wt({},s)),i!=null&&!et(i)&&(i=null);const r=Mg(),o=new WeakSet,l=[];let c=!1;const u=r.app={_uid:WA++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:D0,get config(){return r.config},set config(d){},use(d,...p){return o.has(d)||(d&&Re(d.install)?(o.add(d),d.install(u,...p)):Re(d)&&(o.add(d),d(u,...p))),u},mixin(d){return r.mixins.includes(d)||r.mixins.push(d),u},component(d,p){return p?(r.components[d]=p,u):r.components[d]},directive(d,p){return p?(r.directives[d]=p,u):r.directives[d]},mount(d,p,m){if(!c){const _=u._ceVNode||be(s,i);return _.appContext=r,m===!0?m="svg":m===!1&&(m=void 0),t(_,d,m),c=!0,u._container=d,d.__vue_app__=u,Wa(_.component)}},onUnmount(d){l.push(d)},unmount(){c&&(Qn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,p){return r.provides[d]=p,u},runWithContext(d){const p=Vi;Vi=u;try{return d()}finally{Vi=p}}};return u}}let Vi=null;function Go(t,e){if(qt){let n=qt.provides;const s=qt.parent&&qt.parent.provides;s===n&&(n=qt.provides=Object.create(s)),n[t]=e}}function Fn(t,e,n=!1){const s=T0();if(s||Vi){let i=Vi?Vi._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Re(e)?e.call(s&&s.proxy):e}}const Og={},Vg=()=>Object.create(Og),Lg=t=>Object.getPrototypeOf(t)===Og;function KA(t,e,n,s=!1){const i={},r=Vg();t.propsDefaults=Object.create(null),Bg(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Ag(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function YA(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=Qe(i),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(qa(t.emitsOptions,m))continue;const _=e[m];if(c)if(We(r,m))_!==r[m]&&(r[m]=_,u=!0);else{const y=En(m);i[y]=uc(c,l,y,_,t,!1)}else _!==r[m]&&(r[m]=_,u=!0)}}}else{Bg(t,e,i,r)&&(u=!0);let d;for(const p in l)(!e||!We(e,p)&&((d=gi(p))===p||!We(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(i[p]=uc(c,l,p,void 0,t,!0)):delete i[p]);if(r!==l)for(const p in r)(!e||!We(e,p))&&(delete r[p],u=!0)}u&&es(t.attrs,"set","")}function Bg(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Dr(c))continue;const u=e[c];let d;i&&We(i,d=En(c))?!r||!r.includes(d)?n[d]=u:(l||(l={}))[d]=u:qa(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(r){const c=Qe(n),u=l||Xe;for(let d=0;d<r.length;d++){const p=r[d];n[p]=uc(i,c,p,u[p],t,!We(u,p))}}return o}function uc(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=We(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Re(c)){const{propsDefaults:u}=i;if(n in u)s=u[n];else{const d=po(i);s=u[n]=c.call(null,e),d()}}else s=c;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===gi(n))&&(s=!0))}return s}const JA=new WeakMap;function Fg(t,e,n=!1){const s=n?JA:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let c=!1;if(!Re(t)){const d=p=>{c=!0;const[m,_]=Fg(p,e,!0);Wt(o,m),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!r&&!c)return et(t)&&s.set(t,xi),xi;if(Ae(r))for(let d=0;d<r.length;d++){const p=En(r[d]);Md(p)&&(o[p]=Xe)}else if(r)for(const d in r){const p=En(d);if(Md(p)){const m=r[d],_=o[p]=Ae(m)||Re(m)?{type:m}:Wt({},m),y=_.type;let A=!1,C=!0;if(Ae(y))for(let L=0;L<y.length;++L){const Q=y[L],j=Re(Q)&&Q.name;if(j==="Boolean"){A=!0;break}else j==="String"&&(C=!1)}else A=Re(y)&&y.name==="Boolean";_[0]=A,_[1]=C,(A||We(_,"default"))&&l.push(p)}}const u=[o,l];return et(t)&&s.set(t,u),u}function Md(t){return t[0]!=="$"&&!Dr(t)}const iu=t=>t==="_"||t==="_ctx"||t==="$stable",ru=t=>Ae(t)?t.map(Ln):[Ln(t)],XA=(t,e,n)=>{if(e._n)return e;const s=wA((...i)=>ru(e(...i)),n);return s._c=!1,s},Ug=(t,e,n)=>{const s=t._ctx;for(const i in t){if(iu(i))continue;const r=t[i];if(Re(r))e[i]=XA(i,r,s);else if(r!=null){const o=ru(r);e[i]=()=>o}}},$g=(t,e)=>{const n=ru(e);t.slots.default=()=>n},Hg=(t,e,n)=>{for(const s in e)(n||!iu(s))&&(t[s]=e[s])},ZA=(t,e,n)=>{const s=t.slots=Vg();if(t.vnode.shapeFlag&32){const i=e._;i?(Hg(s,e,n),n&&ng(s,"_",i,!0)):Ug(e,s)}else e&&$g(t,e)},e0=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Xe;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:Hg(i,e,n):(r=!e.$stable,Ug(e,i)),o=e}else e&&($g(t,e),o={default:1});if(r)for(const l in i)!iu(l)&&o[l]==null&&delete i[l]},fn=g0;function t0(t){return n0(t)}function n0(t,e){const n=$a();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:m,setScopeId:_=Bn,insertStaticContent:y}=t,A=(I,b,x,W=null,z=null,q=null,ie=void 0,Z=null,K=!!b.dynamicChildren)=>{if(I===b)return;I&&!Er(I,b)&&(W=G(I),Le(I,z,q,!0),I=null),b.patchFlag===-2&&(K=!1,b.dynamicChildren=null);const{type:Y,ref:ae,shapeFlag:te}=b;switch(Y){case Qa:C(I,b,x,W);break;case Bs:L(I,b,x,W);break;case qo:I==null&&Q(b,x,W,ie);break;case ke:D(I,b,x,W,z,q,ie,Z,K);break;default:te&1?oe(I,b,x,W,z,q,ie,Z,K):te&6?E(I,b,x,W,z,q,ie,Z,K):(te&64||te&128)&&Y.process(I,b,x,W,z,q,ie,Z,K,fe)}ae!=null&&z?Mr(ae,I&&I.ref,q,b||I,!b):ae==null&&I&&I.ref!=null&&Mr(I.ref,null,q,I,!0)},C=(I,b,x,W)=>{if(I==null)s(b.el=l(b.children),x,W);else{const z=b.el=I.el;b.children!==I.children&&u(z,b.children)}},L=(I,b,x,W)=>{I==null?s(b.el=c(b.children||""),x,W):b.el=I.el},Q=(I,b,x,W)=>{[I.el,I.anchor]=y(I.children,b,x,W,I.el,I.anchor)},j=({el:I,anchor:b},x,W)=>{let z;for(;I&&I!==b;)z=m(I),s(I,x,W),I=z;s(b,x,W)},$=({el:I,anchor:b})=>{let x;for(;I&&I!==b;)x=m(I),i(I),I=x;i(b)},oe=(I,b,x,W,z,q,ie,Z,K)=>{b.type==="svg"?ie="svg":b.type==="math"&&(ie="mathml"),I==null?Pe(b,x,W,z,q,ie,Z,K):T(I,b,z,q,ie,Z,K)},Pe=(I,b,x,W,z,q,ie,Z)=>{let K,Y;const{props:ae,shapeFlag:te,transition:he,dirs:ce}=I;if(K=I.el=o(I.type,q,ae&&ae.is,ae),te&8?d(K,I.children):te&16&&w(I.children,K,null,W,z,Ml(I,q),ie,Z),ce&&Js(I,null,W,"created"),S(K,I,I.scopeId,ie,W),ae){for(const He in ae)He!=="value"&&!Dr(He)&&r(K,He,null,ae[He],q,W);"value"in ae&&r(K,"value",null,ae.value,q),(Y=ae.onVnodeBeforeMount)&&Mn(Y,W,I)}ce&&Js(I,null,W,"beforeMount");const _e=s0(z,he);_e&&he.beforeEnter(K),s(K,b,x),((Y=ae&&ae.onVnodeMounted)||_e||ce)&&fn(()=>{Y&&Mn(Y,W,I),_e&&he.enter(K),ce&&Js(I,null,W,"mounted")},z)},S=(I,b,x,W,z)=>{if(x&&_(I,x),W)for(let q=0;q<W.length;q++)_(I,W[q]);if(z){let q=z.subTree;if(b===q||zg(q.type)&&(q.ssContent===b||q.ssFallback===b)){const ie=z.vnode;S(I,ie,ie.scopeId,ie.slotScopeIds,z.parent)}}},w=(I,b,x,W,z,q,ie,Z,K=0)=>{for(let Y=K;Y<I.length;Y++){const ae=I[Y]=Z?bs(I[Y]):Ln(I[Y]);A(null,ae,b,x,W,z,q,ie,Z)}},T=(I,b,x,W,z,q,ie)=>{const Z=b.el=I.el;let{patchFlag:K,dynamicChildren:Y,dirs:ae}=b;K|=I.patchFlag&16;const te=I.props||Xe,he=b.props||Xe;let ce;if(x&&Xs(x,!1),(ce=he.onVnodeBeforeUpdate)&&Mn(ce,x,b,I),ae&&Js(b,I,x,"beforeUpdate"),x&&Xs(x,!0),(te.innerHTML&&he.innerHTML==null||te.textContent&&he.textContent==null)&&d(Z,""),Y?P(I.dynamicChildren,Y,Z,x,W,Ml(b,z),q):ie||Ce(I,b,Z,null,x,W,Ml(b,z),q,!1),K>0){if(K&16)R(Z,te,he,x,z);else if(K&2&&te.class!==he.class&&r(Z,"class",null,he.class,z),K&4&&r(Z,"style",te.style,he.style,z),K&8){const _e=b.dynamicProps;for(let He=0;He<_e.length;He++){const Be=_e[He],H=te[Be],k=he[Be];(k!==H||Be==="value")&&r(Z,Be,H,k,z,x)}}K&1&&I.children!==b.children&&d(Z,b.children)}else!ie&&Y==null&&R(Z,te,he,x,z);((ce=he.onVnodeUpdated)||ae)&&fn(()=>{ce&&Mn(ce,x,b,I),ae&&Js(b,I,x,"updated")},W)},P=(I,b,x,W,z,q,ie)=>{for(let Z=0;Z<b.length;Z++){const K=I[Z],Y=b[Z],ae=K.el&&(K.type===ke||!Er(K,Y)||K.shapeFlag&198)?p(K.el):x;A(K,Y,ae,null,W,z,q,ie,!0)}},R=(I,b,x,W,z)=>{if(b!==x){if(b!==Xe)for(const q in b)!Dr(q)&&!(q in x)&&r(I,q,b[q],null,z,W);for(const q in x){if(Dr(q))continue;const ie=x[q],Z=b[q];ie!==Z&&q!=="value"&&r(I,q,Z,ie,z,W)}"value"in x&&r(I,"value",b.value,x.value,z)}},D=(I,b,x,W,z,q,ie,Z,K)=>{const Y=b.el=I?I.el:l(""),ae=b.anchor=I?I.anchor:l("");let{patchFlag:te,dynamicChildren:he,slotScopeIds:ce}=b;ce&&(Z=Z?Z.concat(ce):ce),I==null?(s(Y,x,W),s(ae,x,W),w(b.children||[],x,ae,z,q,ie,Z,K)):te>0&&te&64&&he&&I.dynamicChildren?(P(I.dynamicChildren,he,x,z,q,ie,Z),(b.key!=null||z&&b===z.subTree)&&jg(I,b,!0)):Ce(I,b,x,ae,z,q,ie,Z,K)},E=(I,b,x,W,z,q,ie,Z,K)=>{b.slotScopeIds=Z,I==null?b.shapeFlag&512?z.ctx.activate(b,x,W,ie,K):Ke(b,x,W,z,q,ie,K):vt(I,b,K)},Ke=(I,b,x,W,z,q,ie)=>{const Z=I.component=E0(I,W,z);if(kg(I)&&(Z.ctx.renderer=fe),C0(Z,!1,ie),Z.asyncDep){if(z&&z.registerDep(Z,st,ie),!I.el){const K=Z.subTree=be(Bs);L(null,K,b,x),I.placeholder=K.el}}else st(Z,I,b,x,z,q,ie)},vt=(I,b,x)=>{const W=b.component=I.component;if(f0(I,b,x))if(W.asyncDep&&!W.asyncResolved){Ve(W,b,x);return}else W.next=b,W.update();else b.el=I.el,W.vnode=b},st=(I,b,x,W,z,q,ie)=>{const Z=()=>{if(I.isMounted){let{next:te,bu:he,u:ce,parent:_e,vnode:He}=I;{const ne=Gg(I);if(ne){te&&(te.el=He.el,Ve(I,te,ie)),ne.asyncDep.then(()=>{I.isUnmounted||Z()});return}}let Be=te,H;Xs(I,!1),te?(te.el=He.el,Ve(I,te,ie)):te=He,he&&jo(he),(H=te.props&&te.props.onVnodeBeforeUpdate)&&Mn(H,_e,te,He),Xs(I,!0);const k=Vd(I),B=I.subTree;I.subTree=k,A(B,k,p(B.el),G(B),I,z,q),te.el=k.el,Be===null&&p0(I,k.el),ce&&fn(ce,z),(H=te.props&&te.props.onVnodeUpdated)&&fn(()=>Mn(H,_e,te,He),z)}else{let te;const{el:he,props:ce}=b,{bm:_e,m:He,parent:Be,root:H,type:k}=I,B=Or(b);Xs(I,!1),_e&&jo(_e),!B&&(te=ce&&ce.onVnodeBeforeMount)&&Mn(te,Be,b),Xs(I,!0);{H.ce&&H.ce._def.shadowRoot!==!1&&H.ce._injectChildStyle(k);const ne=I.subTree=Vd(I);A(null,ne,x,W,I,z,q),b.el=ne.el}if(He&&fn(He,z),!B&&(te=ce&&ce.onVnodeMounted)){const ne=b;fn(()=>Mn(te,Be,ne),z)}(b.shapeFlag&256||Be&&Or(Be.vnode)&&Be.vnode.shapeFlag&256)&&I.a&&fn(I.a,z),I.isMounted=!0,b=x=W=null}};I.scope.on();const K=I.effect=new og(Z);I.scope.off();const Y=I.update=K.run.bind(K),ae=I.job=K.runIfDirty.bind(K);ae.i=I,ae.id=I.uid,K.scheduler=()=>nu(ae),Xs(I,!0),Y()},Ve=(I,b,x)=>{b.component=I;const W=I.vnode.props;I.vnode=b,I.next=null,YA(I,b.props,W,x),e0(I,b.children,x),cs(),Sd(I),us()},Ce=(I,b,x,W,z,q,ie,Z,K=!1)=>{const Y=I&&I.children,ae=I?I.shapeFlag:0,te=b.children,{patchFlag:he,shapeFlag:ce}=b;if(he>0){if(he&128){cn(Y,te,x,W,z,q,ie,Z,K);return}else if(he&256){Mt(Y,te,x,W,z,q,ie,Z,K);return}}ce&8?(ae&16&&kt(Y,z,q),te!==Y&&d(x,te)):ae&16?ce&16?cn(Y,te,x,W,z,q,ie,Z,K):kt(Y,z,q,!0):(ae&8&&d(x,""),ce&16&&w(te,x,W,z,q,ie,Z,K))},Mt=(I,b,x,W,z,q,ie,Z,K)=>{I=I||xi,b=b||xi;const Y=I.length,ae=b.length,te=Math.min(Y,ae);let he;for(he=0;he<te;he++){const ce=b[he]=K?bs(b[he]):Ln(b[he]);A(I[he],ce,x,null,z,q,ie,Z,K)}Y>ae?kt(I,z,q,!0,!1,te):w(b,x,W,z,q,ie,Z,K,te)},cn=(I,b,x,W,z,q,ie,Z,K)=>{let Y=0;const ae=b.length;let te=I.length-1,he=ae-1;for(;Y<=te&&Y<=he;){const ce=I[Y],_e=b[Y]=K?bs(b[Y]):Ln(b[Y]);if(Er(ce,_e))A(ce,_e,x,null,z,q,ie,Z,K);else break;Y++}for(;Y<=te&&Y<=he;){const ce=I[te],_e=b[he]=K?bs(b[he]):Ln(b[he]);if(Er(ce,_e))A(ce,_e,x,null,z,q,ie,Z,K);else break;te--,he--}if(Y>te){if(Y<=he){const ce=he+1,_e=ce<ae?b[ce].el:W;for(;Y<=he;)A(null,b[Y]=K?bs(b[Y]):Ln(b[Y]),x,_e,z,q,ie,Z,K),Y++}}else if(Y>he)for(;Y<=te;)Le(I[Y],z,q,!0),Y++;else{const ce=Y,_e=Y,He=new Map;for(Y=_e;Y<=he;Y++){const ye=b[Y]=K?bs(b[Y]):Ln(b[Y]);ye.key!=null&&He.set(ye.key,Y)}let Be,H=0;const k=he-_e+1;let B=!1,ne=0;const ue=new Array(k);for(Y=0;Y<k;Y++)ue[Y]=0;for(Y=ce;Y<=te;Y++){const ye=I[Y];if(H>=k){Le(ye,z,q,!0);continue}let we;if(ye.key!=null)we=He.get(ye.key);else for(Be=_e;Be<=he;Be++)if(ue[Be-_e]===0&&Er(ye,b[Be])){we=Be;break}we===void 0?Le(ye,z,q,!0):(ue[we-_e]=Y+1,we>=ne?ne=we:B=!0,A(ye,b[we],x,null,z,q,ie,Z,K),H++)}const de=B?i0(ue):xi;for(Be=de.length-1,Y=k-1;Y>=0;Y--){const ye=_e+Y,we=b[ye],Ge=b[ye+1],gt=ye+1<ae?Ge.el||Ge.placeholder:W;ue[Y]===0?A(null,we,x,gt,z,q,ie,Z,K):B&&(Be<0||Y!==de[Be]?Pt(we,x,gt,2):Be--)}}},Pt=(I,b,x,W,z=null)=>{const{el:q,type:ie,transition:Z,children:K,shapeFlag:Y}=I;if(Y&6){Pt(I.component.subTree,b,x,W);return}if(Y&128){I.suspense.move(b,x,W);return}if(Y&64){ie.move(I,b,x,fe);return}if(ie===ke){s(q,b,x);for(let te=0;te<K.length;te++)Pt(K[te],b,x,W);s(I.anchor,b,x);return}if(ie===qo){j(I,b,x);return}if(W!==2&&Y&1&&Z)if(W===0)Z.beforeEnter(q),s(q,b,x),fn(()=>Z.enter(q),z);else{const{leave:te,delayLeave:he,afterLeave:ce}=Z,_e=()=>{I.ctx.isUnmounted?i(q):s(q,b,x)},He=()=>{q._isLeaving&&q[CA](!0),te(q,()=>{_e(),ce&&ce()})};he?he(q,_e,He):He()}else s(q,b,x)},Le=(I,b,x,W=!1,z=!1)=>{const{type:q,props:ie,ref:Z,children:K,dynamicChildren:Y,shapeFlag:ae,patchFlag:te,dirs:he,cacheIndex:ce}=I;if(te===-2&&(z=!1),Z!=null&&(cs(),Mr(Z,null,x,I,!0),us()),ce!=null&&(b.renderCache[ce]=void 0),ae&256){b.ctx.deactivate(I);return}const _e=ae&1&&he,He=!Or(I);let Be;if(He&&(Be=ie&&ie.onVnodeBeforeUnmount)&&Mn(Be,b,I),ae&6)un(I.component,x,W);else{if(ae&128){I.suspense.unmount(x,W);return}_e&&Js(I,null,b,"beforeUnmount"),ae&64?I.type.remove(I,b,x,fe,W):Y&&!Y.hasOnce&&(q!==ke||te>0&&te&64)?kt(Y,b,x,!1,!0):(q===ke&&te&384||!z&&ae&16)&&kt(K,b,x),W&&ht(I)}(He&&(Be=ie&&ie.onVnodeUnmounted)||_e)&&fn(()=>{Be&&Mn(Be,b,I),_e&&Js(I,null,b,"unmounted")},x)},ht=I=>{const{type:b,el:x,anchor:W,transition:z}=I;if(b===ke){sn(x,W);return}if(b===qo){$(I);return}const q=()=>{i(x),z&&!z.persisted&&z.afterLeave&&z.afterLeave()};if(I.shapeFlag&1&&z&&!z.persisted){const{leave:ie,delayLeave:Z}=z,K=()=>ie(x,q);Z?Z(I.el,q,K):K()}else q()},sn=(I,b)=>{let x;for(;I!==b;)x=m(I),i(I),I=x;i(b)},un=(I,b,x)=>{const{bum:W,scope:z,job:q,subTree:ie,um:Z,m:K,a:Y}=I;Od(K),Od(Y),W&&jo(W),z.stop(),q&&(q.flags|=8,Le(ie,I,b,x)),Z&&fn(Z,b),fn(()=>{I.isUnmounted=!0},b)},kt=(I,b,x,W=!1,z=!1,q=0)=>{for(let ie=q;ie<I.length;ie++)Le(I[ie],b,x,W,z)},G=I=>{if(I.shapeFlag&6)return G(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const b=m(I.anchor||I.el),x=b&&b[EA];return x?m(x):b};let re=!1;const ee=(I,b,x)=>{I==null?b._vnode&&Le(b._vnode,null,null,!0):A(b._vnode||null,I,b,null,null,null,x),b._vnode=I,re||(re=!0,Sd(),Cg(),re=!1)},fe={p:A,um:Le,m:Pt,r:ht,mt:Ke,mc:w,pc:Ce,pbc:P,n:G,o:t};return{render:ee,hydrate:void 0,createApp:zA(ee)}}function Ml({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Xs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function s0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function jg(t,e,n=!1){const s=t.children,i=e.children;if(Ae(s)&&Ae(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=bs(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&jg(o,l)),l.type===Qa&&l.patchFlag!==-1&&(l.el=o.el),l.type===Bs&&!l.el&&(l.el=o.el)}}function i0(t){const e=t.slice(),n=[0];let s,i,r,o,l;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(i=n[n.length-1],t[i]<u){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<u?r=l+1:o=l;u<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Gg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Gg(e)}function Od(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const r0=Symbol.for("v-scx"),o0=()=>Fn(r0);function as(t,e,n){return qg(t,e,n)}function qg(t,e,n=Xe){const{immediate:s,deep:i,flush:r,once:o}=n,l=Wt({},n),c=e&&s||!e&&r!=="post";let u;if(Xr){if(r==="sync"){const _=o0();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=Bn,_.resume=Bn,_.pause=Bn,_}}const d=qt;l.call=(_,y,A)=>Qn(_,d,y,A);let p=!1;r==="post"?l.scheduler=_=>{fn(_,d&&d.suspense)}:r!=="sync"&&(p=!0,l.scheduler=(_,y)=>{y?_():nu(_)}),l.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,d&&(_.id=d.uid,_.i=d))};const m=vA(t,e,l);return Xr&&(u?u.push(m):c&&m()),m}function a0(t,e,n){const s=this.proxy,i=wt(t)?t.includes(".")?Qg(s,t):()=>s[t]:t.bind(s,s);let r;Re(e)?r=e:(r=e.handler,n=e);const o=po(this),l=qg(i,r.bind(s),n);return o(),l}function Qg(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const l0=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${En(e)}Modifiers`]||t[`${gi(e)}Modifiers`];function c0(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Xe;let i=n;const r=e.startsWith("update:"),o=r&&l0(s,e.slice(7));o&&(o.trim&&(i=n.map(d=>wt(d)?d.trim():d)),o.number&&(i=n.map(ia)));let l,c=s[l=Rl(e)]||s[l=Rl(En(e))];!c&&r&&(c=s[l=Rl(gi(e))]),c&&Qn(c,t,6,i);const u=s[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Qn(u,t,6,i)}}const u0=new WeakMap;function Wg(t,e,n=!1){const s=n?u0:e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!Re(t)){const c=u=>{const d=Wg(u,e,!0);d&&(l=!0,Wt(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(et(t)&&s.set(t,null),null):(Ae(r)?r.forEach(c=>o[c]=null):Wt(o,r),et(t)&&s.set(t,o),o)}function qa(t,e){return!t||!Ba(e)?!1:(e=e.slice(2).replace(/Once$/,""),We(t,e[0].toLowerCase()+e.slice(1))||We(t,gi(e))||We(t,e))}function Vd(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:c,render:u,renderCache:d,props:p,data:m,setupState:_,ctx:y,inheritAttrs:A}=t,C=la(t);let L,Q;try{if(n.shapeFlag&4){const $=i||s,oe=$;L=Ln(u.call(oe,$,d,p,_,m,y)),Q=l}else{const $=e;L=Ln($.length>1?$(p,{attrs:l,slots:o,emit:c}):$(p,null)),Q=e.props?l:h0(l)}}catch($){Lr.length=0,ja($,t,1),L=be(Bs)}let j=L;if(Q&&A!==!1){const $=Object.keys(Q),{shapeFlag:oe}=j;$.length&&oe&7&&(r&&$.some(Gc)&&(Q=d0(Q,r)),j=Hi(j,Q,!1,!0))}return n.dirs&&(j=Hi(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&su(j,n.transition),L=j,la(C),L}const h0=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ba(n))&&((e||(e={}))[n]=t[n]);return e},d0=(t,e)=>{const n={};for(const s in t)(!Gc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function f0(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:c}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Ld(s,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(o[m]!==s[m]&&!qa(u,m))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Ld(s,o,u):!0:!!o;return!1}function Ld(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!qa(n,r))return!0}return!1}function p0({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const zg=t=>t.__isSuspense;function g0(t,e){e&&e.pendingBranch?Ae(t)?e.effects.push(...t):e.effects.push(t):IA(t)}const ke=Symbol.for("v-fgt"),Qa=Symbol.for("v-txt"),Bs=Symbol.for("v-cmt"),qo=Symbol.for("v-stc"),Lr=[];let gn=null;function O(t=!1){Lr.push(gn=t?null:[])}function m0(){Lr.pop(),gn=Lr[Lr.length-1]||null}let Yr=1;function ha(t,e=!1){Yr+=t,t<0&&gn&&e&&(gn.hasOnce=!0)}function Kg(t){return t.dynamicChildren=Yr>0?gn||xi:null,m0(),Yr>0&&gn&&gn.push(t),t}function V(t,e,n,s,i,r){return Kg(h(t,e,n,s,i,r,!0))}function Yg(t,e,n,s,i){return Kg(be(t,e,n,s,i,!0))}function da(t){return t?t.__v_isVNode===!0:!1}function Er(t,e){return t.type===e.type&&t.key===e.key}const Jg=({key:t})=>t??null,Qo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?wt(t)||Qt(t)||Re(t)?{i:pn,r:t,k:e,f:!!n}:t:null);function h(t,e=null,n=null,s=0,i=null,r=t===ke?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Jg(e),ref:e&&Qo(e),scopeId:Sg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:pn};return l?(ou(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=wt(n)?8:16),Yr>0&&!o&&gn&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&gn.push(c),c}const be=_0;function _0(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===FA)&&(t=Bs),da(t)){const l=Hi(t,e,!0);return n&&ou(l,n),Yr>0&&!r&&gn&&(l.shapeFlag&6?gn[gn.indexOf(t)]=l:gn.push(l)),l.patchFlag=-2,l}if(k0(t)&&(t=t.__vccOpts),e){e=v0(e);let{class:l,style:c}=e;l&&!wt(l)&&(e.class=De(l)),et(c)&&(eu(c)&&!Ae(c)&&(c=Wt({},c)),e.style=At(c))}const o=wt(t)?1:zg(t)?128:TA(t)?64:et(t)?4:Re(t)?2:0;return h(t,e,n,s,i,o,r,!0)}function v0(t){return t?eu(t)||Lg(t)?Wt({},t):t:null}function Hi(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:c}=t,u=e?A0(i||{},e):i,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Jg(u),ref:e&&e.ref?n&&r?Ae(r)?r.concat(Qo(e)):[r,Qo(e)]:Qo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ke?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Hi(t.ssContent),ssFallback:t.ssFallback&&Hi(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&su(d,c.clone(d)),d}function Jr(t=" ",e=0){return be(Qa,null,t,e)}function y0(t,e){const n=be(qo,null,t);return n.staticCount=e,n}function pe(t="",e=!1){return e?(O(),Yg(Bs,null,t)):be(Bs,null,t)}function Ln(t){return t==null||typeof t=="boolean"?be(Bs):Ae(t)?be(ke,null,t.slice()):da(t)?bs(t):be(Qa,null,String(t))}function bs(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Hi(t)}function ou(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(Ae(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),ou(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Lg(e)?e._ctx=pn:i===3&&pn&&(pn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Re(e)?(e={default:e,_ctx:pn},n=32):(e=String(e),s&64?(n=16,e=[Jr(e)]):n=8);t.children=e,t.shapeFlag|=n}function A0(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=De([e.class,s.class]));else if(i==="style")e.style=At([e.style,s.style]);else if(Ba(i)){const r=e[i],o=s[i];o&&r!==o&&!(Ae(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Mn(t,e,n,s=null){Qn(t,e,7,[n,s])}const I0=Mg();let w0=0;function E0(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||I0,r={uid:w0++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new qy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fg(s,i),emitsOptions:Wg(s,i),emit:null,emitted:null,propsDefaults:Xe,inheritAttrs:s.inheritAttrs,ctx:Xe,data:Xe,props:Xe,attrs:Xe,slots:Xe,refs:Xe,setupState:Xe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=c0.bind(null,r),t.ce&&t.ce(r),r}let qt=null;const T0=()=>qt||pn;let fa,hc;{const t=$a(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};fa=e("__VUE_INSTANCE_SETTERS__",n=>qt=n),hc=e("__VUE_SSR_SETTERS__",n=>Xr=n)}const po=t=>{const e=qt;return fa(t),t.scope.on(),()=>{t.scope.off(),fa(e)}},Bd=()=>{qt&&qt.scope.off(),fa(null)};function Xg(t){return t.vnode.shapeFlag&4}let Xr=!1;function C0(t,e=!1,n=!1){e&&hc(e);const{props:s,children:i}=t.vnode,r=Xg(t);KA(t,s,r,e),ZA(t,i,n||e);const o=r?b0(t,e):void 0;return e&&hc(!1),o}function b0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,$A);const{setup:s}=n;if(s){cs();const i=t.setupContext=s.length>1?R0(t):null,r=po(t),o=fo(s,t,0,[t.props,i]),l=Zp(o);if(us(),r(),(l||t.sp)&&!Or(t)&&Pg(t),l){if(o.then(Bd,Bd),e)return o.then(c=>{Fd(t,c)}).catch(c=>{ja(c,t,0)});t.asyncDep=o}else Fd(t,o)}else Zg(t)}function Fd(t,e,n){Re(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:et(e)&&(t.setupState=wg(e)),Zg(t)}function Zg(t,e,n){const s=t.type;t.render||(t.render=s.render||Bn);{const i=po(t);cs();try{HA(t)}finally{us(),i()}}}const S0={get(t,e){return jt(t,"get",""),t[e]}};function R0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,S0),slots:t.slots,emit:t.emit,expose:e}}function Wa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(wg(hA(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Vr)return Vr[n](t)},has(e,n){return n in e||n in Vr}})):t.proxy}function P0(t,e=!0){return Re(t)?t.displayName||t.name:t.name||e&&t.__name}function k0(t){return Re(t)&&"__vccOpts"in t}const Ze=(t,e)=>mA(t,e,Xr);function em(t,e,n){try{ha(-1);const s=arguments.length;return s===2?et(e)&&!Ae(e)?da(e)?be(t,null,[e]):be(t,e):be(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&da(n)&&(n=[n]),be(t,e,n))}finally{ha(1)}}const D0="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let dc;const Ud=typeof window<"u"&&window.trustedTypes;if(Ud)try{dc=Ud.createPolicy("vue",{createHTML:t=>t})}catch{}const tm=dc?t=>dc.createHTML(t):t=>t,x0="http://www.w3.org/2000/svg",N0="http://www.w3.org/1998/Math/MathML",Zn=typeof document<"u"?document:null,$d=Zn&&Zn.createElement("template"),M0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?Zn.createElementNS(x0,t):e==="mathml"?Zn.createElementNS(N0,t):n?Zn.createElement(t,{is:n}):Zn.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Zn.createTextNode(t),createComment:t=>Zn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Zn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{$d.innerHTML=tm(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=$d.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},O0=Symbol("_vtc");function V0(t,e,n){const s=t[O0];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const pa=Symbol("_vod"),nm=Symbol("_vsh"),sm={name:"show",beforeMount(t,{value:e},{transition:n}){t[pa]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Tr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Tr(t,!0),s.enter(t)):s.leave(t,()=>{Tr(t,!1)}):Tr(t,e))},beforeUnmount(t,{value:e}){Tr(t,e)}};function Tr(t,e){t.style.display=e?t[pa]:"none",t[nm]=!e}const L0=Symbol(""),B0=/(?:^|;)\s*display\s*:/;function F0(t,e,n){const s=t.style,i=wt(n);let r=!1;if(n&&!i){if(e)if(wt(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Wo(s,l,"")}else for(const o in e)n[o]==null&&Wo(s,o,"");for(const o in n)o==="display"&&(r=!0),Wo(s,o,n[o])}else if(i){if(e!==n){const o=s[L0];o&&(n+=";"+o),s.cssText=n,r=B0.test(n)}}else e&&t.removeAttribute("style");pa in t&&(t[pa]=r?s.display:"",t[nm]&&(s.display="none"))}const Hd=/\s*!important$/;function Wo(t,e,n){if(Ae(n))n.forEach(s=>Wo(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=U0(t,e);Hd.test(n)?t.setProperty(gi(s),n.replace(Hd,""),"important"):t[s]=n}}const jd=["Webkit","Moz","ms"],Ol={};function U0(t,e){const n=Ol[e];if(n)return n;let s=En(e);if(s!=="filter"&&s in t)return Ol[e]=s;s=Ua(s);for(let i=0;i<jd.length;i++){const r=jd[i]+s;if(r in t)return Ol[e]=r}return e}const Gd="http://www.w3.org/1999/xlink";function qd(t,e,n,s,i,r=jy(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Gd,e.slice(6,e.length)):t.setAttributeNS(Gd,e,n):n==null||r&&!sg(n)?t.removeAttribute(e):t.setAttribute(e,r?"":qn(n)?String(n):n)}function Qd(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?tm(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=sg(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function ns(t,e,n,s){t.addEventListener(e,n,s)}function $0(t,e,n,s){t.removeEventListener(e,n,s)}const Wd=Symbol("_vei");function H0(t,e,n,s,i=null){const r=t[Wd]||(t[Wd]={}),o=r[e];if(s&&o)o.value=s;else{const[l,c]=j0(e);if(s){const u=r[e]=Q0(s,i);ns(t,l,u,c)}else o&&($0(t,l,o,c),r[e]=void 0)}}const zd=/(?:Once|Passive|Capture)$/;function j0(t){let e;if(zd.test(t)){e={};let s;for(;s=t.match(zd);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):gi(t.slice(2)),e]}let Vl=0;const G0=Promise.resolve(),q0=()=>Vl||(G0.then(()=>Vl=0),Vl=Date.now());function Q0(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Qn(W0(s,n.value),e,5,[s])};return n.value=t,n.attached=q0(),n}function W0(t,e){if(Ae(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Kd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,z0=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?V0(t,s,o):e==="style"?F0(t,n,s):Ba(e)?Gc(e)||H0(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):K0(t,e,s,o))?(Qd(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&qd(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!wt(s))?Qd(t,En(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),qd(t,e,s,o))};function K0(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Kd(e)&&Re(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Kd(e)&&wt(n)?!1:e in t}const Fs=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Ae(e)?n=>jo(e,n):e};function Y0(t){t.target.composing=!0}function Yd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const In=Symbol("_assign"),oi={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[In]=Fs(i);const r=s||i.props&&i.props.type==="number";ns(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=ia(l)),t[In](l)}),n&&ns(t,"change",()=>{t.value=t.value.trim()}),e||(ns(t,"compositionstart",Y0),ns(t,"compositionend",Yd),ns(t,"change",Yd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[In]=Fs(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?ia(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===c)||(t.value=c))}},J0={deep:!0,created(t,e,n){t[In]=Fs(n),ns(t,"change",()=>{const s=t._modelValue,i=ji(t),r=t.checked,o=t[In];if(Ae(s)){const l=Wc(s,i),c=l!==-1;if(r&&!c)o(s.concat(i));else if(!r&&c){const u=[...s];u.splice(l,1),o(u)}}else if(Zi(s)){const l=new Set(s);r?l.add(i):l.delete(i),o(l)}else o(im(t,r))})},mounted:Jd,beforeUpdate(t,e,n){t[In]=Fs(n),Jd(t,e,n)}};function Jd(t,{value:e,oldValue:n},s){t._modelValue=e;let i;if(Ae(e))i=Wc(e,s.props.value)>-1;else if(Zi(e))i=e.has(s.props.value);else{if(e===n)return;i=ci(e,im(t,!0))}t.checked!==i&&(t.checked=i)}const X0={created(t,{value:e},n){t.checked=ci(e,n.props.value),t[In]=Fs(n),ns(t,"change",()=>{t[In](ji(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t[In]=Fs(s),e!==n&&(t.checked=ci(e,s.props.value))}},Z0={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=Zi(e);ns(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ia(ji(o)):ji(o));t[In](t.multiple?i?new Set(r):r:r[0]),t._assigning=!0,tu(()=>{t._assigning=!1})}),t[In]=Fs(s)},mounted(t,{value:e}){Xd(t,e)},beforeUpdate(t,e,n){t[In]=Fs(n)},updated(t,{value:e}){t._assigning||Xd(t,e)}};function Xd(t,e){const n=t.multiple,s=Ae(e);if(!(n&&!s&&!Zi(e))){for(let i=0,r=t.options.length;i<r;i++){const o=t.options[i],l=ji(o);if(n)if(s){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=Wc(e,l)>-1}else o.selected=e.has(l);else if(ci(ji(o),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ji(t){return"_value"in t?t._value:t.value}function im(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const rm={created(t,e,n){Vo(t,e,n,null,"created")},mounted(t,e,n){Vo(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){Vo(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){Vo(t,e,n,s,"updated")}};function eI(t,e){switch(t){case"SELECT":return Z0;case"TEXTAREA":return oi;default:switch(e){case"checkbox":return J0;case"radio":return X0;default:return oi}}}function Vo(t,e,n,s,i){const o=eI(t.tagName,n.props&&n.props.type)[i];o&&o(t,e,n,s)}const tI=["ctrl","shift","alt","meta"],nI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>tI.some(n=>t[`${n}Key`]&&!e.includes(n))},Br=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=((i,...r)=>{for(let o=0;o<e.length;o++){const l=nI[e[o]];if(l&&l(i,e))return}return t(i,...r)}))},sI=Wt({patchProp:z0},M0);let Zd;function iI(){return Zd||(Zd=t0(sI))}const rI=((...t)=>{const e=iI().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=aI(s);if(!i)return;const r=e._component;!Re(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,oI(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e});function oI(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function aI(t){return wt(t)?document.querySelector(t):t}/*!
 * vue-router v4.6.0
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Si=typeof document<"u";function om(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function lI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&om(t.default)}const qe=Object.assign;function Ll(t,e){const n={};for(const s in e){const i=e[s];n[s]=Pn(i)?i.map(t):t(i)}return n}const Fr=()=>{},Pn=Array.isArray;function ef(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}const am=/#/g,cI=/&/g,uI=/\//g,hI=/=/g,dI=/\?/g,lm=/\+/g,fI=/%5B/g,pI=/%5D/g,cm=/%5E/g,gI=/%60/g,um=/%7B/g,mI=/%7C/g,hm=/%7D/g,_I=/%20/g;function au(t){return t==null?"":encodeURI(""+t).replace(mI,"|").replace(fI,"[").replace(pI,"]")}function vI(t){return au(t).replace(um,"{").replace(hm,"}").replace(cm,"^")}function fc(t){return au(t).replace(lm,"%2B").replace(_I,"+").replace(am,"%23").replace(cI,"%26").replace(gI,"`").replace(um,"{").replace(hm,"}").replace(cm,"^")}function yI(t){return fc(t).replace(hI,"%3D")}function AI(t){return au(t).replace(am,"%23").replace(dI,"%3F")}function II(t){return AI(t).replace(uI,"%2F")}function Zr(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const wI=/\/$/,EI=t=>t.replace(wI,"");function Bl(t,e,n="/"){let s,i={},r="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return c=l>=0&&c>l?-1:c,c>=0&&(s=e.slice(0,c),r=e.slice(c,l>0?l:e.length),i=t(r)),l>=0&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=SI(s??e,n),{fullPath:s+r+o,path:s,query:i,hash:Zr(o)}}function TI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function tf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function CI(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Gi(e.matched[s],n.matched[i])&&dm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Gi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function dm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!bI(t[n],e[n]))return!1;return!0}function bI(t,e){return Pn(t)?nf(t,e):Pn(e)?nf(e,t):t===e}function nf(t,e){return Pn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function SI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const Es={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let pc=(function(t){return t.pop="pop",t.push="push",t})({}),Fl=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function RI(t){if(!t)if(Si){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),EI(t)}const PI=/^[^#]+#/;function kI(t,e){return t.replace(PI,"#")+e}function DI(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const za=()=>({left:window.scrollX,top:window.scrollY});function xI(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=DI(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function sf(t,e){return(history.state?history.state.position-e:-1)+t}const gc=new Map;function NI(t,e){gc.set(t,e)}function MI(t){const e=gc.get(t);return gc.delete(t),e}function OI(t){return typeof t=="string"||t&&typeof t=="object"}function fm(t){return typeof t=="string"||typeof t=="symbol"}let pt=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const pm=Symbol("");pt.MATCHER_NOT_FOUND+"",pt.NAVIGATION_GUARD_REDIRECT+"",pt.NAVIGATION_ABORTED+"",pt.NAVIGATION_CANCELLED+"",pt.NAVIGATION_DUPLICATED+"";function qi(t,e){return qe(new Error,{type:t,[pm]:!0},e)}function Xn(t,e){return t instanceof Error&&pm in t&&(e==null||!!(t.type&e))}const VI=["params","query","hash"];function LI(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of VI)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function BI(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<n.length;++s){const i=n[s].replace(lm," "),r=i.indexOf("="),o=Zr(r<0?i:i.slice(0,r)),l=r<0?null:Zr(i.slice(r+1));if(o in e){let c=e[o];Pn(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function rf(t){let e="";for(let n in t){const s=t[n];if(n=yI(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Pn(s)?s.map(i=>i&&fc(i)):[s&&fc(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function FI(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Pn(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const UI=Symbol(""),of=Symbol(""),Ka=Symbol(""),gm=Symbol(""),mc=Symbol("");function Cr(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ss(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(qi(pt.NAVIGATION_ABORTED,{from:n,to:e})):m instanceof Error?c(m):OI(m)?c(qi(pt.NAVIGATION_GUARD_REDIRECT,{from:e,to:m})):(o&&s.enterCallbacks[i]===o&&typeof m=="function"&&o.push(m),l())},d=r(()=>t.call(s&&s.instances[i],e,n,u));let p=Promise.resolve(d);t.length<3&&(p=p.then(u)),p.catch(m=>c(m))})}function Ul(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(om(c)){const u=(c.__vccOpts||c)[e];u&&r.push(Ss(u,n,s,o,l,i))}else{let u=c();r.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=lI(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const m=(p.__vccOpts||p)[e];return m&&Ss(m,n,s,o,l,i)()}))}}return r}function $I(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(u=>Gi(u,l))?s.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>Gi(u,c))||i.push(c))}return[n,s,i]}/*!
 * vue-router v4.6.0
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let HI=()=>location.protocol+"//"+location.host;function mm(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let o=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(o);return l[0]!=="/"&&(l="/"+l),tf(l,"")}return tf(n,t)+s+i}function jI(t,e,n,s){let i=[],r=[],o=null;const l=({state:m})=>{const _=mm(t,location),y=n.value,A=e.value;let C=0;if(m){if(n.value=_,e.value=m,o&&o===y){o=null;return}C=A?m.position-A.position:0}else s(_);i.forEach(L=>{L(n.value,y,{delta:C,type:pc.pop,direction:C?C>0?Fl.forward:Fl.back:Fl.unknown})})};function c(){o=n.value}function u(m){i.push(m);const _=()=>{const y=i.indexOf(m);y>-1&&i.splice(y,1)};return r.push(_),_}function d(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(qe({},m.state,{scroll:za()}),"")}}function p(){for(const m of r)m();r=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",d),document.removeEventListener("visibilitychange",d)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",d),document.addEventListener("visibilitychange",d),{pauseListeners:c,listen:u,destroy:p}}function af(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?za():null}}function GI(t){const{history:e,location:n}=window,s={value:mm(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,u,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:HI()+t+c;try{e[d?"replaceState":"pushState"](u,"",m),i.value=u}catch(_){console.error(_),n[d?"replace":"assign"](m)}}function o(c,u){r(c,qe({},e.state,af(i.value.back,c,i.value.forward,!0),u,{position:i.value.position}),!0),s.value=c}function l(c,u){const d=qe({},i.value,e.state,{forward:c,scroll:za()});r(d.current,d,!0),r(c,qe({},af(s.value,c,null),{position:d.position+1},u),!1),s.value=c}return{location:s,state:i,push:l,replace:o}}function qI(t){t=RI(t);const e=GI(t),n=jI(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=qe({location:"",base:t,go:s,createHref:kI.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function QI(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),qI(t)}let ti=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var bt=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(bt||{});const WI={type:ti.Static,value:""},zI=/[a-zA-Z0-9_]/;function KI(t){if(!t)return[[]];if(t==="/")return[[WI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=bt.Static,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,c,u="",d="";function p(){u&&(n===bt.Static?r.push({type:ti.Static,value:u}):n===bt.Param||n===bt.ParamRegExp||n===bt.ParamRegExpEnd?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:ti.Param,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==bt.ParamRegExp){s=n,n=bt.EscapeNext;continue}switch(n){case bt.Static:c==="/"?(u&&p(),o()):c===":"?(p(),n=bt.Param):m();break;case bt.EscapeNext:m(),n=s;break;case bt.Param:c==="("?n=bt.ParamRegExp:zI.test(c)?m():(p(),n=bt.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case bt.ParamRegExp:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=bt.ParamRegExpEnd:d+=c;break;case bt.ParamRegExpEnd:p(),n=bt.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===bt.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),i}const lf="[^/]+?",YI={sensitive:!1,strict:!1,start:!0,end:!0};var Jt=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(Jt||{});const JI=/[.+*?^${}()[\]/\\]/g;function XI(t,e){const n=qe({},YI,e),s=[];let i=n.start?"^":"";const r=[];for(const u of t){const d=u.length?[]:[Jt.Root];n.strict&&!u.length&&(i+="/");for(let p=0;p<u.length;p++){const m=u[p];let _=Jt.Segment+(n.sensitive?Jt.BonusCaseSensitive:0);if(m.type===ti.Static)p||(i+="/"),i+=m.value.replace(JI,"\\$&"),_+=Jt.Static;else if(m.type===ti.Param){const{value:y,repeatable:A,optional:C,regexp:L}=m;r.push({name:y,repeatable:A,optional:C});const Q=L||lf;if(Q!==lf){_+=Jt.BonusCustomRegExp;try{`${Q}`}catch($){throw new Error(`Invalid custom RegExp for param "${y}" (${Q}): `+$.message)}}let j=A?`((?:${Q})(?:/(?:${Q}))*)`:`(${Q})`;p||(j=C&&u.length<2?`(?:/${j})`:"/"+j),C&&(j+="?"),i+=j,_+=Jt.Dynamic,C&&(_+=Jt.BonusOptional),A&&(_+=Jt.BonusRepeatable),Q===".*"&&(_+=Jt.BonusWildcard)}d.push(_)}s.push(d)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=Jt.BonusStrict}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(u){const d=u.match(o),p={};if(!d)return null;for(let m=1;m<d.length;m++){const _=d[m]||"",y=r[m-1];p[y.name]=_&&y.repeatable?_.split("/"):_}return p}function c(u){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const _ of m)if(_.type===ti.Static)d+=_.value;else if(_.type===ti.Param){const{value:y,repeatable:A,optional:C}=_,L=y in u?u[y]:"";if(Pn(L)&&!A)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const Q=Pn(L)?L.join("/"):L;if(!Q)if(C)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${y}"`);d+=Q}}return d||"/"}return{re:o,score:s,keys:r,parse:l,stringify:c}}function ZI(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===Jt.Static+Jt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Jt.Static+Jt.Segment?1:-1:0}function _m(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=ZI(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(cf(s))return 1;if(cf(i))return-1}return i.length-s.length}function cf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const ew={strict:!1,end:!0,sensitive:!1};function tw(t,e,n){const s=XI(KI(t.path),n),i=qe(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function nw(t,e){const n=[],s=new Map;e=ef(ew,e);function i(p){return s.get(p)}function r(p,m,_){const y=!_,A=hf(p);A.aliasOf=_&&_.record;const C=ef(e,p),L=[A];if("alias"in p){const $=typeof p.alias=="string"?[p.alias]:p.alias;for(const oe of $)L.push(hf(qe({},A,{components:_?_.record.components:A.components,path:oe,aliasOf:_?_.record:A})))}let Q,j;for(const $ of L){const{path:oe}=$;if(m&&oe[0]!=="/"){const Pe=m.record.path,S=Pe[Pe.length-1]==="/"?"":"/";$.path=m.record.path+(oe&&S+oe)}if(Q=tw($,m,C),_?_.alias.push(Q):(j=j||Q,j!==Q&&j.alias.push(Q),y&&p.name&&!df(Q)&&o(p.name)),vm(Q)&&c(Q),A.children){const Pe=A.children;for(let S=0;S<Pe.length;S++)r(Pe[S],Q,_&&_.children[S])}_=_||Q}return j?()=>{o(j)}:Fr}function o(p){if(fm(p)){const m=s.get(p);m&&(s.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&s.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const m=rw(p,n);n.splice(m,0,p),p.record.name&&!df(p)&&s.set(p.record.name,p)}function u(p,m){let _,y={},A,C;if("name"in p&&p.name){if(_=s.get(p.name),!_)throw qi(pt.MATCHER_NOT_FOUND,{location:p});C=_.record.name,y=qe(uf(m.params,_.keys.filter(j=>!j.optional).concat(_.parent?_.parent.keys.filter(j=>j.optional):[]).map(j=>j.name)),p.params&&uf(p.params,_.keys.map(j=>j.name))),A=_.stringify(y)}else if(p.path!=null)A=p.path,_=n.find(j=>j.re.test(A)),_&&(y=_.parse(A),C=_.record.name);else{if(_=m.name?s.get(m.name):n.find(j=>j.re.test(m.path)),!_)throw qi(pt.MATCHER_NOT_FOUND,{location:p,currentLocation:m});C=_.record.name,y=qe({},m.params,p.params),A=_.stringify(y)}const L=[];let Q=_;for(;Q;)L.unshift(Q.record),Q=Q.parent;return{name:C,path:A,params:y,matched:L,meta:iw(L)}}t.forEach(p=>r(p));function d(){n.length=0,s.clear()}return{addRoute:r,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:i}}function uf(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function hf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:sw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function sw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function df(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function iw(t){return t.reduce((e,n)=>qe(e,n.meta),{})}function rw(t,e){let n=0,s=e.length;for(;n!==s;){const r=n+s>>1;_m(t,e[r])<0?s=r:n=r+1}const i=ow(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function ow(t){let e=t;for(;e=e.parent;)if(vm(e)&&_m(t,e)===0)return e}function vm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function ff(t){const e=Fn(Ka),n=Fn(gm),s=Ze(()=>{const c=Bt(t.to);return e.resolve(c)}),i=Ze(()=>{const{matched:c}=s.value,{length:u}=c,d=c[u-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(Gi.bind(null,d));if(m>-1)return m;const _=pf(c[u-2]);return u>1&&pf(d)===_&&p[p.length-1].path!==_?p.findIndex(Gi.bind(null,c[u-2])):m}),r=Ze(()=>i.value>-1&&hw(n.params,s.value.params)),o=Ze(()=>i.value>-1&&i.value===n.matched.length-1&&dm(n.params,s.value.params));function l(c={}){if(uw(c)){const u=e[Bt(t.replace)?"replace":"push"](Bt(t.to)).catch(Fr);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:Ze(()=>s.value.href),isActive:r,isExactActive:o,navigate:l}}function aw(t){return t.length===1?t[0]:t}const lw=Rg({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:ff,setup(t,{slots:e}){const n=ho(ff(t)),{options:s}=Fn(Ka),i=Ze(()=>({[gf(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[gf(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&aw(e.default(n));return t.custom?r:em("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),cw=lw;function uw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function hw(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Pn(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function pf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const gf=(t,e,n)=>t??e??n,dw=Rg({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Fn(mc),i=Ze(()=>t.route||s.value),r=Fn(of,0),o=Ze(()=>{let u=Bt(r);const{matched:d}=i.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),l=Ze(()=>i.value.matched[o.value]);Go(of,Ze(()=>o.value+1)),Go(UI,l),Go(mc,i);const c=N();return as(()=>[c.value,l.value,t.name],([u,d,p],[m,_,y])=>{d&&(d.instances[p]=u,_&&_!==d&&u&&u===m&&(d.leaveGuards.size||(d.leaveGuards=_.leaveGuards),d.updateGuards.size||(d.updateGuards=_.updateGuards))),u&&d&&(!_||!Gi(d,_)||!m)&&(d.enterCallbacks[p]||[]).forEach(A=>A(u))},{flush:"post"}),()=>{const u=i.value,d=t.name,p=l.value,m=p&&p.components[d];if(!m)return mf(n.default,{Component:m,route:u});const _=p.props[d],y=_?_===!0?u.params:typeof _=="function"?_(u):_:null,C=em(m,qe({},y,e,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return mf(n.default,{Component:C,route:u})||C}}});function mf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const fw=dw;function pw(t){const e=nw(t.routes,t),n=t.parseQuery||BI,s=t.stringifyQuery||rf,i=t.history,r=Cr(),o=Cr(),l=Cr(),c=dA(Es);let u=Es;Si&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Ll.bind(null,G=>""+G),p=Ll.bind(null,II),m=Ll.bind(null,Zr);function _(G,re){let ee,fe;return fm(G)?(ee=e.getRecordMatcher(G),fe=re):fe=G,e.addRoute(fe,ee)}function y(G){const re=e.getRecordMatcher(G);re&&e.removeRoute(re)}function A(){return e.getRoutes().map(G=>G.record)}function C(G){return!!e.getRecordMatcher(G)}function L(G,re){if(re=qe({},re||c.value),typeof G=="string"){const x=Bl(n,G,re.path),W=e.resolve({path:x.path},re),z=i.createHref(x.fullPath);return qe(x,W,{params:m(W.params),hash:Zr(x.hash),redirectedFrom:void 0,href:z})}let ee;if(G.path!=null)ee=qe({},G,{path:Bl(n,G.path,re.path).path});else{const x=qe({},G.params);for(const W in x)x[W]==null&&delete x[W];ee=qe({},G,{params:p(x)}),re.params=p(re.params)}const fe=e.resolve(ee,re),ge=G.hash||"";fe.params=d(m(fe.params));const I=TI(s,qe({},G,{hash:vI(ge),path:fe.path})),b=i.createHref(I);return qe({fullPath:I,hash:ge,query:s===rf?FI(G.query):G.query||{}},fe,{redirectedFrom:void 0,href:b})}function Q(G){return typeof G=="string"?Bl(n,G,c.value.path):qe({},G)}function j(G,re){if(u!==G)return qi(pt.NAVIGATION_CANCELLED,{from:re,to:G})}function $(G){return S(G)}function oe(G){return $(qe(Q(G),{replace:!0}))}function Pe(G,re){const ee=G.matched[G.matched.length-1];if(ee&&ee.redirect){const{redirect:fe}=ee;let ge=typeof fe=="function"?fe(G,re):fe;return typeof ge=="string"&&(ge=ge.includes("?")||ge.includes("#")?ge=Q(ge):{path:ge},ge.params={}),qe({query:G.query,hash:G.hash,params:ge.path!=null?{}:G.params},ge)}}function S(G,re){const ee=u=L(G),fe=c.value,ge=G.state,I=G.force,b=G.replace===!0,x=Pe(ee,fe);if(x)return S(qe(Q(x),{state:typeof x=="object"?qe({},ge,x.state):ge,force:I,replace:b}),re||ee);const W=ee;W.redirectedFrom=re;let z;return!I&&CI(s,fe,ee)&&(z=qi(pt.NAVIGATION_DUPLICATED,{to:W,from:fe}),Pt(fe,fe,!0,!1)),(z?Promise.resolve(z):P(W,fe)).catch(q=>Xn(q)?Xn(q,pt.NAVIGATION_GUARD_REDIRECT)?q:cn(q):Ce(q,W,fe)).then(q=>{if(q){if(Xn(q,pt.NAVIGATION_GUARD_REDIRECT))return S(qe({replace:b},Q(q.to),{state:typeof q.to=="object"?qe({},ge,q.to.state):ge,force:I}),re||W)}else q=D(W,fe,!0,b,ge);return R(W,fe,q),q})}function w(G,re){const ee=j(G,re);return ee?Promise.reject(ee):Promise.resolve()}function T(G){const re=sn.values().next().value;return re&&typeof re.runWithContext=="function"?re.runWithContext(G):G()}function P(G,re){let ee;const[fe,ge,I]=$I(G,re);ee=Ul(fe.reverse(),"beforeRouteLeave",G,re);for(const x of fe)x.leaveGuards.forEach(W=>{ee.push(Ss(W,G,re))});const b=w.bind(null,G,re);return ee.push(b),kt(ee).then(()=>{ee=[];for(const x of r.list())ee.push(Ss(x,G,re));return ee.push(b),kt(ee)}).then(()=>{ee=Ul(ge,"beforeRouteUpdate",G,re);for(const x of ge)x.updateGuards.forEach(W=>{ee.push(Ss(W,G,re))});return ee.push(b),kt(ee)}).then(()=>{ee=[];for(const x of I)if(x.beforeEnter)if(Pn(x.beforeEnter))for(const W of x.beforeEnter)ee.push(Ss(W,G,re));else ee.push(Ss(x.beforeEnter,G,re));return ee.push(b),kt(ee)}).then(()=>(G.matched.forEach(x=>x.enterCallbacks={}),ee=Ul(I,"beforeRouteEnter",G,re,T),ee.push(b),kt(ee))).then(()=>{ee=[];for(const x of o.list())ee.push(Ss(x,G,re));return ee.push(b),kt(ee)}).catch(x=>Xn(x,pt.NAVIGATION_CANCELLED)?x:Promise.reject(x))}function R(G,re,ee){l.list().forEach(fe=>T(()=>fe(G,re,ee)))}function D(G,re,ee,fe,ge){const I=j(G,re);if(I)return I;const b=re===Es,x=Si?history.state:{};ee&&(fe||b?i.replace(G.fullPath,qe({scroll:b&&x&&x.scroll},ge)):i.push(G.fullPath,ge)),c.value=G,Pt(G,re,ee,b),cn()}let E;function Ke(){E||(E=i.listen((G,re,ee)=>{if(!un.listening)return;const fe=L(G),ge=Pe(fe,un.currentRoute.value);if(ge){S(qe(ge,{replace:!0,force:!0}),fe).catch(Fr);return}u=fe;const I=c.value;Si&&NI(sf(I.fullPath,ee.delta),za()),P(fe,I).catch(b=>Xn(b,pt.NAVIGATION_ABORTED|pt.NAVIGATION_CANCELLED)?b:Xn(b,pt.NAVIGATION_GUARD_REDIRECT)?(S(qe(Q(b.to),{force:!0}),fe).then(x=>{Xn(x,pt.NAVIGATION_ABORTED|pt.NAVIGATION_DUPLICATED)&&!ee.delta&&ee.type===pc.pop&&i.go(-1,!1)}).catch(Fr),Promise.reject()):(ee.delta&&i.go(-ee.delta,!1),Ce(b,fe,I))).then(b=>{b=b||D(fe,I,!1),b&&(ee.delta&&!Xn(b,pt.NAVIGATION_CANCELLED)?i.go(-ee.delta,!1):ee.type===pc.pop&&Xn(b,pt.NAVIGATION_ABORTED|pt.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),R(fe,I,b)}).catch(Fr)}))}let vt=Cr(),st=Cr(),Ve;function Ce(G,re,ee){cn(G);const fe=st.list();return fe.length?fe.forEach(ge=>ge(G,re,ee)):console.error(G),Promise.reject(G)}function Mt(){return Ve&&c.value!==Es?Promise.resolve():new Promise((G,re)=>{vt.add([G,re])})}function cn(G){return Ve||(Ve=!G,Ke(),vt.list().forEach(([re,ee])=>G?ee(G):re()),vt.reset()),G}function Pt(G,re,ee,fe){const{scrollBehavior:ge}=t;if(!Si||!ge)return Promise.resolve();const I=!ee&&MI(sf(G.fullPath,0))||(fe||!ee)&&history.state&&history.state.scroll||null;return tu().then(()=>ge(G,re,I)).then(b=>b&&xI(b)).catch(b=>Ce(b,G,re))}const Le=G=>i.go(G);let ht;const sn=new Set,un={currentRoute:c,listening:!0,addRoute:_,removeRoute:y,clearRoutes:e.clearRoutes,hasRoute:C,getRoutes:A,resolve:L,options:t,push:$,replace:oe,go:Le,back:()=>Le(-1),forward:()=>Le(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:st.add,isReady:Mt,install(G){G.component("RouterLink",cw),G.component("RouterView",fw),G.config.globalProperties.$router=un,Object.defineProperty(G.config.globalProperties,"$route",{enumerable:!0,get:()=>Bt(c)}),Si&&!ht&&c.value===Es&&(ht=!0,$(i.location).catch(fe=>{}));const re={};for(const fe in Es)Object.defineProperty(re,fe,{get:()=>c.value[fe],enumerable:!0});G.provide(Ka,un),G.provide(gm,Ag(re)),G.provide(mc,c);const ee=G.unmount;sn.add(G),G.unmount=function(){sn.delete(G),sn.size<1&&(u=Es,E&&E(),E=null,c.value=Es,ht=!1,Ve=!1),ee()}}};function kt(G){return G.reduce((re,ee)=>re.then(()=>T(ee)),Promise.resolve())}return un}function en(){return Fn(Ka)}const gw={__name:"App",setup(t){en();const e=N(null),n=N(!1),s=()=>{const r=localStorage.getItem("soundEnabled");return r!==null?r==="true":!0},i=()=>{e.value&&(s()?n.value||e.value.play().then(()=>{n.value=!0}).catch(()=>{}):(e.value.pause(),n.value=!1))};return Et(()=>{try{e.value=new Audio,e.value.src=new URL("@/assets/audio/bgm.mp3",import.meta.url).href,e.value.loop=!0,e.value.volume=.5,i();const r=()=>{e.value&&s()&&!n.value&&e.value.play().then(()=>{n.value=!0}).catch(()=>{})};document.addEventListener("click",r,{once:!0}),document.addEventListener("touchstart",r,{once:!0}),window.addEventListener("soundSettingChanged",i)}catch{console.log("BGM 파일을 찾을 수 없습니다.")}}),er(()=>{e.value&&(e.value.pause(),e.value=null),window.removeEventListener("soundSettingChanged",i)}),(r,o)=>{const l=BA("router-view");return O(),Yg(l)}}},mw="/tdl/assets/tdl_splashLogo-b8p6ictM.png",_w="/tdl/assets/tdl_splash_bg-B78B8oeM.png",Tt=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},vw={class:"loading-screen"},yw={class:"loading-bar-container"},Aw={class:"loading-bar-track"},Iw={__name:"LoadingScreen",setup(t){const e=en(),n=N(0);return Et(()=>{const r=.5333333333333333,o=setInterval(()=>{n.value+=r,n.value>=100&&(n.value=100,clearInterval(o),setTimeout(()=>{e.push("/login")},200))},16)}),(s,i)=>(O(),V("div",vw,[i[0]||(i[0]=h("div",{class:"logo-top"},[h("img",{src:mw,alt:"TDL Logo",class:"splash-logo"})],-1)),h("div",yw,[h("div",Aw,[h("div",{class:"loading-bar-fill",style:At({width:n.value+"%"})},null,4)])]),i[1]||(i[1]=h("div",{class:"splash-bg"},[h("img",{src:_w,alt:"Splash Background",class:"splash-bg-image"})],-1))]))}},ww=Tt(Iw,[["__scopeId","data-v-1a145a87"]]),_n=ho({isLoggedIn:!1,walletAddress:"",userBalance:"0 ETH",nftCount:0,gameLevel:1,isLoading:!1}),ym=()=>{const t=(i,r)=>{_n.isLoggedIn=!0,_n.walletAddress=i,_n.userBalance=r},e=i=>{_n.nftCount=i.nftCount||0,_n.gameLevel=i.gameLevel||1},n=i=>{_n.isLoading=i},s=()=>{_n.isLoggedIn=!1,_n.walletAddress="",_n.userBalance="0 ETH",_n.nftCount=0,_n.gameLevel=1};return{state:Ew(_n),setWalletConnected:t,setUserData:e,setLoading:n,logout:s}},Ew=t=>new Proxy(t,{get(e,n){return e[n]},set(){return console.warn("직접 상태 수정은 금지됩니다. 액션을 사용하세요."),!1}}),Tw=()=>{};var _f={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Cw=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Im={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,d=r>>2,p=(r&3)<<4|l>>4;let m=(l&15)<<2|u>>6,_=u&63;c||(_=64,o||(m=64)),s.push(n[d],n[p],n[m],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Am(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Cw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||u==null||p==null)throw new bw;const m=r<<2|l>>4;if(s.push(m),u!==64){const _=l<<4&240|u>>2;if(s.push(_),p!==64){const y=u<<6&192|p;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class bw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Sw=function(t){const e=Am(t);return Im.encodeByteArray(e,!0)},ga=function(t){return Sw(t).replace(/\./g,"")},wm=function(t){try{return Im.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Rw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Pw=()=>Rw().__FIREBASE_DEFAULTS__,kw=()=>{if(typeof process>"u"||typeof _f>"u")return;const t=_f.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Dw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&wm(t[1]);return e&&JSON.parse(e)},Ya=()=>{try{return Tw()||Pw()||kw()||Dw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Em=t=>Ya()?.emulatorHosts?.[t],xw=t=>{const e=Em(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Tm=()=>Ya()?.config,Cm=t=>Ya()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function tr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function bm(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function Mw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ga(JSON.stringify(n)),ga(JSON.stringify(o)),""].join(".")}const Ur={};function Ow(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ur))Ur[e]?t.emulator.push(e):t.prod.push(e);return t}function Vw(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let vf=!1;function Sm(t,e){if(typeof window>"u"||typeof document>"u"||!tr(window.location.host)||Ur[t]===e||Ur[t]||vf)return;Ur[t]=e;function n(m){return`__firebase__banner__${m}`}const s="__firebase__banner",r=Ow().prod.length>0;function o(){const m=document.getElementById(s);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,_){m.setAttribute("width","24"),m.setAttribute("id",_),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{vf=!0,o()},m}function d(m,_){m.setAttribute("id",_),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=Vw(s),_=n("text"),y=document.getElementById(_)||document.createElement("span"),A=n("learnmore"),C=document.getElementById(A)||document.createElement("a"),L=n("preprendIcon"),Q=document.getElementById(L)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const j=m.element;l(j),d(C,A);const $=u();c(Q,L),j.append(Q,y,C,$),document.body.appendChild(j)}r?(y.innerText="Preview backend disconnected.",Q.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Q.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,y.innerText="Preview backend running in this workspace."),y.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Lw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function Bw(){const t=Ya()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Fw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Rm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Uw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $w(){const t=zt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Hw(){return!Bw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Pm(){try{return typeof indexedDB=="object"}catch{return!1}}function km(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(n){e(n)}})}function jw(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw="FirebaseError";class Dn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Gw,Object.setPrototypeOf(this,Dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mi.prototype.create)}}class mi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?qw(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Dn(i,l,s)}}function qw(t,e){return t.replace(Qw,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Qw=/\{\$([^}]+)}/g;function Ww(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Us(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(yf(r)&&yf(o)){if(!Us(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function yf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function zw(t,e){const n=new Kw(t,e);return n.subscribe.bind(n)}class Kw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Yw(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=$l),i.error===void 0&&(i.error=$l),i.complete===void 0&&(i.complete=$l);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $l(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw=1e3,Xw=2,Zw=14400*1e3,e1=.5;function Af(t,e=Jw,n=Xw){const s=e*Math.pow(n,t),i=Math.round(e1*s*(Math.random()-.5)*2);return Math.min(Zw,s+i)}/**
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
 */function ln(t){return t&&t._delegate?t._delegate:t}class kn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Nw;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(s1(e))try{this.getOrInitializeService({instanceIdentifier:ei})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=ei){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ei){return this.instances.has(e)}getOptions(e=ei){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:n1(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ei){return this.component?this.component.multipleInstances?e:ei:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function n1(t){return t===ei?void 0:t}function s1(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new t1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ne||(Ne={}));const r1={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},o1=Ne.INFO,a1={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},l1=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=a1[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ja{constructor(e){this.name=e,this._logLevel=o1,this._logHandler=l1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?r1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...e),this._logHandler(this,Ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...e),this._logHandler(this,Ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...e),this._logHandler(this,Ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...e),this._logHandler(this,Ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...e),this._logHandler(this,Ne.ERROR,...e)}}const c1=(t,e)=>e.some(n=>t instanceof n);let If,wf;function u1(){return If||(If=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function h1(){return wf||(wf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dm=new WeakMap,_c=new WeakMap,xm=new WeakMap,Hl=new WeakMap,lu=new WeakMap;function d1(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Ns(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Dm.set(n,t)}).catch(()=>{}),lu.set(e,t),e}function f1(t){if(_c.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});_c.set(t,e)}let vc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _c.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ns(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function p1(t){vc=t(vc)}function g1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(jl(this),e,...n);return xm.set(s,e.sort?e.sort():[e]),Ns(s)}:h1().includes(t)?function(...e){return t.apply(jl(this),e),Ns(Dm.get(this))}:function(...e){return Ns(t.apply(jl(this),e))}}function m1(t){return typeof t=="function"?g1(t):(t instanceof IDBTransaction&&f1(t),c1(t,u1())?new Proxy(t,vc):t)}function Ns(t){if(t instanceof IDBRequest)return d1(t);if(Hl.has(t))return Hl.get(t);const e=m1(t);return e!==t&&(Hl.set(t,e),lu.set(e,t)),e}const jl=t=>lu.get(t);function Nm(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Ns(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Ns(o.result),c.oldVersion,c.newVersion,Ns(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const _1=["get","getKey","getAll","getAllKeys","count"],v1=["put","add","delete","clear"],Gl=new Map;function Ef(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gl.get(e))return Gl.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=v1.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||_1.includes(n)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&c.done]))[0]};return Gl.set(e,r),r}p1(t=>({...t,get:(e,n,s)=>Ef(e,n)||t.get(e,n,s),has:(e,n)=>!!Ef(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(A1(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function A1(t){return t.getComponent()?.type==="VERSION"}const yc="@firebase/app",Tf="0.14.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=new Ja("@firebase/app"),I1="@firebase/app-compat",w1="@firebase/analytics-compat",E1="@firebase/analytics",T1="@firebase/app-check-compat",C1="@firebase/app-check",b1="@firebase/auth",S1="@firebase/auth-compat",R1="@firebase/database",P1="@firebase/data-connect",k1="@firebase/database-compat",D1="@firebase/functions",x1="@firebase/functions-compat",N1="@firebase/installations",M1="@firebase/installations-compat",O1="@firebase/messaging",V1="@firebase/messaging-compat",L1="@firebase/performance",B1="@firebase/performance-compat",F1="@firebase/remote-config",U1="@firebase/remote-config-compat",$1="@firebase/storage",H1="@firebase/storage-compat",j1="@firebase/firestore",G1="@firebase/ai",q1="@firebase/firestore-compat",Q1="firebase",W1="12.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac="[DEFAULT]",z1={[yc]:"fire-core",[I1]:"fire-core-compat",[E1]:"fire-analytics",[w1]:"fire-analytics-compat",[C1]:"fire-app-check",[T1]:"fire-app-check-compat",[b1]:"fire-auth",[S1]:"fire-auth-compat",[R1]:"fire-rtdb",[P1]:"fire-data-connect",[k1]:"fire-rtdb-compat",[D1]:"fire-fn",[x1]:"fire-fn-compat",[N1]:"fire-iid",[M1]:"fire-iid-compat",[O1]:"fire-fcm",[V1]:"fire-fcm-compat",[L1]:"fire-perf",[B1]:"fire-perf-compat",[F1]:"fire-rc",[U1]:"fire-rc-compat",[$1]:"fire-gcs",[H1]:"fire-gcs-compat",[j1]:"fire-fst",[q1]:"fire-fst-compat",[G1]:"fire-vertex","fire-js":"fire-js",[Q1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=new Map,K1=new Map,Ic=new Map;function Cf(t,e){try{t.container.addComponent(e)}catch(n){hs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Wn(t){const e=t.name;if(Ic.has(e))return hs.debug(`There were multiple attempts to register component ${e}.`),!1;Ic.set(e,t);for(const n of ma.values())Cf(n,t);for(const n of K1.values())Cf(n,t);return!0}function _i(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Tn(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ms=new mi("app","Firebase",Y1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ms.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=W1;function Mm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:Ac,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw Ms.create("bad-app-name",{appName:String(i)});if(n||(n=Tm()),!n)throw Ms.create("no-options");const r=ma.get(i);if(r){if(Us(n,r.options)&&Us(s,r.config))return r;throw Ms.create("duplicate-app",{appName:i})}const o=new i1(i);for(const c of Ic.values())o.addComponent(c);const l=new J1(n,s,o);return ma.set(i,l),l}function cu(t=Ac){const e=ma.get(t);if(!e&&t===Ac&&Tm())return Mm();if(!e)throw Ms.create("no-app",{appName:t});return e}function wn(t,e,n){let s=z1[t]??t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hs.warn(o.join(" "));return}Wn(new kn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const X1="firebase-heartbeat-database",Z1=1,eo="firebase-heartbeat-store";let ql=null;function Om(){return ql||(ql=Nm(X1,Z1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(eo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ms.create("idb-open",{originalErrorMessage:t.message})})),ql}async function eE(t){try{const n=(await Om()).transaction(eo),s=await n.objectStore(eo).get(Vm(t));return await n.done,s}catch(e){if(e instanceof Dn)hs.warn(e.message);else{const n=Ms.create("idb-get",{originalErrorMessage:e?.message});hs.warn(n.message)}}}async function bf(t,e){try{const s=(await Om()).transaction(eo,"readwrite");await s.objectStore(eo).put(e,Vm(t)),await s.done}catch(n){if(n instanceof Dn)hs.warn(n.message);else{const s=Ms.create("idb-set",{originalErrorMessage:n?.message});hs.warn(s.message)}}}function Vm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const tE=1024,nE=30;class sE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new rE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Sf();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>nE){const i=oE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){hs.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Sf(),{heartbeatsToSend:n,unsentEntries:s}=iE(this._heartbeatsCache.heartbeats),i=ga(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return hs.warn(e),""}}}function Sf(){return new Date().toISOString().substring(0,10)}function iE(t,e=tE){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Rf(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Rf(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class rE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pm()?km().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await eE(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return bf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return bf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Rf(t){return ga(JSON.stringify({version:2,heartbeats:t})).length}function oE(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(t){Wn(new kn("platform-logger",e=>new y1(e),"PRIVATE")),Wn(new kn("heartbeat",e=>new sE(e),"PRIVATE")),wn(yc,Tf,t),wn(yc,Tf,"esm2020"),wn("fire-js","")}aE("");var lE="firebase",cE="12.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wn(lE,cE,"app");function Lm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uE=Lm,Bm=new mi("auth","Firebase",Lm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a=new Ja("@firebase/auth");function hE(t,...e){_a.logLevel<=Ne.WARN&&_a.warn(`Auth (${nr}): ${t}`,...e)}function zo(t,...e){_a.logLevel<=Ne.ERROR&&_a.error(`Auth (${nr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(t,...e){throw hu(t,...e)}function Rn(t,...e){return hu(t,...e)}function uu(t,e,n){const s={...uE(),[e]:n};return new mi("auth","Firebase",s).create(e,{appName:t.name})}function ai(t){return uu(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function dE(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&zn(t,"argument-error"),uu(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function hu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Bm.create(t,...e)}function Ee(t,e,...n){if(!t)throw hu(e,...n)}function rs(t){const e="INTERNAL ASSERTION FAILED: "+t;throw zo(e),new Error(e)}function ds(t,e){t||rs(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(){return typeof self<"u"&&self.location?.href||""}function fE(){return Pf()==="http:"||Pf()==="https:"}function Pf(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fE()||Rm()||"connection"in navigator)?navigator.onLine:!0}function gE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,n){this.shortDelay=e,this.longDelay=n,ds(n>e,"Short delay should be less than long delay!"),this.isMobile=Lw()||Uw()}get(){return pE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(t,e){ds(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rs("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rs("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rs("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],vE=new mo(3e4,6e4);function fu(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function sr(t,e,n,s,i={}){return Um(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const l=go({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...r};return Fw()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&tr(t.emulatorConfig.host)&&(u.credentials="include"),Fm.fetch()(await $m(t,t.config.apiHost,n,l),u)})}async function Um(t,e,n){t._canInitEmulator=!1;const s={...mE,...e};try{const i=new AE(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Lo(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const l=r.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Lo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Lo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Lo(t,"user-disabled",o);const d=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw uu(t,d,u);zn(t,d)}}catch(i){if(i instanceof Dn)throw i;zn(t,"network-request-failed",{message:String(i)})}}async function yE(t,e,n,s,i={}){const r=await sr(t,e,n,s,i);return"mfaPendingCredential"in r&&zn(t,"multi-factor-auth-required",{_serverResponse:r}),r}async function $m(t,e,n,s){const i=`${e}${n}?${s}`,r=t,o=r.config.emulator?du(t.config,i):`${t.config.apiScheme}://${i}`;return _E.includes(n)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}class AE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Rn(this.auth,"network-request-failed")),vE.get())})}}function Lo(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Rn(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IE(t,e){return sr(t,"POST","/v1/accounts:delete",e)}async function va(t,e){return sr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wE(t,e=!1){const n=ln(t),s=await n.getIdToken(e),i=pu(s);Ee(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r?.sign_in_provider;return{claims:i,token:s,authTime:$r(Ql(i.auth_time)),issuedAtTime:$r(Ql(i.iat)),expirationTime:$r(Ql(i.exp)),signInProvider:o||null,signInSecondFactor:r?.sign_in_second_factor||null}}function Ql(t){return Number(t)*1e3}function pu(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return zo("JWT malformed, contained fewer than 3 sections"),null;try{const i=wm(n);return i?JSON.parse(i):(zo("Failed to decode base64 JWT payload"),null)}catch(i){return zo("Caught error parsing JWT payload as JSON",i?.toString()),null}}function kf(t){const e=pu(t);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function to(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Dn&&EE(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function EE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$r(this.lastLoginAt),this.creationTime=$r(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ya(t){const e=t.auth,n=await t.getIdToken(),s=await to(t,va(e,{idToken:n}));Ee(s?.users.length,e,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const r=i.providerUserInfo?.length?Hm(i.providerUserInfo):[],o=bE(t.providerData,r),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!o?.length,u=l?c:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Ec(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function CE(t){const e=ln(t);await ya(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bE(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Hm(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SE(t,e){const n=await Um(t,{},async()=>{const s=go({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=await $m(t,i,"/v1/token",`key=${r}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:s};return t.emulatorConfig&&tr(t.emulatorConfig.host)&&(c.credentials="include"),Fm.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function RE(t,e){return sr(t,"POST","/v2/accounts:revokeToken",fu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Ee(e.length!==0,"internal-error");const n=kf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await SE(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Li;return s&&(Ee(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(Ee(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(Ee(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Li,this.toJSON())}_performRefresh(){return rs("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(t,e){Ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Cn{constructor({uid:e,auth:n,stsTokenManager:s,...i}){this.providerId="firebase",this.proactiveRefresh=new TE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ec(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await to(this,this.stsTokenManager.getToken(this.auth,e));return Ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return wE(this,e)}reload(){return CE(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Cn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ya(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tn(this.auth.app))return Promise.reject(ai(this.auth));const e=await this.getIdToken();return await to(this,IE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,i=n.email??void 0,r=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:_,providerData:y,stsTokenManager:A}=n;Ee(p&&A,e,"internal-error");const C=Li.fromJSON(this.name,A);Ee(typeof p=="string",e,"internal-error"),Ts(s,e.name),Ts(i,e.name),Ee(typeof m=="boolean",e,"internal-error"),Ee(typeof _=="boolean",e,"internal-error"),Ts(r,e.name),Ts(o,e.name),Ts(l,e.name),Ts(c,e.name),Ts(u,e.name),Ts(d,e.name);const L=new Cn({uid:p,auth:e,email:i,emailVerified:m,displayName:s,isAnonymous:_,photoURL:o,phoneNumber:r,tenantId:l,stsTokenManager:C,createdAt:u,lastLoginAt:d});return y&&Array.isArray(y)&&(L.providerData=y.map(Q=>({...Q}))),c&&(L._redirectEventId=c),L}static async _fromIdTokenResponse(e,n,s=!1){const i=new Li;i.updateFromServerResponse(n);const r=new Cn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await ya(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];Ee(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Hm(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!r?.length,l=new Li;l.updateFromIdToken(s);const c=new Cn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Ec(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!r?.length};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df=new Map;function os(t){ds(t instanceof Function,"Expected a class definition");let e=Df.get(t);return e?(ds(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Df.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}jm.type="NONE";const xf=jm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(t,e,n){return`firebase:${t}:${e}:${n}`}class Bi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Ko(this.userKey,i.apiKey,r),this.fullPersistenceKey=Ko("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await va(this.auth,{idToken:e}).catch(()=>{});return n?Cn._fromGetAccountInfoResponse(this.auth,n,e):null}return Cn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Bi(os(xf),e,s);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||os(xf);const o=Ko(s,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){let p;if(typeof d=="string"){const m=await va(e,{idToken:d}).catch(()=>{});if(!m)break;p=await Cn._fromGetAccountInfoResponse(e,m,d)}else p=Cn._fromJSON(e,d);u!==r&&(l=p),r=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Bi(r,e,s):(r=c[0],l&&await r._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new Bi(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Gm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Km(e))return"Blackberry";if(Ym(e))return"Webos";if(qm(e))return"Safari";if((e.includes("chrome/")||Qm(e))&&!e.includes("edge/"))return"Chrome";if(zm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if(s?.length===2)return s[1]}return"Other"}function Gm(t=zt()){return/firefox\//i.test(t)}function qm(t=zt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qm(t=zt()){return/crios\//i.test(t)}function Wm(t=zt()){return/iemobile/i.test(t)}function zm(t=zt()){return/android/i.test(t)}function Km(t=zt()){return/blackberry/i.test(t)}function Ym(t=zt()){return/webos/i.test(t)}function gu(t=zt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function PE(t=zt()){return gu(t)&&!!window.navigator?.standalone}function kE(){return $w()&&document.documentMode===10}function Jm(t=zt()){return gu(t)||zm(t)||Ym(t)||Km(t)||/windows phone/i.test(t)||Wm(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(t,e=[]){let n;switch(t){case"Browser":n=Nf(zt());break;case"Worker":n=`${Nf(zt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${nr}/${s}`}/**
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
 */class DE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,l)=>{try{const c=e(r);o(c)}catch(c){l(c)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function xE(t,e={}){return sr(t,"GET","/v2/passwordPolicy",fu(t,e))}/**
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
 */const NE=6;class ME{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??NE,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mf(this),this.idTokenSubscription=new Mf(this),this.beforeStateQueue=new DE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=os(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Bi.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await va(this,{idToken:e}),s=await Cn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Tn(this.app)){const r=this.app.settings.authIdToken;return r?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(r).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=this.redirectUser?._redirectEventId,o=s?._redirectEventId,l=await this.tryRedirectSignIn(e);(!r||r===o)&&l?.user&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(r){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(r))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ya(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Tn(this.app))return Promise.reject(ai(this));const n=e?ln(e):null;return n&&Ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Tn(this.app)?Promise.reject(ai(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Tn(this.app)?Promise.reject(ai(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(os(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xE(this),n=new ME(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new mi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await RE(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&os(e)||this._popupRedirectResolver;Ee(n,this,"argument-error"),this.redirectPersistenceManager=await Bi.create(this,[os(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ee(l,this,"internal-error"),l.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(Tn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&hE(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Xa(t){return ln(t)}class Mf{constructor(e){this.auth=e,this.observer=null,this.addObserver=zw(n=>this.observer=n)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function VE(t){mu=t}function LE(t){return mu.loadJS(t)}function BE(){return mu.gapiScript}function FE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(t,e){const n=_i(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Us(r,e??{}))return i;zn(i,"already-initialized")}return n.initialize({options:e})}function $E(t,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(os);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e?.popupRedirectResolver)}function HE(t,e,n){const s=Xa(t);Ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=Zm(e),{host:o,port:l}=jE(e),c=l===null?"":`:${l}`,u={url:`${r}//${o}${c}/`},d=Object.freeze({host:o,port:l,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){Ee(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Ee(Us(u,s.config.emulator)&&Us(d,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=u,s.emulatorConfig=d,s.settings.appVerificationDisabledForTesting=!0,tr(o)?(bm(`${r}//${o}${c}`),Sm("Auth",!0)):GE()}function Zm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function jE(t){const e=Zm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Of(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Of(o)}}}function Of(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function GE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return rs("not implemented")}_getIdTokenResponse(e){return rs("not implemented")}_linkToIdToken(e,n){return rs("not implemented")}_getReauthenticationResolver(e){return rs("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fi(t,e){return yE(t,"POST","/v1/accounts:signInWithIdp",fu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE="http://localhost";class ui extends e_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ui(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):zn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i,...r}=n;if(!s||!i)return null;const o=new ui(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Fi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Fi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Fi(e,n)}buildRequest(){const e={requestUri:qE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=go(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o extends _u{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs extends _o{constructor(){super("facebook.com")}static credential(e){return ui._fromParams({providerId:Rs.PROVIDER_ID,signInMethod:Rs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rs.credentialFromTaggedObject(e)}static credentialFromError(e){return Rs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rs.credential(e.oauthAccessToken)}catch{return null}}}Rs.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rs.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss extends _o{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ui._fromParams({providerId:ss.PROVIDER_ID,signInMethod:ss.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ss.credentialFromTaggedObject(e)}static credentialFromError(e){return ss.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return ss.credential(n,s)}catch{return null}}}ss.GOOGLE_SIGN_IN_METHOD="google.com";ss.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps extends _o{constructor(){super("github.com")}static credential(e){return ui._fromParams({providerId:Ps.PROVIDER_ID,signInMethod:Ps.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ps.credentialFromTaggedObject(e)}static credentialFromError(e){return Ps.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ps.credential(e.oauthAccessToken)}catch{return null}}}Ps.GITHUB_SIGN_IN_METHOD="github.com";Ps.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks extends _o{constructor(){super("twitter.com")}static credential(e,n){return ui._fromParams({providerId:ks.PROVIDER_ID,signInMethod:ks.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ks.credentialFromTaggedObject(e)}static credentialFromError(e){return ks.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return ks.credential(n,s)}catch{return null}}}ks.TWITTER_SIGN_IN_METHOD="twitter.com";ks.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Cn._fromIdTokenResponse(e,s,i),o=Vf(s);return new Qi({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Vf(s);return new Qi({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Vf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa extends Dn{constructor(e,n,s,i){super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Aa.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Aa(e,n,s,i)}}function t_(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Aa._fromErrorAndOperation(t,r,e,s):r})}async function QE(t,e,n=!1){const s=await to(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qi._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WE(t,e,n=!1){const{auth:s}=t;if(Tn(s.app))return Promise.reject(ai(s));const i="reauthenticate";try{const r=await to(t,t_(s,i,e,t),n);Ee(r.idToken,s,"internal-error");const o=pu(r.idToken);Ee(o,s,"internal-error");const{sub:l}=o;return Ee(t.uid===l,s,"user-mismatch"),Qi._forOperation(t,i,r)}catch(r){throw r?.code==="auth/user-not-found"&&zn(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zE(t,e,n=!1){if(Tn(t.app))return Promise.reject(ai(t));const s="signIn",i=await t_(t,s,e),r=await Qi._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function KE(t,e,n,s){return ln(t).onIdTokenChanged(e,n,s)}function YE(t,e,n){return ln(t).beforeAuthStateChanged(e,n)}function JE(t){return ln(t).signOut()}const Ia="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ia,"1"),this.storage.removeItem(Ia),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE=1e3,ZE=10;class s_ extends n_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Jm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);kE()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ZE):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},XE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}s_.type="LOCAL";const eT=s_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_ extends n_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}i_.type="SESSION";const r_=i_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Za(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,r)),c=await tT(l);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Za.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((l,c)=>{const u=vu("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),l(m.data.response);break;default:clearTimeout(d),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(){return window}function sT(t){Un().location.href=t}/**
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
 */function o_(){return typeof Un().WorkerGlobalScope<"u"&&typeof Un().importScripts=="function"}async function iT(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rT(){return navigator?.serviceWorker?.controller||null}function oT(){return o_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_="firebaseLocalStorageDb",aT=1,wa="firebaseLocalStorage",l_="fbase_key";class vo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function el(t,e){return t.transaction([wa],e?"readwrite":"readonly").objectStore(wa)}function lT(){const t=indexedDB.deleteDatabase(a_);return new vo(t).toPromise()}function Tc(){const t=indexedDB.open(a_,aT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(wa,{keyPath:l_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(wa)?e(s):(s.close(),await lT(),e(await Tc()))})})}async function Lf(t,e,n){const s=el(t,!0).put({[l_]:e,value:n});return new vo(s).toPromise()}async function cT(t,e){const n=el(t,!1).get(e),s=await new vo(n).toPromise();return s===void 0?null:s.value}function Bf(t,e){const n=el(t,!0).delete(e);return new vo(n).toPromise()}const uT=800,hT=3;class c_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>hT)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return o_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Za._getInstance(oT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await iT(),!this.activeServiceWorker)return;this.sender=new nT(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tc();return await Lf(e,Ia,"1"),await Bf(e,Ia),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Lf(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>cT(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=el(i,!1).getAll();return new vo(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}c_.type="LOCAL";const dT=c_;new mo(3e4,6e4);/**
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
 */function u_(t,e){return e?os(e):(Ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu extends e_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Fi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Fi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function fT(t){return zE(t.auth,new yu(t),t.bypassAuthState)}function pT(t){const{auth:e,user:n}=t;return Ee(n,e,"internal-error"),WE(n,new yu(t),t.bypassAuthState)}async function gT(t){const{auth:e,user:n}=t;return Ee(n,e,"internal-error"),QE(n,new yu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fT;case"linkViaPopup":case"linkViaRedirect":return gT;case"reauthViaPopup":case"reauthViaRedirect":return pT;default:zn(this.auth,"internal-error")}}resolve(e){ds(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ds(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT=new mo(2e3,1e4);async function _T(t,e,n){if(Tn(t.app))return Promise.reject(Rn(t,"operation-not-supported-in-this-environment"));const s=Xa(t);dE(t,e,_u);const i=u_(s,n);return new ni(s,"signInViaPopup",e,i).executeNotNull()}class ni extends h_{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,ni.currentPopupAction&&ni.currentPopupAction.cancel(),ni.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){ds(this.filter.length===1,"Popup operations only handle one event");const e=vu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ni.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mT.get())};e()}}ni.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT="pendingRedirect",Yo=new Map;class yT extends h_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Yo.get(this.auth._key());if(!e){try{const s=await AT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Yo.set(this.auth._key(),e)}return this.bypassAuthState||Yo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function AT(t,e){const n=ET(e),s=wT(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function IT(t,e){Yo.set(t._key(),e)}function wT(t){return os(t._redirectPersistence)}function ET(t){return Ko(vT,t.config.apiKey,t.name)}async function TT(t,e,n=!1){if(Tn(t.app))return Promise.reject(ai(t));const s=Xa(t),i=u_(s,e),o=await new yT(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=600*1e3;class bT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ST(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!d_(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";n.onError(Rn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=CT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ff(e))}saveEventToCache(e){this.cachedEventUids.add(Ff(e)),this.lastProcessedEventTime=Date.now()}}function Ff(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function d_({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function ST(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return d_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RT(t,e={}){return sr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kT=/^https?/;async function DT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await RT(t);for(const n of e)try{if(xT(n))return}catch{}zn(t,"unauthorized-domain")}function xT(t){const e=wc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!kT.test(n))return!1;if(PT.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const NT=new mo(3e4,6e4);function Uf(){const t=Un().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function MT(t){return new Promise((e,n)=>{function s(){Uf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Uf(),n(Rn(t,"network-request-failed"))},timeout:NT.get()})}if(Un().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Un().gapi?.load)s();else{const i=FE("iframefcb");return Un()[i]=()=>{gapi.load?s():n(Rn(t,"network-request-failed"))},LE(`${BE()}?onload=${i}`).catch(r=>n(r))}}).catch(e=>{throw Jo=null,e})}let Jo=null;function OT(t){return Jo=Jo||MT(t),Jo}/**
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
 */const VT=new mo(5e3,15e3),LT="__/auth/iframe",BT="emulator/auth/iframe",FT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $T(t){const e=t.config;Ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?du(e,BT):`https://${t.config.authDomain}/${LT}`,s={apiKey:e.apiKey,appName:t.name,v:nr},i=UT.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${go(s).slice(1)}`}async function HT(t){const e=await OT(t),n=Un().gapi;return Ee(n,t,"internal-error"),e.open({where:document.body,url:$T(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FT,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Rn(t,"network-request-failed"),l=Un().setTimeout(()=>{r(o)},VT.get());function c(){Un().clearTimeout(l),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const jT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},GT=500,qT=600,QT="_blank",WT="http://localhost";class $f{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zT(t,e,n,s=GT,i=qT){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const c={...jT,width:s.toString(),height:i.toString(),top:r,left:o},u=zt().toLowerCase();n&&(l=Qm(u)?QT:n),Gm(u)&&(e=e||WT,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[_,y])=>`${m}${_}=${y},`,"");if(PE(u)&&l!=="_self")return KT(e||"",l),new $f(null);const p=window.open(e||"",l,d);Ee(p,t,"popup-blocked");try{p.focus()}catch{}return new $f(p)}function KT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const YT="__/auth/handler",JT="emulator/auth/handler",XT=encodeURIComponent("fac");async function Hf(t,e,n,s,i,r){Ee(t.config.authDomain,t,"auth-domain-config-required"),Ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:nr,eventId:i};if(e instanceof _u){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ww(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof _o){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),u=c?`#${XT}=${encodeURIComponent(c)}`:"";return`${ZT(t)}?${go(l).slice(1)}${u}`}function ZT({config:t}){return t.emulator?du(t,JT):`https://${t.authDomain}/${YT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl="webStorageSupport";class eC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=r_,this._completeRedirectFn=TT,this._overrideRedirectResult=IT}async _openPopup(e,n,s,i){ds(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const r=await Hf(e,n,s,wc(),i);return zT(e,r,vu())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Hf(e,n,s,wc(),i);return sT(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(ds(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await HT(e),s=new bT(e);return n.register("authEvent",i=>(Ee(i?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wl,{type:Wl},i=>{const r=i?.[0]?.[Wl];r!==void 0&&n(!!r),zn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=DT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Jm()||qm()||gu()}}const tC=eC;var jf="@firebase/auth",Gf="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function iC(t){Wn(new kn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=s.options;Ee(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xm(t)},u=new OE(s,i,r,c);return $E(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Wn(new kn("auth-internal",e=>{const n=Xa(e.getProvider("auth").getImmediate());return(s=>new nC(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wn(jf,Gf,sC(t)),wn(jf,Gf,"esm2020")}/**
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
 */const rC=300,oC=Cm("authIdTokenMaxAge")||rC;let qf=null;const aC=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>oC)return;const i=n?.token;qf!==i&&(qf=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function lC(t=cu()){const e=_i(t,"auth");if(e.isInitialized())return e.getImmediate();const n=UE(t,{popupRedirectResolver:tC,persistence:[dT,eT,r_]}),s=Cm("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=aC(r.toString());YE(n,o,()=>o(n.currentUser)),KE(n,l=>o(l))}}const i=Em("auth");return i&&HE(n,`http://${i}`),n}function cC(){return document.getElementsByTagName("head")?.[0]??document}VE({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Rn("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",cC().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});iC("Browser");var Qf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Os,f_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,w){function T(){}T.prototype=w.prototype,S.F=w.prototype,S.prototype=new T,S.prototype.constructor=S,S.D=function(P,R,D){for(var E=Array(arguments.length-2),Ke=2;Ke<arguments.length;Ke++)E[Ke-2]=arguments[Ke];return w.prototype[R].apply(P,E)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,n),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(S,w,T){T||(T=0);const P=Array(16);if(typeof w=="string")for(var R=0;R<16;++R)P[R]=w.charCodeAt(T++)|w.charCodeAt(T++)<<8|w.charCodeAt(T++)<<16|w.charCodeAt(T++)<<24;else for(R=0;R<16;++R)P[R]=w[T++]|w[T++]<<8|w[T++]<<16|w[T++]<<24;w=S.g[0],T=S.g[1],R=S.g[2];let D=S.g[3],E;E=w+(D^T&(R^D))+P[0]+3614090360&4294967295,w=T+(E<<7&4294967295|E>>>25),E=D+(R^w&(T^R))+P[1]+3905402710&4294967295,D=w+(E<<12&4294967295|E>>>20),E=R+(T^D&(w^T))+P[2]+606105819&4294967295,R=D+(E<<17&4294967295|E>>>15),E=T+(w^R&(D^w))+P[3]+3250441966&4294967295,T=R+(E<<22&4294967295|E>>>10),E=w+(D^T&(R^D))+P[4]+4118548399&4294967295,w=T+(E<<7&4294967295|E>>>25),E=D+(R^w&(T^R))+P[5]+1200080426&4294967295,D=w+(E<<12&4294967295|E>>>20),E=R+(T^D&(w^T))+P[6]+2821735955&4294967295,R=D+(E<<17&4294967295|E>>>15),E=T+(w^R&(D^w))+P[7]+4249261313&4294967295,T=R+(E<<22&4294967295|E>>>10),E=w+(D^T&(R^D))+P[8]+1770035416&4294967295,w=T+(E<<7&4294967295|E>>>25),E=D+(R^w&(T^R))+P[9]+2336552879&4294967295,D=w+(E<<12&4294967295|E>>>20),E=R+(T^D&(w^T))+P[10]+4294925233&4294967295,R=D+(E<<17&4294967295|E>>>15),E=T+(w^R&(D^w))+P[11]+2304563134&4294967295,T=R+(E<<22&4294967295|E>>>10),E=w+(D^T&(R^D))+P[12]+1804603682&4294967295,w=T+(E<<7&4294967295|E>>>25),E=D+(R^w&(T^R))+P[13]+4254626195&4294967295,D=w+(E<<12&4294967295|E>>>20),E=R+(T^D&(w^T))+P[14]+2792965006&4294967295,R=D+(E<<17&4294967295|E>>>15),E=T+(w^R&(D^w))+P[15]+1236535329&4294967295,T=R+(E<<22&4294967295|E>>>10),E=w+(R^D&(T^R))+P[1]+4129170786&4294967295,w=T+(E<<5&4294967295|E>>>27),E=D+(T^R&(w^T))+P[6]+3225465664&4294967295,D=w+(E<<9&4294967295|E>>>23),E=R+(w^T&(D^w))+P[11]+643717713&4294967295,R=D+(E<<14&4294967295|E>>>18),E=T+(D^w&(R^D))+P[0]+3921069994&4294967295,T=R+(E<<20&4294967295|E>>>12),E=w+(R^D&(T^R))+P[5]+3593408605&4294967295,w=T+(E<<5&4294967295|E>>>27),E=D+(T^R&(w^T))+P[10]+38016083&4294967295,D=w+(E<<9&4294967295|E>>>23),E=R+(w^T&(D^w))+P[15]+3634488961&4294967295,R=D+(E<<14&4294967295|E>>>18),E=T+(D^w&(R^D))+P[4]+3889429448&4294967295,T=R+(E<<20&4294967295|E>>>12),E=w+(R^D&(T^R))+P[9]+568446438&4294967295,w=T+(E<<5&4294967295|E>>>27),E=D+(T^R&(w^T))+P[14]+3275163606&4294967295,D=w+(E<<9&4294967295|E>>>23),E=R+(w^T&(D^w))+P[3]+4107603335&4294967295,R=D+(E<<14&4294967295|E>>>18),E=T+(D^w&(R^D))+P[8]+1163531501&4294967295,T=R+(E<<20&4294967295|E>>>12),E=w+(R^D&(T^R))+P[13]+2850285829&4294967295,w=T+(E<<5&4294967295|E>>>27),E=D+(T^R&(w^T))+P[2]+4243563512&4294967295,D=w+(E<<9&4294967295|E>>>23),E=R+(w^T&(D^w))+P[7]+1735328473&4294967295,R=D+(E<<14&4294967295|E>>>18),E=T+(D^w&(R^D))+P[12]+2368359562&4294967295,T=R+(E<<20&4294967295|E>>>12),E=w+(T^R^D)+P[5]+4294588738&4294967295,w=T+(E<<4&4294967295|E>>>28),E=D+(w^T^R)+P[8]+2272392833&4294967295,D=w+(E<<11&4294967295|E>>>21),E=R+(D^w^T)+P[11]+1839030562&4294967295,R=D+(E<<16&4294967295|E>>>16),E=T+(R^D^w)+P[14]+4259657740&4294967295,T=R+(E<<23&4294967295|E>>>9),E=w+(T^R^D)+P[1]+2763975236&4294967295,w=T+(E<<4&4294967295|E>>>28),E=D+(w^T^R)+P[4]+1272893353&4294967295,D=w+(E<<11&4294967295|E>>>21),E=R+(D^w^T)+P[7]+4139469664&4294967295,R=D+(E<<16&4294967295|E>>>16),E=T+(R^D^w)+P[10]+3200236656&4294967295,T=R+(E<<23&4294967295|E>>>9),E=w+(T^R^D)+P[13]+681279174&4294967295,w=T+(E<<4&4294967295|E>>>28),E=D+(w^T^R)+P[0]+3936430074&4294967295,D=w+(E<<11&4294967295|E>>>21),E=R+(D^w^T)+P[3]+3572445317&4294967295,R=D+(E<<16&4294967295|E>>>16),E=T+(R^D^w)+P[6]+76029189&4294967295,T=R+(E<<23&4294967295|E>>>9),E=w+(T^R^D)+P[9]+3654602809&4294967295,w=T+(E<<4&4294967295|E>>>28),E=D+(w^T^R)+P[12]+3873151461&4294967295,D=w+(E<<11&4294967295|E>>>21),E=R+(D^w^T)+P[15]+530742520&4294967295,R=D+(E<<16&4294967295|E>>>16),E=T+(R^D^w)+P[2]+3299628645&4294967295,T=R+(E<<23&4294967295|E>>>9),E=w+(R^(T|~D))+P[0]+4096336452&4294967295,w=T+(E<<6&4294967295|E>>>26),E=D+(T^(w|~R))+P[7]+1126891415&4294967295,D=w+(E<<10&4294967295|E>>>22),E=R+(w^(D|~T))+P[14]+2878612391&4294967295,R=D+(E<<15&4294967295|E>>>17),E=T+(D^(R|~w))+P[5]+4237533241&4294967295,T=R+(E<<21&4294967295|E>>>11),E=w+(R^(T|~D))+P[12]+1700485571&4294967295,w=T+(E<<6&4294967295|E>>>26),E=D+(T^(w|~R))+P[3]+2399980690&4294967295,D=w+(E<<10&4294967295|E>>>22),E=R+(w^(D|~T))+P[10]+4293915773&4294967295,R=D+(E<<15&4294967295|E>>>17),E=T+(D^(R|~w))+P[1]+2240044497&4294967295,T=R+(E<<21&4294967295|E>>>11),E=w+(R^(T|~D))+P[8]+1873313359&4294967295,w=T+(E<<6&4294967295|E>>>26),E=D+(T^(w|~R))+P[15]+4264355552&4294967295,D=w+(E<<10&4294967295|E>>>22),E=R+(w^(D|~T))+P[6]+2734768916&4294967295,R=D+(E<<15&4294967295|E>>>17),E=T+(D^(R|~w))+P[13]+1309151649&4294967295,T=R+(E<<21&4294967295|E>>>11),E=w+(R^(T|~D))+P[4]+4149444226&4294967295,w=T+(E<<6&4294967295|E>>>26),E=D+(T^(w|~R))+P[11]+3174756917&4294967295,D=w+(E<<10&4294967295|E>>>22),E=R+(w^(D|~T))+P[2]+718787259&4294967295,R=D+(E<<15&4294967295|E>>>17),E=T+(D^(R|~w))+P[9]+3951481745&4294967295,S.g[0]=S.g[0]+w&4294967295,S.g[1]=S.g[1]+(R+(E<<21&4294967295|E>>>11))&4294967295,S.g[2]=S.g[2]+R&4294967295,S.g[3]=S.g[3]+D&4294967295}s.prototype.v=function(S,w){w===void 0&&(w=S.length);const T=w-this.blockSize,P=this.C;let R=this.h,D=0;for(;D<w;){if(R==0)for(;D<=T;)i(this,S,D),D+=this.blockSize;if(typeof S=="string"){for(;D<w;)if(P[R++]=S.charCodeAt(D++),R==this.blockSize){i(this,P),R=0;break}}else for(;D<w;)if(P[R++]=S[D++],R==this.blockSize){i(this,P),R=0;break}}this.h=R,this.o+=w},s.prototype.A=function(){var S=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);S[0]=128;for(var w=1;w<S.length-8;++w)S[w]=0;w=this.o*8;for(var T=S.length-8;T<S.length;++T)S[T]=w&255,w/=256;for(this.v(S),S=Array(16),w=0,T=0;T<4;++T)for(let P=0;P<32;P+=8)S[w++]=this.g[T]>>>P&255;return S};function r(S,w){var T=l;return Object.prototype.hasOwnProperty.call(T,S)?T[S]:T[S]=w(S)}function o(S,w){this.h=w;const T=[];let P=!0;for(let R=S.length-1;R>=0;R--){const D=S[R]|0;P&&D==w||(T[R]=D,P=!1)}this.g=T}var l={};function c(S){return-128<=S&&S<128?r(S,function(w){return new o([w|0],w<0?-1:0)}):new o([S|0],S<0?-1:0)}function u(S){if(isNaN(S)||!isFinite(S))return p;if(S<0)return C(u(-S));const w=[];let T=1;for(let P=0;S>=T;P++)w[P]=S/T|0,T*=4294967296;return new o(w,0)}function d(S,w){if(S.length==0)throw Error("number format error: empty string");if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(S.charAt(0)=="-")return C(d(S.substring(1),w));if(S.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=u(Math.pow(w,8));let P=p;for(let D=0;D<S.length;D+=8){var R=Math.min(8,S.length-D);const E=parseInt(S.substring(D,D+R),w);R<8?(R=u(Math.pow(w,R)),P=P.j(R).add(u(E))):(P=P.j(T),P=P.add(u(E)))}return P}var p=c(0),m=c(1),_=c(16777216);t=o.prototype,t.m=function(){if(A(this))return-C(this).m();let S=0,w=1;for(let T=0;T<this.g.length;T++){const P=this.i(T);S+=(P>=0?P:4294967296+P)*w,w*=4294967296}return S},t.toString=function(S){if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(y(this))return"0";if(A(this))return"-"+C(this).toString(S);const w=u(Math.pow(S,6));var T=this;let P="";for(;;){const R=$(T,w).g;T=L(T,R.j(w));let D=((T.g.length>0?T.g[0]:T.h)>>>0).toString(S);if(T=R,y(T))return D+P;for(;D.length<6;)D="0"+D;P=D+P}},t.i=function(S){return S<0?0:S<this.g.length?this.g[S]:this.h};function y(S){if(S.h!=0)return!1;for(let w=0;w<S.g.length;w++)if(S.g[w]!=0)return!1;return!0}function A(S){return S.h==-1}t.l=function(S){return S=L(this,S),A(S)?-1:y(S)?0:1};function C(S){const w=S.g.length,T=[];for(let P=0;P<w;P++)T[P]=~S.g[P];return new o(T,~S.h).add(m)}t.abs=function(){return A(this)?C(this):this},t.add=function(S){const w=Math.max(this.g.length,S.g.length),T=[];let P=0;for(let R=0;R<=w;R++){let D=P+(this.i(R)&65535)+(S.i(R)&65535),E=(D>>>16)+(this.i(R)>>>16)+(S.i(R)>>>16);P=E>>>16,D&=65535,E&=65535,T[R]=E<<16|D}return new o(T,T[T.length-1]&-2147483648?-1:0)};function L(S,w){return S.add(C(w))}t.j=function(S){if(y(this)||y(S))return p;if(A(this))return A(S)?C(this).j(C(S)):C(C(this).j(S));if(A(S))return C(this.j(C(S)));if(this.l(_)<0&&S.l(_)<0)return u(this.m()*S.m());const w=this.g.length+S.g.length,T=[];for(var P=0;P<2*w;P++)T[P]=0;for(P=0;P<this.g.length;P++)for(let R=0;R<S.g.length;R++){const D=this.i(P)>>>16,E=this.i(P)&65535,Ke=S.i(R)>>>16,vt=S.i(R)&65535;T[2*P+2*R]+=E*vt,Q(T,2*P+2*R),T[2*P+2*R+1]+=D*vt,Q(T,2*P+2*R+1),T[2*P+2*R+1]+=E*Ke,Q(T,2*P+2*R+1),T[2*P+2*R+2]+=D*Ke,Q(T,2*P+2*R+2)}for(S=0;S<w;S++)T[S]=T[2*S+1]<<16|T[2*S];for(S=w;S<2*w;S++)T[S]=0;return new o(T,0)};function Q(S,w){for(;(S[w]&65535)!=S[w];)S[w+1]+=S[w]>>>16,S[w]&=65535,w++}function j(S,w){this.g=S,this.h=w}function $(S,w){if(y(w))throw Error("division by zero");if(y(S))return new j(p,p);if(A(S))return w=$(C(S),w),new j(C(w.g),C(w.h));if(A(w))return w=$(S,C(w)),new j(C(w.g),w.h);if(S.g.length>30){if(A(S)||A(w))throw Error("slowDivide_ only works with positive integers.");for(var T=m,P=w;P.l(S)<=0;)T=oe(T),P=oe(P);var R=Pe(T,1),D=Pe(P,1);for(P=Pe(P,2),T=Pe(T,2);!y(P);){var E=D.add(P);E.l(S)<=0&&(R=R.add(T),D=E),P=Pe(P,1),T=Pe(T,1)}return w=L(S,R.j(w)),new j(R,w)}for(R=p;S.l(w)>=0;){for(T=Math.max(1,Math.floor(S.m()/w.m())),P=Math.ceil(Math.log(T)/Math.LN2),P=P<=48?1:Math.pow(2,P-48),D=u(T),E=D.j(w);A(E)||E.l(S)>0;)T-=P,D=u(T),E=D.j(w);y(D)&&(D=m),R=R.add(D),S=L(S,E)}return new j(R,S)}t.B=function(S){return $(this,S).h},t.and=function(S){const w=Math.max(this.g.length,S.g.length),T=[];for(let P=0;P<w;P++)T[P]=this.i(P)&S.i(P);return new o(T,this.h&S.h)},t.or=function(S){const w=Math.max(this.g.length,S.g.length),T=[];for(let P=0;P<w;P++)T[P]=this.i(P)|S.i(P);return new o(T,this.h|S.h)},t.xor=function(S){const w=Math.max(this.g.length,S.g.length),T=[];for(let P=0;P<w;P++)T[P]=this.i(P)^S.i(P);return new o(T,this.h^S.h)};function oe(S){const w=S.g.length+1,T=[];for(let P=0;P<w;P++)T[P]=S.i(P)<<1|S.i(P-1)>>>31;return new o(T,S.h)}function Pe(S,w){const T=w>>5;w%=32;const P=S.g.length-T,R=[];for(let D=0;D<P;D++)R[D]=w>0?S.i(D+T)>>>w|S.i(D+T+1)<<32-w:S.i(D+T);return new o(R,S.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,f_=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Os=o}).apply(typeof Qf<"u"?Qf:typeof self<"u"?self:typeof window<"u"?window:{});var Bo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var p_,Sr,g_,Xo,Cc,m_,__,v_;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Bo=="object"&&Bo];for(var f=0;f<a.length;++f){var g=a[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=n(this);function i(a,f){if(f)e:{var g=s;a=a.split(".");for(var v=0;v<a.length-1;v++){var M=a[v];if(!(M in g))break e;g=g[M]}a=a[a.length-1],v=g[a],f=f(v),f!=v&&f!=null&&e(g,a,{configurable:!0,writable:!0,value:f})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(f){var g=[],v;for(v in f)Object.prototype.hasOwnProperty.call(f,v)&&g.push([v,f[v]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var r=r||{},o=this||self;function l(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function c(a,f,g){return a.call.apply(a.bind,arguments)}function u(a,f,g){return u=c,u.apply(null,arguments)}function d(a,f){var g=Array.prototype.slice.call(arguments,1);return function(){var v=g.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function p(a,f){function g(){}g.prototype=f.prototype,a.Z=f.prototype,a.prototype=new g,a.prototype.constructor=a,a.Ob=function(v,M,F){for(var se=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)se[xe-2]=arguments[xe];return f.prototype[M].apply(v,se)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function _(a){const f=a.length;if(f>0){const g=Array(f);for(let v=0;v<f;v++)g[v]=a[v];return g}return[]}function y(a,f){for(let v=1;v<arguments.length;v++){const M=arguments[v];var g=typeof M;if(g=g!="object"?g:M?Array.isArray(M)?"array":g:"null",g=="array"||g=="object"&&typeof M.length=="number"){g=a.length||0;const F=M.length||0;a.length=g+F;for(let se=0;se<F;se++)a[g+se]=M[se]}else a.push(M)}}class A{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return this.h>0?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function C(a){o.setTimeout(()=>{throw a},0)}function L(){var a=S;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class Q{constructor(){this.h=this.g=null}add(f,g){const v=j.get();v.set(f,g),this.h?this.h.next=v:this.g=v,this.h=v}}var j=new A(()=>new $,a=>a.reset());class ${constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let oe,Pe=!1,S=new Q,w=()=>{const a=Promise.resolve(void 0);oe=()=>{a.then(T)}};function T(){for(var a;a=L();){try{a.h.call(a.g)}catch(g){C(g)}var f=j;f.j(a),f.h<100&&(f.h++,a.next=f.g,f.g=a)}Pe=!1}function P(){this.u=this.u,this.C=this.C}P.prototype.u=!1,P.prototype.dispose=function(){this.u||(this.u=!0,this.N())},P.prototype[Symbol.dispose]=function(){this.dispose()},P.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function R(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var D=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const g=()=>{};o.addEventListener("test",g,f),o.removeEventListener("test",g,f)}catch{}return a})();function E(a){return/^[\s\xa0]*$/.test(a)}function Ke(a,f){R.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,f)}p(Ke,R),Ke.prototype.init=function(a,f){const g=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget,f||(g=="mouseover"?f=a.fromElement:g=="mouseout"&&(f=a.toElement)),this.relatedTarget=f,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Ke.Z.h.call(this)},Ke.prototype.h=function(){Ke.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var vt="closure_listenable_"+(Math.random()*1e6|0),st=0;function Ve(a,f,g,v,M){this.listener=a,this.proxy=null,this.src=f,this.type=g,this.capture=!!v,this.ha=M,this.key=++st,this.da=this.fa=!1}function Ce(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Mt(a,f,g){for(const v in a)f.call(g,a[v],v,a)}function cn(a,f){for(const g in a)f.call(void 0,a[g],g,a)}function Pt(a){const f={};for(const g in a)f[g]=a[g];return f}const Le="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ht(a,f){let g,v;for(let M=1;M<arguments.length;M++){v=arguments[M];for(g in v)a[g]=v[g];for(let F=0;F<Le.length;F++)g=Le[F],Object.prototype.hasOwnProperty.call(v,g)&&(a[g]=v[g])}}function sn(a){this.src=a,this.g={},this.h=0}sn.prototype.add=function(a,f,g,v,M){const F=a.toString();a=this.g[F],a||(a=this.g[F]=[],this.h++);const se=kt(a,f,v,M);return se>-1?(f=a[se],g||(f.fa=!1)):(f=new Ve(f,this.src,F,!!v,M),f.fa=g,a.push(f)),f};function un(a,f){const g=f.type;if(g in a.g){var v=a.g[g],M=Array.prototype.indexOf.call(v,f,void 0),F;(F=M>=0)&&Array.prototype.splice.call(v,M,1),F&&(Ce(f),a.g[g].length==0&&(delete a.g[g],a.h--))}}function kt(a,f,g,v){for(let M=0;M<a.length;++M){const F=a[M];if(!F.da&&F.listener==f&&F.capture==!!g&&F.ha==v)return M}return-1}var G="closure_lm_"+(Math.random()*1e6|0),re={};function ee(a,f,g,v,M){if(Array.isArray(f)){for(let F=0;F<f.length;F++)ee(a,f[F],g,v,M);return null}return g=ie(g),a&&a[vt]?a.J(f,g,l(v)?!!v.capture:!1,M):fe(a,f,g,!1,v,M)}function fe(a,f,g,v,M,F){if(!f)throw Error("Invalid event type");const se=l(M)?!!M.capture:!!M;let xe=z(a);if(xe||(a[G]=xe=new sn(a)),g=xe.add(f,g,v,se,F),g.proxy)return g;if(v=ge(),g.proxy=v,v.src=a,v.listener=g,a.addEventListener)D||(M=se),M===void 0&&(M=!1),a.addEventListener(f.toString(),v,M);else if(a.attachEvent)a.attachEvent(x(f.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return g}function ge(){function a(g){return f.call(a.src,a.listener,g)}const f=W;return a}function I(a,f,g,v,M){if(Array.isArray(f))for(var F=0;F<f.length;F++)I(a,f[F],g,v,M);else v=l(v)?!!v.capture:!!v,g=ie(g),a&&a[vt]?(a=a.i,F=String(f).toString(),F in a.g&&(f=a.g[F],g=kt(f,g,v,M),g>-1&&(Ce(f[g]),Array.prototype.splice.call(f,g,1),f.length==0&&(delete a.g[F],a.h--)))):a&&(a=z(a))&&(f=a.g[f.toString()],a=-1,f&&(a=kt(f,g,v,M)),(g=a>-1?f[a]:null)&&b(g))}function b(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[vt])un(f.i,a);else{var g=a.type,v=a.proxy;f.removeEventListener?f.removeEventListener(g,v,a.capture):f.detachEvent?f.detachEvent(x(g),v):f.addListener&&f.removeListener&&f.removeListener(v),(g=z(f))?(un(g,a),g.h==0&&(g.src=null,f[G]=null)):Ce(a)}}}function x(a){return a in re?re[a]:re[a]="on"+a}function W(a,f){if(a.da)a=!0;else{f=new Ke(f,this);const g=a.listener,v=a.ha||a.src;a.fa&&b(a),a=g.call(v,f)}return a}function z(a){return a=a[G],a instanceof sn?a:null}var q="__closure_events_fn_"+(Math.random()*1e9>>>0);function ie(a){return typeof a=="function"?a:(a[q]||(a[q]=function(f){return a.handleEvent(f)}),a[q])}function Z(){P.call(this),this.i=new sn(this),this.M=this,this.G=null}p(Z,P),Z.prototype[vt]=!0,Z.prototype.removeEventListener=function(a,f,g,v){I(this,a,f,g,v)};function K(a,f){var g,v=a.G;if(v)for(g=[];v;v=v.G)g.push(v);if(a=a.M,v=f.type||f,typeof f=="string")f=new R(f,a);else if(f instanceof R)f.target=f.target||a;else{var M=f;f=new R(v,a),ht(f,M)}M=!0;let F,se;if(g)for(se=g.length-1;se>=0;se--)F=f.g=g[se],M=Y(F,v,!0,f)&&M;if(F=f.g=a,M=Y(F,v,!0,f)&&M,M=Y(F,v,!1,f)&&M,g)for(se=0;se<g.length;se++)F=f.g=g[se],M=Y(F,v,!1,f)&&M}Z.prototype.N=function(){if(Z.Z.N.call(this),this.i){var a=this.i;for(const f in a.g){const g=a.g[f];for(let v=0;v<g.length;v++)Ce(g[v]);delete a.g[f],a.h--}}this.G=null},Z.prototype.J=function(a,f,g,v){return this.i.add(String(a),f,!1,g,v)},Z.prototype.K=function(a,f,g,v){return this.i.add(String(a),f,!0,g,v)};function Y(a,f,g,v){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();let M=!0;for(let F=0;F<f.length;++F){const se=f[F];if(se&&!se.da&&se.capture==g){const xe=se.listener,Ct=se.ha||se.src;se.fa&&un(a.i,se),M=xe.call(Ct,v)!==!1&&M}}return M&&!v.defaultPrevented}function ae(a,f){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(f)>2147483647?-1:o.setTimeout(a,f||0)}function te(a){a.g=ae(()=>{a.g=null,a.i&&(a.i=!1,te(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class he extends P{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:te(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ce(a){P.call(this),this.h=a,this.g={}}p(ce,P);var _e=[];function He(a){Mt(a.g,function(f,g){this.g.hasOwnProperty(g)&&b(f)},a),a.g={}}ce.prototype.N=function(){ce.Z.N.call(this),He(this)},ce.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Be=o.JSON.stringify,H=o.JSON.parse,k=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function B(){}function ne(){}var ue={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function de(){R.call(this,"d")}p(de,R);function ye(){R.call(this,"c")}p(ye,R);var we={},Ge=null;function gt(){return Ge=Ge||new Z}we.Ia="serverreachability";function ot(a){R.call(this,we.Ia,a)}p(ot,R);function mt(a){const f=gt();K(f,new ot(f))}we.STAT_EVENT="statevent";function Ue(a,f){R.call(this,we.STAT_EVENT,a),this.stat=f}p(Ue,R);function Fe(a){const f=gt();K(f,new Ue(f,a))}we.Ja="timingevent";function hn(a,f){R.call(this,we.Ja,a),this.size=f}p(hn,R);function Ut(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},f)}function at(){this.g=!0}at.prototype.ua=function(){this.g=!1};function tt(a,f,g,v,M,F){a.info(function(){if(a.g)if(F){var se="",xe=F.split("&");for(let Je=0;Je<xe.length;Je++){var Ct=xe[Je].split("=");if(Ct.length>1){const Dt=Ct[0];Ct=Ct[1];const Nn=Dt.split("_");se=Nn.length>=2&&Nn[1]=="type"?se+(Dt+"="+Ct+"&"):se+(Dt+"=redacted&")}}}else se=null;else se=F;return"XMLHTTP REQ ("+v+") [attempt "+M+"]: "+f+`
`+g+`
`+se})}function dt(a,f,g,v,M,F,se){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+M+"]: "+f+`
`+g+`
`+F+" "+se})}function Ye(a,f,g,v){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+wi(a,g)+(v?" "+v:"")})}function rn(a,f){a.info(function(){return"TIMEOUT: "+f})}at.prototype.info=function(){};function wi(a,f){if(!a.g)return f;if(!f)return null;try{const F=JSON.parse(f);if(F){for(a=0;a<F.length;a++)if(Array.isArray(F[a])){var g=F[a];if(!(g.length<2)){var v=g[1];if(Array.isArray(v)&&!(v.length<1)){var M=v[0];if(M!="noop"&&M!="stop"&&M!="close")for(let se=1;se<v.length;se++)v[se]=""}}}}return Be(F)}catch{return f}}var ms={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},lr={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},cr;function ur(){}p(ur,B),ur.prototype.g=function(){return new XMLHttpRequest},cr=new ur;function hr(a){return encodeURIComponent(String(a))}function my(a){var f=1;a=a.split(":");const g=[];for(;f>0&&a.length;)g.push(a.shift()),f--;return a.length&&g.push(a.join(":")),g}function _s(a,f,g,v){this.j=a,this.i=f,this.l=g,this.S=v||1,this.V=new ce(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Uh}function Uh(){this.i=null,this.g="",this.h=!1}var $h={},gl={};function ml(a,f,g){a.M=1,a.A=Co(xn(f)),a.u=g,a.R=!0,Hh(a,null)}function Hh(a,f){a.F=Date.now(),To(a),a.B=xn(a.A);var g=a.B,v=a.S;Array.isArray(v)||(v=[String(v)]),td(g.i,"t",v),a.C=0,g=a.j.L,a.h=new Uh,a.g=yd(a.j,g?f:null,!a.u),a.P>0&&(a.O=new he(u(a.Y,a,a.g),a.P)),f=a.V,g=a.g,v=a.ba;var M="readystatechange";Array.isArray(M)||(M&&(_e[0]=M.toString()),M=_e);for(let F=0;F<M.length;F++){const se=ee(g,M[F],v||f.handleEvent,!1,f.h||f);if(!se)break;f.g[se.key]=se}f=a.J?Pt(a.J):{},a.u?(a.v||(a.v="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,f)):(a.v="GET",a.g.ea(a.B,a.v,null,f)),mt(),tt(a.i,a.v,a.B,a.l,a.S,a.u)}_s.prototype.ba=function(a){a=a.target;const f=this.O;f&&As(a)==3?f.j():this.Y(a)},_s.prototype.Y=function(a){try{if(a==this.g)e:{const xe=As(this.g),Ct=this.g.ya(),Je=this.g.ca();if(!(xe<3)&&(xe!=3||this.g&&(this.h.h||this.g.la()||ld(this.g)))){this.K||xe!=4||Ct==7||(Ct==8||Je<=0?mt(3):mt(2)),_l(this);var f=this.g.ca();this.X=f;var g=_y(this);if(this.o=f==200,dt(this.i,this.v,this.B,this.l,this.S,xe,f),this.o){if(this.U&&!this.L){t:{if(this.g){var v,M=this.g;if((v=M.g?M.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(v)){var F=v;break t}}F=null}if(a=F)Ye(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,vl(this,a);else{this.o=!1,this.m=3,Fe(12),Ws(this),dr(this);break e}}if(this.R){a=!0;let Dt;for(;!this.K&&this.C<g.length;)if(Dt=vy(this,g),Dt==gl){xe==4&&(this.m=4,Fe(14),a=!1),Ye(this.i,this.l,null,"[Incomplete Response]");break}else if(Dt==$h){this.m=4,Fe(15),Ye(this.i,this.l,g,"[Invalid Chunk]"),a=!1;break}else Ye(this.i,this.l,Dt,null),vl(this,Dt);if(jh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),xe!=4||g.length!=0||this.h.h||(this.m=1,Fe(16),a=!1),this.o=this.o&&a,!a)Ye(this.i,this.l,g,"[Invalid Chunked Response]"),Ws(this),dr(this);else if(g.length>0&&!this.W){this.W=!0;var se=this.j;se.g==this&&se.aa&&!se.P&&(se.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),bl(se),se.P=!0,Fe(11))}}else Ye(this.i,this.l,g,null),vl(this,g);xe==4&&Ws(this),this.o&&!this.K&&(xe==4?gd(this.j,this):(this.o=!1,To(this)))}else xy(this.g),f==400&&g.indexOf("Unknown SID")>0?(this.m=3,Fe(12)):(this.m=0,Fe(13)),Ws(this),dr(this)}}}catch{}finally{}};function _y(a){if(!jh(a))return a.g.la();const f=ld(a.g);if(f==="")return"";let g="";const v=f.length,M=As(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Ws(a),dr(a),"";a.h.i=new o.TextDecoder}for(let F=0;F<v;F++)a.h.h=!0,g+=a.h.i.decode(f[F],{stream:!(M&&F==v-1)});return f.length=0,a.h.g+=g,a.C=0,a.h.g}function jh(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function vy(a,f){var g=a.C,v=f.indexOf(`
`,g);return v==-1?gl:(g=Number(f.substring(g,v)),isNaN(g)?$h:(v+=1,v+g>f.length?gl:(f=f.slice(v,v+g),a.C=v+g,f)))}_s.prototype.cancel=function(){this.K=!0,Ws(this)};function To(a){a.T=Date.now()+a.H,Gh(a,a.H)}function Gh(a,f){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Ut(u(a.aa,a),f)}function _l(a){a.D&&(o.clearTimeout(a.D),a.D=null)}_s.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(rn(this.i,this.B),this.M!=2&&(mt(),Fe(17)),Ws(this),this.m=2,dr(this)):Gh(this,this.T-a)};function dr(a){a.j.I==0||a.K||gd(a.j,a)}function Ws(a){_l(a);var f=a.O;f&&typeof f.dispose=="function"&&f.dispose(),a.O=null,He(a.V),a.g&&(f=a.g,a.g=null,f.abort(),f.dispose())}function vl(a,f){try{var g=a.j;if(g.I!=0&&(g.g==a||yl(g.h,a))){if(!a.L&&yl(g.h,a)&&g.I==3){try{var v=g.Ba.g.parse(f)}catch{v=null}if(Array.isArray(v)&&v.length==3){var M=v;if(M[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<a.F)ko(g),Ro(g);else break e;Cl(g),Fe(18)}}else g.xa=M[1],0<g.xa-g.K&&M[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=Ut(u(g.Va,g),6e3));Wh(g.h)<=1&&g.ta&&(g.ta=void 0)}else Ks(g,11)}else if((a.L||g.g==a)&&ko(g),!E(f))for(M=g.Ba.g.parse(f),f=0;f<M.length;f++){let Je=M[f];const Dt=Je[0];if(!(Dt<=g.K))if(g.K=Dt,Je=Je[1],g.I==2)if(Je[0]=="c"){g.M=Je[1],g.ba=Je[2];const Nn=Je[3];Nn!=null&&(g.ka=Nn,g.j.info("VER="+g.ka));const Ys=Je[4];Ys!=null&&(g.za=Ys,g.j.info("SVER="+g.za));const Is=Je[5];Is!=null&&typeof Is=="number"&&Is>0&&(v=1.5*Is,g.O=v,g.j.info("backChannelRequestTimeoutMs_="+v)),v=g;const ws=a.g;if(ws){const xo=ws.g?ws.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(xo){var F=v.h;F.g||xo.indexOf("spdy")==-1&&xo.indexOf("quic")==-1&&xo.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(Al(F,F.h),F.h=null))}if(v.G){const Sl=ws.g?ws.g.getResponseHeader("X-HTTP-Session-Id"):null;Sl&&(v.wa=Sl,it(v.J,v.G,Sl))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-a.F,g.j.info("Handshake RTT: "+g.T+"ms")),v=g;var se=a;if(v.na=vd(v,v.L?v.ba:null,v.W),se.L){zh(v.h,se);var xe=se,Ct=v.O;Ct&&(xe.H=Ct),xe.D&&(_l(xe),To(xe)),v.g=se}else fd(v);g.i.length>0&&Po(g)}else Je[0]!="stop"&&Je[0]!="close"||Ks(g,7);else g.I==3&&(Je[0]=="stop"||Je[0]=="close"?Je[0]=="stop"?Ks(g,7):Tl(g):Je[0]!="noop"&&g.l&&g.l.qa(Je),g.A=0)}}mt(4)}catch{}}var yy=class{constructor(a,f){this.g=a,this.map=f}};function qh(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Qh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Wh(a){return a.h?1:a.g?a.g.size:0}function yl(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function Al(a,f){a.g?a.g.add(f):a.h=f}function zh(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}qh.prototype.cancel=function(){if(this.i=Kh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Kh(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const g of a.g.values())f=f.concat(g.G);return f}return _(a.i)}var Yh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ay(a,f){if(a){a=a.split("&");for(let g=0;g<a.length;g++){const v=a[g].indexOf("=");let M,F=null;v>=0?(M=a[g].substring(0,v),F=a[g].substring(v+1)):M=a[g],f(M,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function vs(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let f;a instanceof vs?(this.l=a.l,fr(this,a.j),this.o=a.o,this.g=a.g,pr(this,a.u),this.h=a.h,Il(this,nd(a.i)),this.m=a.m):a&&(f=String(a).match(Yh))?(this.l=!1,fr(this,f[1]||"",!0),this.o=gr(f[2]||""),this.g=gr(f[3]||"",!0),pr(this,f[4]),this.h=gr(f[5]||"",!0),Il(this,f[6]||"",!0),this.m=gr(f[7]||"")):(this.l=!1,this.i=new _r(null,this.l))}vs.prototype.toString=function(){const a=[];var f=this.j;f&&a.push(mr(f,Jh,!0),":");var g=this.g;return(g||f=="file")&&(a.push("//"),(f=this.o)&&a.push(mr(f,Jh,!0),"@"),a.push(hr(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&a.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&a.push("/"),a.push(mr(g,g.charAt(0)=="/"?Ey:wy,!0))),(g=this.i.toString())&&a.push("?",g),(g=this.m)&&a.push("#",mr(g,Cy)),a.join("")},vs.prototype.resolve=function(a){const f=xn(this);let g=!!a.j;g?fr(f,a.j):g=!!a.o,g?f.o=a.o:g=!!a.g,g?f.g=a.g:g=a.u!=null;var v=a.h;if(g)pr(f,a.u);else if(g=!!a.h){if(v.charAt(0)!="/")if(this.g&&!this.h)v="/"+v;else{var M=f.h.lastIndexOf("/");M!=-1&&(v=f.h.slice(0,M+1)+v)}if(M=v,M==".."||M==".")v="";else if(M.indexOf("./")!=-1||M.indexOf("/.")!=-1){v=M.lastIndexOf("/",0)==0,M=M.split("/");const F=[];for(let se=0;se<M.length;){const xe=M[se++];xe=="."?v&&se==M.length&&F.push(""):xe==".."?((F.length>1||F.length==1&&F[0]!="")&&F.pop(),v&&se==M.length&&F.push("")):(F.push(xe),v=!0)}v=F.join("/")}else v=M}return g?f.h=v:g=a.i.toString()!=="",g?Il(f,nd(a.i)):g=!!a.m,g&&(f.m=a.m),f};function xn(a){return new vs(a)}function fr(a,f,g){a.j=g?gr(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function pr(a,f){if(f){if(f=Number(f),isNaN(f)||f<0)throw Error("Bad port number "+f);a.u=f}else a.u=null}function Il(a,f,g){f instanceof _r?(a.i=f,by(a.i,a.l)):(g||(f=mr(f,Ty)),a.i=new _r(f,a.l))}function it(a,f,g){a.i.set(f,g)}function Co(a){return it(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function gr(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function mr(a,f,g){return typeof a=="string"?(a=encodeURI(a).replace(f,Iy),g&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Iy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Jh=/[#\/\?@]/g,wy=/[#\?:]/g,Ey=/[#\?]/g,Ty=/[#\?@]/g,Cy=/#/g;function _r(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function zs(a){a.g||(a.g=new Map,a.h=0,a.i&&Ay(a.i,function(f,g){a.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}t=_r.prototype,t.add=function(a,f){zs(this),this.i=null,a=Ei(this,a);let g=this.g.get(a);return g||this.g.set(a,g=[]),g.push(f),this.h+=1,this};function Xh(a,f){zs(a),f=Ei(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function Zh(a,f){return zs(a),f=Ei(a,f),a.g.has(f)}t.forEach=function(a,f){zs(this),this.g.forEach(function(g,v){g.forEach(function(M){a.call(f,M,v,this)},this)},this)};function ed(a,f){zs(a);let g=[];if(typeof f=="string")Zh(a,f)&&(g=g.concat(a.g.get(Ei(a,f))));else for(a=Array.from(a.g.values()),f=0;f<a.length;f++)g=g.concat(a[f]);return g}t.set=function(a,f){return zs(this),this.i=null,a=Ei(this,a),Zh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},t.get=function(a,f){return a?(a=ed(this,a),a.length>0?String(a[0]):f):f};function td(a,f,g){Xh(a,f),g.length>0&&(a.i=null,a.g.set(Ei(a,f),_(g)),a.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(let v=0;v<f.length;v++){var g=f[v];const M=hr(g);g=ed(this,g);for(let F=0;F<g.length;F++){let se=M;g[F]!==""&&(se+="="+hr(g[F])),a.push(se)}}return this.i=a.join("&")};function nd(a){const f=new _r;return f.i=a.i,a.g&&(f.g=new Map(a.g),f.h=a.h),f}function Ei(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function by(a,f){f&&!a.j&&(zs(a),a.i=null,a.g.forEach(function(g,v){const M=v.toLowerCase();v!=M&&(Xh(this,v),td(this,M,g))},a)),a.j=f}function Sy(a,f){const g=new at;if(o.Image){const v=new Image;v.onload=d(ys,g,"TestLoadImage: loaded",!0,f,v),v.onerror=d(ys,g,"TestLoadImage: error",!1,f,v),v.onabort=d(ys,g,"TestLoadImage: abort",!1,f,v),v.ontimeout=d(ys,g,"TestLoadImage: timeout",!1,f,v),o.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else f(!1)}function Ry(a,f){const g=new at,v=new AbortController,M=setTimeout(()=>{v.abort(),ys(g,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:v.signal}).then(F=>{clearTimeout(M),F.ok?ys(g,"TestPingServer: ok",!0,f):ys(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(M),ys(g,"TestPingServer: error",!1,f)})}function ys(a,f,g,v,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),v(g)}catch{}}function Py(){this.g=new k}function wl(a){this.i=a.Sb||null,this.h=a.ab||!1}p(wl,B),wl.prototype.g=function(){return new bo(this.i,this.h)};function bo(a,f){Z.call(this),this.H=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(bo,Z),t=bo.prototype,t.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=f,this.readyState=1,yr(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const f={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(f.body=a),(this.H||o).fetch(new Request(this.D,f)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,vr(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,yr(this)),this.g&&(this.readyState=3,yr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;sd(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function sd(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.B.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?vr(this):yr(this),this.readyState==3&&sd(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,vr(this))},t.Na=function(a){this.g&&(this.response=a,vr(this))},t.ga=function(){this.g&&vr(this)};function vr(a){a.readyState=4,a.l=null,a.j=null,a.B=null,yr(a)}t.setRequestHeader=function(a,f){this.A.append(a,f)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,a.push(g[0]+": "+g[1]),g=f.next();return a.join(`\r
`)};function yr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(bo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function id(a){let f="";return Mt(a,function(g,v){f+=v,f+=":",f+=g,f+=`\r
`}),f}function El(a,f,g){e:{for(v in g){var v=!1;break e}v=!0}v||(g=id(g),typeof a=="string"?g!=null&&hr(g):it(a,f,g))}function ft(a){Z.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(ft,Z);var ky=/^https?$/i,Dy=["POST","PUT"];t=ft.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,f,g,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():cr.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch(F){rd(this,F);return}if(a=g||"",g=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var M in v)g.set(M,v[M]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const F of v.keys())g.set(F,v.get(F));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(g.keys()).find(F=>F.toLowerCase()=="content-type"),M=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Dy,f,void 0)>=0)||v||M||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,se]of g)this.g.setRequestHeader(F,se);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(F){rd(this,F)}};function rd(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.o=5,od(a),So(a)}function od(a){a.A||(a.A=!0,K(a,"complete"),K(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,K(this,"complete"),K(this,"abort"),So(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),So(this,!0)),ft.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?ad(this):this.Xa())},t.Xa=function(){ad(this)};function ad(a){if(a.h&&typeof r<"u"){if(a.v&&As(a)==4)setTimeout(a.Ca.bind(a),0);else if(K(a,"readystatechange"),As(a)==4){a.h=!1;try{const F=a.ca();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var v;if(v=F===0){let se=String(a.D).match(Yh)[1]||null;!se&&o.self&&o.self.location&&(se=o.self.location.protocol.slice(0,-1)),v=!ky.test(se?se.toLowerCase():"")}g=v}if(g)K(a,"complete"),K(a,"success");else{a.o=6;try{var M=As(a)>2?a.g.statusText:""}catch{M=""}a.l=M+" ["+a.ca()+"]",od(a)}}finally{So(a)}}}}function So(a,f){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const g=a.g;a.g=null,f||K(a,"ready");try{g.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function As(a){return a.g?a.g.readyState:0}t.ca=function(){try{return As(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),H(f)}};function ld(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function xy(a){const f={};a=(a.g&&As(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(E(a[v]))continue;var g=my(a[v]);const M=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const F=f[M]||[];f[M]=F,F.push(g)}cn(f,function(v){return v.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ar(a,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[a]||f}function cd(a){this.za=0,this.i=[],this.j=new at,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ar("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ar("baseRetryDelayMs",5e3,a),this.Za=Ar("retryDelaySeedMs",1e4,a),this.Ta=Ar("forwardChannelMaxRetries",2,a),this.va=Ar("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new qh(a&&a.concurrentRequestLimit),this.Ba=new Py,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=cd.prototype,t.ka=8,t.I=1,t.connect=function(a,f,g,v){Fe(0),this.W=a,this.H=f||{},g&&v!==void 0&&(this.H.OSID=g,this.H.OAID=v),this.F=this.X,this.J=vd(this,null,this.W),Po(this)};function Tl(a){if(ud(a),a.I==3){var f=a.V++,g=xn(a.J);if(it(g,"SID",a.M),it(g,"RID",f),it(g,"TYPE","terminate"),Ir(a,g),f=new _s(a,a.j,f),f.M=2,f.A=Co(xn(g)),g=!1,o.navigator&&o.navigator.sendBeacon)try{g=o.navigator.sendBeacon(f.A.toString(),"")}catch{}!g&&o.Image&&(new Image().src=f.A,g=!0),g||(f.g=yd(f.j,null),f.g.ea(f.A)),f.F=Date.now(),To(f)}_d(a)}function Ro(a){a.g&&(bl(a),a.g.cancel(),a.g=null)}function ud(a){Ro(a),a.v&&(o.clearTimeout(a.v),a.v=null),ko(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Po(a){if(!Qh(a.h)&&!a.m){a.m=!0;var f=a.Ea;oe||w(),Pe||(oe(),Pe=!0),S.add(f,a),a.D=0}}function Ny(a,f){return Wh(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=f.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Ut(u(a.Ea,a,f),md(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const M=new _s(this,this.j,a);let F=this.o;if(this.U&&(F?(F=Pt(F),ht(F,this.U)):F=this.U),this.u!==null||this.R||(M.J=F,F=null),this.S)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var v=this.i[g];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(f+=v,f>4096){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=dd(this,M,f),g=xn(this.J),it(g,"RID",a),it(g,"CVER",22),this.G&&it(g,"X-HTTP-Session-Id",this.G),Ir(this,g),F&&(this.R?f="headers="+hr(id(F))+"&"+f:this.u&&El(g,this.u,F)),Al(this.h,M),this.Ra&&it(g,"TYPE","init"),this.S?(it(g,"$req",f),it(g,"SID","null"),M.U=!0,ml(M,g,null)):ml(M,g,f),this.I=2}}else this.I==3&&(a?hd(this,a):this.i.length==0||Qh(this.h)||hd(this))};function hd(a,f){var g;f?g=f.l:g=a.V++;const v=xn(a.J);it(v,"SID",a.M),it(v,"RID",g),it(v,"AID",a.K),Ir(a,v),a.u&&a.o&&El(v,a.u,a.o),g=new _s(a,a.j,g,a.D+1),a.u===null&&(g.J=a.o),f&&(a.i=f.G.concat(a.i)),f=dd(a,g,1e3),g.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Al(a.h,g),ml(g,v,f)}function Ir(a,f){a.H&&Mt(a.H,function(g,v){it(f,v,g)}),a.l&&Mt({},function(g,v){it(f,v,g)})}function dd(a,f,g){g=Math.min(a.i.length,g);const v=a.l?u(a.l.Ka,a.l,a):null;e:{var M=a.i;let xe=-1;for(;;){const Ct=["count="+g];xe==-1?g>0?(xe=M[0].g,Ct.push("ofs="+xe)):xe=0:Ct.push("ofs="+xe);let Je=!0;for(let Dt=0;Dt<g;Dt++){var F=M[Dt].g;const Nn=M[Dt].map;if(F-=xe,F<0)xe=Math.max(0,M[Dt].g-100),Je=!1;else try{F="req"+F+"_"||"";try{var se=Nn instanceof Map?Nn:Object.entries(Nn);for(const[Ys,Is]of se){let ws=Is;l(Is)&&(ws=Be(Is)),Ct.push(F+Ys+"="+encodeURIComponent(ws))}}catch(Ys){throw Ct.push(F+"type="+encodeURIComponent("_badmap")),Ys}}catch{v&&v(Nn)}}if(Je){se=Ct.join("&");break e}}se=void 0}return a=a.i.splice(0,g),f.G=a,se}function fd(a){if(!a.g&&!a.v){a.Y=1;var f=a.Da;oe||w(),Pe||(oe(),Pe=!0),S.add(f,a),a.A=0}}function Cl(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Ut(u(a.Da,a),md(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,pd(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Ut(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Fe(10),Ro(this),pd(this))};function bl(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function pd(a){a.g=new _s(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var f=xn(a.na);it(f,"RID","rpc"),it(f,"SID",a.M),it(f,"AID",a.K),it(f,"CI",a.F?"0":"1"),!a.F&&a.ia&&it(f,"TO",a.ia),it(f,"TYPE","xmlhttp"),Ir(a,f),a.u&&a.o&&El(f,a.u,a.o),a.O&&(a.g.H=a.O);var g=a.g;a=a.ba,g.M=1,g.A=Co(xn(f)),g.u=null,g.R=!0,Hh(g,a)}t.Va=function(){this.C!=null&&(this.C=null,Ro(this),Cl(this),Fe(19))};function ko(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function gd(a,f){var g=null;if(a.g==f){ko(a),bl(a),a.g=null;var v=2}else if(yl(a.h,f))g=f.G,zh(a.h,f),v=1;else return;if(a.I!=0){if(f.o)if(v==1){g=f.u?f.u.length:0,f=Date.now()-f.F;var M=a.D;v=gt(),K(v,new hn(v,g)),Po(a)}else fd(a);else if(M=f.m,M==3||M==0&&f.X>0||!(v==1&&Ny(a,f)||v==2&&Cl(a)))switch(g&&g.length>0&&(f=a.h,f.i=f.i.concat(g)),M){case 1:Ks(a,5);break;case 4:Ks(a,10);break;case 3:Ks(a,6);break;default:Ks(a,2)}}}function md(a,f){let g=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(g*=2),g*f}function Ks(a,f){if(a.j.info("Error code "+f),f==2){var g=u(a.bb,a),v=a.Ua;const M=!v;v=new vs(v||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||fr(v,"https"),Co(v),M?Sy(v.toString(),g):Ry(v.toString(),g)}else Fe(2);a.I=0,a.l&&a.l.pa(f),_d(a),ud(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Fe(2)):(this.j.info("Failed to ping google.com"),Fe(1))};function _d(a){if(a.I=0,a.ja=[],a.l){const f=Kh(a.h);(f.length!=0||a.i.length!=0)&&(y(a.ja,f),y(a.ja,a.i),a.h.i.length=0,_(a.i),a.i.length=0),a.l.oa()}}function vd(a,f,g){var v=g instanceof vs?xn(g):new vs(g);if(v.g!="")f&&(v.g=f+"."+v.g),pr(v,v.u);else{var M=o.location;v=M.protocol,f=f?f+"."+M.hostname:M.hostname,M=+M.port;const F=new vs(null);v&&fr(F,v),f&&(F.g=f),M&&pr(F,M),g&&(F.h=g),v=F}return g=a.G,f=a.wa,g&&f&&it(v,g,f),it(v,"VER",a.ka),Ir(a,v),v}function yd(a,f,g){if(f&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Aa&&!a.ma?new ft(new wl({ab:g})):new ft(a.ma),f.Fa(a.L),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ad(){}t=Ad.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Do(){}Do.prototype.g=function(a,f){return new dn(a,f)};function dn(a,f){Z.call(this),this.g=new cd(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.sa&&(a?a["X-WebChannel-Client-Profile"]=f.sa:a={"X-WebChannel-Client-Profile":f.sa}),this.g.U=a,(a=f&&f.Qb)&&!E(a)&&(this.g.u=a),this.A=f&&f.supportsCrossDomainXhr||!1,this.v=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!E(f)&&(this.g.G=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new Ti(this)}p(dn,Z),dn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},dn.prototype.close=function(){Tl(this.g)},dn.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var g={};g.__data__=a,a=g}else this.v&&(g={},g.__data__=Be(a),a=g);f.i.push(new yy(f.Ya++,a)),f.I==3&&Po(f)},dn.prototype.N=function(){this.g.l=null,delete this.j,Tl(this.g),delete this.g,dn.Z.N.call(this)};function Id(a){de.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const g in f){a=g;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}p(Id,de);function wd(){ye.call(this),this.status=1}p(wd,ye);function Ti(a){this.g=a}p(Ti,Ad),Ti.prototype.ra=function(){K(this.g,"a")},Ti.prototype.qa=function(a){K(this.g,new Id(a))},Ti.prototype.pa=function(a){K(this.g,new wd)},Ti.prototype.oa=function(){K(this.g,"b")},Do.prototype.createWebChannel=Do.prototype.g,dn.prototype.send=dn.prototype.o,dn.prototype.open=dn.prototype.m,dn.prototype.close=dn.prototype.close,v_=function(){return new Do},__=function(){return gt()},m_=we,Cc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ms.NO_ERROR=0,ms.TIMEOUT=8,ms.HTTP_ERROR=6,Xo=ms,lr.COMPLETE="complete",g_=lr,ne.EventType=ue,ue.OPEN="a",ue.CLOSE="b",ue.ERROR="c",ue.MESSAGE="d",Z.prototype.listen=Z.prototype.J,Sr=ne,ft.prototype.listenOnce=ft.prototype.K,ft.prototype.getLastError=ft.prototype.Ha,ft.prototype.getLastErrorCode=ft.prototype.ya,ft.prototype.getStatus=ft.prototype.ca,ft.prototype.getResponseJson=ft.prototype.La,ft.prototype.getResponseText=ft.prototype.la,ft.prototype.send=ft.prototype.ea,ft.prototype.setWithCredentials=ft.prototype.Fa,p_=ft}).apply(typeof Bo<"u"?Bo:typeof self<"u"?self:typeof window<"u"?window:{});const Wf="@firebase/firestore",zf="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ht.UNAUTHENTICATED=new Ht(null),Ht.GOOGLE_CREDENTIALS=new Ht("google-credentials-uid"),Ht.FIRST_PARTY=new Ht("first-party-uid"),Ht.MOCK_USER=new Ht("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ir="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=new Ja("@firebase/firestore");function Ri(){return hi.logLevel}function le(t,...e){if(hi.logLevel<=Ne.DEBUG){const n=e.map(Au);hi.debug(`Firestore (${ir}): ${t}`,...n)}}function fs(t,...e){if(hi.logLevel<=Ne.ERROR){const n=e.map(Au);hi.error(`Firestore (${ir}): ${t}`,...n)}}function Wi(t,...e){if(hi.logLevel<=Ne.WARN){const n=e.map(Au);hi.warn(`Firestore (${ir}): ${t}`,...n)}}function Au(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Ie(t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,y_(t,s,n)}function y_(t,e,n){let s=`FIRESTORE (${ir}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw fs(s),new Error(s)}function ze(t,e,n,s){let i="Unexpected state";typeof n=="string"?i=n:s=n,t||y_(e,i,s)}function Se(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class me extends Dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class uC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Ht.UNAUTHENTICATED)))}shutdown(){}}class hC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class dC{constructor(e){this.t=e,this.currentUser=Ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ze(this.o===void 0,42304);let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new Vs;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Vs,e.enqueueRetryable((()=>i(this.currentUser)))};const o=()=>{const c=r;e.enqueueRetryable((async()=>{await c.promise,await i(this.currentUser)}))},l=c=>{le("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(le("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Vs)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==e?(le("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ze(typeof s.accessToken=="string",31837,{l:s}),new A_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string",2055,{h:e}),new Ht(e)}}class fC{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=Ht.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class pC{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new fC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(Ht.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Kf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Tn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ze(this.o===void 0,3512);const s=r=>{r.error!=null&&le("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.m;return this.m=r.token,le("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable((()=>s(r)))};const i=r=>{le("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>i(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?i(r):le("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Kf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(ze(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Kf(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const i=mC(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%62))}return s}}function Me(t,e){return t<e?-1:t>e?1:0}function bc(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const i=t.charAt(s),r=e.charAt(s);if(i!==r)return zl(i)===zl(r)?Me(i,r):zl(i)?1:-1}return Me(t.length,e.length)}const _C=55296,vC=57343;function zl(t){const e=t.charCodeAt(0);return e>=_C&&e<=vC}function zi(t,e,n){return t.length===e.length&&t.every(((s,i)=>n(s,e[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf="__name__";class Vn{constructor(e,n,s){n===void 0?n=0:n>e.length&&Ie(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&Ie(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Vn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Vn?e.forEach((s=>{n.push(s)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=Vn.compareSegments(e.get(i),n.get(i));if(r!==0)return r}return Me(e.length,n.length)}static compareSegments(e,n){const s=Vn.isNumericId(e),i=Vn.isNumericId(n);return s&&!i?-1:!s&&i?1:s&&i?Vn.extractNumericId(e).compare(Vn.extractNumericId(n)):bc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Os.fromString(e.substring(4,e.length-2))}}class lt extends Vn{construct(e,n,s){return new lt(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new me(X.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((i=>i.length>0)))}return new lt(n)}static emptyPath(){return new lt([])}}const yC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Lt extends Vn{construct(e,n,s){return new Lt(e,n,s)}static isValidIdentifier(e){return yC.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Lt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Yf}static keyField(){return new Lt([Yf])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new me(X.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new me(X.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new me(X.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(s+=l,i++):(r(),i++)}if(r(),o)throw new me(X.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Lt(n)}static emptyPath(){return new Lt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.path=e}static fromPath(e){return new ve(lt.fromString(e))}static fromName(e){return new ve(lt.fromString(e).popFirst(5))}static empty(){return new ve(lt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&lt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return lt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ve(new lt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(t,e,n){if(!n)throw new me(X.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function IC(t,e,n,s){if(e===!0&&s===!0)throw new me(X.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Jf(t){if(!ve.isDocumentKey(t))throw new me(X.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function I_(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function wu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Ie(12329,{type:typeof t})}function no(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new me(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wu(t);throw new me(X.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function It(t,e){const n={typeString:t};return e&&(n.value=e),n}function yo(t,e){if(!I_(t))throw new me(X.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const i=e[s].typeString,r="value"in e[s]?{value:e[s].value}:void 0;if(!(s in t)){n=`JSON missing required field: '${s}'`;break}const o=t[s];if(i&&typeof o!==i){n=`JSON field '${s}' must be a ${i}.`;break}if(r!==void 0&&o!==r.value){n=`Expected '${s}' field to equal '${r.value}'`;break}}if(n)throw new me(X.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf=-62135596800,Zf=1e6;class rt{static now(){return rt.fromMillis(Date.now())}static fromDate(e){return rt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*Zf);return new rt(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new me(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new me(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Xf)throw new me(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new me(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Zf}_compareTo(e){return this.seconds===e.seconds?Me(this.nanoseconds,e.nanoseconds):Me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:rt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(yo(e,rt._jsonSchema))return new rt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Xf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}rt._jsonSchemaVersion="firestore/timestamp/1.0",rt._jsonSchema={type:It("string",rt._jsonSchemaVersion),seconds:It("number"),nanoseconds:It("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new rt(0,0))}static max(){return new Te(new rt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const so=-1;function wC(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=Te.fromTimestamp(s===1e9?new rt(n+1,0):new rt(n,s));return new $s(i,ve.empty(),e)}function EC(t){return new $s(t.readTime,t.key,so)}class $s{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new $s(Te.min(),ve.empty(),so)}static max(){return new $s(Te.max(),ve.empty(),so)}}function TC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ve.comparator(t.documentKey,e.documentKey),n!==0?n:Me(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rr(t){if(t.code!==X.FAILED_PRECONDITION||t.message!==CC)throw t;le("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ie(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new J(((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof J?n:J.resolve(n)}catch(n){return J.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):J.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):J.reject(n)}static resolve(e){return new J(((n,s)=>{n(e)}))}static reject(e){return new J(((n,s)=>{s(e)}))}static waitFor(e){return new J(((n,s)=>{let i=0,r=0,o=!1;e.forEach((l=>{++i,l.next((()=>{++r,o&&r===i&&n()}),(c=>s(c)))})),o=!0,r===i&&n()}))}static or(e){let n=J.resolve(!1);for(const s of e)n=n.next((i=>i?J.resolve(i):s()));return n}static forEach(e,n){const s=[];return e.forEach(((i,r)=>{s.push(n.call(this,i,r))})),this.waitFor(s)}static mapArray(e,n){return new J(((s,i)=>{const r=e.length,o=new Array(r);let l=0;for(let c=0;c<r;c++){const u=c;n(e[u]).next((d=>{o[u]=d,++l,l===r&&s(o)}),(d=>i(d)))}}))}static doWhile(e,n){return new J(((s,i)=>{const r=()=>{e()===!0?n().next((()=>{r()}),i):s()};r()}))}}function SC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function or(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class tl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}tl.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu=-1;function nl(t){return t==null}function Ea(t){return t===0&&1/t==-1/0}function RC(t){return typeof t=="number"&&Number.isInteger(t)&&!Ea(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_="";function PC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=ep(e)),e=kC(t.get(n),e);return ep(e)}function kC(t,e){let n=e;const s=t.length;for(let i=0;i<s;i++){const r=t.charAt(i);switch(r){case"\0":n+="";break;case w_:n+="";break;default:n+=r}}return n}function ep(t){return t+w_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function vi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function E_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n){this.comparator=e,this.root=n||Ot.EMPTY}insert(e,n){return new ut(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ot.BLACK,null,null))}remove(e){return new ut(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ot.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,s)=>(e(n,s),!1)))}toString(){const e=[];return this.inorderTraversal(((n,s)=>(e.push(`${n}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fo(this.root,e,this.comparator,!0)}}class Fo{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ot{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ot.RED,this.left=i??Ot.EMPTY,this.right=r??Ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Ot(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ot.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ie(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ie(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ie(27949);return e+(this.isRed()?0:1)}}Ot.EMPTY=null,Ot.RED=!0,Ot.BLACK=!1;Ot.EMPTY=new class{constructor(){this.size=0}get key(){throw Ie(57766)}get value(){throw Ie(16141)}get color(){throw Ie(16727)}get left(){throw Ie(29726)}get right(){throw Ie(36894)}copy(e,n,s,i,r){return this}insert(e,n,s){return new Ot(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.comparator=e,this.data=new ut(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,s)=>(e(n),!1)))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new np(this.data.getIterator())}getIteratorFrom(e){return new np(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((s=>{n=n.add(s)})),n}isEqual(e){if(!(e instanceof Rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Rt(this.comparator);return n.data=e,n}}class np{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this.fields=e,e.sort(Lt.comparator)}static empty(){return new bn([])}unionWith(e){let n=new Rt(Lt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new bn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return zi(this.fields,e.fields,((n,s)=>n.isEqual(s)))}}/**
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
 */class T_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new T_("Invalid base64 string: "+r):r}})(e);return new Ft(n)}static fromUint8Array(e){const n=(function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r})(e);return new Ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ft.EMPTY_BYTE_STRING=new Ft("");const DC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hs(t){if(ze(!!t,39018),typeof t=="string"){let e=0;const n=DC.exec(t);if(ze(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:_t(t.seconds),nanos:_t(t.nanos)}}function _t(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function js(t){return typeof t=="string"?Ft.fromBase64String(t):Ft.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_="server_timestamp",b_="__type__",S_="__previous_value__",R_="__local_write_time__";function Tu(t){return(t?.mapValue?.fields||{})[b_]?.stringValue===C_}function sl(t){const e=t.mapValue.fields[S_];return Tu(e)?sl(e):e}function io(t){const e=Hs(t.mapValue.fields[R_].timestampValue);return new rt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e,n,s,i,r,o,l,c,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=d}}const Ta="(default)";class ro{constructor(e,n){this.projectId=e,this.database=n||Ta}static empty(){return new ro("","")}get isDefaultDatabase(){return this.database===Ta}isEqual(e){return e instanceof ro&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_="__type__",NC="__max__",Uo={mapValue:{}},k_="__vector__",Ca="value";function Gs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Tu(t)?4:OC(t)?9007199254740991:MC(t)?10:11:Ie(28295,{value:t})}function Kn(t,e){if(t===e)return!0;const n=Gs(t);if(n!==Gs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return io(t).isEqual(io(e));case 3:return(function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=Hs(i.timestampValue),l=Hs(r.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(i,r){return js(i.bytesValue).isEqual(js(r.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(i,r){return _t(i.geoPointValue.latitude)===_t(r.geoPointValue.latitude)&&_t(i.geoPointValue.longitude)===_t(r.geoPointValue.longitude)})(t,e);case 2:return(function(i,r){if("integerValue"in i&&"integerValue"in r)return _t(i.integerValue)===_t(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=_t(i.doubleValue),l=_t(r.doubleValue);return o===l?Ea(o)===Ea(l):isNaN(o)&&isNaN(l)}return!1})(t,e);case 9:return zi(t.arrayValue.values||[],e.arrayValue.values||[],Kn);case 10:case 11:return(function(i,r){const o=i.mapValue.fields||{},l=r.mapValue.fields||{};if(tp(o)!==tp(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Kn(o[c],l[c])))return!1;return!0})(t,e);default:return Ie(52216,{left:t})}}function oo(t,e){return(t.values||[]).find((n=>Kn(n,e)))!==void 0}function Ki(t,e){if(t===e)return 0;const n=Gs(t),s=Gs(e);if(n!==s)return Me(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Me(t.booleanValue,e.booleanValue);case 2:return(function(r,o){const l=_t(r.integerValue||r.doubleValue),c=_t(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(t,e);case 3:return sp(t.timestampValue,e.timestampValue);case 4:return sp(io(t),io(e));case 5:return bc(t.stringValue,e.stringValue);case 6:return(function(r,o){const l=js(r),c=js(o);return l.compareTo(c)})(t.bytesValue,e.bytesValue);case 7:return(function(r,o){const l=r.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=Me(l[u],c[u]);if(d!==0)return d}return Me(l.length,c.length)})(t.referenceValue,e.referenceValue);case 8:return(function(r,o){const l=Me(_t(r.latitude),_t(o.latitude));return l!==0?l:Me(_t(r.longitude),_t(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return ip(t.arrayValue,e.arrayValue);case 10:return(function(r,o){const l=r.fields||{},c=o.fields||{},u=l[Ca]?.arrayValue,d=c[Ca]?.arrayValue,p=Me(u?.values?.length||0,d?.values?.length||0);return p!==0?p:ip(u,d)})(t.mapValue,e.mapValue);case 11:return(function(r,o){if(r===Uo.mapValue&&o===Uo.mapValue)return 0;if(r===Uo.mapValue)return 1;if(o===Uo.mapValue)return-1;const l=r.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=bc(c[p],d[p]);if(m!==0)return m;const _=Ki(l[c[p]],u[d[p]]);if(_!==0)return _}return Me(c.length,d.length)})(t.mapValue,e.mapValue);default:throw Ie(23264,{he:n})}}function sp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Me(t,e);const n=Hs(t),s=Hs(e),i=Me(n.seconds,s.seconds);return i!==0?i:Me(n.nanos,s.nanos)}function ip(t,e){const n=t.values||[],s=e.values||[];for(let i=0;i<n.length&&i<s.length;++i){const r=Ki(n[i],s[i]);if(r)return r}return Me(n.length,s.length)}function Yi(t){return Sc(t)}function Sc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const s=Hs(n);return`time(${s.seconds},${s.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return js(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return ve.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let s="[",i=!0;for(const r of n.values||[])i?i=!1:s+=",",s+=Sc(r);return s+"]"})(t.arrayValue):"mapValue"in t?(function(n){const s=Object.keys(n.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${Sc(n.fields[o])}`;return i+"}"})(t.mapValue):Ie(61005,{value:t})}function Zo(t){switch(Gs(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=sl(t);return e?16+Zo(e):16;case 5:return 2*t.stringValue.length;case 6:return js(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((i,r)=>i+Zo(r)),0)})(t.arrayValue);case 10:case 11:return(function(s){let i=0;return vi(s.fields,((r,o)=>{i+=r.length+Zo(o)})),i})(t.mapValue);default:throw Ie(13486,{value:t})}}function Rc(t){return!!t&&"integerValue"in t}function Cu(t){return!!t&&"arrayValue"in t}function rp(t){return!!t&&"nullValue"in t}function op(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ea(t){return!!t&&"mapValue"in t}function MC(t){return(t?.mapValue?.fields||{})[P_]?.stringValue===k_}function Hr(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return vi(t.mapValue.fields,((n,s)=>e.mapValue.fields[n]=Hr(s))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Hr(t.arrayValue.values[n]);return e}return{...t}}function OC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===NC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.value=e}static empty(){return new vn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ea(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hr(n)}setAll(e){let n=Lt.emptyPath(),s={},i=[];e.forEach(((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=l.popLast()}o?s[l.lastSegment()]=Hr(o):i.push(l.lastSegment())}));const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());ea(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Kn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];ea(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){vi(n,((i,r)=>e[i]=r));for(const i of s)delete e[i]}clone(){return new vn(Hr(this.value))}}function D_(t){const e=[];return vi(t.fields,((n,s)=>{const i=new Lt([n]);if(ea(s)){const r=D_(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)})),new bn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,n,s,i,r,o,l){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Gt(e,0,Te.min(),Te.min(),Te.min(),vn.empty(),0)}static newFoundDocument(e,n,s,i){return new Gt(e,1,n,Te.min(),s,i,0)}static newNoDocument(e,n){return new Gt(e,2,n,Te.min(),Te.min(),vn.empty(),0)}static newUnknownDocument(e,n){return new Gt(e,3,n,Te.min(),Te.min(),vn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ba{constructor(e,n){this.position=e,this.inclusive=n}}function ap(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=ve.comparator(ve.fromName(o.referenceValue),n.key):s=Ki(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function lp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Kn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Sa{constructor(e,n="asc"){this.field=e,this.dir=n}}function VC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class x_{}class St extends x_{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new BC(e,n,s):n==="array-contains"?new $C(e,s):n==="in"?new HC(e,s):n==="not-in"?new jC(e,s):n==="array-contains-any"?new GC(e,s):new St(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new FC(e,s):new UC(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ki(n,this.value)):n!==null&&Gs(this.value)===Gs(n)&&this.matchesComparison(Ki(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ie(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Yn extends x_{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Yn(e,n)}matches(e){return N_(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function N_(t){return t.op==="and"}function M_(t){return LC(t)&&N_(t)}function LC(t){for(const e of t.filters)if(e instanceof Yn)return!1;return!0}function Pc(t){if(t instanceof St)return t.field.canonicalString()+t.op.toString()+Yi(t.value);if(M_(t))return t.filters.map((e=>Pc(e))).join(",");{const e=t.filters.map((n=>Pc(n))).join(",");return`${t.op}(${e})`}}function O_(t,e){return t instanceof St?(function(s,i){return i instanceof St&&s.op===i.op&&s.field.isEqual(i.field)&&Kn(s.value,i.value)})(t,e):t instanceof Yn?(function(s,i){return i instanceof Yn&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce(((r,o,l)=>r&&O_(o,i.filters[l])),!0):!1})(t,e):void Ie(19439)}function V_(t){return t instanceof St?(function(n){return`${n.field.canonicalString()} ${n.op} ${Yi(n.value)}`})(t):t instanceof Yn?(function(n){return n.op.toString()+" {"+n.getFilters().map(V_).join(" ,")+"}"})(t):"Filter"}class BC extends St{constructor(e,n,s){super(e,n,s),this.key=ve.fromName(s.referenceValue)}matches(e){const n=ve.comparator(e.key,this.key);return this.matchesComparison(n)}}class FC extends St{constructor(e,n){super(e,"in",n),this.keys=L_("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class UC extends St{constructor(e,n){super(e,"not-in",n),this.keys=L_("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function L_(t,e){return(e.arrayValue?.values||[]).map((n=>ve.fromName(n.referenceValue)))}class $C extends St{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Cu(n)&&oo(n.arrayValue,this.value)}}class HC extends St{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&oo(this.value.arrayValue,n)}}class jC extends St{constructor(e,n){super(e,"not-in",n)}matches(e){if(oo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!oo(this.value.arrayValue,n)}}class GC extends St{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Cu(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>oo(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e,n=null,s=[],i=[],r=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=l,this.Te=null}}function cp(t,e=null,n=[],s=[],i=null,r=null,o=null){return new qC(t,e,n,s,i,r,o)}function bu(t){const e=Se(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((s=>Pc(s))).join(","),n+="|ob:",n+=e.orderBy.map((s=>(function(r){return r.field.canonicalString()+r.dir})(s))).join(","),nl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>Yi(s))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>Yi(s))).join(",")),e.Te=n}return e.Te}function Su(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!VC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!O_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!lp(t.startAt,e.startAt)&&lp(t.endAt,e.endAt)}function kc(t){return ve.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,n=null,s=[],i=[],r=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function QC(t,e,n,s,i,r,o,l){return new il(t,e,n,s,i,r,o,l)}function Ru(t){return new il(t)}function up(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function WC(t){return t.collectionGroup!==null}function jr(t){const e=Se(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const r of e.explicitOrderBy)e.Ie.push(r),n.add(r.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Rt(Lt.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((u=>{u.isInequality()&&(l=l.add(u.field))}))})),l})(e).forEach((r=>{n.has(r.canonicalString())||r.isKeyField()||e.Ie.push(new Sa(r,s))})),n.has(Lt.keyField().canonicalString())||e.Ie.push(new Sa(Lt.keyField(),s))}return e.Ie}function $n(t){const e=Se(t);return e.Ee||(e.Ee=zC(e,jr(t))),e.Ee}function zC(t,e){if(t.limitType==="F")return cp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((i=>{const r=i.dir==="desc"?"asc":"desc";return new Sa(i.field,r)}));const n=t.endAt?new ba(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new ba(t.startAt.position,t.startAt.inclusive):null;return cp(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function Dc(t,e,n){return new il(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function rl(t,e){return Su($n(t),$n(e))&&t.limitType===e.limitType}function B_(t){return`${bu($n(t))}|lt:${t.limitType}`}function Pi(t){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((i=>V_(i))).join(", ")}]`),nl(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((i=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(i))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((i=>Yi(i))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((i=>Yi(i))).join(",")),`Target(${s})`})($n(t))}; limitType=${t.limitType})`}function ol(t,e){return e.isFoundDocument()&&(function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):ve.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)})(t,e)&&(function(s,i){for(const r of jr(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0})(t,e)&&(function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0})(t,e)&&(function(s,i){return!(s.startAt&&!(function(o,l,c){const u=ap(o,l,c);return o.inclusive?u<=0:u<0})(s.startAt,jr(s),i)||s.endAt&&!(function(o,l,c){const u=ap(o,l,c);return o.inclusive?u>=0:u>0})(s.endAt,jr(s),i))})(t,e)}function KC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function F_(t){return(e,n)=>{let s=!1;for(const i of jr(t)){const r=YC(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function YC(t,e,n){const s=t.field.isKeyField()?ve.comparator(e.key,n.key):(function(r,o,l){const c=o.data.field(r),u=l.data.field(r);return c!==null&&u!==null?Ki(c,u):Ie(42886)})(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Ie(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){vi(this.inner,((n,s)=>{for(const[i,r]of s)e(i,r)}))}isEmpty(){return E_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC=new ut(ve.comparator);function ps(){return JC}const U_=new ut(ve.comparator);function Rr(...t){let e=U_;for(const n of t)e=e.insert(n.key,n);return e}function $_(t){let e=U_;return t.forEach(((n,s)=>e=e.insert(n,s.overlayedDocument))),e}function si(){return Gr()}function H_(){return Gr()}function Gr(){return new yi((t=>t.toString()),((t,e)=>t.isEqual(e)))}const XC=new ut(ve.comparator),ZC=new Rt(ve.comparator);function Oe(...t){let e=ZC;for(const n of t)e=e.add(n);return e}const eb=new Rt(Me);function tb(){return eb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ea(e)?"-0":e}}function j_(t){return{integerValue:""+t}}function nb(t,e){return RC(e)?j_(e):Pu(t,e)}/**
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
 */class al{constructor(){this._=void 0}}function sb(t,e,n){return t instanceof Ra?(function(i,r){const o={fields:{[b_]:{stringValue:C_},[R_]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&Tu(r)&&(r=sl(r)),r&&(o.fields[S_]=r),{mapValue:o}})(n,e):t instanceof ao?q_(t,e):t instanceof lo?Q_(t,e):(function(i,r){const o=G_(i,r),l=hp(o)+hp(i.Ae);return Rc(o)&&Rc(i.Ae)?j_(l):Pu(i.serializer,l)})(t,e)}function ib(t,e,n){return t instanceof ao?q_(t,e):t instanceof lo?Q_(t,e):n}function G_(t,e){return t instanceof Pa?(function(s){return Rc(s)||(function(r){return!!r&&"doubleValue"in r})(s)})(e)?e:{integerValue:0}:null}class Ra extends al{}class ao extends al{constructor(e){super(),this.elements=e}}function q_(t,e){const n=W_(e);for(const s of t.elements)n.some((i=>Kn(i,s)))||n.push(s);return{arrayValue:{values:n}}}class lo extends al{constructor(e){super(),this.elements=e}}function Q_(t,e){let n=W_(e);for(const s of t.elements)n=n.filter((i=>!Kn(i,s)));return{arrayValue:{values:n}}}class Pa extends al{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function hp(t){return _t(t.integerValue||t.doubleValue)}function W_(t){return Cu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function rb(t,e){return t.field.isEqual(e.field)&&(function(s,i){return s instanceof ao&&i instanceof ao||s instanceof lo&&i instanceof lo?zi(s.elements,i.elements,Kn):s instanceof Pa&&i instanceof Pa?Kn(s.Ae,i.Ae):s instanceof Ra&&i instanceof Ra})(t.transform,e.transform)}class ob{constructor(e,n){this.version=e,this.transformResults=n}}class ls{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ls}static exists(e){return new ls(void 0,e)}static updateTime(e){return new ls(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ta(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ll{}function z_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Y_(t.key,ls.none()):new Ao(t.key,t.data,ls.none());{const n=t.data,s=vn.empty();let i=new Rt(Lt.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Ai(t.key,s,new bn(i.toArray()),ls.none())}}function ab(t,e,n){t instanceof Ao?(function(i,r,o){const l=i.value.clone(),c=fp(i.fieldTransforms,r,o.transformResults);l.setAll(c),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):t instanceof Ai?(function(i,r,o){if(!ta(i.precondition,r))return void r.convertToUnknownDocument(o.version);const l=fp(i.fieldTransforms,r,o.transformResults),c=r.data;c.setAll(K_(i)),c.setAll(l),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):(function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function qr(t,e,n,s){return t instanceof Ao?(function(r,o,l,c){if(!ta(r.precondition,o))return l;const u=r.value.clone(),d=pp(r.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,s):t instanceof Ai?(function(r,o,l,c){if(!ta(r.precondition,o))return l;const u=pp(r.fieldTransforms,c,o),d=o.data;return d.setAll(K_(r)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((p=>p.field)))})(t,e,n,s):(function(r,o,l){return ta(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l})(t,e,n)}function lb(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=G_(s.transform,i||null);r!=null&&(n===null&&(n=vn.empty()),n.set(s.field,r))}return n||null}function dp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&zi(s,i,((r,o)=>rb(r,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ao extends ll{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ai extends ll{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function K_(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function fp(t,e,n){const s=new Map;ze(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,l=e.data.field(r.field);s.set(r.field,ib(o,l,n[i]))}return s}function pp(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,sb(r,o,e))}return s}class Y_ extends ll{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cb extends ll{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&ab(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=qr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=qr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=H_();return this.mutations.forEach((i=>{const r=e.get(i.key),o=r.overlayedDocument;let l=this.applyToLocalView(o,r.mutatedFields);l=n.has(i.key)?null:l;const c=z_(o,l);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(Te.min())})),s}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Oe())}isEqual(e){return this.batchId===e.batchId&&zi(this.mutations,e.mutations,((n,s)=>dp(n,s)))&&zi(this.baseMutations,e.baseMutations,((n,s)=>dp(n,s)))}}class ku{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){ze(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let i=(function(){return XC})();const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new ku(e,n,s,i)}}/**
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
 */class hb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class db{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yt,$e;function fb(t){switch(t){case X.OK:return Ie(64938);case X.CANCELLED:case X.UNKNOWN:case X.DEADLINE_EXCEEDED:case X.RESOURCE_EXHAUSTED:case X.INTERNAL:case X.UNAVAILABLE:case X.UNAUTHENTICATED:return!1;case X.INVALID_ARGUMENT:case X.NOT_FOUND:case X.ALREADY_EXISTS:case X.PERMISSION_DENIED:case X.FAILED_PRECONDITION:case X.ABORTED:case X.OUT_OF_RANGE:case X.UNIMPLEMENTED:case X.DATA_LOSS:return!0;default:return Ie(15467,{code:t})}}function J_(t){if(t===void 0)return fs("GRPC error has no .code"),X.UNKNOWN;switch(t){case yt.OK:return X.OK;case yt.CANCELLED:return X.CANCELLED;case yt.UNKNOWN:return X.UNKNOWN;case yt.DEADLINE_EXCEEDED:return X.DEADLINE_EXCEEDED;case yt.RESOURCE_EXHAUSTED:return X.RESOURCE_EXHAUSTED;case yt.INTERNAL:return X.INTERNAL;case yt.UNAVAILABLE:return X.UNAVAILABLE;case yt.UNAUTHENTICATED:return X.UNAUTHENTICATED;case yt.INVALID_ARGUMENT:return X.INVALID_ARGUMENT;case yt.NOT_FOUND:return X.NOT_FOUND;case yt.ALREADY_EXISTS:return X.ALREADY_EXISTS;case yt.PERMISSION_DENIED:return X.PERMISSION_DENIED;case yt.FAILED_PRECONDITION:return X.FAILED_PRECONDITION;case yt.ABORTED:return X.ABORTED;case yt.OUT_OF_RANGE:return X.OUT_OF_RANGE;case yt.UNIMPLEMENTED:return X.UNIMPLEMENTED;case yt.DATA_LOSS:return X.DATA_LOSS;default:return Ie(39323,{code:t})}}($e=yt||(yt={}))[$e.OK=0]="OK",$e[$e.CANCELLED=1]="CANCELLED",$e[$e.UNKNOWN=2]="UNKNOWN",$e[$e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$e[$e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$e[$e.NOT_FOUND=5]="NOT_FOUND",$e[$e.ALREADY_EXISTS=6]="ALREADY_EXISTS",$e[$e.PERMISSION_DENIED=7]="PERMISSION_DENIED",$e[$e.UNAUTHENTICATED=16]="UNAUTHENTICATED",$e[$e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$e[$e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$e[$e.ABORTED=10]="ABORTED",$e[$e.OUT_OF_RANGE=11]="OUT_OF_RANGE",$e[$e.UNIMPLEMENTED=12]="UNIMPLEMENTED",$e[$e.INTERNAL=13]="INTERNAL",$e[$e.UNAVAILABLE=14]="UNAVAILABLE",$e[$e.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function pb(){return new TextEncoder}/**
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
 */const gb=new Os([4294967295,4294967295],0);function gp(t){const e=pb().encode(t),n=new f_;return n.update(e),new Uint8Array(n.digest())}function mp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Os([n,s],0),new Os([i,r],0)]}class Du{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Pr(`Invalid padding: ${n}`);if(s<0)throw new Pr(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Pr(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Pr(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Os.fromNumber(this.ge)}ye(e,n,s){let i=e.add(n.multiply(Os.fromNumber(s)));return i.compare(gb)===1&&(i=new Os([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=gp(e),[s,i]=mp(n);for(let r=0;r<this.hashCount;r++){const o=this.ye(s,i,r);if(!this.we(o))return!1}return!0}static create(e,n,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Du(r,i,n);return s.forEach((l=>o.insert(l))),o}insert(e){if(this.ge===0)return;const n=gp(e),[s,i]=mp(n);for(let r=0;r<this.hashCount;r++){const o=this.ye(s,i,r);this.Se(o)}}Se(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Pr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Io.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new cl(Te.min(),i,new ut(Me),ps(),Oe())}}class Io{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Io(s,n,Oe(),Oe(),Oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,n,s,i){this.be=e,this.removedTargetIds=n,this.key=s,this.De=i}}class X_{constructor(e,n){this.targetId=e,this.Ce=n}}class Z_{constructor(e,n,s=Ft.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class _p{constructor(){this.ve=0,this.Fe=vp(),this.Me=Ft.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Oe(),n=Oe(),s=Oe();return this.Fe.forEach(((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:Ie(38017,{changeType:r})}})),new Io(this.Me,this.xe,e,n,s)}qe(){this.Oe=!1,this.Fe=vp()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ze(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class mb{constructor(e){this.Ge=e,this.ze=new Map,this.je=ps(),this.Je=$o(),this.He=$o(),this.Ye=new ut(Me)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const s=this.nt(n);switch(e.state){case 0:this.rt(n)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(e.resumeToken));break;default:Ie(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((s,i)=>{this.rt(i)&&n(i)}))}st(e){const n=e.targetId,s=e.Ce.count,i=this.ot(n);if(i){const r=i.target;if(kc(r))if(s===0){const o=new ve(r.path);this.et(n,o,Gt.newNoDocument(o,Te.min()))}else ze(s===1,20013,{expectedCount:s});else{const o=this._t(n);if(o!==s){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=n;let o,l;try{o=js(s).toUint8Array()}catch(c){if(c instanceof T_)return Wi("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Du(o,i,r)}catch(c){return Wi(c instanceof Pr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,n,s){return n.Ce.count===s-this.Pt(e,n.targetId)?0:2}Pt(e,n){const s=this.Ge.getRemoteKeysForTarget(n);let i=0;return s.forEach((r=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(l)||(this.et(n,r,null),i++)})),i}Tt(e){const n=new Map;this.ze.forEach(((r,o)=>{const l=this.ot(o);if(l){if(r.current&&kc(l.target)){const c=new ve(l.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,Gt.newNoDocument(c,e))}r.Be&&(n.set(o,r.ke()),r.qe())}}));let s=Oe();this.He.forEach(((r,o)=>{let l=!0;o.forEachWhile((c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(s=s.add(r))})),this.je.forEach(((r,o)=>o.setReadTime(e)));const i=new cl(e,n,this.Ye,this.je,s);return this.je=ps(),this.Je=$o(),this.He=$o(),this.Ye=new ut(Me),i}Xe(e,n){if(!this.rt(e))return;const s=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,s){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),s&&(this.je=this.je.insert(n,s))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new _p,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Rt(Me),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Rt(Me),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||le("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new _p),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function $o(){return new ut(ve.comparator)}function vp(){return new ut(ve.comparator)}const _b={asc:"ASCENDING",desc:"DESCENDING"},vb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},yb={and:"AND",or:"OR"};class Ab{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function xc(t,e){return t.useProto3Json||nl(e)?e:{value:e}}function ka(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ev(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ib(t,e){return ka(t,e.toTimestamp())}function Hn(t){return ze(!!t,49232),Te.fromTimestamp((function(n){const s=Hs(n);return new rt(s.seconds,s.nanos)})(t))}function xu(t,e){return Nc(t,e).canonicalString()}function Nc(t,e){const n=(function(i){return new lt(["projects",i.projectId,"databases",i.database])})(t).child("documents");return e===void 0?n:n.child(e)}function tv(t){const e=lt.fromString(t);return ze(ov(e),10190,{key:e.toString()}),e}function Mc(t,e){return xu(t.databaseId,e.path)}function Kl(t,e){const n=tv(e);if(n.get(1)!==t.databaseId.projectId)throw new me(X.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new me(X.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ve(sv(n))}function nv(t,e){return xu(t.databaseId,e)}function wb(t){const e=tv(t);return e.length===4?lt.emptyPath():sv(e)}function Oc(t){return new lt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function sv(t){return ze(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function yp(t,e,n){return{name:Mc(t,e),fields:n.value.mapValue.fields}}function Eb(t,e){let n;if("targetChange"in e){e.targetChange;const s=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Ie(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=(function(u,d){return u.useProto3Json?(ze(d===void 0||typeof d=="string",58123),Ft.fromBase64String(d||"")):(ze(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Ft.fromUint8Array(d||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&(function(u){const d=u.code===void 0?X.UNKNOWN:J_(u.code);return new me(d,u.message||"")})(o);n=new Z_(s,i,r,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Kl(t,s.document.name),r=Hn(s.document.updateTime),o=s.document.createTime?Hn(s.document.createTime):Te.min(),l=new vn({mapValue:{fields:s.document.fields}}),c=Gt.newFoundDocument(i,r,o,l),u=s.targetIds||[],d=s.removedTargetIds||[];n=new na(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Kl(t,s.document),r=s.readTime?Hn(s.readTime):Te.min(),o=Gt.newNoDocument(i,r),l=s.removedTargetIds||[];n=new na([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Kl(t,s.document),r=s.removedTargetIds||[];n=new na([],r,i,null)}else{if(!("filter"in e))return Ie(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new db(i,r),l=s.targetId;n=new X_(l,o)}}return n}function Tb(t,e){let n;if(e instanceof Ao)n={update:yp(t,e.key,e.value)};else if(e instanceof Y_)n={delete:Mc(t,e.key)};else if(e instanceof Ai)n={update:yp(t,e.key,e.data),updateMask:Nb(e.fieldMask)};else{if(!(e instanceof cb))return Ie(16599,{Vt:e.type});n={verify:Mc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((s=>(function(r,o){const l=o.transform;if(l instanceof Ra)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ao)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof lo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Pa)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw Ie(20930,{transform:o.transform})})(0,s)))),e.precondition.isNone||(n.currentDocument=(function(i,r){return r.updateTime!==void 0?{updateTime:Ib(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:Ie(27497)})(t,e.precondition)),n}function Cb(t,e){return t&&t.length>0?(ze(e!==void 0,14353),t.map((n=>(function(i,r){let o=i.updateTime?Hn(i.updateTime):Hn(r);return o.isEqual(Te.min())&&(o=Hn(r)),new ob(o,i.transformResults||[])})(n,e)))):[]}function bb(t,e){return{documents:[nv(t,e.path)]}}function Sb(t,e){const n={structuredQuery:{}},s=e.path;let i;e.collectionGroup!==null?(i=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=nv(t,i);const r=(function(u){if(u.length!==0)return rv(Yn.create(u,"and"))})(e.filters);r&&(n.structuredQuery.where=r);const o=(function(u){if(u.length!==0)return u.map((d=>(function(m){return{field:ki(m.field),direction:kb(m.dir)}})(d)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=xc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:n,parent:i}}function Rb(t){let e=wb(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){ze(s===1,65062);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let r=[];n.where&&(r=(function(p){const m=iv(p);return m instanceof Yn&&M_(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((m=>(function(y){return new Sa(Di(y.field),(function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(y.direction))})(m)))})(n.orderBy));let l=null;n.limit&&(l=(function(p){let m;return m=typeof p=="object"?p.value:p,nl(m)?null:m})(n.limit));let c=null;n.startAt&&(c=(function(p){const m=!!p.before,_=p.values||[];return new ba(_,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const m=!p.before,_=p.values||[];return new ba(_,m)})(n.endAt)),QC(e,i,o,r,l,"F",c,u)}function Pb(t,e){const n=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ie(28987,{purpose:i})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function iv(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Di(n.unaryFilter.field);return St.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=Di(n.unaryFilter.field);return St.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Di(n.unaryFilter.field);return St.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Di(n.unaryFilter.field);return St.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ie(61313);default:return Ie(60726)}})(t):t.fieldFilter!==void 0?(function(n){return St.create(Di(n.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ie(58110);default:return Ie(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return Yn.create(n.compositeFilter.filters.map((s=>iv(s))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Ie(1026)}})(n.compositeFilter.op))})(t):Ie(30097,{filter:t})}function kb(t){return _b[t]}function Db(t){return vb[t]}function xb(t){return yb[t]}function ki(t){return{fieldPath:t.canonicalString()}}function Di(t){return Lt.fromServerFormat(t.fieldPath)}function rv(t){return t instanceof St?(function(n){if(n.op==="=="){if(op(n.value))return{unaryFilter:{field:ki(n.field),op:"IS_NAN"}};if(rp(n.value))return{unaryFilter:{field:ki(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(op(n.value))return{unaryFilter:{field:ki(n.field),op:"IS_NOT_NAN"}};if(rp(n.value))return{unaryFilter:{field:ki(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ki(n.field),op:Db(n.op),value:n.value}}})(t):t instanceof Yn?(function(n){const s=n.getFilters().map((i=>rv(i)));return s.length===1?s[0]:{compositeFilter:{op:xb(n.op),filters:s}}})(t):Ie(54877,{filter:t})}function Nb(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function ov(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,n,s,i,r=Te.min(),o=Te.min(),l=Ft.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Ds(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ds(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ds(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ds(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e){this.yt=e}}function Ob(t){const e=Rb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Dc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(){this.Cn=new Lb}addToCollectionParentIndex(e,n){return this.Cn.add(n),J.resolve()}getCollectionParents(e,n){return J.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return J.resolve()}deleteFieldIndex(e,n){return J.resolve()}deleteAllFieldIndexes(e){return J.resolve()}createTargetIndexes(e,n){return J.resolve()}getDocumentsMatchingTarget(e,n){return J.resolve(null)}getIndexType(e,n){return J.resolve(0)}getFieldIndexes(e,n){return J.resolve([])}getNextCollectionGroupToUpdate(e){return J.resolve(null)}getMinOffset(e,n){return J.resolve($s.min())}getMinOffsetFromCollectionGroup(e,n){return J.resolve($s.min())}updateCollectionGroup(e,n,s){return J.resolve()}updateIndexEntries(e,n){return J.resolve()}}class Lb{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new Rt(lt.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Rt(lt.comparator)).toArray()}}/**
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
 */const Ap={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},av=41943040;class an{static withCacheSize(e){return new an(e,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an.DEFAULT_COLLECTION_PERCENTILE=10,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,an.DEFAULT=new an(av,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),an.DISABLED=new an(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Ji(0)}static cr(){return new Ji(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip="LruGarbageCollector",Bb=1048576;function wp([t,e],[n,s]){const i=Me(t,n);return i===0?Me(e,s):i}class Fb{constructor(e){this.Ir=e,this.buffer=new Rt(wp),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();wp(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Ub{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){le(Ip,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){or(n)?le(Ip,"Ignoring IndexedDB error during garbage collection: ",n):await rr(n)}await this.Vr(3e5)}))}}class $b{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(e,n){if(n===0)return J.resolve(tl.ce);const s=new Fb(n);return this.mr.forEachTarget(e,(i=>s.Ar(i.sequenceNumber))).next((()=>this.mr.pr(e,(i=>s.Ar(i))))).next((()=>s.maxValue))}removeTargets(e,n,s){return this.mr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(le("LruGarbageCollector","Garbage collection skipped; disabled"),J.resolve(Ap)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(le("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ap):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let s,i,r,o,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(le("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i)))).next((p=>(s=p,l=Date.now(),this.removeTargets(e,s,n)))).next((p=>(r=p,c=Date.now(),this.removeOrphanedDocuments(e,s)))).next((p=>(u=Date.now(),Ri()<=Ne.DEBUG&&le("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${r} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),J.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:p}))))}}function Hb(t,e){return new $b(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(){this.changes=new yi((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?J.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Gb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next((i=>(s=i,this.remoteDocumentCache.getEntry(e,n)))).next((i=>(s!==null&&qr(s.mutation,i,bn.empty(),rt.now()),i)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.getLocalViewOfDocuments(e,s,Oe()).next((()=>s))))}getLocalViewOfDocuments(e,n,s=Oe()){const i=si();return this.populateOverlays(e,i,n).next((()=>this.computeViews(e,n,i,s).next((r=>{let o=Rr();return r.forEach(((l,c)=>{o=o.insert(l,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const s=si();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,Oe())))}populateOverlays(e,n,s){const i=[];return s.forEach((r=>{n.has(r)||i.push(r)})),this.documentOverlayCache.getOverlays(e,i).next((r=>{r.forEach(((o,l)=>{n.set(o,l)}))}))}computeViews(e,n,s,i){let r=ps();const o=Gr(),l=(function(){return Gr()})();return n.forEach(((c,u)=>{const d=s.get(u.key);i.has(u.key)&&(d===void 0||d.mutation instanceof Ai)?r=r.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),qr(d.mutation,u,d.mutation.getFieldMask(),rt.now())):o.set(u.key,bn.empty())})),this.recalculateAndSaveOverlays(e,r).next((c=>(c.forEach(((u,d)=>o.set(u,d))),n.forEach(((u,d)=>l.set(u,new Gb(d,o.get(u)??null)))),l)))}recalculateAndSaveOverlays(e,n){const s=Gr();let i=new ut(((o,l)=>o-l)),r=Oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const l of o)l.keys().forEach((c=>{const u=n.get(c);if(u===null)return;let d=s.get(c)||bn.empty();d=l.applyToLocalView(u,d),s.set(c,d);const p=(i.get(l.batchId)||Oe()).add(c);i=i.insert(l.batchId,p)}))})).next((()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,p=H_();d.forEach((m=>{if(!r.has(m)){const _=z_(n.get(m),s.get(m));_!==null&&p.set(m,_),r=r.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return J.waitFor(o)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,n,s,i){return(function(o){return ve.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):WC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,i):this.getDocumentsMatchingCollectionQuery(e,n,s,i)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next((r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):J.resolve(si());let l=so,c=r;return o.next((u=>J.forEach(u,((d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),r.get(d)?J.resolve():this.remoteDocumentCache.getEntry(e,d).next((m=>{c=c.insert(d,m)}))))).next((()=>this.populateOverlays(e,u,r))).next((()=>this.computeViews(e,c,u,Oe()))).next((d=>({batchId:l,changes:$_(d)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ve(n)).next((s=>{let i=Rr();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i}))}getDocumentsMatchingCollectionGroupQuery(e,n,s,i){const r=n.collectionGroup;let o=Rr();return this.indexManager.getCollectionParents(e,r).next((l=>J.forEach(l,(c=>{const u=(function(p,m){return new il(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,c.child(r));return this.getDocumentsMatchingCollectionQuery(e,u,s,i).next((d=>{d.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next((o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r,i)))).next((o=>{r.forEach(((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,Gt.newInvalidDocument(d)))}));let l=Rr();return o.forEach(((c,u)=>{const d=r.get(c);d!==void 0&&qr(d.mutation,u,bn.empty(),rt.now()),ol(n,u)&&(l=l.insert(c,u))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return J.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(i){return{id:i.id,version:i.version,createTime:Hn(i.createTime)}})(n)),J.resolve()}getNamedQuery(e,n){return J.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(i){return{name:i.name,query:Ob(i.bundledQuery),readTime:Hn(i.readTime)}})(n)),J.resolve()}}/**
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
 */class Wb{constructor(){this.overlays=new ut(ve.comparator),this.qr=new Map}getOverlay(e,n){return J.resolve(this.overlays.get(n))}getOverlays(e,n){const s=si();return J.forEach(n,(i=>this.getOverlay(e,i).next((r=>{r!==null&&s.set(i,r)})))).next((()=>s))}saveOverlays(e,n,s){return s.forEach(((i,r)=>{this.St(e,n,r)})),J.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.qr.get(s);return i!==void 0&&(i.forEach((r=>this.overlays=this.overlays.remove(r))),this.qr.delete(s)),J.resolve()}getOverlaysForCollection(e,n,s){const i=si(),r=n.length+1,o=new ve(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return J.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new ut(((u,d)=>u-d));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let d=r.get(u.largestBatchId);d===null&&(d=si(),r=r.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=si(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((u,d)=>l.set(u,d))),!(l.size()>=i)););return J.resolve(l)}St(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(s.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new hb(n,s));let r=this.qr.get(n);r===void 0&&(r=Oe(),this.qr.set(n,r)),this.qr.set(n,r.add(s.key))}}/**
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
 */class zb{constructor(){this.sessionToken=Ft.EMPTY_BYTE_STRING}getSessionToken(e){return J.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,J.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(){this.Qr=new Rt(xt.$r),this.Ur=new Rt(xt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const s=new xt(e,n);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,n){e.forEach((s=>this.addReference(s,n)))}removeReference(e,n){this.Gr(new xt(e,n))}zr(e,n){e.forEach((s=>this.removeReference(s,n)))}jr(e){const n=new ve(new lt([])),s=new xt(n,e),i=new xt(n,e+1),r=[];return this.Ur.forEachInRange([s,i],(o=>{this.Gr(o),r.push(o.key)})),r}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new ve(new lt([])),s=new xt(n,e),i=new xt(n,e+1);let r=Oe();return this.Ur.forEachInRange([s,i],(o=>{r=r.add(o.key)})),r}containsKey(e){const n=new xt(e,0),s=this.Qr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class xt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return ve.comparator(e.key,n.key)||Me(e.Yr,n.Yr)}static Kr(e,n){return Me(e.Yr,n.Yr)||ve.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Rt(xt.$r)}checkEmpty(e){return J.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ub(r,n,s,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new xt(l.key,r)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return J.resolve(o)}lookupMutationBatch(e,n){return J.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ei(s),r=i<0?0:i;return J.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return J.resolve(this.mutationQueue.length===0?Eu:this.tr-1)}getAllMutationBatches(e){return J.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new xt(n,0),i=new xt(n,Number.POSITIVE_INFINITY),r=[];return this.Zr.forEachInRange([s,i],(o=>{const l=this.Xr(o.Yr);r.push(l)})),J.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Rt(Me);return n.forEach((i=>{const r=new xt(i,0),o=new xt(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([r,o],(l=>{s=s.add(l.Yr)}))})),J.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;ve.isDocumentKey(r)||(r=r.child(""));const o=new xt(new ve(r),0);let l=new Rt(Me);return this.Zr.forEachWhile((c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(l=l.add(c.Yr)),!0)}),o),J.resolve(this.ti(l))}ti(e){const n=[];return e.forEach((s=>{const i=this.Xr(s);i!==null&&n.push(i)})),n}removeMutationBatch(e,n){ze(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return J.forEach(n.mutations,(i=>{const r=new xt(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,n){const s=new xt(n,0),i=this.Zr.firstAfterOrEqual(s);return J.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,J.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e){this.ri=e,this.docs=(function(){return new ut(ve.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.ri(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return J.resolve(s?s.document.mutableCopy():Gt.newInvalidDocument(n))}getEntries(e,n){let s=ps();return n.forEach((i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Gt.newInvalidDocument(i))})),J.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=ps();const o=n.path,l=new ve(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||TC(EC(d),s)<=0||(i.has(d.key)||ol(n,d))&&(r=r.insert(d.key,d.mutableCopy()))}return J.resolve(r)}getAllFromCollectionGroup(e,n,s,i){Ie(9500)}ii(e,n){return J.forEach(this.docs,(s=>n(s)))}newChangeBuffer(e){return new Jb(this)}getSize(e){return J.resolve(this.size)}}class Jb extends jb{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((s,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(s)})),J.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e){this.persistence=e,this.si=new yi((n=>bu(n)),Su),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.oi=0,this._i=new Nu,this.targetCount=0,this.ai=Ji.ur()}forEachTarget(e,n){return this.si.forEach(((s,i)=>n(i))),J.resolve()}getLastRemoteSnapshotVersion(e){return J.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return J.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),J.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.oi&&(this.oi=n),J.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Ji(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,J.resolve()}updateTargetData(e,n){return this.Pr(n),J.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,J.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.si.forEach(((o,l)=>{l.sequenceNumber<=n&&s.get(l.targetId)===null&&(this.si.delete(o),r.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)})),J.waitFor(r).next((()=>i))}getTargetCount(e){return J.resolve(this.targetCount)}getTargetData(e,n){const s=this.si.get(n)||null;return J.resolve(s)}addMatchingKeys(e,n,s){return this._i.Wr(n,s),J.resolve()}removeMatchingKeys(e,n,s){this._i.zr(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach((o=>{r.push(i.markPotentiallyOrphaned(e,o))})),J.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),J.resolve()}getMatchingKeysForTargetId(e,n){const s=this._i.Hr(n);return J.resolve(s)}containsKey(e,n){return J.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e,n){this.ui={},this.overlays={},this.ci=new tl(0),this.li=!1,this.li=!0,this.hi=new zb,this.referenceDelegate=e(this),this.Pi=new Xb(this),this.indexManager=new Vb,this.remoteDocumentCache=(function(i){return new Yb(i)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new Mb(n),this.Ii=new Qb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Wb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.ui[e.toKey()];return s||(s=new Kb(n,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,s){le("MemoryPersistence","Starting transaction:",e);const i=new Zb(this.ci.next());return this.referenceDelegate.Ei(),s(i).next((r=>this.referenceDelegate.di(i).next((()=>r)))).toPromise().then((r=>(i.raiseOnCommittedEvent(),r)))}Ai(e,n){return J.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,n))))}}class Zb extends bC{constructor(e){super(),this.currentSequenceNumber=e}}class Mu{constructor(e){this.persistence=e,this.Ri=new Nu,this.Vi=null}static mi(e){return new Mu(e)}get fi(){if(this.Vi)return this.Vi;throw Ie(60996)}addReference(e,n,s){return this.Ri.addReference(s,n),this.fi.delete(s.toString()),J.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.fi.add(s.toString()),J.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),J.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((i=>this.fi.add(i.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next((i=>{i.forEach((r=>this.fi.add(r.toString())))})).next((()=>s.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return J.forEach(this.fi,(s=>{const i=ve.fromPath(s);return this.gi(e,i).next((r=>{r||n.removeEntry(i,Te.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((s=>{s?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return J.or([()=>J.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Da{constructor(e,n){this.persistence=e,this.pi=new yi((s=>PC(s.path)),((s,i)=>s.isEqual(i))),this.garbageCollector=Hb(this,n)}static mi(e,n){return new Da(e,n)}Ei(){}di(e){return J.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>n.next((i=>s+i))))}wr(e){let n=0;return this.pr(e,(s=>{n++})).next((()=>n))}pr(e,n){return J.forEach(this.pi,((s,i)=>this.br(e,s,i).next((r=>r?J.resolve():n(i)))))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const i=this.persistence.getRemoteDocumentCache(),r=i.newChangeBuffer();return i.ii(e,(o=>this.br(e,o,n).next((l=>{l||(s++,r.removeEntry(o,Te.min()))})))).next((()=>r.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),J.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),J.resolve()}removeReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),J.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),J.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Zo(e.data.value)),n}br(e,n,s){return J.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return J.resolve(i!==void 0&&i>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Es=s,this.ds=i}static As(e,n){let s=Oe(),i=Oe();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Ou(e,n.fromCache,s,i)}}/**
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
 */class eS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Hw()?8:SC(zt())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,s,i){const r={result:null};return this.ys(e,n).next((o=>{r.result=o})).next((()=>{if(!r.result)return this.ws(e,n,i,s).next((o=>{r.result=o}))})).next((()=>{if(r.result)return;const o=new eS;return this.Ss(e,n,o).next((l=>{if(r.result=l,this.Vs)return this.bs(e,n,o,l.size)}))})).next((()=>r.result))}bs(e,n,s,i){return s.documentReadCount<this.fs?(Ri()<=Ne.DEBUG&&le("QueryEngine","SDK will not create cache indexes for query:",Pi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),J.resolve()):(Ri()<=Ne.DEBUG&&le("QueryEngine","Query:",Pi(n),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.gs*i?(Ri()<=Ne.DEBUG&&le("QueryEngine","The SDK decides to create cache indexes for query:",Pi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,$n(n))):J.resolve())}ys(e,n){if(up(n))return J.resolve(null);let s=$n(n);return this.indexManager.getIndexType(e,s).next((i=>i===0?null:(n.limit!==null&&i===1&&(n=Dc(n,null,"F"),s=$n(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next((r=>{const o=Oe(...r);return this.ps.getDocuments(e,o).next((l=>this.indexManager.getMinOffset(e,s).next((c=>{const u=this.Ds(n,l);return this.Cs(n,u,o,c.readTime)?this.ys(e,Dc(n,null,"F")):this.vs(e,u,n,c)}))))})))))}ws(e,n,s,i){return up(n)||i.isEqual(Te.min())?J.resolve(null):this.ps.getDocuments(e,s).next((r=>{const o=this.Ds(n,r);return this.Cs(n,o,s,i)?J.resolve(null):(Ri()<=Ne.DEBUG&&le("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Pi(n)),this.vs(e,o,n,wC(i,so)).next((l=>l)))}))}Ds(e,n){let s=new Rt(F_(e));return n.forEach(((i,r)=>{ol(e,r)&&(s=s.add(r))})),s}Cs(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ss(e,n,s){return Ri()<=Ne.DEBUG&&le("QueryEngine","Using full collection scan to execute query:",Pi(n)),this.ps.getDocumentsMatchingQuery(e,n,$s.min(),s)}vs(e,n,s,i){return this.ps.getDocumentsMatchingQuery(e,s,i).next((r=>(n.forEach((o=>{r=r.insert(o.key,o)})),r)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu="LocalStore",nS=3e8;class sS{constructor(e,n,s,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new ut(Me),this.xs=new yi((r=>bu(r)),Su),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qb(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function iS(t,e,n,s){return new sS(t,e,n,s)}async function cv(t,e){const n=Se(t);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next((r=>(i=r,n.Bs(e),n.mutationQueue.getAllMutationBatches(s)))).next((r=>{const o=[],l=[];let c=Oe();for(const u of i){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of r){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(s,c).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:l})))}))}))}function rS(t,e){const n=Se(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const i=e.batch.keys(),r=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,c,u,d){const p=u.batch,m=p.keys();let _=J.resolve();return m.forEach((y=>{_=_.next((()=>d.getEntry(c,y))).next((A=>{const C=u.docVersions.get(y);ze(C!==null,48541),A.version.compareTo(C)<0&&(p.applyToRemoteDocument(A,u),A.isValidDocument()&&(A.setReadTime(u.commitVersion),d.addEntry(A)))}))})),_.next((()=>l.mutationQueue.removeMutationBatch(c,p)))})(n,s,e,r).next((()=>r.apply(s))).next((()=>n.mutationQueue.performConsistencyCheck(s))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(l){let c=Oe();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c})(e)))).next((()=>n.localDocuments.getDocuments(s,i)))}))}function uv(t){const e=Se(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function oS(t,e){const n=Se(t),s=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const l=[];e.targetChanges.forEach(((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.Pi.removeMatchingKeys(r,d.removedDocuments,p).next((()=>n.Pi.addMatchingKeys(r,d.addedDocuments,p))));let _=m.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(Ft.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,s)),i=i.insert(p,_),(function(A,C,L){return A.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=nS?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0})(m,_,d)&&l.push(n.Pi.updateTargetData(r,_))}));let c=ps(),u=Oe();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(r,d))})),l.push(aS(r,o,e.documentUpdates).next((d=>{c=d.ks,u=d.qs}))),!s.isEqual(Te.min())){const d=n.Pi.getLastRemoteSnapshotVersion(r).next((p=>n.Pi.setTargetsMetadata(r,r.currentSequenceNumber,s)));l.push(d)}return J.waitFor(l).next((()=>o.apply(r))).next((()=>n.localDocuments.getLocalViewOfDocuments(r,c,u))).next((()=>c))})).then((r=>(n.Ms=i,r)))}function aS(t,e,n){let s=Oe(),i=Oe();return n.forEach((r=>s=s.add(r))),e.getEntries(t,s).next((r=>{let o=ps();return n.forEach(((l,c)=>{const u=r.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(Te.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):le(Vu,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)})),{ks:o,qs:i}}))}function lS(t,e){const n=Se(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Eu),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function cS(t,e){const n=Se(t);return n.persistence.runTransaction("Allocate target","readwrite",(s=>{let i;return n.Pi.getTargetData(s,e).next((r=>r?(i=r,J.resolve(i)):n.Pi.allocateTargetId(s).next((o=>(i=new Ds(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Pi.addTargetData(s,i).next((()=>i)))))))})).then((s=>{const i=n.Ms.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.xs.set(e,s.targetId)),s}))}async function Vc(t,e,n){const s=Se(t),i=s.Ms.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,(o=>s.persistence.referenceDelegate.removeTarget(o,i)))}catch(o){if(!or(o))throw o;le(Vu,`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ms=s.Ms.remove(e),s.xs.delete(i.target)}function Ep(t,e,n){const s=Se(t);let i=Te.min(),r=Oe();return s.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,u,d){const p=Se(c),m=p.xs.get(d);return m!==void 0?J.resolve(p.Ms.get(m)):p.Pi.getTargetData(u,d)})(s,o,$n(e)).next((l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(o,l.targetId).next((c=>{r=c}))})).next((()=>s.Fs.getDocumentsMatchingQuery(o,e,n?i:Te.min(),n?r:Oe()))).next((l=>(uS(s,KC(e),l),{documents:l,Qs:r})))))}function uS(t,e,n){let s=t.Os.get(e)||Te.min();n.forEach(((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)})),t.Os.set(e,s)}class Tp{constructor(){this.activeTargetIds=tb()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class hS{constructor(){this.Mo=new Tp,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,s){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Tp,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp="ConnectivityMonitor";class bp{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){le(Cp,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){le(Cp,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ho=null;function Lc(){return Ho===null?Ho=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ho++,"0x"+Ho.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl="RestConnection",fS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class pS{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${s}/databases/${i}`,this.Wo=this.databaseId.database===Ta?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Go(e,n,s,i,r){const o=Lc(),l=this.zo(e,n.toUriEncodedString());le(Yl,`Sending RPC '${e}' ${o}:`,l,s);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,i,r);const{host:u}=new URL(l),d=tr(u);return this.Jo(e,l,c,s,d).then((p=>(le(Yl,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw Wi(Yl,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",s),p}))}Ho(e,n,s,i,r,o){return this.Go(e,n,s,i,r)}jo(e,n,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ir})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((i,r)=>e[r]=i)),s&&s.headers.forEach(((i,r)=>e[r]=i))}zo(e,n){const s=fS[e];return`${this.Uo}/v1/${n}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t="WebChannelConnection";class mS extends pS{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,s,i,r){const o=Lc();return new Promise(((l,c)=>{const u=new p_;u.setWithCredentials(!0),u.listenOnce(g_.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Xo.NO_ERROR:const p=u.getResponseJson();le($t,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Xo.TIMEOUT:le($t,`RPC '${e}' ${o} timed out`),c(new me(X.DEADLINE_EXCEEDED,"Request time out"));break;case Xo.HTTP_ERROR:const m=u.getStatus();if(le($t,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const y=_?.error;if(y&&y.status&&y.message){const A=(function(L){const Q=L.toLowerCase().replace(/_/g,"-");return Object.values(X).indexOf(Q)>=0?Q:X.UNKNOWN})(y.status);c(new me(A,y.message))}else c(new me(X.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new me(X.UNAVAILABLE,"Connection failed."));break;default:Ie(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{le($t,`RPC '${e}' ${o} completed.`)}}));const d=JSON.stringify(i);le($t,`RPC '${e}' ${o} sending request:`,i),u.send(n,"POST",d,s,15)}))}T_(e,n,s){const i=Lc(),r=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=v_(),l=__(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const d=r.join("");le($t,`Creating RPC '${e}' stream ${i}: ${d}`,c);const p=o.createWebChannel(d,c);this.I_(p);let m=!1,_=!1;const y=new gS({Yo:C=>{_?le($t,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(m||(le($t,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),le($t,`RPC '${e}' stream ${i} sending:`,C),p.send(C))},Zo:()=>p.close()}),A=(C,L,Q)=>{C.listen(L,(j=>{try{Q(j)}catch($){setTimeout((()=>{throw $}),0)}}))};return A(p,Sr.EventType.OPEN,(()=>{_||(le($t,`RPC '${e}' stream ${i} transport opened.`),y.o_())})),A(p,Sr.EventType.CLOSE,(()=>{_||(_=!0,le($t,`RPC '${e}' stream ${i} transport closed`),y.a_(),this.E_(p))})),A(p,Sr.EventType.ERROR,(C=>{_||(_=!0,Wi($t,`RPC '${e}' stream ${i} transport errored. Name:`,C.name,"Message:",C.message),y.a_(new me(X.UNAVAILABLE,"The operation could not be completed")))})),A(p,Sr.EventType.MESSAGE,(C=>{if(!_){const L=C.data[0];ze(!!L,16349);const Q=L,j=Q?.error||Q[0]?.error;if(j){le($t,`RPC '${e}' stream ${i} received error:`,j);const $=j.status;let oe=(function(w){const T=yt[w];if(T!==void 0)return J_(T)})($),Pe=j.message;oe===void 0&&(oe=X.INTERNAL,Pe="Unknown error status: "+$+" with message "+j.message),_=!0,y.a_(new me(oe,Pe)),p.close()}else le($t,`RPC '${e}' stream ${i} received:`,L),y.u_(L)}})),A(l,m_.STAT_EVENT,(C=>{C.stat===Cc.PROXY?le($t,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===Cc.NOPROXY&&le($t,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{y.__()}),0),y}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function Jl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(t){return new Ab(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Mi=e,this.timerId=n,this.d_=s,this.A_=i,this.R_=r,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-s);i>0&&le("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp="PersistentStream";class dv{constructor(e,n,s,i,r,o,l,c){this.Mi=e,this.S_=s,this.b_=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new hv(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===X.RESOURCE_EXHAUSTED?(fs(n.toString()),fs("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===X.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,i])=>{this.D_===n&&this.G_(s,i)}),(s=>{e((()=>{const i=new me(X.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(i)}))}))}G_(e,n){const s=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{s((()=>this.z_(i)))})),this.stream.onMessage((i=>{s((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return le(Sp,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(le(Sp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class _S extends dv{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=Eb(this.serializer,e),s=(function(r){if(!("targetChange"in r))return Te.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?Te.min():o.readTime?Hn(o.readTime):Te.min()})(e);return this.listener.H_(n,s)}Y_(e){const n={};n.database=Oc(this.serializer),n.addTarget=(function(r,o){let l;const c=o.target;if(l=kc(c)?{documents:bb(r,c)}:{query:Sb(r,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=ev(r,o.resumeToken);const u=xc(r,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(Te.min())>0){l.readTime=ka(r,o.snapshotVersion.toTimestamp());const u=xc(r,o.expectedCount);u!==null&&(l.expectedCount=u)}return l})(this.serializer,e);const s=Pb(this.serializer,e);s&&(n.labels=s),this.q_(n)}Z_(e){const n={};n.database=Oc(this.serializer),n.removeTarget=e,this.q_(n)}}class vS extends dv{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return ze(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ze(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ze(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=Cb(e.writeResults,e.commitTime),s=Hn(e.commitTime);return this.listener.na(s,n)}ra(){const e={};e.database=Oc(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((s=>Tb(this.serializer,s)))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{}class AS extends yS{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new me(X.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.Go(e,Nc(n,s),i,r,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new me(X.UNKNOWN,r.toString())}))}Ho(e,n,s,i,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.Ho(e,Nc(n,s),i,o,l,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new me(X.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class IS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(fs(n),this.aa=!1):le("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di="RemoteStore";class wS{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=r,this.Aa.Oo((o=>{s.enqueueAndForget((async()=>{Ii(this)&&(le(di,"Restarting streams for network reachability change."),await(async function(c){const u=Se(c);u.Ea.add(4),await wo(u),u.Ra.set("Unknown"),u.Ea.delete(4),await hl(u)})(this))}))})),this.Ra=new IS(s,i)}}async function hl(t){if(Ii(t))for(const e of t.da)await e(!0)}async function wo(t){for(const e of t.da)await e(!1)}function fv(t,e){const n=Se(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Uu(n)?Fu(n):ar(n).O_()&&Bu(n,e))}function Lu(t,e){const n=Se(t),s=ar(n);n.Ia.delete(e),s.O_()&&pv(n,e),n.Ia.size===0&&(s.O_()?s.L_():Ii(n)&&n.Ra.set("Unknown"))}function Bu(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ar(t).Y_(e)}function pv(t,e){t.Va.Ue(e),ar(t).Z_(e)}function Fu(t){t.Va=new mb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ar(t).start(),t.Ra.ua()}function Uu(t){return Ii(t)&&!ar(t).x_()&&t.Ia.size>0}function Ii(t){return Se(t).Ea.size===0}function gv(t){t.Va=void 0}async function ES(t){t.Ra.set("Online")}async function TS(t){t.Ia.forEach(((e,n)=>{Bu(t,e)}))}async function CS(t,e){gv(t),Uu(t)?(t.Ra.ha(e),Fu(t)):t.Ra.set("Unknown")}async function bS(t,e,n){if(t.Ra.set("Online"),e instanceof Z_&&e.state===2&&e.cause)try{await(async function(i,r){const o=r.cause;for(const l of r.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))})(t,e)}catch(s){le(di,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await xa(t,s)}else if(e instanceof na?t.Va.Ze(e):e instanceof X_?t.Va.st(e):t.Va.tt(e),!n.isEqual(Te.min()))try{const s=await uv(t.localStore);n.compareTo(s)>=0&&await(function(r,o){const l=r.Va.Tt(o);return l.targetChanges.forEach(((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=r.Ia.get(u);d&&r.Ia.set(u,d.withResumeToken(c.resumeToken,o))}})),l.targetMismatches.forEach(((c,u)=>{const d=r.Ia.get(c);if(!d)return;r.Ia.set(c,d.withResumeToken(Ft.EMPTY_BYTE_STRING,d.snapshotVersion)),pv(r,c);const p=new Ds(d.target,c,u,d.sequenceNumber);Bu(r,p)})),r.remoteSyncer.applyRemoteEvent(l)})(t,n)}catch(s){le(di,"Failed to raise snapshot:",s),await xa(t,s)}}async function xa(t,e,n){if(!or(e))throw e;t.Ea.add(1),await wo(t),t.Ra.set("Offline"),n||(n=()=>uv(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{le(di,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await hl(t)}))}function mv(t,e){return e().catch((n=>xa(t,n,e)))}async function dl(t){const e=Se(t),n=qs(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Eu;for(;SS(e);)try{const i=await lS(e.localStore,s);if(i===null){e.Ta.length===0&&n.L_();break}s=i.batchId,RS(e,i)}catch(i){await xa(e,i)}_v(e)&&vv(e)}function SS(t){return Ii(t)&&t.Ta.length<10}function RS(t,e){t.Ta.push(e);const n=qs(t);n.O_()&&n.X_&&n.ea(e.mutations)}function _v(t){return Ii(t)&&!qs(t).x_()&&t.Ta.length>0}function vv(t){qs(t).start()}async function PS(t){qs(t).ra()}async function kS(t){const e=qs(t);for(const n of t.Ta)e.ea(n.mutations)}async function DS(t,e,n){const s=t.Ta.shift(),i=ku.from(s,e,n);await mv(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await dl(t)}async function xS(t,e){e&&qs(t).X_&&await(async function(s,i){if((function(o){return fb(o)&&o!==X.ABORTED})(i.code)){const r=s.Ta.shift();qs(s).B_(),await mv(s,(()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i))),await dl(s)}})(t,e),_v(t)&&vv(t)}async function Rp(t,e){const n=Se(t);n.asyncQueue.verifyOperationInProgress(),le(di,"RemoteStore received new credentials");const s=Ii(n);n.Ea.add(3),await wo(n),s&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await hl(n)}async function NS(t,e){const n=Se(t);e?(n.Ea.delete(2),await hl(n)):e||(n.Ea.add(2),await wo(n),n.Ra.set("Unknown"))}function ar(t){return t.ma||(t.ma=(function(n,s,i){const r=Se(n);return r.sa(),new _S(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)})(t.datastore,t.asyncQueue,{Xo:ES.bind(null,t),t_:TS.bind(null,t),r_:CS.bind(null,t),H_:bS.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),Uu(t)?Fu(t):t.Ra.set("Unknown")):(await t.ma.stop(),gv(t))}))),t.ma}function qs(t){return t.fa||(t.fa=(function(n,s,i){const r=Se(n);return r.sa(),new vS(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)})(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:PS.bind(null,t),r_:xS.bind(null,t),ta:kS.bind(null,t),na:DS.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await dl(t)):(await t.fa.stop(),t.Ta.length>0&&(le(di,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Vs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,l=new $u(e,n,o,i,r);return l.start(s),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new me(X.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hu(t,e){if(fs("AsyncQueue",`${e}: ${t}`),or(t))return new me(X.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{static emptySet(e){return new Ui(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||ve.comparator(n.key,s.key):(n,s)=>ve.comparator(n.key,s.key),this.keyedMap=Rr(),this.sortedSet=new ut(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,s)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ui)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Ui;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(){this.ga=new ut(ve.comparator)}track(e){const n=e.doc.key,s=this.ga.get(n);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(n,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(n):e.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Ie(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,s)=>{e.push(s)})),e}}class Xi{constructor(e,n,s,i,r,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach((l=>{o.push({type:0,doc:l})})),new Xi(e,n,Ui.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class OS{constructor(){this.queries=kp(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const i=Se(n),r=i.queries;i.queries=kp(),r.forEach(((o,l)=>{for(const c of l.Sa)c.onError(s)}))})(this,new me(X.ABORTED,"Firestore shutting down"))}}function kp(){return new yi((t=>B_(t)),rl)}async function VS(t,e){const n=Se(t);let s=3;const i=e.query;let r=n.queries.get(i);r?!r.ba()&&e.Da()&&(s=2):(r=new MS,s=e.Da()?0:1);try{switch(s){case 0:r.wa=await n.onListen(i,!0);break;case 1:r.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Hu(o,`Initialization of query '${Pi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,r),r.Sa.push(e),e.va(n.onlineState),r.wa&&e.Fa(r.wa)&&ju(n)}async function LS(t,e){const n=Se(t),s=e.query;let i=3;const r=n.queries.get(s);if(r){const o=r.Sa.indexOf(e);o>=0&&(r.Sa.splice(o,1),r.Sa.length===0?i=e.Da()?0:1:!r.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function BS(t,e){const n=Se(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const l of o.Sa)l.Fa(i)&&(s=!0);o.wa=i}}s&&ju(n)}function FS(t,e,n){const s=Se(t),i=s.queries.get(e);if(i)for(const r of i.Sa)r.onError(n);s.queries.delete(e)}function ju(t){t.Ca.forEach((e=>{e.next()}))}var Bc,Dp;(Dp=Bc||(Bc={})).Ma="default",Dp.Cache="cache";class US{constructor(e,n,s){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Xi(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Xi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Bc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e){this.key=e}}class Av{constructor(e){this.key=e}}class $S{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Oe(),this.mutatedKeys=Oe(),this.eu=F_(e),this.tu=new Ui(this.eu)}get nu(){return this.Ya}ru(e,n){const s=n?n.iu:new Pp,i=n?n.tu:this.tu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((d,p)=>{const m=i.get(d),_=ol(this.query,p)?p:null,y=!!m&&this.mutatedKeys.has(m.key),A=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let C=!1;m&&_?m.data.isEqual(_.data)?y!==A&&(s.track({type:3,doc:_}),C=!0):this.su(m,_)||(s.track({type:2,doc:_}),C=!0,(c&&this.eu(_,c)>0||u&&this.eu(_,u)<0)&&(l=!0)):!m&&_?(s.track({type:0,doc:_}),C=!0):m&&!_&&(s.track({type:1,doc:m}),C=!0,(c||u)&&(l=!0)),C&&(_?(o=o.add(_),r=A?r.add(d):r.delete(d)):(o=o.delete(d),r=r.delete(d)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),r=r.delete(d.key),s.track({type:1,doc:d})}return{tu:o,iu:s,Cs:l,mutatedKeys:r}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,i){const r=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((d,p)=>(function(_,y){const A=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ie(20277,{Rt:C})}};return A(_)-A(y)})(d.type,p.type)||this.eu(d.doc,p.doc))),this.ou(s),i=i??!1;const l=n&&!i?this._u():[],c=this.Xa.size===0&&this.current&&!i?1:0,u=c!==this.Za;return this.Za=c,o.length!==0||u?{snapshot:new Xi(this.query,e.tu,r,o,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Pp,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Oe(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const n=[];return e.forEach((s=>{this.Xa.has(s)||n.push(new Av(s))})),this.Xa.forEach((s=>{e.has(s)||n.push(new yv(s))})),n}cu(e){this.Ya=e.Qs,this.Xa=Oe();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Xi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Gu="SyncEngine";class HS{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class jS{constructor(e){this.key=e,this.hu=!1}}class GS{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new yi((l=>B_(l)),rl),this.Iu=new Map,this.Eu=new Set,this.du=new ut(ve.comparator),this.Au=new Map,this.Ru=new Nu,this.Vu={},this.mu=new Map,this.fu=Ji.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function qS(t,e,n=!0){const s=bv(t);let i;const r=s.Tu.get(e);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.lu()):i=await Iv(s,e,n,!0),i}async function QS(t,e){const n=bv(t);await Iv(n,e,!0,!1)}async function Iv(t,e,n,s){const i=await cS(t.localStore,$n(e)),r=i.targetId,o=t.sharedClientState.addLocalQueryTarget(r,n);let l;return s&&(l=await WS(t,e,r,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&fv(t.remoteStore,i),l}async function WS(t,e,n,s,i){t.pu=(p,m,_)=>(async function(A,C,L,Q){let j=C.view.ru(L);j.Cs&&(j=await Ep(A.localStore,C.query,!1).then((({documents:S})=>C.view.ru(S,j))));const $=Q&&Q.targetChanges.get(C.targetId),oe=Q&&Q.targetMismatches.get(C.targetId)!=null,Pe=C.view.applyChanges(j,A.isPrimaryClient,$,oe);return Np(A,C.targetId,Pe.au),Pe.snapshot})(t,p,m,_);const r=await Ep(t.localStore,e,!0),o=new $S(e,r.Qs),l=o.ru(r.documents),c=Io.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),u=o.applyChanges(l,t.isPrimaryClient,c);Np(t,n,u.au);const d=new HS(e,n,o);return t.Tu.set(e,d),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function zS(t,e,n){const s=Se(t),i=s.Tu.get(e),r=s.Iu.get(i.targetId);if(r.length>1)return s.Iu.set(i.targetId,r.filter((o=>!rl(o,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await Vc(s.localStore,i.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(i.targetId),n&&Lu(s.remoteStore,i.targetId),Fc(s,i.targetId)})).catch(rr)):(Fc(s,i.targetId),await Vc(s.localStore,i.targetId,!0))}async function KS(t,e){const n=Se(t),s=n.Tu.get(e),i=n.Iu.get(s.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Lu(n.remoteStore,s.targetId))}async function YS(t,e,n){const s=sR(t);try{const i=await(function(o,l){const c=Se(o),u=rt.now(),d=l.reduce(((_,y)=>_.add(y.key)),Oe());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",(_=>{let y=ps(),A=Oe();return c.Ns.getEntries(_,d).next((C=>{y=C,y.forEach(((L,Q)=>{Q.isValidDocument()||(A=A.add(L))}))})).next((()=>c.localDocuments.getOverlayedDocuments(_,y))).next((C=>{p=C;const L=[];for(const Q of l){const j=lb(Q,p.get(Q.key).overlayedDocument);j!=null&&L.push(new Ai(Q.key,j,D_(j.value.mapValue),ls.exists(!0)))}return c.mutationQueue.addMutationBatch(_,u,L,l)})).next((C=>{m=C;const L=C.applyToLocalDocumentSet(p,A);return c.documentOverlayCache.saveOverlays(_,C.batchId,L)}))})).then((()=>({batchId:m.batchId,changes:$_(p)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),(function(o,l,c){let u=o.Vu[o.currentUser.toKey()];u||(u=new ut(Me)),u=u.insert(l,c),o.Vu[o.currentUser.toKey()]=u})(s,i.batchId,n),await Eo(s,i.changes),await dl(s.remoteStore)}catch(i){const r=Hu(i,"Failed to persist write");n.reject(r)}}async function wv(t,e){const n=Se(t);try{const s=await oS(n.localStore,e);e.targetChanges.forEach(((i,r)=>{const o=n.Au.get(r);o&&(ze(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?ze(o.hu,14607):i.removedDocuments.size>0&&(ze(o.hu,42227),o.hu=!1))})),await Eo(n,s,e)}catch(s){await rr(s)}}function xp(t,e,n){const s=Se(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.Tu.forEach(((r,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)})),(function(o,l){const c=Se(o);c.onlineState=l;let u=!1;c.queries.forEach(((d,p)=>{for(const m of p.Sa)m.va(l)&&(u=!0)})),u&&ju(c)})(s.eventManager,e),i.length&&s.Pu.H_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function JS(t,e,n){const s=Se(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.Au.get(e),r=i&&i.key;if(r){let o=new ut(ve.comparator);o=o.insert(r,Gt.newNoDocument(r,Te.min()));const l=Oe().add(r),c=new cl(Te.min(),new Map,new ut(Me),o,l);await wv(s,c),s.du=s.du.remove(r),s.Au.delete(e),qu(s)}else await Vc(s.localStore,e,!1).then((()=>Fc(s,e,n))).catch(rr)}async function XS(t,e){const n=Se(t),s=e.batch.batchId;try{const i=await rS(n.localStore,e);Tv(n,s,null),Ev(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Eo(n,i)}catch(i){await rr(i)}}async function ZS(t,e,n){const s=Se(t);try{const i=await(function(o,l){const c=Se(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next((p=>(ze(p!==null,37113),d=p.keys(),c.mutationQueue.removeMutationBatch(u,p)))).next((()=>c.mutationQueue.performConsistencyCheck(u))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d))).next((()=>c.localDocuments.getDocuments(u,d)))}))})(s.localStore,e);Tv(s,e,n),Ev(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Eo(s,i)}catch(i){await rr(i)}}function Ev(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function Tv(t,e,n){const s=Se(t);let i=s.Vu[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.Vu[s.currentUser.toKey()]=i}}function Fc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Iu.get(e))t.Tu.delete(s),n&&t.Pu.yu(s,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((s=>{t.Ru.containsKey(s)||Cv(t,s)}))}function Cv(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Lu(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),qu(t))}function Np(t,e,n){for(const s of n)s instanceof yv?(t.Ru.addReference(s.key,e),eR(t,s)):s instanceof Av?(le(Gu,"Document no longer in limbo: "+s.key),t.Ru.removeReference(s.key,e),t.Ru.containsKey(s.key)||Cv(t,s.key)):Ie(19791,{wu:s})}function eR(t,e){const n=e.key,s=n.path.canonicalString();t.du.get(n)||t.Eu.has(s)||(le(Gu,"New document in limbo: "+n),t.Eu.add(s),qu(t))}function qu(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new ve(lt.fromString(e)),s=t.fu.next();t.Au.set(s,new jS(n)),t.du=t.du.insert(n,s),fv(t.remoteStore,new Ds($n(Ru(n.path)),s,"TargetPurposeLimboResolution",tl.ce))}}async function Eo(t,e,n){const s=Se(t),i=[],r=[],o=[];s.Tu.isEmpty()||(s.Tu.forEach(((l,c)=>{o.push(s.pu(c,e,n).then((u=>{if((u||n)&&s.isPrimaryClient){const d=u?!u.fromCache:n?.targetChanges.get(c.targetId)?.current;s.sharedClientState.updateQueryState(c.targetId,d?"current":"not-current")}if(u){i.push(u);const d=Ou.As(c.targetId,u);r.push(d)}})))})),await Promise.all(o),s.Pu.H_(i),await(async function(c,u){const d=Se(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>J.forEach(u,(m=>J.forEach(m.Es,(_=>d.persistence.referenceDelegate.addReference(p,m.targetId,_))).next((()=>J.forEach(m.ds,(_=>d.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))))))}catch(p){if(!or(p))throw p;le(Vu,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const _=d.Ms.get(m),y=_.snapshotVersion,A=_.withLastLimboFreeSnapshotVersion(y);d.Ms=d.Ms.insert(m,A)}}})(s.localStore,r))}async function tR(t,e){const n=Se(t);if(!n.currentUser.isEqual(e)){le(Gu,"User change. New user:",e.toKey());const s=await cv(n.localStore,e);n.currentUser=e,(function(r,o){r.mu.forEach((l=>{l.forEach((c=>{c.reject(new me(X.CANCELLED,o))}))})),r.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Eo(n,s.Ls)}}function nR(t,e){const n=Se(t),s=n.Au.get(e);if(s&&s.hu)return Oe().add(s.key);{let i=Oe();const r=n.Iu.get(e);if(!r)return i;for(const o of r){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function bv(t){const e=Se(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=wv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=JS.bind(null,e),e.Pu.H_=BS.bind(null,e.eventManager),e.Pu.yu=FS.bind(null,e.eventManager),e}function sR(t){const e=Se(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=XS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ZS.bind(null,e),e}class Na{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ul(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return iS(this.persistence,new tS,e.initialUser,this.serializer)}Cu(e){return new lv(Mu.mi,this.serializer)}Du(e){return new hS}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Na.provider={build:()=>new Na};class iR extends Na{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ze(this.persistence.referenceDelegate instanceof Da,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Ub(s,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?an.withCacheSize(this.cacheSizeBytes):an.DEFAULT;return new lv((s=>Da.mi(s,n)),this.serializer)}}class Uc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>xp(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=tR.bind(null,this.syncEngine),await NS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new OS})()}createDatastore(e){const n=ul(e.databaseInfo.databaseId),s=(function(r){return new mS(r)})(e.databaseInfo);return(function(r,o,l,c){return new AS(r,o,l,c)})(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return(function(s,i,r,o,l){return new wS(s,i,r,o,l)})(this.localStore,this.datastore,e.asyncQueue,(n=>xp(this.syncEngine,n,0)),(function(){return bp.v()?new bp:new dS})())}createSyncEngine(e,n){return(function(i,r,o,l,c,u,d){const p=new GS(i,r,o,l,c,u);return d&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const s=Se(n);le(di,"RemoteStore shutting down."),s.Ea.add(5),await wo(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Uc.provider={build:()=>new Uc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class rR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):fs("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs="FirestoreClient";class oR{constructor(e,n,s,i,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Ht.UNAUTHENTICATED,this.clientId=Iu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(s,(async o=>{le(Qs,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(s,(o=>(le(Qs,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Hu(n,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Xl(t,e){t.asyncQueue.verifyOperationInProgress(),le(Qs,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async i=>{s.isEqual(i)||(await cv(e.localStore,i),s=i)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Mp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await aR(t);le(Qs,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((s=>Rp(e.remoteStore,s))),t.setAppCheckTokenChangeListener(((s,i)=>Rp(e.remoteStore,i))),t._onlineComponents=e}async function aR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){le(Qs,"Using user provided OfflineComponentProvider");try{await Xl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(i){return i.name==="FirebaseError"?i.code===X.FAILED_PRECONDITION||i.code===X.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(n))throw n;Wi("Error using user provided cache. Falling back to memory cache: "+n),await Xl(t,new Na)}}else le(Qs,"Using default OfflineComponentProvider"),await Xl(t,new iR(void 0));return t._offlineComponents}async function Sv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(le(Qs,"Using user provided OnlineComponentProvider"),await Mp(t,t._uninitializedComponentsProvider._online)):(le(Qs,"Using default OnlineComponentProvider"),await Mp(t,new Uc))),t._onlineComponents}function lR(t){return Sv(t).then((e=>e.syncEngine))}async function cR(t){const e=await Sv(t),n=e.eventManager;return n.onListen=qS.bind(null,e.syncEngine),n.onUnlisten=zS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=QS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=KS.bind(null,e.syncEngine),n}function uR(t,e,n={}){const s=new Vs;return t.asyncQueue.enqueueAndForget((async()=>(function(r,o,l,c,u){const d=new rR({next:m=>{d.Nu(),o.enqueueAndForget((()=>LS(r,p)));const _=m.docs.has(l);!_&&m.fromCache?u.reject(new me(X.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&c&&c.source==="server"?u.reject(new me(X.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new US(Ru(l.path),d,{includeMetadataChanges:!0,qa:!0});return VS(r,p)})(await cR(t),t.asyncQueue,e,n,s))),s.promise}/**
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
 */function Rv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv="firestore.googleapis.com",Vp=!0;class Lp{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new me(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Pv,this.ssl=Vp}else this.host=e.host,this.ssl=e.ssl??Vp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=av;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Bb)throw new me(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}IC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Rv(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new me(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new me(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new me(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,i){return s.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Qu{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new me(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new me(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new uC;switch(s.type){case"firstParty":return new pC(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new me(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=Op.get(n);s&&(le("ComponentProvider","Removing Datastore"),Op.delete(n),s.terminate())})(this),Promise.resolve()}}function hR(t,e,n,s={}){t=no(t,Qu);const i=tr(e),r=t._getSettings(),o={...r,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(bm(`https://${l}`),Sm("Firestore",!0)),r.host!==Pv&&r.host!==l&&Wi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...r,host:l,ssl:i,emulatorOptions:s};if(!Us(c,o)&&(t._setSettings(c),s.mockUserToken)){let u,d;if(typeof s.mockUserToken=="string")u=s.mockUserToken,d=Ht.MOCK_USER;else{u=Mw(s.mockUserToken,t._app?.options.projectId);const p=s.mockUserToken.sub||s.mockUserToken.user_id;if(!p)throw new me(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Ht(p)}t._authCredentials=new hC(new A_(u,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Wu(this.firestore,e,this._query)}}class Nt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new co(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Nt(this.firestore,e,this._key)}toJSON(){return{type:Nt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(yo(n,Nt._jsonSchema))return new Nt(e,s||null,new ve(lt.fromString(n.referencePath)))}}Nt._jsonSchemaVersion="firestore/documentReference/1.0",Nt._jsonSchema={type:It("string",Nt._jsonSchemaVersion),referencePath:It("string")};class co extends Wu{constructor(e,n,s){super(e,n,Ru(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Nt(this.firestore,null,new ve(e))}withConverter(e){return new co(this.firestore,e,this._path)}}function zu(t,e,...n){if(t=ln(t),arguments.length===1&&(e=Iu.newId()),AC("doc","path",e),t instanceof Qu){const s=lt.fromString(e,...n);return Jf(s),new Nt(t,null,new ve(s))}{if(!(t instanceof Nt||t instanceof co))throw new me(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(lt.fromString(e,...n));return Jf(s),new Nt(t.firestore,t instanceof co?t.converter:null,new ve(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp="AsyncQueue";class Fp{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new hv(this,"async_queue_retry"),this._c=()=>{const s=Jl();s&&le(Bp,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=Jl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Jl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new Vs;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!or(e))throw e;le(Bp,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,fs("INTERNAL UNHANDLED ERROR: ",Up(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=$u.createAndSchedule(this,e,n,s,(r=>this.hc(r)));return this.tc.push(i),i}uc(){this.nc&&Ie(47125,{Pc:Up(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Up(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Ku extends Qu{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new Fp,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Fp(e),this._firestoreClient=void 0,await e}}}function dR(t,e){const n=typeof t=="object"?t:cu(),s=typeof t=="string"?t:Ta,i=_i(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=xw("firestore");r&&hR(i,...r)}return i}function kv(t){if(t._terminated)throw new me(X.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||fR(t),t._firestoreClient}function fR(t){const e=t._freezeSettings(),n=(function(i,r,o,l){return new xC(i,r,o,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Rv(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)})(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new oR(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(i){const r=i?._online.build();return{_offline:i?._offline.build(r),_online:r}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yn(Ft.fromBase64String(e))}catch(n){throw new me(X.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new yn(Ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:yn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(yo(e,yn._jsonSchema))return yn.fromBase64String(e.bytes)}}yn._jsonSchemaVersion="firestore/bytes/1.0",yn._jsonSchema={type:It("string",yn._jsonSchemaVersion),bytes:It("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new me(X.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Lt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new me(X.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new me(X.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Me(this._lat,e._lat)||Me(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:jn._jsonSchemaVersion}}static fromJSON(e){if(yo(e,jn._jsonSchema))return new jn(e.latitude,e.longitude)}}jn._jsonSchemaVersion="firestore/geoPoint/1.0",jn._jsonSchema={type:It("string",jn._jsonSchemaVersion),latitude:It("number"),longitude:It("number")};/**
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
 */class Gn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,i){if(s.length!==i.length)return!1;for(let r=0;r<s.length;++r)if(s[r]!==i[r])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Gn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(yo(e,Gn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Gn(e.vectorValues);throw new me(X.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Gn._jsonSchemaVersion="firestore/vectorValue/1.0",Gn._jsonSchema={type:It("string",Gn._jsonSchemaVersion),vectorValues:It("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR=/^__.*__$/;class gR{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Ai(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ao(e,this.data,n,this.fieldTransforms)}}function xv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ie(40011,{Ac:t})}}class Ju{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Rc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Ju({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.gc(e),s}yc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ma(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(xv(this.Ac)&&pR.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class mR{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||ul(e)}Cc(e,n,s,i=!1){return new Ju({Ac:e,methodName:n,Dc:s,path:Lt.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _R(t){const e=t._freezeSettings(),n=ul(t._databaseId);return new mR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function vR(t,e,n,s,i,r={}){const o=t.Cc(r.merge||r.mergeFields?2:0,e,n,i);Vv("Data must be an object, but it was:",o,s);const l=Mv(s,o);let c,u;if(r.merge)c=new bn(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const d=[];for(const p of r.mergeFields){const m=yR(e,p,n);if(!o.contains(m))throw new me(X.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);IR(d,m)||d.push(m)}c=new bn(d),u=o.fieldTransforms.filter((p=>c.covers(p.field)))}else c=null,u=o.fieldTransforms;return new gR(new vn(l),c,u)}function Nv(t,e){if(Ov(t=ln(t)))return Vv("Unsupported field value:",e,t),Mv(t,e);if(t instanceof Dv)return(function(s,i){if(!xv(i.Ac))throw i.Sc(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,i){const r=[];let o=0;for(const l of s){let c=Nv(l,i.wc(o));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),o++}return{arrayValue:{values:r}}})(t,e)}return(function(s,i){if((s=ln(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return nb(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=rt.fromDate(s);return{timestampValue:ka(i.serializer,r)}}if(s instanceof rt){const r=new rt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ka(i.serializer,r)}}if(s instanceof jn)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof yn)return{bytesValue:ev(i.serializer,s._byteString)};if(s instanceof Nt){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:xu(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof Gn)return(function(o,l){return{mapValue:{fields:{[P_]:{stringValue:k_},[Ca]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw l.Sc("VectorValues must only contain numeric values.");return Pu(l.serializer,u)}))}}}}}})(s,i);throw i.Sc(`Unsupported field value: ${wu(s)}`)})(t,e)}function Mv(t,e){const n={};return E_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vi(t,((s,i)=>{const r=Nv(i,e.mc(s));r!=null&&(n[s]=r)})),{mapValue:{fields:n}}}function Ov(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof rt||t instanceof jn||t instanceof yn||t instanceof Nt||t instanceof Dv||t instanceof Gn)}function Vv(t,e,n){if(!Ov(n)||!I_(n)){const s=wu(n);throw s==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+s)}}function yR(t,e,n){if((e=ln(e))instanceof Yu)return e._internalPath;if(typeof e=="string")return Lv(t,e);throw Ma("Field path arguments must be of type string or ",t,!1,void 0,n)}const AR=new RegExp("[~\\*/\\[\\]]");function Lv(t,e,n){if(e.search(AR)>=0)throw Ma(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Yu(...e.split("."))._internalPath}catch{throw Ma(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ma(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new me(X.INVALID_ARGUMENT,l+t+c)}function IR(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Fv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class wR extends Bv{data(){return super.data()}}function Fv(t,e){return typeof e=="string"?Lv(t,e):e instanceof Yu?e._internalPath:e._delegate._internalPath}class ER{convertValue(e,n="none"){switch(Gs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _t(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(js(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Ie(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return vi(e,((i,r)=>{s[i]=this.convertValue(r,n)})),s}convertVectorValue(e){const n=e.fields?.[Ca].arrayValue?.values?.map((s=>_t(s.doubleValue)));return new Gn(n)}convertGeoPoint(e){return new jn(_t(e.latitude),_t(e.longitude))}convertArray(e,n){return(e.values||[]).map((s=>this.convertValue(s,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const s=sl(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(io(e));default:return null}}convertTimestamp(e){const n=Hs(e);return new rt(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=lt.fromString(e);ze(ov(s),9688,{name:e});const i=new ro(s.get(1),s.get(3)),r=new ve(s.popFirst(5));return i.isEqual(n)||fs(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TR(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class kr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class li extends Bv{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new sa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Fv("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new me(X.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=li._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}li._jsonSchemaVersion="firestore/documentSnapshot/1.0",li._jsonSchema={type:It("string",li._jsonSchemaVersion),bundleSource:It("string","DocumentSnapshot"),bundleName:It("string"),bundle:It("string")};class sa extends li{data(e={}){return super.data(e)}}class Qr{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new kr(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((s=>{e.call(n,new sa(this._firestore,this._userDataWriter,s.key,s,new kr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new me(X.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map((l=>{const c=new sa(i._firestore,i._userDataWriter,l.doc.key,l.doc,new kr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((l=>r||l.type!==3)).map((l=>{const c=new sa(i._firestore,i._userDataWriter,l.doc.key,l.doc,new kr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:CR(l.type),doc:c,oldIndex:u,newIndex:d}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new me(X.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Qr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Iu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],i=[];return this.docs.forEach((r=>{r._document!==null&&(n.push(r._document),s.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),i.push(r.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function CR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ie(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(t){t=no(t,Nt);const e=no(t.firestore,Ku);return uR(kv(e),t._key).then((n=>RR(e,t,n)))}Qr._jsonSchemaVersion="firestore/querySnapshot/1.0",Qr._jsonSchema={type:It("string",Qr._jsonSchemaVersion),bundleSource:It("string","QuerySnapshot"),bundleName:It("string"),bundle:It("string")};class bR extends ER{constructor(e){super(),this.firestore=e}convertBytes(e){return new yn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Nt(this.firestore,null,n)}}function $c(t,e,n){t=no(t,Nt);const s=no(t.firestore,Ku),i=TR(t.converter,e,n);return SR(s,[vR(_R(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,ls.none())])}function SR(t,e){return(function(s,i){const r=new Vs;return s.asyncQueue.enqueueAndForget((async()=>YS(await lR(s),i,r))),r.promise})(kv(t),e)}function RR(t,e,n){const s=n.docs.get(e._key),i=new bR(t);return new li(t,i,e._key,s,new kr(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){ir=i})(nr),Wn(new kn("firestore",((s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),l=new Ku(new dC(s.getProvider("auth-internal")),new gC(o,s.getProvider("app-check-internal")),(function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new me(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ro(u.options.projectId,d)})(o,i),o);return r={useFetchStreams:n,...r},l._setSettings(r),l}),"PUBLIC").setMultipleInstances(!0)),wn(Wf,zf,e),wn(Wf,zf,"esm2020")})();const Uv="@firebase/installations",Zu="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v=1e4,Hv=`w:${Zu}`,jv="FIS_v2",PR="https://firebaseinstallations.googleapis.com/v1",kR=3600*1e3,DR="installations",xR="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},fi=new mi(DR,xR,NR);function Gv(t){return t instanceof Dn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qv({projectId:t}){return`${PR}/projects/${t}/installations`}function Qv(t){return{token:t.token,requestStatus:2,expiresIn:OR(t.expiresIn),creationTime:Date.now()}}async function Wv(t,e){const s=(await e.json()).error;return fi.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function zv({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function MR(t,{refreshToken:e}){const n=zv(t);return n.append("Authorization",VR(e)),n}async function Kv(t){const e=await t();return e.status>=500&&e.status<600?t():e}function OR(t){return Number(t.replace("s","000"))}function VR(t){return`${jv} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LR({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=qv(t),i=zv(t),r=e.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:jv,appId:t.appId,sdkVersion:Hv},l={method:"POST",headers:i,body:JSON.stringify(o)},c=await Kv(()=>fetch(s,l));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Qv(u.authToken)}}else throw await Wv("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yv(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BR(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR=/^[cdef][\w-]{21}$/,Hc="";function UR(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=$R(t);return FR.test(n)?n:Hc}catch{return Hc}}function $R(t){return BR(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv=new Map;function Xv(t,e){const n=fl(t);Zv(n,e),HR(n,e)}function Zv(t,e){const n=Jv.get(t);if(n)for(const s of n)s(e)}function HR(t,e){const n=jR();n&&n.postMessage({key:t,fid:e}),GR()}let ii=null;function jR(){return!ii&&"BroadcastChannel"in self&&(ii=new BroadcastChannel("[Firebase] FID Change"),ii.onmessage=t=>{Zv(t.data.key,t.data.fid)}),ii}function GR(){Jv.size===0&&ii&&(ii.close(),ii=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR="firebase-installations-database",QR=1,pi="firebase-installations-store";let Zl=null;function eh(){return Zl||(Zl=Nm(qR,QR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(pi)}}})),Zl}async function Oa(t,e){const n=fl(t),i=(await eh()).transaction(pi,"readwrite"),r=i.objectStore(pi),o=await r.get(n);return await r.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Xv(t,e.fid),e}async function ey(t){const e=fl(t),s=(await eh()).transaction(pi,"readwrite");await s.objectStore(pi).delete(e),await s.done}async function pl(t,e){const n=fl(t),i=(await eh()).transaction(pi,"readwrite"),r=i.objectStore(pi),o=await r.get(n),l=e(o);return l===void 0?await r.delete(n):await r.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&Xv(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function th(t){let e;const n=await pl(t.appConfig,s=>{const i=WR(s),r=zR(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===Hc?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function WR(t){const e=t||{fid:UR(),registrationStatus:0};return ty(e)}function zR(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(fi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=KR(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:YR(t)}:{installationEntry:e}}async function KR(t,e){try{const n=await LR(t,e);return Oa(t.appConfig,n)}catch(n){throw Gv(n)&&n.customData.serverCode===409?await ey(t.appConfig):await Oa(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function YR(t){let e=await $p(t.appConfig);for(;e.registrationStatus===1;)await Yv(100),e=await $p(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await th(t);return s||n}return e}function $p(t){return pl(t,e=>{if(!e)throw fi.create("installation-not-found");return ty(e)})}function ty(t){return JR(t)?{fid:t.fid,registrationStatus:0}:t}function JR(t){return t.registrationStatus===1&&t.registrationTime+$v<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XR({appConfig:t,heartbeatServiceProvider:e},n){const s=ZR(t,n),i=MR(t,n),r=e.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:Hv,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},c=await Kv(()=>fetch(s,l));if(c.ok){const u=await c.json();return Qv(u)}else throw await Wv("Generate Auth Token",c)}function ZR(t,{fid:e}){return`${qv(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nh(t,e=!1){let n;const s=await pl(t.appConfig,r=>{if(!ny(r))throw fi.create("not-registered");const o=r.authToken;if(!e&&nP(o))return r;if(o.requestStatus===1)return n=eP(t,e),r;{if(!navigator.onLine)throw fi.create("app-offline");const l=iP(r);return n=tP(t,l),l}});return n?await n:s.authToken}async function eP(t,e){let n=await Hp(t.appConfig);for(;n.authToken.requestStatus===1;)await Yv(100),n=await Hp(t.appConfig);const s=n.authToken;return s.requestStatus===0?nh(t,e):s}function Hp(t){return pl(t,e=>{if(!ny(e))throw fi.create("not-registered");const n=e.authToken;return rP(n)?{...e,authToken:{requestStatus:0}}:e})}async function tP(t,e){try{const n=await XR(t,e),s={...e,authToken:n};return await Oa(t.appConfig,s),n}catch(n){if(Gv(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ey(t.appConfig);else{const s={...e,authToken:{requestStatus:0}};await Oa(t.appConfig,s)}throw n}}function ny(t){return t!==void 0&&t.registrationStatus===2}function nP(t){return t.requestStatus===2&&!sP(t)}function sP(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+kR}function iP(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function rP(t){return t.requestStatus===1&&t.requestTime+$v<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oP(t){const e=t,{installationEntry:n,registrationPromise:s}=await th(e);return s?s.catch(console.error):nh(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aP(t,e=!1){const n=t;return await lP(n),(await nh(n,e)).token}async function lP(t){const{registrationPromise:e}=await th(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cP(t){if(!t||!t.options)throw ec("App Configuration");if(!t.name)throw ec("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ec(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ec(t){return fi.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy="installations",uP="installations-internal",hP=t=>{const e=t.getProvider("app").getImmediate(),n=cP(e),s=_i(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},dP=t=>{const e=t.getProvider("app").getImmediate(),n=_i(e,sy).getImmediate();return{getId:()=>oP(n),getToken:i=>aP(n,i)}};function fP(){Wn(new kn(sy,hP,"PUBLIC")),Wn(new kn(uP,dP,"PRIVATE"))}fP();wn(Uv,Zu);wn(Uv,Zu,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va="analytics",pP="firebase_id",gP="origin",mP=60*1e3,_P="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",sh="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new Ja("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},mn=new mi("analytics","Analytics",vP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yP(t){if(!t.startsWith(sh)){const e=mn.create("invalid-gtag-resource",{gtagURL:t});return Zt.warn(e.message),""}return t}function iy(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function AP(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function IP(t,e){const n=AP("firebase-js-sdk-policy",{createScriptURL:yP}),s=document.createElement("script"),i=`${sh}?l=${t}&id=${e}`;s.src=n?n?.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function wP(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function EP(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const c=(await iy(n)).find(u=>u.measurementId===i);c&&await e[c.appId]}}catch(l){Zt.error(l)}t("config",i,r)}async function TP(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await iy(n);for(const c of o){const u=l.find(p=>p.measurementId===c),d=u&&e[u.appId];if(d)r.push(d);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){Zt.error(r)}}function CP(t,e,n,s){async function i(r,...o){try{if(r==="event"){const[l,c]=o;await TP(t,e,n,l,c)}else if(r==="config"){const[l,c]=o;await EP(t,e,n,s,l,c)}else if(r==="consent"){const[l,c]=o;t("consent",l,c)}else if(r==="get"){const[l,c,u]=o;t("get",l,c,u)}else if(r==="set"){const[l]=o;t("set",l)}else t(r,...o)}catch(l){Zt.error(l)}}return i}function bP(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=CP(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function SP(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(sh)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP=30,PP=1e3;class kP{constructor(e={},n=PP){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ry=new kP;function DP(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function xP(t){const{appId:e,apiKey:n}=t,s={method:"GET",headers:DP(n)},i=_P.replace("{app-id}",e),r=await fetch(i,s);if(r.status!==200&&r.status!==304){let o="";try{const l=await r.json();l.error?.message&&(o=l.error.message)}catch{}throw mn.create("config-fetch-failed",{httpStatus:r.status,responseMessage:o})}return r.json()}async function NP(t,e=ry,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw mn.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw mn.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new VP;return setTimeout(async()=>{l.abort()},mP),oy({appId:s,apiKey:i,measurementId:r},o,l,e)}async function oy(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=ry){const{appId:r,measurementId:o}=t;try{await MP(s,e)}catch(l){if(o)return Zt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:r,measurementId:o};throw l}try{const l=await xP(t);return i.deleteThrottleMetadata(r),l}catch(l){const c=l;if(!OP(c)){if(i.deleteThrottleMetadata(r),o)return Zt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:r,measurementId:o};throw l}const u=Number(c?.customData?.httpStatus)===503?Af(n,i.intervalMillis,RP):Af(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(r,d),Zt.debug(`Calling attemptFetch again in ${u} millis`),oy(t,d,s,i)}}function MP(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s(mn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function OP(t){if(!(t instanceof Dn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class VP{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function LP(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,o={...s,send_to:r};t("event",n,o)}}async function BP(t,e,n,s){if(s&&s.global){const i={};for(const r of Object.keys(n))i[`user_properties.${r}`]=n[r];return t("set",i),Promise.resolve()}else{const i=await e;t("config",i,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FP(){if(Pm())try{await km()}catch(t){return Zt.warn(mn.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return Zt.warn(mn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function UP(t,e,n,s,i,r,o){const l=NP(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&Zt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Zt.error(m)),e.push(l);const c=FP().then(m=>{if(m)return s.getId()}),[u,d]=await Promise.all([l,c]);SP(r)||IP(r,u.measurementId),i("js",new Date);const p=o?.config??{};return p[gP]="firebase",p.update=!0,d!=null&&(p[pP]=d),i("config",u.measurementId,p),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(e){this.app=e}_delete(){return delete $i[this.app.options.appId],Promise.resolve()}}let $i={},jp=[];const Gp={};let tc="dataLayer",HP="gtag",qp,ih,Qp=!1;function jP(){const t=[];if(Rm()&&t.push("This is a browser extension environment."),jw()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=mn.create("invalid-analytics-context",{errorInfo:e});Zt.warn(n.message)}}function GP(t,e,n){jP();const s=t.options.appId;if(!s)throw mn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Zt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw mn.create("no-api-key");if($i[s]!=null)throw mn.create("already-exists",{id:s});if(!Qp){wP(tc);const{wrappedGtag:r,gtagCore:o}=bP($i,jp,Gp,tc,HP);ih=r,qp=o,Qp=!0}return $i[s]=UP(t,jp,Gp,e,qp,tc,n),new $P(t)}function qP(t=cu()){t=ln(t);const e=_i(t,Va);return e.isInitialized()?e.getImmediate():QP(t)}function QP(t,e={}){const n=_i(t,Va);if(n.isInitialized()){const i=n.getImmediate();if(Us(e,n.getOptions()))return i;throw mn.create("already-initialized")}return n.initialize({options:e})}function WP(t,e,n){t=ln(t),BP(ih,$i[t.app.options.appId],e,n).catch(s=>Zt.error(s))}function zP(t,e,n,s){t=ln(t),LP(ih,$i[t.app.options.appId],e,n,s).catch(i=>Zt.error(i))}const Wp="@firebase/analytics",zp="0.10.19";function KP(){Wn(new kn(Va,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return GP(s,i,n)},"PUBLIC")),Wn(new kn("analytics-internal",t,"PRIVATE")),wn(Wp,zp),wn(Wp,zp,"esm2020");function t(e){try{const n=e.getProvider(Va).getImmediate();return{logEvent:(s,i,r)=>zP(n,s,i,r),setUserProperties:(s,i)=>WP(n,s,i)}}catch(n){throw mn.create("interop-component-reg-failed",{reason:n})}}}KP();const YP={apiKey:"AIzaSyCwvJ8cUWLZPZ26i1deIAXnoLuzToIcB70",authDomain:"tuldung.firebaseapp.com",projectId:"tuldung",storageBucket:"tuldung.firebasestorage.app",messagingSenderId:"1086524417813",appId:"1:1086524417813:web:8199da4b7cebcaffc86b1c",measurementId:"G-EGV6XDKG9R"},rh=Mm(YP),ay=lC(rh),oh=dR(rh);let JP=null;if(typeof window<"u")try{JP=qP(rh)}catch(t){console.warn("Analytics 초기화 실패:",t)}const XP=new ss,ZP=async()=>{try{const e=(await _T(ay,XP)).user,n=zu(oh,"users",e.uid);return(await Xu(n)).exists()||await $c(n,{email:e.email,displayName:e.displayName,photoURL:e.photoURL,createdAt:new Date().toISOString(),gameData:{level:1,coins:0,totalCoin:0,catFragments:50,nftCount:0,miningCats:[null,null,null,null,null,null],huntingCats:[null,null,null,null,null,null],explorationCats:[null,null,null,null,null,null],productionCats:[null,null,null,null,null,null],inventory:[]}}),{success:!0,user:e}}catch(t){return console.error("Google 로그인 오류:",t),{success:!1,error:t.message}}},e2=async()=>{try{return await JE(ay),{success:!0}}catch(t){return console.error("로그아웃 오류:",t),{success:!1,error:t.message}}},t2=async t=>{try{const e=zu(oh,"users",t),n=await Xu(e);return n.exists()?n.data():null}catch(e){return console.error("사용자 데이터 가져오기 오류:",e),null}},n2=async(t,e)=>{try{const n=zu(oh,"users",t),s=await Xu(n);if(s.exists()){const i=s.data();await $c(n,{...i,gameData:{...i.gameData,...e}},{merge:!0})}else await $c(n,{gameData:e});return{success:!0}}catch(n){return console.error("게임 데이터 업데이트 오류:",n),{success:!1,error:n.message}}},s2=(t,e)=>({id:t.uid,email:t.email,name:t.displayName||t.email?.split("@")[0]||"사용자",photoURL:t.photoURL,gameData:e||{level:1,coins:0,totalCoin:0,catFragments:50,nftCount:0,miningCats:[null,null,null,null,null,null],huntingCats:[null,null,null,null,null,null],explorationCats:[null,null,null,null,null,null],productionCats:[null,null,null,null,null,null],inventory:[]}}),ly=async()=>{try{const t=await ZP();if(t.success){const e=t.user,n=await t2(e.uid),s=s2(e,n?.gameData);return sessionStorage.setItem("currentUser",JSON.stringify(s)),{success:!0,user:s}}else return{success:!1,error:t.error}}catch(t){return console.error("Google 로그인 오류:",t),{success:!1,error:t.message}}},cy=async()=>{try{return await e2(),sessionStorage.removeItem("currentUser"),{success:!0}}catch(t){return console.error("로그아웃 오류:",t),{success:!1,error:t.message}}},i2=async(t,e)=>{try{const n=await n2(t,e);if(n.success){const s=JSON.parse(sessionStorage.getItem("currentUser")||"{}");s.id===t&&(s.gameData={...s.gameData,...e},sessionStorage.setItem("currentUser",JSON.stringify(s)))}return n}catch(n){return console.error("게임 데이터 업데이트 오류:",n),{success:!1,error:n.message}}},r2=Object.freeze(Object.defineProperty({__proto__:null,loginWithGoogle:ly,logout:cy,updateGameData:i2},Symbol.toStringTag,{value:"Module"})),o2={class:"login-screen"},a2={class:"input-group"},l2={class:"input-container"},c2={class:"input-group"},u2={class:"input-container"},h2=["type"],d2={key:0,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},f2={key:1,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},p2=["disabled"],g2={key:0,class:"btn-content"},m2={key:1,class:"btn-content"},_2={key:2,class:"btn-content"},v2=["disabled"],y2={key:0,class:"google-icon",viewBox:"0 0 24 24"},A2={key:1,class:"spinner-small"},I2={__name:"LoginScreen",setup(t){const e=en(),{setWalletConnected:n,setLoading:s}=ym(),i=N(!1),r=N(!1),o=N(!1),l=N(!1),c=()=>{e.push("/signup")},u=N(""),d=N(""),p=async y=>{if(y.preventDefault(),!u.value.trim()||!d.value.trim()){alert("ID와 비밀번호를 모두 입력해주세요.");return}i.value=!0,s(!0);const C=JSON.parse(localStorage.getItem("users")||"[]").find(L=>L.email===u.value&&L.password===d.value);setTimeout(()=>{i.value=!1,C?(r.value=!0,sessionStorage.setItem("currentUser",JSON.stringify(C)),n(C.email,`${C.gameData.coins} 코인`),s(!1),setTimeout(()=>{e.push("/main")},1e3)):(s(!1),alert("이메일 또는 비밀번호가 올바르지 않습니다."))},2e3)},m=()=>{l.value=!l.value},_=async()=>{o.value=!0,s(!0);try{const y=await ly();y.success?(r.value=!0,n(y.user.email,`${y.user.gameData?.coins||0} 코인`),s(!1),setTimeout(()=>{e.push("/main")},1e3)):(s(!1),alert(`로그인 실패: ${y.error}`))}catch(y){s(!1),alert(`로그인 오류: ${y.message}`)}finally{o.value=!1}};return Et(()=>{const y=document.querySelector(".loginCont");y&&(y.style.opacity="0",y.style.transform="translateY(30px)",setTimeout(()=>{y.style.transition="all 0.6s ease",y.style.opacity="1",y.style.transform="translateY(0)"},100))}),(y,A)=>(O(),V("div",o2,[A[11]||(A[11]=h("h1",{class:"login-title"},"로그인",-1)),h("form",{onSubmit:p,class:"login-form"},[h("div",a2,[A[3]||(A[3]=h("label",{class:"input-label"},"아이디(이메일계정)",-1)),h("div",l2,[A[2]||(A[2]=h("svg",{class:"input-icon",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),h("polyline",{points:"22,6 12,13 2,6"})],-1)),is(h("input",{type:"email","onUpdate:modelValue":A[0]||(A[0]=C=>u.value=C),class:"input-field",placeholder:"이메일을 입력하세요",required:""},null,512),[[oi,u.value]])])]),h("div",c2,[A[7]||(A[7]=h("label",{class:"input-label"},"비밀번호",-1)),h("div",u2,[A[6]||(A[6]=h("svg",{class:"input-icon",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),h("circle",{cx:"12",cy:"16",r:"1"}),h("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})],-1)),is(h("input",{type:l.value?"text":"password","onUpdate:modelValue":A[1]||(A[1]=C=>d.value=C),class:"input-field",placeholder:"비밀번호를 입력하세요",required:""},null,8,h2),[[rm,d.value]]),h("button",{type:"button",class:"password-toggle",onClick:m},[l.value?(O(),V("svg",f2,[...A[5]||(A[5]=[h("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"},null,-1),h("line",{x1:"1",y1:"1",x2:"23",y2:"23"},null,-1)])])):(O(),V("svg",d2,[...A[4]||(A[4]=[h("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},null,-1),h("circle",{cx:"12",cy:"12",r:"3"},null,-1)])]))])])]),h("button",{type:"submit",disabled:i.value||r.value,class:De(["login-button",{connecting:i.value,connected:r.value}])},[!i.value&&!r.value?(O(),V("div",g2," 로그인 ")):pe("",!0),i.value?(O(),V("div",m2,[...A[8]||(A[8]=[h("div",{class:"spinner-small"},null,-1),Jr(" 로그인 중... ",-1)])])):pe("",!0),r.value?(O(),V("div",_2,[...A[9]||(A[9]=[h("svg",{class:"check-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor"},[h("path",{d:"M20 6L9 17l-5-5"})],-1),Jr(" 성공! ",-1)])])):pe("",!0)],10,p2)],32),A[12]||(A[12]=h("div",{class:"divider-section"},[h("div",{class:"divider-line"}),h("span",{class:"divider-text"},"또는"),h("div",{class:"divider-line"})],-1)),h("button",{onClick:_,disabled:o.value||i.value||r.value,class:De(["google-login-button",{loading:o.value}])},[o.value?pe("",!0):(O(),V("svg",y2,[...A[10]||(A[10]=[h("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"},null,-1),h("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"},null,-1),h("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"},null,-1),h("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"},null,-1)])])),o.value?(O(),V("div",A2)):pe("",!0),h("span",null,U(o.value?"로그인 중...":"Google로 로그인"),1)],10,v2),h("div",{class:"signup-link"},[h("button",{onClick:c,class:"signup-btn"}," 회원 가입하기 ")])]))}},w2=Tt(I2,[["__scopeId","data-v-c1d47474"]]),E2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAz4SURBVHgB7d3ddRRXFobhIyJgMpAzwBGgicDjCOwQyMA4AiYDk8FMBmIiMI5AygBn0FMFjQ3or3+q6uy9z/OsVUtccK3vrVPVrdYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAjXDQA7tjtds+nH1fT9XK65n9ffvNfbqfr/XT9cXFx8a4BADnNoz9dP0/X9e44N9P123RdNgAgj2m8X03Xh935/iMEACC4eaxPuOM/xOsGAMSz+3Tcv8Rd/0Nudk4DACCO+Q59t40bEQAAAWw4/iIAACLoMP5fRsDzBgBsq+P4f/amAQDbCTD+n101AGB9uzjjP7tuAMC6drHG/7OrBgCsYxdz/GdOAejOHwMCStp9+ia+X1pc/7i4uPizQSfPGkAxCcZ/9kODjgQAUEqS8Z9dNehIAABlJBr/2YsGHQkAoIRk4z/zrYB05SVAIL2E4//RxaRBJ04AgNSyjj/0JgCAtIw/nE4AACkVGP/bBh0JACCdInf+tw06EgBAKoWO/d836EgAAGkUe+b/rkFHPoICpFDwhT9/C4CunAAA4RUc/7fGn96cAAChFf2o3/dTAHgHgK6cAABhFR3/t8afCJwAACEV/pKf76YAuG3QmRMAIJzC4//a+BOFEwAglMLj/99p/H9sEIQAAMIoPP7zM/9/evOfSAQAEILxh20JAKA74w/bEwBAV8Yf+hAAQDfGH/oRAEAXxh/6EgDA5ow/9CcAgE0Zf4hBAACbMf4QhwAANmH8IRYBAKzO+EM8AgBYlfGHmAQAsBrjD3EJAGAVxh9iEwDA4ow/xCcAgEUZf8hBAACLMf6QhwAAFmH8IRcBAJzN+EM+AgA4i/GHnAQAcDLjD3kJAOAkxh9yEwDA0Yw/5CcAgKMYf6hBAAAHM/5QhwAADmL8oRYBADzJ+EM9AgB4lPGHmgQA8CDjD3UJAOBexh9qEwDAHcYf6hMAwFeMP4xBAAB/Mf4wDgEAfGT8YSwCADD+MCABAIMz/jAmAQADM/4wLgEAgzL+MDYBAAMy/oAAgMEYf2AmAGAgxh/4TADAIIw/8CUBAAMw/sC3BAAUZ/yB+wgAKMz4Aw8RAFCU8QceIwCgIOMPPEUAQDHGHziEAIBCjD9wKAEARRh/4BgCAAow/sCxBAAkZ/yBUwgASMz4A6cSAJCU8QfOIQAgIeMPnEsAQDLGH1iCAIBEjD+wFAEASRh/YEkCABIw/sDSBAAEZ/yBNQgACMz4A2sRABCU8QfWJAAgIOMPrE0AQDDGH9iCAIBAjD+wFQEAQRh/YEsCAAIw/sDWBAB0ZvyBHgQAdGT8gV4EAHRi/IGeBAB0YPyB3gQAbMz4AxEIANiQ8QeiEACwEeMPRCIAYAPGH4hGAMDKjD8QkQCAFRl/ICoBACsx/kBkAgBWYPyB6AQALMz4AxkIAFiQ8QeyEACwEOMPZCIAYAHGH8hGAMCZjD+QkQCAMxh/ICsBACcy/kBmAgBOYPyB7AQAHMn4AxUIADiC8QeqEABwIOMPVCIA4ADGH6hGAMATjD9QkQCARxh/oCoBAA8w/kBlAgDuYfyB6gQAfMP4AyMQAPAF4w+MQgDAnvEHRiIAoBl/YDwCgOEZf2BEAoChGX9gVAKAYRl/YGQCgCEZf2B0AoDhGH8AAcBgjD/AJwKAYRh/gL8JAIZg/AG+JgAoz/gD3CUAKM34A9xPAFCW8Qd4mACgJOMP8DgBQDnGH+BpAoBSjD/AYQQAZRh/gMMJAEow/gDHEQCkZ/wBjicASM34A5xGAJCW8Qc4nQAgJeMPcB4BQDrGH+B8AoBUjD/AMgQAaRh/gOUIAFIw/gDLEgCEZ/wBlicACM34A6xDABCW8QdYjwAgJOMPsC4BQDjGH2B9AoBQpvF/Nf140+ox/kAoAoAwpvG/nH7ctHqMPxDOswZxXLd6jD8QkgAghP1z/8tWi/EHwhIAdLc/+v+p1WL8gdAEABFctVp3/8YfCM9LgHQ3nQDML/5dthqMP5CCEwC6msb/RTP+AJsTAPT2stVg/IFUBAC9XbX8jD+QjgCgt8uWm/EHUhIA9HbZ8jL+QFo+BUBXu0nLyfgDqTkBAIABCQB6y3oHPX988Xo6wHjeABISAPSW+QhdBABpCQB6e99yEwFASgKA3t61/EQAkI4AoLc/Wg0iAEjFxwDpzh8DAtieEwAieNvqcBIApOAEgO72YzmfAlQaTScBQGhOAOhuP5L/brU4CQBCcwJACPuh/L3VeRfgMycBQEhOAAhhP5A/ttxfDHQfJwFASAKAMKYImO+Wf231iAAgHAFAKFMEzO8CvG71iAAgFO8AENI0lL+0miHgnQAgBAFAWCIAYD0CgNBEAMA6BADhiQCA5QkAUhABAMsSAKQhAgCWIwBIRQQALEMAkI4IADifACAlEQBwHgFAWiIA4HQCgNREAMBpBADpiQCA4wkAShABAMcRAJQhAgAOJwAoRQQAHEYAUI4IAHiaAKAkEQDwOAFAWSIA4GECgNJEAMD9BADliQCAuwQAQxABAF8TAAxDBAD8TQAwFBEA8IkAYDgiAEAAMCgRAIxOADAsEQCMTAAwNBEAjEoAMDwRAIxIAEATAcB4BADsiQBgJAIAviACgFEIAPiGCABGIADgHiIAqE4AwANEAFCZAIBHiACgKgEATxABQEUCAA4gAoBqBAAcSAQAlQgAOIIIAKoQAHAkEQBUIADgBCIAyE4AwIlEAJCZAIAziAAgKwEAZxIBQEYCABYgAoBsBAAsRAQAmQgAWJAIALIQALAwEQBkIABgBSIAiE4AwEpEABCZAIAViQAgKgEAKxMBQEQCADYgAoBoBABsRAQAkQgA2JAIAKIQALAxEQBEIACgAxEA9CYAoBMRAPQkAKAjEQD0IgCgMxEA9CAAIAARAGxNAEAQIgDYkgCAQEQAsBUBAMGIAGALAgACEgHA2gQABCUCgDUJAAhMBABrEQAQnAgA1iAAIAERACxNAEASIgBYkgCAREQAsBQBAMmIAGAJAgASEgHAuQQAJCUCgHMIAEhMBACnEgCQnAgATiEAoAARABxLAEARIgA4hgCAQkQAcCgBAMWIAOAQAgAKEgHAUwQAFCUCgMcIAChMBAAPEQBQnAgA7iMAYAAiAPiWAIBBiADgSwIABiICgM8EAAxGBAAzAQADEgGAAIBBiQAYmwCAgYkAGJcAgMGJABiTAABEAAxIAAAfiQAYiwAA/iICYBwCAPiKCIAxCADgDhEA9QkA4F4iAGoTAMCDRADUJQCAR4kAqEkAAE8SAVCPAAAOIgKgFgEAHEwEQB0CADiKCIAaBABwNBEA+QkA4CQiAHITAMDJRADkJQCAs4gAyEkAAGcTAZCPAAAWIQIgFwEALEYEQB4CAFiUCIAcBACwOBEA8QkAYBUiAGITAMBqRADEJQCAVYkAiEkAAKsTARCPAAA2IQIgFgEAbEYEQBwCANiUCIAYBACwOREA/QkAoAsRAH0JAKAbEQD9CACgKxEAfQgAoDsRANsTAEAIIgC2JQCAMEQAbOdZAwhiGshfW80AeDFdvzUIRAAAoRSOgH9NJxyvGgThEQAQUtHHAfMjgO+nyLlt0JkTACCkoicBz5tHAQQhAICwikbA1XS6cdWgMwEAhFY0An5q0Jl3AIAUir0TML8L8J2PBdKTEwAghWInAfO7AC8bdCQAgDSKRcBVg44EAJBKoQh40aAjAQCkUyQCLht05CVAIK3sLwZOIeN3MN04AQDSKvy1wbA6AQCkJgLgNAIASC9pBNw26EgAACUkjIDbBh0JAKCMZBFw26AjAQCUkigC3jUAYFnzRwR3sV02AGB5u7gRcN2gM48AgLICPw542wCAde1inQTcNABgG7s4EfBDAwC2s+sfAW8aALC9jhFwM13PGwDQR4cIuNn52B8A9LdhBNwYfwAIZBrmV9P1Ybee340/AAQ0D/T+Ln1pb3ae+QNAbNNY/7xQCFxP18sGAOSxD4Hr3XE+7O/4DT9pXDQA7tgf38+D/mJ/fXmc/+f+ej9fFxcX/2sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABU9n/G+xQHTFSybwAAAABJRU5ErkJggg==",T2={class:"signup-screen"},C2={class:"input-group"},b2={class:"input-container"},S2={class:"input-group"},R2={class:"input-container"},P2={class:"input-group"},k2={class:"input-container"},D2={class:"input-group"},x2={class:"input-container"},N2=["type"],M2={key:0,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},O2={key:1,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},V2={__name:"SignupScreen",setup(t){const e=en(),n=N({name:"",phone:"",email:"",password:""}),s=N(!1),i=()=>{e.go(-1)},r=async l=>{if(l.preventDefault(),!n.value.name.trim()||!n.value.phone.trim()||!n.value.email.trim()||!n.value.password.trim()){alert("모든 필드를 입력해주세요.");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.value.email)){alert("올바른 이메일 형식을 입력해주세요.");return}if(n.value.password.length<6){alert("비밀번호는 6자 이상이어야 합니다.");return}const u=JSON.parse(localStorage.getItem("users")||"[]");if(u.some(m=>m.email===n.value.email)){alert("이미 가입된 이메일입니다.");return}const p={id:Date.now(),name:n.value.name,phone:n.value.phone,email:n.value.email,password:n.value.password,createdAt:new Date().toISOString(),gameData:{level:1,coins:0,nftCount:0}};u.push(p),localStorage.setItem("users",JSON.stringify(u)),console.log("회원가입 완료:",p),alert("회원가입이 완료되었습니다!"),e.push("/login")},o=()=>{s.value=!s.value};return(l,c)=>(O(),V("div",T2,[h("button",{class:"back-button",onClick:i},[...c[4]||(c[4]=[h("img",{src:E2,alt:"back-button",width:"20px"},null,-1)])]),c[16]||(c[16]=h("h1",{class:"signup-title"},"회원가입",-1)),h("form",{onSubmit:r,class:"signup-form"},[h("div",C2,[c[6]||(c[6]=h("label",{class:"input-label"},"이름",-1)),h("div",b2,[c[5]||(c[5]=h("svg",{class:"input-icon",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),h("polyline",{points:"22,6 12,13 2,6"})],-1)),is(h("input",{type:"text","onUpdate:modelValue":c[0]||(c[0]=u=>n.value.name=u),class:"input-field",placeholder:"이름을 입력하세요",required:""},null,512),[[oi,n.value.name]])])]),h("div",S2,[c[8]||(c[8]=h("label",{class:"input-label"},"전화번호",-1)),h("div",R2,[c[7]||(c[7]=h("svg",{class:"input-icon",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})],-1)),is(h("input",{type:"tel","onUpdate:modelValue":c[1]||(c[1]=u=>n.value.phone=u),class:"input-field",placeholder:"전화번호를 입력하세요",required:""},null,512),[[oi,n.value.phone]])])]),h("div",P2,[c[10]||(c[10]=h("label",{class:"input-label"},"이메일",-1)),h("div",k2,[c[9]||(c[9]=h("svg",{class:"input-icon",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),h("polyline",{points:"22,6 12,13 2,6"})],-1)),is(h("input",{type:"email","onUpdate:modelValue":c[2]||(c[2]=u=>n.value.email=u),class:"input-field",placeholder:"이메일을 입력하세요",required:""},null,512),[[oi,n.value.email]])])]),h("div",D2,[c[14]||(c[14]=h("label",{class:"input-label"},"비밀번호",-1)),h("div",x2,[c[13]||(c[13]=h("svg",{class:"input-icon",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),h("circle",{cx:"12",cy:"16",r:"1"}),h("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})],-1)),is(h("input",{type:s.value?"text":"password","onUpdate:modelValue":c[3]||(c[3]=u=>n.value.password=u),class:"input-field",placeholder:"비밀번호를 입력하세요",required:""},null,8,N2),[[rm,n.value.password]]),h("button",{type:"button",class:"password-toggle",onClick:o},[s.value?(O(),V("svg",O2,[...c[12]||(c[12]=[h("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"},null,-1),h("line",{x1:"1",y1:"1",x2:"23",y2:"23"},null,-1)])])):(O(),V("svg",M2,[...c[11]||(c[11]=[h("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},null,-1),h("circle",{cx:"12",cy:"12",r:"3"},null,-1)])]))])])]),c[15]||(c[15]=h("button",{type:"submit",class:"signup-button"}," 회원가입 ",-1))],32)]))}},L2=Tt(V2,[["__scopeId","data-v-6eb5a176"]]),ah="/tdl/assets/cat1-B_B8VE2s.png",lh="/tdl/assets/cat10-B8AgbljH.png",ch="/tdl/assets/cat11-0fJ86MBw.png",uh="/tdl/assets/cat12-9jWhGICw.png",hh="/tdl/assets/cat13-CHa4qUOi.png",dh="/tdl/assets/cat14-CLrryeLM.png",fh="/tdl/assets/cat15-CCtjZj8M.png",ph="/tdl/assets/cat16-CPcR6OS6.png",gh="/tdl/assets/cat17-EO7rjjtM.png",mh="/tdl/assets/cat18-BGDiOePY.png",_h="/tdl/assets/cat19-DxCDtOnA.png",vh="/tdl/assets/cat2-0Y4nM6HW.png",yh="/tdl/assets/cat20-Bz9cd08a.png",Ah="/tdl/assets/cat21-ECTsze2s.png",Ih="/tdl/assets/cat22-BvGXhyri.png",wh="/tdl/assets/cat23-DqU2B_M0.png",Eh="/tdl/assets/cat24-7cWYLYDN.png",Th="/tdl/assets/cat25-Cy0mQl6B.png",Ch="/tdl/assets/cat26-Bk4tHCwE.png",bh="/tdl/assets/cat27-CvtmCEXM.png",Sh="/tdl/assets/cat28-B9s1wmgo.png",Rh="/tdl/assets/cat29-D_79HmBj.png",Ph="/tdl/assets/cat3-Dp7OJMB9.png",kh="/tdl/assets/cat30-Cx-HRp0m.png",Dh="/tdl/assets/cat4-DHiuXgwB.png",xh="/tdl/assets/cat5-BvXrfJAO.png",Nh="/tdl/assets/cat6-DZOiQoo1.png",Mh="/tdl/assets/cat7-CeDKF7mR.png",Oh="/tdl/assets/cat8-mjRhb3fS.png",Vh="/tdl/assets/cat9-Bzb-Egme.png",Lh="/tdl/assets/catProfile01-gY0Djz81.png",Bh="/tdl/assets/catProfile02-Cesbpkj5.png",Fh="/tdl/assets/cat_ico-Csdt_Q01.png",B2="/tdl/assets/tul1-CuZ0qR5D.png",F2="/tdl/assets/tul2-Cj7OkHg6.png",U2="/tdl/assets/tul3-CaPMxBJ-.png",$2="/tdl/assets/tul5-CQc-0WLd.png",H2="/tdl/assets/tul6-COB-AGqQ.png",j2="/tdl/assets/mainPoint-D-oASrAx.png",uy="/tdl/assets/mainCoin-CGuum4ry.png",G2="/tdl/assets/lighting-DDPCD7_E.png",hy="/tdl/assets/point_ico-CuS5zUpS.png",dy="/tdl/assets/coin_ico-COVm5STX.png",fy="/tdl/assets/cat_ico-Csdt_Q01.png",q2="/tdl/assets/notice-Bkd9hh4q.png",Q2="/tdl/assets/setting-CxNpDL9x.png",W2="modulepreload",z2=function(t){return"/tdl/"+t},Kp={},K2=function(e,n,s){let i=Promise.resolve();if(n&&n.length>0){let c=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");i=c(n.map(u=>{if(u=z2(u),u in Kp)return;Kp[u]=!0;const d=u.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":W2,d||(m.as="script"),m.crossOrigin="",m.href=u,l&&m.setAttribute("nonce",l),document.head.appendChild(m),d)return new Promise((_,y)=>{m.addEventListener("load",_),m.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${u}`)))})}))}function r(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&r(l.reason);return e().catch(r)})},Y2=()=>JSON.parse(localStorage.getItem("users")||"[]"),ct=()=>{const t=sessionStorage.getItem("currentUser");return t?JSON.parse(t):null},Yt=async(t,e)=>{const n=ct();if(n&&(n.id?.length>20||n.uid))try{const{updateGameData:r}=await K2(async()=>{const{updateGameData:l}=await Promise.resolve().then(()=>r2);return{updateGameData:l}},void 0);return(await r(t,e)).success}catch(r){console.error("Firebase 업데이트 실패, localStorage로 폴백:",r)}const s=Y2(),i=s.findIndex(r=>r.id===t);return i!==-1?(s[i].gameData={...s[i].gameData,...e},localStorage.setItem("users",JSON.stringify(s)),n&&n.id===t&&(n.gameData={...n.gameData,...e},sessionStorage.setItem("currentUser",JSON.stringify(n))),!0):!1},J2=(t,e)=>Yt(t,{coins:e}),La=(t,e,n)=>Yt(t,{coins:e,totalCoin:n}),Yp=()=>{sessionStorage.removeItem("currentUser")},X2=()=>localStorage.getItem("appLanguage")||"한국어",py=()=>{const t=X2();return{ko:{home:"홈",exchange:"교환소",quest:"퀘스트",inventory:"인벤토리",factory:"제작소",mining:"채굴",hunting:"사냥",exploration:"탐험",production:"생산",back:"← 뒤로",settings:"설정",notification:"알림"},en:{home:"Home",exchange:"Exchange",quest:"Quest",inventory:"Inventory",factory:"Factory",mining:"Mining",hunting:"Hunting",exploration:"Exploration",production:"Production",back:"← Back",settings:"Settings",notification:"Notification"}}[t==="한국어"?"ko":"en"]},Z2={class:"headerCont"},ek={class:"headerBar"},tk={class:"headerValue"},nk={class:"headerValue"},sk={class:"headerValue"},ik={class:"headerValue"},rk={__name:"Header",setup(t){const e=N(localStorage.getItem("appLanguage")||"한국어");Ze(()=>py());const n=en(),s=N(0),i=N(0),r=N(50),o=N(4e3),l=N(4e3),c=()=>{const C=new Date().toDateString(),L=localStorage.getItem("energyLastDate"),Q=localStorage.getItem("currentEnergy");if(L!==C)o.value=l.value,localStorage.setItem("energyLastDate",C),localStorage.setItem("currentEnergy",l.value.toString());else if(Q){const j=parseInt(Q)||0;o.value=Math.max(0,Math.min(j,l.value))}else o.value=0},u=()=>{const C=ct();C&&(s.value=C.gameData?.coins||0,i.value=C.gameData?.totalCoin||0,r.value=C.gameData?.catFragments||C.gameData?.catCount||50),c()};N(!1);const d=()=>{n.push("/settings")},p=()=>{n.push("/notification")},m=()=>{n.push("/shop")};let _=null,y=null;Et(()=>{u(),_=setInterval(()=>{const C=localStorage.getItem("appLanguage")||"한국어";C!==e.value&&(e.value=C)},100),y=setInterval(()=>{u()},500),window.addEventListener("userDataUpdated",u)}),er(()=>{_&&clearInterval(_),y&&clearInterval(y),window.removeEventListener("userDataUpdated",u)});const A=C=>C>=1e9?(C/1e9).toFixed(1).replace(/\.0$/,"")+"G":C>=1e6?(C/1e6).toFixed(1).replace(/\.0$/,"")+"M":C>=1e4?(C/1e3).toFixed(1).replace(/\.0$/,"")+"K":C.toLocaleString();return(C,L)=>(O(),V("header",null,[h("div",Z2,[h("div",ek,[h("button",{class:"headerItem energyItem",onClick:m},[L[0]||(L[0]=h("img",{src:G2,alt:"에너지",class:"energyIcon"},null,-1)),h("span",tk,U(A(o.value)),1)]),L[6]||(L[6]=h("div",{class:"divider"},null,-1)),h("button",{class:"headerItem clickableItem",onClick:m},[L[1]||(L[1]=h("img",{src:hy,alt:"P",class:"pointIcon"},null,-1)),h("span",nk,U(A(s.value)),1)]),L[7]||(L[7]=h("div",{class:"divider"},null,-1)),h("button",{class:"headerItem clickableItem",onClick:m},[L[2]||(L[2]=h("img",{src:dy,alt:"C",class:"coinIcon"},null,-1)),h("span",sk,U(A(i.value)),1)]),L[8]||(L[8]=h("div",{class:"divider"},null,-1)),h("button",{class:"headerItem clickableItem",onClick:m},[L[3]||(L[3]=h("img",{src:fy,alt:"고양이",class:"catIcon"},null,-1)),h("span",ik,U(r.value),1)]),L[9]||(L[9]=h("div",{class:"divider"},null,-1)),h("button",{class:"headerIconBtn notifi",onClick:p},[...L[4]||(L[4]=[h("img",{src:q2,alt:"알림",class:"icon-img"},null,-1)])]),L[10]||(L[10]=h("div",{class:"divider"},null,-1)),h("button",{class:"headerIconBtn menuBtn",onClick:d},[...L[5]||(L[5]=[h("img",{src:Q2,alt:"설정",class:"icon-img"},null,-1)])])])])]))}},tn=Tt(rk,[["__scopeId","data-v-21b40d0f"]]),ok="/tdl/assets/bottom001-BEtDIm8X.png",ak="/tdl/assets/bottom001_on-DT187QNm.png",lk="/tdl/assets/bottom002-DzQ3N6uP.png",ck="/tdl/assets/bottom002_on-C1N0vVp8.png",uk="/tdl/assets/bottom003-BvgU7nGk.png",hk="/tdl/assets/bottom003_on-Df8s6MrC.png",dk="/tdl/assets/bottom004-CWodmmKt.png",fk="/tdl/assets/bottom004_on-D8X_vvyV.png",pk="/tdl/assets/bottom005-CX2HIylp.png",gk="/tdl/assets/bottom005_on-DYZvET-x.png",mk={class:"footerCont"},_k={class:"footerBar"},vk=["onClick"],yk={class:"tabContent"},Ak=["src","alt"],Ik={class:"tabLabel"},wk={key:0,class:"activeIndicator"},Ek={__name:"Footer",setup(t){const e=en(),n=N("home"),s=N(localStorage.getItem("appLanguage")||"한국어"),i=Ze(()=>py()),r=d=>{d.key==="appLanguage"&&(s.value=d.newValue||"한국어")},o=()=>{switch(e.currentRoute.value.path){case"/main":n.value="home";break;case"/exchange":n.value="exchange";break;case"/quest":n.value="quest";break;case"/inventory":n.value="inventory";break;case"/factory":n.value="factory";break;default:n.value="home"}};let l=null;Et(()=>{o(),window.addEventListener("storage",r),l=setInterval(()=>{const d=localStorage.getItem("appLanguage")||"한국어";d!==s.value&&(s.value=d)},100)}),er(()=>{window.removeEventListener("storage",r),l&&clearInterval(l)}),as(()=>e.currentRoute.value.path,()=>{o()}),as(s,()=>{});const c=Ze(()=>[{id:"home",img:ok,imgActive:ak,label:i.value.home},{id:"exchange",img:lk,imgActive:ck,label:i.value.exchange},{id:"quest",img:uk,imgActive:hk,label:i.value.quest},{id:"inventory",img:dk,imgActive:fk,label:i.value.inventory},{id:"factory",img:pk,imgActive:gk,label:i.value.factory}]),u=d=>{switch(n.value=d,d){case"home":e.push("/main");break;case"exchange":e.push("/exchange");break;case"quest":e.push("/quest");break;case"inventory":e.push("/inventory");break;case"factory":e.push("/factory");break}};return(d,p)=>(O(),V("footer",null,[h("div",mk,[p[0]||(p[0]=h("div",{class:"footerBackground"},null,-1)),h("div",_k,[(O(!0),V(ke,null,je(c.value,m=>(O(),V("div",{key:m.id,class:De(["tabItem",{active:n.value===m.id}]),onClick:_=>u(m.id)},[h("div",yk,[h("img",{src:n.value===m.id?m.imgActive:m.img,alt:m.label,class:"tabIcon"},null,8,Ak),h("span",Ik,U(m.label),1)]),n.value===m.id?(O(),V("div",wk)):pe("",!0)],10,vk))),128))])])]))}},nn=Tt(Ek,[["__scopeId","data-v-5284f664"]]),Tk={class:"mainScreen"},Ck={class:"mainContent"},bk={key:0,class:"mainMenuNew"},Sk={class:"totalStats"},Rk={class:"totalPoint"},Pk={class:"statValue"},kk={class:"statNumber"},Dk={class:"totalCoin"},xk={class:"statValue"},Nk={class:"statNumber"},Mk={class:"gameModeGrid"},Ok={class:"modeLevel"},Vk={class:"modeLevel"},Lk={class:"modeLevel"},Bk={class:"modeLevel"},Fk={key:1,class:"miningMode"},Uk={class:"pageHeader"},$k={class:"totalPointsDisplay"},Hk={class:"miningButtonContainer"},jk={key:1,class:"completeMessageContainer"},Gk={class:"energySection"},qk={class:"energyInfo"},Qk={class:"energyText"},Wk={class:"energyBar"},zk={class:"miningCatsSection"},Kk={class:"catsListScroll"},Yk=["onClick"],Jk={key:0,class:"catLevel"},Xk={key:1,class:"catImage"},Zk=["src"],eD={key:2,class:"catStars"},tD={key:3,class:"emptySlotContent"},nD={key:2,class:"miningMode"},sD={class:"pageHeader"},iD={class:"totalPointsDisplay"},rD={class:"miningButtonContainer"},oD={key:1,class:"completeMessageContainer"},aD={class:"energySection"},lD={class:"energyInfo"},cD={class:"energyText"},uD={class:"energyBar"},hD={class:"miningCatsSection"},dD={class:"catsListScroll"},fD=["onClick"],pD={key:0,class:"catLevel"},gD={key:1,class:"catImage"},mD=["src"],_D={key:2,class:"catStars"},vD={key:3,class:"emptySlotContent"},yD={key:3,class:"miningMode"},AD={class:"pageHeader"},ID={class:"totalPointsDisplay"},wD={class:"miningButtonContainer"},ED={key:1,class:"completeMessageContainer"},TD={class:"energySection"},CD={class:"energyInfo"},bD={class:"energyText"},SD={class:"energyBar"},RD={class:"miningCatsSection"},PD={class:"catsListScroll"},kD=["onClick"],DD={key:0,class:"catLevel"},xD={key:1,class:"catImage"},ND=["src"],MD={key:2,class:"catStars"},OD={key:3,class:"emptySlotContent"},VD={key:4,class:"miningMode"},LD={class:"pageHeader"},BD={class:"totalPointsDisplay"},FD={class:"miningButtonContainer"},UD={key:1,class:"completeMessageContainer"},$D={class:"energySection"},HD={class:"energyInfo"},jD={class:"energyText"},GD={class:"energyBar"},qD={class:"miningCatsSection"},QD={class:"catsListScroll"},WD=["onClick"],zD={key:0,class:"catLevel"},KD={key:1,class:"catImage"},YD=["src"],JD={key:2,class:"catStars"},XD={key:3,class:"emptySlotContent"},ZD={key:0,class:"speechBubbles"},ex={key:1,class:"catEmojis"},tx=["src"],nx={class:"catSelectPopupBody"},sx={key:0,class:"removeCatSection"},ix={class:"availableCatsGrid"},rx=["onClick"],ox={class:"availableCatImage"},ax=["src"],lx={class:"availableCatInfo"},cx={class:"availableCatName"},ux={class:"availableCatLevel"},hx={class:"availableCatStars"},dx={__name:"MainScreen",setup(t){const e=H=>H>=1e9?(H/1e9).toFixed(1).replace(/\.0$/,"")+"B":H>=1e6?(H/1e6).toFixed(1).replace(/\.0$/,"")+"M":H>=1e4?(H/1e3).toFixed(1).replace(/\.0$/,"")+"K":H.toLocaleString(),n=en(),s=N(null),i=N("main"),r=N(0),o=N(0),l=N(0),c=N(50),u=N(50),d=N([]),p=N([]),m=N(null),_=N(0),y=N(0),A=N(1),C=N(!1),L=N(!0),Q=N(0),j=N(0),$=N(1),oe=N(!1),Pe=N(!0),S=N(0),w=N(0),T=N(1),P=N(!1),R=N(!0),D=N(0),E=N(0),Ke=N(1),vt=N(!1),st=N(!0),Ve=H=>Math.pow(2,H-1),Ce=H=>{i.value=H,_.value=0,C.value=!1,L.value=!0,Q.value=0,oe.value=!1,Pe.value=!0,S.value=0,P.value=!1,R.value=!0,D.value=0,vt.value=!1,st.value=!0},Mt=()=>{n.currentRoute.value.path==="/main"&&(i.value="main")};Et(()=>{s.value=ct(),s.value&&(o.value=s.value.gameData?.coins||0,l.value=s.value.gameData?.totalCoin||0,r.value=o.value,u.value=s.value.gameData?.catFragments||50,A.value=s.value.gameData?.miningLevel||1,y.value=s.value.gameData?.miningTotalClicks||0,T.value=s.value.gameData?.huntingLevel||1,w.value=s.value.gameData?.huntingTotalClicks||0,$.value=s.value.gameData?.explorationLevel||1,j.value=s.value.gameData?.explorationTotalClicks||0,Ke.value=s.value.gameData?.productionLevel||1,E.value=s.value.gameData?.productionTotalClicks||0,s.value.gameData?.miningCats&&(Array.isArray(s.value.gameData.miningCats)&&s.value.gameData.miningCats.length===0?ee.value=[null,null,null,null,null,null]:ee.value=s.value.gameData.miningCats),s.value.gameData?.huntingCats&&(Array.isArray(s.value.gameData.huntingCats)&&s.value.gameData.huntingCats.length===0?K.value=[null,null,null,null,null,null]:K.value=s.value.gameData.huntingCats),s.value.gameData?.explorationCats&&(Array.isArray(s.value.gameData.explorationCats)&&s.value.gameData.explorationCats.length===0?Y.value=[null,null,null,null,null,null]:Y.value=s.value.gameData.explorationCats),s.value.gameData?.productionCats&&(Array.isArray(s.value.gameData.productionCats)&&s.value.gameData.productionCats.length===0?ae.value=[null,null,null,null,null,null]:ae.value=s.value.gameData.productionCats)),un(),n.afterEach(Mt);try{m.value=new Audio,m.value.src=new URL("/tdl/assets/clickbgm-BvbCQtA-.mp3",import.meta.url).href,m.value.volume=.3}catch{console.log("클릭 사운드 파일을 찾을 수 없습니다.")}const H=()=>{!cn()&&m.value&&(m.value.pause(),m.value.currentTime=0)};window.addEventListener("soundSettingChanged",H),_e("mining"),_e("hunting"),_e("exploration"),_e("production"),er(()=>{n.afterEach(Mt),Be(),window.removeEventListener("soundSettingChanged",H)})});const cn=()=>{const H=localStorage.getItem("soundEnabled");return H!==null?H==="true":!0},Pt=H=>{if(m.value&&cn()&&(m.value.currentTime=0,m.value.play().catch(()=>{})),Le.value<sn.value){alert("에너지가 부족합니다!");return}if(kt()){if(H==="mining"){if(_.value++,y.value++,y.value>=A.value*1e3){A.value++;const k={id:Date.now(),text:`채굴 레벨업! Lv.${A.value}`,x:Math.random()*(Math.min(window.innerWidth||500,500)-220-40)+20,y:Math.random()*(window.innerHeight||500)+100};d.value.push(k),setTimeout(()=>{const B=d.value.findIndex(ne=>ne.id===k.id);B>-1&&d.value.splice(B,1)},3e3),s.value&&Yt(s.value.id,{miningLevel:A.value,miningTotalClicks:y.value})}if(_.value>=10){const B=Ve(A.value),ne=100*B;r.value+=ne,o.value=r.value,_.value=0,C.value=!0,L.value=!1;const ue=Math.random();let de=0;if(ue<.3?de=1:ue<.4&&(de=2),de>0){u.value+=de;for(let Ue=0;Ue<de;Ue++){const Fe=Math.floor(Math.random()*6)+1,hn=Math.min(window.innerWidth||500,500),Ut=window.innerHeight||800,at=60,tt=30,dt={id:Date.now()+Ue,x:Math.random()*(hn-at-tt*2)+tt,y:Math.random()*(Ut-at-tt*2-200)+100,imageId:Fe};p.value.push(dt),setTimeout(()=>{const Ye=p.value.findIndex(rn=>rn.id===dt.id);Ye>-1&&p.value.splice(Ye,1)},2e3)}}s.value&&Yt(s.value.id,{coins:r.value,catFragments:u.value,miningTotalClicks:y.value,miningLevel:A.value});const ye=Math.min(window.innerWidth||500,500),we=window.innerHeight||800,Ge=220,gt=60,ot=20,mt={id:Date.now(),text:`채굴 완료! ${ne.toLocaleString()}원 획득! (x${B})`,x:Math.random()*(ye-Ge-ot*2)+ot,y:Math.random()*(we-gt-ot*2-200)+100};d.value.push(mt),setTimeout(()=>{const Ue=d.value.findIndex(Fe=>Fe.id===mt.id);Ue>-1&&d.value.splice(Ue,1)},3e3),setTimeout(()=>{C.value=!1,L.value=!0},1500)}else{const k=Math.min(window.innerWidth||500,500),B=window.innerHeight||800,ne=220,ue=60,de=20,ye={id:Date.now(),text:`채굴 진행: ${_.value}/10`,x:Math.random()*(k-ne-de*2)+de,y:Math.random()*(B-ue-de*2-200)+100};d.value.push(ye),setTimeout(()=>{const we=d.value.findIndex(Ge=>Ge.id===ye.id);we>-1&&d.value.splice(we,1)},2e3)}}else if(H==="exploration"){if(Q.value++,j.value++,j.value>=$.value*1e3){$.value++;const k={id:Date.now(),text:`탐험 레벨업! Lv.${$.value}`,x:Math.random()*(Math.min(window.innerWidth||500,500)-220-40)+20,y:Math.random()*(window.innerHeight||500)+100};d.value.push(k),setTimeout(()=>{const B=d.value.findIndex(ne=>ne.id===k.id);B>-1&&d.value.splice(B,1)},3e3),s.value&&Yt(s.value.id,{explorationLevel:$.value,explorationTotalClicks:j.value})}if(Q.value>=10){const B=Ve($.value),ne=100*B;r.value+=ne,o.value=r.value,Q.value=0,oe.value=!0,Pe.value=!1;const ue=Math.random();let de=0;if(ue<.3?de=1:ue<.4&&(de=2),de>0){u.value+=de;for(let Ue=0;Ue<de;Ue++){const Fe=Math.floor(Math.random()*6)+1,hn=Math.min(window.innerWidth||500,500),Ut=window.innerHeight||800,at=60,tt=30,dt={id:Date.now()+Ue,x:Math.random()*(hn-at-tt*2)+tt,y:Math.random()*(Ut-at-tt*2-200)+100,imageId:Fe};p.value.push(dt),setTimeout(()=>{const Ye=p.value.findIndex(rn=>rn.id===dt.id);Ye>-1&&p.value.splice(Ye,1)},2e3)}}s.value&&Yt(s.value.id,{coins:r.value,catFragments:u.value,explorationTotalClicks:j.value,explorationLevel:$.value});const ye=Math.min(window.innerWidth||500,500),we=window.innerHeight||800,Ge=220,gt=60,ot=20,mt={id:Date.now(),text:`탐험 완료! ${ne.toLocaleString()}원 획득! (x${B})`,x:Math.random()*(ye-Ge-ot*2)+ot,y:Math.random()*(we-gt-ot*2-200)+100};d.value.push(mt),setTimeout(()=>{const Ue=d.value.findIndex(Fe=>Fe.id===mt.id);Ue>-1&&d.value.splice(Ue,1)},3e3),setTimeout(()=>{oe.value=!1,Pe.value=!0},1500)}else{const k=Math.min(window.innerWidth||500,500),B=window.innerHeight||800,ne=220,ue=60,de=20,ye={id:Date.now(),text:`탐험 진행: ${Q.value}/10`,x:Math.random()*(k-ne-de*2)+de,y:Math.random()*(B-ue-de*2-200)+100};d.value.push(ye),setTimeout(()=>{const we=d.value.findIndex(Ge=>Ge.id===ye.id);we>-1&&d.value.splice(we,1)},2e3)}}else if(H==="hunting"){if(S.value++,w.value++,w.value>=T.value*1e3){T.value++;const k={id:Date.now(),text:`사냥 레벨업! Lv.${T.value}`,x:Math.random()*(Math.min(window.innerWidth||500,500)-220-40)+20,y:Math.random()*(window.innerHeight||500)+100};d.value.push(k),setTimeout(()=>{const B=d.value.findIndex(ne=>ne.id===k.id);B>-1&&d.value.splice(B,1)},3e3),s.value&&Yt(s.value.id,{huntingLevel:T.value,huntingTotalClicks:w.value})}if(S.value>=10){const B=Ve(T.value),ne=100*B;r.value+=ne,o.value=r.value,S.value=0,P.value=!0,R.value=!1;const ue=Math.random();let de=0;if(ue<.3?de=1:ue<.4&&(de=2),de>0){u.value+=de;for(let Ue=0;Ue<de;Ue++){const Fe=Math.floor(Math.random()*6)+1,hn=Math.min(window.innerWidth||500,500),Ut=window.innerHeight||800,at=60,tt=30,dt={id:Date.now()+Ue,x:Math.random()*(hn-at-tt*2)+tt,y:Math.random()*(Ut-at-tt*2-200)+100,imageId:Fe};p.value.push(dt),setTimeout(()=>{const Ye=p.value.findIndex(rn=>rn.id===dt.id);Ye>-1&&p.value.splice(Ye,1)},2e3)}}s.value&&Yt(s.value.id,{coins:r.value,catFragments:u.value,huntingTotalClicks:w.value,huntingLevel:T.value});const ye=Math.min(window.innerWidth||500,500),we=window.innerHeight||800,Ge=220,gt=60,ot=20,mt={id:Date.now(),text:`사냥 완료! ${ne.toLocaleString()}원 획득! (x${B})`,x:Math.random()*(ye-Ge-ot*2)+ot,y:Math.random()*(we-gt-ot*2-200)+100};d.value.push(mt),setTimeout(()=>{const Ue=d.value.findIndex(Fe=>Fe.id===mt.id);Ue>-1&&d.value.splice(Ue,1)},3e3),setTimeout(()=>{P.value=!1,R.value=!0},1500)}else{const k=Math.min(window.innerWidth||500,500),B=window.innerHeight||800,ne=220,ue=60,de=20,ye={id:Date.now(),text:`사냥 진행: ${S.value}/10`,x:Math.random()*(k-ne-de*2)+de,y:Math.random()*(B-ue-de*2-200)+100};d.value.push(ye),setTimeout(()=>{const we=d.value.findIndex(Ge=>Ge.id===ye.id);we>-1&&d.value.splice(we,1)},2e3)}}else if(H==="production"){if(D.value++,E.value++,E.value>=Ke.value*1e3){Ke.value++;const k={id:Date.now(),text:`생산 레벨업! Lv.${Ke.value}`,x:Math.random()*(Math.min(window.innerWidth||500,500)-220-40)+20,y:Math.random()*(window.innerHeight||500)+100};d.value.push(k),setTimeout(()=>{const B=d.value.findIndex(ne=>ne.id===k.id);B>-1&&d.value.splice(B,1)},3e3),s.value&&Yt(s.value.id,{productionLevel:Ke.value,productionTotalClicks:E.value})}if(D.value>=10){const B=Ve(Ke.value),ne=100*B;r.value+=ne,o.value=r.value,D.value=0,vt.value=!0,st.value=!1;const ue=Math.random();let de=0;if(ue<.3?de=1:ue<.4&&(de=2),de>0){u.value+=de;for(let Ue=0;Ue<de;Ue++){const Fe=Math.floor(Math.random()*6)+1,hn=Math.min(window.innerWidth||500,500),Ut=window.innerHeight||800,at=60,tt=30,dt={id:Date.now()+Ue,x:Math.random()*(hn-at-tt*2)+tt,y:Math.random()*(Ut-at-tt*2-200)+100,imageId:Fe};p.value.push(dt),setTimeout(()=>{const Ye=p.value.findIndex(rn=>rn.id===dt.id);Ye>-1&&p.value.splice(Ye,1)},2e3)}}s.value&&Yt(s.value.id,{coins:r.value,catFragments:u.value,productionTotalClicks:E.value,productionLevel:Ke.value});const ye=Math.min(window.innerWidth||500,500),we=window.innerHeight||800,Ge=220,gt=60,ot=20,mt={id:Date.now(),text:`생산 완료! ${ne.toLocaleString()}원 획득! (x${B})`,x:Math.random()*(ye-Ge-ot*2)+ot,y:Math.random()*(we-gt-ot*2-200)+100};d.value.push(mt),setTimeout(()=>{const Ue=d.value.findIndex(Fe=>Fe.id===mt.id);Ue>-1&&d.value.splice(Ue,1)},3e3),setTimeout(()=>{vt.value=!1,st.value=!0},1500)}else{const k=Math.min(window.innerWidth||500,500),B=window.innerHeight||800,ne=220,ue=60,de=20,ye={id:Date.now(),text:`생산 진행: ${D.value}/10`,x:Math.random()*(k-ne-de*2)+de,y:Math.random()*(B-ue-de*2-200)+100};d.value.push(ye),setTimeout(()=>{const we=d.value.findIndex(Ge=>Ge.id===ye.id);we>-1&&d.value.splice(we,1)},2e3)}}}};N(0),N(!1),N({stone:0,iron:0,gold:0,diamond:0});const Le=N(4e3),ht=N(4e3),sn=N(1),un=()=>{const H=new Date().toDateString(),k=localStorage.getItem("energyLastDate"),B=localStorage.getItem("currentEnergy");if(k!==H)Le.value=ht.value,localStorage.setItem("energyLastDate",H),localStorage.setItem("currentEnergy",ht.value.toString());else if(B){const ne=parseInt(B)||0;Le.value=Math.max(0,Math.min(ne,ht.value))}else Le.value=0},kt=(H=sn.value)=>Le.value>=H?(Le.value=Math.max(0,Le.value-H),localStorage.setItem("currentEnergy",Le.value.toString()),localStorage.setItem("energyLastDate",new Date().toDateString()),!0):!1,G=H=>{try{return new URL(Object.assign({"../assets/img/cat1.png":ah,"../assets/img/cat10.png":lh,"../assets/img/cat11.png":ch,"../assets/img/cat12.png":uh,"../assets/img/cat13.png":hh,"../assets/img/cat14.png":dh,"../assets/img/cat15.png":fh,"../assets/img/cat16.png":ph,"../assets/img/cat17.png":gh,"../assets/img/cat18.png":mh,"../assets/img/cat19.png":_h,"../assets/img/cat2.png":vh,"../assets/img/cat20.png":yh,"../assets/img/cat21.png":Ah,"../assets/img/cat22.png":Ih,"../assets/img/cat23.png":wh,"../assets/img/cat24.png":Eh,"../assets/img/cat25.png":Th,"../assets/img/cat26.png":Ch,"../assets/img/cat27.png":bh,"../assets/img/cat28.png":Sh,"../assets/img/cat29.png":Rh,"../assets/img/cat3.png":Ph,"../assets/img/cat30.png":kh,"../assets/img/cat4.png":Dh,"../assets/img/cat5.png":xh,"../assets/img/cat6.png":Nh,"../assets/img/cat7.png":Mh,"../assets/img/cat8.png":Oh,"../assets/img/cat9.png":Vh,"../assets/img/catProfile01.png":Lh,"../assets/img/catProfile02.png":Bh,"../assets/img/cat_ico.png":Fh})[`../assets/img/cat${H}.png`],import.meta.url).href}catch{return`/src/assets/img/cat${H}.png`}},re=H=>{try{return new URL(Object.assign({"../assets/img/tul1.png":B2,"../assets/img/tul2.png":F2,"../assets/img/tul3.png":U2,"../assets/img/tul5.png":$2,"../assets/img/tul6.png":H2})[`../assets/img/tul${H}.png`],import.meta.url).href}catch{return`/src/assets/img/tul${H}.png`}},ee=N([null,null,null,null,null,null]),fe=N(!1),ge=N(-1),I=N([]),b=()=>{const H=new Set;return ee.value.forEach(k=>{k&&k.id&&H.add(k.id)}),K.value.forEach(k=>{k&&k.id&&H.add(k.id)}),Y.value.forEach(k=>{k&&k.id&&H.add(k.id)}),ae.value.forEach(k=>{k&&k.id&&H.add(k.id)}),H},x=()=>{const H=ct();if(H){const k=H.gameData?.inventory||[],ne=[...[{id:1,name:"Robot",stars:1,level:1,imageId:1},{id:2,name:"Style",stars:1,level:1,imageId:2},{id:3,name:"Suit",stars:1,level:1,imageId:3},{id:4,name:"Tech",stars:1,level:1,imageId:4},{id:5,name:"Army",stars:1,level:1,imageId:5},{id:6,name:"Detective",stars:1,level:1,imageId:6},{id:7,name:"Scholar",stars:1,level:1,imageId:7},{id:8,name:"White",stars:1,level:1,imageId:8},{id:9,name:"Green",stars:1,level:1,imageId:9},{id:10,name:"Blue",stars:1,level:1,imageId:10},{id:11,name:"Red",stars:1,level:1,imageId:11},{id:12,name:"Shirt",stars:1,level:1,imageId:12},{id:13,name:"Ninja",stars:1,level:1,imageId:13},{id:14,name:"Knight",stars:1,level:1,imageId:14},{id:15,name:"Pirate",stars:1,level:1,imageId:15},{id:16,name:"Sailor",stars:1,level:1,imageId:16},{id:17,name:"Sport",stars:1,level:1,imageId:17},{id:18,name:"Cafe",stars:1,level:1,imageId:18},{id:19,name:"Chef",stars:1,level:1,imageId:19},{id:20,name:"Fisher",stars:1,level:1,imageId:20},{id:21,name:"Farmer",stars:1,level:1,imageId:21},{id:22,name:"Doctor",stars:1,level:1,imageId:22},{id:23,name:"Teacher",stars:1,level:1,imageId:23},{id:24,name:"Artist",stars:1,level:1,imageId:24}]];k.forEach(ye=>{const we=ne.findIndex(Ge=>Ge.id===ye.id);we>-1?ne[we]={...ne[we],...ye}:ne.push(ye)});const ue=b(),de=W();de&&de.id&&ue.delete(de.id),I.value=ne.filter(ye=>!ue.has(ye.id))}},W=()=>{const H=te.value,k=ge.value;if(k<0||k>=6)return null;let B=null;return H==="mining"?B=ee.value:H==="hunting"?B=K.value:H==="exploration"?B=Y.value:H==="production"&&(B=ae.value),B&&B[k]?B[k]:null},z=(H,k,B)=>{te.value=k,x(),ge.value=H,fe.value=!0},q=H=>{if(ge.value>=0&&ge.value<6){const k={id:H.id,level:H.level||1,stars:H.stars||1,imageId:H.imageId||H.id,name:H.name};let B=[];te.value==="mining"?B=ee.value:te.value==="hunting"?B=K.value:te.value==="exploration"?B=Y.value:te.value==="production"&&(B=ae.value);const ne=B.findIndex((de,ye)=>de&&de.id===H.id&&ye!==ge.value);if(ne!==-1){B[ne]=null;const de=te.value,ye=`${de}_${ne}_${H.id}`;ce.value[de][ye]&&delete ce.value[de][ye]}te.value==="mining"?(ee.value[ge.value]=k,_e("mining")):te.value==="hunting"?(K.value[ge.value]=k,_e("hunting")):te.value==="exploration"?(Y.value[ge.value]=k,_e("exploration")):te.value==="production"&&(ae.value[ge.value]=k,_e("production"));const ue=ct();ue&&Yt(ue.id,{miningCats:ee.value,huntingCats:K.value,explorationCats:Y.value,productionCats:ae.value})}fe.value=!1,ge.value=-1,te.value="mining"},ie=()=>{if(ge.value>=0&&ge.value<6){const H=te.value;let k=[];H==="mining"?k=ee.value:H==="hunting"?k=K.value:H==="exploration"?k=Y.value:H==="production"&&(k=ae.value);const B=k[ge.value];if(H==="mining"?(ee.value[ge.value]=null,_e("mining")):H==="hunting"?(K.value[ge.value]=null,_e("hunting")):H==="exploration"?(Y.value[ge.value]=null,_e("exploration")):H==="production"&&(ae.value[ge.value]=null,_e("production")),B&&B.id){const ue=`${H}_${ge.value}_${B.id}`;ce.value[H][ue]&&delete ce.value[H][ue]}const ne=ct();ne&&Yt(ne.id,{miningCats:ee.value,huntingCats:K.value,explorationCats:Y.value,productionCats:ae.value})}fe.value=!1,ge.value=-1,te.value="mining"},Z=()=>{fe.value=!1,ge.value=-1,te.value="mining"},K=N([null,null,null,null,null,null]),Y=N([null,null,null,null,null,null]),ae=N([null,null,null,null,null,null]),te=N("mining"),he=N({mining:null,hunting:null,exploration:null,production:null}),ce=N({mining:{},hunting:{},exploration:{},production:{}}),_e=H=>{he.value[H]&&(clearInterval(he.value[H]),he.value[H]=null);let k=[];H==="mining"?k=ee.value:H==="hunting"?k=K.value:H==="exploration"?k=Y.value:H==="production"&&(k=ae.value);const B=k.filter(ne=>ne!==null);B.length!==0&&(B.forEach((ne,ue)=>{const de=`${H}_${ue}_${ne.id}`;ce.value[H][de]||(ce.value[H][de]=0)}),he.value[H]=setInterval(()=>{let ne=[];H==="mining"?ne=ee.value:H==="hunting"?ne=K.value:H==="exploration"?ne=Y.value:H==="production"&&(ne=ae.value);const ue=ne.filter(Ge=>Ge!==null);if(ue.length===0){He(H);return}const ye={mining:"채굴",hunting:"사냥",exploration:"탐험",production:"생산"}[H]||"작업";let we=[];H==="mining"?we=ee.value:H==="hunting"?we=K.value:H==="exploration"?we=Y.value:H==="production"&&(we=ae.value),ue.forEach(Ge=>{const gt=we.findIndex(tt=>tt&&tt.id===Ge.id);if(gt===-1)return;const ot=`${H}_${gt}_${Ge.id}`;ce.value[H][ot]||(ce.value[H][ot]=0),ce.value[H][ot]+=1;const mt=ce.value[H][ot],Ue=Math.min(window.innerWidth||500,500),Fe=window.innerHeight||800,hn=220,Ut=60,at=20;if(mt>=10){r.value+=100,o.value=r.value,ce.value[H][ot]=0;const tt=Math.random();let dt=0;if(tt<.3?dt=1:tt<.4&&(dt=2),dt>0&&(u.value+=dt,i.value===H))for(let Ye=0;Ye<dt;Ye++){const rn=Math.floor(Math.random()*6)+1,wi=60,ms=30,lr={id:Date.now()+Ye+gt*1e3,x:Math.random()*(Ue-wi-ms*2)+ms,y:Math.random()*(Fe-wi-ms*2-200)+100,imageId:rn};p.value.push(lr),setTimeout(()=>{const cr=p.value.findIndex(ur=>ur.id===lr.id);cr>-1&&p.value.splice(cr,1)},2e3)}if(s.value&&Yt(s.value.id,{coins:r.value,catFragments:u.value}),i.value===H){const Ye={id:Date.now()+gt+Ge.id*1e4,text:`${ye} 완료! 100원 획득!`,x:Math.random()*(Ue-hn-at*2)+at,y:Math.random()*(Fe-Ut-at*2-200)+100};d.value.push(Ye),setTimeout(()=>{const rn=d.value.findIndex(wi=>wi.id===Ye.id);rn>-1&&d.value.splice(rn,1)},3e3)}}else if(i.value===H){const tt={id:Date.now()+gt+Ge.id*1e3+mt*100,text:`${ye} 진행: ${mt}/10`,x:Math.random()*(Ue-hn-at*2)+at,y:Math.random()*(Fe-Ut-at*2-200)+100};d.value.push(tt),setTimeout(()=>{const dt=d.value.findIndex(Ye=>Ye.id===tt.id);dt>-1&&d.value.splice(dt,1)},2e3)}})},1e3))},He=H=>{he.value[H]&&(clearInterval(he.value[H]),he.value[H]=null)},Be=()=>{Object.keys(he.value).forEach(H=>{He(H)})};return as(r,H=>{o.value=H}),as([ee,K,Y,ae],()=>{["mining","hunting","exploration","production"].forEach(k=>{let B=[];k==="mining"?B=ee.value:k==="hunting"?B=K.value:k==="exploration"?B=Y.value:k==="production"&&(B=ae.value);const ne=B.map((ue,de)=>ue?`${k}_${de}_${ue.id}`:null).filter(ue=>ue!==null);Object.keys(ce.value[k]).forEach(ue=>{ne.includes(ue)||delete ce.value[k][ue]})}),_e("mining"),_e("hunting"),_e("exploration"),_e("production")},{deep:!0}),N(0),N(!1),N([{name:"슬라임",level:1,hp:100,maxHp:100,exp:10,gold:5},{name:"고블린",level:2,hp:150,maxHp:150,exp:20,gold:10},{name:"오크",level:3,hp:200,maxHp:200,exp:35,gold:20}]),N(null),N({level:1,exp:0,maxExp:100,hp:100,maxHp:100,attack:20}),N(0),N(!1),N(null),N([{name:"신비한 숲",level:1,difficulty:"쉬움",rewards:["나무","열매","약초"],description:"평화로운 숲에서 기본 자원을 수집할 수 있습니다.",discovered:!0},{name:"고대 유적",level:2,difficulty:"보통",rewards:["고대 유물","마법석","보석"],description:"신비한 힘이 깃든 고대 유적지입니다.",discovered:!1},{name:"용의 동굴",level:3,difficulty:"어려움",rewards:["용의 비늘","마나 크리스탈","희귀 보석"],description:"위험하지만 귀중한 보물이 숨겨진 곳입니다.",discovered:!1}]),N({wood:0,fruit:0,herb:0,artifact:0,magicStone:0,gem:0,dragonScale:0,manaCrystal:0,rareGem:0}),N(0),N(!1),N(null),N({wood:10,stone:5,iron:3,gold:1,diamond:0,herb:8,fruit:12}),N([{id:"woodenSword",name:"나무 검",level:1,materials:{wood:5,stone:2},result:{woodenSword:1},time:30,description:"기본적인 나무 검입니다."},{id:"ironSword",name:"철 검",level:2,materials:{wood:3,iron:5,stone:3},result:{ironSword:1},time:60,description:"강력한 철 검입니다."},{id:"healthPotion",name:"체력 포션",level:1,materials:{herb:3,fruit:2},result:{healthPotion:1},time:20,description:"체력을 회복시켜주는 포션입니다."}]),N({woodenSword:0,ironSword:0,healthPotion:0}),(H,k)=>(O(),V("div",Tk,[be(tn,{coinCount:r.value,currentEnergy:Le.value,maxEnergy:ht.value,totalCoin:l.value,catCount:c.value},null,8,["coinCount","currentEnergy","maxEnergy","totalCoin","catCount"]),h("main",Ck,[i.value==="main"?(O(),V("article",bk,[h("div",Sk,[h("div",Rk,[k[14]||(k[14]=h("div",{class:"statLabel"},"총 포인트",-1)),h("div",Pk,[k[13]||(k[13]=h("div",{class:"iconCircle pointIcon"},[h("img",{src:j2,alt:"P"})],-1)),h("span",kk,U(e(o.value)),1)])]),k[17]||(k[17]=h("div",{class:"divider"},null,-1)),h("div",Dk,[k[16]||(k[16]=h("div",{class:"statLabel"},"총코인",-1)),h("div",xk,[k[15]||(k[15]=h("div",{class:"iconCircle coinIcon"},[h("img",{src:uy,alt:"C"})],-1)),h("span",Nk,U(e(l.value)),1)])])]),h("div",Mk,[h("div",{class:"modeCard miningCard",onClick:k[0]||(k[0]=B=>Ce("mining"))},[k[18]||(k[18]=h("div",{class:"mainmenuBtns"},null,-1)),k[19]||(k[19]=h("div",{class:"modeTitle"},"채굴",-1)),h("div",Ok,"Level "+U(String(A.value).padStart(2,"0")),1)]),h("div",{class:"modeCard huntingCard",onClick:k[1]||(k[1]=B=>Ce("hunting"))},[k[20]||(k[20]=h("div",{class:"mainmenuBtns"},null,-1)),k[21]||(k[21]=h("div",{class:"modeTitle"},"사냥",-1)),h("div",Vk,"Level "+U(String(T.value).padStart(2,"0")),1)]),h("div",{class:"modeCard explorationCard",onClick:k[2]||(k[2]=B=>Ce("exploration"))},[k[22]||(k[22]=h("div",{class:"mainmenuBtns"},null,-1)),k[23]||(k[23]=h("div",{class:"modeTitle"},"탐험",-1)),h("div",Lk,"Level "+U(String($.value).padStart(2,"0")),1)]),h("div",{class:"modeCard productionCard",onClick:k[3]||(k[3]=B=>Ce("production"))},[k[24]||(k[24]=h("div",{class:"mainmenuBtns"},null,-1)),k[25]||(k[25]=h("div",{class:"modeTitle"},"생산",-1)),h("div",Bk,"Level "+U(String(Ke.value).padStart(2,"0")),1)])])])):pe("",!0),i.value==="mining"?(O(),V("div",Fk,[h("div",Uk,[h("button",{class:"backBtn",onClick:k[4]||(k[4]=B=>Ce("main"))},"← 뒤로")]),h("div",$k,U(e(o.value)),1),h("div",Hk,[L.value&&!C.value?(O(),V("button",{key:0,onClick:k[5]||(k[5]=B=>Pt("mining")),class:De(["clickerBtn miningBtn",{"mining-active":_.value>0}])},null,2)):pe("",!0),C.value?(O(),V("div",jk,[...k[26]||(k[26]=[h("div",{class:"completeMessageText"},"채굴 완료!",-1)])])):pe("",!0)]),h("div",Gk,[h("div",qk,[k[27]||(k[27]=h("span",{class:"energyIcon"},"⚡",-1)),h("span",Qk,U(Le.value.toLocaleString())+"/"+U(ht.value.toLocaleString()),1)]),h("div",Wk,[h("div",{class:"energyFill",style:At({width:Le.value/ht.value*100+"%"})},null,4)])]),h("div",zk,[k[30]||(k[30]=h("div",{class:"catsListLabel"},"채굴 냥이 목록",-1)),h("div",Kk,[(O(!0),V(ke,null,je(ee.value,(B,ne)=>(O(),V("div",{key:ne,class:De(["catCard",{emptySlot:!B,working:B&&i.value==="mining"}]),onClick:ue=>z(ne,"mining")},[B?(O(),V("div",Jk,"Lv "+U(String(B.level).padStart(2,"0")),1)):pe("",!0),B?(O(),V("div",Xk,[h("img",{src:G(B.imageId),alt:"고양이"},null,8,Zk)])):pe("",!0),B?(O(),V("div",eD,[(O(!0),V(ke,null,je(B.stars,ue=>(O(),V("span",{key:ue,class:"star"},[...k[28]||(k[28]=[h("img",{src:"",alt:""},null,-1)])]))),128))])):pe("",!0),B?pe("",!0):(O(),V("div",tD,[...k[29]||(k[29]=[h("span",{class:"emptySlotText"},"+",-1)])]))],10,Yk))),128))])])])):pe("",!0),i.value==="hunting"?(O(),V("div",nD,[h("div",sD,[h("button",{class:"backBtn",onClick:k[6]||(k[6]=B=>Ce("main"))},"← 뒤로")]),h("div",iD,U(e(o.value)),1),h("div",rD,[R.value&&!P.value?(O(),V("button",{key:0,onClick:k[7]||(k[7]=B=>Pt("hunting")),class:De(["clickerBtn huntingBtn",{"hunting-active":S.value>0}])},null,2)):pe("",!0),P.value?(O(),V("div",oD,[...k[31]||(k[31]=[h("div",{class:"completeMessageText"},"사냥 완료!",-1)])])):pe("",!0)]),h("div",aD,[h("div",lD,[k[32]||(k[32]=h("span",{class:"energyIcon"},"⚡",-1)),h("span",cD,U(Le.value.toLocaleString())+"/"+U(ht.value.toLocaleString()),1)]),h("div",uD,[h("div",{class:"energyFill",style:At({width:Le.value/ht.value*100+"%"})},null,4)])]),h("div",hD,[k[35]||(k[35]=h("div",{class:"catsListLabel"},"사냥 냥이 목록",-1)),h("div",dD,[(O(!0),V(ke,null,je(K.value,(B,ne)=>(O(),V("div",{key:ne,class:De(["catCard",{emptySlot:!B,working:B&&i.value==="hunting"}]),onClick:ue=>z(ne,"hunting")},[B?(O(),V("div",pD,"Lv "+U(String(B.level).padStart(2,"0")),1)):pe("",!0),B?(O(),V("div",gD,[h("img",{src:G(B.imageId),alt:"고양이"},null,8,mD)])):pe("",!0),B?(O(),V("div",_D,[(O(!0),V(ke,null,je(B.stars,ue=>(O(),V("span",{key:ue,class:"star"},[...k[33]||(k[33]=[h("img",{src:"",alt:""},null,-1)])]))),128))])):pe("",!0),B?pe("",!0):(O(),V("div",vD,[...k[34]||(k[34]=[h("span",{class:"emptySlotText"},"+",-1)])]))],10,fD))),128))])])])):pe("",!0),i.value==="exploration"?(O(),V("div",yD,[h("div",AD,[h("button",{class:"backBtn",onClick:k[8]||(k[8]=B=>Ce("main"))},"← 뒤로")]),h("div",ID,U(e(o.value)),1),h("div",wD,[Pe.value&&!oe.value?(O(),V("button",{key:0,onClick:k[9]||(k[9]=B=>Pt("exploration")),class:De(["clickerBtn explorationBtn",{"exploration-active":Q.value>0}])},null,2)):pe("",!0),oe.value?(O(),V("div",ED,[...k[36]||(k[36]=[h("div",{class:"completeMessageText"},"탐험 완료!",-1)])])):pe("",!0)]),h("div",TD,[h("div",CD,[k[37]||(k[37]=h("span",{class:"energyIcon"},"⚡",-1)),h("span",bD,U(Le.value.toLocaleString())+"/"+U(ht.value.toLocaleString()),1)]),h("div",SD,[h("div",{class:"energyFill",style:At({width:Le.value/ht.value*100+"%"})},null,4)])]),h("div",RD,[k[40]||(k[40]=h("div",{class:"catsListLabel"},"탐험 냥이 목록",-1)),h("div",PD,[(O(!0),V(ke,null,je(Y.value,(B,ne)=>(O(),V("div",{key:ne,class:De(["catCard",{emptySlot:!B,working:B&&i.value==="exploration"}]),onClick:ue=>z(ne,"exploration")},[B?(O(),V("div",DD,"Lv "+U(String(B.level).padStart(2,"0")),1)):pe("",!0),B?(O(),V("div",xD,[h("img",{src:G(B.imageId),alt:"고양이"},null,8,ND)])):pe("",!0),B?(O(),V("div",MD,[(O(!0),V(ke,null,je(B.stars,ue=>(O(),V("span",{key:ue,class:"star"},[...k[38]||(k[38]=[h("img",{src:"",alt:""},null,-1)])]))),128))])):pe("",!0),B?pe("",!0):(O(),V("div",OD,[...k[39]||(k[39]=[h("span",{class:"emptySlotText"},"+",-1)])]))],10,kD))),128))])])])):pe("",!0),i.value==="production"?(O(),V("div",VD,[h("div",LD,[h("button",{class:"backBtn",onClick:k[10]||(k[10]=B=>Ce("main"))},"← 뒤로")]),h("div",BD,U(e(o.value)),1),h("div",FD,[st.value&&!vt.value?(O(),V("button",{key:0,onClick:k[11]||(k[11]=B=>Pt("production")),class:De(["clickerBtn productionBtn",{"production-active":D.value>0}])},null,2)):pe("",!0),vt.value?(O(),V("div",UD,[...k[41]||(k[41]=[h("div",{class:"completeMessageText"},"생산 완료!",-1)])])):pe("",!0)]),h("div",$D,[h("div",HD,[k[42]||(k[42]=h("span",{class:"energyIcon"},"⚡",-1)),h("span",jD,U(Le.value.toLocaleString())+"/"+U(ht.value.toLocaleString()),1)]),h("div",GD,[h("div",{class:"energyFill",style:At({width:Le.value/ht.value*100+"%"})},null,4)])]),h("div",qD,[k[45]||(k[45]=h("div",{class:"catsListLabel"},"생산 냥이 목록",-1)),h("div",QD,[(O(!0),V(ke,null,je(ae.value,(B,ne)=>(O(),V("div",{key:ne,class:De(["catCard",{emptySlot:!B,working:B&&i.value==="production"}]),onClick:ue=>z(ne,"production")},[B?(O(),V("div",zD,"Lv "+U(String(B.level).padStart(2,"0")),1)):pe("",!0),B?(O(),V("div",KD,[h("img",{src:G(B.imageId),alt:"고양이"},null,8,YD)])):pe("",!0),B?(O(),V("div",JD,[(O(!0),V(ke,null,je(B.stars,ue=>(O(),V("span",{key:ue,class:"star"},[...k[43]||(k[43]=[h("img",{src:"",alt:""},null,-1)])]))),128))])):pe("",!0),B?pe("",!0):(O(),V("div",XD,[...k[44]||(k[44]=[h("span",{class:"emptySlotText"},"+",-1)])]))],10,WD))),128))])])])):pe("",!0)]),be(nn),i.value!=="main"?(O(),V("div",ZD,[(O(!0),V(ke,null,je(d.value,B=>(O(),V("div",{key:B.id,class:"speechBubble",style:At({left:B.x+"px",top:B.y+"px",transform:"translateX(-50%)"})},U(B.text),5))),128))])):pe("",!0),i.value!=="main"?(O(),V("div",ex,[(O(!0),V(ke,null,je(p.value,B=>(O(),V("div",{key:B.id,class:"catEmoji",style:At({left:B.x+"px",top:B.y+"px"})},[h("img",{src:re(B.imageId),alt:"",class:"tulImage"},null,8,tx)],4))),128))])):pe("",!0),fe.value?(O(),V("div",{key:2,class:"catSelectPopupOverlay",onClick:Z},[h("div",{class:"catSelectPopupContent",onClick:k[12]||(k[12]=Br(()=>{},["stop"]))},[h("div",{class:"catSelectPopupHeader"},[k[46]||(k[46]=h("h3",null,"고양이 선택",-1)),h("button",{class:"closePopupBtn",onClick:Z},"×")]),h("div",nx,[W()?(O(),V("div",sx,[h("button",{class:"removeCatBtn",onClick:ie}," 고양이 제거 ")])):pe("",!0),h("div",ix,[(O(!0),V(ke,null,je(I.value,B=>(O(),V("div",{key:B.id,class:"availableCatCard",onClick:ne=>q(B)},[h("div",ox,[h("img",{src:G(B.imageId||B.id),alt:"고양이"},null,8,ax)]),h("div",lx,[h("div",cx,U(B.name),1),h("div",ux,"Lv "+U(String(B.level||1).padStart(2,"0")),1),h("div",hx,[(O(!0),V(ke,null,je(B.stars||1,ne=>(O(),V("span",{key:ne,class:"star"},"★"))),128))])])],8,rx))),128))])])])])):pe("",!0)]))}},fx=Tt(dx,[["__scopeId","data-v-d5911dcd"]]),px={class:"miningPage"},gx={class:"mainContent"},mx={class:"miningContainer"},_x={class:"pageHeader"},vx={class:"levelInfo"},yx={class:"miningProgress"},Ax={class:"progressBar"},Ix={class:"progressText"},wx=["disabled"],Ex={key:0},Tx={key:1},Cx={class:"resources"},bx={class:"resourceList"},Sx={class:"resourceItem"},Rx={class:"resourceItem"},Px={class:"resourceItem"},kx={class:"resourceItem"},Dx={__name:"MiningPage",setup(t){const e=en(),n=N(0);Et(()=>{const c=ct();c&&(n.value=c.gameData?.coins||0)});const s=N(1),i=N(0),r=N(!1),o=N({stone:0,iron:0,gold:0,diamond:0}),l=()=>{if(r.value)return;r.value=!0,i.value=0;const c=setInterval(()=>{if(i.value+=10,i.value>=100){clearInterval(c),r.value=!1,i.value=0;const u=Math.random();u<.4?o.value.stone++:u<.7?o.value.iron++:u<.9?o.value.gold++:o.value.diamond++}},200)};return(c,u)=>(O(),V("div",px,[be(tn,{coinCount:n.value},null,8,["coinCount"]),h("main",gx,[h("div",mx,[h("div",_x,[h("button",{class:"backBtn",onClick:u[0]||(u[0]=d=>Bt(e).push("/main"))},"← 뒤로"),u[1]||(u[1]=h("h2",null,"⛏️ 채굴",-1))]),h("div",vx,[h("span",null,"채굴 레벨: "+U(s.value),1)]),h("div",yx,[h("div",Ax,[h("div",{class:"progressFill",style:At({width:i.value+"%"})},null,4)]),h("span",Ix,U(i.value)+"%",1)]),h("button",{class:De(["miningBtn",{mining:r.value}]),onClick:l,disabled:r.value},[r.value?(O(),V("span",Tx,"⛏️ 채굴 중...")):(O(),V("span",Ex,"⛏️ 채굴 시작"))],10,wx),h("div",Cx,[u[6]||(u[6]=h("h3",null,"보유 자원",-1)),h("div",bx,[h("div",Sx,[u[2]||(u[2]=h("span",null,"🪨 돌",-1)),h("span",null,U(o.value.stone),1)]),h("div",Rx,[u[3]||(u[3]=h("span",null,"⚒️ 철",-1)),h("span",null,U(o.value.iron),1)]),h("div",Px,[u[4]||(u[4]=h("span",null,"🥇 금",-1)),h("span",null,U(o.value.gold),1)]),h("div",kx,[u[5]||(u[5]=h("span",null,"💎 다이아몬드",-1)),h("span",null,U(o.value.diamond),1)])])])])]),be(nn)]))}},xx=Tt(Dx,[["__scopeId","data-v-17eb7d34"]]),Nx={class:"huntingPage"},Mx={class:"mainContent"},Ox={class:"huntingContainer"},Vx={class:"pageHeader"},Lx={class:"playerStats"},Bx={class:"statsGrid"},Fx={class:"statItem"},Ux={class:"statItem"},$x={class:"statItem"},Hx={class:"statItem"},jx={class:"monsterSelection"},Gx={class:"monsterList"},qx=["onClick"],Qx={class:"monsterInfo"},Wx={class:"monsterName"},zx={class:"monsterLevel"},Kx={class:"monsterRewards"},Yx={key:0,class:"currentMonster"},Jx={class:"monsterHp"},Xx={class:"hpBar"},Zx={class:"hpText"},eN={class:"huntingProgress"},tN={class:"progressBar"},nN={class:"progressText"},sN=["disabled"],iN={key:0},rN={key:1},oN={__name:"HuntingPage",setup(t){const e=en(),n=N(0);Et(()=>{const d=ct();d&&(n.value=d.gameData?.coins||0)}),N(1);const s=N(0),i=N(!1),r=N([{name:"슬라임",level:1,hp:100,maxHp:100,exp:10,gold:5},{name:"고블린",level:2,hp:150,maxHp:150,exp:20,gold:10},{name:"오크",level:3,hp:200,maxHp:200,exp:35,gold:20}]),o=N(null),l=N({level:1,exp:0,maxExp:100,hp:100,maxHp:100,attack:20}),c=d=>{o.value={...d}},u=()=>{if(!o.value||i.value)return;i.value=!0,s.value=0;const d=setInterval(()=>{const p=Math.floor(Math.random()*l.value.attack)+10;o.value.hp-=p,o.value.hp<=0?(clearInterval(d),i.value=!1,s.value=100,l.value.exp+=o.value.exp,l.value.hp=l.value.maxHp,l.value.exp>=l.value.maxExp&&(l.value.level++,l.value.exp=0,l.value.maxExp=Math.floor(l.value.maxExp*1.5),l.value.attack+=5,l.value.maxHp+=20,l.value.hp=l.value.maxHp),setTimeout(()=>{o.value=null,s.value=0},2e3)):s.value=(o.value.maxHp-o.value.hp)/o.value.maxHp*100},500)};return(d,p)=>(O(),V("div",Nx,[be(tn,{coinCount:n.value},null,8,["coinCount"]),h("main",Mx,[h("div",Ox,[h("div",Vx,[h("button",{class:"backBtn",onClick:p[0]||(p[0]=m=>Bt(e).push("/main"))},"← 뒤로"),p[1]||(p[1]=h("h2",null,"⚔️ 사냥",-1))]),h("div",Lx,[p[6]||(p[6]=h("h3",null,"플레이어 정보",-1)),h("div",Bx,[h("div",Fx,[p[2]||(p[2]=h("span",null,"레벨",-1)),h("span",null,U(l.value.level),1)]),h("div",Ux,[p[3]||(p[3]=h("span",null,"체력",-1)),h("span",null,U(l.value.hp)+"/"+U(l.value.maxHp),1)]),h("div",$x,[p[4]||(p[4]=h("span",null,"공격력",-1)),h("span",null,U(l.value.attack),1)]),h("div",Hx,[p[5]||(p[5]=h("span",null,"경험치",-1)),h("span",null,U(l.value.exp)+"/"+U(l.value.maxExp),1)])])]),h("div",jx,[p[7]||(p[7]=h("h3",null,"몬스터 선택",-1)),h("div",Gx,[(O(!0),V(ke,null,je(r.value,m=>(O(),V("div",{key:m.name,class:De(["monsterCard",{selected:o.value?.name===m.name}]),onClick:_=>c(m)},[h("div",Qx,[h("span",Wx,U(m.name),1),h("span",zx,"Lv."+U(m.level),1)]),h("div",Kx,[h("span",null,"EXP: "+U(m.exp),1),h("span",null,"Gold: "+U(m.gold),1)])],10,qx))),128))])]),o.value?(O(),V("div",Yx,[h("h3",null,U(o.value.name)+" (Lv."+U(o.value.level)+")",1),h("div",Jx,[h("div",Xx,[h("div",{class:"hpFill",style:At({width:o.value.hp/o.value.maxHp*100+"%"})},null,4)]),h("span",Zx,U(o.value.hp)+"/"+U(o.value.maxHp),1)]),h("div",eN,[h("div",tN,[h("div",{class:"progressFill",style:At({width:s.value+"%"})},null,4)]),h("span",nN,U(Math.floor(s.value))+"%",1)]),h("button",{class:De(["huntingBtn",{hunting:i.value}]),onClick:u,disabled:i.value},[i.value?(O(),V("span",rN,"⚔️ 사냥 중...")):(O(),V("span",iN,"⚔️ 사냥 시작"))],10,sN)])):pe("",!0)])]),be(nn)]))}},aN=Tt(oN,[["__scopeId","data-v-9c82efe6"]]),lN={class:"explorationPage"},cN={class:"mainContent"},uN={class:"explorationContainer"},hN={class:"pageHeader"},dN={class:"levelInfo"},fN={class:"locationSelection"},pN={class:"locationList"},gN=["onClick"],mN={class:"locationInfo"},_N={class:"locationHeader"},vN={class:"locationName"},yN={class:"locationLevel"},AN={class:"locationDifficulty"},IN={class:"locationDescription"},wN={class:"locationRewards"},EN={key:0,class:"undiscoveredOverlay"},TN={key:0,class:"currentExploration"},CN={class:"explorationProgress"},bN={class:"progressBar"},SN={class:"progressText"},RN=["disabled"],PN={key:0},kN={key:1},DN={class:"explorationRewards"},xN={class:"rewardsGrid"},NN={class:"rewardIcon"},MN={class:"rewardAmount"},ON={__name:"ExplorationPage",setup(t){const e=en(),n=N(0);Et(()=>{const p=ct();p&&(n.value=p.gameData?.coins||0)});const s=N(1),i=N(0),r=N(!1),o=N(null);N([]);const l=N([{name:"신비한 숲",level:1,difficulty:"쉬움",rewards:["나무","열매","약초"],description:"평화로운 숲에서 기본 자원을 수집할 수 있습니다.",discovered:!0},{name:"고대 유적",level:2,difficulty:"보통",rewards:["고대 유물","마법석","보석"],description:"신비한 힘이 깃든 고대 유적지입니다.",discovered:!1},{name:"용의 동굴",level:3,difficulty:"어려움",rewards:["용의 비늘","마나 크리스탈","희귀 보석"],description:"위험하지만 귀중한 보물이 숨겨진 곳입니다.",discovered:!1},{name:"천공의 섬",level:4,difficulty:"매우 어려움",rewards:["천공석","신비한 에너지","전설의 아이템"],description:"구름 위에 떠있는 신비한 섬입니다.",discovered:!1}]),c=N({wood:0,fruit:0,herb:0,artifact:0,magicStone:0,gem:0,dragonScale:0,manaCrystal:0,rareGem:0,skyStone:0,mysteriousEnergy:0,legendaryItem:0}),u=p=>{p.discovered&&(o.value=p)},d=()=>{if(!o.value||r.value)return;r.value=!0,i.value=0;const p=setInterval(()=>{if(i.value+=5,i.value>=100){clearInterval(p),r.value=!1,i.value=0;const m=Math.floor(Math.random()*o.value.rewards.length),_=o.value.rewards[m],y={나무:"wood",열매:"fruit",약초:"herb","고대 유물":"artifact",마법석:"magicStone",보석:"gem","용의 비늘":"dragonScale","마나 크리스탈":"manaCrystal","희귀 보석":"rareGem",천공석:"skyStone","신비한 에너지":"mysteriousEnergy","전설의 아이템":"legendaryItem"};if(y[_]&&c.value[y[_]]++,Math.random()<.3){const A=l.value.find(C=>!C.discovered);A&&(A.discovered=!0)}s.value++,setTimeout(()=>{o.value=null},2e3)}},300)};return(p,m)=>(O(),V("div",lN,[be(tn,{coinCount:n.value},null,8,["coinCount"]),h("main",cN,[h("div",uN,[h("div",hN,[h("button",{class:"backBtn",onClick:m[0]||(m[0]=_=>Bt(e).push("/main"))},"← 뒤로"),m[1]||(m[1]=h("h2",null,"🗺️ 탐험",-1))]),h("div",dN,[h("span",null,"탐험 레벨: "+U(s.value),1)]),h("div",fN,[m[3]||(m[3]=h("h3",null,"탐험 지역",-1)),h("div",pN,[(O(!0),V(ke,null,je(l.value,_=>(O(),V("div",{key:_.name,class:De(["locationCard",{selected:o.value?.name===_.name,undiscovered:!_.discovered}]),onClick:y=>u(_)},[h("div",mN,[h("div",_N,[h("span",vN,U(_.name),1),h("span",yN,"Lv."+U(_.level),1)]),h("span",AN,U(_.difficulty),1),h("p",IN,U(_.description),1),h("div",wN,[(O(!0),V(ke,null,je(_.rewards,y=>(O(),V("span",{key:y,class:"rewardTag"},U(y),1))),128))])]),_.discovered?pe("",!0):(O(),V("div",EN,[...m[2]||(m[2]=[h("span",null,"🔒 미발견",-1)])]))],10,gN))),128))])]),o.value?(O(),V("div",TN,[h("h3",null,U(o.value.name)+" 탐험 중",1),h("div",CN,[h("div",bN,[h("div",{class:"progressFill",style:At({width:i.value+"%"})},null,4)]),h("span",SN,U(i.value)+"%",1)]),h("button",{class:De(["explorationBtn",{exploring:r.value}]),onClick:d,disabled:r.value},[r.value?(O(),V("span",kN,"🗺️ 탐험 중...")):(O(),V("span",PN,"🗺️ 탐험 시작"))],10,RN)])):pe("",!0),h("div",DN,[m[4]||(m[4]=h("h3",null,"탐험 보상",-1)),h("div",xN,[(O(!0),V(ke,null,je(c.value,(_,y)=>is((O(),V("div",{key:y,class:"rewardItem"},[h("span",NN,U(y==="wood"?"🪵":y==="fruit"?"🍎":y==="herb"?"🌿":y==="artifact"?"🏺":y==="magicStone"||y==="gem"?"💎":y==="dragonScale"?"🐉":y==="manaCrystal"?"🔮":y==="rareGem"?"💠":y==="skyStone"?"☁️":y==="mysteriousEnergy"?"✨":y==="legendaryItem"?"⭐":"🎁"),1),h("span",MN,U(_),1)])),[[sm,_>0]])),128))])])])]),be(nn)]))}},VN=Tt(ON,[["__scopeId","data-v-f05b4431"]]),LN={class:"productionPage"},BN={class:"mainContent"},FN={class:"productionContainer"},UN={class:"pageHeader"},$N={class:"levelInfo"},HN={class:"inventory"},jN={class:"inventoryGrid"},GN={class:"materialIcon"},qN={class:"materialName"},QN={class:"materialAmount"},WN={class:"recipes"},zN={class:"recipeList"},KN=["onClick"],YN={class:"recipeInfo"},JN={class:"recipeHeader"},XN={class:"recipeName"},ZN={class:"recipeLevel"},eM={class:"recipeDescription"},tM={class:"recipeMaterials"},nM={class:"recipeTime"},sM={key:0,class:"currentProduction"},iM={class:"productionProgress"},rM={class:"progressBar"},oM={class:"progressText"},aM=["disabled"],lM={key:0},cM={key:1},uM={class:"producedItems"},hM={class:"itemsGrid"},dM={class:"itemIcon"},fM={class:"itemName"},pM={class:"itemAmount"},gM={__name:"ProductionPage",setup(t){const e=en(),n=N(0);Et(()=>{const _=ct();_&&(n.value=_.gameData?.coins||0)});const s=N(1),i=N(0),r=N(!1),o=N(null),l=N({wood:10,stone:5,iron:3,gold:1,diamond:0,herb:8,fruit:12}),c=N([{id:"woodenSword",name:"나무 검",level:1,materials:{wood:5,stone:2},result:{woodenSword:1},time:30,description:"기본적인 나무 검입니다."},{id:"ironSword",name:"철 검",level:2,materials:{wood:3,iron:5,stone:3},result:{ironSword:1},time:60,description:"강력한 철 검입니다."},{id:"goldenSword",name:"황금 검",level:3,materials:{iron:3,gold:8,diamond:1},result:{goldenSword:1},time:120,description:"매우 강력한 황금 검입니다."},{id:"healthPotion",name:"체력 포션",level:1,materials:{herb:3,fruit:2},result:{healthPotion:1},time:20,description:"체력을 회복시켜주는 포션입니다."},{id:"manaPotion",name:"마나 포션",level:2,materials:{herb:5,fruit:3,stone:1},result:{manaPotion:1},time:40,description:"마나를 회복시켜주는 포션입니다."},{id:"magicRing",name:"마법 반지",level:3,materials:{gold:5,diamond:2,herb:4},result:{magicRing:1},time:90,description:"마법력을 증폭시키는 반지입니다."}]),u=N({woodenSword:0,ironSword:0,goldenSword:0,healthPotion:0,manaPotion:0,magicRing:0}),d=_=>{Object.entries(_.materials).every(([A,C])=>l.value[A]>=C)&&_.level<=s.value&&(o.value=_)},p=()=>{if(!o.value||r.value)return;Object.entries(o.value.materials).forEach(([y,A])=>{l.value[y]-=A}),r.value=!0,i.value=0;const _=setInterval(()=>{i.value+=100/(o.value.time/.1),i.value>=100&&(clearInterval(_),r.value=!1,i.value=0,Object.entries(o.value.result).forEach(([y,A])=>{u.value[y]+=A}),Math.random()<.1&&s.value++,setTimeout(()=>{o.value=null},2e3))},100)},m=_=>Object.entries(_.materials).every(([A,C])=>l.value[A]>=C)&&_.level<=s.value;return(_,y)=>(O(),V("div",LN,[be(tn,{coinCount:n.value},null,8,["coinCount"]),h("main",BN,[h("div",FN,[h("div",UN,[h("button",{class:"backBtn",onClick:y[0]||(y[0]=A=>Bt(e).push("/main"))},"← 뒤로"),y[1]||(y[1]=h("h2",null,"🏭 생산",-1))]),h("div",$N,[h("span",null,"생산 레벨: "+U(s.value),1)]),h("div",HN,[y[2]||(y[2]=h("h3",null,"재료 보유량",-1)),h("div",jN,[(O(!0),V(ke,null,je(l.value,(A,C)=>(O(),V("div",{key:C,class:"inventoryItem"},[h("span",GN,U(C==="wood"?"🪵":C==="stone"?"🪨":C==="iron"?"⚒️":C==="gold"?"🥇":C==="diamond"?"💎":C==="herb"?"🌿":C==="fruit"?"🍎":"📦"),1),h("span",qN,U(C),1),h("span",QN,U(A),1)]))),128))])]),h("div",WN,[y[3]||(y[3]=h("h3",null,"제작 레시피",-1)),h("div",zN,[(O(!0),V(ke,null,je(c.value,A=>(O(),V("div",{key:A.id,class:De(["recipeCard",{selected:o.value?.id===A.id,disabled:!m(A)}]),onClick:C=>d(A)},[h("div",YN,[h("div",JN,[h("span",XN,U(A.name),1),h("span",ZN,"Lv."+U(A.level),1)]),h("p",eM,U(A.description),1),h("div",tM,[(O(!0),V(ke,null,je(A.materials,(C,L)=>(O(),V("span",{key:L,class:"materialTag"},U(L)+" x"+U(C),1))),128))]),h("div",nM,[h("span",null,"⏱️ "+U(A.time)+"초",1)])])],10,KN))),128))])]),o.value?(O(),V("div",sM,[h("h3",null,U(o.value.name)+" 제작 중",1),h("div",iM,[h("div",rM,[h("div",{class:"progressFill",style:At({width:i.value+"%"})},null,4)]),h("span",oM,U(Math.floor(i.value))+"%",1)]),h("button",{class:De(["productionBtn",{producing:r.value}]),onClick:p,disabled:r.value},[r.value?(O(),V("span",cM,"🏭 제작 중...")):(O(),V("span",lM,"🏭 제작 시작"))],10,aM)])):pe("",!0),h("div",uM,[y[4]||(y[4]=h("h3",null,"제작된 아이템",-1)),h("div",hM,[(O(!0),V(ke,null,je(u.value,(A,C)=>is((O(),V("div",{key:C,class:"itemCard"},[h("span",dM,U(C==="woodenSword"?"🗡️":C==="ironSword"?"⚔️":C==="goldenSword"?"🏆":C==="healthPotion"?"🧪":C==="manaPotion"?"💊":C==="magicRing"?"💍":"📦"),1),h("span",fM,U(C),1),h("span",pM,U(A),1)])),[[sm,A>0]])),128))])])])]),be(nn)]))}},mM=Tt(gM,[["__scopeId","data-v-2344037c"]]),_M={class:"exchangePage"},vM={class:"mainContent"},yM={class:"tabs"},AM={class:"infoCard"},IM={class:"infoRow"},wM={class:"value"},EM={class:"infoRow"},TM={class:"value"},CM={class:"infoRow"},bM={class:"value"},SM={class:"inputCard"},RM={class:"inputLabel"},PM={class:"inputWrapper"},kM={key:0,class:"resultInfo"},DM={class:"resultRow"},xM={class:"resultValue"},NM=["disabled"],Jp=1e3,MM={__name:"ExchangePage",setup(t){const e=N(null),n=N(0),s=N(0),i=N("buy"),r=N(""),o=Ze(()=>{if(!r.value)return 0;const u=parseFloat(r.value)||0;return Math.floor(u*Jp)}),l=()=>{const u=ct();u&&(e.value=u,n.value=u.gameData?.coins||0,s.value=u.gameData?.totalCoin||0)},c=()=>{if(!e.value){alert("로그인이 필요합니다.");return}if(!r.value||parseFloat(r.value)<=0){alert("코인 수량을 입력해주세요.");return}const u=parseFloat(r.value),d=u;if(i.value==="buy"){const p=o.value;if(n.value<p){alert(`포인트가 부족합니다.
필요: ${p.toLocaleString()} Point
보유: ${n.value.toLocaleString()} Point`);return}const m=n.value-p,_=s.value+d;La(e.value.id,m,_)?(n.value=m,s.value=_,l(),window.dispatchEvent(new CustomEvent("userDataUpdated")),alert(`구매 완료!
${u} Coin 구매
사용한 Point: ${p.toLocaleString()}`),r.value=""):alert("거래 실패. 다시 시도해주세요.")}else{if(s.value<d){alert(`코인이 부족합니다.
필요: ${u} Coin
보유: ${s.value.toLocaleString()} Coin`);return}const p=o.value,m=n.value+p,_=s.value-d;La(e.value.id,m,_)?(n.value=m,s.value=_,l(),window.dispatchEvent(new CustomEvent("userDataUpdated")),alert(`판매 완료!
${u} Coin 판매
받은 Point: ${p.toLocaleString()}`),r.value=""):alert("거래 실패. 다시 시도해주세요.")}};return as(i,()=>{r.value=""}),Et(()=>{l()}),(u,d)=>(O(),V("div",_M,[be(tn,{coinCount:n.value},null,8,["coinCount"]),h("main",vM,[h("div",yM,[h("button",{class:De(["tab",{active:i.value==="buy"}]),onClick:d[0]||(d[0]=p=>i.value="buy")}," Coin 구매 ",2),h("button",{class:De(["tab",{active:i.value==="sell"}]),onClick:d[1]||(d[1]=p=>i.value="sell")}," Coin 판매 ",2)]),h("div",AM,[h("div",IM,[d[3]||(d[3]=h("span",null,"보유 포인트",-1)),h("span",wM,U(n.value.toLocaleString())+" P",1)]),h("div",EM,[d[4]||(d[4]=h("span",null,"보유 코인",-1)),h("span",TM,U(s.value.toLocaleString())+" C",1)]),h("div",CM,[d[5]||(d[5]=h("span",null,"거래가",-1)),h("span",bM,"1 Coin = "+U(Jp.toLocaleString())+" Point",1)])]),h("div",SM,[h("label",RM,U(i.value==="buy"?"구매할 코인 수량":"판매할 코인 수량"),1),h("div",PM,[is(h("input",{type:"number","onUpdate:modelValue":d[2]||(d[2]=p=>r.value=p),placeholder:"예: 1",class:"amountInput",step:"0.01",min:"0"},null,512),[[oi,r.value]]),d[6]||(d[6]=h("span",{class:"unit"},"Coin",-1))]),r.value&&parseFloat(r.value)>0?(O(),V("div",kM,[h("div",DM,[h("span",null,U(i.value==="buy"?"필요 포인트":"받을 포인트"),1),h("span",xM,U(o.value.toLocaleString())+" P",1)])])):pe("",!0)]),h("button",{class:"submitBtn",onClick:c,disabled:!r.value||parseFloat(r.value)<=0},U(i.value==="buy"?"구매하기":"판매하기"),9,NM)]),be(nn)]))}},OM=Tt(MM,[["__scopeId","data-v-212c7d26"]]),VM={class:"questPage"},LM={class:"mainContent"},BM={class:"filterTabs"},FM={class:"mainTabs"},UM={class:"questList"},$M={class:"questContent"},HM={class:"questInfo"},jM={class:"questTitle"},GM={class:"questDescription"},qM=["onClick"],QM={key:1,class:"completedBadge"},WM={key:2,class:"progressBar"},zM={class:"progressText"},KM={__name:"QuestPage",setup(t){const e=N(0),n=N("inProgress"),s=N("daily"),i=()=>new Date().toDateString(),r=()=>{const p=localStorage.getItem("questLastDate"),m=i();return p!==m?(localStorage.setItem("questLastDate",m),localStorage.removeItem("rewardedQuests"),!0):!1},o=()=>{const p=localStorage.getItem("rewardedQuests");return p?JSON.parse(p):[]},l=p=>{localStorage.setItem("rewardedQuests",JSON.stringify(p)),localStorage.setItem("questLastDate",i())},c=N([{id:1,title:"일일 채굴 10회",description:"오늘 하루 채굴을 10회 완료하세요",completed:!0,rewardReceived:!1,progress:10,total:10,type:"daily"},{id:2,title:"일일 사냥 5회",description:"몬스터를 5마리 처치하세요",completed:!0,rewardReceived:!1,progress:5,total:5,type:"daily"},{id:3,title:"일일 탐험 1회",description:"탐험 활동을 1회 완료하세요",completed:!1,rewardReceived:!1,progress:0,total:1,type:"daily"},{id:4,title:"일일 생산 3개",description:"아이템을 3개 이상 생산하세요",completed:!1,rewardReceived:!1,progress:1,total:3,type:"daily"},{id:5,title:"일일 코인 1,000 획득",description:"코인을 1,000개 이상 획득하세요",completed:!1,rewardReceived:!1,progress:650,total:1e3,type:"daily"},{id:6,title:"일일 레벨업 1회",description:"레벨을 1레벨 이상 올리세요",completed:!1,rewardReceived:!1,progress:.6,total:1,type:"daily"},{id:7,title:"일일 데일리 체크",description:"게임에 접속하여 일일 퀘스트를 확인하세요",completed:!0,rewardReceived:!1,progress:1,total:1,type:"daily"},{id:8,title:"일일 랜덤 상자 수집",description:"랜덤 상자를 2개 이상 수집하세요",completed:!1,rewardReceived:!1,progress:1,total:2,type:"daily"},{id:9,title:"주간 퀘스트: 채굴 마스터",description:"일주일간 채굴을 50회 완료하세요",completed:!1,rewardReceived:!1,progress:23,total:50,type:"weekly"},{id:10,title:"주간 퀘스트: 사냥꾼",description:"일주일 동안 몬스터를 100마리 처치하세요",completed:!1,rewardReceived:!1,progress:45,total:100,type:"weekly"},{id:11,title:"주간 퀘스트: 탐험가",description:"새로운 지역을 5곳 탐험하세요",completed:!0,rewardReceived:!1,progress:5,total:5,type:"weekly"},{id:12,title:"주간 퀘스트: 생산자",description:"아이템을 50개 이상 생산하세요",completed:!1,rewardReceived:!1,progress:28,total:50,type:"weekly"},{id:13,title:"주간 퀘스트: 코인 모으기",description:"코인을 5만개 이상 획득하세요",completed:!1,rewardReceived:!1,progress:32e3,total:5e4,type:"weekly"},{id:14,title:"주간 퀘스트: 레벨업 5",description:"레벨을 5레벨 이상 올리세요",completed:!1,rewardReceived:!1,progress:3,total:5,type:"weekly"},{id:15,title:"주간 퀘스트: 수집가",description:"다양한 보물을 20개 수집하세요",completed:!1,rewardReceived:!1,progress:12,total:20,type:"weekly"},{id:16,title:"주간 퀘스트: 종합 능력",description:"모든 활동을 각각 10회 이상 수행하세요",completed:!1,rewardReceived:!1,progress:35,total:40,type:"weekly"},{id:17,title:"월간 퀘스트: 코인왕",description:"이번 달 코인을 20만 개 이상 획득하세요",completed:!1,rewardReceived:!1,progress:95e3,total:2e5,type:"monthly"},{id:18,title:"월간 퀘스트: 극한 레벨업",description:"레벨을 20레벨 이상 올리세요",completed:!1,rewardReceived:!1,progress:15,total:20,type:"monthly"},{id:19,title:"월간 퀘스트: 완벽한 수집가",description:"보물을 100개 이상 수집하세요",completed:!1,rewardReceived:!1,progress:67,total:100,type:"monthly"},{id:20,title:"월간 퀘스트: 마스터 채굴러",description:"채굴을 500회 이상 완료하세요",completed:!1,rewardReceived:!1,progress:289,total:500,type:"monthly"},{id:21,title:"월간 퀘스트: 용사",description:"몬스터를 500마리 처치하세요",completed:!1,rewardReceived:!1,progress:234,total:500,type:"monthly"},{id:22,title:"월간 퀘스트: 대탐험가",description:"새로운 지역을 20곳 탐험하세요",completed:!1,rewardReceived:!1,progress:14,total:20,type:"monthly"},{id:23,title:"월간 퀘스트: 완벽한 제작자",description:"다양한 아이템을 200개 생산하세요",completed:!1,rewardReceived:!1,progress:123,total:200,type:"monthly"},{id:24,title:"월간 퀘스트: 최고 달성자",description:"이번 달 모든 활동을 완벽하게 수행하세요",completed:!0,rewardReceived:!1,progress:100,total:100,type:"monthly"}]),u=p=>{const m=c.value.find(_=>_.id===p);if(m&&m.completed&&!m.rewardReceived){m.rewardReceived=!0;const _=o();_.includes(p)||(_.push(p),l(_)),alert("보상 받기 완료!")}},d=Ze(()=>{let p=c.value.filter(m=>m.type===s.value);return n.value==="inProgress"?p=p.filter(m=>!m.completed||m.completed&&!m.rewardReceived):n.value==="completed"&&(p=p.filter(m=>m.completed&&m.rewardReceived)),p.sort((m,_)=>m.completed&&!m.rewardReceived&&(_.rewardReceived||!_.completed)?-1:(m.rewardReceived||!m.completed)&&_.completed&&!_.rewardReceived?1:0)});return Et(()=>{const p=ct();p&&(e.value=p.gameData?.coins||0),r();const m=o();c.value.forEach(_=>{m.includes(_.id)&&(_.rewardReceived=!0)})}),(p,m)=>(O(),V("div",VM,[be(tn,{coinCount:e.value},null,8,["coinCount"]),h("main",LM,[h("div",BM,[h("button",{class:De(["filterTab",{active:s.value==="daily"}]),onClick:m[0]||(m[0]=_=>s.value="daily")}," Daily ",2),h("button",{class:De(["filterTab",{active:s.value==="weekly"}]),onClick:m[1]||(m[1]=_=>s.value="weekly")}," Weekly ",2),h("button",{class:De(["filterTab",{active:s.value==="monthly"}]),onClick:m[2]||(m[2]=_=>s.value="monthly")}," Monthly ",2)]),h("div",FM,[h("button",{class:De(["mainTab",{active:n.value==="inProgress"}]),onClick:m[3]||(m[3]=_=>n.value="inProgress")}," 진행중 ",2),h("button",{class:De(["mainTab",{active:n.value==="completed"}]),onClick:m[4]||(m[4]=_=>n.value="completed")}," 완료 ",2)]),h("div",UM,[(O(!0),V(ke,null,je(d.value,_=>(O(),V("div",{key:_.id,class:"questCard"},[h("div",$M,[h("div",HM,[h("h3",jM,U(_.title),1),h("p",GM,U(_.description),1)]),m[5]||(m[5]=h("div",{class:"questCharacter"},[h("div",{class:"characterImg"},"🐱")],-1))]),_.completed&&!_.rewardReceived?(O(),V("button",{key:0,class:"rewardBtn",onClick:y=>u(_.id)}," 보상받기 ",8,qM)):_.completed&&_.rewardReceived?(O(),V("div",QM," ✓ 완료됨 ")):(O(),V("div",WM,[h("div",{class:"progressFill",style:At({width:_.progress/_.total*100+"%"})},null,4),h("span",zM,U(_.progress)+"/"+U(_.total),1)]))]))),128))])]),be(nn)]))}},YM=Tt(KM,[["__scopeId","data-v-dc582bb7"]]),JM="/tdl/assets/statStar1-DSWl6DZx.png",XM="/tdl/assets/statStar2-7A5sNtwf.png",ZM={class:"inventoryPage"},eO={class:"mainContent"},tO={class:"topSection"},nO={class:"magicPanel"},sO={class:"panelTitle"},iO={class:"characterBox"},rO=["src"],oO={class:"profilePanel"},aO={class:"progressBars"},lO={class:"statLabel"},cO={class:"barBg"},uO={class:"value"},hO={class:"inventoryGrid"},dO=["onClick"],fO={key:0,class:"newBadge"},pO={class:"starBadge"},gO=["src"],mO={class:"levelBadge"},_O=["src"],vO={__name:"InventoryPage",setup(t){const e=N(0),n=_=>[{name:"근력",value:_[0],progress:_[0],color:"#FF6B6B"},{name:"체력",value:_[1],progress:_[1],color:"#FF8A80"},{name:"지능",value:_[2],progress:_[2],color:"#9C27B0"},{name:"손재주",value:_[3],progress:_[3],color:"#FFA726"},{name:"용기",value:_[4],progress:_[4],color:"#00BCD4"},{name:"행운",value:_[5],progress:_[5],color:"#66BB6A"}],s=()=>Math.floor(Math.random()*3)+1,i=()=>Math.floor(Math.random()*10)+1,r=[{id:1,name:"Robot",selected:!0,stars:s(),level:i(),stats:n([33,7,29,10,11,10]),imageId:1,isNew:!1},{id:2,name:"Style",selected:!1,stars:s(),level:i(),stats:n([15,25,35,45,20,30]),imageId:2,isNew:!1},{id:3,name:"Suit",selected:!1,stars:s(),level:i(),stats:n([25,20,40,30,25,15]),imageId:3,isNew:!1},{id:4,name:"Tech",selected:!1,stars:s(),level:i(),stats:n([20,15,50,40,10,25]),imageId:4,isNew:!1},{id:5,name:"Army",selected:!1,stars:s(),level:i(),stats:n([45,40,15,20,50,10]),imageId:5,isNew:!1},{id:6,name:"Detective",selected:!1,stars:s(),level:i(),stats:n([20,25,45,30,35,25]),imageId:6,isNew:!1},{id:7,name:"Scholar",selected:!1,stars:s(),level:i(),stats:n([10,15,60,25,20,30]),imageId:7,isNew:!1},{id:8,name:"White",selected:!1,stars:s(),level:i(),stats:n([30,30,30,30,30,30]),imageId:8,isNew:!1},{id:9,name:"Green",selected:!1,stars:s(),level:i(),stats:n([25,35,20,25,30,35]),imageId:9,isNew:!1},{id:10,name:"Blue",selected:!1,stars:s(),level:i(),stats:n([20,30,35,30,25,30]),imageId:10,isNew:!1},{id:11,name:"Red",selected:!1,stars:s(),level:i(),stats:n([40,25,20,25,45,15]),imageId:11,isNew:!1},{id:12,name:"Shirt",selected:!1,stars:s(),level:i(),stats:n([22,28,32,28,22,28]),imageId:12,isNew:!1},{id:13,name:"Ninja",selected:!1,stars:s(),level:i(),stats:n([35,25,30,50,40,20]),imageId:13,isNew:!1},{id:14,name:"Knight",selected:!1,stars:s(),level:i(),stats:n([50,45,20,25,45,15]),imageId:14,isNew:!1},{id:15,name:"Pirate",selected:!1,stars:s(),level:i(),stats:n([40,35,25,35,50,25]),imageId:15,isNew:!1},{id:16,name:"Sailor",selected:!1,stars:s(),level:i(),stats:n([30,40,25,30,35,30]),imageId:16,isNew:!1},{id:17,name:"Sport",selected:!1,stars:s(),level:i(),stats:n([45,50,15,40,30,20]),imageId:17,isNew:!1},{id:18,name:"Cafe",selected:!1,stars:s(),level:i(),stats:n([20,25,30,45,25,35]),imageId:18,isNew:!1},{id:19,name:"Chef",selected:!1,stars:s(),level:i(),stats:n([25,30,25,50,20,30]),imageId:19,isNew:!1},{id:20,name:"Fisher",selected:!1,stars:s(),level:i(),stats:n([30,35,20,40,30,25]),imageId:20,isNew:!1},{id:21,name:"Farmer",selected:!1,stars:s(),level:i(),stats:n([40,45,20,35,25,30]),imageId:21,isNew:!1},{id:22,name:"Doctor",selected:!1,stars:s(),level:i(),stats:n([15,30,55,35,25,30]),imageId:22,isNew:!1},{id:23,name:"Teacher",selected:!1,stars:s(),level:i(),stats:n([20,25,50,30,30,25]),imageId:23,isNew:!1},{id:24,name:"Artist",selected:!1,stars:s(),level:i(),stats:n([15,20,40,55,25,35]),imageId:24,isNew:!1}],o=N([...r]),l=Ze(()=>{const _=o.value.find(y=>y.selected);return _&&_.stats?_.stats:n([33,7,29,10,11,10])}),c=Ze(()=>{const _=o.value.find(y=>y.selected);return _?_.name:"Magic"}),u=_=>{try{return new URL(Object.assign({"../assets/img/cat1.png":ah,"../assets/img/cat10.png":lh,"../assets/img/cat11.png":ch,"../assets/img/cat12.png":uh,"../assets/img/cat13.png":hh,"../assets/img/cat14.png":dh,"../assets/img/cat15.png":fh,"../assets/img/cat16.png":ph,"../assets/img/cat17.png":gh,"../assets/img/cat18.png":mh,"../assets/img/cat19.png":_h,"../assets/img/cat2.png":vh,"../assets/img/cat20.png":yh,"../assets/img/cat21.png":Ah,"../assets/img/cat22.png":Ih,"../assets/img/cat23.png":wh,"../assets/img/cat24.png":Eh,"../assets/img/cat25.png":Th,"../assets/img/cat26.png":Ch,"../assets/img/cat27.png":bh,"../assets/img/cat28.png":Sh,"../assets/img/cat29.png":Rh,"../assets/img/cat3.png":Ph,"../assets/img/cat30.png":kh,"../assets/img/cat4.png":Dh,"../assets/img/cat5.png":xh,"../assets/img/cat6.png":Nh,"../assets/img/cat7.png":Mh,"../assets/img/cat8.png":Oh,"../assets/img/cat9.png":Vh,"../assets/img/catProfile01.png":Lh,"../assets/img/catProfile02.png":Bh,"../assets/img/cat_ico.png":Fh})[`../assets/img/cat${_}.png`],import.meta.url).href}catch{return`/src/assets/img/cat${_}.png`}},d=Ze(()=>{const _=o.value.find(y=>y.selected);return u(_?_.imageId||_.id:1)}),p=Ze(()=>{const _=o.value.filter(A=>A.isNew),y=o.value.filter(A=>!A.isNew);return[..._,...y]}),m=_=>{if(o.value.forEach(y=>y.selected=!1),_.selected=!0,_.isNew){_.isNew=!1;const y=ct();if(y){const A=o.value.map(C=>({...C,isNew:C.id===_.id?!1:C.isNew}));Yt(y.id,{inventory:A})}}};return Et(()=>{const _=ct();if(_){e.value=_.gameData?.coins||0;const y=_.gameData?.inventory;if(y&&y.length>0){const A=[...r];y.forEach(C=>{const L=A.findIndex(Q=>Q.id===C.id);L>-1?A[L]={...A[L],...C}:A.push({...C,stats:n([Math.floor(Math.random()*40)+10,Math.floor(Math.random()*40)+10,Math.floor(Math.random()*40)+10,Math.floor(Math.random()*40)+10,Math.floor(Math.random()*40)+10,Math.floor(Math.random()*40)+10])})}),o.value=A}}}),(_,y)=>(O(),V("div",ZM,[be(tn,{coinCount:e.value},null,8,["coinCount"]),h("main",eO,[h("div",tO,[h("div",nO,[h("div",sO,U(c.value),1),h("div",iO,[h("img",{src:d.value,alt:"선택된 캐릭터",class:"selectedCharacter"},null,8,rO)])]),h("div",oO,[y[0]||(y[0]=h("div",{class:"panelTitle"},"Profile",-1)),h("div",aO,[(O(!0),V(ke,null,je(l.value,(A,C)=>(O(),V("div",{key:C,class:"progressBar"},[h("div",lO,U(A.name),1),h("div",cO,[h("div",{style:At({width:A.progress+"%",backgroundColor:A.color}),class:"barFill"},null,4)]),h("span",uO,U(A.value)+"%",1)]))),128))])])]),h("div",hO,[(O(!0),V(ke,null,je(p.value,A=>(O(),V("div",{key:A.id,class:De(["inventoryItem",{selected:A.selected}]),onClick:C=>m(A)},[A.isNew?(O(),V("div",fO,"NEW")):pe("",!0),h("div",pO,[(O(),V(ke,null,je(5,C=>h("img",{key:C,src:C<=A.stars?Bt(JM):Bt(XM),alt:"별",class:"starIcon"},null,8,gO)),64))]),h("div",mO," Lv "+U(String(A.level).padStart(2,"0")),1),h("img",{src:u(A.imageId||A.id),alt:"고양이",class:"itemIcon"},null,8,_O)],10,dO))),128))])]),be(nn)]))}},yO=Tt(vO,[["__scopeId","data-v-8b8f967c"]]),AO="/tdl/assets/factory_cat-DD06P-8u.png",IO="/tdl/assets/factory_under_line-BMeQefpa.png",wO="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAAJCAYAAABE6JQbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgB7drRDYIwFAXQuoEjMIIjyEZuYNzATRgBN9ANYJPaKh8EwX5Xz0leaMjj+94AIczEGJs0fb4GAKB6xWyfFob4NigBAFC3YrYvFqISAAB1K2X7bjr0aZqV58c0lwAA1OYctrO9zQUgh/8xAAD/4lZ6A/BIcwoAQG2uaQ4r98c07eu08Z3gnmYfAIDq5Ayfsvz7/32LEiD8AaByixLwGf6zxVwCOuEPAL9hKgHdMvyfsGrpYuWe8x8AAAAASUVORK5CYII=",EO={class:"factoryPage"},TO={class:"mainContent"},CO={class:"materialsSection"},bO={class:"materialText"},SO={class:"materialCount"},RO={class:"materialText"},PO={class:"materialCount"},kO=["disabled"],DO={class:"popupCatImage"},xO=["src"],NO={__name:"FactoryPage",setup(t){const e=N(0),n=N(50),s=N(100),i=N(3),r=N(!1),o=N(1);Et(()=>{const y=ct();y&&(e.value=y.gameData?.totalCoin||0,n.value=50)});const l=()=>{if(e.value<s.value){alert(`코인이 부족합니다. (필요: ${s.value})`);return}if(n.value<i.value){alert(`고양이 파편이 부족합니다. (필요: ${i.value})`);return}const y=ct();if(y){e.value-=s.value,n.value-=i.value,o.value=p();const A=(y.gameData?.catCount||0)+1,C=y.gameData?.inventory||[],L={id:Date.now(),imageId:o.value,name:`Cat ${o.value}`,stars:Math.floor(Math.random()*3)+2,level:1,selected:!1,isNew:!0};C.unshift(L),Yt(y.id,{totalCoin:e.value,catFragments:n.value,catCount:A,inventory:C}),window.dispatchEvent(new CustomEvent("userDataUpdated")),r.value=!0}},c=Ze(()=>e.value>=s.value&&n.value>=i.value),u=Ze(()=>e.value>=s.value),d=Ze(()=>n.value>=i.value),p=()=>Math.floor(Math.random()*30)+1,m=y=>{try{return new URL(Object.assign({"../assets/img/cat1.png":ah,"../assets/img/cat10.png":lh,"../assets/img/cat11.png":ch,"../assets/img/cat12.png":uh,"../assets/img/cat13.png":hh,"../assets/img/cat14.png":dh,"../assets/img/cat15.png":fh,"../assets/img/cat16.png":ph,"../assets/img/cat17.png":gh,"../assets/img/cat18.png":mh,"../assets/img/cat19.png":_h,"../assets/img/cat2.png":vh,"../assets/img/cat20.png":yh,"../assets/img/cat21.png":Ah,"../assets/img/cat22.png":Ih,"../assets/img/cat23.png":wh,"../assets/img/cat24.png":Eh,"../assets/img/cat25.png":Th,"../assets/img/cat26.png":Ch,"../assets/img/cat27.png":bh,"../assets/img/cat28.png":Sh,"../assets/img/cat29.png":Rh,"../assets/img/cat3.png":Ph,"../assets/img/cat30.png":kh,"../assets/img/cat4.png":Dh,"../assets/img/cat5.png":xh,"../assets/img/cat6.png":Nh,"../assets/img/cat7.png":Mh,"../assets/img/cat8.png":Oh,"../assets/img/cat9.png":Vh,"../assets/img/catProfile01.png":Lh,"../assets/img/catProfile02.png":Bh,"../assets/img/cat_ico.png":Fh})[`../assets/img/cat${y}.png`],import.meta.url).href}catch{return`/src/assets/img/cat${y}.png`}},_=()=>{r.value=!1};return(y,A)=>(O(),V("div",EO,[be(tn,{catCount:n.value},null,8,["catCount"]),h("main",TO,[A[4]||(A[4]=y0('<h1 class="pageTitle" data-v-3da76d7e>고양이 제작하기</h1><div class="catSilhouette" data-v-3da76d7e><div class="catCircle" data-v-3da76d7e><img src="'+AO+'" alt="고양이" class="catShape" data-v-3da76d7e></div></div><div class="factoryUnderLine" data-v-3da76d7e><img src="'+IO+'" alt="" class="factoryLine" data-v-3da76d7e></div><div class="divider" data-v-3da76d7e><div class="dividerLine" data-v-3da76d7e><img src="'+wO+'" alt="" class="dividerLineImg" data-v-3da76d7e></div></div>',4)),h("div",CO,[h("div",{class:De(["materialItem",{insufficient:!u.value}])},[A[1]||(A[1]=h("img",{src:uy,alt:"코인",class:"materialIcon"},null,-1)),h("span",bO,[h("span",SO,U(e.value),1),Jr(" / "+U(s.value)+" Coin ",1)])],2),A[3]||(A[3]=h("div",{class:"plusSign"},"+",-1)),h("div",{class:De(["materialItem",{insufficient:!d.value}])},[A[2]||(A[2]=h("img",{src:fy,alt:"고양이",class:"materialIcon"},null,-1)),h("span",RO,[h("span",PO,U(n.value),1),Jr(" / "+U(i.value)+" 고양이 파편 ",1)])],2)]),h("button",{class:De(["createButton",{disabled:!c.value}]),onClick:l,disabled:!c.value}," 데려 오기 ",10,kO)]),be(nn),r.value?(O(),V("div",{key:0,class:"popupOverlay",onClick:_},[h("div",{class:"popupContent",onClick:A[0]||(A[0]=Br(()=>{},["stop"]))},[h("div",DO,[h("img",{src:m(o.value),alt:"고양이"},null,8,xO)]),A[5]||(A[5]=h("h2",{class:"popupTitle"},"고양이 데려오기 성공!",-1)),A[6]||(A[6]=h("p",{class:"popupMessage"},"새로운 고양이가 인벤토리에 추가되었습니다!",-1)),h("button",{class:"popupCloseBtn",onClick:_},"확인")])])):pe("",!0)]))}},MO=Tt(NO,[["__scopeId","data-v-3da76d7e"]]),OO={class:"settingsPage"},VO={class:"mainContent"},LO={class:"settingGroup"},BO={class:"settingGroup"},FO={class:"settingLabel"},UO={class:"settingInputWrapper"},$O={key:0,class:"dropdownMenu"},HO=["onClick"],jO={class:"settingGroup"},GO={class:"settingLabel"},qO={class:"settingInputWrapper"},QO={key:0,class:"dropdownMenu"},WO=["onClick"],zO={class:"settingSection"},KO={class:"sectionTitle"},YO={class:"settingToggle"},JO={class:"toggleLabel"},XO={class:"settingToggle"},ZO={class:"toggleLabel"},eV={class:"settingGroup"},tV={class:"settingGroup"},nV={__name:"SettingsPage",setup(t){const e=en(),n=N(0),s=N(null),i=N("한국어"),r=N("부산"),o=N(!0),l=N(!0),c=N(!1),u=N(!1),d=N(!1);N("");const p=["한국어","English"],m=["부산","서울","대구","인천"],_={ko:{language:"언어",region:"지역",soundSettings:"소리 설정",soundToggle:"소리 토글",viToggle:"Vi 토글",userID:"User ID",copySuccess:"User ID가 복사되었습니다!",english:"English"},en:{language:"Language",region:"Region",soundSettings:"Sound Settings",soundToggle:"Sound Toggle",viToggle:"Vibration Toggle",userID:"User ID",copySuccess:"User ID copied!",english:"English"}},y=Ze(()=>i.value==="한국어"?_.ko:_.en),A=Q=>{i.value=Q,c.value=!1,localStorage.setItem("appLanguage",Q)},C=()=>{o.value=!o.value,localStorage.setItem("soundEnabled",o.value.toString()),window.dispatchEvent(new CustomEvent("soundSettingChanged",{detail:{enabled:o.value}}))};Et(()=>{const Q=ct();Q&&(s.value=Q,n.value=Q.gameData?.coins||0);const j=localStorage.getItem("appLanguage");j&&(i.value=j);const $=localStorage.getItem("soundEnabled");$!==null?o.value=$==="true":localStorage.setItem("soundEnabled","true"),L()});const L=()=>{if(!s.value)return;const Q=new Date().toDateString(),j=localStorage.getItem(`checkIn_${s.value.id}`);d.value=j===Q};return(Q,j)=>(O(),V("div",OO,[be(tn,{coinCount:n.value},null,8,["coinCount"]),h("main",VO,[h("div",LO,[h("button",{class:"userProfileBtn",onClick:j[0]||(j[0]=$=>Bt(e).push("/profile"))},[...j[6]||(j[6]=[h("span",{class:"userProfileIcon"},"👤",-1),h("span",null,"사용자 설정",-1),h("span",{class:"arrowIcon"},"→",-1)])])]),h("div",BO,[h("label",FO,U(i.value==="한국어"?"언어":"Language"),1),h("div",UO,[h("div",{class:"settingInput",onClick:j[1]||(j[1]=$=>c.value=!c.value)},[h("span",null,U(i.value),1),j[7]||(j[7]=h("span",{class:"dropdownIcon"},"▼",-1))]),c.value?(O(),V("div",$O,[(O(),V(ke,null,je(p,$=>h("div",{key:$,class:De(["dropdownItem",{active:i.value===$}]),onClick:oe=>A($)},U($),11,HO)),64))])):pe("",!0)])]),h("div",jO,[h("label",GO,U(y.value.region),1),h("div",qO,[h("div",{class:"settingInput",onClick:j[2]||(j[2]=$=>u.value=!u.value)},[h("span",null,U(r.value),1),j[8]||(j[8]=h("span",{class:"dropdownIcon"},"▼",-1))]),u.value?(O(),V("div",QO,[(O(),V(ke,null,je(m,$=>h("div",{key:$,class:De(["dropdownItem",{active:r.value===$}]),onClick:oe=>{r.value=$,u.value=!1}},U($),11,WO)),64))])):pe("",!0)])]),h("div",zO,[h("h3",KO,U(y.value.soundSettings),1),h("div",YO,[h("label",JO,U(y.value.soundToggle),1),h("button",{class:De(["toggleSwitch",{active:o.value}]),onClick:C},[...j[9]||(j[9]=[h("div",{class:"toggleHandle"},null,-1)])],2)]),h("div",XO,[h("label",ZO,U(y.value.viToggle),1),h("button",{class:De(["toggleSwitch",{active:l.value}]),onClick:j[3]||(j[3]=$=>l.value=!l.value)},[...j[10]||(j[10]=[h("div",{class:"toggleHandle"},null,-1)])],2)])]),h("div",eV,[j[11]||(j[11]=h("label",{class:"settingLabel"},"출석체크",-1)),h("button",{class:"checkInBtn",onClick:j[4]||(j[4]=$=>Bt(e).push("/attendance"))}," 출석체크 하기 ")]),h("div",tV,[h("button",{class:"nftBtn",onClick:j[5]||(j[5]=$=>Bt(e).push("/nft"))}," NFT ")])]),be(nn)]))}},sV=Tt(nV,[["__scopeId","data-v-739c7d88"]]),iV={class:"profilePage"},rV={class:"mainContent"},oV={class:"profileHeader"},aV={class:"profileImageWrapper"},lV=["src","alt"],cV={key:1,class:"profileImagePlaceholder"},uV={class:"profileInfo"},hV={class:"userName"},dV={class:"userEmail"},fV={class:"settingGroup"},pV={class:"settingLabel"},gV={class:"settingInput"},mV={class:"userId"},_V={key:0,class:"statsSection"},vV={class:"sectionTitle"},yV={class:"statsGrid"},AV={class:"statCard"},IV={class:"statInfo"},wV={class:"statLabel"},EV={class:"statValue"},TV={class:"statCard"},CV={class:"statInfo"},bV={class:"statLabel"},SV={class:"statValue"},RV={class:"statCard"},PV={class:"statInfo"},kV={class:"statLabel"},DV={class:"statValue"},xV={class:"statCard"},NV={class:"statInfo"},MV={class:"statLabel"},OV={class:"statValue"},VV={class:"logoutSection"},LV={__name:"UserProfilePage",setup(t){const e=en(),{logout:n}=ym(),s=N(0),i=N(null),r=N("한국어"),o=N(""),l=N(""),c=N(""),u=N(""),d=N(!1),p={ko:{userProfile:"사용자 프로필",userID:"User ID",copySuccess:"User ID가 복사되었습니다!",logout:"로그아웃",logoutConfirm:"정말 로그아웃 하시겠습니까?",gameStats:"게임 통계",level:"레벨",points:"포인트",coins:"코인",catFragments:"고양이 파편",back:"← 뒤로"},en:{userProfile:"User Profile",userID:"User ID",copySuccess:"User ID copied!",logout:"Logout",logoutConfirm:"Are you sure you want to logout?",gameStats:"Game Stats",level:"Level",points:"Points",coins:"Coins",catFragments:"Cat Fragments",back:"← Back"}},m=Ze(()=>r.value==="한국어"?p.ko:p.en);Et(()=>{const C=ct();C?(i.value=C,s.value=C.gameData?.coins||0,C.uid||C.email?(d.value=!0,o.value=C.email||"",l.value=C.displayName||C.name||o.value.split("@")[0],c.value=C.photoURL||"",u.value=C.uid||C.id||""):(o.value=C.email||C.id||"",l.value=C.name||o.value.split("@")[0]||"User",u.value=C.id||"ID"+String(Math.random()).substring(2,10))):e.push("/login");const L=localStorage.getItem("appLanguage");L&&(r.value=L)});const _=()=>{navigator.clipboard.writeText(u.value),alert(m.value.copySuccess)},y=async()=>{if(confirm(m.value.logoutConfirm))try{if(d.value){const C=await cy();C.success||console.error("Firebase 로그아웃 실패:",C.error)}Yp(),n(),e.push("/login")}catch(C){console.error("로그아웃 오류:",C),Yp(),n(),e.push("/login")}},A=Ze(()=>i.value?{level:i.value.gameData?.level||1,points:i.value.gameData?.coins||0,coins:i.value.gameData?.totalCoin||0,catFragments:i.value.gameData?.catFragments||i.value.gameData?.catCount||0}:null);return(C,L)=>(O(),V("div",iV,[be(tn,{coinCount:s.value},null,8,["coinCount"]),h("main",rV,[h("button",{class:"backBtn",onClick:L[0]||(L[0]=Q=>Bt(e).push("/settings"))},U(m.value.back),1),h("div",oV,[h("div",aV,[c.value?(O(),V("img",{key:0,src:c.value,alt:l.value,class:"profileImage"},null,8,lV)):(O(),V("div",cV,U(l.value.charAt(0).toUpperCase()),1))]),h("div",uV,[h("h2",hV,U(l.value),1),h("p",dV,U(o.value),1)])]),h("div",fV,[h("label",pV,U(m.value.userID),1),h("div",gV,[h("span",mV,U(u.value),1),h("button",{class:"copyBtn",onClick:_},"📋")])]),A.value?(O(),V("div",_V,[h("h3",vV,U(m.value.gameStats),1),h("div",yV,[h("div",AV,[L[1]||(L[1]=h("div",{class:"statIcon"},"⭐",-1)),h("div",IV,[h("div",wV,U(m.value.level),1),h("div",EV,U(A.value.level),1)])]),h("div",TV,[L[2]||(L[2]=h("div",{class:"statIcon"},"💰",-1)),h("div",CV,[h("div",bV,U(m.value.points),1),h("div",SV,U(A.value.points.toLocaleString()),1)])]),h("div",RV,[L[3]||(L[3]=h("div",{class:"statIcon"},"🪙",-1)),h("div",PV,[h("div",kV,U(m.value.coins),1),h("div",DV,U(A.value.coins.toLocaleString()),1)])]),h("div",xV,[L[4]||(L[4]=h("div",{class:"statIcon"},"🐱",-1)),h("div",NV,[h("div",MV,U(m.value.catFragments),1),h("div",OV,U(A.value.catFragments.toLocaleString()),1)])])])])):pe("",!0),h("div",VV,[h("button",{class:"logoutBtn",onClick:y},U(m.value.logout),1)])]),be(nn)]))}},BV=Tt(LV,[["__scopeId","data-v-737deece"]]),FV={class:"attendancePage"},UV={class:"mainContent"},$V={key:0,class:"attendanceMessage"},HV={class:"attendanceGrid"},jV=["onClick"],GV={class:"dayNumber"},qV={class:"rewardIcon"},QV={key:0,class:"specialStar"},WV={class:"rewardAmount"},zV={__name:"AttendancePage",setup(t){const e=en(),n=N(0),s=N(null),i=N(0),r=N([]),o=N(Array.from({length:20},(m,_)=>({day:_+1,reward:"1K",rewardType:"P",hasSpecial:[5,9,10,11,16,17].includes(_+1),isChecked:!1}))),l=()=>{e.go(-1)},c=m=>{if(!s.value){alert("로그인이 필요합니다.");return}const _=new Date().toDateString();if(localStorage.getItem(`attendance_checkIn_${s.value.id}`)===_){alert("오늘 이미 출석체크를 완료했습니다! 내일 다시 시도해주세요.");return}const A=o.value[m];if(A.isChecked){alert("이미 체크된 날짜입니다.");return}if(r.value.length===0||m===r.value.length){A.isChecked=!0,r.value.push(A.day);const C=1e3;n.value+=C,localStorage.setItem(`attendance_checkIn_${s.value.id}`,_),p.value=!0,s.value&&J2(s.value.id,n.value),u(),alert(`Day ${A.day} 출석체크 완료! ${C} 포인트 획득!`)}else alert("연속 출석체크만 가능합니다.")},u=()=>{if(s.value){const m={checkedDays:r.value,attendanceDays:r.value.length,lastUpdate:new Date().toISOString()};localStorage.setItem(`attendance_${s.value.id}`,JSON.stringify(m))}},d=()=>{if(s.value){const m=localStorage.getItem(`attendance_${s.value.id}`);if(m){const _=JSON.parse(m);r.value=_.checkedDays||[],i.value=_.attendanceDays||0,r.value.forEach(y=>{const A=y-1;o.value[A]&&(o.value[A].isChecked=!0)})}}},p=N(!1);return Et(()=>{if(s.value=ct(),s.value){n.value=s.value.gameData?.coins||0;const m=new Date().toDateString(),_=localStorage.getItem(`attendance_checkIn_${s.value.id}`);p.value=_===m}d()}),(m,_)=>(O(),V("div",FV,[be(tn,{coinCount:n.value},null,8,["coinCount"]),h("main",UV,[h("button",{class:"backBtn",onClick:l},"← 뒤로"),_[1]||(_[1]=h("h1",{class:"pageTitle"},"출석체크",-1)),p.value?(O(),V("div",$V," 오늘 출석체크를 완료했습니다! 내일 다시 시도해주세요. ")):pe("",!0),h("div",HV,[(O(!0),V(ke,null,je(o.value,(y,A)=>(O(),V("div",{key:y.day,class:De(["dayCell",{checked:y.isChecked,disabled:p.value&&!y.isChecked}]),onClick:C=>!p.value||y.isChecked?c(A):null},[h("div",GV,"Day "+U(y.day),1),h("div",qV,[_[0]||(_[0]=h("div",{class:"iconCircle"},"P",-1)),y.hasSpecial&&!y.isChecked?(O(),V("span",QV,"⭐")):pe("",!0)]),h("div",WV,U(y.reward),1)],10,jV))),128))])]),be(nn)]))}},KV=Tt(zV,[["__scopeId","data-v-41a53f6b"]]),YV="/tdl/assets/btc-DC8WHF5v.png",JV="/tdl/assets/eth-DHgp7Wvq.png",XV="/tdl/assets/BTC_line-DiGuGbEI.png",ZV="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAACJCAYAAABaWIDDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA85SURBVHgB7d1fchPHFsfxMybJw61KhbuCTN5yqRDbK0BeAXgFmBXErACxguAVYFZgswLEClBibnLf7rCCKDhVqSJGndPqNghibHXPjKZ75vupUqQYy/yxpf5Nd5/ThQAAMBBGtq7r3ZbIfFPvS5GidPeiHzfX3f2yotL/zPxNHxu9bfxkHxcynUrGCgEAoKf8gD/SAf+WDnl39COlNKqwIaDSrzvNLRgQAAAAveIHfTvY39WbXu1/fFW/DsVEFrMGZuKDwSy1YEAAAAD0gg78I73Sv60P96STQf9KMz9jsBwM7IxBJR0gAAAAsuYGfvNAbyPJkw8Gxi8nLILBVIPBTFpEAAAAZEkHfp3eNz9mPPBfpdVgQAAAAGTFrfHPx/rwBxmmRoIBAQAAkA0jN+/o0PVY0lzj71pQMHgXAHyi2tcP2dpI/mHXa+ZqS+19P+pLAaBJXPXXshQMNg7ONx0uAoAmqj19qOsoDPwJqfw37Fi/YU/b3gwCAKnSwb/Uwf+ZuIY9qMdecN4r5OS48P+w/xckrjjU2xMNAhMBgIFoacr/vKvfxHX6szOwb1/p/W8if/5eSDVzv/d/vtZf/7fIta/edwy0fQUWj7ckX/r3O9vRALCp/7BmT5CLSm/jQn5+IgDQY0a+12Vp+VGaUbkZVdHb6U/ng3wdGk5uiQsmI1kEgsK3Gc6BmWgA+F4TD1P/+Sn0h7i431UDCQBok45NY717IPXY6e5DvT/WKe/nsgZGSh1PvzzfSzcSFwxKSW/5YmYDgBHk7KHOBowFAHqigcFfB/75I5E/Dpq40m/C+2BQbPnzCLbc4+4uwG0AsOv/pSBndmfnLrMBAHJXc/BPbuC/SofBYGoDgP2HHgtyV2kI2CEEAMhVvTV/u6Hvr3uF/K+SHlhDMNgvfG3lM8l7RyMct7NTfqGHAICsuLa+8xcSzl71jwt5eSAD0FAwmOrS8bbvA2BDwFtNXcWeIHeEAABZqVHnX+n73S7vdyHBwOgSyelDu0RSXPwFsEbXfelI6etLR1J/isd2FNxmOQBADoxsPos40EcH/dc7uaz1d8XIjS3Xx8D6sPyRswAS5GtL93wYKCVOxZ4AAKmL2/RnS/tO7zP410MASJxv02xfHKWEm/oQwIsEQHLiOtGaw0JO7glq2xAkTX/QD0Xe7Lh1m2Bbbm8HAKTIHAV9uphjBv/mEAAyYMta9If+vv7w74prBRzy7D0/xQYAyXCzmyak+qzSaX8G/waxBJAZI9+WIl9E7JY1u/b0JwGABAQ2oavsTGhfavxTwQxAZtwLwC4JBM8EPHbrbQDQLT8rWQY8Zczg3zwCQIaWQkDI5r5FwydCAIAu+feguwHPeMTpp+0gAGTKhYD5btizbOKeB266AYAmzfckaOr/9KGgFQSAjBXycqJ39yXMlk6/URkAYO3Cr/7t1D+1/m0hAGROp8YeRZQI7lMZAGD9TEhPkylT/+2iCqAnjNx85jsHhjyLygAAaxHe9MeM9P3puaA1zAD0xrWYHgFUBgBYExPQ7tdMGPzbxwxAj/geAfY4zZDDhCrODADQpvCr/zffUPbXPmYAeoTKAABpCrr6P2TwXw8CQM9QGQAgJe7q3+yt/oy/KPtbEwJAD9WoDNgXAGgUV/+pYg9Aj8VVBsx3/CwCANTC2n/amAHotZjKgI0jKgMANMM8Dvhcrv7XjBmAnqtRGbBdyJQOXACi6IXEyJ4/svozuPpfN2YAes69oEzoGdqlyFsqAwDUYAI2FnP13wUCwAC4bn/zsQQpRlQGAIhh5Oae/ndrxU+v2PnfDZYABkRflDqgF6E7/e+7qgIgLX6vih1k7FHXX7uPFuXSZ9glLL+MtfFK3H6YiqZX7dOLB7vxr1zts+fjQl4SADpAABgYfWHa/QCrJnOPygB0yw/2I310SxY/v8b+f8i+lmUaCoqpfg29bdh2s1NCQXPc1X+x6ua/Stf+d5j+7wYBYGD8pkC7MacMeNrMbwqsBFgTv4nstr5N3fEDfotsIBC9FU+FQFBL4NX/vl5cHAg6QQAYICoDkCod9O10vl2m+kHir/CbUOnb48QeSmNnCQgEqwm9+tflxW8EnSEADJS+UPWqqgjc6b84oWtHgIa5q33bMc6MJE2VXzY41kDwkwaCqeADvulPyOzingaAJ4LOEAAGzMh3+oa7MZYwj/RFG3rWAHChDAb+T6kIBB8ysvk4oOc/V/8JIAAMHJUB6II/IOaBBB0Sk7TZR0sGgwoE/hyRkLJhrv4TQAAAlQFYKz9Y2ANiulzjb9tyILAzBBPpKQ1z+t4xfxHwFK7+E0EAAJUBWAt/1f84w+n+Jsw+WjKYSA/4wd++d4SEOa7+E0EAwIKRG/pC/iz0hVxRGYBV+N3hdoq4z1f9Ic4DwcQvGUwkM3GDv235exLamhwtIQDgncASnvNnURmAS+mUv90v8oO0o3INfRYDanXxpyx6COit8F0DU/XBHoKJJCwy0On36M02TX/SQQDAB6gMQFNcTf9iyv+ONGPmBvvi2N2f6lR6FTT7ZKTUP9OXm/asC7cUYe9TtQgEtlvheXOizmfafJ+GsUQFOpr+pIYAgH/QdH+oPxp3JQyVAXjHDxR2ejhwc+mFX22iP4+HIq+fhg74K311uXlrKRAkPEvQbSDwnRntDGEpwYxeJJxwkZAYAgD+If7Nm8oARDWEuYgObnMNlH8ctDHoX8YHgi03c5F0IHi3h0D/Z9JWIGigV0Ol4W173d9HXI0AgAtRGYAYPjzakrBS4nQ28H/KUiAY+SWDHAJBrfMM/Pfxrj+HYSTxKg77SRcBAJ9EZQBC1J/2N4e6rn8/9StF/7q4lUcgeHfAUXVZcyL3vbPft/mmH/SbmPmoGPzTRgDApagMwKqMbB5FbvirbEdA/Zl5LhlygeCaHTBv+yWDUpK1qJSY+dt1dzP+vlEVg3/6CAC4EpUBuEp8qZ+dsj7d7dP6cF6BoBUVg38eCABYCZUB+BQd/MfiWvsGmo8LeflQes7tp/l8pA99tUGfA0H/Al2fEQCwEioDcJEag/9ga8I/CgT29RS5ZyI11PnnhgCAlVEZgGURJ8B5b3W9/7/0gvd8INjUh3cyDQRTkbN7hfwyFWSFAIAgVAbA0iUhO1gdSTAG/6v4boU6OyAjv2SQaiCY+WUcrvozRQBAMCoDhi3yBDgZypp/0xIMBMn1akAcAgCiUBkwTPFd/hj8m/L+PAO7ZGDDwNrOM9Ap/vkxA39/EAAQjcqAYWHwT1PLBxxV+jV10JfjXPs04NMIAIhGZcBwxA/+nP/ehaUDjuwMQSmrvUbtVX3lD1/Sq/2/dNnu11eC3iIAoJbIyoBKlw92qAzIQ40Wv1Od7dkWJMHNFPyrFLn21fuPvv1df+U3kT9/Z1p/eAgAqI3KgH6LbPFbcQIckLYNAWpy9b8mdHNfqVcfgZUEWDfX4jdm8LetYBn8gZQRANAIXec9tJu9JEhxx3eSQ4L89ya0v39FH3ggDywBoFFUBvRDZItfveJ/s83gD+SBAIBGxW8YO9umlWga4lv88j0EcsISABrlNvW92ZXFVHCIz45cqRm65Fr8xvb3Z/AHckIAQOPcFPCZDQEhm8BKO3PgZhDQBdfit4jYmGkb/dDfH8gNAQCtoDIgL77Rjz3ch/7+wEAQANAaKgPyQItfYJjYBIjWURmQLlr8AsNFAEDrIisDZiJnO2wsa098xQZHOwN9wBIAWhdZGXCdyoC2GbvfIri/v8jprgDIHgEAa1GjMuCIyoDm1Wjxu0uLX6AfCABYGz+dH7ppTK9Q30bUpeNTaPELwCIAYK3cxr7gyoA9KgOaUaPFL4M/0DNsAkQnjNw8siV/EmZPAwQNZyJFtvhlMybQUwQAdMLvQH8hYeVnDEaRXIvf4kiC2Ra/dPkD+oglAHTCVwbYUrIq4GlUBkSo0eJ3n8Ef6C8CADqzVBkQoqQyYHU1W/weCIDeIgCgU346P/TMACoDVkCLXwCXIQCgc1QGNK9ei18Gf2AI2ASIZFAZ0Axa/AJYBTMASMg1e7hMJWEeGbkR2s6252jxC+BqBAAkg8qA+mjxC2BVBAAkxVUGzEOPmS2pDKDFL4AwBAAkp5CXE6EyIAgtfgGEIgAgSa4ywDwKfNYgKwN8i9+Iwf+MwR8YMKoAkDQjN5/pj+lIwgymMoAWvwBiMQOAxF2zO9MrCTOIygBa/AKogwCApC1VBoTsUO99ZQAtfgHURQBA8nxlAGcGeLT4BdAEAgCyQGWAU6PF7yMGfwDL2ASIrBi5qQN6sR/4tIeF/DyWzNVo8XtcyAld/gB8gBkAZEUHsvu2Z72EeWDk+7uSvegWv6GNlQAMAAEAGRpeZQAtfgE0jQCA7AytMoAWvwDaQABAloZSGRDZ4rdi8AdwFQIAstX3yoAaLX53GfwBXIUAgKz19cwA1+JXIoKKuVfIL1MBgCtQBohe6NOZAa7F76LcL7TL3z5d/gCsihkA9EQ/KgNo8QtgXZgBQG8Y+bYU+eKFhA2e/ljc7qfNafELYJ2YAUBvRFYG2PLAZ37NvTM6+I/0z27DSylBaPELIA4BAL0SWRmgIaA46mpjoNvtH7Pmv2jxG/p3BYAFlgDQS5FnBliV5mJdEphW0jI35W/b+5qRhNMli9c7dPkDEIsAgN6KrAzwikO9PWwjCPhDfWw4sd39YpoSVTT6AVAXAQC95QfaiHX1ZYsgcKBBoPYmQb/Of1sf7kncwG9VDP4AmkAAQK/5yoCInfX/UOntWJcHnur91J1HcNXvvWg5bGv6R/pSuxU51f/Rn4HBH0AzCADovQZDwJLCzgjYEFDp71AtfbwUd3WvA78ppTkVgz+AJhEAMAjthIC1qRj8ATSNMkAMghs87RHCZiJ5mTL4A2gDAQCDYQfRQk52bOc8yYI95Og1gz+AVrAEgEEy8t1I8+9jSXNJYOZO9Ts5FgBoCTMAGCTXMXBjO73ZgMVV/zcM/gDaxgwABs9tEPz8gb4c9qQzi70JYx34nwsArAEBAPA6CAJ2qt9e6R8y8ANYNwIA8BEfBEb68G58K+FLf4eJfl0d+F8/oZc/gK4QAIBLGCmvi3x5Sx+OfBjYknBT/Up6KyY66D9l0AeQAgIAEMjIDQ0B177yXf/KCz6l0s/SQf5sWsivrwQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA0PwNkHeXO5vHqaMAAAAASUVORK5CYII=",e4="/tdl/assets/catProfile01-gY0Djz81.png",t4="/tdl/assets/catProfile02-Cesbpkj5.png",n4="/tdl/assets/eth_ico-CaIyIapE.png",s4={class:"nftPage"},i4={class:"mainContent nftWrap"},r4={class:"walletSection"},o4={class:"walletBalance"},a4={class:"btcInfo"},l4={class:"change positive"},c4={class:"tabMenu"},u4={key:0,class:"itemList"},h4={class:"itemIcon"},d4={class:"itemInfo"},f4={class:"itemSymbol"},p4={class:"itemName"},g4={class:"itemChart"},m4={class:"itemPrice"},_4={class:"price"},v4={key:1,class:"nftList"},y4={class:"nftThumbnail"},A4={class:"nftInfo"},I4={class:"nftId"},w4={class:"collectionName"},E4={class:"nftValue"},T4={class:"ethAmount"},C4=["src"],b4={class:"usdValue positive"},S4={__name:"NFTPage",setup(t){const e=N(0),n=N("tokens"),s=N("$ 5,323.00"),i=N("0.00335"),r=N("+6.54%"),o=N(!1),l=N(!1),c=N(!1),u=ct();u&&(e.value=u.gameData?.coins||0);const d=j=>{n.value=j},p=()=>{o.value=!0},m=()=>{o.value=!1},_=()=>{l.value=!0},y=()=>{l.value=!1},A=()=>{c.value=!0},C=()=>{c.value=!1},L=N([{id:1,name:"Bitcoin",symbol:"BTC",price:"36,590.00",change:"+6.21%",isPositive:!0,image:YV,lineImage:XV},{id:2,name:"Ethereum",symbol:"ETH",price:"2,590.00",change:"+5.21%",isPositive:!0,image:JV,lineImage:ZV}]),Q=N([{id:1,nftId:"#1957",collectionName:"Bored Ape Yacht Club",ethAmount:"64",usdValue:"23,114.57",image:e4},{id:2,nftId:"#6513",collectionName:"Bored Ape Yacht Club",ethAmount:"199.8",usdValue:"45,114.57",image:t4}]);return(j,$)=>(O(),V("div",s4,[be(tn,{coinCount:e.value},null,8,["coinCount"]),h("main",i4,[h("div",r4,[$[5]||($[5]=h("div",{class:"walletLabel"},"Current Wallet Balance",-1)),h("div",o4,U(s.value),1),h("div",a4,[h("span",null,"BTC : "+U(i.value),1),h("span",l4,U(r.value),1)])]),h("div",{class:"actionButtons"},[h("button",{class:"actionBtn sendBtn",onClick:_},[...$[6]||($[6]=[h("div",{class:"btnIcon"},null,-1),h("span",{class:"btnLabel"},"Send",-1)])]),h("button",{class:"actionBtn buyBtn",onClick:p},[...$[7]||($[7]=[h("div",{class:"btnIcon"},null,-1),h("span",{class:"btnLabel"},"Buy",-1)])]),h("button",{class:"actionBtn receiveBtn",onClick:A},[...$[8]||($[8]=[h("div",{class:"btnIcon"},null,-1),h("span",{class:"btnLabel"},"Receive",-1)])])]),h("div",c4,[h("button",{class:De(["tab",{active:n.value==="tokens"}]),onClick:$[0]||($[0]=oe=>d("tokens"))}," Tokens ",2),h("button",{class:De(["tab",{active:n.value==="nfts"}]),onClick:$[1]||($[1]=oe=>d("nfts"))}," NFTs ",2)]),n.value==="tokens"?(O(),V("div",u4,[(O(!0),V(ke,null,je(L.value,oe=>(O(),V("div",{key:oe.id,class:"item"},[h("div",h4,[h("div",{class:"iconCircle",style:At({backgroundImage:`url(${oe.image})`})},null,4)]),h("div",d4,[h("div",f4,U(oe.symbol),1),h("div",p4,U(oe.name),1)]),h("div",g4,[h("div",{class:"chartLine",style:At({backgroundImage:`url(${oe.lineImage})`})},null,4)]),h("div",m4,[h("div",_4,"$"+U(oe.price),1),h("div",{class:De(["change",{positive:oe.isPositive,negative:!oe.isPositive}])},U(oe.change),3)])]))),128))])):pe("",!0),n.value==="nfts"?(O(),V("div",v4,[(O(!0),V(ke,null,je(Q.value,oe=>(O(),V("div",{key:oe.id,class:"nftItem"},[h("div",y4,[h("div",{class:"thumbnailPlaceholder",style:At({backgroundImage:`url(${oe.image})`})},null,4)]),h("div",A4,[h("div",I4,U(oe.nftId),1),h("div",w4,U(oe.collectionName),1)]),h("div",E4,[h("div",T4,[h("img",{src:Bt(n4),alt:"ETH",class:"ethIcon"},null,8,C4),h("span",null,U(oe.ethAmount),1)]),h("div",b4,[$[9]||($[9]=h("span",{class:"arrowUp"},"↑",-1)),h("span",null,"$ "+U(oe.usdValue),1)])])]))),128))])):pe("",!0)]),be(nn),o.value?(O(),V("div",{key:0,class:"popupOverlay",onClick:m},[h("div",{class:"popupContent",onClick:$[2]||($[2]=Br(()=>{},["stop"]))},[h("div",{class:"popupHeader"},[$[10]||($[10]=h("h2",{class:"popupTitle"},"구매하기",-1)),h("button",{class:"closeBtn",onClick:m},"×")]),h("div",{class:"popupBody"},[$[11]||($[11]=h("p",{class:"popupMessage"},"구매해주세요",-1)),h("div",{class:"popupActions"},[h("button",{class:"popupBtn cancelBtn",onClick:m},"취소"),h("button",{class:"popupBtn confirmBtn",onClick:m},"확인")])])])])):pe("",!0),l.value?(O(),V("div",{key:1,class:"popupOverlay",onClick:y},[h("div",{class:"popupContent",onClick:$[3]||($[3]=Br(()=>{},["stop"]))},[h("div",{class:"popupHeader"},[$[12]||($[12]=h("h2",{class:"popupTitle"},"전송하기",-1)),h("button",{class:"closeBtn",onClick:y},"×")]),h("div",{class:"popupBody"},[$[13]||($[13]=h("p",{class:"popupMessage"},"전송해주세요",-1)),h("div",{class:"popupActions"},[h("button",{class:"popupBtn cancelBtn",onClick:y},"취소"),h("button",{class:"popupBtn confirmBtn",onClick:y},"확인")])])])])):pe("",!0),c.value?(O(),V("div",{key:2,class:"popupOverlay",onClick:C},[h("div",{class:"popupContent",onClick:$[4]||($[4]=Br(()=>{},["stop"]))},[h("div",{class:"popupHeader"},[$[14]||($[14]=h("h2",{class:"popupTitle"},"받기",-1)),h("button",{class:"closeBtn",onClick:C},"×")]),h("div",{class:"popupBody"},[$[15]||($[15]=h("p",{class:"popupMessage"},"받아주세요",-1)),h("div",{class:"popupActions"},[h("button",{class:"popupBtn cancelBtn",onClick:C},"취소"),h("button",{class:"popupBtn confirmBtn",onClick:C},"확인")])])])])):pe("",!0)]))}},R4=Tt(S4,[["__scopeId","data-v-7f13a3bd"]]),P4={class:"notificationPage"},k4={class:"mainContent"},D4={class:"pageHeader"},x4={class:"notificationList"},N4=["onClick"],M4={class:"notificationContent"},O4={class:"notificationTitle"},V4={class:"notificationMessage"},L4={class:"notificationTime"},B4={key:0,class:"unreadDot"},F4={key:0,class:"emptyState"},U4={__name:"NotificationPage",setup(t){const e=en(),n=N(0),s=N([{id:1,title:"새로운 퀘스트가 도착했습니다!",message:"일일 퀘스트를 완료하고 보상을 받아보세요.",time:"5분 전",read:!1,type:"quest"},{id:2,title:"Coin 구매 완료",message:"1억 Coin 구매가 완료되었습니다.",time:"1시간 전",read:!1,type:"exchange"},{id:3,title:"고양이 제작 완료",message:"새로운 고양이가 인벤토리에 추가되었습니다!",time:"2시간 전",read:!0,type:"factory"},{id:4,title:"출석체크 보상",message:"출석체크를 완료하여 100 Point를 받았습니다.",time:"1일 전",read:!0,type:"attendance"}]);Et(()=>{const c=ct();c&&(n.value=c.gameData?.coins||0)});const i=c=>{c.read||(c.read=!0)},r=()=>{s.value.forEach(c=>{c.read=!0})},o=Ze(()=>s.value.filter(c=>!c.read).length),l=c=>{switch(i(c),c.type){case"quest":e.push("/quest");break;case"exchange":e.push("/exchange");break;case"factory":e.push("/factory");break;case"attendance":e.push("/attendance");break}};return(c,u)=>(O(),V("div",P4,[be(tn,{coinCount:n.value},null,8,["coinCount"]),h("main",k4,[h("div",D4,[u[0]||(u[0]=h("h1",{class:"pageTitle"},"알림",-1)),o.value>0?(O(),V("button",{key:0,class:"markAllReadBtn",onClick:r}," 모두 읽음 ")):pe("",!0)]),h("div",x4,[(O(!0),V(ke,null,je(s.value,d=>(O(),V("div",{key:d.id,class:De(["notificationItem",{unread:!d.read}]),onClick:p=>l(d)},[h("div",M4,[h("div",O4,U(d.title),1),h("div",V4,U(d.message),1),h("div",L4,U(d.time),1)]),d.read?pe("",!0):(O(),V("div",B4))],10,N4))),128)),s.value.length===0?(O(),V("div",F4,[...u[1]||(u[1]=[h("p",null,"알림이 없습니다.",-1)])])):pe("",!0)])]),be(nn)]))}},$4=Tt(U4,[["__scopeId","data-v-1cfef43b"]]),H4={class:"shopPage"},j4={class:"mainContent"},G4={class:"itemList"},q4={class:"itemInfo"},Q4={class:"itemName"},W4={class:"itemDescription"},z4={class:"itemPrice"},K4={class:"priceValue"},Y4={class:"priceCurrency"},J4={key:0,src:hy,alt:"P",class:"currencyIcon"},X4={key:1,src:dy,alt:"C",class:"currencyIcon"},Z4=["disabled","onClick"],eL={__name:"ShopPage",setup(t){const e=N(0),n=N(0),s=N([{id:1,name:"에너지 100",description:"에너지를 100 회복합니다",price:100,currency:"point",amount:100},{id:2,name:"에너지 500",description:"에너지를 500 회복합니다",price:450,currency:"point",amount:500},{id:3,name:"에너지 1000",description:"에너지를 1000 회복합니다",price:800,currency:"point",amount:1e3},{id:4,name:"에너지 2000",description:"에너지를 2000 회복합니다",price:1500,currency:"point",amount:2e3}]),i=()=>{const o=ct();o&&(e.value=o.gameData?.coins||0,n.value=o.gameData?.totalCoin||0)},r=o=>{const l=ct();if(!l){alert("로그인이 필요합니다.");return}if(o.currency==="point"&&e.value<o.price){alert("포인트가 부족합니다.");return}if(o.currency==="coin"&&n.value<o.price){alert("코인이 부족합니다.");return}if(o.currency==="point"){const p=e.value-o.price;La(l.email,p,n.value)}else{const p=n.value-o.price;La(l.email,e.value,p)}const c=4e3,u=parseInt(localStorage.getItem("currentEnergy")||c.toString()),d=Math.min(u+o.amount,c);localStorage.setItem("currentEnergy",d.toString()),localStorage.setItem("energyLastDate",new Date().toDateString()),alert(`${o.name} 구매 완료! 에너지가 ${o.amount} 회복되었습니다. (현재: ${d}/${c})`),i(),window.dispatchEvent(new Event("userDataUpdated"))};return Et(()=>{i()}),(o,l)=>(O(),V("div",H4,[be(tn,{coinCount:e.value},null,8,["coinCount"]),h("main",j4,[h("div",G4,[(O(!0),V(ke,null,je(s.value,c=>(O(),V("div",{key:c.id,class:"shopItem"},[h("div",q4,[h("h3",Q4,U(c.name),1),h("p",W4,U(c.description),1)]),h("div",z4,[h("span",K4,U(c.price.toLocaleString()),1),h("span",Y4,[c.currency==="point"?(O(),V("img",J4)):(O(),V("img",X4))])]),h("button",{class:"buyBtn",disabled:c.currency==="point"&&e.value<c.price||c.currency==="coin"&&n.value<c.price,onClick:u=>r(c)}," 구매 ",8,Z4)]))),128))])]),be(nn)]))}},tL=Tt(eL,[["__scopeId","data-v-463496d7"]]),nL=[{path:"/",redirect:"/loading"},{path:"/loading",component:ww},{path:"/login",component:w2},{path:"/signup",component:L2},{path:"/main",component:fx},{path:"/mining",component:xx},{path:"/hunting",component:aN},{path:"/exploration",component:VN},{path:"/production",component:mM},{path:"/exchange",component:OM},{path:"/quest",component:YM},{path:"/inventory",component:yO},{path:"/factory",component:MO},{path:"/settings",component:sV},{path:"/profile",component:BV},{path:"/attendance",component:KV},{path:"/nft",component:R4},{path:"/notification",component:$4},{path:"/shop",component:tL}],sL=pw({history:QI(),routes:nL}),gy=rI(gw);gy.use(sL);gy.mount("#app");
