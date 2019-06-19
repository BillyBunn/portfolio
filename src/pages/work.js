import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "components/layout"

const Projects = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  ${"" /* justify-content: center; */}
  ${"" /* margin: 0px auto; */}
  > div {
    background: rgba(32, 32, 32, 0.1);
    border-radius: 8px;
    margin: 5px;
    width: 250px;
    padding: 10px;
    > h3 {
      text-align: center;
    }
    > img {
      max-width: 100%;
      margin: 2px auto;
    }
  }
`

export default ({ data }) => {
  console.log("DATA", data)
  return (
    <Layout>
    <h2>Look what I can do</h2>
    <p>Here's some of my work. You can click on the title to read more details about the project or view the source code.</p>
      <Projects>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            </h3>
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
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//src/pages/work//" } }
    ) {
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
          fields {
            slug
          }
        }
      }
    }
  }
`
