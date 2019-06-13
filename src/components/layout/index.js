import React from "react"
import { Helmet } from "react-helmet"
import styled, { ThemeProvider } from "styled-components"

// Context provider to give all components access to viewport height & width
import WindowDimensionsProvider from "../WindowDimensionsProvider"

import Header from "../header"
import Footer from "../footer"

const Layout = styled.div`
  /* Makes content 100% height */
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

  /* Keeps "visited" links from changing color */
  a,
  a:visited {
    color: inherit;
  }

  h1 {
    font-size: ${props => props.theme.titleFontSize};
    font-weight: ${props => props.theme.boldFontWeight};
  }

  > header {
    flex: 0 0 auto;
  }

  > main {
    flex: 1 0 auto;
    max-width: 80vw;
    margin: 0 auto;
    padding: 2rem 0;
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
    flex: 0 0 auto;
  }

  /* min font-size at 768 width */
  @media all and (max-width: 768px) {
    font-size: ${props => props.theme.mobileFontSize};
    /* start scaling content width */
    > main {
      max-width: none;
      /*  width: calc([minimum size] + ([maximum size] - [minimum size]) * ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width]))); */
      width: calc(304px + (614 - 304) * ((100vw - 320px) / (768 - 320)));
    }
  }

  /* max font-size at 1440 width */
  @media all and (min-width: 1024px) {
    font-size: ${props => props.theme.maxFontSize};
    > main {
      max-width: calc(1024px * 0.8);
    }
  }
`

// Default theme for Layouts that aren't wrapped in the ThemeProvider
/* Layout.defaultProps = {
  theme: {
    textColor: "red",
    backgroundColor: "lightblue",
    headerColor: "lightcoral",
  },
} */

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
  baseFontSize: "2.03vw",
  mobileFontSize: "1.13em",
  maxFontSize: "1.3em",
  baseLineHeight: "1.45",
  baseFontWeight: "400",
  boldFontWeight: "600",
  /* titles */
  titleFontSize: "150%",
  /* headings */
  headingFontSize: "109%",
  headingFontWeight: "600",
  headingLetterSpacing: "0.09em",
  headingTextTransform: "uppercase",
}

export default ({ children, ...other }) => (
  <WindowDimensionsProvider>
    <ThemeProvider theme={theme}>
      <Layout {...other}>
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
