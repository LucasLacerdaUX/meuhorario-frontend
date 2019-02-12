import React from 'react';
import {storiesOf} from '@storybook/react';
import Timetable from '.';

const aulas = [
  {
    id: 'GDSC02574',
    classId: '2',
    name: 'Cálculo I',
    shortName: 'CALC I',
    color: 'yellow',
    timeslots: [
      {day: 0, startingHour: 8, endingHour: 10},
      {day: 2, startingHour: 10, endingHour: 12},
      {day: 4, startingHour: 12, endingHour: 14},
    ],
  },
  {
    id: 'GDSC02573',
    classId: '2',
    name: 'Cálculo II',
    shortName: 'CALC II',
    color: 'blue',
    timeslots: [
      {day: 1, startingHour: 12, endingHour: 16},
      {day: 2, startingHour: 8, endingHour: 10},
    ],
  },
  {
    id: 'GDSC02575',
    classId: '3',
    name: 'Calculo III',
    shortName: 'CALC III',
    timeslots: [{day: 3, startingHour: 10, endingHour: 12}],
  },
  {
    id: 'GDSC02576',
    classId: '5',
    name: 'Cálculo IV',
    shortName: 'CALC IV',
    color: 'blue',
    timeslots: [
      {day: 2, startingHour: 4, endingHour: 5},
      {day: 3, startingHour: 12, endingHour: 12},
      {day: 2, startingHour: 24, endingHour: 25},
      {day: 8, startingHour: 20, endingHour: 21},
    ],
  },
];

storiesOf('Timetable', module)
  .add('empty', () => <Timetable />)
  .add('with events', () => (
    <Timetable days={6} startingHour={7} endingHour={23} events={aulas} />
  ))
  .add('with custom days count', () => (
    <Timetable days={2} startingHour={7} endingHour={23} events={aulas} />
  ))
  .add('with custom timerange', () => (
    <Timetable days={6} startingHour={8} endingHour={16} events={aulas} />
  ));
