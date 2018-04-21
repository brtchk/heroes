import React from 'react'
import Link from 'gatsby-link'
import injectSheet from 'react-jss'

import { colors, fonts } from '../theme'

const styles = {
  container: {
    fontSize: fonts.size.xs,
    marginBottom: 40,
    lineHeight: 1.3,
  },
  question: {
    color: colors.orange,
    paddingLeft: 40,
    maxWidth: 440,
  },
  answer: {
    color: colors.brown,
  }
}

const Point = ({ classes, question, answer }) => (
  <div className={classes.container}>
    <p className={classes.question}>{question}</p>
    <p
      className={classes.answer}
      dangerouslySetInnerHTML={{ __html: answer }}
    />
  </div>
)

export default injectSheet(styles)(Point)
