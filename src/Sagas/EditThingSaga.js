import { call, put } from 'redux-saga/effects';
import Actions from '../Redux/ThingRedux';
import handle from '../Services/Utility';

export default function* edit(api, action) {
  const response = yield call(() => api.editThing(action.editedThing));
  yield put(Actions.editThingSuccess(handle(response)));
}
