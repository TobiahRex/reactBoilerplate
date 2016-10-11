import toastr from 'toastr';
import { call, put } from 'redux-saga/effects';
import Actions from '../Redux/ThingRedux';

export default function* getAll(api) {
  const response = yield call(api.getAllThings);
  console.log('response get all: ', response);
  if (response.ok) {
    toastr.success('API Success!');
    yield put(Actions.getAllThingsSuccess(response.data));
  } else {
    toastr.warning(response.problem, 'API Error');
    throw new Error('API Error: ', response.problem);
  }
}
