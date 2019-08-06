const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

const { createFilePath } = require(`gatsby-source-filesystem`);

// Create pages from markdown files ------------------------------
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
                collection
                path
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }
    const allEdges = result.data.allMarkdownRemark.edges;

    // Project pages
    const projectPages = allEdges.filter(
      edge => edge.node.fields.collection === `projects`
    );

    projectPages.forEach((page, index) => {
      const previous =
        index === projectPages.length - 1 ? null : projectPages[index + 1].node;
      const next = index === 0 ? null : projectPages[index - 1].node;
      const filePath = page.node.fields.path;
      createPage({
        path: filePath,
        component: path.resolve(`./src/templates/project-page.js`),
        context: {
          slug: page.node.fields.slug,
          collection: page.node.fields.collection,
          previous,
          next,
        },
      });
    });

    // Non-project pages
    const pageEdges = allEdges.filter(
      edge => edge.node.fields.collection === `src`
    );
    pageEdges.forEach(page => {
      createPage({
        path: page.node.fields.slug,
        component: path.resolve('./src/templates/page.js'),
        context: {
          slug: page.node.fields.slug,
        },
      });
    });

    return null;
  });
};

// Create nodes with fields for all markdown files -------------------
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const parentFolder = getNode(node.parent).sourceInstanceName;
    console.log('JUNK:', getNode(node.parent).relativeDirectory);

    // console.log('JUNK:', getNode(node.parent).absolutePath, '\n', {parentFolder});

    const slug =
      parentFolder === `projects`
        ? createFilePath({ node, getNode })
        : createFilePath({ node, getNode, basePath: `pages` });

    createNodeField({
      name: `slug`,
      node,
      value: slug,
    });

    createNodeField({
      name: `collection`,
      node,
      value: parentFolder,
    });

    const path = parentFolder + slug;
    createNodeField({
      name: `path`,
      node,
      value: path,
    });
  }
};

exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      plugins: [
        new DirectoryNamedWebpackPlugin({
          exclude: /node_modules/,
        }),
      ],
    },
  });
};
