/**
*
* Post
*
*/

import * as React from 'react';
import {
  StyledPostWrapper,
  StyledPostTitle,
  StyledAuthorWrapper,
  StyledSocialWrapper,
} from './StyledPost';

import Button from '../Button';
import P from '../P';
import Icon from '../Icon';
import Img from '../Img';

export interface PostProps {
  id: string;
  title: string;
  author: string;
  authorImg: string;
  dateTime: string;
  cudosCount: number;
  commentCount: number;
  shareCount: number;
}

const Post: React.SFC<PostProps> = ({
  id,
  title,
  author,
  authorImg,
  dateTime,
  cudosCount,
  commentCount,
  shareCount,
}) => {
  return (
    <StyledPostWrapper>
      <StyledPostTitle>
        <a href="`/posts/${id}`">{title}</a>
      </StyledPostTitle>
      <StyledAuthorWrapper>
        <div className="author-img"><Img src={authorImg} alt="`${author} profile photo`" defaultIcon="user" round /></div>
        <p>{author}<br /><span>{dateTime}</span></p>
        <p className="author-actions"><Icon type="ellipsis-h"/></p>
      </StyledAuthorWrapper>
      <StyledSocialWrapper>
        <Button type="plaintext"><P socialColor="cudos"><Icon type="fire"/> Cudos<br />{cudosCount}</P></Button>
        <Button type="plaintext"><P socialColor="comment"><Icon type="comment"/> Comment<br />{commentCount}</P></Button>
        <Button type="plaintext"><P socialColor="share"><Icon type="share"/> Share<br />{shareCount}</P></Button>
      </StyledSocialWrapper>
    </StyledPostWrapper>
  );
};

export default Post;
