import React from 'react';
import DayCard from '../DayCard/DayCard'
import ApiService from '../ApiService'
import bg from './weatherBG1.mp4'
import './style.css'

class WeekContainer extends React.Component {

  apiService = new ApiService()

  state = {
    dailyData: []
  }

  componentDidMount = () => {

    // TODO: Change later
    this.cityName = "Kyiv"

    this.apiService.fetchWeather(this.cityName, (dailyData) => {
      this.setState({
        dailyData: dailyData
      }, () => console.log(this.state))
    })
  }

  formatDayCards = () => {
    return this.state.dailyData.map((dayData, index) =>
      <DayCard dayData={dayData} cityName={this.cityName} key={index} />)
  }

  render() {
    return (
      <div className="weekContainter">
        <video className='videoTag' autoPlay loop muted>
          <source src={bg} type='video/mp4' />
        </video>
        {this.formatDayCards()}
      </div>
    )
  }
}

export default WeekContainer;
