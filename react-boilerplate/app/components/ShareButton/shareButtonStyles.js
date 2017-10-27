import { css } from 'styled-components';


const shareButtonStyle = css`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  font-weight: bold;
  font-size: 2em;
  padding: 1em;
  border-radius: 100%;
  border: 2px solid #eee;
  color: #83b9ff;
  background-color: #fff;
  cursor: pointer;
  z-index: 1;
  transition:         0.15s ease-in;
  -o-transition:      0.15s ease-in;
  -ms-transition:     0.15s ease-in;
  -moz-transition:    0.15s ease-in;
  -webkit-transition: 0.15s ease-in;

  &:before {
    content: "";
    position: absolute;
    background-color: #83b9ff;
    bottom: 0;
    left: 0;
    right: 0;
    top: 100%;
    z-index: -1;
    transition: top 0.2s ease-in;
  }
  
  &:hover {
    border: 2px solid #83b9ff;
    background-color: #83b9ff;
    color: #fff;
  }

  &:hover:before {
    top: 0;
  }
`;


export { shareButtonStyle };
