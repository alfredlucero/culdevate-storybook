/**
*
* TrowelDay
*
*/

import * as React from 'react';
import StyledTrowelDay from './StyledTrowelDay';

import TrowelArtifact, { TrowelArtifactProps } from '../TrowelArtifact';
import P from '../P';

export interface TrowelDayProps {
  day: string;
  artifacts: TrowelArtifactProps[];
}

const TrowelDay: React.SFC<TrowelDayProps> = ({
  day,
  artifacts,
}) => {

  return (
    <StyledTrowelDay className="trowel-day">
      <P className="trowel-day-descr">{day}</P>
      {artifacts.map((artifact: TrowelArtifactProps) => <TrowelArtifact {...artifact} key={artifact.id} />)}
    </StyledTrowelDay>
  )
};

export default TrowelDay;
