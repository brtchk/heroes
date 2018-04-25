import React from 'react'
import Link from 'gatsby-link'
import injectSheet from 'react-jss'

import Member from './Member'

import { colors, fonts, media } from '../theme'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 50,
    maxWidth: 620,
    [media.lessThan('medium')]: {
      justifyContent: 'space-around',
    },
  },
}

const Team = ({ classes, members }) => (
  <div className={classes.container}>
    {
      members.map(member => (
        <Member
          key={member.name}
          style={{
            maxWidth: 190
          }}
          image={member.image}
          name={member.name}
          desc={member.desc}
        />
      ))
    }
  </div>
)

export default injectSheet(styles)(Team)
