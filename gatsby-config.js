const path = require("path")

module.exports = {
  // TODO: Add site metadata
  siteMetadata: {
    title: `Billy Bunn | Software Developer`,
    author: `Billy Bunn`,
    description: `A software developer based in Seattle, WA`,
    siteUrl: `https://billybunn.github.io`,
    social: {
      twitter: `billybunn`,
    },
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/projects`,
        name: `projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
