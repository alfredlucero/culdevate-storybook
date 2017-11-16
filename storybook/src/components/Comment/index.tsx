/**
*
* Comment
*
*/

import * as React from 'react';
import {
  StyledCommentWrapper,
  StyledComment,
  StyledCommentImg,
  StyledCommentContentWrapper,
  StyledCommentAuthor,
  StyledCommentBody,
  StyledCommentButtons,
} from './StyledComment';

import Img from '../Img';
import Button from '../Button';
import P from '../P';
import Icon from '../Icon';

export interface CommentData {
  author: string;
  authorImg?: string;
  titles: string[];
  username: string;
  jobDescr: string;
  bodyText: string;
  cudosCount: number;
  commentCount: number;
  shareCount: number;
  dateTime: string;
  commentReplies: CommentData[];
}

export interface CommentProps {
  commentData: CommentData
}

const Comment: React.SFC<CommentProps> = ({
  commentData: {
    author,
    authorImg,
    titles,
    username,
    jobDescr,
    bodyText,
    cudosCount,
    commentCount,
    shareCount,
    dateTime,
    commentReplies,
  }
}) => {
  const renderAuthorTitles = () => {
    return titles.map((title:string) => (
      <span><Icon type="circle" /> {title}</span>
    ));
  };

  const renderCommentReplies = () => {
    return commentReplies.map((commentReply:CommentData) => (
      <Comment commentData={commentReply} />
    ));
  };

  return (
    <StyledCommentWrapper className="comment-wrapper">
      <StyledComment>
        <StyledCommentImg>
          <Img src={authorImg} alt={`${author} profile photo`} defaultIcon="user" round />
        </StyledCommentImg>
        <StyledCommentContentWrapper>
          <StyledCommentAuthor>
            <strong>{author}</strong>
            <br />
            {renderAuthorTitles()}
            <span><Icon type="circle" />culdevelopers/{username}</span>
            <span><Icon type="circle" />{jobDescr}</span>
          </StyledCommentAuthor>

          <StyledCommentBody>
            {bodyText}
          </StyledCommentBody>

          <StyledCommentButtons>
            <Button type="plaintext"><P socialColor="cudos"><Icon type="fire"/> Cudos<br /><span>{cudosCount}</span></P></Button>
            <Button type="plaintext"><P socialColor="comment"><Icon type="comment"/> Comment<br /><span>{commentCount}</span></P></Button>
            <Button type="plaintext"><P socialColor="share"><Icon type="share"/> Share<br /><span>{shareCount}</span></P></Button>
            <P className="comment-time">{dateTime}</P>
          </StyledCommentButtons>
        </StyledCommentContentWrapper>
      </StyledComment>

      {renderCommentReplies()}

    </StyledCommentWrapper>
  )
};

export default Comment;
