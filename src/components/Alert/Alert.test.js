import React from 'react';
import {shallow} from 'enzyme';
import Alert from './Alert';

describe('Alert', () => {
  it('should render correctly', () => {
    const component = shallow(<Alert />);
    expect(component.find('.Alert').length).toEqual(1);
  });
  it('should render the color correctly', () => {
    const component = shallow(<Alert color="red" />);
    expect(component.find('.Alert').hasClass('red')).toEqual(true);
  });
  it('should render a customClass when passed', () => {
    const component = shallow(<Alert customClass="customAlert" />);
    expect(component.find('.Alert').hasClass('customAlert')).toEqual(true);
  });
  it('should render the children text', () => {
    const component = shallow(
      <Alert customClass="customAlert">inside text</Alert>,
    );
    expect(component.text()).toEqual('inside text');
  });
});
