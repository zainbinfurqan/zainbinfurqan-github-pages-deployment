(this["webpackJsonpgh-pages-dev"]=this["webpackJsonpgh-pages-dev"]||[]).push([[0],{18:function(e,t,n){e.exports=n(29)},23:function(e,t,n){},24:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(10),o=n.n(c),s=(n(23),n(24),n(16)),u=n(7),i=n(17),l=n(8),p={isloading:!1};var d={users:[]};var h=Object(u.b)({loadingReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(console.log("action=>",t),t.type){case"LOADING_START":case"LOADING_END":return Object(l.a)(Object(l.a)({},e),{},{isloading:t.payload});default:return e}},userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(console.log("action=>",t),t.type){case"SET_USER_DATA":return Object(l.a)(Object(l.a)({},e),{},{users:t.payload});default:return e}}}),O=n(5),f=n.n(O),v=n(9),_={LOADING_START:"LOADING_START",LOADING_END:"LOADING_END",SET_USER_DATA:"SET_USER_DATA"},E=n(15),w=function(){var e=Object(E.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,console.log("json=>",n),200===t.status){e.next=9;break}throw new Error(n.error);case 9:return e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b={setUsers:function(e){return{type:_.SET_USER_DATA,payload:e}}},A=b,g=f.a.mark(j),D=f.a.mark(m),T=f.a.mark(N);function j(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.d)(_.LOADING_START,m);case 2:case"end":return e.stop()}}),g)}function m(){var e;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(v.b)(w);case 3:return e=t.sent,t.next=6,Object(v.c)(A.setUsers(e));case 6:return t.next=8,Object(v.c)({type:_.LOADING_END,payload:!1});case 8:t.next=12;break;case 10:t.prev=10,t.t0=t.catch(0);case 12:case"end":return t.stop()}}),D,null,[[0,10]])}function N(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)([j()]);case 2:case"end":return e.stop()}}),T)}var S=Object(i.a)(),x=Object(u.d)(h,Object(u.c)(Object(u.a)(S),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));S.run(N);var y=x;var R=function(){return a.a.createElement(s.a,{store:y},a.a.createElement("div",{className:"App"},a.a.createElement("p",null,"Hellow all github actions")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.fb5ec86d.chunk.js.map