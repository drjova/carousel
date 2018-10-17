import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';

import App from '../App';
import { initialState } from '../reducers/images';
import { getStore, getStoreWithState } from '../fixtures/store';

describe('render App', () => {
  it('renders initial state', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});
