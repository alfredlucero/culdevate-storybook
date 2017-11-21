import { css } from 'styled-components';


const trowelArtifactStyle = css`
  & .trowel-artifact {
    margin: 15px 30px 30px 55px;
    display: flex;
  }

  & .trowel-artifact:hover:before {
    border-bottom: 2px dashed #b6c4d6;
    border-left: 2px dashed #b6c4d6;
  }

  & .trowel-artifact:before {
      position: absolute;
      left: 85px;
      width: 15px;
      margin-left: 20px;
      height: 50px;
      border-bottom: 2px dashed #eee;
      border-left: 2px dashed #eee;
      content: "";
  }

  & .trowel-artifact-icon {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 35px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #eee;
    color: #595959;
  }

  & .artifact-descr {
    position: relative;
    top: 25px;
    margin-left: 15px;
  }
`;


export { trowelArtifactStyle };
