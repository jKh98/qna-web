import * as types from "../actions";

const questionsReducer = (state = {}, { type, response, error }) => {
  switch (type) {
    case types.QUESTIONS_PENDING:
      return { ...state, pending: true };

    case types.GET_QUESTIONS_SUCCESS:
    case types.GET_QUESTIONS_BY_CATEGORY_SUCCESS:
      return { ...state, ...response, error: "", pending: false };

    case types.GET_QUESTIONS_ERROR:
    case types.GET_QUESTIONS_BY_CATEGORY_ERROR:
      return { error: error.message, pending: false };

    default:
      return state;
  }
};

export { questionsReducer as questions };
