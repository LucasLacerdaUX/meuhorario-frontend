import React from 'react';
import PropTypes from 'prop-types';
import './Badge.scss';

const classNames = require('classnames');

const Badge = (props) => {
  const {color, children, darkBG, outline, customClass} = props;

  const className = classNames(
    'Badge',
    color ? color : 'red',
    darkBG && 'darkBG',
    outline && 'outline',
    customClass,
  );

  return <div className={className}>{children}</div>;
};

Badge.propTypes = {
  color: PropTypes.oneOf(['red', 'green', 'blue', 'yellow', 'grey', 'sky']),
  customClass: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
  children: PropTypes.node,
  darkBG: PropTypes.bool,
  outline: PropTypes.bool,
};

export default Badge;
