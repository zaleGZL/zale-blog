module.exports = {
  siteMetadata: {
    title: 'ZALE',
    description: "ZALE's blog",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: 'posts',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-katex',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-prismjs',
        ],
      },
    },
    `gatsby-plugin-catch-links`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ZALE's Blog`,
        short_name: `ZALE`,
        start_url: `/`,
        background_color: `#3273dc`,
        theme_color: `#3273dc`,
        display: `fullscreen`,
        icon: `src/assets/zale-icon.png`,
        legacy: true,
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-netlify`,
  ],
}
