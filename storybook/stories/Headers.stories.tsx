import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import H1 from '../src/components/H1';
import H2 from '../src/components/H2';
import H3 from '../src/components/H3';
import P from '../src/components/P';

const stories = storiesOf('Headers', module);

stories.add('H1', () => (
  <div>
    <H1>{`<H1>Text</H1>`}</H1>
    <H1>{`<H1 primary>Primary Text</H1>`}</H1>
    <H1>Default H1 Text (Inconsolata) - 2rem (1.25rem html) ~ 40px</H1>
    <H1 primary>Primary H1 Text (Inconsolata)</H1>
    <H1>// cultivate better developers</H1>
    <H1 primary>culdevate(developers);</H1>
  </div>
));

stories.add('H2', () => (
  <div>
    <H2>{`<H2>Text</H2>`}</H2>
    <H2>{`<H2 primary>Primary Text</H2>`}</H2>
    <H2>Default H2 Text (Inconsolata) - 1.5rem (1.25rem html) ~ 30px</H2>
    <H2 primary>Primary H2 Text (Inconsolata)</H2>
    <H2>// cultivate better developers</H2>
    <H2 primary>culdevate(developers);</H2>
  </div>
));

stories.add('H3', () => (
  <div>
    <H3>{`<H3>Text</H3>`}</H3>
    <H3>Default H3 Text (Inconsolata) - 1.25rem (1.25rem html) ~ 25px</H3>
    <H3 primary>Primary H3 Text (Inconsolata)</H3>
    <H3>// cultivate better developers</H3>
    <H3 primary>culdevate(developers);</H3>
  </div>
));

stories.add('P', () => (
  <div>
    <P>{`<P success? danger? small? socialColor?>Text</P>`}</P>
    <P>Default P Text (Noto Sans) - 1rem (1.25rem html) ~ 20px</P>
    <P>Sample P Body Text</P>
    <P socialColor="cudos">Cudos Social Text</P>
    <P socialColor="comment">Comment Social Text</P>
    <P socialColor="share">Share Social Text</P>
    <P success>Success Text</P>
    <P danger>Danger Error Text</P>
    <P small>Small P Text</P>
  </div>
));
