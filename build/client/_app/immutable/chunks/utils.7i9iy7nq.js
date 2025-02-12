var Mt=Array.isArray,Ht=Array.from,Yt=Object.defineProperty,yn=Object.getOwnPropertyDescriptor,rt=Object.getOwnPropertyDescriptors,jt=Object.prototype,Bt=Array.prototype,et=Object.getPrototypeOf;function Ut(n){return typeof n=="function"}const st=()=>{};function Vt(n){return n()}function gn(n){for(var t=0;t<n.length;t++)n[t]()}const E=2,An=4,j=8,an=16,g=32,J=64,X=128,R=256,G=512,h=1024,x=2048,N=4096,C=8192,q=16384,at=32768,xn=65536,Gt=1<<17,lt=1<<19,kn=1<<20,En=Symbol("$state"),Kt=Symbol("legacy props"),$t=Symbol("");function In(n){return n===this.v}function ut(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function Rn(n){return!ut(n,this.v)}function ot(n){throw new Error("effect_in_teardown")}function it(){throw new Error("effect_in_unowned_derived")}function ft(n){throw new Error("effect_orphan")}function _t(){throw new Error("effect_update_depth_exceeded")}function Zt(){throw new Error("hydration_failed")}function zt(n){throw new Error("lifecycle_legacy_only")}function Jt(n){throw new Error("props_invalid_value")}function Qt(){throw new Error("state_descriptors_fixed")}function Wt(){throw new Error("state_prototype_fixed")}function ct(){throw new Error("state_unsafe_local_read")}function vt(){throw new Error("state_unsafe_mutation")}let Q=!1;function Xt(){Q=!0}function ln(n){return{f:0,v:n,reactions:null,equals:In,version:0}}function nr(n){return Sn(ln(n))}function pt(n,t=!1){var e;const r=ln(n);return t||(r.equals=Rn),Q&&o!==null&&o.l!==null&&((e=o.l).s??(e.s=[])).push(r),r}function tr(n,t=!1){return Sn(pt(n,t))}function Sn(n){return i!==null&&i.f&E&&(m===null?Dt([n]):m.push(n)),n}function rr(n,t){return un(n,hn(()=>pn(n))),t}function un(n,t){return i!==null&&cn()&&i.f&(E|an)&&(m===null||!m.includes(n))&&vt(),ht(n,t)}function ht(n,t){return n.equals(t)||(n.v=t,n.version=zn(),Dn(n,x),cn()&&u!==null&&u.f&h&&!(u.f&g)&&(v!==null&&v.includes(n)?(T(u,x),W(u)):A===null?Ot([n]):A.push(n))),t}function Dn(n,t){var r=n.reactions;if(r!==null)for(var e=cn(),s=r.length,a=0;a<s;a++){var l=r[a],f=l.f;f&x||!e&&l===u||(T(l,t),f&(h|R)&&(f&E?Dn(l,N):W(l)))}}const er=1,sr=2,ar=4,lr=8,ur=16,or=1,ir=2,fr=4,_r=8,cr=16,vr=1,pr=2,dt="[",yt="[!",Et="]",On={},hr=Symbol();function bn(n){console.warn("hydration_mismatch")}let I=!1;function dr(n){I=n}let w;function M(n){if(n===null)throw bn(),On;return w=n}function yr(){return M(S(w))}function Er(n){if(I){if(S(w)!==null)throw bn(),On;w=n}}function wr(n=1){if(I){for(var t=n,r=w;t--;)r=S(r);w=r}}function Tr(){for(var n=0,t=w;;){if(t.nodeType===8){var r=t.data;if(r===Et){if(n===0)return t;n-=1}else(r===dt||r===yt)&&(n+=1)}var e=S(t);t.remove(),t=e}}var wn,Cn,Nn;function mr(){if(wn===void 0){wn=window;var n=Element.prototype,t=Node.prototype;Cn=yn(t,"firstChild").get,Nn=yn(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function nn(n=""){return document.createTextNode(n)}function tn(n){return Cn.call(n)}function S(n){return Nn.call(n)}function gr(n,t){if(!I)return tn(n);var r=tn(w);if(r===null)r=w.appendChild(nn());else if(t&&r.nodeType!==3){var e=nn();return r==null||r.before(e),M(e),e}return M(r),r}function Ar(n,t){if(!I){var r=tn(n);return r instanceof Comment&&r.data===""?S(r):r}return w}function xr(n,t=1,r=!1){let e=I?w:n;for(var s;t--;)s=e,e=S(e);if(!I)return e;var a=e==null?void 0:e.nodeType;if(r&&a!==3){var l=nn();return e===null?s==null||s.after(l):e.before(l),M(l),l}return M(e),e}function kr(n){n.textContent=""}function wt(n){var t=E|x;u===null?t|=R:u.f|=kn;var r=i!==null&&i.f&E?i:null;const e={children:null,ctx:o,deps:null,equals:In,f:t,fn:n,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function Ir(n){const t=wt(n);return t.equals=Rn,t}function qn(n){var t=n.children;if(t!==null){n.children=null;for(var r=0;r<t.length;r+=1){var e=t[r];e.f&E?on(e):F(e)}}}function Tt(n){for(var t=n.parent;t!==null;){if(!(t.f&E))return t;t=t.parent}return null}function Pn(n){var t,r=u;z(Tt(n));try{qn(n),t=Jn(n)}finally{z(r)}return t}function Fn(n){var t=Pn(n),r=(D||n.f&R)&&n.deps!==null?N:h;T(n,r),n.equals(t)||(n.v=t,n.version=zn())}function on(n){qn(n),Y(n,0),T(n,q),n.v=n.children=n.deps=n.ctx=n.reactions=null}function Ln(n){u===null&&i===null&&ft(),i!==null&&i.f&R&&it(),_n&&ot()}function mt(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function P(n,t,r,e=!0){var s=(n&J)!==0,a=u,l={ctx:o,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|x,first:null,fn:t,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var f=O;try{Tn(!0),B(l),l.f|=at}catch(_){throw F(l),_}finally{Tn(f)}}else t!==null&&W(l);var p=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&kn)===0;if(!p&&!s&&e&&(a!==null&&mt(l,a),i!==null&&i.f&E)){var d=i;(d.children??(d.children=[])).push(l)}return l}function Rr(n){const t=P(j,null,!1);return T(t,h),t.teardown=n,t}function Sr(n){Ln();var t=u!==null&&(u.f&g)!==0&&o!==null&&!o.m;if(t){var r=o;(r.e??(r.e=[])).push({fn:n,effect:u,reaction:i})}else{var e=Mn(n);return e}}function Dr(n){return Ln(),fn(n)}function Or(n){const t=P(J,n,!0);return()=>{F(t)}}function Mn(n){return P(An,n,!1)}function br(n,t){var r=o,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=fn(()=>{n(),!e.ran&&(e.ran=!0,un(r.l.r2,!0),hn(t))})}function Cr(){var n=o;fn(()=>{if(pn(n.l.r2)){for(var t of n.l.r1){var r=t.effect;r.f&h&&T(r,N),L(r)&&B(r),t.ran=!1}n.l.r2.v=!1}})}function fn(n){return P(j,n,!0)}function Nr(n){return gt(n)}function gt(n,t=0){return P(j|an|t,n,!0)}function qr(n,t=!0){return P(j|g,n,!0,t)}function Hn(n){var t=n.teardown;if(t!==null){const r=_n,e=i;mn(!0),Z(null);try{t.call(null)}finally{mn(r),Z(e)}}}function Yn(n){var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)on(t[r])}}function jn(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;F(r,t),r=e}}function At(n){for(var t=n.first;t!==null;){var r=t.next;t.f&g||F(t),t=r}}function F(n,t=!0){var r=!1;if((t||n.f&lt)&&n.nodes_start!==null){for(var e=n.nodes_start,s=n.nodes_end;e!==null;){var a=e===s?null:S(e);e.remove(),e=a}r=!0}jn(n,t&&!r),Yn(n),Y(n,0),T(n,q);var l=n.transitions;if(l!==null)for(const p of l)p.stop();Hn(n);var f=n.parent;f!==null&&f.first!==null&&Bn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=null}function Bn(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function Pr(n,t){var r=[];Un(n,r,!0),xt(r,()=>{F(n),t&&t()})}function xt(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var s of n)s.out(e)}else t()}function Un(n,t,r){if(!(n.f&C)){if(n.f^=C,n.transitions!==null)for(const l of n.transitions)(l.is_global||r)&&t.push(l);for(var e=n.first;e!==null;){var s=e.next,a=(e.f&xn)!==0||(e.f&g)!==0;Un(e,t,a?r:!1),e=s}}}function Fr(n){Vn(n,!0)}function Vn(n,t){if(n.f&C){L(n)&&B(n),n.f^=C;for(var r=n.first;r!==null;){var e=r.next,s=(r.f&xn)!==0||(r.f&g)!==0;Vn(r,s?t:!1),r=e}if(n.transitions!==null)for(const a of n.transitions)(a.is_global||t)&&a.in()}}const kt=typeof requestIdleCallback>"u"?n=>setTimeout(n,1):requestIdleCallback;let K=!1,$=!1,rn=[],en=[];function Gn(){K=!1;const n=rn.slice();rn=[],gn(n)}function Kn(){$=!1;const n=en.slice();en=[],gn(n)}function Lr(n){K||(K=!0,queueMicrotask(Gn)),rn.push(n)}function Mr(n){$||($=!0,kt(Kn)),en.push(n)}function It(){K&&Gn(),$&&Kn()}function Rt(n){throw new Error("lifecycle_outside_component")}const $n=0,St=1;let U=!1,V=$n,H=!1,O=!1,_n=!1;function Tn(n){O=n}function mn(n){_n=n}let k=[],b=0;let i=null;function Z(n){i=n}let u=null;function z(n){u=n}let m=null;function Dt(n){m=n}let v=null,y=0,A=null;function Ot(n){A=n}let Zn=0,D=!1,o=null;function zn(){return++Zn}function cn(){return!Q||o!==null&&o.l===null}function L(n){var l,f;var t=n.f;if(t&x)return!0;if(t&N){var r=n.deps,e=(t&R)!==0;if(r!==null){var s;if(t&G){for(s=0;s<r.length;s++)((l=r[s]).reactions??(l.reactions=[])).push(n);n.f^=G}for(s=0;s<r.length;s++){var a=r[s];if(L(a)&&Fn(a),e&&u!==null&&!D&&!((f=a==null?void 0:a.reactions)!=null&&f.includes(n))&&(a.reactions??(a.reactions=[])).push(n),a.version>n.version)return!0}}e||T(n,h)}return!1}function bt(n,t){for(var r=t;r!==null;){if(r.f&X)try{r.fn(n);return}catch{r.f^=X}r=r.parent}throw U=!1,n}function Ct(n){return(n.f&q)===0&&(n.parent===null||(n.parent.f&X)===0)}function vn(n,t,r,e){if(U){if(r===null&&(U=!1),Ct(t))throw n;return}r!==null&&(U=!0);{bt(n,t);return}}function Jn(n){var dn;var t=v,r=y,e=A,s=i,a=D,l=m,f=o,p=n.f;v=null,y=0,A=null,i=p&(g|J)?null:n,D=!O&&(p&R)!==0,m=null,o=n.ctx;try{var d=(0,n.fn)(),_=n.deps;if(v!==null){var c;if(Y(n,y),_!==null&&y>0)for(_.length=y+v.length,c=0;c<v.length;c++)_[y+c]=v[c];else n.deps=_=v;if(!D)for(c=y;c<_.length;c++)((dn=_[c]).reactions??(dn.reactions=[])).push(n)}else _!==null&&y<_.length&&(Y(n,y),_.length=y);return d}finally{v=t,y=r,A=e,i=s,D=a,m=l,o=f}}function Nt(n,t){let r=t.reactions;if(r!==null){var e=r.indexOf(n);if(e!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[e]=r[s],r.pop())}}r===null&&t.f&E&&(v===null||!v.includes(t))&&(T(t,N),t.f&(R|G)||(t.f^=G),Y(t,0))}function Y(n,t){var r=n.deps;if(r!==null)for(var e=t;e<r.length;e++)Nt(n,r[e])}function B(n){var t=n.f;if(!(t&q)){T(n,h);var r=u,e=o;u=n;try{t&an?At(n):jn(n),Yn(n),Hn(n);var s=Jn(n);n.teardown=typeof s=="function"?s:null,n.version=Zn}catch(a){vn(a,n,r,e||n.ctx)}finally{u=r}}}function Qn(){b>1e3&&(b=0,_t()),b++}function Wn(n){var t=n.length;if(t!==0){Qn();var r=O;O=!0;try{for(var e=0;e<t;e++){var s=n[e];s.f&h||(s.f^=h);var a=[];Xn(s,a),qt(a)}}finally{O=r}}}function qt(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];if(!(e.f&(q|C)))try{L(e)&&(B(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Bn(e):e.fn=null))}catch(s){vn(s,e,null,e.ctx)}}}function Pt(){if(H=!1,b>1001)return;const n=k;k=[],Wn(n),H||(b=0)}function W(n){V===$n&&(H||(H=!0,queueMicrotask(Pt)));for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&(J|g)){if(!(r&h))return;t.f^=h}}k.push(t)}function Xn(n,t){var r=n.first,e=[];n:for(;r!==null;){var s=r.f,a=(s&g)!==0,l=a&&(s&h)!==0,f=r.next;if(!l&&!(s&C))if(s&j){if(a)r.f^=h;else try{L(r)&&B(r)}catch(c){vn(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else s&An&&e.push(r);if(f===null){let c=r.parent;for(;c!==null;){if(n===c)break n;var d=c.next;if(d!==null){r=d;continue n}c=c.parent}}r=f}for(var _=0;_<e.length;_++)p=e[_],t.push(p),Xn(p,t)}function nt(n){var t=V,r=k;try{Qn();const s=[];V=St,k=s,H=!1,Wn(r);var e=n==null?void 0:n();return It(),(k.length>0||s.length>0)&&nt(),b=0,e}finally{V=t,k=r}}async function Hr(){await Promise.resolve(),nt()}function pn(n){var _;var t=n.f,r=(t&E)!==0;if(r&&t&q){var e=Pn(n);return on(n),e}if(i!==null){m!==null&&m.includes(n)&&ct();var s=i.deps;v===null&&s!==null&&s[y]===n?y++:v===null?v=[n]:v.push(n),A!==null&&u!==null&&u.f&h&&!(u.f&g)&&A.includes(n)&&(T(u,x),W(u))}else if(r&&n.deps===null)for(var a=n,l=a.parent,f=a;l!==null;)if(l.f&E){var p=l;f=p,l=p.parent}else{var d=l;(_=d.deriveds)!=null&&_.includes(f)||(d.deriveds??(d.deriveds=[])).push(f);break}return r&&(a=n,L(a)&&Fn(a)),n.v}function hn(n){const t=i;try{return i=null,n()}finally{i=t}}const Ft=~(x|N|h);function T(n,t){n.f=n.f&Ft|t}function Yr(n){return tt().get(n)}function jr(n,t){return tt().set(n,t),t}function tt(n){return o===null&&Rt(),o.c??(o.c=new Map(Lt(o)||void 0))}function Lt(n){let t=n.p;for(;t!==null;){const r=t.c;if(r!==null)return r;t=t.p}return null}function Br(n,t=1){var r=pn(n),e=t===1?r++:r--;return un(n,r),e}function Ur(n,t=!1,r){o={p:o,c:null,e:null,m:!1,s:n,x:null,l:null},Q&&!t&&(o.l={s:null,u:null,r1:[],r2:ln(!1)})}function Vr(n){const t=o;if(t!==null){n!==void 0&&(t.x=n);const l=t.e;if(l!==null){var r=u,e=i;t.e=null;try{for(var s=0;s<l.length;s++){var a=l[s];z(a.effect),Z(a.reaction),Mn(a.fn)}}finally{z(r),Z(e)}}o=t.p,t.m=!0}return n||{}}function Gr(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(En in n)sn(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&En in r&&sn(r)}}}function sn(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{sn(n[e],t)}catch{}const r=et(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=rt(r);for(let s in e){const a=e[s].get;if(a)try{a.call(n)}catch{}}}}}function Kr(n,t,r){if(n==null)return t(void 0),st;const e=hn(()=>n.subscribe(t,r));return e.unsubscribe?()=>e.unsubscribe():e}export{Jt as $,jt as A,Bt as B,ln as C,Qt as D,yn as E,u as F,Wt as G,et as H,Mt as I,gt as J,Fr as K,Kt as L,qr as M,Pr as N,I as O,yr as P,xn as Q,yt as R,En as S,Tr as T,hr as U,M as V,dr as W,w as X,Mn as Y,fn as Z,Lr as _,Kr as a,Gt as a0,fr as a1,Rn as a2,Br as a3,g as a4,J as a5,z as a6,or as a7,Q as a8,ir as a9,sr as aA,Un as aB,xt as aC,F as aD,ar as aE,lr as aF,ur as aG,Mr as aH,$t as aI,rt as aJ,Yr as aK,br as aL,Cr as aM,tr as aN,wr as aO,jr as aP,cn as aQ,rr as aR,_r as aa,Ir as ab,Ut as ac,cr as ad,Rt as ae,zt as af,Rr as ag,Z as ah,i as ai,tn as aj,nn as ak,vr as al,pr as am,mr as an,dt as ao,S as ap,On as aq,Et as ar,bn as as,Zt as at,kr as au,Ht as av,Or as aw,C as ax,er as ay,ht as az,Vr as b,gr as c,xr as d,Sr as e,Ar as f,o as g,hn as h,Vt as i,gn as j,pn as k,Gr as l,wt as m,st as n,Xt as o,Ur as p,un as q,Er as r,ut as s,Nr as t,Dr as u,nt as v,Yt as w,pt as x,Hr as y,nr as z};
