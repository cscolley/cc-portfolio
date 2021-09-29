module.exports = {
  siteMetadata: {
    title: 'Chris Colley - Web Developer',
    description:
      'Chris Colley Web Developer Portfolio. More exciting content coming soon!',
    siteUrl: 'https://www.chriscolley.com.au', // No trailing slash allowed!
    image: '/og-image.png', // Path to your image you placed in the 'static' folder
    twitterUsername: '@chriscolleyau',
    keywords: 'portfolio, web developer, react, javascript, aws, cloud',
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
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.chriscolley.com.au',
        sitemap: 'https://www.chriscolley.com.au/sitemap/sitemap-0.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'ChrisColley',
        short_name: 'ChrisColley',
        start_url: '/',
        background_color:"#0d1163",
        theme_color: "#0d1163",
        display: 'minimal-ui',
        icon: 'src/images/cc-portfolio-icon.png',
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
