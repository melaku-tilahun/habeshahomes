function jt(e,t){return function(){return e.apply(t,arguments)}}const{toString:_r}=Object.prototype,{getPrototypeOf:ne}=Object,{iterator:Ae,toStringTag:Ft}=Symbol,Ee=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),Ut=e=>typeof e=="string"&&(e==="__proto__"||e==="constructor"||e==="prototype"),Ht=(e,t,r)=>e===Object.prototype||!r&&t===null,Rr=e=>{if(!Object.isExtensible(e))return!1;const t=Object.getOwnPropertyNames(e);return Object.getOwnPropertySymbols&&t.push(...Object.getOwnPropertySymbols(e)),t.every(r=>{if(Ut(r))return!1;const s=Object.getOwnPropertyDescriptor(e,r);return!!s&&s.configurable&&s.writable===!0})},_e=(e,t)=>{let r=e;const s=[];for(;r!=null;){if(s.indexOf(r)!==-1)return!1;s.push(r);const n=ne(r);if(Ht(r,n,r===e))return!1;if(Ee(r,t))return!0;r=n}return!1},Ar=(e,t)=>e!=null&&_e(e,t)?e[t]:void 0,Pr=e=>{if(e==null||typeof e!="object"&&typeof e!="function")return e;const t=ne(e);if(t===null&&Rr(e))return e;const r=Object.create(null),s=Object.create(null),n=[];let i=e;for(;i!=null&&n.indexOf(i)===-1;){n.push(i);const o=i===e?t:ne(i);if(Ht(i,o,i===e))break;const a=Object.getOwnPropertyNames(i);Object.getOwnPropertySymbols&&a.push(...Object.getOwnPropertySymbols(i));for(const c of a)Ut(c)||Ee(s,c)||(r[c]=e[c],s[c]=!0);i=o}return r},ot=(e=>t=>{const r=_r.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),G=e=>(e=e.toLowerCase(),t=>ot(t)===e),Ie=e=>t=>typeof t===e,{isArray:de}=Array,ue=Ie("undefined");function ge(e){return e!==null&&!ue(e)&&e.constructor!==null&&!ue(e.constructor)&&I(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const It=G("ArrayBuffer");function Or(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&It(e.buffer),t}const Lr=Ie("string"),I=Ie("function"),zt=Ie("number"),ye=e=>e!==null&&typeof e=="object",Cr=e=>e===!0||e===!1,Be=e=>{if(!ye(e))return!1;const t=ne(e);return(t===null||t===Object.prototype||ne(t)===null)&&!_e(e,Ft)&&!_e(e,Ae)},Tr=e=>{if(!ye(e)||ge(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},$r=G("Date"),qr=G("File"),Br=e=>!!(e&&typeof e.uri<"u"),Dr=e=>e&&typeof e.getParts<"u",Mr=G("Blob"),Nr=G("FileList"),jr=G("Set"),Fr=e=>ye(e)&&I(e.pipe);function Ur(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const bt=Ur(),vt=typeof bt.FormData<"u"?bt.FormData:void 0,Hr=e=>{if(!e)return!1;if(vt&&e instanceof vt)return!0;const t=ne(e);if(!t||t===Object.prototype||!I(e.append))return!1;const r=ot(e);return r==="formdata"||r==="object"&&I(e.toString)&&e.toString()==="[object FormData]"},Ir=G("URLSearchParams"),[zr,Vr,Kr,Wr]=["ReadableStream","Request","Response","Headers"].map(G),Jr=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Pe(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let s,n;if(typeof e!="object"&&(e=[e]),de(e))for(s=0,n=e.length;s<n;s++)t.call(null,e[s],s,e);else{if(ge(e))return;const i=r?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let a;for(s=0;s<o;s++)a=i[s],t.call(null,e[a],a,e)}}function Vt(e,t){if(ge(e))return null;t=t.toLowerCase();const r=Object.keys(e);let s=r.length,n;for(;s-- >0;)if(n=r[s],t===n.toLowerCase())return n;return null}const le=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Kt=e=>!ue(e)&&e!==le;function tt(...e){const{caseless:t,skipUndefined:r}=Kt(this)&&this||{},s={},n=(i,o)=>{if(o==="__proto__"||o==="constructor"||o==="prototype")return;const a=t&&typeof o=="string"&&Vt(s,o)||o,c=Ee(s,a)?s[a]:void 0;Be(c)&&Be(i)?s[a]=tt(c,i):Be(i)?s[a]=tt({},i):de(i)?s[a]=i.slice():(!r||!ue(i))&&(s[a]=i)};for(let i=0,o=e.length;i<o;i++){const a=e[i];if(!a||ge(a)||(Pe(a,n),typeof a!="object"||de(a)))continue;const c=Object.getOwnPropertySymbols(a);for(let d=0;d<c.length;d++){const u=c[d];os.call(a,u)&&n(a[u],u)}}return s}const Gr=(e,t,r,{allOwnKeys:s}={})=>(Pe(t,(n,i)=>{r&&I(n)?Object.defineProperty(e,i,{__proto__:null,value:jt(n,r),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,i,{__proto__:null,value:n,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:s}),e),Xr=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Yr=(e,t,r,s)=>{e.prototype=Object.create(t.prototype,s),Object.defineProperty(e.prototype,"constructor",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{__proto__:null,value:t.prototype}),r&&Object.assign(e.prototype,r)},Zr=(e,t,r,s)=>{let n,i,o;const a={};if(t=t||{},e==null)return t;do{for(n=Object.getOwnPropertyNames(e),i=n.length;i-- >0;)o=n[i],(!s||s(o,e,t))&&!a[o]&&(t[o]=e[o],a[o]=!0);e=r!==!1&&ne(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},Qr=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const s=e.indexOf(t,r);return s!==-1&&s===r},es=e=>{if(!e)return null;if(de(e))return e;let t=e.length;if(!zt(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},ts=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ne(Uint8Array)),rs=(e,t)=>{const s=(e&&e[Ae]).call(e);let n;for(;(n=s.next())&&!n.done;){const i=n.value;t.call(e,i[0],i[1])}},ss=(e,t)=>{let r;const s=[];for(;(r=e.exec(t))!==null;)s.push(r);return s},ns=G("HTMLFormElement"),is=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,s,n){return s.toUpperCase()+n}),{propertyIsEnumerable:os}=Object.prototype,as=G("RegExp"),Wt=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),s={};Pe(r,(n,i)=>{let o;(o=t(n,i,e))!==!1&&(s[i]=o||n)}),Object.defineProperties(e,s)},ls=e=>{Wt(e,(t,r)=>{if(I(e)&&["arguments","caller","callee"].includes(r))return!1;const s=e[r];if(I(s)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},cs=(e,t)=>{const r={},s=n=>{n.forEach(i=>{r[i]=!0})};return de(e)?s(e):s(String(e).split(t)),r},ds=()=>{},us=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function ps(e){return!!(e&&I(e.append)&&e[Ft]==="FormData"&&e[Ae])}const fs=e=>{const t=new WeakSet,r=s=>{if(ye(s)){if(t.has(s))return;if(ge(s))return s;if(!("toJSON"in s)){t.add(s);let n;if(jr(s)){n=[];for(const i of s){const o=r(i);!ue(o)&&n.push(o)}}else n=de(s)?[]:{},Pe(s,(i,o)=>{const a=r(i);!ue(a)&&(n[o]=a)});return t.delete(s),n}}return s};return r(e)},hs=G("AsyncFunction"),ms=e=>e&&(ye(e)||I(e))&&I(e.then)&&I(e.catch),Jt=((e,t)=>e?setImmediate:t?((r,s)=>(le.addEventListener("message",({source:n,data:i})=>{n===le&&i===r&&s.length&&s.shift()()},!1),n=>{s.push(n),le.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",I(le.postMessage)),gs=typeof queueMicrotask<"u"?queueMicrotask.bind(le):typeof process<"u"&&process.nextTick||Jt,Gt=e=>e!=null&&I(e[Ae]),ys=e=>e!=null&&_e(e,Ae)&&Gt(e),l={isArray:de,isArrayBuffer:It,isBuffer:ge,isFormData:Hr,isArrayBufferView:Or,isString:Lr,isNumber:zt,isBoolean:Cr,isObject:ye,isPlainObject:Be,isEmptyObject:Tr,isReadableStream:zr,isRequest:Vr,isResponse:Kr,isHeaders:Wr,isUndefined:ue,isDate:$r,isFile:qr,isReactNativeBlob:Br,isReactNative:Dr,isBlob:Mr,isRegExp:as,isFunction:I,isStream:Fr,isURLSearchParams:Ir,isTypedArray:ts,isFileList:Nr,forEach:Pe,merge:tt,extend:Gr,trim:Jr,stripBOM:Xr,inherits:Yr,toFlatObject:Zr,kindOf:ot,kindOfTest:G,endsWith:Qr,toArray:es,forEachEntry:rs,matchAll:ss,isHTMLForm:ns,hasOwnProperty:Ee,hasOwnProp:Ee,hasOwnInPrototypeChain:_e,getSafeProp:Ar,toSafeFlatObject:Pr,reduceDescriptors:Wt,freezeMethods:ls,toObjectSet:cs,toCamelCase:is,noop:ds,toFiniteNumber:us,findKey:Vt,global:le,isContextDefined:Kt,isSpecCompliantForm:ps,toJSONObject:fs,isAsyncFn:hs,isThenable:ms,setImmediate:Jt,asap:gs,isIterable:Gt,isSafeIterable:ys},bs=l.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),vs=e=>{const t={};let r,s,n;return e&&e.split(`
`).forEach(function(o){n=o.indexOf(":"),r=o.substring(0,n).trim().toLowerCase(),s=o.substring(n+1).trim();const a=l.hasOwnProp(t,r);!r||a&&l.hasOwnProp(bs,r)||(r==="set-cookie"?a?t[r].push(s):t[r]=[s]:t[r]=a?t[r]+", "+s:s)}),t};function xs(e){let t=0,r=e.length;for(;t<r;){const s=e.charCodeAt(t);if(s!==9&&s!==32)break;t+=1}for(;r>t;){const s=e.charCodeAt(r-1);if(s!==9&&s!==32)break;r-=1}return t===0&&r===e.length?e:e.slice(t,r)}const ws=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),Ss=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function at(e,t){return l.isArray(e)?e.map(r=>at(r,t)):xs(String(e).replace(t,""))}const ks=e=>at(e,ws),Es=e=>at(e,Ss);function Xt(e){const t=Object.create(null);return l.forEach(e.toJSON(),(r,s)=>{t[s]=Es(r)}),t}const xt=Symbol("internals");function we(e){return e&&String(e).trim().toLowerCase()}function De(e){return e===!1||e==null?e:l.isArray(e)?e.map(De):ks(String(e))}function _s(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=r.exec(e);)t[s[1]]=s[2];return t}const Rs=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function Je(e){let t=0,r=e.length;for(;t<r;){const s=e.charCodeAt(t);if(s!==9&&s!==32)break;t+=1}for(;r>t;){const s=e.charCodeAt(r-1);if(s!==9&&s!==32)break;r-=1}return t===0&&r===e.length?e:e.slice(t,r)}function As(e){const t=e.length-1;if(t<1||e.charCodeAt(0)!==34||e.charCodeAt(t)!==34)return e;let r="";for(let s=1;s<t;s++){const n=e.charCodeAt(s);if(n===34||n===92&&(s+=1,s>=t))return e;r+=e[s]}return r}function Ps(e){const t=Object.create(null),r=String(e);let s=0,n=!1,i=!1;function o(a){const c=Je(r.slice(s,a)),d=c.indexOf("=");if(d<1)return;const u=Je(c.slice(0,d));if(!Rs.test(u))return;const f=u.toLowerCase();if(f==="__proto__"||f==="constructor"||f==="prototype")return;const m=Je(c.slice(d+1));t[f]=As(m)}for(let a=0;a<r.length;a++){const c=r.charCodeAt(a);n?i?i=!1:c===92?i=!0:c===34&&(n=!1):c===34?n=!0:(c===44||c===59)&&(o(a),s=a+1)}return o(r.length),t}const Os=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ge(e,t,r,s,n){if(l.isFunction(s))return s.call(this,t,r);if(n&&(t=r),!!l.isString(t)){if(l.isString(s))return t.indexOf(s)!==-1;if(l.isRegExp(s))return s.test(t)}}function Ls(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,s)=>r.toUpperCase()+s)}function Cs(e,t){const r=l.toCamelCase(" "+t);["get","set","has"].forEach(s=>{Object.defineProperty(e,s+r,{__proto__:null,value:function(n,i,o){return this[s].call(this,t,n,i,o)},configurable:!0})})}let F=class{constructor(t){t&&this.set(t)}set(t,r,s){const n=this;function i(a,c,d){const u=we(c);if(!u)return;const f=l.findKey(n,u);(!f||n[f]===void 0||d===!0||d===void 0&&n[f]!==!1)&&(n[f||c]=De(a))}const o=(a,c)=>l.forEach(a,(d,u)=>i(d,u,c));if(l.isPlainObject(t)||t instanceof this.constructor)o(t,r);else if(l.isString(t)&&(t=t.trim())&&!Os(t))o(vs(t),r);else if(l.isObject(t)&&l.isSafeIterable(t)){let a=Object.create(null),c,d;for(const u of t){if(!l.isArray(u))throw new TypeError("Object iterator must return a key-value pair");d=u[0],l.hasOwnProp(a,d)?(c=a[d],a[d]=l.isArray(c)?[...c,u[1]]:[c,u[1]]):a[d]=u[1]}o(a,r)}else t!=null&&i(r,t,s);return this}get(t,r){if(t=we(t),t){const s=l.findKey(this,t);if(s){const n=this[s];if(!r)return n;if(r===!0)return _s(n);if(l.isFunction(r))return r.call(this,n,s);if(l.isRegExp(r))return r.exec(n);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=we(t),t){const s=l.findKey(this,t);return!!(s&&this[s]!==void 0&&(!r||Ge(this,this[s],s,r)))}return!1}delete(t,r){const s=this;let n=!1;function i(o){if(o=we(o),o){const a=l.findKey(s,o);a&&(!r||Ge(s,s[a],a,r))&&(delete s[a],n=!0)}}return l.isArray(t)?t.forEach(i):i(t),n}clear(t){const r=Object.keys(this);let s=r.length,n=!1;for(;s--;){const i=r[s];(!t||Ge(this,this[i],i,t,!0))&&(delete this[i],n=!0)}return n}normalize(t){const r=this,s={};return l.forEach(this,(n,i)=>{const o=l.findKey(s,i);if(o){r[o]=De(n),delete r[i];return}const a=t?Ls(i):String(i).trim();a!==i&&delete r[i],r[a]=De(n),s[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return l.forEach(this,(s,n)=>{s!=null&&s!==!1&&(r[n]=t&&l.isArray(s)?s.join(", "):s)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}getSetCookie(){const t=this.get("set-cookie");return l.isArray(t)?t:t==null||t===!1?[]:[t]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static parseParameters(t){return Ps(t)}static concat(t,...r){const s=new this(t);return r.forEach(n=>s.set(n)),s}static accessor(t){const s=(this[xt]=this[xt]={accessors:{}}).accessors,n=this.prototype;function i(o){const a=we(o);s[a]||(Cs(n,o),s[a]=!0)}return l.isArray(t)?t.forEach(i):i(t),this}};F.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);l.reduceDescriptors(F.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(s){this[r]=s}}});l.freezeMethods(F);const Ue="[REDACTED ****]";function Ts(e){if(l.hasOwnProp(e,"toJSON"))return!0;let t=Object.getPrototypeOf(e);for(;t&&t!==Object.prototype;){if(l.hasOwnProp(t,"toJSON"))return!0;t=Object.getPrototypeOf(t)}return!1}function $s(e,t){const r=new Set(t.map(i=>String(i).toLowerCase())),s=[],n=i=>{if(i===null||typeof i!="object"||l.isBuffer(i))return i;if(s.indexOf(i)!==-1)return;i instanceof F&&(i=i.toJSON()),s.push(i);let o;if(l.isArray(i))o=[],i.forEach((a,c)=>{const d=n(a);l.isUndefined(d)||(o[c]=d)});else{if(!l.isPlainObject(i)&&Ts(i))return s.pop(),i;o=Object.create(null);for(const[a,c]of Object.entries(i)){const d=r.has(a.toLowerCase())?Ue:n(c);l.isUndefined(d)||(o[a]=d)}}return s.pop(),o};return n(e)}function wt(e){try{return String(e)}catch{return""}}function qs(e){return e.errors.map(r=>{try{return r&&r.message?wt(r.message):wt(r)}catch{return""}}).filter(Boolean).join("; ")||e.name||"AggregateError"}let h=class Yt extends Error{static from(t,r,s,n,i,o){let a=t.message;!a&&l.isArray(t.errors)&&t.errors.length&&(a=qs(t));const c=new Yt(a,r||t.code,s,n,i);return Object.defineProperty(c,"cause",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),c.name=t.name,t.status!=null&&c.status==null&&(c.status=t.status),o&&Object.assign(c,o),c}constructor(t,r,s,n,i){super(t),Object.defineProperty(this,"message",{__proto__:null,value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,r&&(this.code=r),s&&(this.config=s),n&&(this.request=n),i&&(this.response=i,this.status=i.status)}toJSON(){const t=this.config,r=t&&l.hasOwnProp(t,"redact")?t.redact:void 0,s=l.isArray(r)&&r.length>0?$s(t,r):l.toJSONObject(t);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:s,code:this.code,status:this.status}}};h.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";h.ERR_BAD_OPTION="ERR_BAD_OPTION";h.ECONNABORTED="ECONNABORTED";h.ETIMEDOUT="ETIMEDOUT";h.ECONNREFUSED="ECONNREFUSED";h.ERR_NETWORK="ERR_NETWORK";h.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";h.ERR_DEPRECATED="ERR_DEPRECATED";h.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";h.ERR_BAD_REQUEST="ERR_BAD_REQUEST";h.ERR_CANCELED="ERR_CANCELED";h.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";h.ERR_INVALID_URL="ERR_INVALID_URL";h.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const Bs=null,Zt=100;function rt(e){return l.isPlainObject(e)||l.isArray(e)}function Qt(e){return l.endsWith(e,"[]")?e.slice(0,-2):e}function Xe(e,t,r){return e?e.concat(t).map(function(n,i){return n=Qt(n),!r&&i?"["+n+"]":n}).join(r?".":""):t}function Ds(e){return l.isArray(e)&&!e.some(rt)}const Ms=l.toFlatObject(l,{},null,function(t){return/^is[A-Z]/.test(t)});function ze(e,t,r){if(!l.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const s=(g,y)=>{const b=l.getSafeProp(r,g);return l.isUndefined(b)?y:b},n=s("metaTokens",!0),i=s("visitor")||k,o=s("dots",!1),a=s("indexes",!1),c=s("Blob")||typeof Blob<"u"&&Blob,d=s("maxDepth",Zt),u=c&&l.isSpecCompliantForm(t),f=[];if(!l.isFunction(i))throw new TypeError("visitor must be a function");function m(g){if(g===null)return"";if(l.isDate(g))return g.toISOString();if(l.isBoolean(g))return g.toString();if(!u&&l.isBlob(g))throw new h("Blob is not supported. Use a Buffer instead.");if(l.isArrayBuffer(g)||l.isTypedArray(g)){if(u&&typeof c=="function")return new c([g]);throw new h("Blob is not supported. Use a Buffer instead.",h.ERR_NOT_SUPPORT)}return g}function v(g){if(g>d)throw new h("Object is too deeply nested ("+g+" levels). Max depth: "+d,h.ERR_FORM_DATA_DEPTH_EXCEEDED)}function w(g,y){if(d===1/0)return JSON.stringify(g);const b=[];return JSON.stringify(g,function(E,O){if(!l.isObject(O))return O;for(;b.length&&b[b.length-1]!==this;)b.pop();return b.push(O),v(y+b.length-1),O})}function k(g,y,b){let _=g;if(l.isReactNative(t)&&l.isReactNativeBlob(g))return t.append(Xe(b,y,o),m(g)),!1;if(g&&!b&&typeof g=="object"){if(l.endsWith(y,"{}"))y=n?y:y.slice(0,-2),g=w(g,1);else if(l.isArray(g)&&Ds(g)||(l.isFileList(g)||l.endsWith(y,"[]"))&&(_=l.toArray(g)))return y=Qt(y),_.forEach(function(O,q){!(l.isUndefined(O)||O===null)&&t.append(a===!0?Xe([y],q,o):a===null?y:y+"[]",m(O))}),!1}return rt(g)?!0:(t.append(Xe(b,y,o),m(g)),!1)}const P=Object.assign(Ms,{defaultVisitor:k,convertValue:m,isVisitable:rt});function p(g,y,b=0){if(!l.isUndefined(g)){if(v(b),f.indexOf(g)!==-1)throw new Error("Circular reference detected in "+y.join("."));f.push(g),l.forEach(g,function(E,O){(!(l.isUndefined(E)||E===null)&&i.call(t,E,l.isString(O)?O.trim():O,y,P))===!0&&p(E,y?y.concat(O):[O],b+1)}),f.pop()}}if(!l.isObject(e))throw new TypeError("data must be an object");return p(e),t}function St(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(e).replace(/[!'()~]|%20/g,function(s){return t[s]})}function lt(e,t){this._pairs=[],e&&ze(e,this,t)}const er=lt.prototype;er.append=function(t,r){this._pairs.push([t,r])};er.toString=function(t){const r=t?s=>t.call(this,s,St):St;return this._pairs.map(function(n){return r(n[0])+"="+r(n[1])},"").join("&")};function Ns(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function tr(e,t,r){if(!t)return e;e=e||"";const s=l.isFunction(r)?{serialize:r}:r,n=l.getSafeProp(s,"encode")||Ns,i=l.getSafeProp(s,"serialize");let o;if(i?o=i(t,s):o=l.isURLSearchParams(t)?t.toString():new lt(t,s).toString(n),o){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}const Se=Symbol("internals");function rr(e){return e?e.length:0}function kt(e){if(e)for(;e.length&&e[e.length-1]===null;)e.pop()}function ke(e,t){const r=e.handlers,s=rr(r);r!==t.handlersRef?(t.handlersRef=r,t.handlerEntries.clear()):s!==t.handlersLength&&(s?t.handlerEntries.forEach(function(i,o){r[i.index]!==i.handler&&t.handlerEntries.delete(o)}):t.handlerEntries.clear()),t.handlersLength=s}class Et{constructor(){this.handlers=[],this[Se]={handlersRef:this.handlers,handlersLength:this.handlers.length,handlerEntries:new Map,iterationDepth:0,nextId:0}}use(t,r,s){const n={fulfilled:t,rejected:r,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null},i=this[Se];this.handlers==null&&(this.handlers=[]),ke(this,i);const o=i.nextId++;return this.handlers.push(n),i.handlerEntries.set(o,{handler:n,index:this.handlers.length-1}),i.handlersLength=this.handlers.length,o}eject(t){const r=this[Se];ke(this,r);const s=r.handlerEntries.get(t);if(s){if(r.handlerEntries.delete(t),this.handlers[s.index]!==s.handler)return;this.handlers[s.index]=null,r.iterationDepth||(kt(this.handlers),r.handlersLength=this.handlers.length)}}clear(){this.handlers&&(this.handlers=[],ke(this,this[Se]))}forEach(t){const r=this[Se];ke(this,r),r.iterationDepth++;try{l.forEach(this.handlers,function(n){n!==null&&t(n)})}finally{--r.iterationDepth||(ke(this,r),kt(this.handlers),r.handlersLength=rr(this.handlers))}}}const ct={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},js=typeof URLSearchParams<"u"?URLSearchParams:lt,Fs=typeof FormData<"u"?FormData:null,Us=typeof Blob<"u"?Blob:null,Hs={isBrowser:!0,classes:{URLSearchParams:js,FormData:Fs,Blob:Us},protocols:["http","https","file","blob","url","data"]},dt=typeof window<"u"&&typeof document<"u",st=typeof navigator=="object"&&navigator||void 0,Is=dt&&(!st||["ReactNative","NativeScript","NS"].indexOf(st.product)<0),zs=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Vs=dt&&window.location.href||"http://localhost",Ks=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:dt,hasStandardBrowserEnv:Is,hasStandardBrowserWebWorkerEnv:zs,navigator:st,origin:Vs},Symbol.toStringTag,{value:"Module"})),B={...Ks,...Hs};function Ws(e,t){return ze(e,new B.classes.URLSearchParams,{visitor:function(r,s,n,i){return B.isNode&&l.isBuffer(r)?(this.append(s,r.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...t})}const _t=Zt;function sr(e){if(e>_t)throw new h("FormData field is too deeply nested ("+e+" levels). Max depth: "+_t,h.ERR_FORM_DATA_DEPTH_EXCEEDED)}function Js(e){const t=[],r=/[^.[\]]+|\[([^.[\]]*)]/g;let s;for(;(s=r.exec(e))!==null;)sr(t.length),t.push(s[0]==="[]"?"":s[1]||s[0]);return t}function Gs(e){const t={},r=Object.keys(e);let s;const n=r.length;let i;for(s=0;s<n;s++)i=r[s],t[i]=e[i];return t}function nr(e){function t(r,s,n,i){sr(i);let o=r[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),c=i>=r.length;return o=!o&&l.isArray(n)?n.length:o,c?(l.hasOwnProp(n,o)?n[o]=l.isArray(n[o])?n[o].concat(s):[n[o],s]:n[o]=s,!a):((!l.hasOwnProp(n,o)||!l.isObject(n[o]))&&(n[o]=[]),t(r,s,n[o],i)&&l.isArray(n[o])&&(n[o]=Gs(n[o])),!a)}if(l.isFormData(e)&&l.isFunction(e.entries)){const r={};return l.forEachEntry(e,(s,n)=>{t(Js(s),n,r,0)}),r}return null}const ir=Object.freeze(["get","delete","head","options","post","put","patch","purge","link","unlink","query"]),me=(e,t)=>e!=null&&l.hasOwnProp(e,t)?e[t]:void 0;function Xs(e,t,r){if(l.isString(e))try{return(t||JSON.parse)(e),l.trim(e)}catch(s){if(s.name!=="SyntaxError")throw s}return(r||JSON.stringify)(e)}const Oe={transitional:ct,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const s=r.getContentType()||"",n=s.indexOf("application/json")>-1,i=l.isObject(t);if(i&&l.isHTMLForm(t)&&(t=new FormData(t)),l.isFormData(t))return n?JSON.stringify(nr(t)):t;if(l.isArrayBuffer(t)||l.isBuffer(t)||l.isStream(t)||l.isFile(t)||l.isBlob(t)||l.isReadableStream(t))return t;if(l.isArrayBufferView(t))return t.buffer;if(l.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(i){const c=me(this,"formSerializer");if(s.indexOf("application/x-www-form-urlencoded")>-1)return Ws(t,c).toString();if((a=l.isFileList(t))||s.indexOf("multipart/form-data")>-1){const d=me(this,"env"),u=d&&d.FormData;return ze(a?{"files[]":t}:t,u&&new u,c)}}return i||n?(r.setContentType("application/json",!1),Xs(t)):t}],transformResponse:[function(t){const r=me(this,"transitional")||Oe.transitional,s=r&&r.forcedJSONParsing,n=me(this,"responseType"),i=n==="json";if(l.isResponse(t)||l.isReadableStream(t))return t;if(t&&l.isString(t)&&(s&&!n||i)){const a=!(r&&r.silentJSONParsing)&&i;try{return JSON.parse(t,me(this,"parseReviver"))}catch(c){if(a)throw c.name==="SyntaxError"?h.from(c,h.ERR_BAD_RESPONSE,this,null,me(this,"response")):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:B.classes.FormData,Blob:B.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};l.forEach(ir,e=>{Oe.headers[e]={}});function Ye(e,t){const r=this||Oe,s=t||r,n=F.from(s.headers);let i=s.data;return l.forEach(e,function(a){i=a.call(r,i,n.normalize(),t?t.status:void 0)}),n.normalize(),i}function or(e){return!!(e&&e.__CANCEL__)}let Le=class extends h{constructor(t,r,s){super(t??"canceled",h.ERR_CANCELED,r,s),this.name="CanceledError",this.__CANCEL__=!0}};function ar(e,t,r){const s=r.config.validateStatus;!r.status||!s||s(r.status)?e(r):t(new h("Request failed with status code "+r.status,r.status>=400&&r.status<500?h.ERR_BAD_REQUEST:h.ERR_BAD_RESPONSE,r.config,r.request,r))}const Ys=/[\t\n\r]/g;function lr(e){if(typeof e!="string")return e;let t=0;for(;t<e.length&&e.charCodeAt(t)<=32;)t++;return e.slice(t).replace(Ys,"")}function Ze(e){const t=/^([-+\w]{1,25}):(?:\/\/)?/.exec(e);return t&&t[1]||""}function Zs(e,t){e=e||10;const r=new Array(e),s=new Array(e);let n=0,i=0,o;return t=t!==void 0?t:1e3,function(c){const d=Date.now(),u=s[i];o||(o=d),r[n]=c,s[n]=d;let f=i,m=0;for(;f!==n;)m+=r[f++],f=f%e;if(n=(n+1)%e,n===i&&(i=(i+1)%e),d-o<t)return;const v=u&&d-u;return v?Math.round(m*1e3/v):void 0}}function Qs(e,t){let r=0,s=1e3/t,n,i;const o=(u,f=Date.now())=>{r=f,n=null,i&&(clearTimeout(i),i=null),e(...u)};return[(...u)=>{const f=Date.now(),m=f-r;m>=s?o(u,f):(n=u,i||(i=setTimeout(()=>{i=null,o(n)},s-m)))},()=>n&&o(n),(...u)=>o(u)]}const He=(e,t,r=3)=>{let s=0;const n=Zs(50,250);return Qs(i=>{if(!i||!l.isNumber(i.loaded))return;const o=i.loaded,a=i.lengthComputable?i.total:void 0,c=Math.max(0,a!=null?Math.min(o,a):o),d=Math.max(0,c-s),u=n(d);s=Math.max(s,c);const f={loaded:c,total:a,progress:a?c/a:void 0,bytes:d,rate:u||void 0,estimated:u&&a?(a-c)/u:void 0,event:i,lengthComputable:a!=null,[t?"download":"upload"]:!0};e(f)},r)},Rt=(e,t)=>{const r=e!=null;return[s=>t[0]({lengthComputable:r,total:e,loaded:s}),t[1]]},At=(e,t=l.asap)=>(...r)=>t(()=>e(...r)),en=B.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,B.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(B.origin),B.navigator&&/(msie|trident)/i.test(B.navigator.userAgent)):()=>!0,tn=B.hasStandardBrowserEnv?{write(e,t,r,s,n,i,o){if(typeof document>"u")return;const a=[`${e}=${encodeURIComponent(t)}`];l.isNumber(r)&&a.push(`expires=${new Date(r).toUTCString()}`),l.isString(s)&&a.push(`path=${s}`),l.isString(n)&&a.push(`domain=${n}`),i===!0&&a.push("secure"),l.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.split(";");for(let r=0;r<t.length;r++){const s=t[r].replace(/^\s+/,""),n=s.indexOf("=");if(n!==-1&&s.slice(0,n)===e)try{return decodeURIComponent(s.slice(n+1))}catch{return s.slice(n+1)}}return null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function rn(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function sn(e,t){if(!t)return e;let r=e.length;for(;r>0&&e.charCodeAt(r-1)===47;)r--;return e.slice(0,r)+"/"+t.replace(/^\/+/,"")}const nn=/^https?:(?!\/\/)/i;function on(e){return e&&e.replace(/(^|&)([^=&]*=)?[^&]+/g,(t,r,s="")=>`${r}${s}${Ue}`)}function an(e){const t=e.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${Ue}@`),r=t.indexOf("#"),n=(r===-1?t:t.slice(0,r)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${Ue}`);return r===-1?n:`${n}#${on(t.slice(r+1))}`}function Pt(e,t){if(typeof e=="string"){const r=lr(e);if(nn.test(r))throw new h(`Invalid URL ${JSON.stringify(an(r))}: missing "//" after protocol`,h.ERR_INVALID_URL,t)}}function cr(e,t,r,s){Pt(t,s);let n=!rn(t);return e&&(n||r===!1)?(Pt(e,s),sn(e,t)):t}const Ot=e=>e instanceof F?{...e}:e,ln=e=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(e).concat(Object.getOwnPropertySymbols(e).filter(t=>Object.getOwnPropertyDescriptor(e,t).enumerable)):Object.keys(e);function pe(e,t){e=e||{},t=t||{};const r=Object.create(null);Object.defineProperty(r,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function s(u,f,m,v){return l.isPlainObject(u)&&l.isPlainObject(f)?l.merge.call({caseless:v},u,f):l.isPlainObject(f)?l.merge({},f):l.isArray(f)?f.slice():f}function n(u,f,m,v){if(l.isUndefined(f)){if(!l.isUndefined(u))return s(void 0,u,m,v)}else return s(u,f,m,v)}function i(u,f){if(!l.isUndefined(f))return s(void 0,f)}function o(u,f){if(l.isUndefined(f)){if(!l.isUndefined(u))return s(void 0,u)}else return s(void 0,f)}function a(u){const f=l.hasOwnProp(t,"transitional")?t.transitional:void 0;if(!l.isUndefined(f))if(l.isPlainObject(f)){if(l.hasOwnProp(f,u))return f[u]}else return;const m=l.hasOwnProp(e,"transitional")?e.transitional:void 0;if(l.isPlainObject(m)&&l.hasOwnProp(m,u))return m[u]}function c(u,f,m){if(l.hasOwnProp(t,m))return s(u,f);if(l.hasOwnProp(e,m))return s(void 0,u)}const d={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutErrorMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:c,headers:(u,f,m)=>n(Ot(u),Ot(f),m,!0)};return l.forEach(ln({...e,...t}),function(f){if(f==="__proto__"||f==="constructor"||f==="prototype")return;const m=l.hasOwnProp(d,f)?d[f]:n,v=l.hasOwnProp(e,f)?e[f]:void 0,w=l.hasOwnProp(t,f)?t[f]:void 0,k=m(v,w,f);l.isUndefined(k)&&m!==c||(r[f]=k)}),l.hasOwnProp(t,"validateStatus")&&l.isUndefined(t.validateStatus)&&a("validateStatusUndefinedResolves")===!1&&(l.hasOwnProp(e,"validateStatus")?r.validateStatus=s(void 0,e.validateStatus):delete r.validateStatus),r}const cn=["content-type","content-length"];function dn(e,t,r){if(r!=="content-only"){e.set(t);return}Object.entries(t||{}).forEach(([s,n])=>{cn.includes(s.toLowerCase())&&e.set(s,n)})}const un=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(t,r)=>String.fromCharCode(parseInt(r,16)));function dr(e){const t=pe({},e),r=m=>l.hasOwnProp(t,m)?t[m]:void 0,s=r("data");let n=r("withXSRFToken");const i=r("xsrfHeaderName"),o=r("xsrfCookieName");let a=r("headers");const c=r("auth"),d=r("baseURL"),u=r("allowAbsoluteUrls"),f=r("url");if(t.headers=a=F.from(a),t.url=tr(cr(d,f,u,t),r("params"),r("paramsSerializer")),c){const m=l.getSafeProp(c,"username")||"",v=l.getSafeProp(c,"password")||"";try{a.set("Authorization","Basic "+btoa(m+":"+(v?un(v):"")))}catch(w){throw h.from(w,h.ERR_BAD_OPTION_VALUE,e)}}if(l.isFormData(s)){const m=l.getSafeProp(s,"getHeaders");B.hasStandardBrowserEnv||B.hasStandardBrowserWebWorkerEnv||l.isReactNative(s)?a.setContentType(void 0):l.isFunction(m)&&dn(a,m.call(s),r("formDataHeaderPolicy"))}if(B.hasStandardBrowserEnv&&(l.isFunction(n)&&(n=n(t)),n===!0||n==null&&en(t.url))){const v=i&&o&&tn.read(o);v&&a.set(i,v)}return t}const pn=typeof XMLHttpRequest<"u",fn=pn&&function(e){return new Promise(function(r,s){const n=dr(e);let i=n.data;const o=F.from(n.headers).normalize();let{responseType:a,onUploadProgress:c,onDownloadProgress:d}=n,u,f,m,v,w,k;function P(){v&&v(),w&&w(),n.cancelToken&&n.cancelToken.unsubscribe(u),n.signal&&n.signal.removeEventListener("abort",u)}let p=new XMLHttpRequest;p.open(n.method.toUpperCase(),n.url,!0),p.timeout=n.timeout;function g(b){if(!p)return;if(p.status===0&&(Ze(lr(n.url))||Ze(B.origin))!=="file"&&!(p.responseURL&&p.responseURL.startsWith("file:"))){s(new h("Request aborted",h.ECONNABORTED,e,p)),P(),p=null;return}try{b?k&&k(b):w&&w()}catch(q){setTimeout(()=>{throw q})}if(!p)return;const _=F.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),O={data:!a||a==="text"||a==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:_,config:e,request:p};ar(function(M){r(M),P()},function(M){s(M),P()},O),p=null}"onloadend"in p?p.onloadend=g:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.startsWith("file:"))||setTimeout(g)},p.onabort=function(){p&&(s(new h("Request aborted",h.ECONNABORTED,e,p)),P(),p=null)},p.onerror=function(_){const E=_&&_.message?_.message:"Network Error",O=new h(E,h.ERR_NETWORK,e,p);O.event=_||null,s(O),P(),p=null},p.ontimeout=function(){let _=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const E=n.transitional||ct;n.timeoutErrorMessage&&(_=n.timeoutErrorMessage),s(new h(_,E.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,e,p)),P(),p=null},i===void 0&&o.setContentType(null),"setRequestHeader"in p&&l.forEach(Xt(o),function(_,E){p.setRequestHeader(E,_)}),l.isUndefined(n.withCredentials)||(p.withCredentials=!!n.withCredentials),a&&a!=="json"&&(p.responseType=n.responseType),d&&([m,w,k]=He(d,!0),p.addEventListener("progress",m)),c&&p.upload&&([f,v]=He(c),p.upload.addEventListener("progress",f),p.upload.addEventListener("loadend",v)),(n.cancelToken||n.signal)&&(u=b=>{p&&(s(!b||b.type?new Le(null,e,p):b),p.abort(),P(),p=null)},n.cancelToken&&n.cancelToken.subscribe(u),n.signal&&(n.signal.aborted?u():n.signal.addEventListener("abort",u)));const y=Ze(n.url);if(y&&!B.protocols.includes(y)){s(new h("Unsupported protocol "+y+":",h.ERR_BAD_REQUEST,e)),P();return}p.send(i||null)})},hn=(e,t)=>{if(e=e?e.filter(Boolean):[],!t&&!e.length)return;const r=new AbortController;let s=!1;const n=function(c){if(!s){s=!0,o();const d=c instanceof Error?c:this.reason;r.abort(d instanceof h?d:new Le(d instanceof Error?d.message:d))}};let i=t&&setTimeout(()=>{i=null,n(new h(`timeout of ${t}ms exceeded`,h.ETIMEDOUT))},t);const o=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(c=>{c.unsubscribe?c.unsubscribe(n):c.removeEventListener("abort",n)}),e=null)};e.forEach(c=>{if(!s){if(c.aborted){n.call(c);return}c.addEventListener("abort",n,{once:!0})}});const{signal:a}=r;return a.unsubscribe=()=>l.asap(o),a},mn=function*(e,t){let r=e.byteLength;if(r<t){yield e;return}let s=0,n;for(;s<r;)n=s+t,yield e.slice(s,n),s=n},gn=async function*(e,t){for await(const r of yn(e))yield*mn(r,t)},yn=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:r,value:s}=await t.read();if(r)break;yield s}}finally{await t.cancel()}},Lt=(e,t,r,s)=>{const n=gn(e,t);let i=0,o,a=c=>{o||(o=!0,s&&s(c))};return new ReadableStream({async pull(c){try{const{done:d,value:u}=await n.next();if(d){a(),c.close();return}let f=u.byteLength;if(r){let m=i+=f;r(m)}c.enqueue(new Uint8Array(u))}catch(d){throw a(d),d}},cancel(c){return a(c),n.return()}},{highWaterMark:2})},Ct=e=>e>=48&&e<=57||e>=65&&e<=70||e>=97&&e<=102,ur=(e,t,r)=>t+2<r&&Ct(e.charCodeAt(t+1))&&Ct(e.charCodeAt(t+2)),Tt=e=>e<=57?e-48:(e&223)-55,bn=e=>e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||e===43||e===47||e===45||e===95,vn=e=>e===9||e===10||e===12||e===13||e===32,xn=e=>{const t=Math.floor(e/4),r=e%4;return t*3+(r===2?1:r===3?2:0)},wn=e=>{const t=e.length;let r=0;return t>0&&e.charCodeAt(t-1)===61&&(r++,t>1&&e.charCodeAt(t-2)===61&&r++),Math.floor((t-r)*3/4)},Sn=e=>{const t=e.length;let r=0,s=0,n=!1;for(let i=0;i<t;i++){let o=e.charCodeAt(i);if(o===37&&ur(e,i,t)&&(o=Tt(e.charCodeAt(i+1))*16+Tt(e.charCodeAt(i+2)),i+=2),!vn(o)){if(o===61){s++;continue}if(!bn(o)||s>0){n=!0;continue}r++}}return n||s>2||s>0&&(r+s)%4!==0||r%4===1?wn(e):xn(r)},kn=(e,t)=>{if(!e||typeof e!="string"||!e.startsWith("data:"))return 0;const r=e.indexOf(",");if(r<0)return 0;const s=e.slice(5,r),n=e.slice(r+1);if(/;base64/i.test(s))return t(n);let o=0;for(let a=0,c=n.length;a<c;a++){const d=n.charCodeAt(a);if(d===37&&ur(n,a,c))o+=1,a+=2;else if(d<128)o+=1;else if(d<2048)o+=2;else if(d>=55296&&d<=56319&&a+1<c){const u=n.charCodeAt(a+1);u>=56320&&u<=57343?(o+=4,a++):o+=3}else o+=3}return o};function En(e){const t=typeof e=="string"?e.indexOf("#"):-1;return kn(t===-1?e:e.slice(0,t),Sn)}const ut="1.20.0",$t=64*1024,_n={cache:"default",redirect:"follow",referrer:"about:client",referrerPolicy:"",mode:"cors",integrity:"",keepalive:!1,priority:"auto",window:null},{isFunction:$e}=l,Rn=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(t,r)=>String.fromCharCode(parseInt(r,16))),qt=e=>{if(!l.isString(e))return e;try{return decodeURIComponent(e)}catch{return e}},Bt=(e,...t)=>{try{return!!e(...t)}catch{return!1}},An=e=>{const t=e.indexOf("://");let r=e;return t!==-1&&(r=r.slice(t+3)),r.includes("@")||r.includes(":")},Pn=e=>{const t=l.global!==void 0&&l.global!==null?l.global:globalThis,{ReadableStream:r,TextEncoder:s}=t;e=l.merge.call({skipUndefined:!0},{Request:t.Request,Response:t.Response},e);const{fetch:n,Request:i,Response:o}=e,a=n?$e(n):typeof fetch=="function",c=$e(i),d=$e(o);if(!a)return!1;const u=a&&$e(r),f=a&&(typeof s=="function"?(p=>g=>p.encode(g))(new s):async p=>new Uint8Array(await new i(p).arrayBuffer())),m=c&&u&&Bt(()=>{let p=!1;const g=new i(B.origin,{body:new r,method:"POST",get duplex(){return p=!0,"half"}}),y=g.headers.has("Content-Type");return g.body!=null&&g.body.cancel(),p&&!y}),v=d&&u&&Bt(()=>l.isReadableStream(new o("").body)),w={stream:v&&(p=>p.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(p=>{!w[p]&&(w[p]=(g,y)=>{let b=g&&g[p];if(b)return b.call(g);throw new h(`Response type '${p}' is not supported`,h.ERR_NOT_SUPPORT,y)})});const k=async p=>{if(p==null)return 0;if(l.isBlob(p))return p.size;if(l.isSpecCompliantForm(p))return(await new i(B.origin,{method:"POST",body:p}).arrayBuffer()).byteLength;if(l.isArrayBufferView(p)||l.isArrayBuffer(p))return p.byteLength;if(l.isURLSearchParams(p)&&(p=p+""),l.isString(p))return(await f(p)).byteLength},P=async(p,g)=>{const y=l.toFiniteNumber(p.getContentLength());return y??k(g)};return async p=>{let{url:g,method:y,data:b,signal:_,cancelToken:E,timeout:O,onDownloadProgress:q,onUploadProgress:M,responseType:U,headers:C,withCredentials:H="same-origin",fetchOptions:Y,maxContentLength:z,maxBodyLength:fe,maxRedirects:Ce}=dr(p);const be=l.isNumber(z)&&z>-1,Ke=l.isNumber(fe)&&fe>-1,Sr=L=>l.hasOwnProp(p,L)?p[L]:void 0;let ft=n||fetch;U=U?(U+"").toLowerCase():"text";let te=hn([_,E&&E.toAbortSignal()],O),D=null;const ie=te&&te.unsubscribe&&(()=>{te.unsubscribe()});let he,ve=null;const ht=()=>new h("Request body larger than maxBodyLength limit",h.ERR_BAD_REQUEST,p,D);try{let L;const K=Sr("auth");if(K){const x=l.getSafeProp(K,"username")||"",N=l.getSafeProp(K,"password")||"";L={username:x,password:N}}if(An(g)){const x=new URL(g,B.origin);if(!L&&(x.username||x.password)){const N=qt(x.username),re=qt(x.password);L={username:N,password:re}}(x.username||x.password)&&(x.username="",x.password="",g=x.href)}if(L&&(C.delete("authorization"),C.set("Authorization","Basic "+btoa(Rn((L.username||"")+":"+(L.password||""))))),be&&typeof g=="string"&&g.startsWith("data:")&&En(g)>z)throw new h("maxContentLength size of "+z+" exceeded",h.ERR_BAD_RESPONSE,p,D);if(Ke&&y!=="get"&&y!=="head"){const x=await k(b);if(typeof x=="number"&&isFinite(x)&&(he=x,x>fe))throw ht()}const Te=Ke&&(l.isReadableStream(b)||l.isStream(b)),mt=(x,N,re)=>Lt(x,$t,oe=>{if(Ke&&oe>fe)throw ve=ht();N&&N(oe)},re);if(m&&y!=="get"&&y!=="head"&&(M||Te)){if(he=he??await P(C,b),he!==0||Te){let x=new i(g,{method:"POST",body:b,duplex:"half"}),N;if(l.isFormData(b)&&(N=x.headers.get("content-type"))&&C.setContentType(N),x.body){const[re,oe]=M&&Rt(he,He(At(M)))||[];b=mt(x.body,re,oe)}}}else if(Te&&!c&&u&&y!=="get"&&y!=="head")b=mt(b);else if(Te&&c&&!m&&y!=="get"&&y!=="head")throw new h("Stream request bodies are not supported by the current fetch implementation",h.ERR_NOT_SUPPORT,p,D);l.isString(H)||(H=H?"include":"omit");const kr=c&&"credentials"in i.prototype;if(l.isFormData(b)){const x=C.getContentType();x&&/^multipart\/form-data/i.test(x)&&!/boundary=/i.test(x)&&C.delete("content-type")}C.set("User-Agent","axios/"+ut,!1);const X=Y==null?Y:Object.assign(Object.create(null),Y);X&&(delete X.body,delete X.headers,delete X.method,delete X.signal,delete X.duplex,delete X.credentials);const Z=Object.assign(Object.create(null),X,{signal:te,method:y.toUpperCase(),headers:Xt(C.normalize()),body:b,duplex:"half",credentials:kr?H:void 0});c&&(l.forEach(_n,(x,N)=>{Z[N]===void 0&&(Z[N]=x)}),Z.signal===void 0&&(Z.signal=null),Z.body===void 0&&(Z.body=null)),Ce===0&&(Z.redirect="manual",X&&(X.redirect="manual")),D=c&&new i(g,Z);let Q=await(c?ft(D,X):ft(g,Z));const gt=F.from(Q.headers);if(be){const x=l.toFiniteNumber(gt.getContentLength());if(x!=null&&x>z)throw new h("maxContentLength size of "+z+" exceeded",h.ERR_BAD_RESPONSE,p,D)}const We=v&&(U==="stream"||U==="response");if(v&&Q.body&&(q||be||We&&ie)){const x={};["status","statusText","headers"].forEach(xe=>{x[xe]=Q[xe]});const N=l.toFiniteNumber(gt.getContentLength()),[re,oe]=q&&Rt(N,He(At(q),!0))||[];let yt=0;const Er=xe=>{if(be&&(yt=xe,yt>z))throw new h("maxContentLength size of "+z+" exceeded",h.ERR_BAD_RESPONSE,p,D);re&&re(xe)};Q=new o(Lt(Q.body,$t,Er,()=>{oe&&oe(),ie&&ie()}),x)}U=U||"text";let ee=await w[l.findKey(w,U)||"text"](Q,p);if(be&&!v&&!We){let x;if(ee!=null&&(typeof ee.byteLength=="number"?x=ee.byteLength:typeof ee.size=="number"?x=ee.size:typeof ee=="string"&&(x=typeof s=="function"?new s().encode(ee).byteLength:ee.length)),typeof x=="number"&&x>z)throw new h("maxContentLength size of "+z+" exceeded",h.ERR_BAD_RESPONSE,p,D)}return!We&&ie&&ie(),await new Promise((x,N)=>{ar(x,N,{data:ee,headers:F.from(Q.headers),status:Q.status,statusText:Q.statusText,config:p,request:D})})}catch(L){if(ie&&ie(),te&&te.aborted&&te.reason instanceof h){const K=te.reason;throw K.config=p,D&&(K.request=D),L!==K&&Object.defineProperty(K,"cause",{__proto__:null,value:L,writable:!0,enumerable:!1,configurable:!0}),K}if(ve)throw D&&!ve.request&&(ve.request=D),ve;if(L instanceof h)throw D&&!L.request&&(L.request=D),L;if(L&&L.name==="TypeError"&&/Load failed|fetch/i.test(L.message)){const K=new h("Network Error",h.ERR_NETWORK,p,D,L&&L.response);throw Object.defineProperty(K,"cause",{__proto__:null,value:L.cause||L,writable:!0,enumerable:!1,configurable:!0}),K}throw h.from(L,L&&L.code,p,D,L&&L.response)}}},On=new Map,pr=e=>{let t=e&&e.env||{};const{fetch:r,Request:s,Response:n}=t,i=[s,n,r];let o=i.length,a=o,c,d,u=On;for(;a--;)c=i[a],d=u.get(c),d===void 0&&u.set(c,d=a?new Map:Pn(t)),u=d;return d};pr();const pt={http:Bs,xhr:fn,fetch:{get:pr}};l.forEach(pt,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{__proto__:null,value:t})}catch{}Object.defineProperty(e,"adapterName",{__proto__:null,value:t})}});const Dt=e=>`- ${e}`,Ln=e=>l.isFunction(e)||e===null||e===!1;function Cn(e,t){e=l.isArray(e)?e:[e];const{length:r}=e;let s,n;const i={};for(let o=0;o<r;o++){s=e[o];let a;if(n=s,!Ln(s)&&(n=pt[(a=String(s)).toLowerCase()],n===void 0))throw new h(`Unknown adapter '${a}'`);if(n&&(l.isFunction(n)||(n=n.get(t))))break;i[a||"#"+o]=n}if(!n){const o=Object.entries(i).map(([c,d])=>`adapter ${c} `+(d===!1?"is not supported by the environment":"is not available in the build"));let a=r?o.length>1?`since :
`+o.map(Dt).join(`
`):" "+Dt(o[0]):"as no adapter specified";throw new h("There is no suitable adapter to dispatch the request "+a,h.ERR_NOT_SUPPORT)}return n}const fr={getAdapter:Cn,adapters:pt};function Qe(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Le(null,e)}function et(e){const t=l.toSafeFlatObject(e);return Qe(t),t.headers=F.from(l.getSafeProp(t,"headers")),t.data=Ye.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),fr.getAdapter(t.adapter||Oe.adapter,t)(t).then(function(n){Qe(t),t.response=n;try{n.data=Ye.call(t,t.transformResponse,n)}finally{delete t.response}return n.headers=F.from(n.headers),n},function(n){if(!or(n)&&(Qe(t),n&&n.response)){t.response=n.response;try{n.response.data=Ye.call(t,t.transformResponse,n.response)}finally{delete t.response}n.response.headers=F.from(n.response.headers)}return Promise.reject(n)})}const Ve={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Ve[e]=function(s){return typeof s===e||"a"+(t<1?"n ":" ")+e}});const Mt={};Ve.transitional=function(t,r,s){function n(i,o){return"[Axios v"+ut+"] Transitional option '"+i+"'"+o+(s?". "+s:"")}return(i,o,a)=>{if(t===!1)throw new h(n(o," has been removed"+(r?" in "+r:"")),h.ERR_DEPRECATED);return r&&!Mt[o]&&(Mt[o]=!0,console.warn(n(o," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(i,o,a):!0}};Ve.spelling=function(t){return(r,s)=>(console.warn(`${s} is likely a misspelling of ${t}`),!0)};function Tn(e,t,r){if(typeof e!="object"||e===null)throw new h("options must be an object",h.ERR_BAD_OPTION_VALUE);const s=Object.keys(e);let n=s.length;for(;n-- >0;){const i=s[n],o=Object.prototype.hasOwnProperty.call(t,i)?t[i]:void 0;if(o){const a=e[i],c=a===void 0||o(a,i,e);if(c!==!0)throw new h("option "+i+" must be "+c,h.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new h("Unknown option "+i,h.ERR_BAD_OPTION)}}const Me={assertOptions:Tn,validators:Ve},j=Me.validators;let ce=class{constructor(t){this.defaults=t||{},this.interceptors={request:new Et,response:new Et}}async request(t,r){try{return await this._request(t,r)}catch(s){if(s instanceof Error)try{let n={};Error.captureStackTrace?Error.captureStackTrace(n):n=new Error;const i=n.stack;let o="";if(typeof i=="string"){const a=i.indexOf(`
`);o=a===-1?"":i.slice(a+1)}if(!s.stack)s.stack=o;else if(o){const a=o.indexOf(`
`),c=a===-1?-1:o.indexOf(`
`,a+1),d=c===-1?"":o.slice(c+1);String(s.stack).endsWith(d)||(s.stack+=`
`+o)}}catch{}throw s}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=pe(this.defaults,r);const{transitional:s,paramsSerializer:n,headers:i}=r;s!==void 0&&Me.assertOptions(s,{silentJSONParsing:j.transitional(j.boolean),forcedJSONParsing:j.transitional(j.boolean),clarifyTimeoutError:j.transitional(j.boolean),legacyInterceptorReqResOrdering:j.transitional(j.boolean),advertiseZstdAcceptEncoding:j.transitional(j.boolean),validateStatusUndefinedResolves:j.transitional(j.boolean)},!1),n!=null&&(l.isFunction(n)?r.paramsSerializer={serialize:n}:Me.assertOptions(n,{encode:j.function,serialize:j.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),Me.assertOptions(r,{baseUrl:j.spelling("baseURL"),withXsrfToken:j.spelling("withXSRFToken")},!0),r.method=(l.getSafeProp(r,"method")||l.getSafeProp(this.defaults,"method")||"get").toLowerCase();let o=i&&l.merge(i.common,i[r.method]);i&&l.forEach(ir.concat("common"),w=>{delete i[w]}),r.headers=F.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(k){if(typeof k.runWhen=="function"&&k.runWhen(r)===!1)return;c=c&&k.synchronous;const P=r.transitional||ct;P&&P.legacyInterceptorReqResOrdering?a.unshift(k.fulfilled,k.rejected):a.push(k.fulfilled,k.rejected)});const d=[];this.interceptors.response.forEach(function(k){d.push(k.fulfilled,k.rejected)});let u,f=0,m;if(!c){const w=[et.bind(this),void 0];for(w.unshift(...a),w.push(...d),m=w.length,u=Promise.resolve(r);f<m;)u=u.then(w[f++],w[f++]);return u}m=a.length;let v=r;for(;f<m;){const w=a[f++],k=a[f++];try{v=w?w(v):v}catch(P){if(!k){u=Promise.reject(P);break}try{const p=k.call(this,P);l.isThenable(p)&&(u=Promise.resolve(p).then(()=>et.call(this,v)))}catch(p){u=Promise.reject(p)}break}}if(!u)try{u=et.call(this,v)}catch(w){u=Promise.reject(w)}for(f=0,m=d.length;f<m;)u=u.then(d[f++],d[f++]);return u}getUri(t){t=pe(this.defaults,t);const r=cr(t.baseURL,t.url,t.allowAbsoluteUrls,t);return tr(r,t.params,t.paramsSerializer)}};l.forEach(["delete","get","head","options"],function(t){ce.prototype[t]=function(r,s){return this.request(pe(s||{},{method:t,url:r,data:s&&l.hasOwnProp(s,"data")?s.data:void 0}))}});l.forEach(["post","put","patch","query"],function(t){function r(s){return function(i,o,a){return this.request(pe(a||{},{method:t,headers:s?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}ce.prototype[t]=r(),t!=="query"&&(ce.prototype[t+"Form"]=r(!0))});let $n=class hr{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(i){r=i});const s=this;this.promise.then(n=>{if(!s._listeners)return;let i=s._listeners.length;for(;i-- >0;)s._listeners[i](n);s._listeners=null}),this.promise.then=n=>{let i;const o=new Promise(a=>{s.subscribe(a),i=a}).then(n);return o.cancel=function(){s.unsubscribe(i)},o},t(function(i,o,a){s.reason||(s.reason=new Le(i,o,a),r(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const t=new AbortController,r=s=>{t.abort(s)};return this.subscribe(r),t.signal.unsubscribe=()=>this.unsubscribe(r),t.signal}static source(){let t;return{token:new hr(function(n){t=n}),cancel:t}}};function qn(e){return function(r){return e.apply(null,r)}}function Bn(e){return l.isObject(e)&&e.isAxiosError===!0}const Ne={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,ContentTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,UnprocessableContent:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Ne).forEach(([e,t])=>{Ne[t]===void 0&&(Ne[t]=e)});function mr(e){const t=new ce(e),r=jt(ce.prototype.request,t);return l.extend(r,ce.prototype,t,{allOwnKeys:!0}),l.extend(r,t,null,{allOwnKeys:!0}),r.create=function(n){return mr(pe(e,n))},r}const T=mr(Oe);T.Axios=ce;T.CanceledError=Le;T.CancelToken=$n;T.isCancel=or;T.VERSION=ut;T.toFormData=ze;T.AxiosError=h;T.Cancel=T.CanceledError;T.all=function(t){return Promise.all(t)};T.spread=qn;T.isAxiosError=Bn;T.mergeConfig=pe;T.AxiosHeaders=F;T.formToJSON=e=>nr(l.isHTMLForm(e)?new FormData(e):e);T.getAdapter=fr.getAdapter;T.HttpStatusCode=Ne;T.default=T;const{Axios:Kn,AxiosError:Wn,CanceledError:Jn,isCancel:Gn,CancelToken:Xn,VERSION:Yn,all:Zn,Cancel:Qn,isAxiosError:ei,spread:ti,toFormData:ri,AxiosHeaders:si,HttpStatusCode:ni,formToJSON:ii,getAdapter:oi,mergeConfig:ai,create:li}=T;window.axios=T;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";const $=T.create({baseURL:"/api",headers:{Accept:"application/json","Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"}});$.interceptors.request.use(e=>{const t=localStorage.getItem("habeshahomes_token");return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e));$.interceptors.response.use(e=>e,e=>{e.response&&e.response.status===401&&(localStorage.removeItem("habeshahomes_token"),localStorage.removeItem("habeshahomes_user"),window.dispatchEvent(new CustomEvent("auth:updated",{detail:{user:null}})));let t="An unexpected error occurred.";if(e.response&&e.response.data){if(e.response.data.message)t=e.response.data.message;else if(e.response.data.errors){const r=Object.keys(e.response.data.errors)[0];t=e.response.data.errors[r][0]}}return e.friendlyMessage=t,Promise.reject(e)});class Dn{constructor(){this.token=localStorage.getItem("habeshahomes_token")||null,this.user=JSON.parse(localStorage.getItem("habeshahomes_user")||"null"),this.currency=localStorage.getItem("habeshahomes_currency")||"ETB",this.listeners=[]}subscribe(t){return this.listeners.push(t),()=>{this.listeners=this.listeners.filter(r=>r!==t)}}notify(){this.listeners.forEach(t=>t(this))}isLoggedIn(){return!!this.token&&!!this.user}isAgent(){return this.user&&(this.user.user_type==="agent"||this.user.user_type==="landlord"||this.user.user_type==="admin")}isAdmin(){return this.user&&this.user.user_type==="admin"}async login(t,r){const s=await $.post("/auth/login",{email:t,password:r,device_name:"web_browser"});return this.token=s.data.token,this.user=s.data.user,localStorage.setItem("habeshahomes_token",this.token),localStorage.setItem("habeshahomes_user",JSON.stringify(this.user)),this.notify(),s.data}async register(t){const r=await $.post("/auth/register",{...t,device_name:"web_browser"});return this.token=r.data.token,this.user=r.data.user,localStorage.setItem("habeshahomes_token",this.token),localStorage.setItem("habeshahomes_user",JSON.stringify(this.user)),this.notify(),r.data}async logout(){try{this.token&&await $.post("/auth/logout")}catch(t){console.warn("Logout API warning:",t)}finally{this.token=null,this.user=null,localStorage.removeItem("habeshahomes_token"),localStorage.removeItem("habeshahomes_user"),this.notify()}}async fetchMe(){if(!this.token)return null;try{const t=await $.get("/auth/me");return this.user=t.data.user,localStorage.setItem("habeshahomes_user",JSON.stringify(this.user)),this.notify(),this.user}catch{return this.token=null,this.user=null,localStorage.removeItem("habeshahomes_token"),localStorage.removeItem("habeshahomes_user"),this.notify(),null}}setCurrency(t){this.currency=t,localStorage.setItem("habeshahomes_currency",t),this.notify()}formatPrice(t,r="ETB"){const s=parseFloat(t)||0,n=125;if(this.currency==="USD"){const i=r==="USD"?s:s/n;return`$${Math.round(i).toLocaleString()}`}else{const i=r==="ETB"?s:s*n;return`${Math.round(i).toLocaleString()} ETB`}}}const A=new Dn;function V(e,t="info",r=4e3){let s=document.getElementById("toast-container");s||(s=document.createElement("div"),s.id="toast-container",document.body.appendChild(s));const n=document.createElement("div");n.className=`toast toast-${t}`;let i="ℹ️";t==="success"&&(i="✓"),t==="error"&&(i="✕"),n.innerHTML=`
        <span style="font-weight: 700; color: ${t==="success"?"var(--emerald-500)":t==="error"?"var(--coral-500)":"var(--indigo-500)"};">${i}</span>
        <div style="flex: 1;">${e}</div>
    `,s.appendChild(n),setTimeout(()=>{n.style.opacity="0",n.style.transform="translateX(100%)",n.style.transition="all 0.3s ease",setTimeout(()=>n.remove(),300)},r)}let R=null;function gr(){if(document.getElementById("auth-modal"))return;R=document.createElement("div"),R.id="auth-modal",R.className="modal-overlay",R.innerHTML=`
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
    `,document.body.appendChild(R),R.querySelector("#auth-close-btn").addEventListener("click",qe),R.addEventListener("click",t=>{t.target===R&&qe()}),R.querySelectorAll(".auth-tab").forEach(t=>{t.addEventListener("click",()=>{const r=t.getAttribute("data-tab");yr(r)})}),R.querySelector("#form-login").addEventListener("submit",async t=>{t.preventDefault();const r=R.querySelector("#login-submit-btn"),s=R.querySelector("#login-email").value.trim(),n=R.querySelector("#login-password").value;ae(null),r.disabled=!0,r.textContent="Signing in...";try{await A.login(s,n),V("Signed in successfully!","success"),qe()}catch(i){ae(i.friendlyMessage||"Failed to sign in. Please verify your credentials.")}finally{r.disabled=!1,r.textContent="Sign In"}}),R.querySelector("#form-register").addEventListener("submit",async t=>{t.preventDefault();const r=R.querySelector("#reg-submit-btn"),s=R.querySelector("#reg-name").value.trim(),n=R.querySelector("#reg-email").value.trim(),i=R.querySelector("#reg-phone").value.trim(),o=R.querySelector("#reg-type").value,a=R.querySelector("#reg-password").value,c=R.querySelector("#reg-password-confirm").value;if(a!==c){ae("Passwords do not match.");return}ae(null),r.disabled=!0,r.textContent="Creating account...";try{await A.register({name:s,email:n,phone:i,user_type:o,password:a,password_confirmation:c}),V("Account created successfully! Welcome to HabeshaHomes.","success"),qe()}catch(d){ae(d.friendlyMessage||"Registration failed. Please check your details.")}finally{r.disabled=!1,r.textContent="Create Account"}})}function ae(e){const t=R.querySelector("#auth-error-box");e?(t.style.display="block",t.textContent=e):(t.style.display="none",t.textContent="")}function Re(e="login",t=null){gr(),yr(e),t&&R.querySelector("#reg-type")&&(R.querySelector("#reg-type").value=t),R.classList.add("open")}function qe(){R&&(R.classList.remove("open"),ae(null))}function yr(e){if(!R)return;const t=R.querySelectorAll(".auth-tab"),r=R.querySelector("#form-login"),s=R.querySelector("#form-register"),n=R.querySelector("#auth-modal-title");t.forEach(i=>i.classList.remove("active")),R.querySelector(`[data-tab="${e}"]`).classList.add("active"),e==="login"?(r.style.display="flex",s.style.display="none",n.textContent="Sign In to HabeshaHomes"):(r.style.display="none",s.style.display="flex",n.textContent="Create HabeshaHomes Account"),ae(null)}const S={logo:`<svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="10" fill="#0f172a"/>
        <rect x="0.5" y="0.5" width="35" height="35" rx="9.5" stroke="#1e293b"/>
        <path d="M18 7L8 15V28H14V21H22V28H28V15L18 7Z" fill="url(#logo_emerald)" stroke="#10b981" stroke-width="1.75" stroke-linejoin="round"/>
        <path d="M18 11.5L24 16.2V25H21V19H15V25H12V16.2L18 11.5Z" fill="#1e293b" opacity="0.6"/>
        <circle cx="18" cy="14" r="2" fill="#f59e0b"/>
        <path d="M18 6L18 8.5" stroke="#f59e0b" stroke-width="1.5" stroke-linecap="round"/>
        <defs>
            <linearGradient id="logo_emerald" x1="8" y1="7" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop stop-color="#10b981" stop-opacity="0.35"/>
                <stop offset="1" stop-color="#059669" stop-opacity="0.08"/>
            </linearGradient>
        </defs>
    </svg>`,bed:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>',bath:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-1C4.67 2.5 4 3.17 4 4v7h16V4c0-.83-.67-1.5-1.5-1.5a1.5 1.5 0 0 0-1 1L15 6"/><path d="M4 11v4a6 6 0 0 0 6 6h4a6 6 0 0 0 6-6v-4"/><path d="M6 19v2"/><path d="M18 19v2"/></svg>',area:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 3H3v18h18V3z"/><path d="M21 9H9v12"/><path d="M9 3v6"/></svg>',pin:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',user:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>',userCircle:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/></svg>',shield:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',document:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>',zap:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',suitcase:'<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--emerald-500)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',building:'<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/></svg>',home:'<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--emerald-500)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',check:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',badgeVerified:'<svg width="18" height="18" viewBox="0 0 24 24" fill="#10b981"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>',calendar:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',phone:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',mail:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',logout:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',search:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',plus:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',trash:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',edit:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',lock:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>'};function br(e){const t=e.featured_image||(e.images&&e.images.length>0?e.images[0].large_path||e.images[0].image_url:null)||"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80";let r="badge-rent",s="For Rent";e.listing_type==="holiday_let"?(r="badge-holiday",s="Holiday Stay"):e.listing_type==="sale"&&(r="badge-sale",s="For Sale");const n=A.formatPrice(e.price,e.currency||"ETB"),i=e.listing_type==="holiday_let"?"/ night":e.listing_type==="rent"?"/ month":"";return`
        <div class="card-property" data-id="${e.id}">
            <div class="card-media">
                <img src="${t}" alt="${e.title}" loading="lazy">
                <div class="card-badge-top">
                    <span class="badge ${r}">${s}</span>
                    ${e.is_featured?'<span class="badge" style="background: rgba(245, 158, 11, 0.2); color: var(--gold-500); border: 1px solid var(--border-gold); margin-left: 4px;">Featured</span>':""}
                </div>
                <div class="card-price-overlay">
                    <span class="card-price">${n}</span>
                    <span style="font-size: 0.75rem; color: var(--text-secondary);">${i}</span>
                </div>
            </div>
            <div class="card-body">
                <h3 class="card-title" title="${e.title}">${e.title}</h3>
                <div class="card-location">
                    <span style="color: var(--emerald-500); display: inline-flex;">${S.pin}</span>
                    <span>${e.sub_city?e.sub_city+", ":""}${e.city}</span>
                </div>
                <div class="card-specs">
                    ${e.bedrooms?`
                        <div class="spec-item">
                            <span style="color: var(--text-muted); display: inline-flex;">${S.bed}</span>
                            <span>${e.bedrooms} Beds</span>
                        </div>
                    `:""}
                    ${e.bathrooms?`
                        <div class="spec-item">
                            <span style="color: var(--text-muted); display: inline-flex;">${S.bath}</span>
                            <span>${e.bathrooms} Baths</span>
                        </div>
                    `:""}
                    ${e.square_meters?`
                        <div class="spec-item">
                            <span style="color: var(--text-muted); display: inline-flex;">${S.area}</span>
                            <span>${e.square_meters} m²</span>
                        </div>
                    `:""}
                </div>
            </div>
        </div>
    `}async function Mn(e){e.innerHTML=`
        <!-- Hero Section -->
        <section class="hero">
            <div class="container">
                <div class="hero-tag">
                    <span style="display: inline-flex; align-items: center;">${S.badgeVerified}</span>
                    <span>Verified Real Estate Network of Ethiopia</span>
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
                    <div class="detail-card text-center" style="padding: 32px 24px;">
                        <div style="margin: 0 auto 16px; display: inline-flex; align-items: center; justify-content: center; width: 56px; height: 56px; border-radius: 50%; background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.25);">
                            ${S.shield}
                        </div>
                        <h3 class="mb-2">Escrow-Backed Payments</h3>
                        <p>Funds are secured safely until check-in or lease agreement verification via Chapa and TeleBirr.</p>
                    </div>
                    <div class="detail-card text-center" style="padding: 32px 24px;">
                        <div style="margin: 0 auto 16px; display: inline-flex; align-items: center; justify-content: center; width: 56px; height: 56px; border-radius: 50%; background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.25);">
                            ${S.document}
                        </div>
                        <h3 class="mb-2">100% Verified Titles</h3>
                        <p>Every long-term listing and sale contract has verified ownership documents to protect buyers.</p>
                    </div>
                    <div class="detail-card text-center" style="padding: 32px 24px;">
                        <div style="margin: 0 auto 16px; display: inline-flex; align-items: center; justify-content: center; width: 56px; height: 56px; border-radius: 50%; background: rgba(99, 102, 241, 0.1); border: 1px solid rgba(99, 102, 241, 0.25);">
                            ${S.zap}
                        </div>
                        <h3 class="mb-2">Instant Stays & Concierge</h3>
                        <p>Holiday lets come furnished with high-speed WiFi, backup power generator, and water reservoirs.</p>
                    </div>
                </div>
            </div>
        </section>
    `;let t="";const r=e.querySelectorAll(".search-tab");r.forEach(i=>{i.addEventListener("click",()=>{r.forEach(o=>o.classList.remove("active")),i.classList.add("active"),t=i.getAttribute("data-type")})}),e.querySelector("#hero-search-form").addEventListener("submit",i=>{i.preventDefault();const o=e.querySelector("#hero-subcity").value,a=e.querySelector("#hero-proptype").value,c=e.querySelector("#hero-minprice").value,d=e.querySelector("#hero-maxprice").value,u=new URLSearchParams;t&&u.set("listing_type",t),o&&u.set("sub_city",o),a&&u.set("property_type",a),c&&u.set("min_price",c),d&&u.set("max_price",d),se(`/properties?${u.toString()}`)}),e.querySelectorAll("[data-filter-subcity]").forEach(i=>{i.addEventListener("click",()=>{const o=i.getAttribute("data-filter-subcity");se(`/properties?sub_city=${encodeURIComponent(o)}`)})});const n=e.querySelector("#featured-listings-grid");try{const o=(await $.get("/properties?featured=1&per_page=6")).data.data||[];o.length===0?n.innerHTML=`
                <div style="grid-column: 1 / -1; padding: 30px; text-align: center; color: var(--text-muted);">
                    No featured properties currently active. Explore all properties below.
                </div>
            `:(n.innerHTML=o.map(a=>br(a)).join(""),n.querySelectorAll(".card-property").forEach(a=>{a.addEventListener("click",()=>{const c=a.getAttribute("data-id");se(`/properties/${c}`)})}))}catch{n.innerHTML=`
            <div style="grid-column: 1 / -1; padding: 20px; text-align: center; color: var(--coral-500);">
                Could not load featured properties. Please try again.
            </div>
        `}}async function Nn(e,t={}){const r=new URLSearchParams(window.location.search);e.innerHTML=`
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
    `;const s=document.createElement("style");s.textContent=`
        @media (max-width: 900px) {
            .properties-layout { grid-template-columns: 1fr !important; }
        }
    `,e.appendChild(s);async function n(i=1){const o=e.querySelector("#properties-grid"),a=e.querySelector("#results-count-text"),c=e.querySelector("#pagination-controls");o.innerHTML=`
            <div style="grid-column: 1 / -1; padding: 60px; text-align: center; color: var(--text-muted);">
                Searching verified listings...
            </div>
        `;const d=new URLSearchParams,u=e.querySelector("#filter-q").value.trim(),f=e.querySelector("#filter-listing-type").value,m=e.querySelector("#filter-subcity").value,v=e.querySelector("#filter-proptype").value,w=e.querySelector("#filter-minprice").value,k=e.querySelector("#filter-maxprice").value,P=e.querySelector("#filter-beds").value,p=e.querySelector("#filter-baths").value,g=e.querySelector("#filter-furnished").checked,y=e.querySelector("#sort-selector").value;if(u&&d.set("q",u),f&&d.set("listing_type",f),m&&d.set("sub_city",m),v&&d.set("property_type",v),w&&d.set("min_price",w),k&&d.set("max_price",k),P&&d.set("bedrooms",P),p&&d.set("bathrooms",p),g&&d.set("is_furnished","1"),y){const[_,E]=y.split(":");d.set("sort_by",_),d.set("sort_order",E)}d.set("page",i),d.set("per_page",12);const b=`${window.location.pathname}?${d.toString()}`;window.history.replaceState({},"",b);try{const _=u?`/search?${d.toString()}`:`/properties?${d.toString()}`,O=(await $.get(_)).data,q=O.data||[],M=O.meta||{total:q.length,last_page:1};if(a.textContent=`Showing ${q.length} of ${M.total||q.length} luxury listings`,q.length===0){o.innerHTML=`
                    <div style="grid-column: 1 / -1; padding: 60px; text-align: center; color: var(--text-muted); background: var(--bg-card); border-radius: var(--radius-lg);">
                        <div style="margin: 0 auto 16px; display: inline-flex; align-items: center; justify-content: center; width: 64px; height: 64px; border-radius: 50%; background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.25);">
                            ${S.home}
                        </div>
                        <h3>No Properties Found</h3>
                        <p class="mt-2">Try adjusting your filters, price range, or search keyword.</p>
                    </div>
                `,c.innerHTML="";return}o.innerHTML=q.map(C=>br(C)).join(""),o.querySelectorAll(".card-property").forEach(C=>{C.addEventListener("click",()=>{const H=C.getAttribute("data-id");se(`/properties/${H}`)})});const U=M.last_page||1;if(U>1){let C="";i>1&&(C+='<button class="btn btn-secondary btn-sm" id="page-prev">← Prev</button>'),C+=`<span style="font-size: 0.85rem; color: var(--text-secondary);">Page ${i} of ${U}</span>`,i<U&&(C+='<button class="btn btn-secondary btn-sm" id="page-next">Next →</button>'),c.innerHTML=C;const H=c.querySelector("#page-prev");H&&H.addEventListener("click",()=>n(i-1));const Y=c.querySelector("#page-next");Y&&Y.addEventListener("click",()=>n(i+1))}else c.innerHTML=""}catch{o.innerHTML=`
                <div style="grid-column: 1 / -1; padding: 40px; text-align: center; color: var(--coral-500);">
                    Error retrieving properties. Please try again.
                </div>
            `}}e.querySelector("#filter-form").addEventListener("submit",i=>{i.preventDefault(),n(1)}),e.querySelector("#sort-selector").addEventListener("change",()=>{n(1)}),e.querySelector("#btn-reset-filters").addEventListener("click",i=>{i.preventDefault(),e.querySelector("#filter-form").reset(),n(1)}),await n(1)}async function jn(e,t){e.innerHTML=`
        <div class="container" style="padding-top: 40px; padding-bottom: 80px;">
            <div id="prop-detail-loading" style="padding: 100px; text-align: center; color: var(--text-muted);">
                Loading luxury property specifications...
            </div>
            <div id="prop-detail-content" style="display: none;"></div>
        </div>
    `;try{const r=await $.get(`/properties/${t}`),s=r.data.data||r.data;Fn(e,s)}catch(r){e.querySelector("#prop-detail-loading").innerHTML=`
            <div style="color: var(--coral-500); text-align: center; padding: 40px;">
                <h3>Property Not Found</h3>
                <p class="mt-2">${r.friendlyMessage||"The requested property could not be loaded or is no longer published."}</p>
                <a href="/properties" class="btn btn-outline btn-sm mt-4" data-link>← Back to All Properties</a>
            </div>
        `}}function Fn(e,t){var v,w,k,P,p,g;e.querySelector("#prop-detail-loading").style.display="none";const r=e.querySelector("#prop-detail-content");r.style.display="block";const s=t.images&&t.images.length>0?t.images:[{image_url:t.featured_image||"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"},{image_url:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"},{image_url:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80"}],n=((v=s[0])==null?void 0:v.large_path)||((w=s[0])==null?void 0:w.image_url),i=((k=s[1])==null?void 0:k.medium_path)||((P=s[1])==null?void 0:P.image_url)||n,o=((p=s[2])==null?void 0:p.medium_path)||((g=s[2])==null?void 0:g.image_url)||n,a=t.listing_type==="holiday_let",c=t.listing_type==="rent";t.listing_type;const d=A.formatPrice(t.price,t.currency||"ETB"),u=a?"/ night":c?"/ month":"",f=t.amenities||["High-Speed WiFi","Backup Diesel Generator","2,000L Water Reservoir","24/7 Gated Security","Dedicated Parking","Elevator Access"];r.innerHTML=`
        <!-- Breadcrumb & Back -->
        <div class="mb-4">
            <a href="/properties" class="btn btn-outline btn-sm" data-link style="padding: 4px 12px; font-size: 0.8rem;">← Back to Listings</a>
        </div>

        <!-- Property Title & Badges -->
        <div class="flex justify-between items-center mb-4 flex-wrap gap-3">
            <div>
                <h1 style="font-size: clamp(1.8rem, 3vw, 2.5rem);">${t.title}</h1>
                <div class="card-location mt-2" style="font-size: 0.95rem;">
                    <span style="color: var(--emerald-500); display: inline-flex;">${S.pin}</span>
                    <span>${t.address?t.address+", ":""}${t.sub_city?t.sub_city+", ":""}${t.city}, Ethiopia</span>
                </div>
            </div>
            <div class="flex items-center gap-2">
                <span class="badge ${a?"badge-holiday":c?"badge-rent":"badge-sale"}" style="font-size: 0.85rem; padding: 6px 14px;">
                    ${a?"Holiday Stay":c?"For Rent":"For Sale"}
                </span>
                <span class="badge badge-verified" style="font-size: 0.85rem; padding: 6px 14px;">
                    <span style="display: inline-flex;">${S.check}</span> Verified Title
                </span>
            </div>
        </div>

        <!-- Gallery Showcase -->
        <div class="property-gallery">
            <div class="gallery-main">
                <img id="active-gallery-img" src="${n}" alt="${t.title}">
            </div>
            <div class="gallery-thumbs">
                <img class="thumb-img" src="${i}" alt="Photo 2" style="cursor: pointer;">
                <img class="thumb-img" src="${o}" alt="Photo 3" style="cursor: pointer;">
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
                        <div style="font-size: 0.8rem; color: var(--text-muted); display: flex; align-items: center; justify-content: center; gap: 4px;">
                            ${S.bed} Bedrooms
                        </div>
                    </div>
                    <div class="text-center">
                        <div style="font-size: 1.2rem; font-weight: 700;">${t.bathrooms||"—"}</div>
                        <div style="font-size: 0.8rem; color: var(--text-muted); display: flex; align-items: center; justify-content: center; gap: 4px;">
                            ${S.bath} Bathrooms
                        </div>
                    </div>
                    <div class="text-center">
                        <div style="font-size: 1.2rem; font-weight: 700;">${t.square_meters?t.square_meters+" m²":"—"}</div>
                        <div style="font-size: 0.8rem; color: var(--text-muted); display: flex; align-items: center; justify-content: center; gap: 4px;">
                            ${S.area} Living Area
                        </div>
                    </div>
                    <div class="text-center">
                        <div style="font-size: 1.2rem; font-weight: 700;">${t.is_furnished?"Furnished":"Unfurnished"}</div>
                        <div style="font-size: 0.8rem; color: var(--text-muted); display: flex; align-items: center; justify-content: center; gap: 4px;">
                            ${S.building} Furnishing
                        </div>
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
                        ${f.map(y=>`
                            <div class="amenity-chip">
                                <span style="display: inline-flex;">${S.check}</span>
                                <span>${y}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>

                <!-- Host & Agent Card -->
                <div class="detail-card mb-6">
                    <h3>Listed by Verified Agent</h3>
                    <div class="flex items-center gap-4 mt-4">
                        <div style="width: 54px; height: 54px; border-radius: 50%; background: var(--bg-surface); display: flex; align-items: center; justify-content: center; border: 2px solid var(--emerald-500); color: var(--emerald-500);">
                            ${S.user}
                        </div>
                        <div>
                            <h4 style="margin-bottom: 2px;">${t.user?t.user.name:"HabeshaHomes Concierge"}</h4>
                            <p style="font-size: 0.85rem; color: var(--emerald-500); display: flex; align-items: center; gap: 4px;">
                                ${S.check} Verified Real Estate Partner
                            </p>
                            ${t.user&&t.user.phone?`
                                <p style="font-size: 0.85rem; color: var(--text-muted); display: flex; align-items: center; gap: 4px; margin-top: 2px;">
                                    ${S.phone} ${t.user.phone}
                                </p>
                            `:""}
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
    `;const m=r.querySelector("#active-gallery-img");if(r.querySelectorAll(".thumb-img").forEach(y=>{y.addEventListener("click",()=>{const b=m.src;m.src=y.src,y.src=b})}),a){const y=r.querySelector("#date-checkin"),b=r.querySelector("#date-checkout"),_=r.querySelector("#btn-reserve-stay"),E=r.querySelector("#availability-status"),O=r.querySelector("#pricing-calculator"),q=new Date().toISOString().split("T")[0];y.min=q;let M=0;async function U(){const C=y.value,H=b.value;if(!(!C||!H)){if(new Date(H)<=new Date(C)){E.style.display="block",E.style.background="rgba(239, 68, 68, 0.15)",E.style.color="#fca5a5",E.textContent="Check-out date must be after check-in date.",_.disabled=!0,O.style.display="none";return}E.style.display="block",E.style.background="var(--bg-input)",E.style.color="var(--text-secondary)",E.textContent="Checking calendar availability...";try{const Y=await $.get(`/properties/${t.id}/availability`,{params:{check_in:C,check_out:H}});if(Y.data.available){E.style.background="rgba(16, 185, 129, 0.15)",E.style.color="var(--emerald-500)",E.innerHTML=`<span style="display: inline-flex; vertical-align: middle; margin-right: 4px;">${S.check}</span> Dates are available for booking!`,M=Y.data.estimated_price;const z=Math.round(M*.05),fe=M+z,Ce=Math.max(1,Math.round((new Date(H)-new Date(C))/(1e3*60*60*24)));r.querySelector("#calc-nights-text").textContent=`${A.formatPrice(t.price,t.currency)} × ${Ce} ${Ce===1?"night":"nights"}`,r.querySelector("#calc-subtotal").textContent=A.formatPrice(M,t.currency),r.querySelector("#calc-fee").textContent=A.formatPrice(z,t.currency),r.querySelector("#calc-total").textContent=A.formatPrice(fe,t.currency),O.style.display="flex",_.disabled=!1,_.textContent="Reserve Now (Instant Lock)"}else E.style.background="rgba(239, 68, 68, 0.15)",E.style.color="#fca5a5",E.textContent="Dates are booked or locked. Please select alternative dates.",O.style.display="none",_.disabled=!0,_.textContent="Dates Unavailable"}catch{E.style.background="rgba(239, 68, 68, 0.15)",E.style.color="#fca5a5",E.textContent="Unable to verify availability.",O.style.display="none",_.disabled=!0}}}y.addEventListener("change",()=>{const C=new Date(y.value);C.setDate(C.getDate()+1),b.min=C.toISOString().split("T")[0],U()}),b.addEventListener("change",U),_.addEventListener("click",()=>{Hn(t,y.value,b.value,M)})}else{const y=r.querySelector("#btn-contact-agent");y&&y.addEventListener("click",()=>{var _;(_=t.user)!=null&&_.phone?window.location.href=`tel:${t.user.phone}`:V("Direct contact: support@habeshahomes.com / +251 911 000 000","info",6e3)});const b=r.querySelector("#btn-schedule-tour");b&&b.addEventListener("click",()=>{V("Viewing request submitted to host! An agent will call to coordinate access.","success")})}}async function Nt(e,t=""){if(!A.isLoggedIn()){Re("login"),e.innerHTML=`
            <div class="container" style="padding: 100px 0; text-align: center;">
                <h3>Please sign in to access your portal</h3>
                <p class="mt-2">Access your reservations, invoices, and listed properties.</p>
            </div>
        `;return}const r=A.user,s=A.isAgent();let n=t==="listings"&&s?"listings":"bookings";const i=r!=null&&r.name?r.name.split(" ").map(d=>d[0]).join("").toUpperCase().substring(0,2):"U";e.innerHTML=`
        <div class="container" style="padding-top: 40px; padding-bottom: 80px;">
            <div class="dashboard-header">
                <div class="flex items-center gap-4">
                    <div style="width: 56px; height: 56px; border-radius: 50%; background: linear-gradient(135deg, var(--emerald-500), var(--indigo-500)); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; font-weight: 700; border: 2px solid rgba(255, 255, 255, 0.15); box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2);">
                        ${i}
                    </div>
                    <div>
                        <h2>${r.name}</h2>
                        <p style="font-size: 0.85rem;">
                            ${r.email} • 
                            <span class="badge ${s?"badge-holiday":"badge-rent"}">
                                ${r.user_type?r.user_type.toUpperCase():"USER"}
                            </span>
                        </p>
                    </div>
                </div>

                <div class="dashboard-tabs">
                    <button class="dashboard-tab ${n==="bookings"?"active":""}" data-tab="bookings" style="display: inline-flex; align-items: center; gap: 6px;">
                        ${S.suitcase}
                        <span>My Bookings</span>
                    </button>
                    ${s?`
                        <button class="dashboard-tab ${n==="listings"?"active":""}" data-tab="listings" style="display: inline-flex; align-items: center; gap: 6px;">
                            ${S.building}
                            <span>My Properties</span>
                        </button>
                    `:""}
                    <a href="/profile" class="dashboard-tab" data-link style="display: inline-flex; align-items: center; gap: 6px; text-decoration: none;">
                        ${S.user}
                        <span>Profile Settings</span>
                    </a>
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
    `,e.querySelectorAll(".dashboard-tab").forEach(d=>{d.addEventListener("click",()=>{e.querySelectorAll(".dashboard-tab").forEach(f=>f.classList.remove("active")),d.classList.add("active");const u=d.getAttribute("data-tab");n=u,u==="bookings"?nt(e.querySelector("#dashboard-tab-content")):je(e.querySelector("#dashboard-tab-content"))})});const o=e.querySelector("#modal-add-property");e.querySelector("#close-add-modal").addEventListener("click",()=>o.classList.remove("open")),o.addEventListener("click",d=>{d.target===o&&o.classList.remove("open")});const c=e.querySelector("#form-create-property");c.addEventListener("submit",async d=>{d.preventDefault();const u=e.querySelector("#btn-submit-listing"),f=e.querySelector("#new-prop-error");f.style.display="none",u.disabled=!0,u.textContent="Publishing listing...";try{const m={title:e.querySelector("#new-prop-title").value.trim(),listing_type:e.querySelector("#new-prop-listing-type").value,property_type:e.querySelector("#new-prop-type").value,price:parseFloat(e.querySelector("#new-prop-price").value),currency:e.querySelector("#new-prop-currency").value,city:e.querySelector("#new-prop-city").value.trim(),sub_city:e.querySelector("#new-prop-subcity").value,address:e.querySelector("#new-prop-address").value.trim(),bedrooms:parseInt(e.querySelector("#new-prop-beds").value,10),bathrooms:parseFloat(e.querySelector("#new-prop-baths").value),square_meters:parseFloat(e.querySelector("#new-prop-sqm").value),is_furnished:e.querySelector("#new-prop-furnished").checked,description:e.querySelector("#new-prop-desc").value.trim()},v=await $.post("/properties",m),w=v.data.data||v.data,k=e.querySelector("#new-prop-images");if(k.files.length>0){u.textContent="Uploading property photos...";const P=new FormData;for(let p=0;p<k.files.length;p++)P.append("images[]",k.files[p]);await $.post(`/properties/${w.id}/images`,P,{headers:{"Content-Type":"multipart/form-data"}})}V("Property published successfully!","success"),o.classList.remove("open"),c.reset(),je(e.querySelector("#dashboard-tab-content"))}catch(m){f.style.display="block",f.textContent=m.friendlyMessage||"Failed to create listing. Please check required fields."}finally{u.disabled=!1,u.textContent="Publish Listing"}}),n==="listings"?je(e.querySelector("#dashboard-tab-content")):nt(e.querySelector("#dashboard-tab-content"))}async function nt(e){e.innerHTML=`
        <div style="padding: 60px; text-align: center; color: var(--text-muted);">
            Loading your reservations and stays...
        </div>
    `;try{const t=await $.get("/bookings"),r=t.data.data||t.data||[];if(r.length===0){e.innerHTML=`
                <div class="detail-card text-center" style="padding: 60px 20px;">
                    <div style="margin: 0 auto 16px; display: inline-flex; align-items: center; justify-content: center; width: 64px; height: 64px; border-radius: 50%; background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.25);">
                        ${S.suitcase}
                    </div>
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
                        ${r.map(s=>{var i,o,a;const n=s.status==="confirmed"?"badge-status-confirmed":s.status==="pending"?"badge-status-pending":"badge-status-cancelled";return`
                                <tr>
                                    <td>
                                        <div style="font-weight: 600;">${s.property?s.property.title:"Holiday Residence"}</div>
                                        <div style="font-size: 0.8rem; color: var(--text-muted);">${((i=s.property)==null?void 0:i.sub_city)||""} ${((o=s.property)==null?void 0:o.city)||""}</div>
                                    </td>
                                    <td>
                                        <div>${s.check_in} → ${s.check_out}</div>
                                        <div style="font-size: 0.75rem; color: var(--text-muted);">${s.guests_count||1} guest(s)</div>
                                    </td>
                                    <td style="font-weight: 700; color: #fff;">
                                        ${A.formatPrice(s.total_amount,((a=s.property)==null?void 0:a.currency)||"ETB")}
                                    </td>
                                    <td>
                                        <span class="badge ${n}">${s.status.toUpperCase()}</span>
                                    </td>
                                    <td>
                                        <div class="flex items-center gap-2">
                                            ${s.status==="confirmed"?`
                                                <a href="/storage/invoices/invoice-${s.id}.pdf" target="_blank" class="btn btn-outline btn-sm" style="padding: 4px 10px; font-size: 0.75rem;">
                                                    PDF Invoice
                                                </a>
                                            `:""}
                                            ${s.status!=="cancelled"?`
                                                <button class="btn btn-danger btn-sm cancel-booking-btn" data-id="${s.id}" style="padding: 4px 10px; font-size: 0.75rem;">
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
        `,e.querySelectorAll(".cancel-booking-btn").forEach(s=>{s.addEventListener("click",async()=>{const n=s.getAttribute("data-id");if(confirm("Are you sure you want to cancel this booking?"))try{await $.post(`/bookings/${n}/cancel`,{reason:"Guest cancellation request"}),V("Booking cancelled.","info"),nt(e)}catch(i){V(i.friendlyMessage||"Unable to cancel booking.","error")}})})}catch(t){e.innerHTML=`
            <div style="color: var(--coral-500); padding: 40px; text-align: center;">
                Failed to load bookings: ${t.friendlyMessage||"Server error"}
            </div>
        `}}async function je(e){e.innerHTML=`
        <div class="flex justify-between items-center mb-6">
            <h3>Your Listed Properties</h3>
            <button id="btn-open-add-property" class="btn btn-primary btn-sm">
                + Add New Listing
            </button>
        </div>
        <div id="user-properties-table" style="padding: 40px; text-align: center; color: var(--text-muted);">
            Loading your property portfolio...
        </div>
    `,e.querySelector("#btn-open-add-property").addEventListener("click",()=>{document.getElementById("modal-add-property").classList.add("open")});const t=e.querySelector("#user-properties-table");try{const n=((await $.get("/properties")).data.data||[]).filter(i=>{var o;return((o=i.user)==null?void 0:o.id)===A.user.id||A.isAdmin()});if(n.length===0){t.innerHTML=`
                <div class="detail-card text-center" style="padding: 40px 20px;">
                    <div style="margin: 0 auto 16px; display: inline-flex; align-items: center; justify-content: center; width: 64px; height: 64px; border-radius: 50%; background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.25);">
                        ${S.building}
                    </div>
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
                        ${n.map(i=>`
                            <tr>
                                <td>
                                    <div style="font-weight: 600;">${i.title}</div>
                                    <div style="font-size: 0.75rem; color: var(--text-muted);">${i.bedrooms||0} Beds • ${i.bathrooms||0} Baths • ${i.square_meters||0} m²</div>
                                </td>
                                <td>
                                    <span class="badge ${i.listing_type==="holiday_let"?"badge-holiday":"badge-rent"}">
                                        ${i.listing_type.replace("_"," ").toUpperCase()}
                                    </span>
                                </td>
                                <td style="font-weight: 700; color: #fff;">
                                    ${A.formatPrice(i.price,i.currency||"ETB")}
                                </td>
                                <td>
                                    <div>${i.sub_city?i.sub_city+", ":""}${i.city}</div>
                                </td>
                                <td>
                                    <div class="flex items-center gap-2">
                                        <a href="/properties/${i.id}" class="btn btn-outline btn-sm" data-link style="padding: 4px 10px; font-size: 0.75rem;">
                                            View
                                        </a>
                                        <button class="btn btn-danger btn-sm delete-prop-btn" data-id="${i.id}" style="padding: 4px 10px; font-size: 0.75rem;">
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>
        `,t.querySelectorAll(".delete-prop-btn").forEach(i=>{i.addEventListener("click",async()=>{const o=i.getAttribute("data-id");if(confirm("Are you sure you want to permanently delete this listing?"))try{await $.delete(`/properties/${o}`),V("Property deleted successfully.","info"),je(e)}catch(a){V(a.friendlyMessage||"Unable to delete property.","error")}})})}catch(r){t.innerHTML=`
            <div style="color: var(--coral-500);">
                Could not retrieve properties: ${r.friendlyMessage||"Server error"}
            </div>
        `}}async function vr(e){if(!A.isLoggedIn()){Re("login"),e.innerHTML=`
            <div class="container" style="padding: 100px 0; text-align: center;">
                <h3>Please sign in to view your profile</h3>
                <p class="mt-2 text-muted">Manage your personal details, credentials, and verification status.</p>
            </div>
        `;return}const t=A.user,r=A.isAgent(),s=t!=null&&t.name?t.name.split(" ").map(o=>o[0]).join("").toUpperCase().substring(0,2):"U";e.innerHTML=`
        <div class="container" style="padding-top: 40px; padding-bottom: 80px; max-width: 900px;">
            <!-- Profile Header Card -->
            <div class="detail-card mb-6" style="padding: 32px; background: linear-gradient(135deg, rgba(17, 24, 39, 0.95), rgba(15, 23, 42, 0.95)); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl);">
                <div class="flex items-center justify-between flex-wrap gap-4">
                    <div class="flex items-center gap-5">
                        <div style="width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, var(--emerald-500), var(--indigo-500)); color: #fff; font-size: 2rem; font-weight: 700; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 20px rgba(16, 185, 129, 0.25); border: 2px solid rgba(255, 255, 255, 0.15);">
                            ${s}
                        </div>
                        <div>
                            <div class="flex items-center gap-2">
                                <h2 style="font-size: 1.6rem; font-weight: 700; margin: 0;">${t.name}</h2>
                                ${t.is_verified?`<span title="Verified Account" style="display: flex; align-items: center;">${S.badgeVerified}</span>`:""}
                            </div>
                            <div class="flex items-center gap-3 mt-1" style="font-size: 0.85rem; color: var(--text-secondary);">
                                <span class="flex items-center gap-1">${S.mail} ${t.email}</span>
                                ${t.phone?`<span class="flex items-center gap-1">• ${S.phone} ${t.phone}</span>`:""}
                            </div>
                            <div class="flex items-center gap-2 mt-2">
                                <span class="badge ${r?"badge-holiday":"badge-rent"}" style="text-transform: uppercase; font-weight: 600; font-size: 0.75rem;">
                                    ${t.user_type||"MEMBER"}
                                </span>
                                <span class="badge" style="background: rgba(255, 255, 255, 0.06); color: var(--text-muted); font-size: 0.75rem;">
                                    ID: #${t.id}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center gap-3">
                        <a href="/dashboard" class="btn btn-outline btn-sm" data-link style="display: flex; align-items: center; gap: 6px;">
                            ${S.suitcase}
                            <span>My Bookings</span>
                        </a>
                        ${r?`
                            <a href="/dashboard/listings" class="btn btn-primary btn-sm" data-link style="display: flex; align-items: center; gap: 6px;">
                                ${S.building}
                                <span>My Listings</span>
                            </a>
                        `:""}
                    </div>
                </div>
            </div>

            <div class="grid grid-2" style="gap: 24px; align-items: start;">
                <!-- Personal Information Form -->
                <div class="detail-card" style="padding: 28px;">
                    <h3 class="mb-4" style="display: flex; align-items: center; gap: 8px; font-size: 1.15rem;">
                        ${S.user}
                        <span>Personal Information</span>
                    </h3>

                    <form id="form-update-profile" class="flex flex-col gap-4">
                        <div class="form-group">
                            <label class="form-label">Full Name</label>
                            <input type="text" id="prof-name" class="form-control" value="${t.name||""}" required>
                        </div>

                        <div class="form-group">
                            <label class="form-label">Email Address (Read-only)</label>
                            <input type="email" class="form-control" value="${t.email||""}" disabled style="opacity: 0.7; cursor: not-allowed;">
                            <span style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">Email is linked to account authentication.</span>
                        </div>

                        <div class="form-group">
                            <label class="form-label">Phone Number (Ethiopian / International)</label>
                            <input type="tel" id="prof-phone" class="form-control" value="${t.phone||""}" placeholder="+251 91 123 4567">
                        </div>

                        <div class="form-group">
                            <label class="form-label">Account Role</label>
                            <input type="text" class="form-control" value="${(t.user_type||"Member").toUpperCase()}" disabled style="opacity: 0.7; cursor: not-allowed;">
                        </div>

                        <div class="form-group">
                            <label class="form-label">About / Bio</label>
                            <textarea id="prof-bio" class="form-control" rows="3" placeholder="Tell hosts and agents about yourself...">${t.bio||""}</textarea>
                        </div>

                        <div id="prof-info-msg" style="display: none; padding: 10px 14px; border-radius: var(--radius-md); font-size: 0.85rem;"></div>

                        <button type="submit" class="btn btn-primary mt-2" id="btn-save-profile" style="display: flex; align-items: center; justify-content: center; gap: 6px;">
                            ${S.check}
                            <span>Save Profile Changes</span>
                        </button>
                    </form>
                </div>

                <!-- Security & Verification -->
                <div class="flex flex-col gap-6">
                    <!-- Change Password Card -->
                    <div class="detail-card" style="padding: 28px;">
                        <h3 class="mb-4" style="display: flex; align-items: center; gap: 8px; font-size: 1.15rem;">
                            ${S.lock}
                            <span>Security & Password</span>
                        </h3>

                        <form id="form-update-password" class="flex flex-col gap-4">
                            <div class="form-group">
                                <label class="form-label">New Password</label>
                                <input type="password" id="prof-new-pass" class="form-control" minlength="8" placeholder="Minimum 8 characters" required>
                            </div>

                            <div class="form-group">
                                <label class="form-label">Confirm New Password</label>
                                <input type="password" id="prof-confirm-pass" class="form-control" minlength="8" placeholder="Repeat new password" required>
                            </div>

                            <div id="prof-pass-msg" style="display: none; padding: 10px 14px; border-radius: var(--radius-md); font-size: 0.85rem;"></div>

                            <button type="submit" class="btn btn-outline mt-2" id="btn-save-pass" style="display: flex; align-items: center; justify-content: center; gap: 6px;">
                                ${S.lock}
                                <span>Update Password</span>
                            </button>
                        </form>
                    </div>

                    <!-- Trust & Badges Card -->
                    <div class="detail-card" style="padding: 24px;">
                        <h4 class="mb-3" style="font-size: 0.95rem; color: var(--text-primary);">Trust & Verification</h4>
                        <div class="flex flex-col gap-3">
                            <div class="flex items-center justify-between p-2" style="background: var(--bg-surface); border-radius: var(--radius-md); border: 1px solid var(--border-subtle); padding: 12px 14px;">
                                <div class="flex items-center gap-3">
                                    ${S.shield}
                                    <div>
                                        <div style="font-size: 0.85rem; font-weight: 600;">Identity & Phone Verification</div>
                                        <div style="font-size: 0.75rem; color: var(--text-muted);">Verified for secure reservation & messaging</div>
                                    </div>
                                </div>
                                <span class="badge" style="background: rgba(16, 185, 129, 0.15); color: var(--emerald-500); font-size: 0.7rem;">Active</span>
                            </div>

                            <div class="flex items-center justify-between p-2" style="background: var(--bg-surface); border-radius: var(--radius-md); border: 1px solid var(--border-subtle); padding: 12px 14px;">
                                <div class="flex items-center gap-3">
                                    ${S.document}
                                    <div>
                                        <div style="font-size: 0.85rem; font-weight: 600;">Escrow & Payment Ready</div>
                                        <div style="font-size: 0.75rem; color: var(--text-muted);">Integrated with Chapa & TeleBirr Gateways</div>
                                    </div>
                                </div>
                                <span class="badge" style="background: rgba(245, 158, 11, 0.15); color: var(--gold-500); font-size: 0.7rem;">Verified</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,e.querySelector("#form-update-profile").addEventListener("submit",async o=>{o.preventDefault();const a=e.querySelector("#btn-save-profile"),c=e.querySelector("#prof-info-msg");c.style.display="none";const d=e.querySelector("#prof-name").value.trim(),u=e.querySelector("#prof-phone").value.trim(),f=e.querySelector("#prof-bio").value.trim();a.disabled=!0,a.textContent="Saving...";try{const m=await $.put("/auth/profile",{name:d,phone:u,bio:f}),v=m.data.user||m.data;A.setUser(v),V("Profile updated successfully!","success"),vr(e)}catch(m){c.style.display="block",c.style.background="rgba(239, 68, 68, 0.15)",c.style.border="1px solid rgba(239, 68, 68, 0.3)",c.style.color="#fca5a5",c.textContent=m.friendlyMessage||"Failed to update profile."}finally{a.disabled=!1}});const i=e.querySelector("#form-update-password");i.addEventListener("submit",async o=>{o.preventDefault();const a=e.querySelector("#btn-save-pass"),c=e.querySelector("#prof-pass-msg");c.style.display="none";const d=e.querySelector("#prof-new-pass").value,u=e.querySelector("#prof-confirm-pass").value;if(d!==u){c.style.display="block",c.style.background="rgba(239, 68, 68, 0.15)",c.style.border="1px solid rgba(239, 68, 68, 0.3)",c.style.color="#fca5a5",c.textContent="Passwords do not match.";return}a.disabled=!0,a.textContent="Updating...";try{await $.put("/auth/profile",{password:d,password_confirmation:u}),V("Password changed successfully!","success"),i.reset(),c.style.display="block",c.style.background="rgba(16, 185, 129, 0.15)",c.style.border="1px solid rgba(16, 185, 129, 0.3)",c.style.color="#6ee7b7",c.textContent="Password updated successfully."}catch(f){c.style.display="block",c.style.background="rgba(239, 68, 68, 0.15)",c.style.border="1px solid rgba(239, 68, 68, 0.3)",c.style.color="#fca5a5",c.textContent=f.friendlyMessage||"Failed to change password."}finally{a.disabled=!1}})}function xr(){const e=document.getElementById("main-navbar");if(!e)return;const t=A.isLoggedIn(),r=A.user,s=A.currency,n=r!=null&&r.name?r.name.split(" ").map(c=>c[0]).join("").toUpperCase().substring(0,2):"U";e.innerHTML=`
        <div class="container navbar-inner">
            <a href="/" class="brand-logo" data-link>
                ${S.logo}
                <span>Habesha<span style="color: var(--emerald-500);">Homes</span></span>
            </a>

            <ul class="nav-links">
                <li><a href="/" class="nav-link" data-link>Home</a></li>
                <li><a href="/properties" class="nav-link" data-link>All Properties</a></li>
                <li><a href="/properties?listing_type=holiday_let" class="nav-link" data-link>Holiday Stays</a></li>
                <li><a href="/properties?listing_type=rent" class="nav-link" data-link>Long-term Rent</a></li>
                <li><a href="/properties?listing_type=sale" class="nav-link" data-link>For Sale</a></li>
            </ul>

            <div class="nav-actions">
                <!-- Currency Switcher -->
                <div class="currency-pill">
                    <button class="currency-btn ${s==="ETB"?"active":""}" data-currency="ETB">ETB</button>
                    <button class="currency-btn ${s==="USD"?"active":""}" data-currency="USD">USD</button>
                </div>

                ${t?`
                    <div class="user-menu-wrapper" style="position: relative; display: flex; align-items: center; gap: 8px;">
                        <a href="/profile" class="user-profile-badge" data-link title="View & Edit Profile" style="display: flex; align-items: center; gap: 8px; background: var(--bg-card); padding: 4px 12px 4px 4px; border-radius: var(--radius-full); border: 1px solid var(--border-subtle); cursor: pointer; transition: var(--transition-fast);">
                            <div style="width: 32px; height: 32px; border-radius: 50%; background: linear-gradient(135deg, var(--emerald-500), var(--indigo-500)); color: #fff; font-size: 0.8rem; font-weight: 700; display: flex; align-items: center; justify-content: center;">
                                ${n}
                            </div>
                            <div style="display: flex; flex-direction: column; text-align: left;">
                                <span style="font-size: 0.85rem; font-weight: 600; line-height: 1.1;">${r.name.split(" ")[0]}</span>
                                <span style="font-size: 0.65rem; color: var(--emerald-500); text-transform: uppercase;">${r.user_type||"MEMBER"}</span>
                            </div>
                        </a>

                        <a href="/profile" class="btn btn-outline btn-sm" data-link title="Profile Page" style="padding: 6px 10px; display: flex; align-items: center; gap: 4px;">
                            ${S.user}
                            <span class="hide-mobile">Profile</span>
                        </a>

                        <a href="/dashboard" class="btn btn-outline btn-sm" data-link title="Bookings & Activity" style="padding: 6px 10px; display: flex; align-items: center; gap: 4px;">
                            ${S.suitcase}
                            <span class="hide-mobile">Bookings</span>
                        </a>

                        <button id="btn-logout" class="btn btn-outline btn-sm" title="Sign Out" style="padding: 6px 10px; display: flex; align-items: center; gap: 4px; color: var(--text-muted);">
                            ${S.logout}
                        </button>
                    </div>
                `:`
                    <button id="btn-login" class="btn btn-outline btn-sm">Sign In</button>
                    <button id="btn-list-prop" class="btn btn-primary btn-sm">List Property</button>
                `}
            </div>
        </div>
    `,e.querySelectorAll("[data-currency]").forEach(c=>{c.addEventListener("click",()=>{const d=c.getAttribute("data-currency");A.setCurrency(d)})});const i=e.querySelector("#btn-login");i&&i.addEventListener("click",()=>Re("login"));const o=e.querySelector("#btn-list-prop");o&&o.addEventListener("click",()=>{A.isLoggedIn()?se("/dashboard/listings"):Re("register","agent")});const a=e.querySelector("#btn-logout");a&&a.addEventListener("click",async()=>{await A.logout(),se("/")})}let W=null;function Un(){window.addEventListener("popstate",()=>{Fe(window.location.pathname)}),document.addEventListener("click",e=>{const t=e.target.closest("a[data-link]");if(t){e.preventDefault();const r=t.getAttribute("href");se(r)}}),A.subscribe(()=>{xr(),Fe(window.location.pathname,!1)}),Fe(window.location.pathname)}function se(e){window.history.pushState(null,null,e),Fe(window.location.pathname),window.scrollTo({top:0,behavior:"smooth"})}function Fe(e,t=!0){const r=document.getElementById("app-root");if(!r)return;xr();const s=e.match(/^\/properties\/(\d+)$/);if(s){W=()=>jn(r,s[1]),W();return}if(e==="/properties"||e.startsWith("/properties?")){W=()=>Nn(r),W();return}if(e==="/profile"||e==="/dashboard/profile"){W=()=>vr(r),W();return}if(e==="/dashboard/listings"){W=()=>Nt(r,"listings"),W();return}if(e==="/dashboard"){W=()=>Nt(r,"bookings"),W();return}W=()=>Mn(r),W()}let J=null;function wr(){document.getElementById("booking-modal")||(J=document.createElement("div"),J.id="booking-modal",J.className="modal-overlay",J.innerHTML=`
        <div class="modal-content">
            <div class="modal-header">
                <h3>Complete Reservation</h3>
                <button class="modal-close" id="booking-modal-close">&times;</button>
            </div>

            <div id="booking-modal-body">
                <!-- Injected dynamically -->
            </div>
        </div>
    `,document.body.appendChild(J),J.querySelector("#booking-modal-close").addEventListener("click",it),J.addEventListener("click",e=>{e.target===J&&it()}))}function Hn(e,t,r,s){if(!A.isLoggedIn()){Re("login"),V("Please sign in to proceed with booking.","info");return}wr();const n=J.querySelector("#booking-modal-body"),i=e.currency||"ETB",o=Math.max(1,Math.round((new Date(r)-new Date(t))/(1e3*60*60*24))),a=Math.round(s*.05),c=s+a;n.innerHTML=`
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
                    <strong>${t} → ${r} (${o} ${o===1?"night":"nights"})</strong>
                </div>
                <div class="flex justify-between mb-2" style="font-size: 0.85rem;">
                    <span style="color: var(--text-secondary);">Subtotal:</span>
                    <span>${A.formatPrice(s,i)}</span>
                </div>
                <div class="flex justify-between mb-2" style="font-size: 0.85rem;">
                    <span style="color: var(--text-secondary);">Platform & Service Fee (5%):</span>
                    <span>${A.formatPrice(a,i)}</span>
                </div>
                <div class="flex justify-between" style="font-size: 1.05rem; font-weight: 700; border-top: 1px solid var(--border-subtle); padding-top: 8px; color: var(--emerald-500);">
                    <span>Total Due:</span>
                    <span>${A.formatPrice(c,i)}</span>
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
    `,n.querySelector("#booking-submit-form").addEventListener("submit",async u=>{u.preventDefault();const f=n.querySelector("#booking-submit-btn"),m=n.querySelector("#booking-error"),v=n.querySelector("#booking-guests").value,w=n.querySelector("#booking-gateway").value,k=n.querySelector("#booking-requests").value;m.style.display="none",f.disabled=!0,f.textContent="Locking reservation dates...";try{const P=await $.post(`/properties/${e.id}/book`,{check_in:t,check_out:r,guests_count:parseInt(v,10),payment_gateway:w,special_requests:k});it(),V("Booking initiated successfully!","success");const p=P.data.payment_url;p?window.location.href=p:se("/dashboard")}catch(P){m.style.display="block",m.textContent=P.friendlyMessage||"Unable to reserve property. Dates may have just been locked by another guest."}finally{f.disabled=!1,f.textContent="Confirm & Reserve Stay"}}),J.classList.add("open")}function it(){J&&J.classList.remove("open")}document.addEventListener("DOMContentLoaded",async()=>{A.token&&await A.fetchMe(),gr(),wr(),Un()});
