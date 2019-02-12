/*
 * Hooks are not supported yet on Enzyme when using shallow (https://github.com/airbnb/enzyme/issues/1938)
 */

import React from 'react';
import {mount} from 'enzyme';
import Collapse from '.';

describe('Collapse', () => {
  let component;
  beforeEach(() => {
    component = mount(
      <Collapse id="collapseTest" title="Expand Section">
        Collapsed Content
      </Collapse>,
    );
  });
  it('should render correctly', () => {
    expect(component.find('.Collapse').length).toEqual(1);
  });
  it('should render a button', () => {
    expect(component.find('.Button').length).toEqual(1);
  });
  it('should render a title', () => {
    expect(component.find('.Button').text()).toEqual('Expand Section');
  });

  it('should have [aria-hidden=true by default]', () => {
    expect(
      component
        .find('#collapseTest')
        .at(1)
        .getDOMNode()
        .attributes.getNamedItem('aria-hidden').value,
    ).toEqual('true');
  });

  it('should automatically expand when autoOpen', () => {
    component = mount(
      <Collapse id="collapseTest" title="Expand Section" autoOpen>
        Collapsed Content
      </Collapse>,
    );

    expect(
      component
        .find('#collapseTest')
        .at(1)
        .getDOMNode()
        .attributes.getNamedItem('aria-hidden').value,
    ).toEqual('false');

    expect(component.text()).toContain('Collapsed Content');
  });

  it('should expand when clicked', () => {
    component
      .find('.Button')
      .at(0)
      .simulate('click');

    expect(component.text()).toContain('Collapsed Content');
  });
});
