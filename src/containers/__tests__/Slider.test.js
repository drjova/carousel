import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import { getStore, getStoreWithState } from '../../fixtures/store';
import { IMAGES_REQUEST } from '../../actions/actionTypes';
import Slider from '../Slider/Slider';

describe('Slider component', () => {
  it('dispatches fetch images record', () => {
    const store = getStoreWithState({
      images: {
        loading: false,
        data: ['url'],
      },
    });
    mount(
      <Provider store={store}>
        <Slider />
      </Provider>
    );
    const actions = store.getActions();
    const expectedAction = actions.find(
      action => action.type === IMAGES_REQUEST
    );
    expect(expectedAction).toBeDefined();
  });

  it('displays load when ``loading`` prop is true', () => {
    const store = getStoreWithState({
      images: {
        loading: true,
      },
    });
    const component = mount(
      <Provider store={store}>
        <Slider />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
