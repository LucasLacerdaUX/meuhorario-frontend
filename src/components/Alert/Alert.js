import React from 'react';
import PropTypes from 'prop-types';
import './Alert.scss';

const classNames = require('classnames');

/** A nice looking alert box with some text inside of it used to display information to the user. */
const Alert = (props) => {
  const {color, customClass, children} = props;

  const className = classNames('Alert', color, customClass);

  return (
    <div className={className} role="alert" aria-atomic="true">
      {children}
    </div>
  );
};

Alert.propTypes = {
  /** The color of the alert background */
  color: PropTypes.oneOf(['red', 'green', 'blue', 'yellow', 'grey', 'sky']),
  /** A custom class or an array of custom classes the component can have */
  customClass: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
  /** The text of the alert */
  children: PropTypes.node.isRequired,
};

Alert.defaultProps = {
  color: 'sky',
  customClass: null,
};

export default Alert;
