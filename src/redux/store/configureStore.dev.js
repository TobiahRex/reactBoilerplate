import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import { autoRehydrate } from 'redux-persist';
import { browserHistory } from 'react-router';
import { createLogger } from 'redux-logger';
import RehydrationServices from '../../services/utils/rehydrationServices';

import thingActions from '../thing';
import apiActions from '../api';

export default (rootReducer, rootSaga) => {
  const enhancers = [];
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
    routerMiddleware(browserHistory),
    createLogger(),
    sagaMiddleware,
  ];

  enhancers.push(
    autoRehydrate(),
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : _ => _,
  );

  const store = createStore(rootReducer, compose(...enhancers));
  RehydrationServices.updateReducers(store);
  const history = syncHistoryWithStore(browserHistory, store);
  sagaMiddleware.run(rootSaga);

  store.dispatch(apiActions.fetching());
  store.dispatch(thingActions.getAllThings());

  return {
    store,
    history,
  };
};
