import React from 'react';
import PropTypes from 'prop-types';
import {daysOfWeek} from '../../utils/constants';
import Icon from '../Icon';
import './Timetable.scss';

const classNames = require('classnames');

/** A Timetable to display events */
const Timetable = (props) => {
  const {startingHour, endingHour, onClick, events} = props;
  let {days} = props;
  days = days > 7 || days < 1 ? 7 : days;

  const timetable = Array.from(Array(endingHour - startingHour + 1), () => [
    ...Array(days).keys(),
  ]);

  for (let i = 0; i < timetable.length; i++) {
    timetable[i] = timetable[i].map((value) => <td key={`${i}-${value}`} />);
  }

  if (events) {
    events.forEach((event) => {
      event.timeslots.forEach((timeslot) => {
        const duration = timeslot.endingHour - timeslot.startingHour;
        const startsAt = timeslot.startingHour - startingHour;

        if (startsAt < 0 || timeslot.startingHour > endingHour) return;
        if (duration < 1) return;
        if (timeslot.day >= days) return;

        const className = classNames(
          'Event',
          event.color ? event.color : 'red',
        );

        timetable[startsAt][timeslot.day] = (
          <td
            key={`${event.id}-${timeslot.day}-${startsAt}`}
            rowSpan={duration}
          >
            <div
              role="button"
              data-id={event.id}
              onClick={() => onClick(event.id)}
              onKeyDown={(evt) => {
                if (evt.which === 13 || evt.which === 32) onClick(event.id);
              }}
              className={className}
              tabIndex="0"
            >
              <span className="EventName">{event.name.toLowerCase()}</span>
              <span className="EventShortname">
                <acronym title={event.name}>{event.shortName}</acronym>
              </span>
              <span className="EventDesc">T{event.classId}</span>
              <Icon
                name="deleteIcon"
                accessibilityLabel="Click to remove class from table"
                customClass={['DeleteIcon']}
              />
            </div>
          </td>
        );

        for (let i = 1; i < duration; i++) {
          timetable[startsAt + i] = timetable[startsAt + i].map(
            (value, index) => (timeslot.day === index ? null : value),
          );
        }
      });
    });
  }

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
        <th scope="row">{i}h</th>
        {timetable[i - startingHour]}
      </tr>,
    );
  }

  return (
    <table className="Timetable">
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
  /** The minimum hour displayed on the table */
  startingHour: PropTypes.number,
  /** The maximum hour displayed on the table */
  endingHour: PropTypes.number,
  /** The events object */
  events: PropTypes.arrayOf(PropTypes.object),
  /** The count of days (max: 7) */
  days: PropTypes.number,
  /** The function executed when clicking an event inside of the Timetable */
  onClick: PropTypes.func,
};

Timetable.defaultProps = {
  startingHour: 7,
  endingHour: 23,
  days: 6,
};

export default Timetable;
