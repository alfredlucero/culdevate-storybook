import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Img from '../src/components/Img';

const stories = storiesOf('Images', module);

stories.add('Default Round User Img', () => (
  <div>
    <h1 style={{ color: '#595959' }}>{`<Img src="some-src" alt="some-alt" defaultIcon="some-default" round? />`}</h1>
    <Img src="" alt="" defaultIcon="user" round />
  </div>
));

stories.add('Round Img with source and alt', () => (
  <div>
    <h1 style={{ color: '#595959' }}>{`<Img src="some-src" alt="some-alt" defaultIcon="some-default" round? />`}</h1>
    <Img src="https://static.giantbomb.com/uploads/scale_small/0/6087/2437349-pikachu.png" alt="Pikachu Avatar" defaultIcon="user" round />
  </div>
));
