import React from 'react';
import { mount } from 'enzyme';

import Slide from './../Slide';

describe('Slide component', () => {
  it('should render ``slide``', () => {
    const component = mount(<Slide image={'url'} width={300} heigh={300} />);
    expect(component).toMatchSnapshot();
  });
});
