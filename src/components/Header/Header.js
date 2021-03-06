import React from 'react'
import injectSheet from 'react-jss'

import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from './HeaderMobile'

import { media } from '../../theme'

const menuItems = [
  {
    title: 'Смены',
    route: '/#smena',
  },
  {
    title: 'Команда',
    route: '/#team',
  },
  {
    title: 'Место',
    route: '/#place',
  },
  {
    title: 'FAQ',
    route: '/#faq',
  },
]

const menuItemsFixed = [
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
  mobile: {
    display: 'none',
  },
  desktop: {
    display: 'block',
  },
  [media.lessThan('large')]: {
    mobile: {
      display: 'block',
    },
    desktop: {
      display: 'none',
    },
  }
}

export const Header = ({ classes, ...props }) => {
  const items = props.fixed ? menuItemsFixed : menuItems

  return (
    <div>
      <div className={classes.desktop}>
        <HeaderDesktop menuItems={items} {...props} />
      </div>
      <div className={classes.mobile}>
        <HeaderMobile menuItems={items} {...props} />
      </div>
    </div>
  )
}

export default injectSheet(styles)(Header)
