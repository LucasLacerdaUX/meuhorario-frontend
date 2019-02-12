import React from 'react';
import {storiesOf} from '@storybook/react';
import Input from '.';

storiesOf('Input', module)
  .add('text input', () => (
    <Input
      name="teste"
      type="text"
      placeholder="Search"
      accessibilityLabel="Search"
    />
  ))
  .add('invalid input', () => (
    <Input
      name="teste"
      type="text"
      placeholder="Username"
      accessibilityLabel="Username"
      invalid
    />
  ));
