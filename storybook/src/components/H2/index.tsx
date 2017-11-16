import * as React from 'react';

import styled from 'styled-components';

export interface H2Props {
  primary?: boolean;
}

const H2 = styled.h2`
  color: ${(props:H2Props) => props.primary ? '#58a1e3' : '#595959'};
  font-size: 1.5rem;
  font-family: 'Inconsolata';
  letter-spacing: 1px;
`;

export default H2;