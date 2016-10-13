import React, { PropTypes } from 'react';
import { SnackBar } from 'material-ui';

const Snackbar = ({ show, message }) => (
  <Snackbar
    open={show || false}
    message={message}
    autoHideDuration={4000}
  />
);

SnackBar.propTypes = {
  show: PropTypes.bool,
  message: PropTypes.string,
};

export default Snackbar;
