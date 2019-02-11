import React from 'react';
import PropTypes from 'prop-types';
import './Alert.scss';

const classNames = require('classnames');

const Alert = (props) => {
  const {color, customClass, children} = props;

  const className = classNames('Alert', color ? color : 'sky', customClass);

  return (
    <div className={className} role="alert" aria-atomic="true">
      {children}
    </div>
  );
};

Alert.propTypes = {
  color: PropTypes.oneOf(['red', 'green', 'blue', 'yellow', 'grey', 'sky']),
  customClass: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
  children: PropTypes.node,
};

export default Alert;
