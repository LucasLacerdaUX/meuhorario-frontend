import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {FocusOn} from 'react-focus-on';
import Button from '../Button';
import Icon from '../Icon';
import './SidePanel.scss';

const classNames = require('classnames');

const SidePanel = ({children, title, right, isOpen, close}) => {
  const className = classNames('SidePanel', right && 'isRightAligned');

  return (
    <>
      {isOpen && (
        <div className="Overlay">
          <FocusOn
            shards={[]}
            enabled
            onClickOutside={close}
            onEscapeKey={close}
          >
            <div
              role="dialog"
              className={className}
              aria-modal="true"
              aria-labelledby="dialogTitle"
              tabIndex="-1"
            >
              <div className="SideHeader">
                <div className="SideTitle">
                  <Icon name="bookmark" />
                  <h2 id="dialogTitle">{title}</h2>
                </div>
                <Button onlyIcon color="grey" onClick={close}>
                  X
                </Button>
              </div>
              {children}
            </div>
          </FocusOn>
        </div>
      )}
    </>
  );
};

SidePanel.propTypes = {};

export default SidePanel;
