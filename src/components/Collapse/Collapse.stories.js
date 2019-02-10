import React from 'react';
import {storiesOf} from '@storybook/react';
import Collapse from '.';

storiesOf('Collapse', module).add('red', () => (
  <Collapse title="red">Hello Button</Collapse>
));
