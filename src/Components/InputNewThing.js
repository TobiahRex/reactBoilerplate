import React, { PropTypes, Component } from 'react';
import { TextField, RaisedButton } from 'material-ui';
import styles from './Styles/InputStyles';

export default class InputNewThing extends Component {
  constructor(props) {
    super(props);
    // --- State --- //
    this.state = {
      newData: '',
    };

    // --- Props --- //
    this.tfProps = {
      hintText: "Thing Name",
      type: "text",
      floatingLabelText: "New Name Input",
      onChange: e => this.onInputChange(e),
      required: true,
    };
    this.rbProps1 = {
      style: styles.lftMargin,
      primary: true,
      label: "ADD",
      type: "submit"
    };
    this.rbProps2 = {
      style: styles.lftMargin,
      secondary: true,
      label: "CLEAR",
      type: "button",
      onClick: () => this.clearInput()
    };

    // --- Bindings --- //
    this.submitNewThing = this.submitNewThing.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  // ------------ staticMethods ------------ //
  onInputChange(e) {
    this.setState({ newData: e.target.value });
  }

  submitNewThing(e) {
    e.preventDefault();
    this.setState({ newData: '' });
    this.props.createThing({ name: this.state.newData });
  }

  clearInput() {
    this.setState({ newData: '' });
  }

  // ------------ lifeCycle ------------ //

  // ------------ render ------------ //
  render() {
    return (<div>
      <form onSubmit={this.submitNewThing}>
        <TextField {...this.tfProps} value={this.state.newData} />
        <RaisedButton {...this.rbProps1} />
        <RaisedButton {...this.rbProps2} />
      </form>
    </div>);
  }
}

InputNewThing.propTypes = { createThing: PropTypes.func.isRequired };
