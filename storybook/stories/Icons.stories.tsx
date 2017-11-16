import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Icon from '../src/components/Icon';
import { IconType } from '../src/types/icons';

const icons = [
  'at',
  'ban',
  'bell',
  'birthday-cake',
  'book',
  'bug',
  'bullhorn',
  'certificate',
  'check',
  'close',
  'code',
  'codepen',
  'coffee',
  'cog',
  'comment',
  'comments',
  'credit-card',
  'database',
  'edit',
  'ellipsis-h',
  'facebook',
  'filter',
  'fire',
  'gamepad',
  'gift',
  'github',
  'globe',
  'google',
  'graduation-cap',
  'hashtag',
  'info',
  'instagram',
  'laptop',
  'level-up',
  'light-bulb-o',
  'linkedin',
  'lock',
  'map-marker',
  'medium',
  'paypal',
  'pencil',
  'photo',
  'podcast',
  'quote-left',
  'quote-right',
  'search',
  'share',
  'slack',
  'stack-exchange',
  'stack-overflow',
  'star',
  'steam',
  'sticky-note',
  'suitcase',
  'thumbs-up',
  'trophy',
  'twitter',
  'upload',
  'user',
  'users',
  'video-camera',
  'warning',
  'youtube-play',
];

const stories = storiesOf('Icons', module);

stories.add('Font Awesome Icons To Use', () => (
  <div>
    <h1 style={{ color: '#58a1e3', textAlign: 'center' }}>{`<Icon type="some-icon-type"/>`}</h1>
    {icons.map((icon:IconType) => {
      return (
        <div style={{ padding: '1rem', color: '#595959', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
          <h1>Prop type="{icon}"</h1>
          <div style={{ fontSize: '2rem' }}>
            <Icon type={icon} />
          </div>
        </div>
      );
    })}
  </div>
));
