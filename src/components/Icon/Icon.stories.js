import React from 'react';
import {storiesOf} from '@storybook/react';
import Icon from '.';

storiesOf('Icon', module)
  .add('bookmark', () => <Icon name="bookmark" size="small" />)
  .add('print', () => <Icon name="print" size="small" />)
  .add('deleteIcon', () => <Icon name="deleteIcon" size="small" />)
  .add('addCourse', () => <Icon name="addCourse" size="medium" />)
  .add('share', () => <Icon name="share" size="small" />)
  .add('search', () => <Icon name="search" size="small" />)
  .add('link', () => <Icon name="link" size="small" />)
  .add('messenger', () => <Icon name="messenger" size="small" />)
  .add('facebook', () => <Icon name="facebook" size="small" />)
  .add('twitter', () => <Icon name="twitter" size="small" />);
