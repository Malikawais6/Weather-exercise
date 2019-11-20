import { API_SUCCESS, REQUEST_FAILURE, INITIATE_REQUEST } from "../constants";

const weatherDefaultState = {
  isLoading: false
};

export default (state = weatherDefaultState, action) => {
  switch (action.type) {
    case INITIATE_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case REQUEST_FAILURE:
      return {
        ...state,
        isLoading: false,
        weather: []
      };
    case API_SUCCESS:
      return {
        ...state,
        isLoading: false,
        weather: action.payload
      };
    default:
      return state;
  }
};
