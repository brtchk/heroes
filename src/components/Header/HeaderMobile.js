import React, { Component } from 'react'
import Link from 'gatsby-link'
import Menu from 'react-hamburger-menu'
import injectSheet from 'react-jss'

import NavLink from './NavLink';
import Logo from '../Logo'
import Phone from '../Phone'
import Mail from '../Mail'
import CallForm from '../CallForm'

import fbIcon from '../../static/fb.png'
import { colors, fonts, dimensions } from '../../theme'

const styles = {
  container: {
    height: 80,
    display: 'flex',
    alignItems: 'center',
    zIndex: 100,
    width: '100%',
    backgroundColor: colors.orange,
    padding: `0 ${dimensions.padding.horizontal}px`,
  },
  logo: {
    display: 'inline-block',
    textDecoration: 'none',
    fontSize: 50,
    marginRight: 25,
  },
  mobileNavContainer: {
    diplay: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    top: 80,
    zIndex: 100,
    backgroundColor: colors.orange,
    width: '100%',
    height: '100%',
    maxWidth: dimensions.maxWidth,
    paddingLeft: dimensions.padding.horizontal,
  },
  link: {
    cursor: 'pointer',
    display: 'block',
    flexDirection: 'column',
    color: colors.white,
    fontSize: fonts.size.s,
    margin: '30px 0',
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 'auto',
    width: '100%',
    maxWidth: dimensions.maxWidth,
  },
  navContainer: {
    display: 'flex',
  },
  menuIcon: {
    cursor: 'pointer',
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
  },
  info: {
    marginTop: 70,
  },
  infoText: {
    fontSize: fonts.size.xxs,
    lineHeight: 1.5,
  },
  icon: {
    display: 'inline-block',
    marginTop: 15,
  },
  bottomBlock: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    position: 'absolute',
    left: 0,
    bottom: 100,
    padding: `0 ${dimensions.padding.horizontal}px`,
  },
}

const MenuItems = ({ menuItems, classes, handleClick }) => (
  <div>
    {menuItems.map(item => (
      <Link
        key={item.title}
        className={classes.link}
        to={item.route}
        handleClick={handleClick}
      >
          {item.title}
      </Link>
    ))}
  </div>
)

class MenuItemsScroll extends Component {
  handleClick = (item) => {
    this.props.handleClick();

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

class HeaderMobile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false,
      callFormOpen: false,
    }
  }

  handleOpenForm = () => {
    this.setState({
      callFormOpen: !this.state.callFormOpen,
    })
  }

  handleOpenMenu = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
      callFormOpen: false,
    })
  }

  render() {
    const { menuItems, classes, fixed } = this.props;
    const { isMenuOpen, callFormOpen } = this.state;
    const MenuItemsComponent = fixed ? MenuItemsScroll : MenuItems

    return (
      <div>
        <div
          className={classes.container}
          style={{ position: (isMenuOpen || fixed) ? 'fixed' : 'relative' }}
        >
          <div className={classes.contentContainer}>
            <Link
              to="/"
              className={classes.logo}
            >
              <Logo color={colors.white} style={{ height: 35 }} />
            </Link>
            <div className={classes.navContainer}>
              <div className={classes.menuIcon}>
                <Menu
                  isOpen={this.state.isMenuOpen}
                  menuClicked={this.handleOpenMenu}
                  width={35}
                  height={20}
                  strokeWidth={3}
                  rotate={0}
                  color={colors.white}
                  borderRadius={0}
                  animationDuration={0.2}
                />
              </div>
            </div>
          </div>
        </div>
        {isMenuOpen &&
          <div className={classes.mobileNavContainer}>
            <MenuItemsComponent
              menuItems={menuItems}
              classes={classes}
              handleClick={() => { this.setState({ isMenuOpen: false }); }}
            />
            <div className={`${classes.info} ${classes.infoText}`}>
              <div>
                <Mail />
                <br />
                Москва, Конный переулок, 12
              </div>
              <a
                href="https://www.facebook.com/heroeslivehere/"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.icon}
              >
                <img src={fbIcon} width={35} />
              </a>
            </div>
            <div className={classes.bottomBlock}>
              <Phone className={classes.infoText} />
              {/* <button
                className={classes.button}
                onClick={this.handleOpenForm}
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
        }
        {
          callFormOpen &&
          <CallForm
            open={callFormOpen}
            style={{
              top: 80,
              left: 0,
              width: '100%',
              height: 'calc(100% - 180px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          />
        }
      </div>
    )
  }
}

export default injectSheet(styles)(HeaderMobile)
