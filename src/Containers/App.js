import React, { PropTypes } from 'react';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import { AppBar } from 'material-ui';
import SnackBar from '../Components/ApiSnackBar';

const App = ({ children }) => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)} >
    <div>
      <AppBar title="React Template" />
      {children}
    </div>
  </MuiThemeProvider>
);

App.propTypes = {
  children: PropTypes.object, //eslint-disable-line
}

export default App;
