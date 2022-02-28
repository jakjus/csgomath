module.exports = {
  siteMetadata: {
    title: `csgomath`,
    siteUrl: `https://csgomath.com`,
    description: `Updated Counter-Strike: Global Offensive Case profit statistics and more!`,
    author: `jakjus`
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    `gatsby-plugin-image`,
    "gatsby-transformer-sharp",
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-T8XVHK5",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      }
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-7655503975038311`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `csgomath`,
        short_name: `csgomath`,
        start_url: `/`,
        background_color: `#fafafa`,
        theme_color: `#fafafa`,
        display: `standalone`,
        icon: `src/images/icon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-react-helmet`
  ]
};
