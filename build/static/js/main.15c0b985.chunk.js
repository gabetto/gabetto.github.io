(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(39)},27:function(e,t,a){},29:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},30:function(e,t,a){},35:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(12),c=a.n(l),o=(a(27),a(4)),i=a(5),s=a(8),m=a(6),u=a(7),d=(a(29),a(30),a(11)),E=a(3),p=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).toggle=function(){a.setState({isOpen:!a.state.isOpen})},a.toggle=a.toggle.bind(Object(d.a)(Object(d.a)(a))),a.state={isOpen:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(E.i,{color:"dark",dark:!0,expand:"md"},r.a.createElement(E.c,null,r.a.createElement(E.j,{href:"/"},r.a.createElement("span",null,"Minha Git Page")),r.a.createElement(E.k,{onClick:this.toggle}),r.a.createElement(E.b,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(E.f,{className:"ml-auto",navbar:!0},r.a.createElement(E.g,null,r.a.createElement(E.h,{href:"/profile/"},"Perfil"))))))}}]),t}(n.Component),b=a(2),f=a.n(b),h=a(9),g=a(10),v=a.n(g);function j(e){var t=parseInt(e/12),a=e>12?e%12:e;return(t>0?t+" ano"+(t>1?"s":"")+" and ":"")+(a>0?a+" mes"+(a>1?"es":""):"")}var O=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(E.c,null,r.a.createElement(E.m,null,r.a.createElement(E.a,null,h.experiences.map(function(e,t){v.a.locale("pt-BR");var a=e.roles.reduce(function(e,t){var a=v()(t.startDate),n=v()(t.currentJob?new Date:new Date(t.endDate)),r=v.a.duration(n.diff(a));return Number(e)+Number(r.asMonths().toPrecision(1))},0);return r.a.createElement("div",{key:t},r.a.createElement(E.e,null,r.a.createElement(E.e,{left:!0,top:!0,href:e.url},r.a.createElement(E.e,{object:!0,src:e.logo,alt:e.companyName,className:"other-images"})),r.a.createElement(E.e,{body:!0},r.a.createElement(E.e,{heading:!0},r.a.createElement("a",{href:e.url},e.companyName),r.a.createElement("span",{className:"jobTotalDuration"}," - ",j(a))),e.roles.map(function(e,t){var a=v()(e.startDate);console.log(a);var n=v()(e.currentJob?new Date:new Date(e.endDate));console.log(n);var l=Number(v.a.duration(n.diff(a)).asMonths().toPrecision(1));return console.log(l),r.a.createElement("div",{key:t},r.a.createElement("h5",null,e.title),r.a.createElement("span",{className:"jobDuration"}," ",a.format("MMM YYYY")," - ",e.currentJob?"Present":n.format("MMM YYYY")," (",j(l),")"),r.a.createElement("span",{className:"jobLocation"}," - ",e.location),r.a.createElement("p",{className:"jobDescription"}," ",e.description))}))))}))))}}]),t}(n.Component),w=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(E.c,null,r.a.createElement(E.m,null,r.a.createElement(E.a,null,h.studies.map(function(e,t){return r.a.createElement(E.e,{key:t},r.a.createElement(E.e,{left:!0,top:!0,href:e.url},r.a.createElement(E.e,{object:!0,src:e.logo,alt:e.institute,className:"other-images"})),r.a.createElement(E.e,{body:!0},r.a.createElement(E.e,{heading:!0},r.a.createElement("a",{href:e.url},e.institute)),[{key:"Titulo",value:e.title},{key:"Situa\xe7\xe3o",value:e.currentCourse?"Cursando":"Concluido"},{key:e.currentCourse?"Previs\xe3o de conclus\xe3o":"Ano de conclus\xe3o",value:e.graduationYear},{key:"Dura\xe7\xe3o",value:e.durationInYears+" ano(s)"}].map(function(e,t){return r.a.createElement("div",{className:"text-center"},r.a.createElement(E.m,null,r.a.createElement(E.a,{className:"formLabel"},r.a.createElement("b",null,e.key),": ",e.value)))})))}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(E.m,null,r.a.createElement(E.a,null,h.certifications.map(function(e,t){var a=e.verificationLink?r.a.createElement(E.m,null,r.a.createElement(E.a,null,r.a.createElement("a",{className:"certificateLink",href:e.verificationLink},"visualizar certificado"))):"";return r.a.createElement(E.e,{key:t},r.a.createElement(E.e,{left:!0,top:!0,href:e.url},r.a.createElement(E.e,{object:!0,src:e.logo,alt:e.title})),r.a.createElement(E.e,{body:!0},r.a.createElement(E.e,{heading:!0},r.a.createElement("a",{href:e.url},e.title)),r.a.createElement(E.m,null,r.a.createElement(E.a,null,v()(e.issueDate).format("MMM YYYY")," -"," ",e.expiryDate?v()(e.expiryDate).format("MMM YYYY"):"Present")),r.a.createElement(E.m,null,r.a.createElement(E.a,null,e.issuer)),a))}))))}}]),t}(n.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(E.m,null,h.skills.map(function(e,t){return r.a.createElement(E.a,{Key:t,sm:12,md:4,xl:4},r.a.createElement("div",{className:"text-center"},e.title),r.a.createElement(E.l,{color:"success",striped:!0,animated:!0,value:e.grade},e.grade,"%"))}))}}]),t}(n.Component),k=(a(35),a(13)),N=a(14),Y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).toggle=a.toggle.bind(Object(d.a)(Object(d.a)(a))),a.state={activeTab:"1"},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"toggle",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(E.d,null,r.a.createElement(E.c,null,r.a.createElement(E.m,null,r.a.createElement(E.a,null,r.a.createElement("div",{class:"view overlay "},r.a.createElement("img",{src:"https://avatars3.githubusercontent.com/u/25808912?s=460&v=4",class:"img-fluid  profile-image",alt:""}),r.a.createElement("a",{href:"#"},r.a.createElement("div",{class:"mask rgba-white-slight"})))),r.a.createElement(E.a,null,r.a.createElement("h3",{className:"display-4"},h.title),r.a.createElement("h4",{className:"display-5"},h.age," anos"),r.a.createElement("p",{className:"lead"},h.summary),r.a.createElement("p",null,h.contact," - ",h.email),r.a.createElement("p",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/gabriel-beto-rocha-28b515123/"},r.a.createElement(k.a,{icon:N.d,size:"2x",color:"#343a40"})," "),r.a.createElement("a",{href:"https://github.com/gabetto"},r.a.createElement(k.a,{icon:N.b,size:"2x",color:"#343a40"})," "),r.a.createElement("a",{href:"https://www.instagram.com/gabriellbeto/?hl=pt-br"},r.a.createElement(k.a,{icon:N.c,size:"2x",color:"#343a40"})," "),r.a.createElement("a",{href:"https://www.facebook.com/gabriel.beto.3"},r.a.createElement(k.a,{icon:N.a,size:"2x",color:"#343a40"})," ")))))),r.a.createElement(E.c,{className:"pt-0 pb-5 mb-5"},r.a.createElement(E.m,null,r.a.createElement(E.a,null,r.a.createElement("div",{className:"text-center mt-5"},r.a.createElement("h4",{className:"display-5"},"Compet\xeancias")))),r.a.createElement(y,null)),r.a.createElement(E.c,null,r.a.createElement(E.f,{tabs:!0},r.a.createElement(E.g,null,r.a.createElement(E.h,{className:f()({active:"1"===this.state.activeTab}),onClick:function(){e.toggle("1")}},"Experi\xeancias")),r.a.createElement(E.g,null,r.a.createElement(E.h,{className:f()({active:"2"===this.state.activeTab}),onClick:function(){e.toggle("2")}},"Forma\xe7\xe3o"))),r.a.createElement(E.n,{activeTab:this.state.activeTab},r.a.createElement(E.o,{tabId:"1",className:"pt-5"},r.a.createElement(O,null)),r.a.createElement(E.o,{tabId:"2",className:"pt-5"},r.a.createElement(w,null)))))}}]),t}(n.Component),x=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("hr",null),r.a.createElement(E.c,null,r.a.createElement("a",{href:"https://www.linkedin.com/in/gabriel-beto-rocha-28b515123/"},r.a.createElement(k.a,{icon:N.d})),r.a.createElement("a",{href:"https://github.com/gabetto"},r.a.createElement(k.a,{icon:N.b}))))}}]),t}(n.Component),C=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(Y,null),r.a.createElement(x,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(37);c.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e){e.exports={title:"Gabriel Beto Rocha",age:"20",summary:"Estudante de Sistemas de informa\xe7\xe3o, criativo para resolver problemas, desenvolvedor web apaixonado por FrontEnd e fazer telinhas bonitas.",contact:"(32) 99145-9856",email:"gabrielbeto83@gmail.com",studies:[{institute:"Instituto Federal do Sudeste de Minas Gerais, Campus Juiz de Fora",logo:"https://www.ifsudestemg.edu.br/sites/all/themes/ifet/logo.png",url:"http://www.jf.ifsudestemg.edu.br/",title:"Bacharelado em Sistemas de Informa\xe7\xe3o",durationInYears:"4",currentCourse:!0,graduationYear:2020}],certifications:[],experiences:[{companyName:"AuE Software",logo:"http://auesoftware.com/Figuras/1-000.jpg",url:"http://auesoftware.com/capa.aspx",roles:[{title:"Estagi\xe1rio de desenvolvimento .Net",description:"Respons\xe1vel pela manuten\xe7\xe3o e desenvolvimento de sistemas web e sites da empresa na plataforma .Net, presta\xe7\xe3o de suporte \xe0 clientes da empresa nos programas comercializados pela mesma, al\xe9m de manuten\xe7\xe3o e suporte de m\xe1quinas da empresa.",startDate:"07-07-2017",endDate:"07-07-2018",location:"Juiz de Fora, Brasil"}]}],skills:[{title:"HTML",grade:100},{title:"CSS",grade:90},{title:"JavaScript",grade:60},{title:"Bootstrap",grade:100},{title:"WebDesign",grade:70},{title:"Asp .Net",grade:60},{title:"Java",grade:50},{title:"VisualBasic .Net",grade:50},{title:"C#",grade:40}]}}},[[22,2,1]]]);
//# sourceMappingURL=main.15c0b985.chunk.js.map