import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Comment, { CommentData } from '../src/components/Comment';
import CommentList from '../src/components/CommentList';

const stories = storiesOf('Comments', module);

const sampleAlfredCommentData = {
  author:"Alfred Lucero",
  authorImg:"",
  titles: ["Sr. Frontend Culdeveloper", "Founder", "Moderator"],
  username:"alfredlucero",
  jobDescr:"Frontend Software Engineer at SendGrid",
  bodyText:"Some sample culdevate comment text here...",
  cudosCount: 100,
  commentCount: 15,
  shareCount: 10,
  dateTime: "20 hours ago",
  commentReplies: [] as CommentData[],
};

const sampleRegineCommentData = {
  author:"Regine Deguzman",
  authorImg:"",
  titles: ["Jr. Frontend Culdeveloper", "Founder", "Moderator"],
  username:"reginedeguzman",
  jobDescr:"Lead UI/UX Designer at Culdevate",
  bodyText:"Some sample culdevate comment text here...",
  cudosCount: 1000,
  commentCount: 150,
  shareCount: 250,
  dateTime: "19 hours ago",
  commentReplies: [] as CommentData[],
};

stories.add('Sample Comment', () => (
  <Comment
    commentData={sampleAlfredCommentData}
  />
));

stories.add('Nested Comments', () => (
  <Comment
    commentData={{
      ...sampleAlfredCommentData, 
      commentReplies: [sampleRegineCommentData],
    }}
  />
));

stories.add('CommentList', () => (
  <CommentList 
    comments={[
      {
        ...sampleAlfredCommentData, 
        commentReplies: [sampleRegineCommentData],
      },
      {
        ...sampleAlfredCommentData, 
        commentReplies: [sampleRegineCommentData],
      },
    ]}
  />
));