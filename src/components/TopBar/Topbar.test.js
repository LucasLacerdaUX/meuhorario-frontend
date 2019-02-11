import React from 'react';
import {shallow} from 'enzyme';
import Topbar from '.';

describe('Topbar', () => {
  it('should render correctly', () => {
    const component = shallow(<Topbar />);
    expect(component.find('.TopBar').length).toEqual(1);
  });
});
