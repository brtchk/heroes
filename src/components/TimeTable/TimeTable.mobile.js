import React from 'react'
import Link from 'gatsby-link'
import injectSheet from 'react-jss'

import { colors, fonts, dimensions, media } from '../../theme'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: fonts.size.xs,
    '& p': {
      marginBottom: 10,
    },
    [media.lessThan('large')]: {
      padding: `0 ${dimensions.padding.horizontal}px`,
    },
  },
  tableItem: {
    marginBottom: 20,
  }
}

const SmenaView = ({
  classes,
  timeTable,
}) => (
  <div className={classes.container}>
    {timeTable.time.map((item, index) => (
      <div className={classes.tableItem} key={item}>
        <p>{item}</p>
        <p>{timeTable.event[index]}</p>
      </div>
    ))}
  </div>
)

export default injectSheet(styles)(SmenaView)
