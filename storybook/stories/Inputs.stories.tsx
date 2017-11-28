import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TimePicker from '../src/components/TimePicker';
import 'react-dates/initialize';
import DatePicker from '../src/components/DatePicker';

const stories = storiesOf('Inputs', module);

stories.add('TimePicker', () => (
  <TimePicker />
));

stories.add('DatePicker', () => (
  <div>
    <DatePicker />
  </div>
));
