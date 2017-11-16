import * as React from 'react';

import styled from 'styled-components';

export interface H3Props {
  primary?: boolean;
}

const H3 = styled.h3`
  color: ${(props:H3Props) => props.primary ? '#58a1e3' : '#595959'};
  font-size: 1.25rem;
  font-family: 'Inconsolata';
  letter-spacing: 1px;
`;

export default H3;