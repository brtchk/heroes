import React from 'react'

const Logo = ({ color, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 549.3 126.4" {...rest}>
    <path d="M235.2 2.3v.2-.2h-47.1v121.9h38.6V89.7h8.5c25.3 0 46.7-14.8 46.7-43.7 0-28.9-21.4-43.7-46.7-43.7zm-21.4 108.8h-12.6V15.3h12.6v95.8zm22-34.4h-9.1V15.3h9.1c19.6.7 32.3 10.7 32.3 30.7s-12.6 30-32.3 30.7zM514.2 2.3L479.6 83V2.3H441v121.9h35.1l34.6-80.8v80.8h38.6V2.3h-35.1zm-47.6 108.8H454V15.3h12.6v95.8zm69.8 0h-12.6V15.3h12.7l-.1 95.8zM0 124.1h38.6V15.3h32.7v-13H0v121.8zM13 15.3h12.6v95.9H13V15.3zm79.2 108.8H166v-13h-35.2V67.7H164v-13h-33.2V15.3H166v-13H92.2v121.8zm13-108.8h12.6v95.9h-12.7l.1-95.9zM360.1 0c-36.9 0-63.2 27.2-63.2 63.2s26.3 63.2 63.2 63.2c36.9 0 63.2-27.2 63.2-63.2S397 0 360.1 0zm49.3 63.2c0 28.9-20.7 50.2-49.3 50.2-28.7 0-49.3-21.3-49.3-50.2 0-28.9 20.7-50.2 49.3-50.2 28.7 0 49.3 21.3 49.3 50.2z" fill={color} />
  </svg>
)

Logo.defaultProps = {
  color: '#fff',
}

export default Logo
