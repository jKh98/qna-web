import { all } from "redux-saga/effects";
import {
  watchUserAuthentication,
  watchCategories,
  watchUsers,
} from "./watchers";

export function* rootSaga() {
  yield all([watchUserAuthentication(), watchCategories(), watchUsers()]);
}
