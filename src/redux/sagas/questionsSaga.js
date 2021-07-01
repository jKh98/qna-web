import { put, call } from "redux-saga/effects";

import * as types from "../actions";
import {
  getQuestionsService,
  getQuestionsByCategoryService,
} from "../../api/questionsApi";

export function* getQuestionsSaga({ query }) {
  yield put({ type: types.QUESTIONS_PENDING });

  const { response, error } = yield call(getQuestionsService, query);
  if (response) {
    yield put({ type: types.GET_QUESTIONS_SUCCESS, response });
  } else {
    yield put({ type: types.GET_QUESTIONS_ERROR, error });
  }
}

export function* getQuestionsByCategorySaga({ categoryId, query }) {
  yield put({ type: types.QUESTIONS_PENDING });

  const { response, error } = yield call(
    getQuestionsByCategoryService,
    categoryId,
    query
  );
  if (response) {
    yield put({ type: types.GET_QUESTIONS_BY_CATEGORY_SUCCESS, response });
  } else {
    yield put({ type: types.GET_QUESTIONS_BY_CATEGORY_ERROR, error });
  }
}
