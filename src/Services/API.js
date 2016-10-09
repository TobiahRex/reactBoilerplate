import { create } from 'apisauce';
// a library to wrap and simplify api calls


// our "constructor"
const createAPI = (baseURL = 'http://somebase.com/') => {
  //  STEP 1: Create and configure an apisauce-based api object.
  const api = create({
    baseURL,    // base URL is read from the "constructor"
    headers: {  // here are some default headers
      'Cache-Control': 'no-cache',
    },
  });
  /* STEP 2: Assign API key to all requests (if desired)
  // ---------- Example: Force OpenWeather API Key on all requests
  api.addRequestTransform((request) => {
  const reqObj = request;
  reqObj.params.APPID = '0e44183e8d1018fc92eb3307d885379c';  });
  */

  /* STEP 3: Add development notification of response object. (if desired)
  const BUILD = process.env.NODE || 'development';
  if (BUILD === 'development') {
    const monitor = response => console.info('API RESPONSE: ', response);
    api.addMonitor(monitor);
  }
  */

  /* STEP 4:  Create API methods...
  Define some functions that call the api.
  The goal is to provide a thin wrapper of the api layer
  by providing nicer feeling functions
  rather than "get", "post" and friends.

  Keep in mind that,
  sometimes specific actions need to be take on `403` or `401`, etc.

  Since we can't hide from that,
  we embrace it by getting out of the way at this level.

  in the below example, the 'weather' will be added to the end of the base url.
  So the base URL is equal to http://somebase.com/weather

  the object we pass in, is that params object for the get method.
  It will be added as `http://somebase.com/weather?q=${city}`
  */
  const getCity = city => api.get('weather', { q: city });

  /* STEP 5 Return back an obj of methods...
  These will be considered our "api interface".
  Most of the time it'll be just the list of all the methods in step 4.

  Notice we're not returning back the `api` created in step 1?
  That's because it is scoped privately.
  This is one way to create truly private scoped goodies in JavaScript.
  */
  return {
    getCity,  // a list of the API functions from step 4
  };
};

// let's return back our create method as the default.
export default { createAPI };
