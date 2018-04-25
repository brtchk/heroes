import React, { Component } from 'react';
import Link from 'gatsby-link';
import Menu from 'react-hamburger-menu';

import NavLink from './NavLink';
import { colors } from '../../theme';

const styles = {
  container: {
    height: 90,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: colors.orange,
    padding: `0 ${dimensions.padding.horizontal}px`,
  },
  mobileNavContainer: {
    diplay: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    zIndex: 2,
    backgroundColor: colors.orange,
    width: '100%',
    maxWidth: dimensions.maxWidth,
    paddingLeft: dimensions.padding.horizontal,
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 'auto',
    width: '100%',
    maxWidth: dimensions.maxWidth,
  },
  logo: {
    display: 'inline',
    color: colors.white,
  },
  navContainer: {
    display: 'flex',
  },
  menuIcon: {
    cursor: 'pointer',
  },
}

export default class HeaderMobile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false,
    };
  }

  render() {
    const { menuItems } = this.props;
    const { isMenuOpen } = this.state;

    return (
      <div>
        <div style={styles.container}>
          <div style={styles.contentContainer}>
            <Link to="/">
              <h3 style={styles.logo}>Microfleet</h3>
            </Link>
            <div style={styles.navContainer}>
              <div style={styles.menuIcon}>
                <Menu
                  isOpen={this.state.isMenuOpen}
                  menuClicked={() => { this.setState({ isMenuOpen: !isMenuOpen }); }}
                  width={20}
                  height={16}
                  strokeWidth={2}
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
          <div style={styles.mobileNavContainer}>
            {
              menuItems.map(item => (
                <NavLink
                  to={item.route}
                  key={item.title}
                  handleClick={() => { this.setState({ isMenuOpen: !isMenuOpen }); }}
                >
                  {item.title}
                </NavLink>
              ))
            }
          </div>
        }
      </div>
    );
  }
}
