import React from 'react';
import { mount } from 'enzyme';

import Navigation from '../Navigation';

describe('Navigation component', () => {
  it('should render with both buttons', () => {
    const component = mount(
      <Navigation
        current={2}
        total={12}
        onClickPrev={jest.fn()}
        onClickNext={jest.fn()}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render only previous button', () => {
    const component = mount(
      <Navigation
        current={11}
        total={12}
        onClickPrev={jest.fn()}
        onClickNext={jest.fn()}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render only next button', () => {
    const component = mount(
      <Navigation
        current={0}
        total={12}
        onClickPrev={jest.fn()}
        onClickNext={jest.fn()}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
