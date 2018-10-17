import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import { getStore } from '../../fixtures/store';
import { IMAGES_REQUEST } from '../../actions/actionTypes';
import Slider from './../Slider';

describe('Slider component', () => {
  it('dispatches fetch images record', () => {
    const store = getStore();
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
});
