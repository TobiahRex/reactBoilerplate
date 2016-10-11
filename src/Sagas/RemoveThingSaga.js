import toastr from 'toastr';
import { call, put } from 'redux-saga/effects';
import Actions from '../Redux/ThingRedux';

export default function* remove(api, action) {
  const response = yield call(() => api.removeThing(action.thingId));
  console.log('remove response: ', response);
  
  if (response.ok) {
    toastr.success('API Success!');
    yield put(Actions.removeThingSuccess(response.data));
  } else {
    toastr.error(response.problem, 'API Error.');
    throw new Error('API Problem', response.problem);
  }
}
