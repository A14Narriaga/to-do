(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],{15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),i=c(7),a=c.n(i),j=c(3),l=c(2),d=(c(15),c(8)),r=function e(t,c,s,n){Object(d.a)(this,e),this.id=void 0,this.title=void 0,this.time=void 0,this.completed=void 0,this.id=t,this.title=c,this.time=s,this.completed=n},o=c(0),b=function(e){var t=e.id,c=e.title,s=e.time,n=e.completed;return Object(o.jsxs)("div",{className:"task",children:[Object(o.jsx)("span",{children:n?Object(o.jsx)("i",{className:"fas fa-check-circle"}):Object(o.jsx)("i",{className:"far fa-circle"})}),Object(o.jsxs)("div",{className:"task-card",children:[Object(o.jsx)("p",{className:"title",id:"task-".concat(t),children:c}),Object(o.jsx)("p",{className:"time",children:s})]})]})},u=function(){return Object(o.jsxs)("div",{className:"card-day",children:[Object(o.jsx)("p",{className:"day",children:"Mon"}),Object(o.jsx)("p",{className:"num",children:"26"})]})},O=c(9),h=c(10),m=function(e){var t=e.showModal,c=e.setShowModal,n=e.tasks,i=e.setTasks,a=e.isEditing,d=Object(s.useState)(""),b=Object(l.a)(d,2),u=b[0],m=b[1],f=Object(s.useState)(a?"00:00":""),x=Object(l.a)(f,2),p=x[0],k=x[1];return Object(o.jsx)("section",{className:"modal ".concat(t),children:Object(o.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(o.jsxs)("p",{children:[a?"Edit":"New"," Task"]}),Object(o.jsxs)("div",{className:"inputs",children:[Object(o.jsx)("input",{type:"text",onChange:function(e){return m(e.target.value)},id:"myTask",value:u}),Object(o.jsx)("input",{type:"time",onChange:function(e){return k(e.target.value)},id:"myTime",value:p})]}),Object(o.jsxs)("div",{className:"options",children:[a?Object(o.jsx)("button",{onClick:function(){return function(e){var t=n.map((function(t){return t.id===e?Object(j.a)(Object(j.a)({},t),{},{title:u,time:p}):t}));i(t),c("hidde"),m(""),k("")}("0")},children:"Edit"}):Object(o.jsx)("button",{onClick:function(){i([new r(Object(h.a)(3),u,p,!1)].concat(Object(O.a)(n))),c("hidde"),m(""),k("")},children:"Add"}),Object(o.jsx)("button",{onClick:function(){return c("hidde")},children:"Cancel"})]})]})})},f={all:function(){return!0},active:function(e){return!e.completed},completed:function(e){return e.completed}},x=Object.keys(f),p=[new r("0","leer pdf false","05:00 PM",!0),new r("1","leer pdf true","08:00 PM",!1),new r("3","leer pdf false","10:00 PM",!0)],k=function(){var e=Object(s.useState)(p),t=Object(l.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)("all"),a=Object(l.a)(i,2),d=(a[0],a[1]),r=Object(s.useState)("hidde"),O=Object(l.a)(r,2),h=O[0],k=O[1],N=Object(s.useState)(!1),v=Object(l.a)(N,2),w=v[0],C=v[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("header",{children:"Hello Alan,"}),Object(o.jsxs)("section",{className:"calendar",children:[Object(o.jsx)("p",{className:"month",children:"April"}),Object(o.jsxs)("section",{className:"cards-days",children:[Object(o.jsx)(u,{}),Object(o.jsx)(u,{}),Object(o.jsx)(u,{}),Object(o.jsx)(u,{}),Object(o.jsx)(u,{})]})]}),Object(o.jsxs)("section",{className:"card-tasks",children:[Object(o.jsx)("p",{className:"num-tasks",children:"Tasks"}),Object(o.jsx)("section",{className:"filters",children:x.map((function(e){return Object(o.jsx)("button",{onClick:function(){return d(e)},children:e},e)}))}),Object(o.jsx)("section",{className:"tasks",children:c.filter(f.all).map((function(e){var t=e.id,c=e.title,s=e.time,n=e.completed;return Object(o.jsx)(b,{id:t,title:c,time:s,completed:n},t)}))})]}),Object(o.jsxs)("div",{className:"btn",children:[Object(o.jsx)("button",{onClick:function(){k("hidde"===h?"":"hidde"),C(!1)},children:Object(o.jsx)("i",{className:"fas fa-plus"})}),Object(o.jsx)("button",{onClick:function(){return function(e){var t=c.map((function(t){return t.id===e?Object(j.a)(Object(j.a)({},t),{},{completed:!t.completed}):t}));n(t)}("0")},children:Object(o.jsx)("i",{className:"fas fa-check"})}),Object(o.jsx)("button",{onClick:function(){return function(e){var t=c.filter((function(t){return t.id!==e}));n(t)}("0")},children:Object(o.jsx)("i",{className:"fas fa-trash-alt"})}),Object(o.jsx)("button",{onClick:function(){k("hidde"===h?"":"hidde"),C(!0)},children:Object(o.jsx)("i",{className:"fas fa-edit"})})]}),Object(o.jsx)(m,{showModal:h,setShowModal:k,tasks:c,setTasks:n,isEditing:w})]})};a.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(k,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.d475f45b.chunk.js.map