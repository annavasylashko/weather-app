import React from 'react';
import './style.css'

export default class DayPropertyItem extends React.Component {
  render() {

    return (
      <div className="dayPropertyItem">
        <p>{this.props.value}</p>
        <p>{this.props.name}</p>
      </div>
    )
  }
}
