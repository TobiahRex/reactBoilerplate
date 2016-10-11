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
      value: this.state.newDate,
    };

    this.submitNewThing = this.submitNewThing.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) { this.setState({ newData: e.target.value }); }

  submitNewThing(e) {
    e.preventDefault();
    this.props.createThing({ name: this.state.newData });
    this.setState({ newData: '' });
  }

  render() {
    return (<div>
      <form onSubmit={this.submitNewThing}>
        <input {...this.inputProps} required />
        <button type="subit">ADD</button>
      </form>
    </div>);
  }
}

InputNewThing.propTypes = { createThing: PropTypes.func.isRequired };
