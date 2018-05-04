import React from 'react';
import Media from 'react-media';

import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

import { media } from '../../theme';

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

export const Header = props => {
  const items = props.fixed ? menuItemsFixed : menuItems

  return (
    <div>
      <Media query={media.lessThan('large', { dropPrefix: true })}>
        {
          matches =>
            matches
            ? <HeaderMobile menuItems={items} {...props} />
            : <HeaderDesktop menuItems={items} {...props} />
        }
      </Media>
    </div>
  )
}

export default Header;
