import * as types from "../constants/memes.constants";
import api from "../../apiService";

const getMemes = () => async (dispatch) => {
  dispatch({ type: types.GET_MEMES_REQUEST });
  try {
    api.get("/").then((res) => console.log(res.json()));
  } catch (e) {
    console.log(e);
  }
};

const memesActions = { getMemes };
export default memesActions;
