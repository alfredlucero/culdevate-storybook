/**
*
* Comment
*
*/

import React from 'react';
import {
  StyledCommentWrapper,
  StyledComment,
  StyledCommentImg,
  StyledCommentContentWrapper,
  StyledCommentAuthor,
  StyledCommentBody,
  StyledCommentButtons,
} from './StyledComment';

function Comment() {
  return (
    <StyledCommentWrapper className="comment-wrapper">
      <StyledComment>
        <StyledCommentImg>
          <div><i className="fa fa-user"></i></div>
        </StyledCommentImg>
        <StyledCommentContentWrapper>
          <StyledCommentAuthor>
            <strong>Alfred Lucero</strong> <i className="fa fa-circle"></i> Sr. Frontend Culdeveloper <i className="fa fa-circle"></i> Founder <i className="fa fa-circle"></i> Mod<br/>
            <span>culdevelopers/alfredlucero <i className="fa fa-circle"></i> Frontend Software Engineer at SendGrid</span>
          </StyledCommentAuthor>

          <StyledCommentBody>
            Here is a Culdevate comment about a random topic. Cultivate better developers here...
          </StyledCommentBody>

          <StyledCommentButtons>
            <p className="social social-cudos"><i className="fa fa-fire"></i> Cudos<br/><span>100</span></p>
            <p className="social social-comment"><i className="fa fa-comment"></i> Comment<br/><span>10</span></p>
            <p className="social social-share"><i className="fa fa-share"></i> Share<br/><span>15</span></p>
            <p className="comment-time">20 hours ago</p>
          </StyledCommentButtons>
        </StyledCommentContentWrapper>
      </StyledComment>

      <StyledCommentWrapper className="comment-wrapper">
        <StyledComment>
          <StyledCommentImg>
            <div><i className="fa fa-user"></i></div>
          </StyledCommentImg>
          <StyledCommentContentWrapper>
            <StyledCommentAuthor>
              <strong>Regine Deguzman</strong> <i className="fa fa-circle"></i> Jr. Frontend Culdeveloper <i className="fa fa-circle"></i> Founder <i className="fa fa-circle"></i> Mod<br/>
              <span>culdevelopers/reginedeguzman <i className="fa fa-circle"></i> Lead UI/UX Designer at Culdevate</span>
            </StyledCommentAuthor>

            <StyledCommentBody>
              Here is a Culdevate comment about a random topic. Cultivate better developers here...
            </StyledCommentBody>

            <StyledCommentButtons>
              <p className="social social-cudos"><i className="fa fa-fire"></i> Cudos<br/><span>100</span></p>
              <p className="social social-comment"><i className="fa fa-comment"></i> Comment<br/><span>10</span></p>
              <p className="social social-share"><i className="fa fa-share"></i> Share<br/><span>15</span></p>
              <p className="comment-time">10 hours ago</p>
            </StyledCommentButtons>
          </StyledCommentContentWrapper>
        </StyledComment>  
      </StyledCommentWrapper>
    </StyledCommentWrapper>
  );
}

Comment.propTypes = {

};

export default Comment;
