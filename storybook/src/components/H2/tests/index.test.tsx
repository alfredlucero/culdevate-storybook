import * as React from 'react';
import { shallow } from 'enzyme';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import H2 from '../index';

describe('<H2 />', () => {
  const defaultTextColor = '#595959';
  const primaryTextColor = '#58a1e3';

  it('should render correctly', () => {
    const tree = renderer.create(<H2 />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render default color H2 given no props', () => {
    const tree = renderer.create(<H2 />).toJSON();
    expect(tree).toHaveStyleRule('color', defaultTextColor);
  });

  it('should render primary color H2 given primary prop', () => {
    const tree = renderer.create(<H2 primary />).toJSON();
    expect(tree).toHaveStyleRule('color', primaryTextColor);
  });

  it('should render its text', () => {
    const children = 'Sample H2 Text';
    const renderedComponent = shallow(
      <H2>{children}</H2>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});

