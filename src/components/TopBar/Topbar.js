/*
 * TODO:
 * Accessible "Skip to content" on first tab.
 * Should the topbar be a <nav> or just the side navigation itself?
 * Should I wrap the buttons as <ul><li>?
 * Add Clickable events for icons and buttons.
 */

import React from 'react';
//import Tooltip from '../Tooltip/Tooltip';
import Logo from '../Logo';
import Icon from '../Icon';
import Button from '../Button';
import './Topbar.scss';

/** The Topbar component */
const Topbar = ({onProgramClick}) => {
  return (
    <header className="TopBar">
      <Button
        small
        onlyText
        customClass={['Button']}
        onClick={onProgramClick}
        accessibilityLabel="Alterar Curso"
        tooltip
      >
        UFPB - Engenharia de Computação
      </Button>
      <Logo />

      <div className="IconList">
        <nav>
          <ul>
            <li>
              <Button small onlyIcon accessibilityLabel="Saved Tables" tooltip>
                <Icon name="bookmark" />
              </Button>
            </li>
            <li>
              <Button small onlyIcon accessibilityLabel="Share" tooltip>
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
