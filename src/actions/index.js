// Library Imports
import axios from "axios";

export const FETCH_START = "FETCH_START";

export const fetchStart = () => {
  return { type: FETCH_START };
};

// Fetching from Dog API
export const getDog = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
