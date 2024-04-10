function ff(A,B){for(var Q=0;Q<B.length;Q++){const g=B[Q];if(typeof g!="string"&&!Array.isArray(g)){for(const E in g)if(E!=="default"&&!(E in A)){const C=Object.getOwnPropertyDescriptor(g,E);C&&Object.defineProperty(A,E,C.get?C:{enumerable:!0,get:()=>g[E]})}}}return Object.freeze(Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}))}(function(){const B=document.createElement("link").relList;if(B&&B.supports&&B.supports("modulepreload"))return;for(const E of document.querySelectorAll('link[rel="modulepreload"]'))g(E);new MutationObserver(E=>{for(const C of E)if(C.type==="childList")for(const n of C.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&g(n)}).observe(document,{childList:!0,subtree:!0});function Q(E){const C={};return E.integrity&&(C.integrity=E.integrity),E.referrerPolicy&&(C.referrerPolicy=E.referrerPolicy),E.crossOrigin==="use-credentials"?C.credentials="include":E.crossOrigin==="anonymous"?C.credentials="omit":C.credentials="same-origin",C}function g(E){if(E.ep)return;E.ep=!0;const C=Q(E);fetch(E.href,C)}})();var Gf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Js(A){return A&&A.__esModule&&Object.prototype.hasOwnProperty.call(A,"default")?A.default:A}function SC(A){if(A.__esModule)return A;var B=A.default;if(typeof B=="function"){var Q=function g(){return this instanceof g?Reflect.construct(B,arguments,this.constructor):B.apply(this,arguments)};Q.prototype=B.prototype}else Q={};return Object.defineProperty(Q,"__esModule",{value:!0}),Object.keys(A).forEach(function(g){var E=Object.getOwnPropertyDescriptor(A,g);Object.defineProperty(Q,g,E.get?E:{enumerable:!0,get:function(){return A[g]}})}),Q}var Pr={exports:{}},$i={},qr={exports:{}},pA={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tw=Symbol.for("react.element"),uf=Symbol.for("react.portal"),Rf=Symbol.for("react.fragment"),hf=Symbol.for("react.strict_mode"),Yf=Symbol.for("react.profiler"),Nf=Symbol.for("react.provider"),pf=Symbol.for("react.context"),Jf=Symbol.for("react.forward_ref"),bf=Symbol.for("react.suspense"),mf=Symbol.for("react.memo"),kf=Symbol.for("react.lazy"),Vc=Symbol.iterator;function yf(A){return A===null||typeof A!="object"?null:(A=Vc&&A[Vc]||A["@@iterator"],typeof A=="function"?A:null)}var _r={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$r=Object.assign,AU={};function lI(A,B,Q){this.props=A,this.context=B,this.refs=AU,this.updater=Q||_r}lI.prototype.isReactComponent={};lI.prototype.setState=function(A,B){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,B,"setState")};lI.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function BU(){}BU.prototype=lI.prototype;function bs(A,B,Q){this.props=A,this.context=B,this.refs=AU,this.updater=Q||_r}var ms=bs.prototype=new BU;ms.constructor=bs;$r(ms,lI.prototype);ms.isPureReactComponent=!0;var xc=Array.isArray,QU=Object.prototype.hasOwnProperty,ks={current:null},gU={key:!0,ref:!0,__self:!0,__source:!0};function EU(A,B,Q){var g,E={},C=null,n=null;if(B!=null)for(g in B.ref!==void 0&&(n=B.ref),B.key!==void 0&&(C=""+B.key),B)QU.call(B,g)&&!gU.hasOwnProperty(g)&&(E[g]=B[g]);var e=arguments.length-2;if(e===1)E.children=Q;else if(1<e){for(var t=Array(e),o=0;o<e;o++)t[o]=arguments[o+2];E.children=t}if(A&&A.defaultProps)for(g in e=A.defaultProps,e)E[g]===void 0&&(E[g]=e[g]);return{$$typeof:tw,type:A,key:C,ref:n,props:E,_owner:ks.current}}function Zf(A,B){return{$$typeof:tw,type:A.type,key:B,ref:A.ref,props:A.props,_owner:A._owner}}function ys(A){return typeof A=="object"&&A!==null&&A.$$typeof===tw}function Xf(A){var B={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(Q){return B[Q]})}var Tc=/\/+/g;function Ga(A,B){return typeof A=="object"&&A!==null&&A.key!=null?Xf(""+A.key):B.toString(36)}function ei(A,B,Q,g,E){var C=typeof A;(C==="undefined"||C==="boolean")&&(A=null);var n=!1;if(A===null)n=!0;else switch(C){case"string":case"number":n=!0;break;case"object":switch(A.$$typeof){case tw:case uf:n=!0}}if(n)return n=A,E=E(n),A=g===""?"."+Ga(n,0):g,xc(E)?(Q="",A!=null&&(Q=A.replace(Tc,"$&/")+"/"),ei(E,B,Q,"",function(o){return o})):E!=null&&(ys(E)&&(E=Zf(E,Q+(!E.key||n&&n.key===E.key?"":(""+E.key).replace(Tc,"$&/")+"/")+A)),B.push(E)),1;if(n=0,g=g===""?".":g+":",xc(A))for(var e=0;e<A.length;e++){C=A[e];var t=g+Ga(C,e);n+=ei(C,B,Q,t,E)}else if(t=yf(A),typeof t=="function")for(A=t.call(A),e=0;!(C=A.next()).done;)C=C.value,t=g+Ga(C,e++),n+=ei(C,B,Q,t,E);else if(C==="object")throw B=String(A),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return n}function Xw(A,B,Q){if(A==null)return A;var g=[],E=0;return ei(A,g,"","",function(C){return B.call(Q,C,E++)}),g}function Lf(A){if(A._status===-1){var B=A._result;B=B(),B.then(function(Q){(A._status===0||A._status===-1)&&(A._status=1,A._result=Q)},function(Q){(A._status===0||A._status===-1)&&(A._status=2,A._result=Q)}),A._status===-1&&(A._status=0,A._result=B)}if(A._status===1)return A._result.default;throw A._result}var FQ={current:null},Ii={transition:null},Sf={ReactCurrentDispatcher:FQ,ReactCurrentBatchConfig:Ii,ReactCurrentOwner:ks};pA.Children={map:Xw,forEach:function(A,B,Q){Xw(A,function(){B.apply(this,arguments)},Q)},count:function(A){var B=0;return Xw(A,function(){B++}),B},toArray:function(A){return Xw(A,function(B){return B})||[]},only:function(A){if(!ys(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};pA.Component=lI;pA.Fragment=Rf;pA.Profiler=Yf;pA.PureComponent=bs;pA.StrictMode=hf;pA.Suspense=bf;pA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sf;pA.cloneElement=function(A,B,Q){if(A==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+A+".");var g=$r({},A.props),E=A.key,C=A.ref,n=A._owner;if(B!=null){if(B.ref!==void 0&&(C=B.ref,n=ks.current),B.key!==void 0&&(E=""+B.key),A.type&&A.type.defaultProps)var e=A.type.defaultProps;for(t in B)QU.call(B,t)&&!gU.hasOwnProperty(t)&&(g[t]=B[t]===void 0&&e!==void 0?e[t]:B[t])}var t=arguments.length-2;if(t===1)g.children=Q;else if(1<t){e=Array(t);for(var o=0;o<t;o++)e[o]=arguments[o+2];g.children=e}return{$$typeof:tw,type:A.type,key:E,ref:C,props:g,_owner:n}};pA.createContext=function(A){return A={$$typeof:pf,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},A.Provider={$$typeof:Nf,_context:A},A.Consumer=A};pA.createElement=EU;pA.createFactory=function(A){var B=EU.bind(null,A);return B.type=A,B};pA.createRef=function(){return{current:null}};pA.forwardRef=function(A){return{$$typeof:Jf,render:A}};pA.isValidElement=ys;pA.lazy=function(A){return{$$typeof:kf,_payload:{_status:-1,_result:A},_init:Lf}};pA.memo=function(A,B){return{$$typeof:mf,type:A,compare:B===void 0?null:B}};pA.startTransition=function(A){var B=Ii.transition;Ii.transition={};try{A()}finally{Ii.transition=B}};pA.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};pA.useCallback=function(A,B){return FQ.current.useCallback(A,B)};pA.useContext=function(A){return FQ.current.useContext(A)};pA.useDebugValue=function(){};pA.useDeferredValue=function(A){return FQ.current.useDeferredValue(A)};pA.useEffect=function(A,B){return FQ.current.useEffect(A,B)};pA.useId=function(){return FQ.current.useId()};pA.useImperativeHandle=function(A,B,Q){return FQ.current.useImperativeHandle(A,B,Q)};pA.useInsertionEffect=function(A,B){return FQ.current.useInsertionEffect(A,B)};pA.useLayoutEffect=function(A,B){return FQ.current.useLayoutEffect(A,B)};pA.useMemo=function(A,B){return FQ.current.useMemo(A,B)};pA.useReducer=function(A,B,Q){return FQ.current.useReducer(A,B,Q)};pA.useRef=function(A){return FQ.current.useRef(A)};pA.useState=function(A){return FQ.current.useState(A)};pA.useSyncExternalStore=function(A,B,Q){return FQ.current.useSyncExternalStore(A,B,Q)};pA.useTransition=function(){return FQ.current.useTransition()};pA.version="18.2.0";qr.exports=pA;var T=qr.exports;const Xg=Js(T),Oc=ff({__proto__:null,default:Xg},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hf=T,Wf=Symbol.for("react.element"),vf=Symbol.for("react.fragment"),Vf=Object.prototype.hasOwnProperty,xf=Hf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Tf={key:!0,ref:!0,__self:!0,__source:!0};function CU(A,B,Q){var g,E={},C=null,n=null;Q!==void 0&&(C=""+Q),B.key!==void 0&&(C=""+B.key),B.ref!==void 0&&(n=B.ref);for(g in B)Vf.call(B,g)&&!Tf.hasOwnProperty(g)&&(E[g]=B[g]);if(A&&A.defaultProps)for(g in B=A.defaultProps,B)E[g]===void 0&&(E[g]=B[g]);return{$$typeof:Wf,type:A,key:C,ref:n,props:E,_owner:xf.current}}$i.Fragment=vf;$i.jsx=CU;$i.jsxs=CU;Pr.exports=$i;var FA=Pr.exports,ll={},nU={exports:{}},KQ={},eU={exports:{}},IU={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(A){function B(z,wA){var iA=z.length;z.push(wA);A:for(;0<iA;){var JA=iA-1>>>1,KA=z[JA];if(0<E(KA,wA))z[JA]=wA,z[iA]=KA,iA=JA;else break A}}function Q(z){return z.length===0?null:z[0]}function g(z){if(z.length===0)return null;var wA=z[0],iA=z.pop();if(iA!==wA){z[0]=iA;A:for(var JA=0,KA=z.length,bQ=KA>>>1;JA<bQ;){var jA=2*(JA+1)-1,BQ=z[jA],gA=jA+1,AA=z[gA];if(0>E(BQ,iA))gA<KA&&0>E(AA,BQ)?(z[JA]=AA,z[gA]=iA,JA=gA):(z[JA]=BQ,z[jA]=iA,JA=jA);else if(gA<KA&&0>E(AA,iA))z[JA]=AA,z[gA]=iA,JA=gA;else break A}}return wA}function E(z,wA){var iA=z.sortIndex-wA.sortIndex;return iA!==0?iA:z.id-wA.id}if(typeof performance=="object"&&typeof performance.now=="function"){var C=performance;A.unstable_now=function(){return C.now()}}else{var n=Date,e=n.now();A.unstable_now=function(){return n.now()-e}}var t=[],o=[],c=1,D=null,G=3,h=!1,N=!1,U=!1,k=typeof setTimeout=="function"?setTimeout:null,r=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Y(z){for(var wA=Q(o);wA!==null;){if(wA.callback===null)g(o);else if(wA.startTime<=z)g(o),wA.sortIndex=wA.expirationTime,B(t,wA);else break;wA=Q(o)}}function y(z){if(U=!1,Y(z),!N)if(Q(t)!==null)N=!0,VA(Z);else{var wA=Q(o);wA!==null&&lB(y,wA.startTime-z)}}function Z(z,wA){N=!1,U&&(U=!1,r(W),W=-1),h=!0;var iA=G;try{for(Y(wA),D=Q(t);D!==null&&(!(D.expirationTime>wA)||z&&!rA());){var JA=D.callback;if(typeof JA=="function"){D.callback=null,G=D.priorityLevel;var KA=JA(D.expirationTime<=wA);wA=A.unstable_now(),typeof KA=="function"?D.callback=KA:D===Q(t)&&g(t),Y(wA)}else g(t);D=Q(t)}if(D!==null)var bQ=!0;else{var jA=Q(o);jA!==null&&lB(y,jA.startTime-wA),bQ=!1}return bQ}finally{D=null,G=iA,h=!1}}var H=!1,L=null,W=-1,O=5,j=-1;function rA(){return!(A.unstable_now()-j<O)}function cA(){if(L!==null){var z=A.unstable_now();j=z;var wA=!0;try{wA=L(!0,z)}finally{wA?LA():(H=!1,L=null)}}else H=!1}var LA;if(typeof d=="function")LA=function(){d(cA)};else if(typeof MessageChannel<"u"){var vA=new MessageChannel,RA=vA.port2;vA.port1.onmessage=cA,LA=function(){RA.postMessage(null)}}else LA=function(){k(cA,0)};function VA(z){L=z,H||(H=!0,LA())}function lB(z,wA){W=k(function(){z(A.unstable_now())},wA)}A.unstable_IdlePriority=5,A.unstable_ImmediatePriority=1,A.unstable_LowPriority=4,A.unstable_NormalPriority=3,A.unstable_Profiling=null,A.unstable_UserBlockingPriority=2,A.unstable_cancelCallback=function(z){z.callback=null},A.unstable_continueExecution=function(){N||h||(N=!0,VA(Z))},A.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<z?Math.floor(1e3/z):5},A.unstable_getCurrentPriorityLevel=function(){return G},A.unstable_getFirstCallbackNode=function(){return Q(t)},A.unstable_next=function(z){switch(G){case 1:case 2:case 3:var wA=3;break;default:wA=G}var iA=G;G=wA;try{return z()}finally{G=iA}},A.unstable_pauseExecution=function(){},A.unstable_requestPaint=function(){},A.unstable_runWithPriority=function(z,wA){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var iA=G;G=z;try{return wA()}finally{G=iA}},A.unstable_scheduleCallback=function(z,wA,iA){var JA=A.unstable_now();switch(typeof iA=="object"&&iA!==null?(iA=iA.delay,iA=typeof iA=="number"&&0<iA?JA+iA:JA):iA=JA,z){case 1:var KA=-1;break;case 2:KA=250;break;case 5:KA=1073741823;break;case 4:KA=1e4;break;default:KA=5e3}return KA=iA+KA,z={id:c++,callback:wA,priorityLevel:z,startTime:iA,expirationTime:KA,sortIndex:-1},iA>JA?(z.sortIndex=iA,B(o,z),Q(t)===null&&z===Q(o)&&(U?(r(W),W=-1):U=!0,lB(y,iA-JA))):(z.sortIndex=KA,B(t,z),N||h||(N=!0,VA(Z))),z},A.unstable_shouldYield=rA,A.unstable_wrapCallback=function(z){var wA=G;return function(){var iA=G;G=wA;try{return z.apply(this,arguments)}finally{G=iA}}}})(IU);eU.exports=IU;var Of=eU.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tU=T,zQ=Of;function x(A){for(var B="https://reactjs.org/docs/error-decoder.html?invariant="+A,Q=1;Q<arguments.length;Q++)B+="&args[]="+encodeURIComponent(arguments[Q]);return"Minified React error #"+A+"; visit "+B+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wU=new Set,Lt={};function Nn(A,B){nI(A,B),nI(A+"Capture",B)}function nI(A,B){for(Lt[A]=B,A=0;A<B.length;A++)wU.add(B[A])}var LE=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sl=Object.prototype.hasOwnProperty,zf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zc={},Kc={};function Kf(A){return sl.call(Kc,A)?!0:sl.call(zc,A)?!1:zf.test(A)?Kc[A]=!0:(zc[A]=!0,!1)}function jf(A,B,Q,g){if(Q!==null&&Q.type===0)return!1;switch(typeof B){case"function":case"symbol":return!0;case"boolean":return g?!1:Q!==null?!Q.acceptsBooleans:(A=A.toLowerCase().slice(0,5),A!=="data-"&&A!=="aria-");default:return!1}}function Pf(A,B,Q,g){if(B===null||typeof B>"u"||jf(A,B,Q,g))return!0;if(g)return!1;if(Q!==null)switch(Q.type){case 3:return!B;case 4:return B===!1;case 5:return isNaN(B);case 6:return isNaN(B)||1>B}return!1}function cQ(A,B,Q,g,E,C,n){this.acceptsBooleans=B===2||B===3||B===4,this.attributeName=g,this.attributeNamespace=E,this.mustUseProperty=Q,this.propertyName=A,this.type=B,this.sanitizeURL=C,this.removeEmptyString=n}var AQ={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(A){AQ[A]=new cQ(A,0,!1,A,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(A){var B=A[0];AQ[B]=new cQ(B,1,!1,A[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(A){AQ[A]=new cQ(A,2,!1,A.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(A){AQ[A]=new cQ(A,2,!1,A,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(A){AQ[A]=new cQ(A,3,!1,A.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(A){AQ[A]=new cQ(A,3,!0,A,null,!1,!1)});["capture","download"].forEach(function(A){AQ[A]=new cQ(A,4,!1,A,null,!1,!1)});["cols","rows","size","span"].forEach(function(A){AQ[A]=new cQ(A,6,!1,A,null,!1,!1)});["rowSpan","start"].forEach(function(A){AQ[A]=new cQ(A,5,!1,A.toLowerCase(),null,!1,!1)});var Zs=/[\-:]([a-z])/g;function Xs(A){return A[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(A){var B=A.replace(Zs,Xs);AQ[B]=new cQ(B,1,!1,A,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(A){var B=A.replace(Zs,Xs);AQ[B]=new cQ(B,1,!1,A,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(A){var B=A.replace(Zs,Xs);AQ[B]=new cQ(B,1,!1,A,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(A){AQ[A]=new cQ(A,1,!1,A.toLowerCase(),null,!1,!1)});AQ.xlinkHref=new cQ("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(A){AQ[A]=new cQ(A,1,!1,A.toLowerCase(),null,!0,!0)});function Ls(A,B,Q,g){var E=AQ.hasOwnProperty(B)?AQ[B]:null;(E!==null?E.type!==0:g||!(2<B.length)||B[0]!=="o"&&B[0]!=="O"||B[1]!=="n"&&B[1]!=="N")&&(Pf(B,Q,E,g)&&(Q=null),g||E===null?Kf(B)&&(Q===null?A.removeAttribute(B):A.setAttribute(B,""+Q)):E.mustUseProperty?A[E.propertyName]=Q===null?E.type===3?!1:"":Q:(B=E.attributeName,g=E.attributeNamespace,Q===null?A.removeAttribute(B):(E=E.type,Q=E===3||E===4&&Q===!0?"":""+Q,g?A.setAttributeNS(g,B,Q):A.setAttribute(B,Q))))}var vE=tU.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Lw=Symbol.for("react.element"),Xe=Symbol.for("react.portal"),Le=Symbol.for("react.fragment"),Ss=Symbol.for("react.strict_mode"),Fl=Symbol.for("react.profiler"),iU=Symbol.for("react.provider"),oU=Symbol.for("react.context"),Hs=Symbol.for("react.forward_ref"),cl=Symbol.for("react.suspense"),Dl=Symbol.for("react.suspense_list"),Ws=Symbol.for("react.memo"),rC=Symbol.for("react.lazy"),aU=Symbol.for("react.offscreen"),jc=Symbol.iterator;function et(A){return A===null||typeof A!="object"?null:(A=jc&&A[jc]||A["@@iterator"],typeof A=="function"?A:null)}var aB=Object.assign,ua;function rt(A){if(ua===void 0)try{throw Error()}catch(Q){var B=Q.stack.trim().match(/\n( *(at )?)/);ua=B&&B[1]||""}return`
`+ua+A}var Ra=!1;function ha(A,B){if(!A||Ra)return"";Ra=!0;var Q=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(B)if(B=function(){throw Error()},Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(o){var g=o}Reflect.construct(A,[],B)}else{try{B.call()}catch(o){g=o}A.call(B.prototype)}else{try{throw Error()}catch(o){g=o}A()}}catch(o){if(o&&g&&typeof o.stack=="string"){for(var E=o.stack.split(`
`),C=g.stack.split(`
`),n=E.length-1,e=C.length-1;1<=n&&0<=e&&E[n]!==C[e];)e--;for(;1<=n&&0<=e;n--,e--)if(E[n]!==C[e]){if(n!==1||e!==1)do if(n--,e--,0>e||E[n]!==C[e]){var t=`
`+E[n].replace(" at new "," at ");return A.displayName&&t.includes("<anonymous>")&&(t=t.replace("<anonymous>",A.displayName)),t}while(1<=n&&0<=e);break}}}finally{Ra=!1,Error.prepareStackTrace=Q}return(A=A?A.displayName||A.name:"")?rt(A):""}function qf(A){switch(A.tag){case 5:return rt(A.type);case 16:return rt("Lazy");case 13:return rt("Suspense");case 19:return rt("SuspenseList");case 0:case 2:case 15:return A=ha(A.type,!1),A;case 11:return A=ha(A.type.render,!1),A;case 1:return A=ha(A.type,!0),A;default:return""}}function rl(A){if(A==null)return null;if(typeof A=="function")return A.displayName||A.name||null;if(typeof A=="string")return A;switch(A){case Le:return"Fragment";case Xe:return"Portal";case Fl:return"Profiler";case Ss:return"StrictMode";case cl:return"Suspense";case Dl:return"SuspenseList"}if(typeof A=="object")switch(A.$$typeof){case oU:return(A.displayName||"Context")+".Consumer";case iU:return(A._context.displayName||"Context")+".Provider";case Hs:var B=A.render;return A=A.displayName,A||(A=B.displayName||B.name||"",A=A!==""?"ForwardRef("+A+")":"ForwardRef"),A;case Ws:return B=A.displayName||null,B!==null?B:rl(A.type)||"Memo";case rC:B=A._payload,A=A._init;try{return rl(A(B))}catch{}}return null}function _f(A){var B=A.type;switch(A.tag){case 24:return"Cache";case 9:return(B.displayName||"Context")+".Consumer";case 10:return(B._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return A=B.render,A=A.displayName||A.name||"",B.displayName||(A!==""?"ForwardRef("+A+")":"ForwardRef");case 7:return"Fragment";case 5:return B;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rl(B);case 8:return B===Ss?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof B=="function")return B.displayName||B.name||null;if(typeof B=="string")return B}return null}function ZC(A){switch(typeof A){case"boolean":case"number":case"string":case"undefined":return A;case"object":return A;default:return""}}function lU(A){var B=A.type;return(A=A.nodeName)&&A.toLowerCase()==="input"&&(B==="checkbox"||B==="radio")}function $f(A){var B=lU(A)?"checked":"value",Q=Object.getOwnPropertyDescriptor(A.constructor.prototype,B),g=""+A[B];if(!A.hasOwnProperty(B)&&typeof Q<"u"&&typeof Q.get=="function"&&typeof Q.set=="function"){var E=Q.get,C=Q.set;return Object.defineProperty(A,B,{configurable:!0,get:function(){return E.call(this)},set:function(n){g=""+n,C.call(this,n)}}),Object.defineProperty(A,B,{enumerable:Q.enumerable}),{getValue:function(){return g},setValue:function(n){g=""+n},stopTracking:function(){A._valueTracker=null,delete A[B]}}}}function Sw(A){A._valueTracker||(A._valueTracker=$f(A))}function sU(A){if(!A)return!1;var B=A._valueTracker;if(!B)return!0;var Q=B.getValue(),g="";return A&&(g=lU(A)?A.checked?"true":"false":A.value),A=g,A!==Q?(B.setValue(A),!0):!1}function Gi(A){if(A=A||(typeof document<"u"?document:void 0),typeof A>"u")return null;try{return A.activeElement||A.body}catch{return A.body}}function Ul(A,B){var Q=B.checked;return aB({},B,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:Q??A._wrapperState.initialChecked})}function Pc(A,B){var Q=B.defaultValue==null?"":B.defaultValue,g=B.checked!=null?B.checked:B.defaultChecked;Q=ZC(B.value!=null?B.value:Q),A._wrapperState={initialChecked:g,initialValue:Q,controlled:B.type==="checkbox"||B.type==="radio"?B.checked!=null:B.value!=null}}function FU(A,B){B=B.checked,B!=null&&Ls(A,"checked",B,!1)}function Ml(A,B){FU(A,B);var Q=ZC(B.value),g=B.type;if(Q!=null)g==="number"?(Q===0&&A.value===""||A.value!=Q)&&(A.value=""+Q):A.value!==""+Q&&(A.value=""+Q);else if(g==="submit"||g==="reset"){A.removeAttribute("value");return}B.hasOwnProperty("value")?dl(A,B.type,Q):B.hasOwnProperty("defaultValue")&&dl(A,B.type,ZC(B.defaultValue)),B.checked==null&&B.defaultChecked!=null&&(A.defaultChecked=!!B.defaultChecked)}function qc(A,B,Q){if(B.hasOwnProperty("value")||B.hasOwnProperty("defaultValue")){var g=B.type;if(!(g!=="submit"&&g!=="reset"||B.value!==void 0&&B.value!==null))return;B=""+A._wrapperState.initialValue,Q||B===A.value||(A.value=B),A.defaultValue=B}Q=A.name,Q!==""&&(A.name=""),A.defaultChecked=!!A._wrapperState.initialChecked,Q!==""&&(A.name=Q)}function dl(A,B,Q){(B!=="number"||Gi(A.ownerDocument)!==A)&&(Q==null?A.defaultValue=""+A._wrapperState.initialValue:A.defaultValue!==""+Q&&(A.defaultValue=""+Q))}var Ut=Array.isArray;function qe(A,B,Q,g){if(A=A.options,B){B={};for(var E=0;E<Q.length;E++)B["$"+Q[E]]=!0;for(Q=0;Q<A.length;Q++)E=B.hasOwnProperty("$"+A[Q].value),A[Q].selected!==E&&(A[Q].selected=E),E&&g&&(A[Q].defaultSelected=!0)}else{for(Q=""+ZC(Q),B=null,E=0;E<A.length;E++){if(A[E].value===Q){A[E].selected=!0,g&&(A[E].defaultSelected=!0);return}B!==null||A[E].disabled||(B=A[E])}B!==null&&(B.selected=!0)}}function fl(A,B){if(B.dangerouslySetInnerHTML!=null)throw Error(x(91));return aB({},B,{value:void 0,defaultValue:void 0,children:""+A._wrapperState.initialValue})}function _c(A,B){var Q=B.value;if(Q==null){if(Q=B.children,B=B.defaultValue,Q!=null){if(B!=null)throw Error(x(92));if(Ut(Q)){if(1<Q.length)throw Error(x(93));Q=Q[0]}B=Q}B==null&&(B=""),Q=B}A._wrapperState={initialValue:ZC(Q)}}function cU(A,B){var Q=ZC(B.value),g=ZC(B.defaultValue);Q!=null&&(Q=""+Q,Q!==A.value&&(A.value=Q),B.defaultValue==null&&A.defaultValue!==Q&&(A.defaultValue=Q)),g!=null&&(A.defaultValue=""+g)}function $c(A){var B=A.textContent;B===A._wrapperState.initialValue&&B!==""&&B!==null&&(A.value=B)}function DU(A){switch(A){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gl(A,B){return A==null||A==="http://www.w3.org/1999/xhtml"?DU(B):A==="http://www.w3.org/2000/svg"&&B==="foreignObject"?"http://www.w3.org/1999/xhtml":A}var Hw,rU=function(A){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(B,Q,g,E){MSApp.execUnsafeLocalFunction(function(){return A(B,Q,g,E)})}:A}(function(A,B){if(A.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in A)A.innerHTML=B;else{for(Hw=Hw||document.createElement("div"),Hw.innerHTML="<svg>"+B.valueOf().toString()+"</svg>",B=Hw.firstChild;A.firstChild;)A.removeChild(A.firstChild);for(;B.firstChild;)A.appendChild(B.firstChild)}});function St(A,B){if(B){var Q=A.firstChild;if(Q&&Q===A.lastChild&&Q.nodeType===3){Q.nodeValue=B;return}}A.textContent=B}var Rt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},AG=["Webkit","ms","Moz","O"];Object.keys(Rt).forEach(function(A){AG.forEach(function(B){B=B+A.charAt(0).toUpperCase()+A.substring(1),Rt[B]=Rt[A]})});function UU(A,B,Q){return B==null||typeof B=="boolean"||B===""?"":Q||typeof B!="number"||B===0||Rt.hasOwnProperty(A)&&Rt[A]?(""+B).trim():B+"px"}function MU(A,B){A=A.style;for(var Q in B)if(B.hasOwnProperty(Q)){var g=Q.indexOf("--")===0,E=UU(Q,B[Q],g);Q==="float"&&(Q="cssFloat"),g?A.setProperty(Q,E):A[Q]=E}}var BG=aB({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ul(A,B){if(B){if(BG[A]&&(B.children!=null||B.dangerouslySetInnerHTML!=null))throw Error(x(137,A));if(B.dangerouslySetInnerHTML!=null){if(B.children!=null)throw Error(x(60));if(typeof B.dangerouslySetInnerHTML!="object"||!("__html"in B.dangerouslySetInnerHTML))throw Error(x(61))}if(B.style!=null&&typeof B.style!="object")throw Error(x(62))}}function Rl(A,B){if(A.indexOf("-")===-1)return typeof B.is=="string";switch(A){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hl=null;function vs(A){return A=A.target||A.srcElement||window,A.correspondingUseElement&&(A=A.correspondingUseElement),A.nodeType===3?A.parentNode:A}var Yl=null,_e=null,$e=null;function AD(A){if(A=ow(A)){if(typeof Yl!="function")throw Error(x(280));var B=A.stateNode;B&&(B=Eo(B),Yl(A.stateNode,A.type,B))}}function dU(A){_e?$e?$e.push(A):$e=[A]:_e=A}function fU(){if(_e){var A=_e,B=$e;if($e=_e=null,AD(A),B)for(A=0;A<B.length;A++)AD(B[A])}}function GU(A,B){return A(B)}function uU(){}var Ya=!1;function RU(A,B,Q){if(Ya)return A(B,Q);Ya=!0;try{return GU(A,B,Q)}finally{Ya=!1,(_e!==null||$e!==null)&&(uU(),fU())}}function Ht(A,B){var Q=A.stateNode;if(Q===null)return null;var g=Eo(Q);if(g===null)return null;Q=g[B];A:switch(B){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(g=!g.disabled)||(A=A.type,g=!(A==="button"||A==="input"||A==="select"||A==="textarea")),A=!g;break A;default:A=!1}if(A)return null;if(Q&&typeof Q!="function")throw Error(x(231,B,typeof Q));return Q}var Nl=!1;if(LE)try{var It={};Object.defineProperty(It,"passive",{get:function(){Nl=!0}}),window.addEventListener("test",It,It),window.removeEventListener("test",It,It)}catch{Nl=!1}function QG(A,B,Q,g,E,C,n,e,t){var o=Array.prototype.slice.call(arguments,3);try{B.apply(Q,o)}catch(c){this.onError(c)}}var ht=!1,ui=null,Ri=!1,pl=null,gG={onError:function(A){ht=!0,ui=A}};function EG(A,B,Q,g,E,C,n,e,t){ht=!1,ui=null,QG.apply(gG,arguments)}function CG(A,B,Q,g,E,C,n,e,t){if(EG.apply(this,arguments),ht){if(ht){var o=ui;ht=!1,ui=null}else throw Error(x(198));Ri||(Ri=!0,pl=o)}}function pn(A){var B=A,Q=A;if(A.alternate)for(;B.return;)B=B.return;else{A=B;do B=A,B.flags&4098&&(Q=B.return),A=B.return;while(A)}return B.tag===3?Q:null}function hU(A){if(A.tag===13){var B=A.memoizedState;if(B===null&&(A=A.alternate,A!==null&&(B=A.memoizedState)),B!==null)return B.dehydrated}return null}function BD(A){if(pn(A)!==A)throw Error(x(188))}function nG(A){var B=A.alternate;if(!B){if(B=pn(A),B===null)throw Error(x(188));return B!==A?null:A}for(var Q=A,g=B;;){var E=Q.return;if(E===null)break;var C=E.alternate;if(C===null){if(g=E.return,g!==null){Q=g;continue}break}if(E.child===C.child){for(C=E.child;C;){if(C===Q)return BD(E),A;if(C===g)return BD(E),B;C=C.sibling}throw Error(x(188))}if(Q.return!==g.return)Q=E,g=C;else{for(var n=!1,e=E.child;e;){if(e===Q){n=!0,Q=E,g=C;break}if(e===g){n=!0,g=E,Q=C;break}e=e.sibling}if(!n){for(e=C.child;e;){if(e===Q){n=!0,Q=C,g=E;break}if(e===g){n=!0,g=C,Q=E;break}e=e.sibling}if(!n)throw Error(x(189))}}if(Q.alternate!==g)throw Error(x(190))}if(Q.tag!==3)throw Error(x(188));return Q.stateNode.current===Q?A:B}function YU(A){return A=nG(A),A!==null?NU(A):null}function NU(A){if(A.tag===5||A.tag===6)return A;for(A=A.child;A!==null;){var B=NU(A);if(B!==null)return B;A=A.sibling}return null}var pU=zQ.unstable_scheduleCallback,QD=zQ.unstable_cancelCallback,eG=zQ.unstable_shouldYield,IG=zQ.unstable_requestPaint,GB=zQ.unstable_now,tG=zQ.unstable_getCurrentPriorityLevel,Vs=zQ.unstable_ImmediatePriority,JU=zQ.unstable_UserBlockingPriority,hi=zQ.unstable_NormalPriority,wG=zQ.unstable_LowPriority,bU=zQ.unstable_IdlePriority,Ao=null,EE=null;function iG(A){if(EE&&typeof EE.onCommitFiberRoot=="function")try{EE.onCommitFiberRoot(Ao,A,void 0,(A.current.flags&128)===128)}catch{}}var Lg=Math.clz32?Math.clz32:lG,oG=Math.log,aG=Math.LN2;function lG(A){return A>>>=0,A===0?32:31-(oG(A)/aG|0)|0}var Ww=64,vw=4194304;function Mt(A){switch(A&-A){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return A&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return A&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return A}}function Yi(A,B){var Q=A.pendingLanes;if(Q===0)return 0;var g=0,E=A.suspendedLanes,C=A.pingedLanes,n=Q&268435455;if(n!==0){var e=n&~E;e!==0?g=Mt(e):(C&=n,C!==0&&(g=Mt(C)))}else n=Q&~E,n!==0?g=Mt(n):C!==0&&(g=Mt(C));if(g===0)return 0;if(B!==0&&B!==g&&!(B&E)&&(E=g&-g,C=B&-B,E>=C||E===16&&(C&4194240)!==0))return B;if(g&4&&(g|=Q&16),B=A.entangledLanes,B!==0)for(A=A.entanglements,B&=g;0<B;)Q=31-Lg(B),E=1<<Q,g|=A[Q],B&=~E;return g}function sG(A,B){switch(A){case 1:case 2:case 4:return B+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return B+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function FG(A,B){for(var Q=A.suspendedLanes,g=A.pingedLanes,E=A.expirationTimes,C=A.pendingLanes;0<C;){var n=31-Lg(C),e=1<<n,t=E[n];t===-1?(!(e&Q)||e&g)&&(E[n]=sG(e,B)):t<=B&&(A.expiredLanes|=e),C&=~e}}function Jl(A){return A=A.pendingLanes&-1073741825,A!==0?A:A&1073741824?1073741824:0}function mU(){var A=Ww;return Ww<<=1,!(Ww&4194240)&&(Ww=64),A}function Na(A){for(var B=[],Q=0;31>Q;Q++)B.push(A);return B}function ww(A,B,Q){A.pendingLanes|=B,B!==536870912&&(A.suspendedLanes=0,A.pingedLanes=0),A=A.eventTimes,B=31-Lg(B),A[B]=Q}function cG(A,B){var Q=A.pendingLanes&~B;A.pendingLanes=B,A.suspendedLanes=0,A.pingedLanes=0,A.expiredLanes&=B,A.mutableReadLanes&=B,A.entangledLanes&=B,B=A.entanglements;var g=A.eventTimes;for(A=A.expirationTimes;0<Q;){var E=31-Lg(Q),C=1<<E;B[E]=0,g[E]=-1,A[E]=-1,Q&=~C}}function xs(A,B){var Q=A.entangledLanes|=B;for(A=A.entanglements;Q;){var g=31-Lg(Q),E=1<<g;E&B|A[g]&B&&(A[g]|=B),Q&=~E}}var SA=0;function kU(A){return A&=-A,1<A?4<A?A&268435455?16:536870912:4:1}var yU,Ts,ZU,XU,LU,bl=!1,Vw=[],hC=null,YC=null,NC=null,Wt=new Map,vt=new Map,MC=[],DG="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gD(A,B){switch(A){case"focusin":case"focusout":hC=null;break;case"dragenter":case"dragleave":YC=null;break;case"mouseover":case"mouseout":NC=null;break;case"pointerover":case"pointerout":Wt.delete(B.pointerId);break;case"gotpointercapture":case"lostpointercapture":vt.delete(B.pointerId)}}function tt(A,B,Q,g,E,C){return A===null||A.nativeEvent!==C?(A={blockedOn:B,domEventName:Q,eventSystemFlags:g,nativeEvent:C,targetContainers:[E]},B!==null&&(B=ow(B),B!==null&&Ts(B)),A):(A.eventSystemFlags|=g,B=A.targetContainers,E!==null&&B.indexOf(E)===-1&&B.push(E),A)}function rG(A,B,Q,g,E){switch(B){case"focusin":return hC=tt(hC,A,B,Q,g,E),!0;case"dragenter":return YC=tt(YC,A,B,Q,g,E),!0;case"mouseover":return NC=tt(NC,A,B,Q,g,E),!0;case"pointerover":var C=E.pointerId;return Wt.set(C,tt(Wt.get(C)||null,A,B,Q,g,E)),!0;case"gotpointercapture":return C=E.pointerId,vt.set(C,tt(vt.get(C)||null,A,B,Q,g,E)),!0}return!1}function SU(A){var B=cn(A.target);if(B!==null){var Q=pn(B);if(Q!==null){if(B=Q.tag,B===13){if(B=hU(Q),B!==null){A.blockedOn=B,LU(A.priority,function(){ZU(Q)});return}}else if(B===3&&Q.stateNode.current.memoizedState.isDehydrated){A.blockedOn=Q.tag===3?Q.stateNode.containerInfo:null;return}}}A.blockedOn=null}function ti(A){if(A.blockedOn!==null)return!1;for(var B=A.targetContainers;0<B.length;){var Q=ml(A.domEventName,A.eventSystemFlags,B[0],A.nativeEvent);if(Q===null){Q=A.nativeEvent;var g=new Q.constructor(Q.type,Q);hl=g,Q.target.dispatchEvent(g),hl=null}else return B=ow(Q),B!==null&&Ts(B),A.blockedOn=Q,!1;B.shift()}return!0}function ED(A,B,Q){ti(A)&&Q.delete(B)}function UG(){bl=!1,hC!==null&&ti(hC)&&(hC=null),YC!==null&&ti(YC)&&(YC=null),NC!==null&&ti(NC)&&(NC=null),Wt.forEach(ED),vt.forEach(ED)}function wt(A,B){A.blockedOn===B&&(A.blockedOn=null,bl||(bl=!0,zQ.unstable_scheduleCallback(zQ.unstable_NormalPriority,UG)))}function Vt(A){function B(E){return wt(E,A)}if(0<Vw.length){wt(Vw[0],A);for(var Q=1;Q<Vw.length;Q++){var g=Vw[Q];g.blockedOn===A&&(g.blockedOn=null)}}for(hC!==null&&wt(hC,A),YC!==null&&wt(YC,A),NC!==null&&wt(NC,A),Wt.forEach(B),vt.forEach(B),Q=0;Q<MC.length;Q++)g=MC[Q],g.blockedOn===A&&(g.blockedOn=null);for(;0<MC.length&&(Q=MC[0],Q.blockedOn===null);)SU(Q),Q.blockedOn===null&&MC.shift()}var AI=vE.ReactCurrentBatchConfig,Ni=!0;function MG(A,B,Q,g){var E=SA,C=AI.transition;AI.transition=null;try{SA=1,Os(A,B,Q,g)}finally{SA=E,AI.transition=C}}function dG(A,B,Q,g){var E=SA,C=AI.transition;AI.transition=null;try{SA=4,Os(A,B,Q,g)}finally{SA=E,AI.transition=C}}function Os(A,B,Q,g){if(Ni){var E=ml(A,B,Q,g);if(E===null)Sa(A,B,g,pi,Q),gD(A,g);else if(rG(E,A,B,Q,g))g.stopPropagation();else if(gD(A,g),B&4&&-1<DG.indexOf(A)){for(;E!==null;){var C=ow(E);if(C!==null&&yU(C),C=ml(A,B,Q,g),C===null&&Sa(A,B,g,pi,Q),C===E)break;E=C}E!==null&&g.stopPropagation()}else Sa(A,B,g,null,Q)}}var pi=null;function ml(A,B,Q,g){if(pi=null,A=vs(g),A=cn(A),A!==null)if(B=pn(A),B===null)A=null;else if(Q=B.tag,Q===13){if(A=hU(B),A!==null)return A;A=null}else if(Q===3){if(B.stateNode.current.memoizedState.isDehydrated)return B.tag===3?B.stateNode.containerInfo:null;A=null}else B!==A&&(A=null);return pi=A,null}function HU(A){switch(A){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tG()){case Vs:return 1;case JU:return 4;case hi:case wG:return 16;case bU:return 536870912;default:return 16}default:return 16}}var uC=null,zs=null,wi=null;function WU(){if(wi)return wi;var A,B=zs,Q=B.length,g,E="value"in uC?uC.value:uC.textContent,C=E.length;for(A=0;A<Q&&B[A]===E[A];A++);var n=Q-A;for(g=1;g<=n&&B[Q-g]===E[C-g];g++);return wi=E.slice(A,1<g?1-g:void 0)}function ii(A){var B=A.keyCode;return"charCode"in A?(A=A.charCode,A===0&&B===13&&(A=13)):A=B,A===10&&(A=13),32<=A||A===13?A:0}function xw(){return!0}function CD(){return!1}function jQ(A){function B(Q,g,E,C,n){this._reactName=Q,this._targetInst=E,this.type=g,this.nativeEvent=C,this.target=n,this.currentTarget=null;for(var e in A)A.hasOwnProperty(e)&&(Q=A[e],this[e]=Q?Q(C):C[e]);return this.isDefaultPrevented=(C.defaultPrevented!=null?C.defaultPrevented:C.returnValue===!1)?xw:CD,this.isPropagationStopped=CD,this}return aB(B.prototype,{preventDefault:function(){this.defaultPrevented=!0;var Q=this.nativeEvent;Q&&(Q.preventDefault?Q.preventDefault():typeof Q.returnValue!="unknown"&&(Q.returnValue=!1),this.isDefaultPrevented=xw)},stopPropagation:function(){var Q=this.nativeEvent;Q&&(Q.stopPropagation?Q.stopPropagation():typeof Q.cancelBubble!="unknown"&&(Q.cancelBubble=!0),this.isPropagationStopped=xw)},persist:function(){},isPersistent:xw}),B}var sI={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(A){return A.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ks=jQ(sI),iw=aB({},sI,{view:0,detail:0}),fG=jQ(iw),pa,Ja,it,Bo=aB({},iw,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:js,button:0,buttons:0,relatedTarget:function(A){return A.relatedTarget===void 0?A.fromElement===A.srcElement?A.toElement:A.fromElement:A.relatedTarget},movementX:function(A){return"movementX"in A?A.movementX:(A!==it&&(it&&A.type==="mousemove"?(pa=A.screenX-it.screenX,Ja=A.screenY-it.screenY):Ja=pa=0,it=A),pa)},movementY:function(A){return"movementY"in A?A.movementY:Ja}}),nD=jQ(Bo),GG=aB({},Bo,{dataTransfer:0}),uG=jQ(GG),RG=aB({},iw,{relatedTarget:0}),ba=jQ(RG),hG=aB({},sI,{animationName:0,elapsedTime:0,pseudoElement:0}),YG=jQ(hG),NG=aB({},sI,{clipboardData:function(A){return"clipboardData"in A?A.clipboardData:window.clipboardData}}),pG=jQ(NG),JG=aB({},sI,{data:0}),eD=jQ(JG),bG={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mG={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kG={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yG(A){var B=this.nativeEvent;return B.getModifierState?B.getModifierState(A):(A=kG[A])?!!B[A]:!1}function js(){return yG}var ZG=aB({},iw,{key:function(A){if(A.key){var B=bG[A.key]||A.key;if(B!=="Unidentified")return B}return A.type==="keypress"?(A=ii(A),A===13?"Enter":String.fromCharCode(A)):A.type==="keydown"||A.type==="keyup"?mG[A.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:js,charCode:function(A){return A.type==="keypress"?ii(A):0},keyCode:function(A){return A.type==="keydown"||A.type==="keyup"?A.keyCode:0},which:function(A){return A.type==="keypress"?ii(A):A.type==="keydown"||A.type==="keyup"?A.keyCode:0}}),XG=jQ(ZG),LG=aB({},Bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ID=jQ(LG),SG=aB({},iw,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:js}),HG=jQ(SG),WG=aB({},sI,{propertyName:0,elapsedTime:0,pseudoElement:0}),vG=jQ(WG),VG=aB({},Bo,{deltaX:function(A){return"deltaX"in A?A.deltaX:"wheelDeltaX"in A?-A.wheelDeltaX:0},deltaY:function(A){return"deltaY"in A?A.deltaY:"wheelDeltaY"in A?-A.wheelDeltaY:"wheelDelta"in A?-A.wheelDelta:0},deltaZ:0,deltaMode:0}),xG=jQ(VG),TG=[9,13,27,32],Ps=LE&&"CompositionEvent"in window,Yt=null;LE&&"documentMode"in document&&(Yt=document.documentMode);var OG=LE&&"TextEvent"in window&&!Yt,vU=LE&&(!Ps||Yt&&8<Yt&&11>=Yt),tD=" ",wD=!1;function VU(A,B){switch(A){case"keyup":return TG.indexOf(B.keyCode)!==-1;case"keydown":return B.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xU(A){return A=A.detail,typeof A=="object"&&"data"in A?A.data:null}var Se=!1;function zG(A,B){switch(A){case"compositionend":return xU(B);case"keypress":return B.which!==32?null:(wD=!0,tD);case"textInput":return A=B.data,A===tD&&wD?null:A;default:return null}}function KG(A,B){if(Se)return A==="compositionend"||!Ps&&VU(A,B)?(A=WU(),wi=zs=uC=null,Se=!1,A):null;switch(A){case"paste":return null;case"keypress":if(!(B.ctrlKey||B.altKey||B.metaKey)||B.ctrlKey&&B.altKey){if(B.char&&1<B.char.length)return B.char;if(B.which)return String.fromCharCode(B.which)}return null;case"compositionend":return vU&&B.locale!=="ko"?null:B.data;default:return null}}var jG={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function iD(A){var B=A&&A.nodeName&&A.nodeName.toLowerCase();return B==="input"?!!jG[A.type]:B==="textarea"}function TU(A,B,Q,g){dU(g),B=Ji(B,"onChange"),0<B.length&&(Q=new Ks("onChange","change",null,Q,g),A.push({event:Q,listeners:B}))}var Nt=null,xt=null;function PG(A){Q0(A,0)}function Qo(A){var B=ve(A);if(sU(B))return A}function qG(A,B){if(A==="change")return B}var OU=!1;if(LE){var ma;if(LE){var ka="oninput"in document;if(!ka){var oD=document.createElement("div");oD.setAttribute("oninput","return;"),ka=typeof oD.oninput=="function"}ma=ka}else ma=!1;OU=ma&&(!document.documentMode||9<document.documentMode)}function aD(){Nt&&(Nt.detachEvent("onpropertychange",zU),xt=Nt=null)}function zU(A){if(A.propertyName==="value"&&Qo(xt)){var B=[];TU(B,xt,A,vs(A)),RU(PG,B)}}function _G(A,B,Q){A==="focusin"?(aD(),Nt=B,xt=Q,Nt.attachEvent("onpropertychange",zU)):A==="focusout"&&aD()}function $G(A){if(A==="selectionchange"||A==="keyup"||A==="keydown")return Qo(xt)}function Au(A,B){if(A==="click")return Qo(B)}function Bu(A,B){if(A==="input"||A==="change")return Qo(B)}function Qu(A,B){return A===B&&(A!==0||1/A===1/B)||A!==A&&B!==B}var Hg=typeof Object.is=="function"?Object.is:Qu;function Tt(A,B){if(Hg(A,B))return!0;if(typeof A!="object"||A===null||typeof B!="object"||B===null)return!1;var Q=Object.keys(A),g=Object.keys(B);if(Q.length!==g.length)return!1;for(g=0;g<Q.length;g++){var E=Q[g];if(!sl.call(B,E)||!Hg(A[E],B[E]))return!1}return!0}function lD(A){for(;A&&A.firstChild;)A=A.firstChild;return A}function sD(A,B){var Q=lD(A);A=0;for(var g;Q;){if(Q.nodeType===3){if(g=A+Q.textContent.length,A<=B&&g>=B)return{node:Q,offset:B-A};A=g}A:{for(;Q;){if(Q.nextSibling){Q=Q.nextSibling;break A}Q=Q.parentNode}Q=void 0}Q=lD(Q)}}function KU(A,B){return A&&B?A===B?!0:A&&A.nodeType===3?!1:B&&B.nodeType===3?KU(A,B.parentNode):"contains"in A?A.contains(B):A.compareDocumentPosition?!!(A.compareDocumentPosition(B)&16):!1:!1}function jU(){for(var A=window,B=Gi();B instanceof A.HTMLIFrameElement;){try{var Q=typeof B.contentWindow.location.href=="string"}catch{Q=!1}if(Q)A=B.contentWindow;else break;B=Gi(A.document)}return B}function qs(A){var B=A&&A.nodeName&&A.nodeName.toLowerCase();return B&&(B==="input"&&(A.type==="text"||A.type==="search"||A.type==="tel"||A.type==="url"||A.type==="password")||B==="textarea"||A.contentEditable==="true")}function gu(A){var B=jU(),Q=A.focusedElem,g=A.selectionRange;if(B!==Q&&Q&&Q.ownerDocument&&KU(Q.ownerDocument.documentElement,Q)){if(g!==null&&qs(Q)){if(B=g.start,A=g.end,A===void 0&&(A=B),"selectionStart"in Q)Q.selectionStart=B,Q.selectionEnd=Math.min(A,Q.value.length);else if(A=(B=Q.ownerDocument||document)&&B.defaultView||window,A.getSelection){A=A.getSelection();var E=Q.textContent.length,C=Math.min(g.start,E);g=g.end===void 0?C:Math.min(g.end,E),!A.extend&&C>g&&(E=g,g=C,C=E),E=sD(Q,C);var n=sD(Q,g);E&&n&&(A.rangeCount!==1||A.anchorNode!==E.node||A.anchorOffset!==E.offset||A.focusNode!==n.node||A.focusOffset!==n.offset)&&(B=B.createRange(),B.setStart(E.node,E.offset),A.removeAllRanges(),C>g?(A.addRange(B),A.extend(n.node,n.offset)):(B.setEnd(n.node,n.offset),A.addRange(B)))}}for(B=[],A=Q;A=A.parentNode;)A.nodeType===1&&B.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof Q.focus=="function"&&Q.focus(),Q=0;Q<B.length;Q++)A=B[Q],A.element.scrollLeft=A.left,A.element.scrollTop=A.top}}var Eu=LE&&"documentMode"in document&&11>=document.documentMode,He=null,kl=null,pt=null,yl=!1;function FD(A,B,Q){var g=Q.window===Q?Q.document:Q.nodeType===9?Q:Q.ownerDocument;yl||He==null||He!==Gi(g)||(g=He,"selectionStart"in g&&qs(g)?g={start:g.selectionStart,end:g.selectionEnd}:(g=(g.ownerDocument&&g.ownerDocument.defaultView||window).getSelection(),g={anchorNode:g.anchorNode,anchorOffset:g.anchorOffset,focusNode:g.focusNode,focusOffset:g.focusOffset}),pt&&Tt(pt,g)||(pt=g,g=Ji(kl,"onSelect"),0<g.length&&(B=new Ks("onSelect","select",null,B,Q),A.push({event:B,listeners:g}),B.target=He)))}function Tw(A,B){var Q={};return Q[A.toLowerCase()]=B.toLowerCase(),Q["Webkit"+A]="webkit"+B,Q["Moz"+A]="moz"+B,Q}var We={animationend:Tw("Animation","AnimationEnd"),animationiteration:Tw("Animation","AnimationIteration"),animationstart:Tw("Animation","AnimationStart"),transitionend:Tw("Transition","TransitionEnd")},ya={},PU={};LE&&(PU=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function go(A){if(ya[A])return ya[A];if(!We[A])return A;var B=We[A],Q;for(Q in B)if(B.hasOwnProperty(Q)&&Q in PU)return ya[A]=B[Q];return A}var qU=go("animationend"),_U=go("animationiteration"),$U=go("animationstart"),A0=go("transitionend"),B0=new Map,cD="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function HC(A,B){B0.set(A,B),Nn(B,[A])}for(var Za=0;Za<cD.length;Za++){var Xa=cD[Za],Cu=Xa.toLowerCase(),nu=Xa[0].toUpperCase()+Xa.slice(1);HC(Cu,"on"+nu)}HC(qU,"onAnimationEnd");HC(_U,"onAnimationIteration");HC($U,"onAnimationStart");HC("dblclick","onDoubleClick");HC("focusin","onFocus");HC("focusout","onBlur");HC(A0,"onTransitionEnd");nI("onMouseEnter",["mouseout","mouseover"]);nI("onMouseLeave",["mouseout","mouseover"]);nI("onPointerEnter",["pointerout","pointerover"]);nI("onPointerLeave",["pointerout","pointerover"]);Nn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),eu=new Set("cancel close invalid load scroll toggle".split(" ").concat(dt));function DD(A,B,Q){var g=A.type||"unknown-event";A.currentTarget=Q,CG(g,B,void 0,A),A.currentTarget=null}function Q0(A,B){B=(B&4)!==0;for(var Q=0;Q<A.length;Q++){var g=A[Q],E=g.event;g=g.listeners;A:{var C=void 0;if(B)for(var n=g.length-1;0<=n;n--){var e=g[n],t=e.instance,o=e.currentTarget;if(e=e.listener,t!==C&&E.isPropagationStopped())break A;DD(E,e,o),C=t}else for(n=0;n<g.length;n++){if(e=g[n],t=e.instance,o=e.currentTarget,e=e.listener,t!==C&&E.isPropagationStopped())break A;DD(E,e,o),C=t}}}if(Ri)throw A=pl,Ri=!1,pl=null,A}function QB(A,B){var Q=B[Hl];Q===void 0&&(Q=B[Hl]=new Set);var g=A+"__bubble";Q.has(g)||(g0(B,A,2,!1),Q.add(g))}function La(A,B,Q){var g=0;B&&(g|=4),g0(Q,A,g,B)}var Ow="_reactListening"+Math.random().toString(36).slice(2);function Ot(A){if(!A[Ow]){A[Ow]=!0,wU.forEach(function(Q){Q!=="selectionchange"&&(eu.has(Q)||La(Q,!1,A),La(Q,!0,A))});var B=A.nodeType===9?A:A.ownerDocument;B===null||B[Ow]||(B[Ow]=!0,La("selectionchange",!1,B))}}function g0(A,B,Q,g){switch(HU(B)){case 1:var E=MG;break;case 4:E=dG;break;default:E=Os}Q=E.bind(null,B,Q,A),E=void 0,!Nl||B!=="touchstart"&&B!=="touchmove"&&B!=="wheel"||(E=!0),g?E!==void 0?A.addEventListener(B,Q,{capture:!0,passive:E}):A.addEventListener(B,Q,!0):E!==void 0?A.addEventListener(B,Q,{passive:E}):A.addEventListener(B,Q,!1)}function Sa(A,B,Q,g,E){var C=g;if(!(B&1)&&!(B&2)&&g!==null)A:for(;;){if(g===null)return;var n=g.tag;if(n===3||n===4){var e=g.stateNode.containerInfo;if(e===E||e.nodeType===8&&e.parentNode===E)break;if(n===4)for(n=g.return;n!==null;){var t=n.tag;if((t===3||t===4)&&(t=n.stateNode.containerInfo,t===E||t.nodeType===8&&t.parentNode===E))return;n=n.return}for(;e!==null;){if(n=cn(e),n===null)return;if(t=n.tag,t===5||t===6){g=C=n;continue A}e=e.parentNode}}g=g.return}RU(function(){var o=C,c=vs(Q),D=[];A:{var G=B0.get(A);if(G!==void 0){var h=Ks,N=A;switch(A){case"keypress":if(ii(Q)===0)break A;case"keydown":case"keyup":h=XG;break;case"focusin":N="focus",h=ba;break;case"focusout":N="blur",h=ba;break;case"beforeblur":case"afterblur":h=ba;break;case"click":if(Q.button===2)break A;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=nD;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=uG;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=HG;break;case qU:case _U:case $U:h=YG;break;case A0:h=vG;break;case"scroll":h=fG;break;case"wheel":h=xG;break;case"copy":case"cut":case"paste":h=pG;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=ID}var U=(B&4)!==0,k=!U&&A==="scroll",r=U?G!==null?G+"Capture":null:G;U=[];for(var d=o,Y;d!==null;){Y=d;var y=Y.stateNode;if(Y.tag===5&&y!==null&&(Y=y,r!==null&&(y=Ht(d,r),y!=null&&U.push(zt(d,y,Y)))),k)break;d=d.return}0<U.length&&(G=new h(G,N,null,Q,c),D.push({event:G,listeners:U}))}}if(!(B&7)){A:{if(G=A==="mouseover"||A==="pointerover",h=A==="mouseout"||A==="pointerout",G&&Q!==hl&&(N=Q.relatedTarget||Q.fromElement)&&(cn(N)||N[SE]))break A;if((h||G)&&(G=c.window===c?c:(G=c.ownerDocument)?G.defaultView||G.parentWindow:window,h?(N=Q.relatedTarget||Q.toElement,h=o,N=N?cn(N):null,N!==null&&(k=pn(N),N!==k||N.tag!==5&&N.tag!==6)&&(N=null)):(h=null,N=o),h!==N)){if(U=nD,y="onMouseLeave",r="onMouseEnter",d="mouse",(A==="pointerout"||A==="pointerover")&&(U=ID,y="onPointerLeave",r="onPointerEnter",d="pointer"),k=h==null?G:ve(h),Y=N==null?G:ve(N),G=new U(y,d+"leave",h,Q,c),G.target=k,G.relatedTarget=Y,y=null,cn(c)===o&&(U=new U(r,d+"enter",N,Q,c),U.target=Y,U.relatedTarget=k,y=U),k=y,h&&N)B:{for(U=h,r=N,d=0,Y=U;Y;Y=Re(Y))d++;for(Y=0,y=r;y;y=Re(y))Y++;for(;0<d-Y;)U=Re(U),d--;for(;0<Y-d;)r=Re(r),Y--;for(;d--;){if(U===r||r!==null&&U===r.alternate)break B;U=Re(U),r=Re(r)}U=null}else U=null;h!==null&&rD(D,G,h,U,!1),N!==null&&k!==null&&rD(D,k,N,U,!0)}}A:{if(G=o?ve(o):window,h=G.nodeName&&G.nodeName.toLowerCase(),h==="select"||h==="input"&&G.type==="file")var Z=qG;else if(iD(G))if(OU)Z=Bu;else{Z=$G;var H=_G}else(h=G.nodeName)&&h.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(Z=Au);if(Z&&(Z=Z(A,o))){TU(D,Z,Q,c);break A}H&&H(A,G,o),A==="focusout"&&(H=G._wrapperState)&&H.controlled&&G.type==="number"&&dl(G,"number",G.value)}switch(H=o?ve(o):window,A){case"focusin":(iD(H)||H.contentEditable==="true")&&(He=H,kl=o,pt=null);break;case"focusout":pt=kl=He=null;break;case"mousedown":yl=!0;break;case"contextmenu":case"mouseup":case"dragend":yl=!1,FD(D,Q,c);break;case"selectionchange":if(Eu)break;case"keydown":case"keyup":FD(D,Q,c)}var L;if(Ps)A:{switch(A){case"compositionstart":var W="onCompositionStart";break A;case"compositionend":W="onCompositionEnd";break A;case"compositionupdate":W="onCompositionUpdate";break A}W=void 0}else Se?VU(A,Q)&&(W="onCompositionEnd"):A==="keydown"&&Q.keyCode===229&&(W="onCompositionStart");W&&(vU&&Q.locale!=="ko"&&(Se||W!=="onCompositionStart"?W==="onCompositionEnd"&&Se&&(L=WU()):(uC=c,zs="value"in uC?uC.value:uC.textContent,Se=!0)),H=Ji(o,W),0<H.length&&(W=new eD(W,A,null,Q,c),D.push({event:W,listeners:H}),L?W.data=L:(L=xU(Q),L!==null&&(W.data=L)))),(L=OG?zG(A,Q):KG(A,Q))&&(o=Ji(o,"onBeforeInput"),0<o.length&&(c=new eD("onBeforeInput","beforeinput",null,Q,c),D.push({event:c,listeners:o}),c.data=L))}Q0(D,B)})}function zt(A,B,Q){return{instance:A,listener:B,currentTarget:Q}}function Ji(A,B){for(var Q=B+"Capture",g=[];A!==null;){var E=A,C=E.stateNode;E.tag===5&&C!==null&&(E=C,C=Ht(A,Q),C!=null&&g.unshift(zt(A,C,E)),C=Ht(A,B),C!=null&&g.push(zt(A,C,E))),A=A.return}return g}function Re(A){if(A===null)return null;do A=A.return;while(A&&A.tag!==5);return A||null}function rD(A,B,Q,g,E){for(var C=B._reactName,n=[];Q!==null&&Q!==g;){var e=Q,t=e.alternate,o=e.stateNode;if(t!==null&&t===g)break;e.tag===5&&o!==null&&(e=o,E?(t=Ht(Q,C),t!=null&&n.unshift(zt(Q,t,e))):E||(t=Ht(Q,C),t!=null&&n.push(zt(Q,t,e)))),Q=Q.return}n.length!==0&&A.push({event:B,listeners:n})}var Iu=/\r\n?/g,tu=/\u0000|\uFFFD/g;function UD(A){return(typeof A=="string"?A:""+A).replace(Iu,`
`).replace(tu,"")}function zw(A,B,Q){if(B=UD(B),UD(A)!==B&&Q)throw Error(x(425))}function bi(){}var Zl=null,Xl=null;function Ll(A,B){return A==="textarea"||A==="noscript"||typeof B.children=="string"||typeof B.children=="number"||typeof B.dangerouslySetInnerHTML=="object"&&B.dangerouslySetInnerHTML!==null&&B.dangerouslySetInnerHTML.__html!=null}var Sl=typeof setTimeout=="function"?setTimeout:void 0,wu=typeof clearTimeout=="function"?clearTimeout:void 0,MD=typeof Promise=="function"?Promise:void 0,iu=typeof queueMicrotask=="function"?queueMicrotask:typeof MD<"u"?function(A){return MD.resolve(null).then(A).catch(ou)}:Sl;function ou(A){setTimeout(function(){throw A})}function Ha(A,B){var Q=B,g=0;do{var E=Q.nextSibling;if(A.removeChild(Q),E&&E.nodeType===8)if(Q=E.data,Q==="/$"){if(g===0){A.removeChild(E),Vt(B);return}g--}else Q!=="$"&&Q!=="$?"&&Q!=="$!"||g++;Q=E}while(Q);Vt(B)}function pC(A){for(;A!=null;A=A.nextSibling){var B=A.nodeType;if(B===1||B===3)break;if(B===8){if(B=A.data,B==="$"||B==="$!"||B==="$?")break;if(B==="/$")return null}}return A}function dD(A){A=A.previousSibling;for(var B=0;A;){if(A.nodeType===8){var Q=A.data;if(Q==="$"||Q==="$!"||Q==="$?"){if(B===0)return A;B--}else Q==="/$"&&B++}A=A.previousSibling}return null}var FI=Math.random().toString(36).slice(2),gE="__reactFiber$"+FI,Kt="__reactProps$"+FI,SE="__reactContainer$"+FI,Hl="__reactEvents$"+FI,au="__reactListeners$"+FI,lu="__reactHandles$"+FI;function cn(A){var B=A[gE];if(B)return B;for(var Q=A.parentNode;Q;){if(B=Q[SE]||Q[gE]){if(Q=B.alternate,B.child!==null||Q!==null&&Q.child!==null)for(A=dD(A);A!==null;){if(Q=A[gE])return Q;A=dD(A)}return B}A=Q,Q=A.parentNode}return null}function ow(A){return A=A[gE]||A[SE],!A||A.tag!==5&&A.tag!==6&&A.tag!==13&&A.tag!==3?null:A}function ve(A){if(A.tag===5||A.tag===6)return A.stateNode;throw Error(x(33))}function Eo(A){return A[Kt]||null}var Wl=[],Ve=-1;function WC(A){return{current:A}}function gB(A){0>Ve||(A.current=Wl[Ve],Wl[Ve]=null,Ve--)}function _A(A,B){Ve++,Wl[Ve]=A.current,A.current=B}var XC={},iQ=WC(XC),YQ=WC(!1),Gn=XC;function eI(A,B){var Q=A.type.contextTypes;if(!Q)return XC;var g=A.stateNode;if(g&&g.__reactInternalMemoizedUnmaskedChildContext===B)return g.__reactInternalMemoizedMaskedChildContext;var E={},C;for(C in Q)E[C]=B[C];return g&&(A=A.stateNode,A.__reactInternalMemoizedUnmaskedChildContext=B,A.__reactInternalMemoizedMaskedChildContext=E),E}function NQ(A){return A=A.childContextTypes,A!=null}function mi(){gB(YQ),gB(iQ)}function fD(A,B,Q){if(iQ.current!==XC)throw Error(x(168));_A(iQ,B),_A(YQ,Q)}function E0(A,B,Q){var g=A.stateNode;if(B=B.childContextTypes,typeof g.getChildContext!="function")return Q;g=g.getChildContext();for(var E in g)if(!(E in B))throw Error(x(108,_f(A)||"Unknown",E));return aB({},Q,g)}function ki(A){return A=(A=A.stateNode)&&A.__reactInternalMemoizedMergedChildContext||XC,Gn=iQ.current,_A(iQ,A),_A(YQ,YQ.current),!0}function GD(A,B,Q){var g=A.stateNode;if(!g)throw Error(x(169));Q?(A=E0(A,B,Gn),g.__reactInternalMemoizedMergedChildContext=A,gB(YQ),gB(iQ),_A(iQ,A)):gB(YQ),_A(YQ,Q)}var kE=null,Co=!1,Wa=!1;function C0(A){kE===null?kE=[A]:kE.push(A)}function su(A){Co=!0,C0(A)}function vC(){if(!Wa&&kE!==null){Wa=!0;var A=0,B=SA;try{var Q=kE;for(SA=1;A<Q.length;A++){var g=Q[A];do g=g(!0);while(g!==null)}kE=null,Co=!1}catch(E){throw kE!==null&&(kE=kE.slice(A+1)),pU(Vs,vC),E}finally{SA=B,Wa=!1}}return null}var xe=[],Te=0,yi=null,Zi=0,ig=[],og=0,un=null,yE=1,ZE="";function on(A,B){xe[Te++]=Zi,xe[Te++]=yi,yi=A,Zi=B}function n0(A,B,Q){ig[og++]=yE,ig[og++]=ZE,ig[og++]=un,un=A;var g=yE;A=ZE;var E=32-Lg(g)-1;g&=~(1<<E),Q+=1;var C=32-Lg(B)+E;if(30<C){var n=E-E%5;C=(g&(1<<n)-1).toString(32),g>>=n,E-=n,yE=1<<32-Lg(B)+E|Q<<E|g,ZE=C+A}else yE=1<<C|Q<<E|g,ZE=A}function _s(A){A.return!==null&&(on(A,1),n0(A,1,0))}function $s(A){for(;A===yi;)yi=xe[--Te],xe[Te]=null,Zi=xe[--Te],xe[Te]=null;for(;A===un;)un=ig[--og],ig[og]=null,ZE=ig[--og],ig[og]=null,yE=ig[--og],ig[og]=null}var TQ=null,xQ=null,tB=!1,Zg=null;function e0(A,B){var Q=lg(5,null,null,0);Q.elementType="DELETED",Q.stateNode=B,Q.return=A,B=A.deletions,B===null?(A.deletions=[Q],A.flags|=16):B.push(Q)}function uD(A,B){switch(A.tag){case 5:var Q=A.type;return B=B.nodeType!==1||Q.toLowerCase()!==B.nodeName.toLowerCase()?null:B,B!==null?(A.stateNode=B,TQ=A,xQ=pC(B.firstChild),!0):!1;case 6:return B=A.pendingProps===""||B.nodeType!==3?null:B,B!==null?(A.stateNode=B,TQ=A,xQ=null,!0):!1;case 13:return B=B.nodeType!==8?null:B,B!==null?(Q=un!==null?{id:yE,overflow:ZE}:null,A.memoizedState={dehydrated:B,treeContext:Q,retryLane:1073741824},Q=lg(18,null,null,0),Q.stateNode=B,Q.return=A,A.child=Q,TQ=A,xQ=null,!0):!1;default:return!1}}function vl(A){return(A.mode&1)!==0&&(A.flags&128)===0}function Vl(A){if(tB){var B=xQ;if(B){var Q=B;if(!uD(A,B)){if(vl(A))throw Error(x(418));B=pC(Q.nextSibling);var g=TQ;B&&uD(A,B)?e0(g,Q):(A.flags=A.flags&-4097|2,tB=!1,TQ=A)}}else{if(vl(A))throw Error(x(418));A.flags=A.flags&-4097|2,tB=!1,TQ=A}}}function RD(A){for(A=A.return;A!==null&&A.tag!==5&&A.tag!==3&&A.tag!==13;)A=A.return;TQ=A}function Kw(A){if(A!==TQ)return!1;if(!tB)return RD(A),tB=!0,!1;var B;if((B=A.tag!==3)&&!(B=A.tag!==5)&&(B=A.type,B=B!=="head"&&B!=="body"&&!Ll(A.type,A.memoizedProps)),B&&(B=xQ)){if(vl(A))throw I0(),Error(x(418));for(;B;)e0(A,B),B=pC(B.nextSibling)}if(RD(A),A.tag===13){if(A=A.memoizedState,A=A!==null?A.dehydrated:null,!A)throw Error(x(317));A:{for(A=A.nextSibling,B=0;A;){if(A.nodeType===8){var Q=A.data;if(Q==="/$"){if(B===0){xQ=pC(A.nextSibling);break A}B--}else Q!=="$"&&Q!=="$!"&&Q!=="$?"||B++}A=A.nextSibling}xQ=null}}else xQ=TQ?pC(A.stateNode.nextSibling):null;return!0}function I0(){for(var A=xQ;A;)A=pC(A.nextSibling)}function II(){xQ=TQ=null,tB=!1}function AF(A){Zg===null?Zg=[A]:Zg.push(A)}var Fu=vE.ReactCurrentBatchConfig;function kg(A,B){if(A&&A.defaultProps){B=aB({},B),A=A.defaultProps;for(var Q in A)B[Q]===void 0&&(B[Q]=A[Q]);return B}return B}var Xi=WC(null),Li=null,Oe=null,BF=null;function QF(){BF=Oe=Li=null}function gF(A){var B=Xi.current;gB(Xi),A._currentValue=B}function xl(A,B,Q){for(;A!==null;){var g=A.alternate;if((A.childLanes&B)!==B?(A.childLanes|=B,g!==null&&(g.childLanes|=B)):g!==null&&(g.childLanes&B)!==B&&(g.childLanes|=B),A===Q)break;A=A.return}}function BI(A,B){Li=A,BF=Oe=null,A=A.dependencies,A!==null&&A.firstContext!==null&&(A.lanes&B&&(hQ=!0),A.firstContext=null)}function Fg(A){var B=A._currentValue;if(BF!==A)if(A={context:A,memoizedValue:B,next:null},Oe===null){if(Li===null)throw Error(x(308));Oe=A,Li.dependencies={lanes:0,firstContext:A}}else Oe=Oe.next=A;return B}var Dn=null;function EF(A){Dn===null?Dn=[A]:Dn.push(A)}function t0(A,B,Q,g){var E=B.interleaved;return E===null?(Q.next=Q,EF(B)):(Q.next=E.next,E.next=Q),B.interleaved=Q,HE(A,g)}function HE(A,B){A.lanes|=B;var Q=A.alternate;for(Q!==null&&(Q.lanes|=B),Q=A,A=A.return;A!==null;)A.childLanes|=B,Q=A.alternate,Q!==null&&(Q.childLanes|=B),Q=A,A=A.return;return Q.tag===3?Q.stateNode:null}var UC=!1;function CF(A){A.updateQueue={baseState:A.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function w0(A,B){A=A.updateQueue,B.updateQueue===A&&(B.updateQueue={baseState:A.baseState,firstBaseUpdate:A.firstBaseUpdate,lastBaseUpdate:A.lastBaseUpdate,shared:A.shared,effects:A.effects})}function XE(A,B){return{eventTime:A,lane:B,tag:0,payload:null,callback:null,next:null}}function JC(A,B,Q){var g=A.updateQueue;if(g===null)return null;if(g=g.shared,kA&2){var E=g.pending;return E===null?B.next=B:(B.next=E.next,E.next=B),g.pending=B,HE(A,Q)}return E=g.interleaved,E===null?(B.next=B,EF(g)):(B.next=E.next,E.next=B),g.interleaved=B,HE(A,Q)}function oi(A,B,Q){if(B=B.updateQueue,B!==null&&(B=B.shared,(Q&4194240)!==0)){var g=B.lanes;g&=A.pendingLanes,Q|=g,B.lanes=Q,xs(A,Q)}}function hD(A,B){var Q=A.updateQueue,g=A.alternate;if(g!==null&&(g=g.updateQueue,Q===g)){var E=null,C=null;if(Q=Q.firstBaseUpdate,Q!==null){do{var n={eventTime:Q.eventTime,lane:Q.lane,tag:Q.tag,payload:Q.payload,callback:Q.callback,next:null};C===null?E=C=n:C=C.next=n,Q=Q.next}while(Q!==null);C===null?E=C=B:C=C.next=B}else E=C=B;Q={baseState:g.baseState,firstBaseUpdate:E,lastBaseUpdate:C,shared:g.shared,effects:g.effects},A.updateQueue=Q;return}A=Q.lastBaseUpdate,A===null?Q.firstBaseUpdate=B:A.next=B,Q.lastBaseUpdate=B}function Si(A,B,Q,g){var E=A.updateQueue;UC=!1;var C=E.firstBaseUpdate,n=E.lastBaseUpdate,e=E.shared.pending;if(e!==null){E.shared.pending=null;var t=e,o=t.next;t.next=null,n===null?C=o:n.next=o,n=t;var c=A.alternate;c!==null&&(c=c.updateQueue,e=c.lastBaseUpdate,e!==n&&(e===null?c.firstBaseUpdate=o:e.next=o,c.lastBaseUpdate=t))}if(C!==null){var D=E.baseState;n=0,c=o=t=null,e=C;do{var G=e.lane,h=e.eventTime;if((g&G)===G){c!==null&&(c=c.next={eventTime:h,lane:0,tag:e.tag,payload:e.payload,callback:e.callback,next:null});A:{var N=A,U=e;switch(G=B,h=Q,U.tag){case 1:if(N=U.payload,typeof N=="function"){D=N.call(h,D,G);break A}D=N;break A;case 3:N.flags=N.flags&-65537|128;case 0:if(N=U.payload,G=typeof N=="function"?N.call(h,D,G):N,G==null)break A;D=aB({},D,G);break A;case 2:UC=!0}}e.callback!==null&&e.lane!==0&&(A.flags|=64,G=E.effects,G===null?E.effects=[e]:G.push(e))}else h={eventTime:h,lane:G,tag:e.tag,payload:e.payload,callback:e.callback,next:null},c===null?(o=c=h,t=D):c=c.next=h,n|=G;if(e=e.next,e===null){if(e=E.shared.pending,e===null)break;G=e,e=G.next,G.next=null,E.lastBaseUpdate=G,E.shared.pending=null}}while(!0);if(c===null&&(t=D),E.baseState=t,E.firstBaseUpdate=o,E.lastBaseUpdate=c,B=E.shared.interleaved,B!==null){E=B;do n|=E.lane,E=E.next;while(E!==B)}else C===null&&(E.shared.lanes=0);hn|=n,A.lanes=n,A.memoizedState=D}}function YD(A,B,Q){if(A=B.effects,B.effects=null,A!==null)for(B=0;B<A.length;B++){var g=A[B],E=g.callback;if(E!==null){if(g.callback=null,g=Q,typeof E!="function")throw Error(x(191,E));E.call(g)}}}var i0=new tU.Component().refs;function Tl(A,B,Q,g){B=A.memoizedState,Q=Q(g,B),Q=Q==null?B:aB({},B,Q),A.memoizedState=Q,A.lanes===0&&(A.updateQueue.baseState=Q)}var no={isMounted:function(A){return(A=A._reactInternals)?pn(A)===A:!1},enqueueSetState:function(A,B,Q){A=A._reactInternals;var g=sQ(),E=mC(A),C=XE(g,E);C.payload=B,Q!=null&&(C.callback=Q),B=JC(A,C,E),B!==null&&(Sg(B,A,E,g),oi(B,A,E))},enqueueReplaceState:function(A,B,Q){A=A._reactInternals;var g=sQ(),E=mC(A),C=XE(g,E);C.tag=1,C.payload=B,Q!=null&&(C.callback=Q),B=JC(A,C,E),B!==null&&(Sg(B,A,E,g),oi(B,A,E))},enqueueForceUpdate:function(A,B){A=A._reactInternals;var Q=sQ(),g=mC(A),E=XE(Q,g);E.tag=2,B!=null&&(E.callback=B),B=JC(A,E,g),B!==null&&(Sg(B,A,g,Q),oi(B,A,g))}};function ND(A,B,Q,g,E,C,n){return A=A.stateNode,typeof A.shouldComponentUpdate=="function"?A.shouldComponentUpdate(g,C,n):B.prototype&&B.prototype.isPureReactComponent?!Tt(Q,g)||!Tt(E,C):!0}function o0(A,B,Q){var g=!1,E=XC,C=B.contextType;return typeof C=="object"&&C!==null?C=Fg(C):(E=NQ(B)?Gn:iQ.current,g=B.contextTypes,C=(g=g!=null)?eI(A,E):XC),B=new B(Q,C),A.memoizedState=B.state!==null&&B.state!==void 0?B.state:null,B.updater=no,A.stateNode=B,B._reactInternals=A,g&&(A=A.stateNode,A.__reactInternalMemoizedUnmaskedChildContext=E,A.__reactInternalMemoizedMaskedChildContext=C),B}function pD(A,B,Q,g){A=B.state,typeof B.componentWillReceiveProps=="function"&&B.componentWillReceiveProps(Q,g),typeof B.UNSAFE_componentWillReceiveProps=="function"&&B.UNSAFE_componentWillReceiveProps(Q,g),B.state!==A&&no.enqueueReplaceState(B,B.state,null)}function Ol(A,B,Q,g){var E=A.stateNode;E.props=Q,E.state=A.memoizedState,E.refs=i0,CF(A);var C=B.contextType;typeof C=="object"&&C!==null?E.context=Fg(C):(C=NQ(B)?Gn:iQ.current,E.context=eI(A,C)),E.state=A.memoizedState,C=B.getDerivedStateFromProps,typeof C=="function"&&(Tl(A,B,C,Q),E.state=A.memoizedState),typeof B.getDerivedStateFromProps=="function"||typeof E.getSnapshotBeforeUpdate=="function"||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(B=E.state,typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount(),B!==E.state&&no.enqueueReplaceState(E,E.state,null),Si(A,Q,E,g),E.state=A.memoizedState),typeof E.componentDidMount=="function"&&(A.flags|=4194308)}function ot(A,B,Q){if(A=Q.ref,A!==null&&typeof A!="function"&&typeof A!="object"){if(Q._owner){if(Q=Q._owner,Q){if(Q.tag!==1)throw Error(x(309));var g=Q.stateNode}if(!g)throw Error(x(147,A));var E=g,C=""+A;return B!==null&&B.ref!==null&&typeof B.ref=="function"&&B.ref._stringRef===C?B.ref:(B=function(n){var e=E.refs;e===i0&&(e=E.refs={}),n===null?delete e[C]:e[C]=n},B._stringRef=C,B)}if(typeof A!="string")throw Error(x(284));if(!Q._owner)throw Error(x(290,A))}return A}function jw(A,B){throw A=Object.prototype.toString.call(B),Error(x(31,A==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":A))}function JD(A){var B=A._init;return B(A._payload)}function a0(A){function B(r,d){if(A){var Y=r.deletions;Y===null?(r.deletions=[d],r.flags|=16):Y.push(d)}}function Q(r,d){if(!A)return null;for(;d!==null;)B(r,d),d=d.sibling;return null}function g(r,d){for(r=new Map;d!==null;)d.key!==null?r.set(d.key,d):r.set(d.index,d),d=d.sibling;return r}function E(r,d){return r=kC(r,d),r.index=0,r.sibling=null,r}function C(r,d,Y){return r.index=Y,A?(Y=r.alternate,Y!==null?(Y=Y.index,Y<d?(r.flags|=2,d):Y):(r.flags|=2,d)):(r.flags|=1048576,d)}function n(r){return A&&r.alternate===null&&(r.flags|=2),r}function e(r,d,Y,y){return d===null||d.tag!==6?(d=Ka(Y,r.mode,y),d.return=r,d):(d=E(d,Y),d.return=r,d)}function t(r,d,Y,y){var Z=Y.type;return Z===Le?c(r,d,Y.props.children,y,Y.key):d!==null&&(d.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===rC&&JD(Z)===d.type)?(y=E(d,Y.props),y.ref=ot(r,d,Y),y.return=r,y):(y=Di(Y.type,Y.key,Y.props,null,r.mode,y),y.ref=ot(r,d,Y),y.return=r,y)}function o(r,d,Y,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==Y.containerInfo||d.stateNode.implementation!==Y.implementation?(d=ja(Y,r.mode,y),d.return=r,d):(d=E(d,Y.children||[]),d.return=r,d)}function c(r,d,Y,y,Z){return d===null||d.tag!==7?(d=dn(Y,r.mode,y,Z),d.return=r,d):(d=E(d,Y),d.return=r,d)}function D(r,d,Y){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Ka(""+d,r.mode,Y),d.return=r,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Lw:return Y=Di(d.type,d.key,d.props,null,r.mode,Y),Y.ref=ot(r,null,d),Y.return=r,Y;case Xe:return d=ja(d,r.mode,Y),d.return=r,d;case rC:var y=d._init;return D(r,y(d._payload),Y)}if(Ut(d)||et(d))return d=dn(d,r.mode,Y,null),d.return=r,d;jw(r,d)}return null}function G(r,d,Y,y){var Z=d!==null?d.key:null;if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Z!==null?null:e(r,d,""+Y,y);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case Lw:return Y.key===Z?t(r,d,Y,y):null;case Xe:return Y.key===Z?o(r,d,Y,y):null;case rC:return Z=Y._init,G(r,d,Z(Y._payload),y)}if(Ut(Y)||et(Y))return Z!==null?null:c(r,d,Y,y,null);jw(r,Y)}return null}function h(r,d,Y,y,Z){if(typeof y=="string"&&y!==""||typeof y=="number")return r=r.get(Y)||null,e(d,r,""+y,Z);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Lw:return r=r.get(y.key===null?Y:y.key)||null,t(d,r,y,Z);case Xe:return r=r.get(y.key===null?Y:y.key)||null,o(d,r,y,Z);case rC:var H=y._init;return h(r,d,Y,H(y._payload),Z)}if(Ut(y)||et(y))return r=r.get(Y)||null,c(d,r,y,Z,null);jw(d,y)}return null}function N(r,d,Y,y){for(var Z=null,H=null,L=d,W=d=0,O=null;L!==null&&W<Y.length;W++){L.index>W?(O=L,L=null):O=L.sibling;var j=G(r,L,Y[W],y);if(j===null){L===null&&(L=O);break}A&&L&&j.alternate===null&&B(r,L),d=C(j,d,W),H===null?Z=j:H.sibling=j,H=j,L=O}if(W===Y.length)return Q(r,L),tB&&on(r,W),Z;if(L===null){for(;W<Y.length;W++)L=D(r,Y[W],y),L!==null&&(d=C(L,d,W),H===null?Z=L:H.sibling=L,H=L);return tB&&on(r,W),Z}for(L=g(r,L);W<Y.length;W++)O=h(L,r,W,Y[W],y),O!==null&&(A&&O.alternate!==null&&L.delete(O.key===null?W:O.key),d=C(O,d,W),H===null?Z=O:H.sibling=O,H=O);return A&&L.forEach(function(rA){return B(r,rA)}),tB&&on(r,W),Z}function U(r,d,Y,y){var Z=et(Y);if(typeof Z!="function")throw Error(x(150));if(Y=Z.call(Y),Y==null)throw Error(x(151));for(var H=Z=null,L=d,W=d=0,O=null,j=Y.next();L!==null&&!j.done;W++,j=Y.next()){L.index>W?(O=L,L=null):O=L.sibling;var rA=G(r,L,j.value,y);if(rA===null){L===null&&(L=O);break}A&&L&&rA.alternate===null&&B(r,L),d=C(rA,d,W),H===null?Z=rA:H.sibling=rA,H=rA,L=O}if(j.done)return Q(r,L),tB&&on(r,W),Z;if(L===null){for(;!j.done;W++,j=Y.next())j=D(r,j.value,y),j!==null&&(d=C(j,d,W),H===null?Z=j:H.sibling=j,H=j);return tB&&on(r,W),Z}for(L=g(r,L);!j.done;W++,j=Y.next())j=h(L,r,W,j.value,y),j!==null&&(A&&j.alternate!==null&&L.delete(j.key===null?W:j.key),d=C(j,d,W),H===null?Z=j:H.sibling=j,H=j);return A&&L.forEach(function(cA){return B(r,cA)}),tB&&on(r,W),Z}function k(r,d,Y,y){if(typeof Y=="object"&&Y!==null&&Y.type===Le&&Y.key===null&&(Y=Y.props.children),typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case Lw:A:{for(var Z=Y.key,H=d;H!==null;){if(H.key===Z){if(Z=Y.type,Z===Le){if(H.tag===7){Q(r,H.sibling),d=E(H,Y.props.children),d.return=r,r=d;break A}}else if(H.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===rC&&JD(Z)===H.type){Q(r,H.sibling),d=E(H,Y.props),d.ref=ot(r,H,Y),d.return=r,r=d;break A}Q(r,H);break}else B(r,H);H=H.sibling}Y.type===Le?(d=dn(Y.props.children,r.mode,y,Y.key),d.return=r,r=d):(y=Di(Y.type,Y.key,Y.props,null,r.mode,y),y.ref=ot(r,d,Y),y.return=r,r=y)}return n(r);case Xe:A:{for(H=Y.key;d!==null;){if(d.key===H)if(d.tag===4&&d.stateNode.containerInfo===Y.containerInfo&&d.stateNode.implementation===Y.implementation){Q(r,d.sibling),d=E(d,Y.children||[]),d.return=r,r=d;break A}else{Q(r,d);break}else B(r,d);d=d.sibling}d=ja(Y,r.mode,y),d.return=r,r=d}return n(r);case rC:return H=Y._init,k(r,d,H(Y._payload),y)}if(Ut(Y))return N(r,d,Y,y);if(et(Y))return U(r,d,Y,y);jw(r,Y)}return typeof Y=="string"&&Y!==""||typeof Y=="number"?(Y=""+Y,d!==null&&d.tag===6?(Q(r,d.sibling),d=E(d,Y),d.return=r,r=d):(Q(r,d),d=Ka(Y,r.mode,y),d.return=r,r=d),n(r)):Q(r,d)}return k}var tI=a0(!0),l0=a0(!1),aw={},CE=WC(aw),jt=WC(aw),Pt=WC(aw);function rn(A){if(A===aw)throw Error(x(174));return A}function nF(A,B){switch(_A(Pt,B),_A(jt,A),_A(CE,aw),A=B.nodeType,A){case 9:case 11:B=(B=B.documentElement)?B.namespaceURI:Gl(null,"");break;default:A=A===8?B.parentNode:B,B=A.namespaceURI||null,A=A.tagName,B=Gl(B,A)}gB(CE),_A(CE,B)}function wI(){gB(CE),gB(jt),gB(Pt)}function s0(A){rn(Pt.current);var B=rn(CE.current),Q=Gl(B,A.type);B!==Q&&(_A(jt,A),_A(CE,Q))}function eF(A){jt.current===A&&(gB(CE),gB(jt))}var iB=WC(0);function Hi(A){for(var B=A;B!==null;){if(B.tag===13){var Q=B.memoizedState;if(Q!==null&&(Q=Q.dehydrated,Q===null||Q.data==="$?"||Q.data==="$!"))return B}else if(B.tag===19&&B.memoizedProps.revealOrder!==void 0){if(B.flags&128)return B}else if(B.child!==null){B.child.return=B,B=B.child;continue}if(B===A)break;for(;B.sibling===null;){if(B.return===null||B.return===A)return null;B=B.return}B.sibling.return=B.return,B=B.sibling}return null}var va=[];function IF(){for(var A=0;A<va.length;A++)va[A]._workInProgressVersionPrimary=null;va.length=0}var ai=vE.ReactCurrentDispatcher,Va=vE.ReactCurrentBatchConfig,Rn=0,oB=null,HB=null,OB=null,Wi=!1,Jt=!1,qt=0,cu=0;function nQ(){throw Error(x(321))}function tF(A,B){if(B===null)return!1;for(var Q=0;Q<B.length&&Q<A.length;Q++)if(!Hg(A[Q],B[Q]))return!1;return!0}function wF(A,B,Q,g,E,C){if(Rn=C,oB=B,B.memoizedState=null,B.updateQueue=null,B.lanes=0,ai.current=A===null||A.memoizedState===null?Mu:du,A=Q(g,E),Jt){C=0;do{if(Jt=!1,qt=0,25<=C)throw Error(x(301));C+=1,OB=HB=null,B.updateQueue=null,ai.current=fu,A=Q(g,E)}while(Jt)}if(ai.current=vi,B=HB!==null&&HB.next!==null,Rn=0,OB=HB=oB=null,Wi=!1,B)throw Error(x(300));return A}function iF(){var A=qt!==0;return qt=0,A}function AE(){var A={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return OB===null?oB.memoizedState=OB=A:OB=OB.next=A,OB}function cg(){if(HB===null){var A=oB.alternate;A=A!==null?A.memoizedState:null}else A=HB.next;var B=OB===null?oB.memoizedState:OB.next;if(B!==null)OB=B,HB=A;else{if(A===null)throw Error(x(310));HB=A,A={memoizedState:HB.memoizedState,baseState:HB.baseState,baseQueue:HB.baseQueue,queue:HB.queue,next:null},OB===null?oB.memoizedState=OB=A:OB=OB.next=A}return OB}function _t(A,B){return typeof B=="function"?B(A):B}function xa(A){var B=cg(),Q=B.queue;if(Q===null)throw Error(x(311));Q.lastRenderedReducer=A;var g=HB,E=g.baseQueue,C=Q.pending;if(C!==null){if(E!==null){var n=E.next;E.next=C.next,C.next=n}g.baseQueue=E=C,Q.pending=null}if(E!==null){C=E.next,g=g.baseState;var e=n=null,t=null,o=C;do{var c=o.lane;if((Rn&c)===c)t!==null&&(t=t.next={lane:0,action:o.action,hasEagerState:o.hasEagerState,eagerState:o.eagerState,next:null}),g=o.hasEagerState?o.eagerState:A(g,o.action);else{var D={lane:c,action:o.action,hasEagerState:o.hasEagerState,eagerState:o.eagerState,next:null};t===null?(e=t=D,n=g):t=t.next=D,oB.lanes|=c,hn|=c}o=o.next}while(o!==null&&o!==C);t===null?n=g:t.next=e,Hg(g,B.memoizedState)||(hQ=!0),B.memoizedState=g,B.baseState=n,B.baseQueue=t,Q.lastRenderedState=g}if(A=Q.interleaved,A!==null){E=A;do C=E.lane,oB.lanes|=C,hn|=C,E=E.next;while(E!==A)}else E===null&&(Q.lanes=0);return[B.memoizedState,Q.dispatch]}function Ta(A){var B=cg(),Q=B.queue;if(Q===null)throw Error(x(311));Q.lastRenderedReducer=A;var g=Q.dispatch,E=Q.pending,C=B.memoizedState;if(E!==null){Q.pending=null;var n=E=E.next;do C=A(C,n.action),n=n.next;while(n!==E);Hg(C,B.memoizedState)||(hQ=!0),B.memoizedState=C,B.baseQueue===null&&(B.baseState=C),Q.lastRenderedState=C}return[C,g]}function F0(){}function c0(A,B){var Q=oB,g=cg(),E=B(),C=!Hg(g.memoizedState,E);if(C&&(g.memoizedState=E,hQ=!0),g=g.queue,oF(U0.bind(null,Q,g,A),[A]),g.getSnapshot!==B||C||OB!==null&&OB.memoizedState.tag&1){if(Q.flags|=2048,$t(9,r0.bind(null,Q,g,E,B),void 0,null),zB===null)throw Error(x(349));Rn&30||D0(Q,B,E)}return E}function D0(A,B,Q){A.flags|=16384,A={getSnapshot:B,value:Q},B=oB.updateQueue,B===null?(B={lastEffect:null,stores:null},oB.updateQueue=B,B.stores=[A]):(Q=B.stores,Q===null?B.stores=[A]:Q.push(A))}function r0(A,B,Q,g){B.value=Q,B.getSnapshot=g,M0(B)&&d0(A)}function U0(A,B,Q){return Q(function(){M0(B)&&d0(A)})}function M0(A){var B=A.getSnapshot;A=A.value;try{var Q=B();return!Hg(A,Q)}catch{return!0}}function d0(A){var B=HE(A,1);B!==null&&Sg(B,A,1,-1)}function bD(A){var B=AE();return typeof A=="function"&&(A=A()),B.memoizedState=B.baseState=A,A={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_t,lastRenderedState:A},B.queue=A,A=A.dispatch=Uu.bind(null,oB,A),[B.memoizedState,A]}function $t(A,B,Q,g){return A={tag:A,create:B,destroy:Q,deps:g,next:null},B=oB.updateQueue,B===null?(B={lastEffect:null,stores:null},oB.updateQueue=B,B.lastEffect=A.next=A):(Q=B.lastEffect,Q===null?B.lastEffect=A.next=A:(g=Q.next,Q.next=A,A.next=g,B.lastEffect=A)),A}function f0(){return cg().memoizedState}function li(A,B,Q,g){var E=AE();oB.flags|=A,E.memoizedState=$t(1|B,Q,void 0,g===void 0?null:g)}function eo(A,B,Q,g){var E=cg();g=g===void 0?null:g;var C=void 0;if(HB!==null){var n=HB.memoizedState;if(C=n.destroy,g!==null&&tF(g,n.deps)){E.memoizedState=$t(B,Q,C,g);return}}oB.flags|=A,E.memoizedState=$t(1|B,Q,C,g)}function mD(A,B){return li(8390656,8,A,B)}function oF(A,B){return eo(2048,8,A,B)}function G0(A,B){return eo(4,2,A,B)}function u0(A,B){return eo(4,4,A,B)}function R0(A,B){if(typeof B=="function")return A=A(),B(A),function(){B(null)};if(B!=null)return A=A(),B.current=A,function(){B.current=null}}function h0(A,B,Q){return Q=Q!=null?Q.concat([A]):null,eo(4,4,R0.bind(null,B,A),Q)}function aF(){}function Y0(A,B){var Q=cg();B=B===void 0?null:B;var g=Q.memoizedState;return g!==null&&B!==null&&tF(B,g[1])?g[0]:(Q.memoizedState=[A,B],A)}function N0(A,B){var Q=cg();B=B===void 0?null:B;var g=Q.memoizedState;return g!==null&&B!==null&&tF(B,g[1])?g[0]:(A=A(),Q.memoizedState=[A,B],A)}function p0(A,B,Q){return Rn&21?(Hg(Q,B)||(Q=mU(),oB.lanes|=Q,hn|=Q,A.baseState=!0),B):(A.baseState&&(A.baseState=!1,hQ=!0),A.memoizedState=Q)}function Du(A,B){var Q=SA;SA=Q!==0&&4>Q?Q:4,A(!0);var g=Va.transition;Va.transition={};try{A(!1),B()}finally{SA=Q,Va.transition=g}}function J0(){return cg().memoizedState}function ru(A,B,Q){var g=mC(A);if(Q={lane:g,action:Q,hasEagerState:!1,eagerState:null,next:null},b0(A))m0(B,Q);else if(Q=t0(A,B,Q,g),Q!==null){var E=sQ();Sg(Q,A,g,E),k0(Q,B,g)}}function Uu(A,B,Q){var g=mC(A),E={lane:g,action:Q,hasEagerState:!1,eagerState:null,next:null};if(b0(A))m0(B,E);else{var C=A.alternate;if(A.lanes===0&&(C===null||C.lanes===0)&&(C=B.lastRenderedReducer,C!==null))try{var n=B.lastRenderedState,e=C(n,Q);if(E.hasEagerState=!0,E.eagerState=e,Hg(e,n)){var t=B.interleaved;t===null?(E.next=E,EF(B)):(E.next=t.next,t.next=E),B.interleaved=E;return}}catch{}finally{}Q=t0(A,B,E,g),Q!==null&&(E=sQ(),Sg(Q,A,g,E),k0(Q,B,g))}}function b0(A){var B=A.alternate;return A===oB||B!==null&&B===oB}function m0(A,B){Jt=Wi=!0;var Q=A.pending;Q===null?B.next=B:(B.next=Q.next,Q.next=B),A.pending=B}function k0(A,B,Q){if(Q&4194240){var g=B.lanes;g&=A.pendingLanes,Q|=g,B.lanes=Q,xs(A,Q)}}var vi={readContext:Fg,useCallback:nQ,useContext:nQ,useEffect:nQ,useImperativeHandle:nQ,useInsertionEffect:nQ,useLayoutEffect:nQ,useMemo:nQ,useReducer:nQ,useRef:nQ,useState:nQ,useDebugValue:nQ,useDeferredValue:nQ,useTransition:nQ,useMutableSource:nQ,useSyncExternalStore:nQ,useId:nQ,unstable_isNewReconciler:!1},Mu={readContext:Fg,useCallback:function(A,B){return AE().memoizedState=[A,B===void 0?null:B],A},useContext:Fg,useEffect:mD,useImperativeHandle:function(A,B,Q){return Q=Q!=null?Q.concat([A]):null,li(4194308,4,R0.bind(null,B,A),Q)},useLayoutEffect:function(A,B){return li(4194308,4,A,B)},useInsertionEffect:function(A,B){return li(4,2,A,B)},useMemo:function(A,B){var Q=AE();return B=B===void 0?null:B,A=A(),Q.memoizedState=[A,B],A},useReducer:function(A,B,Q){var g=AE();return B=Q!==void 0?Q(B):B,g.memoizedState=g.baseState=B,A={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:A,lastRenderedState:B},g.queue=A,A=A.dispatch=ru.bind(null,oB,A),[g.memoizedState,A]},useRef:function(A){var B=AE();return A={current:A},B.memoizedState=A},useState:bD,useDebugValue:aF,useDeferredValue:function(A){return AE().memoizedState=A},useTransition:function(){var A=bD(!1),B=A[0];return A=Du.bind(null,A[1]),AE().memoizedState=A,[B,A]},useMutableSource:function(){},useSyncExternalStore:function(A,B,Q){var g=oB,E=AE();if(tB){if(Q===void 0)throw Error(x(407));Q=Q()}else{if(Q=B(),zB===null)throw Error(x(349));Rn&30||D0(g,B,Q)}E.memoizedState=Q;var C={value:Q,getSnapshot:B};return E.queue=C,mD(U0.bind(null,g,C,A),[A]),g.flags|=2048,$t(9,r0.bind(null,g,C,Q,B),void 0,null),Q},useId:function(){var A=AE(),B=zB.identifierPrefix;if(tB){var Q=ZE,g=yE;Q=(g&~(1<<32-Lg(g)-1)).toString(32)+Q,B=":"+B+"R"+Q,Q=qt++,0<Q&&(B+="H"+Q.toString(32)),B+=":"}else Q=cu++,B=":"+B+"r"+Q.toString(32)+":";return A.memoizedState=B},unstable_isNewReconciler:!1},du={readContext:Fg,useCallback:Y0,useContext:Fg,useEffect:oF,useImperativeHandle:h0,useInsertionEffect:G0,useLayoutEffect:u0,useMemo:N0,useReducer:xa,useRef:f0,useState:function(){return xa(_t)},useDebugValue:aF,useDeferredValue:function(A){var B=cg();return p0(B,HB.memoizedState,A)},useTransition:function(){var A=xa(_t)[0],B=cg().memoizedState;return[A,B]},useMutableSource:F0,useSyncExternalStore:c0,useId:J0,unstable_isNewReconciler:!1},fu={readContext:Fg,useCallback:Y0,useContext:Fg,useEffect:oF,useImperativeHandle:h0,useInsertionEffect:G0,useLayoutEffect:u0,useMemo:N0,useReducer:Ta,useRef:f0,useState:function(){return Ta(_t)},useDebugValue:aF,useDeferredValue:function(A){var B=cg();return HB===null?B.memoizedState=A:p0(B,HB.memoizedState,A)},useTransition:function(){var A=Ta(_t)[0],B=cg().memoizedState;return[A,B]},useMutableSource:F0,useSyncExternalStore:c0,useId:J0,unstable_isNewReconciler:!1};function iI(A,B){try{var Q="",g=B;do Q+=qf(g),g=g.return;while(g);var E=Q}catch(C){E=`
Error generating stack: `+C.message+`
`+C.stack}return{value:A,source:B,stack:E,digest:null}}function Oa(A,B,Q){return{value:A,source:null,stack:Q??null,digest:B??null}}function zl(A,B){try{console.error(B.value)}catch(Q){setTimeout(function(){throw Q})}}var Gu=typeof WeakMap=="function"?WeakMap:Map;function y0(A,B,Q){Q=XE(-1,Q),Q.tag=3,Q.payload={element:null};var g=B.value;return Q.callback=function(){xi||(xi=!0,gs=g),zl(A,B)},Q}function Z0(A,B,Q){Q=XE(-1,Q),Q.tag=3;var g=A.type.getDerivedStateFromError;if(typeof g=="function"){var E=B.value;Q.payload=function(){return g(E)},Q.callback=function(){zl(A,B)}}var C=A.stateNode;return C!==null&&typeof C.componentDidCatch=="function"&&(Q.callback=function(){zl(A,B),typeof g!="function"&&(bC===null?bC=new Set([this]):bC.add(this));var n=B.stack;this.componentDidCatch(B.value,{componentStack:n!==null?n:""})}),Q}function kD(A,B,Q){var g=A.pingCache;if(g===null){g=A.pingCache=new Gu;var E=new Set;g.set(B,E)}else E=g.get(B),E===void 0&&(E=new Set,g.set(B,E));E.has(Q)||(E.add(Q),A=Lu.bind(null,A,B,Q),B.then(A,A))}function yD(A){do{var B;if((B=A.tag===13)&&(B=A.memoizedState,B=B!==null?B.dehydrated!==null:!0),B)return A;A=A.return}while(A!==null);return null}function ZD(A,B,Q,g,E){return A.mode&1?(A.flags|=65536,A.lanes=E,A):(A===B?A.flags|=65536:(A.flags|=128,Q.flags|=131072,Q.flags&=-52805,Q.tag===1&&(Q.alternate===null?Q.tag=17:(B=XE(-1,1),B.tag=2,JC(Q,B,1))),Q.lanes|=1),A)}var uu=vE.ReactCurrentOwner,hQ=!1;function lQ(A,B,Q,g){B.child=A===null?l0(B,null,Q,g):tI(B,A.child,Q,g)}function XD(A,B,Q,g,E){Q=Q.render;var C=B.ref;return BI(B,E),g=wF(A,B,Q,g,C,E),Q=iF(),A!==null&&!hQ?(B.updateQueue=A.updateQueue,B.flags&=-2053,A.lanes&=~E,WE(A,B,E)):(tB&&Q&&_s(B),B.flags|=1,lQ(A,B,g,E),B.child)}function LD(A,B,Q,g,E){if(A===null){var C=Q.type;return typeof C=="function"&&!MF(C)&&C.defaultProps===void 0&&Q.compare===null&&Q.defaultProps===void 0?(B.tag=15,B.type=C,X0(A,B,C,g,E)):(A=Di(Q.type,null,g,B,B.mode,E),A.ref=B.ref,A.return=B,B.child=A)}if(C=A.child,!(A.lanes&E)){var n=C.memoizedProps;if(Q=Q.compare,Q=Q!==null?Q:Tt,Q(n,g)&&A.ref===B.ref)return WE(A,B,E)}return B.flags|=1,A=kC(C,g),A.ref=B.ref,A.return=B,B.child=A}function X0(A,B,Q,g,E){if(A!==null){var C=A.memoizedProps;if(Tt(C,g)&&A.ref===B.ref)if(hQ=!1,B.pendingProps=g=C,(A.lanes&E)!==0)A.flags&131072&&(hQ=!0);else return B.lanes=A.lanes,WE(A,B,E)}return Kl(A,B,Q,g,E)}function L0(A,B,Q){var g=B.pendingProps,E=g.children,C=A!==null?A.memoizedState:null;if(g.mode==="hidden")if(!(B.mode&1))B.memoizedState={baseLanes:0,cachePool:null,transitions:null},_A(Ke,vQ),vQ|=Q;else{if(!(Q&1073741824))return A=C!==null?C.baseLanes|Q:Q,B.lanes=B.childLanes=1073741824,B.memoizedState={baseLanes:A,cachePool:null,transitions:null},B.updateQueue=null,_A(Ke,vQ),vQ|=A,null;B.memoizedState={baseLanes:0,cachePool:null,transitions:null},g=C!==null?C.baseLanes:Q,_A(Ke,vQ),vQ|=g}else C!==null?(g=C.baseLanes|Q,B.memoizedState=null):g=Q,_A(Ke,vQ),vQ|=g;return lQ(A,B,E,Q),B.child}function S0(A,B){var Q=B.ref;(A===null&&Q!==null||A!==null&&A.ref!==Q)&&(B.flags|=512,B.flags|=2097152)}function Kl(A,B,Q,g,E){var C=NQ(Q)?Gn:iQ.current;return C=eI(B,C),BI(B,E),Q=wF(A,B,Q,g,C,E),g=iF(),A!==null&&!hQ?(B.updateQueue=A.updateQueue,B.flags&=-2053,A.lanes&=~E,WE(A,B,E)):(tB&&g&&_s(B),B.flags|=1,lQ(A,B,Q,E),B.child)}function SD(A,B,Q,g,E){if(NQ(Q)){var C=!0;ki(B)}else C=!1;if(BI(B,E),B.stateNode===null)si(A,B),o0(B,Q,g),Ol(B,Q,g,E),g=!0;else if(A===null){var n=B.stateNode,e=B.memoizedProps;n.props=e;var t=n.context,o=Q.contextType;typeof o=="object"&&o!==null?o=Fg(o):(o=NQ(Q)?Gn:iQ.current,o=eI(B,o));var c=Q.getDerivedStateFromProps,D=typeof c=="function"||typeof n.getSnapshotBeforeUpdate=="function";D||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(e!==g||t!==o)&&pD(B,n,g,o),UC=!1;var G=B.memoizedState;n.state=G,Si(B,g,n,E),t=B.memoizedState,e!==g||G!==t||YQ.current||UC?(typeof c=="function"&&(Tl(B,Q,c,g),t=B.memoizedState),(e=UC||ND(B,Q,e,g,G,t,o))?(D||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(B.flags|=4194308)):(typeof n.componentDidMount=="function"&&(B.flags|=4194308),B.memoizedProps=g,B.memoizedState=t),n.props=g,n.state=t,n.context=o,g=e):(typeof n.componentDidMount=="function"&&(B.flags|=4194308),g=!1)}else{n=B.stateNode,w0(A,B),e=B.memoizedProps,o=B.type===B.elementType?e:kg(B.type,e),n.props=o,D=B.pendingProps,G=n.context,t=Q.contextType,typeof t=="object"&&t!==null?t=Fg(t):(t=NQ(Q)?Gn:iQ.current,t=eI(B,t));var h=Q.getDerivedStateFromProps;(c=typeof h=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(e!==D||G!==t)&&pD(B,n,g,t),UC=!1,G=B.memoizedState,n.state=G,Si(B,g,n,E);var N=B.memoizedState;e!==D||G!==N||YQ.current||UC?(typeof h=="function"&&(Tl(B,Q,h,g),N=B.memoizedState),(o=UC||ND(B,Q,o,g,G,N,t)||!1)?(c||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(g,N,t),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(g,N,t)),typeof n.componentDidUpdate=="function"&&(B.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(B.flags|=1024)):(typeof n.componentDidUpdate!="function"||e===A.memoizedProps&&G===A.memoizedState||(B.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||e===A.memoizedProps&&G===A.memoizedState||(B.flags|=1024),B.memoizedProps=g,B.memoizedState=N),n.props=g,n.state=N,n.context=t,g=o):(typeof n.componentDidUpdate!="function"||e===A.memoizedProps&&G===A.memoizedState||(B.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||e===A.memoizedProps&&G===A.memoizedState||(B.flags|=1024),g=!1)}return jl(A,B,Q,g,C,E)}function jl(A,B,Q,g,E,C){S0(A,B);var n=(B.flags&128)!==0;if(!g&&!n)return E&&GD(B,Q,!1),WE(A,B,C);g=B.stateNode,uu.current=B;var e=n&&typeof Q.getDerivedStateFromError!="function"?null:g.render();return B.flags|=1,A!==null&&n?(B.child=tI(B,A.child,null,C),B.child=tI(B,null,e,C)):lQ(A,B,e,C),B.memoizedState=g.state,E&&GD(B,Q,!0),B.child}function H0(A){var B=A.stateNode;B.pendingContext?fD(A,B.pendingContext,B.pendingContext!==B.context):B.context&&fD(A,B.context,!1),nF(A,B.containerInfo)}function HD(A,B,Q,g,E){return II(),AF(E),B.flags|=256,lQ(A,B,Q,g),B.child}var Pl={dehydrated:null,treeContext:null,retryLane:0};function ql(A){return{baseLanes:A,cachePool:null,transitions:null}}function W0(A,B,Q){var g=B.pendingProps,E=iB.current,C=!1,n=(B.flags&128)!==0,e;if((e=n)||(e=A!==null&&A.memoizedState===null?!1:(E&2)!==0),e?(C=!0,B.flags&=-129):(A===null||A.memoizedState!==null)&&(E|=1),_A(iB,E&1),A===null)return Vl(B),A=B.memoizedState,A!==null&&(A=A.dehydrated,A!==null)?(B.mode&1?A.data==="$!"?B.lanes=8:B.lanes=1073741824:B.lanes=1,null):(n=g.children,A=g.fallback,C?(g=B.mode,C=B.child,n={mode:"hidden",children:n},!(g&1)&&C!==null?(C.childLanes=0,C.pendingProps=n):C=wo(n,g,0,null),A=dn(A,g,Q,null),C.return=B,A.return=B,C.sibling=A,B.child=C,B.child.memoizedState=ql(Q),B.memoizedState=Pl,A):lF(B,n));if(E=A.memoizedState,E!==null&&(e=E.dehydrated,e!==null))return Ru(A,B,n,g,e,E,Q);if(C){C=g.fallback,n=B.mode,E=A.child,e=E.sibling;var t={mode:"hidden",children:g.children};return!(n&1)&&B.child!==E?(g=B.child,g.childLanes=0,g.pendingProps=t,B.deletions=null):(g=kC(E,t),g.subtreeFlags=E.subtreeFlags&14680064),e!==null?C=kC(e,C):(C=dn(C,n,Q,null),C.flags|=2),C.return=B,g.return=B,g.sibling=C,B.child=g,g=C,C=B.child,n=A.child.memoizedState,n=n===null?ql(Q):{baseLanes:n.baseLanes|Q,cachePool:null,transitions:n.transitions},C.memoizedState=n,C.childLanes=A.childLanes&~Q,B.memoizedState=Pl,g}return C=A.child,A=C.sibling,g=kC(C,{mode:"visible",children:g.children}),!(B.mode&1)&&(g.lanes=Q),g.return=B,g.sibling=null,A!==null&&(Q=B.deletions,Q===null?(B.deletions=[A],B.flags|=16):Q.push(A)),B.child=g,B.memoizedState=null,g}function lF(A,B){return B=wo({mode:"visible",children:B},A.mode,0,null),B.return=A,A.child=B}function Pw(A,B,Q,g){return g!==null&&AF(g),tI(B,A.child,null,Q),A=lF(B,B.pendingProps.children),A.flags|=2,B.memoizedState=null,A}function Ru(A,B,Q,g,E,C,n){if(Q)return B.flags&256?(B.flags&=-257,g=Oa(Error(x(422))),Pw(A,B,n,g)):B.memoizedState!==null?(B.child=A.child,B.flags|=128,null):(C=g.fallback,E=B.mode,g=wo({mode:"visible",children:g.children},E,0,null),C=dn(C,E,n,null),C.flags|=2,g.return=B,C.return=B,g.sibling=C,B.child=g,B.mode&1&&tI(B,A.child,null,n),B.child.memoizedState=ql(n),B.memoizedState=Pl,C);if(!(B.mode&1))return Pw(A,B,n,null);if(E.data==="$!"){if(g=E.nextSibling&&E.nextSibling.dataset,g)var e=g.dgst;return g=e,C=Error(x(419)),g=Oa(C,g,void 0),Pw(A,B,n,g)}if(e=(n&A.childLanes)!==0,hQ||e){if(g=zB,g!==null){switch(n&-n){case 4:E=2;break;case 16:E=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:E=32;break;case 536870912:E=268435456;break;default:E=0}E=E&(g.suspendedLanes|n)?0:E,E!==0&&E!==C.retryLane&&(C.retryLane=E,HE(A,E),Sg(g,A,E,-1))}return UF(),g=Oa(Error(x(421))),Pw(A,B,n,g)}return E.data==="$?"?(B.flags|=128,B.child=A.child,B=Su.bind(null,A),E._reactRetry=B,null):(A=C.treeContext,xQ=pC(E.nextSibling),TQ=B,tB=!0,Zg=null,A!==null&&(ig[og++]=yE,ig[og++]=ZE,ig[og++]=un,yE=A.id,ZE=A.overflow,un=B),B=lF(B,g.children),B.flags|=4096,B)}function WD(A,B,Q){A.lanes|=B;var g=A.alternate;g!==null&&(g.lanes|=B),xl(A.return,B,Q)}function za(A,B,Q,g,E){var C=A.memoizedState;C===null?A.memoizedState={isBackwards:B,rendering:null,renderingStartTime:0,last:g,tail:Q,tailMode:E}:(C.isBackwards=B,C.rendering=null,C.renderingStartTime=0,C.last=g,C.tail=Q,C.tailMode=E)}function v0(A,B,Q){var g=B.pendingProps,E=g.revealOrder,C=g.tail;if(lQ(A,B,g.children,Q),g=iB.current,g&2)g=g&1|2,B.flags|=128;else{if(A!==null&&A.flags&128)A:for(A=B.child;A!==null;){if(A.tag===13)A.memoizedState!==null&&WD(A,Q,B);else if(A.tag===19)WD(A,Q,B);else if(A.child!==null){A.child.return=A,A=A.child;continue}if(A===B)break A;for(;A.sibling===null;){if(A.return===null||A.return===B)break A;A=A.return}A.sibling.return=A.return,A=A.sibling}g&=1}if(_A(iB,g),!(B.mode&1))B.memoizedState=null;else switch(E){case"forwards":for(Q=B.child,E=null;Q!==null;)A=Q.alternate,A!==null&&Hi(A)===null&&(E=Q),Q=Q.sibling;Q=E,Q===null?(E=B.child,B.child=null):(E=Q.sibling,Q.sibling=null),za(B,!1,E,Q,C);break;case"backwards":for(Q=null,E=B.child,B.child=null;E!==null;){if(A=E.alternate,A!==null&&Hi(A)===null){B.child=E;break}A=E.sibling,E.sibling=Q,Q=E,E=A}za(B,!0,Q,null,C);break;case"together":za(B,!1,null,null,void 0);break;default:B.memoizedState=null}return B.child}function si(A,B){!(B.mode&1)&&A!==null&&(A.alternate=null,B.alternate=null,B.flags|=2)}function WE(A,B,Q){if(A!==null&&(B.dependencies=A.dependencies),hn|=B.lanes,!(Q&B.childLanes))return null;if(A!==null&&B.child!==A.child)throw Error(x(153));if(B.child!==null){for(A=B.child,Q=kC(A,A.pendingProps),B.child=Q,Q.return=B;A.sibling!==null;)A=A.sibling,Q=Q.sibling=kC(A,A.pendingProps),Q.return=B;Q.sibling=null}return B.child}function hu(A,B,Q){switch(B.tag){case 3:H0(B),II();break;case 5:s0(B);break;case 1:NQ(B.type)&&ki(B);break;case 4:nF(B,B.stateNode.containerInfo);break;case 10:var g=B.type._context,E=B.memoizedProps.value;_A(Xi,g._currentValue),g._currentValue=E;break;case 13:if(g=B.memoizedState,g!==null)return g.dehydrated!==null?(_A(iB,iB.current&1),B.flags|=128,null):Q&B.child.childLanes?W0(A,B,Q):(_A(iB,iB.current&1),A=WE(A,B,Q),A!==null?A.sibling:null);_A(iB,iB.current&1);break;case 19:if(g=(Q&B.childLanes)!==0,A.flags&128){if(g)return v0(A,B,Q);B.flags|=128}if(E=B.memoizedState,E!==null&&(E.rendering=null,E.tail=null,E.lastEffect=null),_A(iB,iB.current),g)break;return null;case 22:case 23:return B.lanes=0,L0(A,B,Q)}return WE(A,B,Q)}var V0,_l,x0,T0;V0=function(A,B){for(var Q=B.child;Q!==null;){if(Q.tag===5||Q.tag===6)A.appendChild(Q.stateNode);else if(Q.tag!==4&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===B)break;for(;Q.sibling===null;){if(Q.return===null||Q.return===B)return;Q=Q.return}Q.sibling.return=Q.return,Q=Q.sibling}};_l=function(){};x0=function(A,B,Q,g){var E=A.memoizedProps;if(E!==g){A=B.stateNode,rn(CE.current);var C=null;switch(Q){case"input":E=Ul(A,E),g=Ul(A,g),C=[];break;case"select":E=aB({},E,{value:void 0}),g=aB({},g,{value:void 0}),C=[];break;case"textarea":E=fl(A,E),g=fl(A,g),C=[];break;default:typeof E.onClick!="function"&&typeof g.onClick=="function"&&(A.onclick=bi)}ul(Q,g);var n;Q=null;for(o in E)if(!g.hasOwnProperty(o)&&E.hasOwnProperty(o)&&E[o]!=null)if(o==="style"){var e=E[o];for(n in e)e.hasOwnProperty(n)&&(Q||(Q={}),Q[n]="")}else o!=="dangerouslySetInnerHTML"&&o!=="children"&&o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Lt.hasOwnProperty(o)?C||(C=[]):(C=C||[]).push(o,null));for(o in g){var t=g[o];if(e=E!=null?E[o]:void 0,g.hasOwnProperty(o)&&t!==e&&(t!=null||e!=null))if(o==="style")if(e){for(n in e)!e.hasOwnProperty(n)||t&&t.hasOwnProperty(n)||(Q||(Q={}),Q[n]="");for(n in t)t.hasOwnProperty(n)&&e[n]!==t[n]&&(Q||(Q={}),Q[n]=t[n])}else Q||(C||(C=[]),C.push(o,Q)),Q=t;else o==="dangerouslySetInnerHTML"?(t=t?t.__html:void 0,e=e?e.__html:void 0,t!=null&&e!==t&&(C=C||[]).push(o,t)):o==="children"?typeof t!="string"&&typeof t!="number"||(C=C||[]).push(o,""+t):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&(Lt.hasOwnProperty(o)?(t!=null&&o==="onScroll"&&QB("scroll",A),C||e===t||(C=[])):(C=C||[]).push(o,t))}Q&&(C=C||[]).push("style",Q);var o=C;(B.updateQueue=o)&&(B.flags|=4)}};T0=function(A,B,Q,g){Q!==g&&(B.flags|=4)};function at(A,B){if(!tB)switch(A.tailMode){case"hidden":B=A.tail;for(var Q=null;B!==null;)B.alternate!==null&&(Q=B),B=B.sibling;Q===null?A.tail=null:Q.sibling=null;break;case"collapsed":Q=A.tail;for(var g=null;Q!==null;)Q.alternate!==null&&(g=Q),Q=Q.sibling;g===null?B||A.tail===null?A.tail=null:A.tail.sibling=null:g.sibling=null}}function eQ(A){var B=A.alternate!==null&&A.alternate.child===A.child,Q=0,g=0;if(B)for(var E=A.child;E!==null;)Q|=E.lanes|E.childLanes,g|=E.subtreeFlags&14680064,g|=E.flags&14680064,E.return=A,E=E.sibling;else for(E=A.child;E!==null;)Q|=E.lanes|E.childLanes,g|=E.subtreeFlags,g|=E.flags,E.return=A,E=E.sibling;return A.subtreeFlags|=g,A.childLanes=Q,B}function Yu(A,B,Q){var g=B.pendingProps;switch($s(B),B.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return eQ(B),null;case 1:return NQ(B.type)&&mi(),eQ(B),null;case 3:return g=B.stateNode,wI(),gB(YQ),gB(iQ),IF(),g.pendingContext&&(g.context=g.pendingContext,g.pendingContext=null),(A===null||A.child===null)&&(Kw(B)?B.flags|=4:A===null||A.memoizedState.isDehydrated&&!(B.flags&256)||(B.flags|=1024,Zg!==null&&(ns(Zg),Zg=null))),_l(A,B),eQ(B),null;case 5:eF(B);var E=rn(Pt.current);if(Q=B.type,A!==null&&B.stateNode!=null)x0(A,B,Q,g,E),A.ref!==B.ref&&(B.flags|=512,B.flags|=2097152);else{if(!g){if(B.stateNode===null)throw Error(x(166));return eQ(B),null}if(A=rn(CE.current),Kw(B)){g=B.stateNode,Q=B.type;var C=B.memoizedProps;switch(g[gE]=B,g[Kt]=C,A=(B.mode&1)!==0,Q){case"dialog":QB("cancel",g),QB("close",g);break;case"iframe":case"object":case"embed":QB("load",g);break;case"video":case"audio":for(E=0;E<dt.length;E++)QB(dt[E],g);break;case"source":QB("error",g);break;case"img":case"image":case"link":QB("error",g),QB("load",g);break;case"details":QB("toggle",g);break;case"input":Pc(g,C),QB("invalid",g);break;case"select":g._wrapperState={wasMultiple:!!C.multiple},QB("invalid",g);break;case"textarea":_c(g,C),QB("invalid",g)}ul(Q,C),E=null;for(var n in C)if(C.hasOwnProperty(n)){var e=C[n];n==="children"?typeof e=="string"?g.textContent!==e&&(C.suppressHydrationWarning!==!0&&zw(g.textContent,e,A),E=["children",e]):typeof e=="number"&&g.textContent!==""+e&&(C.suppressHydrationWarning!==!0&&zw(g.textContent,e,A),E=["children",""+e]):Lt.hasOwnProperty(n)&&e!=null&&n==="onScroll"&&QB("scroll",g)}switch(Q){case"input":Sw(g),qc(g,C,!0);break;case"textarea":Sw(g),$c(g);break;case"select":case"option":break;default:typeof C.onClick=="function"&&(g.onclick=bi)}g=E,B.updateQueue=g,g!==null&&(B.flags|=4)}else{n=E.nodeType===9?E:E.ownerDocument,A==="http://www.w3.org/1999/xhtml"&&(A=DU(Q)),A==="http://www.w3.org/1999/xhtml"?Q==="script"?(A=n.createElement("div"),A.innerHTML="<script><\/script>",A=A.removeChild(A.firstChild)):typeof g.is=="string"?A=n.createElement(Q,{is:g.is}):(A=n.createElement(Q),Q==="select"&&(n=A,g.multiple?n.multiple=!0:g.size&&(n.size=g.size))):A=n.createElementNS(A,Q),A[gE]=B,A[Kt]=g,V0(A,B,!1,!1),B.stateNode=A;A:{switch(n=Rl(Q,g),Q){case"dialog":QB("cancel",A),QB("close",A),E=g;break;case"iframe":case"object":case"embed":QB("load",A),E=g;break;case"video":case"audio":for(E=0;E<dt.length;E++)QB(dt[E],A);E=g;break;case"source":QB("error",A),E=g;break;case"img":case"image":case"link":QB("error",A),QB("load",A),E=g;break;case"details":QB("toggle",A),E=g;break;case"input":Pc(A,g),E=Ul(A,g),QB("invalid",A);break;case"option":E=g;break;case"select":A._wrapperState={wasMultiple:!!g.multiple},E=aB({},g,{value:void 0}),QB("invalid",A);break;case"textarea":_c(A,g),E=fl(A,g),QB("invalid",A);break;default:E=g}ul(Q,E),e=E;for(C in e)if(e.hasOwnProperty(C)){var t=e[C];C==="style"?MU(A,t):C==="dangerouslySetInnerHTML"?(t=t?t.__html:void 0,t!=null&&rU(A,t)):C==="children"?typeof t=="string"?(Q!=="textarea"||t!=="")&&St(A,t):typeof t=="number"&&St(A,""+t):C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&C!=="autoFocus"&&(Lt.hasOwnProperty(C)?t!=null&&C==="onScroll"&&QB("scroll",A):t!=null&&Ls(A,C,t,n))}switch(Q){case"input":Sw(A),qc(A,g,!1);break;case"textarea":Sw(A),$c(A);break;case"option":g.value!=null&&A.setAttribute("value",""+ZC(g.value));break;case"select":A.multiple=!!g.multiple,C=g.value,C!=null?qe(A,!!g.multiple,C,!1):g.defaultValue!=null&&qe(A,!!g.multiple,g.defaultValue,!0);break;default:typeof E.onClick=="function"&&(A.onclick=bi)}switch(Q){case"button":case"input":case"select":case"textarea":g=!!g.autoFocus;break A;case"img":g=!0;break A;default:g=!1}}g&&(B.flags|=4)}B.ref!==null&&(B.flags|=512,B.flags|=2097152)}return eQ(B),null;case 6:if(A&&B.stateNode!=null)T0(A,B,A.memoizedProps,g);else{if(typeof g!="string"&&B.stateNode===null)throw Error(x(166));if(Q=rn(Pt.current),rn(CE.current),Kw(B)){if(g=B.stateNode,Q=B.memoizedProps,g[gE]=B,(C=g.nodeValue!==Q)&&(A=TQ,A!==null))switch(A.tag){case 3:zw(g.nodeValue,Q,(A.mode&1)!==0);break;case 5:A.memoizedProps.suppressHydrationWarning!==!0&&zw(g.nodeValue,Q,(A.mode&1)!==0)}C&&(B.flags|=4)}else g=(Q.nodeType===9?Q:Q.ownerDocument).createTextNode(g),g[gE]=B,B.stateNode=g}return eQ(B),null;case 13:if(gB(iB),g=B.memoizedState,A===null||A.memoizedState!==null&&A.memoizedState.dehydrated!==null){if(tB&&xQ!==null&&B.mode&1&&!(B.flags&128))I0(),II(),B.flags|=98560,C=!1;else if(C=Kw(B),g!==null&&g.dehydrated!==null){if(A===null){if(!C)throw Error(x(318));if(C=B.memoizedState,C=C!==null?C.dehydrated:null,!C)throw Error(x(317));C[gE]=B}else II(),!(B.flags&128)&&(B.memoizedState=null),B.flags|=4;eQ(B),C=!1}else Zg!==null&&(ns(Zg),Zg=null),C=!0;if(!C)return B.flags&65536?B:null}return B.flags&128?(B.lanes=Q,B):(g=g!==null,g!==(A!==null&&A.memoizedState!==null)&&g&&(B.child.flags|=8192,B.mode&1&&(A===null||iB.current&1?WB===0&&(WB=3):UF())),B.updateQueue!==null&&(B.flags|=4),eQ(B),null);case 4:return wI(),_l(A,B),A===null&&Ot(B.stateNode.containerInfo),eQ(B),null;case 10:return gF(B.type._context),eQ(B),null;case 17:return NQ(B.type)&&mi(),eQ(B),null;case 19:if(gB(iB),C=B.memoizedState,C===null)return eQ(B),null;if(g=(B.flags&128)!==0,n=C.rendering,n===null)if(g)at(C,!1);else{if(WB!==0||A!==null&&A.flags&128)for(A=B.child;A!==null;){if(n=Hi(A),n!==null){for(B.flags|=128,at(C,!1),g=n.updateQueue,g!==null&&(B.updateQueue=g,B.flags|=4),B.subtreeFlags=0,g=Q,Q=B.child;Q!==null;)C=Q,A=g,C.flags&=14680066,n=C.alternate,n===null?(C.childLanes=0,C.lanes=A,C.child=null,C.subtreeFlags=0,C.memoizedProps=null,C.memoizedState=null,C.updateQueue=null,C.dependencies=null,C.stateNode=null):(C.childLanes=n.childLanes,C.lanes=n.lanes,C.child=n.child,C.subtreeFlags=0,C.deletions=null,C.memoizedProps=n.memoizedProps,C.memoizedState=n.memoizedState,C.updateQueue=n.updateQueue,C.type=n.type,A=n.dependencies,C.dependencies=A===null?null:{lanes:A.lanes,firstContext:A.firstContext}),Q=Q.sibling;return _A(iB,iB.current&1|2),B.child}A=A.sibling}C.tail!==null&&GB()>oI&&(B.flags|=128,g=!0,at(C,!1),B.lanes=4194304)}else{if(!g)if(A=Hi(n),A!==null){if(B.flags|=128,g=!0,Q=A.updateQueue,Q!==null&&(B.updateQueue=Q,B.flags|=4),at(C,!0),C.tail===null&&C.tailMode==="hidden"&&!n.alternate&&!tB)return eQ(B),null}else 2*GB()-C.renderingStartTime>oI&&Q!==1073741824&&(B.flags|=128,g=!0,at(C,!1),B.lanes=4194304);C.isBackwards?(n.sibling=B.child,B.child=n):(Q=C.last,Q!==null?Q.sibling=n:B.child=n,C.last=n)}return C.tail!==null?(B=C.tail,C.rendering=B,C.tail=B.sibling,C.renderingStartTime=GB(),B.sibling=null,Q=iB.current,_A(iB,g?Q&1|2:Q&1),B):(eQ(B),null);case 22:case 23:return rF(),g=B.memoizedState!==null,A!==null&&A.memoizedState!==null!==g&&(B.flags|=8192),g&&B.mode&1?vQ&1073741824&&(eQ(B),B.subtreeFlags&6&&(B.flags|=8192)):eQ(B),null;case 24:return null;case 25:return null}throw Error(x(156,B.tag))}function Nu(A,B){switch($s(B),B.tag){case 1:return NQ(B.type)&&mi(),A=B.flags,A&65536?(B.flags=A&-65537|128,B):null;case 3:return wI(),gB(YQ),gB(iQ),IF(),A=B.flags,A&65536&&!(A&128)?(B.flags=A&-65537|128,B):null;case 5:return eF(B),null;case 13:if(gB(iB),A=B.memoizedState,A!==null&&A.dehydrated!==null){if(B.alternate===null)throw Error(x(340));II()}return A=B.flags,A&65536?(B.flags=A&-65537|128,B):null;case 19:return gB(iB),null;case 4:return wI(),null;case 10:return gF(B.type._context),null;case 22:case 23:return rF(),null;case 24:return null;default:return null}}var qw=!1,tQ=!1,pu=typeof WeakSet=="function"?WeakSet:Set,eA=null;function ze(A,B){var Q=A.ref;if(Q!==null)if(typeof Q=="function")try{Q(null)}catch(g){rB(A,B,g)}else Q.current=null}function $l(A,B,Q){try{Q()}catch(g){rB(A,B,g)}}var vD=!1;function Ju(A,B){if(Zl=Ni,A=jU(),qs(A)){if("selectionStart"in A)var Q={start:A.selectionStart,end:A.selectionEnd};else A:{Q=(Q=A.ownerDocument)&&Q.defaultView||window;var g=Q.getSelection&&Q.getSelection();if(g&&g.rangeCount!==0){Q=g.anchorNode;var E=g.anchorOffset,C=g.focusNode;g=g.focusOffset;try{Q.nodeType,C.nodeType}catch{Q=null;break A}var n=0,e=-1,t=-1,o=0,c=0,D=A,G=null;B:for(;;){for(var h;D!==Q||E!==0&&D.nodeType!==3||(e=n+E),D!==C||g!==0&&D.nodeType!==3||(t=n+g),D.nodeType===3&&(n+=D.nodeValue.length),(h=D.firstChild)!==null;)G=D,D=h;for(;;){if(D===A)break B;if(G===Q&&++o===E&&(e=n),G===C&&++c===g&&(t=n),(h=D.nextSibling)!==null)break;D=G,G=D.parentNode}D=h}Q=e===-1||t===-1?null:{start:e,end:t}}else Q=null}Q=Q||{start:0,end:0}}else Q=null;for(Xl={focusedElem:A,selectionRange:Q},Ni=!1,eA=B;eA!==null;)if(B=eA,A=B.child,(B.subtreeFlags&1028)!==0&&A!==null)A.return=B,eA=A;else for(;eA!==null;){B=eA;try{var N=B.alternate;if(B.flags&1024)switch(B.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var U=N.memoizedProps,k=N.memoizedState,r=B.stateNode,d=r.getSnapshotBeforeUpdate(B.elementType===B.type?U:kg(B.type,U),k);r.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var Y=B.stateNode.containerInfo;Y.nodeType===1?Y.textContent="":Y.nodeType===9&&Y.documentElement&&Y.removeChild(Y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(y){rB(B,B.return,y)}if(A=B.sibling,A!==null){A.return=B.return,eA=A;break}eA=B.return}return N=vD,vD=!1,N}function bt(A,B,Q){var g=B.updateQueue;if(g=g!==null?g.lastEffect:null,g!==null){var E=g=g.next;do{if((E.tag&A)===A){var C=E.destroy;E.destroy=void 0,C!==void 0&&$l(B,Q,C)}E=E.next}while(E!==g)}}function Io(A,B){if(B=B.updateQueue,B=B!==null?B.lastEffect:null,B!==null){var Q=B=B.next;do{if((Q.tag&A)===A){var g=Q.create;Q.destroy=g()}Q=Q.next}while(Q!==B)}}function As(A){var B=A.ref;if(B!==null){var Q=A.stateNode;switch(A.tag){case 5:A=Q;break;default:A=Q}typeof B=="function"?B(A):B.current=A}}function O0(A){var B=A.alternate;B!==null&&(A.alternate=null,O0(B)),A.child=null,A.deletions=null,A.sibling=null,A.tag===5&&(B=A.stateNode,B!==null&&(delete B[gE],delete B[Kt],delete B[Hl],delete B[au],delete B[lu])),A.stateNode=null,A.return=null,A.dependencies=null,A.memoizedProps=null,A.memoizedState=null,A.pendingProps=null,A.stateNode=null,A.updateQueue=null}function z0(A){return A.tag===5||A.tag===3||A.tag===4}function VD(A){A:for(;;){for(;A.sibling===null;){if(A.return===null||z0(A.return))return null;A=A.return}for(A.sibling.return=A.return,A=A.sibling;A.tag!==5&&A.tag!==6&&A.tag!==18;){if(A.flags&2||A.child===null||A.tag===4)continue A;A.child.return=A,A=A.child}if(!(A.flags&2))return A.stateNode}}function Bs(A,B,Q){var g=A.tag;if(g===5||g===6)A=A.stateNode,B?Q.nodeType===8?Q.parentNode.insertBefore(A,B):Q.insertBefore(A,B):(Q.nodeType===8?(B=Q.parentNode,B.insertBefore(A,Q)):(B=Q,B.appendChild(A)),Q=Q._reactRootContainer,Q!=null||B.onclick!==null||(B.onclick=bi));else if(g!==4&&(A=A.child,A!==null))for(Bs(A,B,Q),A=A.sibling;A!==null;)Bs(A,B,Q),A=A.sibling}function Qs(A,B,Q){var g=A.tag;if(g===5||g===6)A=A.stateNode,B?Q.insertBefore(A,B):Q.appendChild(A);else if(g!==4&&(A=A.child,A!==null))for(Qs(A,B,Q),A=A.sibling;A!==null;)Qs(A,B,Q),A=A.sibling}var qB=null,yg=!1;function cC(A,B,Q){for(Q=Q.child;Q!==null;)K0(A,B,Q),Q=Q.sibling}function K0(A,B,Q){if(EE&&typeof EE.onCommitFiberUnmount=="function")try{EE.onCommitFiberUnmount(Ao,Q)}catch{}switch(Q.tag){case 5:tQ||ze(Q,B);case 6:var g=qB,E=yg;qB=null,cC(A,B,Q),qB=g,yg=E,qB!==null&&(yg?(A=qB,Q=Q.stateNode,A.nodeType===8?A.parentNode.removeChild(Q):A.removeChild(Q)):qB.removeChild(Q.stateNode));break;case 18:qB!==null&&(yg?(A=qB,Q=Q.stateNode,A.nodeType===8?Ha(A.parentNode,Q):A.nodeType===1&&Ha(A,Q),Vt(A)):Ha(qB,Q.stateNode));break;case 4:g=qB,E=yg,qB=Q.stateNode.containerInfo,yg=!0,cC(A,B,Q),qB=g,yg=E;break;case 0:case 11:case 14:case 15:if(!tQ&&(g=Q.updateQueue,g!==null&&(g=g.lastEffect,g!==null))){E=g=g.next;do{var C=E,n=C.destroy;C=C.tag,n!==void 0&&(C&2||C&4)&&$l(Q,B,n),E=E.next}while(E!==g)}cC(A,B,Q);break;case 1:if(!tQ&&(ze(Q,B),g=Q.stateNode,typeof g.componentWillUnmount=="function"))try{g.props=Q.memoizedProps,g.state=Q.memoizedState,g.componentWillUnmount()}catch(e){rB(Q,B,e)}cC(A,B,Q);break;case 21:cC(A,B,Q);break;case 22:Q.mode&1?(tQ=(g=tQ)||Q.memoizedState!==null,cC(A,B,Q),tQ=g):cC(A,B,Q);break;default:cC(A,B,Q)}}function xD(A){var B=A.updateQueue;if(B!==null){A.updateQueue=null;var Q=A.stateNode;Q===null&&(Q=A.stateNode=new pu),B.forEach(function(g){var E=Hu.bind(null,A,g);Q.has(g)||(Q.add(g),g.then(E,E))})}}function mg(A,B){var Q=B.deletions;if(Q!==null)for(var g=0;g<Q.length;g++){var E=Q[g];try{var C=A,n=B,e=n;A:for(;e!==null;){switch(e.tag){case 5:qB=e.stateNode,yg=!1;break A;case 3:qB=e.stateNode.containerInfo,yg=!0;break A;case 4:qB=e.stateNode.containerInfo,yg=!0;break A}e=e.return}if(qB===null)throw Error(x(160));K0(C,n,E),qB=null,yg=!1;var t=E.alternate;t!==null&&(t.return=null),E.return=null}catch(o){rB(E,B,o)}}if(B.subtreeFlags&12854)for(B=B.child;B!==null;)j0(B,A),B=B.sibling}function j0(A,B){var Q=A.alternate,g=A.flags;switch(A.tag){case 0:case 11:case 14:case 15:if(mg(B,A),$g(A),g&4){try{bt(3,A,A.return),Io(3,A)}catch(U){rB(A,A.return,U)}try{bt(5,A,A.return)}catch(U){rB(A,A.return,U)}}break;case 1:mg(B,A),$g(A),g&512&&Q!==null&&ze(Q,Q.return);break;case 5:if(mg(B,A),$g(A),g&512&&Q!==null&&ze(Q,Q.return),A.flags&32){var E=A.stateNode;try{St(E,"")}catch(U){rB(A,A.return,U)}}if(g&4&&(E=A.stateNode,E!=null)){var C=A.memoizedProps,n=Q!==null?Q.memoizedProps:C,e=A.type,t=A.updateQueue;if(A.updateQueue=null,t!==null)try{e==="input"&&C.type==="radio"&&C.name!=null&&FU(E,C),Rl(e,n);var o=Rl(e,C);for(n=0;n<t.length;n+=2){var c=t[n],D=t[n+1];c==="style"?MU(E,D):c==="dangerouslySetInnerHTML"?rU(E,D):c==="children"?St(E,D):Ls(E,c,D,o)}switch(e){case"input":Ml(E,C);break;case"textarea":cU(E,C);break;case"select":var G=E._wrapperState.wasMultiple;E._wrapperState.wasMultiple=!!C.multiple;var h=C.value;h!=null?qe(E,!!C.multiple,h,!1):G!==!!C.multiple&&(C.defaultValue!=null?qe(E,!!C.multiple,C.defaultValue,!0):qe(E,!!C.multiple,C.multiple?[]:"",!1))}E[Kt]=C}catch(U){rB(A,A.return,U)}}break;case 6:if(mg(B,A),$g(A),g&4){if(A.stateNode===null)throw Error(x(162));E=A.stateNode,C=A.memoizedProps;try{E.nodeValue=C}catch(U){rB(A,A.return,U)}}break;case 3:if(mg(B,A),$g(A),g&4&&Q!==null&&Q.memoizedState.isDehydrated)try{Vt(B.containerInfo)}catch(U){rB(A,A.return,U)}break;case 4:mg(B,A),$g(A);break;case 13:mg(B,A),$g(A),E=A.child,E.flags&8192&&(C=E.memoizedState!==null,E.stateNode.isHidden=C,!C||E.alternate!==null&&E.alternate.memoizedState!==null||(cF=GB())),g&4&&xD(A);break;case 22:if(c=Q!==null&&Q.memoizedState!==null,A.mode&1?(tQ=(o=tQ)||c,mg(B,A),tQ=o):mg(B,A),$g(A),g&8192){if(o=A.memoizedState!==null,(A.stateNode.isHidden=o)&&!c&&A.mode&1)for(eA=A,c=A.child;c!==null;){for(D=eA=c;eA!==null;){switch(G=eA,h=G.child,G.tag){case 0:case 11:case 14:case 15:bt(4,G,G.return);break;case 1:ze(G,G.return);var N=G.stateNode;if(typeof N.componentWillUnmount=="function"){g=G,Q=G.return;try{B=g,N.props=B.memoizedProps,N.state=B.memoizedState,N.componentWillUnmount()}catch(U){rB(g,Q,U)}}break;case 5:ze(G,G.return);break;case 22:if(G.memoizedState!==null){OD(D);continue}}h!==null?(h.return=G,eA=h):OD(D)}c=c.sibling}A:for(c=null,D=A;;){if(D.tag===5){if(c===null){c=D;try{E=D.stateNode,o?(C=E.style,typeof C.setProperty=="function"?C.setProperty("display","none","important"):C.display="none"):(e=D.stateNode,t=D.memoizedProps.style,n=t!=null&&t.hasOwnProperty("display")?t.display:null,e.style.display=UU("display",n))}catch(U){rB(A,A.return,U)}}}else if(D.tag===6){if(c===null)try{D.stateNode.nodeValue=o?"":D.memoizedProps}catch(U){rB(A,A.return,U)}}else if((D.tag!==22&&D.tag!==23||D.memoizedState===null||D===A)&&D.child!==null){D.child.return=D,D=D.child;continue}if(D===A)break A;for(;D.sibling===null;){if(D.return===null||D.return===A)break A;c===D&&(c=null),D=D.return}c===D&&(c=null),D.sibling.return=D.return,D=D.sibling}}break;case 19:mg(B,A),$g(A),g&4&&xD(A);break;case 21:break;default:mg(B,A),$g(A)}}function $g(A){var B=A.flags;if(B&2){try{A:{for(var Q=A.return;Q!==null;){if(z0(Q)){var g=Q;break A}Q=Q.return}throw Error(x(160))}switch(g.tag){case 5:var E=g.stateNode;g.flags&32&&(St(E,""),g.flags&=-33);var C=VD(A);Qs(A,C,E);break;case 3:case 4:var n=g.stateNode.containerInfo,e=VD(A);Bs(A,e,n);break;default:throw Error(x(161))}}catch(t){rB(A,A.return,t)}A.flags&=-3}B&4096&&(A.flags&=-4097)}function bu(A,B,Q){eA=A,P0(A)}function P0(A,B,Q){for(var g=(A.mode&1)!==0;eA!==null;){var E=eA,C=E.child;if(E.tag===22&&g){var n=E.memoizedState!==null||qw;if(!n){var e=E.alternate,t=e!==null&&e.memoizedState!==null||tQ;e=qw;var o=tQ;if(qw=n,(tQ=t)&&!o)for(eA=E;eA!==null;)n=eA,t=n.child,n.tag===22&&n.memoizedState!==null?zD(E):t!==null?(t.return=n,eA=t):zD(E);for(;C!==null;)eA=C,P0(C),C=C.sibling;eA=E,qw=e,tQ=o}TD(A)}else E.subtreeFlags&8772&&C!==null?(C.return=E,eA=C):TD(A)}}function TD(A){for(;eA!==null;){var B=eA;if(B.flags&8772){var Q=B.alternate;try{if(B.flags&8772)switch(B.tag){case 0:case 11:case 15:tQ||Io(5,B);break;case 1:var g=B.stateNode;if(B.flags&4&&!tQ)if(Q===null)g.componentDidMount();else{var E=B.elementType===B.type?Q.memoizedProps:kg(B.type,Q.memoizedProps);g.componentDidUpdate(E,Q.memoizedState,g.__reactInternalSnapshotBeforeUpdate)}var C=B.updateQueue;C!==null&&YD(B,C,g);break;case 3:var n=B.updateQueue;if(n!==null){if(Q=null,B.child!==null)switch(B.child.tag){case 5:Q=B.child.stateNode;break;case 1:Q=B.child.stateNode}YD(B,n,Q)}break;case 5:var e=B.stateNode;if(Q===null&&B.flags&4){Q=e;var t=B.memoizedProps;switch(B.type){case"button":case"input":case"select":case"textarea":t.autoFocus&&Q.focus();break;case"img":t.src&&(Q.src=t.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(B.memoizedState===null){var o=B.alternate;if(o!==null){var c=o.memoizedState;if(c!==null){var D=c.dehydrated;D!==null&&Vt(D)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}tQ||B.flags&512&&As(B)}catch(G){rB(B,B.return,G)}}if(B===A){eA=null;break}if(Q=B.sibling,Q!==null){Q.return=B.return,eA=Q;break}eA=B.return}}function OD(A){for(;eA!==null;){var B=eA;if(B===A){eA=null;break}var Q=B.sibling;if(Q!==null){Q.return=B.return,eA=Q;break}eA=B.return}}function zD(A){for(;eA!==null;){var B=eA;try{switch(B.tag){case 0:case 11:case 15:var Q=B.return;try{Io(4,B)}catch(t){rB(B,Q,t)}break;case 1:var g=B.stateNode;if(typeof g.componentDidMount=="function"){var E=B.return;try{g.componentDidMount()}catch(t){rB(B,E,t)}}var C=B.return;try{As(B)}catch(t){rB(B,C,t)}break;case 5:var n=B.return;try{As(B)}catch(t){rB(B,n,t)}}}catch(t){rB(B,B.return,t)}if(B===A){eA=null;break}var e=B.sibling;if(e!==null){e.return=B.return,eA=e;break}eA=B.return}}var mu=Math.ceil,Vi=vE.ReactCurrentDispatcher,sF=vE.ReactCurrentOwner,sg=vE.ReactCurrentBatchConfig,kA=0,zB=null,bB=null,$B=0,vQ=0,Ke=WC(0),WB=0,Aw=null,hn=0,to=0,FF=0,mt=null,RQ=null,cF=0,oI=1/0,mE=null,xi=!1,gs=null,bC=null,_w=!1,RC=null,Ti=0,kt=0,Es=null,Fi=-1,ci=0;function sQ(){return kA&6?GB():Fi!==-1?Fi:Fi=GB()}function mC(A){return A.mode&1?kA&2&&$B!==0?$B&-$B:Fu.transition!==null?(ci===0&&(ci=mU()),ci):(A=SA,A!==0||(A=window.event,A=A===void 0?16:HU(A.type)),A):1}function Sg(A,B,Q,g){if(50<kt)throw kt=0,Es=null,Error(x(185));ww(A,Q,g),(!(kA&2)||A!==zB)&&(A===zB&&(!(kA&2)&&(to|=Q),WB===4&&dC(A,$B)),pQ(A,g),Q===1&&kA===0&&!(B.mode&1)&&(oI=GB()+500,Co&&vC()))}function pQ(A,B){var Q=A.callbackNode;FG(A,B);var g=Yi(A,A===zB?$B:0);if(g===0)Q!==null&&QD(Q),A.callbackNode=null,A.callbackPriority=0;else if(B=g&-g,A.callbackPriority!==B){if(Q!=null&&QD(Q),B===1)A.tag===0?su(KD.bind(null,A)):C0(KD.bind(null,A)),iu(function(){!(kA&6)&&vC()}),Q=null;else{switch(kU(g)){case 1:Q=Vs;break;case 4:Q=JU;break;case 16:Q=hi;break;case 536870912:Q=bU;break;default:Q=hi}Q=EM(Q,q0.bind(null,A))}A.callbackPriority=B,A.callbackNode=Q}}function q0(A,B){if(Fi=-1,ci=0,kA&6)throw Error(x(327));var Q=A.callbackNode;if(QI()&&A.callbackNode!==Q)return null;var g=Yi(A,A===zB?$B:0);if(g===0)return null;if(g&30||g&A.expiredLanes||B)B=Oi(A,g);else{B=g;var E=kA;kA|=2;var C=$0();(zB!==A||$B!==B)&&(mE=null,oI=GB()+500,Mn(A,B));do try{Zu();break}catch(e){_0(A,e)}while(!0);QF(),Vi.current=C,kA=E,bB!==null?B=0:(zB=null,$B=0,B=WB)}if(B!==0){if(B===2&&(E=Jl(A),E!==0&&(g=E,B=Cs(A,E))),B===1)throw Q=Aw,Mn(A,0),dC(A,g),pQ(A,GB()),Q;if(B===6)dC(A,g);else{if(E=A.current.alternate,!(g&30)&&!ku(E)&&(B=Oi(A,g),B===2&&(C=Jl(A),C!==0&&(g=C,B=Cs(A,C))),B===1))throw Q=Aw,Mn(A,0),dC(A,g),pQ(A,GB()),Q;switch(A.finishedWork=E,A.finishedLanes=g,B){case 0:case 1:throw Error(x(345));case 2:an(A,RQ,mE);break;case 3:if(dC(A,g),(g&130023424)===g&&(B=cF+500-GB(),10<B)){if(Yi(A,0)!==0)break;if(E=A.suspendedLanes,(E&g)!==g){sQ(),A.pingedLanes|=A.suspendedLanes&E;break}A.timeoutHandle=Sl(an.bind(null,A,RQ,mE),B);break}an(A,RQ,mE);break;case 4:if(dC(A,g),(g&4194240)===g)break;for(B=A.eventTimes,E=-1;0<g;){var n=31-Lg(g);C=1<<n,n=B[n],n>E&&(E=n),g&=~C}if(g=E,g=GB()-g,g=(120>g?120:480>g?480:1080>g?1080:1920>g?1920:3e3>g?3e3:4320>g?4320:1960*mu(g/1960))-g,10<g){A.timeoutHandle=Sl(an.bind(null,A,RQ,mE),g);break}an(A,RQ,mE);break;case 5:an(A,RQ,mE);break;default:throw Error(x(329))}}}return pQ(A,GB()),A.callbackNode===Q?q0.bind(null,A):null}function Cs(A,B){var Q=mt;return A.current.memoizedState.isDehydrated&&(Mn(A,B).flags|=256),A=Oi(A,B),A!==2&&(B=RQ,RQ=Q,B!==null&&ns(B)),A}function ns(A){RQ===null?RQ=A:RQ.push.apply(RQ,A)}function ku(A){for(var B=A;;){if(B.flags&16384){var Q=B.updateQueue;if(Q!==null&&(Q=Q.stores,Q!==null))for(var g=0;g<Q.length;g++){var E=Q[g],C=E.getSnapshot;E=E.value;try{if(!Hg(C(),E))return!1}catch{return!1}}}if(Q=B.child,B.subtreeFlags&16384&&Q!==null)Q.return=B,B=Q;else{if(B===A)break;for(;B.sibling===null;){if(B.return===null||B.return===A)return!0;B=B.return}B.sibling.return=B.return,B=B.sibling}}return!0}function dC(A,B){for(B&=~FF,B&=~to,A.suspendedLanes|=B,A.pingedLanes&=~B,A=A.expirationTimes;0<B;){var Q=31-Lg(B),g=1<<Q;A[Q]=-1,B&=~g}}function KD(A){if(kA&6)throw Error(x(327));QI();var B=Yi(A,0);if(!(B&1))return pQ(A,GB()),null;var Q=Oi(A,B);if(A.tag!==0&&Q===2){var g=Jl(A);g!==0&&(B=g,Q=Cs(A,g))}if(Q===1)throw Q=Aw,Mn(A,0),dC(A,B),pQ(A,GB()),Q;if(Q===6)throw Error(x(345));return A.finishedWork=A.current.alternate,A.finishedLanes=B,an(A,RQ,mE),pQ(A,GB()),null}function DF(A,B){var Q=kA;kA|=1;try{return A(B)}finally{kA=Q,kA===0&&(oI=GB()+500,Co&&vC())}}function Yn(A){RC!==null&&RC.tag===0&&!(kA&6)&&QI();var B=kA;kA|=1;var Q=sg.transition,g=SA;try{if(sg.transition=null,SA=1,A)return A()}finally{SA=g,sg.transition=Q,kA=B,!(kA&6)&&vC()}}function rF(){vQ=Ke.current,gB(Ke)}function Mn(A,B){A.finishedWork=null,A.finishedLanes=0;var Q=A.timeoutHandle;if(Q!==-1&&(A.timeoutHandle=-1,wu(Q)),bB!==null)for(Q=bB.return;Q!==null;){var g=Q;switch($s(g),g.tag){case 1:g=g.type.childContextTypes,g!=null&&mi();break;case 3:wI(),gB(YQ),gB(iQ),IF();break;case 5:eF(g);break;case 4:wI();break;case 13:gB(iB);break;case 19:gB(iB);break;case 10:gF(g.type._context);break;case 22:case 23:rF()}Q=Q.return}if(zB=A,bB=A=kC(A.current,null),$B=vQ=B,WB=0,Aw=null,FF=to=hn=0,RQ=mt=null,Dn!==null){for(B=0;B<Dn.length;B++)if(Q=Dn[B],g=Q.interleaved,g!==null){Q.interleaved=null;var E=g.next,C=Q.pending;if(C!==null){var n=C.next;C.next=E,g.next=n}Q.pending=g}Dn=null}return A}function _0(A,B){do{var Q=bB;try{if(QF(),ai.current=vi,Wi){for(var g=oB.memoizedState;g!==null;){var E=g.queue;E!==null&&(E.pending=null),g=g.next}Wi=!1}if(Rn=0,OB=HB=oB=null,Jt=!1,qt=0,sF.current=null,Q===null||Q.return===null){WB=1,Aw=B,bB=null;break}A:{var C=A,n=Q.return,e=Q,t=B;if(B=$B,e.flags|=32768,t!==null&&typeof t=="object"&&typeof t.then=="function"){var o=t,c=e,D=c.tag;if(!(c.mode&1)&&(D===0||D===11||D===15)){var G=c.alternate;G?(c.updateQueue=G.updateQueue,c.memoizedState=G.memoizedState,c.lanes=G.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=yD(n);if(h!==null){h.flags&=-257,ZD(h,n,e,C,B),h.mode&1&&kD(C,o,B),B=h,t=o;var N=B.updateQueue;if(N===null){var U=new Set;U.add(t),B.updateQueue=U}else N.add(t);break A}else{if(!(B&1)){kD(C,o,B),UF();break A}t=Error(x(426))}}else if(tB&&e.mode&1){var k=yD(n);if(k!==null){!(k.flags&65536)&&(k.flags|=256),ZD(k,n,e,C,B),AF(iI(t,e));break A}}C=t=iI(t,e),WB!==4&&(WB=2),mt===null?mt=[C]:mt.push(C),C=n;do{switch(C.tag){case 3:C.flags|=65536,B&=-B,C.lanes|=B;var r=y0(C,t,B);hD(C,r);break A;case 1:e=t;var d=C.type,Y=C.stateNode;if(!(C.flags&128)&&(typeof d.getDerivedStateFromError=="function"||Y!==null&&typeof Y.componentDidCatch=="function"&&(bC===null||!bC.has(Y)))){C.flags|=65536,B&=-B,C.lanes|=B;var y=Z0(C,e,B);hD(C,y);break A}}C=C.return}while(C!==null)}BM(Q)}catch(Z){B=Z,bB===Q&&Q!==null&&(bB=Q=Q.return);continue}break}while(!0)}function $0(){var A=Vi.current;return Vi.current=vi,A===null?vi:A}function UF(){(WB===0||WB===3||WB===2)&&(WB=4),zB===null||!(hn&268435455)&&!(to&268435455)||dC(zB,$B)}function Oi(A,B){var Q=kA;kA|=2;var g=$0();(zB!==A||$B!==B)&&(mE=null,Mn(A,B));do try{yu();break}catch(E){_0(A,E)}while(!0);if(QF(),kA=Q,Vi.current=g,bB!==null)throw Error(x(261));return zB=null,$B=0,WB}function yu(){for(;bB!==null;)AM(bB)}function Zu(){for(;bB!==null&&!eG();)AM(bB)}function AM(A){var B=gM(A.alternate,A,vQ);A.memoizedProps=A.pendingProps,B===null?BM(A):bB=B,sF.current=null}function BM(A){var B=A;do{var Q=B.alternate;if(A=B.return,B.flags&32768){if(Q=Nu(Q,B),Q!==null){Q.flags&=32767,bB=Q;return}if(A!==null)A.flags|=32768,A.subtreeFlags=0,A.deletions=null;else{WB=6,bB=null;return}}else if(Q=Yu(Q,B,vQ),Q!==null){bB=Q;return}if(B=B.sibling,B!==null){bB=B;return}bB=B=A}while(B!==null);WB===0&&(WB=5)}function an(A,B,Q){var g=SA,E=sg.transition;try{sg.transition=null,SA=1,Xu(A,B,Q,g)}finally{sg.transition=E,SA=g}return null}function Xu(A,B,Q,g){do QI();while(RC!==null);if(kA&6)throw Error(x(327));Q=A.finishedWork;var E=A.finishedLanes;if(Q===null)return null;if(A.finishedWork=null,A.finishedLanes=0,Q===A.current)throw Error(x(177));A.callbackNode=null,A.callbackPriority=0;var C=Q.lanes|Q.childLanes;if(cG(A,C),A===zB&&(bB=zB=null,$B=0),!(Q.subtreeFlags&2064)&&!(Q.flags&2064)||_w||(_w=!0,EM(hi,function(){return QI(),null})),C=(Q.flags&15990)!==0,Q.subtreeFlags&15990||C){C=sg.transition,sg.transition=null;var n=SA;SA=1;var e=kA;kA|=4,sF.current=null,Ju(A,Q),j0(Q,A),gu(Xl),Ni=!!Zl,Xl=Zl=null,A.current=Q,bu(Q),IG(),kA=e,SA=n,sg.transition=C}else A.current=Q;if(_w&&(_w=!1,RC=A,Ti=E),C=A.pendingLanes,C===0&&(bC=null),iG(Q.stateNode),pQ(A,GB()),B!==null)for(g=A.onRecoverableError,Q=0;Q<B.length;Q++)E=B[Q],g(E.value,{componentStack:E.stack,digest:E.digest});if(xi)throw xi=!1,A=gs,gs=null,A;return Ti&1&&A.tag!==0&&QI(),C=A.pendingLanes,C&1?A===Es?kt++:(kt=0,Es=A):kt=0,vC(),null}function QI(){if(RC!==null){var A=kU(Ti),B=sg.transition,Q=SA;try{if(sg.transition=null,SA=16>A?16:A,RC===null)var g=!1;else{if(A=RC,RC=null,Ti=0,kA&6)throw Error(x(331));var E=kA;for(kA|=4,eA=A.current;eA!==null;){var C=eA,n=C.child;if(eA.flags&16){var e=C.deletions;if(e!==null){for(var t=0;t<e.length;t++){var o=e[t];for(eA=o;eA!==null;){var c=eA;switch(c.tag){case 0:case 11:case 15:bt(8,c,C)}var D=c.child;if(D!==null)D.return=c,eA=D;else for(;eA!==null;){c=eA;var G=c.sibling,h=c.return;if(O0(c),c===o){eA=null;break}if(G!==null){G.return=h,eA=G;break}eA=h}}}var N=C.alternate;if(N!==null){var U=N.child;if(U!==null){N.child=null;do{var k=U.sibling;U.sibling=null,U=k}while(U!==null)}}eA=C}}if(C.subtreeFlags&2064&&n!==null)n.return=C,eA=n;else A:for(;eA!==null;){if(C=eA,C.flags&2048)switch(C.tag){case 0:case 11:case 15:bt(9,C,C.return)}var r=C.sibling;if(r!==null){r.return=C.return,eA=r;break A}eA=C.return}}var d=A.current;for(eA=d;eA!==null;){n=eA;var Y=n.child;if(n.subtreeFlags&2064&&Y!==null)Y.return=n,eA=Y;else A:for(n=d;eA!==null;){if(e=eA,e.flags&2048)try{switch(e.tag){case 0:case 11:case 15:Io(9,e)}}catch(Z){rB(e,e.return,Z)}if(e===n){eA=null;break A}var y=e.sibling;if(y!==null){y.return=e.return,eA=y;break A}eA=e.return}}if(kA=E,vC(),EE&&typeof EE.onPostCommitFiberRoot=="function")try{EE.onPostCommitFiberRoot(Ao,A)}catch{}g=!0}return g}finally{SA=Q,sg.transition=B}}return!1}function jD(A,B,Q){B=iI(Q,B),B=y0(A,B,1),A=JC(A,B,1),B=sQ(),A!==null&&(ww(A,1,B),pQ(A,B))}function rB(A,B,Q){if(A.tag===3)jD(A,A,Q);else for(;B!==null;){if(B.tag===3){jD(B,A,Q);break}else if(B.tag===1){var g=B.stateNode;if(typeof B.type.getDerivedStateFromError=="function"||typeof g.componentDidCatch=="function"&&(bC===null||!bC.has(g))){A=iI(Q,A),A=Z0(B,A,1),B=JC(B,A,1),A=sQ(),B!==null&&(ww(B,1,A),pQ(B,A));break}}B=B.return}}function Lu(A,B,Q){var g=A.pingCache;g!==null&&g.delete(B),B=sQ(),A.pingedLanes|=A.suspendedLanes&Q,zB===A&&($B&Q)===Q&&(WB===4||WB===3&&($B&130023424)===$B&&500>GB()-cF?Mn(A,0):FF|=Q),pQ(A,B)}function QM(A,B){B===0&&(A.mode&1?(B=vw,vw<<=1,!(vw&130023424)&&(vw=4194304)):B=1);var Q=sQ();A=HE(A,B),A!==null&&(ww(A,B,Q),pQ(A,Q))}function Su(A){var B=A.memoizedState,Q=0;B!==null&&(Q=B.retryLane),QM(A,Q)}function Hu(A,B){var Q=0;switch(A.tag){case 13:var g=A.stateNode,E=A.memoizedState;E!==null&&(Q=E.retryLane);break;case 19:g=A.stateNode;break;default:throw Error(x(314))}g!==null&&g.delete(B),QM(A,Q)}var gM;gM=function(A,B,Q){if(A!==null)if(A.memoizedProps!==B.pendingProps||YQ.current)hQ=!0;else{if(!(A.lanes&Q)&&!(B.flags&128))return hQ=!1,hu(A,B,Q);hQ=!!(A.flags&131072)}else hQ=!1,tB&&B.flags&1048576&&n0(B,Zi,B.index);switch(B.lanes=0,B.tag){case 2:var g=B.type;si(A,B),A=B.pendingProps;var E=eI(B,iQ.current);BI(B,Q),E=wF(null,B,g,A,E,Q);var C=iF();return B.flags|=1,typeof E=="object"&&E!==null&&typeof E.render=="function"&&E.$$typeof===void 0?(B.tag=1,B.memoizedState=null,B.updateQueue=null,NQ(g)?(C=!0,ki(B)):C=!1,B.memoizedState=E.state!==null&&E.state!==void 0?E.state:null,CF(B),E.updater=no,B.stateNode=E,E._reactInternals=B,Ol(B,g,A,Q),B=jl(null,B,g,!0,C,Q)):(B.tag=0,tB&&C&&_s(B),lQ(null,B,E,Q),B=B.child),B;case 16:g=B.elementType;A:{switch(si(A,B),A=B.pendingProps,E=g._init,g=E(g._payload),B.type=g,E=B.tag=vu(g),A=kg(g,A),E){case 0:B=Kl(null,B,g,A,Q);break A;case 1:B=SD(null,B,g,A,Q);break A;case 11:B=XD(null,B,g,A,Q);break A;case 14:B=LD(null,B,g,kg(g.type,A),Q);break A}throw Error(x(306,g,""))}return B;case 0:return g=B.type,E=B.pendingProps,E=B.elementType===g?E:kg(g,E),Kl(A,B,g,E,Q);case 1:return g=B.type,E=B.pendingProps,E=B.elementType===g?E:kg(g,E),SD(A,B,g,E,Q);case 3:A:{if(H0(B),A===null)throw Error(x(387));g=B.pendingProps,C=B.memoizedState,E=C.element,w0(A,B),Si(B,g,null,Q);var n=B.memoizedState;if(g=n.element,C.isDehydrated)if(C={element:g,isDehydrated:!1,cache:n.cache,pendingSuspenseBoundaries:n.pendingSuspenseBoundaries,transitions:n.transitions},B.updateQueue.baseState=C,B.memoizedState=C,B.flags&256){E=iI(Error(x(423)),B),B=HD(A,B,g,Q,E);break A}else if(g!==E){E=iI(Error(x(424)),B),B=HD(A,B,g,Q,E);break A}else for(xQ=pC(B.stateNode.containerInfo.firstChild),TQ=B,tB=!0,Zg=null,Q=l0(B,null,g,Q),B.child=Q;Q;)Q.flags=Q.flags&-3|4096,Q=Q.sibling;else{if(II(),g===E){B=WE(A,B,Q);break A}lQ(A,B,g,Q)}B=B.child}return B;case 5:return s0(B),A===null&&Vl(B),g=B.type,E=B.pendingProps,C=A!==null?A.memoizedProps:null,n=E.children,Ll(g,E)?n=null:C!==null&&Ll(g,C)&&(B.flags|=32),S0(A,B),lQ(A,B,n,Q),B.child;case 6:return A===null&&Vl(B),null;case 13:return W0(A,B,Q);case 4:return nF(B,B.stateNode.containerInfo),g=B.pendingProps,A===null?B.child=tI(B,null,g,Q):lQ(A,B,g,Q),B.child;case 11:return g=B.type,E=B.pendingProps,E=B.elementType===g?E:kg(g,E),XD(A,B,g,E,Q);case 7:return lQ(A,B,B.pendingProps,Q),B.child;case 8:return lQ(A,B,B.pendingProps.children,Q),B.child;case 12:return lQ(A,B,B.pendingProps.children,Q),B.child;case 10:A:{if(g=B.type._context,E=B.pendingProps,C=B.memoizedProps,n=E.value,_A(Xi,g._currentValue),g._currentValue=n,C!==null)if(Hg(C.value,n)){if(C.children===E.children&&!YQ.current){B=WE(A,B,Q);break A}}else for(C=B.child,C!==null&&(C.return=B);C!==null;){var e=C.dependencies;if(e!==null){n=C.child;for(var t=e.firstContext;t!==null;){if(t.context===g){if(C.tag===1){t=XE(-1,Q&-Q),t.tag=2;var o=C.updateQueue;if(o!==null){o=o.shared;var c=o.pending;c===null?t.next=t:(t.next=c.next,c.next=t),o.pending=t}}C.lanes|=Q,t=C.alternate,t!==null&&(t.lanes|=Q),xl(C.return,Q,B),e.lanes|=Q;break}t=t.next}}else if(C.tag===10)n=C.type===B.type?null:C.child;else if(C.tag===18){if(n=C.return,n===null)throw Error(x(341));n.lanes|=Q,e=n.alternate,e!==null&&(e.lanes|=Q),xl(n,Q,B),n=C.sibling}else n=C.child;if(n!==null)n.return=C;else for(n=C;n!==null;){if(n===B){n=null;break}if(C=n.sibling,C!==null){C.return=n.return,n=C;break}n=n.return}C=n}lQ(A,B,E.children,Q),B=B.child}return B;case 9:return E=B.type,g=B.pendingProps.children,BI(B,Q),E=Fg(E),g=g(E),B.flags|=1,lQ(A,B,g,Q),B.child;case 14:return g=B.type,E=kg(g,B.pendingProps),E=kg(g.type,E),LD(A,B,g,E,Q);case 15:return X0(A,B,B.type,B.pendingProps,Q);case 17:return g=B.type,E=B.pendingProps,E=B.elementType===g?E:kg(g,E),si(A,B),B.tag=1,NQ(g)?(A=!0,ki(B)):A=!1,BI(B,Q),o0(B,g,E),Ol(B,g,E,Q),jl(null,B,g,!0,A,Q);case 19:return v0(A,B,Q);case 22:return L0(A,B,Q)}throw Error(x(156,B.tag))};function EM(A,B){return pU(A,B)}function Wu(A,B,Q,g){this.tag=A,this.key=Q,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=B,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=g,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lg(A,B,Q,g){return new Wu(A,B,Q,g)}function MF(A){return A=A.prototype,!(!A||!A.isReactComponent)}function vu(A){if(typeof A=="function")return MF(A)?1:0;if(A!=null){if(A=A.$$typeof,A===Hs)return 11;if(A===Ws)return 14}return 2}function kC(A,B){var Q=A.alternate;return Q===null?(Q=lg(A.tag,B,A.key,A.mode),Q.elementType=A.elementType,Q.type=A.type,Q.stateNode=A.stateNode,Q.alternate=A,A.alternate=Q):(Q.pendingProps=B,Q.type=A.type,Q.flags=0,Q.subtreeFlags=0,Q.deletions=null),Q.flags=A.flags&14680064,Q.childLanes=A.childLanes,Q.lanes=A.lanes,Q.child=A.child,Q.memoizedProps=A.memoizedProps,Q.memoizedState=A.memoizedState,Q.updateQueue=A.updateQueue,B=A.dependencies,Q.dependencies=B===null?null:{lanes:B.lanes,firstContext:B.firstContext},Q.sibling=A.sibling,Q.index=A.index,Q.ref=A.ref,Q}function Di(A,B,Q,g,E,C){var n=2;if(g=A,typeof A=="function")MF(A)&&(n=1);else if(typeof A=="string")n=5;else A:switch(A){case Le:return dn(Q.children,E,C,B);case Ss:n=8,E|=8;break;case Fl:return A=lg(12,Q,B,E|2),A.elementType=Fl,A.lanes=C,A;case cl:return A=lg(13,Q,B,E),A.elementType=cl,A.lanes=C,A;case Dl:return A=lg(19,Q,B,E),A.elementType=Dl,A.lanes=C,A;case aU:return wo(Q,E,C,B);default:if(typeof A=="object"&&A!==null)switch(A.$$typeof){case iU:n=10;break A;case oU:n=9;break A;case Hs:n=11;break A;case Ws:n=14;break A;case rC:n=16,g=null;break A}throw Error(x(130,A==null?A:typeof A,""))}return B=lg(n,Q,B,E),B.elementType=A,B.type=g,B.lanes=C,B}function dn(A,B,Q,g){return A=lg(7,A,g,B),A.lanes=Q,A}function wo(A,B,Q,g){return A=lg(22,A,g,B),A.elementType=aU,A.lanes=Q,A.stateNode={isHidden:!1},A}function Ka(A,B,Q){return A=lg(6,A,null,B),A.lanes=Q,A}function ja(A,B,Q){return B=lg(4,A.children!==null?A.children:[],A.key,B),B.lanes=Q,B.stateNode={containerInfo:A.containerInfo,pendingChildren:null,implementation:A.implementation},B}function Vu(A,B,Q,g,E){this.tag=B,this.containerInfo=A,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Na(0),this.expirationTimes=Na(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Na(0),this.identifierPrefix=g,this.onRecoverableError=E,this.mutableSourceEagerHydrationData=null}function dF(A,B,Q,g,E,C,n,e,t){return A=new Vu(A,B,Q,e,t),B===1?(B=1,C===!0&&(B|=8)):B=0,C=lg(3,null,null,B),A.current=C,C.stateNode=A,C.memoizedState={element:g,isDehydrated:Q,cache:null,transitions:null,pendingSuspenseBoundaries:null},CF(C),A}function xu(A,B,Q){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xe,key:g==null?null:""+g,children:A,containerInfo:B,implementation:Q}}function CM(A){if(!A)return XC;A=A._reactInternals;A:{if(pn(A)!==A||A.tag!==1)throw Error(x(170));var B=A;do{switch(B.tag){case 3:B=B.stateNode.context;break A;case 1:if(NQ(B.type)){B=B.stateNode.__reactInternalMemoizedMergedChildContext;break A}}B=B.return}while(B!==null);throw Error(x(171))}if(A.tag===1){var Q=A.type;if(NQ(Q))return E0(A,Q,B)}return B}function nM(A,B,Q,g,E,C,n,e,t){return A=dF(Q,g,!0,A,E,C,n,e,t),A.context=CM(null),Q=A.current,g=sQ(),E=mC(Q),C=XE(g,E),C.callback=B??null,JC(Q,C,E),A.current.lanes=E,ww(A,E,g),pQ(A,g),A}function io(A,B,Q,g){var E=B.current,C=sQ(),n=mC(E);return Q=CM(Q),B.context===null?B.context=Q:B.pendingContext=Q,B=XE(C,n),B.payload={element:A},g=g===void 0?null:g,g!==null&&(B.callback=g),A=JC(E,B,n),A!==null&&(Sg(A,E,n,C),oi(A,E,n)),n}function zi(A){if(A=A.current,!A.child)return null;switch(A.child.tag){case 5:return A.child.stateNode;default:return A.child.stateNode}}function PD(A,B){if(A=A.memoizedState,A!==null&&A.dehydrated!==null){var Q=A.retryLane;A.retryLane=Q!==0&&Q<B?Q:B}}function fF(A,B){PD(A,B),(A=A.alternate)&&PD(A,B)}function Tu(){return null}var eM=typeof reportError=="function"?reportError:function(A){console.error(A)};function GF(A){this._internalRoot=A}oo.prototype.render=GF.prototype.render=function(A){var B=this._internalRoot;if(B===null)throw Error(x(409));io(A,B,null,null)};oo.prototype.unmount=GF.prototype.unmount=function(){var A=this._internalRoot;if(A!==null){this._internalRoot=null;var B=A.containerInfo;Yn(function(){io(null,A,null,null)}),B[SE]=null}};function oo(A){this._internalRoot=A}oo.prototype.unstable_scheduleHydration=function(A){if(A){var B=XU();A={blockedOn:null,target:A,priority:B};for(var Q=0;Q<MC.length&&B!==0&&B<MC[Q].priority;Q++);MC.splice(Q,0,A),Q===0&&SU(A)}};function uF(A){return!(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11)}function ao(A){return!(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11&&(A.nodeType!==8||A.nodeValue!==" react-mount-point-unstable "))}function qD(){}function Ou(A,B,Q,g,E){if(E){if(typeof g=="function"){var C=g;g=function(){var o=zi(n);C.call(o)}}var n=nM(B,g,A,0,null,!1,!1,"",qD);return A._reactRootContainer=n,A[SE]=n.current,Ot(A.nodeType===8?A.parentNode:A),Yn(),n}for(;E=A.lastChild;)A.removeChild(E);if(typeof g=="function"){var e=g;g=function(){var o=zi(t);e.call(o)}}var t=dF(A,0,!1,null,null,!1,!1,"",qD);return A._reactRootContainer=t,A[SE]=t.current,Ot(A.nodeType===8?A.parentNode:A),Yn(function(){io(B,t,Q,g)}),t}function lo(A,B,Q,g,E){var C=Q._reactRootContainer;if(C){var n=C;if(typeof E=="function"){var e=E;E=function(){var t=zi(n);e.call(t)}}io(B,n,A,E)}else n=Ou(Q,B,A,E,g);return zi(n)}yU=function(A){switch(A.tag){case 3:var B=A.stateNode;if(B.current.memoizedState.isDehydrated){var Q=Mt(B.pendingLanes);Q!==0&&(xs(B,Q|1),pQ(B,GB()),!(kA&6)&&(oI=GB()+500,vC()))}break;case 13:Yn(function(){var g=HE(A,1);if(g!==null){var E=sQ();Sg(g,A,1,E)}}),fF(A,1)}};Ts=function(A){if(A.tag===13){var B=HE(A,134217728);if(B!==null){var Q=sQ();Sg(B,A,134217728,Q)}fF(A,134217728)}};ZU=function(A){if(A.tag===13){var B=mC(A),Q=HE(A,B);if(Q!==null){var g=sQ();Sg(Q,A,B,g)}fF(A,B)}};XU=function(){return SA};LU=function(A,B){var Q=SA;try{return SA=A,B()}finally{SA=Q}};Yl=function(A,B,Q){switch(B){case"input":if(Ml(A,Q),B=Q.name,Q.type==="radio"&&B!=null){for(Q=A;Q.parentNode;)Q=Q.parentNode;for(Q=Q.querySelectorAll("input[name="+JSON.stringify(""+B)+'][type="radio"]'),B=0;B<Q.length;B++){var g=Q[B];if(g!==A&&g.form===A.form){var E=Eo(g);if(!E)throw Error(x(90));sU(g),Ml(g,E)}}}break;case"textarea":cU(A,Q);break;case"select":B=Q.value,B!=null&&qe(A,!!Q.multiple,B,!1)}};GU=DF;uU=Yn;var zu={usingClientEntryPoint:!1,Events:[ow,ve,Eo,dU,fU,DF]},lt={findFiberByHostInstance:cn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ku={bundleType:lt.bundleType,version:lt.version,rendererPackageName:lt.rendererPackageName,rendererConfig:lt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vE.ReactCurrentDispatcher,findHostInstanceByFiber:function(A){return A=YU(A),A===null?null:A.stateNode},findFiberByHostInstance:lt.findFiberByHostInstance||Tu,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $w=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$w.isDisabled&&$w.supportsFiber)try{Ao=$w.inject(Ku),EE=$w}catch{}}KQ.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zu;KQ.createPortal=function(A,B){var Q=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!uF(B))throw Error(x(200));return xu(A,B,null,Q)};KQ.createRoot=function(A,B){if(!uF(A))throw Error(x(299));var Q=!1,g="",E=eM;return B!=null&&(B.unstable_strictMode===!0&&(Q=!0),B.identifierPrefix!==void 0&&(g=B.identifierPrefix),B.onRecoverableError!==void 0&&(E=B.onRecoverableError)),B=dF(A,1,!1,null,null,Q,!1,g,E),A[SE]=B.current,Ot(A.nodeType===8?A.parentNode:A),new GF(B)};KQ.findDOMNode=function(A){if(A==null)return null;if(A.nodeType===1)return A;var B=A._reactInternals;if(B===void 0)throw typeof A.render=="function"?Error(x(188)):(A=Object.keys(A).join(","),Error(x(268,A)));return A=YU(B),A=A===null?null:A.stateNode,A};KQ.flushSync=function(A){return Yn(A)};KQ.hydrate=function(A,B,Q){if(!ao(B))throw Error(x(200));return lo(null,A,B,!0,Q)};KQ.hydrateRoot=function(A,B,Q){if(!uF(A))throw Error(x(405));var g=Q!=null&&Q.hydratedSources||null,E=!1,C="",n=eM;if(Q!=null&&(Q.unstable_strictMode===!0&&(E=!0),Q.identifierPrefix!==void 0&&(C=Q.identifierPrefix),Q.onRecoverableError!==void 0&&(n=Q.onRecoverableError)),B=nM(B,null,A,1,Q??null,E,!1,C,n),A[SE]=B.current,Ot(A),g)for(A=0;A<g.length;A++)Q=g[A],E=Q._getVersion,E=E(Q._source),B.mutableSourceEagerHydrationData==null?B.mutableSourceEagerHydrationData=[Q,E]:B.mutableSourceEagerHydrationData.push(Q,E);return new oo(B)};KQ.render=function(A,B,Q){if(!ao(B))throw Error(x(200));return lo(null,A,B,!1,Q)};KQ.unmountComponentAtNode=function(A){if(!ao(A))throw Error(x(40));return A._reactRootContainer?(Yn(function(){lo(null,null,A,!1,function(){A._reactRootContainer=null,A[SE]=null})}),!0):!1};KQ.unstable_batchedUpdates=DF;KQ.unstable_renderSubtreeIntoContainer=function(A,B,Q,g){if(!ao(Q))throw Error(x(200));if(A==null||A._reactInternals===void 0)throw Error(x(38));return lo(A,B,Q,!1,g)};KQ.version="18.2.0-next-9e3b772b8-20220608";function IM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(IM)}catch(A){console.error(A)}}IM(),nU.exports=KQ;var tM=nU.exports;const Ai=Js(tM);var _D=tM;ll.createRoot=_D.createRoot,ll.hydrateRoot=_D.hydrateRoot;var es={exports:{}};(function(A,B){(function(Q,g){A.exports=g()})(Gf,function(){(function(n){function e(){return new Promise(function(h,N){var U="wss://javascript.info/article/websocket/chat/ws";console.log("[WS]: Start testing"),console.log("[WS]: Connecting to "+U);try{var k=new WebSocket(U);k.onopen=function(r){var d="test-msg";console.log("[WS]: Connection established"),console.log("[WS]: Sending data to socket, msg: "+d),k.send(d)},k.onmessage=function(r){console.log("[WS]: Data received from server: "+r.data),console.log("[WS]: Finish testing - OK"),h()},k.onerror=function(r){console.log("[WS]: ",r.message),console.log("[WS]: Finish testing - ERROR"),N()}}catch(r){console.log("[WS]: ",r),N()}})}function t(){return new Promise(function(h,N){if(console.log("[WebWorker]: Start testing"),typeof Worker<"u"){console.log("[WebWorker]: Has Web Worker support");try{var U=new Worker(window.URL.createObjectURL(new Blob(["onmessage = function(e) {console.log('[WebWorker]: Message received from main script');var workerResult = e.data[0];console.log('[WebWorker]: Posting message back to main script');postMessage(workerResult);}"])));U.onmessage=function(k){console.log("[WebWorker]: Message received from worker: ",k.data),console.log("[WebWorker]: Finish testing - OK"),h()},U.onerror=function(k){console.error("[WebWorker]: Finish testing - ERROR"),N()},U.postMessage(["test-msg"])}catch{console.error("[WebWorker]: Finish testing - ERROR"),N()}}else console.log("[WebWorker]: No Web Worker support"),N()})}function o(){return new Promise(function(h,N){console.log("[ORIGN]: Start testing");var U=window.location.protocol,k=window.location.hostname;U==="https:"||U==="file:"||U==="http:"&&(k.indexOf("localhost")>-1||k.indexOf("127.0.0.1")>-1)?(console.log("[ORIGN]: Secure"),console.log("[ORIGN]: Finish testing - OK"),h()):(console.log("[ORIGN]: Not secure"),console.log("[ORIGN]: Finish testing - ERROR"),N())})}function c(){return new Promise(function(h,N){console.log("[AUDIO CONTEXT]: Start testing");var U=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia||navigator.mediaDevices&&navigator.mediaDevices.getUserMedia,k=window.AudioContext||window.webkitAudioContext||window.mozAudioContext;U&&k?(console.log("[AUDIO CONTEXT]: Audio supported"),console.log("[AUDIO CONTEXT]: Finish testing - OK"),h()):(console.log("[AUDIO CONTEXT]: Audio NOT supported"),console.log("[AUDIO CONTEXT DETAILS]:",D()),console.log("[AUDIO CONTEXT]: Finish testing - ERROR"),N())})}function D(){var h="";return h+="getUserMedia: ",h+=navigator.getUserMedia?"1":"0",h+=", ",h+="mediaDevices: ",h+=navigator.mediaDevices?"1":"0",h+=", ",h+="mediaDevices.getUserMedia: ",h+=navigator.mediaDevices&&navigator.mediaDevices.getUserMedia?"1":"0",h+=", ",h+="webkitGUM: ",h+=navigator.webkitGetUserMedia?"1":"0",h+=", ",h+="mozGUM: ",h+=navigator.mozGetUserMedia?"1":"0",h+=", ",h+="msGUM: ",h+=navigator.msGetUserMedia?"1":"0",h+=`
`,h+=`window: 
`,h+="AudioContext: ",h+=window.AudioContext?"1":"0",h+=", ",h+="webkitAC: ",h+=window.webkitAudioContext?"1":"0",h+=", ",h+="mozAC: ",h+=window.mozAudioContext?"1":"0",h+=`
`,h+="userAgent: ",h+=navigator.userAgent,h}function G(){var h=this,N=Object.keys(this);function U(k){return h[k]()}return N=N.filter(k=>k!=="run"&&k!=="getAudioDebugInfo"),N.reduce((k,r)=>k.then(()=>U(r)),Promise.resolve())}n.alanDiagnostic={testSocket:e,testWorker:t,testOrignSecure:o,testAudioContext:c,getAudioDebugInfo:D,run:G}})(window),function(n){var e="studio.alan.app",t={baseURL:"wss://"+(e.indexOf("$")===0||e===""?window.location.hostname:e),codec:"opus",version:"2.0.45",platform:"web"};function o(){var U=this;this._worker=new Worker(window.URL.createObjectURL(new Blob([`(function(ns) {
    'use strict';

    var SENT_TS    = 1;
    var REMOTE_TS  = 2;
    var TIMESTAMP  = 3;
    var AUDIO_DATA = 4;
    var JSON_DATA  = 5;

    AlanFrame.fields = [
        propUint64(SENT_TS,   'sentTs'),
        propUint64(REMOTE_TS, 'remoteTs'),
        propUint64(TIMESTAMP, 'timestamp'),
        propBytes(AUDIO_DATA, 'audioData'),
        propJson(JSON_DATA,   'jsonData'),
    ];

    function AlanFrameProp(type, name, sizeF, readF, writeF) {
        this.type   = type;
        this.name   = name;
        this.sizeF  = sizeF;
        this.writeF = writeF;
        this.readF  = readF;
    }

    function fixedSize(size) {
        return function() {
            return size;
        }
    }

    function bufferSize(buffer) {
        return 4 + byteLength(buffer);
    }

    function writeUIntN(uint8array, value, nBytes, offset) {
        for (var i = 0; i < nBytes; i++ ) {
            uint8array[offset + i] = 0xFF & value;
            value /= 256;
        }
    }

    function readUIntN(uint8array, nBytes, offset) {
        var r = 0;
        for (var i = nBytes - 1; i >= 0; i-- ) {
            r *= 256;
            r += 0xFF & uint8array[offset + i];
        }
        return r;
    }

    function writeUInt64(uint8array, value, offset) {
        writeUIntN(uint8array, value, 8, offset);
    }

    function readUInt64(uint8array, offset) {
        return readUIntN(uint8array, 8, offset);
    }

    function writeUInt32(uint8array, value, offset) {
        writeUIntN(uint8array, value, 4, offset);
    }

    function readUInt32(uint8array, offset) {
        return readUIntN(uint8array, 4, offset);
    }

    function writeBuffer(uint8array, buffer, offset) {
        buffer = toUint8(buffer);
        writeUInt32(uint8array, buffer.length, offset);
        for (var i = 0; i < buffer.length; i++ ) {
            uint8array[offset + 4 + i] = buffer[i];
        }
    }

    function readBuffer(uint8array, offset) {
        var size = readUInt32(uint8array, offset);
        if (size > 1024 * 1024) {
            throw new Error('buffer too big');
        }
        return uint8array.subarray(offset + 4, offset + 4 + size);
    }

    function readUTF8(uint8array, offset) {
        var size = readUInt32(uint8array, offset);
        if (size > 1024 * 1024) {
            throw new Error('string too big');
        }
        return String.fromCharCode.apply(null, uint8array.slice(offset + 4, offset + 4 + size));
    }

    function writeUTF8(uint8array, string, offset) {
        writeUInt32(uint8array, string.length, offset);
        for (var i = 0; i < string.length; i++ ) {
            uint8array[offset + 4 + i] = string.charCodeAt(i);
        }
    }

    function sizeUTF8(string) {
        return 4 + string.length;
    }

    function propUint32(type, name) {
        return new AlanFrameProp(type, name, fixedSize(4), readUInt32, writeUInt32);
    }

    function propUint64(type, name) {
        return new AlanFrameProp(type, name, fixedSize(8), readUInt64, writeUInt64);
    }

    function propBytes(type, name) {
        return new AlanFrameProp(type, name, bufferSize, readBuffer, writeBuffer);
    }

    function propJson(type, name) {
        return new AlanFrameProp(type, name, sizeUTF8, readUTF8, writeUTF8);
    }

    AlanFrame.fieldByType = function(type) {
        for (var i = 0; i < AlanFrame.fields.length; i++ ) {
            var frame = AlanFrame.fields[i];
            if (frame.type === type) {
                return frame;
            }
        }
        throw new Error('invalid field: ' + type);
    };

    function AlanFrame() {
        this.version = 1;
    }

    AlanFrame.prototype.write = function() {
        var result = new Uint8Array(this.writeSize());
        var offset = 1;
        result[0]  = 1;
        for (var i = 0; i < AlanFrame.fields.length; i++ ) {
            var field = AlanFrame.fields[i];
            var value = this[field.name];
            if (value) {
                result[offset++] = field.type;
                field.writeF(result, value, offset);
                offset += field.sizeF(value);
            }
        }
        return result.buffer;
    };

    /**
     * @returns UInt8Array
     */
    AlanFrame.prototype.writeSize = function() {
        var size = 1;
        for (var i = 0; i < AlanFrame.fields.length; i++ ) {
            var field = AlanFrame.fields[i];
            var value = this[field.name];
            if (value) {
                size += 1 + field.sizeF(value);
            }
        }
        return size;
    };

    AlanFrame.prototype.toString = function() {
        var first = true, str = '';
        for (var k in this) {
            if (this.hasOwnProperty(k)) {
                if (first) {
                    str += k + ' = ';
                    first = false;
                } else {
                    str += ', ' + k + ' = ';
                }
                var v = this[k];
                if (typeof(v) === 'object') {
                    str += 'bytes[' + byteLength(v) + ']';
                } else {
                    str += v;
                }
            }
        }
        return str;
    };

    function byteLength(b) {
        if (b instanceof Uint8Array) {
            return b.length;
        }
        if (b instanceof ArrayBuffer) {
            return b.byteLength;
        }
    }

    function toArrayBuffer(buffer) {
        if (buffer instanceof ArrayBuffer) {
            return buffer;
        }
        return buffer.buffer;
    }

    function toUint8(buffer) {
        if (buffer instanceof Uint8Array) {
            return buffer;
        }
        if (buffer instanceof ArrayBuffer) {
            return new Uint8Array(buffer);
        }
        throw new Error('invalid buffer type');
    }

    function parse(uint8array) {
        uint8array = toUint8(uint8array);
        var r = new AlanFrame();
        var offset = 0;
        r.version = uint8array[offset++];
        while (offset < uint8array.length) {
            var frame = AlanFrame.fieldByType(uint8array[offset++]);
            r[frame.name] = frame.readF(uint8array, offset);
            offset += frame.sizeF(r[frame.name]);
        }
        return r;
    }

    ns.create = function() {
        return new AlanFrame();
    };

    ns.parse = parse;

})(typeof(window)            !== 'undefined' ? (function() {window.alanFrame = {}; return window.alanFrame; })() :
   typeof(WorkerGlobalScope) !== 'undefined' ? (function() {alanFrame = {}; return alanFrame; })() :
   exports);


'use strict';



var ALAN_OFF       = 'off';
var ALAN_SPEAKING  = 'speaking';
var ALAN_LISTENING = 'listening';

function ConnectionImpl(config, auth, mode) {
    var _this = this;
    this._config = config;
    this._auth = auth;
    this._mode = mode;
    this._projectId = config.projectId;
    this._url = config.url;
    this._connected = false;
    this._authorized = false;
    this._dialogId = null;
    this._callId = 1;
    this._callSent = {};
    this._callWait = [];
    this._failed = false;
    this._closed = false;
    this._reconnectTimeout = 100;
    this._cleanups = [];
    this._format = null;
    this._formatSent = false;
    this._frameQueue = [];
    this._remoteSentTs = 0;
    this._remoteRecvTs = 0;
    this._rtt = 25;
    this._rttAlpha = 1./16;
    this._alanState = ALAN_OFF;
    this._sendTimer = setInterval(_this._flushQueue.bind(_this), 50);
    this._visualState = {};
    this._addCleanup(function() {clearInterval(_this._sendTimer);});
    this._connect();
    console.log('Alan: connection created');
}

ConnectionImpl.prototype._addCleanup = function(f) {
    this._cleanups.push(f);
};

ConnectionImpl.prototype._onConnectStatus = function(s) {
    console.log('Alan: connection status - ' + s);
    this._fire('connectStatus', s);
};

ConnectionImpl.prototype._fire = function(event, object) {
    if (event === 'options') {
        if (object.versions) {
            object.versions['alanbase:web'] = this._config.version;
        }
    }
    postMessage(['fireEvent', event, object]);
};

ConnectionImpl.prototype._connect = function() {
    var _this = this;
    if (this._socket) {
        console.error('socket is already connected');
        return;
    }
    console.log('Alan: connecting - ' + getConnectionDetails(this._url));
    this._socket = new WebSocket(this._url);
    this._socket.binaryType = 'arraybuffer';
    console.time('Alan: connection time');
    this._socket.onopen = function(e) {
        console.info('Alan: connected');
        _this._connected = true;
        _this._reconnectTimeout = 100;
        _this._fire('connection', {status: 'connected'});
        console.timeEnd('Alan: connection time');
        if (_this._auth) {
            _this._fire('connection', {status: 'authorizing'});
            _this._callAuth();
        } else {
            _this._callWait.forEach(function(c) {  _this._sendCall(c); });
            _this._callWait = [];
        }
    };
    this._socket.onmessage = function(msg) {
        if (msg.data instanceof ArrayBuffer) {
            var f = alanFrame.parse(msg.data);
            if (f.sentTs > 0) {
                _this._remoteSentTs = f.sentTs;
                _this._remoteRecvTs = Date.now();
            } else {
                _this._remoteSentTs = null;
                _this._remoteRecvTs = null;
            }
            var rtt = 0;
            if (f.remoteTs) {
                rtt = Date.now() - f.remoteTs;
            }
            _this._rtt = _this._rttAlpha * rtt  + (1 - _this._rttAlpha) * _this._rtt;
            var uint8 = new Uint8Array(f.audioData);
            var frame = [];
            var batch = 10000;
            for (var offset = 0; offset < uint8.byteLength; offset += batch) {
                var b = uint8.subarray(offset, Math.min(uint8.byteLength, offset + batch));
                let a = String.fromCharCode.apply(null, b);
                frame.push(a);
            }
            frame = frame.join('');
            postMessage(['alanAudio', 'playFrame', frame]);
        } else if (typeof(msg.data) === 'string') {
            msg = JSON.parse(msg.data);
            if (msg.i) {
                var c = _this._callSent[msg.i];
                delete _this._callSent[msg.i];
                if (c && c.callback) {
                    c.callback(msg.e, msg.r);
                }
            } else if (msg.e) {
                if (msg.e === 'text') {
                    postMessage(['alanAudio', 'playText', msg.p]);
                } else if (msg.e === 'afterText') {
                    postMessage(['alanAudio', 'playAfterText', msg.p]);
                } else if (msg.e === 'showPopup') {
                    postMessage(['alanAudio', 'showPopup', msg.p]);
                } else if (msg.e === 'command') {
                    postMessage(['alanAudio', 'playCommand', msg.p]);
                } else if (msg.e === 'inactivity') {
                    postMessage(['alanAudio', 'stop']);
                } else {
                    _this._fire(msg.e, msg.p);
                }
            }
        } else {
            console.error('invalid message type');
        }
    };
    this._socket.onerror = function(evt) {
        console.error('Alan: connection closed due to error: ', evt);
    };
    this._socket.onclose = function(evt) {
        console.info('Alan: connection closed');
        _this._connected = false;
        _this._authorized = false;
        _this._socket = null;
        _this._onConnectStatus('disconnected');
        if (!_this._failed && _this._reconnectTimeout && !_this._closed) {
            console.log('Alan: reconnecting in %s ms.', _this._reconnectTimeout);
            _this._reConnect = setTimeout(_this._connect.bind(_this), _this._reconnectTimeout);
            if (_this._reconnectTimeout < 3000) {
                _this._reconnectTimeout *= 2;
            } else {
                _this._reconnectTimeout += 500;
            }
            _this._reconnectTimeout = Math.min(7000, _this._reconnectTimeout);
        }
    };
    this._addCleanup(function() {
        if (this._socket) {
            this._socket.close();
            this._socket = null;
        }
    });
};

ConnectionImpl.prototype._callAuth = function() {
    var _this = this;
    var callback = function(err, r) {
        if (!err && r.status === 'authorized') {
            _this._authorized = true;
            _this._formatSent = false;
            if (r.dialogId) {
                postMessage(['setDialogId', r.dialogId]);
                _this._dialogId = r.dialogId;
            }
            _this._onAuthorized();
            _this._onConnectStatus('authorized');
        } else if (err === 'auth-failed') {
            _this._onConnectStatus('auth-failed');
            if (_this._socket) {
                _this._socket.close();
                _this._socket = null;
                _this._failed = true;
            }
        } else {
            _this._onConnectStatus('invalid-auth-response');
            console.log('Alan: invalid auth response', err, r);
        }
    };
    var authParam = this._auth;
    authParam.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (this._dialogId) {
        authParam.dialogId = this._dialogId;
    }
    authParam.mode = this._mode;
    this._sendCall({cid: this._callId++, method: '_auth_', callback: callback, param: authParam});
    return this;
};

ConnectionImpl.prototype._sendCall = function(call) {
    this._sendFormatIfNeeded(false);
    this._socket.send(JSON.stringify({i: call.cid, m: call.method, p: call.param}));
    if (call.callback) {
        this._callSent[call.cid] = call;
    }
};

ConnectionImpl.prototype._onAuthorized = function() {
    var _this = this;
    this._callWait.forEach(function(c) {
        _this._sendCall(c);
    });
    this._callWait = [];
};

ConnectionImpl.prototype.close = function() {
    for (var i = 0; i < this._cleanups.length; i++ ) {
        this._cleanups[i]();
    }
    this._cleanups = [];
    this._closed = true;
    
    if (this._socket && (this._socket.readyState === WebSocket.OPEN || this._socket.readyState === WebSocket.CONNECTING)) {
        this._socket.close();
        this._socket = null;
    }
    console.log('Alan: closed connection to: ' + getConnectionDetails(this._url));
    //close(); TODO: delete it!
};

ConnectionImpl.prototype.call = function(cid, method, param) {
    var call = {cid: cid, method: method, param: param, callback: function(err, obj) {
        if (cid) {
            postMessage(['callback', cid, err, obj]);
        }
    }};
    if (this._authorized || this._connected && !this._auth) {
        this._sendCall(call);
    } else {
        this._callWait.push(call);
    }
};

ConnectionImpl.prototype.setVisual = function(state) {
    this._visualState = state;
    this.call(null, '_visual_', state);
};

ConnectionImpl.prototype._sendFrame = function(frame) {
    if (!this._socket) {
        console.error('sendFrame to closed socket');
        return;
    }
    frame.sentTs = Date.now();
    if (this._remoteSentTs > 0 && this._remoteRecvTs > 0) {
        frame.remoteTs = this._remoteSentTs + Date.now() - this._remoteRecvTs;
    }
    this._socket.send(frame.write());
};

ConnectionImpl.prototype._listen = function() {
    var f = alanFrame.create();
    f.jsonData = JSON.stringify({signal: 'listen'});
    this._frameQueue.push(f);
    this._alanState = ALAN_LISTENING;
};

ConnectionImpl.prototype._stopListen = function() {
    var f = alanFrame.create();
    f.jsonData = JSON.stringify({signal: 'stopListen'});
    this._frameQueue.push(f);
    this._alanState = ALAN_OFF;
};

ConnectionImpl.prototype._onAudioFormat = function(format) {
    this._formatSent = false;
    this._format = format;
};

ConnectionImpl.prototype._onMicFrame = function(sampleRate, frame) {
    if (this._alanState === ALAN_SPEAKING) {
        return;
    }
    if (this._alanState === ALAN_OFF) {
        this._listen();
    }
    if (this._alanState !== ALAN_LISTENING) {
        console.error('invalid alan state: ' + this._alanState);
        return;
    }
    this._sendFormatIfNeeded(true);
    var f = alanFrame.create();
    f.audioData = frame;
    this._frameQueue.push(f);
};

ConnectionImpl.prototype._sendFormatIfNeeded = function(inQueue) {
    if (!this._format || this._formatSent) {
        return;
    }
    this._formatSent = true;
    var f = alanFrame.create();
    f.jsonData = JSON.stringify({format: this._format});
    if (inQueue) {
        this._frameQueue.push(f);
    } else {
        this._sendFrame(f);
    }
};

ConnectionImpl.prototype._flushQueue = function() {
    if (!this._socket || !this._connected) {
        var d = 0;
        while (this._frameQueue.length > 100 && !this._frameQueue[0].jsonData) {
            this._frameQueue.shift();
            d++;
        }
        if (d > 0) {
            console.error('dropped: %s, frames', d);
        }
        return;
    }
    while (this._frameQueue.length > 0 && this._socket && this._socket.bufferedAmount < 64 * 1024) {
        this._sendFrame(this._frameQueue.shift());
    }
};

function getConnectionDetails(url){
    var urlParts = url.split('/');
    var projectId = urlParts[4];
    var environment = urlParts[5];
    var host = urlParts[2];

    if (projectId && environment && host) {
        return ' (ProjectID: ' + projectId + ', environment: ' + environment + ', host: ' + host + ')';
    }

    return url;
}

function connectProject(config, auth, mode) {
    var c = new ConnectionImpl(config, auth, mode);
    c.onAudioEvent = function(event, arg1, arg2) {
        if (event === 'format') {
            c._onAudioFormat(arg1);
        } else if (event === 'frame') {
            c._onMicFrame(arg1, arg2);
        } else if (event === 'micStop' || event === 'playStart') {
            c._stopListen();
        } else {
            console.error('unknown audio event: ' + event, arg1, arg2);
        }
    };
    return c;
}

var factories = {
    connectProject: connectProject,
};

var currentConnect = null;

onmessage = function(e) {
    var name = e.data[0];
    try {
        if (!currentConnect) {
            currentConnect = factories[name].apply(null, e.data.slice(1, e.data.length));
        } else {
            currentConnect[name].apply(currentConnect, e.data.slice(1, e.data.length));
        }
    } catch(e) {
        console.error('error calling: ' + name, e);
    }
};
`],{type:"text/javascript"}))),this._worker.onmessage=function(k){if(k.data[0]==="fireEvent"){U._fire(k.data[1],k.data[2]);return}if(k.data[0]==="alanAudio"){if(k.data[1]==="playText"){alanAudio.playText(k.data[2]);return}if(k.data[1]==="playAfterText"){alanAudio.playAfterText(k.data[2]);return}if(k.data[1]==="playAudio"||k.data[1]==="playFrame"){alanAudio.playAudio(k.data[2]);return}if(k.data[1]==="playEvent"||k.data[1]==="playCommand"){alanAudio.playEvent(k.data[2]);return}if(k.data[1]==="showPopup"){alanAudio.showPopup(k.data[2]);return}if(k.data[1]==="stop"){alanAudio.stop();return}}if(k.data[0]==="callback"){U._callback[k.data[1]](k.data[2],k.data[3]),delete U._callback[k.data[1]];return}if(k.data[0]==="setDialogId"){U._dialogId=k.data[1];return}console.error("invalid event",k.data)},this._worker.onerror=function(k){console.error("error in worker: "+k.filename+":"+k.lineno+" - "+k.message)},this._handlers={},this._cleanups=[],this._callback={},this._callIds=1,this._config={}}o.prototype.on=function(U,k){var r=this._handlers[U];r||(r=[],this._handlers[U]=r),r.push(k)},o.prototype.off=function(U,k){var r=this._handlers[U];if(r){var d=r.indexOf(k);d>=0&&r.splice(d,1)}},o.prototype.getSettings=function(){return{server:t.baseURL,projectId:this._config.projectId,dialogId:this._dialogId}},o.prototype.setVisual=function(U){this._worker.postMessage(["setVisual",U])},o.prototype.call=function(U,k,r){var d=null;r&&(d=this._callIds++,this._callback[d]=r),this._worker.postMessage(["call",d,U,k])},o.prototype.close=function(){console.log("closing connection to: "+this._url),this._cleanups.forEach(function(U){U()}),this._worker.postMessage(["close"]),this._worker.terminate()},o.prototype._fire=function(U,k){var r=this._handlers[U];if(r)for(var d=0;d<r.length;d++)r[d](k)},o.prototype._addCleanup=function(U){this._cleanups.push(U)};function c(U,k){var r={};for(var d in k)r[d]=k[d];for(var d in U)r[d]=U[d];return!k||k&&k.platform==null?r.platform=t.platform:r.platform=t.platform+":"+k.platform,!k||k&&k.platformVersion==null?r.platformVersion=t.version:r.platformVersion=t.version+":"+k.platformVersion,k&&k.appName&&(r.appName=k.appName),r}function D(U){return U.match(/^[A-Z0-9]{64}\/(prod|stage|testing)$/gi)}function G(U,k,r,d,Y){var y=new o;if(r&&(t.baseURL="wss://"+r),y._config.projectId=U,y._config.codec=t.codec,y._config.version=t.version,y._config.url=t.baseURL+"/ws_project/"+U,!D(U))throw new Error("Wrong projectId was provided: ",U);y._worker.postMessage(["connectProject",y._config,c(k,Y),d]);function Z(W,O){alanAudio.on(W,O),y._addCleanup(function(){alanAudio.off(W,O)})}function H(W){function O(j,rA){W==="frame"&&alanAudio.isPlaying()||y._worker.postMessage(["onAudioEvent",W,j,rA])}Z(W,O)}function L(W){function O(j){y._fire(W,j)}Z(W,O)}return H("frame"),H("micStop"),H("playStart"),L("text"),L("command"),y._worker.postMessage(["onAudioEvent","format",alanAudio.getFormat()]),y}function h(U,k,r,d,Y){var y=new o;if(r&&(t.baseURL="wss://"+r),y._config.projectId=U,y._config.codec=t.codec,y._config.version=t.version,y._config.url=t.baseURL+"/ws_project/"+U,!D(U))throw new Error("Wrong projectId was provided");y._worker.postMessage(["connectProject",y._config,c(k,Y),d]);function Z(W,O){alanAudio.on(W,O),y._addCleanup(function(){alanAudio.off(W,O)})}function H(W){function O(j,rA){W==="frame"&&alanAudio.isPlaying()||y._worker.postMessage(["onAudioEvent",W,j,rA])}Z(W,O)}function L(W){function O(j){y._fire(W,j)}Z(W,O)}return H("frame"),H("micStop"),H("playStart"),L("text"),L("command"),y}function N(U,k){var r=new o;return k&&(t.baseURL="wss://"+k),r._config.version=t.version,r._config.url=t.baseURL+"/ws_tutor",r._worker.postMessage(["connectProject",r._config,U]),r}n.alanSDKVersion=t.version,n.alan={sdkVersion:t.version,diagnostic:n.alanDiagnostic,projectTest:h,project:G,tutor:N}}(window),function(n){var e="playIdle",t="playActive",o="playStopped",c=!1,D="micIdle",G="micActive",h="micStopped",N="processingIdle",U="processingActive",k="audioRunning",r={bufferLength:4096,sampleRate:16e3,encoderApplication:2048,encodePCM:!1,micTimeout:4e3};const d=window.URL.createObjectURL(new Blob([`

// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = typeof Module !== 'undefined' ? Module : {};

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)


// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = {};
var key;
for (key in Module) {
  if (Module.hasOwnProperty(key)) {
    moduleOverrides[key] = Module[key];
  }
}

var arguments_ = [];
var thisProgram = './this.program';
var quit_ = function(status, toThrow) {
  throw toThrow;
};

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

var ENVIRONMENT_IS_WEB = false;
var ENVIRONMENT_IS_WORKER = false;
var ENVIRONMENT_IS_NODE = false;
var ENVIRONMENT_IS_SHELL = false;
ENVIRONMENT_IS_WEB = typeof window === 'object';
ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
// N.b. Electron.js environment is simultaneously a NODE-environment, but
// also a web environment.
ENVIRONMENT_IS_NODE = typeof process === 'object' && typeof process.versions === 'object' && typeof process.versions.node === 'string';
ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

// \`/\` should be present at the end if \`scriptDirectory\` is not empty
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var read_,
    readAsync,
    readBinary,
    setWindowTitle;

var nodeFS;
var nodePath;

if (ENVIRONMENT_IS_NODE) {
  if (ENVIRONMENT_IS_WORKER) {
    scriptDirectory = require('path').dirname(scriptDirectory) + '/';
  } else {
    scriptDirectory = __dirname + '/';
  }

// include: node_shell_read.js


read_ = function shell_read(filename, binary) {
  var ret = tryParseAsDataURI(filename);
  if (ret) {
    return binary ? ret : ret.toString();
  }
  if (!nodeFS) nodeFS = require('fs');
  if (!nodePath) nodePath = require('path');
  filename = nodePath['normalize'](filename);
  return nodeFS['readFileSync'](filename, binary ? null : 'utf8');
};

readBinary = function readBinary(filename) {
  var ret = read_(filename, true);
  if (!ret.buffer) {
    ret = new Uint8Array(ret);
  }
  assert(ret.buffer);
  return ret;
};

// end include: node_shell_read.js


  arguments_ = process['argv'].slice(2);

  if (typeof module !== 'undefined') {
    module['exports'] = Module;
  }

  process['on']('uncaughtException', function(ex) {
    // suppress ExitStatus exceptions from showing an error
    if (!(ex instanceof ExitStatus)) {
      throw ex;
    }
  });

  process['on']('unhandledRejection', abort);

  quit_ = function(status) {
    process['exit'](status);
  };

  Module['inspect'] = function () { return '[Emscripten Module object]'; };

} else
if (ENVIRONMENT_IS_SHELL) {

  if (typeof read != 'undefined') {
    read_ = function shell_read(f) {
      var data = tryParseAsDataURI(f);
      if (data) {
        return intArrayToString(data);
      }
      return read(f);
    };
  }

  readBinary = function readBinary(f) {
    var data;
    data = tryParseAsDataURI(f);
    if (data) {
      return data;
    }
    if (typeof readbuffer === 'function') {
      return new Uint8Array(readbuffer(f));
    }
    data = read(f, 'binary');
    assert(typeof data === 'object');
    return data;
  };

  if (typeof scriptArgs != 'undefined') {
    arguments_ = scriptArgs;
  } else if (typeof arguments != 'undefined') {
    arguments_ = arguments;
  }

  if (typeof quit === 'function') {
    quit_ = function(status) {
      quit(status);
    };
  }

  if (typeof print !== 'undefined') {
    // Prefer to use print/printErr where they exist, as they usually work better.
    if (typeof console === 'undefined') console = /** @type{!Console} */({});
    console.log = /** @type{!function(this:Console, ...*): undefined} */ (print);
    console.warn = console.error = /** @type{!function(this:Console, ...*): undefined} */ (typeof printErr !== 'undefined' ? printErr : print);
  }

} else

// Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) { // Check worker, not web, since window could be polyfilled
    scriptDirectory = self.location.href;
  } else if (typeof document !== 'undefined' && document.currentScript) { // web
    scriptDirectory = document.currentScript.src;
  }
  // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
  // otherwise, slice off the final part of the url to find the script directory.
  // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
  // and scriptDirectory will correctly be replaced with an empty string.
  if (scriptDirectory.indexOf('blob:') !== 0) {
    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf('/')+1);
  } else {
    scriptDirectory = '';
  }

  // Differentiate the Web Worker from the Node Worker case, as reading must
  // be done differently.
  {

// include: web_or_worker_shell_read.js


  read_ = function shell_read(url) {
    try {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.send(null);
      return xhr.responseText;
    } catch (err) {
      var data = tryParseAsDataURI(url);
      if (data) {
        return intArrayToString(data);
      }
      throw err;
    }
  };

  if (ENVIRONMENT_IS_WORKER) {
    readBinary = function readBinary(url) {
      try {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.responseType = 'arraybuffer';
        xhr.send(null);
        return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));
      } catch (err) {
        var data = tryParseAsDataURI(url);
        if (data) {
          return data;
        }
        throw err;
      }
    };
  }

  readAsync = function readAsync(url, onload, onerror) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function xhr_onload() {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
        return;
      }
      var data = tryParseAsDataURI(url);
      if (data) {
        onload(data.buffer);
        return;
      }
      onerror();
    };
    xhr.onerror = onerror;
    xhr.send(null);
  };

// end include: web_or_worker_shell_read.js
  }

  setWindowTitle = function(title) { document.title = title };
} else
{
}

// Set up the out() and err() hooks, which are how we can print to stdout or
// stderr, respectively.
var out = Module['print'] || console.log.bind(console);
var err = Module['printErr'] || console.warn.bind(console);

// Merge back in the overrides
for (key in moduleOverrides) {
  if (moduleOverrides.hasOwnProperty(key)) {
    Module[key] = moduleOverrides[key];
  }
}
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = null;

// Emit code to handle expected values on the Module object. This applies Module.x
// to the proper local x. This has two benefits: first, we only emit it if it is
// expected to arrive, and second, by using a local everywhere else that can be
// minified.
if (Module['arguments']) arguments_ = Module['arguments'];
if (Module['thisProgram']) thisProgram = Module['thisProgram'];
if (Module['quit']) quit_ = Module['quit'];

// perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message




var STACK_ALIGN = 16;

function alignMemory(size, factor) {
  if (!factor) factor = STACK_ALIGN; // stack alignment (16-byte) by default
  return Math.ceil(size / factor) * factor;
}

function getNativeTypeSize(type) {
  switch (type) {
    case 'i1': case 'i8': return 1;
    case 'i16': return 2;
    case 'i32': return 4;
    case 'i64': return 8;
    case 'float': return 4;
    case 'double': return 8;
    default: {
      if (type[type.length-1] === '*') {
        return 4; // A pointer
      } else if (type[0] === 'i') {
        var bits = Number(type.substr(1));
        assert(bits % 8 === 0, 'getNativeTypeSize invalid bits ' + bits + ', type ' + type);
        return bits / 8;
      } else {
        return 0;
      }
    }
  }
}

function warnOnce(text) {
  if (!warnOnce.shown) warnOnce.shown = {};
  if (!warnOnce.shown[text]) {
    warnOnce.shown[text] = 1;
    err(text);
  }
}

// include: runtime_functions.js


// Wraps a JS function as a wasm function with a given signature.
function convertJsFunctionToWasm(func, sig) {

  // If the type reflection proposal is available, use the new
  // 'WebAssembly.Function' constructor.
  // Otherwise, construct a minimal wasm module importing the JS function and
  // re-exporting it.
  if (typeof WebAssembly.Function === 'function') {
    var typeNames = {
      'i': 'i32',
      'j': 'i64',
      'f': 'f32',
      'd': 'f64'
    };
    var type = {
      parameters: [],
      results: sig[0] == 'v' ? [] : [typeNames[sig[0]]]
    };
    for (var i = 1; i < sig.length; ++i) {
      type.parameters.push(typeNames[sig[i]]);
    }
    return new WebAssembly.Function(type, func);
  }

  // The module is static, with the exception of the type section, which is
  // generated based on the signature passed in.
  var typeSection = [
    0x01, // id: section,
    0x00, // length: 0 (placeholder)
    0x01, // count: 1
    0x60, // form: func
  ];
  var sigRet = sig.slice(0, 1);
  var sigParam = sig.slice(1);
  var typeCodes = {
    'i': 0x7f, // i32
    'j': 0x7e, // i64
    'f': 0x7d, // f32
    'd': 0x7c, // f64
  };

  // Parameters, length + signatures
  typeSection.push(sigParam.length);
  for (var i = 0; i < sigParam.length; ++i) {
    typeSection.push(typeCodes[sigParam[i]]);
  }

  // Return values, length + signatures
  // With no multi-return in MVP, either 0 (void) or 1 (anything else)
  if (sigRet == 'v') {
    typeSection.push(0x00);
  } else {
    typeSection = typeSection.concat([0x01, typeCodes[sigRet]]);
  }

  // Write the overall length of the type section back into the section header
  // (excepting the 2 bytes for the section id and length)
  typeSection[1] = typeSection.length - 2;

  // Rest of the module is static
  var bytes = new Uint8Array([
    0x00, 0x61, 0x73, 0x6d, // magic ('\0asm')
    0x01, 0x00, 0x00, 0x00, // version: 1
  ].concat(typeSection, [
    0x02, 0x07, // import section
      // (import 'e' 'f' (func 0 (type 0)))
      0x01, 0x01, 0x65, 0x01, 0x66, 0x00, 0x00,
    0x07, 0x05, // export section
      // (export 'f' (func 0 (type 0)))
      0x01, 0x01, 0x66, 0x00, 0x00,
  ]));

   // We can compile this wasm module synchronously because it is very small.
  // This accepts an import (at 'e.f'), that it reroutes to an export (at 'f')
  var module = new WebAssembly.Module(bytes);
  var instance = new WebAssembly.Instance(module, {
    'e': {
      'f': func
    }
  });
  var wrappedFunc = instance.exports['f'];
  return wrappedFunc;
}

var freeTableIndexes = [];

// Weak map of functions in the table to their indexes, created on first use.
var functionsInTableMap;

function getEmptyTableSlot() {
  // Reuse a free index if there is one, otherwise grow.
  if (freeTableIndexes.length) {
    return freeTableIndexes.pop();
  }
  // Grow the table
  try {
    wasmTable.grow(1);
  } catch (err) {
    if (!(err instanceof RangeError)) {
      throw err;
    }
    throw 'Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.';
  }
  return wasmTable.length - 1;
}

// Add a wasm function to the table.
function addFunctionWasm(func, sig) {
  // Check if the function is already in the table, to ensure each function
  // gets a unique index. First, create the map if this is the first use.
  if (!functionsInTableMap) {
    functionsInTableMap = new WeakMap();
    for (var i = 0; i < wasmTable.length; i++) {
      var item = wasmTable.get(i);
      // Ignore null values.
      if (item) {
        functionsInTableMap.set(item, i);
      }
    }
  }
  if (functionsInTableMap.has(func)) {
    return functionsInTableMap.get(func);
  }

  // It's not in the table, add it now.

  var ret = getEmptyTableSlot();

  // Set the new value.
  try {
    // Attempting to call this with JS function will cause of table.set() to fail
    wasmTable.set(ret, func);
  } catch (err) {
    if (!(err instanceof TypeError)) {
      throw err;
    }
    var wrapped = convertJsFunctionToWasm(func, sig);
    wasmTable.set(ret, wrapped);
  }

  functionsInTableMap.set(func, ret);

  return ret;
}

function removeFunction(index) {
  functionsInTableMap.delete(wasmTable.get(index));
  freeTableIndexes.push(index);
}

// 'sig' parameter is required for the llvm backend but only when func is not
// already a WebAssembly function.
function addFunction(func, sig) {

  return addFunctionWasm(func, sig);
}

// end include: runtime_functions.js
// include: runtime_debug.js


// end include: runtime_debug.js
function makeBigInt(low, high, unsigned) {
  return unsigned ? ((+((low>>>0)))+((+((high>>>0)))*4294967296.0)) : ((+((low>>>0)))+((+((high|0)))*4294967296.0));
}

var tempRet0 = 0;

var setTempRet0 = function(value) {
  tempRet0 = value;
};

var getTempRet0 = function() {
  return tempRet0;
};



// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

var wasmBinary;if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];
var noExitRuntime;if (Module['noExitRuntime']) noExitRuntime = Module['noExitRuntime'];

if (typeof WebAssembly !== 'object') {
  abort('no native wasm support detected');
}

// include: runtime_safe_heap.js


// In MINIMAL_RUNTIME, setValue() and getValue() are only available when building with safe heap enabled, for heap safety checking.
// In traditional runtime, setValue() and getValue() are always available (although their use is highly discouraged due to perf penalties)

/** @param {number} ptr
    @param {number} value
    @param {string} type
    @param {number|boolean=} noSafe */
function setValue(ptr, value, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': HEAP8[((ptr)>>0)]=value; break;
      case 'i8': HEAP8[((ptr)>>0)]=value; break;
      case 'i16': HEAP16[((ptr)>>1)]=value; break;
      case 'i32': HEAP32[((ptr)>>2)]=value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)]=tempI64[0],HEAP32[(((ptr)+(4))>>2)]=tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)]=value; break;
      case 'double': HEAPF64[((ptr)>>3)]=value; break;
      default: abort('invalid type for setValue: ' + type);
    }
}

/** @param {number} ptr
    @param {string} type
    @param {number|boolean=} noSafe */
function getValue(ptr, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': return HEAP8[((ptr)>>0)];
      case 'i8': return HEAP8[((ptr)>>0)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      default: abort('invalid type for getValue: ' + type);
    }
  return null;
}

// end include: runtime_safe_heap.js
// Wasm globals

var wasmMemory;

//========================================
// Runtime essentials
//========================================

// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS;

/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed: ' + text);
  }
}

// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function getCFunc(ident) {
  var func = Module['_' + ident]; // closure exported function
  assert(func, 'Cannot call unknown function ' + ident + ', make sure it is exported');
  return func;
}

// C calling interface.
/** @param {string|null=} returnType
    @param {Array=} argTypes
    @param {Arguments|Array=} args
    @param {Object=} opts */
function ccall(ident, returnType, argTypes, args, opts) {
  // For fast lookup of conversion functions
  var toC = {
    'string': function(str) {
      var ret = 0;
      if (str !== null && str !== undefined && str !== 0) { // null string
        // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
        var len = (str.length << 2) + 1;
        ret = stackAlloc(len);
        stringToUTF8(str, ret, len);
      }
      return ret;
    },
    'array': function(arr) {
      var ret = stackAlloc(arr.length);
      writeArrayToMemory(arr, ret);
      return ret;
    }
  };

  function convertReturnValue(ret) {
    if (returnType === 'string') return UTF8ToString(ret);
    if (returnType === 'boolean') return Boolean(ret);
    return ret;
  }

  var func = getCFunc(ident);
  var cArgs = [];
  var stack = 0;
  if (args) {
    for (var i = 0; i < args.length; i++) {
      var converter = toC[argTypes[i]];
      if (converter) {
        if (stack === 0) stack = stackSave();
        cArgs[i] = converter(args[i]);
      } else {
        cArgs[i] = args[i];
      }
    }
  }
  var ret = func.apply(null, cArgs);

  ret = convertReturnValue(ret);
  if (stack !== 0) stackRestore(stack);
  return ret;
}

/** @param {string=} returnType
    @param {Array=} argTypes
    @param {Object=} opts */
function cwrap(ident, returnType, argTypes, opts) {
  argTypes = argTypes || [];
  // When the function takes numbers and returns a number, we can just return
  // the original function
  var numericArgs = argTypes.every(function(type){ return type === 'number'});
  var numericRet = returnType !== 'string';
  if (numericRet && numericArgs && !opts) {
    return getCFunc(ident);
  }
  return function() {
    return ccall(ident, returnType, argTypes, arguments, opts);
  }
}

var ALLOC_NORMAL = 0; // Tries to use _malloc()
var ALLOC_STACK = 1; // Lives for the duration of the current function call

// allocate(): This is for internal use. You can use it yourself as well, but the interface
//             is a little tricky (see docs right below). The reason is that it is optimized
//             for multiple syntaxes to save space in generated code. So you should
//             normally not use allocate(), and instead allocate memory using _malloc(),
//             initialize it with setValue(), and so forth.
// @slab: An array of data.
// @allocator: How to allocate memory, see ALLOC_*
/** @type {function((Uint8Array|Array<number>), number)} */
function allocate(slab, allocator) {
  var ret;

  if (allocator == ALLOC_STACK) {
    ret = stackAlloc(slab.length);
  } else {
    ret = _malloc(slab.length);
  }

  if (slab.subarray || slab.slice) {
    HEAPU8.set(/** @type {!Uint8Array} */(slab), ret);
  } else {
    HEAPU8.set(new Uint8Array(slab), ret);
  }
  return ret;
}

// include: runtime_strings.js


// runtime_strings.js: Strings related runtime functions that are part of both MINIMAL_RUNTIME and regular runtime.

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
// a copy of that string as a Javascript String object.

var UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : undefined;

/**
 * @param {number} idx
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ArrayToString(heap, idx, maxBytesToRead) {
  var endIdx = idx + maxBytesToRead;
  var endPtr = idx;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  // (As a tiny code save trick, compare endPtr against endIdx using a negation, so that undefined means Infinity)
  while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr;

  if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
    return UTF8Decoder.decode(heap.subarray(idx, endPtr));
  } else {
    var str = '';
    // If building with TextDecoder, we have already computed the string length above, so test loop end condition against that
    while (idx < endPtr) {
      // For UTF8 byte structure, see:
      // http://en.wikipedia.org/wiki/UTF-8#Description
      // https://www.ietf.org/rfc/rfc2279.txt
      // https://tools.ietf.org/html/rfc3629
      var u0 = heap[idx++];
      if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
      var u1 = heap[idx++] & 63;
      if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
      var u2 = heap[idx++] & 63;
      if ((u0 & 0xF0) == 0xE0) {
        u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
      } else {
        u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heap[idx++] & 63);
      }

      if (u0 < 0x10000) {
        str += String.fromCharCode(u0);
      } else {
        var ch = u0 - 0x10000;
        str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
      }
    }
  }
  return str;
}

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns a
// copy of that string as a Javascript String object.
// maxBytesToRead: an optional length that specifies the maximum number of bytes to read. You can omit
//                 this parameter to scan the string until the first \0 byte. If maxBytesToRead is
//                 passed, and the string at [ptr, ptr+maxBytesToReadr[ contains a null byte in the
//                 middle, then the string will cut short at that byte index (i.e. maxBytesToRead will
//                 not produce a string of exact length [ptr, ptr+maxBytesToRead[)
//                 N.B. mixing frequent uses of UTF8ToString() with and without maxBytesToRead may
//                 throw JS JIT optimizations off, so it is worth to consider consistently using one
//                 style or the other.
/**
 * @param {number} ptr
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ToString(ptr, maxBytesToRead) {
  return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
}

// Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
// encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   heap: the array to copy to. Each index in this array is assumed to be one 8-byte element.
//   outIdx: The starting offset in the array to begin the copying.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array.
//                    This count should include the null terminator,
//                    i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
//                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
  if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
    return 0;

  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) {
      var u1 = str.charCodeAt(++i);
      u = 0x10000 + ((u & 0x3FF) << 10) | (u1 & 0x3FF);
    }
    if (u <= 0x7F) {
      if (outIdx >= endIdx) break;
      heap[outIdx++] = u;
    } else if (u <= 0x7FF) {
      if (outIdx + 1 >= endIdx) break;
      heap[outIdx++] = 0xC0 | (u >> 6);
      heap[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0xFFFF) {
      if (outIdx + 2 >= endIdx) break;
      heap[outIdx++] = 0xE0 | (u >> 12);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    } else {
      if (outIdx + 3 >= endIdx) break;
      heap[outIdx++] = 0xF0 | (u >> 18);
      heap[outIdx++] = 0x80 | ((u >> 12) & 63);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    }
  }
  // Null-terminate the pointer to the buffer.
  heap[outIdx] = 0;
  return outIdx - startIdx;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8(str, outPtr, maxBytesToWrite) {
  return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.
function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) ++len;
    else if (u <= 0x7FF) len += 2;
    else if (u <= 0xFFFF) len += 3;
    else len += 4;
  }
  return len;
}

// end include: runtime_strings.js
// include: runtime_strings_extra.js


// runtime_strings_extra.js: Strings related runtime functions that are available only in regular runtime.

// Given a pointer 'ptr' to a null-terminated ASCII-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function AsciiToString(ptr) {
  var str = '';
  while (1) {
    var ch = HEAPU8[((ptr++)>>0)];
    if (!ch) return str;
    str += String.fromCharCode(ch);
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in ASCII form. The copy will require at most str.length+1 bytes of space in the HEAP.

function stringToAscii(str, outPtr) {
  return writeAsciiToMemory(str, outPtr, false);
}

// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

var UTF16Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-16le') : undefined;

function UTF16ToString(ptr, maxBytesToRead) {
  var endPtr = ptr;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  var idx = endPtr >> 1;
  var maxIdx = idx + maxBytesToRead / 2;
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
  endPtr = idx << 1;

  if (endPtr - ptr > 32 && UTF16Decoder) {
    return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
  } else {
    var str = '';

    // If maxBytesToRead is not passed explicitly, it will be undefined, and the for-loop's condition
    // will always evaluate to true. The loop is then terminated on the first null char.
    for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
      var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
      if (codeUnit == 0) break;
      // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
      str += String.fromCharCode(codeUnit);
    }

    return str;
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16 form. The copy will require at most str.length*4+2 bytes of space in the HEAP.
// Use the function lengthBytesUTF16() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=2, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<2 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF16(str, outPtr, maxBytesToWrite) {
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 2) return 0;
  maxBytesToWrite -= 2; // Null terminator.
  var startPtr = outPtr;
  var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;
  for (var i = 0; i < numCharsToWrite; ++i) {
    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    HEAP16[((outPtr)>>1)]=codeUnit;
    outPtr += 2;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP16[((outPtr)>>1)]=0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF16(str) {
  return str.length*2;
}

function UTF32ToString(ptr, maxBytesToRead) {
  var i = 0;

  var str = '';
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(i >= maxBytesToRead / 4)) {
    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
    if (utf32 == 0) break;
    ++i;
    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    if (utf32 >= 0x10000) {
      var ch = utf32 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
  return str;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32 form. The copy will require at most str.length*4+4 bytes of space in the HEAP.
// Use the function lengthBytesUTF32() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=4, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<4 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF32(str, outPtr, maxBytesToWrite) {
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 4) return 0;
  var startPtr = outPtr;
  var endPtr = startPtr + maxBytesToWrite - 4;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
      var trailSurrogate = str.charCodeAt(++i);
      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
    }
    HEAP32[((outPtr)>>2)]=codeUnit;
    outPtr += 4;
    if (outPtr + 4 > endPtr) break;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP32[((outPtr)>>2)]=0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF32(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i);
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.
    len += 4;
  }

  return len;
}

// Allocate heap space for a JS string, and write it there.
// It is the responsibility of the caller to free() that memory.
function allocateUTF8(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = _malloc(size);
  if (ret) stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Allocate stack space for a JS string, and write it there.
function allocateUTF8OnStack(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = stackAlloc(size);
  stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Deprecated: This function should not be called because it is unsafe and does not provide
// a maximum length limit of how many bytes it is allowed to write. Prefer calling the
// function stringToUTF8Array() instead, which takes in a maximum length that can be used
// to be secure from out of bounds writes.
/** @deprecated
    @param {boolean=} dontAddNull */
function writeStringToMemory(string, buffer, dontAddNull) {
  warnOnce('writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!');

  var /** @type {number} */ lastChar, /** @type {number} */ end;
  if (dontAddNull) {
    // stringToUTF8Array always appends null. If we don't want to do that, remember the
    // character that existed at the location where the null will be placed, and restore
    // that after the write (below).
    end = buffer + lengthBytesUTF8(string);
    lastChar = HEAP8[end];
  }
  stringToUTF8(string, buffer, Infinity);
  if (dontAddNull) HEAP8[end] = lastChar; // Restore the value under the null character.
}

function writeArrayToMemory(array, buffer) {
  HEAP8.set(array, buffer);
}

/** @param {boolean=} dontAddNull */
function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; ++i) {
    HEAP8[((buffer++)>>0)]=str.charCodeAt(i);
  }
  // Null-terminate the pointer to the HEAP.
  if (!dontAddNull) HEAP8[((buffer)>>0)]=0;
}

// end include: runtime_strings_extra.js
// Memory management

function alignUp(x, multiple) {
  if (x % multiple > 0) {
    x += multiple - (x % multiple);
  }
  return x;
}

var HEAP,
/** @type {ArrayBuffer} */
  buffer,
/** @type {Int8Array} */
  HEAP8,
/** @type {Uint8Array} */
  HEAPU8,
/** @type {Int16Array} */
  HEAP16,
/** @type {Uint16Array} */
  HEAPU16,
/** @type {Int32Array} */
  HEAP32,
/** @type {Uint32Array} */
  HEAPU32,
/** @type {Float32Array} */
  HEAPF32,
/** @type {Float64Array} */
  HEAPF64;

function updateGlobalBufferAndViews(buf) {
  buffer = buf;
  Module['HEAP8'] = HEAP8 = new Int8Array(buf);
  Module['HEAP16'] = HEAP16 = new Int16Array(buf);
  Module['HEAP32'] = HEAP32 = new Int32Array(buf);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(buf);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(buf);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(buf);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(buf);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(buf);
}

var TOTAL_STACK = 5242880;

var INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 16777216;

// include: runtime_init_table.js
// In regular non-RELOCATABLE mode the table is exported
// from the wasm module and this will be assigned once
// the exports are available.
var wasmTable;

// end include: runtime_init_table.js
// include: runtime_stack_check.js


// end include: runtime_stack_check.js
// include: runtime_assertions.js


// end include: runtime_assertions.js
var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATMAIN__    = []; // functions called when main() is to be run
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the main() is called

var runtimeInitialized = false;
var runtimeExited = false;

function preRun() {

  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
  runtimeInitialized = true;
  
  callRuntimeCallbacks(__ATINIT__);
}

function preMain() {
  
  callRuntimeCallbacks(__ATMAIN__);
}

function exitRuntime() {
  runtimeExited = true;
}

function postRun() {

  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}

function addOnPreMain(cb) {
  __ATMAIN__.unshift(cb);
}

function addOnExit(cb) {
}

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}

// include: runtime_math.js


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc

// end include: runtime_math.js
// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// Module.preRun (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled

function getUniqueRunDependency(id) {
  return id;
}

function addRunDependency(id) {
  runDependencies++;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

}

function removeRunDependency(id) {
  runDependencies--;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}

Module['preloadedImages'] = {}; // maps url to image data
Module['preloadedAudios'] = {}; // maps url to audio data

/** @param {string|number=} what */
function abort(what) {
  if (Module['onAbort']) {
    Module['onAbort'](what);
  }

  what += '';
  err(what);

  ABORT = true;
  EXITSTATUS = 1;

  what = 'abort(' + what + '). Build with -s ASSERTIONS=1 for more info.';

  // Use a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.
  var e = new WebAssembly.RuntimeError(what);

  // Throw the error whether or not MODULARIZE is set because abort is used
  // in code paths apart from instantiation where an exception is expected
  // to be thrown when abort is called.
  throw e;
}

// {{MEM_INITIALIZER}}

// include: memoryprofiler.js


// end include: memoryprofiler.js
// include: URIUtils.js


function hasPrefix(str, prefix) {
  return String.prototype.startsWith ?
      str.startsWith(prefix) :
      str.indexOf(prefix) === 0;
}

// Prefix of data URIs emitted by SINGLE_FILE and related options.
var dataURIPrefix = 'data:application/octet-stream;base64,';

// Indicates whether filename is a base64 data URI.
function isDataURI(filename) {
  return hasPrefix(filename, dataURIPrefix);
}

var fileURIPrefix = 'file://';

// Indicates whether filename is delivered via file protocol (as opposed to http/https)
function isFileURI(filename) {
  return hasPrefix(filename, fileURIPrefix);
}

// end include: URIUtils.js
if (!isDataURI(wasmBinaryFile)) {
  wasmBinaryFile = locateFile(wasmBinaryFile);
}

function getBinary(file) {
  try {
    if (file == wasmBinaryFile && wasmBinary) {
      return new Uint8Array(wasmBinary);
    }
    var binary = tryParseAsDataURI(file);
    if (binary) {
      return binary;
    }
    if (readBinary) {
      return readBinary(file);
    } else {
      throw 'sync fetching of the wasm failed: you can preload it to Module[wasmBinary] manually, or emcc.py will do that for you when generating HTML (but not JS)';
    }
  }
  catch (err) {
    abort(err);
  }
}

function getBinaryPromise() {
  // If we don't have the binary yet, and have the Fetch api, use that;
  // in some environments, like Electron's render process, Fetch api may be present, but have a different context than expected, let's only use it on the Web
  if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && typeof fetch === 'function'
      // Let's not use fetch to get objects over file:// as it's most likely Cordova which doesn't support fetch for file://
      && !isFileURI(wasmBinaryFile)
      ) {
    return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function(response) {
      if (!response['ok']) {
        throw 'failed to load wasm binary file at ' + wasmBinaryFile;
      }
      return response['arrayBuffer']();
    }).catch(function () {
      return getBinary(wasmBinaryFile);
    });
  }
  // Otherwise, getBinary should be able to get it synchronously
  return Promise.resolve().then(function() { return getBinary(wasmBinaryFile); });
}

function instantiateSync(file, info) {
  var instance;
  var module;
  var binary;
  try {
    binary = getBinary(file);
    module = new WebAssembly.Module(binary);
    instance = new WebAssembly.Instance(module, info);
  } catch (e) {
    var str = e.toString();
    err('failed to compile wasm module: ' + str);
    if (str.indexOf('imported Memory') >= 0 ||
        str.indexOf('memory import') >= 0) {
      err('Memory size incompatibility issues may be due to changing INITIAL_MEMORY at runtime to something too large. Use ALLOW_MEMORY_GROWTH to allow any size memory (and also make sure not to set INITIAL_MEMORY at runtime to something smaller than it was at compile time).');
    }
    throw e;
  }
  return [instance, module];
}

// Create the wasm instance.
// Receives the wasm imports, returns the exports.
function createWasm() {
  // prepare imports
  var info = {
    'env': asmLibraryArg,
    'wasi_snapshot_preview1': asmLibraryArg,
  };
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  /** @param {WebAssembly.Module=} module*/
  function receiveInstance(instance, module) {
    var exports = instance.exports;

    Module['asm'] = exports;

    wasmMemory = Module['asm']['memory'];
    updateGlobalBufferAndViews(wasmMemory.buffer);

    wasmTable = Module['asm']['__indirect_function_table'];

    removeRunDependency('wasm-instantiate');
  }
  // we can't run yet (except in a pthread, where we have a custom sync instantiator)
  addRunDependency('wasm-instantiate');

  function receiveInstantiatedSource(output) {
    // 'output' is a WebAssemblyInstantiatedSource object which has both the module and instance.
    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
    // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
    // When the regression is fixed, can restore the above USE_PTHREADS-enabled path.
    receiveInstance(output['instance']);
  }

  function instantiateArrayBuffer(receiver) {
    return getBinaryPromise().then(function(binary) {
      return WebAssembly.instantiate(binary, info);
    }).then(receiver, function(reason) {
      err('failed to asynchronously prepare wasm: ' + reason);

      abort(reason);
    });
  }

  // Prefer streaming instantiation if available.

  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to run the instantiation parallel
  // to any other async startup actions they are performing.
  if (Module['instantiateWasm']) {
    try {
      var exports = Module['instantiateWasm'](info, receiveInstance);
      return exports;
    } catch(e) {
      err('Module.instantiateWasm callback failed with error: ' + e);
      return false;
    }
  }

  var result = instantiateSync(wasmBinaryFile, info);
  receiveInstance(result[0], result[1]);
  return Module['asm']; // exports were assigned here
}

// Globals used by JS i64 conversions
var tempDouble;
var tempI64;

// === Body ===

var ASM_CONSTS = {
  
};






  function callRuntimeCallbacks(callbacks) {
      while(callbacks.length > 0) {
        var callback = callbacks.shift();
        if (typeof callback == 'function') {
          callback(Module); // Pass the module as the first argument.
          continue;
        }
        var func = callback.func;
        if (typeof func === 'number') {
          if (callback.arg === undefined) {
            wasmTable.get(func)();
          } else {
            wasmTable.get(func)(callback.arg);
          }
        } else {
          func(callback.arg === undefined ? null : callback.arg);
        }
      }
    }

  function demangle(func) {
      return func;
    }

  function demangleAll(text) {
      var regex =
        /\b_Z[wd_]+/g;
      return text.replace(regex,
        function(x) {
          var y = demangle(x);
          return x === y ? x : (y + ' [' + x + ']');
        });
    }

  function jsStackTrace() {
      var error = new Error();
      if (!error.stack) {
        // IE10+ special cases: It does have callstack info, but it is only populated if an Error object is thrown,
        // so try that as a special-case.
        try {
          throw new Error();
        } catch(e) {
          error = e;
        }
        if (!error.stack) {
          return '(no stack trace available)';
        }
      }
      return error.stack.toString();
    }

  function _abort() {
      abort();
    }

  function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.copyWithin(dest, src, src + num);
    }

  function _emscripten_get_heap_size() {
      return HEAPU8.length;
    }
  
  function abortOnCannotGrowMemory(requestedSize) {
      abort('OOM');
    }
  function _emscripten_resize_heap(requestedSize) {
      requestedSize = requestedSize >>> 0;
      abortOnCannotGrowMemory(requestedSize);
    }

  var SYSCALLS={mappings:{},buffers:[null,[],[]],printChar:function(stream, curr) {
        var buffer = SYSCALLS.buffers[stream];
        if (curr === 0 || curr === 10) {
          (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));
          buffer.length = 0;
        } else {
          buffer.push(curr);
        }
      },varargs:undefined,get:function() {
        SYSCALLS.varargs += 4;
        var ret = HEAP32[(((SYSCALLS.varargs)-(4))>>2)];
        return ret;
      },getStr:function(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },get64:function(low, high) {
        return low;
      }};
  function _fd_close(fd) {
      return 0;
    }

  function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
  }

  function flush_NO_FILESYSTEM() {
      // flush anything remaining in the buffers during shutdown
      if (typeof _fflush !== 'undefined') _fflush(0);
      var buffers = SYSCALLS.buffers;
      if (buffers[1].length) SYSCALLS.printChar(1, 10);
      if (buffers[2].length) SYSCALLS.printChar(2, 10);
    }
  function _fd_write(fd, iov, iovcnt, pnum) {
      // hack to support printf in SYSCALLS_REQUIRE_FILESYSTEM=0
      var num = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAP32[(((iov)+(i*8))>>2)];
        var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
        for (var j = 0; j < len; j++) {
          SYSCALLS.printChar(fd, HEAPU8[ptr+j]);
        }
        num += len;
      }
      HEAP32[((pnum)>>2)]=num
      return 0;
    }

  function _setTempRet0($i) {
      setTempRet0(($i) | 0);
    }
var ASSERTIONS = false;



/** @type {function(string, boolean=, number=)} */
function intArrayFromString(stringy, dontAddNull, length) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
}

function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
      if (ASSERTIONS) {
        assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
      }
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}


// Copied from https://github.com/strophe/strophejs/blob/e06d027/src/polyfills.js#L149

// This code was written by Tyler Akins and has been placed in the
// public domain.  It would be nice if you left this header intact.
// Base64 code from Tyler Akins -- http://rumkin.com

/**
 * Decodes a base64 string.
 * @param {string} input The string to decode.
 */
var decodeBase64 = typeof atob === 'function' ? atob : function (input) {
  var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

  var output = '';
  var chr1, chr2, chr3;
  var enc1, enc2, enc3, enc4;
  var i = 0;
  // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
  input = input.replace(/[^A-Za-z0-9+/=]/g, '');
  do {
    enc1 = keyStr.indexOf(input.charAt(i++));
    enc2 = keyStr.indexOf(input.charAt(i++));
    enc3 = keyStr.indexOf(input.charAt(i++));
    enc4 = keyStr.indexOf(input.charAt(i++));

    chr1 = (enc1 << 2) | (enc2 >> 4);
    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
    chr3 = ((enc3 & 3) << 6) | enc4;

    output = output + String.fromCharCode(chr1);

    if (enc3 !== 64) {
      output = output + String.fromCharCode(chr2);
    }
    if (enc4 !== 64) {
      output = output + String.fromCharCode(chr3);
    }
  } while (i < input.length);
  return output;
};

// Converts a string of base64 into a byte array.
// Throws error on invalid input.
function intArrayFromBase64(s) {
  if (typeof ENVIRONMENT_IS_NODE === 'boolean' && ENVIRONMENT_IS_NODE) {
    var buf;
    try {
      // TODO: Update Node.js externs, Closure does not recognize the following Buffer.from()
      /**@suppress{checkTypes}*/
      buf = Buffer.from(s, 'base64');
    } catch (_) {
      buf = new Buffer(s, 'base64');
    }
    return new Uint8Array(buf['buffer'], buf['byteOffset'], buf['byteLength']);
  }

  try {
    var decoded = decodeBase64(s);
    var bytes = new Uint8Array(decoded.length);
    for (var i = 0 ; i < decoded.length ; ++i) {
      bytes[i] = decoded.charCodeAt(i);
    }
    return bytes;
  } catch (_) {
    throw new Error('Converting base64 string to bytes failed.');
  }
}

// If filename is a base64 data URI, parses and returns data (Buffer on node,
// Uint8Array otherwise). If filename is not a base64 data URI, returns undefined.
function tryParseAsDataURI(filename) {
  if (!isDataURI(filename)) {
    return;
  }

  return intArrayFromBase64(filename.slice(dataURIPrefix.length));
}



__ATINIT__.push({ func: function() { ___wasm_call_ctors() } });
var asmLibraryArg = {
  'abort': _abort,
  'emscripten_memcpy_big': _emscripten_memcpy_big,
  'emscripten_resize_heap': _emscripten_resize_heap,
  'fd_close': _fd_close,
  'fd_seek': _fd_seek,
  'fd_write': _fd_write,
  'setTempRet0': _setTempRet0
};
var asm = createWasm();
/** @type {function(...*):?} */
var ___wasm_call_ctors = Module['___wasm_call_ctors'] = asm['__wasm_call_ctors']

/** @type {function(...*):?} */
var _opus_encoder_create = Module['_opus_encoder_create'] = asm['opus_encoder_create']

/** @type {function(...*):?} */
var _opus_encode_float = Module['_opus_encode_float'] = asm['opus_encode_float']

/** @type {function(...*):?} */
var _opus_encoder_ctl = Module['_opus_encoder_ctl'] = asm['opus_encoder_ctl']

/** @type {function(...*):?} */
var _opus_encoder_destroy = Module['_opus_encoder_destroy'] = asm['opus_encoder_destroy']

/** @type {function(...*):?} */
var _speex_resampler_init = Module['_speex_resampler_init'] = asm['speex_resampler_init']

/** @type {function(...*):?} */
var _speex_resampler_destroy = Module['_speex_resampler_destroy'] = asm['speex_resampler_destroy']

/** @type {function(...*):?} */
var _speex_resampler_process_interleaved_float = Module['_speex_resampler_process_interleaved_float'] = asm['speex_resampler_process_interleaved_float']

/** @type {function(...*):?} */
var ___errno_location = Module['___errno_location'] = asm['__errno_location']

/** @type {function(...*):?} */
var stackSave = Module['stackSave'] = asm['stackSave']

/** @type {function(...*):?} */
var stackRestore = Module['stackRestore'] = asm['stackRestore']

/** @type {function(...*):?} */
var stackAlloc = Module['stackAlloc'] = asm['stackAlloc']

/** @type {function(...*):?} */
var _malloc = Module['_malloc'] = asm['malloc']

/** @type {function(...*):?} */
var _free = Module['_free'] = asm['free']

/** @type {function(...*):?} */
var dynCall_jiji = Module['dynCall_jiji'] = asm['dynCall_jiji']





// === Auto-generated postamble setup entry stuff ===



var calledRun;

/**
 * @constructor
 * @this {ExitStatus}
 */
function ExitStatus(status) {
  this.name = 'ExitStatus';
  this.message = 'Program terminated with exit(' + status + ')';
  this.status = status;
}

var calledMain = false;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!calledRun) run();
  if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
};

/** @type {function(Array=)} */
function run(args) {
  args = args || arguments_;

  if (runDependencies > 0) {
    return;
  }

  preRun();

  if (runDependencies > 0) return; // a preRun added a dependency, run will be called later

  function doRun() {
    // run may have just been called through dependencies being fulfilled just in this very frame,
    // or while the async setStatus time below was happening
    if (calledRun) return;
    calledRun = true;
    Module['calledRun'] = true;

    if (ABORT) return;

    initRuntime();

    preMain();

    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else
  {
    doRun();
  }
}
Module['run'] = run;

/** @param {boolean|number=} implicit */
function exit(status, implicit) {

  // if this is just main exit-ing implicitly, and the status is 0, then we
  // don't need to do anything here and can just leave. if the status is
  // non-zero, though, then we need to report it.
  // (we may have warned about this earlier, if a situation justifies doing so)
  if (implicit && noExitRuntime && status === 0) {
    return;
  }

  if (noExitRuntime) {
  } else {

    EXITSTATUS = status;

    exitRuntime();

    if (Module['onExit']) Module['onExit'](status);

    ABORT = true;
  }

  quit_(status, new ExitStatus(status));
}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

noExitRuntime = true;

run();





'use strict';

const OggOpusEncoder = function( config, Module ){
  if ( !Module ) {
    throw new Error('Module with exports required to initialize an encoder instance');
  }

  this.config = Object.assign({ 
    encoderApplication: 2049, // 2048 = Voice (Lower fidelity)
                              // 2049 = Full Band Audio (Highest fidelity)
                              // 2051 = Restricted Low Delay (Lowest latency)
    encoderFrameSize: 20, // Specified in ms.
    encoderSampleRate: 48000, // Desired encoding sample rate. Audio will be resampled
    maxFramesPerPage: 40, // Tradeoff latency with overhead
    numberOfChannels: 1,
    originalSampleRate: 44100,
    resampleQuality: 3,  // Value between 0 and 10 inclusive. 10 being highest quality.
    serial: Math.floor(Math.random() * 4294967296),
    encodeRaw: true,
    encodePCM: false,
  }, config );

  this._opus_encoder_create = Module._opus_encoder_create;
  this._opus_encoder_destroy = Module._opus_encoder_destroy;
  this._opus_encoder_ctl = Module._opus_encoder_ctl;
  this._speex_resampler_process_interleaved_float = Module._speex_resampler_process_interleaved_float;
  this._speex_resampler_init = Module._speex_resampler_init;
  this._speex_resampler_destroy = Module._speex_resampler_destroy;
  this._opus_encode_float = Module._opus_encode_float;
  this._free = Module._free;
  this._malloc = Module._malloc;
  this.HEAPU8 = Module.HEAPU8;
  this.HEAP32 = Module.HEAP32;
  this.HEAPF32 = Module.HEAPF32;

  this.pageIndex = 0;
  this.granulePosition = 0;
  this.segmentData = new Uint8Array( 65025 ); // Maximum length of oggOpus data
  this.segmentDataIndex = 0;
  this.segmentTable = new Uint8Array( 255 ); // Maximum data segments
  this.segmentTableIndex = 0;
  this.framesInPage = 0;

  this.initChecksumTable();
  this.initCodec();
  this.initResampler();

  //print(\`config = \${JSON.stringify(this.config)}\`);

  if ( this.config.numberOfChannels === 1 ) {
    this.interleave = function( buffers ) { return buffers[0]; };
  }
};

OggOpusEncoder.prototype.encode = function( buffers ) {
    // Determine bufferLength dynamically
    if ( !this.bufferLength ) {
        this.bufferLength = buffers[0].length;
        this.interleavedBuffers = new Float32Array( this.bufferLength * this.config.numberOfChannels );
    }

    var samples = this.interleave(buffers);
    if (this.config.encodePCM) {
        var buff = samples.subarray(0, samples.length).slice(0, samples.length).buffer
        var page = new Uint8Array(buff);
        return [{message: 'page', page: page}];
    }

    var sampleIndex = 0;
    var exportPages = [];

    while ( sampleIndex < samples.length ) {
        var lengthToCopy = Math.min( this.resampleBufferLength - this.resampleBufferIndex, samples.length - sampleIndex );
        this.resampleBuffer.set( samples.subarray( sampleIndex, sampleIndex+lengthToCopy ), this.resampleBufferIndex );
        sampleIndex += lengthToCopy;
        this.resampleBufferIndex += lengthToCopy;

        if ( this.resampleBufferIndex === this.resampleBufferLength ) {
            this._speex_resampler_process_interleaved_float( this.resampler, this.resampleBufferPointer, this.resampleSamplesPerChannelPointer, this.encoderBufferPointer, this.encoderSamplesPerChannelPointer );
            var packetLength = this._opus_encode_float( this.encoder, this.encoderBufferPointer, this.encoderSamplesPerChannel, this.encoderOutputPointer, this.encoderOutputMaxLength );
            if (this.config.encodeRaw) {
                this.resampleBufferIndex = 0;
                if (packetLength > 0) {
                    var page = this.encoderOutputBuffer.subarray(0, packetLength).slice(0, packetLength);
                    exportPages.push({message: 'page', page: page});
                }
            } else {
                exportPages.concat(this.segmentPacket( packetLength ));
                this.resampleBufferIndex = 0;

                this.framesInPage++;
                if ( this.framesInPage >= this.config.maxFramesPerPage ) {
                    exportPages.push( this.generatePage() );
                }
            }
        }
    }
    return exportPages;
};

OggOpusEncoder.prototype.destroy = function() {
  if ( this.encoder ) {
    this._free(this.encoderSamplesPerChannelPointer);
    delete this.encoderSamplesPerChannelPointer;
    this._free(this.encoderBufferPointer);
    delete this.encoderBufferPointer;
    this._free(this.encoderOutputPointer);
    delete this.encoderOutputPointer;
    this._free(this.resampleSamplesPerChannelPointer);
    delete this.resampleSamplesPerChannelPointer;
    this._free(this.resampleBufferPointer);
    delete this.resampleBufferPointer;
    this._speex_resampler_destroy(this.resampler);
    delete this.resampler;
    this._opus_encoder_destroy(this.encoder);
    delete this.encoder;
  }
};

OggOpusEncoder.prototype.flush = function() {
  if (this.config.encodeRaw) {
    this.resampleBufferIndex = 0;	  
    return [];
  }
  var exportPage;
  if ( this.framesInPage ) {
    exportPage = this.generatePage();
  }
  // discard any pending data in resample buffer (only a few ms worth)
  this.resampleBufferIndex = 0;
  return exportPage;
};

OggOpusEncoder.prototype.encodeFinalFrame = function() {
  const exportPages = [];

  // Encode the data remaining in the resample buffer.
  if ( this.resampleBufferIndex > 0 ) {
    const dataToFill = (this.resampleBufferLength - this.resampleBufferIndex) / this.config.numberOfChannels;
    const numBuffers = Math.ceil(dataToFill / this.bufferLength);

    for ( var i = 0; i < numBuffers; i++ ) { 
      var finalFrameBuffers = [];
      for ( var j = 0; j < this.config.numberOfChannels; j++ ) {
        finalFrameBuffers.push( new Float32Array( this.bufferLength ));
      }
      exportPages.concat(this.encode( finalFrameBuffers ));
    }
  }
  if (this.config.encodeRaw) {
	return exportPages;
  }

  this.headerType += 4;
  exportPages.push(this.generatePage());
  return exportPages;
};

OggOpusEncoder.prototype.getChecksum = function( data ){
  var checksum = 0;
  for ( var i = 0; i < data.length; i++ ) {
    checksum = (checksum << 8) ^ this.checksumTable[ ((checksum>>>24) & 0xff) ^ data[i] ];
  }
  return checksum >>> 0;
};

OggOpusEncoder.prototype.generateCommentPage = function(){
  var segmentDataView = new DataView( this.segmentData.buffer );
  segmentDataView.setUint32( 0, 1937076303, true ) // Magic Signature 'Opus'
  segmentDataView.setUint32( 4, 1936154964, true ) // Magic Signature 'Tags'
  segmentDataView.setUint32( 8, 10, true ); // Vendor Length
  segmentDataView.setUint32( 12, 1868784978, true ); // Vendor name 'Reco'
  segmentDataView.setUint32( 16, 1919247474, true ); // Vendor name 'rder'
  segmentDataView.setUint16( 20, 21322, true ); // Vendor name 'JS'
  segmentDataView.setUint32( 22, 0, true ); // User Comment List Length
  this.segmentTableIndex = 1;
  this.segmentDataIndex = this.segmentTable[0] = 26;
  this.headerType = 0;
  return this.generatePage();
};

OggOpusEncoder.prototype.generateIdPage = function(){
  var segmentDataView = new DataView( this.segmentData.buffer );
  segmentDataView.setUint32( 0, 1937076303, true ) // Magic Signature 'Opus'
  segmentDataView.setUint32( 4, 1684104520, true ) // Magic Signature 'Head'
  segmentDataView.setUint8( 8, 1, true ); // Version
  segmentDataView.setUint8( 9, this.config.numberOfChannels, true ); // Channel count
  segmentDataView.setUint16( 10, 3840, true ); // pre-skip (80ms)
  segmentDataView.setUint32( 12, this.config.originalSampleRateOverride || this.config.originalSampleRate, true ); // original sample rate
  segmentDataView.setUint16( 16, 0, true ); // output gain
  segmentDataView.setUint8( 18, 0, true ); // channel map 0 = mono or stereo
  this.segmentTableIndex = 1;
  this.segmentDataIndex = this.segmentTable[0] = 19;
  this.headerType = 2;
  return this.generatePage();
};

OggOpusEncoder.prototype.generatePage = function(){
  var granulePosition = ( this.lastPositiveGranulePosition === this.granulePosition) ? -1 : this.granulePosition;
  var pageBuffer = new ArrayBuffer(  27 + this.segmentTableIndex + this.segmentDataIndex );
  var pageBufferView = new DataView( pageBuffer );
  var page = new Uint8Array( pageBuffer );

  pageBufferView.setUint32( 0, 1399285583, true); // Capture Pattern starts all page headers 'OggS'
  pageBufferView.setUint8( 4, 0, true ); // Version
  pageBufferView.setUint8( 5, this.headerType, true ); // 1 = continuation, 2 = beginning of stream, 4 = end of stream

  // Number of samples upto and including this page at 48000Hz, into signed 64 bit Little Endian integer
  // Javascript Number maximum value is 53 bits or 2^53 - 1 
  pageBufferView.setUint32( 6, granulePosition, true );
  if (granulePosition < 0) {
    pageBufferView.setInt32( 10, Math.ceil(granulePosition/4294967297) - 1, true );
  }
  else {
    pageBufferView.setInt32( 10, Math.floor(granulePosition/4294967296), true );
  }

  pageBufferView.setUint32( 14, this.config.serial, true ); // Bitstream serial number
  pageBufferView.setUint32( 18, this.pageIndex++, true ); // Page sequence number
  pageBufferView.setUint8( 26, this.segmentTableIndex, true ); // Number of segments in page.
  page.set( this.segmentTable.subarray(0, this.segmentTableIndex), 27 ); // Segment Table
  page.set( this.segmentData.subarray(0, this.segmentDataIndex), 27 + this.segmentTableIndex ); // Segment Data
  pageBufferView.setUint32( 22, this.getChecksum( page ), true ); // Checksum

  var exportPage = { message: 'page', page: page, samplePosition: this.granulePosition };
  this.segmentTableIndex = 0;
  this.segmentDataIndex = 0;
  this.framesInPage = 0;
  if ( granulePosition > 0 ) {
    this.lastPositiveGranulePosition = granulePosition;
  }

  return exportPage;
};

OggOpusEncoder.prototype.initChecksumTable = function(){
  this.checksumTable = [];
  for ( var i = 0; i < 256; i++ ) {
    var r = i << 24;
    for ( var j = 0; j < 8; j++ ) {
      r = ((r & 0x80000000) != 0) ? ((r << 1) ^ 0x04c11db7) : (r << 1);
    }
    this.checksumTable[i] = (r & 0xffffffff);
  }
};

OggOpusEncoder.prototype.setOpusControl = function( control, value ){
  var location = this._malloc( 4 );
  this.HEAP32[ location >> 2 ] = value;
  this._opus_encoder_ctl( this.encoder, control, location );
  this._free( location );
};

OggOpusEncoder.prototype.initCodec = function() {
  var errLocation = this._malloc( 4 );
  this.encoder = this._opus_encoder_create( this.config.encoderSampleRate, this.config.numberOfChannels, this.config.encoderApplication, errLocation );
  this._free( errLocation );

  if ( this.config.encoderBitRate ) {
    this.setOpusControl( 4002, this.config.encoderBitRate );
  }

  if ( this.config.encoderComplexity ) {
    this.setOpusControl( 4010, this.config.encoderComplexity );
  }

  this.encoderSamplesPerChannel = this.config.encoderSampleRate * this.config.encoderFrameSize / 1000;
  this.encoderSamplesPerChannelPointer = this._malloc( 4 );
  this.HEAP32[ this.encoderSamplesPerChannelPointer >> 2 ] = this.encoderSamplesPerChannel;

  this.encoderBufferLength = this.encoderSamplesPerChannel * this.config.numberOfChannels;
  this.encoderBufferPointer = this._malloc( this.encoderBufferLength * 4 ); // 4 bytes per sample
  this.encoderBuffer = this.HEAPF32.subarray( this.encoderBufferPointer >> 2, (this.encoderBufferPointer >> 2) + this.encoderBufferLength );

  this.encoderOutputMaxLength = 4000;
  this.encoderOutputPointer = this._malloc( this.encoderOutputMaxLength );
  this.encoderOutputBuffer = this.HEAPU8.subarray( this.encoderOutputPointer, this.encoderOutputPointer + this.encoderOutputMaxLength );
};

OggOpusEncoder.prototype.initResampler = function() {
  var errLocation = this._malloc( 4 );
  this.resampler = this._speex_resampler_init( this.config.numberOfChannels, this.config.originalSampleRate, this.config.encoderSampleRate, this.config.resampleQuality, errLocation );
  this._free( errLocation );

  this.resampleBufferIndex = 0;
  this.resampleSamplesPerChannel = this.config.originalSampleRate * this.config.encoderFrameSize / 1000;
  this.resampleSamplesPerChannelPointer = this._malloc( 4 );
  this.HEAP32[ this.resampleSamplesPerChannelPointer >> 2 ] = this.resampleSamplesPerChannel;

  this.resampleBufferLength = this.resampleSamplesPerChannel * this.config.numberOfChannels;
  this.resampleBufferPointer = this._malloc( this.resampleBufferLength * 4 ); // 4 bytes per sample
  this.resampleBuffer = this.HEAPF32.subarray( this.resampleBufferPointer >> 2, (this.resampleBufferPointer >> 2) + this.resampleBufferLength );
};

OggOpusEncoder.prototype.interleave = function( buffers ) {
  for ( var i = 0; i < this.bufferLength; i++ ) {
    for ( var channel = 0; channel < this.config.numberOfChannels; channel++ ) {
      this.interleavedBuffers[ i * this.config.numberOfChannels + channel ] = buffers[ channel ][ i ];
    }
  }

  return this.interleavedBuffers;
};

OggOpusEncoder.prototype.segmentPacket = function( packetLength ) {
  var packetIndex = 0;
  var exportPages = [];

  while ( packetLength >= 0 ) {

    if ( this.segmentTableIndex === 255 ) {
      exportPages.push( this.generatePage() );
      this.headerType = 1;
    }

    var segmentLength = Math.min( packetLength, 255 );
    this.segmentTable[ this.segmentTableIndex++ ] = segmentLength;
    this.segmentData.set( this.encoderOutputBuffer.subarray( packetIndex, packetIndex + segmentLength ), this.segmentDataIndex );
    this.segmentDataIndex += segmentLength;
    packetIndex += segmentLength;
    packetLength -= 255;
  }

  this.granulePosition += ( 48 * this.config.encoderFrameSize );
  if ( this.segmentTableIndex === 255 ) {
    exportPages.push( this.generatePage() );
    this.headerType = 0;
  }

  return exportPages;
};

var print = ()=> {};

// Run in AudioWorkletGlobal scope
if (typeof registerProcessor === 'function') {

  class EncoderWorklet extends AudioWorkletProcessor {

    constructor(){
      super();
      print = (text)=> {
          this.port.postMessage( {message: 'print', text: text} );
      };
      this.continueProcess = true;
      this.port.onmessage = ({ data }) => {
        if (this.encoder) {
          switch( data['command'] ){
            case 'getHeaderPages':
			  if (!this.encoder.config.encodeRaw) {
			    this.postPage(this.encoder.generateIdPage());
	            this.postPage(this.encoder.generateCommentPage());
			  }
              break;

            case 'done':
              this.encoder.encodeFinalFrame().forEach(pageData => this.postPage(pageData));
              this.encoder.destroy();
              delete this.encoder;
              this.port.postMessage( {message: 'done'} );
              break;

            case 'flush':
              this.postPage(this.encoder.flush());
              this.port.postMessage( {message: 'flushed'} );
              break;

            default:
              // Ignore any unknown commands and continue recieving commands
          }
        }

        switch( data['command'] ){

          case 'close':
            this.continueProcess = false;
            break;

          case 'init':
            this.encoder = new OggOpusEncoder( data, Module );
            this.port.postMessage( {message: 'ready'} );
            break;

          default:
            // Ignore any unknown commands and continue recieving commands
        }
      }
    }

    process(inputs) {
      if (this.encoder && inputs[0] && inputs[0].length && inputs[0][0] && inputs[0][0].length){
        this.encoder.encode( inputs[0] ).forEach(pageData => this.postPage(pageData));
      }
      return this.continueProcess;
    }

    postPage(pageData) {
      if (pageData) {
        this.port.postMessage( pageData, [pageData.page.buffer] );
      }
    }
  }

  registerProcessor('encoder-worklet', EncoderWorklet);
}

// run in scriptProcessor worker scope
else {
  var encoder;
  var postPageGlobal = (pageData) => {
    if (pageData) {
      postMessage( pageData, [pageData.page.buffer] );
    }
  }
    print = (text)=> {
        postMessage({message: 'print', text: text} );
    };

  onmessage = ({ data }) => {
    if (encoder) {
      switch( data['command'] ){

        case 'encode':
          encoder.encode( data['buffers'] ).forEach(pageData => postPageGlobal(pageData));
          break;

        case 'getHeaderPages':
          postPageGlobal(encoder.generateIdPage());
          postPageGlobal(encoder.generateCommentPage());
          break;

        case 'done':
          encoder.encodeFinalFrame().forEach(pageData => postPageGlobal(pageData));
          encoder.destroy();
          encoder = null;
          postMessage( {message: 'done'} );
          break;

        case 'flush':
          postPageGlobal(encoder.flush());
          postMessage( {message: 'flushed'} );
          break;

        default:
          // Ignore any unknown commands and continue recieving commands
      }
    }

    switch( data['command'] ){

      case 'close':
        close();
        break;

      case 'init':
        encoder = new OggOpusEncoder( data, Module );
        postMessage( {message: 'ready'} );
        break;

      default:
        // Ignore any unknown commands and continue recieving commands
    }
  };
}


// Exports for unit testing.
var module = module || {};
module.exports = {
  Module: Module,
  OggOpusEncoder: OggOpusEncoder
};

`],{type:"text/javascript"})),Y=y(d);function y(IA){const yA=`importScripts( "${IA}" );`;return URL.createObjectURL(new Blob([yA],{type:"text/javascript"}))}var Z=new Worker(Y);URL.revokeObjectURL(Y);var H={},L=h,W=o,O=N,j=[],rA=null,cA=null,LA=window.AudioContext||window.webkitAudioContext,vA=null,RA=!1,VA=!!document.documentMode,lB=!VA&&!!window.StyleMedia,z=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),wA=navigator.userAgent.match(/safari/i)&&navigator.vendor.match(/apple/i)&&navigator.maxTouchPoints;lB||z?cA=new LA({sampleRate:r.sampleRate}):cA=new LA,cA.resume().then(()=>mB(k));var iA=null,JA=null,KA=cA.createGain(),bQ=cA.createGain();bQ.gain.value=1;var jA=null,BQ=cA.createScriptProcessor(r.bufferLength,1,1);BQ.onaudioprocess=({inputBuffer:IA})=>MI(IA),BQ.connect(cA.destination),Z.start&&Z.start();var gA=({data:IA})=>{switch(IA.message){case"ready":console.log("Alan: audio worker initialized");break;case"page":W!==t&&O!==U&&mB("frame",r.sampleRate,IA.page);break;case"done":Z.removeEventListener("message",gA);break;case"print":console.log("AUDIO-WORKER",IA.text);break}};Z.addEventListener("message",gA),Z.postMessage({command:"init",originalSampleRate:cA.sampleRate,encoderSampleRate:r.sampleRate,encoderApplication:r.encoderApplication,encodePCM:r.encodePCM});function AA(){return JA?Promise.resolve(JA):navigator.mediaDevices.getUserMedia({audio:!0}).then(IA=>{mB("micAllowed"),iA=IA,JA=cA.createMediaStreamSource(IA),JA.connect(KA),KA.connect(BQ)})}function MI(IA){if(!(L!==G||W===t||RA)){var yA=[IA.getChannelData(0)];Z.postMessage({command:"encode",buffers:yA})}}function oQ(){W=e,mQ(!0)}function rQ(){return rA||(rA=document.createElement("audio"),rA.addEventListener("ended",function(){oQ()}),document.body.appendChild(rA),rA.setAttribute("autoplay","true"),rA)}function VC(IA){for(var yA=window.atob(IA),YB=yA.length,NB=new Uint8Array(YB),jB=0;jB<YB;jB++)NB[jB]=yA.charCodeAt(jB);return NB.buffer}function Jn(IA){if(O=N,wA){const YB="data:audio/mpeg;base64,";IA.startsWith(YB)&&(IA=IA.substring(YB.length));var yA=VC(IA);cA.decodeAudioData(yA,NB=>{jA=cA.createBufferSource(),jA.addEventListener("ended",jB=>oQ()),jA.connect(KA),jA.connect(bQ),bQ.connect(cA.destination),jA.loop=!1,jA.buffer=NB,jA.start(0)},NB=>console.error(`Error with decoding audio data: ${NB.err}`))}else rQ().muted=!1,rQ().setAttribute("src",IA)}function bn(){wA?jA&&jA.stop():rA&&(rA.pause(),rA.currentTime=0,rA.src="")}function tE(){wA||rQ().setAttribute("src",""),mn()}function mQ(IA){if(cA.state!=="suspended"&&(IA&&!j.length&&tE(),!(!j.length||W===t))){for(;j.length&&W!==t;){var yA=j.shift();yA.event?mB("command",yA.event):yA.text?mB("text",yA.text):yA.afterText?mB("afterText",yA.afterText):yA.popup?mB("popup",yA.popup):yA.audio?(c||L!==h)&&(W=t,mB("playStart"),Jn(yA.audio)):console.error("invalid queue item")}IA&&W!==t&&mn()}}function mn(){mB("playStop")}function mB(IA,yA,YB){var NB=H[IA];if(NB)for(var jB=0;jB<NB.length;jB++)NB[jB](yA,YB)}n.getFormat=function(){return{send:{codec:"opus",sampleRate:16e3},recv:{codec:"mp3;base64",sampleRate:16e3}}},n.isAudioRunning=function(){return cA&&cA.state==="running"},n.isPlaying=function(){return W===t},n.enableVoice=function(){c=!0,rQ().muted=!1},n.disableVoice=function(){c=!1,rQ().muted=!0},n.setProcessingState=function(){O=U},n.playText=function(IA){IA&&IA.ctx&&IA.ctx.opts&&IA.ctx.opts.force===!0?mB("text",IA):cA.resume().then(()=>{j.push({text:IA}),mQ()})},n.playAfterText=function(IA){cA.resume().then(()=>{j.push({afterText:IA}),mQ()})},n.playCommand=function(IA){cA.resume().then(()=>{j.push({event:IA}),mQ()})},n.showPopup=function(IA){IA.popup.force?mB("popup",IA):cA.resume().then(()=>{j.push({popup:IA}),mQ()})},n.playEvent=function(IA){n.playCommand(IA)},n.playAudio=function(IA){cA.resume().then(()=>{j.push({audio:IA}),mQ()})},n.on=function(IA,yA){var YB=H[IA];YB==null?H[IA]=[yA]:YB.push(yA)},n.off=function(IA,yA){var YB=H[IA];if(YB){var NB=YB.indexOf(yA);NB>=0&&YB.splice(NB,1)}},n.resumeAudioCtx=function(){cA.resume()};var sA=!1;function dI(IA){sA=IA}n.isMicAllowed=function(){return sA},n.start=function(IA){vA&&(clearTimeout(vA),vA=null),O=N,rQ().setAttribute("src",""),W=e,AA().then(()=>{L=G,mB("micStart")}).then(()=>{dI(!0),wA||cA.resume()}).catch(yA=>{mB("micFail",yA)}),IA&&(IA(),IA=null)},n.stop=function(){JA&&(L=D),vA&&(clearTimeout(vA),vA=null),vA=setTimeout(xC,r.micTimeout),mB("micStop"),W=o,j=[],bn()},n.skipExternalSounds=function(IA){RA=IA};function xC(){console.log("stopping the mic."),L=h,JA&&(JA.disconnect(),JA=null),KA.disconnect(),iA&&(iA.getTracks?iA.getTracks().forEach(IA=>IA.stop()):iA.stop(),iA=null)}}(typeof window<"u"?function(){return window.alanAudio={},window.alanAudio}():B);var Q=this&&this.__assign||function(){return Q=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++){e=arguments[t];for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&(n[c]=e[c])}return n},Q.apply(this,arguments)},g=this&&this.__awaiter||function(n,e,t,o){function c(D){return D instanceof t?D:new t(function(G){G(D)})}return new(t||(t=Promise))(function(D,G){function h(k){try{U(o.next(k))}catch(r){G(r)}}function N(k){try{U(o.throw(k))}catch(r){G(r)}}function U(k){k.done?D(k.value):c(k.value).then(h,N)}U((o=o.apply(n,e||[])).next())})},E=this&&this.__generator||function(n,e){var t={label:0,sent:function(){if(D[0]&1)throw D[1];return D[1]},trys:[],ops:[]},o,c,D,G;return G={next:h(0),throw:h(1),return:h(2)},typeof Symbol=="function"&&(G[Symbol.iterator]=function(){return this}),G;function h(U){return function(k){return N([U,k])}}function N(U){if(o)throw new TypeError("Generator is already executing.");for(;t;)try{if(o=1,c&&(D=U[0]&2?c.return:U[0]?c.throw||((D=c.return)&&D.call(c),0):c.next)&&!(D=D.call(c,U[1])).done)return D;switch(c=0,D&&(U=[U[0]&2,D.value]),U[0]){case 0:case 1:D=U;break;case 4:return t.label++,{value:U[1],done:!1};case 5:t.label++,c=U[1],U=[0];continue;case 7:U=t.ops.pop(),t.trys.pop();continue;default:if(D=t.trys,!(D=D.length>0&&D[D.length-1])&&(U[0]===6||U[0]===2)){t=0;continue}if(U[0]===3&&(!D||U[1]>D[0]&&U[1]<D[3])){t.label=U[1];break}if(U[0]===6&&t.label<D[1]){t.label=D[1],D=U;break}if(D&&t.label<D[2]){t.label=D[2],t.ops.push(U);break}D[2]&&t.ops.pop(),t.trys.pop();continue}U=e.call(n,t)}catch(k){U=[6,k],c=0}finally{o=D=0}if(U[0]&5)throw U[1];return{value:U[0]?U[1]:void 0,done:!0}}},C=this&&this.__spreadArray||function(n,e,t){if(t||arguments.length===2)for(var o=0,c=e.length,D;o<c;o++)(D||!(o in e))&&(D||(D=Array.prototype.slice.call(e,0,o)),D[o]=e[o]);return n.concat(D||Array.prototype.slice.call(e))};return function(){var n=Object.defineProperty,e=function(a,w,i){return w in a?n(a,w,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[w]=i},t=function(a,w,i){return e(a,typeof w!="symbol"?w+"":w,i),i};function o(){return'<div class="alan-btn__chat-incomming-msg-wrapper"> <div class="alan-btn__chat-incomming-msg msg-1">&nbsp;</div> <div class="alan-btn__chat-incomming-msg msg-2">&nbsp;</div> <div class="alan-btn__chat-incomming-msg msg-3">&nbsp;</div>  </div>'}function c(a){var w;return((w=a.ctx)===null||w===void 0?void 0:w.final)!==!1}function D(a){return a.initLoad||c(a)?"":'<div style="margin-top: 12px;margin-bottom: 12px;">'.concat(o(),"</div>")}function G(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}var h=G();function N(a){h=a}var U=/[&<>"']/,k=new RegExp(U.source,"g"),r=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,d=new RegExp(r.source,"g"),Y={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},y=function(a){return Y[a]};function Z(a,w){if(w){if(U.test(a))return a.replace(k,y)}else if(r.test(a))return a.replace(d,y);return a}var H=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function L(a){return a.replace(H,function(w,i){return i=i.toLowerCase(),i==="colon"?":":i.charAt(0)==="#"?i.charAt(1)==="x"?String.fromCharCode(parseInt(i.substring(2),16)):String.fromCharCode(+i.substring(1)):""})}var W=/(^|[^\[])\^/g;function O(a,w){a=typeof a=="string"?a:a.source,w=w||"";var i={replace:function(l,F){return F=F.source||F,F=F.replace(W,"$1"),a=a.replace(l,F),i},getRegex:function(){return new RegExp(a,w)}};return i}var j=/[^\w:]/g,rA=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function cA(a,w,i){if(a){var l=void 0;try{l=decodeURIComponent(L(i)).replace(j,"").toLowerCase()}catch{return null}if(l.indexOf("javascript:")===0||l.indexOf("vbscript:")===0||l.indexOf("data:")===0)return null}w&&!rA.test(i)&&(i=lB(w,i));try{i=encodeURI(i).replace(/%25/g,"%")}catch{return null}return i}var LA={},vA=/^[^:]+:\/*[^/]*$/,RA=/^([^:]+:)[\s\S]*$/,VA=/^([^:]+:\/*[^/]*)[\s\S]*$/;function lB(a,w){LA[" "+a]||(vA.test(a)?LA[" "+a]=a+"/":LA[" "+a]=iA(a,"/",!0)),a=LA[" "+a];var i=a.indexOf(":")===-1;return w.substring(0,2)==="//"?i?w:a.replace(RA,"$1")+w:w.charAt(0)==="/"?i?w:a.replace(VA,"$1")+w:a+w}var z={exec:function(){}};function wA(a,w){var i=a.replace(/\|/g,function(b,p,J){for(var v=!1,V=p;--V>=0&&J[V]==="\\";)v=!v;return v?"|":" |"}),l=i.split(/ \|/),F=0;if(l[0].trim()||l.shift(),l.length>0&&!l[l.length-1].trim()&&l.pop(),l.length>w)l.splice(w);else for(;l.length<w;)l.push("");for(;F<l.length;F++)l[F]=l[F].trim().replace(/\\\|/g,"|");return l}function iA(a,w,i){var l=a.length;if(l===0)return"";for(var F=0;F<l;){var b=a.charAt(l-F-1);if(b===w&&!i)F++;else if(b!==w&&i)F++;else break}return a.slice(0,l-F)}function JA(a,w){if(a.indexOf(w[1])===-1)return-1;for(var i=a.length,l=0,F=0;F<i;F++)if(a[F]==="\\")F++;else if(a[F]===w[0])l++;else if(a[F]===w[1]&&(l--,l<0))return F;return-1}function KA(a,w){!a||a.silent||(w&&console.warn("marked(): callback is deprecated since version 5.0.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/using_pro#async"),(a.sanitize||a.sanitizer)&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"),(a.highlight||a.langPrefix!=="language-")&&console.warn("marked(): highlight and langPrefix parameters are deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-highlight."),a.mangle&&console.warn("marked(): mangle parameter is enabled by default, but is deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install https://www.npmjs.com/package/marked-mangle, or disable by setting `{mangle: false}`."),a.baseUrl&&console.warn("marked(): baseUrl parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-base-url."),a.smartypants&&console.warn("marked(): smartypants parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-smartypants."),a.xhtml&&console.warn("marked(): xhtml parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-xhtml."),(a.headerIds||a.headerPrefix)&&console.warn("marked(): headerIds and headerPrefix parameters enabled by default, but are deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install  https://www.npmjs.com/package/marked-gfm-heading-id, or disable by setting `{headerIds: false}`."))}function bQ(a,w,i,l){var F=w.href,b=w.title?Z(w.title):null,p=a[1].replace(/\\([\[\]])/g,"$1");if(a[0].charAt(0)!=="!"){l.state.inLink=!0;var J={type:"link",raw:i,href:F,title:b,text:p,tokens:l.inlineTokens(p)};return l.state.inLink=!1,J}return{type:"image",raw:i,href:F,title:b,text:Z(p)}}function jA(a,w){var i=a.match(/^(\s+)(?:```)/);if(i===null)return w;var l=i[1];return w.split(`
`).map(function(F){var b=F.match(/^\s+/);if(b===null)return F;var p=b[0];return p.length>=l.length?F.slice(l.length):F}).join(`
`)}var BQ=function(){function a(w){this.options=w||h}return a.prototype.space=function(w){var i=this.rules.block.newline.exec(w);if(i&&i[0].length>0)return{type:"space",raw:i[0]}},a.prototype.code=function(w){var i=this.rules.block.code.exec(w);if(i){var l=i[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:i[0],codeBlockStyle:"indented",text:this.options.pedantic?l:iA(l,`
`)}}},a.prototype.fences=function(w){var i=this.rules.block.fences.exec(w);if(i){var l=i[0],F=jA(l,i[3]||"");return{type:"code",raw:l,lang:i[2]?i[2].trim().replace(this.rules.inline._escapes,"$1"):i[2],text:F}}},a.prototype.heading=function(w){var i=this.rules.block.heading.exec(w);if(i){var l=i[2].trim();if(/#$/.test(l)){var F=iA(l,"#");(this.options.pedantic||!F||/ $/.test(F))&&(l=F.trim())}return{type:"heading",raw:i[0],depth:i[1].length,text:l,tokens:this.lexer.inline(l)}}},a.prototype.hr=function(w){var i=this.rules.block.hr.exec(w);if(i)return{type:"hr",raw:i[0]}},a.prototype.blockquote=function(w){var i=this.rules.block.blockquote.exec(w);if(i){var l=i[0].replace(/^ *>[ \t]?/gm,""),F=this.lexer.state.top;this.lexer.state.top=!0;var b=this.lexer.blockTokens(l);return this.lexer.state.top=F,{type:"blockquote",raw:i[0],tokens:b,text:l}}},a.prototype.list=function(w){var i=this.rules.block.list.exec(w);if(i){var l=void 0,F=void 0,b=void 0,p=void 0,J=void 0,v=void 0,V=void 0,_=void 0,nA=void 0,oA=void 0,m=void 0,tA=void 0,QA=i[1].trim(),MA=QA.length>1,CA={type:"list",raw:"",ordered:MA,start:MA?+QA.slice(0,-1):"",loose:!1,items:[]};QA=MA?"\\d{1,9}\\".concat(QA.slice(-1)):"\\".concat(QA),this.options.pedantic&&(QA=MA?QA:"[*+-]");for(var bA=new RegExp("^( {0,3}".concat(QA,")((?:[	 ][^\\n]*)?(?:\\n|$))"));w&&(tA=!1,!(!(i=bA.exec(w))||this.rules.block.hr.test(w)));){if(l=i[0],w=w.substring(l.length),_=i[2].split(`
`,1)[0].replace(/^\t+/,function(kB){return" ".repeat(3*kB.length)}),nA=w.split(`
`,1)[0],this.options.pedantic?(p=2,m=_.trimLeft()):(p=i[2].search(/[^ ]/),p=p>4?1:p,m=_.slice(p),p+=i[1].length),v=!1,!_&&/^ *$/.test(nA)&&(l+=nA+`
`,w=w.substring(nA.length+1),tA=!0),!tA)for(var mA=new RegExp("^ {0,".concat(Math.min(3,p-1),"}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))")),vB=new RegExp("^ {0,".concat(Math.min(3,p-1),"}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)")),xA=new RegExp("^ {0,".concat(Math.min(3,p-1),"}(?:```|~~~)")),FB=new RegExp("^ {0,".concat(Math.min(3,p-1),"}#"));w&&(oA=w.split(`
`,1)[0],nA=oA,this.options.pedantic&&(nA=nA.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(xA.test(nA)||FB.test(nA)||mA.test(nA)||vB.test(w)));){if(nA.search(/[^ ]/)>=p||!nA.trim())m+=`
`+nA.slice(p);else{if(v||_.search(/[^ ]/)>=4||xA.test(_)||FB.test(_)||vB.test(_))break;m+=`
`+nA}!v&&!nA.trim()&&(v=!0),l+=oA+`
`,w=w.substring(oA.length+1),_=nA.slice(p)}CA.loose||(V?CA.loose=!0:/\n *\n *$/.test(l)&&(V=!0)),this.options.gfm&&(F=/^\[[ xX]\] /.exec(m),F&&(b=F[0]!=="[ ] ",m=m.replace(/^\[[ xX]\] +/,""))),CA.items.push({type:"list_item",raw:l,task:!!F,checked:b,loose:!1,text:m}),CA.raw+=l}CA.items[CA.items.length-1].raw=l.trimRight(),CA.items[CA.items.length-1].text=m.trimRight(),CA.raw=CA.raw.trimRight();var pB=CA.items.length;for(J=0;J<pB;J++)if(this.lexer.state.top=!1,CA.items[J].tokens=this.lexer.blockTokens(CA.items[J].text,[]),!CA.loose){var $A=CA.items[J].tokens.filter(function(kB){return kB.type==="space"}),fg=$A.length>0&&$A.some(function(kB){return/\n.*\n/.test(kB.raw)});CA.loose=fg}if(CA.loose)for(J=0;J<pB;J++)CA.items[J].loose=!0;return CA}},a.prototype.html=function(w){var i=this.rules.block.html.exec(w);if(i){var l={type:"html",block:!0,raw:i[0],pre:!this.options.sanitizer&&(i[1]==="pre"||i[1]==="script"||i[1]==="style"),text:i[0]};if(this.options.sanitize){var F=this.options.sanitizer?this.options.sanitizer(i[0]):Z(i[0]);l.type="paragraph",l.text=F,l.tokens=this.lexer.inline(F)}return l}},a.prototype.def=function(w){var i=this.rules.block.def.exec(w);if(i){var l=i[1].toLowerCase().replace(/\s+/g," "),F=i[2]?i[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",b=i[3]?i[3].substring(1,i[3].length-1).replace(this.rules.inline._escapes,"$1"):i[3];return{type:"def",tag:l,raw:i[0],href:F,title:b}}},a.prototype.table=function(w){var i=this.rules.block.table.exec(w);if(i){var l={type:"table",header:wA(i[1]).map(function(V){return{text:V}}),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:i[3]&&i[3].trim()?i[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(l.header.length===l.align.length){l.raw=i[0];var F=l.align.length,b=void 0,p=void 0,J=void 0,v=void 0;for(b=0;b<F;b++)/^ *-+: *$/.test(l.align[b])?l.align[b]="right":/^ *:-+: *$/.test(l.align[b])?l.align[b]="center":/^ *:-+ *$/.test(l.align[b])?l.align[b]="left":l.align[b]=null;for(F=l.rows.length,b=0;b<F;b++)l.rows[b]=wA(l.rows[b],l.header.length).map(function(V){return{text:V}});for(F=l.header.length,p=0;p<F;p++)l.header[p].tokens=this.lexer.inline(l.header[p].text);for(F=l.rows.length,p=0;p<F;p++)for(v=l.rows[p],J=0;J<v.length;J++)v[J].tokens=this.lexer.inline(v[J].text);return l}}},a.prototype.lheading=function(w){var i=this.rules.block.lheading.exec(w);if(i)return{type:"heading",raw:i[0],depth:i[2].charAt(0)==="="?1:2,text:i[1],tokens:this.lexer.inline(i[1])}},a.prototype.paragraph=function(w){var i=this.rules.block.paragraph.exec(w);if(i){var l=i[1].charAt(i[1].length-1)===`
`?i[1].slice(0,-1):i[1];return{type:"paragraph",raw:i[0],text:l,tokens:this.lexer.inline(l)}}},a.prototype.text=function(w){var i=this.rules.block.text.exec(w);if(i)return{type:"text",raw:i[0],text:i[0],tokens:this.lexer.inline(i[0])}},a.prototype.escape=function(w){var i=this.rules.inline.escape.exec(w);if(i)return{type:"escape",raw:i[0],text:Z(i[1])}},a.prototype.tag=function(w){var i=this.rules.inline.tag.exec(w);if(i)return!this.lexer.state.inLink&&/^<a /i.test(i[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(i[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(i[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(i[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:i[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):Z(i[0]):i[0]}},a.prototype.link=function(w){var i=this.rules.inline.link.exec(w);if(i){var l=i[2].trim();if(!this.options.pedantic&&/^</.test(l)){if(!/>$/.test(l))return;var F=iA(l.slice(0,-1),"\\");if((l.length-F.length)%2===0)return}else{var b=JA(i[2],"()");if(b>-1){var p=i[0].indexOf("!")===0?5:4,J=p+i[1].length+b;i[2]=i[2].substring(0,b),i[0]=i[0].substring(0,J).trim(),i[3]=""}}var v=i[2],V="";if(this.options.pedantic){var _=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(v);_&&(v=_[1],V=_[3])}else V=i[3]?i[3].slice(1,-1):"";return v=v.trim(),/^</.test(v)&&(this.options.pedantic&&!/>$/.test(l)?v=v.slice(1):v=v.slice(1,-1)),bQ(i,{href:v&&v.replace(this.rules.inline._escapes,"$1"),title:V&&V.replace(this.rules.inline._escapes,"$1")},i[0],this.lexer)}},a.prototype.reflink=function(w,i){var l;if((l=this.rules.inline.reflink.exec(w))||(l=this.rules.inline.nolink.exec(w))){var F=(l[2]||l[1]).replace(/\s+/g," ");if(F=i[F.toLowerCase()],!F){var b=l[0].charAt(0);return{type:"text",raw:b,text:b}}return bQ(l,F,l[0],this.lexer)}},a.prototype.emStrong=function(w,i,l){l===void 0&&(l="");var F=this.rules.inline.emStrong.lDelim.exec(w);if(F&&!(F[3]&&l.match(/[\p{L}\p{N}]/u))){var b=F[1]||F[2]||"";if(!b||b&&(l===""||this.rules.inline.punctuation.exec(l))){var p=F[0].length-1,J=void 0,v=void 0,V=p,_=0,nA=F[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(nA.lastIndex=0,i=i.slice(-1*w.length+p);(F=nA.exec(i))!=null;)if(J=F[1]||F[2]||F[3]||F[4]||F[5]||F[6],!!J){if(v=J.length,F[3]||F[4]){V+=v;continue}else if((F[5]||F[6])&&p%3&&!((p+v)%3)){_+=v;continue}if(V-=v,!(V>0)){v=Math.min(v,v+V+_);var oA=w.slice(0,p+F.index+(F[0].length-J.length)+v);if(Math.min(p,v)%2){var m=oA.slice(1,-1);return{type:"em",raw:oA,text:m,tokens:this.lexer.inlineTokens(m)}}var tA=oA.slice(2,-2);return{type:"strong",raw:oA,text:tA,tokens:this.lexer.inlineTokens(tA)}}}}}},a.prototype.codespan=function(w){var i=this.rules.inline.code.exec(w);if(i){var l=i[2].replace(/\n/g," "),F=/[^ ]/.test(l),b=/^ /.test(l)&&/ $/.test(l);return F&&b&&(l=l.substring(1,l.length-1)),l=Z(l,!0),{type:"codespan",raw:i[0],text:l}}},a.prototype.br=function(w){var i=this.rules.inline.br.exec(w);if(i)return{type:"br",raw:i[0]}},a.prototype.del=function(w){var i=this.rules.inline.del.exec(w);if(i)return{type:"del",raw:i[0],text:i[2],tokens:this.lexer.inlineTokens(i[2])}},a.prototype.autolink=function(w,i){var l=this.rules.inline.autolink.exec(w);if(l){var F=void 0,b=void 0;return l[2]==="@"?(F=Z(this.options.mangle?i(l[1]):l[1]),b="mailto:"+F):(F=Z(l[1]),b=F),{type:"link",raw:l[0],text:F,href:b,tokens:[{type:"text",raw:F,text:F}]}}},a.prototype.url=function(w,i){var l;if(l=this.rules.inline.url.exec(w)){var F=void 0,b=void 0;if(l[2]==="@")F=Z(this.options.mangle?i(l[0]):l[0]),b="mailto:"+F;else{var p=void 0;do p=l[0],l[0]=this.rules.inline._backpedal.exec(l[0])[0];while(p!==l[0]);F=Z(l[0]),l[1]==="www."?b="http://"+l[0]:b=l[0]}return{type:"link",raw:l[0],text:F,href:b,tokens:[{type:"text",raw:F,text:F}]}}},a.prototype.inlineText=function(w,i){var l=this.rules.inline.text.exec(w);if(l){var F=void 0;return this.lexer.state.inRawBlock?F=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(l[0]):Z(l[0]):l[0]:F=Z(this.options.smartypants?i(l[0]):l[0]),{type:"text",raw:l[0],text:F}}},a}(),gA={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:z,lheading:/^((?:(?!^bull ).|\n(?!\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};gA._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/,gA._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,gA.def=O(gA.def).replace("label",gA._label).replace("title",gA._title).getRegex(),gA.bullet=/(?:[*+-]|\d{1,9}[.)])/,gA.listItemStart=O(/^( *)(bull) */).replace("bull",gA.bullet).getRegex(),gA.list=O(gA.list).replace(/bull/g,gA.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+gA.def.source+")").getRegex(),gA._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",gA._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,gA.html=O(gA.html,"i").replace("comment",gA._comment).replace("tag",gA._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),gA.lheading=O(gA.lheading).replace(/bull/g,gA.bullet).getRegex(),gA.paragraph=O(gA._paragraph).replace("hr",gA.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",gA._tag).getRegex(),gA.blockquote=O(gA.blockquote).replace("paragraph",gA.paragraph).getRegex(),gA.normal=Q({},gA),gA.gfm=Q(Q({},gA.normal),{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),gA.gfm.table=O(gA.gfm.table).replace("hr",gA.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",gA._tag).getRegex(),gA.gfm.paragraph=O(gA._paragraph).replace("hr",gA.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",gA.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",gA._tag).getRegex(),gA.pedantic=Q(Q({},gA.normal),{html:O(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",gA._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:z,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:O(gA.normal._paragraph).replace("hr",gA.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",gA.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});var AA={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:z,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:z,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};AA._uc_punctuation="\\u00A1\\u00A7\\u00AB\\u00B6\\u00B7\\u00BB\\u00BF\\u037E\\u0387\\u055A-\\u055F\\u0589\\u058A\\u05BE\\u05C0\\u05C3\\u05C6\\u05F3\\u05F4\\u0609\\u060A\\u060C\\u060D\\u061B\\u061E\\u061F\\u066A-\\u066D\\u06D4\\u0700-\\u070D\\u07F7-\\u07F9\\u0830-\\u083E\\u085E\\u0964\\u0965\\u0970\\u0AF0\\u0DF4\\u0E4F\\u0E5A\\u0E5B\\u0F04-\\u0F12\\u0F14\\u0F3A-\\u0F3D\\u0F85\\u0FD0-\\u0FD4\\u0FD9\\u0FDA\\u104A-\\u104F\\u10FB\\u1360-\\u1368\\u1400\\u166D\\u166E\\u169B\\u169C\\u16EB-\\u16ED\\u1735\\u1736\\u17D4-\\u17D6\\u17D8-\\u17DA\\u1800-\\u180A\\u1944\\u1945\\u1A1E\\u1A1F\\u1AA0-\\u1AA6\\u1AA8-\\u1AAD\\u1B5A-\\u1B60\\u1BFC-\\u1BFF\\u1C3B-\\u1C3F\\u1C7E\\u1C7F\\u1CC0-\\u1CC7\\u1CD3\\u2010-\\u2027\\u2030-\\u2043\\u2045-\\u2051\\u2053-\\u205E\\u207D\\u207E\\u208D\\u208E\\u2308-\\u230B\\u2329\\u232A\\u2768-\\u2775\\u27C5\\u27C6\\u27E6-\\u27EF\\u2983-\\u2998\\u29D8-\\u29DB\\u29FC\\u29FD\\u2CF9-\\u2CFC\\u2CFE\\u2CFF\\u2D70\\u2E00-\\u2E2E\\u2E30-\\u2E42\\u3001-\\u3003\\u3008-\\u3011\\u3014-\\u301F\\u3030\\u303D\\u30A0\\u30FB\\uA4FE\\uA4FF\\uA60D-\\uA60F\\uA673\\uA67E\\uA6F2-\\uA6F7\\uA874-\\uA877\\uA8CE\\uA8CF\\uA8F8-\\uA8FA\\uA8FC\\uA92E\\uA92F\\uA95F\\uA9C1-\\uA9CD\\uA9DE\\uA9DF\\uAA5C-\\uAA5F\\uAADE\\uAADF\\uAAF0\\uAAF1\\uABEB\\uFD3E\\uFD3F\\uFE10-\\uFE19\\uFE30-\\uFE52\\uFE54-\\uFE61\\uFE63\\uFE68\\uFE6A\\uFE6B\\uFF01-\\uFF03\\uFF05-\\uFF0A\\uFF0C-\\uFF0F\\uFF1A\\uFF1B\\uFF1F\\uFF20\\uFF3B-\\uFF3D\\uFF3F\\uFF5B\\uFF5D\\uFF5F-\\uFF65",AA._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"+AA._uc_punctuation,AA.punctuation=O(AA.punctuation).replace(/punctuation/g,AA._punctuation).getRegex(),AA.blockSkip=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,AA.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g,AA._comment=O(gA._comment).replace("(?:-->|$)","-->").getRegex(),AA.emStrong.lDelim=O(AA.emStrong.lDelim).replace(/punct/g,AA._punctuation).getRegex(),AA.emStrong.rDelimAst=O(AA.emStrong.rDelimAst,"g").replace(/punct/g,AA._punctuation).getRegex(),AA.emStrong.rDelimUnd=O(AA.emStrong.rDelimUnd,"g").replace(/punct/g,AA._punctuation).getRegex(),AA._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,AA._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,AA._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,AA.autolink=O(AA.autolink).replace("scheme",AA._scheme).replace("email",AA._email).getRegex(),AA._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,AA.tag=O(AA.tag).replace("comment",AA._comment).replace("attribute",AA._attribute).getRegex(),AA._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,AA._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,AA._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,AA.link=O(AA.link).replace("label",AA._label).replace("href",AA._href).replace("title",AA._title).getRegex(),AA.reflink=O(AA.reflink).replace("label",AA._label).replace("ref",gA._label).getRegex(),AA.nolink=O(AA.nolink).replace("ref",gA._label).getRegex(),AA.reflinkSearch=O(AA.reflinkSearch,"g").replace("reflink",AA.reflink).replace("nolink",AA.nolink).getRegex(),AA.normal=Q({},AA),AA.pedantic=Q(Q({},AA.normal),{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:O(/^!?\[(label)\]\((.*?)\)/).replace("label",AA._label).getRegex(),reflink:O(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",AA._label).getRegex()}),AA.gfm=Q(Q({},AA.normal),{escape:O(AA.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),AA.gfm.url=O(AA.gfm.url,"i").replace("email",AA.gfm._extended_email).getRegex(),AA.breaks=Q(Q({},AA.gfm),{br:O(AA.br).replace("{2,}","*").getRegex(),text:O(AA.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function MI(a){return a.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function oQ(a){var w="",i,l,F=a.length;for(i=0;i<F;i++)l=a.charCodeAt(i),Math.random()>.5&&(l="x"+l.toString(16)),w+="&#"+l+";";return w}var rQ=function(){function a(w){this.tokens=[],this.tokens.links=Object.create(null),this.options=w||h,this.options.tokenizer=this.options.tokenizer||new BQ,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};var i={block:gA.normal,inline:AA.normal};this.options.pedantic?(i.block=gA.pedantic,i.inline=AA.pedantic):this.options.gfm&&(i.block=gA.gfm,this.options.breaks?i.inline=AA.breaks:i.inline=AA.gfm),this.tokenizer.rules=i}return Object.defineProperty(a,"rules",{get:function(){return{block:gA,inline:AA}},enumerable:!1,configurable:!0}),a.lex=function(w,i){var l=new a(i);return l.lex(w)},a.lexInline=function(w,i){var l=new a(i);return l.inlineTokens(w)},a.prototype.lex=function(w){w=w.replace(/\r\n|\r/g,`
`),this.blockTokens(w,this.tokens);for(var i;i=this.inlineQueue.shift();)this.inlineTokens(i.src,i.tokens);return this.tokens},a.prototype.blockTokens=function(w,i){var l=this;i===void 0&&(i=[]),this.options.pedantic?w=w.replace(/\t/g,"    ").replace(/^ +$/gm,""):w=w.replace(/^( *)(\t+)/gm,function(nA,oA,m){return oA+"    ".repeat(m.length)});for(var F,b,p,J,v=function(){if(V.options.extensions&&V.options.extensions.block&&V.options.extensions.block.some(function(QA){return(F=QA.call({lexer:l},w,i))?(w=w.substring(F.raw.length),i.push(F),!0):!1}))return"continue";if(F=V.tokenizer.space(w))return w=w.substring(F.raw.length),F.raw.length===1&&i.length>0?i[i.length-1].raw+=`
`:i.push(F),"continue";if(F=V.tokenizer.code(w))return w=w.substring(F.raw.length),b=i[i.length-1],b&&(b.type==="paragraph"||b.type==="text")?(b.raw+=`
`+F.raw,b.text+=`
`+F.text,V.inlineQueue[V.inlineQueue.length-1].src=b.text):i.push(F),"continue";if((F=V.tokenizer.fences(w))||(F=V.tokenizer.heading(w))||(F=V.tokenizer.hr(w))||(F=V.tokenizer.blockquote(w))||(F=V.tokenizer.list(w))||(F=V.tokenizer.html(w)))return w=w.substring(F.raw.length),i.push(F),"continue";if(F=V.tokenizer.def(w))return w=w.substring(F.raw.length),b=i[i.length-1],b&&(b.type==="paragraph"||b.type==="text")?(b.raw+=`
`+F.raw,b.text+=`
`+F.raw,V.inlineQueue[V.inlineQueue.length-1].src=b.text):V.tokens.links[F.tag]||(V.tokens.links[F.tag]={href:F.href,title:F.title}),"continue";if((F=V.tokenizer.table(w))||(F=V.tokenizer.lheading(w)))return w=w.substring(F.raw.length),i.push(F),"continue";if(p=w,V.options.extensions&&V.options.extensions.startBlock){var nA=1/0,oA=w.slice(1),m;V.options.extensions.startBlock.forEach(function(QA){m=QA.call({lexer:this},oA),typeof m=="number"&&m>=0&&(nA=Math.min(nA,m))}),nA<1/0&&nA>=0&&(p=w.substring(0,nA+1))}if(V.state.top&&(F=V.tokenizer.paragraph(p)))return b=i[i.length-1],J&&b.type==="paragraph"?(b.raw+=`
`+F.raw,b.text+=`
`+F.text,V.inlineQueue.pop(),V.inlineQueue[V.inlineQueue.length-1].src=b.text):i.push(F),J=p.length!==w.length,w=w.substring(F.raw.length),"continue";if(F=V.tokenizer.text(w))return w=w.substring(F.raw.length),b=i[i.length-1],b&&b.type==="text"?(b.raw+=`
`+F.raw,b.text+=`
`+F.text,V.inlineQueue.pop(),V.inlineQueue[V.inlineQueue.length-1].src=b.text):i.push(F),"continue";if(w){var tA="Infinite loop on byte: "+w.charCodeAt(0);if(V.options.silent)return console.error(tA),"break";throw new Error(tA)}},V=this;w;){var _=v();if(_==="break")break}return this.state.top=!0,i},a.prototype.inline=function(w,i){return i===void 0&&(i=[]),this.inlineQueue.push({src:w,tokens:i}),i},a.prototype.inlineTokens=function(w,i){var l=this;i===void 0&&(i=[]);var F,b,p,J=w,v,V,_;if(this.tokens.links){var nA=Object.keys(this.tokens.links);if(nA.length>0)for(;(v=this.tokenizer.rules.inline.reflinkSearch.exec(J))!=null;)nA.includes(v[0].slice(v[0].lastIndexOf("[")+1,-1))&&(J=J.slice(0,v.index)+"["+"a".repeat(v[0].length-2)+"]"+J.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(v=this.tokenizer.rules.inline.blockSkip.exec(J))!=null;)J=J.slice(0,v.index)+"["+"a".repeat(v[0].length-2)+"]"+J.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(v=this.tokenizer.rules.inline.escapedEmSt.exec(J))!=null;)J=J.slice(0,v.index+v[0].length-2)+"++"+J.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(var oA=function(){if(V||(_=""),V=!1,m.options.extensions&&m.options.extensions.inline&&m.options.extensions.inline.some(function(mA){return(F=mA.call({lexer:l},w,i))?(w=w.substring(F.raw.length),i.push(F),!0):!1}))return"continue";if(F=m.tokenizer.escape(w))return w=w.substring(F.raw.length),i.push(F),"continue";if(F=m.tokenizer.tag(w))return w=w.substring(F.raw.length),b=i[i.length-1],b&&F.type==="text"&&b.type==="text"?(b.raw+=F.raw,b.text+=F.text):i.push(F),"continue";if(F=m.tokenizer.link(w))return w=w.substring(F.raw.length),i.push(F),"continue";if(F=m.tokenizer.reflink(w,m.tokens.links))return w=w.substring(F.raw.length),b=i[i.length-1],b&&F.type==="text"&&b.type==="text"?(b.raw+=F.raw,b.text+=F.text):i.push(F),"continue";if((F=m.tokenizer.emStrong(w,J,_))||(F=m.tokenizer.codespan(w))||(F=m.tokenizer.br(w))||(F=m.tokenizer.del(w))||(F=m.tokenizer.autolink(w,oQ))||!m.state.inLink&&(F=m.tokenizer.url(w,oQ)))return w=w.substring(F.raw.length),i.push(F),"continue";if(p=w,m.options.extensions&&m.options.extensions.startInline){var QA=1/0,MA=w.slice(1),CA;m.options.extensions.startInline.forEach(function(mA){CA=mA.call({lexer:this},MA),typeof CA=="number"&&CA>=0&&(QA=Math.min(QA,CA))}),QA<1/0&&QA>=0&&(p=w.substring(0,QA+1))}if(F=m.tokenizer.inlineText(p,MI))return w=w.substring(F.raw.length),F.raw.slice(-1)!=="_"&&(_=F.raw.slice(-1)),V=!0,b=i[i.length-1],b&&b.type==="text"?(b.raw+=F.raw,b.text+=F.text):i.push(F),"continue";if(w){var bA="Infinite loop on byte: "+w.charCodeAt(0);if(m.options.silent)return console.error(bA),"break";throw new Error(bA)}},m=this;w;){var tA=oA();if(tA==="break")break}return i},a}(),VC=function(){function a(w){this.options=w||h}return a.prototype.code=function(w,i,l){var F=(i||"").match(/\S*/)[0];if(this.options.highlight){var b=this.options.highlight(w,F);b!=null&&b!==w&&(l=!0,w=b)}return w=w.replace(/\n$/,"")+`
`,F?'<pre><code class="'+this.options.langPrefix+Z(F)+'">'+(l?w:Z(w,!0))+`</code></pre>
`:"<pre><code>"+(l?w:Z(w,!0))+`</code></pre>
`},a.prototype.blockquote=function(w){return`<blockquote>
`.concat(w,`</blockquote>
`)},a.prototype.html=function(w,i){return w},a.prototype.heading=function(w,i,l,F){if(this.options.headerIds){var b=this.options.headerPrefix+F.slug(l);return"<h".concat(i,' id="').concat(b,'">').concat(w,"</h").concat(i,`>
`)}return"<h".concat(i,">").concat(w,"</h").concat(i,`>
`)},a.prototype.hr=function(){return this.options.xhtml?`<hr/>
`:`<hr>
`},a.prototype.list=function(w,i,l){var F=i?"ol":"ul",b=i&&l!==1?' start="'+l+'"':"";return"<"+F+b+`>
`+w+"</"+F+`>
`},a.prototype.listitem=function(w){return"<li>".concat(w,`</li>
`)},a.prototype.checkbox=function(w){return"<input "+(w?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},a.prototype.paragraph=function(w){return"<p>".concat(w,`</p>
`)},a.prototype.table=function(w,i){return i&&(i="<tbody>".concat(i,"</tbody>")),`<table>
<thead>
`+w+`</thead>
`+i+`</table>
`},a.prototype.tablerow=function(w){return`<tr>
`.concat(w,`</tr>
`)},a.prototype.tablecell=function(w,i){var l=i.header?"th":"td",F=i.align?"<".concat(l,' align="').concat(i.align,'">'):"<".concat(l,">");return F+w+"</".concat(l,`>
`)},a.prototype.strong=function(w){return"<strong>".concat(w,"</strong>")},a.prototype.em=function(w){return"<em>".concat(w,"</em>")},a.prototype.codespan=function(w){return"<code>".concat(w,"</code>")},a.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},a.prototype.del=function(w){return"<del>".concat(w,"</del>")},a.prototype.link=function(w,i,l){if(w=cA(this.options.sanitize,this.options.baseUrl,w),w===null)return l;var F='<a href="'+w+'"';return i&&(F+=' title="'+i+'"'),F+=">"+l+"</a>",F},a.prototype.image=function(w,i,l){if(w=cA(this.options.sanitize,this.options.baseUrl,w),w===null)return l;var F='<img src="'.concat(w,'" alt="').concat(l,'"');return i&&(F+=' title="'.concat(i,'"')),F+=this.options.xhtml?"/>":">",F},a.prototype.text=function(w){return w},a}(),Jn=function(){function a(){}return a.prototype.strong=function(w){return w},a.prototype.em=function(w){return w},a.prototype.codespan=function(w){return w},a.prototype.del=function(w){return w},a.prototype.html=function(w){return w},a.prototype.text=function(w){return w},a.prototype.link=function(w,i,l){return""+l},a.prototype.image=function(w,i,l){return""+l},a.prototype.br=function(){return""},a}(),bn=function(){function a(){this.seen={}}return a.prototype.serialize=function(w){return w.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")},a.prototype.getNextSafeSlug=function(w,i){var l=w,F=0;if(this.seen.hasOwnProperty(l)){F=this.seen[w];do F++,l=w+"-"+F;while(this.seen.hasOwnProperty(l))}return i||(this.seen[w]=F,this.seen[l]=0),l},a.prototype.slug=function(w,i){i===void 0&&(i={});var l=this.serialize(w);return this.getNextSafeSlug(l,i.dryrun)},a}(),tE=function(){function a(w){this.options=w||h,this.options.renderer=this.options.renderer||new VC,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Jn,this.slugger=new bn}return a.parse=function(w,i){var l=new a(i);return l.parse(w)},a.parseInline=function(w,i){var l=new a(i);return l.parseInline(w)},a.prototype.parse=function(w,i){i===void 0&&(i=!0);var l="",F,b,p,J,v,V,_,nA,oA,m,tA,QA,MA,CA,bA,mA,vB,xA,FB,pB=w.length;for(F=0;F<pB;F++){if(m=w[F],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[m.type]&&(FB=this.options.extensions.renderers[m.type].call({parser:this},m),FB!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(m.type))){l+=FB||"";continue}switch(m.type){case"space":continue;case"hr":{l+=this.renderer.hr();continue}case"heading":{l+=this.renderer.heading(this.parseInline(m.tokens),m.depth,L(this.parseInline(m.tokens,this.textRenderer)),this.slugger);continue}case"code":{l+=this.renderer.code(m.text,m.lang,m.escaped);continue}case"table":{for(nA="",_="",J=m.header.length,b=0;b<J;b++)_+=this.renderer.tablecell(this.parseInline(m.header[b].tokens),{header:!0,align:m.align[b]});for(nA+=this.renderer.tablerow(_),oA="",J=m.rows.length,b=0;b<J;b++){for(V=m.rows[b],_="",v=V.length,p=0;p<v;p++)_+=this.renderer.tablecell(this.parseInline(V[p].tokens),{header:!1,align:m.align[p]});oA+=this.renderer.tablerow(_)}l+=this.renderer.table(nA,oA);continue}case"blockquote":{oA=this.parse(m.tokens),l+=this.renderer.blockquote(oA);continue}case"list":{for(tA=m.ordered,QA=m.start,MA=m.loose,J=m.items.length,oA="",b=0;b<J;b++)bA=m.items[b],mA=bA.checked,vB=bA.task,CA="",bA.task&&(xA=this.renderer.checkbox(mA),MA?bA.tokens.length>0&&bA.tokens[0].type==="paragraph"?(bA.tokens[0].text=xA+" "+bA.tokens[0].text,bA.tokens[0].tokens&&bA.tokens[0].tokens.length>0&&bA.tokens[0].tokens[0].type==="text"&&(bA.tokens[0].tokens[0].text=xA+" "+bA.tokens[0].tokens[0].text)):bA.tokens.unshift({type:"text",text:xA}):CA+=xA),CA+=this.parse(bA.tokens,MA),oA+=this.renderer.listitem(CA,vB,mA);l+=this.renderer.list(oA,tA,QA);continue}case"html":{l+=this.renderer.html(m.text,m.block);continue}case"paragraph":{l+=this.renderer.paragraph(this.parseInline(m.tokens));continue}case"text":{for(oA=m.tokens?this.parseInline(m.tokens):m.text;F+1<pB&&w[F+1].type==="text";)m=w[++F],oA+=`
`+(m.tokens?this.parseInline(m.tokens):m.text);l+=i?this.renderer.paragraph(oA):oA;continue}default:{var $A='Token with "'+m.type+'" type was not found.';if(this.options.silent){console.error($A);return}else throw new Error($A)}}}return l},a.prototype.parseInline=function(w,i){i=i||this.renderer;var l="",F,b,p,J=w.length;for(F=0;F<J;F++){if(b=w[F],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[b.type]&&(p=this.options.extensions.renderers[b.type].call({parser:this},b),p!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(b.type))){l+=p||"";continue}switch(b.type){case"escape":{l+=i.text(b.text);break}case"html":{l+=i.html(b.text);break}case"link":{l+=i.link(b.href,b.title,this.parseInline(b.tokens,i));break}case"image":{l+=i.image(b.href,b.title,b.text);break}case"strong":{l+=i.strong(this.parseInline(b.tokens,i));break}case"em":{l+=i.em(this.parseInline(b.tokens,i));break}case"codespan":{l+=i.codespan(b.text);break}case"br":{l+=i.br();break}case"del":{l+=i.del(this.parseInline(b.tokens,i));break}case"text":{l+=i.text(b.text);break}default:{var v='Token with "'+b.type+'" type was not found.';if(this.options.silent){console.error(v);return}else throw new Error(v)}}}return l},a}(),mQ=function(){function a(w){this.options=w||h}return a.prototype.preprocess=function(w){return w},a.prototype.postprocess=function(w){return w},a}();t(mQ,"passThroughHooks",new Set(["preprocess","postprocess"]));function mn(a,w,i){return function(l){if(l.message+=`
Please report this to https://github.com/markedjs/marked.`,a){var F="<p>An error occurred:</p><pre>"+Z(l.message+"",!0)+"</pre>";if(w)return Promise.resolve(F);if(i){i(null,F);return}return F}if(w)return Promise.reject(l);if(i){i(l);return}throw l}}function mB(a,w){return function(i,l,F){typeof l=="function"&&(F=l,l=null);var b=Q({},l);l=Q(Q({},sA.defaults),b);var p=mn(l.silent,l.async,F);if(typeof i>"u"||i===null)return p(new Error("marked(): input parameter is undefined or null"));if(typeof i!="string")return p(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(i)+", string expected"));if(KA(l,F),l.hooks&&(l.hooks.options=l),F){var J=l.highlight,v;try{l.hooks&&(i=l.hooks.preprocess(i)),v=a(i,l)}catch(m){return p(m)}var V=function(m){var tA;if(!m)try{l.walkTokens&&sA.walkTokens(v,l.walkTokens),tA=w(v,l),l.hooks&&(tA=l.hooks.postprocess(tA))}catch(QA){m=QA}return l.highlight=J,m?p(m):F(null,tA)};if(!J||J.length<3||(delete l.highlight,!v.length))return V();var _=0;sA.walkTokens(v,function(m){m.type==="code"&&(_++,setTimeout(function(){J(m.text,m.lang,function(tA,QA){if(tA)return V(tA);QA!=null&&QA!==m.text&&(m.text=QA,m.escaped=!0),_--,_===0&&V()})},0))}),_===0&&V();return}if(l.async)return Promise.resolve(l.hooks?l.hooks.preprocess(i):i).then(function(m){return a(m,l)}).then(function(m){return l.walkTokens?Promise.all(sA.walkTokens(m,l.walkTokens)).then(function(){return m}):m}).then(function(m){return w(m,l)}).then(function(m){return l.hooks?l.hooks.postprocess(m):m}).catch(p);try{l.hooks&&(i=l.hooks.preprocess(i));var nA=a(i,l);l.walkTokens&&sA.walkTokens(nA,l.walkTokens);var oA=w(nA,l);return l.hooks&&(oA=l.hooks.postprocess(oA)),oA}catch(m){return p(m)}}}function sA(a,w,i){return mB(rQ.lex,tE.parse)(a,w,i)}sA.options=sA.setOptions=function(a){return sA.defaults=Q(Q({},sA.defaults),a),N(sA.defaults),sA},sA.getDefaults=G,sA.defaults=h,sA.use=function(){for(var a=[],w=0;w<arguments.length;w++)a[w]=arguments[w];var i=sA.defaults.extensions||{renderers:{},childTokens:{}};a.forEach(function(l){var F=Q({},l);if(F.async=sA.defaults.async||F.async||!1,l.extensions&&(l.extensions.forEach(function(m){if(!m.name)throw new Error("extension name required");if(m.renderer){var tA=i.renderers[m.name];tA?i.renderers[m.name]=function(){for(var QA=[],MA=0;MA<arguments.length;MA++)QA[MA]=arguments[MA];var CA=m.renderer.apply(this,QA);return CA===!1&&(CA=tA.apply(this,QA)),CA}:i.renderers[m.name]=m.renderer}if(m.tokenizer){if(!m.level||m.level!=="block"&&m.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");i[m.level]?i[m.level].unshift(m.tokenizer):i[m.level]=[m.tokenizer],m.start&&(m.level==="block"?i.startBlock?i.startBlock.push(m.start):i.startBlock=[m.start]:m.level==="inline"&&(i.startInline?i.startInline.push(m.start):i.startInline=[m.start]))}m.childTokens&&(i.childTokens[m.name]=m.childTokens)}),F.extensions=i),l.renderer){var b=sA.defaults.renderer||new VC,p=function(m){var tA=b[m];b[m]=function(){for(var QA=[],MA=0;MA<arguments.length;MA++)QA[MA]=arguments[MA];var CA=l.renderer[m].apply(b,QA);return CA===!1&&(CA=tA.apply(b,QA)),CA}};for(var J in l.renderer)p(J);F.renderer=b}if(l.tokenizer){var v=sA.defaults.tokenizer||new BQ,V=function(m){var tA=v[m];v[m]=function(){for(var QA=[],MA=0;MA<arguments.length;MA++)QA[MA]=arguments[MA];var CA=l.tokenizer[m].apply(v,QA);return CA===!1&&(CA=tA.apply(v,QA)),CA}};for(var J in l.tokenizer)V(J);F.tokenizer=v}if(l.hooks){var _=sA.defaults.hooks||new mQ,nA=function(m){var tA=_[m];mQ.passThroughHooks.has(m)?_[m]=function(QA){if(sA.defaults.async)return Promise.resolve(l.hooks[m].call(_,QA)).then(function(CA){return tA.call(_,CA)});var MA=l.hooks[m].call(_,QA);return tA.call(_,MA)}:_[m]=function(){for(var QA=[],MA=0;MA<arguments.length;MA++)QA[MA]=arguments[MA];var CA=l.hooks[m].apply(_,QA);return CA===!1&&(CA=tA.apply(_,QA)),CA}};for(var J in l.hooks)nA(J);F.hooks=_}if(l.walkTokens){var oA=sA.defaults.walkTokens;F.walkTokens=function(m){var tA=[];return tA.push(l.walkTokens.call(this,m)),oA&&(tA=tA.concat(oA.call(this,m))),tA}}sA.setOptions(F)})},sA.walkTokens=function(a,w){for(var i=[],l=function(J){switch(i=i.concat(w.call(sA,J)),J.type){case"table":{for(var v=0,V=J.header;v<V.length;v++){var _=V[v];i=i.concat(sA.walkTokens(_.tokens,w))}for(var nA=0,oA=J.rows;nA<oA.length;nA++)for(var m=oA[nA],tA=0,QA=m;tA<QA.length;tA++){var _=QA[tA];i=i.concat(sA.walkTokens(_.tokens,w))}break}case"list":{i=i.concat(sA.walkTokens(J.items,w));break}default:sA.defaults.extensions&&sA.defaults.extensions.childTokens&&sA.defaults.extensions.childTokens[J.type]?sA.defaults.extensions.childTokens[J.type].forEach(function(MA){i=i.concat(sA.walkTokens(J[MA],w))}):J.tokens&&(i=i.concat(sA.walkTokens(J.tokens,w)))}},F=0,b=a;F<b.length;F++){var p=b[F];l(p)}return i},sA.parseInline=mB(rQ.lexInline,tE.parseInline),sA.Parser=tE,sA.parser=tE.parse,sA.Renderer=VC,sA.TextRenderer=Jn,sA.Lexer=rQ,sA.lexer=rQ.lex,sA.Tokenizer=BQ,sA.Slugger=bn,sA.Hooks=mQ,sA.parse=sA,sA.options,sA.setOptions,sA.use,sA.walkTokens,sA.parseInline,tE.parse,rQ.lex;function dI(a,w){return{read:a.read!==void 0?a.read:!w}}function xC(a,w,i){var l,F=i.images||[],b=a[w].text||"",p=i.text||"";a[w].text=b+((b&&p?" ":"")+p),a[w].images=C(C([],a[w].images||[],!0),F,!0),a[w].links=C(C([],a[w].links||[],!0),i.links||[],!0),a[w].hasLikes=a[w].hasLikes||i.hasLikes,((l=i.ctx)===null||l===void 0?void 0:l.format)==="markdown"&&(a[w].ctx?a[w].ctx.format="markdown":a[w].ctx={format:"markdown"})}function IA(a,w){var i,l,F=!0,b=!1,p=null,J=!1,v=a.reqId||((i=a==null?void 0:a.ctx)===null||i===void 0?void 0:i.reqId),V=(l=a==null?void 0:a.ctx)===null||l===void 0?void 0:l.responseId;if(a.type==="response"&&a.name==="text"){var _=w.findIndex(function(m){var tA;return m.name==="loading"&&v&&(((tA=m==null?void 0:m.ctx)===null||tA===void 0?void 0:tA.reqId)||m.reqId)===v});if(_>-1)p=_,w[p]=Q({},a),b=!0,F=!1;else{var nA=w.findIndex(function(m){var tA;return m.type==="response"&&V&&((tA=m==null?void 0:m.ctx)===null||tA===void 0?void 0:tA.responseId)===V}),oA=nA!==-1;oA&&(p=nA,J=!0,b=!1,F=!1,xC(w,p,a))}}return F?(w.push(Q({},a)),{isNew:F,msgInd:w.length-1,replaceLoader:b,updateResponse:J}):{isNew:F,updateResponse:J,replaceLoader:b,msgInd:p}}function yA(a){return(a||[]).filter(function(w){return w&&w.src?w.src.match(/\.(jpg|jpeg|png|gif|svg|webp)$/i):null})}function YB(a){var w=/^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/gm;return!!a.match(w)}function NB(a){return YB(a.href)?'<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="20px" height="20px">    <path d="M 12 4 C 12 4 5.7455469 3.9999687 4.1855469 4.4179688 C 3.3245469 4.6479688 2.6479687 5.3255469 2.4179688 6.1855469 C 1.9999687 7.7455469 2 12 2 12 C 2 12 1.9999687 16.254453 2.4179688 17.814453 C 2.6479687 18.675453 3.3255469 19.352031 4.1855469 19.582031 C 5.7455469 20.000031 12 20 12 20 C 12 20 18.254453 20.000031 19.814453 19.582031 C 20.674453 19.352031 21.352031 18.674453 21.582031 17.814453 C 22.000031 16.254453 22 12 22 12 C 22 12 22.000031 7.7455469 21.582031 6.1855469 C 21.352031 5.3255469 20.674453 4.6479688 19.814453 4.4179688 C 18.254453 3.9999687 12 4 12 4 z M 12 6 C 14.882 6 18.490875 6.1336094 19.296875 6.3496094 C 19.465875 6.3946094 19.604391 6.533125 19.650391 6.703125 C 19.891391 7.601125 20 10.342 20 12 C 20 13.658 19.891391 16.397875 19.650391 17.296875 C 19.605391 17.465875 19.466875 17.604391 19.296875 17.650391 C 18.491875 17.866391 14.882 18 12 18 C 9.119 18 5.510125 17.866391 4.703125 17.650391 C 4.534125 17.605391 4.3956094 17.466875 4.3496094 17.296875 C 4.1086094 16.398875 4 13.658 4 12 C 4 10.342 4.1086094 7.6011719 4.3496094 6.7011719 C 4.3946094 6.5331719 4.533125 6.3946094 4.703125 6.3496094 C 5.508125 6.1336094 9.118 6 12 6 z M 10 8.5351562 L 10 15.464844 L 16 12 L 10 8.5351562 z" fill="#919191"/></svg>':`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.22602 9.27842L5.17192 11.3326C5.17192 11.3326 5.17192 11.3326 5.17187 11.3326C5.17187 11.3326 5.17187 11.3327 5.17183 11.3327C4.32239 12.1821 2.94018 12.1822 2.09065 11.3327C1.67911 10.9211 1.45252 10.374 1.45252 9.79203C1.45252 9.21015 1.67911 8.66309 2.09051 8.25154C2.09056 8.25149 2.09061 8.25144 2.09065 8.25139L4.14475 6.19725C4.42833 5.91362 4.42833 5.45375 4.1447 5.17017C3.86112 4.88659 3.40126 4.88659 3.11763 5.17017L1.06353 7.22432C1.06339 7.22447 1.06324 7.22466 1.0631 7.2248C0.377557 7.91058 0 8.82233 0 9.79203C0 10.762 0.377702 11.6739 1.06358 12.3597C1.77154 13.0676 2.70139 13.4216 3.63129 13.4216C4.56119 13.4216 5.49109 13.0676 6.19895 12.3597C6.199 12.3597 6.199 12.3596 6.199 12.3596L8.25309 10.3055C8.53667 10.0219 8.53667 9.56205 8.25305 9.27842C7.96951 8.99484 7.5097 8.99484 7.22602 9.27842Z" fill="#919191"/>
    <path d="M13.4249 3.62955C13.4249 2.65961 13.0472 1.74772 12.3613 1.06184C10.9455 -0.353972 8.64171 -0.353923 7.22595 1.06184C7.2259 1.06194 7.2258 1.06199 7.22576 1.06209L5.17171 3.11609C4.88808 3.39967 4.88808 3.85958 5.17171 4.14316C5.31357 4.28502 5.49939 4.35591 5.68527 4.35591C5.87109 4.35591 6.05701 4.28497 6.19878 4.14316L8.25283 2.08916C8.25288 2.08906 8.25297 2.08901 8.25307 2.08892C9.1025 1.23949 10.4847 1.23944 11.3342 2.08892C11.7457 2.50046 11.9724 3.04762 11.9724 3.62955C11.9724 4.21143 11.7458 4.75849 11.3344 5.17004L11.3342 5.17018L9.28014 7.22433C8.99656 7.50791 8.99656 7.96778 9.28019 8.2514C9.42201 8.39322 9.60788 8.46415 9.7937 8.46415C9.97958 8.46415 10.1655 8.39322 10.3073 8.2514L12.3614 6.19726C12.3615 6.19711 12.3617 6.19692 12.3618 6.19677C13.0473 5.51099 13.4249 4.59925 13.4249 3.62955Z" fill="#919191"/>
    <path d="M4.14491 9.27836C4.28672 9.42018 4.4726 9.49111 4.65842 9.49111C4.8443 9.49111 5.03017 9.42018 5.17198 9.27836L9.28028 5.17007C9.56391 4.88649 9.56391 4.42663 9.28028 4.143C8.9967 3.85942 8.53683 3.85942 8.2532 4.143L4.14491 8.25124C3.86128 8.53492 3.86128 8.99479 4.14491 9.27836Z" fill="#919191"/>
</svg>`}function jB(a){return a===void 0&&(a=""),a.replace(/send-text/gi,"data-alan-btn-send-text").replace(/call-project-api/gi,"data-alan-btn-call-project-api").replace(/project-api-param/gi,"data-alan-btn-project-api-param")}function $o(a,w,i){var l=a.closest("[data-alan-btn-send-text]");if(l){var F=l.getAttribute("data-alan-btn-send-text");if(F){i(F);return}}var b=a.closest("[data-alan-btn-call-project-api]");if(b){var p=b.getAttribute("data-alan-btn-call-project-api"),J=null;try{J=b.getAttribute("data-alan-btn-project-api-param"),J=JSON.parse(J)}catch{console.log("Alan: unable to parse params for calling project api method")}if(p){w.callProjectApi(p,J);return}}}function Uw(a){var w=document.createElement("textarea");w.value=a,document.body.appendChild(w),w.select(),document.execCommand("copy"),document.body.removeChild(w)}function xE(a){a===void 0&&(a={});var w=document.createElement("div");return a.id&&(w.id=a.id),a.class&&w.classList.add(a.class),w}function dA(a,w){w===void 0&&(w={});var i=document.createElement("div");return w.id&&(i.id=w.id),w.class&&i.classList.add(w.class),i.innerHTML=a,i}function Mw(){for(var a=document.getElementsByTagName("*"),w=4,i=0;i<a.length;i++){var l=Number.parseInt(document.defaultView.getComputedStyle(a[i],null).getPropertyValue("z-index"),10);l>w&&(w=l)}return w}var sB={toogleChatSideBar:'<svg fill="#000000" width="24px" height="24px" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;}</style></defs><path d="M28,4H4A2,2,0,0,0,2,6V26a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V6A2,2,0,0,0,28,4ZM4,6h6V26H4ZM28,26H12V6H28Z"/><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/></svg>',closeChat:`<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.342029 15.0105C-0.113105 15.4658 -0.113035 16.2036 0.34217 16.6587C0.797374 17.1138 1.53533 17.1138 1.99046 16.6586L8.50015 10.1482L15.0104 16.658C15.4655 17.1131 16.2035 17.1131 16.6586 16.658C17.1138 16.2029 17.1138 15.4649 16.6586 15.0098L10.1483 8.49998L16.6582 1.98944C17.1132 1.53427 17.1132 0.796371 16.6579 0.341282C16.2028 -0.113819 15.4648 -0.113749 15.0097 0.341421L8.49991 6.85183L1.98966 0.341981C1.5345 -0.113143 0.796535 -0.113143 0.341377 0.341981C-0.113792 0.797116 -0.113792 1.53502 0.341377 1.99016L6.85187 8.5001L0.342029 15.0105Z" fill="#080808"/>
</svg>`,plus:`<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 12H20M12 4V20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,clear:`<svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.33333 3.16667V2.63889C6.33333 1.93906 6.612 1.26772 7.10706 0.772667C7.60106 0.277611 8.27239 0 8.97222 0H10.0278C10.7276 0 11.399 0.277611 11.894 0.772667C12.3891 1.26772 12.6667 1.93906 12.6667 2.63889V3.16667H17.9444C18.5271 3.16667 19 3.63956 19 4.22222C19 4.80489 18.5271 5.27778 17.9444 5.27778H16.8889V16.8889C16.8889 19.2206 14.9994 21.1111 12.6667 21.1111C10.7329 21.1111 8.26817 21.1111 6.33333 21.1111C4.00161 21.1111 2.11111 19.2206 2.11111 16.8889V5.27778H1.05556C0.472889 5.27778 0 4.80489 0 4.22222C0 3.63956 0.472889 3.16667 1.05556 3.16667H6.33333ZM14.7778 5.27778H4.22222V16.8889C4.22222 18.0553 5.168 19 6.33333 19H12.6667C13.8331 19 14.7778 18.0553 14.7778 16.8889V5.27778ZM10.5556 8.44445V15.8333C10.5556 16.416 11.0284 16.8889 11.6111 16.8889C12.1938 16.8889 12.6667 16.416 12.6667 15.8333V8.44445C12.6667 7.86178 12.1938 7.38889 11.6111 7.38889C11.0284 7.38889 10.5556 7.86178 10.5556 8.44445ZM6.33333 8.44445V15.8333C6.33333 16.416 6.80622 16.8889 7.38889 16.8889C7.97156 16.8889 8.44444 16.416 8.44444 15.8333V8.44445C8.44444 7.86178 7.97156 7.38889 7.38889 7.38889C6.80622 7.38889 6.33333 7.86178 6.33333 8.44445ZM10.5556 3.16667V2.63889C10.5556 2.4985 10.5007 2.36444 10.4014 2.26522C10.3022 2.16706 10.1682 2.11111 10.0278 2.11111C9.68261 2.11111 9.31739 2.11111 8.97222 2.11111C8.83289 2.11111 8.69884 2.16706 8.59962 2.26522C8.50039 2.36444 8.44444 2.4985 8.44444 2.63889V3.16667H10.5556Z" fill="black"/>
</svg>
`,resizer:{left:`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7266 0.273364C14.0911 0.63786 14.0911 1.22881 13.7266 1.59331L1.59331 13.7266C1.22881 14.0911 0.63786 14.0911 0.273364 13.7266C-0.0911215 13.3622 -0.0911215 12.7712 0.273364 12.4067L12.4067 0.273364C12.7712 -0.0911215 13.3622 -0.0911215 13.7266 0.273364ZM13.7266 6.80672C14.0911 7.17119 14.0911 7.76217 13.7266 8.12664L8.12664 13.7266C7.76217 14.0911 7.17119 14.0911 6.80672 13.7266C6.44225 13.3622 6.44225 12.7712 6.80672 12.4067L12.4067 6.80672C12.7712 6.44225 13.3622 6.44225 13.7266 6.80672Z" fill="#CCD4DD"/>
    </svg>
    `,right:`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7266 0.273364C14.0911 0.63786 14.0911 1.22881 13.7266 1.59331L1.59331 13.7266C1.22881 14.0911 0.63786 14.0911 0.273364 13.7266C-0.0911215 13.3622 -0.0911215 12.7712 0.273364 12.4067L12.4067 0.273364C12.7712 -0.0911215 13.3622 -0.0911215 13.7266 0.273364ZM13.7266 6.80672C14.0911 7.17119 14.0911 7.76217 13.7266 8.12664L8.12664 13.7266C7.76217 14.0911 7.17119 14.0911 6.80672 13.7266C6.44225 13.3622 6.44225 12.7712 6.80672 12.4067L12.4067 6.80672C12.7712 6.44225 13.3622 6.44225 13.7266 6.80672Z" fill="#CCD4DD"/>
    </svg>
    `},send:`
<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.0134 15.9238L8.98646 6.40981C7.82892 5.83162 6.75249 5.99963 6.17778 6.77248C5.89042 7.15832 5.61697 7.85122 5.94952 8.96241L8.09542 16.1092C8.39668 17.1138 8.39668 18.8797 8.09542 19.8843L5.94952 27.0311C5.61697 28.1423 5.88926 28.8363 6.17662 29.2222C6.51959 29.681 7.04564 29.9348 7.65743 29.9348C8.07109 29.9348 8.51834 29.8166 8.9853 29.5837L28.0134 20.0697C28.9635 19.5946 29.5093 18.838 29.5093 17.9968C29.5093 17.1555 28.9647 16.3989 28.0134 15.9238ZM8.27386 27.3486L10.3155 20.5494C10.4383 20.1403 10.5217 19.6606 10.575 19.1554H16.6868C17.3276 19.1554 17.8455 18.6375 17.8455 17.9968C17.8455 17.356 17.3276 16.8381 16.6868 16.8381H10.575C10.5217 16.3329 10.4395 15.8532 10.3155 15.4441L8.27386 8.64493L26.9775 17.9968L8.27386 27.3486Z" fill="#B8B6B6"/>
</svg>`,mic:`
<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.2623 24.0476C16.7915 24.0458 15.3814 23.4608 14.3414 22.4208C13.3014 21.3808 12.7164 19.9707 12.7147 18.5V10.7333C12.7147 9.26204 13.2992 7.85099 14.3395 6.81061C15.3799 5.77024 16.791 5.18576 18.2623 5.18576C19.7336 5.18576 21.1446 5.77024 22.185 6.81061C23.2254 7.85099 23.8099 9.26204 23.8099 10.7333V18.5C23.8081 19.9707 23.2231 21.3808 22.1831 22.4208C21.1431 23.4608 19.733 24.0458 18.2623 24.0476ZM18.2623 7.4048C17.3798 7.40576 16.5337 7.75676 15.9097 8.38078C15.2857 9.00479 14.9347 9.85086 14.9337 10.7333V18.5C14.9337 19.3828 15.2844 20.2294 15.9086 20.8536C16.5329 21.4778 17.3795 21.8285 18.2623 21.8285C19.1451 21.8285 19.9917 21.4778 20.6159 20.8536C21.2401 20.2294 21.5908 19.3828 21.5908 18.5V10.7333C21.5899 9.85086 21.2389 9.00479 20.6148 8.38078C19.9908 7.75676 19.1448 7.40576 18.2623 7.4048ZM28.2479 18.5C28.2479 18.2057 28.131 17.9235 27.923 17.7154C27.7149 17.5073 27.4327 17.3905 27.1384 17.3905C26.8441 17.3905 26.5619 17.5073 26.3539 17.7154C26.1458 17.9235 26.0289 18.2057 26.0289 18.5C26.0289 20.5598 25.2106 22.5353 23.7541 23.9918C22.2976 25.4483 20.3221 26.2666 18.2623 26.2666C16.2024 26.2666 14.227 25.4483 12.7704 23.9918C11.3139 22.5353 10.4956 20.5598 10.4956 18.5C10.4956 18.2057 10.3788 17.9235 10.1707 17.7154C9.9626 17.5073 9.68039 17.3905 9.38613 17.3905C9.09187 17.3905 8.80966 17.5073 8.60158 17.7154C8.39351 17.9235 8.27661 18.2057 8.27661 18.5C8.27661 21.1483 9.32867 23.6882 11.2013 25.5609C13.074 27.4336 15.6139 28.4856 18.2623 28.4856C20.9106 28.4856 23.4505 27.4336 25.3232 25.5609C27.1959 23.6882 28.2479 21.1483 28.2479 18.5ZM19.3718 30.7047V27.3761C19.3718 27.0818 19.2549 26.7996 19.0468 26.5916C18.8387 26.3835 18.5565 26.2666 18.2623 26.2666C17.968 26.2666 17.6858 26.3835 17.4777 26.5916C17.2696 26.7996 17.1528 27.0818 17.1528 27.3761V30.7047C17.1528 30.9989 17.2696 31.2811 17.4777 31.4892C17.6858 31.6973 17.968 31.8142 18.2623 31.8142C18.5565 31.8142 18.8387 31.6973 19.0468 31.4892C19.2549 31.2811 19.3718 30.9989 19.3718 30.7047Z" fill="#171717"/>
</svg>
<div class="alan-text-chat__animated-btn-bars">
    <div class="alan-text-chat__bar alan-text-chat__bar-1"></div>
    <div class="alan-text-chat__bar alan-text-chat__bar-2"></div>
    <div class="alan-text-chat__bar alan-text-chat__bar-3"></div>
    <div class="alan-text-chat__bar alan-text-chat__bar-3"></div>
    <div class="alan-text-chat__bar alan-text-chat__bar-2"></div>
    <div class="alan-text-chat__bar alan-text-chat__bar-1"></div>
</div>`,noMic:`<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.9675 16.3602V18.6166C12.9692 20.0539 13.541 21.432 14.5574 22.4483C15.5738 23.4647 16.9518 24.0365 18.3892 24.0382C19.2643 24.0371 20.1175 23.8248 20.8804 23.4294L19.0569 21.8003C18.8389 21.846 18.6153 21.8695 18.3892 21.8695C17.5264 21.8695 16.699 21.5268 16.089 20.9168C15.4789 20.3067 15.1362 19.4793 15.1362 18.6166V18.2976L12.9675 16.3602ZM21.6421 16.7466V11.0263C21.6412 10.1638 21.2982 9.33696 20.6883 8.72712C20.0785 8.11727 19.2516 7.77424 18.3892 7.7733C17.5267 7.77424 16.6999 8.11727 16.09 8.72712C15.5048 9.31233 15.1653 10.0974 15.138 10.9219L13.2678 9.24713C13.5339 8.48102 13.9711 7.77698 14.5555 7.1926C15.5723 6.17585 16.9513 5.60464 18.3892 5.60464C19.8271 5.60464 21.2061 6.17585 22.2228 7.1926C23.2396 8.20935 23.8108 9.58837 23.8108 11.0263V18.6166C23.8108 18.6404 23.8106 18.6643 23.8102 18.6882L21.6421 16.7466ZM22.5782 24.9462C21.345 25.7623 19.89 26.2068 18.3892 26.2068C16.3761 26.2068 14.4455 25.4071 13.022 23.9837C11.5986 22.5602 10.7989 20.6296 10.7989 18.6166C10.7989 18.329 10.6847 18.0532 10.4813 17.8498C10.2779 17.6465 10.0021 17.5322 9.71457 17.5322C9.42699 17.5322 9.15118 17.6465 8.94783 17.8498C8.74448 18.0532 8.63024 18.329 8.63024 18.6166C8.63024 21.2048 9.65841 23.687 11.4886 25.5172C13.0613 27.0899 15.1156 28.0704 17.3048 28.3151V30.5441C17.3048 30.8317 17.4191 31.1075 17.6224 31.3109C17.8258 31.5142 18.1016 31.6285 18.3892 31.6285C18.6768 31.6285 18.9526 31.5142 19.1559 31.3109C19.3593 31.1075 19.4735 30.8317 19.4735 30.5441V28.3151C21.2027 28.1218 22.8477 27.4695 24.2378 26.4288L22.5782 24.9462ZM27.5342 22.0231L25.7589 20.4332C25.9042 19.8436 25.9794 19.2339 25.9794 18.6166C25.9794 18.329 26.0937 18.0532 26.297 17.8498C26.5004 17.6465 26.7762 17.5322 27.0638 17.5322C27.3514 17.5322 27.6272 17.6465 27.8305 17.8498C28.0339 18.0532 28.1481 18.329 28.1481 18.6166C28.1481 19.7909 27.9364 20.9434 27.5342 22.0231Z" fill="#B8B6B6"/>
<path d="M8.18825 6.56812L31.2883 27.1759C31.8123 27.6433 31.8581 28.4471 31.3906 28.9711C30.9232 29.4951 30.1194 29.5409 29.5954 29.0735L6.49538 8.46573C5.97137 7.99826 5.92553 7.1945 6.39301 6.67049C6.86048 6.14648 7.66424 6.10065 8.18825 6.56812Z" fill="#B8B6B6"/>
</svg>
`,disconnected:`
        <svg class="alan-btn_disconnected-chat-icon-rotate" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M24.0579 3.47502C18.5874 0.922942 12.1534 1.67973 7.4383 5.76748C2.7232 9.85523 1.24337 15.2725 2.34798 20.767C3.45259 26.2615 7.87342 31.0097 13.2994 32.4594C19.715 34.174 26.6107 31.7302 30.2577 26.2615C26.9893 30.6213 20.7089 33.242 15.1228 32.2771C9.62181 31.3275 4.71002 26.606 3.45259 21.1573C2.11284 15.3541 3.59462 10.949 8.37598 6.57398C13.1573 2.19898 22.9638 1.8344 28.2519 8.2146C29.2614 9.43264 30.6224 11.6781 30.9871 14.4125C31.1694 15.5063 31.1694 15.6886 31.3518 16.6C31.3518 16.9646 31.7165 17.3292 32.0812 17.3292C32.6282 17.3292 33.0612 16.918 32.9929 16.2354C32.4459 10.7667 29.0622 5.80967 24.0579 3.47502Z" fill="#B8B6B6"/>
        </svg>`,noWiFi:`<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.90233 10.4566C7.52988 9.72656 6.63602 9.42857 5.90602 9.78613C4.95254 10.2629 4.02887 11.0525 3.32866 11.708C2.71784 12.2593 2.68803 13.2127 3.23926 13.8086C3.53722 14.1215 3.93946 14.2854 4.34171 14.2854C4.69926 14.2854 5.05681 14.1513 5.35477 13.898C5.65273 13.6298 6.54661 12.7956 7.24682 12.4529C7.97682 12.0805 8.27478 11.1866 7.91723 10.4566H7.90233Z" />
        <path d="M32.1414 11.4398C28.1636 7.92391 23.0983 5.9872 17.884 5.9872C15.4258 5.9872 13.0273 6.40437 10.733 7.22376C10.6883 7.23866 10.6436 7.28335 10.5989 7.31315L8.40888 4.97415C7.84276 4.37823 6.9042 4.33355 6.30828 4.89967C5.71236 5.4658 5.68256 6.40434 6.23379 7.00026L27.091 29.3472C27.3889 29.6601 27.7763 29.824 28.1785 29.824C28.5361 29.824 28.9085 29.6899 29.1916 29.4217C29.7875 28.8556 29.8173 27.917 29.2661 27.3211L18.2714 15.5368C21.5638 15.6411 24.6328 17.0266 26.9718 19.4848C27.2698 19.7976 27.6571 19.9466 28.0444 19.9466C28.4169 19.9466 28.7893 19.8127 29.0724 19.5296C29.6683 18.9635 29.6981 18.0248 29.132 17.4288C26.1375 14.2705 22.1299 12.5424 17.884 12.5424C17.1391 12.5424 16.3942 12.6019 15.6642 12.7062C15.6642 12.7062 15.6493 12.7062 15.6344 12.7062L12.8187 9.68189C14.4575 9.20515 16.1558 8.9519 17.884 8.9519C22.3683 8.9519 26.7334 10.6205 30.1749 13.6597C30.4579 13.913 30.8155 14.0322 31.1581 14.0322C31.5753 14.0322 31.9775 13.8682 32.2755 13.5256C32.8267 12.9148 32.7671 11.9613 32.1414 11.425V11.4398Z" />
        <path d="M12.2079 15.1643C11.7908 14.4492 10.882 14.2109 10.1669 14.628C8.94526 15.3282 7.8279 16.2072 6.82973 17.2203C6.24871 17.8013 6.26361 18.7548 6.82973 19.3209C7.12769 19.6039 7.50014 19.7529 7.87259 19.7529C8.24504 19.7529 8.64731 19.6039 8.93037 19.306C9.74976 18.4717 10.6585 17.7715 11.6418 17.1905C12.3569 16.7733 12.5953 15.8645 12.1781 15.1494L12.2079 15.1643Z" />
        <path d="M16.7666 20.3637C16.5282 19.5741 15.694 19.1421 14.9044 19.3805C13.355 19.8572 11.8354 21.2874 11.0756 22.0919C10.5094 22.6878 10.5243 23.6263 11.1352 24.1924C11.4182 24.4605 11.7907 24.6097 12.1631 24.6097C12.5505 24.6097 12.9527 24.4607 13.2358 24.1478C14.1595 23.1795 15.1576 22.4346 15.7833 22.2409C16.5729 22.0025 17.005 21.1682 16.7666 20.3786V20.3637Z" />
        <path d="M17.7499 29.7644C18.7785 29.7644 19.6122 28.9307 19.6122 27.9021C19.6122 26.8737 18.7785 26.0399 17.7499 26.0399C16.7214 26.0399 15.8877 26.8737 15.8877 27.9021C15.8877 28.9307 16.7214 29.7644 17.7499 29.7644Z"/>
        </svg>
        `,mute:`
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_185_822)">
            <path d="M2.96822 1.83729C2.5972 1.46626 2.04066 1.46626 1.66963 1.83729C1.2986 2.20832 1.2986 2.76486 1.66963 3.13589L16.5107 17.977C16.8818 18.348 17.4383 18.348 17.8093 17.977C18.1804 17.606 18.1804 17.0494 17.8093 16.6784L2.96822 1.83729Z" fill="#171717"/>
            <path d="M14.2846 11.9477L15.5832 13.2463C17.0673 11.2984 16.9746 8.60848 15.4905 6.66059C15.2122 6.28956 14.5629 6.1968 14.1919 6.56783C13.8208 6.93886 13.7281 7.4954 14.0991 7.86643C15.1194 8.88675 15.1194 10.5564 14.2846 11.9477Z" fill="#171717"/>
            <path d="M18.1804 9.90719C18.1804 11.3913 17.5311 12.8754 16.5107 13.9885L17.8093 15.2871C19.2007 13.803 19.9427 11.9478 20.0355 9.90719C20.0355 7.49551 18.8297 5.17659 16.8818 3.59972C16.5107 3.22869 15.7687 3.32145 15.5832 3.69248C15.3976 4.06351 15.3049 4.7128 15.6759 4.99107C17.2528 6.19691 18.1804 7.9593 18.1804 9.90719Z" fill="#171717"/>
            <path d="M11.1308 15.6581L6.40023 12.4116C6.21471 12.3189 6.0292 12.2261 5.84368 12.2261H1.85514V7.77378H4.82336L2.96822 5.91864H0.927569C0.371028 5.91864 0 6.28967 0 6.84621V13.2464C0 13.803 0.371028 14.174 0.927569 14.174H5.56541L11.5019 18.2553C11.6874 18.3481 11.8729 18.4408 12.0584 18.4408C12.6149 18.4408 12.986 18.0698 12.986 17.5133V15.9364L11.1308 14.0812V15.6581Z" fill="#171717"/>
            <path d="M11.1309 4.24897V8.7013L12.986 10.5564V2.48659C12.986 1.93005 12.615 1.55902 12.0584 1.55902C11.8729 1.55902 11.6874 1.65178 11.5019 1.74453L7.14233 4.71276L8.44093 6.01135L11.1309 4.24897Z" fill="#171717"/>
            </g>
            <defs>
            <clipPath id="clip0_185_822">
            <rect width="20" height="20" fill="white"/>
            </clipPath>
            </defs>
            </svg>
            `,unmute:`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5556 6.64349C15.2778 6.27312 14.6296 6.18053 14.2593 6.5509C13.8889 6.92127 13.7963 7.47682 14.1667 7.84719C15.0926 9.14348 15.0926 10.9027 14.1667 12.199C13.8889 12.5694 13.8889 13.2175 14.2593 13.4953C14.4445 13.5879 14.6296 13.6805 14.8148 13.6805C15.0926 13.6805 15.3704 13.5879 15.5556 13.3101C17.037 11.3657 17.037 8.58793 15.5556 6.64349Z" fill="#171717"/>
            <path d="M16.7593 3.68063C16.3889 3.31026 15.7408 3.40285 15.463 3.77322C15.1852 4.14359 15.1852 4.79174 15.5556 5.06952C17.1297 6.27322 18.0556 8.03247 18.0556 9.97691C18.0556 11.9213 17.1297 13.6806 15.6482 14.7917C15.2778 15.1621 15.1852 15.7176 15.5556 16.088C15.7408 16.2732 16.0186 16.4584 16.2963 16.4584C16.4815 16.4584 16.7593 16.3658 16.8519 16.2732C18.7963 14.7917 19.9074 12.4769 20 9.97691C19.9074 7.56951 18.7037 5.2547 16.7593 3.68063Z" fill="#171717"/>
            <path d="M12.5 1.73615C12.2222 1.55096 11.8518 1.55096 11.574 1.73615L5.55554 5.9028H0.925923C0.370369 5.9028 0 6.27317 0 6.82872V13.2176C0 13.7731 0.370369 14.1435 0.925923 14.1435H5.55554L11.4814 18.2176C11.6666 18.3102 11.8518 18.4028 12.037 18.4028C12.5926 18.4028 12.9629 18.0324 12.9629 17.4768V2.56948C12.9629 2.19911 12.7777 1.92133 12.5 1.73615ZM11.1111 15.625L6.38887 12.3843C6.20368 12.2917 6.0185 12.1991 5.83331 12.1991H1.85185V7.75465H5.83331C6.0185 7.75465 6.20368 7.66205 6.38887 7.56946L11.1111 4.32873V15.625Z" fill="#171717"/>
            </svg>
            `,like:`<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0501 7.04419C15.4673 5.79254 14.5357 4.5 13.2163 4.5C12.5921 4.5 12.0062 4.80147 11.6434 5.30944L8.47155 9.75H5.85748L5.10748 10.5V18L5.85748 18.75H16.8211L19.1247 14.1428C19.8088 12.7747 19.5406 11.1224 18.4591 10.0408C17.7926 9.37439 16.8888 9 15.9463 9H14.3981L15.0501 7.04419ZM9.60751 10.7404L12.864 6.1813C12.9453 6.06753 13.0765 6 13.2163 6C13.5118 6 13.7205 6.28951 13.627 6.56984L12.317 10.5H15.9463C16.491 10.5 17.0133 10.7164 17.3984 11.1015C18.0235 11.7265 18.1784 12.6814 17.7831 13.472L15.8941 17.25H9.60751V10.7404ZM8.10751 17.25H6.60748V11.25H8.10751V17.25Z" fill="#080341"/>
            </svg>`,dislike:`<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0501 16.9558C15.4673 18.2075 14.5357 19.5 13.2164 19.5C12.5921 19.5 12.0063 19.1985 11.6435 18.6906L8.47164 14.25L5.85761 14.25L5.10761 13.5L5.10761 6L5.85761 5.25L16.8211 5.25L19.1247 9.85722C19.8088 11.2253 19.5407 12.8776 18.4591 13.9592C17.7927 14.6256 16.8888 15 15.9463 15L14.3982 15L15.0501 16.9558ZM9.60761 13.2596L12.8641 17.8187C12.9453 17.9325 13.0765 18 13.2164 18C13.5119 18 13.7205 17.7105 13.6271 17.4302L12.317 13.5L15.9463 13.5C16.491 13.5 17.0133 13.2836 17.3984 12.8985C18.0235 12.2735 18.1784 11.3186 17.7831 10.528L15.8941 6.75L9.60761 6.75L9.60761 13.2596ZM8.10761 6.75L6.60761 6.75L6.60761 12.75L8.10761 12.75L8.10761 6.75Z" fill="#080341"/>
            </svg>`,copy:`<svg  class="alan-btn__copy-icon" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 16.5L19.5 4.5L18.75 3.75H9L8.25 4.5L8.25 7.5L5.25 7.5L4.5 8.25V20.25L5.25 21H15L15.75 20.25V17.25H18.75L19.5 16.5ZM15.75 15.75L15.75 8.25L15 7.5L9.75 7.5V5.25L18 5.25V15.75H15.75ZM6 9L14.25 9L14.25 19.5L6 19.5L6 9Z" fill="#080341"/>
    </svg>`,copied:'<svg class="alan-btn__copied-icon" width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="okIconTitle" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#000000"> <title id="okIconTitle">Copied!</title> <polyline points="4 13 9 18 20 7"/> </svg>'};function dw(a){a.classList.add("alan-btn_text-chat-full-screen"),a.classList.remove("with-hover")}function Ac(a){var w="alan-btn__side-bar-expanded";a.classList.contains(w)?a.classList.remove(w):a.classList.add(w)}function ud(a,w){var i="alan-btn__side-bar-ready";if(!a.classList.contains(i)){a.classList.add(i);var l=a.querySelector(".alan-btn__side-bar-header"),F=dA(sB.toogleChatSideBar,{class:"alan-btn__side-bar__toogle-side-bar-btn"}),b=dA(sB.closeChat,{class:"alan-btn__side-bar__close-chat-btn"}),p=xE({class:"alan-btn__side-bar__new-chat-btn"});p.innerHTML=sB.plus+"New Chat",l.appendChild(b),l.appendChild(p),l.appendChild(F),b.addEventListener("click",w.closeTextChat),F.addEventListener("click",w.expandCollapseChatSidePanel),p.addEventListener("click",w.onClearChatClick)}}function Bc(){function a(){return Math.floor((1+Math.random())*65536).toString(16).substring(1)}return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()}var BA={lib:{version:""},project:{id:null},btn:{isTopAligned:!1,zIndex:void 0},textChat:{available:!1,expanded:!1,options:null,defaults:{minChatWidth:250,appearAnimationMs:200,chatMargin:25,textarea:{padding:{top:12}}}}},Aa=!1;try{localStorage.getItem("test"),Aa=!0}catch{Aa=!1}var Ba=!1;try{sessionStorage.getItem("test"),Ba=!0}catch{Ba=!1}var Qa=Ba,UB=Aa;function ga(a,w){var i,l=w||100;return function(F){clearTimeout(i),i=setTimeout(function(){a.apply(this,F)},l)}}function Rd(a,w){w===void 0&&(w=100);var i=null,l;return function(){for(var F=[],b=0;b<arguments.length;b++)F[b]=arguments[b];l||(a.apply(this,F),l=!0,i===null&&(i=setTimeout(function(){i=null,l=!1},w)))}}function hd(){return/apple/i.test(navigator.vendor)}function NA(){return!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}function Yd(){return navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)}function Nd(){var a=!1,w=window.location.protocol,i=window.location.hostname;return w==="https:"&&(a=!0),Qc()&&(a=!0),w==="http:"&&(i.indexOf("localhost")>-1||i.indexOf("127.0.0.1")>-1)&&(a=!0),a}function Qc(){var a=window.location.protocol;return a==="file:"}function pd(){var a=!1,w,i;return w=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia||navigator.mediaDevices&&navigator.mediaDevices.getUserMedia,i=window.AudioContext||window.webkitAudioContext||window.mozAudioContext,w&&i&&(a=!0),a}function dg(){var a;return BA.project.id?(a=BA.project.id,a.substr(0,a.indexOf("/"))):"none"}function gc(){if(BA.project.id){var a="alan-btn-uuid-"+BA.project.id,w;return UB&&(w=localStorage.getItem(a)),w||(w=Bc(),UB&&localStorage.setItem(a,w)),w}}function wE(a){return a?"1":"0"}function Ec(){return`
    Debug Info:
    alanBtn: v.`.concat(BA.lib.version,`
    alanSDK: v.`).concat(window.alanSDKVersion,`
    projectId: `).concat(BA.project.id||"unknown",`
    deviceId: `).concat(gc(),`
    navigator: 
    getUserMedia: `).concat(wE(navigator.getUserMedia),`, 
    mediaDevices: `).concat(wE(navigator.mediaDevices),`, 
    mediaDevices.getUserMedia: `).concat(wE(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia),`,
    webkitGUM: `).concat(wE(navigator.webkitGetUserMedia),`,
    mozGUM: `).concat(wE(navigator.mozGetUserMedia),`,
    msGUM: `).concat(wE(navigator.msGetUserMedia),`,
    window:
    AudioContext: `).concat(wE(window.AudioContext),`,
    webkitAC: `).concat(wE(window.webkitAudioContext),`,
    mozAC: `).concat(wE(window.mozAudioContext),`,
    userAgent: `).concat(navigator.userAgent,`
    `)}var fI=!1,Ea=[0,0],TC,OC,qQ,_Q,Ca,na,Cc,nc,ec,Ic,tc,wc,ic,oc;function fw(a,w){return Math.abs(w.getBoundingClientRect().bottom-a.clientY)<10?qQ="bottom":Math.abs(w.getBoundingClientRect().top-a.clientY)<10?qQ="top":qQ="none",Math.abs(w.getBoundingClientRect().left-a.clientX)<10?_Q="left":Math.abs(w.getBoundingClientRect().right-a.clientX)<10?_Q="right":_Q="none",{typeBorderHor:qQ,typeBorderVert:_Q}}function Jd(a,w){return w.getBoundingClientRect().top<a.clientY&&a.clientY<w.getBoundingClientRect().top+60&&w.getBoundingClientRect().left<a.clientX&&a.clientX<w.getBoundingClientRect().right}function ac(a){var w=a.currentTarget;if(!fI&&!BA.textChat.expanded){var i=a.touches?a.touches[0]:a;Jd(i,w)?w.classList.add("with-hover"):w.classList.remove("with-hover"),qQ=fw(i,w).typeBorderHor,_Q=fw(i,w).typeBorderVert,w.classList.remove("none-none"),w.classList.remove("with-cursors"),w.classList.remove("top-left"),w.classList.remove("top-right"),w.classList.remove("bottom-left"),w.classList.remove("bottom-right"),w.classList.remove("none-left"),w.classList.remove("none-right"),w.classList.remove("top-none"),w.classList.remove("bottom-none"),w.classList.add(qQ+"-"+_Q),(qQ!=="none"||_Q!=="none")&&w.classList.add("with-cursors")}}function bd(a){var w=a.currentTarget;if(!BA.textChat.expanded){fI=!0;var i=a.touches?a.touches[0]:a;Ea=[i.clientX,i.clientY];var l=w.getBoundingClientRect();TC=l.height,OC=l.width,qQ=fw(i,w).typeBorderHor,_Q=fw(i,w).typeBorderVert,Ca=parseInt(w.style.left),na=parseInt(w.style.right),Cc=parseInt(w.style.top),nc=parseInt(w.style.bottom),ec=l.top,Ic=l.bottom,tc=w.style.right,wc=w.style.left,ic=w.style.top,oc=w.style.bottom}}function md(){fI=!1}function kd(a){if(fI){var w=a.touches?a.touches[0]:a;w.clientX>=0&&w.clientY>=0&&w.clientX<=window.innerWidth&&w.clientY<=window.innerHeight?yd(w):fI=!1}}function yd(a){var w=a.clientX-Ea[0],i=a.clientY-Ea[1];qQ==="bottom"?lc(qQ,i)&&(ea(TC+i),Zd(i)):qQ==="top"&&lc(qQ,i)&&(ea(TC-i),Xd(i)),_Q==="right"?sc(_Q,w)&&(Ia(OC+w),Ld(w)):_Q==="left"&&sc(_Q,w)&&(Ia(OC-w),Sd(w))}function lc(a,w){var i,l,F=((l=(i=BA.textChat.options)===null||i===void 0?void 0:i.popup)===null||l===void 0?void 0:l.minHeight)||BA.textChat.defaults.minChatWidth,b=a==="bottom"&&w>0||a==="top"&&w<0,p=a==="bottom"?TC+w:TC-w,J=Ic-w,v=ec+w;return a==="bottom"&&J<=0&&p>=TC||a==="top"&&v<=0&&p>=TC?!1:b?p>=F:p>F}function sc(a,w){var i,l,F=((l=(i=BA.textChat.options)===null||i===void 0?void 0:i.popup)===null||l===void 0?void 0:l.minWidth)||BA.textChat.defaults.minChatWidth,b=a==="right"&&w>0||a==="left"&&w<0,p=a==="right"?OC+w:OC-w,J=na-w,v=Ca+w;return a==="right"&&J<=0&&p>=OC||a==="left"&&v<=0&&p>=OC?!1:b?p>=F:p>F}function ea(a){var w=document.getElementById("alan-btn-chat-holder");w.style.height=a+"px",Fc("height",a)}function Ia(a){var w=document.getElementById("alan-btn-chat-holder");w.style.width=a+"px",a<300?w.classList.add("alan-chat-small"):w.classList.remove("alan-chat-small"),Fc("width",a)}function Zd(a){oc&&uw("bottom",nc-a)}function Xd(a){ic&&uw("top",Cc+a)}function Ld(a){tc&&uw("right",na-a)}function Sd(a){wc&&uw("left",Ca+a)}function Gw(a){return"alan-btn-text-chat-pos-".concat(a,"-").concat(dg())}function uw(a,w){if(!(w<0)){var i=document.getElementById("alan-btn-chat-holder");i.style[a]=w+"px",UB&&localStorage.setItem(Gw(a),w)}}function TE(a){return UB?localStorage.getItem(Gw(a)):null}function Fc(a,w){UB&&localStorage.setItem(Gw(a),w)}function Rw(a){return UB?localStorage.getItem(Gw(a)):null}function ta(a,w,i){var l=BA.textChat.defaults.chatMargin,F=i?2*l:l;w!==null&&window.innerHeight-l<w&&ea(window.innerHeight-F),a!==null&&window.innerWidth-l<a&&Ia(window.innerWidth-F)}var iE={roundedTriangleSecondLayerSrc:`data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1pbm5lci1zaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMTAwJSIgeTE9IjMuNzQ5Mzk5NDZlLTMxJSIgeDI9IjIuODYwODIwMDklIiB5Mj0iOTcuMTM5MTc5OSUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjEyIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwMDAwMDAiIHN0b3Atb3BhY2l0eT0iMC4wNCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJBbGFuLUJ1dHRvbi0vLUFuaW1hdGlvbi0vLWJ1dHRvbi1pbm5lci1zaGFwZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTQwLjEwMDU0MjIsOSBMNDAuMTAwNTQyMiw5IEM1MC4wNzA0NzUxLDkgNTkuMTUxNjIzNSwxNC43MzM3OTM4IDYzLjQzODA5OCwyMy43MzUyMjE0IEw3MC40MjIwMjY3LDM4LjQwMTE5NyBDNzUuMTcxMDE0NSw0OC4zNzM4ODQ0IDcwLjkzNjM2OTMsNjAuMzA4MTYwMSA2MC45NjM2ODE5LDY1LjA1NzE0NzggQzU4LjI3NzU5NDksNjYuMzM2MjYwOCA1NS4zMzk5NzQ0LDY3IDUyLjM2NDg3ODksNjcgTDI3LjgzNjIwNTQsNjcgQzE2Ljc5MDUxMDQsNjcgNy44MzYyMDU0Myw1OC4wNDU2OTUgNy44MzYyMDU0Myw0NyBDNy44MzYyMDU0Myw0NC4wMjQ5MDQ1IDguNDk5OTQ0NTksNDEuMDg3Mjg0IDkuNzc5MDU3NiwzOC40MDExOTcgTDE2Ljc2Mjk4NjQsMjMuNzM1MjIxNCBDMjEuMDQ5NDYwOCwxNC43MzM3OTM4IDMwLjEzMDYwOTIsOSA0MC4xMDA1NDIyLDkgWiIgaWQ9ImlubmVyLWJnIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg==
`,circleSecondLayerSrc:`data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1pbm5lci1zaGFwZS1zcGVha2luZyBiYWNrPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSIxMDAlIiB5MT0iMy43NDkzOTk0NmUtMzElIiB4Mj0iMi44NjA4MjAwOSUiIHkyPSI5Ny4xMzkxNzk5JSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMDAwMDAwIiBzdG9wLW9wYWNpdHk9IjAuMTIiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjA0IiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWlubmVyLXNoYXBlLXNwZWFraW5nLWJhY2siIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxjaXJjbGUgaWQ9ImlubmVyLWJnIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiBjeD0iNDAiIGN5PSI0MCIgcj0iMzIiPjwvY2lyY2xlPgogICAgPC9nPgo8L3N2Zz4=
`,popupCloseIconImgBase64:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuNzczNDUgNy4wMDAwM0wxMy44Mzk4IDAuOTMzNjA0QzE0LjA1MzQgMC43MjAwMjIgMTQuMDUzNCAwLjM3Mzc0MSAxMy44Mzk4IDAuMTYwMTg2QzEzLjYyNjMgLTAuMDUzMzY4MSAxMy4yOCAtMC4wNTMzOTU1IDEzLjA2NjQgMC4xNjAxODZMNyA2LjIyNjYxTDAuOTMzNjA0IDAuMTYwMTg2QzAuNzIwMDIyIC0wLjA1MzM5NTUgMC4zNzM3NDEgLTAuMDUzMzk1NSAwLjE2MDE4NiAwLjE2MDE4NkMtMC4wNTMzNjgxIDAuMzczNzY4IC0wLjA1MzM5NTUgMC43MjAwNDkgMC4xNjAxODYgMC45MzM2MDRMNi4yMjY1OSA3TDAuMTYwMTg2IDEzLjA2NjRDLTAuMDUzMzk1NSAxMy4yOCAtMC4wNTMzOTU1IDEzLjYyNjMgMC4xNjAxODYgMTMuODM5OEMwLjI2Njk2NCAxMy45NDY2IDAuNDA2OTM2IDE0IDAuNTQ2OTA5IDE0QzAuNjg2ODgxIDE0IDAuODI2ODI3IDEzLjk0NjYgMC45MzM2MzEgMTMuODM5OEw3IDcuNzczNDVMMTMuMDY2NCAxMy44Mzk4QzEzLjE3MzIgMTMuOTQ2NiAxMy4zMTMyIDE0IDEzLjQ1MzEgMTRDMTMuNTkzMSAxNCAxMy43MzMgMTMuOTQ2NiAxMy44Mzk4IDEzLjgzOThDMTQuMDUzNCAxMy42MjYzIDE0LjA1MzQgMTMuMjggMTMuODM5OCAxMy4wNjY0TDcuNzczNDUgNy4wMDAwM1oiIGZpbGw9IiNCQkNGRTciLz4KPC9zdmc+Cg==",micIconSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH9SURBVHgB7dvvUcIwGMfxByfADdjAEdQN3EA2YATcAJ2AEXADdALcgG4AGzwm13DQkNKWQBvK93OXF4W0Z36mf5IUEQAAAAAAAAAAgPOo6ocpS91bmfIuOM2ENHJhlVnbOoIwF1CVleCYCWas9U0kEQ+SjibXuDdJxEASYbtVg+rbwWDwKAm41QDFBJjE357SKXyTCDASAUYiwEgEGIkAIxFgJAKMRICRWgvQTRZs3IzLxef2rn38zmlxqmoT+L6Rpse/ltbGk36j/bFsKJRTqvZva6zc2TXQtHfofbSV+rYVx2pNmwFm3vbI2/6R+r4rjvUnLWkzQL9Rz972l9T3WXGsTPrGTsN794FloM5Uq00D+/kLUb28Cw8DYbwE6k1LgrOPKJNA/dBaykj6SItrvdZaAzcAzZc3bTBzVyYl9YZ6vJK3kL6yPS7QW+ZyJhvW3fS+HdPAWaDRiyYNdz1vecl/xs0oOe12p3Plxd+d2mX7t/482MnKlutt9i48CnydSf5M+Cv7xxFb78mUsSnDkn1ezeAjk3uh+Y0i1JOaWuu9vi/jTueZns/u29kwLhma98Z5g+CWpjwLirT4/Oezn01S63HJvNrhs4kdbqfyKoePKf1IBBiJACMRYCQCjESAkVIO8HDhKBM0o/tZFzsTzY9sAAAAAAAAAABAjH+9EqX09fBHaQAAAABJRU5ErkJggg==",alanLogoIconSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAAFtElEQVR4Ae3dL4wcZRjH8WeRKJJTTRBbc4JgkK26UCSXVIHkUBgS2uBAcCQIDAGCh8VAgkG0DsFhqAEqoKI1rCCgLiGhgYA53rd932S7bXdmdmfe3/vn+0kmW45pc7179tvZm3dmzQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0ZWaNOzs723cPJ247ZxrnZ7PZ0hr1hOFlt/1oOp9Zw5oeQFe/C+7habf97rY/TOPAfR4H1qjWC3i48mtlBd+xRjU7gKF+eysfooICLRfw8BEf+9Z0mqxgkwP4iPpFd9122zSarGCrBTzc8P9uuO1f02iugs0N4Ib6Rf+57RfTaK6CLRbwsMc+PxsVTKKpAexRv0hdwVesEc0MoPum+sHrU79IWcFja0RLBbxo/eoX+Qr+ZBrzVirYxACG+l2w4XwF/zKNY/d5P2WVa6WAL9iw+q1SnaKbu+0Nq1z1Axjq97xt747pTtFdqb2CLRRwyAuPx1FV0A9f1RWsegB3OPZbp1yoUHUFay/gGPWLqOAEqh3AEesXUcEJ1FzAMesXUcGRVTmAE9Qv8hVULdeqsoK1FnCK+kXKCla3UKG6AZywfpFftKoaQl/BuVWkxgIe2fRYrjWSqgYwXGS+b9NTLtc6qqmCtRVwymO/dcoKVnMxezUDGBabpqhfxNL9EdRUwJT1izgW3FEVAzhgqf3YfAU/N40qKlhLARX1827PZrPX3OPSNIqvYPEDKKyf91V4fNU0iq9gDQVU1e97V7/f/C/c44ndv8egQtEVLHoAxfW7vvbf75pG0RUsvYDK+p2ufoAKbqfYAcysfpGygpetQEUO4BYXmY/pofpF4gp+aAUqtYBDLzIfix+86x37qF4RF3kxe3EDmGC51SaPrV8U7ni/MI3iLmYvsYDK+t3oue9Vt/1p6c2tsKX7RQ1gqN+LpnGtq36R288P30emUdTS/dIKqHrhceqGqm/9oo9NU8GiLmAqZgDFx37XbCAq2E9JBSypfhEV7FDEAJZWv4gKdiulgCXW7x73+/3ZkaWlV0QFsx9Acf0WNg7VKbrsK1hCAVX1u+nqdcdG4P6chWlO0WVfwazfL9g9e59xD9+YxqfW7wXEaRiwjcKSKcVbgfm/w3O5vidx7gPov2EHlp6//8t3A/Zf9DlWFP59/OenOke9Ubb/BIdiHJjG0Ftv9D1MUB0LZnsxe87HgJ+Yhq/f3WG/xfbcN7jzFCHLtR6W5QC6b+aRe3jWNLa98dAl93k/2WM/VQUv57h0P9cCqpaY/2DD6xf54eu8G3+o4MI0slu6n90AhvrNLT3/hjS7/tgl9wpmdwFTjgVUPUu3OfZb17eCS9O9H1xWFcxqAMX1G+t94S6FszddVAsVsqpgbgVUPTvHvOOpr2CfV8TKhQrZVDCbASz82G/dxXCzzC7NVzCnAtZQv1WdP5ymgpkMoHs2vmn11C/ap4Ld5APovgjn3MPrpjH13e77VvCqachv9ZtDAf399eaWnn/TmanqF/WqYFhNs7T05BezSwcwnCBXfQF2Wuk8wFHP/VSrVY5NSF1A1bGf/6Fzr2t8R7AXbqS0kXChgq/gFRORrQcM9fvVNL6w3c96DOGH/T03ZH9v2km8aPV8OB5NSlnAkk+5DeXPjPRdqHBi6cmW7ksK2Fj9Il+/t6ngg1QFbKl+0ZDlWieWnqSCyQsorN8/bvvadAPo9a3g3DRfo+QVVBRQVb9bph0+r+9ChaVpFq0mr2DSAgqf2f6Um7/FhnoAo7e6bvUWvlY37f5QpJS0gqkLqFxwkMvweS917RAqqFiokLSCyQoYLjK/Zen5+n1p+fmg684L4bYa/l8MRQWTXMyesoDvm8bUCw62lfNyLT/wVb0zOwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANfsfb80MpE9p2rYAAAAASUVORK5CYII=",alanUserAvatarIconSrc:"data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iYWxhbi1idG5fX3VzZXItYXZhdGFyIiB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjEyIiBjeT0iNiIgcj0iNCIgc3Ryb2tlPSIjMUMyNzRDIiBzdHJva2Utd2lkdGg9IjEuNSIvPgo8cGF0aCBkPSJNMTUgMjAuNjE1MUMxNC4wOTA3IDIwLjg2MTkgMTMuMDczNiAyMSAxMiAyMUM4LjEzNDAxIDIxIDUgMTkuMjA5MSA1IDE3QzUgMTQuNzkwOSA4LjEzNDAxIDEzIDEyIDEzQzE1Ljg2NiAxMyAxOSAxNC43OTA5IDE5IDE3QzE5IDE3LjM0NTMgMTguOTIzNCAxNy42ODA0IDE4Ljc3OTUgMTgiIHN0cm9rZT0iIzFDMjc0QyIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4="};function Hd(a,w){return a?Math.max(16,w):w}var hw={idle:{background:{color:["rgb(34, 203, 255)","rgb(25, 149, 255)"]},hover:{color:["rgba(0, 70, 255, 0.95)","rgba(0, 156,  255, 0.95)"]}},listen:{background:{color:["rgba(0, 70, 255, 0.95)","rgba(0, 156,  255, 0.95)"]},hover:{color:["rgba(0, 70, 255, 0.95)","rgb(0, 70, 255)"]}},process:{background:{color:["rgba(0, 255, 205, 0.95)","rgba(0, 115, 255, 0.95)"]},hover:{color:["rgb(0, 115, 255)","rgba(0, 115, 255, 0.95)"]}},reply:{background:{color:["rgba(122, 40, 255, 0.95)","rgba(61, 122, 255, 0.95)"]},hover:{color:["rgba(122, 40, 255, 0.95)","rgb(122, 40, 255)"]}},textChat:{background:{color:["#1eb6e5","#1995ff"],angle:45},hover:{color:["#1ba3ce","#1686e5"],angle:45},shadow:{color:["#6693bc","#b3c9de"]}},textChatAvatar:{background:{color:["#1eb6e5","#1995ff"],angle:45},hover:{color:["#1ba3ce","#1686e5"],angle:45},shadow:{color:["#6693bc","#b3c9de"]}},textChatUserAvatar:{background:{color:["#b2d6ff","#b2d6ff"],angle:45},hover:{color:["#1ba3ce","#1686e5"],angle:45},shadow:{color:["#6693bc","#b3c9de"]}}};function M(a){return".alan-"+dg()+(a?"":" ")}function EB(a,w){for(var i=["@-webkit-keyframes","@keyframes"],l="",F=0;F<i.length;F++)l+=i[F]+" "+a+"{"+w+"} ";return l}function cc(a){var w=hw;return a!=null&&a.btnOptions&&(a!=null&&a.btnOptions.btnLayerOptions?w=hw:w=a!=null&&a.btnOptions?Q(Q({},hw),a==null?void 0:a.btnOptions):hw),w}function Wd(a){var w,i,l,F,b,p,J,v,V,_,nA,oA,m,tA,QA,MA,CA,bA,mA,vB,xA,FB,pB,$A,fg,kB,CB,GI,kQ,UQ,yQ,$Q,Ag,ZQ,Gg,kn,XQ,Bg,LQ,oE,yn,zC,uI,RI,aQ,hI,YI,NI,pI,JI,QQ,OE,zE,gQ,EQ,KE,KC,Zn,Qg,aE,lE,jC,sE,ug,PC,qC,_C,$C,An,bI,jE,Xn,FE,Ln,Sn,mI,kI,yI,UA,K,Hn,lA,AB,xg,qA,cE,DE,Wn,gg,Tg,yB,ZB,MB,XB,rE,PE,qE,_E,$E,AC,BC,QC,gC,EC,uA,TA,Rg,Eg,Og,zg,hA,UE,vn,Vn,Bn,ZI,Qn,MQ,SQ,dQ,fQ,GQ,uQ,LB,SB,nB,ME,xn,Tn,On,dE,zn,gn,En,Kn,fE,Kg,Cg,Cn,CC,nn,jn,GE,nC,Pn,XI,qn,jg,LI,_n,hg,CQ,eC,$n,Pg,SI,Ae,Be,Qe,HI,ge,Ee,Ce,WI,ne,vI,VI,xI,en,IC,TI,OI,ee,uE,tC,zI,Ie,KI,te,wC,jI,we,VB,iC,RE,ie,PI,oC,Yg,hE,oe,ae,le,In,se,qg,Fe,tn,ce,De,u="",f=BA.textChat.options,qI=400,YE=700,dB=40,Yw=1.25,Ng=67,aC=50,_g=34,Nw=6,pw=15,ng=BA.textChat.defaults.appearAnimationMs,pg=TE("height"),NE=TE("width");ta(NE,pg,!0),pg=TE("height"),NE=TE("width"),pg?pg="".concat(pg,"px"):pg="".concat(Jw((w=f==null?void 0:f.popup)===null||w===void 0?void 0:w.height)||YE,"px");function Jw(de){return de&&+de<=100?YE:de}NE?NE="".concat(NE,"px"):NE="".concat(((i=f==null?void 0:f.popup)===null||i===void 0?void 0:i.width)||"400","px");var re=((l=f==null?void 0:f.popup)===null||l===void 0?void 0:l.backgroundColor)||"#DAEBFF",lC=((F=f==null?void 0:f.popup)===null||F===void 0?void 0:F.backgroundColor2)||"#ffffff";u+=M()+`.alan-btn__chat-holder {
        position: fixed;
        height:  `.concat(pg,`;
        min-height: `).concat(((b=f==null?void 0:f.popup)===null||b===void 0?void 0:b.minHeight)||qI,`px;
        max-height: `).concat(((p=f==null?void 0:f.popup)===null||p===void 0?void 0:p.maxHeight)||"1200",`px;
        width: `).concat(NE,`;
        min-width: `).concat(((J=f==null?void 0:f.popup)===null||J===void 0?void 0:J.minWidth)||BA.textChat.defaults.minChatWidth,`px;
        max-width: `).concat(((v=f==null?void 0:f.popup)===null||v===void 0?void 0:v.maxWidth)||"1200",`px;
        display: none;
        transform: scale(0);
        opacity: 0;
    }`),u+=M()+`.alan-btn__chat-holder.alan-btn_text-chat-full-screen {
        position: fixed;
        height:  100%!important;
        min-height: 100%!important;
        max-height: 100%!important;
        width: 100%!important;
        min-width: 100%!important;
        max-width: 100%!important;
        top:0!important;
        bottom:0!important;
        left:0!important;
        right:0!important;
    }`;var eg=200,Ue=280;u+=M()+`.alan-btn__chat-side-bar {
        min-height: 100%;
        max-height: 100%;
        height: 100%;
        background-color: `.concat(re,`;
        box-shadow: inset 1px 0px 13px 0px rgba(16, 39, 126, 0.2);
        display:none;
        transition: width `).concat(eg,"ms ease-in-out, max-width ").concat(eg,"ms ease-in-out, min-width ").concat(eg,`ms ease-in-out;
    }`),u+=M()+`.alan-btn_text-chat-full-screen .alan-btn__chat-side-bar {
        display: flex;
        width: 0px;
        min-width: 0px;
        max-width: 0px;
    }`,u+=M()+`.alan-btn_text-chat-full-screen.alan-btn__side-bar-expanded  .alan-btn__chat-side-bar {
        width: `.concat(Ue,`px;
        min-width: `).concat(Ue,`px;
        max-width: `).concat(Ue,`px;
        transition: width `).concat(eg,"ms ease-in-out, max-width ").concat(eg,"ms ease-in-out, min-width ").concat(eg,`ms ease-in-out;
    }`),u+=M()+`.alan-btn_text-chat-full-screen .alan-btn__chat {
        border-radius:0!important;
        flex-direction: row;
    }`,u+=M()+`.alan-btn_text-chat-full-screen .alan-btn__chat-messages {
        max-width: 870px;
        width: 100%;
        margin: 0 auto;
    }`,u+=M()+`.alan-btn_text-chat-full-screen .alan-btn__chat-textarea-holder {
        max-width: 900px;
        min-width: initial;
        margin: 0 auto;
    }`,u+=M()+`.alan-btn__chat-enter-full-screen-mode  {
        display: block;
        min-width: 20px;
    }`,u+=M()+`.alan-btn__chat-exit-full-screen-mode  {
        display: none;
        min-width: 20px;
    }`,u+=M()+`.alan-btn_text-chat-full-screen .alan-btn__chat-enter-full-screen-mode  {
        display: none;
    }`,u+=M()+`.alan-btn_text-chat-full-screen .alan-btn__chat-exit-full-screen-mode  {
        display: block;
    }`,u+=M()+`.alan-text-chat__openning {
        transform: scale(0);
        opacity: 0;
        animation: text-chat-appear-anim `.concat(ng,`ms ease-in-out forwards;
    }`),u+=M()+EB("text-chat-appear-anim",`
    0%{
        transform: scale(0);
        opacity: 0;
    }
    100%{
        transform: scale(1);
        opacity: 1;
    }
    `),u+=M()+`.alan-text-chat__closing {
        transform: scale(1);
        opacity: 1;
        animation: text-chat-disappear-anim `.concat(ng,`ms ease-in-out forwards;
    }`),u+=M()+EB("text-chat-disappear-anim",`
    0%{
        transform: scale(1);
        opacity: 1;
    }
    100%{
        transform: scale(0);
        opacity: 0;
    }
    `),u+=".mobile"+M()+`.alan-btn__chat-holder {
        position: fixed; 
        height: 100%;
        min-height: 100%;
        max-height: 100%;
        width: 100vw;
        min-width: 100vw;
        max-width: 100vw;
        display: none;
        top: 0;
        bottom:0;
        left:0;
        right:0;
        border-radius: 0px;
    }`,u+=M()+`.alan-btn__chat-holder.bottom-none {
        cursor: ns-resize;
      }`,u+=M()+`.alan-btn__chat-holder.top-none {
        cursor: ns-resize;
      }`,u+=M()+`.alan-btn__chat-holder.none-left {
        cursor: ew-resize;
      }`,u+=M()+`.alan-btn__chat-holder.none-right {
        cursor: ew-resize;
      }`,u+=M()+`.alan-btn__chat-holder.top-left {
        cursor: nwse-resize;
      }`,u+=M()+`.alan-btn__chat-holder.bottom-right {
        cursor: nwse-resize;
      }`,u+=M()+`.alan-btn__chat-holder.top-right {
        cursor: nesw-resize;
      }`,u+=M()+`.alan-btn__chat-holder.bottom-left {
        cursor: nesw-resize;
      }`;var Me=20;u+=M()+`.alan-btn__chat {
        height: 100%;
        position: relative;
        overflow: hidden;
        display: flex;
        width: 100%;
        min-width: 100%;
        max-width: 100%;
        flex: 2;
        position: relative;
        flex-direction: column;
        box-shadow: 0px 5px 44px rgba(0, 0, 0, 0.15);
        border-radius: `.concat(((_=(V=f==null?void 0:f.popup)===null||V===void 0?void 0:V.borderRadius)===null||_===void 0?void 0:_.topLeft)||Me,"px ").concat(((oA=(nA=f==null?void 0:f.popup)===null||nA===void 0?void 0:nA.borderRadius)===null||oA===void 0?void 0:oA.topRight)||Me,"px ").concat(((tA=(m=f==null?void 0:f.popup)===null||m===void 0?void 0:m.borderRadius)===null||tA===void 0?void 0:tA.bottomRight)||Me,"px ").concat(((MA=(QA=f==null?void 0:f.popup)===null||QA===void 0?void 0:QA.borderRadius)===null||MA===void 0?void 0:MA.bottomLeft)||Me,`px;
    }`),u+=M()+`.alan-btn__popup-chat {
        height: 100%;
        position: relative;
        overflow: hidden;
        display: flex;
        flex: 2;
        position: relative;
        flex-direction: column;
        background: linear-gradient(180deg, `.concat(lC," 0%, ").concat(lC," 15%, ").concat(re," 70%, ").concat(re,` 100%);
        animation: chat-appear 300ms ease-in-out forwards;
        transform: scale(1);
        opacity: 1; 
    }`),u+=M()+EB("alan-btn__sound-bar-1",`
    0% {
        opacity: 0; 
        transform: scale(0);
    }
    100% {
        opacity: 1;  
        transform: scale(1);   
    }`),u+=".mobile"+M()+`.alan-btn__chat {
        border-radius: 0px;
    }`,u+=M()+`.alan-btn__chat-textarea-holder {
        width: 100%;
        height: `.concat(Ng,`px;
        max-height: `).concat(Ng,`px;
        min-height: `).concat(Ng,`px;
        position: relative;
    }`),u+=M()+`.alan-btn__chat-messages-empty-block {
        flex: 1 1 auto;
    }`,u+=M()+`.alan-btn__chat-messages-wrapper {
        width: 100%;
        height: calc(100% - `.concat(dB+Ng,`px);
        max-height: calc(100% - `).concat(dB+Ng,`px);
        min-height: calc(100% - `).concat(dB+Ng,`px);
        overflow-y: scroll;
        overflow-x: hidden;
        padding: 20px 10px;
        display: flex;
        flex-shrink: 0;
        flex-direction: column-reverse;
    }`),u+=M()+`.alan-btn__chat-messages {
        display: flex;
        flex-shrink: 0;
        flex-direction: column;
    }`;var _I=((CA=f==null?void 0:f.header)===null||CA===void 0?void 0:CA.backgroundColor)||"#FFFFFF";u+=M()+`.alan-btn__chat-header {
        width: 100%;
        height: `.concat(dB,`px;
        max-height: `).concat(dB,`px;
        min-height: `).concat(dB,`px;
        color: #0f2029;
        padding: 0px 15px;
        padding-top: 12px;
        background: `).concat(_I,`;
        color: `).concat(((bA=f==null?void 0:f.header)===null||bA===void 0?void 0:bA.color)||"#000000",`;
        text-align: center;
        text-overflow: ellipsis;
        white-space: nowrap;
        position:relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }`);var $I=((mA=f==null?void 0:f.header)===null||mA===void 0?void 0:mA.fontSize)||16;u+=M()+`.alan-btn__chat-header-title {
        max-width: calc(100% - 112px);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: inline-block;
        font-weight: 600;
        font-size: `.concat($I,`px;
        position: relative;
        top: `).concat($I>=20?"-2":"0",`px;
    }`),u+=M()+`.alan-btn__chat-header-gradient {
        width: 100%;
        height: 15px;
        max-height: 15px;
        min-height: 15px;
        position: absolute;
        left:0;
        width: 100%;
        top: `.concat(dB,`px;
        background: linear-gradient(180deg, `).concat(_I,` 30%, rgba(255, 255, 255, 0) 100%);
    }`),u+=M()+`.alan-btn__chat-header-left-resizer {
        transition: 300ms opacity ease-in-out;
        position: absolute;
        top: 3px;
        left: 5px;
        transform: rotate(180deg);
        pointer-events: none;
        display: block;
        opacity: 0;
        height: 18px;
        width: 14px;
    }`,u+=M()+`.alan-btn__chat-header-right-resizer {
        transition: 300ms opacity ease-in-out;
        position: absolute;
        top: 3px;
        right: 5px;
        transform: rotate(-90deg);
        pointer-events: none;
        display: block;
        opacity: 0;
        height: 18px;
        width: 14px;
    }`,u+=M()+`.with-hover .alan-btn__chat-header-right-resizer {
        opacity: 0.8;
        transition: 300ms opacity ease-in-out;
    }`,u+=M()+`.with-hover .alan-btn__chat-header-left-resizer {
        opacity: 0.8;
        transition: 300ms opacity ease-in-out;
    }`,u+=M()+`.with-hover .alan-btn__chat-header::after {
        opacity: 0.8;
        transition: 300ms opacity ease-in-out;
    }`,u+=M()+`.with-cursors .alan-btn__chat-messages {
        pointer-events: none;
    }`,u+=M()+`.alan-btn__chat-unmute-btn {
        display: flex;
        align-items: center;
        height: `.concat(dB,`px;
        font-size: 14px;
        cursor: pointer;
        margin-left: 6px;
    }`),NA()&&(u+=M()+`.alan-btn__chat-unmute-btn {
            display: none;
        }`),u+=M()+`.alan-btn__chat-unmute-btn svg path {
        fill: `.concat(((pB=(FB=(xA=(vB=f==null?void 0:f.popup)===null||vB===void 0?void 0:vB.icons)===null||xA===void 0?void 0:xA.mute)===null||FB===void 0?void 0:FB.default)===null||pB===void 0?void 0:pB.fill)||"#969EB0",`;
    }`),NA()||(u+=M()+`.alan-btn__chat-unmute-btn:hover svg path {
            fill: `.concat(((CB=(kB=(fg=($A=f==null?void 0:f.popup)===null||$A===void 0?void 0:$A.icons)===null||fg===void 0?void 0:fg.mute)===null||kB===void 0?void 0:kB.hover)===null||CB===void 0?void 0:CB.fill)||"#0046ff",`;
        }`)),u+=M()+`.alan-btn__chat-unmute-btn.disabled {
        pointer-events: none;
    }`,u+=M()+`.alan-btn__chat-unmute-btn.disabled {
        opacity: 0.4
    }`,u+=M()+`.alan-btn__chat-header-clear-btn {
        width: 17px;
        display: flex;
        align-items: center;
        height: `.concat(dB,`px;
        font-size: 14px;
        cursor: pointer;
        margin-left: 6px;
    }`),u+=M()+`.alan-btn_text-chat-full-screen .alan-btn__chat-header-clear-btn {
        display: none;
    }`,u+=M()+`.alan-btn__chat-header-clear-btn.disabled {
        pointer-events: none;
    }`,u+=M()+`.alan-btn__chat-header-clear-btn.disabled {
        opacity: 0.4
    }`,u+=M()+`.alan-btn__chat-header-clear-btn svg path {
        fill: `.concat(((yQ=(UQ=(kQ=(GI=f==null?void 0:f.popup)===null||GI===void 0?void 0:GI.icons)===null||kQ===void 0?void 0:kQ.clear)===null||UQ===void 0?void 0:UQ.default)===null||yQ===void 0?void 0:yQ.fill)||"#969EB0",`;
    }`),NA()||(u+=M()+`.alan-btn__chat-header-clear-btn:hover svg path {
            fill: `.concat(((Gg=(ZQ=(Ag=($Q=f==null?void 0:f.popup)===null||$Q===void 0?void 0:$Q.icons)===null||Ag===void 0?void 0:Ag.clear)===null||ZQ===void 0?void 0:ZQ.hover)===null||Gg===void 0?void 0:Gg.fill)||"#ff005c",`;
        }`)),u+=M()+`.alan-btn__chat-header-left-icons {
        position: relative;
        top: -12px;
        height: `.concat(dB,`px;
        display: flex;
        align-items: center;
    }`),u+=M()+`.alan-btn__chat-header-right-icons {
        position: relative;
        top: -12px;
        height: `.concat(dB,`px;
        display: flex;
        align-items: center;
    }`),u+=M()+`.alan-btn__side-bar-header {
        display: flex;
        flex-direction: row;
        padding: 0 10px;
        width: 100%;
        justify-content: space-between;
        white-space:nowrap;
    }`,u+=M()+`.alan-btn__side-bar__toogle-side-bar-btn {
        margin-right: 6px;
        height: `.concat(dB,`px;
        display: flex;
        align-items: center;
        cursor: pointer;
        pointer-events: all;
    }`),u+=M()+`.alan-btn__side-bar__toogle-side-bar-btn svg path {
        fill: `.concat(((LQ=(Bg=(XQ=(kn=f==null?void 0:f.popup)===null||kn===void 0?void 0:kn.icons)===null||XQ===void 0?void 0:XQ.sideBar)===null||Bg===void 0?void 0:Bg.default)===null||LQ===void 0?void 0:LQ.fill)||"#969EB0",`;
    }`),NA()||(u+=M()+`.alan-btn__side-bar__toogle-side-bar-btn:hover svg path {
            fill: `.concat(((uI=(zC=(yn=(oE=f==null?void 0:f.popup)===null||oE===void 0?void 0:oE.icons)===null||yn===void 0?void 0:yn.sideBar)===null||zC===void 0?void 0:zC.hover)===null||uI===void 0?void 0:uI.fill)||"#0046ff",`;
        }`)),u+=M()+`.alan-btn__side-bar__close-chat-btn {
        margin-right: 6px;
        height: `.concat(dB,`px;
        display: flex;
        align-items: center;
        cursor: pointer;
        pointer-events: all;
    }`),u+=M()+`.alan-btn__side-bar__close-chat-btn svg path {
        fill: `.concat(((YI=(hI=(aQ=(RI=f==null?void 0:f.popup)===null||RI===void 0?void 0:RI.icons)===null||aQ===void 0?void 0:aQ.close)===null||hI===void 0?void 0:hI.default)===null||YI===void 0?void 0:YI.fill)||"#969EB0",`;
    }`),NA()||(u+=M()+`.alan-btn__side-bar__close-chat-btn:hover svg path {
            fill: `.concat(((QQ=(JI=(pI=(NI=f==null?void 0:f.popup)===null||NI===void 0?void 0:NI.icons)===null||pI===void 0?void 0:pI.close)===null||JI===void 0?void 0:JI.hover)===null||QQ===void 0?void 0:QQ.fill)||"#97989c",`;
        }`)),u+=M()+`.alan-btn__side-bar__new-chat-btn {
        margin-right: 6px;
        height: `.concat(dB,`px;
        display: flex;
        align-items: center;
        cursor: pointer;
        pointer-events: all;
        color: #000;
        padding: 2px 8px;
    }`),u+=M()+`.alan-btn__side-panel-chat-btn {
        margin-right: 6px;
        height: `.concat(dB,`px;
        display: flex;
        align-items: center;
        cursor: pointer;
        pointer-events: all;
        display:none;
    }`),u+=M()+`.alan-btn_text-chat-full-screen .alan-btn__side-panel-chat-btn {
        display:flex;
    }`,u+=M()+`.alan-btn_text-chat-full-screen.alan-btn__side-bar-expanded .alan-btn__side-panel-chat-btn {
        display:none;
    }`,u+=M()+`.alan-btn__side-panel-chat-btn svg {
        min-width: 22px;
    }`,u+=M()+`.alan-btn__side-panel-chat-btn svg path {
        fill: `.concat(((EQ=(gQ=(zE=(OE=f==null?void 0:f.popup)===null||OE===void 0?void 0:OE.icons)===null||zE===void 0?void 0:zE.sideBar)===null||gQ===void 0?void 0:gQ.default)===null||EQ===void 0?void 0:EQ.fill)||"#969EB0",`;
    }`),NA()||(u+=M()+`.alan-btn__side-panel-chat-btn:hover svg path {
            fill: `.concat(((Qg=(Zn=(KC=(KE=f==null?void 0:f.popup)===null||KE===void 0?void 0:KE.icons)===null||KC===void 0?void 0:KC.sideBar)===null||Zn===void 0?void 0:Zn.hover)===null||Qg===void 0?void 0:Qg.fill)||"#0046ff",`;
        }`)),u+=M()+`.alan-btn__close-chat-btn {
        width: 15px;
        margin-right: 6px;
        height: `.concat(dB,`px;
        display: flex;
        align-items: center;
        cursor: pointer;
        pointer-events: all;
    }`),u+=M()+`.alan-btn_text-chat-full-screen.alan-btn__side-bar-expanded .alan-btn__close-chat-btn {
        display: none;
    }`,u+=M()+`.alan-btn__close-chat-btn svg path {
        fill: `.concat(((sE=(jC=(lE=(aE=f==null?void 0:f.popup)===null||aE===void 0?void 0:aE.icons)===null||lE===void 0?void 0:lE.close)===null||jC===void 0?void 0:jC.default)===null||sE===void 0?void 0:sE.fill)||"#969EB0",`;
    }`),NA()||(u+=M()+`.alan-btn__close-chat-btn:hover svg path {
            fill: `.concat(((_C=(qC=(PC=(ug=f==null?void 0:f.popup)===null||ug===void 0?void 0:ug.icons)===null||PC===void 0?void 0:PC.close)===null||qC===void 0?void 0:qC.hover)===null||_C===void 0?void 0:_C.fill)||"#97989c",`;
        }`)),u+=M()+`.alan-btn__expand-collapse-chat-btn {
        width: 15px;
        margin-right: 6px;
        height: `.concat(dB,`px;
        display: `).concat(!((An=($C=f==null?void 0:f.popup)===null||$C===void 0?void 0:$C.fullScreenMode)===null||An===void 0)&&An.enabled?"flex":"none",`;
        align-items: center;
        cursor: pointer;
        pointer-events: all;
    }`),u+=M()+`.alan-btn__expand-collapse-chat-btn  svg path {
        fill: `.concat(((FE=(Xn=(jE=(bI=f==null?void 0:f.popup)===null||bI===void 0?void 0:bI.icons)===null||jE===void 0?void 0:jE.fullScreen)===null||Xn===void 0?void 0:Xn.default)===null||FE===void 0?void 0:FE.fill)||"#969EB0",`;
    }`),u+=M()+`.alan-btn__expand-collapse-chat-btn:hover svg path {
        fill: `.concat(((kI=(mI=(Sn=(Ln=f==null?void 0:f.popup)===null||Ln===void 0?void 0:Ln.icons)===null||Sn===void 0?void 0:Sn.fullScreen)===null||mI===void 0?void 0:mI.hover)===null||kI===void 0?void 0:kI.fill)||"#0046ff",`;
    }`),u+=M()+`.alan-btn__chat-messages-wrapper::-webkit-scrollbar {
        width: `.concat(Nw,`px;
        height: `).concat(Nw,`px;
    }`),u+=M()+`.alan-btn__chat-messages-wrapper::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background-color: rgba(224, 224, 224, 0.795);
        transition: background-color 300ms ease-in-out;
    }`,u+=M()+`.alan-btn__chat-messages-wrapper::-webkit-scrollbar-thumb:hover {
        background-color: rgba(230, 230, 230, 0.856);
        transition: background-color 300ms ease-in-out;
    }`,u+=M()+`.alan-btn__chat-messages-wrapper::-webkit-scrollbar-track {
        border-radius: 3px;
        background: transparent;
    }`,u+=M()+`.alan-btn__chat-textarea-holder-gradient {
        background: linear-gradient(0deg, `.concat(((yI=f==null?void 0:f.popup)===null||yI===void 0?void 0:yI.backgroundColor)||"#DAEBFF",` 30%, rgba(255, 255, 255, 0) 100%);
        height:15px;
        min-height:15px;
        width: calc(100% - 10px);
        position: absolute;
        bottom: `).concat(Ng,`px;
        left:0;
    }`),u+=M()+`.show-gradient .alan-btn__chat-textarea-left-gradient {
        position: absolute;
        left: 26px;
        border-radius: 16px;
        bottom: 15px;
        width: 15px;
        opacity: 0;
        transition: opacity 300ms ease-in-out;
        height: `.concat(aC,`px;
        background: linear-gradient(90deg, `).concat(((UA=f==null?void 0:f.textarea)===null||UA===void 0?void 0:UA.backgroundColor)||"#ffffff",` 60%, rgba(255, 255, 255, 0) 100%);
    }`),u+=M()+`.show-gradient .alan-btn__chat-textarea-right-gradient {
        position: absolute;
        right: 51px;
        border-radius: 16px;
        bottom: 15px;
        width: 15px;
        opacity: 0;
        transition: opacity 300ms ease-in-out;
        height: `.concat(aC,`px;
        background: linear-gradient(270deg, `).concat(((K=f==null?void 0:f.textarea)===null||K===void 0?void 0:K.backgroundColor)||"#ffffff",` 60%, rgba(255, 255, 255, 0) 100%);
    }`),u+=M()+`.show-gradient-left .alan-btn__chat-textarea-left-gradient {
        opacity: 1;
    }`,u+=M()+`.show-gradient-right .alan-btn__chat-textarea-right-gradient {
        opacity: 1;
    }`,u+=M()+`.alan-btn__chat-holder.alan-text-chat__voice-enabled .show-gradient .alan-btn__chat-textarea-left-gradient {
        left: 50px;
    }`;var wn=20;u+=M()+`.alan-btn__chat-textarea {
        position: absolute;
        left: 15px;
        bottom: 15px;
        width: calc(100% - 30px);
        border-radius: `.concat(((lA=(Hn=f==null?void 0:f.textarea)===null||Hn===void 0?void 0:Hn.borderRadius)===null||lA===void 0?void 0:lA.topLeft)||wn,"px ").concat(((xg=(AB=f==null?void 0:f.textarea)===null||AB===void 0?void 0:AB.borderRadius)===null||xg===void 0?void 0:xg.topRight)||wn,"px ").concat(((cE=(qA=f==null?void 0:f.textarea)===null||qA===void 0?void 0:qA.borderRadius)===null||cE===void 0?void 0:cE.bottomRight)||wn,"px ").concat(((Wn=(DE=f==null?void 0:f.textarea)===null||DE===void 0?void 0:DE.borderRadius)===null||Wn===void 0?void 0:Wn.bottomLeft)||wn,`px;
        border: 1px solid `).concat(((gg=f==null?void 0:f.textarea)===null||gg===void 0?void 0:gg.borderColor)||((Tg=f==null?void 0:f.textarea)===null||Tg===void 0?void 0:Tg.backgroundColor)||"transparent",`;
        box-shadow: `).concat(!((yB=f==null?void 0:f.textarea)===null||yB===void 0)&&yB.hasShadow?"0px 1px 3px rgba(16, 39, 126, 0.2)":"none",`;
        background-color: `).concat(((ZB=f==null?void 0:f.textarea)===null||ZB===void 0?void 0:ZB.backgroundColor)||"#ffffff",` ;
        color: `).concat(((MB=f==null?void 0:f.textarea)===null||MB===void 0?void 0:MB.color)||"#171717",` ;
        overflow: hidden;
        outline: none;
        resize: none;
        -webkit-appearance: none;
        font-size: `).concat(Hd(NA(),((XB=f==null?void 0:f.textarea)===null||XB===void 0?void 0:XB.fontSize)||pw),`px;
        line-height: `).concat(Yw,`;
        text-align: left;
        max-height: `).concat(aC,`px;
        height: `).concat(aC,`px;
        padding: `).concat(BA.textChat.defaults.textarea.padding.top,`px 42px 12px 12px;
        margin: 0px!important;
        -webkit-user-select: text;
        -khtml-user-select: text;
        -moz-user-select: text;
        -ms-user-select: text;
        user-select: text;
        transition: opacity 300ms ease-in-out;
    }`),u+=M()+`.alan-btn__chat-textarea::placeholder {
        color: `.concat(((rE=f==null?void 0:f.textarea)===null||rE===void 0?void 0:rE.placeholderColor)||"#747474",` ;
    }`),u+=M()+`.alan-btn__chat-textarea::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }`,u+=M()+`.alan-btn__chat-textarea::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background-color: rgba(224, 224, 224, 0.795);
        transition: background-color 300ms ease-in-out;
    }`,u+=M()+`.alan-btn__chat-textarea::-webkit-scrollbar-thumb:hover {
        background-color: rgba(230, 230, 230, 0.856);
        transition: background-color 300ms ease-in-out;
    }`,u+=M()+`.alan-btn__chat-textarea::-webkit-scrollbar-track {
        border-radius: 3px;
        background: transparent;
    }`,u+=M()+`.alan-btn__chat-holder.alan-text-chat__voice-enabled .alan-btn__chat-textarea {
        padding-left: 42px;
    }`,u+=M()+`.alan-btn__chat.alan-btn__mic-active .alan-btn__chat-textarea {
        opacity: 0.6;
        transition: opacity 300ms ease-in-out;
        pointer-events: none;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }`,u+=M()+`.alan-btn__chat.alan-btn__mic-active .alan-btn__chat-send-btn {
        opacity: 0.2;
        pointer-events: none;
        transition: opacity 300ms ease-in-out;
    }`,u+=M()+`.alan-btn__inactive .alan-btn__chat-send-btn {
        opacity: 0.2;
        pointer-events: none;
        transition: opacity 300ms ease-in-out;
    }`,u+=M()+`.alan-btn__chat.alan-btn__disconnected .alan-btn__chat-textarea {
        opacity: 0.6;
        transition: opacity 300ms ease-in-out;
        pointer-events: none;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }`,u+=M()+`.alan-btn__chat.alan-btn__disconnected .alan-btn__chat-send-btn {
        opacity: 0.2;
        pointer-events: none;
        transition: opacity 300ms ease-in-out;
    }`,u+=M()+`.alan-btn__chat.alan-btn__disconnected .alan-btn__chat-unmute-btn {
        opacity: 0.2;
        pointer-events: none;
        transition: opacity 300ms ease-in-out;
    }`,u+=M()+`.alan-btn__chat.alan-btn__disconnected .alan-btn__chat-header-clear-btn {
        opacity: 0.2;
        pointer-events: none;
        transition: opacity 300ms ease-in-out;
    }`,u+=M()+`.alan-btn__chat.alan-btn__disconnected .alan-btn__chat-send-btn svg path {
        opacity: 1;
    }`,u+=M()+`.alan-btn__chat.alan-btn__disconnected .alan-btn__chat-mic-btn {
        opacity: 0.2;
        pointer-events: none;
        transition: opacity 300ms ease-in-out;
    }`,u+=M()+`.alan-btn__inactive .alan-btn__chat-mic-btn {
        opacity: 0.2;
        pointer-events: none;
        transition: opacity 300ms ease-in-out;
    }`,u+=M()+`.alan-btn_disconnected-chat-icon-rotate {
        animation: disconnected-chat-icon-rotate-animation 1500ms linear infinite;
    }`,u+=M()+EB("disconnected-chat-icon-rotate-animation","0%{  transform: rotate(0deg);  } 100%{  transform: rotate(360deg);  }"),u+=M()+`.alan-btn__disabled {
        opacity: 0.2;
        pointer-events: none;
        transition: opacity 300ms ease-in-out;
    }`,u+=M()+`.alan-btn__chat-send-btn {
        position: absolute;
        transition: opacity 300ms ease-in-out;
        right: 20px;
        bottom: 20px;
        min-width: 40px;
        width: 40px;
        max-width: 40px;
        height: 40px;
        max-height: 40px;
        min-height: 40px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Chrome/Safari/Opera */
        -khtml-user-select: none; /* Konqueror */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE/Edge */
        user-select: none;
    }`,u+=M()+`.alan-btn__chat-send-btn svg {
        position: relative;
        left: 2px;
    }`,u+=M()+`.alan-btn__chat-send-btn svg path {
        fill: `.concat(((PE=f==null?void 0:f.textarea)===null||PE===void 0?void 0:PE.placeholderColor)||"#747474",`;
        opacity: 0.5;
    }`),u+=M()+`.ready-to-send:not(.alan-btn__inactive) .alan-btn__chat-send-btn svg path {
        fill: `.concat(((AC=($E=(_E=(qE=f==null?void 0:f.popup)===null||qE===void 0?void 0:qE.icons)===null||_E===void 0?void 0:_E.general)===null||$E===void 0?void 0:$E.default)===null||AC===void 0?void 0:AC.fill)||"#171717",`;
        opacity: 1;
    }`),NA()||(u+=M()+`.ready-to-send:not(.alan-btn__inactive) .alan-btn__chat-send-btn:hover {
            cursor: pointer;
        }`,u+=M()+`.ready-to-send:not(.alan-btn__inactive) .alan-btn__chat-send-btn:hover svg path {
            fill: `.concat(((EC=(gC=(QC=(BC=f==null?void 0:f.popup)===null||BC===void 0?void 0:BC.icons)===null||QC===void 0?void 0:QC.general)===null||gC===void 0?void 0:gC.hover)===null||EC===void 0?void 0:EC.fill)||"#0078ff",`;
            opacity:0.8;
        }`)),u+=M()+`.alan-btn__chat-mic-btn {
        position: absolute;
        left: 20px;
        bottom: 22px;
        min-width: `.concat(_g,`px;
        width: `).concat(_g,`px;
        max-width: `).concat(_g,`px;
        height: `).concat(_g,`px;
        max-height: `).concat(_g,`px;
        min-height: `).concat(_g,`px;
        display: flex;
        flex-direction: row;
        cursor: pointer;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
    }`),u+=M()+`.alan-btn__chat-mic-btn.active::before {
        content: '';
        position: absolute;
        z-index: -1;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        background-color:  `.concat(((Eg=(Rg=(TA=(uA=f==null?void 0:f.popup)===null||uA===void 0?void 0:uA.icons)===null||TA===void 0?void 0:TA.general)===null||Rg===void 0?void 0:Rg.default)===null||Eg===void 0?void 0:Eg.fill)||"#C8C8CC",`;
        opacity: 0.3;
        border-radius: 50%;
    }`),u+=M()+`.alan-btn__chat-notifications-bubble {
        position: absolute;
        right: 4px;
        top: -4px;
        height: 20px;
        width: 20px;
        background-color:  `.concat(((Og=f==null?void 0:f.notifications)===null||Og===void 0?void 0:Og.backgroundColor)||"#D0021B",`;
        color:  `).concat(((zg=f==null?void 0:f.notifications)===null||zg===void 0?void 0:zg.color)||"#ffffff",`;
        border-radius: 50%;
        z-index: `).concat(BA.btn.zIndex+1,`;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 10px;
    }`),u+=M()+`.alan-btn__chat-notifications-bubble:empty {
        display: none;
    }`,NA()||(u+=M()+`.alan-btn__chat-mic-btn.active:hover::before {
        opacity: 0.35;
    }`),u+=M()+`.alan-btn__chat-mic-btn svg {
    }`,u+=M()+`.alan-btn__chat-mic-btn svg path {
        fill: `.concat(((Vn=(vn=(UE=(hA=f==null?void 0:f.popup)===null||hA===void 0?void 0:hA.icons)===null||UE===void 0?void 0:UE.general)===null||vn===void 0?void 0:vn.default)===null||Vn===void 0?void 0:Vn.fill)||"#171717",`;
    }`),NA()||(u+=M()+`.alan-btn__chat-mic-btn:hover svg path {
        fill: `.concat(((MQ=(Qn=(ZI=(Bn=f==null?void 0:f.popup)===null||Bn===void 0?void 0:Bn.icons)===null||ZI===void 0?void 0:ZI.general)===null||Qn===void 0?void 0:Qn.hover)===null||MQ===void 0?void 0:MQ.fill)||"#007AFF",`;
    }`)),u+=M()+`.alan-text-chat__animated-btn-bars {
        height:`.concat(_g,`px;
        width:`).concat(_g,`px;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
        background: `).concat(((GQ=(fQ=(dQ=(SQ=f==null?void 0:f.popup)===null||SQ===void 0?void 0:SQ.icons)===null||dQ===void 0?void 0:dQ.general)===null||fQ===void 0?void 0:fQ.hover)===null||GQ===void 0?void 0:GQ.fill)||"#007AFF",`;
        display:none;
    }`),u+=M()+`.alan-btn__chat-mic-btn.active .alan-text-chat__animated-btn-bars  {
        display: flex;
    }`,u+=M()+`.alan-btn__chat-mic-btn.active svg  {
        display: none;
    }`,u+=M()+`.alan-text-chat__bar {
        background: #ffffff;
        bottom: 1px;
        height: 3px;
        width: 2px;
        margin: 0px 1px;
        border-radius: 5px;
    }`,u+=M()+`.alan-text-chat__bar-1 {
        animation: alan-btn__sound-bar-1 0ms -1200ms linear infinite alternate;
    }`,u+=M()+`.alan-text-chat__bar-2 {
        animation: alan-btn__sound-bar-2 0ms -1200ms linear infinite alternate;
    }`,u+=M()+`.alan-text-chat__bar-3 {
        animation: alan-btn__sound-bar-3 0ms -1200ms linear infinite alternate;
    }`,u+=M()+EB("alan-btn__sound-bar-1",`
    0% {

        height: 3px; 
    }
    100% {
          
        height: 10px;        
    }`),u+=M()+EB("alan-btn__sound-bar-2",`
    0% {

        height: 8px; 
    }
    100% {
          
        height: 15px;        
    }`),u+=M()+EB("alan-btn__sound-bar-3",`
    0% {

        height: 12px; 
    }
    100% {
          
        height: 28px;        
    }`),u+=M()+".alan-text-chat__bar:nth-child(1)  { animation-duration: 474ms; }",u+=M()+".alan-text-chat__bar:nth-child(2)  { animation-duration: 433ms; }",u+=M()+".alan-text-chat__bar:nth-child(3)  { animation-duration: 407ms; }",u+=M()+".alan-text-chat__bar:nth-child(4)  { animation-duration: 458ms; }",u+=M()+".alan-text-chat__bar:nth-child(5)  { animation-duration: 400ms; }",u+=M()+".alan-text-chat__bar:nth-child(6)  { animation-duration: 427ms; }",u+=M()+`.alan-btn_text-chat-full-screen .alan-btn__chat-msg-holder {
        display: flex;
        flex-direction: row;
    }`;var Jg=20;u+=M()+`.alan-btn__chat-request {
        margin-bottom: 16px;
        max-width: 90%;
        min-height: 41px;
        padding: 9px 20px;
        line-height: 1.53;
        display: block;
        float: right;
        clear: both;
        border-radius: `.concat(((SB=(LB=(uQ=f==null?void 0:f.bubbles)===null||uQ===void 0?void 0:uQ.request)===null||LB===void 0?void 0:LB.borderRadius)===null||SB===void 0?void 0:SB.topLeft)||Jg,"px ").concat(((xn=(ME=(nB=f==null?void 0:f.bubbles)===null||nB===void 0?void 0:nB.request)===null||ME===void 0?void 0:ME.borderRadius)===null||xn===void 0?void 0:xn.topRight)||Jg,"px ").concat(((dE=(On=(Tn=f==null?void 0:f.bubbles)===null||Tn===void 0?void 0:Tn.request)===null||On===void 0?void 0:On.borderRadius)===null||dE===void 0?void 0:dE.bottomRight)||Jg,"px ").concat(((En=(gn=(zn=f==null?void 0:f.bubbles)===null||zn===void 0?void 0:zn.request)===null||gn===void 0?void 0:gn.borderRadius)===null||En===void 0?void 0:En.bottomLeft)||Jg,`px;
        position: relative;
        border: 1px solid `).concat(((fE=(Kn=f==null?void 0:f.bubbles)===null||Kn===void 0?void 0:Kn.request)===null||fE===void 0?void 0:fE.borderColor)||((Cg=(Kg=f==null?void 0:f.bubbles)===null||Kg===void 0?void 0:Kg.request)===null||Cg===void 0?void 0:Cg.backgroundColor)||"#b2d6ff",`;
        box-shadow: `).concat(!((CC=(Cn=f==null?void 0:f.bubbles)===null||Cn===void 0?void 0:Cn.request)===null||CC===void 0)&&CC.hasShadow?"0px 1px 3px rgba(16, 39, 126, 0.2)":"none",`;
        background-color: `).concat(((jn=(nn=f==null?void 0:f.bubbles)===null||nn===void 0?void 0:nn.request)===null||jn===void 0?void 0:jn.backgroundColor)||"#b2d6ff",`;
        color: `).concat(((nC=(GE=f==null?void 0:f.bubbles)===null||GE===void 0?void 0:GE.request)===null||nC===void 0?void 0:nC.color)||"#171717",`;
        font-size: `).concat(((XI=(Pn=f==null?void 0:f.bubbles)===null||Pn===void 0?void 0:Pn.request)===null||XI===void 0?void 0:XI.fontSize)||"15",`px;
        word-break: break-word;
        text-align: left;
        -webkit-touch-callout: text; /* iOS Safari */
        -webkit-user-select: text; /* Chrome/Safari/Opera */
        -khtml-user-select: text; /* Konqueror */
        -moz-user-select: text; /* Firefox */
        -ms-user-select: text; /* IE/Edge */
        user-select: text;
    }`),u+=M()+`.alan-btn_text-chat-full-screen .alan-btn__chat-request {
        margin-bottom: 16px;
        max-width: 100%;
        float: initial;
        clear: initial;
        border-radius: 4px;
    }`,u+=M()+`.alan-btn__chat-request * {
        -webkit-touch-callout: text; /* iOS Safari */
        -webkit-user-select: text; /* Chrome/Safari/Opera */
        -khtml-user-select: text; /* Konqueror */
        -moz-user-select: text; /* Firefox */
        -ms-user-select: text; /* IE/Edge */
        user-select: text;
    }`;var At=+(((jg=(qn=f==null?void 0:f.bubbles)===null||qn===void 0?void 0:qn.response)===null||jg===void 0?void 0:jg.fontSize)||15);u+=M()+`.alan-btn__chat-response {
        margin-bottom: 16px;
        max-width: 90%;
        min-height: 41px;
        padding: 9px 20px;
        line-height: 1.53;
        display: block;
        float: left;
        clear: both;
        border-radius: `.concat(((hg=(_n=(LI=f==null?void 0:f.bubbles)===null||LI===void 0?void 0:LI.response)===null||_n===void 0?void 0:_n.borderRadius)===null||hg===void 0?void 0:hg.topLeft)||Jg,"px ").concat((($n=(eC=(CQ=f==null?void 0:f.bubbles)===null||CQ===void 0?void 0:CQ.response)===null||eC===void 0?void 0:eC.borderRadius)===null||$n===void 0?void 0:$n.topRight)||Jg,"px ").concat(((Ae=(SI=(Pg=f==null?void 0:f.bubbles)===null||Pg===void 0?void 0:Pg.response)===null||SI===void 0?void 0:SI.borderRadius)===null||Ae===void 0?void 0:Ae.bottomRight)||Jg,"px ").concat(((HI=(Qe=(Be=f==null?void 0:f.bubbles)===null||Be===void 0?void 0:Be.response)===null||Qe===void 0?void 0:Qe.borderRadius)===null||HI===void 0?void 0:HI.bottomLeft)||Jg,`px;
        position: relative;
        background-color: `).concat(((Ee=(ge=f==null?void 0:f.bubbles)===null||ge===void 0?void 0:ge.response)===null||Ee===void 0?void 0:Ee.backgroundColor)||"#ffffff",`;
        border: 1px solid `).concat(((WI=(Ce=f==null?void 0:f.bubbles)===null||Ce===void 0?void 0:Ce.response)===null||WI===void 0?void 0:WI.borderColor)||((vI=(ne=f==null?void 0:f.bubbles)===null||ne===void 0?void 0:ne.response)===null||vI===void 0?void 0:vI.backgroundColor)||"#ffffff",`;
        box-shadow: `).concat(!((xI=(VI=f==null?void 0:f.bubbles)===null||VI===void 0?void 0:VI.response)===null||xI===void 0)&&xI.hasShadow?"0px 1px 3px rgba(16, 39, 126, 0.2)":"none",`;
        color: `).concat(((IC=(en=f==null?void 0:f.bubbles)===null||en===void 0?void 0:en.response)===null||IC===void 0?void 0:IC.color)||"#171717",`;
        font-size: `).concat(At,`px;
        word-break: break-word;
        text-align: left;
        -webkit-touch-callout: text; /* iOS Safari */
        -webkit-user-select: text; /* Chrome/Safari/Opera */
        -khtml-user-select: text; /* Konqueror */
        -moz-user-select: text; /* Firefox */
        -ms-user-select: text; /* IE/Edge */
        user-select: text;
    }`);var Bt=82;u+=M()+`.alan-btn_text-chat-full-screen .alan-btn__chat-response {
        margin-bottom: 16px;
        max-width: calc(100% - `.concat(Bt,`px);
        min-width: calc(100% - `).concat(Bt,`px)!important;
        float: initial;
        clear: initial;
        border-radius: 4px;
    }`),u+=M()+`.alan-btn__chat-response.with-images {
        min-width: 90%;
    }`,u+=M()+`.alan-chat-small .alan-btn__chat-request {
        max-width: 100%;
    }`,u+=M()+`.alan-chat-small .alan-btn__chat-response {
        max-width: 100%;
    }`,u+=M()+`.alan-chat-small .alan-btn__chat-response.with-images {
        min-width: 100%;
    }`,u+=M()+`.alan-btn__chat-request.animated {
        opacity:0;
        animation: chat-bubble-appear-w-opacity 300ms ease-in-out forwards;
        animation-delay: 100ms;
    }`,u+=M()+`.alan-btn__chat-response.animated {
        opacity:0;
        animation: chat-bubble-appear-w-opacity 300ms ease-in-out forwards;
        animation-delay: 200ms;
    }`,u+=M()+EB("chat-bubble-appear-w-opacity",`
    0% { opacity:0;}
      
    100% {
        opacity:1;
    }`),u+=M()+`.alan-btn__chat-response * {
        -webkit-touch-callout: text; /* iOS Safari */
        -webkit-user-select: text; /* Chrome/Safari/Opera */
        -khtml-user-select: text; /* Konqueror */
        -moz-user-select: text; /* Firefox */
        -ms-user-select: text; /* IE/Edge */
        user-select: text;
    }`,u+=M()+`.alan-btn__chat-response-imgs-wrapper {
        display: flex;
        flex-wrap: wrap;
        position: relative;
        top: -9px;
        left: -20px;
        width: calc(100% + 40px);
    }`,u+=M()+`.alan-btn__chat-response-imgs-wrapper-left-arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 12px;
        opacity:0.85;
    }`,u+=M()+`.alan-btn__chat-response-imgs-wrapper-right-arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 12px;
        opacity:0.85;
    }`,u+=M()+`.alan-btn__chat-response-imgs-wrapper-left-arrow:hover {
        opacity:1;
        cursor: pointer;
    }`,u+=M()+`.alan-btn__chat-response-imgs-wrapper-right-arrow:hover {
        opacity:1;
        cursor: pointer;
    }`,u+=M()+`.alan-btn__chat-response-imgs-wrapper-left-arrow.invisible {
        opacity:0;
        pointer-events: none;
    }`,u+=M()+`.alan-btn__chat-response-imgs-wrapper-right-arrow.invisible {
        opacity:0;
        pointer-events: none;
    }`,u+=M()+`.alan-btn__chat-response-img-block {
        overflow: hidden;
        border-radius: 20px 20px 0 0;
        width: 100%;
        display: flex;
    }`,u+=M()+`.alan-btn__chat-response-video {
        width: 100%;
        min-width: 100%;
        min-height: 220px;
        height: 220px;
        max-height: 220px;
    }`,u+=M()+`.alan-btn__chat-response-img {
        cursor: pointer;
        transition: transform 300ms ease-in-out;
        width: 100%;
        min-width: 100%;
        min-height: 220px;
        height: 220px;
        max-height: 220px;
        object-fit: cover;
        pointer-events: initial;
    }`,u+=M()+`.alan-btn__chat-response-img.img-none {
        object-fit: none;
    }`,u+=M()+`.alan-btn__chat-response-img.not-found {
        opacity: 0.7;
        object-fit: none;
    }`,NA()||(u+=M()+`.alan-btn__chat-response-imgs-wrapper:hover .alan-btn__chat-response-img {
            transform: scale(1.04);
            transition: transform 300ms ease-in-out;
        }`),u+=`.alan-btn__image-preview-overlay {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        min-height: 100vh;
        width: 100vw;
        min-width: 100vw;
        background-color: rgba(0,0,0,0.6);
        display: flex;
        align-items: center;
        justify-content: center;
    }`,u+=`.alan-btn__image-preview-overlay img {
        max-width: calc(100% - 100px);
        max-height: calc(100% - 100px);
    }`,u+=`@media only screen and (orientation: landscape) { 
        .alan-btn__image-preview-overlay.mobile {
            align-items: flex-start;
            padding-top: 40px;
        }
        .alan-btn__image-preview-overlay img {
            max-height: calc(100% - 120px);
        }
        .alan-btn__image-preview-overlay iframe {
            max-height: calc(100% - 120px);
        }
    }`,u+=`.alan-btn__image-preview-overlay iframe {
        max-width: calc(100% - 100px);
        max-height: calc(100% - 100px);
        width: calc(100% - 100px);
        height: calc(100% - 100px);
    }`,u+=`.alan-btn__image-preview-overlay-close-icon {
        position: absolute;
        top: 16px;
        right: 16px;
        cursor: pointer;
        opacity: 0.7;
    }`,NA()||(u+=`.alan-btn__image-preview-overlay-close-icon:hover {
            opacity: 1;
        }`),u+=`.alan-btn__image-preview-overlay-left-icon {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 16px;
        cursor: pointer;
        opacity: 0.7;
    }`,u+=`.alan-btn__image-preview-overlay-right-icon {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 16px;
        cursor: pointer;
        opacity: 0.7;
    }`,u+=`.alan-btn__image-preview-overlay-left-icon.invisible {
        opacity:0;
        pointer-events: none;
    }`,u+=`.alan-btn__image-preview-overlay-right-icon.invisible {
        opacity:0;
        pointer-events: none;
    }`,NA()||(u+=`.alan-btn__image-preview-overlay-left-icon:hover {
            opacity: 1;
        }`,u+=`.alan-btn__image-preview-overlay-right-icon:hover {
            opacity: 1;
        }`),u+=M()+`.alan-btn__chat-response-links-wrapper {
        display: flex;
        flex-wrap: wrap;
        border-top: 1px solid #D2DAE5;
        padding: 10px 0 0 0;
        margin-top: 10px;
        align-items: center;
    }`,u+=M()+`.alan-btn__chat-response-link {
        background: #EAF2FC;
        border-radius: 15px;
        padding: 6px 8px;
        margin-right: 10px;
        margin-top: 4px;
        margin-bottom: 4px;
        display: flex;
        align-items: center;
        max-width: 100%;
        font-size: `.concat(At-2,`px;
    }`),u+=M()+`.alan-btn__chat-messages a.alan-btn__chat-response-link:hover  {
        text-decoration: none !important;
    }`,u+=M()+`.alan-btn__chat-response-link-title {
        overflow: hidden;
        max-width: calc(100% - 15px);
        text-overflow: ellipsis;
        white-space: nowrap;
        display: inline-block;
    }`,u+=M()+`.alan-btn__chat-response-link svg {
        flex-shrink: 0;
        margin-right: 6px;
    }`,NA()||(u+=M()+`a.alan-btn__chat-response-link:hover svg path  {
            fill: #0078FF;
        }`);var aa=(ee=(OI=(TI=BA.textChat.options)===null||TI===void 0?void 0:TI.bubbles)===null||OI===void 0?void 0:OI.response)===null||ee===void 0?void 0:ee.likeBtn,la=(zI=(tC=(uE=BA.textChat.options)===null||uE===void 0?void 0:uE.bubbles)===null||tC===void 0?void 0:tC.response)===null||zI===void 0?void 0:zI.copyBtn;u+=M()+`.alan-btn__chat-response-commands-wrapper  {
        margin-top: 10px;
        display: `.concat(aa||la?"block":"none",`;
    }`),u+=M()+`.alan-btn__chat-response-like-btn  {
        cursor: pointer;
    }`,u+=M()+`.alan-btn__chat-response-dislike-btn  {
        cursor: pointer;
    }`,NA()||(u+=M()+`.alan-btn__chat-response-like-btn  {
            opacity: 0.7;
            cursor: pointer;
        }`,u+=M()+`.alan-btn__chat-response-like-btn:hover  {
            opacity: 1;
        }`,u+=M()+`.alan-btn__chat-response-dislike-btn  {
            opacity: 0.7;
        }`,u+=M()+`.alan-btn__chat-response-dislike-btn:hover  {
            opacity: 1;
        }`),u+=M()+`.alan-incoming-msg {
        display: flex;
        align-items: center;
        overflow: hidden;
        animation:chat-bubble-appear-w-opacity 300ms ease-in-out forwards 100ms, hide-buble 300ms forwards ease 30000ms !important;
    }`,u+=M()+EB("hide-buble",`
    0% { 
        height: 41px; 
        max-height:41px;    
        min-height: 41px;
    }
      
    100% {
        height: 0px;
        max-height: 0px;
        min-height: 0px;
        padding: 0px;
        margin-bottom:0;
    }`),u+=M()+`.alan-btn__chat-incomming-msg-wrapper {
        display: flex;
        align-items: center;
    }`,u+=M()+`.alan-btn__chat-incomming-msg {
        border-radius: 50%;
        background-color: `.concat(((KI=(Ie=f==null?void 0:f.bubbles)===null||Ie===void 0?void 0:Ie.response)===null||KI===void 0?void 0:KI.color)||"#080808",`;
        margin: 2px;
        height: 6px;
        width: 6px;
        animation: alan-dot-bounce 1.5s infinite ease;
    }`),u+=M()+`.msg-2 {
        animation-delay: .2s;
    }`,u+=M()+`.msg-3 {
        animation-delay: .3s;
    }`,u+=M()+EB("alan-dot-bounce",`
    0%, 100% { opacity:1;}
      
    60% {
        transform: translateY(3px);
        opacity:.0;
    }`),u+=M()+`.alan-btn__chat-response-like-btn {
        opacity: 0.5;
        display: `.concat(!((wC=(te=f==null?void 0:f.bubbles)===null||te===void 0?void 0:te.response)===null||wC===void 0)&&wC.likeBtn?"inline-block":"none",`;
     }`),u+=M()+`.alan-btn__chat-response-dislike-btn {
        opacity: 0.5;
        display: `.concat(!((we=(jI=f==null?void 0:f.bubbles)===null||jI===void 0?void 0:jI.response)===null||we===void 0)&&we.likeBtn?"inline-block":"none",`;
     }`),u+=M()+`.alan-btn__chat-response__copy-btn {
        opacity: 0.5;
        display: `.concat(!((iC=(VB=f==null?void 0:f.bubbles)===null||VB===void 0?void 0:VB.response)===null||iC===void 0)&&iC.copyBtn?"inline-block":"none",`;
     }`),u+=M()+`.alan-btn__chat-response__copy-btn svg {
        width: 20px;
     }`,u+=`
    @media screen and (min-width: 990px) {
        `.concat(M(),`.alan-btn_text-chat-full-screen .alan-btn__chat-response-commands-wrapper {
            left: calc(100% + 5px);
            top: -10px;
            white-space: nowrap;
            position: absolute;
         }
      }
   `),u+=M()+`.alan-btn__chat-response__copy-btn alan-btn__copy-icon {
        width: 22px;
     }`,u+=M()+`.alan-btn__chat-response__copy-btn .alan-btn__copied-icon {
        display: none;
     }`,u+=M()+`.alan-btn__chat-response__copy-btn:hover {
        opacity: 1;
        cursor: pointer;
     }`,u+=M()+`.alan-btn__chat-response__copy-btn.alan-copy-btn-copied .alan-btn__copy-icon {
        display: none;
     }`,u+=M()+`.alan-btn__chat-response__copy-btn.alan-copy-btn-copied .alan-btn__copied-icon {
        display: inline-block;
     }`,u+=M()+`.alan-btn_text-chat-full-screen .alan-btn__chat-popup {
        width: 100%;
        margin-left: 51px;
        margin-right: 30px;
     }`,u+=M()+`.alan-btn__chat-popup {
       position: relative;
       margin-bottom: 16px;
       -webkit-touch-callout: text; /* iOS Safari */
       -webkit-user-select: text; /* Chrome/Safari/Opera */
       -khtml-user-select: text; /* Konqueror */
       -moz-user-select: text; /* Firefox */
       -ms-user-select: text; /* IE/Edge */
       user-select: text;
    }`,u+=M()+`.alan-btn__chat-popup * {
        -webkit-touch-callout: text; /* iOS Safari */
        -webkit-user-select: text; /* Chrome/Safari/Opera */
        -khtml-user-select: text; /* Konqueror */
        -moz-user-select: text; /* Firefox */
        -ms-user-select: text; /* IE/Edge */
        user-select: text;
    }`,u+=M(!0)+`.hide-alan-btn-when-text-chat-is-opened-immediately .alanBtn {
        transform: scale(0);
        opacity: 0;
        animation: text-chat-disappear-anim 0ms ease-in-out forwards;
    }`,u+=M(!0)+`.hide-alan-btn-when-text-chat-is-opened .alanBtn {
        transform: scale(0);
        opacity: 0;
        animation: text-chat-disappear-anim `.concat(ng,`ms ease-in-out forwards;
    }`),u+=M(!0)+`.text-chat-is-closing .alanBtn {
        transform: scale(0);
        opacity: 0;
        animation: text-chat-appear-anim `.concat(ng,`ms ease-in-out forwards;
    }`),u+=M(!0)+`.hide-alan-btn-when-text-chat-is-opened .alanBtn-recognised-text-holder {
        display: none;
    }`,u+=M()+` mjx-container svg {
        max-width: 100%;
    }`;var OA=41;u+=M()+`.alan-btn__chat-avatar {
        border-radius: 4px;
        margin-right: 10px;
        width: `.concat(OA,`px;
        min-width: `).concat(OA,`px;
        max-width: `).concat(OA,`px;
        min-height: `).concat(OA,`px;
        max-height: `).concat(OA,`px;
        height: `).concat(OA,`px;
        overflow: hidden;
        display: none;
    }`),u+=M()+`.alan-btn__chat-request-avatar {
        width: `.concat(OA,`px;
        min-width: `).concat(OA,`px;
        max-width: `).concat(OA,`px;
        min-height: `).concat(OA,`px;
        max-height: `).concat(OA,`px;
        height: `).concat(OA,`px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-image: url(`).concat((a==null?void 0:a.logoTextChatUserAvatar)||iE.alanUserAvatarIconSrc,`);
    }`),u+=M()+`.alan-btn__chat-response-avatar {
        width: `.concat(OA,`px;
        min-width: `).concat(OA,`px;
        max-width: `).concat(OA,`px;
        min-height: `).concat(OA,`px;
        max-height: `).concat(OA,`px;
        height: `).concat(OA,`px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-image: url(`).concat((a==null?void 0:a.logoTextChatAvatar)||iE.alanLogoIconSrc,`);
    }`);var pE=cc(a);return u+=M()+`.alan-btn__chat-avatar.request {
        background-image:  linear-gradient(122deg, `.concat(pE.textChatUserAvatar.background.color[0],", ").concat(pE.textChatUserAvatar.background.color[1],`);
        box-shadow: `).concat(!((ie=(RE=f==null?void 0:f.bubbles)===null||RE===void 0?void 0:RE.request)===null||ie===void 0)&&ie.hasShadow?"0px 1px 3px rgba(16, 39, 126, 0.2)":"none",`;
        `).concat(!((oC=(PI=f==null?void 0:f.bubbles)===null||PI===void 0?void 0:PI.request)===null||oC===void 0)&&oC.borderColor?"border: 1px solid ".concat((hE=(Yg=f==null?void 0:f.bubbles)===null||Yg===void 0?void 0:Yg.request)===null||hE===void 0?void 0:hE.borderColor,";"):"",`
      
    }`),BA.textChat.available&&(u+=M()+`.alan-btn__chat-avatar.response {
            background-image:  linear-gradient(122deg, `.concat(pE.textChatAvatar.background.color[0],", ").concat(pE.textChatAvatar.background.color[1],`);
            box-shadow: `).concat(!((ae=(oe=f==null?void 0:f.bubbles)===null||oe===void 0?void 0:oe.response)===null||ae===void 0)&&ae.hasShadow?"0px 1px 3px rgba(16, 39, 126, 0.2)":"none",`;
            `).concat(!((In=(le=f==null?void 0:f.bubbles)===null||le===void 0?void 0:le.response)===null||In===void 0)&&In.borderColor?"border: 1px solid ".concat((qg=(se=f==null?void 0:f.bubbles)===null||se===void 0?void 0:se.response)===null||qg===void 0?void 0:qg.borderColor,";"):"",`
        }`)),u+=M()+`.alan-btn_text-chat-full-screen .alan-btn__chat-avatar {
        display: flex;
        align-items: center;
        justify-content: center;
    }`,u+=M()+`.alan-btn__chat-avatar svg {
        width: 90%;
        height: 90%;
    }`,u+=M()+`.alan-btn__chat-avatar svg path {
        stroke: `.concat(((tn=(Fe=f==null?void 0:f.bubbles)===null||Fe===void 0?void 0:Fe.request)===null||tn===void 0?void 0:tn.color)||"#171717",`;
    }`),u+=M()+`.alan-btn__chat-avatar svg circle {
        stroke: `.concat(((De=(ce=f==null?void 0:f.bubbles)===null||ce===void 0?void 0:ce.request)===null||De===void 0?void 0:De.color)||"#171717",`;
    }`),u}function vd(){for(var a,w,i,l,F,b,p,J,v,V="",_=+(((i=(w=(a=BA.textChat.options)===null||a===void 0?void 0:a.bubbles)===null||w===void 0?void 0:w.response)===null||i===void 0?void 0:i.fontSize)||15),nA=+(((b=(F=(l=BA.textChat.options)===null||l===void 0?void 0:l.bubbles)===null||F===void 0?void 0:F.response)===null||b===void 0?void 0:b.backgroundColor)||"#ffffff"),oA=+(((v=(J=(p=BA.textChat.options)===null||p===void 0?void 0:p.bubbles)===null||J===void 0?void 0:J.response)===null||v===void 0?void 0:v.color)||"#171717"),m=[`a {
        color: #4183c4!important;
        text-decoration: none!important;
    }`,`a:hover {
        text-decoration: underline!important;
    }`,`p {
        margin: 0!important;
        font-size: `.concat(_,`px!important;
    }`),`blockquote {
        margin: 0!important;
        font-size: `.concat(_,`px!important;
    }`),`dl {
        margin: 0!important;
        font-size: `.concat(_,`px!important;
    }`),`table {
        margin: 0!important;
        font-size: `.concat(_,`px!important;
        word-break: initial!important;
    }`),`ul {
        padding-left: 30px!important; 
        margin: 0!important; 
        list-style-type: disc!important;
        font-size: `.concat(_,`px!important;
    }`),`ul li {
       list-style-type: disc!important;
       font-size: `.concat(_,`px!important;
    }`),`ol {
        padding-left: 30px!important;
        margin: 0!important; 
        list-style-type: decimal!important;
        font-size: `.concat(_,`px!important;
    }`),`ol li {
        list-style-type: decimal!important;
        font-size: `.concat(_,`px!important;
    }`),"h1 { font-size: 2.13em!important;  line-height: 1.7!important; margin: 0 0 10px 0!important; font-weight: normal!important;  text-transform: none!important;}","h2 { font-size: 1.86em!important;  line-height: 1.7!important; margin: 0 0 10px 0!important; font-weight: normal!important;  text-transform: none!important;}","h3 { font-size: 1.6em!important;  line-height: 1.7!important; margin: 0 0 10px 0!important; font-weight: normal!important;  text-transform: none!important;}","h4 { font-size: 1.46em!important;  line-height: 1.7!important; margin: 0 0 10px 0!important; font-weight: normal!important;  text-transform: none!important;}","h5 { font-size: 1.33em!important;  line-height: 1.7!important; margin: 0 0 10px 0!important; font-weight: normal!important;  text-transform: none!important;}","h6 { font-size: 1.2em!important;  line-height: 1.7!important; margin: 0 0 10px 0!important; font-weight: normal!important;  text-transform: none!important;}","h1:after { display: none!important;}","h2:after { display: none!important;}","h3:after { display: none!important;}","h4:after { display: none!important;}","h5:after { display: none!important;}","h6:after { display: none!important;}","h1:before { display: none!important;}","h2:before { display: none!important;}","h3:before { display: none!important;}","h4:before { display: none!important;}","h5:before { display: none!important;}","h6:before { display: none!important;}",`h1 + p {
        margin-top: 10px!important;
    }`,`h2 + p {
        margin-top: 10px!important;
    }`,`h3 + p {
        margin-top: 10px!important;
    }`,`h4 + p {
        margin-top: 10px!important;
    }`,`h5 + p {
        margin-top: 10px!important;
    }`,`h6 + p {
        margin-top: 10px!important;
    }`,`p + p {
        margin-top: 10px!important;
    }`,`* + pre {
        margin-top: 8px!important;
    }`,`pre + * {
        margin-top: 16px!important;
        font-size: `.concat(_,`px!important;
    }`),`* + ul {
        margin-top: 8px!important;
    }`,`ul + * {
        margin-top: 16px!important;
    }`,`* + ol {
        margin-top: 8px!important;
    }`,`ol + * {
        margin-top: 16px!important;
    }`,`* + blockquote {
        margin-top: 8px!important;
    }`,`blockquote + * {
        margin-top: 16px!important;
    }`,`audio {
        max-width: 100%!important;
        max-height: 100%!important;
    }`,`video {
        max-width: 100%!important;
        max-height: 100%!important;
    }`,`img {
        max-width: 100%!important;
        pointer-events: auto!important;
        cursor: pointer;
        max-height: 500px;
    }`,`code {
        background-color: #F8F8F8!important;
        border-radius: 3px!important;
        border: 1px solid #DDD!important;
        font-family: Consolas, "Liberation Mono", Courier, monospace!important;
        margin: 0 2px!important;
        padding: 0 5px!important;
        white-space: pre-line!important;
        font-size: `.concat(_,`px!important;
    }`),`pre {
        background-color: #F8F8F8!important;
        border-radius: 3px!important;
        border: 1px solid #DDD!important;
        font-family: Consolas, "Liberation Mono", Courier, monospace!important;
        padding: 0 5px!important;
        white-space: pre-line!important;
        font-size: `.concat(_,`px!important;
    }`),`pre code {
        border: none!important;
        margin: 0!important;
        padding: 0!important;
        white-space: pre-wrap!important;
        font-size: `.concat(_,`px!important;
    }`),`hr {
        display: block!important;
        unicode-bidi: isolate!important;
        margin-block-start: 0.5em!important;
        margin-block-end: 0.5em!important;
        margin-inline-start: auto!important;
        margin-inline-end: auto!important;
        overflow: hidden!important;
        border-style: inset!important;
        border-width: 1px!important;
    }`,`blockquote {
        padding: 5px 20px 0!important;
        border-left: 5px solid #beb7b7!important;
        font-size: `.concat(_,`px!important;
    }`),`table > tbody > tr > td {
        background-color: `.concat(nA,`!important;
        color: `).concat(oA,`!important;
    }`),`table > tbody > tr > th {
        color: `.concat(oA,`!important;
        background-color: `).concat(nA,`!important;
    }`),`table > thead > tr > th {
        padding: 4px!important;
        border-top: 1px solid #b7b5b5!important;
    }`,`table > tbody > tr > th {
        padding: 4px!important;
        border-top: 1px solid #b7b5b5!important;
    }`,`table > thead > tr > td {
        padding: 4px!important;
        border-top: 1px solid #b7b5b5!important;
    }`,`table > tbody > tr > td {
        padding: 4px;
        border-top: 1px solid #b7b5b5!important;
    }`,`strong {
        font-weight: bold!important;
    }`],tA=0;tA<m.length;tA++){var QA=m[tA];V+=M()+".alan-btn__chat-messages ".concat(QA)}return V}function wa(a,w){var i,l,F,b,p,J="",v=dg(),V="transform 0.4s ease-in-out, opacity 0.4s ease-in-out",_;a.shadowDOM?_=a.shadowDOM.getElementById("alan-stylesheet-"+v):_=document.getElementById("alan-stylesheet-"+v),p=document.createElement("style"),p.setAttribute("id","alan-stylesheet-"+v),p.type="text/css",J+=".alanBtn-root * {  box-sizing: border-box; font-family: ".concat(((b=(F=(l=w==null?void 0:w.chatOptions)===null||l===void 0?void 0:l.textChat)===null||F===void 0?void 0:F.popup)===null||b===void 0?void 0:b.fontFamily)||"Poppins","; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;}");var nA=NA()?":active":":hover";NA()||(J+=M()+".alanBtn{transform: scale(1); transition: "+V+";} .alanBtn"+nA+"{transform: scale(1.11111);transition:"+V+";}.alanBtn:focus {transform: scale(1);"+V+";  border: solid 3px #50e3c2;  outline: none;  }",J+=M(!0)+".alan-btn-disconnected  .alanBtn"+nA+"{transform: scale(1);transition:"+V+";}",J+=M(!0)+".alan-btn-offline  .alanBtn"+nA+"{transform: scale(1);transition:"+V+";}",J+=M(!0)+".alan-btn-no-voice-support  .alanBtn"+nA+"{transform: scale(1);transition:"+V+";}"),J+=M(!0)+`.alan-btn__page-scrolled .alanBtn {
        transform: scale(0.4);
        opacity: 0.5;
        pointer-events: none;
        transition: `.concat(V,`;
    }`),J+=M()+".alanBtn-recognised-text-holder { position:fixed; transform: translateY("+(BA.btn.isTopAligned?"-":"")+"50%); max-width:236px; font-family: Helvetica, Arial, sans-serif; font-size: 14px; line-height: 18px;  min-height: 40px;  color: #000; font-weight: normal; background-color: #fff; border-radius:10px; box-shadow: 0px 1px 14px rgba(0, 0, 0, 0.35); display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack: activate;-ms-flex-pack: start;justify-content: start;}",J+=M()+" .alanBtn-recognised-text-holder.alan-btn-lib__with-text.alan-btn-lib__left-side { text-align: left;}",J+=M()+" .alanBtn-recognised-text-holder.alan-btn-lib__with-text.alan-btn-lib__right-side { text-align: right;}",J+=M()+" .alanBtn-recognised-text-holder .alanBtn-recognised-text-content:not(:empty) {padding: 10px;}",J+=M(!0)+".alanBtn-recognised-text-holder-long  { font-size: 12px!important;line-height: 1.4!important;}  ",J+=M(!0)+".alanBtn-recognised-text-holder-super-long  { font-size: 11px!important;line-height: 1.4!important;}  ",J+=M()+".alanBtn-text-appearing {  animation: text-holder-appear 800ms ease-in-out forwards;  }",J+=M()+".alanBtn-text-disappearing {  animation: text-holder-disappear 800ms ease-in-out forwards;    }",J+=M()+".alanBtn-text-disappearing-immediately {  animation: none; opactity: 0;   }",J+=M()+".alan-btn-disabled {  pointer-events: none;  opacity: .5;  transition: all .2s ease-in-out;  }",J+=M()+`.shadow-appear {  opacity: 1 !important;  }
`,J+=M()+".shadow-disappear {  opacity: 0 !important;  transition: all .1s linear !important;  }",J+=M(!0)+".alan-btn-offline .alanBtn-bg-default {  background-image: linear-gradient(122deg,rgb(78,98,126),rgb(91,116,145));}",J+=M(!0)+".alan-btn-offline .alanBtn"+nA+" .alanBtn-bg-default {  background-image: linear-gradient(122deg,rgb(78,98,126),rgb(91,116,145))!important;}",J+=M(!0)+".alan-btn-no-voice-support .alanBtn-bg-default {  background-image: linear-gradient(122deg,rgb(78,98,126),rgb(91,116,145));}",J+=M(!0)+".alan-btn-no-voice-support .alanBtn"+nA+" .alanBtn-bg-default {  background-image: linear-gradient(122deg,rgb(78,98,126),rgb(91,116,145))!important;}",J+=M(!0)+".alan-btn-permission-denied .alanBtn .alanBtn-bg-default {  background-image: linear-gradient(122deg,rgb(78,98,126),rgb(91,116,145));}",J+=M(!0)+".alan-btn-permission-denied .alanBtn"+nA+" .alanBtn-bg-default {  background-image: linear-gradient(122deg,rgb(78,98,126),rgb(91,116,145))!important;}",J+=M()+".triangleMicIconBg {background-image:url("+iE.roundedTriangleSecondLayerSrc+"); pointer-events: none;}",J+=M()+".circleMicIconBg {background-image:url("+iE.circleSecondLayerSrc+"); pointer-events: none;}",J+=M()+" img {pointer-events: none;}",J+=M()+""+nA+" .triangleMicIconBg-default {opacity:0!important;}",J+=M()+".alan-overlay-for-alert {position: fixed;top: 0;left: 0;right: 0;bottom: 0;z-index: 99;background: rgba(0, 0, 0, 0.57);opacity: 0;-webkit-animation: alan-fade-in 0.5s 0.2s forwards;-moz-animation: alan-fade-in 0.5s 0.2s forwards;-o-animation: alan-fade-in 0.5s 0.2s forwards;animation: alan-fade-in 0.5s 0.2s forwards;}",J+=M()+".alan-alert-popup {border-radius:10px; box-shadow: 0px 5px 14px rgba(3, 3, 3, 0.25);padding:12px;padding-right:24px;text-align: center;width: 220px;background: rgb(255 255 255);position: fixed;left: 50%;transform: translateX(-50%);top: 10%;    color: #000;font-size: 14px;line-height: 18px;}",J+=M()+'.alan-alert-popup__close-btn {background:url("'+iE.popupCloseIconImgBase64+'") no-repeat center;cursor:pointer; background-size:100% 100%;position: absolute;top: 12px;right: 12px;width: 14px;height: 14px;}',J+=M()+".alan-overlay {position: fixed;top: 0;left: 0;right: 0;bottom: 0;z-index: 99;background: rgba(0, 0, 0, 0.57);opacity: 0;-webkit-animation: alan-fade-in 0.5s 0.2s forwards;-moz-animation: alan-fade-in 0.5s 0.2s forwards;-o-animation: alan-fade-in 0.5s 0.2s forwards;animation: alan-fade-in 0.5s 0.2s forwards;}",J+=M()+".alan-overlay-popup.alan-btn-lib__default-popup {border-radius:10px; box-shadow: 0px 5px 14px rgba(3, 3, 3, 0.25);padding:6px 30px 6px 12px;text-align: left;width: 220px;background: rgb(255 255 255);}",J+=M()+".alan-overlay-popup.alan-btn-lib__top.alan-btn-lib__right {border-top-right-radius: 0!important;}",J+=M()+".alan-overlay-popup.alan-btn-lib__top.alan-btn-lib__left {border-top-left-radius: 0!important;}",J+=M()+".alan-overlay-popup.alan-btn-lib__bottom.alan-btn-lib__left {border-bottom-left-radius: 0!important;}",J+=M()+".alan-overlay-popup.alan-btn-lib__bottom.alan-btn-lib__right {border-bottom-right-radius: 0!important;}",J+=M()+".alan-overlay-popup {position: fixed;opacity: 0;-webkit-animation: alan-fade-in 0.5s 0.2s forwards;-moz-animation: alan-fade-in 0.5s 0.2s forwards;-o-animation: alan-fade-in 0.5s 0.2s forwards;animation: alan-fade-in 0.5s 0.2s forwards;}",J+=M()+".alan-overlay-popup__body {position:relative;color: #0D1940;font-size: 16px;line-height: 20px;}",J+=M()+'.alan-overlay-popup__ok {background:url("'+iE.popupCloseIconImgBase64+'") no-repeat center; background-size:100% 100%;min-height:14px;height:14px;max-height:14px;min-width:14px;width:14px;max-width:14px;opacity:0;transition:opacity 300ms ease-in-out;position:absolute;top:8px;right:8px;cursor: pointer;pointer-events: auto!important;}',J+=M()+".alan-overlay-popup__ok:hover {opacity:0.9}",J+=M()+".alan-overlay-popup:hover .alan-overlay-popup__ok{opacity:1;transition:opacity 300ms ease-in-out;}",J+=M()+EB("alan-gradient","0%{backgroundPosition: 0 0;}50%{backgroundPosition: -100% 0;}100%{backgroundPosition: 0 0;}"),J+=M()+EB("alan-pulsating","0%{transform: scale(1.11111);}50%{transform: scale(1.0);}100%{transform: scale(1.11111);}"),J+=M()+EB("alan-text-chat-pulsating","0%{transform: scale(1.09);}50%{transform: scale(1.0);}100%{transform: scale(1.09);}"),J+=M()+EB("alan-mic-pulsating","0%{transform: scale(0.91);}50%{transform: scale(1.0);}100%{transform: scale(0.91);}"),J+=M()+EB("alan-triangle-mic-pulsating","0%{transform: scale(0.94);}50%{transform: scale(1.0);}100%{transform: scale(0.94);}"),J+=M()+EB("alan-fade-in","0%{opacity: 0;}100%{opacity:1;}"),J+=M()+EB("alan-fade-out","0%{opacity: 1;}100%{opacity:0;}"),J+=M()+EB("text-holder-appear",`0%{
            opacity:0;
            color:transparent;
            background-color:rgba(245, 252, 252, 0.0);
            border: solid 1px transparent;
        }
        100%{
            opacity:1;
            color:#000;
            background-color:rgba(245, 252, 252, 0.8);
        }`),J+=M()+EB("text-holder-disappear",`0%{
            opacity:1; 
            color:#000;
            background-color:rgba(245, 252, 252, 0.8);  
        }
        100%{
            opacity:0; 
            color:transparent;
            background-color:rgba(245, 252, 252, 0.0);
            border: solid 1px transparent;
        }`);function oA(FB,pB){for(var $A=[0,10,20,30,40,50,60,70,80,90,100],fg="",kB=0;kB<$A.length;kB++){var CB=0;pB===0?CB=kB===0||kB===10?1:0:CB=kB===pB?1:0,fg+="".concat($A[kB],"% {  opacity: ").concat(CB,";  } ")}return M()+EB(FB,fg)}for(var m=0;m<10;m++)J+=oA("logo-state-".concat(m+1,"-animation"),m);J+=M()+EB("disconnected-loader-animation","0%{  transform: rotate(0deg);  } 100%{  transform: rotate(360deg);  }"),J+=M()+EB("oval1-animation","0%{  transform: rotate(-315deg);  } 50%{  transform: rotate(-495deg);  } 100%{  transform: rotate(-315deg);  }"),J+=M()+EB("oval2-animation","0%{  transform: rotate(-45deg);  } 50%{  transform: rotate(-215deg);  } 100%{  transform: rotate(-45deg);  }"),J+=M()+EB("alan-text-fade-in","0%{  opacity: 0;  } 100%{   opacity: 1;  }"),J+=M()+".alanBtn-bg-default.super-hidden{opacity:0!important;display:none;}",J+=".no-scroll-for-popup { overflow:hidden!important; position:fixed; }",J+=".no-scroll-for-popup video { visibility: hidden }",J+=".no-scroll-for-popup audio { visibility: hidden }",J+=".no-scroll-for-popup .alan-btn__chat-holder video { visibility: initial }",J+=".no-scroll-for-popup .alan-btn__chat-holder audio { visibility: initial }";for(var tA=cc(w),QA,MA,CA=(i={},i[BA.textChat.available?"textChat":"idle"]=["default"],i.listen=["listening"],i.process=["intermediate","understood"],i.reply=["speaking"],i),bA,mA,vB=Object.keys(CA),m=0;m<vB.length;m++){MA=vB[m],bA=CA[MA],QA=tA[MA];for(var xA=0;xA<bA.length;xA++)mA=bA[xA],QA.background&&(J+=M()+".alanBtn-bg-"+mA+" {",J+="background-image: linear-gradient(122deg,"+QA.background.color[0]+","+QA.background.color[1]+");",J+="}",J+=M()+".alanBtn-oval-bg-"+mA+" {",J+="background-image: linear-gradient(122deg,"+QA.background.color[0]+","+QA.background.color[1]+");",J+="}"),QA.hover&&(J+=M()+".alanBtn"+nA+" .alanBtn-bg-"+mA+":not(.super-hidden) {",J+="background-image: linear-gradient(122deg,"+QA.hover.color[0]+","+QA.hover.color[1]+");",J+="}",J+=M()+".alanBtn:active .alanBtn-bg-"+mA+":not(.super-hidden) {",J+="background-image: linear-gradient(122deg,"+QA.hover.color[0]+","+QA.hover.color[1]+");",J+="}",J+=M()+".alanBtn"+nA+" .alanBtn-oval-bg-"+mA+":not(.super-hidden) {",J+="background-image: linear-gradient(122deg,"+QA.hover.color[0]+","+QA.hover.color[1]+");",J+="}",J+=M()+".alanBtn:active .alanBtn-oval-bg-"+mA+":not(.super-hidden) {",J+="background-image: linear-gradient(122deg,"+QA.hover.color[0]+","+QA.hover.color[1]+");",J+="}")}J+=vd(),J+=Wd(w),p.innerHTML=J,a.shadowDOM?a.shadowDOM.prepend(p):document.getElementsByTagName("head")[0].appendChild(p),_&&(_.disabled=!0,_.parentNode.removeChild(_))}function Vd(a,w){window.MathJax={startup:{pageReady:function(){return window.MathJax.startup.defaultPageReady()}},tex:{inlineMath:[["$","$"],["\\(","\\)"]],processEscapes:!0}};var i=document.createElement("script");i.src="https://studio.alan.app/js/mathjax/tex-svg.js?v=1",i.async=!0,i.setAttribute("id","MathJax-script"),i.onload=function(){for(var l=0;l<a;l++)ia(w(l))},document.head.appendChild(i)}function ia(a){var w=window.MathJax;w&&setTimeout(function(){a&&w.texReset&&(w.texReset(),w.typesetClear(),w.typesetPromise([a]).catch(function(i){console.error(i)}))})}function xd(a){var w=document.createElement("script");w.src="https://studio.alan.app/js/hljs/highlight.min.js?v=1",w.async=!0,w.onload=function(){oa(a())},document.head.appendChild(w);var i=document.createElement("link");i.rel="stylesheet",i.href="https://studio.alan.app/js/hljs/github.min.css?v=1",document.getElementsByTagName("head")[0].appendChild(i)}function oa(a){window.hljs&&setTimeout(function(){a&&a.querySelectorAll("pre code:not(.alan-btn__hljs-processed)").forEach(function(w){window.hljs.highlightElement(w),w.classList.add("alan-btn__hljs-processed")})})}(function(a){BA.lib.version="alan-version.1.8.54".replace("alan-version.",""),window.alanBtn&&console.warn("Alan: the Alan Button source code has already added (v."+BA.lib.version+")");var w="Alan voice assistant",i=null,l,F;(function(p){p.Request="request",p.Response="response"})(F||(F={}));function b(p){p=p||{};var J=!0,v=!1,V=!1,_=!0,nA=!1,oA=!1,m=!1,tA=!1,QA=!0,MA=null,CA=!0,bA=!0,mA=[],vB=null,xA=null,FB=[],pB=Ua(),$A;if(p.mode==="tutor"?($A="tutor",nA=!0):p.mode==="demo"?$A="demo":$A="component",console.log("Alan: v."+BA.lib.version),window.tutorProject&&!Cg()&&l){if(BA.project.id===p.key)return l;throw new Error("The Alan Button instance has already been created. There cannot be two Alan Button instances created at the same time connected to the different projects.")}l={version:BA.lib.version,setVisualState:function(I){J||window.tutorProject&&window.tutorProject.setVisual(I)},callProjectApi:function(I,s,R){var X="script::";if(!J){if(!I)throw new Error("Function name for callProjectApi must be provided");window.tutorProject&&(I.indexOf(X)===0?window.tutorProject.call(I,s,R):window.tutorProject.call(X+I,s,R))}},playText:function(I){J||window.tutorProject&&window.tutorProject.call("play",{text:I})},playCommand:function(I){J||UA.playCommand({data:I})},activate:function(){return uE({activate:!0})},deactivate:function(){tC()},isActive:function(){return gQ},sendText:function(I){sa(I)},textChat:{setAudioOutputEnabled:function(I){I===!0?ca(!0):mw(!0)},isAudioOutputEnabled:function(){return pB}},callClientApi:function(I,s,R){console.error(`The "callClientApi" method is deprecated. Please use the "callProjectApi: instead.

See more info here: https://alan.app/docs/client-api/methods/common-api/?highlight=callprojectapi#callprojectapi`),!J&&window.tutorProject&&window.tutorProject.call(I,s,R)},setAuthData:function(I){console.error(`The "setAuthData" method is deprecated. Please use the "authData" property when you create the Alan Button.

See more info here:  https://alan.app/docs/server-api/sending-data/authdata/?highlight=authdata`),!J&&window.tutorProject&&(window.tutorProject.close(),window.tutorProject=window.alan.project(p.key,Qe(I),p.host),window.tutorProject.on("connectStatus",hE),window.tutorProject.on("options",Yg))},setOptions:function(I){Yg(I)},setPreviewState:function(I){xB(I)},remove:function(){UA.stop(),window.tutorProject.close(),window.tutorProject.off("scripts",aC),window.tutorProject.off("text",f),window.tutorProject.off("parsed",YE),UA.off("command",Ng),UA.off("afterText",qI),K.innerHTML="",l=null,Cg()||(window.tutorProject=null)},stop:function(){UA.stop()},updateButtonState:function(I){hE(I)},sendEvent:kB},document.addEventListener("click",fg);function fg(){UA.resumeAudioCtx(),document.removeEventListener("click",fg)}function kB(I,s){var R=s?{name:I,value:s}:{name:I};CB(R)}function CB(I){window.tutorProject?window.tutorProject.call("clientEvent",I):setTimeout(function(){return CB(I)},3e3)}p.host&&""+p.host,(p.position==="absolute"||p.pinned)&&(nA=!0),p.position==="absolute"&&(oA=!0);var GI={default:"ONLINE",offline:"OFFLINE",disconnected:"CONNECTING",listening:"LISTEN",understood:"PROCESS",intermediate:"PROCESS",speaking:"REPLY",permissionDenied:"NO_PERMISSION",noVoiceSupport:"NO_VOICE_SUPPORT",notSecureOrigin:"INSECURE_ORIGIN"},kQ="default",UQ="listening",yQ="speaking",$Q="intermediate",Ag="understood",ZQ="disconnected",Gg="offline",kn="lowVolume",XQ="permissionDenied",Bg="noVoiceSupport",LQ="notSecureOrigin",oE="Microphone access is blocked in your browser settings. Enable it to allow the voice assistant using your microphone",yn="Your browser doesn’t support voice input. If you think your browser supports voice input, please send the Debug info below to support@alan.app. "+Ec(),zC='Audio is allowed only on a secure connection: make sure your connection protocol is under HTTPS, HTTP on localhost or file. A connection over the file protocol may not work in some browsers, e.g., in Safari. Now you are running with "'+window.location.protocol+'" protocol and "'+window.location.hostname+'" hostname',uI="Low volume level",RI="You're offline",aQ=null,hI="browser-does-not-support-voice-input",YI="microphone-access-blocked",NI="preview-mode",pI="btn-is-disabled",JI="no-alan-audio-instance-was-provided",QQ=ZQ,OE=null,zE=!1,gQ=!1,EQ=!1,KE=!1,KC=!0,Zn=3e4,Qg,aE=[0,0],lE=!1,jC=!1,sE=!1,ug=null,PC=0,qC,_C=300,$C=0,An=0,bI=_C+"ms",jE=!0;function Xn(){Qg=ga(function(){gQ&&(zE?Qg():(UA.stop(),m=!0))},Zn)}Xn();var FE="",Ln="",Sn="";Cn()||(FE="alan-pulsating 2s ease-in-out infinite",Ln="alan-mic-pulsating 1.4s ease-in-out infinite",Sn="alan-triangle-mic-pulsating 1.2s ease-in-out infinite");var mI="alan-text-chat-pulsating 2s ease-in-out infinite",kI="alan-gradient 3s ease-in-out infinite",yI="disconnected-loader-animation 2s linear infinite",UA=window.alanAudio,K=p.rootEl||document.createElement("div"),Hn=document.getElementsByTagName("body")[0],lA=document.createElement("div"),AB=document.createElement("div"),xg=0,qA=xE({id:"alan-btn-chat-holder"}),cE=document.createElement("div");cE.id="alan-text-chat-wrapper";var DE=document.createElement("div");DE.id="alan-text-chat-side-bar",DE.classList.add("alan-btn__chat-side-bar");var Wn=document.createElement("div");Wn.classList.add("alan-btn__side-bar-header"),DE.appendChild(Wn),cE.appendChild(DE),qA.appendChild(cE);var gg=document.createElement("div");gg.id="alan-text-chat",gg.classList.add("alan-btn__popup-chat"),cE.appendChild(gg);var Tg=document.createElement("div");Tg.id="chat-notifications-bubble",Tg.classList.add("alan-btn__chat-notifications-bubble");var yB=document.createElement("img"),ZB=document.createElement("img"),MB=document.createElement("img"),XB=document.createElement("img"),rE=document.createElement("img"),PE=document.createElement("img"),qE=document.createElement("img"),_E=document.createElement("img"),$E=document.createElement("img"),AC=document.createElement("img"),BC=document.createElement("img"),QC=document.createElement("img"),gC=document.createElement("img"),EC=document.createElement("img"),uA=document.createElement("div"),TA=document.createElement("div"),Rg=document.createElement("img"),Eg=document.createElement("img"),Og=document.createElement("img"),zg=document.createElement("img"),hA=document.createElement("div"),UE=document.createElement("div"),vn=!1,Vn=!1,Bn=!0,ZI=new Audio("data:audio/mp4;base64,AAAAGGZ0eXBNNEEgAAACAGlzb21pc28yAAAACGZyZWUAAA2+bWRhdNwATGF2YzUyLjEwOC4wAEI4qTpRvIg0Vzm9dWB5qtSee+dV99Zx+l/Fq3cRzpUzwAczEW3K/QeibL/z/o61lFt2+2XCTlsCfHhPJn0NNjJXaYSmaGfiEpxAmgMa8Y2Ku6tMaY2KEd0fh2Lq+1V9QG2AG2X9fz/aRthoUg25mjNoUzfH76Zho4Cf+NoHx+YADSANIAuZgCoAAAAFwAgra8wAABKSk/AIUHOc8dID2qtSdc86r763r7a82c3db4VK9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOIRxP//9ff9l+StBOFQEEIMADrU1esviVP0+/58+1VXjrYUTqI8wqniRIBSUmZdymtUaj50znKCY0MEME2aHNzNhuEHb0MhRkTocVXOwAwa/MACXcksMsAAAAwgASEoo7GegIIQYAHWpqdU8sv9Pv+nt7UrxxgAAAAAAAAAjyswppc3gAAAABVlwgAAAAADghHEnxPFkQQMIcx2IUooUhB58D/n/j8QiSXYbrMqqoH6UR9o49FoWGURDSXZCbt224HuTzw83B/8ZqeLzP6MKrV7m60F8kasq3hbtLnW80RAWCQAEAAAARIRR2I2McUBFxyP9v7/SIkl2ZbndVVUH1QAAAOepYKxFCsoZScK3ra6yEismpEDlxJtTPBoJABMMQDmcMRhnn/aTL8p8ROYkXzoqpkwAABM4hHErTQEDgAAIEnskThJqTnqEIklwG8yqqgYTV/DSPoRrAZ1CAXtWTyKqALkJAayvmk+spUNhRZFUNV6Mzyg7YGJlokaGF4WnZ5fU/X9unfpWvu7NFAFQAAAs/mkkMchiMJrkzUIRJLAzMqqEQ3oUygkpG7mgf/K/FYBrCTnTXKAMTEZ1sIqaGkgm6sO2+pzYVqJBdTmL8SnzOcGRfmYMl7VVKgXTXACdjgCEcSQCpBsACQfyixkGKAe1JEIiJIBWZVUpQMAsYkHDKBsfXlsW4/hCc7iSUneiLJQhIaUWHTYMiWuAmJBDZMMcmAol2GUV+ZwF671Aw+ybevC/QwC4CEKzx1KURCQSARALv4wYqEEgUXJEIRJLAzMqhEHAnTe768EYWipFDgDkYvDk42wsIsUwccDIsoNtD/7Nm6YLEhRZCy6h2XOha33MO8CgBwCEsTZ3wFUAAAgBeixSDmriEIiSwMyqqqooRAp1GNLBSNp5RcTS8l2g7/b+u6q8tBwW57VbLU2oBv+n09/9wj1waNQOE1QpKmzRCrQjaqEd8eIFnXTh3zFhdMAAqqACIfxeixIE1yRCESSwMzKqgqMoTESt4QjZgsGFUtaJEMp8LJAXooj3+3WcyqEp36CI7ACG22YVqKB4zOCkKBSdBARCIcCFOx0wH4bgWEpJh1GyhLkH9z2/xl1V//tz918e3n15zeb/tX3v2r67cWBgyQYDgU9joaw0P20rqBOd9DKSUM10E8XGk+/7tPGGmkCekRgEINDc0Pt9XF3sCYOlyyiAcY9CgAC11Lu50cQwALAUAoMhAAAAIJAAEyH4XCws5EOo2UJcg/unn/G9VP/pz9L4+OvXmuW/759+Onx3OAKuJ0NdeIDTb8D870iFiAfFpRPfgvSHxpAVEcwiiQ3ND7YBSQDA+WQYAxgAAACXUrADAAAFAKAAADAAAAABwIXxP/////33+SIlmJoqCDF4A1rUlytaFjvqoMnx8JFSsLtjG2dw/3SLWQaHJm/f394Rk+Mw9/f3LJ8Nh33ID4zD3hlGT4zB/DzAyLmKeRaDF2YZZYCYDzAADL6AAJNz2MbhBS9gONakuVrSrDegAAAAAAAAAAAAAAAAAAAAAAAHAIRxO/3QLrv96FE9jMzHQQnCLqSPyF+fMkvQVzmVVKEYDOZb+JDkWMmagDNGlV8YVyOcEQtEXaobWdUJHI7bEoppIp7Uiik9SubFIkua4AoohJUmmqAgiFwAAAAQonshmY4oCLqSPsP+v/HnzJL03rJzmVVUAAAAAADw4AIJSKRsBMl0g80mlwVypim1qJmkOEmbnQVaKCG5kQiMbcOV5xOQkmAO8EQAAADghHE5+iwX80gYR0khjmgIupIn2PwiSXYPDKqqCQAF7vZ+YzDhw2cgmc3uruZIFhtd4crrbzCODPCTJKnFQvqS6iHAbu46CoqUyL0pKjZpeMQOaoAgAAAAEE7EOxTUD3EkT7H4RJLjLN5lVVFAEgAEgD2FY0ntXGAt0SRICwvTrCJv1UODqZlaT6AOegWBIromeSWSoxlO9egbXN0dp28QAAAAAAAAEhyEcTQw1ACQAAgFWiGMJQmu4jvOOiRNAbyqqh2ACC3f/t2jRTyWL5jszVMifzz2rQdYnkhuwttkp5U21jyAhGa4DBAgogkJK+R3TBrSs5iKAYKv1VngTyw/WHItS4I6hUIFZsYUBBqSJ3z10iSXAbzKqqAAJFhJME0pWpkXar2uMoazjdI2uIq7baa8ZyK25EYK4dkuGiibKae+FcpExR6WRZAAIT+9rZ7IpCs5VkWACoAAADiEsTF8QQaQAAfzYjBIFUuIQiJNAbyqESYfGhCtCrwVPBz816cYA0ZADmNLmkNEN0LjyfLRa87M4vMq81Q21YWHw45SqEAA/m9FCgILkiEIklgZmVVUAABFuelUuPVDQ+rz7vT3HFwwUJ0TnTk4KS1Z4tD+aa8S/y5azYVNW3N5twoAEkAAAAAAcIU6bOYfi2TDm0zJBxZolA5/1tl67HWTk1eh1h0n0FoxKZVPOCQZxDTU+0CW3yHTpHJ6Oz40a+kOuj1D8cs5yO9xQg4qAEcnmCAoAAHBiU/Q6JunJ8aS9dNc/y+nNrh52cyIcPxODm0xQsSQcWZIwOWqy+vQ85OzWtA+/fthc2xqKAAAAAOwHWAAAAAPK4AAAAAIAAAAAw23cSfXeM9zAwHurwCF8T///+3p7/kkJZieJgkACa1qtW4qXIFUCgUFQsMY4j8DKUDAid5YtPTqWk2ZPv7wj4+Gwn39x8fDY9/eE/x8Nu++gD4yGCd0IZ8VBONyn/I3vBdONoMFdQwWsxR4AASTlsUjGgTABNa1WrrUnGay6qgAAAAAAAAAAAD+N44PeAAmIVAAHIRxO/oBQPAOeDEtkE7IEoUakfl/5P/H8okl6ePKucyqEYG9C2bdNxT4AosQ4eHIWhD1zGBNoApQpOuMLroxwolNBCLnWWitpjOFotNq1trCaHnkiMp+PdKWittvQdEJSgCtRBOaxkhkCYJNSPl/y/4/WIku2WzMxigAAAAMCMGjOADF7n7S7MQJqpGpU4fGyKZQRGVARnsF20GKIIDMs51uwUFLEBfDABMXs8CuSzdut04VXpdnUFwAAcCEcTzynZ7iAUg5QKWOZwk4knp/n+30iJLtUbrMYoSAXWl/XeS5cNcA7J6r0w/vB3NZc1pQkBIC0bEUh7JjUUKJ5neIMryQmZRnrqMaecRXAXFARAAAgpSSGOKQg4kn2H6oiS4DeZVUoAIkAKEhTE7zBC5IoMSJYWGN0QacZ4uxvRwAxAWRCDsISUUhaGFRDu1F+V7Y4WovctM1RBPziIAAAARBwIRxMN4Oh4AACBV7KE4Rakj15tESS4VG8yqqg7AAx3yAVHLSKXAYSNCQjalJOuKhREZzVWg7ErQLGxYsHZxJwlc7CeYwtSEQaWNEpGILROvXhIALIAAAARAgTYqkGKAg1cT39rQkTQG8qqqqAIBIizGVKZ3EwRe47owRjUUzmoVa977M/BuJxuHc27b0VZpAG7O6IFJPWK2myi1ly4AAAAAAucCEsTQXTNIAAAfzgiBKFF3EQiJJAK3VUAR8rsmtxc0W7XRaxLVlVVpHBpuTfSgnlsimhYX0FUV02T/opLsyJPCyuSuDrAZAhaQg/m9EiUKLkiEIklgZmVQA8qAwkTdVrwVZWr0cpr4MY/GhqLEJYZtRWCpsjTZRL7MEMKbfTwi8oBQOAIU43PYfiqPTG0xKBiNpCTDj9vE6J1P7H8/x7enm7l/bb6k6DuWY3f9G2fZaLnSgrpIAASiB/lsAVlx0w3no8ifVk8qMVZlSc20aBnXlroKFsywA2AG0gAcyAb+wLRxjn5CNQ4T3KQ/jbGB82UHBACcQgB8D8TD7Y2mJUKRtISYcfp4nROp/Y/n+Pb083cuvnb6k6AAAAAAAA2AAAAA8iAAAAAABOoBgAFgAAAAAAAAAAAAAADHOAAHKQ7uBgAAAAAADgIXxP///8/du+LRljGgOHXx+ia+05A/ddee/IAoNCjp3vRoKaiFBR235qwu2Mc+3SGxAbOpp1JjwyQP4v4fwzP4/aLzeJTH5IpQMOE826HHFGOP6Qph+0+OECaVgGRQoAElAAAARhskNhUI0Bw8/X8VfH5YB+rWeeeNAooAAAAAAAAAAAAfw8WLtyn4ZSh/HsAAAAAAABEABwIRxP6/6FdxOOCVtjETHE4RakiET9n/L/jr97MZmVVKEFQLYCLrsA1UD3NgiA2cS0qYxzHjwDqRAtJ0rhetKCh7Jr2ekSGS2mclwhLyGZa5KQMKicWOhwdJueC/tgEZR2MTkAABUBK4gjYobGImMaQg1chCPy/2f34/Ww3uqqqUALsgAAAAccUQDRRwJKLzuQQ4wznklMiqdhAleJuNU9xzZVPCSINtHQ1c958XBKcSSc4ztdMAAABQABwAAAAyxtb292AAAAbG12aGQAAAAAfCWwgHwlsIAAAAPoAAABwAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACWHRyYWsAAABcdGtoZAAAAA98JbCAfCWwgAAAAAEAAAAAAAABwAAAAAAAAAAAAAAAAAEAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAfRtZGlhAAAAIG1kaGQAAAAAfCWwgHwlsIAAALuAAABUAFXEAAAAAAAtaGRscgAAAAAAAAAAc291bgAAAAAAAAAAAAAAAFNvdW5kSGFuZGxlcgAAAAGfbWluZgAAABBzbWhkAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAAFjc3RibAAAAFtzdHNkAAAAAAAAAAEAAABLbXA0YQAAAAAAAAABAAAAAAAAAAAAAgAQAAAAALuAAAAAAAAnZXNkcwAAAAADGQABAAQRQBUAAAAAAPoAAAAAAAUCEZAGAQIAAAAYc3R0cwAAAAAAAAABAAAAFQAABAAAAAAcc3RzYwAAAAAAAAABAAAAAQAAAAEAAAABAAAAaHN0c3oAAAAAAAAAAAAAABUAAADgAAAAjwAAAKgAAACqAAAApQAAAKIAAADaAAAAgQAAAKoAAACnAAAAtAAAAIkAAACjAAAAhgAAALsAAACkAAAAowAAAIMAAADDAAAAmQAAALsAAABkc3RjbwAAAAAAAAAVAAAAKAAAAQgAAAGXAAACPwAAAukAAAOOAAAEMAAABQoAAAWLAAAGNQAABtwAAAeQAAAIGQAACLwAAAlCAAAJ/QAACqEAAAtEAAALxwAADIoAAA0jAAAAYHVkdGEAAABYbWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAraWxzdAAAACOpdG9vAAAAG2RhdGEAAAABAAAAAExhdmY1Mi45My4w");ZI.onerror=function(){};var Qn=new Audio("data:audio/mp4;base64,AAAAGGZ0eXBNNEEgAAACAGlzb21pc28yAAAACGZyZWUAAAWbbWRhdNwATGF2YzUyLjEwOC4wAEI4liJvGTaBRNWgpCwBiMCjrsceWmt/FX4+tazOAVVgZQfdya5JhBsOJ3/kOLuaScl8ydUMZk+oCXDAQR4AwMDdP/MDUUJNh9sfnQJI67rzSfO+O/wSYeAkr2hw/AiHzSA2iwAABVoAAATSEQAWBwACwAJq0j8oENVh51BL41uvM13rzrd1VazVblJSlB968g89yG7I+jnst9OXR9sLNIq6QTNdwTAiACMbS6bNcogBd6uHq2bP2+9v8W4RgZ9J87InCwEgAAAWoAVCYE0wABICYCwSCJYARiABQOAhHEhXf73AAAJuzqc3hQAPh5nPtWt3xrF1EDTThAsCZ35emIYzsHbWvviUi8B6TR6I3FEXS27pXovDTi9vXdk9kY83K6Li6LESt19EOrWbdod7lUhQIAAJazuQ7g8AOHSuNY1XF5fHMiqBjnJiSEKXL9Gg066fyhzOdsPOiq4JVfeSAalwAACoAADP9I7P8VyuxAAKAFkyYAAAAKuAIRxPH/fokAACXs6kGYTABrzk6a56yvbx7b8gTbkJGTKRMwZs+oNhUlJEbiZbqKHWI/1XrNXxFH4+/4rXvevonT+RC8L+qkBfR39U5ApqpAenmrOx5wgTd6xnMwjglbQdwkAB5ydVrOKrzmmgDL02TydTcY7HxwkJFi4RS2Vwz8aYywsACoAADHC1AQXlwqZuxhilTKAF1V4JyJwsAOAhLE6t////CEJi0lIRhMAL1qTV1cvNVqRUG/e+CR0TMHKNkqjy3ad0D7sSMbq7CXo+u3OvRI5mjGY5lPPQ6kIynobbeJBzOu4xQhoBJZQcw54odEI3Bx8NLTQoAAExaDsEwAnGrai5eaSXAJaO9ay9zDzSeUvgfsrNuf2qrZiR60AAAAAAAAAAAADgIU7ZOQfgPxcRhxbikgn261Y/Z8XoA5N+b6U1DtrC2jv2QJmqLIZrCkNBopcnyH/JG3R7bW52taiziWookX3P9k3HUqdzD8B+KxINaqsigH7ceYU/ida6SpStjzj4PNrxhLba06ZYIKWPr84KCGKhkIkq1T3t6yquOKkcdlLKNjiWzUbtxKauaRHmVDPwVzP2c35acUOAIXxPIV/+8AACWtQ0CYAOOKV8ZVr6y99SgzBUQSAcP9VlkmanC8ykvqjcWDiztAmWZ1i6WlCdF0K052WpCj8LWvUxBc1t/PZvCN+/xVgFxmM5eoQAArKWg8hAAGlp5VdXL1VgBM/CAWXJzbtdgq4kNkqDm7hm+6Ij7YH0femapCwAAAAAAmXrSe4FAAAAAABC5yEcTy3X++ABAlLQgxqEQAXON+Ul5eq49fEFD1zBIxKViiEo2PTaYQMJMMHxUWUFZ2mUDgfxhAzn/iY8YUfqVj25fPC4xpq/CNv8VD4mmPzwyhvtSzGKDBvmtgpWNJiCICVggrUXBK2g7BMAGmnnJNZeq676uqDv3f078fLYKuyQ0z/Lr1Yx381ass4E+MCY54AAAAWlk4JAAAawAA4hHEo///93AgJi0k8UBEAHm61xS5remmhljsjmck4t2n53zihd/FMh54rUP4IigM9qSQXshl7ObbJMP7XpqWVWARSkTKnm/NZIO1GF/1iQVW68fvVzu63sz8JaJy2EUirqAAInYsmrQNgmADrUmkaVwurlhYH1LVzlzX4KLE+3OsxUdPRiWJAAAAAAAAAAE5EQABwhGogf/////x1JSIQABetS5L1xllD6Lkf3uE14UyZQQs1HttutUitG2UFsarRLNRUzQq1kKhZOw0Do2JrSsR0FFUzQpKaCkpIKG0Do2g0NsWad60dCTkDwAXrUku71WiqH5vx+zUYwk9rInJSyUnwmEAAAAAAAAAOAIRAEYIwcIRAEYIwcIRAEYIwcAAAC5G1vb3YAAABsbXZoZAAAAAB8JbCAfCWwgAAAA+gAAAEAAAEAAAEAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAIQdHJhawAAAFx0a2hkAAAAD3wlsIB8JbCAAAAAAQAAAAAAAAEAAAAAAAAAAAAAAAAAAQAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAABrG1kaWEAAAAgbWRoZAAAAAB8JbCAfCWwgAAAu4AAADAAVcQAAAAAAC1oZGxyAAAAAAAAAABzb3VuAAAAAAAAAAAAAAAAU291bmRIYW5kbGVyAAAAAVdtaW5mAAAAEHNtaGQAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAARtzdGJsAAAAW3N0c2QAAAAAAAAAAQAAAEttcDRhAAAAAAAAAAEAAAAAAAAAAAACABAAAAAAu4AAAAAAACdlc2RzAAAAAAMZAAEABBFAFQAAAAAA+gAAAAAABQIRkAYBAgAAABhzdHRzAAAAAAAAAAEAAAAMAAAEAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAABEc3RzegAAAAAAAAAAAAAADAAAAOsAAACdAAAAngAAAIsAAACWAAAAkQAAAJ0AAACTAAAAeQAAAAYAAAAGAAAABgAAAEBzdGNvAAAAAAAAAAwAAAAoAAABEwAAAbAAAAJOAAAC2QAAA28AAAQAAAAEnQAABTAAAAWpAAAFrwAABbUAAABgdWR0YQAAAFhtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAACtpbHN0AAAAI6l0b28AAAAbZGF0YQAAAAEAAAAATGF2ZjUyLjkzLjA=");Qn.onerror=function(){vn=!0};var MQ=new Audio("data:audio/mp4;base64,AAAAHGZ0eXBNNEEgAAAAAE00QSBtcDQyaXNvbQAAAAFtZGF0AAAAAAAAEXohTMaAB//+fl/BB7eRCgV2mzE3qLQC1u4rDx0KkHPyP1u9BFKZpQkBB8EicZPF5QlOkEJ0CfxejbF3c+XEnaGMrrPIi1pFYX7RSRwfPCfji+Rm0yGDwXUvEbQDhsh2jUC3FkfyaOAfzkXvoQEqnC1FecwjgLVauoVSOWRDynF4XD1zKtfD1DCtfFZSrh98VEfFNJRghlwCehCn5OPSGuv5OW92wL6xXijBoPoR7iE7gq1Psxwd8XKRPwoaKeSNdlSVhTX3MJ0rTBlYIMMspkJnTNIQT1DMAVDDua4RiI33A9Bgso4voe3qbITeimbtNGJEKK3sIjpv14j7p5egilM0oSAn0vkZDH+NyHnXnJPuXnYn4RQQ47xIhprGQaZPAxCCI+PXymDl7blk2fSrBGW/RtGkHDsFCfZZnbOqlBqXrEoaglwjsBP0/81CHifxES7HtySnEZOCI1REkxruZ9h56hax83BiQV0uKLk2G2m2OROyNbBdMEgfGix5wKADUIpkBO4OoOnyb/URHgTSIvUpNkUivz4T40/RMpF135VpOcVi/jaiZkjUTRrzxqK6Um1gYb/vVhfr9VGpnvApXXcq7lVLPTrChM1tMzGeXoyG8hTagEkMw6ZaE5ERc7DQSnE5up6NxLY4gxG+MRABwCF6FGW2B2JhWGSm4jkrn5Pp7YOAIBQC2jq5AHE4l0m5hEQ/8vauaadaV6Rig03RaDMTNhQsLttn2EhHqY+X3Vi09fZuLsxQ6ctFn2fZ3NqSZLKp7maonEbMjAQd46NtmKuntwEGbzYzIVaVpYYjKI/xtGGCpGrjjCDHHi8X6x5qdfKRBYtAvk9FOwaMAn1Hw5StArWbfVLAXvY1ok4xaFbVqVqIhBMClwFKEAAAESQuUDYqDFZqVtXq/4fr56UQOFAFAK3N0z3Txb+17p1TCNJfVvWvz35LZzj8Zz79VIlSRdD0j6zj0OPK2BQfisWi13A5qpo/cvGvZOxf2vNNkqFPaS2N2Vsbt6tjkYDvvvdOjcw2y6ZpkqVVVZVUUtFmpyUWWNCtOJ4shO+7CR3E6URA6TFykd1ADamZJkB3d3rmOw6F4jazKsUzUN+T3nxqhzyh3qx4pwspSnZGTenE98n24zulbEnAgzTqJAWBYC1FVQJViHAhGgj98H///I2Gk2IyWKSIGwkGQkFwkFhIk68qHfyeeEFTyQQKALHxdRAdIoD4QfN9RmuCzV0ano4IIYQkMBLYw5UsuBOd2vYwha4Znoka6T10PtualGszgHPwKlU8/+2wLSGdRh5MxAWArV7MqAY9P+fe+LyuYpn2vqGL6trm2yLxwG13W2cJ3s/fjgpgSVnV3GJoCu4G1jsZoKqVJaCe5MV+y1hERS3hwy94k2xAv/net3ntB/4j9M5gQekdh6OsLB86SKxWRCBOqSBFMaviCl+H3ffUGS3jDY8VEFAbu8dbVHYZIwqCwkceRKV/R+66J0LASgAs+haA4Aw76UDgKJbIpkxhRvKizCNaix0SUwlxHjJCc1zDinkWRn3BKOykJBQt5hOOXyeSspyC6yjO0R11fRvvojZ1CjCkdKDAzBTQyKBreiARne+wEpYRim8EBgivVbR9XRhWqRtwZqMyOnLRchLUivXL0evSiKIQ8/EedgmCROhUA6RgN0PuXCiiNavaTJ78D2o6B7MxCmgroGewObQy5e20Vr4dFhy56RDX2fjofPSxrNBehgIBqIIa+T+l6HdgbanfByEaFFWOD2IyWKTEFwqRgoYhjQk3/Rp+uE4FwEKABLhUwjLPhLZq4TayevWHTW9Wr1waHfBDxqRl4D4dKUF9E9hoSxGo5/KSjwcvDFGCGRNjLKotWpO//S+xTc5SDJalVLHg/6HTKOCnO/NKkVhqfRxGsb0u4jWdKVUfz5b1E7gzwcYhZqTupGdbToNrUvFzgbHuZ2AVAOP2O7lMW7r4s+qBBiNGTzxXQ5vY7climkQHn2zy3M0KkNsoLj2yZFujsvyZoF13aFQfeJ25GGWUgI2wweyCSwudFsFCIu1nj7D6scDgEAKDArr2wfQrMgi+Fy5y/Fs1cjSMsi5NKRu9UIx5OXSgYxCkwR99kgj98ggDdSalWlfV/g4L5QVOsTVYTzzk+TGWrdDiZbKs3ld4n1BoVDKaYPhEUYVkSg+9wP1dfD6LR5yC7LwgU5wvcC+JdOUqms8TFBs9Q0Ob/sjAusvQyrjsZBJnPBlTQOSiwcrd8IpqFkI7oaBA3M84abyu3AUoE1Bk4UhJ7NXutUf8El2o7vwhGgj78H///IWwyWGSIKgsdEj+XK32D27HVxxgAABLHOJvCtjAbsqA6vfq46YbDRcLRAMj5B2lJnMiVSHjocCGH+H6dDaEUbRFMkrysRaKkNeMyq52F+q/JuyNFPVMPzpnhKkAz/7wjkGViMDc4VFIQIHb3ZQZw6PDkbVJCRcYkl3AEUEUANDM0oeFYol7QgzMIcjoCwFFUAwjkqMeszwNW40jpbVXI7PD69wiOkWvFerPV+QlR127inp+RwZbXHNMiV0mX4/HyswzrlSPOO9pVvMZ71+WlJSQBNyWut3h7GxLKJLDJWEkAho/4D+cccCUQJQAJZ2mTwkjQbgl4Drov1KDxKijrq06ABOLJIWM8SoDfRYMYW6GG7xoAvMItlphhOvvz0WpOf0P2HQNG4oL2q4Cpt4GTf45UioVRHlYk2Bux2AKFRLAIN3j3til3crhCfCLR69bYx20K2JIomzfmh3X2PB1JIRGm+Jg2+dE/Ixc4ZCOX51ZfWaVQ5cxEWlKmpg9QGhCms8XZimgIizxKkR8DC8Sv/gm5xBTkbzh3Pr6BbvwIRoI7xB7OXy1sMlhk7PILp/I5P6D+WJ7F89b1eXWcDChLy/QloYAzYoYfNDzjXJFUxgLAANaiZhy7GOFBfRPa9r2Ywz/5lUnmSKJDQyx25yy0NT1T1LhxCpiYvLGsKWyiI9JtWMvbXUC+RO5jABJmYPo10ED4OR2ikapTrZTr+dN+x9luN8+02c3kjEomW7zSWvup51yWYA1l+RpcZrXy1BdAEU5m6syGB1y68Nc+TfP48k3VNP+c6R1P5cWGMoH0H7dhyVyC8uz1c++mxe3d5klx2bJ3sncJbPJZdNfONtVwWroqCkYnel0kZ0BzcTg96EkpHbQCC3jIwoyAjLGx7FKULAmJAkDAWGgToXh4HTL11i93XG9MlRKjYqeGSglpKON9P+W6RoYusLfMwAOMSiSCXWKxPDinIBOndwUmrwxqz3T/+vS3jUS25axUbPH3o1raefpvMlDecmjWk+KVMeyAdyCYbkxHVsANzdNSMiGyTKCkVfenHcooJwDpj67gmFjNU0+geOug+WMoEgT7qKjFY6gvA5iGi88jFXvYgRQUaEro2njsxeESnoOymhCpV8qAKYwQDQRqJb0I3onQWTOQeL6yJX+vJ4BVTHKfTM1AwWOyjxJ1In3WsEiqVFMsOGnbuya+fvK2KstjYb4jFmeqVYJ7aym2UeNmXd+IRoO//i926x9idFiYlhdDOUJrhdtuTXW6OM4osq6rWKgEvKsxj8UIr37u4x2bey34cuAxhyqEjkLVTvaRgLsOKhIbvVLbASQW9czUVC+lNTnOGlJGzfVXoVMtTtt9zF7ZXTUz3VF3N3l3W2r12Wd4GBpc5JjOeblMxO5FKKgp1WDQFBQ74TaAUgMSNbbyC0KdQyE0S1TUcROxcgWZa8bnYgrDSQFTBkIIYINB0hLNzmGrvtvkWrDO2Qp1GCmQCUt6olVNQJSJuthTgE6EbAMErCbpOo7NnQ5seQzrbS8mV9M1VE5MU63g00KN/Hq7EI8nzLrZZ8V93OOvUQCPsansREsSCgSDgKCgTGgKBYKBcGrDweQkzzVWm9MXUq+eMEzEihcLj95i+eM4RfP22CSWRTBI8C5pneFmkYDuDZ12GSMgsK1hrQ4xg4einiWJRnGAHWrgEvpNLAHPkdozM7LvwVtukei8FxaE4UVpyiQ+Oyem/N7ZxcN/20eYuPitICE85F0MJJ4JThIkvEq1qzYG3hR11awmeUbnNwcEQinIorJnRHOuKUr65E/b7CuXUlcI9LsF9pgcqC8rtk6T5V3rAyX6K+NlJxPgtVVCpIUtLT4SjXiFNSqC16Z46ntA4yriETRbbyoqEYp3r1TNvp51t/Gl659bvwhGhRFlYtiYlhYcBYaGZKhBoPR1d0sQVaoIKAkOmRhz4jkRbRzgzGjTzWc+I4GmYPWfiTK3nSsAHyCKnlHfSt60uyNDwXoqa2BzgKGaFcxvWE0QA6hQHDOiFJainWQQ4rUP7V0glyb5LxCrpoHvvoBYPCFcctCUE4/8J2XmaZK3hY0ECA+Lz9H92PsciSRWMjdYs9NgziT3tDjU00xiYDFeE60wVwQAPZSriCK7WHSBIyO72LcU8oDSrGCex5r+CzXyQLtC3TyRXBWB33QbtQRWmVijLaQ23k4ZlPah2O4VFGt44ot8NyCIsZGsYkgLWMIb6pRwBd4tKSgSquqBIZPvsV0u4CtKrjnhFOi5GwYJJ3RSWwwdBCRLwv24SMH9ewRFRTEUpWFretjNRk3IgoaqTVz5WhWglCUusioRtKs2dmNVZKiSxSbLORpLFI0QAwN1QnK65nPmNx2Q5xesHWkBeMXo2k0FbQApmM58iORRECfi5izmIuQ5znYUK5FbfK4kklyBdD2AyizuwVSXRK0E2BIypEYwMzJLFIvSMEKmBODsUNEyxYwETrY2gIGIjI5j5Eiw0XtgyjIBFTc8Pp3bjghGhQ9ihFjYdBaCHAQFpS7CggFQBAgrPznO+HU4MWDUxhEngvuwAUSYeeLrr2a1VEKZx0Yj4HD7laJEogVFr8zqrAbojZPQ4z9V10sHDH96pTvtZ4eRZykhQJgfKvxkBFJgWBeEKcQMaII/SigpQYHNBwEEwhBXa3UnIaqoZWsMGYDmOWzNtokRWEgJSMllAJAK8rwMLaJG+LXGBG6Tqb7aKoapzNkJN2v4+uspoXomgSEAAczaTfM7ga0fR9zokgE4gwb+k/12kn5jxLSutL2YF8xtXNWxdrchWuAJTvD2JUWISQFiINmIQAGL4DrkWKgFIFmCmc2g88+fPHlqrBAB7+lE8BgbFlKgBiTj7M7pCMPgyI5OCGCQmKzrQSgkV8ca5EHyLHt+Kh9APUrLAz5qXMJDQsDCy6aWV82Aicrzi5ocr3U+0AtR7IatFe26g3rCqSsNEhMUWXICUshQZwNQPbMMBlYySm4OhLQTmlxWiqoYFVSIAaCSxrpgU4rCUglct7LaCwLWwIsNBKqktGTSTZcm+DQLMg+riPttNf9gJF0l/lR86H9N1Ox1uf+gFC/W78hGhQ1ihEiYqIYJBYKEYSGCpeK2vhKRnAVKRGWOQRu1yA8D+x/NRe94rS178YwI4qZoD3r9j759PdF/gilKoLfwtaXKap7rtY29dp7srocBXqD7pd554++DSmqMtYd3e0al0mm5l4uZOl8wog37m8XeNCc7lTKwiQNqMzPm9Ld2oAuHxOm9LuROd2ak97lMBnxePslqa4T6qzVzFTqwLJSIaj0xCMRkjVNdkmEvo2ki3fBMSAAel4PH9eU+VCvc07fICtLcOh4LfbOORavbs8/kiLotbu+goc5KUbu8HY2Io7Ej2Cg2OggNoBYQqyZYBgEcAWfFXDOosKfbYfGYmNToNAzt0ZGlE1WsmBwMbqdKMqRfpkITR2OqdWCpVMaXTpay0xdQs3NExg2j4G+3e8co3+B8khh6SuM8XfCSDis0r0EAeXXXn3KUprBDwCCQem/qv5/nwyPkHlau60GaF7gBIAZxh6rxF2mdb5JFnxNZJwK2BujWdSCcVIq0EgODoZ3CgcphaUZCeMJHVbUNhWhpkJzY0CLYERSwdJC7XJWF25yUexFYoLqnfgAAAONbW9vdgAAAGxtdmhkAAAAANfIAsvXyALLAAAD6AAAAH8AAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAfp0cmFrAAAAXHRraGQAAAAB18gCy9fIAssAAAABAAAAAAAAAH8AAAAAAAAAAAAAAAEBAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAOdGdhcwAAAAAAAAAAAYhtZGlhAAAAIG1kaGQAAAAA18gCy9fIAssAALuAAAAoAFXEAAAAAAAxaGRscgAAAAAAAAAAc291bgAAAAAAAAAAAAAAAENvcmUgTWVkaWEgQXVkaW8AAAABL21pbmYAAAAQc21oZAAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA83N0YmwAAABnc3RzZAAAAAAAAAABAAAAV21wNGEAAAAAAAAAAQAAAAAAAAAAAAIAEAAAAAC7gAAAAAAAM2VzZHMAAAAAA4CAgCIAAQAEgICAFEAVAAAAAAI2cgACNnIFgICAAhGQBoCAgAECAAAAGHN0dHMAAAAAAAAAAQAAAAoAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAAKAAAAAQAAADxzdHN6AAAAAAAAAAAAAAAKAAAB7gAAAXUAAAG7AAABkwAAAaUAAAH+AAAB9wAAAcIAAAGzAAABqgAAABRzdGNvAAAAAAAAAAEAAAAsAAABH3VkdGEAAAEXbWV0YQAAAAAAAAAiaGRscgAAAAAAAAAAbWRpcgAAAAAAAAAAAAAAAAAAAAAA6Wlsc3QAAAC8LS0tLQAAABxtZWFuAAAAAGNvbS5hcHBsZS5pVHVuZXMAAAAUbmFtZQAAAABpVHVuU01QQgAAAIRkYXRhAAAAAQAAAAAgMDAwMDAwMDAgMDAwMDBDNDAgMDAwMDAzRUYgMDAwMDAwMDAwMDAwMTdEMSAwMDAwMDAwMCAwMDAwMDAwMCAwMDAwMDAwMCAwMDAwMDAwMCAwMDAwMDAwMCAwMDAwMDAwMCAwMDAwMDAwMCAwMDAwMDAwMAAAACWpdG9vAAAAHWRhdGEAAAABAAAAAExhdmY1Ny40MS4xMDA=");MQ.onerror=function(){Vn=!0},MQ.onended=function(){Bn||setTimeout(function(){UA.skipExternalSounds(!1)},100)},MQ.onplay=function(){Bn||UA.skipExternalSounds(!0)};var SQ=document.createElement("div"),dQ=document.createElement("div"),fQ=document.createElement("div"),GQ=document.createElement("div"),uQ=document.createElement("div"),LB=document.createElement("div"),SB=document.createElement("div"),nB,ME,xn,Tn,On,dE,zn,gn,En=!1;window.addEventListener("online",Kn),window.addEventListener("offline",Kn),window.addEventListener("focus",Td),window.addEventListener("blur",function(){});function Kn(){navigator.onLine?xB(fE()):(UA.stop(),xB(Gg))}function fE(I){return I===void 0&&(I=kQ),J?I:Nd()?pd()?I:Bg:LQ}var Kg={tutor:{btnSize:44,rightPos:0,leftPos:0,bottomPos:0,topPos:0},demo:{btnSize:p.size||64,rightPos:20,leftPos:20,bottomPos:40,topPos:0},component:{btnSize:p.size||64,rightPos:20,leftPos:20,bottomPos:40,topPos:0}};function Cg(){return $A.indexOf("tutor")>-1}function Cn(){return $A.indexOf("preview")>-1}nB=Kg[$A].btnSize;function CC(I){return/^\d+$/.test(I)?I+"px":I}BA.btn.zIndex=p.zIndex||Mw()+1,dE=BA.btn.zIndex-2,zn=BA.btn.zIndex-1,gn=BA.btn.zIndex-3,BA.btn.zIndex&&(K.style.zIndex=BA.btn.zIndex),K.style.position=p.position?p.position:"fixed",nn(),UE.classList.add("alanBtn-recognised-text-content"),hA.classList.add("alanBtn-recognised-text-holder"),nC(hA),GE(qA);function nn(I){var s=I?Df():null;s&&(s.orientation==="left"&&(p.left=s.x,p.top=s.y),s.orientation==="right"&&(p.right=s.x,p.top=s.y)),p.left!==void 0&&(EQ=!0),p.top!==void 0&&(BA.btn.isTopAligned=!0),EQ?ME=CC(p.left!==void 0?p.left:Kg[$A].leftPos):(ME=CC(p.right!==void 0?p.right:Kg[$A].rightPos),On=parseInt(ME,10)),K.style[EQ?"left":"right"]=ME,jn()}function jn(){BA.btn.isTopAligned?Tn=CC(p.top!==void 0?p.top:Kg[$A].topPos):xn=CC(p.bottom!==void 0?p.bottom:Kg[$A].bottomPos),BA.btn.isTopAligned?(K.style.top=Tn,K.style.setProperty("bottom","")):(K.style.bottom=xn,K.style.setProperty("top",""))}function GE(I,s){CA||(I.style.zIndex=BA.btn.zIndex+2,!NA()&&setTimeout(function(){var R,X,P=BA.textChat.defaults.chatMargin,q=I.clientHeight,$=!1,aA=+Rw("top"),DA=+Rw("bottom"),fA=+Rw("left"),YA=+Rw("right"),PA=+TE("height"),eB=+TE("width"),BB=!1;if((aA||DA||fA||YA)&&((aA!==void 0&&aA+PA>window.innerHeight||DA!==void 0&&DA+PA>window.innerHeight||fA!==void 0&&fA+eB>window.innerWidth||YA!==void 0&&YA+eB>window.innerWidth)&&(BB=!0),BB?$=!1:(aA!==void 0&&(I.style.bottom="",I.style.top=aA+"px"),DA!==void 0&&(I.style.top="",I.style.bottom=DA+"px"),fA!==void 0&&(I.style.right="",I.style.left=fA+"px"),YA!==void 0&&(I.style.left="",I.style.right=YA+"px"),$=!0)),!$){EQ?(I.style.right="",I.style.left=P+"px"):(I.style.left="",I.style.right=P+"px");var wB=(R=K.getBoundingClientRect())===null||R===void 0?void 0:R.top,TB=(X=K.getBoundingClientRect())===null||X===void 0?void 0:X.bottom,HQ=wB<window.innerHeight/2,WQ=0,Ig=0;HQ?(P+q>TB?WQ=P:WQ=TB-q+P,q>=window.innerHeight&&(WQ=0)):(P+q>window.innerHeight-wB?Ig=P:Ig=window.innerHeight-TB-P,q>=window.innerHeight&&(Ig=0)),HQ?(I.style.bottom="",I.style.top=WQ+"px"):(I.style.top="",I.style.bottom=Ig+"px")}I.style.display="flex",setTimeout(function(){var JE=fe();JE&&QQ===kQ&&JE.focus()},0)},0))}function nC(I,s){var R=parseInt(nB,10);EQ?(I.style.textAlign="left",I.style.right="",I.style.left=(oA?0:parseInt(K.style.left,10))+R+10+"px"):(I.style.textAlign="right",I.style.left="",I.style.right=(oA?0:parseInt(K.style.right,10))+R+10+"px"),s||(BA.btn.isTopAligned?(I.style.bottom="",I.style.top=(oA?0:parseInt(K.style.top,10))+R/2+"px"):(I.style.top="",I.style.bottom=(oA?0:parseInt(K.style.bottom,10))+R/2+"px")),oA&&(I.style.position="absolute",I.classList.add("alan-btn-lib__absolute-positioned")),s&&(I.style.bottom="",I.style.top=(oA?0:s)+R/2+"px",I.style.setProperty("transform","translateY(-50%)","important")),I.style.zIndex=zn}function Pn(){EQ?(lA.style.left="0",lA.style.right="",hA.classList.remove("alan-btn-lib__left-side"),hA.classList.add("alan-btn-lib__right-side")):(lA.style.right="0",lA.style.left="",hA.classList.remove("alan-btn-lib__right-side"),hA.classList.add("alan-btn-lib__left-side"))}function XI(I){I&&(nB=I,lA.style.width=I+"px",lA.style.minWidth=I+"px",lA.style.maxWidth=I+"px",lA.style.minHeight=I+"px",lA.style.height=I+"px",lA.style.maxHeight=I+"px",K.style.width=I+"px",K.style.minWidth=I+"px",K.style.maxWidth=I+"px",K.style.minHeight=I+"px",K.style.height=I+"px",K.style.maxHeight=I+"px")}function qn(I){XI(I),NA()&&(hA.style.maxWidth="calc(100vw - "+(parseInt(ME,10)+parseInt(nB,10)+20)+"px)"),$n([LB,SB]),nC(hA),GE(qA)}lA.style.color="#fff",lA.style.position="absolute";var jg="transform 0.4s ease-in-out, opacity 0.4s ease-in-out";qn(nB),BA.btn.isTopAligned?lA.style.top="0":lA.style.bottom="0",Pn(),lA.style.borderRadius="50%",lA.style.textAlign="center",lA.style.transition=jg,lA.style.zIndex=BA.btn.zIndex,p&&p.tabIndex&&(lA.tabIndex=p.tabIndex),Cn()?lA.style.cursor="default":NA()||(lA.style.cursor="pointer"),AB.style.minHeight="100%",AB.style.height="100%",AB.style.maxHeight="100%",AB.style.top="0%",AB.style.left="0%",AB.style.zIndex=dE,AB.style.position="relative",AB.style.transition=jg;function LI(I){for(var s=0;s<I.length;s++)I[s].style.minHeight="100%",I[s].style.height="100%",I[s].style.maxHeight="100%",I[s].style.minWidth="100%",I[s].style.width="100%",I[s].style.maxWidth="100%",I[s].style.top="0%",I[s].style.left="0%",I[s].style.position="absolute",I[s].style.pointerEvents="none",I[s].style.animationIterationCount="infinite",I[s].style.animationDuration="9s",I[s].style.animationTimingFunction="ease-in-out",I[s].style.opacity=0,I[s].alt=w+" logo animated part "+s,AB.appendChild(I[s])}rE.src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTAxPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTkuNjQwMDAxLDEuNDk1NDY4NSBMMjQsOS44NjY2NjY2NyBMMTguMjcxMTkyNCwyMSBMNi40NzczOTQ2NiwyMSBDNS43MDEzMTEwMSwyMS4wMDAxMDYzIDQuOTg5NjE3NzYsMjEuMjk5OTMzOSA0LjYzMDYyNzg1LDIxLjk4OTE5NDUgTDE1LjQ5OTE2NTksMS4xMjE2MDEzOCBDMTUuODQ2MDc4MSwwLjQ1NTUyOTk2NCAxNi41MjIzNTU1LDAuMDI5NDg4MzMzNSAxNy4yNjc4MTEsMC4wMDE0NzIxODExNSBDMTguMjY3Mjc3MSwwLjAzMzk5NDI4OTEgMTkuMTc1MjgxMSwwLjYwMzIwNjQyIDE5LjY0MDAwMSwxLjQ5NTQ2ODUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjcxMTkyNCwyMSBMMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEMxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTEuOTg1NTIzOSwzMiAxMS4yMDkzMzc4LDMyIEwxLjcwNzg2NDk1LDMyIEMwLjk0MDgwMjc5NiwzMiAwLjMxODk3NjA1OSwzMS4zNzcwOTE4IDAuMzE4OTc2MDU5LDMwLjYwODY5NTcgQzAuMzE4OTc2MDU5LDMwLjM4NDU5NDggMC4zNzMwMTU2MTgsMzAuMTYzODEgMC40NzY0OTcxMDYsMjkuOTY1MTI1NiBMNC42MzA2Mjc4NSwyMS45ODkxOTQ1IEM0Ljk4OTYxNzc2LDIxLjI5OTkzMzkgNS43MDEzMTEwMSwyMS4wMDAxMDYzIDYuNDc3Mzk0NjYsMjEgTDE4LjI3MTE5MjQsMjEgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuMyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBDMTEuOTg1NTIzOSwzMiAxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC41Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMC42NTM3ODIzLC0xLjIzNTcyNjVlLTE0IEMzMC42Nzk5OTUsLTEuMjM1MjQ0MTRlLTE0IDMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzI5LjczMjcyMjksMC4wMzM5OTQyODkxIDI4LjgyNDcxODksMC42MDMyMDY0MiAyOC4zNTk5OTksMS40OTU0Njg1IEwyNCw5Ljg2NjY2NjY3IEwxOS42NDAwMDEsMS40OTU0Njg1IEMxOS4xNjEyODQ2LDAuNTc2MzMzMDYgMTguMjEyMTgsLTEuMjE3ODgzODNlLTE0IDE3LjE3NzI2NTMsLTEuNDIxMDg1NDdlLTE0IEwzMC42NTM3ODIzLC0xLjIzNTcyNjVlLTE0IFogTTI4LjM1OTk5OSwxLjQ5NTQ2ODUgQzI4LjgyNDcxODksMC42MDMyMDY0MiAyOS43MzI3MjI5LDAuMDMzOTk0Mjg5MSAzMC43MzIxODksMC4wMDE0NzIxODExNSBDMzAuNzA2MTM0MiwwLjAwMDQ5Mjk3NTY5MSAzMC42Nzk5OTUsLTEuMjM1MjQ0MTRlLTE0IDMwLjY1Mzc4MjMsLTEuMjM1NzI2NWUtMTQgTDMwLjk0NDQ0NDQsLTEuNDIxMDg1NDdlLTE0IEwzMC44MjI3MzQ3LC0xLjIzNzUxMTgzZS0xNCBDMzAuNzkyNDc2MywtMS4yMzE1ODY5M2UtMTQgMzAuNzYyMjkxMSwwLjAwMDQ5MjY3MjYzNSAzMC43MzIxODksMC4wMDE0NzIxODExNSBDMzEuNDc3NjQ0NSwwLjAyOTQ4ODMzMzUgMzIuMTUzOTIxOSwwLjQ1NTUyOTk2NCAzMi41MDA4MzQxLDEuMTIxNjAxMzggTDQ3LjUyMzUwMjksMjkuOTY1MTI1NiBDNDcuNjI2OTg0NCwzMC4xNjM4MSA0Ny42ODEwMjM5LDMwLjM4NDU5NDggNDcuNjgxMDIzOSwzMC42MDg2OTU3IEM0Ny42ODEwMjM5LDMxLjM3NzA5MTggNDcuMDU5MTk3MiwzMiA0Ni4yOTIxMzUxLDMyIEwzNi43OTA2NjIyLDMyIEMzNi4wMTQ0NzYxLDMyIDM1LjMwMjY0NzcsMzEuNTY3NzUwMiAzNC45NDM2MTA0LDMwLjg3ODM5ODYgTDI0LDkuODY2NjY2NjcgTDI4LjM1OTk5OSwxLjQ5NTQ2ODUgWiIgaWQ9InNoYXBlLTIiIGZpbGwtb3BhY2l0eT0iMC45Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=",PE.src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTAyPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjcxMTkyNCwyMSBMMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEMxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTEuOTg1NTIzOSwzMiAxMS4yMDkzMzc4LDMyIEwxLjcwNzg2NDk1LDMyIEMwLjk0MDgwMjc5NiwzMiAwLjMxODk3NjA1OSwzMS4zNzcwOTE4IDAuMzE4OTc2MDU5LDMwLjYwODY5NTcgQzAuMzE4OTc2MDU5LDMwLjM4NDU5NDggMC4zNzMwMTU2MTgsMzAuMTYzODEgMC40NzY0OTcxMDYsMjkuOTY1MTI1NiBMNC42MzA2Mjc4NSwyMS45ODkxOTQ1IEwxNS40OTkxNjU5LDEuMTIxNjAxMzggQzE1Ljg0NjA3ODEsMC40NTU1Mjk5NjQgMTYuNTIyMzU1NSwwLjAyOTQ4ODMzMzUgMTcuMjY3ODExLDAuMDAxNDcyMTgxMTUgQzE4LjI2NzI3NzEsMC4wMzM5OTQyODkxIDE5LjE3NTI4MTEsMC42MDMyMDY0MiAxOS42NDAwMDEsMS40OTU0Njg1IEwyNCw5Ljg2NjY2NjY3IEwxOC4yNzExOTI0LDIxIFoiIGlkPSJzaGFwZS0yIiBmaWxsLW9wYWNpdHk9IjAuMyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBDMTEuOTg1NTIzOSwzMiAxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC41Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOC4zNTk5OTksMS40OTU0Njg1IEMyOC44MjQ3MTg5LDAuNjAzMjA2NDIgMjkuNzMyNzIyOSwwLjAzMzk5NDI4OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNjc5OTk1LDEuODU4NDEzMzFlLTE1IDMwLjY1Mzc4MjMsMS44NTM1ODk3NWUtMTUgTDMwLjk0NDQ0NDQsMCBMMzAuODIyNzM0NywxLjgzNTczNjRlLTE1IEMzMC43OTI0NzYzLDEuODk0OTg1MzllLTE1IDMwLjc2MjI5MTEsMC4wMDA0OTI2NzI2MzUgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMxLjQ3NzY0NDUsMC4wMjk0ODgzMzM1IDMyLjE1MzkyMTksMC40NTU1Mjk5NjQgMzIuNTAwODM0MSwxLjEyMTYwMTM4IEw0Ny41MjM1MDI5LDI5Ljk2NTEyNTYgQzQ3LjYyNjk4NDQsMzAuMTYzODEgNDcuNjgxMDIzOSwzMC4zODQ1OTQ4IDQ3LjY4MTAyMzksMzAuNjA4Njk1NyBDNDcuNjgxMDIzOSwzMS4zNzcwOTE4IDQ3LjA1OTE5NzIsMzIgNDYuMjkyMTM1MSwzMiBMMzYuNzkwNjYyMiwzMiBDMzYuMDE0NDc2MSwzMiAzNS4zMDI2NDc3LDMxLjU2Nzc1MDIgMzQuOTQzNjEwNCwzMC44NzgzOTg2IEwyNCw5Ljg2NjY2NjY3IEwyOC4zNTk5OTksMS40OTU0Njg1IFoiIGlkPSJzaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjkiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTMwLjY1Mzc4MjMsMS44NTM1ODk3NWUtMTUgQzMwLjY3OTk5NSwxLjg1ODQxMzMxZS0xNSAzMC43MDYxMzQyLDAuMDAwNDkyOTc1NjkxIDMwLjczMjE4OSwwLjAwMTQ3MjE4MTE1IEMyOS43MzI3MjI5LDAuMDMzOTk0Mjg5MSAyOC44MjQ3MTg5LDAuNjAzMjA2NDIgMjguMzU5OTk5LDEuNDk1NDY4NSBMMjQsOS44NjY2NjY2NyBMMTkuNjQwMDAxLDEuNDk1NDY4NSBDMTkuMTYxMjg0NiwwLjU3NjMzMzA2IDE4LjIxMjE4LDIuMDMyMDE2NDNlLTE1IDE3LjE3NzI2NTMsMCBMMzAuNjUzNzgyMywxLjg1MzU4OTc1ZS0xNSBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC41Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=",qE.src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTAzPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTkuNjQwMDAxLDEuNDk1NDY4NSBMMjQsOS44NjY2NjY2NyBMMTguMjcxMTkyNCwyMSBMNi40NzczOTQ2NiwyMSBDNS43MDEzMTEwMSwyMS4wMDAxMDYzIDQuOTg5NjE3NzYsMjEuMjk5OTMzOSA0LjYzMDYyNzg1LDIxLjk4OTE5NDUgTDE1LjQ5OTE2NTksMS4xMjE2MDEzOCBDMTUuODQ2MDc4MSwwLjQ1NTUyOTk2NCAxNi41MjIzNTU1LDAuMDI5NDg4MzMzNSAxNy4yNjc4MTEsMC4wMDE0NzIxODExNSBDMTguMjY3Mjc3MSwwLjAzMzk5NDI4OTEgMTkuMTc1MjgxMSwwLjYwMzIwNjQyIDE5LjY0MDAwMSwxLjQ5NTQ2ODUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuMyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjcxMTkyNCwyMSBMMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEMxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTEuOTg1NTIzOSwzMiAxMS4yMDkzMzc4LDMyIEwxLjcwNzg2NDk1LDMyIEMwLjk0MDgwMjc5NiwzMiAwLjMxODk3NjA1OSwzMS4zNzcwOTE4IDAuMzE4OTc2MDU5LDMwLjYwODY5NTcgQzAuMzE4OTc2MDU5LDMwLjM4NDU5NDggMC4zNzMwMTU2MTgsMzAuMTYzODEgMC40NzY0OTcxMDYsMjkuOTY1MTI1NiBMNC42MzA2Mjc4NSwyMS45ODkxOTQ1IEM0Ljk4OTYxNzc2LDIxLjI5OTkzMzkgNS43MDEzMTEwMSwyMS4wMDAxMDYzIDYuNDc3Mzk0NjYsMjEgTDE4LjI3MTE5MjQsMjEgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBDMTEuOTg1NTIzOSwzMiAxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC45Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOC4zNTk5OTksMS40OTU0Njg1IEMyOC44MjQ3MTg5LDAuNjAzMjA2NDIgMjkuNzMyNzIyOSwwLjAzMzk5NDI4OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNjc5OTk1LC0xLjIzNTI0NDE0ZS0xNCAzMC42NTM3ODIzLC0xLjIzNTcyNjVlLTE0IEwzMC45NDQ0NDQ0LC0xLjQyMTA4NTQ3ZS0xNCBMMzAuODIyNzM0NywtMS4yMzc1MTE4M2UtMTQgQzMwLjc5MjQ3NjMsLTEuMjMxNTg2OTNlLTE0IDMwLjc2MjI5MTEsMC4wMDA0OTI2NzI2MzUgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMxLjQ3NzY0NDUsMC4wMjk0ODgzMzM1IDMyLjE1MzkyMTksMC40NTU1Mjk5NjQgMzIuNTAwODM0MSwxLjEyMTYwMTM4IEw0Ny41MjM1MDI5LDI5Ljk2NTEyNTYgQzQ3LjYyNjk4NDQsMzAuMTYzODEgNDcuNjgxMDIzOSwzMC4zODQ1OTQ4IDQ3LjY4MTAyMzksMzAuNjA4Njk1NyBDNDcuNjgxMDIzOSwzMS4zNzcwOTE4IDQ3LjA1OTE5NzIsMzIgNDYuMjkyMTM1MSwzMiBMMzYuNzkwNjYyMiwzMiBDMzYuMDE0NDc2MSwzMiAzNS4zMDI2NDc3LDMxLjU2Nzc1MDIgMzQuOTQzNjEwNCwzMC44NzgzOTg2IEwyNCw5Ljg2NjY2NjY3IEwyOC4zNTk5OTksMS40OTU0Njg1IFoiIGlkPSJzaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjkiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTMwLjY1Mzc4MjMsLTEuMjM1NzI2NWUtMTQgQzMwLjY3OTk5NSwtMS4yMzUyNDQxNGUtMTQgMzAuNzA2MTM0MiwwLjAwMDQ5Mjk3NTY5MSAzMC43MzIxODksMC4wMDE0NzIxODExNSBDMjkuNzMyNzIyOSwwLjAzMzk5NDI4OTEgMjguODI0NzE4OSwwLjYwMzIwNjQyIDI4LjM1OTk5OSwxLjQ5NTQ2ODUgTDI0LDkuODY2NjY2NjcgTDE5LjY0MDAwMSwxLjQ5NTQ2ODUgQzE5LjE2MTI4NDYsMC41NzYzMzMwNiAxOC4yMTIxOCwtMS4yMTc4ODM4M2UtMTQgMTcuMTc3MjY1MywtMS40MjEwODU0N2UtMTQgTDMwLjY1Mzc4MjMsLTEuMjM1NzI2NWUtMTQgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+",_E.src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTA0PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMjQsOS44NjY2NjY2NyBMMTguMjcxMTkyNCwyMSBMNi40NzczOTQ2NiwyMSBDNS43MDEzMTEwMSwyMS4wMDAxMDYzIDQuOTg5NjE3NzYsMjEuMjk5OTMzOSA0LjYzMDYyNzg1LDIxLjk4OTE5NDUgTDE1LjQ5OTE2NTksMS4xMjE2MDEzOCBDMTUuODQ2MDc4MSwwLjQ1NTUyOTk2NCAxNi41MjIzNTU1LDAuMDI5NDg4MzMzNSAxNy4yNjc4MTEsMC4wMDE0NzIxODExNSBDMTcuMjM3NzA4OSwwLjAwMDQ5MjY3MjYzNSAxNy4yMDc1MjM3LDEuOTU5OTMzNjZlLTE0IDE3LjE3NzI2NTMsMS45NTM5OTI1MmUtMTQgTDMwLjY1Mzc4MjMsMi4xMzkzNTE1ZS0xNCBDMzAuNjc5OTk1LDIuMTM5ODMzODVlLTE0IDMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzI5LjczMjcyMjksMC4wMzM5OTQyODkxIDI4LjgyNDcxODksMC42MDMyMDY0MiAyOC4zNTk5OTksMS40OTU0Njg1IEwyNCw5Ljg2NjY2NjY3IFoiIGlkPSJzaGFwZS0yIiBmaWxsLW9wYWNpdHk9IjAuMyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjcxMTkyNCwyMSBMMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEMxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTEuOTg1NTIzOSwzMiAxMS4yMDkzMzc4LDMyIEwxLjcwNzg2NDk1LDMyIEMwLjk0MDgwMjc5NiwzMiAwLjMxODk3NjA1OSwzMS4zNzcwOTE4IDAuMzE4OTc2MDU5LDMwLjYwODY5NTcgQzAuMzE4OTc2MDU5LDMwLjM4NDU5NDggMC4zNzMwMTU2MTgsMzAuMTYzODEgMC40NzY0OTcxMDYsMjkuOTY1MTI1NiBMNC42MzA2Mjc4NSwyMS45ODkxOTQ1IEM0Ljk4OTYxNzc2LDIxLjI5OTkzMzkgNS43MDEzMTEwMSwyMS4wMDAxMDYzIDYuNDc3Mzk0NjYsMjEgTDE4LjI3MTE5MjQsMjEgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBDMTEuOTg1NTIzOSwzMiAxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC45Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOC4zNTk5OTksMS40OTU0Njg1IEMyOC44MjQ3MTg5LDAuNjAzMjA2NDIgMjkuNzMyNzIyOSwwLjAzMzk5NDI4OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNjc5OTk1LC0xLjIzNTI0NDE0ZS0xNCAzMC42NTM3ODIzLC0xLjIzNTcyNjVlLTE0IEwzMC45NDQ0NDQ0LC0xLjQyMTA4NTQ3ZS0xNCBMMzAuODIyNzM0NywtMS4yMzc1MTE4M2UtMTQgQzMwLjc5MjQ3NjMsLTEuMjMxNTg2OTNlLTE0IDMwLjc2MjI5MTEsMC4wMDA0OTI2NzI2MzUgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMxLjQ3NzY0NDUsMC4wMjk0ODgzMzM1IDMyLjE1MzkyMTksMC40NTU1Mjk5NjQgMzIuNTAwODM0MSwxLjEyMTYwMTM4IEw0Ny41MjM1MDI5LDI5Ljk2NTEyNTYgQzQ3LjYyNjk4NDQsMzAuMTYzODEgNDcuNjgxMDIzOSwzMC4zODQ1OTQ4IDQ3LjY4MTAyMzksMzAuNjA4Njk1NyBDNDcuNjgxMDIzOSwzMS4zNzcwOTE4IDQ3LjA1OTE5NzIsMzIgNDYuMjkyMTM1MSwzMiBMMzYuNzkwNjYyMiwzMiBDMzYuMDE0NDc2MSwzMiAzNS4zMDI2NDc3LDMxLjU2Nzc1MDIgMzQuOTQzNjEwNCwzMC44NzgzOTg2IEwyNCw5Ljg2NjY2NjY3IEwyOC4zNTk5OTksMS40OTU0Njg1IFoiIGlkPSJzaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjUiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==",$E.src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTA1PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTkuNjQwMDAxLDEuNDk1NDY4NSBMMjQsOS44NjY2NjY2NyBMMTguMjcxMTkyNCwyMSBMNi40NzczOTQ2NiwyMSBDNS43MDEzMTEwMSwyMS4wMDAxMDYzIDQuOTg5NjE3NzYsMjEuMjk5OTMzOSA0LjYzMDYyNzg1LDIxLjk4OTE5NDUgTDE1LjQ5OTE2NTksMS4xMjE2MDEzOCBDMTUuODQ2MDc4MSwwLjQ1NTUyOTk2NCAxNi41MjIzNTU1LDAuMDI5NDg4MzMzNSAxNy4yNjc4MTEsMC4wMDE0NzIxODExNSBDMTguMjY3Mjc3MSwwLjAzMzk5NDI4OTEgMTkuMTc1MjgxMSwwLjYwMzIwNjQyIDE5LjY0MDAwMSwxLjQ5NTQ2ODUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMjguMzU5OTk5LDEuNDk1NDY4NSBDMjguODI0NzE4OSwwLjYwMzIwNjQyIDI5LjczMjcyMjksMC4wMzM5OTQyODkxIDMwLjczMjE4OSwwLjAwMTQ3MjE4MTE1IEMzMC43MDYxMzQyLDAuMDAwNDkyOTc1NjkxIDMwLjY3OTk5NSwtMS4yMzUyNDQxNGUtMTQgMzAuNjUzNzgyMywtMS4yMzU3MjY1ZS0xNCBMMzAuOTQ0NDQ0NCwtMS40MjEwODU0N2UtMTQgTDMwLjgyMjczNDcsLTEuMjM3NTExODNlLTE0IEMzMC43OTI0NzYzLC0xLjIzMTU4NjkzZS0xNCAzMC43NjIyOTExLDAuMDAwNDkyNjcyNjM1IDMwLjczMjE4OSwwLjAwMTQ3MjE4MTE1IEMzMS40Nzc2NDQ1LDAuMDI5NDg4MzMzNSAzMi4xNTM5MjE5LDAuNDU1NTI5OTY0IDMyLjUwMDgzNDEsMS4xMjE2MDEzOCBMNDcuNTIzNTAyOSwyOS45NjUxMjU2IEM0Ny42MjY5ODQ0LDMwLjE2MzgxIDQ3LjY4MTAyMzksMzAuMzg0NTk0OCA0Ny42ODEwMjM5LDMwLjYwODY5NTcgQzQ3LjY4MTAyMzksMzEuMzc3MDkxOCA0Ny4wNTkxOTcyLDMyIDQ2LjI5MjEzNTEsMzIgTDM2Ljc5MDY2MjIsMzIgQzM2LjAxNDQ3NjEsMzIgMzUuMzAyNjQ3NywzMS41Njc3NTAyIDM0Ljk0MzYxMDQsMzAuODc4Mzk4NiBMMjQsOS44NjY2NjY2NyBMMjguMzU5OTk5LDEuNDk1NDY4NSBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC41Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMC42NTM3ODIzLC0xLjIzNTcyNjVlLTE0IEMzMC42Nzk5OTUsLTEuMjM1MjQ0MTRlLTE0IDMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzI5LjczMjcyMjksMC4wMzM5OTQyODkxIDI4LjgyNDcxODksMC42MDMyMDY0MiAyOC4zNTk5OTksMS40OTU0Njg1IEwyNCw5Ljg2NjY2NjY3IEwxOS42NDAwMDEsMS40OTU0Njg1IEMxOS4xNjEyODQ2LDAuNTc2MzMzMDYgMTguMjEyMTgsLTEuMjE3ODgzODNlLTE0IDE3LjE3NzI2NTMsLTEuNDIxMDg1NDdlLTE0IEwzMC42NTM3ODIzLC0xLjIzNTcyNjVlLTE0IFoiIGlkPSJzaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjMiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTE4LjI3MTE5MjQsMjEgTDIzLjk1NjQ1ODIsMjEgQzI0LjczMDk1NjIsMjAuOTk5ODkzOSAyNS40NDE1ODY3LDIxLjI5NTM4NDggMjUuODAxNDg0NiwyMS45ODIzNzY3IEwyOS45ODE5MDE1LDI5Ljk2MjE3NjkgQzMwLjMzODM0NCwzMC42NDI1NzMyIDMwLjA3NjY4NTIsMzEuNDgzNTk5NyAyOS4zOTc0NzAxLDMxLjg0MDY2MjEgQzI5LjE5ODM4MzgsMzEuOTQ1MzIxNSAyOC45NzY5MDkzLDMyIDI4Ljc1MjA3MzgsMzIgTDExLjIwOTMzNzgsMzIgTDEuNzA3ODY0OTUsMzIgQzAuOTQwODAyNzk2LDMyIDAuMzE4OTc2MDU5LDMxLjM3NzA5MTggMC4zMTg5NzYwNTksMzAuNjA4Njk1NyBDMC4zMTg5NzYwNTksMzAuMzg0NTk0OCAwLjM3MzAxNTYxOCwzMC4xNjM4MSAwLjQ3NjQ5NzEwNiwyOS45NjUxMjU2IEw0LjYzMDYyNzg1LDIxLjk4OTE5NDUgQzQuOTg5NjE3NzYsMjEuMjk5OTMzOSA1LjcwMTMxMTAxLDIxLjAwMDEwNjMgNi40NzczOTQ2NiwyMSBMMTguMjcxMTkyNCwyMSBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC45Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=",AC.src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTA2PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTkuNjQwMDAxLDEuNDk1NDY4NSBMMjQsOS44NjY2NjY2NyBMMTguMjcxMTkyNCwyMSBMNi40NzczOTQ2NiwyMSBDNS43MDEzMTEwMSwyMS4wMDAxMDYzIDQuOTg5NjE3NzYsMjEuMjk5OTMzOSA0LjYzMDYyNzg1LDIxLjk4OTE5NDUgTDE1LjQ5OTE2NTksMS4xMjE2MDEzOCBDMTUuODQ2MDc4MSwwLjQ1NTUyOTk2NCAxNi41MjIzNTU1LDAuMDI5NDg4MzMzNSAxNy4yNjc4MTEsMC4wMDE0NzIxODExNSBDMTguMjY3Mjc3MSwwLjAzMzk5NDI4OTEgMTkuMTc1MjgxMSwwLjYwMzIwNjQyIDE5LjY0MDAwMSwxLjQ5NTQ2ODUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMzAuNjUzNzgyMywxLjg1MzU4OTc1ZS0xNSBMMzAuOTQ0NDQ0NCwwIEwzMC44MjI3MzQ3LDEuODM1NzM2NGUtMTUgQzMwLjc5MjQ3NjMsMS44OTQ5ODUzOWUtMTUgMzAuNzYyMjkxMSwwLjAwMDQ5MjY3MjYzNSAzMC43MzIxODksMC4wMDE0NzIxODExNSBDMzEuNDc3NjQ0NSwwLjAyOTQ4ODMzMzUgMzIuMTUzOTIxOSwwLjQ1NTUyOTk2NCAzMi41MDA4MzQxLDEuMTIxNjAxMzggTDQ3LjUyMzUwMjksMjkuOTY1MTI1NiBDNDcuNjI2OTg0NCwzMC4xNjM4MSA0Ny42ODEwMjM5LDMwLjM4NDU5NDggNDcuNjgxMDIzOSwzMC42MDg2OTU3IEM0Ny42ODEwMjM5LDMxLjM3NzA5MTggNDcuMDU5MTk3MiwzMiA0Ni4yOTIxMzUxLDMyIEwzNi43OTA2NjIyLDMyIEMzNi4wMTQ0NzYxLDMyIDM1LjMwMjY0NzcsMzEuNTY3NzUwMiAzNC45NDM2MTA0LDMwLjg3ODM5ODYgTDI0LDkuODY2NjY2NjcgTDE5LjY0MDAwMSwxLjQ5NTQ2ODUgQzE5LjE2MTI4NDYsMC41NzYzMzMwNiAxOC4yMTIxOCwyLjAzMjAxNjQzZS0xNSAxNy4xNzcyNjUzLDAgTDMwLjY1Mzc4MjMsMS44NTM1ODk3NWUtMTUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuMyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjcxMTkyNCwyMSBMMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEMxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTEuOTg1NTIzOSwzMiAxMS4yMDkzMzc4LDMyIEwxLjcwNzg2NDk1LDMyIEMwLjk0MDgwMjc5NiwzMiAwLjMxODk3NjA1OSwzMS4zNzcwOTE4IDAuMzE4OTc2MDU5LDMwLjYwODY5NTcgQzAuMzE4OTc2MDU5LDMwLjM4NDU5NDggMC4zNzMwMTU2MTgsMzAuMTYzODEgMC40NzY0OTcxMDYsMjkuOTY1MTI1NiBMNC42MzA2Mjc4NSwyMS45ODkxOTQ1IEM0Ljk4OTYxNzc2LDIxLjI5OTkzMzkgNS43MDEzMTEwMSwyMS4wMDAxMDYzIDYuNDc3Mzk0NjYsMjEgTDE4LjI3MTE5MjQsMjEgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuOSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBDMTEuOTg1NTIzOSwzMiAxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC41Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=",BC.src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTA3PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDciIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjcxMTkyNCwyMSBMMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEMxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTEuOTg1NTIzOSwzMiAxMS4yMDkzMzc4LDMyIEwxLjcwNzg2NDk1LDMyIEMwLjk0MDgwMjc5NiwzMiAwLjMxODk3NjA1OSwzMS4zNzcwOTE4IDAuMzE4OTc2MDU5LDMwLjYwODY5NTcgQzAuMzE4OTc2MDU5LDMwLjM4NDU5NDggMC4zNzMwMTU2MTgsMzAuMTYzODEgMC40NzY0OTcxMDYsMjkuOTY1MTI1NiBMNC42MzA2Mjc4NSwyMS45ODkxOTQ1IEwxNS40OTkxNjU5LDEuMTIxNjAxMzggQzE1Ljg0NjA3ODEsMC40NTU1Mjk5NjQgMTYuNTIyMzU1NSwwLjAyOTQ4ODMzMzUgMTcuMjY3ODExLDAuMDAxNDcyMTgxMTUgQzE4LjI2NzI3NzEsMC4wMzM5OTQyODkxIDE5LjE3NTI4MTEsMC42MDMyMDY0MiAxOS42NDAwMDEsMS40OTU0Njg1IEwyNCw5Ljg2NjY2NjY3IEwxOC4yNzExOTI0LDIxIFoiIGlkPSJzaGFwZS0yIiBmaWxsLW9wYWNpdHk9IjAuOSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMjguMzU5OTk5LDEuNDk1NDY4NSBDMjguODI0NzE4OSwwLjYwMzIwNjQyIDI5LjczMjcyMjksMC4wMzM5OTQyODkxIDMwLjczMjE4OSwwLjAwMTQ3MjE4MTE1IEMzMC43MDYxMzQyLDAuMDAwNDkyOTc1NjkxIDMwLjY3OTk5NSwxLjg1ODQxMzMxZS0xNSAzMC42NTM3ODIzLDEuODUzNTg5NzVlLTE1IEwzMC45NDQ0NDQ0LDAgTDMwLjgyMjczNDcsMS44MzU3MzY0ZS0xNSBDMzAuNzkyNDc2MywxLjg5NDk4NTM5ZS0xNSAzMC43NjIyOTExLDAuMDAwNDkyNjcyNjM1IDMwLjczMjE4OSwwLjAwMTQ3MjE4MTE1IEMzMS40Nzc2NDQ1LDAuMDI5NDg4MzMzNSAzMi4xNTM5MjE5LDAuNDU1NTI5OTY0IDMyLjUwMDgzNDEsMS4xMjE2MDEzOCBMNDcuNTIzNTAyOSwyOS45NjUxMjU2IEM0Ny42MjY5ODQ0LDMwLjE2MzgxIDQ3LjY4MTAyMzksMzAuMzg0NTk0OCA0Ny42ODEwMjM5LDMwLjYwODY5NTcgQzQ3LjY4MTAyMzksMzEuMzc3MDkxOCA0Ny4wNTkxOTcyLDMyIDQ2LjI5MjEzNTEsMzIgTDM2Ljc5MDY2MjIsMzIgQzM2LjAxNDQ3NjEsMzIgMzUuMzAyNjQ3NywzMS41Njc3NTAyIDM0Ljk0MzYxMDQsMzAuODc4Mzk4NiBMMjQsOS44NjY2NjY2NyBMMjguMzU5OTk5LDEuNDk1NDY4NSBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC4zIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMC42NTM3ODIzLDEuODUzNTg5NzVlLTE1IEMzMC42Nzk5OTUsMS44NTg0MTMzMWUtMTUgMzAuNzA2MTM0MiwwLjAwMDQ5Mjk3NTY5MSAzMC43MzIxODksMC4wMDE0NzIxODExNSBDMjkuNzMyNzIyOSwwLjAzMzk5NDI4OTEgMjguODI0NzE4OSwwLjYwMzIwNjQyIDI4LjM1OTk5OSwxLjQ5NTQ2ODUgTDI0LDkuODY2NjY2NjcgTDE5LjY0MDAwMSwxLjQ5NTQ2ODUgQzE5LjE2MTI4NDYsMC41NzYzMzMwNiAxOC4yMTIxOCwyLjAzMjAxNjQzZS0xNSAxNy4xNzcyNjUzLDAgTDMwLjY1Mzc4MjMsMS44NTM1ODk3NWUtMTUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBDMTEuOTg1NTIzOSwzMiAxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC41Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=",QC.src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTA4PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDgiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTkuNjQwMDAxLDEuNDk1NDY4NSBMMjQsOS44NjY2NjY2NyBMMTguMjcxMTkyNCwyMSBMNi40NzczOTQ2NiwyMSBDNS43MDEzMTEwMSwyMS4wMDAxMDYzIDQuOTg5NjE3NzYsMjEuMjk5OTMzOSA0LjYzMDYyNzg1LDIxLjk4OTE5NDUgTDE1LjQ5OTE2NTksMS4xMjE2MDEzOCBDMTUuODQ2MDc4MSwwLjQ1NTUyOTk2NCAxNi41MjIzNTU1LDAuMDI5NDg4MzMzNSAxNy4yNjc4MTEsMC4wMDE0NzIxODExNSBDMTguMjY3Mjc3MSwwLjAzMzk5NDI4OTEgMTkuMTc1MjgxMSwwLjYwMzIwNjQyIDE5LjY0MDAwMSwxLjQ5NTQ2ODUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuOSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjcxMTkyNCwyMSBMMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEMxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTEuOTg1NTIzOSwzMiAxMS4yMDkzMzc4LDMyIEwxLjcwNzg2NDk1LDMyIEMwLjk0MDgwMjc5NiwzMiAwLjMxODk3NjA1OSwzMS4zNzcwOTE4IDAuMzE4OTc2MDU5LDMwLjYwODY5NTcgQzAuMzE4OTc2MDU5LDMwLjM4NDU5NDggMC4zNzMwMTU2MTgsMzAuMTYzODEgMC40NzY0OTcxMDYsMjkuOTY1MTI1NiBMNC42MzA2Mjc4NSwyMS45ODkxOTQ1IEM0Ljk4OTYxNzc2LDIxLjI5OTkzMzkgNS43MDEzMTEwMSwyMS4wMDAxMDYzIDYuNDc3Mzk0NjYsMjEgTDE4LjI3MTE5MjQsMjEgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBDMTEuOTg1NTIzOSwzMiAxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC4zIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOC4zNTk5OTksMS40OTU0Njg1IEMyOC44MjQ3MTg5LDAuNjAzMjA2NDIgMjkuNzMyNzIyOSwwLjAzMzk5NDI4OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNjc5OTk1LC0xLjIzNTI0NDE0ZS0xNCAzMC42NTM3ODIzLC0xLjIzNTcyNjVlLTE0IEwzMC45NDQ0NDQ0LC0xLjQyMTA4NTQ3ZS0xNCBMMzAuODIyNzM0NywtMS4yMzc1MTE4M2UtMTQgQzMwLjc5MjQ3NjMsLTEuMjMxNTg2OTNlLTE0IDMwLjc2MjI5MTEsMC4wMDA0OTI2NzI2MzUgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMxLjQ3NzY0NDUsMC4wMjk0ODgzMzM1IDMyLjE1MzkyMTksMC40NTU1Mjk5NjQgMzIuNTAwODM0MSwxLjEyMTYwMTM4IEw0Ny41MjM1MDI5LDI5Ljk2NTEyNTYgQzQ3LjYyNjk4NDQsMzAuMTYzODEgNDcuNjgxMDIzOSwzMC4zODQ1OTQ4IDQ3LjY4MTAyMzksMzAuNjA4Njk1NyBDNDcuNjgxMDIzOSwzMS4zNzcwOTE4IDQ3LjA1OTE5NzIsMzIgNDYuMjkyMTM1MSwzMiBMMzYuNzkwNjYyMiwzMiBDMzYuMDE0NDc2MSwzMiAzNS4zMDI2NDc3LDMxLjU2Nzc1MDIgMzQuOTQzNjEwNCwzMC44NzgzOTg2IEwyNCw5Ljg2NjY2NjY3IEwyOC4zNTk5OTksMS40OTU0Njg1IFoiIGlkPSJzaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjMiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTMwLjY1Mzc4MjMsLTEuMjM1NzI2NWUtMTQgQzMwLjY3OTk5NSwtMS4yMzUyNDQxNGUtMTQgMzAuNzA2MTM0MiwwLjAwMDQ5Mjk3NTY5MSAzMC43MzIxODksMC4wMDE0NzIxODExNSBDMjkuNzMyNzIyOSwwLjAzMzk5NDI4OTEgMjguODI0NzE4OSwwLjYwMzIwNjQyIDI4LjM1OTk5OSwxLjQ5NTQ2ODUgTDI0LDkuODY2NjY2NjcgTDE5LjY0MDAwMSwxLjQ5NTQ2ODUgQzE5LjE2MTI4NDYsMC41NzYzMzMwNiAxOC4yMTIxOCwtMS4yMTc4ODM4M2UtMTQgMTcuMTc3MjY1MywtMS40MjEwODU0N2UtMTQgTDMwLjY1Mzc4MjMsLTEuMjM1NzI2NWUtMTQgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+",gC.src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTA5PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDkiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMjQsOS44NjY2NjY2NyBMMTguMjcxMTkyNCwyMSBMNi40NzczOTQ2NiwyMSBDNS43MDEzMTEwMSwyMS4wMDAxMDYzIDQuOTg5NjE3NzYsMjEuMjk5OTMzOSA0LjYzMDYyNzg1LDIxLjk4OTE5NDUgTDE1LjQ5OTE2NTksMS4xMjE2MDEzOCBDMTUuODQ2MDc4MSwwLjQ1NTUyOTk2NCAxNi41MjIzNTU1LDAuMDI5NDg4MzMzNSAxNy4yNjc4MTEsMC4wMDE0NzIxODExNSBDMTcuMjM3NzA4OSwwLjAwMDQ5MjY3MjYzNSAxNy4yMDc1MjM3LDEuOTU5OTMzNjZlLTE0IDE3LjE3NzI2NTMsMS45NTM5OTI1MmUtMTQgTDMwLjY1Mzc4MjMsMi4xMzkzNTE1ZS0xNCBDMzAuNjc5OTk1LDIuMTM5ODMzODVlLTE0IDMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzI5LjczMjcyMjksMC4wMzM5OTQyODkxIDI4LjgyNDcxODksMC42MDMyMDY0MiAyOC4zNTk5OTksMS40OTU0Njg1IEwyNCw5Ljg2NjY2NjY3IFoiIGlkPSJzaGFwZS0yIiBmaWxsLW9wYWNpdHk9IjAuOSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjcxMTkyNCwyMSBMMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEMxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTEuOTg1NTIzOSwzMiAxMS4yMDkzMzc4LDMyIEwxLjcwNzg2NDk1LDMyIEMwLjk0MDgwMjc5NiwzMiAwLjMxODk3NjA1OSwzMS4zNzcwOTE4IDAuMzE4OTc2MDU5LDMwLjYwODY5NTcgQzAuMzE4OTc2MDU5LDMwLjM4NDU5NDggMC4zNzMwMTU2MTgsMzAuMTYzODEgMC40NzY0OTcxMDYsMjkuOTY1MTI1NiBMNC42MzA2Mjc4NSwyMS45ODkxOTQ1IEM0Ljk4OTYxNzc2LDIxLjI5OTkzMzkgNS43MDEzMTEwMSwyMS4wMDAxMDYzIDYuNDc3Mzk0NjYsMjEgTDE4LjI3MTE5MjQsMjEgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBDMTEuOTg1NTIzOSwzMiAxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC4zIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOC4zNTk5OTksMS40OTU0Njg1IEMyOC44MjQ3MTg5LDAuNjAzMjA2NDIgMjkuNzMyNzIyOSwwLjAzMzk5NDI4OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNjc5OTk1LC0xLjIzNTI0NDE0ZS0xNCAzMC42NTM3ODIzLC0xLjIzNTcyNjVlLTE0IEwzMC45NDQ0NDQ0LC0xLjQyMTA4NTQ3ZS0xNCBMMzAuODIyNzM0NywtMS4yMzc1MTE4M2UtMTQgQzMwLjc5MjQ3NjMsLTEuMjMxNTg2OTNlLTE0IDMwLjc2MjI5MTEsMC4wMDA0OTI2NzI2MzUgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMxLjQ3NzY0NDUsMC4wMjk0ODgzMzM1IDMyLjE1MzkyMTksMC40NTU1Mjk5NjQgMzIuNTAwODM0MSwxLjEyMTYwMTM4IEw0Ny41MjM1MDI5LDI5Ljk2NTEyNTYgQzQ3LjYyNjk4NDQsMzAuMTYzODEgNDcuNjgxMDIzOSwzMC4zODQ1OTQ4IDQ3LjY4MTAyMzksMzAuNjA4Njk1NyBDNDcuNjgxMDIzOSwzMS4zNzcwOTE4IDQ3LjA1OTE5NzIsMzIgNDYuMjkyMTM1MSwzMiBMMzYuNzkwNjYyMiwzMiBDMzYuMDE0NDc2MSwzMiAzNS4zMDI2NDc3LDMxLjU2Nzc1MDIgMzQuOTQzNjEwNCwzMC44NzgzOTg2IEwyNCw5Ljg2NjY2NjY3IEwyOC4zNTk5OTksMS40OTU0Njg1IFoiIGlkPSJzaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjUiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==",EC.src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTEwPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMTAiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTkuNjQwMDAxLDEuNDk1NDY4NSBMMjQsOS44NjY2NjY2NyBMMTguMjcxMTkyNCwyMSBMNi40NzczOTQ2NiwyMSBDNS43MDEzMTEwMSwyMS4wMDAxMDYzIDQuOTg5NjE3NzYsMjEuMjk5OTMzOSA0LjYzMDYyNzg1LDIxLjk4OTE5NDUgTDE1LjQ5OTE2NTksMS4xMjE2MDEzOCBDMTUuODQ2MDc4MSwwLjQ1NTUyOTk2NCAxNi41MjIzNTU1LDAuMDI5NDg4MzMzNSAxNy4yNjc4MTEsMC4wMDE0NzIxODExNSBDMTguMjY3Mjc3MSwwLjAzMzk5NDI4OTEgMTkuMTc1MjgxMSwwLjYwMzIwNjQyIDE5LjY0MDAwMSwxLjQ5NTQ2ODUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBMMS43MDc4NjQ5NSwzMiBDMC45NDA4MDI3OTYsMzIgMC4zMTg5NzYwNTksMzEuMzc3MDkxOCAwLjMxODk3NjA1OSwzMC42MDg2OTU3IEMwLjMxODk3NjA1OSwzMC4zODQ1OTQ4IDAuMzczMDE1NjE4LDMwLjE2MzgxIDAuNDc2NDk3MTA2LDI5Ljk2NTEyNTYgTDQuNjMwNjI3ODUsMjEuOTg5MTk0NSBDNC45ODk2MTc3NiwyMS4yOTk5MzM5IDUuNzAxMzExMDEsMjEuMDAwMTA2MyA2LjQ3NzM5NDY2LDIxIEwxOC4yMDEzODg5LDIxIEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUtMiIgZmlsbC1vcGFjaXR5PSIwLjMiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTI4LjM1OTk5OSwxLjQ5NTQ2ODUgQzI4LjgyNDcxODksMC42MDMyMDY0MiAyOS43MzI3MjI5LDAuMDMzOTk0Mjg5MSAzMC43MzIxODksMC4wMDE0NzIxODExNSBDMzAuNzA2MTM0MiwwLjAwMDQ5Mjk3NTY5MSAzMC42Nzk5OTUsLTEuMjM1MjQ0MTRlLTE0IDMwLjY1Mzc4MjMsLTEuMjM1NzI2NWUtMTQgTDMwLjk0NDQ0NDQsLTEuNDIxMDg1NDdlLTE0IEwzMC44MjI3MzQ3LC0xLjIzNzUxMTgzZS0xNCBDMzAuNzkyNDc2MywtMS4yMzE1ODY5M2UtMTQgMzAuNzYyMjkxMSwwLjAwMDQ5MjY3MjYzNSAzMC43MzIxODksMC4wMDE0NzIxODExNSBDMzEuNDc3NjQ0NSwwLjAyOTQ4ODMzMzUgMzIuMTUzOTIxOSwwLjQ1NTUyOTk2NCAzMi41MDA4MzQxLDEuMTIxNjAxMzggTDQ3LjUyMzUwMjksMjkuOTY1MTI1NiBDNDcuNjI2OTg0NCwzMC4xNjM4MSA0Ny42ODEwMjM5LDMwLjM4NDU5NDggNDcuNjgxMDIzOSwzMC42MDg2OTU3IEM0Ny42ODEwMjM5LDMxLjM3NzA5MTggNDcuMDU5MTk3MiwzMiA0Ni4yOTIxMzUxLDMyIEwzNi43OTA2NjIyLDMyIEMzNi4wMTQ0NzYxLDMyIDM1LjMwMjY0NzcsMzEuNTY3NzUwMiAzNC45NDM2MTA0LDMwLjg3ODM5ODYgTDI0LDkuODY2NjY2NjcgTDI4LjM1OTk5OSwxLjQ5NTQ2ODUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMzAuNjUzNzgyMywtMS4yMzU3MjY1ZS0xNCBDMzAuNjc5OTk1LC0xLjIzNTI0NDE0ZS0xNCAzMC43MDYxMzQyLDAuMDAwNDkyOTc1NjkxIDMwLjczMjE4OSwwLjAwMTQ3MjE4MTE1IEMyOS43MzI3MjI5LDAuMDMzOTk0Mjg5MSAyOC44MjQ3MTg5LDAuNjAzMjA2NDIgMjguMzU5OTk5LDEuNDk1NDY4NSBMMjQsOS44NjY2NjY2NyBMMTkuNjQwMDAxLDEuNDk1NDY4NSBDMTkuMTYxMjg0NiwwLjU3NjMzMzA2IDE4LjIxMjE4LC0xLjIxNzg4MzgzZS0xNCAxNy4xNzcyNjUzLC0xLjQyMTA4NTQ3ZS0xNCBMMzAuNjUzNzgyMywtMS4yMzU3MjY1ZS0xNCBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC45Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=",LI([rE,PE,qE,_E,$E,AC,BC,QC,gC,EC]),yB.alt=w+" button icon for idle state",ZB.alt=w+" button icon for listening state",MB.alt=w+" button icon for processing state",XB.alt=w+" button icon for reply state";var _n=[yB,ZB,MB,XB];yB.src=iE.micIconSrc;for(var hg=0;hg<_n.length;hg++){var CQ=_n[hg];CQ.style.minHeight="100%",CQ.style.height="100%",CQ.style.maxHeight="100%",CQ.style.minWidth="100%",CQ.style.width="100%",CQ.style.maxWidth="100%",CQ.style.top="0%",CQ.style.left="0%",CQ.style.position="absolute",CQ.style.pointerEvents="none",CQ.style.borderRadius="50%",AB.appendChild(CQ)}uA.style.minHeight="100%",uA.style.height="100%",uA.style.maxHeight="100%",uA.style.minWidth="100%",uA.style.width="100%",uA.style.maxWidth="100%",uA.style.top="0%",uA.style.left="0%",uA.style.zIndex=dE,uA.style.position="absolute",uA.style.opacity="0",uA.style.transition=jg,uA.style.overflow="hidden",uA.style.borderRadius="50%",uA.style.backgroundSize="100% 100%",uA.style.backgroundPosition="center center",uA.style.backgroundRepeat="no-repeat",uA.classList.add("triangleMicIconBg"),uA.classList.add("triangleMicIconBg-default"),TA.style.minHeight="100%",TA.style.height="100%",TA.style.maxHeight="100%",TA.style.minWidth="100%",TA.style.width="100%",TA.style.maxWidth="100%",TA.style.top="0%",TA.style.left="0%",TA.style.zIndex=dE,TA.style.position="absolute",TA.style.opacity="0",TA.style.transition=jg,TA.style.overflow="hidden",TA.style.borderRadius="50%",TA.style.backgroundSize="0% 0%",TA.style.backgroundPosition="center center",TA.style.backgroundRepeat="no-repeat",TA.classList.add("circleMicIconBg");function eC(I,s){var R=s.height,X=s.top,P=s.altText,q=s.src,$=s.animation;I.style.minHeight=R,I.style.height=R,I.style.maxHeight=R,I.style.top=X,I.style.left=X,I.style.zIndex=dE,I.style.position="absolute",I.style.transition=jg,I.style.opacity="0",I.alt=w+P,I.src=q,$&&(I.style.animation=$)}eC(Rg,{height:"70%",top:"15%",altText:" disconnected microphone icon",animation:yI,src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTIiIGhlaWdodD0iMTkyIiB2aWV3Qm94PSIwIDAgMTkyIDE5MiI+CiAgICA8ZyBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTk2IDBjNTMuMDIgMCA5NiA0Mi45OCA5NiA5NnMtNDIuOTggOTYtOTYgOTZTMCAxNDkuMDIgMCA5NiA0Mi45OCAwIDk2IDB6IiBvcGFjaXR5PSIuMDIiLz4KICAgICAgICA8cGF0aCBkPSJNMTMxLjk2NiAxOS4wOTJjLTMwLTE0LTY1LjI4NC05Ljg0OS05MS4xNDIgMTIuNTc1QzE0Ljk2NiA1NC4wOTIgNi44NSA4My44MSAxMi45MDggMTEzLjk1YzYuMDU4IDMwLjE0MiAzMC4zMDIgNTYuMTkgNjAuMDU4IDY0LjE0MiAzNS4xODMgOS40MDYgNzMtNCA5My0zNC0xNy45MjQgMjMuOTE2LTUyLjM2NiAzOC4yOTMtODMgMzMtMzAuMTY4LTUuMjEtNTcuMTA0LTMxLjExLTY0LTYxLTcuMzQ3LTMxLjgzNS43NzktNTYgMjctODBzODAtMjYgMTA5IDljNS41MzYgNi42ODEgMTMgMTkgMTUgMzQgMSA2IDEgNyAyIDEyIDAgMiAyIDQgNCA0IDMgMCA1LjM3NC0yLjI1NiA1LTYtMy0zMC0yMS41NTYtNTcuMTkzLTQ5LTcweiIgb3BhY2l0eT0iLjQiLz4KICAgIDwvZz4KPC9zdmc+Cg=="}),eC(Eg,{height:"100%",top:"0%",altText:" low volume icon",src:`data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1uby1taWM8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iQWxhbi1CdXR0b24tLy1BbmltYXRpb24tLy1idXR0b24tbm8tbWljIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjIuMDAwMDAwLCAxOS4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8cGF0aCBkPSJNMzIsMTguNDczNjg0MiBDMzIsMjUuNzE5NDczNyAyNi43OCwzMS42OTI2MzE2IDIwLDMyLjY5ODQyMTEgTDIwLDQwIEMyMCw0MS4xMDQ1Njk1IDE5LjEwNDU2OTUsNDIgMTgsNDIgQzE2Ljg5NTQzMDUsNDIgMTYsNDEuMTA0NTY5NSAxNiw0MCBMMTYsMzIuNjk4NDIxMSBDOS4yMiwzMS42OTI2MzE2IDQsMjUuNzE5NDczNyA0LDE4LjQ3MzY4NDIgTDQsMTggQzQsMTYuODk1NDMwNSA0Ljg5NTQzMDUsMTYgNiwxNiBDNy4xMDQ1Njk1LDE2IDgsMTYuODk1NDMwNSA4LDE4IEw4LDE4LjQ3MzY4NDIgQzgsMjQuMTQxODY5OCAxMi40NzcxNTI1LDI4LjczNjg0MjEgMTgsMjguNzM2ODQyMSBDMjMuNTIyODQ3NSwyOC43MzY4NDIxIDI4LDI0LjE0MTg2OTggMjgsMTguNDczNjg0MiBMMjgsMTggQzI4LDE2Ljg5NTQzMDUgMjguODk1NDMwNSwxNiAzMCwxNiBDMzEuMTA0NTY5NSwxNiAzMiwxNi44OTU0MzA1IDMyLDE4IEwzMiwxOC40NzM2ODQyIFoiIGlkPSJTaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjgiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTE4LC00LjUyNzM3MjYzZS0xNCBDMjEuMzEzNzA4NSwtNC42MTg1Mjc3OGUtMTQgMjQsMi43NTY5ODMzOCAyNCw2LjE1Nzg5NDc0IEwyNCwxOC40NzM2ODQyIEMyNCwyMS44NzQ1OTU2IDIxLjMxMzcwODUsMjQuNjMxNTc4OSAxOCwyNC42MzE1Nzg5IEMxNC42ODYyOTE1LDI0LjYzMTU3ODkgMTIsMjEuODc0NTk1NiAxMiwxOC40NzM2ODQyIEwxMiw2LjE1Nzg5NDc0IEMxMiwyLjc1Njk4MzM4IDE0LjY4NjI5MTUsLTQuNTI3MzcyNjNlLTE0IDE4LC00LjYxODUyNzc4ZS0xNCBaIiBpZD0iU2hhcGUiIGZpbGwtb3BhY2l0eT0iMC42Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zLjgxLDMuMjcgTDM0LjczLDM0LjE5IEMzNS40MzE0MDE2LDM0Ljg5MTQwMTYgMzUuNDMxNDAxNiwzNi4wMjg1OTg0IDM0LjczLDM2LjczIEMzNC4wMjg1OTg0LDM3LjQzMTQwMTYgMzIuODkxNDAxNiwzNy40MzE0MDE2IDMyLjE5LDM2LjczIEwxLjI3LDUuODEgQzAuNTY4NTk4MzY4LDUuMTA4NTk4MzcgMC41Njg1OTgzNjgsMy45NzE0MDE2MyAxLjI3LDMuMjcgQzEuOTcxNDAxNjMsMi41Njg1OTgzNyAzLjEwODU5ODM3LDIuNTY4NTk4MzcgMy44MSwzLjI3IFoiIGlkPSJQYXRoIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=
`}),eC(Og,{height:"100%",top:"0%",altText:" no voice support icon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIuSURBVHgB7dvxUYMwFAbwpxMwAhvoBtVJygZ1A92gI1Qn6AjoBO0GsEG7wfPlgCtNA7xASzX5fnf5oyThLp+BQDiJAAAAAAAAAAAAAAAAxmHmDyk5n+ykLAn6SUhpHVaXwrQhcBsIr5FTLGSwb1IOmpkj9RnrxXE5+1x+fH7Pwyw0+PKSLLpCrGeq1oFiwNWiUGhCZE8UC22I7IliogmRPVFshkJkTxSjvhDZE8WqJ0QEqNURIgL0MTVEgmkhElTGhkix4WqzoNlYWFp1k1fhvvMHgc9n2cFRPzXAou/8t/JAM7EH/SD66ocM9bfrb+WR7kTGm1iHjqR3HDjXbOYMsLR+p9bvPentr3iuSeYM0B7Uwvr9RXqfA+cqKTRyma2sdSB3tMlZJ7X62Ru3Qa7CiSOIF6uN9pmw4NMuTjYUcDAcM8wEkTjaZdasytm9AfHsOL6lUJkZx5c2yr7a2ZlSyGSAa8egt5qBK0JU/TH+Na7uha4QzLHBm7+0ee8Iz/Sf/XlwtjeRtnq2mVU4dVSXUr6l/NDpccS0e5KSSekKybR9lReQkmLAV9hU7ZiFKcWCq8t5zeOtWfndOWhczcYN6+VSFq2+RfQhGnUYWUeY5ph5m0k6+iHENjs9RXuE2OYbYN3HFeKOYjQmwLrfRYgUo7EB1n2bEM03khXd0F0epDXs0Obaovd1ty39UCDAif5ygO0PRyWBH64eqJuFAP9kAwAAAAAAAAAAAAAAU/wC52820szaQtwAAAAASUVORK5CYII="}),eC(zg,{height:"100%",top:"0%",altText:" offline icon",src:`data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1uby1uZXR3b3JrPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLW5vLW5ldHdvcmsiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJpY29uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMS4wMDAwMDAsIDIyLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMzMsMiBDMzQuNjU2ODU0MiwyIDM2LDMuMzQzMTQ1NzUgMzYsNSBMMzYsMjkgQzM2LDMwLjY1Njg1NDIgMzQuNjU2ODU0MiwzMiAzMywzMiBDMzEuMzQzMTQ1OCwzMiAzMCwzMC42NTY4NTQyIDMwLDI5IEwzMCw1IEMzMCwzLjM0MzE0NTc1IDMxLjM0MzE0NTgsMiAzMywyIFoiIGlkPSJTaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjQiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTIzLDggQzI0LjY1Njg1NDIsOCAyNiw5LjM0MzE0NTc1IDI2LDExIEwyNiwyOSBDMjYsMzAuNjU2ODU0MiAyNC42NTY4NTQyLDMyIDIzLDMyIEMyMS4zNDMxNDU4LDMyIDIwLDMwLjY1Njg1NDIgMjAsMjkgTDIwLDExIEMyMCw5LjM0MzE0NTc1IDIxLjM0MzE0NTgsOCAyMyw4IFoiIGlkPSJTaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjYiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTEzLDE2IEMxNC42NTY4NTQyLDE2IDE2LDE3LjM0MzE0NTggMTYsMTkgTDE2LDI5IEMxNiwzMC42NTY4NTQyIDE0LjY1Njg1NDIsMzIgMTMsMzIgQzExLjM0MzE0NTgsMzIgMTAsMzAuNjU2ODU0MiAxMCwyOSBMMTAsMTkgQzEwLDE3LjM0MzE0NTggMTEuMzQzMTQ1OCwxNiAxMywxNiBaIiBpZD0iU2hhcGUiIGZpbGwtb3BhY2l0eT0iMC44Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zLDIyIEM0LjY1Njg1NDI1LDIyIDYsMjMuMzQzMTQ1OCA2LDI1IEw2LDI5IEM2LDMwLjY1Njg1NDIgNC42NTY4NTQyNSwzMiAzLDMyIEMxLjM0MzE0NTc1LDMyIDIuMDI5MDYxMjVlLTE2LDMwLjY1Njg1NDIgMCwyOSBMMCwyNSBDLTIuMDI5MDYxMjVlLTE2LDIzLjM0MzE0NTggMS4zNDMxNDU3NSwyMiAzLDIyIFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNNS44MSwxLjI3IEwzNi43MywzMi4xOSBDMzcuNDMxNDAxNiwzMi44OTE0MDE2IDM3LjQzMTQwMTYsMzQuMDI4NTk4NCAzNi43MywzNC43MyBDMzYuMDI4NTk4NCwzNS40MzE0MDE2IDM0Ljg5MTQwMTYsMzUuNDMxNDAxNiAzNC4xOSwzNC43MyBMMy4yNywzLjgxIEMyLjU2ODU5ODM3LDMuMTA4NTk4MzcgMi41Njg1OTgzNywxLjk3MTQwMTYzIDMuMjcsMS4yNyBDMy45NzE0MDE2MywwLjU2ODU5ODM2OCA1LjEwODU5ODM3LDAuNTY4NTk4MzY4IDUuODEsMS4yNyBaIiBpZD0iUGF0aCIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=
`}),LB.style.transform="rotate(-315deg)",SB.style.transform="rotate(-45deg)",$n([LB,SB]);function $n(I){for(var s=0;s<I.length;s++){var R=I[s];R.style.height=nB/2+"px",R.style.maxHeight=nB/2+"px",R.style.minHeight=nB/2+"px",R.style.minWidth=nB+"px",R.style.width=nB+"px",R.style.maxWidth=nB+"px",R.style.top="calc(100%/2 - "+nB/2/2+"px)",R.style.filter="blur("+nB/10+"px)",R.style.left=0,R.style.zIndex=gn,R.style.position="absolute",R.style.transition=jg,R.style.opacity=".5",R.style.borderRadius="100px",R.classList.add("alanBtn-oval-bg-default")}}SQ.classList.add("alanBtn-bg-default"),dQ.classList.add("alanBtn-bg-listening"),fQ.classList.add("alanBtn-bg-speaking"),GQ.classList.add("alanBtn-bg-intermediate"),uQ.classList.add("alanBtn-bg-understood"),gt(SQ),gt(dQ),gt(fQ),gt(GQ),gt(uQ);var Pg="1",SI="0";SQ.style.opacity=Pg;var Ae=[TA,uA,AB,zg,Eg,Og,rE,PE,qE,_E,$E,AC,BC,QC,gC,EC];for(hg=0;hg<Ae.length;hg++)Ae[hg].setAttribute("draggable","false");Ge([dQ,fQ,GQ,uQ]),lA.appendChild(LB),lA.appendChild(SB),lA.appendChild(SQ),lA.appendChild(dQ),lA.appendChild(fQ),lA.appendChild(GQ),lA.appendChild(uQ),lA.appendChild(AB),lA.appendChild(uA),lA.appendChild(TA),lA.appendChild(Rg),lA.appendChild(Eg),lA.appendChild(Og),lA.appendChild(zg),lA.classList.add("alanBtn"),NA()&&K.classList.add("mobile"),wa(p);function Be(){BA.project.id=p.key,Zc(),xB(fE(ZQ)),window.tutorProject=window.alan.project(p.key,Qe(p.authData),p.host,null,{platform:$A==="demo"?"alanplayground":null,userAgent:navigator.userAgent,appName:window.location.hostname}),console.time("Alan: receiving options time"),window.tutorProject.on("connectStatus",hE),window.tutorProject.on("options",Yg),window.tutorProject.on("scripts",aC),window.tutorProject.on("text",f),window.tutorProject.on("parsed",YE),UA.on("command",Ng),UA.on("afterText",qI)}p&&(p.alanAudio&&(UA=p.alanAudio),p.key?Be():(Cg()||console.error("The Alan Button key wasn't provided"),xB(fE())));function Qe(I){var s=I||{};return s.uuid=gc(),console.info("Alan: connect to dialog: ",p.keepDialogSession!==!1?IC():null),Q(Q({},s),{dialogId:p.keepDialogSession!==!1?IC():null,capabilities:{textFormats:["text","html","markdown"]}})}var HI=ga(function(){RE(!0,!0)},400),ge=window.innerHeight,Ee=window.orientation;window.onresize=function(){if(!Cg()&&!oA){var I=Math.abs(ge-window.innerHeight),s=(NA()||Yd())&&hd(),R=Ee!==window.orientation,X=I!==0,P=s&&(I===84||I===95||I===50||I===0);if(Ee=window.orientation,ge=window.innerHeight,(R||jC||P)&&X){var q=K.getBoundingClientRect(),$;I===0?$=q.top+84:$=q.top,R&&window.orientation===0?jn():K.style.setProperty("top",Hc($)+"px","important")}if(RE(!1),HI({}),!BA.textChat.expanded){var aA=qA.getBoundingClientRect();ta(aA.width,aA.height,!1)}}};var Ce=!1;function WI(){if(navigator.permissions){var I="microphone";navigator.permissions.query({name:I}).then(function(s){s.state==="prompt"&&(Qc()?Ce||(Ce=!0,wC({overlay:!0,buttonUnderOverlay:!0})):wC({overlay:!0,buttonUnderOverlay:!0}),CB({micPermissionPrompt:!0})),s.state!=="granted"&&CB({micAllowed:!1})}).catch(function(s){console.warn("Not possible to detect mic permissions, details: ",s),setTimeout(function(){return CB({micAllowed:UA.isMicAllowed()})},300)})}else setTimeout(function(){return CB({micAllowed:UA.isMicAllowed()})},300)}UA.on("popup",KI);function ne(I){WI(),p.onBeforeMicStart&&p.onBeforeMicStart(),UA.on("micStart",le),UA.on("micStop",In),UA.on("micAllowed",oe),UA.on("audioRunning",ae),Ie(),UA.on("micFail",se),UA.on("playStart",ce),UA.on("playStop",De),UA.start(I),p.onMicStarted&&p.onMicStarted()}function vI(){i||(i=!0,CB({firstClick:!0}))}function VI(){sE||jE&&(BA.textChat.available&&CA?uE():(ee(),this.blur()))}function xI(){ee({activate:!0})}function en(){return"alan-btn-dialogId-for-projectId-".concat(dg())}function IC(){return UB?localStorage.getItem(en()):null}function TI(I){UB&&I&&localStorage.setItem(en(),I)}function OI(){UB&&localStorage.removeItem(en())}function ee(I){if(UA)QQ==="default"?uE(I):(UA.stop(),QQ===LQ?setTimeout(function(){qg(zC)},300):QQ===XQ&&setTimeout(function(){qg(oE)},300));else throw new Error("No alan audio instance was provided")}lA.addEventListener("click",VI);function uE(I){VB(),vI(),QQ==="default"&&Nw();var s=!0;if(BA.textChat.available&&(s=!1,CA&&(CB({buttonClicked:!0}),ta(TE("width"),TE("height"),!0),Nc(),GE(qA)),(I==null?void 0:I.activate)===!0&&bA&&bA&&(s=!0)),!s)return new Promise(function(X){X()});if(aQ){aQ===oE&&CB({micAllowed:!1}),qg(aQ);return}var R=new Promise(function(X,P){if(J){P({err:pI});return}if(Cn()){P({err:NI});return}function q($){$==="authorized"&&(window.tutorProject.off("connectStatus",q),ne(X))}if(UA)switch(QQ){case kQ:try{ne(X)}catch{aQ=yn,P({err:hI})}break;case ZQ:case Gg:window.tutorProject.on("connectStatus",q);break;case XQ:P({err:YI}),CB({micAllowed:!1});break;case UQ:case yQ:case $Q:case Ag:X(),CB({micAllowed:!0});break}else P({err:JI})});return R}function tC(){J||UA.stop()}function zI(I){return new Promise(function(s,R){var X={text:I};X.accept={voice:pB,image:!0,text:!0,format:["markdown","text","html"]},X.ctx={url:window.location.href},window.tutorProject.call("text",X,function(P,q){P?R({error:P}):q&&q.error?R(Q({},q)):s(q)})})}function Ie(){UA.isAudioRunning()&&CB({playAllowed:!0})}function KI(I){if(VB(),!Cg()){var s=I!=null&&I.popup?I.popup:I;s.type!=="chat"&&NA()||(s&&s.html&&(s.html=jB(s.html)),p.onEvent&&p.onEvent(Object.assign(I,{name:"popup"})),I&&wC(s))}}function te(I,s){if(I.style){var R=document.createElement("style");R.setAttribute("id","alan-stylesheet-popup"),R.type="text/css";var X="alan-popup-"+Bc();s.classList.add(X),R.innerHTML=I.style.replace(/(\.-?[_a-zA-Z]+[_a-zA-Z0-9-:]*\s*\{)/gi,".".concat(X," $&")),p.shadowDOM?p.shadowDOM.prepend(R):document.getElementsByTagName("head")[0].appendChild(R)}}function wC(I,s){if(!J&&!En&&_){if(I.type==="chat"){OA(I);return}iC=I;var R=I.message,X=I.buttonMarginInPopup,P=I.overlay,q=parseInt(nB,10),$=document.createElement("div"),aA=K.getBoundingClientRect(),DA=2147483647,fA=12;En=!0,$.id="alan-overlay-popup",$.classList.add("alan-overlay-popup"),I.buttonUnderOverlay!==!0&&(lA.style.zIndex=DA.toString()),$.style.zIndex=(DA-2).toString(),I.preventClick&&(lA.style.pointerEvents="none"),te(I,$),$.classList.add(EQ?"alan-btn-lib__left":"alan-btn-lib__right"),oA?($.style.position="absolute",$.style[EQ?"left":"right"]=(-X||0)+"px",$.style[BA.btn.isTopAligned?"top":"bottom"]=(X?-X:q+fA)+"px",$.classList.add(BA.btn.isTopAligned?"alan-btn-lib__top":"alan-btn-lib__bottom")):(EQ?$.style.left=aA.x+(-X||0)+"px":$.style.right=On+(-X||0)+"px",aA.top>80?($.classList.add("alan-btn-lib__bottom"),$.style.top=aA.top+(X?q+X:-fA)+"px",$.style.setProperty("transform","translateY(-100%)","important")):($.classList.add("alan-btn-lib__top"),$.style.top=aA.top+(X?-X:q+fA)+"px")),I.html?$.innerHTML=I.html:R&&($.classList.add("alan-btn-lib__default-popup"),$.innerHTML='<div class="alan-overlay-popup__body">'+R+"</div>");var YA=document.createElement("div");if(YA.id="alan-overlay-ok-btn",YA.classList.add("alan-overlay-popup__ok"),I.html&&$.children[0]?$.children[0].appendChild(YA):$.appendChild(YA),K.appendChild($),P&&s!==!0){var PA=document.createElement("div");PA.id="alan-overlay",PA.classList.add("alan-overlay"),PA.style.zIndex=(DA-3).toString(),K.appendChild(PA),PA.addEventListener("click",VB)}YA.addEventListener("click",jI),document.addEventListener("keyup",we);var eB="showPopup";I.name&&(eB+=":"+I.name),kB(eB)}}function jI(){VB(),CB({popupCloseClicked:!0})}function we(I){I.keyCode===27&&(VB(),CB({popupCloseClicked:!0}))}function VB(I,s,R){s!==!0&&(iC=null);var X=K.querySelector("#alan-overlay"),P=K.querySelector("#alan-overlay-popup");if(P){var q=K.querySelector("#alan-overlay-ok-btn");q&&q.removeEventListener("click",VB),X&&R!==!0&&(X.remove(),X.removeEventListener("click",VB)),P&&P.remove(),document.removeEventListener("keyup",we),lA.style.zIndex=BA.btn.zIndex,lA.style.pointerEvents="auto",En=!1}}var iC;function RE(I,s){var R=K.querySelector("#alan-overlay-popup");R&&(R.style.visibility=I?"visible":"hidden",I&&(VB(null,!0,s),iC&&wC(iC,s)))}function ie(I){var s="";if(!(V||lE||!gQ)){if(!CA){I.name==="recognized"&&NE(Object.assign(I,{type:"request"}));return}KE=!0,p.hideRecognizedText||(hA.classList.value.indexOf("alanBtn-text-appearing")===-1&&(hA.style.opacity="1",hA.classList.add("alan-btn-lib__with-text"),hA.classList.add("alanBtn-text-appearing"),hA.classList.remove("alanBtn-text-disappearing")),I.text&&(s=I.text,s.length>200&&(s=s.substr(0,200)),UE.innerHTML=s),hA.classList.contains("alan-btn-lib__absolute-positioned")&&(s.length<33?(hA.style.whiteSpace="nowrap",hA.style.minWidth="auto"):(hA.style.minWidth="236px",hA.style.whiteSpace="normal")),s.length>60&&s.length<=80?hA.classList.add("alanBtn-recognised-text-holder-long"):s.length>80?hA.classList.add("alanBtn-recognised-text-holder-super-long"):(hA.classList.remove("alanBtn-recognised-text-holder-long"),hA.classList.remove("alanBtn-recognised-text-holder-super-long")),PI(s))}}function PI(I){NA()||p.hideRecognizedText||(UE.innerText=I)}function oC(I,s){if(!p.hideRecognizedText&&KE){if(s===!0){hA.style.opacity="0",hA.classList.remove("alanBtn-text-appearing"),KE=!1;return}else hA.classList.add("alanBtn-text-disappearing"),hA.classList.remove("alanBtn-text-appearing");KE=!1,setTimeout(function(){UE.innerHTML="",hA.classList.remove("alanBtn-recognised-text-holder-long"),hA.classList.remove("alanBtn-recognised-text-holder-super-long"),hA.classList.remove("alan-btn-lib__with-text")},I||810)}}function Yg(I){var s,R,X,P,q,$,aA,DA,fA,YA,PA,eB,BB,wB,TB;console.log("Alan: options received"),console.timeEnd("Alan: receiving options time"),I&&I.web?(tA=((s=I.web.alanButtonDragAndDrop)===null||s===void 0?void 0:s.keepButtonPositionAfterDnD)||I.web.keepButtonPositionAfterDnD,tA||cf(),nn(tA)):nn(),I&&I.web&&(QA=(R=I.web.alanButtonDragAndDrop)===null||R===void 0?void 0:R.dragAndDropEnabled),I&&I.web&&I.web.hideS2TPanel===!0?af():of(),I&&I.web&&(((X=I.web.alanButtonPopup)===null||X===void 0?void 0:X.popupEnabled)===!0||I.web.popupEnabled===!0)?_=!0:(_=!1,VB()),Cg()||(I&&I.web&&((q=(P=I.web.chatOptions)===null||P===void 0?void 0:P.textChat)===null||q===void 0?void 0:q.enabled)===!0?(BA.textChat.available=!0,bA=(DA=(aA=($=I.web.chatOptions)===null||$===void 0?void 0:$.textChat)===null||aA===void 0?void 0:aA.voice)===null||DA===void 0?void 0:DA.enabled,BA.textChat.options=(fA=I.web.chatOptions)===null||fA===void 0?void 0:fA.textChat,Ua()===null&&(!((eB=(PA=(YA=I.web.chatOptions)===null||YA===void 0?void 0:YA.textChat)===null||PA===void 0?void 0:PA.audio)===null||eB===void 0)&&eB.enabled?ca(!1):mw(!1)),Ef(),(((TB=(wB=(BB=I.web.chatOptions)===null||BB===void 0?void 0:BB.textChat)===null||wB===void 0?void 0:wB.popup)===null||TB===void 0?void 0:TB.openByDefualt)===!0||Cf())&&Nc(!0)):(BA.textChat.available=!1,ra())),I&&I.web&&I.web.timeout!==void 0&&(Zn=I.web.timeout,Xn()),I&&I.web&&yc(I.web),lf(I),p.mode!=="tutor"&&I&&I.web&&qn(I.web.buttonSize||Kg[$A].btnSize),UB&&I&&localStorage.setItem(mc(),JSON.stringify(I)),I&&I.web&&I.web.playReadyToListenSound!==void 0&&sf(I.web.playReadyToListenSound),I&&I.web&&I.web.hidden===!0?wf():(J&&kc(),v||(v=!0,CB({buttonReady:!0})))}function hE(I){if(I==="disconnected")OE!==Gg&&xB(fE(ZQ));else if(I==="authorized"){xB(OE||fE());var s=window.tutorProject.getSettings().dialogId;IC()!==s&&dc(),console.info("Alan: connected to dialog - ",s,"prev. dialog: ",IC()||"-"),MA=s,TI(s),fc(!0),FB=jd()}p.onConnectionStatus&&p.onConnectionStatus(I)}function oe(){CB({micAllowed:!0})}function ae(){Ie()}function le(){if(m){m=!1,UA.start();return}VB(),xB(UQ),pw(),gQ=!0,window.tutorProject&&(window.tutorProject.off("recognized",dB),window.tutorProject.off("parsed",YE),window.tutorProject.off("options",Yg),window.tutorProject.on("recognized",dB),window.tutorProject.on("parsed",YE),window.tutorProject.on("options",Yg))}function In(){_g(),zE=!1,UA.off("micStart",le),UA.off("micStop",In),UA.off("micAllowed",oe),UA.off("audioRunning",ae),UA.off("micFail",se),UA.off("playStart",ce),UA.off("playStop",De),oC(),Bf(),xB(kQ),gQ=!1,window.tutorProject&&(window.tutorProject.off("parsed",YE),window.tutorProject.off("recognized",dB),window.tutorProject.off("connectStatus",hE),window.tutorProject.off("options",Yg)),p.onMicStopped&&p.onMicStopped()}function se(I){In(),I&&(VB(),I.name==="NotAllowedError"?(xB(XQ),setTimeout(function(){i&&qg(oE)},300)):I.name==="SecurityError"?(xB(LQ),setTimeout(function(){qg(zC)},300)):console.error(I.name+" "+I.message))}function qg(I){var s=K.querySelector("#alan-alert-popup");if(!s){var R=document.createElement("div");s=document.createElement("div");var X=2147483647;R.id="alan-overlay-for-alert",R.classList.add("alan-overlay-for-alert"),s.id="alan-alert-popup",s.classList.add("alan-alert-popup"),lA.style.zIndex=X.toString(),R.style.zIndex=(X-3).toString(),s.style.zIndex=(X-2).toString(),s.innerHTML=I;var P=document.createElement("div");P.id="alan-alert-popup-close-btn",P.classList.add("alan-alert-popup__close-btn"),s.appendChild(P),K.appendChild(s),K.appendChild(R),P.addEventListener("click",tn),R.addEventListener("click",tn),document.addEventListener("keyup",Fe)}}function Fe(I){I.keyCode===27&&tn()}function tn(){var I=K.querySelector("#alan-overlay-for-alert"),s=K.querySelector("#alan-alert-popup"),R=K.querySelector("#alan-alert-popup-close-btn");R&&R.removeEventListener("click",VB),I&&(I.remove(),I.removeEventListener("click",VB)),s&&s.remove(),lA.style.zIndex=BA.btn.zIndex,lA.style.pointerEvents="auto",document.removeEventListener("keyup",Fe)}function ce(I){console.log("BTN: play start"),zE=!0,xB(yQ),Qg()}function De(I){console.log("BTN: play stop"),zE=!1,pw(),xB(UQ),Qg()}function u(I){var s,R=Object.assign(I,{name:"text",type:"response"});((s=R.images)===null||s===void 0?void 0:s.length)>0&&(R.images=yA(R.images)),p.onEvent&&p.onEvent(R),OA(R),Qg()}function f(I){var s,R,X,P;!gQ&&((R=(s=I.ctx)===null||s===void 0?void 0:s.opts)===null||R===void 0?void 0:R.activate)===!0?uE({activate:(P=(X=I.ctx)===null||X===void 0?void 0:X.opts)===null||P===void 0?void 0:P.activate}).then(function(){u(I)}):u(I)}window.sendFakeMsgs=function(I){if(I&&I.length>0)for(var s=function(X){setTimeout(function(){OA(I[X])},1e3*(X+1))},R=0;R<I.length;R++)s(R)};function qI(I){var s,R;gQ&&((R=(s=I.ctx)===null||s===void 0?void 0:s.opts)===null||R===void 0?void 0:R.deactivate)===!0&&tC()}function YE(I){var s=Object.assign(I,{name:"parsed"});p.onEvent&&p.onEvent(s),Qg(),ie(s)}function dB(I){var s=Object.assign(I,{name:"recognized"});p.onEvent&&p.onEvent(s),I.final===!0?xB(Ag):xB($Q),ie(s),BA.textChat.available&&bA&&!CA&&(s==null?void 0:s.final)===!0&&(OA({type:"response",name:"loading",text:"",reqId:s.reqId}),UA.setProcessingState()),Qg()}function Yw(I){var s,R,X,P;(gQ||!gQ&&((R=(s=I.ctx)===null||s===void 0?void 0:s.opts)===null||R===void 0?void 0:R.force)===!0)&&p.onCommand&&p.onCommand(I.data),gQ&&(xB(UQ),((P=(X=I.ctx)===null||X===void 0?void 0:X.opts)===null||P===void 0?void 0:P.deactivate)===!0&&tC()),Qg()}function Ng(I){var s,R;!gQ&&((R=(s=I.ctx)===null||s===void 0?void 0:s.opts)===null||R===void 0?void 0:R.activate)===!0?uE().then(function(){Yw(I)}):Yw(I)}function aC(I){p.onEvent&&p.onEvent(Object.assign(I,{name:"scripts"}))}function _g(){vn||(Qn.currentTime=0,Qn.play().catch(function(){console.log("No deactivation sound, because the user didn't interact with the button")}))}function Nw(){KC&&(MQ.loop=!0,MQ.muted=!0,MQ.play().catch(function(I){console.log(I)}))}function pw(){Bn=!1,KC&&(UA.skipExternalSounds(!0),Vn||(MQ.currentTime=0,MQ.muted=!1,MQ.loop=!1,MQ.play().catch(function(I){console.log(I)})))}function ng(I,s){I&&I.src&&(I.style.opacity=1);for(var R=0;R<s.length;R++)s[R].style.opacity=0}function pg(I){var s=I,R={"<script>":"&lt;script&gt;","<\/script>":"&lt;/script&gt;"};for(var X in R){var P=new RegExp("".concat(X),"gi");s=String(s).replace(P,R[X])}return s}function NE(I){var s=fe();s&&(I.final===!0?(OA(I),s.value=""):s.value=I.text)}function Jw(I,s){var R=document.createElement("div");R.id="img-preview-overlay",R.classList.add("alan-btn__image-preview-overlay"),NA()&&R.classList.add("mobile"),R.style.zIndex=BA.btn.zIndex+3,s&&(R.setAttribute("data-img-index",s.getAttribute("data-img-index")),R.setAttribute("data-msg-req-id",s.getAttribute("data-msg-req-id")));var X=document.createElement("div");X.id="img-preview-overlay__close-icon",X.innerHTML=`
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.342029 15.0105C-0.113105 15.4658 -0.113035 16.2036 0.34217 16.6587C0.797374 17.1138 1.53533 17.1138 1.99046 16.6586L8.50015 10.1482L15.0104 16.658C15.4655 17.1131 16.2035 17.1131 16.6586 16.658C17.1138 16.2029 17.1138 15.4649 16.6586 15.0098L10.1483 8.49998L16.6582 1.98944C17.1132 1.53427 17.1132 0.796371 16.6579 0.341282C16.2028 -0.113819 15.4648 -0.113749 15.0097 0.341421L8.49991 6.85183L1.98966 0.341981C1.5345 -0.113143 0.796535 -0.113143 0.341377 0.341981C-0.113792 0.797116 -0.113792 1.53502 0.341377 1.99016L6.85187 8.5001L0.342029 15.0105Z" fill="#FFFFFF"/>
</svg>
`,X.classList.add("alan-btn__image-preview-overlay-close-icon"),X.addEventListener("click",fA);var P=I.cloneNode();P.className="",P.classList.add("alan-btn__chat-response-img-el"),R.appendChild(P),R.appendChild(X),R.addEventListener("click",fA);var q,$,aA=null,DA=null;s&&(q=s.querySelector(".alan-btn__chat-response-imgs-wrapper-left-arrow"),$=s.querySelector(".alan-btn__chat-response-imgs-wrapper-right-arrow"),q&&$&&(aA=q.cloneNode(!0),DA=$.cloneNode(!0),aA.classList.add("alan-btn__image-preview-overlay-left-icon"),aA.classList.remove("alan-btn__chat-response-imgs-wrapper-left-arrow"),DA.classList.add("alan-btn__image-preview-overlay-right-icon"),DA.classList.remove("alan-btn__chat-response-imgs-wrapper-right-arrow"),aA.addEventListener("click",PA),DA.addEventListener("click",eB),R.appendChild(aA),R.appendChild(DA))),document.addEventListener("keydown",YA),Hn.appendChild(R);function fA(){aA&&DA&&(aA.removeEventListener("click",PA),DA.removeEventListener("click",eB)),X.removeEventListener("click",fA),R.removeEventListener("click",fA),document.removeEventListener("keydown",YA),R.remove()}function YA(BB){BB.keyCode===27&&fA()}function PA(BB){var wB=BB.target.closest(".alan-btn__image-preview-overlay"),TB=eg(wB),HQ=eg(s);lC(wB,TB,aA,DA,!0),lC(s,HQ,q,$,!0),BB.stopPropagation()}function eB(BB){var wB=BB.target.closest(".alan-btn__image-preview-overlay"),TB=eg(wB),HQ=eg(s);lC(wB,TB,aA,DA,!1),lC(s,HQ,q,$,!1),BB.stopPropagation()}}function re(I,s){var R=I.parentNode;YB(s)?I.tagName.toLowerCase()==="iframe"?I.src=s:(R.insertAdjacentHTML("afterbegin",$I(s)),I.remove()):I.tagName.toLowerCase()==="img"?I.src=s:(R.insertAdjacentHTML("afterbegin",_I(s)),I.remove())}function lC(I,s,R,X,P){var q=+I.getAttribute("data-img-index"),$=I.getAttribute("data-msg-req-id"),aA=mA.find(function(fA){var YA;return fA.type!=="request"&&(fA.reqId===$||((YA=fA==null?void 0:fA.ctx)===null||YA===void 0?void 0:YA.reqId)===$)});if(aA){var DA=aA.images.length;P?q>0&&(q=q-1,I.setAttribute("data-img-index",q.toString()),re(s,aA.images[q].src),q===0&&R.classList.add("invisible"),q<DA-1&&X.classList.remove("invisible")):q<DA&&(q=q+1,I.setAttribute("data-img-index",q.toString()),re(s,aA.images[q].src),q>0&&R.classList.remove("invisible"),q===DA-1&&X.classList.add("invisible"))}}window.addEventListener("click",function(I){var s=I.target,R=s.classList.contains("alan-btn__chat-response-img");if(s.tagName.toLowerCase()==="img"&&s.closest(".alan-btn__chat-response-text-wrapper")){Jw(s,null);return}if(s.classList.contains("alan-btn__chat-response-imgs-wrapper-right-arrow")||s.classList.contains("alan-btn__chat-response-imgs-wrapper-left-arrow")||R){var X=s.closest(".alan-btn__chat-response-imgs-wrapper");if(R){Jw(s,X);return}var P=eg(X),q=X.querySelectorAll(".alan-btn__chat-response-imgs-wrapper-left-arrow")[0],$=X.querySelectorAll(".alan-btn__chat-response-imgs-wrapper-right-arrow")[0];lC(X,P,q,$,s.classList.contains("alan-btn__chat-response-imgs-wrapper-left-arrow")),I.stopPropagation()}});function eg(I){return I.querySelectorAll(".alan-btn__chat-response-img-el")[0]||I.querySelectorAll("iframe")[0]}function Ue(I){try{return I.target?I.target:window.location.host===new URL(I.href).host?"_self":"_blank"}catch{return"_blank"}}function Me(I){var s=document.createElement("div");s.innerHTML=I;for(var R=s.querySelectorAll("a"),X=0;X<R.length;X++)R[X].setAttribute("target",Ue(R[X]));var P=s.innerHTML;return s.remove(),P}function _I(I){var s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAIAAAD2HxkiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACldJREFUeNrs3Wtv03YbwGEoZRyebRLivA22aYhNQki82vf/Apu2Fdi6lh62MppTW0jTloYkz/20kpenFJo4dg72db1AiIMLrn+9/3Yd53yv1zsHTM55EYIIQYSACEGEgAhBhIAIQYSACEGEgAhBhIAIQYSACEGEgAhBhIAIQYSACEGEgAhBhIAIQYSACEGEgAhBhMBsRLi1tbW6umpfM4vu379/8+bNXD/E/Bj+G+12u9ls+nQyi+LozftDzNnLMFkiBBGCCAERgggBEYIIARGCCAERgggBEYIIARGCCAERggiBnM1P+b9vbm7uzp07Pk+MolKpdDodEaaP8OHDhw4jRrG1tTXNEVqOgghBhIAIQYSACEGEgAhBhIAIQYSACEGEgAhBhIAIQYSACEGEgAhBhIAIQYSACEGEgAhBhIAIQYRARubtgkEcHBy02+0LFy5cvXrV3kCE49Dr9ba3txuNRr1ef/v27f/tsvn5a9eu3bp1K36Mn9tXiDB7r169WltbO9Fe4t27d7UjMRjvHYmf2GmIMButVuv58+fx4yB/uNPpRKv//PPP999/f/36dXuPdFyY+VcsPn/++ecBC0wcHh4uLCz89ddfdiAiHEmlUomWUr+p8srKytLSkt2ICFN68+bN4uLiiBt5+fJlLE3tTEQ4tHa7/fTp0263O/qmlpeXo2e7FBEOJ07n4rwuk01FyS9evCjPrsvkKxdlj/Dg4CCWkRlu8PXr1/V6vSR7L86Em82mikQ4kjiLy/zL+d9//12GXbezsxNfv169eqUiEY6kWq1mvs04LYzzzGLvt06ns7i42Ov1KpVK6kvKiPB/35qP5Wjmm41Ds1arFXvXra6u7u/vH9cYHQpJhOnP33LacrHPlGK/9Z9IW5GKML08xuCx4ylRSHEK/ccff8S07/+K4xszIkzp3bt3OW25wOeEyUK0n2EoQsYkJt7Gxsb7vx6nhfl9RRNhkeX3EqSLFy+WYSHa/1suz4gwjStXruS05UuXLhVyIbq3t/eh33XfrAjT+PTTT3Pa8meffVaShWii1Wrld7VZhIUVqeS0brx27VpJFqKGoQhHcv78+Rs3bmS+2f8cKc9CNFGr1Qp/q5AIs/fVV19Fitlu8/79+6VaiPYPTJdnRJhmat29ezfb88xbt24VaSF6fI/ogH/eilSEaXz99ddZPbkwhup3332X+Wid7EJ0qIfuxKp1Z2fHQSXC4Vy6dOnRo0eZlPPtt98W6ZLM4AvRfu6eEWEaUc6DBw9G3Mjt27eLdDY47EI04fKMCFP68ssvf/jhh7m5lDvk3r178deLtEPW19eHffpjUu/m5qYjSoRp3Llz58mTJ5cvXx7qb8X5ZORXsFPBZrM5ypNUXZ4Z7hCyC/p9/vnnP/7448uXL2MOnHlHcozNu3fvfvPNNwW7U3TAb81/xP7+/vb2dsHuWBDhGNcGc3Oxtoy64jCqVqvx44kaY+LF4XX9+vUbN24U8h7R1AvRE8NQhCIcbb/Mz988cu7oCQ7J/SJR3SeffFLg//iIC9FEo9E4PDws9r4S4fhcuHCheDdk57QQ7d/U5uZmwW4eymvxZRdMp93d3fE/Wjdm4OgL0f4VaSY9i5AJiAXw0yPj7DCyz/a9pQ4ODuKM2mdThDNpfX09juCtra1nz56Np8PjhWjmH8v3KkQ4qwvR5GaxRqMxng5jBsbHzXyz8e//0BseI8LptbS01F9dHMfPnz/PtcPMF6KJOCd0K6kIZ0ys395/SES9Xs+vw5wWoomI0OUZEc6Mdru9urp66m/l12FOC9FELEfj5NYnV4SzYXl5+SOvP8ijw1arldNC9MR498kV4QyIVeiZz4aIDn///fesOoxVYq4L0URMwvzecUCEZHZitri4OMifrNVq0WEmZ1kxA8fzxjXxr/XiJhFOu42NjUEeZ5Z0GOvSETuMhej6+vrY/oPunhHhVNvf319bWxvqr4w4D8e2EE0cHh42Gg2faxFOqeXl5RQ9VKvV1B2ObSHar/8tDRHhFKlUKqlHRHSY4kUPY16IJnZ2dgr8to0inFWdTmdlZWXEhofqMP7k4uLi+F+fcc7dMyKcTi9evBj91sqhOtzY2Jjgu+pubm5OpH8Rcrrd3d2sJkN0OMjjCff29j50R854uDwjwilyfH0yw6v2MWQ+/p3G8V8RPZW7Z0Q4LWIGZn7HZnQYmU3nQjSxvb3t8owIJy/OA+NsMKeTrlPn4cQXooahCNPLY/22srLS6XTym7EnOpyShWj/VwqXZ0Q4xNop8we9NBqNvN/E70SHU7IQTbTb7Vqt5ugS4UBiCbe1tbWwsJBVh7Gd5eXl8Zxz/vnnn+eO7ombnoWoFempPHf0Y2PweIDET6LDx48fp367mMTa2trYLkscH+gTeXTimV6/fh2nqVevXnWYmYRnjMH+IH/77bcRj+Y47FK83d+IHU7VQtQwFGGaMZjY2dn59ddfR7mgMqn7xaZTnBjbGyIcdAz2L6JiHqbrMI6595/gVGbtdrtardoPIhx0DPZ3GPPwzHdNe/+AG8/1mNliRSrC4cZgIvqMeThUh7FB7yB96p7M8K0vRFiKMdh/9Aw+D2N4+pL/IV7pK8Khx2Ci2WxGh2fOt263u7S0ZK9+SJwW5nfzkAgLOwaH6nBjYyPXR+vOulhNuDwjwjRjMBGBfaTDg4ODiTxIYrZ4ub0IU47B/g5/+eWXUzuMhai11plin4//qVMiLMgYTLRarejw8PCw/xfr9bpXkRuGIsx9DPZ3GOvSpMMYgK7HDK5SqZR5ySDCUcfgiXl4/OCmtbU1b445uCgw75d3ibDgYzCxt7cX8zBWoWO+UbsAyvytVBFmMwb7O1xYWPC+C8Pa3d2d2hd8iHBmxiCGoQgnPwYZRbVaHfbOeBEag2Sp2+2W8/JM2SM0Bq1IRWgM8q9Wq1XClz6XOkJj0DAUoTHISbVarWwvgC5vhMbgdOp2u5ubmyI0Bpmkst3PXdIIjcFptre3F18lRWgMMkmlWpGWMUJjcPqV6vJM6SI0BmdCqS7PlC5CY3BWlOcbhuWK0BicIfv7+yW5PFOuCI1Bw1CExiBDqNfrJx6fJUJjkLHq9Xpl+MZ9WSI0BmdURFj4Z4WU5e2y4yz/iy++cEzPordv316+fFmEM0+BWI4CIgQRAiIEEQIiBBECIgQRAiIEEQIiBBGCCAERgggBEYIIgYmY9sdb9Hq9ZrPp88Qout2uCNPrdDo//fSTwwjLUUCEIEJAhCBCQIQgQkCEIEJAhCBCQIQgQkCEIEJAhCBCQIQgQkCEIEJAhCBCQIQgQkCEIEJAhCBCQIQgQkCEIEJAhCBCQIQgQkCEIEJAhCBCQIQgQkCEIEJAhCBCECEgQhAhIEIQISBCECEgQhAhIEIQISBCECEgQhAhIEIQISBCECEgQhAhIEIQIZCx871ez14AEYIIARGCCAERgggBEYIIARGCCAERgggBEYIIARGCCAERgggBEYIIARGCCAERgggBEYIIARGCCAERgggBEYIIARHC7PqvAAMA/BkrMLAeft8AAAAASUVORK5CYII=";return'<img class="alan-btn__chat-response-img alan-btn__chat-response-img-el" src="'.concat(I,`" onerror="this.src = '`).concat(s,`'; this.classList.add('not-found');" onload = "if(this.naturalWidth <= this.width && this.naturalHeight <= this.height){this.classList.add('img-none'); this.style.height = this.naturalHeight + 20 + 'px';this.style.minHeight = this.naturalHeight  + 20 + 'px'; this.style.maxHeight = this.naturalHeight  + 20 + 'px'; }"/>`)}function $I(I){return'<iframe class="alan-btn__chat-response-video" width="560" height="315" src="'.concat(I,'?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')}function wn(I){var s,R,X,P,q="",$="";if(((s=I.images)===null||s===void 0?void 0:s.length)>0){var aA=I.images[0].src;YB(aA)?$=$I(aA):$=_I(aA)}if(((R=I.images)===null||R===void 0?void 0:R.length)>0){var DA='<img class="alan-btn__chat-response-imgs-wrapper-left-arrow invisible" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCAzMCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiPgogICAgICAgICAgICAgICAgICAgIDxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2RfMzA1XzE1MDIpIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMy41MDEzNSAyNS4yMDc0TDIzLjg1MjYgNDUuNTAyNEMyNC41MTk0IDQ2LjE2NyAyNS41OTkgNDYuMTY1OSAyNi4yNjQ2IDQ1LjQ5OUMyNi45Mjk4IDQ0LjgzMjIgMjYuOTI4MSA0My43NTIxIDI2LjI2MTIgNDMuMDg3TDcuMTIxMjggMjMuOTk5OUwyNi4yNjE5IDQuOTEyOTNDMjYuOTI4NyA0LjI0Nzc4IDI2LjkzMDQgMy4xNjgzMiAyNi4yNjUzIDIuNTAxNDVDMjUuOTMxNiAyLjE2NzE1IDI1LjQ5NDUgMiAyNS4wNTczIDJDMjQuNjIxMyAyIDI0LjE4NTggMi4xNjYwMyAyMy44NTI3IDIuNDk4MDFMMy41MDEzNSAyMi43OTI1QzMuMTgwMiAyMy4xMTIgMi45OTk5OSAyMy41NDY5IDIuOTk5OTkgMjMuOTk5OUMyLjk5OTk5IDI0LjQ1MyAzLjE4MDcxIDI0Ljg4NzMgMy41MDEzNSAyNS4yMDc0WiIgZmlsbD0id2hpdGUiLz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPGRlZnM+CiAgICAgICAgICAgICAgICAgICAgPGZpbHRlciBpZD0iZmlsdGVyMF9kXzMwNV8xNTAyIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjkuNzYzMSIgaGVpZ2h0PSI1MCIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgogICAgICAgICAgICAgICAgICAgIDxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CiAgICAgICAgICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CiAgICAgICAgICAgICAgICAgICAgPGZlT2Zmc2V0IGR5PSIxIi8+CiAgICAgICAgICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMS41Ii8+CiAgICAgICAgICAgICAgICAgICAgPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBvcGVyYXRvcj0ib3V0Ii8+CiAgICAgICAgICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMjUgMCIvPgogICAgICAgICAgICAgICAgICAgIDxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzMwNV8xNTAyIi8+CiAgICAgICAgICAgICAgICAgICAgPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfMzA1XzE1MDIiIHJlc3VsdD0ic2hhcGUiLz4KICAgICAgICAgICAgICAgICAgICA8L2ZpbHRlcj4KICAgICAgICAgICAgICAgICAgICA8L2RlZnM+CiAgICAgICAgICAgICAgICAgICAgPC9zdmc+Cg==" />',fA='<img class="alan-btn__chat-response-imgs-wrapper-right-arrow '.concat(((X=I.images)===null||X===void 0?void 0:X.length)>1?"":"invisible",'" src="data:image/svg+xml;base64,PHN2ZyAgd2lkdGg9IjMwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMzAgNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIj4KICAgICAgICAgICAgICAgICAgICA8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9kXzMwNV8xNDk3KSI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI2LjI2MTcgMjIuNzkyNkw1LjkxMDQxIDIuNDk3NTdDNS4yNDM2MyAxLjgzMzAxIDQuMTY0MDkgMS44MzQxMyAzLjQ5ODQyIDIuNTAxQzIuODMzMjYgMy4xNjc3OSAyLjgzNDk4IDQuMjQ3OTQgMy41MDE4NSA0LjkxM0wyMi42NDE4IDI0LjAwMDFMMy41MDExNyA0My4wODcxQzIuODM0MzggNDMuNzUyMiAyLjgzMjY2IDQ0LjgzMTcgMy40OTc3MyA0NS40OTg2QzMuODMxNDIgNDUuODMyOCA0LjI2ODU5IDQ2IDQuNzA1NzUgNDZDNS4xNDE3OSA0NiA1LjU3NzI0IDQ1LjgzNCA1LjkxMDMzIDQ1LjUwMkwyNi4yNjE3IDI1LjIwNzVDMjYuNTgyOSAyNC44ODggMjYuNzYzMSAyNC40NTMxIDI2Ljc2MzEgMjQuMDAwMUMyNi43NjMxIDIzLjU0NyAyNi41ODIzIDIzLjExMjcgMjYuMjYxNyAyMi43OTI2WiIgZmlsbD0id2hpdGUiLz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPGRlZnM+CiAgICAgICAgICAgICAgICAgICAgPGZpbHRlciBpZD0iZmlsdGVyMF9kXzMwNV8xNDk3IiB4PSIwIiB5PSIwIiB3aWR0aD0iMjkuNzYzMSIgaGVpZ2h0PSI1MCIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgogICAgICAgICAgICAgICAgICAgIDxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CiAgICAgICAgICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CiAgICAgICAgICAgICAgICAgICAgPGZlT2Zmc2V0IGR5PSIxIi8+CiAgICAgICAgICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMS41Ii8+CiAgICAgICAgICAgICAgICAgICAgPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBvcGVyYXRvcj0ib3V0Ii8+CiAgICAgICAgICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMjUgMCIvPgogICAgICAgICAgICAgICAgICAgIDxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzMwNV8xNDk3Ii8+CiAgICAgICAgICAgICAgICAgICAgPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfMzA1XzE0OTciIHJlc3VsdD0ic2hhcGUiLz4KICAgICAgICAgICAgICAgICAgICA8L2ZpbHRlcj4KICAgICAgICAgICAgICAgICAgICA8L2RlZnM+CiAgICAgICAgICAgICAgICAgICAgPC9zdmc+"/>');q='<div class="alan-btn__chat-response-imgs-wrapper" data-img-index="0" data-msg-req-id="'.concat(I.reqId||((P=I.ctx)===null||P===void 0?void 0:P.reqId),'"><div class="alan-btn__chat-response-img-block">').concat($,"</div>").concat(DA).concat(fA,"</div>")}return q}function Jg(I){for(var s,R,X="",P="",q=0;q<((s=I.links)===null||s===void 0?void 0:s.length);q++){var $=I.links[q],aA=Ue($);P+='<a class="alan-btn__chat-response-link" href="'.concat($.href,'" target="').concat(aA,`">
                   `).concat(NB($),`
                    <span class="alan-btn__chat-response-link-title">`).concat($.title||$.href,`</span>
                </a>`)}return!((R=I.links)===null||R===void 0)&&R.length&&(X=`<div class="alan-btn__chat-response-links-wrapper">
                <span style="margin-right: 10px;display: inline-block;">Read more: </span>
                    `.concat(P,`
            </div>`)),X}function At(I){return`<div class="alan-btn__chat-response-commands-wrapper">
            `.concat(aa(I),`
                <span class="alan-btn__chat-response-like-btn">`).concat(sB.like,`</span>
                <span class="alan-btn__chat-response-dislike-btn">`).concat(sB.dislike,`</span>
            </div>`)}function Bt(I){var s,R="";return I.text?(((s=I.ctx)===null||s===void 0?void 0:s.format)==="markdown"?R=sA.parse(pg(I.text),{mangle:!1,headerIds:!1}):R=pg(I.text),R?'<span class="alan-btn__chat-response-text-wrapper">'.concat(Me(R),"</span>"):""):""}function aa(I){var s='<div class = "alan-btn__chat-response__copy-btn">'.concat(sB.copy).concat(sB.copied,"</div>");return I.initLoad||I.type==="response"&&c(I)?s:""}function la(I){return"".concat(wn(I)).concat(Bt(I)).concat(Jg(I)).concat(At(I)).concat(D(I))}xd(function(){return document.getElementById("chatMessages")}),Vd(mA.length,function(I){return Fa(I)}),document.addEventListener("click",function(I){var s,R,X,P,q=I.target;if(q=q.closest(".alan-btn__chat-response__copy-btn"),q){q.classList.add("alan-copy-btn-copied"),setTimeout(function(){q.classList.remove("alan-copy-btn-copied")},2e3);var $=q.closest("[data-msg-index]"),aA=$.getAttribute("data-msg-index"),DA=mA[aA],fA="";DA&&(fA=DA.text||"",Uw((((s=DA.images)===null||s===void 0?void 0:s.length)>0?((R=DA.images)===null||R===void 0?void 0:R.map(function(YA){return YA.src}).join(`
`))+`

`:"")+fA+(((X=DA.links)===null||X===void 0?void 0:X.length)>0?`

Read more:
`+((P=DA.links)===null||P===void 0?void 0:P.map(function(YA){return YA.href}).join(`
`)):"")))}},!1);function OA(I,s,R){var X,P,q,$,aA,DA,fA,YA,PA,eB,BB,wB,TB;if(BA.textChat.available){var HQ="",WQ="",Ig=document.getElementById("chatMessages");I.type==="response"&&I.name==="text"&&window.fakeMsg&&(I.text=((X=window.fakeMsg)===null||X===void 0?void 0:X.text)||I.text,I.images=((P=window.fakeMsg)===null||P===void 0?void 0:P.images)||I.images,I.links=((q=window.fakeMsg)===null||q===void 0?void 0:q.links)||I.links,I.hasLikes=(($=window.fakeMsg)===null||$===void 0?void 0:$.hasLikes)||I.hasLikes,!((aA=window.fakeMsg)===null||aA===void 0)&&aA.text&&(I.ctx?I.ctx.format="markdown":I.ctx={format:"markdown"}),window.fakeMsg=null),I.type==="chat"?WQ='<div class="alan-btn__chat-popup">'.concat(I.html,"</div>"):((I.name==="text"||I.name==="parsed"||I.name==="recognized")&&(I.type==="request"?HQ=pg(I.text):HQ=la(I),WQ='<div class="alan-btn__chat-inner-msg '.concat(I.type==="request"?"alan-btn__chat-request":"alan-btn__chat-response"," ").concat(((DA=I.images)===null||DA===void 0?void 0:DA.length)>0?"with-images":"",'">').concat(HQ,"</div>")),I.name==="loading"&&(WQ='<div class="alan-btn__chat-inner-msg alan-btn__chat-response animated alan-incoming-msg">'.concat(o(),"</div>"))),I=Q(Q({},I),dI(I,CA));var JE=IA(I,mA),nt=JE.isNew,bg=JE.msgInd,yw=JE.replaceLoader,ue=JE.updateResponse;if(nt){var bE=document.createElement("div");bE.id="msg-"+bg,bE.classList.add("alan-btn__chat-msg-holder"),bE.setAttribute("data-msg-index",bg),I.type==="chat"&&te(I,bE);var Zw='<div class="alan-btn__chat-avatar '.concat(I.type,'">')+(I.type==="request"?'<div class="alan-btn__chat-request-avatar"></div>':'<div class="alan-btn__chat-response-avatar"></div>')+"</div>";bE.innerHTML=(I.type==="chat"?"":Zw)+WQ,Ig.appendChild(bE),BA.textChat.available&&CA&&I.type==="response"&&I.read!==!0&&xg++,R!==!0?pE(Ig,"smooth"):pE(Ig),((fA=I.ctx)===null||fA===void 0?void 0:fA.final)!==!1&&(ia(Fa(bg)),oa(document.getElementById("chatMessages")))}else{var sC=document.getElementById("msg-"+bg);if(sC)if(yw){var PB=sC.querySelector(".alan-btn__chat-inner-msg");PB&&(PB.innerHTML=HQ,PB.classList.remove("alan-incoming-msg"),I.type!=="chat"&&((YA=I.images)===null||YA===void 0?void 0:YA.length)>0&&PB.classList.add("with-images"),pE(Ig,"smooth"))}else if(ue&&I.type!=="chat"){var PB=sC.querySelector(".alan-btn__chat-inner-msg"),FC=mA[bg],da=PB.querySelector(".alan-btn__chat-response-imgs-wrapper");((PA=FC.images)===null||PA===void 0?void 0:PA.length)>0&&!da&&(PB.insertAdjacentHTML("afterbegin",wn(FC)),PB=sC.querySelector(".alan-btn__chat-inner-msg")),((eB=FC.images)===null||eB===void 0?void 0:eB.length)>1&&da&&da.querySelector(".alan-btn__chat-response-imgs-wrapper-right-arrow").classList.remove("invisible"),FC.type!=="chat"&&((BB=FC.images)===null||BB===void 0?void 0:BB.length)>0&&PB.classList.add("with-images");for(var fa=PB.children,Mf=((wB=FC.images)===null||wB===void 0?void 0:wB.length)===0?0:1;fa.length>Mf;)fa[fa.length-1].remove();PB.insertAdjacentHTML("beforeend",Bt(FC)),PB.insertAdjacentHTML("beforeend",Jg(FC)),PB.insertAdjacentHTML("beforeend",At(I)),PB.insertAdjacentHTML("beforeend",D(I)),setTimeout(function(){pE(Ig,"smooth")})}else sC.innerHTML=WQ;((TB=I.ctx)===null||TB===void 0?void 0:TB.final)!==!1&&(ia(Fa(bg)),oa(document.getElementById("chatMessages")))}Dc(),BA.textChat.available&&CA&&If(),c(I)&&I.type==="response"&&mA.filter(function(df){return!c(df)}).length===0&&I.name!=="loading"&&Gc()}}function pE(I,s){var R={top:I.scrollHeight+500,left:0};vB===null&&(s&&(R.behavior="smooth"),I.scroll(R))}function de(I){var s=document.getElementById("chatMessages");s&&(s.scrollTop+s.clientHeight>=s.scrollHeight?vB=null:vB=s.scrollTop)}function Dc(){UB&&MA&&localStorage.setItem(rc(),JSON.stringify(mA))}function rc(){return"alan-btn-text-chat-msgs-for-dialogId-".concat(MA)}function Uc(){if(xg=0,mA=[],BA.textChat.available){var I=document.getElementById("chatMessages");I&&(I.innerHTML='<div class="alan-btn__chat-messages-empty-block"></div>')}}function Mc(){OI(),window.tutorProject&&(window.tutorProject.close(),window.tutorProject.off("scripts",aC),window.tutorProject.off("text",f),window.tutorProject.off("parsed",YE),window.tutorProject.off("connectStatus",hE),window.tutorProject.off("options",Yg),UA.off("command",Ng),UA.off("afterText",qI),v=!1,Be()),dc()}function dc(){Uc(),Od()}function Td(){fc(!1)}function fc(I){var s;if(UB&&MA){s=localStorage.getItem(rc());try{if(s===JSON.stringify(mA))return;if(s=JSON.parse(s),Uc(),Array.isArray(s))for(var R=0;R<s.length;R++)I===!0?s[R].name!=="loading"&&(s[R].initLoad=!0,OA(s[R],!0,!0)):OA(s[R],!0,!0)}catch{console.warn("Alan: unable to restore text chat history")}}}function Od(){console.info("Alan: clear messages history",MA);for(var I=0;I<localStorage.length;I++){var s=localStorage.key(I);s.indexOf("alan-btn-text-chat-msgs-")>-1&&localStorage.removeItem(s)}}function sa(I){return g(this,void 0,void 0,function(){var s,R;return E(this,function(X){switch(X.label){case 0:return s={text:I,type:"request",name:"text"},[4,zI(I)];case 1:return R=X.sent(),s=Q(Q({},s),{reqId:R.reqId}),Pd(I),OA(s),OA({type:"response",name:"loading",text:"",reqId:R.reqId}),[2]}})})}var bw=null;function Gc(){var I=document.getElementById("textarea-holder");I.classList.remove("alan-btn__inactive"),clearTimeout(bw),bw=null}var uc=Rd(function(){return g(this,void 0,void 0,function(){var s,R,X;return E(this,function(P){return s=fe(),R=document.getElementById("textarea-holder"),X=s.value,bw?[2]:(bw=setTimeout(function(){Gc()},5e3),X.trim()===""?[2]:(s.value="",sa(X),R.classList.add("alan-btn__inactive"),vB=null,[2]))})})},1e3);function Fa(I){return document.getElementById("msg-"+I).querySelectorAll(".alan-btn__chat-response-text-wrapper")[0]}function zd(I){var s=I.value,R;if(I.selectionStart===I.selectionEnd){var X=s.split("");X.splice(I.selectionStart,0,`
`),R=X.join("")}else R=s+`
`;I.value=R}function Kd(I){var s=document.getElementById("textarea-holder"),R=I.target;R.scrollWidth>R.clientWidth?(s.classList.add("show-gradient"),R.scrollLeft===0?(s.classList.add("show-gradient-right"),s.classList.remove("show-gradient-left")):(s.classList.add("show-gradient-left"),s.classList.remove("show-gradient-right"))):(s.classList.remove("show-gradient"),s.classList.remove("show-gradient-right"),s.classList.remove("show-gradient-left")),s&&(R.value.length>0?s.classList.add("ready-to-send"):s.classList.remove("ready-to-send"))}function Rc(){var I=dg();return"alan-btn-chat-sent-history-".concat(I)}function jd(){var I=[];if(UB){var s=Rc();try{I=JSON.parse(localStorage.getItem(s))||[]}catch{}}return I}function Pd(I){if(UB){var s=25,R=Rc();FB.push(I),FB.length>50&&(FB=FB.slice(Math.max(FB.length-s,0))),FB.length>0&&localStorage.setItem(R,JSON.stringify(FB))}}function qd(I){var s=C([],FB,!0);if(s=s.reverse(),s.length!==0){I===38&&(xA===null||xA+1===s.length?xA=0:xA=xA+1),I===40&&(xA===null||xA-1===-1?xA=s.length-1:xA=xA-1);var R=fe();R.value=s[xA],_d(R)}}function _d(I){if(I.focus(),typeof I.selectionStart=="number")I.selectionStart=I.selectionEnd=I.value.length;else if(typeof I.createTextRange<"u"){var s=I.createTextRange();s.collapse(!1),s.select()}}function $d(I){var s=I.keyCode||I.which;if(!(s===13&&I.shiftKey)){if(s===13&&(I.ctrlKey||I.metaKey)){zd(I.target);return}s===13&&(uc(),I.stopPropagation(),I.preventDefault());var R=s===38,X=s===40;if(R||X){qd(s),I.stopPropagation(),I.preventDefault();return}}}function Af(){var I=document.getElementById("chat-unmute-btn");I&&(I.classList.add("disabled"),Qt(I,!0));var s=document.getElementById("clear-chat-btn");s&&s.classList.add("disabled")}function Bf(){var I=document.getElementById("chat-unmute-btn");I&&(I.classList.remove("disabled"),Qt(I,Ua()));var s=document.getElementById("clear-chat-btn");s&&s.classList.remove("disabled")}function ca(I){var s=document.getElementById("chat-unmute-btn");I&&bc(!0),pB=!0,UA.enableVoice(),Qt(s,!0)}function mw(I){var s=document.getElementById("chat-unmute-btn");UA.disableVoice(),pB=!1,Qt(s,!1),I&&bc(!1)}function Qf(){if(NA()){var I=fe();I&&I.blur()}}function gf(I){if(I&&I.target){var s=I.target,R=s.closest(".alan-btn__chat-send-btn")||s.closest(".alan-btn__chat-mic-btn");R||Qf()}}function hc(I){var s=I.target;$o(s,l,sa)}function fe(){return document.getElementById("chatTextarea")}function Ef(){var I,s,R,X,P,q,$=document.getElementById("textarea-holder"),aA=fe(),DA=document.getElementById("chat-mic-btn"),fA=document.getElementById("chat-unmute-btn"),YA=document.getElementById("chat-send-btn"),PA=document.getElementById("chat-header"),eB=document.getElementById("chat-header-title");if(!gg.classList.contains("alan-btn__chat")){document.addEventListener("touchstart",gf,{passive:!1}),cE.classList.add("alan-btn__chat");var BB=document.createElement("div");BB.id="chatMessages",BB.classList.add("alan-btn__chat-messages"),BB.removeEventListener("click",hc),BB.addEventListener("click",hc);var wB=document.createElement("div");wB.id="chatMessagesWrapper",wB.classList.add("alan-btn__chat-messages-wrapper"),wB.appendChild(BB),NA()?wB.addEventListener("touchmove",de):wB.addEventListener("mousewheel",de);var TB=document.createElement("div");TB.classList.add("alan-btn__chat-messages-empty-block"),BB.appendChild(TB),PA=xE({id:"chat-header",class:"alan-btn__chat-header"});var HQ=xE({class:"alan-btn__chat-header-gradient"}),WQ=dA(sB.clear,{id:"clear-chat-btn",class:"alan-btn__chat-header-clear-btn"});WQ.addEventListener("click",Mc);var Ig=dA(sB.resizer.left,{class:"alan-btn__chat-header-left-resizer"}),JE=dA(sB.resizer.right,{class:"alan-btn__chat-header-right-resizer"});eB=document.createElement("span"),eB.id="chat-header-title",eB.classList.add("alan-btn__chat-header-title");var nt=xE({class:"alan-btn__chat-header-left-icons"}),bg=xE({class:"alan-btn__chat-header-right-icons"}),yw=dA(sB.closeChat,{class:"alan-btn__close-chat-btn"});if(nt.appendChild(yw),yw.addEventListener("click",pc),!NA()){var ue=document.createElement("div");ue.classList.add("alan-btn__expand-collapse-chat-btn"),ue.innerHTML=`
                    <svg class="alan-btn__chat-enter-full-screen-mode" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.7092 2.29502C21.8041 2.3904 21.8757 2.50014 21.9241 2.61722C21.9727 2.73425 21.9996 2.8625 22 2.997L22 3V9C22 9.55228 21.5523 10 21 10C20.4477 10 20 9.55228 20 9V5.41421L14.7071 10.7071C14.3166 11.0976 13.6834 11.0976 13.2929 10.7071C12.9024 10.3166 12.9024 9.68342 13.2929 9.29289L18.5858 4H15C14.4477 4 14 3.55228 14 3C14 2.44772 14.4477 2 15 2H20.9998C21.2749 2 21.5242 2.11106 21.705 2.29078L21.7092 2.29502Z" fill="#000000"/>
                    <path d="M10.7071 14.7071L5.41421 20H9C9.55228 20 10 20.4477 10 21C10 21.5523 9.55228 22 9 22H3.00069L2.997 22C2.74301 21.9992 2.48924 21.9023 2.29502 21.7092L2.29078 21.705C2.19595 21.6096 2.12432 21.4999 2.07588 21.3828C2.02699 21.2649 2 21.1356 2 21V15C2 14.4477 2.44772 14 3 14C3.55228 14 4 14.4477 4 15V18.5858L9.29289 13.2929C9.68342 12.9024 10.3166 12.9024 10.7071 13.2929C11.0976 13.6834 11.0976 14.3166 10.7071 14.7071Z" fill="#000000"/>
                    </svg>
    
                    <svg class="alan-btn__chat-exit-full-screen-mode" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.7071 3.70711L16.4142 9H20C20.5523 9 21 9.44772 21 10C21 10.5523 20.5523 11 20 11H14.0007L13.997 11C13.743 10.9992 13.4892 10.9023 13.295 10.7092L13.2908 10.705C13.196 10.6096 13.1243 10.4999 13.0759 10.3828C13.0273 10.2657 13.0004 10.1375 13 10.003L13 10V4C13 3.44772 13.4477 3 14 3C14.5523 3 15 3.44772 15 4V7.58579L20.2929 2.29289C20.6834 1.90237 21.3166 1.90237 21.7071 2.29289C22.0976 2.68342 22.0976 3.31658 21.7071 3.70711Z" fill="#000000"/>
                    <path d="M9 20C9 20.5523 9.44772 21 10 21C10.5523 21 11 20.5523 11 20V14.0007C11 13.9997 11 13.998 11 13.997C10.9992 13.7231 10.8883 13.4752 10.7092 13.295C10.7078 13.2936 10.7064 13.2922 10.705 13.2908C10.6096 13.196 10.4999 13.1243 10.3828 13.0759C10.2657 13.0273 10.1375 13.0004 10.003 13C10.002 13 10.001 13 10 13H4C3.44772 13 3 13.4477 3 14C3 14.5523 3.44772 15 4 15H7.58579L2.29289 20.2929C1.90237 20.6834 1.90237 21.3166 2.29289 21.7071C2.68342 22.0976 3.31658 22.0976 3.70711 21.7071L9 16.4142V20Z" fill="#000000"/>
                    </svg>
    
                    `,nt.appendChild(ue),ue.addEventListener("click",ef)}bg.appendChild(WQ),PA.appendChild(nt),PA.appendChild(eB),PA.appendChild(bg),PA.appendChild(Ig),PA.appendChild(JE),ud(DE,{onClearChatClick:Mc,expandCollapseChatSidePanel:nf,closeTextChat:pc}),$=document.createElement("div"),$.id="textarea-holder",$.classList.add("alan-btn__chat-textarea-holder");var bE=document.createElement("div");bE.classList.add("alan-btn__chat-textarea-holder-gradient"),aA=document.createElement("input"),aA.id="chatTextarea",aA.setAttribute("autocomplete","off"),aA.classList.add("alan-btn__chat-textarea"),aA.addEventListener("keydown",$d),aA.addEventListener("keyup",Kd);var Zw=document.createElement("div");Zw.classList.add("alan-btn__chat-textarea-left-gradient");var sC=document.createElement("div");sC.classList.add("alan-btn__chat-textarea-right-gradient"),YA=document.createElement("div"),YA.id="chat-send-btn",YA.classList.add("alan-btn__chat-send-btn"),YA.addEventListener("click",uc),YA.innerHTML=sB.send,$.appendChild(aA),$.appendChild(YA),$.appendChild(Zw),$.appendChild(sC),$.appendChild(bE),gg.appendChild(PA),gg.appendChild(wB),gg.appendChild($),gg.appendChild(HQ),qA.classList.add("alan-btn__chat-holder")}if(eB){var PB=((s=(I=BA.textChat.options)===null||I===void 0?void 0:I.header)===null||s===void 0?void 0:s.label)||"Alan AI Assistant";eB.innerText=PB,eB.setAttribute("title",PB)}if(fA||(fA=document.createElement("div"),fA.classList.add("alan-btn__chat-unmute-btn"),fA.id="chat-unmute-btn",fA.addEventListener("click",function(){pB?mw(!0):ca(!0)}),NA()?mw(!0):pB&&UA.enableVoice(),Qt(fA,pB),bg&&bg.appendChild(fA)),bA){if(aA.setAttribute("placeholder","Ask me anything..."),qA.classList.add("alan-text-chat__voice-enabled"),!DA){switch(DA=document.createElement("div"),DA.classList.add("alan-btn__chat-mic-btn"),DA.id="chat-mic-btn",DA.addEventListener("click",function(){aA.value="",$.classList.remove("show-gradient"),gQ?vB=null:Af(),xI(),(QQ===LQ||QQ===Bg)&&DA.classList.add("alan-btn__disabled")}),QQ){case XQ:case Bg:case LQ:DA.innerHTML=sB.noMic,QQ===XQ&&DA.classList.add("alan-btn__disabled");break;default:DA.innerHTML=sB.mic;break}$&&$.appendChild(DA)}}else DA&&DA.remove(),aA.setAttribute("placeholder","Ask me anything..."),aA.style.paddingTop=BA.textChat.defaults.textarea.padding.top+"px",qA.classList.remove("alan-text-chat__voice-enabled");aA&&!((X=(R=BA.textChat.options)===null||R===void 0?void 0:R.textarea)===null||X===void 0)&&X.placeholder&&aA.setAttribute("placeholder",(q=(P=BA.textChat.options)===null||P===void 0?void 0:P.textarea)===null||q===void 0?void 0:q.placeholder)}function Da(){return"alan-btn-text-chat-opened-for-projectId-".concat(dg())}function Yc(I){if(NA()){var s=document.getElementsByTagName("body")[0];if(s)if(I)s.style.top="-".concat(window.scrollY,"px"),s.classList.add("no-scroll-for-popup");else{s.classList.remove("no-scroll-for-popup");var R=s.style.top;s.style.top="",window.scrollTo(0,parseInt(R||"0")*-1)}}}function Nc(I){Yc(!0),tf(),VB(),qA.style.display="flex",CA=!1,I===!0?K.classList.add("hide-alan-btn-when-text-chat-is-opened-immediately"):K.classList.add("hide-alan-btn-when-text-chat-is-opened"),qA.classList.add("alan-text-chat__openning"),UB&&(NA()||localStorage.setItem(Da(),"1"))}function ra(){CA||(tC(),qA.classList.add("alan-text-chat__closing"),K.classList.add("text-chat-is-closing"),setTimeout(function(){qA.style.display="none",qA.classList.remove("alan-text-chat__closing"),K.classList.remove("hide-alan-btn-when-text-chat-is-opened"),K.classList.remove("hide-alan-btn-when-text-chat-is-opened-immediately"),K.classList.remove("text-chat-is-closing"),Yc(!1)},BA.textChat.defaults.appearAnimationMs),CA=!0,UB&&localStorage.removeItem(Da()))}function Cf(){return UB&&!NA()?localStorage.getItem(Da()):!1}function pc(){ra()}function nf(){Ac(qA)}function ef(){BA.textChat.expanded?(BA.textChat.expanded=!1,qA.classList.remove("alan-btn_text-chat-full-screen")):(BA.textChat.expanded=!0,dw(qA))}function Jc(){return"alan-btn-text-chat__text-to-speach-voice-enabled__for-projectId-".concat(dg())}function Ua(){if(NA())return!1;if(UB){var I=localStorage.getItem(Jc());if(I==="true")return!0;if(I==="false")return!1}return null}function bc(I){UB&&localStorage.setItem(Jc(),I)}function If(){xg>0&&(Tg.innerHTML=xg>99?"99+":"".concat(xg),Tg.style.display="flex")}function Qt(I,s){I&&(s?I.innerHTML=sB.unmute:I.innerHTML=sB.mute)}function tf(){xg=0,Tg.style.display="none";for(var I=0;I<mA.length;I++)mA[I].read=!0;Dc()}function Ma(){lA.style.animation="",AB.style.animation="",uA.style.animation="",SQ.classList.remove("super-hidden"),SQ.style.opacity=Pg,LB.style.animation="",SB.style.animation="",LB.style.opacity="0",SB.style.opacity="0",Et(kQ),AB.style.opacity="1",uA.style.opacity="0",Rg.style.opacity="0",ng(yB,[ZB,MB,XB]),Ge([dQ,fQ,GQ,uQ]),Eg.style.opacity="0",Og.style.opacity="0",K.classList.remove("alan-btn-low-volume"),K.classList.remove("alan-btn-permission-denied"),K.classList.remove("alan-btn-disconnected"),K.classList.remove("alan-btn-offline"),K.classList.remove("alan-btn-no-voice-support")}window.switchState=xB;function xB(I){p.onButtonState&&p.onButtonState(GI[I]);var s=[],R=0;if(aQ=null,I===kQ&&Ma(),CA)if(I===UQ?(lA.style.animation=FE,AB.style.animation=Ln,dQ.classList.remove("super-hidden"),dQ.style.opacity=Pg,LB.style.opacity="1",SB.style.opacity="1",Et(UQ),AB.style.opacity="1",ZB.src||(uA.style.animation=Sn,uA.style.opacity="1"),ng(ZB,[yB,MB,XB]),Ge([fQ,GQ,uQ])):I===yQ?(oC(),lA.style.animation=FE,fQ.classList.remove("super-hidden"),fQ.style.opacity=Pg,LB.style.opacity="1",SB.style.opacity="1",Et(yQ),ng(XB,[yB,ZB,MB]),Ge([SQ,dQ,GQ,uQ])):I===$Q?(lA.style.animation=FE,GQ.classList.remove("super-hidden"),GQ.style.opacity=Pg,LB.style.opacity="1",SB.style.opacity="1",Et($Q),AB.style.opacity="1",MB.src||(uA.style.opacity="1"),Ge([SQ,dQ,fQ,uQ]),ng(MB,[yB,ZB,XB])):I===Ag&&(lA.style.animation=FE,uQ.classList.remove("super-hidden"),uQ.style.opacity=Pg,LB.style.opacity="1",SB.style.opacity="1",Et(Ag),AB.style.opacity="1",MB.src?uA.style.opacity="0":uA.style.opacity="1",ng(MB,[yB,ZB,XB]),Ge([SQ,dQ,fQ,GQ])),I===yQ?(uA.style.opacity="0",uA.style.backgroundSize="0% 0%",XB.src||(TA.style.opacity="1",TA.style.backgroundSize="100% 100%")):(TA.style.opacity="0",TA.style.backgroundSize="0% 0%",uA.style.backgroundSize="100% 100%"),I===kQ?uA.classList.add("triangleMicIconBg-default"):uA.classList.remove("triangleMicIconBg-default"),s=[rE,PE,qE,_E,$E,AC,BC,QC,gC,EC],I===UQ&&!ZB.src||I===$Q&&!MB.src||I===yQ&&!XB.src||I===Ag&&!MB.src){if(rE.style.animationName==="")for(R=0;R<s.length;R++)R===0?s[R].style.opacity=1:s[R].style.opacity=0,s[R].style.animationName="logo-state-"+(R+1)+"-animation";yB.style.opacity="0"}else for(R=0;R<s.length;R++)s[R].style.opacity=0,s[R].style.animationName="";if(I===kn||I===XQ||I===Bg||I===LQ?BA.textChat.available?Ma():(I===kn?(K.classList.add("alan-btn-low-volume"),aQ=uI):I===XQ?(K.classList.add("alan-btn-permission-denied"),aQ=oE,console.warn(oE)):(I===Bg||I===LQ)&&(K.classList.add("alan-btn-no-voice-support"),I===Bg?aQ=yn:I===LQ&&(aQ=zC)),I===Bg?(Og.style.opacity="1",Eg.style.opacity="0"):(Og.style.opacity="0",Eg.style.opacity="1"),ng(null,[yB,ZB,MB,XB]),AB.style.opacity="0",uA.style.opacity="0",Rg.style.opacity="0",zg.style.opacity="0",LB.style.animation="",SB.style.animation="",LB.style.opacity="0",SB.style.opacity="0"):I===ZQ||I===Gg?BA.textChat.available?Ma():(I===ZQ&&K.classList.add("alan-btn-disconnected"),I===Gg&&(K.classList.add("alan-btn-offline"),aQ=RI),uA.style.opacity="0",Eg.style.opacity="0",LB.style.animation="",SB.style.animation="",LB.style.opacity="0",SB.style.opacity="0",ng(null,[yB,ZB,MB,XB]),I===ZQ?(AB.style.opacity="0",Rg.style.opacity="1"):(AB.style.opacity="0",Rg.style.opacity="0",zg.style.opacity="1")):(Eg.style.opacity="0",zg.style.opacity="0",Rg.style.opacity="0",K.classList.remove("alan-btn-low-volume"),K.classList.remove("alan-btn-permission-denied"),K.classList.remove("alan-btn-disconnected"),K.classList.remove("alan-btn-offline"),K.classList.remove("alan-btn-no-voice-support")),BA.textChat.available){var X=document.getElementById("chat-mic-btn"),P=document.getElementById("chat-send-btn"),q=document.getElementById("alan-text-chat");if(q){switch(I){case Gg:case ZQ:P.innerHTML=I===Gg?sB.noWiFi:sB.disconnected,q.classList.add("alan-btn__disconnected");break;case UQ:case $Q:case yQ:case Ag:q.classList.add("alan-btn__mic-active");break;default:q.classList.remove("alan-btn__mic-active"),q.classList.remove("alan-btn__disconnected"),P.innerHTML=sB.send;break}if(X)switch(I){case UQ:case $Q:case yQ:case Ag:X.classList.add("active"),X.style.animation=mI;break;case XQ:case Bg:case LQ:X.innerHTML=sB.noMic,QQ===XQ&&X.classList.add("alan-btn__disabled");break;default:X.classList.remove("active"),X.style.animation="";break}}}I!==ZQ&&(OE=I),QQ=I}function gt(I){I.style.transition="all 0.4s linear",I.style.position="absolute",I.style.top="0px",I.style.left="0px",I.style.width="100%",I.style.height="100%",I.style.borderRadius="50%",I.style.zIndex=gn,I.style.backgroundPosition="0 0",I.style.opacity=0,I.style.opacity=0,I.style.transition="opacity 300ms ease-in-out",I.style.animation=kI,I.style.display="block"}function Ge(I){for(var s=0;s<I.length;s++)I[s].style.opacity=SI,I[s].classList.add("super-hidden")}function Et(I){for(var s=[LB,SB],R=I||kQ,X=["alanBtn-oval-bg-"+kQ,"alanBtn-oval-bg-"+UQ,"alanBtn-oval-bg-"+$Q,"alanBtn-oval-bg-"+Ag,"alanBtn-oval-bg-"+yQ],P=0;P<s.length;P++){s[P].classList.add("alanBtn-oval-bg-"+R);for(var q=0;q<X.length;q++)s[P].classList.remove(X[q])}}function mc(){var I="";return p&&p.key&&(I=p.key),"alan-btn-options-"+I}function kc(){K.innerHTML="",hA.appendChild(UE),K.appendChild(hA),K.appendChild(lA),K.appendChild(qA),lA.appendChild(Tg),J=!1}function wf(){Cg()||(UA.stop(),K.innerHTML="",J=!0)}function of(){V=!1}function af(){V=!0,oC()}function yc(I){I?wa(p,I):wa(p)}function lf(I){I&&I.web&&(I.web.logoUrl&&!I.web.logoIdle&&!I.web.logoListen&&!I.web.logoProcess&&!I.web.logoReply&&!I.web.logoTextChat?(ZB.src=I.web.logoUrl,MB.src=I.web.logoUrl,XB.src=I.web.logoUrl):BA.textChat.available?I.web.logoTextChat?yB.src=I.web.logoTextChat:yB.src=iE.alanLogoIconSrc:(I.web.logoIdle?yB.src=I.web.logoIdle:yB.src=iE.micIconSrc,I.web.logoListen?ZB.src=I.web.logoListen:(ZB.removeAttribute("src"),ZB.style.opacity="0"),I.web.logoProcess?MB.src=I.web.logoProcess:(MB.removeAttribute("src"),MB.style.opacity="0"),I.web.logoReply?XB.src=I.web.logoReply:(XB.removeAttribute("src"),XB.style.opacity="0")))}function sf(I){KC=I}K.classList.add("alanBtn-root"),K.classList.add("alan-"+dg());var Ct=null;if(Cg())kc();else if(UB)try{Zc()}catch{}function Zc(){if(UB)try{Ct=JSON.parse(localStorage.getItem(mc())),Ct&&Ct.web&&Ct.web&&yc(Ct.web)}catch{}}p.rootEl||Hn.appendChild(K),nA||(lA.addEventListener("mousedown",Xc,!0),lA.addEventListener("touchstart",Xc,{passive:!1}),document.addEventListener("mouseup",Sc,!0),document.addEventListener("touchend",Sc,{passive:!1}),document.addEventListener("mousemove",Lc,!0),document.addEventListener("touchmove",Lc,{passive:!1}));function Xc(I){var s=I.touches?I.touches[0]:I,R;if(s&&!kw&&!(!jE||I.buttons!==void 0&&I.buttons!==1)&&(lE=!0,K.style.transition="0ms",R=K.getBoundingClientRect(),R)){var X=R.x;ug||(ug=EQ?X:window.innerWidth-X-nB-(window.innerWidth-document.documentElement.clientWidth)),PC=X,aE=[s.clientX,s.clientY],qC=parseInt(R.top,10)}}function Lc(I){var s=I.touches?I.touches[0]:I,R,X;if(s&&QA&&lE)return RE(!1),oC(0,!0),I.preventDefault(),sE||(K.style.setProperty("left",PC+"px","important"),K.style.setProperty("right","auto","important"),K.style.setProperty("top",qC+"px","important"),K.style.setProperty("bottom","auto","important")),(Math.abs($C)>15||Math.abs(An)>15)&&(ra(),sE=!0),R=PC+s.clientX-aE[0],X=qC+s.clientY-aE[1],$C=s.clientX-aE[0],An=s.clientY-aE[1],K.style.setProperty("left",Ff(R)+"px","important"),K.style.setProperty("top",Hc(X)+"px","important"),I.preventDefault(),!1}function Sc(I){var s,R,X;if(lE){if(X=I.changedTouches?I.changedTouches[0]:I,!X)return;if(lE=!1,K.style.transition=bI,s=parseInt(K.style.left,10),R=parseInt(K.style.top,10),Math.abs($C)<15&&Math.abs(An)<15){setTimeout(function(){sE=!1,jE=!0},300);return}s<=window.innerWidth/2?(K.style.setProperty("left",ug+"px","important"),Wc("to-left"),EQ=!0,nC(hA,R),GE(qA),jC=!0,setTimeout(function(){RE(!0),vc("left",ug,R)},_C)):(K.style.setProperty("left",window.innerWidth-ug-nB-(window.innerWidth-document.documentElement.clientWidth)+"px","important"),setTimeout(function(){K.style.setProperty("right",ug+"px","important"),Wc("to-right"),EQ=!1,nC(hA,R),GE(qA),vc("right",ug,R),jC=!0,jE=!0,RE(!0)},_C)),setTimeout(function(){sE=!1},300)}}function Hc(I){var s=10;return I<s?s:I>window.innerHeight-nB-s?window.innerHeight-nB-s:I}function Ff(I){var s=10;return I<s?s:I>window.innerWidth-nB-s?window.innerWidth-nB-s:I}function Wc(I){I==="to-left"?K.style.setProperty("right","auto","important"):K.style.setProperty("left","auto","important"),Pn()}function vc(I,s,R){if(tA&&Qa){var X=dg();sessionStorage.setItem("alan-btn-saved-orientation-"+X,I),sessionStorage.setItem("alan-btn-saved-x-pos-"+X,Math.floor(s).toString()),sessionStorage.setItem("alan-btn-saved-y-pos-"+X,Math.floor(R).toString())}}function cf(){if(Qa){var I=dg();sessionStorage.removeItem("alan-btn-saved-orientation-"+I),sessionStorage.removeItem("alan-btn-saved-x-pos-"+I),sessionStorage.removeItem("alan-btn-saved-y-pos-"+I)}}function Df(){if(Qa){var I=dg(),s={orientation:sessionStorage.getItem("alan-btn-saved-orientation-"+I),x:+sessionStorage.getItem("alan-btn-saved-x-pos-"+I),y:+sessionStorage.getItem("alan-btn-saved-y-pos-"+I)};return s.orientation?s:null}return null}var kw=!1;NA()&&window.addEventListener("scroll",Uf);var rf=ga(function(){kw=!1,K.classList.remove("alan-btn__page-scrolled")},300);function Uf(){(!BA.textChat.available||BA.textChat.available&&CA)&&(K.classList.add("alan-btn__page-scrolled"),kw||(kw=!0)),rf({})}return NA()||(qA.addEventListener("mousedown",bd),qA.addEventListener("mousemove",ac),qA.addEventListener("mouseleave",ac),document.addEventListener("mouseup",md,!0),document.addEventListener("mousemove",kd,!0)),l}a.alanBtn=b,a.alanBtn.getDebugInfo=Ec})(window)}(),alanBtn})})(es,es.exports);var ju=es.exports;const Pu=Js(ju),qu={black:"#000",white:"#fff"},Bw=qu,_u={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},he=_u,$u={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},Ye=$u,AR={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},Ne=AR,BR={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},pe=BR,QR={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},Je=QR,gR={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},st=gR,ER={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},CR=ER;function Qw(A){let B="https://mui.com/production-error/?code="+A;for(let Q=1;Q<arguments.length;Q+=1)B+="&args[]="+encodeURIComponent(arguments[Q]);return"Minified MUI error #"+A+"; visit "+B+" for the full message."}const nR=Object.freeze(Object.defineProperty({__proto__:null,default:Qw},Symbol.toStringTag,{value:"Module"})),RF="$$material";function EA(){return EA=Object.assign?Object.assign.bind():function(A){for(var B=1;B<arguments.length;B++){var Q=arguments[B];for(var g in Q)Object.prototype.hasOwnProperty.call(Q,g)&&(A[g]=Q[g])}return A},EA.apply(this,arguments)}function uB(A,B){if(A==null)return{};var Q={},g=Object.keys(A),E,C;for(C=0;C<g.length;C++)E=g[C],!(B.indexOf(E)>=0)&&(Q[E]=A[E]);return Q}function wM(A){var B=Object.create(null);return function(Q){return B[Q]===void 0&&(B[Q]=A(Q)),B[Q]}}var eR=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,IR=wM(function(A){return eR.test(A)||A.charCodeAt(0)===111&&A.charCodeAt(1)===110&&A.charCodeAt(2)<91});function tR(A){if(A.sheet)return A.sheet;for(var B=0;B<document.styleSheets.length;B++)if(document.styleSheets[B].ownerNode===A)return document.styleSheets[B]}function wR(A){var B=document.createElement("style");return B.setAttribute("data-emotion",A.key),A.nonce!==void 0&&B.setAttribute("nonce",A.nonce),B.appendChild(document.createTextNode("")),B.setAttribute("data-s",""),B}var iR=function(){function A(Q){var g=this;this._insertTag=function(E){var C;g.tags.length===0?g.insertionPoint?C=g.insertionPoint.nextSibling:g.prepend?C=g.container.firstChild:C=g.before:C=g.tags[g.tags.length-1].nextSibling,g.container.insertBefore(E,C),g.tags.push(E)},this.isSpeedy=Q.speedy===void 0?!0:Q.speedy,this.tags=[],this.ctr=0,this.nonce=Q.nonce,this.key=Q.key,this.container=Q.container,this.prepend=Q.prepend,this.insertionPoint=Q.insertionPoint,this.before=null}var B=A.prototype;return B.hydrate=function(g){g.forEach(this._insertTag)},B.insert=function(g){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(wR(this));var E=this.tags[this.tags.length-1];if(this.isSpeedy){var C=tR(E);try{C.insertRule(g,C.cssRules.length)}catch{}}else E.appendChild(document.createTextNode(g));this.ctr++},B.flush=function(){this.tags.forEach(function(g){return g.parentNode&&g.parentNode.removeChild(g)}),this.tags=[],this.ctr=0},A}(),IQ="-ms-",Ki="-moz-",ZA="-webkit-",iM="comm",hF="rule",YF="decl",oR="@import",oM="@keyframes",aR="@layer",lR=Math.abs,so=String.fromCharCode,sR=Object.assign;function FR(A,B){return _B(A,0)^45?(((B<<2^_B(A,0))<<2^_B(A,1))<<2^_B(A,2))<<2^_B(A,3):0}function aM(A){return A.trim()}function cR(A,B){return(A=B.exec(A))?A[0]:A}function XA(A,B,Q){return A.replace(B,Q)}function Is(A,B){return A.indexOf(B)}function _B(A,B){return A.charCodeAt(B)|0}function gw(A,B,Q){return A.slice(B,Q)}function BE(A){return A.length}function NF(A){return A.length}function Bi(A,B){return B.push(A),A}function DR(A,B){return A.map(B).join("")}var Fo=1,aI=1,lM=0,JQ=0,JB=0,cI="";function co(A,B,Q,g,E,C,n){return{value:A,root:B,parent:Q,type:g,props:E,children:C,line:Fo,column:aI,length:n,return:""}}function Ft(A,B){return sR(co("",null,null,"",null,null,0),A,{length:-A.length},B)}function rR(){return JB}function UR(){return JB=JQ>0?_B(cI,--JQ):0,aI--,JB===10&&(aI=1,Fo--),JB}function OQ(){return JB=JQ<lM?_B(cI,JQ++):0,aI++,JB===10&&(aI=1,Fo++),JB}function nE(){return _B(cI,JQ)}function ri(){return JQ}function lw(A,B){return gw(cI,A,B)}function Ew(A){switch(A){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function sM(A){return Fo=aI=1,lM=BE(cI=A),JQ=0,[]}function FM(A){return cI="",A}function Ui(A){return aM(lw(JQ-1,ts(A===91?A+2:A===40?A+1:A)))}function MR(A){for(;(JB=nE())&&JB<33;)OQ();return Ew(A)>2||Ew(JB)>3?"":" "}function dR(A,B){for(;--B&&OQ()&&!(JB<48||JB>102||JB>57&&JB<65||JB>70&&JB<97););return lw(A,ri()+(B<6&&nE()==32&&OQ()==32))}function ts(A){for(;OQ();)switch(JB){case A:return JQ;case 34:case 39:A!==34&&A!==39&&ts(JB);break;case 40:A===41&&ts(A);break;case 92:OQ();break}return JQ}function fR(A,B){for(;OQ()&&A+JB!==57;)if(A+JB===84&&nE()===47)break;return"/*"+lw(B,JQ-1)+"*"+so(A===47?A:OQ())}function GR(A){for(;!Ew(nE());)OQ();return lw(A,JQ)}function uR(A){return FM(Mi("",null,null,null,[""],A=sM(A),0,[0],A))}function Mi(A,B,Q,g,E,C,n,e,t){for(var o=0,c=0,D=n,G=0,h=0,N=0,U=1,k=1,r=1,d=0,Y="",y=E,Z=C,H=g,L=Y;k;)switch(N=d,d=OQ()){case 40:if(N!=108&&_B(L,D-1)==58){Is(L+=XA(Ui(d),"&","&\f"),"&\f")!=-1&&(r=-1);break}case 34:case 39:case 91:L+=Ui(d);break;case 9:case 10:case 13:case 32:L+=MR(N);break;case 92:L+=dR(ri()-1,7);continue;case 47:switch(nE()){case 42:case 47:Bi(RR(fR(OQ(),ri()),B,Q),t);break;default:L+="/"}break;case 123*U:e[o++]=BE(L)*r;case 125*U:case 59:case 0:switch(d){case 0:case 125:k=0;case 59+c:r==-1&&(L=XA(L,/\f/g,"")),h>0&&BE(L)-D&&Bi(h>32?Ar(L+";",g,Q,D-1):Ar(XA(L," ","")+";",g,Q,D-2),t);break;case 59:L+=";";default:if(Bi(H=$D(L,B,Q,o,c,E,e,Y,y=[],Z=[],D),C),d===123)if(c===0)Mi(L,B,H,H,y,C,D,e,Z);else switch(G===99&&_B(L,3)===110?100:G){case 100:case 108:case 109:case 115:Mi(A,H,H,g&&Bi($D(A,H,H,0,0,E,e,Y,E,y=[],D),Z),E,Z,D,e,g?y:Z);break;default:Mi(L,H,H,H,[""],Z,0,e,Z)}}o=c=h=0,U=r=1,Y=L="",D=n;break;case 58:D=1+BE(L),h=N;default:if(U<1){if(d==123)--U;else if(d==125&&U++==0&&UR()==125)continue}switch(L+=so(d),d*U){case 38:r=c>0?1:(L+="\f",-1);break;case 44:e[o++]=(BE(L)-1)*r,r=1;break;case 64:nE()===45&&(L+=Ui(OQ())),G=nE(),c=D=BE(Y=L+=GR(ri())),d++;break;case 45:N===45&&BE(L)==2&&(U=0)}}return C}function $D(A,B,Q,g,E,C,n,e,t,o,c){for(var D=E-1,G=E===0?C:[""],h=NF(G),N=0,U=0,k=0;N<g;++N)for(var r=0,d=gw(A,D+1,D=lR(U=n[N])),Y=A;r<h;++r)(Y=aM(U>0?G[r]+" "+d:XA(d,/&\f/g,G[r])))&&(t[k++]=Y);return co(A,B,Q,E===0?hF:e,t,o,c)}function RR(A,B,Q){return co(A,B,Q,iM,so(rR()),gw(A,2,-2),0)}function Ar(A,B,Q,g){return co(A,B,Q,YF,gw(A,0,g),gw(A,g+1,-1),g)}function gI(A,B){for(var Q="",g=NF(A),E=0;E<g;E++)Q+=B(A[E],E,A,B)||"";return Q}function hR(A,B,Q,g){switch(A.type){case aR:if(A.children.length)break;case oR:case YF:return A.return=A.return||A.value;case iM:return"";case oM:return A.return=A.value+"{"+gI(A.children,g)+"}";case hF:A.value=A.props.join(",")}return BE(Q=gI(A.children,g))?A.return=A.value+"{"+Q+"}":""}function YR(A){var B=NF(A);return function(Q,g,E,C){for(var n="",e=0;e<B;e++)n+=A[e](Q,g,E,C)||"";return n}}function NR(A){return function(B){B.root||(B=B.return)&&A(B)}}var pR=function(B,Q,g){for(var E=0,C=0;E=C,C=nE(),E===38&&C===12&&(Q[g]=1),!Ew(C);)OQ();return lw(B,JQ)},JR=function(B,Q){var g=-1,E=44;do switch(Ew(E)){case 0:E===38&&nE()===12&&(Q[g]=1),B[g]+=pR(JQ-1,Q,g);break;case 2:B[g]+=Ui(E);break;case 4:if(E===44){B[++g]=nE()===58?"&\f":"",Q[g]=B[g].length;break}default:B[g]+=so(E)}while(E=OQ());return B},bR=function(B,Q){return FM(JR(sM(B),Q))},Br=new WeakMap,mR=function(B){if(!(B.type!=="rule"||!B.parent||B.length<1)){for(var Q=B.value,g=B.parent,E=B.column===g.column&&B.line===g.line;g.type!=="rule";)if(g=g.parent,!g)return;if(!(B.props.length===1&&Q.charCodeAt(0)!==58&&!Br.get(g))&&!E){Br.set(B,!0);for(var C=[],n=bR(Q,C),e=g.props,t=0,o=0;t<n.length;t++)for(var c=0;c<e.length;c++,o++)B.props[o]=C[t]?n[t].replace(/&\f/g,e[c]):e[c]+" "+n[t]}}},kR=function(B){if(B.type==="decl"){var Q=B.value;Q.charCodeAt(0)===108&&Q.charCodeAt(2)===98&&(B.return="",B.value="")}};function cM(A,B){switch(FR(A,B)){case 5103:return ZA+"print-"+A+A;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ZA+A+A;case 5349:case 4246:case 4810:case 6968:case 2756:return ZA+A+Ki+A+IQ+A+A;case 6828:case 4268:return ZA+A+IQ+A+A;case 6165:return ZA+A+IQ+"flex-"+A+A;case 5187:return ZA+A+XA(A,/(\w+).+(:[^]+)/,ZA+"box-$1$2"+IQ+"flex-$1$2")+A;case 5443:return ZA+A+IQ+"flex-item-"+XA(A,/flex-|-self/,"")+A;case 4675:return ZA+A+IQ+"flex-line-pack"+XA(A,/align-content|flex-|-self/,"")+A;case 5548:return ZA+A+IQ+XA(A,"shrink","negative")+A;case 5292:return ZA+A+IQ+XA(A,"basis","preferred-size")+A;case 6060:return ZA+"box-"+XA(A,"-grow","")+ZA+A+IQ+XA(A,"grow","positive")+A;case 4554:return ZA+XA(A,/([^-])(transform)/g,"$1"+ZA+"$2")+A;case 6187:return XA(XA(XA(A,/(zoom-|grab)/,ZA+"$1"),/(image-set)/,ZA+"$1"),A,"")+A;case 5495:case 3959:return XA(A,/(image-set\([^]*)/,ZA+"$1$`$1");case 4968:return XA(XA(A,/(.+:)(flex-)?(.*)/,ZA+"box-pack:$3"+IQ+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ZA+A+A;case 4095:case 3583:case 4068:case 2532:return XA(A,/(.+)-inline(.+)/,ZA+"$1$2")+A;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(BE(A)-1-B>6)switch(_B(A,B+1)){case 109:if(_B(A,B+4)!==45)break;case 102:return XA(A,/(.+:)(.+)-([^]+)/,"$1"+ZA+"$2-$3$1"+Ki+(_B(A,B+3)==108?"$3":"$2-$3"))+A;case 115:return~Is(A,"stretch")?cM(XA(A,"stretch","fill-available"),B)+A:A}break;case 4949:if(_B(A,B+1)!==115)break;case 6444:switch(_B(A,BE(A)-3-(~Is(A,"!important")&&10))){case 107:return XA(A,":",":"+ZA)+A;case 101:return XA(A,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ZA+(_B(A,14)===45?"inline-":"")+"box$3$1"+ZA+"$2$3$1"+IQ+"$2box$3")+A}break;case 5936:switch(_B(A,B+11)){case 114:return ZA+A+IQ+XA(A,/[svh]\w+-[tblr]{2}/,"tb")+A;case 108:return ZA+A+IQ+XA(A,/[svh]\w+-[tblr]{2}/,"tb-rl")+A;case 45:return ZA+A+IQ+XA(A,/[svh]\w+-[tblr]{2}/,"lr")+A}return ZA+A+IQ+A+A}return A}var yR=function(B,Q,g,E){if(B.length>-1&&!B.return)switch(B.type){case YF:B.return=cM(B.value,B.length);break;case oM:return gI([Ft(B,{value:XA(B.value,"@","@"+ZA)})],E);case hF:if(B.length)return DR(B.props,function(C){switch(cR(C,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return gI([Ft(B,{props:[XA(C,/:(read-\w+)/,":"+Ki+"$1")]})],E);case"::placeholder":return gI([Ft(B,{props:[XA(C,/:(plac\w+)/,":"+ZA+"input-$1")]}),Ft(B,{props:[XA(C,/:(plac\w+)/,":"+Ki+"$1")]}),Ft(B,{props:[XA(C,/:(plac\w+)/,IQ+"input-$1")]})],E)}return""})}},ZR=[yR],DM=function(B){var Q=B.key;if(Q==="css"){var g=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(g,function(U){var k=U.getAttribute("data-emotion");k.indexOf(" ")!==-1&&(document.head.appendChild(U),U.setAttribute("data-s",""))})}var E=B.stylisPlugins||ZR,C={},n,e=[];n=B.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+Q+' "]'),function(U){for(var k=U.getAttribute("data-emotion").split(" "),r=1;r<k.length;r++)C[k[r]]=!0;e.push(U)});var t,o=[mR,kR];{var c,D=[hR,NR(function(U){c.insert(U)})],G=YR(o.concat(E,D)),h=function(k){return gI(uR(k),G)};t=function(k,r,d,Y){c=d,h(k?k+"{"+r.styles+"}":r.styles),Y&&(N.inserted[r.name]=!0)}}var N={key:Q,sheet:new iR({key:Q,container:n,nonce:B.nonce,speedy:B.speedy,prepend:B.prepend,insertionPoint:B.insertionPoint}),nonce:B.nonce,inserted:C,registered:{},insert:t};return N.sheet.hydrate(e),N},rM={exports:{}},HA={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var KB=typeof Symbol=="function"&&Symbol.for,pF=KB?Symbol.for("react.element"):60103,JF=KB?Symbol.for("react.portal"):60106,Do=KB?Symbol.for("react.fragment"):60107,ro=KB?Symbol.for("react.strict_mode"):60108,Uo=KB?Symbol.for("react.profiler"):60114,Mo=KB?Symbol.for("react.provider"):60109,fo=KB?Symbol.for("react.context"):60110,bF=KB?Symbol.for("react.async_mode"):60111,Go=KB?Symbol.for("react.concurrent_mode"):60111,uo=KB?Symbol.for("react.forward_ref"):60112,Ro=KB?Symbol.for("react.suspense"):60113,XR=KB?Symbol.for("react.suspense_list"):60120,ho=KB?Symbol.for("react.memo"):60115,Yo=KB?Symbol.for("react.lazy"):60116,LR=KB?Symbol.for("react.block"):60121,SR=KB?Symbol.for("react.fundamental"):60117,HR=KB?Symbol.for("react.responder"):60118,WR=KB?Symbol.for("react.scope"):60119;function PQ(A){if(typeof A=="object"&&A!==null){var B=A.$$typeof;switch(B){case pF:switch(A=A.type,A){case bF:case Go:case Do:case Uo:case ro:case Ro:return A;default:switch(A=A&&A.$$typeof,A){case fo:case uo:case Yo:case ho:case Mo:return A;default:return B}}case JF:return B}}}function UM(A){return PQ(A)===Go}HA.AsyncMode=bF;HA.ConcurrentMode=Go;HA.ContextConsumer=fo;HA.ContextProvider=Mo;HA.Element=pF;HA.ForwardRef=uo;HA.Fragment=Do;HA.Lazy=Yo;HA.Memo=ho;HA.Portal=JF;HA.Profiler=Uo;HA.StrictMode=ro;HA.Suspense=Ro;HA.isAsyncMode=function(A){return UM(A)||PQ(A)===bF};HA.isConcurrentMode=UM;HA.isContextConsumer=function(A){return PQ(A)===fo};HA.isContextProvider=function(A){return PQ(A)===Mo};HA.isElement=function(A){return typeof A=="object"&&A!==null&&A.$$typeof===pF};HA.isForwardRef=function(A){return PQ(A)===uo};HA.isFragment=function(A){return PQ(A)===Do};HA.isLazy=function(A){return PQ(A)===Yo};HA.isMemo=function(A){return PQ(A)===ho};HA.isPortal=function(A){return PQ(A)===JF};HA.isProfiler=function(A){return PQ(A)===Uo};HA.isStrictMode=function(A){return PQ(A)===ro};HA.isSuspense=function(A){return PQ(A)===Ro};HA.isValidElementType=function(A){return typeof A=="string"||typeof A=="function"||A===Do||A===Go||A===Uo||A===ro||A===Ro||A===XR||typeof A=="object"&&A!==null&&(A.$$typeof===Yo||A.$$typeof===ho||A.$$typeof===Mo||A.$$typeof===fo||A.$$typeof===uo||A.$$typeof===SR||A.$$typeof===HR||A.$$typeof===WR||A.$$typeof===LR)};HA.typeOf=PQ;rM.exports=HA;var vR=rM.exports,MM=vR,VR={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},xR={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},dM={};dM[MM.ForwardRef]=VR;dM[MM.Memo]=xR;var TR=!0;function OR(A,B,Q){var g="";return Q.split(" ").forEach(function(E){A[E]!==void 0?B.push(A[E]+";"):g+=E+" "}),g}var fM=function(B,Q,g){var E=B.key+"-"+Q.name;(g===!1||TR===!1)&&B.registered[E]===void 0&&(B.registered[E]=Q.styles)},GM=function(B,Q,g){fM(B,Q,g);var E=B.key+"-"+Q.name;if(B.inserted[Q.name]===void 0){var C=Q;do B.insert(Q===C?"."+E:"",C,B.sheet,!0),C=C.next;while(C!==void 0)}};function zR(A){for(var B=0,Q,g=0,E=A.length;E>=4;++g,E-=4)Q=A.charCodeAt(g)&255|(A.charCodeAt(++g)&255)<<8|(A.charCodeAt(++g)&255)<<16|(A.charCodeAt(++g)&255)<<24,Q=(Q&65535)*1540483477+((Q>>>16)*59797<<16),Q^=Q>>>24,B=(Q&65535)*1540483477+((Q>>>16)*59797<<16)^(B&65535)*1540483477+((B>>>16)*59797<<16);switch(E){case 3:B^=(A.charCodeAt(g+2)&255)<<16;case 2:B^=(A.charCodeAt(g+1)&255)<<8;case 1:B^=A.charCodeAt(g)&255,B=(B&65535)*1540483477+((B>>>16)*59797<<16)}return B^=B>>>13,B=(B&65535)*1540483477+((B>>>16)*59797<<16),((B^B>>>15)>>>0).toString(36)}var KR={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},jR=/[A-Z]|^ms/g,PR=/_EMO_([^_]+?)_([^]*?)_EMO_/g,uM=function(B){return B.charCodeAt(1)===45},Qr=function(B){return B!=null&&typeof B!="boolean"},Pa=wM(function(A){return uM(A)?A:A.replace(jR,"-$&").toLowerCase()}),gr=function(B,Q){switch(B){case"animation":case"animationName":if(typeof Q=="string")return Q.replace(PR,function(g,E,C){return QE={name:E,styles:C,next:QE},E})}return KR[B]!==1&&!uM(B)&&typeof Q=="number"&&Q!==0?Q+"px":Q};function Cw(A,B,Q){if(Q==null)return"";if(Q.__emotion_styles!==void 0)return Q;switch(typeof Q){case"boolean":return"";case"object":{if(Q.anim===1)return QE={name:Q.name,styles:Q.styles,next:QE},Q.name;if(Q.styles!==void 0){var g=Q.next;if(g!==void 0)for(;g!==void 0;)QE={name:g.name,styles:g.styles,next:QE},g=g.next;var E=Q.styles+";";return E}return qR(A,B,Q)}case"function":{if(A!==void 0){var C=QE,n=Q(A);return QE=C,Cw(A,B,n)}break}}if(B==null)return Q;var e=B[Q];return e!==void 0?e:Q}function qR(A,B,Q){var g="";if(Array.isArray(Q))for(var E=0;E<Q.length;E++)g+=Cw(A,B,Q[E])+";";else for(var C in Q){var n=Q[C];if(typeof n!="object")B!=null&&B[n]!==void 0?g+=C+"{"+B[n]+"}":Qr(n)&&(g+=Pa(C)+":"+gr(C,n)+";");else if(Array.isArray(n)&&typeof n[0]=="string"&&(B==null||B[n[0]]===void 0))for(var e=0;e<n.length;e++)Qr(n[e])&&(g+=Pa(C)+":"+gr(C,n[e])+";");else{var t=Cw(A,B,n);switch(C){case"animation":case"animationName":{g+=Pa(C)+":"+t+";";break}default:g+=C+"{"+t+"}"}}}return g}var Er=/label:\s*([^\s;\n{]+)\s*(;|$)/g,QE,mF=function(B,Q,g){if(B.length===1&&typeof B[0]=="object"&&B[0]!==null&&B[0].styles!==void 0)return B[0];var E=!0,C="";QE=void 0;var n=B[0];n==null||n.raw===void 0?(E=!1,C+=Cw(g,Q,n)):C+=n[0];for(var e=1;e<B.length;e++)C+=Cw(g,Q,B[e]),E&&(C+=n[e]);Er.lastIndex=0;for(var t="",o;(o=Er.exec(C))!==null;)t+="-"+o[1];var c=zR(C)+t;return{name:c,styles:C,next:QE}},_R=function(B){return B()},RM=Oc.useInsertionEffect?Oc.useInsertionEffect:!1,$R=RM||_R,Cr=RM||T.useLayoutEffect,hM=T.createContext(typeof HTMLElement<"u"?DM({key:"css"}):null),Ah=hM.Provider,YM=function(B){return T.forwardRef(function(Q,g){var E=T.useContext(hM);return B(Q,E,g)})},No=T.createContext({}),qa={exports:{}},nr;function NM(){return nr||(nr=1,function(A){function B(){return A.exports=B=Object.assign?Object.assign.bind():function(Q){for(var g=1;g<arguments.length;g++){var E=arguments[g];for(var C in E)Object.prototype.hasOwnProperty.call(E,C)&&(Q[C]=E[C])}return Q},A.exports.__esModule=!0,A.exports.default=A.exports,B.apply(this,arguments)}A.exports=B,A.exports.__esModule=!0,A.exports.default=A.exports}(qa)),qa.exports}NM();var Bh=YM(function(A,B){var Q=A.styles,g=mF([Q],void 0,T.useContext(No)),E=T.useRef();return Cr(function(){var C=B.key+"-global",n=new B.sheet.constructor({key:C,nonce:B.sheet.nonce,container:B.sheet.container,speedy:B.sheet.isSpeedy}),e=!1,t=document.querySelector('style[data-emotion="'+C+" "+g.name+'"]');return B.sheet.tags.length&&(n.before=B.sheet.tags[0]),t!==null&&(e=!0,t.setAttribute("data-emotion",C),n.hydrate([t])),E.current=[n,e],function(){n.flush()}},[B]),Cr(function(){var C=E.current,n=C[0],e=C[1];if(e){C[1]=!1;return}if(g.next!==void 0&&GM(B,g.next,!0),n.tags.length){var t=n.tags[n.tags.length-1].nextElementSibling;n.before=t,n.flush()}B.insert("",g,n,!1)},[B,g.name]),null});function pM(){for(var A=arguments.length,B=new Array(A),Q=0;Q<A;Q++)B[Q]=arguments[Q];return mF(B)}var po=function(){var B=pM.apply(void 0,arguments),Q="animation-"+B.name;return{name:Q,styles:"@keyframes "+Q+"{"+B.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Qh=IR,gh=function(B){return B!=="theme"},er=function(B){return typeof B=="string"&&B.charCodeAt(0)>96?Qh:gh},Ir=function(B,Q,g){var E;if(Q){var C=Q.shouldForwardProp;E=B.__emotion_forwardProp&&C?function(n){return B.__emotion_forwardProp(n)&&C(n)}:C}return typeof E!="function"&&g&&(E=B.__emotion_forwardProp),E},Eh=function(B){var Q=B.cache,g=B.serialized,E=B.isStringTag;return fM(Q,g,E),$R(function(){return GM(Q,g,E)}),null},Ch=function A(B,Q){var g=B.__emotion_real===B,E=g&&B.__emotion_base||B,C,n;Q!==void 0&&(C=Q.label,n=Q.target);var e=Ir(B,Q,g),t=e||er(E),o=!t("as");return function(){var c=arguments,D=g&&B.__emotion_styles!==void 0?B.__emotion_styles.slice(0):[];if(C!==void 0&&D.push("label:"+C+";"),c[0]==null||c[0].raw===void 0)D.push.apply(D,c);else{D.push(c[0][0]);for(var G=c.length,h=1;h<G;h++)D.push(c[h],c[0][h])}var N=YM(function(U,k,r){var d=o&&U.as||E,Y="",y=[],Z=U;if(U.theme==null){Z={};for(var H in U)Z[H]=U[H];Z.theme=T.useContext(No)}typeof U.className=="string"?Y=OR(k.registered,y,U.className):U.className!=null&&(Y=U.className+" ");var L=mF(D.concat(y),k.registered,Z);Y+=k.key+"-"+L.name,n!==void 0&&(Y+=" "+n);var W=o&&e===void 0?er(d):t,O={};for(var j in U)o&&j==="as"||W(j)&&(O[j]=U[j]);return O.className=Y,O.ref=r,T.createElement(T.Fragment,null,T.createElement(Eh,{cache:k,serialized:L,isStringTag:typeof d=="string"}),T.createElement(d,O))});return N.displayName=C!==void 0?C:"Styled("+(typeof E=="string"?E:E.displayName||E.name||"Component")+")",N.defaultProps=B.defaultProps,N.__emotion_real=N,N.__emotion_base=E,N.__emotion_styles=D,N.__emotion_forwardProp=e,Object.defineProperty(N,"toString",{value:function(){return"."+n}}),N.withComponent=function(U,k){return A(U,EA({},Q,k,{shouldForwardProp:Ir(N,k,!0)})).apply(void 0,D)},N}},nh=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],ws=Ch.bind();nh.forEach(function(A){ws[A]=ws(A)});let is;typeof document=="object"&&(is=DM({key:"css",prepend:!0}));function eh(A){const{injectFirst:B,children:Q}=A;return B&&is?FA.jsx(Ah,{value:is,children:Q}):Q}function Ih(A){return A==null||Object.keys(A).length===0}function th(A){const{styles:B,defaultTheme:Q={}}=A,g=typeof B=="function"?E=>B(Ih(E)?Q:E):B;return FA.jsx(Bh,{styles:g})}function wh(A,B){return ws(A,B)}const ih=(A,B)=>{Array.isArray(A.__emotion_styles)&&(A.__emotion_styles=B(A.__emotion_styles))},oh=Object.freeze(Object.defineProperty({__proto__:null,GlobalStyles:th,StyledEngineProvider:eh,ThemeContext:No,css:pM,default:wh,internal_processStyles:ih,keyframes:po},Symbol.toStringTag,{value:"Module"}));function fC(A){if(typeof A!="object"||A===null)return!1;const B=Object.getPrototypeOf(A);return(B===null||B===Object.prototype||Object.getPrototypeOf(B)===null)&&!(Symbol.toStringTag in A)&&!(Symbol.iterator in A)}function JM(A){if(!fC(A))return A;const B={};return Object.keys(A).forEach(Q=>{B[Q]=JM(A[Q])}),B}function eE(A,B,Q={clone:!0}){const g=Q.clone?EA({},A):A;return fC(A)&&fC(B)&&Object.keys(B).forEach(E=>{E!=="__proto__"&&(fC(B[E])&&E in A&&fC(A[E])?g[E]=eE(A[E],B[E],Q):Q.clone?g[E]=fC(B[E])?JM(B[E]):B[E]:g[E]=B[E])}),g}const ah=Object.freeze(Object.defineProperty({__proto__:null,default:eE,isPlainObject:fC},Symbol.toStringTag,{value:"Module"})),lh=["values","unit","step"],sh=A=>{const B=Object.keys(A).map(Q=>({key:Q,val:A[Q]}))||[];return B.sort((Q,g)=>Q.val-g.val),B.reduce((Q,g)=>EA({},Q,{[g.key]:g.val}),{})};function bM(A){const{values:B={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:Q="px",step:g=5}=A,E=uB(A,lh),C=sh(B),n=Object.keys(C);function e(G){return`@media (min-width:${typeof B[G]=="number"?B[G]:G}${Q})`}function t(G){return`@media (max-width:${(typeof B[G]=="number"?B[G]:G)-g/100}${Q})`}function o(G,h){const N=n.indexOf(h);return`@media (min-width:${typeof B[G]=="number"?B[G]:G}${Q}) and (max-width:${(N!==-1&&typeof B[n[N]]=="number"?B[n[N]]:h)-g/100}${Q})`}function c(G){return n.indexOf(G)+1<n.length?o(G,n[n.indexOf(G)+1]):e(G)}function D(G){const h=n.indexOf(G);return h===0?e(n[1]):h===n.length-1?t(n[h]):o(G,n[n.indexOf(G)+1]).replace("@media","@media not all and")}return EA({keys:n,values:C,up:e,down:t,between:o,only:c,not:D,unit:Q},E)}const Fh={borderRadius:4},ch=Fh;function yt(A,B){return B?eE(A,B,{clone:!1}):A}const kF={xs:0,sm:600,md:900,lg:1200,xl:1536},tr={keys:["xs","sm","md","lg","xl"],up:A=>`@media (min-width:${kF[A]}px)`};function Dg(A,B,Q){const g=A.theme||{};if(Array.isArray(B)){const C=g.breakpoints||tr;return B.reduce((n,e,t)=>(n[C.up(C.keys[t])]=Q(B[t]),n),{})}if(typeof B=="object"){const C=g.breakpoints||tr;return Object.keys(B).reduce((n,e)=>{if(Object.keys(C.values||kF).indexOf(e)!==-1){const t=C.up(e);n[t]=Q(B[e],e)}else{const t=e;n[t]=B[t]}return n},{})}return Q(B)}function Dh(A={}){var B;return((B=A.keys)==null?void 0:B.reduce((g,E)=>{const C=A.up(E);return g[C]={},g},{}))||{}}function rh(A,B){return A.reduce((Q,g)=>{const E=Q[g];return(!E||Object.keys(E).length===0)&&delete Q[g],Q},B)}function Uh(A,B){if(typeof A!="object")return{};const Q={},g=Object.keys(B);return Array.isArray(A)?g.forEach((E,C)=>{C<A.length&&(Q[E]=!0)}):g.forEach(E=>{A[E]!=null&&(Q[E]=!0)}),Q}function Jo({values:A,breakpoints:B,base:Q}){const g=Q||Uh(A,B),E=Object.keys(g);if(E.length===0)return A;let C;return E.reduce((n,e,t)=>(Array.isArray(A)?(n[e]=A[t]!=null?A[t]:A[C],C=t):typeof A=="object"?(n[e]=A[e]!=null?A[e]:A[C],C=e):n[e]=A,n),{})}function wQ(A){if(typeof A!="string")throw new Error(Qw(7));return A.charAt(0).toUpperCase()+A.slice(1)}const Mh=Object.freeze(Object.defineProperty({__proto__:null,default:wQ},Symbol.toStringTag,{value:"Module"}));function bo(A,B,Q=!0){if(!B||typeof B!="string")return null;if(A&&A.vars&&Q){const g=`vars.${B}`.split(".").reduce((E,C)=>E&&E[C]?E[C]:null,A);if(g!=null)return g}return B.split(".").reduce((g,E)=>g&&g[E]!=null?g[E]:null,A)}function ji(A,B,Q,g=Q){let E;return typeof A=="function"?E=A(Q):Array.isArray(A)?E=A[Q]||g:E=bo(A,Q)||g,B&&(E=B(E,g,A)),E}function RB(A){const{prop:B,cssProperty:Q=A.prop,themeKey:g,transform:E}=A,C=n=>{if(n[B]==null)return null;const e=n[B],t=n.theme,o=bo(t,g)||{};return Dg(n,e,D=>{let G=ji(o,E,D);return D===G&&typeof D=="string"&&(G=ji(o,E,`${B}${D==="default"?"":wQ(D)}`,D)),Q===!1?G:{[Q]:G}})};return C.propTypes={},C.filterProps=[B],C}function dh(A){const B={};return Q=>(B[Q]===void 0&&(B[Q]=A(Q)),B[Q])}const fh={m:"margin",p:"padding"},Gh={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},wr={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},uh=dh(A=>{if(A.length>2)if(wr[A])A=wr[A];else return[A];const[B,Q]=A.split(""),g=fh[B],E=Gh[Q]||"";return Array.isArray(E)?E.map(C=>g+C):[g+E]}),yF=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],ZF=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...yF,...ZF];function sw(A,B,Q,g){var E;const C=(E=bo(A,B,!1))!=null?E:Q;return typeof C=="number"?n=>typeof n=="string"?n:C*n:Array.isArray(C)?n=>typeof n=="string"?n:C[n]:typeof C=="function"?C:()=>{}}function mM(A){return sw(A,"spacing",8)}function Fw(A,B){if(typeof B=="string"||B==null)return B;const Q=Math.abs(B),g=A(Q);return B>=0?g:typeof g=="number"?-g:`-${g}`}function Rh(A,B){return Q=>A.reduce((g,E)=>(g[E]=Fw(B,Q),g),{})}function hh(A,B,Q,g){if(B.indexOf(Q)===-1)return null;const E=uh(Q),C=Rh(E,g),n=A[Q];return Dg(A,n,C)}function kM(A,B){const Q=mM(A.theme);return Object.keys(A).map(g=>hh(A,B,g,Q)).reduce(yt,{})}function cB(A){return kM(A,yF)}cB.propTypes={};cB.filterProps=yF;function DB(A){return kM(A,ZF)}DB.propTypes={};DB.filterProps=ZF;function Yh(A=8){if(A.mui)return A;const B=mM({spacing:A}),Q=(...g)=>(g.length===0?[1]:g).map(C=>{const n=B(C);return typeof n=="number"?`${n}px`:n}).join(" ");return Q.mui=!0,Q}function mo(...A){const B=A.reduce((g,E)=>(E.filterProps.forEach(C=>{g[C]=E}),g),{}),Q=g=>Object.keys(g).reduce((E,C)=>B[C]?yt(E,B[C](g)):E,{});return Q.propTypes={},Q.filterProps=A.reduce((g,E)=>g.concat(E.filterProps),[]),Q}function ag(A){return typeof A!="number"?A:`${A}px solid`}function Ug(A,B){return RB({prop:A,themeKey:"borders",transform:B})}const Nh=Ug("border",ag),ph=Ug("borderTop",ag),Jh=Ug("borderRight",ag),bh=Ug("borderBottom",ag),mh=Ug("borderLeft",ag),kh=Ug("borderColor"),yh=Ug("borderTopColor"),Zh=Ug("borderRightColor"),Xh=Ug("borderBottomColor"),Lh=Ug("borderLeftColor"),Sh=Ug("outline",ag),Hh=Ug("outlineColor"),ko=A=>{if(A.borderRadius!==void 0&&A.borderRadius!==null){const B=sw(A.theme,"shape.borderRadius",4),Q=g=>({borderRadius:Fw(B,g)});return Dg(A,A.borderRadius,Q)}return null};ko.propTypes={};ko.filterProps=["borderRadius"];mo(Nh,ph,Jh,bh,mh,kh,yh,Zh,Xh,Lh,ko,Sh,Hh);const yo=A=>{if(A.gap!==void 0&&A.gap!==null){const B=sw(A.theme,"spacing",8),Q=g=>({gap:Fw(B,g)});return Dg(A,A.gap,Q)}return null};yo.propTypes={};yo.filterProps=["gap"];const Zo=A=>{if(A.columnGap!==void 0&&A.columnGap!==null){const B=sw(A.theme,"spacing",8),Q=g=>({columnGap:Fw(B,g)});return Dg(A,A.columnGap,Q)}return null};Zo.propTypes={};Zo.filterProps=["columnGap"];const Xo=A=>{if(A.rowGap!==void 0&&A.rowGap!==null){const B=sw(A.theme,"spacing",8),Q=g=>({rowGap:Fw(B,g)});return Dg(A,A.rowGap,Q)}return null};Xo.propTypes={};Xo.filterProps=["rowGap"];const Wh=RB({prop:"gridColumn"}),vh=RB({prop:"gridRow"}),Vh=RB({prop:"gridAutoFlow"}),xh=RB({prop:"gridAutoColumns"}),Th=RB({prop:"gridAutoRows"}),Oh=RB({prop:"gridTemplateColumns"}),zh=RB({prop:"gridTemplateRows"}),Kh=RB({prop:"gridTemplateAreas"}),jh=RB({prop:"gridArea"});mo(yo,Zo,Xo,Wh,vh,Vh,xh,Th,Oh,zh,Kh,jh);function EI(A,B){return B==="grey"?B:A}const Ph=RB({prop:"color",themeKey:"palette",transform:EI}),qh=RB({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:EI}),_h=RB({prop:"backgroundColor",themeKey:"palette",transform:EI});mo(Ph,qh,_h);function VQ(A){return A<=1&&A!==0?`${A*100}%`:A}const $h=RB({prop:"width",transform:VQ}),XF=A=>{if(A.maxWidth!==void 0&&A.maxWidth!==null){const B=Q=>{var g,E;const C=((g=A.theme)==null||(g=g.breakpoints)==null||(g=g.values)==null?void 0:g[Q])||kF[Q];return C?((E=A.theme)==null||(E=E.breakpoints)==null?void 0:E.unit)!=="px"?{maxWidth:`${C}${A.theme.breakpoints.unit}`}:{maxWidth:C}:{maxWidth:VQ(Q)}};return Dg(A,A.maxWidth,B)}return null};XF.filterProps=["maxWidth"];const AY=RB({prop:"minWidth",transform:VQ}),BY=RB({prop:"height",transform:VQ}),QY=RB({prop:"maxHeight",transform:VQ}),gY=RB({prop:"minHeight",transform:VQ});RB({prop:"size",cssProperty:"width",transform:VQ});RB({prop:"size",cssProperty:"height",transform:VQ});const EY=RB({prop:"boxSizing"});mo($h,XF,AY,BY,QY,gY,EY);const CY={border:{themeKey:"borders",transform:ag},borderTop:{themeKey:"borders",transform:ag},borderRight:{themeKey:"borders",transform:ag},borderBottom:{themeKey:"borders",transform:ag},borderLeft:{themeKey:"borders",transform:ag},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:ag},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:ko},color:{themeKey:"palette",transform:EI},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:EI},backgroundColor:{themeKey:"palette",transform:EI},p:{style:DB},pt:{style:DB},pr:{style:DB},pb:{style:DB},pl:{style:DB},px:{style:DB},py:{style:DB},padding:{style:DB},paddingTop:{style:DB},paddingRight:{style:DB},paddingBottom:{style:DB},paddingLeft:{style:DB},paddingX:{style:DB},paddingY:{style:DB},paddingInline:{style:DB},paddingInlineStart:{style:DB},paddingInlineEnd:{style:DB},paddingBlock:{style:DB},paddingBlockStart:{style:DB},paddingBlockEnd:{style:DB},m:{style:cB},mt:{style:cB},mr:{style:cB},mb:{style:cB},ml:{style:cB},mx:{style:cB},my:{style:cB},margin:{style:cB},marginTop:{style:cB},marginRight:{style:cB},marginBottom:{style:cB},marginLeft:{style:cB},marginX:{style:cB},marginY:{style:cB},marginInline:{style:cB},marginInlineStart:{style:cB},marginInlineEnd:{style:cB},marginBlock:{style:cB},marginBlockStart:{style:cB},marginBlockEnd:{style:cB},displayPrint:{cssProperty:!1,transform:A=>({"@media print":{display:A}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:yo},rowGap:{style:Xo},columnGap:{style:Zo},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:VQ},maxWidth:{style:XF},minWidth:{transform:VQ},height:{transform:VQ},maxHeight:{transform:VQ},minHeight:{transform:VQ},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},cw=CY;function nY(...A){const B=A.reduce((g,E)=>g.concat(Object.keys(E)),[]),Q=new Set(B);return A.every(g=>Q.size===Object.keys(g).length)}function eY(A,B){return typeof A=="function"?A(B):A}function yM(){function A(Q,g,E,C){const n={[Q]:g,theme:E},e=C[Q];if(!e)return{[Q]:g};const{cssProperty:t=Q,themeKey:o,transform:c,style:D}=e;if(g==null)return null;if(o==="typography"&&g==="inherit")return{[Q]:g};const G=bo(E,o)||{};return D?D(n):Dg(n,g,N=>{let U=ji(G,c,N);return N===U&&typeof N=="string"&&(U=ji(G,c,`${Q}${N==="default"?"":wQ(N)}`,N)),t===!1?U:{[t]:U}})}function B(Q){var g;const{sx:E,theme:C={}}=Q||{};if(!E)return null;const n=(g=C.unstable_sxConfig)!=null?g:cw;function e(t){let o=t;if(typeof t=="function")o=t(C);else if(typeof t!="object")return t;if(!o)return null;const c=Dh(C.breakpoints),D=Object.keys(c);let G=c;return Object.keys(o).forEach(h=>{const N=eY(o[h],C);if(N!=null)if(typeof N=="object")if(n[h])G=yt(G,A(h,N,C,n));else{const U=Dg({theme:C},N,k=>({[h]:k}));nY(U,N)?G[h]=B({sx:N,theme:C}):G=yt(G,U)}else G=yt(G,A(h,N,C,n))}),rh(D,G)}return Array.isArray(E)?E.map(e):e(E)}return B}const Lo=yM();Lo.filterProps=["sx"];function ZM(A,B){const Q=this;return Q.vars&&typeof Q.getColorSchemeSelector=="function"?{[Q.getColorSchemeSelector(A).replace(/(\[[^\]]+\])/,"*:where($1)")]:B}:Q.palette.mode===A?B:{}}const IY=["breakpoints","palette","spacing","shape"];function LF(A={},...B){const{breakpoints:Q={},palette:g={},spacing:E,shape:C={}}=A,n=uB(A,IY),e=bM(Q),t=Yh(E);let o=eE({breakpoints:e,direction:"ltr",components:{},palette:EA({mode:"light"},g),spacing:t,shape:EA({},ch,C)},n);return o.applyStyles=ZM,o=B.reduce((c,D)=>eE(c,D),o),o.unstable_sxConfig=EA({},cw,n==null?void 0:n.unstable_sxConfig),o.unstable_sx=function(D){return Lo({sx:D,theme:this})},o}const tY=Object.freeze(Object.defineProperty({__proto__:null,default:LF,private_createBreakpoints:bM,unstable_applyStyles:ZM},Symbol.toStringTag,{value:"Module"}));function wY(A){return Object.keys(A).length===0}function iY(A=null){const B=T.useContext(No);return!B||wY(B)?A:B}const oY=LF();function XM(A=oY){return iY(A)}const aY=["sx"],lY=A=>{var B,Q;const g={systemProps:{},otherProps:{}},E=(B=A==null||(Q=A.theme)==null?void 0:Q.unstable_sxConfig)!=null?B:cw;return Object.keys(A).forEach(C=>{E[C]?g.systemProps[C]=A[C]:g.otherProps[C]=A[C]}),g};function SF(A){const{sx:B}=A,Q=uB(A,aY),{systemProps:g,otherProps:E}=lY(Q);let C;return Array.isArray(B)?C=[g,...B]:typeof B=="function"?C=(...n)=>{const e=B(...n);return fC(e)?EA({},g,e):g}:C=EA({},g,B),EA({},E,{sx:C})}const sY=Object.freeze(Object.defineProperty({__proto__:null,default:Lo,extendSxProp:SF,unstable_createStyleFunctionSx:yM,unstable_defaultSxConfig:cw},Symbol.toStringTag,{value:"Module"})),ir=A=>A,FY=()=>{let A=ir;return{configure(B){A=B},generate(B){return A(B)},reset(){A=ir}}},cY=FY();function LM(A){var B,Q,g="";if(typeof A=="string"||typeof A=="number")g+=A;else if(typeof A=="object")if(Array.isArray(A)){var E=A.length;for(B=0;B<E;B++)A[B]&&(Q=LM(A[B]))&&(g&&(g+=" "),g+=Q)}else for(Q in A)A[Q]&&(g&&(g+=" "),g+=Q);return g}function fB(){for(var A,B,Q=0,g="",E=arguments.length;Q<E;Q++)(A=arguments[Q])&&(B=LM(A))&&(g&&(g+=" "),g+=B);return g}const DY={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function Wg(A,B,Q="Mui"){const g=DY[B];return g?`${Q}-${g}`:`${cY.generate(A)}-${B}`}function vg(A,B,Q="Mui"){const g={};return B.forEach(E=>{g[E]=Wg(A,E,Q)}),g}var SM={exports:{}},WA={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),Fp=po(hr||(hr=qo`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),cp=po(Yr||(Yr=qo`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),Dp=DQ("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),rp=DQ(op,{name:"MuiTouchRipple",slot:"Ripple"})(Nr||(Nr=qo`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,space:" "}}function Dt(A,B){for(var Q="",g=0;g<B;g++)Q+="  ";return Q+A}function Iw(A,B,Q){Q===void 0&&(Q={});var g="";if(!B)return g;var E=Q,C=E.indent,n=C===void 0?0:C,e=B.fallbacks;Q.format===!1&&(n=-1/0);var t=UI(Q),o=t.linebreak,c=t.space;if(A&&n++,e)if(Array.isArray(e))for(var D=0;D<e.length;D++){var G=e[D];for(var h in G){var N=G[h];N!=null&&(g&&(g+=o),g+=Dt(h+":"+c+fn(N)+";",n))}}else for(var U in e){var k=e[U];k!=null&&(g&&(g+=o),g+=Dt(U+":"+c+fn(k)+";",n))}for(var r in B){var d=B[r];d!=null&&r!=="fallbacks"&&(g&&(g+=o),g+=Dt(r+":"+c+fn(d)+";",n))}return!g&&!Q.allowEmpty||!A?g:(n--,g&&(g=""+o+g+o),Dt(""+A+c+"{"+g,n)+Dt("}",n))}var QJ=/([[\].#*$><+~=|^:(),"'`\s])/g,Xr=typeof CSS<"u"&&CSS.escape,qF=function(A){return Xr?Xr(A):A.replace(QJ,"\\$1")},td=function(){function A(Q,g,E){this.type="style",this.isProcessed=!1;var C=E.sheet,n=E.Renderer;this.key=Q,this.options=E,this.style=g,C?this.renderer=C.renderer:n&&(this.renderer=new n)}var B=A.prototype;return B.prop=function(g,E,C){if(E===void 0)return this.style[g];var n=C?C.force:!1;if(!n&&this.style[g]===E)return this;var e=E;(!C||C.process!==!1)&&(e=this.options.jss.plugins.onChangeValue(E,g,this));var t=e==null||e===!1,o=g in this.style;if(t&&!o&&!n)return this;var c=t&&o;if(c?delete this.style[g]:this.style[g]=e,this.renderable&&this.renderer)return c?this.renderer.removeProperty(this.renderable,g):this.renderer.setProperty(this.renderable,g,e),this;var D=this.options.sheet;return D&&D.attached,this},A}(),ds=function(A){Id(B,A);function B(g,E,C){var n;n=A.call(this,g,E,C)||this;var e=C.selector,t=C.scoped,o=C.sheet,c=C.generateId;return e?n.selectorText=e:t!==!1&&(n.id=c(yr(yr(n)),o),n.selectorText="."+qF(n.id)),n}var Q=B.prototype;return Q.applyTo=function(E){var C=this.renderer;if(C){var n=this.toJSON();for(var e in n)C.setProperty(E,e,n[e])}return this},Q.toJSON=function(){var E={};for(var C in this.style){var n=this.style[C];typeof n!="object"?E[C]=n:Array.isArray(n)&&(E[C]=fn(n))}return E},Q.toString=function(E){var C=this.options.sheet,n=C?C.options.link:!1,e=n?zA({},E,{allowEmpty:!0}):E;return Iw(this.selectorText,this.style,e)},ed(B,[{key:"selector",set:function(E){if(E!==this.selectorText){this.selectorText=E;var C=this.renderer,n=this.renderable;if(!(!n||!C)){var e=C.setSelector(n,E);e||C.replaceRule(n,this)}}},get:function(){return this.selectorText}}]),B}(td),gJ={onCreateRule:function(B,Q,g){return B[0]==="@"||g.parent&&g.parent.type==="keyframes"?null:new ds(B,Q,g)}},El={indent:1,children:!0},EJ=/@([\w-]+)/,CJ=function(){function A(Q,g,E){this.type="conditional",this.isProcessed=!1,this.key=Q;var C=Q.match(EJ);this.at=C?C[1]:"unknown",this.query=E.name||"@"+this.at,this.options=E,this.rules=new _o(zA({},E,{parent:this}));for(var n in g)this.rules.add(n,g[n]);this.rules.process()}var B=A.prototype;return B.getRule=function(g){return this.rules.get(g)},B.indexOf=function(g){return this.rules.indexOf(g)},B.addRule=function(g,E,C){var n=this.rules.add(g,E,C);return n?(this.options.jss.plugins.onProcessRule(n),n):null},B.replaceRule=function(g,E,C){var n=this.rules.replace(g,E,C);return n&&this.options.jss.plugins.onProcessRule(n),n},B.toString=function(g){g===void 0&&(g=El);var E=UI(g),C=E.linebreak;if(g.indent==null&&(g.indent=El.indent),g.children==null&&(g.children=El.children),g.children===!1)return this.query+" {}";var n=this.rules.toString(g);return n?this.query+" {"+C+n+C+"}":""},A}(),nJ=/@container|@media|@supports\s+/,eJ={onCreateRule:function(B,Q,g){return nJ.test(B)?new CJ(B,Q,g):null}},Cl={indent:1,children:!0},IJ=/@keyframes\s+([\w-]+)/,fs=function(){function A(Q,g,E){this.type="keyframes",this.at="@keyframes",this.isProcessed=!1;var C=Q.match(IJ);C&&C[1]?this.name=C[1]:this.name="noname",this.key=this.type+"-"+this.name,this.options=E;var n=E.scoped,e=E.sheet,t=E.generateId;this.id=n===!1?this.name:qF(t(this,e)),this.rules=new _o(zA({},E,{parent:this}));for(var o in g)this.rules.add(o,g[o],zA({},E,{parent:this}));this.rules.process()}var B=A.prototype;return B.toString=function(g){g===void 0&&(g=Cl);var E=UI(g),C=E.linebreak;if(g.indent==null&&(g.indent=Cl.indent),g.children==null&&(g.children=Cl.children),g.children===!1)return this.at+" "+this.id+" {}";var n=this.rules.toString(g);return n&&(n=""+C+n+C),this.at+" "+this.id+" {"+n+"}"},A}(),tJ=/@keyframes\s+/,wJ=/\$([\w-]+)/g,Gs=function(B,Q){return typeof B=="string"?B.replace(wJ,function(g,E){return E in Q?Q[E]:g}):B},Lr=function(B,Q,g){var E=B[Q],C=Gs(E,g);C!==E&&(B[Q]=C)},iJ={onCreateRule:function(B,Q,g){return typeof B=="string"&&tJ.test(B)?new fs(B,Q,g):null},onProcessStyle:function(B,Q,g){return Q.type!=="style"||!g||("animation-name"in B&&Lr(B,"animation-name",g.keyframes),"animation"in B&&Lr(B,"animation",g.keyframes)),B},onChangeValue:function(B,Q,g){var E=g.options.sheet;if(!E)return B;switch(Q){case"animation":return Gs(B,E.keyframes);case"animation-name":return Gs(B,E.keyframes);default:return B}}},oJ=function(A){Id(B,A);function B(){return A.apply(this,arguments)||this}var Q=B.prototype;return Q.toString=function(E){var C=this.options.sheet,n=C?C.options.link:!1,e=n?zA({},E,{allowEmpty:!0}):E;return Iw(this.key,this.style,e)},B}(td),aJ={onCreateRule:function(B,Q,g){return g.parent&&g.parent.type==="keyframes"?new oJ(B,Q,g):null}},lJ=function(){function A(Q,g,E){this.type="font-face",this.at="@font-face",this.isProcessed=!1,this.key=Q,this.style=g,this.options=E}var B=A.prototype;return B.toString=function(g){var E=UI(g),C=E.linebreak;if(Array.isArray(this.style)){for(var n="",e=0;e<this.style.length;e++)n+=Iw(this.at,this.style[e]),this.style[e+1]&&(n+=C);return n}return Iw(this.at,this.style,g)},A}(),sJ=/@font-face/,FJ={onCreateRule:function(B,Q,g){return sJ.test(B)?new lJ(B,Q,g):null}},cJ=function(){function A(Q,g,E){this.type="viewport",this.at="@viewport",this.isProcessed=!1,this.key=Q,this.style=g,this.options=E}var B=A.prototype;return B.toString=function(g){return Iw(this.key,this.style,g)},A}(),DJ={onCreateRule:function(B,Q,g){return B==="@viewport"||B==="@-ms-viewport"?new cJ(B,Q,g):null}},rJ=function(){function A(Q,g,E){this.type="simple",this.isProcessed=!1,this.key=Q,this.value=g,this.options=E}var B=A.prototype;return B.toString=function(g){if(Array.isArray(this.value)){for(var E="",C=0;C<this.value.length;C++)E+=this.key+" "+this.value[C]+";",this.value[C+1]&&(E+=`
`,B},ZJ=function(){function A(Q){this.getPropertyValue=uJ,this.setProperty=RJ,this.removeProperty=hJ,this.setSelector=YJ,this.hasInsertedRules=!1,this.cssRules=[],Q&&Zt.add(Q),this.sheet=Q;var g=this.sheet?this.sheet.options:{},E=g.media,C=g.meta,n=g.element;this.element=n||yJ(),this.element.setAttribute("data-jss",""),E&&this.element.setAttribute("media",E),C&&this.element.setAttribute("data-meta",C);var e=kJ();e&&this.element.setAttribute("nonce",e)}var B=A.prototype;return B.attach=function(){if(!(this.element.parentNode||!this.sheet)){mJ(this.element,this.sheet.options);var g=!!(this.sheet&&this.sheet.deployed);this.hasInsertedRules&&g&&(this.hasInsertedRules=!1,this.deploy())}},B.detach=function(){if(this.sheet){var g=this.element.parentNode;g&&g.removeChild(this.element),this.sheet.options.link&&(this.cssRules=[],this.element.textContent=`
`)}},B.deploy=function(){var g=this.sheet;if(g){if(g.options.link){this.insertRules(g.rules);return}this.element.textContent=`
`+g.toString()+`
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT