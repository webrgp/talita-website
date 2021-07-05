require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Talita Camilo Professional Services`,
    description: `Our firm provides individuals, families, and small to medium size businesses in all industries and professions with quality, affordable, personalized tax and professional services in your area.`,
    author: `@talitacamilo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
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
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'talita-camilo-website',
        accessToken: process.env.PRISMIC_ACCESSTOKEN,

        // See: https://prismic.io/docs/javascript/query-the-api/link-resolving
        linkResolver: ({ node, key, value }) => (doc) => {
          // Your link resolver
        },

        // See: https://prismic.io/docs/javascript/query-the-api/fetch-linked-document-fields
        fetchLinks: [
          // Your list of links
        ],

        // See: https://prismic.io/docs/nodejs/beyond-the-api/html-serializer
        htmlSerializer: ({ node, key, value }) => (
          type,
          element,
          content,
          children,
        ) => {
          // Your HTML serializer
        },

        // Provide an object of Prismic custom type JSON schemas to load into
        // Gatsby. This is required.
        schemas: {
          blog_post: require('./src/schema/blog_post.json'),
          team_member: require('./src/schema/team_member.json'),
          testimonial: require('./src/schema/testimonial.json'),
        },

        // See: https://prismic.io/docs/javascript/query-the-api/query-by-language
        lang: '*',

        // See: https://prismic.io/docs/rest-api/beyond-the-api/the-preview-feature
        prismicToolbar: true,

        // Set a function to determine if images are downloaded locally and made
        // available for gatsby-transformer-sharp for use with gatsby-image.
        // The document node, field key (i.e. API ID), and field value are
        // provided to the function, as seen below. This allows you to use
        // different logic for each field if necessary.
        // This defaults to always return false.
        shouldDownloadImage: ({ node, key, value }) => {
          // Return true to download the image or false to skip.
        },

        // Provide a default set of Imgix image transformations applied to
        // Imgix-backed gatsby-image fields. These options will override the
        // defaults set by Prismic.
        // See: https://docs.imgix.com/apis/url
        imageImgixParams: {
          auto: 'compress,format',
          fit: 'max',
          q: 50,
        },

        // Provide a default set of Imgix image transformations applied to
        // the placeholder images of Imgix-backed gatsby-image fields. These
        // parameters will be applied over those provided in the above
        // `imageImgixParams` option.
        // See: https://docs.imgix.com/apis/url
        imagePlaceholderImgixParams: {
          w: 100,
          blur: 15,
          q: 50,
        },

        // Set the prefix for the filename where type paths for your schemas are
        // stored. The filename will include the MD5 hash of your schemas after
        // the prefix.
        // This defaults to 'prismic-typepaths---${repositoryName}'.
        typePathsFilenamePrefix:
          'prismic-typepaths---talita-camilo-website',
      },
    },
    // `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
