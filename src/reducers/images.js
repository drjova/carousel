import {
    IMAGES_ERROR,
    IMAGES_REQUEST,
    IMAGES_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
    loading: false,
    data: [],
    error: null,
};

const imagesReducers = (state = initialState, action) => {
    switch (action.type) {
        case IMAGES_REQUEST:
            return { ...state, loading: true }
        case IMAGES_SUCCESS:
            return { ...state, loading: false, data: action.payload.data }
        case IMAGES_ERROR:
            return { ...state, loading: false, error: action.payload }
        default:
            return state;
    }
}

export default imagesReducers;