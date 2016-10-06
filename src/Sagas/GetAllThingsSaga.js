import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import Types from '../Actions/Types';
import Actions from '../Actions/Creators';
import API from '../API';

function* worker() {
  const things = yield API.getAll();
  yield put(Actions.getAllThingsSuccess(things));
}

function* watcher() {
  for (;;) {
    yield* takeEvery(Types.GET_ALL_THINGS, worker);
  }
}

export default watcher;
