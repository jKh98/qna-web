import { put, call } from "redux-saga/effects";

import * as types from "../actions";
import { getUsersService } from "../../api/usersApi";

export function* getUsersSaga({ query }) {
  yield put({ type: types.USERS_PENDING });

  const { response, error } = yield call(getUsersService, query);
  if (response) {
    yield put({ type: types.GET_USERS_SUCCESS, response });
  } else {
    yield put({ type: types.GET_USERS_ERROR, error });
  }
}
