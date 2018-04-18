import React from 'react'

const Time = ({ color, width, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" width={width} {...rest}>
    <path fill={color} d="M11 22C4.9 22 0 17.1 0 11S4.9 0 11 0s11 4.9 11 11-4.9 11-11 11zm0-20c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm2 10.3v-6c0-.6-.4-1-1-1s-1 .4-1 1v5H6.2c-.6 0-1 .4-1 1s.4 1 1 1H12c.6 0 1-.4 1-1z" />
  </svg>
)

Time.defaultProps = {
  color: '#fff',
  width: 25,
}

export default Time
