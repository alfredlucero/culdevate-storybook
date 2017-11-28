import * as React from 'react';
import * as moment from 'moment';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

import 'react-dates/lib/css/_datepicker.css';

export default class DatePicker extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      focused: false,
      date: moment()
    };
  }

  render() {
    return (
      <SingleDatePicker
        id="some-id"
        date={this.state.date} // momentPropTypes.momentObj or null
        onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
        focused={this.state.focused} // PropTypes.bool
        onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
      />
    )
  }
}