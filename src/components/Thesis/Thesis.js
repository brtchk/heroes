import React from 'react'
import Link from 'gatsby-link'
import injectSheet from 'react-jss'

import { colors, fonts } from '../../theme'

const styles = {
  container: {
    textAlign: 'center',
    maxWidth: 285,
  },
  image: {
    maxWidth: 120,
  },
  text: {
    fontSize: fonts.size.xs,
    color: colors.brown,
    lineHeight: 1.3,
    marginTop: 30,
  }
}

const Thesis = ({ classes, image, text }) => (
  <div className={classes.container}>
    <img className={classes.image} src={image} />
    <p className={classes.text}>{text}</p>
  </div>
)

export default injectSheet(styles)(Thesis)
