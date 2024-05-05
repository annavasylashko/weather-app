const weatherLabels = {
  time: 'dt',
  temperature_2m: 'temp',
  wind_speed_10m_max: 'windSpeed',
  relative_humidity_2m: 'humidity',
  weather_code: 'weatherCode',
};

const baseGeocodeUrl = 'https://api.openweathermap.org/geo/1.0/direct';

const baseWeatherUrl = 'https://api.open-meteo.com/v1/forecast';
const weatherQueryParams = {
  daily: [
    'wind_speed_10m_max',
    'weather_code',
  ],
  hourly: [
    'relative_humidity_2m',
    'temperature_2m',
  ],
};

export {
  weatherLabels,
  baseWeatherUrl,
  weatherQueryParams,
  baseGeocodeUrl,
};
