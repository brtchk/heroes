import React from 'react'
import injectSheet from 'react-jss'

const Mail = ({ classes, className, style }) => {
  return (
    <div style={{ display: 'inline-block' }}>
      <a
        className={className}
        style={style}
        href="mailto:hello@heroescamp.ru"
      >
        hello@heroescamp.ru
      </a>
    </div>
  )
}

export default Mail
