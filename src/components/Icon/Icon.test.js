import React from 'react';
import {shallow} from 'enzyme';
import Icon from '.';

describe('Icon', () => {
  it('should render correctly', () => {
    const component = shallow(<Icon name="bookmark" />);
    expect(component.find('.Icon').length).toEqual(1);
  });

  it('should render the color correctly', () => {
    const component = shallow(<Icon name="bookmark" color="blue" />);
    expect(component.find('.Icon').hasClass('blue')).toEqual(true);
  });

  it('should render the size correctly', () => {
    const component = shallow(<Icon name="bookmark" size="large" />);
    expect(component.find('.Icon').hasClass('large')).toEqual(true);
  });

  it('should set the cursor to pointer when passed', () => {
    const component = shallow(<Icon name="bookmark" clickable />);
    expect(component.find('.Icon').hasClass('isClickable')).toEqual(true);
  });

  it('should render the accessibilityLabel correctly', () => {
    const component = shallow(
      <Icon name="bookmark" accessibilityLabel="Icon Label" />,
    );
    expect(component.find('.visually-hidden').text()).toEqual('Icon Label');
  });
});
