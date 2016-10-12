import React, { PropTypes, Component } from 'react';
import TextField from 'material-ui/TextField';

export default class InputNewThing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newData: '',
    };

    this.inputProps = {
      hintText: "Thing Name",
      type: "text",
      floatingLabelText: "New Name Input",
      onChange: e => this.onInputChange(e),
    };

    this.submitNewThing = this.submitNewThing.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  onInputChange(e) {
    this.setState({ newData: e.target.value });
  }

  submitNewThing(e) {
    e.preventDefault();
    this.props.createThing({ name: this.state.newData });
    this.setState({ newData: '' });
  }

  clearInput() {
    this.setState({ newData: '' });
  }

  render() {
    return (<div>
      <form onSubmit={this.submitNewThing}>
        <TextField {...this.inputProps} required />
        <button type="submit">ADD</button>
        <button onClick={this.clearInput} type="buttom">CLEAR</button>
      </form>
    </div>);
  }
}
// <input value={this.state.newData} {...this.inputProps} required />

InputNewThing.propTypes = { createThing: PropTypes.func.isRequired };
