(this.webpackJsonpportf=this.webpackJsonpportf||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),o=c(16),i=c.n(o),s=(c(23),c(24),c(6)),a=function(){return Object(n.jsxs)("header",{children:[Object(n.jsx)(s.b,{to:"/",children:Object(n.jsx)("h3",{children:"</>"})}),Object(n.jsxs)("nav",{children:[Object(n.jsx)(s.b,{to:"/",children:"Portfolio"}),Object(n.jsx)(s.b,{to:"/about",children:"About Me"}),Object(n.jsx)("a",{href:"https://docs.google.com/viewer?url=raw.githubusercontent.com/RodrigoJPT/portfolio/af73ff21dffee4927ed73a561b49c293ebf37967/public/media/Resume.pdf",target:"_blank",rel:"noreferrer",children:"Resume"})]})]})},l=c(2),j=c(10),d=function(e){var t=e.project,c=e.id,r=Object(l.e)();return Object(n.jsxs)("button",{className:"project-card",onClick:function(){r.push("/projects/".concat(c))},children:[Object(n.jsx)("div",{className:"project-img",style:{backgroundImage:"url(".concat(t.image,")")}}),Object(n.jsxs)("div",{className:"project-info",children:[Object(n.jsx)("h2",{children:t.name}),Object(n.jsx)("ul",{})]})]})},b=function(){var e=Object(r.useState)(null),t=Object(j.a)(e,2),c=t[0],o=t[1];return Object(r.useEffect)((function(){fetch("https://rodrigojpt.github.io/projects.json").then((function(e){return e.json()})).then((function(e){return o(e)})).catch(console.err)}),[]),c?Object(n.jsxs)("div",{className:"portfolio",children:[Object(n.jsxs)("p",{className:"description",children:["Hello. My name is"," ",Object(n.jsx)("span",{style:{color:"#44724a",fontWeight:"700"},children:"Rodrigo Pereira"}),", and I am a"," ",Object(n.jsx)("span",{style:{color:"#44724a",fontWeight:"700"},children:"web developer"}),".",Object(n.jsx)("br",{}),"You can ",Object(n.jsx)(s.b,{to:"/about",children:"click here"})," to learn more about me, or view some of my work below."]}),Object(n.jsx)("div",{className:"project-gallery",children:c.map((function(e,t){return Object(n.jsx)(d,{project:e,id:t},t)}))})]}):Object(n.jsx)("p",{children:"Loading..."})},h=function(){return Object(n.jsx)("div",{className:"about",children:Object(n.jsxs)("div",{className:"about-container",children:[Object(n.jsx)("img",{src:"https://rodrigojpt.github.io/media/myself.jpeg",alt:"Rodrigo outdoors",className:"profile-pic"}),Object(n.jsxs)("p",{className:"about-description",children:["Hello. My name is"," ",Object(n.jsx)("span",{style:{color:"#44724a",fontWeight:"700"},children:"Rodrigo Pereira"}),", and I am a"," ",Object(n.jsx)("span",{style:{color:"#44724a",fontWeight:"700"},children:"web developer"})," ","based in"," ",Object(n.jsx)("span",{style:{color:"#44724a",fontWeight:"700"},children:"Washington, DC."})," ","I specialize in creating"," ",Object(n.jsx)("span",{style:{color:"#44724a",fontWeight:"700"},children:"web apps"})," ","with"," ",Object(n.jsx)("span",{style:{color:"#44724a",fontWeight:"700"},children:"Javascript"})," ","and the tools built on top of it, but I can bring my skills to just about any development environment. Outside of being a developer, my passions include"," ",Object(n.jsx)("span",{style:{color:"#44724a",fontWeight:"700"},children:"combat sports"})," ","(particularly,"," ",Object(n.jsx)("span",{style:{color:"#44724a",fontWeight:"700"},children:"submission grappling/jiu jitsu"}),"), filming and editing ",Object(n.jsx)("span",{style:{color:"#44724a",fontWeight:"700"},children:"videos"}),", ","and playing"," ",Object(n.jsx)("span",{style:{color:"#44724a",fontWeight:"700"},children:"music!"})," I look forward to getting to know you!"]})]})})},u=function(e){var t=e.id,c=Object(r.useState)(null),o=Object(j.a)(c,2),i=o[0],a=o[1];return Object(r.useEffect)((function(){fetch("https://rodrigojpt.github.io/portfolio/projects.json").then((function(e){return e.json()})).then((function(e){return a(e[t])})).catch(console.err)}),[]),i?Object(n.jsxs)("div",{className:"details",children:[Object(n.jsx)(s.b,{to:"/",children:"< Back to Portfolio"}),Object(n.jsx)("img",{src:i.image,alt:""}),Object(n.jsx)("h1",{className:"details-title",children:i.name}),Object(n.jsx)("div",{className:"project-info",children:Object(n.jsx)("ul",{children:i.tech.map((function(e,t){return Object(n.jsx)("li",{children:e},t)}))})}),Object(n.jsx)("p",{className:"details-description",children:i.description}),Object(n.jsxs)("div",{className:"details-links",children:[Object(n.jsx)("a",{href:i.link,target:"_blank",rel:"noreferrer",children:"Visit Site"}),i.repo?Object(n.jsx)("a",{href:i.repo,target:"_blank",rel:"noreferrer",children:"View Code"}):null,i.video?Object(n.jsx)("a",{href:i.video,target:"_blank",rel:"noreferrer",children:"Demo Video"}):null]})]}):Object(n.jsx)("p",{children:"Loading..."})},p=function(){return Object(n.jsxs)("div",{className:"icons",children:[Object(n.jsx)("a",{href:"mailto:rodrigojpereirat@gmail.com",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("i",{className:"fas fa-envelope-square"})}),Object(n.jsx)("a",{href:"https://github.com/RodrigoJPT",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("i",{className:"fab fa-github-square"})}),Object(n.jsx)("a",{href:"https://www.linkedin.com/in/rodrigojpt/",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("i",{className:"fab fa-linkedin"})})]})};var f=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(a,{}),Object(n.jsx)(l.a,{path:"/",exact:!0,component:b}),Object(n.jsx)(l.a,{path:"/about",exact:!0,component:h}),Object(n.jsx)(l.a,{path:"/projects/:id",render:function(e){return Object(n.jsx)(u,{id:e.match.params.id})}}),Object(n.jsx)(p,{})]})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),o(e),i(e)}))};i.a.render(Object(n.jsx)(s.a,{children:Object(n.jsx)(f,{})}),document.getElementById("root")),O()}},[[30,1,2]]]);
//# sourceMappingURL=main.43c4a73b.chunk.js.map