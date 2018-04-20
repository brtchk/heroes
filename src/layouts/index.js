import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import HeaderFixed from '../components/HeaderFixed'
import Footer from '../components/Footer'

import './reset.css'
import './index.css'

const Layout = ({ children, data, location }) => (
  <div className="fade">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    {
      location.pathname === '/'  ?
      <HeaderFixed siteTitle={data.site.siteMetadata.title} /> :
      <Header siteTitle={data.site.siteMetadata.title} />
    }
    <div>
      {children()}
    </div>
    <Footer />
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
