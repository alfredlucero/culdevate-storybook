/**
*
* ProgressBar
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledBarWrapper,
  StyledBar,
} from './StyledProgressBar';

function ProgressBar({ progressPercentage }) {
  return (
    <StyledBarWrapper>
      <StyledBar percent={progressPercentage}>
        <p>{progressPercentage}%</p>
      </StyledBar>
    </StyledBarWrapper>
  );
}

ProgressBar.propTypes = {
  progressPercentage: PropTypes.number,
};

export default ProgressBar;
