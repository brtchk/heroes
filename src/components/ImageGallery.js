import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery'

import LeftArrow from './Icons/LeftGalleryArrow'
import RightArrow from './Icons/RightGalleryArrow'

import 'react-image-gallery/styles/css/image-gallery.css'

const Gallery = ({ images }) => (
  <ImageGallery
    items={images}
    showThumbnails={false}
    showPlayButton={false}
    showFullscreenButton={false}
    renderLeftNav={(onClick) => (
      <LeftArrow handleClick={onClick} />
    )}
    renderRightNav={(onClick) => (
      <RightArrow handleClick={onClick} />
    )}
  />
)

export default Gallery
