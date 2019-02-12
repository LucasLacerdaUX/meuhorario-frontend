import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './Collapse.scss';

const Collapse = (props) => {
  const {id, title, autoOpen, children} = props;
  const [open, setOpen] = useState(autoOpen);

  return (
    <div className="Collapse">
      <h3>
        <Button
          onClick={() => setOpen(!open)}
          ariaExpanded={open}
          ariaControls={id}
          onlyText
          fullWidth
          color="grey"
        >
          {title}
        </Button>
      </h3>
      <div id={id} aria-hidden={!open}>
        {open && children}
      </div>
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  autoOpen: PropTypes.bool,
  children: PropTypes.node,
};

Collapse.defaultProps = {
  autoOpen: false,
};

export default Collapse;
