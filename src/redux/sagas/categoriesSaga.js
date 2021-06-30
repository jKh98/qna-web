import { put, call } from "redux-saga/effects";

import * as types from "../actions";
import { getCategoriesService } from "../../api/categoriesApi";

export function* getCategoriesSaga({ query }) {
  yield put({ type: types.CATEGORIES_PENDING });

  const { response, error } = yield call(getCategoriesService, query);
  if (response) {
    yield put({ type: types.GET_CATEGORIES_SUCCESS, response });
  } else {
    yield put({ type: types.GET_CATEGORIES_ERROR, error });
  }
}