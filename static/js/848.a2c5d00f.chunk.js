"use strict";(self.webpackChunkanime_list=self.webpackChunkanime_list||[]).push([[848],{3444:function(e,r,t){t.d(r,{C:function(){return C}});var a=t(1413),n=t(9439),i=t(2791),s=t(7689),c=t(9431),l=t(757),o=t(607),d=t(5405),u=t(184);function _(){return(0,u.jsx)("svg",{width:"23",height:"20",viewBox:"0 0 23 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:(0,u.jsx)("path",{d:"M20.3807 2.59133C19.8676 2.08683 19.2583 1.68663 18.5878 1.41358C17.9172 1.14054 17.1985 1 16.4727 1C15.7468 1 15.0281 1.14054 14.3576 1.41358C13.687 1.68663 13.0778 2.08683 12.5646 2.59133L11.4997 3.63785L10.4348 2.59133C9.39834 1.57276 7.99258 1.00053 6.52679 1.00053C5.06099 1.00053 3.65523 1.57276 2.61876 2.59133C1.58229 3.6099 1 4.99139 1 6.43187C1 7.87235 1.58229 9.25383 2.61876 10.2724L3.68367 11.3189L11.4997 19L19.3158 11.3189L20.3807 10.2724C20.8941 9.76814 21.3013 9.16942 21.5791 8.51045C21.857 7.85148 22 7.14517 22 6.43187C22 5.71857 21.857 5.01225 21.5791 4.35328C21.3013 3.69431 20.8941 3.09559 20.3807 2.59133Z",fill:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})})}var m={ranking_star:"StarSvg_ranking_star__l4Ye3"};function h(){return(0,u.jsx)("svg",{className:m.ranking_star,viewBox:"0 0 1024 1024",height:"1em",width:"1em",children:(0,u.jsx)("path",{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"})})}var p=t(5677),v={card:"Card_card__-SwHU",img_wrp:"Card_img_wrp__w6RzI",img:"Card_img__8Ehvv",card_body:"Card_card_body__xpDzb",card_characteristics:"Card_card_characteristics__wNOHp",ranking:"Card_ranking__dOgZk",ranking_star:"Card_ranking_star__gD4Zt",episodes:"Card_episodes__eyqo9",title:"Card_title__A6GVy",view_btn:"Card_view_btn__8AoZW",favorite:"Card_favorite__mfXCn",favoriteButton:"Card_favoriteButton__-ELin"};function f(e){var r=e.id,t=e.title,m=e.image,f=e.ranking,g=e.episodes,C=(0,s.s0)(),x=(0,d.T)(),w=(0,d.C)(l.M),j=(0,d.C)(o.T),y=(0,d.C)(o.v),b=(0,i.useState)(!!w.find((function(e){return e.id===r}))),N=(0,n.Z)(b,2),S=N[0],k=N[1],L=p.T.getUser(y);return(0,i.useEffect)((function(){j&&p.T.setItem(y,(0,a.Z)((0,a.Z)({},L),{},{favorite:w}))}),[j,w,L,y]),(0,u.jsxs)("article",{className:"".concat(v.card," card border-primary"),children:[j?(0,u.jsx)("button",{className:"".concat(v.favoriteButton," ").concat(S?v.favorite:""),type:"button",onClick:function(){return function(e){if(S)return x((0,c.r7)(e)),void k(!1);x((0,c.a3)({id:r,title:t,image:m,ranking:f,episodes:g})),k(!0)}(r)},children:(0,u.jsx)(_,{})}):null,(0,u.jsx)("div",{className:"".concat(v.img_wrp),children:(0,u.jsx)("img",{className:"".concat(v.img),src:m,alt:t})}),(0,u.jsxs)("div",{className:v.card_body,children:[(0,u.jsxs)("div",{className:v.card_characteristics,children:[(0,u.jsxs)("div",{className:v.ranking,children:[(0,u.jsx)(h,{}),(0,u.jsx)("div",{children:f})]}),(0,u.jsxs)("div",{className:v.episodes,children:[g," episodes"]})]}),(0,u.jsx)("h2",{className:v.title,children:t})]}),(0,u.jsx)("button",{type:"button",className:"".concat(v.view_btn," btn btn-primary"),onClick:function(){C("/anime-list/detailed-item/".concat(r),{replace:!0})},children:"View more"})]})}var g={wrapper:"CardList_wrapper__wb2Tq"};function C(e){var r=e.cards,t=null===r||void 0===r?void 0:r.map((function(e){return(0,u.jsx)("li",{children:(0,u.jsx)(f,{id:e.id,title:e.title,image:e.image,ranking:e.ranking,episodes:e.episodes})},e.id)}));return(0,u.jsx)("ul",{className:g.wrapper,children:t})}C.defaultProps={cards:null}},5672:function(e,r,t){t.d(r,{E:function(){return g}});var a=t(9439),n=t(2791),i=t(7689),s=t(763),c=function(e,r){return e&&r?r.filter((function(r){return r.title.toLowerCase().includes(e.toLowerCase())})):null},l=t(3433),o=t(5677),d=function(e,r,t){if(""!==r){var a=o.T.getSearchHistory(e),n=[{query:r,timestamp:(new Date).toLocaleString(),queryResultNumber:(null===t||void 0===t?void 0:t.length)||0,queryResultLink:"/anime-list/search/?query=".concat(r,"&results=").concat(encodeURIComponent(JSON.stringify(t)))}].concat((0,l.Z)(a));o.T.setSearchHistory(e,n)}},u=t(5405),_=t(607),m=t(1694),h=t.n(m),p=t(184);function v(e){var r=e.input,t=e.results,a=e.maxResults,n=null===t||void 0===t?void 0:t.slice(0,a);return(0,p.jsx)("div",{className:h()("search-results-list__wrp","dropdown-menu",{show:!!r}),style:{marginTop:"10px"},children:null===n||void 0===n?void 0:n.map((function(e){return(0,p.jsx)("a",{href:"/anime-list/detailed-item/".concat(e.id),className:"dropdown-item",children:e.title},e.id)}))})}var f={wrapper:"SearchBar_wrapper__KGK67",input:"SearchBar_input__bIy50"};function g(e){var r=e.data,t=(0,n.useState)(""),l=(0,a.Z)(t,2),o=l[0],m=l[1],h=(0,n.useState)(null),g=(0,a.Z)(h,2),C=g[0],x=g[1],w=(0,u.C)(_.v),j=(0,i.s0)(),y=(0,s.debounce)((function(e){var t=c(e,r);x(t)}),300);return(0,p.jsxs)("div",{children:[(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x(null);var t=e.target.search.value,a=c(t,r);w&&d(w,t,a),j("/anime-list/search/?query=".concat(t,"&results=").concat(encodeURIComponent(JSON.stringify(a))))},className:f.wrapper,children:[(0,p.jsx)("input",{type:"search",value:o,className:f.input,placeholder:"Search...",name:"search",autoComplete:"off",onChange:function(e){var r=e.target.value;m(r),y(r)}}),(0,p.jsx)("button",{type:"submit",className:"btn btn-secondary my-2 my-sm-0",children:"Search"})]}),o&&(0,p.jsx)(v,{input:o,results:C,maxResults:5})]})}g.defaultProps={data:null}},9848:function(e,r,t){t.r(r),t.d(r,{Search:function(){return o}});var a=t(7689),n=t(3444),i=t(5672),s=t(5470),c={container:"Search_container__xaI+z",title:"Search_title__ZPO6U"},l=t(184);function o(){var e,r=(0,s.W)().data,t=(0,a.TH)(),o=new URLSearchParams(t.search).get("query"),d=new URLSearchParams(t.search).get("results"),u=d?JSON.parse(decodeURIComponent(d)):[];return e=!r?"Loading...":null===o||0===o.length||0===u.length?"No matching Anime":"Search Results:",(0,l.jsxs)("div",{className:c.container,children:[(0,l.jsx)(i.E,{data:r}),(0,l.jsx)("h4",{className:c.title,children:e}),(0,l.jsx)(n.C,{cards:u})]})}}}]);
//# sourceMappingURL=848.a2c5d00f.chunk.js.map