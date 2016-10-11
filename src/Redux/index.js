import { combineReducers } from 'redux';
import configureStore from './configureStore';
import rootSaga from '../Sagas/';
import { thingReducer } from '../Redux/ThingRedux';

// const appReducer = combineReducers({
//   things,
// });
//
// const rootReducer = (state, action) => appReducer(state, action);
//
//
// export default rootReducer;

export default () => {
  const things = thingReducer;
  const rootReducer = combineReducers({
    things,
  });
  return configureStore(rootReducer, rootSaga);
};
