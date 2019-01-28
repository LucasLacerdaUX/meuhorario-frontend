import React from 'react';
import {storiesOf} from '@storybook/react';
import Button from '.';

storiesOf('Button', module)
  .add('red', () => <Button red>Hello Button</Button>)
  .add('red outline', () => (
    <Button red outline>
      Hello Button
    </Button>
  ))
  .add('red outline onlyText', () => (
    <Button red outline onlyText>
      Hello Button
    </Button>
  ))
  .add('green', () => <Button green>Hello Button</Button>)
  .add('green outline', () => (
    <Button green outline>
      Hello Button
    </Button>
  ))
  .add('green outline onlyText', () => (
    <Button green outline onlyText>
      Hello Button
    </Button>
  ))
  .add('blue', () => <Button blue>Hello Button</Button>)
  .add('blue outline', () => (
    <Button blue outline>
      Hello Button
    </Button>
  ))
  .add('blue outline onlyText', () => (
    <Button blue outline onlyText>
      Hello Button
    </Button>
  ))
  .add('yellow', () => <Button yellow>Hello Button</Button>)
  .add('yellow outline', () => (
    <Button yellow outline>
      Hello Button
    </Button>
  ))
  .add('yellow outline onlyText', () => (
    <Button yellow outline onlyText>
      Hello Button
    </Button>
  ))
  .add('grey', () => <Button grey>Hello Button</Button>)
  .add('grey outline', () => (
    <Button grey outline>
      Hello Button
    </Button>
  ))
  .add('grey outline onlyText', () => (
    <Button grey outline onlyText>
      Hello Button
    </Button>
  ))
  .add('sky', () => <Button sky>Hello Button</Button>)
  .add('sky outline', () => (
    <Button sky outline>
      Hello Button
    </Button>
  ))
  .add('sky outline onlyText', () => (
    <Button sky outline onlyText>
      Hello Button
    </Button>
  ))
  .add('full width', () => (
    <Button red fullWidth>
      Hello Button
    </Button>
  ));
