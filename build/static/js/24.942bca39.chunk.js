(this["webpackJsonptypescript-react-boilerplate"]=this["webpackJsonptypescript-react-boilerplate"]||[]).push([[24],{101:function(e,t,i){"use strict";i.d(t,"a",(function(){return T}));var c=i(1),a=i(0),s=i(111),n=i(21),r=i(253),l=i(181),o=r.a.SubMenu,j=r.a.ItemGroup,u=l.a.useBreakpoint,m=function(){var e=u().md;return Object(c.jsxs)(r.a,{mode:e?"horizontal":"inline",children:[Object(c.jsx)(r.a.Item,{children:Object(c.jsx)(n.c,{className:"navbar-item",to:"/",children:"Home"})},"key-home"),Object(c.jsxs)(o,{title:"Services",children:[Object(c.jsxs)(j,{title:"Features",children:[Object(c.jsx)(r.a.Item,{children:Object(c.jsx)(n.c,{to:"/feature1",children:"Option 1"})},"setting:1"),Object(c.jsx)(r.a.Item,{children:Object(c.jsx)(n.c,{to:"/feature2",children:"Option 2"})},"setting:2")]}),Object(c.jsxs)(j,{title:"Demo",children:[Object(c.jsx)(r.a.Item,{children:Object(c.jsx)(n.c,{to:"/demo1",children:"Option 1"})},"setting:3"),Object(c.jsx)(r.a.Item,{children:Object(c.jsx)(n.c,{to:"/demo2",children:"Option 2"})},"setting:4")]})]},"sub1"),Object(c.jsx)(r.a.Item,{children:Object(c.jsx)(n.c,{className:"navbar-item",to:"/about",children:"About"})},"key-about"),Object(c.jsx)(r.a.Item,{children:Object(c.jsx)(n.c,{className:"navbar-item",to:"/contact",children:"Contact"})},"key-contact")]})},b=i(443),d=i(26),h=i(17),O=i(4),x=l.a.useBreakpoint,p={logout:d.c},v=Object(h.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,user:e.auth.user}}),p)((function(e){var t=e.isAuthenticated,i=e.logout,a=e.user,s=x().md,l=Object(c.jsxs)(r.a,{mode:s?"horizontal":"inline",children:[Object(c.jsx)(r.a.Item,{children:Object(c.jsx)(n.c,{className:"navbar-item primary",to:O.a.LOGIN,children:"Sign In"})},"menukey-login"),Object(c.jsx)(r.a.Item,{children:Object(c.jsx)(n.c,{className:"navbar-item",to:O.a.REGISTER,children:"Register"})},"menukey-signup")]}),o=Object(c.jsxs)(r.a,{mode:s?"horizontal":"inline",children:[Object(c.jsx)(r.a.Item,{children:Object(c.jsxs)(n.c,{className:"navbar-item primary",to:O.a.PROFILE,children:["Hi ",Object(c.jsx)("strong",{children:a.username})]})},"menukey-profile"),Object(c.jsx)(r.a.Item,{children:Object(c.jsx)(n.c,{className:"navbar-item primary",to:O.a.HOME,onClick:function(){return i()},children:Object(c.jsxs)("span",{children:[Object(c.jsx)(b.a,{}),"Log Out"]})})},"menukey-login")]});return Object(c.jsx)(c.Fragment,{children:t?o:l})})),f=i(146),g=i(430),N=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),i=t[0],r=t[1];return Object(c.jsx)("div",{className:"navbar-section",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("nav",{className:"navbar",children:[Object(c.jsx)("div",{className:"navbar-logo",children:Object(c.jsx)(n.c,{to:"/",className:"navbar-item",activeClassName:"is-active",children:"REACT TS"})}),Object(c.jsxs)("div",{className:"navbar-menu",children:[Object(c.jsx)("div",{className:"navbar-left-menu",children:Object(c.jsx)(m,{})}),Object(c.jsx)("div",{className:"navbar-right-menu",children:Object(c.jsx)(v,{})})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)(f.a,{className:"navbar-btnBars",type:"primary",onClick:function(){r(!0)},children:Object(c.jsx)("span",{className:"navbar-btnBars-span"})}),Object(c.jsxs)(g.a,{title:"Drawer navbar",placement:"right",closable:!0,onClose:function(){r(!1)},visible:i,children:[Object(c.jsx)(m,{}),Object(c.jsx)(v,{})]})]})]})})})},y=i(444),q=i(445),k=i(446),I=i(447),A=i(441),C=function(){return Object(c.jsx)("div",{className:"footer",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"footer-inner",children:[Object(c.jsx)("div",{className:"footer-logo",children:Object(c.jsx)("a",{href:"/",children:"REACT TS"})}),Object(c.jsxs)("ul",{className:"footer-socials",children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/tienduy-nguyen",children:Object(c.jsx)(y.a,{})})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.twitter.com/tienduy_nguyen",children:Object(c.jsx)(q.a,{})})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/",children:Object(c.jsx)(k.a,{})})})]}),Object(c.jsx)("div",{className:"copyright",children:"Copyright \xa9 2020 REACT TS"}),Object(c.jsx)(A.a,{children:Object(c.jsx)("div",{className:"go-top",children:Object(c.jsx)(I.a,{})})})]})})})},w=i(416),E=w.a.Header,R=w.a.Content,S=w.a.Footer,T=function(e){var t=e.children;return Object(c.jsxs)(w.a,{className:"main-layout",children:[Object(c.jsx)(E,{children:Object(c.jsx)(N,{})}),Object(c.jsx)(R,{className:"layout-children",children:t}),Object(c.jsx)(S,{children:Object(c.jsx)(C,{})})]})}},437:function(e,t,i){"use strict";i.r(t);var c=i(1),a=i(0),s=i.n(a),n=function(){return Object(c.jsx)("div",{className:"main-body-section",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("div",{className:"block-title",children:Object(c.jsx)("h2",{children:"Feature Page - Option 1"})}),Object(c.jsxs)("div",{className:"feature-content",children:[Object(c.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum earum animi possimus, iusto consectetur vel accusantium ipsam beatae minus unde ipsum, cumque, perspiciatis rerum laborum! Accusamus magnam sequi, a in ab quam temporibus excepturi debitis soluta inventore error nihil minima consectetur aliquid, ullam quos. A quae iusto nulla culpa! Amet optio accusamus laborum similique incidunt totam nemo expedita odit saepe quisquam numquam nesciunt beatae repellat illo doloremque inventore quibusdam ut earum consequuntur enim sunt, sint dolore! Maxime provident maiores eos velit. Adipisci at asperiores ullam praesentium. Illum, temporibus libero. Cumque officia consectetur, dolores id natus dolorem recusandae sunt eaque quis."}),Object(c.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis blanditiis minima possimus quasi esse facere excepturi mollitia corrupti dicta praesentium sunt, saepe placeat aliquam, commodi magnam cumque temporibus corporis beatae? Doloribus voluptate dolorem saepe voluptatum culpa odit fugiat, sunt atque hic animi sequi cupiditate ad. Ratione omnis eos nesciunt."})]})]})})},r=i(101),l=function(){return Object(c.jsx)(r.a,{children:Object(c.jsx)(n,{})})},o=s.a.memo(l);t.default=o}}]);
//# sourceMappingURL=24.942bca39.chunk.js.map