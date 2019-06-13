import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"
import Layout from "../components/layout"
// import Image from "../components/image"

const IndexLayout = styled(Layout)`
  > main {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    margin-bottom: 20vw;
    > h1 {
      font-size: calc(2.7em + (6 - 2.7) * ((100vw - 320px) / (1024 - 320)));
      text-transform: none;
      > span {
        color: #2dd5c9;
        font-size: 110%;
        text-transform: uppercase;
        white-space: nowrap;
      }
    }
  }
`

export default ({ data }) => {
  console.log("DATA:", data)
  return (
    <IndexLayout>
      {/* <Img fixed={data.file.childImageSharp.fixed} /> */}
      {/* <Image /> */}
      <Img fixed={data.file.childImageSharp.fluid} />

      <h1>
        Hello, I'm <span>Billy Bunn</span>
      </h1>
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

export const query = graphql`
  query {
    file(relativePath: { eq: "images/headshot-bw.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
