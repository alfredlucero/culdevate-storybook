import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TimePicker from '../src/components/TimePicker';

const stories = storiesOf('Inputs', module);

stories.add('TimePicker', () => (
  <TimePicker />
));
