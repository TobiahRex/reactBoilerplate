import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import Types from '../Actions/Types';
import Actions from '../Actions/Creators';

function* worker() {
  yield put(Actions.getAllThings());
}

function* watcher() {
  for (;;) {
    yield* takeEvery(Types.APP_STARTUP, worker);
  }
}

export default watcher;
