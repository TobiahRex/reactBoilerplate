import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';
import Actions from '../Actions/Creators';
import rootReducer from '../Reducers/';
import sagas from '../Sagas/';


export default () => {
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

  sagaMiddleware.run(sagas);

  store.dispatch(Actions.getAllThings());

  return store;
};
