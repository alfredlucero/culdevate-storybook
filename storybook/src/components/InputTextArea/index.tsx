import * as React from 'react';

import styled from 'styled-components';

export interface InputProps {
  onChange: (event: any) => void;
  value: string;
  placeholder: string;
  rows: number;
  cols: number;
  disabled?: boolean;
}

const InputTextArea = styled.textarea`
  border: 2px solid #eee;
  border-radius: 5px;
  color: #595959;
  font-size: 1rem;
  letter-spacing: 1px;
  outline: none;
  padding: 10px;

  &[disabled] {
    background-color: #eee;
  }

  &:focus {
    box-shadow: 0 0 5px #b6c4d6;
    padding: 15px;
    border: 3px solid #b6c4d6;
    border-radius: 5px;
  }

  &::placeholder {
    color: #aaa;
  }
`;

export default InputTextArea;