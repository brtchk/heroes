import React, { Component } from 'react'
import Link from 'gatsby-link'
import injectSheet from 'react-jss'
import cx from 'classnames'
import randomId from 'random-id'
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import Button from '../components/Button'
import SmenaInfo from '../components/SmenaInfo'

import {
  getFormData,
  handleFormSubmit as submitForm
} from '../helpers/google-form'

import { colors, fonts, dimensions, media } from '../theme'

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
    maxWidth: 500,
    margin: 'auto',
    [media.lessThan('large')]: {
      padding: `0 ${dimensions.padding.horizontal}px`,
    },
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
  button: {
    fontSize: fonts.size.xxs,
    borderWidth: 0,
    transition: 'all .3s ease',
    cursor: 'pointer',
    backgroundColor: colors.orange,
    color: colors.white,
    '&:hover': {
      backgroundColor: colors.lightBlue,
    },
    '&:focus': {
      outline: 'none',
    },
  },
}

class Pay extends Component {
  constructor(props) {
    super(props)

    const { smena } = props
    const price = parseInt(smena.price) * 1000

    this.state = {
      buttonTitle: 'Отправить',
      selectedValue: 1,
      price,
      sum: price,
      description: smena.title,
    }
  }

  handleSelect = (selectedValue) => {
    this.setState({
      selectedValue,
      sum: Math.ceil(this.state.price * selectedValue.value),
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    window.pay(this.form);
    return false;
  }

  render() {
    const { classes, smena } = this.props
    const { selectedValue, description, sum } = this.state

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
          <Select
            clearable={false}
            searchable={false}
            style={{
              marginTop: 30,
              color: colors.brown,
              fontFamily: 'Next, sans-serif',
              color: 'rgb(107, 60, 0)',
              height: '60px !importantr',
              outline: 'none',
              padding: 15,
              fontSize: 18,
              width: '100%',
              marginBottom: 20,
              border: 0,
              borderRadius: 0,
            }}
            menuContainerStyle={{ paddingTop: 10 }}
            onChange={this.handleSelect}
            value={selectedValue}
            options={[
              { value: 1, label: 'Полная стоимость' },
              { value: 0.5, label: '50%' },
              { value: 0.25, label: '25%' },
            ]}
          />
          <form
            name="TinkoffPayForm"
            onSubmit={this.handleFormSubmit}
            className={classes.form}
            ref={(_ref) => { this.form = _ref; }}
          >
            <input className="tinkoffPayRow" type="hidden" name="terminalkey" value="1524497548021DEMO" />
            <input className="tinkoffPayRow" type="hidden" name="frame" value="true" />
            <input className="tinkoffPayRow" type="hidden" name="language" value="ru" />
            <input className="tinkoffPayRow" type="text" placeholder="Сумма заказа" name="amount" required disabled value={1} />
            <input className="tinkoffPayRow" type="hidden" placeholder="Номер заказа" name="order" disabled value={randomId(20, '0')} />
            <input className="tinkoffPayRow" type="hidden" placeholder="Описание заказа" name="description" disabled value={description} />
            <input className="tinkoffPayRow" type="text" placeholder="ФИО плательщика" name="name" required />
            <input className="tinkoffPayRow" type="text" placeholder="E-mail" name="email" required />
            <input className="tinkoffPayRow" type="text" placeholder="Контактный телефон" name="phone" required />
            <input className={cx('tinkoffPayRow', classes.button)} type="submit" value="Оплатить" />
          </form>
          <p className={classes.privacyText}>
            Нажимая «Оплатить» вы соглашаетесь&nbsp;
            <Link
              to="/terms-of-payment"
              className={classes.link}
            >
              с условиями оплаты.
            </Link>
          </p>
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(Pay)
