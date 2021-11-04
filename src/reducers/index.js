import { FETCH_ERROR, FETCH_START, FETCH_SUCCESS } from "../actions";
const initialState = {
  dogImage:
    "https://images.dog.ceo/breeds/terrier-westhighland/n02098286_3462.jpg",
  isFetching: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        dogImage: "",
        isFetching: true,
        error: "",
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        dogImage: action.payload,
        isFetching: false,
        error: "",
      };
    case FETCH_ERROR:
      return {
        ...state,
        dogImage: "",
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
