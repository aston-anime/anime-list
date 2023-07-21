"use strict";(self.webpackChunkanime_list=self.webpackChunkanime_list||[]).push([[678],{8513:function(e,i,n){n.d(i,{h:function(){return s}});var t=n(184);function s(){return(0,t.jsx)("svg",{width:"23",height:"20",viewBox:"0 0 23 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M20.3807 2.59133C19.8676 2.08683 19.2583 1.68663 18.5878 1.41358C17.9172 1.14054 17.1985 1 16.4727 1C15.7468 1 15.0281 1.14054 14.3576 1.41358C13.687 1.68663 13.0778 2.08683 12.5646 2.59133L11.4997 3.63785L10.4348 2.59133C9.39834 1.57276 7.99258 1.00053 6.52679 1.00053C5.06099 1.00053 3.65523 1.57276 2.61876 2.59133C1.58229 3.6099 1 4.99139 1 6.43187C1 7.87235 1.58229 9.25383 2.61876 10.2724L3.68367 11.3189L11.4997 19L19.3158 11.3189L20.3807 10.2724C20.8941 9.76814 21.3013 9.16942 21.5791 8.51045C21.857 7.85148 22 7.14517 22 6.43187C22 5.71857 21.857 5.01225 21.5791 4.35328C21.3013 3.69431 20.8941 3.09559 20.3807 2.59133Z",fill:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})})}},1080:function(e,i,n){n.d(i,{a:function(){return r}});var t=n(643),s={loader:"Loader_loader__+lRPl"},a=n(184);function r(){return(0,a.jsxs)("div",{className:s.loader,children:[(0,a.jsx)(t.iT,{ariaLabel:"loading-indicator",width:"100vw"})," "]})}},2678:function(e,i,n){n.r(i),n.d(i,{DetailedItem:function(){return k}});var t=n(9439),s=n(2791),a=n(7689),r=n(1694),c=n.n(r),l=n(6125),o=n(4165),d=n(5861),u=n(9740),m={method:"GET",headers:{"X-RapidAPI-Key":"273a06dd96msh187404bc69ae630p1e01f4jsn862a5b2fa3db","X-RapidAPI-Host":"anime-db.p.rapidapi.com"}},f=function(e){var i=(0,s.useState)(null),n=(0,t.Z)(i,2),a=n[0],r=n[1];return(0,s.useEffect)((function(){var i=function(){var i=(0,d.Z)((0,o.Z)().mark((function i(){var n,t;return(0,o.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,fetch(e,m);case 3:return n=i.sent,i.next=6,n.json();case 6:t=i.sent,r(t),i.next=13;break;case 10:i.prev=10,i.t0=i.catch(0),(0,u.b)(i.t0);case 13:case"end":return i.stop()}}),i,null,[[0,10]])})));return function(){return i.apply(this,arguments)}}();i()}),[e]),a},v=n(3090),h=n(8513),p=n(1080),_=n(9431),x=n(5405),j=n(757),g=n(607),N={container:"Detailed-item_container__7j2xg",customButton:"Detailed-item_customButton__HALbr",title:"Detailed-item_title__HVqYs",description:"Detailed-item_description__f71G-",info:"Detailed-item_info__wo7al",info_item:"Detailed-item_info_item__3l+sY",light:"Detailed-item_light__0091d",favorite:"Detailed-item_favorite__TIaIp",favoriteButton:"Detailed-item_favoriteButton__jv1UD",imgBlock:"Detailed-item_imgBlock__K7yW-"},C=n(184);function k(){var e=(0,x.T)(),i=(0,a.s0)(),n=(0,s.useContext)(l.N).theme,r=(0,a.UO)(),o=(0,x.C)(j._),d=(0,x.C)(g.T),u=(0,s.useState)(null),m=(0,t.Z)(u,2),k=m[0],b=m[1],w=(0,s.useState)(!1),y=(0,t.Z)(w,2),D=y[0],L=y[1],B=f("https://anime-db.p.rapidapi.com/anime/by-id/".concat(r.id)),T={dark:N.light,light:"text-dark"};return(0,s.useEffect)((function(){B&&(b(B),L(!!o.find((function(e){return e.id===(null===k||void 0===k?void 0:k._id)}))))}),[B,null===k||void 0===k?void 0:k._id,o]),(0,C.jsx)("div",{className:c()(N.container,{"text-primary":"light"===n}),children:B?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("h2",{className:N.title,children:B.title}),(0,C.jsxs)("div",{className:N.description,children:[(0,C.jsxs)("div",{className:N.imgBlock,children:[(0,C.jsx)("img",{src:B.image,alt:""}),d?(0,C.jsx)("button",{className:"".concat(N.favoriteButton," ").concat(D?N.favorite:""),type:"button",onClick:function(){return function(i){if(D)return e((0,_.r7)(i)),void L(!1);e((0,_.a3)({id:null===k||void 0===k?void 0:k._id,title:null===k||void 0===k?void 0:k.title,image:null===k||void 0===k?void 0:k.image,ranking:null===k||void 0===k?void 0:k.ranking,episodes:null===k||void 0===k?void 0:k.episodes})),L(!0)}(null===k||void 0===k?void 0:k._id)},children:(0,C.jsx)(h.h,{})}):null]}),(0,C.jsxs)("div",{className:N.info,children:[(0,C.jsxs)("p",{className:N.info_item,children:["Alternative Titles:",(0,C.jsx)("span",{className:T[n],children:" ".concat(B.alternativeTitles)})]}),(0,C.jsxs)("p",{className:N.info_item,children:["Type:",(0,C.jsx)("span",{className:T[n],children:" ".concat(B.type)})]}),(0,C.jsxs)("p",{className:N.info_item,children:["Episodes:",(0,C.jsx)("span",{className:T[n],children:" ".concat(B.episodes)})]}),(0,C.jsxs)("p",{className:N.info_item,children:["Status:",(0,C.jsx)("span",{className:T[n],children:" ".concat(B.status)})]}),(0,C.jsxs)("p",{className:N.info_item,children:["Genres:",(0,C.jsx)("span",{className:T[n],children:" ".concat(B.genres)})]}),(0,C.jsxs)("p",{className:N.info_item,children:["Ranking:",(0,C.jsx)("span",{className:T[n],children:" ".concat(B.ranking)})]})]})]}),(0,C.jsxs)("div",{className:N.synopsis,children:[(0,C.jsx)("div",{children:"Synopsis "}),(0,C.jsx)("div",{children:(0,C.jsx)("span",{className:T[n],children:" ".concat(B.synopsis)})})]}),(0,C.jsx)(v.z,{onClick:function(){i("/anime-list")},variant:"primary",className:N.customButton,children:"\u2190 Back"})]}):(0,C.jsx)(p.a,{})})}},757:function(e,i,n){n.d(i,{_:function(){return s}});var t=n(3749),s=function(e){return e[t.L.Favorite].favorites}}}]);
//# sourceMappingURL=678.6b982344.chunk.js.map