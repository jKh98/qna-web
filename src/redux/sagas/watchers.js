import { takeLatest } from "redux-saga/effects";

import * as types from "../actions";
import { getCategoriesSaga } from "./categoriesSaga";
import { registerSaga, loginSaga } from "./authSaga";

export function* watchUserAuthentication() {
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
}

export function* watchCategories() {
  yield takeLatest(types.GET_CATEGORIES, getCategoriesSaga);
}
