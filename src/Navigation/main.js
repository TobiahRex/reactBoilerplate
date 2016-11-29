import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../Containers/App';
import Things from '../Containers/Things';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Things} />
  </Route>
);

/*
  Every component brought into this file
  comes in as a "Connect" function.
  This Connect function will "Connect"
  the mapStateToProps & the mapDispatchToProps,
  to a specified route path,
  and to a specified parent component by react router.

  They are considered "Container" components,
  because they "contain" other components that DO NOT have dire routes.

  This Container/Parent component will be called as a funciton inside index.js.
  Inside index.js, the Provider element from 'react-redux',
  will pass down store (state) to these parent components via,
  the "<Router ... />" Component from react-router.
  This Router component will pass down the state to
  a series of mapping functions (other components),
  which will cause a series of chain reactions
  at lower and lower level components,
  until each component is finally given it's piece of state & action creators.

  Keep in mind that each component inherits the react-router link address,
  for any relative file path descriptions.
  To avoid this unwanted inheritance,
  start your relative file path address with a slash.
*/
