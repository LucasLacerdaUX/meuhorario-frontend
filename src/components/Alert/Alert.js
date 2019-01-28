import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Alert.module.scss';

const classNames = require('classnames');

const Alert = (props) => {
  const {color, children} = props;

  const className = classNames(
    styles.Alert,
    color ? styles[color] : styles.sky,
  );

  return (
    <div className={className} role="alert" aria-atomic="true">
      {children}
    </div>
  );
};

Alert.propTypes = {
  color: PropTypes.oneOf(['red', 'green', 'blue', 'yellow', 'grey', 'sky']),
  children: PropTypes.node,
};

export default Alert;
