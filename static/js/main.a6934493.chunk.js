(this.webpackJsonppso=this.webpackJsonppso||[]).push([[0],{20:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a,r,c,i,o,s,l,u,d,p=n(1),j=n.n(p),b=n(11),h=n.n(b),f=(n(20),n(2)),O=n(3),m=n.p+"static/media/logo.6ce24c58.svg",v=n(0),g=O.a.img(a||(a=Object(f.a)(["\n    height: 40vmin;\n    pointer-events: none;\n    @media (prefers-reduced-motion: no-preference) {\n        animation: App-logo-spin infinite 20s linear;\n    }\n"]))),x=O.a.header(r||(r=Object(f.a)(["\n    background-color: #282c34;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-size: calc(10px + 2vmin);\n    color: white;\n"]))),w=O.a.a(c||(c=Object(f.a)(["\n    color: #61dafb;\n"]))),C=function(){return Object(v.jsxs)(x,{children:[Object(v.jsx)(g,{src:m,alt:"logo"}),Object(v.jsx)("p",{children:"Edit src/App.tsx and save to reload."}),Object(v.jsx)(w,{href:"https://github.com/jraleman",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})},S=n(5),y=n.n(S),R=n(7),k=n(4),I=n(25),F=function(){var e=Object(R.a)(y.a.mark((function e(t){var n,a,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.src,a=null,r={maxWidth:64,maxHeight:64},e.prev=3,e.next=6,I(n,r);case 6:a=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.log(e.t0);case 12:return e.abrupt("return",a);case 13:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t){return e.apply(this,arguments)}}(),D=n(32),L=function(e){var t=e.lines,n=void 0===t?[""]:t;return Object(v.jsx)(v.Fragment,{children:null===n||void 0===n?void 0:n.map((function(e){return e&&Object(v.jsx)(E,{children:e},D())}))})},T=O.a.div(i||(i=Object(f.a)(["\n    font-size: 6px;\n    margin: 0 auto;\n    border: #282c34;\n    border-width: medium;\n    border-style: solid;\n    border-radius: 2em;\n    height: 425px;\n    width: 425px;\n    margin-top: 2em;\n    margin-bottom: 2em;\n    margin-left: 2em;\n    margin-right: 2em;\n    cursor: pointer;\n"]))),E=O.a.code(o||(o=Object(f.a)(["\n    display: block;\n    white-space: pre;\n"]))),M=O.a.img(s||(s=Object(f.a)(["\n    width: auto;\n    height: 100%;\n"]))),B=function(e){var t=e.src,n=e.alt,a=void 0===n?"":n,r=Object(p.useState)(""),c=Object(k.a)(r,2),i=c[0],o=c[1],s=Object(p.useState)(!1),l=Object(k.a)(s,2),u=l[0],d=l[1];Object(p.useEffect)((function(){(function(){var e=Object(R.a)(y.a.mark((function e(){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F({src:t});case 2:n=e.sent,o(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]);var j=Object(p.useCallback)((function(){d(!0)}),[]),b=Object(p.useCallback)((function(){d(!1)}),[]),h=null===i||void 0===i?void 0:i.split("\n");return Object(v.jsxs)(T,{onMouseDown:j,onMouseUp:b,onTouchStart:j,onTouchEnd:b,children:[!u&&Object(v.jsx)(M,{src:t,alt:a}),u&&Object(v.jsx)(L,{lines:h})]})},P=[n.p+"static/media/al-rappy.ddcd8332.jpg",n.p+"static/media/del-rappy.9c9d0c41.jpg",n.p+"static/media/love-rappy1.c37b43f4.jpg",n.p+"static/media/rappy.66f75aeb.jpg"],V=O.a.div(l||(l=Object(f.a)(["\n    display: inline-grid;\n"]))),J=O.a.h3(u||(u=Object(f.a)(["\n    text-align: center;\n"]))),z=function(){var e=P;return Object(v.jsxs)(V,{children:[Object(v.jsx)("hr",{}),Object(v.jsx)(J,{children:"Rappies! \ud83d\udc23"}),null===e||void 0===e?void 0:e.map((function(e){return Object(v.jsx)(B,{src:e})})),Object(v.jsx)("hr",{})]})},A=n(15),G=[{0:"Pioneer 2",1:"Forest 1",2:"Forest 2",3:"Caves 1",4:"Caves 2",5:"Caves 3",6:"Mines 1",7:"Mines 2",8:"Ruins 1",9:"Ruins 2",10:"Ruins 3",11:"Dragon",12:"De Rol Le",13:"Vol Opt",14:"Falz",15:"ID Lobby",16:"Battle Spaceship",17:"Battle Palace (aka Temple)"},{0:"Lab"},{0:"Lab",1:"VR Temple \u03b1",2:"VR Temple \u03b2",3:"VR Spaceship \u03b1",4:"VR Spaceship \u03b2",5:"Central Control Area",6:"Jungle North",7:"Jungle East",8:"Mountain",9:"Seaside Day",10:"Seabed Upper",11:"Seabed Lower",12:"Gal Gryphon",13:"Olga Flow",14:"Barba Ray",15:"Gol Dragon",16:"Seaside Night",17:"Tower"},{0:"Pioneer 2",1:"Crater (Eastern Route)",2:"Crater (Western Route)",3:"Crater (Southern Route)",4:"Crater (Northern Route)",5:"Crater Interior",6:"Desert 1",7:"Desert 2",8:"Desert 3",9:"Saint Million / Shambertin",10:"Test Map (Caves 2)"}],N=function(e){var t=e.episode,n=e.area,a=e.solo,r=void 0===a||a;return G[t][n]?"".concat(r?"/warpme":"/warpall"," ").concat(n):"Wrong episode/area code"},W=function(e){var t=e.episode,n=e.area,a=e.solo,r=Object(p.useState)(null),c=Object(k.a)(r,2),i=c[0],o=c[1];return Object(p.useEffect)((function(){var e="";1===t&&(e=function(e){var t=e.area,n=e.solo;return N({episode:0,area:t,solo:n})}({area:n,solo:a})),o(e)}),[t,n,a,o]),i?Object(v.jsx)("code",{children:i}):null},U=function(e){var t=Object(p.useState)(null),n=Object(k.a)(t,2),a=n[0],r=n[1];e.weaponId,e.grind,e.special,e.percentages,e.armorId,e.slots,e.def,e.evp,e.itemId,e.amount,e.unitId,e.suffix,e.value,e.level,e.mesetas;return Object(p.useEffect)((function(){r("")}),[]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{children:"LootCalculator"}),Object(v.jsx)("div",{children:a})]})},H=1,_=2,q=!1,K={weaponId:"",grind:"",special:"",percentages:{native:"",aBeast:"",machine:"",dark:"",hit:""},armorId:"",slots:"",def:"",evp:"",itemId:"",amount:"",unitId:"",suffix:"",value:"",level:"",mesetas:0},Q=function(){var e=H,t=_,n=q;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("hr",{}),Object(v.jsx)("div",{children:"SandboxCalculator"}),Object(v.jsx)(W,{episode:e,area:t,solo:n}),Object(v.jsx)(U,Object(A.a)({},K)),Object(v.jsx)("hr",{})]})},X=O.a.div(d||(d=Object(f.a)(["\n  text-align: center;\n"]))),Y=function(){return Object(v.jsxs)(X,{children:[Object(v.jsx)(C,{}),Object(v.jsx)(Q,{}),Object(v.jsx)(z,{})]})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};h.a.render(Object(v.jsx)(j.a.StrictMode,{children:Object(v.jsx)(Y,{})}),document.getElementById("root")),Z()}},[[34,1,2]]]);
//# sourceMappingURL=main.a6934493.chunk.js.map