import styled from 'styled-components';

const H2 = styled.h2`
  color: ${({ primary }) => primary ? '#58a1e3' : '#595959'};
  font-family: 'Inconsolata';
  font-size: 1.5em;
`;

export default H2;
