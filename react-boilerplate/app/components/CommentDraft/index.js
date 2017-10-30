/**
*
* CommentDraft
*
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Editor, EditorState } from 'draft-js';
// import styled from 'styled-components';


class CommentDraft extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = (editorState) => this.setState({ editorState });
  }

  render() {
    return (
      <div>
        <Editor editorState={this.state.editorState} onChange={this.onChange} />
      </div>
    );
  }
}

CommentDraft.propTypes = {

};

export default CommentDraft;
