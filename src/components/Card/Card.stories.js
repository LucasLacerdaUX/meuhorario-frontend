import React from 'react';
import {storiesOf} from '@storybook/react';
import Icon from '../Icon';
import Button from '../Button';
import Card from '.';

storiesOf('Card', module)
  .add('with title', () => <Card cardTitle="Action Card Title" />)
  .add('with badge, title', () => (
    <Card badge="Test" cardTitle="Action Card Title" />
  ))
  .add('with badge, title and subtitle', () => (
    <Card
      clickable
      cardTitle="Action Card Title"
      cardSubtitle="This is the subtitle"
    />
  ))
  .add('with badge, title, subtitle and description', () => (
    <Card
      cardTitle="Action Card Title"
      cardSubtitle="This is the subtitle"
      complementaryInfo="Description"
    />
  ))
  .add('with title, subtitle, description and icon', () => (
    <Card
      cardTitle="Action Card Title"
      cardSubtitle="This is the subtitle"
      complementaryInfo="Description"
      icon={
        <Button color="sky" onlyIcon>
          <Icon name="deleteIcon" color="sky" pointer />
        </Button>
      }
    />
  ))
  .add('with clickable property', () => (
    <Card
      badge="Test"
      cardTitle="Action Card Title"
      cardSubtitle="This is the subtitle"
      complementaryInfo="INFO HERE"
      clickable
      onClick={null}
    />
  ))
  .add('with disabled state', () => (
    <Card
      badge="Test"
      cardTitle="Action Card Title"
      cardSubtitle="This is the subtitle"
      complementaryInfo="INFO HERE"
      disabled
    />
  ))
  .add('with pressed state', () => (
    <Card
      badge="Test"
      cardTitle="Action Card Title"
      cardSubtitle="This is the subtitle"
      complementaryInfo="INFO HERE"
      clickable
      onClick={null}
      pressed
    />
  ));
