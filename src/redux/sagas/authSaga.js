import { put, call } from "redux-saga/effects";

import * as types from "../actions";
import { registerUserService, loginUserService } from "../api/authApi";

export function* registerSaga(payload) {
  try {
    yield [put({ type: types.REGISTER_USER_PENDING })];

    const response = yield call(registerUserService, payload);

    yield [put({ type: types.REGISTER_USER_SUCCESS, response })];
  } catch (error) {
    yield put({ type: types.REGISTER_USER_ERROR, error });
  }
}

export function* loginSaga(payload) {
  try {
    yield [put({ type: types.LOGIN_USER_PENDING })];

    const response = yield call(loginUserService, payload);
    yield [put({ type: types.LOGIN_USER_SUCCESS, response })];
  } catch (error) {
    yield put({ type: types.LOGIN_USER_ERROR, error });
  }
}
