import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import Actions, { ThingTypes } from '../Redux/ThingRedux';
import API from '../Services/API';

// TODO: create addOne method to API;

function* worker(action) {
  const thingToAdd = { name: action.thingName };
  const addedThing = yield API.addOne(thingToAdd);
  yield put(Actions.createThingSuccess(addedThing));
}

function* watcher() {
  for (;;) {
    yield* takeEvery(ThingTypes.CREATE_THING, worker);
  }
}

export default watcher;
