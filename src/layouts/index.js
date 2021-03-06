import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header/Header'
import Popup from '../components/Popup'
import Footer from '../components/Footer'
import HaveQuestions from '../components/HaveQuestions'
import fbGraph from '../static/fb-graph.png'
import dimensions from '../theme'

import './reset.css'
import './index.css'

const Layout = ({ children, data, location }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Территория раскрытия возможностей' },
        { name: 'keywords', content: 'heroes, camp, heroescamp' },
        { name: 'og:image', content: fbGraph },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ]}
    />
    <Header
      siteTitle={data.site.siteMetadata.title}
      fixed={location.pathname === '/'}
    />
    <div>
      {children()}
    </div>
    <HaveQuestions />
    <Footer />
    <Popup />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
