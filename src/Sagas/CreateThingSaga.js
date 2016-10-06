import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import Types from '../Actions/Types';
import Actions from '../Actions/Creators';
import API from '../API';

function* worker(action) {
  const thingToAdd = { name: action.thingName };
  const addedThing = yield API.addOne(thingToAdd);
  yield put(Actions.createThingSuccess(addedThing));
}

function* watcher() {
  for (;;) {
    yield* takeEvery(Types.CREATE_THING, worker);
  }
}

export default watcher;
