/**
*
* TrowelStorybook
*
*/

import React from 'react';
import StyledTrowelWrapper from './StyledTrowel';


class TrowelStorybook extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <StyledTrowelWrapper>
        <div className="trowel-month">
          <span>January 2017</span>
          <div className="trowel-day">
            <div className="trowel-day-descr">
              <div className="trowel-artifact-icon"></div>
              <p>January 17, 2017</p>
            </div>
            <div className="trowel-artifact">
              <div className="trowel-artifact-icon"></div>
              <p className="artifact-descr">Artifact 1</p>
            </div>
            <div className="trowel-artifact">
              <div className="trowel-artifact-icon"></div>
              <p className="artifact-descr">Artifact 2</p>
            </div>
          </div>
          <div className="trowel-day">
            <div className="trowel-day-descr">
              <div className="trowel-artifact-icon"></div>
              <p>January 18, 2017</p>
            </div>
            <div className="trowel-artifact">
              <div className="trowel-artifact-icon"></div>
              <p className="artifact-descr">Artifact 1</p>
            </div>
            <div className="trowel-artifact">
              <div className="trowel-artifact-icon"></div>
              <p className="artifact-descr">Artifact 2</p>
            </div>
          </div>
        </div>
        <div className="trowel-month">
          <span>February 2017</span>
          <div className="trowel-day">
            <div className="trowel-day-descr">
              <div className="trowel-artifact-icon"></div>
              <p>February 17, 2017</p>
            </div>
            <div className="trowel-artifact">
              <div className="trowel-artifact-icon"></div>
              <p className="artifact-descr">Artifact 1</p>
            </div>
            <div className="trowel-artifact">
              <div className="trowel-artifact-icon"></div>
              <p className="artifact-descr">Artifact 2</p>
            </div>
          </div>
          <div className="trowel-day">
            <div className="trowel-day-descr">
              <div className="trowel-artifact-icon"></div>
              <p>February 18, 2017</p>
            </div>
            <div className="trowel-artifact">
              <div className="trowel-artifact-icon"></div>
              <p className="artifact-descr">Artifact 1</p>
            </div>
            <div className="trowel-artifact">
              <div className="trowel-artifact-icon"></div>
              <p className="artifact-descr">Artifact 2</p>
            </div>
          </div>
        </div>
      </StyledTrowelWrapper>
    );
  }
}

TrowelStorybook.propTypes = {

};

export default TrowelStorybook;
