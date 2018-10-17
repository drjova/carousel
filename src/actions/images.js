import { IMAGES_ERROR, IMAGES_REQUEST, IMAGES_SUCCESS } from './actionTypes';
import { API_URL } from '../constants';

function requestImages() {
  return {
    type: IMAGES_REQUEST,
  };
}

function errorImages(payload) {
  return {
    type: IMAGES_ERROR,
    payload,
  };
}

function successImages(data) {
  const images = data.map(item => item.largeImageURL);
  return {
    type: IMAGES_SUCCESS,
    payload: images,
  };
}

export default function fetchImages() {
  return async (dispatch, getState, http) => {
    dispatch(requestImages());
    try {
      const response = await http.get(API_URL);
      dispatch(successImages(response.data.hits));
    } catch (error) {
      dispatch(errorImages(error.response && error.response.data));
    }
  };
}
