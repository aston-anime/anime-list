"use strict";(self.webpackChunkanime_list=self.webpackChunkanime_list||[]).push([[297],{4371:function(r,t,n){n.d(t,{a:function(){return c}});var e=n(2791),o=n(7689),i=n(607),s=n(5405),c=function(){var r=(0,s.C)(i.T),t=(0,o.s0)();return(0,e.useEffect)((function(){r||t("/anime-list/login")}),[r,t]),r}},1297:function(r,t,n){n.r(t),n.d(t,{History:function(){return U}});var e,o=n(7689),i=n(1087),s={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},c=new Uint8Array(16);function a(){if(!e&&!(e="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return e(c)}for(var u=[],d=0;d<256;++d)u.push((d+256).toString(16).slice(1));function l(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(u[r[t+0]]+u[r[t+1]]+u[r[t+2]]+u[r[t+3]]+"-"+u[r[t+4]]+u[r[t+5]]+"-"+u[r[t+6]]+u[r[t+7]]+"-"+u[r[t+8]]+u[r[t+9]]+"-"+u[r[t+10]]+u[r[t+11]]+u[r[t+12]]+u[r[t+13]]+u[r[t+14]]+u[r[t+15]]).toLowerCase()}var h=function(r,t,n){if(s.randomUUID&&!t&&!r)return s.randomUUID();var e=(r=r||{}).random||(r.rng||a)();if(e[6]=15&e[6]|64,e[8]=63&e[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=e[o];return t}return l(e)},m=n(4371),p=n(5405),f=n(3815),y=n(607),j=n(3090),x={container:"History_container__E5lHK",customButton:"History_customButton__JkexN"},v=n(184);function U(){var r=(0,m.a)(),t=(0,o.s0)(),n=(0,p.C)(y.v)||"",e=f.T.getSearchHistory(n);return r?(0,v.jsxs)("div",{className:x.container,children:[(0,v.jsx)("h3",{children:"Search History:"})," ",(0,v.jsxs)("table",{className:"table table-hover",children:[(0,v.jsx)("thead",{children:(0,v.jsxs)("tr",{children:[(0,v.jsx)("th",{scope:"col",children:"Date & Time"}),(0,v.jsx)("th",{scope:"col",children:"Query"}),(0,v.jsx)("th",{scope:"col",children:"Matches"}),(0,v.jsx)("th",{scope:"col",children:"Results"})]})}),(0,v.jsx)("tbody",{children:e.map((function(r){var t=r.query,n=r.timestamp,e=r.queryResultNumber,o=r.queryResultLink;return(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:n}),(0,v.jsx)("td",{children:t}),(0,v.jsx)("td",{children:e}),(0,v.jsx)("td",{children:(0,v.jsx)(i.rU,{to:o,children:"View"})})]},h())}))})]}),(0,v.jsx)(j.z,{onClick:function(){t("/anime-list")},variant:"primary",className:x.customButton,children:"\u2190 Back"})]}):null}}}]);
//# sourceMappingURL=297.886c668b.chunk.js.map