(this["webpackJsonpfinal-project-starter"]=this["webpackJsonpfinal-project-starter"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"ID":"0","School":"CISC","ClassID":108,"CourseName":"Introduction to Computer Science I","Desc":"Test","Credits":3},{"ID":"1","School":"EGGG","ClassID":101,"CourseName":"Introduction to Engineering","Desc":"Test","Credits":2},{"ID":"2","School":"ENGL","ClassID":110,"CourseName":"Seminar in Composition","Desc":"Test","Credits":3},{"ID":"3","School":"MATH","ClassID":241,"CourseName":"Analytic Geometry and Calculus A","Desc":"Test","Credits":4},{"ID":"4","School":"HIST","ClassID":101,"CourseName":"Europe and the World to 1648","Desc":"Test","Credits":3}]')},16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(9),a=n.n(s),o=(n(16),n(7)),i=n(3),l=n(4),d=n(5),u=n(11),j=(n(17),n(10)),h=n(0),C=function(e){var t=e.course,n=e.handleEditClick,c=e.handleDeleteClick;return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:t.School}),Object(h.jsx)("td",{children:t.ClassID}),Object(h.jsx)("td",{children:t.CourseName}),Object(h.jsx)("td",{children:t.Desc}),Object(h.jsx)("td",{children:t.Credits}),Object(h.jsxs)("td",{children:[Object(h.jsx)("button",{type:"button",onClick:function(e){return n(e,t)},children:"Edit"}),Object(h.jsx)("button",{type:"button",onClick:function(){return c(t.ID)},children:"Delete"})]})]},t.ID)},b=function(e){var t=e.editCourseData,n=e.handleEditCourseChange,c=e.handleCancelClick;return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"text",required:!0,placeholder:"Enter School",name:"School",value:t.School,onChange:n})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",required:!0,placeholder:"Enter Course ID",name:"ClassID",value:t.ClassID,onChange:n})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"text",required:!0,placeholder:"Enter Course Name",name:"CourseName",value:t.CourseName,onChange:n})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"text",required:!0,placeholder:"Enter Desc",name:"Desc",value:t.Desc,onChange:n})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",required:!0,placeholder:"Enter Credit Amount",name:"Credits",value:t.Credits,onChange:n})}),Object(h.jsxs)("td",{children:[Object(h.jsx)("button",{type:"submit",children:"Save"}),Object(h.jsx)("button",{type:"button",onClick:c,children:"Cancel"})]})]})},D=function(){var e=Object(c.useState)(j),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)({ID:"",School:"",ClassID:108,CourseName:"",Desc:"",Credits:3}),a=Object(d.a)(s,2),D=a[0],O=a[1],p=Object(c.useState)({ID:"",School:"",ClassID:108,CourseName:"",Desc:"",Credits:3}),x=Object(d.a)(p,2),m=x[0],I=x[1],S=Object(c.useState)(""),f=Object(d.a)(S,2),g=f[0],v=f[1],N=function(e){e.preventDefault();var t=e.target.name,n=e.target.value,c=Object(l.a)(Object(l.a)({},D),{},Object(i.a)({},t,n));O(c)},E=function(e){e.preventDefault();var t=e.target.name,n=e.target.value,c=Object(l.a)(Object(l.a)({},m),{},Object(i.a)({},t,n));I(c)},y=function(e,t){e.preventDefault(),v(t.ID);var n={ID:t.ID,School:t.School,ClassID:t.ClassID,CourseName:t.CourseName,Desc:t.Desc,Credits:t.Credits};I(n)},k=function(){v("")},q=function(e){var t=Object(o.a)(n),c=n.findIndex((function(t){return t.ID=e}));t.splice(c,1),r(t)};return Object(h.jsxs)("div",{className:"app-container",children:[Object(h.jsx)("form",{onSubmit:function(e){e.preventDefault();var t={ID:g,School:m.School,ClassID:m.ClassID,CourseName:m.CourseName,Desc:m.Desc,Credits:m.Credits},c=Object(o.a)(n);c[n.findIndex((function(e){return e.ID===g}))]=t,r(c)},children:Object(h.jsxs)("table",{children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"School"}),Object(h.jsx)("th",{children:"ClassID"}),Object(h.jsx)("th",{children:"Course Name"}),Object(h.jsx)("th",{children:"Desc"}),Object(h.jsx)("th",{children:"Credits"}),Object(h.jsx)("th",{children:"Actions"})]})}),Object(h.jsx)("tbody",{children:n.map((function(e){return Object(h.jsx)(c.Fragment,{children:g===e.ID?Object(h.jsx)(b,{editCourseData:m,handleEditCourseChange:E,handleCancelClick:k}):Object(h.jsx)(C,{course:e,handleEditClick:y,handleDeleteClick:q})},e.ID)}))})]})}),Object(h.jsx)("h2",{children:"Add another Class"}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={ID:Object(u.a)(),School:D.School,ClassID:D.ClassID,CourseName:D.CourseName,Desc:D.Desc,Credits:D.Credits},c=[].concat(Object(o.a)(n),[t]);r(c)},children:[Object(h.jsx)("input",{type:"text",name:"School",required:!0,placeholder:"Enter a School.",onChange:N}),Object(h.jsx)("input",{type:"number",name:"ClassID",required:!0,placeholder:"Enter a Class ID.",onChange:N}),Object(h.jsx)("input",{type:"text",name:"Course Name",required:!0,placeholder:"Enter a Course Name.",onChange:N}),Object(h.jsx)("input",{type:"text",name:"Desc",required:!0,placeholder:"Enter a Class Description.",onChange:N}),Object(h.jsx)("input",{type:"number",name:"Credits",required:!0,placeholder:"Enter a Credit Amount.",onChange:N}),Object(h.jsx)("button",{type:"submit",children:"Add Course"})]})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(D,{})}),document.getElementById("root")),O()}},[[19,1,2]]]);
//# sourceMappingURL=main.6ea3425a.chunk.js.map