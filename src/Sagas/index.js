import { takeLatest } from 'redux-saga';
import { getAllThings } from './GetAllThingsSaga';
// import Startup from './StartupSaga';
// import CreateThing from './CreateThingSaga';
// import EditThing from './EditThingSaga';
// import RemoveThing from './RemoveThingSaga';
import API from '../Services/API';
import { ThingTypes } from '../Redux/ThingRedux';

const api = API.createAPI();

export default function* rootSaga() {
  yield [takeLatest(ThingTypes.GET_ALL_THINGS, getAllThings, api)];
}
