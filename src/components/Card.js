import React from 'react'
import Link from 'gatsby-link'
import injectSheet from 'react-jss'

import Calendar from './Icons/Calendar'
import Age from './Icons/Age'

import { colors, fonts, media } from '../theme'

const styles = {
  container: {
    width: 490,
    height: 330,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginBottom: 24,
    [media.lessThan('large')]: {
      width: '100%',
    },
    [media.lessThan('small')]: {
      height: 420,
    },
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    width: '100%',
    height: '100%',
    color: colors.white,
    padding: 20,
    position: 'relative',
    display: 'flex',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    }
  },
  title: {
    textAlign: 'center',
    fontSize: fonts.size.l,
    margin: 'auto',
    maxWidth: '90%',
    [media.lessThan('small')]: {
      fontSize: fonts.size.m,
    },
  },
  text: {
    width: '85%',
    lineHeight: 1.3,
    textAlign: 'center',
    margin: 'auto',
  },
  info: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: fonts.size.xxs,
    width: '90%',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    top: 20,
    [media.lessThan('small')]: {
      fontSize: fonts.size.xxxs,
      flexDirection: 'column',
    },
  },
  infoChild: {
    display: 'flex',
    alignItems: 'center',
    [media.lessThan('small')]: {
      margin: '8px 0',
    },
  },
  infoText: {
    display: 'inline-block',
    marginRight: 25,
  },
  sold: {
    textAlign: 'center',
    backgroundColor: colors.white,
    color: colors.orange,
    borderRadius: 20,
    padding: '5px 20px 7px',
    textWrap: 'none',
  },
  price: {
    width: 150,
    textAlign: 'center',
    backgroundColor: colors.orange,
    color: colors.white,
    borderRadius: 20,
    padding: '5px 20px 7px',
    [media.lessThan('small')]: {
      width: 140,
    },
  },
  icon: {
    marginRight: 10,
    [media.lessThan('small')]: {
      maxHeight: 20,
      marginRight: 7,
    },
  },
  bottomBlock: {
    fontSize: fonts.size.xxs,
    display: 'flex',
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 30,
    left: '50%',
    transform: 'translateX(-50%)',
    [media.lessThan('small')]: {
      fontSize: fonts.size.xxxs,
    },
  },
}

const Card = ({
  classes, path, image, title, text, age, date, price, sold,
}) => (
  <Link to={path}>
    <div
      className={classes.container}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={classes.overlay}>
        <div className={classes.info}>
          <div className={classes.infoChild}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Calendar className={classes.icon} />
              <span className={classes.infoText}>{date}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Age className={classes.icon} />
              <span className={classes.infoText}>{age}</span>
            </div>
          </div>
          <div className={classes.infoChild}>
            {sold && <p className={classes.sold}>Распродано!</p>}
            {!sold && <p className={classes.price}>{price} рубей</p>}
          </div>
        </div>
        <p className={classes.title}>{title}</p>
        <p className={`${classes.bottomBlock} ${classes.text}`}>{text}</p>
      </div>
    </div>
  </Link>
)

export default injectSheet(styles)(Card)
