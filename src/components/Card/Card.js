import React from 'react'
import Link from 'gatsby-link'
import injectSheet from 'react-jss'

import { colors, fonts } from '../../theme'

const styles = {
  container: {
    width: 500,
    height: 330,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
    color: colors.white,
    padding: 20,
    position: 'relative',
  },
  title: {
    textAlign: 'center',
    fontSize: fonts.size.l,
    maxWidth: '80%',
    margin: '15px auto',
  },
  text: {
    lineHeight: 1.3,
    width: '55%',
  },
  info: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-around',
    fontSize: fonts.size.xxs,
  },
  bottomBlock: {
    fontSize: fonts.size.xxs,
    display: 'flex',
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 20,
  },
  button: {
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 180,
    width: 180,
    height: 45,
    fontSize: fonts.size.xs,
    backgroundColor: colors.orange,
    color: colors.white,
    '&:hover': {
      backgroundColor: colors.lightBlue,
      borderColor: 'transparent',
    },
  },
}

const Card = ({
  classes, image, title, text, age, dates,
}) => (
  <div
    className={classes.container}
    style={{ backgroundImage: `url(${image})` }}
  >
    <div className={classes.overlay}>
      <div className={classes.info}>
        <p>{age}</p>
        <p>{dates}</p>
      </div>
      <p className={classes.title}>{title}</p>
      <div className={classes.bottomBlock}>
        <p className={classes.text}>{text}</p>
        <Link
          to="/"
          className={classes.button}
        >
          Подробнее
        </Link>
      </div>
    </div>
  </div>
)

export default injectSheet(styles)(Card)
