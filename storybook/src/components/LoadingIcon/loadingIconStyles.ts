import { css, keyframes } from 'styled-components';

const spin = keyframes`
  100% { 
    transform: rotate(360deg); 
  } 
`;

const loadingIconWrapperStyle = css`
  position: relative;
  width: 75px;
  height: 75px;
  border: 5px solid #eee;
  border-radius: 50%;
  background-color: #f9f9f9;
`;

const loadingIconLineStyle = css`
  position: absolute;
  top: 50%;
  left: 0;
  width: 75px;
  height: 5px;

  &.line {
    animation: ${spin} 2s infinite ease;
    
    &:nth-of-type(2) { animation-delay: 0.1s; }  
    &:nth-of-type(3) { animation-delay: 0.2s; }
    &:nth-of-type(4) { animation-delay: 0.3s; }
  }
`;

export { 
  loadingIconWrapperStyle,
  loadingIconLineStyle
 };
