import{S as T,t as K,v as G,w as P,x as z,y as b,U as o,z as S,A as y,B as L,C as V,k as Z,D as $,F as H,G as J,P as Q,I as W,q,J as X,R as k,K as F,M as ee,o as re,N as te,O as ne,Q as j,T as M,V as ie,W as N,X as fe,Y as ae}from"./runtime.D56d9CJI.js";import{c as se}from"./store.CWNqIVd6.js";function O(r,n=null,u){if(typeof r!="object"||r===null||T in r)return r;const s=Z(r);if(s!==K&&s!==G)return r;var i=new Map,d=$(r),h=P(0);d&&i.set("length",P(r.length));var w;return new Proxy(r,{defineProperty(l,e,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&z();var a=i.get(e);return a===void 0?(a=P(t.value),i.set(e,a)):b(a,O(t.value,w)),!0},deleteProperty(l,e){var t=i.get(e);if(t===void 0)e in l&&i.set(e,P(o));else{if(d&&typeof e=="string"){var a=i.get("length"),f=Number(e);Number.isInteger(f)&&f<a.v&&b(a,f)}b(t,o),U(h)}return!0},get(l,e,t){var c;if(e===T)return r;var a=i.get(e),f=e in l;if(a===void 0&&(!f||(c=S(l,e))!=null&&c.writable)&&(a=P(O(f?l[e]:o,w)),i.set(e,a)),a!==void 0){var v=y(a);return v===o?void 0:v}return Reflect.get(l,e,t)},getOwnPropertyDescriptor(l,e){var t=Reflect.getOwnPropertyDescriptor(l,e);if(t&&"value"in t){var a=i.get(e);a&&(t.value=y(a))}else if(t===void 0){var f=i.get(e),v=f==null?void 0:f.v;if(f!==void 0&&v!==o)return{enumerable:!0,configurable:!0,value:v,writable:!0}}return t},has(l,e){var v;if(e===T)return!0;var t=i.get(e),a=t!==void 0&&t.v!==o||Reflect.has(l,e);if(t!==void 0||L!==null&&(!a||(v=S(l,e))!=null&&v.writable)){t===void 0&&(t=P(a?O(l[e],w):o),i.set(e,t));var f=y(t);if(f===o)return!1}return a},set(l,e,t,a){var I;var f=i.get(e),v=e in l;if(d&&e==="length")for(var c=t;c<f.v;c+=1){var m=i.get(c+"");m!==void 0?b(m,o):c in l&&(m=P(o),i.set(c+"",m))}f===void 0?(!v||(I=S(l,e))!=null&&I.writable)&&(f=P(void 0),b(f,O(t,w)),i.set(e,f)):(v=f.v!==o,b(f,O(t,w)));var g=Reflect.getOwnPropertyDescriptor(l,e);if(g!=null&&g.set&&g.set.call(a,t),!v){if(d&&typeof e=="string"){var E=i.get("length"),A=Number(e);Number.isInteger(A)&&A>=E.v&&b(E,A+1)}U(h)}return!0},ownKeys(l){y(h);var e=Reflect.ownKeys(l).filter(f=>{var v=i.get(f);return v===void 0||v.v!==o});for(var[t,a]of i)a.v!==o&&!(t in l)&&e.push(t);return e},setPrototypeOf(){V()}})}function U(r,n=1){b(r,r.v+n)}const ue={get(r,n){let u=r.props.length;for(;u--;){let s=r.props[u];if(N(s)&&(s=s()),typeof s=="object"&&s!==null&&n in s)return s[n]}},set(r,n,u){let s=r.props.length;for(;s--;){let i=r.props[s];N(i)&&(i=i());const d=S(i,n);if(d&&d.set)return d.set(u),!0}return!1},getOwnPropertyDescriptor(r,n){let u=r.props.length;for(;u--;){let s=r.props[u];if(N(s)&&(s=s()),typeof s=="object"&&s!==null&&n in s){const i=S(s,n);return i&&!i.configurable&&(i.configurable=!0),i}}},has(r,n){if(n===T||n===j)return!1;for(let u of r.props)if(N(u)&&(u=u()),u!=null&&n in u)return!0;return!1},ownKeys(r){const n=[];for(let u of r.props){N(u)&&(u=u());for(const s in u)n.includes(s)||n.push(s)}return n}};function _e(...r){return new Proxy({props:r},ue)}function Y(r){for(var n=L,u=L;n!==null&&!(n.f&(X|k));)n=n.parent;try{return F(n),r()}finally{F(u)}}function de(r,n,u,s){var C;var i=(u&ee)!==0,d=!re||(u&te)!==0,h=(u&ne)!==0,w=(u&fe)!==0,l=!1,e;h?[e,l]=se(()=>r[n]):e=r[n];var t=T in r||j in r,a=((C=S(r,n))==null?void 0:C.set)??(t&&h&&n in r?_=>r[n]=_:void 0),f=s,v=!0,c=!1,m=()=>(c=!0,v&&(v=!1,w?f=q(s):f=s),f);e===void 0&&s!==void 0&&(a&&d&&H(),e=m(),a&&a(e));var g;if(d)g=()=>{var _=r[n];return _===void 0?m():(v=!0,c=!1,_)};else{var E=Y(()=>(i?M:ie)(()=>r[n]));E.f|=J,g=()=>{var _=y(E);return _!==void 0&&(f=void 0),_===void 0?f:_}}if(!(u&Q))return g;if(a){var A=r.$$legacy;return function(_,R){return arguments.length>0?((!d||!R||A||l)&&a(R?g():_),_):g()}}var I=!1,B=!1,x=ae(e),D=Y(()=>M(()=>{var _=g(),R=y(x);return I?(I=!1,B=!0,R):(B=!1,x.v=_)}));return i||(D.equals=W),function(_,R){if(arguments.length>0){const p=R?y(D):d&&h?O(_):_;return D.equals(p)||(I=!0,b(x,p),c&&f!==void 0&&(f=p),q(()=>y(D))),_}return y(D)}}export{O as a,de as p,_e as s};
