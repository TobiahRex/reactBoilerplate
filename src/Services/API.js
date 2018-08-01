/* eslint-disable no-console */
import { create } from 'apisauce';

const {
  NODE_ENV,
  BASE_URL,
  DEPLOY_URL,
} = process.env;

function createAPI() {
  const api = create({
    baseURL: NODE_ENV === 'production' ? DEPLOY_URL : BASE_URL,
    headers: {
      'Cache-Control': 'no-cache',
    },
    credentials: 'omit',
  });

  const getAllThings = () => api.get('api/things/');

  const createThing = ({ name }) => api.post('api/things', { name });

  const removeThing = id => api.delete(`api/things/${id}`);

  const editThing = ({ name, _id }) => api.put(`api/things/${_id}`, { name });

  return {
    editThing,
    createThing,
    removeThing,
    getAllThings,
  };
}

export default { createAPI };
