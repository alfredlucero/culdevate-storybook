import * as React from 'react';
import { shallow } from 'enzyme';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

// import H3 from '../index';

// describe('<H3 />', () => {
//   const defaultTextColor = '#595959';
//   const primaryTextColor = '#58a1e3';

//   it('should render correctly', () => {
//     const tree = renderer.create(<H3 />).toJSON();
//     expect(tree).toMatchSnapshot();
//   });

//   it('should render default color H3 given no props', () => {
//     const tree = renderer.create(<H3 />).toJSON();
//     expect(tree).toHaveStyleRule('color', defaultTextColor);
//   });

//   it('should render primary color H3 given primary prop', () => {
//     const tree = renderer.create(<H3 primary />).toJSON();
//     expect(tree).toHaveStyleRule('color', primaryTextColor);
//   });

//   it('should render its text', () => {
//     const children = 'Sample H3 Text';
//     const renderedComponent = shallow(
//       <H3>{children}</H3>
//     );
//     expect(renderedComponent.contains(children)).toBe(true);
//   });
// });

