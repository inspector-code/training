(this.webpackJsonptraining=this.webpackJsonptraining||[]).push([[3],{140:function(e,t,a){"use strict";var n=a(12),o=a.n(n),r=a(14),l=a.n(r),s=a(0),c=a.n(s),i=a(63),u=a(2),m=a.n(u),p=a(33),f=function(e){function t(t){var a;if(a=e.call(this,t)||this,!t._reduxForm)throw new Error("Form must be inside a component decorated with reduxForm()");return a}l()(t,e);var a=t.prototype;return a.UNSAFE_componentWillMount=function(){this.props._reduxForm.registerInnerOnSubmit(this.props.onSubmit)},a.render=function(){var e=this.props,t=(e._reduxForm,o()(e,["_reduxForm"]));return c.a.createElement("form",t)},t}(s.Component);f.propTypes={onSubmit:m.a.func.isRequired,_reduxForm:m.a.object},Object(i.a)(f),t.a=Object(p.b)(f)},294:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__rh57e",mainPhoto:"ProfileInfo_mainPhoto__1LNQT",contact:"ProfileInfo_contact__1tqaa"}},295:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__1jLsj",posts:"MyPosts_posts__35tn3"}},296:function(e,t,a){e.exports={item:"Post_item__akP9m"}},297:function(e,t,a){"use strict";a.r(t);var n=a(35),o=a(36),r=a(38),l=a(37),s=a(39),c=a(0),i=a.n(c),u=a(94),m=a(294),p=a.n(m),f=a(41),d=function(e){var t=Object(c.useState)(!1),a=Object(u.a)(t,2),n=a[0],o=a[1],r=Object(c.useState)(e.status),l=Object(u.a)(r,2),s=l[0],m=l[1];Object(c.useEffect)((function(){m(e.status)}),[e.status]);return i.a.createElement("div",null,!n&&i.a.createElement("div",null,i.a.createElement("span",{onDoubleClick:function(){o(!0)}},e.status||"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0442\u0430\u0442\u0443\u0441")),n&&i.a.createElement("div",null,i.a.createElement("input",{onChange:function(e){m(e.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),e.updateStatus(s)},value:s})))},b=a(105),E=a.n(b),h=a(24),v=a(127),g=a(49),O=a.n(g),j=Object(v.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,a=e.profile,n=e.error;return i.a.createElement("form",{onSubmit:t},i.a.createElement("div",null,i.a.createElement("button",null,"Save")),n&&i.a.createElement("div",{className:O.a.formSummaryError},n),i.a.createElement("div",null,i.a.createElement("b",null,"Name:")," ",Object(h.c)("Full name","fullName",[],h.a)),i.a.createElement("div",null,i.a.createElement("b",null,"About me:"),Object(h.c)("About me","aboutMe",[],h.b)),i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job: "),Object(h.c)("","lookingForAJob",[],h.a,{type:"checkbox"})),i.a.createElement("div",null,i.a.createElement("b",null,"My professional skills"),":",Object(h.c)("My professional skills","lookingForAJobDescription",[],h.b)),i.a.createElement("div",null,i.a.createElement("b",null,"Contacts"),": ",Object.keys(a.contacts).map((function(e){return i.a.createElement("div",{key:e,className:p.a.contact},i.a.createElement("b",null,e,": ",Object(h.c)(e,"contacts."+e,[],h.a)))}))))})),k=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode;return i.a.createElement("div",null,a&&i.a.createElement("div",null,i.a.createElement("button",{onClick:n},"Edit")),i.a.createElement("div",null,i.a.createElement("b",null,"Name:")," ",t.fullName),i.a.createElement("div",null,i.a.createElement("b",null,"About me:")," ",t.aboutMe),i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job:")," ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&i.a.createElement("div",null,i.a.createElement("b",null,"My professional skills"),": ",t.lookingForAJobDescription),i.a.createElement("div",null,i.a.createElement("b",null,"Contacts"),": ",Object.keys(t.contacts).map((function(e){return i.a.createElement(P,{key:e,contactTitle:e,contactValue:t.contacts[e]})}))))},P=function(e){var t=e.contactTitle,a=e.contactValue;return i.a.createElement("div",{className:p.a.contact},i.a.createElement("b",null,t),": ",a)},_=function(e){var t=e.profile,a=e.status,n=e.updateStatus,o=e.isOwner,r=e.savePhoto,l=e.saveProfile,s=Object(c.useState)(!1),m=Object(u.a)(s,2),b=m[0],h=m[1];if(!t)return i.a.createElement(f.a,null);return i.a.createElement("div",null,i.a.createElement("div",{className:p.a.descriptionBlock},i.a.createElement("img",{src:t.photos.large||E.a,className:p.a.mainPhoto,alt:"large_photo"}),o&&i.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&r(e.target.files[0])}}),i.a.createElement(d,{status:a,updateStatus:n}),b?i.a.createElement(j,{initialValues:t,profile:t,onSubmit:function(e){l(e).then((function(){h(!1)}))}}):i.a.createElement(k,{goToEditMode:function(){h(!0)},profile:t,isOwner:o})))},S=a(93),y=a(295),F=a.n(y),w=a(296),A=a.n(w),N=function(e){return i.a.createElement("div",{className:A.a.item},i.a.createElement("img",{src:"http://hornews.com/images/news_large/c1d4b2b8ec608ea72764c5678816d5c9.jpg",alt:""}),e.message,i.a.createElement("div",null,i.a.createElement("span",null,"Like "),e.likesCount))},x=a(140),M=a(88),C=a(64),I=Object(C.a)(100),T=Object(v.a)({form:"profileAddPostForm"})((function(e){return i.a.createElement(x.a,{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(M.a,{component:h.b,name:"newPostText",placeholder:"Enter ur post",validate:[I]})),i.a.createElement("div",null,i.a.createElement("button",null,"Add post")))})),B=function(e){var t=e.posts.map((function(e){return i.a.createElement(N,{key:e.id,message:e.message,likesCount:e.likesCount})}));return i.a.createElement("div",{className:F.a.postsBlock},i.a.createElement("h3",null,"My posts"),i.a.createElement(T,{onSubmit:function(t){t.newPostText&&e.addPost(t.newPostText)}}),i.a.createElement("div",{className:F.a.posts},t))},J=a(18),U=a(30),D=Object(J.b)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){e(Object(S.a)(t)),e(Object(U.a)("profileAddPostForm"))}}}))(B),L=function(e){return i.a.createElement("div",null,i.a.createElement(_,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,saveProfile:e.saveProfile,updateStatus:e.updateStatus}),i.a.createElement(D,null))},V=a(29),q=a(8),z=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return i.a.createElement(L,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),t}(i.a.Component);t.default=Object(q.d)(Object(J.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:S.d,getStatus:S.c,updateStatus:S.g,savePhoto:S.e,saveProfile:S.f}),V.g)(z)}}]);
//# sourceMappingURL=3.d9b65b42.chunk.js.map