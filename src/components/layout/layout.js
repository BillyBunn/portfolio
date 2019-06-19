import React from "react"
import GlobalStyle from "global.css.js"
import Layout from "./layout.css"
import Head from "components/head"
import Header from "components/header"
import Footer from "components/footer"

export default ({ children }) => (
  <Layout>
    <Head />
    <GlobalStyle />
    <Header breakPoint={720} />
    <main>{children}</main>
    <Footer />
  </Layout>
)
