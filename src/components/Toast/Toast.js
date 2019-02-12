import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './Toast.scss';

/** A toast message component used to display important info to the user. You can use it to display messages about what just happened on screen and provide a way to undo the last action, for example. */
const Toast = (props) => {
  const {children, buttonLabel, buttonColor, onButtonClick} = props;
  return (
    <div className="Toast" role="alert">
      <span>{children}</span>
      <Button color={buttonColor} darkBG small onlyText onClick={onButtonClick}>
        {buttonLabel.toUpperCase()}
      </Button>
    </div>
  );
};

Toast.propTypes = {
  /** The text inside of the Toast */
  children: PropTypes.node,
  /** The label of the button. Always displayed in upper case. */
  buttonLabel: PropTypes.string,
  /** The color of the button */
  buttonColor: PropTypes.oneOf([
    'red',
    'green',
    'blue',
    'yellow',
    'grey',
    'sky',
  ]),
  /** The function executed when clicking the button */
  onButtonClick: PropTypes.func,
};

Toast.defaultProps = {
  buttonLabel: 'Undo',
  buttonColor: 'red',
};

export default Toast;
