module.exports = {
    siteMetadata: {
        "title": "calendar-widget",
        "description": "calendar widget for gatsby react"
    },
    plugins:[
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sass",
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