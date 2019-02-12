import {configure, addDecorator} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';

const req = require.context('../src/components', true, /\.stories\.js$/);

addDecorator(
  withInfo({
    inline: true,
    header: false,
  }),
);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
