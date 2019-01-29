import React from 'react';
import {storiesOf} from '@storybook/react';
import Card from '.';

storiesOf('Card', module)
  .add('with badge', () => (
    <Card
      badge="Test"
      cardTitle="Action Card Title"
      cardSubtitle="This is the subtitle"
      complementaryInfo="INFO HERE"
    />
  ))
  .add('without badge', () => (
    <Card
      cardTitle="Action Card Title"
      cardSubtitle="This is the subtitle"
      complementaryInfo="INFO HERE"
      icon="icon"
    />
  ))
  .add('with arrow', () => (
    <Card
      cardTitle="Action Card Title"
      cardSubtitle="This is the subtitle"
      icon=">"
    />
  ));
