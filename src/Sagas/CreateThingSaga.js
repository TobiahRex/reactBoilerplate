import { put, call } from 'redux-saga/effects';
import Actions from '../Redux/ThingRedux';

export default function* createThing(api, action) {
  console.log('api: ', api, 'action: ', action);
  const thingToAdd = { name: action.thingName };
  const response = yield call(() => api.createThing(thingToAdd));

  if (response.ok) {
    yield put(Actions.createThingSuccess(response.data));
  } else {
    throw new Error('API Error: ', response.problem);
  }
}
