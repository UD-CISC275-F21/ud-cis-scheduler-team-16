(this["webpackJsonpfinal-project-starter"]=this["webpackJsonpfinal-project-starter"]||[]).push([[0],{19:function(e){e.exports=JSON.parse('[{"ID":"0","School":"CISC","ClassID":108,"CourseName":"Introduction to Computer Science I","Desc":"Test","Credits":3},{"ID":"1","School":"EGGG","ClassID":101,"CourseName":"Introduction to Engineering","Desc":"Test","Credits":2},{"ID":"2","School":"ENGL","ClassID":110,"CourseName":"Seminar in Composition","Desc":"Test","Credits":3},{"ID":"3","School":"MATH","ClassID":241,"CourseName":"Analytic Geometry and Calculus A","Desc":"Test","Credits":4},{"ID":"4","School":"HIST","ClassID":101,"CourseName":"Europe and the World to 1648","Desc":"Test","Credits":3}]')},28:function(e,t,s){},40:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),r=s(5),a=s.n(r),l=(s(28),s(10)),o=s(4),i=s(2),d=s(6),j=s(43),u=s(23),h=(s(8),s(19)),b=s(0),C=function(e){var t=e.course,s=e.handleEditClick,c=e.handleDeleteClick;return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:t.School}),Object(b.jsx)("td",{children:t.ClassID}),Object(b.jsx)("td",{children:t.CourseName}),Object(b.jsx)("td",{children:t.Desc}),Object(b.jsx)("td",{children:t.Credits}),Object(b.jsxs)("td",{children:[Object(b.jsx)("button",{className:"edit-class",type:"button",onClick:function(e){return s(e,t)}}),Object(b.jsx)("button",{className:"delete-class",type:"button",onClick:function(){return c(t.ID)}})]})]},t.ID)},O=function(e){var t=e.editCourseData,s=e.handleEditCourseChange,c=e.handleCancelClick;return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("input",{type:"text",required:!0,placeholder:"Enter School",name:"School",value:t.School,onChange:s})}),Object(b.jsx)("td",{children:Object(b.jsx)("input",{type:"number",required:!0,placeholder:"Enter Course ID",name:"ClassID",value:t.ClassID,onChange:s})}),Object(b.jsx)("td",{children:Object(b.jsx)("input",{type:"text",required:!0,placeholder:"Enter Course Name",name:"CourseName",value:t.CourseName,onChange:s})}),Object(b.jsx)("td",{children:Object(b.jsx)("input",{type:"text",required:!0,placeholder:"Enter Desc",name:"Desc",value:t.Desc,onChange:s})}),Object(b.jsx)("td",{children:Object(b.jsx)("input",{type:"number",required:!0,placeholder:"Enter Credit Amount",name:"Credits",value:t.Credits,onChange:s})}),Object(b.jsxs)("td",{children:[Object(b.jsx)("button",{className:"save-class",type:"submit"}),Object(b.jsx)("button",{className:"cancel-class",type:"button",onClick:c})]})]})},m=s(20),x=s.n(m),D={content:{background:"white",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},p=function(e){var t=e.closeModal;return Object(b.jsxs)("div",{className:"welcome-message",children:[Object(b.jsx)("h2",{className:"welcome-message-header",children:"Welcome to the UDEL Plan Creater!"}),Object(b.jsxs)("p",{className:"welcome-message-body",children:["This is where you can create your course plan for each semester of college.",Object(b.jsx)("br",{}),"On this site you will be able to visualize your entire college career. ",Object(b.jsx)("br",{})]}),Object(b.jsxs)("p",{children:["Features are:",Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"Students can add or delete a class in a semester"}),Object(b.jsx)("li",{children:"Students can add or delete a semester of there plan"}),Object(b.jsx)("li",{children:"Students are able to see an entire course list"}),Object(b.jsx)("li",{children:"Students can read the description of the course"})]})]}),Object(b.jsx)("button",{className:"modal-close",onClick:t})]})},I=function(){var e=Object(c.useState)(h),t=Object(d.a)(e,2),s=t[0],r=t[1],a=n.a.useState(!0),m=Object(d.a)(a,2),I=m[0],f=m[1],S=Object(c.useState)({ID:"",School:"",ClassID:0,CourseName:"",Desc:"",Credits:0}),g=Object(d.a)(S,2),N=g[0],v=g[1],y=Object(c.useState)({ID:"",School:"",ClassID:0,CourseName:"",Desc:"",Credits:0}),E=Object(d.a)(y,2),k=E[0],q=E[1],w=Object(c.useState)(""),T=Object(d.a)(w,2),A=T[0],F=T[1],G=function(e){e.preventDefault();var t=e.target.name,s=e.target.value,c=Object(i.a)(Object(i.a)({},N),{},Object(o.a)({},t,s));v(c)},L=function(e){e.preventDefault();var t=e.target.name,s=e.target.value,c=Object(i.a)(Object(i.a)({},k),{},Object(o.a)({},t,s));q(c)},M=function(e,t){e.preventDefault(),F(t.ID);var s={ID:t.ID,School:t.School,ClassID:t.ClassID,CourseName:t.CourseName,Desc:t.Desc,Credits:t.Credits};q(s)},B=function(){F("")},H=function(e){var t=Object(l.a)(s),c=s.findIndex((function(t){return t.ID=e}));t.splice(c,1),r(t)},J=function(){f(!1)};return Object(b.jsxs)("div",{className:"app-container",children:[Object(b.jsx)(x.a,{isOpen:I,onRequestClose:J,contentLabel:"Welcome Message",style:D,children:Object(b.jsx)(p,{closeModal:J})}),Object(b.jsx)("button",{className:"refresh-logo",onClick:function(){window.location.reload()}}),Object(b.jsx)("h1",{className:"header",children:"UD CIS Scheduler"}),Object(b.jsx)(j.a,{flush:!0,children:Object(b.jsxs)(j.a.Item,{eventKey:"0",children:[Object(b.jsx)(j.a.Header,{children:"Semester 1"}),Object(b.jsxs)(j.a.Body,{children:[Object(b.jsx)("form",{onSubmit:function(e){e.preventDefault();var t={ID:A,School:k.School,ClassID:k.ClassID,CourseName:k.CourseName,Desc:k.Desc,Credits:k.Credits},c=Object(l.a)(s);c[s.findIndex((function(e){return e.ID===A}))]=t,r(c),F("")},children:Object(b.jsxs)("table",{children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"School"}),Object(b.jsx)("th",{children:"ClassID"}),Object(b.jsx)("th",{children:"Course Name"}),Object(b.jsx)("th",{children:"Desc"}),Object(b.jsx)("th",{children:"Credits"}),Object(b.jsx)("th",{children:"Actions"})]})}),Object(b.jsx)("tbody",{children:s.map((function(e){return Object(b.jsx)(c.Fragment,{children:A===e.ID?Object(b.jsx)(O,{editCourseData:k,handleEditCourseChange:L,handleCancelClick:B}):Object(b.jsx)(C,{course:e,handleEditClick:M,handleDeleteClick:H})},e.ID)}))})]})}),Object(b.jsx)("h2",{children:"Add another Class"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={ID:Object(u.a)(),School:N.School,ClassID:N.ClassID,CourseName:N.CourseName,Desc:N.Desc,Credits:N.Credits},c=[].concat(Object(l.a)(s),[t]);r(c)},children:[Object(b.jsx)("input",{type:"text",name:"School",required:!0,placeholder:"Enter a School.",onChange:G}),Object(b.jsx)("input",{type:"number",name:"ClassID",required:!0,placeholder:"Enter a Class ID.",onChange:G}),Object(b.jsx)("input",{type:"text",name:"CourseName",required:!0,placeholder:"Enter a Course Name.",onChange:G}),Object(b.jsx)("input",{type:"text",name:"Desc",required:!0,placeholder:"Enter a Class Description.",onChange:G}),Object(b.jsx)("input",{type:"number",name:"Credits",required:!0,placeholder:"Enter a Credit Amount.",onChange:G}),Object(b.jsx)("button",{type:"submit",children:"Add Course"})]})]})]})}),Object(b.jsx)("button",{children:"Add Semester"}),Object(b.jsx)("button",{children:"Delete Semester"})]})},f=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,44)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,a=t.getTTFB;s(e),c(e),n(e),r(e),a(e)}))};a.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(I,{})}),document.getElementById("root")),f()},8:function(e,t,s){}},[[40,1,2]]]);
//# sourceMappingURL=main.50d9a89b.chunk.js.map