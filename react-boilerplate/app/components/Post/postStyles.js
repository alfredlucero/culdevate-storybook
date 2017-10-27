import { css } from 'styled-components';

const postWrapperStyle = css`
  width: 350px;
  height: auto;
  border: solid 2px #eee;
  border-radius: 5px;
  font-family: 'Noto Sans';
  color: #555;
  letter-spacing: 1px;
`;

const postTitleStyle = css`
  margin: 0;
  padding: 30px;
  font-family: 'Inconsolata';
  background-color: #4c768a;
  letter-spacing: 2px;

  & a {
    text-decoration: none;
    color: #fff;
  }

  & a:hover {
    text-decoration: underline;
  }
`;

const postAuthorWrapperStyle = css`
  padding: 15px 15px 0 15px;
  display: flex;
  justify-content: flex-start;

  & div {
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

  & p {
    margin: 0 0 0 15px;
  }

  & p span {
    color: #aaa;
    font-size: 0.75em;
  }

  & .author-actions {
    font-size: 1.25em;
    cursor: pointer;
  }

  & .author-actions:hover {
    color: #b6c4d6;
  }
`;

const postSocialWrapperStyle = css`
  display: flex;
  justify-content: space-around;

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

  & span {
    font-family: Inconsolata;
  }
`;

export {
  postWrapperStyle,
  postTitleStyle,
  postAuthorWrapperStyle,
  postSocialWrapperStyle,
};
