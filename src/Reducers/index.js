import { combineReducers } from 'redux';
import configureStore from '../Store/configureStore';
import rootSaga from '../Sagas/'
import things from './ThingReducer';

// const appReducer = combineReducers({
//   things,
// });
//
// const rootReducer = (state, action) => appReducer(state, action);
//
//
// export default rootReducer;

export default () => {
  const rootReducer = combineReducers({
    things,
  });
  return configureStore(rootReducer, rootSaga);
}
