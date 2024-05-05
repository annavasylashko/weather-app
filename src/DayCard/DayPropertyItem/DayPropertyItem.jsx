import React from 'react';

import './DayPropertyItem.styles.css'

export const SimpleItem = ({ value, unit }) => (
  <span className='item-value'>{`${value}${unit}`}</span>
);

export const GraphItem = ({ value, unit, denominator }) => (
  <div className='hourly-values'>
    {value.map((hourlyValue, hour) => (
      <div
        key={hour}
        className='hourly-value'
        data-after-content={`${Math.round(hourlyValue)}${unit} - ${hour}:00`}
        style={{
          paddingBottom: `${hourlyValue/denominator}px`,
        }}
      />
    ))}
  </div>
);

const DayPropertyItem = ({ name, children }) => (
  <div className='day-property-item'>
    {children}

    <span>{name}</span>
  </div>
);

export default DayPropertyItem;
