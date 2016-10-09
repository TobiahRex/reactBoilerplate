import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import API from '../API';
import Actions, { ThingTypes } from '../Redux/ThingRedux';

function* worker(action) {
  const newThing = yield API.editOne(action.editedThing);
  yield put(Actions.editThingSuccess(newThing));
}

function* watcher() {
  for (;;) {
    yield* takeEvery(ThingTypes.EDIT_THING, worker);
  }
}

export default watcher;
