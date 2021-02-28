export default class ApiService {
  baseURL = 'http://api.openweathermap.org/data/2.5'
  currentWeatherPath = '/weather'
  dailyWeatherPath = '/onecall'
  apiKey = 'a670a09ed739703ae58a9725db7538b6'

  paramsToQuery = (params) => `?${Object.entries(params).map((elem) => elem.join("=")).join("&")}`

  buildCurrentWeatherURL = (cityName) => {
    const params = {
      q: cityName,
      appid: this.apiKey
    }

    return this.baseURL + this.currentWeatherPath + this.paramsToQuery(params)
  }

  buildDailyWeatherURL = (latitude, longitude) => {
    const params = {
      lat: latitude,
      lon: longitude,
      exclude: "hourly,minutely,alerts",
      units: "metric",
      appid: this.apiKey
    }

    return this.baseURL + this.dailyWeatherPath + this.paramsToQuery(params)
  }

  fetchWeather = (cityName, callback) => {
    const url = this.buildCurrentWeatherURL(cityName)

    fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const latitude = data.coord.lat
      const longitude = data.coord.lon

      this.fetchDailyWeather(latitude, longitude, callback)
    })
  }

  fetchDailyWeather = (latitude, longitude, callback) => {
    const url = this.buildDailyWeatherURL(latitude, longitude)

    fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const dailyData = data.daily
      callback(dailyData)
    })
  }
}
