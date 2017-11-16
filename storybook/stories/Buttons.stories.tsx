import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../src/components/Button';
import P from '../src/components/P';
import Icon from '../src/components/Icon';

const stories = storiesOf('Buttons', module);

stories.add('Plaintext social buttons', () => (
  <div>
    <Button type="plaintext"><P socialColor="cudos"><Icon type="fire"/> Cudos<br />100</P></Button>
    <Button type="plaintext"><P socialColor="comment"><Icon type="comment"/> Comment<br />10</P></Button>
    <Button type="plaintext"><P socialColor="share"><Icon type="share"/> Share<br />5</P></Button>
  </div>
));
  
stories.add('with some emoji', () => (
  <button onClick={action('clicked')}>😀 😎 👍 💯</button>
));
