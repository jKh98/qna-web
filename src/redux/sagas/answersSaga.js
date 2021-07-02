import { put, call, select } from "redux-saga/effects";

import {
  addAnswerService,
  getAnswersByQuestionService,
} from "../../api/answersApi";

import * as types from "../actions";

export function* getAnswersByQuestionSaga({ questionId, query }) {
  yield put({ type: types.ANSWERS_PENDING });

  const { response, error } = yield call(
    getAnswersByQuestionService,
    questionId,
    query
  );

  if (response) {
    yield put({ type: types.GET_ANSWERS_BY_QUESTION_SUCCESS, response });
  } else {
    yield put({ type: types.GET_ANSWERS_BY_QUESTION_ERROR, error });
  }
}

export function* addAnswerSaga({ questionId, answer }) {
  yield put({ type: types.ANSWERS_PENDING });

  const token = yield select((state) => state.login.token);

  const { response, error } = yield call(
    addAnswerService,
    questionId,
    answer,
    token
  );

  if (response) {
    yield put({ type: types.ADD_ANSWER_SUCCESS, response });
  } else {
    yield put({ type: types.ADD_ANSWER_ERROR, error });
  }
}
