import React from 'react'
import Link from 'gatsby-link'
import injectSheet from 'react-jss'

import { colors, fonts, media } from '../theme'

const styles = {
  container: {
    maxWidth: 305,
    [media.lessThan('medium')]: {
      marginBottom: 50,
    },
    [media.lessThan('small')]: {
      maxWidth: '100%',
    },
  },
  image: {
    maxHeight: 100,
    [media.lessThan('medium')]: {
      maxHeight: 70,
    },
  },
  hightlight: {
    color: colors.orange,
  },
  text: {
    fontSize: fonts.size.xs,
    color: colors.brown,
    lineHeight: 1.3,
    marginTop: 30,
    [media.lessThan('small')]: {
      fontSize: fonts.size.xxs,
    },
    [media.lessThan('large')]: {
      padding: '0 20px',
    },
  }
}

const Thesis = ({ classes, image, hightlight, text }) => (
  <div className={classes.container}>
    <img className={classes.image} src={image} />
    <p className={classes.text}>
      <span className={classes.hightlight}>{hightlight}</span>
      {text}
    </p>
  </div>
)

export default injectSheet(styles)(Thesis)
