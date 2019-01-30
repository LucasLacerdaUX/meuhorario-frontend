import React from 'react';
import {storiesOf} from '@storybook/react';
import Icon from '../Icon';
import Button from '../Button';
import Topbar from '.';

storiesOf('Topbar', module).add('main Topbar', () => (
  <Topbar
    color="sky"
    badge="Test"
    cardTitle="Action Card Title"
    cardSubtitle="This is the subtitle"
    complementaryInfo="INFO HERE"
    pressed
  />
));
