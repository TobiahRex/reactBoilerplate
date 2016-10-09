import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import Types from '../Actions/Types';
import Actions from '../Actions/Creators';
import API from '../Store/API';

// worker saga
function* worker(action) {
  const removedThing = yield API.removeOne(action.thingId);
  yield put(Actions.removeThingSuccess(removedThing));
}

// watcher saga can be named to anything.
function* watcher() {
  for (;;) {
    yield* takeEvery(Types.REMOVE_THING, worker);
  }
}

export default watcher;
