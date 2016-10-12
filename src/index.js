import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import injectTapEventPlugin from 'react-tap-event-plugin';

import createStore from './Redux/index';
import routes from './Navigation/main';

injectTapEventPlugin();
const store = createStore();

render(
  <Provider store={store} >
    <Router history={browserHistory} routes={routes} />
  </Provider >
  ,
  document.getElementById('app')
);


/*
routes = an Object that has a property calls "props".
This "props" property is an object.
It has a property called "component" which is a function.
This function is called "App".
It has another property called "path".
This has a value of "/".

To summarize, routes, is an object that contains all the react router,
routes, specified in the Navigation/main.js folder.
It specifies components as functions, and their respective paths values.
*/
