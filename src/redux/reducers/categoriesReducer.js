import * as types from "../actions";

const categoriesReducer = (state = {}, { type, response, error }) => {
  switch (type) {
    case types.CATEGORIES_PENDING:
      return { ...state, pending: true };
    case types.GET_CATEGORIES_SUCCESS:
      return { ...state, ...response, error: "", pending: false };
    case types.GET_CATEGORIES_ERROR:
      return { error: error.message, pending: false };
    default:
      return state;
  }
};

export { categoriesReducer as categories };
