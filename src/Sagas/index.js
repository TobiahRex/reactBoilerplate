import { takeLatest } from 'redux-saga';
import GetAllThings from './GetAllThingsSaga';
import CreateThing from './CreateThingSaga';
// import Startup from './StartupSaga';
// import EditThing from './EditThingSaga';
// import RemoveThing from './RemoveThingSaga';
import API from '../Services/API';
import { ThingTypes } from '../Redux/ThingRedux';

console.log('ThingTypes: ', ThingTypes, CreateThing);

const api = API.createAPI();

export default function* rootSaga() {
  yield [takeLatest(ThingTypes.GET_ALL_THINGS, GetAllThings, api),
  takeLatest(ThingTypes.CREATE_THING, CreateThing, api)];
}
