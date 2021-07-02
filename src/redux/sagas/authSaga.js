import { put, call } from "redux-saga/effects";

import * as types from "../actions";
import { registerUserService, loginUserService } from "../../api/authApi";

export function* registerSaga({ user }) {
  yield put({ type: types.REGISTER_USER_PENDING });

  const { response, error } = yield call(registerUserService, user);

  if (response) {
    yield put({ type: types.REGISTER_USER_SUCCESS, response });
  } else {
    yield put({ type: types.REGISTER_USER_ERROR, error });
  }
}

export function* loginSaga({ credentials }) {
  yield put({ type: types.LOGIN_USER_PENDING });

  const { response, error } = yield call(loginUserService, credentials);

  if (response) {
    yield put({ type: types.LOGIN_USER_SUCCESS, response });
  } else {
    yield put({ type: types.LOGIN_USER_ERROR, error });
  }
}
