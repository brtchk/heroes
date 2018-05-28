import React, { Component } from 'react'
import Link, { navigateTo } from 'gatsby-link'
import injectSheet from 'react-jss'
import cx from 'classnames'

import CrossIcon from '../Icons/Cross'

import { colors, fonts, media } from '../../theme'

const styles = {
  popupOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 9999,
    backgroundColor: 'rgba(100, 200, 255, 0.7)',
    minWidth: '100vw',
    width: '100%',
    minHeight: '100vh',
  },
  popup: {
    position: 'fixed',
    zIndex: 9999,
    width: 900,
    backgroundColor: 'white',
    maxWidth: '90%',
    height: '90%',
    maxHeight: 1000,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  popupContentContainer: {
    overflow: 'scroll',
    height: '100%',
    display: 'flex',
  },
  popupContent: {
    boxSizing: 'border-box',
    padding: '70px 30px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  orangeTop: {
    height: 70,
    width: '100%',
    backgroundColor: colors.orange,
    color: colors.white,
    display: 'flex',
    position: 'fixed',
    zIndex: 10000,
  },
  popupTitle: {
    margin: 'auto',
    fontSize: fonts.size.s,
    textAlign: 'center',
    [media.lessThan('medium')]: {
      lineHeight: 1.3,
      margin: 'auto 0',
      paddingLeft: 20,
      textAlign: 'left',
      fontSize: fonts.size.xs,
    },
    [media.lessThan('small')]: {
      width: 250,
      textAlign: 'left',
      fontSize: fonts.size.xxxs,
    },
  },
  crossIcon: {
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    right: 20,
    transform: 'translateY(-50%)',
  },
  popupText: {
    maxWidth: 450,
    lineHeight: 1.3,
    fontSize: fonts.size.xxs,
    marginTop: 40,
    [media.lessThan('small')]: {
      fontSize: fonts.size.xxxs,
    },
  },
  highlight: {
    color: colors.orange,
  },
  popupSubtl: {
    fontSize: fonts.size.s,
    [media.lessThan('small')]: {
      fontSize: fonts.size.xs,
      lineHeight: 1.2,
    },
  },
  popupNote: {
    [media.lessThan('small')]: {
      fontSize: fonts.size.xxxs - 2,
    },
  },
  link: {
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  callToAction: {
    display: 'flex',
    marginTop: 40,
    alignItems: 'flex-start',
    margin: 'auto',
    [media.lessThan('small')]: {
      marginTop: 20,
      flexDirection: 'column',
    },
  },
  popupLeft: {
    width: '50%',
    lineHeight: 1.3,
    maxWidth: 350,
    [media.lessThan('small')]: {
      width: '100%',
    },
  },
  popupRight: {
    width: '50%',
    maxWidth: 350,
    [media.lessThan('small')]: {
      width: '100%',
      marginTop: 20,
    },
  },
  smallText: {
    fontSize: fonts.size.xxxs - 2,
  },
  privacyText: {
    marginTop: 10,
    fontSize: fonts.size.xxxs - 2,
    color: colors.grey.medium
  },
  button: {
    cursor: 'pointer',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 240,
    height: 50,
    marginTop: 5,
    fontSize: fonts.size.xs,
    backgroundColor: colors.orange,
    color: colors.white,
    '&:hover': {
      backgroundColor: colors.lightBlue,
      borderColor: 'transparent',
    },
    [media.lessThan('small')]: {
      width: 180,
      height: 50,
      marginTop: 30,
      fontSize: fonts.size.xxs,
    },
  },
}

export class Popup extends Component {
  render() {
    const { classes, handleClose } = this.props

    return (
      <div className={cx(classes.popupOverlay, 'fade')}>
        <div className={classes.popup}>
          <div className={classes.orangeTop}>
            <p className={classes.popupTitle}>
              Спешите! Скидки на путевки в лагерь ГЕРОИ!
            </p>
            <CrossIcon
              handleClick={handleClose}
              color={colors.white}
              className={classes.crossIcon}
            />
          </div>
          <div className={classes.popupContentContainer}>
            <div className={classes.popupContent}>
              <div className={classes.popupText} style={{ textAlign: 'left' }}>
                <span className={classes.highlight}>Скидка 10%</span> при покупке любой смены если вы:
                <br /><br />
                • подпишитесь на аккаунты лагеря ГЕРОИ в соцсетях,<br />
                • направите нам отзыва по итогам пребывания ребенка в лагере с разрешением опубликовать его на сайте<br />
                • разрешите использовать фотографии или видео с вашим ребенком на сайте (если он попадет на фото или видео)
                <br /><br />
                <span className={classes.highlight}>Скидка 15%</span> при одновременной покупке и оплате 2 смен
                <br /><br />
                <span className={classes.highlight}>Скидка 20%</span> при одновременной покупке и оплате 3 смен
                <br /><br />
                <span className={classes.highlight}>Скидка 25%</span> при одновременной покупке и оплате 4 смен
              </div>

              <div className={classes.popupText}>
                <p className={classes.popupSubtl}>Успейте оформить заявку!</p>
                <p className={classes.popupNote}>Предложение действует до 15 июня</p>
              </div>

              <div className={classes.callToAction}>
                <div className={classes.popupLeft}>
                  Для всех вариантов акции действует дополнительный бонус – рассрочка оплаты на 6 месяцев под 3%). При покупке 1-3 смен – без первоначального платежа. При покупке 4 смен – первоначальный платеж 25% от общей суммы заказа.
                </div>
                <div className={classes.popupRight}>
                  <a
                    href="https://forms.amocrm.ru/trvcvv"
                    target="_blank"
                    className={classes.button}
                    style={{ marginTop: 5, height: 50 }}
                  >
                    Подать заявку
                  </a>
                </div>
              </div>

              <div className={classes.popupText}>
                <p className={classes.smallText}>
                  Мы перезвоним вам в течение дня и расскажем про дальнейшие шаги. Доступна рассрочка 3–6 месяцев. Подробности у менеджера.
                </p>
                <p className={classes.privacyText}>
                  Нажимая «Подать заявку» вы соглашаетесь&nbsp;
                  <div
                    onClick={() => {
                      handleClose();
                      navigateTo('privacypolicy')
                    }}
                    className={classes.link}
                  >
                    с политикой обработки персональных данных.
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(Popup)
