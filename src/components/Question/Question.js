import React from 'react'
import Link from 'gatsby-link'
import injectSheet from 'react-jss'

import { colors, fonts } from '../../theme'

const styles = {
  container: {
    fontSize: fonts.size.xs - 2,
    marginBottom: 40,
  },
  question: {
    color: colors.orange,
    paddingLeft: 60,
  },
  answer: {
    color: colors.brown,
    lineHeight: 1.3,
    marginTop: 20,
  }
}

const Thesis = ({ classes, question, answer }) => (
  <div className={classes.container}>
    <p className={classes.question}>{question}</p>
    <p className={classes.answer}>{answer}</p>
  </div>
)

export default injectSheet(styles)(Thesis)
