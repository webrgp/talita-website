const { linkResolver } = require('./src/utils/linkResolver')

require('dotenv').config()

module.exports = {
  jsxRuntime: 'automatic',
  siteMetadata: {
    title: `Talita Camilo Professional Services`,
    description: `Our firm provides individuals, families, and small to medium size businesses in all industries and professions with quality, affordable, personalized tax and professional services in your area.`,
    author: `@talitacamilo`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#B41733`,
        theme_color: `#B41733`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        schemas: {
          blog_post: require('./src/schema/blog_post.json'),
          team_member: require('./src/schema/team_member.json'),
          testimonials: require('./src/schema/testimonials.json'),
          homepage: require('./src/schema/homepage.json'),
          services: require('./src/schema/services.json'),
          pages: require('./src/schema/pages.json'),
          about_us_page: require('./src/schema/about_us_page.json'),
          services_page: require('./src/schema/services_page.json'),
          about_us: require('./src/schema/about_us.json'),
          contact_page: require('./src/schema/contact_page.json'),
          main_nav: require('./src/schema/main_nav.json')
        },
        linkResolver
      }
    },
    {
      resolve: 'gatsby-plugin-prismic-previews',
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN
      }
    }
    // `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
