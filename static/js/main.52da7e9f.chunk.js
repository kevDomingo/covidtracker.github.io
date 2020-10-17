(this.webpackJsonpcovidtracker=this.webpackJsonpcovidtracker||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__3g3tZ",card:"Cards_card__2OC1p",infected:"Cards_infected__nuczA",recovered:"Cards_recovered__19AVV",deaths:"Cards_deaths__2Z-U0"}},207:function(e,t,a){e.exports=a.p+"static/media/covidtrackerImage.d7265326.png"},208:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(70),o=a.n(c),u=a(5),s=a.n(u),i=a(10),l=a(71),d=a(72),p=a(81),m=a(80),f=a(226),v=a(227),h=a(230),b=a(228),E=a(30),g=a.n(E),y=a(31),C=a.n(y),x=a(13),_=a.n(x),O=function(e){var t=e.data,a=t.confirmed,r=t.recovered,c=t.deaths,o=t.lastUpdate;return a?n.a.createElement("div",{className:_.a.container},n.a.createElement(f.a,{gutterBottom:!0,variant:"h4",component:"h2"},"Covid-19 Tracker"),n.a.createElement(v.a,{container:!0,spacing:3,justify:"center"},n.a.createElement(v.a,{item:!0,component:h.a,xs:12,md:3,className:C()(_.a.card,_.a.infected)},n.a.createElement(b.a,null,n.a.createElement(f.a,{color:"textSecondary",gutterBottom:!0},"Infected"),n.a.createElement(f.a,{variant:"h5"},n.a.createElement(g.a,{start:0,end:a.value,duration:2.5,separator:","})),n.a.createElement(f.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement(f.a,{variant:"body2"},"Number of active cases of COVID-19"))),n.a.createElement(v.a,{item:!0,component:h.a,xs:12,md:3,className:C()(_.a.card,_.a.recovered)},n.a.createElement(b.a,null,n.a.createElement(f.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),n.a.createElement(f.a,{variant:"h5"},n.a.createElement(g.a,{start:0,end:r.value,duration:2.5,separator:","})),n.a.createElement(f.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement(f.a,{variant:"body2"},"Number of recoveries from COVID-19"))),n.a.createElement(v.a,{item:!0,component:h.a,xs:12,md:3,className:C()(_.a.card,_.a.deaths)},n.a.createElement(b.a,null,n.a.createElement(f.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),n.a.createElement(f.a,{variant:"h5"},n.a.createElement(g.a,{start:0,end:c.value,duration:2.5,separator:","})),n.a.createElement(f.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement(f.a,{variant:"body2"},"Number of deaths due to COVID-19"))))):"Loading... "},j=a(43),k=a(29),w=a(32),D=a.n(w),S="https://covid19.mathdro.id/api",N=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,r,n,c,o,u,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=S,t&&(a="".concat(S,"/countries/").concat(t)),e.prev=2,e.next=5,D.a.get(a);case 5:return r=e.sent,n=r.data,c=n.confirmed,o=n.recovered,u=n.deaths,i=n.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:i});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("https://api.covidtracking.com/v1/us/daily.json");case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){return{confirmed:e.positive,recovered:e.recovered,deaths:e.death,date:e.dateChecked}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("".concat(S,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),B=a(44),A=a(77),U=a.n(A),L=function(e){var t,a=e.data,c=a.confirmed,o=a.recovered,u=a.deaths,l=e.country,d=Object(r.useState)([]),p=Object(k.a)(d,2),m=p[0],f=p[1];Object(r.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=f,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var v=m.length?n.a.createElement(B.Line,{data:{labels:m.map((function(e){var t=e.date;return new Date(t).toLocaleDateString()})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},(t={data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red"},Object(j.a)(t,"borderColor","rgba(255, 0, 0, 0.5)"),Object(j.a)(t,"fill",!0),t),{data:m.map((function(e){return e.recovered})),label:"Recovered",borderColor:"green",backgroundColor:"rgba(0, 255, 0, 0.5)",fill:!0}]}}):null,h=c?n.a.createElement(B.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[c.value,o.value,u.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(l)}}}):null;return n.a.createElement("div",{className:U.a.container},l?h:v)},R=a(231),J=a(229),M=a(78),P=a.n(M),Z=function(e){var t=e.handleCountryChange,a=Object(r.useState)([]),c=Object(k.a)(a,2),o=c[0],u=c[1];return Object(r.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,V();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),n.a.createElement(R.a,{className:P.a.formControl},n.a.createElement(J.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},n.a.createElement("option",{value:""},"United States"),o.map((function(e,t){return n.a.createElement("option",{key:t,value:e},e)}))))},z=a(79),T=a.n(z),q=(a(207),function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(s.a.mark((function t(a){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(a);case 2:r=t.sent,e.setState({data:r,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return n.a.createElement("div",{className:T.a.container},n.a.createElement(O,{data:t}),n.a.createElement(Z,{handleCountryChange:this.handleCountryChange}),n.a.createElement(L,{data:t,country:a}))}}]),a}(n.a.Component));o.a.render(n.a.createElement(q,null),document.getElementById("root"))},77:function(e,t,a){e.exports={container:"Chart_container__2eVut"}},78:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__1rO4I"}},79:function(e,t,a){e.exports={container:"App_container__3usai",image:"App_image__1EEsM"}},84:function(e,t,a){e.exports=a(208)}},[[84,1,2]]]);
//# sourceMappingURL=main.52da7e9f.chunk.js.map