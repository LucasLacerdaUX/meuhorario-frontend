import React from 'react';
import {storiesOf} from '@storybook/react';
import Toast from '.';

storiesOf('Toast', module)
  .add('with no buttonColor', () => (
    <Toast buttonLabel="Undo">
      This is a really big text inside of toast indicating that you have removed
      something.
    </Toast>
  ))
  .add('with buttonColor=yellow', () => (
    <Toast buttonLabel="Undo" buttonColor="yellow">
      This is a really big text inside of toast indicating that you have removed
      something.
    </Toast>
  ))
  .add('with buttonColor=blue', () => (
    <Toast buttonLabel="Undo" buttonColor="blue">
      This is a really big text inside of toast indicating that you have removed
      something.
    </Toast>
  ))
  .add('with buttonColor=green', () => (
    <Toast buttonLabel="Undo" buttonColor="green">
      This is a really big text inside of toast indicating that you have removed
      something.
    </Toast>
  ))
  .add('with buttonColor=sky', () => (
    <Toast buttonLabel="Undo" buttonColor="sky">
      This is a really big text inside of toast indicating that you have removed
      something.
    </Toast>
  ))
  .add('with buttonColor=grey', () => (
    <Toast buttonLabel="Undo" buttonColor="grey">
      This is a really big text inside of toast indicating that you have removed
      something.
    </Toast>
  ));
