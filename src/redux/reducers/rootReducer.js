import { DATA_LOADED } from "../CONSTANTS";

//Intial State
const initState = {
  Data: null,
};

//Reducers
export default (state = initState, action) => {
  const { payload } = action;
  switch (action.type) {
    case DATA_LOADED:
      return {
        ...state,
        Data: payload,
      };

    default:
      return { ...state };
  }
};
