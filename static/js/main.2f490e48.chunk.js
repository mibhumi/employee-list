(this["webpackJsonpemployee-list"]=this["webpackJsonpemployee-list"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(3),s=n.n(r),o=(n(12),n(4)),l=n(5),a=n(7),u=n(6),h=(n(13),n(0)),d=function(e){return Object(h.jsx)("div",{children:Object(h.jsx)("h2",{children:e.employee.name})})},j=function(e){return Object(h.jsx)("div",{children:e.employees.map((function(e){return Object(h.jsx)(d,{employee:e},e.id)}))})},p=function(e){var t=e.placeholder,n=e.handleChange;return Object(h.jsx)("div",{children:Object(h.jsx)("input",{type:"search",placeholder:t,onChange:n})})},m=function(e){Object(a.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).state={employeeList:[],searchField:null},c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({employeeList:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.employeeList,c=t.searchField,i=n.filter((function(e){return e.name.includes(c)}));return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"My employee list"}),Object(h.jsx)(p,{placeholder:"search employee",handleChange:function(t){return e.setState({searchField:t.target.value})}}),Object(h.jsx)(j,{name:"Bhumi Patel",employees:i})]})}}]),n}(c.Component),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.2f490e48.chunk.js.map