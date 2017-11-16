import * as React from 'react';
import { shallow } from 'enzyme';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Button from '../index';

describe('<Button />', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Button type="plaintext" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render its children', () => {
    const children = 'Sample button text';
    const renderedComponent = shallow(
      <Button type="plaintext">{children}</Button>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
