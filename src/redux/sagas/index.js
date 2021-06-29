import { fork } from "redux-saga/effects";
import { watchUserAuthentication } from "./watchers";

export function* rootSaga() {
  yield fork(watchUserAuthentication);
}
