(this.webpackJsonptraining=this.webpackJsonptraining||[]).push([[3],{139:function(e,t,a){"use strict";var n=a(11),r=a.n(n),o=a(14),l=a.n(o),s=a(0),c=a.n(s),i=a(62),u=a(2),m=a.n(u),p=a(32),f=function(e){function t(t){var a;if(a=e.call(this,t)||this,!t._reduxForm)throw new Error("Form must be inside a component decorated with reduxForm()");return a}l()(t,e);var a=t.prototype;return a.UNSAFE_componentWillMount=function(){this.props._reduxForm.registerInnerOnSubmit(this.props.onSubmit)},a.render=function(){var e=this.props,t=(e._reduxForm,r()(e,["_reduxForm"]));return c.a.createElement("form",t)},t}(s.Component);f.propTypes={onSubmit:m.a.func.isRequired,_reduxForm:m.a.object},Object(i.a)(f),t.a=Object(p.b)(f)},293:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3SxvY",mainPhoto:"ProfileInfo_mainPhoto__1VFBl",contact:"ProfileInfo_contact__2ZxIC"}},294:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__3cIxe",posts:"MyPosts_posts__2QKWr"}},295:function(e,t,a){e.exports={item:"Post_item__p5rkb"}},296:function(e,t,a){"use strict";a.r(t);var n=a(35),r=a(36),o=a(38),l=a(37),s=a(39),c=a(0),i=a.n(c),u=a(94),m=a(293),p=a.n(m),f=a(41),d=function(e){var t=Object(c.useState)(!1),a=Object(u.a)(t,2),n=a[0],r=a[1],o=Object(c.useState)(e.status),l=Object(u.a)(o,2),s=l[0],m=l[1];Object(c.useEffect)((function(){m(e.status)}),[e.status]);return i.a.createElement("div",null,!n&&i.a.createElement("div",null,i.a.createElement("span",{onDoubleClick:function(){r(!0)}},e.status||"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0442\u0430\u0442\u0443\u0441")),n&&i.a.createElement("div",null,i.a.createElement("input",{onChange:function(e){m(e.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),e.updateStatus(s)},value:s})))},b=a(105),E=a.n(b),h=a(33),v=a(127),g=a(48),O=a.n(g),k=Object(v.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,a=e.profile,n=e.error;return i.a.createElement("form",{onSubmit:t},i.a.createElement("div",null,i.a.createElement("button",null,"Save")),n&&i.a.createElement("div",{className:O.a.formSummaryError},n),i.a.createElement("div",null,i.a.createElement("b",null,"Name:")," ",Object(h.c)("Full name","fullName",[],h.a)),i.a.createElement("div",null,i.a.createElement("b",null,"About me:"),Object(h.c)("About me","aboutMe",[],h.b)),i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job: "),Object(h.c)("","lookingForAJob",[],h.a,{type:"checkbox"})),i.a.createElement("div",null,i.a.createElement("b",null,"My professional skills"),":",Object(h.c)("My professional skills","lookingForAJobDescription",[],h.b)),i.a.createElement("div",null,i.a.createElement("b",null,"Contacts"),": ",Object.keys(a.contacts).map((function(e){return i.a.createElement("div",{key:e,className:p.a.contact},i.a.createElement("b",null,e,": ",Object(h.c)(e,"contacts."+e,[],h.a)))}))))})),j=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode;return i.a.createElement("div",null,a&&i.a.createElement("div",null,i.a.createElement("button",{onClick:n},"Edit")),i.a.createElement("div",null,i.a.createElement("b",null,"Name:")," ",t.fullName),i.a.createElement("div",null,i.a.createElement("b",null,"About me:")," ",t.aboutMe),i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job:")," ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&i.a.createElement("div",null,i.a.createElement("b",null,"My professional skills"),": ",t.lookingForAJobDescription),i.a.createElement("div",null,i.a.createElement("b",null,"Contacts"),": ",Object.keys(t.contacts).map((function(e){return i.a.createElement(P,{key:e,contactTitle:e,contactValue:t.contacts[e]})}))))},P=function(e){var t=e.contactTitle,a=e.contactValue;return i.a.createElement("div",{className:p.a.contact},i.a.createElement("b",null,t),": ",a)},S=function(e){var t=e.profile,a=e.status,n=e.updateStatus,r=e.isOwner,o=e.savePhoto,l=e.saveProfile,s=Object(c.useState)(!1),m=Object(u.a)(s,2),b=m[0],h=m[1];if(!t)return i.a.createElement(f.a,null);return i.a.createElement("div",null,i.a.createElement("div",{className:p.a.descriptionBlock},i.a.createElement("img",{src:t.photos.large||E.a,className:p.a.mainPhoto,alt:"large_photo"}),r&&i.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&o(e.target.files[0])}}),i.a.createElement(d,{status:a,updateStatus:n}),b?i.a.createElement(k,{initialValues:t,profile:t,onSubmit:function(e){l(e).then((function(){h(!1)}))}}):i.a.createElement(j,{goToEditMode:function(){h(!0)},profile:t,isOwner:r})))},_=a(93),y=a(294),F=a.n(y),w=a(295),x=a.n(w),A=function(e){return i.a.createElement("div",{className:x.a.item},i.a.createElement("img",{src:"http://hornews.com/images/news_large/c1d4b2b8ec608ea72764c5678816d5c9.jpg",alt:""}),e.message,i.a.createElement("div",null,i.a.createElement("span",null,"Like "),e.likesCount))},I=a(139),N=a(87),C=a(84),M=Object(C.a)(10),B=Object(v.a)({form:"profileAddPostForm"})((function(e){return i.a.createElement(I.a,{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(N.a,{component:h.b,name:"newPostText",placeholder:"Enter ur post",validate:[C.b,M]})),i.a.createElement("div",null,i.a.createElement("button",null,"Add post")))})),T=function(e){var t=e.posts.map((function(e){return i.a.createElement(A,{key:e.id,message:e.message,likesCount:e.likesCount})}));return i.a.createElement("div",{className:F.a.postsBlock},i.a.createElement("h3",null,"My posts"),i.a.createElement(B,{onSubmit:function(t){e.addPost(t.newPostText)}}),i.a.createElement("div",{className:F.a.posts},t))},J=a(18),U=Object(J.b)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){e(Object(_.a)(t))}}}))(T),D=function(e){return i.a.createElement("div",null,i.a.createElement(S,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,saveProfile:e.saveProfile,updateStatus:e.updateStatus}),i.a.createElement(U,null))},V=a(28),L=a(7),z=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return i.a.createElement(D,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),t}(i.a.Component);t.default=Object(L.d)(Object(J.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:_.d,getStatus:_.c,updateStatus:_.g,savePhoto:_.e,saveProfile:_.f}),V.f)(z)}}]);
//# sourceMappingURL=3.db5535c9.chunk.js.map