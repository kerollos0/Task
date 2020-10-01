import axios from "axios";

import { DATA_LOADED } from "../../CONSTANTS";

const loadedData = () => async (dispatch) => {
  try {
    const res = await axios.get(`https://megakheir.herokuapp.com/ngos`);
    dispatch({
      type: DATA_LOADED,
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};
export default loadedData;
