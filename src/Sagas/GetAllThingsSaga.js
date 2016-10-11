import toastr from 'toastr';
import { call, put } from 'redux-saga/effects';
import Actions from '../Redux/ThingRedux';

export default function* getAllThings(api) {
  const response = yield call(api.getAllThings);

  if (response.ok) {
    toastr.success('API Success!');
    yield put(Actions.getAllThingsSuccess(response.data));
  } else {
    toastr.warning(response.problem, 'API Error');
    throw new Error('API Error: ', response.problem);
  }
}
