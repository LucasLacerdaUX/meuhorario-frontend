/*



<div id="notifier" style="left: 835px; opacity: 1;">
  <div class="notifier_content">
    <div>
      <span class="text_holder">1 item completed</span>
      <a href="#" id="undo_link">
        Undo
      </a>
      <a href="#" class="hide_link">
        Hide
      </a>
    </div>
  </div>
</div>

<div class="vh">
  <span class="aT">
    <span class="bAq">Conversa arquivada.</span>
    <span class="bAo">
      &nbsp;&nbsp;
      <span
        class="ag a8k"
        id="link_undo"
        tabindex="0"
        role="link"
        idlink=""
        aria-label="Link Desfazer"
      >
        Desfazer
      </span>
    </span>
  </span>
  <div tabindex="0" role="button" class="bBe">
    <div class="bBf" />
  </div>
</div>;
*/
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import * as styles from './Toast.module.scss';

const Toast = (props) => {
  const {children, buttonLabel, buttonColor, onButtonClick} = props;
  return (
    <div className={styles.Toast} role="alert">
      <span>{children}</span>
      <Button color={buttonColor} darkBG small onlyText onClick={onButtonClick}>
        {buttonLabel.toUpperCase()}
      </Button>
    </div>
  );
};

Toast.propTypes = {
  children: PropTypes.node,
  buttonLabel: PropTypes.string,
  buttonColor: PropTypes.oneOf([
    'red',
    'green',
    'blue',
    'yellow',
    'grey',
    'sky',
  ]),
  onButtonClick: PropTypes.func,
};

export default Toast;
