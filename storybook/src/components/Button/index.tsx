import * as React from 'react';

import styled from 'styled-components';
import { StyledButton } from './StyledButton';

export interface ButtonProps {
  type: 'primary' | 'secondary' | 'danger' | 'warning' | 'plaintext';
  disabled?: boolean;
  round?: boolean;
  children?: React.ReactElement<any> | string;
  onClick?: (event: any) => void;
}

const Button: React.SFC<ButtonProps> = ({
  children,
}) => {
  
  return (
    <StyledButton {...this.props}>
      {children}
    </StyledButton>
  )
};

export default Button;
