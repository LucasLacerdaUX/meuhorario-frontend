import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './Toast.scss';

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
  children: PropTypes.node,
  buttonLabel: PropTypes.string,
  buttonColor: PropTypes.oneOf([
    'red',
    'green',
    'blue',
    'yellow',
    'grey',
    'sky',
  ]),
  onButtonClick: PropTypes.func,
};

export default Toast;
