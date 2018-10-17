import MockAdapter from 'axios-mock-adapter';

import { getStore } from '../../fixtures/store';
import { IMAGE_RESPONSE, IMAGES_SUCCESS_PAYLOAD } from '../../fixtures/images';
import http from '../../common/http';
import { API_URL } from '../../constants';
import { IMAGES_ERROR, IMAGES_REQUEST, IMAGES_SUCCESS } from '../actionTypes';
import fetchImages from '../images';

const mockHttp = new MockAdapter(http);

describe('Images - action creator', () => {
  afterEach(() => {
    mockHttp.reset();
  });

  it('craetes IMAGES_SUCCESS', async done => {
    mockHttp.onGet(API_URL).replyOnce(200, IMAGE_RESPONSE);
    const expectedActions = [
      { type: IMAGES_REQUEST },
      { type: IMAGES_SUCCESS, payload: IMAGES_SUCCESS_PAYLOAD },
    ];

    const store = getStore();
    await store.dispatch(fetchImages());
    expect(store.getActions()).toEqual(expectedActions);
    done();
  });

  it('craetes IMAGES_ERROR', async done => {
    const errorResponse = {
      messages: 'Error',
    };
    mockHttp.onGet(API_URL).replyOnce(500, errorResponse);
    const expectedActions = [
      { type: IMAGES_REQUEST },
      { type: IMAGES_ERROR, payload: errorResponse },
    ];

    const store = getStore();
    await store.dispatch(fetchImages());
    expect(store.getActions()).toEqual(expectedActions);
    done();
  });
});
