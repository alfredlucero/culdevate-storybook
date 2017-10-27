import React from 'react';
import { shallow } from 'enzyme';

import CuldevateLogo from '../index';

describe('<CuldevateLogo />', () => {
  it('should have a className attribute', () => {
    const renderedComponent = shallow(<CuldevateLogo />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });
});
