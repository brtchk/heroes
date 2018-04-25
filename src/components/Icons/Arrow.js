import React from 'react'

const Arrow = ({ color, width, handleClick, style, ...rest }) => (
  <div onClick={handleClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      style={style}
      {...rest}
    >
      <path fill={color} d="M20.7 5.3c1.4 0 1.9.9.9 2l-9.1 11.1c-.4.5-1.1.5-1.5 0L2.3 7.3c-.9-1.1-.5-2.1 1-2.1h17.4z" />
    </svg>
  </div>
)

Arrow.defaultProps = {
  color: '#fff',
  width: 25,
}

export default Arrow
