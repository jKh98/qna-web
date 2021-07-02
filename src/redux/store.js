import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./reducers";
import { rootSaga } from "./sagas";

const store = () => {
  const sagaMiddleware = createSagaMiddleware();
  const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__?.();

  const candidateSession = localStorage.getItem("session");

  let storeConfig = createStore(
    rootReducer,
    { login: candidateSession ? JSON.parse(candidateSession) : {} },
    compose(applyMiddleware(sagaMiddleware), reduxDevTools)
  );

  storeConfig.subscribe(() => {
    localStorage.setItem(
      "session",
      JSON.stringify(storeConfig.getState().login)
    );
  });

  sagaMiddleware.run(rootSaga);

  return storeConfig;
};

export const token = (state) => state.login.token;

export { store };
