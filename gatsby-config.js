module.exports = {
  siteMetadata: {
    title: `PDX Tip Jar`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@noahmanger`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-163910783-1",
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
};
