import { call, put } from 'redux-saga/effects';
import Actions from '../Redux/ThingRedux';
// import API from '../Services/API';

// TODO: add getAllThings to API methods.
export default function* getAllThings(api) {
  const response = yield call(api.getAllThings);

  if (response.ok) {
    yield put(Actions.getAllThingsSuccess(response.data));
  } else {
    throw new Error('API Error: ', response.problem);
  }
}
//
// function* watcher(action, API) {
//   for (;;) {
//     yield* takeEvery(ThingTypes.GET_ALL_THINGS, worker);
//   }
// }
