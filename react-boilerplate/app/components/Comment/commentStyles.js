import { css } from 'styled-components';


const commentWrapperStyle = css`
  &.comment-wrapper .comment-wrapper {
    margin-left: 55px;
    border-left: solid 5px #eee;
  }
`;

const commentStyle = css`
  display: flex;
  padding: 30px;
  color: #555;
  font-family: 'Noto Sans';
  letter-spacing: 1px;
`;

const commentImgStyle = css`

  & div {
    margin-right: 15px;
    width: 50px;
    height: 50px;
    border: solid 2px #eee;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #eee;
  }
`;

const commentContentWrapperStyle = css`
  line-height: 1.5;
`;

const commentAuthorStyle = css`
  margin-top: 0;
  width: 600px;

  & strong {
    font-family: "Inconsolata"
  }

  & i.fa-circle {
    position: relative;
    font-size: 0.25em;
    margin: 0 1em;
    top: -0.25em;
  }

  & > span {
    font-size: 0.75em;
    color: #aaa;
  }
`;

const commentBodyStyle = css`
  margin: 30px 0;
  width: 600px;

  & strong {
    font-family: "Inconsolata"
  }
`;

const commentButtonsStyle = css`
  display: flex;
  justify-content: space-between;
  width: 600px;

  & strong {
    font-family: "Inconsolata"
  }

  & p {
    margin-top: 0;
  }

  & .social {
    cursor: pointer;
  }

  & .social-cudos {
    color: #f7baa3;
  }

  & .social-cudos:hover {
    color: #cc9885;
  }

  & .social-comment {
    color: #a0a0a0;
  }

  & .social-comment:hover {
    color: #757575;
  }

  & .social-share {
    color: #83b9ff;
  }

  & .social-share:hover {
    color: #6b98d2;
  }

  & span,
  & .comment-time {
    font-family: Inconsolata;
  }
`;

export {
  commentWrapperStyle,
  commentStyle,
  commentImgStyle,
  commentContentWrapperStyle,
  commentAuthorStyle,
  commentBodyStyle,
  commentButtonsStyle,
};
