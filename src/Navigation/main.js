import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../App/';
import Things from '../containers/things/';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Things} />
  </Route>
);
