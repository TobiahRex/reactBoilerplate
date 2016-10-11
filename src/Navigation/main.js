import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Things from '../Containers/Things';
import App from '../Components/App';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Things} />
  </Route>
);

/*
  Every component you bring into this file, comes in as a "Connect" function.

  This Connect function will "Connect" the mapStateToProps & the mapDispatchToProps, to a specified route path, and to a specified parent component by react router.  This parent component will be rendered as a funciton inside index.js.  Inside index.js, the Provider element will pass down store (state) to these parent components, whih will pass down the state to the mapping functions, which will cause a series of chain reactions at lower and lower levels until each component is finally given it's required information.
*/
