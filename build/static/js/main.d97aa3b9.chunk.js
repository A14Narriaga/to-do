(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],{15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(7),i=c.n(a),d=c(3),l=c(2),r=(c(15),c(8)),j=function e(t,c,s,n){Object(r.a)(this,e),this.id=void 0,this.title=void 0,this.time=void 0,this.completed=void 0,this.id=t,this.title=c,this.time=s,this.completed=n},o=c(0),u=function(e){var t=e.id,c=e.title,s=e.time,n=e.completed,a=e.handleTaskBtns;return Object(o.jsxs)("div",{className:"task taskSelected",onClick:function(){return a(t)},children:[Object(o.jsx)("span",{children:n?Object(o.jsx)("i",{className:"fas fa-check-circle"}):Object(o.jsx)("i",{className:"far fa-circle"})}),Object(o.jsxs)("div",{className:"task-card",children:[Object(o.jsx)("p",{className:"title",id:"task-".concat(t),children:c}),Object(o.jsx)("p",{className:"time",children:s})]})]})},b=function(){return Object(o.jsxs)("div",{className:"card-day",children:[Object(o.jsx)("p",{className:"day",children:"Mon"}),Object(o.jsx)("p",{className:"num",children:"26"})]})},h=c(9),O=c(10),m=function(e){var t=e.showModal,c=e.setShowModal,n=e.tasks,a=e.setTasks,i=e.isEditing,r=e.currentTask,u=Object(s.useState)(""),b=Object(l.a)(u,2),m=b[0],f=b[1],x=Object(s.useState)(i?"00:00":""),p=Object(l.a)(x,2),k=p[0],N=p[1];return Object(o.jsx)("section",{className:"modal ".concat(t),children:Object(o.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(o.jsxs)("p",{children:[i?"Edit":"New"," Task"]}),Object(o.jsxs)("div",{className:"inputs",children:[Object(o.jsx)("input",{type:"text",onChange:function(e){return f(e.target.value)},id:"myTask",value:m}),Object(o.jsx)("input",{type:"time",onChange:function(e){return N(e.target.value)},id:"myTime",value:k})]}),Object(o.jsxs)("div",{className:"options",children:[i?Object(o.jsx)("button",{onClick:function(){return function(e){var t=n.map((function(t){return t.id===e?Object(d.a)(Object(d.a)({},t),{},{title:m,time:k}):t}));a(t),c("hidde"),f(""),N("")}(r)},children:"Edit"}):Object(o.jsx)("button",{onClick:function(){a([new j(Object(O.a)(3),m,k,!1)].concat(Object(h.a)(n))),c("hidde"),f(""),N("")},children:"Add"}),Object(o.jsx)("button",{onClick:function(){return c("hidde")},children:"Cancel"})]})]})})},f={all:function(){return!0},active:function(e){return!e.completed},completed:function(e){return e.completed}},x=Object.keys(f),p=[new j("0","leer pdf false","05:00 PM",!0),new j("1","leer pdf true","08:00 PM",!1),new j("2","leer pdf false","10:00 PM",!0)],k=function(){var e=Object(s.useState)(p),t=Object(l.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)("all"),i=Object(l.a)(a,2),r=i[0],j=i[1],h=Object(s.useState)("hidde"),O=Object(l.a)(h,2),k=O[0],N=O[1],v=Object(s.useState)(!1),S=Object(l.a)(v,2),C=S[0],w=S[1],T=Object(s.useState)("hidde"),y=Object(l.a)(T,2),M=y[0],g=y[1],E=Object(s.useState)(""),A=Object(l.a)(E,2),B=A[0],P=A[1],J=Object(s.useState)(""),D=Object(l.a)(J,2),F=D[0],H=D[1],I=function(e){H(e),g(""),P("hidde")};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("header",{children:"Hello Alan,"}),Object(o.jsxs)("section",{className:"calendar",children:[Object(o.jsx)("p",{className:"month",children:"April"}),Object(o.jsx)("section",{className:"cards-days",children:Object(o.jsx)(b,{})})]}),Object(o.jsxs)("section",{className:"card-tasks",children:[Object(o.jsx)("p",{className:"num-tasks",children:"Tasks"}),Object(o.jsx)("section",{className:"filters",children:x.map((function(e){return Object(o.jsx)("button",{onClick:function(){return j(e)},children:e},e)}))}),Object(o.jsx)("section",{className:"tasks",children:c.filter(f[r]).map((function(e){var t=e.id,c=e.title,s=e.time,n=e.completed;return Object(o.jsx)(u,{id:t,title:c,time:s,completed:n,handleTaskBtns:I},t)}))})]}),Object(o.jsxs)("div",{className:"btn",children:[Object(o.jsx)("button",{className:"".concat(B),onClick:function(){N("hidde"===k?"":"hidde"),w(!1)},children:Object(o.jsx)("i",{className:"fas fa-plus"})}),Object(o.jsx)("button",{className:"".concat(M),onClick:function(){return function(e){var t=c.filter((function(t){return t.id!==e}));n(t),g("hidde"),P("")}(F)},children:Object(o.jsx)("i",{className:"fas fa-trash-alt"})}),Object(o.jsx)("button",{className:"".concat(M),onClick:function(){return function(e){var t=c.map((function(t){return t.id===e?Object(d.a)(Object(d.a)({},t),{},{completed:!t.completed}):t}));n(t),g("hidde"),P("")}(F)},children:Object(o.jsx)("i",{className:"fas fa-check"})}),Object(o.jsx)("button",{className:"".concat(M),onClick:function(){N("hidde"===k?"":"hidde"),w(!0),g("hidde"),P("")},children:Object(o.jsx)("i",{className:"fas fa-edit"})})]}),Object(o.jsx)(m,{showModal:k,setShowModal:N,tasks:c,setTasks:n,isEditing:C,currentTask:F})]})};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(k,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.d97aa3b9.chunk.js.map