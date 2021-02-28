import React from 'react';
import DateFormatter from './DateFormatter'
import DayPropertyItem from '../DayPropertyItem/DayPropertyItem'
import Icon from '../Icon'
import './style.css'

class DayCard extends React.Component {

  render() {
    const city = this.props.cityName

    const date = new Date(this.props.dayData.dt * 1000)
    const formattedDate = DateFormatter.formatDate(date)

    const dayTemp = Math.round(this.props.dayData.temp.day) + '°C'
    const minTemp = Math.round(this.props.dayData.temp.min) + '°C'
    const maxTemp = Math.round(this.props.dayData.temp.max) + '°C'
    const pressure = Math.round(this.props.dayData.pressure) + ' hPa'
    const humidity = Math.round(this.props.dayData.humidity) + '%'
    const windDeg = Math.round(this.props.dayData.wind_deg) + '°'
    const windSpeed = Math.round(this.props.dayData.wind_speed) + ' mph'

    const icon = this.props.dayData.weather[0].icon

    return (
      <div>
        <div className="dayCard">
          <div className="card">
            <h1>{city}</h1>
            <p className="cardData">{formattedDate}</p>

            <div className="dayMainInfo">
              <Icon icon={icon} />
              <div>
                <p className="dayTempMain">{dayTemp}</p>
                <p className="cardDescription">{this.props.dayData.weather[0].description}</p>
              </div>
            </div>
          </div>

          <div className="dayProperties">
            <DayPropertyItem name={"Low"} value={minTemp} />
            <DayPropertyItem name={"High"} value={maxTemp} />
            <DayPropertyItem name={"Pressure"} value={pressure} />
            <DayPropertyItem name={"Humidity"} value={humidity} />
            <DayPropertyItem name={"Wind degree"} value={windDeg} />
            <DayPropertyItem name={"Wind speed"} value={windSpeed} />
          </div>

        </div>
      </div>
    )
  }
}

export default DayCard;
