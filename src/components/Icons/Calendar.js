import React from 'react'

const Calendar = ({ color, width, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" width={width} {...rest}>
    <path fill={color} d="M19 3h-1.5V1.5c0-.6-.4-1-1-1s-1 .4-1 1V3h-8V1.5c0-.6-.4-1-1-1s-1 .4-1 1V3H4C1.8 3 0 4.8 0 7v12c0 2.2 1.8 4 4 4h15c2.2 0 4-1.8 4-4V7c0-2.2-1.8-4-4-4zm2 16c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-7h19v7zM2 10V7c0-1.1.9-2 2-2h1.5v.8c0 .6.4 1 1 1s1-.4 1-1V5h8v.8c0 .6.4 1 1 1s1-.4 1-1V5H19c1.1 0 2 .9 2 2v3H2z" />
  </svg>
)

Calendar.defaultProps = {
  color: '#fff',
  width: 25,
}

export default Calendar
