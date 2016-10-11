import React, { PropTypes, Component } from 'react';

export default class InputNewThing extends Component {
  constructor() {
    this.state = {
      newData: ''
    }
    this.inputProps = {
      type: 'text',
      onChange: (e) => this.onInputChange(e),
      value: this.state.newDate,
    }
  }

  submitNewThing = e => {
    e.preventDefault();
    this.props.createThing({ name: this.state.newData });
    this.setState({ newData: '' });
  }

  onInputChange = e => this.setState({ newData: e.target.value });

  render() {
    return ( <div>
        <form onSubmit={this.submitNewThing}>
          <input {...this.inputProps} required />
          <button type='submit' text='ADD' />
        </form>
      </div> )
  }
}

InputNewThing.propTypes = { createThing: PropTypes.func.isRequired }
