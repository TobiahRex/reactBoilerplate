import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Things from '../Components/Things';
import App from '../Components/App';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Things} />
  </Route>
);
