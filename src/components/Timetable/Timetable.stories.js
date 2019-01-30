import React from 'react';
import {storiesOf} from '@storybook/react';
import Timetable from '.';

const aulas = [
  {
    code: 'GDSC02574',
    name: 'Cálculo Vetorial e Geometria Analítica',
    shortName: 'CVGA',
    color: 'red',
    timeslots: [
      {day: 0, startingHour: 8, endingHour: 10},
      {day: 2, startingHour: 10, endingHour: 12},
      {day: 4, startingHour: 12, endingHour: 14},
    ],
  },
  {
    code: 'GDSC02573',
    name: 'Cálculo Vetorial e Geometria Analítica',
    shortName: 'CALC 1',
    color: 'blue',
    timeslots: [
      {day: 1, startingHour: 12, endingHour: 16},
      {day: 2, startingHour: 8, endingHour: 10},
    ],
  },
];

storiesOf('Timetable', module).add('test', () => (
  <Timetable days={6} startingHour={7} endingHour={20} aulas={aulas} />
));
