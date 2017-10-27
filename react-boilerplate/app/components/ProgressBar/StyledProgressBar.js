import styled from 'styled-components';

import {
  barWrapperStyle,
  barStyle,
} from './progressBarStyles';

const StyledBarWrapper = styled.div`${barWrapperStyle}`;

const StyledBar = styled.div`
  ${barStyle}
  width: ${({ percent }) => `${percent}%`}
`;

export {
  StyledBarWrapper,
  StyledBar,
};
