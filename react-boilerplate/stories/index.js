import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import H1 from '../app/components/H1';
import H2 from '../app/components/H2';
import LgtmButton from '../app/components/LgtmButton';
import ShareButton from '../app/components/ShareButton';
import LitButton from '../app/components/LitButton';
import CuldevateLogo from '../app/components/CuldevateLogo';
import LoadingIcon from '../app/components/LoadingIcon';
import Post from '../app/components/Post';
import Comment from '../app/components/Comment';
import ProgressBar from '../app/components/ProgressBar';
import TrowelStorybook from '../app/components/TrowelStorybook';
import CodeEditor from '../app/components/CodeEditor';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

const culdevateColors = [
  { descr: 'Cudos/Lit Orange', color: '#f7baa3' },
  { descr: 'Cudos/Lit Orange Hovered', color: '#cc9885' },
  { descr: 'Header Blue', color: '#58a1e3' },
  { descr: 'Share Blue', color: '#83b9ff' },
  { descr: 'Share Blue Hovered', color: '#6b98d2' },
  { descr: 'Culdevate Blue', color: '#b6c4d6' },
  { descr: 'Culdevate Teal', color: '#4c768a' },
  { descr: 'Comment Gray', color: '#a0a0a0' },
  { descr: 'Comment Gray Hovered', color: '#757575' },
  { descr: 'Normal Gray Text', color: '#595959' },
  { descr: 'Lighter Gray Text', color: '#aaa' },
  { descr: 'White Background/Text', color: '#fff' },
  { descr: 'Loading Green', color: '#d1eced' },
  { descr: 'Success/LGTM Green', color: '#2BAD88' },
  { descr: 'LGTM Green', color: '#2BAD88' },
  { descr: 'Fail/Flag/Close Red', color: '#FB8597' },
];

storiesOf('Colors', module)
  .add('All colors', () =>
    (
      <div style={{ display: 'flex', width: '600px', 'flex-direction': 'column', 'align-items': 'center', color: '#595959', 'font-family': 'Noto Sans'  }}>
        {culdevateColors.map(({ descr, color }) => (
          <div key={descr} style={{ width: '250px', height: '250px' }}>
            <h2>{descr}: {color}</h2>
            <div style={{ 'background-color': `${color}`, height: '100px', width: '100px', border: 'solid 2px #eee' }}></div>
          </div>
        ))}
      </div>
    )
  );

storiesOf('Headers', module)
  .add('H1', () => <div><H1>// cultivate better developers</H1><H1 primary>culdevate(developers);</H1></div>)
  .add('H2', () => <div><H2>// Normal H2 Text</H2><H2 primary>Primary H2 Text</H2></div>);

storiesOf('Button', module)
  .add('LGTM button', () => <LgtmButton />)
  .add('Share button', () => <ShareButton />)
  .add('Lit Button', () => <LitButton />);

storiesOf('CuldevateLogo', module)
  .add('with text', () => <div><CuldevateLogo /><H1 primary>Cultivate better developers together</H1></div>);

storiesOf('Loading Icon', module)
  .add('Cube folding loading icon', () => <LoadingIcon />);

storiesOf('Posts', module)
  .add('Post', () => <Post />);

storiesOf('Comments', module)
  .add('Nested Comments', () => <Comment />);

storiesOf('Profile Components', module)
  .add('Progress Bar', () => <ProgressBar progressPercentage={50} />)
  .add('Trowel Story', () => <TrowelStorybook />);

storiesOf('Code Editor', module)
  .add('React Ace Editor', () => <CodeEditor />);
