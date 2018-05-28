import React from 'react'

const Cross = ({ color, width, handleClick, style, ...rest }) => (
  <div onClick={handleClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      style={style}
      {...rest}
    >
      <path fill={color} d="M23 3l-2-2-9 9-9-9-2 2 9 9-9 9 2 2 9-9 9 9 2-2-9-9 9-9zm0 0l-2-2-9 9-9-9-2 2 9 9-9 9 2 2 9-9 9 9 2-2-9-9 9-9z" />
    </svg>
  </div>
)

Cross.defaultProps = {
  color: '#fff',
  width: 25,
}

export default Cross
