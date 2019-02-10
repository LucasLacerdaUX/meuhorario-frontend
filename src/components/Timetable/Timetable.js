/*
 *
 * TODO:
 * Accessibility improvements (study to see what is possible)
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import {daysOfWeek} from '../../utils/constants';
import Icon from '../Icon';
import * as styles from './Timetable.module.scss';

const classNames = require('classnames');

const Timetable = (props) => {
  const {startingHour, endingHour, onClick, events} = props;
  let {days} = props;
  days = days > 6 || days < 1 ? 6 : days;

  const timetable = Array.from(Array(endingHour - startingHour + 1), () => [
    ...Array(days).keys(),
  ]);

  for (let i = 0; i < timetable.length; i++) {
    timetable[i] = timetable[i].map((value) => <td key={`${i}-${value}`} />);
  }

  events.forEach((event) => {
    event.timeslots.forEach((timeslot) => {
      const duration = timeslot.endingHour - timeslot.startingHour;
      const startsAt = timeslot.startingHour - startingHour;

      if (startsAt < 0 || timeslot.startingHour > endingHour) return;
      if (duration < 1) return;
      if (timeslot.day >= days) return;

      const className = classNames(
        event.color ? styles[event.color] : styles.red,
      );

      timetable[startsAt][timeslot.day] = (
        <td
          key={`${event.id}-${timeslot.day}-${startsAt}`}
          role="gridcell"
          tabIndex="0"
          className={className}
          rowSpan={duration}
          onClick={() => onClick(event.id)}
        >
          <Icon
            name="deleteIcon"
            accessibilityLabel="Remove class from table"
            customClass={[styles.deleteIcon]}
            color="white"
          />
          <div className={styles.classContent}>
            <span className={styles.contentTitle}>
              {event.name.toLowerCase()}
            </span>
            <span className={styles.contentSubtitle}>
              Turma {event.classId}
            </span>
          </div>
        </td>
      );

      for (let i = 1; i < duration; i++) {
        timetable[startsAt + i] = timetable[startsAt + i].map((value, index) =>
          timeslot.day === index ? null : value,
        );
      }
    });
  });

  // Rendering of the Table Headers (Columns)
  const daysColumnHead = [];
  for (let i = 0; i < days; i++) {
    daysColumnHead.push(
      <th scope="col" key={daysOfWeek[i]}>
        {daysOfWeek[i]}
      </th>,
    );
  }

  // Rendering of the Table Headers (Rows)
  const hourRows = [];
  for (let i = startingHour; i <= endingHour; i++) {
    hourRows.push(
      <tr key={`${i}:00`}>
        <th scope="row">{i}:00</th>
        {timetable[i - startingHour]}
      </tr>,
    );
  }

  return (
    <table role="grid" className={styles.Timetable}>
      <thead>
        <tr>
          <th scope="col" />
          {daysColumnHead}
        </tr>
      </thead>
      <tbody>{hourRows}</tbody>
    </table>
  );
};

Timetable.propTypes = {
  startingHour: PropTypes.number,
  endingHour: PropTypes.number,
  events: PropTypes.arrayOf(PropTypes.object),
  days: PropTypes.number,
  onClick: PropTypes.func,
};

export default Timetable;
