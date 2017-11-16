/**
*
* CommentList
*
*/

import * as React from 'react';

import Comment, { CommentData } from '../Comment';

export interface CommentListProps {
  comments: CommentData[];
}

const CommentList: React.SFC<CommentListProps> = ({
  comments,
}) => {

  return (
    <div>
      {comments.map((comment: CommentData) => <Comment commentData={comment} />)}
    </div>
  )
};

export default CommentList;
