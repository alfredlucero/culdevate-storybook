import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../src/components/Button';
import P from '../src/components/P';
import Icon from '../src/components/Icon';

const stories = storiesOf('Buttons', module);

stories.add('Plaintext social buttons', () => (
  <div>
    <h1 style={{ color: '#595959' }}>{`<Button type="plaintext">{props.children}</Button>`}</h1>
    <Button type="plaintext"><P socialColor="cudos"><Icon type="fire"/> Cudos<br />100</P></Button>
    <br />
    <Button type="plaintext"><P socialColor="comment"><Icon type="comment"/> Comment<br />10</P></Button>
    <br />
    <Button type="plaintext"><P socialColor="share"><Icon type="share"/> Share<br />5</P></Button>
  </div>
));
  
stories.add('Round Buttons', () => (
  <div>
    <h1 style={{ color: '#595959' }}>{`<Button type="round" roundColor?="...">{props.children}</Button>`}</h1>
    <Button type="round" roundColor="#83b9ff">
      <Icon type="share" />
    </Button>
    <br />
    <Button type="round" roundColor="#2bad88">
      <Icon type="thumbs-up" />
    </Button>
    <br />
    <Button type="round" roundColor="#f7baa3">
      <Icon type="fire" />
    </Button>
  </div>
));
