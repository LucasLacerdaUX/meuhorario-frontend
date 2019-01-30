/*
 * TODO: On Feb 4, use Hooks to make this expandable by itself
 */
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import * as styles from './Collapse.module.scss';

const Collapse = (props) => {
  const {id, title, onClick, expanded, children} = props;
  return (
    <div className={styles.Collapse}>
      <h3>
        <Button
          onClick={onClick}
          ariaExpanded={expanded}
          ariaControls={id}
          onlyText
        >
          {title}
        </Button>
      </h3>
      <div id={id} aria-hidden={!expanded}>
        {children}
      </div>
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.node,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  expanded: PropTypes.bool,
  children: PropTypes.node,
};

export default Collapse;
