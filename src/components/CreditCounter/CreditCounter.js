import React from 'react';
import PropTypes from 'prop-types';
import './CreditCounter.scss';

const classNames = require('classnames');

const CreditCounter = ({currentHours, minHours, maxHours}) => {
  const isValid = currentHours >= minHours && currentHours <= maxHours;
  const className = classNames('Credits', isValid && 'isValid');
  return (
    <div className="CreditCounter">
      <span className={className}>
        {isValid && '✔'} {currentHours / 15} créditos
      </span>
      <p>
        <span className="CurrentHours">{currentHours}</span> horas (Min:
        <span className="MinHours"> {minHours}h</span> / Máx:
        <span className="MaxHours"> {maxHours}h</span>)
      </p>
    </div>
  );
};

CreditCounter.propTypes = {
  currentHours: PropTypes.number,
  minHours: PropTypes.number,
  maxHours: PropTypes.number,
};

export default CreditCounter;
