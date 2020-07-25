import { SET_IMAGES, TOGGLE_IMAGE_FETCH_STATE, SET_FAV } from "../actionTypes";

export const setImages = (images) => {
  return {
    type: SET_IMAGES,
    payload: images,
  };
};

export const toggleImageFetchingState = () => {
  return {
    type: TOGGLE_IMAGE_FETCH_STATE,
  };
};

export const setFav = (images) => {
  return {
    type: SET_FAV,
    payload: images,
  };
};
