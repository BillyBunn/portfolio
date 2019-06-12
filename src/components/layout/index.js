import React from "react"
import { Helmet } from "react-helmet"
import styled, { ThemeProvider } from "styled-components"

// Context provider to give all components access to viewport height & width
import WindowDimensionsProvider from "../WindowDimensionsProvider"

import Header from "../header"
import Footer from "../footer"

const Layout = styled.div`
  /* Makes content %100 height */
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;

  background: ${props => props.theme.secondaryColor};
  color: ${props => props.theme.primaryColor};
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.baseFontSize};
  font-weight: ${props => props.theme.baseFontWeight};
  line-height: ${props => props.theme.baseLineHeight};
  text-rendering: optimizeLegibility;

  @media all and (min-width: 1440px) {
    font-size: ${props => props.theme.maxFontSize};
  }
  @media all and (max-width: 768px) {
    font-size: ${props => props.theme.mobileFontSize};
  }

  /* Keeps "visited" links from changing color */
  a,
  a:visited {
    color: inherit;
  }

  > header {
    background: ${props => props.theme.headerBackground};
    color: ${props => props.theme.headerColor};
    flex: 0 0 auto;
  }

  > main {
    flex: 1 0 auto;
    padding: 2rem;
    h1,
    h2,
    h3,
    h4,
    h5 {
      font-size: ${props => props.theme.headingFontSize};
      font-weight: ${props => props.theme.headingFontWeight};
      letter-spacing: ${props => props.theme.headingLetterSpacing};
      line-height: ${props => props.theme.baseLineHeight};
      text-transform: ${props => props.theme.headingTextTransform};
    }

    p,
    li {
      margin-bottom: 1em;
    }
  }

  > footer {
    background: ${props => props.theme.headerBackground};
    color: ${props => props.theme.headerColor};
    flex: 0 0 auto;
  }
`

// We are passing a default theme for Layouts that arent wrapped in the ThemeProvider
// Layout.defaultProps = {
//   theme: {
//     textColor: "red",
//     backgroundColor: "lightblue",
//     headerColor: "lightcoral",
//   },
// }

// Define what props.theme will look like
const theme = {
  textColor: "#202020",
  backgroundColor: "#f5f5f5",
  headerBackground: "#202020",
  headerColor: "#d8d8d8",

  primaryColor: "#202020" /* black */,
  secondaryColor: "#f5f5f5" /* white */,
  actionColor: "#2dd5c9" /* light blue */,

  /* base text */
  fontFamily: `"Fira Sans", sans-serif`,
  // baseFontSize: "1rem",
  baseFontSize: "2.4vw",
  mobileFontSize: "1.13em",
  maxFontSize: "2em",
  baseLineHeight: "1.45",
  baseFontWeight: "400",
  boldFontWeight: "600",
  /* titles */
  titleFontSize: "125%",
  /* headings */
  headingFontSize: "109%",
  headingFontWeight: "600",
  headingLetterSpacing: "0.09em",
  headingTextTransform: "uppercase",
}

export default ({ children }) => (
  <WindowDimensionsProvider>
    <ThemeProvider theme={theme}>
      <Layout>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Fira+Sans:400,400i,600,600i,900&display=swap"
            rel="stylesheet"
          />
        </Helmet>

        <Header />
        <main>{children}</main>
        <Footer />
      </Layout>
    </ThemeProvider>
  </WindowDimensionsProvider>
)
