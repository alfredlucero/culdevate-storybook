import styled from 'styled-components';

const H1 = styled.h1`
  color: ${({ primary }) => primary ? '#58a1e3' : '#595959'};
  font-size: 2.5em;
  font-family: 'Inconsolata';
`;

export default H1;
