import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./reducers";
import { rootSaga } from "./sagas";

const store = () => {
  const sagaMiddleware = createSagaMiddleware();
  const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__?.();

  let storeConfig = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware), reduxDevTools)
  );

  sagaMiddleware.run(rootSaga);

  return storeConfig;
};

export { store };
