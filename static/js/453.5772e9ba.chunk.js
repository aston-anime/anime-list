"use strict";(self.webpackChunkanime_list=self.webpackChunkanime_list||[]).push([[453],{3444:function(r,a,i){i.d(a,{C:function(){return p}});var t=i(9439),n=i(2791),e=i(7689),s=i(9431),c=i(757),d=i(607),o=i(5405),l=i(184);function _(){return(0,l.jsx)("svg",{width:"23",height:"20",viewBox:"0 0 23 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M20.3807 2.59133C19.8676 2.08683 19.2583 1.68663 18.5878 1.41358C17.9172 1.14054 17.1985 1 16.4727 1C15.7468 1 15.0281 1.14054 14.3576 1.41358C13.687 1.68663 13.0778 2.08683 12.5646 2.59133L11.4997 3.63785L10.4348 2.59133C9.39834 1.57276 7.99258 1.00053 6.52679 1.00053C5.06099 1.00053 3.65523 1.57276 2.61876 2.59133C1.58229 3.6099 1 4.99139 1 6.43187C1 7.87235 1.58229 9.25383 2.61876 10.2724L3.68367 11.3189L11.4997 19L19.3158 11.3189L20.3807 10.2724C20.8941 9.76814 21.3013 9.16942 21.5791 8.51045C21.857 7.85148 22 7.14517 22 6.43187C22 5.71857 21.857 5.01225 21.5791 4.35328C21.3013 3.69431 20.8941 3.09559 20.3807 2.59133Z",fill:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})})}var u={ranking_star:"StarSvg_ranking_star__l4Ye3"};function v(){return(0,l.jsx)("svg",{className:u.ranking_star,viewBox:"0 0 1024 1024",height:"1em",width:"1em",children:(0,l.jsx)("path",{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"})})}var m={card:"Card_card__-SwHU",img_wrp:"Card_img_wrp__w6RzI",img:"Card_img__8Ehvv",card_body:"Card_card_body__xpDzb",card_characteristics:"Card_card_characteristics__wNOHp",ranking:"Card_ranking__dOgZk",ranking_star:"Card_ranking_star__gD4Zt",episodes:"Card_episodes__eyqo9",title:"Card_title__A6GVy",view_btn:"Card_view_btn__8AoZW",favorite:"Card_favorite__mfXCn",favoriteButton:"Card_favoriteButton__-ELin"};function C(r){var a=r.data,i=a.id,u=a.title,C=a.image,h=a.ranking,p=a.episodes,f=(0,e.s0)(),x=(0,o.T)(),g=(0,o.C)(c._),j=(0,o.C)(d.T),w=(0,n.useState)(!!g.find((function(r){return r.id===i}))),k=(0,t.Z)(w,2),N=k[0],b=k[1];return(0,l.jsxs)("article",{className:"".concat(m.card," card border-primary"),children:[j?(0,l.jsx)("button",{className:"".concat(m.favoriteButton," ").concat(N?m.favorite:""),type:"button",onClick:function(){return function(r){if(N)return x((0,s.r7)(r)),void b(!1);x((0,s.a3)(a)),b(!0)}(i)},children:(0,l.jsx)(_,{})}):null,(0,l.jsx)("div",{className:"".concat(m.img_wrp),children:(0,l.jsx)("img",{className:"".concat(m.img),src:C,alt:u})}),(0,l.jsxs)("div",{className:m.card_body,children:[(0,l.jsxs)("div",{className:m.card_characteristics,children:[(0,l.jsxs)("div",{className:m.ranking,children:[(0,l.jsx)(v,{}),(0,l.jsx)("div",{children:h})]}),(0,l.jsxs)("div",{className:m.episodes,children:[p," episodes"]})]}),(0,l.jsx)("h2",{className:m.title,children:u})]}),(0,l.jsx)("button",{type:"button",className:"".concat(m.view_btn," btn btn-primary"),onClick:function(){f("/anime-list/detailed-item/".concat(i),{replace:!0})},children:"View more"})]})}C.defaultProps={data:null};var h={wrapper:"CardList_wrapper__wb2Tq"};function p(r){var a=r.cards,i=null===a||void 0===a?void 0:a.map((function(r){return(0,l.jsx)("li",{children:(0,l.jsx)(C,{data:r})},r.id)}));return(0,l.jsx)("ul",{className:h.wrapper,children:i})}p.defaultProps={cards:null}},3453:function(r,a,i){i.r(a),i.d(a,{Favorites:function(){return l}});var t=i(7689),n=i(5405),e=i(3444),s=i(757),c=i(3090),d={container:"Favorites_container__dZNlb",customButton:"Favorites_customButton__qmGGd",emptyFavorites:"Favorites_emptyFavorites__N4Jku"},o=i(184);function l(){var r=(0,t.s0)(),a=(0,n.C)(s._);return(0,o.jsxs)("div",{className:d.container,children:[a.length?(0,o.jsx)("div",{className:"main-container",children:(0,o.jsx)("div",{className:"card-container",children:a&&(0,o.jsx)(e.C,{cards:a})})}):(0,o.jsx)("div",{className:d.emptyFavorites,children:"Favorites are empty"}),(0,o.jsx)(c.z,{onClick:function(){r("/anime-list")},variant:"primary",className:d.customButton,children:"\u2190 Back"})]})}},757:function(r,a,i){i.d(a,{_:function(){return n}});var t=i(3749),n=function(r){return r[t.L.Favorite].favorites}}}]);
//# sourceMappingURL=453.5772e9ba.chunk.js.map