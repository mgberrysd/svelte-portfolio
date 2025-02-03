import{E as B,au as L,av as x,aw as K,B as I,q as M,W as P,ax as U,Z as b,ay as W,a8 as O,K as S,az as $,aA as g,a9 as j}from"./runtime.D56d9CJI.js";import{a as G}from"./render.CGgpQ-ao.js";const Z=()=>performance.now(),l={tick:t=>requestAnimationFrame(t),now:()=>Z(),tasks:new Set};function q(t){l.tasks.forEach(a=>{a.c(t)||(l.tasks.delete(a),a.f())}),l.tasks.size!==0&&l.tick(q)}function D(t){let a;return l.tasks.size===0&&l.tick(q),{promise:new Promise(r=>{l.tasks.add(a={c:t,f:r})}),abort(){l.tasks.delete(a)}}}function N(t,a){t.dispatchEvent(new CustomEvent(a))}function H(t){if(t==="float")return"cssFloat";if(t==="offset")return"cssOffset";if(t.startsWith("--"))return t;const a=t.split("-");return a.length===1?a[0]:a[0]+a.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function R(t){const a={},r=t.split(";");for(const i of r){const[f,c]=i.split(":");if(!f||c===void 0)break;const u=H(f.trim());a[u]=c.trim()}return a}const J=t=>t;function Y(t,a,r,i){var f=(t&$)!==0,c=(t&g)!==0,u=f&&c,m=(t&W)!==0,k=u?"both":f?"in":"out",h,v=a.inert,n,e;function E(){var s=j,p=I;O(null),S(null);try{return h??(h=r()(a,(i==null?void 0:i())??{},{direction:k}))}finally{O(s),S(p)}}var T={is_global:m,in(){var s;if(a.inert=v,!f){e==null||e.abort(),(s=e==null?void 0:e.reset)==null||s.call(e);return}c||n==null||n.abort(),N(a,"introstart"),n=A(a,E(),e,1,()=>{N(a,"introend"),n==null||n.abort(),n=h=void 0})},out(s){if(!c){s==null||s(),h=void 0;return}a.inert=!0,N(a,"outrostart"),e=A(a,E(),n,0,()=>{N(a,"outroend"),s==null||s()})},stop:()=>{n==null||n.abort(),e==null||e.abort()}},o=I;if((o.transitions??(o.transitions=[])).push(T),f&&G){var _=m;if(!_){for(var d=o.parent;d&&d.f&B;)for(;(d=d.parent)&&!(d.f&L););_=!d||(d.f&x)!==0}_&&K(()=>{M(()=>T.in())})}}function A(t,a,r,i,f){var c=i===1;if(P(a)){var u,m=!1;return U(()=>{if(!m){var _=a({direction:c?"in":"out"});u=A(t,_,r,i,f)}}),{abort:()=>{m=!0,u==null||u.abort()},deactivate:()=>u.deactivate(),reset:()=>u.reset(),t:()=>u.t()}}if(r==null||r.deactivate(),!(a!=null&&a.duration))return f(),{abort:b,deactivate:b,reset:b,t:()=>i};const{delay:k=0,css:h,tick:v,easing:n=J}=a;var e=[];if(c&&r===void 0&&(v&&v(0,1),h)){var E=R(h(0,1));e.push(E,E)}var T=()=>1-i,o=t.animate(e,{duration:k});return o.onfinish=()=>{var _=(r==null?void 0:r.t())??1-i;r==null||r.abort();var d=i-_,s=a.duration*Math.abs(d),p=[];if(s>0){if(h)for(var F=Math.ceil(s/16.666666666666668),w=0;w<=F;w+=1){var C=_+d*n(w/F),z=h(C,1-C);p.push(R(z))}T=()=>{var y=o.currentTime;return _+d*n(y/s)},v&&D(()=>{if(o.playState!=="running")return!1;var y=T();return v(y,1-y),!0})}o=t.animate(p,{duration:s,fill:"forwards"}),o.onfinish=()=>{T=()=>i,v==null||v(i,1-i),f()}},{abort:()=>{o&&(o.cancel(),o.effect=null,o.onfinish=b)},deactivate:()=>{f=b},reset:()=>{i===0&&(v==null||v(1,0))},t:()=>T()}}const Q=t=>t;function aa(t,{delay:a=0,duration:r=400,easing:i=Q}={}){const f=+getComputedStyle(t).opacity;return{delay:a,duration:r,easing:i,css:c=>`opacity: ${c*f}`}}export{aa as f,Y as t};
