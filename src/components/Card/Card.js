/*
 * TODO: Add aria-pressed state when props.pressed=true.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Badge from '../Badge';
import * as styles from './Card.module.scss';

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
    styles.Card,
    pressed && styles.pressed,
    color ? styles[color] : styles.red,
    clickable && styles.clickable,
    disabled && styles.disabled,
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
      <div className={styles.cardBody}>
        <div className={styles.cardBodyText}>
          {badge && (
            <div className={styles.cardBadge}>
              <Badge
                color={color}
                outline={badgeOutline}
                customClass={[styles.pressedBadge]}
              >
                {badge}
              </Badge>
            </div>
          )}
          <div className={styles.cardTitle}>
            {cardTitle && <h3>{cardTitle}</h3>}
            {cardSubtitle && (
              <span className={styles.cardSubtitle}>{cardSubtitle}</span>
            )}
          </div>
          {complementaryInfo && (
            <span className={styles.complementaryInfo}>
              {complementaryInfo}
            </span>
          )}
        </div>
        {icon && <div className={styles.cardBodyIcon}>{icon}</div>}
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
  customClass: PropTypes.arrayOf(PropTypes.string),
};

Card.defaultProps = {
  color: 'red',
  badgeOutline: false,
  onCardClick: null,
};

export default Card;
