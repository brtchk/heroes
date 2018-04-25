import React from 'react'
import Link from 'gatsby-link'
import injectSheet from 'react-jss'

import { colors, fonts, dimensions, media } from '../../theme'

const styles = {
  container: {
  },
  timeTable: {
    display: 'flex',
    fontSize: fonts.size.xs,
    '& p': {
      marginBottom: 10,
    },
    [media.lessThan('large')]: {
      padding: `0 ${dimensions.padding.horizontal}px`,
    },
    [media.lessThan('small')]: {
      fontSize: fonts.size.xxs,
    },
  },
  tableLeft: {
    marginRight: 90,
  },
}

const SmenaView = ({
  classes,
  timeTable,
}) => (
  <div className={classes.container}>
    <div className={classes.timeTable}>
      <div className={classes.tableLeft}>
        {timeTable.time.map(item => <p key={item}>{item}</p>)}
      </div>
      <div className={classes.tableRight}>
        {timeTable.event.map(item => <p key={item}>{item}</p>)}
      </div>
    </div>
  </div>
)

export default injectSheet(styles)(SmenaView)
