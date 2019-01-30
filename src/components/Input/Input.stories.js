import React from 'react';
import {storiesOf} from '@storybook/react';
import Input from '.';

storiesOf('Input', module)
  .add('text input', () => (
    <Input
      inputName="teste"
      inputType="text"
      inputPlaceholder="Search"
      accessibilityLabel="Search"
    />
  ))
  .add('invalid input', () => (
    <Input
      inputName="teste"
      inputType="text"
      inputPlaceholder="Username"
      accessibilityLabel="Username"
      isInvalid
    />
  ));
