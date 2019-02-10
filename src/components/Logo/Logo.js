import React from 'react';
import ReactVivus from 'react-vivus';
import LogoSvg from './logo.svg';
import * as styles from './Logo.scss';

const Logo = () => (
  <ReactVivus
    id="foo"
    className="Logo"
    option={{
      file: LogoSvg,
      duration: 80,
      animTimingFunction: 'EASE_OUT',
      type: 'oneByOne',
    }}
    style={{width: '220px'}}
  />
);

export default Logo;
