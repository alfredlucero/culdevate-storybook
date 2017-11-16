import * as React from 'react';
import { shallow } from 'enzyme';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Img from '../index';

describe('<Img />', () => {
  it('should render icon type correctly', () => {
    const tree = renderer.create(<Img src="" alt="" defaultIcon="users" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

