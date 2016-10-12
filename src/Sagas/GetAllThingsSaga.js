import { call, put } from 'redux-saga/effects';
import Actions from '../Redux/ThingRedux';
import handle from '../Services/Utility';

export default function* getAll(api) {
  const response = yield call(() => api.getAllThings());
  yield put(Actions.getAllThingsSuccess(handle(response)));
}
