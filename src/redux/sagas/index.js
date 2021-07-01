import { all } from "redux-saga/effects";
import {
  watchUserAuthentication,
  watchCategories,
  watchQuestions,
  watchUsers,
} from "./watchers";

export function* rootSaga() {
  yield all([
    watchUserAuthentication(),
    watchCategories(),
    watchQuestions(),
    watchUsers(),
  ]);
}
