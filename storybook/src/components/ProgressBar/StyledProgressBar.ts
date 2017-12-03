import styled from 'styled-components';

import {
  barWrapperStyle,
  barStyle,
} from './progressBarStyles';

export interface StyledBarProps {
  progressPercentage: number;
}

const StyledBarWrapper = styled.div`${barWrapperStyle}`;

const StyledBar = styled.div`
  ${barStyle}
  width: ${(props: StyledBarProps) => `${props.progressPercentage}%`}
`;

export {
  StyledBarWrapper,
  StyledBar,
};
