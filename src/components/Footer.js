import React, { Component } from 'react'
import Link from 'gatsby-link'
import injectSheet from 'react-jss'

import Phone from './Phone'
import Mail from './Mail'

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
    alignItems: 'baseline',
    justifyContent: 'space-between',
    maxWidth: dimensions.maxWidth,
    width: '100%',
    margin: '0 auto',
    fontSize: fonts.size.xs,
    [media.lessThan('large')]: {
      fontSize: fonts.size.xxs,
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding: `${dimensions.padding.horizontal}px`,
      margin: '0',
    },
  },
  smallText: {
    display: 'block',
    fontSize: fonts.size.xxxs,
    marginRight: 10,
  },
  left: {
    margin: 'auto 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    width: '70%',
    [media.lessThan('large')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: '100%',
    },
    '& p': {
      lineHeight: 1.5,
    },
  },
  right: {
    margin: 'auto 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [media.lessThan('large')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginTop: 30,
      lineHeight: 1.3,
    },
  },
  fb: {
    width: 45,
    [media.lessThan('large')]: {
      marginTop: 20,
      width: 30,
    },
  },
}


class Footer extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.bg}>
        <div className={classes.container}>
          <div className={classes.left}>
            <Phone />
            <Mail />
            <p>Москва, Конный переулок, 12</p>
          </div>
          <div className={classes.right}>
            <Link
              to="terms-of-payment"
              className={classes.smallText}
            >
              Условия оплаты
            </Link>
            <Link
              to="requisites"
              className={classes.smallText}>
                Реквизиты
            </Link>
            <a href="https://www.facebook.com/heroeslivehere/" target="_blank" rel="noopener noreferrer">
              <img src={fbIcon} className={classes.fb} />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(Footer)
