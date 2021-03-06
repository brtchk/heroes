import React, { Component } from 'react'
import injectSheet from 'react-jss'
import { Player, BigPlayButton, LoadingSpinner } from 'video-react'
import 'video-react/dist/video-react.css'

import { fonts, media } from '../theme'

const styles = {
  videoText: {
    textAlign: 'center',
    position: 'absolute',
    fontSize: fonts.size.m,
    color: 'white',
    top: '65%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60%',
    [media.lessThan('small')]: {
      fontSize: fonts.size.xxs,
    },
  },
}

class Video extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showTitle: true,
    }
  }

  componentDidMount() {
    this.player.subscribeToStateChange(this.handleStateChange)
  }

  handleStateChange = (state, prevState) => {
    if (state.hasStarted !== prevState.hasStarted && state.hasStarted) {
      this.setState({ showTitle: false })
    }
  }

  render() {
    const { classes, title, source, cover, textStyle, style, containerClassName } = this.props
    const { showTitle } = this.state

    return (
      <div style={{ position: 'relative', ...style }} className={containerClassName}>
        <Player src={source} poster={cover} ref={ref => { this.player = ref; }}>
          <BigPlayButton position="center" />
          <LoadingSpinner />
        </Player>
        {showTitle && <p className={classes.videoText} style={textStyle}>{title}</p>}
      </div>
    )
  }
}

export default injectSheet(styles)(Video)
