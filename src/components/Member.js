import React from 'react'
import Link from 'gatsby-link'
import injectSheet from 'react-jss'

import { colors, fonts } from '../theme'

const styles = {
  container: {
    maxWidth: 190,
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

const Member = ({ classes, image, name, desc }) => (
  <div className={classes.container}>
    <img className={classes.image} src={image} />
    <p className={classes.name}>{name}</p>
    <p className={classes.desc}>{desc}</p>
  </div>
)

export default injectSheet(styles)(Member)
