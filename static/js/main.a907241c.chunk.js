(this.webpackJsonpddcare=this.webpackJsonpddcare||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(19),i=n.n(a),r=(n(26),n(20)),l=n(2),j=(n(27),n(7)),o=n(8),d=n(10),b=n(9),h=(n(28),n.p+"static/media/dog2.79d611fd.png"),u=n(0),O=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{class:"welcome",children:[Object(u.jsx)("div",{class:"welcomeText",children:"Welcome to Doggy Day Care!"}),Object(u.jsx)("div",{class:"welcomeImage",children:Object(u.jsx)("img",{class:"dog_img",src:h,alt:""})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"About Us"}),Object(u.jsx)("hr",{}),Object(u.jsxs)("p",{className:"aboutus_content",children:[Object(u.jsx)("p",{children:"Vino's Dogs Day care offers friendly and loving alternative to your pet and makes feel at home when you are away. Our Day care facility allows you to leave your pet in the carring environment. We ensure that both social and individual requirements for each pet is fulfilled atmost satisfaction."}),Object(u.jsx)("p",{children:"Meals can be provided on request or owners can bring in sealed container. Our staff is dedicated to ensuring that your beloved pet receive all the love and attention that deserves in your absence."})]})]})]})}}]),n}(c.Component),p=(n(30),function(e){return Object(u.jsx)("header",{className:"toolbar",children:Object(u.jsxs)("nav",{className:"toolbar_navigation",children:[Object(u.jsx)("div",{}),Object(u.jsx)("div",{className:"toolbar_logo",children:Object(u.jsx)("a",{href:"/",children:"Vino's"})}),Object(u.jsx)("div",{className:"spacer"}),Object(u.jsx)("div",{className:"toolbar_navigation_items",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"/CustList",children:"Customers"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"/ViewList",children:"Dog List"})})]})})]})})}),x=n(12),m=n.n(x),f=n(14),v=(n(32),function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(j.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={apiResponse:null},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=Object(f.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.jsonbin.io/b/6085725cf6655022c46b73fc/",e.next=3,fetch("https://api.jsonbin.io/b/6085725cf6655022c46b73fc/");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,this.setState({apiResponse:n});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.apiResponse?Object(u.jsxs)("div",{className:"viewlist",children:[Object(u.jsx)("div",{}),Object(u.jsxs)("table",{className:"viewlist_tblclass",children:[Object(u.jsxs)("tr",{className:"viewlist_tblheader",children:[Object(u.jsx)("th",{children:"Dog"}),Object(u.jsx)("th",{children:"Dog Name"}),Object(u.jsx)("th",{children:"Sex"}),Object(u.jsx)("th",{children:"Breed"}),Object(u.jsx)("th",{children:"Age"}),Object(u.jsx)("th",{children:"Chip Number"})]}),this.state.apiResponse.map((function(e,t){return Object(u.jsxs)("tr",{className:"viewlist_tbldetail",children:[Object(u.jsx)("td",{children:Object(u.jsx)("a",{href:e.img,children:Object(u.jsx)("img",{src:e.img,className:"viewlist_img",alt:"DogImage"})})}),Object(u.jsx)("td",{className:"viewlist_tblcolumn",children:e.name}),Object(u.jsx)("td",{children:e.sex}),Object(u.jsx)("td",{children:e.breed}),Object(u.jsx)("td",{children:e.age}),Object(u.jsx)("td",{children:e.chipNumber})]})}))]})]}):Object(u.jsx)("div",{children:"didn't get a Data"})}}]),n}(c.Component)),g=(n(33),function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(j.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={apiResponse:null},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=Object(f.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.jsonbin.io/b/6085725cf6655022c46b73fc/",e.next=3,fetch("https://api.jsonbin.io/b/6085725cf6655022c46b73fc/");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,this.setState({apiResponse:n});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.apiResponse?Object(u.jsx)("div",{className:"custlist",children:Object(u.jsxs)("table",{className:"custlist_table",children:[Object(u.jsxs)("tr",{className:"custlist_table_header",children:[Object(u.jsx)("th",{children:"Owner First Name"}),Object(u.jsx)("th",{children:"Last Name"}),Object(u.jsx)("th",{children:"Phone Number"}),Object(u.jsx)("th",{children:"Dog Name"})]}),this.state.apiResponse.map((function(e,t){return Object(u.jsxs)("tr",{className:"custlist_table_detail",children:[Object(u.jsx)("td",{children:e.owner.name}),Object(u.jsx)("td",{children:e.owner.lastName}),Object(u.jsx)("td",{children:e.owner.phoneNumber}),Object(u.jsx)("td",{className:"custlist_tblcolumn",children:e.name})]})}))]})}):Object(u.jsx)("div",{children:"didn't get a Data"})}}]),n}(c.Component)),y=(n(34),function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"footer",children:[Object(u.jsx)("hr",{}),"\xa9 2021. All Rights reserved."]})}}]),n}(c.Component));var N=function(){return Object(u.jsx)(r.a,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(p,{}),Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{path:"/CustList",component:g}),Object(u.jsx)(l.a,{path:"/ViewList",component:v}),Object(u.jsx)(l.a,{path:"/",component:O})]}),Object(u.jsx)(y,{})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root")),w()}},[[43,1,2]]]);
//# sourceMappingURL=main.a907241c.chunk.js.map