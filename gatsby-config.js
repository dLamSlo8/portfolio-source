/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
      title: 'Derek Lam | Frontend Developer Portfolio'
  },
  plugins: [
      {
          resolve: 'gatsby-source-filesystem',
          options: {
              name: 'projects',
              path: `${__dirname}/src/content/projects`
          }
      },
      'gatsby-transformer-remark',
      'gatsby-plugin-sass',
      'gatsby-plugin-svgr',
      {
          resolve: 'gatsby-plugin-postcss',
          options: {
              postCssPlugins: [require('autoprefixer')]
          }
      },
      {
          resolve: 'gatsby-plugin-layout',
          options: {
              component: require.resolve('./src/components/Layout.jsx')
          }
      }
  ],
}
