import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Perf from 'react-addons-perf';
import { Router } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import createStore from './redux';
import routes from './navigation/main';
import './styles/style.scss';

window.Perf = Perf;
injectTapEventPlugin();
const { store, history } = createStore();

render(
  <Provider store={store} >
    <Router
      history={history}
      routes={routes}
    />
  </Provider >
  ,
  document.getElementById('app')
);
