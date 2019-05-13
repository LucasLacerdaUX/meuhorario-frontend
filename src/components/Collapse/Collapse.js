import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Icon from '../Icon';
import './Collapse.scss';

/** A component that can show/hide it's content when clicking on a toggle state button. */
const Collapse = (props) => {
  const {id, title, autoOpen, children} = props;
  const [open, setOpen] = useState(autoOpen);

  return (
    <div className="Collapse">
      <h2>
        <Button
          onClick={() => setOpen(!open)}
          ariaExpanded={open}
          ariaControls={id}
          onlyText
          fullWidth
          color="grey"
        >
          {title}
          <Icon name="arrowDown" size="small" />
        </Button>
      </h2>
      <div id={id} aria-hidden={!open}>
        {open && children}
      </div>
    </div>
  );
};

Collapse.propTypes = {
  /** The title of the expand/collapse button */
  title: PropTypes.node.isRequired,
  /** The id of the collapsible content region */
  id: PropTypes.string.isRequired,
  /** Should the content region be opened by default? */
  autoOpen: PropTypes.bool,
  /** The collapsible content */
  children: PropTypes.node,
};

Collapse.defaultProps = {
  autoOpen: false,
};

export default Collapse;
