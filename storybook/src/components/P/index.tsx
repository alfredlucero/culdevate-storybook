import * as React from 'react';

import styled, { css } from 'styled-components';

export interface PProps {
  small?: boolean;
  danger?: boolean;
  success?: boolean;
  socialColor?: 'cudos' | 'comment' | 'share';
}

const P = styled.p`
  color: #595959;
  font-size: ${(props:PProps) => props.small ? '0.6rem' : '1rem'};
  font-family: 'Roboto';
  line-height: 1.5;
  letter-spacing: 1px;

  ${(props:PProps) => props.success && css`
    color: #2bad88;
  `}

  ${(props:PProps) => props.danger && css`
    color: #fb8597;
  `}

  ${(props:PProps) => props.socialColor === 'cudos' && css`
    color: #f7baa3;

    &:hover {
      color: #cc9885;
    }
  `}

  ${(props:PProps) => props.socialColor === 'comment' && css`
    color: #a0a0a0;

    &:hover {
      color: #757575;
    }
  `}

  ${(props:PProps) => props.socialColor === 'share' && css`
    color: #83b9ff;

    &:hover {
      color: #6b98d2;
    }
  `}
`;

export default P;