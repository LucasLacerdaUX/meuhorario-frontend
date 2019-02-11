/*
 * TODO:
 * Accessible "Skip to content" on first tab.
 * Should the topbar be a <nav> or just the side navigation itself?
 * Should I wrap the buttons as <ul><li>?
 * Add Clickable events for icons and buttons.
 */

import React from 'react';
import Logo from '../Logo';
import Icon from '../Icon';
import Button from '../Button';
import './Topbar.scss';

const Topbar = () => {
  return (
    <nav className="TopBar">
      <Button small onlyText customClass={['Button']}>
        UFPB - Engenharia de Computação
      </Button>
      <Logo />

      <div className="IconList">
        <Button small onlyIcon>
          <Icon name="bookmark" />
        </Button>

        <Button small onlyIcon>
          <Icon name="share" />
        </Button>
      </div>
    </nav>
  );
};

export default Topbar;
