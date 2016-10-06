import { combineReducers } from 'redux';
import things from './ThingReducer';

const appReducer = combineReducers({
  things,
});

const rootReducer = (state, action) =>
  appReducer(state, action);


export default rootReducer;
