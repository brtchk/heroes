import React, { Component } from 'react'
import Link from 'gatsby-link'
import injectSheet from 'react-jss'

import Phone from './Phone'
import Mail from './Mail'

import fbIcon from '../static/facebook.svg'
import ytIcon from '../static/youtube.svg'

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
    fontSize: fonts.size.xxs,
    [media.lessThan('large')]: {
      fontSize: fonts.size.xxxs,
      flexDirection: 'column',
      alignItems: 'flex-start',
      lineHeight: 3,
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
    width: '55%',
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
  yt: {
    width: 40,
    [media.lessThan('large')]: {
      marginTop: 20,
      width: 26,
      marginLeft: 0,
      marginRight: 3,
    },
  },
  fb: {
    width: 30,
    marginLeft: 20,
    [media.lessThan('large')]: {
      marginTop: 20,
      width: 19,
      marginLeft: 10,
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

            <div style={{ display: 'flex' }}>
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
            </div>
            <div>
              <a href="https://www.youtube.com/channel/UCdAhIq6cS34Kki9NKkmQRew" target="_blank" rel="noopener noreferrer">
                <img src={ytIcon} className={classes.yt} />
              </a>
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
