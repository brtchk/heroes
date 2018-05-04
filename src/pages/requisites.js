import React, { Component } from 'react'
import Link from 'gatsby-link'
import injectSheet from 'react-jss'

import Button from '../components/Button'
import AgeIcon from '../components/Icons/Age'
import CalendarIcon from '../components/Icons/Calendar'
import TimeIcon from '../components/Icons/Time'

import { colors, fonts, dimensions } from '../theme'

const styles = {
  container: {
    paddingTop: 35,
    maxWidth: 500,
    color: colors.black,
    lineHeight: 1.3,
    padding: '100px 20px',
    fontSize: fonts.size.xxs,
    margin: '0 auto',
    minHeight: 'calc(100vh - 205px)',
  },
  title: {
    marginBottom: 50,
  }
}

const Requisites = ({ classes }) => (
  <div className={classes.container}>
    <p className={classes.title}>
      Реквизиты
    </p>
    <p className={classes.text}>
      ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ВРЕМЯ ГЕРОЕВ"<br />
      Юридический адрес: 117342, г.Москва, ул.Бутлерова, д.17Б, пом.XII, ком.86, оф.5, к.6, +7 962 990 79 85<br />
      ИНН 7728421582<br />
      ОГРН 1187746303986<br />
      КПП 772801001<br />
      Расчетный счет 40702810210000309597<br />
      Банк АО "ТИНЬКОФФ БАНК"<br />
      Юридический адрес Банка<br />
      Москва, 123060, 1-й Волоколамский<br />
      проезд, д. 10, стр. 1<br />
      Корр. счет Банка 30101810145250000974<br />
      ИНН Банка 7710140679<br />
      БИК Банка 044525974<br />
    </p>
  </div>
)

export default injectSheet(styles)(Requisites)
