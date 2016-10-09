import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';    // fires a worker function for every matching dispatched action.
import Types from '../Actions/Types';
import Actions from '../Actions/Creators';
import API from '../API';

function* worker() {
  const things = yield API.getAll();
  console.log('things: ', things);
  yield put(Actions.getAllThingsSuccess(things));
}

function* watcher() {
  for (;;) {
    yield* takeEvery(Types.GET_ALL_THINGS, worker);
  }
}

export default watcher;
