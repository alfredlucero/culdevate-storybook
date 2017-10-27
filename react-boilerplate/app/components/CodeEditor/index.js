/**
*
* CodeEditor
*
*/

import React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

// Import a mode (language)
import 'brace/mode/javascript';

// Import a theme (okadia, github, xcode, etc.);
import 'brace/theme/tomorrow';


class CodeEditor extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  onChange(newValue) {
    // Handle change values here 
  }
  
  render() {
    return (
      <div>
        <AceEditor
          mode="javascript"
          theme="tomorrow"
          name="sample-code-editor"
          onChange={this.onChange}
          editorProps={{
            $blockScrolling: true,
          }}
        />
      </div>
    );
  }
}

CodeEditor.propTypes = {

};

export default CodeEditor;
