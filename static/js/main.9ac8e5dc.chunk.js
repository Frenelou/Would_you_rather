(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,n){e.exports=n(50)},37:function(e,t,n){},48:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(27),s=n.n(o),i=(n(37),n(5)),c=n(6),l=n(8),u=n(7),m=n(9),d=n(52),p=n(54),h=n(45),v=n(3),b=n(43),f=n(55),O=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.question,n=e.users,a=t.author,o=t.optionOne,s=t.id;return r.a.createElement("li",{className:"question"},r.a.createElement("h3",{className:"question-header"},n[a].name,"asks"),r.a.createElement("div",{className:"question-body"},r.a.createElement("img",{src:this.props.users[a].avatarURL,alt:"".concat(this.props.users[a].name,"'s avatar"),className:"avatar"}),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("h4",null,"Would you rather"),r.a.createElement("p",null,"...",o.text,"..."),r.a.createElement(b.a,{to:"question/"+s,activeclassname:"active",className:"button view-more"},"View More"))))}}]),t}(a.Component);var E=Object(f.a)(Object(v.connect)(function(e,t){var n=e.users;return{question:e.questions[t.id],users:n}})(O)),j=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={toggle:"unanswered"},n.toggleQuestions=function(e){var t=e.target.id;n.setState(function(){return{toggle:t}})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authedUser,n=e.questions,o=n.filter(function(e){return e.optionOne.votes.includes(t)||e.optionTwo.votes.includes(t)}),s=n.filter(function(e){return!e.optionOne.votes.includes(t)&&!e.optionTwo.votes.includes(t)});return r.a.createElement(a.Fragment,null,r.a.createElement("h1",null,"HomePage"),r.a.createElement("div",{className:"question-toggle"},r.a.createElement("section",null,r.a.createElement("button",{className:"toggle-button "+("unanswered"===this.state.toggle&&"selected"),id:"unanswered",onClick:this.toggleQuestions},"Unanswered Questions"),r.a.createElement("button",{className:"toggle-button "+("answered"===this.state.toggle&&"selected"),id:"answered",onClick:this.toggleQuestions},"Answered Questions")),r.a.createElement("section",null,r.a.createElement("ul",{className:"question-list"},"answered"===this.state.toggle&&o.map(function(e){return r.a.createElement(E,{key:e.id,id:e.id})}),"answered"===this.state.toggle&&0===o.length&&r.a.createElement("p",null,"You have answered all questions"),"unanswered"===this.state.toggle&&s.map(function(e){return r.a.createElement(E,{key:e.id,id:e.id})}),"unanswered"===this.state.toggle&&0===s.length&&r.a.createElement("p",null,"You have not answered any question")))))}}]),t}(a.Component);var g=Object(v.connect)(function(e){var t=e.authedUser,n=e.questions;return{questions:Object.keys(n).map(function(e){return n[e]}).sort(function(e,t){return t.timestamp-e.timestamp}),authedUser:t}})(j),y=function(){return r.a.createElement("div",{className:"not-found"},r.a.createElement("h1",null,"This poll does not exist. Go back!"),r.a.createElement(b.a,{to:"/",className:"button action"},"Take me home"))},w="SET_AUTHED_USER",q="UNSET_AUTHED_USER";var x=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).setUser=function(e){var t;e.preventDefault(),n.props.dispatch((t=n.props.id,{type:w,id:t}))},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("a",{href:"#user",onClick:this.setUser},r.a.createElement("img",{src:this.props.avatar,alt:"".concat(this.props.name,"'s avatar"),className:"avatar"}),r.a.createElement("span",{className:"username"},this.props.name))}}]),t}(a.Component);var U=Object(f.a)(Object(v.connect)(function(e,t){var n=e.authedUser,a=e.users[t.id];return{authedUser:n,name:a.name,avatar:a.avatarURL}})(x)),T=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement("h1",null,"Pick a user"),r.a.createElement("ul",{id:"login-box"},this.props.users.map(function(e){return r.a.createElement("li",{key:e},r.a.createElement(U,{id:e}))})))}}]),t}(a.Component);var N=Object(v.connect)(function(e){var t=e.authedUser,n=e.users;return{authedUser:t,users:Object.keys(n)}})(T),k=n(51),C=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).setUser=function(e){e.preventDefault(),n.props.dispatch({type:q}),n.props.history.push(n.props.baselink+"/")},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.baselink;return r.a.createElement("nav",null,r.a.createElement("ul",{id:"nav"},r.a.createElement("li",{className:"logout"},r.a.createElement("button",{onClick:this.setUser},"Log out")),r.a.createElement("li",null,r.a.createElement("span",null,"Hello, ",this.props.userName,"!")),r.a.createElement("li",null,r.a.createElement(k.a,{to:e+"/leaderboard",activeClassName:"active"},"Leaderboard")),r.a.createElement("li",null,r.a.createElement(k.a,{to:e+"/new",activeClassName:"active"},"New Question")),r.a.createElement("li",null,r.a.createElement(k.a,{to:e+"/",exact:!0,activeClassName:"active"},"Home"))))}}]),t}(a.Component);var S=Object(f.a)(Object(v.connect)(function(e){var t=e.authedUser,n=e.users;return{authedUser:t,userName:null!==t?n[t].name:null}})(C)),z=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.users,n=e.sortedUsers;return r.a.createElement("div",{className:"leaderboard"},r.a.createElement("h1",null,"Leaderboard"),r.a.createElement("section",{className:"leaderboard-list"},n.map(function(e){var n=t[e[0]];return r.a.createElement("div",{className:"leaderboard-box",key:n.id},r.a.createElement("img",{src:n.avatarURL,alt:"".concat(n.name,"'s avatar"),className:"avatar"}),r.a.createElement("hr",null),r.a.createElement("div",{className:"leaderboard-details"},r.a.createElement("h2",null,n.name),r.a.createElement("p",null,"Answered questions ",Object.keys(n.answers).length),r.a.createElement("hr",null),r.a.createElement("p",null,"Created questions ",n.questions.length)),r.a.createElement("hr",null),r.a.createElement("div",{className:"leaderboard-score"},r.a.createElement("div",{className:"leaderboard-score-header"},"Score"),r.a.createElement("div",{className:"leaderboard-score-body"},e[1])))})))}}]),t}(a.Component);var L=Object(v.connect)(function(e){var t=e.authedUser,n=e.users;return{authedUser:t,usersId:Object.keys(n),users:n,sortedUsers:Object.keys(n).map(function(e){return n[e]}).map(function(e){return[e.id,Object.keys(e.answers).length+e.questions.length]}).sort(function(e,t){return t[1]-e[1]})}})(z),R=n(31),_=n(11),A=n(2),D={sarahedo:{id:"sarahedo",name:"Sarah Edo",avatarURL:"https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-512.png",answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},tylermcginnis:{id:"tylermcginnis",name:"Tyler McGinnis",avatarURL:"https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png",answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},johndoe:{id:"johndoe",name:"John Doe",avatarURL:"https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/1_avatar-512.png",answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},Q={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["johndoe","sarahedo"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnis",timestamp:1489579767190,optionOne:{votes:["tylermcginnis"],text:"find $50 yourself"},optionTwo:{votes:["johndoe"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}}};function H(e){return new Promise(function(t,n){var a=e.author,r=function(e){var t=e.optionOneText,n=e.optionTwoText,a=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:a,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:n}}}(e);console.log(r),setTimeout(function(){Q=Object(A.a)({},Q,Object(_.a)({},r.id,r)),D=Object(A.a)({},D,Object(_.a)({},a,Object(A.a)({},D[a],{questions:D[a].questions.concat([r.id])}))),t(r)},1e3)})}function P(e){return function(e){var t=e.authedUser,n=e.qid,a=e.answer;return new Promise(function(e,r){setTimeout(function(){D=Object(A.a)({},D,Object(_.a)({},t,Object(A.a)({},D[t],{answers:Object(A.a)({},D[t].answers,Object(_.a)({},n,a))}))),Q=Object(A.a)({},Q,Object(_.a)({},n,Object(A.a)({},Q[n],Object(_.a)({},a,Object(A.a)({},Q[n][a],{votes:Q[n][a].votes.concat([t])}))))),e()},500)})}({authedUser:e.authedUser,qid:e.qid,answer:e.answer})}var F="RECEIVE_USERS";var I=n(13),V=n.n(I),W="RECEIVE_QUESTIONS",M="SAVE_QUESTION_ANSWER",J="ADD_QUESTION";function B(e,t){return function(n,a){var r,o=a().authedUser;return n(I.showLoading),(r={optionOneText:e,optionTwoText:t,author:o},H(r)).then(function(e){return n(function(e){return{type:J,question:e}}(e))}).then(function(){return n(n(I.hideLoading))})}}function Y(e,t,n){return function(e,a){var r=a().authedUser;return e(I.showLoading),P({authedUser:r,qid:t,answer:n}).then(function(a){return e(function(e){return{type:M,question:e}}({authedUser:r,qid:t,answer:n}))}).then(function(){return e(e(I.hideLoading))})}}function G(){return function(e){return e(Object(I.showLoading)()),Promise.all([new Promise(function(e,t){setTimeout(function(){return e(Object(A.a)({},D))},1e3)}),new Promise(function(e,t){setTimeout(function(){return e(Object(A.a)({},Q))},1e3)})]).then(function(e){var t=Object(R.a)(e,2);return{users:t[0],questions:t[1]}}).then(function(t){var n=t.users,a=t.questions;e(function(e){return{type:F,users:e}}(n)),e(function(e){return{type:W,questions:e}}(a)),e(Object(I.hideLoading)())})}}var $=function(e){var t=e.option,n=e.optionCount,a=e.totalOfVotes,o=e.chosen;return r.a.createElement("div",{className:"question-option "+(o&&"voted")},o&&r.a.createElement("div",{className:"voted-tag"},"Your",r.a.createElement("br",null),"vote"),r.a.createElement("p",null,"Would you rather ",t),r.a.createElement("div",{className:"poll-bar"},r.a.createElement("div",{className:"poll-bar--fill",style:{width:100*n/a+"%"}})),r.a.createElement("p",null,n,"out of ",a,"votes"))},K=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={selectedOption:"optionOne"},n.updateCategory=function(e){var t=e.target.value;n.setState(function(){return{selectedOption:t}})},n.handleSubmit=function(e){e.preventDefault();var t=n.state.selectedOption,a=n.props,r=(a.authedUser,a.id);(0,a.dispatch)(Y(0,r,t))},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){if(void 0===this.props.question)return r.a.createElement(h.a,{component:y});var e=this.props,t=e.users,n=e.question,o=e.answered,s=e.authedUser,i=n.author,c=n.optionOne,l=n.optionTwo,u=n.optionOne.votes.length,m=n.optionTwo.votes.length,d=u+m,p=n.optionOne.votes.includes(s);return r.a.createElement("div",{className:"question-details"},r.a.createElement("h1",null,"Question Details"),r.a.createElement("div",{className:"question"},r.a.createElement("h3",{className:"question-header"},t[i].name,"asks"),r.a.createElement("div",{className:"question-body"},r.a.createElement("img",{src:this.props.users[i].avatarURL,alt:"".concat(this.props.users[i].name,"'s avatar"),className:"avatar"}),r.a.createElement("hr",null),r.a.createElement("div",null,!0===o&&r.a.createElement(a.Fragment,null,r.a.createElement("h3",null,"Results"),r.a.createElement($,{option:c.text,optionCount:u,totalOfVotes:d,chosen:p}),r.a.createElement("p",null,p),r.a.createElement($,{option:l.text,optionCount:m,totalOfVotes:d,chosen:!p})),!1===o&&r.a.createElement(a.Fragment,null,r.a.createElement("h3",null,"Would you rather..."),r.a.createElement("form",null,r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"options",value:"optionOne",checked:"optionOne"===this.state.selectedOption,onChange:this.updateCategory})," ",c.text),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"options",value:"optionTwo",checked:"optionTwo"===this.state.selectedOption,onChange:this.updateCategory})," ",l.text),r.a.createElement("button",{type:"submit",onClick:this.handleSubmit},"Submit")))))))}}]),t}(a.Component);var X=Object(v.connect)(function(e,t){var n=e.users,a=e.questions,r=e.authedUser,o=t.match.params.id,s=a[o];if(a[o]){var i=!(!s.optionOne.votes.includes(r)&&!s.optionTwo.votes.includes(r));return{question:s,users:n,answered:i,id:o,authedUser:r}}return{question:s}})(K),Z=n(53),ee=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={optionOne:"",optionTwo:"",toHome:!1},n.handleChange=function(e){if("optionOne"===e.target.name){var t=e.target.value;n.setState(function(){return{optionOne:t}})}else{var a=e.target.value;n.setState(function(){return{optionTwo:a}})}},n.handleSubmit=function(e){e.preventDefault();var t=n.state.optionOne,a=n.state.optionTwo;(0,n.props.dispatch)(B(t,a)),n.setState(function(){return{optionOne:t,optionTwo:a,toHome:!0}})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.optionOne,n=e.optionTwo;return!0===e.toHome?r.a.createElement(Z.a,{to:"/"}):r.a.createElement(a.Fragment,null,r.a.createElement("h1",null,"Create new question"),r.a.createElement("div",{className:"new-question "},r.a.createElement("div",{className:"new-question--body"},r.a.createElement("label",null,"Complete the question"),r.a.createElement("h2",null,"Would you rather..."),r.a.createElement("form",{action:"",className:"new-question--form"},r.a.createElement("input",{type:"text",placeholder:"Enter option one text here",name:"optionOne",onChange:this.handleChange,value:t}),r.a.createElement("label",null,"OR"),r.a.createElement("input",{type:"text",placeholder:"Enter option two text here",name:"optionTwo",onChange:this.handleChange,value:n}),r.a.createElement("br",null),r.a.createElement("button",{disabled:0===t.length&&0===n.length,type:"Submit",onClick:this.handleSubmit},"Submit")))))}}]),t}(a.Component),te=Object(v.connect)()(ee),ne=(n(48),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(G())}},{key:"render",value:function(){var e="/Would_you_rather";return r.a.createElement(d.a,{basename:"/Would_you_rather"},r.a.createElement(a.Fragment,null,r.a.createElement(V.a,null),r.a.createElement("div",{className:"App"},!0===this.props.loading?r.a.createElement(N,null):r.a.createElement(a.Fragment,null,r.a.createElement(S,{baselink:e}),r.a.createElement(p.a,null,r.a.createElement(h.a,{path:"".concat(e,"/"),exact:!0,component:g}),r.a.createElement(h.a,{path:"".concat(e,"/leaderboard"),exact:!0,component:L}),r.a.createElement(h.a,{path:"".concat(e,"/question/:id"),component:X}),r.a.createElement(h.a,{path:"".concat(e,"/new"),component:te}),r.a.createElement(h.a,{component:y}))))))}}]),t}(a.Component));var ae=Object(v.connect)(function(e){return{loading:null===e.authedUser}})(ne),re=n(14);var oe=Object(re.c)({authedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return t.id;case q:return null;default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return Object(A.a)({},e,t.users);case J:var n=t.question,a=n.author,r=n.id;return Object(A.a)({},e,Object(_.a)({},a,Object(A.a)({},e[a],{questions:e[a].questions.concat(r)})));case M:var o=t.question,s=o.qid,i=o.answer,c=o.authedUser;return Object(A.a)({},e,Object(_.a)({},c,Object(A.a)({},e[c],{answers:Object(A.a)({},e[c].answers,Object(_.a)({},s,i))})));default:return e}},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:return Object(A.a)({},e,t.questions);case J:return Object(A.a)({},e,Object(_.a)({},t.question.id,t.question));case M:var n=t.question,a=n.qid,r=n.answer,o=n.authedUser;return Object(A.a)({},e,Object(_.a)({},a,Object(A.a)({},e[a],Object(_.a)({},r,Object(A.a)({},e[a][r],{votes:e[a][r].votes.concat([o])})))));default:return e}},loadingBar:I.loadingBarReducer}),se=n(30),ie=function(e){return function(t){return function(n){console.group(n.type);var a=t(n);return console.log("The new state is ",e.getState()),console.groupEnd(),a}}},ce=Object(re.a)(se.a,ie),le=Object(re.d)(oe,ce);s.a.render(r.a.createElement(v.Provider,{store:le},r.a.createElement(ae,null)),document.getElementById("root"))}},[[32,2,1]]]);
//# sourceMappingURL=main.9ac8e5dc.chunk.js.map