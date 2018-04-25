import React from 'react'
import Link from 'gatsby-link'
import injectSheet from 'react-jss'

import { colors, fonts, media } from '../theme'

const styles = {
  container: {
    maxWidth: 242,
    marginBottom: 40,
    [media.lessThan('small')]: {
      maxWidth: '45% !important',
    },
  },
  image: {
    width: '100%',
    marginBottom: 20,
  },
  name: {
    fontSize: fonts.size.xs,
    marginBottom: 5,
  },
  desc: {
    fontSize: fonts.size.xxs,
    lineHeight: 1.3,
  },
}

const Member = ({ classes, style, image, name, desc }) => (
  <div
    className={classes.container}
    style={style}
  >
    <img className={classes.image} src={image} />
    <p className={classes.name}>{name}</p>
    <p className={classes.desc}>{desc}</p>
  </div>
)

export default injectSheet(styles)(Member)
