(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),u=n.n(c),i=(n(14),n(1)),l=n(8),o=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),u=c[0],o=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),u.trim().length>2&&(t((function(e){return[u].concat(Object(l.a)(e))})),o(""))}},r.a.createElement("input",{type:"text",value:u,onChange:function(e){o(e.target.value)}}))},s=function(e){var t=e.url,n=(e.id,e.title);return r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:t,alt:t}),r.a.createElement("br",null),r.a.createElement("p",null,n))},m=n(4),p=n.n(m),f=n(7),d=function(){var e=Object(f.a)(p.a.mark((function e(t){var n,a,r,c,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=9EKwDXfs3FID2ZpeS5O69LF1KOWrePU8"),e.next=4,fetch(n);case 4:return a=e.sent,e.next=7,a.json();case 7:return r=e.sent,c=r.data,u=c.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",u);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),r=n[0],c=n[1];return console.log(e),Object(a.useEffect)((function(){d(e).then((function(e){c({data:e,loading:!1})}))}),[]),r}(t),c=n.data,u=n.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"animate__animated animate__bounce animate__delay-2s"},t),u&&"loading",r.a.createElement("div",{className:"card-grid"},c.map((function(e){return r.a.createElement(s,Object.assign({},e,{key:e.id}))}))))},E=function(){var e=Object(a.useState)(["One Punch"]),t=Object(i.a)(e,2),n=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement("h2",null,"Gif expert app"),r.a.createElement("hr",null),r.a.createElement(o,{setCategories:c}),r.a.createElement("ol",null,n.map((function(e){return r.a.createElement(g,{category:e,key:e})}))))};u.a.render(r.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.48307de5.chunk.js.map