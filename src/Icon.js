import React from 'react';
const images = require.context('./img', true)

export default class Icon extends React.Component {
  constructor(props) {
    super(props)
    const iconName = props.icon.substring(0, 2)
    this.icon = images(`./${iconName}.png`)
    console.log(iconName)
    console.log(this.icon)
  }

  render() {
    return(
      <img src={this.icon.default} style={{height: "100px"}} alt="weather icon" />
    )
  }
}
