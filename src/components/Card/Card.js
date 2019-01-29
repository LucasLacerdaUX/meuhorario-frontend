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
    onCardClick,
  } = props;

  const className = classNames(styles.Card, color ? styles[color] : styles.red);

  return (
    <div
      className={className}
      role="button"
      tabIndex="0"
      onClick={onCardClick}
      onKeyPress={onCardClick}
    >
      <div className={styles.cardBody}>
        <div className={styles.cardBodyText}>
          {badge && (
            <div className={styles.cardBadge}>
              <Badge color={color} outline={badgeOutline}>
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
  icon: PropTypes.node,
};

Card.defaultProps = {
  color: 'red',
  badgeOutline: false,
};

export default Card;
