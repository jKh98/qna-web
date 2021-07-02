import { takeLatest } from "redux-saga/effects";

import * as types from "../actions";
import { getUsersSaga } from "./usersSaga";
import { registerSaga, loginSaga } from "./authSaga";
import { getCategoryByIdSaga, getCategoriesSaga } from "./categoriesSaga";
import {
  addQuestionSaga,
  getQuestionByIdSaga,
  getQuestionsByCategorySaga,
  getQuestionsSaga,
} from "./questionsSaga";
import { addAnswerSaga, getAnswersByQuestionSaga } from "./answersSaga";

export function* watchUserAuthentication() {
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
}

export function* watchCategories() {
  yield takeLatest(types.GET_CATEGORIES, getCategoriesSaga);
  yield takeLatest(types.GET_CATEGORY_BY_ID, getCategoryByIdSaga);
}

export function* watchUsers() {
  yield takeLatest(types.GET_USERS, getUsersSaga);
}

export function* watchQuestions() {
  yield takeLatest(types.GET_QUESTIONS, getQuestionsSaga);
  yield takeLatest(types.GET_QUESTIONS_BY_CATEGORY, getQuestionsByCategorySaga);
  yield takeLatest(types.GET_QUESTION_BY_ID, getQuestionByIdSaga);
  yield takeLatest(types.ADD_QUESTION, addQuestionSaga);
}

export function* watchAnswers() {
  yield takeLatest(types.GET_ANSWERS_BY_QUESTION, getAnswersByQuestionSaga);
  yield takeLatest(types.ADD_ANSWER, addAnswerSaga);
}
