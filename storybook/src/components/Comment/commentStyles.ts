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
  font-family: 'Roboto';
  letter-spacing: 1px;
`;

const commentImgStyle = css`
  & div, 
    img {
    margin-right: 30px;
    width: 50px;
    height: 50px;
  }
`;

const commentContentWrapperStyle = css`
  line-height: 1.5;
`;

const commentAuthorStyle = css`
  margin-top: 0;
  width: 600px;

  & strong {
    font-family: "Inconsolata";
    font-size: 1.25rem;
  }

  & i.fa-circle {
    position: relative;
    font-size: 0.25rem;
    margin: 0 0.5rem;
    top: -0.25em;
  }

  & > span {
    font-size: 0.75rem;
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

  & p {
    margin-top: 0;
  }

  & span,
  & .comment-time {
    font-family: "Inconsolata";
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
