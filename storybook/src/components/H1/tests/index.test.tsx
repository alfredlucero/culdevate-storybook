import * as React from 'react';
import { shallow } from 'enzyme';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import H1 from '../index';

describe('<H1 />', () => {
  const defaultTextColor = '#595959';
  const primaryTextColor = '#58a1e3';

  it('should render correctly', () => {
    const tree = renderer.create(<H1 />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render default color H1 given no props', () => {
    const tree = renderer.create(<H1 />).toJSON();
    expect(tree).toHaveStyleRule('color', defaultTextColor);
  });

  it('should render primary color H1 given primary prop', () => {
    const tree = renderer.create(<H1 primary />).toJSON();
    expect(tree).toHaveStyleRule('color', primaryTextColor);
  });

  it('should render its text', () => {
    const children = 'Sample H1 Text';
    const renderedComponent = shallow(
      <H1>{children}</H1>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});

