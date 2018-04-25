import React from 'react';
import Media from 'react-media';

import HeaderDesktop from './HeaderFixedDesktop';
import HeaderMobile from './HeaderFixedMobile';

import { media } from '../../theme';

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

export const Header = props => (
  <div>
    <Media query={media.lessThan('large', { dropPrefix: true })}>
      {
        matches =>
          matches
          ? <HeaderMobile menuItems={menuItems} {...props} />
          : <HeaderDesktop menuItems={menuItems} {...props} />
      }
    </Media>
  </div>
);

export default Header;
