import{c as n}from"./animation-53042590.js";import{g as U}from"./index-a78af1bf.js";import"./index5-98865fd5.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const j=540,z=e=>document.querySelector("".concat(e,".ion-cloned-element")),F=e=>e.shadowRoot||e,W=e=>{const a=e.tagName==="ION-TABS"?e:e.querySelector("ion-tabs"),s="ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";if(a!=null){const o=a.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");return o!=null?o.querySelector(s):null}return e.querySelector(s)},M=(e,a)=>{const s=e.tagName==="ION-TABS"?e:e.querySelector("ion-tabs");let o=[];if(s!=null){const t=s.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");t!=null&&(o=t.querySelectorAll("ion-buttons"))}else o=e.querySelectorAll("ion-buttons");for(const t of o){const c=t.closest("ion-header"),l=c&&!c.classList.contains("header-collapse-condense-inactive"),S=t.querySelector("ion-back-button"),i=t.classList.contains("buttons-collapse"),p=t.slot==="start"||t.slot==="";if(S!==null&&p&&(i&&l&&a||!i))return S}return null},J=(e,a,s,o,t)=>{const c=M(o,s),l=W(t),S=W(o),i=M(t,s),p=c!==null&&l!==null&&!s,u=S!==null&&i!==null&&s;if(p){const m=l.getBoundingClientRect(),d=c.getBoundingClientRect();D(e,a,s,l,m,d),G(e,a,s,c,m,d)}else if(u){const m=S.getBoundingClientRect(),d=i.getBoundingClientRect();D(e,a,s,S,m,d),G(e,a,s,i,m,d)}return{forward:p,backward:u}},G=(e,a,s,o,t,c)=>{const l=a?"calc(100% - ".concat(c.right+4,"px)"):"".concat(c.left-4,"px"),S=a?"7px":"-7px",i=a?"-4px":"4px",p=a?"-4px":"4px",u=a?"right":"left",m=a?"left":"right",d=[{offset:0,opacity:0,transform:"translate3d(".concat(S,", ").concat(t.top-40,"px, 0) scale(2.1)")},{offset:1,opacity:1,transform:"translate3d(".concat(i,", ").concat(c.top-46,"px, 0) scale(1)")}],A=[{offset:0,opacity:1,transform:"translate3d(".concat(i,", ").concat(c.top-46,"px, 0) scale(1)")},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate3d(".concat(S,", ").concat(t.top-40,"px, 0) scale(2.1)")}],I=s?A:d,P=[{offset:0,opacity:0,transform:"translate3d(".concat(p,", ").concat(c.top-41,"px, 0) scale(0.6)")},{offset:1,opacity:1,transform:"translate3d(".concat(p,", ").concat(c.top-46,"px, 0) scale(1)")}],w=[{offset:0,opacity:1,transform:"translate3d(".concat(p,", ").concat(c.top-46,"px, 0) scale(1)")},{offset:.2,opacity:0,transform:"translate3d(".concat(p,", ").concat(c.top-41,"px, 0) scale(0.6)")},{offset:1,opacity:0,transform:"translate3d(".concat(p,", ").concat(c.top-41,"px, 0) scale(0.6)")}],E=s?w:P,$=n(),B=n(),T=z("ion-back-button"),Y=F(T).querySelector(".button-text"),r=F(T).querySelector("ion-icon");T.text=o.text,T.mode=o.mode,T.icon=o.icon,T.color=o.color,T.disabled=o.disabled,T.style.setProperty("display","block"),T.style.setProperty("position","fixed"),B.addElement(r),$.addElement(Y),$.beforeStyles({"transform-origin":"".concat(u," center")}).beforeAddWrite(()=>{o.style.setProperty("display","none"),T.style.setProperty(u,l)}).afterAddWrite(()=>{o.style.setProperty("display",""),T.style.setProperty("display","none"),T.style.removeProperty(u)}).keyframes(I),B.beforeStyles({"transform-origin":"".concat(m," center")}).keyframes(E),e.addAnimation([$,B])},D=(e,a,s,o,t,c)=>{const l=a?"calc(100% - ".concat(t.right,"px)"):"".concat(t.left,"px"),S=a?"-18px":"18px",i=a?"right":"left",p=[{offset:0,opacity:0,transform:"translate3d(".concat(S,", ").concat(c.top-4,"px, 0) scale(0.49)")},{offset:.1,opacity:0},{offset:1,opacity:1,transform:"translate3d(0, ".concat(t.top+2,"px, 0) scale(1)")}],u=[{offset:0,opacity:.99,transform:"translate3d(0, ".concat(t.top+2,"px, 0) scale(1)")},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate3d(".concat(S,", ").concat(c.top-4,"px, 0) scale(0.5)")}],m=s?p:u,d=z("ion-title"),A=n();d.innerText=o.innerText,d.size=o.size,d.color=o.color,A.addElement(d),A.beforeStyles({"transform-origin":"".concat(i," center"),height:"46px",display:"",position:"relative",[i]:l}).beforeAddWrite(()=>{o.style.setProperty("opacity","0")}).afterAddWrite(()=>{o.style.setProperty("opacity",""),d.style.setProperty("display","none")}).keyframes(m),e.addAnimation(A)},tt=(e,a)=>{var s;try{const o="cubic-bezier(0.32,0.72,0,1)",t="opacity",c="transform",l="0%",i=e.ownerDocument.dir==="rtl",p=i?"-99.5%":"99.5%",u=i?"33%":"-33%",m=a.enteringEl,d=a.leavingEl,A=a.direction==="back",I=m.querySelector(":scope > ion-content"),P=m.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),w=m.querySelectorAll(":scope > ion-header > ion-toolbar"),E=n(),$=n();if(E.addElement(m).duration(((s=a.duration)!==null&&s!==void 0?s:0)||j).easing(a.easing||o).fill("both").beforeRemoveClass("ion-page-invisible"),d&&e!==null&&e!==void 0){const r=n();r.addElement(e),E.addAnimation(r)}if(!I&&w.length===0&&P.length===0?$.addElement(m.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")):($.addElement(I),$.addElement(P)),E.addAnimation($),A?$.beforeClearStyles([t]).fromTo("transform","translateX(".concat(u,")"),"translateX(".concat(l,")")).fromTo(t,.8,1):$.beforeClearStyles([t]).fromTo("transform","translateX(".concat(p,")"),"translateX(".concat(l,")")),I){const r=F(I).querySelector(".transition-effect");if(r){const v=r.querySelector(".transition-cover"),q=r.querySelector(".transition-shadow"),X=n(),f=n(),y=n();X.addElement(r).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),f.addElement(v).beforeClearStyles([t]).fromTo(t,0,.1),y.addElement(q).beforeClearStyles([t]).fromTo(t,.03,.7),X.addAnimation([f,y]),$.addAnimation([X])}}const B=m.querySelector("ion-header.header-collapse-condense"),{forward:T,backward:Y}=J(E,i,A,m,d);if(w.forEach(r=>{const v=n();v.addElement(r),E.addAnimation(v);const q=n();q.addElement(r.querySelector("ion-title"));const X=n(),f=Array.from(r.querySelectorAll("ion-buttons,[menuToggle]")),y=r.closest("ion-header"),h=y==null?void 0:y.classList.contains("header-collapse-condense-inactive");let b;A?b=f.filter(R=>{const _=R.classList.contains("buttons-collapse");return _&&!h||!_}):b=f.filter(R=>!R.classList.contains("buttons-collapse")),X.addElement(b);const C=n();C.addElement(r.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));const g=n();g.addElement(F(r).querySelector(".toolbar-background"));const x=n(),O=r.querySelector("ion-back-button");if(O&&x.addElement(O),v.addAnimation([q,X,C,g,x]),X.fromTo(t,.01,1),C.fromTo(t,.01,1),A)h||q.fromTo("transform","translateX(".concat(u,")"),"translateX(".concat(l,")")).fromTo(t,.01,1),C.fromTo("transform","translateX(".concat(u,")"),"translateX(".concat(l,")")),x.fromTo(t,.01,1);else if(B||q.fromTo("transform","translateX(".concat(p,")"),"translateX(".concat(l,")")).fromTo(t,.01,1),C.fromTo("transform","translateX(".concat(p,")"),"translateX(".concat(l,")")),g.beforeClearStyles([t,"transform"]),(y==null?void 0:y.translucent)?g.fromTo("transform",i?"translateX(-100%)":"translateX(100%)","translateX(0px)"):g.fromTo(t,.01,"var(--opacity)"),T||x.fromTo(t,.01,1),O&&!T){const _=n();_.addElement(F(O).querySelector(".button-text")).fromTo("transform",i?"translateX(-100px)":"translateX(100px)","translateX(0px)"),v.addAnimation(_)}}),d){const r=n(),v=d.querySelector(":scope > ion-content"),q=d.querySelectorAll(":scope > ion-header > ion-toolbar"),X=d.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");if(!v&&q.length===0&&X.length===0?r.addElement(d.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")):(r.addElement(v),r.addElement(X)),E.addAnimation(r),A){r.beforeClearStyles([t]).fromTo("transform","translateX(".concat(l,")"),i?"translateX(-100%)":"translateX(100%)");const f=U(d);E.afterAddWrite(()=>{E.getDirection()==="normal"&&f.style.setProperty("display","none")})}else r.fromTo("transform","translateX(".concat(l,")"),"translateX(".concat(u,")")).fromTo(t,1,.8);if(v){const f=F(v).querySelector(".transition-effect");if(f){const y=f.querySelector(".transition-cover"),h=f.querySelector(".transition-shadow"),b=n(),C=n(),g=n();b.addElement(f).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),C.addElement(y).beforeClearStyles([t]).fromTo(t,.1,0),g.addElement(h).beforeClearStyles([t]).fromTo(t,.7,.03),b.addAnimation([C,g]),r.addAnimation([b])}}q.forEach(f=>{const y=n();y.addElement(f);const h=n();h.addElement(f.querySelector("ion-title"));const b=n(),C=f.querySelectorAll("ion-buttons,[menuToggle]"),g=f.closest("ion-header"),x=g==null?void 0:g.classList.contains("header-collapse-condense-inactive"),O=Array.from(C).filter(k=>{const N=k.classList.contains("buttons-collapse");return N&&!x||!N});b.addElement(O);const R=n(),_=f.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");_.length>0&&R.addElement(_);const L=n();L.addElement(F(f).querySelector(".toolbar-background"));const H=n(),K=f.querySelector("ion-back-button");if(K&&H.addElement(K),y.addAnimation([h,b,R,H,L]),E.addAnimation(y),H.fromTo(t,.99,0),b.fromTo(t,.99,0),R.fromTo(t,.99,0),A){if(x||h.fromTo("transform","translateX(".concat(l,")"),i?"translateX(-100%)":"translateX(100%)").fromTo(t,.99,0),R.fromTo("transform","translateX(".concat(l,")"),i?"translateX(-100%)":"translateX(100%)"),L.beforeClearStyles([t,"transform"]),(g==null?void 0:g.translucent)?L.fromTo("transform","translateX(0px)",i?"translateX(-100%)":"translateX(100%)"):L.fromTo(t,"var(--opacity)",0),K&&!Y){const N=n();N.addElement(F(K).querySelector(".button-text")).fromTo("transform","translateX(".concat(l,")"),"translateX(".concat((i?-124:124)+"px",")")),y.addAnimation(N)}}else x||h.fromTo("transform","translateX(".concat(l,")"),"translateX(".concat(u,")")).fromTo(t,.99,0).afterClearStyles([c,t]),R.fromTo("transform","translateX(".concat(l,")"),"translateX(".concat(u,")")).afterClearStyles([c,t]),H.afterClearStyles([t]),h.afterClearStyles([t]),b.afterClearStyles([t])})}return E}catch(o){throw o}};export{tt as iosTransitionAnimation,F as shadow};
