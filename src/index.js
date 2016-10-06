import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import configureStore from './Store/configureStore';
import routes from './Navigation/main';

const store = configureStore();

render(
  <Provider store={store} >
    <Router history={browserHistory} routes={routes} />
  </Provider >,
  document.getElementById('app')
);
