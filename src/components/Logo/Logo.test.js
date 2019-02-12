import React from 'react';
import {shallow} from 'enzyme';
import Logo from '.';

describe('Logo', () => {
  it('should render correctly', () => {
    const component = shallow(<Logo />);
    expect(component.find('.Logo').length).toEqual(1);
  });
});
