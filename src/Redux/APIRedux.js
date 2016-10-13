import { createActions, createReducer } from 'reduxsauce';

// ------- Types & Creators ------- //

const { Types, Creators } = createActions({
  apiFail: ['error'],
  apiSuccess: null,
});

export const ApiTypes = Types;
export default Creators;
export const INITIAL_STATE = {
  error: null,
  success: null,
};

// ------- Response Actions ------- //

const success = () => ({
  error: null,
  success: true,
});

const fail = (state, { error }) => ({
  error,
  success: false,
});

const fetching = () => ({
  error: null,
  success: null,
});

// ------- create Reducer ------- //

export const apiReducer = createReducer(INITIAL_STATE, {
  [Types.API_FAIL]: fail,
  [Types.API_SUCCESS]: success,
});
