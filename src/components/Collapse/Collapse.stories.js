import React from 'react';
import {storiesOf} from '@storybook/react';
import Collapse from '.';

storiesOf('Collapse', module).add('sample', () => (
  <Collapse title="click to expand or hide">
    Congratulations, you have successfully expanded the content region.
  </Collapse>
));
