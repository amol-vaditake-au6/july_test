import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import imageReducer from "./reducers/imageReducer";

const rootReducer = combineReducers({
  userState: userReducer,
  imageState: imageReducer,
});

export default rootReducer;
