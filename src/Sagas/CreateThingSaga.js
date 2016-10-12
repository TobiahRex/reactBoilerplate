import { call, put } from 'redux-saga/effects';
import Actions from '../Redux/ThingRedux';
import handle from '../Services/Utility';

export default function* create(api, action) {
  const response = yield call(() => api.createThing(action.thingName));
  yield put(Actions.createThingSuccess(handle(response)));
}
