import { all } from "redux-saga/effects";
import {
  watchUserAuthentication,
  watchCategories,
  watchQuestions,
  watchUsers,
  watchAnswers,
} from "./watchers";

export function* rootSaga() {
  yield all([
    watchUserAuthentication(),
    watchCategories(),
    watchQuestions(),
    watchAnswers(),
    watchUsers(),
  ]);
}
