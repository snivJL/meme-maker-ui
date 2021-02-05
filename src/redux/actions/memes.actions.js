import * as types from "../constants/memes.constants";
import api from "../../apiService";

const getMemes = () => async (dispatch) => {
  dispatch({ type: types.GET_MEMES_REQUEST });
  try {
    api.get("/memes").then((res) => {
      console.log(res);
      if (res && res.data)
        dispatch({
          type: types.GET_MEMES_SUCCESS,
          payload: res.data,
        });
    });
  } catch (e) {
    console.log(e);
    dispatch({ type: types.GET_MEMES_FAILURE });
  }
};

const memesActions = { getMemes };
export default memesActions;
