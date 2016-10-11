import toastr from 'toastr';
import { call, put } from 'redux-saga/effects';
import Actions from '../Redux/ThingRedux';

export default function* create(api, action) {
  const thingToAdd = { name: action.thingName };
  const response = yield call(() => api.createThing(thingToAdd));
  console.log('response: ', response);
  if (response.ok) {
    toastr.success('API Success!');
    yield put(Actions.createThingSuccess(response.data));
  } else {
    toastr.error(response.problem, 'API Error');
    throw new Error('API Error: ', response.problem);
  }
}
