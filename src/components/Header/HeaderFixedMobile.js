import React, { Component } from 'react'
import Link from 'gatsby-link'
import Menu from 'react-hamburger-menu'
import injectSheet from 'react-jss'

import NavLink from './NavLink';
import Logo from '../Logo'
import Scrollspy from 'react-scrollspy'
import Phone from '../Phone'
import Mail from '../Mail'

import Scroll from '../Scroll'
import CallForm from '../CallForm'
import fbIcon from '../../static/fb.png'
import { colors, fonts, dimensions } from '../../theme'

const styles = {
  container: {
    height: 80,
    display: 'flex',
    alignItems: 'center',
    position: 'fixed',
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
    const { menuItems, classes } = this.props;
    const { isMenuOpen, callFormOpen } = this.state;

    return (
      <div>
        <div className={classes.container}>
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
            <Scrollspy
              items={ ['smena', 'team', 'place', 'faq'] }
              currentClassName="is-active"
              offset={-300}
            >
              {menuItems.map(item => (
                <Scroll
                  key={item.title}
                  type="id"
                  element={item.route}
                  handleClick={() => { this.setState({ isMenuOpen: false }); }}
                >
                  <a
                    href="#"
                    className={classes.link}
                  >
                    {item.title}
                  </a>
                </Scroll>
              ))}
            </Scrollspy>
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
              <button
                className={classes.button}
                onClick={this.handleOpenForm}
              >
                Заказать звонок
              </button>
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w, d, u, i, o, s, p) {
                  if (d.getElementById(i)) { return; } w['MangoObject'] = o;
                  w[o] = w[o] || function() { (w[o].q = w[o].q || []).push(arguments) }; w[o].u = u; w[o].t = 1 * new Date();
                  s = d.createElement('script'); s.async = 1; s.id = i; s.src = u;
                  p = d.getElementsByTagName('script')[0]; p.parentNode.insertBefore(s, p);
              }(window, document, '//widgets.mango-office.ru/widgets/mango.js', 'mango-js', 'mgo'));
              mgo({calltracking: {id: 12625, elements: [{"selector":".mgo-number-12625"}]}});
            `,
          }}
        />
      </div>
    )
  }
}

export default injectSheet(styles)(HeaderMobile)
