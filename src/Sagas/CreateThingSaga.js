import toastr from 'toastr';
import { put, call } from 'redux-saga/effects';
import Actions from '../Redux/ThingRedux';

export default function* createThing(api, action) {
  const thingToAdd = { name: action.thingName };
  const response = yield call(() => api.createThing(thingToAdd));

  if (response.ok) {
    toastr.success('API Success!');
    yield put(Actions.createThingSuccess(response.data));
  } else {
    toastr.error(response.problem, 'API Error');
    throw new Error('API Error: ', response.problem);
  }
}
