import styled, { css } from 'styled-components';

import { buttonStyle } from './buttonStyles';

export interface StyledButtonProps {
  type: 'primary' | 'secondary' | 'danger' | 'warning' | 'plaintext' | 'round';
  disabled?: boolean;
  roundColor?: string;
  onClick?: (event: any) => void;
}

const StyledButton = styled.button`
  ${buttonStyle}

  ${(props:StyledButtonProps) => props.type === 'round' && css`
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 75px;
    height: 75px;
    font-weight: bold;
    font-size: 2rem;
    padding: 1rem;
    border-radius: 100%;
    border: 2px solid #eee;
    color: ${props.roundColor};
    background-color: #fff;
    cursor: pointer;
    z-index: 1;
    transition: 0.15s ease-in;


    &:before {
      content: "";
      position: absolute;
      background-color: ${props.roundColor};
      bottom: 0;
      left: 0;
      right: 0;
      top: 100%;
      z-index: -1;
      transition: top 0.2s ease-in;
    }

    &:hover {
      border: 2px solid ${props.roundColor};
      background-color: ${props.roundColor};
      color: #fff;
    }

    &:hover:before {
      top: 0;
    }
  `}
`;

export { StyledButton };
