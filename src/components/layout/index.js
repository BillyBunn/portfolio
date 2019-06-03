import React from "react"
import styled, { ThemeProvider } from "styled-components"

import Header from "../header"
import Footer from "../footer"

const Layout = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  background: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
  ${'' /* font-family: Helvetica, Arial, sans-serif; */}
  ${'' /* font-size: 1rem; */}
  ${'' /* line-height: calc(1rem * 1.5); */}
  line-height: 1.5;

  a,
  a:visited {
    color: inherit;
  }

  h1,
  h2 {
    ${'' /* font-size: 1.5rem; */}
    ${'' /* line-height: calc(1.5rem * 1.5); */}
  }

  > header > *,
  > main > *,
  > footer > * {
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
    > h2 {
      text-align: center;
    }
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
  <ThemeProvider theme={theme}>
    <Layout>
      <Header />
      <main>{children}</main>
      <Footer />
    </Layout>
  </ThemeProvider>
)
