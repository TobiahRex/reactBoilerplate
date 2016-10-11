import toastr from 'toastr';

export default (response) => {
  if (response.problem) {
    toastr.error(response.problem, 'API Error');
    throw new Error('API Error: ', response.problem);
    return response.problem
  } else {
    toastr.success('API Success!');
    return response.data;
  }
};
