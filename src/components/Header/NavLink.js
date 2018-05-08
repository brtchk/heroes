import React from 'react';
import Link from 'gatsby-link';
import Scrollspy from 'react-scrollspy'

import Scroll from '../Scroll'
import { fonts } from '../../theme'

const styles = {
  navLinkContainer: {
    margin: 20,
    marginLeft: 0,
  },
  navLink: {
    color: 'white',
    fontSize: fonts.size.xxs,
  },
}

export default props => (
  <p style={styles.navLinkContainer}>
    <Link to={props.to} style={styles.navLink} onClick={props.handleClick}>
      {props.children}
    </Link>
  </p>
);
