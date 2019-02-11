import React from 'react';
import PropTypes from 'prop-types';
import {icons, colors} from '../../utils/constants';
import * as iconList from './listOfIcons';
import './Icon.scss';

const classNames = require('classnames');

const Icon = (props) => {
  const {name, color, size, pointer, accessibilityLabel, customClass} = props;
  const IconToRender = iconList[name];
  const className = classNames(
    'Icon',
    color ? color : 'black',
    size ? size : 'small',
    pointer && 'pointer',
    customClass,
  );

  return (
    <>
      <IconToRender className={className} />
      <span className="visually-hidden">{accessibilityLabel}</span>
    </>
  );
};

Icon.propTypes = {
  name: PropTypes.oneOf(icons),
  accessibilityLabel: PropTypes.string,
  color: PropTypes.oneOf(colors),
  pointer: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  customClass: PropTypes.arrayOf(PropTypes.string),
};

export default Icon;
