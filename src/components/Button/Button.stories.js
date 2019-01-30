import React from 'react';
import {storiesOf} from '@storybook/react';
import Icon from '../Icon';
import Button from '.';

storiesOf('Button', module)
  .add('red', () => <Button color="red">Hello Button</Button>)
  .add('red outline', () => (
    <Button color="red" outline>
      Hello Button
    </Button>
  ))
  .add('red outline onlyText', () => (
    <Button color="red" outline onlyText>
      Hello Button
    </Button>
  ))
  .add('green', () => <Button color="green">Hello Button</Button>)
  .add('green outline', () => (
    <Button color="green" outline>
      Hello Button
    </Button>
  ))
  .add('green outline onlyText', () => (
    <Button color="green" outline onlyText>
      Hello Button
    </Button>
  ))
  .add('blue', () => <Button color="blue">Hello Button</Button>)
  .add('blue outline', () => (
    <Button color="blue" outline>
      Hello Button
    </Button>
  ))
  .add('blue outline onlyText', () => (
    <Button color="blue" outline onlyText>
      Hello Button
    </Button>
  ))
  .add('yellow', () => <Button color="yellow">Hello Button</Button>)
  .add('yellow outline', () => (
    <Button color="yellow" outline>
      Hello Button
    </Button>
  ))
  .add('yellow outline onlyText', () => (
    <Button color="yellow" outline onlyText>
      Hello Button
    </Button>
  ))
  .add('grey', () => <Button color="grey">Hello Button</Button>)
  .add('grey outline', () => (
    <Button color="grey" outline>
      Hello Button
    </Button>
  ))
  .add('grey outline onlyText', () => (
    <Button color="grey" outline onlyText>
      Hello Button
    </Button>
  ))
  .add('sky', () => <Button color="sky">Hello Button</Button>)
  .add('sky outline', () => (
    <Button color="sky" outline>
      Hello Button
    </Button>
  ))
  .add('sky outline onlyText', () => (
    <Button color="sky" outline onlyText>
      Hello Button
    </Button>
  ))
  .add('full width', () => (
    <Button color="red" fullWidth>
      Hello Button
    </Button>
  ))
  .add('small', () => (
    <Button color="red" small>
      Hello Button
    </Button>
  ))
  .add('large', () => (
    <Button color="red" large>
      Hello Button
    </Button>
  ))
  .add('icon', () => (
    <Button color="red" onlyIcon>
      <Icon name="deleteIcon" color="red" size="small" />
    </Button>
  ));
