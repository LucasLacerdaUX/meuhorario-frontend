/*
 * TODO:
 * Accessible "Skip to content" on first tab.
 * Should the topbar be a <nav> or just the side navigation itself?
 * Should I wrap the buttons as <ul><li>?
 * Add Clickable events for icons and buttons.
 */

import React from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as Logo} from '../Logo/logo.svg';
import Icon from '../Icon';
import Button from '../Button';
import * as styles from './Topbar.module.scss';

const Topbar = (props) => {
  return (
    <nav className={styles.TopBar}>
      <Button small onlyText customClass={styles.Button}>
        UFPB - Engenharia de Computação
      </Button>
      <Logo />
      <div className={styles.IconList}>
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

Topbar.propTypes = {};

export default Topbar;
