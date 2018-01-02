import { configure } from '@storybook/react';

function loadStories() {
  require('../stories');
  // require('../stories/second');

  require('../stories/stories.scss');
}

configure(loadStories, module);
