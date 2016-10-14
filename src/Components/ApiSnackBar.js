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
      open: false,
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

  shouldComponentUpdate(nextProps) {
    console.log('this.state.error: ', this.state.error);
    console.log('this.state.fetching: ', this.state.fetching);
    console.log('nextProps.apiStatus.error: ', nextProps.apiStatus.error);
    console.log('nextProps.apiStatus.fetching: ', nextProps.apiStatus.fetching);

    const error = this.state.error;
    const fetching = this.state.fetching;
    const apiError = nextProps.apiStatus.error;
    const apiFetching = nextProps.apiStatus.fetching;

    // console.log('YO: ', !error && !fetching && !apiError && apiFetching);
    if (!error && !apiError && fetching && !apiFetching) {
      this.setState({
        message: "Database updated SUCCESSFULLY!",
        error: apiError,
        fetching: apiFetching,
        show: !this.state.show,
      });
      console.info('SET NEW STATE');
      return true;
    } else if (!error && apiError) {
      this.setState({
        message: "Database update FAILED!",
        error: apiError,
        fetching: apiFetching,
        show: !this.state.show,
      });
      console.warn('SET NEW STATE ');
      return true;
    }
    console.warn('nothing happening');
    return false;
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  };

  handleRequestClose() {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        <Snackbar
          open={this.state.show}
          message={this.state.message}
          autoHideDuration={4000}
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
