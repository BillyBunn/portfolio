import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const Projects = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  ${"" /* margin: 0px auto; */}
  > div {
    background: #d8d8d8;
    margin: 5px;
    padding: 10px;
    width: 150px;
    > img {
      max-width: 100%;
    }
  }
`

export default ({ data }) => {
  console.log("DATA", data)
  return (
    <Layout>
      <h2>Projects</h2>
      <Projects>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3>{node.frontmatter.title}</h3>
            <img src={node.frontmatter.image} alt={node.frontmatter.title} />
            <p>{node.frontmatter.description}</p>
            <a href={node.frontmatter.sourceCode}>GitHub</a>
          </div>
        ))}
      </Projects>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date
            description
            image
            sourceCode
          }
        }
      }
    }
  }
`
