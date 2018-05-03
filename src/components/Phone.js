import React from 'react'
import cx from 'classnames'

const Phone = ({ classes, className, style }) => {
  return (
    <div style={{ display: 'inline-block' }}>
      <a
        className={cx('mgo-number-12625', className)}
        style={style}
        href="tel:+74994505606"
      >
        +7 499 450 56 06
      </a>
    </div>
  )
}

export default Phone
