import React from 'react';

import DayPropertyItem, { GraphItem, SimpleItem } from './DayPropertyItem/DayPropertyItem';
import Icon from './Icon/Icon';

import { wmoCodeLabels } from './constants';
import { formatDate } from './formatter';

import './DayCard.styles.css';

const DayCard = ({ cityName, dayData }) => {
  const {
    dt,
    weatherCode,
    temp,
    humidity,
    windSpeed,
  } = dayData;

  const date = new Date(dt.value);
  const formattedDate = formatDate(date);

  const { description, icon } = wmoCodeLabels[weatherCode.value];

  return (
    <div className="day-card">
      <div className="general-info">
        <h1 className="city-name">{cityName}</h1>
        <span className="card-date">{formattedDate}</span>
      </div>

      <div className="day-main-info">
        <Icon iconName={icon} />
        <div>
          <span className="day-temp">{`${Math.round(Math.max(...temp.value))}°C`}</span>
          {description && <p className="card-description">{description}</p>}
        </div>
      </div>

      <div className="weather-properties">
        <DayPropertyItem name="High">
          <SimpleItem value={Math.round(Math.max(...temp.value))} unit={temp.unit} />
        </DayPropertyItem>
        <DayPropertyItem name="Low">
          <SimpleItem value={Math.round(Math.min(...temp.value))} unit={temp.unit} />
        </DayPropertyItem>
        <DayPropertyItem name="Hourly">
          <GraphItem value={temp.value} unit={temp.unit} denominator={1} />
        </DayPropertyItem>

        <DayPropertyItem name="Humidity">
          <GraphItem value={humidity.value} unit={humidity.unit} denominator={3} />
        </DayPropertyItem>
        <DayPropertyItem name="Wind speed">
          <SimpleItem value={windSpeed.value} unit={windSpeed.unit} />
        </DayPropertyItem>
      </div>
    </div>
  )
};

export default DayCard;
