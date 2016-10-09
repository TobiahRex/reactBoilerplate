import { create } from 'apisauce';

const createAPI = (baseURL = 'http://localhost:3000/') => {
  const api = create({
    baseURL,
    'Content-Type': 'no-cache',
  });
  const getAll = () => api.get('api/things');
  const getOneThing = id => api.get(`api/things/${id}`);
  const addOne = thing => api.post('api/things', { thing });
  const removeOne = id => api.delete(`api/${id}`);
  const editOne = (id, newThing) => api.put(`api/${id}`, { thing: newThing });
  return {
    getAll,
    getOneThing,
    addOne,
    removeOne,
    editOne,
  };
};

export default { createAPI };
