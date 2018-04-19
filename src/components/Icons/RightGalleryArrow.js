import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  container: {
    appearance: 'none',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    border: 0,
    borderRadius: 3,
    cursor: 'pointer',
    outline: 'none',
    zIndex: 4,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%) rotate(180deg)',
    right: 5,
    display: 'flex',
    '& svg': {
      margin: 'auto',
    },
    '& path': {
      transition: '0.5s ease fill',
    },
    '&:hover path': {
      fill: '#fff'
    }
  },
}

const RightArrow = ({ classes, sheet, color, width, handleClick, ...rest }) => (
  <div
    className={classes.container}
    style={{
      width: width + 15,
      height: width + 15,
    }}
    onClick={handleClick}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}>
      <path
        fill={color}
        d="M11.3 12l5.7 5.7c.8.8.8 2 0 2.8s-2 .8-2.8 0l-7.1-7.1c-.8-.8-.8-2 0-2.8l7.1-7.1c.8-.8 2-.8 2.8 0s.8 2 0 2.8L11.3 12"
      />
    </svg>
  </div>
)

RightArrow.defaultProps = {
  color: 'rgba(255, 255, 255, 0.5)',
  width: 15,
}

export default injectSheet(styles)(RightArrow)
