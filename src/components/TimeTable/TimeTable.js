import React from 'react'
import injectSheet from 'react-jss'

import TableDesktop from './TimeTable.desktop'
import TableMobile from './TimeTable.mobile'

import { media } from '../../theme';

const styles = {
  mobile: {
    display: 'none',
  },
  desktop: {
    display: 'block',
  },
  [media.lessThan('medium')]: {
    mobile: {
      display: 'block',
    },
    desktop: {
      display: 'none',
    },
  }
}

export const Table = ({ classes, ...props }) => (
  <div>
    <div className={classes.desktop}>
      <TableDesktop {...props} />
    </div>
    <div className={classes.mobile}>
      <TableMobile {...props} />
    </div>
  </div>
);

export default injectSheet(styles)(Table)
