import { css } from 'styled-components';

const imgStyle = css`
  & img,
  & div {
    margin-right: 15px;
    width: 50px;
    height: 50px;
    border: solid 2px #eee;
  }

  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #eee;
  }
`;

export { imgStyle };
