import * as React from 'react';

import styled from 'styled-components';

export interface H1Props {
  primary?: boolean;
}

const H1 = styled.h1`
  color: ${(props:H1Props) => props.primary ? '#58a1e3' : '#595959'};
  font-size: 2rem;
  font-family: 'Inconsolata';
  letter-spacing: 1px;
`;

export default H1;
