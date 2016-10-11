import toastr from 'toastr';
import { call, put } from 'redux-saga/effects';
import Actions from '../Redux/ThingRedux';

export default function* editThing(action, api) {
  const response = yield call(() => api.editThing(action.editedThing));

  if (response.ok) {
    toastr.success('API Success!');
    yield put(Actions.editThingSuccess(response.data));
  } else {
    toastr.error(response.problem, 'API Error');
    throw new Error('API Error: ', response.problem);
  }
}
