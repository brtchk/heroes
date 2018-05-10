import React, { Component } from 'react'
import Link from 'gatsby-link'
import injectSheet from 'react-jss'

import Phone from './Phone'
import Mail from './Mail'
import Button from './Button'

import fbIcon from '../static/fb.png'

import { colors, fonts, dimensions, media } from '../theme'

const styles = {
  bg: {
    backgroundColor: '#f1f1f1',
    padding: '70px 50px',
    lineHeight: 1.4,
    color: colors.orange,
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    maxWidth: 700,
    margin: '0 auto',
    fontSize: fonts.size.m,
    [media.lessThan('large')]: {
      fontSize: fonts.size.xs,
    },
  },
  button: {
    margin: '30px auto 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 190,
    height: 60,
    fontSize: fonts.size.xs,
    backgroundColor: colors.orange,
    color: colors.white,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: colors.lightBlue,
    },
    '&:focus': {
      outline: 'none',
    },
    [media.lessThan('large')]: {
      fontSize: fonts.size.xxs,
      width: 160,
      height: 45,
    },
  }
}


class HaveQuestions extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.bg}>
        <div className={classes.container}>
          Остались вопросы? Звоните <Phone />  или задайте их тут:
          <a
            href="https://forms.amocrm.ru/trvcvv"
            className={classes.button}
          >
            Задать вопрос
          </a>
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(HaveQuestions)
