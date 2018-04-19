import React, { Component } from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps'

class Map extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }
  }

  handleMarkerClick = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { title, lat, lng } = this.props
    const {
      handleMarkerClick,
      isOpen
    } = this.state

    return (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat, lng }}
      >
        <Marker
          position={{ lat, lng }}
          onClick={this.handleMarkerClick}
        >
          {
            isOpen &&
            <InfoWindow onCloseClick={this.handleMarkerClick}>
              <p>{title}</p>
            </InfoWindow>
          }
        </Marker>
      </GoogleMap>
    )
  }
}

Map.defaultProps = {
  lat: 55.851577,
  lng: 38.609624,
  title: "Bol'shoye Bun'kovo, Moscow Oblast, Russia, 142438",
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

WrappedMap.defaultProps = {
  googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBMguZJnB4mYk6NMAKGLLnKW7RBvn3XTe0&v=3.exp&libraries=geometry,drawing,places',
  loadingElement: <div style={{ height: `100%` }} />,
  containerElement: <div style={{ height: `400px`, width: '100%' }} />,
  mapElement: <div style={{ height: `100%` }} />,
}

export default WrappedMap
