import React from 'react'
import Link from 'gatsby-link'
import injectSheet from 'react-jss'

import Member from './Member'

import { colors, fonts } from '../theme'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 50,
    maxWidth: 620,
  },
}

const Team = ({ classes, members }) => (
  <div className={classes.container}>
    {
      members.map(member => (
        <Member
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
