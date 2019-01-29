import React from 'react';
import {storiesOf} from '@storybook/react';
import Card from '.';

storiesOf('Card', module)
  .add('main card', () => (
    <Card
      badge="Test"
      cardTitle="Action Card Title"
      cardSubtitle="This is the subtitle"
      complementaryInfo="INFO HERE"
    />
  ))
  .add('action card', () => (
    <Card
      cardTitle="Action Card Title"
      cardSubtitle="This is the subtitle"
      complementaryInfo="INFO HERE"
      icon="icon"
    />
  ))
  .add('navigation card', () => (
    <Card
      cardTitle="Action Card Title"
      cardSubtitle="This is the subtitle"
      icon=">"
    />
  ));
