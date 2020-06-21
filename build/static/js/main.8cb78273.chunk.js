(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,function(t,e,a){t.exports=a(20)},,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var o=a(0),n=a.n(o),s=a(7),i=a.n(s),c=(a(13),a(14),a(15),a(1)),l=a(2),r=a(4),d=a(3),u=a(5),h=(a(16),a(17),function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(r.a)(this,Object(d.a)(e).call(this,t))).state={},a}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return n.a.createElement("header",{className:"todo__top"},n.a.createElement("input",{type:"checkbox",name:"choose-all",title:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0432\u0441\u0451",className:"uk-checkbox todo__all",onChange:this.props.onCheck,checked:this.props.isAllChecked}),n.a.createElement("input",{type:"text",placeholder:"\u0427\u0442\u043e \u043d\u0443\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c?",className:"todo__field",onKeyDown:this.props.onKeyDown}),n.a.createElement("button",{className:"uk-button uk-button-link todo__remove-all",onClick:this.props.onRemoveAll,"data-index":"-1"},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u0441\u0451"))}}]),e}(n.a.Component)),m=(a(18),function(t){function e(){return Object(c.a)(this,e),Object(r.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;return n.a.createElement("ul",{className:"todo__list"},this.props.todoList.map((function(e,a){return n.a.createElement("li",{key:a,className:e.state?"checked":""},n.a.createElement("label",{className:"todo__item"},n.a.createElement("input",{type:"checkbox",name:"todo-list",checked:e.state,className:"uk-checkbox todo__check",onChange:t.props.onCheck,value:a}),e.name),n.a.createElement("button",{"data-index":a,className:"remove",onClick:t.props.onRemove},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))})))}}]),e}(n.a.Component)),f=(a(19),function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(r.a)(this,Object(d.a)(e).call(this,t))).state={},a}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;return n.a.createElement("nav",{className:"todo__nav"},Object.keys(this.props.navList).map((function(e,a){return n.a.createElement("button",{"data-filter":t.props.navList[e],key:a,className:"uk-button uk-button-link "+(t.props.activeLink===t.props.navList[e]?"active":""),onClick:t.props.goTo},e)})))}}]),e}(n.a.Component)),L=function(t){function e(t){var a;Object(c.a)(this,e),(a=Object(r.a)(this,Object(d.a)(e).call(this,t))).handleKeyDown=function(t){if("Enter"===t.key&&""!==t.target.value){var e={name:t.target.value,state:!1},o=a.state.todoList.slice();o.push(e),a.setState({todoList:o,recentList:o.slice(),isAllChecked:!1,todoState:a.getListState(o)},(function(){a.filtrateList(null),localStorage.setItem("todoList",JSON.stringify(a.state.todoList))})),t.target.value=""}},a.handleCheck=function(t){var e=t.target.name;if("choose-all"===e)if(a.state.isAllChecked)a.setState({todoList:a.state.recentList,todoState:a.getListState(a.state.recentList),isAllChecked:!1},(function(){localStorage.setItem("todoList",JSON.stringify(a.state.todoList)),a.filtrateList(null)}));else{var o=a.state.todoList.map((function(t){var e=Object.create(t);return e.state=!0,e}));a.setState({todoList:o,todoState:a.getListState(o),isAllChecked:!0},(function(){localStorage.setItem("todoList",JSON.stringify(a.state.todoList)),a.filtrateList(null)}))}else if("todo-list"===e){var n=t.target.value,s=a.state.todoList;s[n].state=!s[n].state,a.setState({todoList:s,recentList:s.slice(),todoState:a.getListState(s),isAllChecked:!1},(function(){localStorage.setItem("todoList",JSON.stringify(a.state.todoList)),a.filtrateList(null)}))}},a.getListState=function(t){var e=t.length,a=t.filter((function(t){return t.state})).length;return"".concat(a," / ").concat(e)},a.filtrateList=function(t){var e=t?t.target.dataset.filter:a.state.activeLink,o=a.state.todoList.filter((function(t){return"all"===e||("not-ready"===e&&!t.state||!("ready"!==e||!t.state))}));a.setState({filteredList:o,activeLink:e})},a.handleRemove=function(t){var e=t.target.dataset.index,o=[];e>0&&(o=a.state.todoList.slice()).splice(e,1),a.setState({todoList:o,recentList:o.slice(),isAllChecked:!1,todoState:a.getListState(o)},(function(){localStorage.setItem("todoList",JSON.stringify(a.state.todoList)),a.filtrateList(null)}))};var o=localStorage.getItem("todoList")?JSON.parse(localStorage.getItem("todoList")):[];return a.state={todoList:o,recentList:[],filteredList:[],isAllChecked:!1,todoState:"",activeLink:"all"},a}return Object(u.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){this.setState({recentList:this.state.todoList.slice(),filteredList:this.state.todoList.slice(),todoState:this.getListState(this.state.todoList)})}},{key:"render",value:function(){return n.a.createElement("div",{className:"todo"},n.a.createElement(h,{isAllChecked:this.state.isAllChecked,onKeyDown:this.handleKeyDown,onCheck:this.handleCheck,onRemoveAll:this.handleRemove}),n.a.createElement(m,{todoList:this.state.filteredList,onCheck:this.handleCheck,onRemove:this.handleRemove}),n.a.createElement("footer",{className:"todo__bottom"},n.a.createElement("span",{className:"todo__state"},"\u0413\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u044c: ",this.state.todoState),n.a.createElement(f,{navList:{"\u0412\u0441\u0435":"all","\u041d\u0435 \u0433\u043e\u0442\u043e\u0432\u043e":"not-ready","\u0413\u043e\u0442\u043e\u0432\u043e":"ready"},activeLink:this.state.activeLink,goTo:this.filtrateList})))}}]),e}(n.a.Component);var p=function(){return n.a.createElement("div",{className:"content"},n.a.createElement("header",{className:"header"},n.a.createElement("h1",{className:"header__title"},"TODO")),n.a.createElement("main",null,n.a.createElement(L,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.8cb78273.chunk.js.map