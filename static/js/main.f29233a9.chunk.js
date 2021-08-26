(this["webpackJsonpnote-editor"]=this["webpackJsonpnote-editor"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(7),a=c.n(i),r=(c(12),c(5)),o=c(2),d=(c(13),c(0));var l=function(e){var t=e.search,c=e.setSearch;return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("div",{className:"header__logo",children:"Note editor"}),Object(d.jsxs)("div",{className:"search",children:[Object(d.jsx)("img",{height:30,width:30,src:"img/search.png",alt:"\u041b\u0443\u043f\u0430",className:"search__img"}),Object(d.jsx)("input",{onChange:function(e){c(e.target.value)},type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0442\u0435\u0433\u0443",className:"search__input input",value:t}),Object(d.jsx)("img",{height:20,width:20,src:"img/close.png",alt:"\u041a\u0440\u0435\u0441\u0442\u0438\u043a",className:"search__close"})]})]})};var j=function(e){var t=e.note,c=e.setNote,n=e.addToList;return Object(d.jsx)("div",{className:"addNote",children:Object(d.jsxs)("div",{className:"form",children:[Object(d.jsx)("textarea",{onChange:function(e){c(e.target.value)},value:t,type:"text",placeholder:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443",className:"search__input input"}),Object(d.jsx)("button",{onClick:n,className:"btn",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043c\u0435\u0442\u043a\u0443"})]})})};var u=function(e){var t=e.item,c=e.removeNode,n=e.editNote,s=e.showNote,i=(e.setNotesList,e.notesList),a=t.date,o=t.text,l=t.id;return Object(d.jsxs)("div",{className:"noteItem",children:[Object(d.jsxs)("div",{onClick:function(){return s(l)},children:[Object(d.jsx)("div",{className:"noteItem__date",children:Object(d.jsx)("div",{children:a})}),Object(d.jsx)("div",{className:"noteItem__content",children:function(e){var t=e.split(" ");return Object(d.jsx)("div",{children:t.map((function(e,t){return"#"===e[0]?Object(d.jsx)("span",{children:e+" "},"".concat(e,"_").concat(t)):e+" "}))})}(o)}),Object(d.jsx)("div",{className:"noteItem__tegs",children:function(e){var t=e.split(" "),c=[];t.map((function(e){return"#"===e[0]?c.push(e):null}));var n=Object(r.a)(i).find((function(e){return e.id===l}));return n.tegs=c,console.log(n),c}(o).map((function(e){return Object(d.jsx)("span",{children:e+" "})}))})]}),Object(d.jsxs)("div",{className:"noteItem__control",children:[Object(d.jsxs)("div",{onClick:function(){n(l)},className:"noteItem__edit",children:[Object(d.jsx)("img",{height:20,width:20,src:"img/pencil.png",alt:"edit"}),Object(d.jsx)("button",{children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})]}),Object(d.jsxs)("div",{onClick:function(){c(l)},className:"noteItem__edit",children:[Object(d.jsx)("img",{height:16,width:16,src:"img/garbage.png",alt:"edit"}),Object(d.jsx)("button",{children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})]})]})};var b=function(e){var t=e.notesList,c=e.removeNode,n=e.editNote,s=e.showNote,i=e.setNotesList,a=e.search;return Object(d.jsxs)("div",{className:"notes",children:[Object(d.jsx)("div",{className:"title",children:Object(d.jsx)("h1",{children:t.length>0?"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u043a\u0443\u0449\u0438\u0445 \u0437\u0430\u0434\u0430\u0447":"\u0423 \u0412\u0430\u0441 \u043d\u0435\u0442 \u0442\u0435\u043a\u0443\u0449\u0438\u0445 \u0437\u0430\u0434\u0430\u0447"})}),Object(d.jsx)("div",{className:"list",children:t.filter((function(e){return e.tegs.join(" ").toUpperCase().includes(a.toUpperCase())})).reverse().map((function(e,a){return Object(d.jsx)(u,{notesList:t,setNotesList:i,showNote:s,removeNode:c,editNote:n,item:e},"".concat(e,"_").concat(a))}))})]})};var h=function(e){var t=e.visible,c=e.setVisible,n=e.text,s=e.saveEdit,i=e.id,a=e.setEdit,r=["modal"];return t&&r.push("active"),Object(d.jsx)("div",{className:r.join(" "),onClick:function(){c(!1),a("")},children:Object(d.jsxs)("div",{className:"modal-content",onClick:function(e){return e.stopPropagation()},children:[Object(d.jsx)("textarea",{type:"text",onChange:function(e){return a(e.target.value)},className:"search__input input",value:n}),Object(d.jsx)("button",{onClick:function(){c(!1),a(""),s(i)},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})};var v=function(e){var t=e.visible,c=e.setVisible,n=e.text,s=["modal"];t&&s.push("active");var i=function(){c(!1)};return Object(d.jsx)("div",{className:s.join(" "),onClick:i,children:Object(d.jsxs)("div",{className:"modalContent",onClick:function(e){return e.stopPropagation()},children:[Object(d.jsx)("div",{type:"text",className:"search__input input showNote",value:n,children:n}),Object(d.jsx)("button",{onClick:i,children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})]})})};var x=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)([]),a=Object(o.a)(i,2),u=a[0],x=a[1],O=Object(n.useState)(!1),m=Object(o.a)(O,2),N=m[0],p=m[1],f=Object(n.useState)(!1),g=Object(o.a)(f,2),_=g[0],C=g[1],w=Object(n.useState)(""),k=Object(o.a)(w,2),L=k[0],S=k[1],I=Object(n.useState)(""),y=Object(o.a)(I,2),E=y[0],V=y[1],M=Object(n.useState)(""),T=Object(o.a)(M,2),D=T[0],J=T[1];return console.log(D),Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)(v,{visible:_,setVisible:C,text:L}),Object(d.jsx)(h,{visible:N,setVisible:p,setEdit:S,text:L,id:E,saveEdit:function(e){u.find((function(t){return t.id===e})).text=L}}),Object(d.jsx)(l,{search:D,setSearch:J}),Object(d.jsx)("div",{className:"hr",style:{borderTop:"2px solid #dcdcdc ",marginLeft:20,marginRight:20}}),Object(d.jsx)(j,{addToList:function(){var e=new Date;function t(e){return e<=9?"0".concat(e):e}var n=t(e.getDate()),i=t(e.getMonth()+1),a=t(e.getHours()),o=t(e.getMinutes()),d="".concat(n,"/").concat(i,", ").concat(a,":").concat(o);x([].concat(Object(r.a)(u),[{id:e,date:d,text:c,tegs:[]}])),s("")},note:c,setNote:s}),Object(d.jsx)(b,{search:D,setNotesList:x,showNote:function(e){var t=u.find((function(t){return t.id===e}));S(t.text),C(!0)},editNote:function(e){var t=u.find((function(t){return t.id===e}));V(e),S(t.text),p(!0)},removeNode:function(e){var t=u.filter((function(t){return t.id!==e}));x(t)},notesList:u})]})};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f29233a9.chunk.js.map