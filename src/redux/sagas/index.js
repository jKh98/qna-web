import { all } from "redux-saga/effects";
import { watchUserAuthentication, watchCategories } from "./watchers";

export function* rootSaga() {
  yield all([watchUserAuthentication(), watchCategories()]);
}
