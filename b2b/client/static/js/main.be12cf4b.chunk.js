(this["webpackJsonpb2b-frontend"]=this["webpackJsonpb2b-frontend"]||[]).push([[0],{134:function(e,t,n){},143:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(101),o=n.n(c),i=(n(134),n(87)),s=n(13),l=n(2),j=Object(a.createContext)(),b=function(e){var t=e.children,n=Object(s.m)();return Object(l.jsx)(j.Provider,{value:{isLoggedIn:function(){return console.log("here"),null!==sessionStorage.getItem("_token")},navigate:n,storeToken:function(e){sessionStorage.setItem("_token","Token ".concat(e))},clearStorage:function(){sessionStorage.clear()}},children:t})},d=n(17),u=n(23),x=n(9),h=n(214),O=n(227),p=n(221),g=n(210),m=n(222),f=n(220),v=n(152),k=n(215),C=n(107),w=n(226),y=n(228),S=n(232),B=n(230),F=n(231),I=n(208);function D(e){var t=e.title,n=e.content,a=e.button1,r=e.button2,c=void 0===r?"":r,o=e.handleClose;return Object(l.jsx)("div",{children:Object(l.jsxs)(y.a,{open:!0,onClose:o,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(l.jsx)(I.a,{id:"alert-dialog-title",children:t}),Object(l.jsx)(B.a,{children:Object(l.jsx)(F.a,{id:"alert-dialog-description",children:n})}),Object(l.jsxs)(S.a,{children:[c&&Object(l.jsx)(p.a,{onClick:o,children:c}),Object(l.jsx)(p.a,{onClick:o,autoFocus:!0,children:a})]})]})})}var L=n(90),T=n(223);function E(e){return Object(l.jsxs)(v.a,Object(L.a)(Object(L.a)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:["Copyright \xa9 ",Object(l.jsx)(T.a,{color:"inherit",href:"https://github.com/snnbotchway/b2b-frontend",children:"B2B Feedback"})," ",(new Date).getFullYear(),"."]}))}var W=n.p+"static/media/b2b.085e8108.png",G=n(229),z=n(233);function H(){return Object(l.jsx)("div",{children:Object(l.jsx)(G.a,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},open:!0,children:Object(l.jsx)(z.a,{color:"inherit"})})})}var M=Object(C.a)();function P(){var e=Object(a.useContext)(j),t=e.isLoggedIn,n=e.navigate,r=e.storeToken;Object(a.useEffect)((function(){t()&&n("/dashboard")}),[t,n]);var c=Object(a.useState)(!1),o=Object(x.a)(c,2),i=o[0],s=o[1],b=Object(a.useState)(),C=Object(x.a)(b,2),y=C[0],S=C[1],B=Object(a.useState)(),F=Object(x.a)(B,2),I=F[0],L=F[1],T=Object(a.useState)(),G=Object(x.a)(T,2),z=G[0],P=G[1],q=Object(a.useState)(),A=Object(x.a)(q,2),_=A[0],J=A[1],K=function(){P(""),J("")},R=function(){var e=Object(u.a)(Object(d.a)().mark((function e(t){var a,c,o;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),t.preventDefault(),a=new FormData(t.currentTarget),c={email:a.get("email"),password:a.get("password")},e.prev=4,e.next=7,h.a.post("/account/login/",c);case 7:o=e.sent,r(o.data.token),n("/dashboard"),e.next=18;break;case 12:e.prev=12,e.t0=e.catch(4),S(e.t0.response.data.email),L(e.t0.response.data.password),P(e.t0.response.data.non_field_errors),J(e.t0.response.data.detail);case 18:return e.prev=18,s(!1),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[4,12,18,21]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)(w.a,{theme:M,children:[z&&Object(l.jsx)(D,{title:"Error",content:z,button1:"GO BACK",handleClose:K}),_&&Object(l.jsx)(D,{title:"Error",content:_,button1:"GO BACK",handleClose:K}),i&&Object(l.jsx)(H,{}),Object(l.jsxs)(m.a,{container:!0,component:"main",sx:{height:"100vh"},children:[Object(l.jsx)(g.a,{}),Object(l.jsx)(m.a,{item:!0,xs:!1,sm:4,md:6,sx:{backgroundImage:"url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",backgroundRepeat:"no-repeat",backgroundColor:function(e){return"light"===e.palette.mode?e.palette.grey[50]:e.palette.grey[900]},backgroundSize:"cover",backgroundPosition:"center"}}),Object(l.jsx)(m.a,{item:!0,xs:12,sm:8,md:6,component:f.a,elevation:6,square:!0,children:Object(l.jsxs)(O.a,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(l.jsx)("img",{style:{maxHeight:"100px"},src:W,alt:"app-logo"}),Object(l.jsx)(O.a,{sx:{mt:3},children:Object(l.jsx)(v.a,{component:"h1",variant:"h5",children:"Login"})}),Object(l.jsxs)(O.a,{component:"form",noValidate:!0,onSubmit:R,sx:{mt:1},children:[Object(l.jsx)(k.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",autoComplete:"email",autoFocus:!0,error:Boolean(y),helperText:y}),Object(l.jsx)(k.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",error:Boolean(I),helperText:I}),Object(l.jsx)(p.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Login"}),Object(l.jsx)(E,{sx:{mt:5}})]})]})})]})]})}var q=n(234),A=n(225),_=n(224),J=n(236),K=n(108),R=n(218),V=n(235),Y=n(213),N=["Logout"];var Q=function(){var e=Object(a.useContext)(j),t=e.navigate,n=e.clearStorage,r=Object(a.useState)(null),c=Object(x.a)(r,2),o=c[0],i=c[1],s=function(e){i(null),"Logout"===e&&(n(),t("/login"))};return Object(l.jsx)(q.a,{position:"static",style:{backgroundColor:"#252525"},children:Object(l.jsx)(_.a,{maxWidth:"lg",children:Object(l.jsxs)(V.a,{disableGutters:!0,children:[Object(l.jsx)("img",{sx:{display:["none","flex"]},style:{maxHeight:"4vh"},src:W,alt:"app-logo"}),Object(l.jsx)(v.a,{variant:"h6",noWrap:!0,component:"a",href:"/",sx:{m:2,display:"flex",fontFamily:["Open Sans","sans-serif"],fontWeight:700,color:"inherit",textDecoration:"none"},children:"B2B Feedback"}),Object(l.jsxs)(O.a,{sx:{flexGrow:0,ml:"auto"},children:[Object(l.jsx)(Y.a,{title:"Open settings",children:Object(l.jsx)(J.a,{onClick:function(e){i(e.currentTarget)},sx:{p:0},children:Object(l.jsx)(A.a,{src:"none",alt:"S"})})}),Object(l.jsx)(K.a,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:o,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(o),onClose:s,children:N.map((function(e){return Object(l.jsx)(R.a,{onClick:function(){return s(e)},children:Object(l.jsx)(v.a,{textAlign:"center",children:e})},e)}))})]})]})})})},U=Object(C.a)();function X(){var e=Object(a.useContext)(j),t=e.isLoggedIn,n=e.navigate;return Object(a.useEffect)((function(){t()||n("/login")}),[t,n]),Object(l.jsxs)(w.a,{theme:U,children:[Object(l.jsx)(Q,{}),Object(l.jsx)(O.a,{children:"Dashboard"})]})}var Z=function(){return Object(l.jsx)(i.a,{children:Object(l.jsx)(b,{children:Object(l.jsxs)(s.c,{children:[Object(l.jsx)(s.a,{path:"/",element:Object(l.jsx)(P,{}),exact:!0}),Object(l.jsx)(s.a,{path:"/login",element:Object(l.jsx)(P,{})}),Object(l.jsx)(s.a,{path:"/dashboard",element:Object(l.jsx)(X,{})})]})})})},$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,237)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};o.a.createRoot(document.getElementById("root")).render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(Z,{})})),$()}},[[143,1,2]]]);
//# sourceMappingURL=main.be12cf4b.chunk.js.map
