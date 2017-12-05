/**
*
* RadioButton
*
*/

import * as React from 'react';
import {
  StyledRadioButton,
} from './StyledRadioButton';

export interface RadioButtonProps {
  label: string;
  value: string;
  checked: boolean;
  onChange: (event: any) => void;
  disabled?: boolean;
}

// Parent component will keep track of the selected radio option
// and will uncheck the rest
const RadioButton: React.SFC<RadioButtonProps> = ({
  label,
  value,
  checked,
  onChange,
  disabled
}) => {
    return (
      <StyledRadioButton>
        <label>
          <input
            type="radio"
            value={value}
            checked={checked}
            onChange={onChange}
            disabled={disabled ? true : false}
          />
          {label}
        </label>
      </StyledRadioButton>
    );
};

export default RadioButton;
