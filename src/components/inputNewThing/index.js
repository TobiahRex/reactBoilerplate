import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField, RaisedButton } from 'material-ui';
import styles from './assets/inputStyles';

export default class InputNewThing extends Component {
  static propTypes = {
    fetching: PropTypes.func.isRequired,
    createThing: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      newData: '',
    };
  }

  onInputChange = e => this.setState({ newData: e.target.value });

  submitNewThing = (e) => {
    e.preventDefault();
    this.setState({ newData: '' });
    this.props.fetching();
    this.props.createThing({ name: this.state.newData });
  }

  clearInput = () => {
    this.setState({ newData: '' });
  }

  render() {
    return (<div>
      <form onSubmit={this.submitNewThing}>
        <TextField
          type={'text'}
          value={this.state.newData}
          hintText={'Thing Name'}
          onChange={this.onInputChange}
          floatingLabelText={'New Thing Input'}
          required
        />
        <RaisedButton
          style={styles.lftMargin}
          primary
          label={'add'}
          type={'submit'}
        />
        <RaisedButton
          style={styles.lftMargin}
          secondary
          label={'clear'}
          type={'button'}
          onClick={this.clearInput}
        />
      </form>
    </div>);
  }
}
