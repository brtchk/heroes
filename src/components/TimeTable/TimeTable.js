import React from 'react';
import Media from 'react-media';

import TableDesktop from './TimeTable.desktop';
import TableMobile from './TimeTable.mobile';

import { media } from '../../theme';

export const Table = props => (
  <div>
    <Media query={media.lessThan('medium', { dropPrefix: true })}>
      {
        matches =>
          matches
          ? <TableMobile {...props} />
          : <TableDesktop {...props} />
      }
    </Media>
  </div>
);

export default Table;
