(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{167:function(e,t,n){"use strict";n.r(t);n(41);var r=n(0),a=n.n(r),i=n(2),o=n.n(i),s=n(173),l=n(175),d=n(176),c=n(174),u=n(184),f=(n(187),n(170)),p=n.n(f),m=n(169),g=n(171);function h(){var e=p()(["\n  padding: 4rem;\n  margin: 4rem;\n  border-radius: 10px;\n  position: relative;\n  text-align: center;\n  color: #fff;\n  transition: background-color 0.3s ease;\n\n  background-color: ",";\n"]);return h=function(){return e},e}m.c.div(h(),function(e){return e.isVisible?g.a:" #333"});function b(){var e=p()(["\n  -webkit-appearance: none;\n  background-color: transparent;\n  border: none;\n  font-family: inherit;\n  font-size: 4rem;\n  font-weight: normal;\n  padding: 1rem;\n  line-height: 4rem;\n  position: absolute;\n  top: 0;\n  right: 0;\n  color: #fff;\n"]);return b=function(){return e},e}function v(){var e=p()(["\n  -webkit-appearance: none;\n  background-color: #fff;\n  border-radius: 5px;\n  border: none;\n  color: #757575;\n  border: 1px solid #ddd;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 1.3rem;\n  font-weight: 500;\n  margin: 4rem 0 2rem;\n  padding: 1rem 2rem;\n  text-transform: uppercase;\n  transition: 0.2s background-color ease;\n\n  &:active,\n  &:focus {\n    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);\n    outline: none;\n  }\n\n  &:hover {\n    background-color: #f9f9f9;\n  }\n\n  & + & {\n    margin-left: 1rem;\n  }\n"]);return v=function(){return e},e}var y=m.c.button(v());m.c.button(b());n.d(t,"query",function(){return S});var w=function(e){var t=e.data,n=t.allMarkdownRemark.edges.reduce(function(e,t){return e.push(Object.assign({},t.node.frontmatter,{path:t.node.fields.slug})),e},[]);return a.a.createElement(l.a,null,a.a.createElement(d.a,null,a.a.createElement(c.a,{as:"h2",size:"xl"},"Hello, ",a.a.createElement("br",null),"I’m Billy Bunn."),a.a.createElement(c.a,{as:"h2",size:"large"},t.homeJson.content.childMarkdownRemark.rawMarkdownBody)),a.a.createElement(d.a,{fluid:!0},a.a.createElement(c.a,{as:"h3",size:"medium"},"Here’s some of my latest work"),a.a.createElement(u.a,{items:n,clickable:!0}),a.a.createElement(y,{onClick:function(){return Object(s.c)("/projects")}},"See more of my work")),a.a.createElement("div",{style:{height:"25vh"}}))};w.propTypes={data:o.a.object.isRequired};t.default=w;var S="2819017950"},172:function(e,t,n){"use strict";var r=n(11);t.__esModule=!0,t.default=void 0;var a,i=r(n(6)),o=r(n(43)),s=r(n(98)),l=r(n(99)),d=r(n(0)),c=r(n(2)),u=function(e){var t=(0,l.default)({},e),n=t.resolutions,r=t.sizes,a=t.critical;return n&&(t.fixed=n,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),a&&(t.loading="eager"),t},f=Object.create({}),p=function(e){var t=u(e),n=t.fluid?t.fluid.src:t.fixed.src;return f[n]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,g="undefined"!=typeof window,h=g&&window.IntersectionObserver,b=new WeakMap;var v=function(e,t){var n=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),a);return n&&(n.observe(e),b.set(e,t)),function(){n.unobserve(e),b.delete(e)}},y=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+n+"/>":"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+r+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+s+l+n+a+t+o+i+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},w=d.default.forwardRef(function(e,t){var n=e.sizes,r=e.srcSet,a=e.src,i=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return d.default.createElement("img",(0,l.default)({sizes:n,srcSet:r,src:a},f,{onLoad:o,onError:c,ref:t,loading:u,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});w.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var S=function(e){function t(t){var n;(n=e.call(this,t)||this).seenBefore=g&&p(t),n.addNoScript=!(t.critical&&!t.fadeIn),n.useIOSupport=!m&&h&&!t.critical&&!n.seenBefore;var r=t.critical||g&&(m||!n.useIOSupport);return n.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!n.seenBefore&&t.fadeIn},n.imageRef=d.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,o.default)((0,o.default)(n))),n.handleRef=n.handleRef.bind((0,o.default)((0,o.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=v(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=u(e),n=t.fluid?t.fluid.src:t.fixed.src,f[n]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=u(this.props),t=e.title,n=e.alt,r=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,g=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,S=e.itemProp,E=e.loading,x=!1===this.state.fadeIn||this.state.imgLoaded,k=!0===this.state.fadeIn&&!this.state.imgCached,L=(0,l.default)({opacity:x?1:0,transition:k?"opacity "+b+"ms":"none"},s),R="boolean"==typeof h?"lightgray":h,I={transitionDelay:b+"ms"},z=(0,l.default)({opacity:this.state.imgLoaded?0:1},k&&I,s,f),O={title:t,alt:this.state.isVisible?"":n,style:z,className:p};if(m){var T=m;return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},d.default.createElement(v,{style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),R&&d.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},k&&I)}),T.base64&&d.default.createElement(w,(0,l.default)({src:T.base64},O)),T.tracedSVG&&d.default.createElement(w,(0,l.default)({src:T.tracedSVG},O)),this.state.isVisible&&d.default.createElement("picture",null,T.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:T.srcSetWebp,sizes:T.sizes}),d.default.createElement(w,{alt:n,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,l.default)({alt:n,title:t,loading:E},T))}}))}if(g){var j=g,C=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},i);return"inherit"===i.display&&delete C.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:C,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},R&&d.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:R,width:j.width,opacity:this.state.imgLoaded?0:1,height:j.height},k&&I)}),j.base64&&d.default.createElement(w,(0,l.default)({src:j.base64},O)),j.tracedSVG&&d.default.createElement(w,(0,l.default)({src:j.tracedSVG},O)),this.state.isVisible&&d.default.createElement("picture",null,j.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),d.default.createElement(w,{alt:n,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,l.default)({alt:n,title:t,loading:E},j))}}))}return null},t}(d.default.Component);S.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var E=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),x=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});S.propTypes={resolutions:E,sizes:x,fixed:E,fluid:x,fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"])};var k=S;t.default=k},178:function(e,t){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var r=new Uint8Array(16);e.exports=function(){return n(r),r}}else{var a=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),a[t]=e>>>((3&t)<<3)&255;return a}}},179:function(e,t){for(var n=[],r=0;r<256;++r)n[r]=(r+256).toString(16).substr(1);e.exports=function(e,t){var r=t||0,a=n;return[a[e[r++]],a[e[r++]],a[e[r++]],a[e[r++]],"-",a[e[r++]],a[e[r++]],"-",a[e[r++]],a[e[r++]],"-",a[e[r++]],a[e[r++]],"-",a[e[r++]],a[e[r++]],a[e[r++]],a[e[r++]],a[e[r++]],a[e[r++]]].join("")}},181:function(e,t,n){var r=n(182),a=n(183),i=a;i.v1=r,i.v4=a,e.exports=i},182:function(e,t,n){var r,a,i=n(178),o=n(179),s=0,l=0;e.exports=function(e,t,n){var d=t&&n||0,c=t||[],u=(e=e||{}).node||r,f=void 0!==e.clockseq?e.clockseq:a;if(null==u||null==f){var p=i();null==u&&(u=r=[1|p[0],p[1],p[2],p[3],p[4],p[5]]),null==f&&(f=a=16383&(p[6]<<8|p[7]))}var m=void 0!==e.msecs?e.msecs:(new Date).getTime(),g=void 0!==e.nsecs?e.nsecs:l+1,h=m-s+(g-l)/1e4;if(h<0&&void 0===e.clockseq&&(f=f+1&16383),(h<0||m>s)&&void 0===e.nsecs&&(g=0),g>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");s=m,l=g,a=f;var b=(1e4*(268435455&(m+=122192928e5))+g)%4294967296;c[d++]=b>>>24&255,c[d++]=b>>>16&255,c[d++]=b>>>8&255,c[d++]=255&b;var v=m/4294967296*1e4&268435455;c[d++]=v>>>8&255,c[d++]=255&v,c[d++]=v>>>24&15|16,c[d++]=v>>>16&255,c[d++]=f>>>8|128,c[d++]=255&f;for(var y=0;y<6;++y)c[d+y]=u[y];return t||o(c)}},183:function(e,t,n){var r=n(178),a=n(179);e.exports=function(e,t,n){var i=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var o=(e=e||{}).random||(e.rng||r)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t)for(var s=0;s<16;++s)t[i+s]=o[s];return t||a(o)}},184:function(e,t,n){"use strict";n(41);var r=n(0),a=n.n(r),i=n(2),o=n.n(i),s=n(181),l=n.n(s),d=n(173),c=n(172),u=n.n(c),f=n(44),p=n(170),m=n.n(p),g=n(169),h=n(180);function b(){var e=m()(["\n  border-radius: 5px;\n  cursor: pointer;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: space-around;\n  padding: 1rem;\n"]);return b=function(){return e},e}function v(){var e=m()(["\n    margin-bottom: 4rem;\n  "]);return v=function(){return e},e}function y(){var e=m()(["\n  color: #757575;\n  margin: 0 2rem 2rem;\n\n  ",";\n"]);return y=function(){return e},e}function w(){var e=m()(["\n  display: block;\n  font-size: 2rem;\n  font-weight: 500;\n  margin: 2rem 2rem 1rem;\n"]);return w=function(){return e},e}var S=g.c.span(w()),E=g.c.p(y(),h.a.TABLET(v())),x=g.c.figure(b()),k=function(e){var t=e.title,n=e.description,r=e.image,i=e.path,o=e.clickable?I:R;return a.a.createElement(o,{path:i},a.a.createElement(u.a,{fluid:r?r.childImageSharp.fluid:{},alt:t}),a.a.createElement("figcaption",null,a.a.createElement(S,null,t),a.a.createElement(E,null,n)))};k.propTypes={title:o.a.string,description:o.a.string,image:o.a.object.isRequired,path:o.a.string,clickable:o.a.bool};var L=k,R=function(e){var t=e.children;return a.a.createElement("figure",null,t)};R.propTypes={children:o.a.element.isRequired};var I=function(e){var t=e.children,n=e.path,r=Object(f.b)(x)({hoverable:!0,init:{x:0,y:0,boxShadow:"0px 0px 0px 0px #000000, 0px 0px 7px 1px rgba(0,0,0,0.26)",transition:{type:"spring",stiffness:1e3,damping:20}},hover:{y:-6,boxShadow:"0px 10px 13px -7px #000000, 0px 0px 7px 1px rgba(0,0,0,0.26)",transition:{type:"spring",stiffness:250,damping:15}}});return a.a.createElement(r,{onClick:function(){return Object(d.c)("/"+n)}},t)};function z(){var e=m()(["\n    display: block;\n    \n    > * {\n      margin-bottom: 2rem;\n    }\n  "]);return z=function(){return e},e}function O(){var e=m()(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  grid-gap: 4rem;\n  padding: 0 2rem;\n  margin: 2rem 0;\n\n  ",";\n"]);return O=function(){return e},e}I.propTypes={children:o.a.element.isRequired,path:o.a.string.isRequired};var T=g.c.div(O(),h.a.TABLET(z())),j=function(e){var t=e.items,n=e.clickable;return a.a.createElement(T,null,t.map(function(e){return a.a.createElement(L,Object.assign({},e,{key:l.a.v4(),clickable:n}))}))};j.propTypes={items:o.a.arrayOf(o.a.object).isRequired,clickable:o.a.bool};t.a=j}}]);
//# sourceMappingURL=component---src-pages-index-js-c208b20dc9a9bc4423ce.js.map