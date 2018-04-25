import React, { Component } from 'react'
import Link from 'gatsby-link'
import injectSheet from 'react-jss'

import Button from '../components/Button'
import SmenaInfo from '../components/SmenaInfo'

import {
  getFormData,
  handleFormSubmit as submitForm
} from '../helpers/google-form'

import { colors, fonts, dimensions } from '../theme'

const styles = {
  container: {
    paddingTop: 35,
    minHeight: 'calc(100vh - 205px)',
    backgroundColor: colors.grey.light,
    color: colors.brown,
    lineHeight: 1.3,
    paddingBottom: 100,
  },
  formContainer: {
    width: 500,
    margin: 'auto',
  },
  form: {
    marginTop: 20,

  },
  subtl: {
    fontSize: fonts.size.xxs,
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 20,
  },
  title: {
    fontSize: fonts.size.m,
  },
  price: {
    fontSize: fonts.size.xs,
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

class Apply extends Component {
  constructor(props) {
    super(props)

    this.state = {
      buttonTitle: 'Отправить',
    }
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({
      loading: true,
      buttonTitle: 'Отправка...',
    });

    const formId = 'gform-apply';
    const data = getFormData(formId);

    return submitForm('/macros/s/AKfycbxzhcb8LJXvfyLNcPtBZsO7onAmXPTB9LG1TWzENzAFJFeYnkk/exec', data)
    .then(() => {
      this.setState({
        loading: false,
        success: true,
        buttonTitle: 'Отправлено',
        // buttonColor: colors.button.success,
      });

      document.getElementById(formId).reset();

      setTimeout(() => {
        this.setState({
          success: false,
          buttonTitle: 'Отправить',
          // buttonColor: colors.button.normal,
        });
      }, 4500);

      return null;
    })
    .catch((e) => {
      this.setState({
        loading: false,
        success: false,
        buttonTitle: 'Ошибка. Попробуйте еще раз',
        // buttonColor: colors.button.error,
      });

      setTimeout(() => {
        this.setState({
          success: false,
          buttonTitle: 'Отправить',
          // buttonColor: colors.button.normal,
        });
      }, 4500);
    });
  }


  render() {
    const { classes, smena } = this.props

    return (
      <div className={`${classes.container} fade`}>
        <div className={classes.formContainer}>
          <p className={classes.subtl}>
            {smena.for}
          </p>
          <div className={classes.titleContainer}>
            <p className={classes.title}>{smena.title}</p>
            <p className={classes.price}>{smena.price} рублей</p>
          </div>
          <SmenaInfo
            smena={{
              age: smena.age,
              date: smena.date,
              time: smena.time,
            }}
          />
          <p className={classes.subtl}>
            Заполните короткую анкету. Мы перезвоним вам в течение дня и расскажем про дальнейшие шаги.
          </p>
          <form
            id="gform-apply"
            dataEmail="hello@kruzhok.io"
            onSubmit={this.handleFormSubmit}
            className={classes.form}
          >
            <input
              type="text"
              name="smena"
              value={smena.title}
              style={{ display: 'none' }}
              disabled
            />
            <input
              type="text"
              name="name"
              placeholder="Имя и фамилия ребенка"
            />
            <input
              type="text"
              name="birth"
              placeholder="Дата рождения"
            />
            <input
              type="text"
              name="city"
              placeholder="Город"
            />
            <input
              type="text"
              name="contact"
              placeholder="Контактное лицо"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Телефон"
            />
            <Button
              type="submit"
              title={this.state.buttonTitle}
            />
          </form>
          <p className={classes.privacyText}>
            Нажимая «Отправить» вы соглашаетесь&nbsp;
            <Link
              to="/privacypolicy"
              className={classes.link}
            >
              с политикой обработки персональных данных.
            </Link>
          </p>
        </div>
      </div>
    )
  }
}



export default injectSheet(styles)(Apply)
