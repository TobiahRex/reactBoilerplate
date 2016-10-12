import { call, put } from 'redux-saga/effects';
import Actions from '../Redux/ThingRedux';
import handle from '../Services/Utility';

export default function* remove(api, action) {
  const response = yield call(() => api.removeThing(action.thingId));
  yield put(Actions.removeThingSuccess(handle(response)));
}
