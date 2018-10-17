import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
/* eslint-disable import/no-extraneous-dependencies */
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
/* eslint-disable import/no-extraneous-dependencies */

import reducers from './reducers';
import http from './common/http';

export const thunkMiddleware = thunk.withExtraArgument(http);

const PROD_MIDDLEWARES = [
    thunkMiddleware,
];

const DEV_MIDDLEWARES = [...PROD_MIDDLEWARES, createLogger()];

const withMiddlewares = () => {
    if (process.env.NODE_ENV === 'production') {
      return applyMiddleware(...PROD_MIDDLEWARES);
    }
    return applyMiddleware(...DEV_MIDDLEWARES);
};

export const store = createStore(
    reducers,
    composeWithDevTools(withMiddlewares()),
);