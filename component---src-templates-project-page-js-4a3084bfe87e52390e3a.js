(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return u});var a=n(8),r=n.n(a),o=n(0),i=n.n(o),l=n(165),c=n(168),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.pageContext,n=t.previous,a=t.next;return i.a.createElement(c.a,null,i.a.createElement("h1",null,e.frontmatter.title),i.a.createElement("p",{style:{display:"block"}},e.frontmatter.date),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),i.a.createElement("hr",{style:{}}),i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},i.a.createElement("li",null,n&&i.a.createElement(l.a,{to:"/"+n.fields.path,rel:"prev"},"← ",n.frontmatter.title)),i.a.createElement("li",null,a&&i.a.createElement(l.a,{to:"/"+a.fields.path,rel:"next"},a.frontmatter.title," →"))))},t}(i.a.Component);t.default=s;var u="794814128"},165:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(5),i=n.n(o),l=n(40),c=n.n(l);n.d(t,"a",function(){return c.a});n(166),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},166:function(e,t,n){var a;e.exports=(a=n(167))&&a.default||a},167:function(e,t,n){"use strict";n.r(t);n(41);var a=n(0),r=n.n(a),o=n(5),i=n.n(o),l=n(64),c=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},168:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(169),i=n.n(o),l=n(164);function c(){var e=i()(["\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n\n:root {\n\t/* Colors */\n\t","\n\t--primary: #1A222C; /* black */\n\t--primary-light: #313842;\n\t--primary-lighter: #2A3038;\n\n  ",'\n\t--secondary: #f5f5f5; /* white */\n  --accent: #2dd5c9; /* light blue */\n\t--primary-transparent: rgba(26, 34, 44, 0.9);\n\t--accent-transparent: rgba(45, 213, 201, 0.5);\n\n\t--min-width: 320px;\n\t--max-width: 1024px;\n\n\t/* Base font styles */\n\t--min-font-size: 1rem;\n\t--max-font-size: 2em;\n\t--font-size: 1.3em;\n\t--font-family: "Fira Sans", sans-serif;\n\t--line-height: 1.6;\n\t}\n']);return c=function(){return e},e}var s=Object(l.a)(c(),"",""),u=l.b.div.withConfig({displayName:"layoutcss",componentId:"sc-1g0m063-0"})(["background:var(--secondary);color:var(--primary);display:flex;flex-flow:column nowrap;min-height:100vh;font-family:var(--font-family);font-size:var(--font-size);line-height:1;a,a:visited{color:inherit;text-decoration-color:var(--accent);transition:color 0.2s ease-in-out;&:hover{color:var(--accent);}}h1{font-size:200%;}h2,h3{font-size:108%;font-weight:600;}hr{border:0;height:2px;background:var(--accent);","}> header{flex-shrink:0;}main{flex-grow:1;line-height:var(--line-height);max-width:var(--max-width);margin:0 auto;padding:0.5em;"," p,li{margin-bottom:1em;}}> footer{flex-shrink:0;}"],"",""),d=n(170),m=function(){return r.a.createElement(d.Helmet,null,r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Fira+Sans:400,400i,600,600i,900&display=swap",rel:"stylesheet"}))},p=n(165),f=function(e){var t,n=e.route;return r.a.createElement(p.a,{to:"/"+n,partiallyActive:!0,activeClassName:"active-nav-link"},(t=n).charAt(0).toUpperCase()+t.slice(1))},h=l.b.header.withConfig({displayName:"desktop-headercss__DesktopHeader",componentId:"sc-39r2xc-0"})(["background-color:var(--primary);color:var(--secondary);display:flex;flex-flow:row nowrap;justify-content:space-between;padding:0;> a{"," align-items:center;display:flex;flex:0 1 auto;height:100%;justify-content:center;padding:1em 2em;}> nav{flex:1 0 auto;> ul{align-items:center;display:flex;flex-flow:row nowrap;flex:1 0 auto;height:100%;justify-content:flex-end;> li{> a{align-items:center;display:flex;flex:0 1 auto;height:100%;justify-content:center;padding:1em 2em;&:hover{background:var(--primary-light);}&.active-nav-link{background:var(--primary-light);color:var(--accent);}}}}}"],""),b=function(e){var t=e.routes;return r.a.createElement(h,null,r.a.createElement(p.a,{to:"/"},"Billy Bunn"),r.a.createElement("nav",null,r.a.createElement("ul",null,t.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(f,{route:e}))}))))},g=l.b.div.withConfig({displayName:"mobile-headercss__MenuBar",componentId:"b12pl-0"})(["align-items:center;background:var(--primary);color:var(--secondary);display:flex;flex-flow:row nowrap;justify-content:space-between;padding:1em;"]),v=l.b.button.withConfig({displayName:"mobile-headercss__MenuButton",componentId:"b12pl-1"})(["background:transparent;border:0;color:inherit;cursor:pointer;display:inline-block;font:inherit;height:100%;margin:0;outline:0;padding:0;vertical-align:baseline;width:auto;"]),y=l.b.header.withConfig({displayName:"mobile-headercss__MobileHeader",componentId:"b12pl-2"})(["",""],""),w=(n(41),n(95)),E=n.n(w),k=l.b.nav.withConfig({displayName:"navcss",componentId:"iilceh-0"})(["background-color:var(--primary-transparent);color:var(--secondary);display:flex;position:absolute;transition:display 0.2s ease-in-out;width:100%;z-index:999;> ul{padding:0.5em 0;> li{margin-bottom:0.5em;&:last-child{margin:0;}> a{display:block;padding:0.5em 0;text-align:center;transition:background 0.2s ease-in-out,color 0.2s ease-in-out;&:hover{background:var(--accent-transparent);color:var(--secondary);}&.active-nav-link{background:var(--accent-transparent);color:var(--accent);}}}}"]),x=r.a.forwardRef(function(e,t){var n=e.routes,a=E()(e,["routes"]);return r.a.createElement(k,Object.assign({ref:t},a),r.a.createElement("ul",null,n.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(f,{route:e}))})))}),j=function(e){var t=e.routes,n=Object(a.useRef)(),o=Object(a.useState)(!1),i=o[0],l=o[1];return function(e,t){Object(a.useEffect)(function(){var n=function(n){e.current&&!e.current.contains(n.target)&&t(n)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),function(){document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}},[e,t])}(n,function(){return l(!1)}),r.a.createElement(y,null,r.a.createElement(g,null,r.a.createElement(p.a,{to:"/"},"Billy Bunn"),r.a.createElement(v,{onClick:function(){console.log("toggle"),l(!0)},style:{color:i?"inherit":"var(--accent)",pointerEvents:i?"none":"auto",cursor:"pointer"}},"Menu")),console.log("isNavOpen",i),r.a.createElement(x,{ref:n,style:{display:i?"block":"none"},routes:t}))},C=function(e){var t=e.breakPoint,n=["about","projects","contact"];return function(){var e="object"==typeof window;function t(){return{width:e?window.innerWidth:void 0,height:e?window.innerHeight:void 0}}var n=Object(a.useState)(t),r=n[0],o=n[1];return Object(a.useEffect)(function(){if(!e)return!1;function n(){o(t())}return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}},[]),r}().width>t?r.a.createElement(b,{routes:n}):r.a.createElement(j,{routes:n})},q=l.b.footer.withConfig({displayName:"footercss",componentId:"fqsmgi-0"})(["background:var(--primary);color:var(--secondary);> ul{display:flex;padding:1em 0;justify-content:space-evenly;> li{> a{}}}> p{margin-bottom:0.2rem;text-align:center;}"]),z=function(){return r.a.createElement(q,null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/billybunn"},"GitHub")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/billybunn/"},"LinkedIn")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/billybunn"},"Twitter"))),r.a.createElement("p",null,"© 2019 Billy Bunn"))};t.a=function(e){var t=e.children;return r.a.createElement(u,null,r.a.createElement(m,null),r.a.createElement(s,null),r.a.createElement(C,{breakPoint:720}),r.a.createElement("main",null,t),r.a.createElement(z,null))}}}]);
//# sourceMappingURL=component---src-templates-project-page-js-4a3084bfe87e52390e3a.js.map