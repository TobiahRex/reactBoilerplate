import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import Actions, { ThingTypes } from '../Redux/ThingRedux';

function* worker() {
  yield put(Actions.getAllThings());
}

function* watcher() {
  for (;;) {
    yield* takeEvery(ThingTypes.APP_STARTUP, worker);
  }
}

export default watcher;
