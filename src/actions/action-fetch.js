import { REQUEST_FAILURE, INITIATE_REQUEST, API_SUCCESS } from "../constants";

const API_KEY = "1168de7e738a7c95dc2017bed094ca8a";

export const getWeather = () => {
  return async dispatch => {
    dispatch({
      type: INITIATE_REQUEST
    });

    const api_url = `http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&appid=${API_KEY}&units=metric`;
    fetch(api_url)
      .then(resp => resp.json())
      .then(data => {
        dispatch({
          type: API_SUCCESS,
          payload: data
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: REQUEST_FAILURE });
      });
  };
};
