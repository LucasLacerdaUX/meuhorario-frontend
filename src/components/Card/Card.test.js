import React from 'react';
import {shallow, mount} from 'enzyme';
import Card from '.';

describe('Card', () => {
  it('should render correctly', () => {
    const component = shallow(<Card />);
    expect(component.find('.Card').length).toEqual(1);
  });

  it('should render a customClass when passed', () => {
    const component = shallow(<Card customClass="customCard" />);
    expect(component.find('.Card').hasClass('customCard')).toEqual(true);
  });

  it('should have a badge when passed', () => {
    const component = mount(<Card badge="Test" />);
    expect(component.find('.Badge').text()).toEqual('Test');
  });

  it('should have an outlined badge when passed', () => {
    const component = mount(<Card badge="Test" badgeOutline />);
    expect(component.find('.Badge').hasClass('outline')).toEqual(true);
  });

  it('should have an id when passed', () => {
    const component = mount(<Card id="CardId" />);
    expect(component.getDOMNode().attributes.getNamedItem('id').value).toEqual(
      'CardId',
    );
  });

  it('should execute the onClick method when clicked', () => {
    const mockClick = jest.fn();
    const testPayload = 'payload';
    const component = mount(
      <Card clickable onClick={mockClick} clickPayload={testPayload} />,
    );
    component
      .find('.Card')
      .at(0)
      .simulate('click');

    expect(mockClick).toHaveBeenCalledWith(testPayload);
  });

  it('should execute the onClick method on keyPress', () => {
    const mockClick = jest.fn();
    const testPayload = 'payload';
    const component = mount(
      <Card clickable onClick={mockClick} clickPayload={testPayload} />,
    );
    component
      .find('.Card')
      .at(0)
      .simulate('keypress');

    expect(mockClick).toHaveBeenCalledWith(testPayload);
  });

  it('should render the title text', () => {
    const component = shallow(<Card cardTitle="Card Title" />);
    expect(component.text()).toContain('Card Title');
  });

  it('should render the subtitle text', () => {
    const component = shallow(<Card cardSubtitle="Card Subtitle" />);
    expect(component.text()).toContain('Card Subtitle');
  });

  it('should render the complementaryInfo text', () => {
    const component = shallow(<Card complementaryInfo="EXTRA TEXT" />);
    expect(component.text()).toContain('EXTRA TEXT');
  });

  it('should render the icon', () => {
    const component = shallow(<Card icon="icon" />);
    expect(component.text()).toContain('icon');
  });

  it('should be clickable when passed', () => {
    const component = shallow(<Card clickable />);
    expect(component.find('.Card').hasClass('isClickable')).toEqual(true);
  });

  it('should be pressed when passed', () => {
    const component = shallow(<Card pressed />);
    expect(component.find('.Card').hasClass('isPressed')).toEqual(true);
  });

  it('should be disabled when passed', () => {
    const component = shallow(<Card disabled />);
    expect(component.find('.Card').hasClass('isDisabled')).toEqual(true);
  });

  it('should have aria-pressed when pressed', () => {
    const component = mount(<Card clickable id="button" pressed />);
    expect(
      component.getDOMNode().attributes.getNamedItem('aria-pressed').value,
    ).toEqual('true');
  });

  it('render the color correctly', () => {
    const component = shallow(<Card color="red" />);
    expect(component.find('.Card').hasClass('red')).toEqual(true);
  });

  it('render the card red when no color passed', () => {
    const component = shallow(<Card />);
    expect(component.find('.Card').hasClass('red')).toEqual(true);
  });
});
