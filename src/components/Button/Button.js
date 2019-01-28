import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Button.module.scss';

const classNames = require('classnames');

const Button = (props) => {
  const {
    id,
    accessibilityLabel,
    ariaControls,
    ariaExpanded,
    ariaPressed,
    onClick,
    submit,
    red,
    blue,
    green,
    yellow,
    grey,
    sky,
    outline,
    onlyText,
    fullWidth,
    children,
  } = props;

  const className = classNames(
    red && styles.red,
    blue && styles.blue,
    green && styles.green,
    yellow && styles.yellow,
    grey && styles.grey,
    sky && styles.sky,
    outline && styles.outline,
    onlyText && styles.onlyText,
    fullWidth && styles.fullWidth,
  );

  const buttonType = submit ? 'submit' : 'button';

  return (
    <button
      id={id}
      type={buttonType}
      className={className}
      aria-label={accessibilityLabel}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      aria-pressed={ariaPressed}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  accessibilityLabel: PropTypes.string,
  ariaControls: PropTypes.string,
  ariaExpanded: PropTypes.bool,
  ariaPressed: PropTypes.bool,
  onClick: PropTypes.func,
  submit: PropTypes.bool,
  red: PropTypes.bool,
  green: PropTypes.bool,
  blue: PropTypes.bool,
  yellow: PropTypes.bool,
  grey: PropTypes.bool,
  sky: PropTypes.bool,
  outline: PropTypes.bool,
  onlyText: PropTypes.bool,
  children: PropTypes.node,
  fullWidth: PropTypes.bool,
};

export default Button;
