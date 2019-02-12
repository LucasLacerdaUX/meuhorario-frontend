import React from 'react';
import PropTypes from 'prop-types';
import './Badge.scss';

const classNames = require('classnames');

/** A small badge to show little bits of information, counters, etc. */
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
  /** The color of the badge */
  color: PropTypes.oneOf(['red', 'green', 'blue', 'yellow', 'grey', 'sky']),
  /** A custom class or an array of custom classes the component can have */
  customClass: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
  /** The badge content */
  children: PropTypes.node,
  /** Is the component inside a dark background? This changes the contrast to fit such cases. */
  darkBG: PropTypes.bool,
  /** Should the badge have an outline and a transparent background? */
  outline: PropTypes.bool,
};

Badge.defaultProps = {};

export default Badge;
