module.exports = {
  siteMetadata: {
    title: 'Chris Colley - Web Developer',
    description:
      'My Web Developer Portfolio. More exciting content coming soon!',
    siteUrl: 'https://www.chriscolley.com.au', // No trailing slash allowed!
    image: '/og-image.png', // Path to your image you placed in the 'static' folder
    twitterUsername: '@chriscolleyau',
  },
  // pathPrefix: "/cc-portfolio",
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-MRCLBWJ",
        includeInDevelopment: false,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-5G5DWWPRD4",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/cc-portfolio-icon.jpg",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
      __key: "pages",
    },
  ],
};
