import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../src/components/Button';
import P from '../src/components/P';
import Icon from '../src/components/Icon';

const stories = storiesOf('Buttons', module);

stories.add('Primary/Secondary/Danger Buttons', () => (
  <div>
    <h1 style={{ color: '#595959' }}>{`<Button type="rect" primary? secondary? danger? disabled?>{props.children}</Button>`}</h1>
    <Button type="rect" primary><P>Primary</P></Button>
    <br />
    <br />
    <Button type="rect" primary disabled><P>Primary Disabled</P></Button>
    <br />
    <br />
    <Button type="rect" secondary><P>Secondary</P></Button>
    <br />
    <br />
    <Button type="rect" secondary disabled><P>Secondary Disabled</P></Button>
    <br />
    <br />
    <Button type="rect" danger><P>Danger</P></Button>
    <br />
    <br />
    <Button type="rect" danger disabled><P>Danger Disabled</P></Button>
  </div>
));

stories.add('Plaintext Social Buttons', () => (
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
    <br />
    <Button type="round" roundColor="#fb8597">
      <Icon type="close" />
    </Button>
    <br />
    <Button type="round" roundColor="#fed766">
      <Icon type="warning" />
    </Button>
  </div>
));
