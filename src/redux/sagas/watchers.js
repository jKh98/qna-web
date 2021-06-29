import { takeLatest } from "redux-saga/effects";
import { registerSaga, loginSaga } from "./authSaga";

import * as types from "../actions";

export function* watchUserAuthentication() {
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
}
