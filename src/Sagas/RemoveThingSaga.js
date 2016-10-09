import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import Actions, { ThingTypes } from '../Redux/ThingRedux';
import API from '../Services/API';

// worker saga
function* worker(action) {
  const removedThing = yield API.removeOne(action.thingId);
  yield put(Actions.removeThingSuccess(removedThing));
}

// watcher saga can be named to anything.
function* watcher() {
  for (;;) {
    yield* takeEvery(ThingTypes.REMOVE_THING, worker);
  }
}

export default watcher;
