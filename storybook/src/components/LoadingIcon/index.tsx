/**
*
* LoadingIcon
*
*/

import * as React from 'react';
import { 
  StyledLoadingIconWrapper,
  StyledLoadingIconLine,
 } from './StyledLoadingIcon';

export interface LoadingIconProps {
  size: 'small' | 'medium' | 'large';
}

const LoadingIcon: React.SFC<LoadingIconProps> = ({ size }) => {
  return (
    <StyledLoadingIconWrapper size={size}>
      <StyledLoadingIconLine className="line" size={size} color="gray"/>
      <StyledLoadingIconLine className="line" size={size} color="green"/>
      <StyledLoadingIconLine className="line" size={size} color="teal"/>
      <StyledLoadingIconLine className="line" size={size} color="blue"/>
    </StyledLoadingIconWrapper>
  );
};

export default LoadingIcon;
