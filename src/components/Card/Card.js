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
    customClass,
  } = props;

  const className = classNames(
    styles.Card,
    pressed && styles.pressed,
    color ? styles[color] : styles.red,
    customClass,
  );

  let clickableProps = {
    role: 'button',
    tabIndex: '0',
    onClick: onCardClick,
    onKeyPress: onCardClick,
  };

  if (!clickable) clickableProps = {};

  return (
    <div className={className} {...clickableProps}>
      <div className={styles.cardBody}>
        <div className={styles.cardBodyText}>
          {badge && (
            <div className={styles.cardBadge}>
              <Badge
                color={color}
                customClass={pressed && styles.pressedBadge}
                outline={badgeOutline}
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
  badge: PropTypes.string,
  color: PropTypes.oneOf(['red', 'green', 'blue', 'yellow', 'grey', 'sky']),
  badgeOutline: PropTypes.bool,
  cardTitle: PropTypes.string,
  cardSubtitle: PropTypes.string,
  complementaryInfo: PropTypes.string,
  onCardClick: PropTypes.func,
  clickable: PropTypes.bool,
  pressed: PropTypes.bool,
  icon: PropTypes.node,
  customClass: PropTypes.arrayOf(PropTypes.string),
};

Card.defaultProps = {
  color: 'red',
  badgeOutline: false,
  onCardClick: null,
};

export default Card;
