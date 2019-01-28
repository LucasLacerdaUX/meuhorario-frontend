import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Badge.module.scss';

const classNames = require('classnames');

const Badge = (props) => {
  const {color, children, darkBG} = props;

  const className = classNames(
    styles.Badge,
    color ? styles[color] : styles.red,
    darkBG && styles.darkBG,
  );

  return <div className={className}>{children}</div>;
};

Badge.propTypes = {
  color: PropTypes.oneOf(['red', 'green', 'blue', 'yellow', 'grey', 'sky']),
  children: PropTypes.node,
  darkBG: PropTypes.bool,
};

export default Badge;
