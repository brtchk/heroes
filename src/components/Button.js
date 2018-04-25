import React from 'react'
import injectSheet from 'react-jss'

import { colors, fonts } from '../theme'

const styles = {
  button: {
    fontSize: fonts.size.xxs,
    borderWidth: 0,
    transition: 'all .3s ease',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: `${colors.lightBlue} !important`,
      color: `${colors.black} !important`,
    },
    '&:focus': {
      outline: 'none',
    },
  },
}

const Button = ({ classes, title, handler, sheet, ...props }) => {
  return (
    <div>
      <button
        style={{
          width: props.width || '100%',
          height: props.height || 60,
          color: props.color || colors.white,
          backgroundColor: props.bgColor || colors.orange,
        }}
        className={classes.button}
        onClick={handler}
        {...props}
      >
        {title}
      </button>
    </div>
  )
}

export default injectSheet(styles)(Button)
