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
//
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

  componentWillReceiveProps (nextProps) {
    const error = this.state.error;
    const fetching = this.state.fetching;
    const apiError = nextProps.apiStatus.error;
    const apiFetching = nextProps.apiStatus.fetching;

    if (!error && !apiError && fetching && !apiFetching) {
      this.setState({
        message: "Database updated SUCCESSFULLY!",
        error: apiError,
        fetching: apiFetching,
        show: true,
      });
      return true;
    } else if (!apiError && apiFetching) {
      this.setState({
        message: "API Request in Progress",
        error: false,
        fetching: true,
        show: true,
      });
      return true;
    } else if (!error && apiError) {
      this.setState({
        message: "Database update FAILED!",
        error: true,
        fetching: false,
        show: true,
      });
      return true;
    }
    return true;
  }

  handleTouchTap() {
    this.setState({
      show: true,
    });
  }

  handleRequestClose() {
    this.setState({
      show: false,
    });
  }

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
  apiStatus: PropTypes.object, // eslint-disable-line
};
