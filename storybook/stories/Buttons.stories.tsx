import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

const stories = storiesOf('Buttons', module);

stories.add('with text', () => (
  <button onClick={action('clicked')}>Hello Button</button>
));
  
stories.add('with some emoji', () => (
  <button onClick={action('clicked')}>😀 😎 👍 💯</button>
));
