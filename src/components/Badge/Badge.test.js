import React from 'react';
import {shallow} from 'enzyme';
import Badge from './Badge';

describe('Alert', () => {
  it('should render correctly', () => {
    const component = shallow(<Badge />);
    expect(component.find('.Badge').length).toEqual(1);
  });

  it('render the color correctly', () => {
    const component = shallow(<Badge color="red" />);
    expect(component.find('.Badge').hasClass('red')).toEqual(true);
  });

  it('should render a customClass when passed', () => {
    const component = shallow(<Badge customClass="customBadge" />);
    expect(component.find('.Badge').hasClass('customBadge')).toEqual(true);
  });

  it('should have a darkBG when passed', () => {
    const component = shallow(<Badge darkBG />);
    expect(component.find('.Badge').hasClass('darkBG')).toEqual(true);
  });

  it('should have an outline when passed', () => {
    const component = shallow(<Badge outline />);
    expect(component.find('.Badge').hasClass('outline')).toEqual(true);
  });

  it('should render the children text', () => {
    const component = shallow(
      <Badge customClass="customBadge">inside text</Badge>,
    );
    expect(component.text()).toEqual('inside text');
  });
});
