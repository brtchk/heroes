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
    zIndex: 200,
    color: 'white',
    top: '65%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
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
    const { classes, title, source, textStyle } = this.props
    const { showTitle } = this.state

    return (
      <div style={{ position: 'relative' }}>
        <Player src={source} ref={ref => { this.player = ref; }}>
          <BigPlayButton position="center" onClick={() => console.log('text')} />
          <LoadingSpinner />
        </Player>
        {showTitle && <p className={classes.videoText} style={textStyle}>{title}</p>}
      </div>
    )
  }
}

export default injectSheet(styles)(Video)
