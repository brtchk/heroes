import React, { Component } from 'react'
import Link from 'gatsby-link'
import injectSheet from 'react-jss'

import Button from '../components/Button'
import AgeIcon from '../components/Icons/Age'
import CalendarIcon from '../components/Icons/Calendar'
import TimeIcon from '../components/Icons/Time'

import {
  getFormData,
  handleFormSubmit as submitForm
} from '../helpers/google-form'

import { colors, fonts, dimensions, media } from '../theme'

const styles = {
  applyInfoContainer: {
    display: 'flex',
    marginBottom: 20,
    [media.lessThan('small')]: {
      flexDirection: 'column',
    },
  },
  applyInfoChild: {
    display: 'flex',
    alignItems: 'center',
    margin: '8px 0',
    marginRight: 30,
  },
  applyInfoText: {
    display: 'inline-block',
    marginLeft: 10,
  },
  privacyText: {
    marginTop: 20,
    fontSize: fonts.size.xxs,
    color: colors.grey.medium
  },
  link: {
    textDecoration: 'underline',
  },
}

const SmenaInfo = ({ classes, smena, className }) => (
  <div className={`${classes.applyInfoContainer} ${className}`}>
    <p className={classes.applyInfoChild}>
      <AgeIcon
        color={colors.brown}
        width={22}
        className={classes.icon}
      />
      <span className={classes.applyInfoText}>{smena.age}</span>
    </p>
    <p className={classes.applyInfoChild}>
      <CalendarIcon
        color={colors.brown}
        width={22}
        className={classes.icon}
      />
      <span className={classes.applyInfoText}>{smena.date}</span>
    </p>
    <p className={classes.applyInfoChild}>
      <TimeIcon
        color={colors.brown}
        width={22}
        className={classes.icon}
      />
      <span className={classes.applyInfoText}>{smena.time}</span>
    </p>
  </div>
)

export default injectSheet(styles)(SmenaInfo)
