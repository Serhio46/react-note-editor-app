(this["webpackJsonpnote-editor"]=this["webpackJsonpnote-editor"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(6),a=c.n(s),o=(c(12),c(7)),r=c(2),d=(c(13),c(0));var l=function(){return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("div",{className:"header__logo",children:"Note editor"}),Object(d.jsxs)("div",{className:"search",children:[Object(d.jsx)("img",{height:30,width:30,src:"img/search.png",alt:"\u041b\u0443\u043f\u0430",className:"search__img"}),Object(d.jsx)("input",{type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0442\u0435\u0433\u0443",className:"search__input input"}),Object(d.jsx)("img",{height:20,width:20,src:"img/close.png",alt:"\u041a\u0440\u0435\u0441\u0442\u0438\u043a",className:"search__close"})]})]})};var j=function(e){var t=e.note,c=e.setNote,n=e.addToList;return Object(d.jsx)("div",{className:"addNote",children:Object(d.jsxs)("div",{className:"form",children:[Object(d.jsx)("textarea",{onChange:function(e){c(e.target.value)},value:t,type:"text",placeholder:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443",className:"search__input input"}),Object(d.jsx)("button",{onClick:n,className:"btn",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043c\u0435\u0442\u043a\u0443"})]})})};var u=function(e){var t=e.item,c=e.removeNode,n=e.editNote,i=e.showNote,s=t.date,a=t.text,o=t.id;return Object(d.jsxs)("div",{className:"noteItem",children:[Object(d.jsxs)("div",{onClick:function(){return i(o)},children:[Object(d.jsx)("div",{className:"noteItem__date",children:Object(d.jsx)("div",{children:s})}),Object(d.jsx)("div",{className:"noteItem__content",children:a}),Object(d.jsx)("div",{className:"noteItem__tegs",children:"#react, #redux"})]}),Object(d.jsxs)("div",{className:"noteItem__control",children:[Object(d.jsxs)("div",{onClick:function(){n(o)},className:"noteItem__edit",children:[Object(d.jsx)("img",{height:20,width:20,src:"img/pencil.png",alt:"edit"}),Object(d.jsx)("button",{children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})]}),Object(d.jsxs)("div",{onClick:function(){c(o)},className:"noteItem__edit",children:[Object(d.jsx)("img",{height:16,width:16,src:"img/garbage.png",alt:"edit"}),Object(d.jsx)("button",{children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})]})]})};var b=function(e){var t=e.notesList,c=e.removeNode,n=e.editNote,i=e.showNote;return Object(d.jsxs)("div",{className:"notes",children:[Object(d.jsx)("div",{className:"title",children:Object(d.jsx)("h1",{children:t.length>0?"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u043a\u0443\u0449\u0438\u0445 \u0437\u0430\u0434\u0430\u0447":"\u0423 \u0412\u0430\u0441 \u043d\u0435\u0442 \u0442\u0435\u043a\u0443\u0449\u0438\u0445 \u0437\u0430\u0434\u0430\u0447"})}),Object(d.jsx)("div",{className:"list",children:t.map((function(e,t){return Object(d.jsx)(u,{showNote:i,removeNode:c,editNote:n,item:e},"".concat(e,"_").concat(t))}))})]})};var h=function(e){var t=e.visible,c=e.setVisible,n=e.text,i=e.saveEdit,s=e.id,a=e.setEdit,o=["modal"];return t&&o.push("active"),Object(d.jsx)("div",{className:o.join(" "),onClick:function(){c(!1),a("")},children:Object(d.jsxs)("div",{className:"modalContent",onClick:function(e){return e.stopPropagation()},children:[Object(d.jsx)("textarea",{type:"text",onChange:function(e){return a(e.target.value)},className:"search__input input",value:n}),Object(d.jsx)("button",{onClick:function(){i(s),c(!1),a("")},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})};var x=function(e){var t=e.visible,c=e.setVisible,n=e.text,i=["modal"];t&&i.push("active");var s=function(){c(!1)};return Object(d.jsx)("div",{className:i.join(" "),onClick:s,children:Object(d.jsxs)("div",{className:"modalContent",onClick:function(e){return e.stopPropagation()},children:[Object(d.jsx)("div",{type:"text",className:"search__input input showNote",value:n,children:n}),Object(d.jsx)("button",{onClick:s,children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})]})})};var v=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)([]),a=Object(r.a)(s,2),u=a[0],v=a[1],m=Object(n.useState)(!1),O=Object(r.a)(m,2),N=O[0],g=O[1],f=Object(n.useState)(!1),p=Object(r.a)(f,2),_=p[0],C=p[1],w=Object(n.useState)(""),k=Object(r.a)(w,2),I=k[0],S=k[1],y=Object(n.useState)(""),E=Object(r.a)(y,2),L=E[0],V=E[1];return console.log(u),console.log(c),Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)(x,{visible:_,setVisible:C,text:I}),Object(d.jsx)(h,{visible:N,setVisible:g,setEdit:S,text:I,id:L,saveEdit:function(e){u.find((function(t){return t.id===e})).text=I}}),Object(d.jsx)(l,{}),Object(d.jsx)("div",{className:"hr",style:{borderTop:"2px solid #dcdcdc ",marginLeft:20,marginRight:20}}),Object(d.jsx)(j,{addToList:function(){var e=new Date;function t(e){return e<=9?"0".concat(e):e}var n=t(e.getDate()),s=t(e.getMonth()+1),a=t(e.getHours()),r=t(e.getMinutes()),d="".concat(n,"/").concat(s,", ").concat(a,":").concat(r);v([].concat(Object(o.a)(u),[{id:e,date:d,text:c}])),i("")},note:c,setNote:i}),Object(d.jsx)(b,{showNote:function(e){var t=u.find((function(t){return t.id===e}));S(t.text),C(!0)},editNote:function(e){var t=u.find((function(t){return t.id===e}));V(e),S(t.text),g(!0)},removeNode:function(e){var t=u.filter((function(t){return t.id!==e}));v(t)},notesList:u})]})};a.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.8a7ea943.chunk.js.map