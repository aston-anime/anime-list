"use strict";(self.webpackChunkanime_list=self.webpackChunkanime_list||[]).push([[678],{2678:function(e,s,i){i.r(s),i.d(s,{DetailedItem:function(){return x}});var n=i(7689),t=i(2791),a=i(1694),c=i.n(a),r=i(6125),l=i(4165),d=i(5861),o=i(9439),m={method:"GET",headers:{"X-RapidAPI-Key":"9ef920492cmsh06da1f517ac850bp15fe5ajsncf451d92f610","X-RapidAPI-Host":"anime-db.p.rapidapi.com"}},p=function(e){var s=(0,t.useState)(null),i=(0,o.Z)(s,2),n=i[0],a=i[1];return(0,t.useEffect)((function(){var s=function(){var s=(0,d.Z)((0,l.Z)().mark((function s(){var i,n;return(0,l.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,fetch(e,m);case 3:return i=s.sent,s.next=6,i.json();case 6:n=s.sent,a(n),s.next=13;break;case 10:s.prev=10,s.t0=s.catch(0),console.log("error",s.t0);case 13:case"end":return s.stop()}}),s,null,[[0,10]])})));return function(){return s.apply(this,arguments)}}();s()}),[]),n},h=i(3090),u={container:"Detailed-item_container__7j2xg",customButton:"Detailed-item_customButton__HALbr",title:"Detailed-item_title__HVqYs",description:"Detailed-item_description__f71G-",info:"Detailed-item_info__wo7al",info_item:"Detailed-item_info_item__3l+sY",light:"Detailed-item_light__0091d"},f=i(184);function x(){var e=(0,n.s0)(),s=(0,t.useContext)(r.N).theme,i={dark:u.light,light:"text-dark"},a=(0,n.UO)(),l=p("https://anime-db.p.rapidapi.com/anime/by-id/".concat(a.id));return(0,f.jsxs)("div",{className:c()(u.container,{"text-primary":"light"===s}),children:[l?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h2",{className:u.title,children:l.title}),(0,f.jsxs)("div",{className:u.description,children:[(0,f.jsx)("img",{src:l.image,alt:""}),(0,f.jsxs)("div",{className:u.info,children:[(0,f.jsxs)("p",{className:u.info_item,children:["Alternative Titles:",(0,f.jsx)("span",{className:i[s],children:" ".concat(l.alternativeTitles)})]}),(0,f.jsxs)("p",{className:u.info_item,children:["Type:",(0,f.jsx)("span",{className:i[s],children:" ".concat(l.type)})]}),(0,f.jsxs)("p",{className:u.info_item,children:["Episodes:",(0,f.jsx)("span",{className:i[s],children:" ".concat(l.episodes)})]}),(0,f.jsxs)("p",{className:u.info_item,children:["Status:",(0,f.jsx)("span",{className:i[s],children:" ".concat(l.status)})]}),(0,f.jsxs)("p",{className:u.info_item,children:["Genres:",(0,f.jsx)("span",{className:i[s],children:" ".concat(l.genres)})]}),(0,f.jsxs)("p",{className:u.info_item,children:["Ranking:",(0,f.jsx)("span",{className:i[s],children:" ".concat(l.ranking)})]})]})]}),(0,f.jsxs)("div",{className:u.synopsis,children:[(0,f.jsx)("div",{children:"Synopsis "}),(0,f.jsx)("div",{children:(0,f.jsx)("span",{className:i[s],children:" ".concat(l.synopsis)})})]})]}):(0,f.jsx)("div",{children:"LOADING..."}),(0,f.jsx)(h.z,{onClick:function(){e("/anime-list")},variant:"primary",className:u.customButton,children:"\u2190 Back"})]})}}}]);
//# sourceMappingURL=678.1fbdeb28.chunk.js.map