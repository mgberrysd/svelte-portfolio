import{a7 as Y,a8 as O,v as R,n as H,a9 as j,l as I,aa as T,ab as C,ac as P,ad as W,ae as b,X as g,W as A,O as $,Y as p,af as q,ag as B,ah as X,ai as Z,aj as z,ak as F,al as G,M as J,a3 as K,h as E,a6 as Q,Z as U}from"./runtime.CSdfhVI5.js";import{b as x}from"./disclose-version.C3Ao9plu.js";const aa=new Set,D=new Set;function m(a){var N;var e=this,n=e.ownerDocument,_=a.type,o=((N=a.composedPath)==null?void 0:N.call(a))||[],r=o[0]||a.target,f=0,h=a.__root;if(h){var u=o.indexOf(h);if(u!==-1&&(e===document||e===window)){a.__root=e;return}var l=o.indexOf(e);if(l===-1)return;u<=l&&(f=u)}if(r=o[f]||a.target,r!==e){Y(a,"currentTarget",{configurable:!0,get(){return r||n}});var w=j,i=I;O(null),R(null);try{for(var t,s=[];r!==null;){var d=r.assignedSlot||r.parentNode||r.host||null;try{var c=r["__"+_];if(c!==void 0&&!r.disabled)if(H(c)){var[M,...V]=c;M.apply(r,[a,...V])}else c.call(r,a)}catch(y){t?s.push(y):t=y}if(a.cancelBubble||d===e||d===null)break;r=d}if(t){for(let y of s)queueMicrotask(()=>{throw y});throw t}}finally{a.__root=e,delete a.currentTarget,O(w),R(i)}}}const ea=["touchstart","touchmove"];function ra(a){return ea.includes(a)}let k=!0;function ia(a,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(a.__t??(a.__t=a.nodeValue))&&(a.__t=n,a.nodeValue=n==null?"":n+"")}function ta(a,e){return L(a,e)}function oa(a,e){T(),e.intro=e.intro??!1;const n=e.target,_=E,o=p;try{for(var r=C(n);r&&(r.nodeType!==8||r.data!==P);)r=W(r);if(!r)throw b;g(!0),A(r),$();const f=L(a,{...e,anchor:r});if(p===null||p.nodeType!==8||p.data!==q)throw B(),b;return g(!1),f}catch(f){if(f===b)return e.recover===!1&&X(),T(),Z(n),g(!1),ta(a,e);throw f}finally{g(_),A(o)}}const v=new Map;function L(a,{target:e,anchor:n,props:_={},events:o,context:r,intro:f=!0}){T();var h=new Set,u=i=>{for(var t=0;t<i.length;t++){var s=i[t];if(!h.has(s)){h.add(s);var d=ra(s);e.addEventListener(s,m,{passive:d});var c=v.get(s);c===void 0?(document.addEventListener(s,m,{passive:d}),v.set(s,1)):v.set(s,c+1)}}};u(z(aa)),D.add(u);var l=void 0,w=F(()=>{var i=n??e.appendChild(G());return J(()=>{if(r){K({});var t=U;t.c=r}o&&(_.$$events=o),E&&x(i,null),k=f,l=a(i,_)||{},k=!0,E&&(I.nodes_end=p),r&&Q()}),()=>{var d;for(var t of h){e.removeEventListener(t,m);var s=v.get(t);--s===0?(document.removeEventListener(t,m),v.delete(t)):v.set(t,s)}D.delete(u),S.delete(l),i!==n&&((d=i.parentNode)==null||d.removeChild(i))}});return S.set(l,w),l}let S=new WeakMap;function fa(a){const e=S.get(a);e&&e()}export{k as a,oa as h,ta as m,ia as s,fa as u};
