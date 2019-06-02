import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const BlogPosts = styled.div`
  > div {
    background: #d8d8d8;
    display: grid;
    grid-template-columns: 20vw 1fr;
    > * {
      border: 1px solid black;
    }
    > img {
      max-width: 150px;
    }
  }
`

export default ({ data }) => {
  console.log("DATA", data)
  return (
    <Layout>
      <h2>Thoughts</h2>
      <BlogPosts>
        <div>
          <h3>Date</h3>
          <h3>Title</h3>
        </div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <p>{node.frontmatter.date}</p>
            <div>
              <h3>{node.frontmatter.title}</h3>
              <p>{node.frontmatter.description}</p>
            </div>
          </div>
        ))}
      </BlogPosts>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//src/pages/blog-posts//" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
            description
            image
          }
        }
      }
    }
  }
`
