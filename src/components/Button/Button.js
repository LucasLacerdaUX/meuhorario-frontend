import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

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
    small,
    large,
    color,
    outline,
    onlyText,
    onlyIcon,
    darkBG,
    fullWidth,
    customClass,
    children,
  } = props;

  const className = classNames(
    'Button',
    small && 'small',
    large && 'large',
    color ? color : 'red',
    outline && 'outline',
    onlyText && 'onlyText',
    onlyIcon && ['onlyText', 'onlyIcon'],
    darkBG && 'darkBG',
    fullWidth && 'fullWidth',
    customClass,
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
  small: PropTypes.bool,
  large: PropTypes.bool,
  color: PropTypes.oneOf(['red', 'green', 'blue', 'yellow', 'grey', 'sky']),
  outline: PropTypes.bool,
  onlyText: PropTypes.bool,
  onlyIcon: PropTypes.bool,
  darkBG: PropTypes.bool,
  children: PropTypes.node,
  fullWidth: PropTypes.bool,
  customClass: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
};

export default Button;
