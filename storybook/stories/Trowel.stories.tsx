import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TrowelArtifact, { TrowelArtifactProps } from '../src/components/TrowelArtifact';
import { ArtifactType } from '../src/types/artifacts';
import TrowelDay from '../src/components/TrowelDay';

const artifactTypes = [
  'announcement',
  'author',
  'award',
  'birthday',
  'bug',
  'checkin',
  'code',
  'codepen',
  'comment',
  'competition',
  'cudos',
  'insight',
  'education',
  'event',
  'facebook',
  'gaming',
  'gift',
  'google',
  'hardware',
  'instagram',
  'job',
  'lgtm',
  'linkedin',
  'literature',
  'medium',
  'note',
  'opensource', 
  'photo',
  'podcast',
  'promotion',
  'share',
  'shopping',
  'slack',
  'twitter',
  'user',
  'video'
];

const stories = storiesOf('Trowel', module);

stories.add('Artifacts', () => (
  <div>
    <h1 style={{ color: '#595959' }}>{`<TrowelArtifact id="some-id" type="some-artifact-type" descr="some-descr" time="some-time" />`}</h1>
    {artifactTypes.map((artifactType:ArtifactType) => (
      <TrowelArtifact
        id="some-id"
        key={artifactType}
        type={artifactType}
        descr={`Some artifact descr for ${artifactType}`}
        time="Some time"
      />
    ))}
  </div>
));

stories.add('Trowel Day', () => (
  <div>
    <h1 style={{ color: '#595959' }}>{`<TrowelDay id="some-id" type="some-artifact-type" descr="some-descr" time="some-time" />`}</h1>
    <TrowelDay
      day="January 17, 2018"
      artifacts={(artifactTypes.map((artifactType:ArtifactType) => ({ id: "some-id", type: artifactType as ArtifactType, descr: `some artifact descr for ${artifactType}`, time: 'some time' }))) as TrowelArtifactProps[]}
    />
  </div>
));
