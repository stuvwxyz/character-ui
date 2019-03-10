(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){e.exports=a.p+"static/media/homeImage.d65a8552.png"},33:function(e,t,a){e.exports=a(48)},38:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a.n(r),n=a(15),i=a.n(n),h=(a(38),a(4)),o=a.n(h),l=a(14),s=a(7),u=a(8),m=a(12),p=a(11),d=a(13),f=(a(26),a(27)),E=a.n(f),v=a(3),g=a(49),b=a(52),y=a(28),j=new(function(){function e(){Object(s.a)(this,e),this.auth0=new y.a.WebAuth({domain:"gordianknots.auth0.com",audience:"https://gordianknots.auth0.com/userinfo",clientID:"xttiqiRrvR8maE7DT603buK6oQzU4Sgd",redirectUri:"https://ics499-character.herokuapp.com/callback",responseType:"id_token",scope:"openid profile"}),this.getProfile=this.getProfile.bind(this),this.handleAuthentication=this.handleAuthentication.bind(this),this.isAuthenticated=this.isAuthenticated.bind(this),this.signIn=this.signIn.bind(this),this.signOut=this.signOut.bind(this)}return Object(u.a)(e,[{key:"getProfile",value:function(){return this.profile}},{key:"getIdToken",value:function(){return this.idToken}},{key:"isAuthenticated",value:function(){return(new Date).getTime()<this.expiresAt}},{key:"signIn",value:function(){this.auth0.authorize()}},{key:"handleAuthentication",value:function(){var e=this;return new Promise(function(t,a){e.auth0.parseHash(function(r,c){return r?a(r):c&&c.idToken?(e.setSession(c),void t()):a(r)})})}},{key:"setSession",value:function(e){this.idToken=e.idToken,this.profile=e.idTokenPayload,this.expiresAt=1e3*e.idTokenPayload.exp}},{key:"signOut",value:function(){this.auth0.logout({returnTo:"https://ics499-character.herokuapp.com",clientID:"xttiqiRrvR8maE7DT603buK6oQzU4Sgd"})}},{key:"silentAuth",value:function(){var e=this;return new Promise(function(t,a){e.auth0.checkSession({},function(r,c){if(r)return a(r);e.setSession(c),t()})})}}]),e}());var k=Object(b.a)(function(e){return c.a.createElement("nav",{className:"navbar navbar-dark bg-dark fixed-top"},c.a.createElement(v.l,{nav:!0,inNavbar:!0},c.a.createElement(v.f,{nav:!0,caret:!0},"Menu"),c.a.createElement(v.e,{left:!0},c.a.createElement(v.d,{tag:g.a,to:"/"},"Home"),c.a.createElement(v.d,{divider:!0}),c.a.createElement(v.d,{tag:g.a,to:"/character"},"Manage Characters"),c.a.createElement(v.d,{divider:!0}),c.a.createElement(v.d,{divider:!0}),c.a.createElement(v.d,{tag:"a",href:"https://github.com/stuvwxyz/character-ui"},"GitHub UI"),c.a.createElement(v.d,{tag:"a",href:"https://github.com/stuvwxyz/character-api"},"GitHub API"))),!j.isAuthenticated()&&c.a.createElement("button",{className:"btn btn-dark",onClick:j.signIn},"Sign In"),j.isAuthenticated()&&c.a.createElement("div",null,c.a.createElement("label",{className:"mr-2 text-white"},j.getProfile().name),c.a.createElement("button",{className:"btn btn-dark",onClick:function(){j.signOut(),e.history.replace("/")}},"Sign Out")))}),O=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(k,null),c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("img",{src:E.a,className:"App-logo",alt:"homeImage"}),c.a.createElement("p",null,"Begin your adventure"),c.a.createElement(v.c,{fluid:!0},c.a.createElement(v.a,{color:"link"},c.a.createElement(g.a,{to:"/character"},"Manage Characters"))))))}}]),t}(r.Component),C=a(51),A=a(53),w=a(50),x=a(32),N=a(6),S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={character:[],isLoading:!0},a.remove=a.remove.bind(Object(N.a)(Object(N.a)(a))),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),fetch("/api/character").then(function(e){return e.json()}).then(function(t){return e.setState({character:t,isLoading:!1})})}},{key:"remove",value:function(){var e=Object(l.a)(o.a.mark(function e(t){var a=this;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/character/".concat(t),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(){var e=Object(x.a)(a.state.character).filter(function(e){return e.id!==t});a.setState({character:e})});case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;if(!j.isAuthenticated())return null;var t=this.state,a=t.character;if(t.isLoading)return c.a.createElement("p",null,"Loading...");var r=a.map(function(t){return c.a.createElement("tr",{key:t.id},c.a.createElement("td",{style:{whiteSpace:"nowrap"}},t.characterName),c.a.createElement("td",{style:{whiteSpace:"nowrap"}},t.characterAge),c.a.createElement("td",{style:{whiteSpace:"nowrap"}},t.characterGender),c.a.createElement("td",{style:{whiteSpace:"nowrap"}},t.characterRace),c.a.createElement("td",{style:{whiteSpace:"wrap"}},t.characterDescription),c.a.createElement("td",{style:{whiteSpace:"nowrap"}},t.characterAlive),c.a.createElement("td",null,c.a.createElement(v.b,{className:"float-right"},c.a.createElement(v.a,{size:"sm",color:"success",tag:g.a,to:"/character/"+t.characterId},"Details"),c.a.createElement(v.a,{size:"sm",color:"primary",tag:g.a,to:"/characteredit/"+t.characterId},"Edit"),c.a.createElement(v.a,{size:"sm",color:"danger",onClick:function(){return e.remove(t.characterId)}},"Delete"))))});return c.a.createElement("div",null,c.a.createElement(k,null),c.a.createElement(v.c,{fluid:!0},c.a.createElement("div",{className:"float-right"},c.a.createElement(v.a,{color:"success",tag:g.a,to:"/characteredit/new"},"Add Character")),c.a.createElement("h3",null,"Character List"),c.a.createElement(v.k,{className:"mt-4"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{width:"15%"},"Name"),c.a.createElement("th",{width:"20%"},"Age"),c.a.createElement("th",{width:"20%"},"Gender"),c.a.createElement("th",{width:"20%"},"Race"),c.a.createElement("th",{width:"20%"},"Physical Description"),c.a.createElement("th",{width:"20%"},"Alive"),c.a.createElement("th",{width:"10%"},"Actions"))),c.a.createElement("tbody",null,r))))}}]),t}(r.Component),D=a(21),P=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).emptyItem={characterId:"",characterName:"",characterAge:"",characterGender:"",characterRace:"",characterDescription:"",characterPurpose:"",characterBackground:"",characterNotes:"",characterAlive:""},a.state={item:a.emptyItem},a.handleChange=a.handleChange.bind(Object(N.a)(Object(N.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(N.a)(Object(N.a)(a))),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("new"===this.props.match.params.id){e.next=7;break}return e.next=3,fetch("/api/character/".concat(this.props.match.params.id));case 3:return e.next=5,e.sent.json();case 5:t=e.sent,this.setState({item:t});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){var t=e.target,a=t.value,r=t.name,c=Object(D.a)({},this.state.item);c[r]=a,this.setState({item:c})}},{key:"handleSubmit",value:function(){var e=Object(l.a)(o.a.mark(function e(t){var a,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(this.state),a=this.state.item,r=a.characterId,console.log(r),e.next=7,fetch("/api/character/".concat(r),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)});case 7:this.props.history.push("/character");case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(!j.isAuthenticated())return null;var e=this.state.item,t=c.a.createElement("h2",null,"View Character");return c.a.createElement("div",null,c.a.createElement(k,null),c.a.createElement(v.c,null,t,c.a.createElement(v.g,{onSubmit:this.handleSubmit},c.a.createElement(v.h,null,c.a.createElement(v.j,{for:"characterName"},"characterName"),c.a.createElement(v.i,{type:"text",name:"characterName",id:"characterName",value:e.characterName||"",autoComplete:"characterName"}),c.a.createElement(v.j,{for:"characterAge"},"characterAge"),c.a.createElement(v.i,{type:"text",name:"characterAge",id:"characterAge",value:e.characterAge||"",autoComplete:"characterAge"}),c.a.createElement(v.j,{for:"characterGender"},"characterGender"),c.a.createElement(v.i,{type:"text",name:"characterGender",id:"characterGender",value:e.characterGender||"",autoComplete:"characterGender"}),c.a.createElement(v.j,{for:"characterRace"},"characterRace"),c.a.createElement(v.i,{type:"text",name:"characterRace",id:"characterRace",value:e.characterRace||"",autoComplete:"characterRace"}),c.a.createElement(v.j,{for:"characterDescription"},"characterDescription"),c.a.createElement(v.i,{type:"text",name:"characterDescription",id:"characterDescription",value:e.characterDescription||"",autoComplete:"characterDescription"}),c.a.createElement(v.j,{for:"characterPurpose"},"characterPurpose"),c.a.createElement(v.i,{type:"text",name:"characterPurpose",id:"characterPurpose",value:e.characterPurpose||"",autoComplete:"characterPurpose"}),c.a.createElement(v.j,{for:"characterBackground"},"characterBackground"),c.a.createElement(v.i,{type:"text",name:"characterBackground",id:"characterBackground",value:e.characterBackground||"",autoComplete:"characterBackground"}),c.a.createElement(v.j,{for:"characterNotes"},"characterNotes"),c.a.createElement(v.i,{type:"text",name:"characterNotes",id:"characterNotes",value:e.characterNotes||"",autoComplete:"characterNotes"}),c.a.createElement(v.j,{for:"characterAlive"},"characterAlive"),c.a.createElement(v.i,{type:"text",name:"characterAlive",id:"characterAlive",value:e.characterAlive||"",autoComplete:"characterAlive "})),c.a.createElement(v.h,null,c.a.createElement(v.a,{color:"success",tag:g.a,to:"/character"},"Return")))))}}]),t}(r.Component),I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).emptyItem={characterId:"",characterName:"",characterAge:"",characterGender:"",characterRace:"",characterDescription:"",characterPurpose:"",characterBackground:"",characterNotes:"",characterAlive:""},a.state={item:a.emptyItem},a.handleChange=a.handleChange.bind(Object(N.a)(Object(N.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(N.a)(Object(N.a)(a))),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("new"===this.props.match.params.id){e.next=7;break}return e.next=3,fetch("/api/character/".concat(this.props.match.params.id));case 3:return e.next=5,e.sent.json();case 5:t=e.sent,this.setState({item:t});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){var t=e.target,a=t.value,r=t.name,c=Object(D.a)({},this.state.item);c[r]=a,this.setState({item:c})}},{key:"handleSubmit",value:function(){var e=Object(l.a)(o.a.mark(function e(t){var a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=this.state.item,e.next=4,fetch("/api/character",{method:a.id?"PUT":"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)});case 4:this.props.history.push("/character");case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(!j.isAuthenticated())return null;var e=this.state.item,t=c.a.createElement("h2",null,e.id?"Edit Character":"Add Character");return c.a.createElement("div",null,c.a.createElement(k,null),c.a.createElement(v.c,null,t,c.a.createElement(v.g,{onSubmit:this.handleSubmit},c.a.createElement(v.h,null,c.a.createElement(v.j,{for:"characterName"},"characterName"),c.a.createElement(v.i,{type:"text",name:"characterName",id:"characterName",value:e.characterName||"",onChange:this.handleChange,autoComplete:"characterName"})),c.a.createElement(v.h,null,c.a.createElement(v.j,{for:"characterAge"},"characterAge"),c.a.createElement(v.i,{type:"text",name:"characterAge",id:"characterAge",value:e.characterAge||"",onChange:this.handleChange,autoComplete:"characterAge"})),c.a.createElement(v.h,null,c.a.createElement(v.j,{for:"characterGender"},"characterGender"),c.a.createElement(v.i,{type:"text",name:"characterGender",id:"characterGender",value:e.characterGender||"",onChange:this.handleChange,autoComplete:"characterGender"})),c.a.createElement(v.h,null,c.a.createElement(v.j,{for:"characterRace"},"characterRace"),c.a.createElement(v.i,{type:"text",name:"characterRace",id:"characterRace",value:e.characterRace||"",onChange:this.handleChange,autoComplete:"characterRace"})),c.a.createElement(v.h,null,c.a.createElement(v.j,{for:"characterDescription"},"characterDescription"),c.a.createElement(v.i,{type:"text",name:"characterDescription",id:"characterDescription",value:e.characterDescription||"",onChange:this.handleChange,autoComplete:"characterDescription"})),c.a.createElement(v.h,null,c.a.createElement(v.j,{for:"characterPurpose"},"characterPurpose"),c.a.createElement(v.i,{type:"text",name:"characterPurpose",id:"characterPurpose",value:e.characterPurpose||"",onChange:this.handleChange,autoComplete:"characterPurpose"})),c.a.createElement(v.h,null,c.a.createElement(v.j,{for:"characterBackground"},"characterBackground"),c.a.createElement(v.i,{type:"text",name:"characterBackground",id:"characterBackground",value:e.characterBackground||"",onChange:this.handleChange,autoComplete:"characterBackground"})),c.a.createElement(v.h,null,c.a.createElement(v.j,{for:"characterNotes"},"characterNotes"),c.a.createElement(v.i,{type:"text",name:"characterNotes",id:"characterNotes",value:e.characterNotes||"",onChange:this.handleChange,autoComplete:"characterNotes"})),c.a.createElement(v.h,null,c.a.createElement(v.j,{for:"characterAlive"},"characterAlive"),c.a.createElement(v.i,{type:"text",name:"characterAlive",id:"characterAlive",value:e.characterAlive||"",onChange:this.handleChange,autoComplete:"characterAlive"})),c.a.createElement(v.h,null,c.a.createElement(v.a,{color:"primary",type:"submit"},"Save")," ",c.a.createElement(v.a,{color:"secondary",tag:g.a,to:"/character"},"Cancel")))))}}]),t}(r.Component),R=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.handleAuthentication();case 2:this.props.history.replace("/");case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return c.a.createElement("p",null,"Loading profile...")}}]),t}(r.Component),G=Object(b.a)(R);var T=function(e){var t=e.component,a=e.path,r=e.checkingSession;return c.a.createElement(w.a,{path:a,render:function(){return r?c.a.createElement("h3",{className:"text-center"},"Validating session..."):j.isAuthenticated()?c.a.createElement(t,null):(j.signIn(),c.a.createElement("div",null))}})},B=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("/callback"!==this.props.location.pathname){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,j.silentAuth();case 5:this.forceUpdate(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),"login_required"!==e.t0.error&&console.log(e.t0.error);case 11:case"end":return e.stop()}},e,this,[[2,8]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return c.a.createElement(C.a,null,c.a.createElement(A.a,null,c.a.createElement(w.a,{path:"/",exact:!0,component:O}),c.a.createElement(T,{path:"/character",component:S}),c.a.createElement(T,{path:"/character/:id",component:P}),c.a.createElement(T,{path:"/characteredit/:id",component:I}),c.a.createElement(w.a,{exact:!0,path:"/callback",component:G})))}}]),t}(r.Component),z=Object(b.a)(B);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(46);i.a.render(c.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,2,1]]]);
//# sourceMappingURL=main.0195b214.chunk.js.map