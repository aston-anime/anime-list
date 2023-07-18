"use strict";(self.webpackChunkanime_list=self.webpackChunkanime_list||[]).push([[299],{3444:function(e,t,r){r.d(t,{C:function(){return g}});var n=r(1413),a=r(9439),i=r(2791),s=r(7689),c=r(9431),o=r(757),l=r(607),d=r(5405),u=r(184);function _(){return(0,u.jsx)("svg",{width:"23",height:"20",viewBox:"0 0 23 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:(0,u.jsx)("path",{d:"M20.3807 2.59133C19.8676 2.08683 19.2583 1.68663 18.5878 1.41358C17.9172 1.14054 17.1985 1 16.4727 1C15.7468 1 15.0281 1.14054 14.3576 1.41358C13.687 1.68663 13.0778 2.08683 12.5646 2.59133L11.4997 3.63785L10.4348 2.59133C9.39834 1.57276 7.99258 1.00053 6.52679 1.00053C5.06099 1.00053 3.65523 1.57276 2.61876 2.59133C1.58229 3.6099 1 4.99139 1 6.43187C1 7.87235 1.58229 9.25383 2.61876 10.2724L3.68367 11.3189L11.4997 19L19.3158 11.3189L20.3807 10.2724C20.8941 9.76814 21.3013 9.16942 21.5791 8.51045C21.857 7.85148 22 7.14517 22 6.43187C22 5.71857 21.857 5.01225 21.5791 4.35328C21.3013 3.69431 20.8941 3.09559 20.3807 2.59133Z",fill:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})})}var m={ranking_star:"StarSvg_ranking_star__l4Ye3"};function h(){return(0,u.jsx)("svg",{className:m.ranking_star,viewBox:"0 0 1024 1024",height:"1em",width:"1em",children:(0,u.jsx)("path",{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"})})}var p=r(5677),v={card:"Card_card__-SwHU",img_wrp:"Card_img_wrp__w6RzI",img:"Card_img__8Ehvv",card_body:"Card_card_body__xpDzb",card_characteristics:"Card_card_characteristics__wNOHp",ranking:"Card_ranking__dOgZk",ranking_star:"Card_ranking_star__gD4Zt",episodes:"Card_episodes__eyqo9",title:"Card_title__A6GVy",view_btn:"Card_view_btn__8AoZW",favorite:"Card_favorite__mfXCn",favoriteButton:"Card_favoriteButton__-ELin"};function f(e){var t=e.id,r=e.title,m=e.image,f=e.ranking,x=e.episodes,g=(0,s.s0)(),C=(0,d.T)(),j=(0,d.C)(o.M),w=(0,d.C)(l.T),y=(0,d.C)(l.v),b=(0,i.useState)(!!j.find((function(e){return e.id===t}))),N=(0,a.Z)(b,2),k=N[0],L=N[1],S=p.T.getUser(y);return(0,i.useEffect)((function(){w&&p.T.setItem(y,(0,n.Z)((0,n.Z)({},S),{},{favorite:j}))}),[w,j,S,y]),(0,u.jsxs)("article",{className:"".concat(v.card," card border-primary"),children:[w?(0,u.jsx)("button",{className:"".concat(v.favoriteButton," ").concat(k?v.favorite:""),type:"button",onClick:function(){return function(e){if(k)return C((0,c.r7)(e)),void L(!1);C((0,c.a3)({id:t,title:r,image:m,ranking:f,episodes:x})),L(!0)}(t)},children:(0,u.jsx)(_,{})}):null,(0,u.jsx)("div",{className:"".concat(v.img_wrp),children:(0,u.jsx)("img",{className:"".concat(v.img),src:m,alt:r})}),(0,u.jsxs)("div",{className:v.card_body,children:[(0,u.jsxs)("div",{className:v.card_characteristics,children:[(0,u.jsxs)("div",{className:v.ranking,children:[(0,u.jsx)(h,{}),(0,u.jsx)("div",{children:f})]}),(0,u.jsxs)("div",{className:v.episodes,children:[x," episodes"]})]}),(0,u.jsx)("h2",{className:v.title,children:r})]}),(0,u.jsx)("button",{type:"button",className:"".concat(v.view_btn," btn btn-primary"),onClick:function(){g("/anime-list/detailed-item/".concat(t),{replace:!0})},children:"View more"})]})}var x={wrapper:"CardList_wrapper__wb2Tq"};function g(e){var t=e.cards,r=null===t||void 0===t?void 0:t.map((function(e){return(0,u.jsx)("li",{children:(0,u.jsx)(f,{id:e.id,title:e.title,image:e.image,ranking:e.ranking,episodes:e.episodes})},e.id)}));return(0,u.jsx)("ul",{className:x.wrapper,children:r})}g.defaultProps={cards:null}},1080:function(e,t,r){r.d(t,{a:function(){return s}});var n=r(643),a={loader:"Loader_loader__+lRPl"},i=r(184);function s(){return(0,i.jsxs)("div",{className:a.loader,children:[(0,i.jsx)(n.iT,{ariaLabel:"loading-indicator",width:"100vw"})," "]})}},5672:function(e,t,r){r.d(t,{E:function(){return x}});var n=r(9439),a=r(2791),i=r(7689),s=r(763),c=function(e,t){return e&&t?t.filter((function(t){return t.title.toLowerCase().includes(e.toLowerCase())})):null},o=r(3433),l=r(5677),d=function(e,t,r){if(""!==t){var n=l.T.getSearchHistory(e),a=[{query:t,timestamp:(new Date).toLocaleString(),queryResultNumber:(null===r||void 0===r?void 0:r.length)||0,queryResultLink:"/anime-list/search/?query=".concat(t,"&results=").concat(encodeURIComponent(JSON.stringify(r)))}].concat((0,o.Z)(n));l.T.setSearchHistory(e,a)}},u=r(5405),_=r(607),m=r(1694),h=r.n(m),p=r(184);function v(e){var t=e.input,r=e.results,n=e.maxResults,a=null===r||void 0===r?void 0:r.slice(0,n);return(0,p.jsx)("div",{className:h()("search-results-list__wrp","dropdown-menu",{show:!!t}),style:{marginTop:"10px"},children:null===a||void 0===a?void 0:a.map((function(e){return(0,p.jsx)("a",{href:"/anime-list/detailed-item/".concat(e.id),className:"dropdown-item",children:e.title},e.id)}))})}var f={wrapper:"SearchBar_wrapper__KGK67",input:"SearchBar_input__bIy50"};function x(e){var t=e.data,r=(0,a.useState)(""),o=(0,n.Z)(r,2),l=o[0],m=o[1],h=(0,a.useState)(null),x=(0,n.Z)(h,2),g=x[0],C=x[1],j=(0,u.C)(_.v),w=(0,i.s0)(),y=(0,s.debounce)((function(e){var r=c(e,t);C(r)}),300);return(0,p.jsxs)("div",{children:[(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),C(null);var r=e.target.search.value,n=c(r,t);j&&d(j,r,n),w("/anime-list/search/?query=".concat(r,"&results=").concat(encodeURIComponent(JSON.stringify(n))))},className:f.wrapper,children:[(0,p.jsx)("input",{type:"search",value:l,className:f.input,placeholder:"Search...",name:"search",autoComplete:"off",onChange:function(e){var t=e.target.value;m(t),y(t)}}),(0,p.jsx)("button",{type:"submit",className:"btn btn-secondary my-2 my-sm-0",children:"Search"})]}),l&&(0,p.jsx)(v,{input:l,results:g,maxResults:5})]})}x.defaultProps={data:null}},7299:function(e,t,r){r.r(t),r.d(t,{Main:function(){return v}});var n=r(3433),a=r(5470),i=r(3444),s=r(2791),c=r(1694),o=r.n(c),l=r(6125),d={title:"EntryText_title__0WqHK",name:"EntryText_name__bpL6w",text:"EntryText_text__nuLlh",text_search:"EntryText_text_search__PJMw5"},u=r(184);function _(){var e=(0,s.useContext)(l.N).theme;return(0,u.jsxs)("div",{children:[(0,u.jsxs)("h1",{className:o()(d.title,{"text-primary":"light"===e}),children:["Welcome to"," ",(0,u.jsx)("span",{className:o()(d.name,{"text-primary":"light"===e}),children:"Euphoric Serenety!"})]}),(0,u.jsx)("h4",{children:"Database of top Anime"}),(0,u.jsx)("p",{className:d.text,children:"Are you a fan of Anime? Look no further! Our Anime Catalogue is your go-to destination for exploring a wide range of captivating and popular anime titles. Immerse yourself in a world of vibrant characters, stunning visuals, and captivating storylines that will leave you spellbound."}),(0,u.jsx)("p",{className:o()(d.text_search,{"text-primary":"light"===e}),children:"Start searching your favourite anime by keywords or genres"})]})}var m=r(1080),h=r(5672),p={container:"Main_container__92uv-",card_container:"Main_card_container__7Zzog"};function v(){var e,t=(0,a.W)("").data;t&&(e=(0,n.Z)(t).sort((function(e,t){return t.ranking-e.ranking})).slice(0,5));return(0,u.jsxs)("div",{className:p.container,children:[(0,u.jsx)(_,{}),(0,u.jsx)(h.E,{data:t}),t?(0,u.jsx)("div",{className:p.card_container,children:t&&(0,u.jsx)(i.C,{cards:e})}):(0,u.jsx)(m.a,{})]})}}}]);
//# sourceMappingURL=299.fbbec811.chunk.js.map