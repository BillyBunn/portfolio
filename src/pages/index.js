import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"
import Layout from "components/layout"
// import Image from "../components/image"

const IndexLayout = styled(Layout)`
  > main {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    margin-bottom: 10vw;
    div {
      align-items: center;
      display: flex;
      flex-flow: row nowrap;
      margin-bottom: 1rem;
      > div {
        border-radius: 50%;
        flex: 1;
      }
      > h1 {
        flex: 2;
        font-size: calc(2.7em + (6 - 2.7) * ((100vw - 320px) / (1024 - 320)));
        line-height: 1.2;

        margin-left: 3rem;
        text-transform: none;
        > span {
          color: #2dd5c9;
          font-size: 110%;
          text-transform: uppercase;
          white-space: nowrap;
        }
      }
      @media all and (max-width: 768px) {
        flex-flow: column nowrap;
        > div {
          flex: 1;
          min-height: 30vw;
          min-width: 30vw;
        }
        > h1 {
          flex: 4;
          line-height: 1;
          margin-left: 1rem;
          text-align: center;
        }
      }
    }
  }
`

export default props => {
  // console.log("DATA:", props.data)
  return (
    <IndexLayout>
      <div>
        {/* <Img fluid={props.data.imageOne.childImageSharp.fluid} /> */}
        <h1>
          Hello, I'm <span>Billy Bunn</span>
        </h1>
      </div>
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

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "headshot-bw.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
