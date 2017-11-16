import * as React from 'react';
import { shallow } from 'enzyme';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Icon from '../index';

describe('<Icon />', () => {
  it('should render icon type correctly', () => {
    const tree = renderer.create(<Icon type="github"/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

