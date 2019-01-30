import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Badge.module.scss';

const classNames = require('classnames');

const Badge = (props) => {
  const {color, children, darkBG, outline, customClass} = props;

  const className = classNames(
    styles.Badge,
    color ? styles[color] : styles.red,
    darkBG && styles.darkBG,
    outline && styles.outline,
    customClass,
  );

  return <div className={className}>{children}</div>;
};

Badge.propTypes = {
  color: PropTypes.oneOf(['red', 'green', 'blue', 'yellow', 'grey', 'sky']),
  customClass: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node,
  darkBG: PropTypes.bool,
  outline: PropTypes.bool,
};

export default Badge;
