import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Alert.module.scss';

const classNames = require('classnames');

const Alert = (props) => {
  const {color, customClass, children} = props;

  const className = classNames(
    styles.Alert,
    color ? styles[color] : styles.sky,
    customClass,
  );

  return (
    <div className={className} role="alert" aria-atomic="true">
      {children}
    </div>
  );
};

Alert.propTypes = {
  color: PropTypes.oneOf(['red', 'green', 'blue', 'yellow', 'grey', 'sky']),
  customClass: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node,
};

export default Alert;
