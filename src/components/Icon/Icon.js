import React from 'react';
import PropTypes from 'prop-types';
import {icons, colors} from '../../utils/constants';
import * as iconList from './listOfIcons';
import './Icon.scss';

const classNames = require('classnames');

/** A component used to show Icons from the library. */
const Icon = (props) => {
  const {name, color, size, pointer, accessibilityLabel, customClass} = props;
  const IconToRender = iconList[name];
  const className = classNames(
    'Icon',
    color,
    size,
    pointer && 'pointer',
    customClass,
  );

  return (
    <>
      <IconToRender className={className} />
      {accessibilityLabel && (
        <span className="visually-hidden">{accessibilityLabel}</span>
      )}
    </>
  );
};

Icon.propTypes = {
  /** The icon name (as in the library) */
  name: PropTypes.oneOf(icons).isRequired,
  /** Label for accessibility purposes. Should ALWAYS be present when the Icon component is used without any surrounding text. */
  accessibilityLabel: PropTypes.string,
  /** The color of the icon */
  color: PropTypes.oneOf(colors),
  /** Should the icon have a pointer cursor when hovered? */
  pointer: PropTypes.bool,
  /** The size of the icon (small, medium, large) */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** A custom class or an array of custom classes the component can have */
  customClass: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
};

Icon.defaultProps = {
  color: 'black',
  size: 'small',
};

export default Icon;
