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
);

export default Header;
