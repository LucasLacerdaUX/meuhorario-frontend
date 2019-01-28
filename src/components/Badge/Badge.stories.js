import React from 'react';
import {storiesOf} from '@storybook/react';
import Badge from '.';

storiesOf('Badge', module)
  .add('red', () => <Badge color="red">Badge</Badge>)
  .add('green', () => <Badge color="green">Badge</Badge>)
  .add('blue', () => <Badge color="blue">Badge</Badge>)
  .add('yellow', () => <Badge color="yellow">Badge</Badge>)
  .add('grey', () => <Badge color="grey">Badge</Badge>)
  .add('sky', () => <Badge color="sky">Badge</Badge>);
