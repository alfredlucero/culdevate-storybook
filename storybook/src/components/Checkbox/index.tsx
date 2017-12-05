/**
*
* Checkbox
*
*/

import * as React from 'react';
import {
  StyledCheckbox,
} from './StyledCheckbox';

export interface CheckboxProps {
  label: string;
  value: string;
  onChange: (event: any) => void;
  disabled?: boolean;
}


class Checkbox extends React.Component<CheckboxProps, { isChecked: boolean }> {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: false 
    };

    this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this);
  }

  toggleCheckboxChange() {
    this.setState(({ isChecked }) => 
      ({ isChecked: !isChecked }));
  }

  public render() {
    const { label, value, disabled } = this.props;
    const { isChecked } = this.state;

    return (
      <StyledCheckbox>
        <label>
          <input
            type="checkbox"
            value={value}
            checked={isChecked}
            onChange={this.toggleCheckboxChange}
            disabled={disabled ? true : false}
          />
          {label}
        </label>
      </StyledCheckbox>
    );
  }
}

export default Checkbox;
