(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,n){e.exports=n(50)},37:function(e,t,n){},48:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(27),s=n.n(o),c=(n(37),n(5)),i=n(6),l=n(8),u=n(7),m=n(9),d=n(52),p=n(54),h=n(45),v=n(3),b=n(43),f=n(55),E=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.question,n=e.users,a=t.author,o=t.optionOne,s=t.id;return r.a.createElement("li",{className:"question"},r.a.createElement("h3",{className:"question-header"},n[a].name,"asks"),r.a.createElement("div",{className:"question-body"},r.a.createElement("img",{src:this.props.users[a].avatarURL,alt:"".concat(this.props.users[a].name,"'s avatar"),className:"avatar"}),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("h4",null,"Would you rather"),r.a.createElement("p",null,"...",o.text,"..."),r.a.createElement(b.a,{to:"question/"+s,activeclassname:"active",className:"button view-more"},"View More"))))}}]),t}(a.Component);var O=Object(f.a)(Object(v.connect)(function(e,t){var n=e.users;return{question:e.questions[t.id],users:n}})(E)),j=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={toggle:"unanswered"},n.toggleQuestions=function(e){var t=e.target.id;n.setState(function(){return{toggle:t}})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authedUser,n=e.questions,o=n.filter(function(e){return e.optionOne.votes.includes(t)||e.optionTwo.votes.includes(t)}),s=n.filter(function(e){return!e.optionOne.votes.includes(t)&&!e.optionTwo.votes.includes(t)});return r.a.createElement(a.Fragment,null,r.a.createElement("h1",null,"HomePage"),r.a.createElement("div",{className:"question-toggle"},r.a.createElement("section",null,r.a.createElement("button",{className:"toggle-button "+("unanswered"===this.state.toggle&&"selected"),id:"unanswered",onClick:this.toggleQuestions},"Unanswered Questions"),r.a.createElement("button",{className:"toggle-button "+("answered"===this.state.toggle&&"selected"),id:"answered",onClick:this.toggleQuestions},"Answered Questions")),r.a.createElement("section",null,r.a.createElement("ul",{className:"question-list"},"answered"===this.state.toggle&&o.map(function(e){return r.a.createElement(O,{key:e.id,id:e.id})}),"answered"===this.state.toggle&&0===o.length&&r.a.createElement("p",null,"You have answered all questions"),"unanswered"===this.state.toggle&&s.map(function(e){return r.a.createElement(O,{key:e.id,id:e.id})}),"unanswered"===this.state.toggle&&0===s.length&&r.a.createElement("p",null,"You have not answered any question")))))}}]),t}(a.Component);var g=Object(v.connect)(function(e){var t=e.authedUser,n=e.questions;return{questions:Object.keys(n).map(function(e){return n[e]}).sort(function(e,t){return t.timestamp-e.timestamp}),authedUser:t}})(j),w=function(){return r.a.createElement("div",{className:"not-found"},r.a.createElement("h1",null,"This poll does not exist. Go back!"),r.a.createElement(b.a,{to:"/",className:"button action"},"Take me home"))},y="SET_AUTHED_USER",q="UNSET_AUTHED_USER";var x=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).setUser=function(e){var t;e.preventDefault(),n.props.dispatch((t=n.props.id,{type:y,id:t}))},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("a",{href:"#user",onClick:this.setUser},r.a.createElement("img",{src:this.props.avatar,alt:"".concat(this.props.name,"'s avatar"),className:"avatar"}),r.a.createElement("span",{className:"username"},this.props.name))}}]),t}(a.Component);var U=Object(f.a)(Object(v.connect)(function(e,t){var n=e.authedUser,a=e.users[t.id];return{authedUser:n,name:a.name,avatar:a.avatarURL}})(x)),T=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement("h1",null,"Pick a user"),r.a.createElement("ul",{id:"login-box"},this.props.users.map(function(e){return r.a.createElement("li",{key:e},r.a.createElement(U,{id:e}))})))}}]),t}(a.Component);var N=Object(v.connect)(function(e){var t=e.authedUser,n=e.users;return{authedUser:t,users:Object.keys(n)}})(T),k=n(51),C=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).setUser=function(e){e.preventDefault(),n.props.dispatch({type:q})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",null,r.a.createElement("ul",{id:"nav"},r.a.createElement("li",{className:"logout"},r.a.createElement("button",{onClick:this.setUser},"Log out")),r.a.createElement("li",null,r.a.createElement("span",null,"Hello, ",this.props.userName,"!")),r.a.createElement("li",null,r.a.createElement(k.a,{to:"./leaderboard",activeClassName:"active"},"Leaderboard")),r.a.createElement("li",null,r.a.createElement(k.a,{to:"./new",activeClassName:"active"},"New Question")),r.a.createElement("li",null,r.a.createElement(k.a,{to:"./",exact:!0,activeClassName:"active"},"Home"))))}}]),t}(a.Component);var S=Object(f.a)(Object(v.connect)(function(e){var t=e.authedUser,n=e.users;return{authedUser:t,userName:null!==t?n[t].name:null}})(C)),z=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.users,n=e.sortedUsers;return r.a.createElement("div",{className:"leaderboard"},r.a.createElement("h1",null,"Leaderboard"),r.a.createElement("section",{className:"leaderboard-list"},n.map(function(e){var n=t[e[0]];return r.a.createElement("div",{className:"leaderboard-box",key:n.id},r.a.createElement("img",{src:n.avatarURL,alt:"".concat(n.name,"'s avatar"),className:"avatar"}),r.a.createElement("hr",null),r.a.createElement("div",{className:"leaderboard-details"},r.a.createElement("h2",null,n.name),r.a.createElement("p",null,"Answered questions ",Object.keys(n.answers).length),r.a.createElement("hr",null),r.a.createElement("p",null,"Created questions ",n.questions.length)),r.a.createElement("hr",null),r.a.createElement("div",{className:"leaderboard-score"},r.a.createElement("div",{className:"leaderboard-score-header"},"Score"),r.a.createElement("div",{className:"leaderboard-score-body"},e[1])))})))}}]),t}(a.Component);var L=Object(v.connect)(function(e){var t=e.authedUser,n=e.users;return{authedUser:t,usersId:Object.keys(n),users:n,sortedUsers:Object.keys(n).map(function(e){return n[e]}).map(function(e){return[e.id,Object.keys(e.answers).length+e.questions.length]}).sort(function(e,t){return t[1]-e[1]})}})(z),R=n(31),A=n(11),D=n(2),_={sarahedo:{id:"sarahedo",name:"Sarah Edo",avatarURL:"https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-512.png",answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},tylermcginnis:{id:"tylermcginnis",name:"Tyler McGinnis",avatarURL:"https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png",answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},johndoe:{id:"johndoe",name:"John Doe",avatarURL:"https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/1_avatar-512.png",answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},Q={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["johndoe","sarahedo"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnis",timestamp:1489579767190,optionOne:{votes:["tylermcginnis"],text:"find $50 yourself"},optionTwo:{votes:["johndoe"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}}};function H(e){return new Promise(function(t,n){var a=e.author,r=function(e){var t=e.optionOneText,n=e.optionTwoText,a=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:a,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:n}}}(e);console.log(r),setTimeout(function(){Q=Object(D.a)({},Q,Object(A.a)({},r.id,r)),_=Object(D.a)({},_,Object(A.a)({},a,Object(D.a)({},_[a],{questions:_[a].questions.concat([r.id])}))),t(r)},1e3)})}function P(e){return function(e){var t=e.authedUser,n=e.qid,a=e.answer;return new Promise(function(e,r){setTimeout(function(){_=Object(D.a)({},_,Object(A.a)({},t,Object(D.a)({},_[t],{answers:Object(D.a)({},_[t].answers,Object(A.a)({},n,a))}))),Q=Object(D.a)({},Q,Object(A.a)({},n,Object(D.a)({},Q[n],Object(A.a)({},a,Object(D.a)({},Q[n][a],{votes:Q[n][a].votes.concat([t])}))))),e()},500)})}({authedUser:e.authedUser,qid:e.qid,answer:e.answer})}var F="RECEIVE_USERS";var I=n(13),V=n.n(I),W="RECEIVE_QUESTIONS",M="SAVE_QUESTION_ANSWER",J="ADD_QUESTION";function B(e,t){return function(n,a){var r,o=a().authedUser;return n(I.showLoading),(r={optionOneText:e,optionTwoText:t,author:o},H(r)).then(function(e){return n(function(e){return{type:J,question:e}}(e))}).then(function(){return n(n(I.hideLoading))})}}function Y(e,t,n){return function(e,a){var r=a().authedUser;return e(I.showLoading),P({authedUser:r,qid:t,answer:n}).then(function(a){return e(function(e){return{type:M,question:e}}({authedUser:r,qid:t,answer:n}))}).then(function(){return e(e(I.hideLoading))})}}function G(){return function(e){return e(Object(I.showLoading)()),Promise.all([new Promise(function(e,t){setTimeout(function(){return e(Object(D.a)({},_))},1e3)}),new Promise(function(e,t){setTimeout(function(){return e(Object(D.a)({},Q))},1e3)})]).then(function(e){var t=Object(R.a)(e,2);return{users:t[0],questions:t[1]}}).then(function(t){var n=t.users,a=t.questions;e(function(e){return{type:F,users:e}}(n)),e(function(e){return{type:W,questions:e}}(a)),e(Object(I.hideLoading)())})}}var $=function(e){var t=e.option,n=e.optionCount,a=e.totalOfVotes,o=e.chosen;return r.a.createElement("div",{className:"question-option "+(o&&"voted")},o&&r.a.createElement("div",{className:"voted-tag"},"Your",r.a.createElement("br",null),"vote"),r.a.createElement("p",null,"Would you rather ",t),r.a.createElement("div",{className:"poll-bar"},r.a.createElement("div",{className:"poll-bar--fill",style:{width:100*n/a+"%"}})),r.a.createElement("p",null,n,"out of ",a,"votes"))},K=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={selectedOption:"optionOne"},n.updateCategory=function(e){var t=e.target.value;n.setState(function(){return{selectedOption:t}})},n.handleSubmit=function(e){e.preventDefault();var t=n.state.selectedOption,a=n.props,r=(a.authedUser,a.id);(0,a.dispatch)(Y(0,r,t))},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){if(void 0===this.props.question)return r.a.createElement(h.a,{component:w});var e=this.props,t=e.users,n=e.question,o=e.answered,s=e.authedUser,c=n.author,i=n.optionOne,l=n.optionTwo,u=n.optionOne.votes.length,m=n.optionTwo.votes.length,d=u+m,p=n.optionOne.votes.includes(s);return r.a.createElement("div",{className:"question-details"},r.a.createElement("h1",null,"Question Details"),r.a.createElement("div",{className:"question"},r.a.createElement("h3",{className:"question-header"},t[c].name,"asks"),r.a.createElement("div",{className:"question-body"},r.a.createElement("img",{src:this.props.users[c].avatarURL,alt:"".concat(this.props.users[c].name,"'s avatar"),className:"avatar"}),r.a.createElement("hr",null),r.a.createElement("div",null,!0===o&&r.a.createElement(a.Fragment,null,r.a.createElement("h3",null,"Results"),r.a.createElement($,{option:i.text,optionCount:u,totalOfVotes:d,chosen:p}),r.a.createElement("p",null,p),r.a.createElement($,{option:l.text,optionCount:m,totalOfVotes:d,chosen:!p})),!1===o&&r.a.createElement(a.Fragment,null,r.a.createElement("h3",null,"Would you rather..."),r.a.createElement("form",null,r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"options",value:"optionOne",checked:"optionOne"===this.state.selectedOption,onChange:this.updateCategory})," ",i.text),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"options",value:"optionTwo",checked:"optionTwo"===this.state.selectedOption,onChange:this.updateCategory})," ",l.text),r.a.createElement("button",{type:"submit",onClick:this.handleSubmit},"Submit")))))))}}]),t}(a.Component);var X=Object(v.connect)(function(e,t){var n=e.users,a=e.questions,r=e.authedUser,o=t.match.params.id,s=a[o];if(a[o]){var c=!(!s.optionOne.votes.includes(r)&&!s.optionTwo.votes.includes(r));return{question:s,users:n,answered:c,id:o,authedUser:r}}return{question:s}})(K),Z=n(53),ee=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={optionOne:"",optionTwo:"",toHome:!1},n.handleChange=function(e){if("optionOne"===e.target.name){var t=e.target.value;n.setState(function(){return{optionOne:t}})}else{var a=e.target.value;n.setState(function(){return{optionTwo:a}})}},n.handleSubmit=function(e){e.preventDefault();var t=n.state.optionOne,a=n.state.optionTwo;(0,n.props.dispatch)(B(t,a)),n.setState(function(){return{optionOne:t,optionTwo:a,toHome:!0}})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.optionOne,n=e.optionTwo;return!0===e.toHome?r.a.createElement(Z.a,{to:"/"}):r.a.createElement(a.Fragment,null,r.a.createElement("h1",null,"Create new question"),r.a.createElement("div",{className:"new-question "},r.a.createElement("div",{className:"new-question--body"},r.a.createElement("label",null,"Complete the question"),r.a.createElement("h2",null,"Would you rather..."),r.a.createElement("form",{action:"",className:"new-question--form"},r.a.createElement("input",{type:"text",placeholder:"Enter option one text here",name:"optionOne",onChange:this.handleChange,value:t}),r.a.createElement("label",null,"OR"),r.a.createElement("input",{type:"text",placeholder:"Enter option two text here",name:"optionTwo",onChange:this.handleChange,value:n}),r.a.createElement("br",null),r.a.createElement("button",{disabled:0===t.length&&0===n.length,type:"Submit",onClick:this.handleSubmit},"Submit")))))}}]),t}(a.Component),te=Object(v.connect)()(ee),ne=(n(48),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(G())}},{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(a.Fragment,null,r.a.createElement(V.a,null),r.a.createElement("div",{className:"App"},!0===this.props.loading?r.a.createElement(N,null):r.a.createElement(a.Fragment,null,r.a.createElement(S,null),r.a.createElement(p.a,null,r.a.createElement(h.a,{path:"/Would_you_rather",exact:!0,component:g}),r.a.createElement(h.a,{path:"/",exact:!0,component:g}),r.a.createElement(h.a,{path:"/leaderboard",exact:!0,component:L}),r.a.createElement(h.a,{path:"/question/:id",component:X}),r.a.createElement(h.a,{path:"/new",component:te}),r.a.createElement(h.a,{path:"/leaderboard",component:L}),r.a.createElement(h.a,{component:w}))))))}}]),t}(a.Component));var ae=Object(v.connect)(function(e){return{loading:null===e.authedUser}})(ne),re=n(14);var oe=Object(re.c)({authedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return t.id;case q:return null;default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return Object(D.a)({},e,t.users);case J:var n=t.question,a=n.author,r=n.id;return Object(D.a)({},e,Object(A.a)({},a,Object(D.a)({},e[a],{questions:e[a].questions.concat(r)})));case M:var o=t.question,s=o.qid,c=o.answer,i=o.authedUser;return Object(D.a)({},e,Object(A.a)({},i,Object(D.a)({},e[i],{answers:Object(D.a)({},e[i].answers,Object(A.a)({},s,c))})));default:return e}},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:return Object(D.a)({},e,t.questions);case J:return Object(D.a)({},e,Object(A.a)({},t.question.id,t.question));case M:var n=t.question,a=n.qid,r=n.answer,o=n.authedUser;return Object(D.a)({},e,Object(A.a)({},a,Object(D.a)({},e[a],Object(A.a)({},r,Object(D.a)({},e[a][r],{votes:e[a][r].votes.concat([o])})))));default:return e}},loadingBar:I.loadingBarReducer}),se=n(30),ce=function(e){return function(t){return function(n){console.group(n.type);var a=t(n);return console.log("The new state is ",e.getState()),console.groupEnd(),a}}},ie=Object(re.a)(se.a,ce),le=Object(re.d)(oe,ie);s.a.render(r.a.createElement(v.Provider,{store:le},r.a.createElement(ae,null)),document.getElementById("root"))}},[[32,2,1]]]);
//# sourceMappingURL=main.2965723e.chunk.js.map