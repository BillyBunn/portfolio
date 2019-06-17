import React from "react"
import { Link } from "gatsby"
import Layout from "components/layout"

export default () => (
  <Layout>
      <h1>
        Hello, I'm <span>Billy Bunn</span>
      </h1>
    <p>
      I'm a Software Developer who left a career in finance to pursue my passion
      for code.
    </p>
    <p>
      I build front-end and full-stack applications with modern tools and
      libraries.
    </p>
    <p>
      Learn more <Link to="/about">about me</Link>, see{" "}
      <Link to="/work">my work</Link>, or{" "}
      <Link to="/contact">get in touch.</Link>
    </p>
  </Layout>
)
