import React, { PropTypes } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

const App = ({ children }) => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)} >
    <div>
      <AppBar title="React Template" />
      {children}
    </div>
  </MuiThemeProvider>
);

App.propTypes = {
  children: PropTypes.object.isRequired, //  eslint-disable-line react/forbid-prop-types
};

export default App;
