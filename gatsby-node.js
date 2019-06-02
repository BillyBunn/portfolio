const path = require(`path`)

// Helper function from gatsby-source-filesystem
const { createFilePath } = require(`gatsby-source-filesystem`)

// Function called by Gatsby whenever a new node is created (or updated)
// https://www.gatsbyjs.org/docs/node-apis/#onCreateNode
exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === `MarkdownRemark`) {
    // https://www.gatsbyjs.org/docs/actions/
    const { createNodeField } = actions

    // Generates a "slug"—the file path for the new page
    const slug = createFilePath({
      // The node being converted to a path
      node,
      // Method used to get a node; parameter from `onCreateNode` passed in here
      getNode,
      // The base path for files. Defaults to `src/pages`
      basePath: `pages`,
    })
    console.log("SLUG:", slug)

    // Adds the slug to the file node
    // https://www.gatsbyjs.org/docs/actions/#createNode
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

// The createPages API is called by Gatsby so plugins can add pages.
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // **Note:** The graphql function call returns a Promise
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            parent {
              ... on File {
                relativeDirectory
              }
            }
          }
        }
      }
    }
  `).then(result => {
    console.log(JSON.stringify(result, null, 4))
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      console.log("NODE SLUG:", node.fields.slug)
      console.log("NODE PARENT:", node.parent.relativeDirectory)

      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/project.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    })
  })
}
