import React, { Component } from 'react'
import Link from 'gatsby-link'
import injectSheet from 'react-jss'

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
    color: colors.white,
    top: 0,
    width: '100%',
    zIndex: 100,
  },
  container: {
    position: 'relative',
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
  },
  menuItems: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
  rightBlock: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    display: 'inline-block',
    textDecoration: 'none',
    fontSize: 50,
    marginRight: 15,
  },
  link: {
    display: 'inline-block',
    cursor: 'pointer',
    textDecoration: 'none',
    margin: '0 12px',
    fontSize: fonts.size.xxs,
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
    border: `3px solid ${colors.white}`,
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
        to={item.route}
      >
        {item.title}
      </Link>
    ))}
  </div>
)

class MenuItemsScroll extends Component {
  handleClick = (item) => {
    const elem = document.getElementById(item.route)

    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  render() {
    const { menuItems, classes } = this.props;

    return (
      <div>
        {menuItems.map(item => (
          <div
            key={item.route}
            ref={(_ref) => { this[item.route] = _ref; }}
            onClick={() => this.handleClick(item)}
            href="#"
            className={classes.link}
          >
            {item.title}
          </div>
        ))}
      </div>
    )
  }
}

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
                <Logo color={colors.white} style={{ height: 40 }} />
              </Link>
              <p
                style={{
                  fontSize: fonts.size.xxs + 2,
                  lineHeight: 1.2,
                }}
              >
                ДЕТСКИЙ<br />ЛАГЕРЬ
              </p>
            </div>
            <div className={classes.menuItems}>
              <MenuItemsComponent menuItems={menuItems} classes={classes} />
            </div>
            <div className={classes.rightBlock}>
              <div className={classes.info}>
                <Phone />
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
