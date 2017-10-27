import { css } from 'styled-components';


const trowelWrapperStyle = css`
  & .trowel-month {
    position: relative;
    width: 100%;
    margin-bottom: 60px;
  }

  & .trowel-month > span {
    font-family: 'Inconsolata';
    font-size: 2em;
  }

  & .trowel-day {
    position: relative;
  }

  & .trowel-day:hover:before {
    border-bottom: 2px dashed #b6c4d6;
    border-left: 2px dashed #b6c4d6;
  }

  & .trowel-day:before {
      position: absolute;
      top: -35px;
      left: -35px;
      width: 15px;
      height: 50px;
      border-bottom: 2px dashed #eee;
      border-left: 2px dashed #eee;
      content: "";
  }

  & .trowel-month > span:after {
    position: absolute;
    top: 15px;
    margin-left: 15px;
    width: 100%;
    border-bottom: dashed 2px #eee;
    content: "";
  }

  & .trowel-month:hover > span:after {
    border-bottom: dashed 2px #b6c4d6;
  }

  & .trowel-month .trowel-day {
    margin-top: 45px;
    margin-left: 45px;
  }

  & .trowel-day-descr {
    font-family: 'Inconsolata';
    font-size: 1.25em;
  }

  & .trowel-artifact {
    font-family: 'Noto Sans';
    margin: 15px 30px 30px 55px;
    display: flex;
  }

  & .trowel-artifact:hover:before {
    border-bottom: 2px dashed #b6c4d6;
      border-left: 2px dashed #b6c4d6;
  }

  & .trowel-artifact:before {
      position: absolute;
      left: 0;
      width: 15px;
      margin-left: 20px;
      height: 50px;
      border-bottom: 2px dashed #eee;
      border-left: 2px dashed #eee;
      content: "";
  }

  & .trowel-artifact-icon {
    position: relative;
    top: 35px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #eee;
  }

  & .artifact-descr {
    position: relative;
    top: 25px;
    margin-left: 15px;
  }

  & .trowel-day-descr {
    display: flex;
    position: relative;
  }

  & .trowel-day-descr .trowel-artifact-icon {
    top: 0;
  }

  & .trowel-day-descr p {
    margin-top: 5px;
    margin-left: 15px;
  }
`;


export { trowelWrapperStyle };
