import styled, { css } from 'styled-components';

import { 
  loadingIconWrapperStyle,
  loadingIconLineStyle
} from './loadingIconStyles';

export interface StyledLoadingIconWrapperProps {
  size?: 'small' | 'medium' | 'large';
}

export interface StyledLoadingIconLineProps {
  size?: 'small' | 'medium' | 'large';
  color: 'gray' | 'green' | 'teal' | 'blue';
}

const StyledLoadingIconWrapper = styled.div`${loadingIconWrapperStyle}
  ${(props:StyledLoadingIconWrapperProps) => props.size === 'small' && css`
    width: 50px;
    height: 50px;
  `}

  ${(props:StyledLoadingIconWrapperProps) => props.size === 'large' && css`
    width: 150px;
    height: 150px;
  `}
`;

const StyledLoadingIconLine = styled.div`${loadingIconLineStyle}
  ${(props:StyledLoadingIconLineProps) => props.size === 'small' && css`
    width: 50px;
  `}
  ${(props:StyledLoadingIconLineProps) => props.size === 'large' && css`
    width: 150px;
  `}

  ${(props:StyledLoadingIconLineProps) => props.color === 'gray' && css`
    background-color: #e5e5e5;
  `}
  ${(props:StyledLoadingIconLineProps) => props.color === 'green' && css`
    background-color: #d1eced;
  `}
  ${(props:StyledLoadingIconLineProps) => props.color === 'teal' && css`
    background-color: #4c768a;
  `}
  ${(props:StyledLoadingIconLineProps) => props.color === 'blue' && css`
    background-color: #b6c4d6;
  `}
`;

export { 
  StyledLoadingIconWrapper,
  StyledLoadingIconLine
 };
