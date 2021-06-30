import { takeLatest } from "redux-saga/effects";

import * as types from "../actions";
import { registerSaga, loginSaga } from "./authSaga";
import { getCategoriesSaga } from "./categoriesSaga";
import { getUsersSaga } from "./usersSaga";

export function* watchUserAuthentication() {
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
}

export function* watchCategories() {
  yield takeLatest(types.GET_CATEGORIES, getCategoriesSaga);
}

export function* watchUsers() {
  yield takeLatest(types.GET_USERS, getUsersSaga);
}
