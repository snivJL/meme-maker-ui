import * as types from "../constants/memes.constants";

const initialState = {
  memes: [],
  loading: true,
  error: null,
};
const memesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_MEMES_REQUEST:
      return { ...state, loading: true };
    case types.GET_MEMES_SUCCESS:
      return { ...state, memes: payload, loading: false };
    case types.GET_MEMES_FAILURE:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export default memesReducer;
