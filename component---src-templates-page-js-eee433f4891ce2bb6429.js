(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{162:function(e,t,n){"use strict";n.r(t),n.d(t,"Content",function(){return w}),n.d(t,"ButtonLink",function(){return v}),n.d(t,"query",function(){return E});var r=n(170),a=n.n(r),i=n(0),o=n.n(i),s=n(173),l=n(172),d=n.n(l),c=n(169),u=n(175),f=n(176),p=n(177),g=n(174),m=n(171);function h(){var e=a()(["\n  -webkit-appearance: none;\n  background-color: ",";\n  border-radius: 5px;\n  border: none;\n  color: #757575;\n  border: 1px solid #ddd;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 1.3rem;\n  font-weight: 500;\n  margin: 0rem;\n  padding: 1rem 2rem;\n  text-decoration: none;\n  text-transform: uppercase;\n  transition: 0.2s background-color ease;\n\n  &:active,\n  &:focus {\n    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);\n    outline: none;\n  }\n\n  &:hover {\n    background-color: #f9f9f9;\n  }\n\n  & + & {\n    margin-left: 1rem;\n  }\n"]);return h=function(){return e},e}function b(){var e=a()(["\n  background: ",";\n  border-radius: 3px;\n  padding: 1rem 0;\n  width: 100%;\n  p {\n    margin: 1rem auto 2rem auto;\n    text-align: center;\n  }\n  ul {\n    display: flex;\n    /* flex-wrap: wrap; */\n    justify-content: space-between;\n    list-style: none;\n    padding: 0 1rem 2rem 1rem;\n    margin: 0 auto;\n    max-width: 1000px;\n  }\n"]);return b=function(){return e},e}function y(){var e=a()(["\n  line-height: 1.4;\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5 {\n    font-size: 110%;\n    font-weight: 600;\n    margin-bottom: 0.5rem;\n  }\n\n  img {\n    /* margin: 3rem 0rem; */\n    /* padding: 3rem 0rem; */\n  }\n\n  .gatsby-resp-image-link {\n    box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.26);\n    margin: 2rem 0rem;\n  }\n  ul {\n    list-style: disc;\n    margin: 0 0 2rem 1.5rem;\n    li {\n      margin-bottom: 0.5rem;\n    }\n  }\n  strong {\n    font-weight: 600;\n  }\n\n  code {\n    padding: 0.2rem 0.3rem;\n    background: ",";\n    font-size: 85%;\n    line-height: 1.45;\n    border-radius: 3px;\n    color: ",";\n    border: 1px solid #ddd;\n    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,\n      monospace;\n  }\n  a {\n    > code {\n      color: ",";\n      border: none;\n      background: transparent;\n    }\n  }\n\n  pre {\n    display: block;\n    padding: 2rem;\n    margin-top: 4rem;\n    overflow: auto;\n    font-size: 85%;\n    line-height: 1.45;\n    border-radius: 5px;\n    color: ",";\n    border: 1px solid #ddd;\n    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,\n      monospace;\n\n    > code {\n      padding: 0;\n      background: transparent;\n      font-size: 100%;\n      line-height: 1.45;\n      border-radius: 0px;\n      color: inherit;\n      border: none;\n    }\n  }\n  table {\n    border-collapse: collapse;\n    margin-bottom: 2rem;\n    th, td {\n      border: 1px solid ",";\n      padding: .5rem;\n    }\n    th {\n      background: ",";\n      font-weight: bold;\n    }\n  }\n"]);return y=function(){return e},e}var w=c.c.article(y(),m.d,m.c,m.a,m.a,m.b,m.e),S=c.c.div(b(),m.e),v=Object(c.c)(s.a)(h(),m.d);t.default=function(e){var t=e.data,n=e.pageContext,r=t.markdownRemark,a=r.frontmatter,i=a.title,s=a.source,l=a.date,c=a.image,m=n.previous,h=n.next;return o.a.createElement(u.a,null,o.a.createElement(p.a,{pageTitle:i}),o.a.createElement(f.a,{centered:!0},o.a.createElement("div",{style:{marginBottom:"1rem"}},o.a.createElement(g.a,{as:"h3",size:"medium"},i),o.a.createElement(g.a,{as:"h4",size:"small"},l),o.a.createElement("a",{href:s},"View on GitHub")),o.a.createElement("div",{style:{height:"400px",maxHeight:"400px",margin:"1.5rem 0"}},o.a.createElement(d.a,{style:{maxHeight:"100%"},imgStyle:{objectFit:"contain"},fluid:c?c.childImageSharp.fluid:{},alt:i})),o.a.createElement(w,{dangerouslySetInnerHTML:{__html:r.html}})),o.a.createElement(S,null,o.a.createElement("p",null,"Browse more projects"),o.a.createElement("ul",null,o.a.createElement("li",null,m&&o.a.createElement(v,{to:""+m.fields.slug,rel:"prev"},"← ",m.frontmatter.title)),o.a.createElement("li",null,h&&o.a.createElement(v,{to:""+h.fields.slug,rel:"next"},h.frontmatter.title," →")))))};var E="1852258650"},172:function(e,t,n){"use strict";var r=n(11);t.__esModule=!0,t.default=void 0;var a,i=r(n(6)),o=r(n(43)),s=r(n(98)),l=r(n(99)),d=r(n(0)),c=r(n(2)),u=function(e){var t=(0,l.default)({},e),n=t.resolutions,r=t.sizes,a=t.critical;return n&&(t.fixed=n,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),a&&(t.loading="eager"),t},f=Object.create({}),p=function(e){var t=u(e),n=t.fluid?t.fluid.src:t.fixed.src;return f[n]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,h=m&&window.IntersectionObserver,b=new WeakMap;var y=function(e,t){var n=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),a);return n&&(n.observe(e),b.set(e,t)),function(){n.unobserve(e),b.delete(e)}},w=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+n+"/>":"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+r+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+s+l+n+a+t+o+i+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},S=d.default.forwardRef(function(e,t){var n=e.sizes,r=e.srcSet,a=e.src,i=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return d.default.createElement("img",(0,l.default)({sizes:n,srcSet:r,src:a},f,{onLoad:o,onError:c,ref:t,loading:u,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});S.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var v=function(e){function t(t){var n;(n=e.call(this,t)||this).seenBefore=m&&p(t),n.addNoScript=!(t.critical&&!t.fadeIn),n.useIOSupport=!g&&h&&!t.critical&&!n.seenBefore;var r=t.critical||m&&(g||!n.useIOSupport);return n.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!n.seenBefore&&t.fadeIn},n.imageRef=d.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,o.default)((0,o.default)(n))),n.handleRef=n.handleRef.bind((0,o.default)((0,o.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=y(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=u(e),n=t.fluid?t.fluid.src:t.fixed.src,f[n]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=u(this.props),t=e.title,n=e.alt,r=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,g=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,v=e.itemProp,E=e.loading,L=!1===this.state.fadeIn||this.state.imgLoaded,x=!0===this.state.fadeIn&&!this.state.imgCached,I=(0,l.default)({opacity:L?1:0,transition:x?"opacity "+b+"ms":"none"},s),z="boolean"==typeof h?"lightgray":h,R={transitionDelay:b+"ms"},k=(0,l.default)({opacity:this.state.imgLoaded?0:1},x&&R,s,f),O={title:t,alt:this.state.isVisible?"":n,style:k,className:p};if(g){var C=g;return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(C.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/C.aspectRatio+"%"}}),z&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},x&&R)}),C.base64&&d.default.createElement(S,(0,l.default)({src:C.base64},O)),C.tracedSVG&&d.default.createElement(S,(0,l.default)({src:C.tracedSVG},O)),this.state.isVisible&&d.default.createElement("picture",null,C.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:C.srcSetWebp,sizes:C.sizes}),d.default.createElement(S,{alt:n,title:t,sizes:C.sizes,src:C.src,crossOrigin:this.props.crossOrigin,srcSet:C.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:E})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:w((0,l.default)({alt:n,title:t,loading:E},C))}}))}if(m){var M=m,j=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},i);return"inherit"===i.display&&delete j.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},z&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:z,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},x&&R)}),M.base64&&d.default.createElement(S,(0,l.default)({src:M.base64},O)),M.tracedSVG&&d.default.createElement(S,(0,l.default)({src:M.tracedSVG},O)),this.state.isVisible&&d.default.createElement("picture",null,M.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:M.srcSetWebp,sizes:M.sizes}),d.default.createElement(S,{alt:n,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:E})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:w((0,l.default)({alt:n,title:t,loading:E},M))}}))}return null},t}(d.default.Component);v.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var E=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),L=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});v.propTypes={resolutions:E,sizes:L,fixed:E,fluid:L,fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"])};var x=v;t.default=x}}]);
//# sourceMappingURL=component---src-templates-page-js-eee433f4891ce2bb6429.js.map