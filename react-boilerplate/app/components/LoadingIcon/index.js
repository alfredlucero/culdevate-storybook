/**
*
* LoadingIcon
*
*/

import React from 'react';
import { StyledLoadingIconWrapper, StyledLoadingIconSquare } from './StyledLoadingIcon';

function LoadingIcon() {
  return (
    <StyledLoadingIconWrapper>
      <StyledLoadingIconSquare classname="square--one"></StyledLoadingIconSquare>
      <StyledLoadingIconSquare className="square--two"></StyledLoadingIconSquare>
      <StyledLoadingIconSquare className="square--four"></StyledLoadingIconSquare>
      <StyledLoadingIconSquare className="square--three"></StyledLoadingIconSquare>
    </StyledLoadingIconWrapper>
  );
}

export default LoadingIcon;
