(this.webpackJsonpchukjokes=this.webpackJsonpchukjokes||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(2),r=n.n(c),i=(n(13),n(3)),s=n(4),u=n(6),l=n(5),h=n(7);n(14);function k(e){return console.log(e),a.a.createElement("div",null,e.jokes.map((function(e){return a.a.createElement("li",{key:e.id},e.joke)})))}var m=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={jokes:[]},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"getJoke",value:function(){var e=this;fetch("https://api.icndb.com/jokes/random/").then((function(e){return e.json()})).then((function(t){var n=e.state.jokes.slice();n.unshift(t.value),e.setState({jokes:n})}))}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"container"},a.a.createElement("div",null,a.a.createElement("button",{className:"gen",onClick:function(){return e.getJoke()}},"Next joke")),a.a.createElement("ul",null,a.a.createElement(k,{jokes:this.state.jokes})))}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.ffe231b2.chunk.js.map