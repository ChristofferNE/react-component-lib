import { configure } from '@storybook/react';

function loadStories() {
  require('../stories');
  // require('../stories/second');
}

configure(loadStories, module);
