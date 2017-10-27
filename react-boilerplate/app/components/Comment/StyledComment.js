import styled from 'styled-components';

import {
  commentWrapperStyle,
  commentStyle,
  commentImgStyle,
  commentContentWrapperStyle,
  commentAuthorStyle,
  commentBodyStyle,
  commentButtonsStyle,
} from './commentStyles';

const StyledCommentWrapper = styled.div`${commentWrapperStyle}`;

const StyledComment = styled.div`${commentStyle}`;

const StyledCommentImg = styled.div`${commentImgStyle}`;

const StyledCommentContentWrapper = styled.div`${commentContentWrapperStyle}`;

const StyledCommentAuthor = styled.p`${commentAuthorStyle}`;

const StyledCommentBody = styled.p`${commentBodyStyle}`;

const StyledCommentButtons = styled.div`${commentButtonsStyle}`;

export {
  StyledCommentWrapper,
  StyledComment,
  StyledCommentImg,
  StyledCommentContentWrapper,
  StyledCommentAuthor,
  StyledCommentBody,
  StyledCommentButtons,
};
