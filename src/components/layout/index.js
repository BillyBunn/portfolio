import React from "react"
import { Helmet } from "react-helmet"
import styled, { ThemeProvider } from "styled-components"

import WindowDimensionsProvider from "../WindowDimensionsProvider"
import Header from "../header"
import Footer from "../footer"

const Layout = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  background: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
  ${"" /* font-family: Helvetica, Arial, sans-serif; */}
  ${"" /* font-size: 1rem; */}
  ${"" /* line-height: calc(1rem * 1.5); */}
  line-height: 1.5;

  a,
  a:visited {
    color: inherit;
  }

  h1,
  h2 {
    ${"" /* font-size: 1.5rem; */}
    ${"" /* line-height: calc(1.5rem * 1.5); */}
  }

  ${"" /* > header > *, */}
  > main > div,
  > footer > ul {
    margin: 0px auto;
    max-width: 960px;
    width: 100%;
  }

  > header {
    background: #d8d8d8;
    flex: 0 0 auto;
  }

  > main {
    flex: 1 0 auto;
  }

  > footer {
    background: ${props => props.theme.footerColor};
    flex: 0 0 auto;
  }
`

// We are passing a default theme for Layouts that arent wrapped in the ThemeProvider
// Layout.defaultProps = {
//   theme: {
//     textColor: "red",
//     backgroundColor: "lightblue",
//     footerColor: "lightcoral",
//   },
// }

// Define what props.theme will look like
const theme = {
  textColor: "#202020",
  backgroundColor: "#f5f5f5",
  footerColor: "#d8d8d8",
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
