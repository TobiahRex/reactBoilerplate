import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import Actions, { ThingTypes } from '../Redux/ThingRedux';
import API from '../Services/API';

// TODO: add removeOne to API methods.

function* worker(action) {
  const removedThing = yield API.removeOne(action.thingId);
  yield put(Actions.removeThingSuccess(removedThing));
}

function* watcher() {
  for (;;) {
    yield* takeEvery(ThingTypes.REMOVE_THING, worker);
  }
}

export default watcher;
