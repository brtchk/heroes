import React, { Component } from 'react'
import Link from 'gatsby-link'
import injectSheet from 'react-jss'
import { Collapse } from 'react-collapse'

import Arrow from './Icons/Arrow'
import { colors, fonts, media } from '../theme'

const styles = {
  container: {
    fontSize: fonts.size.xs,
    borderTop: `2px solid ${colors.brown}`,
    marginBottom: 40,
    lineHeight: 1.3,
    [media.lessThan('small')]: {
      fontSize: fonts.size.xxs,
    },
  },
  question: {
    color: colors.brown,
  },
  questionContainer: {
    paddingTop: 10,
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
  },
  answer: {
    paddingTop: 30,
    maxWidth: 800,
    color: colors.brown,
  }
}

export class Question extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpened: false,
    }
  }

  handleOpen = () => {
    this.setState({ isOpened: !this.state.isOpened })
  }

  render() {
    const { classes, question, answer } = this.props
    const { isOpened } = this.state

    return (
      <div className={classes.container}>
        <div className={classes.questionContainer} onClick={this.handleOpen}>
          <p className={classes.question}>{question}</p>
          <Arrow
            width={20}
            color={colors.orange}
            style={{
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: isOpened ? 'rotate(180deg)' : 'none',
            }}
          />
        </div>
        <Collapse isOpened={isOpened}>
          <p
            className={classes.answer}
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        </Collapse>
      </div>
    )
  }
}

export default injectSheet(styles)(Question)
