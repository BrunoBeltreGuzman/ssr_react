(this.webpackJsonppwa=this.webpackJsonppwa||[]).push([[0],{31:function(e,t){},32:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(18),j=c.n(n),r=c(7),b=c(2),i=c(0);function l(){return Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)(r.b,{to:"/",className:"navbar-brand",children:"App"}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(i.jsxs)("div",{className:"navbar-nav",children:[Object(i.jsx)(r.b,{to:"/",className:"nav-link active",children:"Home"}),Object(i.jsx)(r.b,{to:"/posts",className:"nav-link active",children:"Posts"}),Object(i.jsx)(r.b,{to:"/post/1",className:"nav-link active",children:"Post[1]"})," "]})})]})})})}function o(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(l,{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{children:"List Posts"}),Object(i.jsx)("hr",{}),Object(i.jsx)(r.b,{to:"/posts",className:"a",children:"all post"})]})]})}var d=c(10),O=c.n(d),x=c(12),h=c(8);c(31);function v(e){var t=e.data;return Object(i.jsxs)("div",{type:"button",onClick:function(e){var c;e.preventDefault(),c=t.id,window.location.href="/post/"+c},children:[Object(i.jsx)("div",{className:"card p-3",children:Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsx)("h5",{children:t.title}),Object(i.jsx)("p",{children:t.body})]})}),Object(i.jsx)("hr",{}),Object(i.jsx)("br",{})," ",Object(i.jsx)("br",{})]})}function p(){var e=Object(s.useState)([]),t=Object(h.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(!0),j=Object(h.a)(n,2),r=j[0],b=j[1],o=Object(s.useState)([]),d=Object(h.a)(o,2),p=d[0],u=d[1];return Object(s.useEffect)(Object(x.a)(O.a.mark((function e(){var t,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(!0),"https://jsonplaceholder.typicode.com/posts",e.next=5,fetch("https://jsonplaceholder.typicode.com/posts");case 5:return t=e.sent,e.next=8,t.json();case 8:c=e.sent,a(c),console.log(c),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),u(e.t0),b(!1);case 17:case"end":return e.stop()}}),e,null,[[0,13]])}))),[]),c?Object(i.jsxs)("div",{children:[Object(i.jsx)(l,{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("div",{className:"container",children:c.map((function(e,t){return Object(i.jsx)(v,{data:e})}))})]}):r?Object(i.jsxs)("div",{children:[Object(i.jsx)(l,{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("div",{className:"container",children:"Loading..."})]}):p?Object(i.jsxs)("div",{children:[Object(i.jsx)(l,{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("div",{className:"container",children:JSON.stringify(p)})]}):void 0}function u(e){var t=Object(b.e)().post,c=Object(s.useState)([]),a=Object(h.a)(c,2),n=a[0],j=a[1],r=Object(s.useState)(!0),o=Object(h.a)(r,2),d=o[0],v=o[1],p=Object(s.useState)([]),u=Object(h.a)(p,2),m=u[0],f=u[1];return Object(s.useEffect)(Object(x.a)(O.a.mark((function e(){var c,s,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(!0),c="https://jsonplaceholder.typicode.com/posts/"+t,e.next=5,fetch(c);case 5:return s=e.sent,e.next=8,s.json();case 8:a=e.sent,j(a),console.log(a),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),f(e.t0),v(!1);case 17:case"end":return e.stop()}}),e,null,[[0,13]])}))),[]),n?Object(i.jsxs)("div",{children:[Object(i.jsx)(l,{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("div",{className:"card bg-dark text-white p-3",children:Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsx)("h5",{children:n.title}),Object(i.jsx)("p",{children:n.body})]})})})]}):d?Object(i.jsxs)("div",{children:[Object(i.jsx)(l,{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("div",{className:"container",children:"Loading..."})]}):m?Object(i.jsxs)("div",{children:[Object(i.jsx)(l,{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("div",{className:"container",children:JSON.stringify(m)})]}):void 0}function m(){return Object(i.jsx)(r.a,{children:Object(i.jsx)("div",{children:Object(i.jsxs)("main",{children:[Object(i.jsx)(b.a,{exact:!0,path:"/",component:o}),Object(i.jsx)(b.a,{path:"/post/:post",component:u}),Object(i.jsx)(b.a,{path:"/posts",component:p})]})})})}function f(){return Object(i.jsx)(m,{})}j.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.f0aa4ade.chunk.js.map