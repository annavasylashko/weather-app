import {
  baseGeocodeUrl,
  baseWeatherUrl,
  weatherQueryParams,
} from './constants';

const fetchCityCoordinates = async (cityName) => {
  const url = `${baseGeocodeUrl}?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}`;

  const [{ lat: latitude, lon: longitude }] = await fetch(url)
    .then((res) => res.json());
  
  return { latitude, longitude };
};

const fetchWeatherData = async ({ latitude, longitude }) => {
  const params = new URLSearchParams({
    latitude,
    longitude,
    ...weatherQueryParams,
  });
  const url = `${baseWeatherUrl}?${params.toString()}`;

  return await fetch(url).then((res) => res.json());
};

export { fetchCityCoordinates, fetchWeatherData };
