import React from 'react';

const images = require.context('./img', true)

const Icon = ({ iconName }) => {
  const icon = images(`./${iconName}.png`)

  return(
    <img src={icon} style={{height: "100px"}} alt="weather icon" />
  )
}
export default Icon;
