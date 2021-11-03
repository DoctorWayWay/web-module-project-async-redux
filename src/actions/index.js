// Library Imports
import axios from "axios";

// Fetching from Dog API
export const getDog = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        dispatch(fetchSuccess(response.data.message));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const fetchStart = () => {
  return { type: FETCH_START };
};
export const fetchSuccess = (dog) => {
  return { type: FETCH_SUCCESS, payload: dog };
};
