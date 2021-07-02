import * as types from "../actions";

const questionsReducer = (state = {}, { type, response, error }) => {
  switch (type) {
    case types.CATEGORIES_PENDING:
    case types.QUESTIONS_PENDING:
      return { ...state, pending: true };

    case types.GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        ...response,
        selectedCategory: null,
        error: "",
        pending: false,
      };

    case types.GET_QUESTIONS_BY_CATEGORY_SUCCESS:
      return { ...state, ...response, error: "", pending: false };
    case types.ADD_QUESTION_SUCCESS:
      return {
        ...state,
        success: "Your question was added successfully",
        error: "",
        pending: false,
      };

    case types.GET_QUESTIONS_ERROR:
    case types.GET_QUESTIONS_BY_CATEGORY_ERROR:
    case types.GET_CATEGORY_BY_ID_ERROR:
    case types.ADD_QUESTION_ERROR:
      return { error: error.message, pending: false };

    case types.GET_CATEGORY_BY_ID_SUCCESS:
      return {
        ...state,
        selectedCategory: { ...response },
        error: "",
        pending: false,
      };

    default:
      return state;
  }
};

export { questionsReducer as questions };
