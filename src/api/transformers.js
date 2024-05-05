import { weatherLabels } from './constants';

const formItems = (items, units) => {
  const days = items[Object.keys(items)[0]].length;

  return Array.from({ length: days }, (_, index) =>
    Object.keys(items).reduce((acc, key) => ({
      ...acc,
      [weatherLabels[key]]: {
        value: items[key][index],
        unit: units[key],
      }
    }), {}),
  );
};

const getDayAverageValue = (array) => {
  const chunks = [];

  for (let i = 0; i < array.length; i += 24) {
    const chunk = array.slice(i, i + 24);
    chunks.push(chunk);
  }

  return chunks;
}

const formatHourlyToDaily = (hourlyParams) =>
  Object.entries(hourlyParams).reduce((acc, [paramName, valuesPerHour]) => ({
    ...acc,
    [paramName]: getDayAverageValue(valuesPerHour),
  }), {});

const transformWeatherData = (weatherData) => {
  const { hourly, hourly_units, daily, daily_units } = weatherData;

  const formattedHourlyData = formatHourlyToDaily(hourly);

  const formattedDailyItems = formItems(
    { ...formattedHourlyData, ...daily},
    { ...hourly_units, ...daily_units },
  );

  return formattedDailyItems;
};

export { transformWeatherData };
