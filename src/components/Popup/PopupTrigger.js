import React, { Component } from 'react'
import Link from 'gatsby-link'
import injectSheet from 'react-jss'
import cx from 'classnames'
import throttle from 'lodash.throttle'

import Popup from './Popup'

import { colors, fonts, media } from '../../theme'

const styles = {
  container: {
    transition: 'all 0.3s ease-in-out',
    width: '90%',
    maxWidth: 800,
    backgroundColor: colors.orange,
    fontSize: fonts.size.xs,
    lineHeight: 1.1,
    color: colors.white,
    height: 70,
    position: 'fixed',
    bottom: -70,
    cursor: 'pointer',
    left: '50%',
    transform: 'translateX(-50%)',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    [media.lessThan('small')]: {
      fontSize: fonts.size.xxs,
    },
    [media.lessThan('small')]: {
      fontSize: fonts.size.xxxs,
    },
  },
}

class Trigger extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      style: {},
    }
  }

  componentDidMount() {
    document.onreadystatechange = (state) => {
      if (document.readyState === 'complete') {
        setTimeout(() => {
          this.setState({ style: { bottom: 0 } })
        }, 500)
      }
    }

    window.onscroll = throttle(this.handleScroll, 1000)
  }

  handleScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        this.setState({ style: { bottom: -70 } })
        return null
    }

    this.setState({ style: { bottom: 0 } })
  }

  handleClose = () => {
    this.setState({ isOpen: false })
  }

  handleClick = () => {
    this.setState({ isOpen: true })
  }

  setStyle = () => {

  }

  render() {
    const { classes } = this.props
    const { isOpen, style } = this.state

    return (
      <div>
        <div className={classes.container} onClick={this.handleClick} style={style}>
          <p>Акция! Скидки на путевки в лагерь ГЕРОИ до 25%!</p>
          <p>Узнать условия &#8594;</p>
        </div>
        {isOpen && (
          <Popup handleClose={this.handleClose} />
        )}
      </div>
    )
  }
}

export default injectSheet(styles)(Trigger)
