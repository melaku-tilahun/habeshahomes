function Nt(e,t){return function(){return e.apply(t,arguments)}}const{toString:Er}=Object.prototype,{getPrototypeOf:ne}=Object,{iterator:_e,toStringTag:Ft}=Symbol,Se=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),Ut=e=>typeof e=="string"&&(e==="__proto__"||e==="constructor"||e==="prototype"),Mt=(e,t,r)=>e===Object.prototype||!r&&t===null,_r=e=>{if(!Object.isExtensible(e))return!1;const t=Object.getOwnPropertyNames(e);return Object.getOwnPropertySymbols&&t.push(...Object.getOwnPropertySymbols(e)),t.every(r=>{if(Ut(r))return!1;const n=Object.getOwnPropertyDescriptor(e,r);return!!n&&n.configurable&&n.writable===!0})},Ee=(e,t)=>{let r=e;const n=[];for(;r!=null;){if(n.indexOf(r)!==-1)return!1;n.push(r);const s=ne(r);if(Mt(r,s,r===e))return!1;if(Se(r,t))return!0;r=s}return!1},Rr=(e,t)=>e!=null&&Ee(e,t)?e[t]:void 0,Ar=e=>{if(e==null||typeof e!="object"&&typeof e!="function")return e;const t=ne(e);if(t===null&&_r(e))return e;const r=Object.create(null),n=Object.create(null),s=[];let o=e;for(;o!=null&&s.indexOf(o)===-1;){s.push(o);const i=o===e?t:ne(o);if(Mt(o,i,o===e))break;const a=Object.getOwnPropertyNames(o);Object.getOwnPropertySymbols&&a.push(...Object.getOwnPropertySymbols(o));for(const c of a)Ut(c)||Se(n,c)||(r[c]=e[c],n[c]=!0);o=i}return r},st=(e=>t=>{const r=Er.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),z=e=>(e=e.toLowerCase(),t=>st(t)===e),je=e=>t=>typeof t===e,{isArray:ce}=Array,de=je("undefined");function me(e){return e!==null&&!de(e)&&e.constructor!==null&&!de(e.constructor)&&j(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const jt=z("ArrayBuffer");function kr(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&jt(e.buffer),t}const Or=je("string"),j=je("function"),It=je("number"),he=e=>e!==null&&typeof e=="object",Pr=e=>e===!0||e===!1,Ce=e=>{if(!he(e))return!1;const t=ne(e);return(t===null||t===Object.prototype||ne(t)===null)&&!Ee(e,Ft)&&!Ee(e,_e)},Lr=e=>{if(!he(e)||me(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},Tr=z("Date"),Cr=z("File"),qr=e=>!!(e&&typeof e.uri<"u"),Br=e=>e&&typeof e.getParts<"u",Dr=z("Blob"),$r=z("FileList"),Nr=z("Set"),Fr=e=>he(e)&&j(e.pipe);function Ur(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const bt=Ur(),yt=typeof bt.FormData<"u"?bt.FormData:void 0,Mr=e=>{if(!e)return!1;if(yt&&e instanceof yt)return!0;const t=ne(e);if(!t||t===Object.prototype||!j(e.append))return!1;const r=st(e);return r==="formdata"||r==="object"&&j(e.toString)&&e.toString()==="[object FormData]"},jr=z("URLSearchParams"),[Ir,Hr,zr,Vr]=["ReadableStream","Request","Response","Headers"].map(z),Kr=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Re(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,s;if(typeof e!="object"&&(e=[e]),ce(e))for(n=0,s=e.length;n<s;n++)t.call(null,e[n],n,e);else{if(me(e))return;const o=r?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let a;for(n=0;n<i;n++)a=o[n],t.call(null,e[a],a,e)}}function Ht(e,t){if(me(e))return null;t=t.toLowerCase();const r=Object.keys(e);let n=r.length,s;for(;n-- >0;)if(s=r[n],t===s.toLowerCase())return s;return null}const ae=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,zt=e=>!de(e)&&e!==ae;function Ze(...e){const{caseless:t,skipUndefined:r}=zt(this)&&this||{},n={},s=(o,i)=>{if(i==="__proto__"||i==="constructor"||i==="prototype")return;const a=t&&typeof i=="string"&&Ht(n,i)||i,c=Se(n,a)?n[a]:void 0;Ce(c)&&Ce(o)?n[a]=Ze(c,o):Ce(o)?n[a]=Ze({},o):ce(o)?n[a]=o.slice():(!r||!de(o))&&(n[a]=o)};for(let o=0,i=e.length;o<i;o++){const a=e[o];if(!a||me(a)||(Re(a,s),typeof a!="object"||ce(a)))continue;const c=Object.getOwnPropertySymbols(a);for(let d=0;d<c.length;d++){const u=c[d];sn.call(a,u)&&s(a[u],u)}}return n}const Wr=(e,t,r,{allOwnKeys:n}={})=>(Re(t,(s,o)=>{r&&j(s)?Object.defineProperty(e,o,{__proto__:null,value:Nt(s,r),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,o,{__proto__:null,value:s,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:n}),e),Jr=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Gr=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),Object.defineProperty(e.prototype,"constructor",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{__proto__:null,value:t.prototype}),r&&Object.assign(e.prototype,r)},Xr=(e,t,r,n)=>{let s,o,i;const a={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!n||n(i,e,t))&&!a[i]&&(t[i]=e[i],a[i]=!0);e=r!==!1&&ne(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},Yr=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},Qr=e=>{if(!e)return null;if(ce(e))return e;let t=e.length;if(!It(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},Zr=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ne(Uint8Array)),en=(e,t)=>{const n=(e&&e[_e]).call(e);let s;for(;(s=n.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},tn=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},rn=z("HTMLFormElement"),nn=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,s){return n.toUpperCase()+s}),{propertyIsEnumerable:sn}=Object.prototype,on=z("RegExp"),Vt=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};Re(r,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(n[o]=i||s)}),Object.defineProperties(e,n)},an=e=>{Vt(e,(t,r)=>{if(j(e)&&["arguments","caller","callee"].includes(r))return!1;const n=e[r];if(j(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},ln=(e,t)=>{const r={},n=s=>{s.forEach(o=>{r[o]=!0})};return ce(e)?n(e):n(String(e).split(t)),r},cn=()=>{},dn=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function un(e){return!!(e&&j(e.append)&&e[Ft]==="FormData"&&e[_e])}const pn=e=>{const t=new WeakSet,r=n=>{if(he(n)){if(t.has(n))return;if(me(n))return n;if(!("toJSON"in n)){t.add(n);let s;if(Nr(n)){s=[];for(const o of n){const i=r(o);!de(i)&&s.push(i)}}else s=ce(n)?[]:{},Re(n,(o,i)=>{const a=r(o);!de(a)&&(s[i]=a)});return t.delete(n),s}}return n};return r(e)},fn=z("AsyncFunction"),mn=e=>e&&(he(e)||j(e))&&j(e.then)&&j(e.catch),Kt=((e,t)=>e?setImmediate:t?((r,n)=>(ae.addEventListener("message",({source:s,data:o})=>{s===ae&&o===r&&n.length&&n.shift()()},!1),s=>{n.push(s),ae.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",j(ae.postMessage)),hn=typeof queueMicrotask<"u"?queueMicrotask.bind(ae):typeof process<"u"&&process.nextTick||Kt,Wt=e=>e!=null&&j(e[_e]),bn=e=>e!=null&&Ee(e,_e)&&Wt(e),l={isArray:ce,isArrayBuffer:jt,isBuffer:me,isFormData:Mr,isArrayBufferView:kr,isString:Or,isNumber:It,isBoolean:Pr,isObject:he,isPlainObject:Ce,isEmptyObject:Lr,isReadableStream:Ir,isRequest:Hr,isResponse:zr,isHeaders:Vr,isUndefined:de,isDate:Tr,isFile:Cr,isReactNativeBlob:qr,isReactNative:Br,isBlob:Dr,isRegExp:on,isFunction:j,isStream:Fr,isURLSearchParams:jr,isTypedArray:Zr,isFileList:$r,forEach:Re,merge:Ze,extend:Wr,trim:Kr,stripBOM:Jr,inherits:Gr,toFlatObject:Xr,kindOf:st,kindOfTest:z,endsWith:Yr,toArray:Qr,forEachEntry:en,matchAll:tn,isHTMLForm:rn,hasOwnProperty:Se,hasOwnProp:Se,hasOwnInPrototypeChain:Ee,getSafeProp:Rr,toSafeFlatObject:Ar,reduceDescriptors:Vt,freezeMethods:an,toObjectSet:ln,toCamelCase:nn,noop:cn,toFiniteNumber:dn,findKey:Ht,global:ae,isContextDefined:zt,isSpecCompliantForm:un,toJSONObject:pn,isAsyncFn:fn,isThenable:mn,setImmediate:Kt,asap:hn,isIterable:Wt,isSafeIterable:bn},yn=l.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),gn=e=>{const t={};let r,n,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),r=i.substring(0,s).trim().toLowerCase(),n=i.substring(s+1).trim();const a=l.hasOwnProp(t,r);!r||a&&l.hasOwnProp(yn,r)||(r==="set-cookie"?a?t[r].push(n):t[r]=[n]:t[r]=a?t[r]+", "+n:n)}),t};function vn(e){let t=0,r=e.length;for(;t<r;){const n=e.charCodeAt(t);if(n!==9&&n!==32)break;t+=1}for(;r>t;){const n=e.charCodeAt(r-1);if(n!==9&&n!==32)break;r-=1}return t===0&&r===e.length?e:e.slice(t,r)}const wn=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),xn=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function ot(e,t){return l.isArray(e)?e.map(r=>ot(r,t)):vn(String(e).replace(t,""))}const Sn=e=>ot(e,wn),En=e=>ot(e,xn);function Jt(e){const t=Object.create(null);return l.forEach(e.toJSON(),(r,n)=>{t[n]=En(r)}),t}const gt=Symbol("internals");function ve(e){return e&&String(e).trim().toLowerCase()}function qe(e){return e===!1||e==null?e:l.isArray(e)?e.map(qe):Sn(String(e))}function _n(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const Rn=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function Ke(e){let t=0,r=e.length;for(;t<r;){const n=e.charCodeAt(t);if(n!==9&&n!==32)break;t+=1}for(;r>t;){const n=e.charCodeAt(r-1);if(n!==9&&n!==32)break;r-=1}return t===0&&r===e.length?e:e.slice(t,r)}function An(e){const t=e.length-1;if(t<1||e.charCodeAt(0)!==34||e.charCodeAt(t)!==34)return e;let r="";for(let n=1;n<t;n++){const s=e.charCodeAt(n);if(s===34||s===92&&(n+=1,n>=t))return e;r+=e[n]}return r}function kn(e){const t=Object.create(null),r=String(e);let n=0,s=!1,o=!1;function i(a){const c=Ke(r.slice(n,a)),d=c.indexOf("=");if(d<1)return;const u=Ke(c.slice(0,d));if(!Rn.test(u))return;const f=u.toLowerCase();if(f==="__proto__"||f==="constructor"||f==="prototype")return;const b=Ke(c.slice(d+1));t[f]=An(b)}for(let a=0;a<r.length;a++){const c=r.charCodeAt(a);s?o?o=!1:c===92?o=!0:c===34&&(s=!1):c===34?s=!0:(c===44||c===59)&&(i(a),n=a+1)}return i(r.length),t}const On=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function We(e,t,r,n,s){if(l.isFunction(n))return n.call(this,t,r);if(s&&(t=r),!!l.isString(t)){if(l.isString(n))return t.indexOf(n)!==-1;if(l.isRegExp(n))return n.test(t)}}function Pn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function Ln(e,t){const r=l.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{__proto__:null,value:function(s,o,i){return this[n].call(this,t,s,o,i)},configurable:!0})})}let U=class{constructor(t){t&&this.set(t)}set(t,r,n){const s=this;function o(a,c,d){const u=ve(c);if(!u)return;const f=l.findKey(s,u);(!f||s[f]===void 0||d===!0||d===void 0&&s[f]!==!1)&&(s[f||c]=qe(a))}const i=(a,c)=>l.forEach(a,(d,u)=>o(d,u,c));if(l.isPlainObject(t)||t instanceof this.constructor)i(t,r);else if(l.isString(t)&&(t=t.trim())&&!On(t))i(gn(t),r);else if(l.isObject(t)&&l.isSafeIterable(t)){let a=Object.create(null),c,d;for(const u of t){if(!l.isArray(u))throw new TypeError("Object iterator must return a key-value pair");d=u[0],l.hasOwnProp(a,d)?(c=a[d],a[d]=l.isArray(c)?[...c,u[1]]:[c,u[1]]):a[d]=u[1]}i(a,r)}else t!=null&&o(r,t,n);return this}get(t,r){if(t=ve(t),t){const n=l.findKey(this,t);if(n){const s=this[n];if(!r)return s;if(r===!0)return _n(s);if(l.isFunction(r))return r.call(this,s,n);if(l.isRegExp(r))return r.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=ve(t),t){const n=l.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||We(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let s=!1;function o(i){if(i=ve(i),i){const a=l.findKey(n,i);a&&(!r||We(n,n[a],a,r))&&(delete n[a],s=!0)}}return l.isArray(t)?t.forEach(o):o(t),s}clear(t){const r=Object.keys(this);let n=r.length,s=!1;for(;n--;){const o=r[n];(!t||We(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const r=this,n={};return l.forEach(this,(s,o)=>{const i=l.findKey(n,o);if(i){r[i]=qe(s),delete r[o];return}const a=t?Pn(o):String(o).trim();a!==o&&delete r[o],r[a]=qe(s),n[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return l.forEach(this,(n,s)=>{n!=null&&n!==!1&&(r[s]=t&&l.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}getSetCookie(){const t=this.get("set-cookie");return l.isArray(t)?t:t==null||t===!1?[]:[t]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static parseParameters(t){return kn(t)}static concat(t,...r){const n=new this(t);return r.forEach(s=>n.set(s)),n}static accessor(t){const n=(this[gt]=this[gt]={accessors:{}}).accessors,s=this.prototype;function o(i){const a=ve(i);n[a]||(Ln(s,i),n[a]=!0)}return l.isArray(t)?t.forEach(o):o(t),this}};U.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);l.reduceDescriptors(U.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});l.freezeMethods(U);const Fe="[REDACTED ****]";function Tn(e){if(l.hasOwnProp(e,"toJSON"))return!0;let t=Object.getPrototypeOf(e);for(;t&&t!==Object.prototype;){if(l.hasOwnProp(t,"toJSON"))return!0;t=Object.getPrototypeOf(t)}return!1}function Cn(e,t){const r=new Set(t.map(o=>String(o).toLowerCase())),n=[],s=o=>{if(o===null||typeof o!="object"||l.isBuffer(o))return o;if(n.indexOf(o)!==-1)return;o instanceof U&&(o=o.toJSON()),n.push(o);let i;if(l.isArray(o))i=[],o.forEach((a,c)=>{const d=s(a);l.isUndefined(d)||(i[c]=d)});else{if(!l.isPlainObject(o)&&Tn(o))return n.pop(),o;i=Object.create(null);for(const[a,c]of Object.entries(o)){const d=r.has(a.toLowerCase())?Fe:s(c);l.isUndefined(d)||(i[a]=d)}}return n.pop(),i};return s(e)}function vt(e){try{return String(e)}catch{return""}}function qn(e){return e.errors.map(r=>{try{return r&&r.message?vt(r.message):vt(r)}catch{return""}}).filter(Boolean).join("; ")||e.name||"AggregateError"}let m=class Gt extends Error{static from(t,r,n,s,o,i){let a=t.message;!a&&l.isArray(t.errors)&&t.errors.length&&(a=qn(t));const c=new Gt(a,r||t.code,n,s,o);return Object.defineProperty(c,"cause",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),c.name=t.name,t.status!=null&&c.status==null&&(c.status=t.status),i&&Object.assign(c,i),c}constructor(t,r,n,s,o){super(t),Object.defineProperty(this,"message",{__proto__:null,value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,r&&(this.code=r),n&&(this.config=n),s&&(this.request=s),o&&(this.response=o,this.status=o.status)}toJSON(){const t=this.config,r=t&&l.hasOwnProp(t,"redact")?t.redact:void 0,n=l.isArray(r)&&r.length>0?Cn(t,r):l.toJSONObject(t);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:n,code:this.code,status:this.status}}};m.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";m.ERR_BAD_OPTION="ERR_BAD_OPTION";m.ECONNABORTED="ECONNABORTED";m.ETIMEDOUT="ETIMEDOUT";m.ECONNREFUSED="ECONNREFUSED";m.ERR_NETWORK="ERR_NETWORK";m.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";m.ERR_DEPRECATED="ERR_DEPRECATED";m.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";m.ERR_BAD_REQUEST="ERR_BAD_REQUEST";m.ERR_CANCELED="ERR_CANCELED";m.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";m.ERR_INVALID_URL="ERR_INVALID_URL";m.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const Bn=null,Xt=100;function et(e){return l.isPlainObject(e)||l.isArray(e)}function Yt(e){return l.endsWith(e,"[]")?e.slice(0,-2):e}function Je(e,t,r){return e?e.concat(t).map(function(s,o){return s=Yt(s),!r&&o?"["+s+"]":s}).join(r?".":""):t}function Dn(e){return l.isArray(e)&&!e.some(et)}const $n=l.toFlatObject(l,{},null,function(t){return/^is[A-Z]/.test(t)});function Ie(e,t,r){if(!l.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const n=(h,y)=>{const g=l.getSafeProp(r,h);return l.isUndefined(g)?y:g},s=n("metaTokens",!0),o=n("visitor")||E,i=n("dots",!1),a=n("indexes",!1),c=n("Blob")||typeof Blob<"u"&&Blob,d=n("maxDepth",Xt),u=c&&l.isSpecCompliantForm(t),f=[];if(!l.isFunction(o))throw new TypeError("visitor must be a function");function b(h){if(h===null)return"";if(l.isDate(h))return h.toISOString();if(l.isBoolean(h))return h.toString();if(!u&&l.isBlob(h))throw new m("Blob is not supported. Use a Buffer instead.");if(l.isArrayBuffer(h)||l.isTypedArray(h)){if(u&&typeof c=="function")return new c([h]);throw new m("Blob is not supported. Use a Buffer instead.",m.ERR_NOT_SUPPORT)}return h}function v(h){if(h>d)throw new m("Object is too deeply nested ("+h+" levels). Max depth: "+d,m.ERR_FORM_DATA_DEPTH_EXCEEDED)}function x(h,y){if(d===1/0)return JSON.stringify(h);const g=[];return JSON.stringify(h,function(P,k){if(!l.isObject(k))return k;for(;g.length&&g[g.length-1]!==this;)g.pop();return g.push(k),v(y+g.length-1),k})}function E(h,y,g){let O=h;if(l.isReactNative(t)&&l.isReactNativeBlob(h))return t.append(Je(g,y,i),b(h)),!1;if(h&&!g&&typeof h=="object"){if(l.endsWith(y,"{}"))y=s?y:y.slice(0,-2),h=x(h,1);else if(l.isArray(h)&&Dn(h)||(l.isFileList(h)||l.endsWith(y,"[]"))&&(O=l.toArray(h)))return y=Yt(y),O.forEach(function(k,L){!(l.isUndefined(k)||k===null)&&t.append(a===!0?Je([y],L,i):a===null?y:y+"[]",b(k))}),!1}return et(h)?!0:(t.append(Je(g,y,i),b(h)),!1)}const w=Object.assign($n,{defaultVisitor:E,convertValue:b,isVisitable:et});function p(h,y,g=0){if(!l.isUndefined(h)){if(v(g),f.indexOf(h)!==-1)throw new Error("Circular reference detected in "+y.join("."));f.push(h),l.forEach(h,function(P,k){(!(l.isUndefined(P)||P===null)&&o.call(t,P,l.isString(k)?k.trim():k,y,w))===!0&&p(P,y?y.concat(k):[k],g+1)}),f.pop()}}if(!l.isObject(e))throw new TypeError("data must be an object");return p(e),t}function wt(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(e).replace(/[!'()~]|%20/g,function(n){return t[n]})}function it(e,t){this._pairs=[],e&&Ie(e,this,t)}const Qt=it.prototype;Qt.append=function(t,r){this._pairs.push([t,r])};Qt.toString=function(t){const r=t?n=>t.call(this,n,wt):wt;return this._pairs.map(function(s){return r(s[0])+"="+r(s[1])},"").join("&")};function Nn(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Zt(e,t,r){if(!t)return e;e=e||"";const n=l.isFunction(r)?{serialize:r}:r,s=l.getSafeProp(n,"encode")||Nn,o=l.getSafeProp(n,"serialize");let i;if(o?i=o(t,n):i=l.isURLSearchParams(t)?t.toString():new it(t,n).toString(s),i){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}const we=Symbol("internals");function er(e){return e?e.length:0}function xt(e){if(e)for(;e.length&&e[e.length-1]===null;)e.pop()}function xe(e,t){const r=e.handlers,n=er(r);r!==t.handlersRef?(t.handlersRef=r,t.handlerEntries.clear()):n!==t.handlersLength&&(n?t.handlerEntries.forEach(function(o,i){r[o.index]!==o.handler&&t.handlerEntries.delete(i)}):t.handlerEntries.clear()),t.handlersLength=n}class St{constructor(){this.handlers=[],this[we]={handlersRef:this.handlers,handlersLength:this.handlers.length,handlerEntries:new Map,iterationDepth:0,nextId:0}}use(t,r,n){const s={fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null},o=this[we];this.handlers==null&&(this.handlers=[]),xe(this,o);const i=o.nextId++;return this.handlers.push(s),o.handlerEntries.set(i,{handler:s,index:this.handlers.length-1}),o.handlersLength=this.handlers.length,i}eject(t){const r=this[we];xe(this,r);const n=r.handlerEntries.get(t);if(n){if(r.handlerEntries.delete(t),this.handlers[n.index]!==n.handler)return;this.handlers[n.index]=null,r.iterationDepth||(xt(this.handlers),r.handlersLength=this.handlers.length)}}clear(){this.handlers&&(this.handlers=[],xe(this,this[we]))}forEach(t){const r=this[we];xe(this,r),r.iterationDepth++;try{l.forEach(this.handlers,function(s){s!==null&&t(s)})}finally{--r.iterationDepth||(xe(this,r),xt(this.handlers),r.handlersLength=er(this.handlers))}}}const at={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},Fn=typeof URLSearchParams<"u"?URLSearchParams:it,Un=typeof FormData<"u"?FormData:null,Mn=typeof Blob<"u"?Blob:null,jn={isBrowser:!0,classes:{URLSearchParams:Fn,FormData:Un,Blob:Mn},protocols:["http","https","file","blob","url","data"]},lt=typeof window<"u"&&typeof document<"u",tt=typeof navigator=="object"&&navigator||void 0,In=lt&&(!tt||["ReactNative","NativeScript","NS"].indexOf(tt.product)<0),Hn=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",zn=lt&&window.location.href||"http://localhost",Vn=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:lt,hasStandardBrowserEnv:In,hasStandardBrowserWebWorkerEnv:Hn,navigator:tt,origin:zn},Symbol.toStringTag,{value:"Module"})),q={...Vn,...jn};function Kn(e,t){return Ie(e,new q.classes.URLSearchParams,{visitor:function(r,n,s,o){return q.isNode&&l.isBuffer(r)?(this.append(n,r.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)},...t})}const Et=Xt;function tr(e){if(e>Et)throw new m("FormData field is too deeply nested ("+e+" levels). Max depth: "+Et,m.ERR_FORM_DATA_DEPTH_EXCEEDED)}function Wn(e){const t=[],r=/[^.[\]]+|\[([^.[\]]*)]/g;let n;for(;(n=r.exec(e))!==null;)tr(t.length),t.push(n[0]==="[]"?"":n[1]||n[0]);return t}function Jn(e){const t={},r=Object.keys(e);let n;const s=r.length;let o;for(n=0;n<s;n++)o=r[n],t[o]=e[o];return t}function rr(e){function t(r,n,s,o){tr(o);let i=r[o++];if(i==="__proto__")return!0;const a=Number.isFinite(+i),c=o>=r.length;return i=!i&&l.isArray(s)?s.length:i,c?(l.hasOwnProp(s,i)?s[i]=l.isArray(s[i])?s[i].concat(n):[s[i],n]:s[i]=n,!a):((!l.hasOwnProp(s,i)||!l.isObject(s[i]))&&(s[i]=[]),t(r,n,s[i],o)&&l.isArray(s[i])&&(s[i]=Jn(s[i])),!a)}if(l.isFormData(e)&&l.isFunction(e.entries)){const r={};return l.forEachEntry(e,(n,s)=>{t(Wn(n),s,r,0)}),r}return null}const nr=Object.freeze(["get","delete","head","options","post","put","patch","purge","link","unlink","query"]),fe=(e,t)=>e!=null&&l.hasOwnProp(e,t)?e[t]:void 0;function Gn(e,t,r){if(l.isString(e))try{return(t||JSON.parse)(e),l.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const Ae={transitional:at,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const n=r.getContentType()||"",s=n.indexOf("application/json")>-1,o=l.isObject(t);if(o&&l.isHTMLForm(t)&&(t=new FormData(t)),l.isFormData(t))return s?JSON.stringify(rr(t)):t;if(l.isArrayBuffer(t)||l.isBuffer(t)||l.isStream(t)||l.isFile(t)||l.isBlob(t)||l.isReadableStream(t))return t;if(l.isArrayBufferView(t))return t.buffer;if(l.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(o){const c=fe(this,"formSerializer");if(n.indexOf("application/x-www-form-urlencoded")>-1)return Kn(t,c).toString();if((a=l.isFileList(t))||n.indexOf("multipart/form-data")>-1){const d=fe(this,"env"),u=d&&d.FormData;return Ie(a?{"files[]":t}:t,u&&new u,c)}}return o||s?(r.setContentType("application/json",!1),Gn(t)):t}],transformResponse:[function(t){const r=fe(this,"transitional")||Ae.transitional,n=r&&r.forcedJSONParsing,s=fe(this,"responseType"),o=s==="json";if(l.isResponse(t)||l.isReadableStream(t))return t;if(t&&l.isString(t)&&(n&&!s||o)){const a=!(r&&r.silentJSONParsing)&&o;try{return JSON.parse(t,fe(this,"parseReviver"))}catch(c){if(a)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,fe(this,"response")):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:q.classes.FormData,Blob:q.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};l.forEach(nr,e=>{Ae.headers[e]={}});function Ge(e,t){const r=this||Ae,n=t||r,s=U.from(n.headers);let o=n.data;return l.forEach(e,function(a){o=a.call(r,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function sr(e){return!!(e&&e.__CANCEL__)}let ke=class extends m{constructor(t,r,n){super(t??"canceled",m.ERR_CANCELED,r,n),this.name="CanceledError",this.__CANCEL__=!0}};function or(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new m("Request failed with status code "+r.status,r.status>=400&&r.status<500?m.ERR_BAD_REQUEST:m.ERR_BAD_RESPONSE,r.config,r.request,r))}const Xn=/[\t\n\r]/g;function ir(e){if(typeof e!="string")return e;let t=0;for(;t<e.length&&e.charCodeAt(t)<=32;)t++;return e.slice(t).replace(Xn,"")}function Xe(e){const t=/^([-+\w]{1,25}):(?:\/\/)?/.exec(e);return t&&t[1]||""}function Yn(e,t){e=e||10;const r=new Array(e),n=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(c){const d=Date.now(),u=n[o];i||(i=d),r[s]=c,n[s]=d;let f=o,b=0;for(;f!==s;)b+=r[f++],f=f%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),d-i<t)return;const v=u&&d-u;return v?Math.round(b*1e3/v):void 0}}function Qn(e,t){let r=0,n=1e3/t,s,o;const i=(u,f=Date.now())=>{r=f,s=null,o&&(clearTimeout(o),o=null),e(...u)};return[(...u)=>{const f=Date.now(),b=f-r;b>=n?i(u,f):(s=u,o||(o=setTimeout(()=>{o=null,i(s)},n-b)))},()=>s&&i(s),(...u)=>i(u)]}const Ue=(e,t,r=3)=>{let n=0;const s=Yn(50,250);return Qn(o=>{if(!o||!l.isNumber(o.loaded))return;const i=o.loaded,a=o.lengthComputable?o.total:void 0,c=Math.max(0,a!=null?Math.min(i,a):i),d=Math.max(0,c-n),u=s(d);n=Math.max(n,c);const f={loaded:c,total:a,progress:a?c/a:void 0,bytes:d,rate:u||void 0,estimated:u&&a?(a-c)/u:void 0,event:o,lengthComputable:a!=null,[t?"download":"upload"]:!0};e(f)},r)},_t=(e,t)=>{const r=e!=null;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]},Rt=(e,t=l.asap)=>(...r)=>t(()=>e(...r)),Zn=q.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,q.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(q.origin),q.navigator&&/(msie|trident)/i.test(q.navigator.userAgent)):()=>!0,es=q.hasStandardBrowserEnv?{write(e,t,r,n,s,o,i){if(typeof document>"u")return;const a=[`${e}=${encodeURIComponent(t)}`];l.isNumber(r)&&a.push(`expires=${new Date(r).toUTCString()}`),l.isString(n)&&a.push(`path=${n}`),l.isString(s)&&a.push(`domain=${s}`),o===!0&&a.push("secure"),l.isString(i)&&a.push(`SameSite=${i}`),document.cookie=a.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.split(";");for(let r=0;r<t.length;r++){const n=t[r].replace(/^\s+/,""),s=n.indexOf("=");if(s!==-1&&n.slice(0,s)===e)try{return decodeURIComponent(n.slice(s+1))}catch{return n.slice(s+1)}}return null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function ts(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function rs(e,t){if(!t)return e;let r=e.length;for(;r>0&&e.charCodeAt(r-1)===47;)r--;return e.slice(0,r)+"/"+t.replace(/^\/+/,"")}const ns=/^https?:(?!\/\/)/i;function ss(e){return e&&e.replace(/(^|&)([^=&]*=)?[^&]+/g,(t,r,n="")=>`${r}${n}${Fe}`)}function os(e){const t=e.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${Fe}@`),r=t.indexOf("#"),s=(r===-1?t:t.slice(0,r)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${Fe}`);return r===-1?s:`${s}#${ss(t.slice(r+1))}`}function At(e,t){if(typeof e=="string"){const r=ir(e);if(ns.test(r))throw new m(`Invalid URL ${JSON.stringify(os(r))}: missing "//" after protocol`,m.ERR_INVALID_URL,t)}}function ar(e,t,r,n){At(t,n);let s=!ts(t);return e&&(s||r===!1)?(At(e,n),rs(e,t)):t}const kt=e=>e instanceof U?{...e}:e,is=e=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(e).concat(Object.getOwnPropertySymbols(e).filter(t=>Object.getOwnPropertyDescriptor(e,t).enumerable)):Object.keys(e);function ue(e,t){e=e||{},t=t||{};const r=Object.create(null);Object.defineProperty(r,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function n(u,f,b,v){return l.isPlainObject(u)&&l.isPlainObject(f)?l.merge.call({caseless:v},u,f):l.isPlainObject(f)?l.merge({},f):l.isArray(f)?f.slice():f}function s(u,f,b,v){if(l.isUndefined(f)){if(!l.isUndefined(u))return n(void 0,u,b,v)}else return n(u,f,b,v)}function o(u,f){if(!l.isUndefined(f))return n(void 0,f)}function i(u,f){if(l.isUndefined(f)){if(!l.isUndefined(u))return n(void 0,u)}else return n(void 0,f)}function a(u){const f=l.hasOwnProp(t,"transitional")?t.transitional:void 0;if(!l.isUndefined(f))if(l.isPlainObject(f)){if(l.hasOwnProp(f,u))return f[u]}else return;const b=l.hasOwnProp(e,"transitional")?e.transitional:void 0;if(l.isPlainObject(b)&&l.hasOwnProp(b,u))return b[u]}function c(u,f,b){if(l.hasOwnProp(t,b))return n(u,f);if(l.hasOwnProp(e,b))return n(void 0,u)}const d={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutErrorMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,allowedSocketPaths:i,responseEncoding:i,validateStatus:c,headers:(u,f,b)=>s(kt(u),kt(f),b,!0)};return l.forEach(is({...e,...t}),function(f){if(f==="__proto__"||f==="constructor"||f==="prototype")return;const b=l.hasOwnProp(d,f)?d[f]:s,v=l.hasOwnProp(e,f)?e[f]:void 0,x=l.hasOwnProp(t,f)?t[f]:void 0,E=b(v,x,f);l.isUndefined(E)&&b!==c||(r[f]=E)}),l.hasOwnProp(t,"validateStatus")&&l.isUndefined(t.validateStatus)&&a("validateStatusUndefinedResolves")===!1&&(l.hasOwnProp(e,"validateStatus")?r.validateStatus=n(void 0,e.validateStatus):delete r.validateStatus),r}const as=["content-type","content-length"];function ls(e,t,r){if(r!=="content-only"){e.set(t);return}Object.entries(t||{}).forEach(([n,s])=>{as.includes(n.toLowerCase())&&e.set(n,s)})}const cs=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(t,r)=>String.fromCharCode(parseInt(r,16)));function lr(e){const t=ue({},e),r=b=>l.hasOwnProp(t,b)?t[b]:void 0,n=r("data");let s=r("withXSRFToken");const o=r("xsrfHeaderName"),i=r("xsrfCookieName");let a=r("headers");const c=r("auth"),d=r("baseURL"),u=r("allowAbsoluteUrls"),f=r("url");if(t.headers=a=U.from(a),t.url=Zt(ar(d,f,u,t),r("params"),r("paramsSerializer")),c){const b=l.getSafeProp(c,"username")||"",v=l.getSafeProp(c,"password")||"";try{a.set("Authorization","Basic "+btoa(b+":"+(v?cs(v):"")))}catch(x){throw m.from(x,m.ERR_BAD_OPTION_VALUE,e)}}if(l.isFormData(n)){const b=l.getSafeProp(n,"getHeaders");q.hasStandardBrowserEnv||q.hasStandardBrowserWebWorkerEnv||l.isReactNative(n)?a.setContentType(void 0):l.isFunction(b)&&ls(a,b.call(n),r("formDataHeaderPolicy"))}if(q.hasStandardBrowserEnv&&(l.isFunction(s)&&(s=s(t)),s===!0||s==null&&Zn(t.url))){const v=o&&i&&es.read(i);v&&a.set(o,v)}return t}const ds=typeof XMLHttpRequest<"u",us=ds&&function(e){return new Promise(function(r,n){const s=lr(e);let o=s.data;const i=U.from(s.headers).normalize();let{responseType:a,onUploadProgress:c,onDownloadProgress:d}=s,u,f,b,v,x,E;function w(){v&&v(),x&&x(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let p=new XMLHttpRequest;p.open(s.method.toUpperCase(),s.url,!0),p.timeout=s.timeout;function h(g){if(!p)return;if(p.status===0&&(Xe(ir(s.url))||Xe(q.origin))!=="file"&&!(p.responseURL&&p.responseURL.startsWith("file:"))){n(new m("Request aborted",m.ECONNABORTED,e,p)),w(),p=null;return}try{g?E&&E(g):x&&x()}catch(L){setTimeout(()=>{throw L})}if(!p)return;const O=U.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),k={data:!a||a==="text"||a==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:O,config:e,request:p};or(function(M){r(M),w()},function(M){n(M),w()},k),p=null}"onloadend"in p?p.onloadend=h:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.startsWith("file:"))||setTimeout(h)},p.onabort=function(){p&&(n(new m("Request aborted",m.ECONNABORTED,e,p)),w(),p=null)},p.onerror=function(O){const P=O&&O.message?O.message:"Network Error",k=new m(P,m.ERR_NETWORK,e,p);k.event=O||null,n(k),w(),p=null},p.ontimeout=function(){let O=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const P=s.transitional||at;s.timeoutErrorMessage&&(O=s.timeoutErrorMessage),n(new m(O,P.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,p)),w(),p=null},o===void 0&&i.setContentType(null),"setRequestHeader"in p&&l.forEach(Jt(i),function(O,P){p.setRequestHeader(P,O)}),l.isUndefined(s.withCredentials)||(p.withCredentials=!!s.withCredentials),a&&a!=="json"&&(p.responseType=s.responseType),d&&([b,x,E]=Ue(d,!0),p.addEventListener("progress",b)),c&&p.upload&&([f,v]=Ue(c),p.upload.addEventListener("progress",f),p.upload.addEventListener("loadend",v)),(s.cancelToken||s.signal)&&(u=g=>{p&&(n(!g||g.type?new ke(null,e,p):g),p.abort(),w(),p=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const y=Xe(s.url);if(y&&!q.protocols.includes(y)){n(new m("Unsupported protocol "+y+":",m.ERR_BAD_REQUEST,e)),w();return}p.send(o||null)})},ps=(e,t)=>{if(e=e?e.filter(Boolean):[],!t&&!e.length)return;const r=new AbortController;let n=!1;const s=function(c){if(!n){n=!0,i();const d=c instanceof Error?c:this.reason;r.abort(d instanceof m?d:new ke(d instanceof Error?d.message:d))}};let o=t&&setTimeout(()=>{o=null,s(new m(`timeout of ${t}ms exceeded`,m.ETIMEDOUT))},t);const i=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(c=>{c.unsubscribe?c.unsubscribe(s):c.removeEventListener("abort",s)}),e=null)};e.forEach(c=>{if(!n){if(c.aborted){s.call(c);return}c.addEventListener("abort",s,{once:!0})}});const{signal:a}=r;return a.unsubscribe=()=>l.asap(i),a},fs=function*(e,t){let r=e.byteLength;if(r<t){yield e;return}let n=0,s;for(;n<r;)s=n+t,yield e.slice(n,s),n=s},ms=async function*(e,t){for await(const r of hs(e))yield*fs(r,t)},hs=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:r,value:n}=await t.read();if(r)break;yield n}}finally{await t.cancel()}},Ot=(e,t,r,n)=>{const s=ms(e,t);let o=0,i,a=c=>{i||(i=!0,n&&n(c))};return new ReadableStream({async pull(c){try{const{done:d,value:u}=await s.next();if(d){a(),c.close();return}let f=u.byteLength;if(r){let b=o+=f;r(b)}c.enqueue(new Uint8Array(u))}catch(d){throw a(d),d}},cancel(c){return a(c),s.return()}},{highWaterMark:2})},Pt=e=>e>=48&&e<=57||e>=65&&e<=70||e>=97&&e<=102,cr=(e,t,r)=>t+2<r&&Pt(e.charCodeAt(t+1))&&Pt(e.charCodeAt(t+2)),Lt=e=>e<=57?e-48:(e&223)-55,bs=e=>e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||e===43||e===47||e===45||e===95,ys=e=>e===9||e===10||e===12||e===13||e===32,gs=e=>{const t=Math.floor(e/4),r=e%4;return t*3+(r===2?1:r===3?2:0)},vs=e=>{const t=e.length;let r=0;return t>0&&e.charCodeAt(t-1)===61&&(r++,t>1&&e.charCodeAt(t-2)===61&&r++),Math.floor((t-r)*3/4)},ws=e=>{const t=e.length;let r=0,n=0,s=!1;for(let o=0;o<t;o++){let i=e.charCodeAt(o);if(i===37&&cr(e,o,t)&&(i=Lt(e.charCodeAt(o+1))*16+Lt(e.charCodeAt(o+2)),o+=2),!ys(i)){if(i===61){n++;continue}if(!bs(i)||n>0){s=!0;continue}r++}}return s||n>2||n>0&&(r+n)%4!==0||r%4===1?vs(e):gs(r)},xs=(e,t)=>{if(!e||typeof e!="string"||!e.startsWith("data:"))return 0;const r=e.indexOf(",");if(r<0)return 0;const n=e.slice(5,r),s=e.slice(r+1);if(/;base64/i.test(n))return t(s);let i=0;for(let a=0,c=s.length;a<c;a++){const d=s.charCodeAt(a);if(d===37&&cr(s,a,c))i+=1,a+=2;else if(d<128)i+=1;else if(d<2048)i+=2;else if(d>=55296&&d<=56319&&a+1<c){const u=s.charCodeAt(a+1);u>=56320&&u<=57343?(i+=4,a++):i+=3}else i+=3}return i};function Ss(e){const t=typeof e=="string"?e.indexOf("#"):-1;return xs(t===-1?e:e.slice(0,t),ws)}const ct="1.20.0",Tt=64*1024,Es={cache:"default",redirect:"follow",referrer:"about:client",referrerPolicy:"",mode:"cors",integrity:"",keepalive:!1,priority:"auto",window:null},{isFunction:Le}=l,_s=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(t,r)=>String.fromCharCode(parseInt(r,16))),Ct=e=>{if(!l.isString(e))return e;try{return decodeURIComponent(e)}catch{return e}},qt=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Rs=e=>{const t=e.indexOf("://");let r=e;return t!==-1&&(r=r.slice(t+3)),r.includes("@")||r.includes(":")},As=e=>{const t=l.global!==void 0&&l.global!==null?l.global:globalThis,{ReadableStream:r,TextEncoder:n}=t;e=l.merge.call({skipUndefined:!0},{Request:t.Request,Response:t.Response},e);const{fetch:s,Request:o,Response:i}=e,a=s?Le(s):typeof fetch=="function",c=Le(o),d=Le(i);if(!a)return!1;const u=a&&Le(r),f=a&&(typeof n=="function"?(p=>h=>p.encode(h))(new n):async p=>new Uint8Array(await new o(p).arrayBuffer())),b=c&&u&&qt(()=>{let p=!1;const h=new o(q.origin,{body:new r,method:"POST",get duplex(){return p=!0,"half"}}),y=h.headers.has("Content-Type");return h.body!=null&&h.body.cancel(),p&&!y}),v=d&&u&&qt(()=>l.isReadableStream(new i("").body)),x={stream:v&&(p=>p.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(p=>{!x[p]&&(x[p]=(h,y)=>{let g=h&&h[p];if(g)return g.call(h);throw new m(`Response type '${p}' is not supported`,m.ERR_NOT_SUPPORT,y)})});const E=async p=>{if(p==null)return 0;if(l.isBlob(p))return p.size;if(l.isSpecCompliantForm(p))return(await new o(q.origin,{method:"POST",body:p}).arrayBuffer()).byteLength;if(l.isArrayBufferView(p)||l.isArrayBuffer(p))return p.byteLength;if(l.isURLSearchParams(p)&&(p=p+""),l.isString(p))return(await f(p)).byteLength},w=async(p,h)=>{const y=l.toFiniteNumber(p.getContentLength());return y??E(h)};return async p=>{let{url:h,method:y,data:g,signal:O,cancelToken:P,timeout:k,onDownloadProgress:L,onUploadProgress:M,responseType:$,headers:C,withCredentials:V="same-origin",fetchOptions:X,maxContentLength:J,maxBodyLength:Oe,maxRedirects:vr}=lr(p);const be=l.isNumber(J)&&J>-1,ze=l.isNumber(Oe)&&Oe>-1,wr=A=>l.hasOwnProp(p,A)?p[A]:void 0;let ut=s||fetch;$=$?($+"").toLowerCase():"text";let ee=ps([O,P&&P.toAbortSignal()],k),B=null;const se=ee&&ee.unsubscribe&&(()=>{ee.unsubscribe()});let pe,ye=null;const pt=()=>new m("Request body larger than maxBodyLength limit",m.ERR_BAD_REQUEST,p,B);try{let A;const I=wr("auth");if(I){const S=l.getSafeProp(I,"username")||"",N=l.getSafeProp(I,"password")||"";A={username:S,password:N}}if(Rs(h)){const S=new URL(h,q.origin);if(!A&&(S.username||S.password)){const N=Ct(S.username),te=Ct(S.password);A={username:N,password:te}}(S.username||S.password)&&(S.username="",S.password="",h=S.href)}if(A&&(C.delete("authorization"),C.set("Authorization","Basic "+btoa(_s((A.username||"")+":"+(A.password||""))))),be&&typeof h=="string"&&h.startsWith("data:")&&Ss(h)>J)throw new m("maxContentLength size of "+J+" exceeded",m.ERR_BAD_RESPONSE,p,B);if(ze&&y!=="get"&&y!=="head"){const S=await E(g);if(typeof S=="number"&&isFinite(S)&&(pe=S,S>Oe))throw pt()}const Pe=ze&&(l.isReadableStream(g)||l.isStream(g)),ft=(S,N,te)=>Ot(S,Tt,oe=>{if(ze&&oe>Oe)throw ye=pt();N&&N(oe)},te);if(b&&y!=="get"&&y!=="head"&&(M||Pe)){if(pe=pe??await w(C,g),pe!==0||Pe){let S=new o(h,{method:"POST",body:g,duplex:"half"}),N;if(l.isFormData(g)&&(N=S.headers.get("content-type"))&&C.setContentType(N),S.body){const[te,oe]=M&&_t(pe,Ue(Rt(M)))||[];g=ft(S.body,te,oe)}}}else if(Pe&&!c&&u&&y!=="get"&&y!=="head")g=ft(g);else if(Pe&&c&&!b&&y!=="get"&&y!=="head")throw new m("Stream request bodies are not supported by the current fetch implementation",m.ERR_NOT_SUPPORT,p,B);l.isString(V)||(V=V?"include":"omit");const xr=c&&"credentials"in o.prototype;if(l.isFormData(g)){const S=C.getContentType();S&&/^multipart\/form-data/i.test(S)&&!/boundary=/i.test(S)&&C.delete("content-type")}C.set("User-Agent","axios/"+ct,!1);const K=X==null?X:Object.assign(Object.create(null),X);K&&(delete K.body,delete K.headers,delete K.method,delete K.signal,delete K.duplex,delete K.credentials);const Y=Object.assign(Object.create(null),K,{signal:ee,method:y.toUpperCase(),headers:Jt(C.normalize()),body:g,duplex:"half",credentials:xr?V:void 0});c&&(l.forEach(Es,(S,N)=>{Y[N]===void 0&&(Y[N]=S)}),Y.signal===void 0&&(Y.signal=null),Y.body===void 0&&(Y.body=null)),vr===0&&(Y.redirect="manual",K&&(K.redirect="manual")),B=c&&new o(h,Y);let Q=await(c?ut(B,K):ut(h,Y));const mt=U.from(Q.headers);if(be){const S=l.toFiniteNumber(mt.getContentLength());if(S!=null&&S>J)throw new m("maxContentLength size of "+J+" exceeded",m.ERR_BAD_RESPONSE,p,B)}const Ve=v&&($==="stream"||$==="response");if(v&&Q.body&&(L||be||Ve&&se)){const S={};["status","statusText","headers"].forEach(ge=>{S[ge]=Q[ge]});const N=l.toFiniteNumber(mt.getContentLength()),[te,oe]=L&&_t(N,Ue(Rt(L),!0))||[];let ht=0;const Sr=ge=>{if(be&&(ht=ge,ht>J))throw new m("maxContentLength size of "+J+" exceeded",m.ERR_BAD_RESPONSE,p,B);te&&te(ge)};Q=new i(Ot(Q.body,Tt,Sr,()=>{oe&&oe(),se&&se()}),S)}$=$||"text";let Z=await x[l.findKey(x,$)||"text"](Q,p);if(be&&!v&&!Ve){let S;if(Z!=null&&(typeof Z.byteLength=="number"?S=Z.byteLength:typeof Z.size=="number"?S=Z.size:typeof Z=="string"&&(S=typeof n=="function"?new n().encode(Z).byteLength:Z.length)),typeof S=="number"&&S>J)throw new m("maxContentLength size of "+J+" exceeded",m.ERR_BAD_RESPONSE,p,B)}return!Ve&&se&&se(),await new Promise((S,N)=>{or(S,N,{data:Z,headers:U.from(Q.headers),status:Q.status,statusText:Q.statusText,config:p,request:B})})}catch(A){if(se&&se(),ee&&ee.aborted&&ee.reason instanceof m){const I=ee.reason;throw I.config=p,B&&(I.request=B),A!==I&&Object.defineProperty(I,"cause",{__proto__:null,value:A,writable:!0,enumerable:!1,configurable:!0}),I}if(ye)throw B&&!ye.request&&(ye.request=B),ye;if(A instanceof m)throw B&&!A.request&&(A.request=B),A;if(A&&A.name==="TypeError"&&/Load failed|fetch/i.test(A.message)){const I=new m("Network Error",m.ERR_NETWORK,p,B,A&&A.response);throw Object.defineProperty(I,"cause",{__proto__:null,value:A.cause||A,writable:!0,enumerable:!1,configurable:!0}),I}throw m.from(A,A&&A.code,p,B,A&&A.response)}}},ks=new Map,dr=e=>{let t=e&&e.env||{};const{fetch:r,Request:n,Response:s}=t,o=[n,s,r];let i=o.length,a=i,c,d,u=ks;for(;a--;)c=o[a],d=u.get(c),d===void 0&&u.set(c,d=a?new Map:As(t)),u=d;return d};dr();const dt={http:Bn,xhr:us,fetch:{get:dr}};l.forEach(dt,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{__proto__:null,value:t})}catch{}Object.defineProperty(e,"adapterName",{__proto__:null,value:t})}});const Bt=e=>`- ${e}`,Os=e=>l.isFunction(e)||e===null||e===!1;function Ps(e,t){e=l.isArray(e)?e:[e];const{length:r}=e;let n,s;const o={};for(let i=0;i<r;i++){n=e[i];let a;if(s=n,!Os(n)&&(s=dt[(a=String(n)).toLowerCase()],s===void 0))throw new m(`Unknown adapter '${a}'`);if(s&&(l.isFunction(s)||(s=s.get(t))))break;o[a||"#"+i]=s}if(!s){const i=Object.entries(o).map(([c,d])=>`adapter ${c} `+(d===!1?"is not supported by the environment":"is not available in the build"));let a=r?i.length>1?`since :
`+i.map(Bt).join(`
`):" "+Bt(i[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+a,m.ERR_NOT_SUPPORT)}return s}const ur={getAdapter:Ps,adapters:dt};function Ye(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ke(null,e)}function Qe(e){const t=l.toSafeFlatObject(e);return Ye(t),t.headers=U.from(l.getSafeProp(t,"headers")),t.data=Ge.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),ur.getAdapter(t.adapter||Ae.adapter,t)(t).then(function(s){Ye(t),t.response=s;try{s.data=Ge.call(t,t.transformResponse,s)}finally{delete t.response}return s.headers=U.from(s.headers),s},function(s){if(!sr(s)&&(Ye(t),s&&s.response)){t.response=s.response;try{s.response.data=Ge.call(t,t.transformResponse,s.response)}finally{delete t.response}s.response.headers=U.from(s.response.headers)}return Promise.reject(s)})}const He={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{He[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const Dt={};He.transitional=function(t,r,n){function s(o,i){return"[Axios v"+ct+"] Transitional option '"+o+"'"+i+(n?". "+n:"")}return(o,i,a)=>{if(t===!1)throw new m(s(i," has been removed"+(r?" in "+r:"")),m.ERR_DEPRECATED);return r&&!Dt[i]&&(Dt[i]=!0,console.warn(s(i," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(o,i,a):!0}};He.spelling=function(t){return(r,n)=>(console.warn(`${n} is likely a misspelling of ${t}`),!0)};function Ls(e,t,r){if(typeof e!="object"||e===null)throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let s=n.length;for(;s-- >0;){const o=n[s],i=Object.prototype.hasOwnProperty.call(t,o)?t[o]:void 0;if(i){const a=e[o],c=a===void 0||i(a,o,e);if(c!==!0)throw new m("option "+o+" must be "+c,m.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const Be={assertOptions:Ls,validators:He},F=Be.validators;let le=class{constructor(t){this.defaults=t||{},this.interceptors={request:new St,response:new St}}async request(t,r){try{return await this._request(t,r)}catch(n){if(n instanceof Error)try{let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const o=s.stack;let i="";if(typeof o=="string"){const a=o.indexOf(`
`);i=a===-1?"":o.slice(a+1)}if(!n.stack)n.stack=i;else if(i){const a=i.indexOf(`
`),c=a===-1?-1:i.indexOf(`
`,a+1),d=c===-1?"":i.slice(c+1);String(n.stack).endsWith(d)||(n.stack+=`
`+i)}}catch{}throw n}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=ue(this.defaults,r);const{transitional:n,paramsSerializer:s,headers:o}=r;n!==void 0&&Be.assertOptions(n,{silentJSONParsing:F.transitional(F.boolean),forcedJSONParsing:F.transitional(F.boolean),clarifyTimeoutError:F.transitional(F.boolean),legacyInterceptorReqResOrdering:F.transitional(F.boolean),advertiseZstdAcceptEncoding:F.transitional(F.boolean),validateStatusUndefinedResolves:F.transitional(F.boolean)},!1),s!=null&&(l.isFunction(s)?r.paramsSerializer={serialize:s}:Be.assertOptions(s,{encode:F.function,serialize:F.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),Be.assertOptions(r,{baseUrl:F.spelling("baseURL"),withXsrfToken:F.spelling("withXSRFToken")},!0),r.method=(l.getSafeProp(r,"method")||l.getSafeProp(this.defaults,"method")||"get").toLowerCase();let i=o&&l.merge(o.common,o[r.method]);o&&l.forEach(nr.concat("common"),x=>{delete o[x]}),r.headers=U.concat(i,o);const a=[];let c=!0;this.interceptors.request.forEach(function(E){if(typeof E.runWhen=="function"&&E.runWhen(r)===!1)return;c=c&&E.synchronous;const w=r.transitional||at;w&&w.legacyInterceptorReqResOrdering?a.unshift(E.fulfilled,E.rejected):a.push(E.fulfilled,E.rejected)});const d=[];this.interceptors.response.forEach(function(E){d.push(E.fulfilled,E.rejected)});let u,f=0,b;if(!c){const x=[Qe.bind(this),void 0];for(x.unshift(...a),x.push(...d),b=x.length,u=Promise.resolve(r);f<b;)u=u.then(x[f++],x[f++]);return u}b=a.length;let v=r;for(;f<b;){const x=a[f++],E=a[f++];try{v=x?x(v):v}catch(w){if(!E){u=Promise.reject(w);break}try{const p=E.call(this,w);l.isThenable(p)&&(u=Promise.resolve(p).then(()=>Qe.call(this,v)))}catch(p){u=Promise.reject(p)}break}}if(!u)try{u=Qe.call(this,v)}catch(x){u=Promise.reject(x)}for(f=0,b=d.length;f<b;)u=u.then(d[f++],d[f++]);return u}getUri(t){t=ue(this.defaults,t);const r=ar(t.baseURL,t.url,t.allowAbsoluteUrls,t);return Zt(r,t.params,t.paramsSerializer)}};l.forEach(["delete","get","head","options"],function(t){le.prototype[t]=function(r,n){return this.request(ue(n||{},{method:t,url:r,data:n&&l.hasOwnProp(n,"data")?n.data:void 0}))}});l.forEach(["post","put","patch","query"],function(t){function r(n){return function(o,i,a){return this.request(ue(a||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}le.prototype[t]=r(),t!=="query"&&(le.prototype[t+"Form"]=r(!0))});let Ts=class pr{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(o){r=o});const n=this;this.promise.then(s=>{if(!n._listeners)return;let o=n._listeners.length;for(;o-- >0;)n._listeners[o](s);n._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(a=>{n.subscribe(a),o=a}).then(s);return i.cancel=function(){n.unsubscribe(o)},i},t(function(o,i,a){n.reason||(n.reason=new ke(o,i,a),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const t=new AbortController,r=n=>{t.abort(n)};return this.subscribe(r),t.signal.unsubscribe=()=>this.unsubscribe(r),t.signal}static source(){let t;return{token:new pr(function(s){t=s}),cancel:t}}};function Cs(e){return function(r){return e.apply(null,r)}}function qs(e){return l.isObject(e)&&e.isAxiosError===!0}const De={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,ContentTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,UnprocessableContent:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(De).forEach(([e,t])=>{De[t]===void 0&&(De[t]=e)});function fr(e){const t=new le(e),r=Nt(le.prototype.request,t);return l.extend(r,le.prototype,t,{allOwnKeys:!0}),l.extend(r,t,null,{allOwnKeys:!0}),r.create=function(s){return fr(ue(e,s))},r}const T=fr(Ae);T.Axios=le;T.CanceledError=ke;T.CancelToken=Ts;T.isCancel=sr;T.VERSION=ct;T.toFormData=Ie;T.AxiosError=m;T.Cancel=T.CanceledError;T.all=function(t){return Promise.all(t)};T.spread=Cs;T.isAxiosError=qs;T.mergeConfig=ue;T.AxiosHeaders=U;T.formToJSON=e=>rr(l.isHTMLForm(e)?new FormData(e):e);T.getAdapter=ur.getAdapter;T.HttpStatusCode=De;T.default=T;const{Axios:zs,AxiosError:Vs,CanceledError:Ks,isCancel:Ws,CancelToken:Js,VERSION:Gs,all:Xs,Cancel:Ys,isAxiosError:Qs,spread:Zs,toFormData:eo,AxiosHeaders:to,HttpStatusCode:ro,formToJSON:no,getAdapter:so,mergeConfig:oo,create:io}=T;window.axios=T;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";const D=T.create({baseURL:"/api",headers:{Accept:"application/json","Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"}});D.interceptors.request.use(e=>{const t=localStorage.getItem("habeshahomes_token");return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e));D.interceptors.response.use(e=>e,e=>{e.response&&e.response.status===401&&(localStorage.removeItem("habeshahomes_token"),localStorage.removeItem("habeshahomes_user"),window.dispatchEvent(new CustomEvent("auth:updated",{detail:{user:null}})));let t="An unexpected error occurred.";if(e.response&&e.response.data){if(e.response.data.message)t=e.response.data.message;else if(e.response.data.errors){const r=Object.keys(e.response.data.errors)[0];t=e.response.data.errors[r][0]}}return e.friendlyMessage=t,Promise.reject(e)});class Bs{constructor(){this.token=localStorage.getItem("habeshahomes_token")||null,this.user=JSON.parse(localStorage.getItem("habeshahomes_user")||"null"),this.currency=localStorage.getItem("habeshahomes_currency")||"ETB",this.listeners=[]}subscribe(t){return this.listeners.push(t),()=>{this.listeners=this.listeners.filter(r=>r!==t)}}notify(){this.listeners.forEach(t=>t(this))}isLoggedIn(){return!!this.token&&!!this.user}isAgent(){return this.user&&(this.user.user_type==="agent"||this.user.user_type==="landlord"||this.user.user_type==="admin")}isAdmin(){return this.user&&this.user.user_type==="admin"}async login(t,r){const n=await D.post("/auth/login",{email:t,password:r,device_name:"web_browser"});return this.token=n.data.token,this.user=n.data.user,localStorage.setItem("habeshahomes_token",this.token),localStorage.setItem("habeshahomes_user",JSON.stringify(this.user)),this.notify(),n.data}async register(t){const r=await D.post("/auth/register",{...t,device_name:"web_browser"});return this.token=r.data.token,this.user=r.data.user,localStorage.setItem("habeshahomes_token",this.token),localStorage.setItem("habeshahomes_user",JSON.stringify(this.user)),this.notify(),r.data}async logout(){try{this.token&&await D.post("/auth/logout")}catch(t){console.warn("Logout API warning:",t)}finally{this.token=null,this.user=null,localStorage.removeItem("habeshahomes_token"),localStorage.removeItem("habeshahomes_user"),this.notify()}}async fetchMe(){if(!this.token)return null;try{const t=await D.get("/auth/me");return this.user=t.data.user,localStorage.setItem("habeshahomes_user",JSON.stringify(this.user)),this.notify(),this.user}catch{return this.token=null,this.user=null,localStorage.removeItem("habeshahomes_token"),localStorage.removeItem("habeshahomes_user"),this.notify(),null}}setCurrency(t){this.currency=t,localStorage.setItem("habeshahomes_currency",t),this.notify()}formatPrice(t,r="ETB"){const n=parseFloat(t)||0,s=125;if(this.currency==="USD"){const o=r==="USD"?n:n/s;return`$${Math.round(o).toLocaleString()}`}else{const o=r==="ETB"?n:n*s;return`${Math.round(o).toLocaleString()} ETB`}}}const R=new Bs;function W(e,t="info",r=4e3){let n=document.getElementById("toast-container");n||(n=document.createElement("div"),n.id="toast-container",document.body.appendChild(n));const s=document.createElement("div");s.className=`toast toast-${t}`;let o="ℹ️";t==="success"&&(o="✓"),t==="error"&&(o="✕"),s.innerHTML=`
        <span style="font-weight: 700; color: ${t==="success"?"var(--emerald-500)":t==="error"?"var(--coral-500)":"var(--indigo-500)"};">${o}</span>
        <div style="flex: 1;">${e}</div>
    `,n.appendChild(s),setTimeout(()=>{s.style.opacity="0",s.style.transform="translateX(100%)",s.style.transition="all 0.3s ease",setTimeout(()=>s.remove(),300)},r)}let _=null;function mr(){if(document.getElementById("auth-modal"))return;_=document.createElement("div"),_.id="auth-modal",_.className="modal-overlay",_.innerHTML=`
        <div class="modal-content">
            <div class="modal-header">
                <h3 id="auth-modal-title">Sign In to HabeshaHomes</h3>
                <button class="modal-close" id="auth-close-btn">&times;</button>
            </div>

            <div class="auth-tabs">
                <div class="auth-tab active" data-tab="login">Sign In</div>
                <div class="auth-tab" data-tab="register">Create Account</div>
            </div>

            <div id="auth-error-box" style="display: none; background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.3); color: #fca5a5; padding: 10px 14px; border-radius: var(--radius-md); font-size: 0.85rem; margin-bottom: 16px;"></div>

            <!-- Login Form -->
            <form id="form-login" class="flex flex-col gap-4">
                <div class="form-group">
                    <label class="form-label">Email Address</label>
                    <input type="email" id="login-email" class="form-control" required placeholder="name@example.com">
                </div>
                <div class="form-group">
                    <label class="form-label">Password</label>
                    <input type="password" id="login-password" class="form-control" required placeholder="••••••••">
                </div>
                <button type="submit" class="btn btn-primary w-full mt-4" id="login-submit-btn">
                    Sign In
                </button>
            </form>

            <!-- Register Form -->
            <form id="form-register" class="flex flex-col gap-4" style="display: none;">
                <div class="form-group">
                    <label class="form-label">Full Name</label>
                    <input type="text" id="reg-name" class="form-control" required placeholder="Abebe Kebede">
                </div>
                <div class="form-group">
                    <label class="form-label">Email Address</label>
                    <input type="email" id="reg-email" class="form-control" required placeholder="name@example.com">
                </div>
                <div class="form-group">
                    <label class="form-label">Phone Number (Ethiopia / Intl)</label>
                    <input type="tel" id="reg-phone" class="form-control" placeholder="+251911234567">
                </div>
                <div class="form-group">
                    <label class="form-label">I want to</label>
                    <select id="reg-type" class="form-control">
                        <option value="renter">Rent or Book Stays</option>
                        <option value="buyer">Buy Properties</option>
                        <option value="landlord">List My Properties (Landlord)</option>
                        <option value="agent">Work as Verified Agent</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Password</label>
                    <input type="password" id="reg-password" class="form-control" required minlength="8" placeholder="At least 8 characters">
                </div>
                <div class="form-group">
                    <label class="form-label">Confirm Password</label>
                    <input type="password" id="reg-password-confirm" class="form-control" required minlength="8" placeholder="Repeat password">
                </div>
                <button type="submit" class="btn btn-primary w-full mt-4" id="reg-submit-btn">
                    Create Account
                </button>
            </form>
        </div>
    `,document.body.appendChild(_),_.querySelector("#auth-close-btn").addEventListener("click",Te),_.addEventListener("click",t=>{t.target===_&&Te()}),_.querySelectorAll(".auth-tab").forEach(t=>{t.addEventListener("click",()=>{const r=t.getAttribute("data-tab");hr(r)})}),_.querySelector("#form-login").addEventListener("submit",async t=>{t.preventDefault();const r=_.querySelector("#login-submit-btn"),n=_.querySelector("#login-email").value.trim(),s=_.querySelector("#login-password").value;ie(null),r.disabled=!0,r.textContent="Signing in...";try{await R.login(n,s),W("Signed in successfully!","success"),Te()}catch(o){ie(o.friendlyMessage||"Failed to sign in. Please verify your credentials.")}finally{r.disabled=!1,r.textContent="Sign In"}}),_.querySelector("#form-register").addEventListener("submit",async t=>{t.preventDefault();const r=_.querySelector("#reg-submit-btn"),n=_.querySelector("#reg-name").value.trim(),s=_.querySelector("#reg-email").value.trim(),o=_.querySelector("#reg-phone").value.trim(),i=_.querySelector("#reg-type").value,a=_.querySelector("#reg-password").value,c=_.querySelector("#reg-password-confirm").value;if(a!==c){ie("Passwords do not match.");return}ie(null),r.disabled=!0,r.textContent="Creating account...";try{await R.register({name:n,email:s,phone:o,user_type:i,password:a,password_confirmation:c}),W("Account created successfully! Welcome to HabeshaHomes.","success"),Te()}catch(d){ie(d.friendlyMessage||"Registration failed. Please check your details.")}finally{r.disabled=!1,r.textContent="Create Account"}})}function ie(e){const t=_.querySelector("#auth-error-box");e?(t.style.display="block",t.textContent=e):(t.style.display="none",t.textContent="")}function Me(e="login",t=null){mr(),hr(e),t&&_.querySelector("#reg-type")&&(_.querySelector("#reg-type").value=t),_.classList.add("open")}function Te(){_&&(_.classList.remove("open"),ie(null))}function hr(e){if(!_)return;const t=_.querySelectorAll(".auth-tab"),r=_.querySelector("#form-login"),n=_.querySelector("#form-register"),s=_.querySelector("#auth-modal-title");t.forEach(o=>o.classList.remove("active")),_.querySelector(`[data-tab="${e}"]`).classList.add("active"),e==="login"?(r.style.display="flex",n.style.display="none",s.textContent="Sign In to HabeshaHomes"):(r.style.display="none",n.style.display="flex",s.textContent="Create HabeshaHomes Account"),ie(null)}function br(e){const t=e.featured_image||(e.images&&e.images.length>0?e.images[0].image_url:null)||"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80";let r="badge-rent",n="For Rent";e.listing_type==="holiday_let"?(r="badge-holiday",n="Holiday Stay"):e.listing_type==="sale"&&(r="badge-sale",n="For Sale");const s=R.formatPrice(e.price,e.currency||"ETB"),o=e.listing_type==="holiday_let"?"/ night":e.listing_type==="rent"?"/ month":"";return`
        <div class="card-property" data-id="${e.id}">
            <div class="card-media">
                <img src="${t}" alt="${e.title}" loading="lazy">
                <div class="card-badge-top">
                    <span class="badge ${r}">${n}</span>
                    ${e.is_featured?'<span class="badge" style="background: rgba(245, 158, 11, 0.2); color: var(--gold-500); border: 1px solid var(--border-gold); margin-left: 4px;">Featured</span>':""}
                </div>
                <div class="card-price-overlay">
                    <span class="card-price">${s}</span>
                    <span style="font-size: 0.75rem; color: var(--text-secondary);">${o}</span>
                </div>
            </div>
            <div class="card-body">
                <h3 class="card-title" title="${e.title}">${e.title}</h3>
                <div class="card-location">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--emerald-500);">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>${e.sub_city?e.sub_city+", ":""}${e.city}</span>
                </div>
                <div class="card-specs">
                    ${e.bedrooms?`
                        <div class="spec-item">
                            <span>🛏️</span>
                            <span>${e.bedrooms} Beds</span>
                        </div>
                    `:""}
                    ${e.bathrooms?`
                        <div class="spec-item">
                            <span>🚿</span>
                            <span>${e.bathrooms} Baths</span>
                        </div>
                    `:""}
                    ${e.square_meters?`
                        <div class="spec-item">
                            <span>📐</span>
                            <span>${e.square_meters} m²</span>
                        </div>
                    `:""}
                </div>
            </div>
        </div>
    `}async function Ds(e){e.innerHTML=`
        <!-- Hero Section -->
        <section class="hero">
            <div class="container">
                <div class="hero-tag">
                    <span>✨</span> Ethiopia's Premier Dual-Mode Real Estate Network
                </div>
                <h1 class="hero-title">
                    Discover Luxury Stays & Prime Real Estate in <span class="gradient-text">Addis Ababa & Beyond</span>
                </h1>
                <p class="hero-subtitle">
                    Book verified short-term holiday stays or secure long-term residences with escrow-backed local payments via TeleBirr, Chapa & CBE.
                </p>

                <!-- Search Widget -->
                <div class="search-widget">
                    <div class="search-tabs">
                        <button class="search-tab active" data-type="">All Properties</button>
                        <button class="search-tab" data-type="holiday_let">Holiday Stays</button>
                        <button class="search-tab" data-type="rent">Long-term Rent</button>
                        <button class="search-tab" data-type="sale">For Sale</button>
                    </div>

                    <form id="hero-search-form" class="search-fields">
                        <div class="form-group">
                            <label class="form-label">Sub-City / Area</label>
                            <select id="hero-subcity" class="form-control">
                                <option value="">All Addis Ababa</option>
                                <option value="Bole">Bole (Atlas, Rwanda, Medhanialem)</option>
                                <option value="Kirkos">Kirkos (Kazanchis, Meskel Sq)</option>
                                <option value="Yeka">Yeka (CMC, Meganagna)</option>
                                <option value="Arada">Arada (Piazza, 4 Kilo)</option>
                                <option value="Lideta">Lideta (Balcha, Mexico)</option>
                                <option value="Nifas Silk-Lafto">Nifas Silk-Lafto (Bisrate Gabriel, Jemo)</option>
                                <option value="Hawassa">Hawassa City</option>
                                <option value="Bahir Dar">Bahir Dar</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label class="form-label">Property Type</label>
                            <select id="hero-proptype" class="form-control">
                                <option value="">Any Type</option>
                                <option value="apartment">Modern Apartment</option>
                                <option value="villa">Luxury Villa / House</option>
                                <option value="condo">Condominium</option>
                                <option value="commercial">Commercial Space</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label class="form-label">Min Price</label>
                            <input type="number" id="hero-minprice" class="form-control" placeholder="Min">
                        </div>

                        <div class="form-group">
                            <label class="form-label">Max Price</label>
                            <input type="number" id="hero-maxprice" class="form-control" placeholder="Max">
                        </div>

                        <button type="submit" class="btn btn-primary btn-lg" style="height: 44px; margin-top: 22px;">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                            <span>Search</span>
                        </button>
                    </form>
                </div>
            </div>
        </section>

        <!-- Featured Section -->
        <section style="padding: 60px 0;">
            <div class="container">
                <div class="flex justify-between items-center mb-6">
                    <div>
                        <h2>Featured Verified Properties</h2>
                        <p>Curated luxury listings inspected by our local architectural specialists.</p>
                    </div>
                    <a href="/properties" class="btn btn-outline btn-sm" data-link>View All Properties →</a>
                </div>

                <div id="featured-listings-grid" class="grid grid-3">
                    <div style="grid-column: 1 / -1; padding: 40px; text-align: center; color: var(--text-muted);">
                        Loading curated residences...
                    </div>
                </div>
            </div>
        </section>

        <!-- Neighborhood Showcase -->
        <section style="padding: 60px 0; background: var(--bg-surface); border-top: 1px solid var(--border-subtle); border-bottom: 1px solid var(--border-subtle);">
            <div class="container">
                <div class="text-center mb-6">
                    <h2>Explore Addis Ababa's Prime Neighborhoods</h2>
                    <p>Find the right community for lifestyle, business hubs, and international schools.</p>
                </div>

                <div class="grid grid-4 mt-6">
                    <div class="card-property" data-filter-subcity="Bole" style="height: 220px; position: relative; overflow: hidden; border-radius: var(--radius-lg);">
                        <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80" style="width: 100%; height: 100%; object-fit: cover;">
                        <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,14,23,0.95), transparent 60%); display: flex; flex-direction: column; justify-content: flex-end; padding: 20px;">
                            <h3 style="color: #fff; font-size: 1.2rem;">Bole District</h3>
                            <p style="font-size: 0.8rem; color: var(--emerald-500);">Restaurants, Malls & Airport</p>
                        </div>
                    </div>

                    <div class="card-property" data-filter-subcity="Kirkos" style="height: 220px; position: relative; overflow: hidden; border-radius: var(--radius-lg);">
                        <img src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=600&q=80" style="width: 100%; height: 100%; object-fit: cover;">
                        <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,14,23,0.95), transparent 60%); display: flex; flex-direction: column; justify-content: flex-end; padding: 20px;">
                            <h3 style="color: #fff; font-size: 1.2rem;">Kazanchis</h3>
                            <p style="font-size: 0.8rem; color: var(--gold-500);">UN ECA, Hotels & Embassies</p>
                        </div>
                    </div>

                    <div class="card-property" data-filter-subcity="Old Airport" style="height: 220px; position: relative; overflow: hidden; border-radius: var(--radius-lg);">
                        <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80" style="width: 100%; height: 100%; object-fit: cover;">
                        <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,14,23,0.95), transparent 60%); display: flex; flex-direction: column; justify-content: flex-end; padding: 20px;">
                            <h3 style="color: #fff; font-size: 1.2rem;">Old Airport & Sarbet</h3>
                            <p style="font-size: 0.8rem; color: var(--emerald-500);">Luxury Villas & ICS School</p>
                        </div>
                    </div>

                    <div class="card-property" data-filter-subcity="Yeka" style="height: 220px; position: relative; overflow: hidden; border-radius: var(--radius-lg);">
                        <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80" style="width: 100%; height: 100%; object-fit: cover;">
                        <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,14,23,0.95), transparent 60%); display: flex; flex-direction: column; justify-content: flex-end; padding: 20px;">
                            <h3 style="color: #fff; font-size: 1.2rem;">CMC & Yeka</h3>
                            <p style="font-size: 0.8rem; color: var(--indigo-500);">Quiet Gated Communities</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Value Proposition -->
        <section style="padding: 70px 0;">
            <div class="container">
                <div class="grid grid-3">
                    <div class="detail-card text-center">
                        <div style="font-size: 2.2rem; margin-bottom: 12px;">🛡️</div>
                        <h3 class="mb-2">Escrow-Backed Payments</h3>
                        <p>Funds are secured safely until check-in or lease agreement verification via Chapa and TeleBirr.</p>
                    </div>
                    <div class="detail-card text-center">
                        <div style="font-size: 2.2rem; margin-bottom: 12px;">📑</div>
                        <h3 class="mb-2">100% Verified Titles</h3>
                        <p>Every long-term listing and sale contract has verified ownership documents to protect buyers.</p>
                    </div>
                    <div class="detail-card text-center">
                        <div style="font-size: 2.2rem; margin-bottom: 12px;">⚡</div>
                        <h3 class="mb-2">Instant Stays & Concierge</h3>
                        <p>Holiday lets come furnished with high-speed WiFi, backup power generator, and water reservoirs.</p>
                    </div>
                </div>
            </div>
        </section>
    `;let t="";const r=e.querySelectorAll(".search-tab");r.forEach(o=>{o.addEventListener("click",()=>{r.forEach(i=>i.classList.remove("active")),o.classList.add("active"),t=o.getAttribute("data-type")})}),e.querySelector("#hero-search-form").addEventListener("submit",o=>{o.preventDefault();const i=e.querySelector("#hero-subcity").value,a=e.querySelector("#hero-proptype").value,c=e.querySelector("#hero-minprice").value,d=e.querySelector("#hero-maxprice").value,u=new URLSearchParams;t&&u.set("listing_type",t),i&&u.set("sub_city",i),a&&u.set("property_type",a),c&&u.set("min_price",c),d&&u.set("max_price",d),re(`/properties?${u.toString()}`)}),e.querySelectorAll("[data-filter-subcity]").forEach(o=>{o.addEventListener("click",()=>{const i=o.getAttribute("data-filter-subcity");re(`/properties?sub_city=${encodeURIComponent(i)}`)})});const s=e.querySelector("#featured-listings-grid");try{const i=(await D.get("/properties?featured=1&per_page=6")).data.data||[];i.length===0?s.innerHTML=`
                <div style="grid-column: 1 / -1; padding: 30px; text-align: center; color: var(--text-muted);">
                    No featured properties currently active. Explore all properties below.
                </div>
            `:(s.innerHTML=i.map(a=>br(a)).join(""),s.querySelectorAll(".card-property").forEach(a=>{a.addEventListener("click",()=>{const c=a.getAttribute("data-id");re(`/properties/${c}`)})}))}catch{s.innerHTML=`
            <div style="grid-column: 1 / -1; padding: 20px; text-align: center; color: var(--coral-500);">
                Could not load featured properties. Please try again.
            </div>
        `}}async function $s(e,t={}){const r=new URLSearchParams(window.location.search);e.innerHTML=`
        <div class="container" style="padding-top: 40px; padding-bottom: 80px;">
            <div class="flex justify-between items-center mb-6 flex-wrap gap-4">
                <div>
                    <h1>Explore Properties</h1>
                    <p id="results-count-text">Finding premier properties across Ethiopia...</p>
                </div>
                <div class="flex items-center gap-3">
                    <label class="form-label" style="margin: 0;">Sort By:</label>
                    <select id="sort-selector" class="form-control" style="width: auto; padding: 6px 32px 6px 12px;">
                        <option value="created_at:desc">Newest Added</option>
                        <option value="price:asc">Price: Low to High</option>
                        <option value="price:desc">Price: High to Low</option>
                        <option value="square_meters:desc">Largest Area</option>
                    </select>
                </div>
            </div>

            <div style="display: grid; grid-template-columns: 280px 1fr; gap: 32px;" class="properties-layout">
                <!-- Sidebar Filters -->
                <aside class="detail-card" style="height: fit-content; padding: 24px;">
                    <div class="flex justify-between items-center mb-4">
                        <h4 style="font-size: 1.1rem;">Filters</h4>
                        <button id="btn-reset-filters" class="btn btn-outline btn-sm" style="padding: 2px 8px; font-size: 0.75rem;">Reset</button>
                    </div>

                    <form id="filter-form" class="flex flex-col gap-4">
                        <div class="form-group">
                            <label class="form-label">Keyword / Title</label>
                            <input type="text" id="filter-q" class="form-control" placeholder="e.g. Bole Atlas penthouse" value="${r.get("q")||""}">
                        </div>

                        <div class="form-group">
                            <label class="form-label">Listing Type</label>
                            <select id="filter-listing-type" class="form-control">
                                <option value="">All Categories</option>
                                <option value="holiday_let" ${r.get("listing_type")==="holiday_let"?"selected":""}>Holiday Stay (Nightly)</option>
                                <option value="rent" ${r.get("listing_type")==="rent"?"selected":""}>Long-term Rent</option>
                                <option value="sale" ${r.get("listing_type")==="sale"?"selected":""}>For Sale</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label class="form-label">Sub-City</label>
                            <select id="filter-subcity" class="form-control">
                                <option value="">All Sub-Cities</option>
                                <option value="Bole" ${r.get("sub_city")==="Bole"?"selected":""}>Bole</option>
                                <option value="Kirkos" ${r.get("sub_city")==="Kirkos"?"selected":""}>Kirkos (Kazanchis)</option>
                                <option value="Yeka" ${r.get("sub_city")==="Yeka"?"selected":""}>Yeka (CMC)</option>
                                <option value="Arada" ${r.get("sub_city")==="Arada"?"selected":""}>Arada</option>
                                <option value="Lideta" ${r.get("sub_city")==="Lideta"?"selected":""}>Lideta</option>
                                <option value="Nifas Silk-Lafto" ${r.get("sub_city")==="Nifas Silk-Lafto"?"selected":""}>Nifas Silk-Lafto</option>
                                <option value="Gulele" ${r.get("sub_city")==="Gulele"?"selected":""}>Gulele</option>
                                <option value="Kolfe Keranio" ${r.get("sub_city")==="Kolfe Keranio"?"selected":""}>Kolfe Keranio</option>
                                <option value="Akaky Kaliti" ${r.get("sub_city")==="Akaky Kaliti"?"selected":""}>Akaky Kaliti</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label class="form-label">Property Type</label>
                            <select id="filter-proptype" class="form-control">
                                <option value="">Any Architecture</option>
                                <option value="apartment" ${r.get("property_type")==="apartment"?"selected":""}>Apartment</option>
                                <option value="villa" ${r.get("property_type")==="villa"?"selected":""}>Villa</option>
                                <option value="condo" ${r.get("property_type")==="condo"?"selected":""}>Condominium</option>
                                <option value="house" ${r.get("property_type")==="house"?"selected":""}>Independent House</option>
                                <option value="commercial" ${r.get("property_type")==="commercial"?"selected":""}>Commercial Space</option>
                            </select>
                        </div>

                        <div class="grid grid-2" style="gap: 10px;">
                            <div class="form-group">
                                <label class="form-label">Min Price</label>
                                <input type="number" id="filter-minprice" class="form-control" placeholder="Min" value="${r.get("min_price")||""}">
                            </div>
                            <div class="form-group">
                                <label class="form-label">Max Price</label>
                                <input type="number" id="filter-maxprice" class="form-control" placeholder="Max" value="${r.get("max_price")||""}">
                            </div>
                        </div>

                        <div class="grid grid-2" style="gap: 10px;">
                            <div class="form-group">
                                <label class="form-label">Bedrooms</label>
                                <select id="filter-beds" class="form-control">
                                    <option value="">Any</option>
                                    <option value="1" ${r.get("bedrooms")==="1"?"selected":""}>1+</option>
                                    <option value="2" ${r.get("bedrooms")==="2"?"selected":""}>2+</option>
                                    <option value="3" ${r.get("bedrooms")==="3"?"selected":""}>3+</option>
                                    <option value="4" ${r.get("bedrooms")==="4"?"selected":""}>4+</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Bathrooms</label>
                                <select id="filter-baths" class="form-control">
                                    <option value="">Any</option>
                                    <option value="1" ${r.get("bathrooms")==="1"?"selected":""}>1+</option>
                                    <option value="2" ${r.get("bathrooms")==="2"?"selected":""}>2+</option>
                                    <option value="3" ${r.get("bathrooms")==="3"?"selected":""}>3+</option>
                                </select>
                            </div>
                        </div>

                        <div class="flex items-center gap-2 mt-2">
                            <input type="checkbox" id="filter-furnished" ${r.get("is_furnished")==="1"?"checked":""} style="width: 16px; height: 16px; accent-color: var(--emerald-500); cursor: pointer;">
                            <label for="filter-furnished" style="font-size: 0.85rem; color: var(--text-primary); cursor: pointer;">Furnished Only</label>
                        </div>

                        <button type="submit" class="btn btn-primary w-full mt-2">Apply Filters</button>
                    </form>
                </aside>

                <!-- Results Grid -->
                <main>
                    <div id="properties-grid" class="grid grid-3">
                        <div style="grid-column: 1 / -1; padding: 60px; text-align: center; color: var(--text-muted);">
                            Searching verified listings...
                        </div>
                    </div>

                    <div id="pagination-controls" class="flex justify-center items-center gap-3 mt-8"></div>
                </main>
            </div>
        </div>
    `;const n=document.createElement("style");n.textContent=`
        @media (max-width: 900px) {
            .properties-layout { grid-template-columns: 1fr !important; }
        }
    `,e.appendChild(n);async function s(o=1){const i=e.querySelector("#properties-grid"),a=e.querySelector("#results-count-text"),c=e.querySelector("#pagination-controls");i.innerHTML=`
            <div style="grid-column: 1 / -1; padding: 60px; text-align: center; color: var(--text-muted);">
                Searching verified listings...
            </div>
        `;const d=new URLSearchParams,u=e.querySelector("#filter-q").value.trim(),f=e.querySelector("#filter-listing-type").value,b=e.querySelector("#filter-subcity").value,v=e.querySelector("#filter-proptype").value,x=e.querySelector("#filter-minprice").value,E=e.querySelector("#filter-maxprice").value,w=e.querySelector("#filter-beds").value,p=e.querySelector("#filter-baths").value,h=e.querySelector("#filter-furnished").checked,y=e.querySelector("#sort-selector").value;if(u&&d.set("q",u),f&&d.set("listing_type",f),b&&d.set("sub_city",b),v&&d.set("property_type",v),x&&d.set("min_price",x),E&&d.set("max_price",E),w&&d.set("bedrooms",w),p&&d.set("bathrooms",p),h&&d.set("is_furnished","1"),y){const[O,P]=y.split(":");d.set("sort_by",O),d.set("sort_order",P)}d.set("page",o),d.set("per_page",12);const g=`${window.location.pathname}?${d.toString()}`;window.history.replaceState({},"",g);try{const O=u?`/search?${d.toString()}`:`/properties?${d.toString()}`,k=(await D.get(O)).data,L=k.data||[],M=k.meta||{total:L.length,last_page:1};if(a.textContent=`Showing ${L.length} of ${M.total||L.length} luxury listings`,L.length===0){i.innerHTML=`
                    <div style="grid-column: 1 / -1; padding: 60px; text-align: center; color: var(--text-muted); background: var(--bg-card); border-radius: var(--radius-lg);">
                        <div style="font-size: 2.5rem; margin-bottom: 12px;">🏡</div>
                        <h3>No Properties Found</h3>
                        <p class="mt-2">Try adjusting your filters, price range, or search keyword.</p>
                    </div>
                `,c.innerHTML="";return}i.innerHTML=L.map(C=>br(C)).join(""),i.querySelectorAll(".card-property").forEach(C=>{C.addEventListener("click",()=>{const V=C.getAttribute("data-id");re(`/properties/${V}`)})});const $=M.last_page||1;if($>1){let C="";o>1&&(C+='<button class="btn btn-secondary btn-sm" id="page-prev">← Prev</button>'),C+=`<span style="font-size: 0.85rem; color: var(--text-secondary);">Page ${o} of ${$}</span>`,o<$&&(C+='<button class="btn btn-secondary btn-sm" id="page-next">Next →</button>'),c.innerHTML=C;const V=c.querySelector("#page-prev");V&&V.addEventListener("click",()=>s(o-1));const X=c.querySelector("#page-next");X&&X.addEventListener("click",()=>s(o+1))}else c.innerHTML=""}catch{i.innerHTML=`
                <div style="grid-column: 1 / -1; padding: 40px; text-align: center; color: var(--coral-500);">
                    Error retrieving properties. Please try again.
                </div>
            `}}e.querySelector("#filter-form").addEventListener("submit",o=>{o.preventDefault(),s(1)}),e.querySelector("#sort-selector").addEventListener("change",()=>{s(1)}),e.querySelector("#btn-reset-filters").addEventListener("click",o=>{o.preventDefault(),e.querySelector("#filter-form").reset(),s(1)}),await s(1)}async function Ns(e,t){e.innerHTML=`
        <div class="container" style="padding-top: 40px; padding-bottom: 80px;">
            <div id="prop-detail-loading" style="padding: 100px; text-align: center; color: var(--text-muted);">
                Loading luxury property specifications...
            </div>
            <div id="prop-detail-content" style="display: none;"></div>
        </div>
    `;try{const r=await D.get(`/properties/${t}`),n=r.data.data||r.data;Fs(e,n)}catch(r){e.querySelector("#prop-detail-loading").innerHTML=`
            <div style="color: var(--coral-500);">
                <h3>Property Not Found</h3>
                <p class="mt-2">${r.friendlyMessage||"The requested property could not be loaded or is no longer published."}</p>
                <a href="/properties" class="btn btn-outline btn-sm mt-4" data-link>← Back to All Properties</a>
            </div>
        `}}function Fs(e,t){var v,x,E;e.querySelector("#prop-detail-loading").style.display="none";const r=e.querySelector("#prop-detail-content");r.style.display="block";const n=t.images&&t.images.length>0?t.images:[{image_url:t.featured_image||"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"},{image_url:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"},{image_url:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80"}],s=(v=n[0])==null?void 0:v.image_url,o=((x=n[1])==null?void 0:x.image_url)||s,i=((E=n[2])==null?void 0:E.image_url)||s,a=t.listing_type==="holiday_let",c=t.listing_type==="rent";t.listing_type;const d=R.formatPrice(t.price,t.currency||"ETB"),u=a?"/ night":c?"/ month":"",f=t.amenities||["High-Speed WiFi","Backup Diesel Generator","2,000L Water Reservoir","24/7 Gated Security","Dedicated Parking","Elevator Access"];r.innerHTML=`
        <!-- Breadcrumb & Back -->
        <div class="mb-4">
            <a href="/properties" class="btn btn-outline btn-sm" data-link style="padding: 4px 12px; font-size: 0.8rem;">← Back to Listings</a>
        </div>

        <!-- Property Title & Badges -->
        <div class="flex justify-between items-center mb-4 flex-wrap gap-3">
            <div>
                <h1 style="font-size: clamp(1.8rem, 3vw, 2.5rem);">${t.title}</h1>
                <div class="card-location mt-2" style="font-size: 0.95rem;">
                    <span style="color: var(--emerald-500);">📍</span>
                    <span>${t.address?t.address+", ":""}${t.sub_city?t.sub_city+", ":""}${t.city}, Ethiopia</span>
                </div>
            </div>
            <div class="flex items-center gap-2">
                <span class="badge ${a?"badge-holiday":c?"badge-rent":"badge-sale"}" style="font-size: 0.85rem; padding: 6px 14px;">
                    ${a?"Holiday Stay":c?"For Rent":"For Sale"}
                </span>
                <span class="badge badge-verified" style="font-size: 0.85rem; padding: 6px 14px;">✓ Verified Title</span>
            </div>
        </div>

        <!-- Gallery Showcase -->
        <div class="property-gallery">
            <div class="gallery-main">
                <img id="active-gallery-img" src="${s}" alt="${t.title}">
            </div>
            <div class="gallery-thumbs">
                <img class="thumb-img" src="${o}" alt="Photo 2" style="cursor: pointer;">
                <img class="thumb-img" src="${i}" alt="Photo 3" style="cursor: pointer;">
            </div>
        </div>

        <!-- Main Content & Sidebar Layout -->
        <div class="detail-layout">
            <!-- Left Overview -->
            <div>
                <!-- Specs Bar -->
                <div class="detail-card mb-6 flex justify-between items-center flex-wrap gap-4" style="padding: 20px 28px;">
                    <div class="text-center">
                        <div style="font-size: 1.2rem; font-weight: 700;">${t.bedrooms||"—"}</div>
                        <div style="font-size: 0.8rem; color: var(--text-muted);">Bedrooms</div>
                    </div>
                    <div class="text-center">
                        <div style="font-size: 1.2rem; font-weight: 700;">${t.bathrooms||"—"}</div>
                        <div style="font-size: 0.8rem; color: var(--text-muted);">Bathrooms</div>
                    </div>
                    <div class="text-center">
                        <div style="font-size: 1.2rem; font-weight: 700;">${t.square_meters?t.square_meters+" m²":"—"}</div>
                        <div style="font-size: 0.8rem; color: var(--text-muted);">Living Area</div>
                    </div>
                    <div class="text-center">
                        <div style="font-size: 1.2rem; font-weight: 700;">${t.is_furnished?"Furnished":"Unfurnished"}</div>
                        <div style="font-size: 0.8rem; color: var(--text-muted);">Furnishing</div>
                    </div>
                </div>

                <!-- Description -->
                <div class="detail-card mb-6">
                    <h3 class="mb-4">About This Residence</h3>
                    <div style="color: var(--text-secondary); line-height: 1.8; white-space: pre-line;">
                        ${t.description||"Experience luxurious living in one of Addis Ababa’s most secure and sought-after neighborhoods. High-end finishes, scenic balcony views, and seamless utilities."}
                    </div>
                </div>

                <!-- Amenities -->
                <div class="detail-card mb-6">
                    <h3>Features & Infrastructure</h3>
                    <p class="mt-1" style="font-size: 0.85rem;">Equipped with essential utilities for continuous comfort in Addis Ababa.</p>
                    <div class="amenities-grid">
                        ${f.map(w=>`
                            <div class="amenity-chip">
                                <span style="color: var(--emerald-500);">✓</span>
                                <span>${w}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>

                <!-- Host & Agent Card -->
                <div class="detail-card mb-6">
                    <h3>Listed by Verified Agent</h3>
                    <div class="flex items-center gap-4 mt-4">
                        <div style="width: 60px; height: 60px; border-radius: 50%; background: var(--bg-surface); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; border: 2px solid var(--emerald-500);">
                            👤
                        </div>
                        <div>
                            <h4 style="margin-bottom: 2px;">${t.user?t.user.name:"HabeshaHomes Concierge"}</h4>
                            <p style="font-size: 0.85rem; color: var(--emerald-500);">Verified Real Estate Partner</p>
                            ${t.user&&t.user.phone?`<p style="font-size: 0.85rem; color: var(--text-muted);">📞 ${t.user.phone}</p>`:""}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Sticky Booking / Contact Card -->
            <div>
                <div class="booking-box">
                    <div class="booking-price-header">
                        <div>
                            <span style="font-size: 1.8rem; font-weight: 800; color: #fff;">${d}</span>
                            <span style="color: var(--text-muted); font-size: 0.9rem;">${u}</span>
                        </div>
                        <span class="badge ${a?"badge-holiday":"badge-verified"}">
                            ${a?"Instant Booking":"Active Listing"}
                        </span>
                    </div>

                    ${a?`
                        <!-- Holiday Let Calendar & Booking Widget -->
                        <div class="booking-date-inputs">
                            <div class="booking-date-row">
                                <div class="booking-date-cell">
                                    <label class="form-label" style="font-size: 0.7rem;">Check-in</label>
                                    <input type="date" id="date-checkin" class="form-control" style="padding: 4px 6px; font-size: 0.85rem; background: transparent; border: none;">
                                </div>
                                <div class="booking-date-cell">
                                    <label class="form-label" style="font-size: 0.7rem;">Check-out</label>
                                    <input type="date" id="date-checkout" class="form-control" style="padding: 4px 6px; font-size: 0.85rem; background: transparent; border: none;">
                                </div>
                            </div>
                        </div>

                        <div id="availability-status" style="display: none; padding: 8px 12px; border-radius: var(--radius-sm); font-size: 0.85rem; margin-bottom: 12px;"></div>

                        <div id="pricing-calculator" class="price-breakdown" style="display: none;">
                            <div class="price-breakdown-row">
                                <span id="calc-nights-text">Price × nights</span>
                                <span id="calc-subtotal">0 ETB</span>
                            </div>
                            <div class="price-breakdown-row">
                                <span>Platform & Service Fee (5%)</span>
                                <span id="calc-fee">0 ETB</span>
                            </div>
                            <div class="price-breakdown-row total">
                                <span>Total Due</span>
                                <span id="calc-total">0 ETB</span>
                            </div>
                        </div>

                        <button id="btn-reserve-stay" class="btn btn-gold btn-lg w-full mt-4" disabled>
                            Select Dates to Reserve
                        </button>
                    `:`
                        <!-- Rent or Sale Contact Widget -->
                        <div class="flex flex-col gap-3 mt-4">
                            <p style="font-size: 0.9rem; color: var(--text-secondary);">
                                Interested in viewing or leasing this property? Inquire directly with the verified host or schedule an accompanied architectural inspection.
                            </p>
                            <button id="btn-contact-agent" class="btn btn-primary btn-lg w-full mt-2">
                                Contact Host / Agent
                            </button>
                            <button id="btn-schedule-tour" class="btn btn-outline w-full">
                                Request Private Viewing
                            </button>
                        </div>
                    `}
                </div>
            </div>
        </div>
    `;const b=r.querySelector("#active-gallery-img");if(r.querySelectorAll(".thumb-img").forEach(w=>{w.addEventListener("click",()=>{const p=b.src;b.src=w.src,w.src=p})}),a){const w=r.querySelector("#date-checkin"),p=r.querySelector("#date-checkout"),h=r.querySelector("#btn-reserve-stay"),y=r.querySelector("#availability-status"),g=r.querySelector("#pricing-calculator"),O=new Date().toISOString().split("T")[0];w.min=O;let P=0;async function k(){const L=w.value,M=p.value;if(!(!L||!M)){if(new Date(M)<=new Date(L)){y.style.display="block",y.style.background="rgba(239, 68, 68, 0.15)",y.style.color="#fca5a5",y.textContent="Check-out date must be after check-in date.",h.disabled=!0,g.style.display="none";return}y.style.display="block",y.style.background="var(--bg-input)",y.style.color="var(--text-secondary)",y.textContent="Checking calendar availability...";try{const $=await D.get(`/properties/${t.id}/availability`,{params:{check_in:L,check_out:M}});if($.data.available){y.style.background="rgba(16, 185, 129, 0.15)",y.style.color="var(--emerald-500)",y.textContent="✓ Dates are available for booking!",P=$.data.estimated_price;const C=Math.round(P*.05),V=P+C,X=Math.max(1,Math.round((new Date(M)-new Date(L))/(1e3*60*60*24)));r.querySelector("#calc-nights-text").textContent=`${R.formatPrice(t.price,t.currency)} × ${X} ${X===1?"night":"nights"}`,r.querySelector("#calc-subtotal").textContent=R.formatPrice(P,t.currency),r.querySelector("#calc-fee").textContent=R.formatPrice(C,t.currency),r.querySelector("#calc-total").textContent=R.formatPrice(V,t.currency),g.style.display="flex",h.disabled=!1,h.textContent="Reserve Now (Instant Lock)"}else y.style.background="rgba(239, 68, 68, 0.15)",y.style.color="#fca5a5",y.textContent="Dates are booked or locked. Please select alternative dates.",g.style.display="none",h.disabled=!0,h.textContent="Dates Unavailable"}catch{y.style.background="rgba(239, 68, 68, 0.15)",y.style.color="#fca5a5",y.textContent="Unable to verify availability.",g.style.display="none",h.disabled=!0}}}w.addEventListener("change",()=>{const L=new Date(w.value);L.setDate(L.getDate()+1),p.min=L.toISOString().split("T")[0],k()}),p.addEventListener("change",k),h.addEventListener("click",()=>{Ms(t,w.value,p.value,P)})}else{const w=r.querySelector("#btn-contact-agent");w&&w.addEventListener("click",()=>{var h;(h=t.user)!=null&&h.phone?window.location.href=`tel:${t.user.phone}`:W("Direct contact: support@habeshahomes.com / +251 911 000 000","info",6e3)});const p=r.querySelector("#btn-schedule-tour");p&&p.addEventListener("click",()=>{W("Viewing request submitted to host! An agent will call to coordinate access.","success")})}}async function $t(e,t=""){if(!R.isLoggedIn()){Me("login"),e.innerHTML=`
            <div class="container" style="padding: 100px 0; text-align: center;">
                <h3>Please sign in to access your portal</h3>
                <p class="mt-2">Access your reservations, invoices, and listed properties.</p>
            </div>
        `;return}const r=R.user,n=R.isAgent();let s=t==="listings"&&n?"listings":"bookings";e.innerHTML=`
        <div class="container" style="padding-top: 40px; padding-bottom: 80px;">
            <div class="dashboard-header">
                <div class="flex items-center gap-4">
                    <div style="width: 64px; height: 64px; border-radius: 50%; background: var(--bg-card); display: flex; align-items: center; justify-content: center; font-size: 1.8rem; border: 2px solid var(--emerald-500);">
                        👤
                    </div>
                    <div>
                        <h2>${r.name}</h2>
                        <p style="font-size: 0.85rem;">
                            ${r.email} • 
                            <span class="badge ${n?"badge-holiday":"badge-rent"}">
                                ${r.user_type?r.user_type.toUpperCase():"USER"}
                            </span>
                        </p>
                    </div>
                </div>

                <div class="dashboard-tabs">
                    <button class="dashboard-tab ${s==="bookings"?"active":""}" data-tab="bookings">
                        My Bookings
                    </button>
                    ${n?`
                        <button class="dashboard-tab ${s==="listings"?"active":""}" data-tab="listings">
                            My Properties
                        </button>
                    `:""}
                </div>
            </div>

            <div id="dashboard-tab-content">
                <!-- Injected based on active tab -->
            </div>
        </div>

        <!-- Add Property Modal (For Hosts & Agents) -->
        <div id="modal-add-property" class="modal-overlay">
            <div class="modal-content" style="max-width: 680px;">
                <div class="modal-header">
                    <h3>List a New Property</h3>
                    <button class="modal-close" id="close-add-modal">&times;</button>
                </div>

                <form id="form-create-property" class="flex flex-col gap-4">
                    <div class="form-group">
                        <label class="form-label">Property Title</label>
                        <input type="text" id="new-prop-title" class="form-control" required placeholder="e.g. Luxurious Penthouse with Balcony in Bole Atlas">
                    </div>

                    <div class="grid grid-2" style="gap: 14px;">
                        <div class="form-group">
                            <label class="form-label">Listing Type</label>
                            <select id="new-prop-listing-type" class="form-control" required>
                                <option value="holiday_let">Holiday Stay (Nightly)</option>
                                <option value="rent">Long-term Rent (Monthly)</option>
                                <option value="sale">For Sale</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Property Type</label>
                            <select id="new-prop-type" class="form-control" required>
                                <option value="apartment">Apartment</option>
                                <option value="villa">Villa / Independent House</option>
                                <option value="condo">Condominium</option>
                                <option value="commercial">Commercial Space</option>
                            </select>
                        </div>
                    </div>

                    <div class="grid grid-2" style="gap: 14px;">
                        <div class="form-group">
                            <label class="form-label">Price</label>
                            <input type="number" id="new-prop-price" class="form-control" required min="1" placeholder="e.g. 5000">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Currency</label>
                            <select id="new-prop-currency" class="form-control">
                                <option value="ETB">ETB (Ethiopian Birr)</option>
                                <option value="USD">USD ($)</option>
                            </select>
                        </div>
                    </div>

                    <div class="grid grid-2" style="gap: 14px;">
                        <div class="form-group">
                            <label class="form-label">City</label>
                            <input type="text" id="new-prop-city" class="form-control" value="Addis Ababa" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Sub-City</label>
                            <select id="new-prop-subcity" class="form-control" required>
                                <option value="Bole">Bole</option>
                                <option value="Kirkos">Kirkos (Kazanchis)</option>
                                <option value="Yeka">Yeka (CMC)</option>
                                <option value="Arada">Arada</option>
                                <option value="Lideta">Lideta</option>
                                <option value="Nifas Silk-Lafto">Nifas Silk-Lafto</option>
                                <option value="Gulele">Gulele</option>
                                <option value="Kolfe Keranio">Kolfe Keranio</option>
                                <option value="Akaky Kaliti">Akaky Kaliti</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="form-label">Specific Street Address / Landmark</label>
                        <input type="text" id="new-prop-address" class="form-control" required placeholder="Near Edna Mall, Gabon St.">
                    </div>

                    <div class="grid grid-3" style="gap: 14px;">
                        <div class="form-group">
                            <label class="form-label">Bedrooms</label>
                            <input type="number" id="new-prop-beds" class="form-control" min="0" value="2">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Bathrooms</label>
                            <input type="number" id="new-prop-baths" class="form-control" min="0" step="0.5" value="2">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Square Meters (m²)</label>
                            <input type="number" id="new-prop-sqm" class="form-control" min="1" value="120">
                        </div>
                    </div>

                    <div class="flex items-center gap-2">
                        <input type="checkbox" id="new-prop-furnished" checked style="width: 16px; height: 16px; accent-color: var(--emerald-500); cursor: pointer;">
                        <label for="new-prop-furnished" style="font-size: 0.85rem; cursor: pointer;">Furnished with Appliances & Furniture</label>
                    </div>

                    <div class="form-group">
                        <label class="form-label">Description & Highlights</label>
                        <textarea id="new-prop-desc" class="form-control" rows="3" placeholder="Describe the interior, neighborhood, security, and views..."></textarea>
                    </div>

                    <div class="form-group">
                        <label class="form-label">Property Photos (Upload Multiple)</label>
                        <input type="file" id="new-prop-images" class="form-control" multiple accept="image/*">
                        <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">Upload high quality JPEG or PNG images (Max 10MB each).</p>
                    </div>

                    <div id="new-prop-error" style="display: none; background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.3); color: #fca5a5; padding: 10px; border-radius: var(--radius-md); font-size: 0.85rem;"></div>

                    <button type="submit" class="btn btn-primary btn-lg w-full mt-2" id="btn-submit-listing">
                        Publish Listing
                    </button>
                </form>
            </div>
        </div>
    `,e.querySelectorAll(".dashboard-tab").forEach(c=>{c.addEventListener("click",()=>{e.querySelectorAll(".dashboard-tab").forEach(u=>u.classList.remove("active")),c.classList.add("active");const d=c.getAttribute("data-tab");s=d,d==="bookings"?rt(e.querySelector("#dashboard-tab-content")):$e(e.querySelector("#dashboard-tab-content"))})});const o=e.querySelector("#modal-add-property");e.querySelector("#close-add-modal").addEventListener("click",()=>o.classList.remove("open")),o.addEventListener("click",c=>{c.target===o&&o.classList.remove("open")});const a=e.querySelector("#form-create-property");a.addEventListener("submit",async c=>{c.preventDefault();const d=e.querySelector("#btn-submit-listing"),u=e.querySelector("#new-prop-error");u.style.display="none",d.disabled=!0,d.textContent="Publishing listing...";try{const f={title:e.querySelector("#new-prop-title").value.trim(),listing_type:e.querySelector("#new-prop-listing-type").value,property_type:e.querySelector("#new-prop-type").value,price:parseFloat(e.querySelector("#new-prop-price").value),currency:e.querySelector("#new-prop-currency").value,city:e.querySelector("#new-prop-city").value.trim(),sub_city:e.querySelector("#new-prop-subcity").value,address:e.querySelector("#new-prop-address").value.trim(),bedrooms:parseInt(e.querySelector("#new-prop-beds").value,10),bathrooms:parseFloat(e.querySelector("#new-prop-baths").value),square_meters:parseFloat(e.querySelector("#new-prop-sqm").value),is_furnished:e.querySelector("#new-prop-furnished").checked,description:e.querySelector("#new-prop-desc").value.trim()},b=await D.post("/properties",f),v=b.data.data||b.data,x=e.querySelector("#new-prop-images");if(x.files.length>0){d.textContent="Uploading property photos...";const E=new FormData;for(let w=0;w<x.files.length;w++)E.append("images[]",x.files[w]);await D.post(`/properties/${v.id}/images`,E,{headers:{"Content-Type":"multipart/form-data"}})}W("Property published successfully!","success"),o.classList.remove("open"),a.reset(),$e(e.querySelector("#dashboard-tab-content"))}catch(f){u.style.display="block",u.textContent=f.friendlyMessage||"Failed to create listing. Please check required fields."}finally{d.disabled=!1,d.textContent="Publish Listing"}}),s==="listings"?$e(e.querySelector("#dashboard-tab-content")):rt(e.querySelector("#dashboard-tab-content"))}async function rt(e){e.innerHTML=`
        <div style="padding: 60px; text-align: center; color: var(--text-muted);">
            Loading your reservations and stays...
        </div>
    `;try{const t=await D.get("/bookings"),r=t.data.data||t.data||[];if(r.length===0){e.innerHTML=`
                <div class="detail-card text-center" style="padding: 60px 20px;">
                    <div style="font-size: 2.5rem; margin-bottom: 12px;">🧳</div>
                    <h3>No Active Reservations</h3>
                    <p class="mt-2">You haven't booked any holiday stays yet. Discover luxury options in Addis Ababa!</p>
                    <a href="/properties?listing_type=holiday_let" class="btn btn-primary mt-4" data-link>Explore Holiday Stays</a>
                </div>
            `;return}e.innerHTML=`
            <div class="table-container">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Property</th>
                            <th>Dates</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Invoice / Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${r.map(n=>{var o,i,a;const s=n.status==="confirmed"?"badge-status-confirmed":n.status==="pending"?"badge-status-pending":"badge-status-cancelled";return`
                                <tr>
                                    <td>
                                        <div style="font-weight: 600;">${n.property?n.property.title:"Holiday Residence"}</div>
                                        <div style="font-size: 0.8rem; color: var(--text-muted);">${((o=n.property)==null?void 0:o.sub_city)||""} ${((i=n.property)==null?void 0:i.city)||""}</div>
                                    </td>
                                    <td>
                                        <div>${n.check_in} → ${n.check_out}</div>
                                        <div style="font-size: 0.75rem; color: var(--text-muted);">${n.guests_count||1} guest(s)</div>
                                    </td>
                                    <td style="font-weight: 700; color: #fff;">
                                        ${R.formatPrice(n.total_amount,((a=n.property)==null?void 0:a.currency)||"ETB")}
                                    </td>
                                    <td>
                                        <span class="badge ${s}">${n.status.toUpperCase()}</span>
                                    </td>
                                    <td>
                                        <div class="flex items-center gap-2">
                                            ${n.status==="confirmed"?`
                                                <a href="/storage/invoices/invoice-${n.id}.pdf" target="_blank" class="btn btn-outline btn-sm" style="padding: 4px 10px; font-size: 0.75rem;">
                                                    PDF Invoice
                                                </a>
                                            `:""}
                                            ${n.status!=="cancelled"?`
                                                <button class="btn btn-danger btn-sm cancel-booking-btn" data-id="${n.id}" style="padding: 4px 10px; font-size: 0.75rem;">
                                                    Cancel
                                                </button>
                                            `:"—"}
                                        </div>
                                    </td>
                                </tr>
                            `}).join("")}
                    </tbody>
                </table>
            </div>
        `,e.querySelectorAll(".cancel-booking-btn").forEach(n=>{n.addEventListener("click",async()=>{const s=n.getAttribute("data-id");if(confirm("Are you sure you want to cancel this booking?"))try{await D.post(`/bookings/${s}/cancel`,{reason:"Guest cancellation request"}),W("Booking cancelled.","info"),rt(e)}catch(o){W(o.friendlyMessage||"Unable to cancel booking.","error")}})})}catch(t){e.innerHTML=`
            <div style="color: var(--coral-500); padding: 40px; text-align: center;">
                Failed to load bookings: ${t.friendlyMessage||"Server error"}
            </div>
        `}}async function $e(e){e.innerHTML=`
        <div class="flex justify-between items-center mb-6">
            <h3>Your Listed Properties</h3>
            <button id="btn-open-add-property" class="btn btn-primary btn-sm">
                + Add New Listing
            </button>
        </div>
        <div id="user-properties-table" style="padding: 40px; text-align: center; color: var(--text-muted);">
            Loading your property portfolio...
        </div>
    `,e.querySelector("#btn-open-add-property").addEventListener("click",()=>{document.getElementById("modal-add-property").classList.add("open")});const t=e.querySelector("#user-properties-table");try{const s=((await D.get("/properties")).data.data||[]).filter(o=>{var i;return((i=o.user)==null?void 0:i.id)===R.user.id||R.isAdmin()});if(s.length===0){t.innerHTML=`
                <div class="detail-card text-center" style="padding: 40px 20px;">
                    <div style="font-size: 2.5rem; margin-bottom: 12px;">🏢</div>
                    <h4>No Properties Listed Yet</h4>
                    <p class="mt-2">Start monetizing your villa, apartment or condo with Ethiopian & diaspora guests.</p>
                </div>
            `;return}t.innerHTML=`
            <div class="table-container">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Property</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Location</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${s.map(o=>`
                            <tr>
                                <td>
                                    <div style="font-weight: 600;">${o.title}</div>
                                    <div style="font-size: 0.75rem; color: var(--text-muted);">${o.bedrooms||0} Beds • ${o.bathrooms||0} Baths • ${o.square_meters||0} m²</div>
                                </td>
                                <td>
                                    <span class="badge ${o.listing_type==="holiday_let"?"badge-holiday":"badge-rent"}">
                                        ${o.listing_type.replace("_"," ").toUpperCase()}
                                    </span>
                                </td>
                                <td style="font-weight: 700; color: #fff;">
                                    ${R.formatPrice(o.price,o.currency||"ETB")}
                                </td>
                                <td>
                                    <div>${o.sub_city?o.sub_city+", ":""}${o.city}</div>
                                </td>
                                <td>
                                    <div class="flex items-center gap-2">
                                        <a href="/properties/${o.id}" class="btn btn-outline btn-sm" data-link style="padding: 4px 10px; font-size: 0.75rem;">
                                            View
                                        </a>
                                        <button class="btn btn-danger btn-sm delete-prop-btn" data-id="${o.id}" style="padding: 4px 10px; font-size: 0.75rem;">
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>
        `,t.querySelectorAll(".delete-prop-btn").forEach(o=>{o.addEventListener("click",async()=>{const i=o.getAttribute("data-id");if(confirm("Are you sure you want to permanently delete this listing?"))try{await D.delete(`/properties/${i}`),W("Property deleted successfully.","info"),$e(e)}catch(a){W(a.friendlyMessage||"Unable to delete property.","error")}})})}catch(r){t.innerHTML=`
            <div style="color: var(--coral-500);">
                Could not retrieve properties: ${r.friendlyMessage||"Server error"}
            </div>
        `}}function yr(){const e=document.getElementById("main-navbar");if(!e)return;const t=R.isLoggedIn();R.user;const r=R.currency;e.innerHTML=`
        <div class="container navbar-inner">
            <a href="/" class="brand-logo" data-link>
                <div class="brand-flag">
                    <span></span><span></span><span></span>
                </div>
                <span>Habesha<span style="color: var(--emerald-500);">Homes</span></span>
            </a>

            <ul class="nav-links">
                <li><a href="/" class="nav-link" data-link>Home</a></li>
                <li><a href="/properties" class="nav-link" data-link>All Properties</a></li>
                <li><a href="/properties?listing_type=holiday_let" class="nav-link" data-link>Holiday Lets</a></li>
                <li><a href="/properties?listing_type=rent" class="nav-link" data-link>Long-term Rent</a></li>
                <li><a href="/properties?listing_type=sale" class="nav-link" data-link>For Sale</a></li>
            </ul>

            <div class="nav-actions">
                <!-- Currency Switcher -->
                <div class="currency-pill">
                    <button class="currency-btn ${r==="ETB"?"active":""}" data-currency="ETB">ETB</button>
                    <button class="currency-btn ${r==="USD"?"active":""}" data-currency="USD">USD</button>
                </div>

                ${t?`
                    <div style="position: relative; display: flex; align-items: center; gap: 10px;">
                        <a href="/dashboard" class="btn btn-secondary btn-sm" data-link>
                            <span>Dashboard</span>
                            ${R.isAgent()?'<span class="badge badge-holiday" style="font-size: 0.65rem; padding: 2px 6px;">Host</span>':""}
                        </a>
                        <button id="btn-logout" class="btn btn-outline btn-sm" title="Sign Out">
                            <span>Sign Out</span>
                        </button>
                    </div>
                `:`
                    <button id="btn-login" class="btn btn-outline btn-sm">Sign In</button>
                    <button id="btn-list-prop" class="btn btn-primary btn-sm">List Property</button>
                `}
            </div>
        </div>
    `,e.querySelectorAll("[data-currency]").forEach(i=>{i.addEventListener("click",()=>{const a=i.getAttribute("data-currency");R.setCurrency(a)})});const n=e.querySelector("#btn-login");n&&n.addEventListener("click",()=>Me("login"));const s=e.querySelector("#btn-list-prop");s&&s.addEventListener("click",()=>{R.isLoggedIn()?re("/dashboard/listings"):Me("register","agent")});const o=e.querySelector("#btn-logout");o&&o.addEventListener("click",async()=>{await R.logout(),re("/")})}let G=null;function Us(){window.addEventListener("popstate",()=>{Ne(window.location.pathname)}),document.addEventListener("click",e=>{const t=e.target.closest("a[data-link]");if(t){e.preventDefault();const r=t.getAttribute("href");re(r)}}),R.subscribe(()=>{yr(),Ne(window.location.pathname,!1)}),Ne(window.location.pathname)}function re(e){window.history.pushState(null,null,e),Ne(window.location.pathname),window.scrollTo({top:0,behavior:"smooth"})}function Ne(e,t=!0){const r=document.getElementById("app-root");if(!r)return;yr();const n=e.match(/^\/properties\/(\d+)$/);if(n){G=()=>Ns(r,n[1]),G();return}if(e==="/properties"||e.startsWith("/properties?")){G=()=>$s(r),G();return}if(e==="/dashboard/listings"){G=()=>$t(r,"listings"),G();return}if(e==="/dashboard"){G=()=>$t(r,"bookings"),G();return}G=()=>Ds(r),G()}let H=null;function gr(){document.getElementById("booking-modal")||(H=document.createElement("div"),H.id="booking-modal",H.className="modal-overlay",H.innerHTML=`
        <div class="modal-content">
            <div class="modal-header">
                <h3>Complete Reservation</h3>
                <button class="modal-close" id="booking-modal-close">&times;</button>
            </div>

            <div id="booking-modal-body">
                <!-- Injected dynamically -->
            </div>
        </div>
    `,document.body.appendChild(H),H.querySelector("#booking-modal-close").addEventListener("click",nt),H.addEventListener("click",e=>{e.target===H&&nt()}))}function Ms(e,t,r,n){if(!R.isLoggedIn()){Me("login"),W("Please sign in to proceed with booking.","info");return}gr();const s=H.querySelector("#booking-modal-body"),o=e.currency||"ETB",i=Math.max(1,Math.round((new Date(r)-new Date(t))/(1e3*60*60*24))),a=Math.round(n*.05),c=n+a;s.innerHTML=`
        <div class="flex flex-col gap-4">
            <div style="background: var(--bg-surface); padding: 14px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); display: flex; gap: 14px; align-items: center;">
                <div style="width: 70px; height: 55px; border-radius: var(--radius-sm); overflow: hidden; background: var(--bg-card);">
                    <img src="${e.featured_image||(e.images&&e.images[0]?e.images[0].image_url:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80")}" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div>
                    <h4 style="font-size: 1rem; margin-bottom: 2px;">${e.title}</h4>
                    <p style="font-size: 0.8rem; color: var(--text-muted);">${e.sub_city?e.sub_city+", ":""}${e.city}</p>
                </div>
            </div>

            <div style="background: var(--bg-input); padding: 14px; border-radius: var(--radius-md);">
                <div class="flex justify-between mb-2" style="font-size: 0.85rem;">
                    <span style="color: var(--text-secondary);">Reservation Dates:</span>
                    <strong>${t} → ${r} (${i} ${i===1?"night":"nights"})</strong>
                </div>
                <div class="flex justify-between mb-2" style="font-size: 0.85rem;">
                    <span style="color: var(--text-secondary);">Subtotal:</span>
                    <span>${R.formatPrice(n,o)}</span>
                </div>
                <div class="flex justify-between mb-2" style="font-size: 0.85rem;">
                    <span style="color: var(--text-secondary);">Platform & Service Fee (5%):</span>
                    <span>${R.formatPrice(a,o)}</span>
                </div>
                <div class="flex justify-between" style="font-size: 1.05rem; font-weight: 700; border-top: 1px solid var(--border-subtle); padding-top: 8px; color: var(--emerald-500);">
                    <span>Total Due:</span>
                    <span>${R.formatPrice(c,o)}</span>
                </div>
            </div>

            <form id="booking-submit-form" class="flex flex-col gap-3">
                <div class="form-group">
                    <label class="form-label">Number of Guests</label>
                    <input type="number" id="booking-guests" class="form-control" min="1" max="15" value="1" required>
                </div>

                <div class="form-group">
                    <label class="form-label">Select Payment Method</label>
                    <select id="booking-gateway" class="form-control">
                        <option value="chapa">Chapa Payment (Telebirr, Cards, CBEBirr)</option>
                        <option value="telebirr">TeleBirr Direct</option>
                        <option value="cbe">CBE Direct Transfer</option>
                    </select>
                </div>

                <div class="form-group">
                    <label class="form-label">Special Requests (Optional)</label>
                    <textarea id="booking-requests" class="form-control" rows="2" placeholder="Airport pickup, early check-in, etc."></textarea>
                </div>

                <div id="booking-error" style="display: none; background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.3); color: #fca5a5; padding: 10px; border-radius: var(--radius-md); font-size: 0.85rem;"></div>

                <button type="submit" class="btn btn-gold btn-lg w-full mt-2" id="booking-submit-btn">
                    Confirm & Reserve Stay
                </button>
            </form>
        </div>
    `,s.querySelector("#booking-submit-form").addEventListener("submit",async u=>{u.preventDefault();const f=s.querySelector("#booking-submit-btn"),b=s.querySelector("#booking-error"),v=s.querySelector("#booking-guests").value,x=s.querySelector("#booking-gateway").value,E=s.querySelector("#booking-requests").value;b.style.display="none",f.disabled=!0,f.textContent="Locking reservation dates...";try{const w=await D.post(`/properties/${e.id}/book`,{check_in:t,check_out:r,guests_count:parseInt(v,10),payment_gateway:x,special_requests:E});nt(),W("Booking initiated successfully!","success");const p=w.data.payment_url;p?window.location.href=p:re("/dashboard")}catch(w){b.style.display="block",b.textContent=w.friendlyMessage||"Unable to reserve property. Dates may have just been locked by another guest."}finally{f.disabled=!1,f.textContent="Confirm & Reserve Stay"}}),H.classList.add("open")}function nt(){H&&H.classList.remove("open")}document.addEventListener("DOMContentLoaded",async()=>{R.token&&await R.fetchMe(),mr(),gr(),Us()});
