(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,a,t){},27:function(e,a,t){e.exports=t.p+"static/media/homeImage.d65a8552.png"},32:function(e,a,t){e.exports=t(47)},37:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var r=t(1),c=t.n(r),n=t(15),l=t.n(n),h=(t(37),t(9)),i=t(10),o=t(12),m=t(11),s=t(13),u=(t(26),t(27)),p=t.n(u),d=t(4),E=t(3),v=t(48),f=function(e){function a(e){var t;return Object(h.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={isOpen:!1},t.toggle=t.toggle.bind(Object(d.a)(Object(d.a)(t))),t}return Object(s.a)(a,e),Object(i.a)(a,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return c.a.createElement(E.o,{color:"dark",dark:!0,expand:"md"},c.a.createElement(E.p,null),c.a.createElement(E.s,{nav:!0,inNavbar:!0},c.a.createElement(E.g,{nav:!0,caret:!0},"Menu"),c.a.createElement(E.f,{left:!0},c.a.createElement(E.e,{tag:v.a,to:"/"},"Home"),c.a.createElement(E.e,{divider:!0}),c.a.createElement(E.e,{tag:v.a,to:"/character"},"Manage Characters"))),c.a.createElement(E.q,{onClick:this.toggle}),c.a.createElement(E.c,{isOpen:this.state.isOpen,navbar:!0},c.a.createElement(E.l,{className:"ml-auto",navbar:!0},c.a.createElement(E.m,null,c.a.createElement(E.n,{href:"https://github.com/stuvwxyz/character-ui"},"GitHub UI")),c.a.createElement(E.m,null,c.a.createElement(E.n,{href:"https://github.com/stuvwxyz/character-api"},"GitHub API")))))}}]),a}(r.Component),g=function(e){function a(){return Object(h.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(f,null),c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("img",{src:p.a,className:"App-logo",alt:"homeImage"}),c.a.createElement("p",null,"Begin your adventure"),c.a.createElement(E.d,{fluid:!0},c.a.createElement(E.a,{color:"link"},c.a.createElement(v.a,{to:"/character"},"Manage Characters"))))))}}]),a}(r.Component),b=t(50),j=t(52),y=t(49),k=t(8),C=t.n(k),O=t(31),w=t(14),A=function(e){function a(e){var t;return Object(h.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={character:[],isLoading:!0},t.remove=t.remove.bind(Object(d.a)(Object(d.a)(t))),t}return Object(s.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),fetch("/api/character").then(function(e){return e.json()}).then(function(a){return e.setState({character:a,isLoading:!1})})}},{key:"remove",value:function(){var e=Object(w.a)(C.a.mark(function e(a){var t=this;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/character/".concat(a),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(){var e=Object(O.a)(t.state.character).filter(function(e){return e.id!==a});t.setState({character:e})});case 2:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.character;if(a.isLoading)return c.a.createElement("p",null,"Loading...");var r=t.map(function(a){return c.a.createElement("tr",{key:a.id},c.a.createElement("td",{style:{whiteSpace:"nowrap"}},a.characterName),c.a.createElement("td",{style:{whiteSpace:"nowrap"}},a.characterAge),c.a.createElement("td",{style:{whiteSpace:"nowrap"}},a.characterGender),c.a.createElement("td",{style:{whiteSpace:"nowrap"}},a.characterRace),c.a.createElement("td",{style:{whiteSpace:"wrap"}},a.characterDescription),c.a.createElement("td",{style:{whiteSpace:"nowrap"}},a.characterAlive),c.a.createElement("td",null,c.a.createElement(E.b,{className:"float-right"},c.a.createElement(E.a,{size:"sm",color:"success",tag:v.a,to:"/character/"+a.characterId},"Details"),c.a.createElement(E.a,{size:"sm",color:"primary",tag:v.a,to:"/characteredit/"+a.characterId},"Edit"),c.a.createElement(E.a,{size:"sm",color:"danger",onClick:function(){return e.remove(a.characterId)}},"Delete"))))});return c.a.createElement("div",null,c.a.createElement(f,null),c.a.createElement(E.d,{fluid:!0},c.a.createElement("div",{className:"float-right"},c.a.createElement(E.a,{color:"success",tag:v.a,to:"/characteredit/new"},"Add Character")),c.a.createElement("h3",null,"Character List"),c.a.createElement(E.r,{className:"mt-4"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{width:"15%"},"Name"),c.a.createElement("th",{width:"20%"},"Age"),c.a.createElement("th",{width:"20%"},"Gender"),c.a.createElement("th",{width:"20%"},"Race"),c.a.createElement("th",{width:"20%"},"Physical Description"),c.a.createElement("th",{width:"20%"},"Alive"),c.a.createElement("th",{width:"10%"},"Actions"))),c.a.createElement("tbody",null,r))))}}]),a}(r.Component),N=t(20),x=t(51),S=function(e){function a(e){var t;return Object(h.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).emptyItem={characterId:"",characterName:"",characterAge:"",characterGender:"",characterRace:"",characterDescription:"",characterPurpose:"",characterBackground:"",characterNotes:"",characterAlive:""},t.state={item:t.emptyItem},t.handleChange=t.handleChange.bind(Object(d.a)(Object(d.a)(t))),t.handleSubmit=t.handleSubmit.bind(Object(d.a)(Object(d.a)(t))),t}return Object(s.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(w.a)(C.a.mark(function e(){var a;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("new"===this.props.match.params.id){e.next=7;break}return e.next=3,fetch("/api/character/".concat(this.props.match.params.id));case 3:return e.next=5,e.sent.json();case 5:a=e.sent,this.setState({item:a});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){var a=e.target,t=a.value,r=a.name,c=Object(N.a)({},this.state.item);c[r]=t,this.setState({item:c})}},{key:"handleSubmit",value:function(){var e=Object(w.a)(C.a.mark(function e(a){var t,r;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),console.log(this.state),t=this.state.item,r=t.characterId,console.log(r),e.next=7,fetch("/api/character/".concat(r),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 7:this.props.history.push("/character");case 8:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.item,a=c.a.createElement("h2",null,"View Character");return c.a.createElement("div",null,c.a.createElement(f,null),c.a.createElement(E.d,null,a,c.a.createElement(E.h,{onSubmit:this.handleSubmit},c.a.createElement(E.i,null,c.a.createElement(E.k,{for:"characterName"},"characterName"),c.a.createElement(E.j,{type:"text",name:"characterName",id:"characterName",value:e.characterName||"",autoComplete:"characterName"}),c.a.createElement(E.k,{for:"characterAge"},"characterAge"),c.a.createElement(E.j,{type:"text",name:"characterAge",id:"characterAge",value:e.characterAge||"",autoComplete:"characterAge"}),c.a.createElement(E.k,{for:"characterGender"},"characterGender"),c.a.createElement(E.j,{type:"text",name:"characterGender",id:"characterGender",value:e.characterGender||"",autoComplete:"characterGender"}),c.a.createElement(E.k,{for:"characterRace"},"characterRace"),c.a.createElement(E.j,{type:"text",name:"characterRace",id:"characterRace",value:e.characterRace||"",autoComplete:"characterRace"}),c.a.createElement(E.k,{for:"characterDescription"},"characterDescription"),c.a.createElement(E.j,{type:"text",name:"characterDescription",id:"characterDescription",value:e.characterDescription||"",autoComplete:"characterDescription"}),c.a.createElement(E.k,{for:"characterPurpose"},"characterPurpose"),c.a.createElement(E.j,{type:"text",name:"characterPurpose",id:"characterPurpose",value:e.characterPurpose||"",autoComplete:"characterPurpose"}),c.a.createElement(E.k,{for:"characterBackground"},"characterBackground"),c.a.createElement(E.j,{type:"text",name:"characterBackground",id:"characterBackground",value:e.characterBackground||"",autoComplete:"characterBackground"}),c.a.createElement(E.k,{for:"characterNotes"},"characterNotes"),c.a.createElement(E.j,{type:"text",name:"characterNotes",id:"characterNotes",value:e.characterNotes||"",autoComplete:"characterNotes"}),c.a.createElement(E.k,{for:"characterAlive"},"characterAlive"),c.a.createElement(E.j,{type:"text",name:"characterAlive",id:"characterAlive",value:e.characterAlive||"",autoComplete:"characterAlive "})),c.a.createElement(E.i,null,c.a.createElement(E.a,{color:"success",tag:v.a,to:"/character"},"Return")))))}}]),a}(r.Component),D=Object(x.a)(S),G=function(e){function a(e){var t;return Object(h.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).emptyItem={characterId:"",characterName:"",characterAge:"",characterGender:"",characterRace:"",characterDescription:"",characterPurpose:"",characterBackground:"",characterNotes:"",characterAlive:""},t.state={item:t.emptyItem},t.handleChange=t.handleChange.bind(Object(d.a)(Object(d.a)(t))),t.handleSubmit=t.handleSubmit.bind(Object(d.a)(Object(d.a)(t))),t}return Object(s.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(w.a)(C.a.mark(function e(){var a;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("new"===this.props.match.params.id){e.next=7;break}return e.next=3,fetch("/api/character/".concat(this.props.match.params.id));case 3:return e.next=5,e.sent.json();case 5:a=e.sent,this.setState({item:a});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){var a=e.target,t=a.value,r=a.name,c=Object(N.a)({},this.state.item);c[r]=t,this.setState({item:c})}},{key:"handleSubmit",value:function(){var e=Object(w.a)(C.a.mark(function e(a){var t;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),t=this.state.item,e.next=4,fetch("/api/character",{method:t.id?"PUT":"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 4:this.props.history.push("/character");case 5:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.item,a=c.a.createElement("h2",null,e.id?"Edit Character":"Add Character");return c.a.createElement("div",null,c.a.createElement(f,null),c.a.createElement(E.d,null,a,c.a.createElement(E.h,{onSubmit:this.handleSubmit},c.a.createElement(E.i,null,c.a.createElement(E.k,{for:"characterName"},"characterName"),c.a.createElement(E.j,{type:"text",name:"characterName",id:"characterName",value:e.characterName||"",onChange:this.handleChange,autoComplete:"characterName"})),c.a.createElement(E.i,null,c.a.createElement(E.k,{for:"characterAge"},"characterAge"),c.a.createElement(E.j,{type:"text",name:"characterAge",id:"characterAge",value:e.characterAge||"",onChange:this.handleChange,autoComplete:"characterAge"})),c.a.createElement(E.i,null,c.a.createElement(E.k,{for:"characterGender"},"characterGender"),c.a.createElement(E.j,{type:"text",name:"characterGender",id:"characterGender",value:e.characterGender||"",onChange:this.handleChange,autoComplete:"characterGender"})),c.a.createElement(E.i,null,c.a.createElement(E.k,{for:"characterRace"},"characterRace"),c.a.createElement(E.j,{type:"text",name:"characterRace",id:"characterRace",value:e.characterRace||"",onChange:this.handleChange,autoComplete:"characterRace"})),c.a.createElement(E.i,null,c.a.createElement(E.k,{for:"characterDescription"},"characterDescription"),c.a.createElement(E.j,{type:"text",name:"characterDescription",id:"characterDescription",value:e.characterDescription||"",onChange:this.handleChange,autoComplete:"characterDescription"})),c.a.createElement(E.i,null,c.a.createElement(E.k,{for:"characterPurpose"},"characterPurpose"),c.a.createElement(E.j,{type:"text",name:"characterPurpose",id:"characterPurpose",value:e.characterPurpose||"",onChange:this.handleChange,autoComplete:"characterPurpose"})),c.a.createElement(E.i,null,c.a.createElement(E.k,{for:"characterBackground"},"characterBackground"),c.a.createElement(E.j,{type:"text",name:"characterBackground",id:"characterBackground",value:e.characterBackground||"",onChange:this.handleChange,autoComplete:"characterBackground"})),c.a.createElement(E.i,null,c.a.createElement(E.k,{for:"characterNotes"},"characterNotes"),c.a.createElement(E.j,{type:"text",name:"characterNotes",id:"characterNotes",value:e.characterNotes||"",onChange:this.handleChange,autoComplete:"characterNotes"})),c.a.createElement(E.i,null,c.a.createElement(E.k,{for:"characterAlive"},"characterAlive"),c.a.createElement(E.j,{type:"text",name:"characterAlive",id:"characterAlive",value:e.characterAlive||"",onChange:this.handleChange,autoComplete:"characterAlive"})),c.a.createElement(E.i,null,c.a.createElement(E.a,{color:"primary",type:"submit"},"Save")," ",c.a.createElement(E.a,{color:"secondary",tag:v.a,to:"/character"},"Cancel")))))}}]),a}(r.Component),P=Object(x.a)(G),B=function(e){function a(){return Object(h.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement(b.a,null,c.a.createElement(j.a,null,c.a.createElement(y.a,{path:"/",exact:!0,component:g}),c.a.createElement(y.a,{path:"/character",exact:!0,component:A}),c.a.createElement(y.a,{path:"/character/:id",component:D}),c.a.createElement(y.a,{path:"/characteredit/:id",component:P})))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(45);l.a.render(c.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,2,1]]]);
//# sourceMappingURL=main.09e5a7e5.chunk.js.map