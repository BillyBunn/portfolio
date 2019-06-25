import React from "react"
import { graphql } from "gatsby"
import { TabFilter, TabFilterItem } from "components/tab-filter"
import Layout from "components/layout"

export default props => {
  const { data } = props
  // const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  let edges = data.allMarkdownRemark.edges

  let allTags = edges
    .reduce((acc, edge, idx) => {
      let projectTags = edge.node.frontmatter.tags.split(", ")
      return acc.concat(projectTags)
    }, [])
    .filter((val, idx, arr) => arr.indexOf(val) === idx)

  return (
    <Layout>
      <h2>Look what I can do</h2>
      <p>
        Here's some of my work. You can click on the title to read more details
        about the project or view the source code.
      </p>
      <TabFilter tags={allTags}>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const description = node.frontmatter.description || node.excerpt
          const tags = node.frontmatter.tags.split(", ")
          const path = "/" + node.fields.collection + node.fields.slug
          return (
            <TabFilterItem
              title={title}
              link={path}
              tags={tags}
              key={path}
            >
              {description}
            </TabFilterItem>
          )
        })}
      </TabFilter>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { collection: { eq: "projects" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            path
            collection
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            source
            tags
          }
        }
      }
    }
  }
`
