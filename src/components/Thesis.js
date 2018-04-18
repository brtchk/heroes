import React from 'react'
import Link from 'gatsby-link'
import injectSheet from 'react-jss'

import { colors, fonts } from '../theme'

const styles = {
  container: {
    maxWidth: 305,
  },
  image: {
    maxHeight: 100,
  },
  hightlight: {
    color: colors.orange,
  },
  text: {
    fontSize: fonts.size.xs,
    color: colors.brown,
    lineHeight: 1.3,
    marginTop: 30,
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
