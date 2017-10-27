/**
*
* Post
*
*/

import React from 'react';
import {
  StyledPostWrapper,
  StyledPostTitle,
  StyledAuthorWrapper,
  StyledSocialWrapper,
} from './StyledPost';


function Post() {
  return (
    <StyledPostWrapper>
      <StyledPostTitle>
        <a href="">Culdevate Post...</a>
      </StyledPostTitle>
      <StyledAuthorWrapper>
        <div><i className="fa fa-user"></i></div>
        <p>Alfred Lucero<br/><span>Oct. 17, 2017</span></p>
        <p className="author-actions"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></p>
      </StyledAuthorWrapper>
      <StyledSocialWrapper>
        <p className="social social-cudos"><i className="fa fa-fire"></i> Cudos<br/><span>100</span></p>
        <p className="social social-comment"><i className="fa fa-comment"></i> Comment<br/><span>10</span></p>
        <p className="social social-share"><i className="fa fa-share"></i> Share<br/><span>15</span></p>
      </StyledSocialWrapper>
    </StyledPostWrapper>
  );
}

Post.propTypes = {

};

export default Post;
