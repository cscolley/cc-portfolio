module.exports = {
  siteMetadata: {
    title: 'Chris Colley - Web Developer',
    description:
      'Exciting content coming soon! Currently under construction.',
    siteUrl: 'https://www.chriscolley.com.au', // No trailing slash allowed!
    image: '/og-image1.png', // Path to your image you placed in the 'static' folder
    twitterUsername: '@chriscolleyau',
  },
  // pathPrefix: "/cc-portfolio",
  plugins: [
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
        icon: "src/images/cclogo-noborder60x20.png",
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
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
