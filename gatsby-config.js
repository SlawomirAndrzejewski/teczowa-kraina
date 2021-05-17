module.exports = {
  siteMetadata: {
    title: `Poradnia Psychologiczno-Pedagogiczna Tęczowa Kraina`,
    description: `Niepubliczna Specjalistyczna Poradnia Psychologiczno-Pedagogiczna "Tęczowa Kraina" w Ciechanowie`,
    siteUrl: `https://teczowa-kraina.eu`,
    keywords: `szkoła, poradnia`,
    author: `owdesign.pl`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
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
        icon: `src/images/gatsby-icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
