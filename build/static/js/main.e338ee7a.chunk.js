(this.webpackJsonptimecap=this.webpackJsonptimecap||[]).push([[0],{76:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),s=a.n(c),i=(a(76),a(127)),l=a(129),m=a(128),j=a(2),o=function(){return Object(j.jsx)(i.a,{className:"bg-dark text-light p-4 text-center",children:Object(j.jsx)(m.a,{variant:"h4",children:"\u23f1 Time Tracker \u23f1"})})},u=a(5),h=a(33),b=a(13),d=a(121),O=function(e){var t=e.label,a=e.type,n=e.name,r=e.value,c=e.handleChange;return Object(j.jsxs)(i.a,{className:"m-4 d-flex justify-content-around align-items-center",children:[Object(j.jsxs)(i.a,{width:125,children:[t," :"]}),Object(j.jsx)(d.a,{size:"small",type:a,name:n,className:"form-control mx-2",value:r,onChange:function(e){return c(e)}})]})},x=a(34),f=a.n(x),v=a(126),g=a(123),p=function(e){var t=e.setError;return Object(j.jsx)(g.a,{severity:"error",className:"mt-3",onClose:function(){return t(!1)},children:"Please Fill Start Time and End Time !!!"})},k=function(e){var t=e.hours;return Object(j.jsx)(i.a,{className:"mt-4 p-4 text-center",children:Object(j.jsxs)(m.a,{variant:"h6",children:["\ud83c\udf89 \ud83c\udf89 Great ! You Worked\xa0",Object(j.jsx)("span",{className:"text-danger",children:t})," hours \ud83c\udf89 \ud83c\udf89"]})})},y=function(){var e=Object(n.useState)({starttime:"",endtime:"",break:"",totalHours:"",answer:!1}),t=Object(b.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!1),i=Object(b.a)(s,2),l=i[0],m=i[1],o=function(e){m(!1),c(Object(h.a)(Object(h.a)({},a),{},Object(u.a)({},e.target.name,e.target.value)))};function d(e){var t=e/60|0,n=e%60|0,r=f.a.utc().hours(t).minutes(n).format("hh:mm"),s=Math.floor(a.break/60),i=a.break%60;!function(e){var t=e/60|0,n=e%60|0,r=f.a.utc().hours(t).minutes(n).format("hh:mm");c(Object(h.a)(Object(h.a)({},a),{},{totalHours:r,answer:!0}))}(f()(r,"hh:mm").diff(f()("".concat(s,":").concat(i),"hh:mm"),"minutes"))}return Object(j.jsxs)(r.a.Fragment,{children:[l&&Object(j.jsx)(p,{setError:m}),Object(j.jsx)(O,{label:"Start Time",type:"time",name:"starttime",value:a.starttime,handleChange:o}),Object(j.jsx)(O,{label:"Break",type:"text",name:"break",value:a.break,handleChange:o}),Object(j.jsx)(O,{label:"End Time",type:"time",name:"endtime",value:a.endtime,handleChange:o}),Object(j.jsx)(v.a,{variant:"outlined",color:"inherit",fullWidth:!0,onClick:function(){a.starttime&&a.endtime?d(f()(a.endtime,"hh:mm").diff(f()(a.starttime,"hh:mm"),"minutes")):(m(!0),c(Object(h.a)(Object(h.a)({},a),{},{answer:!1})))},children:"Submit"}),a.answer&&Object(j.jsx)(k,{hours:a.totalHours})]})},N=function(){return Object(j.jsx)(i.a,{className:"d-flex justify-content-center align-items-center",sx:{height:"100vh"},children:Object(j.jsxs)(l.a,{className:"p-5 bg-light",children:[Object(j.jsx)(o,{}),Object(j.jsx)(y,{})]})})};var w=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(N,{})})};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.e338ee7a.chunk.js.map