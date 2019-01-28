import React from 'react';
import {storiesOf} from '@storybook/react';
import Alert from '.';

storiesOf('Alert', module)
  .add('red', () => (
    <Alert red>
      This is an alert using the red attribute. You can insert some messages
      here.
    </Alert>
  ))
  .add('green', () => (
    <Alert green>
      This is an alert using the green attribute. You can insert some messages
      here.
    </Alert>
  ))
  .add('blue', () => (
    <Alert blue>
      This is an alert using the blue attribute. You can insert some messages
      here.
    </Alert>
  ))
  .add('yellow', () => (
    <Alert yellow>
      This is an alert using the yellow attribute. You can insert some messages
      here.
    </Alert>
  ))
  .add('grey', () => (
    <Alert grey>
      This is an alert using the grey attribute. You can insert some messages
      here.
    </Alert>
  ))
  .add('sky', () => (
    <Alert sky>
      This is an alert using the sky attribute. You can insert some messages
      here.
    </Alert>
  ));
