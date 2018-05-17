module.exports = {
  siteMetadata: {
    title: 'Летний лагерь ГЕРОИ',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-jss',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/static/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: true,
          favicons: true,
          firefox: true,
          twitter: true,
          yandex: true,
          windows: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-yandex-metrika',
      options: {
        trackingId: '48533663',
        webvisor: true,
        trackHash: true,
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-117761804-1',
        head: false,
      },
    },
    {
      resolve: 'gatsby-plugin-facebook-pixel',
      options: {
        pixelId: '2060131047573963',
      },
    },
  ],
}
