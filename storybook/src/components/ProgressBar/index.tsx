/**
*
* ProgressBar
*
*/

import * as React from 'react';
import {
  StyledBarWrapper,
  StyledBar,
} from './StyledProgressBar';

export interface ProgressBarProps {
  progressPercentage: number;
}

const ProgressBar: React.SFC<ProgressBarProps> = ({
  progressPercentage
}) => {
  return (
    <StyledBarWrapper>
      <StyledBar progressPercentage={progressPercentage}>
        <p>{progressPercentage}%</p>
      </StyledBar>
    </StyledBarWrapper>
  );
};

export default ProgressBar;
