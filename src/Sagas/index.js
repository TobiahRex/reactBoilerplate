import { fork } from 'redux-saga/effects';
import Startup from './StartupSaga';
import GetAllThings from './GetAllThingsSaga';
import CreateThing from './CreateThingSaga';
import EditThing from './EditThingSaga';
import RemoveThing from './RemoveThingSaga';

export default function* rootSaga() {
  yield [fork(Startup),
    fork(GetAllThings),
    fork(CreateThing),
    fork(EditThing),
    fork(RemoveThing)]
}
