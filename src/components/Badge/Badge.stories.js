import React from 'react';
import {storiesOf} from '@storybook/react';
import Badge from '.';

storiesOf('Badge', module)
  .add('red', () => <Badge color="red">Badge</Badge>)
  .add('red outline', () => (
    <Badge color="red" outline>
      Badge
    </Badge>
  ))
  .add('green', () => <Badge color="green">Badge</Badge>)
  .add('green outline', () => (
    <Badge color="green" outline>
      Badge
    </Badge>
  ))
  .add('blue', () => <Badge color="blue">Badge</Badge>)
  .add('blue outline', () => (
    <Badge color="blue" outline>
      Badge
    </Badge>
  ))
  .add('yellow', () => <Badge color="yellow">Badge</Badge>)
  .add('yellow outline', () => (
    <Badge color="yellow" outline>
      Badge
    </Badge>
  ))
  .add('grey', () => <Badge color="grey">Badge</Badge>)
  .add('grey outline', () => (
    <Badge color="grey" outline>
      Badge
    </Badge>
  ))
  .add('sky', () => <Badge color="sky">Badge</Badge>)
  .add('sky outline', () => (
    <Badge color="sky" outline>
      Badge
    </Badge>
  ));
