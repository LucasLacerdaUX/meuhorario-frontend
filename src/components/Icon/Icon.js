import React from 'react';
import PropTypes from 'prop-types';
import {icons, colors} from '../../utils/constants';
import * as iconList from './listOfIcons';
import * as styles from './Icon.module.scss';

const classNames = require('classnames');

const Icon = (props) => {
  const {name, color, size, pointer, customClass} = props;
  const IconToRender = iconList[name];
  const className = classNames(
    styles.Icon,
    color ? styles[color] : styles.black,
    size ? styles[size] : styles.small,
    pointer && styles.pointer,
    customClass,
  );

  return <IconToRender className={className} />;
};

Icon.propTypes = {
  name: PropTypes.oneOf(icons),
  color: PropTypes.oneOf(colors),
  pointer: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  customClass: PropTypes.arrayOf(PropTypes.string),
};

export default Icon;
