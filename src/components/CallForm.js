import React, { Component } from 'react'
import Link from 'gatsby-link'
import injectSheet from 'react-jss'

import Button from './Button'

import {
  getFormData,
  handleFormSubmit as submitForm
} from '../helpers/google-form'

import { colors, fonts, dimensions } from '../theme'

const styles = {
  container: {
    width: 395,
    height: 320,
    padding: '40px 30px 20px',
    backgroundColor: colors.grey.light,
    position: 'fixed',
    zIndex: 99,
    top: -100,
    right: `calc(50% - ${dimensions.maxWidth / 2}px)`,
    transition: 'top 1s ease',
  },
  note: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: fonts.size.xxs,
    color: colors.brown,
  },
}

class CallForm extends Component {
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

    const formId = 'gform-call';
    const data = getFormData(formId);

    return submitForm('/macros/s/AKfycbz2AYMjeOoxRypyj4OubZl6hx4Ln58hQnJA0H7Pdg/exec', data)
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
    .catch(() => {
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
    const { classes, open, style } = this.props

    return (
      <div
        className={classes.container}
        style={{
          top: open ? 80 : -200,
          ...style,
        }}
      >
        <form
          id="gform-call"
          dataEmail="hello@kruzhok.io"
          onSubmit={this.handleFormSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Имя"
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
        <p className={classes.note}>
          Мы перезвоним вам в течение дня
        </p>
      </div>
    )
  }
}

export default injectSheet(styles)(CallForm)
