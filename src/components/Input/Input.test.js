import React from 'react';
import {mount} from 'enzyme';
import Input from '.';

describe('Input', () => {
  let component;
  const mockChange = jest.fn();
  const mockBlur = jest.fn();

  beforeAll(() => {
    component = mount(
      <Input
        inputName="password"
        inputType="text"
        inputPlaceholder="Enter your password"
        inputDesc="Your password should not be empty"
        accessibilityLabel="Password"
        customClass="customInput"
        inputValue="Test"
        onChange={mockChange}
        onBlur={mockBlur}
        maxLength="40"
        isInvalid
      />,
    );
  });

  it('should render an input', () => {
    expect(component.find('input').length).toEqual(1);
  });

  it('should render a label', () => {
    expect(component.find('#password-label').length).toEqual(1);
  });

  it('should render a description', () => {
    expect(component.find('#password-hint').length).toEqual(1);
  });

  it('should render a name', () => {
    expect(
      component
        .find('input')
        .getDOMNode()
        .attributes.getNamedItem('name').value,
    ).toEqual('password');
  });

  it('should render an id', () => {
    expect(
      component
        .find('input')
        .getDOMNode()
        .attributes.getNamedItem('id').value,
    ).toEqual('password');
  });

  it('should render a type', () => {
    expect(
      component
        .find('input')
        .getDOMNode()
        .attributes.getNamedItem('type').value,
    ).toEqual('text');
  });

  it('should render aria-labelledby', () => {
    expect(
      component
        .find('input')
        .getDOMNode()
        .attributes.getNamedItem('aria-labelledby').value,
    ).toEqual('password-label');
  });

  it('should render aria-describedby', () => {
    expect(
      component
        .find('input')
        .getDOMNode()
        .attributes.getNamedItem('aria-describedby').value,
    ).toEqual('password-hint');
  });

  it('should render a value', () => {
    expect(
      component
        .find('input')
        .getDOMNode()
        .attributes.getNamedItem('value').value,
    ).toEqual('Test');
  });

  it('should perform onChange', () => {
    component.find('input').simulate('change');
    expect(mockChange).toBeCalled();
  });

  it('should perform onBlur', () => {
    component.find('input').simulate('blur');
    expect(mockBlur).toBeCalled();
  });

  it('should render extraProps', () => {
    expect(
      component
        .find('input')
        .getDOMNode()
        .attributes.getNamedItem('maxlength').value,
    ).toEqual('40');
  });

  it('should be invalid', () => {
    expect(
      component
        .find('input')
        .getDOMNode()
        .attributes.getNamedItem('aria-invalid').value,
    ).toEqual('true');

    expect(component.find('input').hasClass('invalid')).toEqual(true);
  });
});
