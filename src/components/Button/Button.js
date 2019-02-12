import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const classNames = require('classnames');

/** A simple Button component that can be used with or without the role of form submitting. It has three styles (default, outline and only text) and three sizes (small, default and large). */
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
  /** The id of the button */
  id: PropTypes.string,
  /** An accessibility label for the button, for cases where it has no visible text. */
  accessibilityLabel: PropTypes.string,
  /** Does the component controls another one? */
  ariaControls: PropTypes.string,
  /** Is the controlled grouping expanded?  */
  ariaExpanded: PropTypes.bool,
  /** Is the button pressed? (Toggles)  */
  ariaPressed: PropTypes.bool,
  /** The function executed on button click */
  onClick: PropTypes.func,
  /** Is the button used to submit a form? */
  submit: PropTypes.bool,
  /** Is the button small? */
  small: PropTypes.bool,
  /** Is the button large? */
  large: PropTypes.bool,
  /** The color of the button */
  color: PropTypes.oneOf(['red', 'green', 'blue', 'yellow', 'grey', 'sky']),
  /** Should the button have an outline and a transparent background? */
  outline: PropTypes.bool,
  /** Should the button look like a normal text? */
  onlyText: PropTypes.bool,
  /** Is the content of the button an Icon? */
  onlyIcon: PropTypes.bool,
  /** Is the component inside a dark background? This changes the contrast to fit such cases. */
  darkBG: PropTypes.bool,
  /** The text inside of the button */
  children: PropTypes.node,
  /** Should the button occupy 100% of the parent's width? */
  fullWidth: PropTypes.bool,
  /** A custom class or an array of custom classes the component can have */
  customClass: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
};

export default Button;
