import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Post from '../src/components/Post';

const stories = storiesOf('Posts', module);

stories.add('Sample Posts', () => (
  <div>
    <h1 style={{ color: '#595959' }}>{`<Post id="some-id" title="some-post-title" author="author-name" authorImg="some-img-src" dateTime="some-date" cudosCount={2} commentCount={10} shareCount={11} />`}</h1>
    <Post 
      id="some-id"
      title="Culdevate post title..."
      author="Alfred Lucero"
      authorImg=""
      dateTime="May 19, 2017"
      cudosCount={10}
      commentCount={5}
      shareCount={7}
    />
  </div>
));
