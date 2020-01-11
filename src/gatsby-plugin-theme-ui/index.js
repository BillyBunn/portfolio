import { base } from '@theme-ui/presets'
import merge from 'lodash.merge'

console.log(base)

export default merge(base, {
  // breakpoints: ['34em', '48em', '64em', '80em'],
  // colors: {
  //   text: '#000',
  //   background: '#fff',
  //   // primary: "#07c",
  //   primary: 'rebeccapurple',
  //   secondary: '#30c',
  //   muted: '#f6f6f9',
  //   gray: '#dddddf',
  //   highlight: 'hsla(205, 100%, 40%, 0.125)',
  //   blueScale: [
  //     '#0366d6',
  //     '#f1f8ff',
  //     '#dbedff',
  //     '#c8e1ff',
  //     '#79b8ff',
  //     '#2188ff',
  //     '#0366d6',
  //     '#005cc5',
  //     '#044289',
  //     '#032f62',
  //     '#05264c'
  //   ]
  // },
  // fonts: {
  //   body: 'system-ui, sans-serif',
  //   // body: 'Georgia, serif',
  //   heading: 'inherit',
  //   monospace: 'Menlo, monospace'
  // },
  // fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  // fontWeights: { light: 300, body: 400, heading: 700, bold: 700 },
  // lineHeights: { body: 1.5, heading: 1.25 },
  // space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  // sizes: { avatar: 48 },
  // radii: { default: 4, circle: 99999 },
  // shadows: {
  //   card: '0 0 4px rgba(0, 0, 0, .125)',
  //   elevation: [
  //     'inset 0 7px 9px -7px rgba(0,0,0,0.7)',
  //     '0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24)',
  //     '0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23)',
  //     '0 10px 20px rgba(0,0,0,0.1),0 6px 6px rgba(0,0,0,0.1)',
  //     '0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22)',
  //     '0 19px 38px rgba(0,0,0,0.3),0 15px 12px rgba(0,0,0,0.22)'
  //   ],
  //   elevationReverse: [
  //     'inset 0 -7px 9px -7px rgba(0,0,0,0.7)',
  //     '0 -1px 3px rgba(0,0,0,0.12),0 -1px 2px rgba(0,0,0,0.24)',
  //     '0 -3px 6px rgba(0,0,0,0.16),0 -3px 6px rgba(0,0,0,0.23)',
  //     '0 -10px 20px rgba(0,0,0,0.1),0 -6px 6px rgba(0,0,0,0.1)',
  //     '0 -14px 28px rgba(0,0,0,0.25),0 -10px 10px rgba(0,0,0,0.22)',
  //     '0 -19px 38px rgba(0,0,0,0.3),0 -15px 12px rgba(0,0,0,0.22)'
  //   ]
  // },
  // // rebass variants
  // text: {
  //   heading: {
  //     fontFamily: 'heading',
  //     lineHeight: 'heading',
  //     fontWeight: 'heading'
  //   },
  //   display: {
  //     fontFamily: 'heading',
  //     fontWeight: 'heading',
  //     lineHeight: 'heading',
  //     fontSize: [5, 6, 7]
  //   },
  //   caps: { textTransform: 'uppercase', letterSpacing: '0.1em' }
  // },
  // cards: {
  //   primary: {
  //     p: 2,
  //     bg: 'background',
  //     boxShadow: 'card',
  //     borderRadius: 'default'
  //   }
  // },
  // variants: {
  //   avatar: { width: 'avatar', height: 'avatar', borderRadius: 'circle' },
  //   card: {
  //     p: 2,
  //     bg: 'background',
  //     boxShadow: 'card',
  //     borderRadius: 'default'
  //   },
  //   link: { color: 'primary' },
  //   nav: {
  //     // fontSize: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  //     fontSize: 3,
  //     fontWeight: 'light',
  //     display: 'inline-block',
  //     p: 2,
  //     color: 'inherit',
  //     textDecoration: 'none',
  //     ':hover,:focus,.active': { color: 'primary' }
  //     // textTransform: 'uppercase',
  //   },
  //   logo: {
  //     fontSize: 3,
  //     fontWeight: 'heading',
  //     display: 'inline-block',
  //     p: 2,
  //     color: 'inherit',
  //     textDecoration: 'none',
  //     ':hover,:focus,.active': { color: 'primary' }
  //     // textTransform: 'uppercase',
  //   },
  //   header: {
  //     // boxShadow: 'elevation.1',
  //     // boxShadow: 'elevation.2',
  //     // pt: 3,
  //   },
  //   footer: {
  //     boxShadow: 'elevationReverse.2'
  //   }
  // },
  // buttons: {
  //   primary: {
  //     fontSize: 2,
  //     fontWeight: 'bold',
  //     color: 'background',
  //     bg: 'primary',
  //     borderRadius: 'default'
  //   },
  //   outline: {
  //     variant: 'buttons.primary',
  //     color: 'primary',
  //     bg: 'transparent',
  //     boxShadow: 'inset 0 0 2px'
  //   },
  //   secondary: {
  //     variant: 'buttons.primary',
  //     color: 'background',
  //     bg: 'secondary'
  //   }
  // },
  // styles: {
  //   root: { fontFamily: 'body', fontWeight: 'body', lineHeight: 'body' }
  // },

  // links: {
  //   nav: {
  //     // fontSize: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  //     fontSize: 3,
  //     fontWeight: 'light',
  //     display: 'inline-block',
  //     p: 2,
  //     color: 'inherit',
  //     // color: 'inherit',
  //     textDecoration: 'none',
  //     ':hover,:focus,.active': { color: 'primary' }
  //     // textTransform: 'uppercase',
  //   },
  //   logo: {
  //     fontSize: 3,
  //     fontWeight: 'heading',
  //     display: 'inline-block',
  //     p: 2,
  //     color: 'inherit',
  //     textDecoration: 'none',
  //     ':hover,:focus,.active': { color: 'primary' }
  //     // textTransform: 'uppercase',
  //   }
  // }
})
