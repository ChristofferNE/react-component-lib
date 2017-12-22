import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Example from '../src/lib/components/Example';
import SecondExample from '../src/lib/components/SecondExample';


storiesOf('Example 2', module)
  .add('Firstsss', () => <div><Example /><SecondExample /></div>)
  .add('Secondsss', () => <SecondExample />)