import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const classNames = require('classnames');

/** A form input component that can be of several text-like types. */
const Input = (props) => {
  const {
    name,
    type,
    placeholder,
    accessibilityDesc,
    value,
    onChange,
    onBlur,
    invalid,
    accessibilityLabel,
    customClass,
    ...otherProps
  } = props;

  const className = classNames(invalid && 'isInvalid', customClass);

  return (
    <div className="Input">
      <input
        className={className}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        aria-labelledby={`${name}-label`}
        aria-describedby={`${name}-hint`}
        aria-invalid={invalid}
        {...otherProps}
      />
      <label id={`${name}-label`} htmlFor={name}>
        {accessibilityLabel}
      </label>
      {accessibilityDesc && (
        <span className="visually-hidden" id={`${name}-hint`}>
          {accessibilityDesc}
        </span>
      )}
    </div>
  );
};

Input.propTypes = {
  /** The name of the input */
  name: PropTypes.string.isRequired,
  /** The type of the input */
  type: PropTypes.oneOf([
    'text',
    'password',
    'email',
    'search',
    'tel',
    'url',
    'date',
    'month',
    'week',
    'time',
    'datetime',
    'datetime-local',
  ]),
  /** The HTML placeholder for the input */
  placeholder: PropTypes.string,
  /** The label for the input */
  accessibilityLabel: PropTypes.string.isRequired,
  /** A detailed description for the input for accessibility purposes */
  accessibilityDesc: PropTypes.string,
  /** The input value */
  value: PropTypes.string,
  /** The function executed when the text on input changes */
  onChange: PropTypes.func,
  /** The function executed when the input focus change */
  onBlur: PropTypes.func,
  /** Is the input content invalid? */
  invalid: PropTypes.bool,
  /** A custom class or an array of custom classes the component can have */
  customClass: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
};

Input.defaultProps = {
  type: 'text',
  invalid: false,
};

export default Input;
