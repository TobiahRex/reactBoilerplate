import { fork } from 'redux-saga/effects';
import Startup from './StartupSaga';
import GetAllThings from './GetAllThingsSaga';
import CreateThing from './CreateThingSaga';
import EditThing from './EditThingSaga';
import RemoveThing from './RemoveThingSaga';

export default function* rootSaga() {
  yield fork(Startup);
  yield fork(GetAllThings);
  yield fork(CreateThing);
  yield fork(EditThing);
  yield fork(RemoveThing);
}
