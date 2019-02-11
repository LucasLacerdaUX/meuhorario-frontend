import React from 'react';
import {shallow, mount} from 'enzyme';
import Button from '.';

describe('Button', () => {
  it('should render correctly', () => {
    const component = shallow(<Button />);
    expect(component.find('.Button').length).toEqual(1);
  });

  it('render the color correctly', () => {
    const component = shallow(<Button color="red" />);
    expect(component.find('.Button').hasClass('red')).toEqual(true);
  });

  it('should render a customClass when passed', () => {
    const component = shallow(<Button customClass="customButton" />);
    expect(component.find('.Button').hasClass('customButton')).toEqual(true);
  });

  it('should have a darkBG when passed', () => {
    const component = shallow(<Button darkBG />);
    expect(component.find('.Button').hasClass('darkBG')).toEqual(true);
  });

  it('should be onlyText when passed', () => {
    const component = shallow(<Button onlyText />);
    expect(component.find('.Button').hasClass('onlyText')).toEqual(true);
  });

  it('should be onlyIcon when passed', () => {
    const component = shallow(<Button onlyIcon />);
    expect(component.find('.Button').hasClass('onlyIcon')).toEqual(true);
  });

  it('should be small when passed', () => {
    const component = shallow(<Button small />);
    expect(component.find('.Button').hasClass('small')).toEqual(true);
  });

  it('should be fullWidth when passed', () => {
    const component = shallow(<Button fullWidth />);
    expect(component.find('.Button').hasClass('fullWidth')).toEqual(true);
  });

  it('should be large when passed', () => {
    const component = shallow(<Button large />);
    expect(component.find('.Button').hasClass('large')).toEqual(true);
  });

  it('should have an outline when passed', () => {
    const component = shallow(<Button outline />);
    expect(component.find('.Button').hasClass('outline')).toEqual(true);
  });

  it('should be [type="submit"] when passed', () => {
    const component = mount(<Button submit />);
    expect(
      component.getDOMNode().attributes.getNamedItem('type').value,
    ).toEqual('submit');
  });

  it('should be [type="button"] when submit not passed', () => {
    const component = mount(<Button />);
    expect(
      component.getDOMNode().attributes.getNamedItem('type').value,
    ).toEqual('button');
  });

  it('should have an aria-label when passed', () => {
    const component = mount(<Button accessibilityLabel="Button Description" />);
    expect(
      component.getDOMNode().attributes.getNamedItem('aria-label').value,
    ).toEqual('Button Description');
  });

  it('should have an aria-controls when passed', () => {
    const component = mount(<Button ariaControls="element" />);
    expect(
      component.getDOMNode().attributes.getNamedItem('aria-controls').value,
    ).toEqual('element');
  });

  it('should have an aria-expanded when passed', () => {
    const component = mount(<Button ariaExpanded />);
    expect(
      component.getDOMNode().attributes.getNamedItem('aria-expanded').value,
    ).toEqual('true');
  });

  it('should have an aria-pressed when passed', () => {
    const component = mount(<Button ariaPressed />);
    expect(
      component.getDOMNode().attributes.getNamedItem('aria-pressed').value,
    ).toEqual('true');
  });

  it('should have an id when passed', () => {
    const component = mount(<Button id="buttonId" />);
    expect(component.getDOMNode().attributes.getNamedItem('id').value).toEqual(
      'buttonId',
    );
  });

  it('should execute the onClick method when clicked', () => {
    const mockClick = jest.fn();
    const component = mount(<Button onClick={mockClick} />);
    component
      .find('.Button')
      .at(0)
      .simulate('click');

    expect(mockClick).toHaveBeenCalled();
  });

  it('should render the children text', () => {
    const component = shallow(
      <Button customClass="customButton">inside text</Button>,
    );
    expect(component.text()).toEqual('inside text');
  });
});
