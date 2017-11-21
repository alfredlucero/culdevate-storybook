/**
*
* TrowelArtifact
*
*/

import * as React from 'react';
import StyledTrowelArtifact from './StyledTrowel';

import { IconType } from '../../types/icons';
import { ArtifactType, artifactTypesToIcons } from '../../types/artifacts';
import Icon from '../Icon';
import Button from '../Button';
import P from '../P';

export interface TrowelArtifactProps {
  id: string;
  type: ArtifactType;
  descr: string;
  time: string;
}

const TrowelArtifact: React.SFC<TrowelArtifactProps> = ({
  id,
  type,
  descr,
  time,
}) => {

  return (
    <StyledTrowelArtifact>
      <div className="trowel-artifact">
        <div className="trowel-artifact-icon">
          <Icon type={artifactTypesToIcons[type] as IconType} />
        </div>
        <div className="artifact-descr">
          <P>{descr}</P>
          <P>{time}</P>
        </div>
      </div>
    </StyledTrowelArtifact>
  )
};

export default TrowelArtifact;
