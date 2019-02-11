/*
 * TODO: Add aria-pressed state when props.pressed=true.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Badge from '../Badge';
import './Card.scss';

const classNames = require('classnames');

const Card = (props) => {
  const {
    id,
    badge,
    badgeOutline,
    color,
    cardTitle,
    cardSubtitle,
    complementaryInfo,
    icon,
    pressed,
    clickable,
    onCardClick,
    clickPayload,
    customClass,
    disabled,
  } = props;

  const className = classNames(
    'Card',
    pressed && 'pressed',
    color ? color : 'red',
    clickable && 'clickable',
    disabled && 'disabled',
    customClass,
  );

  let clickableProps = {
    role: 'button',
    tabIndex: '0',
    onClick: () => onCardClick(clickPayload),
    onKeyPress: () => onCardClick(clickPayload),
  };

  if (pressed) clickableProps['aria-pressed'] = true;
  if (!clickable) clickableProps = {};

  return (
    <div id={id} className={className} {...clickableProps}>
      <div className="cardBody">
        <div className="cardBodyText">
          {badge && (
            <div className="cardBadge">
              <Badge
                color={color}
                outline={badgeOutline}
                customClass={['pressedBadge']}
              >
                {badge}
              </Badge>
            </div>
          )}
          <div className="cardTitle">
            {cardTitle && <h3>{cardTitle}</h3>}
            {cardSubtitle && (
              <span className="cardSubtitle">{cardSubtitle}</span>
            )}
          </div>
          {complementaryInfo && (
            <span className="complementaryInfo">{complementaryInfo}</span>
          )}
        </div>
        {icon && <div className="cardBodyIcon">{icon}</div>}
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  badge: PropTypes.string,
  color: PropTypes.oneOf(['red', 'green', 'blue', 'yellow', 'grey', 'sky']),
  badgeOutline: PropTypes.bool,
  cardTitle: PropTypes.string,
  cardSubtitle: PropTypes.string,
  complementaryInfo: PropTypes.string,
  onCardClick: PropTypes.func,
  clickPayload: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.number,
  ]),
  clickable: PropTypes.bool,
  pressed: PropTypes.bool,
  icon: PropTypes.node,
  disabled: PropTypes.bool,
  customClass: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
};

Card.defaultProps = {
  badgeOutline: false,
  onCardClick: null,
};

export default Card;
