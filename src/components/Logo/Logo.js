import React from 'react';
import ReactVivus from 'react-vivus';
import LogoSvg from './logo.svg';
import './Logo.scss';

const Logo = () => (
  <ReactVivus
    id="Logo"
    className="Logo"
    option={{
      file: LogoSvg,
      duration: 80,
      animTimingFunction: 'EASE_OUT',
      type: 'oneByOne',
    }}
  />
);

export default Logo;
