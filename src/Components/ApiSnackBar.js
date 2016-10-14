// import React, { PropTypes, Component } from 'react';
// import { connect } from 'react-redux';
// import { SnackBar } from 'material-ui';
//
// class muiToast extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       message: ''
//     }
//   }
//
//   render() {
//     console.info('this.props: ', this.props);
//     return (
//       <SnackBar
//         open={apiStatus.success || false}
//         message={"API Successfull"}
//         autoHideDuration={4000}
//         />
//     );
//   }
// }
//
// muiToast.propTypes = {
//   show: PropTypes.bool,
//   message: PropTypes.string,
// };
//
// const mapStateToProps = state => ({
//   show: state.api,
// });
//
// export default connect(mapStateToProps, null)(muiToast);

import React, { PropTypes } from 'react';
import Snackbar from 'material-ui/Snackbar';
// import RaisedButton from 'material-ui/RaisedButton';

export default class muiToast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      message: "",
      // api status
      error: '',
      fetching: '',
    };
    // ----- Bindings ----- //
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  componentWillMount() {
    this.setState({
      error: this.props.apiStatus.error,
      fetching: this.props.apiStatus.fetching,
    });
  }

  componentWillReceiveProps(nextProps) {
    const error = this.state.error;
    console.log('apiFetching', apiFetching);
    const fetching = this.state.fetching;
    console.log('apiFetching', apiFetching);
    const apiError = nextProps.apiStatus.error;
    console.log('apiFetching', apiFetching);
    const apiFetching = nextProps.apiStatus.fetching;
    console.log('apiFetching', apiFetching);

    if (!error && !apiError && fetching && !apiFetching) {
      console.log('!error && !apiError && fetching && !apiFetching', !error && !apiError && fetching && !apiFetching);
      this.setState({
        message: "Database updated SUCCESSFULLY!",
        error: apiError,
        fetching: apiFetching,
        show: !this.state.show,
      });
      return true;
    } else if (!error && apiError) {
      this.setState({
        message: "Database update FAILED!",
        error: apiError,
        fetching: apiFetching,
        show: !this.state.show,
      });
      return true;
    }
    console.warn('nothing happening');
    return false;
  }

  handleTouchTap() {
    this.setState({
      show: true,
    });
  };

  handleRequestClose() {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <div>
        <Snackbar
          open={this.state.show}
          message={this.state.message}
          autoHideDuration={2000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

muiToast.propTypes = {
  apiError: PropTypes.bool,
  apiFetching: PropTypes.bool,
};
