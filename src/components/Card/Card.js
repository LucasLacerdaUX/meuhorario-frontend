/*
 * TODO: Add aria-pressed state when props.pressed=true.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Badge from '../Badge';
import './Card.scss';

const classNames = require('classnames');

/** A card component. Can contain a title, a subtitle, a descriptive text to show complementary info and an icon. Can be clickable or not, and if clickable, can be set to pressed/non-pressed states. */
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
    onClick,
    clickPayload,
    customClass,
    disabled,
  } = props;

  const className = classNames(
    'Card',
    pressed && 'pressed',
    color,
    clickable && 'clickable',
    disabled && 'disabled',
    customClass,
  );

  let clickableProps = {
    role: 'button',
    tabIndex: '0',
    onClick: () => onClick(clickPayload),
    onKeyPress: () => onClick(clickPayload),
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
  /** The id of the card */
  id: PropTypes.string,
  /** The text inside of the card badge */
  badge: PropTypes.string,
  /** The color accent of the card */
  color: PropTypes.oneOf(['red', 'green', 'blue', 'yellow', 'grey', 'sky']),
  /** Should the badge have an outline and a transparent background? */
  badgeOutline: PropTypes.bool,
  /** The card title (optional) */
  cardTitle: PropTypes.string,
  /** The card subtitle (optional) */
  cardSubtitle: PropTypes.string,
  /** The card complementary info (optional) */
  complementaryInfo: PropTypes.string,
  /** Should the card be clickable? */
  clickable: PropTypes.bool,
  /** The function executed on card click if the card is clickable */
  onClick: PropTypes.func,
  /** The payload inside the card click function */
  clickPayload: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.number,
  ]),
  /** Is the card pressed (toggled)? */
  pressed: PropTypes.bool,
  /** Action Icon on the right side of a card */
  icon: PropTypes.node,
  /** Is the card disabled? */
  disabled: PropTypes.bool,
  /** A custom class or an array of custom classes the component can have */
  customClass: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
};

Card.defaultProps = {
  color: 'red',
  badgeOutline: false,
  onCardClick: null,
};

export default Card;
