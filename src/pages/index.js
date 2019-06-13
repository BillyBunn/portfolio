import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"
import Layout from "../components/layout"

const IndexLayout = styled(Layout)`
  > main {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    margin-bottom: 20vw;
    > h1 {
      font-size: calc(2.5em + (6 - 2.5) * ((100vw - 320px) / (1024 - 320)));
    }
  }
`

const Header = styled.h1`
  ${"" /* background: turquoise; */}
  font-size: 30vw;
`
export default () => {
  return (
    <IndexLayout>
      <h1>Hello, I'm Billy Bunn</h1>
      <p>
        I'm a Software Developer who left a career in finance to pursue my
        passion for code.
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
    </IndexLayout>
  )
}
