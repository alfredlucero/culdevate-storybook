import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

const stories = storiesOf('Buttons', module);

const culdevateColors = [
  { descr: 'cudos-orange', color: '#f7baa3' },
  { descr: 'cudos-orange-hovered', color: '#cc9885' },
  { descr: 'primary-blue-text', color: '#58a1e3' },
  { descr: 'share-blue', color: '#83b9ff' },
  { descr: 'share-blue-hovered', color: '#6b98d2' },
  { descr: 'culdevate-blue', color: '#b6c4d6' },
  { descr: 'culdevate-teal', color: '#4c768a' },
  { descr: 'comment-gray', color: '#a0a0a0' },
  { descr: 'comment-gray-hovered', color: '#757575' },
  { descr: 'default-gray-text', color: '#595959' },
  { descr: 'light-gray-text', color: '#aaa' },
  { descr: 'white', color: '#fff' },
  { descr: 'loading-green', color: '#d1eced' },
  { descr: 'success-green', color: '#2bad88' },
  { descr: 'failure-red', color: '#fb8597' },
  { descr: 'warning-yellow', color: '#fed766' },
];

storiesOf('Colors', module)
  .add('All colors', () =>
    (
      <div style={{ display: 'flex', width: '1000px', flexDirection: 'column', alignItems: 'center', color: '#595959', fontFamily: 'Noto Sans' }}>
        {culdevateColors.map(({ descr, color }) => (
          <div key={descr} style={{ width: '750px', height: '250px' }}>
            <h1>{descr}: {color}</h1>
            <div style={{ backgroundColor: `${color}`, height: '100px', width: '100px', border: 'solid 2px #eee', borderRadius: '5px' }}></div>
          </div>
        ))}
      </div>
    )
  );