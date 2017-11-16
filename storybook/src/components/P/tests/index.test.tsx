import * as React from 'react';
import { shallow } from 'enzyme';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import P from '../index';

describe('<H3 />', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<P />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render its text', () => {
    const children = 'Sample P Text';
    const renderedComponent = shallow(
      <P>{children}</P>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});

