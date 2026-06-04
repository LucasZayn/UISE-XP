var fp=e=>{throw TypeError(e)};var Vl=(e,t,n)=>t.has(e)||fp("Cannot "+n);var N=(e,t,n)=>(Vl(e,t,"read from private field"),n?n.call(e):t.get(e)),J=(e,t,n)=>t.has(e)?fp("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),H=(e,t,n,r)=>(Vl(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),De=(e,t,n)=>(Vl(e,t,"access private method"),n);var ks=(e,t,n,r)=>({set _(i){H(e,t,i,n)},get _(){return N(e,t,r)}});function Aw(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Og(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ig={exports:{}},il={},zg={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ss=Symbol.for("react.element"),Mw=Symbol.for("react.portal"),Dw=Symbol.for("react.fragment"),Lw=Symbol.for("react.strict_mode"),Ow=Symbol.for("react.profiler"),Iw=Symbol.for("react.provider"),zw=Symbol.for("react.context"),Fw=Symbol.for("react.forward_ref"),_w=Symbol.for("react.suspense"),Vw=Symbol.for("react.memo"),Bw=Symbol.for("react.lazy"),pp=Symbol.iterator;function $w(e){return e===null||typeof e!="object"?null:(e=pp&&e[pp]||e["@@iterator"],typeof e=="function"?e:null)}var Fg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_g=Object.assign,Vg={};function _i(e,t,n){this.props=e,this.context=t,this.refs=Vg,this.updater=n||Fg}_i.prototype.isReactComponent={};_i.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};_i.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Bg(){}Bg.prototype=_i.prototype;function md(e,t,n){this.props=e,this.context=t,this.refs=Vg,this.updater=n||Fg}var gd=md.prototype=new Bg;gd.constructor=md;_g(gd,_i.prototype);gd.isPureReactComponent=!0;var hp=Array.isArray,$g=Object.prototype.hasOwnProperty,xd={current:null},Ug={key:!0,ref:!0,__self:!0,__source:!0};function Wg(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)$g.call(t,r)&&!Ug.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ss,type:e,key:o,ref:s,props:i,_owner:xd.current}}function Uw(e,t){return{$$typeof:ss,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function vd(e){return typeof e=="object"&&e!==null&&e.$$typeof===ss}function Ww(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var mp=/\/+/g;function Bl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ww(""+e.key):t.toString(36)}function Zs(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ss:case Mw:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Bl(s,0):r,hp(i)?(n="",e!=null&&(n=e.replace(mp,"$&/")+"/"),Zs(i,t,n,"",function(u){return u})):i!=null&&(vd(i)&&(i=Uw(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(mp,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",hp(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Bl(o,a);s+=Zs(o,t,n,l,i)}else if(l=$w(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Bl(o,a++),s+=Zs(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Cs(e,t,n){if(e==null)return e;var r=[],i=0;return Zs(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Hw(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ke={current:null},Js={transition:null},Gw={ReactCurrentDispatcher:Ke,ReactCurrentBatchConfig:Js,ReactCurrentOwner:xd};function Hg(){throw Error("act(...) is not supported in production builds of React.")}Q.Children={map:Cs,forEach:function(e,t,n){Cs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Cs(e,function(){t++}),t},toArray:function(e){return Cs(e,function(t){return t})||[]},only:function(e){if(!vd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=_i;Q.Fragment=Dw;Q.Profiler=Ow;Q.PureComponent=md;Q.StrictMode=Lw;Q.Suspense=_w;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gw;Q.act=Hg;Q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=_g({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=xd.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)$g.call(t,l)&&!Ug.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ss,type:e.type,key:i,ref:o,props:r,_owner:s}};Q.createContext=function(e){return e={$$typeof:zw,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Iw,_context:e},e.Consumer=e};Q.createElement=Wg;Q.createFactory=function(e){var t=Wg.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:Fw,render:e}};Q.isValidElement=vd;Q.lazy=function(e){return{$$typeof:Bw,_payload:{_status:-1,_result:e},_init:Hw}};Q.memo=function(e,t){return{$$typeof:Vw,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=Js.transition;Js.transition={};try{e()}finally{Js.transition=t}};Q.unstable_act=Hg;Q.useCallback=function(e,t){return Ke.current.useCallback(e,t)};Q.useContext=function(e){return Ke.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return Ke.current.useDeferredValue(e)};Q.useEffect=function(e,t){return Ke.current.useEffect(e,t)};Q.useId=function(){return Ke.current.useId()};Q.useImperativeHandle=function(e,t,n){return Ke.current.useImperativeHandle(e,t,n)};Q.useInsertionEffect=function(e,t){return Ke.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return Ke.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return Ke.current.useMemo(e,t)};Q.useReducer=function(e,t,n){return Ke.current.useReducer(e,t,n)};Q.useRef=function(e){return Ke.current.useRef(e)};Q.useState=function(e){return Ke.current.useState(e)};Q.useSyncExternalStore=function(e,t,n){return Ke.current.useSyncExternalStore(e,t,n)};Q.useTransition=function(){return Ke.current.useTransition()};Q.version="18.3.1";zg.exports=Q;var w=zg.exports;const D=Og(w),Gg=Aw({__proto__:null,default:D},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kw=w,Yw=Symbol.for("react.element"),qw=Symbol.for("react.fragment"),Qw=Object.prototype.hasOwnProperty,Xw=Kw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zw={key:!0,ref:!0,__self:!0,__source:!0};function Kg(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Qw.call(t,r)&&!Zw.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Yw,type:e,key:o,ref:s,props:i,_owner:Xw.current}}il.Fragment=qw;il.jsx=Kg;il.jsxs=Kg;Ig.exports=il;var c=Ig.exports,Yg={exports:{}},ct={},qg={exports:{}},Qg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,R){var z=P.length;P.push(R);e:for(;0<z;){var U=z-1>>>1,B=P[U];if(0<i(B,R))P[U]=R,P[z]=B,z=U;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var R=P[0],z=P.pop();if(z!==R){P[0]=z;e:for(var U=0,B=P.length,q=B>>>1;U<q;){var X=2*(U+1)-1,ve=P[X],Me=X+1,ee=P[Me];if(0>i(ve,z))Me<B&&0>i(ee,ve)?(P[U]=ee,P[Me]=z,U=Me):(P[U]=ve,P[X]=z,U=X);else if(Me<B&&0>i(ee,z))P[U]=ee,P[Me]=z,U=Me;else break e}}return R}function i(P,R){var z=P.sortIndex-R.sortIndex;return z!==0?z:P.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,f=null,p=3,h=!1,b=!1,m=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(P){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=P)r(u),R.sortIndex=R.expirationTime,t(l,R);else break;R=n(u)}}function S(P){if(m=!1,v(P),!b)if(n(l)!==null)b=!0,$(k);else{var R=n(u);R!==null&&V(S,R.startTime-P)}}function k(P,R){b=!1,m&&(m=!1,g(j),j=-1),h=!0;var z=p;try{for(v(R),f=n(l);f!==null&&(!(f.expirationTime>R)||P&&!L());){var U=f.callback;if(typeof U=="function"){f.callback=null,p=f.priorityLevel;var B=U(f.expirationTime<=R);R=e.unstable_now(),typeof B=="function"?f.callback=B:f===n(l)&&r(l),v(R)}else r(l);f=n(l)}if(f!==null)var q=!0;else{var X=n(u);X!==null&&V(S,X.startTime-R),q=!1}return q}finally{f=null,p=z,h=!1}}var C=!1,E=null,j=-1,T=5,A=-1;function L(){return!(e.unstable_now()-A<T)}function O(){if(E!==null){var P=e.unstable_now();A=P;var R=!0;try{R=E(!0,P)}finally{R?K():(C=!1,E=null)}}else C=!1}var K;if(typeof x=="function")K=function(){x(O)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,Y=I.port2;I.port1.onmessage=O,K=function(){Y.postMessage(null)}}else K=function(){y(O,0)};function $(P){E=P,C||(C=!0,K())}function V(P,R){j=y(function(){P(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){b||h||(b=!0,$(k))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(P){switch(p){case 1:case 2:case 3:var R=3;break;default:R=p}var z=p;p=R;try{return P()}finally{p=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,R){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var z=p;p=P;try{return R()}finally{p=z}},e.unstable_scheduleCallback=function(P,R,z){var U=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?U+z:U):z=U,P){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=z+B,P={id:d++,callback:R,priorityLevel:P,startTime:z,expirationTime:B,sortIndex:-1},z>U?(P.sortIndex=z,t(u,P),n(l)===null&&P===n(u)&&(m?(g(j),j=-1):m=!0,V(S,z-U))):(P.sortIndex=B,t(l,P),b||h||(b=!0,$(k))),P},e.unstable_shouldYield=L,e.unstable_wrapCallback=function(P){var R=p;return function(){var z=p;p=R;try{return P.apply(this,arguments)}finally{p=z}}}})(Qg);qg.exports=Qg;var Jw=qg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eb=w,lt=Jw;function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xg=new Set,Ro={};function Fr(e,t){Pi(e,t),Pi(e+"Capture",t)}function Pi(e,t){for(Ro[e]=t,e=0;e<t.length;e++)Xg.add(t[e])}var dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fc=Object.prototype.hasOwnProperty,tb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gp={},xp={};function nb(e){return Fc.call(xp,e)?!0:Fc.call(gp,e)?!1:tb.test(e)?xp[e]=!0:(gp[e]=!0,!1)}function rb(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ib(e,t,n,r){if(t===null||typeof t>"u"||rb(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ye(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ae[e]=new Ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ae[t]=new Ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ae[e]=new Ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ae[e]=new Ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ae[e]=new Ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ae[e]=new Ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ae[e]=new Ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ae[e]=new Ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ae[e]=new Ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var yd=/[\-:]([a-z])/g;function wd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(yd,wd);Ae[t]=new Ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(yd,wd);Ae[t]=new Ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(yd,wd);Ae[t]=new Ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ae[e]=new Ye(e,1,!1,e.toLowerCase(),null,!1,!1)});Ae.xlinkHref=new Ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ae[e]=new Ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function bd(e,t,n,r){var i=Ae.hasOwnProperty(t)?Ae[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ib(t,n,i,r)&&(n=null),r||i===null?nb(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var vn=eb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Es=Symbol.for("react.element"),qr=Symbol.for("react.portal"),Qr=Symbol.for("react.fragment"),Sd=Symbol.for("react.strict_mode"),_c=Symbol.for("react.profiler"),Zg=Symbol.for("react.provider"),Jg=Symbol.for("react.context"),kd=Symbol.for("react.forward_ref"),Vc=Symbol.for("react.suspense"),Bc=Symbol.for("react.suspense_list"),Cd=Symbol.for("react.memo"),Rn=Symbol.for("react.lazy"),e0=Symbol.for("react.offscreen"),vp=Symbol.iterator;function Xi(e){return e===null||typeof e!="object"?null:(e=vp&&e[vp]||e["@@iterator"],typeof e=="function"?e:null)}var he=Object.assign,$l;function lo(e){if($l===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);$l=t&&t[1]||""}return`
`+$l+e}var Ul=!1;function Wl(e,t){if(!e||Ul)return"";Ul=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Ul=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?lo(e):""}function ob(e){switch(e.tag){case 5:return lo(e.type);case 16:return lo("Lazy");case 13:return lo("Suspense");case 19:return lo("SuspenseList");case 0:case 2:case 15:return e=Wl(e.type,!1),e;case 11:return e=Wl(e.type.render,!1),e;case 1:return e=Wl(e.type,!0),e;default:return""}}function $c(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qr:return"Fragment";case qr:return"Portal";case _c:return"Profiler";case Sd:return"StrictMode";case Vc:return"Suspense";case Bc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Jg:return(e.displayName||"Context")+".Consumer";case Zg:return(e._context.displayName||"Context")+".Provider";case kd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Cd:return t=e.displayName||null,t!==null?t:$c(e.type)||"Memo";case Rn:t=e._payload,e=e._init;try{return $c(e(t))}catch{}}return null}function sb(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $c(t);case 8:return t===Sd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Zn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function t0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ab(e){var t=t0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function js(e){e._valueTracker||(e._valueTracker=ab(e))}function n0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=t0(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function xa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Uc(e,t){var n=t.checked;return he({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function yp(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Zn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function r0(e,t){t=t.checked,t!=null&&bd(e,"checked",t,!1)}function Wc(e,t){r0(e,t);var n=Zn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Hc(e,t.type,n):t.hasOwnProperty("defaultValue")&&Hc(e,t.type,Zn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function wp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Hc(e,t,n){(t!=="number"||xa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var co=Array.isArray;function di(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Zn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Gc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return he({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function bp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(M(92));if(co(n)){if(1<n.length)throw Error(M(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Zn(n)}}function i0(e,t){var n=Zn(t.value),r=Zn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Sp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function o0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?o0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ts,s0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ts=Ts||document.createElement("div"),Ts.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ts.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ao(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var go={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lb=["Webkit","ms","Moz","O"];Object.keys(go).forEach(function(e){lb.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),go[t]=go[e]})});function a0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||go.hasOwnProperty(e)&&go[e]?(""+t).trim():t+"px"}function l0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=a0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var cb=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yc(e,t){if(t){if(cb[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function qc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qc=null;function Ed(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xc=null,fi=null,pi=null;function kp(e){if(e=cs(e)){if(typeof Xc!="function")throw Error(M(280));var t=e.stateNode;t&&(t=cl(t),Xc(e.stateNode,e.type,t))}}function c0(e){fi?pi?pi.push(e):pi=[e]:fi=e}function u0(){if(fi){var e=fi,t=pi;if(pi=fi=null,kp(e),t)for(e=0;e<t.length;e++)kp(t[e])}}function d0(e,t){return e(t)}function f0(){}var Hl=!1;function p0(e,t,n){if(Hl)return e(t,n);Hl=!0;try{return d0(e,t,n)}finally{Hl=!1,(fi!==null||pi!==null)&&(f0(),u0())}}function Mo(e,t){var n=e.stateNode;if(n===null)return null;var r=cl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(M(231,t,typeof n));return n}var Zc=!1;if(dn)try{var Zi={};Object.defineProperty(Zi,"passive",{get:function(){Zc=!0}}),window.addEventListener("test",Zi,Zi),window.removeEventListener("test",Zi,Zi)}catch{Zc=!1}function ub(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var xo=!1,va=null,ya=!1,Jc=null,db={onError:function(e){xo=!0,va=e}};function fb(e,t,n,r,i,o,s,a,l){xo=!1,va=null,ub.apply(db,arguments)}function pb(e,t,n,r,i,o,s,a,l){if(fb.apply(this,arguments),xo){if(xo){var u=va;xo=!1,va=null}else throw Error(M(198));ya||(ya=!0,Jc=u)}}function _r(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Cp(e){if(_r(e)!==e)throw Error(M(188))}function hb(e){var t=e.alternate;if(!t){if(t=_r(e),t===null)throw Error(M(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Cp(i),e;if(o===r)return Cp(i),t;o=o.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?e:t}function m0(e){return e=hb(e),e!==null?g0(e):null}function g0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=g0(e);if(t!==null)return t;e=e.sibling}return null}var x0=lt.unstable_scheduleCallback,Ep=lt.unstable_cancelCallback,mb=lt.unstable_shouldYield,gb=lt.unstable_requestPaint,xe=lt.unstable_now,xb=lt.unstable_getCurrentPriorityLevel,jd=lt.unstable_ImmediatePriority,v0=lt.unstable_UserBlockingPriority,wa=lt.unstable_NormalPriority,vb=lt.unstable_LowPriority,y0=lt.unstable_IdlePriority,ol=null,Yt=null;function yb(e){if(Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(ol,e,void 0,(e.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:Sb,wb=Math.log,bb=Math.LN2;function Sb(e){return e>>>=0,e===0?32:31-(wb(e)/bb|0)|0}var Ps=64,Ns=4194304;function uo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ba(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=uo(a):(o&=s,o!==0&&(r=uo(o)))}else s=n&~i,s!==0?r=uo(s):o!==0&&(r=uo(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ot(t),i=1<<n,r|=e[n],t&=~i;return r}function kb(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cb(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Ot(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=kb(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function eu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function w0(){var e=Ps;return Ps<<=1,!(Ps&4194240)&&(Ps=64),e}function Gl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function as(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ot(t),e[t]=n}function Eb(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ot(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Td(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ot(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var te=0;function b0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var S0,Pd,k0,C0,E0,tu=!1,Rs=[],Un=null,Wn=null,Hn=null,Do=new Map,Lo=new Map,Mn=[],jb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jp(e,t){switch(e){case"focusin":case"focusout":Un=null;break;case"dragenter":case"dragleave":Wn=null;break;case"mouseover":case"mouseout":Hn=null;break;case"pointerover":case"pointerout":Do.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(t.pointerId)}}function Ji(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=cs(t),t!==null&&Pd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tb(e,t,n,r,i){switch(t){case"focusin":return Un=Ji(Un,e,t,n,r,i),!0;case"dragenter":return Wn=Ji(Wn,e,t,n,r,i),!0;case"mouseover":return Hn=Ji(Hn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Do.set(o,Ji(Do.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Lo.set(o,Ji(Lo.get(o)||null,e,t,n,r,i)),!0}return!1}function j0(e){var t=vr(e.target);if(t!==null){var n=_r(t);if(n!==null){if(t=n.tag,t===13){if(t=h0(n),t!==null){e.blockedOn=t,E0(e.priority,function(){k0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ea(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=nu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Qc=r,n.target.dispatchEvent(r),Qc=null}else return t=cs(n),t!==null&&Pd(t),e.blockedOn=n,!1;t.shift()}return!0}function Tp(e,t,n){ea(e)&&n.delete(t)}function Pb(){tu=!1,Un!==null&&ea(Un)&&(Un=null),Wn!==null&&ea(Wn)&&(Wn=null),Hn!==null&&ea(Hn)&&(Hn=null),Do.forEach(Tp),Lo.forEach(Tp)}function eo(e,t){e.blockedOn===t&&(e.blockedOn=null,tu||(tu=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,Pb)))}function Oo(e){function t(i){return eo(i,e)}if(0<Rs.length){eo(Rs[0],e);for(var n=1;n<Rs.length;n++){var r=Rs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Un!==null&&eo(Un,e),Wn!==null&&eo(Wn,e),Hn!==null&&eo(Hn,e),Do.forEach(t),Lo.forEach(t),n=0;n<Mn.length;n++)r=Mn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Mn.length&&(n=Mn[0],n.blockedOn===null);)j0(n),n.blockedOn===null&&Mn.shift()}var hi=vn.ReactCurrentBatchConfig,Sa=!0;function Nb(e,t,n,r){var i=te,o=hi.transition;hi.transition=null;try{te=1,Nd(e,t,n,r)}finally{te=i,hi.transition=o}}function Rb(e,t,n,r){var i=te,o=hi.transition;hi.transition=null;try{te=4,Nd(e,t,n,r)}finally{te=i,hi.transition=o}}function Nd(e,t,n,r){if(Sa){var i=nu(e,t,n,r);if(i===null)nc(e,t,r,ka,n),jp(e,r);else if(Tb(i,e,t,n,r))r.stopPropagation();else if(jp(e,r),t&4&&-1<jb.indexOf(e)){for(;i!==null;){var o=cs(i);if(o!==null&&S0(o),o=nu(e,t,n,r),o===null&&nc(e,t,r,ka,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else nc(e,t,r,null,n)}}var ka=null;function nu(e,t,n,r){if(ka=null,e=Ed(r),e=vr(e),e!==null)if(t=_r(e),t===null)e=null;else if(n=t.tag,n===13){if(e=h0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ka=e,null}function T0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xb()){case jd:return 1;case v0:return 4;case wa:case vb:return 16;case y0:return 536870912;default:return 16}default:return 16}}var _n=null,Rd=null,ta=null;function P0(){if(ta)return ta;var e,t=Rd,n=t.length,r,i="value"in _n?_n.value:_n.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return ta=i.slice(e,1<r?1-r:void 0)}function na(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function As(){return!0}function Pp(){return!1}function ut(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?As:Pp,this.isPropagationStopped=Pp,this}return he(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=As)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=As)},persist:function(){},isPersistent:As}),t}var Vi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ad=ut(Vi),ls=he({},Vi,{view:0,detail:0}),Ab=ut(ls),Kl,Yl,to,sl=he({},ls,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Md,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==to&&(to&&e.type==="mousemove"?(Kl=e.screenX-to.screenX,Yl=e.screenY-to.screenY):Yl=Kl=0,to=e),Kl)},movementY:function(e){return"movementY"in e?e.movementY:Yl}}),Np=ut(sl),Mb=he({},sl,{dataTransfer:0}),Db=ut(Mb),Lb=he({},ls,{relatedTarget:0}),ql=ut(Lb),Ob=he({},Vi,{animationName:0,elapsedTime:0,pseudoElement:0}),Ib=ut(Ob),zb=he({},Vi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fb=ut(zb),_b=he({},Vi,{data:0}),Rp=ut(_b),Vb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$b={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ub(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$b[e])?!!t[e]:!1}function Md(){return Ub}var Wb=he({},ls,{key:function(e){if(e.key){var t=Vb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=na(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Bb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Md,charCode:function(e){return e.type==="keypress"?na(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?na(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hb=ut(Wb),Gb=he({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ap=ut(Gb),Kb=he({},ls,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Md}),Yb=ut(Kb),qb=he({},Vi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qb=ut(qb),Xb=he({},sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zb=ut(Xb),Jb=[9,13,27,32],Dd=dn&&"CompositionEvent"in window,vo=null;dn&&"documentMode"in document&&(vo=document.documentMode);var e5=dn&&"TextEvent"in window&&!vo,N0=dn&&(!Dd||vo&&8<vo&&11>=vo),Mp=" ",Dp=!1;function R0(e,t){switch(e){case"keyup":return Jb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function A0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xr=!1;function t5(e,t){switch(e){case"compositionend":return A0(t);case"keypress":return t.which!==32?null:(Dp=!0,Mp);case"textInput":return e=t.data,e===Mp&&Dp?null:e;default:return null}}function n5(e,t){if(Xr)return e==="compositionend"||!Dd&&R0(e,t)?(e=P0(),ta=Rd=_n=null,Xr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return N0&&t.locale!=="ko"?null:t.data;default:return null}}var r5={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!r5[e.type]:t==="textarea"}function M0(e,t,n,r){c0(r),t=Ca(t,"onChange"),0<t.length&&(n=new Ad("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var yo=null,Io=null;function i5(e){U0(e,0)}function al(e){var t=ei(e);if(n0(t))return e}function o5(e,t){if(e==="change")return t}var D0=!1;if(dn){var Ql;if(dn){var Xl="oninput"in document;if(!Xl){var Op=document.createElement("div");Op.setAttribute("oninput","return;"),Xl=typeof Op.oninput=="function"}Ql=Xl}else Ql=!1;D0=Ql&&(!document.documentMode||9<document.documentMode)}function Ip(){yo&&(yo.detachEvent("onpropertychange",L0),Io=yo=null)}function L0(e){if(e.propertyName==="value"&&al(Io)){var t=[];M0(t,Io,e,Ed(e)),p0(i5,t)}}function s5(e,t,n){e==="focusin"?(Ip(),yo=t,Io=n,yo.attachEvent("onpropertychange",L0)):e==="focusout"&&Ip()}function a5(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return al(Io)}function l5(e,t){if(e==="click")return al(t)}function c5(e,t){if(e==="input"||e==="change")return al(t)}function u5(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zt=typeof Object.is=="function"?Object.is:u5;function zo(e,t){if(zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Fc.call(t,i)||!zt(e[i],t[i]))return!1}return!0}function zp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fp(e,t){var n=zp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zp(n)}}function O0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?O0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function I0(){for(var e=window,t=xa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xa(e.document)}return t}function Ld(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function d5(e){var t=I0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&O0(n.ownerDocument.documentElement,n)){if(r!==null&&Ld(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Fp(n,o);var s=Fp(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var f5=dn&&"documentMode"in document&&11>=document.documentMode,Zr=null,ru=null,wo=null,iu=!1;function _p(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;iu||Zr==null||Zr!==xa(r)||(r=Zr,"selectionStart"in r&&Ld(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wo&&zo(wo,r)||(wo=r,r=Ca(ru,"onSelect"),0<r.length&&(t=new Ad("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zr)))}function Ms(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Jr={animationend:Ms("Animation","AnimationEnd"),animationiteration:Ms("Animation","AnimationIteration"),animationstart:Ms("Animation","AnimationStart"),transitionend:Ms("Transition","TransitionEnd")},Zl={},z0={};dn&&(z0=document.createElement("div").style,"AnimationEvent"in window||(delete Jr.animationend.animation,delete Jr.animationiteration.animation,delete Jr.animationstart.animation),"TransitionEvent"in window||delete Jr.transitionend.transition);function ll(e){if(Zl[e])return Zl[e];if(!Jr[e])return e;var t=Jr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in z0)return Zl[e]=t[n];return e}var F0=ll("animationend"),_0=ll("animationiteration"),V0=ll("animationstart"),B0=ll("transitionend"),$0=new Map,Vp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(e,t){$0.set(e,t),Fr(t,[e])}for(var Jl=0;Jl<Vp.length;Jl++){var ec=Vp[Jl],p5=ec.toLowerCase(),h5=ec[0].toUpperCase()+ec.slice(1);sr(p5,"on"+h5)}sr(F0,"onAnimationEnd");sr(_0,"onAnimationIteration");sr(V0,"onAnimationStart");sr("dblclick","onDoubleClick");sr("focusin","onFocus");sr("focusout","onBlur");sr(B0,"onTransitionEnd");Pi("onMouseEnter",["mouseout","mouseover"]);Pi("onMouseLeave",["mouseout","mouseover"]);Pi("onPointerEnter",["pointerout","pointerover"]);Pi("onPointerLeave",["pointerout","pointerover"]);Fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),m5=new Set("cancel close invalid load scroll toggle".split(" ").concat(fo));function Bp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,pb(r,t,void 0,e),e.currentTarget=null}function U0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Bp(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Bp(i,a,u),o=l}}}if(ya)throw e=Jc,ya=!1,Jc=null,e}function oe(e,t){var n=t[cu];n===void 0&&(n=t[cu]=new Set);var r=e+"__bubble";n.has(r)||(W0(t,e,2,!1),n.add(r))}function tc(e,t,n){var r=0;t&&(r|=4),W0(n,e,r,t)}var Ds="_reactListening"+Math.random().toString(36).slice(2);function Fo(e){if(!e[Ds]){e[Ds]=!0,Xg.forEach(function(n){n!=="selectionchange"&&(m5.has(n)||tc(n,!1,e),tc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ds]||(t[Ds]=!0,tc("selectionchange",!1,t))}}function W0(e,t,n,r){switch(T0(t)){case 1:var i=Nb;break;case 4:i=Rb;break;default:i=Nd}n=i.bind(null,t,n,e),i=void 0,!Zc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function nc(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=vr(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}p0(function(){var u=o,d=Ed(n),f=[];e:{var p=$0.get(e);if(p!==void 0){var h=Ad,b=e;switch(e){case"keypress":if(na(n)===0)break e;case"keydown":case"keyup":h=Hb;break;case"focusin":b="focus",h=ql;break;case"focusout":b="blur",h=ql;break;case"beforeblur":case"afterblur":h=ql;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Db;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Yb;break;case F0:case _0:case V0:h=Ib;break;case B0:h=Qb;break;case"scroll":h=Ab;break;case"wheel":h=Zb;break;case"copy":case"cut":case"paste":h=Fb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Ap}var m=(t&4)!==0,y=!m&&e==="scroll",g=m?p!==null?p+"Capture":null:p;m=[];for(var x=u,v;x!==null;){v=x;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,g!==null&&(S=Mo(x,g),S!=null&&m.push(_o(x,S,v)))),y)break;x=x.return}0<m.length&&(p=new h(p,b,null,n,d),f.push({event:p,listeners:m}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&n!==Qc&&(b=n.relatedTarget||n.fromElement)&&(vr(b)||b[fn]))break e;if((h||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,h?(b=n.relatedTarget||n.toElement,h=u,b=b?vr(b):null,b!==null&&(y=_r(b),b!==y||b.tag!==5&&b.tag!==6)&&(b=null)):(h=null,b=u),h!==b)){if(m=Np,S="onMouseLeave",g="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(m=Ap,S="onPointerLeave",g="onPointerEnter",x="pointer"),y=h==null?p:ei(h),v=b==null?p:ei(b),p=new m(S,x+"leave",h,n,d),p.target=y,p.relatedTarget=v,S=null,vr(d)===u&&(m=new m(g,x+"enter",b,n,d),m.target=v,m.relatedTarget=y,S=m),y=S,h&&b)t:{for(m=h,g=b,x=0,v=m;v;v=Yr(v))x++;for(v=0,S=g;S;S=Yr(S))v++;for(;0<x-v;)m=Yr(m),x--;for(;0<v-x;)g=Yr(g),v--;for(;x--;){if(m===g||g!==null&&m===g.alternate)break t;m=Yr(m),g=Yr(g)}m=null}else m=null;h!==null&&$p(f,p,h,m,!1),b!==null&&y!==null&&$p(f,y,b,m,!0)}}e:{if(p=u?ei(u):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var k=o5;else if(Lp(p))if(D0)k=c5;else{k=a5;var C=s5}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=l5);if(k&&(k=k(e,u))){M0(f,k,n,d);break e}C&&C(e,p,u),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&Hc(p,"number",p.value)}switch(C=u?ei(u):window,e){case"focusin":(Lp(C)||C.contentEditable==="true")&&(Zr=C,ru=u,wo=null);break;case"focusout":wo=ru=Zr=null;break;case"mousedown":iu=!0;break;case"contextmenu":case"mouseup":case"dragend":iu=!1,_p(f,n,d);break;case"selectionchange":if(f5)break;case"keydown":case"keyup":_p(f,n,d)}var E;if(Dd)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Xr?R0(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(N0&&n.locale!=="ko"&&(Xr||j!=="onCompositionStart"?j==="onCompositionEnd"&&Xr&&(E=P0()):(_n=d,Rd="value"in _n?_n.value:_n.textContent,Xr=!0)),C=Ca(u,j),0<C.length&&(j=new Rp(j,e,null,n,d),f.push({event:j,listeners:C}),E?j.data=E:(E=A0(n),E!==null&&(j.data=E)))),(E=e5?t5(e,n):n5(e,n))&&(u=Ca(u,"onBeforeInput"),0<u.length&&(d=new Rp("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=E))}U0(f,t)})}function _o(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ca(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Mo(e,n),o!=null&&r.unshift(_o(e,o,i)),o=Mo(e,t),o!=null&&r.push(_o(e,o,i))),e=e.return}return r}function Yr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function $p(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Mo(n,o),l!=null&&s.unshift(_o(n,l,a))):i||(l=Mo(n,o),l!=null&&s.push(_o(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var g5=/\r\n?/g,x5=/\u0000|\uFFFD/g;function Up(e){return(typeof e=="string"?e:""+e).replace(g5,`
`).replace(x5,"")}function Ls(e,t,n){if(t=Up(t),Up(e)!==t&&n)throw Error(M(425))}function Ea(){}var ou=null,su=null;function au(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var lu=typeof setTimeout=="function"?setTimeout:void 0,v5=typeof clearTimeout=="function"?clearTimeout:void 0,Wp=typeof Promise=="function"?Promise:void 0,y5=typeof queueMicrotask=="function"?queueMicrotask:typeof Wp<"u"?function(e){return Wp.resolve(null).then(e).catch(w5)}:lu;function w5(e){setTimeout(function(){throw e})}function rc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Oo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Oo(t)}function Gn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Hp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Bi=Math.random().toString(36).slice(2),Gt="__reactFiber$"+Bi,Vo="__reactProps$"+Bi,fn="__reactContainer$"+Bi,cu="__reactEvents$"+Bi,b5="__reactListeners$"+Bi,S5="__reactHandles$"+Bi;function vr(e){var t=e[Gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[fn]||n[Gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Hp(e);e!==null;){if(n=e[Gt])return n;e=Hp(e)}return t}e=n,n=e.parentNode}return null}function cs(e){return e=e[Gt]||e[fn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ei(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function cl(e){return e[Vo]||null}var uu=[],ti=-1;function ar(e){return{current:e}}function se(e){0>ti||(e.current=uu[ti],uu[ti]=null,ti--)}function re(e,t){ti++,uu[ti]=e.current,e.current=t}var Jn={},_e=ar(Jn),Je=ar(!1),Mr=Jn;function Ni(e,t){var n=e.type.contextTypes;if(!n)return Jn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function et(e){return e=e.childContextTypes,e!=null}function ja(){se(Je),se(_e)}function Gp(e,t,n){if(_e.current!==Jn)throw Error(M(168));re(_e,t),re(Je,n)}function H0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(M(108,sb(e)||"Unknown",i));return he({},n,r)}function Ta(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Jn,Mr=_e.current,re(_e,e),re(Je,Je.current),!0}function Kp(e,t,n){var r=e.stateNode;if(!r)throw Error(M(169));n?(e=H0(e,t,Mr),r.__reactInternalMemoizedMergedChildContext=e,se(Je),se(_e),re(_e,e)):se(Je),re(Je,n)}var sn=null,ul=!1,ic=!1;function G0(e){sn===null?sn=[e]:sn.push(e)}function k5(e){ul=!0,G0(e)}function lr(){if(!ic&&sn!==null){ic=!0;var e=0,t=te;try{var n=sn;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}sn=null,ul=!1}catch(i){throw sn!==null&&(sn=sn.slice(e+1)),x0(jd,lr),i}finally{te=t,ic=!1}}return null}var ni=[],ri=0,Pa=null,Na=0,ht=[],mt=0,Dr=null,ln=1,cn="";function mr(e,t){ni[ri++]=Na,ni[ri++]=Pa,Pa=e,Na=t}function K0(e,t,n){ht[mt++]=ln,ht[mt++]=cn,ht[mt++]=Dr,Dr=e;var r=ln;e=cn;var i=32-Ot(r)-1;r&=~(1<<i),n+=1;var o=32-Ot(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,ln=1<<32-Ot(t)+i|n<<i|r,cn=o+e}else ln=1<<o|n<<i|r,cn=e}function Od(e){e.return!==null&&(mr(e,1),K0(e,1,0))}function Id(e){for(;e===Pa;)Pa=ni[--ri],ni[ri]=null,Na=ni[--ri],ni[ri]=null;for(;e===Dr;)Dr=ht[--mt],ht[mt]=null,cn=ht[--mt],ht[mt]=null,ln=ht[--mt],ht[mt]=null}var st=null,ot=null,ce=!1,Lt=null;function Y0(e,t){var n=gt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Yp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,st=e,ot=Gn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,st=e,ot=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Dr!==null?{id:ln,overflow:cn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=gt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,st=e,ot=null,!0):!1;default:return!1}}function du(e){return(e.mode&1)!==0&&(e.flags&128)===0}function fu(e){if(ce){var t=ot;if(t){var n=t;if(!Yp(e,t)){if(du(e))throw Error(M(418));t=Gn(n.nextSibling);var r=st;t&&Yp(e,t)?Y0(r,n):(e.flags=e.flags&-4097|2,ce=!1,st=e)}}else{if(du(e))throw Error(M(418));e.flags=e.flags&-4097|2,ce=!1,st=e}}}function qp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;st=e}function Os(e){if(e!==st)return!1;if(!ce)return qp(e),ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!au(e.type,e.memoizedProps)),t&&(t=ot)){if(du(e))throw q0(),Error(M(418));for(;t;)Y0(e,t),t=Gn(t.nextSibling)}if(qp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ot=Gn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ot=null}}else ot=st?Gn(e.stateNode.nextSibling):null;return!0}function q0(){for(var e=ot;e;)e=Gn(e.nextSibling)}function Ri(){ot=st=null,ce=!1}function zd(e){Lt===null?Lt=[e]:Lt.push(e)}var C5=vn.ReactCurrentBatchConfig;function no(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,e))}return e}function Is(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Qp(e){var t=e._init;return t(e._payload)}function Q0(e){function t(g,x){if(e){var v=g.deletions;v===null?(g.deletions=[x],g.flags|=16):v.push(x)}}function n(g,x){if(!e)return null;for(;x!==null;)t(g,x),x=x.sibling;return null}function r(g,x){for(g=new Map;x!==null;)x.key!==null?g.set(x.key,x):g.set(x.index,x),x=x.sibling;return g}function i(g,x){return g=Qn(g,x),g.index=0,g.sibling=null,g}function o(g,x,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<x?(g.flags|=2,x):v):(g.flags|=2,x)):(g.flags|=1048576,x)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,x,v,S){return x===null||x.tag!==6?(x=dc(v,g.mode,S),x.return=g,x):(x=i(x,v),x.return=g,x)}function l(g,x,v,S){var k=v.type;return k===Qr?d(g,x,v.props.children,S,v.key):x!==null&&(x.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Rn&&Qp(k)===x.type)?(S=i(x,v.props),S.ref=no(g,x,v),S.return=g,S):(S=ca(v.type,v.key,v.props,null,g.mode,S),S.ref=no(g,x,v),S.return=g,S)}function u(g,x,v,S){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=fc(v,g.mode,S),x.return=g,x):(x=i(x,v.children||[]),x.return=g,x)}function d(g,x,v,S,k){return x===null||x.tag!==7?(x=Rr(v,g.mode,S,k),x.return=g,x):(x=i(x,v),x.return=g,x)}function f(g,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=dc(""+x,g.mode,v),x.return=g,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Es:return v=ca(x.type,x.key,x.props,null,g.mode,v),v.ref=no(g,null,x),v.return=g,v;case qr:return x=fc(x,g.mode,v),x.return=g,x;case Rn:var S=x._init;return f(g,S(x._payload),v)}if(co(x)||Xi(x))return x=Rr(x,g.mode,v,null),x.return=g,x;Is(g,x)}return null}function p(g,x,v,S){var k=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return k!==null?null:a(g,x,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Es:return v.key===k?l(g,x,v,S):null;case qr:return v.key===k?u(g,x,v,S):null;case Rn:return k=v._init,p(g,x,k(v._payload),S)}if(co(v)||Xi(v))return k!==null?null:d(g,x,v,S,null);Is(g,v)}return null}function h(g,x,v,S,k){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(v)||null,a(x,g,""+S,k);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Es:return g=g.get(S.key===null?v:S.key)||null,l(x,g,S,k);case qr:return g=g.get(S.key===null?v:S.key)||null,u(x,g,S,k);case Rn:var C=S._init;return h(g,x,v,C(S._payload),k)}if(co(S)||Xi(S))return g=g.get(v)||null,d(x,g,S,k,null);Is(x,S)}return null}function b(g,x,v,S){for(var k=null,C=null,E=x,j=x=0,T=null;E!==null&&j<v.length;j++){E.index>j?(T=E,E=null):T=E.sibling;var A=p(g,E,v[j],S);if(A===null){E===null&&(E=T);break}e&&E&&A.alternate===null&&t(g,E),x=o(A,x,j),C===null?k=A:C.sibling=A,C=A,E=T}if(j===v.length)return n(g,E),ce&&mr(g,j),k;if(E===null){for(;j<v.length;j++)E=f(g,v[j],S),E!==null&&(x=o(E,x,j),C===null?k=E:C.sibling=E,C=E);return ce&&mr(g,j),k}for(E=r(g,E);j<v.length;j++)T=h(E,g,j,v[j],S),T!==null&&(e&&T.alternate!==null&&E.delete(T.key===null?j:T.key),x=o(T,x,j),C===null?k=T:C.sibling=T,C=T);return e&&E.forEach(function(L){return t(g,L)}),ce&&mr(g,j),k}function m(g,x,v,S){var k=Xi(v);if(typeof k!="function")throw Error(M(150));if(v=k.call(v),v==null)throw Error(M(151));for(var C=k=null,E=x,j=x=0,T=null,A=v.next();E!==null&&!A.done;j++,A=v.next()){E.index>j?(T=E,E=null):T=E.sibling;var L=p(g,E,A.value,S);if(L===null){E===null&&(E=T);break}e&&E&&L.alternate===null&&t(g,E),x=o(L,x,j),C===null?k=L:C.sibling=L,C=L,E=T}if(A.done)return n(g,E),ce&&mr(g,j),k;if(E===null){for(;!A.done;j++,A=v.next())A=f(g,A.value,S),A!==null&&(x=o(A,x,j),C===null?k=A:C.sibling=A,C=A);return ce&&mr(g,j),k}for(E=r(g,E);!A.done;j++,A=v.next())A=h(E,g,j,A.value,S),A!==null&&(e&&A.alternate!==null&&E.delete(A.key===null?j:A.key),x=o(A,x,j),C===null?k=A:C.sibling=A,C=A);return e&&E.forEach(function(O){return t(g,O)}),ce&&mr(g,j),k}function y(g,x,v,S){if(typeof v=="object"&&v!==null&&v.type===Qr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Es:e:{for(var k=v.key,C=x;C!==null;){if(C.key===k){if(k=v.type,k===Qr){if(C.tag===7){n(g,C.sibling),x=i(C,v.props.children),x.return=g,g=x;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Rn&&Qp(k)===C.type){n(g,C.sibling),x=i(C,v.props),x.ref=no(g,C,v),x.return=g,g=x;break e}n(g,C);break}else t(g,C);C=C.sibling}v.type===Qr?(x=Rr(v.props.children,g.mode,S,v.key),x.return=g,g=x):(S=ca(v.type,v.key,v.props,null,g.mode,S),S.ref=no(g,x,v),S.return=g,g=S)}return s(g);case qr:e:{for(C=v.key;x!==null;){if(x.key===C)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(g,x.sibling),x=i(x,v.children||[]),x.return=g,g=x;break e}else{n(g,x);break}else t(g,x);x=x.sibling}x=fc(v,g.mode,S),x.return=g,g=x}return s(g);case Rn:return C=v._init,y(g,x,C(v._payload),S)}if(co(v))return b(g,x,v,S);if(Xi(v))return m(g,x,v,S);Is(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(g,x.sibling),x=i(x,v),x.return=g,g=x):(n(g,x),x=dc(v,g.mode,S),x.return=g,g=x),s(g)):n(g,x)}return y}var Ai=Q0(!0),X0=Q0(!1),Ra=ar(null),Aa=null,ii=null,Fd=null;function _d(){Fd=ii=Aa=null}function Vd(e){var t=Ra.current;se(Ra),e._currentValue=t}function pu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function mi(e,t){Aa=e,Fd=ii=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ze=!0),e.firstContext=null)}function wt(e){var t=e._currentValue;if(Fd!==e)if(e={context:e,memoizedValue:t,next:null},ii===null){if(Aa===null)throw Error(M(308));ii=e,Aa.dependencies={lanes:0,firstContext:e}}else ii=ii.next=e;return t}var yr=null;function Bd(e){yr===null?yr=[e]:yr.push(e)}function Z0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Bd(t)):(n.next=i.next,i.next=n),t.interleaved=n,pn(e,r)}function pn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var An=!1;function $d(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function J0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function un(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Kn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,pn(e,n)}return i=r.interleaved,i===null?(t.next=t,Bd(r)):(t.next=i.next,i.next=t),r.interleaved=t,pn(e,n)}function ra(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Td(e,n)}}function Xp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ma(e,t,n,r){var i=e.updateQueue;An=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,d=u=l=null,a=o;do{var p=a.lane,h=a.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var b=e,m=a;switch(p=t,h=n,m.tag){case 1:if(b=m.payload,typeof b=="function"){f=b.call(h,f,p);break e}f=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=m.payload,p=typeof b=="function"?b.call(h,f,p):b,p==null)break e;f=he({},f,p);break e;case 2:An=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else h={eventTime:h,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=h,l=f):d=d.next=h,s|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Or|=s,e.lanes=s,e.memoizedState=f}}function Zp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var us={},qt=ar(us),Bo=ar(us),$o=ar(us);function wr(e){if(e===us)throw Error(M(174));return e}function Ud(e,t){switch(re($o,t),re(Bo,e),re(qt,us),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Kc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Kc(t,e)}se(qt),re(qt,t)}function Mi(){se(qt),se(Bo),se($o)}function ex(e){wr($o.current);var t=wr(qt.current),n=Kc(t,e.type);t!==n&&(re(Bo,e),re(qt,n))}function Wd(e){Bo.current===e&&(se(qt),se(Bo))}var de=ar(0);function Da(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var oc=[];function Hd(){for(var e=0;e<oc.length;e++)oc[e]._workInProgressVersionPrimary=null;oc.length=0}var ia=vn.ReactCurrentDispatcher,sc=vn.ReactCurrentBatchConfig,Lr=0,pe=null,ke=null,je=null,La=!1,bo=!1,Uo=0,E5=0;function Le(){throw Error(M(321))}function Gd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zt(e[n],t[n]))return!1;return!0}function Kd(e,t,n,r,i,o){if(Lr=o,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ia.current=e===null||e.memoizedState===null?N5:R5,e=n(r,i),bo){o=0;do{if(bo=!1,Uo=0,25<=o)throw Error(M(301));o+=1,je=ke=null,t.updateQueue=null,ia.current=A5,e=n(r,i)}while(bo)}if(ia.current=Oa,t=ke!==null&&ke.next!==null,Lr=0,je=ke=pe=null,La=!1,t)throw Error(M(300));return e}function Yd(){var e=Uo!==0;return Uo=0,e}function $t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?pe.memoizedState=je=e:je=je.next=e,je}function bt(){if(ke===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var t=je===null?pe.memoizedState:je.next;if(t!==null)je=t,ke=e;else{if(e===null)throw Error(M(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},je===null?pe.memoizedState=je=e:je=je.next=e}return je}function Wo(e,t){return typeof t=="function"?t(e):t}function ac(e){var t=bt(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=ke,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var d=u.lane;if((Lr&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,pe.lanes|=d,Or|=d}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,zt(r,t.memoizedState)||(Ze=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,pe.lanes|=o,Or|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function lc(e){var t=bt(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);zt(o,t.memoizedState)||(Ze=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function tx(){}function nx(e,t){var n=pe,r=bt(),i=t(),o=!zt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ze=!0),r=r.queue,qd(ox.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,Ho(9,ix.bind(null,n,r,i,t),void 0,null),Te===null)throw Error(M(349));Lr&30||rx(n,t,i)}return i}function rx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ix(e,t,n,r){t.value=n,t.getSnapshot=r,sx(t)&&ax(e)}function ox(e,t,n){return n(function(){sx(t)&&ax(e)})}function sx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zt(e,n)}catch{return!0}}function ax(e){var t=pn(e,1);t!==null&&It(t,e,1,-1)}function Jp(e){var t=$t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wo,lastRenderedState:e},t.queue=e,e=e.dispatch=P5.bind(null,pe,e),[t.memoizedState,e]}function Ho(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function lx(){return bt().memoizedState}function oa(e,t,n,r){var i=$t();pe.flags|=e,i.memoizedState=Ho(1|t,n,void 0,r===void 0?null:r)}function dl(e,t,n,r){var i=bt();r=r===void 0?null:r;var o=void 0;if(ke!==null){var s=ke.memoizedState;if(o=s.destroy,r!==null&&Gd(r,s.deps)){i.memoizedState=Ho(t,n,o,r);return}}pe.flags|=e,i.memoizedState=Ho(1|t,n,o,r)}function eh(e,t){return oa(8390656,8,e,t)}function qd(e,t){return dl(2048,8,e,t)}function cx(e,t){return dl(4,2,e,t)}function ux(e,t){return dl(4,4,e,t)}function dx(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function fx(e,t,n){return n=n!=null?n.concat([e]):null,dl(4,4,dx.bind(null,t,e),n)}function Qd(){}function px(e,t){var n=bt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Gd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function hx(e,t){var n=bt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Gd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function mx(e,t,n){return Lr&21?(zt(n,t)||(n=w0(),pe.lanes|=n,Or|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ze=!0),e.memoizedState=n)}function j5(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=sc.transition;sc.transition={};try{e(!1),t()}finally{te=n,sc.transition=r}}function gx(){return bt().memoizedState}function T5(e,t,n){var r=qn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},xx(e))vx(t,n);else if(n=Z0(e,t,n,r),n!==null){var i=Ge();It(n,e,r,i),yx(n,t,r)}}function P5(e,t,n){var r=qn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(xx(e))vx(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,zt(a,s)){var l=t.interleaved;l===null?(i.next=i,Bd(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Z0(e,t,i,r),n!==null&&(i=Ge(),It(n,e,r,i),yx(n,t,r))}}function xx(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function vx(e,t){bo=La=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function yx(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Td(e,n)}}var Oa={readContext:wt,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useInsertionEffect:Le,useLayoutEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useMutableSource:Le,useSyncExternalStore:Le,useId:Le,unstable_isNewReconciler:!1},N5={readContext:wt,useCallback:function(e,t){return $t().memoizedState=[e,t===void 0?null:t],e},useContext:wt,useEffect:eh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,oa(4194308,4,dx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return oa(4194308,4,e,t)},useInsertionEffect:function(e,t){return oa(4,2,e,t)},useMemo:function(e,t){var n=$t();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=$t();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=T5.bind(null,pe,e),[r.memoizedState,e]},useRef:function(e){var t=$t();return e={current:e},t.memoizedState=e},useState:Jp,useDebugValue:Qd,useDeferredValue:function(e){return $t().memoizedState=e},useTransition:function(){var e=Jp(!1),t=e[0];return e=j5.bind(null,e[1]),$t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=pe,i=$t();if(ce){if(n===void 0)throw Error(M(407));n=n()}else{if(n=t(),Te===null)throw Error(M(349));Lr&30||rx(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,eh(ox.bind(null,r,o,e),[e]),r.flags|=2048,Ho(9,ix.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=$t(),t=Te.identifierPrefix;if(ce){var n=cn,r=ln;n=(r&~(1<<32-Ot(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Uo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=E5++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},R5={readContext:wt,useCallback:px,useContext:wt,useEffect:qd,useImperativeHandle:fx,useInsertionEffect:cx,useLayoutEffect:ux,useMemo:hx,useReducer:ac,useRef:lx,useState:function(){return ac(Wo)},useDebugValue:Qd,useDeferredValue:function(e){var t=bt();return mx(t,ke.memoizedState,e)},useTransition:function(){var e=ac(Wo)[0],t=bt().memoizedState;return[e,t]},useMutableSource:tx,useSyncExternalStore:nx,useId:gx,unstable_isNewReconciler:!1},A5={readContext:wt,useCallback:px,useContext:wt,useEffect:qd,useImperativeHandle:fx,useInsertionEffect:cx,useLayoutEffect:ux,useMemo:hx,useReducer:lc,useRef:lx,useState:function(){return lc(Wo)},useDebugValue:Qd,useDeferredValue:function(e){var t=bt();return ke===null?t.memoizedState=e:mx(t,ke.memoizedState,e)},useTransition:function(){var e=lc(Wo)[0],t=bt().memoizedState;return[e,t]},useMutableSource:tx,useSyncExternalStore:nx,useId:gx,unstable_isNewReconciler:!1};function Nt(e,t){if(e&&e.defaultProps){t=he({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function hu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:he({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fl={isMounted:function(e){return(e=e._reactInternals)?_r(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ge(),i=qn(e),o=un(r,i);o.payload=t,n!=null&&(o.callback=n),t=Kn(e,o,i),t!==null&&(It(t,e,i,r),ra(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ge(),i=qn(e),o=un(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Kn(e,o,i),t!==null&&(It(t,e,i,r),ra(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ge(),r=qn(e),i=un(n,r);i.tag=2,t!=null&&(i.callback=t),t=Kn(e,i,r),t!==null&&(It(t,e,r,n),ra(t,e,r))}};function th(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!zo(n,r)||!zo(i,o):!0}function wx(e,t,n){var r=!1,i=Jn,o=t.contextType;return typeof o=="object"&&o!==null?o=wt(o):(i=et(t)?Mr:_e.current,r=t.contextTypes,o=(r=r!=null)?Ni(e,i):Jn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=fl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function nh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fl.enqueueReplaceState(t,t.state,null)}function mu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},$d(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=wt(o):(o=et(t)?Mr:_e.current,i.context=Ni(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(hu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&fl.enqueueReplaceState(i,i.state,null),Ma(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Di(e,t){try{var n="",r=t;do n+=ob(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function cc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function gu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var M5=typeof WeakMap=="function"?WeakMap:Map;function bx(e,t,n){n=un(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){za||(za=!0,ju=r),gu(e,t)},n}function Sx(e,t,n){n=un(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){gu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){gu(e,t),typeof r!="function"&&(Yn===null?Yn=new Set([this]):Yn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function rh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new M5;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=G5.bind(null,e,t,n),t.then(e,e))}function ih(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function oh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=un(-1,1),t.tag=2,Kn(n,t,1))),n.lanes|=1),e)}var D5=vn.ReactCurrentOwner,Ze=!1;function Be(e,t,n,r){t.child=e===null?X0(t,null,n,r):Ai(t,e.child,n,r)}function sh(e,t,n,r,i){n=n.render;var o=t.ref;return mi(t,i),r=Kd(e,t,n,r,o,i),n=Yd(),e!==null&&!Ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,hn(e,t,i)):(ce&&n&&Od(t),t.flags|=1,Be(e,t,r,i),t.child)}function ah(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!of(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,kx(e,t,o,r,i)):(e=ca(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:zo,n(s,r)&&e.ref===t.ref)return hn(e,t,i)}return t.flags|=1,e=Qn(o,r),e.ref=t.ref,e.return=t,t.child=e}function kx(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(zo(o,r)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ze=!0);else return t.lanes=e.lanes,hn(e,t,i)}return xu(e,t,n,r,i)}function Cx(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(si,rt),rt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,re(si,rt),rt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,re(si,rt),rt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,re(si,rt),rt|=r;return Be(e,t,i,n),t.child}function Ex(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function xu(e,t,n,r,i){var o=et(n)?Mr:_e.current;return o=Ni(t,o),mi(t,i),n=Kd(e,t,n,r,o,i),r=Yd(),e!==null&&!Ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,hn(e,t,i)):(ce&&r&&Od(t),t.flags|=1,Be(e,t,n,i),t.child)}function lh(e,t,n,r,i){if(et(n)){var o=!0;Ta(t)}else o=!1;if(mi(t,i),t.stateNode===null)sa(e,t),wx(t,n,r),mu(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=wt(u):(u=et(n)?Mr:_e.current,u=Ni(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&nh(t,s,r,u),An=!1;var p=t.memoizedState;s.state=p,Ma(t,r,s,i),l=t.memoizedState,a!==r||p!==l||Je.current||An?(typeof d=="function"&&(hu(t,n,d,r),l=t.memoizedState),(a=An||th(t,n,a,r,p,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,J0(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Nt(t.type,a),s.props=u,f=t.pendingProps,p=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=wt(l):(l=et(n)?Mr:_e.current,l=Ni(t,l));var h=n.getDerivedStateFromProps;(d=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||p!==l)&&nh(t,s,r,l),An=!1,p=t.memoizedState,s.state=p,Ma(t,r,s,i);var b=t.memoizedState;a!==f||p!==b||Je.current||An?(typeof h=="function"&&(hu(t,n,h,r),b=t.memoizedState),(u=An||th(t,n,u,r,p,b,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,b,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,b,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),s.props=r,s.state=b,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return vu(e,t,n,r,o,i)}function vu(e,t,n,r,i,o){Ex(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Kp(t,n,!1),hn(e,t,o);r=t.stateNode,D5.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Ai(t,e.child,null,o),t.child=Ai(t,null,a,o)):Be(e,t,a,o),t.memoizedState=r.state,i&&Kp(t,n,!0),t.child}function jx(e){var t=e.stateNode;t.pendingContext?Gp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Gp(e,t.context,!1),Ud(e,t.containerInfo)}function ch(e,t,n,r,i){return Ri(),zd(i),t.flags|=256,Be(e,t,n,r),t.child}var yu={dehydrated:null,treeContext:null,retryLane:0};function wu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Tx(e,t,n){var r=t.pendingProps,i=de.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),re(de,i&1),e===null)return fu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=ml(s,r,0,null),e=Rr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=wu(n),t.memoizedState=yu,e):Xd(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return L5(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Qn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Qn(a,o):(o=Rr(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?wu(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=yu,r}return o=e.child,e=o.sibling,r=Qn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Xd(e,t){return t=ml({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zs(e,t,n,r){return r!==null&&zd(r),Ai(t,e.child,null,n),e=Xd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function L5(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=cc(Error(M(422))),zs(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ml({mode:"visible",children:r.children},i,0,null),o=Rr(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Ai(t,e.child,null,s),t.child.memoizedState=wu(s),t.memoizedState=yu,o);if(!(t.mode&1))return zs(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(M(419)),r=cc(o,r,void 0),zs(e,t,s,r)}if(a=(s&e.childLanes)!==0,Ze||a){if(r=Te,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,pn(e,i),It(r,e,i,-1))}return rf(),r=cc(Error(M(421))),zs(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=K5.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ot=Gn(i.nextSibling),st=t,ce=!0,Lt=null,e!==null&&(ht[mt++]=ln,ht[mt++]=cn,ht[mt++]=Dr,ln=e.id,cn=e.overflow,Dr=t),t=Xd(t,r.children),t.flags|=4096,t)}function uh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),pu(e.return,t,n)}function uc(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Px(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Be(e,t,r.children,n),r=de.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&uh(e,n,t);else if(e.tag===19)uh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(re(de,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Da(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),uc(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Da(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}uc(t,!0,n,null,o);break;case"together":uc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function sa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function hn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Or|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,n=Qn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function O5(e,t,n){switch(t.tag){case 3:jx(t),Ri();break;case 5:ex(t);break;case 1:et(t.type)&&Ta(t);break;case 4:Ud(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;re(Ra,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(re(de,de.current&1),t.flags|=128,null):n&t.child.childLanes?Tx(e,t,n):(re(de,de.current&1),e=hn(e,t,n),e!==null?e.sibling:null);re(de,de.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Px(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),re(de,de.current),r)break;return null;case 22:case 23:return t.lanes=0,Cx(e,t,n)}return hn(e,t,n)}var Nx,bu,Rx,Ax;Nx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bu=function(){};Rx=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,wr(qt.current);var o=null;switch(n){case"input":i=Uc(e,i),r=Uc(e,r),o=[];break;case"select":i=he({},i,{value:void 0}),r=he({},r,{value:void 0}),o=[];break;case"textarea":i=Gc(e,i),r=Gc(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ea)}Yc(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ro.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ro.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&oe("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Ax=function(e,t,n,r){n!==r&&(t.flags|=4)};function ro(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function I5(e,t,n){var r=t.pendingProps;switch(Id(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return et(t.type)&&ja(),Oe(t),null;case 3:return r=t.stateNode,Mi(),se(Je),se(_e),Hd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Os(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Lt!==null&&(Nu(Lt),Lt=null))),bu(e,t),Oe(t),null;case 5:Wd(t);var i=wr($o.current);if(n=t.type,e!==null&&t.stateNode!=null)Rx(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(M(166));return Oe(t),null}if(e=wr(qt.current),Os(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Gt]=t,r[Vo]=o,e=(t.mode&1)!==0,n){case"dialog":oe("cancel",r),oe("close",r);break;case"iframe":case"object":case"embed":oe("load",r);break;case"video":case"audio":for(i=0;i<fo.length;i++)oe(fo[i],r);break;case"source":oe("error",r);break;case"img":case"image":case"link":oe("error",r),oe("load",r);break;case"details":oe("toggle",r);break;case"input":yp(r,o),oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},oe("invalid",r);break;case"textarea":bp(r,o),oe("invalid",r)}Yc(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Ls(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Ls(r.textContent,a,e),i=["children",""+a]):Ro.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&oe("scroll",r)}switch(n){case"input":js(r),wp(r,o,!0);break;case"textarea":js(r),Sp(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ea)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=o0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Gt]=t,e[Vo]=r,Nx(e,t,!1,!1),t.stateNode=e;e:{switch(s=qc(n,r),n){case"dialog":oe("cancel",e),oe("close",e),i=r;break;case"iframe":case"object":case"embed":oe("load",e),i=r;break;case"video":case"audio":for(i=0;i<fo.length;i++)oe(fo[i],e);i=r;break;case"source":oe("error",e),i=r;break;case"img":case"image":case"link":oe("error",e),oe("load",e),i=r;break;case"details":oe("toggle",e),i=r;break;case"input":yp(e,r),i=Uc(e,r),oe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=he({},r,{value:void 0}),oe("invalid",e);break;case"textarea":bp(e,r),i=Gc(e,r),oe("invalid",e);break;default:i=r}Yc(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?l0(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&s0(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ao(e,l):typeof l=="number"&&Ao(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ro.hasOwnProperty(o)?l!=null&&o==="onScroll"&&oe("scroll",e):l!=null&&bd(e,o,l,s))}switch(n){case"input":js(e),wp(e,r,!1);break;case"textarea":js(e),Sp(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Zn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?di(e,!!r.multiple,o,!1):r.defaultValue!=null&&di(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ea)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Oe(t),null;case 6:if(e&&t.stateNode!=null)Ax(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(M(166));if(n=wr($o.current),wr(qt.current),Os(t)){if(r=t.stateNode,n=t.memoizedProps,r[Gt]=t,(o=r.nodeValue!==n)&&(e=st,e!==null))switch(e.tag){case 3:Ls(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ls(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Gt]=t,t.stateNode=r}return Oe(t),null;case 13:if(se(de),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ce&&ot!==null&&t.mode&1&&!(t.flags&128))q0(),Ri(),t.flags|=98560,o=!1;else if(o=Os(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(M(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(M(317));o[Gt]=t}else Ri(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Oe(t),o=!1}else Lt!==null&&(Nu(Lt),Lt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||de.current&1?Ee===0&&(Ee=3):rf())),t.updateQueue!==null&&(t.flags|=4),Oe(t),null);case 4:return Mi(),bu(e,t),e===null&&Fo(t.stateNode.containerInfo),Oe(t),null;case 10:return Vd(t.type._context),Oe(t),null;case 17:return et(t.type)&&ja(),Oe(t),null;case 19:if(se(de),o=t.memoizedState,o===null)return Oe(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)ro(o,!1);else{if(Ee!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Da(e),s!==null){for(t.flags|=128,ro(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return re(de,de.current&1|2),t.child}e=e.sibling}o.tail!==null&&xe()>Li&&(t.flags|=128,r=!0,ro(o,!1),t.lanes=4194304)}else{if(!r)if(e=Da(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ro(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ce)return Oe(t),null}else 2*xe()-o.renderingStartTime>Li&&n!==1073741824&&(t.flags|=128,r=!0,ro(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=xe(),t.sibling=null,n=de.current,re(de,r?n&1|2:n&1),t):(Oe(t),null);case 22:case 23:return nf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?rt&1073741824&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function z5(e,t){switch(Id(t),t.tag){case 1:return et(t.type)&&ja(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Mi(),se(Je),se(_e),Hd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Wd(t),null;case 13:if(se(de),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));Ri()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(de),null;case 4:return Mi(),null;case 10:return Vd(t.type._context),null;case 22:case 23:return nf(),null;case 24:return null;default:return null}}var Fs=!1,ze=!1,F5=typeof WeakSet=="function"?WeakSet:Set,_=null;function oi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ge(e,t,r)}else n.current=null}function Su(e,t,n){try{n()}catch(r){ge(e,t,r)}}var dh=!1;function _5(e,t){if(ou=Sa,e=I0(),Ld(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(h=f.firstChild)!==null;)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++u===i&&(a=s),p===o&&++d===r&&(l=s),(h=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=h}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(su={focusedElem:e,selectionRange:n},Sa=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var m=b.memoizedProps,y=b.memoizedState,g=t.stateNode,x=g.getSnapshotBeforeUpdate(t.elementType===t.type?m:Nt(t.type,m),y);g.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(S){ge(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return b=dh,dh=!1,b}function So(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Su(t,n,o)}i=i.next}while(i!==r)}}function pl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ku(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Mx(e){var t=e.alternate;t!==null&&(e.alternate=null,Mx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Gt],delete t[Vo],delete t[cu],delete t[b5],delete t[S5])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Dx(e){return e.tag===5||e.tag===3||e.tag===4}function fh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ea));else if(r!==4&&(e=e.child,e!==null))for(Cu(e,t,n),e=e.sibling;e!==null;)Cu(e,t,n),e=e.sibling}function Eu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Eu(e,t,n),e=e.sibling;e!==null;)Eu(e,t,n),e=e.sibling}var Pe=null,Dt=!1;function En(e,t,n){for(n=n.child;n!==null;)Lx(e,t,n),n=n.sibling}function Lx(e,t,n){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(ol,n)}catch{}switch(n.tag){case 5:ze||oi(n,t);case 6:var r=Pe,i=Dt;Pe=null,En(e,t,n),Pe=r,Dt=i,Pe!==null&&(Dt?(e=Pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Pe.removeChild(n.stateNode));break;case 18:Pe!==null&&(Dt?(e=Pe,n=n.stateNode,e.nodeType===8?rc(e.parentNode,n):e.nodeType===1&&rc(e,n),Oo(e)):rc(Pe,n.stateNode));break;case 4:r=Pe,i=Dt,Pe=n.stateNode.containerInfo,Dt=!0,En(e,t,n),Pe=r,Dt=i;break;case 0:case 11:case 14:case 15:if(!ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Su(n,t,s),i=i.next}while(i!==r)}En(e,t,n);break;case 1:if(!ze&&(oi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ge(n,t,a)}En(e,t,n);break;case 21:En(e,t,n);break;case 22:n.mode&1?(ze=(r=ze)||n.memoizedState!==null,En(e,t,n),ze=r):En(e,t,n);break;default:En(e,t,n)}}function ph(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new F5),t.forEach(function(r){var i=Y5.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Et(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Pe=a.stateNode,Dt=!1;break e;case 3:Pe=a.stateNode.containerInfo,Dt=!0;break e;case 4:Pe=a.stateNode.containerInfo,Dt=!0;break e}a=a.return}if(Pe===null)throw Error(M(160));Lx(o,s,i),Pe=null,Dt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ge(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ox(t,e),t=t.sibling}function Ox(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Et(t,e),Bt(e),r&4){try{So(3,e,e.return),pl(3,e)}catch(m){ge(e,e.return,m)}try{So(5,e,e.return)}catch(m){ge(e,e.return,m)}}break;case 1:Et(t,e),Bt(e),r&512&&n!==null&&oi(n,n.return);break;case 5:if(Et(t,e),Bt(e),r&512&&n!==null&&oi(n,n.return),e.flags&32){var i=e.stateNode;try{Ao(i,"")}catch(m){ge(e,e.return,m)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&r0(i,o),qc(a,s);var u=qc(a,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d==="style"?l0(i,f):d==="dangerouslySetInnerHTML"?s0(i,f):d==="children"?Ao(i,f):bd(i,d,f,u)}switch(a){case"input":Wc(i,o);break;case"textarea":i0(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?di(i,!!o.multiple,h,!1):p!==!!o.multiple&&(o.defaultValue!=null?di(i,!!o.multiple,o.defaultValue,!0):di(i,!!o.multiple,o.multiple?[]:"",!1))}i[Vo]=o}catch(m){ge(e,e.return,m)}}break;case 6:if(Et(t,e),Bt(e),r&4){if(e.stateNode===null)throw Error(M(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(m){ge(e,e.return,m)}}break;case 3:if(Et(t,e),Bt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Oo(t.containerInfo)}catch(m){ge(e,e.return,m)}break;case 4:Et(t,e),Bt(e);break;case 13:Et(t,e),Bt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ef=xe())),r&4&&ph(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ze=(u=ze)||d,Et(t,e),ze=u):Et(t,e),Bt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(_=e,d=e.child;d!==null;){for(f=_=d;_!==null;){switch(p=_,h=p.child,p.tag){case 0:case 11:case 14:case 15:So(4,p,p.return);break;case 1:oi(p,p.return);var b=p.stateNode;if(typeof b.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(m){ge(r,n,m)}}break;case 5:oi(p,p.return);break;case 22:if(p.memoizedState!==null){mh(f);continue}}h!==null?(h.return=p,_=h):mh(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=a0("display",s))}catch(m){ge(e,e.return,m)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(m){ge(e,e.return,m)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Et(t,e),Bt(e),r&4&&ph(e);break;case 21:break;default:Et(t,e),Bt(e)}}function Bt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Dx(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ao(i,""),r.flags&=-33);var o=fh(e);Eu(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=fh(e);Cu(e,a,s);break;default:throw Error(M(161))}}catch(l){ge(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function V5(e,t,n){_=e,Ix(e)}function Ix(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var i=_,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Fs;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ze;a=Fs;var u=ze;if(Fs=s,(ze=l)&&!u)for(_=i;_!==null;)s=_,l=s.child,s.tag===22&&s.memoizedState!==null?gh(i):l!==null?(l.return=s,_=l):gh(i);for(;o!==null;)_=o,Ix(o),o=o.sibling;_=i,Fs=a,ze=u}hh(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,_=o):hh(e)}}function hh(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ze||pl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ze)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Nt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Zp(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Zp(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Oo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}ze||t.flags&512&&ku(t)}catch(p){ge(t,t.return,p)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function mh(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function gh(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{pl(4,t)}catch(l){ge(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ge(t,i,l)}}var o=t.return;try{ku(t)}catch(l){ge(t,o,l)}break;case 5:var s=t.return;try{ku(t)}catch(l){ge(t,s,l)}}}catch(l){ge(t,t.return,l)}if(t===e){_=null;break}var a=t.sibling;if(a!==null){a.return=t.return,_=a;break}_=t.return}}var B5=Math.ceil,Ia=vn.ReactCurrentDispatcher,Zd=vn.ReactCurrentOwner,vt=vn.ReactCurrentBatchConfig,Z=0,Te=null,we=null,Re=0,rt=0,si=ar(0),Ee=0,Go=null,Or=0,hl=0,Jd=0,ko=null,Xe=null,ef=0,Li=1/0,on=null,za=!1,ju=null,Yn=null,_s=!1,Vn=null,Fa=0,Co=0,Tu=null,aa=-1,la=0;function Ge(){return Z&6?xe():aa!==-1?aa:aa=xe()}function qn(e){return e.mode&1?Z&2&&Re!==0?Re&-Re:C5.transition!==null?(la===0&&(la=w0()),la):(e=te,e!==0||(e=window.event,e=e===void 0?16:T0(e.type)),e):1}function It(e,t,n,r){if(50<Co)throw Co=0,Tu=null,Error(M(185));as(e,n,r),(!(Z&2)||e!==Te)&&(e===Te&&(!(Z&2)&&(hl|=n),Ee===4&&Dn(e,Re)),tt(e,r),n===1&&Z===0&&!(t.mode&1)&&(Li=xe()+500,ul&&lr()))}function tt(e,t){var n=e.callbackNode;Cb(e,t);var r=ba(e,e===Te?Re:0);if(r===0)n!==null&&Ep(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ep(n),t===1)e.tag===0?k5(xh.bind(null,e)):G0(xh.bind(null,e)),y5(function(){!(Z&6)&&lr()}),n=null;else{switch(b0(r)){case 1:n=jd;break;case 4:n=v0;break;case 16:n=wa;break;case 536870912:n=y0;break;default:n=wa}n=Wx(n,zx.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function zx(e,t){if(aa=-1,la=0,Z&6)throw Error(M(327));var n=e.callbackNode;if(gi()&&e.callbackNode!==n)return null;var r=ba(e,e===Te?Re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=_a(e,r);else{t=r;var i=Z;Z|=2;var o=_x();(Te!==e||Re!==t)&&(on=null,Li=xe()+500,Nr(e,t));do try{W5();break}catch(a){Fx(e,a)}while(!0);_d(),Ia.current=o,Z=i,we!==null?t=0:(Te=null,Re=0,t=Ee)}if(t!==0){if(t===2&&(i=eu(e),i!==0&&(r=i,t=Pu(e,i))),t===1)throw n=Go,Nr(e,0),Dn(e,r),tt(e,xe()),n;if(t===6)Dn(e,r);else{if(i=e.current.alternate,!(r&30)&&!$5(i)&&(t=_a(e,r),t===2&&(o=eu(e),o!==0&&(r=o,t=Pu(e,o))),t===1))throw n=Go,Nr(e,0),Dn(e,r),tt(e,xe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(M(345));case 2:gr(e,Xe,on);break;case 3:if(Dn(e,r),(r&130023424)===r&&(t=ef+500-xe(),10<t)){if(ba(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ge(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=lu(gr.bind(null,e,Xe,on),t);break}gr(e,Xe,on);break;case 4:if(Dn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Ot(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*B5(r/1960))-r,10<r){e.timeoutHandle=lu(gr.bind(null,e,Xe,on),r);break}gr(e,Xe,on);break;case 5:gr(e,Xe,on);break;default:throw Error(M(329))}}}return tt(e,xe()),e.callbackNode===n?zx.bind(null,e):null}function Pu(e,t){var n=ko;return e.current.memoizedState.isDehydrated&&(Nr(e,t).flags|=256),e=_a(e,t),e!==2&&(t=Xe,Xe=n,t!==null&&Nu(t)),e}function Nu(e){Xe===null?Xe=e:Xe.push.apply(Xe,e)}function $5(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!zt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dn(e,t){for(t&=~Jd,t&=~hl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ot(t),r=1<<n;e[n]=-1,t&=~r}}function xh(e){if(Z&6)throw Error(M(327));gi();var t=ba(e,0);if(!(t&1))return tt(e,xe()),null;var n=_a(e,t);if(e.tag!==0&&n===2){var r=eu(e);r!==0&&(t=r,n=Pu(e,r))}if(n===1)throw n=Go,Nr(e,0),Dn(e,t),tt(e,xe()),n;if(n===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,gr(e,Xe,on),tt(e,xe()),null}function tf(e,t){var n=Z;Z|=1;try{return e(t)}finally{Z=n,Z===0&&(Li=xe()+500,ul&&lr())}}function Ir(e){Vn!==null&&Vn.tag===0&&!(Z&6)&&gi();var t=Z;Z|=1;var n=vt.transition,r=te;try{if(vt.transition=null,te=1,e)return e()}finally{te=r,vt.transition=n,Z=t,!(Z&6)&&lr()}}function nf(){rt=si.current,se(si)}function Nr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,v5(n)),we!==null)for(n=we.return;n!==null;){var r=n;switch(Id(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ja();break;case 3:Mi(),se(Je),se(_e),Hd();break;case 5:Wd(r);break;case 4:Mi();break;case 13:se(de);break;case 19:se(de);break;case 10:Vd(r.type._context);break;case 22:case 23:nf()}n=n.return}if(Te=e,we=e=Qn(e.current,null),Re=rt=t,Ee=0,Go=null,Jd=hl=Or=0,Xe=ko=null,yr!==null){for(t=0;t<yr.length;t++)if(n=yr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}yr=null}return e}function Fx(e,t){do{var n=we;try{if(_d(),ia.current=Oa,La){for(var r=pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}La=!1}if(Lr=0,je=ke=pe=null,bo=!1,Uo=0,Zd.current=null,n===null||n.return===null){Ee=1,Go=t,we=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=Re,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=ih(s);if(h!==null){h.flags&=-257,oh(h,s,a,o,t),h.mode&1&&rh(o,u,t),t=h,l=u;var b=t.updateQueue;if(b===null){var m=new Set;m.add(l),t.updateQueue=m}else b.add(l);break e}else{if(!(t&1)){rh(o,u,t),rf();break e}l=Error(M(426))}}else if(ce&&a.mode&1){var y=ih(s);if(y!==null){!(y.flags&65536)&&(y.flags|=256),oh(y,s,a,o,t),zd(Di(l,a));break e}}o=l=Di(l,a),Ee!==4&&(Ee=2),ko===null?ko=[o]:ko.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=bx(o,l,t);Xp(o,g);break e;case 1:a=l;var x=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Yn===null||!Yn.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=Sx(o,a,t);Xp(o,S);break e}}o=o.return}while(o!==null)}Bx(n)}catch(k){t=k,we===n&&n!==null&&(we=n=n.return);continue}break}while(!0)}function _x(){var e=Ia.current;return Ia.current=Oa,e===null?Oa:e}function rf(){(Ee===0||Ee===3||Ee===2)&&(Ee=4),Te===null||!(Or&268435455)&&!(hl&268435455)||Dn(Te,Re)}function _a(e,t){var n=Z;Z|=2;var r=_x();(Te!==e||Re!==t)&&(on=null,Nr(e,t));do try{U5();break}catch(i){Fx(e,i)}while(!0);if(_d(),Z=n,Ia.current=r,we!==null)throw Error(M(261));return Te=null,Re=0,Ee}function U5(){for(;we!==null;)Vx(we)}function W5(){for(;we!==null&&!mb();)Vx(we)}function Vx(e){var t=Ux(e.alternate,e,rt);e.memoizedProps=e.pendingProps,t===null?Bx(e):we=t,Zd.current=null}function Bx(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=z5(n,t),n!==null){n.flags&=32767,we=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ee=6,we=null;return}}else if(n=I5(n,t,rt),n!==null){we=n;return}if(t=t.sibling,t!==null){we=t;return}we=t=e}while(t!==null);Ee===0&&(Ee=5)}function gr(e,t,n){var r=te,i=vt.transition;try{vt.transition=null,te=1,H5(e,t,n,r)}finally{vt.transition=i,te=r}return null}function H5(e,t,n,r){do gi();while(Vn!==null);if(Z&6)throw Error(M(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Eb(e,o),e===Te&&(we=Te=null,Re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_s||(_s=!0,Wx(wa,function(){return gi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=vt.transition,vt.transition=null;var s=te;te=1;var a=Z;Z|=4,Zd.current=null,_5(e,n),Ox(n,e),d5(su),Sa=!!ou,su=ou=null,e.current=n,V5(n),gb(),Z=a,te=s,vt.transition=o}else e.current=n;if(_s&&(_s=!1,Vn=e,Fa=i),o=e.pendingLanes,o===0&&(Yn=null),yb(n.stateNode),tt(e,xe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(za)throw za=!1,e=ju,ju=null,e;return Fa&1&&e.tag!==0&&gi(),o=e.pendingLanes,o&1?e===Tu?Co++:(Co=0,Tu=e):Co=0,lr(),null}function gi(){if(Vn!==null){var e=b0(Fa),t=vt.transition,n=te;try{if(vt.transition=null,te=16>e?16:e,Vn===null)var r=!1;else{if(e=Vn,Vn=null,Fa=0,Z&6)throw Error(M(331));var i=Z;for(Z|=4,_=e.current;_!==null;){var o=_,s=o.child;if(_.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(_=u;_!==null;){var d=_;switch(d.tag){case 0:case 11:case 15:So(8,d,o)}var f=d.child;if(f!==null)f.return=d,_=f;else for(;_!==null;){d=_;var p=d.sibling,h=d.return;if(Mx(d),d===u){_=null;break}if(p!==null){p.return=h,_=p;break}_=h}}}var b=o.alternate;if(b!==null){var m=b.child;if(m!==null){b.child=null;do{var y=m.sibling;m.sibling=null,m=y}while(m!==null)}}_=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,_=s;else e:for(;_!==null;){if(o=_,o.flags&2048)switch(o.tag){case 0:case 11:case 15:So(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,_=g;break e}_=o.return}}var x=e.current;for(_=x;_!==null;){s=_;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,_=v;else e:for(s=x;_!==null;){if(a=_,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:pl(9,a)}}catch(k){ge(a,a.return,k)}if(a===s){_=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,_=S;break e}_=a.return}}if(Z=i,lr(),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(ol,e)}catch{}r=!0}return r}finally{te=n,vt.transition=t}}return!1}function vh(e,t,n){t=Di(n,t),t=bx(e,t,1),e=Kn(e,t,1),t=Ge(),e!==null&&(as(e,1,t),tt(e,t))}function ge(e,t,n){if(e.tag===3)vh(e,e,n);else for(;t!==null;){if(t.tag===3){vh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yn===null||!Yn.has(r))){e=Di(n,e),e=Sx(t,e,1),t=Kn(t,e,1),e=Ge(),t!==null&&(as(t,1,e),tt(t,e));break}}t=t.return}}function G5(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ge(),e.pingedLanes|=e.suspendedLanes&n,Te===e&&(Re&n)===n&&(Ee===4||Ee===3&&(Re&130023424)===Re&&500>xe()-ef?Nr(e,0):Jd|=n),tt(e,t)}function $x(e,t){t===0&&(e.mode&1?(t=Ns,Ns<<=1,!(Ns&130023424)&&(Ns=4194304)):t=1);var n=Ge();e=pn(e,t),e!==null&&(as(e,t,n),tt(e,n))}function K5(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),$x(e,n)}function Y5(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(t),$x(e,n)}var Ux;Ux=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Je.current)Ze=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ze=!1,O5(e,t,n);Ze=!!(e.flags&131072)}else Ze=!1,ce&&t.flags&1048576&&K0(t,Na,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;sa(e,t),e=t.pendingProps;var i=Ni(t,_e.current);mi(t,n),i=Kd(null,t,r,e,i,n);var o=Yd();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,et(r)?(o=!0,Ta(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,$d(t),i.updater=fl,t.stateNode=i,i._reactInternals=t,mu(t,r,e,n),t=vu(null,t,r,!0,o,n)):(t.tag=0,ce&&o&&Od(t),Be(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(sa(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Q5(r),e=Nt(r,e),i){case 0:t=xu(null,t,r,e,n);break e;case 1:t=lh(null,t,r,e,n);break e;case 11:t=sh(null,t,r,e,n);break e;case 14:t=ah(null,t,r,Nt(r.type,e),n);break e}throw Error(M(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nt(r,i),xu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nt(r,i),lh(e,t,r,i,n);case 3:e:{if(jx(t),e===null)throw Error(M(387));r=t.pendingProps,o=t.memoizedState,i=o.element,J0(e,t),Ma(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Di(Error(M(423)),t),t=ch(e,t,r,n,i);break e}else if(r!==i){i=Di(Error(M(424)),t),t=ch(e,t,r,n,i);break e}else for(ot=Gn(t.stateNode.containerInfo.firstChild),st=t,ce=!0,Lt=null,n=X0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ri(),r===i){t=hn(e,t,n);break e}Be(e,t,r,n)}t=t.child}return t;case 5:return ex(t),e===null&&fu(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,au(r,i)?s=null:o!==null&&au(r,o)&&(t.flags|=32),Ex(e,t),Be(e,t,s,n),t.child;case 6:return e===null&&fu(t),null;case 13:return Tx(e,t,n);case 4:return Ud(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ai(t,null,r,n):Be(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nt(r,i),sh(e,t,r,i,n);case 7:return Be(e,t,t.pendingProps,n),t.child;case 8:return Be(e,t,t.pendingProps.children,n),t.child;case 12:return Be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,re(Ra,r._currentValue),r._currentValue=s,o!==null)if(zt(o.value,s)){if(o.children===i.children&&!Je.current){t=hn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=un(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),pu(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(M(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),pu(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Be(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,mi(t,n),i=wt(i),r=r(i),t.flags|=1,Be(e,t,r,n),t.child;case 14:return r=t.type,i=Nt(r,t.pendingProps),i=Nt(r.type,i),ah(e,t,r,i,n);case 15:return kx(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nt(r,i),sa(e,t),t.tag=1,et(r)?(e=!0,Ta(t)):e=!1,mi(t,n),wx(t,r,i),mu(t,r,i,n),vu(null,t,r,!0,e,n);case 19:return Px(e,t,n);case 22:return Cx(e,t,n)}throw Error(M(156,t.tag))};function Wx(e,t){return x0(e,t)}function q5(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,t,n,r){return new q5(e,t,n,r)}function of(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Q5(e){if(typeof e=="function")return of(e)?1:0;if(e!=null){if(e=e.$$typeof,e===kd)return 11;if(e===Cd)return 14}return 2}function Qn(e,t){var n=e.alternate;return n===null?(n=gt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ca(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")of(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Qr:return Rr(n.children,i,o,t);case Sd:s=8,i|=8;break;case _c:return e=gt(12,n,t,i|2),e.elementType=_c,e.lanes=o,e;case Vc:return e=gt(13,n,t,i),e.elementType=Vc,e.lanes=o,e;case Bc:return e=gt(19,n,t,i),e.elementType=Bc,e.lanes=o,e;case e0:return ml(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Zg:s=10;break e;case Jg:s=9;break e;case kd:s=11;break e;case Cd:s=14;break e;case Rn:s=16,r=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=gt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Rr(e,t,n,r){return e=gt(7,e,r,t),e.lanes=n,e}function ml(e,t,n,r){return e=gt(22,e,r,t),e.elementType=e0,e.lanes=n,e.stateNode={isHidden:!1},e}function dc(e,t,n){return e=gt(6,e,null,t),e.lanes=n,e}function fc(e,t,n){return t=gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function X5(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gl(0),this.expirationTimes=Gl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function sf(e,t,n,r,i,o,s,a,l){return e=new X5(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=gt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$d(o),e}function Z5(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Hx(e){if(!e)return Jn;e=e._reactInternals;e:{if(_r(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(et(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var n=e.type;if(et(n))return H0(e,n,t)}return t}function Gx(e,t,n,r,i,o,s,a,l){return e=sf(n,r,!0,e,i,o,s,a,l),e.context=Hx(null),n=e.current,r=Ge(),i=qn(n),o=un(r,i),o.callback=t??null,Kn(n,o,i),e.current.lanes=i,as(e,i,r),tt(e,r),e}function gl(e,t,n,r){var i=t.current,o=Ge(),s=qn(i);return n=Hx(n),t.context===null?t.context=n:t.pendingContext=n,t=un(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Kn(i,t,s),e!==null&&(It(e,i,s,o),ra(e,i,s)),s}function Va(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function yh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function af(e,t){yh(e,t),(e=e.alternate)&&yh(e,t)}function J5(){return null}var Kx=typeof reportError=="function"?reportError:function(e){console.error(e)};function lf(e){this._internalRoot=e}xl.prototype.render=lf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));gl(e,t,null,null)};xl.prototype.unmount=lf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ir(function(){gl(null,e,null,null)}),t[fn]=null}};function xl(e){this._internalRoot=e}xl.prototype.unstable_scheduleHydration=function(e){if(e){var t=C0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Mn.length&&t!==0&&t<Mn[n].priority;n++);Mn.splice(n,0,e),n===0&&j0(e)}};function cf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wh(){}function e2(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Va(s);o.call(u)}}var s=Gx(t,r,e,0,null,!1,!1,"",wh);return e._reactRootContainer=s,e[fn]=s.current,Fo(e.nodeType===8?e.parentNode:e),Ir(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Va(l);a.call(u)}}var l=sf(e,0,!1,null,null,!1,!1,"",wh);return e._reactRootContainer=l,e[fn]=l.current,Fo(e.nodeType===8?e.parentNode:e),Ir(function(){gl(t,l,n,r)}),l}function yl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Va(s);a.call(l)}}gl(t,s,e,i)}else s=e2(n,t,e,i,r);return Va(s)}S0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=uo(t.pendingLanes);n!==0&&(Td(t,n|1),tt(t,xe()),!(Z&6)&&(Li=xe()+500,lr()))}break;case 13:Ir(function(){var r=pn(e,1);if(r!==null){var i=Ge();It(r,e,1,i)}}),af(e,1)}};Pd=function(e){if(e.tag===13){var t=pn(e,134217728);if(t!==null){var n=Ge();It(t,e,134217728,n)}af(e,134217728)}};k0=function(e){if(e.tag===13){var t=qn(e),n=pn(e,t);if(n!==null){var r=Ge();It(n,e,t,r)}af(e,t)}};C0=function(){return te};E0=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};Xc=function(e,t,n){switch(t){case"input":if(Wc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=cl(r);if(!i)throw Error(M(90));n0(r),Wc(r,i)}}}break;case"textarea":i0(e,n);break;case"select":t=n.value,t!=null&&di(e,!!n.multiple,t,!1)}};d0=tf;f0=Ir;var t2={usingClientEntryPoint:!1,Events:[cs,ei,cl,c0,u0,tf]},io={findFiberByHostInstance:vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},n2={bundleType:io.bundleType,version:io.version,rendererPackageName:io.rendererPackageName,rendererConfig:io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=m0(e),e===null?null:e.stateNode},findFiberByHostInstance:io.findFiberByHostInstance||J5,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vs.isDisabled&&Vs.supportsFiber)try{ol=Vs.inject(n2),Yt=Vs}catch{}}ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=t2;ct.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cf(t))throw Error(M(200));return Z5(e,t,null,n)};ct.createRoot=function(e,t){if(!cf(e))throw Error(M(299));var n=!1,r="",i=Kx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=sf(e,1,!1,null,null,n,!1,r,i),e[fn]=t.current,Fo(e.nodeType===8?e.parentNode:e),new lf(t)};ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=m0(t),e=e===null?null:e.stateNode,e};ct.flushSync=function(e){return Ir(e)};ct.hydrate=function(e,t,n){if(!vl(t))throw Error(M(200));return yl(null,e,t,!0,n)};ct.hydrateRoot=function(e,t,n){if(!cf(e))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Kx;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Gx(t,null,e,1,n??null,i,!1,o,s),e[fn]=t.current,Fo(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new xl(t)};ct.render=function(e,t,n){if(!vl(t))throw Error(M(200));return yl(null,e,t,!1,n)};ct.unmountComponentAtNode=function(e){if(!vl(e))throw Error(M(40));return e._reactRootContainer?(Ir(function(){yl(null,null,e,!1,function(){e._reactRootContainer=null,e[fn]=null})}),!0):!1};ct.unstable_batchedUpdates=tf;ct.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!vl(n))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return yl(e,t,n,!1,r)};ct.version="18.3.1-next-f1338f8080-20240426";function Yx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yx)}catch(e){console.error(e)}}Yx(),Yg.exports=ct;var ds=Yg.exports;const qx=Og(ds);var Qx,bh=ds;Qx=bh.createRoot,bh.hydrateRoot;const r2=1,i2=1e6;let pc=0;function o2(){return pc=(pc+1)%Number.MAX_SAFE_INTEGER,pc.toString()}const hc=new Map,Sh=e=>{if(hc.has(e))return;const t=setTimeout(()=>{hc.delete(e),Eo({type:"REMOVE_TOAST",toastId:e})},i2);hc.set(e,t)},s2=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,r2)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(n=>n.id===t.toast.id?{...n,...t.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=t;return n?Sh(n):e.toasts.forEach(r=>{Sh(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===n||n===void 0?{...r,open:!1}:r)}}case"REMOVE_TOAST":return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(n=>n.id!==t.toastId)}}},ua=[];let da={toasts:[]};function Eo(e){da=s2(da,e),ua.forEach(t=>{t(da)})}function a2({...e}){const t=o2(),n=i=>Eo({type:"UPDATE_TOAST",toast:{...i,id:t}}),r=()=>Eo({type:"DISMISS_TOAST",toastId:t});return Eo({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:i=>{i||r()}}}),{id:t,dismiss:r,update:n}}function l2(){const[e,t]=w.useState(da);return w.useEffect(()=>(ua.push(t),()=>{const n=ua.indexOf(t);n>-1&&ua.splice(n,1)}),[e]),{...e,toast:a2,dismiss:n=>Eo({type:"DISMISS_TOAST",toastId:n})}}function Ce(e,t,{checkForDefaultPrevented:n=!0}={}){return function(i){if(e==null||e(i),n===!1||!i.defaultPrevented)return t==null?void 0:t(i)}}function kh(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function Xx(...e){return t=>{let n=!1;const r=e.map(i=>{const o=kh(i,t);return!n&&typeof o=="function"&&(n=!0),o});if(n)return()=>{for(let i=0;i<r.length;i++){const o=r[i];typeof o=="function"?o():kh(e[i],null)}}}}function Ft(...e){return w.useCallback(Xx(...e),e)}function wl(e,t=[]){let n=[];function r(o,s){const a=w.createContext(s),l=n.length;n=[...n,s];const u=f=>{var g;const{scope:p,children:h,...b}=f,m=((g=p==null?void 0:p[e])==null?void 0:g[l])||a,y=w.useMemo(()=>b,Object.values(b));return c.jsx(m.Provider,{value:y,children:h})};u.displayName=o+"Provider";function d(f,p){var m;const h=((m=p==null?void 0:p[e])==null?void 0:m[l])||a,b=w.useContext(h);if(b)return b;if(s!==void 0)return s;throw new Error(`\`${f}\` must be used within \`${o}\``)}return[u,d]}const i=()=>{const o=n.map(s=>w.createContext(s));return function(a){const l=(a==null?void 0:a[e])||o;return w.useMemo(()=>({[`__scope${e}`]:{...a,[e]:l}}),[a,l])}};return i.scopeName=e,[r,c2(i,...t)]}function c2(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(o){const s=r.reduce((a,{useScope:l,scopeName:u})=>{const f=l(o)[`__scope${u}`];return{...a,...f}},{});return w.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return n.scopeName=t.scopeName,n}function Ba(e){const t=d2(e),n=w.forwardRef((r,i)=>{const{children:o,...s}=r,a=w.Children.toArray(o),l=a.find(p2);if(l){const u=l.props.children,d=a.map(f=>f===l?w.Children.count(u)>1?w.Children.only(null):w.isValidElement(u)?u.props.children:null:f);return c.jsx(t,{...s,ref:i,children:w.isValidElement(u)?w.cloneElement(u,void 0,d):null})}return c.jsx(t,{...s,ref:i,children:o})});return n.displayName=`${e}.Slot`,n}var u2=Ba("Slot");function d2(e){const t=w.forwardRef((n,r)=>{const{children:i,...o}=n;if(w.isValidElement(i)){const s=m2(i),a=h2(o,i.props);return i.type!==w.Fragment&&(a.ref=r?Xx(r,s):s),w.cloneElement(i,a)}return w.Children.count(i)>1?w.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var Zx=Symbol("radix.slottable");function f2(e){const t=({children:n})=>c.jsx(c.Fragment,{children:n});return t.displayName=`${e}.Slottable`,t.__radixId=Zx,t}function p2(e){return w.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Zx}function h2(e,t){const n={...t};for(const r in t){const i=e[r],o=t[r];/^on[A-Z]/.test(r)?i&&o?n[r]=(...a)=>{const l=o(...a);return i(...a),l}:i&&(n[r]=i):r==="style"?n[r]={...i,...o}:r==="className"&&(n[r]=[i,o].filter(Boolean).join(" "))}return{...e,...n}}function m2(e){var r,i;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function g2(e){const t=e+"CollectionProvider",[n,r]=wl(t),[i,o]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=m=>{const{scope:y,children:g}=m,x=D.useRef(null),v=D.useRef(new Map).current;return c.jsx(i,{scope:y,itemMap:v,collectionRef:x,children:g})};s.displayName=t;const a=e+"CollectionSlot",l=Ba(a),u=D.forwardRef((m,y)=>{const{scope:g,children:x}=m,v=o(a,g),S=Ft(y,v.collectionRef);return c.jsx(l,{ref:S,children:x})});u.displayName=a;const d=e+"CollectionItemSlot",f="data-radix-collection-item",p=Ba(d),h=D.forwardRef((m,y)=>{const{scope:g,children:x,...v}=m,S=D.useRef(null),k=Ft(y,S),C=o(d,g);return D.useEffect(()=>(C.itemMap.set(S,{ref:S,...v}),()=>void C.itemMap.delete(S))),c.jsx(p,{[f]:"",ref:k,children:x})});h.displayName=d;function b(m){const y=o(e+"CollectionConsumer",m);return D.useCallback(()=>{const x=y.collectionRef.current;if(!x)return[];const v=Array.from(x.querySelectorAll(`[${f}]`));return Array.from(y.itemMap.values()).sort((C,E)=>v.indexOf(C.ref.current)-v.indexOf(E.ref.current))},[y.collectionRef,y.itemMap])}return[{Provider:s,Slot:u,ItemSlot:h},b,r]}var x2=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],nt=x2.reduce((e,t)=>{const n=Ba(`Primitive.${t}`),r=w.forwardRef((i,o)=>{const{asChild:s,...a}=i,l=s?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),c.jsx(l,{...a,ref:o})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function Jx(e,t){e&&ds.flushSync(()=>e.dispatchEvent(t))}function er(e){const t=w.useRef(e);return w.useEffect(()=>{t.current=e}),w.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function v2(e,t=globalThis==null?void 0:globalThis.document){const n=er(e);w.useEffect(()=>{const r=i=>{i.key==="Escape"&&n(i)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var y2="DismissableLayer",Ru="dismissableLayer.update",w2="dismissableLayer.pointerDownOutside",b2="dismissableLayer.focusOutside",Ch,ev=w.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),uf=w.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:i,onFocusOutside:o,onInteractOutside:s,onDismiss:a,...l}=e,u=w.useContext(ev),[d,f]=w.useState(null),p=(d==null?void 0:d.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,h]=w.useState({}),b=Ft(t,E=>f(E)),m=Array.from(u.layers),[y]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),g=m.indexOf(y),x=d?m.indexOf(d):-1,v=u.layersWithOutsidePointerEventsDisabled.size>0,S=x>=g,k=k2(E=>{const j=E.target,T=[...u.branches].some(A=>A.contains(j));!S||T||(i==null||i(E),s==null||s(E),E.defaultPrevented||a==null||a())},p),C=C2(E=>{const j=E.target;[...u.branches].some(A=>A.contains(j))||(o==null||o(E),s==null||s(E),E.defaultPrevented||a==null||a())},p);return v2(E=>{x===u.layers.size-1&&(r==null||r(E),!E.defaultPrevented&&a&&(E.preventDefault(),a()))},p),w.useEffect(()=>{if(d)return n&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(Ch=p.body.style.pointerEvents,p.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(d)),u.layers.add(d),Eh(),()=>{n&&u.layersWithOutsidePointerEventsDisabled.size===1&&(p.body.style.pointerEvents=Ch)}},[d,p,n,u]),w.useEffect(()=>()=>{d&&(u.layers.delete(d),u.layersWithOutsidePointerEventsDisabled.delete(d),Eh())},[d,u]),w.useEffect(()=>{const E=()=>h({});return document.addEventListener(Ru,E),()=>document.removeEventListener(Ru,E)},[]),c.jsx(nt.div,{...l,ref:b,style:{pointerEvents:v?S?"auto":"none":void 0,...e.style},onFocusCapture:Ce(e.onFocusCapture,C.onFocusCapture),onBlurCapture:Ce(e.onBlurCapture,C.onBlurCapture),onPointerDownCapture:Ce(e.onPointerDownCapture,k.onPointerDownCapture)})});uf.displayName=y2;var S2="DismissableLayerBranch",tv=w.forwardRef((e,t)=>{const n=w.useContext(ev),r=w.useRef(null),i=Ft(t,r);return w.useEffect(()=>{const o=r.current;if(o)return n.branches.add(o),()=>{n.branches.delete(o)}},[n.branches]),c.jsx(nt.div,{...e,ref:i})});tv.displayName=S2;function k2(e,t=globalThis==null?void 0:globalThis.document){const n=er(e),r=w.useRef(!1),i=w.useRef(()=>{});return w.useEffect(()=>{const o=a=>{if(a.target&&!r.current){let l=function(){nv(w2,n,u,{discrete:!0})};const u={originalEvent:a};a.pointerType==="touch"?(t.removeEventListener("click",i.current),i.current=l,t.addEventListener("click",i.current,{once:!0})):l()}else t.removeEventListener("click",i.current);r.current=!1},s=window.setTimeout(()=>{t.addEventListener("pointerdown",o)},0);return()=>{window.clearTimeout(s),t.removeEventListener("pointerdown",o),t.removeEventListener("click",i.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function C2(e,t=globalThis==null?void 0:globalThis.document){const n=er(e),r=w.useRef(!1);return w.useEffect(()=>{const i=o=>{o.target&&!r.current&&nv(b2,n,{originalEvent:o},{discrete:!1})};return t.addEventListener("focusin",i),()=>t.removeEventListener("focusin",i)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function Eh(){const e=new CustomEvent(Ru);document.dispatchEvent(e)}function nv(e,t,n,{discrete:r}){const i=n.originalEvent.target,o=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),r?Jx(i,o):i.dispatchEvent(o)}var E2=uf,j2=tv,tr=globalThis!=null&&globalThis.document?w.useLayoutEffect:()=>{},T2="Portal",rv=w.forwardRef((e,t)=>{var a;const{container:n,...r}=e,[i,o]=w.useState(!1);tr(()=>o(!0),[]);const s=n||i&&((a=globalThis==null?void 0:globalThis.document)==null?void 0:a.body);return s?qx.createPortal(c.jsx(nt.div,{...r,ref:t}),s):null});rv.displayName=T2;function P2(e,t){return w.useReducer((n,r)=>t[n][r]??n,e)}var df=e=>{const{present:t,children:n}=e,r=N2(t),i=typeof n=="function"?n({present:r.isPresent}):w.Children.only(n),o=Ft(r.ref,R2(i));return typeof n=="function"||r.isPresent?w.cloneElement(i,{ref:o}):null};df.displayName="Presence";function N2(e){const[t,n]=w.useState(),r=w.useRef(null),i=w.useRef(e),o=w.useRef("none"),s=e?"mounted":"unmounted",[a,l]=P2(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return w.useEffect(()=>{const u=Bs(r.current);o.current=a==="mounted"?u:"none"},[a]),tr(()=>{const u=r.current,d=i.current;if(d!==e){const p=o.current,h=Bs(u);e?l("MOUNT"):h==="none"||(u==null?void 0:u.display)==="none"?l("UNMOUNT"):l(d&&p!==h?"ANIMATION_OUT":"UNMOUNT"),i.current=e}},[e,l]),tr(()=>{if(t){let u;const d=t.ownerDocument.defaultView??window,f=h=>{const m=Bs(r.current).includes(h.animationName);if(h.target===t&&m&&(l("ANIMATION_END"),!i.current)){const y=t.style.animationFillMode;t.style.animationFillMode="forwards",u=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=y)})}},p=h=>{h.target===t&&(o.current=Bs(r.current))};return t.addEventListener("animationstart",p),t.addEventListener("animationcancel",f),t.addEventListener("animationend",f),()=>{d.clearTimeout(u),t.removeEventListener("animationstart",p),t.removeEventListener("animationcancel",f),t.removeEventListener("animationend",f)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:w.useCallback(u=>{r.current=u?getComputedStyle(u):null,n(u)},[])}}function Bs(e){return(e==null?void 0:e.animationName)||"none"}function R2(e){var r,i;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var A2=Gg[" useInsertionEffect ".trim().toString()]||tr;function M2({prop:e,defaultProp:t,onChange:n=()=>{},caller:r}){const[i,o,s]=D2({defaultProp:t,onChange:n}),a=e!==void 0,l=a?e:i;{const d=w.useRef(e!==void 0);w.useEffect(()=>{const f=d.current;f!==a&&console.warn(`${r} is changing from ${f?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),d.current=a},[a,r])}const u=w.useCallback(d=>{var f;if(a){const p=L2(d)?d(e):d;p!==e&&((f=s.current)==null||f.call(s,p))}else o(d)},[a,e,o,s]);return[l,u]}function D2({defaultProp:e,onChange:t}){const[n,r]=w.useState(e),i=w.useRef(n),o=w.useRef(t);return A2(()=>{o.current=t},[t]),w.useEffect(()=>{var s;i.current!==n&&((s=o.current)==null||s.call(o,n),i.current=n)},[n,i]),[n,r,o]}function L2(e){return typeof e=="function"}var O2=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),I2="VisuallyHidden",bl=w.forwardRef((e,t)=>c.jsx(nt.span,{...e,ref:t,style:{...O2,...e.style}}));bl.displayName=I2;var z2=bl,ff="ToastProvider",[pf,F2,_2]=g2("Toast"),[iv,rA]=wl("Toast",[_2]),[V2,Sl]=iv(ff),ov=e=>{const{__scopeToast:t,label:n="Notification",duration:r=5e3,swipeDirection:i="right",swipeThreshold:o=50,children:s}=e,[a,l]=w.useState(null),[u,d]=w.useState(0),f=w.useRef(!1),p=w.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${ff}\`. Expected non-empty \`string\`.`),c.jsx(pf.Provider,{scope:t,children:c.jsx(V2,{scope:t,label:n,duration:r,swipeDirection:i,swipeThreshold:o,toastCount:u,viewport:a,onViewportChange:l,onToastAdd:w.useCallback(()=>d(h=>h+1),[]),onToastRemove:w.useCallback(()=>d(h=>h-1),[]),isFocusedToastEscapeKeyDownRef:f,isClosePausedRef:p,children:s})})};ov.displayName=ff;var sv="ToastViewport",B2=["F8"],Au="toast.viewportPause",Mu="toast.viewportResume",av=w.forwardRef((e,t)=>{const{__scopeToast:n,hotkey:r=B2,label:i="Notifications ({hotkey})",...o}=e,s=Sl(sv,n),a=F2(n),l=w.useRef(null),u=w.useRef(null),d=w.useRef(null),f=w.useRef(null),p=Ft(t,f,s.onViewportChange),h=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),b=s.toastCount>0;w.useEffect(()=>{const y=g=>{var v;r.length!==0&&r.every(S=>g[S]||g.code===S)&&((v=f.current)==null||v.focus())};return document.addEventListener("keydown",y),()=>document.removeEventListener("keydown",y)},[r]),w.useEffect(()=>{const y=l.current,g=f.current;if(b&&y&&g){const x=()=>{if(!s.isClosePausedRef.current){const C=new CustomEvent(Au);g.dispatchEvent(C),s.isClosePausedRef.current=!0}},v=()=>{if(s.isClosePausedRef.current){const C=new CustomEvent(Mu);g.dispatchEvent(C),s.isClosePausedRef.current=!1}},S=C=>{!y.contains(C.relatedTarget)&&v()},k=()=>{y.contains(document.activeElement)||v()};return y.addEventListener("focusin",x),y.addEventListener("focusout",S),y.addEventListener("pointermove",x),y.addEventListener("pointerleave",k),window.addEventListener("blur",x),window.addEventListener("focus",v),()=>{y.removeEventListener("focusin",x),y.removeEventListener("focusout",S),y.removeEventListener("pointermove",x),y.removeEventListener("pointerleave",k),window.removeEventListener("blur",x),window.removeEventListener("focus",v)}}},[b,s.isClosePausedRef]);const m=w.useCallback(({tabbingDirection:y})=>{const x=a().map(v=>{const S=v.ref.current,k=[S,...eS(S)];return y==="forwards"?k:k.reverse()});return(y==="forwards"?x.reverse():x).flat()},[a]);return w.useEffect(()=>{const y=f.current;if(y){const g=x=>{var k,C,E;const v=x.altKey||x.ctrlKey||x.metaKey;if(x.key==="Tab"&&!v){const j=document.activeElement,T=x.shiftKey;if(x.target===y&&T){(k=u.current)==null||k.focus();return}const O=m({tabbingDirection:T?"backwards":"forwards"}),K=O.findIndex(I=>I===j);mc(O.slice(K+1))?x.preventDefault():T?(C=u.current)==null||C.focus():(E=d.current)==null||E.focus()}};return y.addEventListener("keydown",g),()=>y.removeEventListener("keydown",g)}},[a,m]),c.jsxs(j2,{ref:l,role:"region","aria-label":i.replace("{hotkey}",h),tabIndex:-1,style:{pointerEvents:b?void 0:"none"},children:[b&&c.jsx(Du,{ref:u,onFocusFromOutsideViewport:()=>{const y=m({tabbingDirection:"forwards"});mc(y)}}),c.jsx(pf.Slot,{scope:n,children:c.jsx(nt.ol,{tabIndex:-1,...o,ref:p})}),b&&c.jsx(Du,{ref:d,onFocusFromOutsideViewport:()=>{const y=m({tabbingDirection:"backwards"});mc(y)}})]})});av.displayName=sv;var lv="ToastFocusProxy",Du=w.forwardRef((e,t)=>{const{__scopeToast:n,onFocusFromOutsideViewport:r,...i}=e,o=Sl(lv,n);return c.jsx(bl,{"aria-hidden":!0,tabIndex:0,...i,ref:t,style:{position:"fixed"},onFocus:s=>{var u;const a=s.relatedTarget;!((u=o.viewport)!=null&&u.contains(a))&&r()}})});Du.displayName=lv;var fs="Toast",$2="toast.swipeStart",U2="toast.swipeMove",W2="toast.swipeCancel",H2="toast.swipeEnd",cv=w.forwardRef((e,t)=>{const{forceMount:n,open:r,defaultOpen:i,onOpenChange:o,...s}=e,[a,l]=M2({prop:r,defaultProp:i??!0,onChange:o,caller:fs});return c.jsx(df,{present:n||a,children:c.jsx(Y2,{open:a,...s,ref:t,onClose:()=>l(!1),onPause:er(e.onPause),onResume:er(e.onResume),onSwipeStart:Ce(e.onSwipeStart,u=>{u.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:Ce(e.onSwipeMove,u=>{const{x:d,y:f}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","move"),u.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${d}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${f}px`)}),onSwipeCancel:Ce(e.onSwipeCancel,u=>{u.currentTarget.setAttribute("data-swipe","cancel"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:Ce(e.onSwipeEnd,u=>{const{x:d,y:f}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","end"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${d}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${f}px`),l(!1)})})})});cv.displayName=fs;var[G2,K2]=iv(fs,{onClose(){}}),Y2=w.forwardRef((e,t)=>{const{__scopeToast:n,type:r="foreground",duration:i,open:o,onClose:s,onEscapeKeyDown:a,onPause:l,onResume:u,onSwipeStart:d,onSwipeMove:f,onSwipeCancel:p,onSwipeEnd:h,...b}=e,m=Sl(fs,n),[y,g]=w.useState(null),x=Ft(t,I=>g(I)),v=w.useRef(null),S=w.useRef(null),k=i||m.duration,C=w.useRef(0),E=w.useRef(k),j=w.useRef(0),{onToastAdd:T,onToastRemove:A}=m,L=er(()=>{var Y;(y==null?void 0:y.contains(document.activeElement))&&((Y=m.viewport)==null||Y.focus()),s()}),O=w.useCallback(I=>{!I||I===1/0||(window.clearTimeout(j.current),C.current=new Date().getTime(),j.current=window.setTimeout(L,I))},[L]);w.useEffect(()=>{const I=m.viewport;if(I){const Y=()=>{O(E.current),u==null||u()},$=()=>{const V=new Date().getTime()-C.current;E.current=E.current-V,window.clearTimeout(j.current),l==null||l()};return I.addEventListener(Au,$),I.addEventListener(Mu,Y),()=>{I.removeEventListener(Au,$),I.removeEventListener(Mu,Y)}}},[m.viewport,k,l,u,O]),w.useEffect(()=>{o&&!m.isClosePausedRef.current&&O(k)},[o,k,m.isClosePausedRef,O]),w.useEffect(()=>(T(),()=>A()),[T,A]);const K=w.useMemo(()=>y?gv(y):null,[y]);return m.viewport?c.jsxs(c.Fragment,{children:[K&&c.jsx(q2,{__scopeToast:n,role:"status","aria-live":r==="foreground"?"assertive":"polite","aria-atomic":!0,children:K}),c.jsx(G2,{scope:n,onClose:L,children:ds.createPortal(c.jsx(pf.ItemSlot,{scope:n,children:c.jsx(E2,{asChild:!0,onEscapeKeyDown:Ce(a,()=>{m.isFocusedToastEscapeKeyDownRef.current||L(),m.isFocusedToastEscapeKeyDownRef.current=!1}),children:c.jsx(nt.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":o?"open":"closed","data-swipe-direction":m.swipeDirection,...b,ref:x,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:Ce(e.onKeyDown,I=>{I.key==="Escape"&&(a==null||a(I.nativeEvent),I.nativeEvent.defaultPrevented||(m.isFocusedToastEscapeKeyDownRef.current=!0,L()))}),onPointerDown:Ce(e.onPointerDown,I=>{I.button===0&&(v.current={x:I.clientX,y:I.clientY})}),onPointerMove:Ce(e.onPointerMove,I=>{if(!v.current)return;const Y=I.clientX-v.current.x,$=I.clientY-v.current.y,V=!!S.current,P=["left","right"].includes(m.swipeDirection),R=["left","up"].includes(m.swipeDirection)?Math.min:Math.max,z=P?R(0,Y):0,U=P?0:R(0,$),B=I.pointerType==="touch"?10:2,q={x:z,y:U},X={originalEvent:I,delta:q};V?(S.current=q,$s(U2,f,X,{discrete:!1})):jh(q,m.swipeDirection,B)?(S.current=q,$s($2,d,X,{discrete:!1}),I.target.setPointerCapture(I.pointerId)):(Math.abs(Y)>B||Math.abs($)>B)&&(v.current=null)}),onPointerUp:Ce(e.onPointerUp,I=>{const Y=S.current,$=I.target;if($.hasPointerCapture(I.pointerId)&&$.releasePointerCapture(I.pointerId),S.current=null,v.current=null,Y){const V=I.currentTarget,P={originalEvent:I,delta:Y};jh(Y,m.swipeDirection,m.swipeThreshold)?$s(H2,h,P,{discrete:!0}):$s(W2,p,P,{discrete:!0}),V.addEventListener("click",R=>R.preventDefault(),{once:!0})}})})})}),m.viewport)})]}):null}),q2=e=>{const{__scopeToast:t,children:n,...r}=e,i=Sl(fs,t),[o,s]=w.useState(!1),[a,l]=w.useState(!1);return Z2(()=>s(!0)),w.useEffect(()=>{const u=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(u)},[]),a?null:c.jsx(rv,{asChild:!0,children:c.jsx(bl,{...r,children:o&&c.jsxs(c.Fragment,{children:[i.label," ",n]})})})},Q2="ToastTitle",uv=w.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return c.jsx(nt.div,{...r,ref:t})});uv.displayName=Q2;var X2="ToastDescription",dv=w.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return c.jsx(nt.div,{...r,ref:t})});dv.displayName=X2;var fv="ToastAction",pv=w.forwardRef((e,t)=>{const{altText:n,...r}=e;return n.trim()?c.jsx(mv,{altText:n,asChild:!0,children:c.jsx(hf,{...r,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${fv}\`. Expected non-empty \`string\`.`),null)});pv.displayName=fv;var hv="ToastClose",hf=w.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e,i=K2(hv,n);return c.jsx(mv,{asChild:!0,children:c.jsx(nt.button,{type:"button",...r,ref:t,onClick:Ce(e.onClick,i.onClose)})})});hf.displayName=hv;var mv=w.forwardRef((e,t)=>{const{__scopeToast:n,altText:r,...i}=e;return c.jsx(nt.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0,...i,ref:t})});function gv(e){const t=[];return Array.from(e.childNodes).forEach(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent&&t.push(r.textContent),J2(r)){const i=r.ariaHidden||r.hidden||r.style.display==="none",o=r.dataset.radixToastAnnounceExclude==="";if(!i)if(o){const s=r.dataset.radixToastAnnounceAlt;s&&t.push(s)}else t.push(...gv(r))}}),t}function $s(e,t,n,{discrete:r}){const i=n.originalEvent.currentTarget,o=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),r?Jx(i,o):i.dispatchEvent(o)}var jh=(e,t,n=0)=>{const r=Math.abs(e.x),i=Math.abs(e.y),o=r>i;return t==="left"||t==="right"?o&&r>n:!o&&i>n};function Z2(e=()=>{}){const t=er(e);tr(()=>{let n=0,r=0;return n=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(r)}},[t])}function J2(e){return e.nodeType===e.ELEMENT_NODE}function eS(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const i=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||i?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function mc(e){const t=document.activeElement;return e.some(n=>n===t?!0:(n.focus(),document.activeElement!==t))}var tS=ov,xv=av,vv=cv,yv=uv,wv=dv,bv=pv,Sv=hf;function kv(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=kv(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Cv(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=kv(e))&&(r&&(r+=" "),r+=t);return r}const Th=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,Ph=Cv,Ev=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return Ph(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:i,defaultVariants:o}=t,s=Object.keys(i).map(u=>{const d=n==null?void 0:n[u],f=o==null?void 0:o[u];if(d===null)return null;const p=Th(d)||Th(f);return i[u][p]}),a=n&&Object.entries(n).reduce((u,d)=>{let[f,p]=d;return p===void 0||(u[f]=p),u},{}),l=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((u,d)=>{let{class:f,className:p,...h}=d;return Object.entries(h).every(b=>{let[m,y]=b;return Array.isArray(y)?y.includes({...o,...a}[m]):{...o,...a}[m]===y})?[...u,f,p]:u},[]);return Ph(e,s,l,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),jv=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var rS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=w.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:s,...a},l)=>w.createElement("svg",{ref:l,...rS,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:jv("lucide",i),...a},[...s.map(([u,d])=>w.createElement(u,d)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=(e,t)=>{const n=w.forwardRef(({className:r,...i},o)=>w.createElement(iS,{ref:o,iconNode:t,className:jv(`lucide-${nS(e)}`,r),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=qe("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=qe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=qe("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=qe("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=qe("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=qe("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=qe("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=qe("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=qe("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=qe("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=qe("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=qe("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=qe("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=qe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=qe("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),mf="-",hS=e=>{const t=gS(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:s=>{const a=s.split(mf);return a[0]===""&&a.length!==1&&a.shift(),Pv(a,t)||mS(s)},getConflictingClassGroupIds:(s,a)=>{const l=n[s]||[];return a&&r[s]?[...l,...r[s]]:l}}},Pv=(e,t)=>{var s;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),i=r?Pv(e.slice(1),r):void 0;if(i)return i;if(t.validators.length===0)return;const o=e.join(mf);return(s=t.validators.find(({validator:a})=>a(o)))==null?void 0:s.classGroupId},Ah=/^\[(.+)\]$/,mS=e=>{if(Ah.test(e)){const t=Ah.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},gS=e=>{const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return vS(Object.entries(e.classGroups),n).forEach(([o,s])=>{Iu(s,r,o,t)}),r},Iu=(e,t,n,r)=>{e.forEach(i=>{if(typeof i=="string"){const o=i===""?t:Mh(t,i);o.classGroupId=n;return}if(typeof i=="function"){if(xS(i)){Iu(i(r),t,n,r);return}t.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(([o,s])=>{Iu(s,Mh(t,o),n,r)})})},Mh=(e,t)=>{let n=e;return t.split(mf).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},xS=e=>e.isThemeGetter,vS=(e,t)=>t?e.map(([n,r])=>{const i=r.map(o=>typeof o=="string"?t+o:typeof o=="object"?Object.fromEntries(Object.entries(o).map(([s,a])=>[t+s,a])):o);return[n,i]}):e,yS=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const i=(o,s)=>{n.set(o,s),t++,t>e&&(t=0,r=n,n=new Map)};return{get(o){let s=n.get(o);if(s!==void 0)return s;if((s=r.get(o))!==void 0)return i(o,s),s},set(o,s){n.has(o)?n.set(o,s):i(o,s)}}},Nv="!",wS=e=>{const{separator:t,experimentalParseClassName:n}=e,r=t.length===1,i=t[0],o=t.length,s=a=>{const l=[];let u=0,d=0,f;for(let y=0;y<a.length;y++){let g=a[y];if(u===0){if(g===i&&(r||a.slice(y,y+o)===t)){l.push(a.slice(d,y)),d=y+o;continue}if(g==="/"){f=y;continue}}g==="["?u++:g==="]"&&u--}const p=l.length===0?a:a.substring(d),h=p.startsWith(Nv),b=h?p.substring(1):p,m=f&&f>d?f-d:void 0;return{modifiers:l,hasImportantModifier:h,baseClassName:b,maybePostfixModifierPosition:m}};return n?a=>n({className:a,parseClassName:s}):s},bS=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t},SS=e=>({cache:yS(e.cacheSize),parseClassName:wS(e),...hS(e)}),kS=/\s+/,CS=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i}=t,o=[],s=e.trim().split(kS);let a="";for(let l=s.length-1;l>=0;l-=1){const u=s[l],{modifiers:d,hasImportantModifier:f,baseClassName:p,maybePostfixModifierPosition:h}=n(u);let b=!!h,m=r(b?p.substring(0,h):p);if(!m){if(!b){a=u+(a.length>0?" "+a:a);continue}if(m=r(p),!m){a=u+(a.length>0?" "+a:a);continue}b=!1}const y=bS(d).join(":"),g=f?y+Nv:y,x=g+m;if(o.includes(x))continue;o.push(x);const v=i(m,b);for(let S=0;S<v.length;++S){const k=v[S];o.push(g+k)}a=u+(a.length>0?" "+a:a)}return a};function ES(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=Rv(t))&&(r&&(r+=" "),r+=n);return r}const Rv=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=Rv(e[r]))&&(n&&(n+=" "),n+=t);return n};function jS(e,...t){let n,r,i,o=s;function s(l){const u=t.reduce((d,f)=>f(d),e());return n=SS(u),r=n.cache.get,i=n.cache.set,o=a,a(l)}function a(l){const u=r(l);if(u)return u;const d=CS(l,n);return i(l,d),d}return function(){return o(ES.apply(null,arguments))}}const ie=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},Av=/^\[(?:([a-z-]+):)?(.+)\]$/i,TS=/^\d+\/\d+$/,PS=new Set(["px","full","screen"]),NS=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,RS=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,AS=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,MS=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,DS=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,nn=e=>xi(e)||PS.has(e)||TS.test(e),jn=e=>$i(e,"length",BS),xi=e=>!!e&&!Number.isNaN(Number(e)),gc=e=>$i(e,"number",xi),oo=e=>!!e&&Number.isInteger(Number(e)),LS=e=>e.endsWith("%")&&xi(e.slice(0,-1)),G=e=>Av.test(e),Tn=e=>NS.test(e),OS=new Set(["length","size","percentage"]),IS=e=>$i(e,OS,Mv),zS=e=>$i(e,"position",Mv),FS=new Set(["image","url"]),_S=e=>$i(e,FS,US),VS=e=>$i(e,"",$S),so=()=>!0,$i=(e,t,n)=>{const r=Av.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1},BS=e=>RS.test(e)&&!AS.test(e),Mv=()=>!1,$S=e=>MS.test(e),US=e=>DS.test(e),WS=()=>{const e=ie("colors"),t=ie("spacing"),n=ie("blur"),r=ie("brightness"),i=ie("borderColor"),o=ie("borderRadius"),s=ie("borderSpacing"),a=ie("borderWidth"),l=ie("contrast"),u=ie("grayscale"),d=ie("hueRotate"),f=ie("invert"),p=ie("gap"),h=ie("gradientColorStops"),b=ie("gradientColorStopPositions"),m=ie("inset"),y=ie("margin"),g=ie("opacity"),x=ie("padding"),v=ie("saturate"),S=ie("scale"),k=ie("sepia"),C=ie("skew"),E=ie("space"),j=ie("translate"),T=()=>["auto","contain","none"],A=()=>["auto","hidden","clip","visible","scroll"],L=()=>["auto",G,t],O=()=>[G,t],K=()=>["",nn,jn],I=()=>["auto",xi,G],Y=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],$=()=>["solid","dashed","dotted","double","none"],V=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],P=()=>["start","end","center","between","around","evenly","stretch"],R=()=>["","0",G],z=()=>["auto","avoid","all","avoid-page","page","left","right","column"],U=()=>[xi,G];return{cacheSize:500,separator:":",theme:{colors:[so],spacing:[nn,jn],blur:["none","",Tn,G],brightness:U(),borderColor:[e],borderRadius:["none","","full",Tn,G],borderSpacing:O(),borderWidth:K(),contrast:U(),grayscale:R(),hueRotate:U(),invert:R(),gap:O(),gradientColorStops:[e],gradientColorStopPositions:[LS,jn],inset:L(),margin:L(),opacity:U(),padding:O(),saturate:U(),scale:U(),sepia:R(),skew:U(),space:O(),translate:O()},classGroups:{aspect:[{aspect:["auto","square","video",G]}],container:["container"],columns:[{columns:[Tn]}],"break-after":[{"break-after":z()}],"break-before":[{"break-before":z()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Y(),G]}],overflow:[{overflow:A()}],"overflow-x":[{"overflow-x":A()}],"overflow-y":[{"overflow-y":A()}],overscroll:[{overscroll:T()}],"overscroll-x":[{"overscroll-x":T()}],"overscroll-y":[{"overscroll-y":T()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",oo,G]}],basis:[{basis:L()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",G]}],grow:[{grow:R()}],shrink:[{shrink:R()}],order:[{order:["first","last","none",oo,G]}],"grid-cols":[{"grid-cols":[so]}],"col-start-end":[{col:["auto",{span:["full",oo,G]},G]}],"col-start":[{"col-start":I()}],"col-end":[{"col-end":I()}],"grid-rows":[{"grid-rows":[so]}],"row-start-end":[{row:["auto",{span:[oo,G]},G]}],"row-start":[{"row-start":I()}],"row-end":[{"row-end":I()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",G]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",G]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...P()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...P(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...P(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[x]}],px:[{px:[x]}],py:[{py:[x]}],ps:[{ps:[x]}],pe:[{pe:[x]}],pt:[{pt:[x]}],pr:[{pr:[x]}],pb:[{pb:[x]}],pl:[{pl:[x]}],m:[{m:[y]}],mx:[{mx:[y]}],my:[{my:[y]}],ms:[{ms:[y]}],me:[{me:[y]}],mt:[{mt:[y]}],mr:[{mr:[y]}],mb:[{mb:[y]}],ml:[{ml:[y]}],"space-x":[{"space-x":[E]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[E]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",G,t]}],"min-w":[{"min-w":[G,t,"min","max","fit"]}],"max-w":[{"max-w":[G,t,"none","full","min","max","fit","prose",{screen:[Tn]},Tn]}],h:[{h:[G,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[G,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[G,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[G,t,"auto","min","max","fit"]}],"font-size":[{text:["base",Tn,jn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",gc]}],"font-family":[{font:[so]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",G]}],"line-clamp":[{"line-clamp":["none",xi,gc]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",nn,G]}],"list-image":[{"list-image":["none",G]}],"list-style-type":[{list:["none","disc","decimal",G]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[g]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[g]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...$(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",nn,jn]}],"underline-offset":[{"underline-offset":["auto",nn,G]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:O()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",G]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",G]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[g]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Y(),zS]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",IS]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},_S]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[b]}],"gradient-via-pos":[{via:[b]}],"gradient-to-pos":[{to:[b]}],"gradient-from":[{from:[h]}],"gradient-via":[{via:[h]}],"gradient-to":[{to:[h]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[g]}],"border-style":[{border:[...$(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[g]}],"divide-style":[{divide:$()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-s":[{"border-s":[i]}],"border-color-e":[{"border-e":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...$()]}],"outline-offset":[{"outline-offset":[nn,G]}],"outline-w":[{outline:[nn,jn]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:K()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[g]}],"ring-offset-w":[{"ring-offset":[nn,jn]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",Tn,VS]}],"shadow-color":[{shadow:[so]}],opacity:[{opacity:[g]}],"mix-blend":[{"mix-blend":[...V(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":V()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",Tn,G]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[f]}],saturate:[{saturate:[v]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[g]}],"backdrop-saturate":[{"backdrop-saturate":[v]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",G]}],duration:[{duration:U()}],ease:[{ease:["linear","in","out","in-out",G]}],delay:[{delay:U()}],animate:[{animate:["none","spin","ping","pulse","bounce",G]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[S]}],"scale-x":[{"scale-x":[S]}],"scale-y":[{"scale-y":[S]}],rotate:[{rotate:[oo,G]}],"translate-x":[{"translate-x":[j]}],"translate-y":[{"translate-y":[j]}],"skew-x":[{"skew-x":[C]}],"skew-y":[{"skew-y":[C]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",G]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",G]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":O()}],"scroll-mx":[{"scroll-mx":O()}],"scroll-my":[{"scroll-my":O()}],"scroll-ms":[{"scroll-ms":O()}],"scroll-me":[{"scroll-me":O()}],"scroll-mt":[{"scroll-mt":O()}],"scroll-mr":[{"scroll-mr":O()}],"scroll-mb":[{"scroll-mb":O()}],"scroll-ml":[{"scroll-ml":O()}],"scroll-p":[{"scroll-p":O()}],"scroll-px":[{"scroll-px":O()}],"scroll-py":[{"scroll-py":O()}],"scroll-ps":[{"scroll-ps":O()}],"scroll-pe":[{"scroll-pe":O()}],"scroll-pt":[{"scroll-pt":O()}],"scroll-pr":[{"scroll-pr":O()}],"scroll-pb":[{"scroll-pb":O()}],"scroll-pl":[{"scroll-pl":O()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",G]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[nn,jn,gc]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},HS=jS(WS);function cr(...e){return HS(Cv(e))}const GS=tS,Dv=w.forwardRef(({className:e,...t},n)=>c.jsx(xv,{ref:n,className:cr("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));Dv.displayName=xv.displayName;const KS=Ev("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),Lv=w.forwardRef(({className:e,variant:t,...n},r)=>c.jsx(vv,{ref:r,className:cr(KS({variant:t}),e),...n}));Lv.displayName=vv.displayName;const YS=w.forwardRef(({className:e,...t},n)=>c.jsx(bv,{ref:n,className:cr("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",e),...t}));YS.displayName=bv.displayName;const Ov=w.forwardRef(({className:e,...t},n)=>c.jsx(Sv,{ref:n,className:cr("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:c.jsx(Ou,{className:"h-4 w-4"})}));Ov.displayName=Sv.displayName;const Iv=w.forwardRef(({className:e,...t},n)=>c.jsx(yv,{ref:n,className:cr("text-sm font-semibold",e),...t}));Iv.displayName=yv.displayName;const zv=w.forwardRef(({className:e,...t},n)=>c.jsx(wv,{ref:n,className:cr("text-sm opacity-90",e),...t}));zv.displayName=wv.displayName;function qS(){const{toasts:e}=l2();return c.jsxs(GS,{children:[e.map(function({id:t,title:n,description:r,action:i,...o}){return c.jsxs(Lv,{...o,children:[c.jsxs("div",{className:"grid gap-1",children:[n&&c.jsx(Iv,{children:n}),r&&c.jsx(zv,{children:r})]}),i,c.jsx(Ov,{})]},t)}),c.jsx(Dv,{})]})}var Dh=["light","dark"],QS="(prefers-color-scheme: dark)",XS=w.createContext(void 0),ZS={setTheme:e=>{},themes:[]},JS=()=>{var e;return(e=w.useContext(XS))!=null?e:ZS};w.memo(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:r,enableColorScheme:i,defaultTheme:o,value:s,attrs:a,nonce:l})=>{let u=o==="system",d=n==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${a.map(b=>`'${b}'`).join(",")})`};`:`var d=document.documentElement,n='${n}',s='setAttribute';`,f=i?Dh.includes(o)&&o?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${o}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=(b,m=!1,y=!0)=>{let g=s?s[b]:b,x=m?b+"|| ''":`'${g}'`,v="";return i&&y&&!m&&Dh.includes(b)&&(v+=`d.style.colorScheme = '${b}';`),n==="class"?m||g?v+=`c.add(${x})`:v+="null":g&&(v+=`d[s](n,${x})`),v},h=e?`!function(){${d}${p(e)}}()`:r?`!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${QS}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${s?`var x=${JSON.stringify(s)};`:""}${p(s?"x[e]":"e",!0)}}${u?"":"else{"+p(o,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${s?`var x=${JSON.stringify(s)};`:""}${p(s?"x[e]":"e",!0)}}else{${p(o,!1,!1)};}${f}}catch(t){}}();`;return w.createElement("script",{nonce:l,dangerouslySetInnerHTML:{__html:h}})});var ek=e=>{switch(e){case"success":return rk;case"info":return ok;case"warning":return ik;case"error":return sk;default:return null}},tk=Array(12).fill(0),nk=({visible:e,className:t})=>D.createElement("div",{className:["sonner-loading-wrapper",t].filter(Boolean).join(" "),"data-visible":e},D.createElement("div",{className:"sonner-spinner"},tk.map((n,r)=>D.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${r}`})))),rk=D.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},D.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),ik=D.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},D.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),ok=D.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},D.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),sk=D.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},D.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),ak=D.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},D.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),D.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),lk=()=>{let[e,t]=D.useState(document.hidden);return D.useEffect(()=>{let n=()=>{t(document.hidden)};return document.addEventListener("visibilitychange",n),()=>window.removeEventListener("visibilitychange",n)},[]),e},zu=1,ck=class{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{let t=this.subscribers.indexOf(e);this.subscribers.splice(t,1)}),this.publish=e=>{this.subscribers.forEach(t=>t(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var t;let{message:n,...r}=e,i=typeof(e==null?void 0:e.id)=="number"||((t=e.id)==null?void 0:t.length)>0?e.id:zu++,o=this.toasts.find(a=>a.id===i),s=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(i)&&this.dismissedToasts.delete(i),o?this.toasts=this.toasts.map(a=>a.id===i?(this.publish({...a,...e,id:i,title:n}),{...a,...e,id:i,dismissible:s,title:n}):a):this.addToast({title:n,...r,dismissible:s,id:i}),i},this.dismiss=e=>(this.dismissedToasts.add(e),e||this.toasts.forEach(t=>{this.subscribers.forEach(n=>n({id:t.id,dismiss:!0}))}),this.subscribers.forEach(t=>t({id:e,dismiss:!0})),e),this.message=(e,t)=>this.create({...t,message:e}),this.error=(e,t)=>this.create({...t,message:e,type:"error"}),this.success=(e,t)=>this.create({...t,type:"success",message:e}),this.info=(e,t)=>this.create({...t,type:"info",message:e}),this.warning=(e,t)=>this.create({...t,type:"warning",message:e}),this.loading=(e,t)=>this.create({...t,type:"loading",message:e}),this.promise=(e,t)=>{if(!t)return;let n;t.loading!==void 0&&(n=this.create({...t,promise:e,type:"loading",message:t.loading,description:typeof t.description!="function"?t.description:void 0}));let r=e instanceof Promise?e:e(),i=n!==void 0,o,s=r.then(async l=>{if(o=["resolve",l],D.isValidElement(l))i=!1,this.create({id:n,type:"default",message:l});else if(dk(l)&&!l.ok){i=!1;let u=typeof t.error=="function"?await t.error(`HTTP error! status: ${l.status}`):t.error,d=typeof t.description=="function"?await t.description(`HTTP error! status: ${l.status}`):t.description;this.create({id:n,type:"error",message:u,description:d})}else if(t.success!==void 0){i=!1;let u=typeof t.success=="function"?await t.success(l):t.success,d=typeof t.description=="function"?await t.description(l):t.description;this.create({id:n,type:"success",message:u,description:d})}}).catch(async l=>{if(o=["reject",l],t.error!==void 0){i=!1;let u=typeof t.error=="function"?await t.error(l):t.error,d=typeof t.description=="function"?await t.description(l):t.description;this.create({id:n,type:"error",message:u,description:d})}}).finally(()=>{var l;i&&(this.dismiss(n),n=void 0),(l=t.finally)==null||l.call(t)}),a=()=>new Promise((l,u)=>s.then(()=>o[0]==="reject"?u(o[1]):l(o[1])).catch(u));return typeof n!="string"&&typeof n!="number"?{unwrap:a}:Object.assign(n,{unwrap:a})},this.custom=(e,t)=>{let n=(t==null?void 0:t.id)||zu++;return this.create({jsx:e(n),id:n,...t}),n},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},Qe=new ck,uk=(e,t)=>{let n=(t==null?void 0:t.id)||zu++;return Qe.addToast({title:e,...t,id:n}),n},dk=e=>e&&typeof e=="object"&&"ok"in e&&typeof e.ok=="boolean"&&"status"in e&&typeof e.status=="number",fk=uk,pk=()=>Qe.toasts,hk=()=>Qe.getActiveToasts();Object.assign(fk,{success:Qe.success,info:Qe.info,warning:Qe.warning,error:Qe.error,custom:Qe.custom,message:Qe.message,promise:Qe.promise,dismiss:Qe.dismiss,loading:Qe.loading},{getHistory:pk,getToasts:hk});function mk(e,{insertAt:t}={}){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}mk(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function Us(e){return e.label!==void 0}var gk=3,xk="32px",vk="16px",Lh=4e3,yk=356,wk=14,bk=20,Sk=200;function jt(...e){return e.filter(Boolean).join(" ")}function kk(e){let[t,n]=e.split("-"),r=[];return t&&r.push(t),n&&r.push(n),r}var Ck=e=>{var t,n,r,i,o,s,a,l,u,d,f;let{invert:p,toast:h,unstyled:b,interacting:m,setHeights:y,visibleToasts:g,heights:x,index:v,toasts:S,expanded:k,removeToast:C,defaultRichColors:E,closeButton:j,style:T,cancelButtonStyle:A,actionButtonStyle:L,className:O="",descriptionClassName:K="",duration:I,position:Y,gap:$,loadingIcon:V,expandByDefault:P,classNames:R,icons:z,closeButtonAriaLabel:U="Close toast",pauseWhenPageIsHidden:B}=e,[q,X]=D.useState(null),[ve,Me]=D.useState(null),[ee,$r]=D.useState(!1),[yn,dr]=D.useState(!1),[wn,Ur]=D.useState(!1),[bn,ws]=D.useState(!1),[Il,bs]=D.useState(!1),[zl,qi]=D.useState(0),[Wr,sp]=D.useState(0),Qi=D.useRef(h.duration||I||Lh),ap=D.useRef(null),fr=D.useRef(null),Sw=v===0,kw=v+1<=g,dt=h.type,Hr=h.dismissible!==!1,Cw=h.className||"",Ew=h.descriptionClassName||"",Ss=D.useMemo(()=>x.findIndex(W=>W.toastId===h.id)||0,[x,h.id]),jw=D.useMemo(()=>{var W;return(W=h.closeButton)!=null?W:j},[h.closeButton,j]),lp=D.useMemo(()=>h.duration||I||Lh,[h.duration,I]),Fl=D.useRef(0),Gr=D.useRef(0),cp=D.useRef(0),Kr=D.useRef(null),[Tw,Pw]=Y.split("-"),up=D.useMemo(()=>x.reduce((W,ne,le)=>le>=Ss?W:W+ne.height,0),[x,Ss]),dp=lk(),Nw=h.invert||p,_l=dt==="loading";Gr.current=D.useMemo(()=>Ss*$+up,[Ss,up]),D.useEffect(()=>{Qi.current=lp},[lp]),D.useEffect(()=>{$r(!0)},[]),D.useEffect(()=>{let W=fr.current;if(W){let ne=W.getBoundingClientRect().height;return sp(ne),y(le=>[{toastId:h.id,height:ne,position:h.position},...le]),()=>y(le=>le.filter(St=>St.toastId!==h.id))}},[y,h.id]),D.useLayoutEffect(()=>{if(!ee)return;let W=fr.current,ne=W.style.height;W.style.height="auto";let le=W.getBoundingClientRect().height;W.style.height=ne,sp(le),y(St=>St.find(kt=>kt.toastId===h.id)?St.map(kt=>kt.toastId===h.id?{...kt,height:le}:kt):[{toastId:h.id,height:le,position:h.position},...St])},[ee,h.title,h.description,y,h.id]);let Sn=D.useCallback(()=>{dr(!0),qi(Gr.current),y(W=>W.filter(ne=>ne.toastId!==h.id)),setTimeout(()=>{C(h)},Sk)},[h,C,y,Gr]);D.useEffect(()=>{if(h.promise&&dt==="loading"||h.duration===1/0||h.type==="loading")return;let W;return k||m||B&&dp?(()=>{if(cp.current<Fl.current){let ne=new Date().getTime()-Fl.current;Qi.current=Qi.current-ne}cp.current=new Date().getTime()})():Qi.current!==1/0&&(Fl.current=new Date().getTime(),W=setTimeout(()=>{var ne;(ne=h.onAutoClose)==null||ne.call(h,h),Sn()},Qi.current)),()=>clearTimeout(W)},[k,m,h,dt,B,dp,Sn]),D.useEffect(()=>{h.delete&&Sn()},[Sn,h.delete]);function Rw(){var W,ne,le;return z!=null&&z.loading?D.createElement("div",{className:jt(R==null?void 0:R.loader,(W=h==null?void 0:h.classNames)==null?void 0:W.loader,"sonner-loader"),"data-visible":dt==="loading"},z.loading):V?D.createElement("div",{className:jt(R==null?void 0:R.loader,(ne=h==null?void 0:h.classNames)==null?void 0:ne.loader,"sonner-loader"),"data-visible":dt==="loading"},V):D.createElement(nk,{className:jt(R==null?void 0:R.loader,(le=h==null?void 0:h.classNames)==null?void 0:le.loader),visible:dt==="loading"})}return D.createElement("li",{tabIndex:0,ref:fr,className:jt(O,Cw,R==null?void 0:R.toast,(t=h==null?void 0:h.classNames)==null?void 0:t.toast,R==null?void 0:R.default,R==null?void 0:R[dt],(n=h==null?void 0:h.classNames)==null?void 0:n[dt]),"data-sonner-toast":"","data-rich-colors":(r=h.richColors)!=null?r:E,"data-styled":!(h.jsx||h.unstyled||b),"data-mounted":ee,"data-promise":!!h.promise,"data-swiped":Il,"data-removed":yn,"data-visible":kw,"data-y-position":Tw,"data-x-position":Pw,"data-index":v,"data-front":Sw,"data-swiping":wn,"data-dismissible":Hr,"data-type":dt,"data-invert":Nw,"data-swipe-out":bn,"data-swipe-direction":ve,"data-expanded":!!(k||P&&ee),style:{"--index":v,"--toasts-before":v,"--z-index":S.length-v,"--offset":`${yn?zl:Gr.current}px`,"--initial-height":P?"auto":`${Wr}px`,...T,...h.style},onDragEnd:()=>{Ur(!1),X(null),Kr.current=null},onPointerDown:W=>{_l||!Hr||(ap.current=new Date,qi(Gr.current),W.target.setPointerCapture(W.pointerId),W.target.tagName!=="BUTTON"&&(Ur(!0),Kr.current={x:W.clientX,y:W.clientY}))},onPointerUp:()=>{var W,ne,le,St;if(bn||!Hr)return;Kr.current=null;let kt=Number(((W=fr.current)==null?void 0:W.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),kn=Number(((ne=fr.current)==null?void 0:ne.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),pr=new Date().getTime()-((le=ap.current)==null?void 0:le.getTime()),Ct=q==="x"?kt:kn,Cn=Math.abs(Ct)/pr;if(Math.abs(Ct)>=bk||Cn>.11){qi(Gr.current),(St=h.onDismiss)==null||St.call(h,h),Me(q==="x"?kt>0?"right":"left":kn>0?"down":"up"),Sn(),ws(!0),bs(!1);return}Ur(!1),X(null)},onPointerMove:W=>{var ne,le,St,kt;if(!Kr.current||!Hr||((ne=window.getSelection())==null?void 0:ne.toString().length)>0)return;let kn=W.clientY-Kr.current.y,pr=W.clientX-Kr.current.x,Ct=(le=e.swipeDirections)!=null?le:kk(Y);!q&&(Math.abs(pr)>1||Math.abs(kn)>1)&&X(Math.abs(pr)>Math.abs(kn)?"x":"y");let Cn={x:0,y:0};q==="y"?(Ct.includes("top")||Ct.includes("bottom"))&&(Ct.includes("top")&&kn<0||Ct.includes("bottom")&&kn>0)&&(Cn.y=kn):q==="x"&&(Ct.includes("left")||Ct.includes("right"))&&(Ct.includes("left")&&pr<0||Ct.includes("right")&&pr>0)&&(Cn.x=pr),(Math.abs(Cn.x)>0||Math.abs(Cn.y)>0)&&bs(!0),(St=fr.current)==null||St.style.setProperty("--swipe-amount-x",`${Cn.x}px`),(kt=fr.current)==null||kt.style.setProperty("--swipe-amount-y",`${Cn.y}px`)}},jw&&!h.jsx?D.createElement("button",{"aria-label":U,"data-disabled":_l,"data-close-button":!0,onClick:_l||!Hr?()=>{}:()=>{var W;Sn(),(W=h.onDismiss)==null||W.call(h,h)},className:jt(R==null?void 0:R.closeButton,(i=h==null?void 0:h.classNames)==null?void 0:i.closeButton)},(o=z==null?void 0:z.close)!=null?o:ak):null,h.jsx||w.isValidElement(h.title)?h.jsx?h.jsx:typeof h.title=="function"?h.title():h.title:D.createElement(D.Fragment,null,dt||h.icon||h.promise?D.createElement("div",{"data-icon":"",className:jt(R==null?void 0:R.icon,(s=h==null?void 0:h.classNames)==null?void 0:s.icon)},h.promise||h.type==="loading"&&!h.icon?h.icon||Rw():null,h.type!=="loading"?h.icon||(z==null?void 0:z[dt])||ek(dt):null):null,D.createElement("div",{"data-content":"",className:jt(R==null?void 0:R.content,(a=h==null?void 0:h.classNames)==null?void 0:a.content)},D.createElement("div",{"data-title":"",className:jt(R==null?void 0:R.title,(l=h==null?void 0:h.classNames)==null?void 0:l.title)},typeof h.title=="function"?h.title():h.title),h.description?D.createElement("div",{"data-description":"",className:jt(K,Ew,R==null?void 0:R.description,(u=h==null?void 0:h.classNames)==null?void 0:u.description)},typeof h.description=="function"?h.description():h.description):null),w.isValidElement(h.cancel)?h.cancel:h.cancel&&Us(h.cancel)?D.createElement("button",{"data-button":!0,"data-cancel":!0,style:h.cancelButtonStyle||A,onClick:W=>{var ne,le;Us(h.cancel)&&Hr&&((le=(ne=h.cancel).onClick)==null||le.call(ne,W),Sn())},className:jt(R==null?void 0:R.cancelButton,(d=h==null?void 0:h.classNames)==null?void 0:d.cancelButton)},h.cancel.label):null,w.isValidElement(h.action)?h.action:h.action&&Us(h.action)?D.createElement("button",{"data-button":!0,"data-action":!0,style:h.actionButtonStyle||L,onClick:W=>{var ne,le;Us(h.action)&&((le=(ne=h.action).onClick)==null||le.call(ne,W),!W.defaultPrevented&&Sn())},className:jt(R==null?void 0:R.actionButton,(f=h==null?void 0:h.classNames)==null?void 0:f.actionButton)},h.action.label):null))};function Oh(){if(typeof window>"u"||typeof document>"u")return"ltr";let e=document.documentElement.getAttribute("dir");return e==="auto"||!e?window.getComputedStyle(document.documentElement).direction:e}function Ek(e,t){let n={};return[e,t].forEach((r,i)=>{let o=i===1,s=o?"--mobile-offset":"--offset",a=o?vk:xk;function l(u){["top","right","bottom","left"].forEach(d=>{n[`${s}-${d}`]=typeof u=="number"?`${u}px`:u})}typeof r=="number"||typeof r=="string"?l(r):typeof r=="object"?["top","right","bottom","left"].forEach(u=>{r[u]===void 0?n[`${s}-${u}`]=a:n[`${s}-${u}`]=typeof r[u]=="number"?`${r[u]}px`:r[u]}):l(a)}),n}var jk=w.forwardRef(function(e,t){let{invert:n,position:r="bottom-right",hotkey:i=["altKey","KeyT"],expand:o,closeButton:s,className:a,offset:l,mobileOffset:u,theme:d="light",richColors:f,duration:p,style:h,visibleToasts:b=gk,toastOptions:m,dir:y=Oh(),gap:g=wk,loadingIcon:x,icons:v,containerAriaLabel:S="Notifications",pauseWhenPageIsHidden:k}=e,[C,E]=D.useState([]),j=D.useMemo(()=>Array.from(new Set([r].concat(C.filter(B=>B.position).map(B=>B.position)))),[C,r]),[T,A]=D.useState([]),[L,O]=D.useState(!1),[K,I]=D.useState(!1),[Y,$]=D.useState(d!=="system"?d:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),V=D.useRef(null),P=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),R=D.useRef(null),z=D.useRef(!1),U=D.useCallback(B=>{E(q=>{var X;return(X=q.find(ve=>ve.id===B.id))!=null&&X.delete||Qe.dismiss(B.id),q.filter(({id:ve})=>ve!==B.id)})},[]);return D.useEffect(()=>Qe.subscribe(B=>{if(B.dismiss){E(q=>q.map(X=>X.id===B.id?{...X,delete:!0}:X));return}setTimeout(()=>{qx.flushSync(()=>{E(q=>{let X=q.findIndex(ve=>ve.id===B.id);return X!==-1?[...q.slice(0,X),{...q[X],...B},...q.slice(X+1)]:[B,...q]})})})}),[]),D.useEffect(()=>{if(d!=="system"){$(d);return}if(d==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?$("dark"):$("light")),typeof window>"u")return;let B=window.matchMedia("(prefers-color-scheme: dark)");try{B.addEventListener("change",({matches:q})=>{$(q?"dark":"light")})}catch{B.addListener(({matches:X})=>{try{$(X?"dark":"light")}catch(ve){console.error(ve)}})}},[d]),D.useEffect(()=>{C.length<=1&&O(!1)},[C]),D.useEffect(()=>{let B=q=>{var X,ve;i.every(Me=>q[Me]||q.code===Me)&&(O(!0),(X=V.current)==null||X.focus()),q.code==="Escape"&&(document.activeElement===V.current||(ve=V.current)!=null&&ve.contains(document.activeElement))&&O(!1)};return document.addEventListener("keydown",B),()=>document.removeEventListener("keydown",B)},[i]),D.useEffect(()=>{if(V.current)return()=>{R.current&&(R.current.focus({preventScroll:!0}),R.current=null,z.current=!1)}},[V.current]),D.createElement("section",{ref:t,"aria-label":`${S} ${P}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},j.map((B,q)=>{var X;let[ve,Me]=B.split("-");return C.length?D.createElement("ol",{key:B,dir:y==="auto"?Oh():y,tabIndex:-1,ref:V,className:a,"data-sonner-toaster":!0,"data-theme":Y,"data-y-position":ve,"data-lifted":L&&C.length>1&&!o,"data-x-position":Me,style:{"--front-toast-height":`${((X=T[0])==null?void 0:X.height)||0}px`,"--width":`${yk}px`,"--gap":`${g}px`,...h,...Ek(l,u)},onBlur:ee=>{z.current&&!ee.currentTarget.contains(ee.relatedTarget)&&(z.current=!1,R.current&&(R.current.focus({preventScroll:!0}),R.current=null))},onFocus:ee=>{ee.target instanceof HTMLElement&&ee.target.dataset.dismissible==="false"||z.current||(z.current=!0,R.current=ee.relatedTarget)},onMouseEnter:()=>O(!0),onMouseMove:()=>O(!0),onMouseLeave:()=>{K||O(!1)},onDragEnd:()=>O(!1),onPointerDown:ee=>{ee.target instanceof HTMLElement&&ee.target.dataset.dismissible==="false"||I(!0)},onPointerUp:()=>I(!1)},C.filter(ee=>!ee.position&&q===0||ee.position===B).map((ee,$r)=>{var yn,dr;return D.createElement(Ck,{key:ee.id,icons:v,index:$r,toast:ee,defaultRichColors:f,duration:(yn=m==null?void 0:m.duration)!=null?yn:p,className:m==null?void 0:m.className,descriptionClassName:m==null?void 0:m.descriptionClassName,invert:n,visibleToasts:b,closeButton:(dr=m==null?void 0:m.closeButton)!=null?dr:s,interacting:K,position:B,style:m==null?void 0:m.style,unstyled:m==null?void 0:m.unstyled,classNames:m==null?void 0:m.classNames,cancelButtonStyle:m==null?void 0:m.cancelButtonStyle,actionButtonStyle:m==null?void 0:m.actionButtonStyle,removeToast:U,toasts:C.filter(wn=>wn.position==ee.position),heights:T.filter(wn=>wn.position==ee.position),setHeights:A,expandByDefault:o,gap:g,loadingIcon:x,expanded:L,pauseWhenPageIsHidden:k,swipeDirections:e.swipeDirections})})):null}))});const Tk=({...e})=>{const{theme:t="system"}=JS();return c.jsx(jk,{theme:t,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e})},Pk=["top","right","bottom","left"],nr=Math.min,it=Math.max,Ua=Math.round,Ws=Math.floor,Qt=e=>({x:e,y:e}),Nk={left:"right",right:"left",bottom:"top",top:"bottom"},Rk={start:"end",end:"start"};function Fu(e,t,n){return it(e,nr(t,n))}function mn(e,t){return typeof e=="function"?e(t):e}function gn(e){return e.split("-")[0]}function Ui(e){return e.split("-")[1]}function gf(e){return e==="x"?"y":"x"}function xf(e){return e==="y"?"height":"width"}const Ak=new Set(["top","bottom"]);function Kt(e){return Ak.has(gn(e))?"y":"x"}function vf(e){return gf(Kt(e))}function Mk(e,t,n){n===void 0&&(n=!1);const r=Ui(e),i=vf(e),o=xf(i);let s=i==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(s=Wa(s)),[s,Wa(s)]}function Dk(e){const t=Wa(e);return[_u(e),t,_u(t)]}function _u(e){return e.replace(/start|end/g,t=>Rk[t])}const Ih=["left","right"],zh=["right","left"],Lk=["top","bottom"],Ok=["bottom","top"];function Ik(e,t,n){switch(e){case"top":case"bottom":return n?t?zh:Ih:t?Ih:zh;case"left":case"right":return t?Lk:Ok;default:return[]}}function zk(e,t,n,r){const i=Ui(e);let o=Ik(gn(e),n==="start",r);return i&&(o=o.map(s=>s+"-"+i),t&&(o=o.concat(o.map(_u)))),o}function Wa(e){return e.replace(/left|right|bottom|top/g,t=>Nk[t])}function Fk(e){return{top:0,right:0,bottom:0,left:0,...e}}function Fv(e){return typeof e!="number"?Fk(e):{top:e,right:e,bottom:e,left:e}}function Ha(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Fh(e,t,n){let{reference:r,floating:i}=e;const o=Kt(t),s=vf(t),a=xf(s),l=gn(t),u=o==="y",d=r.x+r.width/2-i.width/2,f=r.y+r.height/2-i.height/2,p=r[a]/2-i[a]/2;let h;switch(l){case"top":h={x:d,y:r.y-i.height};break;case"bottom":h={x:d,y:r.y+r.height};break;case"right":h={x:r.x+r.width,y:f};break;case"left":h={x:r.x-i.width,y:f};break;default:h={x:r.x,y:r.y}}switch(Ui(t)){case"start":h[s]-=p*(n&&u?-1:1);break;case"end":h[s]+=p*(n&&u?-1:1);break}return h}const _k=async(e,t,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:s}=n,a=o.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(t));let u=await s.getElementRects({reference:e,floating:t,strategy:i}),{x:d,y:f}=Fh(u,r,l),p=r,h={},b=0;for(let m=0;m<a.length;m++){const{name:y,fn:g}=a[m],{x,y:v,data:S,reset:k}=await g({x:d,y:f,initialPlacement:r,placement:p,strategy:i,middlewareData:h,rects:u,platform:s,elements:{reference:e,floating:t}});d=x??d,f=v??f,h={...h,[y]:{...h[y],...S}},k&&b<=50&&(b++,typeof k=="object"&&(k.placement&&(p=k.placement),k.rects&&(u=k.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:i}):k.rects),{x:d,y:f}=Fh(u,p,l)),m=-1)}return{x:d,y:f,placement:p,strategy:i,middlewareData:h}};async function Ko(e,t){var n;t===void 0&&(t={});const{x:r,y:i,platform:o,rects:s,elements:a,strategy:l}=e,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:f="floating",altBoundary:p=!1,padding:h=0}=mn(t,e),b=Fv(h),y=a[p?f==="floating"?"reference":"floating":f],g=Ha(await o.getClippingRect({element:(n=await(o.isElement==null?void 0:o.isElement(y)))==null||n?y:y.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(a.floating)),boundary:u,rootBoundary:d,strategy:l})),x=f==="floating"?{x:r,y:i,width:s.floating.width,height:s.floating.height}:s.reference,v=await(o.getOffsetParent==null?void 0:o.getOffsetParent(a.floating)),S=await(o.isElement==null?void 0:o.isElement(v))?await(o.getScale==null?void 0:o.getScale(v))||{x:1,y:1}:{x:1,y:1},k=Ha(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:x,offsetParent:v,strategy:l}):x);return{top:(g.top-k.top+b.top)/S.y,bottom:(k.bottom-g.bottom+b.bottom)/S.y,left:(g.left-k.left+b.left)/S.x,right:(k.right-g.right+b.right)/S.x}}const Vk=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:i,rects:o,platform:s,elements:a,middlewareData:l}=t,{element:u,padding:d=0}=mn(e,t)||{};if(u==null)return{};const f=Fv(d),p={x:n,y:r},h=vf(i),b=xf(h),m=await s.getDimensions(u),y=h==="y",g=y?"top":"left",x=y?"bottom":"right",v=y?"clientHeight":"clientWidth",S=o.reference[b]+o.reference[h]-p[h]-o.floating[b],k=p[h]-o.reference[h],C=await(s.getOffsetParent==null?void 0:s.getOffsetParent(u));let E=C?C[v]:0;(!E||!await(s.isElement==null?void 0:s.isElement(C)))&&(E=a.floating[v]||o.floating[b]);const j=S/2-k/2,T=E/2-m[b]/2-1,A=nr(f[g],T),L=nr(f[x],T),O=A,K=E-m[b]-L,I=E/2-m[b]/2+j,Y=Fu(O,I,K),$=!l.arrow&&Ui(i)!=null&&I!==Y&&o.reference[b]/2-(I<O?A:L)-m[b]/2<0,V=$?I<O?I-O:I-K:0;return{[h]:p[h]+V,data:{[h]:Y,centerOffset:I-Y-V,...$&&{alignmentOffset:V}},reset:$}}}),Bk=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:i,middlewareData:o,rects:s,initialPlacement:a,platform:l,elements:u}=t,{mainAxis:d=!0,crossAxis:f=!0,fallbackPlacements:p,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:m=!0,...y}=mn(e,t);if((n=o.arrow)!=null&&n.alignmentOffset)return{};const g=gn(i),x=Kt(a),v=gn(a)===a,S=await(l.isRTL==null?void 0:l.isRTL(u.floating)),k=p||(v||!m?[Wa(a)]:Dk(a)),C=b!=="none";!p&&C&&k.push(...zk(a,m,b,S));const E=[a,...k],j=await Ko(t,y),T=[];let A=((r=o.flip)==null?void 0:r.overflows)||[];if(d&&T.push(j[g]),f){const I=Mk(i,s,S);T.push(j[I[0]],j[I[1]])}if(A=[...A,{placement:i,overflows:T}],!T.every(I=>I<=0)){var L,O;const I=(((L=o.flip)==null?void 0:L.index)||0)+1,Y=E[I];if(Y&&(!(f==="alignment"?x!==Kt(Y):!1)||A.every(P=>P.overflows[0]>0&&Kt(P.placement)===x)))return{data:{index:I,overflows:A},reset:{placement:Y}};let $=(O=A.filter(V=>V.overflows[0]<=0).sort((V,P)=>V.overflows[1]-P.overflows[1])[0])==null?void 0:O.placement;if(!$)switch(h){case"bestFit":{var K;const V=(K=A.filter(P=>{if(C){const R=Kt(P.placement);return R===x||R==="y"}return!0}).map(P=>[P.placement,P.overflows.filter(R=>R>0).reduce((R,z)=>R+z,0)]).sort((P,R)=>P[1]-R[1])[0])==null?void 0:K[0];V&&($=V);break}case"initialPlacement":$=a;break}if(i!==$)return{reset:{placement:$}}}return{}}}};function _h(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Vh(e){return Pk.some(t=>e[t]>=0)}const $k=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:r="referenceHidden",...i}=mn(e,t);switch(r){case"referenceHidden":{const o=await Ko(t,{...i,elementContext:"reference"}),s=_h(o,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Vh(s)}}}case"escaped":{const o=await Ko(t,{...i,altBoundary:!0}),s=_h(o,n.floating);return{data:{escapedOffsets:s,escaped:Vh(s)}}}default:return{}}}}},_v=new Set(["left","top"]);async function Uk(e,t){const{placement:n,platform:r,elements:i}=e,o=await(r.isRTL==null?void 0:r.isRTL(i.floating)),s=gn(n),a=Ui(n),l=Kt(n)==="y",u=_v.has(s)?-1:1,d=o&&l?-1:1,f=mn(t,e);let{mainAxis:p,crossAxis:h,alignmentAxis:b}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:f.mainAxis||0,crossAxis:f.crossAxis||0,alignmentAxis:f.alignmentAxis};return a&&typeof b=="number"&&(h=a==="end"?b*-1:b),l?{x:h*d,y:p*u}:{x:p*u,y:h*d}}const Wk=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:i,y:o,placement:s,middlewareData:a}=t,l=await Uk(t,e);return s===((n=a.offset)==null?void 0:n.placement)&&(r=a.arrow)!=null&&r.alignmentOffset?{}:{x:i+l.x,y:o+l.y,data:{...l,placement:s}}}}},Hk=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:i}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:a={fn:y=>{let{x:g,y:x}=y;return{x:g,y:x}}},...l}=mn(e,t),u={x:n,y:r},d=await Ko(t,l),f=Kt(gn(i)),p=gf(f);let h=u[p],b=u[f];if(o){const y=p==="y"?"top":"left",g=p==="y"?"bottom":"right",x=h+d[y],v=h-d[g];h=Fu(x,h,v)}if(s){const y=f==="y"?"top":"left",g=f==="y"?"bottom":"right",x=b+d[y],v=b-d[g];b=Fu(x,b,v)}const m=a.fn({...t,[p]:h,[f]:b});return{...m,data:{x:m.x-n,y:m.y-r,enabled:{[p]:o,[f]:s}}}}}},Gk=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:i,rects:o,middlewareData:s}=t,{offset:a=0,mainAxis:l=!0,crossAxis:u=!0}=mn(e,t),d={x:n,y:r},f=Kt(i),p=gf(f);let h=d[p],b=d[f];const m=mn(a,t),y=typeof m=="number"?{mainAxis:m,crossAxis:0}:{mainAxis:0,crossAxis:0,...m};if(l){const v=p==="y"?"height":"width",S=o.reference[p]-o.floating[v]+y.mainAxis,k=o.reference[p]+o.reference[v]-y.mainAxis;h<S?h=S:h>k&&(h=k)}if(u){var g,x;const v=p==="y"?"width":"height",S=_v.has(gn(i)),k=o.reference[f]-o.floating[v]+(S&&((g=s.offset)==null?void 0:g[f])||0)+(S?0:y.crossAxis),C=o.reference[f]+o.reference[v]+(S?0:((x=s.offset)==null?void 0:x[f])||0)-(S?y.crossAxis:0);b<k?b=k:b>C&&(b=C)}return{[p]:h,[f]:b}}}},Kk=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,r;const{placement:i,rects:o,platform:s,elements:a}=t,{apply:l=()=>{},...u}=mn(e,t),d=await Ko(t,u),f=gn(i),p=Ui(i),h=Kt(i)==="y",{width:b,height:m}=o.floating;let y,g;f==="top"||f==="bottom"?(y=f,g=p===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(g=f,y=p==="end"?"top":"bottom");const x=m-d.top-d.bottom,v=b-d.left-d.right,S=nr(m-d[y],x),k=nr(b-d[g],v),C=!t.middlewareData.shift;let E=S,j=k;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(j=v),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(E=x),C&&!p){const A=it(d.left,0),L=it(d.right,0),O=it(d.top,0),K=it(d.bottom,0);h?j=b-2*(A!==0||L!==0?A+L:it(d.left,d.right)):E=m-2*(O!==0||K!==0?O+K:it(d.top,d.bottom))}await l({...t,availableWidth:j,availableHeight:E});const T=await s.getDimensions(a.floating);return b!==T.width||m!==T.height?{reset:{rects:!0}}:{}}}};function kl(){return typeof window<"u"}function Wi(e){return Vv(e)?(e.nodeName||"").toLowerCase():"#document"}function at(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function tn(e){var t;return(t=(Vv(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Vv(e){return kl()?e instanceof Node||e instanceof at(e).Node:!1}function _t(e){return kl()?e instanceof Element||e instanceof at(e).Element:!1}function Jt(e){return kl()?e instanceof HTMLElement||e instanceof at(e).HTMLElement:!1}function Bh(e){return!kl()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof at(e).ShadowRoot}const Yk=new Set(["inline","contents"]);function ps(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=Vt(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!Yk.has(i)}const qk=new Set(["table","td","th"]);function Qk(e){return qk.has(Wi(e))}const Xk=[":popover-open",":modal"];function Cl(e){return Xk.some(t=>{try{return e.matches(t)}catch{return!1}})}const Zk=["transform","translate","scale","rotate","perspective"],Jk=["transform","translate","scale","rotate","perspective","filter"],eC=["paint","layout","strict","content"];function yf(e){const t=wf(),n=_t(e)?Vt(e):e;return Zk.some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||Jk.some(r=>(n.willChange||"").includes(r))||eC.some(r=>(n.contain||"").includes(r))}function tC(e){let t=rr(e);for(;Jt(t)&&!Oi(t);){if(yf(t))return t;if(Cl(t))return null;t=rr(t)}return null}function wf(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const nC=new Set(["html","body","#document"]);function Oi(e){return nC.has(Wi(e))}function Vt(e){return at(e).getComputedStyle(e)}function El(e){return _t(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function rr(e){if(Wi(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Bh(e)&&e.host||tn(e);return Bh(t)?t.host:t}function Bv(e){const t=rr(e);return Oi(t)?e.ownerDocument?e.ownerDocument.body:e.body:Jt(t)&&ps(t)?t:Bv(t)}function Yo(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=Bv(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),s=at(i);if(o){const a=Vu(s);return t.concat(s,s.visualViewport||[],ps(i)?i:[],a&&n?Yo(a):[])}return t.concat(i,Yo(i,[],n))}function Vu(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function $v(e){const t=Vt(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=Jt(e),o=i?e.offsetWidth:n,s=i?e.offsetHeight:r,a=Ua(n)!==o||Ua(r)!==s;return a&&(n=o,r=s),{width:n,height:r,$:a}}function bf(e){return _t(e)?e:e.contextElement}function vi(e){const t=bf(e);if(!Jt(t))return Qt(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=$v(t);let s=(o?Ua(n.width):n.width)/r,a=(o?Ua(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const rC=Qt(0);function Uv(e){const t=at(e);return!wf()||!t.visualViewport?rC:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function iC(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==at(e)?!1:t}function zr(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=bf(e);let s=Qt(1);t&&(r?_t(r)&&(s=vi(r)):s=vi(e));const a=iC(o,n,r)?Uv(o):Qt(0);let l=(i.left+a.x)/s.x,u=(i.top+a.y)/s.y,d=i.width/s.x,f=i.height/s.y;if(o){const p=at(o),h=r&&_t(r)?at(r):r;let b=p,m=Vu(b);for(;m&&r&&h!==b;){const y=vi(m),g=m.getBoundingClientRect(),x=Vt(m),v=g.left+(m.clientLeft+parseFloat(x.paddingLeft))*y.x,S=g.top+(m.clientTop+parseFloat(x.paddingTop))*y.y;l*=y.x,u*=y.y,d*=y.x,f*=y.y,l+=v,u+=S,b=at(m),m=Vu(b)}}return Ha({width:d,height:f,x:l,y:u})}function Sf(e,t){const n=El(e).scrollLeft;return t?t.left+n:zr(tn(e)).left+n}function Wv(e,t,n){n===void 0&&(n=!1);const r=e.getBoundingClientRect(),i=r.left+t.scrollLeft-(n?0:Sf(e,r)),o=r.top+t.scrollTop;return{x:i,y:o}}function oC(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e;const o=i==="fixed",s=tn(r),a=t?Cl(t.floating):!1;if(r===s||a&&o)return n;let l={scrollLeft:0,scrollTop:0},u=Qt(1);const d=Qt(0),f=Jt(r);if((f||!f&&!o)&&((Wi(r)!=="body"||ps(s))&&(l=El(r)),Jt(r))){const h=zr(r);u=vi(r),d.x=h.x+r.clientLeft,d.y=h.y+r.clientTop}const p=s&&!f&&!o?Wv(s,l,!0):Qt(0);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-l.scrollLeft*u.x+d.x+p.x,y:n.y*u.y-l.scrollTop*u.y+d.y+p.y}}function sC(e){return Array.from(e.getClientRects())}function aC(e){const t=tn(e),n=El(e),r=e.ownerDocument.body,i=it(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),o=it(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let s=-n.scrollLeft+Sf(e);const a=-n.scrollTop;return Vt(r).direction==="rtl"&&(s+=it(t.clientWidth,r.clientWidth)-i),{width:i,height:o,x:s,y:a}}function lC(e,t){const n=at(e),r=tn(e),i=n.visualViewport;let o=r.clientWidth,s=r.clientHeight,a=0,l=0;if(i){o=i.width,s=i.height;const u=wf();(!u||u&&t==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:o,height:s,x:a,y:l}}const cC=new Set(["absolute","fixed"]);function uC(e,t){const n=zr(e,!0,t==="fixed"),r=n.top+e.clientTop,i=n.left+e.clientLeft,o=Jt(e)?vi(e):Qt(1),s=e.clientWidth*o.x,a=e.clientHeight*o.y,l=i*o.x,u=r*o.y;return{width:s,height:a,x:l,y:u}}function $h(e,t,n){let r;if(t==="viewport")r=lC(e,n);else if(t==="document")r=aC(tn(e));else if(_t(t))r=uC(t,n);else{const i=Uv(e);r={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return Ha(r)}function Hv(e,t){const n=rr(e);return n===t||!_t(n)||Oi(n)?!1:Vt(n).position==="fixed"||Hv(n,t)}function dC(e,t){const n=t.get(e);if(n)return n;let r=Yo(e,[],!1).filter(a=>_t(a)&&Wi(a)!=="body"),i=null;const o=Vt(e).position==="fixed";let s=o?rr(e):e;for(;_t(s)&&!Oi(s);){const a=Vt(s),l=yf(s);!l&&a.position==="fixed"&&(i=null),(o?!l&&!i:!l&&a.position==="static"&&!!i&&cC.has(i.position)||ps(s)&&!l&&Hv(e,s))?r=r.filter(d=>d!==s):i=a,s=rr(s)}return t.set(e,r),r}function fC(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e;const s=[...n==="clippingAncestors"?Cl(t)?[]:dC(t,this._c):[].concat(n),r],a=s[0],l=s.reduce((u,d)=>{const f=$h(t,d,i);return u.top=it(f.top,u.top),u.right=nr(f.right,u.right),u.bottom=nr(f.bottom,u.bottom),u.left=it(f.left,u.left),u},$h(t,a,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function pC(e){const{width:t,height:n}=$v(e);return{width:t,height:n}}function hC(e,t,n){const r=Jt(t),i=tn(t),o=n==="fixed",s=zr(e,!0,o,t);let a={scrollLeft:0,scrollTop:0};const l=Qt(0);function u(){l.x=Sf(i)}if(r||!r&&!o)if((Wi(t)!=="body"||ps(i))&&(a=El(t)),r){const h=zr(t,!0,o,t);l.x=h.x+t.clientLeft,l.y=h.y+t.clientTop}else i&&u();o&&!r&&i&&u();const d=i&&!r&&!o?Wv(i,a):Qt(0),f=s.left+a.scrollLeft-l.x-d.x,p=s.top+a.scrollTop-l.y-d.y;return{x:f,y:p,width:s.width,height:s.height}}function xc(e){return Vt(e).position==="static"}function Uh(e,t){if(!Jt(e)||Vt(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return tn(e)===n&&(n=n.ownerDocument.body),n}function Gv(e,t){const n=at(e);if(Cl(e))return n;if(!Jt(e)){let i=rr(e);for(;i&&!Oi(i);){if(_t(i)&&!xc(i))return i;i=rr(i)}return n}let r=Uh(e,t);for(;r&&Qk(r)&&xc(r);)r=Uh(r,t);return r&&Oi(r)&&xc(r)&&!yf(r)?n:r||tC(e)||n}const mC=async function(e){const t=this.getOffsetParent||Gv,n=this.getDimensions,r=await n(e.floating);return{reference:hC(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function gC(e){return Vt(e).direction==="rtl"}const xC={convertOffsetParentRelativeRectToViewportRelativeRect:oC,getDocumentElement:tn,getClippingRect:fC,getOffsetParent:Gv,getElementRects:mC,getClientRects:sC,getDimensions:pC,getScale:vi,isElement:_t,isRTL:gC};function Kv(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function vC(e,t){let n=null,r;const i=tn(e);function o(){var a;clearTimeout(r),(a=n)==null||a.disconnect(),n=null}function s(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),o();const u=e.getBoundingClientRect(),{left:d,top:f,width:p,height:h}=u;if(a||t(),!p||!h)return;const b=Ws(f),m=Ws(i.clientWidth-(d+p)),y=Ws(i.clientHeight-(f+h)),g=Ws(d),v={rootMargin:-b+"px "+-m+"px "+-y+"px "+-g+"px",threshold:it(0,nr(1,l))||1};let S=!0;function k(C){const E=C[0].intersectionRatio;if(E!==l){if(!S)return s();E?s(!1,E):r=setTimeout(()=>{s(!1,1e-7)},1e3)}E===1&&!Kv(u,e.getBoundingClientRect())&&s(),S=!1}try{n=new IntersectionObserver(k,{...v,root:i.ownerDocument})}catch{n=new IntersectionObserver(k,v)}n.observe(e)}return s(!0),o}function yC(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,u=bf(e),d=i||o?[...u?Yo(u):[],...Yo(t)]:[];d.forEach(g=>{i&&g.addEventListener("scroll",n,{passive:!0}),o&&g.addEventListener("resize",n)});const f=u&&a?vC(u,n):null;let p=-1,h=null;s&&(h=new ResizeObserver(g=>{let[x]=g;x&&x.target===u&&h&&(h.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var v;(v=h)==null||v.observe(t)})),n()}),u&&!l&&h.observe(u),h.observe(t));let b,m=l?zr(e):null;l&&y();function y(){const g=zr(e);m&&!Kv(m,g)&&n(),m=g,b=requestAnimationFrame(y)}return n(),()=>{var g;d.forEach(x=>{i&&x.removeEventListener("scroll",n),o&&x.removeEventListener("resize",n)}),f==null||f(),(g=h)==null||g.disconnect(),h=null,l&&cancelAnimationFrame(b)}}const wC=Wk,bC=Hk,SC=Bk,kC=Kk,CC=$k,Wh=Vk,EC=Gk,jC=(e,t,n)=>{const r=new Map,i={platform:xC,...n},o={...i.platform,_c:r};return _k(e,t,{...i,platform:o})};var TC=typeof document<"u",PC=function(){},fa=TC?w.useLayoutEffect:PC;function Ga(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,i;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!Ga(e[r],t[r]))return!1;return!0}if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,i[r]))return!1;for(r=n;r--!==0;){const o=i[r];if(!(o==="_owner"&&e.$$typeof)&&!Ga(e[o],t[o]))return!1}return!0}return e!==e&&t!==t}function Yv(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Hh(e,t){const n=Yv(e);return Math.round(t*n)/n}function vc(e){const t=w.useRef(e);return fa(()=>{t.current=e}),t}function NC(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:i,elements:{reference:o,floating:s}={},transform:a=!0,whileElementsMounted:l,open:u}=e,[d,f]=w.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[p,h]=w.useState(r);Ga(p,r)||h(r);const[b,m]=w.useState(null),[y,g]=w.useState(null),x=w.useCallback(P=>{P!==C.current&&(C.current=P,m(P))},[]),v=w.useCallback(P=>{P!==E.current&&(E.current=P,g(P))},[]),S=o||b,k=s||y,C=w.useRef(null),E=w.useRef(null),j=w.useRef(d),T=l!=null,A=vc(l),L=vc(i),O=vc(u),K=w.useCallback(()=>{if(!C.current||!E.current)return;const P={placement:t,strategy:n,middleware:p};L.current&&(P.platform=L.current),jC(C.current,E.current,P).then(R=>{const z={...R,isPositioned:O.current!==!1};I.current&&!Ga(j.current,z)&&(j.current=z,ds.flushSync(()=>{f(z)}))})},[p,t,n,L,O]);fa(()=>{u===!1&&j.current.isPositioned&&(j.current.isPositioned=!1,f(P=>({...P,isPositioned:!1})))},[u]);const I=w.useRef(!1);fa(()=>(I.current=!0,()=>{I.current=!1}),[]),fa(()=>{if(S&&(C.current=S),k&&(E.current=k),S&&k){if(A.current)return A.current(S,k,K);K()}},[S,k,K,A,T]);const Y=w.useMemo(()=>({reference:C,floating:E,setReference:x,setFloating:v}),[x,v]),$=w.useMemo(()=>({reference:S,floating:k}),[S,k]),V=w.useMemo(()=>{const P={position:n,left:0,top:0};if(!$.floating)return P;const R=Hh($.floating,d.x),z=Hh($.floating,d.y);return a?{...P,transform:"translate("+R+"px, "+z+"px)",...Yv($.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:R,top:z}},[n,a,$.floating,d.x,d.y]);return w.useMemo(()=>({...d,update:K,refs:Y,elements:$,floatingStyles:V}),[d,K,Y,$,V])}const RC=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:i}=typeof e=="function"?e(n):e;return r&&t(r)?r.current!=null?Wh({element:r.current,padding:i}).fn(n):{}:r?Wh({element:r,padding:i}).fn(n):{}}}},AC=(e,t)=>({...wC(e),options:[e,t]}),MC=(e,t)=>({...bC(e),options:[e,t]}),DC=(e,t)=>({...EC(e),options:[e,t]}),LC=(e,t)=>({...SC(e),options:[e,t]}),OC=(e,t)=>({...kC(e),options:[e,t]}),IC=(e,t)=>({...CC(e),options:[e,t]}),zC=(e,t)=>({...RC(e),options:[e,t]});var FC="Arrow",qv=w.forwardRef((e,t)=>{const{children:n,width:r=10,height:i=5,...o}=e;return c.jsx(nt.svg,{...o,ref:t,width:r,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:c.jsx("polygon",{points:"0,0 30,0 15,10"})})});qv.displayName=FC;var _C=qv;function VC(e){const[t,n]=w.useState(void 0);return tr(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const o=i[0];let s,a;if("borderBoxSize"in o){const l=o.borderBoxSize,u=Array.isArray(l)?l[0]:l;s=u.inlineSize,a=u.blockSize}else s=e.offsetWidth,a=e.offsetHeight;n({width:s,height:a})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}var Qv="Popper",[Xv,Zv]=wl(Qv),[iA,Jv]=Xv(Qv),ey="PopperAnchor",ty=w.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:r,...i}=e,o=Jv(ey,n),s=w.useRef(null),a=Ft(t,s);return w.useEffect(()=>{o.onAnchorChange((r==null?void 0:r.current)||s.current)}),r?null:c.jsx(nt.div,{...i,ref:a})});ty.displayName=ey;var kf="PopperContent",[BC,$C]=Xv(kf),ny=w.forwardRef((e,t)=>{var ee,$r,yn,dr,wn,Ur;const{__scopePopper:n,side:r="bottom",sideOffset:i=0,align:o="center",alignOffset:s=0,arrowPadding:a=0,avoidCollisions:l=!0,collisionBoundary:u=[],collisionPadding:d=0,sticky:f="partial",hideWhenDetached:p=!1,updatePositionStrategy:h="optimized",onPlaced:b,...m}=e,y=Jv(kf,n),[g,x]=w.useState(null),v=Ft(t,bn=>x(bn)),[S,k]=w.useState(null),C=VC(S),E=(C==null?void 0:C.width)??0,j=(C==null?void 0:C.height)??0,T=r+(o!=="center"?"-"+o:""),A=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},L=Array.isArray(u)?u:[u],O=L.length>0,K={padding:A,boundary:L.filter(WC),altBoundary:O},{refs:I,floatingStyles:Y,placement:$,isPositioned:V,middlewareData:P}=NC({strategy:"fixed",placement:T,whileElementsMounted:(...bn)=>yC(...bn,{animationFrame:h==="always"}),elements:{reference:y.anchor},middleware:[AC({mainAxis:i+j,alignmentAxis:s}),l&&MC({mainAxis:!0,crossAxis:!1,limiter:f==="partial"?DC():void 0,...K}),l&&LC({...K}),OC({...K,apply:({elements:bn,rects:ws,availableWidth:Il,availableHeight:bs})=>{const{width:zl,height:qi}=ws.reference,Wr=bn.floating.style;Wr.setProperty("--radix-popper-available-width",`${Il}px`),Wr.setProperty("--radix-popper-available-height",`${bs}px`),Wr.setProperty("--radix-popper-anchor-width",`${zl}px`),Wr.setProperty("--radix-popper-anchor-height",`${qi}px`)}}),S&&zC({element:S,padding:a}),HC({arrowWidth:E,arrowHeight:j}),p&&IC({strategy:"referenceHidden",...K})]}),[R,z]=oy($),U=er(b);tr(()=>{V&&(U==null||U())},[V,U]);const B=(ee=P.arrow)==null?void 0:ee.x,q=($r=P.arrow)==null?void 0:$r.y,X=((yn=P.arrow)==null?void 0:yn.centerOffset)!==0,[ve,Me]=w.useState();return tr(()=>{g&&Me(window.getComputedStyle(g).zIndex)},[g]),c.jsx("div",{ref:I.setFloating,"data-radix-popper-content-wrapper":"",style:{...Y,transform:V?Y.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ve,"--radix-popper-transform-origin":[(dr=P.transformOrigin)==null?void 0:dr.x,(wn=P.transformOrigin)==null?void 0:wn.y].join(" "),...((Ur=P.hide)==null?void 0:Ur.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:c.jsx(BC,{scope:n,placedSide:R,onArrowChange:k,arrowX:B,arrowY:q,shouldHideArrow:X,children:c.jsx(nt.div,{"data-side":R,"data-align":z,...m,ref:v,style:{...m.style,animation:V?void 0:"none"}})})})});ny.displayName=kf;var ry="PopperArrow",UC={top:"bottom",right:"left",bottom:"top",left:"right"},iy=w.forwardRef(function(t,n){const{__scopePopper:r,...i}=t,o=$C(ry,r),s=UC[o.placedSide];return c.jsx("span",{ref:o.onArrowChange,style:{position:"absolute",left:o.arrowX,top:o.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[o.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[o.placedSide],visibility:o.shouldHideArrow?"hidden":void 0},children:c.jsx(_C,{...i,ref:n,style:{...i.style,display:"block"}})})});iy.displayName=ry;function WC(e){return e!==null}var HC=e=>({name:"transformOrigin",options:e,fn(t){var y,g,x;const{placement:n,rects:r,middlewareData:i}=t,s=((y=i.arrow)==null?void 0:y.centerOffset)!==0,a=s?0:e.arrowWidth,l=s?0:e.arrowHeight,[u,d]=oy(n),f={start:"0%",center:"50%",end:"100%"}[d],p=(((g=i.arrow)==null?void 0:g.x)??0)+a/2,h=(((x=i.arrow)==null?void 0:x.y)??0)+l/2;let b="",m="";return u==="bottom"?(b=s?f:`${p}px`,m=`${-l}px`):u==="top"?(b=s?f:`${p}px`,m=`${r.floating.height+l}px`):u==="right"?(b=`${-l}px`,m=s?f:`${h}px`):u==="left"&&(b=`${r.floating.width+l}px`,m=s?f:`${h}px`),{data:{x:b,y:m}}}});function oy(e){const[t,n="center"]=e.split("-");return[t,n]}var GC=ty,KC=ny,YC=iy,[jl,oA]=wl("Tooltip",[Zv]),Cf=Zv(),sy="TooltipProvider",qC=700,Gh="tooltip.open",[QC,ay]=jl(sy),ly=e=>{const{__scopeTooltip:t,delayDuration:n=qC,skipDelayDuration:r=300,disableHoverableContent:i=!1,children:o}=e,s=w.useRef(!0),a=w.useRef(!1),l=w.useRef(0);return w.useEffect(()=>{const u=l.current;return()=>window.clearTimeout(u)},[]),c.jsx(QC,{scope:t,isOpenDelayedRef:s,delayDuration:n,onOpen:w.useCallback(()=>{window.clearTimeout(l.current),s.current=!1},[]),onClose:w.useCallback(()=>{window.clearTimeout(l.current),l.current=window.setTimeout(()=>s.current=!0,r)},[r]),isPointerInTransitRef:a,onPointerInTransitChange:w.useCallback(u=>{a.current=u},[]),disableHoverableContent:i,children:o})};ly.displayName=sy;var cy="Tooltip",[sA,Tl]=jl(cy),Bu="TooltipTrigger",XC=w.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,i=Tl(Bu,n),o=ay(Bu,n),s=Cf(n),a=w.useRef(null),l=Ft(t,a,i.onTriggerChange),u=w.useRef(!1),d=w.useRef(!1),f=w.useCallback(()=>u.current=!1,[]);return w.useEffect(()=>()=>document.removeEventListener("pointerup",f),[f]),c.jsx(GC,{asChild:!0,...s,children:c.jsx(nt.button,{"aria-describedby":i.open?i.contentId:void 0,"data-state":i.stateAttribute,...r,ref:l,onPointerMove:Ce(e.onPointerMove,p=>{p.pointerType!=="touch"&&!d.current&&!o.isPointerInTransitRef.current&&(i.onTriggerEnter(),d.current=!0)}),onPointerLeave:Ce(e.onPointerLeave,()=>{i.onTriggerLeave(),d.current=!1}),onPointerDown:Ce(e.onPointerDown,()=>{i.open&&i.onClose(),u.current=!0,document.addEventListener("pointerup",f,{once:!0})}),onFocus:Ce(e.onFocus,()=>{u.current||i.onOpen()}),onBlur:Ce(e.onBlur,i.onClose),onClick:Ce(e.onClick,i.onClose)})})});XC.displayName=Bu;var ZC="TooltipPortal",[aA,JC]=jl(ZC,{forceMount:void 0}),Ii="TooltipContent",uy=w.forwardRef((e,t)=>{const n=JC(Ii,e.__scopeTooltip),{forceMount:r=n.forceMount,side:i="top",...o}=e,s=Tl(Ii,e.__scopeTooltip);return c.jsx(df,{present:r||s.open,children:s.disableHoverableContent?c.jsx(dy,{side:i,...o,ref:t}):c.jsx(eE,{side:i,...o,ref:t})})}),eE=w.forwardRef((e,t)=>{const n=Tl(Ii,e.__scopeTooltip),r=ay(Ii,e.__scopeTooltip),i=w.useRef(null),o=Ft(t,i),[s,a]=w.useState(null),{trigger:l,onClose:u}=n,d=i.current,{onPointerInTransitChange:f}=r,p=w.useCallback(()=>{a(null),f(!1)},[f]),h=w.useCallback((b,m)=>{const y=b.currentTarget,g={x:b.clientX,y:b.clientY},x=oE(g,y.getBoundingClientRect()),v=sE(g,x),S=aE(m.getBoundingClientRect()),k=cE([...v,...S]);a(k),f(!0)},[f]);return w.useEffect(()=>()=>p(),[p]),w.useEffect(()=>{if(l&&d){const b=y=>h(y,d),m=y=>h(y,l);return l.addEventListener("pointerleave",b),d.addEventListener("pointerleave",m),()=>{l.removeEventListener("pointerleave",b),d.removeEventListener("pointerleave",m)}}},[l,d,h,p]),w.useEffect(()=>{if(s){const b=m=>{const y=m.target,g={x:m.clientX,y:m.clientY},x=(l==null?void 0:l.contains(y))||(d==null?void 0:d.contains(y)),v=!lE(g,s);x?p():v&&(p(),u())};return document.addEventListener("pointermove",b),()=>document.removeEventListener("pointermove",b)}},[l,d,s,u,p]),c.jsx(dy,{...e,ref:o})}),[tE,nE]=jl(cy,{isInside:!1}),rE=f2("TooltipContent"),dy=w.forwardRef((e,t)=>{const{__scopeTooltip:n,children:r,"aria-label":i,onEscapeKeyDown:o,onPointerDownOutside:s,...a}=e,l=Tl(Ii,n),u=Cf(n),{onClose:d}=l;return w.useEffect(()=>(document.addEventListener(Gh,d),()=>document.removeEventListener(Gh,d)),[d]),w.useEffect(()=>{if(l.trigger){const f=p=>{const h=p.target;h!=null&&h.contains(l.trigger)&&d()};return window.addEventListener("scroll",f,{capture:!0}),()=>window.removeEventListener("scroll",f,{capture:!0})}},[l.trigger,d]),c.jsx(uf,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:o,onPointerDownOutside:s,onFocusOutside:f=>f.preventDefault(),onDismiss:d,children:c.jsxs(KC,{"data-state":l.stateAttribute,...u,...a,ref:t,style:{...a.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[c.jsx(rE,{children:r}),c.jsx(tE,{scope:n,isInside:!0,children:c.jsx(z2,{id:l.contentId,role:"tooltip",children:i||r})})]})})});uy.displayName=Ii;var fy="TooltipArrow",iE=w.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,i=Cf(n);return nE(fy,n).isInside?null:c.jsx(YC,{...i,...r,ref:t})});iE.displayName=fy;function oE(e,t){const n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),i=Math.abs(t.right-e.x),o=Math.abs(t.left-e.x);switch(Math.min(n,r,i,o)){case o:return"left";case i:return"right";case n:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function sE(e,t,n=5){const r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n});break}return r}function aE(e){const{top:t,right:n,bottom:r,left:i}=e;return[{x:i,y:t},{x:n,y:t},{x:n,y:r},{x:i,y:r}]}function lE(e,t){const{x:n,y:r}=e;let i=!1;for(let o=0,s=t.length-1;o<t.length;s=o++){const a=t[o],l=t[s],u=a.x,d=a.y,f=l.x,p=l.y;d>r!=p>r&&n<(f-u)*(r-d)/(p-d)+u&&(i=!i)}return i}function cE(e){const t=e.slice();return t.sort((n,r)=>n.x<r.x?-1:n.x>r.x?1:n.y<r.y?-1:n.y>r.y?1:0),uE(t)}function uE(e){if(e.length<=1)return e.slice();const t=[];for(let r=0;r<e.length;r++){const i=e[r];for(;t.length>=2;){const o=t[t.length-1],s=t[t.length-2];if((o.x-s.x)*(i.y-s.y)>=(o.y-s.y)*(i.x-s.x))t.pop();else break}t.push(i)}t.pop();const n=[];for(let r=e.length-1;r>=0;r--){const i=e[r];for(;n.length>=2;){const o=n[n.length-1],s=n[n.length-2];if((o.x-s.x)*(i.y-s.y)>=(o.y-s.y)*(i.x-s.x))n.pop();else break}n.push(i)}return n.pop(),t.length===1&&n.length===1&&t[0].x===n[0].x&&t[0].y===n[0].y?t:t.concat(n)}var dE=ly,py=uy;const fE=dE,pE=w.forwardRef(({className:e,sideOffset:t=4,...n},r)=>c.jsx(py,{ref:r,sideOffset:t,className:cr("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n}));pE.displayName=py.displayName;var Pl=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Nl=typeof window>"u"||"Deno"in globalThis;function Rt(){}function hE(e,t){return typeof e=="function"?e(t):e}function mE(e){return typeof e=="number"&&e>=0&&e!==1/0}function gE(e,t){return Math.max(e+(t||0)-Date.now(),0)}function $u(e,t){return typeof e=="function"?e(t):e}function xE(e,t){return typeof e=="function"?e(t):e}function Kh(e,t){const{type:n="all",exact:r,fetchStatus:i,predicate:o,queryKey:s,stale:a}=e;if(s){if(r){if(t.queryHash!==Ef(s,t.options))return!1}else if(!Qo(t.queryKey,s))return!1}if(n!=="all"){const l=t.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&t.isStale()!==a||i&&i!==t.state.fetchStatus||o&&!o(t))}function Yh(e,t){const{exact:n,status:r,predicate:i,mutationKey:o}=e;if(o){if(!t.options.mutationKey)return!1;if(n){if(qo(t.options.mutationKey)!==qo(o))return!1}else if(!Qo(t.options.mutationKey,o))return!1}return!(r&&t.state.status!==r||i&&!i(t))}function Ef(e,t){return((t==null?void 0:t.queryKeyHashFn)||qo)(e)}function qo(e){return JSON.stringify(e,(t,n)=>Uu(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function Qo(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?Object.keys(t).every(n=>Qo(e[n],t[n])):!1}function hy(e,t){if(e===t)return e;const n=qh(e)&&qh(t);if(n||Uu(e)&&Uu(t)){const r=n?e:Object.keys(e),i=r.length,o=n?t:Object.keys(t),s=o.length,a=n?[]:{},l=new Set(r);let u=0;for(let d=0;d<s;d++){const f=n?d:o[d];(!n&&l.has(f)||n)&&e[f]===void 0&&t[f]===void 0?(a[f]=void 0,u++):(a[f]=hy(e[f],t[f]),a[f]===e[f]&&e[f]!==void 0&&u++)}return i===s&&u===i?e:a}return t}function qh(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function Uu(e){if(!Qh(e))return!1;const t=e.constructor;if(t===void 0)return!0;const n=t.prototype;return!(!Qh(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function Qh(e){return Object.prototype.toString.call(e)==="[object Object]"}function vE(e){return new Promise(t=>{setTimeout(t,e)})}function yE(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?hy(e,t):t}function wE(e,t,n=0){const r=[...e,t];return n&&r.length>n?r.slice(1):r}function bE(e,t,n=0){const r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var jf=Symbol();function my(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===jf?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var kr,Ln,wi,Tg,SE=(Tg=class extends Pl{constructor(){super();J(this,kr);J(this,Ln);J(this,wi);H(this,wi,t=>{if(!Nl&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){N(this,Ln)||this.setEventListener(N(this,wi))}onUnsubscribe(){var t;this.hasListeners()||((t=N(this,Ln))==null||t.call(this),H(this,Ln,void 0))}setEventListener(t){var n;H(this,wi,t),(n=N(this,Ln))==null||n.call(this),H(this,Ln,t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(t){N(this,kr)!==t&&(H(this,kr,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(n=>{n(t)})}isFocused(){var t;return typeof N(this,kr)=="boolean"?N(this,kr):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},kr=new WeakMap,Ln=new WeakMap,wi=new WeakMap,Tg),gy=new SE,bi,On,Si,Pg,kE=(Pg=class extends Pl{constructor(){super();J(this,bi,!0);J(this,On);J(this,Si);H(this,Si,t=>{if(!Nl&&window.addEventListener){const n=()=>t(!0),r=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){N(this,On)||this.setEventListener(N(this,Si))}onUnsubscribe(){var t;this.hasListeners()||((t=N(this,On))==null||t.call(this),H(this,On,void 0))}setEventListener(t){var n;H(this,Si,t),(n=N(this,On))==null||n.call(this),H(this,On,t(this.setOnline.bind(this)))}setOnline(t){N(this,bi)!==t&&(H(this,bi,t),this.listeners.forEach(r=>{r(t)}))}isOnline(){return N(this,bi)}},bi=new WeakMap,On=new WeakMap,Si=new WeakMap,Pg),Ka=new kE;function CE(){let e,t;const n=new Promise((i,o)=>{e=i,t=o});n.status="pending",n.catch(()=>{});function r(i){Object.assign(n,i),delete n.resolve,delete n.reject}return n.resolve=i=>{r({status:"fulfilled",value:i}),e(i)},n.reject=i=>{r({status:"rejected",reason:i}),t(i)},n}function EE(e){return Math.min(1e3*2**e,3e4)}function xy(e){return(e??"online")==="online"?Ka.isOnline():!0}var vy=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function yc(e){return e instanceof vy}function yy(e){let t=!1,n=0,r=!1,i;const o=CE(),s=m=>{var y;r||(p(new vy(m)),(y=e.abort)==null||y.call(e))},a=()=>{t=!0},l=()=>{t=!1},u=()=>gy.isFocused()&&(e.networkMode==="always"||Ka.isOnline())&&e.canRun(),d=()=>xy(e.networkMode)&&e.canRun(),f=m=>{var y;r||(r=!0,(y=e.onSuccess)==null||y.call(e,m),i==null||i(),o.resolve(m))},p=m=>{var y;r||(r=!0,(y=e.onError)==null||y.call(e,m),i==null||i(),o.reject(m))},h=()=>new Promise(m=>{var y;i=g=>{(r||u())&&m(g)},(y=e.onPause)==null||y.call(e)}).then(()=>{var m;i=void 0,r||(m=e.onContinue)==null||m.call(e)}),b=()=>{if(r)return;let m;const y=n===0?e.initialPromise:void 0;try{m=y??e.fn()}catch(g){m=Promise.reject(g)}Promise.resolve(m).then(f).catch(g=>{var C;if(r)return;const x=e.retry??(Nl?0:3),v=e.retryDelay??EE,S=typeof v=="function"?v(n,g):v,k=x===!0||typeof x=="number"&&n<x||typeof x=="function"&&x(n,g);if(t||!k){p(g);return}n++,(C=e.onFail)==null||C.call(e,n,g),vE(S).then(()=>u()?void 0:h()).then(()=>{t?p(g):b()})})};return{promise:o,cancel:s,continue:()=>(i==null||i(),o),cancelRetry:a,continueRetry:l,canStart:d,start:()=>(d()?b():h().then(b),o)}}var jE=e=>setTimeout(e,0);function TE(){let e=[],t=0,n=a=>{a()},r=a=>{a()},i=jE;const o=a=>{t?e.push(a):i(()=>{n(a)})},s=()=>{const a=e;e=[],a.length&&i(()=>{r(()=>{a.forEach(l=>{n(l)})})})};return{batch:a=>{let l;t++;try{l=a()}finally{t--,t||s()}return l},batchCalls:a=>(...l)=>{o(()=>{a(...l)})},schedule:o,setNotifyFunction:a=>{n=a},setBatchNotifyFunction:a=>{r=a},setScheduler:a=>{i=a}}}var $e=TE(),Cr,Ng,wy=(Ng=class{constructor(){J(this,Cr)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),mE(this.gcTime)&&H(this,Cr,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(Nl?1/0:5*60*1e3))}clearGcTimeout(){N(this,Cr)&&(clearTimeout(N(this,Cr)),H(this,Cr,void 0))}},Cr=new WeakMap,Ng),ki,Er,pt,jr,Ie,is,Tr,At,rn,Rg,PE=(Rg=class extends wy{constructor(t){super();J(this,At);J(this,ki);J(this,Er);J(this,pt);J(this,jr);J(this,Ie);J(this,is);J(this,Tr);H(this,Tr,!1),H(this,is,t.defaultOptions),this.setOptions(t.options),this.observers=[],H(this,jr,t.client),H(this,pt,N(this,jr).getQueryCache()),this.queryKey=t.queryKey,this.queryHash=t.queryHash,H(this,ki,RE(this.options)),this.state=t.state??N(this,ki),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=N(this,Ie))==null?void 0:t.promise}setOptions(t){this.options={...N(this,is),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&N(this,pt).remove(this)}setData(t,n){const r=yE(this.state.data,t,this.options);return De(this,At,rn).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t,n){De(this,At,rn).call(this,{type:"setState",state:t,setStateOptions:n})}cancel(t){var r,i;const n=(r=N(this,Ie))==null?void 0:r.promise;return(i=N(this,Ie))==null||i.cancel(t),n?n.then(Rt).catch(Rt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(N(this,ki))}isActive(){return this.observers.some(t=>xE(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===jf||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(t=>$u(t.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(t=0){return this.state.data===void 0?!0:t==="static"?!1:this.state.isInvalidated?!0:!gE(this.state.dataUpdatedAt,t)}onFocus(){var n;const t=this.observers.find(r=>r.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(n=N(this,Ie))==null||n.continue()}onOnline(){var n;const t=this.observers.find(r=>r.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(n=N(this,Ie))==null||n.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),N(this,pt).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(N(this,Ie)&&(N(this,Tr)?N(this,Ie).cancel({revert:!0}):N(this,Ie).cancelRetry()),this.scheduleGc()),N(this,pt).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||De(this,At,rn).call(this,{type:"invalidate"})}fetch(t,n){var u,d,f;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(N(this,Ie))return N(this,Ie).continueRetry(),N(this,Ie).promise}if(t&&this.setOptions(t),!this.options.queryFn){const p=this.observers.find(h=>h.options.queryFn);p&&this.setOptions(p.options)}const r=new AbortController,i=p=>{Object.defineProperty(p,"signal",{enumerable:!0,get:()=>(H(this,Tr,!0),r.signal)})},o=()=>{const p=my(this.options,n),b=(()=>{const m={client:N(this,jr),queryKey:this.queryKey,meta:this.meta};return i(m),m})();return H(this,Tr,!1),this.options.persister?this.options.persister(p,b,this):p(b)},a=(()=>{const p={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:N(this,jr),state:this.state,fetchFn:o};return i(p),p})();(u=this.options.behavior)==null||u.onFetch(a,this),H(this,Er,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((d=a.fetchOptions)==null?void 0:d.meta))&&De(this,At,rn).call(this,{type:"fetch",meta:(f=a.fetchOptions)==null?void 0:f.meta});const l=p=>{var h,b,m,y;yc(p)&&p.silent||De(this,At,rn).call(this,{type:"error",error:p}),yc(p)||((b=(h=N(this,pt).config).onError)==null||b.call(h,p,this),(y=(m=N(this,pt).config).onSettled)==null||y.call(m,this.state.data,p,this)),this.scheduleGc()};return H(this,Ie,yy({initialPromise:n==null?void 0:n.initialPromise,fn:a.fetchFn,abort:r.abort.bind(r),onSuccess:p=>{var h,b,m,y;if(p===void 0){l(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(p)}catch(g){l(g);return}(b=(h=N(this,pt).config).onSuccess)==null||b.call(h,p,this),(y=(m=N(this,pt).config).onSettled)==null||y.call(m,p,this.state.error,this),this.scheduleGc()},onError:l,onFail:(p,h)=>{De(this,At,rn).call(this,{type:"failed",failureCount:p,error:h})},onPause:()=>{De(this,At,rn).call(this,{type:"pause"})},onContinue:()=>{De(this,At,rn).call(this,{type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode,canRun:()=>!0})),N(this,Ie).start()}},ki=new WeakMap,Er=new WeakMap,pt=new WeakMap,jr=new WeakMap,Ie=new WeakMap,is=new WeakMap,Tr=new WeakMap,At=new WeakSet,rn=function(t){const n=r=>{switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...NE(r.data,this.options),fetchMeta:t.meta??null};case"success":return H(this,Er,void 0),{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const i=t.error;return yc(i)&&i.revert&&N(this,Er)?{...N(this,Er),fetchStatus:"idle"}:{...r,error:i,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),$e.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),N(this,pt).notify({query:this,type:"updated",action:t})})},Rg);function NE(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:xy(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function RE(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var Ut,Ag,AE=(Ag=class extends Pl{constructor(t={}){super();J(this,Ut);this.config=t,H(this,Ut,new Map)}build(t,n,r){const i=n.queryKey,o=n.queryHash??Ef(i,n);let s=this.get(o);return s||(s=new PE({client:t,queryKey:i,queryHash:o,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(i)}),this.add(s)),s}add(t){N(this,Ut).has(t.queryHash)||(N(this,Ut).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const n=N(this,Ut).get(t.queryHash);n&&(t.destroy(),n===t&&N(this,Ut).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){$e.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return N(this,Ut).get(t)}getAll(){return[...N(this,Ut).values()]}find(t){const n={exact:!0,...t};return this.getAll().find(r=>Kh(n,r))}findAll(t={}){const n=this.getAll();return Object.keys(t).length>0?n.filter(r=>Kh(t,r)):n}notify(t){$e.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){$e.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){$e.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},Ut=new WeakMap,Ag),Wt,Ve,Pr,Ht,Pn,Mg,ME=(Mg=class extends wy{constructor(t){super();J(this,Ht);J(this,Wt);J(this,Ve);J(this,Pr);this.mutationId=t.mutationId,H(this,Ve,t.mutationCache),H(this,Wt,[]),this.state=t.state||DE(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){N(this,Wt).includes(t)||(N(this,Wt).push(t),this.clearGcTimeout(),N(this,Ve).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){H(this,Wt,N(this,Wt).filter(n=>n!==t)),this.scheduleGc(),N(this,Ve).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){N(this,Wt).length||(this.state.status==="pending"?this.scheduleGc():N(this,Ve).remove(this))}continue(){var t;return((t=N(this,Pr))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var o,s,a,l,u,d,f,p,h,b,m,y,g,x,v,S,k,C,E,j;const n=()=>{De(this,Ht,Pn).call(this,{type:"continue"})};H(this,Pr,yy({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(T,A)=>{De(this,Ht,Pn).call(this,{type:"failed",failureCount:T,error:A})},onPause:()=>{De(this,Ht,Pn).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>N(this,Ve).canRun(this)}));const r=this.state.status==="pending",i=!N(this,Pr).canStart();try{if(r)n();else{De(this,Ht,Pn).call(this,{type:"pending",variables:t,isPaused:i}),await((s=(o=N(this,Ve).config).onMutate)==null?void 0:s.call(o,t,this));const A=await((l=(a=this.options).onMutate)==null?void 0:l.call(a,t));A!==this.state.context&&De(this,Ht,Pn).call(this,{type:"pending",context:A,variables:t,isPaused:i})}const T=await N(this,Pr).start();return await((d=(u=N(this,Ve).config).onSuccess)==null?void 0:d.call(u,T,t,this.state.context,this)),await((p=(f=this.options).onSuccess)==null?void 0:p.call(f,T,t,this.state.context)),await((b=(h=N(this,Ve).config).onSettled)==null?void 0:b.call(h,T,null,this.state.variables,this.state.context,this)),await((y=(m=this.options).onSettled)==null?void 0:y.call(m,T,null,t,this.state.context)),De(this,Ht,Pn).call(this,{type:"success",data:T}),T}catch(T){try{throw await((x=(g=N(this,Ve).config).onError)==null?void 0:x.call(g,T,t,this.state.context,this)),await((S=(v=this.options).onError)==null?void 0:S.call(v,T,t,this.state.context)),await((C=(k=N(this,Ve).config).onSettled)==null?void 0:C.call(k,void 0,T,this.state.variables,this.state.context,this)),await((j=(E=this.options).onSettled)==null?void 0:j.call(E,void 0,T,t,this.state.context)),T}finally{De(this,Ht,Pn).call(this,{type:"error",error:T})}}finally{N(this,Ve).runNext(this)}}},Wt=new WeakMap,Ve=new WeakMap,Pr=new WeakMap,Ht=new WeakSet,Pn=function(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=n(this.state),$e.batch(()=>{N(this,Wt).forEach(r=>{r.onMutationUpdate(t)}),N(this,Ve).notify({mutation:this,type:"updated",action:t})})},Mg);function DE(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var an,Mt,os,Dg,LE=(Dg=class extends Pl{constructor(t={}){super();J(this,an);J(this,Mt);J(this,os);this.config=t,H(this,an,new Set),H(this,Mt,new Map),H(this,os,0)}build(t,n,r){const i=new ME({mutationCache:this,mutationId:++ks(this,os)._,options:t.defaultMutationOptions(n),state:r});return this.add(i),i}add(t){N(this,an).add(t);const n=Hs(t);if(typeof n=="string"){const r=N(this,Mt).get(n);r?r.push(t):N(this,Mt).set(n,[t])}this.notify({type:"added",mutation:t})}remove(t){if(N(this,an).delete(t)){const n=Hs(t);if(typeof n=="string"){const r=N(this,Mt).get(n);if(r)if(r.length>1){const i=r.indexOf(t);i!==-1&&r.splice(i,1)}else r[0]===t&&N(this,Mt).delete(n)}}this.notify({type:"removed",mutation:t})}canRun(t){const n=Hs(t);if(typeof n=="string"){const r=N(this,Mt).get(n),i=r==null?void 0:r.find(o=>o.state.status==="pending");return!i||i===t}else return!0}runNext(t){var r;const n=Hs(t);if(typeof n=="string"){const i=(r=N(this,Mt).get(n))==null?void 0:r.find(o=>o!==t&&o.state.isPaused);return(i==null?void 0:i.continue())??Promise.resolve()}else return Promise.resolve()}clear(){$e.batch(()=>{N(this,an).forEach(t=>{this.notify({type:"removed",mutation:t})}),N(this,an).clear(),N(this,Mt).clear()})}getAll(){return Array.from(N(this,an))}find(t){const n={exact:!0,...t};return this.getAll().find(r=>Yh(n,r))}findAll(t={}){return this.getAll().filter(n=>Yh(t,n))}notify(t){$e.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){const t=this.getAll().filter(n=>n.state.isPaused);return $e.batch(()=>Promise.all(t.map(n=>n.continue().catch(Rt))))}},an=new WeakMap,Mt=new WeakMap,os=new WeakMap,Dg);function Hs(e){var t;return(t=e.options.scope)==null?void 0:t.id}function Xh(e){return{onFetch:(t,n)=>{var d,f,p,h,b;const r=t.options,i=(p=(f=(d=t.fetchOptions)==null?void 0:d.meta)==null?void 0:f.fetchMore)==null?void 0:p.direction,o=((h=t.state.data)==null?void 0:h.pages)||[],s=((b=t.state.data)==null?void 0:b.pageParams)||[];let a={pages:[],pageParams:[]},l=0;const u=async()=>{let m=!1;const y=v=>{Object.defineProperty(v,"signal",{enumerable:!0,get:()=>(t.signal.aborted?m=!0:t.signal.addEventListener("abort",()=>{m=!0}),t.signal)})},g=my(t.options,t.fetchOptions),x=async(v,S,k)=>{if(m)return Promise.reject();if(S==null&&v.pages.length)return Promise.resolve(v);const E=(()=>{const L={client:t.client,queryKey:t.queryKey,pageParam:S,direction:k?"backward":"forward",meta:t.options.meta};return y(L),L})(),j=await g(E),{maxPages:T}=t.options,A=k?bE:wE;return{pages:A(v.pages,j,T),pageParams:A(v.pageParams,S,T)}};if(i&&o.length){const v=i==="backward",S=v?OE:Zh,k={pages:o,pageParams:s},C=S(r,k);a=await x(k,C,v)}else{const v=e??o.length;do{const S=l===0?s[0]??r.initialPageParam:Zh(r,a);if(l>0&&S==null)break;a=await x(a,S),l++}while(l<v)}return a};t.options.persister?t.fetchFn=()=>{var m,y;return(y=(m=t.options).persister)==null?void 0:y.call(m,u,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=u}}}function Zh(e,{pages:t,pageParams:n}){const r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}function OE(e,{pages:t,pageParams:n}){var r;return t.length>0?(r=e.getPreviousPageParam)==null?void 0:r.call(e,t[0],t,n[0],n):void 0}var me,In,zn,Ci,Ei,Fn,ji,Ti,Lg,IE=(Lg=class{constructor(e={}){J(this,me);J(this,In);J(this,zn);J(this,Ci);J(this,Ei);J(this,Fn);J(this,ji);J(this,Ti);H(this,me,e.queryCache||new AE),H(this,In,e.mutationCache||new LE),H(this,zn,e.defaultOptions||{}),H(this,Ci,new Map),H(this,Ei,new Map),H(this,Fn,0)}mount(){ks(this,Fn)._++,N(this,Fn)===1&&(H(this,ji,gy.subscribe(async e=>{e&&(await this.resumePausedMutations(),N(this,me).onFocus())})),H(this,Ti,Ka.subscribe(async e=>{e&&(await this.resumePausedMutations(),N(this,me).onOnline())})))}unmount(){var e,t;ks(this,Fn)._--,N(this,Fn)===0&&((e=N(this,ji))==null||e.call(this),H(this,ji,void 0),(t=N(this,Ti))==null||t.call(this),H(this,Ti,void 0))}isFetching(e){return N(this,me).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return N(this,In).findAll({...e,status:"pending"}).length}getQueryData(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=N(this,me).get(t.queryHash))==null?void 0:n.state.data}ensureQueryData(e){const t=this.defaultQueryOptions(e),n=N(this,me).build(this,t),r=n.state.data;return r===void 0?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime($u(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(e){return N(this,me).findAll(e).map(({queryKey:t,state:n})=>{const r=n.data;return[t,r]})}setQueryData(e,t,n){const r=this.defaultQueryOptions({queryKey:e}),i=N(this,me).get(r.queryHash),o=i==null?void 0:i.state.data,s=hE(t,o);if(s!==void 0)return N(this,me).build(this,r).setData(s,{...n,manual:!0})}setQueriesData(e,t,n){return $e.batch(()=>N(this,me).findAll(e).map(({queryKey:r})=>[r,this.setQueryData(r,t,n)]))}getQueryState(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=N(this,me).get(t.queryHash))==null?void 0:n.state}removeQueries(e){const t=N(this,me);$e.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){const n=N(this,me);return $e.batch(()=>(n.findAll(e).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){const n={revert:!0,...t},r=$e.batch(()=>N(this,me).findAll(e).map(i=>i.cancel(n)));return Promise.all(r).then(Rt).catch(Rt)}invalidateQueries(e,t={}){return $e.batch(()=>(N(this,me).findAll(e).forEach(n=>{n.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},t)))}refetchQueries(e,t={}){const n={...t,cancelRefetch:t.cancelRefetch??!0},r=$e.batch(()=>N(this,me).findAll(e).filter(i=>!i.isDisabled()&&!i.isStatic()).map(i=>{let o=i.fetch(void 0,n);return n.throwOnError||(o=o.catch(Rt)),i.state.fetchStatus==="paused"?Promise.resolve():o}));return Promise.all(r).then(Rt)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const n=N(this,me).build(this,t);return n.isStaleByTime($u(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(Rt).catch(Rt)}fetchInfiniteQuery(e){return e.behavior=Xh(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(Rt).catch(Rt)}ensureInfiniteQueryData(e){return e.behavior=Xh(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return Ka.isOnline()?N(this,In).resumePausedMutations():Promise.resolve()}getQueryCache(){return N(this,me)}getMutationCache(){return N(this,In)}getDefaultOptions(){return N(this,zn)}setDefaultOptions(e){H(this,zn,e)}setQueryDefaults(e,t){N(this,Ci).set(qo(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...N(this,Ci).values()],n={};return t.forEach(r=>{Qo(e,r.queryKey)&&Object.assign(n,r.defaultOptions)}),n}setMutationDefaults(e,t){N(this,Ei).set(qo(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...N(this,Ei).values()],n={};return t.forEach(r=>{Qo(e,r.mutationKey)&&Object.assign(n,r.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={...N(this,zn).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=Ef(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===jf&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...N(this,zn).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){N(this,me).clear(),N(this,In).clear()}},me=new WeakMap,In=new WeakMap,zn=new WeakMap,Ci=new WeakMap,Ei=new WeakMap,Fn=new WeakMap,ji=new WeakMap,Ti=new WeakMap,Lg),zE=w.createContext(void 0),FE=({client:e,children:t})=>(w.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),c.jsx(zE.Provider,{value:e,children:t}));/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xo(){return Xo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xo.apply(this,arguments)}var Bn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Bn||(Bn={}));const Jh="popstate";function _E(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return Wu("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ya(i)}return BE(t,n,null,e)}function be(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function by(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function VE(){return Math.random().toString(36).substr(2,8)}function em(e,t){return{usr:e.state,key:e.key,idx:t}}function Wu(e,t,n,r){return n===void 0&&(n=null),Xo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Hi(t):t,{state:n,key:t&&t.key||r||VE()})}function Ya(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Hi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function BE(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Bn.Pop,l=null,u=d();u==null&&(u=0,s.replaceState(Xo({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function f(){a=Bn.Pop;let y=d(),g=y==null?null:y-u;u=y,l&&l({action:a,location:m.location,delta:g})}function p(y,g){a=Bn.Push;let x=Wu(m.location,y,g);u=d()+1;let v=em(x,u),S=m.createHref(x);try{s.pushState(v,"",S)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(S)}o&&l&&l({action:a,location:m.location,delta:1})}function h(y,g){a=Bn.Replace;let x=Wu(m.location,y,g);u=d();let v=em(x,u),S=m.createHref(x);s.replaceState(v,"",S),o&&l&&l({action:a,location:m.location,delta:0})}function b(y){let g=i.location.origin!=="null"?i.location.origin:i.location.href,x=typeof y=="string"?y:Ya(y);return x=x.replace(/ $/,"%20"),be(g,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,g)}let m={get action(){return a},get location(){return e(i,s)},listen(y){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Jh,f),l=y,()=>{i.removeEventListener(Jh,f),l=null}},createHref(y){return t(i,y)},createURL:b,encodeLocation(y){let g=b(y);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:h,go(y){return s.go(y)}};return m}var tm;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(tm||(tm={}));function $E(e,t,n){return n===void 0&&(n="/"),UE(e,t,n,!1)}function UE(e,t,n,r){let i=typeof t=="string"?Hi(t):t,o=Tf(i.pathname||"/",n);if(o==null)return null;let s=Sy(e);WE(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let u=tj(o);a=JE(s[l],u,r)}return a}function Sy(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(be(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Xn([r,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(be(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Sy(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:XE(u,o.index),routesMeta:d})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of ky(o.path))i(o,s,l)}),t}function ky(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=ky(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function WE(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ZE(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const HE=/^:[\w-]+$/,GE=3,KE=2,YE=1,qE=10,QE=-2,nm=e=>e==="*";function XE(e,t){let n=e.split("/"),r=n.length;return n.some(nm)&&(r+=QE),t&&(r+=KE),n.filter(i=>!nm(i)).reduce((i,o)=>i+(HE.test(o)?GE:o===""?YE:qE),r)}function ZE(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function JE(e,t,n){let{routesMeta:r}=e,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",f=rm({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),p=l.route;if(!f&&u&&n&&!r[r.length-1].route.index&&(f=rm({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),s.push({params:i,pathname:Xn([o,f.pathname]),pathnameBase:oj(Xn([o,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(o=Xn([o,f.pathnameBase]))}return s}function rm(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ej(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:p,isOptional:h}=d;if(p==="*"){let m=a[f]||"";s=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}const b=a[f];return h&&!b?u[p]=void 0:u[p]=(b||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function ej(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),by(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function tj(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return by(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Tf(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function nj(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Hi(e):e;return{pathname:n?n.startsWith("/")?n:rj(n,t):t,search:sj(r),hash:aj(i)}}function rj(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function wc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ij(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Cy(e,t){let n=ij(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Ey(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Hi(e):(i=Xo({},e),be(!i.pathname||!i.pathname.includes("?"),wc("?","pathname","search",i)),be(!i.pathname||!i.pathname.includes("#"),wc("#","pathname","hash",i)),be(!i.search||!i.search.includes("#"),wc("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let f=t.length-1;if(!r&&s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}a=f>=0?t[f]:"/"}let l=nj(i,a),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Xn=e=>e.join("/").replace(/\/\/+/g,"/"),oj=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),sj=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,aj=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function lj(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const jy=["post","put","patch","delete"];new Set(jy);const cj=["get",...jy];new Set(cj);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zo(){return Zo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zo.apply(this,arguments)}const Pf=w.createContext(null),uj=w.createContext(null),Vr=w.createContext(null),Rl=w.createContext(null),Br=w.createContext({outlet:null,matches:[],isDataRoute:!1}),Ty=w.createContext(null);function dj(e,t){let{relative:n}=t===void 0?{}:t;hs()||be(!1);let{basename:r,navigator:i}=w.useContext(Vr),{hash:o,pathname:s,search:a}=Ny(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Xn([r,s])),i.createHref({pathname:l,search:a,hash:o})}function hs(){return w.useContext(Rl)!=null}function ms(){return hs()||be(!1),w.useContext(Rl).location}function Py(e){w.useContext(Vr).static||w.useLayoutEffect(e)}function fj(){let{isDataRoute:e}=w.useContext(Br);return e?Ej():pj()}function pj(){hs()||be(!1);let e=w.useContext(Pf),{basename:t,future:n,navigator:r}=w.useContext(Vr),{matches:i}=w.useContext(Br),{pathname:o}=ms(),s=JSON.stringify(Cy(i,n.v7_relativeSplatPath)),a=w.useRef(!1);return Py(()=>{a.current=!0}),w.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=Ey(u,JSON.parse(s),o,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Xn([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,s,o,e])}function Ny(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=w.useContext(Vr),{matches:i}=w.useContext(Br),{pathname:o}=ms(),s=JSON.stringify(Cy(i,r.v7_relativeSplatPath));return w.useMemo(()=>Ey(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function hj(e,t){return mj(e,t)}function mj(e,t,n,r){hs()||be(!1);let{navigator:i}=w.useContext(Vr),{matches:o}=w.useContext(Br),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=ms(),d;if(t){var f;let y=typeof t=="string"?Hi(t):t;l==="/"||(f=y.pathname)!=null&&f.startsWith(l)||be(!1),d=y}else d=u;let p=d.pathname||"/",h=p;if(l!=="/"){let y=l.replace(/^\//,"").split("/");h="/"+p.replace(/^\//,"").split("/").slice(y.length).join("/")}let b=$E(e,{pathname:h}),m=wj(b&&b.map(y=>Object.assign({},y,{params:Object.assign({},a,y.params),pathname:Xn([l,i.encodeLocation?i.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?l:Xn([l,i.encodeLocation?i.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),o,n,r);return t&&m?w.createElement(Rl.Provider,{value:{location:Zo({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Bn.Pop}},m):m}function gj(){let e=Cj(),t=lj(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:i},n):null,null)}const xj=w.createElement(gj,null);class vj extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(Br.Provider,{value:this.props.routeContext},w.createElement(Ty.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function yj(e){let{routeContext:t,match:n,children:r}=e,i=w.useContext(Pf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(Br.Provider,{value:t},r)}function wj(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=s.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||be(!1),s=s.slice(0,Math.min(s.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let f=s[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:p,errors:h}=n,b=f.route.loader&&p[f.route.id]===void 0&&(!h||h[f.route.id]===void 0);if(f.route.lazy||b){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((d,f,p)=>{let h,b=!1,m=null,y=null;n&&(h=a&&f.route.id?a[f.route.id]:void 0,m=f.route.errorElement||xj,l&&(u<0&&p===0?(b=!0,y=null):u===p&&(b=!0,y=f.route.hydrateFallbackElement||null)));let g=t.concat(s.slice(0,p+1)),x=()=>{let v;return h?v=m:b?v=y:f.route.Component?v=w.createElement(f.route.Component,null):f.route.element?v=f.route.element:v=d,w.createElement(yj,{match:f,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:v})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?w.createElement(vj,{location:n.location,revalidation:n.revalidation,component:m,error:h,children:x(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):x()},null)}var Ry=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Ry||{}),qa=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(qa||{});function bj(e){let t=w.useContext(Pf);return t||be(!1),t}function Sj(e){let t=w.useContext(uj);return t||be(!1),t}function kj(e){let t=w.useContext(Br);return t||be(!1),t}function Ay(e){let t=kj(),n=t.matches[t.matches.length-1];return n.route.id||be(!1),n.route.id}function Cj(){var e;let t=w.useContext(Ty),n=Sj(qa.UseRouteError),r=Ay(qa.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Ej(){let{router:e}=bj(Ry.UseNavigateStable),t=Ay(qa.UseNavigateStable),n=w.useRef(!1);return Py(()=>{n.current=!0}),w.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Zo({fromRouteId:t},o)))},[e,t])}function jj(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function po(e){be(!1)}function Tj(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Bn.Pop,navigator:o,static:s=!1,future:a}=e;hs()&&be(!1);let l=t.replace(/^\/*/,"/"),u=w.useMemo(()=>({basename:l,navigator:o,static:s,future:Zo({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=Hi(r));let{pathname:d="/",search:f="",hash:p="",state:h=null,key:b="default"}=r,m=w.useMemo(()=>{let y=Tf(d,l);return y==null?null:{location:{pathname:y,search:f,hash:p,state:h,key:b},navigationType:i}},[l,d,f,p,h,b,i]);return m==null?null:w.createElement(Vr.Provider,{value:u},w.createElement(Rl.Provider,{children:n,value:m}))}function Pj(e){let{children:t,location:n}=e;return hj(Hu(t),n)}new Promise(()=>{});function Hu(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,i)=>{if(!w.isValidElement(r))return;let o=[...t,i];if(r.type===w.Fragment){n.push.apply(n,Hu(r.props.children,o));return}r.type!==po&&be(!1),!r.props.index||!r.props.children||be(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Hu(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gu(){return Gu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gu.apply(this,arguments)}function Nj(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Rj(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Aj(e,t){return e.button===0&&(!t||t==="_self")&&!Rj(e)}const Mj=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Dj="6";try{window.__reactRouterVersion=Dj}catch{}const Lj="startTransition",im=Gg[Lj];function Oj(e){let{basename:t,children:n,future:r,window:i}=e,o=w.useRef();o.current==null&&(o.current=_E({window:i,v5Compat:!0}));let s=o.current,[a,l]=w.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},d=w.useCallback(f=>{u&&im?im(()=>l(f)):l(f)},[l,u]);return w.useLayoutEffect(()=>s.listen(d),[s,d]),w.useEffect(()=>jj(r),[r]),w.createElement(Tj,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const Ij=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",zj=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fj=w.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:d,viewTransition:f}=t,p=Nj(t,Mj),{basename:h}=w.useContext(Vr),b,m=!1;if(typeof u=="string"&&zj.test(u)&&(b=u,Ij))try{let v=new URL(window.location.href),S=u.startsWith("//")?new URL(v.protocol+u):new URL(u),k=Tf(S.pathname,h);S.origin===v.origin&&k!=null?u=k+S.search+S.hash:m=!0}catch{}let y=dj(u,{relative:i}),g=_j(u,{replace:s,state:a,target:l,preventScrollReset:d,relative:i,viewTransition:f});function x(v){r&&r(v),v.defaultPrevented||g(v)}return w.createElement("a",Gu({},p,{href:b||y,onClick:m||o?r:x,ref:n,target:l}))});var om;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(om||(om={}));var sm;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(sm||(sm={}));function _j(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:a}=t===void 0?{}:t,l=fj(),u=ms(),d=Ny(e,{relative:s});return w.useCallback(f=>{if(Aj(f,n)){f.preventDefault();let p=r!==void 0?r:Ya(u)===Ya(d);l(e,{replace:p,state:i,preventScrollReset:o,relative:s,viewTransition:a})}},[u,l,d,r,i,n,e,o,s,a])}const Vj=["AÇÃO","RPG","AVENTURA","MUNDO ABERTO","TERROR","SIMULADOR","SOBREVIVÊNCIA","CORRIDA","ESPORTES","FPS","INDIE","VR","COOP","OUTROS"],Bj=["Grand Theft Auto V Enhanced","Forza Horizon 6","ELDEN RING NIGHTREIGN","Red Dead Redemption 2","Cyberpunk 2077","The Sims™ 4","TEKKEN 8","Resident Evil 4","Fallout 4","LEGO® Batman™: Legacy of the Dark Knight","Devil May Cry 5","Assassin's Creed Valhalla","Far Cry 5","Batman™: Arkham Knight","Need for Speed™ Heat"],$j={gta:["Grand Theft Auto"],rdr:["Red Dead Redemption"],rdr2:["Red Dead Redemption 2"],tlou:["The Last of Us"],cod:["Call of Duty"],gow:["God of War"],mhw:["Monster Hunter: World"],ds3:["Dark Souls III"],hzd:["Horizon Zero Dawn"],got:["Ghost of Tsushima"],bg3:["Baldur's Gate 3"]},Uj={"Spider-Man":["remastered","spider-man remastered"],"The Last of Us":["part i","part 1"],"Red Dead":["redemption 2","rdr2"],"Dark Souls":["dark souls iii","dark souls 3"],"Resident Evil":["requiem"],"Monster Hunter":["world"],Horizon:["zero dawn"],"The Witcher":["witcher 3","wild hunt"],"Death Stranding":["director's cut","directors cut"],"Elden Ring":["elden ring"],Cyberpunk:["2077"],"Baldurs Gate":["gate 3","bg3"],GTA:["enhanced","grand theft auto v enhanced"]},Wj=[{key:"spider-man",franchise:"Spider-Man"},{key:"spiderman",franchise:"Spider-Man"},{key:"last of us",franchise:"The Last of Us"},{key:"red dead",franchise:"Red Dead"},{key:"dark souls",franchise:"Dark Souls"},{key:"resident evil",franchise:"Resident Evil"},{key:"monster hunter",franchise:"Monster Hunter"},{key:"horizon",franchise:"Horizon"},{key:"witcher",franchise:"The Witcher"},{key:"death stranding",franchise:"Death Stranding"},{key:"elden ring",franchise:"Elden Ring"},{key:"cyberpunk",franchise:"Cyberpunk"},{key:"baldur",franchise:"Baldurs Gate"},{key:"gta",franchise:"GTA"},{key:"grand theft auto",franchise:"GTA"},{key:"sekiro",franchise:"Sekiro"},{key:"hogwarts",franchise:"Hogwarts"},{key:"hollow knight",franchise:"Hollow Knight"}];function Hj(e){const t=e.toLowerCase();for(const{key:n,franchise:r}of Wj)if(t.includes(n))return r;return null}function Gj(e,t){const n=Uj[t];if(!n)return!0;const r=e.toLowerCase();return n.some(i=>r.includes(i))}function Kj(e){const t=new Map,n=[];for(const r of e){if(!r.cover||!r.steam_appid)continue;const i=Hj(r.name);if(i){const o=t.get(i);Gj(r.name,i)?t.set(i,r):o||t.set(i,r)}else n.push(r)}return[...t.values(),...n]}function Yj(e){if(!e.cover)return!1;const t=e.cover.toLowerCase();return!(t.includes("placeholder")||t.includes("default")||t===""||t.includes("missing"))}function My(){const[e,t]=w.useState([]),[n,r]=w.useState(!0);w.useEffect(()=>{fetch("data/games.json").then(l=>l.json()).then(l=>{const u=l.filter(Yj);t(u),r(!1)}).catch(l=>{console.error("Error loading games:",l),r(!1)})},[]);const i=[3240220,2483190,2622380,1174180,1091500,1222670,1778820,2050650,377160,2215200,601150,2208920,552520,208650,1222680],o=w.useMemo(()=>{const l=e.filter(p=>!p.cover||!p.steam_appid?!1:Bj.some(h=>p.name.toLowerCase().includes(h.toLowerCase())||h.toLowerCase().includes(p.name.toLowerCase()))),u=Kj(l),d=[],f=[];for(const p of u)i.includes(p.steam_appid)?d.push(p):f.push(p);return d.sort((p,h)=>i.indexOf(p.steam_appid)-i.indexOf(h.steam_appid)),[...d,...f]},[e]),s=l=>{if(!l.trim())return e;const u=l.toLowerCase().trim();for(const[d,f]of Object.entries($j))if(u.includes(d))return e.filter(p=>f.some(h=>p.name.toLowerCase().includes(h.toLowerCase())));return e.filter(d=>d.name.toLowerCase().includes(u))},a=l=>!l||l==="ALL"?e:e.filter(u=>u.categories.some(d=>d.toUpperCase()===l.toUpperCase()));return{games:e,aaaGames:o,loading:n,totalGames:e.length,searchGames:s,getGamesByCategory:a}}function qj({urgencyBarVisible:e=!1}){return c.jsxs("header",{className:"fixed inset-x-0 z-[1000] transition-all duration-300",style:{top:e?"48px":"0",background:"rgba(5,5,5,.72)",borderBottom:"1px solid rgba(255,255,255,.06)",backdropFilter:"blur(14px)"},children:[c.jsx("div",{className:"container-main",children:c.jsxs("nav",{className:"flex items-center justify-between py-3.5 gap-4",children:[c.jsx("a",{href:"#",className:"flex items-center gap-0 font-black tracking-tight uppercase text-lg text-white whitespace-nowrap",children:c.jsx("img",{src:"assets/uise-xp-logo-header.png?v=2",alt:"UISE XP",style:{height:"46px",width:"auto",maxWidth:"160px",objectFit:"contain",display:"block"}})}),c.jsxs("div",{className:"hidden md:flex items-center gap-3.5 font-bold",style:{color:"var(--muted2)"},children:[c.jsx("a",{href:"#catalogo",className:"px-3 py-2.5 rounded-xl transition-all duration-200 hover:text-white hover:bg-white/5 hover:-translate-y-0.5",children:"Jogos"}),c.jsx("a",{href:"#planos",className:"px-3 py-2.5 rounded-xl transition-all duration-200 hover:text-white hover:bg-white/5 hover:-translate-y-0.5",children:"Planos"}),c.jsx("a",{href:"#testemunhos",className:"px-3 py-2.5 rounded-xl transition-all duration-200 hover:text-white hover:bg-white/5 hover:-translate-y-0.5",children:"Depoimentos"}),c.jsx("a",{href:"#faq",className:"px-3 py-2.5 rounded-xl transition-all duration-200 hover:text-white hover:bg-white/5 hover:-translate-y-0.5",children:"FAQ"})]}),c.jsx("div",{className:"flex gap-2.5 items-center",children:c.jsx("a",{href:"#planos",className:"btn-primary",children:"Desbloquear jogos"})})]})}),c.jsx("style",{children:`
        .btn-ghost {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,.10);
          background: rgba(0,0,0,.32);
          color: #fff;
          font-weight: 800;
          letter-spacing: .5px;
          text-transform: uppercase;
          font-size: 12px;
          cursor: pointer;
          transition: .22s ease;
          overflow: hidden;
          white-space: nowrap;
        }
        .btn-ghost:hover {
          transform: translateY(-2px);
          border-color: rgba(255,255,255,.18);
          box-shadow: var(--shadowSoft);
        }
        .btn-primary {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px 18px;
          border-radius: 12px;
          border: none;
          background: var(--neon);
          color: #000;
          font-weight: 800;
          letter-spacing: .5px;
          text-transform: uppercase;
          font-size: 12px;
          cursor: pointer;
          transition: .22s ease;
          white-space: nowrap;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          opacity: 0.9;
        }
      `})]})}const Dy="assets/joao-testimonial.jpg",Ly="assets/isa-testimonial.jpg",Oy="assets/matheus-testimonial.jpg",Iy="assets/breno-testimonial.jpg";function Qj({featuredGame:e,isTransitioning:t,onPrev:n,onNext:r,onOpenDetails:i}){return c.jsxs("section",{className:"section-top section hero-section",style:{paddingTop:"clamp(90px, 12vw, 140px)"},children:[c.jsx("div",{className:"container-main",children:c.jsxs("div",{className:"hero-grid",children:[c.jsx("div",{className:"hero-mobile-wrapper",children:e&&c.jsxs("div",{className:`hero-card hero-card-mobile ${t?"transitioning":""}`,children:[c.jsx("div",{className:"hero-card-glow"}),c.jsxs("div",{className:"hero-card-media",children:[c.jsx("img",{src:`https://steamcdn-a.akamaihd.net/steam/apps/${e.steam_appid}/library_hero.jpg`,alt:e.name,onError:o=>{o.currentTarget.src=e.cover}}),c.jsx("div",{className:"hero-card-overlay"})]}),c.jsx("div",{className:"hero-card-info",children:c.jsxs("div",{className:"hero-card-text",children:[c.jsxs("div",{className:"badge-row",children:[c.jsx("span",{className:"chip green",children:"Jogo Original"}),c.jsx("span",{className:"chip",children:"Steam"})]}),c.jsx("h2",{className:"hero-card-name",children:e.name})]})})]})}),c.jsxs("div",{className:"hero-content",children:[c.jsxs("div",{className:"pill pill-desktop",children:[c.jsx("span",{className:"dot"}),"Acesso Imediato • Baixe pela Steam"]}),c.jsxs("h1",{className:"hero-title",children:[c.jsx("span",{className:"accent",children:"desbloqueie toda a sua steam"}),c.jsx("span",{className:"title-dlc",children:"+40.000 jogos no seu PC"})]}),c.jsxs("div",{className:"hero-price",children:[c.jsxs("span",{className:"price-from",children:["de ",c.jsx("s",{children:"R$ 15.000"})]}),c.jsx("span",{className:"price-now",children:"por R$ 9,97"})]}),c.jsxs("p",{className:"hero-sub",children:["A maior biblioteca do Brasil direto na sua Steam.",c.jsx("br",{}),"Entrega Instantânea e Automatizada. Exclusivo para PC."]}),c.jsxs("div",{className:"hero-actions",children:[c.jsxs("a",{href:"#planos",className:"hero-cta","data-utmify-ignore":!0,"data-no-track":!0,children:["Ver Planos",c.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:c.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]}),c.jsxs("div",{className:"social-proof",children:[c.jsxs("div",{className:"avatars-stack",children:[c.jsx("img",{src:Dy,alt:"",className:"avatar-mini"}),c.jsx("img",{src:Ly,alt:"",className:"avatar-mini"}),c.jsx("img",{src:Oy,alt:"",className:"avatar-mini"}),c.jsx("img",{src:Iy,alt:"",className:"avatar-mini"})]}),c.jsxs("div",{className:"social-text",children:[c.jsx("span",{className:"stars",children:"★★★★★"}),c.jsx("span",{className:"count",children:"+5K clientes"})]})]})]})]}),e&&c.jsxs("div",{className:`hero-card hero-card-desktop ${t?"transitioning":""}`,children:[c.jsx("div",{className:"hero-card-glow"}),c.jsxs("div",{className:"hero-card-media",children:[c.jsx("img",{src:`https://steamcdn-a.akamaihd.net/steam/apps/${e.steam_appid}/library_hero.jpg`,alt:e.name,onError:o=>{o.currentTarget.src=e.cover}}),c.jsx("div",{className:"hero-card-overlay"})]}),c.jsx("div",{className:"hero-card-info",children:c.jsxs("div",{className:"hero-card-text",children:[c.jsxs("div",{className:"badge-row",children:[c.jsx("span",{className:"chip green",children:"Jogo Original"}),c.jsx("span",{className:"chip",children:"Steam"})]}),c.jsx("h2",{className:"hero-card-name",children:e.name}),c.jsx("p",{className:"hero-card-desc",children:"Baixe os arquivos oficiais direto pela Steam."})]})})]})]})}),c.jsx("style",{children:`
        /* Pill style */
        .pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,.05);
          border: 1px solid var(--border);
          font-weight: 800;
          letter-spacing: .6px;
          text-transform: uppercase;
          font-size: 12px;
          backdrop-filter: blur(10px);
          white-space: nowrap;
          margin-bottom: 12px;
        }
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--neon);
          box-shadow: 0 0 14px rgba(139, 92, 246,.55);
        }
        .pill-desktop {
          display: inline-flex;
        }
        @media (max-width: 640px) {
          .pill {
            padding: 8px 12px;
            font-size: 10px;
            gap: 8px;
          }
          .dot {
            width: 6px;
            height: 6px;
          }
          .pill-desktop {
            display: none;
          }
        }

        /* Mobile Wrapper */
        .hero-mobile-wrapper {
          display: none;
        }
        @media (max-width: 640px) {
          .hero-mobile-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            width: 100%;
            position: relative;
          }
        }

        .hero-card-mobile {
          display: none;
        }
        .hero-card-desktop {
          display: block;
        }
        @media (max-width: 640px) {
          .hero-card-mobile {
            display: block;
            width: 100%;
            max-width: 100%;
            border-radius: var(--r2);
            margin-bottom: 0;
            position: relative;
          }
          .hero-card-mobile::after {
            content: '';
            position: absolute;
            bottom: -1px;
            left: -1px;
            right: -1px;
            height: 80px;
            background: linear-gradient(to bottom, transparent, var(--bg));
            pointer-events: none;
            z-index: 10;
            border-radius: 0 0 var(--r2) var(--r2);
          }
          .hero-card-mobile .hero-card-media {
            height: 220px;
          }
          .hero-card-mobile .hero-card-overlay {
            background: linear-gradient(to top, rgba(0,0,0,.85) 0%, transparent 60%);
          }
          .hero-card-desktop {
            display: none;
          }
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr .85fr;
          gap: 34px;
          align-items: center;
        }
        @media (max-width: 980px) {
          .hero-grid { 
            grid-template-columns: 1fr; 
            gap: 24px; 
          }
        }
        @media (max-width: 640px) {
          .hero-grid { 
            display: flex;
            flex-direction: column;
            gap: 0;
          }
          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            position: relative;
            z-index: 5;
            padding-top: 10px;
            padding-bottom: 16px;
          }
        }

        .hero-title {
          margin: 12px 0 12px;
          font-weight: 950;
          font-size: clamp(32px, 5.2vw, 56px);
          line-height: 1.05;
          letter-spacing: -2px;
          color: #fff;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .hero-title .accent { 
          color: var(--neon); 
        }
        .title-dlc {
          font-size: clamp(16px, 2.5vw, 24px);
          color: rgba(255,255,255,.6);
          font-weight: 700;
          letter-spacing: -0.5px;
        }
        @media (max-width: 640px) {
          .hero-title {
            font-size: 32px;
            letter-spacing: -1.5px;
            margin: 8px 0 8px;
            text-align: center;
            align-items: center;
            gap: 2px;
          }
          .title-dlc {
            font-size: 15px;
            color: rgba(255,255,255,.75);
            margin-top: 2px;
          }
        }

        /* Price Display - Clean & Minimal */
        .hero-price {
          display: flex;
          align-items: baseline;
          gap: 12px;
          margin-bottom: 14px;
        }
        .price-from {
          font-size: 15px;
          font-weight: 500;
          color: rgba(255,255,255,.5);
        }
        .price-from s {
          text-decoration: line-through;
        }
        .price-now {
          font-size: 28px;
          font-weight: 950;
          color: var(--neon);
          letter-spacing: -1px;
        }
        @media (max-width: 640px) {
          .hero-price {
            justify-content: center;
            gap: 10px;
            margin-bottom: 12px;
            margin-top: 4px;
          }
          .price-from {
            font-size: 14px;
            color: rgba(255,255,255,.65);
          }
          .price-now {
            font-size: 28px;
          }
        }

        .hero-sub {
          max-width: 48ch;
          font-size: 16px;
          line-height: 1.65;
          color: rgba(255,255,255,.75);
          margin-bottom: 22px;
          font-weight: 500;
        }
        @media (max-width: 640px) {
          .hero-sub {
            font-size: 14px;
            line-height: 1.5;
            margin-bottom: 16px;
            text-align: center;
            color: rgba(255,255,255,.85);
            padding: 0 4px;
          }
          .hero-sub br {
            display: none;
          }
        }
        
        .hero-actions {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        @media (max-width: 640px) {
          .hero-actions {
            gap: 14px;
            flex-direction: column;
            align-items: center;
            width: 100%;
          }
        }

        /* Social Proof with Avatars */
        .social-proof {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .avatars-stack {
          display: flex;
        }
        .avatar-mini {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 2px solid var(--bg);
          object-fit: cover;
          margin-left: -10px;
        }
        .avatar-mini:first-child {
          margin-left: 0;
        }
        .social-text {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }
        .social-text .stars {
          color: var(--neon);
          font-size: 12px;
          letter-spacing: 1px;
        }
        .social-text .count {
          font-size: 12px;
          font-weight: 700;
          color: rgba(255,255,255,.7);
        }
        @media (max-width: 640px) {
          .social-proof {
            gap: 10px;
          }
          .avatar-mini {
            width: 28px;
            height: 28px;
            margin-left: -8px;
          }
          .social-text .stars {
            font-size: 11px;
          }
          .social-text .count {
            font-size: 11px;
          }
        }

        .hero-card {
          border-radius: var(--r2);
          border: 1px solid rgba(255,255,255,.10);
          background: rgba(255,255,255,.04);
          box-shadow: var(--shadow);
          overflow: hidden;
          position: relative;
          isolation: isolate;
          min-height: 280px;
          transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @media (max-width: 640px) {
          .hero-card {
            min-height: 220px;
          }
        }
        .hero-card.transitioning {
          opacity: 0;
          transform: scale(0.98);
        }
        .hero-card-glow {
          position: absolute;
          inset: -2px;
          background: radial-gradient(700px 240px at 20% 10%, rgba(139, 92, 246,.16), transparent 60%);
          pointer-events: none;
          z-index: 0;
        }
        .hero-card-media {
          position: relative;
          height: 280px;
          background: #000;
          overflow: hidden;
        }
        @media (max-width: 640px) {
          .hero-card-media {
            height: 220px;
          }
        }
        .hero-card-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(1.10) contrast(1.10);
          transform: scale(1.03);
        }
        .hero-card-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(800px 320px at 78% 45%, rgba(0,0,0,.12), rgba(0,0,0,.78)),
            linear-gradient(to top, rgba(0,0,0,.92), rgba(0,0,0,.16));
        }
        .hero-card-info {
          position: absolute;
          left: 14px;
          right: 14px;
          bottom: 14px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }
        @media (max-width: 640px) {
          .hero-card-info {
            left: 12px;
            right: 12px;
            bottom: 12px;
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
        }
        .hero-card-text { max-width: 62%; min-width: 0; }
        @media (max-width: 980px) {
          .hero-card-text { max-width: 100%; }
        }
        .badge-row { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 10px; }
        @media (max-width: 640px) {
          .badge-row { gap: 6px; margin-bottom: 8px; }
        }
        .chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 10px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: .5px;
          background: rgba(0,0,0,.35);
          border: 1px solid rgba(255,255,255,.12);
          color: #fff;
          text-shadow: 0 10px 30px rgba(0,0,0,.9);
          backdrop-filter: blur(10px);
          white-space: nowrap;
        }
        @media (max-width: 640px) {
          .chip {
            padding: 6px 8px;
            font-size: 10px;
          }
        }
        .chip.green {
          border-color: rgba(139, 92, 246,.35);
          box-shadow: 0 0 0 1px rgba(139, 92, 246,.10) inset;
        }
        .hero-card-name {
          margin: 0;
          font-weight: 950;
          font-size: 22px;
          color: #fff;
          letter-spacing: -1px;
          text-transform: uppercase;
          text-shadow: 0 10px 40px rgba(0,0,0,.95);
          line-height: 1.05;
        }
        @media (max-width: 640px) {
          .hero-card-name {
            font-size: 18px;
          }
        }
        .hero-card-desc {
          margin-top: 8px;
          color: rgba(255,255,255,.82);
          font-size: 13px;
          line-height: 1.35;
          text-shadow: 0 10px 30px rgba(0,0,0,.9);
          max-width: 55ch;
        }
        @media (max-width: 640px) {
          .hero-card-desc {
            font-size: 12px;
            margin-top: 6px;
          }
        }
        .hero-card-btns { display: flex; gap: 10px; flex-wrap: wrap; justify-content: flex-end; }
        @media (max-width: 640px) {
          .hero-card-btns { 
            justify-content: flex-start;
            width: 100%;
          }
        }
        
        .feat-nav {
          position: absolute;
          top: 14px;
          width: 38px;
          height: 38px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,.14);
          background: rgba(0,0,0,.35);
          color: #fff;
          cursor: pointer;
          display: grid;
          place-items: center;
          transition: .2s ease;
          z-index: 5;
          font-size: 18px;
        }
        @media (max-width: 640px) {
          .feat-nav {
            width: 34px;
            height: 34px;
            font-size: 16px;
          }
        }
        .feat-nav:hover {
          transform: translateY(-1px);
          border-color: rgba(255,255,255,.22);
        }
        .feat-prev { right: 58px; }
        .feat-next { right: 14px; }
        @media (max-width: 640px) {
          .feat-prev { right: 52px; }
          .feat-next { right: 12px; }
        }

        .btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 24px;
          border-radius: 14px;
          border: none;
          background: var(--neon);
          color: #000;
          font-weight: 900;
          letter-spacing: .5px;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          transition: .22s ease;
          overflow: hidden;
          white-space: nowrap;
          font-size: 14px;
        }
        @media (max-width: 640px) {
          .btn {
            padding: 14px 20px;
            font-size: 13px;
          }
        }
        .btn:hover {
          transform: translateY(-2px);
          opacity: 0.9;
        }
        .btn-primary-lg {
          background: var(--neon);
          color: #000;
          border: none;
          font-size: 14px;
          padding: 16px 28px;
        }
        .btn-primary-lg:hover {
          transform: translateY(-2px);
          opacity: 0.9;
        }
        .btn-outline {
          background: rgba(255,255,255,.05);
        }
        .btn-small {
          padding: 10px 14px;
          border-radius: 12px;
          font-size: 12px;
        }
        @media (max-width: 640px) {
          .btn-small {
            padding: 8px 12px;
            font-size: 11px;
          }
        }
        .btn-primary-sm {
          background: var(--neon);
          color: #000;
          border: none;
        }

        .hero-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 28px;
          border-radius: 14px;
          background: var(--neon);
          color: #000;
          font-weight: 900;
          font-size: 14px;
          letter-spacing: .5px;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          transition: .25s ease;
          border: none;
        }
        .hero-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(139, 92, 246,.35);
        }
        .hero-cta svg {
          width: 16px;
          height: 16px;
        }
        @media (max-width: 640px) {
          .hero-cta {
            width: 100%;
            padding: 14px 24px;
            font-size: 13px;
            border-radius: 12px;
          }
        }
      `})]})}const Nf=w.createContext({});function Rf(e){const t=w.useRef(null);return t.current===null&&(t.current=e()),t.current}const zy=typeof window<"u",Fy=zy?w.useLayoutEffect:w.useEffect,Al=w.createContext(null);function Af(e,t){e.indexOf(t)===-1&&e.push(t)}function Mf(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const en=(e,t,n)=>n>t?t:n<e?e:n;let Ml=()=>{},zi=()=>{};const xn={},_y=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function Vy(e){return typeof e=="object"&&e!==null}const By=e=>/^0[^.\s]+$/u.test(e);function Df(e){let t;return()=>(t===void 0&&(t=e()),t)}const yt=e=>e,Xj=(e,t)=>n=>t(e(n)),gs=(...e)=>e.reduce(Xj),Jo=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r};class Lf{constructor(){this.subscriptions=[]}add(t){return Af(this.subscriptions,t),()=>Mf(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Xt=e=>e*1e3,xt=e=>e/1e3;function $y(e,t){return t?e*(1e3/t):0}const Uy=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Zj=1e-7,Jj=12;function eT(e,t,n,r,i){let o,s,a=0;do s=t+(n-t)/2,o=Uy(s,r,i)-e,o>0?n=s:t=s;while(Math.abs(o)>Zj&&++a<Jj);return s}function xs(e,t,n,r){if(e===t&&n===r)return yt;const i=o=>eT(o,0,1,e,n);return o=>o===0||o===1?o:Uy(i(o),t,r)}const Wy=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Hy=e=>t=>1-e(1-t),Gy=xs(.33,1.53,.69,.99),Of=Hy(Gy),Ky=Wy(Of),Yy=e=>(e*=2)<1?.5*Of(e):.5*(2-Math.pow(2,-10*(e-1))),If=e=>1-Math.sin(Math.acos(e)),qy=Hy(If),Qy=Wy(If),tT=xs(.42,0,1,1),nT=xs(0,0,.58,1),Xy=xs(.42,0,.58,1),rT=e=>Array.isArray(e)&&typeof e[0]!="number",Zy=e=>Array.isArray(e)&&typeof e[0]=="number",am={linear:yt,easeIn:tT,easeInOut:Xy,easeOut:nT,circIn:If,circInOut:Qy,circOut:qy,backIn:Of,backInOut:Ky,backOut:Gy,anticipate:Yy},iT=e=>typeof e=="string",lm=e=>{if(Zy(e)){zi(e.length===4,"Cubic bezier arrays must contain four numerical values.","cubic-bezier-length");const[t,n,r,i]=e;return xs(t,n,r,i)}else if(iT(e))return zi(am[e]!==void 0,`Invalid easing type '${e}'`,"invalid-easing-type"),am[e];return e},Gs=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],cm={value:null,addProjectionMetrics:null};function oT(e,t){let n=new Set,r=new Set,i=!1,o=!1;const s=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1},l=0;function u(f){s.has(f)&&(d.schedule(f),e()),l++,f(a)}const d={schedule:(f,p=!1,h=!1)=>{const m=h&&i?n:r;return p&&s.add(f),m.has(f)||m.add(f),f},cancel:f=>{r.delete(f),s.delete(f)},process:f=>{if(a=f,i){o=!0;return}i=!0,[n,r]=[r,n],n.forEach(u),t&&cm.value&&cm.value.frameloop[t].push(l),l=0,n.clear(),i=!1,o&&(o=!1,d.process(f))}};return d}const sT=40;function Jy(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,s=Gs.reduce((v,S)=>(v[S]=oT(o,t?S:void 0),v),{}),{setup:a,read:l,resolveKeyframes:u,preUpdate:d,update:f,preRender:p,render:h,postRender:b}=s,m=()=>{const v=xn.useManualTiming?i.timestamp:performance.now();n=!1,xn.useManualTiming||(i.delta=r?1e3/60:Math.max(Math.min(v-i.timestamp,sT),1)),i.timestamp=v,i.isProcessing=!0,a.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),h.process(i),b.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(m))},y=()=>{n=!0,r=!0,i.isProcessing||e(m)};return{schedule:Gs.reduce((v,S)=>{const k=s[S];return v[S]=(C,E=!1,j=!1)=>(n||y(),k.schedule(C,E,j)),v},{}),cancel:v=>{for(let S=0;S<Gs.length;S++)s[Gs[S]].cancel(v)},state:i,steps:s}}const{schedule:ae,cancel:ir,state:Ne,steps:bc}=Jy(typeof requestAnimationFrame<"u"?requestAnimationFrame:yt,!0);let pa;function aT(){pa=void 0}const Ue={now:()=>(pa===void 0&&Ue.set(Ne.isProcessing||xn.useManualTiming?Ne.timestamp:performance.now()),pa),set:e=>{pa=e,queueMicrotask(aT)}},e1=e=>t=>typeof t=="string"&&t.startsWith(e),t1=e1("--"),lT=e1("var(--"),zf=e=>lT(e)?cT.test(e.split("/*")[0].trim()):!1,cT=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function um(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const Gi={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},es={...Gi,transform:e=>en(0,1,e)},Ks={...Gi,default:1},jo=e=>Math.round(e*1e5)/1e5,Ff=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function uT(e){return e==null}const dT=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,_f=(e,t)=>n=>!!(typeof n=="string"&&dT.test(n)&&n.startsWith(e)||t&&!uT(n)&&Object.prototype.hasOwnProperty.call(n,t)),n1=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,o,s,a]=r.match(Ff);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},fT=e=>en(0,255,e),Sc={...Gi,transform:e=>Math.round(fT(e))},br={test:_f("rgb","red"),parse:n1("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Sc.transform(e)+", "+Sc.transform(t)+", "+Sc.transform(n)+", "+jo(es.transform(r))+")"};function pT(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Ku={test:_f("#"),parse:pT,transform:br.transform},vs=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Nn=vs("deg"),Zt=vs("%"),F=vs("px"),hT=vs("vh"),mT=vs("vw"),dm={...Zt,parse:e=>Zt.parse(e)/100,transform:e=>Zt.transform(e*100)},ai={test:_f("hsl","hue"),parse:n1("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Zt.transform(jo(t))+", "+Zt.transform(jo(n))+", "+jo(es.transform(r))+")"},ye={test:e=>br.test(e)||Ku.test(e)||ai.test(e),parse:e=>br.test(e)?br.parse(e):ai.test(e)?ai.parse(e):Ku.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?br.transform(e):ai.transform(e),getAnimatableNone:e=>{const t=ye.parse(e);return t.alpha=0,ye.transform(t)}},gT=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function xT(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Ff))==null?void 0:t.length)||0)+(((n=e.match(gT))==null?void 0:n.length)||0)>0}const r1="number",i1="color",vT="var",yT="var(",fm="${}",wT=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ts(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const a=t.replace(wT,l=>(ye.test(l)?(r.color.push(o),i.push(i1),n.push(ye.parse(l))):l.startsWith(yT)?(r.var.push(o),i.push(vT),n.push(l)):(r.number.push(o),i.push(r1),n.push(parseFloat(l))),++o,fm)).split(fm);return{values:n,split:a,indexes:r,types:i}}function o1(e){return ts(e).values}function s1(e){const{split:t,types:n}=ts(e),r=t.length;return i=>{let o="";for(let s=0;s<r;s++)if(o+=t[s],i[s]!==void 0){const a=n[s];a===r1?o+=jo(i[s]):a===i1?o+=ye.transform(i[s]):o+=i[s]}return o}}const bT=e=>typeof e=="number"?0:ye.test(e)?ye.getAnimatableNone(e):e;function ST(e){const t=o1(e);return s1(e)(t.map(bT))}const or={test:xT,parse:o1,createTransformer:s1,getAnimatableNone:ST};function kc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function kT({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,s=0;if(!t)i=o=s=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=kc(l,a,e+1/3),o=kc(l,a,e),s=kc(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}function Qa(e,t){return n=>n>0?t:e}const fe=(e,t,n)=>e+(t-e)*n,Cc=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},CT=[Ku,br,ai],ET=e=>CT.find(t=>t.test(e));function pm(e){const t=ET(e);if(Ml(!!t,`'${e}' is not an animatable color. Use the equivalent color code instead.`,"color-not-animatable"),!t)return!1;let n=t.parse(e);return t===ai&&(n=kT(n)),n}const hm=(e,t)=>{const n=pm(e),r=pm(t);if(!n||!r)return Qa(e,t);const i={...n};return o=>(i.red=Cc(n.red,r.red,o),i.green=Cc(n.green,r.green,o),i.blue=Cc(n.blue,r.blue,o),i.alpha=fe(n.alpha,r.alpha,o),br.transform(i))},Yu=new Set(["none","hidden"]);function jT(e,t){return Yu.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function TT(e,t){return n=>fe(e,t,n)}function Vf(e){return typeof e=="number"?TT:typeof e=="string"?zf(e)?Qa:ye.test(e)?hm:RT:Array.isArray(e)?a1:typeof e=="object"?ye.test(e)?hm:PT:Qa}function a1(e,t){const n=[...e],r=n.length,i=e.map((o,s)=>Vf(o)(o,t[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}}function PT(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Vf(e[i])(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}}function NT(e,t){const n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const o=t.types[i],s=e.indexes[o][r[o]],a=e.values[s]??0;n[i]=a,r[o]++}return n}const RT=(e,t)=>{const n=or.createTransformer(t),r=ts(e),i=ts(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Yu.has(e)&&!i.values.length||Yu.has(t)&&!r.values.length?jT(e,t):gs(a1(NT(r,i),i.values),n):(Ml(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,"complex-values-different"),Qa(e,t))};function l1(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?fe(e,t,n):Vf(e)(e,t)}const AT=e=>{const t=({timestamp:n})=>e(n);return{start:(n=!0)=>ae.update(t,n),stop:()=>ir(t),now:()=>Ne.isProcessing?Ne.timestamp:Ue.now()}},c1=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let o=0;o<i;o++)r+=Math.round(e(o/(i-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},Xa=2e4;function Bf(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Xa;)t+=n,r=e.next(t);return t>=Xa?1/0:t}function MT(e,t=100,n){const r=n({...e,keyframes:[0,t]}),i=Math.min(Bf(r),Xa);return{type:"keyframes",ease:o=>r.next(i*o).value/t,duration:xt(i)}}const DT=5;function u1(e,t,n){const r=Math.max(t-DT,0);return $y(n-e(r),t-r)}const ue={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Ec=.001;function LT({duration:e=ue.duration,bounce:t=ue.bounce,velocity:n=ue.velocity,mass:r=ue.mass}){let i,o;Ml(e<=Xt(ue.maxDuration),"Spring duration must be 10 seconds or less","spring-duration-limit");let s=1-t;s=en(ue.minDamping,ue.maxDamping,s),e=en(ue.minDuration,ue.maxDuration,xt(e)),s<1?(i=u=>{const d=u*s,f=d*e,p=d-n,h=qu(u,s),b=Math.exp(-f);return Ec-p/h*b},o=u=>{const f=u*s*e,p=f*n+n,h=Math.pow(s,2)*Math.pow(u,2)*e,b=Math.exp(-f),m=qu(Math.pow(u,2),s);return(-i(u)+Ec>0?-1:1)*((p-h)*b)/m}):(i=u=>{const d=Math.exp(-u*e),f=(u-n)*e+1;return-Ec+d*f},o=u=>{const d=Math.exp(-u*e),f=(n-u)*(e*e);return d*f});const a=5/e,l=IT(i,o,a);if(e=Xt(e),isNaN(l))return{stiffness:ue.stiffness,damping:ue.damping,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:s*2*Math.sqrt(r*u),duration:e}}}const OT=12;function IT(e,t,n){let r=n;for(let i=1;i<OT;i++)r=r-e(r)/t(r);return r}function qu(e,t){return e*Math.sqrt(1-t*t)}const zT=["duration","bounce"],FT=["stiffness","damping","mass"];function mm(e,t){return t.some(n=>e[n]!==void 0)}function _T(e){let t={velocity:ue.velocity,stiffness:ue.stiffness,damping:ue.damping,mass:ue.mass,isResolvedFromDuration:!1,...e};if(!mm(e,FT)&&mm(e,zT))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,o=2*en(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:ue.mass,stiffness:i,damping:o}}else{const n=LT(e);t={...t,...n,mass:ue.mass},t.isResolvedFromDuration=!0}return t}function Za(e=ue.visualDuration,t=ue.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const o=n.keyframes[0],s=n.keyframes[n.keyframes.length-1],a={done:!1,value:o},{stiffness:l,damping:u,mass:d,duration:f,velocity:p,isResolvedFromDuration:h}=_T({...n,velocity:-xt(n.velocity||0)}),b=p||0,m=u/(2*Math.sqrt(l*d)),y=s-o,g=xt(Math.sqrt(l/d)),x=Math.abs(y)<5;r||(r=x?ue.restSpeed.granular:ue.restSpeed.default),i||(i=x?ue.restDelta.granular:ue.restDelta.default);let v;if(m<1){const k=qu(g,m);v=C=>{const E=Math.exp(-m*g*C);return s-E*((b+m*g*y)/k*Math.sin(k*C)+y*Math.cos(k*C))}}else if(m===1)v=k=>s-Math.exp(-g*k)*(y+(b+g*y)*k);else{const k=g*Math.sqrt(m*m-1);v=C=>{const E=Math.exp(-m*g*C),j=Math.min(k*C,300);return s-E*((b+m*g*y)*Math.sinh(j)+k*y*Math.cosh(j))/k}}const S={calculatedDuration:h&&f||null,next:k=>{const C=v(k);if(h)a.done=k>=f;else{let E=k===0?b:0;m<1&&(E=k===0?Xt(b):u1(v,k,C));const j=Math.abs(E)<=r,T=Math.abs(s-C)<=i;a.done=j&&T}return a.value=a.done?s:C,a},toString:()=>{const k=Math.min(Bf(S),Xa),C=c1(E=>S.next(k*E).value,k,30);return k+"ms "+C},toTransition:()=>{}};return S}Za.applyToOptions=e=>{const t=MT(e,100,Za);return e.ease=t.ease,e.duration=Xt(t.duration),e.type="keyframes",e};function Qu({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:u=.5,restSpeed:d}){const f=e[0],p={done:!1,value:f},h=j=>a!==void 0&&j<a||l!==void 0&&j>l,b=j=>a===void 0?l:l===void 0||Math.abs(a-j)<Math.abs(l-j)?a:l;let m=n*t;const y=f+m,g=s===void 0?y:s(y);g!==y&&(m=g-f);const x=j=>-m*Math.exp(-j/r),v=j=>g+x(j),S=j=>{const T=x(j),A=v(j);p.done=Math.abs(T)<=u,p.value=p.done?g:A};let k,C;const E=j=>{h(p.value)&&(k=j,C=Za({keyframes:[p.value,b(p.value)],velocity:u1(v,j,p.value),damping:i,stiffness:o,restDelta:u,restSpeed:d}))};return E(0),{calculatedDuration:null,next:j=>{let T=!1;return!C&&k===void 0&&(T=!0,S(j),E(j)),k!==void 0&&j>=k?C.next(j-k):(!T&&S(j),p)}}}function VT(e,t,n){const r=[],i=n||xn.mix||l1,o=e.length-1;for(let s=0;s<o;s++){let a=i(e[s],e[s+1]);if(t){const l=Array.isArray(t)?t[s]||yt:t;a=gs(l,a)}r.push(a)}return r}function BT(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(zi(o===t.length,"Both input and output ranges must be the same length","range-length"),o===1)return()=>t[0];if(o===2&&t[0]===t[1])return()=>t[1];const s=e[0]===e[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=VT(t,r,i),l=a.length,u=d=>{if(s&&d<e[0])return t[0];let f=0;if(l>1)for(;f<e.length-2&&!(d<e[f+1]);f++);const p=Jo(e[f],e[f+1],d);return a[f](p)};return n?d=>u(en(e[0],e[o-1],d)):u}function $T(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Jo(0,t,r);e.push(fe(n,1,i))}}function UT(e){const t=[0];return $T(t,e.length-1),t}function WT(e,t){return e.map(n=>n*t)}function HT(e,t){return e.map(()=>t||Xy).splice(0,e.length-1)}function To({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=rT(r)?r.map(lm):lm(r),o={done:!1,value:t[0]},s=WT(n&&n.length===t.length?n:UT(t),e),a=BT(s,t,{ease:Array.isArray(i)?i:HT(t,i)});return{calculatedDuration:e,next:l=>(o.value=a(l),o.done=l>=e,o)}}const GT=e=>e!==null;function $f(e,{repeat:t,repeatType:n="loop"},r,i=1){const o=e.filter(GT),a=i<0||t&&n!=="loop"&&t%2===1?0:o.length-1;return!a||r===void 0?o[a]:r}const KT={decay:Qu,inertia:Qu,tween:To,keyframes:To,spring:Za};function d1(e){typeof e.type=="string"&&(e.type=KT[e.type])}class Uf{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const YT=e=>e/100;class Wf extends Uf{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var r,i;const{motionValue:n}=this.options;n&&n.updatedAt!==Ue.now()&&this.tick(Ue.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(i=(r=this.options).onStop)==null||i.call(r))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;d1(t);const{type:n=To,repeat:r=0,repeatDelay:i=0,repeatType:o,velocity:s=0}=t;let{keyframes:a}=t;const l=n||To;l!==To&&typeof a[0]!="number"&&(this.mixKeyframes=gs(YT,l1(a[0],a[1])),a=[0,100]);const u=l({...t,keyframes:a});o==="mirror"&&(this.mirroredGenerator=l({...t,keyframes:[...a].reverse(),velocity:-s})),u.calculatedDuration===null&&(u.calculatedDuration=Bf(u));const{calculatedDuration:d}=u;this.calculatedDuration=d,this.resolvedDuration=d+i,this.totalDuration=this.resolvedDuration*(r+1)-i,this.generator=u}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:r,totalDuration:i,mixKeyframes:o,mirroredGenerator:s,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return r.next(0);const{delay:u=0,keyframes:d,repeat:f,repeatType:p,repeatDelay:h,type:b,onUpdate:m,finalKeyframe:y}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-i/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const g=this.currentTime-u*(this.playbackSpeed>=0?1:-1),x=this.playbackSpeed>=0?g<0:g>i;this.currentTime=Math.max(g,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let v=this.currentTime,S=r;if(f){const j=Math.min(this.currentTime,i)/a;let T=Math.floor(j),A=j%1;!A&&j>=1&&(A=1),A===1&&T--,T=Math.min(T,f+1),!!(T%2)&&(p==="reverse"?(A=1-A,h&&(A-=h/a)):p==="mirror"&&(S=s)),v=en(0,1,A)*a}const k=x?{done:!1,value:d[0]}:S.next(v);o&&(k.value=o(k.value));let{done:C}=k;!x&&l!==null&&(C=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const E=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&C);return E&&b!==Qu&&(k.value=$f(d,this.options,y,this.speed)),m&&m(k.value),E&&this.finish(),k}then(t,n){return this.finished.then(t,n)}get duration(){return xt(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+xt(t)}get time(){return xt(this.currentTime)}set time(t){var n;t=Xt(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),(n=this.driver)==null||n.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(Ue.now());const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=xt(this.currentTime))}play(){var i,o;if(this.isStopped)return;const{driver:t=AT,startTime:n}=this.options;this.driver||(this.driver=t(s=>this.tick(s))),(o=(i=this.options).onPlay)==null||o.call(i);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=n??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Ue.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(t=this.options).onComplete)==null||n.call(t)}cancel(){var t,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(t=this.options).onCancel)==null||n.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),t.observe(this)}}function qT(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const Sr=e=>e*180/Math.PI,Xu=e=>{const t=Sr(Math.atan2(e[1],e[0]));return Zu(t)},QT={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Xu,rotateZ:Xu,skewX:e=>Sr(Math.atan(e[1])),skewY:e=>Sr(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Zu=e=>(e=e%360,e<0&&(e+=360),e),gm=Xu,xm=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),vm=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),XT={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:xm,scaleY:vm,scale:e=>(xm(e)+vm(e))/2,rotateX:e=>Zu(Sr(Math.atan2(e[6],e[5]))),rotateY:e=>Zu(Sr(Math.atan2(-e[2],e[0]))),rotateZ:gm,rotate:gm,skewX:e=>Sr(Math.atan(e[4])),skewY:e=>Sr(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Ju(e){return e.includes("scale")?1:0}function ed(e,t){if(!e||e==="none")return Ju(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=XT,i=n;else{const a=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=QT,i=a}if(!i)return Ju(t);const o=r[t],s=i[1].split(",").map(JT);return typeof o=="function"?o(s):s[o]}const ZT=(e,t)=>{const{transform:n="none"}=getComputedStyle(e);return ed(n,t)};function JT(e){return parseFloat(e.trim())}const Ki=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Yi=new Set(Ki),ym=e=>e===Gi||e===F,eP=new Set(["x","y","z"]),tP=Ki.filter(e=>!eP.has(e));function nP(e){const t=[];return tP.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const $n={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>ed(t,"x"),y:(e,{transform:t})=>ed(t,"y")};$n.translateX=$n.x;$n.translateY=$n.y;const Ar=new Set;let td=!1,nd=!1,rd=!1;function f1(){if(nd){const e=Array.from(Ar).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=nP(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([o,s])=>{var a;(a=r.getValue(o))==null||a.set(s)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}nd=!1,td=!1,Ar.forEach(e=>e.complete(rd)),Ar.clear()}function p1(){Ar.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(nd=!0)})}function rP(){rd=!0,p1(),f1(),rd=!1}class Hf{constructor(t,n,r,i,o,s=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=o,this.isAsync=s}scheduleResolve(){this.state="scheduled",this.isAsync?(Ar.add(this),td||(td=!0,ae.read(p1),ae.resolveKeyframes(f1))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;if(t[0]===null){const o=i==null?void 0:i.get(),s=t[t.length-1];if(o!==void 0)t[0]=o;else if(r&&n){const a=r.readValue(n,s);a!=null&&(t[0]=a)}t[0]===void 0&&(t[0]=s),i&&o===void 0&&i.set(t[0])}qT(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),Ar.delete(this)}cancel(){this.state==="scheduled"&&(Ar.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const iP=e=>e.startsWith("--");function oP(e,t,n){iP(t)?e.style.setProperty(t,n):e.style[t]=n}const sP=Df(()=>window.ScrollTimeline!==void 0),aP={};function lP(e,t){const n=Df(e);return()=>aP[t]??n()}const h1=lP(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),ho=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,wm={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ho([0,.65,.55,1]),circOut:ho([.55,0,1,.45]),backIn:ho([.31,.01,.66,-.59]),backOut:ho([.33,1.53,.69,.99])};function m1(e,t){if(e)return typeof e=="function"?h1()?c1(e,t):"ease-out":Zy(e)?ho(e):Array.isArray(e)?e.map(n=>m1(n,t)||wm.easeOut):wm[e]}function cP(e,t,n,{delay:r=0,duration:i=300,repeat:o=0,repeatType:s="loop",ease:a="easeOut",times:l}={},u=void 0){const d={[t]:n};l&&(d.offset=l);const f=m1(a,i);Array.isArray(f)&&(d.easing=f);const p={delay:r,duration:i,easing:Array.isArray(f)?"linear":f,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"};return u&&(p.pseudoElement=u),e.animate(d,p)}function g1(e){return typeof e=="function"&&"applyToOptions"in e}function uP({type:e,...t}){return g1(e)&&h1()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class dP extends Uf{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:n,name:r,keyframes:i,pseudoElement:o,allowFlatten:s=!1,finalKeyframe:a,onComplete:l}=t;this.isPseudoElement=!!o,this.allowFlatten=s,this.options=t,zi(typeof t.type!="string",`Mini animate() doesn't support "type" as a string.`,"mini-spring");const u=uP(t);this.animation=cP(n,r,i,u,o),u.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!o){const d=$f(i,this.options,a,this.speed);this.updateMotionValue?this.updateMotionValue(d):oP(n,r,d),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,n;(n=(t=this.animation).finish)==null||n.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,n;this.isPseudoElement||(n=(t=this.animation).commitStyles)==null||n.call(t)}get duration(){var n,r;const t=((r=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:r.call(n).duration)||0;return xt(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+xt(t)}get time(){return xt(Number(this.animation.currentTime)||0)}set time(t){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Xt(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,observe:n}){var r;return this.allowFlatten&&((r=this.animation.effect)==null||r.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&sP()?(this.animation.timeline=t,yt):n(this)}}const x1={anticipate:Yy,backInOut:Ky,circInOut:Qy};function fP(e){return e in x1}function pP(e){typeof e.ease=="string"&&fP(e.ease)&&(e.ease=x1[e.ease])}const jc=10;class hP extends dP{constructor(t){pP(t),d1(t),super(t),t.startTime!==void 0&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:r,onComplete:i,element:o,...s}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const a=new Wf({...s,autoplay:!1}),l=Math.max(jc,Ue.now()-this.startTime),u=en(0,jc,l-jc);n.setWithVelocity(a.sample(Math.max(0,l-u)).value,a.sample(l).value,u),a.stop()}}const bm=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(or.test(e)||e==="0")&&!e.startsWith("url("));function mP(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function gP(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const o=e[e.length-1],s=bm(i,t),a=bm(o,t);return Ml(s===a,`You are trying to animate ${t} from "${i}" to "${o}". "${s?o:i}" is not an animatable value.`,"value-not-animatable"),!s||!a?!1:mP(e)||(n==="spring"||g1(n))&&r}function id(e){e.duration=0,e.type="keyframes"}const xP=new Set(["opacity","clipPath","filter","transform"]),vP=Df(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function yP(e){var d;const{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:o,type:s}=e;if(!(((d=t==null?void 0:t.owner)==null?void 0:d.current)instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:u}=t.owner.getProps();return vP()&&n&&xP.has(n)&&(n!=="transform"||!u)&&!l&&!r&&i!=="mirror"&&o!==0&&s!=="inertia"}const wP=40;class bP extends Uf{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:s="loop",keyframes:a,name:l,motionValue:u,element:d,...f}){var b;super(),this.stop=()=>{var m,y;this._animation&&(this._animation.stop(),(m=this.stopTimeline)==null||m.call(this)),(y=this.keyframeResolver)==null||y.cancel()},this.createdAt=Ue.now();const p={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:s,name:l,motionValue:u,element:d,...f},h=(d==null?void 0:d.KeyframeResolver)||Hf;this.keyframeResolver=new h(a,(m,y,g)=>this.onKeyframesResolved(m,y,p,!g),l,u,d),(b=this.keyframeResolver)==null||b.scheduleResolve()}onKeyframesResolved(t,n,r,i){this.keyframeResolver=void 0;const{name:o,type:s,velocity:a,delay:l,isHandoff:u,onUpdate:d}=r;this.resolvedAt=Ue.now(),gP(t,o,s,a)||((xn.instantAnimations||!l)&&(d==null||d($f(t,r,n))),t[0]=t[t.length-1],id(r),r.repeat=0);const p={startTime:i?this.resolvedAt?this.resolvedAt-this.createdAt>wP?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...r,keyframes:t},h=!u&&yP(p)?new hP({...p,element:p.motionValue.owner.current}):new Wf(p);h.finished.then(()=>this.notifyFinished()).catch(yt),this.pendingTimeline&&(this.stopTimeline=h.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=h}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),rP()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}const SP=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function kP(e){const t=SP.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}const CP=4;function v1(e,t,n=1){zi(n<=CP,`Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,"max-css-var-depth");const[r,i]=kP(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const s=o.trim();return _y(s)?parseFloat(s):s}return zf(i)?v1(i,t,n+1):i}function Gf(e,t){return(e==null?void 0:e[t])??(e==null?void 0:e.default)??e}const EP={type:"spring",stiffness:500,damping:25,restSpeed:10},jP=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),TP={type:"keyframes",duration:.8},PP={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},NP=(e,{keyframes:t})=>t.length>2?TP:Yi.has(e)?e.startsWith("scale")?jP(t[1]):EP:PP;function RP({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:a,from:l,elapsed:u,...d}){return!!Object.keys(d).length}const AP=e=>e!==null;function MP(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(AP),o=t&&n!=="loop"&&t%2===1?0:i.length-1;return!o||r===void 0?i[o]:r}function y1(e,t,n,r=0,i=1){const o=Array.from(e).sort((u,d)=>u.sortNodePosition(d)).indexOf(t),s=e.size,a=(s-1)*r;return typeof n=="function"?n(o,s):i===1?o*r:a-o*r}const Kf=(e,t,n,r={},i,o)=>s=>{const a=Gf(r,e)||{},l=a.delay||r.delay||0;let{elapsed:u=0}=r;u=u-Xt(l);const d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-u,onUpdate:p=>{t.set(p),a.onUpdate&&a.onUpdate(p)},onComplete:()=>{s(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:o?void 0:i};RP(a)||Object.assign(d,NP(e,d)),d.duration&&(d.duration=Xt(d.duration)),d.repeatDelay&&(d.repeatDelay=Xt(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let f=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(id(d),d.delay===0&&(f=!0)),(xn.instantAnimations||xn.skipAnimations)&&(f=!0,id(d),d.delay=0),d.allowFlatten=!a.type&&!a.ease,f&&!o&&t.get()!==void 0){const p=MP(d.keyframes,a);if(p!==void 0){ae.update(()=>{d.onUpdate(p),d.onComplete()});return}}return a.isSync?new Wf(d):new bP(d)},w1=new Set(["width","height","top","left","right","bottom",...Ki]),Sm=30,DP=e=>!isNaN(parseFloat(e));class LP{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var o;const i=Ue.now();if(this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((o=this.events.change)==null||o.notify(this.current),this.dependents))for(const s of this.dependents)s.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=Ue.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=DP(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Lf);const r=this.events[t].add(n);return t==="change"?()=>{r(),ae.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=Ue.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Sm)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Sm);return $y(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,n;(t=this.dependents)==null||t.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Fi(e,t){return new LP(e,t)}function km(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function Yf(e,t,n,r){if(typeof t=="function"){const[i,o]=km(r);t=t(n!==void 0?n:e.custom,i,o)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,o]=km(r);t=t(n!==void 0?n:e.custom,i,o)}return t}function yi(e,t,n){const r=e.getProps();return Yf(r,t,n!==void 0?n:r.custom,e)}const od=e=>Array.isArray(e);function OP(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Fi(n))}function IP(e){return od(e)?e[e.length-1]||0:e}function zP(e,t){const n=yi(e,t);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const s in o){const a=IP(o[s]);OP(e,s,a)}}const Fe=e=>!!(e&&e.getVelocity);function FP(e){return!!(Fe(e)&&e.add)}function sd(e,t){const n=e.getValue("willChange");if(FP(n))return n.add(t);if(!n&&xn.WillChange){const r=new xn.WillChange("auto");e.addValue("willChange",r),r.add(t)}}function qf(e){return e.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const _P="framerAppearId",b1="data-"+qf(_P);function S1(e){return e.props[b1]}function VP({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function k1(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:o=e.getDefaultTransition(),transitionEnd:s,...a}=t;r&&(o=r);const l=[],u=i&&e.animationState&&e.animationState.getState()[i];for(const d in a){const f=e.getValue(d,e.latestValues[d]??null),p=a[d];if(p===void 0||u&&VP(u,d))continue;const h={delay:n,...Gf(o||{},d)},b=f.get();if(b!==void 0&&!f.isAnimating&&!Array.isArray(p)&&p===b&&!h.velocity)continue;let m=!1;if(window.MotionHandoffAnimation){const g=S1(e);if(g){const x=window.MotionHandoffAnimation(g,d,ae);x!==null&&(h.startTime=x,m=!0)}}sd(e,d),f.start(Kf(d,f,p,e.shouldReduceMotion&&w1.has(d)?{type:!1}:h,e,m));const y=f.animation;y&&l.push(y)}return s&&Promise.all(l).then(()=>{ae.update(()=>{s&&zP(e,s)})}),l}function ad(e,t,n={}){var l;const r=yi(e,t,n.type==="exit"?(l=e.presenceContext)==null?void 0:l.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const o=r?()=>Promise.all(k1(e,r,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:f,staggerDirection:p}=i;return BP(e,t,u,d,f,p,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[u,d]=a==="beforeChildren"?[o,s]:[s,o];return u().then(()=>d())}else return Promise.all([o(),s(n.delay)])}function BP(e,t,n=0,r=0,i=0,o=1,s){const a=[];for(const l of e.variantChildren)l.notify("AnimationStart",t),a.push(ad(l,t,{...s,delay:n+(typeof r=="function"?0:r)+y1(e.variantChildren,l,r,i,o)}).then(()=>l.notify("AnimationComplete",t)));return Promise.all(a)}function $P(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>ad(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=ad(e,t,n);else{const i=typeof t=="function"?yi(e,t,n.custom):t;r=Promise.all(k1(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const UP={test:e=>e==="auto",parse:e=>e},C1=e=>t=>t.test(e),E1=[Gi,F,Zt,Nn,mT,hT,UP],Cm=e=>E1.find(C1(e));function WP(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||By(e):!0}const HP=new Set(["brightness","contrast","saturate","opacity"]);function GP(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Ff)||[];if(!r)return e;const i=n.replace(r,"");let o=HP.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const KP=/\b([a-z-]*)\(.*?\)/gu,ld={...or,getAnimatableNone:e=>{const t=e.match(KP);return t?t.map(GP).join(" "):e}},Em={...Gi,transform:Math.round},YP={rotate:Nn,rotateX:Nn,rotateY:Nn,rotateZ:Nn,scale:Ks,scaleX:Ks,scaleY:Ks,scaleZ:Ks,skew:Nn,skewX:Nn,skewY:Nn,distance:F,translateX:F,translateY:F,translateZ:F,x:F,y:F,z:F,perspective:F,transformPerspective:F,opacity:es,originX:dm,originY:dm,originZ:F},Qf={borderWidth:F,borderTopWidth:F,borderRightWidth:F,borderBottomWidth:F,borderLeftWidth:F,borderRadius:F,radius:F,borderTopLeftRadius:F,borderTopRightRadius:F,borderBottomRightRadius:F,borderBottomLeftRadius:F,width:F,maxWidth:F,height:F,maxHeight:F,top:F,right:F,bottom:F,left:F,inset:F,insetBlock:F,insetBlockStart:F,insetBlockEnd:F,insetInline:F,insetInlineStart:F,insetInlineEnd:F,padding:F,paddingTop:F,paddingRight:F,paddingBottom:F,paddingLeft:F,paddingBlock:F,paddingBlockStart:F,paddingBlockEnd:F,paddingInline:F,paddingInlineStart:F,paddingInlineEnd:F,margin:F,marginTop:F,marginRight:F,marginBottom:F,marginLeft:F,marginBlock:F,marginBlockStart:F,marginBlockEnd:F,marginInline:F,marginInlineStart:F,marginInlineEnd:F,backgroundPositionX:F,backgroundPositionY:F,...YP,zIndex:Em,fillOpacity:es,strokeOpacity:es,numOctaves:Em},qP={...Qf,color:ye,backgroundColor:ye,outlineColor:ye,fill:ye,stroke:ye,borderColor:ye,borderTopColor:ye,borderRightColor:ye,borderBottomColor:ye,borderLeftColor:ye,filter:ld,WebkitFilter:ld},j1=e=>qP[e];function T1(e,t){let n=j1(e);return n!==ld&&(n=or),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const QP=new Set(["auto","none","0"]);function XP(e,t,n){let r=0,i;for(;r<e.length&&!i;){const o=e[r];typeof o=="string"&&!QP.has(o)&&ts(o).values.length&&(i=e[r]),r++}if(i&&n)for(const o of t)e[o]=T1(n,i)}class ZP extends Hf{constructor(t,n,r,i,o){super(t,n,r,i,o,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let d=0;d<t.length;d++){let f=t[d];if(typeof f=="string"&&(f=f.trim(),zf(f))){const p=v1(f,n.current);p!==void 0&&(t[d]=p),d===t.length-1&&(this.finalKeyframe=f)}}if(this.resolveNoneKeyframes(),!w1.has(r)||t.length!==2)return;const[i,o]=t,s=Cm(i),a=Cm(o),l=um(i),u=um(o);if(l!==u&&$n[r]){this.needsMeasurement=!0;return}if(s!==a)if(ym(s)&&ym(a))for(let d=0;d<t.length;d++){const f=t[d];typeof f=="string"&&(t[d]=parseFloat(f))}else $n[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)(t[i]===null||WP(t[i]))&&r.push(i);r.length&&XP(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=$n[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var a;const{element:t,name:n,unresolvedKeyframes:r}=this;if(!t||!t.current)return;const i=t.getValue(n);i&&i.jump(this.measuredOrigin,!1);const o=r.length-1,s=r[o];r[o]=$n[n](t.measureViewportBox(),window.getComputedStyle(t.current)),s!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=s),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([l,u])=>{t.getValue(l).set(u)}),this.resolveNoneKeyframes()}}function JP(e,t,n){if(e instanceof EventTarget)return[e];if(typeof e=="string"){const i=document.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e)}const P1=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function N1(e){return Vy(e)&&"offsetHeight"in e}const{schedule:Xf,cancel:lA}=Jy(queueMicrotask,!1),Pt={x:!1,y:!1};function R1(){return Pt.x||Pt.y}function eN(e){return e==="x"||e==="y"?Pt[e]?null:(Pt[e]=!0,()=>{Pt[e]=!1}):Pt.x||Pt.y?null:(Pt.x=Pt.y=!0,()=>{Pt.x=Pt.y=!1})}function A1(e,t){const n=JP(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function jm(e){return!(e.pointerType==="touch"||R1())}function tN(e,t,n={}){const[r,i,o]=A1(e,n),s=a=>{if(!jm(a))return;const{target:l}=a,u=t(l,a);if(typeof u!="function"||!l)return;const d=f=>{jm(f)&&(u(f),l.removeEventListener("pointerleave",d))};l.addEventListener("pointerleave",d,i)};return r.forEach(a=>{a.addEventListener("pointerenter",s,i)}),o}const M1=(e,t)=>t?e===t?!0:M1(e,t.parentElement):!1,Zf=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,nN=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function D1(e){return nN.has(e.tagName)||e.isContentEditable===!0}const ha=new WeakSet;function Tm(e){return t=>{t.key==="Enter"&&e(t)}}function Tc(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const rN=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=Tm(()=>{if(ha.has(n))return;Tc(n,"down");const i=Tm(()=>{Tc(n,"up")}),o=()=>Tc(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",o,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function Pm(e){return Zf(e)&&!R1()}function iN(e,t,n={}){const[r,i,o]=A1(e,n),s=a=>{const l=a.currentTarget;if(!Pm(a))return;ha.add(l);const u=t(l,a),d=(h,b)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",p),ha.has(l)&&ha.delete(l),Pm(h)&&typeof u=="function"&&u(h,{success:b})},f=h=>{d(h,l===window||l===document||n.useGlobalTarget||M1(l,h.target))},p=h=>{d(h,!1)};window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",p,i)};return r.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",s,i),N1(a)&&(a.addEventListener("focus",u=>rN(u,i)),!D1(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),o}function L1(e){return Vy(e)&&"ownerSVGElement"in e}function oN(e){return L1(e)&&e.tagName==="svg"}const sN=[...E1,ye,or],aN=e=>sN.find(C1(e)),Nm=()=>({translate:0,scale:1,origin:0,originPoint:0}),li=()=>({x:Nm(),y:Nm()}),Rm=()=>({min:0,max:0}),Se=()=>({x:Rm(),y:Rm()}),cd={current:null},O1={current:!1},lN=typeof window<"u";function cN(){if(O1.current=!0,!!lN)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>cd.current=e.matches;e.addEventListener("change",t),t()}else cd.current=!1}const uN=new WeakMap;function Dl(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function ns(e){return typeof e=="string"||Array.isArray(e)}const Jf=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],ep=["initial",...Jf];function Ll(e){return Dl(e.animate)||ep.some(t=>ns(e[t]))}function I1(e){return!!(Ll(e)||e.variants)}function dN(e,t,n){for(const r in t){const i=t[r],o=n[r];if(Fe(i))e.addValue(r,i);else if(Fe(o))e.addValue(r,Fi(i,{owner:e}));else if(o!==i)if(e.hasValue(r)){const s=e.getValue(r);s.liveStyle===!0?s.jump(i):s.hasAnimated||s.set(i)}else{const s=e.getStaticValue(r);e.addValue(r,Fi(s!==void 0?s:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Am=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Ja={};function z1(e){Ja=e}function fN(){return Ja}class pN{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:o,visualState:s},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Hf,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=Ue.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,ae.render(this.render,!1,!0))};const{latestValues:l,renderState:u}=s;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.blockInitialAnimation=!!o,this.isControllingVariants=Ll(n),this.isVariantNode=I1(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:d,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in f){const h=f[p];l[p]!==void 0&&Fe(h)&&h.set(l[p])}}mount(t){var n;this.current=t,uN.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,i)=>this.bindToMotionValue(i,r)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(O1.current||cN(),this.shouldReduceMotion=cd.current),(n=this.parent)==null||n.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var t;this.projection&&this.projection.unmount(),ir(this.notifyUpdate),ir(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const r=this.features[n];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=Yi.has(t);r&&this.onBindTransform&&this.onBindTransform();const i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&ae.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let o;typeof window<"u"&&window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),o&&o(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Ja){const n=Ja[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const o=this.features[t];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Se()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Am.length;r++){const i=Am[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o="on"+i,s=t[o];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=dN(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Fi(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){let r=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return r!=null&&(typeof r=="string"&&(_y(r)||By(r))?r=parseFloat(r):!aN(r)&&or.test(n)&&(r=T1(t,n)),this.setBaseTarget(t,Fe(r)?r.get():r)),Fe(r)?r.get():r}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var o;const{initial:n}=this.props;let r;if(typeof n=="string"||typeof n=="object"){const s=Yf(this.props,n,(o=this.presenceContext)==null?void 0:o.custom);s&&(r=s[t])}if(n&&r!==void 0)return r;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!Fe(i)?i:this.initialValues[t]!==void 0&&r===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Lf),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){Xf.render(this.render)}}class ur{constructor(t){this.isMounted=!1,this.node=t}update(){}}class F1 extends pN{constructor(){super(...arguments),this.KeyframeResolver=ZP}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){const r=t.style;return r?r[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Fe(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function _1({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function hN({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function mN(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Pc(e){return e===void 0||e===1}function ud({scale:e,scaleX:t,scaleY:n}){return!Pc(e)||!Pc(t)||!Pc(n)}function xr(e){return ud(e)||V1(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function V1(e){return Mm(e.x)||Mm(e.y)}function Mm(e){return e&&e!=="0%"}function el(e,t,n){const r=e-n,i=t*r;return n+i}function Dm(e,t,n,r,i){return i!==void 0&&(e=el(e,i,r)),el(e,n,r)+t}function dd(e,t=0,n=1,r,i){e.min=Dm(e.min,t,n,r,i),e.max=Dm(e.max,t,n,r,i)}function B1(e,{x:t,y:n}){dd(e.x,t.translate,t.scale,t.originPoint),dd(e.y,n.translate,n.scale,n.originPoint)}const Lm=.999999999999,Om=1.0000000000001;function gN(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,s;for(let a=0;a<i;a++){o=n[a],s=o.projectionDelta;const{visualElement:l}=o.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&ui(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,B1(e,s)),r&&xr(o.latestValues)&&ui(e,o.latestValues))}t.x<Om&&t.x>Lm&&(t.x=1),t.y<Om&&t.y>Lm&&(t.y=1)}function ci(e,t){e.min=e.min+t,e.max=e.max+t}function Im(e,t,n,r,i=.5){const o=fe(e.min,e.max,i);dd(e,t,n,o,r)}function ui(e,t){Im(e.x,t.x,t.scaleX,t.scale,t.originX),Im(e.y,t.y,t.scaleY,t.scale,t.originY)}function $1(e,t){return _1(mN(e.getBoundingClientRect(),t))}function xN(e,t,n){const r=$1(e,n),{scroll:i}=t;return i&&(ci(r.x,i.offset.x),ci(r.y,i.offset.y)),r}const vN={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},yN=Ki.length;function wN(e,t,n){let r="",i=!0;for(let o=0;o<yN;o++){const s=Ki[o],a=e[s];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(s.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const u=P1(a,Qf[s]);if(!l){i=!1;const d=vN[s]||s;r+=`${d}(${u}) `}n&&(t[s]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function tp(e,t,n){const{style:r,vars:i,transformOrigin:o}=e;let s=!1,a=!1;for(const l in t){const u=t[l];if(Yi.has(l)){s=!0;continue}else if(t1(l)){i[l]=u;continue}else{const d=P1(u,Qf[l]);l.startsWith("origin")?(a=!0,o[l]=d):r[l]=d}}if(t.transform||(s||n?r.transform=wN(t,e.transform,n):r.transform&&(r.transform="none")),a){const{originX:l="50%",originY:u="50%",originZ:d=0}=o;r.transformOrigin=`${l} ${u} ${d}`}}function U1(e,{style:t,vars:n},r,i){const o=e.style;let s;for(s in t)o[s]=t[s];i==null||i.applyProjectionStyles(o,r);for(s in n)o.setProperty(s,n[s])}function zm(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const ao={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(F.test(e))e=parseFloat(e);else return e;const n=zm(e,t.target.x),r=zm(e,t.target.y);return`${n}% ${r}%`}},bN={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=or.parse(e);if(i.length>5)return r;const o=or.createTransformer(e),s=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+s]/=a,i[1+s]/=l;const u=fe(a,l,.5);return typeof i[2+s]=="number"&&(i[2+s]/=u),typeof i[3+s]=="number"&&(i[3+s]/=u),o(i)}},fd={borderRadius:{...ao,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ao,borderTopRightRadius:ao,borderBottomLeftRadius:ao,borderBottomRightRadius:ao,boxShadow:bN};function W1(e,{layout:t,layoutId:n}){return Yi.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!fd[e]||e==="opacity")}function np(e,t,n){var s;const r=e.style,i=t==null?void 0:t.style,o={};if(!r)return o;for(const a in r)(Fe(r[a])||i&&Fe(i[a])||W1(a,e)||((s=n==null?void 0:n.getValue(a))==null?void 0:s.liveStyle)!==void 0)&&(o[a]=r[a]);return o}function SN(e){return window.getComputedStyle(e)}class kN extends F1{constructor(){super(...arguments),this.type="html",this.renderInstance=U1}readValueFromInstance(t,n){var r;if(Yi.has(n))return(r=this.projection)!=null&&r.isProjecting?Ju(n):ZT(t,n);{const i=SN(t),o=(t1(n)?i.getPropertyValue(n):i[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return $1(t,n)}build(t,n,r){tp(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return np(t,n,r)}}const CN={offset:"stroke-dashoffset",array:"stroke-dasharray"},EN={offset:"strokeDashoffset",array:"strokeDasharray"};function jN(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?CN:EN;e[o.offset]=F.transform(-r);const s=F.transform(t),a=F.transform(n);e[o.array]=`${s} ${a}`}const TN=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function H1(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:o=1,pathOffset:s=0,...a},l,u,d){if(tp(e,a,u),l){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:f,style:p}=e;f.transform&&(p.transform=f.transform,delete f.transform),(p.transform||f.transformOrigin)&&(p.transformOrigin=f.transformOrigin??"50% 50%",delete f.transformOrigin),p.transform&&(p.transformBox=(d==null?void 0:d.transformBox)??"fill-box",delete f.transformBox);for(const h of TN)f[h]!==void 0&&(p[h]=f[h],delete f[h]);t!==void 0&&(f.x=t),n!==void 0&&(f.y=n),r!==void 0&&(f.scale=r),i!==void 0&&jN(f,i,o,s,!1)}const G1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),K1=e=>typeof e=="string"&&e.toLowerCase()==="svg";function PN(e,t,n,r){U1(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(G1.has(i)?i:qf(i),t.attrs[i])}function Y1(e,t,n){const r=np(e,t,n);for(const i in e)if(Fe(e[i])||Fe(t[i])){const o=Ki.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[o]=e[i]}return r}class NN extends F1{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Se}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Yi.has(n)){const r=j1(n);return r&&r.default||0}return n=G1.has(n)?n:qf(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return Y1(t,n,r)}build(t,n,r){H1(t,n,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(t,n,r,i){PN(t,n,r,i)}mount(t){this.isSVGTag=K1(t.tagName),super.mount(t)}}const RN=ep.length;function q1(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?q1(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<RN;n++){const r=ep[n],i=e.props[r];(ns(i)||i===!1)&&(t[r]=i)}return t}function Q1(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const AN=[...Jf].reverse(),MN=Jf.length;function DN(e){return t=>Promise.all(t.map(({animation:n,options:r})=>$P(e,n,r)))}function LN(e){let t=DN(e),n=Fm(),r=!0;const i=l=>(u,d)=>{var p;const f=yi(e,d,l==="exit"?(p=e.presenceContext)==null?void 0:p.custom:void 0);if(f){const{transition:h,transitionEnd:b,...m}=f;u={...u,...m,...b}}return u};function o(l){t=l(e)}function s(l){const{props:u}=e,d=q1(e.parent)||{},f=[],p=new Set;let h={},b=1/0;for(let y=0;y<MN;y++){const g=AN[y],x=n[g],v=u[g]!==void 0?u[g]:d[g],S=ns(v),k=g===l?x.isActive:null;k===!1&&(b=y);let C=v===d[g]&&v!==u[g]&&S;if(C&&r&&e.manuallyAnimateOnMount&&(C=!1),x.protectedKeys={...h},!x.isActive&&k===null||!v&&!x.prevProp||Dl(v)||typeof v=="boolean")continue;const E=ON(x.prevProp,v);let j=E||g===l&&x.isActive&&!C&&S||y>b&&S,T=!1;const A=Array.isArray(v)?v:[v];let L=A.reduce(i(g),{});k===!1&&(L={});const{prevResolvedValues:O={}}=x,K={...O,...L},I=V=>{j=!0,p.has(V)&&(T=!0,p.delete(V)),x.needsAnimating[V]=!0;const P=e.getValue(V);P&&(P.liveStyle=!1)};for(const V in K){const P=L[V],R=O[V];if(h.hasOwnProperty(V))continue;let z=!1;od(P)&&od(R)?z=!Q1(P,R):z=P!==R,z?P!=null?I(V):p.add(V):P!==void 0&&p.has(V)?I(V):x.protectedKeys[V]=!0}x.prevProp=v,x.prevResolvedValues=L,x.isActive&&(h={...h,...L}),r&&e.blockInitialAnimation&&(j=!1);const Y=C&&E;j&&(!Y||T)&&f.push(...A.map(V=>{const P={type:g};if(typeof V=="string"&&r&&!Y&&e.manuallyAnimateOnMount&&e.parent){const{parent:R}=e,z=yi(R,V);if(R.enteringChildren&&z){const{delayChildren:U}=z.transition||{};P.delay=y1(R.enteringChildren,e,U)}}return{animation:V,options:P}}))}if(p.size){const y={};if(typeof u.initial!="boolean"){const g=yi(e,Array.isArray(u.initial)?u.initial[0]:u.initial);g&&g.transition&&(y.transition=g.transition)}p.forEach(g=>{const x=e.getBaseTarget(g),v=e.getValue(g);v&&(v.liveStyle=!0),y[g]=x??null}),f.push({animation:y})}let m=!!f.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(m=!1),r=!1,m?t(f):Promise.resolve()}function a(l,u){var f;if(n[l].isActive===u)return Promise.resolve();(f=e.variantChildren)==null||f.forEach(p=>{var h;return(h=p.animationState)==null?void 0:h.setActive(l,u)}),n[l].isActive=u;const d=s(l);for(const p in n)n[p].protectedKeys={};return d}return{animateChanges:s,setActive:a,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Fm()}}}function ON(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Q1(t,e):!1}function hr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Fm(){return{animate:hr(!0),whileInView:hr(),whileHover:hr(),whileTap:hr(),whileDrag:hr(),whileFocus:hr(),exit:hr()}}const X1=1e-4,IN=1-X1,zN=1+X1,Z1=.01,FN=0-Z1,_N=0+Z1;function We(e){return e.max-e.min}function VN(e,t,n){return Math.abs(e-t)<=n}function _m(e,t,n,r=.5){e.origin=r,e.originPoint=fe(t.min,t.max,e.origin),e.scale=We(n)/We(t),e.translate=fe(n.min,n.max,e.origin)-e.originPoint,(e.scale>=IN&&e.scale<=zN||isNaN(e.scale))&&(e.scale=1),(e.translate>=FN&&e.translate<=_N||isNaN(e.translate))&&(e.translate=0)}function Po(e,t,n,r){_m(e.x,t.x,n.x,r?r.originX:void 0),_m(e.y,t.y,n.y,r?r.originY:void 0)}function Vm(e,t,n){e.min=n.min+t.min,e.max=e.min+We(t)}function BN(e,t,n){Vm(e.x,t.x,n.x),Vm(e.y,t.y,n.y)}function Bm(e,t,n){e.min=t.min-n.min,e.max=e.min+We(t)}function tl(e,t,n){Bm(e.x,t.x,n.x),Bm(e.y,t.y,n.y)}function $m(e,t,n,r,i){return e-=t,e=el(e,1/n,r),i!==void 0&&(e=el(e,1/i,r)),e}function $N(e,t=0,n=1,r=.5,i,o=e,s=e){if(Zt.test(t)&&(t=parseFloat(t),t=fe(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=fe(o.min,o.max,r);e===o&&(a-=t),e.min=$m(e.min,t,n,a,i),e.max=$m(e.max,t,n,a,i)}function Um(e,t,[n,r,i],o,s){$N(e,t[n],t[r],t[i],t.scale,o,s)}const UN=["x","scaleX","originX"],WN=["y","scaleY","originY"];function Wm(e,t,n,r){Um(e.x,t,UN,n?n.x:void 0,r?r.x:void 0),Um(e.y,t,WN,n?n.y:void 0,r?r.y:void 0)}function Hm(e,t){e.min=t.min,e.max=t.max}function Tt(e,t){Hm(e.x,t.x),Hm(e.y,t.y)}function Gm(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Km(e){return e.translate===0&&e.scale===1}function J1(e){return Km(e.x)&&Km(e.y)}function Ym(e,t){return e.min===t.min&&e.max===t.max}function HN(e,t){return Ym(e.x,t.x)&&Ym(e.y,t.y)}function qm(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function ew(e,t){return qm(e.x,t.x)&&qm(e.y,t.y)}function Qm(e){return We(e.x)/We(e.y)}function Xm(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function ft(e){return[e("x"),e("y")]}function GN(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y,s=(n==null?void 0:n.z)||0;if((i||o||s)&&(r=`translate3d(${i}px, ${o}px, ${s}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:d,rotateX:f,rotateY:p,skewX:h,skewY:b}=n;u&&(r=`perspective(${u}px) ${r}`),d&&(r+=`rotate(${d}deg) `),f&&(r+=`rotateX(${f}deg) `),p&&(r+=`rotateY(${p}deg) `),h&&(r+=`skewX(${h}deg) `),b&&(r+=`skewY(${b}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const tw=["TopLeft","TopRight","BottomLeft","BottomRight"],KN=tw.length,Zm=e=>typeof e=="string"?parseFloat(e):e,Jm=e=>typeof e=="number"||F.test(e);function YN(e,t,n,r,i,o){i?(e.opacity=fe(0,n.opacity??1,qN(r)),e.opacityExit=fe(t.opacity??1,0,QN(r))):o&&(e.opacity=fe(t.opacity??1,n.opacity??1,r));for(let s=0;s<KN;s++){const a=`border${tw[s]}Radius`;let l=eg(t,a),u=eg(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||Jm(l)===Jm(u)?(e[a]=Math.max(fe(Zm(l),Zm(u),r),0),(Zt.test(u)||Zt.test(l))&&(e[a]+="%")):e[a]=u}(t.rotate||n.rotate)&&(e.rotate=fe(t.rotate||0,n.rotate||0,r))}function eg(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const qN=nw(0,.5,qy),QN=nw(.5,.95,yt);function nw(e,t,n){return r=>r<e?0:r>t?1:n(Jo(e,t,r))}function XN(e,t){const n=Ue.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(ir(r),e(o-t))};return ae.setup(r,!0),()=>ir(r)}function rs(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function ma(e){return Fe(e)?e.get():e}function ZN(e,t,n){const r=Fe(e)?e:Fi(e);return r.start(Kf("",r,t,n)),r.animation}const JN=(e,t)=>e.depth-t.depth;class e4{constructor(){this.children=[],this.isDirty=!1}add(t){Af(this.children,t),this.isDirty=!0}remove(t){Mf(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(JN),this.isDirty=!1,this.children.forEach(t)}}class t4{constructor(){this.members=[]}add(t){Af(this.members,t),t.scheduleRender()}remove(t){if(Mf(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const ga={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Nc=["","X","Y","Z"],n4=1e3;let r4=0;function Rc(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function rw(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=S1(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:o}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",ae,!(i||o))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&rw(r)}function iw({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},a=t==null?void 0:t()){this.id=r4++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(s4),this.nodes.forEach(u4),this.nodes.forEach(d4),this.nodes.forEach(a4)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new e4)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new Lf),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s){if(this.instance)return;this.isSVG=L1(s)&&!oN(s),this.instance=s;const{layoutId:a,layout:l,visualElement:u}=this.options;if(u&&!u.current&&u.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||a)&&(this.isLayoutDirty=!0),e){let d,f=0;const p=()=>this.root.updateBlockedByResize=!1;ae.read(()=>{f=window.innerWidth}),e(s,()=>{const h=window.innerWidth;h!==f&&(f=h,this.root.updateBlockedByResize=!0,d&&d(),d=XN(p,250),ga.hasAnimatedSinceResize&&(ga.hasAnimatedSinceResize=!1,this.nodes.forEach(rg)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&u&&(a||l)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f,hasRelativeLayoutChanged:p,layout:h})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const b=this.options.transition||u.getDefaultTransition()||g4,{onLayoutAnimationStart:m,onLayoutAnimationComplete:y}=u.getProps(),g=!this.targetLayout||!ew(this.targetLayout,h),x=!f&&p;if(this.options.layoutRoot||this.resumeFrom||x||f&&(g||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const v={...Gf(b,"layout"),onPlay:m,onComplete:y};(u.shouldReduceMotion||this.options.layoutRoot)&&(v.delay=0,v.type=!1),this.startAnimation(v),this.setAnimationOrigin(d,x)}else f||rg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=h})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),ir(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(f4),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&rw(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(tg);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(ng);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(c4),this.nodes.forEach(i4),this.nodes.forEach(o4)):this.nodes.forEach(ng),this.clearAllSnapshots();const a=Ue.now();Ne.delta=en(0,1e3/60,a-Ne.timestamp),Ne.timestamp=a,Ne.isProcessing=!0,bc.update.process(Ne),bc.preRender.process(Ne),bc.render.process(Ne),Ne.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Xf.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(l4),this.sharedNodes.forEach(p4)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ae.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ae.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!We(this.snapshot.measuredBox.x)&&!We(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=Se(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a&&this.instance){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:s,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!J1(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;s&&this.instance&&(a||xr(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),x4(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:s}=this.options;if(!s)return Se();const a=s.measureViewportBox();if(!(((u=this.scroll)==null?void 0:u.wasRoot)||this.path.some(v4))){const{scroll:d}=this.root;d&&(ci(a.x,d.offset.x),ci(a.y,d.offset.y))}return a}removeElementScroll(s){var l;const a=Se();if(Tt(a,s),(l=this.scroll)!=null&&l.wasRoot)return a;for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:f,options:p}=d;d!==this.root&&f&&p.layoutScroll&&(f.wasRoot&&Tt(a,s),ci(a.x,f.offset.x),ci(a.y,f.offset.y))}return a}applyTransform(s,a=!1){const l=Se();Tt(l,s);for(let u=0;u<this.path.length;u++){const d=this.path[u];!a&&d.options.layoutScroll&&d.scroll&&d!==d.root&&ui(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),xr(d.latestValues)&&ui(l,d.latestValues)}return xr(this.latestValues)&&ui(l,this.latestValues),l}removeTransform(s){const a=Se();Tt(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!xr(u.latestValues))continue;ud(u.latestValues)&&u.updateSnapshot();const d=Se(),f=u.measurePageBox();Tt(d,f),Wm(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return xr(this.latestValues)&&Wm(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ne.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var h;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==a;if(!(s||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(h=this.parent)!=null&&h.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:f}=this.options;if(!this.layout||!(d||f))return;this.resolvedRelativeTargetAt=Ne.timestamp;const p=this.getClosestProjectingParent();p&&this.linkedParentVersion!==p.layoutVersion&&!p.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(p&&p.layout?this.createRelativeTarget(p,this.layout.layoutBox,p.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Se(),this.targetWithTransforms=Se()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),BN(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Tt(this.target,this.layout.layoutBox),B1(this.target,this.targetDelta)):Tt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?this.createRelativeTarget(p,this.target,p.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||ud(this.parent.latestValues)||V1(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(s,a,l){this.relativeParent=s,this.linkedParentVersion=s.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Se(),this.relativeTargetOrigin=Se(),tl(this.relativeTargetOrigin,a,l),Tt(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var b;const s=this.getLead(),a=!!this.resumingFrom||this!==s;let l=!0;if((this.isProjectionDirty||(b=this.parent)!=null&&b.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===Ne.timestamp&&(l=!1),l)return;const{layout:u,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||d))return;Tt(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,p=this.treeScale.y;gN(this.layoutCorrected,this.treeScale,this.path,a),s.layout&&!s.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(s.target=s.layout.layoutBox,s.targetWithTransforms=Se());const{target:h}=s;if(!h){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Gm(this.prevProjectionDelta.x,this.projectionDelta.x),Gm(this.prevProjectionDelta.y,this.projectionDelta.y)),Po(this.projectionDelta,this.layoutCorrected,h,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==p||!Xm(this.projectionDelta.x,this.prevProjectionDelta.x)||!Xm(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",h))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),s){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=li(),this.projectionDelta=li(),this.projectionDeltaWithTransform=li()}setAnimationOrigin(s,a=!1){const l=this.snapshot,u=l?l.latestValues:{},d={...this.latestValues},f=li();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const p=Se(),h=l?l.source:void 0,b=this.layout?this.layout.source:void 0,m=h!==b,y=this.getStack(),g=!y||y.members.length<=1,x=!!(m&&!g&&this.options.crossfade===!0&&!this.path.some(m4));this.animationProgress=0;let v;this.mixTargetDelta=S=>{const k=S/1e3;ig(f.x,s.x,k),ig(f.y,s.y,k),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(tl(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),h4(this.relativeTarget,this.relativeTargetOrigin,p,k),v&&HN(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=Se()),Tt(v,this.relativeTarget)),m&&(this.animationValues=d,YN(d,u,this.latestValues,k,x,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=k},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){var a,l,u;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(u=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||u.stop(),this.pendingAnimation&&(ir(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ae.update(()=>{ga.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Fi(0)),this.currentAnimation=ZN(this.motionValue,[0,1e3],{...s,velocity:0,isSync:!0,onUpdate:d=>{this.mixTargetDelta(d),s.onUpdate&&s.onUpdate(d)},onStop:()=>{},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(n4),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:d}=s;if(!(!a||!l||!u)){if(this!==s&&this.layout&&u&&ow(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||Se();const f=We(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+f;const p=We(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+p}Tt(a,l),ui(a,d),Po(this.projectionDeltaWithTransform,this.layoutCorrected,a,d)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new t4),this.sharedNodes.get(s).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var a;const{layoutId:s}=this.options;return s?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:s}=this.options;return s?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetSkewAndRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const u={};l.z&&Rc("z",s,u,this.animationValues);for(let d=0;d<Nc.length;d++)Rc(`rotate${Nc[d]}`,s,u,this.animationValues),Rc(`skew${Nc[d]}`,s,u,this.animationValues);s.render();for(const d in u)s.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);s.scheduleRender()}applyProjectionStyles(s,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){s.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,s.visibility="",s.opacity="",s.pointerEvents=ma(a==null?void 0:a.pointerEvents)||"",s.transform=l?l(this.latestValues,""):"none";return}const u=this.getLead();if(!this.projectionDelta||!this.layout||!u.target){this.options.layoutId&&(s.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,s.pointerEvents=ma(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!xr(this.latestValues)&&(s.transform=l?l({},""):"none",this.hasProjected=!1);return}s.visibility="";const d=u.animationValues||u.latestValues;this.applyTransformsToTarget();let f=GN(this.projectionDeltaWithTransform,this.treeScale,d);l&&(f=l(d,f)),s.transform=f;const{x:p,y:h}=this.projectionDelta;s.transformOrigin=`${p.origin*100}% ${h.origin*100}% 0`,u.animationValues?s.opacity=u===this?d.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:s.opacity=u===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const b in fd){if(d[b]===void 0)continue;const{correct:m,applyTo:y,isCSSVariable:g}=fd[b],x=f==="none"?d[b]:m(d[b],u);if(y){const v=y.length;for(let S=0;S<v;S++)s[y[S]]=x}else g?this.options.visualElement.renderState.vars[b]=x:s[b]=x}this.options.layoutId&&(s.pointerEvents=u===this?ma(a==null?void 0:a.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(tg),this.root.sharedNodes.clear()}}}function i4(e){e.updateLayout()}function o4(e){var n;const t=((n=e.resumeFrom)==null?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=t.source!==e.layout.source;o==="size"?ft(f=>{const p=s?t.measuredBox[f]:t.layoutBox[f],h=We(p);p.min=r[f].min,p.max=p.min+h}):ow(o,t.layoutBox,r)&&ft(f=>{const p=s?t.measuredBox[f]:t.layoutBox[f],h=We(r[f]);p.max=p.min+h,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+h)});const a=li();Po(a,r,t.layoutBox);const l=li();s?Po(l,e.applyTransform(i,!0),t.measuredBox):Po(l,r,t.layoutBox);const u=!J1(a);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:h}=f;if(p&&h){const b=Se();tl(b,t.layoutBox,p.layoutBox);const m=Se();tl(m,r,h.layoutBox),ew(b,m)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=m,e.relativeTargetOrigin=b,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeLayoutChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function s4(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function a4(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function l4(e){e.clearSnapshot()}function tg(e){e.clearMeasurements()}function ng(e){e.isLayoutDirty=!1}function c4(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function rg(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function u4(e){e.resolveTargetDelta()}function d4(e){e.calcProjection()}function f4(e){e.resetSkewAndRotation()}function p4(e){e.removeLeadSnapshot()}function ig(e,t,n){e.translate=fe(t.translate,0,n),e.scale=fe(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function og(e,t,n,r){e.min=fe(t.min,n.min,r),e.max=fe(t.max,n.max,r)}function h4(e,t,n,r){og(e.x,t.x,n.x,r),og(e.y,t.y,n.y,r)}function m4(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const g4={duration:.45,ease:[.4,0,.1,1]},sg=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),ag=sg("applewebkit/")&&!sg("chrome/")?Math.round:yt;function lg(e){e.min=ag(e.min),e.max=ag(e.max)}function x4(e){lg(e.x),lg(e.y)}function ow(e,t,n){return e==="position"||e==="preserve-aspect"&&!VN(Qm(t),Qm(n),.2)}function v4(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const y4=iw({attachResizeListener:(e,t)=>rs(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Ac={current:void 0},sw=iw({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Ac.current){const e=new y4({});e.mount(window),e.setOptions({layoutScroll:!0}),Ac.current=e}return Ac.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),rp=w.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function cg(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function w4(...e){return t=>{let n=!1;const r=e.map(i=>{const o=cg(i,t);return!n&&typeof o=="function"&&(n=!0),o});if(n)return()=>{for(let i=0;i<r.length;i++){const o=r[i];typeof o=="function"?o():cg(e[i],null)}}}}function b4(...e){return w.useCallback(w4(...e),e)}class S4 extends w.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=n.offsetParent,i=N1(r)&&r.offsetWidth||0,o=this.props.sizeRef.current;o.height=n.offsetHeight||0,o.width=n.offsetWidth||0,o.top=n.offsetTop,o.left=n.offsetLeft,o.right=i-o.width-o.left}return null}componentDidUpdate(){}render(){return this.props.children}}function k4({children:e,isPresent:t,anchorX:n,root:r}){var d;const i=w.useId(),o=w.useRef(null),s=w.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:a}=w.useContext(rp),l=((d=e.props)==null?void 0:d.ref)??(e==null?void 0:e.ref),u=b4(o,l);return w.useInsertionEffect(()=>{const{width:f,height:p,top:h,left:b,right:m}=s.current;if(t||!o.current||!f||!p)return;const y=n==="left"?`left: ${b}`:`right: ${m}`;o.current.dataset.motionPopId=i;const g=document.createElement("style");a&&(g.nonce=a);const x=r??document.head;return x.appendChild(g),g.sheet&&g.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${p}px !important;
            ${y}px !important;
            top: ${h}px !important;
          }
        `),()=>{x.contains(g)&&x.removeChild(g)}},[t]),c.jsx(S4,{isPresent:t,childRef:o,sizeRef:s,children:w.cloneElement(e,{ref:u})})}const C4=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:s,anchorX:a,root:l})=>{const u=Rf(E4),d=w.useId();let f=!0,p=w.useMemo(()=>(f=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:h=>{u.set(h,!0);for(const b of u.values())if(!b)return;r&&r()},register:h=>(u.set(h,!1),()=>u.delete(h))}),[n,u,r]);return o&&f&&(p={...p}),w.useMemo(()=>{u.forEach((h,b)=>u.set(b,!1))},[n]),w.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),s==="popLayout"&&(e=c.jsx(k4,{isPresent:n,anchorX:a,root:l,children:e})),c.jsx(Al.Provider,{value:p,children:e})};function E4(){return new Map}function aw(e=!0){const t=w.useContext(Al);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,o=w.useId();w.useEffect(()=>{if(e)return i(o)},[e]);const s=w.useCallback(()=>e&&r&&r(o),[o,r,e]);return!n&&r?[!1,s]:[!0]}const Ys=e=>e.key||"";function ug(e){const t=[];return w.Children.forEach(e,n=>{w.isValidElement(n)&&t.push(n)}),t}const nl=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:o="sync",propagate:s=!1,anchorX:a="left",root:l})=>{const[u,d]=aw(s),f=w.useMemo(()=>ug(e),[e]),p=s&&!u?[]:f.map(Ys),h=w.useRef(!0),b=w.useRef(f),m=Rf(()=>new Map),y=w.useRef(new Set),[g,x]=w.useState(f),[v,S]=w.useState(f);Fy(()=>{h.current=!1,b.current=f;for(let E=0;E<v.length;E++){const j=Ys(v[E]);p.includes(j)?(m.delete(j),y.current.delete(j)):m.get(j)!==!0&&m.set(j,!1)}},[v,p.length,p.join("-")]);const k=[];if(f!==g){let E=[...f];for(let j=0;j<v.length;j++){const T=v[j],A=Ys(T);p.includes(A)||(E.splice(j,0,T),k.push(T))}return o==="wait"&&k.length&&(E=k),S(ug(E)),x(f),null}const{forceRender:C}=w.useContext(Nf);return c.jsx(c.Fragment,{children:v.map(E=>{const j=Ys(E),T=s&&!u?!1:f===v||p.includes(j),A=()=>{if(y.current.has(j))return;if(y.current.add(j),m.has(j))m.set(j,!0);else return;let L=!0;m.forEach(O=>{O||(L=!1)}),L&&(C==null||C(),S(b.current),s&&(d==null||d()),r&&r())};return c.jsx(C4,{isPresent:T,initial:!h.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:o,root:l,onExitComplete:T?void 0:A,anchorX:a,children:E},j)})})},lw=w.createContext({strict:!1}),dg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let fg=!1;function j4(){if(fg)return;const e={};for(const t in dg)e[t]={isEnabled:n=>dg[t].some(r=>!!n[r])};z1(e),fg=!0}function cw(){return j4(),fN()}function T4(e){const t=cw();for(const n in e)t[n]={...t[n],...e[n]};z1(t)}const P4=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function rl(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||P4.has(e)}let uw=e=>!rl(e);function N4(e){typeof e=="function"&&(uw=t=>t.startsWith("on")?!rl(t):e(t))}try{N4(require("@emotion/is-prop-valid").default)}catch{}function R4(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(uw(i)||n===!0&&rl(i)||!t&&!rl(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}const Ol=w.createContext({});function A4(e,t){if(Ll(e)){const{initial:n,animate:r}=e;return{initial:n===!1||ns(n)?n:void 0,animate:ns(r)?r:void 0}}return e.inherit!==!1?t:{}}function M4(e){const{initial:t,animate:n}=A4(e,w.useContext(Ol));return w.useMemo(()=>({initial:t,animate:n}),[pg(t),pg(n)])}function pg(e){return Array.isArray(e)?e.join(" "):e}const ip=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function dw(e,t,n){for(const r in t)!Fe(t[r])&&!W1(r,n)&&(e[r]=t[r])}function D4({transformTemplate:e},t){return w.useMemo(()=>{const n=ip();return tp(n,t,e),Object.assign({},n.vars,n.style)},[t])}function L4(e,t){const n=e.style||{},r={};return dw(r,n,e),Object.assign(r,D4(e,t)),r}function O4(e,t){const n={},r=L4(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const fw=()=>({...ip(),attrs:{}});function I4(e,t,n,r){const i=w.useMemo(()=>{const o=fw();return H1(o,t,K1(r),e.transformTemplate,e.style),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};dw(o,e.style,e),i.style={...o,...i.style}}return i}const z4=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function op(e){return typeof e!="string"||e.includes("-")?!1:!!(z4.indexOf(e)>-1||/[A-Z]/u.test(e))}function F4(e,t,n,{latestValues:r},i,o=!1,s){const l=(s??op(e)?I4:O4)(t,r,i,e),u=R4(t,typeof e=="string",o),d=e!==w.Fragment?{...u,...l,ref:n}:{},{children:f}=t,p=w.useMemo(()=>Fe(f)?f.get():f,[f]);return w.createElement(e,{...d,children:p})}function _4({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:V4(n,r,i,e),renderState:t()}}function V4(e,t,n,r){const i={},o=r(e,{});for(const p in o)i[p]=ma(o[p]);let{initial:s,animate:a}=e;const l=Ll(e),u=I1(e);t&&u&&!l&&e.inherit!==!1&&(s===void 0&&(s=t.initial),a===void 0&&(a=t.animate));let d=n?n.initial===!1:!1;d=d||s===!1;const f=d?a:s;if(f&&typeof f!="boolean"&&!Dl(f)){const p=Array.isArray(f)?f:[f];for(let h=0;h<p.length;h++){const b=Yf(e,p[h]);if(b){const{transitionEnd:m,transition:y,...g}=b;for(const x in g){let v=g[x];if(Array.isArray(v)){const S=d?v.length-1:0;v=v[S]}v!==null&&(i[x]=v)}for(const x in m)i[x]=m[x]}}}return i}const pw=e=>(t,n)=>{const r=w.useContext(Ol),i=w.useContext(Al),o=()=>_4(e,t,r,i);return n?o():Rf(o)},B4=pw({scrapeMotionValuesFromProps:np,createRenderState:ip}),$4=pw({scrapeMotionValuesFromProps:Y1,createRenderState:fw}),U4=Symbol.for("motionComponentSymbol");function W4(e,t,n){const r=w.useRef(n);w.useInsertionEffect(()=>{r.current=n});const i=w.useRef(null);return w.useCallback(o=>{var a;o&&((a=e.onMount)==null||a.call(e,o)),t&&(o?t.mount(o):t.unmount());const s=r.current;if(typeof s=="function")if(o){const l=s(o);typeof l=="function"&&(i.current=l)}else i.current?(i.current(),i.current=null):s(o);else s&&(s.current=o)},[t])}const hw=w.createContext({});function mo(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function H4(e,t,n,r,i,o){var y,g;const{visualElement:s}=w.useContext(Ol),a=w.useContext(lw),l=w.useContext(Al),u=w.useContext(rp).reducedMotion,d=w.useRef(null);r=r||a.renderer,!d.current&&r&&(d.current=r(e,{visualState:t,parent:s,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:u,isSVG:o}));const f=d.current,p=w.useContext(hw);f&&!f.projection&&i&&(f.type==="html"||f.type==="svg")&&G4(d.current,n,i,p);const h=w.useRef(!1);w.useInsertionEffect(()=>{f&&h.current&&f.update(n,l)});const b=n[b1],m=w.useRef(!!b&&!((y=window.MotionHandoffIsComplete)!=null&&y.call(window,b))&&((g=window.MotionHasOptimisedAnimation)==null?void 0:g.call(window,b)));return Fy(()=>{f&&(h.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),f.scheduleRenderMicrotask(),m.current&&f.animationState&&f.animationState.animateChanges())}),w.useEffect(()=>{f&&(!m.current&&f.animationState&&f.animationState.animateChanges(),m.current&&(queueMicrotask(()=>{var x;(x=window.MotionHandoffMarkAsComplete)==null||x.call(window,b)}),m.current=!1),f.enteringChildren=void 0)}),f}function G4(e,t,n,r){const{layoutId:i,layout:o,drag:s,dragConstraints:a,layoutScroll:l,layoutRoot:u,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:mw(e.parent)),e.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:!!s||a&&mo(a),visualElement:e,animationType:typeof o=="string"?o:"both",initialPromotionConfig:r,crossfade:d,layoutScroll:l,layoutRoot:u})}function mw(e){if(e)return e.options.allowProjection!==!1?e.projection:mw(e.parent)}function Mc(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&T4(r);const o=n?n==="svg":op(e),s=o?$4:B4;function a(u,d){let f;const p={...w.useContext(rp),...u,layoutId:K4(u)},{isStatic:h}=p,b=M4(u),m=s(u,h);if(!h&&zy){Y4();const y=q4(p);f=y.MeasureLayout,b.visualElement=H4(e,m,p,i,y.ProjectionNode,o)}return c.jsxs(Ol.Provider,{value:b,children:[f&&b.visualElement?c.jsx(f,{visualElement:b.visualElement,...p}):null,F4(e,u,W4(m,b.visualElement,d),m,h,t,o)]})}a.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const l=w.forwardRef(a);return l[U4]=e,l}function K4({layoutId:e}){const t=w.useContext(Nf).id;return t&&e!==void 0?t+"-"+e:e}function Y4(e,t){w.useContext(lw).strict}function q4(e){const t=cw(),{drag:n,layout:r}=t;if(!n&&!r)return{};const i={...n,...r};return{MeasureLayout:n!=null&&n.isEnabled(e)||r!=null&&r.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function Q4(e,t){if(typeof Proxy>"u")return Mc;const n=new Map,r=(o,s)=>Mc(o,s,e,t),i=(o,s)=>r(o,s);return new Proxy(i,{get:(o,s)=>s==="create"?r:(n.has(s)||n.set(s,Mc(s,void 0,e,t)),n.get(s))})}const X4=(e,t)=>t.isSVG??op(e)?new NN(t):new kN(t,{allowProjection:e!==w.Fragment});class Z4 extends ur{constructor(t){super(t),t.animationState||(t.animationState=LN(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Dl(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let J4=0;class eR extends ur{constructor(){super(...arguments),this.id=J4++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>{n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const tR={animation:{Feature:Z4},exit:{Feature:eR}};function ys(e){return{point:{x:e.pageX,y:e.pageY}}}const nR=e=>t=>Zf(t)&&e(t,ys(t));function No(e,t,n,r){return rs(e,t,nR(n),r)}const gw=({current:e})=>e?e.ownerDocument.defaultView:null,hg=(e,t)=>Math.abs(e-t);function rR(e,t){const n=hg(e.x,t.x),r=hg(e.y,t.y);return Math.sqrt(n**2+r**2)}const mg=new Set(["auto","scroll"]);class xw{constructor(t,n,{transformPagePoint:r,contextWindow:i=window,dragSnapToOrigin:o=!1,distanceThreshold:s=3,element:a}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=h=>{this.handleScroll(h.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const h=Lc(this.lastMoveEventInfo,this.history),b=this.startEvent!==null,m=rR(h.offset,{x:0,y:0})>=this.distanceThreshold;if(!b&&!m)return;const{point:y}=h,{timestamp:g}=Ne;this.history.push({...y,timestamp:g});const{onStart:x,onMove:v}=this.handlers;b||(x&&x(this.lastMoveEvent,h),this.startEvent=this.lastMoveEvent),v&&v(this.lastMoveEvent,h)},this.handlePointerMove=(h,b)=>{this.lastMoveEvent=h,this.lastMoveEventInfo=Dc(b,this.transformPagePoint),ae.update(this.updatePoint,!0)},this.handlePointerUp=(h,b)=>{this.end();const{onEnd:m,onSessionEnd:y,resumeAnimation:g}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&g&&g(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=Lc(h.type==="pointercancel"?this.lastMoveEventInfo:Dc(b,this.transformPagePoint),this.history);this.startEvent&&m&&m(h,x),y&&y(h,x)},!Zf(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.distanceThreshold=s,this.contextWindow=i||window;const l=ys(t),u=Dc(l,this.transformPagePoint),{point:d}=u,{timestamp:f}=Ne;this.history=[{...d,timestamp:f}];const{onSessionStart:p}=n;p&&p(t,Lc(u,this.history)),this.removeListeners=gs(No(this.contextWindow,"pointermove",this.handlePointerMove),No(this.contextWindow,"pointerup",this.handlePointerUp),No(this.contextWindow,"pointercancel",this.handlePointerUp)),a&&this.startScrollTracking(a)}startScrollTracking(t){let n=t.parentElement;for(;n;){const r=getComputedStyle(n);(mg.has(r.overflowX)||mg.has(r.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener("scroll",this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const n=this.scrollPositions.get(t);if(!n)return;const r=t===window,i=r?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},o={x:i.x-n.x,y:i.y-n.y};o.x===0&&o.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=o.x,this.lastMoveEventInfo.point.y+=o.y):this.history.length>0&&(this.history[0].x-=o.x,this.history[0].y-=o.y),this.scrollPositions.set(t,i),ae.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),ir(this.updatePoint)}}function Dc(e,t){return t?{point:t(e.point)}:e}function gg(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Lc({point:e},t){return{point:e,delta:gg(e,vw(t)),offset:gg(e,iR(t)),velocity:oR(t,.1)}}function iR(e){return e[0]}function vw(e){return e[e.length-1]}function oR(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=vw(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Xt(t)));)n--;if(!r)return{x:0,y:0};const o=xt(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function sR(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?fe(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?fe(n,e,r.max):Math.min(e,n)),e}function xg(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function aR(e,{top:t,left:n,bottom:r,right:i}){return{x:xg(e.x,n,i),y:xg(e.y,t,r)}}function vg(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function lR(e,t){return{x:vg(e.x,t.x),y:vg(e.y,t.y)}}function cR(e,t){let n=.5;const r=We(e),i=We(t);return i>r?n=Jo(t.min,t.max-r,e.min):r>i&&(n=Jo(e.min,e.max-i,t.min)),en(0,1,n)}function uR(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const pd=.35;function dR(e=pd){return e===!1?e=0:e===!0&&(e=pd),{x:yg(e,"left","right"),y:yg(e,"top","bottom")}}function yg(e,t,n){return{min:wg(e,t),max:wg(e,n)}}function wg(e,t){return typeof e=="number"?e:e[t]||0}const fR=new WeakMap;class pR{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Se(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:r}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const o=f=>{n?(this.stopAnimation(),this.snapToCursor(ys(f).point)):this.pauseAnimation()},s=(f,p)=>{this.stopAnimation();const{drag:h,dragPropagation:b,onDragStart:m}=this.getProps();if(h&&!b&&(this.openDragLock&&this.openDragLock(),this.openDragLock=eN(h),!this.openDragLock))return;this.latestPointerEvent=f,this.latestPanInfo=p,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ft(g=>{let x=this.getAxisMotionValue(g).get()||0;if(Zt.test(x)){const{projection:v}=this.visualElement;if(v&&v.layout){const S=v.layout.layoutBox[g];S&&(x=We(S)*(parseFloat(x)/100))}}this.originPoint[g]=x}),m&&ae.postRender(()=>m(f,p)),sd(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},a=(f,p)=>{this.latestPointerEvent=f,this.latestPanInfo=p;const{dragPropagation:h,dragDirectionLock:b,onDirectionLock:m,onDrag:y}=this.getProps();if(!h&&!this.openDragLock)return;const{offset:g}=p;if(b&&this.currentDirection===null){this.currentDirection=hR(g),this.currentDirection!==null&&m&&m(this.currentDirection);return}this.updateAxis("x",p.point,g),this.updateAxis("y",p.point,g),this.visualElement.render(),y&&y(f,p)},l=(f,p)=>{this.latestPointerEvent=f,this.latestPanInfo=p,this.stop(f,p),this.latestPointerEvent=null,this.latestPanInfo=null},u=()=>ft(f=>{var p;return this.getAnimationState(f)==="paused"&&((p=this.getAxisMotionValue(f).animation)==null?void 0:p.play())}),{dragSnapToOrigin:d}=this.getProps();this.panSession=new xw(t,{onSessionStart:o,onStart:s,onMove:a,onSessionEnd:l,resumeAnimation:u},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,distanceThreshold:r,contextWindow:gw(this.visualElement),element:this.visualElement.current})}stop(t,n){const r=t||this.latestPointerEvent,i=n||this.latestPanInfo,o=this.isDragging;if(this.cancel(),!o||!i||!r)return;const{velocity:s}=i;this.startAnimation(s);const{onDragEnd:a}=this.getProps();a&&ae.postRender(()=>a(r,i))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!qs(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=sR(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var o;const{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(o=this.visualElement.projection)==null?void 0:o.layout,i=this.constraints;t&&mo(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=aR(r.layoutBox,t):this.constraints=!1,this.elastic=dR(n),i!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&ft(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=uR(r.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!mo(t))return!1;const r=t.current;zi(r!==null,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.","drag-constraints-ref");const{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=xN(r,i.root,this.visualElement.getTransformPagePoint());let s=lR(i.layout.layoutBox,o);if(n){const a=n(hN(s));this.hasMutatedConstraints=!!a,a&&(s=_1(a))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=ft(d=>{if(!qs(d,n,this.currentDirection))return;let f=l&&l[d]||{};s&&(f={min:0,max:0});const p=i?200:1e6,h=i?40:1e7,b={type:"inertia",velocity:r?t[d]:0,bounceStiffness:p,bounceDamping:h,timeConstant:750,restDelta:1,restSpeed:10,...o,...f};return this.startAxisValueAnimation(d,b)});return Promise.all(u).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return sd(this.visualElement,t),r.start(Kf(t,r,0,n,this.visualElement,!1))}stopAnimation(){ft(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){ft(t=>{var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){ft(n=>{const{drag:r}=this.getProps();if(!qs(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:a}=i.layout.layoutBox[n],l=o.get()||0;o.set(t[n]-fe(s,a,.5)+l)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!mo(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};ft(s=>{const a=this.getAxisMotionValue(s);if(a&&this.constraints!==!1){const l=a.get();i[s]=cR({min:l,max:l},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),ft(s=>{if(!qs(s,t,null))return;const a=this.getAxisMotionValue(s),{min:l,max:u}=this.constraints[s];a.set(fe(l,u,i[s]))})}addListeners(){if(!this.visualElement.current)return;fR.set(this.visualElement,this);const t=this.visualElement.current,n=No(t,"pointerdown",l=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&!D1(l.target)&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();mo(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),ae.read(r);const s=rs(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(ft(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=l[d].translate,f.set(f.get()+l[d].translate))}),this.visualElement.render())});return()=>{s(),n(),o(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=pd,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:a}}}function qs(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function hR(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class mR extends ur{constructor(t){super(t),this.removeGroupControls=yt,this.removeListeners=yt,this.controls=new pR(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||yt}update(){const{dragControls:t}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};t!==n&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners()}}const bg=e=>(t,n)=>{e&&ae.postRender(()=>e(t,n))};class gR extends ur{constructor(){super(...arguments),this.removePointerDownListener=yt}onPointerDown(t){this.session=new xw(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:gw(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:bg(t),onStart:bg(n),onMove:r,onEnd:(o,s)=>{delete this.session,i&&ae.postRender(()=>i(o,s))}}}mount(){this.removePointerDownListener=No(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Oc=!1;class xR extends w.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),Oc&&o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),ga.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,{projection:s}=r;return s&&(s.isPresent=o,Oc=!0,i||t.layoutDependency!==n||n===void 0||t.isPresent!==o?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||ae.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Xf.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;Oc=!0,i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function yw(e){const[t,n]=aw(),r=w.useContext(Nf);return c.jsx(xR,{...e,layoutGroup:r,switchLayoutGroup:w.useContext(hw),isPresent:t,safeToRemove:n})}const vR={pan:{Feature:gR},drag:{Feature:mR,ProjectionNode:sw,MeasureLayout:yw}};function Sg(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,o=r[i];o&&ae.postRender(()=>o(t,ys(t)))}class yR extends ur{mount(){const{current:t}=this.node;t&&(this.unmount=tN(t,(n,r)=>(Sg(this.node,r,"Start"),i=>Sg(this.node,i,"End"))))}unmount(){}}class wR extends ur{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=gs(rs(this.node.current,"focus",()=>this.onFocus()),rs(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function kg(e,t,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),o=r[i];o&&ae.postRender(()=>o(t,ys(t)))}class bR extends ur{mount(){const{current:t}=this.node;t&&(this.unmount=iN(t,(n,r)=>(kg(this.node,r,"Start"),(i,{success:o})=>kg(this.node,i,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const hd=new WeakMap,Ic=new WeakMap,SR=e=>{const t=hd.get(e.target);t&&t(e)},kR=e=>{e.forEach(SR)};function CR({root:e,...t}){const n=e||document;Ic.has(n)||Ic.set(n,{});const r=Ic.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(kR,{root:e,...t})),r[i]}function ER(e,t,n){const r=CR(t);return hd.set(e,n),r.observe(e),()=>{hd.delete(e),r.unobserve(e)}}const jR={some:0,all:1};class TR extends ur{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:jR[i]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),p=u?d:f;p&&p(l)};return ER(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(PR(t,n))&&this.startObserver()}unmount(){}}function PR({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const NR={inView:{Feature:TR},tap:{Feature:bR},focus:{Feature:wR},hover:{Feature:yR}},RR={layout:{ProjectionNode:sw,MeasureLayout:yw}},AR={...tR,...NR,...vR,...RR},He=Q4(AR,X4);function MR({games:e,totalGames:t,onOpenDetails:n}){const[r,i]=w.useState(null),o=["Grand Theft Auto V Enhanced","Forza Horizon 6","ELDEN RING NIGHTREIGN","Red Dead Redemption 2","Cyberpunk 2077","The Sims™ 4","TEKKEN 8","Resident Evil 4","Fallout 4","LEGO® Batman™: Legacy of the Dark Knight","Devil May Cry 5","Assassin's Creed Valhalla","Far Cry 5","Batman™: Arkham Knight","Need for Speed™ Heat"],s=w.useMemo(()=>{const l=[];for(const u of o){const d=e.find(f=>f.name.toLowerCase().includes(u.toLowerCase())||u.toLowerCase().includes(f.name.toLowerCase()));d&&d.cover&&l.push(d)}return l.slice(0,15)},[e]),a=l=>l<12;return e.length===0?null:c.jsxs("section",{className:"games-preview-section section section-light",children:[c.jsx("div",{className:"container-main",children:c.jsxs("div",{className:"preview-container",children:[c.jsxs("div",{className:"preview-grid-wrapper",children:[c.jsx(He.div,{className:"preview-grid",initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.6,ease:"easeOut"},children:s.map((l,u)=>{const d=a(u);return c.jsx(He.div,{className:`preview-card ${r===u&&d?"hovered":""} ${d?"":"faded"}`,onClick:()=>d&&n(l),onMouseEnter:()=>d&&i(u),onMouseLeave:()=>d&&i(null),initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.4,delay:u*.06,ease:"easeOut"},style:{cursor:d?"pointer":"default"},children:c.jsxs(He.div,{className:"card-inner",animate:{scale:r===u&&d?1.08:1,y:r===u&&d?-8:0},transition:{duration:.3,ease:"easeOut"},children:[c.jsx("div",{className:"card-glow"}),c.jsx("div",{className:"card-shine"}),c.jsx("img",{src:l.cover,alt:l.name,loading:"lazy"}),c.jsx("div",{className:"preview-overlay"})]})},l.steam_appid)})}),c.jsx("div",{className:"grid-fade-overlay"})]}),c.jsxs(He.div,{className:"preview-content",initial:{opacity:0,x:40},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.6,delay:.2,ease:"easeOut"},children:[c.jsxs("div",{className:"content-badge",children:[c.jsx(oS,{size:16}),c.jsx("span",{children:"Arquivos Oficiais Steam"})]}),c.jsxs("h2",{className:"content-title",children:["Mais de ",c.jsx("span",{className:"highlight",children:"40.000"})," jogos",c.jsx("br",{}),"para jogar"]}),c.jsx("p",{className:"content-description",children:"Esqueça downloads lentos ou sites estranhos. Com a UISE XP, você transforma sua biblioteca. Acesse lançamentos e clássicos baixando direto da fonte oficial."}),c.jsxs("div",{className:"content-features",children:[c.jsxs("div",{className:"feature",children:[c.jsx(Tv,{size:18}),c.jsxs("div",{className:"feature-text",children:[c.jsx("span",{className:"feature-title",children:"Velocidade Máxima"}),c.jsx("span",{className:"feature-desc",children:"Baixe direto dos servidores da Steam usando o máximo da sua internet."})]})]}),c.jsxs("div",{className:"feature",children:[c.jsx(lS,{size:18}),c.jsxs("div",{className:"feature-text",children:[c.jsx("span",{className:"feature-title",children:"Segurança Total"}),c.jsx("span",{className:"feature-desc",children:"Nada de vírus ou arquivos suspeitos. Jogo original e limpo."})]})]}),c.jsxs("div",{className:"feature",children:[c.jsx(dS,{size:18}),c.jsxs("div",{className:"feature-text",children:[c.jsx("span",{className:"feature-title",children:"Acesso Vitalício"}),c.jsx("span",{className:"feature-desc",children:"Pagou uma vez, é seu pra sempre. Sem mensalidade."})]})]})]})]})]})}),c.jsx("style",{children:`
        .games-preview-section {
          padding: clamp(60px, 10vw, 100px) 0;
        }

        .preview-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        @media (max-width: 980px) {
          .preview-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        .preview-grid-wrapper {
          position: relative;
          width: 100%;
        }

        .preview-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          width: 100%;
        }
        @media (max-width: 480px) {
          .preview-grid {
            gap: 6px;
          }
        }

        .grid-fade-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: linear-gradient(to top, var(--bg, #030303) 0%, transparent 100%);
          pointer-events: none;
          z-index: 5;
        }

        .preview-card {
          position: relative;
        }

        .preview-card.faded {
          opacity: 0.5;
          pointer-events: none;
        }

        .card-inner {
          position: relative;
          width: 100%;
          aspect-ratio: 460 / 215;
          border-radius: 10px;
          overflow: hidden;
          background: #0a0a0a;
          border: 1px solid rgba(255,255,255,.08);
          transition: border-color .3s ease, box-shadow .3s ease;
        }

        .preview-card.hovered .card-inner {
          border-color: rgba(139, 92, 246,.6);
          box-shadow: 
            0 12px 40px rgba(0,0,0,.7),
            0 0 40px rgba(139, 92, 246,.2),
            0 0 80px rgba(139, 92, 246,.1);
        }

        .card-glow {
          position: absolute;
          inset: -100%;
          background: radial-gradient(circle at 50% 50%, rgba(139, 92, 246,.2), transparent 50%);
          opacity: 0;
          transition: opacity .4s ease;
          pointer-events: none;
          z-index: 2;
        }
        .preview-card.hovered .card-glow {
          opacity: 1;
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .card-shine {
          position: absolute;
          top: -100%;
          left: -100%;
          width: 60%;
          height: 200%;
          background: linear-gradient(
            115deg,
            transparent 20%,
            rgba(255,255,255,.08) 40%,
            rgba(255,255,255,.15) 50%,
            rgba(255,255,255,.08) 60%,
            transparent 80%
          );
          transform: rotate(25deg);
          pointer-events: none;
          z-index: 3;
          animation: shine-sweep 4s ease-in-out infinite;
          animation-delay: calc(var(--card-index, 0) * 0.15s);
        }

        .preview-card:nth-child(1) .card-shine { --card-index: 0; }
        .preview-card:nth-child(2) .card-shine { --card-index: 1; }
        .preview-card:nth-child(3) .card-shine { --card-index: 2; }
        .preview-card:nth-child(4) .card-shine { --card-index: 3; }
        .preview-card:nth-child(5) .card-shine { --card-index: 4; }
        .preview-card:nth-child(6) .card-shine { --card-index: 5; }
        .preview-card:nth-child(7) .card-shine { --card-index: 6; }
        .preview-card:nth-child(8) .card-shine { --card-index: 7; }
        .preview-card:nth-child(9) .card-shine { --card-index: 8; }
        .preview-card:nth-child(10) .card-shine { --card-index: 9; }
        .preview-card:nth-child(11) .card-shine { --card-index: 10; }
        .preview-card:nth-child(12) .card-shine { --card-index: 11; }

        @keyframes shine-sweep {
          0%, 100% {
            top: -100%;
            left: -100%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            top: 100%;
            left: 150%;
            opacity: 1;
          }
          60%, 100% {
            opacity: 0;
          }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }

        .card-inner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform .5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .preview-card.hovered .card-inner img {
          transform: scale(1.1);
        }

        .preview-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,.4) 0%, transparent 60%);
          pointer-events: none;
          transition: opacity .3s ease;
        }
        .preview-card.hovered .preview-overlay {
          opacity: .2;
        }

        .preview-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        @media (max-width: 980px) {
          .preview-content {
            text-align: center;
            align-items: center;
          }
        }
        @media (max-width: 640px) {
          .preview-content {
            text-align: center;
            align-items: center;
          }
          .content-features {
            align-items: center;
          }
          .feature {
            text-align: left;
          }
        }

        .content-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          background: rgba(139, 92, 246,.1);
          border: 1px solid rgba(139, 92, 246,.25);
          border-radius: 20px;
          color: var(--neon);
          font-weight: 700;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: .5px;
          width: fit-content;
        }

        .content-title {
          font-size: clamp(28px, 5vw, 42px);
          font-weight: 950;
          color: #fff;
          line-height: 1.1;
          letter-spacing: -1px;
          margin: 0;
        }
        .content-title .highlight {
          color: var(--neon);
          text-shadow: 0 0 30px rgba(139, 92, 246,.4);
        }

        .content-description {
          font-size: 16px;
          color: rgba(255,255,255,.80);
          line-height: 1.75;
          max-width: 480px;
          margin: 0;
          font-weight: 500;
        }

        .content-features {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        @media (max-width: 640px) {
          .content-features {
            gap: 14px;
          }
        }

        .feature {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: rgba(255,255,255,.85);
          font-size: 14px;
          font-weight: 600;
        }
        .feature svg {
          color: var(--neon);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .feature-text {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .feature-title {
          color: #fff;
          font-weight: 800;
          font-size: 15px;
        }
        .feature-desc {
          color: rgba(255,255,255,.75);
          font-size: 14px;
          font-weight: 500;
          line-height: 1.6;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          background: var(--neon);
          color: #000;
          font-weight: 900;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: .5px;
          border-radius: 12px;
          text-decoration: none;
          transition: all .25s ease;
          box-shadow: 0 0 25px rgba(139, 92, 246,.3);
          width: fit-content;
          margin-top: 8px;
        }
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 40px rgba(139, 92, 246,.5);
        }
      `})]})}const Qs=[{id:1,name:"Elden Ring",cover:"https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/library_600x900.jpg"},{id:2,name:"God of War",cover:"https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/library_600x900.jpg"},{id:3,name:"Hogwarts",cover:"https://cdn.cloudflare.steamstatic.com/steam/apps/990080/library_600x900.jpg"},{id:4,name:"Spider-Man",cover:"https://cdn.cloudflare.steamstatic.com/steam/apps/1817070/library_600x900.jpg"},{id:5,name:"Forza 5",cover:"https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/library_600x900.jpg"}];function DR(){const e=w.useRef(null),[t,n]=w.useState({rotateX:0,rotateY:0}),[r,i]=w.useState(!1),o=l=>{if(!e.current)return;const u=e.current.getBoundingClientRect(),d=u.left+u.width/2,f=u.top+u.height/2,p=l.clientX-d,h=l.clientY-f,b=p/(u.width/2)*12,m=-(h/(u.height/2))*12;n({rotateX:m,rotateY:b})},s=()=>{n({rotateX:0,rotateY:0}),i(!1)},a=()=>{i(!0)};return c.jsxs("section",{id:"como-funciona",className:"section section-light",children:[c.jsx("div",{className:"container-main",children:c.jsxs("div",{className:"app-section-grid",children:[c.jsxs("div",{className:"app-section-content",children:[c.jsxs("span",{className:"app-badge",children:[c.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})}),"Windows App"]}),c.jsxs("h2",{className:"app-title",children:["UISE XP App",c.jsx("br",{}),c.jsx("span",{className:"app-title-accent",children:"Baixe jogos em segundos"})]}),c.jsxs("p",{className:"app-desc",children:["O jeito mais fácil de acessar sua biblioteca.",c.jsx("br",{}),"Escolha o jogo, clique e baixe direto pela Steam."]}),c.jsxs("div",{className:"app-features",children:[c.jsxs("span",{className:"app-feature",children:[c.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})}),"Download Instantâneo"]}),c.jsxs("span",{className:"app-feature",children:[c.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})}),"100% Seguro"]}),c.jsxs("span",{className:"app-feature",children:[c.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"})}),"Acesso Vitalício"]})]}),c.jsxs("a",{href:"#planos",className:"app-cta",children:["Desbloquear Steam",c.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:c.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]}),c.jsx("div",{className:"app-mockup-container",children:c.jsxs("div",{ref:e,className:`app-mockup-wrapper ${r?"hovering":""}`,onMouseMove:o,onMouseLeave:s,onMouseEnter:a,style:{transform:`perspective(1000px) rotateX(${t.rotateX}deg) rotateY(${t.rotateY}deg)`},children:[c.jsx("div",{className:"mockup-glow"}),c.jsxs("div",{className:"mockup-device",children:[c.jsxs("div",{className:"mockup-titlebar",children:[c.jsxs("div",{className:"titlebar-dots",children:[c.jsx("span",{className:"dot-red"}),c.jsx("span",{className:"dot-yellow"}),c.jsx("span",{className:"dot-green"})]}),c.jsx("span",{className:"titlebar-text",children:"UISE XP"})]}),c.jsxs("div",{className:"mockup-app-content",children:[c.jsxs("div",{className:"mockup-sidebar",children:[c.jsxs("div",{className:"sidebar-logo",children:[c.jsx("span",{className:"logo-w",children:"UISE"}),c.jsx("span",{className:"logo-g",children:" XP"})]}),c.jsxs("div",{className:"sidebar-menu",children:[c.jsxs("div",{className:"menu-item active",children:[c.jsx("span",{className:"menu-dot"}),"Biblioteca"]}),c.jsx("div",{className:"menu-item",children:"Downloads"}),c.jsx("div",{className:"menu-item",children:"Configurações"})]}),c.jsxs("div",{className:"sidebar-status",children:[c.jsx("span",{className:"status-dot"}),"Online"]})]}),c.jsxs("div",{className:"mockup-main",children:[c.jsxs("div",{className:"featured-game",children:[c.jsx("img",{src:Qs[0].cover,alt:Qs[0].name}),c.jsxs("div",{className:"featured-overlay",children:[c.jsx("span",{className:"featured-tag",children:"Destaque"}),c.jsx("h4",{children:Qs[0].name}),c.jsx("span",{className:"featured-price",children:"Liberado"})]})]}),c.jsx("div",{className:"mockup-game-grid",children:Qs.slice(1,5).map(l=>c.jsx("div",{className:"mockup-game-item",children:c.jsx("img",{src:l.cover,alt:l.name})},l.id))})]})]})]}),c.jsx("div",{className:"mockup-reflection"})]})})]})}),c.jsx("style",{children:`
        .app-section-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
          align-items: center;
        }

        @media (max-width: 980px) {
          .app-section-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        .app-section-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        @media (max-width: 980px) {
          .app-section-content {
            align-items: center;
            text-align: center;
          }
        }

        .app-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          background: rgba(139, 92, 246,.08);
          border: 1px solid rgba(139, 92, 246,.25);
          border-radius: 999px;
          font-size: 12px;
          font-weight: 700;
          color: var(--neon);
          margin-bottom: 20px;
        }

        .app-title {
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 950;
          color: #fff;
          margin: 0 0 16px;
          letter-spacing: -1.5px;
          line-height: 1.1;
        }

        .app-title-accent {
          color: var(--neon);
        }

        .app-desc {
          font-size: 16px;
          color: var(--muted);
          line-height: 1.7;
          margin: 0 0 24px;
          max-width: 400px;
        }

        .app-features {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 28px;
        }

        .app-feature {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 10px;
          font-size: 13px;
          font-weight: 600;
          color: rgba(255,255,255,.85);
        }

        .app-feature svg {
          color: var(--neon);
        }

        .app-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 28px;
          background: var(--neon);
          color: #000;
          font-size: 14px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-radius: 14px;
          text-decoration: none;
          transition: 0.25s ease;
        }

        .app-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(139, 92, 246,.35);
        }

        /* 3D Mockup */
        .app-mockup-container {
          display: flex;
          justify-content: center;
          perspective: 1000px;
        }

        .app-mockup-wrapper {
          position: relative;
          transition: transform 0.1s ease-out;
          transform-style: preserve-3d;
          will-change: transform;
        }

        .app-mockup-wrapper.hovering {
          transition: transform 0.05s ease-out;
        }

        .mockup-glow {
          position: absolute;
          inset: -40px;
          background: radial-gradient(ellipse at center, rgba(139, 92, 246,.15), transparent 70%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .app-mockup-wrapper.hovering .mockup-glow {
          opacity: 1;
        }

        .mockup-device {
          width: 480px;
          background: linear-gradient(145deg, #1a1a1a, #0d0d0d);
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,.1);
          overflow: hidden;
          box-shadow: 
            0 50px 100px rgba(0,0,0,.6),
            0 0 0 1px rgba(255,255,255,.05) inset;
          transform-style: preserve-3d;
        }

        @media (max-width: 640px) {
          .mockup-device {
            width: 340px;
          }
        }

        .mockup-titlebar {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: rgba(0,0,0,.5);
          border-bottom: 1px solid rgba(255,255,255,.06);
        }

        .titlebar-dots {
          display: flex;
          gap: 6px;
        }

        .titlebar-dots span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .dot-red { background: #ff5f57; }
        .dot-yellow { background: #febc2e; }
        .dot-green { background: #28c840; }

        .titlebar-text {
          font-size: 12px;
          font-weight: 700;
          color: rgba(255,255,255,.5);
          letter-spacing: 0.5px;
        }

        .mockup-app-content {
          display: flex;
          height: 300px;
        }

        @media (max-width: 640px) {
          .mockup-app-content {
            height: 220px;
          }
        }

        .mockup-sidebar {
          width: 120px;
          background: rgba(0,0,0,.4);
          border-right: 1px solid rgba(255,255,255,.06);
          padding: 16px 12px;
          display: flex;
          flex-direction: column;
        }

        @media (max-width: 640px) {
          .mockup-sidebar {
            width: 90px;
            padding: 12px 8px;
          }
        }

        .sidebar-logo {
          font-size: 14px;
          font-weight: 900;
          margin-bottom: 20px;
        }

        .logo-w { color: #fff; }
        .logo-g { color: var(--neon); }

        .sidebar-menu {
          display: flex;
          flex-direction: column;
          gap: 6px;
          flex: 1;
        }

        .menu-item {
          font-size: 11px;
          color: rgba(255,255,255,.4);
          padding: 8px 10px;
          border-radius: 6px;
          cursor: default;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .menu-item.active {
          background: rgba(139, 92, 246,.1);
          color: var(--neon);
        }

        .menu-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--neon);
        }

        .sidebar-status {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          color: var(--neon);
        }

        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--neon);
          box-shadow: 0 0 8px var(--neon);
        }

        .mockup-main {
          flex: 1;
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .featured-game {
          position: relative;
          height: 140px;
          border-radius: 10px;
          overflow: hidden;
        }

        @media (max-width: 640px) {
          .featured-game {
            height: 100px;
          }
        }

        .featured-game img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
        }

        .featured-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,.9), transparent 70%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 12px;
        }

        .featured-tag {
          position: absolute;
          top: 10px;
          left: 10px;
          padding: 4px 8px;
          background: var(--neon);
          color: #000;
          font-size: 9px;
          font-weight: 800;
          border-radius: 4px;
          text-transform: uppercase;
        }

        .featured-overlay h4 {
          margin: 0;
          font-size: 14px;
          font-weight: 800;
          color: #fff;
        }

        .featured-price {
          font-size: 11px;
          color: var(--neon);
          font-weight: 700;
        }

        .mockup-game-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
          flex: 1;
        }

        .mockup-game-item {
          border-radius: 6px;
          overflow: hidden;
          background: rgba(255,255,255,.05);
        }

        .mockup-game-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .mockup-reflection {
          position: absolute;
          left: 10%;
          right: 10%;
          bottom: -60px;
          height: 60px;
          background: linear-gradient(to bottom, rgba(139, 92, 246,.08), transparent);
          filter: blur(20px);
          transform: scaleY(-0.3);
          pointer-events: none;
        }
      `})]})}function LR({games:e,totalGames:t,getGamesByCategory:n,searchGames:r,onOpenDetails:i}){const[o,s]=w.useState(null),[a,l]=w.useState(0),[u,d]=w.useState(!1),[f,p]=w.useState(""),[h,b]=w.useState(0);w.useMemo(()=>o?n(o):e,[o,e,n]);const m=["Grand Theft Auto V Enhanced","Forza Horizon 6","ELDEN RING NIGHTREIGN","Red Dead Redemption 2","Cyberpunk 2077","The Sims™ 4","TEKKEN 8","Resident Evil 4","Fallout 4","LEGO® Batman™: Legacy of the Dark Knight","Devil May Cry 5","Assassin's Creed Valhalla","Far Cry 5","Batman™: Arkham Knight","Need for Speed™ Heat"],y=w.useMemo(()=>{const A=[...e.filter(L=>m.some(O=>L.name.toLowerCase().includes(O.toLowerCase())||O.toLowerCase().includes(L.name.toLowerCase())))];for(let L=A.length-1;L>0;L--){const O=Math.floor(Math.random()*(L+1));[A[L],A[O]]=[A[O],A[L]]}return A},[e]),g=w.useMemo(()=>{if(y.length===0)return[];const T=[],A=a*3%y.length;for(let L=0;L<3;L++)T.push(y[(A+L)%y.length]);return T},[y,a]),x=Math.max(0,Math.floor(y.length/3)-1),v=()=>{l(T=>Math.max(0,T-1))},S=()=>{l(T=>Math.min(x,T+1))};w.useEffect(()=>{l(0)},[o]);const k=w.useMemo(()=>{const T=o?n(o):e;if(!f.trim())return T;const A=f.toLowerCase().trim();return T.filter(L=>L.name.toLowerCase().includes(A))},[f,o,e,n]),C=8,E=w.useMemo(()=>{const T=h*C;return k.slice(T,T+C)},[k,h]),j=(h+1)*C<k.length;return c.jsxs("section",{id:"catalogo",className:"catalog-section",style:{padding:"clamp(50px, 8vw, 80px) 0"},children:[c.jsx("div",{className:"catalog-header",children:c.jsxs("div",{children:[c.jsx("h2",{children:"Verificar Disponibilidade"}),c.jsx("p",{children:"Pesquise abaixo. Se o jogo está na Steam, é quase certo que nossa ferramenta consegue desbloqueá-lo para você."})]})}),c.jsxs("div",{className:"catalog-shell",children:[c.jsxs("aside",{className:"side",children:[c.jsxs("div",{className:"side-title",children:[c.jsx("span",{children:"Categorias"}),c.jsx("span",{children:"Filtro"})]}),c.jsxs("div",{className:"cats",children:[c.jsx("button",{onClick:()=>s(null),className:`cat ${o?"":"active"}`,children:"Todos"}),Vj.map(T=>c.jsx("button",{onClick:()=>s(T),className:`cat ${o===T?"active":""}`,children:T},T))]})]}),c.jsxs("div",{className:"catalog-main",children:[c.jsxs("div",{className:"showcase-carousel",children:[c.jsx("button",{className:"showcase-arrow showcase-arrow-left",onClick:v,disabled:a===0,children:c.jsx(Lu,{size:20})}),c.jsx("div",{className:"showcase-row",children:g.map((T,A)=>c.jsxs("div",{className:"game showcase-animate",style:{animationDelay:`${A*.1}s`},onClick:()=>i(T),children:[c.jsxs("div",{className:"game-img",children:[c.jsx("img",{src:T.cover,alt:T.name,loading:"lazy"}),c.jsx("div",{className:"game-grad"})]}),c.jsxs("div",{className:"game-info",children:[c.jsx("span",{className:"game-name",children:T.name}),c.jsxs("div",{className:"tag-row",children:[T.categories.slice(0,1).map(L=>c.jsx("span",{className:"tag",children:L},L)),c.jsx("span",{className:"tag ok",children:"Disponível"})]}),c.jsxs("div",{className:"game-cta",children:[c.jsx("span",{className:"tiny",children:"Steam"}),c.jsx("a",{href:"#como-funciona",className:"unlock-btn",onClick:L=>L.stopPropagation(),children:"Desbloquear"})]})]})]},`${T.steam_appid}-${a}-${A}`))}),c.jsx("button",{className:"showcase-arrow showcase-arrow-right",onClick:S,disabled:a>=x,children:c.jsx($a,{size:20})})]}),c.jsxs("div",{className:"catalog-more-row",children:[c.jsxs("button",{onClick:()=>d(!u),className:"btn catalog-more-btn",children:[c.jsx("span",{className:"catalog-more-icon",children:c.jsx(Rh,{size:16})}),u?"Fechar catálogo":"Ver catálogo completo"]}),c.jsx("span",{className:"catalog-more-hint",children:"Abra a biblioteca completa com busca e paginação."})]}),u&&c.jsxs("div",{className:"full-catalog show",children:[c.jsxs("div",{className:"full-top",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"full-title",children:"Catálogo completo"}),c.jsx("p",{className:"full-sub",children:"Pesquise pelo nome e clique para ver detalhes."})]}),c.jsxs("div",{className:"full-search",children:[c.jsx("span",{className:"full-search-icon",children:c.jsx(Rh,{size:16})}),c.jsx("input",{type:"text",placeholder:"Digite o nome do jogo...",value:f,onChange:T=>{p(T.target.value),b(0)}}),c.jsx("button",{className:"ghost-btn",onClick:()=>d(!1),children:"Fechar"})]})]}),c.jsx("div",{className:"full-grid",children:E.length>0?E.map(T=>c.jsxs("div",{className:"full-card",onClick:()=>i(T),children:[c.jsxs("div",{className:"full-card-img",children:[c.jsx("img",{src:T.cover,alt:T.name,loading:"lazy",onError:A=>{const L=A.target;L.style.opacity="0"}}),c.jsx("div",{className:"full-card-grad"})]}),c.jsx("div",{className:"full-card-info",children:c.jsx("span",{className:"full-card-name",children:T.name})})]},`${T.steam_appid}-${T.name}`)):c.jsxs("div",{className:"empty-state",children:[c.jsx("b",{children:"Nenhum resultado"}),c.jsx("span",{children:"Tente outra busca ou limpe o filtro."})]})}),c.jsx("div",{className:"full-bottom",children:j&&c.jsx("button",{className:"btn btn-small",onClick:()=>b(T=>T+1),children:"Carregar mais"})})]})]})]}),c.jsx("style",{children:`
        .catalog-section {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
          overflow: visible;
        }
        @media (max-width: 640px) {
          .catalog-section {
            width: calc(100% - 32px);
          }
        }
        .catalog-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 18px;
          margin-bottom: 18px;
          flex-wrap: wrap;
        }
        @media (max-width: 640px) {
          .catalog-header {
            flex-direction: column;
            gap: 14px;
          }
        }
        .catalog-header h2 {
          margin: 0;
          font-size: 28px;
          font-weight: 950;
          letter-spacing: -1px;
          color: #fff;
          text-transform: uppercase;
        }
        @media (max-width: 640px) {
          .catalog-header {
            text-align: center;
            align-items: center;
          }
          .catalog-header h2 {
            font-size: 22px;
          }
        }
        .catalog-header p {
          margin: 8px 0 0;
          color: rgba(255,255,255,.80);
          max-width: 56ch;
          line-height: 1.7;
          font-size: 15px;
          font-weight: 500;
        }
        @media (max-width: 640px) {
          .catalog-header p {
            font-size: 14px;
            line-height: 1.6;
            text-align: center;
          }
        }
        .catalog-actions { display: flex; gap: 10px; flex-wrap: wrap; justify-content: flex-end; }
        @media (max-width: 640px) {
          .catalog-actions {
            width: 100%;
            justify-content: flex-start;
          }
        }
        
        .catalog-shell {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 14px;
          align-items: start;
        }
        @media (max-width: 980px) {
          .catalog-shell { 
            grid-template-columns: 1fr; 
            gap: 16px;
          }
        }
        
        .side {
          position: sticky;
          top: 86px;
          padding: 14px;
          border-radius: var(--r2);
          border: 1px solid rgba(255,255,255,.10);
          background: rgba(255,255,255,.04);
          box-shadow: var(--shadowSoft);
          z-index: 10;
        }
        @media (max-width: 980px) {
          .side {
            position: relative;
            top: auto;
            z-index: 1;
          }
        }
        @media (max-width: 640px) {
          .side {
            padding: 12px;
          }
        }
        .side-title {
          font-weight: 950;
          letter-spacing: .6px;
          text-transform: uppercase;
          font-size: 12px;
          color: var(--muted2);
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }
        .cats {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 8px;
        }
        @media (max-width: 640px) {
          .cats {
            gap: 6px;
          }
        }
        .cat {
          cursor: pointer;
          user-select: none;
          padding: 10px 12px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,.10);
          background: rgba(0,0,0,.22);
          font-weight: 950;
          font-size: 12px;
          letter-spacing: .4px;
          color: #d7d7d7;
          transition: .2s ease;
          text-transform: uppercase;
          white-space: nowrap;
        }
        @media (max-width: 640px) {
          .cat {
            padding: 8px 10px;
            font-size: 11px;
            border-radius: 12px;
          }
        }
        .cat:hover {
          transform: translateY(-1px);
          border-color: rgba(139, 92, 246,.25);
        }
        .cat.active {
          background: rgba(139, 92, 246,.90);
          color: #000;
          border-color: rgba(139, 92, 246,.55);
        }

        .showcase-carousel {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .showcase-arrow {
          flex-shrink: 0;
          width: 42px;
          height: 42px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,.15);
          background: rgba(255,255,255,.05);
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all .2s ease;
        }
        .showcase-arrow:hover:not(:disabled) {
          background: rgba(139, 92, 246,.15);
          border-color: rgba(139, 92, 246,.4);
          color: var(--neon);
        }
        .showcase-arrow:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        @media (max-width: 640px) {
          .showcase-arrow {
            display: none;
          }
        }

        .showcase-row {
          flex: 1;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 14px;
        }
        .showcase-row .game {
          flex: 1 1 calc(33.333% - 10px);
          min-width: 200px;
          max-width: 100%;
        }
        @media (max-width: 980px) {
          .showcase-row .game {
            flex: 1 1 calc(50% - 7px);
            min-width: 180px;
          }
        }
        @media (max-width: 640px) {
          .showcase-row {
            flex-direction: column;
            gap: 16px;
          }
          .showcase-row .game {
            flex: 1 1 100%;
            min-width: 100%;
            width: 100%;
          }
        }
        
        .game {
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,.10);
          background: rgba(255,255,255,.04);
          box-shadow: var(--shadowSoft);
          overflow: hidden;
          cursor: pointer;
          min-width: 0;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        @media (max-width: 640px) {
          .game {
            border-radius: 14px;
          }
        }
        
        .game.showcase-animate {
          animation: showcaseEnter 0.6s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
        
        @keyframes showcaseEnter {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .game:hover {
          transform: translateY(-4px);
          border-color: rgba(139, 92, 246,.22);
        }
        .game-img {
          aspect-ratio: 16/9;
          background: #0a0a0a;
          position: relative;
          overflow: hidden;
        }
        .game-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: saturate(1.08) contrast(1.08);
          opacity: 1 !important;
        }
        .game:hover .game-img img {
          filter: saturate(1.12) contrast(1.10) brightness(1.05);
        }
        .game-grad {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,.86), rgba(0,0,0,.06));
          pointer-events: none;
        }
        .game-info {
          padding: 12px 12px 14px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          min-width: 0;
        }
        @media (max-width: 640px) {
          .game-info {
            padding: 10px;
            gap: 8px;
          }
        }
        .game-name {
          font-weight: 950;
          font-size: 12px;
          letter-spacing: .4px;
          color: #fff;
          text-transform: uppercase;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        @media (max-width: 640px) {
          .game-name {
            font-size: 11px;
          }
        }
        .tag-row { 
          display: flex; 
          gap: 6px; 
          flex-wrap: wrap;
          max-width: 100%;
          overflow: hidden;
        }
        @media (max-width: 640px) {
          .tag-row { 
            gap: 5px; 
          }
        }
        .tag {
          font-size: 10px;
          font-weight: 950;
          letter-spacing: .4px;
          text-transform: uppercase;
          padding: 6px 8px;
          border-radius: 999px;
          background: rgba(0,0,0,.30);
          border: 1px solid rgba(255,255,255,.10);
          color: #fff;
          text-shadow: 0 10px 30px rgba(0,0,0,.95);
          white-space: nowrap;
          max-width: 120px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        @media (max-width: 640px) {
          .tag {
            padding: 5px 7px;
            font-size: 9px;
            max-width: 100px;
          }
        }
        .tag.ok { border-color: rgba(139, 92, 246,.30); }
        .game-cta {
          display: flex;
          gap: 10px;
          align-items: center;
          justify-content: space-between;
          margin-top: 4px;
        }
        @media (max-width: 640px) {
          .game-cta { 
            gap: 8px;
            margin-top: 2px; 
          }
        }
        .tiny {
          font-size: 11px;
          color: var(--muted2);
          letter-spacing: .4px;
        }
        @media (max-width: 640px) {
          .tiny { font-size: 10px; }
        }
        .ghost-btn {
          padding: 10px 12px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,.12);
          background: rgba(0,0,0,.22);
          color: #fff;
          font-weight: 950;
          text-transform: uppercase;
          font-size: 11px;
          cursor: pointer;
          transition: .2s ease;
          white-space: nowrap;
        }
        .ghost-btn:hover {
          transform: translateY(-1px);
          border-color: rgba(255,255,255,.22);
        }
        .unlock-btn {
          padding: 10px 14px;
          border-radius: 12px;
          background: linear-gradient(180deg, rgba(139, 92, 246,.95), rgba(109, 40, 217,.85));
          color: #000;
          font-weight: 950;
          text-transform: uppercase;
          font-size: 11px;
          cursor: pointer;
          transition: .2s ease;
          white-space: nowrap;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
        }
        .unlock-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(139, 92, 246,.25);
        }
        .btn-primary-small {
          padding: 10px 16px;
          border-radius: 12px;
          background: linear-gradient(180deg, rgba(139, 92, 246,.95), rgba(109, 40, 217,.85));
          color: #000;
          font-weight: 950;
          text-transform: uppercase;
          font-size: 12px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          transition: .2s ease;
        }
        .btn-primary-small:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(139, 92, 246,.25);
        }

        .catalog-more-row {
          margin-top: 14px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 14px;
          flex-wrap: wrap;
        }
        .catalog-more-btn {
          padding: 12px 16px;
          border-radius: 14px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-weight: 950;
        }
        .catalog-more-icon {
          width: 28px;
          height: 28px;
          border-radius: 10px;
          background: rgba(139, 92, 246,.12);
          border: 1px solid rgba(139, 92, 246,.22);
          color: var(--neon);
          display: grid;
          place-items: center;
          flex: 0 0 auto;
          font-weight: 950;
        }
        .catalog-more-hint {
          color: var(--muted2);
          font-size: 12px;
          line-height: 1.4;
        }

        .full-catalog {
          margin-top: 16px;
          border-radius: var(--r2);
          border: 1px solid rgba(255,255,255,.10);
          background: rgba(255,255,255,.04);
          box-shadow: var(--shadowSoft);
          padding: 16px;
          overflow: hidden;
          animation: floatIn .45s ease both;
        }
        .full-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 14px;
        }
        .full-title {
          font-weight: 950;
          letter-spacing: -.8px;
          text-transform: uppercase;
          color: #fff;
          font-size: 18px;
          margin: 0 0 2px;
        }
        .full-sub {
          color: var(--muted2);
          font-size: 12px;
          line-height: 1.4;
          margin: 0;
        }
        .full-search {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,.10);
          background: rgba(0,0,0,.24);
          flex: 1 1 420px;
          min-width: 280px;
        }
        .full-search-icon {
          width: 28px;
          height: 28px;
          border-radius: 10px;
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.08);
          display: grid;
          place-items: center;
          color: #cfcfcf;
          flex: 0 0 auto;
        }
        .full-search input {
          width: 100%;
          border: 0;
          outline: 0;
          background: transparent;
          color: #fff;
          font-weight: 800;
          letter-spacing: .2px;
          font-size: 13px;
          min-width: 0;
        }
        .full-search input::placeholder {
          color: rgba(255,255,255,.42);
        }

        .full-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }
        @media (max-width: 980px) {
          .full-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 520px) {
          .full-grid { grid-template-columns: 1fr; }
        }

        .full-card {
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,.10);
          background: #0a0a0a;
          overflow: hidden;
          cursor: pointer;
          transition: transform .25s ease, border-color .25s ease;
          min-width: 0;
          -webkit-tap-highlight-color: transparent;
          -webkit-touch-callout: none;
          user-select: none;
          outline: none;
        }
        .full-card:hover {
          transform: translateY(-3px);
          border-color: rgba(139, 92, 246,.22);
        }
        .full-card:active {
          transform: scale(0.98);
          transition: transform 0.1s ease;
        }
        .full-card:focus {
          outline: none;
        }
        .full-card-img {
          aspect-ratio: 16 / 9;
          background: #0a0a0a;
          position: relative;
          overflow: hidden;
        }
        .full-card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: saturate(1.08) contrast(1.06);
          -webkit-user-drag: none;
          pointer-events: none;
          background: #0a0a0a;
        }
        .full-card:hover .full-card-img img {
          filter: saturate(1.12) contrast(1.10) brightness(1.05);
        }
        .full-card-grad {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,.88), rgba(0,0,0,.06));
          pointer-events: none;
        }
        .full-card-info {
          padding: 10px 10px 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          min-width: 0;
        }
        .full-card-name {
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: .4px;
          font-size: 11px;
          color: #fff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          flex: 1 1 auto;
          min-width: 0;
        }
        .full-card-btn {
          padding: 9px 10px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,.12);
          background: rgba(0,0,0,.22);
          color: #fff;
          font-weight: 950;
          text-transform: uppercase;
          font-size: 10px;
          cursor: pointer;
          white-space: nowrap;
        }
        .full-bottom {
          margin-top: 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }
        .empty-state {
          grid-column: 1 / -1;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,.10);
          background: rgba(0,0,0,.18);
          padding: 18px;
        }
        .empty-state b {
          display: block;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: .4px;
        }
        .empty-state span {
          display: block;
          margin-top: 6px;
          color: var(--muted2);
          font-size: 12px;
        }

        .btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px 18px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,.10);
          background: rgba(255,255,255,.05);
          color: #fff;
          font-weight: 950;
          letter-spacing: .5px;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          transition: .22s ease;
          overflow: hidden;
          white-space: nowrap;
        }
        .btn:hover {
          transform: translateY(-2px);
          border-color: rgba(255,255,255,.18);
          box-shadow: var(--shadowSoft);
        }
        .btn-small {
          padding: 10px 14px;
          border-radius: 12px;
          font-size: 12px;
        }
      `})]})}function OR(){return c.jsxs("section",{id:"sobre",className:"section container-main",children:[c.jsxs("div",{className:"about-container",children:[c.jsxs("div",{className:"about-bg",children:[c.jsx("img",{src:"https://images.igdb.com/igdb/image/upload/t_1080p/co1rgi.jpg",alt:"Hollow Knight background"}),c.jsx("div",{className:"about-bg-overlay"})]}),c.jsxs("div",{className:"about-content",children:[c.jsx("h2",{className:"about-title",children:"POR QUE É MELHOR QUE PIRATARIA?"}),c.jsxs("p",{className:"about-text",children:["Jogos piratas trazem vírus, travam o computador e não conectam na internet. A UISE XP entrega o ",c.jsx("strong",{children:"oposto disso"}),"."]}),c.jsxs("p",{className:"about-text",children:["Nós fornecemos acesso a uma ",c.jsx("strong",{children:"licença oficial compartilhada"}),". Você abre a sua Steam e baixa o jogo original. Ele atualiza sozinho, não trava e você joga com qualidade máxima. É o jeito inteligente e barato de jogar."]}),c.jsx("div",{className:"about-divider"}),c.jsx("span",{className:"about-tagline",children:"Jogue sem medo e sem vírus."})]})]}),c.jsx("style",{children:`
        .about-container {
          position: relative;
          border-radius: var(--r2);
          overflow: hidden;
          min-height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .about-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        
        .about-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          filter: saturate(0.8) brightness(0.5);
        }
        
        .about-bg-overlay {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse at center, rgba(5,5,5,.65), rgba(5,5,5,.92)),
            linear-gradient(to top, rgba(5,5,5,.95), transparent 60%);
        }
        
        .about-content {
          position: relative;
          z-index: 1;
          text-align: center;
          padding: 60px 30px;
          max-width: 700px;
        }
        
        .about-title {
          font-size: clamp(24px, 5vw, 36px);
          font-weight: 950;
          letter-spacing: -1px;
          color: #fff;
          text-transform: uppercase;
          text-shadow: 0 10px 60px rgba(0,0,0,.8);
          margin: 0 0 24px;
        }
        
        .about-text {
          font-size: 16px;
          line-height: 1.9;
          color: rgba(255,255,255,.85);
          margin: 0;
          text-shadow: 0 4px 20px rgba(0,0,0,.6);
        }
        @media (max-width: 640px) {
          .about-text {
            font-size: 15px;
            line-height: 1.75;
          }
        }
        
        .about-text strong {
          color: #fff;
          font-weight: 800;
        }
        
        .about-divider {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--neon), transparent);
          margin: 28px auto;
          border-radius: 2px;
        }
        
        .about-tagline {
          font-size: 14px;
          font-weight: 800;
          color: var(--neon);
          text-transform: uppercase;
          letter-spacing: 3px;
          text-shadow: 0 0 20px rgba(139, 92, 246,.4);
        }
      `})]})}const Cg=[{name:"João",avatar:Dy,text:"Sinceramente achei que fosse mentira pelo preço baixo. Paguei para ver e me surpreendi. Em 10 minutos eu já estava baixando o jogo pela minha Steam com velocidade total. É surreal."},{name:"Isa",avatar:Ly,text:"Eu não entendo nada de computador e tinha medo de ser difícil de instalar. Mas o sistema faz tudo sozinho. É só clicar em Ativar e o jogo aparece na biblioteca pronto para jogar."},{name:"Matheus",avatar:Oy,text:"O melhor para mim é baixar na velocidade máxima. Nada daqueles sites lentos cheios de vírus. Aqui vem direto do servidor oficial e jogo online com meus amigos sem travar."},{name:"Breno",avatar:Iy,text:"Só neste mês eu economizei uns 500 reais. Eu ia comprar dois lançamentos caros mas peguei o plano vitalício aqui e já estou jogando os dois. Recomendo demais."},{name:"Lynguinho",avatar:null,text:"Simplesmente uma obra prima, comprei e deu tudo certinho, e o suporte atende muito rápido além de ser bom, super recomendo."},{name:"Jeniffer",avatar:"assets/jeniffer-testimonial.jpg",text:"Obrigado irmão slc. Tem tudo mesmo. Brabo demais!"}],Xs=[{id:1,src:"videos/system-demo.mp4",poster:""}];function Eg({src:e}){const t=w.useRef(null),[n,r]=w.useState(!0),[i,o]=w.useState(!0),[s,a]=w.useState(!1),l=()=>{t.current&&(n?t.current.pause():t.current.play(),r(!n))},u=d=>{d.stopPropagation(),t.current&&(t.current.muted=!i,o(!i))};return c.jsxs("div",{className:"video-testimonial-card",onClick:l,children:[c.jsx("video",{ref:t,src:e,muted:!0,loop:!0,autoPlay:!0,playsInline:!0,preload:"auto",className:"video-testimonial-video",onLoadedData:()=>a(!0),onPlay:()=>r(!0),onPause:()=>r(!1)}),!s&&c.jsx("div",{className:"video-loading-placeholder",children:c.jsx(Nh,{size:32,fill:"white",style:{opacity:.5}})}),c.jsx("div",{className:`video-overlay ${n?"playing":""}`,children:!n&&c.jsx("div",{className:"play-button",children:c.jsx(Nh,{size:32,fill:"white"})})}),c.jsx("button",{className:"mute-button",onClick:u,children:i?c.jsx(pS,{size:18}):c.jsx(fS,{size:18})})]})}function IR(){const[e,t]=w.useState(0),[n,r]=w.useState(0),[i,o]=w.useState(!1),s=()=>typeof window<"u"?window.innerWidth<640?1:window.innerWidth<1024?2:3:3,[a,l]=w.useState(s());w.useState(()=>{if(typeof window<"u"){o(window.innerWidth<640);const y=()=>{o(window.innerWidth<640),l(s())};return window.addEventListener("resize",y),()=>window.removeEventListener("resize",y)}});const u=Math.max(0,Cg.length-a),d=Xs.length-1,f=()=>{t(y=>Math.max(0,y-1))},p=()=>{t(y=>Math.min(u,y+1))},h=()=>{r(y=>Math.max(0,y-1))},b=()=>{r(y=>Math.min(d,y+1))},m=Cg.slice(e,e+a);return c.jsxs("section",{id:"testemunhos",className:"section section-light",style:{padding:"80px 0"},children:[c.jsxs("div",{className:"container-main",children:[c.jsxs(He.div,{className:"testimonials-header",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[c.jsx("h2",{className:"testimonials-title",children:"QUEM BAIXOU, APROVOU"}),c.jsx("p",{className:"testimonials-subtitle",children:"Veja o que a nossa comunidade diz sobre a economia e a segurança que a UISE XP proporciona."})]}),c.jsxs("div",{className:"testimonials-carousel",children:[c.jsx("button",{className:"carousel-arrow carousel-arrow-left",onClick:f,disabled:e===0,children:c.jsx(Lu,{size:24})}),c.jsx("div",{className:"testimonials-track",children:c.jsx(nl,{mode:"wait",children:c.jsx(He.div,{className:"testimonials-grid",initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3},children:m.map((y,g)=>c.jsxs("div",{className:"testimonial-card",children:[c.jsx("div",{className:"testimonial-stars",children:[...Array(5)].map((x,v)=>c.jsx(cS,{size:16,fill:"var(--neon)",stroke:"var(--neon)"},v))}),c.jsxs("p",{className:"testimonial-text",children:['"',y.text,'"']}),c.jsxs("div",{className:"testimonial-author",children:[y.avatar?c.jsx("img",{src:y.avatar,alt:`Foto de ${y.name}`,className:"testimonial-avatar-img"}):c.jsx("div",{className:"testimonial-avatar-placeholder",children:y.name.charAt(0).toUpperCase()}),c.jsx("span",{className:"testimonial-name",children:y.name})]})]},e+g))},e)})}),c.jsx("button",{className:"carousel-arrow carousel-arrow-right",onClick:p,disabled:e>=u,children:c.jsx($a,{size:24})})]}),c.jsx("div",{className:"carousel-dots",children:Array.from({length:u+1}).map((y,g)=>c.jsx("button",{className:`carousel-dot ${g===e?"active":""}`,onClick:()=>t(g)},g))}),c.jsxs(He.div,{className:"video-testimonials-section",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.2},children:[c.jsx("h3",{className:"video-testimonials-title",children:"DEMONSTRAÇÃO DO SISTEMA"}),c.jsx("div",{className:"video-testimonials-grid video-grid-desktop",children:Xs.map(y=>c.jsx(Eg,{src:y.src},y.id))}),c.jsxs("div",{className:"video-carousel-mobile",children:[c.jsxs("div",{className:"video-carousel-container",children:[c.jsx("button",{className:"carousel-arrow video-carousel-arrow-left",onClick:h,disabled:n===0,children:c.jsx(Lu,{size:20})}),c.jsx("div",{className:"video-carousel-track",children:c.jsx(nl,{mode:"wait",children:c.jsx(He.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3},children:c.jsx(Eg,{src:Xs[n].src})},n)})}),c.jsx("button",{className:"carousel-arrow video-carousel-arrow-right",onClick:b,disabled:n>=d,children:c.jsx($a,{size:20})})]}),c.jsx("div",{className:"carousel-dots video-carousel-dots",children:Xs.map((y,g)=>c.jsx("button",{className:`carousel-dot ${g===n?"active":""}`,onClick:()=>r(g)},g))})]})]})]}),c.jsx("style",{children:`
        .testimonials-header {
          text-align: center;
          margin-bottom: 40px;
        }
        
        .testimonials-title {
          font-size: clamp(24px, 4vw, 32px);
          font-weight: 950;
          color: #fff;
          margin: 0 0 12px;
          letter-spacing: -1px;
        }
        
        .testimonials-subtitle {
          color: rgba(255,255,255,.75);
          font-size: 15px;
          line-height: 1.7;
          max-width: 600px;
          margin: 0 auto;
        }

        .testimonials-carousel {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .carousel-arrow {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,.15);
          background: rgba(255,255,255,.05);
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all .2s ease;
        }
        .carousel-arrow:hover:not(:disabled) {
          background: rgba(139, 92, 246,.15);
          border-color: rgba(139, 92, 246,.4);
          color: var(--neon);
        }
        .carousel-arrow:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        @media (max-width: 640px) {
          .carousel-arrow {
            width: 40px;
            height: 40px;
            border-radius: 12px;
          }
        }

        .testimonials-track {
          flex: 1;
          overflow: hidden;
        }
        
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        
        @media (max-width: 1024px) {
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 640px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }
        
        .testimonial-card {
          padding: 24px;
          border-radius: var(--r2);
          border: 1px solid rgba(255,255,255,.10);
          background: rgba(255,255,255,.04);
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .testimonial-stars {
          display: flex;
          gap: 4px;
        }
        
        .testimonial-text {
          color: rgba(255,255,255,.85);
          font-size: 14px;
          line-height: 1.75;
          margin: 0;
          flex: 1;
        }
        
        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 16px;
          border-top: 1px solid rgba(255,255,255,.08);
        }
        
        .testimonial-avatar-img {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          object-fit: cover;
          border: 2px solid rgba(139, 92, 246,.3);
        }
        
        .testimonial-name {
          font-weight: 800;
          font-size: 14px;
          color: #fff;
          letter-spacing: .3px;
        }

        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 24px;
        }
        
        .carousel-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: none;
          background: rgba(255,255,255,.2);
          cursor: pointer;
          transition: all .2s ease;
          padding: 0;
        }
        .carousel-dot:hover {
          background: rgba(255,255,255,.4);
        }
        .carousel-dot.active {
          background: var(--neon);
          width: 24px;
          border-radius: 4px;
        }

        .testimonial-avatar-placeholder {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: linear-gradient(135deg, rgba(139, 92, 246,.3), rgba(139, 92, 246,.1));
          border: 2px solid rgba(139, 92, 246,.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 16px;
          color: var(--neon);
        }

        .video-testimonials-section {
          margin-top: 48px;
          text-align: center;
        }

        .video-testimonials-title {
          font-size: clamp(18px, 3vw, 24px);
          font-weight: 900;
          color: #fff;
          margin-bottom: 24px;
          letter-spacing: -0.5px;
        }

        .video-testimonials-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: 16px;
          max-width: 920px;
          margin: 0 auto;
        }
        
        .video-grid-desktop {
          display: grid;
        }
        
        .video-carousel-mobile {
          display: none;
        }

        @media (max-width: 1024px) {
          .video-testimonials-grid {
            max-width: 820px;
          }
        }

        @media (max-width: 640px) {
          .video-grid-desktop {
            display: grid;
          }
          
          .video-carousel-mobile {
            display: none;
          }
          
          .video-carousel-container {
            display: flex;
            align-items: center;
            gap: 12px;
            justify-content: center;
          }
          
          .video-carousel-track {
            width: 200px;
            flex-shrink: 0;
          }
          
          .video-carousel-arrow-left,
          .video-carousel-arrow-right {
            width: 36px;
            height: 36px;
            flex-shrink: 0;
          }
          
          .video-carousel-dots {
            margin-top: 16px;
          }
        }

        .video-testimonial-card {
          position: relative;
          border-radius: var(--r2);
          overflow: hidden;
          background: #111;
          aspect-ratio: 16/9;
          cursor: pointer;
          border: 1px solid rgba(255,255,255,.10);
        }

        .video-testimonial-video {
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: #111;
        }
        
        .video-loading-placeholder {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #1a1a1a, #0a0a0a);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .video-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,.4);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all .3s ease;
        }

        .video-overlay.playing {
          background: transparent;
          opacity: 0;
        }

        .video-testimonial-card:hover .video-overlay.playing {
          opacity: 1;
          background: rgba(0,0,0,.2);
        }

        .play-button {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(139, 92, 246,.9);
          display: flex;
          align-items: center;
          justify-content: center;
          padding-left: 4px;
          transition: transform .2s ease;
        }

        .video-testimonial-card:hover .play-button {
          transform: scale(1.1);
        }

        .mute-button {
          position: absolute;
          bottom: 12px;
          right: 12px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(0,0,0,.6);
          border: 1px solid rgba(255,255,255,.2);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all .2s ease;
          z-index: 10;
        }

        .mute-button:hover {
          background: rgba(139, 92, 246,.3);
          border-color: rgba(139, 92, 246,.5);
        }
      `})]})}function zR(){const e=new URLSearchParams(window.location.search),t=new URLSearchParams;["utm_source","utm_medium","utm_campaign","utm_term","utm_content","utm_id","fbclid","gclid","ttclid","sck","src"].forEach(r=>{const i=e.get(r);i&&t.append(r,i)});try{const r=localStorage.getItem("__utmify_session_data");if(r){const i=JSON.parse(r);i.utm_source&&!t.has("utm_source")&&t.append("utm_source",i.utm_source),i.utm_medium&&!t.has("utm_medium")&&t.append("utm_medium",i.utm_medium),i.utm_campaign&&!t.has("utm_campaign")&&t.append("utm_campaign",i.utm_campaign)}}catch{}return t.toString()}const FR={basico:"https://ggcheckout.app/checkout/v5/V4SacEqREq9TgjsBmWdL",avancado:"https://ggcheckout.app/checkout/v5/rZ6rwfWknJ0aZ4rsFgoa",vitalicio:"https://ggcheckout.app/checkout/v5/7SLutdkdbL6BR7MujQf8"},_R=[{id:"basico",name:"PLANO BÁSICO",from:"R$ 29,97",price:"19",cents:",97",tagline:"Pacote com 1000 Jogos",features:["1000 jogos inclusos","Download via Steam","Modo história liberado","Acesso na hora"],cta:"ESCOLHER BÁSICO",tone:"blue",value:19.97},{id:"avancado",name:"PLANO AVANÇADO",badge:"MAIS VENDIDO",badgeTone:"red",from:"R$ 97,00",price:"49",cents:",97",payment:"no Pix · ou 10x R$ 6,25 no cartão",tagline:"Pacote com 20.000 Jogos",features:["20.000 jogos inclusos","Jogos novos e lançamentos","Online nos compatíveis","Suporte prioritário no WhatsApp","Suporte prioritário no Discord"],cta:"QUERO ESSE",tone:"red",value:49.97},{id:"vitalicio",name:"PLANO VITALÍCIO",badge:"MELHOR CUSTO-BENEFÍCIO",badgeTone:"green",from:"R$ 199,97",price:"99",cents:",97",payment:"no Pix · ou 10x R$ 12,50 no cartão",tagline:"Liberar a Lista Toda",features:["40.000 jogos liberados","Recebe jogos novos pra sempre","Multiplayer funcionando","Pede qualquer jogo que a gente adiciona","Suporte prioritário no WhatsApp","Suporte prioritário no Discord","Seu pra sempre"],cta:"DESBLOQUEAR TUDO",tone:"green",value:99.97}];function VR(e){typeof window<"u"&&window.fbq&&window.fbq("track","InitiateCheckout",{content_name:e.name,value:e.value,currency:"BRL"});const t=FR[e.id],n=zR(),r=t.includes("?")?"&":"?",i=n?`${t}${r}${n}`:t;window.open(i,"_blank","noopener,noreferrer")}function BR(){return c.jsxs("section",{id:"planos",className:"pricing-section",children:[c.jsxs("div",{className:"container-main",children:[c.jsxs(He.div,{className:"pricing-header",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[c.jsxs("span",{className:"pricing-label",children:[c.jsx(Tv,{size:14}),"Investimento"]}),c.jsx("h2",{children:"Escolha seu plano"}),c.jsx("p",{children:"Acesso imediato após o pagamento. Escolha o que melhor se encaixa para você."})]}),c.jsx("div",{className:"pricing-grid",children:_R.map((e,t)=>c.jsxs(He.div,{className:`plan-card plan-${e.tone} ${e.id==="avancado"?"plan-featured":""}`,initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:t*.08},children:[e.badge&&c.jsx("span",{className:`plan-badge plan-badge-${e.badgeTone}`,children:e.badge}),c.jsx("h3",{className:"plan-name",children:e.name}),c.jsxs("span",{className:"plan-from",children:["de ",c.jsx("s",{children:e.from})," por apenas"]}),c.jsxs("div",{className:`plan-price plan-price-${e.tone}`,children:[c.jsx("span",{className:"plan-currency",children:"R$"}),c.jsx("span",{className:"plan-value",children:e.price}),c.jsx("span",{className:"plan-cents",children:e.cents})]}),e.payment?c.jsx("span",{className:"plan-payment",children:e.payment}):c.jsx("span",{className:"plan-tax",children:"TAXA ÚNICA"}),c.jsx("p",{className:"plan-tagline",children:e.tagline}),c.jsx("div",{className:"plan-divider"}),c.jsx("ul",{className:"plan-features",children:e.features.map((n,r)=>c.jsxs("li",{className:`plan-feat plan-feat-${e.tone}`,children:[c.jsx("span",{className:"plan-check",children:"✓"}),c.jsx("span",{children:n})]},r))}),c.jsxs("button",{className:`plan-cta plan-cta-${e.tone}`,onClick:()=>VR(e),children:[e.cta," →"]})]},e.id))})]}),c.jsx("style",{children:`
        .pricing-section {
          padding: 100px 0 80px;
          overflow: hidden;
        }

        .pricing-header {
          text-align: center;
          margin-bottom: 56px;
        }
        .pricing-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(139, 92, 246,.08);
          border: 1px solid rgba(139, 92, 246,.25);
          border-radius: 999px;
          font-size: 12px;
          font-weight: 800;
          color: var(--neon);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 18px;
        }
        .pricing-header h2 {
          font-size: clamp(28px, 5vw, 44px);
          font-weight: 950;
          color: #fff;
          letter-spacing: -1.5px;
          line-height: 1.1;
          margin: 0 0 12px;
        }
        .pricing-header p {
          color: rgba(255,255,255,.7);
          font-size: 15px;
          font-weight: 500;
          margin: 0;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1200px;
          margin: 0 auto;
          align-items: stretch;
        }

        .plan-card {
          position: relative;
          border-radius: 24px;
          border: 1.5px solid rgba(255,255,255,.08);
          background: linear-gradient(180deg, rgba(15,15,15,.97), rgba(5,5,5,1));
          padding: 36px 28px 28px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: transform .25s ease, border-color .25s ease;
        }
        .plan-card:hover { transform: translateY(-4px); }
        .plan-featured {
          border-color: rgba(255,255,255,.12);
        }
        .plan-green {
          border-color: rgba(57,255,20,.35);
          box-shadow: 0 0 60px rgba(57,255,20,.08), inset 0 1px 0 rgba(57,255,20,.12);
        }

        .plan-badge {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          padding: 6px 16px;
          border-radius: 999px;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .plan-badge-red {
          background: #ff3838;
          color: #fff;
          box-shadow: 0 6px 20px rgba(255,56,56,.4);
        }
        .plan-badge-green {
          background: #39ff14;
          color: #000;
          box-shadow: 0 6px 20px rgba(57,255,20,.4);
        }

        .plan-name {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 22px;
          font-weight: 900;
          color: #fff;
          letter-spacing: 1px;
          margin: 0 0 14px;
          text-transform: uppercase;
        }
        .plan-from {
          font-size: 13px;
          color: rgba(255,255,255,.5);
          font-weight: 500;
          margin-bottom: 6px;
        }
        .plan-from s { text-decoration: line-through; }

        .plan-price {
          display: flex;
          align-items: flex-start;
          line-height: 1;
          margin-top: 2px;
        }
        .plan-currency {
          font-size: 22px;
          font-weight: 800;
          margin-top: 14px;
          margin-right: 4px;
        }
        .plan-value {
          font-size: 72px;
          font-weight: 900;
          letter-spacing: -3px;
        }
        .plan-cents {
          font-size: 26px;
          font-weight: 800;
          margin-top: 16px;
        }
        .plan-price-blue { color: #4f7cff; filter: drop-shadow(0 0 30px rgba(79,124,255,.25)); }
        .plan-price-red  { color: #ff4d4d; filter: drop-shadow(0 0 30px rgba(255,77,77,.25)); }
        .plan-price-green{ color: #39ff14; filter: drop-shadow(0 0 30px rgba(57,255,20,.3)); }

        .plan-tax {
          font-size: 11px;
          font-weight: 800;
          color: rgba(255,255,255,.7);
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-top: 4px;
          margin-bottom: 18px;
        }
        .plan-payment {
          font-size: 13px;
          font-weight: 800;
          color: rgba(255,255,255,.82);
          margin-top: 6px;
          margin-bottom: 18px;
          line-height: 1.35;
        }

        .plan-tagline {
          font-size: 14px;
          color: rgba(255,255,255,.8);
          font-weight: 600;
          margin: 0 0 4px;
        }

        .plan-divider {
          width: 80%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.12), transparent);
          margin: 20px auto;
        }

        .plan-features {
          list-style: none;
          padding: 0;
          margin: 0 0 28px;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
        }
        .plan-feat {
          display: flex;
          align-items: center;
          gap: 10px;
          justify-content: center;
          font-size: 14px;
          font-weight: 500;
          color: rgba(255,255,255,.85);
        }
        .plan-check {
          font-weight: 900;
          font-size: 14px;
        }
        .plan-feat-blue .plan-check  { color: #4f7cff; }
        .plan-feat-red .plan-check   { color: #ff4d4d; }
        .plan-feat-green .plan-check { color: #39ff14; }

        .plan-cta {
          width: 100%;
          padding: 16px;
          border: none;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 1px;
          text-transform: uppercase;
          cursor: pointer;
          transition: transform .2s ease, box-shadow .2s ease, filter .2s ease;
          margin-top: auto;
        }
        .plan-cta:hover { transform: translateY(-2px); filter: brightness(1.08); }
        .plan-cta-blue {
          background: linear-gradient(135deg, #4f7cff, #3a5fd6);
          color: #fff;
          box-shadow: 0 8px 24px rgba(79,124,255,.35);
        }
        .plan-cta-red {
          background: linear-gradient(135deg, #ff4d4d, #d93636);
          color: #fff;
          box-shadow: 0 8px 24px rgba(255,77,77,.35);
        }
        .plan-cta-green {
          background: linear-gradient(135deg, #39ff14, #2ad900);
          color: #000;
          box-shadow: 0 8px 24px rgba(57,255,20,.35);
        }

        @media (max-width: 960px) {
          .pricing-grid {
            grid-template-columns: 1fr;
            max-width: 420px;
            gap: 32px;
          }
        }
        @media (max-width: 640px) {
          .pricing-section { padding: 56px 0 48px; }
          .pricing-header { margin-bottom: 36px; }
          .plan-card { padding: 32px 22px 24px; }
          .plan-value { font-size: 60px; }
          .plan-cents { font-size: 22px; }
        }
      `})]})}const $R=w.forwardRef(function(t,n){return c.jsxs("section",{ref:n,className:"section-tight container-main",children:[c.jsx("div",{className:"guarantee-wrapper",children:c.jsxs("div",{className:"guarantee-card",children:[c.jsxs("div",{className:"guarantee-badge",children:[c.jsx("span",{className:"badge-icon",children:"✓"}),"Garantia Total"]}),c.jsxs("div",{className:"guarantee-content",children:[c.jsx("h3",{children:"Reembolso em até 7 dias"}),c.jsxs("p",{children:["Compra sem risco. Se por qualquer motivo você não curtir a experiência, você pode solicitar reembolso em até ",c.jsx("strong",{children:"7 dias"})," após a compra. Transparente, simples e direto — padrão ",c.jsx("strong",{children:"UISE XP"}),"."]})]}),c.jsxs("div",{className:"guarantee-features",children:[c.jsxs("div",{className:"g-feature",children:[c.jsx("span",{className:"check",children:"✓"}),"Pagamento 100% seguro"]}),c.jsxs("div",{className:"g-feature",children:[c.jsx("span",{className:"check",children:"✓"}),"Ativação imediata via Steam"]}),c.jsxs("div",{className:"g-feature",children:[c.jsx("span",{className:"check",children:"✓"}),"Suporte dedicado"]}),c.jsxs("div",{className:"g-feature",children:[c.jsx("span",{className:"check",children:"✓"}),"Sem taxas ocultas"]})]}),c.jsx("div",{className:"guarantee-glow"})]})}),c.jsx("style",{children:`
        .guarantee-wrapper {
          max-width: 700px;
          margin: 0 auto;
        }
        
        .guarantee-card {
          position: relative;
          padding: 32px;
          border-radius: var(--r2);
          border: 1px solid rgba(139, 92, 246,.25);
          background: linear-gradient(135deg, rgba(139, 92, 246,.05) 0%, rgba(0,0,0,.3) 100%);
          box-shadow: 0 20px 60px rgba(139, 92, 246,.08);
          overflow: hidden;
          text-align: center;
        }
        
        .guarantee-glow {
          position: absolute;
          top: -50%;
          left: 50%;
          transform: translateX(-50%);
          width: 400px;
          height: 200px;
          background: radial-gradient(ellipse, rgba(139, 92, 246,.12), transparent 70%);
          pointer-events: none;
        }
        
        .guarantee-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(139, 92, 246,.15);
          border: 1px solid rgba(139, 92, 246,.35);
          color: var(--neon);
          font-weight: 900;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
        }
        
        .badge-icon {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--neon);
          color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 900;
        }
        
        .guarantee-content {
          position: relative;
          z-index: 1;
          margin-bottom: 24px;
        }
        
        .guarantee-content h3 {
          font-size: 26px;
          font-weight: 950;
          color: #fff;
          margin: 0 0 12px;
          letter-spacing: -1px;
          text-transform: uppercase;
        }
        
        .guarantee-content p {
          font-size: 15px;
          color: var(--muted);
          line-height: 1.7;
          margin: 0;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .guarantee-content strong {
          color: var(--neon);
          font-weight: 800;
        }
        
        .guarantee-features {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          position: relative;
          z-index: 1;
        }
        
        .g-feature {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 12px;
          background: rgba(0,0,0,.3);
          border: 1px solid rgba(255,255,255,.08);
          font-size: 12px;
          font-weight: 800;
          color: #d9d9d9;
        }
        
        .g-feature .check {
          color: var(--neon);
          font-weight: 900;
        }
      `})]})}),UR=w.forwardRef(function(t,n){const[r,i]=w.useState(null),o=[{q:"Isso é pirataria?",a:"Não. Você usa os arquivos originais da Steam e não precisa instalar programas suspeitos que estragam o computador."},{q:"Funciona online mesmo?",a:"Sim. A maioria dos jogos de história você joga sozinho, mas jogos como Futebol, Tiro e Luta funcionam online para você jogar contra outras pessoas."},{q:"Preciso formatar o PC?",a:"De jeito nenhum. Nosso aplicativo é leve e se o seu computador roda o jogo, ele roda nosso sistema sem problemas."},{q:"E se eu não souber instalar?",a:"Temos uma equipe de suporte real no Discord e WhatsApp. Se você tiver qualquer dificuldade, a gente entra e te ajuda a instalar."}];return c.jsxs("section",{ref:n,id:"faq",className:"section container-main",children:[c.jsx("h2",{style:{fontSize:"28px",fontWeight:950,color:"#fff",textTransform:"uppercase",margin:"0 0 8px"},children:"FAQ"}),c.jsx("p",{style:{color:"var(--muted)",marginBottom:"18px"},children:"Respostas rápidas para as dúvidas mais comuns."}),c.jsx("div",{className:"faq-box",children:o.map((s,a)=>c.jsxs("div",{className:`qa ${r===a?"open":""}`,children:[c.jsxs("button",{className:"q",onClick:()=>i(r===a?null:a),children:[s.q,c.jsx("span",{className:"chev",children:"+"})]}),c.jsx("div",{className:"a",children:s.a})]},a))}),c.jsx("style",{children:".faq-box{border-radius:var(--r2);border:1px solid rgba(255,255,255,.10);background:rgba(255,255,255,.04);box-shadow:var(--shadowSoft);overflow:hidden}.qa{border-top:1px solid rgba(255,255,255,.06)}.qa:first-child{border-top:0}.q{width:100%;background:transparent;border:0;padding:16px 18px;color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:10px;font-weight:950;letter-spacing:.4px;text-transform:uppercase;text-align:left}.chev{width:26px;height:26px;border-radius:8px;border:1px solid rgba(255,255,255,.10);display:grid;place-items:center;color:var(--neon);transition:.25s ease;background:rgba(0,0,0,.20)}.a{max-height:0;overflow:hidden;transition:max-height .35s ease;padding:0 18px;color:var(--muted);line-height:1.65;font-size:14px}.qa.open .a{max-height:240px;padding-bottom:16px}.qa.open .chev{transform:rotate(45deg)}"})]})}),WR=w.forwardRef(function(t,n){return c.jsx("footer",{ref:n,className:"py-11 border-t",style:{borderColor:"rgba(255,255,255,.06)",color:"#606060",fontSize:"12px"},children:c.jsx("div",{className:"container-main text-center",children:c.jsx("p",{children:"© 2024 UISE XP Software. Todos os direitos reservados."})})})});function HR({game:e,onClose:t}){return c.jsxs("div",{className:"backdrop show",onClick:t,children:[c.jsxs("div",{className:"modal",onClick:n=>n.stopPropagation(),children:[c.jsxs("div",{className:"modal-top",children:[c.jsx("img",{src:`https://steamcdn-a.akamaihd.net/steam/apps/${e.steam_appid}/library_hero.jpg`,alt:e.name,onError:n=>{n.currentTarget.src=e.cover}}),c.jsx("button",{className:"modal-close",onClick:t,children:"✕"})]}),c.jsxs("div",{className:"modal-body",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"modal-title",children:e.name}),c.jsx("p",{className:"modal-desc",children:"Este jogo está disponível na nossa biblioteca oficial. Ao ativar, seu computador irá baixar os arquivos originais diretamente dos servidores da Steam. Isso garante que você tenha a versão mais atualizada, livre de vírus e com desempenho máximo. É o jogo oficial pronto para rodar."})]}),c.jsxs("div",{className:"modal-side",children:[c.jsxs("div",{className:"row",children:[c.jsx("span",{children:"Origem"}),c.jsx("b",{children:"Servidor Oficial Steam"})]}),c.jsxs("div",{className:"row",children:[c.jsx("span",{children:"Segurança"}),c.jsx("b",{style:{color:"var(--neon)"},children:"100% Verificado"})]}),c.jsx("div",{className:"modal-btns",children:c.jsx("a",{href:"#como-funciona",className:"btn btn-primary-full",onClick:t,children:"Desbloquear Jogo"})})]})]})]}),c.jsx("style",{children:'.backdrop{position:fixed;inset:0;background:rgba(0,0,0,.68);backdrop-filter:blur(10px);display:grid;place-items:center;z-index:2000;padding:18px}.modal{width:min(980px,100%);border-radius:26px;border:1px solid rgba(255,255,255,.12);background:rgba(10,10,10,.92);box-shadow:var(--shadow);overflow:hidden;animation:floatIn .25s ease both}.modal-top{position:relative;height:clamp(240px,32vw,360px);background:#000;overflow:hidden}.modal-top img{width:100%;height:100%;object-fit:cover;transform:scale(1.03);filter:saturate(1.18) contrast(1.14)}.modal-top::after{content:"";position:absolute;inset:0;background:radial-gradient(900px 380px at 18% 28%,rgba(139, 92, 246,.10),transparent 58%),linear-gradient(to top,rgba(0,0,0,.82),rgba(0,0,0,.10))}.modal-close{position:absolute;top:14px;right:14px;width:42px;height:42px;border-radius:14px;border:1px solid rgba(255,255,255,.14);background:rgba(0,0,0,.35);color:#fff;cursor:pointer;display:grid;place-items:center;transition:.2s ease;z-index:5}.modal-close:hover{border-color:rgba(255,255,255,.22)}.modal-body{padding:24px;display:grid;grid-template-columns:1.2fr .8fr;gap:20px;align-items:start}@media(max-width:980px){.modal-body{grid-template-columns:1fr}}.modal-title{font-weight:950;font-size:22px;letter-spacing:-.8px;text-transform:uppercase;color:#fff;margin:0 0 10px}.modal-desc{color:var(--muted);line-height:1.75;font-size:14px;margin:0}.modal-side{border-radius:18px;border:1px solid rgba(255,255,255,.10);background:rgba(255,255,255,.04);padding:16px}.row{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:11px 0;border-bottom:1px solid rgba(255,255,255,.06);color:#d9d9d9;font-weight:850;font-size:13px}.row:last-of-type{border-bottom:0}.row span{color:var(--muted2);font-weight:800}.modal-btns{display:flex;gap:10px;margin-top:12px}.btn-primary-full{width:100%;background:linear-gradient(180deg,rgba(139, 92, 246,.95),rgba(109, 40, 217,.85));color:#000;border-color:rgba(139, 92, 246,.55);padding:12px 18px;border-radius:14px;font-weight:950;text-transform:uppercase;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;transition:.22s ease}.btn-primary-full:hover{box-shadow:0 18px 60px rgba(139, 92, 246,.15)}'})]})}function GR({isVisible:e}){const[t,n]=w.useState({minutes:14,seconds:59});w.useEffect(()=>{const i=setInterval(()=>{n(o=>o.seconds>0?{...o,seconds:o.seconds-1}:o.minutes>0?{minutes:o.minutes-1,seconds:59}:{minutes:14,seconds:59})},1e3);return()=>clearInterval(i)},[]);const r=i=>i.toString().padStart(2,"0");return c.jsx(nl,{children:e&&c.jsxs(He.div,{className:"urgency-bar",initial:{y:-100,opacity:0},animate:{y:0,opacity:1},exit:{y:-100,opacity:0},transition:{type:"spring",damping:25,stiffness:300},children:[c.jsx("div",{className:"urgency-glow"}),c.jsxs("div",{className:"urgency-content",children:[c.jsxs("div",{className:"urgency-left",children:[c.jsxs("div",{className:"urgency-badge",children:[c.jsx(uS,{size:14}),c.jsx("span",{children:"OFERTA LIMITADA"})]}),c.jsx("span",{className:"urgency-text",children:"Preço promocional termina em:"})]}),c.jsxs("div",{className:"urgency-right",children:[c.jsx("div",{className:"urgency-timer",children:c.jsxs("span",{children:[r(t.minutes),":",r(t.seconds)]})}),c.jsxs("a",{href:"#planos",className:"urgency-cta",children:["Aproveitar",c.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:c.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]})]}),c.jsx("style",{children:`
            .urgency-bar {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              z-index: 1001;
              background: linear-gradient(90deg, 
                rgba(3, 3, 5, 0.98) 0%,
                rgba(10, 8, 14, 0.98) 50%,
                rgba(3, 3, 5, 0.98) 100%
              );
              border-bottom: 1px solid rgba(139, 92, 246, 0.25);
              padding: 12px 20px;
              backdrop-filter: blur(12px);
              overflow: hidden;
            }
            
            .urgency-glow {
              position: absolute;
              top: 0;
              left: 50%;
              transform: translateX(-50%);
              width: 600px;
              height: 100%;
              background: radial-gradient(ellipse at center, rgba(139, 92, 246, 0.08) 0%, transparent 70%);
              pointer-events: none;
            }
            
            .urgency-content {
              max-width: 1200px;
              margin: 0 auto;
              display: flex;
              align-items: center;
              justify-content: space-between;
              gap: 20px;
              position: relative;
              z-index: 1;
            }
            
            .urgency-left {
              display: flex;
              align-items: center;
              gap: 14px;
            }
            
            .urgency-badge {
              display: flex;
              align-items: center;
              gap: 8px;
              padding: 6px 12px;
              border-radius: 8px;
              background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(139, 92, 246, 0.05));
              border: 1px solid rgba(139, 92, 246, 0.35);
              color: var(--neon);
              font-size: 11px;
              font-weight: 900;
              letter-spacing: 0.5px;
              box-shadow: 0 0 20px rgba(139, 92, 246, 0.15);
            }
            
            .urgency-text {
              font-size: 13px;
              font-weight: 600;
              color: rgba(255, 255, 255, 0.75);
            }
            
            .urgency-right {
              display: flex;
              align-items: center;
              gap: 12px;
            }
            
            .urgency-timer {
              display: flex;
              align-items: center;
              gap: 6px;
              background: rgba(0, 0, 0, 0.5);
              padding: 8px 16px;
              border-radius: 8px;
              border: 1px solid rgba(255, 255, 255, 0.1);
            }
            
            .urgency-timer span {
              font-size: 16px;
              font-weight: 900;
              color: #fff;
              font-family: monospace;
              letter-spacing: 2px;
            }
            
            .urgency-cta {
              display: inline-flex;
              align-items: center;
              gap: 8px;
              padding: 10px 20px;
              border-radius: 10px;
              background: var(--neon);
              color: #000;
              font-weight: 900;
              font-size: 12px;
              text-transform: uppercase;
              text-decoration: none;
              letter-spacing: 0.5px;
              transition: all 0.2s ease;
              box-shadow: 0 0 25px rgba(139, 92, 246, 0.3);
            }
            
            .urgency-cta:hover {
              box-shadow: 0 0 35px rgba(139, 92, 246, 0.5);
              transform: translateY(-1px);
            }
            
            @media (max-width: 768px) {
              .urgency-bar {
                padding: 10px 16px;
              }
              
              .urgency-content {
                gap: 12px;
                justify-content: center;
              }
              
              .urgency-left {
                gap: 10px;
              }
              
              .urgency-text {
                display: none;
              }
              
              .urgency-badge {
                padding: 6px 10px;
                gap: 6px;
              }
              
              .urgency-badge span {
                display: inline;
                font-size: 9px;
              }
              
              .urgency-badge svg {
                width: 12px;
                height: 12px;
              }
              
              .urgency-timer {
                padding: 6px 12px;
              }
              
              .urgency-timer span {
                font-size: 14px;
                letter-spacing: 1.5px;
              }
              
              .urgency-cta {
                padding: 8px 14px;
                font-size: 10px;
                border-radius: 8px;
                gap: 6px;
              }
              
              .urgency-cta svg {
                width: 12px;
                height: 12px;
              }
            }
          `})]})})}const ww="assets/uise-xp-assistente.png?v=1",zc=[{label:"Qual o preço do acesso?",response:"O acesso vitalício custa apenas R$49,97 por um pagamento único! Você terá acesso a mais de 6.500 jogos para sempre, sem mensalidades."},{label:"Como funciona o desbloqueio?",response:"Após a compra, você recebe acesso imediato à sua conta Steam desbloqueada. Basta fazer login no seu PC e todos os jogos estarão disponíveis para baixar e jogar!"},{label:"Funciona em qualquer PC?",response:"Sim! Funciona em qualquer computador Windows. Basta ter a Steam instalada e fazer login com a conta desbloqueada."},{label:"É seguro? Tem garantia?",response:"100% seguro! Oferecemos garantia de 7 dias. Se não gostar, devolvemos seu dinheiro sem perguntas. Mais de 50 mil clientes satisfeitos!"},{label:"Recebo na hora?",response:"Sim! O acesso é liberado automaticamente após a confirmação do pagamento. Em poucos minutos você já estará jogando!"}];function KR(){const[e,t]=w.useState(!1),[n,r]=w.useState([{id:1,type:"bot",content:"Olá! Sou o assistente da UISE XP. Tem alguma dúvida sobre o pacote de jogos? Estou aqui para ajudar!"},{id:2,type:"bot",content:"Escolha uma opção ou digite sua dúvida:",options:zc}]),[i,o]=w.useState(""),[s,a]=w.useState(!0),l=w.useRef(null),u=()=>{var m;(m=l.current)==null||m.scrollIntoView({behavior:"smooth"})};w.useEffect(()=>{u()},[n]);const d=m=>{if(m.isCTA&&m.ctaLink){window.location.href=m.ctaLink;return}const y={id:Date.now(),type:"user",content:m.label},g={id:Date.now()+1,type:"bot",content:m.response,options:[{label:"Quero desbloquear agora!",isCTA:!0,ctaLink:"#planos",response:""},{label:"Tenho outra dúvida",response:"Claro! Escolha uma das opções abaixo:"}]};r(x=>[...x,y,g])},f=()=>{const m={id:Date.now(),type:"bot",content:"Sem problemas! Escolha uma das opções abaixo:",options:zc};r(y=>[...y,m])},p=()=>{if(!i.trim())return;const m={id:Date.now(),type:"user",content:i},y={id:Date.now()+1,type:"bot",content:"Obrigado pela sua mensagem! Para uma resposta mais rápida, escolha uma das opções abaixo ou acesse nosso suporte no WhatsApp.",options:[{label:"Falar no WhatsApp",isCTA:!0,ctaLink:"https://wa.me/5511999999999",response:""},...zc.slice(0,3)]};r(g=>[...g,m,y]),o("")},h=m=>{m.key==="Enter"&&p()},b=()=>{t(!e),a(!1)};return c.jsxs("div",{className:"fixed bottom-5 right-5 z-[1000]",style:{fontFamily:"'DM Sans', sans-serif"},children:[c.jsx(nl,{children:e&&c.jsxs(He.div,{initial:{opacity:0,scale:.9,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.9,y:20},transition:{type:"spring",damping:25,stiffness:300},className:"absolute bottom-20 right-0 w-[350px] h-[500px] flex flex-col overflow-hidden",style:{background:"rgba(8, 8, 8, 0.98)",border:"1px solid rgba(139, 92, 246, 0.25)",borderRadius:"20px",boxShadow:"0 15px 50px rgba(0, 0, 0, 0.9), 0 0 30px rgba(139, 92, 246, 0.08)"},children:[c.jsxs("div",{className:"flex items-center justify-between px-4 py-3.5",style:{background:"linear-gradient(180deg, rgba(20, 20, 20, 1) 0%, rgba(12, 12, 12, 1) 100%)",borderBottom:"1px solid rgba(139, 92, 246, 0.2)"},children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("div",{className:"w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center",style:{background:"#000",border:"1px solid rgba(139, 92, 246, 0.3)",boxShadow:"0 0 15px rgba(139, 92, 246, 0.15)"},children:c.jsx("img",{src:ww,alt:"UISE XP",className:"w-full h-full object-cover"})}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-white font-bold text-[15px] m-0 tracking-tight",children:"Assistente UISE XP"}),c.jsxs("div",{className:"flex items-center gap-1.5 mt-0.5",children:[c.jsx("span",{className:"w-2 h-2 rounded-full",style:{background:"#8B5CF6",boxShadow:"0 0 8px rgba(139, 92, 246, 0.6)"}}),c.jsx("p",{className:"text-[11px] m-0 font-semibold uppercase tracking-wider",style:{color:"#8B5CF6"},children:"Online"})]})]})]}),c.jsx("button",{onClick:b,className:"w-8 h-8 rounded-lg flex items-center justify-center bg-transparent cursor-pointer transition-all duration-200",style:{border:"1px solid rgba(255, 255, 255, 0.1)",color:"#666"},onMouseOver:m=>{m.currentTarget.style.color="#fff",m.currentTarget.style.borderColor="rgba(255, 255, 255, 0.2)",m.currentTarget.style.background="rgba(255, 255, 255, 0.05)"},onMouseOut:m=>{m.currentTarget.style.color="#666",m.currentTarget.style.borderColor="rgba(255, 255, 255, 0.1)",m.currentTarget.style.background="transparent"},children:c.jsx(Ou,{size:16})})]}),c.jsxs("div",{className:"flex-1 p-4 overflow-y-auto flex flex-col gap-3",style:{background:"linear-gradient(180deg, #050505 0%, #000 100%)",scrollbarWidth:"thin",scrollbarColor:"#222 #000"},children:[n.map(m=>c.jsxs("div",{children:[c.jsx(He.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:`max-w-[85%] px-4 py-3 text-sm leading-relaxed ${m.type==="user"?"self-end ml-auto":""}`,style:{background:m.type==="user"?"linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)":"linear-gradient(135deg, rgba(30, 30, 30, 0.95) 0%, rgba(20, 20, 20, 0.95) 100%)",color:m.type==="user"?"#000":"#f0f0f0",borderRadius:m.type==="user"?"16px 16px 4px 16px":"16px 16px 16px 4px",borderLeft:m.type==="bot"?"3px solid #8B5CF6":"none",fontWeight:m.type==="user"?600:400,boxShadow:m.type==="user"?"0 4px 15px rgba(139, 92, 246, 0.3)":"0 4px 15px rgba(0, 0, 0, 0.4)"},children:m.content}),m.options&&c.jsx("div",{className:"mt-3 flex flex-col gap-2",children:m.options.map((y,g)=>c.jsxs("button",{onClick:()=>y.label.includes("outra dúvida")?f():d(y),className:"chat-option-btn w-full flex items-center justify-between px-4 py-3 text-[13px] cursor-pointer transition-all duration-200",style:{background:y.isCTA?"linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)":"linear-gradient(135deg, rgba(25, 25, 25, 0.9) 0%, rgba(18, 18, 18, 0.9) 100%)",border:y.isCTA?"none":"1px solid rgba(139, 92, 246, 0.2)",color:y.isCTA?"#000":"#e5e5e5",borderRadius:"12px",fontWeight:y.isCTA?800:500,textTransform:y.isCTA?"uppercase":"none",letterSpacing:y.isCTA?"0.5px":"normal",boxShadow:y.isCTA?"0 4px 15px rgba(139, 92, 246, 0.25)":"0 2px 10px rgba(0, 0, 0, 0.3)"},onMouseOver:x=>{y.isCTA?(x.currentTarget.style.boxShadow="0 6px 20px rgba(139, 92, 246, 0.4)",x.currentTarget.style.transform="translateY(-1px)"):(x.currentTarget.style.borderColor="rgba(139, 92, 246, 0.5)",x.currentTarget.style.background="linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)",x.currentTarget.style.color="#8B5CF6")},onMouseOut:x=>{y.isCTA?(x.currentTarget.style.boxShadow="0 4px 15px rgba(139, 92, 246, 0.25)",x.currentTarget.style.transform="translateY(0)"):(x.currentTarget.style.borderColor="rgba(139, 92, 246, 0.2)",x.currentTarget.style.background="linear-gradient(135deg, rgba(25, 25, 25, 0.9) 0%, rgba(18, 18, 18, 0.9) 100%)",x.currentTarget.style.color="#e5e5e5")},children:[c.jsx("span",{children:y.label}),!y.isCTA&&c.jsx($a,{size:16,style:{opacity:.5}})]},g))})]},m.id)),c.jsx("div",{ref:l})]}),c.jsxs("div",{className:"flex items-center gap-3 p-4",style:{background:"linear-gradient(180deg, rgba(12, 12, 12, 1) 0%, rgba(8, 8, 8, 1) 100%)",borderTop:"1px solid rgba(139, 92, 246, 0.15)"},children:[c.jsx("input",{type:"text",value:i,onChange:m=>o(m.target.value),onKeyPress:h,placeholder:"Digite sua dúvida...",className:"flex-1 px-4 py-3 text-sm outline-none transition-all duration-200",style:{background:"rgba(0, 0, 0, 0.6)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"12px",color:"#fff"},onFocus:m=>{m.currentTarget.style.borderColor="rgba(139, 92, 246, 0.5)",m.currentTarget.style.boxShadow="0 0 15px rgba(139, 92, 246, 0.1)"},onBlur:m=>{m.currentTarget.style.borderColor="rgba(255, 255, 255, 0.1)",m.currentTarget.style.boxShadow="none"}}),c.jsx("button",{onClick:p,className:"w-11 h-11 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-200",style:{background:"linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",border:"none",color:"#000",boxShadow:"0 4px 15px rgba(139, 92, 246, 0.3)"},onMouseOver:m=>{m.currentTarget.style.transform="scale(1.05)",m.currentTarget.style.boxShadow="0 6px 20px rgba(139, 92, 246, 0.4)"},onMouseOut:m=>{m.currentTarget.style.transform="scale(1)",m.currentTarget.style.boxShadow="0 4px 15px rgba(139, 92, 246, 0.3)"},children:c.jsx(aS,{size:18})})]})]})}),c.jsxs(He.button,{onClick:b,whileHover:{scale:1.08},whileTap:{scale:.95},className:"w-[60px] h-[60px] rounded-2xl flex items-center justify-center cursor-pointer border-none relative",style:{background:"linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",boxShadow:"0 6px 25px rgba(139, 92, 246, 0.4)",color:"#000"},children:[e?c.jsx(Ou,{size:24}):c.jsx(sS,{size:24}),s&&!e&&c.jsx(He.span,{initial:{scale:0},animate:{scale:1},className:"absolute -top-1 -right-1 w-4 h-4 rounded-full",style:{background:"#FF3B3B",border:"3px solid #0a0a0a",boxShadow:"0 0 10px rgba(255, 59, 59, 0.5)",animation:"pulse 2s infinite"}})]}),c.jsx("style",{children:`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.15); opacity: 0.9; }
        }
        
        @media (max-width: 480px) {
          .fixed.bottom-5.right-5 > div:first-child {
            width: 90vw !important;
            height: 70vh !important;
            bottom: 80px !important;
            right: -10px !important;
          }
        }
      `})]})}const YR=()=>{const{games:e,aaaGames:t,loading:n,totalGames:r,searchGames:i,getGamesByCategory:o}=My(),[s,a]=w.useState(null),[l,u]=w.useState(0),[d,f]=w.useState(!1),[p,h]=w.useState(!1);w.useEffect(()=>{const g=()=>{const x=window.scrollY,v=window.innerHeight*.8;h(x>v)};return window.addEventListener("scroll",g),()=>window.removeEventListener("scroll",g)},[]),w.useEffect(()=>{if(t.length===0)return;const g=setInterval(()=>{f(!0),setTimeout(()=>{u(x=>(x+1)%t.length),setTimeout(()=>f(!1),100)},600)},8e3);return()=>clearInterval(g)},[t.length]);const b=t[l],m=()=>{f(!0),setTimeout(()=>{u(g=>(g-1+t.length)%t.length),setTimeout(()=>f(!1),100)},500)},y=()=>{f(!0),setTimeout(()=>{u(g=>(g+1)%t.length),setTimeout(()=>f(!1),100)},500)};return c.jsxs("div",{className:"min-h-screen",children:[c.jsx(GR,{isVisible:p}),c.jsx(qj,{urgencyBarVisible:p}),c.jsx(Qj,{featuredGame:b,isTransitioning:d,onPrev:m,onNext:y,onOpenDetails:a}),c.jsx(MR,{games:e,totalGames:r,onOpenDetails:a}),c.jsx(DR,{}),c.jsx(LR,{games:e,totalGames:r,getGamesByCategory:o,searchGames:i,onOpenDetails:a}),c.jsx(OR,{}),c.jsx(IR,{}),c.jsx(BR,{}),c.jsx($R,{}),c.jsx(UR,{}),c.jsx(WR,{}),s&&c.jsx(HR,{game:s,onClose:()=>a(null)}),c.jsx(KR,{})]})},qR=()=>{My();const[e,t]=w.useState(!1),n=[{name:"Elden Ring",appid:1245620},{name:"Cyberpunk 2077",appid:1091500},{name:"Red Dead Redemption 2",appid:1174180},{name:"Baldur's Gate 3",appid:1086940},{name:"Hogwarts Legacy",appid:990080},{name:"God of War",appid:1593500},{name:"GTA V",appid:271590},{name:"Resident Evil 4",appid:2050650},{name:"Dark Souls III",appid:374320}],r=i=>`https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${i}/library_600x900.jpg`;return c.jsxs("div",{className:`carousel-page ${e?"export-mode":""}`,children:[c.jsxs("div",{className:"carousel-header",children:[c.jsx("h1",{children:"Carrossel Instagram — UISE XP"}),c.jsxs("p",{children:["Clique direito no slide → Inspecionar → selecione ",c.jsx("code",{children:".slide"}),' → "Capture node screenshot"']}),c.jsxs("div",{className:"export-controls",children:[c.jsx("button",{className:`export-toggle ${e?"active":""}`,onClick:()=>t(!e),children:e?"✓ Modo Export Ativo":"Ativar Modo Export"}),c.jsxs("div",{className:"export-instructions",children:[c.jsx("strong",{children:"Instruções para DPR 2x/3x:"}),c.jsxs("ol",{children:[c.jsx("li",{children:"Zoom do Chrome = 100% (Ctrl+0)"}),c.jsx("li",{children:"Abra Device Toolbar (Ctrl+Shift+M)"}),c.jsx("li",{children:"Defina viewport: 1080×1350"}),c.jsx("li",{children:"No menu ⋮ → More tools → Rendering → Force DPR: 2 ou 3"}),c.jsx("li",{children:'Inspecione o .slide → "Capture node screenshot"'})]}),c.jsx("p",{className:"export-result",children:"DPR 2 → PNG ~2160×2700 | DPR 3 → PNG ~3240×4050"})]})]})]}),c.jsx("div",{className:"slide",id:"slide-1",children:c.jsxs("div",{className:"slide-inner",children:[c.jsxs("div",{className:"slide-bg-mosaic",children:[c.jsx("img",{src:r(1245620),alt:"",loading:"eager"}),c.jsx("img",{src:r(1091500),alt:"",loading:"eager"}),c.jsx("img",{src:r(1174180),alt:"",loading:"eager"})]}),c.jsx("div",{className:"slide-overlay"}),c.jsx("div",{className:"slide-glow glow-left"}),c.jsx("div",{className:"slide-glow glow-right"}),c.jsxs("div",{className:"slide-content",children:[c.jsxs("div",{className:"slide-logo",children:[c.jsx("span",{className:"logo-white",children:"UISE"}),c.jsx("span",{className:"logo-neon",children:" XP"})]}),c.jsxs("div",{className:"slide-main",children:[c.jsxs("div",{className:"slide-pill",children:[c.jsx("span",{className:"pill-dot"}),"Sistema Online • Baixe na Steam"]}),c.jsxs("h1",{className:"slide-headline",children:["Sua Steam,",c.jsx("br",{}),c.jsx("span",{className:"headline-accent",children:"desbloqueada."})]}),c.jsxs("p",{className:"slide-subtext",children:["Acesso a ",c.jsx("span",{className:"text-neon",children:"+40.000 jogos AAA"})," por uma fração do preço.",c.jsx("br",{}),c.jsx("strong",{children:"Baixe direto dos servidores oficiais."})]}),c.jsxs("div",{className:"slide-swipe",children:["Arraste para o lado",c.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]}),c.jsxs("div",{className:"slide-footer",children:[c.jsxs("div",{className:"slide-dots",children:[c.jsx("span",{className:"dot active"}),c.jsx("span",{className:"dot"}),c.jsx("span",{className:"dot"}),c.jsx("span",{className:"dot"}),c.jsx("span",{className:"dot"})]}),c.jsx("span",{className:"footer-url",children:"uisexp.com.br"})]})]})]})}),c.jsx("div",{className:"slide",id:"slide-2",children:c.jsxs("div",{className:"slide-inner",children:[c.jsx("div",{className:"slide-bg-image",children:c.jsx("img",{src:r(1086940),alt:"",loading:"eager"})}),c.jsx("div",{className:"slide-overlay overlay-stronger"}),c.jsx("div",{className:"slide-glow glow-bottom"}),c.jsxs("div",{className:"slide-content",children:[c.jsxs("div",{className:"slide-logo",children:[c.jsx("span",{className:"logo-white",children:"UISE"}),c.jsx("span",{className:"logo-neon",children:" XP"})]}),c.jsxs("div",{className:"slide-main center",children:[c.jsxs("h2",{className:"slide-headline smaller",children:["Como ",c.jsx("span",{className:"headline-accent",children:"funciona"}),"?"]}),c.jsx("div",{className:"glass-card",children:c.jsxs("div",{className:"steps-list",children:[c.jsxs("div",{className:"step-item",children:[c.jsx("div",{className:"step-number",children:"1"}),c.jsx("span",{className:"step-text",children:"Você escolhe um plano"})]}),c.jsxs("div",{className:"step-item",children:[c.jsx("div",{className:"step-number",children:"2"}),c.jsx("span",{className:"step-text",children:"Recebe acesso ao catálogo"})]}),c.jsxs("div",{className:"step-item",children:[c.jsx("div",{className:"step-number",children:"3"}),c.jsx("span",{className:"step-text",children:"Baixa direto pela Steam"})]})]})}),c.jsxs("p",{className:"slide-subtext italic",children:["Simples assim. ",c.jsx("strong",{children:"Sem complicação."})]}),c.jsxs("div",{className:"slide-swipe",children:["Arraste para o lado",c.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]}),c.jsxs("div",{className:"slide-footer",children:[c.jsxs("div",{className:"slide-dots",children:[c.jsx("span",{className:"dot"}),c.jsx("span",{className:"dot active"}),c.jsx("span",{className:"dot"}),c.jsx("span",{className:"dot"}),c.jsx("span",{className:"dot"})]}),c.jsx("span",{className:"footer-url",children:"uisexp.com.br"})]})]})]})}),c.jsx("div",{className:"slide",id:"slide-3",children:c.jsxs("div",{className:"slide-inner slide-dark",children:[c.jsx("div",{className:"slide-glow glow-left"}),c.jsx("div",{className:"slide-glow glow-top-right"}),c.jsxs("div",{className:"slide-content",children:[c.jsxs("div",{className:"slide-header-row",children:[c.jsxs("div",{className:"slide-logo",children:[c.jsx("span",{className:"logo-white",children:"UISE"}),c.jsx("span",{className:"logo-neon",children:" XP"})]}),c.jsxs("div",{className:"badge-neon",children:[c.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("rect",{x:"2",y:"6",width:"20",height:"12",rx:"2"}),c.jsx("path",{d:"M6 12h4M14 12h4"})]}),"+40.000 jogos"]})]}),c.jsxs("div",{className:"slide-main",children:[c.jsxs("h2",{className:"slide-headline smaller center-text",children:["Uma prévia do ",c.jsx("span",{className:"headline-accent",children:"catálogo"})]}),c.jsx("div",{className:"games-grid",children:n.map(i=>c.jsxs("div",{className:"game-card",children:[c.jsx("img",{src:`https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${i.appid}/header.jpg`,alt:i.name,loading:"eager"}),c.jsx("div",{className:"game-card-overlay"})]},i.appid))}),c.jsxs("p",{className:"slide-subtext center-text",children:["E muito mais... ",c.jsx("span",{className:"text-neon",children:"atualizações toda semana."})]}),c.jsxs("div",{className:"slide-swipe",children:["Arraste para o lado",c.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]}),c.jsxs("div",{className:"slide-footer",children:[c.jsxs("div",{className:"slide-dots",children:[c.jsx("span",{className:"dot"}),c.jsx("span",{className:"dot"}),c.jsx("span",{className:"dot active"}),c.jsx("span",{className:"dot"}),c.jsx("span",{className:"dot"})]}),c.jsx("span",{className:"footer-url",children:"uisexp.com.br"})]})]})]})}),c.jsx("div",{className:"slide",id:"slide-4",children:c.jsxs("div",{className:"slide-inner",children:[c.jsx("div",{className:"slide-bg-image saturated",children:c.jsx("img",{src:r(1593500),alt:"",loading:"eager"})}),c.jsx("div",{className:"slide-overlay"}),c.jsx("div",{className:"slide-glow glow-center"}),c.jsxs("div",{className:"slide-content",children:[c.jsxs("div",{className:"slide-logo",children:[c.jsx("span",{className:"logo-white",children:"UISE"}),c.jsx("span",{className:"logo-neon",children:" XP"})]}),c.jsxs("div",{className:"slide-main center",children:[c.jsx("div",{className:"shield-icon",children:c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}),c.jsx("path",{d:"M9 12l2 2 4-4"})]})}),c.jsxs("h2",{className:"slide-headline smaller",children:["Garantia ",c.jsx("span",{className:"headline-accent",children:"total"})]}),c.jsx("div",{className:"neon-line"}),c.jsxs("p",{className:"quote-text",children:["Testou e não funcionou?",c.jsx("br",{}),c.jsx("span",{className:"highlight-box",children:"Devolvemos seu dinheiro."})]}),c.jsxs("p",{className:"slide-subtext italic center-text",children:["Com a ",c.jsx("strong",{className:"text-neon",children:"UISE XP"})," você não corre risco.",c.jsx("br",{}),c.jsx("strong",{children:"Mas isso não é tudo."})]}),c.jsxs("div",{className:"slide-swipe",children:["Arraste para o lado",c.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]}),c.jsxs("div",{className:"slide-footer",children:[c.jsxs("div",{className:"slide-dots",children:[c.jsx("span",{className:"dot"}),c.jsx("span",{className:"dot"}),c.jsx("span",{className:"dot"}),c.jsx("span",{className:"dot active"}),c.jsx("span",{className:"dot"})]}),c.jsx("span",{className:"footer-url",children:"uisexp.com.br"})]})]})]})}),c.jsx("div",{className:"slide",id:"slide-5",children:c.jsxs("div",{className:"slide-inner",children:[c.jsx("div",{className:"slide-bg-grid",children:n.slice(0,9).map((i,o)=>c.jsx("img",{src:r(i.appid),alt:"",loading:"eager"},o))}),c.jsx("div",{className:"slide-overlay overlay-radial"}),c.jsx("div",{className:"slide-glow glow-center large"}),c.jsxs("div",{className:"slide-content",children:[c.jsxs("div",{className:"slide-main center full-height",children:[c.jsxs("div",{className:"slide-logo large",children:[c.jsx("span",{className:"logo-white",children:"UISE"}),c.jsx("span",{className:"logo-neon",children:" XP"})]}),c.jsxs("h2",{className:"slide-headline cta-headline",children:["Acesse o link",c.jsx("br",{}),c.jsx("span",{className:"text-muted",children:"na bio e"}),c.jsx("br",{}),c.jsx("span",{className:"headline-accent",children:"libere sua Steam."})]}),c.jsxs("div",{className:"pills-row",children:[c.jsxs("div",{className:"pill",children:[c.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("rect",{x:"2",y:"6",width:"20",height:"12",rx:"2"}),c.jsx("path",{d:"M6 12h4M14 12h4"})]}),"+40.000 jogos"]}),c.jsxs("div",{className:"pill",children:[c.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})}),"Download rápido"]}),c.jsxs("div",{className:"pill",children:[c.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})}),"Garantia"]})]}),c.jsxs("div",{className:"ig-icons",children:[c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:c.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})}),c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:c.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})}),c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:c.jsx("path",{d:"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"})}),c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[c.jsx("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),c.jsx("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]})]})]}),c.jsxs("div",{className:"slide-footer",children:[c.jsxs("div",{className:"slide-dots",children:[c.jsx("span",{className:"dot"}),c.jsx("span",{className:"dot"}),c.jsx("span",{className:"dot"}),c.jsx("span",{className:"dot"}),c.jsx("span",{className:"dot active"})]}),c.jsx("span",{className:"footer-url",children:"uisexp.com.br"})]})]})]})}),c.jsx("style",{children:`
        .carousel-page {
          min-height: 100vh;
          background: #050505;
          padding: 60px 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 80px;
        }

        .carousel-header {
          text-align: center;
          max-width: 700px;
        }

        .carousel-header h1 {
          font-size: 28px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 12px;
        }

        .carousel-header p {
          font-size: 15px;
          color: rgba(255,255,255,.5);
        }

        .carousel-header code {
          background: rgba(255,255,255,.1);
          padding: 2px 8px;
          border-radius: 4px;
          font-family: monospace;
        }

        /* ========== EXPORT CONTROLS ========== */
        .export-controls {
          margin-top: 24px;
          padding: 20px;
          background: rgba(139, 92, 246,0.05);
          border: 1px solid rgba(139, 92, 246,0.2);
          border-radius: 12px;
        }

        .export-toggle {
          padding: 12px 24px;
          background: rgba(139, 92, 246,0.1);
          border: 1px solid rgba(139, 92, 246,0.4);
          border-radius: 8px;
          color: #8B5CF6;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .export-toggle:hover {
          background: rgba(139, 92, 246,0.2);
        }

        .export-toggle.active {
          background: #8B5CF6;
          color: #000;
        }

        .export-instructions {
          margin-top: 16px;
          text-align: left;
          font-size: 13px;
          color: rgba(255,255,255,0.7);
        }

        .export-instructions strong {
          color: #fff;
        }

        .export-instructions ol {
          margin: 8px 0;
          padding-left: 20px;
        }

        .export-instructions li {
          margin: 4px 0;
        }

        .export-result {
          margin-top: 12px;
          padding: 8px 12px;
          background: rgba(139, 92, 246,0.1);
          border-radius: 6px;
          color: #8B5CF6;
          font-weight: 600;
          text-align: center;
        }

        /* ========== SLIDE BASE ========== */
        .slide {
          width: 1080px;
          height: 1350px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 
            0 50px 100px rgba(0,0,0,.8),
            0 0 0 1px rgba(255,255,255,.05);
          /* GPU acceleration para render mais nítido */
          transform: translateZ(0);
          will-change: auto;
        }

        .slide-inner {
          width: 100%;
          height: 100%;
          position: relative;
          background: var(--bg, #030303);
        }

        .slide-dark {
          background: linear-gradient(180deg, #040404 0%, #080808 100%);
        }

        /* ========== BACKGROUNDS - ALTA QUALIDADE ========== */
        .slide-bg-mosaic {
          position: absolute;
          inset: 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }

        .slide-bg-mosaic img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          /* Render otimizado sem banding */
          image-rendering: auto;
          transform: translateZ(0);
        }

        /* Overlay gradiente ao invés de filter direto na imagem */
        .slide-bg-mosaic::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, 
            rgba(0,0,0,0) 0%,
            rgba(0,0,0,0.1) 100%
          );
          pointer-events: none;
        }

        .slide-bg-image {
          position: absolute;
          inset: 0;
        }

        .slide-bg-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          /* Render de alta qualidade */
          image-rendering: auto;
          transform: translateZ(0);
        }

        /* Overlay gradiente para escurecer sem banding */
        .slide-bg-image::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.65);
          pointer-events: none;
        }

        .slide-bg-image.saturated::after {
          background: rgba(0,0,0,0.75);
        }

        .slide-bg-grid {
          position: absolute;
          inset: 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(3, 1fr);
          gap: 12px;
          padding: 60px;
          opacity: 0.18;
        }

        .slide-bg-grid img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 16px;
          image-rendering: auto;
          transform: translateZ(0);
        }

        /* ========== OVERLAYS ========== */
        .slide-overlay {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse 120% 80% at 50% 100%, rgba(0,0,0,0.97) 0%, transparent 55%),
            radial-gradient(ellipse 100% 60% at 0% 50%, rgba(0,0,0,0.92) 0%, transparent 45%),
            linear-gradient(to top, rgba(0,0,0,0.99) 0%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.7) 100%);
        }

        .slide-overlay.overlay-stronger {
          background: 
            radial-gradient(ellipse 120% 80% at 50% 100%, rgba(0,0,0,0.98) 0%, transparent 50%),
            linear-gradient(to top, rgba(0,0,0,0.99) 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.75) 100%);
        }

        .slide-overlay.overlay-radial {
          background: radial-gradient(ellipse at center, rgba(3,3,3,0.8) 0%, rgba(3,3,3,0.97) 100%);
        }

        /* ========== GLOWS ========== */
        .slide-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(139, 92, 246,0.25) 0%, transparent 65%);
          filter: blur(60px);
          pointer-events: none;
        }

        .glow-left {
          bottom: -200px;
          left: -200px;
        }

        .glow-right {
          top: -100px;
          right: -200px;
          opacity: 0.4;
        }

        .glow-bottom {
          bottom: -100px;
          left: 50%;
          transform: translateX(-50%);
        }

        .glow-top-right {
          top: -150px;
          right: -150px;
          opacity: 0.5;
        }

        .glow-center {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .glow-center.large {
          width: 800px;
          height: 800px;
        }

        /* ========== CONTENT ========== */
        .slide-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 72px 80px;
        }

        .slide-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .slide-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 32px;
        }

        .slide-main.center {
          align-items: center;
          text-align: center;
        }

        .slide-main.full-height {
          justify-content: center;
          gap: 40px;
        }

        /* ========== LOGO ========== */
        .slide-logo {
          display: flex;
          align-items: center;
        }

        .slide-logo.large .logo-white,
        .slide-logo.large .logo-neon {
          font-size: 80px;
        }

        .logo-white {
          font-size: 48px;
          font-weight: 950;
          color: #fff;
          letter-spacing: 2px;
        }

        .logo-neon {
          font-size: 48px;
          font-weight: 950;
          color: var(--neon, #8B5CF6);
          letter-spacing: 2px;
          text-shadow: 0 0 60px rgba(139, 92, 246,0.6);
        }

        /* ========== PILL ========== */
        .slide-pill {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          padding: 16px 24px;
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 999px;
          font-size: 18px;
          font-weight: 800;
          letter-spacing: 0.5px;
          color: rgba(255,255,255,.9);
          backdrop-filter: blur(12px);
          width: fit-content;
        }

        .pill-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--neon, #8B5CF6);
          box-shadow: 0 0 20px rgba(139, 92, 246,0.7);
        }

        /* ========== TYPOGRAPHY ========== */
        .slide-headline {
          font-size: 100px;
          font-weight: 950;
          line-height: 0.98;
          color: #fff;
          letter-spacing: -4px;
        }

        .slide-headline.smaller {
          font-size: 82px;
          letter-spacing: -3px;
        }

        .slide-headline.cta-headline {
          font-size: 78px;
          line-height: 1.05;
        }

        .headline-accent {
          color: var(--neon, #8B5CF6);
          text-shadow: 
            0 0 80px rgba(139, 92, 246,0.5),
            0 4px 40px rgba(139, 92, 246,0.3);
        }

        .slide-subtext {
          font-size: 34px;
          font-weight: 500;
          color: rgba(255,255,255,.6);
          line-height: 1.55;
          max-width: 850px;
        }

        .slide-subtext.italic {
          font-style: italic;
          color: rgba(255,255,255,.7);
        }

        .slide-subtext strong {
          color: #fff;
          font-weight: 700;
        }

        .text-neon {
          color: var(--neon, #8B5CF6);
          font-weight: 700;
        }

        .text-muted {
          color: rgba(255,255,255,.5);
          font-weight: 700;
        }

        .center-text {
          text-align: center;
        }

        /* ========== SWIPE INDICATOR ========== */
        .slide-swipe {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          padding: 22px 44px;
          background: rgba(139, 92, 246,0.1);
          border: 2px solid rgba(139, 92, 246,0.5);
          border-radius: 60px;
          color: var(--neon, #8B5CF6);
          font-size: 22px;
          font-weight: 700;
          letter-spacing: 0.3px;
          box-shadow: 
            0 0 50px rgba(139, 92, 246,0.15),
            inset 0 0 30px rgba(139, 92, 246,0.05);
          margin-top: 20px;
        }

        .slide-swipe svg {
          animation: swipeArrow 1.2s ease-in-out infinite;
        }

        @keyframes swipeArrow {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(12px); }
        }

        /* ========== FOOTER ========== */
        .slide-footer {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .slide-dots {
          display: flex;
          gap: 12px;
        }

        .dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: rgba(255,255,255,.25);
        }

        .dot.active {
          background: var(--neon, #8B5CF6);
          box-shadow: 0 0 20px rgba(139, 92, 246,0.6);
        }

        .footer-url {
          font-size: 26px;
          font-weight: 600;
          color: rgba(255,255,255,.35);
          letter-spacing: 0.5px;
        }

        /* ========== GLASS CARD ========== */
        .glass-card {
          background: rgba(255,255,255,.03);
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 28px;
          padding: 52px 56px;
          backdrop-filter: blur(20px);
          box-shadow: 
            0 20px 60px rgba(0,0,0,.4),
            inset 0 1px 0 rgba(255,255,255,.05);
        }

        .steps-list {
          display: flex;
          flex-direction: column;
          gap: 36px;
        }

        .step-item {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .step-number {
          width: 76px;
          height: 76px;
          background: linear-gradient(135deg, var(--neon, #8B5CF6), rgba(109, 40, 217,0.9));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 36px;
          font-weight: 900;
          color: #000;
          flex-shrink: 0;
          box-shadow: 0 10px 40px rgba(139, 92, 246,0.4);
        }

        .step-text {
          font-size: 36px;
          font-weight: 600;
          color: #fff;
        }

        /* ========== GAMES GRID ========== */
        .games-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .game-card {
          aspect-ratio: 460/215;
          border-radius: 18px;
          overflow: hidden;
          position: relative;
          border: 1px solid rgba(255,255,255,.12);
          background: #0a0a0a;
        }

        .game-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(1.15) contrast(1.05);
        }

        .game-card-overlay {
          position: absolute;
          inset: 0;
          background: 
            linear-gradient(to top, rgba(0,0,0,.5) 0%, transparent 40%),
            linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%);
        }

        .game-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(255,255,255,0.08) 0%,
            transparent 40%
          );
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
          z-index: 2;
        }

        /* ========== BADGE ========== */
        .badge-neon {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 26px;
          background: rgba(139, 92, 246,0.1);
          border: 1px solid rgba(139, 92, 246,0.4);
          border-radius: 50px;
          color: var(--neon, #8B5CF6);
          font-size: 22px;
          font-weight: 700;
        }

        .badge-neon svg {
          flex-shrink: 0;
        }

        /* ========== SHIELD ========== */
        .shield-icon {
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, rgba(139, 92, 246,0.15), rgba(139, 92, 246,0.05));
          border: 2px solid rgba(139, 92, 246,0.4);
          border-radius: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        .shield-icon svg {
          width: 60px;
          height: 60px;
          color: var(--neon, #8B5CF6);
        }

        /* ========== DECORATIVE ========== */
        .neon-line {
          width: 160px;
          height: 5px;
          background: linear-gradient(90deg, var(--neon, #8B5CF6), rgba(139, 92, 246,0.4));
          border-radius: 3px;
          box-shadow: 0 0 40px rgba(139, 92, 246,0.5);
          margin: 20px 0;
        }

        .quote-text {
          font-size: 44px;
          font-weight: 600;
          color: #fff;
          line-height: 1.45;
        }

        .highlight-box {
          display: inline;
          background: var(--neon, #8B5CF6);
          color: #000;
          padding: 6px 28px;
          font-weight: 900;
          box-shadow: 0 10px 50px rgba(139, 92, 246,0.4);
        }

        /* ========== PILLS ROW ========== */
        .pills-row {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .pill {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 20px 32px;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 60px;
          color: #fff;
          font-size: 24px;
          font-weight: 600;
        }

        .pill svg {
          color: var(--neon, #8B5CF6);
          flex-shrink: 0;
        }

        /* ========== IG ICONS ========== */
        .ig-icons {
          display: flex;
          gap: 32px;
          justify-content: center;
          margin-top: 24px;
        }

        .ig-icons svg {
          width: 44px;
          height: 44px;
          color: rgba(255,255,255,.6);
        }

        /* ========== EXPORT MODE ========== */
        .export-mode .slide {
          /* Remove sombras pesadas para export limpo */
          box-shadow: none;
          border-radius: 0;
        }

        .export-mode .slide-bg-mosaic img,
        .export-mode .slide-bg-image img,
        .export-mode .slide-bg-grid img,
        .export-mode .game-card img {
          /* Nitidez extra para export */
          filter: contrast(1.02) saturate(1.05);
        }

        .export-mode .slide-glow {
          /* Reduz blur para render mais limpo */
          filter: blur(40px);
        }

        /* Força anti-aliasing de alta qualidade */
        .slide * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }

        /* Previne compressão de cores */
        .slide img {
          color-interpolation: sRGB;
        }
      `})]})},jg=["✅ 100% Seguro","⚡ Acesso Imediato","🔒 Compra Blindada","🎮 Jogue Hoje Mesmo","🛡️ Garantia de 7 Dias","🚀 Download via Steam"],QR=["Cyberpunk 2077","ELDEN RING","Hogwarts Legacy","Spider-Man","God of War","Red Dead Redemption 2","Baldur's Gate 3","Resident Evil","Grand Theft Auto V","Dark Souls III","Horizon Zero Dawn","The Last of Us","Call of Duty","Battlefield","Apex"];function XR(){const[e,t]=w.useState([]),[n,r]=w.useState(0),[i,o]=w.useState(15*60),s=w.useRef(null);w.useEffect(()=>{fetch("data/games.json").then(b=>b.json()).then(b=>t(b.filter(m=>m.cover)))},[]),w.useEffect(()=>{const b=setInterval(()=>{r(m=>(m+1)%jg.length)},3e3);return()=>clearInterval(b)},[]),w.useEffect(()=>{const b=setInterval(()=>{o(m=>m>0?m-1:900)},1e3);return()=>clearInterval(b)},[]);const a=b=>{if(!s.current)return;const{left:m,top:y,width:g,height:x}=s.current.getBoundingClientRect(),v=(b.clientX-m)/g-.5,S=(b.clientY-y)/x-.5;s.current.style.transform=`perspective(1000px) rotateY(${v*5}deg) rotateX(${-S*5}deg)`},l=()=>{s.current&&(s.current.style.transform="perspective(1000px) rotateY(0deg) rotateX(0deg)")},u=b=>{const m=Math.floor(b/60).toString().padStart(2,"0"),y=(b%60).toString().padStart(2,"0");return`${m}:${y}`},d=w.useMemo(()=>{const b=[];for(const m of QR){const y=e.find(g=>g.name.toLowerCase().includes(m.toLowerCase())||m.toLowerCase().includes(g.name.toLowerCase()));y&&!b.includes(y)&&b.push(y)}return b.slice(0,15)},[e]),f=w.useMemo(()=>{const b=d.slice(0,5);return[...b,...b]},[d]),p=w.useMemo(()=>{const b=d.slice(5,10);return[...b,...b]},[d]),h=w.useMemo(()=>{const b=d.slice(10,15);return[...b,...b]},[d]);return c.jsxs("div",{className:"cb-root",ref:s,onMouseMove:a,onMouseLeave:l,children:[c.jsxs("div",{className:"cb-left",children:[c.jsxs("div",{className:"cb-logo-row",children:[c.jsx("img",{src:ww,alt:"UISE XP",className:"cb-logo"}),c.jsx("span",{className:"cb-store-label",children:"UISE XP STORE"})]}),c.jsxs("h1",{className:"cb-title",children:["PLANO",c.jsx("br",{}),c.jsx("span",{className:"cb-title-hl",children:"INICIANTE"})]}),c.jsxs("ul",{className:"cb-features",children:[c.jsxs("li",{children:[c.jsx("span",{className:"cb-check",children:"✓"})," ACESSO IMEDIATO"]}),c.jsxs("li",{children:[c.jsx("span",{className:"cb-check",children:"✓"})," JOGOS AAA OFFLINE"]}),c.jsxs("li",{children:[c.jsx("span",{className:"cb-check",children:"✓"})," ATUALIZAÇÕES GRÁTIS"]})]}),c.jsxs("div",{className:"cb-badge",children:[c.jsx("div",{className:"cb-pulse-dot"}),"OFERTA ENCERRA EM ",u(i)]}),c.jsx("div",{className:"cb-rotating-text",children:c.jsx("span",{children:jg[n]},n)})]}),c.jsxs("div",{className:"cb-center",children:[c.jsx("div",{className:"cb-old-price",children:"DE R$ 19,97 POR"}),c.jsxs("div",{className:"cb-price",children:[c.jsx("span",{className:"cb-currency",children:"R$"}),c.jsx("span",{className:"cb-price-main",children:"9"}),c.jsx("span",{className:"cb-price-cents",children:",97"})]}),c.jsx("div",{className:"cb-price-tag",children:"TAXA ÚNICA"})]}),c.jsx("div",{className:"cb-right",children:c.jsxs("div",{className:"cb-scroll-container",children:[c.jsx("div",{className:"cb-scroll-col cb-scroll-up",style:{animationDuration:"25s"},children:f.map((b,m)=>c.jsx("div",{className:"cb-scroll-card",children:c.jsx("img",{src:b.cover,alt:b.name,loading:"eager"})},`c1-${m}`))}),c.jsx("div",{className:"cb-scroll-col cb-scroll-down",style:{marginTop:"-50px",animationDuration:"20s"},children:p.map((b,m)=>c.jsx("div",{className:"cb-scroll-card",children:c.jsx("img",{src:b.cover,alt:b.name,loading:"eager"})},`c2-${m}`))}),c.jsx("div",{className:"cb-scroll-col cb-scroll-up",style:{animationDuration:"30s"},children:h.map((b,m)=>c.jsx("div",{className:"cb-scroll-card",children:c.jsx("img",{src:b.cover,alt:b.name,loading:"eager"})},`c3-${m}`))})]})}),c.jsx("div",{className:"cb-scanlines"}),c.jsx("style",{children:`
        .cb-root {
          width: 100%;
          max-width: 1200px;
          aspect-ratio: 1200 / 420;
          margin: 0 auto;
          display: flex;
          align-items: center;
          background: radial-gradient(circle at 30% 50%, #0a0f0a 0%, #050505 100%);
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          padding: 32px 40px;
          gap: 24px;
          font-family: 'Sora', sans-serif;
          box-shadow: 0 20px 50px rgba(0,0,0,.5), 0 0 0 1px rgba(255,255,255,.05), inset 0 0 60px rgba(139, 92, 246,.02);
          transition: transform 0.1s ease-out;
        }

        .cb-scanlines {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,.2) 50%, rgba(0,0,0,.2));
          background-size: 100% 4px;
          pointer-events: none; z-index: 10; opacity: .3;
        }

        /* LEFT */
        .cb-left { flex: 0 0 340px; display: flex; flex-direction: column; gap: 12px; z-index: 5; }
        .cb-logo-row { display: flex; align-items: center; gap: 8px; margin-bottom: 4px; }
        .cb-logo { width: 22px; height: 22px; object-fit: contain; }
        .cb-store-label { font-size: 11px; font-weight: 800; color: rgba(255,255,255,.4); letter-spacing: 3px; text-transform: uppercase; }

        .cb-title { font-size: 42px; font-weight: 800; color: #fff; line-height: .9; letter-spacing: -2px; margin: 0; }
        .cb-title-hl {
          color: #8B5CF6;
          text-shadow: 0 0 20px rgba(139, 92, 246,.6);
          font-size: 52px;
          display: inline-block;
          animation: cb-glitch 3s infinite linear alternate-reverse;
        }
        @keyframes cb-glitch {
          0%, 90% { transform: skew(0deg); }
          92% { transform: skew(-2deg); filter: hue-rotate(0deg); }
          94% { transform: skew(2deg); filter: hue-rotate(90deg); }
          96% { transform: skew(0deg); filter: hue-rotate(0deg); }
          100% { transform: skew(0deg); }
        }

        .cb-features { list-style: none; padding: 0; margin: 8px 0; display: flex; flex-direction: column; gap: 6px; }
        .cb-features li { font-size: 13px; font-weight: 600; color: #ccc; display: flex; align-items: center; gap: 8px; }
        .cb-check { color: #8B5CF6; font-weight: 900; }

        .cb-badge {
          display: flex; align-items: center; gap: 8px; width: fit-content;
          padding: 6px 14px;
          background: rgba(220,38,38,.15); border: 1px solid rgba(220,38,38,.4); border-radius: 8px;
          color: #ef4444; font-size: 11px; font-weight: 700; letter-spacing: .5px; text-transform: uppercase;
          box-shadow: 0 0 15px rgba(220,38,38,.1);
        }
        .cb-pulse-dot {
          width: 6px; height: 6px; background: #ef4444; border-radius: 50%;
          animation: cb-pulse-red 1.5s infinite;
        }
        @keyframes cb-pulse-red {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: .5; transform: scale(1.5); }
          100% { opacity: 1; transform: scale(1); }
        }

        .cb-rotating-text { font-size: 14px; font-weight: 600; color: #fff; min-height: 22px; margin-top: 4px; }
        .cb-rotating-text span { animation: cb-fadeUp .4s ease forwards; }
        @keyframes cb-fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* CENTER */
        .cb-center {
          flex: 0 0 220px; display: flex; flex-direction: column; align-items: center; justify-content: center;
          z-index: 5; position: relative;
        }
        .cb-center::before, .cb-center::after {
          content: ''; position: absolute; top: 10%; height: 80%; width: 1px;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,.1), transparent);
        }
        .cb-center::before { left: 0; }
        .cb-center::after { right: 0; }

        .cb-old-price { font-size: 11px; color: #666; font-weight: 700; text-decoration: line-through; margin-bottom: -5px; }
        .cb-price { display: flex; align-items: flex-start; line-height: 1; filter: drop-shadow(0 0 10px rgba(139, 92, 246,.3)); }
        .cb-currency { font-size: 20px; font-weight: 700; color: #8B5CF6; margin-top: 12px; margin-right: 4px; }
        .cb-price-main { font-size: 100px; font-weight: 800; color: #fff; letter-spacing: -4px; }
        .cb-price-cents { font-size: 32px; font-weight: 700; color: #fff; margin-top: 16px; }
        .cb-price-tag {
          font-size: 11px; font-weight: 800; background: #8B5CF6; color: #000;
          padding: 4px 12px; border-radius: 4px; text-transform: uppercase; margin-top: 8px;
          transform: skewX(-10deg);
        }

        /* RIGHT - Scrolling */
        .cb-right {
          flex: 1; height: 100%; position: relative; overflow: hidden; z-index: 1;
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        .cb-right::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(to right, #050505 0%, transparent 20%, transparent 80%, #050505 100%);
          pointer-events: none; z-index: 2;
        }

        .cb-scroll-container {
          display: flex; gap: 12px; height: 150%;
          transform: translateY(-15%) rotate(5deg) scale(1.1);
        }

        .cb-scroll-col { flex: 1; display: flex; flex-direction: column; gap: 12px; }
        .cb-scroll-up { animation: cb-scrollUp linear infinite; }
        .cb-scroll-down { animation: cb-scrollDown linear infinite; }

        .cb-scroll-card {
          border-radius: 8px; overflow: hidden; aspect-ratio: 2/3; position: relative;
          box-shadow: 0 4px 10px rgba(0,0,0,.5); border: 1px solid rgba(255,255,255,.1);
          flex-shrink: 0;
        }
        .cb-scroll-card img { width: 100%; height: 100%; object-fit: cover; display: block; }

        @keyframes cb-scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes cb-scrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
      `})]})}const ZR=Ev("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90 shadow-neon hover:shadow-neon-strong",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-border bg-transparent hover:bg-secondary hover:border-primary/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-secondary hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",hero:"bg-primary text-primary-foreground font-bold tracking-wide uppercase shadow-neon hover:shadow-neon-strong hover:scale-105",heroOutline:"border-2 border-foreground/20 bg-transparent text-foreground hover:border-primary hover:text-primary hover:bg-primary/5",neon:"bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-neon hover:shadow-neon-strong"},size:{default:"h-11 px-6 py-2",sm:"h-9 rounded-lg px-4 text-xs",lg:"h-14 rounded-xl px-8 text-base",xl:"h-16 rounded-2xl px-10 text-lg",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),bw=w.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...i},o)=>{const s=r?u2:"button";return c.jsx(s,{className:cr(ZR({variant:t,size:n,className:e})),ref:o,...i})});bw.displayName="Button";const JR=()=>{const e=ms();return w.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",e.pathname)},[e.pathname]),c.jsx("div",{className:"flex min-h-screen items-center justify-center bg-background",children:c.jsxs("div",{className:"text-center space-y-6",children:[c.jsxs("div",{className:"flex items-center justify-center gap-3 mb-4",children:[c.jsx("div",{className:"w-3 h-3 rounded-full bg-primary animate-pulse-neon"}),c.jsx("span",{className:"text-2xl font-bold tracking-wider",children:"UISE XP"})]}),c.jsx("h1",{className:"text-8xl font-black neon-text",children:"404"}),c.jsx("p",{className:"text-xl text-muted-foreground",children:"Página não encontrada"}),c.jsx(bw,{variant:"hero",asChild:!0,children:c.jsx(Fj,{to:"/",children:"Voltar ao Início"})})]})})},eA=new IE,tA=()=>c.jsx(FE,{client:eA,children:c.jsxs(fE,{children:[c.jsx(qS,{}),c.jsx(Tk,{}),c.jsx(Oj,{basename:(window.location.pathname.split("/").slice(0,-1).join("/")||"/"),children:c.jsxs(Pj,{children:[c.jsx(po,{path:"/",element:c.jsx(YR,{})}),c.jsx(po,{path:"/instagram",element:c.jsx(qR,{})}),c.jsx(po,{path:"/checkout-banner",element:c.jsx(XR,{})}),c.jsx(po,{path:"*",element:c.jsx(JR,{})})]})})]})});Qx(document.getElementById("root")).render(c.jsx(tA,{}));
