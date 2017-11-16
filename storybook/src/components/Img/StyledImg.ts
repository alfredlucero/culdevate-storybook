import styled from 'styled-components';

import { imgStyle } from './imgStyles';

export interface StyledImgProps {
  round?: boolean
}

const StyledImg = styled.div`
  ${imgStyle}

  & img,
  & div {
    border-radius: ${(props:StyledImgProps) => props.round ? '50%' : '5px'};
  }
`;

export { StyledImg };
