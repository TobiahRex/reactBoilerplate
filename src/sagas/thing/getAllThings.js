import { call, put, all } from 'redux-saga/effects';
import thingActions from '../../redux/thing';
import apiActions from '../../redux/api';

export default function* getAll(api) {
  const response = yield call(() => api.getAllThings());

  if (response.ok) {
    yield all([
      put(thingActions.getAllThingsSuccess(response.data)),
      put(apiActions.apiSuccess()),
    ]);
  } else {
    yield put(apiActions.apiFail(response.problem));
  }
}
