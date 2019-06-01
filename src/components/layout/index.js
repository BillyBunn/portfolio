import React from "react"
import styled from "styled-components"

import Header from "../header"
import Footer from "../footer"

const Layout = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
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
  }
  > footer {
    background: #d8d8d8;
    flex: 0 0 auto;
  }
`

export default ({ children }) => (
  <Layout>
    <Header />
    <main>{children}</main>
    <Footer />
  </Layout>
)
