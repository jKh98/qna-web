import { put, call } from "redux-saga/effects";

import * as types from "../actions";
import {
  getCategoriesService,
  getCategorybyIdService,
} from "../../api/categoriesApi";

export function* getCategoriesSaga({ query }) {
  yield put({ type: types.CATEGORIES_PENDING });

  const { response, error } = yield call(getCategoriesService, query);
  if (response) {
    yield put({ type: types.GET_CATEGORIES_SUCCESS, response });
  } else {
    yield put({ type: types.GET_CATEGORIES_ERROR, error });
  }
}

export function* getCategoryByIdSaga({ id }) {
  yield put({ type: types.CATEGORIES_PENDING });

  const { response, error } = yield call(getCategorybyIdService, id);
  if (response) {
    yield put({ type: types.GET_CATEGORY_BY_ID_SUCCESS, response });
  } else {
    yield put({ type: types.GET_CATEGORY_BY_ID_ERROR, error });
  }
}
