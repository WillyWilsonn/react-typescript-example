(this["webpackJsonptypescript-react-boilerplate"]=this["webpackJsonptypescript-react-boilerplate"]||[]).push([[16],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return R}));var a=n(1),r=n(0),c=n(111),s=n(21),i=n(253),o=n(181),u=i.a.SubMenu,l=i.a.ItemGroup,d=o.a.useBreakpoint,j=function(){var e=d().md;return Object(a.jsxs)(i.a,{mode:e?"horizontal":"inline",children:[Object(a.jsx)(i.a.Item,{children:Object(a.jsx)(s.c,{className:"navbar-item",to:"/",children:"Home"})},"key-home"),Object(a.jsxs)(u,{title:"Services",children:[Object(a.jsxs)(l,{title:"Features",children:[Object(a.jsx)(i.a.Item,{children:Object(a.jsx)(s.c,{to:"/feature1",children:"Option 1"})},"setting:1"),Object(a.jsx)(i.a.Item,{children:Object(a.jsx)(s.c,{to:"/feature2",children:"Option 2"})},"setting:2")]}),Object(a.jsxs)(l,{title:"Demo",children:[Object(a.jsx)(i.a.Item,{children:Object(a.jsx)(s.c,{to:"/demo1",children:"Option 1"})},"setting:3"),Object(a.jsx)(i.a.Item,{children:Object(a.jsx)(s.c,{to:"/demo2",children:"Option 2"})},"setting:4")]})]},"sub1"),Object(a.jsx)(i.a.Item,{children:Object(a.jsx)(s.c,{className:"navbar-item",to:"/about",children:"About"})},"key-about"),Object(a.jsx)(i.a.Item,{children:Object(a.jsx)(s.c,{className:"navbar-item",to:"/contact",children:"Contact"})},"key-contact")]})},b=n(443),p=n(26),h=n(17),m=n(4),x=o.a.useBreakpoint,O={logout:p.c},f=Object(h.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,user:e.auth.user}}),O)((function(e){var t=e.isAuthenticated,n=e.logout,r=e.user,c=x().md,o=Object(a.jsxs)(i.a,{mode:c?"horizontal":"inline",children:[Object(a.jsx)(i.a.Item,{children:Object(a.jsx)(s.c,{className:"navbar-item primary",to:m.a.LOGIN,children:"Sign In"})},"menukey-login"),Object(a.jsx)(i.a.Item,{children:Object(a.jsx)(s.c,{className:"navbar-item",to:m.a.REGISTER,children:"Register"})},"menukey-signup")]}),u=Object(a.jsxs)(i.a,{mode:c?"horizontal":"inline",children:[Object(a.jsx)(i.a.Item,{children:Object(a.jsxs)(s.c,{className:"navbar-item primary",to:m.a.PROFILE,children:["Hi ",Object(a.jsx)("strong",{children:r.username})]})},"menukey-profile"),Object(a.jsx)(i.a.Item,{children:Object(a.jsx)(s.c,{className:"navbar-item primary",to:m.a.HOME,onClick:function(){return n()},children:Object(a.jsxs)("span",{children:[Object(a.jsx)(b.a,{}),"Log Out"]})})},"menukey-login")]});return Object(a.jsx)(a.Fragment,{children:t?u:o})})),v=n(146),g=n(430),y=function(){var e=Object(r.useState)(!1),t=Object(c.a)(e,2),n=t[0],i=t[1];return Object(a.jsx)("div",{className:"navbar-section",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("nav",{className:"navbar",children:[Object(a.jsx)("div",{className:"navbar-logo",children:Object(a.jsx)(s.c,{to:"/",className:"navbar-item",activeClassName:"is-active",children:"REACT TS"})}),Object(a.jsxs)("div",{className:"navbar-menu",children:[Object(a.jsx)("div",{className:"navbar-left-menu",children:Object(a.jsx)(j,{})}),Object(a.jsx)("div",{className:"navbar-right-menu",children:Object(a.jsx)(f,{})})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(v.a,{className:"navbar-btnBars",type:"primary",onClick:function(){i(!0)},children:Object(a.jsx)("span",{className:"navbar-btnBars-span"})}),Object(a.jsxs)(g.a,{title:"Drawer navbar",placement:"right",closable:!0,onClose:function(){i(!1)},visible:n,children:[Object(a.jsx)(j,{}),Object(a.jsx)(f,{})]})]})]})})})},N=n(444),k=n(445),I=n(446),w=n(447),T=n(441),C=function(){return Object(a.jsx)("div",{className:"footer",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"footer-inner",children:[Object(a.jsx)("div",{className:"footer-logo",children:Object(a.jsx)("a",{href:"/",children:"REACT TS"})}),Object(a.jsxs)("ul",{className:"footer-socials",children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/tienduy-nguyen",children:Object(a.jsx)(N.a,{})})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.twitter.com/tienduy_nguyen",children:Object(a.jsx)(k.a,{})})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/",children:Object(a.jsx)(I.a,{})})})]}),Object(a.jsx)("div",{className:"copyright",children:"Copyright \xa9 2020 REACT TS"}),Object(a.jsx)(T.a,{children:Object(a.jsx)("div",{className:"go-top",children:Object(a.jsx)(w.a,{})})})]})})})},P=n(416),A=P.a.Header,S=P.a.Content,_=P.a.Footer,R=function(e){var t=e.children;return Object(a.jsxs)(P.a,{className:"main-layout",children:[Object(a.jsx)(A,{children:Object(a.jsx)(y,{})}),Object(a.jsx)(S,{className:"layout-children",children:t}),Object(a.jsx)(_,{children:Object(a.jsx)(C,{})})]})}},130:function(e,t,n){"use strict";n.d(t,"f",(function(){return f})),n.d(t,"e",(function(){return v})),n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return y})),n.d(t,"c",(function(){return N})),n.d(t,"d",(function(){return k})),n.d(t,"g",(function(){return I}));var a=n(11),r=n(12),c=n.n(r),s=n(19),i=n(23),o=n.n(i),u=n(24),l=n(13),d=function(e){return{type:l.f,payload:e}},j=function(e){return{type:l.e,payload:e}},b=function(e){return{type:l.b,payload:e}},p=function(e){return{type:l.d,payload:e}},h=function(e){return{type:l.h,payload:e}},m=function(e){return{type:l.c,payload:e}},x=function(e){return{type:l.g,payload:e}},O=n(84),f=function(){return function(){var e=Object(s.a)(c.a.mark((function e(t){var n,a,r,s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.get("".concat(u.a.baseAPIUrl,"/api/products"));case 3:n=e.sent,a=n.data,t(d(a)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),i={msg:null===(r=e.t0.response)||void 0===r?void 0:r.statusText,status:null===(s=e.t0.response)||void 0===s?void 0:s.status},t(x(i));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(n){var a,r,s,i,l;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.get("".concat(u.a.baseAPIUrl,"/api/products/").concat(e));case 3:a=t.sent,r=a.data,n(j(r)),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),l={msg:null===(s=t.t0.response)||void 0===s?void 0:s.statusText,status:null===(i=t.t0.response)||void 0===i?void 0:i.status},n(x(l));case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},g=function(){return function(e){e({type:l.a})}},y=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(n){var r,s,i,l;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,"/images/image-default.jpg",r=Object(a.a)(Object(a.a)({},e),{},{id:Object(O.a)(),image_url:e.image_url||"/images/image-default.jpg"}),t.next=5,o.a.post("".concat(u.a.baseAPIUrl,"/api/products"),r);case 5:n(b(r)),n(f()),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),l={msg:null===(s=t.t0.response)||void 0===s?void 0:s.statusText,status:null===(i=t.t0.response)||void 0===i?void 0:i.status},n(x(l));case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},N=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(n){var a,r,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.delete("".concat(u.a.baseAPIUrl,"/api/products/").concat(e));case 3:n(m(e)),n(f()),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),s={msg:null===(a=t.t0.response)||void 0===a?void 0:a.statusText,status:null===(r=t.t0.response)||void 0===r?void 0:r.status},n(x(s));case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},k=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(n){var a,r,s,i,l;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.get("".concat(u.a.baseAPIUrl,"/api/products/").concat(e));case 3:a=t.sent,r=a.data,n(p(r)),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),l={msg:null===(s=t.t0.response)||void 0===s?void 0:s.statusText,status:null===(i=t.t0.response)||void 0===i?void 0:i.status},n(x(l));case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},I=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(n){var a,r,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.put("".concat(u.a.baseAPIUrl,"/api/products/").concat(e.id),e);case 3:n(h(e)),n(f()),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),s={msg:null===(a=t.t0.response)||void 0===a?void 0:a.statusText,status:null===(r=t.t0.response)||void 0===r?void 0:r.status},n(x(s));case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var a=n(1),r=n(442),c=n(425),s=n(227),i=n(228),o=n(146),u=n(422),l=n(0),d=n(17),j=n(3),b=n(21),p=n(4),h=n(130),m={getProducts:h.f,clearProduct:h.a},x=Object(d.b)((function(e){return{loading:e.products.loading,products:e.products.products}}),m)((function(e){var t=Object(j.g)(),n=e.products,d=e.getProducts,h=e.clearProduct,m=[{title:"Preview",dataIndex:"image_url",render:function(e,t){return O(e,t)}},{title:"Name",dataIndex:"name",sorter:function(e,t){return e.name.localeCompare(t.name)},sortDirections:["descend","ascend"],render:function(e,t){return x(e,t)}},{title:"Brand",dataIndex:"brand",sorter:function(e,t){return e.brand.localeCompare(t.brand)},defaultSortOrder:"descend"}],x=function(e,t){return Object(a.jsx)(b.b,{to:"".concat(p.a.PRODUCTS,"/").concat(t.id),style:{textTransform:"uppercase"},children:e})},O=function(e,t){if(t.id)return Object(a.jsx)(b.b,{to:"".concat(p.a.PRODUCTS,"/").concat(t.id),children:Object(a.jsx)(c.a,{src:e,alt:"Image_sp",style:{maxWidth:"100px"}})})},f=[{}];return Object(l.useEffect)((function(){d()}),[d]),n.map((function(e,t){0===t?f=[{key:t,id:e.id,name:e.name,brand:e.brand,image_url:e.image_url}]:f.push({key:t,id:e.id,name:e.name,brand:e.brand,image_url:e.image_url})})),Object(a.jsx)("div",{className:"main-body-section",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"block-title",children:Object(a.jsx)("h2",{children:"All Smartphones available"})}),Object(a.jsxs)("div",{className:"product-list",children:[Object(a.jsx)(s.a,{gutter:[40,0],className:"mb-1",children:Object(a.jsx)(i.a,{children:Object(a.jsxs)(o.a,{type:"primary",onClick:function(){h(),t.push(p.a.PRODUCT_NEW)},children:[Object(a.jsx)(r.a,{}),"New product"]})})}),Object(a.jsx)(s.a,{gutter:[40,0],children:Object(a.jsx)(i.a,{span:24,children:Object(a.jsx)(u.a,{columns:m,dataSource:f,rowKey:"id"})})})]})]})})}))},417:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=n.n(r),s=n(190),i=n(101),o=function(){return Object(a.jsx)(i.a,{children:Object(a.jsx)(s.a,{})})},u=c.a.memo(o);t.default=u}}]);
//# sourceMappingURL=16.42efe802.chunk.js.map