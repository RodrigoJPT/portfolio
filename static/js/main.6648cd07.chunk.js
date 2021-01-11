(this.webpackJsonpportf=this.webpackJsonpportf||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),i=n(16),s=n.n(i),a=(n(23),n(24),n(6)),o=function(){return Object(c.jsxs)("header",{children:[Object(c.jsx)(a.b,{to:"/",children:Object(c.jsx)("h3",{children:"</>"})}),Object(c.jsxs)("nav",{children:[Object(c.jsx)(a.b,{to:"/",children:"Portfolio"}),Object(c.jsx)(a.b,{to:"/about",children:"About Me"}),Object(c.jsx)("a",{href:"https://docs.google.com/viewer?url=https://github.com/RodrigoJPT/rodrigojpt.github.io/raw/main/public/media/Resume.pdf",target:"_blank",rel:"noreferrer",children:"Resume"})]})]})},j=n(2),l=n(9),d=function(e){var t=e.project,n=Object(r.useState)(null),i=Object(l.a)(n,2),s=i[0],a=i[1];return Object(r.useEffect)((function(){fetch("/media/icons.json").then((function(e){return e.json()})).then((function(e){return t.tech.map((function(t){return e[t]}))})).then((function(e){return a(e)}))}),[]),s?Object(c.jsx)("div",{className:"tech-used",children:s.map((function(e,t){return Object(c.jsx)("img",{src:e},t)}))}):null},b=function(e){var t=e.project,n=e.id,r=Object(j.e)();return Object(c.jsxs)("button",{className:"project-card",onClick:function(){r.push("/projects/".concat(n))},children:[Object(c.jsx)("div",{className:"project-img",style:{backgroundImage:"url(".concat(t.image,")")}}),Object(c.jsxs)("div",{className:"project-info",children:[Object(c.jsx)("h2",{children:t.name}),Object(c.jsx)("div",{children:Object(c.jsx)(d,{project:t})})]})]})},u=function(){var e=Object(r.useState)(null),t=Object(l.a)(e,2),n=t[0],i=t[1];return Object(r.useEffect)((function(){fetch("/projects.json").then((function(e){return e.json()})).then((function(e){return i(e)})).catch(console.err)}),[]),n?Object(c.jsxs)("div",{className:"portfolio",children:[Object(c.jsxs)("p",{className:"description",children:["Hello. My name is ",Object(c.jsx)("b",{children:"Rodrigo Pereira"}),", and I am a ",Object(c.jsx)("b",{children:"full stack developer"})," with an affinity for the front end.",Object(c.jsx)("br",{}),"You can ",Object(c.jsx)(a.b,{to:"/about",children:"click here"})," to learn more about me, or view some of my work below:"]}),Object(c.jsx)("div",{className:"project-gallery",children:n.map((function(e,t){return Object(c.jsx)(b,{project:e,id:t},t)}))})]}):Object(c.jsx)("p",{children:"Loading..."})},h=function(){return Object(c.jsx)("div",{className:"about",children:Object(c.jsxs)("div",{className:"about-container",children:[Object(c.jsx)("img",{src:"https://rodrigojpt.github.io/media/myself.jpeg",alt:"Rodrigo outdoors",className:"profile-pic"}),Object(c.jsxs)("p",{className:"about-description",children:["Hello. My name is ",Object(c.jsx)("b",{children:"Rodrigo Pereira"}),", and I am a full stack web developer based in Washington, DC. I specialize in creating web apps with Javascript and the tools built on top of it, but I can bring my skills to just about any development environment. I have an affinity for the front end, and my priorities are always keeping things simple, clean, and efficient. Outside of being a developer, my passions include combat sports (particularly submission grappling/jiu jitsu), filming/editing videos, and playing music! I look forward to getting to know you!"]})]})})},f=function(e){var t=e.id,n=Object(r.useState)(null),i=Object(l.a)(n,2),s=i[0],o=i[1];return Object(r.useEffect)((function(){fetch("/projects.json").then((function(e){return e.json()})).then((function(e){return o(e[t]),e[t]})).then((function(e){e.wakeup&&e.wakeup.forEach((function(e){return fetch(e)}))})).catch(console.err)}),[]),s?Object(c.jsxs)("div",{className:"details",children:[Object(c.jsxs)(a.b,{style:{fontSize:"14px"},to:"/",children:[Object(c.jsx)("i",{className:"fas fa-chevron-left"})," Back"]}),Object(c.jsxs)("div",{className:"detail-container",children:[Object(c.jsx)("img",{src:s.image,alt:""}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{className:"details-title",children:s.name}),Object(c.jsx)("div",{className:"project-info",children:Object(c.jsx)(d,{project:s})}),Object(c.jsx)("p",{className:"details-description",children:s.description}),Object(c.jsxs)("div",{className:"details-links",children:[Object(c.jsx)("a",{href:s.link,target:"_blank",rel:"noreferrer",children:"Visit Site"}),s.repo?Object(c.jsx)("a",{href:s.repo,target:"_blank",rel:"noreferrer",children:"View Code"}):null,s.video?Object(c.jsx)("a",{href:s.video,target:"_blank",rel:"noreferrer",children:"Demo Video"}):null]})]})]})]}):Object(c.jsx)("p",{children:"Loading..."})},p=function(){return Object(c.jsxs)("div",{className:"icons",children:[Object(c.jsx)("a",{href:"mailto:rodrigojpereirat@gmail.com",target:"_blank",rel:"noreferrer",children:Object(c.jsx)("i",{className:"fas fa-envelope-square"})}),Object(c.jsx)("a",{href:"https://github.com/RodrigoJPT",target:"_blank",rel:"noreferrer",children:Object(c.jsx)("i",{className:"fab fa-github-square"})}),Object(c.jsx)("a",{href:"https://www.linkedin.com/in/rodrigojpt/",target:"_blank",rel:"noreferrer",children:Object(c.jsx)("i",{className:"fab fa-linkedin"})})]})};var m=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(o,{}),Object(c.jsx)(j.a,{path:"/",exact:!0,component:u}),Object(c.jsx)(j.a,{path:"/about",exact:!0,component:h}),Object(c.jsx)(j.a,{path:"/projects/:id",render:function(e){return Object(c.jsx)(f,{id:e.match.params.id})}}),Object(c.jsx)(p,{})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))};s.a.render(Object(c.jsx)(a.a,{children:Object(c.jsx)(m,{})}),document.getElementById("root")),O()}},[[30,1,2]]]);
//# sourceMappingURL=main.6648cd07.chunk.js.map