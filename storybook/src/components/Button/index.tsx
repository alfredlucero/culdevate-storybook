import * as React from 'react';

import styled from 'styled-components';
import { StyledButton } from './StyledButton';

export interface ButtonProps {
  type: 'primary' | 'secondary' | 'danger' | 'warning' | 'plaintext' | 'round';
  disabled?: boolean;
  roundColor?: string;
  children?: React.ReactElement<any> | string;
  onClick?: (event: any) => void;
}

const Button: React.SFC<ButtonProps> = ({
  children,
  ...styledButtonProps
}) => {

  return (
    <StyledButton {...styledButtonProps}>
      {children}
    </StyledButton>
  )
};

export default Button;
