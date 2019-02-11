import React from 'react';
import {shallow} from 'enzyme';
import Timetable from '.';

describe('Timetable', () => {
  let component;
  const mockClick = jest.fn();
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

  beforeAll(() => {
    component = shallow(
      <Timetable
        days={6}
        startingHour={7}
        endingHour={23}
        events={aulas}
        onClick={mockClick}
      />,
    );
  });

  it('should render a Timetable', () => {
    expect(component.find('.Timetable').length).toEqual(1);
  });

  it('should render classes', () => {
    expect(component.find('[data-id="GDSC02574"]').length).toEqual(3);
  });

  it('should render days as columns', () => {
    expect(component.find('th[scope="col"]').length).toEqual(7);
  });

  it('should render times as rows', () => {
    expect(component.find('th[scope="row"]').length).toEqual(17);
  });

  it('should render 7 days at max', () => {
    component = shallow(
      <Timetable
        days={15}
        startingHour={7}
        endingHour={23}
        onClick={mockClick}
        events={aulas}
      />,
    );
    expect(component.find('th[scope="col"]').length).toEqual(7);
  });

  it('should perform an action with event ID on click', () => {
    component
      .find('[data-id="GDSC02574"]')
      .at(0)
      .simulate('click');
    expect(mockClick).toBeCalledWith('GDSC02574');
  });

  it('should render a red class when no color is provided', () => {
    expect(component.find('[data-id="GDSC02575"]').hasClass('red')).toEqual(
      true,
    );
  });

  it('should render class info', () => {
    expect(component.find('[data-id="GDSC02575"]').text()).toContain(
      'calculo iii',
    );
    expect(component.find('[data-id="GDSC02575"]').text()).toContain(
      'CALC III',
    );
    expect(component.find('[data-id="GDSC02575"]').text()).toContain('T3');
  });
});
