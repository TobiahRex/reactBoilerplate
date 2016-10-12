import { combineReducers } from 'redux';
import configureStore from './configureStore';
import rootSaga from '../Sagas/';
import { thingReducer } from '../Redux/ThingRedux';

export default () => {
  const things = thingReducer;
  const rootReducer = combineReducers({
    things,
  });
  return configureStore(rootReducer, rootSaga);
};
