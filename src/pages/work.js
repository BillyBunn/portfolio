import React from "react"
import { graphql } from "gatsby"
import { TabFilter, TabFilterItem } from "components/tab-filter"
import Layout from "components/layout"

export default props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  let edges = data.allMarkdownRemark.edges

  let tagSet = edges
    .reduce((acc, edge, idx) => {
      let projectTags = edge.node.frontmatter.tags.split(", ")
      // console.log(projectTags)
      return acc.concat(projectTags)
    }, [])
    .filter((val, idx, arr) => arr.indexOf(val) === idx)
  // console.log("tagSet", tagSet)

  return (
    <Layout>
      <h2>Look what I can do</h2>
      <p>
        Here's some of my work. You can click on the title to read more details
        about the project or view the source code.
      </p>
      <TabFilter tags={[...tagSet]}>
        {posts.map(({ node }, idx) => {
          const title = node.frontmatter.title || node.fields.slug
          const description = node.frontmatter.description || node.excerpt
          const tags = node.frontmatter.tags.split(", ")
          {
            /* console.log("tags", tags) */
          }
          return (
            <TabFilterItem title={title} tags={tags} key={idx}>
              {description}
            </TabFilterItem>
          )
        })}
        {/* <TabFilterItem tags={["React"]} title={"React Only Project"}>
        <p>Some content in here perhaps</p>
      </TabFilterItem>

      <TabFilterItem
        tags={["React", "Express"]}
        title={"React & Express Project"}
      >
        <p>Some content in here perhaps</p>
      </TabFilterItem>

      <TabFilterItem tags={["Express"]} title={"Express Only Project"}>
        <p>Some content in here perhaps</p>
      </TabFilterItem>

      <TabFilterItem tags={["VanillaJS"]} title={"VanillaJS Only Project"}>
        <p>Some content in here perhaps</p>
      </TabFilterItem>

      <TabFilterItem title={"Project With No Tags"}>
        <p>Some content in here perhaps</p>
      </TabFilterItem> */}
      </TabFilter>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`
