import { put, call } from "redux-saga/effects";
import { getAnswersByQuestionService } from "../../api/answersApi";

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
