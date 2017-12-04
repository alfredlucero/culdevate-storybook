import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Nav from '../src/components/Nav';

const stories = storiesOf('Nav', module);

stories.add('Nav', () => (
  <div>
    <h1 style={{ color: '#595959' }}>{`<Nav />`}</h1>
    <Nav />
  </div>
));
