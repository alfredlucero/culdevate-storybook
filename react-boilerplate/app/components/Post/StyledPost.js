import styled from 'styled-components';

import {
  postWrapperStyle,
  postTitleStyle,
  postAuthorWrapperStyle,
  postSocialWrapperStyle,
} from './postStyles';

const StyledPostWrapper = styled.div`${postWrapperStyle}`;

const StyledPostTitle = styled.h2`${postTitleStyle}`;

const StyledAuthorWrapper = styled.div`${postAuthorWrapperStyle}`;

const StyledSocialWrapper = styled.div`${postSocialWrapperStyle}`;

export {
  StyledPostWrapper,
  StyledPostTitle,
  StyledAuthorWrapper,
  StyledSocialWrapper,
};
