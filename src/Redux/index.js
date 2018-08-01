import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import configureStore from './store';
import rootSaga from '../sagas/';

// ------- Reducer Imports ------- //

import { thingReducer as things } from '../redux/thing/';
import { apiReducer as api } from '../redux/api/';

export default () => {
  const rootReducer = combineReducers({
    api,
    things,
    routing,
  });

  return configureStore(rootReducer, rootSaga);
};
