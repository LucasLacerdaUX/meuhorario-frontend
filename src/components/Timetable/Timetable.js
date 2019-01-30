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
  const {startingHour, endingHour, onClick, aulas} = props;
  let {days} = props;
  days = days > 6 || days < 1 ? 6 : days;

  const timetable = Array.from(Array(endingHour - startingHour + 1), () => [
    ...Array(days).keys(),
  ]);

  for (let i = 0; i < timetable.length; i++) {
    timetable[i] = timetable[i].map((value) => <td key={`${i}-${value}`} />);
  }

  aulas.forEach((aula) => {
    aula.timeslots.forEach((timeslot) => {
      const duration = timeslot.endingHour - timeslot.startingHour;
      const startsAt = timeslot.startingHour - startingHour;

      if (startsAt < 0 || startsAt > endingHour) return;
      if (duration < 1) return;
      if (timeslot.day >= days) return;

      const className = classNames(
        aula.color ? styles[aula.color] : styles.red,
      );
      timetable[startsAt][timeslot.day] = (
        <td
          key={`${aula.code}-${timeslot.day}-${startsAt}`}
          role="gridcell"
          tabIndex="0"
          className={className}
          rowSpan={duration}
          onClick={onClick}
        >
          <Icon
            name="deleteIcon"
            accessibilityLabel="Remove class from table"
            customClass={styles.deleteIcon}
            color="white"
          />
          <div class={styles.classContent}>
            <span>{aula.name}</span>
            <span>{aula.shortName}</span>
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

  const daysColumnHead = [];
  for (let i = 0; i < days; i++) {
    daysColumnHead.push(
      <th scope="col" key={daysOfWeek[i]}>
        {daysOfWeek[i]}
      </th>,
    );
  }

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
  aulas: PropTypes.arrayOf(PropTypes.object),
  days: PropTypes.number,
  onClick: PropTypes.func,
};

export default Timetable;
