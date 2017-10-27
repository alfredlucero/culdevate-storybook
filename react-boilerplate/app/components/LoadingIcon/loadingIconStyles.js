import { css, keyframes } from 'styled-components';

const squareFolding = keyframes`
  0%, 10% {
    transform: perspective(80px) rotateX(-180deg);
    opacity: 0;
  }
  25%, 75% {
    transform: perspective(80px) rotateX(0deg);
    opacity: 1;
  }
  90%, 100% {
    transform: perspective(80px) rotateY(180deg);
    opacity: 0;
  }
`;

const loadingIconWrapperStyle = css`
  width: 43px;
  height: 43px;
  margin: 0 auto;
  margin-top: 29px;
  position: relative;
  transform: rotateZ(45deg);
    -o-transform: rotateZ(45deg);
    -ms-transform: rotateZ(45deg);
    -webkit-transform: rotateZ(45deg);
    -moz-transform: rotateZ(45deg);
`;

const loadingIconSquareStyle = css`
  & {
    position: relative;
    transform: rotateZ(45deg);
      -o-transform: rotateZ(45deg);
      -ms-transform: rotateZ(45deg);
      -webkit-transform: rotateZ(45deg);
      -moz-transform: rotateZ(45deg);
  }

  & {
    float: left;
    width: 50%;
    height: 50%;
    position: relative;
    transform: scale(1.1);
      -o-transform: scale(1.1);
      -ms-transform: scale(1.1);
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.1);
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(184, 226, 228, 0.65);
    animation: ${squareFolding} 2.04s infinite linear both;
      -o-animation: ${squareFolding} 2.04s infinite linear both;
      -ms-animation: ${squareFolding} 2.04s infinite linear both;
      -webkit-animation: ${squareFolding} 2.04s infinite linear both;
      -moz-animation: ${squareFolding} 2.04s infinite linear both;
    transform-origin: 100% 100%;
      -o-transform-origin: 100% 100%;
      -ms-transform-origin: 100% 100%;
      -webkit-transform-origin: 100% 100%;
      -moz-transform-origin: 100% 100%;
  }
  
  &.square--two {
    transform: scale(1.1) rotateZ(90deg);
		-o-transform: scale(1.1) rotateZ(90deg);
		-ms-transform: scale(1.1) rotateZ(90deg);
		-webkit-transform: scale(1.1) rotateZ(90deg);
		-moz-transform: scale(1.1) rotateZ(90deg);
  }

  &.square--two:before {
    animation-delay: 0.255s;
		-o-animation-delay: 0.255s;
		-ms-animation-delay: 0.255s;
		-webkit-animation-delay: 0.255s;
		-moz-animation-delay: 0.255s;
  }

  &.square--three {
    transform: scale(1.1) rotateZ(180deg);
		-o-transform: scale(1.1) rotateZ(180deg);
		-ms-transform: scale(1.1) rotateZ(180deg);
		-webkit-transform: scale(1.1) rotateZ(180deg);
		-moz-transform: scale(1.1) rotateZ(180deg);
  }

  &.square--three:before {
    animation-delay: 0.51s;
		-o-animation-delay: 0.51s;
		-ms-animation-delay: 0.51s;
		-webkit-animation-delay: 0.51s;
		-moz-animation-delay: 0.51s;
  }

  &.square--four {
    transform: scale(1.1) rotateZ(270deg);
		-o-transform: scale(1.1) rotateZ(270deg);
		-ms-transform: scale(1.1) rotateZ(270deg);
		-webkit-transform: scale(1.1) rotateZ(270deg);
		-moz-transform: scale(1.1) rotateZ(270deg);

  }

  &.square--four:before {
    animation-delay: 0.765s;
		-o-animation-delay: 0.765s;
		-ms-animation-delay: 0.765s;
		-webkit-animation-delay: 0.765s;
		-moz-animation-delay: 0.765s;
  }
`;

export { loadingIconWrapperStyle, loadingIconSquareStyle };
