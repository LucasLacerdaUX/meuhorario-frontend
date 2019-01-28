import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Alert.module.scss';

const classNames = require('classnames');

const Alert = (props) => {
  const {red, blue, green, yellow, grey, sky, children} = props;

  const className = classNames(
    styles.Alert,
    red && styles.red,
    blue && styles.blue,
    green && styles.green,
    yellow && styles.yellow,
    grey && styles.grey,
    sky && styles.sky,
  );

  return (
    <div className={className} role="alert" aria-atomic="true">
      {children}
    </div>
  );
};

Alert.propTypes = {
  red: PropTypes.bool,
  green: PropTypes.bool,
  blue: PropTypes.bool,
  yellow: PropTypes.bool,
  grey: PropTypes.bool,
  sky: PropTypes.bool,
  children: PropTypes.node,
};

export default Alert;
