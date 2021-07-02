import { put, call, select } from "redux-saga/effects";

import * as types from "../actions";
import {
  getQuestionsService,
  getQuestionsByCategoryService,
  addQuestionService,
  getQuestionByIdService,
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

export function* getQuestionByIdSaga({ questionId }) {
  yield put({ type: types.QUESTIONS_PENDING });

  const { response, error } = yield call(getQuestionByIdService, questionId);
  if (response) {
    yield put({ type: types.GET_QUESTION_BY_ID_SUCCESS, response });
  } else {
    yield put({ type: types.GET_QUESTION_BY_ID_ERROR, error });
  }
}

export function* addQuestionSaga({ categoryId, question }) {
  yield put({ type: types.QUESTIONS_PENDING });

  const token = yield select((state) => state.login.token);

  const { response, error } = yield call(
    addQuestionService,
    categoryId,
    token,
    question
  );

  if (response) {
    yield put({ type: types.ADD_QUESTION_SUCCESS, response });
  } else {
    yield put({ type: types.ADD_QUESTION_ERROR, error });
  }
}
