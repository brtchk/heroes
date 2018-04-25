import React from 'react'
import Link from 'gatsby-link'
import injectSheet from 'react-jss'

import fbIcon from '../static/fb.png'

import { colors, fonts, dimensions, media } from '../theme'

const styles = {
  bg: {
    backgroundColor: colors.lightBlue,
    color: colors.black,
    width: '100%',
    zIndex: 1,
  },
  container: {
    minHeight: 125,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: dimensions.maxWidth,
    width: '100%',
    margin: '0 auto',
    fontSize: fonts.size.xs,
    [media.lessThan('small')]: {
      fontSize: fonts.size.xxs,
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding: `${dimensions.padding.horizontal}px`,
      margin: '0',
    },
  },
  left: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '75%',
    [media.lessThan('small')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: '100%',
    },
    '& p': {
      lineHeight: 1.5,
    },
  },
  right: {
    [media.lessThan('small')]: {
      marginTop: 30,
    },
  },
  fb: {
    width: 45,
    [media.lessThan('small')]: {
      width: 30,
    },
  },
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
          <img src={fbIcon} className={classes.fb} />
        </a>
      </div>
    </div>
  </div>
)

export default injectSheet(styles)(Footer)
