import { createActions, createReducer } from 'reduxsauce';

// ------- Types & Creators ------- //

const { Types, Creators } = createActions({
  fetching: null,
  apiFail: ['error'],
  apiSuccess: null,
});

export const ApiTypes = Types;
export default Creators;
export const INITIAL_STATE = {
  fetching: null,
  count: null,
  error: null,
  success: null,
};

// ------- Response Actions ------- //

const success = state => ({
  fetching: false,
  count: state.fetching - 1,
  error: null,
  success: true,
});

const fail = (state, { error }) => ({
  fetching: false,
  count: state.fetching - 1,
  error,
  success: false,
});

const fetching = state => ({
  fetching: true,
  count: state.fetching + 1,
  error: null,
  success: null,
});

// ------- create Reducer ------- //

export const apiReducer = createReducer(INITIAL_STATE, {
  [Types.API_FAIL]: fail,
  [Types.API_SUCCESS]: success,
  [Types.FETCHING]: fetching,
});
