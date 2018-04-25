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
    fontSize: fonts.size.xxs,
    position: 'absolute',
    left: 20,
    top: 20,
    [media.lessThan('small')]: {
      fontSize: fonts.size.xxxs,
    },
  },
  infoChild: {
    marginLeft: 5,
    display: 'flex',
    alignItems: 'center',
  },
  infoText: {
    display: 'inline-block',
    marginRight: 25,
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
  classes, to, image, title, text, age, dates,
}) => (
  <Link to={to}>
    <div
      className={classes.container}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={classes.overlay}>
        <div className={classes.info}>
          <p className={classes.infoChild}>
            <Calendar className={classes.icon} />
            <span className={classes.infoText}>{dates}</span>
          </p>
          <p className={classes.infoChild}>
            <Age className={classes.icon} />
            <span className={classes.infoText}>{age}</span>
          </p>
        </div>
        <p className={classes.title}>{title}</p>
        <p className={`${classes.bottomBlock} ${classes.text}`}>{text}</p>
      </div>
    </div>
  </Link>
)

export default injectSheet(styles)(Card)
