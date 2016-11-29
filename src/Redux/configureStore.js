import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';
import Actions from '../Redux/ThingRedux';
import apiActions from '../Redux/ApiRedux';

export default (rootReducer, rootSaga) => {
  const enhancers = [];
  const middlewares = [];

  const sagaMiddleware = createSagaMiddleware();
  middlewares.push(sagaMiddleware);
  middlewares.push(createLogger());

  enhancers.push(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );

  const store = createStore(rootReducer, compose(...enhancers));
  sagaMiddleware.run(rootSaga);

  store.dispatch(apiActions.fetching());
  store.dispatch(Actions.getAllThings());

  return store;
};

/* Store Object
  store: {
    dispatch: (action) =>
    getState: () =>
    replaceReducer: (n) =>
    subscribe: subscribe(listener) =>
  }
*/
