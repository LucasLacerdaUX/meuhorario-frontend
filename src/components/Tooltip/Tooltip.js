/*
 * https://ui.reach.tech/tooltip
 */

import React from 'react';
import {useTooltip, TooltipPopup} from '@reach/tooltip';
import '@reach/tooltip/styles.css';

// Center the tooltip, but collisions will win
const centered = (triggerRect, tooltipRect) => {
  const triggerCenter = triggerRect.left + triggerRect.width / 2;
  const left = triggerCenter - tooltipRect.width / 2;
  const maxLeft = window.innerWidth - tooltipRect.width - 2;
  return {
    left: Math.min(Math.max(2, left), maxLeft) + window.scrollX,
    top: triggerRect.bottom + 8 + window.scrollY,
  };
};

const Tooltip = ({children, ...rest}) => {
  // get the props from useTooltip
  const [trigger, tooltip] = useTooltip();

  // destructure off what we need to position the triangle
  const {isVisible, triggerRect} = tooltip;

  return (
    <>
      {React.cloneElement(children, trigger)}

      {isVisible && (
        // the Triangle, we position it relative to the trigger, not the popup
        // so that collisions don't have a triangle pointing off to nowhere
        <div
          style={{
            position: 'absolute',
            left: triggerRect && triggerRect.left - 20 + triggerRect.width / 2,
            top: triggerRect && triggerRect.bottom - 8,
            width: 0,
            height: 0,
            borderLeft: '10px solid transparent',
            borderRight: '10px solid transparent',
            borderBottom: '10px solid black',
            zIndex: 99,
          }}
        />
      )}
      <TooltipPopup
        {...tooltip}
        {...rest}
        style={{
          background: 'black',
          color: 'white',
          border: 'none',
          borderRadius: '3px',
          padding: '0.5em 1em',
        }}
        position={centered}
      />
    </>
  );
};

Tooltip.propTypes = {};

export default Tooltip;
