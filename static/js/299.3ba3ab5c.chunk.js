"use strict";(self.webpackChunkanime_list=self.webpackChunkanime_list||[]).push([[299],{9898:function(e,t,r){r.d(t,{C:function(){return C}});var n=r(9439),a=r(2791),i=r(7689),s=r(9431),c=r(757),o=r(607),l=r(1413),d=function(e,t,r){localStorage.setItem(e,JSON.stringify((0,l.Z)((0,l.Z)({},JSON.parse(t)),{},{favorite:r})))},u=function(e){return localStorage.getItem("".concat(e))},_=r(5405),m=r(184);function h(){return(0,m.jsx)("svg",{width:"23",height:"20",viewBox:"0 0 23 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:(0,m.jsx)("path",{d:"M20.3807 2.59133C19.8676 2.08683 19.2583 1.68663 18.5878 1.41358C17.9172 1.14054 17.1985 1 16.4727 1C15.7468 1 15.0281 1.14054 14.3576 1.41358C13.687 1.68663 13.0778 2.08683 12.5646 2.59133L11.4997 3.63785L10.4348 2.59133C9.39834 1.57276 7.99258 1.00053 6.52679 1.00053C5.06099 1.00053 3.65523 1.57276 2.61876 2.59133C1.58229 3.6099 1 4.99139 1 6.43187C1 7.87235 1.58229 9.25383 2.61876 10.2724L3.68367 11.3189L11.4997 19L19.3158 11.3189L20.3807 10.2724C20.8941 9.76814 21.3013 9.16942 21.5791 8.51045C21.857 7.85148 22 7.14517 22 6.43187C22 5.71857 21.857 5.01225 21.5791 4.35328C21.3013 3.69431 20.8941 3.09559 20.3807 2.59133Z",fill:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})})}var p={ranking_star:"StarSvg_ranking_star__l4Ye3"};function v(){return(0,m.jsx)("svg",{className:p.ranking_star,viewBox:"0 0 1024 1024",height:"1em",width:"1em",children:(0,m.jsx)("path",{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"})})}var f={card:"Card_card__-SwHU",img_wrp:"Card_img_wrp__w6RzI",img:"Card_img__8Ehvv",card_body:"Card_card_body__xpDzb",card_characteristics:"Card_card_characteristics__wNOHp",ranking:"Card_ranking__dOgZk",ranking_star:"Card_ranking_star__gD4Zt",episodes:"Card_episodes__eyqo9",title:"Card_title__A6GVy",view_btn:"Card_view_btn__8AoZW",favorite:"Card_favorite__mfXCn",favoriteButton:"Card_favoriteButton__-ELin"};function x(e){var t=e.id,r=e.title,l=e.image,p=e.ranking,x=e.episodes,g=(0,i.s0)(),C=(0,_.T)(),j=(0,_.C)(c.M),w=(0,_.C)(o.T),y=(0,_.C)(o.v),b=(0,a.useState)(!!j.find((function(e){return e.id===t}))),N=(0,n.Z)(b,2),k=N[0],L=N[1],S=u(y);return(0,a.useEffect)((function(){w&&d(y,S,j)}),[j,S,y,k,w]),(0,m.jsxs)("article",{className:"".concat(f.card," card border-primary"),children:[w?(0,m.jsx)("button",{className:"".concat(f.favoriteButton," ").concat(k?f.favorite:""),type:"button",onClick:function(){return function(e){if(k)return C((0,s.r7)(e)),void L(!1);C((0,s.a3)({id:t,title:r,image:l,ranking:p,episodes:x})),L(!0)}(t)},children:(0,m.jsx)(h,{})}):null,(0,m.jsx)("div",{className:"".concat(f.img_wrp),children:(0,m.jsx)("img",{className:"".concat(f.img),src:l,alt:r})}),(0,m.jsxs)("div",{className:f.card_body,children:[(0,m.jsxs)("div",{className:f.card_characteristics,children:[(0,m.jsxs)("div",{className:f.ranking,children:[(0,m.jsx)(v,{}),(0,m.jsx)("div",{children:p})]}),(0,m.jsxs)("div",{className:f.episodes,children:[x," episodes"]})]}),(0,m.jsx)("h2",{className:f.title,children:r})]}),(0,m.jsx)("button",{type:"button",className:"".concat(f.view_btn," btn btn-primary"),onClick:function(){g("detailed-item/".concat(t))},children:"View more"})]})}var g={wrapper:"CardList_wrapper__wb2Tq"};function C(e){var t=e.cards,r=null===t||void 0===t?void 0:t.map((function(e){return(0,m.jsx)("li",{children:(0,m.jsx)(x,{id:e.id,title:e.title,image:e.image,ranking:e.ranking,episodes:e.episodes})},e.id)}));return(0,m.jsx)("ul",{className:g.wrapper,children:r})}C.defaultProps={cards:null}},446:function(e,t,r){r.d(t,{E:function(){return m}});var n=r(9439),a=r(2791),i=r(7689),s=r(763),c=r(9753),o=r(1694),l=r.n(o),d=r(184);function u(e){var t=e.input,r=e.results,n=e.maxResults,a=null===r||void 0===r?void 0:r.slice(0,n);return(0,d.jsx)("div",{className:l()("search-results-list__wrp","dropdown-menu",{show:!!t}),style:{marginTop:"10px"},children:null===a||void 0===a?void 0:a.map((function(e){return(0,d.jsx)("a",{href:"/anime-list/detailed-item/".concat(e.id),className:"dropdown-item",children:e.title},e.id)}))})}var _={wrapper:"SearchBar_wrapper__KGK67",input:"SearchBar_input__bIy50"};function m(e){var t=e.data,r=(0,a.useState)(""),o=(0,n.Z)(r,2),l=o[0],m=o[1],h=(0,a.useState)(null),p=(0,n.Z)(h,2),v=p[0],f=p[1],x=(0,i.s0)(),g=(0,s.debounce)((function(e){var r=(0,c.R)(e,t);f(r)}),300);return(0,d.jsxs)("div",{children:[(0,d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f(null);var t=e.target.search.value;x("/anime-list/search/?query=".concat(t))},className:_.wrapper,children:[(0,d.jsx)("input",{type:"search",value:l,className:_.input,placeholder:"Search...",name:"search",autoComplete:"off",onChange:function(e){var t=e.target.value;m(t),g(t)}}),(0,d.jsx)("button",{type:"submit",className:"btn btn-secondary my-2 my-sm-0",children:"Search"})]}),l&&(0,d.jsx)(u,{input:l,results:v,maxResults:5})]})}m.defaultProps={data:null}},7299:function(e,t,r){r.r(t),r.d(t,{Main:function(){return p}});var n=r(3433),a=r(5518),i=r(9898),s=r(2791),c=r(1694),o=r.n(c),l=r(6125),d={title:"EntryText_title__0WqHK",name:"EntryText_name__bpL6w",text:"EntryText_text__nuLlh",text_search:"EntryText_text_search__PJMw5"},u=r(184);function _(){var e=(0,s.useContext)(l.N).theme;return(0,u.jsxs)("div",{children:[(0,u.jsxs)("h1",{className:o()(d.title,{"text-primary":"light"===e}),children:["Welcome to"," ",(0,u.jsx)("span",{className:o()(d.name,{"text-primary":"light"===e}),children:"Euphoric Serenety!"})]}),(0,u.jsx)("h4",{children:"Database of top Anime"}),(0,u.jsx)("p",{className:d.text,children:"Are you a fan of Anime? Look no further! Our Anime Catalogue is your go-to destination for exploring a wide range of captivating and popular anime titles. Immerse yourself in a world of vibrant characters, stunning visuals, and captivating storylines that will leave you spellbound."}),(0,u.jsx)("p",{className:o()(d.text_search,{"text-primary":"light"===e}),children:"Start searching your favourite anime by keywords or genres"})]})}var m=r(446),h={container:"Main_container__92uv-",card_container:"Main_card_container__7Zzog"};function p(){var e,t=(0,a.W)("").data;t&&(e=(0,n.Z)(t).sort((function(e,t){return t.ranking-e.ranking})).slice(0,5));return(0,u.jsxs)("div",{className:h.container,children:[(0,u.jsx)(_,{}),(0,u.jsx)(m.E,{data:t}),(0,u.jsx)("div",{className:h.card_container,children:t&&(0,u.jsx)(i.C,{cards:e})})]})}},9753:function(e,t,r){r.d(t,{R:function(){return n}});var n=function(e,t){return e&&t?t.filter((function(t){return t.title.toLowerCase().includes(e.toLowerCase())})):null}}}]);
//# sourceMappingURL=299.3ba3ab5c.chunk.js.map