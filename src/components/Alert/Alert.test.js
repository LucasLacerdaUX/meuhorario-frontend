import React from 'react';
import {shallow} from 'enzyme';
import Alert from './Alert';

describe('Alert', () => {
  let component;
  beforeAll(() => {
    component = shallow(
      <Alert color="red" customClass="customAlert">
        inside text
      </Alert>,
    );
  });
  it('should render correctly', () => {
    expect(component.find('.Alert').length).toEqual(1);
  });
  it('should render the color correctly', () => {
    expect(component.find('.Alert').hasClass('red')).toEqual(true);
  });
  it('should render a customClass when passed', () => {
    expect(component.find('.Alert').hasClass('customAlert')).toEqual(true);
  });
  it('should render the children text', () => {
    expect(component.text()).toEqual('inside text');
  });
});
