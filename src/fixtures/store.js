import configureMockStore from 'redux-mock-store';

import { initialState as images } from '../reducers/images';
import { thunkMiddleware } from '../store';

export function getState() {
  return {
    images,
  };
}

export function getStore() {
  const mockStore = configureMockStore([thunkMiddleware]);
  return mockStore(getState());
}

export function getStoreWithState(state) {
  const mockStore = configureMockStore([thunkMiddleware]);
  return mockStore({ ...getState(), ...state });
}
