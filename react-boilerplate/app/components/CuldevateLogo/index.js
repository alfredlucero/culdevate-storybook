/**
*
* CuldevateLogo
*
*/

import React from 'react';
import {
  StyledCuldevateLogoWrapper,
  StyledCuldevateLogoText,
  StyledCuldevateLogoBracket,
  StyledCuldevateLogoSlash,
} from './StyledCuldevateLogo';


function CuldevateLogo() {
  return (
    <StyledCuldevateLogoWrapper>
      <StyledCuldevateLogoText>
        <StyledCuldevateLogoBracket>&lt;</StyledCuldevateLogoBracket>
        u
        <StyledCuldevateLogoSlash>/</StyledCuldevateLogoSlash>
        de
        <StyledCuldevateLogoBracket>&gt;</StyledCuldevateLogoBracket>
        ate
      </StyledCuldevateLogoText>
    </StyledCuldevateLogoWrapper>
  );
} 

export default CuldevateLogo;
