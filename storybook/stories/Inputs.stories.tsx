import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TimePicker from '../src/components/TimePicker';
import 'react-dates/initialize';
import DatePicker from '../src/components/DatePicker';
import InputText from '../src/components/InputText';
import InputTextArea from '../src/components/InputTextArea';
import Checkbox from '../src/components/Checkbox';
import RadioButton from  '../src/components/RadioButton';

const stories = storiesOf('Inputs', module);

stories.add('TimePicker', () => (
  <TimePicker />
));

stories.add('DatePicker', () => (
  <div>
    <DatePicker />
  </div>
));

stories.add('InputText', () => (
  <div>
    <h1 style={{ color: '#595959' }}>{`<InputText placeholder="some-placeholder" type="text | number | password | email" value="some-value" onChange={handleChange} min?={10} max?={20} disabled? />`}</h1>
    <InputText
      placeholder="Input some text here..."
      value=""
      onChange={e => console.log(e.target.value)}
      type="text"
    />
    <br/>
    <InputText 
      placeholder="Disabled text..."
      value=""
      onChange={e => console.log(e.target.value)}
      disabled
      type="text"
    />
    <br/>
    <InputText
      placeholder="Input some text here..."
      value=""
      onChange={e => console.log(e.target.value)}
      type="text"
    />
    <br/>
    <InputText
      placeholder="alfred@example.com"
      value=""
      onChange={e => console.log(e.target.value)}
      type="email"
    />
    <br/>
    <InputText
      placeholder="Some password..."
      value="password"
      onChange={e => console.log(e.target.value)}
      type="password"
    />
    <br/>
    <InputText
      placeholder="Input some text here..."
      value="0"
      onChange={e => console.log(e.target.value)}
      type="number"
      max={10}
      min={0}
    />
  </div>
));

stories.add('InputTextArea', () => (
  <div>
    <h1 style={{ color: '#595959' }}>{`<InputTextArea placeholder="some-placeholder" value="some-value" onChange={handleChange} rows={20} cols={20} disabled? />`}</h1>
    <InputTextArea 
      placeholder="Input some text here..."
      value=""
      onChange={e => console.log(e.target.value)}
      rows={10}
      cols={30}
    />
    <br/>
    <InputTextArea 
      placeholder="Disabled text..."
      value=""
      onChange={e => console.log(e.target.value)}
      rows={10}
      cols={30}
      disabled
    />
  </div>
));

stories.add('Checkbox', () => (
  <div>
    <h1 style={{ color: '#595959' }}>{`<Checkbox label="some-label" value="some-value" onChange={handleCheckboxChange} disabled? />`}</h1>
    <Checkbox label="Frontend" value="frontend" onChange={(e) => console.log(e.target.value)} />
    <Checkbox label="Disabled" value="disabled" onChange={(e) => console.log(e.target.value)} disabled />
  </div>
));

stories.add('RadioButton', () => (
  <div>
    <h1 style={{ color: '#595959' }}>{`<RadioButton label="some-label" value="some-value" onChange={handleRadioButtonChange} checked={true} disabled? />`}</h1>
    <RadioButton label="Frontend" value="frontend" checked={true} onChange={(e) => console.log(e.target.value)} />
    <RadioButton label="Disabled" value="disabled" checked={false} onChange={(e) => console.log(e.target.value)} disabled />
  </div>
))
