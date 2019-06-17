import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}


:root {
	/* Colors */
	--primary: #202020; /* black */
  --secondary: #f5f5f5; /* white */
  --accent: #2dd5c9; /* light blue */
	--primary-transparent: rgba(32, 32, 32, 0.9);
	--accent-transparent: rgba(45, 213, 201, 0.5);

	--min-width: 320px;
	--max-width: 1024px;



	/* Base font styles */
	--min-font-size: 1rem;
	--max-font-size: 2em;
	--font-size: 1.3em;
	--font-family: "Fira Sans", sans-serif;
	--line-height: 1.45;
	
	}

	body {
		font-family: var(--font-family);
		font-size: var(--font-size);
		line-height: var(--line-height);
	}

	/* Keeps "visited" links from changing color */
  a,
  a:visited {
    color: inherit;
    text-decoration-color: var(--accent);
    transition: color 0.2s ease-in-out;
    &:hover {
      color: var(--accent);
    }
  }
`
