import * as types from "../actions";

const answersReducer = (state = {}, { type, response, error }) => {
  switch (type) {
    case types.ANSWERS_PENDING:
    case types.QUESTIONS_PENDING:
      return { ...state, pending: true };

    case types.GET_ANSWERS_BY_QUESTION_SUCCESS:
      return {
        ...state,
        ...response,
        error: "",
        pending: false,
      };
    case types.GET_QUESTION_BY_ID_SUCCESS:
      return {
        ...state,
        selectedQuestion: { ...response },
        error: "",
        pending: false,
      };

    case types.GET_ANSWERS_BY_QUESTION_ERROR:
    case types.GET_QUESTION_BY_ID_ERROR:
      return { error: error?.message, pending: false };

    default:
      return state;
  }
};

export { answersReducer as answers };