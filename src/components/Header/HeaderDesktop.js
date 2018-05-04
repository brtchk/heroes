import React, { Component } from 'react'
import Link from 'gatsby-link'
import Scrollspy from 'react-scrollspy'
import injectSheet from 'react-jss'

import Scroll from '../Scroll'
import Logo from '../Logo'
import CallForm from '../CallForm'
import Phone from '../Phone'
import Mail from '../Mail'

import { colors, fonts, dimensions } from '../../theme'

const styles = {
  root: {
    position: 'relative',
  },
  bg: {
    backgroundColor: colors.orange,
    color: colors.black,
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
    minWidth: dimensions.maxWidth - 50,
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
    width: 160,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 186,
    height: 48,
    fontSize: fonts.size.xs,
    border: `3px solid ${colors.black}`,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: colors.lightBlue,
      color: colors.white,
      borderColor: 'transparent',
    },
    '&:focus': {
      outline: 'none',
    },
  }
}

const MenuItems = ({ menuItems, classes }) => (
  <div>
    {menuItems.map(item => (
      <Link
        key={item.title}
        className={classes.link}
        style={{ fontSize: fonts.size.s }}
        to={item.route}
      >
        {item.title}
      </Link>
    ))}
  </div>
)

const MenuItemsScroll = ({ menuItems, classes }) => (
  <Scrollspy
    items={ ['smena', 'team', 'place', 'faq'] }
    currentClassName="is-active"
    offset={-300}
  >
    {menuItems.map(item => (
      <Scroll type="id" element={item.route} key={item.title}>
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
)

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
    }
  }

  handleClick = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { classes, menuItems, fixed } = this.props
    const { open } = this.state

    const MenuItemsComponent = fixed ? MenuItemsScroll : MenuItems

    return (
      <div className={classes.root}>
        <div
          className={classes.bg}
          style={{ position: fixed ? 'fixed' : 'static' }}
        >
          <div className={classes.container}>
            <div className={classes.leftBlock}>
              <Link
                to="/"
                className={classes.logo}
              >
                <Logo color={colors.black} style={{ height: 40 }} />
              </Link>
              <div className={classes.menuItems}>
                <MenuItemsComponent menuItems={menuItems} classes={classes} />
              </div>
            </div>
            <div className={classes.rightBlock}>
              <div className={classes.info}>
                <Phone />
                <Mail />
              </div>
              {/* <button
                className={classes.button}
                onClick={this.handleClick}
              >
                Заказать звонок
              </button> */}
              <a
                href="https://forms.amocrm.ru/trlxtx"
                className={classes.button}
              >
                Заказать звонок
              </a>
            </div>
          </div>
        </div>
        {open && <CallForm open={open} style={{ position: 'absolute' }} />}
      </div>
    )
  }
}

export default injectSheet(styles)(Header)
