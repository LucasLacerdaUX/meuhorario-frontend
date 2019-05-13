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

/** The Topbar component */
const Topbar = () => {
  return (
    <header className="TopBar">
      <Button small onlyText customClass={['Button']}>
        UFPB - Engenharia de Computação
      </Button>
      <Logo />

      <div className="IconList">
        <nav>
          <ul>
            <li>
              <Button small onlyIcon accessibilityLabel="Saved Tables">
                <Icon name="bookmark" />
              </Button>
            </li>
            <li>
              <Button small onlyIcon accessibilityLabel="Share">
                <Icon name="share" />
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Topbar;
