(this.webpackJsonptraining=this.webpackJsonptraining||[]).push([[4],{300:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__1HSjN",dialogsItems:"Dialogs_dialogsItems__jC_tX",messages:"Dialogs_messages__26SpO",messageText:"Dialogs_messageText__hdiu9",sendButton:"Dialogs_sendButton__3kMtb",fromMe:"Dialogs_fromMe__3iS9J",dialog:"Dialogs_dialog__12BMK",userName:"Dialogs_userName__3fmhE"}},305:function(e,a,t){"use strict";t.r(a);var s=t(131),n=t(0),i=t.n(n),l=t(300),m=t.n(l),o=t(15),r=t(99),c=t.n(r),d=function(e){return i.a.createElement("div",{className:m.a.dialog},i.a.createElement("img",{src:c.a,alt:"avatar"}),i.a.createElement("div",{className:m.a.userName},i.a.createElement(o.b,{to:"/dialogs/".concat(e.id)},e.name)))},g=function(e){return i.a.createElement("p",{className:m.a.fromMe},e.message)},u=t(93),_=t(132),f=t(10),E=t(65),b=Object(E.a)(100),p=Object(_.a)({form:"dialogAddMessageForm"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(u.a,{component:f.c,validate:[b],name:"newMessageBody",placeholder:"Enter ur message"})),i.a.createElement("div",null,i.a.createElement("button",null,i.a.createElement("div",{className:m.a.sendButton},i.a.createElement("i",{className:"far fa-paper-plane fa-2x"})))))})),v=function(e){var a=e.dialogsPage,t=a.dialogs.map((function(e){return i.a.createElement(d,{name:e.name,key:e.id,id:e.id})})),s=a.messages.map((function(e){return i.a.createElement(g,{message:e.message,key:e.id})}));return i.a.createElement("div",{className:m.a.dialogs},i.a.createElement("div",{className:m.a.dialogsItems},t),i.a.createElement("div",{className:m.a.messages},s),i.a.createElement("div",{className:m.a.messageText},i.a.createElement(p,{onSubmit:function(a){a.newMessageBody&&e.sendMessage(a.newMessageBody)}})))},N=t(12),M=t(54),j=t(7),D=t(30);a.default=Object(j.d)(Object(N.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(a){e(Object(s.b)(a)),e(Object(D.a)("dialogAddMessageForm"))}}})),M.a)(v)}}]);
//# sourceMappingURL=4.f8c33224.chunk.js.map