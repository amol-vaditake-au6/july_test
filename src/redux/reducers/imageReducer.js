import { SET_IMAGES, TOGGLE_IMAGE_FETCH_STATE, SET_FAV } from "../actionTypes";

const initialState = {
  images: null,
  isFetching: false,
  favorites: null,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_IMAGES:
      return { ...state, images: payload };
    case TOGGLE_IMAGE_FETCH_STATE:
      return { ...state, isFetching: !state.isFetching };
    case SET_FAV:
      return { ...state, favorites: payload };
    default:
      return state;
  }
};

export default userReducer;
