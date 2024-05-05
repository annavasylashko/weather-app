import React, { memo, useEffect, useState } from 'react';

import { fetchCityCoordinates, fetchWeatherData } from '../api/fetchData';
import { transformWeatherData } from '../api/transformers';
import DayCard from '../DayCard/DayCard';

import backgroundVideo from './weatherBG1.mp4';

import './WeekContainer.styles.css';

const cityName = 'Khmelnytskyi';

const WeekContainer = memo(() => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    (async() => {
      const { latitude, longitude } = await fetchCityCoordinates(cityName);

      fetchWeatherData({ latitude, longitude })
        .then((data) => transformWeatherData(data))
        .then((transformedData) => {
          setDailyData(transformedData);
        });
    })();
  }, []);

  return (
    <>
      <video className='video-tag' autoPlay loop muted>
        <source src={backgroundVideo} type='video/mp4' />
      </video>

      {dailyData.map((dayData, index) =>
        <DayCard cityName={cityName} dayData={dayData} key={index} />
      )}
    </>
  )
});

export default WeekContainer;
