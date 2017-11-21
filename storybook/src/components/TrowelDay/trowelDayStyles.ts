import { css } from 'styled-components';

const trowelDayStyles = css`
  .trowel-day {
    position: relative;
  }

  .trowel-day:hover:before {
    border-bottom: 2px dashed #b6c4d6;
    border-left: 2px dashed #b6c4d6;
  }

  .trowel-day:before {
    position: absolute;
    top: -35px;
    left: -35px;
    width: 15px;
    height: 50px;
    border-bottom: 2px dashed #eee;
    border-left: 2px dashed #eee;
    content: "";
  }

  & .trowel-day-descr {
    font-family: 'Inconsolata';
    font-size: 1.25rem;
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

export { trowelDayStyles };