import * as types from "./index";

export const getAnswersByQuestionAction = (questionId, query = "") => ({
  type: types.GET_ANSWERS_BY_QUESTION,
  questionId,
  query,
});

export const addAnswerAction = (questionId, answer) => ({
  type: types.ADD_ANSWER,
  questionId,
  answer,
});
