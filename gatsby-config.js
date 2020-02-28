module.exports = {
    siteMetadata: {
        "title": "calendar-widget",
        "description": "calendar widget for gatsby react"
    },
    plugins:[
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sass",
        {
          resolve: `gatsby-plugin-manifest`,
          options: {
            name: `GatsbyJS`,
            short_name: `GatsbyJS`,
            start_url: `/`,
            background_color: `#f7f0eb`,
            theme_color: `#a2466c`,
            display: `standalone`,
          },
        },
        `gatsby-plugin-offline`,
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            name: "eventposts",
            path: "eventposts"
          }
        },
        {
        resolve: 'gatsby-plugin-mdx',
        options: {
          defaultLayouts: {
            default: require.resolve('./src/components/templates/day-layout.js'),
          },
          // gatsbyRemarkPlugins: ['gatsby-remark-images'],
          // plugins: ['gatsby-remark-images'],
        },
      }]
}