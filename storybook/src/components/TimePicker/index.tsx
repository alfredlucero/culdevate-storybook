import * as React from 'react';
import TimePicker from 'react-times';

// // use material theme
import 'react-times/css/material/default.css';
// // or you can use classic theme
import 'react-times/css/classic/default.css';

export default class ReactTimePicker extends React.Component<any, any> {
  // do some work
  onHourChange(hour: any) {
    // do something
  }

  onMinuteChange(minute: any) {
    // do something
  }

  onTimeChange(time: any) {
    // do something
  }

  onFocusChange(focusStatue: any) {
    // do something
  }

  onMeridiemChange(meridiem: any) {
    // do something
  }

  render() {
    return (
      <TimePicker
        onFocusChange={this.onFocusChange.bind(this)}
        onHourChange={this.onHourChange.bind(this)}
        onMinuteChange={this.onMinuteChange.bind(this)}
        onTimeChange={this.onTimeChange.bind(this)}
        onMeridiemChange={this.onMeridiemChange.bind(this)}
      />
    )
  }
}