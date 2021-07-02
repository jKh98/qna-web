import * as types from "./index";

export const getAnswersByQuestionAction = (questionId, query = "") => ({
  type: types.GET_ANSWERS_BY_QUESTION,
  questionId,
  query,
});
