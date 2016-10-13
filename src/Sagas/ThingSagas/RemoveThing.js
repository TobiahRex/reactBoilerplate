import { call, put } from 'redux-saga/effects';
import thingActions from '../../Redux/ThingRedux';
import apiActions from '../../Redux/ApiRedux';

export default function* remove(api, action) {
  const response = yield call(() => api.removeThing(action.thingId));
  if (response.ok) {
    yield [put(thingActions.removeThingSuccess(response.data)),
    put(apiActions.apiSuccess())];
  } else {
    yield put(apiActions.apiFail(response.problem));
  }
}
