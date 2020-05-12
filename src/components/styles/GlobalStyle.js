import { createGlobalStyle, css } from 'styled-components';

const reset = css`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

const colorMap = {
  gray: [
    '#fafbfc',
    '#f6f8fa',
    '#e1e4e8',
    '#d1d5da',
    '#959da5',
    '#6a737d',
    '#586069',
    '#444d56',
    '#2f363d',
    '#24292e' /* body font color */,
  ],

  blue: [
    '#f1f8ff',
    '#dbedff',
    '#c8e1ff',
    '#79b8ff',
    '#2188ff',
    '#0366d6' /* Default: Passes AA with #fff */,
    '#005cc5',
    '#044289',
    '#032f62',
    '#05264c' /* Passes with 1/2/300 blues */,
  ],

  green: [
    '#f0fff4',
    '#dcffe4',
    '#bef5cb',
    '#85e89d',
    '#34d058',
    '#28a745' /* Default. passes AA Large */,
    '#22863a' /* Text green, passes AA on #fff */,
    '#176f2c',
    '#165c26',
    '#144620',
  ],

  yellow: [
    '#fffdef',
    '#fffbdd',
    '#fff5b1',
    '#ffea7f',
    '#ffdf5d',
    '#ffd33d',
    '#f9c513',
    '#dbab09',
    '#b08800',
    '#735c0f',
  ],

  orange: [
    '#fff8f2',
    '#ffebda',
    '#ffd1ac',
    '#ffab70',
    '#fb8532',
    '#f66a0a' /* Default. passes AA Large with #fff */,
    '#e36209',
    '#d15704',
    '#c24e00',
    '#a04100',
  ],

  red: [
    '#ffeef0',
    '#ffdce0',
    '#fdaeb7',
    '#f97583',
    '#ea4a5a',
    '#d73a49' /* Default. passes AA */,
    '#cb2431',
    '#b31d28',
    '#9e1c23',
    '#86181d',
  ],

  purple: [
    '#f5f0ff',
    '#e6dcfd',
    '#d1bcf9',
    '#b392f0',
    '#8a63d2',
    '#6f42c1' /* passes AA with #fff */,
    '#5a32a3',
    '#4c2889',
    '#3a1d6e',
    '#29134e',
  ],

  pink: [
    '#ffeef8',
    '#fedbf0',
    '#f9b3dd',
    '#f692ce',
    '#ec6cb9',
    '#ea4aaa',
    '#d03592',
    '#b93a86',
    '#99306f',
    '#6d224f',
  ],
};

const baseColors = Object.entries(colorMap).reduce(
  (colorsArr, [name, arr]) => [
    ...colorsArr,
    ...arr.map((colorCode, i) => `--${name}-${i}00: ${colorCode};`),
  ],
  []
);

const defaultColors = [
  ...Object.keys(colorMap).map(color => `--${color}: ${colorMap[color][5]};`),
  `--black: #1b1f23;`,
  `--white: #fff;`,
];

// https://github.com/styled-components/polished/issues/104
const hexToRgb = hex => {
  // http://stackoverflow.com/a/5624139
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

const rgba = (hex, alpha) => {
  const color = hexToRgb(hex);
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
};

const rgbaColors = Object.keys(colorMap).reduce((acc, color) => {
  acc[color] = hexToRgb(colorMap[color][5]);
  return acc;
}, {});
rgbaColors.white = hexToRgb('#fff');
rgbaColors.black = hexToRgb('#1b1f23');
console.log({ rgbaColors });

const fades = [...Object.entries(rgbaColors)].reduce(
  (fadesArr, [colorName, { r, g, b }]) => {
    const levels = [15, 30, 50, 70, 85];
    return [
      ...fadesArr,
      ...levels.map(
        level =>
          `--${colorName}-fade-${level}: rgba(${r}, ${g}, ${b}, 0.${level})`
      ),
    ];
  },
  []
);

const colors = css`
  :root {
    ${defaultColors.map(c => `${c};`)}
    ${baseColors.map(c => `${c};`)}
    ${fades.map(c => `${c};`)}
  }
`;

// const fonts = css`
//   :root {
//     --body-font: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
//       sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
//   }
//   html,
//   body {
//   }
// `;

const GlobalStyle = createGlobalStyle`
                ${reset}
                ${colors}
                    /* html {
      box-sizing: border-box;
    }
    *, *:before, *:after {
      box-sizing: inherit;
    }
             body {
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
                } */
                `;

export default GlobalStyle;
