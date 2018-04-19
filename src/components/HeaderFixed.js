import React from 'react'
import Link from 'gatsby-link'
import Scrollspy from 'react-scrollspy'
import injectSheet from 'react-jss'

import Scroll from './Scroll'
import Logo from './Logo'

import { colors, fonts, dimensions } from '../theme'

const menuItems = [
  {
    title: 'Смены',
    route: 'smena',
  },
  {
    title: 'Команда',
    route: 'team',
  },
  {
    title: 'Место',
    route: 'place',
  },
  {
    title: 'FAQ',
    route: 'faq',
  },
]

const styles = {
  bg: {
    backgroundColor: colors.orange,
    color: colors.black,
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 100,
  },
  container: {
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: dimensions.maxWidth,
    margin: '0 auto',
  },
  leftBlock: {
    display: 'flex',
    alignItems: 'baseline',
  },
  rightBlock: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    display: 'inline-block',
    textDecoration: 'none',
    fontSize: 50,
    marginRight: 25,
  },
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    margin: '0 12px',
    '&:hover': {
      color: colors.lightBlue,
    },
  },
  info: {
    textAlign: 'right',
    marginRight: 10,
    lineHeight: 1.3,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 186,
    height: 48,
    fontSize: fonts.size.xs,
    border: `3px solid ${colors.black}`,
    '&:hover': {
      backgroundColor: colors.lightBlue,
      color: colors.white,
      borderColor: 'transparent',
    },
  }
}

const Header = ({ classes }) => (
  <div className={classes.bg}>
    <div className={classes.container}>
      <div className={classes.leftBlock}>
        <Link
          to="/"
          className={classes.logo}
        >
          <Logo color={colors.black} style={{ height: 40 }} />
        </Link>
        <div className={classes.menuItems}>
          <Scrollspy items={ ['smena', 'team', 'place', 'faq'] } currentClassName="is-active" offset={-300}>
            {menuItems.map(item => (
              <Scroll type="id" element={item.route}>
                <a
                  href="#"
                  className={classes.link}
                  style={{ fontSize: fonts.size.s }}
                >
                  {item.title}
                </a>
              </Scroll>
            ))}
          </Scrollspy>
        </div>
      </div>
      <div className={classes.rightBlock}>
        <div className={classes.info}>
          <p>+7 499 450 56 06</p>
          <p>hello@heroescamp.ru</p>
        </div>
        <Link
          to="/"
          className={classes.button}
        >
          Заказать звонок
        </Link>
      </div>
    </div>
  </div>
)

export default injectSheet(styles)(Header)
