import { call, put } from 'redux-saga/effects';
import thingActions from '../../Redux/ThingRedux';
import apiActions from '../../Redux/ApiRedux';

export default function* edit(api, action) {
  const response = yield call(() => api.editThing(action.editedThing));
  if (response.ok) {
    yield [put(thingActions.editThingSuccess(response.data)),
    put(apiActions.apiSuccess())];
  } else {
    yield put(apiActions.apiFail(response.problem));
  }
}
