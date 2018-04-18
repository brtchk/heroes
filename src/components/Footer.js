import React from 'react'
import Link from 'gatsby-link'
import injectSheet from 'react-jss'

import fbIcon from '../static/fb.png'

import { colors, fonts, dimensions } from '../theme'

const styles = {
  bg: {
    backgroundColor: colors.lightBlue,
    color: colors.black,
    width: '100%',
    zIndex: 1,
  },
  container: {
    minHeight: 125,
    marginTop: 75,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: dimensions.maxWidth,
    margin: '0 auto',
    fontSize: fonts.size.xs,
  },
  left: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '75%',
  }
}

const Footer = ({ classes }) => (
  <div className={classes.bg}>
    <div className={classes.container}>
      <div className={classes.left}>
        <p>+7 499 450 56 06</p>
        <p>hello@heroescamp.ru</p>
        <p>Москва, Конный переулок, 12</p>
      </div>
      <div className={classes.right}>
        <a href="https://www.facebook.com/heroeslivehere/" target="_blank" rel="noopener noreferrer">
          <img src={fbIcon} width={45} />
        </a>
      </div>
    </div>
  </div>
)

export default injectSheet(styles)(Footer)
