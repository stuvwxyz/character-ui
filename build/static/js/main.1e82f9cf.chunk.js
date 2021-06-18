(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){},28:function(e,t,a){e.exports=a.p+"static/media/homeImage.d65a8552.png"},33:function(e,t,a){e.exports=a(48)},38:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(17),i=a.n(c),o=(a(38),a(4)),l=a.n(o),s=a(6),h=a(7),u=a(8),m=a(10),p=a(9),d=a(11),E=(a(27),a(28)),f=a.n(E),g=a(2),v=a(49),b=a(52),j=a(29),y=new(function(){function e(){Object(h.a)(this,e),this.auth0=new j.a.WebAuth({domain:"gordianknots.auth0.com",audience:"https://gordianknots.auth0.com/userinfo",clientID:"m01zl0fyCE1DcHpYjN0EzX8F0Ezj684g",redirectUri:"https://gamenite-dev.herokuapp.com/callback",responseType:"id_token",scope:"openid profile"}),this.getProfile=this.getProfile.bind(this),this.handleAuthentication=this.handleAuthentication.bind(this),this.isAuthenticated=this.isAuthenticated.bind(this),this.signIn=this.signIn.bind(this),this.signOut=this.signOut.bind(this)}return Object(u.a)(e,[{key:"getProfile",value:function(){return this.profile}},{key:"getIdToken",value:function(){return this.idToken}},{key:"isAuthenticated",value:function(){return(new Date).getTime()<this.expiresAt}},{key:"signIn",value:function(){this.auth0.authorize()}},{key:"handleAuthentication",value:function(){var e=this;return new Promise(function(t,a){e.auth0.parseHash(function(n,r){return n?a(n):r&&r.idToken?(e.setSession(r),void t()):a(n)})})}},{key:"setSession",value:function(e){this.idToken=e.idToken,this.profile=e.idTokenPayload,this.expiresAt=1e3*e.idTokenPayload.exp}},{key:"signOut",value:function(){this.auth0.logout({returnTo:"https://gamenite-dev.herokuapp.com",clientID:"m01zl0fyCE1DcHpYjN0EzX8F0Ezj684g"})}},{key:"silentAuth",value:function(){var e=this;return new Promise(function(t,a){e.auth0.checkSession({},function(n,r){if(n)return a(n);e.setSession(r),t()})})}}]),e}());var O=Object(b.a)(function(e){return r.a.createElement(g.l,{color:"faded",light:!0,expand:"md"},r.a.createElement(g.k,{className:"navbar navbar-dark bg-dark fixed-top"},r.a.createElement(g.n,{nav:!0,inNavbar:!0},r.a.createElement(g.f,{nav:!0,caret:!0},"Menu"),r.a.createElement(g.e,{left:!0},r.a.createElement(g.d,{tag:v.a,to:"/"},"Home"),r.a.createElement(g.d,{divider:!0}),r.a.createElement(g.d,{tag:v.a,to:"/character"},"Manage Characters"),r.a.createElement(g.d,{tag:v.a,to:"/location"},"Manage Locations"),r.a.createElement(g.d,{tag:v.a,to:"/organization"},"Manage Organizations"),r.a.createElement(g.d,{divider:!0}),r.a.createElement(g.d,{divider:!0}),r.a.createElement(g.d,{tag:"a",href:"https://github.com/stuvwxyz/character-ui"},"GitHub UI"),r.a.createElement(g.d,{tag:"a",href:"https://github.com/stuvwxyz/character-api"},"GitHub API"))),!y.isAuthenticated()&&r.a.createElement("button",{className:"btn btn-dark",onClick:y.signIn},"Sign In"),y.isAuthenticated()&&r.a.createElement("div",null,r.a.createElement("label",{className:"mr-2 text-white"},y.getProfile().name),r.a.createElement("button",{className:"btn btn-dark",onClick:function(){y.signOut(),e.history.replace("/")}},"Sign Out"))))}),C=function(e){function t(){return Object(h.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:f.a,className:"App-logo",alt:"homeImage"}),r.a.createElement("p",null,"Begin your adventure"),r.a.createElement(g.c,{fluid:!0},r.a.createElement(g.a,{color:"link"},r.a.createElement(v.a,{to:"/character"},"Manage Characters")),r.a.createElement(g.a,{color:"link"},r.a.createElement(v.a,{to:"/location"},"Manage Locations")),r.a.createElement(g.a,{color:"link"},r.a.createElement(v.a,{to:"/organization"},"Manage Organizations"))))))}}]),t}(n.Component),k=a(51),N=a(53),w=a(50),z=a(18),x=a(5),S=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={character:[],isLoading:!0},a.remove=a.remove.bind(Object(x.a)(Object(x.a)(a))),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),fetch("/api/character").then(function(e){return e.json()}).then(function(t){return e.setState({character:t,isLoading:!1})})}},{key:"remove",value:function(){var e=Object(s.a)(l.a.mark(function e(t){var a=this;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/character/".concat(t),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(){var e=Object(z.a)(a.state.character).filter(function(e){return e.id!==t});a.setState({character:e})});case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;if(!y.isAuthenticated())return null;var t=this.state,a=t.character;if(t.isLoading)return r.a.createElement("p",null,"Loading...");var n=a.map(function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",{style:{whiteSpace:"nowrap"}},t.characterName),r.a.createElement("td",{style:{whiteSpace:"nowrap"}},t.characterAge),r.a.createElement("td",{style:{whiteSpace:"nowrap"}},t.characterGender),r.a.createElement("td",{style:{whiteSpace:"nowrap"}},t.characterRace),r.a.createElement("td",{style:{whiteSpace:"wrap"}},t.characterDescription),r.a.createElement("td",{style:{whiteSpace:"nowrap"}},t.characterAlive),r.a.createElement("td",null,r.a.createElement(g.b,{className:"float-right"},r.a.createElement(g.a,{size:"sm",color:"success",tag:v.a,to:"/character/"+t.characterId},"Details"),r.a.createElement(g.a,{size:"sm",color:"primary",tag:v.a,to:"/characteredit/"+t.characterId},"Edit"),r.a.createElement(g.a,{size:"sm",color:"danger",onClick:function(){return e.remove(t.characterId)}},"Delete"))))});return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement(g.c,{fluid:!0},r.a.createElement("div",{className:"float-right"},r.a.createElement(g.a,{color:"success",tag:v.a,to:"/characteredit/new"},"Add Character")),r.a.createElement("h3",null,"Character List"),r.a.createElement(g.m,{className:"mt-4"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{width:"15%"},"Name"),r.a.createElement("th",{width:"20%"},"Age"),r.a.createElement("th",{width:"20%"},"Gender"),r.a.createElement("th",{width:"20%"},"Race"),r.a.createElement("th",{width:"20%"},"Physical Description"),r.a.createElement("th",{width:"20%"},"Alive"),r.a.createElement("th",{width:"10%"},"Actions"))),r.a.createElement("tbody",null,n))))}}]),t}(n.Component),A=Object(b.a)(S),D=a(16),T=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).emptyItem={characterId:"",characterName:"",characterAge:"",characterGender:"",characterRace:"",characterDescription:"",characterPurpose:"",characterBackground:"",characterNotes:"",characterAlive:""},a.state={item:a.emptyItem},a.handleChange=a.handleChange.bind(Object(x.a)(Object(x.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(x.a)(Object(x.a)(a))),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("new"===this.props.match.params.id){e.next=7;break}return e.next=3,fetch("/api/character/".concat(this.props.match.params.id));case 3:return e.next=5,e.sent.json();case 5:t=e.sent,this.setState({item:t});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.name,r=Object(D.a)({},this.state.item);r[n]=a,this.setState({item:r})}},{key:"handleSubmit",value:function(){var e=Object(s.a)(l.a.mark(function e(t){var a,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(this.state),a=this.state.item,n=a.characterId,console.log(n),e.next=7,fetch("/api/character/".concat(n),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)});case 7:this.props.history.push("/character");case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(!y.isAuthenticated())return null;var e=this.state.item,t=r.a.createElement("h2",null,"View Character");return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement(g.c,null,t,r.a.createElement(g.g,{onSubmit:this.handleSubmit},r.a.createElement(g.h,null,r.a.createElement(g.j,{for:"characterName"},"Name"),r.a.createElement(g.i,{type:"text",name:"characterName",id:"characterName",value:e.characterName||"",autoComplete:"characterName"}),r.a.createElement(g.j,{for:"characterAge"},"Age"),r.a.createElement(g.i,{type:"text",name:"characterAge",id:"characterAge",value:e.characterAge||"",autoComplete:"characterAge"}),r.a.createElement(g.j,{for:"characterGender"},"Gender"),r.a.createElement(g.i,{type:"text",name:"characterGender",id:"characterGender",value:e.characterGender||"",autoComplete:"characterGender"}),r.a.createElement(g.j,{for:"characterRace"},"Race"),r.a.createElement(g.i,{type:"text",name:"characterRace",id:"characterRace",value:e.characterRace||"",autoComplete:"characterRace"}),r.a.createElement(g.j,{for:"characterRelations"},"Relations (siblings)"),r.a.createElement(g.i,{type:"text",name:"characterRelations",id:"characterRelations",value:e.characterRelations||"",autoComplete:"characterRelations"}),r.a.createElement(g.j,{for:"characterDescription"},"Description"),r.a.createElement(g.i,{type:"text",name:"characterDescription",id:"characterDescription",value:e.characterDescription||"",autoComplete:"characterDescription"}),r.a.createElement(g.j,{for:"characterPurpose"},"Purpose"),r.a.createElement(g.i,{type:"text",name:"characterPurpose",id:"characterPurpose",value:e.characterPurpose||"",autoComplete:"characterPurpose"}),r.a.createElement(g.j,{for:"characterBackground"},"Background"),r.a.createElement(g.i,{type:"text",name:"characterBackground",id:"characterBackground",value:e.characterBackground||"",autoComplete:"characterBackground"}),r.a.createElement(g.j,{for:"characterNotes"},"Notes"),r.a.createElement(g.i,{type:"text",name:"characterNotes",id:"characterNotes",value:e.characterNotes||"",autoComplete:"characterNotes"}),r.a.createElement(g.j,{for:"characterAlive"},"Alive"),r.a.createElement(g.i,{type:"text",name:"characterAlive",id:"characterAlive",value:e.characterAlive||"",autoComplete:"characterAlive "})),r.a.createElement(g.h,null,r.a.createElement(g.a,{color:"success",tag:v.a,to:"/character"},"Return")))))}}]),t}(n.Component),P=Object(b.a)(T),I=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).emptyItem={characterId:"",characterName:"",characterAge:"",characterGender:"",characterRace:"",characterDescription:"",characterPurpose:"",characterBackground:"",characterNotes:"",characterAlive:""},a.state={item:a.emptyItem},a.handleChange=a.handleChange.bind(Object(x.a)(Object(x.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(x.a)(Object(x.a)(a))),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("new"===this.props.match.params.id){e.next=7;break}return e.next=3,fetch("/api/character/".concat(this.props.match.params.id));case 3:return e.next=5,e.sent.json();case 5:t=e.sent,this.setState({item:t});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.name,r=Object(D.a)({},this.state.item);r[n]=a,this.setState({item:r})}},{key:"handleSubmit",value:function(){var e=Object(s.a)(l.a.mark(function e(t){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=this.state.item,e.next=4,fetch("/api/character",{method:a.id?"PUT":"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)});case 4:this.props.history.push("/character");case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(!y.isAuthenticated())return null;var e=this.state.item,t=r.a.createElement("h2",null,e.id?"Edit Character":"Add Character");return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement(g.c,null,t,r.a.createElement(g.g,{onSubmit:this.handleSubmit},r.a.createElement(g.h,null,r.a.createElement(g.j,{for:"characterName"},"Name"),r.a.createElement(g.i,{type:"text",name:"characterName",id:"characterName",value:e.characterName||"",onChange:this.handleChange,autoComplete:"characterName"})),r.a.createElement(g.h,null,r.a.createElement(g.j,{for:"characterAge"},"Age"),r.a.createElement(g.i,{type:"text",name:"characterAge",id:"characterAge",value:e.characterAge||"",onChange:this.handleChange,autoComplete:"characterAge"})),r.a.createElement(g.h,null,r.a.createElement(g.j,{for:"characterGender"},"Gender"),r.a.createElement(g.i,{type:"text",name:"characterGender",id:"characterGender",value:e.characterGender||"",onChange:this.handleChange,autoComplete:"characterGender"})),r.a.createElement(g.h,null,r.a.createElement(g.j,{for:"characterRace"},"Race"),r.a.createElement(g.i,{type:"text",name:"characterRace",id:"characterRace",value:e.characterRace||"",onChange:this.handleChange,autoComplete:"characterRace"})),r.a.createElement(g.h,null,r.a.createElement(g.j,{for:"characterRelations"},"Relations (siblings)"),r.a.createElement(g.i,{type:"text",name:"characterRelations",id:"characterRelations",value:e.characterRelations||"",onChange:this.handleChange,autoComplete:"characterRelations"})),r.a.createElement(g.h,null,r.a.createElement(g.j,{for:"characterDescription"},"Description"),r.a.createElement(g.i,{type:"text",name:"characterDescription",id:"characterDescription",value:e.characterDescription||"",onChange:this.handleChange,autoComplete:"characterDescription"})),r.a.createElement(g.h,null,r.a.createElement(g.j,{for:"characterPurpose"},"Purpose"),r.a.createElement(g.i,{type:"text",name:"characterPurpose",id:"characterPurpose",value:e.characterPurpose||"",onChange:this.handleChange,autoComplete:"characterPurpose"})),r.a.createElement(g.h,null,r.a.createElement(g.j,{for:"characterBackground"},"Background"),r.a.createElement(g.i,{type:"text",name:"characterBackground",id:"characterBackground",value:e.characterBackground||"",onChange:this.handleChange,autoComplete:"characterBackground"})),r.a.createElement(g.h,null,r.a.createElement(g.j,{for:"characterNotes"},"Notes"),r.a.createElement(g.i,{type:"text",name:"characterNotes",id:"characterNotes",value:e.characterNotes||"",onChange:this.handleChange,autoComplete:"characterNotes"})),r.a.createElement(g.h,null,r.a.createElement(g.j,{for:"characterAlive"},"Alive"),r.a.createElement(g.i,{type:"text",name:"characterAlive",id:"characterAlive",value:e.characterAlive||"",onChange:this.handleChange,autoComplete:"characterAlive"})),r.a.createElement(g.h,null,r.a.createElement(g.a,{color:"primary",type:"submit"},"Save")," ",r.a.createElement(g.a,{color:"secondary",tag:v.a,to:"/character"},"Cancel")))))}}]),t}(n.Component),L=Object(b.a)(I),R=function(e){function t(){return Object(h.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.handleAuthentication();case 2:this.props.history.replace("/");case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("p",null,"Loading profile...")}}]),t}(n.Component),G=Object(b.a)(R);var F=function(e){var t=e.component,a=e.path,n=e.checkingSession;return r.a.createElement(w.a,{path:a,render:function(){return n?r.a.createElement("h3",{className:"text-center"},"Validating session..."):y.isAuthenticated()?r.a.createElement(t,null):(y.signIn(),r.a.createElement("div",null))}})},M=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).emptyItem={locationId:"",locationName:"",locationSize:"",locationLocation:"",locationTerrain:"",locationFactions:"",locationNotes:""},a.state={item:a.emptyItem},a.handleChange=a.handleChange.bind(Object(x.a)(Object(x.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(x.a)(Object(x.a)(a))),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("new"===this.props.match.params.id){e.next=7;break}return e.next=3,fetch("/api/location/".concat(this.props.match.params.id));case 3:return e.next=5,e.sent.json();case 5:t=e.sent,this.setState({item:t});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.name,r=Object(D.a)({},this.state.item);r[n]=a,this.setState({item:r})}},{key:"handleSubmit",value:function(){var e=Object(s.a)(l.a.mark(function e(t){var a,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(this.state),a=this.state.item,n=a.locationId,console.log(n),e.next=7,fetch("/api/location/".concat(n),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)});case 7:this.props.history.push("/location");case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(!y.isAuthenticated())return null;var e=this.state.item,t=r.a.createElement("h2",null,"View Location");return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement(g.c,null,t,r.a.createElement(g.g,{onSubmit:this.handleSubmit},r.a.createElement(g.h,null,r.a.createElement(g.j,{for:"locationName"},"Name"),r.a.createElement(g.i,{type:"text",name:"locationName",id:"locationName",value:e.locationName||"",autoComplete:"locationName"}),r.a.createElement(g.j,{for:"locationSize"},"How large is it?"),r.a.createElement(g.i,{type:"text",name:"locationSize",id:"locationSize",value:e.locationSize||"",autoComplete:"locationSize"}),r.a.createElement(g.j,{for:"locationLocation"},"Where is it Located?"),r.a.createElement(g.i,{type:"text",name:"locationLocation",id:"locationLocation",value:e.locationLocation||"",autoComplete:"locationLocation"}),r.a.createElement(g.j,{for:"locationTerrain"},"Terrain"),r.a.createElement(g.i,{type:"text",name:"locationTerrain",id:"locationTerrain",value:e.locationTerrain||"",autoComplete:"locationTerrain"}),r.a.createElement(g.j,{for:"locationFactions"},"Notable Factions?"),r.a.createElement(g.i,{type:"text",name:"locationFactions",id:"locationFactions",value:e.locationFactions||"",autoComplete:"locationFactions"}),r.a.createElement(g.j,{for:"locationNotes"},"Notes"),r.a.createElement(g.i,{type:"text",name:"locationNotes",id:"locationNotes",value:e.locationNotes||"",autoComplete:"locationNotes"})),r.a.createElement(g.h,null,r.a.createElement(g.a,{color:"success",tag:v.a,to:"/location"},"Return")))))}}]),t}(n.Component),B=Object(b.a)(M),H=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={location:[],isLoading:!0},a.remove=a.remove.bind(Object(x.a)(Object(x.a)(a))),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),fetch("/api/location").then(function(e){return e.json()}).then(function(t){return e.setState({location:t,isLoading:!1})})}},{key:"remove",value:function(){var e=Object(s.a)(l.a.mark(function e(t){var a=this;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/location/".concat(t),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(){var e=Object(z.a)(a.state.location).filter(function(e){return e.id!==t});a.setState({location:e})});case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;if(!y.isAuthenticated())return null;var t=this.state,a=t.location;if(t.isLoading)return r.a.createElement("p",null,"Loading...");var n=a.map(function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",{style:{whiteSpace:"nowrap"}},t.locationName),r.a.createElement("td",{style:{whiteSpace:"nowrap"}},t.locationSize),r.a.createElement("td",{style:{whiteSpace:"nowrap"}},t.locationLocation),r.a.createElement("td",{style:{whiteSpace:"nowrap"}},t.locationTerrain),r.a.createElement("td",{style:{whiteSpace:"wrap"}},t.locationFactions),r.a.createElement("td",null,r.a.createElement(g.b,{className:"float-right"},r.a.createElement(g.a,{size:"sm",color:"success",tag:v.a,to:"/location/"+t.locationId},"Details"),r.a.createElement(g.a,{size:"sm",color:"primary",tag:v.a,to:"/locationedit/"+t.locationId},"Edit"),r.a.createElement(g.a,{size:"sm",color:"danger",onClick:function(){return e.remove(t.locationId)}},"Delete"))))});return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement(g.c,{fluid:!0},r.a.createElement("div",{className:"float-right"},r.a.createElement(g.a,{color:"success",tag:v.a,to:"/locationedit/new"},"Add Location")),r.a.createElement("h3",null,"Location List"),r.a.createElement(g.m,{className:"mt-4"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{width:"20%"},"Name"),r.a.createElement("th",{width:"20%"},"How large is it?"),r.a.createElement("th",{width:"20%"},"Where is it located?"),r.a.createElement("th",{width:"20%"},"Terrain"),r.a.createElement("th",{width:"20%"},"Notable Factions"))),r.a.createElement("tbody",null,n))))}}]),t}(n.Component),J=Object(b.a)(H),U=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).emptyItem={locationId:"",locationName:"",locationSize:"",locationLocation:"",locationTerrain:"",locationFactions:"",locationNotes:""},a.state={item:a.emptyItem},a.handleChange=a.handleChange.bind(Object(x.a)(Object(x.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(x.a)(Object(x.a)(a))),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("new"===this.props.match.params.id){e.next=7;break}return e.next=3,fetch("/api/location/".concat(this.props.match.params.id));case 3:return e.next=5,e.sent.json();case 5:t=e.sent,this.setState({item:t});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.name,r=Object(D.a)({},this.state.item);r[n]=a,this.setState({item:r})}},{key:"handleSubmit",value:function(){var e=Object(s.a)(l.a.mark(function e(t){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=this.state.item,e.next=4,fetch("/api/location",{method:a.id?"PUT":"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)});case 4:this.props.history.push("/location");case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(!y.isAuthenticated())return null;var e=this.state.item,t=r.a.createElement("h2",null,e.id?"Edit Location":"Add Location");return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement(g.c,null,t,r.a.createElement(g.g,{onSubmit:this.handleSubmit},r.a.createElement(g.h,null,r.a.createElement(g.j,{for:"locationName"},"Name"),r.a.createElement(g.i,{type:"text",name:"locationName",id:"locationName",value:e.locationName||"",onChange:this.handleChange,autoComplete:"locationName"})),r.a.createElement(g.h,null,r.a.createElement(g.j,{for:"locationSize"},"How large is it?"),r.a.createElement(g.i,{type:"text",name:"locationSize",id:"locationSize",value:e.locationSize||"",onChange:this.handleChange,autoComplete:"locationSize"})),r.a.createElement(g.h,null,r.a.createElement(g.j,{for:"locationLocation"},"Whrere is it located?"),r.a.createElement(g.i,{type:"text",name:"locationLocation",id:"locationLocation",value:e.locationLocation||"",onChange:this.handleChange,autoComplete:"locationLocation"})),r.a.createElement(g.h,null,r.a.createElement(g.j,{for:"locationTerrain"},"Terrain"),r.a.createElement(g.i,{type:"text",name:"locationTerrain",id:"locationTerrain",value:e.locationTerrain||"",onChange:this.handleChange,autoComplete:"locationTerrain"})),r.a.createElement(g.h,null,r.a.createElement(g.j,{for:"locationFactions"},"Notable Factions"),r.a.createElement(g.i,{type:"text",name:"locationFactions",id:"locationFactions",value:e.locationFactions||"",onChange:this.handleChange,autoComplete:"locationFactions"})),r.a.createElement(g.h,null,r.a.createElement(g.j,{for:"locationNotes"},"Notes"),r.a.createElement(g.i,{type:"text",name:"locationNotes",id:"locationNotes",value:e.locationNotes||"",onChange:this.handleChange,autoComplete:"locationNotes"})),r.a.createElement(g.h,null,r.a.createElement(g.a,{color:"primary",type:"submit"},"Save")," ",r.a.createElement(g.a,{color:"secondary",tag:v.a,to:"/location"},"Cancel")))))}}]),t}(n.Component),W=Object(b.a)(U),V=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).emptyItem={organizationId:"",organizationName:"",organizationNotes:"",organizationPurpose:""},a.state={item:a.emptyItem},a.handleChange=a.handleChange.bind(Object(x.a)(Object(x.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(x.a)(Object(x.a)(a))),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("new"===this.props.match.params.id){e.next=7;break}return e.next=3,fetch("/api/organization/".concat(this.props.match.params.id));case 3:return e.next=5,e.sent.json();case 5:t=e.sent,this.setState({item:t});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.name,r=Object(D.a)({},this.state.item);r[n]=a,this.setState({item:r})}},{key:"handleSubmit",value:function(){var e=Object(s.a)(l.a.mark(function e(t){var a,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(this.state),a=this.state.item,n=a.organizationId,console.log(n),e.next=7,fetch("/api/organization/".concat(n),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)});case 7:this.props.history.push("/organization");case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(!y.isAuthenticated())return null;var e=this.state.item,t=r.a.createElement("h2",null,"View Organization");return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement(g.c,null,t,r.a.createElement(g.g,{onSubmit:this.handleSubmit},r.a.createElement(g.h,null,r.a.createElement(g.j,{for:"organizationName"},"Name"),r.a.createElement(g.i,{type:"text",name:"organizationName",id:"organizationName",value:e.organizationName||"",autoComplete:"organizationName"}),r.a.createElement(g.j,{for:"organizationNotes"},"Notes"),r.a.createElement(g.i,{type:"text",name:"organizationNotes",id:"organizationNotes",value:e.organizationNotes||"",autoComplete:"organizationNotes"}),r.a.createElement(g.j,{for:"organizationPurpose"},"Gender"),r.a.createElement(g.i,{type:"text",name:"organizationPurpose",id:"organizationPurpose",value:e.organizationPurpose||"",autoComplete:"organizationPurpose"})),r.a.createElement(g.h,null,r.a.createElement(g.a,{color:"success",tag:v.a,to:"/organization"},"Return")))))}}]),t}(n.Component),X=Object(b.a)(V),Y=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={organization:[],isLoading:!0},a.remove=a.remove.bind(Object(x.a)(Object(x.a)(a))),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),fetch("/api/organization").then(function(e){return e.json()}).then(function(t){return e.setState({organization:t,isLoading:!1})})}},{key:"remove",value:function(){var e=Object(s.a)(l.a.mark(function e(t){var a=this;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/organization/".concat(t),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(){var e=Object(z.a)(a.state.organization).filter(function(e){return e.id!==t});a.setState({organization:e})});case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;if(!y.isAuthenticated())return null;var t=this.state,a=t.organization;if(t.isLoading)return r.a.createElement("p",null,"Loading...");var n=a.map(function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",{style:{whiteSpace:"nowrap"}},t.organizationName),r.a.createElement("td",{style:{whiteSpace:"nowrap"}},t.organizationNotes),r.a.createElement("td",{style:{whiteSpace:"nowrap"}},t.organizationPurpose),r.a.createElement("td",null,r.a.createElement(g.b,{className:"float-right"},r.a.createElement(g.a,{size:"sm",color:"success",tag:v.a,to:"/organization/"+t.organizationId},"Details"),r.a.createElement(g.a,{size:"sm",color:"primary",tag:v.a,to:"/organizationedit/"+t.organizationId},"Edit"),r.a.createElement(g.a,{size:"sm",color:"danger",onClick:function(){return e.remove(t.organizationId)}},"Delete"))))});return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement(g.c,{fluid:!0},r.a.createElement("div",{className:"float-right"},r.a.createElement(g.a,{color:"success",tag:v.a,to:"/organizationedit/new"},"Add Organization")),r.a.createElement("h3",null,"Organization List"),r.a.createElement(g.m,{className:"mt-4"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{width:"15%"},"Organization"),r.a.createElement("th",{width:"20%"},"Notes"),r.a.createElement("th",{width:"20%"},"Purpose"))),r.a.createElement("tbody",null,n))))}}]),t}(n.Component),_=Object(b.a)(Y),q=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).emptyItem={organizationId:"",organizationName:"",organizationNotes:"",organizationPurpose:""},a.state={item:a.emptyItem},a.handleChange=a.handleChange.bind(Object(x.a)(Object(x.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(x.a)(Object(x.a)(a))),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("new"===this.props.match.params.id){e.next=7;break}return e.next=3,fetch("/api/organization/".concat(this.props.match.params.id));case 3:return e.next=5,e.sent.json();case 5:t=e.sent,this.setState({item:t});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.name,r=Object(D.a)({},this.state.item);r[n]=a,this.setState({item:r})}},{key:"handleSubmit",value:function(){var e=Object(s.a)(l.a.mark(function e(t){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=this.state.item,e.next=4,fetch("/api/organization",{method:a.id?"PUT":"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)});case 4:this.props.history.push("/organization");case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(!y.isAuthenticated())return null;var e=this.state.item,t=r.a.createElement("h2",null,e.id?"Edit Organization":"Add Organization");return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement(g.c,null,t,r.a.createElement(g.g,{onSubmit:this.handleSubmit},r.a.createElement(g.h,null,r.a.createElement(g.j,{for:"organizationName"},"Name"),r.a.createElement(g.i,{type:"text",name:"organizationName",id:"organizationName",value:e.organizationName||"",onChange:this.handleChange,autoComplete:"organizationName"})),r.a.createElement(g.h,null,r.a.createElement(g.j,{for:"organizationNotes"},"Notes"),r.a.createElement(g.i,{type:"text",name:"organizationNotes",id:"organizationNotes",value:e.organizationNotes||"",onChange:this.handleChange,autoComplete:"organizationNotes"})),r.a.createElement(g.h,null,r.a.createElement(g.j,{for:"organizationPurpose"},"Purpose"),r.a.createElement(g.i,{type:"text",name:"organizationPurpose",id:"organizationPurpose",value:e.organizationPurpose||"",onChange:this.handleChange,autoComplete:"organizationPurpose"})),r.a.createElement(g.h,null,r.a.createElement(g.a,{color:"primary",type:"submit"},"Save")," ",r.a.createElement(g.a,{color:"secondary",tag:v.a,to:"/organization"},"Cancel")))))}}]),t}(n.Component),$=Object(b.a)(q),K=function(e){function t(){return Object(h.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("/callback"!==this.props.location.pathname){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,y.silentAuth();case 5:this.forceUpdate(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),"login_required"!==e.t0.error&&console.log(e.t0.error);case 11:case"end":return e.stop()}},e,this,[[2,8]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(k.a,null,r.a.createElement(N.a,null,r.a.createElement(w.a,{path:"/",exact:!0,component:C}),r.a.createElement(F,{path:"/character/:id",component:P}),r.a.createElement(F,{path:"/character",component:A}),r.a.createElement(F,{path:"/characteredit/:id",component:L}),r.a.createElement(F,{path:"/location/:id",component:B}),r.a.createElement(F,{path:"/location",component:J}),r.a.createElement(F,{path:"/locationedit/:id",component:W}),r.a.createElement(F,{path:"/organization/:id",component:X}),r.a.createElement(F,{path:"/organization",component:_}),r.a.createElement(F,{path:"/organizationedit/:id",component:$}),r.a.createElement(w.a,{exact:!0,path:"/callback",component:G})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(46);i.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,2,1]]]);
//# sourceMappingURL=main.1e82f9cf.chunk.js.map