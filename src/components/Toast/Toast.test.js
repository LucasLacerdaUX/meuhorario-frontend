import React from 'react';
import {mount} from 'enzyme';
import Toast from '.';

describe('Toast', () => {
  let component;
  const mockClick = jest.fn();
  beforeAll(() => {
    component = mount(
      <Toast onButtonClick={mockClick} buttonColor="red" buttonLabel="UNDO">
        Toast text
      </Toast>,
    );
  });

  it('should render correctly', () => {
    expect(component.find('.Toast').length).toEqual(1);
  });

  it('should render text', () => {
    expect(component.text()).toContain('Toast text');
  });

  it('should render button text', () => {
    expect(component.find('.Button').text()).toEqual('UNDO');
  });

  it('should render button color', () => {
    expect(component.find('.Button').hasClass('red')).toEqual(true);
  });

  it('should execute onButtonClick when clicked', () => {
    component
      .find('.Button')
      .at(0)
      .simulate('click');
    expect(mockClick).toBeCalled();
  });
});
