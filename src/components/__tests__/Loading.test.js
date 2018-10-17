import React from 'react';
import { mount } from 'enzyme';

import Loading from './../Loading';

describe('Loading component', () => {
  it('should render ``Loading``', () => {
    const component = mount(<Loading loading />);
    expect(component).toMatchSnapshot();
  });

  it('should render nothing', () => {
    const component = mount(<Loading loading={false} />);
    expect(component).toMatchSnapshot();
  });
});
