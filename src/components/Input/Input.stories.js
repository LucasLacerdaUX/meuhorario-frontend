import React from 'react';
import {storiesOf} from '@storybook/react';
import Input from '.';

storiesOf('Input', module)
  .add('text input', () => (
    <Input
      inputName="teste"
      inputType="text"
      inputPlaceholder="Search"
      labelText="Search"
    />
  ))
  .add('invalid input', () => (
    <Input
      inputName="teste"
      inputType="text"
      inputPlaceholder="Username"
      labelText="Username"
      isInvalid
    />
  ));
