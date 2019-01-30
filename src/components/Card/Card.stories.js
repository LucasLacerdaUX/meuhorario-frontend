import React from 'react';
import {storiesOf} from '@storybook/react';
import Icon from '../Icon';
import Button from '../Button';
import Card from '.';

storiesOf('Card', module)
  .add('main card', () => (
    <Card
      color="sky"
      badge="Test"
      cardTitle="Action Card Title"
      cardSubtitle="This is the subtitle"
      complementaryInfo="INFO HERE"
      pressed
    />
  ))
  .add('action card', () => (
    <Card
      clickable
      cardTitle="Action Card Title"
      cardSubtitle="This is the subtitle"
      complementaryInfo="INFO HERE"
      icon={
        <Button color="sky" onlyIcon>
          <Icon name="deleteIcon" color="sky" pointer />
        </Button>
      }
    />
  ))
  .add('navigation card', () => (
    <Card
      cardTitle="Action Card Title"
      cardSubtitle="This is the subtitle"
      icon=">"
    />
  ));
