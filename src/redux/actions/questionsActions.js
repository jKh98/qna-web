import * as types from "./index";

export const getQuestionsAction = (query = "") => ({
  type: types.GET_QUESTIONS,
  query,
});

export const getQuestionsByCategoryAction = (categoryId, query = "") => ({
  type: types.GET_QUESTIONS_BY_CATEGORY,
  categoryId,
  query,
});

export const addQuestionAction = (categoryId, question) => ({
  type: types.ADD_QUESTION,
  categoryId,
  question,
});
