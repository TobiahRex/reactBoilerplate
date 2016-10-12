import React, { PropTypes, Component } from 'react';

export default class InputNewThing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newData: '',
    };

    this.inputProps = {
      type: 'text',
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
        <input value={this.state.newData} {...this.inputProps} required />
        <button type="submit">ADD</button>
        <button onClick={this.clearInput} type="buttom">CLEAR</button>
      </form>
    </div>);
  }
}

InputNewThing.propTypes = { createThing: PropTypes.func.isRequired };
