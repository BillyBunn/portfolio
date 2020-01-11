const path = require('path')
const siteConfig = require('./site-config')

module.exports = {
  siteMetadata: {
    ...siteConfig
  },
  plugins: [
    // Creates ImageSharp nodes from image types that are supported by the Sharp image processing library and provides fields in their GraphQL types for processing images in a variety of ways including resizing, cropping, and creating responsive images.
    `gatsby-transformer-sharp`,

    // Exposes several image processing functions built on the Sharp image processing library. A low-level helper plugin used by other Gatsby plugins.
    `gatsby-plugin-sharp`,

    // To support MDX content
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          // default layout to wrap MDX files in pages/ dir
          default: require.resolve('./src/components/Layout.js')
          // posts: require.resolve("./src/components/posts-layout.js"),
        },
        gatsbyRemarkPlugins: [
          // Makes any image in MDX files automatically handled by Gatsby image processing.
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 400,
              wrapperStyle: `margin-bottom: 1em;`
              // sizeByPixelDensity: true
            }
          }
          // TODO: Add syntax highlighting for code blocks with prismjs
          // https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/?=gatsby-remark-p
          // from blog starter
          // `gatsby-remark-prismjs`,

          // TODO: configure and confirm smart quote plugin works
          // `gatsby-remark-smartypants`
        ],
        // To fix bug with gatsby-remark-images and gatsby-plugin-mdx
        // https://github.com/gatsbyjs/gatsby/issues/15486
        plugins: [`gatsby-remark-images`]
      }
    },

    // Add a collection called "projects" that looks
    // for files in content/projects/
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/content/projects/`
      }
    },

    // So MDX files in `pages/` can references images via `../images/file-name.jpg`
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images/`
      }
    },

    // Provides Theme UI context, prevents FOUC when using color modes
    'gatsby-plugin-theme-ui',

    // For sourcing images into Gatsby application from local filesystem.
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`)
      }
    },

    // For sourcing project page content
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/projects`,
        name: `projects`
      }
    },

    // Provides drop-in support for server rendering data added with React Helmet
    'gatsby-plugin-react-helmet'

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    // TODO: Enable and submit sitemap
    // `gatsby-plugin-sitemap`,
  ]
}
