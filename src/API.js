import { post, get, ajax } from 'jquery';
import toastr from 'toastr';

const API = {};

API.getAll = () =>
  get({
    url: '/api/things',
  })
  .then(res => res)
  .catch(toastr.warning);

API.addOne = thing =>
  post({
    url: '/api/things',
    data: thing,
  })
  .then(res => res)
  .catch(toastr.warning);

API.removeOne = thingId =>
  ajax({
    method: 'DELETE',
    url: `/api/things/${thingId}`,
  })
  .then(res => res)
  .catch(toastr.warning);

API.editOne = thing =>
  ajax({
    method: 'PUT',
    url: `/api/things/${thing._id}`,
    data: thing,
  })
  .then(res => res)
  .catch(toastr.warning);

export default API;
