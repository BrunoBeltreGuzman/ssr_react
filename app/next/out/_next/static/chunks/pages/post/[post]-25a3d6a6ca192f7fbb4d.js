_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"HaE+":function(e,t,c){"use strict";function n(e,t,c,n,r,s,i){try{var j=e[s](i),a=j.value}catch(o){return void c(o)}j.done?t(a):Promise.resolve(a).then(n,r)}function r(e){return function(){var t=this,c=arguments;return new Promise((function(r,s){var i=e.apply(t,c);function j(e){n(i,r,s,j,a,"next",e)}function a(e){n(i,r,s,j,a,"throw",e)}j(void 0)}))}}c.d(t,"a",(function(){return r}))},NjFM:function(e,t,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post/[post]",function(){return c("RKT0")}])},RKT0:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return b}));var n=c("nKUr"),r=c("o0o1"),s=c.n(r),i=c("HaE+"),j=c("q1tI"),a=c("20a2"),o=c("5w8u");function b(e){var t=Object(a.useRouter)().query.post,c=Object(j.useState)([]),r=c[0],b=c[1],d=Object(j.useState)(!0),u=d[0],l=d[1],O=Object(j.useState)([]),x=O[0],h=O[1];return Object(j.useEffect)(Object(i.a)(s.a.mark((function e(){var c,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(!0),c="https://jsonplaceholder.typicode.com/posts/"+t,e.next=5,fetch(c);case 5:return n=e.sent,e.next=8,n.json();case 8:r=e.sent,b(r),console.log(r),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),h(e.t0),l(!1);case 17:case"end":return e.stop()}}),e,null,[[0,13]])}))),[t]),r?Object(n.jsx)(o.a,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"card bg-dark text-white p-3",children:Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h5",{children:r.title}),Object(n.jsx)("p",{children:r.body})]})})})]})}):u?Object(n.jsx)(o.a,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{className:"container",children:"Loading..."})]})}):x?Object(n.jsx)(o.a,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{className:"container",children:JSON.stringify(x)})]})}):void 0}}},[["NjFM",0,2,1,3]]]);