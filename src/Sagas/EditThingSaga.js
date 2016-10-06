import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import API from '../API';
import Actions from '../Actions/Creators';
import Types from '../Actions/Types';

function* worker(action) {
  const newThing = yield API.editOne(action.editedThing);
  yield put(Actions.editThingSuccess(newThing));
}

function* watcher() {
  for (;;) {
    yield* takeEvery(Types.EDIT_THING, worker);
  }
}

export default watcher;
