import { css } from 'styled-components';

const barWrapperStyle = css`
  width: 400px;
  height: 50px;
  background: #eee;
  margin: 30px;
  overflow: hidden;
  position: relative;
  border-radius: 5px;
`;

const barStyle = css`
  width: 400px;
  height: 50px;
  border-radius: 5px;
  background: #f7baa3;
  position: absolute;
  left: 0;
  top: 0;

  p {
    letter-spacing: 1px;
    margin: 15px 30px;
    text-align: center;
    color: #555;
    font-family: 'Inconsolata';
  }

`;

export {
  barWrapperStyle,
  barStyle,
};
