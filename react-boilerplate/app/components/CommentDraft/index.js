/**
*
* CommentDraft
*
*/

import React from 'react';
import Editor from 'draft-js-plugins-editor';
import { EditorState, RichUtils } from 'draft-js';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import 'draft-js-emoji-plugin/lib/plugin.css';
// import styled from 'styled-components';

const emojiPlugin = createEmojiPlugin();
const { EmojiSuggestions } = emojiPlugin;


class CommentDraft extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = this.onChange.bind(this);
    this.onBoldClick = this.onBoldClick.bind(this);
    this.onUnderlineClick = this.onUnderlineClick.bind(this);
    this.onToggleCode = this.onToggleCode.bind(this);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  onChange(editorState) {
    this.setState({ editorState });
  }

  onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(
      this.state.editorState,
      'BOLD'
    ));
  }

  onUnderlineClick() {
    this.onChange(RichUtils.toggleInlineStyle(
      this.state.editorState,
      'UNDERLINE'
    ));
  }

  onToggleCode() {
    this.onChange(RichUtils.toggleCode(this.state.editorState));
  }

  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);

    if (newState) {
      this.onChange(newState);
      return 'handled';
    }

    return 'not-handled';
  }

  render() {
    return (
      <div>
        <button onClick={this.onBoldClick}>Bold</button>
        <button onClick={this.onUnderlineClick}>Underline</button>
        <button onClick={this.onToggleCode}>Code Block</button>
        <Editor
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
          plugins={[emojiPlugin]}
        />
        <EmojiSuggestions />
      </div>
    );
  }
}

CommentDraft.propTypes = {

};

export default CommentDraft;
