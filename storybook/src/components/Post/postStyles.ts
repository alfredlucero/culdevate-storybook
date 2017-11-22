import { css } from 'styled-components';

const postWrapperStyle = css`
  width: 400px;
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
  padding: 30px 30px 15px 30px;
  display: flex;
  justify-content: flex-start;

  & .author-img {
    margin-right: 15px;
  }

  & p {
    margin: 0;
  }

  & p span {
    color: #aaa;
    font-size: 0.75rem;
  }

  & .author-actions {
    margin-left: 15px;
    font-size: 1.25rem;
    cursor: pointer;
  }

  & .author-actions:hover {
    color: #b6c4d6;
  }
`;

const postSocialWrapperStyle = css`
  display: flex;
  justify-content: space-around;

  & p {
    font-size: 0.75rem;
  }
`;

export {
  postWrapperStyle,
  postTitleStyle,
  postAuthorWrapperStyle,
  postSocialWrapperStyle,
};
