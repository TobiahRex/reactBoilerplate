import { takeLatest } from 'redux-saga';
// ----- API Sagas ----- //
import Fetching from './ApiSagas/Fetching';
import ApiSuccess from './ApiSagas/Success';
import ApiFail from './ApiSagas/Fail';
import { ApiTypes } from '../Redux/ApiRedux';
// ----- Thing Sagas ----- //
import GetAllThings from './ThingSagas/GetAllThings';
import CreateThing from './ThingSagas/CreateThing';
import EditThing from './ThingSagas/EditThing';
import RemoveThing from './ThingSagas/RemoveThing';
import { ThingTypes } from '../Redux/ThingRedux';


import API from '../Services/API';

const api = API.createAPI();

export default function* rootSaga() {
  yield [takeLatest(ThingTypes.GET_ALL_THINGS, GetAllThings, api),
  takeLatest(ThingTypes.CREATE_THING, CreateThing, api),
  takeLatest(ThingTypes.REMOVE_THING, RemoveThing, api),
  takeLatest(ThingTypes.EDIT_THING, EditThing, api),
  takeLatest(ApiTypes.FETCHING, Fetching),
  takeLatest(ApiTypes.API_FAIL, ApiFail),
  takeLatest(ApiTypes.API_SUCCESS, ApiSuccess)];
}
