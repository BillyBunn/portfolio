/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  // Metadata ----------------------------------------
  siteMetadata: {
    title: `Billy Bunn`,
    siteUrl: `https://www.billybunn.github.io`,
    description: `Software Developer and former Public Accountant`,
  },

  // Plugins ----------------------------------------
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // Needed for gatsby-img
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    // Transformer plugin that can transform markdown files
    `gatsby-transformer-remark`,

    // Adds to HTML document <head />
    `gatsby-plugin-react-helmet`,
  ],
}
