import React from 'react'

const Age = ({ color, width, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 21" width={width} {...rest}>
    <path fill={color} d="M5.5 9C3 9 1 7 1 4.5S3 0 5.5 0 10 2 10 4.5 8 9 5.5 9zm0-7C4.1 2 3 3.1 3 4.5S4.1 7 5.5 7 8 5.9 8 4.5 6.9 2 5.5 2zM11 21H0v-4.5c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5V21zm-9-2h7v-2.5C9 14.6 7.4 13 5.5 13S2 14.6 2 16.5V19zm21 2H13v-3c0-2.8 2.2-5 5-5s5 2.2 5 5v3zm-8-2h6v-1c0-1.7-1.3-3-3-3s-3 1.4-3 3v1zm3-8c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
  </svg>
)

Age.defaultProps = {
  color: '#fff',
  width: 25,
}

export default Age
