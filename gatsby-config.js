module.exports = {
  siteMetadata: {
    title: 'Летний лагерь ГЕРОИ',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-jss',
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        mergeSecurityHeaders: false,
        headers: {
          "/*": [
            "X-Frame-Options: ALLOW-FROM='https?://([^/]+\.)?<heroescamp\.ru>|([^/]+\.)?webvisor\.com/'",
            "X-XSS-Protection: 1; mode=block",
            "X-Content-Type-Options: nosniff",
          ],
        },
      },
    },
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './_data',
      },
    },
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
