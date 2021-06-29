import { put, call } from "redux-saga/effects";

import * as types from "../actions";
import { registerUserService, loginUserService } from "../../api/authApi";

export function* registerSaga(payload) {
  yield put({ type: types.REGISTER_USER_PENDING });

  const { response, error } = yield call(registerUserService, payload);

  if (response) {
    yield put({ type: types.REGISTER_USER_SUCCESS, response });
  } else {
    yield put({ type: types.REGISTER_USER_ERROR, error });
  }
}

export function* loginSaga(payload) {
  yield put({ type: types.LOGIN_USER_PENDING });

  const { response, error } = yield call(loginUserService, payload);

  if (response) {
    yield put({ type: types.LOGIN_USER_SUCCESS, response });
  } else {
    yield put({ type: types.LOGIN_USER_ERROR, error });
  }
}
