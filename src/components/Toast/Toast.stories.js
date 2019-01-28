import React from 'react';
import {storiesOf} from '@storybook/react';
import Toast from '.';

storiesOf('Toast', module).add('Sample Toast', () => (
  <Toast buttonLabel="Undo">
    This is a really big text inside of toast indicating that you have removed
    something.
  </Toast>
));
