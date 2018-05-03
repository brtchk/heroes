import React from 'react'
import cx from 'classnames'

import injectTracking from '../helpers/call-tracking'

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
      {injectTracking(window, document, '//widgets.mango-office.ru/widgets/mango.js', 'mango-js', 'mgo')}
      {window.mgo && window.mgo({
        calltracking: {
          id: 12625,
          elements: [{ selector: '.mgo-number-12625' }],
        }
      })}
    </div>
  )
}

export default Phone
