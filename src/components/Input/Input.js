import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Input.module.scss';

const classNames = require('classnames');

const Input = (props) => {
  const {
    inputName,
    inputType,
    inputPlaceholder,
    inputDesc,
    inputValue,
    changeText,
    changeFocus,
    isInvalid,
    accessibilityLabel,
    customClass,
    ...otherProps
  } = props;

  const className = classNames(isInvalid && styles.invalid, customClass);

  let valueProps = {
    value: inputValue,
  };
  if (inputValue === undefined) valueProps = {};
  return (
    <div className={styles.Input}>
      <input
        className={className}
        type={inputType}
        name={inputName}
        id={inputName}
        placeholder={inputPlaceholder}
        {...valueProps}
        onChange={changeText}
        onBlur={changeFocus}
        aria-labelledby={`${inputName}-label`}
        aria-describedby={`${inputName}-hint`}
        {...otherProps}
      />
      <label id={`${inputName}-label`} htmlFor={inputName}>
        {accessibilityLabel}
      </label>
      {inputDesc && (
        <span className="visually-hidden" id={`${inputName}-hint`}>
          {inputDesc}
        </span>
      )}
    </div>
  );
};

Input.propTypes = {
  inputName: PropTypes.string.isRequired,
  inputType: PropTypes.oneOf([
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
  inputPlaceholder: PropTypes.string,
  inputDesc: PropTypes.string,
  inputValue: PropTypes.string,
  changeText: PropTypes.func,
  changeFocus: PropTypes.func,
  isInvalid: PropTypes.bool,
  accessibilityLabel: PropTypes.string.isRequired,
  customClass: PropTypes.arrayOf(PropTypes.string),
};

Input.defaultProps = {
  inputType: 'text',
  inputPlaceholder: '',
  inputDesc: '',
  isInvalid: false,
  changeText: null,
  changeFocus: null,
};

export default Input;
