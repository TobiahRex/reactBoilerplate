import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Snackbar from 'material-ui/Snackbar';

const { objectOf, any } = PropTypes;

export default class apiSnackBar extends Component {
  static propTypes = { apiStatus: objectOf(any).isRequired };
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      message: '',
      error: props.apiStatus.error,
      fetching: props.apiStatus.fetching,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { error, fetching } = this.state;
    const { apiError, apiFetching } = nextProps.apiStatus;

    if (!error && fetching && !apiError && !apiFetching) {
      // If fetching was successfully completed
      this.setState({
        message: 'Database updated SUCCESSFULLY!',
        error: false,
        fetching: false,
        show: true,
      });
      return true;
    } else if (!apiError && apiFetching) {
      // If we just started fetching
      this.setState({
        message: 'API Request in Progress',
        error: false,
        fetching: true,
        show: true,
      });
      return true;
    } else if (!error && apiError) {
      // if fetching yielded an error
      this.setState({
        message: 'Database update FAILED!',
        error: true,
        fetching: false,
        show: true,
      });
      return true;
    }
    return true;
  }

  onRequestClose = () => this.setState({ show: false });

  render() {
    return (
      <div>
        <Snackbar
          open={this.state.show}
          message={this.state.message}
          autoHideDuration={3000}
          onRequestClose={this.onRequestClose}
        />
      </div>
    );
  }
}
