import{a as U,t as J}from"../chunks/disclose-version.YwAhFp6B.js";import"../chunks/legacy.DV3d7G5Q.js";import{af as te,ah as ae,h as w,a6 as P,a7 as re,p as se,ad as K,ai as ie,aj as D,a5 as R,a8 as E,ak as M,al as Q,ag as W,am as ne,l as O,an as le,ao as oe,ac as ce,ap as pe,aq as fe,a1 as de,a9 as ve,$ as ue,H as he,d as B,ar as me,as as ge,at as be,a3 as _e,c as k,r as b,s as L,X as xe,k as F}from"../chunks/runtime.CvFDmIWS.js";import{t as S,f as N}from"../chunks/index.D8e9zPLd.js";import{p as ke,s as G}from"../chunks/props.ShL0TkjZ.js";import{s as z}from"../chunks/render.LFBqVIav.js";import{s as T}from"../chunks/attributes.CSWPHekh.js";function V(l,e){return e}function ye(l,e,a,s){for(var o=[],c=e.length,i=0;i<c;i++)oe(e[i].e,o,!0);var v=c>0&&o.length===0&&a!==null;if(v){var d=a.parentNode;ce(d),d.append(a),s.clear(),x(l,e[0].prev,e[c-1].next)}pe(o,()=>{for(var p=0;p<c;p++){var t=e[p];v||(s.delete(t.k),x(l,t.prev,t.next)),fe(t.e,!v)}})}function X(l,e,a,s,o,c=null){var i=l,v={flags:e,items:new Map,first:null};{var d=l;i=w?P(de(d)):d.appendChild(te())}w&&re();var p=null,t=!1;ae(()=>{var u=a(),n=se(u)?u:u==null?[]:K(u),r=n.length;if(t&&r===0)return;t=r===0;let m=!1;if(w){var j=i.data===ie;j!==(r===0)&&(i=D(),P(i),R(!1),m=!0)}if(w){for(var _=null,f,h=0;h<r;h++){if(E.nodeType===8&&E.data===ve){i=E,m=!0,R(!1);break}var A=n[h],y=s(A,h);f=Z(E,v,_,null,A,y,h,o,e),v.items.set(y,f),_=f}r>0&&P(D())}if(!w){var g=ue;we(n,v,i,o,e,(g.f&M)!==0,s)}c!==null&&(r===0?p?Q(p):p=W(()=>c(i)):p!==null&&ne(p,()=>{p=null})),m&&R(!0),a()}),w&&(i=E)}function we(l,e,a,s,o,c,i){var v=l.length,d=e.items,p=e.first,t=p,u,n=null,r=[],m=[],j,_,f,h;for(h=0;h<v;h+=1){if(j=l[h],_=i(j,h),f=d.get(_),f===void 0){var A=t?t.e.nodes_start:a;n=Z(A,e,n,n===null?e.first:n.next,j,_,h,s,o),d.set(_,n),r=[],m=[],t=n.next;continue}if(Le(f,j,h),f.e.f&M&&Q(f.e),f!==t){if(u!==void 0&&u.has(f)){if(r.length<m.length){var y=m[0],g;n=y.prev;var H=r[0],C=r[r.length-1];for(g=0;g<r.length;g+=1)Y(r[g],y,a);for(g=0;g<m.length;g+=1)u.delete(m[g]);x(e,H.prev,C.next),x(e,n,H),x(e,C,y),t=y,n=C,h-=1,r=[],m=[]}else u.delete(f),Y(f,t,a),x(e,f.prev,f.next),x(e,f,n===null?e.first:n.next),x(e,n,f),n=f;continue}for(r=[],m=[];t!==null&&t.k!==_;)(c||!(t.e.f&M))&&(u??(u=new Set)).add(t),m.push(t),t=t.next;if(t===null)continue;f=t}r.push(f),n=f,t=f.next}if(t!==null||u!==void 0){for(var I=u===void 0?[]:K(u);t!==null;)(c||!(t.e.f&M))&&I.push(t),t=t.next;var $=I.length;if($>0){var ee=v===0?a:null;ye(e,I,ee,d)}}O.first=e.first&&e.first.e,O.last=n&&n.e}function Le(l,e,a,s){le(l.v,e),l.i=a}function Z(l,e,a,s,o,c,i,v,d){var p=(d&ge)!==0,t=(d&be)===0,u=p?t?he(o):B(o):o,n=d&me?B(i):i,r={i:n,v:u,k:c,a:null,e:null,prev:a,next:s};try{return r.e=W(()=>v(l,u,n),w),r.e.prev=a&&a.e,r.e.next=s&&s.e,a===null?e.first=r:(a.next=r,a.e.next=r.e),s!==null&&(s.prev=r,s.e.prev=r.e),r}finally{}}function Y(l,e,a){for(var s=l.next?l.next.e.nodes_start:a,o=e?e.e.nodes_start:a,c=l.e.nodes_start;c!==s;){var i=_e(c);o.before(c),c=i}}function x(l,e,a){e===null?l.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}var je=J('<article class="m-2 flex lg:max-w-[48.5vw] flex-col rounded-lg border-4 border-black p-2 text-center"><h1 class="mb-5 underline font-mono"> </h1> <div class="relative"><img class="m-auto w-full rounded-md"> <div class="absolute bottom-0 flex h-full w-full flex-col justify-center rounded-lg border-0 bg-black bg-opacity-50 bg-center p-5 font-bold text-white opacity-0 hover:z-10 hover:opacity-100"><p class="mb-10"> </p> <a target="_blank" class="svelte-14fr0hj">Live Site</a> <a target="_blank" class="svelte-14fr0hj">Github Repository</a></div></div></article>');function q(l,e){let a=ke(e,"delayFactor",3,0);var s=je(),o=k(s),c=k(o,!0);b(o);var i=L(o,2),v=k(i),d=L(v,2),p=k(d),t=k(p,!0);b(p);var u=L(p,2),n=L(u,2);b(d),b(i),b(s),xe(()=>{z(c,e.title),T(v,"src",e.splash),T(v,"alt",e.title),z(t,e.project_description),T(u,"href",e.projectLink),T(n,"href",e.githubLink)}),S(5,s,()=>N,()=>({delay:1e3*e.index+1e3*a()+1e3,duration:2e3})),U(l,s)}var Ee=J('<div class="text-center text-xl"><section class="mb-5"><div class="mb-5"><h1 class="text-3xl font-bold">Professional Projects</h1> <p>Projects that I have worked on in a professional capacity.</p> <p class="text-sm">Note: many of these repositories are private, contact me for more information.</p></div> <div class="flex basis-1/2 flex-wrap"></div></section> <section><div class="mb-5"><h2 class="text-2xl font-bold">School and Learning Projects</h2> <p>Group projects undertaken while learning web development.</p></div> <div class="flex flex-wrap"></div></section></div>');function Se(l){const e=[{title:"3 Plus Management",project_description:"A photo gallery site with a full featured CMS suite.",githubLink:"https://github.com/falafelrapper/3plusmgmt",projectLink:"http://3pm.zacharyroy.com/",splash:"assets/images/3pm.png"},{title:"SLO Stone Properties",project_description:"A property management and application site with administrative tools.",githubLink:"https://github.com/RCLobster/slo-stone-properties",projectLink:"https://www.slostoneproperties.com/",splash:"assets/images/slo-stone.png"}],a=[{title:"Mad Libs Generator",project_description:"A Mad Libs generator with text to speech integration and social elements.",githubLink:"https://github.com/RCLobster/team-M-s-project-3",projectLink:"https://team-m-s-project-3.onrender.com/",splash:"assets/images/madlibgen_home.png"},{title:"Breaking Bread",project_description:"A recipe sharing platform.",githubLink:"https://github.com/falafelrapper/breaking-bread",projectLink:"https://agile-cove-66310-81bc545fcfa7.herokuapp.com/",splash:"assets/images/breaking-bread.png"},{title:"The Prep Project",project_description:"An interactive recipe recommender.",githubLink:"https://github.com/3123MtOlympus/theprepproject",projectLink:"https://3123mtolympus.github.io/theprepproject/",splash:"assets/images/the-prep-project.png"}];var s=Ee(),o=k(s),c=L(k(o),2);X(c,5,()=>e,V,(d,p,t)=>{q(d,G(()=>F(p),{index:t}))}),b(c),b(o);var i=L(o,2),v=L(k(i),2);X(v,5,()=>a,V,(d,p,t)=>{q(d,G(()=>F(p),{index:t,get delayFactor(){return e.length}}))}),b(v),b(i),b(s),S(1,o,()=>N,()=>({duration:1e3})),S(1,i,()=>N,()=>({delay:1e3*e.length+500,duration:2e3})),U(l,s)}export{Se as component};