import { combineReducers } from "redux";
import memesReducer from "./reducers/memes.reducer";

export default combineReducers({
  memes: memesReducer,
});
