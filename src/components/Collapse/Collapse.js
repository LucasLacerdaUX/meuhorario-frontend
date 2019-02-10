/*
 * TODO: On Feb 4, use Hooks to make this expandable by itself
 */
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import * as styles from './Collapse.module.scss';

const Collapse = (props) => {
  const {id, title, children} = props;
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.Collapse}>
      <h3>
        <Button
          onClick={() => setOpen(!open)}
          ariaExpanded={open}
          ariaControls={id}
          onlyText
        >
          {title}
        </Button>
      </h3>
      <div id={id} aria-hidden={!open}>
        {children}
      </div>
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.node,
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Collapse;
